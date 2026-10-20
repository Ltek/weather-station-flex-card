/* weather-station-flex-card 2026.10.20.10 — https://github.com/Ltek/weather-station-flex-card */
var JV=Object.create;var h6=Object.defineProperty;var vi=Object.getOwnPropertyDescriptor;var ts=Object.getOwnPropertyNames;var es=Object.getPrototypeOf,rs=Object.prototype.hasOwnProperty;var is=(r,t,e)=>t in r?h6(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var xi=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var os=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ts(t))!rs.call(r,o)&&o!==e&&h6(r,o,{get:()=>t[o],enumerable:!(i=vi(t,o))||i.enumerable});return r};var x4=(r,t,e)=>(e=r!=null?JV(es(r)):{},os(t||!r||!r.__esModule?h6(e,"default",{value:r,enumerable:!0}):e,r));var Q=(r,t,e,i)=>{for(var o=i>1?void 0:i?vi(t,e):t,a=r.length-1,H;a>=0;a--)(H=r[a])&&(o=(i?H(t,e,o):H(o))||o);return i&&o&&h6(t,e,o),o};var B=(r,t,e)=>is(r,typeof t!="symbol"?t+"":t,e);var N4=xi((BC,re)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,o=Math.asin,a=Math.atan2,H=Math.acos,V=r/180,s=1e3*60*60*24,M=2440588,p=2451545;function h(U){return U.valueOf()/s-.5+M}function v(U){return new Date((U+.5-M)*s)}function x(U){return h(U)-p}var y=V*23.4397;function k(U,t1){return a(t(U)*e(y)-i(t1)*t(y),e(U))}function O(U,t1){return o(t(t1)*e(y)+e(t1)*t(y)*t(U))}function E(U,t1,V1){return a(t(U),e(U)*t(t1)-i(V1)*e(t1))}function $(U,t1,V1){return o(t(t1)*t(V1)+e(t1)*e(V1)*e(U))}function R(U,t1){return V*(280.16+360.9856235*U)-t1}function K(U){return U<0&&(U=0),2967e-7/Math.tan(U+.00312536/(U+.08901179))}function G(U){return V*(357.5291+.98560028*U)}function c1(U){var t1=V*(1.9148*t(U)+.02*t(2*U)+3e-4*t(3*U)),V1=V*102.9372;return U+t1+V1+r}function J(U){var t1=G(U),V1=c1(t1);return{dec:O(V1,0),ra:k(V1,0)}}var a1={};a1.getPosition=function(U,t1,V1){var h1=V*-V1,s1=V*t1,L1=x(U),w1=J(L1),T1=R(L1,h1)-w1.ra;return{azimuth:E(T1,s1,w1.dec),altitude:$(T1,s1,w1.dec)}};var i1=a1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];a1.addTime=function(U,t1,V1){i1.push([U,t1,V1])};var m1=9e-4;function N1(U,t1){return Math.round(U-m1-t1/(2*r))}function k1(U,t1,V1){return m1+(U+t1)/(2*r)+V1}function L2(U,t1,V1){return p+U+.0053*t(t1)-.0069*t(2*V1)}function G1(U,t1,V1){return H((t(U)-t(t1)*t(V1))/(e(t1)*e(V1)))}function O1(U){return-2.076*Math.sqrt(U)/60}function X(U,t1,V1,h1,s1,L1,w1){var T1=G1(U,V1,h1),m2=k1(T1,t1,s1);return L2(m2,L1,w1)}a1.getTimes=function(U,t1,V1,h1){h1=h1||0;var s1=V*-V1,L1=V*t1,w1=O1(h1),T1=x(U),m2=N1(T1,s1),v2=k1(0,s1,m2),T2=G(v2),l2=c1(T2),l1=O(l2,0),J2=L2(v2,T2,l2),U2,h5,P2,x2,n5,V5,Q1={solarNoon:v(J2),nadir:v(J2-.5)};for(U2=0,h5=i1.length;U2<h5;U2+=1)P2=i1[U2],x2=(P2[0]+w1)*V,n5=X(x2,s1,L1,l1,m2,T2,l2),V5=J2-(n5-J2),Q1[P2[1]]=v(V5),Q1[P2[2]]=v(n5);return Q1};function q1(U){var t1=V*(218.316+13.176396*U),V1=V*(134.963+13.064993*U),h1=V*(93.272+13.22935*U),s1=t1+V*6.289*t(V1),L1=V*5.128*t(h1),w1=385001-20905*e(V1);return{ra:k(s1,L1),dec:O(s1,L1),dist:w1}}a1.getMoonPosition=function(U,t1,V1){var h1=V*-V1,s1=V*t1,L1=x(U),w1=q1(L1),T1=R(L1,h1)-w1.ra,m2=$(T1,s1,w1.dec),v2=a(t(T1),i(s1)*e(w1.dec)-t(w1.dec)*e(T1));return m2=m2+K(m2),{azimuth:E(T1,s1,w1.dec),altitude:m2,distance:w1.dist,parallacticAngle:v2}},a1.getMoonIllumination=function(U){var t1=x(U||new Date),V1=J(t1),h1=q1(t1),s1=149598e3,L1=H(t(V1.dec)*t(h1.dec)+e(V1.dec)*e(h1.dec)*e(V1.ra-h1.ra)),w1=a(s1*t(L1),h1.dist-s1*e(L1)),T1=a(e(V1.dec)*t(V1.ra-h1.ra),t(V1.dec)*e(h1.dec)-e(V1.dec)*t(h1.dec)*e(V1.ra-h1.ra));return{fraction:(1+e(w1))/2,phase:.5+.5*w1*(T1<0?-1:1)/Math.PI,angle:T1}};function n1(U,t1){return new Date(U.valueOf()+t1*s/24)}a1.getMoonTimes=function(U,t1,V1,h1){var s1=new Date(U);h1?s1.setUTCHours(0,0,0,0):s1.setHours(0,0,0,0);for(var L1=.133*V,w1=a1.getMoonPosition(s1,t1,V1).altitude-L1,T1,m2,v2,T2,l2,l1,J2,U2,h5,P2,x2,n5,V5,Q1=1;Q1<=24&&(T1=a1.getMoonPosition(n1(s1,Q1),t1,V1).altitude-L1,m2=a1.getMoonPosition(n1(s1,Q1+1),t1,V1).altitude-L1,l2=(w1+m2)/2-T1,l1=(m2-w1)/2,J2=-l1/(2*l2),U2=(l2*J2+l1)*J2+T1,h5=l1*l1-4*l2*T1,P2=0,h5>=0&&(V5=Math.sqrt(h5)/(Math.abs(l2)*2),x2=J2-V5,n5=J2+V5,Math.abs(x2)<=1&&P2++,Math.abs(n5)<=1&&P2++,x2<-1&&(x2=n5)),P2===1?w1<0?v2=Q1+x2:T2=Q1+x2:P2===2&&(v2=Q1+(U2<0?n5:x2),T2=Q1+(U2<0?x2:n5)),!(v2&&T2));Q1+=2)w1=m2;var g2={};return v2&&(g2.rise=n1(s1,v2)),T2&&(g2.set=n1(s1,T2)),!v2&&!T2&&(g2[U2>0?"alwaysUp":"alwaysDown"]=!0),g2},typeof BC=="object"&&typeof re<"u"?re.exports=a1:typeof define=="function"&&define.amd?define(a1):window.SunCalc=a1})()});var oV=xi((Lt,iV)=>{(function(r,t){typeof Lt=="object"&&typeof iV<"u"?t(Lt):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(Lt,(function(r){"use strict";var t="1.9.4";function e(C){var n,l,u,f;for(l=1,u=arguments.length;l<u;l++){f=arguments[l];for(n in f)C[n]=f[n]}return C}var i=Object.create||(function(){function C(){}return function(n){return C.prototype=n,new C}})();function o(C,n){var l=Array.prototype.slice;if(C.bind)return C.bind.apply(C,l.call(arguments,1));var u=l.call(arguments,2);return function(){return C.apply(n,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function H(C){return"_leaflet_id"in C||(C._leaflet_id=++a),C._leaflet_id}function V(C,n,l){var u,f,S,T;return T=function(){u=!1,f&&(S.apply(l,f),f=!1)},S=function(){u?f=arguments:(C.apply(l,arguments),setTimeout(T,n),u=!0)},S}function s(C,n,l){var u=n[1],f=n[0],S=u-f;return C===u&&l?C:((C-f)%S+S)%S+f}function M(){return!1}function p(C,n){if(n===!1)return C;var l=Math.pow(10,n===void 0?6:n);return Math.round(C*l)/l}function h(C){return C.trim?C.trim():C.replace(/^\s+|\s+$/g,"")}function v(C){return h(C).split(/\s+/)}function x(C,n){Object.prototype.hasOwnProperty.call(C,"options")||(C.options=C.options?i(C.options):{});for(var l in n)C.options[l]=n[l];return C.options}function y(C,n,l){var u=[];for(var f in C)u.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(C[f]));return(!n||n.indexOf("?")===-1?"?":"&")+u.join("&")}var k=/\{ *([\w_ -]+) *\}/g;function O(C,n){return C.replace(k,function(l,u){var f=n[u];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(n)),f})}var E=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"};function $(C,n){for(var l=0;l<C.length;l++)if(C[l]===n)return l;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function K(C){return window["webkit"+C]||window["moz"+C]||window["ms"+C]}var G=0;function c1(C){var n=+new Date,l=Math.max(0,16-(n-G));return G=n+l,window.setTimeout(C,l)}var J=window.requestAnimationFrame||K("RequestAnimationFrame")||c1,a1=window.cancelAnimationFrame||K("CancelAnimationFrame")||K("CancelRequestAnimationFrame")||function(C){window.clearTimeout(C)};function i1(C,n,l){if(l&&J===c1)C.call(n);else return J.call(window,o(C,n))}function m1(C){C&&a1.call(window,C)}var N1={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:H,throttle:V,wrapNum:s,falseFn:M,formatNum:p,trim:h,splitWords:v,setOptions:x,getParamString:y,template:O,isArray:E,indexOf:$,emptyImageUrl:R,requestFn:J,cancelFn:a1,requestAnimFrame:i1,cancelAnimFrame:m1};function k1(){}k1.extend=function(C){var n=function(){x(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=n.__super__=this.prototype,u=i(l);u.constructor=n,n.prototype=u;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(n[f]=this[f]);return C.statics&&e(n,C.statics),C.includes&&(L2(C.includes),e.apply(null,[u].concat(C.includes))),e(u,C),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,C.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,T=u._initHooks.length;S<T;S++)u._initHooks[S].call(this)}},n},k1.include=function(C){var n=this.prototype.options;return e(this.prototype,C),C.options&&(this.prototype.options=n,this.mergeOptions(C.options)),this},k1.mergeOptions=function(C){return e(this.prototype.options,C),this},k1.addInitHook=function(C){var n=Array.prototype.slice.call(arguments,1),l=typeof C=="function"?C:function(){this[C].apply(this,n)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function L2(C){if(!(typeof L>"u"||!L||!L.Mixin)){C=E(C)?C:[C];for(var n=0;n<C.length;n++)C[n]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var G1={on:function(C,n,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],n);else{C=v(C);for(var f=0,S=C.length;f<S;f++)this._on(C[f],n,l)}return this},off:function(C,n,l){if(!arguments.length)delete this._events;else if(typeof C=="object")for(var u in C)this._off(u,C[u],n);else{C=v(C);for(var f=arguments.length===1,S=0,T=C.length;S<T;S++)f?this._off(C[S]):this._off(C[S],n,l)}return this},_on:function(C,n,l,u){if(typeof n!="function"){console.warn("wrong listener type: "+typeof n);return}if(this._listens(C,n,l)===!1){l===this&&(l=void 0);var f={fn:n,ctx:l};u&&(f.once=!0),this._events=this._events||{},this._events[C]=this._events[C]||[],this._events[C].push(f)}},_off:function(C,n,l){var u,f,S;if(this._events&&(u=this._events[C],!!u)){if(arguments.length===1){if(this._firingCount)for(f=0,S=u.length;f<S;f++)u[f].fn=M;delete this._events[C];return}if(typeof n!="function"){console.warn("wrong listener type: "+typeof n);return}var T=this._listens(C,n,l);if(T!==!1){var F=u[T];this._firingCount&&(F.fn=M,this._events[C]=u=u.slice()),u.splice(T,1)}}},fire:function(C,n,l){if(!this.listens(C,l))return this;var u=e({},n,{type:C,target:this,sourceTarget:n&&n.sourceTarget||this});if(this._events){var f=this._events[C];if(f){this._firingCount=this._firingCount+1||1;for(var S=0,T=f.length;S<T;S++){var F=f[S],z=F.fn;F.once&&this.off(C,z,F.ctx),z.call(F.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(C,n,l,u){typeof C!="string"&&console.warn('"string" type argument expected');var f=n;typeof n!="function"&&(u=!!n,f=void 0,l=void 0);var S=this._events&&this._events[C];if(S&&S.length&&this._listens(C,f,l)!==!1)return!0;if(u){for(var T in this._eventParents)if(this._eventParents[T].listens(C,n,l,u))return!0}return!1},_listens:function(C,n,l){if(!this._events)return!1;var u=this._events[C]||[];if(!n)return!!u.length;l===this&&(l=void 0);for(var f=0,S=u.length;f<S;f++)if(u[f].fn===n&&u[f].ctx===l)return f;return!1},once:function(C,n,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],n,!0);else{C=v(C);for(var f=0,S=C.length;f<S;f++)this._on(C[f],n,l,!0)}return this},addEventParent:function(C){return this._eventParents=this._eventParents||{},this._eventParents[H(C)]=C,this},removeEventParent:function(C){return this._eventParents&&delete this._eventParents[H(C)],this},_propagateEvent:function(C){for(var n in this._eventParents)this._eventParents[n].fire(C.type,e({layer:C.target,propagatedFrom:C.target},C),!0)}};G1.addEventListener=G1.on,G1.removeEventListener=G1.clearAllEventListeners=G1.off,G1.addOneTimeEventListener=G1.once,G1.fireEvent=G1.fire,G1.hasEventListeners=G1.listens;var O1=k1.extend(G1);function X(C,n,l){this.x=l?Math.round(C):C,this.y=l?Math.round(n):n}var q1=Math.trunc||function(C){return C>0?Math.floor(C):Math.ceil(C)};X.prototype={clone:function(){return new X(this.x,this.y)},add:function(C){return this.clone()._add(n1(C))},_add:function(C){return this.x+=C.x,this.y+=C.y,this},subtract:function(C){return this.clone()._subtract(n1(C))},_subtract:function(C){return this.x-=C.x,this.y-=C.y,this},divideBy:function(C){return this.clone()._divideBy(C)},_divideBy:function(C){return this.x/=C,this.y/=C,this},multiplyBy:function(C){return this.clone()._multiplyBy(C)},_multiplyBy:function(C){return this.x*=C,this.y*=C,this},scaleBy:function(C){return new X(this.x*C.x,this.y*C.y)},unscaleBy:function(C){return new X(this.x/C.x,this.y/C.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=q1(this.x),this.y=q1(this.y),this},distanceTo:function(C){C=n1(C);var n=C.x-this.x,l=C.y-this.y;return Math.sqrt(n*n+l*l)},equals:function(C){return C=n1(C),C.x===this.x&&C.y===this.y},contains:function(C){return C=n1(C),Math.abs(C.x)<=Math.abs(this.x)&&Math.abs(C.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function n1(C,n,l){return C instanceof X?C:E(C)?new X(C[0],C[1]):C==null?C:typeof C=="object"&&"x"in C&&"y"in C?new X(C.x,C.y):new X(C,n,l)}function U(C,n){if(C)for(var l=n?[C,n]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}U.prototype={extend:function(C){var n,l;if(!C)return this;if(C instanceof X||typeof C[0]=="number"||"x"in C)n=l=n1(C);else if(C=t1(C),n=C.min,l=C.max,!n||!l)return this;return!this.min&&!this.max?(this.min=n.clone(),this.max=l.clone()):(this.min.x=Math.min(n.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(n.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(C){return n1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,C)},getBottomLeft:function(){return n1(this.min.x,this.max.y)},getTopRight:function(){return n1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(C){var n,l;return typeof C[0]=="number"||C instanceof X?C=n1(C):C=t1(C),C instanceof U?(n=C.min,l=C.max):n=l=C,n.x>=this.min.x&&l.x<=this.max.x&&n.y>=this.min.y&&l.y<=this.max.y},intersects:function(C){C=t1(C);var n=this.min,l=this.max,u=C.min,f=C.max,S=f.x>=n.x&&u.x<=l.x,T=f.y>=n.y&&u.y<=l.y;return S&&T},overlaps:function(C){C=t1(C);var n=this.min,l=this.max,u=C.min,f=C.max,S=f.x>n.x&&u.x<l.x,T=f.y>n.y&&u.y<l.y;return S&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(C){var n=this.min,l=this.max,u=Math.abs(n.x-l.x)*C,f=Math.abs(n.y-l.y)*C;return t1(n1(n.x-u,n.y-f),n1(l.x+u,l.y+f))},equals:function(C){return C?(C=t1(C),this.min.equals(C.getTopLeft())&&this.max.equals(C.getBottomRight())):!1}};function t1(C,n){return!C||C instanceof U?C:new U(C,n)}function V1(C,n){if(C)for(var l=n?[C,n]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}V1.prototype={extend:function(C){var n=this._southWest,l=this._northEast,u,f;if(C instanceof s1)u=C,f=C;else if(C instanceof V1){if(u=C._southWest,f=C._northEast,!u||!f)return this}else return C?this.extend(L1(C)||h1(C)):this;return!n&&!l?(this._southWest=new s1(u.lat,u.lng),this._northEast=new s1(f.lat,f.lng)):(n.lat=Math.min(u.lat,n.lat),n.lng=Math.min(u.lng,n.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(C){var n=this._southWest,l=this._northEast,u=Math.abs(n.lat-l.lat)*C,f=Math.abs(n.lng-l.lng)*C;return new V1(new s1(n.lat-u,n.lng-f),new s1(l.lat+u,l.lng+f))},getCenter:function(){return new s1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new s1(this.getNorth(),this.getWest())},getSouthEast:function(){return new s1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(C){typeof C[0]=="number"||C instanceof s1||"lat"in C?C=L1(C):C=h1(C);var n=this._southWest,l=this._northEast,u,f;return C instanceof V1?(u=C.getSouthWest(),f=C.getNorthEast()):u=f=C,u.lat>=n.lat&&f.lat<=l.lat&&u.lng>=n.lng&&f.lng<=l.lng},intersects:function(C){C=h1(C);var n=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),S=f.lat>=n.lat&&u.lat<=l.lat,T=f.lng>=n.lng&&u.lng<=l.lng;return S&&T},overlaps:function(C){C=h1(C);var n=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),S=f.lat>n.lat&&u.lat<l.lat,T=f.lng>n.lng&&u.lng<l.lng;return S&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(C,n){return C?(C=h1(C),this._southWest.equals(C.getSouthWest(),n)&&this._northEast.equals(C.getNorthEast(),n)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function h1(C,n){return C instanceof V1?C:new V1(C,n)}function s1(C,n,l){if(isNaN(C)||isNaN(n))throw new Error("Invalid LatLng object: ("+C+", "+n+")");this.lat=+C,this.lng=+n,l!==void 0&&(this.alt=+l)}s1.prototype={equals:function(C,n){if(!C)return!1;C=L1(C);var l=Math.max(Math.abs(this.lat-C.lat),Math.abs(this.lng-C.lng));return l<=(n===void 0?1e-9:n)},toString:function(C){return"LatLng("+p(this.lat,C)+", "+p(this.lng,C)+")"},distanceTo:function(C){return T1.distance(this,L1(C))},wrap:function(){return T1.wrapLatLng(this)},toBounds:function(C){var n=180*C/40075017,l=n/Math.cos(Math.PI/180*this.lat);return h1([this.lat-n,this.lng-l],[this.lat+n,this.lng+l])},clone:function(){return new s1(this.lat,this.lng,this.alt)}};function L1(C,n,l){return C instanceof s1?C:E(C)&&typeof C[0]!="object"?C.length===3?new s1(C[0],C[1],C[2]):C.length===2?new s1(C[0],C[1]):null:C==null?C:typeof C=="object"&&"lat"in C?new s1(C.lat,"lng"in C?C.lng:C.lon,C.alt):n===void 0?null:new s1(C,n,l)}var w1={latLngToPoint:function(C,n){var l=this.projection.project(C),u=this.scale(n);return this.transformation._transform(l,u)},pointToLatLng:function(C,n){var l=this.scale(n),u=this.transformation.untransform(C,l);return this.projection.unproject(u)},project:function(C){return this.projection.project(C)},unproject:function(C){return this.projection.unproject(C)},scale:function(C){return 256*Math.pow(2,C)},zoom:function(C){return Math.log(C/256)/Math.LN2},getProjectedBounds:function(C){if(this.infinite)return null;var n=this.projection.bounds,l=this.scale(C),u=this.transformation.transform(n.min,l),f=this.transformation.transform(n.max,l);return new U(u,f)},infinite:!1,wrapLatLng:function(C){var n=this.wrapLng?s(C.lng,this.wrapLng,!0):C.lng,l=this.wrapLat?s(C.lat,this.wrapLat,!0):C.lat,u=C.alt;return new s1(l,n,u)},wrapLatLngBounds:function(C){var n=C.getCenter(),l=this.wrapLatLng(n),u=n.lat-l.lat,f=n.lng-l.lng;if(u===0&&f===0)return C;var S=C.getSouthWest(),T=C.getNorthEast(),F=new s1(S.lat-u,S.lng-f),z=new s1(T.lat-u,T.lng-f);return new V1(F,z)}},T1=e({},w1,{wrapLng:[-180,180],R:6371e3,distance:function(C,n){var l=Math.PI/180,u=C.lat*l,f=n.lat*l,S=Math.sin((n.lat-C.lat)*l/2),T=Math.sin((n.lng-C.lng)*l/2),F=S*S+Math.cos(u)*Math.cos(f)*T*T,z=2*Math.atan2(Math.sqrt(F),Math.sqrt(1-F));return this.R*z}}),m2=6378137,v2={R:m2,MAX_LATITUDE:85.0511287798,project:function(C){var n=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,C.lat),-l),f=Math.sin(u*n);return new X(this.R*C.lng*n,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(C){var n=180/Math.PI;return new s1((2*Math.atan(Math.exp(C.y/this.R))-Math.PI/2)*n,C.x*n/this.R)},bounds:(function(){var C=m2*Math.PI;return new U([-C,-C],[C,C])})()};function T2(C,n,l,u){if(E(C)){this._a=C[0],this._b=C[1],this._c=C[2],this._d=C[3];return}this._a=C,this._b=n,this._c=l,this._d=u}T2.prototype={transform:function(C,n){return this._transform(C.clone(),n)},_transform:function(C,n){return n=n||1,C.x=n*(this._a*C.x+this._b),C.y=n*(this._c*C.y+this._d),C},untransform:function(C,n){return n=n||1,new X((C.x/n-this._b)/this._a,(C.y/n-this._d)/this._c)}};function l2(C,n,l,u){return new T2(C,n,l,u)}var l1=e({},T1,{code:"EPSG:3857",projection:v2,transformation:(function(){var C=.5/(Math.PI*v2.R);return l2(C,.5,-C,.5)})()}),J2=e({},l1,{code:"EPSG:900913"});function U2(C){return document.createElementNS("http://www.w3.org/2000/svg",C)}function h5(C,n){var l="",u,f,S,T,F,z;for(u=0,S=C.length;u<S;u++){for(F=C[u],f=0,T=F.length;f<T;f++)z=F[f],l+=(f?"L":"M")+z.x+" "+z.y;l+=n?M1.svg?"z":"x":""}return l||"M0 0"}var P2=document.documentElement.style,x2="ActiveXObject"in window,n5=x2&&!document.addEventListener,V5="msLaunchUri"in navigator&&!("documentMode"in document),Q1=B2("webkit"),g2=B2("android"),z0=B2("android 2")||B2("android 3"),dt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),pt=g2&&B2("Google")&&dt<537&&!("AudioNode"in window),Z3=!!window.opera,J9=!V5&&B2("chrome"),t6=B2("gecko")&&!Q1&&!Z3&&!x2,V4=!J9&&B2("safari"),I0=B2("phantom"),s4="OTransition"in P2,q=navigator.platform.indexOf("Win")===0,L4=x2&&"transition"in P2,k3="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!z0,O3="MozPerspective"in P2,ut=!window.L_DISABLE_3D&&(L4||k3||O3)&&!s4&&!I0,N0=typeof orientation<"u"||B2("mobile"),mt=N0&&Q1,Nr=N0&&k3,e6=!window.PointerEvent&&window.MSPointerEvent,r6=!!(window.PointerEvent||e6),i6="ontouchstart"in window||!!window.TouchEvent,ht=!window.L_NO_TOUCH&&(i6||r6),o6=N0&&Z3,C6=N0&&t6,ft=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,l4=(function(){var C=!1;try{var n=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("testPassiveEventSupport",M,n),window.removeEventListener("testPassiveEventSupport",M,n)}catch{}return C})(),At=(function(){return!!document.createElement("canvas").getContext})(),M4=!!(document.createElementNS&&U2("svg").createSVGRect),vt=!!M4&&(function(){var C=document.createElement("div");return C.innerHTML="<svg/>",(C.firstChild&&C.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),xt=!M4&&(function(){try{var C=document.createElement("div");C.innerHTML='<v:shape adj="1"/>';var n=C.firstChild;return n.style.behavior="url(#default#VML)",n&&typeof n.adj=="object"}catch{return!1}})(),gt=navigator.platform.indexOf("Mac")===0,c4=navigator.platform.indexOf("Linux")===0;function B2(C){return navigator.userAgent.toLowerCase().indexOf(C)>=0}var M1={ie:x2,ielt9:n5,edge:V5,webkit:Q1,android:g2,android23:z0,androidStock:pt,opera:Z3,chrome:J9,gecko:t6,safari:V4,phantom:I0,opera12:s4,win:q,ie3d:L4,webkit3d:k3,gecko3d:O3,any3d:ut,mobile:N0,mobileWebkit:mt,mobileWebkit3d:Nr,msPointer:e6,pointer:r6,touch:ht,touchNative:i6,mobileOpera:o6,mobileGecko:C6,retina:ft,passiveEvents:l4,canvas:At,svg:M4,vml:xt,inlineSvg:vt,mac:gt,linux:c4},d4=M1.msPointer?"MSPointerDown":"pointerdown",W0=M1.msPointer?"MSPointerMove":"pointermove",p4=M1.msPointer?"MSPointerUp":"pointerup",u4=M1.msPointer?"MSPointerCancel":"pointercancel",d7={touchstart:d4,touchmove:W0,touchend:p4,touchcancel:u4},a6={touchstart:D,touchmove:P,touchend:P,touchcancel:P},d0={},c=!1;function m(C,n,l){return n==="touchstart"&&b(),a6[n]?(l=a6[n].bind(this,l),C.addEventListener(d7[n],l,!1),l):(console.warn("wrong event specified:",n),M)}function d(C,n,l){if(!d7[n]){console.warn("wrong event specified:",n);return}C.removeEventListener(d7[n],l,!1)}function A(C){d0[C.pointerId]=C}function g(C){d0[C.pointerId]&&(d0[C.pointerId]=C)}function w(C){delete d0[C.pointerId]}function b(){c||(document.addEventListener(d4,A,!0),document.addEventListener(W0,g,!0),document.addEventListener(p4,w,!0),document.addEventListener(u4,w,!0),c=!0)}function P(C,n){if(n.pointerType!==(n.MSPOINTER_TYPE_MOUSE||"mouse")){n.touches=[];for(var l in d0)n.touches.push(d0[l]);n.changedTouches=[n],C(n)}}function D(C,n){n.MSPOINTER_TYPE_TOUCH&&n.pointerType===n.MSPOINTER_TYPE_TOUCH&&B1(n),P(C,n)}function N(C){var n={},l,u;for(u in C)l=C[u],n[u]=l&&l.bind?l.bind(C):l;return C=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}var I=200;function H1(C,n){C.addEventListener("dblclick",n);var l=0,u;function f(S){if(S.detail!==1){u=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var T=G2(S);if(!(T.some(function(z){return z instanceof HTMLLabelElement&&z.attributes.for})&&!T.some(function(z){return z instanceof HTMLInputElement||z instanceof HTMLSelectElement}))){var F=Date.now();F-l<=I?(u++,u===2&&n(N(S))):u=1,l=F}}}return C.addEventListener("click",f),{dblclick:n,simDblclick:f}}function u1(C,n){C.removeEventListener("dblclick",n.dblclick),C.removeEventListener("click",n.simDblclick)}var W=f5(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),_1=f5(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),K1=_1==="webkitTransition"||_1==="OTransition"?_1+"End":"transitionend";function U1(C){return typeof C=="string"?document.getElementById(C):C}function R1(C,n){var l=C.style[n]||C.currentStyle&&C.currentStyle[n];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(C,null);l=u?u[n]:null}return l==="auto"?null:l}function d1(C,n,l){var u=document.createElement(C);return u.className=n||"",l&&l.appendChild(u),u}function S1(C){var n=C.parentNode;n&&n.removeChild(C)}function _2(C){for(;C.firstChild;)C.removeChild(C.firstChild)}function s5(C){var n=C.parentNode;n&&n.lastChild!==C&&n.appendChild(C)}function j2(C){var n=C.parentNode;n&&n.firstChild!==C&&n.insertBefore(C,n.firstChild)}function U0(C,n){if(C.classList!==void 0)return C.classList.contains(n);var l=L5(C);return l.length>0&&new RegExp("(^|\\s)"+n+"(\\s|$)").test(l)}function f1(C,n){if(C.classList!==void 0)for(var l=v(n),u=0,f=l.length;u<f;u++)C.classList.add(l[u]);else if(!U0(C,n)){var S=L5(C);E2(C,(S?S+" ":"")+n)}}function E1(C,n){C.classList!==void 0?C.classList.remove(n):E2(C,h((" "+L5(C)+" ").replace(" "+n+" "," ")))}function E2(C,n){C.className.baseVal===void 0?C.className=n:C.className.baseVal=n}function L5(C){return C.correspondingElement&&(C=C.correspondingElement),C.className.baseVal===void 0?C.className:C.className.baseVal}function h2(C,n){"opacity"in C.style?C.style.opacity=n:"filter"in C.style&&t5(C,n)}function t5(C,n){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=C.filters.item(u)}catch{if(n===1)return}n=Math.round(n*100),l?(l.Enabled=n!==100,l.Opacity=n):C.style.filter+=" progid:"+u+"(opacity="+n+")"}function f5(C){for(var n=document.documentElement.style,l=0;l<C.length;l++)if(C[l]in n)return C[l];return!1}function e5(C,n,l){var u=n||new X(0,0);C.style[W]=(M1.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function r2(C,n){C._leaflet_pos=n,M1.any3d?e5(C,n):(C.style.left=n.x+"px",C.style.top=n.y+"px")}function r5(C){return C._leaflet_pos||new X(0,0)}var A5,p0,S2;if("onselectstart"in document)A5=function(){g1(window,"selectstart",B1)},p0=function(){D1(window,"selectstart",B1)};else{var v5=f5(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);A5=function(){if(v5){var C=document.documentElement.style;S2=C[v5],C[v5]="none"}},p0=function(){v5&&(document.documentElement.style[v5]=S2,S2=void 0)}}function $5(){g1(window,"dragstart",B1)}function T3(){D1(window,"dragstart",B1)}var j0,u0;function t0(C){for(;C.tabIndex===-1;)C=C.parentNode;C.style&&(R5(),j0=C,u0=C.style.outlineStyle,C.style.outlineStyle="none",g1(window,"keydown",R5))}function R5(){j0&&(j0.style.outlineStyle=u0,j0=void 0,u0=void 0,D1(window,"keydown",R5))}function G0(C){do C=C.parentNode;while((!C.offsetWidth||!C.offsetHeight)&&C!==document.body);return C}function x5(C){var n=C.getBoundingClientRect();return{x:n.width/C.offsetWidth||1,y:n.height/C.offsetHeight||1,boundingClientRect:n}}var q0={__proto__:null,TRANSFORM:W,TRANSITION:_1,TRANSITION_END:K1,get:U1,getStyle:R1,create:d1,remove:S1,empty:_2,toFront:s5,toBack:j2,hasClass:U0,addClass:f1,removeClass:E1,setClass:E2,getClass:L5,setOpacity:h2,testProp:f5,setTransform:e5,setPosition:r2,getPosition:r5,get disableTextSelection(){return A5},get enableTextSelection(){return p0},disableImageDrag:$5,enableImageDrag:T3,preventOutline:t0,restoreOutline:R5,getSizedParentNode:G0,getScale:x5};function g1(C,n,l,u){if(n&&typeof n=="object")for(var f in n)m0(C,f,n[f],l);else{n=v(n);for(var S=0,T=n.length;S<T;S++)m0(C,n[S],l,u)}return this}var F2="_leaflet_events";function D1(C,n,l,u){if(arguments.length===1)c2(C),delete C[F2];else if(n&&typeof n=="object")for(var f in n)P3(C,f,n[f],l);else if(n=v(n),arguments.length===2)c2(C,function(F){return $(n,F)!==-1});else for(var S=0,T=n.length;S<T;S++)P3(C,n[S],l,u);return this}function c2(C,n){for(var l in C[F2]){var u=l.split(/\d/)[0];(!n||n(u))&&P3(C,u,null,null,l)}}var g5={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function m0(C,n,l,u){var f=n+H(l)+(u?"_"+H(u):"");if(C[F2]&&C[F2][f])return this;var S=function(F){return l.call(u||C,F||window.event)},T=S;!M1.touchNative&&M1.pointer&&n.indexOf("touch")===0?S=m(C,n,S):M1.touch&&n==="dblclick"?S=H1(C,S):"addEventListener"in C?n==="touchstart"||n==="touchmove"||n==="wheel"||n==="mousewheel"?C.addEventListener(g5[n]||n,S,M1.passiveEvents?{passive:!1}:!1):n==="mouseenter"||n==="mouseleave"?(S=function(F){F=F||window.event,E3(C,F)&&T(F)},C.addEventListener(g5[n],S,!1)):C.addEventListener(n,T,!1):C.attachEvent("on"+n,S),C[F2]=C[F2]||{},C[F2][f]=S}function P3(C,n,l,u,f){f=f||n+H(l)+(u?"_"+H(u):"");var S=C[F2]&&C[F2][f];if(!S)return this;!M1.touchNative&&M1.pointer&&n.indexOf("touch")===0?d(C,n,S):M1.touch&&n==="dblclick"?u1(C,S):"removeEventListener"in C?C.removeEventListener(g5[n]||n,S,!1):C.detachEvent("on"+n,S),C[F2][f]=null}function D5(C){return C.stopPropagation?C.stopPropagation():C.originalEvent?C.originalEvent._stopped=!0:C.cancelBubble=!0,this}function v1(C){return m0(C,"wheel",D5),this}function F1(C){return g1(C,"mousedown touchstart dblclick contextmenu",D5),C._leaflet_disable_click=!0,this}function B1(C){return C.preventDefault?C.preventDefault():C.returnValue=!1,this}function d2(C){return B1(C),D5(C),this}function G2(C){if(C.composedPath)return C.composedPath();for(var n=[],l=C.target;l;)n.push(l),l=l.parentNode;return n}function _5(C,n){if(!n)return new X(C.clientX,C.clientY);var l=x5(n),u=l.boundingClientRect;return new X((C.clientX-u.left)/l.x-n.clientLeft,(C.clientY-u.top)/l.y-n.clientTop)}var Y0=M1.linux&&M1.chrome?window.devicePixelRatio:M1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Q0(C){return M1.edge?C.wheelDeltaY/2:C.deltaY&&C.deltaMode===0?-C.deltaY/Y0:C.deltaY&&C.deltaMode===1?-C.deltaY*20:C.deltaY&&C.deltaMode===2?-C.deltaY*60:C.deltaX||C.deltaZ?0:C.wheelDelta?(C.wheelDeltaY||C.wheelDelta)/2:C.detail&&Math.abs(C.detail)<32765?-C.detail*20:C.detail?C.detail/-32765*60:0}function E3(C,n){var l=n.relatedTarget;if(!l)return!0;try{for(;l&&l!==C;)l=l.parentNode}catch{return!1}return l!==C}var Y={__proto__:null,on:g1,off:D1,stopPropagation:D5,disableScrollPropagation:v1,disableClickPropagation:F1,preventDefault:B1,stop:d2,getPropagationPath:G2,getMousePosition:_5,getWheelDelta:Q0,isExternalTarget:E3,addListener:g1,removeListener:D1},A1=O1.extend({run:function(C,n,l,u){this.stop(),this._el=C,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=r5(C),this._offset=n.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=i1(this._animate,this),this._step()},_step:function(C){var n=+new Date-this._startTime,l=this._duration*1e3;n<l?this._runFrame(this._easeOut(n/l),C):(this._runFrame(1),this._complete())},_runFrame:function(C,n){var l=this._startPos.add(this._offset.multiplyBy(C));n&&l._round(),r2(this._el,l),this.fire("step")},_complete:function(){m1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(C){return 1-Math.pow(1-C,this._easeOutPower)}}),o1=O1.extend({options:{crs:l1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(C,n){n=x(this,n),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(C),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),n.maxBounds&&this.setMaxBounds(n.maxBounds),n.zoom!==void 0&&(this._zoom=this._limitZoom(n.zoom)),n.center&&n.zoom!==void 0&&this.setView(L1(n.center),n.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=_1&&M1.any3d&&!M1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),g1(this._proxy,K1,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(C,n,l){if(n=n===void 0?this._zoom:this._limitZoom(n),C=this._limitCenter(L1(C),n,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==n?this._tryAnimatedZoom&&this._tryAnimatedZoom(C,n,l.zoom):this._tryAnimatedPan(C,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(C,n,l.pan&&l.pan.noMoveStart),this},setZoom:function(C,n){return this._loaded?this.setView(this.getCenter(),C,{zoom:n}):(this._zoom=C,this)},zoomIn:function(C,n){return C=C||(M1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+C,n)},zoomOut:function(C,n){return C=C||(M1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-C,n)},setZoomAround:function(C,n,l){var u=this.getZoomScale(n),f=this.getSize().divideBy(2),S=C instanceof X?C:this.latLngToContainerPoint(C),T=S.subtract(f).multiplyBy(1-1/u),F=this.containerPointToLatLng(f.add(T));return this.setView(F,n,{zoom:l})},_getBoundsCenterZoom:function(C,n){n=n||{},C=C.getBounds?C.getBounds():h1(C);var l=n1(n.paddingTopLeft||n.padding||[0,0]),u=n1(n.paddingBottomRight||n.padding||[0,0]),f=this.getBoundsZoom(C,!1,l.add(u));if(f=typeof n.maxZoom=="number"?Math.min(n.maxZoom,f):f,f===1/0)return{center:C.getCenter(),zoom:f};var S=u.subtract(l).divideBy(2),T=this.project(C.getSouthWest(),f),F=this.project(C.getNorthEast(),f),z=this.unproject(T.add(F).divideBy(2).add(S),f);return{center:z,zoom:f}},fitBounds:function(C,n){if(C=h1(C),!C.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(C,n);return this.setView(l.center,l.zoom,n)},fitWorld:function(C){return this.fitBounds([[-90,-180],[90,180]],C)},panTo:function(C,n){return this.setView(C,this._zoom,{pan:n})},panBy:function(C,n){if(C=n1(C).round(),n=n||{},!C.x&&!C.y)return this.fire("moveend");if(n.animate!==!0&&!this.getSize().contains(C))return this._resetView(this.unproject(this.project(this.getCenter()).add(C)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new A1,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),n.noMoveStart||this.fire("movestart"),n.animate!==!1){f1(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(C).round();this._panAnim.run(this._mapPane,l,n.duration||.25,n.easeLinearity)}else this._rawPanBy(C),this.fire("move").fire("moveend");return this},flyTo:function(C,n,l){if(l=l||{},l.animate===!1||!M1.any3d)return this.setView(C,n,l);this._stop();var u=this.project(this.getCenter()),f=this.project(C),S=this.getSize(),T=this._zoom;C=L1(C),n=n===void 0?T:n;var F=Math.max(S.x,S.y),z=F*this.getZoomScale(T,n),j=f.distanceTo(u)||1,C1=1.42,x1=C1*C1;function P1(A2){var m6=A2?-1:1,YV=A2?z:F,QV=z*z-F*F+m6*x1*x1*j*j,KV=2*YV*x1*j,Ft=QV/KV,Ai=Math.sqrt(Ft*Ft+1)-Ft,XV=Ai<1e-9?-18:Math.log(Ai);return XV}function q2(A2){return(Math.exp(A2)-Math.exp(-A2))/2}function b2(A2){return(Math.exp(A2)+Math.exp(-A2))/2}function b5(A2){return q2(A2)/b2(A2)}var i5=P1(0);function v7(A2){return F*(b2(i5)/b2(i5+C1*A2))}function UV(A2){return F*(b2(i5)*b5(i5+C1*A2)-q2(i5))/x1}function jV(A2){return 1-Math.pow(1-A2,1.5)}var GV=Date.now(),hi=(P1(1)-i5)/C1,qV=l.duration?1e3*l.duration:1e3*hi*.8;function fi(){var A2=(Date.now()-GV)/qV,m6=jV(A2)*hi;A2<=1?(this._flyToFrame=i1(fi,this),this._move(this.unproject(u.add(f.subtract(u).multiplyBy(UV(m6)/j)),T),this.getScaleZoom(F/v7(m6),T),{flyTo:!0})):this._move(C,n)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),fi.call(this),this},flyToBounds:function(C,n){var l=this._getBoundsCenterZoom(C,n);return this.flyTo(l.center,l.zoom,n)},setMaxBounds:function(C){return C=h1(C),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),C.isValid()?(this.options.maxBounds=C,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(C){var n=this.options.minZoom;return this.options.minZoom=C,this._loaded&&n!==C&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(C):this},setMaxZoom:function(C){var n=this.options.maxZoom;return this.options.maxZoom=C,this._loaded&&n!==C&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(C):this},panInsideBounds:function(C,n){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,h1(C));return l.equals(u)||this.panTo(u,n),this._enforcingBounds=!1,this},panInside:function(C,n){n=n||{};var l=n1(n.paddingTopLeft||n.padding||[0,0]),u=n1(n.paddingBottomRight||n.padding||[0,0]),f=this.project(this.getCenter()),S=this.project(C),T=this.getPixelBounds(),F=t1([T.min.add(l),T.max.subtract(u)]),z=F.getSize();if(!F.contains(S)){this._enforcingBounds=!0;var j=S.subtract(F.getCenter()),C1=F.extend(S).getSize().subtract(z);f.x+=j.x<0?-C1.x:C1.x,f.y+=j.y<0?-C1.y:C1.y,this.panTo(this.unproject(f),n),this._enforcingBounds=!1}return this},invalidateSize:function(C){if(!this._loaded)return this;C=e({animate:!1,pan:!0},C===!0?{animate:!0}:C);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=n.divideBy(2).round(),f=l.divideBy(2).round(),S=u.subtract(f);return!S.x&&!S.y?this:(C.animate&&C.pan?this.panBy(S):(C.pan&&this._rawPanBy(S),this.fire("move"),C.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(C){if(C=this._locateOptions=e({timeout:1e4,watch:!1},C),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=o(this._handleGeolocationResponse,this),l=o(this._handleGeolocationError,this);return C.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,l,C):navigator.geolocation.getCurrentPosition(n,l,C),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(C){if(this._container._leaflet_id){var n=C.code,l=C.message||(n===1?"permission denied":n===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:n,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(C){if(this._container._leaflet_id){var n=C.coords.latitude,l=C.coords.longitude,u=new s1(n,l),f=u.toBounds(C.coords.accuracy*2),S=this._locateOptions;if(S.setView){var T=this.getBoundsZoom(f);this.setView(u,S.maxZoom?Math.min(T,S.maxZoom):T)}var F={latlng:u,bounds:f,timestamp:C.timestamp};for(var z in C.coords)typeof C.coords[z]=="number"&&(F[z]=C.coords[z]);this.fire("locationfound",F)}},addHandler:function(C,n){if(!n)return this;var l=this[C]=new n(this);return this._handlers.push(l),this.options[C]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),S1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(m1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var C;for(C in this._layers)this._layers[C].remove();for(C in this._panes)S1(this._panes[C]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(C,n){var l="leaflet-pane"+(C?" leaflet-"+C.replace("Pane","")+"-pane":""),u=d1("div",l,n||this._mapPane);return C&&(this._panes[C]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var C=this.getPixelBounds(),n=this.unproject(C.getBottomLeft()),l=this.unproject(C.getTopRight());return new V1(n,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(C,n,l){C=h1(C),l=n1(l||[0,0]);var u=this.getZoom()||0,f=this.getMinZoom(),S=this.getMaxZoom(),T=C.getNorthWest(),F=C.getSouthEast(),z=this.getSize().subtract(l),j=t1(this.project(F,u),this.project(T,u)).getSize(),C1=M1.any3d?this.options.zoomSnap:1,x1=z.x/j.x,P1=z.y/j.y,q2=n?Math.max(x1,P1):Math.min(x1,P1);return u=this.getScaleZoom(q2,u),C1&&(u=Math.round(u/(C1/100))*(C1/100),u=n?Math.ceil(u/C1)*C1:Math.floor(u/C1)*C1),Math.max(f,Math.min(S,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new X(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(C,n){var l=this._getTopLeftPoint(C,n);return new U(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(C){return this.options.crs.getProjectedBounds(C===void 0?this.getZoom():C)},getPane:function(C){return typeof C=="string"?this._panes[C]:C},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(C,n){var l=this.options.crs;return n=n===void 0?this._zoom:n,l.scale(C)/l.scale(n)},getScaleZoom:function(C,n){var l=this.options.crs;n=n===void 0?this._zoom:n;var u=l.zoom(C*l.scale(n));return isNaN(u)?1/0:u},project:function(C,n){return n=n===void 0?this._zoom:n,this.options.crs.latLngToPoint(L1(C),n)},unproject:function(C,n){return n=n===void 0?this._zoom:n,this.options.crs.pointToLatLng(n1(C),n)},layerPointToLatLng:function(C){var n=n1(C).add(this.getPixelOrigin());return this.unproject(n)},latLngToLayerPoint:function(C){var n=this.project(L1(C))._round();return n._subtract(this.getPixelOrigin())},wrapLatLng:function(C){return this.options.crs.wrapLatLng(L1(C))},wrapLatLngBounds:function(C){return this.options.crs.wrapLatLngBounds(h1(C))},distance:function(C,n){return this.options.crs.distance(L1(C),L1(n))},containerPointToLayerPoint:function(C){return n1(C).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(C){return n1(C).add(this._getMapPanePos())},containerPointToLatLng:function(C){var n=this.containerPointToLayerPoint(n1(C));return this.layerPointToLatLng(n)},latLngToContainerPoint:function(C){return this.layerPointToContainerPoint(this.latLngToLayerPoint(L1(C)))},mouseEventToContainerPoint:function(C){return _5(C,this._container)},mouseEventToLayerPoint:function(C){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(C))},mouseEventToLatLng:function(C){return this.layerPointToLatLng(this.mouseEventToLayerPoint(C))},_initContainer:function(C){var n=this._container=U1(C);if(n){if(n._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");g1(n,"scroll",this._onScroll,this),this._containerId=H(n)},_initLayout:function(){var C=this._container;this._fadeAnimated=this.options.fadeAnimation&&M1.any3d,f1(C,"leaflet-container"+(M1.touch?" leaflet-touch":"")+(M1.retina?" leaflet-retina":"")+(M1.ielt9?" leaflet-oldie":"")+(M1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var n=R1(C,"position");n!=="absolute"&&n!=="relative"&&n!=="fixed"&&n!=="sticky"&&(C.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var C=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),r2(this._mapPane,new X(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(f1(C.markerPane,"leaflet-zoom-hide"),f1(C.shadowPane,"leaflet-zoom-hide"))},_resetView:function(C,n,l){r2(this._mapPane,new X(0,0));var u=!this._loaded;this._loaded=!0,n=this._limitZoom(n),this.fire("viewprereset");var f=this._zoom!==n;this._moveStart(f,l)._move(C,n)._moveEnd(f),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(C,n){return C&&this.fire("zoomstart"),n||this.fire("movestart"),this},_move:function(C,n,l,u){n===void 0&&(n=this._zoom);var f=this._zoom!==n;return this._zoom=n,this._lastCenter=C,this._pixelOrigin=this._getNewPixelOrigin(C),u?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(C){return C&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return m1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(C){r2(this._mapPane,this._getMapPanePos().subtract(C))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(C){this._targets={},this._targets[H(this._container)]=this;var n=C?D1:g1;n(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&n(window,"resize",this._onResize,this),M1.any3d&&this.options.transform3DLimit&&(C?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){m1(this._resizeRequest),this._resizeRequest=i1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var C=this._getMapPanePos();Math.max(Math.abs(C.x),Math.abs(C.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(C,n){for(var l=[],u,f=n==="mouseout"||n==="mouseover",S=C.target||C.srcElement,T=!1;S;){if(u=this._targets[H(S)],u&&(n==="click"||n==="preclick")&&this._draggableMoved(u)){T=!0;break}if(u&&u.listens(n,!0)&&(f&&!E3(S,C)||(l.push(u),f))||S===this._container)break;S=S.parentNode}return!l.length&&!T&&!f&&this.listens(n,!0)&&(l=[this]),l},_isClickDisabled:function(C){for(;C&&C!==this._container;){if(C._leaflet_disable_click)return!0;C=C.parentNode}},_handleDOMEvent:function(C){var n=C.target||C.srcElement;if(!(!this._loaded||n._leaflet_disable_events||C.type==="click"&&this._isClickDisabled(n))){var l=C.type;l==="mousedown"&&t0(n),this._fireDOMEvent(C,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(C,n,l){if(C.type==="click"){var u=e({},C);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var f=this._findEventTargets(C,n);if(l){for(var S=[],T=0;T<l.length;T++)l[T].listens(n,!0)&&S.push(l[T]);f=S.concat(f)}if(f.length){n==="contextmenu"&&B1(C);var F=f[0],z={originalEvent:C};if(C.type!=="keypress"&&C.type!=="keydown"&&C.type!=="keyup"){var j=F.getLatLng&&(!F._radius||F._radius<=10);z.containerPoint=j?this.latLngToContainerPoint(F.getLatLng()):this.mouseEventToContainerPoint(C),z.layerPoint=this.containerPointToLayerPoint(z.containerPoint),z.latlng=j?F.getLatLng():this.layerPointToLatLng(z.layerPoint)}for(T=0;T<f.length;T++)if(f[T].fire(n,z,!0),z.originalEvent._stopped||f[T].options.bubblingMouseEvents===!1&&$(this._mouseEvents,n)!==-1)return}},_draggableMoved:function(C){return C=C.dragging&&C.dragging.enabled()?C:this,C.dragging&&C.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var C=0,n=this._handlers.length;C<n;C++)this._handlers[C].disable()},whenReady:function(C,n){return this._loaded?C.call(n||this,{target:this}):this.on("load",C,n),this},_getMapPanePos:function(){return r5(this._mapPane)||new X(0,0)},_moved:function(){var C=this._getMapPanePos();return C&&!C.equals([0,0])},_getTopLeftPoint:function(C,n){var l=C&&n!==void 0?this._getNewPixelOrigin(C,n):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(C,n){var l=this.getSize()._divideBy(2);return this.project(C,n)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(C,n,l){var u=this._getNewPixelOrigin(l,n);return this.project(C,n)._subtract(u)},_latLngBoundsToNewLayerBounds:function(C,n,l){var u=this._getNewPixelOrigin(l,n);return t1([this.project(C.getSouthWest(),n)._subtract(u),this.project(C.getNorthWest(),n)._subtract(u),this.project(C.getSouthEast(),n)._subtract(u),this.project(C.getNorthEast(),n)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(C){return this.latLngToLayerPoint(C).subtract(this._getCenterLayerPoint())},_limitCenter:function(C,n,l){if(!l)return C;var u=this.project(C,n),f=this.getSize().divideBy(2),S=new U(u.subtract(f),u.add(f)),T=this._getBoundsOffset(S,l,n);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?C:this.unproject(u.add(T),n)},_limitOffset:function(C,n){if(!n)return C;var l=this.getPixelBounds(),u=new U(l.min.add(C),l.max.add(C));return C.add(this._getBoundsOffset(u,n))},_getBoundsOffset:function(C,n,l){var u=t1(this.project(n.getNorthEast(),l),this.project(n.getSouthWest(),l)),f=u.min.subtract(C.min),S=u.max.subtract(C.max),T=this._rebound(f.x,-S.x),F=this._rebound(f.y,-S.y);return new X(T,F)},_rebound:function(C,n){return C+n>0?Math.round(C-n)/2:Math.max(0,Math.ceil(C))-Math.max(0,Math.floor(n))},_limitZoom:function(C){var n=this.getMinZoom(),l=this.getMaxZoom(),u=M1.any3d?this.options.zoomSnap:1;return u&&(C=Math.round(C/u)*u),Math.max(n,Math.min(l,C))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){E1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(C,n){var l=this._getCenterOffset(C)._trunc();return(n&&n.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,n),!0)},_createAnimProxy:function(){var C=this._proxy=d1("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(C),this.on("zoomanim",function(n){var l=W,u=this._proxy.style[l];e5(this._proxy,this.project(n.center,n.zoom),this.getZoomScale(n.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){S1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var C=this.getCenter(),n=this.getZoom();e5(this._proxy,this.project(C,n),this.getZoomScale(n,1))},_catchTransitionEnd:function(C){this._animatingZoom&&C.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(C,n,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(n-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(n),f=this._getCenterOffset(C)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(f)?!1:(i1(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(C,n,!0)},this),!0)},_animateZoom:function(C,n,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=C,this._animateToZoom=n,f1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:C,zoom:n,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&E1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function W1(C,n){return new o1(C,n)}var J1=k1.extend({options:{position:"topright"},initialize:function(C){x(this,C)},getPosition:function(){return this.options.position},setPosition:function(C){var n=this._map;return n&&n.removeControl(this),this.options.position=C,n&&n.addControl(this),this},getContainer:function(){return this._container},addTo:function(C){this.remove(),this._map=C;var n=this._container=this.onAdd(C),l=this.getPosition(),u=C._controlCorners[l];return f1(n,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(n,u.firstChild):u.appendChild(n),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(S1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(C){this._map&&C&&C.screenX>0&&C.screenY>0&&this._map.getContainer().focus()}}),w2=function(C){return new J1(C)};o1.include({addControl:function(C){return C.addTo(this),this},removeControl:function(C){return C.remove(),this},_initControlPos:function(){var C=this._controlCorners={},n="leaflet-",l=this._controlContainer=d1("div",n+"control-container",this._container);function u(f,S){var T=n+f+" "+n+S;C[f+S]=d1("div",T,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var C in this._controlCorners)S1(this._controlCorners[C]);S1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var S5=J1.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(C,n,l,u){return l<u?-1:u<l?1:0}},initialize:function(C,n,l){x(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in C)this._addLayer(C[u],u);for(u in n)this._addLayer(n[u],u,!0)},onAdd:function(C){this._initLayout(),this._update(),this._map=C,C.on("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(C){return J1.prototype.addTo.call(this,C),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var C=0;C<this._layers.length;C++)this._layers[C].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(C,n){return this._addLayer(C,n),this._map?this._update():this},addOverlay:function(C,n){return this._addLayer(C,n,!0),this._map?this._update():this},removeLayer:function(C){C.off("add remove",this._onLayerChange,this);var n=this._getLayer(H(C));return n&&this._layers.splice(this._layers.indexOf(n),1),this._map?this._update():this},expand:function(){f1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var C=this._map.getSize().y-(this._container.offsetTop+50);return C<this._section.clientHeight?(f1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=C+"px"):E1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return E1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var C="leaflet-control-layers",n=this._container=d1("div",C),l=this.options.collapsed;n.setAttribute("aria-haspopup",!0),F1(n),v1(n);var u=this._section=d1("section",C+"-list");l&&(this._map.on("click",this.collapse,this),g1(n,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=d1("a",C+"-toggle",n);f.href="#",f.title="Layers",f.setAttribute("role","button"),g1(f,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){B1(S),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=d1("div",C+"-base",u),this._separator=d1("div",C+"-separator",u),this._overlaysList=d1("div",C+"-overlays",u),n.appendChild(u)},_getLayer:function(C){for(var n=0;n<this._layers.length;n++)if(this._layers[n]&&H(this._layers[n].layer)===C)return this._layers[n]},_addLayer:function(C,n,l){this._map&&C.on("add remove",this._onLayerChange,this),this._layers.push({layer:C,name:n,overlay:l}),this.options.sortLayers&&this._layers.sort(o(function(u,f){return this.options.sortFunction(u.layer,f.layer,u.name,f.name)},this)),this.options.autoZIndex&&C.setZIndex&&(this._lastZIndex++,C.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_2(this._baseLayersList),_2(this._overlaysList),this._layerControlInputs=[];var C,n,l,u,f=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),n=n||u.overlay,C=C||!u.overlay,f+=u.overlay?0:1;return this.options.hideSingleBase&&(C=C&&f>1,this._baseLayersList.style.display=C?"":"none"),this._separator.style.display=n&&C?"":"none",this},_onLayerChange:function(C){this._handlingClick||this._update();var n=this._getLayer(H(C.target)),l=n.overlay?C.type==="add"?"overlayadd":"overlayremove":C.type==="add"?"baselayerchange":null;l&&this._map.fire(l,n)},_createRadioElement:function(C,n){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+C+'"'+(n?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(C){var n=document.createElement("label"),l=this._map.hasLayer(C.layer),u;C.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+H(this),l),this._layerControlInputs.push(u),u.layerId=H(C.layer),g1(u,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+C.name;var S=document.createElement("span");n.appendChild(S),S.appendChild(u),S.appendChild(f);var T=C.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){if(!this._preventClick){var C=this._layerControlInputs,n,l,u=[],f=[];this._handlingClick=!0;for(var S=C.length-1;S>=0;S--)n=C[S],l=this._getLayer(n.layerId).layer,n.checked?u.push(l):n.checked||f.push(l);for(S=0;S<f.length;S++)this._map.hasLayer(f[S])&&this._map.removeLayer(f[S]);for(S=0;S<u.length;S++)this._map.hasLayer(u[S])||this._map.addLayer(u[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var C=this._layerControlInputs,n,l,u=this._map.getZoom(),f=C.length-1;f>=0;f--)n=C[f],l=this._getLayer(n.layerId).layer,n.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var C=this._section;this._preventClick=!0,g1(C,"click",B1),this.expand();var n=this;setTimeout(function(){D1(C,"click",B1),n._preventClick=!1})}}),F3=function(C,n,l){return new S5(C,n,l)},$3=J1.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(C){var n="leaflet-control-zoom",l=d1("div",n+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,n+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,n+"-out",l,this._zoomOut),this._updateDisabled(),C.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(C){C.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(C){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(C.shiftKey?3:1))},_zoomOut:function(C){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(C.shiftKey?3:1))},_createButton:function(C,n,l,u,f){var S=d1("a",l,u);return S.innerHTML=C,S.href="#",S.title=n,S.setAttribute("role","button"),S.setAttribute("aria-label",n),F1(S),g1(S,"click",d2),g1(S,"click",f,this),g1(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var C=this._map,n="leaflet-disabled";E1(this._zoomInButton,n),E1(this._zoomOutButton,n),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||C._zoom===C.getMinZoom())&&(f1(this._zoomOutButton,n),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||C._zoom===C.getMaxZoom())&&(f1(this._zoomInButton,n),this._zoomInButton.setAttribute("aria-disabled","true"))}});o1.mergeOptions({zoomControl:!0}),o1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new $3,this.addControl(this.zoomControl))});var l5=function(C){return new $3(C)},p7=J1.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(C){var n="leaflet-control-scale",l=d1("div",n),u=this.options;return this._addScales(u,n+"-line",l),C.on(u.updateWhenIdle?"moveend":"move",this._update,this),C.whenReady(this._update,this),l},onRemove:function(C){C.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(C,n,l){C.metric&&(this._mScale=d1("div",n,l)),C.imperial&&(this._iScale=d1("div",n,l))},_update:function(){var C=this._map,n=C.getSize().y/2,l=C.distance(C.containerPointToLatLng([0,n]),C.containerPointToLatLng([this.options.maxWidth,n]));this._updateScales(l)},_updateScales:function(C){this.options.metric&&C&&this._updateMetric(C),this.options.imperial&&C&&this._updateImperial(C)},_updateMetric:function(C){var n=this._getRoundNum(C),l=n<1e3?n+" m":n/1e3+" km";this._updateScale(this._mScale,l,n/C)},_updateImperial:function(C){var n=C*3.2808399,l,u,f;n>5280?(l=n/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(f=this._getRoundNum(n),this._updateScale(this._iScale,f+" ft",f/n))},_updateScale:function(C,n,l){C.style.width=Math.round(this.options.maxWidth*l)+"px",C.innerHTML=n},_getRoundNum:function(C){var n=Math.pow(10,(Math.floor(C)+"").length-1),l=C/n;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,n*l}}),_t=function(C){return new p7(C)},St='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',R3=J1.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(M1.inlineSvg?St+" ":"")+"Leaflet</a>"},initialize:function(C){x(this,C),this._attributions={}},onAdd:function(C){C.attributionControl=this,this._container=d1("div","leaflet-control-attribution"),F1(this._container);for(var n in C._layers)C._layers[n].getAttribution&&this.addAttribution(C._layers[n].getAttribution());return this._update(),C.on("layeradd",this._addAttribution,this),this._container},onRemove:function(C){C.off("layeradd",this._addAttribution,this)},_addAttribution:function(C){C.layer.getAttribution&&(this.addAttribution(C.layer.getAttribution()),C.layer.once("remove",function(){this.removeAttribution(C.layer.getAttribution())},this))},setPrefix:function(C){return this.options.prefix=C,this._update(),this},addAttribution:function(C){return C?(this._attributions[C]||(this._attributions[C]=0),this._attributions[C]++,this._update(),this):this},removeAttribution:function(C){return C?(this._attributions[C]&&(this._attributions[C]--,this._update()),this):this},_update:function(){if(this._map){var C=[];for(var n in this._attributions)this._attributions[n]&&C.push(n);var l=[];this.options.prefix&&l.push(this.options.prefix),C.length&&l.push(C.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});o1.mergeOptions({attributionControl:!0}),o1.addInitHook(function(){this.options.attributionControl&&new R3().addTo(this)});var wt=function(C){return new R3(C)};J1.Layers=S5,J1.Zoom=$3,J1.Scale=p7,J1.Attribution=R3,w2.layers=F3,w2.zoom=l5,w2.scale=_t,w2.attribution=wt;var e0=k1.extend({initialize:function(C){this._map=C},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});e0.addTo=function(C,n){return C.addHandler(n,this),this};var cV={Events:G1},Wr=M1.touch?"touchstart mousedown":"mousedown",K0=O1.extend({options:{clickTolerance:3},initialize:function(C,n,l,u){x(this,u),this._element=C,this._dragStartTarget=n||C,this._preventOutline=l},enable:function(){this._enabled||(g1(this._dragStartTarget,Wr,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(K0._dragging===this&&this.finishDrag(!0),D1(this._dragStartTarget,Wr,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(C){if(this._enabled&&(this._moved=!1,!U0(this._element,"leaflet-zoom-anim"))){if(C.touches&&C.touches.length!==1){K0._dragging===this&&this.finishDrag();return}if(!(K0._dragging||C.shiftKey||C.which!==1&&C.button!==1&&!C.touches)&&(K0._dragging=this,this._preventOutline&&t0(this._element),$5(),A5(),!this._moving)){this.fire("down");var n=C.touches?C.touches[0]:C,l=G0(this._element);this._startPoint=new X(n.clientX,n.clientY),this._startPos=r5(this._element),this._parentScale=x5(l);var u=C.type==="mousedown";g1(document,u?"mousemove":"touchmove",this._onMove,this),g1(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(C){if(this._enabled){if(C.touches&&C.touches.length>1){this._moved=!0;return}var n=C.touches&&C.touches.length===1?C.touches[0]:C,l=new X(n.clientX,n.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,B1(C),this._moved||(this.fire("dragstart"),this._moved=!0,f1(document.body,"leaflet-dragging"),this._lastTarget=C.target||C.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),f1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=C,this._updatePosition())}},_updatePosition:function(){var C={originalEvent:this._lastEvent};this.fire("predrag",C),r2(this._element,this._newPos),this.fire("drag",C)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(C){E1(document.body,"leaflet-dragging"),this._lastTarget&&(E1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),D1(document,"mousemove touchmove",this._onMove,this),D1(document,"mouseup touchend touchcancel",this._onUp,this),T3(),p0();var n=this._moved&&this._moving;this._moving=!1,K0._dragging=!1,n&&this.fire("dragend",{noInertia:C,distance:this._newPos.distanceTo(this._startPos)})}});function Ur(C,n,l){var u,f=[1,4,2,8],S,T,F,z,j,C1,x1,P1;for(S=0,C1=C.length;S<C1;S++)C[S]._code=D3(C[S],n);for(F=0;F<4;F++){for(x1=f[F],u=[],S=0,C1=C.length,T=C1-1;S<C1;T=S++)z=C[S],j=C[T],z._code&x1?j._code&x1||(P1=H6(j,z,x1,n,l),P1._code=D3(P1,n),u.push(P1)):(j._code&x1&&(P1=H6(j,z,x1,n,l),P1._code=D3(P1,n),u.push(P1)),u.push(z));C=u}return C}function jr(C,n){var l,u,f,S,T,F,z,j,C1;if(!C||C.length===0)throw new Error("latlngs not passed");w5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var x1=L1([0,0]),P1=h1(C),q2=P1.getNorthWest().distanceTo(P1.getSouthWest())*P1.getNorthEast().distanceTo(P1.getNorthWest());q2<1700&&(x1=bt(C));var b2=C.length,b5=[];for(l=0;l<b2;l++){var i5=L1(C[l]);b5.push(n.project(L1([i5.lat-x1.lat,i5.lng-x1.lng])))}for(F=z=j=0,l=0,u=b2-1;l<b2;u=l++)f=b5[l],S=b5[u],T=f.y*S.x-S.y*f.x,z+=(f.x+S.x)*T,j+=(f.y+S.y)*T,F+=T*3;F===0?C1=b5[0]:C1=[z/F,j/F];var v7=n.unproject(n1(C1));return L1([v7.lat+x1.lat,v7.lng+x1.lng])}function bt(C){for(var n=0,l=0,u=0,f=0;f<C.length;f++){var S=L1(C[f]);n+=S.lat,l+=S.lng,u++}return L1([n/u,l/u])}var dV={__proto__:null,clipPolygon:Ur,polygonCenter:jr,centroid:bt};function Gr(C,n){if(!n||!C.length)return C.slice();var l=n*n;return C=mV(C,l),C=uV(C,l),C}function qr(C,n,l){return Math.sqrt(m4(C,n,l,!0))}function pV(C,n,l){return m4(C,n,l)}function uV(C,n){var l=C.length,u=typeof Uint8Array<"u"?Uint8Array:Array,f=new u(l);f[0]=f[l-1]=1,yt(C,f,n,0,l-1);var S,T=[];for(S=0;S<l;S++)f[S]&&T.push(C[S]);return T}function yt(C,n,l,u,f){var S=0,T,F,z;for(F=u+1;F<=f-1;F++)z=m4(C[F],C[u],C[f],!0),z>S&&(T=F,S=z);S>l&&(n[T]=1,yt(C,n,l,u,T),yt(C,n,l,T,f))}function mV(C,n){for(var l=[C[0]],u=1,f=0,S=C.length;u<S;u++)hV(C[u],C[f])>n&&(l.push(C[u]),f=u);return f<S-1&&l.push(C[S-1]),l}var Yr;function Qr(C,n,l,u,f){var S=u?Yr:D3(C,l),T=D3(n,l),F,z,j;for(Yr=T;;){if(!(S|T))return[C,n];if(S&T)return!1;F=S||T,z=H6(C,n,F,l,f),j=D3(z,l),F===S?(C=z,S=j):(n=z,T=j)}}function H6(C,n,l,u,f){var S=n.x-C.x,T=n.y-C.y,F=u.min,z=u.max,j,C1;return l&8?(j=C.x+S*(z.y-C.y)/T,C1=z.y):l&4?(j=C.x+S*(F.y-C.y)/T,C1=F.y):l&2?(j=z.x,C1=C.y+T*(z.x-C.x)/S):l&1&&(j=F.x,C1=C.y+T*(F.x-C.x)/S),new X(j,C1,f)}function D3(C,n){var l=0;return C.x<n.min.x?l|=1:C.x>n.max.x&&(l|=2),C.y<n.min.y?l|=4:C.y>n.max.y&&(l|=8),l}function hV(C,n){var l=n.x-C.x,u=n.y-C.y;return l*l+u*u}function m4(C,n,l,u){var f=n.x,S=n.y,T=l.x-f,F=l.y-S,z=T*T+F*F,j;return z>0&&(j=((C.x-f)*T+(C.y-S)*F)/z,j>1?(f=l.x,S=l.y):j>0&&(f+=T*j,S+=F*j)),T=C.x-f,F=C.y-S,u?T*T+F*F:new X(f,S)}function w5(C){return!E(C[0])||typeof C[0][0]!="object"&&typeof C[0][0]<"u"}function Kr(C){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),w5(C)}function Xr(C,n){var l,u,f,S,T,F,z,j;if(!C||C.length===0)throw new Error("latlngs not passed");w5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var C1=L1([0,0]),x1=h1(C),P1=x1.getNorthWest().distanceTo(x1.getSouthWest())*x1.getNorthEast().distanceTo(x1.getNorthWest());P1<1700&&(C1=bt(C));var q2=C.length,b2=[];for(l=0;l<q2;l++){var b5=L1(C[l]);b2.push(n.project(L1([b5.lat-C1.lat,b5.lng-C1.lng])))}for(l=0,u=0;l<q2-1;l++)u+=b2[l].distanceTo(b2[l+1])/2;if(u===0)j=b2[0];else for(l=0,S=0;l<q2-1;l++)if(T=b2[l],F=b2[l+1],f=T.distanceTo(F),S+=f,S>u){z=(S-u)/f,j=[F.x-z*(F.x-T.x),F.y-z*(F.y-T.y)];break}var i5=n.unproject(n1(j));return L1([i5.lat+C1.lat,i5.lng+C1.lng])}var fV={__proto__:null,simplify:Gr,pointToSegmentDistance:qr,closestPointOnSegment:pV,clipSegment:Qr,_getEdgeIntersection:H6,_getBitCode:D3,_sqClosestPointOnSegment:m4,isFlat:w5,_flat:Kr,polylineCenter:Xr},Zt={project:function(C){return new X(C.lng,C.lat)},unproject:function(C){return new s1(C.y,C.x)},bounds:new U([-180,-90],[180,90])},kt={R:6378137,R_MINOR:6356752314245179e-9,bounds:new U([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(C){var n=Math.PI/180,l=this.R,u=C.lat*n,f=this.R_MINOR/l,S=Math.sqrt(1-f*f),T=S*Math.sin(u),F=Math.tan(Math.PI/4-u/2)/Math.pow((1-T)/(1+T),S/2);return u=-l*Math.log(Math.max(F,1e-10)),new X(C.lng*n*l,u)},unproject:function(C){for(var n=180/Math.PI,l=this.R,u=this.R_MINOR/l,f=Math.sqrt(1-u*u),S=Math.exp(-C.y/l),T=Math.PI/2-2*Math.atan(S),F=0,z=.1,j;F<15&&Math.abs(z)>1e-7;F++)j=f*Math.sin(T),j=Math.pow((1-j)/(1+j),f/2),z=Math.PI/2-2*Math.atan(S*j)-T,T+=z;return new s1(T*n,C.x*n/l)}},AV={__proto__:null,LonLat:Zt,Mercator:kt,SphericalMercator:v2},vV=e({},T1,{code:"EPSG:3395",projection:kt,transformation:(function(){var C=.5/(Math.PI*kt.R);return l2(C,.5,-C,.5)})()}),Jr=e({},T1,{code:"EPSG:4326",projection:Zt,transformation:l2(1/180,1,-1/180,.5)}),xV=e({},w1,{projection:Zt,transformation:l2(1,0,-1,0),scale:function(C){return Math.pow(2,C)},zoom:function(C){return Math.log(C)/Math.LN2},distance:function(C,n){var l=n.lng-C.lng,u=n.lat-C.lat;return Math.sqrt(l*l+u*u)},infinite:!0});w1.Earth=T1,w1.EPSG3395=vV,w1.EPSG3857=l1,w1.EPSG900913=J2,w1.EPSG4326=Jr,w1.Simple=xV;var B5=O1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(C){return C.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(C){return C&&C.removeLayer(this),this},getPane:function(C){return this._map.getPane(C?this.options[C]||C:this.options.pane)},addInteractiveTarget:function(C){return this._map._targets[H(C)]=this,this},removeInteractiveTarget:function(C){return delete this._map._targets[H(C)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(C){var n=C.target;if(n.hasLayer(this)){if(this._map=n,this._zoomAnimated=n._zoomAnimated,this.getEvents){var l=this.getEvents();n.on(l,this),this.once("remove",function(){n.off(l,this)},this)}this.onAdd(n),this.fire("add"),n.fire("layeradd",{layer:this})}}});o1.include({addLayer:function(C){if(!C._layerAdd)throw new Error("The provided object is not a Layer.");var n=H(C);return this._layers[n]?this:(this._layers[n]=C,C._mapToAdd=this,C.beforeAdd&&C.beforeAdd(this),this.whenReady(C._layerAdd,C),this)},removeLayer:function(C){var n=H(C);return this._layers[n]?(this._loaded&&C.onRemove(this),delete this._layers[n],this._loaded&&(this.fire("layerremove",{layer:C}),C.fire("remove")),C._map=C._mapToAdd=null,this):this},hasLayer:function(C){return H(C)in this._layers},eachLayer:function(C,n){for(var l in this._layers)C.call(n,this._layers[l]);return this},_addLayers:function(C){C=C?E(C)?C:[C]:[];for(var n=0,l=C.length;n<l;n++)this.addLayer(C[n])},_addZoomLimit:function(C){(!isNaN(C.options.maxZoom)||!isNaN(C.options.minZoom))&&(this._zoomBoundLayers[H(C)]=C,this._updateZoomLevels())},_removeZoomLimit:function(C){var n=H(C);this._zoomBoundLayers[n]&&(delete this._zoomBoundLayers[n],this._updateZoomLevels())},_updateZoomLevels:function(){var C=1/0,n=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var f=this._zoomBoundLayers[u].options;C=f.minZoom===void 0?C:Math.min(C,f.minZoom),n=f.maxZoom===void 0?n:Math.max(n,f.maxZoom)}this._layersMaxZoom=n===-1/0?void 0:n,this._layersMinZoom=C===1/0?void 0:C,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var u7=B5.extend({initialize:function(C,n){x(this,n),this._layers={};var l,u;if(C)for(l=0,u=C.length;l<u;l++)this.addLayer(C[l])},addLayer:function(C){var n=this.getLayerId(C);return this._layers[n]=C,this._map&&this._map.addLayer(C),this},removeLayer:function(C){var n=C in this._layers?C:this.getLayerId(C);return this._map&&this._layers[n]&&this._map.removeLayer(this._layers[n]),delete this._layers[n],this},hasLayer:function(C){var n=typeof C=="number"?C:this.getLayerId(C);return n in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(C){var n=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[C]&&u[C].apply(u,n);return this},onAdd:function(C){this.eachLayer(C.addLayer,C)},onRemove:function(C){this.eachLayer(C.removeLayer,C)},eachLayer:function(C,n){for(var l in this._layers)C.call(n,this._layers[l]);return this},getLayer:function(C){return this._layers[C]},getLayers:function(){var C=[];return this.eachLayer(C.push,C),C},setZIndex:function(C){return this.invoke("setZIndex",C)},getLayerId:function(C){return H(C)}}),gV=function(C,n){return new u7(C,n)},h0=u7.extend({addLayer:function(C){return this.hasLayer(C)?this:(C.addEventParent(this),u7.prototype.addLayer.call(this,C),this.fire("layeradd",{layer:C}))},removeLayer:function(C){return this.hasLayer(C)?(C in this._layers&&(C=this._layers[C]),C.removeEventParent(this),u7.prototype.removeLayer.call(this,C),this.fire("layerremove",{layer:C})):this},setStyle:function(C){return this.invoke("setStyle",C)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var C=new V1;for(var n in this._layers){var l=this._layers[n];C.extend(l.getBounds?l.getBounds():l.getLatLng())}return C}}),_V=function(C,n){return new h0(C,n)},m7=k1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(C){x(this,C)},createIcon:function(C){return this._createIcon("icon",C)},createShadow:function(C){return this._createIcon("shadow",C)},_createIcon:function(C,n){var l=this._getIconUrl(C);if(!l){if(C==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,n&&n.tagName==="IMG"?n:null);return this._setIconStyles(u,C),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(C,n){var l=this.options,u=l[n+"Size"];typeof u=="number"&&(u=[u,u]);var f=n1(u),S=n1(n==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));C.className="leaflet-marker-"+n+" "+(l.className||""),S&&(C.style.marginLeft=-S.x+"px",C.style.marginTop=-S.y+"px"),f&&(C.style.width=f.x+"px",C.style.height=f.y+"px")},_createImg:function(C,n){return n=n||document.createElement("img"),n.src=C,n},_getIconUrl:function(C){return M1.retina&&this.options[C+"RetinaUrl"]||this.options[C+"Url"]}});function SV(C){return new m7(C)}var h4=m7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(C){return typeof h4.imagePath!="string"&&(h4.imagePath=this._detectIconPath()),(this.options.imagePath||h4.imagePath)+m7.prototype._getIconUrl.call(this,C)},_stripUrl:function(C){var n=function(l,u,f){var S=u.exec(l);return S&&S[f]};return C=n(C,/^url\((['"])?(.+)\1\)$/,2),C&&n(C,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var C=d1("div","leaflet-default-icon-path",document.body),n=R1(C,"background-image")||R1(C,"backgroundImage");if(document.body.removeChild(C),n=this._stripUrl(n),n)return n;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),ti=e0.extend({initialize:function(C){this._marker=C},addHooks:function(){var C=this._marker._icon;this._draggable||(this._draggable=new K0(C,C,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),f1(C,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&E1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(C){var n=this._marker,l=n._map,u=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,S=r5(n._icon),T=l.getPixelBounds(),F=l.getPixelOrigin(),z=t1(T.min._subtract(F).add(f),T.max._subtract(F).subtract(f));if(!z.contains(S)){var j=n1((Math.max(z.max.x,S.x)-z.max.x)/(T.max.x-z.max.x)-(Math.min(z.min.x,S.x)-z.min.x)/(T.min.x-z.min.x),(Math.max(z.max.y,S.y)-z.max.y)/(T.max.y-z.max.y)-(Math.min(z.min.y,S.y)-z.min.y)/(T.min.y-z.min.y)).multiplyBy(u);l.panBy(j,{animate:!1}),this._draggable._newPos._add(j),this._draggable._startPos._add(j),r2(n._icon,this._draggable._newPos),this._onDrag(C),this._panRequest=i1(this._adjustPan.bind(this,C))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(C){this._marker.options.autoPan&&(m1(this._panRequest),this._panRequest=i1(this._adjustPan.bind(this,C)))},_onDrag:function(C){var n=this._marker,l=n._shadow,u=r5(n._icon),f=n._map.layerPointToLatLng(u);l&&r2(l,u),n._latlng=f,C.latlng=f,C.oldLatLng=this._oldLatLng,n.fire("move",C).fire("drag",C)},_onDragEnd:function(C){m1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",C)}}),n6=B5.extend({options:{icon:new h4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(C,n){x(this,n),this._latlng=L1(C)},onAdd:function(C){this._zoomAnimated=this._zoomAnimated&&C.options.markerZoomAnimation,this._zoomAnimated&&C.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(C){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&C.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(C){var n=this._latlng;return this._latlng=L1(C),this.update(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},setZIndexOffset:function(C){return this.options.zIndexOffset=C,this.update()},getIcon:function(){return this.options.icon},setIcon:function(C){return this.options.icon=C,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var C=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(C)}return this},_initIcon:function(){var C=this.options,n="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=C.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,C.title&&(l.title=C.title),l.tagName==="IMG"&&(l.alt=C.alt||"")),f1(l,n),C.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,C.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&g1(l,"focus",this._panOnFocus,this);var f=C.icon.createShadow(this._shadow),S=!1;f!==this._shadow&&(this._removeShadow(),S=!0),f&&(f1(f,n),f.alt=""),this._shadow=f,C.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&S&&this.getPane(C.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&D1(this._icon,"focus",this._panOnFocus,this),S1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&S1(this._shadow),this._shadow=null},_setPos:function(C){this._icon&&r2(this._icon,C),this._shadow&&r2(this._shadow,C),this._zIndex=C.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(C){this._icon&&(this._icon.style.zIndex=this._zIndex+C)},_animateZoom:function(C){var n=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center).round();this._setPos(n)},_initInteraction:function(){if(this.options.interactive&&(f1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ti)){var C=this.options.draggable;this.dragging&&(C=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ti(this),C&&this.dragging.enable()}},setOpacity:function(C){return this.options.opacity=C,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var C=this.options.opacity;this._icon&&h2(this._icon,C),this._shadow&&h2(this._shadow,C)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var C=this._map;if(C){var n=this.options.icon.options,l=n.iconSize?n1(n.iconSize):n1(0,0),u=n.iconAnchor?n1(n.iconAnchor):n1(0,0);C.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function wV(C,n){return new n6(C,n)}var X0=B5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(C){this._renderer=C.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(C){return x(this,C),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&C&&Object.prototype.hasOwnProperty.call(C,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),V6=X0.extend({options:{fill:!0,radius:10},initialize:function(C,n){x(this,n),this._latlng=L1(C),this._radius=this.options.radius},setLatLng:function(C){var n=this._latlng;return this._latlng=L1(C),this.redraw(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(C){return this.options.radius=this._radius=C,this.redraw()},getRadius:function(){return this._radius},setStyle:function(C){var n=C&&C.radius||this._radius;return X0.prototype.setStyle.call(this,C),this.setRadius(n),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var C=this._radius,n=this._radiusY||C,l=this._clickTolerance(),u=[C+l,n+l];this._pxBounds=new U(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(C){return C.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function bV(C,n){return new V6(C,n)}var Ot=V6.extend({initialize:function(C,n,l){if(typeof n=="number"&&(n=e({},l,{radius:n})),x(this,n),this._latlng=L1(C),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(C){return this._mRadius=C,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var C=[this._radius,this._radiusY||this._radius];return new V1(this._map.layerPointToLatLng(this._point.subtract(C)),this._map.layerPointToLatLng(this._point.add(C)))},setStyle:X0.prototype.setStyle,_project:function(){var C=this._latlng.lng,n=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===T1.distance){var f=Math.PI/180,S=this._mRadius/T1.R/f,T=l.project([n+S,C]),F=l.project([n-S,C]),z=T.add(F).divideBy(2),j=l.unproject(z).lat,C1=Math.acos((Math.cos(S*f)-Math.sin(n*f)*Math.sin(j*f))/(Math.cos(n*f)*Math.cos(j*f)))/f;(isNaN(C1)||C1===0)&&(C1=S/Math.cos(Math.PI/180*n)),this._point=z.subtract(l.getPixelOrigin()),this._radius=isNaN(C1)?0:z.x-l.project([j,C-C1]).x,this._radiusY=z.y-T.y}else{var x1=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(x1).x}this._updateBounds()}});function yV(C,n,l){return new Ot(C,n,l)}var f0=X0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(C,n){x(this,n),this._setLatLngs(C)},getLatLngs:function(){return this._latlngs},setLatLngs:function(C){return this._setLatLngs(C),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(C){for(var n=1/0,l=null,u=m4,f,S,T=0,F=this._parts.length;T<F;T++)for(var z=this._parts[T],j=1,C1=z.length;j<C1;j++){f=z[j-1],S=z[j];var x1=u(C,f,S,!0);x1<n&&(n=x1,l=u(C,f,S))}return l&&(l.distance=Math.sqrt(n)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Xr(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(C,n){return n=n||this._defaultShape(),C=L1(C),n.push(C),this._bounds.extend(C),this.redraw()},_setLatLngs:function(C){this._bounds=new V1,this._latlngs=this._convertLatLngs(C)},_defaultShape:function(){return w5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(C){for(var n=[],l=w5(C),u=0,f=C.length;u<f;u++)l?(n[u]=L1(C[u]),this._bounds.extend(n[u])):n[u]=this._convertLatLngs(C[u]);return n},_project:function(){var C=new U;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,C),this._bounds.isValid()&&C.isValid()&&(this._rawPxBounds=C,this._updateBounds())},_updateBounds:function(){var C=this._clickTolerance(),n=new X(C,C);this._rawPxBounds&&(this._pxBounds=new U([this._rawPxBounds.min.subtract(n),this._rawPxBounds.max.add(n)]))},_projectLatlngs:function(C,n,l){var u=C[0]instanceof s1,f=C.length,S,T;if(u){for(T=[],S=0;S<f;S++)T[S]=this._map.latLngToLayerPoint(C[S]),l.extend(T[S]);n.push(T)}else for(S=0;S<f;S++)this._projectLatlngs(C[S],n,l)},_clipPoints:function(){var C=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}var n=this._parts,l,u,f,S,T,F,z;for(l=0,f=0,S=this._rings.length;l<S;l++)for(z=this._rings[l],u=0,T=z.length;u<T-1;u++)F=Qr(z[u],z[u+1],C,u,!0),F&&(n[f]=n[f]||[],n[f].push(F[0]),(F[1]!==z[u+1]||u===T-2)&&(n[f].push(F[1]),f++))}},_simplifyPoints:function(){for(var C=this._parts,n=this.options.smoothFactor,l=0,u=C.length;l<u;l++)C[l]=Gr(C[l],n)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(C,n){var l,u,f,S,T,F,z=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(l=0,S=this._parts.length;l<S;l++)for(F=this._parts[l],u=0,T=F.length,f=T-1;u<T;f=u++)if(!(!n&&u===0)&&qr(C,F[f],F[u])<=z)return!0;return!1}});function ZV(C,n){return new f0(C,n)}f0._flat=Kr;var h7=f0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return jr(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(C){var n=f0.prototype._convertLatLngs.call(this,C),l=n.length;return l>=2&&n[0]instanceof s1&&n[0].equals(n[l-1])&&n.pop(),n},_setLatLngs:function(C){f0.prototype._setLatLngs.call(this,C),w5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return w5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var C=this._renderer._bounds,n=this.options.weight,l=new X(n,n);if(C=new U(C.min.subtract(l),C.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,f=this._rings.length,S;u<f;u++)S=Ur(this._rings[u],C,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(C){var n=!1,l,u,f,S,T,F,z,j;if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(S=0,z=this._parts.length;S<z;S++)for(l=this._parts[S],T=0,j=l.length,F=j-1;T<j;F=T++)u=l[T],f=l[F],u.y>C.y!=f.y>C.y&&C.x<(f.x-u.x)*(C.y-u.y)/(f.y-u.y)+u.x&&(n=!n);return n||f0.prototype._containsPoint.call(this,C,!0)}});function kV(C,n){return new h7(C,n)}var A0=h0.extend({initialize:function(C,n){x(this,n),this._layers={},C&&this.addData(C)},addData:function(C){var n=E(C)?C:C.features,l,u,f;if(n){for(l=0,u=n.length;l<u;l++)f=n[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var S=this.options;if(S.filter&&!S.filter(C))return this;var T=s6(C,S);return T?(T.feature=M6(C),T.defaultOptions=T.options,this.resetStyle(T),S.onEachFeature&&S.onEachFeature(C,T),this.addLayer(T)):this},resetStyle:function(C){return C===void 0?this.eachLayer(this.resetStyle,this):(C.options=e({},C.defaultOptions),this._setLayerStyle(C,this.options.style),this)},setStyle:function(C){return this.eachLayer(function(n){this._setLayerStyle(n,C)},this)},_setLayerStyle:function(C,n){C.setStyle&&(typeof n=="function"&&(n=n(C.feature)),C.setStyle(n))}});function s6(C,n){var l=C.type==="Feature"?C.geometry:C,u=l?l.coordinates:null,f=[],S=n&&n.pointToLayer,T=n&&n.coordsToLatLng||Tt,F,z,j,C1;if(!u&&!l)return null;switch(l.type){case"Point":return F=T(u),ei(S,C,F,n);case"MultiPoint":for(j=0,C1=u.length;j<C1;j++)F=T(u[j]),f.push(ei(S,C,F,n));return new h0(f);case"LineString":case"MultiLineString":return z=L6(u,l.type==="LineString"?0:1,T),new f0(z,n);case"Polygon":case"MultiPolygon":return z=L6(u,l.type==="Polygon"?1:2,T),new h7(z,n);case"GeometryCollection":for(j=0,C1=l.geometries.length;j<C1;j++){var x1=s6({geometry:l.geometries[j],type:"Feature",properties:C.properties},n);x1&&f.push(x1)}return new h0(f);case"FeatureCollection":for(j=0,C1=l.features.length;j<C1;j++){var P1=s6(l.features[j],n);P1&&f.push(P1)}return new h0(f);default:throw new Error("Invalid GeoJSON object.")}}function ei(C,n,l,u){return C?C(n,l):new n6(l,u&&u.markersInheritOptions&&u)}function Tt(C){return new s1(C[1],C[0],C[2])}function L6(C,n,l){for(var u=[],f=0,S=C.length,T;f<S;f++)T=n?L6(C[f],n-1,l):(l||Tt)(C[f]),u.push(T);return u}function Pt(C,n){return C=L1(C),C.alt!==void 0?[p(C.lng,n),p(C.lat,n),p(C.alt,n)]:[p(C.lng,n),p(C.lat,n)]}function l6(C,n,l,u){for(var f=[],S=0,T=C.length;S<T;S++)f.push(n?l6(C[S],w5(C[S])?0:n-1,l,u):Pt(C[S],u));return!n&&l&&f.length>0&&f.push(f[0].slice()),f}function f7(C,n){return C.feature?e({},C.feature,{geometry:n}):M6(n)}function M6(C){return C.type==="Feature"||C.type==="FeatureCollection"?C:{type:"Feature",properties:{},geometry:C}}var Et={toGeoJSON:function(C){return f7(this,{type:"Point",coordinates:Pt(this.getLatLng(),C)})}};n6.include(Et),Ot.include(Et),V6.include(Et),f0.include({toGeoJSON:function(C){var n=!w5(this._latlngs),l=l6(this._latlngs,n?1:0,!1,C);return f7(this,{type:(n?"Multi":"")+"LineString",coordinates:l})}}),h7.include({toGeoJSON:function(C){var n=!w5(this._latlngs),l=n&&!w5(this._latlngs[0]),u=l6(this._latlngs,l?2:n?1:0,!0,C);return n||(u=[u]),f7(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),u7.include({toMultiPoint:function(C){var n=[];return this.eachLayer(function(l){n.push(l.toGeoJSON(C).geometry.coordinates)}),f7(this,{type:"MultiPoint",coordinates:n})},toGeoJSON:function(C){var n=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(n==="MultiPoint")return this.toMultiPoint(C);var l=n==="GeometryCollection",u=[];return this.eachLayer(function(f){if(f.toGeoJSON){var S=f.toGeoJSON(C);if(l)u.push(S.geometry);else{var T=M6(S);T.type==="FeatureCollection"?u.push.apply(u,T.features):u.push(T)}}}),l?f7(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function ri(C,n){return new A0(C,n)}var OV=ri,c6=B5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(C,n,l){this._url=C,this._bounds=h1(n),x(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(f1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){S1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(C){return this.options.opacity=C,this._image&&this._updateOpacity(),this},setStyle:function(C){return C.opacity&&this.setOpacity(C.opacity),this},bringToFront:function(){return this._map&&s5(this._image),this},bringToBack:function(){return this._map&&j2(this._image),this},setUrl:function(C){return this._url=C,this._image&&(this._image.src=C),this},setBounds:function(C){return this._bounds=h1(C),this._map&&this._reset(),this},getEvents:function(){var C={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var C=this._url.tagName==="IMG",n=this._image=C?this._url:d1("img");if(f1(n,"leaflet-image-layer"),this._zoomAnimated&&f1(n,"leaflet-zoom-animated"),this.options.className&&f1(n,this.options.className),n.onselectstart=M,n.onmousemove=M,n.onload=o(this.fire,this,"load"),n.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),C){this._url=n.src;return}n.src=this._url,n.alt=this.options.alt},_animateZoom:function(C){var n=this._map.getZoomScale(C.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,C.zoom,C.center).min;e5(this._image,l,n)},_reset:function(){var C=this._image,n=new U(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=n.getSize();r2(C,n.min),C.style.width=l.x+"px",C.style.height=l.y+"px"},_updateOpacity:function(){h2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var C=this.options.errorOverlayUrl;C&&this._url!==C&&(this._url=C,this._image.src=C)},getCenter:function(){return this._bounds.getCenter()}}),TV=function(C,n,l){return new c6(C,n,l)},ii=c6.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var C=this._url.tagName==="VIDEO",n=this._image=C?this._url:d1("video");if(f1(n,"leaflet-image-layer"),this._zoomAnimated&&f1(n,"leaflet-zoom-animated"),this.options.className&&f1(n,this.options.className),n.onselectstart=M,n.onmousemove=M,n.onloadeddata=o(this.fire,this,"load"),C){for(var l=n.getElementsByTagName("source"),u=[],f=0;f<l.length;f++)u.push(l[f].src);this._url=l.length>0?u:[n.src];return}E(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(n.style,"objectFit")&&(n.style.objectFit="fill"),n.autoplay=!!this.options.autoplay,n.loop=!!this.options.loop,n.muted=!!this.options.muted,n.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var T=d1("source");T.src=this._url[S],n.appendChild(T)}}});function PV(C,n,l){return new ii(C,n,l)}var oi=c6.extend({_initImage:function(){var C=this._image=this._url;f1(C,"leaflet-image-layer"),this._zoomAnimated&&f1(C,"leaflet-zoom-animated"),this.options.className&&f1(C,this.options.className),C.onselectstart=M,C.onmousemove=M}});function EV(C,n,l){return new oi(C,n,l)}var r0=B5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(C,n){C&&(C instanceof s1||E(C))?(this._latlng=L1(C),x(this,n)):(x(this,C),this._source=n),this.options.content&&(this._content=this.options.content)},openOn:function(C){return C=arguments.length?C:this._source._map,C.hasLayer(this)||C.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(C){return this._map?this.close():(arguments.length?this._source=C:C=this._source,this._prepareOpen(),this.openOn(C._map)),this},onAdd:function(C){this._zoomAnimated=C._zoomAnimated,this._container||this._initLayout(),C._fadeAnimated&&h2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),C._fadeAnimated&&h2(this._container,1),this.bringToFront(),this.options.interactive&&(f1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(C){C._fadeAnimated?(h2(this._container,0),this._removeTimeout=setTimeout(o(S1,void 0,this._container),200)):S1(this._container),this.options.interactive&&(E1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(C){return this._latlng=L1(C),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(C){return this._content=C,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var C={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&s5(this._container),this},bringToBack:function(){return this._map&&j2(this._container),this},_prepareOpen:function(C){var n=this._source;if(!n._map)return!1;if(n instanceof h0){n=null;var l=this._source._layers;for(var u in l)if(l[u]._map){n=l[u];break}if(!n)return!1;this._source=n}if(!C)if(n.getCenter)C=n.getCenter();else if(n.getLatLng)C=n.getLatLng();else if(n.getBounds)C=n.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(C),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var C=this._contentNode,n=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof n=="string")C.innerHTML=n;else{for(;C.hasChildNodes();)C.removeChild(C.firstChild);C.appendChild(n)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var C=this._map.latLngToLayerPoint(this._latlng),n=n1(this.options.offset),l=this._getAnchor();this._zoomAnimated?r2(this._container,C.add(l)):n=n.add(C).add(l);var u=this._containerBottom=-n.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+n.x;this._container.style.bottom=u+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});o1.include({_initOverlay:function(C,n,l,u){var f=n;return f instanceof C||(f=new C(u).setContent(n)),l&&f.setLatLng(l),f}}),B5.include({_initOverlay:function(C,n,l,u){var f=l;return f instanceof C?(x(f,u),f._source=this):(f=n&&!u?n:new C(u,this),f.setContent(l)),f}});var d6=r0.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(C){return C=arguments.length?C:this._source._map,!C.hasLayer(this)&&C._popup&&C._popup.options.autoClose&&C.removeLayer(C._popup),C._popup=this,r0.prototype.openOn.call(this,C)},onAdd:function(C){r0.prototype.onAdd.call(this,C),C.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof X0||this._source.on("preclick",D5))},onRemove:function(C){r0.prototype.onRemove.call(this,C),C.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof X0||this._source.off("preclick",D5))},getEvents:function(){var C=r0.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(C.preclick=this.close),this.options.keepInView&&(C.moveend=this._adjustPan),C},_initLayout:function(){var C="leaflet-popup",n=this._container=d1("div",C+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=d1("div",C+"-content-wrapper",n);if(this._contentNode=d1("div",C+"-content",l),F1(n),v1(this._contentNode),g1(n,"contextmenu",D5),this._tipContainer=d1("div",C+"-tip-container",n),this._tip=d1("div",C+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=d1("a",C+"-close-button",n);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',g1(u,"click",function(f){B1(f),this.close()},this)}},_updateLayout:function(){var C=this._contentNode,n=C.style;n.width="",n.whiteSpace="nowrap";var l=C.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),n.width=l+1+"px",n.whiteSpace="",n.height="";var u=C.offsetHeight,f=this.options.maxHeight,S="leaflet-popup-scrolled";f&&u>f?(n.height=f+"px",f1(C,S)):E1(C,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(C){var n=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center),l=this._getAnchor();r2(this._container,n.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var C=this._map,n=parseInt(R1(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+n,u=this._containerWidth,f=new X(this._containerLeft,-l-this._containerBottom);f._add(r5(this._container));var S=C.layerPointToContainerPoint(f),T=n1(this.options.autoPanPadding),F=n1(this.options.autoPanPaddingTopLeft||T),z=n1(this.options.autoPanPaddingBottomRight||T),j=C.getSize(),C1=0,x1=0;S.x+u+z.x>j.x&&(C1=S.x+u-j.x+z.x),S.x-C1-F.x<0&&(C1=S.x-F.x),S.y+l+z.y>j.y&&(x1=S.y+l-j.y+z.y),S.y-x1-F.y<0&&(x1=S.y-F.y),(C1||x1)&&(this.options.keepInView&&(this._autopanning=!0),C.fire("autopanstart").panBy([C1,x1]))}},_getAnchor:function(){return n1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),FV=function(C,n){return new d6(C,n)};o1.mergeOptions({closePopupOnClick:!0}),o1.include({openPopup:function(C,n,l){return this._initOverlay(d6,C,n,l).openOn(this),this},closePopup:function(C){return C=arguments.length?C:this._popup,C&&C.close(),this}}),B5.include({bindPopup:function(C,n){return this._popup=this._initOverlay(d6,this._popup,C,n),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(C){return this._popup&&(this instanceof h0||(this._popup._source=this),this._popup._prepareOpen(C||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(C){return this._popup&&this._popup.setContent(C),this},getPopup:function(){return this._popup},_openPopup:function(C){if(!(!this._popup||!this._map)){d2(C);var n=C.layer||C.target;if(this._popup._source===n&&!(n instanceof X0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(C.latlng);return}this._popup._source=n,this.openPopup(C.latlng)}},_movePopup:function(C){this._popup.setLatLng(C.latlng)},_onKeyPress:function(C){C.originalEvent.keyCode===13&&this._openPopup(C)}});var p6=r0.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(C){r0.prototype.onAdd.call(this,C),this.setOpacity(this.options.opacity),C.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(C){r0.prototype.onRemove.call(this,C),C.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var C=r0.prototype.getEvents.call(this);return this.options.permanent||(C.preclick=this.close),C},_initLayout:function(){var C="leaflet-tooltip",n=C+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=d1("div",n),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+H(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(C){var n,l,u=this._map,f=this._container,S=u.latLngToContainerPoint(u.getCenter()),T=u.layerPointToContainerPoint(C),F=this.options.direction,z=f.offsetWidth,j=f.offsetHeight,C1=n1(this.options.offset),x1=this._getAnchor();F==="top"?(n=z/2,l=j):F==="bottom"?(n=z/2,l=0):F==="center"?(n=z/2,l=j/2):F==="right"?(n=0,l=j/2):F==="left"?(n=z,l=j/2):T.x<S.x?(F="right",n=0,l=j/2):(F="left",n=z+(C1.x+x1.x)*2,l=j/2),C=C.subtract(n1(n,l,!0)).add(C1).add(x1),E1(f,"leaflet-tooltip-right"),E1(f,"leaflet-tooltip-left"),E1(f,"leaflet-tooltip-top"),E1(f,"leaflet-tooltip-bottom"),f1(f,"leaflet-tooltip-"+F),r2(f,C)},_updatePosition:function(){var C=this._map.latLngToLayerPoint(this._latlng);this._setPosition(C)},setOpacity:function(C){this.options.opacity=C,this._container&&h2(this._container,C)},_animateZoom:function(C){var n=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center);this._setPosition(n)},_getAnchor:function(){return n1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),$V=function(C,n){return new p6(C,n)};o1.include({openTooltip:function(C,n,l){return this._initOverlay(p6,C,n,l).openOn(this),this},closeTooltip:function(C){return C.close(),this}}),B5.include({bindTooltip:function(C,n){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(p6,this._tooltip,C,n),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(C){if(!(!C&&this._tooltipHandlersAdded)){var n=C?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[n](l),this._tooltipHandlersAdded=!C}},openTooltip:function(C){return this._tooltip&&(this instanceof h0||(this._tooltip._source=this),this._tooltip._prepareOpen(C)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(C){return this._tooltip&&this._tooltip.setContent(C),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(C){var n=typeof C.getElement=="function"&&C.getElement();n&&(g1(n,"focus",function(){this._tooltip._source=C,this.openTooltip()},this),g1(n,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(C){var n=typeof C.getElement=="function"&&C.getElement();n&&n.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(C){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var n=this;this._map.once("moveend",function(){n._openOnceFlag=!1,n._openTooltip(C)});return}this._tooltip._source=C.layer||C.target,this.openTooltip(this._tooltip.options.sticky?C.latlng:void 0)}},_moveTooltip:function(C){var n=C.latlng,l,u;this._tooltip.options.sticky&&C.originalEvent&&(l=this._map.mouseEventToContainerPoint(C.originalEvent),u=this._map.containerPointToLayerPoint(l),n=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(n)}});var Ci=m7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(C){var n=C&&C.tagName==="DIV"?C:document.createElement("div"),l=this.options;if(l.html instanceof Element?(_2(n),n.appendChild(l.html)):n.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=n1(l.bgPos);n.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(n,"icon"),n},createShadow:function(){return null}});function RV(C){return new Ci(C)}m7.Default=h4;var f4=B5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:M1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(C){x(this,C)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(C){C._addZoomLimit(this)},onRemove:function(C){this._removeAllTiles(),S1(this._container),C._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(s5(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(j2(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(C){return this.options.opacity=C,this._updateOpacity(),this},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var C=this._clampZoom(this._map.getZoom());C!==this._tileZoom&&(this._tileZoom=C,this._updateLevels()),this._update()}return this},getEvents:function(){var C={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=V(this._onMoveEnd,this.options.updateInterval,this)),C.move=this._onMove),this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},createTile:function(){return document.createElement("div")},getTileSize:function(){var C=this.options.tileSize;return C instanceof X?C:new X(C,C)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(C){for(var n=this.getPane().children,l=-C(-1/0,1/0),u=0,f=n.length,S;u<f;u++)S=n[u].style.zIndex,n[u]!==this._container&&S&&(l=C(l,+S));isFinite(l)&&(this.options.zIndex=l+C(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!M1.ielt9){h2(this._container,this.options.opacity);var C=+new Date,n=!1,l=!1;for(var u in this._tiles){var f=this._tiles[u];if(!(!f.current||!f.loaded)){var S=Math.min(1,(C-f.loaded)/200);h2(f.el,S),S<1?n=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),n&&(m1(this._fadeFrame),this._fadeFrame=i1(this._updateOpacity,this))}},_onOpaqueTile:M,_initContainer:function(){this._container||(this._container=d1("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var C=this._tileZoom,n=this.options.maxZoom;if(C!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===C?(this._levels[l].el.style.zIndex=n-Math.abs(C-l),this._onUpdateLevel(l)):(S1(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[C],f=this._map;return u||(u=this._levels[C]={},u.el=d1("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=n,u.origin=f.project(f.unproject(f.getPixelOrigin()),C).round(),u.zoom=C,this._setZoomTransform(u,f.getCenter(),f.getZoom()),M(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:M,_onRemoveLevel:M,_onCreateLevel:M,_pruneTiles:function(){if(this._map){var C,n,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(C in this._tiles)n=this._tiles[C],n.retain=n.current;for(C in this._tiles)if(n=this._tiles[C],n.current&&!n.active){var u=n.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(C in this._tiles)this._tiles[C].retain||this._removeTile(C)}},_removeTilesAtZoom:function(C){for(var n in this._tiles)this._tiles[n].coords.z===C&&this._removeTile(n)},_removeAllTiles:function(){for(var C in this._tiles)this._removeTile(C)},_invalidateAll:function(){for(var C in this._levels)S1(this._levels[C].el),this._onRemoveLevel(Number(C)),delete this._levels[C];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(C,n,l,u){var f=Math.floor(C/2),S=Math.floor(n/2),T=l-1,F=new X(+f,+S);F.z=+T;var z=this._tileCoordsToKey(F),j=this._tiles[z];return j&&j.active?(j.retain=!0,!0):(j&&j.loaded&&(j.retain=!0),T>u?this._retainParent(f,S,T,u):!1)},_retainChildren:function(C,n,l,u){for(var f=2*C;f<2*C+2;f++)for(var S=2*n;S<2*n+2;S++){var T=new X(f,S);T.z=l+1;var F=this._tileCoordsToKey(T),z=this._tiles[F];if(z&&z.active){z.retain=!0;continue}else z&&z.loaded&&(z.retain=!0);l+1<u&&this._retainChildren(f,S,l+1,u)}},_resetView:function(C){var n=C&&(C.pinch||C.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),n,n)},_animateZoom:function(C){this._setView(C.center,C.zoom,!0,C.noUpdate)},_clampZoom:function(C){var n=this.options;return n.minNativeZoom!==void 0&&C<n.minNativeZoom?n.minNativeZoom:n.maxNativeZoom!==void 0&&n.maxNativeZoom<C?n.maxNativeZoom:C},_setView:function(C,n,l,u){var f=Math.round(n);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var S=this.options.updateWhenZooming&&f!==this._tileZoom;(!u||S)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(C),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(C,n)},_setZoomTransforms:function(C,n){for(var l in this._levels)this._setZoomTransform(this._levels[l],C,n)},_setZoomTransform:function(C,n,l){var u=this._map.getZoomScale(l,C.zoom),f=C.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(n,l)).round();M1.any3d?e5(C.el,f,u):r2(C.el,f)},_resetGrid:function(){var C=this._map,n=C.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=n.wrapLng&&!this.options.noWrap&&[Math.floor(C.project([0,n.wrapLng[0]],u).x/l.x),Math.ceil(C.project([0,n.wrapLng[1]],u).x/l.y)],this._wrapY=n.wrapLat&&!this.options.noWrap&&[Math.floor(C.project([n.wrapLat[0],0],u).y/l.x),Math.ceil(C.project([n.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(C){var n=this._map,l=n._animatingZoom?Math.max(n._animateToZoom,n.getZoom()):n.getZoom(),u=n.getZoomScale(l,this._tileZoom),f=n.project(C,this._tileZoom).floor(),S=n.getSize().divideBy(u*2);return new U(f.subtract(S),f.add(S))},_update:function(C){var n=this._map;if(n){var l=this._clampZoom(n.getZoom());if(C===void 0&&(C=n.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(C),f=this._pxBoundsToTileRange(u),S=f.getCenter(),T=[],F=this.options.keepBuffer,z=new U(f.getBottomLeft().subtract([F,-F]),f.getTopRight().add([F,-F]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var j in this._tiles){var C1=this._tiles[j].coords;(C1.z!==this._tileZoom||!z.contains(new X(C1.x,C1.y)))&&(this._tiles[j].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(C,l);return}for(var x1=f.min.y;x1<=f.max.y;x1++)for(var P1=f.min.x;P1<=f.max.x;P1++){var q2=new X(P1,x1);if(q2.z=this._tileZoom,!!this._isValidTile(q2)){var b2=this._tiles[this._tileCoordsToKey(q2)];b2?b2.current=!0:T.push(q2)}}if(T.sort(function(i5,v7){return i5.distanceTo(S)-v7.distanceTo(S)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var b5=document.createDocumentFragment();for(P1=0;P1<T.length;P1++)this._addTile(T[P1],b5);this._level.el.appendChild(b5)}}}},_isValidTile:function(C){var n=this._map.options.crs;if(!n.infinite){var l=this._globalTileRange;if(!n.wrapLng&&(C.x<l.min.x||C.x>l.max.x)||!n.wrapLat&&(C.y<l.min.y||C.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(C);return h1(this.options.bounds).overlaps(u)},_keyToBounds:function(C){return this._tileCoordsToBounds(this._keyToTileCoords(C))},_tileCoordsToNwSe:function(C){var n=this._map,l=this.getTileSize(),u=C.scaleBy(l),f=u.add(l),S=n.unproject(u,C.z),T=n.unproject(f,C.z);return[S,T]},_tileCoordsToBounds:function(C){var n=this._tileCoordsToNwSe(C),l=new V1(n[0],n[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(C){return C.x+":"+C.y+":"+C.z},_keyToTileCoords:function(C){var n=C.split(":"),l=new X(+n[0],+n[1]);return l.z=+n[2],l},_removeTile:function(C){var n=this._tiles[C];n&&(S1(n.el),delete this._tiles[C],this.fire("tileunload",{tile:n.el,coords:this._keyToTileCoords(C)}))},_initTile:function(C){f1(C,"leaflet-tile");var n=this.getTileSize();C.style.width=n.x+"px",C.style.height=n.y+"px",C.onselectstart=M,C.onmousemove=M,M1.ielt9&&this.options.opacity<1&&h2(C,this.options.opacity)},_addTile:function(C,n){var l=this._getTilePos(C),u=this._tileCoordsToKey(C),f=this.createTile(this._wrapCoords(C),o(this._tileReady,this,C));this._initTile(f),this.createTile.length<2&&i1(o(this._tileReady,this,C,null,f)),r2(f,l),this._tiles[u]={el:f,coords:C,current:!0},n.appendChild(f),this.fire("tileloadstart",{tile:f,coords:C})},_tileReady:function(C,n,l){n&&this.fire("tileerror",{error:n,tile:l,coords:C});var u=this._tileCoordsToKey(C);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?(h2(l.el,0),m1(this._fadeFrame),this._fadeFrame=i1(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),n||(f1(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:C})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),M1.ielt9||!this._map._fadeAnimated?i1(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(C){return C.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(C){var n=new X(this._wrapX?s(C.x,this._wrapX):C.x,this._wrapY?s(C.y,this._wrapY):C.y);return n.z=C.z,n},_pxBoundsToTileRange:function(C){var n=this.getTileSize();return new U(C.min.unscaleBy(n).floor(),C.max.unscaleBy(n).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var C in this._tiles)if(!this._tiles[C].loaded)return!1;return!0}});function DV(C){return new f4(C)}var A7=f4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(C,n){this._url=C,n=x(this,n),n.detectRetina&&M1.retina&&n.maxZoom>0?(n.tileSize=Math.floor(n.tileSize/2),n.zoomReverse?(n.zoomOffset--,n.minZoom=Math.min(n.maxZoom,n.minZoom+1)):(n.zoomOffset++,n.maxZoom=Math.max(n.minZoom,n.maxZoom-1)),n.minZoom=Math.max(0,n.minZoom)):n.zoomReverse?n.minZoom=Math.min(n.maxZoom,n.minZoom):n.maxZoom=Math.max(n.minZoom,n.maxZoom),typeof n.subdomains=="string"&&(n.subdomains=n.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(C,n){return this._url===C&&n===void 0&&(n=!0),this._url=C,n||this.redraw(),this},createTile:function(C,n){var l=document.createElement("img");return g1(l,"load",o(this._tileOnLoad,this,n,l)),g1(l,"error",o(this._tileOnError,this,n,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(C),l},getTileUrl:function(C){var n={r:M1.retina?"@2x":"",s:this._getSubdomain(C),x:C.x,y:C.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-C.y;this.options.tms&&(n.y=l),n["-y"]=l}return O(this._url,e(n,this.options))},_tileOnLoad:function(C,n){M1.ielt9?setTimeout(o(C,this,null,n),0):C(null,n)},_tileOnError:function(C,n,l){var u=this.options.errorTileUrl;u&&n.getAttribute("src")!==u&&(n.src=u),C(l,n)},_onTileRemove:function(C){C.tile.onload=null},_getZoomForUrl:function(){var C=this._tileZoom,n=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(C=n-C),C+u},_getSubdomain:function(C){var n=Math.abs(C.x+C.y)%this.options.subdomains.length;return this.options.subdomains[n]},_abortLoading:function(){var C,n;for(C in this._tiles)if(this._tiles[C].coords.z!==this._tileZoom&&(n=this._tiles[C].el,n.onload=M,n.onerror=M,!n.complete)){n.src=R;var l=this._tiles[C].coords;S1(n),delete this._tiles[C],this.fire("tileabort",{tile:n,coords:l})}},_removeTile:function(C){var n=this._tiles[C];if(n)return n.el.setAttribute("src",R),f4.prototype._removeTile.call(this,C)},_tileReady:function(C,n,l){if(!(!this._map||l&&l.getAttribute("src")===R))return f4.prototype._tileReady.call(this,C,n,l)}});function ai(C,n){return new A7(C,n)}var Hi=A7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(C,n){this._url=C;var l=e({},this.defaultWmsParams);for(var u in n)u in this.options||(l[u]=n[u]);n=x(this,n);var f=n.detectRetina&&M1.retina?2:1,S=this.getTileSize();l.width=S.x*f,l.height=S.y*f,this.wmsParams=l},onAdd:function(C){this._crs=this.options.crs||C.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var n=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[n]=this._crs.code,A7.prototype.onAdd.call(this,C)},getTileUrl:function(C){var n=this._tileCoordsToNwSe(C),l=this._crs,u=t1(l.project(n[0]),l.project(n[1])),f=u.min,S=u.max,T=(this._wmsVersion>=1.3&&this._crs===Jr?[f.y,f.x,S.y,S.x]:[f.x,f.y,S.x,S.y]).join(","),F=A7.prototype.getTileUrl.call(this,C);return F+y(this.wmsParams,F,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(C,n){return e(this.wmsParams,C),n||this.redraw(),this}});function BV(C,n){return new Hi(C,n)}A7.WMS=Hi,ai.wms=BV;var v0=B5.extend({options:{padding:.1},initialize:function(C){x(this,C),H(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),f1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var C={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(C.zoomanim=this._onAnimZoom),C},_onAnimZoom:function(C){this._updateTransform(C.center,C.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(C,n){var l=this._map.getZoomScale(n,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,n),S=u.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(C,n));M1.any3d?e5(this._container,S,l):r2(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var C in this._layers)this._layers[C]._reset()},_onZoomEnd:function(){for(var C in this._layers)this._layers[C]._project()},_updatePaths:function(){for(var C in this._layers)this._layers[C]._update()},_update:function(){var C=this.options.padding,n=this._map.getSize(),l=this._map.containerPointToLayerPoint(n.multiplyBy(-C)).round();this._bounds=new U(l,l.add(n.multiplyBy(1+C*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ni=v0.extend({options:{tolerance:0},getEvents:function(){var C=v0.prototype.getEvents.call(this);return C.viewprereset=this._onViewPreReset,C},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){v0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var C=this._container=document.createElement("canvas");g1(C,"mousemove",this._onMouseMove,this),g1(C,"click dblclick mousedown mouseup contextmenu",this._onClick,this),g1(C,"mouseout",this._handleMouseOut,this),C._leaflet_disable_events=!0,this._ctx=C.getContext("2d")},_destroyContainer:function(){m1(this._redrawRequest),delete this._ctx,S1(this._container),D1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var C;this._redrawBounds=null;for(var n in this._layers)C=this._layers[n],C._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){v0.prototype._update.call(this);var C=this._bounds,n=this._container,l=C.getSize(),u=M1.retina?2:1;r2(n,C.min),n.width=u*l.x,n.height=u*l.y,n.style.width=l.x+"px",n.style.height=l.y+"px",M1.retina&&this._ctx.scale(2,2),this._ctx.translate(-C.min.x,-C.min.y),this.fire("update")}},_reset:function(){v0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(C){this._updateDashArray(C),this._layers[H(C)]=C;var n=C._order={layer:C,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=n),this._drawLast=n,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(C){this._requestRedraw(C)},_removePath:function(C){var n=C._order,l=n.next,u=n.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete C._order,delete this._layers[H(C)],this._requestRedraw(C)},_updatePath:function(C){this._extendRedrawBounds(C),C._project(),C._update(),this._requestRedraw(C)},_updateStyle:function(C){this._updateDashArray(C),this._requestRedraw(C)},_updateDashArray:function(C){if(typeof C.options.dashArray=="string"){var n=C.options.dashArray.split(/[, ]+/),l=[],u,f;for(f=0;f<n.length;f++){if(u=Number(n[f]),isNaN(u))return;l.push(u)}C.options._dashArray=l}else C.options._dashArray=C.options.dashArray},_requestRedraw:function(C){this._map&&(this._extendRedrawBounds(C),this._redrawRequest=this._redrawRequest||i1(this._redraw,this))},_extendRedrawBounds:function(C){if(C._pxBounds){var n=(C.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new U,this._redrawBounds.extend(C._pxBounds.min.subtract([n,n])),this._redrawBounds.extend(C._pxBounds.max.add([n,n]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var C=this._redrawBounds;if(C){var n=C.getSize();this._ctx.clearRect(C.min.x,C.min.y,n.x,n.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var C,n=this._redrawBounds;if(this._ctx.save(),n){var l=n.getSize();this._ctx.beginPath(),this._ctx.rect(n.min.x,n.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)C=u.layer,(!n||C._pxBounds&&C._pxBounds.intersects(n))&&C._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(C,n){if(this._drawing){var l,u,f,S,T=C._parts,F=T.length,z=this._ctx;if(F){for(z.beginPath(),l=0;l<F;l++){for(u=0,f=T[l].length;u<f;u++)S=T[l][u],z[u?"lineTo":"moveTo"](S.x,S.y);n&&z.closePath()}this._fillStroke(z,C)}}},_updateCircle:function(C){if(!(!this._drawing||C._empty())){var n=C._point,l=this._ctx,u=Math.max(Math.round(C._radius),1),f=(Math.max(Math.round(C._radiusY),1)||u)/u;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(n.x,n.y/f,u,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,C)}},_fillStroke:function(C,n){var l=n.options;l.fill&&(C.globalAlpha=l.fillOpacity,C.fillStyle=l.fillColor||l.color,C.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(C.setLineDash&&C.setLineDash(n.options&&n.options._dashArray||[]),C.globalAlpha=l.opacity,C.lineWidth=l.weight,C.strokeStyle=l.color,C.lineCap=l.lineCap,C.lineJoin=l.lineJoin,C.stroke())},_onClick:function(C){for(var n=this._map.mouseEventToLayerPoint(C),l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(n)&&(!(C.type==="click"||C.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,C)},_onMouseMove:function(C){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var n=this._map.mouseEventToLayerPoint(C);this._handleMouseHover(C,n)}},_handleMouseOut:function(C){var n=this._hoveredLayer;n&&(E1(this._container,"leaflet-interactive"),this._fireEvent([n],C,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(C,n){if(!this._mouseHoverThrottled){for(var l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(n)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(C),u&&(f1(this._container,"leaflet-interactive"),this._fireEvent([u],C,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,C),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(C,n,l){this._map._fireDOMEvent(n,l||n.type,C)},_bringToFront:function(C){var n=C._order;if(n){var l=n.next,u=n.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),n.prev=this._drawLast,this._drawLast.next=n,n.next=null,this._drawLast=n,this._requestRedraw(C)}},_bringToBack:function(C){var n=C._order;if(n){var l=n.next,u=n.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(C)}}});function Vi(C){return M1.canvas?new ni(C):null}var A4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(C){return document.createElement("<lvml:"+C+' class="lvml">')}}catch{}return function(C){return document.createElement("<"+C+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),zV={_initContainer:function(){this._container=d1("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(v0.prototype._update.call(this),this.fire("update"))},_initPath:function(C){var n=C._container=A4("shape");f1(n,"leaflet-vml-shape "+(this.options.className||"")),n.coordsize="1 1",C._path=A4("path"),n.appendChild(C._path),this._updateStyle(C),this._layers[H(C)]=C},_addPath:function(C){var n=C._container;this._container.appendChild(n),C.options.interactive&&C.addInteractiveTarget(n)},_removePath:function(C){var n=C._container;S1(n),C.removeInteractiveTarget(n),delete this._layers[H(C)]},_updateStyle:function(C){var n=C._stroke,l=C._fill,u=C.options,f=C._container;f.stroked=!!u.stroke,f.filled=!!u.fill,u.stroke?(n||(n=C._stroke=A4("stroke")),f.appendChild(n),n.weight=u.weight+"px",n.color=u.color,n.opacity=u.opacity,u.dashArray?n.dashStyle=E(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):n.dashStyle="",n.endcap=u.lineCap.replace("butt","flat"),n.joinstyle=u.lineJoin):n&&(f.removeChild(n),C._stroke=null),u.fill?(l||(l=C._fill=A4("fill")),f.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(f.removeChild(l),C._fill=null)},_updateCircle:function(C){var n=C._point.round(),l=Math.round(C._radius),u=Math.round(C._radiusY||l);this._setPath(C,C._empty()?"M0 0":"AL "+n.x+","+n.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(C,n){C._path.v=n},_bringToFront:function(C){s5(C._container)},_bringToBack:function(C){j2(C._container)}},u6=M1.vml?A4:U2,v4=v0.extend({_initContainer:function(){this._container=u6("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=u6("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){S1(this._container),D1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){v0.prototype._update.call(this);var C=this._bounds,n=C.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(n))&&(this._svgSize=n,l.setAttribute("width",n.x),l.setAttribute("height",n.y)),r2(l,C.min),l.setAttribute("viewBox",[C.min.x,C.min.y,n.x,n.y].join(" ")),this.fire("update")}},_initPath:function(C){var n=C._path=u6("path");C.options.className&&f1(n,C.options.className),C.options.interactive&&f1(n,"leaflet-interactive"),this._updateStyle(C),this._layers[H(C)]=C},_addPath:function(C){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(C._path),C.addInteractiveTarget(C._path)},_removePath:function(C){S1(C._path),C.removeInteractiveTarget(C._path),delete this._layers[H(C)]},_updatePath:function(C){C._project(),C._update()},_updateStyle:function(C){var n=C._path,l=C.options;n&&(l.stroke?(n.setAttribute("stroke",l.color),n.setAttribute("stroke-opacity",l.opacity),n.setAttribute("stroke-width",l.weight),n.setAttribute("stroke-linecap",l.lineCap),n.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?n.setAttribute("stroke-dasharray",l.dashArray):n.removeAttribute("stroke-dasharray"),l.dashOffset?n.setAttribute("stroke-dashoffset",l.dashOffset):n.removeAttribute("stroke-dashoffset")):n.setAttribute("stroke","none"),l.fill?(n.setAttribute("fill",l.fillColor||l.color),n.setAttribute("fill-opacity",l.fillOpacity),n.setAttribute("fill-rule",l.fillRule||"evenodd")):n.setAttribute("fill","none"))},_updatePoly:function(C,n){this._setPath(C,h5(C._parts,n))},_updateCircle:function(C){var n=C._point,l=Math.max(Math.round(C._radius),1),u=Math.max(Math.round(C._radiusY),1)||l,f="a"+l+","+u+" 0 1,0 ",S=C._empty()?"M0 0":"M"+(n.x-l)+","+n.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(C,S)},_setPath:function(C,n){C._path.setAttribute("d",n)},_bringToFront:function(C){s5(C._path)},_bringToBack:function(C){j2(C._path)}});M1.vml&&v4.include(zV);function si(C){return M1.svg||M1.vml?new v4(C):null}o1.include({getRenderer:function(C){var n=C.options.renderer||this._getPaneRenderer(C.options.pane)||this.options.renderer||this._renderer;return n||(n=this._renderer=this._createRenderer()),this.hasLayer(n)||this.addLayer(n),n},_getPaneRenderer:function(C){if(C==="overlayPane"||C===void 0)return!1;var n=this._paneRenderers[C];return n===void 0&&(n=this._createRenderer({pane:C}),this._paneRenderers[C]=n),n},_createRenderer:function(C){return this.options.preferCanvas&&Vi(C)||si(C)}});var Li=h7.extend({initialize:function(C,n){h7.prototype.initialize.call(this,this._boundsToLatLngs(C),n)},setBounds:function(C){return this.setLatLngs(this._boundsToLatLngs(C))},_boundsToLatLngs:function(C){return C=h1(C),[C.getSouthWest(),C.getNorthWest(),C.getNorthEast(),C.getSouthEast()]}});function IV(C,n){return new Li(C,n)}v4.create=u6,v4.pointsToPath=h5,A0.geometryToLayer=s6,A0.coordsToLatLng=Tt,A0.coordsToLatLngs=L6,A0.latLngToCoords=Pt,A0.latLngsToCoords=l6,A0.getFeature=f7,A0.asFeature=M6,o1.mergeOptions({boxZoom:!0});var li=e0.extend({initialize:function(C){this._map=C,this._container=C._container,this._pane=C._panes.overlayPane,this._resetStateTimeout=0,C.on("unload",this._destroy,this)},addHooks:function(){g1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){D1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){S1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(C){if(!C.shiftKey||C.which!==1&&C.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),A5(),$5(),this._startPoint=this._map.mouseEventToContainerPoint(C),g1(document,{contextmenu:d2,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(C){this._moved||(this._moved=!0,this._box=d1("div","leaflet-zoom-box",this._container),f1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(C);var n=new U(this._point,this._startPoint),l=n.getSize();r2(this._box,n.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(S1(this._box),E1(this._container,"leaflet-crosshair")),p0(),T3(),D1(document,{contextmenu:d2,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(C){if(!(C.which!==1&&C.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var n=new V1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(n).fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(C){C.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});o1.addInitHook("addHandler","boxZoom",li),o1.mergeOptions({doubleClickZoom:!0});var Mi=e0.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(C){var n=this._map,l=n.getZoom(),u=n.options.zoomDelta,f=C.originalEvent.shiftKey?l-u:l+u;n.options.doubleClickZoom==="center"?n.setZoom(f):n.setZoomAround(C.containerPoint,f)}});o1.addInitHook("addHandler","doubleClickZoom",Mi),o1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ci=e0.extend({addHooks:function(){if(!this._draggable){var C=this._map;this._draggable=new K0(C._mapPane,C._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),C.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),C.on("zoomend",this._onZoomEnd,this),C.whenReady(this._onZoomEnd,this))}f1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){E1(this._map._container,"leaflet-grab"),E1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var C=this._map;if(C._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var n=h1(this._map.options.maxBounds);this._offsetLimit=t1(this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;C.fire("movestart").fire("dragstart"),C.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(C){if(this._map.options.inertia){var n=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(n),this._prunePositions(n)}this._map.fire("move",C).fire("drag",C)},_prunePositions:function(C){for(;this._positions.length>1&&C-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var C=this._map.getSize().divideBy(2),n=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=n.subtract(C).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(C,n){return C-(C-n)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var C=this._draggable._newPos.subtract(this._draggable._startPos),n=this._offsetLimit;C.x<n.min.x&&(C.x=this._viscousLimit(C.x,n.min.x)),C.y<n.min.y&&(C.y=this._viscousLimit(C.y,n.min.y)),C.x>n.max.x&&(C.x=this._viscousLimit(C.x,n.max.x)),C.y>n.max.y&&(C.y=this._viscousLimit(C.y,n.max.y)),this._draggable._newPos=this._draggable._startPos.add(C)}},_onPreDragWrap:function(){var C=this._worldWidth,n=Math.round(C/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,f=(u-n+l)%C+n-l,S=(u+n+l)%C-n-l,T=Math.abs(f+l)<Math.abs(S+l)?f:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(C){var n=this._map,l=n.options,u=!l.inertia||C.noInertia||this._times.length<2;if(n.fire("dragend",C),u)n.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,T=l.easeLinearity,F=f.multiplyBy(T/S),z=F.distanceTo([0,0]),j=Math.min(l.inertiaMaxSpeed,z),C1=F.multiplyBy(j/z),x1=j/(l.inertiaDeceleration*T),P1=C1.multiplyBy(-x1/2).round();!P1.x&&!P1.y?n.fire("moveend"):(P1=n._limitOffset(P1,n.options.maxBounds),i1(function(){n.panBy(P1,{duration:x1,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});o1.addInitHook("addHandler","dragging",ci),o1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var di=e0.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(C){this._map=C,this._setPanDelta(C.options.keyboardPanDelta),this._setZoomDelta(C.options.zoomDelta)},addHooks:function(){var C=this._map._container;C.tabIndex<=0&&(C.tabIndex="0"),g1(C,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),D1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var C=document.body,n=document.documentElement,l=C.scrollTop||n.scrollTop,u=C.scrollLeft||n.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(C){var n=this._panKeys={},l=this.keyCodes,u,f;for(u=0,f=l.left.length;u<f;u++)n[l.left[u]]=[-1*C,0];for(u=0,f=l.right.length;u<f;u++)n[l.right[u]]=[C,0];for(u=0,f=l.down.length;u<f;u++)n[l.down[u]]=[0,C];for(u=0,f=l.up.length;u<f;u++)n[l.up[u]]=[0,-1*C]},_setZoomDelta:function(C){var n=this._zoomKeys={},l=this.keyCodes,u,f;for(u=0,f=l.zoomIn.length;u<f;u++)n[l.zoomIn[u]]=C;for(u=0,f=l.zoomOut.length;u<f;u++)n[l.zoomOut[u]]=-C},_addHooks:function(){g1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){D1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(C){if(!(C.altKey||C.ctrlKey||C.metaKey)){var n=C.keyCode,l=this._map,u;if(n in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[n],C.shiftKey&&(u=n1(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(n1(u),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(f)}else l.panBy(u)}else if(n in this._zoomKeys)l.setZoom(l.getZoom()+(C.shiftKey?3:1)*this._zoomKeys[n]);else if(n===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;d2(C)}}});o1.addInitHook("addHandler","keyboard",di),o1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var pi=e0.extend({addHooks:function(){g1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){D1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(C){var n=Q0(C),l=this._map.options.wheelDebounceTime;this._delta+=n,this._lastMousePos=this._map.mouseEventToContainerPoint(C),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),u),d2(C)},_performZoom:function(){var C=this._map,n=C.getZoom(),l=this._map.options.zoomSnap||0;C._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,S=l?Math.ceil(f/l)*l:f,T=C._limitZoom(n+(this._delta>0?S:-S))-n;this._delta=0,this._startTime=null,T&&(C.options.scrollWheelZoom==="center"?C.setZoom(n+T):C.setZoomAround(this._lastMousePos,n+T))}});o1.addInitHook("addHandler","scrollWheelZoom",pi);var NV=600;o1.mergeOptions({tapHold:M1.touchNative&&M1.safari&&M1.mobile,tapTolerance:15});var ui=e0.extend({addHooks:function(){g1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){D1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(C){if(clearTimeout(this._holdTimeout),C.touches.length===1){var n=C.touches[0];this._startPos=this._newPos=new X(n.clientX,n.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(g1(document,"touchend",B1),g1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",n))},this),NV),g1(document,"touchend touchcancel contextmenu",this._cancel,this),g1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function C(){D1(document,"touchend",B1),D1(document,"touchend touchcancel",C)},_cancel:function(){clearTimeout(this._holdTimeout),D1(document,"touchend touchcancel contextmenu",this._cancel,this),D1(document,"touchmove",this._onMove,this)},_onMove:function(C){var n=C.touches[0];this._newPos=new X(n.clientX,n.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(C,n){var l=new MouseEvent(C,{bubbles:!0,cancelable:!0,view:window,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY});l._simulated=!0,n.target.dispatchEvent(l)}});o1.addInitHook("addHandler","tapHold",ui),o1.mergeOptions({touchZoom:M1.touch,bounceAtZoomLimits:!0});var mi=e0.extend({addHooks:function(){f1(this._map._container,"leaflet-touch-zoom"),g1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){E1(this._map._container,"leaflet-touch-zoom"),D1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(C){var n=this._map;if(!(!C.touches||C.touches.length!==2||n._animatingZoom||this._zooming)){var l=n.mouseEventToContainerPoint(C.touches[0]),u=n.mouseEventToContainerPoint(C.touches[1]);this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),n.options.touchZoom!=="center"&&(this._pinchStartLatLng=n.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),g1(document,"touchmove",this._onTouchMove,this),g1(document,"touchend touchcancel",this._onTouchEnd,this),B1(C)}},_onTouchMove:function(C){if(!(!C.touches||C.touches.length!==2||!this._zooming)){var n=this._map,l=n.mouseEventToContainerPoint(C.touches[0]),u=n.mouseEventToContainerPoint(C.touches[1]),f=l.distanceTo(u)/this._startDist;if(this._zoom=n.getScaleZoom(f,this._startZoom),!n.options.bounceAtZoomLimits&&(this._zoom<n.getMinZoom()&&f<1||this._zoom>n.getMaxZoom()&&f>1)&&(this._zoom=n._limitZoom(this._zoom)),n.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var S=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(f===1&&S.x===0&&S.y===0)return;this._center=n.unproject(n.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(n._moveStart(!0,!1),this._moved=!0),m1(this._animRequest);var T=o(n._move,n,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=i1(T,this,!0),B1(C)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,m1(this._animRequest),D1(document,"touchmove",this._onTouchMove,this),D1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});o1.addInitHook("addHandler","touchZoom",mi),o1.BoxZoom=li,o1.DoubleClickZoom=Mi,o1.Drag=ci,o1.Keyboard=di,o1.ScrollWheelZoom=pi,o1.TapHold=ui,o1.TouchZoom=mi,r.Bounds=U,r.Browser=M1,r.CRS=w1,r.Canvas=ni,r.Circle=Ot,r.CircleMarker=V6,r.Class=k1,r.Control=J1,r.DivIcon=Ci,r.DivOverlay=r0,r.DomEvent=Y,r.DomUtil=q0,r.Draggable=K0,r.Evented=O1,r.FeatureGroup=h0,r.GeoJSON=A0,r.GridLayer=f4,r.Handler=e0,r.Icon=m7,r.ImageOverlay=c6,r.LatLng=s1,r.LatLngBounds=V1,r.Layer=B5,r.LayerGroup=u7,r.LineUtil=fV,r.Map=o1,r.Marker=n6,r.Mixin=cV,r.Path=X0,r.Point=X,r.PolyUtil=dV,r.Polygon=h7,r.Polyline=f0,r.Popup=d6,r.PosAnimation=A1,r.Projection=AV,r.Rectangle=Li,r.Renderer=v0,r.SVG=v4,r.SVGOverlay=oi,r.TileLayer=A7,r.Tooltip=p6,r.Transformation=T2,r.Util=N1,r.VideoOverlay=ii,r.bind=o,r.bounds=t1,r.canvas=Vi,r.circle=yV,r.circleMarker=bV,r.control=w2,r.divIcon=RV,r.extend=e,r.featureGroup=_V,r.geoJSON=ri,r.geoJson=OV,r.gridLayer=DV,r.icon=SV,r.imageOverlay=TV,r.latLng=L1,r.latLngBounds=h1,r.layerGroup=gV,r.map=W1,r.marker=wV,r.point=n1,r.polygon=kV,r.polyline=ZV,r.popup=FV,r.rectangle=IV,r.setOptions=x,r.stamp=H,r.svg=si,r.svgOverlay=EV,r.tileLayer=ai,r.tooltip=$V,r.transformation=l2,r.version=t,r.videoOverlay=PV;var WV=window.L;r.noConflict=function(){return window.L=WV,this},window.L=r}))});var f6=globalThis,A6=f6.ShadowRoot&&(f6.ShadyCSS===void 0||f6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),gi=new WeakMap,g4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(A6&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=gi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&gi.set(e,t))}return t}toString(){return this.cssText}},x0=r=>new g4(typeof r=="string"?r:r+"",void 0,$t),p1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,a)=>i+(H=>{if(H._$cssResult$===!0)return H.cssText;if(typeof H=="number")return H;throw Error("Value passed to 'css' function must be a 'css' function result: "+H+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new g4(e,r,$t)},_i=(r,t)=>{if(A6)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),o=f6.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)}},Rt=A6?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return x0(e)})(r):r;var{is:Cs,defineProperty:as,getOwnPropertyDescriptor:Hs,getOwnPropertyNames:ns,getOwnPropertySymbols:Vs,getPrototypeOf:ss}=Object,J0=globalThis,Si=J0.trustedTypes,Ls=Si?Si.emptyScript:"",ls=J0.reactiveElementPolyfillSupport,_4=(r,t)=>r,S4={toAttribute(r,t){switch(t){case Boolean:r=r?Ls:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},v6=(r,t)=>!Cs(r,t),wi={attribute:!0,type:String,converter:S4,reflect:!1,useDefault:!1,hasChanged:v6};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),J0.litPropertyMetadata??(J0.litPropertyMetadata=new WeakMap);var g0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&as(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:a}=Hs(this.prototype,t)??{get(){return this[e]},set(H){this[e]=H}};return{get:o,set(H){let V=o?.call(this);a?.call(this,H),this.requestUpdate(t,V,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wi}static _$Ei(){if(this.hasOwnProperty(_4("elementProperties")))return;let t=ss(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_4("properties"))){let e=this.properties,i=[...ns(e),...Vs(e)];for(let o of i)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Rt(o))}else t!==void 0&&e.push(Rt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _i(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:S4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),H=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:S4;this._$Em=o;let V=H.fromAttribute(e,a.type);this[o]=V??this._$Ej?.get(o)??V,this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(t!==void 0){let H=this.constructor;if(o===!1&&(a=this[t]),i??(i=H.getPropertyOptions(t)),!((i.hasChanged??v6)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(H._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},H){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,H??e??this[t]),a!==!0||H!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:H}=a,V=this[o];H!==!0||this._$AL.has(o)||V===void 0||this.C(o,void 0,a,V)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};g0.elementStyles=[],g0.shadowRootOptions={mode:"open"},g0[_4("elementProperties")]=new Map,g0[_4("finalized")]=new Map,ls?.({ReactiveElement:g0}),(J0.reactiveElementVersions??(J0.reactiveElementVersions=[])).push("2.1.2");var b4=globalThis,bi=r=>r,x6=b4.trustedTypes,yi=x6?x6.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ei="$lit$",t3=`lit$${Math.random().toFixed(9).slice(2)}$`,Fi="?"+t3,Ms=`<${Fi}>`,I3=document,y4=()=>I3.createComment(""),Z4=r=>r===null||typeof r!="object"&&typeof r!="function",Ut=Array.isArray,cs=r=>Ut(r)||typeof r?.[Symbol.iterator]=="function",Dt=`[ 	
\f\r]`,w4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zi=/-->/g,ki=/>/g,B3=RegExp(`>|${Dt}(?:([^\\s"'>=/]+)(${Dt}*=${Dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oi=/'/g,Ti=/"/g,$i=/^(?:script|style|textarea|title)$/i,jt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=jt(1),y1=jt(2),Qf=jt(3),M5=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Pi=new WeakMap,z3=I3.createTreeWalker(I3,129);function Ri(r,t){if(!Ut(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yi!==void 0?yi.createHTML(t):t}var ds=(r,t)=>{let e=r.length-1,i=[],o,a=t===2?"<svg>":t===3?"<math>":"",H=w4;for(let V=0;V<e;V++){let s=r[V],M,p,h=-1,v=0;for(;v<s.length&&(H.lastIndex=v,p=H.exec(s),p!==null);)v=H.lastIndex,H===w4?p[1]==="!--"?H=Zi:p[1]!==void 0?H=ki:p[2]!==void 0?($i.test(p[2])&&(o=RegExp("</"+p[2],"g")),H=B3):p[3]!==void 0&&(H=B3):H===B3?p[0]===">"?(H=o??w4,h=-1):p[1]===void 0?h=-2:(h=H.lastIndex-p[2].length,M=p[1],H=p[3]===void 0?B3:p[3]==='"'?Ti:Oi):H===Ti||H===Oi?H=B3:H===Zi||H===ki?H=w4:(H=B3,o=void 0);let x=H===B3&&r[V+1].startsWith("/>")?" ":"";a+=H===w4?s+Ms:h>=0?(i.push(M),s.slice(0,h)+Ei+s.slice(h)+t3+x):s+t3+(h===-2?V:x)}return[Ri(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},k4=class r{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,H=0,V=t.length-1,s=this.parts,[M,p]=ds(t,e);if(this.el=r.createElement(M,i),z3.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=z3.nextNode())!==null&&s.length<V;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Ei)){let v=p[H++],x=o.getAttribute(h).split(t3),y=/([.?@])?(.*)/.exec(v);s.push({type:1,index:a,name:y[2],strings:x,ctor:y[1]==="."?zt:y[1]==="?"?It:y[1]==="@"?Nt:g7}),o.removeAttribute(h)}else h.startsWith(t3)&&(s.push({type:6,index:a}),o.removeAttribute(h));if($i.test(o.tagName)){let h=o.textContent.split(t3),v=h.length-1;if(v>0){o.textContent=x6?x6.emptyScript:"";for(let x=0;x<v;x++)o.append(h[x],y4()),z3.nextNode(),s.push({type:2,index:++a});o.append(h[v],y4())}}}else if(o.nodeType===8)if(o.data===Fi)s.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(t3,h+1))!==-1;)s.push({type:7,index:a}),h+=t3.length-1}a++}}static createElement(t,e){let i=I3.createElement("template");return i.innerHTML=t,i}};function x7(r,t,e=r,i){if(t===M5)return t;let o=i!==void 0?e._$Co?.[i]:e._$Cl,a=Z4(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=x7(r,o._$AS(r,t.values),o,i)),t}var Bt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??I3).importNode(e,!0);z3.currentNode=o;let a=z3.nextNode(),H=0,V=0,s=i[0];for(;s!==void 0;){if(H===s.index){let M;s.type===2?M=new O4(a,a.nextSibling,this,t):s.type===1?M=new s.ctor(a,s.name,s.strings,this,t):s.type===6&&(M=new Wt(a,this,t)),this._$AV.push(M),s=i[++V]}H!==s?.index&&(a=z3.nextNode(),H++)}return z3.currentNode=I3,o}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},O4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x7(this,t,e),Z4(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==M5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&Z4(this._$AH)?this._$AA.nextSibling.data=t:this.T(I3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=k4.createElement(Ri(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let a=new Bt(o,this),H=a.u(this.options);a.p(e),this.T(H),this._$AH=a}}_$AC(t){let e=Pi.get(t.strings);return e===void 0&&Pi.set(t.strings,e=new k4(t)),e}k(t){Ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let a of t)o===e.length?e.push(i=new r(this.O(y4()),this.O(y4()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=bi(t).nextSibling;bi(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},g7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,o){let a=this.strings,H=!1;if(a===void 0)t=x7(this,t,e,0),H=!Z4(t)||t!==this._$AH&&t!==M5,H&&(this._$AH=t);else{let V=t,s,M;for(t=a[0],s=0;s<a.length-1;s++)M=x7(this,V[i+s],e,s),M===M5&&(M=this._$AH[s]),H||(H=!Z4(M)||M!==this._$AH[s]),M===Z?t=Z:t!==Z&&(t+=(M??"")+a[s+1]),this._$AH[s]=M}H&&!o&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},zt=class extends g7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},It=class extends g7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},Nt=class extends g7{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=x7(this,t,e,0)??Z)===M5)return;let i=this._$AH,o=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Wt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x7(this,t)}};var ps=b4.litHtmlPolyfillSupport;ps?.(k4,O4),(b4.litHtmlVersions??(b4.litHtmlVersions=[])).push("3.3.3");var Di=(r,t,e)=>{let i=e?.renderBefore??t,o=i._$litPart$;if(o===void 0){let a=e?.renderBefore??null;i._$litPart$=o=new O4(t.insertBefore(y4(),a),a,void 0,e??{})}return o._$AI(r),o};var T4=globalThis,e1=class extends g0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Di(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M5}};e1._$litElement$=!0,e1.finalized=!0,T4.litElementHydrateSupport?.({LitElement:e1});var us=T4.litElementPolyfillSupport;us?.({LitElement:e1});(T4.litElementVersions??(T4.litElementVersions=[])).push("4.2.2");var g6="2026.10.20.10",P4="weather-station-flex-card",E4="Weather Station Flex Card";var o2=p1`
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
`,_6=p1`
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
`,S6=p1`
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
`,H2=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function _7(r,t,e,i){return _`<div class="seg" role="group" aria-label=${i}>
    ${r.map(o=>_`<button type="button" aria-pressed=${String(o.value===t)} @click=${()=>e(o.value)}>${o.label}</button>`)}
  </div>`}function z5(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function X1(r,t,e,i=Z){return r?.show_title===!1?i===Z?Z:_`<div class="head"><span class="title"></span>${i}</div>`:_`<div class="head">
    <ha-icon icon=${r?.icon||t}></ha-icon>
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function S7(r,{label:t,value:e,unit:i,digits:o=0,color:a,entity:H}){let V=()=>z5(r,H);return _`<div class="reading" @click=${V} role=${H?"button":Z} tabindex=${H?0:Z}
    @keydown=${s=>(s.key==="Enter"||s.key===" ")&&V()}>
    <span class="v">${H2(e,o)}<small>${i||""}</small></span>
    <span class="l">${a?_`<span class="dot" style="background:${a}"></span>`:Z}${t}</span>
  </div>`}var ms=typeof global=="object"&&global&&global.Object===Object&&global,w6=ms;var hs=typeof self=="object"&&self&&self.Object===Object&&self,fs=w6||hs||Function("return this")(),y5=fs;var As=y5.Symbol,_0=As;var Bi=Object.prototype,vs=Bi.hasOwnProperty,xs=Bi.toString,F4=_0?_0.toStringTag:void 0;function gs(r){var t=vs.call(r,F4),e=r[F4];try{r[F4]=void 0;var i=!0}catch{}var o=xs.call(r);return i&&(t?r[F4]=e:delete r[F4]),o}var zi=gs;var _s=Object.prototype,Ss=_s.toString;function ws(r){return Ss.call(r)}var Ii=ws;var bs="[object Null]",ys="[object Undefined]",Ni=_0?_0.toStringTag:void 0;function Zs(r){return r==null?r===void 0?ys:bs:Ni&&Ni in Object(r)?zi(r):Ii(r)}var i0=Zs;function ks(r){return r!=null&&typeof r=="object"}var Z5=ks;var Os="[object Symbol]";function Ts(r){return typeof r=="symbol"||Z5(r)&&i0(r)==Os}var b6=Ts;function Ps(r,t){for(var e=-1,i=r==null?0:r.length,o=Array(i);++e<i;)o[e]=t(r[e],e,r);return o}var Wi=Ps;var Es=Array.isArray,N3=Es;var Fs=1/0,Ui=_0?_0.prototype:void 0,ji=Ui?Ui.toString:void 0;function Gi(r){if(typeof r=="string")return r;if(N3(r))return Wi(r,Gi)+"";if(b6(r))return ji?ji.call(r):"";var t=r+"";return t=="0"&&1/r==-Fs?"-0":t}var qi=Gi;var $s=/\s/;function Rs(r){for(var t=r.length;t--&&$s.test(r.charAt(t)););return t}var Yi=Rs;var Ds=/^\s+/;function Bs(r){return r&&r.slice(0,Yi(r)+1).replace(Ds,"")}var Qi=Bs;function zs(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var $2=zs;var Ki=NaN,Is=/^[-+]0x[0-9a-f]+$/i,Ns=/^0b[01]+$/i,Ws=/^0o[0-7]+$/i,Us=parseInt;function js(r){if(typeof r=="number")return r;if(b6(r))return Ki;if($2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=$2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Qi(r);var e=Ns.test(r);return e||Ws.test(r)?Us(r.slice(2),e?2:8):Is.test(r)?Ki:+r}var Xi=js;var Ji=1/0,Gs=17976931348623157e292;function qs(r){if(!r)return r===0?r:0;if(r=Xi(r),r===Ji||r===-Ji){var t=r<0?-1:1;return t*Gs}return r===r?r:0}var Gt=qs;function Ys(r){return r}var y6=Ys;var Qs="[object AsyncFunction]",Ks="[object Function]",Xs="[object GeneratorFunction]",Js="[object Proxy]";function tL(r){if(!$2(r))return!1;var t=i0(r);return t==Ks||t==Xs||t==Qs||t==Js}var w7=tL;var eL=y5["__core-js_shared__"],Z6=eL;var to=(function(){var r=/[^.]+$/.exec(Z6&&Z6.keys&&Z6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function rL(r){return!!to&&to in r}var eo=rL;var iL=Function.prototype,oL=iL.toString;function CL(r){if(r!=null){try{return oL.call(r)}catch{}try{return r+""}catch{}}return""}var ro=CL;var aL=/[\\^$.*+?()[\]{}|]/g,HL=/^\[object .+?Constructor\]$/,nL=Function.prototype,VL=Object.prototype,sL=nL.toString,LL=VL.hasOwnProperty,lL=RegExp("^"+sL.call(LL).replace(aL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ML(r){if(!$2(r)||eo(r))return!1;var t=w7(r)?lL:HL;return t.test(ro(r))}var io=ML;function cL(r,t){return r?.[t]}var oo=cL;function dL(r,t){var e=oo(r,t);return io(e)?e:void 0}var b7=dL;var Co=Object.create,pL=(function(){function r(){}return function(t){if(!$2(t))return{};if(Co)return Co(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),ao=pL;function uL(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var Ho=uL;function mL(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var no=mL;var hL=800,fL=16,AL=Date.now;function vL(r){var t=0,e=0;return function(){var i=AL(),o=fL-(i-e);if(e=i,o>0){if(++t>=hL)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var Vo=vL;function xL(r){return function(){return r}}var so=xL;var gL=(function(){try{var r=b7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),y7=gL;var _L=y7?function(r,t){return y7(r,"toString",{configurable:!0,enumerable:!1,value:so(t),writable:!0})}:y6,Lo=_L;var SL=Vo(Lo),lo=SL;var wL=9007199254740991,bL=/^(?:0|[1-9]\d*)$/;function yL(r,t){var e=typeof r;return t=t??wL,!!t&&(e=="number"||e!="symbol"&&bL.test(r))&&r>-1&&r%1==0&&r<t}var k6=yL;function ZL(r,t,e){t=="__proto__"&&y7?y7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var Z7=ZL;function kL(r,t){return r===t||r!==r&&t!==t}var e3=kL;var OL=Object.prototype,TL=OL.hasOwnProperty;function PL(r,t,e){var i=r[t];(!(TL.call(r,t)&&e3(i,e))||e===void 0&&!(t in r))&&Z7(r,t,e)}var Mo=PL;function EL(r,t,e,i){var o=!e;e||(e={});for(var a=-1,H=t.length;++a<H;){var V=t[a],s=i?i(e[V],r[V],V,e,r):void 0;s===void 0&&(s=r[V]),o?Z7(e,V,s):Mo(e,V,s)}return e}var co=EL;var po=Math.max;function FL(r,t,e){return t=po(t===void 0?r.length-1:t,0),function(){for(var i=arguments,o=-1,a=po(i.length-t,0),H=Array(a);++o<a;)H[o]=i[t+o];o=-1;for(var V=Array(t+1);++o<t;)V[o]=i[o];return V[t]=e(H),Ho(r,this,V)}}var uo=FL;function $L(r,t){return lo(uo(r,t,y6),r+"")}var mo=$L;var RL=9007199254740991;function DL(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=RL}var O6=DL;function BL(r){return r!=null&&O6(r.length)&&!w7(r)}var k7=BL;function zL(r,t,e){if(!$2(e))return!1;var i=typeof t;return(i=="number"?k7(e)&&k6(t,e.length):i=="string"&&t in e)?e3(e[t],r):!1}var T6=zL;function IL(r){return mo(function(t,e){var i=-1,o=e.length,a=o>1?e[o-1]:void 0,H=o>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(o--,a):void 0,H&&T6(e[0],e[1],H)&&(a=o<3?void 0:a,o=1),t=Object(t);++i<o;){var V=e[i];V&&r(t,V,i,a)}return t})}var ho=IL;var NL=Object.prototype;function WL(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||NL;return r===e}var P6=WL;function UL(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var fo=UL;var jL="[object Arguments]";function GL(r){return Z5(r)&&i0(r)==jL}var qt=GL;var Ao=Object.prototype,qL=Ao.hasOwnProperty,YL=Ao.propertyIsEnumerable,QL=qt((function(){return arguments})())?qt:function(r){return Z5(r)&&qL.call(r,"callee")&&!YL.call(r,"callee")},$4=QL;function KL(){return!1}var vo=KL;var _o=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xo=_o&&typeof module=="object"&&module&&!module.nodeType&&module,XL=xo&&xo.exports===_o,go=XL?y5.Buffer:void 0,JL=go?go.isBuffer:void 0,tl=JL||vo,E6=tl;var el="[object Arguments]",rl="[object Array]",il="[object Boolean]",ol="[object Date]",Cl="[object Error]",al="[object Function]",Hl="[object Map]",nl="[object Number]",Vl="[object Object]",sl="[object RegExp]",Ll="[object Set]",ll="[object String]",Ml="[object WeakMap]",cl="[object ArrayBuffer]",dl="[object DataView]",pl="[object Float32Array]",ul="[object Float64Array]",ml="[object Int8Array]",hl="[object Int16Array]",fl="[object Int32Array]",Al="[object Uint8Array]",vl="[object Uint8ClampedArray]",xl="[object Uint16Array]",gl="[object Uint32Array]",C2={};C2[pl]=C2[ul]=C2[ml]=C2[hl]=C2[fl]=C2[Al]=C2[vl]=C2[xl]=C2[gl]=!0;C2[el]=C2[rl]=C2[cl]=C2[il]=C2[dl]=C2[ol]=C2[Cl]=C2[al]=C2[Hl]=C2[nl]=C2[Vl]=C2[sl]=C2[Ll]=C2[ll]=C2[Ml]=!1;function _l(r){return Z5(r)&&O6(r.length)&&!!C2[i0(r)]}var So=_l;function Sl(r){return function(t){return r(t)}}var wo=Sl;var bo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,R4=bo&&typeof module=="object"&&module&&!module.nodeType&&module,wl=R4&&R4.exports===bo,Yt=wl&&w6.process,bl=(function(){try{var r=R4&&R4.require&&R4.require("util").types;return r||Yt&&Yt.binding&&Yt.binding("util")}catch{}})(),Qt=bl;var yo=Qt&&Qt.isTypedArray,yl=yo?wo(yo):So,F6=yl;var Zl=Object.prototype,kl=Zl.hasOwnProperty;function Ol(r,t){var e=N3(r),i=!e&&$4(r),o=!e&&!i&&E6(r),a=!e&&!i&&!o&&F6(r),H=e||i||o||a,V=H?fo(r.length,String):[],s=V.length;for(var M in r)(t||kl.call(r,M))&&!(H&&(M=="length"||o&&(M=="offset"||M=="parent")||a&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||k6(M,s)))&&V.push(M);return V}var Zo=Ol;function Tl(r,t){return function(e){return r(t(e))}}var ko=Tl;function Pl(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var Oo=Pl;var El=Object.prototype,Fl=El.hasOwnProperty;function $l(r){if(!$2(r))return Oo(r);var t=P6(r),e=[];for(var i in r)i=="constructor"&&(t||!Fl.call(r,i))||e.push(i);return e}var To=$l;function Rl(r){return k7(r)?Zo(r,!0):To(r)}var $6=Rl;var Dl=b7(Object,"create"),S0=Dl;function Bl(){this.__data__=S0?S0(null):{},this.size=0}var Po=Bl;function zl(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var Eo=zl;var Il="__lodash_hash_undefined__",Nl=Object.prototype,Wl=Nl.hasOwnProperty;function Ul(r){var t=this.__data__;if(S0){var e=t[r];return e===Il?void 0:e}return Wl.call(t,r)?t[r]:void 0}var Fo=Ul;var jl=Object.prototype,Gl=jl.hasOwnProperty;function ql(r){var t=this.__data__;return S0?t[r]!==void 0:Gl.call(t,r)}var $o=ql;var Yl="__lodash_hash_undefined__";function Ql(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=S0&&t===void 0?Yl:t,this}var Ro=Ql;function O7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}O7.prototype.clear=Po;O7.prototype.delete=Eo;O7.prototype.get=Fo;O7.prototype.has=$o;O7.prototype.set=Ro;var Kt=O7;function Kl(){this.__data__=[],this.size=0}var Do=Kl;function Xl(r,t){for(var e=r.length;e--;)if(e3(r[e][0],t))return e;return-1}var r3=Xl;var Jl=Array.prototype,tM=Jl.splice;function eM(r){var t=this.__data__,e=r3(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():tM.call(t,e,1),--this.size,!0}var Bo=eM;function rM(r){var t=this.__data__,e=r3(t,r);return e<0?void 0:t[e][1]}var zo=rM;function iM(r){return r3(this.__data__,r)>-1}var Io=iM;function oM(r,t){var e=this.__data__,i=r3(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var No=oM;function T7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}T7.prototype.clear=Do;T7.prototype.delete=Bo;T7.prototype.get=zo;T7.prototype.has=Io;T7.prototype.set=No;var i3=T7;var CM=b7(y5,"Map"),R6=CM;function aM(){this.size=0,this.__data__={hash:new Kt,map:new(R6||i3),string:new Kt}}var Wo=aM;function HM(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var Uo=HM;function nM(r,t){var e=r.__data__;return Uo(t)?e[typeof t=="string"?"string":"hash"]:e.map}var o3=nM;function VM(r){var t=o3(this,r).delete(r);return this.size-=t?1:0,t}var jo=VM;function sM(r){return o3(this,r).get(r)}var Go=sM;function LM(r){return o3(this,r).has(r)}var qo=LM;function lM(r,t){var e=o3(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var Yo=lM;function P7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}P7.prototype.clear=Wo;P7.prototype.delete=jo;P7.prototype.get=Go;P7.prototype.has=qo;P7.prototype.set=Yo;var Qo=P7;function MM(r){return r==null?"":qi(r)}var D6=MM;var cM=ko(Object.getPrototypeOf,Object),B6=cM;var dM="[object Object]",pM=Function.prototype,uM=Object.prototype,Ko=pM.toString,mM=uM.hasOwnProperty,hM=Ko.call(Object);function fM(r){if(!Z5(r)||i0(r)!=dM)return!1;var t=B6(r);if(t===null)return!0;var e=mM.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Ko.call(e)==hM}var Xo=fM;function AM(r,t,e){var i=-1,o=r.length;t<0&&(t=-t>o?0:o+t),e=e>o?o:e,e<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=r[i+t];return a}var Jo=AM;function vM(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:Jo(r,t,e)}var tC=vM;var xM="\\ud800-\\udfff",gM="\\u0300-\\u036f",_M="\\ufe20-\\ufe2f",SM="\\u20d0-\\u20ff",wM=gM+_M+SM,bM="\\ufe0e\\ufe0f",yM="\\u200d",ZM=RegExp("["+yM+xM+wM+bM+"]");function kM(r){return ZM.test(r)}var z6=kM;function OM(r){return r.split("")}var eC=OM;var rC="\\ud800-\\udfff",TM="\\u0300-\\u036f",PM="\\ufe20-\\ufe2f",EM="\\u20d0-\\u20ff",FM=TM+PM+EM,$M="\\ufe0e\\ufe0f",RM="["+rC+"]",Xt="["+FM+"]",Jt="\\ud83c[\\udffb-\\udfff]",DM="(?:"+Xt+"|"+Jt+")",iC="[^"+rC+"]",oC="(?:\\ud83c[\\udde6-\\uddff]){2}",CC="[\\ud800-\\udbff][\\udc00-\\udfff]",BM="\\u200d",aC=DM+"?",HC="["+$M+"]?",zM="(?:"+BM+"(?:"+[iC,oC,CC].join("|")+")"+HC+aC+")*",IM=HC+aC+zM,NM="(?:"+[iC+Xt+"?",Xt,oC,CC,RM].join("|")+")",WM=RegExp(Jt+"(?="+Jt+")|"+NM+IM,"g");function UM(r){return r.match(WM)||[]}var nC=UM;function jM(r){return z6(r)?nC(r):eC(r)}var VC=jM;function GM(r){return function(t){t=D6(t);var e=z6(t)?VC(t):void 0,i=e?e[0]:t.charAt(0),o=e?tC(e,1).join(""):t.slice(1);return i[r]()+o}}var sC=GM;var qM=sC("toUpperCase"),LC=qM;function YM(r){return LC(D6(r).toLowerCase())}var k5=YM;function QM(){this.__data__=new i3,this.size=0}var lC=QM;function KM(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var MC=KM;function XM(r){return this.__data__.get(r)}var cC=XM;function JM(r){return this.__data__.has(r)}var dC=JM;var tc=200;function ec(r,t){var e=this.__data__;if(e instanceof i3){var i=e.__data__;if(!R6||i.length<tc-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new Qo(i)}return e.set(r,t),this.size=e.size,this}var pC=ec;function E7(r){var t=this.__data__=new i3(r);this.size=t.size}E7.prototype.clear=lC;E7.prototype.delete=MC;E7.prototype.get=cC;E7.prototype.has=dC;E7.prototype.set=pC;var uC=E7;var AC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mC=AC&&typeof module=="object"&&module&&!module.nodeType&&module,rc=mC&&mC.exports===AC,hC=rc?y5.Buffer:void 0,fC=hC?hC.allocUnsafe:void 0;function ic(r,t){if(t)return r.slice();var e=r.length,i=fC?fC(e):new r.constructor(e);return r.copy(i),i}var vC=ic;var oc=y5.Uint8Array,te=oc;function Cc(r){var t=new r.constructor(r.byteLength);return new te(t).set(new te(r)),t}var xC=Cc;function ac(r,t){var e=t?xC(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var gC=ac;function Hc(r){return typeof r.constructor=="function"&&!P6(r)?ao(B6(r)):{}}var _C=Hc;function nc(r){return function(t,e,i){for(var o=-1,a=Object(t),H=i(t),V=H.length;V--;){var s=H[r?V:++o];if(e(a[s],s,a)===!1)break}return t}}var SC=nc;var Vc=SC(),wC=Vc;function sc(r,t,e){(e!==void 0&&!e3(r[t],e)||e===void 0&&!(t in r))&&Z7(r,t,e)}var D4=sc;function Lc(r){return Z5(r)&&k7(r)}var bC=Lc;function lc(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var B4=lc;function Mc(r){return co(r,$6(r))}var yC=Mc;function cc(r,t,e,i,o,a,H){var V=B4(r,e),s=B4(t,e),M=H.get(s);if(M){D4(r,e,M);return}var p=a?a(V,s,e+"",r,t,H):void 0,h=p===void 0;if(h){var v=N3(s),x=!v&&E6(s),y=!v&&!x&&F6(s);p=s,v||x||y?N3(V)?p=V:bC(V)?p=no(V):x?(h=!1,p=vC(s,!0)):y?(h=!1,p=gC(s,!0)):p=[]:Xo(s)||$4(s)?(p=V,$4(V)?p=yC(V):(!$2(V)||w7(V))&&(p=_C(s))):h=!1}h&&(H.set(s,p),o(p,s,i,a,H),H.delete(s)),D4(r,e,p)}var ZC=cc;function kC(r,t,e,i,o){r!==t&&wC(t,function(a,H){if(o||(o=new uC),$2(a))ZC(r,t,H,e,kC,i,o);else{var V=i?i(B4(r,H),a,H+"",r,t,o):void 0;V===void 0&&(V=a),D4(r,H,V)}},$6)}var OC=kC;var dc=ho(function(r,t,e){OC(r,t,e)}),W3=dc;var pc=Math.floor,uc=Math.random;function mc(r,t){return r+pc(uc()*(t-r+1))}var TC=mc;var hc=parseFloat,fc=Math.min,Ac=Math.random;function vc(r,t,e){if(e&&typeof e!="boolean"&&T6(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=Gt(r),t===void 0?(t=r,r=0):t=Gt(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var o=Ac();return fc(r+o*(t-r+hc("1e-"+((o+"").length-1))),t)}return TC(r,t)}var z1=vc;var n2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var xc={attribute:!0,type:String,converter:S4,reflect:!1,hasChanged:v6},gc=(r=xc,t,e)=>{let{kind:i,metadata:o}=e,a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:H}=e;return{set(V){let s=t.get.call(this);t.set.call(this,V),this.requestUpdate(H,s,r,!0,V)},init(V){return V!==void 0&&this.C(H,void 0,r,V),V}}}if(i==="setter"){let{name:H}=e;return function(V){let s=this[H];t.call(this,V),this.requestUpdate(H,s,r,!0,V)}}throw Error("Unsupported decorator location: "+i)};function r1(r){return(t,e)=>typeof e=="object"?gc(r,t,e):((i,o,a)=>{let H=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),H?Object.getOwnPropertyDescriptor(o,a):void 0})(r,t,e)}function Y2(r){return r1({...r,state:!0,attribute:!1})}var U3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function z4(r,t){return(e,i,o)=>{let a=H=>H.renderRoot?.querySelector(r)??null;if(t){let{get:H,set:V}=typeof i=="object"?e:o??(()=>{let s=Symbol();return{get(){return this[s]},set(M){this[s]=M}}})();return U3(e,i,{get(){let s=H.call(this);return s===void 0&&(s=a(this),(s!==null||this.hasUpdated)&&V.call(this,s)),s}})}return U3(e,i,{get(){return a(this)}})}}var PC=`:host {
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
`;var EC=p1`
  ${x0(PC)}
`;var j3,G3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(j3||(j3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(G3||(G3={}));function $C(){return($C=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function Sc(r){return r.substr(0,r.indexOf("."))}var wc=function(r){switch(r.number_format){case j3.comma_decimal:return["en-US","en"];case j3.decimal_comma:return["de","es","it"];case j3.space_comma:return["fr","sv","cs"];case j3.system:return;default:return r.language}},bc=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},ee=function(r,t,e){var i=t?wc(t):void 0;if(Number.isNaN=Number.isNaN||function o(a){return typeof a=="number"&&o(a)},t?.number_format!==j3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,FC(r,e)).format(Number(r))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,FC(r,e)).format(Number(r))}return typeof r=="string"?r:bc(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},FC=function(r,t){var e=$C({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var yc=["closed","locked","off"];var a2=function(r,t,e,i){i=i||{},e=e??{};var o=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return o.detail=e,r.dispatchEvent(o),o};var I6=function(r){a2(window,"haptic",r)},Zc=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),a2(window,"location-changed",{replace:e})},kc=function(r,t,e){e===void 0&&(e=!0);var i,o=Sc(t),a=o==="group"?"homeassistant":o;switch(o){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},Oc=function(r,t){var e=yc.includes(r.states[t].state);return kc(r,t,e)},Tc=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(I6("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&a2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&Zc(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(Oc(t,e.entity),I6("success"));break;case"call-service":if(!i.service)return void I6("failure");var o=i.service.split(".",2);t.callService(o[0],o[1],i.service_data,i.target),I6("success");break;case"fire-dom-event":a2(r,"ll-custom",i)}},I4=function(r,t,e,i){var o;i==="double_tap"&&e.double_tap_action?o=e.double_tap_action:i==="hold"&&e.hold_action?o=e.hold_action:i==="tap"&&e.tap_action&&(o=e.tap_action),Tc(r,t,e,o)};function w0(r){return r!==void 0&&r.action!=="none"}function RC(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var DC="NOT_RUNNING";var N6=x4(N4(),1);var zC=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Pc(r,t){return!!(r===t||zC(r)&&zC(t))}function Ec(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!Pc(r[e],t[e]))return!1;return!0}function C3(r,t){t===void 0&&(t=Ec);var e=null;function i(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(e&&e.lastThis===this&&t(o,e.lastArgs))return e.lastResult;var H=r.apply(this,o);return e={lastResult:H,lastArgs:o,lastThis:this},H}return i.clear=function(){e=null},i}var IC=(r,t)=>r?r.config.state!==DC?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",a3=(r,t)=>$7(t).toLocaleDateString(q3(r),{weekday:"short"}),NC=(r,t)=>$7(t).toLocaleDateString(q3(r),{day:"numeric"}),WC=(r,t)=>{let e=$7(t),i=q3(r),o=W6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:o}).formatToParts(e),h=p.find(x=>x.type==="hour"),v=p.find(x=>x.type==="dayPeriod");if(h){if(v)return{hour:h.value,suffix:v.value};let x=p.indexOf(h),y=p.slice(x+1).filter(k=>k.type==="literal").map(k=>k.value).join("");return y&&y.trim()?{hour:h.value,suffix:y.trim()}:{hour:h.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:o}),H=a.match(/\d+/),V=H?H[0]:a,s=a.replace(/\d+\s*/,"").trim();return s?{hour:V,suffix:s}:{hour:V}},UC=(r,t)=>{let e=$7(t),i=q3(r),o=W6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:o}).formatToParts(e),h=p.find(y=>y.type==="hour"),v=p.find(y=>y.type==="minute"),x=p.find(y=>y.type==="dayPeriod");if(h&&v){let y=p.indexOf(h),k=p.indexOf(v),O=p.slice(y+1,k).map(R=>R.value).join(""),E=`${h.value}${O}${v.value}`;if(x)return{time:E,suffix:x.value};let $=p.slice(k+1).filter(R=>R.type==="literal").map(R=>R.value).join("");return $&&$.trim()?{time:E,suffix:$.trim()}:{time:E}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:o}),H=a.match(/\d+[:.]\d+/),V=H?H[0]:a,s=a.replace(/\d+[:.]\d+\s*/,"").trim();return s?{time:V,suffix:s}:{time:V}},F7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},W6=C3(r=>{let t=r?.locale;if(t?.time_format===G3.language||t?.time_format===G3.system){let e=t.time_format===G3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===G3.am_pm}),q3=r=>r?.locale?.language||navigator.language||"en",$7=r=>typeof r=="string"?new Date(r):r,b0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let o=$7(t),a=N6.getTimes(o,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:o<a.sunrise||o>a.sunset}},jC=(r,t)=>{let e=$7(t),{fraction:i,phase:o}=N6.getMoonIllumination(e),a=o<=.5,H=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==H}},GC=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=e<.5,a=t===o?0:1,H=t?-60:160;return`M50 0 L${H} 0 L${H} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},oe=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${o} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},R7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,qC=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},ie=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},YC=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=ie(t.secondary_info_attribute);i&&e.add(i);let o=t.show_attributes;if(Array.isArray(o))for(let a of o){let H=ie(a);H&&e.add(H)}else{let a=ie(o);a&&e.add(a)}return e.delete(r.entity),[...e]};var z2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},ne={silent:{level:-1},fatal:{level:z2.fatal},error:{level:z2.error},warn:{level:z2.warn},log:{level:z2.log},info:{level:z2.info},success:{level:z2.success},fail:{level:z2.fail},ready:{level:z2.info},start:{level:z2.info},box:{level:z2.info},debug:{level:z2.debug},trace:{level:z2.trace},verbose:{level:z2.verbose}};function Ce(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function Ve(r,t,e=".",i){if(!Ce(t))return Ve(r,{},e,i);let o=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let H=r[a];H!=null&&(i&&i(o,a,H,e)||(Array.isArray(H)&&Array.isArray(o[a])?o[a]=[...H,...o[a]]:Ce(H)&&Ce(o[a])?o[a]=Ve(H,o[a],(e?`${e}.`:"")+a.toString(),i):o[a]=H))}return o}function Fc(r){return(...t)=>t.reduce((e,i)=>Ve(e,i,"",r),{})}var $c=Fc();function Rc(r){return Object.prototype.toString.call(r)==="[object Object]"}function Dc(r){return!(!Rc(r)||!r.message&&!r.args||r.stack)}var ae=!1,QC=[],y2=class r{constructor(t={}){B(this,"options");B(this,"_lastLog");B(this,"_mockFn");let e=t.types||ne;this.options=$c({...t,defaults:{...t.defaults},level:He(t.level,e),reporters:[...t.reporters||[]]},{types:ne,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let o={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(o),this[i].raw=this._wrapLogFn(o,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=He(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){ae=!0}resumeLogs(){ae=!1;let t=QC.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(ae){QC.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let o={date:new Date,args:[],...t,level:He(t.level,this.options.types)};!i&&e.length===1&&Dc(e[0])?Object.assign(o,e[0]):o.args=[...e],o.message&&(o.args.unshift(o.message),delete o.message),o.additional&&(Array.isArray(o.additional)||(o.additional=o.additional.split(`
`)),o.args.push(`
`+o.additional.join(`
`)),delete o.additional),o.type=typeof o.type=="string"?o.type.toLowerCase():"log",o.tag=typeof o.tag=="string"?o.tag:"";let a=(V=!1)=>{let s=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&s>0){let M=[...this._lastLog.object.args];s>1&&M.push(`(repeated ${s} times)`),this._log({...this._lastLog.object,args:M}),this._lastLog.count=1}V&&(this._lastLog.object=o,this._log(o))};clearTimeout(this._lastLog.timeout);let H=this._lastLog.time&&o.date?o.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=o.date,H<this.options.throttle)try{let V=JSON.stringify([o.type,o.tag,o.args]),s=this._lastLog.serialized===V;if(this._lastLog.serialized=V,s&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function He(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}y2.prototype.add=y2.prototype.addReporter;y2.prototype.remove=y2.prototype.removeReporter;y2.prototype.clear=y2.prototype.removeReporter;y2.prototype.withScope=y2.prototype.withTag;y2.prototype.mock=y2.prototype.mockTypes;y2.prototype.pause=y2.prototype.pauseLogs;y2.prototype.resume=y2.prototype.resumeLogs;function KC(r={}){return new y2(r)}var se=class{constructor(t){B(this,"options");B(this,"defaultColor");B(this,"levelColorMap");B(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,o=t.tag||"",H=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,V=`%c${[o,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${V}%c ${t.args[0]}`,H,"",...t.args.slice(1)):e(V,H,...t.args)}};function Le(r={}){return KC({reporters:r.reporters||[new se({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var ww=Le();var Bc=z2.info,I5=Le({level:Bc}).withTag("weather-forecast-card");var XC=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",le=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var U6={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D7=r=>(...t)=>({_$litDirective$:r,values:t}),H3=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var JC="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,Me=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:JC?"100px":"50px",height:JC?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",V=>{let s=V||window.event;return s.preventDefault&&s.preventDefault(),s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0,s.returnValue=!1,!1});let o=V=>{this.held=!1;let s,M;V.touches?(s=V.touches[0].pageX,M=V.touches[0].pageY):(s=V.pageX,M=V.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(s,M),this.held=!0},this.holdTime)},a=V=>{V.preventDefault(),i.stopPropagation&&V.stopPropagation(),!(["touchend","touchcancel"].includes(V.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?a2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?V.type==="click"&&V.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,a2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,a2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):a2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},H=V=>{V.keyCode===13&&a(V)};e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",o,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",H)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",Me);var zc=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},Ic=(r,t)=>{let e=zc();e&&e.bind(r,t)},o0=D7(class extends H3{update(r,[t]){return Ic(r.element,t),M5}render(r){}});var Y3=2,I2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],j6=["rain","snow","lightning","sky","moon","sun","cloud"],G6=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],ta="temperature_and_precipitation";var ce=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(ce||{}),Nc=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Wc={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},N5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},Uc=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return Nc[e]},jc=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let o=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return o;let a=Uc(i);if(!a)return o;let H=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${o} (${H})`},c5=(r,t,e)=>{let i=r.config,o=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||o;case"precipitation":return t.attributes.precipitation_unit||(o==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(o==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},Gc=288e5,qc=864e5,Yc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Gc}},Qc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<qc}},ea=r=>{if(r?.forecast&&r.forecast.length>2)return Yc(r.forecast)?{forecast:r.forecast,type:"hourly"}:Qc(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},de=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:ea(r);if(e==="legacy")return ea(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},ra=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var ia=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,oa=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,o=(t&4)!==0;return e||i||o},W4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let o={hourly:2,daily:1,twice_daily:4}[t];return(e&o)!==0},O5=r=>{if(W4(r,"daily"))return"daily";if(W4(r,"twice_daily"))return"twice_daily"},Ca=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},B7=C3((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),U4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=c5(r,t,"wind_speed");return Kc(e.wind_speed,i)},Kc=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},q6=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return Wc[e]}}},aa=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,H=a===0?t:t-a,V=r.slice(i,i+H);if(i+=V.length,V.length===0)continue;let s=V.map(R=>R.temperature),M=V.map(R=>R.humidity).filter(R=>R!==void 0),p=V.map(R=>R.pressure).filter(R=>R!==void 0),h=V.map(R=>R.wind_speed).filter(R=>R!==void 0),v=V.map(R=>R.wind_bearing).filter(R=>R!==void 0),x=V.map(R=>R.precipitation_probability).filter(R=>R!==void 0),y=V.map(R=>R.uv_index).filter(R=>R!==void 0),k=V.map(R=>R.apparent_temperature).filter(R=>R!==void 0),O=new Date(V[V.length-1].datetime);O.setMinutes(59),O.setSeconds(59);let E={datetime:V[0].datetime,groupEndtime:O.toISOString(),condition:td(V),temperature:parseFloat(R7(s).toFixed(1))};M.length>0&&(E.humidity=Math.round(R7(M))),x.length>0&&(E.precipitation_probability=Math.max(...x)),V.some(R=>R.precipitation!==void 0)&&(E.precipitation=V.reduce((R,K)=>R+(K.precipitation||0),0));let $=V.map(R=>R.templow).filter(R=>R!==void 0);$.length>0&&(E.templow=Math.min(...$)),p.length>0&&(E.pressure=Math.round(R7(p))),h.length>0&&(E.wind_speed=R7(h)),v.length>0&&(E.wind_bearing=Jc(v)),y.length>0&&(E.uv_index=Math.max(...y)),k.length>0&&(E.apparent_temperature=parseFloat(R7(k).toFixed(1))),e.push(E)}return e},Xc="mdi:gauge",Ha=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?N5[r]:void 0)??Xc),z7=(r,t,e,i)=>{let o=t.attributes[i];if(o!==void 0){if(i==="wind_speed")return jc(r,t);if(i==="wind_gust_speed"){let a=c5(r,t,"wind_gust_speed");return`${ee(o,r.locale)} ${a}`}if(i==="ozone"){let a=c5(r,t,"ozone");return`${o} ${a}`}return i==="apparent_temperature"||i==="dew_point"?C0(r,t,o,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},Y6=(r,t,e,i,o)=>{let a=r.states[o];if(!a)return;let H=a.state;return H===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?C0(r,t,H,e.current?.temperature_precision):r.formatEntityState(a)},C0=(r,t,e,i,o)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,H=c5(r,t,"temperature"),V=typeof e=="string"?parseFloat(e):e;return isNaN(V)?`${e}${o?"":H}`:`${ee(V,r.locale,a)}${o?"":H}`},Jc=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(V=>{let s=V*Math.PI/180;t+=Math.sin(s),e+=Math.cos(s)});let i=t/r.length,o=e/r.length,H=Math.atan2(i,o)*180/Math.PI;return H<0&&(H+=360),Math.round(H)},td=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let o=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return o===-1&&(o=0),a===-1&&(a=0),o-a}),r[0]?.condition||"exceptional"};var I7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let o=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{o&&(o.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let o=t.scrollLeft,a=Math.round(o/i)*i,H=500,V=performance.now(),s=p=>p*(2-p),M=p=>{let h=this._container;if(!h){this._completeFinalize();return}let v=p-V,x=Math.min(v/H,1),y=s(x);h.scrollLeft=o+(a-o)*y,x<1?this._state.momentumId=requestAnimationFrame(M):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(M)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var na="important",ed=" !"+na,Q2=D7(class extends H3{constructor(r){if(super(r),r.type!==U6.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let o=t[i];if(o!=null){this.ft.add(i);let a=typeof o=="string"&&o.endsWith(ed);i.includes("-")||a?e.setProperty(i,a?o.slice(0,-11):o,a?na:""):e[i]=o}}return M5}});var Q3=D7(class extends H3{constructor(r){if(super(r),r.type!==U6.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return M5}});function q4(r){return r+.5|0}var n3=(r,t,e)=>Math.max(Math.min(r,e),t);function j4(r){return n3(q4(r*2.55),0,255)}function V3(r){return n3(q4(r*255),0,255)}function y0(r){return n3(q4(r/2.55)/100,0,1)}function Va(r){return n3(q4(r*100),0,100)}var T5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ue=[..."0123456789ABCDEF"],rd=r=>ue[r&15],id=r=>ue[(r&240)>>4]+ue[r&15],Q6=r=>(r&240)>>4===(r&15),od=r=>Q6(r.r)&&Q6(r.g)&&Q6(r.b)&&Q6(r.a);function Cd(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&T5[r[1]]*17,g:255&T5[r[2]]*17,b:255&T5[r[3]]*17,a:t===5?T5[r[4]]*17:255}:(t===7||t===9)&&(e={r:T5[r[1]]<<4|T5[r[2]],g:T5[r[3]]<<4|T5[r[4]],b:T5[r[5]]<<4|T5[r[6]],a:t===9?T5[r[7]]<<4|T5[r[8]]:255})),e}var ad=(r,t)=>r<255?t(r):"";function Hd(r){var t=od(r)?rd:id;return r?"#"+t(r.r)+t(r.g)+t(r.b)+ad(r.a,t):void 0}var nd=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ma(r,t,e){let i=t*Math.min(e,1-e),o=(a,H=(a+r/30)%12)=>e-i*Math.max(Math.min(H-3,9-H,1),-1);return[o(0),o(8),o(4)]}function Vd(r,t,e){let i=(o,a=(o+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function sd(r,t,e){let i=Ma(r,1,.5),o;for(t+e>1&&(o=1/(t+e),t*=o,e*=o),o=0;o<3;o++)i[o]*=1-t-e,i[o]+=t;return i}function Ld(r,t,e,i,o){return r===o?(t-e)/i+(t<e?6:0):t===o?(e-r)/i+2:(r-t)/i+4}function me(r){let e=r.r/255,i=r.g/255,o=r.b/255,a=Math.max(e,i,o),H=Math.min(e,i,o),V=(a+H)/2,s,M,p;return a!==H&&(p=a-H,M=V>.5?p/(2-a-H):p/(a+H),s=Ld(e,i,o,p,a),s=s*60+.5),[s|0,M||0,V]}function he(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(V3)}function fe(r,t,e){return he(Ma,r,t,e)}function ld(r,t,e){return he(sd,r,t,e)}function Md(r,t,e){return he(Vd,r,t,e)}function ca(r){return(r%360+360)%360}function cd(r){let t=nd.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?j4(+t[5]):V3(+t[5]));let o=ca(+t[2]),a=+t[3]/100,H=+t[4]/100;return t[1]==="hwb"?i=ld(o,a,H):t[1]==="hsv"?i=Md(o,a,H):i=fe(o,a,H),{r:i[0],g:i[1],b:i[2],a:e}}function dd(r,t){var e=me(r);e[0]=ca(e[0]+t),e=fe(e),r.r=e[0],r.g=e[1],r.b=e[2]}function pd(r){if(!r)return;let t=me(r),e=t[0],i=Va(t[1]),o=Va(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${o}%, ${y0(r.a)})`:`hsl(${e}, ${i}%, ${o}%)`}var sa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},La={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function ud(){let r={},t=Object.keys(La),e=Object.keys(sa),i,o,a,H,V;for(i=0;i<t.length;i++){for(H=V=t[i],o=0;o<e.length;o++)a=e[o],V=V.replace(a,sa[a]);a=parseInt(La[H],16),r[V]=[a>>16&255,a>>8&255,a&255]}return r}var K6;function md(r){K6||(K6=ud(),K6.transparent=[0,0,0,0]);let t=K6[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var hd=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function fd(r){let t=hd.exec(r),e=255,i,o,a;if(t){if(t[7]!==i){let H=+t[7];e=t[8]?j4(H):n3(H*255,0,255)}return i=+t[1],o=+t[3],a=+t[5],i=255&(t[2]?j4(i):n3(i,0,255)),o=255&(t[4]?j4(o):n3(o,0,255)),a=255&(t[6]?j4(a):n3(a,0,255)),{r:i,g:o,b:a,a:e}}}function Ad(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${y0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var pe=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,N7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function vd(r,t,e){let i=N7(y0(r.r)),o=N7(y0(r.g)),a=N7(y0(r.b));return{r:V3(pe(i+e*(N7(y0(t.r))-i))),g:V3(pe(o+e*(N7(y0(t.g))-o))),b:V3(pe(a+e*(N7(y0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function X6(r,t,e){if(r){let i=me(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=fe(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function da(r,t){return r&&Object.assign(t||{},r)}function la(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=V3(r[3]))):(t=da(r,{r:0,g:0,b:0,a:1}),t.a=V3(t.a)),t}function xd(r){return r.charAt(0)==="r"?fd(r):cd(r)}var G4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=la(t):e==="string"&&(i=Cd(t)||md(t)||xd(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=da(this._rgb);return t&&(t.a=y0(t.a)),t}set rgb(t){this._rgb=la(t)}rgbString(){return this._valid?Ad(this._rgb):void 0}hexString(){return this._valid?Hd(this._rgb):void 0}hslString(){return this._valid?pd(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,o=t.rgb,a,H=e===a?.5:e,V=2*H-1,s=i.a-o.a,M=((V*s===-1?V:(V+s)/(1+V*s))+1)/2;a=1-M,i.r=255&M*i.r+a*o.r+.5,i.g=255&M*i.g+a*o.g+.5,i.b=255&M*i.b+a*o.b+.5,i.a=H*i.a+(1-H)*o.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=vd(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=V3(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=q4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return X6(this._rgb,2,t),this}darken(t){return X6(this._rgb,2,-t),this}saturate(t){return X6(this._rgb,1,t),this}desaturate(t){return X6(this._rgb,1,-t),this}rotate(t){return dd(this._rgb,t),this}};function U5(){}var ge=(()=>{let r=0;return()=>r++})();function b1(r){return r==null}function i2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Z1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function V2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function K2(r,t){return V2(r)?r:t}function $1(r,t){return typeof r>"u"?t:r}var _e=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function t2(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function I1(r,t,e,i){let o,a,H;if(i2(r))if(a=r.length,i)for(o=a-1;o>=0;o--)t.call(e,r[o],o);else for(o=0;o<a;o++)t.call(e,r[o],o);else if(Z1(r))for(H=Object.keys(r),a=H.length,o=0;o<a;o++)t.call(e,r[H[o]],H[o])}function j7(r,t){let e,i,o,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(o=r[e],a=t[e],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function Q4(r){if(i2(r))return r.map(Q4);if(Z1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,o=0;for(;o<i;++o)t[e[o]]=Q4(r[e[o]]);return t}return r}function _a(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function Sa(r,t,e,i){if(!_a(r))return;let o=t[r],a=e[r];Z1(o)&&Z1(a)?d5(o,a,i):t[r]=Q4(a)}function d5(r,t,e){let i=i2(t)?t:[t],o=i.length;if(!Z1(r))return r;e=e||{};let a=e.merger||Sa,H;for(let V=0;V<o;++V){if(H=i[V],!Z1(H))continue;let s=Object.keys(H);for(let M=0,p=s.length;M<p;++M)a(s[M],r,H,e)}return r}function J3(r,t){return d5(r,t,{merger:wa})}function wa(r,t,e){if(!_a(r))return;let i=t[r],o=e[r];Z1(i)&&Z1(o)?J3(i,o):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=Q4(o))}var pa={"":r=>r,x:r=>r.x,y:r=>r.y};function ba(r){let t=r.split("."),e=[],i="";for(let o of t)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function gd(r){let t=ba(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function M3(r,t){return(pa[t]||(pa[t]=gd(t)))(r)}function J4(r){return r.charAt(0).toUpperCase()+r.slice(1)}var t7=r=>typeof r<"u",a0=r=>typeof r=="function",o8=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function Se(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var Y1=Math.PI,p2=2*Y1,ya=p2+Y1,K4=Number.POSITIVE_INFINITY,Za=Y1/180,f2=Y1/2,s3=Y1/4,ve=Y1*2/3,H0=Math.log10,P5=Math.sign;function e7(r,t,e){return Math.abs(r-t)<e}function C8(r){let t=Math.round(r);r=e7(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(H0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function we(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((o,a)=>o-a).pop(),t}function _d(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function r7(r){return!_d(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function be(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function a8(r,t,e){let i,o,a;for(i=0,o=r.length;i<o;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function n0(r){return r*(Y1/180)}function t9(r){return r*(180/Y1)}function H8(r){if(!V2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function n8(r,t){let e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*Y1&&(a+=p2),{angle:a,distance:o}}function X4(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function ka(r,t){return(r-t+ya)%p2-Y1}function Z2(r){return(r%p2+p2)%p2}function e9(r,t,e,i){let o=Z2(r),a=Z2(t),H=Z2(e),V=Z2(a-o),s=Z2(H-o),M=Z2(o-a),p=Z2(o-H);return o===a||o===H||i&&a===H||V>s&&M<p}function k2(r,t,e){return Math.max(t,Math.min(e,r))}function ye(r){return k2(r,-32768,32767)}function i7(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function r9(r,t,e){e=e||(H=>r[H]<t);let i=r.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,e(a)?o=a:i=a;return{lo:o,hi:i}}var k0=(r,t,e,i)=>r9(r,e,i?o=>{let a=r[o][t];return a<e||a===e&&r[o+1][t]===e}:o=>r[o][t]<e),Ze=(r,t,e)=>r9(r,e,i=>r[i][t]>=e);function ke(r,t,e){let i=0,o=r.length;for(;i<o&&r[i]<t;)i++;for(;o>i&&r[o-1]>e;)o--;return i>0||o<r.length?r.slice(i,o):r}var Oa=["push","pop","shift","splice","unshift"];function Oe(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Oa.forEach(e=>{let i="_onData"+J4(e),o=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let H=o.apply(this,a);return r._chartjs.listeners.forEach(V=>{typeof V[i]=="function"&&V[i](...a)}),H}})})}function V8(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,o=i.indexOf(t);o!==-1&&i.splice(o,1),!(i.length>0)&&(Oa.forEach(a=>{delete r[a]}),delete r._chartjs)}function s8(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var L8=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function l8(r,t){let e=[],i=!1;return function(...o){e=o,i||(i=!0,L8.call(window,()=>{i=!1,r.apply(t,e)}))}}function Te(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var Pe=r=>r==="start"?"left":r==="end"?"right":"center",M8=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function Ee(r,t,e){let i=t.length,o=0,a=i;if(r._sorted){let{iScale:H,vScale:V,_parsed:s}=r,M=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,p=H.axis,{min:h,max:v,minDefined:x,maxDefined:y}=H.getUserBounds();if(x){if(o=Math.min(k0(s,p,h).lo,e?i:k0(t,p,H.getPixelForValue(h)).lo),M){let k=s.slice(0,o+1).reverse().findIndex(O=>!b1(O[V.axis]));o-=Math.max(0,k)}o=k2(o,0,i-1)}if(y){let k=Math.max(k0(s,H.axis,v,!0).hi+1,e?0:k0(t,p,H.getPixelForValue(v),!0).hi+1);if(M){let O=s.slice(k-1).findIndex(E=>!b1(E[V.axis]));k+=Math.max(0,O)}a=k2(k,o,i)-o}else a=i-o}return{start:o,count:a}}function Fe(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,o={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=o,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,o),a}var J6=r=>r===0||r===1,ua=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*p2/e)),ma=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*p2/e)+1,K3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*f2)+1,easeOutSine:r=>Math.sin(r*f2),easeInOutSine:r=>-.5*(Math.cos(Y1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>J6(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>J6(r)?r:ua(r,.075,.3),easeOutElastic:r=>J6(r)?r:ma(r,.075,.3),easeInOutElastic(r){return J6(r)?r:r<.5?.5*ua(r*2,.1125,.45):.5+.5*ma(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-K3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?K3.easeInBounce(r*2)*.5:K3.easeOutBounce(r*2-1)*.5+.5};function c8(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function d8(r){return c8(r)?r:new G4(r)}function r8(r){return c8(r)?r:new G4(r).saturate(.5).darken(.1).hexString()}var Sd=["x","y","borderWidth","radius","tension"],wd=["color","borderColor","backgroundColor"];function bd(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:wd},numbers:{type:"number",properties:Sd}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function yd(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var ha=new Map;function Zd(r,t){t=t||{};let e=r+JSON.stringify(t),i=ha.get(e);return i||(i=new Intl.NumberFormat(r,t),ha.set(e,i)),i}function i9(r,t,e){return Zd(t,e).format(r)}var Ta={values(r){return i2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,o,a=r;if(e.length>1){let M=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(M<1e-4||M>1e15)&&(o="scientific"),a=kd(r,e)}let H=H0(Math.abs(a)),V=isNaN(H)?1:Math.max(Math.min(-1*Math.floor(H),20),0),s={notation:o,minimumFractionDigits:V,maximumFractionDigits:V};return Object.assign(s,this.options.ticks.format),i9(r,i,s)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(H0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Ta.numeric.call(this,r,t,e):""}};function kd(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var o9={formatters:Ta};function Od(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:o9.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var c3=Object.create(null),p8=Object.create(null);function Y4(r,t){if(!t)return r;let e=t.split(".");for(let i=0,o=e.length;i<o;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function Ae(r,t,e){return typeof t=="string"?d5(Y4(r,t),e):d5(Y4(r,""),t)}var xe=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>r8(o.backgroundColor),this.hoverBorderColor=(i,o)=>r8(o.borderColor),this.hoverColor=(i,o)=>r8(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ae(this,t,e)}get(t){return Y4(this,t)}describe(t,e){return Ae(p8,t,e)}override(t,e){return Ae(c3,t,e)}route(t,e,i,o){let a=Y4(this,t),H=Y4(this,i),V="_"+e;Object.defineProperties(a,{[V]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let s=this[V],M=H[o];return Z1(s)?Object.assign({},M,s):$1(s,M)},set(s){this[V]=s}}})}apply(t){t.forEach(e=>e(this))}},s2=new xe({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[bd,yd,Od]);function Pa(r){return!r||b1(r.size)||b1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function W7(r,t,e,i,o){let a=t[o];return a||(a=t[o]=r.measureText(o).width,e.push(o)),a>i&&(i=a),i}function $e(r,t,e,i){i=i||{};let o=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(o=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let H=0,V=e.length,s,M,p,h,v;for(s=0;s<V;s++)if(h=e[s],h!=null&&!i2(h))H=W7(r,o,a,H,h);else if(i2(h))for(M=0,p=h.length;M<p;M++)v=h[M],v!=null&&!i2(v)&&(H=W7(r,o,a,H,v));r.restore();let x=a.length/2;if(x>e.length){for(s=0;s<x;s++)delete o[a[s]];a.splice(0,x)}return H}function O0(r,t,e){let i=r.currentDevicePixelRatio,o=e!==0?Math.max(e/2,.5):0;return Math.round((t-o)*i)/i+o}function u8(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function C9(r,t,e,i){Re(r,t,e,i,null)}function Re(r,t,e,i,o){let a,H,V,s,M,p,h,v,x=t.pointStyle,y=t.rotation,k=t.radius,O=(y||0)*Za;if(x&&typeof x=="object"&&(a=x.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(O),r.drawImage(x,-x.width/2,-x.height/2,x.width,x.height),r.restore();return}if(!(isNaN(k)||k<=0)){switch(r.beginPath(),x){default:o?r.ellipse(e,i,o/2,k,0,0,p2):r.arc(e,i,k,0,p2),r.closePath();break;case"triangle":p=o?o/2:k,r.moveTo(e+Math.sin(O)*p,i-Math.cos(O)*k),O+=ve,r.lineTo(e+Math.sin(O)*p,i-Math.cos(O)*k),O+=ve,r.lineTo(e+Math.sin(O)*p,i-Math.cos(O)*k),r.closePath();break;case"rectRounded":M=k*.516,s=k-M,H=Math.cos(O+s3)*s,h=Math.cos(O+s3)*(o?o/2-M:s),V=Math.sin(O+s3)*s,v=Math.sin(O+s3)*(o?o/2-M:s),r.arc(e-h,i-V,M,O-Y1,O-f2),r.arc(e+v,i-H,M,O-f2,O),r.arc(e+h,i+V,M,O,O+f2),r.arc(e-v,i+H,M,O+f2,O+Y1),r.closePath();break;case"rect":if(!y){s=Math.SQRT1_2*k,p=o?o/2:s,r.rect(e-p,i-s,2*p,2*s);break}O+=s3;case"rectRot":h=Math.cos(O)*(o?o/2:k),H=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+v,i-H),r.lineTo(e+h,i+V),r.lineTo(e-v,i+H),r.closePath();break;case"crossRot":O+=s3;case"cross":h=Math.cos(O)*(o?o/2:k),H=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H);break;case"star":h=Math.cos(O)*(o?o/2:k),H=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H),O+=s3,h=Math.cos(O)*(o?o/2:k),H=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H);break;case"line":H=o?o/2:Math.cos(O)*k,V=Math.sin(O)*k,r.moveTo(e-H,i-V),r.lineTo(e+H,i+V);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(O)*(o?o/2:k),i+Math.sin(O)*k);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function W5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function a9(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function H9(r){r.restore()}function De(r,t,e,i,o){if(!t)return r.lineTo(e.x,e.y);if(o==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else o==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function Be(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Td(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),b1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function Pd(r,t,e,i,o){if(o.strikethrough||o.underline){let a=r.measureText(i),H=t-a.actualBoundingBoxLeft,V=t+a.actualBoundingBoxRight,s=e-a.actualBoundingBoxAscent,M=e+a.actualBoundingBoxDescent,p=o.strikethrough?(s+M)/2:M;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=o.decorationWidth||2,r.moveTo(H,p),r.lineTo(V,p),r.stroke()}}function Ed(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function G7(r,t,e,i,o,a={}){let H=i2(t)?t:[t],V=a.strokeWidth>0&&a.strokeColor!=="",s,M;for(r.save(),r.font=o.string,Td(r,a),s=0;s<H.length;++s)M=H[s],a.backdrop&&Ed(r,a.backdrop),V&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),b1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(M,e,i,a.maxWidth)),r.fillText(M,e,i,a.maxWidth),Pd(r,e,i,M,a),i+=Number(o.lineHeight);r.restore()}function q7(r,t){let{x:e,y:i,w:o,h:a,radius:H}=t;r.arc(e+H.topLeft,i+H.topLeft,H.topLeft,1.5*Y1,Y1,!0),r.lineTo(e,i+a-H.bottomLeft),r.arc(e+H.bottomLeft,i+a-H.bottomLeft,H.bottomLeft,Y1,f2,!0),r.lineTo(e+o-H.bottomRight,i+a),r.arc(e+o-H.bottomRight,i+a-H.bottomRight,H.bottomRight,f2,0,!0),r.lineTo(e+o,i+H.topRight),r.arc(e+o-H.topRight,i+H.topRight,H.topRight,0,-f2,!0),r.lineTo(e+H.topLeft,i)}var Fd=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,$d=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Ea(r,t){let e=(""+r).match(Fd);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var Rd=r=>+r||0;function n9(r,t){let e={},i=Z1(t),o=i?Object.keys(t):t,a=Z1(r)?i?H=>$1(r[H],r[t[H]]):H=>r[H]:()=>r;for(let H of o)e[H]=Rd(a(H));return e}function m8(r){return n9(r,{top:"y",right:"x",bottom:"y",left:"x"})}function d3(r){return n9(r,["topLeft","topRight","bottomLeft","bottomRight"])}function N2(r){let t=m8(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function R2(r,t){r=r||{},t=t||s2.font;let e=$1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=$1(r.style,t.style);i&&!(""+i).match($d)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let o={family:$1(r.family,t.family),lineHeight:Ea($1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:$1(r.weight,t.weight),string:""};return o.string=Pa(o),o}function e2(r,t,e,i){let o=!0,a,H,V;for(a=0,H=r.length;a<H;++a)if(V=r[a],V!==void 0&&(t!==void 0&&typeof V=="function"&&(V=V(t),o=!1),e!==void 0&&i2(V)&&(V=V[e%V.length],o=!1),V!==void 0))return i&&!o&&(i.cacheable=!1),V}function ze(r,t,e){let{min:i,max:o}=r,a=_e(t,(o-i)/2),H=(V,s)=>e&&V===0?0:V+s;return{min:H(i,-Math.abs(a)),max:H(o,a)}}function V0(r,t){return Object.assign(Object.create(r),t)}function V9(r,t=[""],e,i,o=()=>r[0]){let a=e||r;typeof i>"u"&&(i=Ra("_fallback",r));let H={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:o,override:V=>V9([V,...r],t,a,i)};return new Proxy(H,{deleteProperty(V,s){return delete V[s],delete V._keys,delete r[0][s],!0},get(V,s){return Fa(V,s,()=>jd(s,t,r,V))},getOwnPropertyDescriptor(V,s){return Reflect.getOwnPropertyDescriptor(V._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(V,s){return Aa(V).includes(s)},ownKeys(V){return Aa(V)},set(V,s,M){let p=V._storage||(V._storage=o());return V[s]=p[s]=M,delete V._keys,!0}})}function l3(r,t,e,i){let o={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:h8(r,i),setContext:a=>l3(r,a,e,i),override:a=>l3(r.override(a),t,e,i)};return new Proxy(o,{deleteProperty(a,H){return delete a[H],delete r[H],!0},get(a,H,V){return Fa(a,H,()=>Bd(a,H,V))},getOwnPropertyDescriptor(a,H){return a._descriptors.allKeys?Reflect.has(r,H)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,H)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,H){return Reflect.has(r,H)},ownKeys(){return Reflect.ownKeys(r)},set(a,H,V){return r[H]=V,delete a[H],!0}})}function h8(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:o=t.allKeys}=r;return{allKeys:o,scriptable:e,indexable:i,isScriptable:a0(e)?e:()=>e,isIndexable:a0(i)?i:()=>i}}var Dd=(r,t)=>r?r+J4(t):t,Ie=(r,t)=>Z1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Fa(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function Bd(r,t,e){let{_proxy:i,_context:o,_subProxy:a,_descriptors:H}=r,V=i[t];return a0(V)&&H.isScriptable(t)&&(V=zd(t,V,r,e)),i2(V)&&V.length&&(V=Id(t,V,r,H.isIndexable)),Ie(t,V)&&(V=l3(V,o,a&&a[t],H)),V}function zd(r,t,e,i){let{_proxy:o,_context:a,_subProxy:H,_stack:V}=e;if(V.has(r))throw new Error("Recursion detected: "+Array.from(V).join("->")+"->"+r);V.add(r);let s=t(a,H||i);return V.delete(r),Ie(r,s)&&(s=Ne(o._scopes,o,r,s)),s}function Id(r,t,e,i){let{_proxy:o,_context:a,_subProxy:H,_descriptors:V}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(Z1(t[0])){let s=t,M=o._scopes.filter(p=>p!==s);t=[];for(let p of s){let h=Ne(M,o,r,p);t.push(l3(h,a,H&&H[r],V))}}return t}function $a(r,t,e){return a0(r)?r(t,e):r}var Nd=(r,t)=>r===!0?t:typeof r=="string"?M3(t,r):void 0;function Wd(r,t,e,i,o){for(let a of t){let H=Nd(e,a);if(H){r.add(H);let V=$a(H._fallback,e,o);if(typeof V<"u"&&V!==e&&V!==i)return V}else if(H===!1&&typeof i<"u"&&e!==i)return null}return!1}function Ne(r,t,e,i){let o=t._rootScopes,a=$a(t._fallback,e,i),H=[...r,...o],V=new Set;V.add(i);let s=fa(V,H,e,a||e,i);return s===null||typeof a<"u"&&a!==e&&(s=fa(V,H,a,s,i),s===null)?!1:V9(Array.from(V),[""],o,a,()=>Ud(t,e,i))}function fa(r,t,e,i,o){for(;e;)e=Wd(r,t,e,i,o);return e}function Ud(r,t,e){let i=r._getTarget();t in i||(i[t]={});let o=i[t];return i2(o)&&Z1(e)?e:o||{}}function jd(r,t,e,i){let o;for(let a of t)if(o=Ra(Dd(a,r),e),typeof o<"u")return Ie(r,o)?Ne(e,i,r,o):o}function Ra(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function Aa(r){let t=r._keys;return t||(t=r._keys=Gd(r._scopes)),t}function Gd(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(o=>!o.startsWith("_")))t.add(i);return Array.from(t)}var qd=Number.EPSILON||1e-14,U7=(r,t)=>t<r.length&&!r[t].skip&&r[t],Da=r=>r==="x"?"y":"x";function Ba(r,t,e,i){let o=r.skip?t:r,a=t,H=e.skip?t:e,V=X4(a,o),s=X4(H,a),M=V/(V+s),p=s/(V+s);M=isNaN(M)?0:M,p=isNaN(p)?0:p;let h=i*M,v=i*p;return{previous:{x:a.x-h*(H.x-o.x),y:a.y-h*(H.y-o.y)},next:{x:a.x+v*(H.x-o.x),y:a.y+v*(H.y-o.y)}}}function Yd(r,t,e){let i=r.length,o,a,H,V,s,M=U7(r,0);for(let p=0;p<i-1;++p)if(s=M,M=U7(r,p+1),!(!s||!M)){if(e7(t[p],0,qd)){e[p]=e[p+1]=0;continue}o=e[p]/t[p],a=e[p+1]/t[p],V=Math.pow(o,2)+Math.pow(a,2),!(V<=9)&&(H=3/Math.sqrt(V),e[p]=o*H*t[p],e[p+1]=a*H*t[p])}}function Qd(r,t,e="x"){let i=Da(e),o=r.length,a,H,V,s=U7(r,0);for(let M=0;M<o;++M){if(H=V,V=s,s=U7(r,M+1),!V)continue;let p=V[e],h=V[i];H&&(a=(p-H[e])/3,V[`cp1${e}`]=p-a,V[`cp1${i}`]=h-a*t[M]),s&&(a=(s[e]-p)/3,V[`cp2${e}`]=p+a,V[`cp2${i}`]=h+a*t[M])}}function za(r,t="x"){let e=Da(t),i=r.length,o=Array(i).fill(0),a=Array(i),H,V,s,M=U7(r,0);for(H=0;H<i;++H)if(V=s,s=M,M=U7(r,H+1),!!s){if(M){let p=M[t]-s[t];o[H]=p!==0?(M[e]-s[e])/p:0}a[H]=V?M?P5(o[H-1])!==P5(o[H])?0:(o[H-1]+o[H])/2:o[H-1]:o[H]}Yd(r,o,a),Qd(r,a,t)}function t8(r,t,e){return Math.max(Math.min(r,e),t)}function Kd(r,t){let e,i,o,a,H,V=W5(r[0],t);for(e=0,i=r.length;e<i;++e)H=a,a=V,V=e<i-1&&W5(r[e+1],t),a&&(o=r[e],H&&(o.cp1x=t8(o.cp1x,t.left,t.right),o.cp1y=t8(o.cp1y,t.top,t.bottom)),V&&(o.cp2x=t8(o.cp2x,t.left,t.right),o.cp2y=t8(o.cp2y,t.top,t.bottom)))}function We(r,t,e,i,o){let a,H,V,s;if(t.spanGaps&&(r=r.filter(M=>!M.skip)),t.cubicInterpolationMode==="monotone")za(r,o);else{let M=i?r[r.length-1]:r[0];for(a=0,H=r.length;a<H;++a)V=r[a],s=Ba(M,V,r[Math.min(a+1,H-(i?0:1))%H],t.tension),V.cp1x=s.previous.x,V.cp1y=s.previous.y,V.cp2x=s.next.x,V.cp2y=s.next.y,M=V}t.capBezierPoints&&Kd(r,e)}function s9(){return typeof window<"u"&&typeof document<"u"}function L9(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function i8(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var f8=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function Ia(r,t){return f8(r).getPropertyValue(t)}var Xd=["top","right","bottom","left"];function X3(r,t,e){let i={};e=e?"-"+e:"";for(let o=0;o<4;o++){let a=Xd[o];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var Jd=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function tp(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:o,offsetY:a}=i,H=!1,V,s;if(Jd(o,a,r.target))V=o,s=a;else{let M=t.getBoundingClientRect();V=i.clientX-M.left,s=i.clientY-M.top,H=!0}return{x:V,y:s,box:H}}function j5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,o=f8(e),a=o.boxSizing==="border-box",H=X3(o,"padding"),V=X3(o,"border","width"),{x:s,y:M,box:p}=tp(r,e),h=H.left+(p&&V.left),v=H.top+(p&&V.top),{width:x,height:y}=t;return a&&(x-=H.width+V.width,y-=H.height+V.height),{x:Math.round((s-h)/x*e.width/i),y:Math.round((M-v)/y*e.height/i)}}function ep(r,t,e){let i,o;if(t===void 0||e===void 0){let a=r&&L9(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let H=a.getBoundingClientRect(),V=f8(a),s=X3(V,"border","width"),M=X3(V,"padding");t=H.width-M.width-s.width,e=H.height-M.height-s.height,i=i8(V.maxWidth,a,"clientWidth"),o=i8(V.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||K4,maxHeight:o||K4}}var L3=r=>Math.round(r*10)/10;function Ue(r,t,e,i){let o=f8(r),a=X3(o,"margin"),H=i8(o.maxWidth,r,"clientWidth")||K4,V=i8(o.maxHeight,r,"clientHeight")||K4,s=ep(r,t,e),{width:M,height:p}=s;if(o.boxSizing==="content-box"){let v=X3(o,"border","width"),x=X3(o,"padding");M-=x.width+v.width,p-=x.height+v.height}return M=Math.max(0,M-a.width),p=Math.max(0,i?M/i:p-a.height),M=L3(Math.min(M,H,s.maxWidth)),p=L3(Math.min(p,V,s.maxHeight)),M&&!p&&(p=L3(M/2)),(t!==void 0||e!==void 0)&&i&&s.height&&p>s.height&&(p=s.height,M=L3(Math.floor(p*i))),{width:M,height:p}}function A8(r,t,e){let i=t||1,o=L3(r.height*i),a=L3(r.width*i);r.height=L3(r.height),r.width=L3(r.width);let H=r.canvas;return H.style&&(e||!H.style.height&&!H.style.width)&&(H.style.height=`${r.height}px`,H.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||H.height!==o||H.width!==a?(r.currentDevicePixelRatio=i,H.height=o,H.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var je=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};s9()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function v8(r,t){let e=Ia(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Z0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function Ge(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function qe(r,t,e,i){let o={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},H=Z0(r,o,e),V=Z0(o,a,e),s=Z0(a,t,e),M=Z0(H,V,e),p=Z0(V,s,e);return Z0(M,p,e)}var rp=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},ip=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function l9(r,t,e){return r?rp(t,e):ip()}function Ye(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function Qe(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function Na(r){return r==="angle"?{between:e9,compare:ka,normalize:Z2}:{between:i7,compare:(t,e)=>t-e,normalize:t=>t}}function va({start:r,end:t,count:e,loop:i,style:o}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:o}}function op(r,t,e){let{property:i,start:o,end:a}=e,{between:H,normalize:V}=Na(i),s=t.length,{start:M,end:p,loop:h}=r,v,x;if(h){for(M+=s,p+=s,v=0,x=s;v<x&&H(V(t[M%s][i]),o,a);++v)M--,p--;M%=s,p%=s}return p<M&&(p+=s),{start:M,end:p,loop:h,style:r.style}}function x8(r,t,e){if(!e)return[r];let{property:i,start:o,end:a}=e,H=t.length,{compare:V,between:s,normalize:M}=Na(i),{start:p,end:h,loop:v,style:x}=op(r,t,e),y=[],k=!1,O=null,E,$,R,K=()=>s(o,R,E)&&V(o,R)!==0,G=()=>V(a,E)===0||s(a,R,E),c1=()=>k||K(),J=()=>!k||G();for(let a1=p,i1=p;a1<=h;++a1)$=t[a1%H],!$.skip&&(E=M($[i]),E!==R&&(k=s(E,o,a),O===null&&c1()&&(O=V(E,o)===0?a1:i1),O!==null&&J()&&(y.push(va({start:O,end:a1,loop:v,count:H,style:x})),O=null),i1=a1,R=E));return O!==null&&y.push(va({start:O,end:h,loop:v,count:H,style:x})),y}function g8(r,t){let e=[],i=r.segments;for(let o=0;o<i.length;o++){let a=x8(i[o],r.points,t);a.length&&e.push(...a)}return e}function Cp(r,t,e,i){let o=0,a=t-1;if(e&&!i)for(;o<t&&!r[o].skip;)o++;for(;o<t&&r[o].skip;)o++;for(o%=t,e&&(a+=o);a>o&&r[a%t].skip;)a--;return a%=t,{start:o,end:a}}function ap(r,t,e,i){let o=r.length,a=[],H=t,V=r[t],s;for(s=t+1;s<=e;++s){let M=r[s%o];M.skip||M.stop?V.skip||(i=!1,a.push({start:t%o,end:(s-1)%o,loop:i}),t=H=M.stop?s:null):(H=s,V.skip&&(t=s)),V=M}return H!==null&&a.push({start:t%o,end:H%o,loop:i}),a}function Ke(r,t){let e=r.points,i=r.options.spanGaps,o=e.length;if(!o)return[];let a=!!r._loop,{start:H,end:V}=Cp(e,o,a,i);if(i===!0)return xa(r,[{start:H,end:V,loop:a}],e,t);let s=V<H?V+o:V,M=!!r._fullLoop&&H===0&&V===o-1;return xa(r,ap(e,H,s,M),e,t)}function xa(r,t,e,i){return!i||!i.setContext||!e?t:Hp(r,t,e,i)}function Hp(r,t,e,i){let o=r._chart.getContext(),a=ga(r.options),{_datasetIndex:H,options:{spanGaps:V}}=r,s=e.length,M=[],p=a,h=t[0].start,v=h;function x(y,k,O,E){let $=V?-1:1;if(y!==k){for(y+=s;e[y%s].skip;)y-=$;for(;e[k%s].skip;)k+=$;y%s!==k%s&&(M.push({start:y%s,end:k%s,loop:O,style:E}),p=E,h=k%s)}}for(let y of t){h=V?h:y.start;let k=e[h%s],O;for(v=h+1;v<=y.end;v++){let E=e[v%s];O=ga(i.setContext(V0(o,{type:"segment",p0:k,p1:E,p0DataIndex:(v-1)%s,p1DataIndex:v%s,datasetIndex:H}))),np(O,p)&&x(h,v-1,y.loop,p),k=E,p=O}h<v-1&&x(h,v-1,y.loop,p)}return M}function ga(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function np(r,t){if(!t)return!1;let e=[],i=function(o,a){return c8(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function e8(r,t,e){return r.options.clip?r[e]:t[e]}function Vp(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:e8(e,t,"left"),right:e8(e,t,"right"),top:e8(i,t,"top"),bottom:e8(i,t,"bottom")}:t}function _8(r,t){let e=t._clip;if(e.disabled)return!1;let i=Vp(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var Vr=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){let a=e.listeners[o],H=e.duration;a.forEach(V=>V({chart:t,initial:e.initial,numSteps:H,currentStep:Math.min(i-e.start,H)}))}_refresh(){this._request||(this._running=!0,this._request=L8.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;let a=i.items,H=a.length-1,V=!1,s;for(;H>=0;--H)s=a[H],s._active?(s._total>i.duration&&(i.duration=s._total),s.tick(t),V=!0):(a[H]=a[a.length-1],a.pop());V&&(o.draw(),this._notify(o,i,t,"progress")),a.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},T0=new Vr,Wa="transparent",Mp={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=d8(r||Wa),o=i.valid&&d8(t||Wa);return o&&o.valid?o.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},sr=class{constructor(t,e,i,o){let a=e[i];o=e2([t.to,o,a,t.from]);let H=e2([t.from,a,o]);this._active=!0,this._fn=t.fn||Mp[t.type||typeof H],this._easing=K3[t.easing]||K3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=H,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let o=this._target[this._prop],a=i-this._start,H=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(H,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=e2([t.to,e,o,t.from]),this._from=e2([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,o=this._prop,a=this._from,H=this._loop,V=this._to,s;if(this._active=a!==V&&(H||e<i),!this._active){this._target[o]=V,this._notify(!0);return}if(e<0){this._target[o]=a;return}s=e/i%2,s=H&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[o]=this._fn(a,V,s)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][e]()}},F8=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Z1(t))return;let e=Object.keys(s2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{let a=t[o];if(!Z1(a))return;let H={};for(let V of e)H[V]=a[V];(i2(a.properties)&&a.properties||[o]).forEach(V=>{(V===o||!i.has(V))&&i.set(V,H)})})}_animateOptions(t,e){let i=e.options,o=dp(t,i);if(!o)return[];let a=this._createAnimations(o,i);return i.$shared&&cp(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,o=[],a=t.$animations||(t.$animations={}),H=Object.keys(e),V=Date.now(),s;for(s=H.length-1;s>=0;--s){let M=H[s];if(M.charAt(0)==="$")continue;if(M==="options"){o.push(...this._animateOptions(t,e));continue}let p=e[M],h=a[M],v=i.get(M);if(h)if(v&&h.active()){h.update(v,p,V);continue}else h.cancel();if(!v||!v.duration){t[M]=p;continue}a[M]=h=new sr(v,t,M,p),o.push(h)}return o}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return T0.add(this._chart,i),!0}};function cp(r,t){let e=[],i=Object.keys(t);for(let o=0;o<i.length;o++){let a=r[i[o]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function dp(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Ua(r,t){let e=r&&r.options||{},i=e.reverse,o=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:o,end:i?o:a}}function pp(r,t,e){if(e===!1)return!1;let i=Ua(r,e),o=Ua(t,e);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function up(r){let t,e,i,o;return Z1(r)?(t=r.top,e=r.right,i=r.bottom,o=r.left):t=e=i=o=r,{top:t,right:e,bottom:i,left:o,disabled:r===!1}}function DH(r,t){let e=[],i=r._getSortedDatasetMetas(t),o,a;for(o=0,a=i.length;o<a;++o)e.push(i[o].index);return e}function ja(r,t,e,i={}){let o=r.keys,a=i.mode==="single",H,V,s,M;if(t===null)return;let p=!1;for(H=0,V=o.length;H<V;++H){if(s=+o[H],s===e){if(p=!0,i.all)continue;break}M=r.values[s],V2(M)&&(a||t===0||P5(t)===P5(M))&&(t+=M)}return!p&&!i.all?0:t}function mp(r,t){let{iScale:e,vScale:i}=t,o=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",H=Object.keys(r),V=new Array(H.length),s,M,p;for(s=0,M=H.length;s<M;++s)p=H[s],V[s]={[o]:p,[a]:r[p]};return V}function Xe(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function hp(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function fp(r){let{min:t,max:e,minDefined:i,maxDefined:o}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:o?e:Number.POSITIVE_INFINITY}}function Ap(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function Ga(r,t,e,i){for(let o of t.getMatchingVisibleMetas(i).reverse()){let a=r[o.index];if(e&&a>0||!e&&a<0)return o.index}return null}function qa(r,t){let{chart:e,_cachedMeta:i}=r,o=e._stacks||(e._stacks={}),{iScale:a,vScale:H,index:V}=i,s=a.axis,M=H.axis,p=hp(a,H,i),h=t.length,v;for(let x=0;x<h;++x){let y=t[x],{[s]:k,[M]:O}=y,E=y._stacks||(y._stacks={});v=E[M]=Ap(o,p,k),v[V]=O,v._top=Ga(v,H,!0,i.type),v._bottom=Ga(v,H,!1,i.type);let $=v._visualValues||(v._visualValues={});$[V]=O}}function Je(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function vp(r,t){return V0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function xp(r,t,e){return V0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function M9(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let o of t){let a=o._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var tr=r=>r==="reset"||r==="none",Ya=(r,t)=>t?r:Object.assign({},r),gp=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:DH(e,!0),values:null},u3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Xe(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&M9(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(h,v,x,y)=>h==="x"?v:h==="r"?y:x,a=e.xAxisID=$1(i.xAxisID,Je(t,"x")),H=e.yAxisID=$1(i.yAxisID,Je(t,"y")),V=e.rAxisID=$1(i.rAxisID,Je(t,"r")),s=e.indexAxis,M=e.iAxisID=o(s,a,H,V),p=e.vAxisID=o(s,H,a,V);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(H),e.rScale=this.getScaleForId(V),e.iScale=this.getScaleForId(M),e.vScale=this.getScaleForId(p)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&V8(this._data,this),t._stacked&&M9(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(Z1(e)){let o=this._cachedMeta;this._data=mp(e,o)}else if(i!==e){if(i){V8(i,this);let o=this._cachedMeta;M9(o),o._parsed=[]}e&&Object.isExtensible(e)&&Oe(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),o=!1;this._dataCheck();let a=e._stacked;e._stacked=Xe(e.vScale,e),e.stack!==i.stack&&(o=!0,M9(e),e.stack=i.stack),this._resyncElements(t),(o||a!==e._stacked)&&(qa(this,e._parsed),e._stacked=Xe(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:H}=i,V=a.axis,s=t===0&&e===o.length?!0:i._sorted,M=t>0&&i._parsed[t-1],p,h,v;if(this._parsing===!1)i._parsed=o,i._sorted=!0,v=o;else{i2(o[t])?v=this.parseArrayData(i,o,t,e):Z1(o[t])?v=this.parseObjectData(i,o,t,e):v=this.parsePrimitiveData(i,o,t,e);let x=()=>h[V]===null||M&&h[V]<M[V];for(p=0;p<e;++p)i._parsed[p+t]=h=v[p],s&&(x()&&(s=!1),M=h);i._sorted=s}H&&qa(this,v)}parsePrimitiveData(t,e,i,o){let{iScale:a,vScale:H}=t,V=a.axis,s=H.axis,M=a.getLabels(),p=a===H,h=new Array(o),v,x,y;for(v=0,x=o;v<x;++v)y=v+i,h[v]={[V]:p||a.parse(M[y],y),[s]:H.parse(e[y],y)};return h}parseArrayData(t,e,i,o){let{xScale:a,yScale:H}=t,V=new Array(o),s,M,p,h;for(s=0,M=o;s<M;++s)p=s+i,h=e[p],V[s]={x:a.parse(h[0],p),y:H.parse(h[1],p)};return V}parseObjectData(t,e,i,o){let{xScale:a,yScale:H}=t,{xAxisKey:V="x",yAxisKey:s="y"}=this._parsing,M=new Array(o),p,h,v,x;for(p=0,h=o;p<h;++p)v=p+i,x=e[v],M[p]={x:a.parse(M3(x,V),v),y:H.parse(M3(x,s),v)};return M}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let o=this.chart,a=this._cachedMeta,H=e[t.axis],V={keys:DH(o,!0),values:e._stacks[t.axis]._visualValues};return ja(V,H,a.index,{mode:i})}updateRangeFromParsed(t,e,i,o){let a=i[e.axis],H=a===null?NaN:a,V=o&&i._stacks[e.axis];o&&V&&(o.values=V,H=ja(o,a,this._cachedMeta.index)),t.min=Math.min(t.min,H),t.max=Math.max(t.max,H)}getMinMax(t,e){let i=this._cachedMeta,o=i._parsed,a=i._sorted&&t===i.iScale,H=o.length,V=this._getOtherScale(t),s=gp(e,i,this.chart),M={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:p,max:h}=fp(V),v,x;function y(){x=o[v];let k=x[V.axis];return!V2(x[t.axis])||p>k||h<k}for(v=0;v<H&&!(!y()&&(this.updateRangeFromParsed(M,t,x,s),a));++v);if(a){for(v=H-1;v>=0;--v)if(!y()){this.updateRangeFromParsed(M,t,x,s);break}}return M}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],o,a,H;for(o=0,a=e.length;o<a;++o)H=e[o][t.axis],V2(H)&&i.push(H);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,o=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=up($1(this.options.clip,pp(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],a=e.chartArea,H=[],V=this._drawStart||0,s=this._drawCount||o.length-V,M=this.options.drawActiveElementsOnTop,p;for(i.dataset&&i.dataset.draw(t,a,V,s),p=V;p<V+s;++p){let h=o[p];h.hidden||(h.active&&M?H.push(h):h.draw(t,a))}for(p=0;p<H.length;++p)H[p].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let o=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let H=this._cachedMeta.data[t];a=H.$context||(H.$context=xp(this.getContext(),t,H)),a.parsed=this.getParsed(t),a.raw=o.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=vp(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let o=e==="active",a=this._cachedDataOpts,H=t+"-"+e,V=a[H],s=this.enableOptionSharing&&t7(i);if(V)return Ya(V,s);let M=this.chart.config,p=M.datasetElementScopeKeys(this._type,t),h=o?[`${t}Hover`,"hover",t,""]:[t,""],v=M.getOptionScopes(this.getDataset(),p),x=Object.keys(s2.elements[t]),y=()=>this.getContext(i,o,e),k=M.resolveNamedOptions(v,x,y,h);return k.$shared&&(k.$shared=s,a[H]=Object.freeze(Ya(k,s))),k}_resolveAnimations(t,e,i){let o=this.chart,a=this._cachedDataOpts,H=`animation-${e}`,V=a[H];if(V)return V;let s;if(o.options.animation!==!1){let p=this.chart.config,h=p.datasetAnimationScopeKeys(this._type,e),v=p.getOptionScopes(this.getDataset(),h);s=p.createResolver(v,this.getContext(t,i,e))}let M=new F8(o,s&&s.animations);return s&&s._cacheable&&(a[H]=Object.freeze(M)),M}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||tr(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),o=this._sharedOptions,a=this.getSharedOptions(i),H=this.includeOptions(e,a)||a!==o;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:H}}updateElement(t,e,i,o){tr(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!tr(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;let a=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[V,s,M]of this._syncList)this[V](s,M);this._syncList=[];let o=i.length,a=e.length,H=Math.min(a,o);H&&this.parse(0,H),a>o?this._insertElements(o,a-o,t):a<o&&this._removeElements(a,o-a)}_insertElements(t,e,i=!0){let o=this._cachedMeta,a=o.data,H=t+e,V,s=M=>{for(M.length+=e,V=M.length-1;V>=H;V--)M[V]=M[V-e]};for(s(a),V=t;V<H;++V)a[V]=new this.dataElementType;this._parsing&&s(o._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let o=i._parsed.splice(t,e);i._stacked&&M9(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};B(u3,"defaults",{}),B(u3,"datasetElementType",null),B(u3,"dataElementType",null);function _p(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let o=0,a=e.length;o<a;o++)i=i.concat(e[o].controller.getAllParsedValues(r));r._cache.$bar=s8(i.sort((o,a)=>o-a))}return r._cache.$bar}function Sp(r){let t=r.iScale,e=_p(t,r.type),i=t._length,o,a,H,V,s=()=>{H===32767||H===-32768||(t7(V)&&(i=Math.min(i,Math.abs(H-V)||i)),V=H)};for(o=0,a=e.length;o<a;++o)H=t.getPixelForValue(e[o]),s();for(V=void 0,o=0,a=t.ticks.length;o<a;++o)H=t.getPixelForTick(o),s();return i}function wp(r,t,e,i){let o=e.barThickness,a,H;return b1(o)?(a=t.min*e.categoryPercentage,H=e.barPercentage):(a=o*i,H=1),{chunk:a/i,ratio:H,start:t.pixels[r]-a/2}}function bp(r,t,e,i){let o=t.pixels,a=o[r],H=r>0?o[r-1]:null,V=r<o.length-1?o[r+1]:null,s=e.categoryPercentage;H===null&&(H=a-(V===null?t.end-t.start:V-a)),V===null&&(V=a+a-H);let M=a-(a-Math.min(H,V))/2*s;return{chunk:Math.abs(V-H)/2*s/i,ratio:e.barPercentage,start:M}}function yp(r,t,e,i){let o=e.parse(r[0],i),a=e.parse(r[1],i),H=Math.min(o,a),V=Math.max(o,a),s=H,M=V;Math.abs(H)>Math.abs(V)&&(s=V,M=H),t[e.axis]=M,t._custom={barStart:s,barEnd:M,start:o,end:a,min:H,max:V}}function BH(r,t,e,i){return i2(r)?yp(r,t,e,i):t[e.axis]=e.parse(r,i),t}function Qa(r,t,e,i){let o=r.iScale,a=r.vScale,H=o.getLabels(),V=o===a,s=[],M,p,h,v;for(M=e,p=e+i;M<p;++M)v=t[M],h={},h[o.axis]=V||o.parse(H[M],M),s.push(BH(v,h,a,M));return s}function er(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function Zp(r,t,e){return r!==0?P5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function kp(r){let t,e,i,o,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(o="end",a="start"):(o="start",a="end"),{start:e,end:i,reverse:t,top:o,bottom:a}}function Op(r,t,e,i){let o=t.borderSkipped,a={};if(!o){r.borderSkipped=a;return}if(o===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:H,end:V,reverse:s,top:M,bottom:p}=kp(r);o==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?o=M:(e._bottom||0)===i?o=p:(a[Ka(p,H,V,s)]=!0,o=M)),a[Ka(o,H,V,s)]=!0,r.borderSkipped=a}function Ka(r,t,e,i){return i?(r=Tp(r,t,e),r=Xa(r,e,t)):r=Xa(r,t,e),r}function Tp(r,t,e){return r===t?e:r===e?t:r}function Xa(r,t,e){return r==="start"?t:r==="end"?e:r}function Pp(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var E0=class extends u3{parsePrimitiveData(t,e,i,o){return Qa(t,e,i,o)}parseArrayData(t,e,i,o){return Qa(t,e,i,o)}parseObjectData(t,e,i,o){let{iScale:a,vScale:H}=t,{xAxisKey:V="x",yAxisKey:s="y"}=this._parsing,M=a.axis==="x"?V:s,p=H.axis==="x"?V:s,h=[],v,x,y,k;for(v=i,x=i+o;v<x;++v)k=e[v],y={},y[a.axis]=a.parse(M3(k,M),v),h.push(BH(M3(k,p),y,H,v));return h}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:o}=e,a=this.getParsed(t),H=a._custom,V=er(H)?"["+H.start+", "+H.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:V}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){let a=o==="reset",{index:H,_cachedMeta:{vScale:V}}=this,s=V.getBasePixel(),M=V.isHorizontal(),p=this._getRuler(),{sharedOptions:h,includeOptions:v}=this._getSharedOptions(e,o);for(let x=e;x<e+i;x++){let y=this.getParsed(x),k=a||b1(y[V.axis])?{base:s,head:s}:this._calculateBarValuePixels(x),O=this._calculateBarIndexPixels(x,p),E=(y._stacks||{})[V.axis],$={horizontal:M,base:k.base,enableBorderRadius:!E||er(y._custom)||H===E._top||H===E._bottom,x:M?k.head:O.center,y:M?O.center:k.head,height:M?O.size:Math.abs(k.size),width:M?Math.abs(k.size):O.size};v&&($.options=h||this.resolveDataElementOptions(x,t[x].active?"active":o));let R=$.options||t[x].options;Op($,R,E,H),Pp($,R,p.ratio),this.updateElement(t[x],x,$,o)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(p=>p.controller.options.grouped),a=i.options.stacked,H=[],V=this._cachedMeta.controller.getParsed(e),s=V&&V[i.axis],M=p=>{let h=p._parsed.find(x=>x[i.axis]===s),v=h&&h[p.vScale.axis];if(b1(v)||isNaN(v))return!0};for(let p of o)if(!(e!==void 0&&M(p))&&((a===!1||H.indexOf(p.stack)===-1||a===void 0&&p.stack===void 0)&&H.push(p.stack),p.index===t))break;return H.length||H.push(void 0),H}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[$1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let o=this._getStacks(t,i),a=e!==void 0?o.indexOf(e):-1;return a===-1?o.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,o=[],a,H;for(a=0,H=e.data.length;a<H;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let V=t.barThickness;return{min:V||Sp(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:V?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:o},options:{base:a,minBarLength:H}}=this,V=a||0,s=this.getParsed(t),M=s._custom,p=er(M),h=s[e.axis],v=0,x=i?this.applyStack(e,s,i):h,y,k;x!==h&&(v=x-h,x=h),p&&(h=M.barStart,x=M.barEnd-M.barStart,h!==0&&P5(h)!==P5(M.barEnd)&&(v=0),v+=h);let O=!b1(a)&&!p?a:v,E=e.getPixelForValue(O);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(v+x):y=E,k=y-E,Math.abs(k)<H){k=Zp(k,e,V)*H,h===V&&(E-=k/2);let $=e.getPixelForDecimal(0),R=e.getPixelForDecimal(1),K=Math.min($,R),G=Math.max($,R);E=Math.max(Math.min(E,G),K),y=E+k,i&&!p&&(s._stacks[e.axis]._visualValues[o]=e.getValueForPixel(y)-e.getValueForPixel(E))}if(E===e.getPixelForValue(V)){let $=P5(k)*e.getLineWidthForValue(V)/2;E+=$,k-=$}return{size:k,base:E,head:y,center:y+k/2}}_calculateBarIndexPixels(t,e){let i=e.scale,o=this.options,a=o.skipNull,H=$1(o.maxBarThickness,1/0),V,s,M=this._getAxisCount();if(e.grouped){let p=a?this._getStackCount(t):e.stackCount,h=o.barThickness==="flex"?bp(t,e,o,p*M):wp(t,e,o,p*M),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,x=this._getAxis().indexOf($1(v,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+x;V=h.start+h.chunk*y+h.chunk/2,s=Math.min(H,h.chunk*h.ratio)}else V=i.getPixelForValue(this.getParsed(t)[i.axis],t),s=Math.min(H,e.min*e.ratio);return{base:V-s/2,head:V+s/2,center:V,size:s}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length,a=0;for(;a<o;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};B(E0,"id","bar"),B(E0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),B(E0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var F0=class extends u3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=e,H=this.chart._animationsDisabled,{start:V,count:s}=Ee(e,o,H);this._drawStart=V,this._drawCount=s,Fe(e)&&(V=0,s=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;let M=this.resolveDatasetElementOptions(t);this.options.showLine||(M.borderWidth=0),M.segment=this.options.segment,this.updateElement(i,void 0,{animated:!H,options:M},t),this.updateElements(o,V,s,t)}updateElements(t,e,i,o){let a=o==="reset",{iScale:H,vScale:V,_stacked:s,_dataset:M}=this._cachedMeta,{sharedOptions:p,includeOptions:h}=this._getSharedOptions(e,o),v=H.axis,x=V.axis,{spanGaps:y,segment:k}=this.options,O=r7(y)?y:Number.POSITIVE_INFINITY,E=this.chart._animationsDisabled||a||o==="none",$=e+i,R=t.length,K=e>0&&this.getParsed(e-1);for(let G=0;G<R;++G){let c1=t[G],J=E?c1:{};if(G<e||G>=$){J.skip=!0;continue}let a1=this.getParsed(G),i1=b1(a1[x]),m1=J[v]=H.getPixelForValue(a1[v],G),N1=J[x]=a||i1?V.getBasePixel():V.getPixelForValue(s?this.applyStack(V,a1,s):a1[x],G);J.skip=isNaN(m1)||isNaN(N1)||i1,J.stop=G>0&&Math.abs(a1[v]-K[v])>O,k&&(J.parsed=a1,J.raw=M.data[G]),h&&(J.options=p||this.resolveDataElementOptions(G,c1.active?"active":o)),E||this.updateElement(c1,G,J,o),K=a1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;let a=o[0].size(this.resolveDataElementOptions(0)),H=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,H)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};B(F0,"id","line"),B(F0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),B(F0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function o7(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Lr=class r{constructor(t){B(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return o7()}parse(){return o7()}format(){return o7()}add(){return o7()}diff(){return o7()}startOf(){return o7()}endOf(){return o7()}},Ep={_date:Lr};function Fp(r,t,e,i){let{controller:o,data:a,_sorted:H}=r,V=o._cachedMeta.iScale,s=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(V&&t===V.axis&&t!=="r"&&H&&a.length){let M=V._reversePixels?Ze:k0;if(i){if(o._sharedOptions){let p=a[0],h=typeof p.getRange=="function"&&p.getRange(t);if(h){let v=M(a,t,e-h),x=M(a,t,e+h);return{lo:v.lo,hi:x.hi}}}}else{let p=M(a,t,e);if(s){let{vScale:h}=o._cachedMeta,{_parsed:v}=r,x=v.slice(0,p.lo+1).reverse().findIndex(k=>!b1(k[h.axis]));p.lo-=Math.max(0,x);let y=v.slice(p.hi).findIndex(k=>!b1(k[h.axis]));p.hi+=Math.max(0,y)}return p}}return{lo:0,hi:a.length-1}}function x9(r,t,e,i,o){let a=r.getSortedVisibleDatasetMetas(),H=e[t];for(let V=0,s=a.length;V<s;++V){let{index:M,data:p}=a[V],{lo:h,hi:v}=Fp(a[V],t,H,o);for(let x=h;x<=v;++x){let y=p[x];y.skip||i(y,M,x)}}}function $p(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,o){let a=t?Math.abs(i.x-o.x):0,H=e?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(H,2))}}function rr(r,t,e,i,o){let a=[];return!o&&!r.isPointInArea(t)||x9(r,e,t,function(V,s,M){!o&&!W5(V,r.chartArea,0)||V.inRange(t.x,t.y,i)&&a.push({element:V,datasetIndex:s,index:M})},!0),a}function Rp(r,t,e,i){let o=[];function a(H,V,s){let{startAngle:M,endAngle:p}=H.getProps(["startAngle","endAngle"],i),{angle:h}=n8(H,{x:t.x,y:t.y});e9(h,M,p)&&o.push({element:H,datasetIndex:V,index:s})}return x9(r,e,t,a),o}function Dp(r,t,e,i,o,a){let H=[],V=$p(e),s=Number.POSITIVE_INFINITY;function M(p,h,v){let x=p.inRange(t.x,t.y,o);if(i&&!x)return;let y=p.getCenterPoint(o);if(!(!!a||r.isPointInArea(y))&&!x)return;let O=V(t,y);O<s?(H=[{element:p,datasetIndex:h,index:v}],s=O):O===s&&H.push({element:p,datasetIndex:h,index:v})}return x9(r,e,t,M),H}function ir(r,t,e,i,o,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?Rp(r,t,e,o):Dp(r,t,e,i,o,a)}function Ja(r,t,e,i,o){let a=[],H=e==="x"?"inXRange":"inYRange",V=!1;return x9(r,e,t,(s,M,p)=>{s[H]&&s[H](t[e],o)&&(a.push({element:s,datasetIndex:M,index:p}),V=V||s.inRange(t.x,t.y,o))}),i&&!V?[]:a}var Bp={evaluateInteractionItems:x9,modes:{index(r,t,e,i){let o=j5(t,r),a=e.axis||"x",H=e.includeInvisible||!1,V=e.intersect?rr(r,o,a,i,H):ir(r,o,a,!1,i,H),s=[];return V.length?(r.getSortedVisibleDatasetMetas().forEach(M=>{let p=V[0].index,h=M.data[p];h&&!h.skip&&s.push({element:h,datasetIndex:M.index,index:p})}),s):[]},dataset(r,t,e,i){let o=j5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1,V=e.intersect?rr(r,o,a,i,H):ir(r,o,a,!1,i,H);if(V.length>0){let s=V[0].datasetIndex,M=r.getDatasetMeta(s).data;V=[];for(let p=0;p<M.length;++p)V.push({element:M[p],datasetIndex:s,index:p})}return V},point(r,t,e,i){let o=j5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1;return rr(r,o,a,i,H)},nearest(r,t,e,i){let o=j5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1;return ir(r,o,a,e.intersect,i,H)},x(r,t,e,i){let o=j5(t,r);return Ja(r,o,"x",e.intersect,i)},y(r,t,e,i){let o=j5(t,r);return Ja(r,o,"y",e.intersect,i)}}},zH=["left","top","right","bottom"];function c9(r,t){return r.filter(e=>e.pos===t)}function tH(r,t){return r.filter(e=>zH.indexOf(e.pos)===-1&&e.box.axis===t)}function d9(r,t){return r.sort((e,i)=>{let o=t?i:e,a=t?e:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function zp(r){let t=[],e,i,o,a,H,V;for(e=0,i=(r||[]).length;e<i;++e)o=r[e],{position:a,options:{stack:H,stackWeight:V=1}}=o,t.push({index:e,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:H&&a+H,stackWeight:V});return t}function Ip(r){let t={};for(let e of r){let{stack:i,pos:o,stackWeight:a}=e;if(!i||!zH.includes(o))continue;let H=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});H.count++,H.weight+=a}return t}function Np(r,t){let e=Ip(r),{vBoxMaxWidth:i,hBoxMaxHeight:o}=t,a,H,V;for(a=0,H=r.length;a<H;++a){V=r[a];let{fullSize:s}=V.box,M=e[V.stack],p=M&&V.stackWeight/M.weight;V.horizontal?(V.width=p?p*i:s&&t.availableWidth,V.height=o):(V.width=i,V.height=p?p*o:s&&t.availableHeight)}return e}function Wp(r){let t=zp(r),e=d9(t.filter(M=>M.box.fullSize),!0),i=d9(c9(t,"left"),!0),o=d9(c9(t,"right")),a=d9(c9(t,"top"),!0),H=d9(c9(t,"bottom")),V=tH(t,"x"),s=tH(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:o.concat(s).concat(H).concat(V),chartArea:c9(t,"chartArea"),vertical:i.concat(o).concat(s),horizontal:a.concat(H).concat(V)}}function eH(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function IH(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function Up(r,t,e,i){let{pos:o,box:a}=e,H=r.maxPadding;if(!Z1(o)){e.size&&(r[o]-=e.size);let h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?a.height:a.width),e.size=h.size/h.count,r[o]+=e.size}a.getPadding&&IH(H,a.getPadding());let V=Math.max(0,t.outerWidth-eH(H,r,"left","right")),s=Math.max(0,t.outerHeight-eH(H,r,"top","bottom")),M=V!==r.w,p=s!==r.h;return r.w=V,r.h=s,e.horizontal?{same:M,other:p}:{same:p,other:M}}function jp(r){let t=r.maxPadding;function e(i){let o=Math.max(t[i]-r[i],0);return r[i]+=o,o}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function Gp(r,t){let e=t.maxPadding;function i(o){let a={left:0,top:0,right:0,bottom:0};return o.forEach(H=>{a[H]=Math.max(t[H],e[H])}),a}return i(r?["left","right"]:["top","bottom"])}function m9(r,t,e,i){let o=[],a,H,V,s,M,p;for(a=0,H=r.length,M=0;a<H;++a){V=r[a],s=V.box,s.update(V.width||t.w,V.height||t.h,Gp(V.horizontal,t));let{same:h,other:v}=Up(t,e,V,i);M|=h&&o.length,p=p||v,s.fullSize||o.push(V)}return M&&m9(o,t,e,i)||p}function S8(r,t,e,i,o){r.top=e,r.left=t,r.right=t+i,r.bottom=e+o,r.width=i,r.height=o}function rH(r,t,e,i){let o=e.padding,{x:a,y:H}=t;for(let V of r){let s=V.box,M=i[V.stack]||{count:1,placed:0,weight:1},p=V.stackWeight/M.weight||1;if(V.horizontal){let h=t.w*p,v=M.size||s.height;t7(M.start)&&(H=M.start),s.fullSize?S8(s,o.left,H,e.outerWidth-o.right-o.left,v):S8(s,t.left+M.placed,H,h,v),M.start=H,M.placed+=h,H=s.bottom}else{let h=t.h*p,v=M.size||s.width;t7(M.start)&&(a=M.start),s.fullSize?S8(s,a,o.top,v,e.outerHeight-o.bottom-o.top):S8(s,a,t.top+M.placed,v,h),M.start=a,M.placed+=h,a=s.right}}t.x=a,t.y=H}var w8={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let o=N2(r.options.layout.padding),a=Math.max(t-o.width,0),H=Math.max(e-o.height,0),V=Wp(r.boxes),s=V.vertical,M=V.horizontal;I1(r.boxes,k=>{typeof k.beforeLayout=="function"&&k.beforeLayout()});let p=s.reduce((k,O)=>O.box.options&&O.box.options.display===!1?k:k+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:o,availableWidth:a,availableHeight:H,vBoxMaxWidth:a/2/p,hBoxMaxHeight:H/2}),v=Object.assign({},o);IH(v,N2(i));let x=Object.assign({maxPadding:v,w:a,h:H,x:o.left,y:o.top},o),y=Np(s.concat(M),h);m9(V.fullSize,x,h,y),m9(s,x,h,y),m9(M,x,h,y)&&m9(s,x,h,y),jp(x),rH(V.leftAndTop,x,h,y),x.x+=x.w,x.y+=x.h,rH(V.rightAndBottom,x,h,y),r.chartArea={left:x.left,top:x.top,right:x.left+x.w,bottom:x.top+x.h,height:x.h,width:x.w},I1(V.chartArea,k=>{let O=k.box;Object.assign(O,r.chartArea),O.update(x.w,x.h,{left:0,top:0,right:0,bottom:0})})}},$8=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}},lr=class extends $8{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},P8="$chartjs",qp={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},iH=r=>r===null||r==="";function Yp(r,t){let e=r.style,i=r.getAttribute("height"),o=r.getAttribute("width");if(r[P8]={initial:{height:i,width:o,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",iH(o)){let a=v8(r,"width");a!==void 0&&(r.width=a)}if(iH(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=v8(r,"height");a!==void 0&&(r.height=a)}return r}var NH=je?{passive:!0}:!1;function Qp(r,t,e){r&&r.addEventListener(t,e,NH)}function Kp(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,NH)}function Xp(r,t){let e=qp[r.type]||r.type,{x:i,y:o}=j5(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:o!==void 0?o:null}}function R8(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function Jp(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let H=!1;for(let V of a)H=H||R8(V.addedNodes,i),H=H&&!R8(V.removedNodes,i);H&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}function tu(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let H=!1;for(let V of a)H=H||R8(V.removedNodes,i),H=H&&!R8(V.addedNodes,i);H&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}var A9=new Map,oH=0;function WH(){let r=window.devicePixelRatio;r!==oH&&(oH=r,A9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function eu(r,t){A9.size||window.addEventListener("resize",WH),A9.set(r,t)}function ru(r){A9.delete(r),A9.size||window.removeEventListener("resize",WH)}function iu(r,t,e){let i=r.canvas,o=i&&L9(i);if(!o)return;let a=l8((V,s)=>{let M=o.clientWidth;e(V,s),M<o.clientWidth&&e()},window),H=new ResizeObserver(V=>{let s=V[0],M=s.contentRect.width,p=s.contentRect.height;M===0&&p===0||a(M,p)});return H.observe(o),eu(r,a),H}function or(r,t,e){e&&e.disconnect(),t==="resize"&&ru(r)}function ou(r,t,e){let i=r.canvas,o=l8(a=>{r.ctx!==null&&e(Xp(a,r))},r);return Qp(i,t,o),o}var Mr=class extends $8{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(Yp(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[P8])return!1;let i=e[P8].initial;["height","width"].forEach(a=>{let H=i[a];b1(H)?e.removeAttribute(a):e.setAttribute(a,H)});let o=i.style||{};return Object.keys(o).forEach(a=>{e.style[a]=o[a]}),e.width=e.width,delete e[P8],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let o=t.$proxies||(t.$proxies={}),H={attach:Jp,detach:tu,resize:iu}[e]||ou;o[e]=H(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),o=i[e];if(!o)return;({attach:or,detach:or,resize:or}[e]||Kp)(t,e,o),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return Ue(t,e,i,o)}isAttached(t){let e=t&&L9(t);return!!(e&&e.isConnected)}};function Cu(r){return!s9()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?lr:Mr}var Y5=class{constructor(){B(this,"x");B(this,"y");B(this,"active",!1);B(this,"options");B(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return r7(this.x)&&r7(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let o={};return t.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}};B(Y5,"defaults",{}),B(Y5,"defaultRoutes");function au(r,t){let e=r.options.ticks,i=Hu(r),o=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?Vu(t):[],H=a.length,V=a[0],s=a[H-1],M=[];if(H>o)return su(t,M,a,H/o),M;let p=nu(a,t,o);if(H>0){let h,v,x=H>1?Math.round((s-V)/(H-1)):null;for(b8(t,M,p,b1(x)?0:V-x,V),h=0,v=H-1;h<v;h++)b8(t,M,p,a[h],a[h+1]);return b8(t,M,p,s,b1(x)?t.length:s+x),M}return b8(t,M,p),M}function Hu(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),o=r._maxLength/e;return Math.floor(Math.min(i,o))}function nu(r,t,e){let i=Lu(r),o=t.length/e;if(!i)return Math.max(o,1);let a=we(i);for(let H=0,V=a.length-1;H<V;H++){let s=a[H];if(s>o)return s}return Math.max(o,1)}function Vu(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function su(r,t,e,i){let o=0,a=e[0],H;for(i=Math.ceil(i),H=0;H<r.length;H++)H===a&&(t.push(r[H]),o++,a=e[o*i])}function b8(r,t,e,i,o){let a=$1(i,0),H=Math.min($1(o,r.length),r.length),V=0,s,M,p;for(e=Math.ceil(e),o&&(s=o-i,e=s/Math.floor(s/e)),p=a;p<0;)V++,p=Math.round(a+V*e);for(M=Math.max(a,0);M<H;M++)M===p&&(t.push(r[M]),V++,p=Math.round(a+V*e))}function Lu(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var lu=r=>r==="left"?"right":r==="right"?"left":r,CH=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,aH=(r,t)=>Math.min(t||r,r);function HH(r,t){let e=[],i=r.length/t,o=r.length,a=0;for(;a<o;a+=i)e.push(r[Math.floor(a)]);return e}function Mu(r,t,e){let i=r.ticks.length,o=Math.min(t,i-1),a=r._startPixel,H=r._endPixel,V=1e-6,s=r.getPixelForTick(o),M;if(!(e&&(i===1?M=Math.max(s-a,H-s):t===0?M=(r.getPixelForTick(1)-s)/2:M=(s-r.getPixelForTick(o-1))/2,s+=o<t?M:-M,s<a-V||s>H+V)))return s}function cu(r,t){I1(r,e=>{let i=e.gc,o=i.length/2,a;if(o>t){for(a=0;a<o;++a)delete e.data[i[a]];i.splice(0,o)}})}function p9(r){return r.drawTicks?r.tickLength:0}function nH(r,t){if(!r.display)return 0;let e=R2(r.font,t),i=N2(r.padding);return(i2(r.text)?r.text.length:1)*e.lineHeight+i.height}function du(r,t){return V0(r,{scale:t,type:"scale"})}function pu(r,t,e){return V0(r,{tick:e,index:t,type:"tick"})}function uu(r,t,e){let i=Pe(r);return(e&&t!=="right"||!e&&t==="right")&&(i=lu(i)),i}function mu(r,t,e,i){let{top:o,left:a,bottom:H,right:V,chart:s}=r,{chartArea:M,scales:p}=s,h=0,v,x,y,k=H-o,O=V-a;if(r.isHorizontal()){if(x=M8(i,a,V),Z1(e)){let E=Object.keys(e)[0],$=e[E];y=p[E].getPixelForValue($)+k-t}else e==="center"?y=(M.bottom+M.top)/2+k-t:y=CH(r,e,t);v=V-a}else{if(Z1(e)){let E=Object.keys(e)[0],$=e[E];x=p[E].getPixelForValue($)-O+t}else e==="center"?x=(M.left+M.right)/2-O+t:x=CH(r,e,t);y=M8(i,H,o),h=e==="left"?-f2:f2}return{titleX:x,titleY:y,maxWidth:v,rotation:h}}var a7=class r extends Y5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=K2(t,Number.POSITIVE_INFINITY),e=K2(e,Number.NEGATIVE_INFINITY),i=K2(i,Number.POSITIVE_INFINITY),o=K2(o,Number.NEGATIVE_INFINITY),{min:K2(t,i),max:K2(e,o),minDefined:V2(t),maxDefined:V2(e)}}getMinMax(t){let{min:e,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),H;if(o&&a)return{min:e,max:i};let V=this.getMatchingVisibleMetas();for(let s=0,M=V.length;s<M;++s)H=V[s].controller.getMinMax(this,t),o||(e=Math.min(e,H.min)),a||(i=Math.max(i,H.max));return e=a&&e>i?i:e,i=o&&e>i?e:i,{min:K2(e,K2(i,e)),max:K2(i,K2(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){t2(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:o,grace:a,ticks:H}=this.options,V=H.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=ze(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=V<this.ticks.length;this._convertTicksToLabels(s?HH(this.ticks,V):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),H.display&&(H.autoSkip||H.source==="auto")&&(this.ticks=au(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){t2(this.options.afterUpdate,[this])}beforeSetDimensions(){t2(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){t2(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),t2(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){t2(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,o,a;for(i=0,o=t.length;i<o;i++)a=t[i],a.label=t2(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){t2(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){t2(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=aH(this.ticks.length,t.ticks.maxTicksLimit),o=e.minRotation||0,a=e.maxRotation,H=o,V,s,M;if(!this._isVisible()||!e.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}let p=this._getLabelSizes(),h=p.widest.width,v=p.highest.height,x=k2(this.chart.width-h,0,this.maxWidth);V=t.offset?this.maxWidth/i:x/(i-1),h+6>V&&(V=x/(i-(t.offset?.5:1)),s=this.maxHeight-p9(t.grid)-e.padding-nH(t.title,this.chart.options.font),M=Math.sqrt(h*h+v*v),H=t9(Math.min(Math.asin(k2((p.highest.height+6)/V,-1,1)),Math.asin(k2(s/M,-1,1))-Math.asin(k2(v/M,-1,1)))),H=Math.max(o,Math.min(a,H))),this.labelRotation=H}afterCalculateLabelRotation(){t2(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){t2(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:a}}=this,H=this._isVisible(),V=this.isHorizontal();if(H){let s=nH(o,e.options.font);if(V?(t.width=this.maxWidth,t.height=p9(a)+s):(t.height=this.maxHeight,t.width=p9(a)+s),i.display&&this.ticks.length){let{first:M,last:p,widest:h,highest:v}=this._getLabelSizes(),x=i.padding*2,y=n0(this.labelRotation),k=Math.cos(y),O=Math.sin(y);if(V){let E=i.mirror?0:O*h.width+k*v.height;t.height=Math.min(this.maxHeight,t.height+E+x)}else{let E=i.mirror?0:k*h.width+O*v.height;t.width=Math.min(this.maxWidth,t.width+E+x)}this._calculatePadding(M,p,O,k)}}this._handleMargins(),V?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){let{ticks:{align:a,padding:H},position:V}=this.options,s=this.labelRotation!==0,M=V!=="top"&&this.axis==="x";if(this.isHorizontal()){let p=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),v=0,x=0;s?M?(v=o*t.width,x=i*e.height):(v=i*t.height,x=o*e.width):a==="start"?x=e.width:a==="end"?v=t.width:a!=="inner"&&(v=t.width/2,x=e.width/2),this.paddingLeft=Math.max((v-p+H)*this.width/(this.width-p),0),this.paddingRight=Math.max((x-h+H)*this.width/(this.width-h),0)}else{let p=e.height/2,h=t.height/2;a==="start"?(p=0,h=t.height):a==="end"&&(p=e.height,h=0),this.paddingTop=p+H,this.paddingBottom=h+H}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){t2(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)b1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=HH(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:o,_longestTextCache:a}=this,H=[],V=[],s=Math.floor(e/aH(e,i)),M=0,p=0,h,v,x,y,k,O,E,$,R,K,G;for(h=0;h<e;h+=s){if(y=t[h].label,k=this._resolveTickFontOptions(h),o.font=O=k.string,E=a[O]=a[O]||{data:{},gc:[]},$=k.lineHeight,R=K=0,!b1(y)&&!i2(y))R=W7(o,E.data,E.gc,R,y),K=$;else if(i2(y))for(v=0,x=y.length;v<x;++v)G=y[v],!b1(G)&&!i2(G)&&(R=W7(o,E.data,E.gc,R,G),K+=$);H.push(R),V.push(K),M=Math.max(R,M),p=Math.max(K,p)}cu(a,e);let c1=H.indexOf(M),J=V.indexOf(p),a1=i1=>({width:H[i1]||0,height:V[i1]||0});return{first:a1(0),last:a1(e-1),widest:a1(c1),highest:a1(J),widths:H,heights:V}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return ye(this._alignToPixels?O0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=pu(this.getContext(),t,i))}return this.$context||(this.$context=du(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=n0(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),a=this._getLabelSizes(),H=t.autoSkipPadding||0,V=a?a.widest.width+H:0,s=a?a.highest.height+H:0;return this.isHorizontal()?s*i>V*o?V/i:s/o:s*o<V*i?s/i:V/o}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,o=this.options,{grid:a,position:H,border:V}=o,s=a.offset,M=this.isHorizontal(),h=this.ticks.length+(s?1:0),v=p9(a),x=[],y=V.setContext(this.getContext()),k=y.display?y.width:0,O=k/2,E=function(X){return O0(i,X,k)},$,R,K,G,c1,J,a1,i1,m1,N1,k1,L2;if(H==="top")$=E(this.bottom),J=this.bottom-v,i1=$-O,N1=E(t.top)+O,L2=t.bottom;else if(H==="bottom")$=E(this.top),N1=t.top,L2=E(t.bottom)-O,J=$+O,i1=this.top+v;else if(H==="left")$=E(this.right),c1=this.right-v,a1=$-O,m1=E(t.left)+O,k1=t.right;else if(H==="right")$=E(this.left),m1=t.left,k1=E(t.right)-O,c1=$+O,a1=this.left+v;else if(e==="x"){if(H==="center")$=E((t.top+t.bottom)/2+.5);else if(Z1(H)){let X=Object.keys(H)[0],q1=H[X];$=E(this.chart.scales[X].getPixelForValue(q1))}N1=t.top,L2=t.bottom,J=$+O,i1=J+v}else if(e==="y"){if(H==="center")$=E((t.left+t.right)/2);else if(Z1(H)){let X=Object.keys(H)[0],q1=H[X];$=E(this.chart.scales[X].getPixelForValue(q1))}c1=$-O,a1=c1-v,m1=t.left,k1=t.right}let G1=$1(o.ticks.maxTicksLimit,h),O1=Math.max(1,Math.ceil(h/G1));for(R=0;R<h;R+=O1){let X=this.getContext(R),q1=a.setContext(X),n1=V.setContext(X),U=q1.lineWidth,t1=q1.color,V1=n1.dash||[],h1=n1.dashOffset,s1=q1.tickWidth,L1=q1.tickColor,w1=q1.tickBorderDash||[],T1=q1.tickBorderDashOffset;K=Mu(this,R,s),K!==void 0&&(G=O0(i,K,U),M?c1=a1=m1=k1=G:J=i1=N1=L2=G,x.push({tx1:c1,ty1:J,tx2:a1,ty2:i1,x1:m1,y1:N1,x2:k1,y2:L2,width:U,color:t1,borderDash:V1,borderDashOffset:h1,tickWidth:s1,tickColor:L1,tickBorderDash:w1,tickBorderDashOffset:T1}))}return this._ticksLength=h,this._borderValue=$,x}_computeLabelItems(t){let e=this.axis,i=this.options,{position:o,ticks:a}=i,H=this.isHorizontal(),V=this.ticks,{align:s,crossAlign:M,padding:p,mirror:h}=a,v=p9(i.grid),x=v+p,y=h?-p:x,k=-n0(this.labelRotation),O=[],E,$,R,K,G,c1,J,a1,i1,m1,N1,k1,L2="middle";if(o==="top")c1=this.bottom-y,J=this._getXAxisLabelAlignment();else if(o==="bottom")c1=this.top+y,J=this._getXAxisLabelAlignment();else if(o==="left"){let O1=this._getYAxisLabelAlignment(v);J=O1.textAlign,G=O1.x}else if(o==="right"){let O1=this._getYAxisLabelAlignment(v);J=O1.textAlign,G=O1.x}else if(e==="x"){if(o==="center")c1=(t.top+t.bottom)/2+x;else if(Z1(o)){let O1=Object.keys(o)[0],X=o[O1];c1=this.chart.scales[O1].getPixelForValue(X)+x}J=this._getXAxisLabelAlignment()}else if(e==="y"){if(o==="center")G=(t.left+t.right)/2-x;else if(Z1(o)){let O1=Object.keys(o)[0],X=o[O1];G=this.chart.scales[O1].getPixelForValue(X)}J=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(s==="start"?L2="top":s==="end"&&(L2="bottom"));let G1=this._getLabelSizes();for(E=0,$=V.length;E<$;++E){R=V[E],K=R.label;let O1=a.setContext(this.getContext(E));a1=this.getPixelForTick(E)+a.labelOffset,i1=this._resolveTickFontOptions(E),m1=i1.lineHeight,N1=i2(K)?K.length:1;let X=N1/2,q1=O1.color,n1=O1.textStrokeColor,U=O1.textStrokeWidth,t1=J;H?(G=a1,J==="inner"&&(E===$-1?t1=this.options.reverse?"left":"right":E===0?t1=this.options.reverse?"right":"left":t1="center"),o==="top"?M==="near"||k!==0?k1=-N1*m1+m1/2:M==="center"?k1=-G1.highest.height/2-X*m1+m1:k1=-G1.highest.height+m1/2:M==="near"||k!==0?k1=m1/2:M==="center"?k1=G1.highest.height/2-X*m1:k1=G1.highest.height-N1*m1,h&&(k1*=-1),k!==0&&!O1.showLabelBackdrop&&(G+=m1/2*Math.sin(k))):(c1=a1,k1=(1-N1)*m1/2);let V1;if(O1.showLabelBackdrop){let h1=N2(O1.backdropPadding),s1=G1.heights[E],L1=G1.widths[E],w1=k1-h1.top,T1=0-h1.left;switch(L2){case"middle":w1-=s1/2;break;case"bottom":w1-=s1;break}switch(J){case"center":T1-=L1/2;break;case"right":T1-=L1;break;case"inner":E===$-1?T1-=L1:E>0&&(T1-=L1/2);break}V1={left:T1,top:w1,width:L1+h1.width,height:s1+h1.height,color:O1.backdropColor}}O.push({label:K,font:i1,textOffset:k1,options:{rotation:k,color:q1,strokeColor:n1,strokeWidth:U,textAlign:t1,textBaseline:L2,translation:[G,c1],backdrop:V1}})}return O}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-n0(this.labelRotation))return t==="top"?"left":"right";let o="center";return e.align==="start"?o="left":e.align==="end"?o="right":e.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,H=this._getLabelSizes(),V=t+a,s=H.widest.width,M,p;return e==="left"?o?(p=this.right+a,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p+=s)):(p=this.right-V,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p=this.left)):e==="right"?o?(p=this.left+a,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p-=s)):(p=this.left+V,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p=this.right)):M="right",{textAlign:M,x:p}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:o,width:a,height:H}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,a,H),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let o=this.ticks.findIndex(a=>a.value===t);return o>=0?e.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,H,V=(s,M,p)=>{!p.width||!p.color||(i.save(),i.lineWidth=p.width,i.strokeStyle=p.color,i.setLineDash(p.borderDash||[]),i.lineDashOffset=p.borderDashOffset,i.beginPath(),i.moveTo(s.x,s.y),i.lineTo(M.x,M.y),i.stroke(),i.restore())};if(e.display)for(a=0,H=o.length;a<H;++a){let s=o[a];e.drawOnChartArea&&V({x:s.x1,y:s.y1},{x:s.x2,y:s.y2},s),e.drawTicks&&V({x:s.tx1,y:s.ty1},{x:s.tx2,y:s.ty2},{color:s.tickColor,width:s.tickWidth,borderDash:s.tickBorderDash,borderDashOffset:s.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),H=i.display?a.width:0;if(!H)return;let V=o.setContext(this.getContext(0)).lineWidth,s=this._borderValue,M,p,h,v;this.isHorizontal()?(M=O0(t,this.left,H)-H/2,p=O0(t,this.right,V)+V/2,h=v=s):(h=O0(t,this.top,H)-H/2,v=O0(t,this.bottom,V)+V/2,M=p=s),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(M,h),e.lineTo(p,v),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,o=this._computeLabelArea();o&&a9(i,o);let a=this.getLabelItems(t);for(let H of a){let V=H.options,s=H.font,M=H.label,p=H.textOffset;G7(i,M,0,p,s,V)}o&&H9(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;let a=R2(i.font),H=N2(i.padding),V=i.align,s=a.lineHeight/2;e==="bottom"||e==="center"||Z1(e)?(s+=H.bottom,i2(i.text)&&(s+=a.lineHeight*(i.text.length-1))):s+=H.top;let{titleX:M,titleY:p,maxWidth:h,rotation:v}=mu(this,s,e,V);G7(t,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:v,textAlign:uu(V,e,o),textBaseline:"middle",translation:[M,p]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=$1(t.grid&&t.grid.z,-1),o=$1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[],a,H;for(a=0,H=e.length;a<H;++a){let V=e[a];V[i]===this.id&&(!t||V.type===t)&&o.push(V)}return o}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return R2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},K7=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;Au(e)&&(i=this.register(e));let o=this.items,a=t.id,H=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in o||(o[a]=t,hu(t,H,i),this.override&&s2.override(t.id,t.overrides)),H}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in s2[o]&&(delete s2[o][i],this.override&&delete c3[i])}};function hu(r,t,e){let i=d5(Object.create(null),[e?s2.get(e):{},s2.get(t),r.defaults]);s2.set(t,i),r.defaultRoutes&&fu(t,r.defaultRoutes),r.descriptors&&s2.describe(t,r.descriptors)}function fu(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),o=i.pop(),a=[r].concat(i).join("."),H=t[e].split("."),V=H.pop(),s=H.join(".");s2.route(a,o,s,V)})}function Au(r){return"id"in r&&"defaults"in r}var cr=class{constructor(){this.controllers=new K7(u3,"datasets",!0),this.elements=new K7(Y5,"elements"),this.plugins=new K7(Object,"plugins"),this.scales=new K7(a7,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(o=>{let a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(t,a,o):I1(o,H=>{let V=i||this._getRegistryForType(H);this._exec(t,V,H)})})}_exec(t,e,i){let o=J4(t);t2(i["before"+o],[],i),e[t](i),t2(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let o=e.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return o}},L0=new cr,dr=class{constructor(){this._init=void 0}notify(t,e,i,o){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=o?this._descriptors(t).filter(o):this._descriptors(t),H=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),H}_notify(t,e,i,o){o=o||{};for(let a of t){let H=a.plugin,V=H[i],s=[e,o,a.options];if(t2(V,s,H)===!1&&o.cancelable)return!1}return!0}invalidate(){b1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,o=$1(i.options&&i.options.plugins,{}),a=vu(i);return o===!1&&!e?[]:gu(t,a,o,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,o=(a,H)=>a.filter(V=>!H.some(s=>V.plugin.id===s.plugin.id));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}};function vu(r){let t={},e=[],i=Object.keys(L0.plugins.items);for(let a=0;a<i.length;a++)e.push(L0.getPlugin(i[a]));let o=r.plugins||[];for(let a=0;a<o.length;a++){let H=o[a];e.indexOf(H)===-1&&(e.push(H),t[H.id]=!0)}return{plugins:e,localIds:t}}function xu(r,t){return!t&&r===!1?null:r===!0?{}:r}function gu(r,{plugins:t,localIds:e},i,o){let a=[],H=r.getContext();for(let V of t){let s=V.id,M=xu(i[s],o);M!==null&&a.push({plugin:V,options:_u(r.config,{plugin:V,local:e[s]},M,H)})}return a}function _u(r,{plugin:t,local:e},i,o){let a=r.pluginScopeKeys(t),H=r.getOptionScopes(i,a);return e&&t.defaults&&H.push(t.defaults),r.createResolver(H,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function pr(r,t){let e=s2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Su(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function wu(r,t){return r===t?"_index_":"_value_"}function VH(r){if(r==="x"||r==="y"||r==="r")return r}function bu(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function ur(r,...t){if(VH(r))return r;for(let e of t){let i=e.axis||bu(e.position)||r.length>1&&VH(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function sH(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function yu(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return sH(r,"x",e[0])||sH(r,"y",e[0])}return{}}function Zu(r,t){let e=c3[r.type]||{scales:{}},i=t.scales||{},o=pr(r.type,t),a=Object.create(null);return Object.keys(i).forEach(H=>{let V=i[H];if(!Z1(V))return console.error(`Invalid scale configuration for scale: ${H}`);if(V._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${H}`);let s=ur(H,V,yu(H,r),s2.scales[V.type]),M=wu(s,o),p=e.scales||{};a[H]=J3(Object.create(null),[{axis:s},V,p[s],p[M]])}),r.data.datasets.forEach(H=>{let V=H.type||r.type,s=H.indexAxis||pr(V,t),p=(c3[V]||{}).scales||{};Object.keys(p).forEach(h=>{let v=Su(h,s),x=H[v+"AxisID"]||v;a[x]=a[x]||Object.create(null),J3(a[x],[{axis:v},i[x],p[h]])})}),Object.keys(a).forEach(H=>{let V=a[H];J3(V,[s2.scales[V.type],s2.scale])}),a}function UH(r){let t=r.options||(r.options={});t.plugins=$1(t.plugins,{}),t.scales=Zu(r,t)}function jH(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function ku(r){return r=r||{},r.data=jH(r.data),UH(r),r}var LH=new Map,GH=new Set;function y8(r,t){let e=LH.get(r);return e||(e=t(),LH.set(r,e),GH.add(e)),e}var u9=(r,t,e)=>{let i=M3(t,e);i!==void 0&&r.add(i)},mr=class{constructor(t){this._config=ku(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=jH(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),UH(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return y8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return y8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return y8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return y8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,o=i.get(t);return(!o||e)&&(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){let{options:o,type:a}=this,H=this._cachedScopes(t,i),V=H.get(e);if(V)return V;let s=new Set;e.forEach(p=>{t&&(s.add(t),p.forEach(h=>u9(s,t,h))),p.forEach(h=>u9(s,o,h)),p.forEach(h=>u9(s,c3[a]||{},h)),p.forEach(h=>u9(s,s2,h)),p.forEach(h=>u9(s,p8,h))});let M=Array.from(s);return M.length===0&&M.push(Object.create(null)),GH.has(e)&&H.set(e,M),M}chartOptionScopes(){let{options:t,type:e}=this;return[t,c3[e]||{},s2.datasets[e]||{},{type:e},s2,p8]}resolveNamedOptions(t,e,i,o=[""]){let a={$shared:!0},{resolver:H,subPrefixes:V}=lH(this._resolverCache,t,o),s=H;if(Tu(H,e)){a.$shared=!1,i=a0(i)?i():i;let M=this.createResolver(t,i,V);s=l3(H,i,M)}for(let M of e)a[M]=s[M];return a}createResolver(t,e,i=[""],o){let{resolver:a}=lH(this._resolverCache,t,i);return Z1(e)?l3(a,e,void 0,o):a}};function lH(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let o=e.join(),a=i.get(o);return a||(a={resolver:V9(t,e),subPrefixes:e.filter(V=>!V.toLowerCase().includes("hover"))},i.set(o,a)),a}var Ou=r=>Z1(r)&&Object.getOwnPropertyNames(r).some(t=>a0(r[t]));function Tu(r,t){let{isScriptable:e,isIndexable:i}=h8(r);for(let o of t){let a=e(o),H=i(o),V=(H||a)&&r[o];if(a&&(a0(V)||Ou(V))||H&&i2(V))return!0}return!1}var Pu="4.5.1",Eu=["top","bottom","left","right","chartArea"];function MH(r,t){return r==="top"||r==="bottom"||Eu.indexOf(r)===-1&&t==="x"}function cH(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function dH(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),t2(e&&e.onComplete,[r],t)}function Fu(r){let t=r.chart,e=t.options.animation;t2(e&&e.onProgress,[r],t)}function qH(r){return s9()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var E8={},pH=r=>{let t=qH(r);return Object.values(E8).filter(e=>e.canvas===t).pop()};function $u(r,t,e){let i=Object.keys(r);for(let o of i){let a=+o;if(a>=t){let H=r[o];delete r[o],(e>0||a>t)&&(r[a+e]=H)}}}function Ru(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var O2=class{static register(...t){L0.add(...t),uH()}static unregister(...t){L0.remove(...t),uH()}constructor(t,e){let i=this.config=new mr(e),o=qH(t),a=pH(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let H=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Cu(o)),this.platform.updateConfig(i);let V=this.platform.acquireContext(o,H.aspectRatio),s=V&&V.canvas,M=s&&s.height,p=s&&s.width;if(this.id=ge(),this.ctx=V,this.canvas=s,this.width=p,this.height=M,this._options=H,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new dr,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Te(h=>this.update(h),H.resizeDelay||0),this._dataChanges=[],E8[this.id]=this,!V||!s){console.error("Failed to create chart: can't acquire context from the given item");return}T0.listen(this,"complete",dH),T0.listen(this,"progress",Fu),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:a}=this;return b1(t)?e&&a?a:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return L0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():A8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return u8(this.canvas,this.ctx),this}stop(){return T0.stop(this),this}resize(t,e){T0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,H=this.platform.getMaximumSize(o,t,e,a),V=i.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=H.width,this.height=H.height,this._aspectRatio=this.aspectRatio,A8(this,V,!0)&&(this.notifyPlugins("resize",{size:H}),t2(i.onResize,[this,H],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};I1(e,(i,o)=>{i.id=o})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce((H,V)=>(H[V]=!1,H),{}),a=[];e&&(a=a.concat(Object.keys(e).map(H=>{let V=e[H],s=ur(H,V),M=s==="r",p=s==="x";return{options:V,dposition:M?"chartArea":p?"bottom":"left",dtype:M?"radialLinear":p?"category":"linear"}}))),I1(a,H=>{let V=H.options,s=V.id,M=ur(s,V),p=$1(V.type,H.dtype);(V.position===void 0||MH(V.position,M)!==MH(H.dposition))&&(V.position=H.dposition),o[s]=!0;let h=null;if(s in i&&i[s].type===p)h=i[s];else{let v=L0.getScale(p);h=new v({id:s,type:p,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(V,t)}),I1(o,(H,V)=>{H||delete i[V]}),I1(i,H=>{w8.configure(this,H,H.options),w8.addBox(this,H)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((o,a)=>o.index-a.index),i>e){for(let o=e;o<i;++o)this._destroyDatasetMeta(o);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(cH("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,o)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){let a=e[i],H=this.getDatasetMeta(i),V=a.type||this.config.type;if(H.type&&H.type!==V&&(this._destroyDatasetMeta(i),H=this.getDatasetMeta(i)),H.type=V,H.indexAxis=a.indexAxis||pr(V,this.options),H.order=a.order||0,H.index=i,H.label=""+a.label,H.visible=this.isDatasetVisible(i),H.controller)H.controller.updateIndex(i),H.controller.linkScales();else{let s=L0.getController(V),{datasetElementType:M,dataElementType:p}=s2.datasets[V];Object.assign(s,{dataElementType:L0.getElement(p),datasetElementType:M&&L0.getElement(M)}),H.controller=new s(this,i),t.push(H.controller)}}return this._updateMetasets(),t}_resetElements(){I1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let H=0;for(let M=0,p=this.data.datasets.length;M<p;M++){let{controller:h}=this.getDatasetMeta(M),v=!o&&a.indexOf(h)===-1;h.buildOrUpdateElements(v),H=Math.max(+h.getMaxOverflow(),H)}H=this._minPadding=i.layout.autoPadding?H:0,this._updateLayout(H),o||I1(a,M=>{M.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(cH("z","_idx"));let{_active:V,_lastEvent:s}=this;s?this._eventHandler(s,!0):V.length&&this._updateHoverStyles(V,V,!0),this.render()}_updateScales(){I1(this.scales,t=>{w8.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!o8(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:o,count:a}of e){let H=i==="_removeElements"?-a:a;$u(t,o,H)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(H=>H[0]===a).map((H,V)=>V+","+H.splice(1).join(","))),o=i(0);for(let a=1;a<e;a++)if(!o8(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;w8.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],I1(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,a0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(T0.has(this)?this.attached&&!T0.running(this)&&T0.start(this):(this.draw(),dH({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],o,a;for(o=0,a=e.length;o<a;++o){let H=e[o];(!t||H.visible)&&i.push(H)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},o=_8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&a9(e,o),t.controller.draw(),o&&H9(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return W5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,o){let a=Bp.modes[e];return typeof a=="function"?a(this,t,i,o):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,o=i.filter(a=>a&&a._dataset===e).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=V0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let o=i?"show":"hide",a=this.getDatasetMeta(t),H=a.controller._resolveAnimations(void 0,o);t7(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),H.update(a,{visible:i}),this.update(V=>V.datasetIndex===t?o:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),T0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),u8(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete E8[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,H)=>{e.addEventListener(this,a,H),t[a]=H},o=(a,H,V)=>{a.offsetX=H,a.offsetY=V,this._eventHandler(a)};I1(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(s,M)=>{e.addEventListener(this,s,M),t[s]=M},o=(s,M)=>{t[s]&&(e.removeEventListener(this,s,M),delete t[s])},a=(s,M)=>{this.canvas&&this.resize(s,M)},H,V=()=>{o("attach",V),this.attached=!0,this.resize(),i("resize",a),i("detach",H)};H=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",V)},e.isAttached(this.canvas)?V():H()}unbindEvents(){I1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},I1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let o=i?"set":"remove",a,H,V,s;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),V=0,s=t.length;V<s;++V){H=t[V];let M=H&&this.getDatasetMeta(H.datasetIndex).controller;M&&M[o+"HoverStyle"](H.element,H.datasetIndex,H.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:H})=>{let V=this.getDatasetMeta(a);if(!V)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:V.data[H],index:H}});!j7(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let o=this.options.hover,a=(s,M)=>s.filter(p=>!M.some(h=>p.datasetIndex===h.datasetIndex&&p.index===h.index)),H=a(e,t),V=i?t:a(t,e);H.length&&this.updateHoverStyle(H,o.mode,!1),V.length&&o.mode&&this.updateHoverStyle(V,o.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},o=H=>(H.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:o=[],options:a}=this,H=e,V=this._getActiveElements(t,o,i,H),s=Se(t),M=Ru(t,this._lastEvent,i,s);i&&(this._lastEvent=null,t2(a.onHover,[t,V,this],this),s&&t2(a.onClick,[t,V,this],this));let p=!j7(V,o);return(p||e)&&(this._active=V,this._updateHoverStyles(V,o,e)),this._lastEvent=M,p}_getActiveElements(t,e,i,o){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,o)}};B(O2,"defaults",s2),B(O2,"instances",E8),B(O2,"overrides",c3),B(O2,"registry",L0),B(O2,"version",Pu),B(O2,"getChart",pH);function uH(){return I1(O2.instances,r=>r._plugins.invalidate())}function Du(r,t,e){let{startAngle:i,x:o,y:a,outerRadius:H,innerRadius:V,options:s}=t,{borderWidth:M,borderJoinStyle:p}=s,h=Math.min(M/H,Z2(i-e));if(r.beginPath(),r.arc(o,a,H-M/2,i+h/2,e-h/2),V>0){let v=Math.min(M/V,Z2(i-e));r.arc(o,a,V+M/2,e-v/2,i+v/2,!0)}else{let v=Math.min(M/2,H*Z2(i-e));if(p==="round")r.arc(o,a,v,e-Y1/2,i+Y1/2,!0);else if(p==="bevel"){let x=2*v*v,y=-x*Math.cos(e+Y1/2)+o,k=-x*Math.sin(e+Y1/2)+a,O=x*Math.cos(i+Y1/2)+o,E=x*Math.sin(i+Y1/2)+a;r.lineTo(y,k),r.lineTo(O,E)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function Bu(r,t,e){let{startAngle:i,pixelMargin:o,x:a,y:H,outerRadius:V,innerRadius:s}=t,M=o/V;r.beginPath(),r.arc(a,H,V,i-M,e+M),s>o?(M=o/s,r.arc(a,H,s,e+M,i-M,!0)):r.arc(a,H,o,e+f2,i-f2),r.closePath(),r.clip()}function zu(r){return n9(r,["outerStart","outerEnd","innerStart","innerEnd"])}function Iu(r,t,e,i){let o=zu(r.options.borderRadius),a=(e-t)/2,H=Math.min(a,i*t/2),V=s=>{let M=(e-Math.min(a,s))*i/2;return k2(s,0,Math.min(a,M))};return{outerStart:V(o.outerStart),outerEnd:V(o.outerEnd),innerStart:k2(o.innerStart,0,H),innerEnd:k2(o.innerEnd,0,H)}}function Y7(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function D8(r,t,e,i,o,a){let{x:H,y:V,startAngle:s,pixelMargin:M,innerRadius:p}=t,h=Math.max(t.outerRadius+i+e-M,0),v=p>0?p+i+e+M:0,x=0,y=o-s;if(i){let O1=p>0?p-i:0,X=h>0?h-i:0,q1=(O1+X)/2,n1=q1!==0?y*q1/(q1+i):y;x=(y-n1)/2}let k=Math.max(.001,y*h-e/Y1)/h,O=(y-k)/2,E=s+O+x,$=o-O-x,{outerStart:R,outerEnd:K,innerStart:G,innerEnd:c1}=Iu(t,v,h,$-E),J=h-R,a1=h-K,i1=E+R/J,m1=$-K/a1,N1=v+G,k1=v+c1,L2=E+G/N1,G1=$-c1/k1;if(r.beginPath(),a){let O1=(i1+m1)/2;if(r.arc(H,V,h,i1,O1),r.arc(H,V,h,O1,m1),K>0){let U=Y7(a1,m1,H,V);r.arc(U.x,U.y,K,m1,$+f2)}let X=Y7(k1,$,H,V);if(r.lineTo(X.x,X.y),c1>0){let U=Y7(k1,G1,H,V);r.arc(U.x,U.y,c1,$+f2,G1+Math.PI)}let q1=($-c1/v+(E+G/v))/2;if(r.arc(H,V,v,$-c1/v,q1,!0),r.arc(H,V,v,q1,E+G/v,!0),G>0){let U=Y7(N1,L2,H,V);r.arc(U.x,U.y,G,L2+Math.PI,E-f2)}let n1=Y7(J,E,H,V);if(r.lineTo(n1.x,n1.y),R>0){let U=Y7(J,i1,H,V);r.arc(U.x,U.y,R,E-f2,i1)}}else{r.moveTo(H,V);let O1=Math.cos(i1)*h+H,X=Math.sin(i1)*h+V;r.lineTo(O1,X);let q1=Math.cos(m1)*h+H,n1=Math.sin(m1)*h+V;r.lineTo(q1,n1)}r.closePath()}function Nu(r,t,e,i,o){let{fullCircles:a,startAngle:H,circumference:V}=t,s=t.endAngle;if(a){D8(r,t,e,i,s,o);for(let M=0;M<a;++M)r.fill();isNaN(V)||(s=H+(V%p2||p2))}return D8(r,t,e,i,s,o),r.fill(),s}function Wu(r,t,e,i,o){let{fullCircles:a,startAngle:H,circumference:V,options:s}=t,{borderWidth:M,borderJoinStyle:p,borderDash:h,borderDashOffset:v,borderRadius:x}=s,y=s.borderAlign==="inner";if(!M)return;r.setLineDash(h||[]),r.lineDashOffset=v,y?(r.lineWidth=M*2,r.lineJoin=p||"round"):(r.lineWidth=M,r.lineJoin=p||"bevel");let k=t.endAngle;if(a){D8(r,t,e,i,k,o);for(let O=0;O<a;++O)r.stroke();isNaN(V)||(k=H+(V%p2||p2))}y&&Bu(r,t,k),s.selfJoin&&k-H>=Y1&&x===0&&p!=="miter"&&Du(r,t,k),a||(D8(r,t,e,i,k,o),r.stroke())}var p3=class extends Y5{constructor(e){super();B(this,"circumference");B(this,"endAngle");B(this,"fullCircles");B(this,"innerRadius");B(this,"outerRadius");B(this,"pixelMargin");B(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.getProps(["x","y"],o),{angle:H,distance:V}=n8(a,{x:e,y:i}),{startAngle:s,endAngle:M,innerRadius:p,outerRadius:h,circumference:v}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),x=(this.options.spacing+this.options.borderWidth)/2,y=$1(v,M-s),k=e9(H,s,M)&&s!==M,O=y>=p2||k,E=i7(V,p+x,h+x);return O&&E}getCenterPoint(e){let{x:i,y:o,startAngle:a,endAngle:H,innerRadius:V,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:M,spacing:p}=this.options,h=(a+H)/2,v=(V+s+p+M)/2;return{x:i+Math.cos(h)*v,y:o+Math.sin(h)*v}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:o}=this,a=(i.offset||0)/4,H=(i.spacing||0)/2,V=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>p2?Math.floor(o/p2):0,o===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let s=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(s)*a,Math.sin(s)*a);let M=1-Math.sin(Math.min(Y1,o||0)),p=a*M;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,Nu(e,this,p,H,V),Wu(e,this,p,H,V),e.restore()}};B(p3,"id","arc"),B(p3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),B(p3,"defaultRoutes",{backgroundColor:"backgroundColor"}),B(p3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function YH(r,t,e=t){r.lineCap=$1(e.borderCapStyle,t.borderCapStyle),r.setLineDash($1(e.borderDash,t.borderDash)),r.lineDashOffset=$1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=$1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=$1(e.borderWidth,t.borderWidth),r.strokeStyle=$1(e.borderColor,t.borderColor)}function Uu(r,t,e){r.lineTo(e.x,e.y)}function ju(r){return r.stepped?De:r.tension||r.cubicInterpolationMode==="monotone"?Be:Uu}function QH(r,t,e={}){let i=r.length,{start:o=0,end:a=i-1}=e,{start:H,end:V}=t,s=Math.max(o,H),M=Math.min(a,V),p=o<H&&a<H||o>V&&a>V;return{count:i,start:s,loop:t.loop,ilen:M<s&&!p?i+M-s:M-s}}function Gu(r,t,e,i){let{points:o,options:a}=t,{count:H,start:V,loop:s,ilen:M}=QH(o,e,i),p=ju(a),{move:h=!0,reverse:v}=i||{},x,y,k;for(x=0;x<=M;++x)y=o[(V+(v?M-x:x))%H],!y.skip&&(h?(r.moveTo(y.x,y.y),h=!1):p(r,k,y,v,a.stepped),k=y);return s&&(y=o[(V+(v?M:0))%H],p(r,k,y,v,a.stepped)),!!s}function qu(r,t,e,i){let o=t.points,{count:a,start:H,ilen:V}=QH(o,e,i),{move:s=!0,reverse:M}=i||{},p=0,h=0,v,x,y,k,O,E,$=K=>(H+(M?V-K:K))%a,R=()=>{k!==O&&(r.lineTo(p,O),r.lineTo(p,k),r.lineTo(p,E))};for(s&&(x=o[$(0)],r.moveTo(x.x,x.y)),v=0;v<=V;++v){if(x=o[$(v)],x.skip)continue;let K=x.x,G=x.y,c1=K|0;c1===y?(G<k?k=G:G>O&&(O=G),p=(h*p+K)/++h):(R(),r.lineTo(K,G),y=c1,h=0,k=O=G),E=G}R()}function hr(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?qu:Gu}function Yu(r){return r.stepped?Ge:r.tension||r.cubicInterpolationMode==="monotone"?qe:Z0}function Qu(r,t,e,i){let o=t._path;o||(o=t._path=new Path2D,t.path(o,e,i)&&o.closePath()),YH(r,t.options),r.stroke(o)}function Ku(r,t,e,i){let{segments:o,options:a}=t,H=hr(t);for(let V of o)YH(r,a,V.style),r.beginPath(),H(r,t,V,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var Xu=typeof Path2D=="function";function Ju(r,t,e,i){Xu&&!t.options.segment?Qu(r,t,e,i):Ku(r,t,e,i)}var p5=class extends Y5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let o=i.spanGaps?this._loop:this._fullLoop;We(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Ke(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,o=t[e],a=this.points,H=g8(this,{property:e,start:o,end:o});if(!H.length)return;let V=[],s=Yu(i),M,p;for(M=0,p=H.length;M<p;++M){let{start:h,end:v}=H[M],x=a[h],y=a[v];if(x===y){V.push(x);continue}let k=Math.abs((o-x[e])/(y[e]-x[e])),O=s(x,y,k,i.stepped);O[e]=t[e],V.push(O)}return V.length===1?V[0]:V}pathSegment(t,e,i){return hr(this)(t,this,e,i)}path(t,e,i){let o=this.segments,a=hr(this),H=this._loop;e=e||0,i=i||this.points.length-e;for(let V of o)H&=a(t,this,V,{start:e,end:e+i-1});return!!H}draw(t,e,i,o){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Ju(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};B(p5,"id","line"),B(p5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),B(p5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),B(p5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function mH(r,t,e,i){let o=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<o.radius+o.hitRadius}var G5=class extends Y5{constructor(e){super();B(this,"parsed");B(this,"skip");B(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.options,{x:H,y:V}=this.getProps(["x","y"],o);return Math.pow(e-H,2)+Math.pow(i-V,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return mH(this,e,"x",i)}inYRange(e,i){return mH(this,e,"y",i)}getCenterPoint(e){let{x:i,y:o}=this.getProps(["x","y"],e);return{x:i,y:o}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let o=i&&e.borderWidth||0;return(i+o)*2}draw(e,i){let o=this.options;this.skip||o.radius<.1||!W5(this,i,this.size(o)/2)||(e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.fillStyle=o.backgroundColor,C9(e,o,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};B(G5,"id","point"),B(G5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),B(G5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function KH(r,t){let{x:e,y:i,base:o,width:a,height:H}=r.getProps(["x","y","base","width","height"],t),V,s,M,p,h;return r.horizontal?(h=H/2,V=Math.min(e,o),s=Math.max(e,o),M=i-h,p=i+h):(h=a/2,V=e-h,s=e+h,M=Math.min(i,o),p=Math.max(i,o)),{left:V,top:M,right:s,bottom:p}}function m3(r,t,e,i){return r?0:k2(t,e,i)}function tm(r,t,e){let i=r.options.borderWidth,o=r.borderSkipped,a=m8(i);return{t:m3(o.top,a.top,0,e),r:m3(o.right,a.right,0,t),b:m3(o.bottom,a.bottom,0,e),l:m3(o.left,a.left,0,t)}}function em(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),o=r.options.borderRadius,a=d3(o),H=Math.min(t,e),V=r.borderSkipped,s=i||Z1(o);return{topLeft:m3(!s||V.top||V.left,a.topLeft,0,H),topRight:m3(!s||V.top||V.right,a.topRight,0,H),bottomLeft:m3(!s||V.bottom||V.left,a.bottomLeft,0,H),bottomRight:m3(!s||V.bottom||V.right,a.bottomRight,0,H)}}function rm(r){let t=KH(r),e=t.right-t.left,i=t.bottom-t.top,o=tm(r,e/2,i/2),a=em(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+o.l,y:t.top+o.t,w:e-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function Cr(r,t,e,i){let o=t===null,a=e===null,V=r&&!(o&&a)&&KH(r,i);return V&&(o||i7(t,V.left,V.right))&&(a||i7(e,V.top,V.bottom))}function im(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function om(r,t){r.rect(t.x,t.y,t.w,t.h)}function ar(r,t,e={}){let i=r.x!==e.x?-t:0,o=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,H=(r.y+r.h!==e.y+e.h?t:0)-o;return{x:r.x+i,y:r.y+o,w:r.w+a,h:r.h+H,radius:r.radius}}var q5=class extends Y5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:H}=rm(this),V=im(H.radius)?q7:om;t.save(),(H.w!==a.w||H.h!==a.h)&&(t.beginPath(),V(t,ar(H,e,a)),t.clip(),V(t,ar(a,-e,H)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),V(t,ar(a,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Cr(this,t,e,i)}inXRange(t,e){return Cr(this,t,null,e)}inYRange(t,e){return Cr(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+o)/2:e,y:a?i:(i+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};B(q5,"id","bar"),B(q5,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),B(q5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Cm(r,t,e){let i=r.segments,o=r.points,a=t.points,H=[];for(let V of i){let{start:s,end:M}=V;M=z8(s,M,o);let p=fr(e,o[s],o[M],V.loop);if(!t.segments){H.push({source:V,target:p,start:o[s],end:o[M]});continue}let h=g8(t,p);for(let v of h){let x=fr(e,a[v.start],a[v.end],v.loop),y=x8(V,o,x);for(let k of y)H.push({source:k,target:v,start:{[e]:hH(p,x,"start",Math.max)},end:{[e]:hH(p,x,"end",Math.min)}})}}return H}function fr(r,t,e,i){if(i)return;let o=t[r],a=e[r];return r==="angle"&&(o=Z2(o),a=Z2(a)),{property:r,start:o,end:a}}function am(r,t){let{x:e=null,y:i=null}=r||{},o=t.points,a=[];return t.segments.forEach(({start:H,end:V})=>{V=z8(H,V,o);let s=o[H],M=o[V];i!==null?(a.push({x:s.x,y:i}),a.push({x:M.x,y:i})):e!==null&&(a.push({x:e,y:s.y}),a.push({x:e,y:M.y}))}),a}function z8(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function hH(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function XH(r,t){let e=[],i=!1;return i2(r)?(i=!0,e=r):e=am(r,t),e.length?new p5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function fH(r){return r&&r.fill!==!1}function Hm(r,t,e){let o=r[t].fill,a=[t],H;if(!e)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!V2(o))return o;if(H=r[o],!H)return!1;if(H.visible)return o;a.push(o),o=H.fill}return!1}function nm(r,t,e){let i=lm(r);if(Z1(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return V2(o)&&Math.floor(o)===o?Vm(i[0],t,o,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Vm(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function sm(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:Z1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Lm(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:Z1(r)?i=r.value:i=t.getBaseValue(),i}function lm(r){let t=r.options,e=t.fill,i=$1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Mm(r){let{scale:t,index:e,line:i}=r,o=[],a=i.segments,H=i.points,V=cm(t,e);V.push(XH({x:null,y:t.bottom},i));for(let s=0;s<a.length;s++){let M=a[s];for(let p=M.start;p<=M.end;p++)dm(o,H[p],V)}return new p5({points:o,options:{}})}function cm(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){let a=i[o];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function dm(r,t,e){let i=[];for(let o=0;o<e.length;o++){let a=e[o],{first:H,last:V,point:s}=pm(a,t,"x");if(!(!s||H&&V)){if(H)i.unshift(s);else if(r.push(s),!V)break}}r.push(...i)}function pm(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let o=i[e],a=r.segments,H=r.points,V=!1,s=!1;for(let M=0;M<a.length;M++){let p=a[M],h=H[p.start][e],v=H[p.end][e];if(i7(o,h,v)){V=o===h,s=o===v;break}}return{first:V,last:s,point:i}}var B8=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:o,y:a,radius:H}=this;return e=e||{start:0,end:p2},t.arc(o,a,H,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:o}=this,a=t.angle;return{x:e+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}};function um(r){let{chart:t,fill:e,line:i}=r;if(V2(e))return mm(t,e);if(e==="stack")return Mm(r);if(e==="shape")return!0;let o=hm(r);return o instanceof B8?o:XH(o,i)}function mm(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function hm(r){return(r.scale||{}).getPointPositionForValue?Am(r):fm(r)}function fm(r){let{scale:t={},fill:e}=r,i=sm(e,t);if(V2(i)){let o=t.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function Am(r){let{scale:t,fill:e}=r,i=t.options,o=t.getLabels().length,a=i.reverse?t.max:t.min,H=Lm(e,t,a),V=[];if(i.grid.circular){let s=t.getPointPositionForValue(0,a);return new B8({x:s.x,y:s.y,radius:t.getDistanceFromCenterForValue(H)})}for(let s=0;s<o;++s)V.push(t.getPointPositionForValue(s,H));return V}function Hr(r,t,e){let i=um(t),{chart:o,index:a,line:H,scale:V,axis:s}=t,M=H.options,p=M.fill,h=M.backgroundColor,{above:v=h,below:x=h}=p||{},y=o.getDatasetMeta(a),k=_8(o,y);i&&H.points.length&&(a9(r,e),vm(r,{line:H,target:i,above:v,below:x,area:e,scale:V,axis:s,clip:k}),H9(r))}function vm(r,t){let{line:e,target:i,above:o,below:a,area:H,scale:V,clip:s}=t,M=e._loop?"angle":t.axis;r.save();let p=a;a!==o&&(M==="x"?(AH(r,i,H.top),nr(r,{line:e,target:i,color:o,scale:V,property:M,clip:s}),r.restore(),r.save(),AH(r,i,H.bottom)):M==="y"&&(vH(r,i,H.left),nr(r,{line:e,target:i,color:a,scale:V,property:M,clip:s}),r.restore(),r.save(),vH(r,i,H.right),p=o)),nr(r,{line:e,target:i,color:p,scale:V,property:M,clip:s}),r.restore()}function AH(r,t,e){let{segments:i,points:o}=t,a=!0,H=!1;r.beginPath();for(let V of i){let{start:s,end:M}=V,p=o[s],h=o[z8(s,M,o)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(p.x,e),r.lineTo(p.x,p.y)),H=!!t.pathSegment(r,V,{move:H}),H?r.closePath():r.lineTo(h.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function vH(r,t,e){let{segments:i,points:o}=t,a=!0,H=!1;r.beginPath();for(let V of i){let{start:s,end:M}=V,p=o[s],h=o[z8(s,M,o)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(e,p.y),r.lineTo(p.x,p.y)),H=!!t.pathSegment(r,V,{move:H}),H?r.closePath():r.lineTo(e,h.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function nr(r,t){let{line:e,target:i,property:o,color:a,scale:H,clip:V}=t,s=Cm(e,i,o);for(let{source:M,target:p,start:h,end:v}of s){let{style:{backgroundColor:x=a}={}}=M,y=i!==!0;r.save(),r.fillStyle=x,xm(r,H,V,y&&fr(o,h,v)),r.beginPath();let k=!!e.pathSegment(r,M),O;if(y){k?r.closePath():xH(r,i,v,o);let E=!!i.pathSegment(r,p,{move:k,reverse:!0});O=k&&E,O||xH(r,i,h,o)}r.closePath(),r.fill(O?"evenodd":"nonzero"),r.restore()}}function xm(r,t,e,i){let o=t.chart.chartArea,{property:a,start:H,end:V}=i||{};if(a==="x"||a==="y"){let s,M,p,h;a==="x"?(s=H,M=o.top,p=V,h=o.bottom):(s=o.left,M=H,p=o.right,h=V),r.beginPath(),e&&(s=Math.max(s,e.left),p=Math.min(p,e.right),M=Math.max(M,e.top),h=Math.min(h,e.bottom)),r.rect(s,M,p-s,h-M),r.clip()}}function xH(r,t,e,i){let o=t.interpolate(e,i);o&&r.lineTo(o.x,o.y)}var JH={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,o=[],a,H,V,s;for(H=0;H<i;++H)a=r.getDatasetMeta(H),V=a.dataset,s=null,V&&V.options&&V instanceof p5&&(s={visible:r.isDatasetVisible(H),index:H,fill:nm(V,H,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:V}),a.$filler=s,o.push(s);for(H=0;H<i;++H)s=o[H],!(!s||s.fill===!1)&&(s.fill=Hm(o,H,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",o=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let H=o.length-1;H>=0;--H){let V=o[H].$filler;V&&(V.line.updateControlPoints(a,V.axis),i&&V.fill&&Hr(r.ctx,V,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){let a=i[o].$filler;fH(a)&&Hr(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!fH(i)||e.drawTime!=="beforeDatasetDraw"||Hr(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var h9={average(r){if(!r.length)return!1;let t,e,i=new Set,o=0,a=0;for(t=0,e=r.length;t<e;++t){let V=r[t].element;if(V&&V.hasValue()){let s=V.tooltipPosition();i.add(s.x),o+=s.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((V,s)=>V+s)/i.size,y:o/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,o=Number.POSITIVE_INFINITY,a,H,V;for(a=0,H=r.length;a<H;++a){let s=r[a].element;if(s&&s.hasValue()){let M=s.getCenterPoint(),p=X4(t,M);p<o&&(o=p,V=s)}}if(V){let s=V.tooltipPosition();e=s.x,i=s.y}return{x:e,y:i}}};function s0(r,t){return t&&(i2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function P0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function gm(r,t){let{element:e,datasetIndex:i,index:o}=t,a=r.getDatasetMeta(i).controller,{label:H,value:V}=a.getLabelAndValue(o);return{chart:r,label:H,parsed:a.getParsed(o),raw:r.data.datasets[i].data[o],formattedValue:V,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:e}}function gH(r,t){let e=r.chart.ctx,{body:i,footer:o,title:a}=r,{boxWidth:H,boxHeight:V}=t,s=R2(t.bodyFont),M=R2(t.titleFont),p=R2(t.footerFont),h=a.length,v=o.length,x=i.length,y=N2(t.padding),k=y.height,O=0,E=i.reduce((K,G)=>K+G.before.length+G.lines.length+G.after.length,0);if(E+=r.beforeBody.length+r.afterBody.length,h&&(k+=h*M.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),E){let K=t.displayColors?Math.max(V,s.lineHeight):s.lineHeight;k+=x*K+(E-x)*s.lineHeight+(E-1)*t.bodySpacing}v&&(k+=t.footerMarginTop+v*p.lineHeight+(v-1)*t.footerSpacing);let $=0,R=function(K){O=Math.max(O,e.measureText(K).width+$)};return e.save(),e.font=M.string,I1(r.title,R),e.font=s.string,I1(r.beforeBody.concat(r.afterBody),R),$=t.displayColors?H+2+t.boxPadding:0,I1(i,K=>{I1(K.before,R),I1(K.lines,R),I1(K.after,R)}),$=0,e.font=p.string,I1(r.footer,R),e.restore(),O+=y.width,{width:O,height:k}}function _m(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function Sm(r,t,e,i){let{x:o,width:a}=i,H=e.caretSize+e.caretPadding;if(r==="left"&&o+a+H>t.width||r==="right"&&o-a-H<0)return!0}function wm(r,t,e,i){let{x:o,width:a}=e,{width:H,chartArea:{left:V,right:s}}=r,M="center";return i==="center"?M=o<=(V+s)/2?"left":"right":o<=a/2?M="left":o>=H-a/2&&(M="right"),Sm(M,r,t,e)&&(M="center"),M}function _H(r,t,e){let i=e.yAlign||t.yAlign||_m(r,e);return{xAlign:e.xAlign||t.xAlign||wm(r,t,e,i),yAlign:i}}function bm(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function ym(r,t,e){let{y:i,height:o}=r;return t==="top"?i+=e:t==="bottom"?i-=o+e:i-=o/2,i}function SH(r,t,e,i){let{caretSize:o,caretPadding:a,cornerRadius:H}=r,{xAlign:V,yAlign:s}=e,M=o+a,{topLeft:p,topRight:h,bottomLeft:v,bottomRight:x}=d3(H),y=bm(t,V),k=ym(t,s,M);return s==="center"?V==="left"?y+=M:V==="right"&&(y-=M):V==="left"?y-=Math.max(p,v)+o:V==="right"&&(y+=Math.max(h,x)+o),{x:k2(y,0,i.width-t.width),y:k2(k,0,i.height-t.height)}}function Z8(r,t,e){let i=N2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function wH(r){return s0([],P0(r))}function Zm(r,t,e){return V0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function bH(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var tn={beforeTitle:U5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:U5,beforeBody:U5,beforeLabel:U5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return b1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:U5,afterBody:U5,beforeFooter:U5,footer:U5,afterFooter:U5};function o5(r,t,e,i){let o=r[t].call(e,i);return typeof o>"u"?tn[t].call(e,i):o}var f9=class extends Y5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,a=new F8(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Zm(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,o=o5(i,"beforeTitle",this,t),a=o5(i,"title",this,t),H=o5(i,"afterTitle",this,t),V=[];return V=s0(V,P0(o)),V=s0(V,P0(a)),V=s0(V,P0(H)),V}getBeforeBody(t,e){return wH(o5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,o=[];return I1(t,a=>{let H={before:[],lines:[],after:[]},V=bH(i,a);s0(H.before,P0(o5(V,"beforeLabel",this,a))),s0(H.lines,o5(V,"label",this,a)),s0(H.after,P0(o5(V,"afterLabel",this,a))),o.push(H)}),o}getAfterBody(t,e){return wH(o5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,o=o5(i,"beforeFooter",this,t),a=o5(i,"footer",this,t),H=o5(i,"afterFooter",this,t),V=[];return V=s0(V,P0(o)),V=s0(V,P0(a)),V=s0(V,P0(H)),V}_createItems(t){let e=this._active,i=this.chart.data,o=[],a=[],H=[],V=[],s,M;for(s=0,M=e.length;s<M;++s)V.push(gm(this.chart,e[s]));return t.filter&&(V=V.filter((p,h,v)=>t.filter(p,h,v,i))),t.itemSort&&(V=V.sort((p,h)=>t.itemSort(p,h,i))),I1(V,p=>{let h=bH(t.callbacks,p);o.push(o5(h,"labelColor",this,p)),a.push(o5(h,"labelPointStyle",this,p)),H.push(o5(h,"labelTextColor",this,p))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=H,this.dataPoints=V,V}update(t,e){let i=this.options.setContext(this.getContext()),o=this._active,a,H=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{let V=h9[i.position].call(this,o,this._eventPosition);H=this._createItems(i),this.title=this.getTitle(H,i),this.beforeBody=this.getBeforeBody(H,i),this.body=this.getBody(H,i),this.afterBody=this.getAfterBody(H,i),this.footer=this.getFooter(H,i);let s=this._size=gH(this,i),M=Object.assign({},V,s),p=_H(this.chart,i,M),h=SH(i,M,p,this.chart);this.xAlign=p.xAlign,this.yAlign=p.yAlign,a={opacity:1,x:h.x,y:h.y,width:s.width,height:s.height,caretX:V.x,caretY:V.y}}this._tooltipItems=H,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){let a=this.getCaretPosition(t,i,o);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:o,yAlign:a}=this,{caretSize:H,cornerRadius:V}=i,{topLeft:s,topRight:M,bottomLeft:p,bottomRight:h}=d3(V),{x:v,y:x}=t,{width:y,height:k}=e,O,E,$,R,K,G;return a==="center"?(K=x+k/2,o==="left"?(O=v,E=O-H,R=K+H,G=K-H):(O=v+y,E=O+H,R=K-H,G=K+H),$=O):(o==="left"?E=v+Math.max(s,p)+H:o==="right"?E=v+y-Math.max(M,h)-H:E=this.caretX,a==="top"?(R=x,K=R-H,O=E-H,$=E+H):(R=x+k,K=R+H,O=E+H,$=E-H),G=R),{x1:O,x2:E,x3:$,y1:R,y2:K,y3:G}}drawTitle(t,e,i){let o=this.title,a=o.length,H,V,s;if(a){let M=l9(i.rtl,this.x,this.width);for(t.x=Z8(this,i.titleAlign,i),e.textAlign=M.textAlign(i.titleAlign),e.textBaseline="middle",H=R2(i.titleFont),V=i.titleSpacing,e.fillStyle=i.titleColor,e.font=H.string,s=0;s<a;++s)e.fillText(o[s],M.x(t.x),t.y+H.lineHeight/2),t.y+=H.lineHeight+V,s+1===a&&(t.y+=i.titleMarginBottom-V)}}_drawColorBox(t,e,i,o,a){let H=this.labelColors[i],V=this.labelPointStyles[i],{boxHeight:s,boxWidth:M}=a,p=R2(a.bodyFont),h=Z8(this,"left",a),v=o.x(h),x=s<p.lineHeight?(p.lineHeight-s)/2:0,y=e.y+x;if(a.usePointStyle){let k={radius:Math.min(M,s)/2,pointStyle:V.pointStyle,rotation:V.rotation,borderWidth:1},O=o.leftForLtr(v,M)+M/2,E=y+s/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,C9(t,k,O,E),t.strokeStyle=H.borderColor,t.fillStyle=H.backgroundColor,C9(t,k,O,E)}else{t.lineWidth=Z1(H.borderWidth)?Math.max(...Object.values(H.borderWidth)):H.borderWidth||1,t.strokeStyle=H.borderColor,t.setLineDash(H.borderDash||[]),t.lineDashOffset=H.borderDashOffset||0;let k=o.leftForLtr(v,M),O=o.leftForLtr(o.xPlus(v,1),M-2),E=d3(H.borderRadius);Object.values(E).some($=>$!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,q7(t,{x:k,y,w:M,h:s,radius:E}),t.fill(),t.stroke(),t.fillStyle=H.backgroundColor,t.beginPath(),q7(t,{x:O,y:y+1,w:M-2,h:s-2,radius:E}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(k,y,M,s),t.strokeRect(k,y,M,s),t.fillStyle=H.backgroundColor,t.fillRect(O,y+1,M-2,s-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:o}=this,{bodySpacing:a,bodyAlign:H,displayColors:V,boxHeight:s,boxWidth:M,boxPadding:p}=i,h=R2(i.bodyFont),v=h.lineHeight,x=0,y=l9(i.rtl,this.x,this.width),k=function(a1){e.fillText(a1,y.x(t.x+x),t.y+v/2),t.y+=v+a},O=y.textAlign(H),E,$,R,K,G,c1,J;for(e.textAlign=H,e.textBaseline="middle",e.font=h.string,t.x=Z8(this,O,i),e.fillStyle=i.bodyColor,I1(this.beforeBody,k),x=V&&O!=="right"?H==="center"?M/2+p:M+2+p:0,K=0,c1=o.length;K<c1;++K){for(E=o[K],$=this.labelTextColors[K],e.fillStyle=$,I1(E.before,k),R=E.lines,V&&R.length&&(this._drawColorBox(e,t,K,y,i),v=Math.max(h.lineHeight,s)),G=0,J=R.length;G<J;++G)k(R[G]),v=h.lineHeight;I1(E.after,k)}x=0,v=h.lineHeight,I1(this.afterBody,k),t.y-=a}drawFooter(t,e,i){let o=this.footer,a=o.length,H,V;if(a){let s=l9(i.rtl,this.x,this.width);for(t.x=Z8(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=s.textAlign(i.footerAlign),e.textBaseline="middle",H=R2(i.footerFont),e.fillStyle=i.footerColor,e.font=H.string,V=0;V<a;++V)e.fillText(o[V],s.x(t.x),t.y+H.lineHeight/2),t.y+=H.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){let{xAlign:a,yAlign:H}=this,{x:V,y:s}=t,{width:M,height:p}=i,{topLeft:h,topRight:v,bottomLeft:x,bottomRight:y}=d3(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(V+h,s),H==="top"&&this.drawCaret(t,e,i,o),e.lineTo(V+M-v,s),e.quadraticCurveTo(V+M,s,V+M,s+v),H==="center"&&a==="right"&&this.drawCaret(t,e,i,o),e.lineTo(V+M,s+p-y),e.quadraticCurveTo(V+M,s+p,V+M-y,s+p),H==="bottom"&&this.drawCaret(t,e,i,o),e.lineTo(V+x,s+p),e.quadraticCurveTo(V,s+p,V,s+p-x),H==="center"&&a==="left"&&this.drawCaret(t,e,i,o),e.lineTo(V,s+h),e.quadraticCurveTo(V,s,V+h,s),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){let H=h9[t.position].call(this,this._active,this._eventPosition);if(!H)return;let V=this._size=gH(this,t),s=Object.assign({},H,this._size),M=_H(e,t,s),p=SH(t,s,M,e);(o._to!==p.x||a._to!==p.y)&&(this.xAlign=M.xAlign,this.yAlign=M.yAlign,this.width=V.width,this.height=V.height,this.caretX=H.x,this.caretY=H.y,this._resolveAnimations().update(this,p))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let H=N2(e.padding),V=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&V&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,o,e),Ye(t,e.textDirection),a.y+=H.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),Qe(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,o=t.map(({datasetIndex:V,index:s})=>{let M=this.chart.getDatasetMeta(V);if(!M)throw new Error("Cannot find a dataset at index "+V);return{datasetIndex:V,element:M.data[s],index:s}}),a=!j7(i,o),H=this._positionChanged(o,e);(a||H)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let o=this.options,a=this._active||[],H=this._getActiveElements(t,a,e,i),V=this._positionChanged(H,t),s=e||!j7(H,a)||V;return s&&(this._active=H,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,i,o){let a=this.options;if(t.type==="mouseout")return[];if(!o)return e.filter(V=>this.chart.data.datasets[V.datasetIndex]&&this.chart.getDatasetMeta(V.datasetIndex).controller.getParsed(V.index)!==void 0);let H=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&H.reverse(),H}_positionChanged(t,e){let{caretX:i,caretY:o,options:a}=this,H=h9[a.position].call(this,t,e);return H!==!1&&(i!==H.x||o!==H.y)}};B(f9,"positioners",h9);var en={id:"tooltip",_element:f9,positioners:h9,afterInit(r,t,e){e&&(r.tooltip=new f9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:tn},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var km=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Om(r,t,e,i){let o=r.indexOf(t);if(o===-1)return km(r,t,e,i);let a=r.lastIndexOf(t);return o!==a?e:o}var Tm=(r,t)=>r===null?null:k2(Math.round(r),0,t);function yH(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var X7=class extends a7{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:o,label:a}of e)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(b1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:Om(i,t,$1(e,t),this._addedLabels),Tm(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,o=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let H=t;H<=e;H++)o.push({value:H});return o}getLabelForValue(t){return yH.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};B(X7,"id","category"),B(X7,"defaults",{ticks:{callback:yH}});function Pm(r,t){let e=[],{bounds:o,step:a,min:H,max:V,precision:s,count:M,maxTicks:p,maxDigits:h,includeBounds:v}=r,x=a||1,y=p-1,{min:k,max:O}=t,E=!b1(H),$=!b1(V),R=!b1(M),K=(O-k)/(h+1),G=C8((O-k)/y/x)*x,c1,J,a1,i1;if(G<1e-14&&!E&&!$)return[{value:k},{value:O}];i1=Math.ceil(O/G)-Math.floor(k/G),i1>y&&(G=C8(i1*G/y/x)*x),b1(s)||(c1=Math.pow(10,s),G=Math.ceil(G*c1)/c1),o==="ticks"?(J=Math.floor(k/G)*G,a1=Math.ceil(O/G)*G):(J=k,a1=O),E&&$&&a&&be((V-H)/a,G/1e3)?(i1=Math.round(Math.min((V-H)/G,p)),G=(V-H)/i1,J=H,a1=V):R?(J=E?H:J,a1=$?V:a1,i1=M-1,G=(a1-J)/i1):(i1=(a1-J)/G,e7(i1,Math.round(i1),G/1e3)?i1=Math.round(i1):i1=Math.ceil(i1));let m1=Math.max(H8(G),H8(J));c1=Math.pow(10,b1(s)?m1:s),J=Math.round(J*c1)/c1,a1=Math.round(a1*c1)/c1;let N1=0;for(E&&(v&&J!==H?(e.push({value:H}),J<H&&N1++,e7(Math.round((J+N1*G)*c1)/c1,H,ZH(H,K,r))&&N1++):J<H&&N1++);N1<i1;++N1){let k1=Math.round((J+N1*G)*c1)/c1;if($&&k1>V)break;e.push({value:k1})}return $&&v&&a1!==V?e.length&&e7(e[e.length-1].value,V,ZH(V,K,r))?e[e.length-1].value=V:e.push({value:V}):(!$||a1===V)&&e.push({value:a1}),e}function ZH(r,t,{horizontal:e,minRotation:i}){let o=n0(i),a=(e?Math.sin(o):Math.cos(o))||.001,H=.75*t*(""+r).length;return Math.min(t/a,H)}var t4=class extends a7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return b1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:o,max:a}=this,H=s=>o=e?o:s,V=s=>a=i?a:s;if(t){let s=P5(o),M=P5(a);s<0&&M<0?V(0):s>0&&M>0&&H(0)}if(o===a){let s=a===0?1:Math.abs(a*.05);V(a+s),t||H(o-s)}this.min=o,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),e=e||11),e&&(o=Math.min(e,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let o={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,H=Pm(o,a);return t.bounds==="ticks"&&a8(H,this,"value"),t.reverse?(H.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),H}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return i9(t,this.chart.options.locale,this.options.ticks.format)}},h3=class extends t4{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?t:0,this.max=V2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=n0(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};B(h3,"id","linear"),B(h3,"defaults",{ticks:{callback:o9.formatters.numeric}});var v9=r=>Math.floor(H0(r)),C7=(r,t)=>Math.pow(10,v9(r)+t);function kH(r){return r/Math.pow(10,v9(r))===1}function OH(r,t,e){let i=Math.pow(10,e),o=Math.floor(r/i);return Math.ceil(t/i)-o}function Em(r,t){let e=t-r,i=v9(e);for(;OH(r,t,i)>10;)i++;for(;OH(r,t,i)<10;)i--;return Math.min(i,v9(r))}function Fm(r,{min:t,max:e}){t=K2(r.min,t);let i=[],o=v9(t),a=Em(t,e),H=a<0?Math.pow(10,Math.abs(a)):1,V=Math.pow(10,a),s=o>a?Math.pow(10,o):0,M=Math.round((t-s)*H)/H,p=Math.floor((t-s)/V/10)*V*10,h=Math.floor((M-p)/Math.pow(10,a)),v=K2(r.min,Math.round((s+p+h*Math.pow(10,a))*H)/H);for(;v<e;)i.push({value:v,major:kH(v),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,H=a>=0?1:H),v=Math.round((s+p+h*Math.pow(10,a))*H)/H;let x=K2(r.max,v);return i.push({value:x,major:kH(x),significand:h}),i}var k8=class extends a7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=t4.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return V2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?Math.max(0,t):null,this.max=V2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!V2(this._userMin)&&(this.min=t===C7(this.min,0)?C7(this.min,-1):C7(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,o=this.max,a=V=>i=t?i:V,H=V=>o=e?o:V;i===o&&(i<=0?(a(1),H(10)):(a(C7(i,-1)),H(C7(o,1)))),i<=0&&a(C7(o,-1)),o<=0&&H(C7(i,1)),this.min=i,this.max=o}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=Fm(e,this);return t.bounds==="ticks"&&a8(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":i9(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=H0(t),this._valueRange=H0(this.max)-H0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(H0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};B(k8,"id","logarithmic"),B(k8,"defaults",{ticks:{callback:o9.formatters.logarithmic,major:{enabled:!0}}});function Ar(r){let t=r.ticks;if(t.display&&r.display){let e=N2(t.backdropPadding);return $1(t.font&&t.font.size,s2.font.size)+e.height}return 0}function $m(r,t,e){return e=i2(e)?e:[e],{w:$e(r,t.string,e),h:e.length*t.lineHeight}}function TH(r,t,e,i,o){return r===i||r===o?{start:t-e/2,end:t+e/2}:r<i||r>o?{start:t-e,end:t}:{start:t,end:t+e}}function Rm(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],o=[],a=r._pointLabels.length,H=r.options.pointLabels,V=H.centerPointLabels?Y1/a:0;for(let s=0;s<a;s++){let M=H.setContext(r.getPointLabelContext(s));o[s]=M.padding;let p=r.getPointPosition(s,r.drawingArea+o[s],V),h=R2(M.font),v=$m(r.ctx,h,r._pointLabels[s]);i[s]=v;let x=Z2(r.getIndexAngle(s)+V),y=Math.round(t9(x)),k=TH(y,p.x,v.w,0,180),O=TH(y,p.y,v.h,90,270);Dm(e,t,x,k,O)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=Im(r,i,o)}function Dm(r,t,e,i,o){let a=Math.abs(Math.sin(e)),H=Math.abs(Math.cos(e)),V=0,s=0;i.start<t.l?(V=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-V)):i.end>t.r&&(V=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+V)),o.start<t.t?(s=(t.t-o.start)/H,r.t=Math.min(r.t,t.t-s)):o.end>t.b&&(s=(o.end-t.b)/H,r.b=Math.max(r.b,t.b+s))}function Bm(r,t,e){let i=r.drawingArea,{extra:o,additionalAngle:a,padding:H,size:V}=e,s=r.getPointPosition(t,i+o+H,a),M=Math.round(t9(Z2(s.angle+f2))),p=Um(s.y,V.h,M),h=Nm(M),v=Wm(s.x,V.w,h);return{visible:!0,x:s.x,y:p,textAlign:h,left:v,top:p,right:v+V.w,bottom:p+V.h}}function zm(r,t){if(!t)return!0;let{left:e,top:i,right:o,bottom:a}=r;return!(W5({x:e,y:i},t)||W5({x:e,y:a},t)||W5({x:o,y:i},t)||W5({x:o,y:a},t))}function Im(r,t,e){let i=[],o=r._pointLabels.length,a=r.options,{centerPointLabels:H,display:V}=a.pointLabels,s={extra:Ar(a)/2,additionalAngle:H?Y1/o:0},M;for(let p=0;p<o;p++){s.padding=e[p],s.size=t[p];let h=Bm(r,p,s);i.push(h),V==="auto"&&(h.visible=zm(h,M),h.visible&&(M=h))}return i}function Nm(r){return r===0||r===180?"center":r<180?"left":"right"}function Wm(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function Um(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function jm(r,t,e){let{left:i,top:o,right:a,bottom:H}=e,{backdropColor:V}=t;if(!b1(V)){let s=d3(t.borderRadius),M=N2(t.backdropPadding);r.fillStyle=V;let p=i-M.left,h=o-M.top,v=a-i+M.width,x=H-o+M.height;Object.values(s).some(y=>y!==0)?(r.beginPath(),q7(r,{x:p,y:h,w:v,h:x,radius:s}),r.fill()):r.fillRect(p,h,v,x)}}function Gm(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let o=t-1;o>=0;o--){let a=r._pointLabelItems[o];if(!a.visible)continue;let H=i.setContext(r.getPointLabelContext(o));jm(e,H,a);let V=R2(H.font),{x:s,y:M,textAlign:p}=a;G7(e,r._pointLabels[o],s,M+V.lineHeight/2,V,{color:H.color,textAlign:p,textBaseline:"middle"})}}function rn(r,t,e,i){let{ctx:o}=r;if(e)o.arc(r.xCenter,r.yCenter,t,0,p2);else{let a=r.getPointPosition(0,t);o.moveTo(a.x,a.y);for(let H=1;H<i;H++)a=r.getPointPosition(H,t),o.lineTo(a.x,a.y)}}function qm(r,t,e,i,o){let a=r.ctx,H=t.circular,{color:V,lineWidth:s}=t;!H&&!i||!V||!s||e<0||(a.save(),a.strokeStyle=V,a.lineWidth=s,a.setLineDash(o.dash||[]),a.lineDashOffset=o.dashOffset,a.beginPath(),rn(r,e,H,i),a.closePath(),a.stroke(),a.restore())}function Ym(r,t,e){return V0(r,{label:e,index:t,type:"pointLabel"})}var Q7=class extends t4{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=N2(Ar(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=V2(t)&&!isNaN(t)?t:0,this.max=V2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ar(this.options))}generateTickLabels(t){t4.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let o=t2(this.options.pointLabels.callback,[e,i],this);return o||o===0?o:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?Rm(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){let e=p2/(this._pointLabels.length||1),i=this.options.startAngle||0;return Z2(t*e+n0(i))}getDistanceFromCenterForValue(t){if(b1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(b1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return Ym(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let o=this.getIndexAngle(t)-f2+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:o,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),rn(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:o,border:a}=e,H=this._pointLabels.length,V,s,M;if(e.pointLabels.display&&Gm(this,H),o.display&&this.ticks.forEach((p,h)=>{if(h!==0||h===0&&this.min<0){s=this.getDistanceFromCenterForValue(p.value);let v=this.getContext(h),x=o.setContext(v),y=a.setContext(v);qm(this,x,s,H,y)}}),i.display){for(t.save(),V=H-1;V>=0;V--){let p=i.setContext(this.getPointLabelContext(V)),{color:h,lineWidth:v}=p;!v||!h||(t.lineWidth=v,t.strokeStyle=h,t.setLineDash(p.borderDash),t.lineDashOffset=p.borderDashOffset,s=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),M=this.getPointPosition(V,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(M.x,M.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let o=this.getIndexAngle(0),a,H;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((V,s)=>{if(s===0&&this.min>=0&&!e.reverse)return;let M=i.setContext(this.getContext(s)),p=R2(M.font);if(a=this.getDistanceFromCenterForValue(this.ticks[s].value),M.showLabelBackdrop){t.font=p.string,H=t.measureText(V.label).width,t.fillStyle=M.backdropColor;let h=N2(M.backdropPadding);t.fillRect(-H/2-h.left,-a-p.size/2-h.top,H+h.width,p.size+h.height)}G7(t,V.label,0,-a,p,{color:M.color,strokeColor:M.textStrokeColor,strokeWidth:M.textStrokeWidth})}),t.restore()}drawTitle(){}};B(Q7,"id","radialLinear"),B(Q7,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:o9.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),B(Q7,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),B(Q7,"descriptors",{angleLines:{_fallback:"grid"}});var I8={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},C5=Object.keys(I8);function PH(r,t){return r-t}function EH(r,t){if(b1(t))return null;let e=r._adapter,{parser:i,round:o,isoWeekday:a}=r._parseOpts,H=t;return typeof i=="function"&&(H=i(H)),V2(H)||(H=typeof i=="string"?e.parse(H,i):e.parse(H)),H===null?null:(o&&(H=o==="week"&&(r7(a)||a===!0)?e.startOf(H,"isoWeek",a):e.startOf(H,o)),+H)}function FH(r,t,e,i){let o=C5.length;for(let a=C5.indexOf(r);a<o-1;++a){let H=I8[C5[a]],V=H.steps?H.steps:Number.MAX_SAFE_INTEGER;if(H.common&&Math.ceil((e-t)/(V*H.size))<=i)return C5[a]}return C5[o-1]}function Qm(r,t,e,i,o){for(let a=C5.length-1;a>=C5.indexOf(e);a--){let H=C5[a];if(I8[H].common&&r._adapter.diff(o,i,H)>=t-1)return H}return C5[e?C5.indexOf(e):0]}function Km(r){for(let t=C5.indexOf(r)+1,e=C5.length;t<e;++t)if(I8[C5[t]].common)return C5[t]}function $H(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:o}=r9(e,t),a=e[i]>=t?e[i]:e[o];r[a]=!0}}function Xm(r,t,e,i){let o=r._adapter,a=+o.startOf(t[0].value,i),H=t[t.length-1].value,V,s;for(V=a;V<=H;V=+o.add(V,1,i))s=e[V],s>=0&&(t[s].major=!0);return t}function RH(r,t,e){let i=[],o={},a=t.length,H,V;for(H=0;H<a;++H)V=t[H],o[V]=H,i.push({value:V,major:!1});return a===0||!e?i:Xm(r,i,o,e)}var J7=class extends a7{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),o=this._adapter=new Ep._date(t.adapters.date);o.init(e),J3(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:EH(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:o,max:a,minDefined:H,maxDefined:V}=this.getUserBounds();function s(M){!H&&!isNaN(M.min)&&(o=Math.min(o,M.min)),!V&&!isNaN(M.max)&&(a=Math.max(a,M.max))}(!H||!V)&&(s(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&s(this.getMinMax(!1))),o=V2(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),a=V2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);let a=this.min,H=this.max,V=ke(o,a,H);return this._unit=e.unit||(i.autoSkip?FH(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Qm(this,V.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Km(this._unit),this.initOffsets(o),t.reverse&&V.reverse(),RH(this,V,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,o,a;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?e=1-o:e=(this.getDecimalForValue(t[1])-o)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let H=t.length<3?.5:.25;e=k2(e,0,H),i=k2(i,0,H),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,o=this.options,a=o.time,H=a.unit||FH(a.minUnit,e,i,this._getLabelCapacity(e)),V=$1(o.ticks.stepSize,1),s=H==="week"?a.isoWeekday:!1,M=r7(s)||s===!0,p={},h=e,v,x;if(M&&(h=+t.startOf(h,"isoWeek",s)),h=+t.startOf(h,M?"day":H),t.diff(i,e,H)>1e5*V)throw new Error(e+" and "+i+" are too far apart with stepSize of "+V+" "+H);let y=o.ticks.source==="data"&&this.getDataTimestamps();for(v=h,x=0;v<i;v=+t.add(v,V,H),x++)$H(p,v,y);return(v===i||o.bounds==="ticks"||x===1)&&$H(p,v,y),Object.keys(p).sort(PH).map(k=>+k)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let o=this.options.time.displayFormats,a=this._unit,H=e||o[a];return this._adapter.format(t,H)}_tickFormatFunction(t,e,i,o){let a=this.options,H=a.ticks.callback;if(H)return t2(H,[t,e,i],this);let V=a.time.displayFormats,s=this._unit,M=this._majorUnit,p=s&&V[s],h=M&&V[M],v=i[e],x=M&&h&&v&&v.major;return this._adapter.format(t,o||(x?h:p))}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,o=n0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(o),H=Math.sin(o),V=this._resolveTickFontOptions(0).size;return{w:i*a+V*H,h:i*H+V*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,RH(this,[t],this._majorUnit),o),H=this._getLabelSize(a),V=Math.floor(this.isHorizontal()?this.width/H.w:this.height/H.h)-1;return V>0?V:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(e=0,i=o.length;e<i;++e)t=t.concat(o[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(EH(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return s8(t.sort(PH))}};B(J7,"id","time"),B(J7,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function O8(r,t,e){let i=0,o=r.length-1,a,H,V,s;e?(t>=r[i].pos&&t<=r[o].pos&&({lo:i,hi:o}=k0(r,"pos",t)),{pos:a,time:V}=r[i],{pos:H,time:s}=r[o]):(t>=r[i].time&&t<=r[o].time&&({lo:i,hi:o}=k0(r,"time",t)),{time:a,pos:V}=r[i],{time:H,pos:s}=r[o]);let M=H-a;return M?V+(s-V)*(t-a)/M:V}var T8=class extends J7{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=O8(e,this.min),this._tableRange=O8(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,o=[],a=[],H,V,s,M,p;for(H=0,V=t.length;H<V;++H)M=t[H],M>=e&&M<=i&&o.push(M);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(H=0,V=o.length;H<V;++H)p=o[H+1],s=o[H-1],M=o[H],Math.round((p+s)/2)!==M&&a.push({time:M,pos:H/(V-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(O8(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return O8(this._table,i*this._tableRange+this._minPos,!0)}};B(T8,"id","timeseries"),B(T8,"defaults",J7.defaults);var on=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),_9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):b1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),o=i.length,a=r.font,H=0,V;for(r.font=e.string,V=0;V<o;++V)H=Math.max(r.measureText(i[V]).width,H);return r.font=a,{height:o*e.lineHeight,width:H}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],o,a,H,V;for(o=0,H=t.length;o<H;++o)V=t[o],a=e.indexOf(V),a===-1?i.push([V,1]):e.splice(a,1);for(o=0,H=e.length;o<H;++o)i.push([e[o],-1]);return i},rasterize:function(r){return Math.round(r*on)/on}};function vr(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var o=r.x-e,a=r.y-i,H=Math.sqrt(o*o+a*a);return{x:H?o/H:0,y:H?a/H:-1}}function Jm(r,t,e,i,o){switch(o){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:o*=Math.PI/180,e=Math.cos(o),i=Math.sin(o);break}return{x:r,y:t,vx:e,vy:i}}var th=0,an=1,Hn=2,nn=4,Vn=8;function N8(r,t,e){var i=th;return r<e.left?i|=an:r>e.right&&(i|=Hn),t<e.top?i|=Vn:t>e.bottom&&(i|=nn),i}function eh(r,t){for(var e=r.x0,i=r.y0,o=r.x1,a=r.y1,H=N8(e,i,t),V=N8(o,a,t),s,M,p;!(!(H|V)||H&V);)s=H||V,s&Vn?(M=e+(o-e)*(t.top-i)/(a-i),p=t.top):s&nn?(M=e+(o-e)*(t.bottom-i)/(a-i),p=t.bottom):s&Hn?(p=i+(a-i)*(t.right-e)/(o-e),M=t.right):s&an&&(p=i+(a-i)*(t.left-e)/(o-e),M=t.left),s===H?(e=M,i=p,H=N8(e,i,t)):(o=M,a=p,V=N8(o,a,t));return{x0:e,x1:o,y0:i,y1:a}}function W8(r,t){var e=t.anchor,i=r,o,a;return t.clamp&&(i=eh(i,t.area)),e==="start"?(o=i.x0,a=i.y0):e==="end"?(o=i.x1,a=i.y1):(o=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),Jm(o,a,r.vx,r.vy,t.align)}var U8={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),o=Math.sin(e),a=r.innerRadius,H=r.outerRadius;return W8({x0:r.x+i*a,y0:r.y+o*a,x1:r.x+i*H,y1:r.y+o*H,vx:i,vy:o},t)},point:function(r,t){var e=vr(r,t.origin),i=e.x*r.options.radius,o=e.y*r.options.radius;return W8({x0:r.x-i,y0:r.y-o,x1:r.x+i,y1:r.y+o,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=vr(r,t.origin),i=r.x,o=r.y,a=0,H=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(o=Math.min(r.y,r.base),H=Math.abs(r.base-r.y)),W8({x0:i,y0:o+H,x1:i+a,y1:o,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=vr(r,t.origin);return W8({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},$0=_9.rasterize;function rh(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,o=r.size.width,a=-o/2,H=-i/2;return{frame:{x:a-e.left-t,y:H-e.top-t,w:o+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:H,w:o,h:i}}}function ih(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function oh(r){return r instanceof p3?U8.arc:r instanceof G5?U8.point:r instanceof q5?U8.bar:U8.fallback}function Ch(r,t,e,i,o,a){var H=Math.PI/2;if(a){var V=Math.min(a,o/2,i/2),s=t+V,M=e+V,p=t+i-V,h=e+o-V;r.moveTo(t,M),s<p&&M<h?(r.arc(s,M,V,-Math.PI,-H),r.arc(p,M,V,-H,0),r.arc(p,h,V,0,H),r.arc(s,h,V,H,Math.PI)):s<p?(r.moveTo(s,e),r.arc(p,M,V,-H,H),r.arc(s,M,V,H,Math.PI+H)):M<h?(r.arc(s,M,V,-Math.PI,0),r.arc(s,h,V,0,Math.PI)):r.arc(s,M,V,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,o)}function ah(r,t,e){var i=e.backgroundColor,o=e.borderColor,a=e.borderWidth;!i&&(!o||!a)||(r.beginPath(),Ch(r,$0(t.x)+a/2,$0(t.y)+a/2,$0(t.w)-a,$0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),o&&a&&(r.strokeStyle=o,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function Hh(r,t,e){var i=e.lineHeight,o=r.w,a=r.x,H=r.y+i/2;return t==="center"?a+=o/2:(t==="end"||t==="right")&&(a+=o),{h:i,w:o,x:a,y:H}}function nh(r,t,e){var i=r.shadowBlur,o=e.stroked,a=$0(e.x),H=$0(e.y),V=$0(e.w);o&&r.strokeText(t,a,H,V),e.filled&&(i&&o&&(r.shadowBlur=0),r.fillText(t,a,H,V),i&&o&&(r.shadowBlur=i))}function Vh(r,t,e,i){var o=i.textAlign,a=i.color,H=!!a,V=i.font,s=t.length,M=i.textStrokeColor,p=i.textStrokeWidth,h=M&&p,v;if(!(!s||!H&&!h))for(e=Hh(e,o,V),r.font=V.string,r.textAlign=o,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,H&&(r.fillStyle=a),h&&(r.lineJoin="round",r.lineWidth=p,r.strokeStyle=M),v=0,s=t.length;v<s;++v)nh(r,t[v],{stroked:h,filled:H,w:e.w,x:e.x,y:e.y+e.h*v})}var sn=function(r,t,e,i){var o=this;o._config=r,o._index=i,o._model=null,o._rects=null,o._ctx=t,o._el=e};d5(sn.prototype,{_modelize:function(r,t,e,i){var o=this,a=o._index,H=R2(e2([e.font,{}],i,a)),V=e2([e.color,s2.color],i,a);return{align:e2([e.align,"center"],i,a),anchor:e2([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:e2([e.backgroundColor,null],i,a),borderColor:e2([e.borderColor,null],i,a),borderRadius:e2([e.borderRadius,0],i,a),borderWidth:e2([e.borderWidth,0],i,a),clamp:e2([e.clamp,!1],i,a),clip:e2([e.clip,!1],i,a),color:V,display:r,font:H,lines:t,offset:e2([e.offset,4],i,a),opacity:e2([e.opacity,1],i,a),origin:ih(o._el,i),padding:N2(e2([e.padding,4],i,a)),positioner:oh(o._el),rotation:e2([e.rotation,0],i,a)*(Math.PI/180),size:_9.textSize(o._ctx,t,H),textAlign:e2([e.textAlign,"start"],i,a),textShadowBlur:e2([e.textShadowBlur,0],i,a),textShadowColor:e2([e.textShadowColor,V],i,a),textStrokeColor:e2([e.textStrokeColor,V],i,a),textStrokeWidth:e2([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,o=t._index,a=t._config,H,V,s,M=e2([a.display,!0],r,o);M&&(H=r.dataset.data[o],V=$1(t2(a.formatter,[H,r]),H),s=b1(V)?[]:_9.toTextLines(V),s.length&&(e=t._modelize(M,s,a,r),i=rh(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,o=e._model,a=e._rects,H;this.visible()&&(i.save(),o.clip&&(H=o.area,i.beginPath(),i.rect(H.left,H.top,H.right-H.left,H.bottom-H.top),i.clip()),i.globalAlpha=_9.bound(0,o.opacity,1),i.translate($0(t.x),$0(t.y)),i.rotate(o.rotation),ah(i,a.frame,o),Vh(i,o.lines,a.text,o),i.restore())}});var sh=Number.MIN_SAFE_INTEGER||-9007199254740991,Lh=Number.MAX_SAFE_INTEGER||9007199254740991;function g9(r,t,e){var i=Math.cos(e),o=Math.sin(e),a=t.x,H=t.y;return{x:a+i*(r.x-a)-o*(r.y-H),y:H+o*(r.x-a)+i*(r.y-H)}}function Cn(r,t){var e=Lh,i=sh,o=t.origin,a,H,V,s,M;for(a=0;a<r.length;++a)H=r[a],V=H.x-o.x,s=H.y-o.y,M=t.vx*V+t.vy*s,e=Math.min(e,M),i=Math.max(i,M);return{min:e,max:i}}function j8(r,t){var e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/o,vy:(t.y-r.y)/o,origin:r,ln:o}}var Ln=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};d5(Ln.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=g9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[j8(t[0],t[1]),j8(t[0],t[3])],o,a,H;for(this._rotation!==r._rotation&&i.push(j8(e[0],e[1]),j8(e[0],e[3])),o=0;o<i.length;++o)if(a=Cn(t,i[o]),H=Cn(e,i[o]),a.max<H.min||H.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[g9({x:t.x,y:t.y},i,e),g9({x:t.x+t.w,y:t.y},i,e),g9({x:t.x+t.w,y:t.y+t.h},i,e),g9({x:t.x,y:t.y+t.h},i,e)]}});function ln(r,t,e){var i=t.positioner(r,t),o=i.vx,a=i.vy;if(!o&&!a)return{x:i.x,y:i.y};var H=e.w,V=e.h,s=t.rotation,M=Math.abs(H/2*Math.cos(s))+Math.abs(V/2*Math.sin(s)),p=Math.abs(H/2*Math.sin(s))+Math.abs(V/2*Math.cos(s)),h=1/Math.max(Math.abs(o),Math.abs(a));return M*=o*h,p*=a*h,M+=t.offset*o,p+=t.offset*a,{x:i.x+M,y:i.y+p}}function lh(r,t){var e,i,o,a;for(e=r.length-1;e>=0;--e)for(o=r[e].$layout,i=e-1;i>=0&&o._visible;--i)a=r[i].$layout,a._visible&&o._box.intersects(a._box)&&t(o,a);return r}function Mh(r){var t,e,i,o,a,H,V;for(t=0,e=r.length;t<e;++t)i=r[t],o=i.$layout,o._visible&&(V=new Proxy(i._el,{get:(s,M)=>s.getProps([M],!0)[M]}),a=i.geometry(),H=ln(V,i.model(),a),o._box.update(H,a,i.rotation()));return lh(r,function(s,M){var p=s._hidable,h=M._hidable;p&&h||h?M._visible=!1:p&&(s._visible=!1)})}var S9={prepare:function(r){var t=[],e,i,o,a,H;for(e=0,o=r.length;e<o;++e)for(i=0,a=r[e].length;i<a;++i)H=r[e][i],t.push(H),H.$layout={_box:new Ln,_hidable:!1,_visible:!0,_set:e,_idx:H._index};return t.sort(function(V,s){var M=V.$layout,p=s.$layout;return M._idx===p._idx?p._set-M._set:p._idx-M._idx}),this.update(t),t},update:function(r){var t=!1,e,i,o,a,H;for(e=0,i=r.length;e<i;++e)o=r[e],a=o.model(),H=o.$layout,H._hidable=a&&a.display==="auto",H._visible=o.visible(),t|=H._hidable;t&&Mh(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,o,a,H,V;for(e=0,i=t.length;e<i;++e)o=t[e],a=o.$layout,a._visible&&(H=o.geometry(),V=ln(o._el,o.model(),H),a._box.update(V,H,o.rotation()),o.draw(r,V))}},ch=function(r){if(b1(r))return null;var t=r,e,i,o;if(Z1(r))if(!b1(r.label))t=r.label;else if(!b1(r.r))t=r.r;else for(t="",e=Object.keys(r),o=0,i=e.length;o<i;++o)t+=(o!==0?", ":"")+e[o]+": "+r[e[o]];return""+t},dh={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:ch,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},a5="$datalabels",Mn="$default";function ph(r,t){var e=r.datalabels,i={},o=[],a,H;return e===!1?null:(e===!0&&(e={}),t=d5({},[t,e]),a=t.labels||{},H=Object.keys(a),delete t.labels,H.length?H.forEach(function(V){a[V]&&o.push(d5({},[t,a[V],{_key:V}]))}):o.push(t),i=o.reduce(function(V,s){return I1(s.listeners||{},function(M,p){V[p]=V[p]||{},V[p][s._key||Mn]=M}),delete s.listeners,V},{}),{labels:o,listeners:i})}function xr(r,t,e,i){if(t){var o=e.$context,a=e.$groups,H;t[a._set]&&(H=t[a._set][a._key],H&&t2(H,[o,i])===!0&&(r[a5]._dirty=!0,e.update(o)))}}function uh(r,t,e,i,o){var a,H;!e&&!i||(e?i?e!==i&&(H=a=!0):H=!0:a=!0,H&&xr(r,t.leave,e,o),a&&xr(r,t.enter,i,o))}function mh(r,t){var e=r[a5],i=e._listeners,o,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=S9.lookup(e._labels,t);else if(t.type!=="mouseout")return;o=e._hovered,e._hovered=a,uh(r,i,o,a,t)}}function hh(r,t){var e=r[a5],i=e._listeners.click,o=i&&S9.lookup(e._labels,t);o&&xr(r,i,o,t)}var cn={id:"datalabels",defaults:dh,beforeInit:function(r){r[a5]={_actives:[]}},beforeUpdate:function(r){var t=r[a5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,o=r[a5],a=o._datasets[i]=[],H=r.isDatasetVisible(i),V=r.data.datasets[i],s=ph(V,e),M=t.meta.data||[],p=r.ctx,h,v,x,y,k,O,E,$;for(p.save(),h=0,x=M.length;h<x;++h)if(E=M[h],E[a5]=[],H&&E&&r.getDataVisibility(h)&&!E.skip)for(v=0,y=s.labels.length;v<y;++v)k=s.labels[v],O=k._key,$=new sn(k,p,E,h),$.$groups={_set:i,_key:O||Mn},$.$context={active:!1,chart:r,dataIndex:h,dataset:V,datasetIndex:i},$.update($.$context),E[a5].push($),a.push($);p.restore(),d5(o._listeners,s.listeners,{merger:function(R,K,G){K[R]=K[R]||{},K[R][t.index]=G[R],o._listened=!0}})},afterUpdate:function(r){r[a5]._labels=S9.prepare(r[a5]._datasets)},afterDatasetsDraw:function(r){S9.draw(r,r[a5]._labels)},beforeEvent:function(r,t){if(r[a5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":mh(r,e);break;case"click":hh(r,e);break}}},afterEvent:function(r){var t=r[a5],e=t._actives,i=t._actives=r.getActiveElements(),o=_9.arrayDiff(e,i),a,H,V,s,M,p,h;for(a=0,H=o.length;a<H;++a)if(M=o[a],M[1])for(h=M[0].element[a5]||[],V=0,s=h.length;V<s;++V)p=h[V],p.$context.active=M[1]===1,p.update(p.$context);(t._dirty||o.length)&&(S9.update(t._labels),r.render()),delete t._dirty}};function G8(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var l0=class extends e1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=b0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return Z;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,o=e.secondaryLabel!==void 0;return _`
      <div
        class="wsfc-forecast-slot-time ${e.className||""} ${o?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${e.icon?_`<ha-icon .icon=${e.icon}></ha-icon>`:e.label}</span
        >
        ${o?_`<span class="wsfc-forecast-slot-time-secondary"
              >${e.secondaryLabel}</span
            >`:Z}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${i}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let e=W6(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let M=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:a3(this.hass,this.forecast.datetime),secondaryLabel:M}}if(this.forecastType==="daily")return e?{label:a3(this.hass,this.forecast.datetime),secondaryLabel:NC(this.hass,this.forecast.datetime)}:{label:a3(this.hass,this.forecast.datetime)};let o=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):qC(o),H=o,V;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:M,sunset:p}=this.suntimesInfo,h=v=>{let x=new Date(o);return x.setHours(v.getHours(),v.getMinutes()),x.getTime()>=o.getTime()&&x.getTime()<=a.getTime()};h(M)?(V="wsfc-sunrise",H=M):h(p)&&(V="wsfc-sunset",H=p)}if(V){let M=UC(this.hass,H);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:M.suffix?`${M.time} ${M.suffix}`:M.time,className:V,icon:V==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:M.time,secondaryLabel:e?M.suffix:void 0,className:V}}let s=WC(this.hass,H);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:s.hour}:{label:s.hour,secondaryLabel:e?s.suffix:void 0}}};l0.styles=p1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,Q([r1({attribute:!1})],l0.prototype,"hass",2),Q([r1({attribute:!1})],l0.prototype,"forecast",2),Q([r1({attribute:!1})],l0.prototype,"forecastType",2),Q([r1({attribute:!1})],l0.prototype,"isTwiceDailyEntity",2),Q([r1({attribute:!1})],l0.prototype,"config",2),l0=Q([n2("wsfc-forecast-header-items")],l0);var f3=class extends e1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?_`
      <div class="dropdown">
        ${this.options.map(e=>this._renderOption(e))}
      </div>
    `:Z}_renderOption(e){let i=this.value===e.value;return _`
      <div
        class="menu-item ${i?"selected":""}"
        @click=${o=>this._onSelected(o,e.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${e.icon}></ha-icon>
          <span>${e.label}</span>
        </div>
      </div>
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};f3.styles=p1`
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
  `,Q([r1({type:Boolean})],f3.prototype,"open",2),Q([r1({attribute:!1})],f3.prototype,"options",2),Q([r1({attribute:!1})],f3.prototype,"value",2),f3=Q([n2("wsfc-chart-attribute-selector")],f3);O2.register(E0,q5,F0,p5,G5,h3,X7,cn);var dn=16384,fh=6,q8=12,Ah=10,vh=10,xh=130,X2=class extends e1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=ta;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new I7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let o=j5(i,this._chart),a=this._chart.scales.x;if(!a)return;let H=a.getValueForPixel(o.x);if(H==null)return;let V=a.getLabelForValue(H),s=this._chart.data.labels?.indexOf(V)??-1;if(s===-1)return;let M=this.safeForecast[s];if(!M)return;let p={selectedForecast:M,action:e.detail.action};a2(this,"action",p)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let o=e.has("forecastType")||e.has("itemWidth");this.updateChartData(o)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return Z;let i=e.length,o=Math.max(i-1,0),a=this._getChartFontSize(),H=xh+Math.max(0,a-q8),s={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${o} * var(--forecast-item-gap))`},M={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},p={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${H}px`};return _`
      <div
        class="${Q3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
      >
        ${this.config.forecast?.show_attribute_selector?_`<span>${this._localizeSelectedAttribute()}</span>
              <div class="wsfc-forecast-chart-attribute-selector">
                <ha-button
                  class="wsfc-settings-toggle-button"
                  size="small"
                  appearance="filled"
                  variant="brand"
                  @click=${this._onSettingsToggle}
                >
                  <ha-icon
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":N5[this._selectedAttribute]}
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
        class="${Q3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${Q2(s)}
          .actionHandler=${o0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${Q2(M)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${Q2(p)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${e.map((h,v)=>_`
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
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new O2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),o=this._chart.config.type,a=i.type;if(o!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let o=parseFloat(i);if(!isNaN(o))return o}return q8}_getBarLabelOffset(){return-22-(this._getChartFontSize()-q8)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),o=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),H=a+vh,V=Ah+(a-q8),s={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:H,bottom:V,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:o,dash:[4,4]},grid:{offset:!0,display:!0,color:o,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,s);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,s);default:return this._getDefaultWeatherConfig(e,i,s)}}_getDefaultWeatherConfig(e,i,o){let{minTemp:a,maxTemp:H}=this.computeScaleLimits(e),V=i.getPropertyValue("--wfc-chart-temp-high-label-color"),s=i.getPropertyValue("--wfc-chart-temp-low-label-color"),M=i.getPropertyValue("--wfc-chart-precipitation-label-color"),p=i.getPropertyValue("--wfc-precipitation-bar-color"),h=B7(c5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),v=this.getTemperatureLineStyle(i,"temperature"),x=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(y=>y.datetime),datasets:[{data:e.map(y=>y.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:V,formatter:y=>y!=null?`${C0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...v},{data:e.map(y=>y.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:s,formatter:y=>y!=null?`${C0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...x},{type:"bar",data:e.map(y=>y.precipitation&&y.precipitation!==0?y.precipitation:null),backgroundColor:p,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:M,formatter:y=>Ca(y,c5(this.hass,this.weatherEntity,"precipitation"))}}]},options:W3({},o,{scales:{yTemp:{type:"linear",display:!1,min:a,max:H,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:h,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,o){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(H=>H.datetime),datasets:[{type:"bar",data:e.map(H=>H.uv_index!=null?Math.round(H.uv_index):0),backgroundColor:e.map(H=>i.getPropertyValue(G8(H.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:W3({},o,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,o){let a=this._selectedAttribute,H=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",V=i.getPropertyValue(H)||i.getPropertyValue("--wfc-chart-default-line-color"),s=i.getPropertyValue("--wfc-chart-label-color"),M=c5(this.hass,this.weatherEntity,a),p=e.map(O=>O[a]??0),h=Math.max(...p),v=Math.min(...p),x=h-v||1,y=h+x*.2,k=v-x*.1;return{type:"line",data:{labels:e.map(O=>O.datetime),datasets:[{data:e.map(O=>O[a]??null),borderColor:V,pointBackgroundColor:V,fill:!1,datalabels:{anchor:"end",align:"top",color:s,formatter:(O,E)=>{if(O===null)return null;let $=`${O} ${M}`;return $.length>fh&&E.dataIndex%2!==0?null:$}}}]},options:W3({},o,{scales:{y:{display:!1,min:k,max:y}}})}}getTemperatureLineStyle(e,i){let o=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(o),H=V=>this.computeTemperatureLineColor(V,e,a);return{borderColor:H,pointBorderColor:H,pointBackgroundColor:H,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,o){if(!this.config.forecast?.use_color_thresholds)return o;let a=e.chart,{ctx:H,chartArea:V,scales:s}=a;if(!V||!s.yTemp)return o;if(this._temperatureColors===null){let $=i;this._temperatureColors={cold:$.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:$.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:$.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:$.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:$.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:$.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let M=s.yTemp,{min:p,max:h}=M;if(!Number.isFinite(p)||!Number.isFinite(h))return o;let v=H.createLinearGradient(0,V.bottom,0,V.top),x=$=>Math.max(0,Math.min(1,($-p)/(h-p))),k=c5(this.hass,this.weatherEntity,"temperature")==="\xB0F",O=$=>k?$*9/5+32:$,E=[{pos:x(O(-10)),color:this._temperatureColors.cold},{pos:x(O(0)),color:this._temperatureColors.freezing},{pos:x(O(8)),color:this._temperatureColors.chilly},{pos:x(O(18)),color:this._temperatureColors.mild},{pos:x(O(26)),color:this._temperatureColors.warm},{pos:x(O(34)),color:this._temperatureColors.hot}].sort(($,R)=>$.pos-R.pos);for(let $ of E)v.addColorStop($.pos,$.color);return v}computeScaleLimits(e){let i=e.map(R=>R.temperature),o=e.map(R=>R.templow??R.temperature),a=Math.min(...o),H=Math.max(...i),V=e.some(R=>R.templow!==void 0&&R.templow!==null),s=Math.max(H-a,10),M=.2,p=V?.35:.1,h=s*M,v=s*p,x=2,y=V?5:1,k=Math.max(h,x),O=Math.max(v,y),E=Math.floor(a-O),$=Math.ceil(H+k);return E>=$&&($=E+1),{minTemp:E,maxTemp:$}}renderHeaderItems(e){let i=[],o;return e.forEach((a,H)=>{if(a.datetime){if(this.forecastType==="hourly"){let V=a3(this.hass,a.datetime);o!==V&&(o=V,i.push(_`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${V}</div>
            </div>`))}i.push(_`
        <div class="wsfc-forecast-slot" data-index=${H}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${a}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
        </div>
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((dn+e)/(this.itemWidth+e));return this.forecast.length>i?(I5.debug(`Truncating forecast to ${i} items to stay under ${dn}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=o=>o==="temperature_and_precipitation"?!0:e.some(a=>a[o]!=null);return G6.filter(i).map(o=>({label:o==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,o)||o,icon:o==="temperature_and_precipitation"?"mdi:water-thermometer":N5[o],value:o}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};Q([r1({attribute:!1})],X2.prototype,"hass",2),Q([r1({attribute:!1})],X2.prototype,"weatherEntity",2),Q([r1({attribute:!1})],X2.prototype,"forecast",2),Q([r1({attribute:!1})],X2.prototype,"config",2),Q([r1({attribute:!1})],X2.prototype,"forecastType",2),Q([r1({attribute:!1})],X2.prototype,"isTwiceDailyEntity",2),Q([r1({attribute:!1})],X2.prototype,"itemWidth",2),Q([r1({attribute:!1})],X2.prototype,"isScrollable",2),Q([z4("canvas")],X2.prototype,"_canvas",2),Q([Y2()],X2.prototype,"_settingsOpen",2),Q([Y2()],X2.prototype,"_selectedAttribute",2),X2=Q([n2("wsfc-forecast-chart")],X2);var A3=class extends e1{createRenderRoot(){return this}render(){if(!this.forecast)return Z;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=ia(this.forecast);return _`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?_`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:Z}
      </div>
      <div
        class=${Q3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};Q([r1({attribute:!1})],A3.prototype,"hass",2),Q([r1({attribute:!1})],A3.prototype,"forecast",2),Q([r1({attribute:!1})],A3.prototype,"config",2),Q([r1({attribute:!1})],A3.prototype,"maxPrecipitation",2),A3=Q([n2("wsfc-forecast-details")],A3);var Q5=class extends e1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return Z;let e=this.forecast.wind_speed||0,i=q6(this.forecast),o=this.radius,a=4,H=10,V=o+H,s=o+H,M=2*(o+H),p=Math.round(e),h=this.computeLineColor(),v=i;v!==void 0&&this.type==="direction"&&(v=(v+180)%360);let x=Number.isFinite(v),y=s-o,k=o*.55,O=y-k,E=o*.45;return _`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${M} ${M}"
        role="img"
        aria-label="${x?`Wind speed: ${p}, bearing: ${v} degrees`:`Wind speed: ${p}`}"
      >
        <circle
          cx="${V}"
          cy="${s}"
          r="${o}"
          stroke="${h}"
          stroke-width="${a}"
          fill="none"
        />
        ${x?y1` <g transform="rotate(${v} ${V} ${s})">
              <polygon
                points="${V-E},${y} ${V+E},${y} ${V},${O}"
                fill="${h}"
              />
            </g>`:Z}
        <text x="${V}" y="${s}" dy="0.1em">${p}</text>
      </svg>
    `}computeLineColor(){let e=U4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};Q5.styles=p1`
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
  `,Q([r1({attribute:!1})],Q5.prototype,"hass",2),Q([r1({attribute:!1})],Q5.prototype,"weatherEntity",2),Q([r1({attribute:!1})],Q5.prototype,"forecast",2),Q([r1({attribute:!1})],Q5.prototype,"size",2),Q([r1({attribute:!1})],Q5.prototype,"radius",2),Q([r1({attribute:!1})],Q5.prototype,"type",2),Q5=Q([n2("wsfc-wind-indicator")],Q5);var v3=class extends e1{createRenderRoot(){return this}render(){return this.forecast?_`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??Z}
      </div>
    `:Z}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?_`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),o=G8(e);return _`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${Q2({color:`var(${o})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return _`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;I5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};Q([r1({attribute:!1})],v3.prototype,"hass",2),Q([r1({attribute:!1})],v3.prototype,"weatherEntity",2),Q([r1({attribute:!1})],v3.prototype,"forecast",2),Q([r1({attribute:!1})],v3.prototype,"config",2),v3=Q([n2("wsfc-forecast-info")],v3);var K5=class extends e1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new I7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let o=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=o?.dataset.index?Number(o.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let o={selectedForecast:i,action:e.detail.action};a2(this,"action",o)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return Z;let e=[],i=B7(c5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),o;return this.forecast.forEach((a,H)=>{if(a.datetime){if(this.forecastType==="hourly"){let V=a3(this.hass,a.datetime);o!==V&&(o=V,e.push(_`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${V}</div>
            </div>`))}e.push(_`
        <div class="wsfc-forecast-slot" data-index=${H}>
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
      `)}}),_`
      <div
        class="${Q3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${o0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};Q([r1({attribute:!1})],K5.prototype,"hass",2),Q([r1({attribute:!1})],K5.prototype,"weatherEntity",2),Q([r1({attribute:!1})],K5.prototype,"forecast",2),Q([r1({attribute:!1})],K5.prototype,"forecastType",2),Q([r1({attribute:!1})],K5.prototype,"isTwiceDailyEntity",2),Q([r1({attribute:!1})],K5.prototype,"config",2),Q([r1({attribute:!1})],K5.prototype,"isScrollable",2),K5=Q([n2("wsfc-forecast-simple")],K5);var x3=class extends e1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=pn.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return Z;let e=this.getClasses(),i=this.getWeatherStateIcon();return _`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:o}=this.getCustomWeatherIconPath();return _` <img src="${i}" alt="${o}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?_`
        <div
          style="background-size: cover;${Q2({"background-image":e})}"
        ></div>
      `:pn.has(this.state)?_`${yh(this.state,this.isNightTime)}`:Z}};Q([r1({attribute:!1})],x3.prototype,"config",2),Q([r1({attribute:!1})],x3.prototype,"classes",2),Q([r1({attribute:!1})],x3.prototype,"isNightTime",2),Q([r1({attribute:!1})],x3.prototype,"state",2),x3=Q([n2("wsfc-weather-condition-icon-provider")],x3);var pn=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),gh=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),_h=new Set(["hail","rainy","pouring"]),Sh=new Set(["windy","windy-variant"]),wh=new Set(["snowy","snowy-rainy"]),bh=new Set(["lightning","lightning-rainy"]),yh=(r,t)=>y1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${r==="sunny"&&t?y1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:r==="sunny"?y1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${r==="clear-night"?y1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${r==="partlycloudy"&&t?y1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:r==="partlycloudy"?y1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${gh.has(r)?y1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${_h.has(r)?y1`
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
  ${r==="pouring"?y1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${Sh.has(r)?y1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${wh.has(r)?y1`
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
  ${bh.has(r)?y1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var g3=class extends e1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(Zh(e))||k5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return Z;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==Z);return e.length===0?Z:_`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return Z;let{name:i,entity:o,label:a,icon:H}=e,V;if(o?V=Y6(this.hass,this.weatherEntity,this.config,i,o):i&&(V=z7(this.hass,this.weatherEntity,this.config,i)),!V)return Z;let s=o?this.hass.states[o]||this.weatherEntity:this.weatherEntity,M=o?this.hass.states[o]:void 0,p=M&&!i?_`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${M}
              .icon=${H}
            ></ha-state-icon>
          `:_`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${s}
              .attribute=${i}
              .icon=${Ha(i,H,M)}
            ></ha-attribute-icon>
          `;return _`
      <div class="wsfc-current-attribute">
        ${p}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,M)}
        </span>
        <span class="wsfc-current-attribute-value">${V}</span>
      </div>
    `}resolveLabel(e,i,o){return i||(e&&I2.includes(e)?this.localize(e):o?.attributes?.friendly_name??(e?k5(e).replace(/_/g," "):""))}};Q([r1({attribute:!1})],g3.prototype,"hass",2),Q([r1({attribute:!1})],g3.prototype,"weatherEntity",2),Q([r1({attribute:!1})],g3.prototype,"attributeConfigs",2),Q([r1({attribute:!1})],g3.prototype,"config",2),g3=Q([n2("wsfc-current-weather-attributes")],g3);var Zh=C3(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var gr={...N5,precipitation:"mdi:weather-rainy"},W2=class extends e1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,o=i?{...this.config,entity:i}:this.config;I4(this,this.hass,o,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return Z;let{state:e}=this.weatherEntity,i=this.getTemperature(),o=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),H=this.getConfiguredAttributes(),V=this.config.name||this.weatherEntity.attributes.friendly_name;return _`
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
            ${V?_`<span class="wsfc-name wsfc-secondary">${V}</span>`:Z}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${i!==null?_`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${o0({stopPropagation:!0,hasHold:w0(this.config.hold_action),hasDoubleClick:w0(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${i}
                  </div>
                `:Z}
            ${o?_`
                  <div class="wsfc-current-secondary-info">
                    ${o.stateObj?_`
                          <ha-state-icon
                            class="wsfc-current-secondary-icon wsfc-secondary"
                            .hass=${this.hass}
                            .stateObj=${o.stateObj}
                            .icon=${o.icon}
                          ></ha-state-icon>
                        `:o.icon?_`
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
        ${H.length>0?_`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${H}
            ></wsfc-current-weather-attributes>`:Z}
      </div>
    `}isNightTime(){let e=b0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?I2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return C0(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?C0(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let s=typeof i=="string"?{name:i}:i,{name:M,entity:p,icon:h}=s;if(p){let v=Y6(this.hass,this.weatherEntity,this.config,M,p);if(v!=null){let x=this.hass.states[p];return M?{icon:h??x?.attributes?.icon??gr[M],value:v}:{stateObj:x,icon:h,value:v}}}else if(M&&M in this.weatherEntity.attributes){let x=gr[M],y=z7(this.hass,this.weatherEntity,this.config,M);if(y!=null)return{icon:h??x,value:y}}}let o=this.getTemperatureExtrema();if(o)return{value:`${o.high} / ${o.low}`};let a,H;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,H="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,H="humidity";else return null;return{icon:gr[H],value:this.hass.formatEntityAttributeValue(this.weatherEntity,H,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=F7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,o=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(F7(a.datetime)===e){let H=a.templow??a.temperature,V=a.temperature;H!=null&&H<i&&(i=H),V!=null&&V>o&&(o=V)}return i===1/0||o===-1/0?null:{high:C0(this.hass,this.weatherEntity,o,this.config.current?.temperature_precision),low:C0(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};Q([r1({attribute:!1})],W2.prototype,"hass",2),Q([r1({attribute:!1})],W2.prototype,"weatherEntity",2),Q([r1({attribute:!1})],W2.prototype,"hourlyForecast",2),Q([r1({attribute:!1})],W2.prototype,"dailyForecast",2),Q([r1({attribute:!1})],W2.prototype,"config",2),W2=Q([n2("wsfc-current-weather")],W2);var un=`:host {
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
`;var mn="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var hn=p1`
  ${x0(un)}

  :host {
    --moon-texture: url("${x0(mn)}");
  }
`;var w9=10,Oh=3,Y8=14,Th=75,Ph=75,Eh=4,Fh=3,fn=2,$h=[1.45,.7],An=90,Rh=50,Dh=.15,X5=class extends e1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],o=Math.round(i?.contentRect.height||0);this._containerHeight!==o&&(this._containerHeight=o,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),o=this.hass?.themes?.darkMode;i?.themes?.darkMode!==o&&(this._isDark=o??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?_`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return Z}})}
    `:Z}computeParticles(){let e=[];return this.getActiveEffects().forEach(o=>{switch(o){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/w9*Th),a=Math.max(5,o),H=115/a;for(let V=0;V<a;V++){let s=-15+V*H+z1(0,H*.5),M=Math.random(),p=M*5+2,h=4.5/(M+.5)+z1(0,.8),v=z1(0,5,!0).toFixed(1),x=M*.7+.5,y=M<.3?1.5-M*3:M>.9?.5:0,k=p*.9,O=(10+M*25).toFixed(0),E=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${s.toFixed(1)}%`,delay:v,duration:h.toFixed(1),size:p.toFixed(0),opacity:x.toFixed(1),blur:y.toFixed(1),shadowSpread:k.toFixed(1),driftAmplitude:O,driftFrequency:E})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/w9*Ph),a=Math.max(10,o),H=100/a;for(let V=0;V<a;V++){let s=V*H+z1(0,H*.8),M=z1(.2,.5,!0),p=z1(.4,.7,!0),h=z1(.85,1,!0),v=this._containerHeight*h;i.push({type:"rain",x:`${s.toFixed(1)}%`,delay:M.toFixed(2),duration:p.toFixed(2),landingPosY:v.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let H=0;H<30;H++){let V=H%6,s=Math.floor(H/6),M=100/6,p=30/5,h=z1(V*M+M*.15,(V+1)*M-M*.15),v=z1(s*p+p*.15,(s+1)*p-p*.15),x=z1(1,3),y=z1(.3,1,!0),k=z1(0,5,!0);e.push({type:"star",x:`${h.toFixed(0)}`,y:`${v.toFixed(0)}`,size:`${x}`,opacity:y.toFixed(2),delay:k.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let o=new Set,a=M=>i===!0?!0:Array.isArray(i)?i.includes(M):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&o.add("rain"),e.includes("snowy")&&a("snow")&&o.add("snow"),e.includes("lightning")&&a("lightning")&&o.add("lightning");let H=e==="sunny"||e==="clear-night",V=e==="cloudy",s=e==="partlycloudy";return(H||s||V)&&a("sky")&&o.add("sky"),(H||s)&&(this.isNightTime()?a("moon")&&o.add("moon"):a("sun")&&o.add("sun")),(V||s)&&a("cloud")&&o.add("cloud"),Array.from(o)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?b0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return _`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return _`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>_`<div
                class="sun-ray"
                style="${Q2({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${z1(0,360)}`,height:`${z1(100,200)}`,width:`${z1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),o=e?Eh:Fh,a=100/o,H=[];for(let V=0;V<o;V++){let s=V%fn,M=s===0,p=V*a+z1(0,a*.5)-a*.25,h=e?M?z1(140,200):z1(215,285):M?z1(110,165):z1(180,240),v=h*z1(.38,.5,!0),x=e?M?z1(-26,-12):z1(-16,-2):M?z1(-10,4):z1(-4,12),y=e?M?z1(.36,.5,!0):z1(.5,.64,!0):M?z1(.68,.8,!0):z1(.82,.92,!0);i&&(y*=.7),H.push({type:"cloud",variant:e?"grey":"white",night:i,layer:s,shape:z1(1,5),flip:z1(0,1)===1,x:p.toFixed(1),y:x.toFixed(0),width:h.toFixed(0),height:v.toFixed(0),opacity:y.toFixed(2)})}return H}computeCloudDrift(){let e=this.currentForecast,i=e&&U4(this.hass,this.weatherEntity,e)||0,o=Math.min(i,Y8)/Y8,a=e?q6(e):void 0,H=a!==void 0?-Math.sin(a*Math.PI/180):0,V=Math.max(Dh,o*Math.abs(H));return{duration:An-V*(An-Rh),driftRight:H>=0}}renderCloudFilter(){return _`
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
    `}renderClouds(){let e=this._particles.filter(H=>H.type==="cloud");if(!e.length)return Z;let{duration:i,driftRight:o}=this.computeCloudDrift(),a=H=>{let V=["cloud",`cloud-shape-${H.shape}`,H.variant==="grey"?"grey":"",H.night?"night":""].filter(Boolean).join(" ");return _`<div
        class="${V}"
        style="${Q2({left:`${H.x}%`,top:`${H.y}px`,width:`${H.width}px`,height:`${H.height}px`,opacity:H.opacity,transform:H.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return _`
      ${this.renderCloudFilter()}
      ${Array.from({length:fn},(H,V)=>{let s=e.filter(p=>p.layer===V);if(!s.length)return Z;let M=Math.round(i*($h[V]??1)/5)*5;return _`<div
          class="cloud-track ${o?"drift-right":""}"
          style="${Q2({"--cloud-drift-duration":`${M}s`})}"
        >
          <div class="cloud-set">${s.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${s.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>_`
        <div
          class="snowflake-path"
          style="${Q2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>_`
        <div
          class="raindrop-path"
          style="${Q2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return _` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:jC(this.hass,new Date);return _`
      ${this._particles.filter(i=>i.type==="star").map(i=>_`
          <div
            class="star"
            style="${Q2({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?oe(e.fraction,e.litRight):oe(1,!0);return _`
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
    `}renderMoonPhase(e){return e?_`
      <svg
        class="moon-phase"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d=${GC(e.fraction,e.litRight)}></path>
      </svg>
    `:Z}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=c5(this.hass,this.weatherEntity,"precipitation"),o=B7(i,"hourly");if(o>0){let a=e/o*w9;return Math.min(w9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?w9:Oh}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let o=U4(this.hass,this.weatherEntity,i)||0,a=e?15:35,H=Math.min(o,Y8)/Y8,V=i.wind_bearing*Math.PI/180,s=Math.sin(V),p=Math.pow(H,e?.8:.5);return s*p*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};X5.styles=hn,Q([r1({attribute:!1})],X5.prototype,"hass",2),Q([r1({attribute:!1})],X5.prototype,"weatherEntity",2),Q([r1({attribute:!1})],X5.prototype,"currentForecast",2),Q([r1({attribute:!1})],X5.prototype,"config",2),Q([Y2()],X5.prototype,"_isDark",2),Q([Y2()],X5.prototype,"_containerHeight",2),X5=Q([n2("wsfc-animation-provider")],X5);var vn={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},zh=1e3,u2=class extends e1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):I4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{I4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),o=i.find(a=>a==="weather.home")||i[0]||"";return{...vn,entity:o}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>Y3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>Y3))throw new Error(`temperature_precision must be 0 or greater and at most ${Y3}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=W3({},vn,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:o}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:o}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,o=this.config?.forecast?.mode==="chart",a=1,H=1;return e&&(a+=2,H+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(o?(a+=3,H+=3):(a+=2,H+=2)),{rows:a,minRows:H,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return RC(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return Z;let e=this.config.entity,i=this.hass.states[e];if(!i)return _`<hui-warning>
        ${IC(this.hass,e)}
      </hui-warning>`;let o=O5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",H=this.getCurrentForecast();return _`
      <ha-card>
        ${this.config.show_condition_effects?_`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${i}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData?.[0]}
            ></wsfc-animation-provider>`:Z}
        <div class="wsfc-container">
          ${this.config.show_current?_`<div
                class="wsfc-current-weather-container"
                .actionHandler=${o0({hasHold:w0(this.config.hold_action),hasDoubleClick:w0(this.config.double_tap_action)})}
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
          ${this.config.show_forecast===!1?Z:_`<div class="wsfc-forecast-container">
                ${a?_`<wsfc-forecast-chart
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${H}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:_`<wsfc-forecast-simple
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${H}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-simple>`}
              </div>`}
        </div>
      </ha-card>
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,o=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:o}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let o=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,H=de(i,this._hourlyForecastEvent,"hourly"),V=de(i,this._dailyForecastEvent,O5(e));if(!H&&!V)return;this._dailyForecastData=V?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let s=this.config?.forecast?.hourly_group_size||0;s>1&&H?.forecast?this._hourlyForecastData=aa(H.forecast,s):this._hourlyForecastData=H?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let M=this.getCurrentForecast();if(!M||M.length===0){let v=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,x=O5(e),y=x!==void 0,k=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(v||this._currentForecastType==="hourly"&&!W4(e,"hourly")||k&&!y)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(I5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=x||"daily"):k&&this._hourlyForecastData&&(I5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let p=this.getCurrentForecast().length,h=(this._currentForecastType==="hourly"?o:a)??0;p!==h&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",o=i,a=o?this._hourlyForecastData:this._dailyForecastData,H=this.hass?.states[this.config.entity],V=O5(H)||"daily";if(!a||a.length===0){I5.debug(`Cannot toggle to ${o?"hourly":V} forecast - no data available`);return}this._currentForecastType=i?"hourly":V,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(o)this.scrollToForecastItem(e);else{let s=this._dailyForecastData?.[0];s&&this.scrollToForecastItem(s,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let o=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!o)return;let a=F7(e.datetime),H=this.getCurrentForecast(),V=H.findIndex(h=>F7(h.datetime)===a),s=V!==-1?V:H.length-1,M=this._currentItemWidth||0,p=s*M;o.scrollTo({left:p,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},zh)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let o=await e;if(!o)return;await o()}catch(o){if(le(o))return;I5.warn(`Error unsubscribing from ${i} forecast:`,o)}}createForecastSubscription(e,i,o){return Promise.resolve(ra(this.hass,this.config.entity,e,i)).catch(a=>{if(XC(a)){setTimeout(o,2e3);return}le(a)||I5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!oa(this.hass.states[this.config.entity])){I5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let o=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",H=a!=="hourly",V=a!=="daily",s=O5(o);s==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!H&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!V&&this._currentForecastType==="hourly"&&(this._currentForecastType=s||"daily"),s&&H&&(this._dailySubscription=this.createForecastSubscription(s,M=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=M,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),V&&W4(o,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",M=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=M,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let o=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/o),H=i.length,V=H*a,s=e-V,M=s>0?s/(H-1):0;this._currentItemWidth=a+M,this._isScrollable=i.length>o,this._haCard.style.setProperty("--forecast-item-gap",`${M}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],H=o.states[this.config.entity];return!a||!H?!1:Object.values(ce).some(V=>a.attributes[V]!==H.attributes[V])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),o=this.hass;return i?.connected===!1&&o?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],H=o.states[this.config.entity];return!a||!H?!1:a.attributes.supported_features!==H.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!o)return!1;let a=i?.states[this.config.entity],H=o.states[this.config.entity];return!!a!=!!H}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),o=this.hass;return!i||!o?!1:YC(this.config).some(a=>i.states[a]!==o.states[a])}};u2.styles=EC,Q([r1({attribute:!1})],u2.prototype,"hass",2),Q([Y2()],u2.prototype,"config",2),Q([Y2()],u2.prototype,"_dailyForecastEvent",2),Q([Y2()],u2.prototype,"_hourlyForecastEvent",2),Q([Y2()],u2.prototype,"_currentItemWidth",2),Q([Y2()],u2.prototype,"_currentForecastType",2),Q([Y2()],u2.prototype,"_isScrollable",2),Q([z4("ha-card")],u2.prototype,"_haCard",2),Q([z4(".wsfc-forecast-container")],u2.prototype,"_forecastContainer",2);var M0=x4(N4(),1);var xn="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var gn="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var Ih={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},J5=class extends e1{constructor(){super(...arguments);this._schema=C3((e,i,o)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(o),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:j6.map(i=>({value:i,label:k5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:I2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||k5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:I2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||k5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:G6.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||k5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],o=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),o.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),o.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:o},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(o=>{let a=Ih[o];return[{name:`current.attribute_entity_${o}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${o}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${o}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:Y3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:Y3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=H7(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=H7(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let o=H7(this._config.current?.show_attributes);o[e]=i.detail.value,this._commitCustomAttributes(o)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let o=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||k5(o).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let o=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||k5(o).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let o=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${o}`)||k5(o).replace(/_/g," "),H=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${H}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let o=this.hass.states[this._config.entity];o&&(i=this.hass.formatEntityAttributeName(o,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return Z;let e=Q8(this._config),i=this._getSelectedAttributes(e),o=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return _`
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
    `}_renderCustomAttributes(){let e=H7(this._config.current?.show_attributes);return _`
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
            <ha-svg-icon slot="start" .path=${gn}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,i){return _`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Nh}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${o=>this._customAttributeChanged(i,o)}
        ></ha-form>
        <ha-icon-button
          .path=${xn}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:Uh(this._config.current?.show_attributes,e)}};a2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let o=jh(i);if(delete o.temperature_entity,o?.forecast?.extra_attribute==="none"&&delete o.forecast.extra_attribute,Array.isArray(o.show_condition_effects)&&j6.every(H=>o.show_condition_effects.includes(H))&&(o.show_condition_effects=!0),o?.current){let a={},H={},V={};for(let s of Object.keys(o.current))if(s.startsWith("attribute_entity_")){let M=s.replace("attribute_entity_",""),p=o.current[s];p&&(a[M]=p),delete o.current[s]}else if(s.startsWith("attribute_label_")){let M=s.replace("attribute_label_",""),p=o.current[s];p&&(H[M]=p),delete o.current[s]}else if(s.startsWith("attribute_icon_")){let M=s.replace("attribute_icon_",""),p=o.current[s];p&&(V[M]=p),delete o.current[s]}if(Array.isArray(o.current.show_attributes)){let s=H7(this._config?.current?.show_attributes);o.current.show_attributes=_n(o.current.show_attributes,{entity:a,label:H,icon:V},s)}}a2(this,"config-changed",{config:o})}};J5.styles=p1`
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
  `,Q([r1({attribute:!1})],J5.prototype,"hass",2),Q([Y2()],J5.prototype,"_config",2),J5=Q([n2("wsfc-flex-core-editor")],J5);var n7=r=>typeof r=="string"&&I2.includes(r),H7=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")n7(e)||t.push({name:e});else if(typeof e=="object"){let i=e;n7(i.name)||t.push(i)}}return t},_n=(r,t,e)=>{let i=I2.every(H=>r.includes(H)),o=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!o&&i?!0:[...r.map(H=>{let V=t.entity[H],s=t.label[H],M=t.icon[H];return V||s||M?{name:H,...V?{entity:V}:{},...s?{label:s}:{},...M?{icon:M}:{}}:H}),...e]},Nh=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],Wh=r=>{if(r===!0)return[...I2];if(typeof r=="string")return n7(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")n7(e)&&t.push(e);else if(typeof e=="object"){let i=e;n7(i.name)&&t.push(i)}}return t},Uh=(r,t)=>{let e=Wh(r),i=[],o={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(o.entity[a.name]=a.entity),a.label&&(o.label[a.name]=a.label),a.icon&&(o.icon[a.name]=a.icon));return _n(i,o,t)},jh=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[o,a]=i;!o||!a||((!t[o]||typeof t[o]!="object")&&(t[o]={}),t[o][a]=r[e],delete t[e])}return t},Q8=r=>{let t=Gh(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...j6]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...I2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let o of e)if(typeof o=="string")n7(o)&&i.push(o);else if(typeof o=="object"&&o!==null){let a=o;n7(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},Gh=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast.${o}`]=i[o];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`current.${o}`]=i[o];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast_action.${o}`]=i[o];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(c=>c.id),i=Object.fromEntries(t.map(c=>[c.id,c.label])),o={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],H=(c,m,d)=>Math.min(d,Math.max(m,c)),V=c=>typeof c=="number"&&isFinite(c),s={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function M(c){return s[c]||"mdi:weather-cloudy"}let p=["temps","icons","extra"],h={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function v(c){let m=Array.isArray(c.forecast_row_order)?c.forecast_row_order.filter(d=>p.includes(d)):null;(!m||!m.length)&&(m=(c.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let d of p)m.includes(d)||m.push(d);return m}let x={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},y=Object.keys(x);function k(c){let m=c&&c.forecast_extra,d;Array.isArray(m)?d=m:typeof m=="string"&&m&&m!=="none"?d=[m]:d=[];let A=new Set(d.filter(g=>x[g]));return y.filter(g=>A.has(g))}let O=["temps","icons",...y],E=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(y.map(c=>[c,x[c].label]))),$=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function R(c){c=c||{};let m={},d;if(Array.isArray(c.forecast_metric_order)&&c.forecast_metric_order.length){d=c.forecast_metric_order.filter(g=>O.includes(g));let A=c.forecast_metric_pos||{};for(let g of O)m[g]=A[g]||"hidden"}else{m.temps=c.forecast_temps||"hidden",m.icons=c.forecast_icons||"hidden";let A=k(c),g=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let b of y)m[b]=A.includes(b)?g:"hidden";let w=v(c);d=[];for(let b of w)b==="extra"?d.push(...y):d.push(b)}for(let A of O)d.includes(A)||d.push(A);for(let A of O)m[A]||(m[A]="hidden");return d.map(A=>({key:A,pos:m[A]}))}function K(c,m){if(!c||!m)return null;let d=x[c],A=m[c];return c==="wind_direction"&&(A=m.wind_direction!=null?m.wind_direction:m.wind_bearing),A==null||A===""?null:d&&d.arrow?"":(typeof A=="number"&&(A=Math.round(A)),A+(d&&d.unit||""))}function G(c,m){if(c==="wind_direction")return(x.wind_bearing||{}).icon;let d=x[c];return d?d.icon:""}let c1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function J(c,m){if(m){let d=c1[c];if(d&&o[d]&&o[d].icon)return o[d].icon}return G(c)}function a1(c){return c==="below"||c==null?0:c==="above"?100:c==="mid"?50:H(Number(c)||0,0,100)}function i1(c,m){m=m||0;let d="  ".repeat(m),A=g=>{if(g==null)return"null";if(typeof g=="boolean"||typeof g=="number")return String(g);let w=String(g);return w===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(w)||/^\s|\s$/.test(w)||/^(true|false|null|yes|no|~)$/i.test(w)||/^[\d.+-]/.test(w)?'"'+w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':w};if(Array.isArray(c))return c.length?c.map(g=>{if(g&&typeof g=="object"){let w=i1(g,m+1).replace(/^\s+/,"");return d+"- "+w}return d+"- "+A(g)}).join(`
`):d+"[]";if(c&&typeof c=="object"){let g=Object.keys(c);return g.length?g.map(w=>{let b=c[w];return b&&typeof b=="object"&&(Array.isArray(b)?b.length:Object.keys(b).length)?d+w+`:
`+i1(b,m+1):b&&typeof b=="object"?d+w+": "+(Array.isArray(b)?"[]":"{}"):d+w+": "+A(b)}).join(`
`):d+"{}"}return d+A(c)}function m1(c){try{return typeof q3=="function"&&q3(c)||c.language||navigator.language||"en"}catch{return"en"}}function N1(c){let m=c&&c.config||{};return{lat:m.latitude,lng:m.longitude}}function k1(c,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(m1(c),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function L2(c,m){let d=m instanceof Date?m:new Date;try{if(typeof b0=="function"){let w=b0(c,d);if(w&&w.sunrise&&w.sunset)return{sunrise:new Date(w.sunrise),sunset:new Date(w.sunset)}}}catch{}let{lat:A,lng:g}=N1(c);if(V(A)&&V(g)&&typeof M0=="object"&&M0.getTimes)try{let w=M0.getTimes(d,A,g);return{sunrise:w.sunrise,sunset:w.sunset}}catch{}return{sunrise:null,sunset:null}}function G1(c,m){let{lat:d,lng:A}=N1(c);if(!V(d)||!V(A)||typeof M0!="object"||!M0.getPosition)return null;try{return M0.getPosition(m,d,A).altitude}catch{return null}}function O1(c){if(c==null)return .5;let m=c*180/Math.PI;return m>=0?H(.42+.58*Math.sin(c),.42,1):m>-12?H(.42*(m+12)/12,0,.42):0}let X=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function q1(c){c=H(c,0,1);let m=X[0],d=X[X.length-1];for(let b=0;b<X.length-1;b++)if(c>=X[b].at&&c<=X[b+1].at){m=X[b],d=X[b+1];break}let A=d.at-m.at||1,g=(c-m.at)/A,w=b=>Math.round(m.c[b]+(d.c[b]-m.c[b])*g);return[w(0),w(1),w(2)]}function n1(c){if(typeof c!="string")return null;let m=c.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(d=>d+d).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let U=c=>`rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`,t1=(c,m,d)=>c.map((A,g)=>A+(m[g]-A)*d);function V1(c,m){c=H(c,0,1);let d,A=m&&n1(m.day_color),g=m&&n1(m.night_color);A||g?d=t1(g||[11,16,38],A||[206,227,255],c):d=q1(c);let w=m&&V(m.cloud)?H(m.cloud,0,1):0;if(w>0){let b=.5*(d[0]+d[1]+d[2]),P=[b*.75+40,b*.75+42,b*.78+48];d=t1(d,P,w*.6)}return U(d)}function h1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function s1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function L1(c){return{font_size:c,font_weight:"400",color:""}}function w1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function T1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function m2(c,m){if(c==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let d=A=>`0 0 2px ${A}, 0 0 4px ${A}, 1px 1px 2px ${A}`;return c==="outline"?d("rgba(0,0,0,0.85)"):c==="auto"?d(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let v2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function T2(c){let m=c&&c.show_forecast!==!1,d=c&&c.default_forecast||"daily",A=a.map(P=>({key:P,show:!0})),g=h1,w=w1,b=s1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:c?c.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...T1(),...w(),...g(),...b()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:A,...w(),...g(),...b()},hourly:{show:m&&d==="hourly",...w(),...g(),...b()},daily:{show:m&&d!=="hourly",...w(),...g(),...b()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...w(),...g(),...b()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...w(),...g(),...b()}}}function l2(c){let m=T2(c),d=c&&c.wfc||{},A={order:Array.isArray(d.order)&&d.order.length?d.order.slice():m.order,card:{...m.card,...d.card||{}},current:{...m.current,...d.current||{}},details:{...m.details,...d.details||{}},hourly:{...m.hourly,...d.hourly||{}},daily:{...m.daily,...d.daily||{}},sun_position:{...m.sun_position,...d.sun_position||{}},sun_arc:{...m.sun_arc,...d.sun_arc||{}},editor_accordion:d.editor_accordion!==!1},g=Array.isArray(d.details&&d.details.items)?d.details.items.slice():m.details.items.slice();g=g.filter(b=>b&&o[b.key]),A.details.items=g.length?g:m.details.items,A.details.columns=H(parseInt(A.details.columns,10)||2,1,4);let w=new Set(A.details.items.map(b=>b.key));return Object.keys(o).forEach(b=>{w.has(b)||A.details.items.push({key:b,show:!1})}),["sun_position","sun_arc"].forEach(b=>{let P=d[b]||{};P.flush!==void 0&&(P.flush_top===void 0&&(A[b].flush_top=!!P.flush),P.flush_bottom===void 0&&(A[b].flush_bottom=!!P.flush),P.flush_edges===void 0&&(A[b].flush_edges=!!P.flush))}),e.forEach(b=>{A.order.includes(b)||A.order.push(b)}),A.order=A.order.filter(b=>e.includes(b)),A}let l1=u2.prototype;if(typeof W2<"u"&&W2&&W2.prototype&&W2.prototype.getSecondaryWeatherAttribute){let c=W2.prototype.getSecondaryWeatherAttribute;W2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:c.call(this)}}let J2=l1.setConfig;l1.setConfig=function(c){let m=l2(c),d=m.sun_position||{},A=d.forecast_extra,w=!!(!!(d.show||m.sun_arc&&m.sun_arc.show&&m.sun_arc.baseline_mode==="sky")&&(d.weather_adjust!==!1||[d.forecast_temps,d.forecast_icons].some(I=>I&&I!=="hidden")||(Array.isArray(A)?A.length:A&&A!=="none")||Object.values(d.forecast_metric_pos||{}).some(I=>I&&I!=="hidden"))),b=!!(m.hourly.show||w),P=!!(b||m.daily.show),D=b&&m.daily.show?"both":b?"hourly":"daily",N={...c,show_current:m.current.show||!P,show_forecast:P};P&&(D==="both"||!c.forecast_types||w)&&(N.forecast_types=D),J2.call(this,N),this.config.show_current=!!m.current.show,this.config.show_forecast=P,N.forecast_types&&(this.config.forecast_types=N.forecast_types),this.__wfcCfgSrc=void 0};let U2=l1.updated;l1.updated=function(c){U2&&U2.call(this,c),this.isConnected&&this._wfcSyncForecastSources()};let h5=l1.disconnectedCallback;l1.disconnectedCallback=function(){h5&&h5.call(this),this._wfcTeardownForecastSources()};let P2=l1.shouldUpdate;l1.shouldUpdate=function(c){if(P2&&P2.call(this,c))return!0;if(c&&c.has("hass")&&this.config){let m=c.get("hass"),d=this.hass;if(m&&d){let A=new Set;for(let g of this._wfcSources())if(g.overrides&&Object.values(g.overrides).forEach(w=>w&&A.add(w)),Q1(g.ref)){let w=I0(this.config,this.hass,g2(g.ref));Object.values(w).forEach(b=>b&&A.add(b))}else g.ref&&A.add(g.ref);for(let g of A)if(m.states[g]!==d.states[g])return!0}}return!1},l1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=l2(this.config)),this.__wfcCfg},l1.computeRowSizing=function(){let c=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",d={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let b=(c.details.items||[]).filter(P=>P.show).length;return Math.max(1,Math.ceil(b/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(c.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(c.sun_arc.height)||90)+24)/56))},A=1,g=4;c.order.filter(b=>c[b]&&c[b].show&&d[b]).forEach(b=>{A+=d[b](),(b==="hourly"||b==="daily")&&(g=6)});let w=Math.max(1,A-1);return{rows:A,minRows:w,minColumns:g}},l1.render=function(){if(!this.config||!this.hass)return Z;let c=this.config.entity,m=this.hass.states[c];if(!m){let D=this.hass,N=D?D.config&&D.config.state!=="NOT_RUNNING"?`${D.localize("ui.card.common.entity_not_found")}: ${c}`:D.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return _`<hui-warning>${N}</hui-warning>`}let d=this._wfc(),A=typeof O5=="function"&&O5(m)==="twice_daily",g=this.config.forecast&&this.config.forecast.mode==="chart",w={stateObj:m,isTwice:A,chart:g},P=d.order.filter(D=>d[D]&&d[D].show).map(D=>{let N=this._wfcRenderSection(D,d,w);if(N===Z||N==null)return null;let I=d[D]||{},H1="wsfc-section";I.flush_top&&(H1+=" wsfc-flush-top"),I.flush_bottom&&(H1+=" wsfc-flush-bottom"),I.flush_edges&&(H1+=" wsfc-flush-edges");let u1=this._wfcBackgroundStyle(I);return _`<div class=${H1} data-section-id=${D} style=${u1}>
          ${this._wfcRenderTitle(I)}${N}
        </div>`}).filter(Boolean);return _`
      <ha-card>
        ${this.config.show_condition_effects?_`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${m}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:Z}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(d)}
        ${this._wfcCardAppearanceStyle(d)}
        <div class="wsfc-container">${P}</div>
      </ha-card>
    `},l1._wfcDividerStyle=function(c){let m=[];return c.order.forEach(d=>{let A=c[d];if(!A||!A.show||!A.divider_above&&!A.divider_below)return;let g=`.wsfc-section[data-section-id="${d}"]`,w=A.divider_color||"var(--divider-color, #4a4a4a)",b=`${g}{position:relative;}`,P=D=>["solid","dashed","dotted","double"].includes(D)?D:"solid";if(A.divider_above){let D=Number(A.divider_above_width)||1,N=H(Number(A.divider_above_length)||100,1,100),I=P(A.divider_above_style);b+=`${g}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${g}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${N}%;border-top:${D}px ${I} ${w};}`}if(A.divider_below){let D=Number(A.divider_below_width)||1,N=H(Number(A.divider_below_length)||100,1,100),I=P(A.divider_below_style);b+=`${g}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${g}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${N}%;border-bottom:${D}px ${I} ${w};}`}m.push(b)}),m.length?_`<style>${m.join("")}</style>`:Z},l1._wfcCardAppearanceStyle=function(c){let m=c&&c.card||{},d=[];if(m.border_enabled){let g=Math.max(0,Number(m.border_width)||1),w=m.border_color||"var(--primary-color, #2196f3)",b=P=>P!==!1?`${g}px solid ${w}`:"none";d.push(`border-top:${b(m.border_top)}`),d.push(`border-bottom:${b(m.border_bottom)}`),d.push(`border-left:${b(m.border_left)}`),d.push(`border-right:${b(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let g=`${Number(m.border_radius)}px`,w=b=>b!==!1?g:"0";d.push(`border-radius:${w(m.corner_tl)} ${w(m.corner_tr)} ${w(m.corner_br)} ${w(m.corner_bl)}`)}m.bg_color&&d.push(`background:${m.bg_color}`);let A=[];if(m.glow_enabled){let g=m.glow_color||"var(--primary-color, #2196f3)",w=H(Number(m.glow_intensity)||1,.2,3),b=(12*w).toFixed(1),P=(-4*w).toFixed(1),D=(4*w).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?A.push(`0 0 ${b}px ${P}px ${g}`):(m.border_top!==!1&&A.push(`0 -${D}px ${b}px ${P}px ${g}`),m.border_bottom!==!1&&A.push(`0 ${D}px ${b}px ${P}px ${g}`),m.border_left!==!1&&A.push(`-${D}px 0 ${b}px ${P}px ${g}`),m.border_right!==!1&&A.push(`${D}px 0 ${b}px ${P}px ${g}`))}if(m.shadow_enabled){let g=x2(m.shadow_color||"#000000",H((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";A.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${g}`)}return A.length&&d.push(`box-shadow:${A.join(", ")}`),d.length?_`<style>ha-card{${d.join(";")};}</style>`:Z},l1._wfcBackgroundStyle=function(c){if(!c||!c.background_enabled)return"";let m=H(c.background_opacity==null?80:Number(c.background_opacity),0,100),d=(100-m)/100,A=100-m,g=c.background_color||"",w;g?w=x2(g,d)||g:w=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${A}%, transparent)`;let b=c.flush_edges?"0":"8px";return`background-color:${w};border-radius:${b};`};function x2(c,m){if(typeof c!="string")return null;let d=c.trim().replace(/^#/,"");if(d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),!/^[0-9a-fA-F]{6}$/.test(d))return null;let A=parseInt(d.slice(0,2),16),g=parseInt(d.slice(2,4),16),w=parseInt(d.slice(4,6),16);return`rgba(${A}, ${g}, ${w}, ${m})`}l1._wfcRenderTitle=function(c){if(!c||!c.title_show)return Z;let m=c.title_text||"",d=c.title_icon||"",A=c.title_text_align||"left",g=c.title_icon_align||"left",w=!!m&&A!=="hide",b=!!d&&g!=="hide";if(!w&&!b)return Z;let P=(c.title_icon_color?`color:${c.title_icon_color};`:"")+(c.title_icon_size?`--mdc-icon-size:${c.title_icon_size}px;width:${c.title_icon_size}px;height:${c.title_icon_size}px;`:""),D=(c.title_color?`color:${c.title_color};`:"")+(c.title_font_size?`font-size:${c.title_font_size}px;`:"")+(c.title_font_weight?`font-weight:${c.title_font_weight};`:""),N=b?_`<ha-icon class="wsfc-title-icon" .icon=${d} style=${P}></ha-icon>`:Z,I=w?_`<span class="wsfc-title-text" style=${D}>${m}</span>`:Z,H1=W=>{let _1=[];return b&&g===W&&_1.push(N),w&&A===W&&_1.push(I),_1},u1=Number(c.title_indent)||0;return _`<div class="wsfc-title-row" style="padding-left:${u1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${H1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${H1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${H1("right")}</span>
    </div>`},l1._wfcRenderSection=function(c,m,d){switch(c){case"current":return this._wfcRenderCurrent(d);case"details":return this._wfcRenderDetails(m,d);case"hourly":return this._wfcRenderForecast("hourly",d);case"daily":return this._wfcRenderForecast("daily",d);case"sun_position":return this._wfcRenderSunPosition(m,d);case"sun_arc":return this._wfcRenderSunArc(m,d);default:return Z}},l1._wfcRenderCurrent=function(c){let d=this._wfc().current||{},A=Number(d.header_state_size)||0,g=Number(d.header_temp_size)||0,w=Number(d.header_icon_size)||0,b=(w?`--current-conditions-icon-size:${w}px;`:"")+(A||g?`--wfc-hdr-state:${A?A+"px":"inherit"};--wfc-hdr-temp:${g?g+"px":"inherit"};`:""),P=_`
      <div
        class="wsfc-current-weather-container${A||g?" wsfc-hdr-sized":""}"
        style=${b||Z}
        .actionHandler=${o0({hasHold:w0(this.config.hold_action),hasDoubleClick:w0(this.config.double_tap_action)})}
        @action=${this.onCardAction}
      >
        <wsfc-current-weather
          class=${(this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?"wsfc-hide-secondary":""}
          .hass=${this.hass}
          .weatherEntity=${this._wfcMergedCurrentEntity(c.stateObj)}
          .config=${this.config}
          .hourlyForecast=${this._hourlyForecastData}
          .dailyForecast=${this._dailyForecastData}
        ></wsfc-current-weather>
      </div>
    `,D=!!d.clock_show_time,N=!!d.clock_show_date;if(!D&&!N)return P;this._wfcEnsureClockTimer();let I=E1=>E1==="above"?"above-center":E1==="below"?"below-center":E1||"right",H1=I(d.clock_placement),u1=d.clock_date_placement==="with_time"||!d.clock_date_placement?H1:I(d.clock_date_placement),W=D?this._wfcRenderClockTime(d):null,_1=N?this._wfcRenderClockDate(d):null,K1=D&&N&&(d.clock_date_placement==="with_time"||!d.clock_date_placement),U1={},R1=(E1,E2)=>{E2&&(U1[E1]=U1[E1]||[]).push(E2)};K1?R1(H1,_`<div class="wsfc-clock">${W}${_1}</div>`):(W&&R1(H1,_`<div class="wsfc-clock">${W}</div>`),_1&&R1(u1,_`<div class="wsfc-clock">${_1}</div>`));let d1=E1=>{let E2=[];return["left","center","right"].forEach(L5=>{let h2=E1+"-"+L5;U1[h2]&&E2.push(_`<div class="wsfc-clock-band-cell wsfc-cb-${L5}">${U1[h2]}</div>`)}),E2.length?_`<div class="wsfc-clock-band">${E2}</div>`:Z},S1=d1("above"),_2=d1("below"),s5=U1.left||Z,j2=[].concat(U1.right||[],U1.center||[]),f1=U1.left&&U1.left.length||j2.length?_`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${s5}
          <div class="wsfc-cur-grow">${P}</div>
          ${j2.length?j2:Z}
        </div>`:P;return _`<div class="wsfc-cur-stack">${S1}${f1}${_2}</div>`},l1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let c=this.__wfcCfg||(this.config?l2(this.config):null),m=c&&c.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},l1._wfcRenderClockTime=function(c){let m=new Date,d=m1(this.hass),A={hour:"2-digit",minute:"2-digit"};c.clock_show_seconds&&(A.second="2-digit"),c.clock_format==="12"?A.hour12=!0:c.clock_format==="24"&&(A.hour12=!1);let g;try{g=m.toLocaleTimeString(d,A)}catch{g=m.toTimeString().slice(0,c.clock_show_seconds?8:5)}c.clock_format==="12"&&(g=g.replace(/^0/,""));let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),b=m2(c.clock_contrast,w),P=`font-size:${H(Number(c.clock_font_size)||28,8,100)}px;font-weight:${c.clock_font_weight||"500"};`+(c.clock_color?`color:${c.clock_color};`:"")+(c.clock_font_family?`font-family:${c.clock_font_family};`:"")+(b?`text-shadow:${b};`:"");return _`<div class="wsfc-clock-time" style=${P}>${g}</div>`};function n5(c,m,d){let A=D=>D<10?"0"+D:""+D,g=c.toLocaleDateString(d,{month:"long"}),w=c.toLocaleDateString(d,{month:"short"}),b=c.toLocaleDateString(d,{weekday:"long"}),P={YYYY:""+c.getFullYear(),YY:A(c.getFullYear()%100),MONTH:g,MON:w,WDAY:b,MM:A(c.getMonth()+1),M:""+(c.getMonth()+1),DD:A(c.getDate()),D:""+c.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,D=>P[D]!=null?P[D]:D)}l1._wfcRenderClockDate=function(c){let m=new Date,d=m1(this.hass),A=v2.find(N=>N.value===c.clock_date_format)||v2[0],g;try{g=A.pattern?n5(m,A.pattern,d):m.toLocaleDateString(d,A.opts)}catch{g=m.toDateString()}let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),b=c.clock_date_contrast!=null?c.clock_date_contrast:c.clock_contrast,P=m2(b,w),D=`font-size:${H(Number(c.clock_date_font_size)||12,8,100)}px;`+(c.clock_date_color?`color:${c.clock_date_color};`:"")+(P?`text-shadow:${P};`:"");return _`<div class="wsfc-clock-date" style=${D}>${g}</div>`},l1._wfcForecastConfigFor=function(c){let m=this.config&&this.config.forecast||{},d=m[`${c}_mode`]||m.mode||"simple",A=m[`${c}_extra_attribute`]!=null?m[`${c}_extra_attribute`]:m.extra_attribute;(A==="none"||A==="")&&(A=void 0);let g=m[`${c}_chart_attribute`]!=null?m[`${c}_chart_attribute`]:m.default_chart_attribute,w={...m,mode:d};return A==null?delete w.extra_attribute:w.extra_attribute=A,g!=null&&(w.default_chart_attribute=g),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(P=>{let D=m[`${c}_${P}`];D!=null&&(w[P]=D)}),{config:{...this.config,forecast:w},chart:d==="chart"}},l1._wfcRenderForecast=function(c,m){let d=c==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!d||!d.length)return Z;let A=this._wfcMergeForecast(d,c),{config:g,chart:w}=this._wfcForecastConfigFor(c),b=w?_`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${g}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${c}
          .isTwiceDailyEntity=${m.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:_`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${g}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${c}
          .isTwiceDailyEntity=${m.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return _`<div class="wsfc-forecast-container" data-forecast-type=${c}>${b}</div>`};let V5="device:",Q1=c=>typeof c=="string"&&c.indexOf(V5)===0,g2=c=>Q1(c)?c.slice(V5.length):null,z0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],dt=z0.map(c=>c.key),pt=[{re:/feels?[\s_-]?likes?|apparent|wind[\s_-]?chill|windchill|heat[\s_-]?index/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}];function Z3(c,m){if(!c||!m||!c.entities)return[];let d=[];for(let A in c.entities){let g=c.entities[A];g&&g.device_id===m&&d.push(A)}return d}function J9(c,m){let d=c&&c.states[m];if(!d)return null;let A=d.attributes&&d.attributes.device_class,g=(m+" "+(d.attributes&&d.attributes.friendly_name||"")).toLowerCase(),w=null;for(let P of pt)if(P.re.test(g)){w=P.key;break}if(w||(A==="temperature"?w="temperature":A==="humidity"?w="humidity":A==="pressure"||A==="atmospheric_pressure"?w="pressure":A==="wind_speed"?w="wind_speed":A==="irradiance"?w="solar_radiation":A==="illuminance"?w="illuminance":A==="precipitation_intensity"?w="precipitation":/(^|[\s_-])temperature/.test(g)?w="temperature":/pressure/.test(g)&&(w="pressure")),!w||dt.indexOf(w)===-1)return null;let b=0;if(/indoor|inside/.test(g)||w==="uv_index"&&!/index|\buvi\b/.test(g))return null;if(w==="apparent_temperature"&&/chill|heat[\s_-]?index/.test(g)&&(b+=10),/globe|wbgt|soil|water|pool|probe|leaf|\bch[\s_-]?\d|(temperature|humidity)[\s_-]?\d|_\d+$/.test(g.replace(/_2$/,""))&&(b+=40),/outdoor/.test(g)&&(b-=2),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(g)&&(b+=20),w==="pressure"){if(/deficit|vpd|vapou?r/.test(g))return null;/absolute/.test(g)&&(b+=50),/relative|sea/.test(g)&&(b-=5)}return w==="precipitation"&&(/rate/.test(g)&&(b-=5),/event|hourly|24h|total/.test(g)&&(b+=10)),{key:w,penalty:b}}function t6(c,m){let d=c&&c.devices||{},A=d[m],g=A&&A.config_entries||[];return g.length?Object.keys(d).filter(w=>w!==m&&(d[w].config_entries||[]).some(b=>g.includes(b))):[]}function V4(c,m){let d={},A={},g=Z3(c,m).map(b=>[b,0]),w=t6(c,m).flatMap(b=>Z3(c,b).map(P=>[P,15]));for(let[b,P]of[...g,...w]){let D=J9(c,b);if(!D)continue;let N={key:D.key,penalty:D.penalty+P};(A[N.key]==null||N.penalty<A[N.key])&&(A[N.key]=N.penalty,d[N.key]=b)}return d}function I0(c,m,d){let A={...V4(m,d)},g=c&&c.metric_sources&&c.metric_sources.device_map&&c.metric_sources.device_map[d]||{};for(let w in g)g[w]&&(A[w]=g[w]);return A}function s4(c,m){let d=c&&c.metric_sources||{};if(Array.isArray(d.sources))return d.sources.filter(D=>D&&D.ref).map(D=>({ref:D.ref,overrides:{...D.overrides||{}},disabled:!!D.disabled}));let A=[],g=d.device_map||{},w=d.custom||{},b=D=>Q1(D)?{...g[g2(D)]||{}}:{},P=d.primary||c&&c.entity;return P&&A.push({ref:P,overrides:{...b(P),...w}}),d.fallback&&d.fallback!==P&&A.push({ref:d.fallback,overrides:b(d.fallback)}),A}l1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},l1._wfcSources=function(){return s4(this.config,this.hass)},l1._wfcSlotEntityForKey=function(c,m){return c?Q1(c)?I0(this.config,this.hass,g2(c))[m]||null:c:null},l1._wfcMetricEntityChain=function(c){let m=[],d=A=>{A&&!m.includes(A)&&this.hass&&this.hass.states[A]&&m.push(A)};for(let A of this._wfcSources())A.disabled||(A.overrides&&A.overrides[c]&&d(A.overrides[c]),d(this._wfcSlotEntityForKey(A.ref,c)));return d(this.config&&this.config.entity),m},l1._wfcCurrentMetric=function(c){for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather."))try{let A=z7(this.hass,d,this.config,c);if(A!=null&&A!=="")return A}catch{}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let g=d.attributes&&d.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(d):g?`${A} ${g}`:`${A}`}catch{return g?`${A} ${g}`:`${A}`}}}}return null},l1._wfcCurrentMetricRaw=function(c){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather.")){let A=d.attributes?d.attributes[c]:null;if(A!=null&&A!=="")return A}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let g=Number(A);return isNaN(g)?A:g}}}return null},l1._wfcMergedCurrentEntity=function(c){try{if(!c||!c.attributes)return c;let m=this.config&&this.config.entity;if(!this._wfcSources().some(P=>P.ref!==m||P.overrides&&Object.keys(P.overrides).length))return c;let g={...c.attributes},w=!1,b=["temperature",...typeof I2<"u"?I2:[]];for(let P of b){let D=this._wfcCurrentMetricRaw(P);D!=null&&D!==g[P]&&(g[P]=D,w=!0)}return w?{...c,attributes:g}:c}catch{return c}},l1._wfcDetailValue=function(c,m){let d=o[c];if(!d)return null;if(d.kind==="sunrise"||d.kind==="sunset"){let A=L2(this.hass),g=d.kind==="sunrise"?A.sunrise:A.sunset;return g?k1(this.hass,g):null}try{let A=this._wfcCurrentMetric(c);return A??null}catch{return null}},l1._wfcRenderDetails=function(c,m){let d=c.details||{},A=(d.items||[]).filter(P=>P.show);if(d.chips)return this._wfcRenderDetailChips(d,A,m);let g=[];if(A.forEach(P=>{let D=o[P.key];if(!D)return;let N=this._wfcDetailValue(P.key,m);if(N==null||N==="")return;let I=P.mode==="custom",H1=I?P.icon_color:d.global_icon_color,u1=I?P.icon_size:d.global_icon_size,W=I?P.text_color:d.global_text_color,_1=I?P.text_size:d.global_text_size,K1=P.icon||D.icon||N5&&N5[P.key]||"mdi:information-outline",U1=(H1?`color:${H1};`:"")+(u1?`--mdc-icon-size:${u1}px;width:${u1}px;height:${u1}px;`:""),R1=(W?`color:${W};`:"")+(_1?`font-size:${_1}px;`:"");g.push(_`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${K1} style=${U1}></ha-icon>
          <span class="wsfc-detail-value" style=${R1}>${N}</span>
        </div>
      `)}),!g.length)return Z;if((d.details_layout||"grid")==="wrap")return _`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${g}</div>
      </div>`;let w=H(parseInt(c.details.columns,10)||2,1,4),b=`grid-template-columns:repeat(${w}, minmax(0, 1fr));`;return _`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${w}" style=${b}>${g}</div>
    </div>`},l1._wfcRenderDetailChips=function(c,m,d){let A=H(Number(c.chip_scale)||1,.5,2.5),w=(c.chip_pill!=null?!!c.chip_pill:c.chip_shape!=="rounded"&&c.chip_shape!=="square")?999:c.chip_radius==null?8:Number(c.chip_radius),b=c.chip_icon_source||"auto",P=c.chip_show_icon!==!1,D=c.chip_layout||"wrap",N=Math.max(0,parseInt(c.chip_columns,10)||0),I=c.chip_text_size?`${Number(c.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${A})`,H1=c.chip_icon_size?`${Number(c.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${A})`,u1=`--wfc-chip-scale:${A};--wfc-chip-radius:${w}px;--wfc-chip-font:${I};--wfc-chip-icon-size:${H1};`+(c.chip_bg?`--wfc-chip-bg:${c.chip_bg};`:"")+(c.chip_border_color?`--wfc-chip-border:${c.chip_border_color};`:"")+(c.chip_text_color?`--wfc-chip-text:${c.chip_text_color};`:"")+(c.chip_icon_color?`--wfc-chip-icon:${c.chip_icon_color};`:"");D==="grid"&&N>0&&(u1+=`grid-template-columns:repeat(${N}, minmax(0, 1fr));`);let W=[];return m.forEach(_1=>{let K1=o[_1.key];if(!K1)return;let U1=this._wfcDetailValue(_1.key,d);if(c.chip_hide_when_off&&(U1==null||U1===""||U1==="unknown"||U1==="unavailable"))return;let R1=U1==null||U1===""?"\u2014":U1,d1=K1.label||_1.key,S1=c.chip_show_name?`${d1}: ${R1}`:R1,_2="";P&&b!=="none"&&(_2=b==="entity"&&_1.icon||K1.icon,_2=_2||N5&&N5[_1.key]||"mdi:information-outline"),W.push(_`
        <span class="wsfc-chip">
          ${_2?_`<ha-icon .icon=${_2}></ha-icon>`:Z}
          <span class="wsfc-chip-text">${S1}</span>
        </span>
      `)}),W.length?_`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${D}" style=${u1}>${W}</div>
    </div>`:Z},l1._wfcHourlySource=function(){let c=this._hourlyForecastEvent,m=c&&Array.isArray(c.forecast)&&c.forecast.length?c.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},l1._wfcExtraForecastEntities=function(){let c=this.config&&this.config.entity,m=new Set,d=A=>{A&&A!==c&&typeof A=="string"&&A.startsWith("weather.")&&this.hass&&this.hass.states[A]&&m.add(A)};for(let A of this._wfcSources())A.disabled||(d(A.ref),A.overrides&&Object.values(A.overrides).forEach(d));return[...m]},l1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let c=new Set(this._wfcExtraForecastEntities());for(let g of Object.keys(this.__wfcSrc))if(!c.has(g)){try{this.__wfcSrc[g].unsub&&this.__wfcSrc[g].unsub()}catch{}delete this.__wfcSrc[g]}let m=this.config.forecast_types||"both",d=m!=="daily",A=m!=="hourly";c.forEach(g=>{if(this.__wfcSrc[g])return;let w={unsub:null,hourly:null,daily:null};this.__wfcSrc[g]=w;let b=(P,D)=>{try{let N=this.hass.connection.subscribeMessage(I=>{w[D]=I&&Array.isArray(I.forecast)?I.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:P,entity_id:g},{resubscribe:!1});Promise.resolve(N).then(I=>{if(this.__wfcSrc[g]!==w){try{I&&I()}catch{}return}let H1=w.unsub;w.unsub=()=>{try{H1&&H1()}catch{}try{I&&I()}catch{}}}).catch(()=>{})}catch{}};d&&b("hourly","hourly"),A&&b(O5&&typeof O5=="function"&&O5(this.hass.states[g])||"daily","daily")})}catch{}},l1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let c of Object.keys(this.__wfcSrc))try{this.__wfcSrc[c].unsub&&this.__wfcSrc[c].unsub()}catch{}this.__wfcSrc={}}},l1._wfcSourceForecast=function(c,m){let d=this.__wfcSrc&&this.__wfcSrc[c];return d&&d[m]||null},l1._wfcMergeForecast=function(c,m){try{if(!Array.isArray(c)||!c.length)return c;let d=this.config&&this.config.entity,A=this._wfcExtraForecastEntities();if(!A.length)return c;let g={};if(A.forEach(D=>{let N=this._wfcSourceForecast(D,m);Array.isArray(N)&&N.length&&(g[D]=N.map(I=>({t:new Date(I.datetime).getTime(),fc:I})).filter(I=>!isNaN(I.t)))}),!Object.keys(g).length)return c;let w=(D,N)=>{let I=g[D];if(!I)return null;let H1=null,u1=1/0;for(let W of I){let _1=Math.abs(W.t-N);_1<u1&&(u1=_1,H1=W.fc)}return u1<=90*6e4?H1:null},b=z0.map(D=>D.key),P={};return b.forEach(D=>{P[D]=this._wfcMetricEntityChain(D).filter(N=>N===d||g[N])}),c.map(D=>{let N=new Date(D.datetime).getTime();if(isNaN(N))return D;let I=D;return b.forEach(H1=>{for(let u1 of P[H1]){if(u1===d){if(D[H1]!=null)break;continue}let W=w(u1,N);if(W&&W[H1]!=null){I===D&&(I={...D}),I[H1]=W[H1];break}}}),I})}catch{return c}},l1._wfcCloudAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let g=0;g<m.length;g++){let w=new Date(m[g].datetime);if(isNaN(w))continue;let b=Math.abs(w.getTime()-c.getTime());b<A&&(A=b,d=m[g])}return!d||A>90*6e4?null:V(d.cloud_coverage)?d.cloud_coverage/100:V(d.precipitation_probability)?d.precipitation_probability/100:null},l1._wfcForecastAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let g=0;g<m.length;g++){let w=new Date(m[g].datetime);if(isNaN(w))continue;let b=Math.abs(w.getTime()-c.getTime());b<A&&(A=b,d=m[g])}return d&&A<=90*6e4?d:null},l1._wfcSunHours=function(c){c=c||{};let m=new Date,d,A;if(c.timeframe_mode==="day")d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5);else if(c.timeframe_mode==="match_arc"){let P=L2(this.hass,m);P.sunrise&&P.sunset?(d=new Date(P.sunrise.getTime()-60*6e4),A=new Date(P.sunset.getTime()+60*6e4)):(d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5))}else{let P=H(Number(c.timeframe_hours)||24,1,72)*36e5;c.timeframe_anchor==="now_center"?(d=new Date(m.getTime()-P/2),A=new Date(m.getTime()+P/2)):(d=new Date(m),d.setMinutes(0,0,0),A=new Date(d.getTime()+P))}let g=A.getTime()-d.getTime(),w=H(Math.round(g/36e5),2,72),b=[];for(let P=0;P<=w;P++){let D=new Date(d.getTime()+g*P/w);b.push({date:D,cloud:this._wfcCloudAt(D)})}return b},l1._wfcFmtTime=function(c,m){if(!(c instanceof Date)||isNaN(c))return"--";let d=m1(this.hass);try{return m==="12"?c.toLocaleTimeString(d,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit",hour12:!1}):c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit"})}catch{return c.toTimeString().slice(0,5)}},l1._wfcSkyGradient=function(c){let m=this._wfcSunHours(c);if(m.length<2)return null;let{lat:d,lng:A}=N1(this.hass);if(!V(d)||!V(A))return null;let g=c.weather_adjust!==!1,w=m.length,b=[];for(let P=0;P<w;P++){let D=O1(G1(this.hass,m[P].date)),N=(P/(w-1)*100).toFixed(2),I=V1(D,{day_color:c.day_color,night_color:c.night_color,cloud:g?m[P].cloud:0});b.push(`${I} ${N}%`)}return{gradient:`linear-gradient(to right, ${b.join(", ")})`,hours:m}},l1._wfcSunMarker=function(c,m){if(m==null)return Z;let d=c.marker_color||"var(--primary-text-color)",A=H(Number(c.marker_opacity==null?100:c.marker_opacity),0,100)/100;return _`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${d};opacity:${A};"></div>`},l1._wfcSunRiseSetMarkers=function(c,m,d,A){let{sunrise:g,sunset:w}=L2(this.hass);if(!g||!w||d<=m)return Z;let b=c.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",P=H(Number(c.ss_markers_opacity==null?100:c.ss_markers_opacity),0,100)/100,D=[];return[g.getTime(),w.getTime()].forEach(N=>{if(N<m||N>d)return;let I=((N-m)/(d-m)*100).toFixed(2);D.push(_`<span class="wsfc-sunpos-ssmark" style="left:${I}%;background:${b};opacity:${P};"></span>`)}),D.length?_`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${A}">${D}</div>`:Z},l1._wfcRenderSunPosition=function(c,m){let d=c.sun_position,A=this._wfcSkyGradient(d);if(!A)return Z;let{gradient:g,hours:w}=A,b=w.length,P=d.times_position||"below";P==="center"&&(P="overlay");let D=d.ticks_position||"hidden",N=P!=="hidden",I=D!=="hidden",H1=H(parseInt(d.ticks_every,10)||0,0,24),u1;if(H1>0&&b>1){let Y=(w[b-1].date.getTime()-w[0].date.getTime())/36e5,A1=Y>0?Y/(b-1):1;u1=Math.max(1,Math.round(H1/A1))}else u1=Math.max(1,Math.round((b-1)/8));let W=Y=>(Y/(b-1)*100).toFixed(2),_1=[];if(N)for(let Y=0;Y<b;Y+=u1){let A1;try{A1=w[Y].date.toLocaleTimeString(m1(this.hass),{hour:"numeric"})}catch{A1=w[Y].date.getHours()+""}_1.push(_`<span class="wsfc-sunpos-tick" style="left:${W(Y)}%">${A1}</span>`)}let K1=d.times_color||"var(--secondary-text-color, #9e9e9e)",U1=[];if(I)for(let Y=0;Y<b;Y+=u1)U1.push(_`<span class="wsfc-sunpos-mark" style="left:${W(Y)}%;background:${K1};"></span>`);let R1=Date.now(),d1=w[0].date.getTime(),S1=w[b-1].date.getTime(),s5=R1>=d1&&R1<=S1&&S1>d1?H((R1-d1)/(S1-d1)*100,0,100):null,j2=Number(d.height)||44,U0=`font-size:${Number(d.times_font_size)||11}px;font-weight:${d.times_font_weight||"400"};`+(d.times_color?`color:${d.times_color};`:""),f1=Y=>_`<div class="wsfc-sunpos-ticks${Y||""}" style=${U0}>${_1}</div>`,E1=Y=>_`<div class="wsfc-sunpos-marks${Y||""}">${U1}</div>`,E2=d.ss_markers_position||"hidden",L5=E2!=="hidden",h2=R(d),t5={};h2.forEach(Y=>t5[Y.key]=Y.pos);let f5=t5.temps&&t5.temps!=="hidden",e5=t5.icons&&t5.icons!=="hidden",r2=d.forecast_temp_color||d.forecast_color||"",r5=d.forecast_icon_color||d.forecast_color||"",A5=d.forecast_extra_color||d.forecast_color||"",p0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),S2=d.forecast_metric_style||{},v5=Y=>S2[Y]&&S2[Y].text_color||(Y==="temps"?r2:A5),$5=Y=>S2[Y]&&S2[Y].icon_color||r5,T3=Y=>S2[Y]&&S2[Y].icon_size||d.forecast_icon_size,j0=Y=>S2[Y]&&S2[Y].text_size||d.forecast_font_size||11,u0=Y=>m2(S2[Y]&&S2[Y].contrast||"",p0),t0=Y=>{let A1=v5(Y),o1=u0(Y);return`font-size:${Number(j0(Y))||11}px;`+(A1?`color:${A1};`:"")+(o1?`text-shadow:${o1};`:"")},R5=Y=>{let A1=$5(Y),o1=T3(Y),W1=u0(Y);return(A1?`color:${A1};`:"")+(o1?`--mdc-icon-size:${o1}px;width:${o1}px;height:${o1}px;`:"")+(W1?`filter:drop-shadow(${W1});`:"")},G0=y.some(Y=>t5[Y]&&t5[Y]!=="hidden"),x5=[];if(f5||e5||G0){let Y=this._wfcHourlySource()||[];for(let A1 of Y){let o1=new Date(A1.datetime);if(isNaN(o1))continue;let W1=o1.getTime();W1<d1||W1>S1||x5.push({t:W1,fc:A1})}x5.sort((A1,o1)=>A1.t-o1.t)}let q0=S1-d1,g1=Y=>q0>0?((Y-d1)/q0*100).toFixed(2):"0",F2=(Y,A1)=>{let o1=null,W1=1/0;for(let J1 of x5){let w2=Math.abs(J1.t-Y);w2<W1&&(W1=w2,o1=J1.fc)}return W1<=A1?o1:null},D1={},c2=Y=>{let A1=Y==null?"":String(Y);if(D1[A1])return D1[A1];let o1=[];if(x5.length||Y==="ticks"||Y==="midticks"){let W1=Y==="all"||Y==="0",J1=Y==="ticks",w2=Y==="midticks";if(J1||w2){let S5=q0>0&&b>1?q0/(b-1)*u1:36e5,F3=Math.max(S5/2,90*6e4),$3=w2?u1/2:0;for(let l5=$3;l5<=b-1;l5+=u1){let p7=Math.floor(l5),_t=Math.min(b-1,Math.ceil(l5)),St=l5-p7,R3=w[p7].date.getTime()+(w[_t].date.getTime()-w[p7].date.getTime())*St;if(R3<d1||R3>S1)continue;let wt=(l5/(b-1)*100).toFixed(2);o1.push({pct:wt,fc:F2(R3,F3)})}}else if(W1)for(let S5 of x5)o1.push({pct:g1(S5.t),fc:S5.fc});else{let S5=H(parseInt(Y,10)||3,1,6),F3=null,$3=S5*36e5;for(let l5 of x5)(F3==null||l5.t-F3>=$3-6e4)&&(o1.push({pct:g1(l5.t),fc:l5.fc}),F3=l5.t)}}return D1[A1]=o1,o1},g5=Y=>{let A1=S2[Y]&&S2[Y].every;return A1!=null&&A1!==""?A1:d.forecast_every},m0=Y=>{let A1=c2(g5("temps"));return _`<div class="wsfc-sunpos-fc${Y||""}" style=${t0("temps")}>${A1.map(o1=>{let W1=o1.fc&&o1.fc.temperature!=null?Math.round(o1.fc.temperature)+"\xB0":"";return W1?_`<span class="wsfc-sunpos-fc-item" style="left:${o1.pct}%">${W1}</span>`:Z})}</div>`},P3=Y=>{let A1=R5("icons"),o1=c2(g5("icons"));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${Y||""}">${o1.map(W1=>{let J1=W1.fc&&W1.fc.condition?M(W1.fc.condition):"";return J1?_`<span class="wsfc-sunpos-fc-item" style="left:${W1.pct}%"><ha-icon .icon=${J1} style=${A1}></ha-icon></span>`:Z})}</div>`},D5=!!d.forecast_metric_detail_icons,v1=(Y,A1)=>{let o1=R5(Y),W1=c2(g5(Y));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${A1||""}" style=${t0(Y)}>${W1.map(J1=>{let w2=J1.fc?K(Y,J1.fc):null;if(w2==null)return Z;let S5=J(Y,D5);return _`<span class="wsfc-sunpos-fc-item" style="left:${J1.pct}%">${S5?_`<ha-icon .icon=${S5} style=${o1}></ha-icon>`:Z}<span class="wsfc-sunpos-fc-extra-val">${w2}</span></span>`})}</div>`},F1=Y=>{let A1=R5("icons"),o1=c2(g5("icons"));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${Y||""}" style=${t0("temps")}>${o1.map(W1=>{let J1=W1.fc&&W1.fc.condition?M(W1.fc.condition):"",w2=W1.fc&&W1.fc.temperature!=null?Math.round(W1.fc.temperature)+"\xB0":"";return!J1&&!w2?Z:_`<span class="wsfc-sunpos-fc-item" style="left:${W1.pct}%">${J1?_`<ha-icon .icon=${J1} style=${A1}></ha-icon>`:Z}${w2?_`<span class="wsfc-sunpos-fc-temp-val">${w2}</span>`:Z}</span>`})}</div>`},B1=!!d.forecast_temp_with_icon&&f5&&e5&&t5.temps===t5.icons,d2=(Y,A1)=>B1&&Y==="icons"?F1(A1):Y==="temps"?m0(A1):Y==="icons"?P3(A1):v1(Y,A1),G2=Y=>h2.filter(A1=>A1.pos===Y&&!(B1&&A1.key==="temps")).map(A1=>A1.key),_5=G2("overlay"),Y0=[];_5.length===1?Y0.push(d2(_5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):_5.forEach((Y,A1)=>{let o1=A1===0?" wsfc-sunpos-fc-ovl-top":A1===_5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";Y0.push(d2(Y," wsfc-sunpos-fc-ovl"+o1))});let Q0=G2("above").map(Y=>d2(Y)),E3=G2("below").reverse().map(Y=>d2(Y));return _`
      <div class="wsfc-sunpos-section">
        ${Q0}
        ${L5&&E2==="above"?this._wfcSunRiseSetMarkers(d,d1,S1,"row"):Z}
        ${I&&D==="above"?E1():Z}
        ${N&&P==="above"?f1():Z}
        <div class="wsfc-sunpos-bar" style="height:${j2}px;background:${g}">
          ${L5&&E2==="overlay"?this._wfcSunRiseSetMarkers(d,d1,S1,"overlay"):Z}
          ${this._wfcSunMarker(d,s5)}
          ${I&&D==="overlay"?E1(" wsfc-sunpos-marks-center"):Z}
          ${N&&P==="overlay"?f1(" wsfc-sunpos-ticks-center"):Z}
          ${Y0}
        </div>
        ${N&&P==="below"?f1():Z}
        ${I&&D==="below"?E1():Z}
        ${L5&&E2==="below"?this._wfcSunRiseSetMarkers(d,d1,S1,"row"):Z}
        ${E3}
      </div>
    `},l1._wfcArcWindow=function(c,m,d){let A=c.timeframe_mode||"sunrise_sunset",g=Date.now();if(A==="day"){let w=new Date(g);return w.setHours(0,0,0,0),{t0:w.getTime(),t1:w.getTime()+24*36e5}}if(A==="hours"){let w=H(Number(c.timeframe_hours)||24,1,72)*36e5;if(c.timeframe_anchor==="now_center")return{t0:g-w/2,t1:g+w/2};let b=new Date(g);return b.setMinutes(0,0,0),{t0:b.getTime(),t1:b.getTime()+w}}return{t0:m,t1:d}},l1._wfcRenderSunArc=function(c,m){let d=c.sun_arc,{sunrise:A,sunset:g}=L2(this.hass);if(!A||!g)return Z;let w=Date.now(),b=A.getTime(),P=g.getTime(),D=P-b,N;if(d.baseline_mode==="sky"&&c.sun_position){let v1=this._wfcSunHours(c.sun_position);v1&&v1.length>=2&&(N={t0:v1[0].date.getTime(),t1:v1[v1.length-1].date.getTime()})}N||(N=this._wfcArcWindow(d,b,P));let I=N.t0,H1=N.t1,u1=H1-I||1,W=v1=>H((v1-I)/u1,0,1),_1=100,K1=78,U1=14,R1=W(b),d1=W(P),S1=d1-R1,_2=v1=>{if(S1<=0||v1<=R1||v1>=d1)return K1;let F1=(v1-R1)/S1;return K1-(K1-U1)*(1-Math.pow(2*F1-1,2))},s5=96,j2="";for(let v1=0;v1<=s5;v1++){let F1=v1/s5;j2+=(v1===0?"M":"L")+(F1*_1).toFixed(2)+" "+_2(F1).toFixed(2)+" "}let U0=w>=I&&w<=H1,f1=w>=b&&w<=P,E1=W(w),E2=(E1*100).toFixed(2),L5=(_2(E1)/_1*100).toFixed(2),h2=Number(d.height)||90,t5=d.time_format||"auto",f5=d.tick_color||"var(--secondary-text-color, #9e9e9e)",e5=[];{let v1=new Date(I);v1.setMinutes(0,0,0),v1.getTime()<I&&v1.setTime(v1.getTime()+36e5);for(let F1=v1.getTime();F1<=H1;F1+=36e5)e5.push(W(F1))}let r2=[];d.show_arc_ticks&&e5.forEach(v1=>{if(v1<=0||v1>=1)return;let F1=(v1*_1).toFixed(2),B1=_2(v1);r2.push(y1`<line x1="${F1}" y1="${(B1-2.5).toFixed(2)}" x2="${F1}" y2="${(B1+2.5).toFixed(2)}" stroke="${f5}" stroke-width="0.6"></line>`)});let r5=[];d.show_base_ticks&&e5.forEach(v1=>{let F1=(v1*_1).toFixed(2);r5.push(y1`<line x1="${F1}" y1="${K1}" x2="${F1}" y2="${K1+3}" stroke="${f5}" stroke-width="0.6"></line>`)});let A5=d.sunrise_sunset_ticks||"none",p0=A5==="arc"||A5==="both",S2=A5==="base"||A5==="both",v5=[];b>=I&&b<=H1&&v5.push(W(b)),P>=I&&P<=H1&&v5.push(W(P)),p0&&v5.forEach(v1=>{let F1=(v1*_1).toFixed(2),B1=_2(v1);r2.push(y1`<line x1="${F1}" y1="${(B1-4.5).toFixed(2)}" x2="${F1}" y2="${(B1+4.5).toFixed(2)}" stroke="${f5}" stroke-width="1.4"></line>`)}),S2&&v5.forEach(v1=>{let F1=(v1*_1).toFixed(2);r5.push(y1`<line x1="${F1}" y1="${(K1-2).toFixed(2)}" x2="${F1}" y2="${K1+6}" stroke="${f5}" stroke-width="1.4"></line>`)});let $5=Z;if(U0){let v1="wsfc-sunarc-sun"+(f1?"":" wsfc-sunarc-sun-night"),F1=`left:${E2}%;top:${L5}%;`;if(!f1&&d.night_moon&&d.moon_icon==="phase"){let B1=M0.getMoonIllumination(new Date).phase,d2=10,G2=11,_5=Math.cos(B1*2*Math.PI),Y0=Math.abs(_5)*d2,Q0=B1<.5?1:0,E3=`M${G2} ${G2-d2} A${d2} ${d2} 0 0 ${Q0} ${G2} ${G2+d2} A${Y0} ${d2} 0 0 ${_5>0?1-Q0:Q0} ${G2} ${G2-d2} Z`;$5=_`<span class="${v1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${F1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${E3} fill="#e9e6d6"></path></svg></span>`}else if(!f1&&d.night_moon){let B1=d.moon_icon||"mdi:weather-night";$5=_`<ha-icon class="${v1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${B1} style=${F1}></ha-icon>`}else d.sun_icon?$5=_`<ha-icon class="${v1} wsfc-sunarc-sun-icon" .icon=${d.sun_icon} style=${F1}></ha-icon>`:$5=_`<span class="${v1} wsfc-sunarc-sun-dot" style=${F1}></span>`}let T3=`font-size:${Number(d.time_font_size)||13}px;font-weight:${d.time_font_weight||"600"};`+(d.time_color?`color:${d.time_color};`:""),j0=`font-size:${Number(d.caption_font_size)||11}px;font-weight:${d.caption_font_weight||"400"};`+(d.caption_color?`color:${d.caption_color};`:""),u0=d.show_times!==!1,t0=d.show_captions!==!1,R5=!!d.show_ss_icons,G0=d.ss_icon_position||"left",x5=(d.ss_icon_color?`color:${d.ss_icon_color};`:"")+(d.ss_icon_size?`--mdc-icon-size:${d.ss_icon_size}px;width:${d.ss_icon_size}px;height:${d.ss_icon_size}px;`:""),q0=v1=>{if(!R5)return Z;let F1=v1==="sunrise"?d.sunrise_icon||"mdi:weather-sunset-up":d.sunset_icon||"mdi:weather-sunset-down";return _`<ha-icon class="wsfc-sunarc-ssicon" .icon=${F1} style=${x5}></ha-icon>`},g1=(v1,F1,B1,d2)=>{let G2=_`<div class="wsfc-sunarc-endtext">
        ${u0?_`<div class="wsfc-sunarc-time" style=${T3}>${v1}</div>`:Z}
        ${t0?_`<div class="wsfc-sunarc-cap" style=${j0}>${F1}</div>`:Z}
      </div>`,_5=q0(d2);return _`<div class="wsfc-sunarc-end${B1?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${G0==="above"?"column":G0==="below"?"column-reverse":G0==="right"?"row-reverse":"row"};">${_5}${G2}</div>
      </div>`},F2=u0||t0||R5,D1=F2?_`<div class="wsfc-sunarc-labels">
          ${g1(this._wfcFmtTime(A,t5),"sunrise",!1,"sunrise")}
          ${g1(this._wfcFmtTime(g,t5),"sunset",!0,"sunset")}
        </div>`:Z,c2=d.labels_position;c2==="below"||c2==null?c2=0:c2==="above"?c2=100:c2==="mid"?c2=50:c2=H(Number(c2),0,100);let g5=d.baseline_mode==="sky"&&c.sun_position,m0=g5?this._wfcRenderSunPosition(c,m):Z,P3=g5&&m0!==Z?Z:y1`<line class="wsfc-sunarc-horizon" x1="0" y1="${K1}" x2="${_1}" y2="${K1}"></line>`,D5=_`
      <div class="wsfc-sunarc-svg-wrap" style="height:${h2}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${_1} 100" preserveAspectRatio="none">
          ${P3}
          <path class="wsfc-sunarc-path" d=${j2.trim()}></path>
          ${r2}
          ${r5}
        </svg>
        ${$5}
        ${F2&&c2>0&&c2<100?_`<div class="wsfc-sunarc-overlay" style="top:${(100-c2).toFixed(1)}%;transform:translateY(-50%);">${D1}</div>`:Z}
      </div>
    `;return _`
      <div class="wsfc-sunarc-section">
        ${F2&&c2>=100?D1:Z}
        ${D5}
        ${g5&&m0!==Z?_`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-K1)/100)*h2).toFixed(1)}px;">${m0}</div>`:Z}
        ${F2&&c2<=0?D1:Z}
      </div>
    `},l1._wfcStyleTag=function(){return _`<style>
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
    </style>`};let q=J5.prototype,L4=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),k3={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},O3=null;function ut(){return O3||(O3=new Set,Object.values(o6).forEach(c=>c.forEach(m=>O3.add(m)))),O3}function N0(c,m){let d=[];return c.forEach(A=>{if(!m.has(A.name))if(A.schema){let g=N0(A.schema,m);g.length&&d.push({...A,schema:g})}else d.push(A)}),d}function mt(c){let m=ut(),d=new Set([...m,...L4]);c=N0(c,d);let A=new Map,g=[];c.forEach(N=>{L4.has(N.name)||(N.type==="expandable"?g.push(N):A.set(N.name,N))});let w=N=>N.map(I=>A.get(I)).filter(Boolean),b=(N,I,H1)=>{let u1=w(H1);return u1.length?[{name:N,type:"expandable",flatten:!0,icon:I,schema:u1}]:[]},P=N=>g.find(I=>I.name===N),D=[];{let N=P("attribute_entities");N&&D.push(k3.attribute_entities?{...N,icon:k3.attribute_entities}:N)}return D}let Nr=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],e6=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],r6=["tap_action","hold_action","double_tap_action"],i6=["show_condition_effects"],ht=[],o6={current:["current.show_attributes"],hourly:[],daily:[]},C6={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},ft="Weather Flex sections";q.render=function(){if(!this.hass||!this._config)return Z;let c=Q8(this._config),m=this._getSelectedAttributes(c),d=this._schema(this.localize.bind(this),m,c["forecast.mode"]),A=mt(d),g=b=>C6[b.name]||this._computeLabel(b)||b.name,w=this._wfcAccordionEnabled();return _`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${ft}</span>
          <span class="wsfc-ed-ver">build ${r}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${w}
            @change=${b=>this._wfcSetAccordion(b.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>
      ${A.length?_`<ha-form
            .hass=${this.hass}
            .data=${c}
            .schema=${A}
            .computeLabel=${g}
            .computeHelper=${b=>this._wfcHelper(b)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:Z}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},q._wfcCardAppearancePanel=function(){let c=l2(this._config).card||{},m="card";return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${k3.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(i6)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!c.border_enabled,d=>this._wfcToggleSecField(m,"border_enabled",d))}
            ${c.border_enabled?_`
                  ${this._wfcColorField("Border color",c.border_color,d=>this._wfcSetSecField(m,"border_color",d.target.value))}
                  ${this._wfcNumField(m,"border_width","Border width","px",c.border_width,1)}
                  ${this._wfcNumField(m,"border_radius","Corner radius","px",c.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",c.border_top!==!1,d=>this._wfcToggleSecField(m,"border_top",d))}
                    ${this._wfcCheckbox("Bottom",c.border_bottom!==!1,d=>this._wfcToggleSecField(m,"border_bottom",d))}
                    ${this._wfcCheckbox("Left",c.border_left!==!1,d=>this._wfcToggleSecField(m,"border_left",d))}
                    ${this._wfcCheckbox("Right",c.border_right!==!1,d=>this._wfcToggleSecField(m,"border_right",d))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",c.corner_tl!==!1,d=>this._wfcToggleSecField(m,"corner_tl",d))}
                    ${this._wfcCheckbox("Top-right",c.corner_tr!==!1,d=>this._wfcToggleSecField(m,"corner_tr",d))}
                    ${this._wfcCheckbox("Bottom-right",c.corner_br!==!1,d=>this._wfcToggleSecField(m,"corner_br",d))}
                    ${this._wfcCheckbox("Bottom-left",c.corner_bl!==!1,d=>this._wfcToggleSecField(m,"corner_bl",d))}
                  </div>`:Z}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",c.bg_color,d=>this._wfcSetSecField(m,"bg_color",d.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!c.glow_enabled,d=>this._wfcToggleSecField(m,"glow_enabled",d))}
            ${c.glow_enabled?_`
                  ${this._wfcColorField("Glow color",c.glow_color,d=>this._wfcSetSecField(m,"glow_color",d.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((c.glow_intensity==null?1:c.glow_intensity)*100),100,"glow_intensity",d=>this._wfcSetSecField(m,"glow_intensity",H((parseInt(d.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",c.glow_borders_only!==!1,d=>this._wfcToggleSecField(m,"glow_borders_only",d))}`:Z}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!c.shadow_enabled,d=>this._wfcToggleSecField(m,"shadow_enabled",d))}
            ${c.shadow_enabled?_`
                  ${this._wfcColorField("Shadow color",c.shadow_color,d=>this._wfcSetSecField(m,"shadow_color",d.target.value))}
                  ${this._wfcNumField(m,"shadow_x","Offset X","px",c.shadow_x,0)}
                  ${this._wfcNumField(m,"shadow_y","Offset Y","px",c.shadow_y,4)}
                  ${this._wfcNumField(m,"shadow_blur","Blur","px",c.shadow_blur,16)}
                  ${this._wfcNumField(m,"shadow_spread","Spread","px",c.shadow_spread,0)}
                  ${this._wfcNumField(m,"shadow_opacity","Opacity","%",c.shadow_opacity,35)}`:Z}
          </div>
        </div>
      </details>
    `};let l4=4;q._wfcEdSources=function(){return s4(this._config,this.hass)},q._wfcCommitSources=function(c){let m=c.filter(N=>N&&N.ref).map(N=>{let I={};for(let u1 in N.overrides||{})N.overrides[u1]&&(I[u1]=N.overrides[u1]);let H1={ref:N.ref};return Object.keys(I).length&&(H1.overrides=I),N.disabled&&(H1.disabled=!0),H1}),d={...this._config.metric_sources||{}};delete d.primary,delete d.fallback,delete d.custom,delete d.device_map,m.length?d.sources=m:delete d.sources;let A={...this._config,metric_sources:d},g=N=>{let I=this.hass&&this.hass.states[N],H1=I&&I.attributes&&I.attributes.supported_features;return typeof H1=="number"&&(H1&7)!==0},w=N=>N.map(I=>I.ref).filter(I=>typeof I=="string"&&I.startsWith("weather.")),b=w(m.filter(N=>!N.disabled)),P=w(m),D=b.find(g)||b[0]||P.find(g)||P[0];D&&(A.entity=D),Object.keys(d).length===0&&delete A.metric_sources,a2(this,"config-changed",{config:A})},q._wfcSetSourceRef=function(c,m){let d=this._wfcEdSources();d[c]&&(m?d[c]={ref:m,overrides:d[c].overrides||{}}:d.splice(c,1),this._wfcCommitSources(d))},q._wfcAddSource=function(c){if(!c)return;let m=this._wfcEdSources();m.length>=l4||(m.push({ref:c,overrides:{}}),this._wfcCommitSources(m))},q._wfcMoveSource=function(c,m){let d=this._wfcEdSources(),A=c+m;if(c<0||A<0||A>=d.length)return;let g=d[c];d[c]=d[A],d[A]=g,this._wfcCommitSources(d)},q._wfcRemoveSource=function(c){let m=this._wfcEdSources();c<0||c>=m.length||(m.splice(c,1),this._wfcCommitSources(m))},q._wfcToggleSourceDisabled=function(c){let m=this._wfcEdSources();m[c]&&(m[c].disabled=!m[c].disabled,this._wfcCommitSources(m))},q._wfcSetSourceOverride=function(c,m,d){let A=this._wfcEdSources();if(!A[c])return;let g={...A[c].overrides||{}};d?g[m]=d:delete g[m],A[c].overrides=g,this._wfcCommitSources(A)},q._wfcLiveValue=function(c,m){let d=this.hass&&this.hass.states[c];if(!d)return"";let A,g;return c.startsWith("weather.")?(A=d.attributes?d.attributes[m]:null,g=d.attributes&&d.attributes[m+"_unit"]):(A=d.state,g=d.attributes&&d.attributes.unit_of_measurement),A==null||A===""||A==="unknown"||A==="unavailable"?"":g?`${A} ${g}`:`${A}`},q._wfcAvailableMetrics=function(){let c=new Set;if(!this.hass)return c;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let A of this._wfcEdSources())if(!A.disabled)if(A.overrides&&Object.keys(A.overrides).forEach(g=>{c.add(g),m.add(A.overrides[g])}),Q1(A.ref)){let g=I0(this._config,this.hass,g2(A.ref));Object.keys(g).forEach(w=>{c.add(w),m.add(g[w])})}else A.ref&&m.add(A.ref);m.forEach(A=>{let g=this.hass.states[A];g&&g.attributes&&Object.keys(g.attributes).forEach(w=>c.add(w))});let d=A=>{if(Array.isArray(A))for(let g of A)g&&Object.keys(g).forEach(w=>c.add(w))};return d(this._hourlyForecastData),d(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(A=>{A&&(d(A.hourly),d(A.daily))}),c};function At(c){return String(c).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let M4={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function vt(c){return M4[c]||At(c)}q._wfcMetricOptions=function(c,m){let d=this._wfcAvailableMetrics(),A=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(c||[]).forEach(g=>{let w=vt(g);A.push({value:g,label:d.has(g)?w:`${w} (unavailable)`})}),A},q._wfcSourceMappingEditor=function(c,m){let d=m.ref,A=m.overrides||{},g=Q1(d),w=g?g2(d):null,b=g?V4(this.hass,w):{},P=I=>{if(g)return b[I]||"";if(!d)return"";if(d.startsWith("weather.")){let H1=this.hass&&this.hass.states[d];return H1&&H1.attributes&&H1.attributes[I]!=null?d:""}return""},D=g?{include_entities:Z3(this.hass,w)}:{},N=I=>{let H1=I.key,u1=A[H1]||P(H1),W=!!A[H1],_1=u1?this._wfcLiveValue(u1,H1):"",K1=[{name:"e",selector:{entity:D}}],U1=W?" (override)":u1?"":" \u2014 none";return _`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:u1}}
            .schema=${K1}
            .computeLabel=${()=>I.label+U1}
            @value-changed=${R1=>this._wfcSetSourceOverride(c,H1,R1.detail&&R1.detail.value&&R1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${_1||"\u2014"}</span>
        </div>
      `};return _`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${g?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${g?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${z0.map(N)}
        </div>
      </details>
    `},q._wfcSourceSummaryList=function(c){let m=c.ref,d=c.overrides||{},A=Q1(m),g=A?V4(this.hass,g2(m)):{},w=P=>{if(d[P])return d[P];if(A)return g[P]||"";if(m&&m.startsWith("weather.")){let D=this.hass&&this.hass.states[m];return D&&D.attributes&&D.attributes[P]!=null?m:""}return""},b=[];return z0.forEach(P=>{let D=w(P.key);if(!D)return;let N=this._wfcLiveValue(D,P.key);b.push(_`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${P.label}</span>
          <span class="wsfc-cond-ent" title=${D}>${D}</span>
          <span class="wsfc-cond-val">${N||"\u2014"}</span>
        </div>
      `)}),b.length?_`<div class="wsfc-cond-list">${b}</div>`:Z},q._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},q._wfcToggleSrcMap=function(c){let m=this._wfcSrcMapOpen();m.has(c)?m.delete(c):m.add(c),this.requestUpdate&&this.requestUpdate()},q._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},q._wfcSourceMetricCount=function(c){let m=c.ref,d=c.overrides||{},A=new Set(Object.keys(d).filter(g=>d[g]));if(Q1(m))Object.keys(I0(this._config,this.hass,g2(m))).forEach(g=>A.add(g));else if(m&&m.startsWith("weather.")){let g=this.hass&&this.hass.states[m];g&&g.attributes&&z0.forEach(w=>{g.attributes[w.key]!=null&&A.add(w.key)})}return A.size},q._wfcSourceRow=function(c,m,d){let A=c.ref,g=Q1(A),w=this._config.entity,b=g&&this.hass&&this.hass.devices&&this.hass.devices[g2(A)],P=g?b&&(b.name_by_user||b.name)||g2(A):A,D=g?"Device":A&&A.startsWith("weather.")?"Weather":"Sensor",N=g?"mdi:access-point":A&&A.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",I=!g&&A&&A.startsWith("weather."),H1=I&&A===w,u1=this._wfcSrcMapOpen().has(A),W=!!c.disabled,_1=this._wfcSourceMetricCount(c),K1=`${_1} value${_1===1?"":"s"} mapped`,U1=H1?_`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:I?_`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:_`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,R1="",d1=A&&!g?this.hass&&this.hass.states[A]:null;if(g)R1=_1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!d1)R1=`\u26A0 Entity not found: ${A}`;else if(d1.state==="unavailable"||d1.state==="unknown")R1=`\u26A0 Currently ${d1.state}.`;else if(I&&!H1){let S1=d1.attributes&&d1.attributes.supported_features;R1=typeof S1=="number"&&(S1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else I||(R1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return _`
      <div class="wsfc-src-row ${W?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${N}></ha-icon>
          <span class="wsfc-src-name">${P} <span class="wsfc-src-type">${D}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===d-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${W?"mdi:eye-off":"mdi:eye"} title=${W?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${u1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(A)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${U1}<span class="wsfc-src-count">${K1}</span>${W?_`<span class="wsfc-src-count">· hidden</span>`:Z}</div>
        ${R1?_`<div class="wsfc-src-detail">${R1}</div>`:Z}
        ${this._wfcSourceSummaryList(c)}
        ${u1?this._wfcSourceMappingEditor(m,c):Z}
      </div>
    `},q._wfcWeatherSourcesPanel=function(){let c=this._wfcEdSources(),m=c.some(b=>b.ref&&!Q1(b.ref)&&b.ref.startsWith("weather.")),d=c.length>=l4,A=!!this.__wfcAddSourceOpen&&!d,g=_`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${b=>{let P=b.detail&&b.detail.value&&b.detail.value.e;P&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(P))}}
      ></ha-form>`,w=_`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${b=>{let P=b.detail&&b.detail.value&&b.detail.value.d;P&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(V5+P))}}
      ></ha-form>`;return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${d?_`<p class="wsfc-hint">Maximum of ${l4} sources reached. Remove one to add another.</p>`:_`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${A?"mdi:close":"mdi:plus"}></ha-icon>${A?"Cancel":"Add Source"}
              </div>
              ${A?_`<div class="wsfc-add-pickers">${g}${w}</div>`:Z}
            `}
          ${c.length?c.map((b,P)=>this._wfcSourceRow(b,P,c.length)):_`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!m&&c.length?_`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:Z}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},q._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},q._wfcHeadlineTempRow=function(){let c=this._config.current&&this._config.current.temperature_entity,m=c||"",d="";if(!m)for(let w of this._wfcEdSources()){if(w.disabled)continue;let b=this._wfcSlotEntityForKeyEd(w,"temperature");if(b&&this.hass&&this.hass.states[b]){m=b;break}}m?d=this.hass&&this.hass.states[m]&&this.hass.states[m].attributes&&this.hass.states[m].attributes.friendly_name||m:d="\u2014 none available \u2014";let A=m?this._wfcLiveValue(m,"temperature"):"",g=!!this.__wfcHeadlineEdit;return _`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${d}${c?_` <span class="wsfc-src-type">override</span>`:Z}</span>
          ${A?_`<span class="wsfc-srcmap-live">${A}</span>`:Z}
          <ha-icon class="wsfc-ico-btn ${g?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${g?_`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:Z}
      </div>
    `},q._wfcSlotEntityForKeyEd=function(c,m){if(c.overrides&&c.overrides[m])return c.overrides[m];let d=c.ref;if(!d)return null;if(Q1(d))return I0(this._config,this.hass,g2(d))[m]||null;if(d.startsWith("weather.")){let A=this.hass&&this.hass.states[d];return A&&A.attributes&&A.attributes[m]!=null?d:null}return null},q._wfcSetForecastTypes=function(c,m){let d=c&&m?"both":c?"hourly":m?"daily":"both",A={...this._config,forecast_types:d};a2(this,"config-changed",{config:A})},q._wfcAdvancedPanel=function(){let c=this._config.forecast_types||"both",m=c==="both"||c==="hourly",d=c==="both"||c==="daily";return _`
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
          ${this._wfcStockFormFor(ht)}
        </div>
      </details>
    `},q._wfcUserActionsPanel=function(){let c=this._wfcStockFormFor(e6),m=this._wfcStockFormFor(r6),d=this._config.forecast||{};return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${c}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",d.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${m}
        </div>
      </details>
    `};let xt=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];q._wfcForecastTypeControls=function(c){let m=this._config.forecast||{},d=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],A=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],g=N=>m[`${N}_mode`]||m.mode||"simple",w=N=>(m[`${N}_extra_attribute`]!=null?m[`${N}_extra_attribute`]:m.extra_attribute)||"none",b=N=>(m[`${N}_chart_attribute`]!=null?m[`${N}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",P=(N,I,H1)=>{let u1=m[`${N}_${I}`];if(u1!=null)return!!u1;let W=m[I];return W!=null?!!W:H1},D=g(c)==="chart";return _`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${c}_mode`,"Display mode",d,g(c),"simple")}
        ${this._wfcForecastSelect(`${c}_extra_attribute`,"Extra metric",A,w(c),"none")}
      </div>
      ${D?_`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${c}_chart_attribute`,"Chart metric",xt,b(c),"temperature_and_precipitation")}
          </div>`:Z}
      ${this._wfcConfigCheckbox(`forecast.${c}_show_sun_times`,"Show sunrise & sunset times",P(c,"show_sun_times",!0),!0)}
      ${D?_`
            ${this._wfcConfigCheckbox(`forecast.${c}_use_color_thresholds`,"Use color thresholds",P(c,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${c}_show_attribute_selector`,"Show metric selector",P(c,"show_attribute_selector",!1),!1)}`:Z}
    `},q._wfcHelper=function(c){let m=this._computeHelper?this._computeHelper(c):void 0;return typeof m=="string"&&(m=m.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),m},q._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},q._wfcSetAccordion=function(c){let m=this._wfcState();m.editor_accordion=!!c,this._wfcCommit(m),this._wfcApplyAccordion()},q._wfcApplyAccordion=function(){let c=this.renderRoot||this.shadowRoot||this;!c||!c.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,c.addEventListener("toggle",m=>{let d=m.target;if(!d||!d.classList||!d.classList.contains("wsfc-panel")||(this._wfcRememberOpen(d),!d.open)||!this._wfcAccordionEnabled())return;(c.querySelectorAll?c.querySelectorAll("details.wsfc-panel"):[]).forEach(g=>{g!==d&&g.open&&(g.open=!1)})},!0))},q._wfcRememberOpen=function(c){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let m=this._wfcPanelKey(c);m&&(c.open?this.__wfcOpenPanels.add(m):this.__wfcOpenPanels.delete(m))},q._wfcPanelKey=function(c){let m=c.querySelector&&c.querySelector(".wsfc-panel-title");return m?(m.textContent||"").trim():""},q._wfcRestoreOpen=function(){let c=this.renderRoot||this.shadowRoot||this;!c||!c.querySelectorAll||!this.__wfcOpenPanels||c.querySelectorAll("details.wsfc-panel").forEach(m=>{let d=this._wfcPanelKey(m);d&&this.__wfcOpenPanels.has(d)&&(m.open=!0)})},q.updated=function(c){try{let m=Object.getPrototypeOf(q);m&&typeof m.updated=="function"&&m.updated.call(this,c)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},q._wfcEditorStyle=function(){return _`<style>
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
    </style>`};let gt="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";q._wfcCustomMetricsBody=function(){let c=H7(this._config.current&&this._config.current.show_attributes);return _`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${c.map((m,d)=>this._renderCustomAttributeRow(m,d))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${gt}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},q._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let c4={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function B2(c){if(c&&c.detail&&c.detail.value!==void 0)return c.detail.value;let m=c&&c.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function M1(c){let m=c&&c.target;return m&&typeof m.checked=="boolean"?m.checked:!!(c&&c.detail&&c.detail.value)}q._wfcState=function(){return JSON.parse(JSON.stringify(l2(this._config)))},q._wfcCommit=function(c){let m={...this._config,wfc:c};a2(this,"config-changed",{config:m})},q._wfcResetSection=function(c){let d=T2(this._config)[c];if(!d)return;let A=this._wfcState(),g=!!(A[c]&&A[c].show);A[c]={...JSON.parse(JSON.stringify(d)),show:g},this._wfcCommit(A)},q._wfcMoveSection=function(c,m){let d=this._wfcState(),A=d.order.indexOf(c),g=A+m;if(A<0||g<0||g>=d.order.length)return;let w=d.order[A];d.order[A]=d.order[g],d.order[g]=w,this._wfcCommit(d)},q._wfcCommitMetrics=function(c,m){let d=this._wfcState();d[c]||(d[c]={});let A=R(d[c]),g=A.map(b=>b.key),w={};A.forEach(b=>w[b.key]=b.pos),m(g,w),d[c].forecast_metric_order=g,d[c].forecast_metric_pos=w,delete d[c].forecast_temps,delete d[c].forecast_icons,delete d[c].forecast_extra,delete d[c].forecast_row_order,delete d[c].forecast_stack,this._wfcCommit(d)},q._wfcMoveMetric=function(c,m,d){this._wfcCommitMetrics(c,A=>{let g=A.indexOf(m),w=g+d;if(g<0||w<0||w>=A.length)return;let b=A[g];A[g]=A[w],A[w]=b})},q._wfcSetMetricPos=function(c,m,d){this._wfcCommitMetrics(c,(A,g)=>{g[m]=d})},q._wfcSetMetricStyle=function(c,m,d,A){let g=this._wfcState();g[c]||(g[c]={});let w={...g[c].forecast_metric_style||{}},b={...w[m]||{}};A==null||A===""?delete b[d]:b[d]=A,Object.keys(b).length?w[m]=b:delete w[m],g[c].forecast_metric_style=w,this._wfcCommit(g)},q._wfcMetricsOrder=function(c,m){let d=R(m),A=m.forecast_metric_style||{};return d.map((g,w,b)=>{let P=A[g.key]||{},D=g.key==="icons",N=g.key!=="temps";return _`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${E[g.key]||g.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${I=>I.stopPropagation()}
              @change=${I=>this._wfcSetMetricPos(c,g.key,I.target.value)}
            >
              ${$.map(I=>_`<option value=${I.value} ?selected=${I.value===g.pos}>${I.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${I=>{I.preventDefault(),I.stopPropagation(),this._wfcMoveMetric(c,g.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${w===b.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${I=>{I.preventDefault(),I.stopPropagation(),this._wfcMoveMetric(c,g.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${I=>this._wfcSetMetricStyle(c,g.key,"every",I.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(I=>({value:String(I),label:I+(I>1?" hours":" hour")}))].map(I=>_`<option value=${I.value} ?selected=${I.value===(P.every!=null?String(P.every):"")}>${I.label}</option>`)}
              </select>
            </label>
            ${N?_`
                  ${this._wfcColorField("Icon color",P.icon_color,I=>this._wfcSetMetricStyle(c,g.key,"icon_color",I.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",P.icon_size,I=>this._wfcSetMetricStyle(c,g.key,"icon_size",parseFloat(B2(I))||""))}`:Z}
            ${D?Z:_`
                  ${this._wfcColorField("Text color",P.text_color,I=>this._wfcSetMetricStyle(c,g.key,"text_color",I.target.value))}
                  ${this._wfcPlainNum("Font size (px)",P.text_size,I=>this._wfcSetMetricStyle(c,g.key,"text_size",parseFloat(B2(I))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${I=>this._wfcSetMetricStyle(c,g.key,"contrast",I.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(I=>_`<option value=${I.value} ?selected=${I.value===(P.contrast||"")}>${I.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},q._wfcToggleSection=function(c,m){let d=this._wfcState();d[c]||(d[c]={}),d[c].show=M1(m),this._wfcCommit(d)},q._wfcToggleSectionShow=function(c){let m=this._wfcState();m[c]||(m[c]={}),m[c].show=!m[c].show,this._wfcCommit(m)},q._wfcSetSecNum=function(c,m,d){let A=this._wfcState(),g=parseFloat(B2(d));A[c][m]=isNaN(g)?void 0:g,this._wfcCommit(A)},q._wfcSetSecField=function(c,m,d){let A=this._wfcState();A[c]||(A[c]={}),A[c][m]=d,this._wfcCommit(A)},q._wfcToggleSecField=function(c,m,d){this._wfcSetSecField(c,m,M1(d))},q._wfcSetForecastNum=function(c,m){let d={...this._config.forecast||{}};m==null||m<=0?delete d[c]:d[c]=m,a2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcSetConfigNum=function(c,m,d){let[A,g]=c.split("."),w={...this._config},b={...w[A]||{}},P=m==null||m===""||isNaN(Number(m))?null:Number(m);P==null?delete b[g]:b[g]=P,w[A]=b,a2(this,"config-changed",{config:w})},q._wfcConfigSlider=function(c,m,d,A,g){let w=W0(c,d||""),b=A!=null?H(Number(A),w.min,w.max):Number(g);return this._wfcSliderTpl(m,d,w,b,P=>this._wfcSetConfigNum(c,P.target.value,g))},q._wfcSetConfigStr=function(c,m,d){let A={...this._config};if(c.indexOf(".")===-1)d&&(m==null||m==="")?delete A[c]:A[c]=m;else{let[g,w]=c.split("."),b={...A[g]||{}};d&&(m==null||m==="")?delete b[w]:b[w]=m,A[g]=b}a2(this,"config-changed",{config:A})},q._wfcConfigSelect=function(c,m,d,A,g,w){let b=String(A??g);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${P=>this._wfcSetConfigStr(c,P.target.value,w)}>
          ${d.map(P=>_`<option value=${String(P.value)} ?selected=${String(P.value)===b}>${P.label}</option>`)}
        </select>
      </label>
    `},q._wfcSetConfigBool=function(c,m,d){let A={...this._config},g=(w,b)=>{m===!!d?delete w[b]:w[b]=m};if(c.indexOf(".")===-1)g(A,c);else{let[w,b]=c.split("."),P={...A[w]||{}};g(P,b),A[w]=P}a2(this,"config-changed",{config:A})},q._wfcConfigCheckbox=function(c,m,d,A){let g=d==null?!!A:!!d;return this._wfcCheckbox(m,g,w=>this._wfcSetConfigBool(c,w.target.checked,A))},q._wfcConfigText=function(c,m,d,A){return _`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${m}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${d||""}
          placeholder=${A||""}
          @change=${g=>this._wfcSetConfigStr(c,g.target.value)}
        />
      </label>
    `},q._wfcSetForecastField=function(c,m){let d={...this._config.forecast||{}};m==null||m===""?delete d[c]:d[c]=m,a2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcForecastSelect=function(c,m,d,A,g){let w=String(A??g);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${b=>this._wfcSetForecastField(c,b.target.value)}>
          ${d.map(b=>_`<option value=${String(b.value)} ?selected=${String(b.value)===w}>${b.label}</option>`)}
        </select>
      </label>
    `},q._wfcNumSecField=function(c,m,d,A){let g=parseFloat(B2(d));this._wfcSetSecField(c,m,isNaN(g)?A:g)},q._wfcMoveDetail=function(c,m){let d=this._wfcState(),A=d.details.items,g=A.findIndex(P=>P.key===c),w=g+m;if(g<0||w<0||w>=A.length)return;let b=A[g];A[g]=A[w],A[w]=b,this._wfcCommit(d)},q._wfcToggleDetail=function(c,m){let d=this._wfcState(),A=d.details.items.find(g=>g.key===c);A&&(A.show=M1(m)),this._wfcCommit(d)},q._wfcToggleDetailShow=function(c){let m=this._wfcState(),d=m.details.items.find(A=>A.key===c);d&&(d.show=!d.show,this._wfcCommit(m))},q._wfcSetDetailValue=function(c,m,d){let A=this._wfcState(),g=A.details.items.find(w=>w.key===c);g&&(g[m]=d),this._wfcCommit(A)},q._wfcSetDetail=function(c,m,d){let A=this._wfcState(),g=A.details.items.find(b=>b.key===c);if(!g)return;let w=B2(d);if(m==="icon_size"||m==="text_size"){let b=parseFloat(w);w=isNaN(b)?void 0:b}else(w===""||w==null)&&(w=void 0);g[m]=w,this._wfcCommit(A)},q._wfcColorField=function(c,m,d){return _`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${c}</span>
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
    `},q._wfcSelect=function(c,m,d,A,g,w){let b=String(g??w);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${d}</span>
        <select
          class="wsfc-native-select"
          @change=${P=>this._wfcSetSecField(c,m,P.target.value)}
        >
          ${A.map(P=>_`<option value=${String(P.value)} ?selected=${String(P.value)===b}>${P.label}</option>`)}
        </select>
      </label>
    `};let d4={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function W0(c,m){return/chip_scale/.test(c)?{min:50,max:250,step:5}:/chip_columns/.test(c)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(c)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(c)?{min:0,max:48,step:1}:/header_icon_size/.test(c)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(c)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(c)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(c)?{min:-40,max:40,step:1}:/shadow_blur/.test(c)?{min:0,max:80,step:1}:/border_radius/.test(c)?{min:0,max:48,step:1}:/border_width/.test(c)?{min:0,max:12,step:1}:/hourly_slots/.test(c)?{min:0,max:48,step:1}:/daily_slots/.test(c)?{min:0,max:14,step:1}:/labels_position|opacity/.test(c)?{min:0,max:100,step:1}:/indent/.test(c)?{min:0,max:120,step:2}:/height/.test(c)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(c)?{min:8,max:100,step:1}:/font_size|_size$/.test(c)?{min:8,max:48,step:1}:/_width$/.test(c)?{min:1,max:12,step:1}:/_length$/.test(c)?{min:5,max:100,step:5}:/hourly_group_size/.test(c)?{min:1,max:4,step:1}:/temperature_precision/.test(c)?{min:0,max:2,step:1}:/hours/.test(c)?{min:1,max:48,step:1}:d4[m]||d4.px}q._wfcNumField=function(c,m,d,A,g,w){let b=W0(m,A||""),P=g!=null?Number(g):Number(w);return this._wfcSliderTpl(d,A,b,P,D=>this._wfcNumSecField(c,m,D,w))},q._wfcPlainSlider=function(c,m,d,A,g,w){let b=W0(g||"",m||""),P=d!=null?Number(d):Number(A);return this._wfcSliderTpl(c,m,b,P,w)},q._wfcSlotSlider=function(c,m,d){let A=W0(m,""),g=d!=null?H(Number(d),A.min,A.max):0,w=b=>Number(b)<=0?"All":String(b);return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(g)}
          @input=${b=>{let P=b.target.closest(".wsfc-slider-row"),D=P&&P.querySelector(".wsfc-slider-num");D&&(D.textContent=w(b.target.value))}}
          @change=${b=>this._wfcSetForecastNum(m,parseInt(b.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${w(g)}></span></span>
      </div>
    `},q._wfcAutoSizeField=function(c,m,d){let A=W0(m,""),g=this._wfcState()[c]||{},w=H(parseInt(g[m],10)||0,A.min,A.max),b=P=>Number(P)<=0?"Auto":`${P}px`;return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(w)}
          @input=${P=>{let D=P.target.closest(".wsfc-slider-row"),N=D&&D.querySelector(".wsfc-slider-num");N&&(N.textContent=b(P.target.value))}}
          @change=${P=>this._wfcSetSecField(c,m,parseInt(P.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${b(w)}></span></span>
      </div>
    `},q._wfcSliderTpl=function(c,m,d,A,g){let w=m||"";return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${d.min}
          max=${d.max}
          step=${d.step}
          .value=${String(A)}
          @input=${b=>{let P=b.target.closest(".wsfc-slider-row"),D=P&&P.querySelector(".wsfc-slider-num");D&&(D.textContent=b.target.value)}}
          @change=${g}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(A)}></span>${w}</span>
      </div>
    `},q._wfcCheckbox=function(c,m,d){return _`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!m} @change=${d} />
        <span>${c}</span>
      </label>
    `},q._wfcGroup=function(c){return c?_`<div class="wsfc-group-div"><span class="wsfc-group-label">${c}</span></div>`:_`<div class="wsfc-group-div"></div>`},q._wfcSubPanel=function(c,m){return _`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${c}</span></summary>
        <div class="wsfc-subpanel-body">${m}</div>
      </details>
    `},q._wfcFlushControls=function(c,m){return _`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",m.flush_edges,d=>this._wfcToggleSecField(c,"flush_edges",d))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",m.flush_top,d=>this._wfcToggleSecField(c,"flush_top",d))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",m.flush_bottom,d=>this._wfcToggleSecField(c,"flush_bottom",d))}
    `},q._wfcTextControls=function(c,m,d,A){let g=this._wfcState()[c]||{};return _`
      <div class="wsfc-sub-title">${d}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(c,`${m}_font_size`,"Size","px",g[`${m}_font_size`],A)}
        ${this._wfcSelect(c,`${m}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],g[`${m}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",g[`${m}_color`],w=>this._wfcSetSecField(c,`${m}_color`,w.target.value))}
    `};let p4=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];q._wfcDividerControls=function(c,m){return _`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",m.divider_above,d=>this._wfcToggleSecField(c,"divider_above",d))}
      ${m.divider_above?_`
            <div class="wsfc-row">
              ${this._wfcNumField(c,"divider_above_width","Thickness","px",m.divider_above_width,1)}
              ${this._wfcNumField(c,"divider_above_length","Length","%",m.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"divider_above_style","Line style",p4,m.divider_above_style,"solid")}
            </div>`:Z}

      ${this._wfcCheckbox("Section Divider Below",m.divider_below,d=>this._wfcToggleSecField(c,"divider_below",d))}
      ${m.divider_below?_`
            <div class="wsfc-row">
              ${this._wfcNumField(c,"divider_below_width","Thickness","px",m.divider_below_width,1)}
              ${this._wfcNumField(c,"divider_below_length","Length","%",m.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"divider_below_style","Line style",p4,m.divider_below_style,"solid")}
            </div>`:Z}

      ${m.divider_above||m.divider_below?this._wfcColorField("Divider color",m.divider_color,d=>this._wfcSetSecField(c,"divider_color",d.target.value)):Z}
    `},q._wfcBackgroundControls=function(c,m){let d=!!m.background_enabled;return _`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",d,A=>this._wfcToggleSecField(c,"background_enabled",A))}
      ${d?_`
            ${this._wfcColorField("Background color",m.background_color,A=>this._wfcSetSecField(c,"background_color",A.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",m.background_opacity==null?80:m.background_opacity,80,"opacity",A=>this._wfcSetSecField(c,"background_opacity",H(parseInt(A.target.value,10)||0,0,100)))}`:Z}
    `},q._wfcSectionStyles=function(c,m){return this._wfcSubPanel("Section Styles",_`
        ${this._wfcFlushControls(c,m)}
        ${this._wfcDividerControls(c,m)}
        ${this._wfcBackgroundControls(c,m)}`)},q._wfcStockForm=function(c){return this._wfcStockFormFor(o6[c])},q._wfcStockFormFor=function(c){if(!c||!c.length)return Z;let m=Q8(this._config),d=this._getSelectedAttributes(m),A=this._schema(this.localize.bind(this),d,"chart"),g=new Map,w=D=>D.forEach(N=>{N.schema?w(N.schema):g.set(N.name,N)});w(A);let b=c.map(D=>g.get(D)).filter(Boolean);if(!b.length)return Z;let P=D=>C6[D.name]||this._computeLabel(D)||D.name;return _`
      <ha-form
        .hass=${this.hass}
        .data=${m}
        .schema=${b}
        .computeLabel=${P}
        .computeHelper=${D=>this._wfcHelper(D)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},q._wfcTitleControls=function(c,m){return _`
      ${this._wfcCheckbox("Show Title Row",m.title_show,d=>this._wfcToggleSecField(c,"title_show",d))}
      ${m.title_show?_`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${m.title_text||""}
                @change=${d=>this._wfcSetSecField(c,"title_text",d.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${m.title_icon||""}
              @value-changed=${d=>this._wfcSetSecField(c,"title_icon",d.detail&&d.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_text_align,"left")}
              ${this._wfcSelect(c,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(c,"title_font_size","Text size","px",m.title_font_size,15)}
            ${this._wfcSelect(c,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],m.title_font_weight,"600")}
            ${this._wfcNumField(c,"title_icon_size","Icon size","px",m.title_icon_size,20)}
            ${this._wfcNumField(c,"title_indent","Indent","px",m.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",m.title_color,d=>this._wfcSetSecField(c,"title_color",d.target.value))}
              ${this._wfcColorField("Icon color",m.title_icon_color,d=>this._wfcSetSecField(c,"title_icon_color",d.target.value))}
            </div>
          `:Z}
    `},q._wfcSectionOptionsBody=function(c,m){let d=m[c]||{},A=c==="details",g=c==="current",w=c==="sun_position",b=c==="sun_arc",P=c==="hourly",D=c==="daily",N=this._config.forecast||{},I=this._config.current||{},H1=H(parseInt(d.columns,10)||2,1,4),u1=this._wfcMetricOptions(typeof I2<"u"?I2:[],!0);return _`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(c)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(c,d)}
          ${g?_`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:Z}
          ${g?_`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(c,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(c,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(c,"header_temp_size","Temperature size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",u1,I.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(c)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(c)}
          ${P?_`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",N.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",N.hourly_group_size,1)}`:Z}
          ${D?_`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",N.daily_slots)}`:Z}
          ${A?_`
                ${this._wfcGroup("Layout")}
                ${d.chips?_`
                      ${this._wfcSelect(c,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.chip_layout==="column"?"wrap":d.chip_layout||"wrap","wrap")}
                      ${(d.chip_layout||"wrap")==="grid"?_`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(d.chip_columns,10)>0,W=>this._wfcSetSecField(c,"chip_columns",W.target.checked?H(parseInt(d.chip_columns,10)||2,1,6):0))}
                            ${parseInt(d.chip_columns,10)>0?this._wfcNumField(c,"chip_columns","Columns","",parseInt(d.chip_columns,10)||2,2):Z}`:Z}`:_`
                      ${this._wfcSelect(c,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.details_layout||"grid","grid")}
                      ${(d.details_layout||"grid")==="grid"?this._wfcNumField(c,"columns","Columns","",H1,2):Z}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!d.chips,W=>this._wfcToggleSecField(c,"chips",W))}
                ${d.chips?_`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square",W=>this._wfcSetSecField(c,"chip_pill",W.target.checked))}
                      ${(d.chip_pill!=null?d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?Z:this._wfcNumField(c,"chip_radius","Corner radius (0 = square)","px",d.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((d.chip_scale==null?1:d.chip_scale)*100),100,"chip_scale",W=>this._wfcSetSecField(c,"chip_scale",H((parseInt(W.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(c,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",d.chip_text_color,W=>this._wfcSetSecField(c,"chip_text_color",W.target.value))}
                      ${this._wfcColorField("Chip background",d.chip_bg,W=>this._wfcSetSecField(c,"chip_bg",W.target.value))}
                      ${this._wfcColorField("Chip border",d.chip_border_color,W=>this._wfcSetSecField(c,"chip_border_color",W.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",d.chip_show_icon!==!1,W=>this._wfcToggleSecField(c,"chip_show_icon",W))}
                      ${d.chip_show_icon!==!1?_`
                            ${this._wfcSelect(c,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],d.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(c,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",d.chip_icon_color,W=>this._wfcSetSecField(c,"chip_icon_color",W.target.value))}`:Z}
                      ${this._wfcCheckbox("Show metric name in chip",!!d.chip_show_name,W=>this._wfcToggleSecField(c,"chip_show_name",W))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!d.chip_hide_when_off,W=>this._wfcToggleSecField(c,"chip_hide_when_off",W))}`:Z}

                ${d.chips?_`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(m)}`:_`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(c,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(c,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",d.global_icon_color,W=>this._wfcSetSecField(c,"global_icon_color",W.target.value))}
                        ${this._wfcColorField("Text color",d.global_text_color,W=>this._wfcSetSecField(c,"global_text_color",W.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(m)}`}
              `:Z}

          ${w?_`
                ${this._wfcSubPanel("Time",_`
                    ${this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],d.timeframe_mode,"hours")}
                      ${d.timeframe_mode==="hours"||d.timeframe_mode==null?_`
                            ${this._wfcNumField(c,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                            ${this._wfcSelect(c,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                          `:Z}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.times_position==="center"?"overlay":d.times_position,"below")}
                      ${this._wfcSelect(c,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(c,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(W=>({value:W,label:W+(W>1?" hours":" hour")}))],d.ticks_every==null?0:d.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(c,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",_`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",d.marker_color,W=>this._wfcSetSecField(c,"marker_color",W.target.value))}
                      ${this._wfcNumField(c,"marker_opacity","Marker opacity","%",d.marker_opacity==null?100:d.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",_`
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ss_markers_position,"hidden")}
                    </div>
                    ${d.ss_markers_position&&d.ss_markers_position!=="hidden"?_`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",d.ss_markers_color,W=>this._wfcSetSecField(c,"ss_markers_color",W.target.value))}
                          ${this._wfcNumField(c,"ss_markers_opacity","Marker opacity","%",d.ss_markers_opacity==null?100:d.ss_markers_opacity,100)}
                        </div>`:Z}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",_`
                    ${this._wfcSubPanel("Metrics Defaults",_`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!d.forecast_metric_detail_icons,W=>this._wfcToggleSecField(c,"forecast_metric_detail_icons",W))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!d.forecast_temp_with_icon,W=>this._wfcToggleSecField(c,"forecast_temp_with_icon",W))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(c,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(W=>({value:W,label:W+(W>1?" hours":" hour")}))],d.forecast_every,3)}
                          ${this._wfcNumField(c,"forecast_font_size","Text size","px",d.forecast_font_size,11)}
                          ${this._wfcNumField(c,"forecast_icon_size","Icon size","px",d.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",d.forecast_temp_color,W=>this._wfcSetSecField(c,"forecast_temp_color",W.target.value))}
                        ${this._wfcColorField("Icon color",d.forecast_icon_color,W=>this._wfcSetSecField(c,"forecast_icon_color",W.target.value))}
                        ${y.some(W=>d.forecast_metric_pos&&d.forecast_metric_pos[W]&&d.forecast_metric_pos[W]!=="hidden"||k(d).includes(W))?this._wfcColorField("Metric Text Color",d.forecast_extra_color,W=>this._wfcSetSecField(c,"forecast_extra_color",W.target.value)):Z}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(c,d)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",_`
                    ${this._wfcNumField(c,"height","Bar height","px",d.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",d.weather_adjust!==!1,W=>this._wfcToggleSecField(c,"weather_adjust",W))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",d.day_color,W=>this._wfcSetSecField(c,"day_color",W.target.value))}
                      ${this._wfcColorField("Night color",d.night_color,W=>this._wfcSetSecField(c,"night_color",W.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(c,d)}
              `:Z}

          ${b?_`
                <div class="wsfc-row">
                  ${this._wfcNumField(c,"height","Arc height","px",d.height,90)}
                  ${this._wfcSelect(c,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.time_format,"auto")}
                </div>

                ${this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],d.timeframe_mode,"sunrise_sunset")}
                  ${d.timeframe_mode==="hours"?_`
                        ${this._wfcNumField(c,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                        ${this._wfcSelect(c,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                      `:Z}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",a1(d.labels_position),0,"labels_position",W=>this._wfcSetSecField(c,"labels_position",H(parseInt(W.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${d.sun_icon||""}
                  @value-changed=${W=>this._wfcSetSecField(c,"sun_icon",W.detail&&W.detail.value||"")}
                ></ha-icon-picker>
                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!d.night_moon,W=>this._wfcToggleSecField(c,"night_moon",W))}
                ${d.night_moon?_`<ha-icon-picker
                      label="Moon icon"
                      .value=${d.moon_icon||"mdi:weather-night"}
                      @value-changed=${W=>this._wfcSetSecField(c,"moon_icon",W.detail&&W.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:Z}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],d.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",d.show_arc_ticks,W=>this._wfcToggleSecField(c,"show_arc_ticks",W))}
                ${this._wfcCheckbox("Show tick marks on the baseline",d.show_base_ticks!==!1,W=>this._wfcToggleSecField(c,"show_base_ticks",W))}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],d.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",d.tick_color,W=>this._wfcSetSecField(c,"tick_color",W.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",d.show_times!==!1,W=>this._wfcToggleSecField(c,"show_times",W))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",d.show_captions!==!1,W=>this._wfcToggleSecField(c,"show_captions",W))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",d.show_ss_icons,W=>this._wfcToggleSecField(c,"show_ss_icons",W))}
                ${d.show_ss_icons?_`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${d.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${W=>this._wfcSetSecField(c,"sunrise_icon",W.detail&&W.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${d.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${W=>this._wfcSetSecField(c,"sunset_icon",W.detail&&W.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(c,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],d.ss_icon_position,"left")}
                        ${this._wfcNumField(c,"ss_icon_size","Icon size","px",d.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",d.ss_icon_color,W=>this._wfcSetSecField(c,"ss_icon_color",W.target.value))}
                    `:Z}

                ${this._wfcTextControls(c,"time","Time text",13)}
                ${this._wfcTextControls(c,"caption","Sunrise / sunset caption",11)}
              `:Z}

          ${w?Z:this._wfcSectionStyles(c,d)}
        </div>
    `};let u4={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};q._wfcPlainNum=function(c,m,d){return this._wfcPlainSlider(c,"px",m,16,"_size",d)},q._wfcDetailRows=function(c){return c.details.items.map((d,A,g)=>{let w=o[d.key]||{};return _`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${d.icon||w.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${w.label||d.key}</span>
            <ha-icon class="wsfc-ico-btn ${A===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${b=>{b.preventDefault(),b.stopPropagation(),this._wfcMoveDetail(d.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${A===g.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${b=>{b.preventDefault(),b.stopPropagation(),this._wfcMoveDetail(d.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${d.show?"mdi:eye":"mdi:eye-off"} title=${d.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${b=>{b.preventDefault(),b.stopPropagation(),this._wfcToggleDetailShow(d.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${w.icon||""}
              .value=${d.icon||""}
              @value-changed=${b=>this._wfcSetDetail(d.key,"icon",b)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${b=>this._wfcSetDetailValue(d.key,"mode",b.target.value)}>
                <option value="global" ?selected=${d.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${d.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${d.mode==="custom"?_`
                  ${this._wfcPlainNum("Icon size (px)",d.icon_size,b=>this._wfcSetDetail(d.key,"icon_size",b))}
                  ${this._wfcPlainNum("Text size (px)",d.text_size,b=>this._wfcSetDetail(d.key,"text_size",b))}
                  ${this._wfcColorField("Icon color",d.icon_color,b=>this._wfcSetDetail(d.key,"icon_color",b))}
                  ${this._wfcColorField("Text color",d.text_color,b=>this._wfcSetDetail(d.key,"text_color",b))}
                `:Z}
          </div>
        </details>
      `})};let d7=["current","details","hourly","daily","sun_arc","sun_position"];function a6(c){let m=d7.filter(A=>c.includes(A)),d=c.filter(A=>!d7.includes(A));return[...m,...d]}q._wfcEditor=function(){let c=l2(this._config),m=a6(c.order),d=c.order.map((g,w,b)=>{let P=!!(c[g]&&c[g].show);return _`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${u4[g]||c4.options}></ha-icon>
          <span class="wsfc-order-name">${i[g]||g}</span>
          <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(g,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${w===b.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(g,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${P?"mdi:eye":"mdi:eye-off"} title=${P?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(g)}></ha-icon>
        </div>
      `}),A=m.map(g=>_`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${u4[g]||c4.options}></ha-icon><span class="wsfc-panel-title">${i[g]||g}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(g,c)}
          </div>
        </details>
      `);return _`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${c4.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${d}
        </div>
      </details>
      ${A}
      ${this._wfcClockPanel(c)}
    `};let d0=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];q._wfcClockPanel=function(c){let m="current",d=c.current||{},A=w=>w==="above"?"above-center":w==="below"?"below-center":w,g=d.clock_show_time!==!1;return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",g,w=>this._wfcToggleSecField(m,"clock_show_time",w))}
                ${g?_`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",d0,A(d.clock_placement),"right")}
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
                ${d.clock_show_date?_`
                      ${this._wfcSelect(m,"clock_date_format","Date format",v2.map(w=>({value:w.value,label:w.label})),d.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...d0],d.clock_date_placement==="above"||d.clock_date_placement==="below"?A(d.clock_date_placement):d.clock_date_placement,"with_time")}
                        ${this._wfcNumField(m,"clock_date_font_size","Size","px",d.clock_date_font_size,12)}
                        ${this._wfcColorField("Date color",d.clock_date_color,w=>this._wfcSetSecField(m,"clock_date_color",w.target.value))}
                      </div>
                      ${this._wfcSelect(m,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_date_contrast!=null?d.clock_date_contrast:d.clock_contrast,"none")}`:Z}
        </div>
      </details>
    `},q._wfcYamlPanel=function(){let c;try{c=i1(this._config)}catch{c="# (unable to render YAML)"}return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${c}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,u2.__wfcResolve=l2,u2.__wfcBuild=r})();var b9=u2.prototype,Sn=(r,t)=>({config:r,hass:t,_wfcSources:b9._wfcSources,_wfcSlotEntityForKey:b9._wfcSlotEntityForKey,_wfcMetricEntityChain:b9._wfcMetricEntityChain});function wn(r,t,e){return!r||!t?[]:b9._wfcMetricEntityChain.call(Sn(r,t),e)}function _3(r,t,e){return wn(r,t,e).find(i=>!i.startsWith("weather."))||null}function u5(r,t,e){for(let i of wn(r,t,e)){let o=t.states[i];if(o){if(i.startsWith("weather.")){let a=o.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:qh(o,e),entity:i}}else if(!["unknown","unavailable",""].includes(o.state)){let a=Number(o.state);return{value:isNaN(a)?o.state:a,unit:o.attributes?.unit_of_measurement||"",entity:i}}}}return null}function qh(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function K8(r,t,e,i,o=i){return r?.entities?.[o]||_3(t,e,i)}function _r(r,t){let e=[],i=t?.devices||{};for(let o of r?.metric_sources?.sources||[]){if(o.disabled||typeof o.ref!="string"||!o.ref.startsWith("device:"))continue;let a=o.ref.slice(7);e.includes(a)||e.push(a);let H=i[a]?.config_entries||[];for(let[V,s]of Object.entries(i))!e.includes(V)&&(s.config_entries||[]).some(M=>H.includes(M))&&e.push(V)}return e}function Sr(r,t){let e=[];for(let i of _r(r,t))for(let o in t?.entities||{})t.entities[o]?.device_id===i&&e.push(o);return e}function bn(r,t,e){let i=Sr(r,t).filter(o=>{let a=t.states[o];return a&&e.test(`${o} ${a.attributes?.friendly_name||""}`)});return i.find(o=>!/indoor|inside/i.test(o))||i[0]||null}function E5(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function yn(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>_3(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let o=i.filter(a=>E5(t,a)!=null).length;return o===i.length?"online":o?"partial":"offline"}function Zn(r,t,e,i){return!e||!t?null:b9._wfcSlotEntityForKey.call(Sn(r,t),e,i)||null}var Yh={ecowitt:"Ecowitt",ecowitt_local:"Ecowitt Local",ha_ecowitt_iot:"Ecowitt Official",openweathermap:"OpenWeatherMap",pirateweather:"Pirate Weather",nws:"National Weather Service",met:"Met.no",accuweather:"AccuWeather",wunderground:"Weather Underground",weatherunderground:"Weather Underground",wundergroundpws:"Weather Underground PWS",tomorrowio:"Tomorrow.io",template:"Template"};function e4(r,t){let e=t&&r?.entities?.[t]?.platform;return e?Yh[e]||e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}var j1={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i},battery:{label:"Station battery",icon:"mdi:battery",color:"#66bb6a",digits:null,find:/batt/i,health:!0},signal:{label:"Station signal",icon:"mdi:signal",color:"#42a5f5",digits:0,find:/signal/i,health:!0},rssi:{label:"Station RSSI",icon:"mdi:wifi-strength-2",color:"#42a5f5",digits:0,find:/rssi/i,health:!0},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function m5(r,t,e,i){if(i)return i;let o=j1[r];return o?o.key?_3(t,e,o.key):o.find?bn(t,e,o.find):null:null}function X8(r,t,e){if(e!=null&&e!=="")return Number(e);let i=j1[r]?.digits;return i??(/inHg/i.test(t)||t==="V"?2:/psi|kPa/i.test(t)?1:0)}function kn(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function On(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var Qh=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],r4=r=>r==null||isNaN(r)?"\u2014":Qh[Math.round((r%360+360)%360/22.5)%16];var D2=r=>r.map(([t,e])=>({value:t,label:e})),J8=["6h","12h","24h","48h","7d","30d","90d","365d"],Tn=D2([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),Kh=D2([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),Xh=Object.entries(j1).map(([r,t])=>({value:r,label:t.label})),V7=r=>({entity:r?{domain:r}:{}}),S3={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:V7(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:V7("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Heading",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:Xh}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:V7()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"CSS color, e.g. #ef5350. Blank uses the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:D2([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above."},{name:"ranges",selector:{select:{multiple:!0,options:J8.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:J8.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:J8.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:J8.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:D2([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,schema:[{name:"view",selector:{select:{options:D2([["compass","Compass"],["rose","Wind rose (24h)"]])}}},{name:"show_chart",selector:{boolean:{}},default:!0},{name:"entities.wind_speed",selector:V7("sensor")},{name:"entities.wind_gust_speed",selector:V7("sensor")},{name:"entities.wind_bearing",selector:V7("sensor")},{name:"rose_bins",selector:{object:{}},helper:"Speed thresholds for the rose, in the sensor's unit, e.g. [1, 5, 10, 15, 25]."}]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:Kh}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:Tn}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...Tn]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:D2([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:D2([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},{name:"show_facts",selector:{boolean:{}},default:!1,helper:"Dawn, sunrise, solar noon, sunset, dusk and daylight under the tracker."}]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."}]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"overlay",selector:{select:{options:D2([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:D2([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:D2([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:D2([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"engine",selector:{select:{options:D2([["auto","Automatic"],["sgcc","Statistics Graph Chart Card (custom)"],["builtin","Home Assistant Statistics graph"]])}},default:"auto",helper:"Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card."},{name:"preset",selector:{select:{options:D2([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust, direction)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:.25,max:365,step:.25,mode:"box"}}},{name:"period",selector:{select:{options:D2([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:D2([["line","Line"],["bar","Bar"]])}},helper:"Built-in card only (the custom card sets this per series)."},{name:"stat_types",selector:{select:{multiple:!0,options:D2([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list."}]},health:{tag:"wsfc-panel-health",label:"Station health",icon:"mdi:heart-pulse",span:4,rows:0,schema:[{name:"show_devices",selector:{boolean:{}},helper:"Show device names even when there is only one."}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:V7("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},flex:{tag:"wsfc-panel-flex",label:"Weather Flex sections",icon:"mdi:view-agenda-outline",span:6,rows:0,flex:!0,schema:[]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};S3.map=S3.radar;var $n=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Height in row units (0 = fit content)."},{name:"display",selector:{select:{options:D2([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Show a panel button for it."},{name:"show",selector:{boolean:{}},default:!0,helper:"Visible when the dashboard loads."}],Rn=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Vertical: minimum height in row units."}],M2=r=>S3[r?.type]||null,s7=r=>Math.max(1,Math.min(12,Number(r.span??M2(r)?.span??6)));function Dn(r,t){let e=M2(r)||{},i=s7(r),o=i;t==="medium"&&(o=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(o=Number(r.span_narrow??(i<=3?6:12)));let a=c0(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,o)),rows:a}}var c0=r=>Math.max(0,Number(r.rows??M2(r)?.rows??0)),i4=r=>r.in_bar??(r.display==="popup"?!0:M2(r)?.inBar??!0);var Pn=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"health",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],En=new Set(["sky_bar","sun","sun_moon"]);function Fn(r,t){let e=[],i=r.filter(V=>V&&En.has(V.type)),o=i.find(V=>V.type==="sky_bar"),a=i.find(V=>V.type==="sun"||V.type==="sun_moon"),H=!1;for(let V of r){if(!V||!En.has(V.type)){e.push(V);continue}let{type:s,sky_bar:M,show_moon:p,...h}=V,v={...h,type:"sky_tracker"};if(s==="sky_bar"&&(v.show_arc=!1),s==="sun"&&(v.show_facts=V.show_facts!==!1),o&&a&&(V===o||V===a)){if(H)continue;H=!0;let x=V===o?a:o,{type:y,sky_bar:k,show_moon:O,...E}=x;Object.assign(v,E,h),v.flex=tf(x===o?x.flex:V.flex,x===o?V.flex:x.flex),delete v.show_arc,a.type==="sun"&&(v.show_facts=a.show_facts!==!1),v.flex||delete v.flex}e.push(v),s==="sun_moon"&&p!==!1&&e.push({type:"moon"})}if(t&&!e.some(V=>V?.type==="sky_tracker")){let V=e.findIndex(h=>h?.type==="hero"),M=e[V]?.flex?.wfc?.sun_position,p={type:"sky_tracker",span:12,rows:0,...M?{flex:{wfc:{sun_position:M}}}:{}};e.splice(V+1,0,p)}return e.map(V=>V?.type==="hero"?Jh(V):V)}function Jh(r){let{sky_bar:t,...e}=r;if(!e.flex?.wfc?.sun_position)return e;let{sun_position:o,...a}=e.flex.wfc,H={...e.flex,wfc:a};return Object.keys(a).length||delete H.wfc,Object.keys(H).length?e.flex=H:delete e.flex,e}function tf(r,t){if(!r&&!t)return;let e={...t?.wfc||{}};return r?.wfc?.sun_position&&(e.sun_position={...e.sun_position||{},...r.wfc.sun_position}),{...t||{},...r||{},wfc:e}}function tt(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:Pn,e=t.find(o=>o?.type==="hero"),i=!!e&&e.sky_bar!==!1&&e.flex?.wfc?.sun_position?.show!==!1&&t!==Pn;return t=Fn(t,i).map(o=>o?.type==="stack"?{...o,panels:Fn(o.panels||[],!1)}:o),t=t.filter(o=>o&&S3[o.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(o=>o.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(o=>o.type==="hero"&&r.hero&&typeof r.hero=="object"&&!o.flex?{...o,flex:r.hero}:o)}var wr=new Map;function et(r,t,e,i){if(!r?.connection||!t)return()=>{};let o=`${t}|${e}`,a=wr.get(o);return a||(a={listeners:new Set,data:null,unsub:null},wr.set(o,a),a.unsub=r.connection.subscribeMessage(H=>{a.data=H?.forecast||[],a.listeners.forEach(V=>V(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(H=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,H),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(wr.delete(o),Promise.resolve(a.unsub).then(H=>typeof H=="function"&&H()).catch(()=>{}))}}function Bn(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(o=>new Date(o.datetime).toDateString()===i)||r[t]||null}var R0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function H5(r,t){if(!R0(t))return t===void 0?r:t;let e={...R0(r)?r:{}};for(let i of Object.keys(t))e[i]=R0(t[i])&&R0(e[i])?H5(e[i],t[i]):t[i];return e}function br(r,t){if(R0(r)&&R0(t)){let e={};for(let i of Object.keys(r)){let o=br(r[i],t[i]);o!==void 0&&(e[i]=o)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function D0(r){if(!R0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let o=R0(i)?D0(i):i;R0(o)&&!Object.keys(o).length||(t[e]=o)}return t}var o4=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var yr="wsfc-flex-core",zn="wsfc-flex-core-editor";customElements.get(yr)||customElements.define(yr,u2);{let r=J5.prototype,t=r._wfcWeatherSourcesPanel,e=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":t.call(this)},r.render=function(){return this.wsfcMode!=="sources"?e.call(this):!this.hass||!this._config?"":_`${this._wfcEditorStyle()}${t.call(this)}`},r.updated=function(o){i?.call(this,o);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(H=>{let V=H.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();H.hidden=!!V&&!a.includes(V)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let H=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");H&&(H.open=!0,this.__wsfcOpened=!0)}}}var In=u2.__wfcBuild,Nn=r=>u2.__wfcResolve(r);function ef(r){return{...r,wfc:Nn(r)}}function Wn(r,t){let{entity:e,metric_sources:i,type:o,...a}={...r,wfc:Nn(r)},{entity:H,metric_sources:V,...s}=ef(t);return br(a,s)||{}}var rt=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(yr)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(o){this.error=o?.message||String(o),console.error("weather-station-flex-card: invalid Weather Flex config",o,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var w3=x4(N4(),1),rf=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],of=r=>rf.find(([t])=>r<t)[1];function Un(r,t,e=31){let i=w3.getMoonIllumination(r).phase;for(let o=1;o<=e*24;o++){let a=new Date(r.getTime()+o*36e5),H=w3.getMoonIllumination(a).phase;if(t===0?H<i:i<t&&H>=t)return a;i=H}return null}function C4(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},o=w3.getMoonIllumination(t),a=e!=null?w3.getMoonTimes(t,e,i):{};return{phase:o.phase,name:of(o.phase),fraction:o.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:Un(t,.5),nextNew:Un(t,0)}}function it(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let o=w3.getTimes(t,e,i),a=o.sunset-o.sunrise;return{sunrise:o.sunrise,sunset:o.sunset,noon:o.solarNoon,dawn:o.dawn,dusk:o.dusk,daylightMs:a}}var a4=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),ot=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});var Cf={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}},flex:{}},af={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},Hf={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}},Ct;function nf(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(Ct||(Ct=new CSSStyleSheet,Ct.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,Ct],t.__wsfcFill=!0)}function Z9(r,t){return{...Cf[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var jn=p1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,F5=class extends e1{constructor(){super();B(this,"type","flex");B(this,"defaultTitle","Weather");B(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new rt}_coreConfig(){return H5(Z9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return Z;let e=this._slot.update(this._coreConfig(),this.hass),i=this.type==="flex"?!!this.config?.title:this.config?.show_title!==!1;return _`
      ${i?X1(this.config,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${e}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}
      ${this.extra()}
    `}extra(){return Z}};B(F5,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),B(F5,"styles",[o2,jn]);var y9=class extends F5{constructor(){super(...arguments);B(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,o=i>=900?"large":i<560?"narrow":"normal";o!==this._size&&(this._size=o)}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_coreConfig(){let e=Z9("hero",this.station);return this._size==="large"&&(e=H5(e,af)),this._size==="narrow"&&(e=H5(e,Hf)),e=H5(e,this.config?.flex||{}),this.cardBg&&(e=H5(e,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}})),e}updated(){nf(this._slot.el)}render(){return!this.hass||!this.station?.entity?Z:_`<div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}`}};B(y9,"properties",{...F5.properties,cardBg:{attribute:!1}}),B(y9,"styles",[o2,jn,p1`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var Zr=class extends F5{constructor(){super(...arguments);B(this,"type","forecast");B(this,"defaultTitle","Forecast");B(this,"defaultIcon","mdi:calendar-week")}},kr=class extends F5{constructor(){super(...arguments);B(this,"type","hourly");B(this,"defaultTitle","Hourly forecast");B(this,"defaultIcon","mdi:clock-outline")}},Or=class extends F5{constructor(){super(...arguments);B(this,"type","daily");B(this,"defaultTitle","Daily forecast");B(this,"defaultIcon","mdi:calendar-week")}};function Tr(r,t){let e=H5(Z9("sky_tracker",t),r?.flex||{}),i=e.wfc,o=i.sun_arc||(i.sun_arc={}),a=i.sun_position||(i.sun_position={}),H=r?.show_arc!==!1,V=r?.show_sky!==!1,s=r?.timeframe||"hours",M=Number(r?.hours??24),p=r?.anchor||"now_center";return o.timeframe_mode=s,a.timeframe_mode=s==="sunrise_sunset"?"match_arc":s,o.timeframe_hours=a.timeframe_hours=M,o.timeframe_anchor=a.timeframe_anchor=p,o.night_moon=r?.moon!==!1,r?.moon_phase===!1?o.moon_icon==="phase"&&(o.moon_icon="mdi:weather-night"):o.moon_icon="phase",H?(i.order=["sun_arc"],o.show=!0,o.baseline_mode=V?"sky":"line",a.show=!1):(i.order=["sun_position"],o.show=!1,a.show=V),e}var at=class extends F5{constructor(){super(...arguments);B(this,"type","sky_tracker");B(this,"defaultTitle","Sky Tracker");B(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return Tr(this.config,this.station)}render(){if(!this.hass||!this.station?.entity)return Z;let e=this.config||{};return e.show_arc===!1&&e.show_sky===!1?_`${X1(e,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`:_`${e.title||e.show_title?X1(e,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}
      ${e.show_facts?this._facts():Z}`}_facts(){let e=it(this.hass);if(!e)return Z;let i=a4(this.hass),o=H=>`${Math.floor(H/36e5)}h ${String(Math.round(H%36e5/6e4)).padStart(2,"0")}m`,a=[["Dawn",i.format(e.dawn)],["Sunrise",i.format(e.sunrise)],["Solar noon",i.format(e.noon)],["Sunset",i.format(e.sunset)],["Dusk",i.format(e.dusk)],["Daylight",o(e.daylightMs)]];return _`<div class="facts">${a.map(([H,V])=>_`<div><span>${H}</span>${V}</div>`)}</div>`}};B(at,"styles",[...F5.styles,p1`
      .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; font-size: 13px; }
      .facts div span { display: block; font-size: 11px; color: var(--wsfc-muted); }
    `]);customElements.get("wsfc-panel-flex")||customElements.define("wsfc-panel-flex",F5);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",y9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",Zr);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",kr);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",Or);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",at);O2.register(F0,p5,G5,h3,E0,q5);var Ht=[JH,en];function b3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return b3("#"+i[1].split("").map(o=>o+o).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let o=parseInt(i[1],16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[o,a,H]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${o},${a},${H},${t})`}return e}function Vf(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return o=>i.format(new Date(o))}function sf(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function nt(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",o="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:sf(t,e)}}},scales:{x:{type:"linear",grid:{color:o},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:Vf(t,e)}}},_text:i,_grid:o}}var Gn=new Map;async function qn(r,t){let e=Gn.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return Gn.set(r,{at:Date.now(),data:i}),i}var Lf=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function H4(r,t,e){return Qn(r,t,Date.now()-e*36e5,`h${e}`)}function Yn(r,t){let e=new Date;return e.setHours(0,0,0,0),Qn(r,t,e.getTime(),`d${e.toDateString()}`)}function Qn(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,H=new Date(e);return qn(`h|${i}|${o.join(",")}`,async()=>{let V=await r.callWS({type:"history/history_during_period",start_time:H.toISOString(),end_time:a.toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),s={};for(let M of o)s[M]=(V?.[M]||[]).map(p=>({t:Math.round((p.lu??p.lc??0)*1e3),v:Lf(p.s)}));return s})}function Kn(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,H=new Date(a.getTime()-e*864e5);return qn(`s|${e}|${i}|${o.join(",")}`,async()=>{let V=await r.callWS({type:"recorder/statistics_during_period",start_time:H.toISOString(),end_time:a.toISOString(),statistic_ids:o,period:i,types:["mean","min","max","change"]}),s={};for(let M of o)s[M]=(V?.[M]||[]).map(p=>({t:typeof p.start=="number"?p.start:Date.parse(p.start),mean:p.mean??null,min:p.min??null,max:p.max??null,change:p.change??null}));return s})}function L7(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let o=0;o<r.length;o+=e){let a=r.slice(o,o+e),H=a.map(V=>V.v).filter(V=>V!=null);i.push({t:a[Math.floor(a.length/2)].t,v:H.length?H.reduce((V,s)=>V+s,0)/H.length:null})}return i}function Vt(r,t){let e=new Map,i=null;for(let o of r){if(o.v==null){i=null;continue}if(i!=null){let a=o.v>=i?o.v-i:o.v,H=Math.floor(o.t/t)*t;e.set(H,(e.get(H)||0)+a)}i=o.v}return[...e].map(([o,a])=>({t:o+t/2,v:Math.round(a*1e3)/1e3}))}function st(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let o=Math.floor(i.t/t)*t,a=e.get(o)||[0,0];a[0]+=i.v,a[1]++,e.set(o,a)}return[...e].map(([i,[o,a]])=>({t:i+t/2,v:o/a}))}var Xn={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},Jn=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],l7=class extends e1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let o=j1[e.metric]||{},a=m5(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),H=a&&this.hass.states[a];return{...e,entity:a,label:e.label||o.label||H?.attributes?.friendly_name||a||"\u2014",color:e.color||this.config?.colors?.[e.metric]||o.color||Jn[i%Jn.length],axis:e.axis==="right"?"right":"left",style:e.style||(o.chart==="bar"?"bar":"line"),cumulative:e.cumulative??o.cumulative??!1,unit:H?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>Xn[e])}render(){if(!this.hass)return Z;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),o=t.length>1?_7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):Z;return _`
      ${X1(this.config,this.defaultIcon,this.defaultTitle,o)}
      ${this.config?.show_readings===!1?Z:_`<div class="readings">
            ${i.map(a=>{let H=E5(this.hass,a.entity);return S7(this,{label:a.label,value:H?.value,unit:H?.unit,digits:X8(a.metric,H?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?_`<div class="note">${this._error}</div>`:Z}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(o=>[o.entity,o.style,o.axis,o.color,o.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(o=>this._error=`History unavailable: ${o?.message||o}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=Xn[t]||24,o=e.map(H=>H.entity).filter(Boolean),a=new Map;if(i<=48){let H=await H4(this.hass,o,i);for(let V of e){let s=H[V.entity]||[],M=i<=12?15*6e4:36e5,p=V.style==="bar"?V.cumulative?Vt(s,M):st(s,M):L7(s);a.set(V,{line:p.map(h=>({x:h.t,y:h.v}))})}}else{let H=i>240?"day":"hour",V=await Kn(this.hass,o,i/24,H);for(let s of e){let M=V[s.entity]||[],p=s.style==="bar"&&s.cumulative?"change":"mean";a.set(s,{line:M.map(h=>({x:h.t,y:h[p]})),min:M.map(h=>({x:h.t,y:h.min})),max:M.map(h=>({x:h.t,y:h.max}))})}}this._error=o.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let o=this.renderRoot.querySelector("canvas");if(!o)return;let a=nt(this,t,this.hass?.locale?.language),H=e.find(p=>p.axis==="left"),V=e.find(p=>p.axis==="right"),s=(p,h)=>{let v=p?.unit==="%",x={position:h,grid:h==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:$=>`${+$.toFixed(2)}${p?.unit&&p.unit.length<=3?p.unit:""}`}};v&&Object.assign(x,{min:0,max:100}),e.filter($=>$.axis===h).every($=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test($.metric||""))&&e.some($=>$.axis===h)&&(x.min=x.min??0),e.some($=>$.axis===(h==="left"?"left":"right")&&$.style==="bar")&&(x.beginAtZero=!0);let k=this.config||{},O=k[`${h}_min`],E=k[`${h}_max`];return O!=null&&O!==""&&(x.min=Number(O)),E!=null&&E!==""&&(x.max=Number(E)),x};(H||!V)&&(a.scales.y=s(H,"left")),V&&(a.scales.y2=s(V,"right"));let M=[];e.forEach((p,h)=>{let v=i.get(p);if(!v)return;let x=p.axis==="right"?"y2":"y",y={label:p.label,data:v.line,borderColor:p.color,yAxisID:x,order:h+1};p.style==="bar"?Object.assign(y,{type:"bar",backgroundColor:b3(p.color,.6),borderWidth:0,borderRadius:2,order:50+h,barPercentage:.9,categoryPercentage:1}):p.style==="area"?Object.assign(y,{backgroundColor:b3(p.color,.13),fill:"origin",borderColor:b3(p.color,.75),borderWidth:1}):p.style==="dashed"&&Object.assign(y,{borderDash:[5,4],borderWidth:1.5}),M.push(y),(p.band??(h===0&&p.style==="line"))&&v.min&&v.max&&p.style!=="bar"&&M.push({label:`${p.label} max`,_band:!0,data:v.max,borderWidth:0,pointRadius:0,yAxisID:x,order:90,fill:"+1",backgroundColor:b3(p.color,.15)},{label:`${p.label} min`,_band:!0,data:v.min,borderWidth:0,pointRadius:0,yAxisID:x,order:91})}),a.plugins.tooltip.filter=p=>!p.dataset._band,this._chart&&this._chart.destroy(),this._chart=new O2(o,{type:"line",data:{datasets:M},options:a,plugins:Ht})}};B(l7,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),B(l7,"styles",o2);var k9={temp_humidity:[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}],uv_solar:[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}],graph:[{metric:"temperature"}]},Pr=class extends l7{get defaultSeries(){return k9.temp_humidity}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},Er=class extends l7{get defaultSeries(){return k9.uv_solar}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",l7);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",Pr);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",Er);var tV={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},eV=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],O9=class extends e1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:K8(t,e,i,"wind_speed"),gust:K8(t,e,i,"wind_gust_speed"),dir:K8(t,e,i,"wind_bearing")}}render(){if(!this.hass)return _``;let t=this._view||this.config?.view||"compass",e=this.station,i=this.hass,o=u5(e,i,"wind_speed"),a=u5(e,i,"wind_gust_speed"),H=u5(e,i,"wind_bearing"),V=o?.unit||a?.unit||"";return _`
      ${X1(this.config,"mdi:weather-windy","Wind",_7([{value:"compass",label:"Compass"},{value:"rose",label:"Rose 24h"}],t,s=>this._view=s,"Wind view"))}
      <div class="top">
        <div class="dial">${t==="rose"?this._roseSvg(V):this._compassSvg(o?.value,V,H?.value)}</div>
        <div class="side">
          <div class="readings">
            ${S7(this,{label:"Speed",value:o?.value,unit:V,digits:1,color:"var(--wsfc-wind)",entity:o?.entity})}
            ${S7(this,{label:"Gust",value:a?.value,unit:a?.unit||V,digits:1,color:"var(--wsfc-gust)",entity:a?.entity})}
            ${S7(this,{label:`From ${r4(H?.value)}`,value:H?.value,unit:"\xB0",entity:H?.entity})}
          </div>
          ${t==="rose"?this._roseLegend(V):""}
        </div>
      </div>
      ${this.config?.show_chart===!1?"":_`<div class="body"><canvas aria-label="Wind speed and gust history"></canvas></div>`}
      ${this._error?_`<div class="note">${this._error}</div>`:""}
    `}_compassSvg(t,e,i){let o=[];for(let V=0;V<72;V++){let s=V*5*Math.PI/180,M=V%18===0,p=V%6===0,h=M?78:p?82:85;o.push(y1`<line class="tick" x1=${100+Math.sin(s)*h} y1=${100-Math.cos(s)*h} x2=${100+Math.sin(s)*88} y2=${100-Math.cos(s)*88} stroke-width=${M?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([V,s])=>y1`<text class="lbl ${V==="N"?"n":""}" x=${100+Math.sin(s*Math.PI/180)*66} y=${100-Math.cos(s*Math.PI/180)*66}>${V}</text>`),H=Number.isFinite(i)?i:null;return y1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${r4(H)} at ${H2(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${o}${a}
      ${H==null?"":y1`<g class="ptr" style=${`transform: rotate(${H}deg); transform-origin: 100px 100px`}>
        <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
      </g>`}
      <text class="spd" x="100" y="104">${H2(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||tV[t]||tV.mph}_roseLegend(t){let e=this._bins(t),i=e.map((o,a)=>a<e.length-1?`${o}\u2013${e[a+1]}`:`${o}+`);return _`<div class="legend">${i.map((o,a)=>_`<span><i style="background:${eV[a+1]}"></i>${o}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return y1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(s=>s.reduce((M,p)=>M+p,0)),1e-4),o=84,a=[];e.sectors.forEach((s,M)=>{let p=0;s.forEach((h,v)=>{if(!h)return;let x=p+h;a.push(y1`<path d=${lf(100,100,p/i*o,x/i*o,M*22.5-10,M*22.5+10)} fill=${eV[v]} opacity="0.9"></path>`),p=x})});let H=[.25,.5,.75,1].map(s=>y1`<circle class="ring" cx="100" cy="100" r=${o*s} stroke-dasharray="2 3"></circle>`),V=[["N",0],["E",90],["S",180],["W",270]].map(([s,M])=>y1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(M*Math.PI/180)*95} y=${100-Math.cos(M*Math.PI/180)*95}>${s}</text>`);return y1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${H}${a}${V}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(i=>this._error=`History unavailable: ${i?.message||i}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await H4(this.hass,[t.speed,t.gust,t.dir],24),i=u5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=Mf(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:L7(e[t.speed]||[]).map(o=>({x:o.t,y:o.v})),gust:L7(e[t.gust]||[]).map(o=>({x:o.t,y:o.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),o=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",H=nt(this,24,this.hass?.locale?.language);H.scales.y={min:0,grid:{color:H._grid},ticks:{color:H._text,callback:s=>`${s} ${t.unit}`,maxTicksLimit:4}};let V=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:o,backgroundColor:b3(o,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new O2(e,{type:"line",data:{datasets:V},options:H,plugins:Ht})}};B(O9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),B(O9,"styles",[o2,p1`
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
    `]);function lf(r,t,e,i,o,a){let H=(k,O)=>[r+Math.sin(O*Math.PI/180)*k,t-Math.cos(O*Math.PI/180)*k],[V,s]=H(i,o),[M,p]=H(i,a),[h,v]=H(e,a),[x,y]=H(e,o);return`M${V} ${s} A${i} ${i} 0 0 1 ${M} ${p} L${h} ${v} A${e} ${e} 0 0 0 ${x} ${y} Z`}function Mf(r,t,e){let i=r.filter(M=>M.v!=null),o=t.filter(M=>M.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),H=0,V=0,s=0;for(let M=0;M<i.length;M++){let p=i[M].t,h=Math.min((i[M+1]?.t??Date.now())-p,30*6e4);if(h<=0)continue;for(;s+1<o.length&&o[s+1].t<=p;)s++;let v=o[s]?.t<=p?o[s].v:o[0]?.v??0;if(H+=h,v<e[0]){V+=h;continue}let x=e.findIndex(k=>v<k);x===-1&&(x=e.length);let y=Math.round((i[M].v%360+360)%360/22.5)%16;a[y][x]+=h}return H?{sectors:a.map(M=>M.map(p=>p/H)),calm:V/H}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",O9);var rV=`/* required styles */\r
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
`;var df="https://api.rainviewer.com/public/weather-maps.json",pf=7,uf=600,mf=1800,hf=5*6e4,M7=null,ff=async()=>M7||(M7=(await Promise.resolve().then(()=>x4(oV(),1))).default),lt="https://server.arcgisonline.com/ArcGIS/rest/services",Fr="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",CV={gray:r=>[`${lt}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,Fr,16],streets:()=>[`${lt}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,Fr,19],topo:()=>[`${lt}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,Fr,19],imagery:()=>[`${lt}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},Af={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},T9=class extends e1{constructor(){super();B(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],o=this._overlay??this.config?.owm_default??"none";return _`
      ${X1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",e?_7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(a=>({value:a,label:`${this._radarOn?"+ ":""}${Af[a]||a}`}))],o,a=>this._setOverlay(a),"Map overlay"):"")}
      <div class="map"><div id="map"></div></div>
      ${this._radarOn?_`<div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"}>
          ${this._playing?"\u275A\u275A Pause":"\u25B6 Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel||""}</span>
        <span class="spacer"></span>
        ${this._error?_`<span class="note">${this._error}</span>`:""}
      </div>`:""}
    `}async firstUpdated(){await ff();let e=this.renderRoot.getElementById("map");if(!e||this._map)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,o=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=M7.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,o],this.config?.zoom??7),this._base=null,this._applyBase(),M7.circleMarker([i,o],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),hf)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&this.firstUpdated()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,o,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(CV[e.base_map]||CV.gray)(this._dark);this._base=M7.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:o}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(df);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),o=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!o.length||!this._map)return;let a=new Map(this._frames.map(H=>[H.path,H]));this._frames=o.map(H=>{let V=a.get(H.path);if(V)return a.delete(H.path),V;let s=M7.tileLayer(`${i.host}${H.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:pf,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...H,layer:s,nowcast:(i.radar?.nowcast||[]).includes(H)}}),a.forEach(H=>this._map.removeLayer(H.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,H)=>a.layer.setOpacity(H===e?i:0));let o=this._frames[e];if(o){let a=new Date(o.time*1e3),H=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=o.nowcast?`${H} (forecast)`:H}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?mf:uf)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=M7.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};B(T9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),B(T9,"styles",[o2,x0(rV),p1`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",T9);function E9(r){let i=r<.5,o=Math.cos(r*2*Math.PI),a=Math.abs(o)*24,H=i?1:0,V=`M26 2 A24 24 0 0 ${H} 26 50 A${a} 24 0 0 ${o>0?1-H:H} 26 2 Z`;return y1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${V} fill="#e9e6d6"></path>
  </svg>`}var P9=class extends e1{render(){if(!this.hass)return Z;let t=C4(this.hass),e=o=>o?a4(this.hass).format(o):"\u2014",i=ot(this.hass);return _`${X1(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${E9(t.phase)}</div>
        <div class="facts">
          <span class="name">${t.name}</span>
          <span>Illumination</span><span>${Math.round(t.fraction*100)}%</span>
          <span>Moonrise</span><span>${t.alwaysUp?"up all day":t.alwaysDown?"down all day":e(t.rise)}</span>
          <span>Moonset</span><span>${e(t.set)}</span>
          ${t.nextFull?_`<span>Next full</span><span>${i.format(t.nextFull)}</span>`:Z}
          ${t.nextNew?_`<span>Next new</span><span>${i.format(t.nextNew)}</span>`:Z}
        </div>
      </div>`}};B(P9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),B(P9,"styles",[o2,p1`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",P9);var vf=5*6e4,F9=class extends e1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return m5(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return Z;let t=j1[this._metric]||{},e=this._entity,i=E5(this.hass,e),o=this.config?.unit??i?.unit??"",a=X8(this._metric,o,this.config?.digits),H=this.config?.color||t.color||"var(--primary-color)",V=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?_`
      <div class="top" style=${`--m-color:${H}`} @click=${()=>z5(this,e)}>
        <ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>
        <span class="name">${V}</span>
        ${this.config?.show_minmax===!1||!this._today?Z:_`<span class="mm"><span class="lo">Min ${H2(this._today.min,a)}</span><br /><span class="hi">Max ${H2(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>z5(this,e)}>
        <div class="val">${typeof i?.value=="number"?H2(i.value,a):i?.value??"\u2014"}<small>${o}</small></div>
        <div class="cap">${this._caption(i,o)}</div>
      </div>
      ${this.config?.chart==="none"?Z:_`<div class="spark" @click=${()=>z5(this,e)}>${this._spark(H)}</div>`}
    `:_`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=j1[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?kn(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return Z;let i=200,o=40,a=e.map(R=>R.v).filter(R=>R!=null);if(!a.length)return Z;let H=Date.now()-(this.config?.hours||24)*36e5,V=Date.now(),s=R=>(R-H)/(V-H)*i,M=(this.config?.chart||j1[this._metric]?.chart)==="bar",p=Math.min(...a),h=Math.max(...a);M&&(p=0),h-p<1e-9&&(h+=1,p=M?0:p-1);let v=R=>o-(R-p)/(h-p)*o;if(M){let R=Math.max(2,i/(this.config?.hours||24)*.7);return y1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(K=>K.v>0?y1`<rect x=${s(K.t)-R/2} y=${v(K.v)} width=${R} height=${o-v(K.v)} rx="1" fill=${t}></rect>`:Z)}
        <line x1="0" x2=${i} y1=${o} y2=${o} stroke=${t} stroke-opacity=".35"></line></svg>`}let x="",y=!1;for(let R of e){if(R.v==null){y=!1;continue}x+=`${y?"L":"M"}${s(R.t).toFixed(1)} ${v(R.v).toFixed(1)}`,y=!0}let k=e.find(R=>R.v!=null),O=[...e].reverse().find(R=>R.v!=null),E=`${x}L${s(O.t).toFixed(1)} ${o}L${s(k.t).toFixed(1)} ${o}Z`,$=`g${Math.random().toString(36).slice(2,8)}`;return y1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${$} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${E} fill=${`url(#${$})`}></path>
      <path d=${x} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<vf||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,o]=await Promise.all([H4(this.hass,[t],e),Yn(this.hass,[t])]),a=i[t]||[],H=(this.config?.chart||j1[this._metric]?.chart)==="bar",V=this.config?.cumulative??j1[this._metric]?.cumulative??!1;this._series=H?V?Vt(a,36e5):st(a,36e5):L7(a,160);let s=(o[t]||[]).map(M=>M.v).filter(M=>M!=null);if(this._today=s.length?{min:Math.min(...s),max:Math.max(...s)}:null,j1[this._metric]?.trend){let M=Date.now()-108e5,p=[...a].reverse().find(v=>v.t<=M&&v.v!=null),h=[...a].reverse().find(v=>v.v!=null);if(p&&h){let v=h.v-p.v,x=On(E5(this.hass,t)?.unit||"");this._trend=v>x?"Rising":v<-x?"Falling":"Steady"}}}};B(F9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),B(F9,"styles",[o2,p1`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",F9);var xf=p1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,aV=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),$9=class extends e1{render(){if(!this.hass)return Z;let e=this.hass.states[this.station?.entity]?.state;return _`
      ${X1(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?aV(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):Z}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?Z:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],o=u5(t,e,"temperature");o&&i.push(`${H2(o.value,1)}${o.unit}`);let a=u5(t,e,"apparent_temperature");a&&o&&Math.abs(a.value-o.value)>=2&&i.push(`feels like ${H2(a.value,0)}${a.unit}`);let H=u5(t,e,"wind_speed"),V=u5(t,e,"wind_bearing"),s=u5(t,e,"wind_gust_speed");H&&(H.value<1?i.push("calm"):i.push(`wind ${V?`from the ${r4(V.value)} `:""}${H2(H.value,0)} ${H.unit}${s&&s.value>H.value*1.3?`, gusting ${H2(s.value,0)}`:""}`));let M=u5(t,e,"precipitation"),p=E5(e,m5("rain_today",t,e));M&&M.value>0?i.push(`raining ${H2(M.value,2)} ${M.unit}`):p&&p.value>0?i.push(`${H2(p.value,2)} ${p.unit} of rain today`):(M||p)&&i.push("dry");let h=u5(t,e,"humidity");if(h&&i.push(`humidity ${H2(h.value,0)}%`),!i.length)return"Waiting for station data.";let v=i.join(", ");return v[0].toUpperCase()+v.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return Z;let i=e.attributes||{},o=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return _`<div class="text" @click=${()=>z5(this,t)}>${o}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return Z;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?Z:i.slice(0,3).map(o=>{let a=String(o.Severity||o.severity||"").toLowerCase();return _`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>z5(this,t)}>
        <b>${o.Event||o.event||o.title||"Weather alert"}</b>${o.Headline||o.headline||""}
      </div>`})}_astro(){let t=a4(this.hass),e=ot(this.hass),i=it(this.hass),o=C4(this.hass),a=H=>`${Math.floor(H/36e5)}h ${String(Math.round(H%36e5/6e4)).padStart(2,"0")}m`;return _`<div class="astro">
      ${this.config?.show_sun===!1||!i?Z:_`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?Z:_`<div><h4>${E9(o.phase)}${o.name}</h4>
            <p>${Math.round(o.fraction*100)}% illuminated<br />
            ${o.nextFull?_`Full ${e.format(o.nextFull)}`:""}${o.nextNew?_` · New ${e.format(o.nextNew)}`:""}</p></div>`}
    </div>`}};B($9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),B($9,"styles",[o2,p1`
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
    `]);var R9=class extends e1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=et(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return Z;let t=Number(this.config?.day_offset??1),e=Bn(this._daily,t),i=this.config?.entity||this.station?.entity,o=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let H=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),V=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${H}`:H);if(!e)return _`${X1(this.config,"mdi:calendar-today",V)}<div class="note">Forecast not available yet.</div>`;let s=o.temperature_unit||"",M=o.precipitation_unit||"",p=o.wind_speed_unit||"",h=[];return e.precipitation!=null&&h.push(["Precipitation",`${H2(e.precipitation,M==="in"?2:1)} ${M}`]),e.precipitation_probability!=null&&h.push(["Chance of rain",`${H2(e.precipitation_probability)}%`]),e.wind_speed!=null&&h.push(["Wind",`${e.wind_bearing!=null?`${r4(Number(e.wind_bearing))} `:""}${H2(e.wind_speed)} ${p}`]),e.wind_gust_speed!=null&&h.push(["Gusts",`${H2(e.wind_gust_speed)} ${p}`]),e.humidity!=null&&h.push(["Humidity",`${H2(e.humidity)}%`]),e.uv_index!=null&&h.push(["UV index",H2(e.uv_index,1)]),_`
      ${X1(this.config,"mdi:calendar-today",V)}
      <div class="main" @click=${()=>z5(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?_`<span class="lo">${H2(e.templow)}°</span> / `:Z}<span class="hi">${H2(e.temperature)}°</span></div>
          <div class="cond">${aV(this.hass,e.condition)}${s?` \xB7 ${s}`:""}</div>
        </div>
      </div>
      <div class="rows">${h.map(([v,x])=>_`<span>${v}</span><span>${x}</span>`)}</div>
    `}};B(R9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),B(R9,"styles",[o2,xf,p1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var D9=class extends e1{render(){let t=this.config||{},e=t.show_status?yn(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return _`
      ${t.icon===""?Z:_`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      <div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?_`<div class="sub">${t.subtitle}</div>`:Z}</div>
      ${e?_`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:Z}
      <span class="grow"></span>
      ${this.bar?_`<div class="bar">${this.bar}</div>`:Z}
    `}};B(D9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),B(D9,"styles",[S6,p1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var B9=class extends e1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),_`${this.config?.title?X1(this.config,"mdi:card-outline",""):Z}
      ${this._err?_`<div class="note">${this._err}</div>`:_`<div class="host">${this._el||Z}</div>`}`):_`${X1(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};B(B9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),B(B9,"styles",[o2,p1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",$9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",R9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",D9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",B9);var z9=class extends e1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=(this.config?.panels||[]).filter(i=>i&&S3[i.type]);if(!t.length)return _`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical";return t.map((i,o)=>{let a=M2(i);if(!a)return Z;let H=Number(i.grow??(e?i.rows?1:0:1)),V=Number(i.rows??0),s=[`--grow:${H}`,i.min_width?`--basis:${i.min_width}px`:"",e&&V?`min-height:calc(${V} * var(--wsfc-row, 110px) + ${V-1} * var(--wsfc-gap, 12px))`:""].join(";"),M=a.bare||i.type==="stack";return _`<section class="tile ${i.type} ${M?"bare":""}" style=${s}>${this._el(i,o)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,o=this._els.get(i);if(!o){o=document.createElement(M2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,o)}return o.config=t,o.station=this.station,o.hass=this.hass,o}};B(z9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),B(z9,"styles",[_6,p1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",z9);var B0=x4(N4(),1);var HV=180/Math.PI,nV=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`,c7=r=>r instanceof Date&&!isNaN(r),I9=class extends e1{render(){if(!this.hass)return Z;let{latitude:t,longitude:e}=this.hass.config||{};if(t==null)return _`${X1(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,o=new Date(i);o.setHours(12,0,0,0);let a=B0.getTimes(o,t,e),H=new Date(o);H.setDate(H.getDate()-1);let V=B0.getTimes(H,t,e),s=B0.getMoonTimes(i,t,e),M=C4(this.hass,i),p=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),h=$=>c7($)?p.format($):"\u2014",v=c7(a.sunset)&&c7(a.sunrise)?a.sunset-a.sunrise:null,x=c7(V.sunset)&&c7(V.sunrise)?V.sunset-V.sunrise:null,y=v!=null&&x!=null?Math.round((v-x)/6e4):null,k=c7(a.dusk)&&c7(a.dawn)?a.dusk-a.dawn:null,O=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",s.rise,s.set,!0]],E=this.config||{};return _`
      ${X1(E,"mdi:telescope","Astronomy")}
      <div class="wrap">
        ${E.show_chart===!1?Z:_`<div class="chart">${this._chart(t,e,i)}</div>`}
        <div class="side">
          <table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${O.map(([$,R,K,G])=>_`<tr class=${G?"main":""}><td>${$}</td>
              <td>${$==="Moon"&&s.alwaysUp?"up all day":$==="Moon"&&s.alwaysDown?"down all day":h(R)}</td>
              <td>${$==="Moon"&&(s.alwaysUp||s.alwaysDown)?"":h(K)}</td></tr>`)}
          </table>
          <div class="sum">
            <div><span>Length of day</span>${nV(v)}${y!=null?_`<span class="d" style="display:inline">${y>=0?"+":"\u2212"}${Math.abs(y)}m</span>`:Z}</div>
            <div><span>Visible light</span>${nV(k)}</div>
            <div><span>Solar noon</span>${h(a.solarNoon)}</div>
            <div class="moon">${E9(M.phase)}<div><span>${M.name}</span>${Math.round(M.fraction*100)}% illuminated</div></div>
          </div>
        </div>
      </div>
    `}_chart(t,e,i){let M=new Date(i);M.setHours(0,0,0,0);let p=96,h=864e5/p,v=J=>70-J/90*58,x=J=>{let a1="";for(let i1=0;i1<=p;i1++){let m1=new Date(M.getTime()+i1*h);a1+=`${i1?"L":"M"}${(i1/p*300).toFixed(1)} ${v(J(m1)).toFixed(1)}`}return a1},y=J=>B0.getPosition(J,t,e).altitude*HV,k=J=>B0.getMoonPosition(J,t,e).altitude*HV,O=(i-M)/864e5*300,E=y(i),$=k(i),R=[0,6,12,18,24],K=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),G="var(--wsfc-sun-color, #fdd835)",c1="var(--wsfc-moon-color, #b0bec5)";return y1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${R.map(J=>y1`<line x1=${J/24*300} x2=${J/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,J/24*300))} y=${144} text-anchor="middle">${K.format(new Date(M.getTime()+J*36e5))}</text>`)}
      <path d=${x(k)} fill="none" stroke=${c1} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${x(y)} fill="none" stroke=${G} stroke-width="2.2" opacity=".35"></path>
      <path d=${x(y)} fill="none" stroke=${G} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${O} x2=${O} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${O} cy=${v($)} r="5" fill=${c1} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${O} cy=${v(E)} r="7" fill=${G} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${G}>Sun ${Math.round(E)}°</text>
      <text class="lbl" x="4" y=${32} fill=${c1}>Moon ${Math.round($)}°</text>
    </svg>`}};B(I9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),B(I9,"styles",[o2,p1`
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
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",I9);var gf={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function _f(r,t){let e=Number(r.latitude??t?.config?.latitude??39.5),i=Number(r.longitude??t?.config?.longitude??-98.35),o=t?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(o?"in":"mm"),metricTemp:r.temp_unit||(o?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(o?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:e.toFixed(3),lon:i.toFixed(3),detailLat:e.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var N9=class extends e1{render(){if(!this.hass)return Z;let t=this.config||{},e=_f(t,this.hass);return e!==this._url&&(this._url=e),_`${t.show_title===!1?Z:X1(t,"mdi:weather-windy",t.title||`${gf[t.overlay||"wind"]||"Wind"} map`)}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`}};B(N9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),B(N9,"styles",[o2,p1`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",N9);var y3={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}},Mt={temps:{card:{hours_to_show:36,points_per_hour:4},series:{temperature:{color:"#ff7043",fill_opacity:.25,show_extrema:"always"},apparent_temperature:{color:"#ffb74d",show_fill:!1,line_style:"dashed",line_width:1.5},dew_point:{color:"#26c6da",show_fill:!1,line_width:1.5}}},wind:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0,lower_bound_secondary:0,upper_bound_secondary:360},metrics:["wind_speed","wind_gust_speed","wind_bearing"],series:{wind_speed:{color:"#42a5f5",aggregate_func:"avg",show_fill:!1,show_extrema:"always",show_extrema_min:!1},wind_gust_speed:{color:"#ff9800",aggregate_func:"max",fill_opacity:.2,line_width:1,show_extrema:"always",show_extrema_min:!1},wind_bearing:{color:"#9e9e9e",y_axis:"secondary",show_fill:!1,line_width:1,smooth:!1,graph_type:"step",unit:"\xB0"}}},pressure_humidity:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0},series:{pressure:{color:"#42a5f5",show_fill:!1,decimals:2},humidity:{color:"#26a69a",y_axis:"secondary",fill_opacity:.2}}},solar_uv:{card:{hours_to_show:24,points_per_hour:4,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{solar_radiation:{color:"#ffd54f",fill_opacity:.3,show_extrema:"always",show_extrema_min:!1},uv_index:{color:"#ff7043",y_axis:"secondary",aggregate_func:"max",show_fill:!1,line_width:2}}},rain:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{rain_rate:{color:"#7e57c2",graph_type:"bar",aggregate_func:"max",decimals:2},rain_today:{color:"#1e88e5",y_axis:"secondary",aggregate_func:"max",fill_opacity:.2,decimals:2,smooth:!1}}},temperature_range:{card:{hours_to_show:720,group_by:"date"},series:{temperature:{color:"#ff7043",show_range_band:!0,show_fill:!1,show_extrema:"always"}}}};function $r(r){let t=r?.engine||"auto";return t==="builtin"?"builtin":t==="sgcc"||customElements.get("statistics-graph-chart-card")?"sgcc":"builtin"}function Sf(r,t,e){return $r(r)==="sgcc"?wf(r,t,e):bf(r,t,e)}function wf(r,t,e){let i=Mt[r.preset]||Mt.temps,o=y3[r.preset]||y3.temps,a=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics||o.metrics,H=Array.isArray(r.entities)&&r.entities.length?r.entities:a.map(s=>{let M=m5(s,t,e,r.entity_overrides?.[s]);if(!M)return null;let p=r.colors?.[s];return{entity:M,name:j1[s]?.label||s,...i.series?.[s]||{},...p?{color:p}:{}}}).filter(Boolean),V={type:"custom:statistics-graph-chart-card",card_header:"",card_shadow:!1,card_border:!1,card_background_color:"transparent",card_padding:0,height:"auto",show_legend:!0,...i.card,entities:H};return H.some(s=>s.y_axis==="secondary")||(delete V.show_y2_axis,delete V.lower_bound_secondary,delete V.upper_bound_secondary),r.days_to_show!=null&&(V.hours_to_show=Number(r.days_to_show)*24),r.hours_to_show!=null&&(V.hours_to_show=Number(r.hours_to_show)),H5(V,r.card||{})}function bf(r,t,e){let i=y3[r.preset]||y3.temps,o=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:o.map(V=>{let s=m5(V,t,e,r.entity_overrides?.[V]);return s?{entity:s,name:j1[V]?.label||V}:null}).filter(Boolean),H={type:"statistics-graph",...i.card,entities:a};for(let V of["days_to_show","period","chart_type","stat_types","hide_legend"])r[V]!=null&&(H[V]=r[V]);return H5(H,r.card||{})}var W9=class extends e1{connectedCallback(){super.connectedCallback(),customElements.get("statistics-graph-chart-card")||customElements.whenDefined("statistics-graph-chart-card").then(()=>this.requestUpdate())}render(){if(!this.hass)return Z;let t=this.config||{},e=y3[t.preset]||y3.temps,i=Sf(t,this.station,this.hass);return i.entities?.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),_`${t.show_title===!1?Z:X1(t,e.icon,e.title)}
      ${this._err?_`<div class="note">${this._err}</div>`:_`<div class="host">${this._el||Z}</div>`}`):_`${X1(t,e.icon,e.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};B(W9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),B(W9,"styles",[o2,p1`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",W9);var yf=[["online",(r,t)=>t==="connectivity"||/\bonline\b/.test(r)],["battery",(r,t)=>t==="battery"||/batt/.test(r)],["capacitor",r=>/capacitor|cap[\s_-]?volt/.test(r)],["rssi",(r,t)=>/rssi/.test(r)||t==="signal_strength"&&/dbm/.test(r)],["signal",(r,t)=>/signal/.test(r)||t==="signal_strength"]],Zf={online:"mdi:lan-connect",battery:"mdi:battery",capacitor:"mdi:flash",rssi:"mdi:wifi-strength-2",signal:"mdi:signal"},kf={online:"Online",battery:"Battery",capacitor:"Capacitor",rssi:"RSSI",signal:"Signal"};function Of(r,t){let e=t?.state,i=t?.attributes||{};if(e==null||e==="unavailable"||e==="unknown")return"bad";let o=Number(e),a=i.unit_of_measurement||"";if(r==="online")return e==="on"?"ok":"bad";if(r==="battery")return t.entity_id.startsWith("binary_sensor.")?e==="on"?"bad":"ok":a==="%"?o<15?"bad":o<30?"warn":"ok":a==="V"?o<2.3?"bad":o<2.5?"warn":"ok":!isNaN(o)&&o<=5?o<=1?"bad":o<=2?"warn":"ok":"";if(r==="capacitor")return a==="V"&&o<2.3?"warn":"ok";if(r==="rssi")return o<-90?"bad":o<-80?"warn":"ok";if(r==="signal"){if(a==="%")return o<25?"bad":o<50?"warn":"ok";if(!isNaN(o)&&o<=4)return o<=1?"bad":o<=2?"warn":"ok"}return""}function Tf(r,t){let e=[];for(let i of _r(r,t)){let o=t.devices?.[i],a=[];for(let[V,s]of Object.entries(t.entities||{})){if(s.device_id!==i)continue;let M=t.states[V];if(!M)continue;let p=`${V} ${M.attributes?.friendly_name||""} ${M.attributes?.unit_of_measurement||""}`.toLowerCase(),h=M.attributes?.device_class,v=yf.find(([,k])=>k(p,h))?.[0];if(!v)continue;let x=M.attributes?.friendly_name||V,y=o?.name_by_user||o?.name;y&&x.startsWith(y)&&(x=x.slice(y.length).trim()||kf[v]),a.push({eid:V,kind:v,name:x,st:M,level:Of(v,M),platform:s.platform})}let H=["online","battery","capacitor","signal","rssi"];a.sort((V,s)=>H.indexOf(V.kind)-H.indexOf(s.kind)||V.name.localeCompare(s.name)),a.length&&e.push({device:o?.name_by_user||o?.name||i,model:o?.model,rows:a})}return e}var U9=class extends e1{render(){if(!this.hass)return Z;let t=this.config||{},e=Tf(this.station,this.hass),i=o=>{let a=o.st,H=a.attributes?.unit_of_measurement||"";return o.kind==="online"?a.state==="on"?"Online":"Offline":a.entity_id.startsWith("binary_sensor.")?o.kind==="battery"?a.state==="on"?"Low":"OK":a.state:["unavailable","unknown"].includes(a.state)?"\u2014":`${a.state}${H?` ${H}`:""}`};return _`
      ${X1(t,"mdi:heart-pulse","Station health")}
      ${e.length?e.map(o=>_`<div class="grp">
            ${e.length>1||t.show_devices?_`<div class="dev">${o.device}${o.model?` \xB7 ${o.model}`:""}</div>`:Z}
            <div class="rows">${o.rows.map(a=>_`<div class="row ${a.level}" @click=${()=>z5(this,a.eid)} title=${a.eid}>
              <ha-icon icon=${a.kind==="battery"&&a.level==="bad"?"mdi:battery-alert":Zf[a.kind]}></ha-icon>
              <div class="t"><div class="n">${a.name}</div><div class="v">${i(a)}</div></div>
            </div>`)}</div>
          </div>`):_`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `}_lastReport(){let e=["temperature","humidity","wind_speed","pressure"].map(H=>_3(this.station,this.hass,H)).filter(Boolean).map(H=>Date.parse(this.hass.states[H]?.last_updated||this.hass.states[H]?.last_changed||"")).filter(H=>!isNaN(H));if(!e.length)return Z;let i=Math.round((Date.now()-Math.max(...e))/6e4),o=i>30?"bad":i>10?"warn":"",a=i<1?"just now":i<60?`${i} min ago`:`${Math.floor(i/60)} h ${i%60} min ago`;return _`<div class="last ${o}">Last reading ${a}</div>`}};B(U9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),B(U9,"styles",[o2,p1`
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
    `]);customElements.get("wsfc-panel-health")||customElements.define("wsfc-panel-health",U9);var Rr=30,j9=4,VV=10,Dr=r=>r.title?r.title:r.type==="metric"?j1[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(M2(r)?.label||r.type).replace(/ \(.*\)$/,""),sV=r=>r.icon||r.type==="metric"&&j1[r.metric]?.icon||M2(r)?.icon||"mdi:square-outline",G9=class extends e1{_gridIdx(){return(this.panels||[]).map((t,e)=>e).filter(t=>this.panels[t].display!=="popup")}render(){let t=this.panels||[],e=this._order||this._gridIdx(),i=t.map((o,a)=>a).filter(o=>t[o].display==="popup");return _`
      <div class="grid" style=${`--row:${Rr}px;--gap:${j9}px`}>
        ${e.map(o=>this._block(t[o],o))}
      </div>
      ${i.length?_`<div class="pops"><span>Pop-ups:</span>${i.map(o=>_`<span class="pop"><ha-icon icon=${sV(t[o])}></ha-icon>${Dr(t[o])}</span>`)}</div>`:Z}
    `}_block(t,e){let i=this._size?.index===e?this._size:null,o=i?i.span:s7(t),a=i?i.rows:c0(t),H=`grid-column: span ${o}; grid-row: span ${Math.max(1,a)};`,V=["blk",t.show===!1?"hidden":"",this._drag?.index===e?"dragging":"",i?"sizing":"",t.type].join(" ");return _`<div class=${V} style=${H} data-i=${e} tabindex="0" role="button"
        aria-label=${`${Dr(t)}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${s=>this._startMove(s,e)} @keydown=${s=>this._key(s,e)}>
      <ha-icon icon=${sV(t)}></ha-icon>
      <span class="nm">${Dr(t)}</span>
      <span class="dim">${o}×${a||"a"}</span>
      <span class="rz x" @pointerdown=${s=>this._startSize(s,e,"x")}></span>
      <span class="rz y" @pointerdown=${s=>this._startSize(s,e,"y")}></span>
      <span class="rz xy" @pointerdown=${s=>this._startSize(s,e,"xy")}></span>
    </div>`}_startMove(t,e){if(t.button!==0||t.target.classList.contains("rz"))return;t.preventDefault();let i=t.currentTarget;i.setPointerCapture(t.pointerId),this._order=this._gridIdx(),this._drag={index:e,x0:t.clientX,y0:t.clientY,moved:!1};let o=H=>this._onMove(H),a=()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let H=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),V=this._order;this._drag=null,this._order=null,H&&this._commitOrder(V)};i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(t){let e=this._drag;if(!e||!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<4)return;e.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(V=>Number(V.dataset.i)!==e.index),o=null;for(let V of i){let s=V.getBoundingClientRect();if(t.clientX>=s.left&&t.clientX<=s.right&&t.clientY>=s.top&&t.clientY<=s.bottom){o={i:Number(V.dataset.i),after:t.clientX>s.left+s.width/2};break}}if(!o){let V=i[i.length-1]?.getBoundingClientRect();if(V&&t.clientY>V.bottom)o={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(V=>V!==e.index),H=a.indexOf(o.i)+(o.after?1:0);a.splice(H,0,e.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(t){let e=this.panels,i=t.map(a=>e[a]),o=e.map(a=>a.display==="popup"?a:i.shift());this._emit(o)}_startSize(t,e,i){if(t.button!==0)return;t.preventDefault(),t.stopPropagation();let o=t.currentTarget;o.setPointerCapture(t.pointerId);let H=(this.renderRoot.querySelector(".grid").clientWidth-11*j9)/12+j9,V=this.panels[e],s=s7(V),M=c0(V);this._size={index:e,span:s,rows:M};let p=t.clientX,h=t.clientY,v=y=>{let k=i==="y"?s:Math.max(1,Math.min(12,s+Math.round((y.clientX-p)/H))),E=i==="x"?M:Math.max(0,Math.min(VV,(M||1)+Math.round((y.clientY-h)/(Rr+j9))));i!=="x"&&M===0&&E===1&&Math.abs(y.clientY-h)<(Rr+j9)/2&&(E=0),(k!==this._size.span||E!==this._size.rows)&&(this._size={index:e,span:k,rows:E})},x=()=>{o.removeEventListener("pointermove",v),o.removeEventListener("pointerup",x),o.removeEventListener("pointercancel",x);let{span:y,rows:k}=this._size;this._size=null,(y!==s||k!==M)&&this._commitSize(e,y,k)};o.addEventListener("pointermove",v),o.addEventListener("pointerup",x),o.addEventListener("pointercancel",x)}_commitSize(t,e,i){let o=M2(this.panels[t])||{},a={...this.panels[t],span:e,rows:i};e===o.span&&delete a.span,i===(o.rows??0)&&delete a.rows;let H=this.panels.slice();H[t]=a,this._emit(H)}_key(t,e){let i=this._gridIdx(),o=i.indexOf(e);if(t.shiftKey){let a=this.panels[e],H={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!H)return;t.preventDefault(),this._commitSize(e,Math.max(1,Math.min(12,s7(a)+H[0])),Math.max(0,Math.min(VV,c0(a)+H[1])))}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let a=o+(t.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let H=i.slice();[H[o],H[a]]=[H[a],H[o]],this._commitOrder(H),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(t){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:t}}))}};B(G9,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0}}),B(G9,"styles",p1`
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",G9);var LV="__other__",q9=class extends e1{_name(t){let e=this.hass?.states?.[t],i=e?.attributes?.friendly_name||t,o=e&&!["unknown","unavailable"].includes(e.state)&&!t.startsWith("weather.")?` \xB7 ${e.state}${e.attributes?.unit_of_measurement?` ${e.attributes.unit_of_measurement}`:""}`:"";return`${i}${o}`}_emit(t){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!1}))}render(){let t=this.value||"",e=[...new Set([...this.candidates||[],...t?[t]:[]])].filter(o=>o!==this.defaultEntity||t===o),i=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return _`
      <div class="row">
        <select class=${t?"":"def"} aria-label=${this.label||"Entity"} @change=${o=>{let a=o.target.value;if(a===LV){this._other=!0,o.target.value=t;return}this._emit(a)}}>
          <option value="" ?selected=${!t}>${i}</option>
          ${e.map(o=>_`<option value=${o} ?selected=${o===t}>${this._name(o)}</option>`)}
          <option value=${LV}>Other entity…</option>
        </select>
        ${t?_`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:Z}
      </div>
      ${this._other?_`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:t}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${o=>{o.stopPropagation();let a=o.detail.value?.e;a&&this._emit(a)}}></ha-form></div>`:Z}
    `}};B(q9,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),B(q9,"styles",p1`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",q9);var Pf=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],ct=r=>typeof r=="string"&&r.startsWith("device:"),Y9=class extends e1{constructor(){super(),this._open=new Set}get _sources(){let t=this.config?.metric_sources||{};return Array.isArray(t.sources)?t.sources.filter(e=>e?.ref).map(e=>({ref:e.ref,overrides:{...e.overrides||{}},disabled:!!e.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(t){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:t}}}_commit(t){let e=t.filter(M=>M?.ref).map(M=>{let p=Object.fromEntries(Object.entries(M.overrides||{}).filter(([,h])=>h));return{ref:M.ref,...Object.keys(p).length?{overrides:p}:{},...M.disabled?{disabled:!0}:{}}}),i={...this.config?.metric_sources||{}};delete i.primary,delete i.fallback,delete i.custom,delete i.device_map,e.length?i.sources=e:delete i.sources;let o=M=>(this.hass?.states?.[M]?.attributes?.supported_features&7)!==0,a=M=>M.map(p=>p.ref).filter(p=>typeof p=="string"&&p.startsWith("weather.")),H=a(e.filter(M=>!M.disabled)),V=a(e),s=H.find(o)||H[0]||V.find(o)||V[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:s,metric_sources:Object.keys(i).length?i:void 0}}))}_info(t){let e=this.hass;if(ct(t)){let o=e?.devices?.[t.slice(7)],a=Object.keys(e?.entities||{}).find(H=>e.entities[H].device_id===t.slice(7));return{icon:"mdi:access-point",name:o?.name_by_user||o?.name||t.slice(7),kind:"Station device",sub:[o?.manufacturer,o?.model].filter(Boolean).join(" "),integ:e4(e,a)}}let i=e?.states?.[t];return t.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:i?.attributes?.friendly_name||t,kind:"Weather entity",sub:"forecast + condition",integ:e4(e,t)}:{icon:"mdi:eye-outline",name:i?.attributes?.friendly_name||t,kind:"Sensor",sub:t,integ:e4(e,t)}}_candidates(t,e){let i=this.hass;if(!ct(t))return[];let o=e&&i.states[e]?.attributes?.unit_of_measurement,a=t.slice(7),H=i.devices?.[a]?.config_entries||[],V=new Set([a,...Object.entries(i.devices||{}).filter(([,s])=>(s.config_entries||[]).some(M=>H.includes(M))).map(([s])=>s)]);return Object.keys(i.entities||{}).filter(s=>s.startsWith("sensor.")&&V.has(i.entities[s].device_id)&&i.states[s]?.attributes?.unit_of_measurement&&(!o||i.states[s].attributes.unit_of_measurement===o)).sort()}render(){if(!this.hass)return Z;let t=this._sources,e=this._station(t),i=t.some(o=>o.ref.startsWith("weather.")&&!o.disabled);return _`
      <div class="list">
        ${t.map((o,a)=>this._source(o,a,t,e))}
      </div>
      ${i?Z:_`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(t):_`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(t,e,i,o){let a=this._info(t.ref),H=this._open.has(t.ref),V=Pf.map(([h,v])=>{let x=Zn(o,this.hass,t.ref,h),y=t.ref.startsWith("weather.")?this.hass.states[t.ref]?.attributes?.[h]!=null:!!x;return{k:h,label:v,def:t.ref.startsWith("weather.")?y?t.ref:null:x,ov:t.overrides[h]||"",has:y||!!t.overrides[h]}}),s=V.filter(h=>h.has).length,M=h=>{let v=i.map(x=>({...x,overrides:{...x.overrides}}));h(v),this._commit(v)},p=()=>{let h=new Set(this._open);h.has(t.ref)?h.delete(t.ref):h.add(t.ref),this._open=h};return _`<div class="src ${H?"open":""} ${t.disabled?"off":""}">
      <div class="hd" @click=${p} role="button" tabindex="0" aria-expanded=${String(H)} @keydown=${h=>(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),p())}>
        <span class="rank">${e+1}</span>
        <ha-icon class="lead" icon=${a.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${a.name}${t.disabled?_` <span class="tag">hidden</span>`:Z}</div>
          <div class="sb"><span class="pill">${a.kind}</span>${a.integ?_`<span class="pill integ">${a.integ}</span>`:Z}<span>${s} value${s===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${h=>h.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${e===0} @click=${()=>M(h=>[h[e-1],h[e]]=[h[e],h[e-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${e===i.length-1} @click=${()=>M(h=>[h[e+1],h[e]]=[h[e],h[e+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${t.disabled?"Use this source":"Skip this source"} @click=${()=>M(h=>h[e].disabled=!h[e].disabled)}><ha-icon icon=${t.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>M(h=>h.splice(e,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${H?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${H?_`<div class="bd">
            ${a.sub?_`<div class="meta">${a.sub}</div>`:Z}
            <div class="tbl">
              ${V.filter(h=>h.has||ct(t.ref)).map(h=>{let v=h.ov||h.def,x=v&&!v.startsWith("weather.")?E5(this.hass,v):null,y=v?.startsWith("weather.")?this.hass.states[v]?.attributes?.[h.k]:null;return _`<span class="k">${h.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${h.ov} .defaultEntity=${h.def}
                    .defaultLabel=${t.ref.startsWith("weather.")&&!h.ov?h.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(t.ref,h.def)} label=${h.label}
                    @value-changed=${k=>M(O=>O[e].overrides[h.k]=k.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${x?`${x.value} ${x.unit}`:y!=null?String(y):""}</span>`})}
            </div>
            ${t.ref.startsWith("weather.")?_`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:Z}
          </div>`:Z}
    </div>`}_addForm(t){let e=i=>{if(!i||t.some(H=>H.ref===i)){this._adding=!1;return}this._adding=!1;let o=t.slice(),a=o.findIndex(H=>H.ref.startsWith("weather."));ct(i)&&a>=0?o.splice(a,0,{ref:i,overrides:{}}):o.push({ref:i,overrides:{}}),this._commit(o)};return _`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.d&&`device:${i.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};B(Y9,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),B(Y9,"styles",p1`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",Y9);var n4=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],Ef=r=>/^#[0-9a-f]{6}$/i.test(r||"")?r:/^#[0-9a-f]{3}$/i.test(r||"")?"#"+r.slice(1).split("").map(t=>t+t).join(""):"#888888";function Ff(r){if(r.type==="statistics"){let t=r.preset||"temps",e=Mt[t]||{};return((Array.isArray(r.metrics)&&r.metrics.length?r.metrics:e.metrics||y3[t]?.metrics)||[]).map((o,a)=>({metric:o,color:r.colors?.[o],defColor:e.series?.[o]?.color||j1[o]?.color||n4[a%n4.length],entity:r.entity_overrides?.[o]||"",key:"map"}))}return Array.isArray(r.series)&&r.series.length?r.series.map((t,e)=>({metric:t.metric,idx:e,color:t.color,defColor:j1[t.metric]?.color||n4[e%n4.length],entity:t.entity||"",label:t.label,key:"list"})):(k9[r.type]||k9.graph).map((t,e)=>({metric:t.metric,color:r.colors?.[t.metric],defColor:t.color||j1[t.metric]?.color||n4[e%n4.length],entity:r.entities?.[t.metric]||"",key:"map"}))}var Q9=class extends e1{_set(t,e,i){let o=o4(this.panel);if(t.key==="list")o.series[t.idx]=D0({...o.series[t.idx],[e]:i||void 0});else{let a=e==="color"?"colors":o.type==="statistics"?"entity_overrides":"entities";o[a]=D0({...o[a]||{},[t.metric]:i||void 0}),Object.keys(o[a]).length||delete o[a]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:o}}))}_candidates(t){let e=t&&this.hass.states[t]?.attributes?.unit_of_measurement;return Sr(this.station,this.hass).filter(i=>i.startsWith("sensor.")&&(!e||this.hass.states[i]?.attributes?.unit_of_measurement===e))}render(){if(!this.hass||!this.panel)return Z;let t=Ff(this.panel),e=this.panel.type!=="statistics"||$r(this.panel)==="sgcc";return _`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${t.map(i=>{let o=m5(i.metric,this.station,this.hass),a=i.color||i.defColor;return _`<span class="k">${i.label||j1[i.metric]?.label||i.metric||"Series"}</span>
          <span class="c">
            ${e?_`<input type="color" .value=${Ef(a)} title="Line color" aria-label="Line color" @change=${H=>this._set(i,"color",H.target.value)} />
                ${i.color?_`<button type="button" title="Default color" @click=${()=>this._set(i,"color","")}>↺</button>`:Z}`:_`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${i.entity} .defaultEntity=${o} .candidates=${this._candidates(o)} label=${`${i.metric} sensor`}
            @value-changed=${H=>this._set(i,"entity",H.detail.value)}></wsfc-entity-select>`})}
    </div>`}};B(Q9,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),B(Q9,"styles",p1`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",Q9);var $f=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],Rf={wind_bearing:"Wind direction",precipitation:"Rain rate"},Br=[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"}]}},helper:"With the animated background, panels become semi-transparent and the hero stops drawing its own."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"Animated background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Animated background: blur behind panels. Default 6."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}],lV={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},Df={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_chart:"Altitude chart",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",hours:"Hours",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here"},Bf=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function zf(r,t,e){let i=t.split("."),o=r;i.slice(0,-1).forEach(H=>o=o[H]=o[H]&&typeof o[H]=="object"?{...o[H]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete o[a]:o[a]=e}function zr(r,t,e={}){let i={};for(let o of t){let a=Bf(r,o.name);i[o.name]=a!==void 0?a:e[o.name]!==void 0?e[o.name]:o.default}return i}function Ir(r,t,e,i={}){let o=o4(r);for(let a of t){let H=e[a.name],V=i[a.name]!==void 0?i[a.name]:a.default;V!==void 0&&JSON.stringify(H)===JSON.stringify(V)&&(H=void 0),zf(o,a.name,H)}return D0(o)}function If(r){let t=M2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:i4({...r,in_bar:void 0}),show:!0}}function MV(r){let t=M2(r);return r.title?r.title:r.type==="metric"?j1[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var K9=class extends e1{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t}get _panels(){return tt(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[o,a]of Object.entries(e||{}))a===void 0?delete i[o]:i[o]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?Z:_`
      <div class="ed">
        <div class="hdr"><span class="name">${E4}</span><span class="ver">v${g6} · Weather Flex sections ${In}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:cog-outline","General",()=>this._general())}
        ${this._section("buttons","mdi:gesture-tap-button","Panel buttons",()=>this._buttonsEditor())}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout",()=>this._layoutEditor())}
        ${this._section("hero","mdi:weather-partly-cloudy","Hero",()=>this._heroEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_section(t,e,i,o){let a=this._open===t;return _`<details class="panel" ?open=${a} @toggle=${H=>{H.target.open?this._open=t:this._open===t&&(this._open=null)}}>
      <summary><ha-icon icon=${e}></ha-icon><span>${i}</span></summary>
      ${a?_`<div class="body">${o()}</div>`:Z}
    </details>`}_form(t,e,i){return _`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${o=>o.label||Df[o.name]||o.name}
      .computeHelper=${o=>o.helper}
      @value-changed=${o=>{o.stopPropagation(),i(o.detail.value)}}
    ></ha-form>`}_general(){return this._form(zr(this._config,Br,lV),Br,t=>{let{panels:e,...i}=this._config,o=Ir(i,Br,t,lV);this._config.panels&&(o.panels=this._config.panels),this._emit(o)})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_stationEditor(){let t=this._station,e=[...$f,"rain_today","battery","signal","rssi"].map(o=>{let a=j1[o]?.find?m5(o,t,this.hass):_3(t,this.hass,o)||(this.hass.states[t.entity]?.attributes?.[o]!=null?t.entity:null),H=a&&!a.startsWith("weather.")?E5(this.hass,a):null,V=a?.startsWith("weather.")?this.hass.states[a]?.attributes?.[o]:null;return{k:o,e:a,v:H?`${H.value} ${H.unit}`:V!=null?String(V):"",label:Rf[o]||j1[o]?.label||o.replace(/_/g," "),integ:a?e4(this.hass,a):""}}),i=e.filter(o=>o.e).length;return _`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${o=>{let a={...this._config};o.detail.entity&&(a.entity=o.detail.entity),o.detail.metric_sources?a.metric_sources=o.detail.metric_sources:delete a.metric_sources,this._emit(a)}}></wsfc-sources-editor>
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${i} of ${e.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${e.map(o=>_`<span class="k">${o.label}</span><span class="e ${o.e?"":"none"}" title=${o.e||""}>${o.e||"not found"}</span><span class="i">${o.integ}</span><span class="v">${o.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_heroEditor(){let t=this._panels,e=t.findIndex(o=>o.type==="hero");if(e<0)return _`<p class="hint">There is no hero panel. Add one here, or set the station under <b>Weather station</b>.</p>
        <button class="btn" @click=${()=>this._setPanels([{type:"hero"},...t])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;let i=(o,a)=>{let H=t.slice();H[e]=o,this._setPanels(H,a)};return _`<p class="hint">Weather Flex Card's editor for the hero's sections. Weather Sources are under <b>Weather station</b>.</p>
      ${this._flexEditor(`${e}`,t[e],i)}`}_flexEditor(t,e,i){let o=`${t}:${e.type}`,a=this._flexEds.get(o);a||(a=document.createElement(zn),a.wsfcMode="sections",a.addEventListener("config-changed",M=>{M.stopPropagation(),a._wsfcOnChange?.(M.detail.config)}),this._flexEds.set(o,a));let H=M=>M.type==="sky_tracker"?Tr(M,this._station):H5(Z9(M.type,this._station),M.flex||{});a.wsfcPanels=M2(e)?.flexPanels||null,a._wsfcOnChange=M=>{let p=o4(e),h=Wn(M,H({...e,flex:void 0}));Object.keys(h).length?p.flex=h:delete p.flex,i(p)};let V=H(e),s=JSON.stringify(V);return a._wsfcJson!==s&&(a._wsfcJson=s,a.setConfig(V)),a.hass=this.hass,_`<div class="flexed">${a}</div>`}_layoutEditor(){return _`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      <wsfc-layout-map .panels=${this._panels} @layout-changed=${t=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(t.detail.panels)}}></wsfc-layout-map>
    `}_panelList(){return _`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels side by side on every screen, put them in a <b>Stack</b>.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_buttonsEditor(){let t=this._config,e=this._panels,i=e.findIndex(M=>M.type==="heading"),o=i>=0&&!!e[i].show_bar,a=t.panel_bar===!1?"hidden":o?"heading":"top",H=M=>{let p=e.map((h,v)=>v===i?D0({...h,show_bar:M==="heading"?!0:void 0}):h);M==="heading"&&i<0&&p.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(p,{panel_bar:M==="hidden"?!1:void 0})},V=(M,p)=>{let h=e.map((v,x)=>{if(!M.includes(x))return v;let y=i4({...v,in_bar:void 0});return D0({...v,in_bar:p===y?void 0:p})});this._setPanels(h)},s=e.map((M,p)=>p);return _`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${M=>H(M.target.value)}>
          <option value="top" ?selected=${a==="top"}>Above the panels</option>
          <option value="heading" ?selected=${a==="heading"}>In the heading panel</option>
          <option value="hidden" ?selected=${a==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      <div class="btnbar">
        <button class="btn sm" @click=${()=>V(s,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>V(s,!1)}>None</button>
      </div>
      <div class="checks">
        ${e.map((M,p)=>_`<label class="chk">
          <input type="checkbox" .checked=${i4(M)} @change=${h=>V([p],h.target.checked)} />
          <ha-icon icon=${M.icon||M.type==="metric"&&j1[M.metric]?.icon||M2(M).icon}></ha-icon>
          <span>${MV(M)}</span>${M.display==="popup"?_`<span class="tag">pop-up</span>`:M.show===!1?_`<span class="tag">hidden on load</span>`:Z}
        </label>`)}
      </div>
    `}_list(t,e,i){let o=!!i,a=Object.entries(S3).filter(([s])=>s!=="map"&&!(o&&s==="hero")),H=i||"top",V=(this._addTypes||(this._addTypes={}))[H]||(o?"metric":this._addType);return _`
      <div class="rows">${t.map((s,M)=>this._panelRow(s,M,t,e,i?`${i}.${M}`:`${M}`,o))}</div>
      <div class="add">
        <select class="sel" @change=${s=>{this._addTypes[H]=s.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([s,M])=>_`<option value=${s} ?selected=${s===V}>${M.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let s={type:V};s.type==="metric"&&(s.metric="temperature"),s.type==="stack"&&(s.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,s]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${o?"Add to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,o,a,H){let V=M2(t),s=this._openPanel===a||String(this._openPanel||"").startsWith(`${a}.`),M=t.show===!1,p=()=>this._flexEds.clear(),h=k=>{let O=i.slice(),E=e+k;E<0||E>=O.length||([O[e],O[E]]=[O[E],O[e]],p(),this._openPanel=null,o(O))},v=(k,O)=>{let E=i.slice();E[e]=k,o(E,O)},x=H?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${s7(t)}/12${c0(t)?` \xD7 ${c0(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,y=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:V.label;return _`<div class="row ${s?"open":""} ${M?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&j1[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":V.icon)}></ha-icon>
        <div class="txt"><div class="n">${MV(t)}</div><div class="s">${y}${x?` \xB7 ${x}`:""}</div></div>
        ${H?_`<button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>h(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>h(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:Z}
        ${H?Z:_`<button class="ib" title=${M?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>v(D0({...t,show:M?void 0:!1}))}>
              <ha-icon icon=${M?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${s?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let k=i.slice();k.splice(e+1,0,o4(t)),p(),o(k)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let k=i.slice();k.splice(e,1),p(),this._openPanel=null,o(k)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${s?this._panelBody(t,a,v,H):Z}
    </div>`}_panelBody(t,e,i,o){let a=M2(t),H=o?{}:If(t),V=o?Rn:$n;t.type==="hero"&&(V=V.filter(v=>!["icon","display","in_bar"].includes(v.name)));let s=["graph","temp_humidity","uv_solar","statistics"].includes(t.type),M=["type","span","rows","display","in_bar","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...t.type==="metric"?["metric"]:[],...t.type==="statistics"?["preset"]:[],...t.type==="stack"?["panels","direction"]:[]],p=Object.keys(t).some(v=>!M.includes(v)),h=()=>i(Object.fromEntries(Object.entries(t).filter(([v])=>M.includes(v))));return _`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!p} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),h()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${s?_`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${t} .station=${this._station} @panel-changed=${v=>i(v.detail.panel)}></wsfc-series-editor>`:Z}
      <div class="grp">Layout</div>
      ${this._form(zr(t,V,H),V,v=>i({type:t.type,...Ir(t,V,v,H)}))}
      ${a.schema.length?_`<div class="grp">${a.label} options</div>
            ${this._form(zr(t,a.schema),a.schema,v=>i({type:t.type,...Ir(t,a.schema,v)}))}`:Z}
      ${t.type==="stack"?_`<div class="grp">Panels in this stack</div>
            <div class="nest">${this._list(t.panels||[],(v,x)=>i({...t,panels:v},x),e)}</div>`:Z}
      ${a.flex?_`<div class="grp">${t.type==="sky_tracker"?"Arc & sky details":"Weather Flex sections"}</div>
            ${t.type==="sky_tracker"?_`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:Z}
            ${t.type==="hero"&&!o?_`<p class="hint">Also under Hero above.</p>`:this._flexEditor(e,t,i)}`:Z}
    </div>`}};B(K9,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),B(K9,"styles",p1`
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
  `);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",K9);var Nf=720,Wf=1100,X9=class extends e1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),o=[];return i&&o.push({ref:`device:${i.id}`}),e&&o.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:o}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=tt(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(t.map((i,o)=>i.show===!1?this._key(i,o):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return t.map((e,i)=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},o=e<(i.narrow_width||Nf)?"narrow":e<(i.medium_width||Wf)?"medium":"wide";o!==this._size&&(this._size=o),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_fit(){let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let o=i.min_row_height||60,a=i.max_row_height||400,H=e.clientHeight;if(!H)return;let V=y=>(t.style.setProperty("--wsfc-row",`${y}px`),t.getBoundingClientRect().height),s=o,M=o+40,p=V(s),v=(V(M)-p)/(M-s),x=i.row_height||110;v>.5&&(x=Math.max(o,Math.min(a,s+(H-p)/v))),t.style.setProperty("--wsfc-row",`${Math.floor(x)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return Z;let t=this._config,e=this._full,i=this._animatedBg,o=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:"",i?`--wsfc-panel-opacity:${t.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${t.panel_blur??6}px`:""].join(";"),a=t.panels.some(H=>H.type==="heading"&&H.show_bar);return _`
      <ha-card class=${`wsfc ${e?"full":""} ${this._layoutSize} ${i?"animated":""}`} style=${o}>
        ${i?this._renderBackground():Z}
        ${t.title?this._renderTitle():Z}
        ${t.panel_bar===!1||a?Z:_`<div class="topbar">${this._renderBar()}</div>`}
        <div class="scroller"><div class="grid">${this._renderPanels()}</div></div>
        ${this._popup!=null?this._renderPopup():Z}
      </ha-card>
    `}get _animatedBg(){return this._config?.background==="animated"}_renderBackground(){let t=this._config,e=this.hass.states[t.entity];if(!e)return Z;this._watchHourly();let i=t.background_effects??!0;return _`<wsfc-animation-provider class="bg"
      .hass=${this.hass}
      .weatherEntity=${e}
      .config=${{entity:t.entity,show_condition_effects:i,show_moon_phase:t.background_moon_phase??!0}}
      .currentForecast=${this._hourlyNow}
    ></wsfc-animation-provider>`}_watchHourly(){let t=this._config.entity;this._hourlyFor!==t&&(this._unwatchHourly?.(),this._hourlyFor=t,this._unwatchHourly=et(this.hass,t,"hourly",e=>{this._hourlyNow=e?.[0],this.requestUpdate()}))}_renderTitle(){let t=this._config;return _`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?_`<span class="subtitle">${t.subtitle}</span>`:Z}
    </div>`}_renderBar(){let e=this._config.panels.map((i,o)=>[i,o]).filter(([i])=>i4(i));return e.length?e.map(([i,o])=>{let a=M2(i),H=i.display==="popup",V=H?this._popup===o:!this._hidden.has(this._key(i,o));return _`<button
        type="button"
        class="chip ${V?"on":""} ${H?"popup":""}"
        aria-pressed=${H?Z:String(V)}
        aria-haspopup=${H?"dialog":Z}
        @click=${()=>this._toggle(i,o)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${H?_`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:Z}
      </button>`}):Z}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":t.type==="wind_map"?"Wind map":t.type==="statistics"?t.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[t.preset]||"Graph":M2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),o=this._key(t,e);i.has(o)?i.delete(o):i.add(o),this._hidden=i,this._saveHidden()}_renderPanels(){let t=this._config.panels,e=t.map((o,a)=>a).filter(o=>t[o].display!=="popup"&&!this._hidden.has(this._key(t[o],o)));if(this._focus!=null&&(e=[this._focus]),!e.length)return _`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(o=>{let a=t[o],H=M2(a),V=Dn(a,i),s=this._focus!=null?12:V.span,M=this._focus!=null?Math.max(c0(a),5):V.rows,p=`grid-column: span ${s};${M?`grid-row: span ${M};min-height:calc(${M} * var(--wsfc-row) + ${M-1} * var(--wsfc-gap));`:""}`,h=H.bare||a.type==="hero",v=a.display==="tile_popup",x=!h&&!v&&!["metric","stack"].includes(a.type)&&i!=="narrow";return _`<section class="tile ${a.type} ${H.bare?"bare":""} ${M?"":"auto"} ${v?"tap":""}" style=${p}>
        ${v?_`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${a.title||this._autoTitle(a)}`}
              @click=${()=>this._popup=o}><span><ha-icon icon="mdi:arrow-expand"></ha-icon>Open</span></button>`:Z}
        ${x?_`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?o:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:Z}
        ${this._panelEl(a,o)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._config.panels[t];if(!e)return Z;let i=()=>this._popup=null;return _`<div class="scrim" @click=${o=>o.target===o.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let o=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(o);if(!a){a=document.createElement(M2(t).tag),this._els.set(o,a);for(let H of this._els.keys())H!==o&&H.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(H)}return a.config=t,a.station=this._station,a.cardBg=this._animatedBg,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),a}};B(X9,"properties",{hass:{attribute:!1},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),B(X9,"styles",[S6,_6,p1`
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
  `]);customElements.get(P4)||customElements.define(P4,X9);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===P4)||window.customCards.push({type:P4,name:`${E4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${E4.toUpperCase()}%c ${g6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");
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
