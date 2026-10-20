/* weather-station-flex-card 2026.10.20.12 — https://github.com/Ltek/weather-station-flex-card */
var rs=Object.create;var _6=Object.defineProperty;var gi=Object.getOwnPropertyDescriptor;var is=Object.getOwnPropertyNames;var os=Object.getPrototypeOf,Cs=Object.prototype.hasOwnProperty;var as=(r,t,e)=>t in r?_6(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var _i=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var ns=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of is(t))!Cs.call(r,o)&&o!==e&&_6(r,o,{get:()=>t[o],enumerable:!(i=gi(t,o))||i.enumerable});return r};var v4=(r,t,e)=>(e=r!=null?rs(os(r)):{},ns(t||!r||!r.__esModule?_6(e,"default",{value:r,enumerable:!0}):e,r));var Q=(r,t,e,i)=>{for(var o=i>1?void 0:i?gi(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(i?n(t,e,o):n(o))||o);return i&&o&&_6(t,e,o),o};var z=(r,t,e)=>as(r,typeof t!="symbol"?t+"":t,e);var I4=_i((IC,ae)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,o=Math.asin,a=Math.atan2,n=Math.acos,V=r/180,s=1e3*60*60*24,M=2440588,p=2451545;function h(U){return U.valueOf()/s-.5+M}function v(U){return new Date((U+.5-M)*s)}function g(U){return h(U)-p}var y=V*23.4397;function k(U,t1){return a(t(U)*e(y)-i(t1)*t(y),e(U))}function O(U,t1){return o(t(t1)*e(y)+e(t1)*t(y)*t(U))}function E(U,t1,H1){return a(t(U),e(U)*t(t1)-i(H1)*e(t1))}function R(U,t1,H1){return o(t(t1)*t(H1)+e(t1)*e(H1)*e(U))}function B(U,t1){return V*(280.16+360.9856235*U)-t1}function K(U){return U<0&&(U=0),2967e-7/Math.tan(U+.00312536/(U+.08901179))}function G(U){return V*(357.5291+.98560028*U)}function c1(U){var t1=V*(1.9148*t(U)+.02*t(2*U)+3e-4*t(3*U)),H1=V*102.9372;return U+t1+H1+r}function J(U){var t1=G(U),H1=c1(t1);return{dec:O(H1,0),ra:k(H1,0)}}var C1={};C1.getPosition=function(U,t1,H1){var h1=V*-H1,V1=V*t1,s1=g(U),g1=J(s1),k1=B(s1,h1)-g1.ra;return{azimuth:E(k1,V1,g1.dec),altitude:R(k1,V1,g1.dec)}};var i1=C1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];C1.addTime=function(U,t1,H1){i1.push([U,t1,H1])};var m1=9e-4;function I1(U,t1){return Math.round(U-m1-t1/(2*r))}function y1(U,t1,H1){return m1+(U+t1)/(2*r)+H1}function V2(U,t1,H1){return p+U+.0053*t(t1)-.0069*t(2*H1)}function G1(U,t1,H1){return n((t(U)-t(t1)*t(H1))/(e(t1)*e(H1)))}function Z1(U){return-2.076*Math.sqrt(U)/60}function X(U,t1,H1,h1,V1,s1,g1){var k1=G1(U,H1,h1),p2=y1(k1,t1,V1);return V2(p2,s1,g1)}C1.getTimes=function(U,t1,H1,h1){h1=h1||0;var V1=V*-H1,s1=V*t1,g1=Z1(h1),k1=g(U),p2=I1(k1,V1),A2=y1(0,V1,p2),T2=G(A2),s2=c1(T2),L1=O(s2,0),e5=V2(A2,T2,s2),j2,A5,P2,v2,s5,L5,K1={solarNoon:v(e5),nadir:v(e5-.5)};for(j2=0,A5=i1.length;j2<A5;j2+=1)P2=i1[j2],v2=(P2[0]+g1)*V,s5=X(v2,V1,s1,L1,p2,T2,s2),L5=e5-(s5-e5),K1[P2[1]]=v(L5),K1[P2[2]]=v(s5);return K1};function q1(U){var t1=V*(218.316+13.176396*U),H1=V*(134.963+13.064993*U),h1=V*(93.272+13.22935*U),V1=t1+V*6.289*t(H1),s1=V*5.128*t(h1),g1=385001-20905*e(H1);return{ra:k(V1,s1),dec:O(V1,s1),dist:g1}}C1.getMoonPosition=function(U,t1,H1){var h1=V*-H1,V1=V*t1,s1=g(U),g1=q1(s1),k1=B(s1,h1)-g1.ra,p2=R(k1,V1,g1.dec),A2=a(t(k1),i(V1)*e(g1.dec)-t(g1.dec)*e(k1));return p2=p2+K(p2),{azimuth:E(k1,V1,g1.dec),altitude:p2,distance:g1.dist,parallacticAngle:A2}},C1.getMoonIllumination=function(U){var t1=g(U||new Date),H1=J(t1),h1=q1(t1),V1=149598e3,s1=n(t(H1.dec)*t(h1.dec)+e(H1.dec)*e(h1.dec)*e(H1.ra-h1.ra)),g1=a(V1*t(s1),h1.dist-V1*e(s1)),k1=a(e(H1.dec)*t(H1.ra-h1.ra),t(H1.dec)*e(h1.dec)-e(H1.dec)*t(h1.dec)*e(H1.ra-h1.ra));return{fraction:(1+e(g1))/2,phase:.5+.5*g1*(k1<0?-1:1)/Math.PI,angle:k1}};function n1(U,t1){return new Date(U.valueOf()+t1*s/24)}C1.getMoonTimes=function(U,t1,H1,h1){var V1=new Date(U);h1?V1.setUTCHours(0,0,0,0):V1.setHours(0,0,0,0);for(var s1=.133*V,g1=C1.getMoonPosition(V1,t1,H1).altitude-s1,k1,p2,A2,T2,s2,L1,e5,j2,A5,P2,v2,s5,L5,K1=1;K1<=24&&(k1=C1.getMoonPosition(n1(V1,K1),t1,H1).altitude-s1,p2=C1.getMoonPosition(n1(V1,K1+1),t1,H1).altitude-s1,s2=(g1+p2)/2-k1,L1=(p2-g1)/2,e5=-L1/(2*s2),j2=(s2*e5+L1)*e5+k1,A5=L1*L1-4*s2*k1,P2=0,A5>=0&&(L5=Math.sqrt(A5)/(Math.abs(s2)*2),v2=e5-L5,s5=e5+L5,Math.abs(v2)<=1&&P2++,Math.abs(s5)<=1&&P2++,v2<-1&&(v2=s5)),P2===1?g1<0?A2=K1+v2:T2=K1+v2:P2===2&&(A2=K1+(j2<0?s5:v2),T2=K1+(j2<0?v2:s5)),!(A2&&T2));K1+=2)g1=p2;var x2={};return A2&&(x2.rise=n1(V1,A2)),T2&&(x2.set=n1(V1,T2)),!A2&&!T2&&(x2[j2>0?"alwaysUp":"alwaysDown"]=!0),x2},typeof IC=="object"&&typeof ae<"u"?ae.exports=C1:typeof define=="function"&&define.amd?define(C1):window.SunCalc=C1})()});var HV=_i((ut,nV)=>{(function(r,t){typeof ut=="object"&&typeof nV<"u"?t(ut):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(ut,(function(r){"use strict";var t="1.9.4";function e(C){var H,l,u,f;for(l=1,u=arguments.length;l<u;l++){f=arguments[l];for(H in f)C[H]=f[H]}return C}var i=Object.create||(function(){function C(){}return function(H){return C.prototype=H,new C}})();function o(C,H){var l=Array.prototype.slice;if(C.bind)return C.bind.apply(C,l.call(arguments,1));var u=l.call(arguments,2);return function(){return C.apply(H,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function n(C){return"_leaflet_id"in C||(C._leaflet_id=++a),C._leaflet_id}function V(C,H,l){var u,f,S,T;return T=function(){u=!1,f&&(S.apply(l,f),f=!1)},S=function(){u?f=arguments:(C.apply(l,arguments),setTimeout(T,H),u=!0)},S}function s(C,H,l){var u=H[1],f=H[0],S=u-f;return C===u&&l?C:((C-f)%S+S)%S+f}function M(){return!1}function p(C,H){if(H===!1)return C;var l=Math.pow(10,H===void 0?6:H);return Math.round(C*l)/l}function h(C){return C.trim?C.trim():C.replace(/^\s+|\s+$/g,"")}function v(C){return h(C).split(/\s+/)}function g(C,H){Object.prototype.hasOwnProperty.call(C,"options")||(C.options=C.options?i(C.options):{});for(var l in H)C.options[l]=H[l];return C.options}function y(C,H,l){var u=[];for(var f in C)u.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(C[f]));return(!H||H.indexOf("?")===-1?"?":"&")+u.join("&")}var k=/\{ *([\w_ -]+) *\}/g;function O(C,H){return C.replace(k,function(l,u){var f=H[u];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(H)),f})}var E=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"};function R(C,H){for(var l=0;l<C.length;l++)if(C[l]===H)return l;return-1}var B="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function K(C){return window["webkit"+C]||window["moz"+C]||window["ms"+C]}var G=0;function c1(C){var H=+new Date,l=Math.max(0,16-(H-G));return G=H+l,window.setTimeout(C,l)}var J=window.requestAnimationFrame||K("RequestAnimationFrame")||c1,C1=window.cancelAnimationFrame||K("CancelAnimationFrame")||K("CancelRequestAnimationFrame")||function(C){window.clearTimeout(C)};function i1(C,H,l){if(l&&J===c1)C.call(H);else return J.call(window,o(C,H))}function m1(C){C&&C1.call(window,C)}var I1={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:n,throttle:V,wrapNum:s,falseFn:M,formatNum:p,trim:h,splitWords:v,setOptions:g,getParamString:y,template:O,isArray:E,indexOf:R,emptyImageUrl:B,requestFn:J,cancelFn:C1,requestAnimFrame:i1,cancelAnimFrame:m1};function y1(){}y1.extend=function(C){var H=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=H.__super__=this.prototype,u=i(l);u.constructor=H,H.prototype=u;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(H[f]=this[f]);return C.statics&&e(H,C.statics),C.includes&&(V2(C.includes),e.apply(null,[u].concat(C.includes))),e(u,C),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,C.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,T=u._initHooks.length;S<T;S++)u._initHooks[S].call(this)}},H},y1.include=function(C){var H=this.prototype.options;return e(this.prototype,C),C.options&&(this.prototype.options=H,this.mergeOptions(C.options)),this},y1.mergeOptions=function(C){return e(this.prototype.options,C),this},y1.addInitHook=function(C){var H=Array.prototype.slice.call(arguments,1),l=typeof C=="function"?C:function(){this[C].apply(this,H)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function V2(C){if(!(typeof L>"u"||!L||!L.Mixin)){C=E(C)?C:[C];for(var H=0;H<C.length;H++)C[H]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var G1={on:function(C,H,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],H);else{C=v(C);for(var f=0,S=C.length;f<S;f++)this._on(C[f],H,l)}return this},off:function(C,H,l){if(!arguments.length)delete this._events;else if(typeof C=="object")for(var u in C)this._off(u,C[u],H);else{C=v(C);for(var f=arguments.length===1,S=0,T=C.length;S<T;S++)f?this._off(C[S]):this._off(C[S],H,l)}return this},_on:function(C,H,l,u){if(typeof H!="function"){console.warn("wrong listener type: "+typeof H);return}if(this._listens(C,H,l)===!1){l===this&&(l=void 0);var f={fn:H,ctx:l};u&&(f.once=!0),this._events=this._events||{},this._events[C]=this._events[C]||[],this._events[C].push(f)}},_off:function(C,H,l){var u,f,S;if(this._events&&(u=this._events[C],!!u)){if(arguments.length===1){if(this._firingCount)for(f=0,S=u.length;f<S;f++)u[f].fn=M;delete this._events[C];return}if(typeof H!="function"){console.warn("wrong listener type: "+typeof H);return}var T=this._listens(C,H,l);if(T!==!1){var F=u[T];this._firingCount&&(F.fn=M,this._events[C]=u=u.slice()),u.splice(T,1)}}},fire:function(C,H,l){if(!this.listens(C,l))return this;var u=e({},H,{type:C,target:this,sourceTarget:H&&H.sourceTarget||this});if(this._events){var f=this._events[C];if(f){this._firingCount=this._firingCount+1||1;for(var S=0,T=f.length;S<T;S++){var F=f[S],I=F.fn;F.once&&this.off(C,I,F.ctx),I.call(F.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(C,H,l,u){typeof C!="string"&&console.warn('"string" type argument expected');var f=H;typeof H!="function"&&(u=!!H,f=void 0,l=void 0);var S=this._events&&this._events[C];if(S&&S.length&&this._listens(C,f,l)!==!1)return!0;if(u){for(var T in this._eventParents)if(this._eventParents[T].listens(C,H,l,u))return!0}return!1},_listens:function(C,H,l){if(!this._events)return!1;var u=this._events[C]||[];if(!H)return!!u.length;l===this&&(l=void 0);for(var f=0,S=u.length;f<S;f++)if(u[f].fn===H&&u[f].ctx===l)return f;return!1},once:function(C,H,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],H,!0);else{C=v(C);for(var f=0,S=C.length;f<S;f++)this._on(C[f],H,l,!0)}return this},addEventParent:function(C){return this._eventParents=this._eventParents||{},this._eventParents[n(C)]=C,this},removeEventParent:function(C){return this._eventParents&&delete this._eventParents[n(C)],this},_propagateEvent:function(C){for(var H in this._eventParents)this._eventParents[H].fire(C.type,e({layer:C.target,propagatedFrom:C.target},C),!0)}};G1.addEventListener=G1.on,G1.removeEventListener=G1.clearAllEventListeners=G1.off,G1.addOneTimeEventListener=G1.once,G1.fireEvent=G1.fire,G1.hasEventListeners=G1.listens;var Z1=y1.extend(G1);function X(C,H,l){this.x=l?Math.round(C):C,this.y=l?Math.round(H):H}var q1=Math.trunc||function(C){return C>0?Math.floor(C):Math.ceil(C)};X.prototype={clone:function(){return new X(this.x,this.y)},add:function(C){return this.clone()._add(n1(C))},_add:function(C){return this.x+=C.x,this.y+=C.y,this},subtract:function(C){return this.clone()._subtract(n1(C))},_subtract:function(C){return this.x-=C.x,this.y-=C.y,this},divideBy:function(C){return this.clone()._divideBy(C)},_divideBy:function(C){return this.x/=C,this.y/=C,this},multiplyBy:function(C){return this.clone()._multiplyBy(C)},_multiplyBy:function(C){return this.x*=C,this.y*=C,this},scaleBy:function(C){return new X(this.x*C.x,this.y*C.y)},unscaleBy:function(C){return new X(this.x/C.x,this.y/C.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=q1(this.x),this.y=q1(this.y),this},distanceTo:function(C){C=n1(C);var H=C.x-this.x,l=C.y-this.y;return Math.sqrt(H*H+l*l)},equals:function(C){return C=n1(C),C.x===this.x&&C.y===this.y},contains:function(C){return C=n1(C),Math.abs(C.x)<=Math.abs(this.x)&&Math.abs(C.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function n1(C,H,l){return C instanceof X?C:E(C)?new X(C[0],C[1]):C==null?C:typeof C=="object"&&"x"in C&&"y"in C?new X(C.x,C.y):new X(C,H,l)}function U(C,H){if(C)for(var l=H?[C,H]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}U.prototype={extend:function(C){var H,l;if(!C)return this;if(C instanceof X||typeof C[0]=="number"||"x"in C)H=l=n1(C);else if(C=t1(C),H=C.min,l=C.max,!H||!l)return this;return!this.min&&!this.max?(this.min=H.clone(),this.max=l.clone()):(this.min.x=Math.min(H.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(H.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(C){return n1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,C)},getBottomLeft:function(){return n1(this.min.x,this.max.y)},getTopRight:function(){return n1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(C){var H,l;return typeof C[0]=="number"||C instanceof X?C=n1(C):C=t1(C),C instanceof U?(H=C.min,l=C.max):H=l=C,H.x>=this.min.x&&l.x<=this.max.x&&H.y>=this.min.y&&l.y<=this.max.y},intersects:function(C){C=t1(C);var H=this.min,l=this.max,u=C.min,f=C.max,S=f.x>=H.x&&u.x<=l.x,T=f.y>=H.y&&u.y<=l.y;return S&&T},overlaps:function(C){C=t1(C);var H=this.min,l=this.max,u=C.min,f=C.max,S=f.x>H.x&&u.x<l.x,T=f.y>H.y&&u.y<l.y;return S&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(C){var H=this.min,l=this.max,u=Math.abs(H.x-l.x)*C,f=Math.abs(H.y-l.y)*C;return t1(n1(H.x-u,H.y-f),n1(l.x+u,l.y+f))},equals:function(C){return C?(C=t1(C),this.min.equals(C.getTopLeft())&&this.max.equals(C.getBottomRight())):!1}};function t1(C,H){return!C||C instanceof U?C:new U(C,H)}function H1(C,H){if(C)for(var l=H?[C,H]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}H1.prototype={extend:function(C){var H=this._southWest,l=this._northEast,u,f;if(C instanceof V1)u=C,f=C;else if(C instanceof H1){if(u=C._southWest,f=C._northEast,!u||!f)return this}else return C?this.extend(s1(C)||h1(C)):this;return!H&&!l?(this._southWest=new V1(u.lat,u.lng),this._northEast=new V1(f.lat,f.lng)):(H.lat=Math.min(u.lat,H.lat),H.lng=Math.min(u.lng,H.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(C){var H=this._southWest,l=this._northEast,u=Math.abs(H.lat-l.lat)*C,f=Math.abs(H.lng-l.lng)*C;return new H1(new V1(H.lat-u,H.lng-f),new V1(l.lat+u,l.lng+f))},getCenter:function(){return new V1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V1(this.getNorth(),this.getWest())},getSouthEast:function(){return new V1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(C){typeof C[0]=="number"||C instanceof V1||"lat"in C?C=s1(C):C=h1(C);var H=this._southWest,l=this._northEast,u,f;return C instanceof H1?(u=C.getSouthWest(),f=C.getNorthEast()):u=f=C,u.lat>=H.lat&&f.lat<=l.lat&&u.lng>=H.lng&&f.lng<=l.lng},intersects:function(C){C=h1(C);var H=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),S=f.lat>=H.lat&&u.lat<=l.lat,T=f.lng>=H.lng&&u.lng<=l.lng;return S&&T},overlaps:function(C){C=h1(C);var H=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),S=f.lat>H.lat&&u.lat<l.lat,T=f.lng>H.lng&&u.lng<l.lng;return S&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(C,H){return C?(C=h1(C),this._southWest.equals(C.getSouthWest(),H)&&this._northEast.equals(C.getNorthEast(),H)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function h1(C,H){return C instanceof H1?C:new H1(C,H)}function V1(C,H,l){if(isNaN(C)||isNaN(H))throw new Error("Invalid LatLng object: ("+C+", "+H+")");this.lat=+C,this.lng=+H,l!==void 0&&(this.alt=+l)}V1.prototype={equals:function(C,H){if(!C)return!1;C=s1(C);var l=Math.max(Math.abs(this.lat-C.lat),Math.abs(this.lng-C.lng));return l<=(H===void 0?1e-9:H)},toString:function(C){return"LatLng("+p(this.lat,C)+", "+p(this.lng,C)+")"},distanceTo:function(C){return k1.distance(this,s1(C))},wrap:function(){return k1.wrapLatLng(this)},toBounds:function(C){var H=180*C/40075017,l=H/Math.cos(Math.PI/180*this.lat);return h1([this.lat-H,this.lng-l],[this.lat+H,this.lng+l])},clone:function(){return new V1(this.lat,this.lng,this.alt)}};function s1(C,H,l){return C instanceof V1?C:E(C)&&typeof C[0]!="object"?C.length===3?new V1(C[0],C[1],C[2]):C.length===2?new V1(C[0],C[1]):null:C==null?C:typeof C=="object"&&"lat"in C?new V1(C.lat,"lng"in C?C.lng:C.lon,C.alt):H===void 0?null:new V1(C,H,l)}var g1={latLngToPoint:function(C,H){var l=this.projection.project(C),u=this.scale(H);return this.transformation._transform(l,u)},pointToLatLng:function(C,H){var l=this.scale(H),u=this.transformation.untransform(C,l);return this.projection.unproject(u)},project:function(C){return this.projection.project(C)},unproject:function(C){return this.projection.unproject(C)},scale:function(C){return 256*Math.pow(2,C)},zoom:function(C){return Math.log(C/256)/Math.LN2},getProjectedBounds:function(C){if(this.infinite)return null;var H=this.projection.bounds,l=this.scale(C),u=this.transformation.transform(H.min,l),f=this.transformation.transform(H.max,l);return new U(u,f)},infinite:!1,wrapLatLng:function(C){var H=this.wrapLng?s(C.lng,this.wrapLng,!0):C.lng,l=this.wrapLat?s(C.lat,this.wrapLat,!0):C.lat,u=C.alt;return new V1(l,H,u)},wrapLatLngBounds:function(C){var H=C.getCenter(),l=this.wrapLatLng(H),u=H.lat-l.lat,f=H.lng-l.lng;if(u===0&&f===0)return C;var S=C.getSouthWest(),T=C.getNorthEast(),F=new V1(S.lat-u,S.lng-f),I=new V1(T.lat-u,T.lng-f);return new H1(F,I)}},k1=e({},g1,{wrapLng:[-180,180],R:6371e3,distance:function(C,H){var l=Math.PI/180,u=C.lat*l,f=H.lat*l,S=Math.sin((H.lat-C.lat)*l/2),T=Math.sin((H.lng-C.lng)*l/2),F=S*S+Math.cos(u)*Math.cos(f)*T*T,I=2*Math.atan2(Math.sqrt(F),Math.sqrt(1-F));return this.R*I}}),p2=6378137,A2={R:p2,MAX_LATITUDE:85.0511287798,project:function(C){var H=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,C.lat),-l),f=Math.sin(u*H);return new X(this.R*C.lng*H,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(C){var H=180/Math.PI;return new V1((2*Math.atan(Math.exp(C.y/this.R))-Math.PI/2)*H,C.x*H/this.R)},bounds:(function(){var C=p2*Math.PI;return new U([-C,-C],[C,C])})()};function T2(C,H,l,u){if(E(C)){this._a=C[0],this._b=C[1],this._c=C[2],this._d=C[3];return}this._a=C,this._b=H,this._c=l,this._d=u}T2.prototype={transform:function(C,H){return this._transform(C.clone(),H)},_transform:function(C,H){return H=H||1,C.x=H*(this._a*C.x+this._b),C.y=H*(this._c*C.y+this._d),C},untransform:function(C,H){return H=H||1,new X((C.x/H-this._b)/this._a,(C.y/H-this._d)/this._c)}};function s2(C,H,l,u){return new T2(C,H,l,u)}var L1=e({},k1,{code:"EPSG:3857",projection:A2,transformation:(function(){var C=.5/(Math.PI*A2.R);return s2(C,.5,-C,.5)})()}),e5=e({},L1,{code:"EPSG:900913"});function j2(C){return document.createElementNS("http://www.w3.org/2000/svg",C)}function A5(C,H){var l="",u,f,S,T,F,I;for(u=0,S=C.length;u<S;u++){for(F=C[u],f=0,T=F.length;f<T;f++)I=F[f],l+=(f?"L":"M")+I.x+" "+I.y;l+=H?p1.svg?"z":"x":""}return l||"M0 0"}var P2=document.documentElement.style,v2="ActiveXObject"in window,s5=v2&&!document.addEventListener,L5="msLaunchUri"in navigator&&!("documentMode"in document),K1=v5("webkit"),x2=v5("android"),U0=v5("android 2")||v5("android 3"),At=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),vt=x2&&v5("Google")&&At<537&&!("AudioNode"in window),L7=!!window.opera,w3=!L5&&v5("chrome"),X9=v5("gecko")&&!K1&&!L7&&!v2,J9=!w3&&v5("safari"),L4=v5("phantom"),t6="OTransition"in P2,e6=navigator.platform.indexOf("Win")===0,l7=v2&&"transition"in P2,M7="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!U0,j0="MozPerspective"in P2,r6=!window.L_DISABLE_3D&&(l7||M7||j0)&&!t6&&!L4,q=typeof orientation<"u"||v5("mobile"),i6=q&&K1,l4=q&&M7,b3=!window.PointerEvent&&window.MSPointerEvent,o6=!!(window.PointerEvent||b3),M4="ontouchstart"in window||!!window.TouchEvent,xt=!window.L_NO_TOUCH&&(M4||o6),Gr=q&&L7,gt=q&&X9,_t=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,St=(function(){var C=!1;try{var H=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("testPassiveEventSupport",M,H),window.removeEventListener("testPassiveEventSupport",M,H)}catch{}return C})(),wt=(function(){return!!document.createElement("canvas").getContext})(),c7=!!(document.createElementNS&&j2("svg").createSVGRect),C6=!!c7&&(function(){var C=document.createElement("div");return C.innerHTML="<svg/>",(C.firstChild&&C.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),bt=!c7&&(function(){try{var C=document.createElement("div");C.innerHTML='<v:shape adj="1"/>';var H=C.firstChild;return H.style.behavior="url(#default#VML)",H&&typeof H.adj=="object"}catch{return!1}})(),c4=navigator.platform.indexOf("Mac")===0,yt=navigator.platform.indexOf("Linux")===0;function v5(C){return navigator.userAgent.toLowerCase().indexOf(C)>=0}var p1={ie:v2,ielt9:s5,edge:L5,webkit:K1,android:x2,android23:U0,androidStock:vt,opera:L7,chrome:w3,gecko:X9,safari:J9,phantom:L4,opera12:t6,win:e6,ie3d:l7,webkit3d:M7,gecko3d:j0,any3d:r6,mobile:q,mobileWebkit:i6,mobileWebkit3d:l4,msPointer:b3,pointer:o6,touch:xt,touchNative:M4,mobileOpera:Gr,mobileGecko:gt,retina:_t,passiveEvents:St,canvas:wt,svg:c7,vml:bt,inlineSvg:C6,mac:c4,linux:yt},a6=p1.msPointer?"MSPointerDown":"pointerdown",n6=p1.msPointer?"MSPointerMove":"pointermove",d7=p1.msPointer?"MSPointerUp":"pointerup",G0=p1.msPointer?"MSPointerCancel":"pointercancel",y3={touchstart:a6,touchmove:n6,touchend:d7,touchcancel:G0},d4={touchstart:A,touchmove:d,touchend:d,touchcancel:d},x5={},p4=!1;function H6(C,H,l){return H==="touchstart"&&m(),d4[H]?(l=d4[H].bind(this,l),C.addEventListener(y3[H],l,!1),l):(console.warn("wrong event specified:",H),M)}function V6(C,H,l){if(!y3[H]){console.warn("wrong event specified:",H);return}C.removeEventListener(y3[H],l,!1)}function Zt(C){x5[C.pointerId]=C}function s6(C){x5[C.pointerId]&&(x5[C.pointerId]=C)}function c(C){delete x5[C.pointerId]}function m(){p4||(document.addEventListener(a6,Zt,!0),document.addEventListener(n6,s6,!0),document.addEventListener(d7,c,!0),document.addEventListener(G0,c,!0),p4=!0)}function d(C,H){if(H.pointerType!==(H.MSPOINTER_TYPE_MOUSE||"mouse")){H.touches=[];for(var l in x5)H.touches.push(x5[l]);H.changedTouches=[H],C(H)}}function A(C,H){H.MSPOINTER_TYPE_TOUCH&&H.pointerType===H.MSPOINTER_TYPE_TOUCH&&l2(H),d(C,H)}function x(C){var H={},l,u;for(u in C)l=C[u],H[u]=l&&l.bind?l.bind(C):l;return C=H,H.type="dblclick",H.detail=2,H.isTrusted=!1,H._simulated=!0,H}var w=200;function b(C,H){C.addEventListener("dblclick",H);var l=0,u;function f(S){if(S.detail!==1){u=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var T=u7(S);if(!(T.some(function(I){return I instanceof HTMLLabelElement&&I.attributes.for})&&!T.some(function(I){return I instanceof HTMLInputElement||I instanceof HTMLSelectElement}))){var F=Date.now();F-l<=w?(u++,u===2&&H(x(S))):u=1,l=F}}}return C.addEventListener("click",f),{dblclick:H,simDblclick:f}}function P(C,H){C.removeEventListener("dblclick",H.dblclick),C.removeEventListener("click",H.simDblclick)}var D=h2(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),W=h2(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),N=W==="webkitTransition"||W==="OTransition"?W+"End":"transitionend";function a1(C){return typeof C=="string"?document.getElementById(C):C}function d1(C,H){var l=C.style[H]||C.currentStyle&&C.currentStyle[H];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(C,null);l=u?u[H]:null}return l==="auto"?null:l}function $(C,H,l){var u=document.createElement(C);return u.className=H||"",l&&l.appendChild(u),u}function l1(C){var H=C.parentNode;H&&H.removeChild(C)}function W1(C){for(;C.firstChild;)C.removeChild(C.firstChild)}function E1(C){var H=C.parentNode;H&&H.lastChild!==C&&H.appendChild(C)}function F1(C){var H=C.parentNode;H&&H.firstChild!==C&&H.insertBefore(C,H.firstChild)}function U1(C,H){if(C.classList!==void 0)return C.classList.contains(H);var l=l5(C);return l.length>0&&new RegExp("(^|\\s)"+H+"(\\s|$)").test(l)}function M1(C,H){if(C.classList!==void 0)for(var l=v(H),u=0,f=l.length;u<f;u++)C.classList.add(l[u]);else if(!U1(C,H)){var S=l5(C);r0(C,(S?S+" ":"")+H)}}function $1(C,H){C.classList!==void 0?C.classList.remove(H):r0(C,h((" "+l5(C)+" ").replace(" "+H+" "," ")))}function r0(C,H){C.className.baseVal===void 0?C.className=H:C.className.baseVal=H}function l5(C){return C.correspondingElement&&(C=C.correspondingElement),C.className.baseVal===void 0?C.className:C.className.baseVal}function E2(C,H){"opacity"in C.style?C.style.opacity=H:"filter"in C.style&&$5(C,H)}function $5(C,H){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=C.filters.item(u)}catch{if(H===1)return}H=Math.round(H*100),l?(l.Enabled=H!==100,l.Opacity=H):C.style.filter+=" progid:"+u+"(opacity="+H+")"}function h2(C){for(var H=document.documentElement.style,l=0;l<C.length;l++)if(C[l]in H)return C[l];return!1}function u2(C,H,l){var u=H||new X(0,0);C.style[D]=(p1.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function Y1(C,H){C._leaflet_pos=H,p1.any3d?u2(C,H):(C.style.left=H.x+"px",C.style.top=H.y+"px")}function z2(C){return C._leaflet_pos||new X(0,0)}var g2,M5,i0;if("onselectstart"in document)g2=function(){A1(window,"selectstart",l2)},M5=function(){N1(window,"selectstart",l2)};else{var D5=h2(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);g2=function(){if(D5){var C=document.documentElement.style;i0=C[D5],C[D5]="none"}},M5=function(){D5&&(document.documentElement.style[D5]=i0,i0=void 0)}}function o0(){A1(window,"dragstart",l2)}function C0(){N1(window,"dragstart",l2)}var q0,_2;function a0(C){for(;C.tabIndex===-1;)C=C.parentNode;C.style&&(g5(),q0=C,_2=C.style.outlineStyle,C.style.outlineStyle="none",A1(window,"keydown",g5))}function g5(){q0&&(q0.style.outlineStyle=_2,q0=void 0,_2=void 0,N1(window,"keydown",g5))}function p7(C){do C=C.parentNode;while((!C.offsetWidth||!C.offsetHeight)&&C!==document.body);return C}function Z3(C){var H=C.getBoundingClientRect();return{x:H.width/C.offsetWidth||1,y:H.height/C.offsetHeight||1,boundingClientRect:H}}var k3={__proto__:null,TRANSFORM:D,TRANSITION:W,TRANSITION_END:N,get:a1,getStyle:d1,create:$,remove:l1,empty:W1,toFront:E1,toBack:F1,hasClass:U1,addClass:M1,removeClass:$1,setClass:r0,getClass:l5,setOpacity:E2,testProp:h2,setTransform:u2,setPosition:Y1,getPosition:z2,get disableTextSelection(){return g2},get enableTextSelection(){return M5},disableImageDrag:o0,enableImageDrag:C0,preventOutline:a0,restoreOutline:g5,getSizedParentNode:p7,getScale:Z3};function A1(C,H,l,u){if(H&&typeof H=="object")for(var f in H)v0(C,f,H[f],l);else{H=v(H);for(var S=0,T=H.length;S<T;S++)v0(C,H[S],l,u)}return this}var F2="_leaflet_events";function N1(C,H,l,u){if(arguments.length===1)R5(C),delete C[F2];else if(H&&typeof H=="object")for(var f in H)H0(C,f,H[f],l);else if(H=v(H),arguments.length===2)R5(C,function(F){return R(H,F)!==-1});else for(var S=0,T=H.length;S<T;S++)H0(C,H[S],l,u);return this}function R5(C,H){for(var l in C[F2]){var u=l.split(/\d/)[0];(!H||H(u))&&H0(C,u,null,null,l)}}var n0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function v0(C,H,l,u){var f=H+n(l)+(u?"_"+n(u):"");if(C[F2]&&C[F2][f])return this;var S=function(F){return l.call(u||C,F||window.event)},T=S;!p1.touchNative&&p1.pointer&&H.indexOf("touch")===0?S=H6(C,H,S):p1.touch&&H==="dblclick"?S=b(C,S):"addEventListener"in C?H==="touchstart"||H==="touchmove"||H==="wheel"||H==="mousewheel"?C.addEventListener(n0[H]||H,S,p1.passiveEvents?{passive:!1}:!1):H==="mouseenter"||H==="mouseleave"?(S=function(F){F=F||window.event,w2(C,F)&&T(F)},C.addEventListener(n0[H],S,!1)):C.addEventListener(H,T,!1):C.attachEvent("on"+H,S),C[F2]=C[F2]||{},C[F2][f]=S}function H0(C,H,l,u,f){f=f||H+n(l)+(u?"_"+n(u):"");var S=C[F2]&&C[F2][f];if(!S)return this;!p1.touchNative&&p1.pointer&&H.indexOf("touch")===0?V6(C,H,S):p1.touch&&H==="dblclick"?P(C,S):"removeEventListener"in C?C.removeEventListener(n0[H]||H,S,!1):C.detachEvent("on"+H,S),C[F2][f]=null}function G2(C){return C.stopPropagation?C.stopPropagation():C.originalEvent?C.originalEvent._stopped=!0:C.cancelBubble=!0,this}function L2(C){return v0(C,"wheel",G2),this}function r5(C){return A1(C,"mousedown touchstart dblclick contextmenu",G2),C._leaflet_disable_click=!0,this}function l2(C){return C.preventDefault?C.preventDefault():C.returnValue=!1,this}function B5(C){return l2(C),G2(C),this}function u7(C){if(C.composedPath)return C.composedPath();for(var H=[],l=C.target;l;)H.push(l),l=l.parentNode;return H}function x1(C,H){if(!H)return new X(C.clientX,C.clientY);var l=Z3(H),u=l.boundingClientRect;return new X((C.clientX-u.left)/l.x-H.clientLeft,(C.clientY-u.top)/l.y-H.clientTop)}var R1=p1.linux&&p1.chrome?window.devicePixelRatio:p1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function S2(C){return p1.edge?C.wheelDeltaY/2:C.deltaY&&C.deltaMode===0?-C.deltaY/R1:C.deltaY&&C.deltaMode===1?-C.deltaY*20:C.deltaY&&C.deltaMode===2?-C.deltaY*60:C.deltaX||C.deltaZ?0:C.wheelDelta?(C.wheelDeltaY||C.wheelDelta)/2:C.detail&&Math.abs(C.detail)<32765?-C.detail*20:C.detail?C.detail/-32765*60:0}function w2(C,H){var l=H.relatedTarget;if(!l)return!0;try{for(;l&&l!==C;)l=l.parentNode}catch{return!1}return l!==C}var i5={__proto__:null,on:A1,off:N1,stopPropagation:G2,disableScrollPropagation:L2,disableClickPropagation:r5,preventDefault:l2,stop:B5,getPropagationPath:u7,getMousePosition:x1,getWheelDelta:S2,isExternalTarget:w2,addListener:A1,removeListener:N1},_5=Z1.extend({run:function(C,H,l,u){this.stop(),this._el=C,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=z2(C),this._offset=H.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=i1(this._animate,this),this._step()},_step:function(C){var H=+new Date-this._startTime,l=this._duration*1e3;H<l?this._runFrame(this._easeOut(H/l),C):(this._runFrame(1),this._complete())},_runFrame:function(C,H){var l=this._startPos.add(this._offset.multiplyBy(C));H&&l._round(),Y1(this._el,l),this.fire("step")},_complete:function(){m1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(C){return 1-Math.pow(1-C,this._easeOutPower)}}),_1=Z1.extend({options:{crs:L1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(C,H){H=g(this,H),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(C),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),H.maxBounds&&this.setMaxBounds(H.maxBounds),H.zoom!==void 0&&(this._zoom=this._limitZoom(H.zoom)),H.center&&H.zoom!==void 0&&this.setView(s1(H.center),H.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=W&&p1.any3d&&!p1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A1(this._proxy,N,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(C,H,l){if(H=H===void 0?this._zoom:this._limitZoom(H),C=this._limitCenter(s1(C),H,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==H?this._tryAnimatedZoom&&this._tryAnimatedZoom(C,H,l.zoom):this._tryAnimatedPan(C,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(C,H,l.pan&&l.pan.noMoveStart),this},setZoom:function(C,H){return this._loaded?this.setView(this.getCenter(),C,{zoom:H}):(this._zoom=C,this)},zoomIn:function(C,H){return C=C||(p1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+C,H)},zoomOut:function(C,H){return C=C||(p1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-C,H)},setZoomAround:function(C,H,l){var u=this.getZoomScale(H),f=this.getSize().divideBy(2),S=C instanceof X?C:this.latLngToContainerPoint(C),T=S.subtract(f).multiplyBy(1-1/u),F=this.containerPointToLatLng(f.add(T));return this.setView(F,H,{zoom:l})},_getBoundsCenterZoom:function(C,H){H=H||{},C=C.getBounds?C.getBounds():h1(C);var l=n1(H.paddingTopLeft||H.padding||[0,0]),u=n1(H.paddingBottomRight||H.padding||[0,0]),f=this.getBoundsZoom(C,!1,l.add(u));if(f=typeof H.maxZoom=="number"?Math.min(H.maxZoom,f):f,f===1/0)return{center:C.getCenter(),zoom:f};var S=u.subtract(l).divideBy(2),T=this.project(C.getSouthWest(),f),F=this.project(C.getNorthEast(),f),I=this.unproject(T.add(F).divideBy(2).add(S),f);return{center:I,zoom:f}},fitBounds:function(C,H){if(C=h1(C),!C.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(C,H);return this.setView(l.center,l.zoom,H)},fitWorld:function(C){return this.fitBounds([[-90,-180],[90,180]],C)},panTo:function(C,H){return this.setView(C,this._zoom,{pan:H})},panBy:function(C,H){if(C=n1(C).round(),H=H||{},!C.x&&!C.y)return this.fire("moveend");if(H.animate!==!0&&!this.getSize().contains(C))return this._resetView(this.unproject(this.project(this.getCenter()).add(C)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new _5,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),H.noMoveStart||this.fire("movestart"),H.animate!==!1){M1(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(C).round();this._panAnim.run(this._mapPane,l,H.duration||.25,H.easeLinearity)}else this._rawPanBy(C),this.fire("move").fire("moveend");return this},flyTo:function(C,H,l){if(l=l||{},l.animate===!1||!p1.any3d)return this.setView(C,H,l);this._stop();var u=this.project(this.getCenter()),f=this.project(C),S=this.getSize(),T=this._zoom;C=s1(C),H=H===void 0?T:H;var F=Math.max(S.x,S.y),I=F*this.getZoomScale(T,H),j=f.distanceTo(u)||1,o1=1.42,v1=o1*o1;function O1(f2){var g6=f2?-1:1,XV=f2?I:F,JV=I*I-F*F+g6*v1*v1*j*j,ts=2*XV*v1*j,Bt=JV/ts,xi=Math.sqrt(Bt*Bt+1)-Bt,es=xi<1e-9?-18:Math.log(xi);return es}function Q2(f2){return(Math.exp(f2)-Math.exp(-f2))/2}function b2(f2){return(Math.exp(f2)+Math.exp(-f2))/2}function b5(f2){return Q2(f2)/b2(f2)}var C5=O1(0);function x7(f2){return F*(b2(C5)/b2(C5+o1*f2))}function qV(f2){return F*(b2(C5)*b5(C5+o1*f2)-Q2(C5))/v1}function YV(f2){return 1-Math.pow(1-f2,1.5)}var QV=Date.now(),Ai=(O1(1)-C5)/o1,KV=l.duration?1e3*l.duration:1e3*Ai*.8;function vi(){var f2=(Date.now()-QV)/KV,g6=YV(f2)*Ai;f2<=1?(this._flyToFrame=i1(vi,this),this._move(this.unproject(u.add(f.subtract(u).multiplyBy(qV(g6)/j)),T),this.getScaleZoom(F/x7(g6),T),{flyTo:!0})):this._move(C,H)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),vi.call(this),this},flyToBounds:function(C,H){var l=this._getBoundsCenterZoom(C,H);return this.flyTo(l.center,l.zoom,H)},setMaxBounds:function(C){return C=h1(C),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),C.isValid()?(this.options.maxBounds=C,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(C){var H=this.options.minZoom;return this.options.minZoom=C,this._loaded&&H!==C&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(C):this},setMaxZoom:function(C){var H=this.options.maxZoom;return this.options.maxZoom=C,this._loaded&&H!==C&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(C):this},panInsideBounds:function(C,H){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,h1(C));return l.equals(u)||this.panTo(u,H),this._enforcingBounds=!1,this},panInside:function(C,H){H=H||{};var l=n1(H.paddingTopLeft||H.padding||[0,0]),u=n1(H.paddingBottomRight||H.padding||[0,0]),f=this.project(this.getCenter()),S=this.project(C),T=this.getPixelBounds(),F=t1([T.min.add(l),T.max.subtract(u)]),I=F.getSize();if(!F.contains(S)){this._enforcingBounds=!0;var j=S.subtract(F.getCenter()),o1=F.extend(S).getSize().subtract(I);f.x+=j.x<0?-o1.x:o1.x,f.y+=j.y<0?-o1.y:o1.y,this.panTo(this.unproject(f),H),this._enforcingBounds=!1}return this},invalidateSize:function(C){if(!this._loaded)return this;C=e({animate:!1,pan:!0},C===!0?{animate:!0}:C);var H=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=H.divideBy(2).round(),f=l.divideBy(2).round(),S=u.subtract(f);return!S.x&&!S.y?this:(C.animate&&C.pan?this.panBy(S):(C.pan&&this._rawPanBy(S),this.fire("move"),C.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:H,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(C){if(C=this._locateOptions=e({timeout:1e4,watch:!1},C),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var H=o(this._handleGeolocationResponse,this),l=o(this._handleGeolocationError,this);return C.watch?this._locationWatchId=navigator.geolocation.watchPosition(H,l,C):navigator.geolocation.getCurrentPosition(H,l,C),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(C){if(this._container._leaflet_id){var H=C.code,l=C.message||(H===1?"permission denied":H===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:H,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(C){if(this._container._leaflet_id){var H=C.coords.latitude,l=C.coords.longitude,u=new V1(H,l),f=u.toBounds(C.coords.accuracy*2),S=this._locateOptions;if(S.setView){var T=this.getBoundsZoom(f);this.setView(u,S.maxZoom?Math.min(T,S.maxZoom):T)}var F={latlng:u,bounds:f,timestamp:C.timestamp};for(var I in C.coords)typeof C.coords[I]=="number"&&(F[I]=C.coords[I]);this.fire("locationfound",F)}},addHandler:function(C,H){if(!H)return this;var l=this[C]=new H(this);return this._handlers.push(l),this.options[C]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),l1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(m1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var C;for(C in this._layers)this._layers[C].remove();for(C in this._panes)l1(this._panes[C]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(C,H){var l="leaflet-pane"+(C?" leaflet-"+C.replace("Pane","")+"-pane":""),u=$("div",l,H||this._mapPane);return C&&(this._panes[C]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var C=this.getPixelBounds(),H=this.unproject(C.getBottomLeft()),l=this.unproject(C.getTopRight());return new H1(H,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(C,H,l){C=h1(C),l=n1(l||[0,0]);var u=this.getZoom()||0,f=this.getMinZoom(),S=this.getMaxZoom(),T=C.getNorthWest(),F=C.getSouthEast(),I=this.getSize().subtract(l),j=t1(this.project(F,u),this.project(T,u)).getSize(),o1=p1.any3d?this.options.zoomSnap:1,v1=I.x/j.x,O1=I.y/j.y,Q2=H?Math.max(v1,O1):Math.min(v1,O1);return u=this.getScaleZoom(Q2,u),o1&&(u=Math.round(u/(o1/100))*(o1/100),u=H?Math.ceil(u/o1)*o1:Math.floor(u/o1)*o1),Math.max(f,Math.min(S,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new X(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(C,H){var l=this._getTopLeftPoint(C,H);return new U(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(C){return this.options.crs.getProjectedBounds(C===void 0?this.getZoom():C)},getPane:function(C){return typeof C=="string"?this._panes[C]:C},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(C,H){var l=this.options.crs;return H=H===void 0?this._zoom:H,l.scale(C)/l.scale(H)},getScaleZoom:function(C,H){var l=this.options.crs;H=H===void 0?this._zoom:H;var u=l.zoom(C*l.scale(H));return isNaN(u)?1/0:u},project:function(C,H){return H=H===void 0?this._zoom:H,this.options.crs.latLngToPoint(s1(C),H)},unproject:function(C,H){return H=H===void 0?this._zoom:H,this.options.crs.pointToLatLng(n1(C),H)},layerPointToLatLng:function(C){var H=n1(C).add(this.getPixelOrigin());return this.unproject(H)},latLngToLayerPoint:function(C){var H=this.project(s1(C))._round();return H._subtract(this.getPixelOrigin())},wrapLatLng:function(C){return this.options.crs.wrapLatLng(s1(C))},wrapLatLngBounds:function(C){return this.options.crs.wrapLatLngBounds(h1(C))},distance:function(C,H){return this.options.crs.distance(s1(C),s1(H))},containerPointToLayerPoint:function(C){return n1(C).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(C){return n1(C).add(this._getMapPanePos())},containerPointToLatLng:function(C){var H=this.containerPointToLayerPoint(n1(C));return this.layerPointToLatLng(H)},latLngToContainerPoint:function(C){return this.layerPointToContainerPoint(this.latLngToLayerPoint(s1(C)))},mouseEventToContainerPoint:function(C){return x1(C,this._container)},mouseEventToLayerPoint:function(C){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(C))},mouseEventToLatLng:function(C){return this.layerPointToLatLng(this.mouseEventToLayerPoint(C))},_initContainer:function(C){var H=this._container=a1(C);if(H){if(H._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A1(H,"scroll",this._onScroll,this),this._containerId=n(H)},_initLayout:function(){var C=this._container;this._fadeAnimated=this.options.fadeAnimation&&p1.any3d,M1(C,"leaflet-container"+(p1.touch?" leaflet-touch":"")+(p1.retina?" leaflet-retina":"")+(p1.ielt9?" leaflet-oldie":"")+(p1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var H=d1(C,"position");H!=="absolute"&&H!=="relative"&&H!=="fixed"&&H!=="sticky"&&(C.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var C=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Y1(this._mapPane,new X(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M1(C.markerPane,"leaflet-zoom-hide"),M1(C.shadowPane,"leaflet-zoom-hide"))},_resetView:function(C,H,l){Y1(this._mapPane,new X(0,0));var u=!this._loaded;this._loaded=!0,H=this._limitZoom(H),this.fire("viewprereset");var f=this._zoom!==H;this._moveStart(f,l)._move(C,H)._moveEnd(f),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(C,H){return C&&this.fire("zoomstart"),H||this.fire("movestart"),this},_move:function(C,H,l,u){H===void 0&&(H=this._zoom);var f=this._zoom!==H;return this._zoom=H,this._lastCenter=C,this._pixelOrigin=this._getNewPixelOrigin(C),u?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(C){return C&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return m1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(C){Y1(this._mapPane,this._getMapPanePos().subtract(C))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(C){this._targets={},this._targets[n(this._container)]=this;var H=C?N1:A1;H(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&H(window,"resize",this._onResize,this),p1.any3d&&this.options.transform3DLimit&&(C?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){m1(this._resizeRequest),this._resizeRequest=i1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var C=this._getMapPanePos();Math.max(Math.abs(C.x),Math.abs(C.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(C,H){for(var l=[],u,f=H==="mouseout"||H==="mouseover",S=C.target||C.srcElement,T=!1;S;){if(u=this._targets[n(S)],u&&(H==="click"||H==="preclick")&&this._draggableMoved(u)){T=!0;break}if(u&&u.listens(H,!0)&&(f&&!w2(S,C)||(l.push(u),f))||S===this._container)break;S=S.parentNode}return!l.length&&!T&&!f&&this.listens(H,!0)&&(l=[this]),l},_isClickDisabled:function(C){for(;C&&C!==this._container;){if(C._leaflet_disable_click)return!0;C=C.parentNode}},_handleDOMEvent:function(C){var H=C.target||C.srcElement;if(!(!this._loaded||H._leaflet_disable_events||C.type==="click"&&this._isClickDisabled(H))){var l=C.type;l==="mousedown"&&a0(H),this._fireDOMEvent(C,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(C,H,l){if(C.type==="click"){var u=e({},C);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var f=this._findEventTargets(C,H);if(l){for(var S=[],T=0;T<l.length;T++)l[T].listens(H,!0)&&S.push(l[T]);f=S.concat(f)}if(f.length){H==="contextmenu"&&l2(C);var F=f[0],I={originalEvent:C};if(C.type!=="keypress"&&C.type!=="keydown"&&C.type!=="keyup"){var j=F.getLatLng&&(!F._radius||F._radius<=10);I.containerPoint=j?this.latLngToContainerPoint(F.getLatLng()):this.mouseEventToContainerPoint(C),I.layerPoint=this.containerPointToLayerPoint(I.containerPoint),I.latlng=j?F.getLatLng():this.layerPointToLatLng(I.layerPoint)}for(T=0;T<f.length;T++)if(f[T].fire(H,I,!0),I.originalEvent._stopped||f[T].options.bubblingMouseEvents===!1&&R(this._mouseEvents,H)!==-1)return}},_draggableMoved:function(C){return C=C.dragging&&C.dragging.enabled()?C:this,C.dragging&&C.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var C=0,H=this._handlers.length;C<H;C++)this._handlers[C].disable()},whenReady:function(C,H){return this._loaded?C.call(H||this,{target:this}):this.on("load",C,H),this},_getMapPanePos:function(){return z2(this._mapPane)||new X(0,0)},_moved:function(){var C=this._getMapPanePos();return C&&!C.equals([0,0])},_getTopLeftPoint:function(C,H){var l=C&&H!==void 0?this._getNewPixelOrigin(C,H):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(C,H){var l=this.getSize()._divideBy(2);return this.project(C,H)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(C,H,l){var u=this._getNewPixelOrigin(l,H);return this.project(C,H)._subtract(u)},_latLngBoundsToNewLayerBounds:function(C,H,l){var u=this._getNewPixelOrigin(l,H);return t1([this.project(C.getSouthWest(),H)._subtract(u),this.project(C.getNorthWest(),H)._subtract(u),this.project(C.getSouthEast(),H)._subtract(u),this.project(C.getNorthEast(),H)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(C){return this.latLngToLayerPoint(C).subtract(this._getCenterLayerPoint())},_limitCenter:function(C,H,l){if(!l)return C;var u=this.project(C,H),f=this.getSize().divideBy(2),S=new U(u.subtract(f),u.add(f)),T=this._getBoundsOffset(S,l,H);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?C:this.unproject(u.add(T),H)},_limitOffset:function(C,H){if(!H)return C;var l=this.getPixelBounds(),u=new U(l.min.add(C),l.max.add(C));return C.add(this._getBoundsOffset(u,H))},_getBoundsOffset:function(C,H,l){var u=t1(this.project(H.getNorthEast(),l),this.project(H.getSouthWest(),l)),f=u.min.subtract(C.min),S=u.max.subtract(C.max),T=this._rebound(f.x,-S.x),F=this._rebound(f.y,-S.y);return new X(T,F)},_rebound:function(C,H){return C+H>0?Math.round(C-H)/2:Math.max(0,Math.ceil(C))-Math.max(0,Math.floor(H))},_limitZoom:function(C){var H=this.getMinZoom(),l=this.getMaxZoom(),u=p1.any3d?this.options.zoomSnap:1;return u&&(C=Math.round(C/u)*u),Math.max(H,Math.min(l,C))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){$1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(C,H){var l=this._getCenterOffset(C)._trunc();return(H&&H.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,H),!0)},_createAnimProxy:function(){var C=this._proxy=$("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(C),this.on("zoomanim",function(H){var l=D,u=this._proxy.style[l];u2(this._proxy,this.project(H.center,H.zoom),this.getZoomScale(H.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){l1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var C=this.getCenter(),H=this.getZoom();u2(this._proxy,this.project(C,H),this.getZoomScale(H,1))},_catchTransitionEnd:function(C){this._animatingZoom&&C.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(C,H,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(H-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(H),f=this._getCenterOffset(C)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(f)?!1:(i1(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(C,H,!0)},this),!0)},_animateZoom:function(C,H,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=C,this._animateToZoom=H,M1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:C,zoom:H,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&$1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function O3(C,H){return new _1(C,H)}var q2=y1.extend({options:{position:"topright"},initialize:function(C){g(this,C)},getPosition:function(){return this.options.position},setPosition:function(C){var H=this._map;return H&&H.removeControl(this),this.options.position=C,H&&H.addControl(this),this},getContainer:function(){return this._container},addTo:function(C){this.remove(),this._map=C;var H=this._container=this.onAdd(C),l=this.getPosition(),u=C._controlCorners[l];return M1(H,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(H,u.firstChild):u.appendChild(H),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(l1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(C){this._map&&C&&C.screenX>0&&C.screenY>0&&this._map.getContainer().focus()}}),Y=function(C){return new q2(C)};_1.include({addControl:function(C){return C.addTo(this),this},removeControl:function(C){return C.remove(),this},_initControlPos:function(){var C=this._controlCorners={},H="leaflet-",l=this._controlContainer=$("div",H+"control-container",this._container);function u(f,S){var T=H+f+" "+H+S;C[f+S]=$("div",T,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var C in this._controlCorners)l1(this._controlCorners[C]);l1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var f1=q2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(C,H,l,u){return l<u?-1:u<l?1:0}},initialize:function(C,H,l){g(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in C)this._addLayer(C[u],u);for(u in H)this._addLayer(H[u],u,!0)},onAdd:function(C){this._initLayout(),this._update(),this._map=C,C.on("zoomend",this._checkDisabledLayers,this);for(var H=0;H<this._layers.length;H++)this._layers[H].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(C){return q2.prototype.addTo.call(this,C),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var C=0;C<this._layers.length;C++)this._layers[C].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(C,H){return this._addLayer(C,H),this._map?this._update():this},addOverlay:function(C,H){return this._addLayer(C,H,!0),this._map?this._update():this},removeLayer:function(C){C.off("add remove",this._onLayerChange,this);var H=this._getLayer(n(C));return H&&this._layers.splice(this._layers.indexOf(H),1),this._map?this._update():this},expand:function(){M1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var C=this._map.getSize().y-(this._container.offsetTop+50);return C<this._section.clientHeight?(M1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=C+"px"):$1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return $1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var C="leaflet-control-layers",H=this._container=$("div",C),l=this.options.collapsed;H.setAttribute("aria-haspopup",!0),r5(H),L2(H);var u=this._section=$("section",C+"-list");l&&(this._map.on("click",this.collapse,this),A1(H,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=$("a",C+"-toggle",H);f.href="#",f.title="Layers",f.setAttribute("role","button"),A1(f,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){l2(S),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=$("div",C+"-base",u),this._separator=$("div",C+"-separator",u),this._overlaysList=$("div",C+"-overlays",u),H.appendChild(u)},_getLayer:function(C){for(var H=0;H<this._layers.length;H++)if(this._layers[H]&&n(this._layers[H].layer)===C)return this._layers[H]},_addLayer:function(C,H,l){this._map&&C.on("add remove",this._onLayerChange,this),this._layers.push({layer:C,name:H,overlay:l}),this.options.sortLayers&&this._layers.sort(o(function(u,f){return this.options.sortFunction(u.layer,f.layer,u.name,f.name)},this)),this.options.autoZIndex&&C.setZIndex&&(this._lastZIndex++,C.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;W1(this._baseLayersList),W1(this._overlaysList),this._layerControlInputs=[];var C,H,l,u,f=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),H=H||u.overlay,C=C||!u.overlay,f+=u.overlay?0:1;return this.options.hideSingleBase&&(C=C&&f>1,this._baseLayersList.style.display=C?"":"none"),this._separator.style.display=H&&C?"":"none",this},_onLayerChange:function(C){this._handlingClick||this._update();var H=this._getLayer(n(C.target)),l=H.overlay?C.type==="add"?"overlayadd":"overlayremove":C.type==="add"?"baselayerchange":null;l&&this._map.fire(l,H)},_createRadioElement:function(C,H){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+C+'"'+(H?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(C){var H=document.createElement("label"),l=this._map.hasLayer(C.layer),u;C.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+n(this),l),this._layerControlInputs.push(u),u.layerId=n(C.layer),A1(u,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+C.name;var S=document.createElement("span");H.appendChild(S),S.appendChild(u),S.appendChild(f);var T=C.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(H),this._checkDisabledLayers(),H},_onInputClick:function(){if(!this._preventClick){var C=this._layerControlInputs,H,l,u=[],f=[];this._handlingClick=!0;for(var S=C.length-1;S>=0;S--)H=C[S],l=this._getLayer(H.layerId).layer,H.checked?u.push(l):H.checked||f.push(l);for(S=0;S<f.length;S++)this._map.hasLayer(f[S])&&this._map.removeLayer(f[S]);for(S=0;S<u.length;S++)this._map.hasLayer(u[S])||this._map.addLayer(u[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var C=this._layerControlInputs,H,l,u=this._map.getZoom(),f=C.length-1;f>=0;f--)H=C[f],l=this._getLayer(H.layerId).layer,H.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var C=this._section;this._preventClick=!0,A1(C,"click",l2),this.expand();var H=this;setTimeout(function(){N1(C,"click",l2),H._preventClick=!1})}}),T1=function(C,H,l){return new f1(C,H,l)},D1=q2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(C){var H="leaflet-control-zoom",l=$("div",H+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,H+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,H+"-out",l,this._zoomOut),this._updateDisabled(),C.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(C){C.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(C){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(C.shiftKey?3:1))},_zoomOut:function(C){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(C.shiftKey?3:1))},_createButton:function(C,H,l,u,f){var S=$("a",l,u);return S.innerHTML=C,S.href="#",S.title=H,S.setAttribute("role","button"),S.setAttribute("aria-label",H),r5(S),A1(S,"click",B5),A1(S,"click",f,this),A1(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var C=this._map,H="leaflet-disabled";$1(this._zoomInButton,H),$1(this._zoomOutButton,H),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||C._zoom===C.getMinZoom())&&(M1(this._zoomOutButton,H),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||C._zoom===C.getMaxZoom())&&(M1(this._zoomInButton,H),this._zoomInButton.setAttribute("aria-disabled","true"))}});_1.mergeOptions({zoomControl:!0}),_1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new D1,this.addControl(this.zoomControl))});var $2=function(C){return new D1(C)},Y2=q2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(C){var H="leaflet-control-scale",l=$("div",H),u=this.options;return this._addScales(u,H+"-line",l),C.on(u.updateWhenIdle?"moveend":"move",this._update,this),C.whenReady(this._update,this),l},onRemove:function(C){C.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(C,H,l){C.metric&&(this._mScale=$("div",H,l)),C.imperial&&(this._iScale=$("div",H,l))},_update:function(){var C=this._map,H=C.getSize().y/2,l=C.distance(C.containerPointToLatLng([0,H]),C.containerPointToLatLng([this.options.maxWidth,H]));this._updateScales(l)},_updateScales:function(C){this.options.metric&&C&&this._updateMetric(C),this.options.imperial&&C&&this._updateImperial(C)},_updateMetric:function(C){var H=this._getRoundNum(C),l=H<1e3?H+" m":H/1e3+" km";this._updateScale(this._mScale,l,H/C)},_updateImperial:function(C){var H=C*3.2808399,l,u,f;H>5280?(l=H/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(f=this._getRoundNum(H),this._updateScale(this._iScale,f+" ft",f/H))},_updateScale:function(C,H,l){C.style.width=Math.round(this.options.maxWidth*l)+"px",C.innerHTML=H},_getRoundNum:function(C){var H=Math.pow(10,(Math.floor(C)+"").length-1),l=C/H;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,H*l}}),z5=function(C){return new Y2(C)},T3='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',P3=q2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(p1.inlineSvg?T3+" ":"")+"Leaflet</a>"},initialize:function(C){g(this,C),this._attributions={}},onAdd:function(C){C.attributionControl=this,this._container=$("div","leaflet-control-attribution"),r5(this._container);for(var H in C._layers)C._layers[H].getAttribution&&this.addAttribution(C._layers[H].getAttribution());return this._update(),C.on("layeradd",this._addAttribution,this),this._container},onRemove:function(C){C.off("layeradd",this._addAttribution,this)},_addAttribution:function(C){C.layer.getAttribution&&(this.addAttribution(C.layer.getAttribution()),C.layer.once("remove",function(){this.removeAttribution(C.layer.getAttribution())},this))},setPrefix:function(C){return this.options.prefix=C,this._update(),this},addAttribution:function(C){return C?(this._attributions[C]||(this._attributions[C]=0),this._attributions[C]++,this._update(),this):this},removeAttribution:function(C){return C?(this._attributions[C]&&(this._attributions[C]--,this._update()),this):this},_update:function(){if(this._map){var C=[];for(var H in this._attributions)this._attributions[H]&&C.push(H);var l=[];this.options.prefix&&l.push(this.options.prefix),C.length&&l.push(C.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});_1.mergeOptions({attributionControl:!0}),_1.addInitHook(function(){this.options.attributionControl&&new P3().addTo(this)});var c5=function(C){return new P3(C)};q2.Layers=f1,q2.Zoom=D1,q2.Scale=Y2,q2.Attribution=P3,Y.layers=T1,Y.zoom=$2,Y.scale=z5,Y.attribution=c5;var o5=y1.extend({initialize:function(C){this._map=C},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});o5.addTo=function(C,H){return C.addHandler(H,this),this};var kt={Events:G1},L6=p1.touch?"touchstart mousedown":"mousedown",S5=Z1.extend({options:{clickTolerance:3},initialize:function(C,H,l,u){g(this,u),this._element=C,this._dragStartTarget=H||C,this._preventOutline=l},enable:function(){this._enabled||(A1(this._dragStartTarget,L6,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(S5._dragging===this&&this.finishDrag(!0),N1(this._dragStartTarget,L6,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(C){if(this._enabled&&(this._moved=!1,!U1(this._element,"leaflet-zoom-anim"))){if(C.touches&&C.touches.length!==1){S5._dragging===this&&this.finishDrag();return}if(!(S5._dragging||C.shiftKey||C.which!==1&&C.button!==1&&!C.touches)&&(S5._dragging=this,this._preventOutline&&a0(this._element),o0(),g2(),!this._moving)){this.fire("down");var H=C.touches?C.touches[0]:C,l=p7(this._element);this._startPoint=new X(H.clientX,H.clientY),this._startPos=z2(this._element),this._parentScale=Z3(l);var u=C.type==="mousedown";A1(document,u?"mousemove":"touchmove",this._onMove,this),A1(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(C){if(this._enabled){if(C.touches&&C.touches.length>1){this._moved=!0;return}var H=C.touches&&C.touches.length===1?C.touches[0]:C,l=new X(H.clientX,H.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,l2(C),this._moved||(this.fire("dragstart"),this._moved=!0,M1(document.body,"leaflet-dragging"),this._lastTarget=C.target||C.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=C,this._updatePosition())}},_updatePosition:function(){var C={originalEvent:this._lastEvent};this.fire("predrag",C),Y1(this._element,this._newPos),this.fire("drag",C)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(C){$1(document.body,"leaflet-dragging"),this._lastTarget&&($1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),N1(document,"mousemove touchmove",this._onMove,this),N1(document,"mouseup touchend touchcancel",this._onUp,this),C0(),M5();var H=this._moved&&this._moving;this._moving=!1,S5._dragging=!1,H&&this.fire("dragend",{noInertia:C,distance:this._newPos.distanceTo(this._startPos)})}});function l6(C,H,l){var u,f=[1,4,2,8],S,T,F,I,j,o1,v1,O1;for(S=0,o1=C.length;S<o1;S++)C[S]._code=E3(C[S],H);for(F=0;F<4;F++){for(v1=f[F],u=[],S=0,o1=C.length,T=o1-1;S<o1;T=S++)I=C[S],j=C[T],I._code&v1?j._code&v1||(O1=M6(j,I,v1,H,l),O1._code=E3(O1,H),u.push(O1)):(j._code&v1&&(O1=M6(j,I,v1,H,l),O1._code=E3(O1,H),u.push(O1)),u.push(I));C=u}return C}function qr(C,H){var l,u,f,S,T,F,I,j,o1;if(!C||C.length===0)throw new Error("latlngs not passed");w5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var v1=s1([0,0]),O1=h1(C),Q2=O1.getNorthWest().distanceTo(O1.getSouthWest())*O1.getNorthEast().distanceTo(O1.getNorthWest());Q2<1700&&(v1=Ot(C));var b2=C.length,b5=[];for(l=0;l<b2;l++){var C5=s1(C[l]);b5.push(H.project(s1([C5.lat-v1.lat,C5.lng-v1.lng])))}for(F=I=j=0,l=0,u=b2-1;l<b2;u=l++)f=b5[l],S=b5[u],T=f.y*S.x-S.y*f.x,I+=(f.x+S.x)*T,j+=(f.y+S.y)*T,F+=T*3;F===0?o1=b5[0]:o1=[I/F,j/F];var x7=H.unproject(n1(o1));return s1([x7.lat+v1.lat,x7.lng+v1.lng])}function Ot(C){for(var H=0,l=0,u=0,f=0;f<C.length;f++){var S=s1(C[f]);H+=S.lat,l+=S.lng,u++}return s1([H/u,l/u])}var mV={__proto__:null,clipPolygon:l6,polygonCenter:qr,centroid:Ot};function Yr(C,H){if(!H||!C.length)return C.slice();var l=H*H;return C=AV(C,l),C=fV(C,l),C}function Qr(C,H,l){return Math.sqrt(u4(C,H,l,!0))}function hV(C,H,l){return u4(C,H,l)}function fV(C,H){var l=C.length,u=typeof Uint8Array<"u"?Uint8Array:Array,f=new u(l);f[0]=f[l-1]=1,Tt(C,f,H,0,l-1);var S,T=[];for(S=0;S<l;S++)f[S]&&T.push(C[S]);return T}function Tt(C,H,l,u,f){var S=0,T,F,I;for(F=u+1;F<=f-1;F++)I=u4(C[F],C[u],C[f],!0),I>S&&(T=F,S=I);S>l&&(H[T]=1,Tt(C,H,l,u,T),Tt(C,H,l,T,f))}function AV(C,H){for(var l=[C[0]],u=1,f=0,S=C.length;u<S;u++)vV(C[u],C[f])>H&&(l.push(C[u]),f=u);return f<S-1&&l.push(C[S-1]),l}var Kr;function Xr(C,H,l,u,f){var S=u?Kr:E3(C,l),T=E3(H,l),F,I,j;for(Kr=T;;){if(!(S|T))return[C,H];if(S&T)return!1;F=S||T,I=M6(C,H,F,l,f),j=E3(I,l),F===S?(C=I,S=j):(H=I,T=j)}}function M6(C,H,l,u,f){var S=H.x-C.x,T=H.y-C.y,F=u.min,I=u.max,j,o1;return l&8?(j=C.x+S*(I.y-C.y)/T,o1=I.y):l&4?(j=C.x+S*(F.y-C.y)/T,o1=F.y):l&2?(j=I.x,o1=C.y+T*(I.x-C.x)/S):l&1&&(j=F.x,o1=C.y+T*(F.x-C.x)/S),new X(j,o1,f)}function E3(C,H){var l=0;return C.x<H.min.x?l|=1:C.x>H.max.x&&(l|=2),C.y<H.min.y?l|=4:C.y>H.max.y&&(l|=8),l}function vV(C,H){var l=H.x-C.x,u=H.y-C.y;return l*l+u*u}function u4(C,H,l,u){var f=H.x,S=H.y,T=l.x-f,F=l.y-S,I=T*T+F*F,j;return I>0&&(j=((C.x-f)*T+(C.y-S)*F)/I,j>1?(f=l.x,S=l.y):j>0&&(f+=T*j,S+=F*j)),T=C.x-f,F=C.y-S,u?T*T+F*F:new X(f,S)}function w5(C){return!E(C[0])||typeof C[0][0]!="object"&&typeof C[0][0]<"u"}function Jr(C){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),w5(C)}function ti(C,H){var l,u,f,S,T,F,I,j;if(!C||C.length===0)throw new Error("latlngs not passed");w5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var o1=s1([0,0]),v1=h1(C),O1=v1.getNorthWest().distanceTo(v1.getSouthWest())*v1.getNorthEast().distanceTo(v1.getNorthWest());O1<1700&&(o1=Ot(C));var Q2=C.length,b2=[];for(l=0;l<Q2;l++){var b5=s1(C[l]);b2.push(H.project(s1([b5.lat-o1.lat,b5.lng-o1.lng])))}for(l=0,u=0;l<Q2-1;l++)u+=b2[l].distanceTo(b2[l+1])/2;if(u===0)j=b2[0];else for(l=0,S=0;l<Q2-1;l++)if(T=b2[l],F=b2[l+1],f=T.distanceTo(F),S+=f,S>u){I=(S-u)/f,j=[F.x-I*(F.x-T.x),F.y-I*(F.y-T.y)];break}var C5=H.unproject(n1(j));return s1([C5.lat+o1.lat,C5.lng+o1.lng])}var xV={__proto__:null,simplify:Yr,pointToSegmentDistance:Qr,closestPointOnSegment:hV,clipSegment:Xr,_getEdgeIntersection:M6,_getBitCode:E3,_sqClosestPointOnSegment:u4,isFlat:w5,_flat:Jr,polylineCenter:ti},Pt={project:function(C){return new X(C.lng,C.lat)},unproject:function(C){return new V1(C.y,C.x)},bounds:new U([-180,-90],[180,90])},Et={R:6378137,R_MINOR:6356752314245179e-9,bounds:new U([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(C){var H=Math.PI/180,l=this.R,u=C.lat*H,f=this.R_MINOR/l,S=Math.sqrt(1-f*f),T=S*Math.sin(u),F=Math.tan(Math.PI/4-u/2)/Math.pow((1-T)/(1+T),S/2);return u=-l*Math.log(Math.max(F,1e-10)),new X(C.lng*H*l,u)},unproject:function(C){for(var H=180/Math.PI,l=this.R,u=this.R_MINOR/l,f=Math.sqrt(1-u*u),S=Math.exp(-C.y/l),T=Math.PI/2-2*Math.atan(S),F=0,I=.1,j;F<15&&Math.abs(I)>1e-7;F++)j=f*Math.sin(T),j=Math.pow((1-j)/(1+j),f/2),I=Math.PI/2-2*Math.atan(S*j)-T,T+=I;return new V1(T*H,C.x*H/l)}},gV={__proto__:null,LonLat:Pt,Mercator:Et,SphericalMercator:A2},_V=e({},k1,{code:"EPSG:3395",projection:Et,transformation:(function(){var C=.5/(Math.PI*Et.R);return s2(C,.5,-C,.5)})()}),ei=e({},k1,{code:"EPSG:4326",projection:Pt,transformation:s2(1/180,1,-1/180,.5)}),SV=e({},g1,{projection:Pt,transformation:s2(1,0,-1,0),scale:function(C){return Math.pow(2,C)},zoom:function(C){return Math.log(C)/Math.LN2},distance:function(C,H){var l=H.lng-C.lng,u=H.lat-C.lat;return Math.sqrt(l*l+u*u)},infinite:!0});g1.Earth=k1,g1.EPSG3395=_V,g1.EPSG3857=L1,g1.EPSG900913=e5,g1.EPSG4326=ei,g1.Simple=SV;var I5=Z1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(C){return C.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(C){return C&&C.removeLayer(this),this},getPane:function(C){return this._map.getPane(C?this.options[C]||C:this.options.pane)},addInteractiveTarget:function(C){return this._map._targets[n(C)]=this,this},removeInteractiveTarget:function(C){return delete this._map._targets[n(C)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(C){var H=C.target;if(H.hasLayer(this)){if(this._map=H,this._zoomAnimated=H._zoomAnimated,this.getEvents){var l=this.getEvents();H.on(l,this),this.once("remove",function(){H.off(l,this)},this)}this.onAdd(H),this.fire("add"),H.fire("layeradd",{layer:this})}}});_1.include({addLayer:function(C){if(!C._layerAdd)throw new Error("The provided object is not a Layer.");var H=n(C);return this._layers[H]?this:(this._layers[H]=C,C._mapToAdd=this,C.beforeAdd&&C.beforeAdd(this),this.whenReady(C._layerAdd,C),this)},removeLayer:function(C){var H=n(C);return this._layers[H]?(this._loaded&&C.onRemove(this),delete this._layers[H],this._loaded&&(this.fire("layerremove",{layer:C}),C.fire("remove")),C._map=C._mapToAdd=null,this):this},hasLayer:function(C){return n(C)in this._layers},eachLayer:function(C,H){for(var l in this._layers)C.call(H,this._layers[l]);return this},_addLayers:function(C){C=C?E(C)?C:[C]:[];for(var H=0,l=C.length;H<l;H++)this.addLayer(C[H])},_addZoomLimit:function(C){(!isNaN(C.options.maxZoom)||!isNaN(C.options.minZoom))&&(this._zoomBoundLayers[n(C)]=C,this._updateZoomLevels())},_removeZoomLimit:function(C){var H=n(C);this._zoomBoundLayers[H]&&(delete this._zoomBoundLayers[H],this._updateZoomLevels())},_updateZoomLevels:function(){var C=1/0,H=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var f=this._zoomBoundLayers[u].options;C=f.minZoom===void 0?C:Math.min(C,f.minZoom),H=f.maxZoom===void 0?H:Math.max(H,f.maxZoom)}this._layersMaxZoom=H===-1/0?void 0:H,this._layersMinZoom=C===1/0?void 0:C,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var m7=I5.extend({initialize:function(C,H){g(this,H),this._layers={};var l,u;if(C)for(l=0,u=C.length;l<u;l++)this.addLayer(C[l])},addLayer:function(C){var H=this.getLayerId(C);return this._layers[H]=C,this._map&&this._map.addLayer(C),this},removeLayer:function(C){var H=C in this._layers?C:this.getLayerId(C);return this._map&&this._layers[H]&&this._map.removeLayer(this._layers[H]),delete this._layers[H],this},hasLayer:function(C){var H=typeof C=="number"?C:this.getLayerId(C);return H in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(C){var H=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[C]&&u[C].apply(u,H);return this},onAdd:function(C){this.eachLayer(C.addLayer,C)},onRemove:function(C){this.eachLayer(C.removeLayer,C)},eachLayer:function(C,H){for(var l in this._layers)C.call(H,this._layers[l]);return this},getLayer:function(C){return this._layers[C]},getLayers:function(){var C=[];return this.eachLayer(C.push,C),C},setZIndex:function(C){return this.invoke("setZIndex",C)},getLayerId:function(C){return n(C)}}),wV=function(C,H){return new m7(C,H)},x0=m7.extend({addLayer:function(C){return this.hasLayer(C)?this:(C.addEventParent(this),m7.prototype.addLayer.call(this,C),this.fire("layeradd",{layer:C}))},removeLayer:function(C){return this.hasLayer(C)?(C in this._layers&&(C=this._layers[C]),C.removeEventParent(this),m7.prototype.removeLayer.call(this,C),this.fire("layerremove",{layer:C})):this},setStyle:function(C){return this.invoke("setStyle",C)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var C=new H1;for(var H in this._layers){var l=this._layers[H];C.extend(l.getBounds?l.getBounds():l.getLatLng())}return C}}),bV=function(C,H){return new x0(C,H)},h7=y1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(C){g(this,C)},createIcon:function(C){return this._createIcon("icon",C)},createShadow:function(C){return this._createIcon("shadow",C)},_createIcon:function(C,H){var l=this._getIconUrl(C);if(!l){if(C==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,H&&H.tagName==="IMG"?H:null);return this._setIconStyles(u,C),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(C,H){var l=this.options,u=l[H+"Size"];typeof u=="number"&&(u=[u,u]);var f=n1(u),S=n1(H==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));C.className="leaflet-marker-"+H+" "+(l.className||""),S&&(C.style.marginLeft=-S.x+"px",C.style.marginTop=-S.y+"px"),f&&(C.style.width=f.x+"px",C.style.height=f.y+"px")},_createImg:function(C,H){return H=H||document.createElement("img"),H.src=C,H},_getIconUrl:function(C){return p1.retina&&this.options[C+"RetinaUrl"]||this.options[C+"Url"]}});function yV(C){return new h7(C)}var m4=h7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(C){return typeof m4.imagePath!="string"&&(m4.imagePath=this._detectIconPath()),(this.options.imagePath||m4.imagePath)+h7.prototype._getIconUrl.call(this,C)},_stripUrl:function(C){var H=function(l,u,f){var S=u.exec(l);return S&&S[f]};return C=H(C,/^url\((['"])?(.+)\1\)$/,2),C&&H(C,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var C=$("div","leaflet-default-icon-path",document.body),H=d1(C,"background-image")||d1(C,"backgroundImage");if(document.body.removeChild(C),H=this._stripUrl(H),H)return H;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),ri=o5.extend({initialize:function(C){this._marker=C},addHooks:function(){var C=this._marker._icon;this._draggable||(this._draggable=new S5(C,C,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M1(C,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&$1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(C){var H=this._marker,l=H._map,u=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,S=z2(H._icon),T=l.getPixelBounds(),F=l.getPixelOrigin(),I=t1(T.min._subtract(F).add(f),T.max._subtract(F).subtract(f));if(!I.contains(S)){var j=n1((Math.max(I.max.x,S.x)-I.max.x)/(T.max.x-I.max.x)-(Math.min(I.min.x,S.x)-I.min.x)/(T.min.x-I.min.x),(Math.max(I.max.y,S.y)-I.max.y)/(T.max.y-I.max.y)-(Math.min(I.min.y,S.y)-I.min.y)/(T.min.y-I.min.y)).multiplyBy(u);l.panBy(j,{animate:!1}),this._draggable._newPos._add(j),this._draggable._startPos._add(j),Y1(H._icon,this._draggable._newPos),this._onDrag(C),this._panRequest=i1(this._adjustPan.bind(this,C))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(C){this._marker.options.autoPan&&(m1(this._panRequest),this._panRequest=i1(this._adjustPan.bind(this,C)))},_onDrag:function(C){var H=this._marker,l=H._shadow,u=z2(H._icon),f=H._map.layerPointToLatLng(u);l&&Y1(l,u),H._latlng=f,C.latlng=f,C.oldLatLng=this._oldLatLng,H.fire("move",C).fire("drag",C)},_onDragEnd:function(C){m1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",C)}}),c6=I5.extend({options:{icon:new m4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(C,H){g(this,H),this._latlng=s1(C)},onAdd:function(C){this._zoomAnimated=this._zoomAnimated&&C.options.markerZoomAnimation,this._zoomAnimated&&C.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(C){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&C.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(C){var H=this._latlng;return this._latlng=s1(C),this.update(),this.fire("move",{oldLatLng:H,latlng:this._latlng})},setZIndexOffset:function(C){return this.options.zIndexOffset=C,this.update()},getIcon:function(){return this.options.icon},setIcon:function(C){return this.options.icon=C,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var C=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(C)}return this},_initIcon:function(){var C=this.options,H="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=C.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,C.title&&(l.title=C.title),l.tagName==="IMG"&&(l.alt=C.alt||"")),M1(l,H),C.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,C.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A1(l,"focus",this._panOnFocus,this);var f=C.icon.createShadow(this._shadow),S=!1;f!==this._shadow&&(this._removeShadow(),S=!0),f&&(M1(f,H),f.alt=""),this._shadow=f,C.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&S&&this.getPane(C.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&N1(this._icon,"focus",this._panOnFocus,this),l1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&l1(this._shadow),this._shadow=null},_setPos:function(C){this._icon&&Y1(this._icon,C),this._shadow&&Y1(this._shadow,C),this._zIndex=C.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(C){this._icon&&(this._icon.style.zIndex=this._zIndex+C)},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center).round();this._setPos(H)},_initInteraction:function(){if(this.options.interactive&&(M1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ri)){var C=this.options.draggable;this.dragging&&(C=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ri(this),C&&this.dragging.enable()}},setOpacity:function(C){return this.options.opacity=C,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var C=this.options.opacity;this._icon&&E2(this._icon,C),this._shadow&&E2(this._shadow,C)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var C=this._map;if(C){var H=this.options.icon.options,l=H.iconSize?n1(H.iconSize):n1(0,0),u=H.iconAnchor?n1(H.iconAnchor):n1(0,0);C.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ZV(C,H){return new c6(C,H)}var Y0=I5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(C){this._renderer=C.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(C){return g(this,C),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&C&&Object.prototype.hasOwnProperty.call(C,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),d6=Y0.extend({options:{fill:!0,radius:10},initialize:function(C,H){g(this,H),this._latlng=s1(C),this._radius=this.options.radius},setLatLng:function(C){var H=this._latlng;return this._latlng=s1(C),this.redraw(),this.fire("move",{oldLatLng:H,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(C){return this.options.radius=this._radius=C,this.redraw()},getRadius:function(){return this._radius},setStyle:function(C){var H=C&&C.radius||this._radius;return Y0.prototype.setStyle.call(this,C),this.setRadius(H),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var C=this._radius,H=this._radiusY||C,l=this._clickTolerance(),u=[C+l,H+l];this._pxBounds=new U(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(C){return C.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function kV(C,H){return new d6(C,H)}var Ft=d6.extend({initialize:function(C,H,l){if(typeof H=="number"&&(H=e({},l,{radius:H})),g(this,H),this._latlng=s1(C),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(C){return this._mRadius=C,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var C=[this._radius,this._radiusY||this._radius];return new H1(this._map.layerPointToLatLng(this._point.subtract(C)),this._map.layerPointToLatLng(this._point.add(C)))},setStyle:Y0.prototype.setStyle,_project:function(){var C=this._latlng.lng,H=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===k1.distance){var f=Math.PI/180,S=this._mRadius/k1.R/f,T=l.project([H+S,C]),F=l.project([H-S,C]),I=T.add(F).divideBy(2),j=l.unproject(I).lat,o1=Math.acos((Math.cos(S*f)-Math.sin(H*f)*Math.sin(j*f))/(Math.cos(H*f)*Math.cos(j*f)))/f;(isNaN(o1)||o1===0)&&(o1=S/Math.cos(Math.PI/180*H)),this._point=I.subtract(l.getPixelOrigin()),this._radius=isNaN(o1)?0:I.x-l.project([j,C-o1]).x,this._radiusY=I.y-T.y}else{var v1=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(v1).x}this._updateBounds()}});function OV(C,H,l){return new Ft(C,H,l)}var g0=Y0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(C,H){g(this,H),this._setLatLngs(C)},getLatLngs:function(){return this._latlngs},setLatLngs:function(C){return this._setLatLngs(C),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(C){for(var H=1/0,l=null,u=u4,f,S,T=0,F=this._parts.length;T<F;T++)for(var I=this._parts[T],j=1,o1=I.length;j<o1;j++){f=I[j-1],S=I[j];var v1=u(C,f,S,!0);v1<H&&(H=v1,l=u(C,f,S))}return l&&(l.distance=Math.sqrt(H)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ti(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(C,H){return H=H||this._defaultShape(),C=s1(C),H.push(C),this._bounds.extend(C),this.redraw()},_setLatLngs:function(C){this._bounds=new H1,this._latlngs=this._convertLatLngs(C)},_defaultShape:function(){return w5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(C){for(var H=[],l=w5(C),u=0,f=C.length;u<f;u++)l?(H[u]=s1(C[u]),this._bounds.extend(H[u])):H[u]=this._convertLatLngs(C[u]);return H},_project:function(){var C=new U;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,C),this._bounds.isValid()&&C.isValid()&&(this._rawPxBounds=C,this._updateBounds())},_updateBounds:function(){var C=this._clickTolerance(),H=new X(C,C);this._rawPxBounds&&(this._pxBounds=new U([this._rawPxBounds.min.subtract(H),this._rawPxBounds.max.add(H)]))},_projectLatlngs:function(C,H,l){var u=C[0]instanceof V1,f=C.length,S,T;if(u){for(T=[],S=0;S<f;S++)T[S]=this._map.latLngToLayerPoint(C[S]),l.extend(T[S]);H.push(T)}else for(S=0;S<f;S++)this._projectLatlngs(C[S],H,l)},_clipPoints:function(){var C=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}var H=this._parts,l,u,f,S,T,F,I;for(l=0,f=0,S=this._rings.length;l<S;l++)for(I=this._rings[l],u=0,T=I.length;u<T-1;u++)F=Xr(I[u],I[u+1],C,u,!0),F&&(H[f]=H[f]||[],H[f].push(F[0]),(F[1]!==I[u+1]||u===T-2)&&(H[f].push(F[1]),f++))}},_simplifyPoints:function(){for(var C=this._parts,H=this.options.smoothFactor,l=0,u=C.length;l<u;l++)C[l]=Yr(C[l],H)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(C,H){var l,u,f,S,T,F,I=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(l=0,S=this._parts.length;l<S;l++)for(F=this._parts[l],u=0,T=F.length,f=T-1;u<T;f=u++)if(!(!H&&u===0)&&Qr(C,F[f],F[u])<=I)return!0;return!1}});function TV(C,H){return new g0(C,H)}g0._flat=Jr;var f7=g0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return qr(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(C){var H=g0.prototype._convertLatLngs.call(this,C),l=H.length;return l>=2&&H[0]instanceof V1&&H[0].equals(H[l-1])&&H.pop(),H},_setLatLngs:function(C){g0.prototype._setLatLngs.call(this,C),w5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return w5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var C=this._renderer._bounds,H=this.options.weight,l=new X(H,H);if(C=new U(C.min.subtract(l),C.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,f=this._rings.length,S;u<f;u++)S=l6(this._rings[u],C,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(C){var H=!1,l,u,f,S,T,F,I,j;if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(S=0,I=this._parts.length;S<I;S++)for(l=this._parts[S],T=0,j=l.length,F=j-1;T<j;F=T++)u=l[T],f=l[F],u.y>C.y!=f.y>C.y&&C.x<(f.x-u.x)*(C.y-u.y)/(f.y-u.y)+u.x&&(H=!H);return H||g0.prototype._containsPoint.call(this,C,!0)}});function PV(C,H){return new f7(C,H)}var _0=x0.extend({initialize:function(C,H){g(this,H),this._layers={},C&&this.addData(C)},addData:function(C){var H=E(C)?C:C.features,l,u,f;if(H){for(l=0,u=H.length;l<u;l++)f=H[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var S=this.options;if(S.filter&&!S.filter(C))return this;var T=p6(C,S);return T?(T.feature=h6(C),T.defaultOptions=T.options,this.resetStyle(T),S.onEachFeature&&S.onEachFeature(C,T),this.addLayer(T)):this},resetStyle:function(C){return C===void 0?this.eachLayer(this.resetStyle,this):(C.options=e({},C.defaultOptions),this._setLayerStyle(C,this.options.style),this)},setStyle:function(C){return this.eachLayer(function(H){this._setLayerStyle(H,C)},this)},_setLayerStyle:function(C,H){C.setStyle&&(typeof H=="function"&&(H=H(C.feature)),C.setStyle(H))}});function p6(C,H){var l=C.type==="Feature"?C.geometry:C,u=l?l.coordinates:null,f=[],S=H&&H.pointToLayer,T=H&&H.coordsToLatLng||$t,F,I,j,o1;if(!u&&!l)return null;switch(l.type){case"Point":return F=T(u),ii(S,C,F,H);case"MultiPoint":for(j=0,o1=u.length;j<o1;j++)F=T(u[j]),f.push(ii(S,C,F,H));return new x0(f);case"LineString":case"MultiLineString":return I=u6(u,l.type==="LineString"?0:1,T),new g0(I,H);case"Polygon":case"MultiPolygon":return I=u6(u,l.type==="Polygon"?1:2,T),new f7(I,H);case"GeometryCollection":for(j=0,o1=l.geometries.length;j<o1;j++){var v1=p6({geometry:l.geometries[j],type:"Feature",properties:C.properties},H);v1&&f.push(v1)}return new x0(f);case"FeatureCollection":for(j=0,o1=l.features.length;j<o1;j++){var O1=p6(l.features[j],H);O1&&f.push(O1)}return new x0(f);default:throw new Error("Invalid GeoJSON object.")}}function ii(C,H,l,u){return C?C(H,l):new c6(l,u&&u.markersInheritOptions&&u)}function $t(C){return new V1(C[1],C[0],C[2])}function u6(C,H,l){for(var u=[],f=0,S=C.length,T;f<S;f++)T=H?u6(C[f],H-1,l):(l||$t)(C[f]),u.push(T);return u}function Dt(C,H){return C=s1(C),C.alt!==void 0?[p(C.lng,H),p(C.lat,H),p(C.alt,H)]:[p(C.lng,H),p(C.lat,H)]}function m6(C,H,l,u){for(var f=[],S=0,T=C.length;S<T;S++)f.push(H?m6(C[S],w5(C[S])?0:H-1,l,u):Dt(C[S],u));return!H&&l&&f.length>0&&f.push(f[0].slice()),f}function A7(C,H){return C.feature?e({},C.feature,{geometry:H}):h6(H)}function h6(C){return C.type==="Feature"||C.type==="FeatureCollection"?C:{type:"Feature",properties:{},geometry:C}}var Rt={toGeoJSON:function(C){return A7(this,{type:"Point",coordinates:Dt(this.getLatLng(),C)})}};c6.include(Rt),Ft.include(Rt),d6.include(Rt),g0.include({toGeoJSON:function(C){var H=!w5(this._latlngs),l=m6(this._latlngs,H?1:0,!1,C);return A7(this,{type:(H?"Multi":"")+"LineString",coordinates:l})}}),f7.include({toGeoJSON:function(C){var H=!w5(this._latlngs),l=H&&!w5(this._latlngs[0]),u=m6(this._latlngs,l?2:H?1:0,!0,C);return H||(u=[u]),A7(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),m7.include({toMultiPoint:function(C){var H=[];return this.eachLayer(function(l){H.push(l.toGeoJSON(C).geometry.coordinates)}),A7(this,{type:"MultiPoint",coordinates:H})},toGeoJSON:function(C){var H=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(H==="MultiPoint")return this.toMultiPoint(C);var l=H==="GeometryCollection",u=[];return this.eachLayer(function(f){if(f.toGeoJSON){var S=f.toGeoJSON(C);if(l)u.push(S.geometry);else{var T=h6(S);T.type==="FeatureCollection"?u.push.apply(u,T.features):u.push(T)}}}),l?A7(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function oi(C,H){return new _0(C,H)}var EV=oi,f6=I5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(C,H,l){this._url=C,this._bounds=h1(H),g(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){l1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(C){return this.options.opacity=C,this._image&&this._updateOpacity(),this},setStyle:function(C){return C.opacity&&this.setOpacity(C.opacity),this},bringToFront:function(){return this._map&&E1(this._image),this},bringToBack:function(){return this._map&&F1(this._image),this},setUrl:function(C){return this._url=C,this._image&&(this._image.src=C),this},setBounds:function(C){return this._bounds=h1(C),this._map&&this._reset(),this},getEvents:function(){var C={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var C=this._url.tagName==="IMG",H=this._image=C?this._url:$("img");if(M1(H,"leaflet-image-layer"),this._zoomAnimated&&M1(H,"leaflet-zoom-animated"),this.options.className&&M1(H,this.options.className),H.onselectstart=M,H.onmousemove=M,H.onload=o(this.fire,this,"load"),H.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(H.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),C){this._url=H.src;return}H.src=this._url,H.alt=this.options.alt},_animateZoom:function(C){var H=this._map.getZoomScale(C.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,C.zoom,C.center).min;u2(this._image,l,H)},_reset:function(){var C=this._image,H=new U(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=H.getSize();Y1(C,H.min),C.style.width=l.x+"px",C.style.height=l.y+"px"},_updateOpacity:function(){E2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var C=this.options.errorOverlayUrl;C&&this._url!==C&&(this._url=C,this._image.src=C)},getCenter:function(){return this._bounds.getCenter()}}),FV=function(C,H,l){return new f6(C,H,l)},Ci=f6.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var C=this._url.tagName==="VIDEO",H=this._image=C?this._url:$("video");if(M1(H,"leaflet-image-layer"),this._zoomAnimated&&M1(H,"leaflet-zoom-animated"),this.options.className&&M1(H,this.options.className),H.onselectstart=M,H.onmousemove=M,H.onloadeddata=o(this.fire,this,"load"),C){for(var l=H.getElementsByTagName("source"),u=[],f=0;f<l.length;f++)u.push(l[f].src);this._url=l.length>0?u:[H.src];return}E(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(H.style,"objectFit")&&(H.style.objectFit="fill"),H.autoplay=!!this.options.autoplay,H.loop=!!this.options.loop,H.muted=!!this.options.muted,H.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var T=$("source");T.src=this._url[S],H.appendChild(T)}}});function $V(C,H,l){return new Ci(C,H,l)}var ai=f6.extend({_initImage:function(){var C=this._image=this._url;M1(C,"leaflet-image-layer"),this._zoomAnimated&&M1(C,"leaflet-zoom-animated"),this.options.className&&M1(C,this.options.className),C.onselectstart=M,C.onmousemove=M}});function DV(C,H,l){return new ai(C,H,l)}var V0=I5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(C,H){C&&(C instanceof V1||E(C))?(this._latlng=s1(C),g(this,H)):(g(this,C),this._source=H),this.options.content&&(this._content=this.options.content)},openOn:function(C){return C=arguments.length?C:this._source._map,C.hasLayer(this)||C.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(C){return this._map?this.close():(arguments.length?this._source=C:C=this._source,this._prepareOpen(),this.openOn(C._map)),this},onAdd:function(C){this._zoomAnimated=C._zoomAnimated,this._container||this._initLayout(),C._fadeAnimated&&E2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),C._fadeAnimated&&E2(this._container,1),this.bringToFront(),this.options.interactive&&(M1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(C){C._fadeAnimated?(E2(this._container,0),this._removeTimeout=setTimeout(o(l1,void 0,this._container),200)):l1(this._container),this.options.interactive&&($1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(C){return this._latlng=s1(C),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(C){return this._content=C,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var C={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&E1(this._container),this},bringToBack:function(){return this._map&&F1(this._container),this},_prepareOpen:function(C){var H=this._source;if(!H._map)return!1;if(H instanceof x0){H=null;var l=this._source._layers;for(var u in l)if(l[u]._map){H=l[u];break}if(!H)return!1;this._source=H}if(!C)if(H.getCenter)C=H.getCenter();else if(H.getLatLng)C=H.getLatLng();else if(H.getBounds)C=H.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(C),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var C=this._contentNode,H=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof H=="string")C.innerHTML=H;else{for(;C.hasChildNodes();)C.removeChild(C.firstChild);C.appendChild(H)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var C=this._map.latLngToLayerPoint(this._latlng),H=n1(this.options.offset),l=this._getAnchor();this._zoomAnimated?Y1(this._container,C.add(l)):H=H.add(C).add(l);var u=this._containerBottom=-H.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+H.x;this._container.style.bottom=u+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});_1.include({_initOverlay:function(C,H,l,u){var f=H;return f instanceof C||(f=new C(u).setContent(H)),l&&f.setLatLng(l),f}}),I5.include({_initOverlay:function(C,H,l,u){var f=l;return f instanceof C?(g(f,u),f._source=this):(f=H&&!u?H:new C(u,this),f.setContent(l)),f}});var A6=V0.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(C){return C=arguments.length?C:this._source._map,!C.hasLayer(this)&&C._popup&&C._popup.options.autoClose&&C.removeLayer(C._popup),C._popup=this,V0.prototype.openOn.call(this,C)},onAdd:function(C){V0.prototype.onAdd.call(this,C),C.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Y0||this._source.on("preclick",G2))},onRemove:function(C){V0.prototype.onRemove.call(this,C),C.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Y0||this._source.off("preclick",G2))},getEvents:function(){var C=V0.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(C.preclick=this.close),this.options.keepInView&&(C.moveend=this._adjustPan),C},_initLayout:function(){var C="leaflet-popup",H=this._container=$("div",C+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=$("div",C+"-content-wrapper",H);if(this._contentNode=$("div",C+"-content",l),r5(H),L2(this._contentNode),A1(H,"contextmenu",G2),this._tipContainer=$("div",C+"-tip-container",H),this._tip=$("div",C+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=$("a",C+"-close-button",H);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',A1(u,"click",function(f){l2(f),this.close()},this)}},_updateLayout:function(){var C=this._contentNode,H=C.style;H.width="",H.whiteSpace="nowrap";var l=C.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),H.width=l+1+"px",H.whiteSpace="",H.height="";var u=C.offsetHeight,f=this.options.maxHeight,S="leaflet-popup-scrolled";f&&u>f?(H.height=f+"px",M1(C,S)):$1(C,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center),l=this._getAnchor();Y1(this._container,H.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var C=this._map,H=parseInt(d1(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+H,u=this._containerWidth,f=new X(this._containerLeft,-l-this._containerBottom);f._add(z2(this._container));var S=C.layerPointToContainerPoint(f),T=n1(this.options.autoPanPadding),F=n1(this.options.autoPanPaddingTopLeft||T),I=n1(this.options.autoPanPaddingBottomRight||T),j=C.getSize(),o1=0,v1=0;S.x+u+I.x>j.x&&(o1=S.x+u-j.x+I.x),S.x-o1-F.x<0&&(o1=S.x-F.x),S.y+l+I.y>j.y&&(v1=S.y+l-j.y+I.y),S.y-v1-F.y<0&&(v1=S.y-F.y),(o1||v1)&&(this.options.keepInView&&(this._autopanning=!0),C.fire("autopanstart").panBy([o1,v1]))}},_getAnchor:function(){return n1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),RV=function(C,H){return new A6(C,H)};_1.mergeOptions({closePopupOnClick:!0}),_1.include({openPopup:function(C,H,l){return this._initOverlay(A6,C,H,l).openOn(this),this},closePopup:function(C){return C=arguments.length?C:this._popup,C&&C.close(),this}}),I5.include({bindPopup:function(C,H){return this._popup=this._initOverlay(A6,this._popup,C,H),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(C){return this._popup&&(this instanceof x0||(this._popup._source=this),this._popup._prepareOpen(C||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(C){return this._popup&&this._popup.setContent(C),this},getPopup:function(){return this._popup},_openPopup:function(C){if(!(!this._popup||!this._map)){B5(C);var H=C.layer||C.target;if(this._popup._source===H&&!(H instanceof Y0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(C.latlng);return}this._popup._source=H,this.openPopup(C.latlng)}},_movePopup:function(C){this._popup.setLatLng(C.latlng)},_onKeyPress:function(C){C.originalEvent.keyCode===13&&this._openPopup(C)}});var v6=V0.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(C){V0.prototype.onAdd.call(this,C),this.setOpacity(this.options.opacity),C.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(C){V0.prototype.onRemove.call(this,C),C.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var C=V0.prototype.getEvents.call(this);return this.options.permanent||(C.preclick=this.close),C},_initLayout:function(){var C="leaflet-tooltip",H=C+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=$("div",H),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+n(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(C){var H,l,u=this._map,f=this._container,S=u.latLngToContainerPoint(u.getCenter()),T=u.layerPointToContainerPoint(C),F=this.options.direction,I=f.offsetWidth,j=f.offsetHeight,o1=n1(this.options.offset),v1=this._getAnchor();F==="top"?(H=I/2,l=j):F==="bottom"?(H=I/2,l=0):F==="center"?(H=I/2,l=j/2):F==="right"?(H=0,l=j/2):F==="left"?(H=I,l=j/2):T.x<S.x?(F="right",H=0,l=j/2):(F="left",H=I+(o1.x+v1.x)*2,l=j/2),C=C.subtract(n1(H,l,!0)).add(o1).add(v1),$1(f,"leaflet-tooltip-right"),$1(f,"leaflet-tooltip-left"),$1(f,"leaflet-tooltip-top"),$1(f,"leaflet-tooltip-bottom"),M1(f,"leaflet-tooltip-"+F),Y1(f,C)},_updatePosition:function(){var C=this._map.latLngToLayerPoint(this._latlng);this._setPosition(C)},setOpacity:function(C){this.options.opacity=C,this._container&&E2(this._container,C)},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center);this._setPosition(H)},_getAnchor:function(){return n1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),BV=function(C,H){return new v6(C,H)};_1.include({openTooltip:function(C,H,l){return this._initOverlay(v6,C,H,l).openOn(this),this},closeTooltip:function(C){return C.close(),this}}),I5.include({bindTooltip:function(C,H){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(v6,this._tooltip,C,H),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(C){if(!(!C&&this._tooltipHandlersAdded)){var H=C?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[H](l),this._tooltipHandlersAdded=!C}},openTooltip:function(C){return this._tooltip&&(this instanceof x0||(this._tooltip._source=this),this._tooltip._prepareOpen(C)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(C){return this._tooltip&&this._tooltip.setContent(C),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(C){var H=typeof C.getElement=="function"&&C.getElement();H&&(A1(H,"focus",function(){this._tooltip._source=C,this.openTooltip()},this),A1(H,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(C){var H=typeof C.getElement=="function"&&C.getElement();H&&H.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(C){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var H=this;this._map.once("moveend",function(){H._openOnceFlag=!1,H._openTooltip(C)});return}this._tooltip._source=C.layer||C.target,this.openTooltip(this._tooltip.options.sticky?C.latlng:void 0)}},_moveTooltip:function(C){var H=C.latlng,l,u;this._tooltip.options.sticky&&C.originalEvent&&(l=this._map.mouseEventToContainerPoint(C.originalEvent),u=this._map.containerPointToLayerPoint(l),H=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(H)}});var ni=h7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(C){var H=C&&C.tagName==="DIV"?C:document.createElement("div"),l=this.options;if(l.html instanceof Element?(W1(H),H.appendChild(l.html)):H.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=n1(l.bgPos);H.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(H,"icon"),H},createShadow:function(){return null}});function zV(C){return new ni(C)}h7.Default=m4;var h4=I5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:p1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(C){g(this,C)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(C){C._addZoomLimit(this)},onRemove:function(C){this._removeAllTiles(),l1(this._container),C._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(E1(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(F1(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(C){return this.options.opacity=C,this._updateOpacity(),this},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var C=this._clampZoom(this._map.getZoom());C!==this._tileZoom&&(this._tileZoom=C,this._updateLevels()),this._update()}return this},getEvents:function(){var C={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=V(this._onMoveEnd,this.options.updateInterval,this)),C.move=this._onMove),this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},createTile:function(){return document.createElement("div")},getTileSize:function(){var C=this.options.tileSize;return C instanceof X?C:new X(C,C)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(C){for(var H=this.getPane().children,l=-C(-1/0,1/0),u=0,f=H.length,S;u<f;u++)S=H[u].style.zIndex,H[u]!==this._container&&S&&(l=C(l,+S));isFinite(l)&&(this.options.zIndex=l+C(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!p1.ielt9){E2(this._container,this.options.opacity);var C=+new Date,H=!1,l=!1;for(var u in this._tiles){var f=this._tiles[u];if(!(!f.current||!f.loaded)){var S=Math.min(1,(C-f.loaded)/200);E2(f.el,S),S<1?H=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),H&&(m1(this._fadeFrame),this._fadeFrame=i1(this._updateOpacity,this))}},_onOpaqueTile:M,_initContainer:function(){this._container||(this._container=$("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var C=this._tileZoom,H=this.options.maxZoom;if(C!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===C?(this._levels[l].el.style.zIndex=H-Math.abs(C-l),this._onUpdateLevel(l)):(l1(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[C],f=this._map;return u||(u=this._levels[C]={},u.el=$("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=H,u.origin=f.project(f.unproject(f.getPixelOrigin()),C).round(),u.zoom=C,this._setZoomTransform(u,f.getCenter(),f.getZoom()),M(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:M,_onRemoveLevel:M,_onCreateLevel:M,_pruneTiles:function(){if(this._map){var C,H,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(C in this._tiles)H=this._tiles[C],H.retain=H.current;for(C in this._tiles)if(H=this._tiles[C],H.current&&!H.active){var u=H.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(C in this._tiles)this._tiles[C].retain||this._removeTile(C)}},_removeTilesAtZoom:function(C){for(var H in this._tiles)this._tiles[H].coords.z===C&&this._removeTile(H)},_removeAllTiles:function(){for(var C in this._tiles)this._removeTile(C)},_invalidateAll:function(){for(var C in this._levels)l1(this._levels[C].el),this._onRemoveLevel(Number(C)),delete this._levels[C];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(C,H,l,u){var f=Math.floor(C/2),S=Math.floor(H/2),T=l-1,F=new X(+f,+S);F.z=+T;var I=this._tileCoordsToKey(F),j=this._tiles[I];return j&&j.active?(j.retain=!0,!0):(j&&j.loaded&&(j.retain=!0),T>u?this._retainParent(f,S,T,u):!1)},_retainChildren:function(C,H,l,u){for(var f=2*C;f<2*C+2;f++)for(var S=2*H;S<2*H+2;S++){var T=new X(f,S);T.z=l+1;var F=this._tileCoordsToKey(T),I=this._tiles[F];if(I&&I.active){I.retain=!0;continue}else I&&I.loaded&&(I.retain=!0);l+1<u&&this._retainChildren(f,S,l+1,u)}},_resetView:function(C){var H=C&&(C.pinch||C.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),H,H)},_animateZoom:function(C){this._setView(C.center,C.zoom,!0,C.noUpdate)},_clampZoom:function(C){var H=this.options;return H.minNativeZoom!==void 0&&C<H.minNativeZoom?H.minNativeZoom:H.maxNativeZoom!==void 0&&H.maxNativeZoom<C?H.maxNativeZoom:C},_setView:function(C,H,l,u){var f=Math.round(H);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var S=this.options.updateWhenZooming&&f!==this._tileZoom;(!u||S)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(C),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(C,H)},_setZoomTransforms:function(C,H){for(var l in this._levels)this._setZoomTransform(this._levels[l],C,H)},_setZoomTransform:function(C,H,l){var u=this._map.getZoomScale(l,C.zoom),f=C.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(H,l)).round();p1.any3d?u2(C.el,f,u):Y1(C.el,f)},_resetGrid:function(){var C=this._map,H=C.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=H.wrapLng&&!this.options.noWrap&&[Math.floor(C.project([0,H.wrapLng[0]],u).x/l.x),Math.ceil(C.project([0,H.wrapLng[1]],u).x/l.y)],this._wrapY=H.wrapLat&&!this.options.noWrap&&[Math.floor(C.project([H.wrapLat[0],0],u).y/l.x),Math.ceil(C.project([H.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(C){var H=this._map,l=H._animatingZoom?Math.max(H._animateToZoom,H.getZoom()):H.getZoom(),u=H.getZoomScale(l,this._tileZoom),f=H.project(C,this._tileZoom).floor(),S=H.getSize().divideBy(u*2);return new U(f.subtract(S),f.add(S))},_update:function(C){var H=this._map;if(H){var l=this._clampZoom(H.getZoom());if(C===void 0&&(C=H.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(C),f=this._pxBoundsToTileRange(u),S=f.getCenter(),T=[],F=this.options.keepBuffer,I=new U(f.getBottomLeft().subtract([F,-F]),f.getTopRight().add([F,-F]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var j in this._tiles){var o1=this._tiles[j].coords;(o1.z!==this._tileZoom||!I.contains(new X(o1.x,o1.y)))&&(this._tiles[j].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(C,l);return}for(var v1=f.min.y;v1<=f.max.y;v1++)for(var O1=f.min.x;O1<=f.max.x;O1++){var Q2=new X(O1,v1);if(Q2.z=this._tileZoom,!!this._isValidTile(Q2)){var b2=this._tiles[this._tileCoordsToKey(Q2)];b2?b2.current=!0:T.push(Q2)}}if(T.sort(function(C5,x7){return C5.distanceTo(S)-x7.distanceTo(S)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var b5=document.createDocumentFragment();for(O1=0;O1<T.length;O1++)this._addTile(T[O1],b5);this._level.el.appendChild(b5)}}}},_isValidTile:function(C){var H=this._map.options.crs;if(!H.infinite){var l=this._globalTileRange;if(!H.wrapLng&&(C.x<l.min.x||C.x>l.max.x)||!H.wrapLat&&(C.y<l.min.y||C.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(C);return h1(this.options.bounds).overlaps(u)},_keyToBounds:function(C){return this._tileCoordsToBounds(this._keyToTileCoords(C))},_tileCoordsToNwSe:function(C){var H=this._map,l=this.getTileSize(),u=C.scaleBy(l),f=u.add(l),S=H.unproject(u,C.z),T=H.unproject(f,C.z);return[S,T]},_tileCoordsToBounds:function(C){var H=this._tileCoordsToNwSe(C),l=new H1(H[0],H[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(C){return C.x+":"+C.y+":"+C.z},_keyToTileCoords:function(C){var H=C.split(":"),l=new X(+H[0],+H[1]);return l.z=+H[2],l},_removeTile:function(C){var H=this._tiles[C];H&&(l1(H.el),delete this._tiles[C],this.fire("tileunload",{tile:H.el,coords:this._keyToTileCoords(C)}))},_initTile:function(C){M1(C,"leaflet-tile");var H=this.getTileSize();C.style.width=H.x+"px",C.style.height=H.y+"px",C.onselectstart=M,C.onmousemove=M,p1.ielt9&&this.options.opacity<1&&E2(C,this.options.opacity)},_addTile:function(C,H){var l=this._getTilePos(C),u=this._tileCoordsToKey(C),f=this.createTile(this._wrapCoords(C),o(this._tileReady,this,C));this._initTile(f),this.createTile.length<2&&i1(o(this._tileReady,this,C,null,f)),Y1(f,l),this._tiles[u]={el:f,coords:C,current:!0},H.appendChild(f),this.fire("tileloadstart",{tile:f,coords:C})},_tileReady:function(C,H,l){H&&this.fire("tileerror",{error:H,tile:l,coords:C});var u=this._tileCoordsToKey(C);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?(E2(l.el,0),m1(this._fadeFrame),this._fadeFrame=i1(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),H||(M1(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:C})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),p1.ielt9||!this._map._fadeAnimated?i1(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(C){return C.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(C){var H=new X(this._wrapX?s(C.x,this._wrapX):C.x,this._wrapY?s(C.y,this._wrapY):C.y);return H.z=C.z,H},_pxBoundsToTileRange:function(C){var H=this.getTileSize();return new U(C.min.unscaleBy(H).floor(),C.max.unscaleBy(H).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var C in this._tiles)if(!this._tiles[C].loaded)return!1;return!0}});function IV(C){return new h4(C)}var v7=h4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(C,H){this._url=C,H=g(this,H),H.detectRetina&&p1.retina&&H.maxZoom>0?(H.tileSize=Math.floor(H.tileSize/2),H.zoomReverse?(H.zoomOffset--,H.minZoom=Math.min(H.maxZoom,H.minZoom+1)):(H.zoomOffset++,H.maxZoom=Math.max(H.minZoom,H.maxZoom-1)),H.minZoom=Math.max(0,H.minZoom)):H.zoomReverse?H.minZoom=Math.min(H.maxZoom,H.minZoom):H.maxZoom=Math.max(H.minZoom,H.maxZoom),typeof H.subdomains=="string"&&(H.subdomains=H.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(C,H){return this._url===C&&H===void 0&&(H=!0),this._url=C,H||this.redraw(),this},createTile:function(C,H){var l=document.createElement("img");return A1(l,"load",o(this._tileOnLoad,this,H,l)),A1(l,"error",o(this._tileOnError,this,H,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(C),l},getTileUrl:function(C){var H={r:p1.retina?"@2x":"",s:this._getSubdomain(C),x:C.x,y:C.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-C.y;this.options.tms&&(H.y=l),H["-y"]=l}return O(this._url,e(H,this.options))},_tileOnLoad:function(C,H){p1.ielt9?setTimeout(o(C,this,null,H),0):C(null,H)},_tileOnError:function(C,H,l){var u=this.options.errorTileUrl;u&&H.getAttribute("src")!==u&&(H.src=u),C(l,H)},_onTileRemove:function(C){C.tile.onload=null},_getZoomForUrl:function(){var C=this._tileZoom,H=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(C=H-C),C+u},_getSubdomain:function(C){var H=Math.abs(C.x+C.y)%this.options.subdomains.length;return this.options.subdomains[H]},_abortLoading:function(){var C,H;for(C in this._tiles)if(this._tiles[C].coords.z!==this._tileZoom&&(H=this._tiles[C].el,H.onload=M,H.onerror=M,!H.complete)){H.src=B;var l=this._tiles[C].coords;l1(H),delete this._tiles[C],this.fire("tileabort",{tile:H,coords:l})}},_removeTile:function(C){var H=this._tiles[C];if(H)return H.el.setAttribute("src",B),h4.prototype._removeTile.call(this,C)},_tileReady:function(C,H,l){if(!(!this._map||l&&l.getAttribute("src")===B))return h4.prototype._tileReady.call(this,C,H,l)}});function Hi(C,H){return new v7(C,H)}var Vi=v7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(C,H){this._url=C;var l=e({},this.defaultWmsParams);for(var u in H)u in this.options||(l[u]=H[u]);H=g(this,H);var f=H.detectRetina&&p1.retina?2:1,S=this.getTileSize();l.width=S.x*f,l.height=S.y*f,this.wmsParams=l},onAdd:function(C){this._crs=this.options.crs||C.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var H=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[H]=this._crs.code,v7.prototype.onAdd.call(this,C)},getTileUrl:function(C){var H=this._tileCoordsToNwSe(C),l=this._crs,u=t1(l.project(H[0]),l.project(H[1])),f=u.min,S=u.max,T=(this._wmsVersion>=1.3&&this._crs===ei?[f.y,f.x,S.y,S.x]:[f.x,f.y,S.x,S.y]).join(","),F=v7.prototype.getTileUrl.call(this,C);return F+y(this.wmsParams,F,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(C,H){return e(this.wmsParams,C),H||this.redraw(),this}});function NV(C,H){return new Vi(C,H)}v7.WMS=Vi,Hi.wms=NV;var S0=I5.extend({options:{padding:.1},initialize:function(C){g(this,C),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var C={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(C.zoomanim=this._onAnimZoom),C},_onAnimZoom:function(C){this._updateTransform(C.center,C.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(C,H){var l=this._map.getZoomScale(H,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,H),S=u.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(C,H));p1.any3d?u2(this._container,S,l):Y1(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var C in this._layers)this._layers[C]._reset()},_onZoomEnd:function(){for(var C in this._layers)this._layers[C]._project()},_updatePaths:function(){for(var C in this._layers)this._layers[C]._update()},_update:function(){var C=this.options.padding,H=this._map.getSize(),l=this._map.containerPointToLayerPoint(H.multiplyBy(-C)).round();this._bounds=new U(l,l.add(H.multiplyBy(1+C*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),si=S0.extend({options:{tolerance:0},getEvents:function(){var C=S0.prototype.getEvents.call(this);return C.viewprereset=this._onViewPreReset,C},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){S0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var C=this._container=document.createElement("canvas");A1(C,"mousemove",this._onMouseMove,this),A1(C,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A1(C,"mouseout",this._handleMouseOut,this),C._leaflet_disable_events=!0,this._ctx=C.getContext("2d")},_destroyContainer:function(){m1(this._redrawRequest),delete this._ctx,l1(this._container),N1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var C;this._redrawBounds=null;for(var H in this._layers)C=this._layers[H],C._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){S0.prototype._update.call(this);var C=this._bounds,H=this._container,l=C.getSize(),u=p1.retina?2:1;Y1(H,C.min),H.width=u*l.x,H.height=u*l.y,H.style.width=l.x+"px",H.style.height=l.y+"px",p1.retina&&this._ctx.scale(2,2),this._ctx.translate(-C.min.x,-C.min.y),this.fire("update")}},_reset:function(){S0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(C){this._updateDashArray(C),this._layers[n(C)]=C;var H=C._order={layer:C,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=H),this._drawLast=H,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(C){this._requestRedraw(C)},_removePath:function(C){var H=C._order,l=H.next,u=H.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete C._order,delete this._layers[n(C)],this._requestRedraw(C)},_updatePath:function(C){this._extendRedrawBounds(C),C._project(),C._update(),this._requestRedraw(C)},_updateStyle:function(C){this._updateDashArray(C),this._requestRedraw(C)},_updateDashArray:function(C){if(typeof C.options.dashArray=="string"){var H=C.options.dashArray.split(/[, ]+/),l=[],u,f;for(f=0;f<H.length;f++){if(u=Number(H[f]),isNaN(u))return;l.push(u)}C.options._dashArray=l}else C.options._dashArray=C.options.dashArray},_requestRedraw:function(C){this._map&&(this._extendRedrawBounds(C),this._redrawRequest=this._redrawRequest||i1(this._redraw,this))},_extendRedrawBounds:function(C){if(C._pxBounds){var H=(C.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new U,this._redrawBounds.extend(C._pxBounds.min.subtract([H,H])),this._redrawBounds.extend(C._pxBounds.max.add([H,H]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var C=this._redrawBounds;if(C){var H=C.getSize();this._ctx.clearRect(C.min.x,C.min.y,H.x,H.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var C,H=this._redrawBounds;if(this._ctx.save(),H){var l=H.getSize();this._ctx.beginPath(),this._ctx.rect(H.min.x,H.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)C=u.layer,(!H||C._pxBounds&&C._pxBounds.intersects(H))&&C._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(C,H){if(this._drawing){var l,u,f,S,T=C._parts,F=T.length,I=this._ctx;if(F){for(I.beginPath(),l=0;l<F;l++){for(u=0,f=T[l].length;u<f;u++)S=T[l][u],I[u?"lineTo":"moveTo"](S.x,S.y);H&&I.closePath()}this._fillStroke(I,C)}}},_updateCircle:function(C){if(!(!this._drawing||C._empty())){var H=C._point,l=this._ctx,u=Math.max(Math.round(C._radius),1),f=(Math.max(Math.round(C._radiusY),1)||u)/u;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(H.x,H.y/f,u,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,C)}},_fillStroke:function(C,H){var l=H.options;l.fill&&(C.globalAlpha=l.fillOpacity,C.fillStyle=l.fillColor||l.color,C.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(C.setLineDash&&C.setLineDash(H.options&&H.options._dashArray||[]),C.globalAlpha=l.opacity,C.lineWidth=l.weight,C.strokeStyle=l.color,C.lineCap=l.lineCap,C.lineJoin=l.lineJoin,C.stroke())},_onClick:function(C){for(var H=this._map.mouseEventToLayerPoint(C),l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(H)&&(!(C.type==="click"||C.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,C)},_onMouseMove:function(C){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var H=this._map.mouseEventToLayerPoint(C);this._handleMouseHover(C,H)}},_handleMouseOut:function(C){var H=this._hoveredLayer;H&&($1(this._container,"leaflet-interactive"),this._fireEvent([H],C,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(C,H){if(!this._mouseHoverThrottled){for(var l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(H)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(C),u&&(M1(this._container,"leaflet-interactive"),this._fireEvent([u],C,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,C),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(C,H,l){this._map._fireDOMEvent(H,l||H.type,C)},_bringToFront:function(C){var H=C._order;if(H){var l=H.next,u=H.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),H.prev=this._drawLast,this._drawLast.next=H,H.next=null,this._drawLast=H,this._requestRedraw(C)}},_bringToBack:function(C){var H=C._order;if(H){var l=H.next,u=H.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),H.prev=null,H.next=this._drawFirst,this._drawFirst.prev=H,this._drawFirst=H,this._requestRedraw(C)}}});function Li(C){return p1.canvas?new si(C):null}var f4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(C){return document.createElement("<lvml:"+C+' class="lvml">')}}catch{}return function(C){return document.createElement("<"+C+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),WV={_initContainer:function(){this._container=$("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(S0.prototype._update.call(this),this.fire("update"))},_initPath:function(C){var H=C._container=f4("shape");M1(H,"leaflet-vml-shape "+(this.options.className||"")),H.coordsize="1 1",C._path=f4("path"),H.appendChild(C._path),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){var H=C._container;this._container.appendChild(H),C.options.interactive&&C.addInteractiveTarget(H)},_removePath:function(C){var H=C._container;l1(H),C.removeInteractiveTarget(H),delete this._layers[n(C)]},_updateStyle:function(C){var H=C._stroke,l=C._fill,u=C.options,f=C._container;f.stroked=!!u.stroke,f.filled=!!u.fill,u.stroke?(H||(H=C._stroke=f4("stroke")),f.appendChild(H),H.weight=u.weight+"px",H.color=u.color,H.opacity=u.opacity,u.dashArray?H.dashStyle=E(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):H.dashStyle="",H.endcap=u.lineCap.replace("butt","flat"),H.joinstyle=u.lineJoin):H&&(f.removeChild(H),C._stroke=null),u.fill?(l||(l=C._fill=f4("fill")),f.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(f.removeChild(l),C._fill=null)},_updateCircle:function(C){var H=C._point.round(),l=Math.round(C._radius),u=Math.round(C._radiusY||l);this._setPath(C,C._empty()?"M0 0":"AL "+H.x+","+H.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(C,H){C._path.v=H},_bringToFront:function(C){E1(C._container)},_bringToBack:function(C){F1(C._container)}},x6=p1.vml?f4:j2,A4=S0.extend({_initContainer:function(){this._container=x6("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=x6("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){l1(this._container),N1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){S0.prototype._update.call(this);var C=this._bounds,H=C.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(H))&&(this._svgSize=H,l.setAttribute("width",H.x),l.setAttribute("height",H.y)),Y1(l,C.min),l.setAttribute("viewBox",[C.min.x,C.min.y,H.x,H.y].join(" ")),this.fire("update")}},_initPath:function(C){var H=C._path=x6("path");C.options.className&&M1(H,C.options.className),C.options.interactive&&M1(H,"leaflet-interactive"),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(C._path),C.addInteractiveTarget(C._path)},_removePath:function(C){l1(C._path),C.removeInteractiveTarget(C._path),delete this._layers[n(C)]},_updatePath:function(C){C._project(),C._update()},_updateStyle:function(C){var H=C._path,l=C.options;H&&(l.stroke?(H.setAttribute("stroke",l.color),H.setAttribute("stroke-opacity",l.opacity),H.setAttribute("stroke-width",l.weight),H.setAttribute("stroke-linecap",l.lineCap),H.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?H.setAttribute("stroke-dasharray",l.dashArray):H.removeAttribute("stroke-dasharray"),l.dashOffset?H.setAttribute("stroke-dashoffset",l.dashOffset):H.removeAttribute("stroke-dashoffset")):H.setAttribute("stroke","none"),l.fill?(H.setAttribute("fill",l.fillColor||l.color),H.setAttribute("fill-opacity",l.fillOpacity),H.setAttribute("fill-rule",l.fillRule||"evenodd")):H.setAttribute("fill","none"))},_updatePoly:function(C,H){this._setPath(C,A5(C._parts,H))},_updateCircle:function(C){var H=C._point,l=Math.max(Math.round(C._radius),1),u=Math.max(Math.round(C._radiusY),1)||l,f="a"+l+","+u+" 0 1,0 ",S=C._empty()?"M0 0":"M"+(H.x-l)+","+H.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(C,S)},_setPath:function(C,H){C._path.setAttribute("d",H)},_bringToFront:function(C){E1(C._path)},_bringToBack:function(C){F1(C._path)}});p1.vml&&A4.include(WV);function li(C){return p1.svg||p1.vml?new A4(C):null}_1.include({getRenderer:function(C){var H=C.options.renderer||this._getPaneRenderer(C.options.pane)||this.options.renderer||this._renderer;return H||(H=this._renderer=this._createRenderer()),this.hasLayer(H)||this.addLayer(H),H},_getPaneRenderer:function(C){if(C==="overlayPane"||C===void 0)return!1;var H=this._paneRenderers[C];return H===void 0&&(H=this._createRenderer({pane:C}),this._paneRenderers[C]=H),H},_createRenderer:function(C){return this.options.preferCanvas&&Li(C)||li(C)}});var Mi=f7.extend({initialize:function(C,H){f7.prototype.initialize.call(this,this._boundsToLatLngs(C),H)},setBounds:function(C){return this.setLatLngs(this._boundsToLatLngs(C))},_boundsToLatLngs:function(C){return C=h1(C),[C.getSouthWest(),C.getNorthWest(),C.getNorthEast(),C.getSouthEast()]}});function UV(C,H){return new Mi(C,H)}A4.create=x6,A4.pointsToPath=A5,_0.geometryToLayer=p6,_0.coordsToLatLng=$t,_0.coordsToLatLngs=u6,_0.latLngToCoords=Dt,_0.latLngsToCoords=m6,_0.getFeature=A7,_0.asFeature=h6,_1.mergeOptions({boxZoom:!0});var ci=o5.extend({initialize:function(C){this._map=C,this._container=C._container,this._pane=C._panes.overlayPane,this._resetStateTimeout=0,C.on("unload",this._destroy,this)},addHooks:function(){A1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){N1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){l1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(C){if(!C.shiftKey||C.which!==1&&C.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),g2(),o0(),this._startPoint=this._map.mouseEventToContainerPoint(C),A1(document,{contextmenu:B5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(C){this._moved||(this._moved=!0,this._box=$("div","leaflet-zoom-box",this._container),M1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(C);var H=new U(this._point,this._startPoint),l=H.getSize();Y1(this._box,H.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(l1(this._box),$1(this._container,"leaflet-crosshair")),M5(),C0(),N1(document,{contextmenu:B5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(C){if(!(C.which!==1&&C.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var H=new H1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(H).fire("boxzoomend",{boxZoomBounds:H})}},_onKeyDown:function(C){C.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});_1.addInitHook("addHandler","boxZoom",ci),_1.mergeOptions({doubleClickZoom:!0});var di=o5.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(C){var H=this._map,l=H.getZoom(),u=H.options.zoomDelta,f=C.originalEvent.shiftKey?l-u:l+u;H.options.doubleClickZoom==="center"?H.setZoom(f):H.setZoomAround(C.containerPoint,f)}});_1.addInitHook("addHandler","doubleClickZoom",di),_1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var pi=o5.extend({addHooks:function(){if(!this._draggable){var C=this._map;this._draggable=new S5(C._mapPane,C._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),C.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),C.on("zoomend",this._onZoomEnd,this),C.whenReady(this._onZoomEnd,this))}M1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){$1(this._map._container,"leaflet-grab"),$1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var C=this._map;if(C._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var H=h1(this._map.options.maxBounds);this._offsetLimit=t1(this._map.latLngToContainerPoint(H.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(H.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;C.fire("movestart").fire("dragstart"),C.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(C){if(this._map.options.inertia){var H=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(H),this._prunePositions(H)}this._map.fire("move",C).fire("drag",C)},_prunePositions:function(C){for(;this._positions.length>1&&C-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var C=this._map.getSize().divideBy(2),H=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=H.subtract(C).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(C,H){return C-(C-H)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var C=this._draggable._newPos.subtract(this._draggable._startPos),H=this._offsetLimit;C.x<H.min.x&&(C.x=this._viscousLimit(C.x,H.min.x)),C.y<H.min.y&&(C.y=this._viscousLimit(C.y,H.min.y)),C.x>H.max.x&&(C.x=this._viscousLimit(C.x,H.max.x)),C.y>H.max.y&&(C.y=this._viscousLimit(C.y,H.max.y)),this._draggable._newPos=this._draggable._startPos.add(C)}},_onPreDragWrap:function(){var C=this._worldWidth,H=Math.round(C/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,f=(u-H+l)%C+H-l,S=(u+H+l)%C-H-l,T=Math.abs(f+l)<Math.abs(S+l)?f:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(C){var H=this._map,l=H.options,u=!l.inertia||C.noInertia||this._times.length<2;if(H.fire("dragend",C),u)H.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,T=l.easeLinearity,F=f.multiplyBy(T/S),I=F.distanceTo([0,0]),j=Math.min(l.inertiaMaxSpeed,I),o1=F.multiplyBy(j/I),v1=j/(l.inertiaDeceleration*T),O1=o1.multiplyBy(-v1/2).round();!O1.x&&!O1.y?H.fire("moveend"):(O1=H._limitOffset(O1,H.options.maxBounds),i1(function(){H.panBy(O1,{duration:v1,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});_1.addInitHook("addHandler","dragging",pi),_1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ui=o5.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(C){this._map=C,this._setPanDelta(C.options.keyboardPanDelta),this._setZoomDelta(C.options.zoomDelta)},addHooks:function(){var C=this._map._container;C.tabIndex<=0&&(C.tabIndex="0"),A1(C,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),N1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var C=document.body,H=document.documentElement,l=C.scrollTop||H.scrollTop,u=C.scrollLeft||H.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(C){var H=this._panKeys={},l=this.keyCodes,u,f;for(u=0,f=l.left.length;u<f;u++)H[l.left[u]]=[-1*C,0];for(u=0,f=l.right.length;u<f;u++)H[l.right[u]]=[C,0];for(u=0,f=l.down.length;u<f;u++)H[l.down[u]]=[0,C];for(u=0,f=l.up.length;u<f;u++)H[l.up[u]]=[0,-1*C]},_setZoomDelta:function(C){var H=this._zoomKeys={},l=this.keyCodes,u,f;for(u=0,f=l.zoomIn.length;u<f;u++)H[l.zoomIn[u]]=C;for(u=0,f=l.zoomOut.length;u<f;u++)H[l.zoomOut[u]]=-C},_addHooks:function(){A1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){N1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(C){if(!(C.altKey||C.ctrlKey||C.metaKey)){var H=C.keyCode,l=this._map,u;if(H in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[H],C.shiftKey&&(u=n1(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(n1(u),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(f)}else l.panBy(u)}else if(H in this._zoomKeys)l.setZoom(l.getZoom()+(C.shiftKey?3:1)*this._zoomKeys[H]);else if(H===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;B5(C)}}});_1.addInitHook("addHandler","keyboard",ui),_1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var mi=o5.extend({addHooks:function(){A1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){N1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(C){var H=S2(C),l=this._map.options.wheelDebounceTime;this._delta+=H,this._lastMousePos=this._map.mouseEventToContainerPoint(C),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),u),B5(C)},_performZoom:function(){var C=this._map,H=C.getZoom(),l=this._map.options.zoomSnap||0;C._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,S=l?Math.ceil(f/l)*l:f,T=C._limitZoom(H+(this._delta>0?S:-S))-H;this._delta=0,this._startTime=null,T&&(C.options.scrollWheelZoom==="center"?C.setZoom(H+T):C.setZoomAround(this._lastMousePos,H+T))}});_1.addInitHook("addHandler","scrollWheelZoom",mi);var jV=600;_1.mergeOptions({tapHold:p1.touchNative&&p1.safari&&p1.mobile,tapTolerance:15});var hi=o5.extend({addHooks:function(){A1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){N1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(C){if(clearTimeout(this._holdTimeout),C.touches.length===1){var H=C.touches[0];this._startPos=this._newPos=new X(H.clientX,H.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(A1(document,"touchend",l2),A1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",H))},this),jV),A1(document,"touchend touchcancel contextmenu",this._cancel,this),A1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function C(){N1(document,"touchend",l2),N1(document,"touchend touchcancel",C)},_cancel:function(){clearTimeout(this._holdTimeout),N1(document,"touchend touchcancel contextmenu",this._cancel,this),N1(document,"touchmove",this._onMove,this)},_onMove:function(C){var H=C.touches[0];this._newPos=new X(H.clientX,H.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(C,H){var l=new MouseEvent(C,{bubbles:!0,cancelable:!0,view:window,screenX:H.screenX,screenY:H.screenY,clientX:H.clientX,clientY:H.clientY});l._simulated=!0,H.target.dispatchEvent(l)}});_1.addInitHook("addHandler","tapHold",hi),_1.mergeOptions({touchZoom:p1.touch,bounceAtZoomLimits:!0});var fi=o5.extend({addHooks:function(){M1(this._map._container,"leaflet-touch-zoom"),A1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){$1(this._map._container,"leaflet-touch-zoom"),N1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(C){var H=this._map;if(!(!C.touches||C.touches.length!==2||H._animatingZoom||this._zooming)){var l=H.mouseEventToContainerPoint(C.touches[0]),u=H.mouseEventToContainerPoint(C.touches[1]);this._centerPoint=H.getSize()._divideBy(2),this._startLatLng=H.containerPointToLatLng(this._centerPoint),H.options.touchZoom!=="center"&&(this._pinchStartLatLng=H.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=H.getZoom(),this._moved=!1,this._zooming=!0,H._stop(),A1(document,"touchmove",this._onTouchMove,this),A1(document,"touchend touchcancel",this._onTouchEnd,this),l2(C)}},_onTouchMove:function(C){if(!(!C.touches||C.touches.length!==2||!this._zooming)){var H=this._map,l=H.mouseEventToContainerPoint(C.touches[0]),u=H.mouseEventToContainerPoint(C.touches[1]),f=l.distanceTo(u)/this._startDist;if(this._zoom=H.getScaleZoom(f,this._startZoom),!H.options.bounceAtZoomLimits&&(this._zoom<H.getMinZoom()&&f<1||this._zoom>H.getMaxZoom()&&f>1)&&(this._zoom=H._limitZoom(this._zoom)),H.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var S=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(f===1&&S.x===0&&S.y===0)return;this._center=H.unproject(H.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(H._moveStart(!0,!1),this._moved=!0),m1(this._animRequest);var T=o(H._move,H,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=i1(T,this,!0),l2(C)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,m1(this._animRequest),N1(document,"touchmove",this._onTouchMove,this),N1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});_1.addInitHook("addHandler","touchZoom",fi),_1.BoxZoom=ci,_1.DoubleClickZoom=di,_1.Drag=pi,_1.Keyboard=ui,_1.ScrollWheelZoom=mi,_1.TapHold=hi,_1.TouchZoom=fi,r.Bounds=U,r.Browser=p1,r.CRS=g1,r.Canvas=si,r.Circle=Ft,r.CircleMarker=d6,r.Class=y1,r.Control=q2,r.DivIcon=ni,r.DivOverlay=V0,r.DomEvent=i5,r.DomUtil=k3,r.Draggable=S5,r.Evented=Z1,r.FeatureGroup=x0,r.GeoJSON=_0,r.GridLayer=h4,r.Handler=o5,r.Icon=h7,r.ImageOverlay=f6,r.LatLng=V1,r.LatLngBounds=H1,r.Layer=I5,r.LayerGroup=m7,r.LineUtil=xV,r.Map=_1,r.Marker=c6,r.Mixin=kt,r.Path=Y0,r.Point=X,r.PolyUtil=mV,r.Polygon=f7,r.Polyline=g0,r.Popup=A6,r.PosAnimation=_5,r.Projection=gV,r.Rectangle=Mi,r.Renderer=S0,r.SVG=A4,r.SVGOverlay=ai,r.TileLayer=v7,r.Tooltip=v6,r.Transformation=T2,r.Util=I1,r.VideoOverlay=Ci,r.bind=o,r.bounds=t1,r.canvas=Li,r.circle=OV,r.circleMarker=kV,r.control=Y,r.divIcon=zV,r.extend=e,r.featureGroup=bV,r.geoJSON=oi,r.geoJson=EV,r.gridLayer=IV,r.icon=yV,r.imageOverlay=FV,r.latLng=s1,r.latLngBounds=h1,r.layerGroup=wV,r.map=O3,r.marker=ZV,r.point=n1,r.polygon=PV,r.polyline=TV,r.popup=RV,r.rectangle=UV,r.setOptions=g,r.stamp=n,r.svg=li,r.svgOverlay=DV,r.tileLayer=Hi,r.tooltip=BV,r.transformation=s2,r.version=t,r.videoOverlay=$V;var GV=window.L;r.noConflict=function(){return window.L=GV,this},window.L=r}))});var S6=globalThis,w6=S6.ShadowRoot&&(S6.ShadyCSS===void 0||S6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),Si=new WeakMap,x4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(w6&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Si.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Si.set(e,t))}return t}toString(){return this.cssText}},w0=r=>new x4(typeof r=="string"?r:r+"",void 0,zt),u1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new x4(e,r,zt)},wi=(r,t)=>{if(w6)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),o=S6.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)}},It=w6?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return w0(e)})(r):r;var{is:Hs,defineProperty:Vs,getOwnPropertyDescriptor:ss,getOwnPropertyNames:Ls,getOwnPropertySymbols:ls,getPrototypeOf:Ms}=Object,Q0=globalThis,bi=Q0.trustedTypes,cs=bi?bi.emptyScript:"",ds=Q0.reactiveElementPolyfillSupport,g4=(r,t)=>r,_4={toAttribute(r,t){switch(t){case Boolean:r=r?cs:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},b6=(r,t)=>!Hs(r,t),yi={attribute:!0,type:String,converter:_4,reflect:!1,useDefault:!1,hasChanged:b6};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q0.litPropertyMetadata??(Q0.litPropertyMetadata=new WeakMap);var b0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=yi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Vs(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:a}=ss(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let V=o?.call(this);a?.call(this,n),this.requestUpdate(t,V,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yi}static _$Ei(){if(this.hasOwnProperty(g4("elementProperties")))return;let t=Ms(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g4("properties"))){let e=this.properties,i=[...Ls(e),...ls(e)];for(let o of i)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(It(o))}else t!==void 0&&e.push(It(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:_4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:_4;this._$Em=o;let V=n.fromAttribute(e,a.type);this[o]=V??this._$Ej?.get(o)??V,this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(t!==void 0){let n=this.constructor;if(o===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??b6)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:n}=a,V=this[o];n!==!0||this._$AL.has(o)||V===void 0||this.C(o,void 0,a,V)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};b0.elementStyles=[],b0.shadowRootOptions={mode:"open"},b0[g4("elementProperties")]=new Map,b0[g4("finalized")]=new Map,ds?.({ReactiveElement:b0}),(Q0.reactiveElementVersions??(Q0.reactiveElementVersions=[])).push("2.1.2");var w4=globalThis,Zi=r=>r,y6=w4.trustedTypes,ki=y6?y6.createPolicy("lit-html",{createHTML:r=>r}):void 0,$i="$lit$",K0=`lit$${Math.random().toFixed(9).slice(2)}$`,Di="?"+K0,ps=`<${Di}>`,D3=document,b4=()=>D3.createComment(""),y4=r=>r===null||typeof r!="object"&&typeof r!="function",Yt=Array.isArray,us=r=>Yt(r)||typeof r?.[Symbol.iterator]=="function",Nt=`[ 	
\f\r]`,S4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Ti=/>/g,F3=RegExp(`>|${Nt}(?:([^\\s"'>=/]+)(${Nt}*=${Nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pi=/'/g,Ei=/"/g,Ri=/^(?:script|style|textarea|title)$/i,Qt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=Qt(1),w1=Qt(2),tA=Qt(3),d5=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Fi=new WeakMap,$3=D3.createTreeWalker(D3,129);function Bi(r,t){if(!Yt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ki!==void 0?ki.createHTML(t):t}var ms=(r,t)=>{let e=r.length-1,i=[],o,a=t===2?"<svg>":t===3?"<math>":"",n=S4;for(let V=0;V<e;V++){let s=r[V],M,p,h=-1,v=0;for(;v<s.length&&(n.lastIndex=v,p=n.exec(s),p!==null);)v=n.lastIndex,n===S4?p[1]==="!--"?n=Oi:p[1]!==void 0?n=Ti:p[2]!==void 0?(Ri.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=F3):p[3]!==void 0&&(n=F3):n===F3?p[0]===">"?(n=o??S4,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,M=p[1],n=p[3]===void 0?F3:p[3]==='"'?Ei:Pi):n===Ei||n===Pi?n=F3:n===Oi||n===Ti?n=S4:(n=F3,o=void 0);let g=n===F3&&r[V+1].startsWith("/>")?" ":"";a+=n===S4?s+ps:h>=0?(i.push(M),s.slice(0,h)+$i+s.slice(h)+K0+g):s+K0+(h===-2?V:g)}return[Bi(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Z4=class r{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,n=0,V=t.length-1,s=this.parts,[M,p]=ms(t,e);if(this.el=r.createElement(M,i),$3.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=$3.nextNode())!==null&&s.length<V;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith($i)){let v=p[n++],g=o.getAttribute(h).split(K0),y=/([.?@])?(.*)/.exec(v);s.push({type:1,index:a,name:y[2],strings:g,ctor:y[1]==="."?Ut:y[1]==="?"?jt:y[1]==="@"?Gt:_7}),o.removeAttribute(h)}else h.startsWith(K0)&&(s.push({type:6,index:a}),o.removeAttribute(h));if(Ri.test(o.tagName)){let h=o.textContent.split(K0),v=h.length-1;if(v>0){o.textContent=y6?y6.emptyScript:"";for(let g=0;g<v;g++)o.append(h[g],b4()),$3.nextNode(),s.push({type:2,index:++a});o.append(h[v],b4())}}}else if(o.nodeType===8)if(o.data===Di)s.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(K0,h+1))!==-1;)s.push({type:7,index:a}),h+=K0.length-1}a++}}static createElement(t,e){let i=D3.createElement("template");return i.innerHTML=t,i}};function g7(r,t,e=r,i){if(t===d5)return t;let o=i!==void 0?e._$Co?.[i]:e._$Cl,a=y4(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=g7(r,o._$AS(r,t.values),o,i)),t}var Wt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??D3).importNode(e,!0);$3.currentNode=o;let a=$3.nextNode(),n=0,V=0,s=i[0];for(;s!==void 0;){if(n===s.index){let M;s.type===2?M=new k4(a,a.nextSibling,this,t):s.type===1?M=new s.ctor(a,s.name,s.strings,this,t):s.type===6&&(M=new qt(a,this,t)),this._$AV.push(M),s=i[++V]}n!==s?.index&&(a=$3.nextNode(),n++)}return $3.currentNode=D3,o}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},k4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=g7(this,t,e),y4(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==d5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):us(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&y4(this._$AH)?this._$AA.nextSibling.data=t:this.T(D3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Z4.createElement(Bi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let a=new Wt(o,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=Fi.get(t.strings);return e===void 0&&Fi.set(t.strings,e=new Z4(t)),e}k(t){Yt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let a of t)o===e.length?e.push(i=new r(this.O(b4()),this.O(b4()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Zi(t).nextSibling;Zi(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},_7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,o){let a=this.strings,n=!1;if(a===void 0)t=g7(this,t,e,0),n=!y4(t)||t!==this._$AH&&t!==d5,n&&(this._$AH=t);else{let V=t,s,M;for(t=a[0],s=0;s<a.length-1;s++)M=g7(this,V[i+s],e,s),M===d5&&(M=this._$AH[s]),n||(n=!y4(M)||M!==this._$AH[s]),M===Z?t=Z:t!==Z&&(t+=(M??"")+a[s+1]),this._$AH[s]=M}n&&!o&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ut=class extends _7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},jt=class extends _7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},Gt=class extends _7{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=g7(this,t,e,0)??Z)===d5)return;let i=this._$AH,o=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},qt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){g7(this,t)}};var hs=w4.litHtmlPolyfillSupport;hs?.(Z4,k4),(w4.litHtmlVersions??(w4.litHtmlVersions=[])).push("3.3.3");var zi=(r,t,e)=>{let i=e?.renderBefore??t,o=i._$litPart$;if(o===void 0){let a=e?.renderBefore??null;i._$litPart$=o=new k4(t.insertBefore(b4(),a),a,void 0,e??{})}return o._$AI(r),o};var O4=globalThis,e1=class extends b0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return d5}};e1._$litElement$=!0,e1.finalized=!0,O4.litElementHydrateSupport?.({LitElement:e1});var fs=O4.litElementPolyfillSupport;fs?.({LitElement:e1});(O4.litElementVersions??(O4.litElementVersions=[])).push("4.2.2");var Z6="2026.10.20.12",T4="weather-station-flex-card",P4="Weather Station Flex Card";var r2=u1`
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
`,k6=u1`
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
`,O6=u1`
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
`,C2=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function S7(r,t,e,i){return _`<div class="seg" role="group" aria-label=${i}>
    ${r.map(o=>_`<button type="button" aria-pressed=${String(o.value===t)} @click=${()=>e(o.value)}>${o.label}</button>`)}
  </div>`}function N5(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function X1(r,t,e,i=Z){return r?.show_title===!1?i===Z?Z:_`<div class="head"><span class="title"></span>${i}</div>`:_`<div class="head">
    <ha-icon icon=${r?.icon||t}></ha-icon>
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function w7(r,{label:t,value:e,unit:i,digits:o=0,color:a,entity:n}){let V=()=>N5(r,n);return _`<div class="reading" @click=${V} role=${n?"button":Z} tabindex=${n?0:Z}
    @keydown=${s=>(s.key==="Enter"||s.key===" ")&&V()}>
    <span class="v">${C2(e,o)}<small>${i||""}</small></span>
    <span class="l">${a?_`<span class="dot" style="background:${a}"></span>`:Z}${t}</span>
  </div>`}var As=typeof global=="object"&&global&&global.Object===Object&&global,T6=As;var vs=typeof self=="object"&&self&&self.Object===Object&&self,xs=T6||vs||Function("return this")(),y5=xs;var gs=y5.Symbol,y0=gs;var Ii=Object.prototype,_s=Ii.hasOwnProperty,Ss=Ii.toString,E4=y0?y0.toStringTag:void 0;function ws(r){var t=_s.call(r,E4),e=r[E4];try{r[E4]=void 0;var i=!0}catch{}var o=Ss.call(r);return i&&(t?r[E4]=e:delete r[E4]),o}var Ni=ws;var bs=Object.prototype,ys=bs.toString;function Zs(r){return ys.call(r)}var Wi=Zs;var ks="[object Null]",Os="[object Undefined]",Ui=y0?y0.toStringTag:void 0;function Ts(r){return r==null?r===void 0?Os:ks:Ui&&Ui in Object(r)?Ni(r):Wi(r)}var s0=Ts;function Ps(r){return r!=null&&typeof r=="object"}var Z5=Ps;var Es="[object Symbol]";function Fs(r){return typeof r=="symbol"||Z5(r)&&s0(r)==Es}var P6=Fs;function $s(r,t){for(var e=-1,i=r==null?0:r.length,o=Array(i);++e<i;)o[e]=t(r[e],e,r);return o}var ji=$s;var Ds=Array.isArray,R3=Ds;var Rs=1/0,Gi=y0?y0.prototype:void 0,qi=Gi?Gi.toString:void 0;function Yi(r){if(typeof r=="string")return r;if(R3(r))return ji(r,Yi)+"";if(P6(r))return qi?qi.call(r):"";var t=r+"";return t=="0"&&1/r==-Rs?"-0":t}var Qi=Yi;var Bs=/\s/;function zs(r){for(var t=r.length;t--&&Bs.test(r.charAt(t)););return t}var Ki=zs;var Is=/^\s+/;function Ns(r){return r&&r.slice(0,Ki(r)+1).replace(Is,"")}var Xi=Ns;function Ws(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var D2=Ws;var Ji=NaN,Us=/^[-+]0x[0-9a-f]+$/i,js=/^0b[01]+$/i,Gs=/^0o[0-7]+$/i,qs=parseInt;function Ys(r){if(typeof r=="number")return r;if(P6(r))return Ji;if(D2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=D2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Xi(r);var e=js.test(r);return e||Gs.test(r)?qs(r.slice(2),e?2:8):Us.test(r)?Ji:+r}var to=Ys;var eo=1/0,Qs=17976931348623157e292;function Ks(r){if(!r)return r===0?r:0;if(r=to(r),r===eo||r===-eo){var t=r<0?-1:1;return t*Qs}return r===r?r:0}var Kt=Ks;function Xs(r){return r}var E6=Xs;var Js="[object AsyncFunction]",tL="[object Function]",eL="[object GeneratorFunction]",rL="[object Proxy]";function iL(r){if(!D2(r))return!1;var t=s0(r);return t==tL||t==eL||t==Js||t==rL}var b7=iL;var oL=y5["__core-js_shared__"],F6=oL;var ro=(function(){var r=/[^.]+$/.exec(F6&&F6.keys&&F6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function CL(r){return!!ro&&ro in r}var io=CL;var aL=Function.prototype,nL=aL.toString;function HL(r){if(r!=null){try{return nL.call(r)}catch{}try{return r+""}catch{}}return""}var oo=HL;var VL=/[\\^$.*+?()[\]{}|]/g,sL=/^\[object .+?Constructor\]$/,LL=Function.prototype,lL=Object.prototype,ML=LL.toString,cL=lL.hasOwnProperty,dL=RegExp("^"+ML.call(cL).replace(VL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pL(r){if(!D2(r)||io(r))return!1;var t=b7(r)?dL:sL;return t.test(oo(r))}var Co=pL;function uL(r,t){return r?.[t]}var ao=uL;function mL(r,t){var e=ao(r,t);return Co(e)?e:void 0}var y7=mL;var no=Object.create,hL=(function(){function r(){}return function(t){if(!D2(t))return{};if(no)return no(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),Ho=hL;function fL(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var Vo=fL;function AL(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var so=AL;var vL=800,xL=16,gL=Date.now;function _L(r){var t=0,e=0;return function(){var i=gL(),o=xL-(i-e);if(e=i,o>0){if(++t>=vL)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var Lo=_L;function SL(r){return function(){return r}}var lo=SL;var wL=(function(){try{var r=y7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),Z7=wL;var bL=Z7?function(r,t){return Z7(r,"toString",{configurable:!0,enumerable:!1,value:lo(t),writable:!0})}:E6,Mo=bL;var yL=Lo(Mo),co=yL;var ZL=9007199254740991,kL=/^(?:0|[1-9]\d*)$/;function OL(r,t){var e=typeof r;return t=t??ZL,!!t&&(e=="number"||e!="symbol"&&kL.test(r))&&r>-1&&r%1==0&&r<t}var $6=OL;function TL(r,t,e){t=="__proto__"&&Z7?Z7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var k7=TL;function PL(r,t){return r===t||r!==r&&t!==t}var X0=PL;var EL=Object.prototype,FL=EL.hasOwnProperty;function $L(r,t,e){var i=r[t];(!(FL.call(r,t)&&X0(i,e))||e===void 0&&!(t in r))&&k7(r,t,e)}var po=$L;function DL(r,t,e,i){var o=!e;e||(e={});for(var a=-1,n=t.length;++a<n;){var V=t[a],s=i?i(e[V],r[V],V,e,r):void 0;s===void 0&&(s=r[V]),o?k7(e,V,s):po(e,V,s)}return e}var uo=DL;var mo=Math.max;function RL(r,t,e){return t=mo(t===void 0?r.length-1:t,0),function(){for(var i=arguments,o=-1,a=mo(i.length-t,0),n=Array(a);++o<a;)n[o]=i[t+o];o=-1;for(var V=Array(t+1);++o<t;)V[o]=i[o];return V[t]=e(n),Vo(r,this,V)}}var ho=RL;function BL(r,t){return co(ho(r,t,E6),r+"")}var fo=BL;var zL=9007199254740991;function IL(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=zL}var D6=IL;function NL(r){return r!=null&&D6(r.length)&&!b7(r)}var O7=NL;function WL(r,t,e){if(!D2(e))return!1;var i=typeof t;return(i=="number"?O7(e)&&$6(t,e.length):i=="string"&&t in e)?X0(e[t],r):!1}var R6=WL;function UL(r){return fo(function(t,e){var i=-1,o=e.length,a=o>1?e[o-1]:void 0,n=o>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(o--,a):void 0,n&&R6(e[0],e[1],n)&&(a=o<3?void 0:a,o=1),t=Object(t);++i<o;){var V=e[i];V&&r(t,V,i,a)}return t})}var Ao=UL;var jL=Object.prototype;function GL(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||jL;return r===e}var B6=GL;function qL(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var vo=qL;var YL="[object Arguments]";function QL(r){return Z5(r)&&s0(r)==YL}var Xt=QL;var xo=Object.prototype,KL=xo.hasOwnProperty,XL=xo.propertyIsEnumerable,JL=Xt((function(){return arguments})())?Xt:function(r){return Z5(r)&&KL.call(r,"callee")&&!XL.call(r,"callee")},F4=JL;function tl(){return!1}var go=tl;var wo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_o=wo&&typeof module=="object"&&module&&!module.nodeType&&module,el=_o&&_o.exports===wo,So=el?y5.Buffer:void 0,rl=So?So.isBuffer:void 0,il=rl||go,z6=il;var ol="[object Arguments]",Cl="[object Array]",al="[object Boolean]",nl="[object Date]",Hl="[object Error]",Vl="[object Function]",sl="[object Map]",Ll="[object Number]",ll="[object Object]",Ml="[object RegExp]",cl="[object Set]",dl="[object String]",pl="[object WeakMap]",ul="[object ArrayBuffer]",ml="[object DataView]",hl="[object Float32Array]",fl="[object Float64Array]",Al="[object Int8Array]",vl="[object Int16Array]",xl="[object Int32Array]",gl="[object Uint8Array]",_l="[object Uint8ClampedArray]",Sl="[object Uint16Array]",wl="[object Uint32Array]",i2={};i2[hl]=i2[fl]=i2[Al]=i2[vl]=i2[xl]=i2[gl]=i2[_l]=i2[Sl]=i2[wl]=!0;i2[ol]=i2[Cl]=i2[ul]=i2[al]=i2[ml]=i2[nl]=i2[Hl]=i2[Vl]=i2[sl]=i2[Ll]=i2[ll]=i2[Ml]=i2[cl]=i2[dl]=i2[pl]=!1;function bl(r){return Z5(r)&&D6(r.length)&&!!i2[s0(r)]}var bo=bl;function yl(r){return function(t){return r(t)}}var yo=yl;var Zo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$4=Zo&&typeof module=="object"&&module&&!module.nodeType&&module,Zl=$4&&$4.exports===Zo,Jt=Zl&&T6.process,kl=(function(){try{var r=$4&&$4.require&&$4.require("util").types;return r||Jt&&Jt.binding&&Jt.binding("util")}catch{}})(),te=kl;var ko=te&&te.isTypedArray,Ol=ko?yo(ko):bo,I6=Ol;var Tl=Object.prototype,Pl=Tl.hasOwnProperty;function El(r,t){var e=R3(r),i=!e&&F4(r),o=!e&&!i&&z6(r),a=!e&&!i&&!o&&I6(r),n=e||i||o||a,V=n?vo(r.length,String):[],s=V.length;for(var M in r)(t||Pl.call(r,M))&&!(n&&(M=="length"||o&&(M=="offset"||M=="parent")||a&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||$6(M,s)))&&V.push(M);return V}var Oo=El;function Fl(r,t){return function(e){return r(t(e))}}var To=Fl;function $l(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var Po=$l;var Dl=Object.prototype,Rl=Dl.hasOwnProperty;function Bl(r){if(!D2(r))return Po(r);var t=B6(r),e=[];for(var i in r)i=="constructor"&&(t||!Rl.call(r,i))||e.push(i);return e}var Eo=Bl;function zl(r){return O7(r)?Oo(r,!0):Eo(r)}var N6=zl;var Il=y7(Object,"create"),Z0=Il;function Nl(){this.__data__=Z0?Z0(null):{},this.size=0}var Fo=Nl;function Wl(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var $o=Wl;var Ul="__lodash_hash_undefined__",jl=Object.prototype,Gl=jl.hasOwnProperty;function ql(r){var t=this.__data__;if(Z0){var e=t[r];return e===Ul?void 0:e}return Gl.call(t,r)?t[r]:void 0}var Do=ql;var Yl=Object.prototype,Ql=Yl.hasOwnProperty;function Kl(r){var t=this.__data__;return Z0?t[r]!==void 0:Ql.call(t,r)}var Ro=Kl;var Xl="__lodash_hash_undefined__";function Jl(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=Z0&&t===void 0?Xl:t,this}var Bo=Jl;function T7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}T7.prototype.clear=Fo;T7.prototype.delete=$o;T7.prototype.get=Do;T7.prototype.has=Ro;T7.prototype.set=Bo;var ee=T7;function tM(){this.__data__=[],this.size=0}var zo=tM;function eM(r,t){for(var e=r.length;e--;)if(X0(r[e][0],t))return e;return-1}var J0=eM;var rM=Array.prototype,iM=rM.splice;function oM(r){var t=this.__data__,e=J0(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():iM.call(t,e,1),--this.size,!0}var Io=oM;function CM(r){var t=this.__data__,e=J0(t,r);return e<0?void 0:t[e][1]}var No=CM;function aM(r){return J0(this.__data__,r)>-1}var Wo=aM;function nM(r,t){var e=this.__data__,i=J0(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var Uo=nM;function P7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}P7.prototype.clear=zo;P7.prototype.delete=Io;P7.prototype.get=No;P7.prototype.has=Wo;P7.prototype.set=Uo;var t3=P7;var HM=y7(y5,"Map"),W6=HM;function VM(){this.size=0,this.__data__={hash:new ee,map:new(W6||t3),string:new ee}}var jo=VM;function sM(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var Go=sM;function LM(r,t){var e=r.__data__;return Go(t)?e[typeof t=="string"?"string":"hash"]:e.map}var e3=LM;function lM(r){var t=e3(this,r).delete(r);return this.size-=t?1:0,t}var qo=lM;function MM(r){return e3(this,r).get(r)}var Yo=MM;function cM(r){return e3(this,r).has(r)}var Qo=cM;function dM(r,t){var e=e3(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var Ko=dM;function E7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}E7.prototype.clear=jo;E7.prototype.delete=qo;E7.prototype.get=Yo;E7.prototype.has=Qo;E7.prototype.set=Ko;var Xo=E7;function pM(r){return r==null?"":Qi(r)}var U6=pM;var uM=To(Object.getPrototypeOf,Object),j6=uM;var mM="[object Object]",hM=Function.prototype,fM=Object.prototype,Jo=hM.toString,AM=fM.hasOwnProperty,vM=Jo.call(Object);function xM(r){if(!Z5(r)||s0(r)!=mM)return!1;var t=j6(r);if(t===null)return!0;var e=AM.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Jo.call(e)==vM}var tC=xM;function gM(r,t,e){var i=-1,o=r.length;t<0&&(t=-t>o?0:o+t),e=e>o?o:e,e<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=r[i+t];return a}var eC=gM;function _M(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:eC(r,t,e)}var rC=_M;var SM="\\ud800-\\udfff",wM="\\u0300-\\u036f",bM="\\ufe20-\\ufe2f",yM="\\u20d0-\\u20ff",ZM=wM+bM+yM,kM="\\ufe0e\\ufe0f",OM="\\u200d",TM=RegExp("["+OM+SM+ZM+kM+"]");function PM(r){return TM.test(r)}var G6=PM;function EM(r){return r.split("")}var iC=EM;var oC="\\ud800-\\udfff",FM="\\u0300-\\u036f",$M="\\ufe20-\\ufe2f",DM="\\u20d0-\\u20ff",RM=FM+$M+DM,BM="\\ufe0e\\ufe0f",zM="["+oC+"]",re="["+RM+"]",ie="\\ud83c[\\udffb-\\udfff]",IM="(?:"+re+"|"+ie+")",CC="[^"+oC+"]",aC="(?:\\ud83c[\\udde6-\\uddff]){2}",nC="[\\ud800-\\udbff][\\udc00-\\udfff]",NM="\\u200d",HC=IM+"?",VC="["+BM+"]?",WM="(?:"+NM+"(?:"+[CC,aC,nC].join("|")+")"+VC+HC+")*",UM=VC+HC+WM,jM="(?:"+[CC+re+"?",re,aC,nC,zM].join("|")+")",GM=RegExp(ie+"(?="+ie+")|"+jM+UM,"g");function qM(r){return r.match(GM)||[]}var sC=qM;function YM(r){return G6(r)?sC(r):iC(r)}var LC=YM;function QM(r){return function(t){t=U6(t);var e=G6(t)?LC(t):void 0,i=e?e[0]:t.charAt(0),o=e?rC(e,1).join(""):t.slice(1);return i[r]()+o}}var lC=QM;var KM=lC("toUpperCase"),MC=KM;function XM(r){return MC(U6(r).toLowerCase())}var k5=XM;function JM(){this.__data__=new t3,this.size=0}var cC=JM;function tc(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var dC=tc;function ec(r){return this.__data__.get(r)}var pC=ec;function rc(r){return this.__data__.has(r)}var uC=rc;var ic=200;function oc(r,t){var e=this.__data__;if(e instanceof t3){var i=e.__data__;if(!W6||i.length<ic-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new Xo(i)}return e.set(r,t),this.size=e.size,this}var mC=oc;function F7(r){var t=this.__data__=new t3(r);this.size=t.size}F7.prototype.clear=cC;F7.prototype.delete=dC;F7.prototype.get=pC;F7.prototype.has=uC;F7.prototype.set=mC;var hC=F7;var xC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fC=xC&&typeof module=="object"&&module&&!module.nodeType&&module,Cc=fC&&fC.exports===xC,AC=Cc?y5.Buffer:void 0,vC=AC?AC.allocUnsafe:void 0;function ac(r,t){if(t)return r.slice();var e=r.length,i=vC?vC(e):new r.constructor(e);return r.copy(i),i}var gC=ac;var nc=y5.Uint8Array,oe=nc;function Hc(r){var t=new r.constructor(r.byteLength);return new oe(t).set(new oe(r)),t}var _C=Hc;function Vc(r,t){var e=t?_C(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var SC=Vc;function sc(r){return typeof r.constructor=="function"&&!B6(r)?Ho(j6(r)):{}}var wC=sc;function Lc(r){return function(t,e,i){for(var o=-1,a=Object(t),n=i(t),V=n.length;V--;){var s=n[r?V:++o];if(e(a[s],s,a)===!1)break}return t}}var bC=Lc;var lc=bC(),yC=lc;function Mc(r,t,e){(e!==void 0&&!X0(r[t],e)||e===void 0&&!(t in r))&&k7(r,t,e)}var D4=Mc;function cc(r){return Z5(r)&&O7(r)}var ZC=cc;function dc(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var R4=dc;function pc(r){return uo(r,N6(r))}var kC=pc;function uc(r,t,e,i,o,a,n){var V=R4(r,e),s=R4(t,e),M=n.get(s);if(M){D4(r,e,M);return}var p=a?a(V,s,e+"",r,t,n):void 0,h=p===void 0;if(h){var v=R3(s),g=!v&&z6(s),y=!v&&!g&&I6(s);p=s,v||g||y?R3(V)?p=V:ZC(V)?p=so(V):g?(h=!1,p=gC(s,!0)):y?(h=!1,p=SC(s,!0)):p=[]:tC(s)||F4(s)?(p=V,F4(V)?p=kC(V):(!D2(V)||b7(V))&&(p=wC(s))):h=!1}h&&(n.set(s,p),o(p,s,i,a,n),n.delete(s)),D4(r,e,p)}var OC=uc;function TC(r,t,e,i,o){r!==t&&yC(t,function(a,n){if(o||(o=new hC),D2(a))OC(r,t,n,e,TC,i,o);else{var V=i?i(R4(r,n),a,n+"",r,t,o):void 0;V===void 0&&(V=a),D4(r,n,V)}},N6)}var PC=TC;var mc=Ao(function(r,t,e){PC(r,t,e)}),B3=mc;var hc=Math.floor,fc=Math.random;function Ac(r,t){return r+hc(fc()*(t-r+1))}var EC=Ac;var vc=parseFloat,xc=Math.min,gc=Math.random;function _c(r,t,e){if(e&&typeof e!="boolean"&&R6(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=Kt(r),t===void 0?(t=r,r=0):t=Kt(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var o=gc();return xc(r+o*(t-r+vc("1e-"+((o+"").length-1))),t)}return EC(r,t)}var B1=_c;var a2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Sc={attribute:!0,type:String,converter:_4,reflect:!1,hasChanged:b6},wc=(r=Sc,t,e)=>{let{kind:i,metadata:o}=e,a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:n}=e;return{set(V){let s=t.get.call(this);t.set.call(this,V),this.requestUpdate(n,s,r,!0,V)},init(V){return V!==void 0&&this.C(n,void 0,r,V),V}}}if(i==="setter"){let{name:n}=e;return function(V){let s=this[n];t.call(this,V),this.requestUpdate(n,s,r,!0,V)}}throw Error("Unsupported decorator location: "+i)};function r1(r){return(t,e)=>typeof e=="object"?wc(r,t,e):((i,o,a)=>{let n=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),n?Object.getOwnPropertyDescriptor(o,a):void 0})(r,t,e)}function K2(r){return r1({...r,state:!0,attribute:!1})}var z3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function B4(r,t){return(e,i,o)=>{let a=n=>n.renderRoot?.querySelector(r)??null;if(t){let{get:n,set:V}=typeof i=="object"?e:o??(()=>{let s=Symbol();return{get(){return this[s]},set(M){this[s]=M}}})();return z3(e,i,{get(){let s=n.call(this);return s===void 0&&(s=a(this),(s!==null||this.hasUpdated)&&V.call(this,s)),s}})}return z3(e,i,{get(){return a(this)}})}}var FC=`:host {
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
`;var $C=u1`
  ${w0(FC)}
`;var I3,N3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(I3||(I3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(N3||(N3={}));function RC(){return(RC=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function yc(r){return r.substr(0,r.indexOf("."))}var Zc=function(r){switch(r.number_format){case I3.comma_decimal:return["en-US","en"];case I3.decimal_comma:return["de","es","it"];case I3.space_comma:return["fr","sv","cs"];case I3.system:return;default:return r.language}},kc=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},Ce=function(r,t,e){var i=t?Zc(t):void 0;if(Number.isNaN=Number.isNaN||function o(a){return typeof a=="number"&&o(a)},t?.number_format!==I3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,DC(r,e)).format(Number(r))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,DC(r,e)).format(Number(r))}return typeof r=="string"?r:kc(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},DC=function(r,t){var e=RC({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var Oc=["closed","locked","off"];var o2=function(r,t,e,i){i=i||{},e=e??{};var o=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return o.detail=e,r.dispatchEvent(o),o};var q6=function(r){o2(window,"haptic",r)},Tc=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),o2(window,"location-changed",{replace:e})},Pc=function(r,t,e){e===void 0&&(e=!0);var i,o=yc(t),a=o==="group"?"homeassistant":o;switch(o){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},Ec=function(r,t){var e=Oc.includes(r.states[t].state);return Pc(r,t,e)},Fc=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(q6("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&o2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&Tc(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(Ec(t,e.entity),q6("success"));break;case"call-service":if(!i.service)return void q6("failure");var o=i.service.split(".",2);t.callService(o[0],o[1],i.service_data,i.target),q6("success");break;case"fire-dom-event":o2(r,"ll-custom",i)}},z4=function(r,t,e,i){var o;i==="double_tap"&&e.double_tap_action?o=e.double_tap_action:i==="hold"&&e.hold_action?o=e.hold_action:i==="tap"&&e.tap_action&&(o=e.tap_action),Fc(r,t,e,o)};function k0(r){return r!==void 0&&r.action!=="none"}function BC(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var zC="NOT_RUNNING";var Y6=v4(I4(),1);var NC=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function $c(r,t){return!!(r===t||NC(r)&&NC(t))}function Dc(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!$c(r[e],t[e]))return!1;return!0}function r3(r,t){t===void 0&&(t=Dc);var e=null;function i(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(e&&e.lastThis===this&&t(o,e.lastArgs))return e.lastResult;var n=r.apply(this,o);return e={lastResult:n,lastArgs:o,lastThis:this},n}return i.clear=function(){e=null},i}var WC=(r,t)=>r?r.config.state!==zC?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",i3=(r,t)=>D7(t).toLocaleDateString(W3(r),{weekday:"short"}),UC=(r,t)=>D7(t).toLocaleDateString(W3(r),{day:"numeric"}),jC=(r,t)=>{let e=D7(t),i=W3(r),o=Q6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:o}).formatToParts(e),h=p.find(g=>g.type==="hour"),v=p.find(g=>g.type==="dayPeriod");if(h){if(v)return{hour:h.value,suffix:v.value};let g=p.indexOf(h),y=p.slice(g+1).filter(k=>k.type==="literal").map(k=>k.value).join("");return y&&y.trim()?{hour:h.value,suffix:y.trim()}:{hour:h.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:o}),n=a.match(/\d+/),V=n?n[0]:a,s=a.replace(/\d+\s*/,"").trim();return s?{hour:V,suffix:s}:{hour:V}},GC=(r,t)=>{let e=D7(t),i=W3(r),o=Q6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:o}).formatToParts(e),h=p.find(y=>y.type==="hour"),v=p.find(y=>y.type==="minute"),g=p.find(y=>y.type==="dayPeriod");if(h&&v){let y=p.indexOf(h),k=p.indexOf(v),O=p.slice(y+1,k).map(B=>B.value).join(""),E=`${h.value}${O}${v.value}`;if(g)return{time:E,suffix:g.value};let R=p.slice(k+1).filter(B=>B.type==="literal").map(B=>B.value).join("");return R&&R.trim()?{time:E,suffix:R.trim()}:{time:E}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:o}),n=a.match(/\d+[:.]\d+/),V=n?n[0]:a,s=a.replace(/\d+[:.]\d+\s*/,"").trim();return s?{time:V,suffix:s}:{time:V}},$7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},Q6=r3(r=>{let t=r?.locale;if(t?.time_format===N3.language||t?.time_format===N3.system){let e=t.time_format===N3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===N3.am_pm}),W3=r=>r?.locale?.language||navigator.language||"en",D7=r=>typeof r=="string"?new Date(r):r,O0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let o=D7(t),a=Y6.getTimes(o,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:o<a.sunrise||o>a.sunset}},qC=(r,t)=>{let e=D7(t),{fraction:i,phase:o}=Y6.getMoonIllumination(e),a=o<=.5,n=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==n}},YC=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=e<.5,a=t===o?0:1,n=t?-60:160;return`M50 0 L${n} 0 L${n} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},He=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${o} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},R7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,QC=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},ne=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},KC=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=ne(t.secondary_info_attribute);i&&e.add(i);let o=t.show_attributes;if(Array.isArray(o))for(let a of o){let n=ne(a);n&&e.add(n)}else{let a=ne(o);a&&e.add(a)}return e.delete(r.entity),[...e]};var I2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},le={silent:{level:-1},fatal:{level:I2.fatal},error:{level:I2.error},warn:{level:I2.warn},log:{level:I2.log},info:{level:I2.info},success:{level:I2.success},fail:{level:I2.fail},ready:{level:I2.info},start:{level:I2.info},box:{level:I2.info},debug:{level:I2.debug},trace:{level:I2.trace},verbose:{level:I2.verbose}};function Ve(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function Me(r,t,e=".",i){if(!Ve(t))return Me(r,{},e,i);let o=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let n=r[a];n!=null&&(i&&i(o,a,n,e)||(Array.isArray(n)&&Array.isArray(o[a])?o[a]=[...n,...o[a]]:Ve(n)&&Ve(o[a])?o[a]=Me(n,o[a],(e?`${e}.`:"")+a.toString(),i):o[a]=n))}return o}function Rc(r){return(...t)=>t.reduce((e,i)=>Me(e,i,"",r),{})}var Bc=Rc();function zc(r){return Object.prototype.toString.call(r)==="[object Object]"}function Ic(r){return!(!zc(r)||!r.message&&!r.args||r.stack)}var se=!1,XC=[],y2=class r{constructor(t={}){z(this,"options");z(this,"_lastLog");z(this,"_mockFn");let e=t.types||le;this.options=Bc({...t,defaults:{...t.defaults},level:Le(t.level,e),reporters:[...t.reporters||[]]},{types:le,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let o={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(o),this[i].raw=this._wrapLogFn(o,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=Le(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){se=!0}resumeLogs(){se=!1;let t=XC.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(se){XC.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let o={date:new Date,args:[],...t,level:Le(t.level,this.options.types)};!i&&e.length===1&&Ic(e[0])?Object.assign(o,e[0]):o.args=[...e],o.message&&(o.args.unshift(o.message),delete o.message),o.additional&&(Array.isArray(o.additional)||(o.additional=o.additional.split(`
`)),o.args.push(`
`+o.additional.join(`
`)),delete o.additional),o.type=typeof o.type=="string"?o.type.toLowerCase():"log",o.tag=typeof o.tag=="string"?o.tag:"";let a=(V=!1)=>{let s=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&s>0){let M=[...this._lastLog.object.args];s>1&&M.push(`(repeated ${s} times)`),this._log({...this._lastLog.object,args:M}),this._lastLog.count=1}V&&(this._lastLog.object=o,this._log(o))};clearTimeout(this._lastLog.timeout);let n=this._lastLog.time&&o.date?o.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=o.date,n<this.options.throttle)try{let V=JSON.stringify([o.type,o.tag,o.args]),s=this._lastLog.serialized===V;if(this._lastLog.serialized=V,s&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function Le(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}y2.prototype.add=y2.prototype.addReporter;y2.prototype.remove=y2.prototype.removeReporter;y2.prototype.clear=y2.prototype.removeReporter;y2.prototype.withScope=y2.prototype.withTag;y2.prototype.mock=y2.prototype.mockTypes;y2.prototype.pause=y2.prototype.pauseLogs;y2.prototype.resume=y2.prototype.resumeLogs;function JC(r={}){return new y2(r)}var ce=class{constructor(t){z(this,"options");z(this,"defaultColor");z(this,"levelColorMap");z(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,o=t.tag||"",n=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,V=`%c${[o,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${V}%c ${t.args[0]}`,n,"",...t.args.slice(1)):e(V,n,...t.args)}};function de(r={}){return JC({reporters:r.reporters||[new ce({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var kw=de();var Nc=I2.info,W5=de({level:Nc}).withTag("weather-forecast-card");var ta=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",pe=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var K6={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},B7=r=>(...t)=>({_$litDirective$:r,values:t}),o3=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var ea="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,ue=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ea?"100px":"50px",height:ea?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",V=>{let s=V||window.event;return s.preventDefault&&s.preventDefault(),s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0,s.returnValue=!1,!1});let o=V=>{this.held=!1;let s,M;V.touches?(s=V.touches[0].pageX,M=V.touches[0].pageY):(s=V.pageX,M=V.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(s,M),this.held=!0},this.holdTime)},a=V=>{V.preventDefault(),i.stopPropagation&&V.stopPropagation(),!(["touchend","touchcancel"].includes(V.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?o2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?V.type==="click"&&V.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,o2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,o2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):o2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},n=V=>{V.keyCode===13&&a(V)};e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",o,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",n)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",ue);var Wc=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},Uc=(r,t)=>{let e=Wc();e&&e.bind(r,t)},L0=B7(class extends o3{update(r,[t]){return Uc(r.element,t),d5}render(r){}});var U3=2,N2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],X6=["rain","snow","lightning","sky","moon","sun","cloud"],J6=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],ra="temperature_and_precipitation";var me=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(me||{}),jc=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Gc={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},U5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},qc=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return jc[e]},Yc=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let o=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return o;let a=qc(i);if(!a)return o;let n=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${o} (${n})`},p5=(r,t,e)=>{let i=r.config,o=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||o;case"precipitation":return t.attributes.precipitation_unit||(o==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(o==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},Qc=288e5,Kc=864e5,Xc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Qc}},Jc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Kc}},ia=r=>{if(r?.forecast&&r.forecast.length>2)return Xc(r.forecast)?{forecast:r.forecast,type:"hourly"}:Jc(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},he=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:ia(r);if(e==="legacy")return ia(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},oa=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var Ca=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,aa=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,o=(t&4)!==0;return e||i||o},N4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let o={hourly:2,daily:1,twice_daily:4}[t];return(e&o)!==0},O5=r=>{if(N4(r,"daily"))return"daily";if(N4(r,"twice_daily"))return"twice_daily"},na=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},z7=r3((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),W4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=p5(r,t,"wind_speed");return td(e.wind_speed,i)},td=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},t8=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return Gc[e]}}},Ha=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,n=a===0?t:t-a,V=r.slice(i,i+n);if(i+=V.length,V.length===0)continue;let s=V.map(B=>B.temperature),M=V.map(B=>B.humidity).filter(B=>B!==void 0),p=V.map(B=>B.pressure).filter(B=>B!==void 0),h=V.map(B=>B.wind_speed).filter(B=>B!==void 0),v=V.map(B=>B.wind_bearing).filter(B=>B!==void 0),g=V.map(B=>B.precipitation_probability).filter(B=>B!==void 0),y=V.map(B=>B.uv_index).filter(B=>B!==void 0),k=V.map(B=>B.apparent_temperature).filter(B=>B!==void 0),O=new Date(V[V.length-1].datetime);O.setMinutes(59),O.setSeconds(59);let E={datetime:V[0].datetime,groupEndtime:O.toISOString(),condition:id(V),temperature:parseFloat(R7(s).toFixed(1))};M.length>0&&(E.humidity=Math.round(R7(M))),g.length>0&&(E.precipitation_probability=Math.max(...g)),V.some(B=>B.precipitation!==void 0)&&(E.precipitation=V.reduce((B,K)=>B+(K.precipitation||0),0));let R=V.map(B=>B.templow).filter(B=>B!==void 0);R.length>0&&(E.templow=Math.min(...R)),p.length>0&&(E.pressure=Math.round(R7(p))),h.length>0&&(E.wind_speed=R7(h)),v.length>0&&(E.wind_bearing=rd(v)),y.length>0&&(E.uv_index=Math.max(...y)),k.length>0&&(E.apparent_temperature=parseFloat(R7(k).toFixed(1))),e.push(E)}return e},ed="mdi:gauge",Va=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?U5[r]:void 0)??ed),I7=(r,t,e,i)=>{let o=t.attributes[i];if(o!==void 0){if(i==="wind_speed")return Yc(r,t);if(i==="wind_gust_speed"){let a=p5(r,t,"wind_gust_speed");return`${Ce(o,r.locale)} ${a}`}if(i==="ozone"){let a=p5(r,t,"ozone");return`${o} ${a}`}return i==="apparent_temperature"||i==="dew_point"?l0(r,t,o,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},e8=(r,t,e,i,o)=>{let a=r.states[o];if(!a)return;let n=a.state;return n===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?l0(r,t,n,e.current?.temperature_precision):r.formatEntityState(a)},l0=(r,t,e,i,o)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,n=p5(r,t,"temperature"),V=typeof e=="string"?parseFloat(e):e;return isNaN(V)?`${e}${o?"":n}`:`${Ce(V,r.locale,a)}${o?"":n}`},rd=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(V=>{let s=V*Math.PI/180;t+=Math.sin(s),e+=Math.cos(s)});let i=t/r.length,o=e/r.length,n=Math.atan2(i,o)*180/Math.PI;return n<0&&(n+=360),Math.round(n)},id=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let o=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return o===-1&&(o=0),a===-1&&(a=0),o-a}),r[0]?.condition||"exceptional"};var N7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let o=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{o&&(o.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let o=t.scrollLeft,a=Math.round(o/i)*i,n=500,V=performance.now(),s=p=>p*(2-p),M=p=>{let h=this._container;if(!h){this._completeFinalize();return}let v=p-V,g=Math.min(v/n,1),y=s(g);h.scrollLeft=o+(a-o)*y,g<1?this._state.momentumId=requestAnimationFrame(M):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(M)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var sa="important",od=" !"+sa,X2=B7(class extends o3{constructor(r){if(super(r),r.type!==K6.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let o=t[i];if(o!=null){this.ft.add(i);let a=typeof o=="string"&&o.endsWith(od);i.includes("-")||a?e.setProperty(i,a?o.slice(0,-11):o,a?sa:""):e[i]=o}}return d5}});var j3=B7(class extends o3{constructor(r){if(super(r),r.type!==K6.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return d5}});function G4(r){return r+.5|0}var C3=(r,t,e)=>Math.max(Math.min(r,e),t);function U4(r){return C3(G4(r*2.55),0,255)}function a3(r){return C3(G4(r*255),0,255)}function T0(r){return C3(G4(r/2.55)/100,0,1)}function La(r){return C3(G4(r*100),0,100)}var T5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ae=[..."0123456789ABCDEF"],Cd=r=>Ae[r&15],ad=r=>Ae[(r&240)>>4]+Ae[r&15],r8=r=>(r&240)>>4===(r&15),nd=r=>r8(r.r)&&r8(r.g)&&r8(r.b)&&r8(r.a);function Hd(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&T5[r[1]]*17,g:255&T5[r[2]]*17,b:255&T5[r[3]]*17,a:t===5?T5[r[4]]*17:255}:(t===7||t===9)&&(e={r:T5[r[1]]<<4|T5[r[2]],g:T5[r[3]]<<4|T5[r[4]],b:T5[r[5]]<<4|T5[r[6]],a:t===9?T5[r[7]]<<4|T5[r[8]]:255})),e}var Vd=(r,t)=>r<255?t(r):"";function sd(r){var t=nd(r)?Cd:ad;return r?"#"+t(r.r)+t(r.g)+t(r.b)+Vd(r.a,t):void 0}var Ld=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function da(r,t,e){let i=t*Math.min(e,1-e),o=(a,n=(a+r/30)%12)=>e-i*Math.max(Math.min(n-3,9-n,1),-1);return[o(0),o(8),o(4)]}function ld(r,t,e){let i=(o,a=(o+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function Md(r,t,e){let i=da(r,1,.5),o;for(t+e>1&&(o=1/(t+e),t*=o,e*=o),o=0;o<3;o++)i[o]*=1-t-e,i[o]+=t;return i}function cd(r,t,e,i,o){return r===o?(t-e)/i+(t<e?6:0):t===o?(e-r)/i+2:(r-t)/i+4}function ve(r){let e=r.r/255,i=r.g/255,o=r.b/255,a=Math.max(e,i,o),n=Math.min(e,i,o),V=(a+n)/2,s,M,p;return a!==n&&(p=a-n,M=V>.5?p/(2-a-n):p/(a+n),s=cd(e,i,o,p,a),s=s*60+.5),[s|0,M||0,V]}function xe(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(a3)}function ge(r,t,e){return xe(da,r,t,e)}function dd(r,t,e){return xe(Md,r,t,e)}function pd(r,t,e){return xe(ld,r,t,e)}function pa(r){return(r%360+360)%360}function ud(r){let t=Ld.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?U4(+t[5]):a3(+t[5]));let o=pa(+t[2]),a=+t[3]/100,n=+t[4]/100;return t[1]==="hwb"?i=dd(o,a,n):t[1]==="hsv"?i=pd(o,a,n):i=ge(o,a,n),{r:i[0],g:i[1],b:i[2],a:e}}function md(r,t){var e=ve(r);e[0]=pa(e[0]+t),e=ge(e),r.r=e[0],r.g=e[1],r.b=e[2]}function hd(r){if(!r)return;let t=ve(r),e=t[0],i=La(t[1]),o=La(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${o}%, ${T0(r.a)})`:`hsl(${e}, ${i}%, ${o}%)`}var la={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ma={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function fd(){let r={},t=Object.keys(Ma),e=Object.keys(la),i,o,a,n,V;for(i=0;i<t.length;i++){for(n=V=t[i],o=0;o<e.length;o++)a=e[o],V=V.replace(a,la[a]);a=parseInt(Ma[n],16),r[V]=[a>>16&255,a>>8&255,a&255]}return r}var i8;function Ad(r){i8||(i8=fd(),i8.transparent=[0,0,0,0]);let t=i8[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var vd=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function xd(r){let t=vd.exec(r),e=255,i,o,a;if(t){if(t[7]!==i){let n=+t[7];e=t[8]?U4(n):C3(n*255,0,255)}return i=+t[1],o=+t[3],a=+t[5],i=255&(t[2]?U4(i):C3(i,0,255)),o=255&(t[4]?U4(o):C3(o,0,255)),a=255&(t[6]?U4(a):C3(a,0,255)),{r:i,g:o,b:a,a:e}}}function gd(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${T0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var fe=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,W7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function _d(r,t,e){let i=W7(T0(r.r)),o=W7(T0(r.g)),a=W7(T0(r.b));return{r:a3(fe(i+e*(W7(T0(t.r))-i))),g:a3(fe(o+e*(W7(T0(t.g))-o))),b:a3(fe(a+e*(W7(T0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function o8(r,t,e){if(r){let i=ve(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=ge(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function ua(r,t){return r&&Object.assign(t||{},r)}function ca(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=a3(r[3]))):(t=ua(r,{r:0,g:0,b:0,a:1}),t.a=a3(t.a)),t}function Sd(r){return r.charAt(0)==="r"?xd(r):ud(r)}var j4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=ca(t):e==="string"&&(i=Hd(t)||Ad(t)||Sd(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=ua(this._rgb);return t&&(t.a=T0(t.a)),t}set rgb(t){this._rgb=ca(t)}rgbString(){return this._valid?gd(this._rgb):void 0}hexString(){return this._valid?sd(this._rgb):void 0}hslString(){return this._valid?hd(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,o=t.rgb,a,n=e===a?.5:e,V=2*n-1,s=i.a-o.a,M=((V*s===-1?V:(V+s)/(1+V*s))+1)/2;a=1-M,i.r=255&M*i.r+a*o.r+.5,i.g=255&M*i.g+a*o.g+.5,i.b=255&M*i.b+a*o.b+.5,i.a=n*i.a+(1-n)*o.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=_d(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=a3(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=G4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return o8(this._rgb,2,t),this}darken(t){return o8(this._rgb,2,-t),this}saturate(t){return o8(this._rgb,1,t),this}desaturate(t){return o8(this._rgb,1,-t),this}rotate(t){return md(this._rgb,t),this}};function G5(){}var be=(()=>{let r=0;return()=>r++})();function S1(r){return r==null}function e2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function b1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function n2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function J2(r,t){return n2(r)?r:t}function P1(r,t){return typeof r>"u"?t:r}var ye=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function J1(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function z1(r,t,e,i){let o,a,n;if(e2(r))if(a=r.length,i)for(o=a-1;o>=0;o--)t.call(e,r[o],o);else for(o=0;o<a;o++)t.call(e,r[o],o);else if(b1(r))for(n=Object.keys(r),a=n.length,o=0;o<a;o++)t.call(e,r[n[o]],n[o])}function G7(r,t){let e,i,o,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(o=r[e],a=t[e],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function Y4(r){if(e2(r))return r.map(Y4);if(b1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,o=0;for(;o<i;++o)t[e[o]]=Y4(r[e[o]]);return t}return r}function wa(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function ba(r,t,e,i){if(!wa(r))return;let o=t[r],a=e[r];b1(o)&&b1(a)?u5(o,a,i):t[r]=Y4(a)}function u5(r,t,e){let i=e2(t)?t:[t],o=i.length;if(!b1(r))return r;e=e||{};let a=e.merger||ba,n;for(let V=0;V<o;++V){if(n=i[V],!b1(n))continue;let s=Object.keys(n);for(let M=0,p=s.length;M<p;++M)a(s[M],r,n,e)}return r}function Y3(r,t){return u5(r,t,{merger:ya})}function ya(r,t,e){if(!wa(r))return;let i=t[r],o=e[r];b1(i)&&b1(o)?Y3(i,o):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=Y4(o))}var ma={"":r=>r,x:r=>r.x,y:r=>r.y};function Za(r){let t=r.split("."),e=[],i="";for(let o of t)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function wd(r){let t=Za(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function s3(r,t){return(ma[t]||(ma[t]=wd(t)))(r)}function X4(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Q3=r=>typeof r<"u",M0=r=>typeof r=="function",s8=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function Ze(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var Q1=Math.PI,c2=2*Q1,ka=c2+Q1,Q4=Number.POSITIVE_INFINITY,Oa=Q1/180,m2=Q1/2,n3=Q1/4,Se=Q1*2/3,c0=Math.log10,P5=Math.sign;function K3(r,t,e){return Math.abs(r-t)<e}function L8(r){let t=Math.round(r);r=K3(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(c0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function ke(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((o,a)=>o-a).pop(),t}function bd(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function X3(r){return!bd(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function Oe(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function l8(r,t,e){let i,o,a;for(i=0,o=r.length;i<o;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function d0(r){return r*(Q1/180)}function J4(r){return r*(180/Q1)}function M8(r){if(!n2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function c8(r,t){let e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*Q1&&(a+=c2),{angle:a,distance:o}}function K4(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function Ta(r,t){return(r-t+ka)%c2-Q1}function Z2(r){return(r%c2+c2)%c2}function t9(r,t,e,i){let o=Z2(r),a=Z2(t),n=Z2(e),V=Z2(a-o),s=Z2(n-o),M=Z2(o-a),p=Z2(o-n);return o===a||o===n||i&&a===n||V>s&&M<p}function k2(r,t,e){return Math.max(t,Math.min(e,r))}function Te(r){return k2(r,-32768,32767)}function J3(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function e9(r,t,e){e=e||(n=>r[n]<t);let i=r.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,e(a)?o=a:i=a;return{lo:o,hi:i}}var E0=(r,t,e,i)=>e9(r,e,i?o=>{let a=r[o][t];return a<e||a===e&&r[o+1][t]===e}:o=>r[o][t]<e),Pe=(r,t,e)=>e9(r,e,i=>r[i][t]>=e);function Ee(r,t,e){let i=0,o=r.length;for(;i<o&&r[i]<t;)i++;for(;o>i&&r[o-1]>e;)o--;return i>0||o<r.length?r.slice(i,o):r}var Pa=["push","pop","shift","splice","unshift"];function Fe(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Pa.forEach(e=>{let i="_onData"+X4(e),o=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let n=o.apply(this,a);return r._chartjs.listeners.forEach(V=>{typeof V[i]=="function"&&V[i](...a)}),n}})})}function d8(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,o=i.indexOf(t);o!==-1&&i.splice(o,1),!(i.length>0)&&(Pa.forEach(a=>{delete r[a]}),delete r._chartjs)}function p8(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var u8=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function m8(r,t){let e=[],i=!1;return function(...o){e=o,i||(i=!0,u8.call(window,()=>{i=!1,r.apply(t,e)}))}}function $e(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var De=r=>r==="start"?"left":r==="end"?"right":"center",h8=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function Re(r,t,e){let i=t.length,o=0,a=i;if(r._sorted){let{iScale:n,vScale:V,_parsed:s}=r,M=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,p=n.axis,{min:h,max:v,minDefined:g,maxDefined:y}=n.getUserBounds();if(g){if(o=Math.min(E0(s,p,h).lo,e?i:E0(t,p,n.getPixelForValue(h)).lo),M){let k=s.slice(0,o+1).reverse().findIndex(O=>!S1(O[V.axis]));o-=Math.max(0,k)}o=k2(o,0,i-1)}if(y){let k=Math.max(E0(s,n.axis,v,!0).hi+1,e?0:E0(t,p,n.getPixelForValue(v),!0).hi+1);if(M){let O=s.slice(k-1).findIndex(E=>!S1(E[V.axis]));k+=Math.max(0,O)}a=k2(k,o,i)-o}else a=i-o}return{start:o,count:a}}function Be(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,o={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=o,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,o),a}var C8=r=>r===0||r===1,ha=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*c2/e)),fa=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*c2/e)+1,G3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*m2)+1,easeOutSine:r=>Math.sin(r*m2),easeInOutSine:r=>-.5*(Math.cos(Q1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>C8(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>C8(r)?r:ha(r,.075,.3),easeOutElastic:r=>C8(r)?r:fa(r,.075,.3),easeInOutElastic(r){return C8(r)?r:r<.5?.5*ha(r*2,.1125,.45):.5+.5*fa(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-G3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?G3.easeInBounce(r*2)*.5:G3.easeOutBounce(r*2-1)*.5+.5};function f8(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function A8(r){return f8(r)?r:new j4(r)}function H8(r){return f8(r)?r:new j4(r).saturate(.5).darken(.1).hexString()}var yd=["x","y","borderWidth","radius","tension"],Zd=["color","borderColor","backgroundColor"];function kd(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:Zd},numbers:{type:"number",properties:yd}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Od(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Aa=new Map;function Td(r,t){t=t||{};let e=r+JSON.stringify(t),i=Aa.get(e);return i||(i=new Intl.NumberFormat(r,t),Aa.set(e,i)),i}function r9(r,t,e){return Td(t,e).format(r)}var Ea={values(r){return e2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,o,a=r;if(e.length>1){let M=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(M<1e-4||M>1e15)&&(o="scientific"),a=Pd(r,e)}let n=c0(Math.abs(a)),V=isNaN(n)?1:Math.max(Math.min(-1*Math.floor(n),20),0),s={notation:o,minimumFractionDigits:V,maximumFractionDigits:V};return Object.assign(s,this.options.ticks.format),r9(r,i,s)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(c0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Ea.numeric.call(this,r,t,e):""}};function Pd(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var i9={formatters:Ea};function Ed(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:i9.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var L3=Object.create(null),v8=Object.create(null);function q4(r,t){if(!t)return r;let e=t.split(".");for(let i=0,o=e.length;i<o;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function _e(r,t,e){return typeof t=="string"?u5(q4(r,t),e):u5(q4(r,""),t)}var we=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>H8(o.backgroundColor),this.hoverBorderColor=(i,o)=>H8(o.borderColor),this.hoverColor=(i,o)=>H8(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return _e(this,t,e)}get(t){return q4(this,t)}describe(t,e){return _e(v8,t,e)}override(t,e){return _e(L3,t,e)}route(t,e,i,o){let a=q4(this,t),n=q4(this,i),V="_"+e;Object.defineProperties(a,{[V]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let s=this[V],M=n[o];return b1(s)?Object.assign({},M,s):P1(s,M)},set(s){this[V]=s}}})}apply(t){t.forEach(e=>e(this))}},H2=new we({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[kd,Od,Ed]);function Fa(r){return!r||S1(r.size)||S1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function U7(r,t,e,i,o){let a=t[o];return a||(a=t[o]=r.measureText(o).width,e.push(o)),a>i&&(i=a),i}function ze(r,t,e,i){i=i||{};let o=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(o=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let n=0,V=e.length,s,M,p,h,v;for(s=0;s<V;s++)if(h=e[s],h!=null&&!e2(h))n=U7(r,o,a,n,h);else if(e2(h))for(M=0,p=h.length;M<p;M++)v=h[M],v!=null&&!e2(v)&&(n=U7(r,o,a,n,v));r.restore();let g=a.length/2;if(g>e.length){for(s=0;s<g;s++)delete o[a[s]];a.splice(0,g)}return n}function F0(r,t,e){let i=r.currentDevicePixelRatio,o=e!==0?Math.max(e/2,.5):0;return Math.round((t-o)*i)/i+o}function x8(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function o9(r,t,e,i){Ie(r,t,e,i,null)}function Ie(r,t,e,i,o){let a,n,V,s,M,p,h,v,g=t.pointStyle,y=t.rotation,k=t.radius,O=(y||0)*Oa;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(O),r.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),r.restore();return}if(!(isNaN(k)||k<=0)){switch(r.beginPath(),g){default:o?r.ellipse(e,i,o/2,k,0,0,c2):r.arc(e,i,k,0,c2),r.closePath();break;case"triangle":p=o?o/2:k,r.moveTo(e+Math.sin(O)*p,i-Math.cos(O)*k),O+=Se,r.lineTo(e+Math.sin(O)*p,i-Math.cos(O)*k),O+=Se,r.lineTo(e+Math.sin(O)*p,i-Math.cos(O)*k),r.closePath();break;case"rectRounded":M=k*.516,s=k-M,n=Math.cos(O+n3)*s,h=Math.cos(O+n3)*(o?o/2-M:s),V=Math.sin(O+n3)*s,v=Math.sin(O+n3)*(o?o/2-M:s),r.arc(e-h,i-V,M,O-Q1,O-m2),r.arc(e+v,i-n,M,O-m2,O),r.arc(e+h,i+V,M,O,O+m2),r.arc(e-v,i+n,M,O+m2,O+Q1),r.closePath();break;case"rect":if(!y){s=Math.SQRT1_2*k,p=o?o/2:s,r.rect(e-p,i-s,2*p,2*s);break}O+=n3;case"rectRot":h=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+v,i-n),r.lineTo(e+h,i+V),r.lineTo(e-v,i+n),r.closePath();break;case"crossRot":O+=n3;case"cross":h=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-n),r.lineTo(e-v,i+n);break;case"star":h=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-n),r.lineTo(e-v,i+n),O+=n3,h=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,V=Math.sin(O)*k,v=Math.sin(O)*(o?o/2:k),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-n),r.lineTo(e-v,i+n);break;case"line":n=o?o/2:Math.cos(O)*k,V=Math.sin(O)*k,r.moveTo(e-n,i-V),r.lineTo(e+n,i+V);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(O)*(o?o/2:k),i+Math.sin(O)*k);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function j5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function C9(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function a9(r){r.restore()}function Ne(r,t,e,i,o){if(!t)return r.lineTo(e.x,e.y);if(o==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else o==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function We(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Fd(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),S1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function $d(r,t,e,i,o){if(o.strikethrough||o.underline){let a=r.measureText(i),n=t-a.actualBoundingBoxLeft,V=t+a.actualBoundingBoxRight,s=e-a.actualBoundingBoxAscent,M=e+a.actualBoundingBoxDescent,p=o.strikethrough?(s+M)/2:M;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=o.decorationWidth||2,r.moveTo(n,p),r.lineTo(V,p),r.stroke()}}function Dd(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function q7(r,t,e,i,o,a={}){let n=e2(t)?t:[t],V=a.strokeWidth>0&&a.strokeColor!=="",s,M;for(r.save(),r.font=o.string,Fd(r,a),s=0;s<n.length;++s)M=n[s],a.backdrop&&Dd(r,a.backdrop),V&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),S1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(M,e,i,a.maxWidth)),r.fillText(M,e,i,a.maxWidth),$d(r,e,i,M,a),i+=Number(o.lineHeight);r.restore()}function Y7(r,t){let{x:e,y:i,w:o,h:a,radius:n}=t;r.arc(e+n.topLeft,i+n.topLeft,n.topLeft,1.5*Q1,Q1,!0),r.lineTo(e,i+a-n.bottomLeft),r.arc(e+n.bottomLeft,i+a-n.bottomLeft,n.bottomLeft,Q1,m2,!0),r.lineTo(e+o-n.bottomRight,i+a),r.arc(e+o-n.bottomRight,i+a-n.bottomRight,n.bottomRight,m2,0,!0),r.lineTo(e+o,i+n.topRight),r.arc(e+o-n.topRight,i+n.topRight,n.topRight,0,-m2,!0),r.lineTo(e+n.topLeft,i)}var Rd=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Bd=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function $a(r,t){let e=(""+r).match(Rd);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var zd=r=>+r||0;function n9(r,t){let e={},i=b1(t),o=i?Object.keys(t):t,a=b1(r)?i?n=>P1(r[n],r[t[n]]):n=>r[n]:()=>r;for(let n of o)e[n]=zd(a(n));return e}function g8(r){return n9(r,{top:"y",right:"x",bottom:"y",left:"x"})}function l3(r){return n9(r,["topLeft","topRight","bottomLeft","bottomRight"])}function W2(r){let t=g8(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function R2(r,t){r=r||{},t=t||H2.font;let e=P1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=P1(r.style,t.style);i&&!(""+i).match(Bd)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let o={family:P1(r.family,t.family),lineHeight:$a(P1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:P1(r.weight,t.weight),string:""};return o.string=Fa(o),o}function t2(r,t,e,i){let o=!0,a,n,V;for(a=0,n=r.length;a<n;++a)if(V=r[a],V!==void 0&&(t!==void 0&&typeof V=="function"&&(V=V(t),o=!1),e!==void 0&&e2(V)&&(V=V[e%V.length],o=!1),V!==void 0))return i&&!o&&(i.cacheable=!1),V}function Ue(r,t,e){let{min:i,max:o}=r,a=ye(t,(o-i)/2),n=(V,s)=>e&&V===0?0:V+s;return{min:n(i,-Math.abs(a)),max:n(o,a)}}function p0(r,t){return Object.assign(Object.create(r),t)}function H9(r,t=[""],e,i,o=()=>r[0]){let a=e||r;typeof i>"u"&&(i=Ba("_fallback",r));let n={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:o,override:V=>H9([V,...r],t,a,i)};return new Proxy(n,{deleteProperty(V,s){return delete V[s],delete V._keys,delete r[0][s],!0},get(V,s){return Da(V,s,()=>Yd(s,t,r,V))},getOwnPropertyDescriptor(V,s){return Reflect.getOwnPropertyDescriptor(V._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(V,s){return xa(V).includes(s)},ownKeys(V){return xa(V)},set(V,s,M){let p=V._storage||(V._storage=o());return V[s]=p[s]=M,delete V._keys,!0}})}function V3(r,t,e,i){let o={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:_8(r,i),setContext:a=>V3(r,a,e,i),override:a=>V3(r.override(a),t,e,i)};return new Proxy(o,{deleteProperty(a,n){return delete a[n],delete r[n],!0},get(a,n,V){return Da(a,n,()=>Nd(a,n,V))},getOwnPropertyDescriptor(a,n){return a._descriptors.allKeys?Reflect.has(r,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,n)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,n){return Reflect.has(r,n)},ownKeys(){return Reflect.ownKeys(r)},set(a,n,V){return r[n]=V,delete a[n],!0}})}function _8(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:o=t.allKeys}=r;return{allKeys:o,scriptable:e,indexable:i,isScriptable:M0(e)?e:()=>e,isIndexable:M0(i)?i:()=>i}}var Id=(r,t)=>r?r+X4(t):t,je=(r,t)=>b1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Da(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function Nd(r,t,e){let{_proxy:i,_context:o,_subProxy:a,_descriptors:n}=r,V=i[t];return M0(V)&&n.isScriptable(t)&&(V=Wd(t,V,r,e)),e2(V)&&V.length&&(V=Ud(t,V,r,n.isIndexable)),je(t,V)&&(V=V3(V,o,a&&a[t],n)),V}function Wd(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_stack:V}=e;if(V.has(r))throw new Error("Recursion detected: "+Array.from(V).join("->")+"->"+r);V.add(r);let s=t(a,n||i);return V.delete(r),je(r,s)&&(s=Ge(o._scopes,o,r,s)),s}function Ud(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_descriptors:V}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(b1(t[0])){let s=t,M=o._scopes.filter(p=>p!==s);t=[];for(let p of s){let h=Ge(M,o,r,p);t.push(V3(h,a,n&&n[r],V))}}return t}function Ra(r,t,e){return M0(r)?r(t,e):r}var jd=(r,t)=>r===!0?t:typeof r=="string"?s3(t,r):void 0;function Gd(r,t,e,i,o){for(let a of t){let n=jd(e,a);if(n){r.add(n);let V=Ra(n._fallback,e,o);if(typeof V<"u"&&V!==e&&V!==i)return V}else if(n===!1&&typeof i<"u"&&e!==i)return null}return!1}function Ge(r,t,e,i){let o=t._rootScopes,a=Ra(t._fallback,e,i),n=[...r,...o],V=new Set;V.add(i);let s=va(V,n,e,a||e,i);return s===null||typeof a<"u"&&a!==e&&(s=va(V,n,a,s,i),s===null)?!1:H9(Array.from(V),[""],o,a,()=>qd(t,e,i))}function va(r,t,e,i,o){for(;e;)e=Gd(r,t,e,i,o);return e}function qd(r,t,e){let i=r._getTarget();t in i||(i[t]={});let o=i[t];return e2(o)&&b1(e)?e:o||{}}function Yd(r,t,e,i){let o;for(let a of t)if(o=Ba(Id(a,r),e),typeof o<"u")return je(r,o)?Ge(e,i,r,o):o}function Ba(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function xa(r){let t=r._keys;return t||(t=r._keys=Qd(r._scopes)),t}function Qd(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(o=>!o.startsWith("_")))t.add(i);return Array.from(t)}var Kd=Number.EPSILON||1e-14,j7=(r,t)=>t<r.length&&!r[t].skip&&r[t],za=r=>r==="x"?"y":"x";function Ia(r,t,e,i){let o=r.skip?t:r,a=t,n=e.skip?t:e,V=K4(a,o),s=K4(n,a),M=V/(V+s),p=s/(V+s);M=isNaN(M)?0:M,p=isNaN(p)?0:p;let h=i*M,v=i*p;return{previous:{x:a.x-h*(n.x-o.x),y:a.y-h*(n.y-o.y)},next:{x:a.x+v*(n.x-o.x),y:a.y+v*(n.y-o.y)}}}function Xd(r,t,e){let i=r.length,o,a,n,V,s,M=j7(r,0);for(let p=0;p<i-1;++p)if(s=M,M=j7(r,p+1),!(!s||!M)){if(K3(t[p],0,Kd)){e[p]=e[p+1]=0;continue}o=e[p]/t[p],a=e[p+1]/t[p],V=Math.pow(o,2)+Math.pow(a,2),!(V<=9)&&(n=3/Math.sqrt(V),e[p]=o*n*t[p],e[p+1]=a*n*t[p])}}function Jd(r,t,e="x"){let i=za(e),o=r.length,a,n,V,s=j7(r,0);for(let M=0;M<o;++M){if(n=V,V=s,s=j7(r,M+1),!V)continue;let p=V[e],h=V[i];n&&(a=(p-n[e])/3,V[`cp1${e}`]=p-a,V[`cp1${i}`]=h-a*t[M]),s&&(a=(s[e]-p)/3,V[`cp2${e}`]=p+a,V[`cp2${i}`]=h+a*t[M])}}function Na(r,t="x"){let e=za(t),i=r.length,o=Array(i).fill(0),a=Array(i),n,V,s,M=j7(r,0);for(n=0;n<i;++n)if(V=s,s=M,M=j7(r,n+1),!!s){if(M){let p=M[t]-s[t];o[n]=p!==0?(M[e]-s[e])/p:0}a[n]=V?M?P5(o[n-1])!==P5(o[n])?0:(o[n-1]+o[n])/2:o[n-1]:o[n]}Xd(r,o,a),Jd(r,a,t)}function a8(r,t,e){return Math.max(Math.min(r,e),t)}function tp(r,t){let e,i,o,a,n,V=j5(r[0],t);for(e=0,i=r.length;e<i;++e)n=a,a=V,V=e<i-1&&j5(r[e+1],t),a&&(o=r[e],n&&(o.cp1x=a8(o.cp1x,t.left,t.right),o.cp1y=a8(o.cp1y,t.top,t.bottom)),V&&(o.cp2x=a8(o.cp2x,t.left,t.right),o.cp2y=a8(o.cp2y,t.top,t.bottom)))}function qe(r,t,e,i,o){let a,n,V,s;if(t.spanGaps&&(r=r.filter(M=>!M.skip)),t.cubicInterpolationMode==="monotone")Na(r,o);else{let M=i?r[r.length-1]:r[0];for(a=0,n=r.length;a<n;++a)V=r[a],s=Ia(M,V,r[Math.min(a+1,n-(i?0:1))%n],t.tension),V.cp1x=s.previous.x,V.cp1y=s.previous.y,V.cp2x=s.next.x,V.cp2y=s.next.y,M=V}t.capBezierPoints&&tp(r,e)}function V9(){return typeof window<"u"&&typeof document<"u"}function s9(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function V8(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var S8=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function Wa(r,t){return S8(r).getPropertyValue(t)}var ep=["top","right","bottom","left"];function q3(r,t,e){let i={};e=e?"-"+e:"";for(let o=0;o<4;o++){let a=ep[o];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var rp=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function ip(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:o,offsetY:a}=i,n=!1,V,s;if(rp(o,a,r.target))V=o,s=a;else{let M=t.getBoundingClientRect();V=i.clientX-M.left,s=i.clientY-M.top,n=!0}return{x:V,y:s,box:n}}function q5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,o=S8(e),a=o.boxSizing==="border-box",n=q3(o,"padding"),V=q3(o,"border","width"),{x:s,y:M,box:p}=ip(r,e),h=n.left+(p&&V.left),v=n.top+(p&&V.top),{width:g,height:y}=t;return a&&(g-=n.width+V.width,y-=n.height+V.height),{x:Math.round((s-h)/g*e.width/i),y:Math.round((M-v)/y*e.height/i)}}function op(r,t,e){let i,o;if(t===void 0||e===void 0){let a=r&&s9(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let n=a.getBoundingClientRect(),V=S8(a),s=q3(V,"border","width"),M=q3(V,"padding");t=n.width-M.width-s.width,e=n.height-M.height-s.height,i=V8(V.maxWidth,a,"clientWidth"),o=V8(V.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||Q4,maxHeight:o||Q4}}var H3=r=>Math.round(r*10)/10;function Ye(r,t,e,i){let o=S8(r),a=q3(o,"margin"),n=V8(o.maxWidth,r,"clientWidth")||Q4,V=V8(o.maxHeight,r,"clientHeight")||Q4,s=op(r,t,e),{width:M,height:p}=s;if(o.boxSizing==="content-box"){let v=q3(o,"border","width"),g=q3(o,"padding");M-=g.width+v.width,p-=g.height+v.height}return M=Math.max(0,M-a.width),p=Math.max(0,i?M/i:p-a.height),M=H3(Math.min(M,n,s.maxWidth)),p=H3(Math.min(p,V,s.maxHeight)),M&&!p&&(p=H3(M/2)),(t!==void 0||e!==void 0)&&i&&s.height&&p>s.height&&(p=s.height,M=H3(Math.floor(p*i))),{width:M,height:p}}function w8(r,t,e){let i=t||1,o=H3(r.height*i),a=H3(r.width*i);r.height=H3(r.height),r.width=H3(r.width);let n=r.canvas;return n.style&&(e||!n.style.height&&!n.style.width)&&(n.style.height=`${r.height}px`,n.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||n.height!==o||n.width!==a?(r.currentDevicePixelRatio=i,n.height=o,n.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var Qe=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};V9()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function b8(r,t){let e=Wa(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function P0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function Ke(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function Xe(r,t,e,i){let o={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},n=P0(r,o,e),V=P0(o,a,e),s=P0(a,t,e),M=P0(n,V,e),p=P0(V,s,e);return P0(M,p,e)}var Cp=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},ap=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function L9(r,t,e){return r?Cp(t,e):ap()}function Je(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function tr(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function Ua(r){return r==="angle"?{between:t9,compare:Ta,normalize:Z2}:{between:J3,compare:(t,e)=>t-e,normalize:t=>t}}function ga({start:r,end:t,count:e,loop:i,style:o}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:o}}function np(r,t,e){let{property:i,start:o,end:a}=e,{between:n,normalize:V}=Ua(i),s=t.length,{start:M,end:p,loop:h}=r,v,g;if(h){for(M+=s,p+=s,v=0,g=s;v<g&&n(V(t[M%s][i]),o,a);++v)M--,p--;M%=s,p%=s}return p<M&&(p+=s),{start:M,end:p,loop:h,style:r.style}}function y8(r,t,e){if(!e)return[r];let{property:i,start:o,end:a}=e,n=t.length,{compare:V,between:s,normalize:M}=Ua(i),{start:p,end:h,loop:v,style:g}=np(r,t,e),y=[],k=!1,O=null,E,R,B,K=()=>s(o,B,E)&&V(o,B)!==0,G=()=>V(a,E)===0||s(a,B,E),c1=()=>k||K(),J=()=>!k||G();for(let C1=p,i1=p;C1<=h;++C1)R=t[C1%n],!R.skip&&(E=M(R[i]),E!==B&&(k=s(E,o,a),O===null&&c1()&&(O=V(E,o)===0?C1:i1),O!==null&&J()&&(y.push(ga({start:O,end:C1,loop:v,count:n,style:g})),O=null),i1=C1,B=E));return O!==null&&y.push(ga({start:O,end:h,loop:v,count:n,style:g})),y}function Z8(r,t){let e=[],i=r.segments;for(let o=0;o<i.length;o++){let a=y8(i[o],r.points,t);a.length&&e.push(...a)}return e}function Hp(r,t,e,i){let o=0,a=t-1;if(e&&!i)for(;o<t&&!r[o].skip;)o++;for(;o<t&&r[o].skip;)o++;for(o%=t,e&&(a+=o);a>o&&r[a%t].skip;)a--;return a%=t,{start:o,end:a}}function Vp(r,t,e,i){let o=r.length,a=[],n=t,V=r[t],s;for(s=t+1;s<=e;++s){let M=r[s%o];M.skip||M.stop?V.skip||(i=!1,a.push({start:t%o,end:(s-1)%o,loop:i}),t=n=M.stop?s:null):(n=s,V.skip&&(t=s)),V=M}return n!==null&&a.push({start:t%o,end:n%o,loop:i}),a}function er(r,t){let e=r.points,i=r.options.spanGaps,o=e.length;if(!o)return[];let a=!!r._loop,{start:n,end:V}=Hp(e,o,a,i);if(i===!0)return _a(r,[{start:n,end:V,loop:a}],e,t);let s=V<n?V+o:V,M=!!r._fullLoop&&n===0&&V===o-1;return _a(r,Vp(e,n,s,M),e,t)}function _a(r,t,e,i){return!i||!i.setContext||!e?t:sp(r,t,e,i)}function sp(r,t,e,i){let o=r._chart.getContext(),a=Sa(r.options),{_datasetIndex:n,options:{spanGaps:V}}=r,s=e.length,M=[],p=a,h=t[0].start,v=h;function g(y,k,O,E){let R=V?-1:1;if(y!==k){for(y+=s;e[y%s].skip;)y-=R;for(;e[k%s].skip;)k+=R;y%s!==k%s&&(M.push({start:y%s,end:k%s,loop:O,style:E}),p=E,h=k%s)}}for(let y of t){h=V?h:y.start;let k=e[h%s],O;for(v=h+1;v<=y.end;v++){let E=e[v%s];O=Sa(i.setContext(p0(o,{type:"segment",p0:k,p1:E,p0DataIndex:(v-1)%s,p1DataIndex:v%s,datasetIndex:n}))),Lp(O,p)&&g(h,v-1,y.loop,p),k=E,p=O}h<v-1&&g(h,v-1,y.loop,p)}return M}function Sa(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function Lp(r,t){if(!t)return!1;let e=[],i=function(o,a){return f8(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function n8(r,t,e){return r.options.clip?r[e]:t[e]}function lp(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:n8(e,t,"left"),right:n8(e,t,"right"),top:n8(i,t,"top"),bottom:n8(i,t,"bottom")}:t}function k8(r,t){let e=t._clip;if(e.disabled)return!1;let i=lp(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var Mr=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){let a=e.listeners[o],n=e.duration;a.forEach(V=>V({chart:t,initial:e.initial,numSteps:n,currentStep:Math.min(i-e.start,n)}))}_refresh(){this._request||(this._running=!0,this._request=u8.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;let a=i.items,n=a.length-1,V=!1,s;for(;n>=0;--n)s=a[n],s._active?(s._total>i.duration&&(i.duration=s._total),s.tick(t),V=!0):(a[n]=a[a.length-1],a.pop());V&&(o.draw(),this._notify(o,i,t,"progress")),a.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},$0=new Mr,ja="transparent",pp={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=A8(r||ja),o=i.valid&&A8(t||ja);return o&&o.valid?o.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},cr=class{constructor(t,e,i,o){let a=e[i];o=t2([t.to,o,a,t.from]);let n=t2([t.from,a,o]);this._active=!0,this._fn=t.fn||pp[t.type||typeof n],this._easing=G3[t.easing]||G3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=n,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let o=this._target[this._prop],a=i-this._start,n=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(n,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=t2([t.to,e,o,t.from]),this._from=t2([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,o=this._prop,a=this._from,n=this._loop,V=this._to,s;if(this._active=a!==V&&(n||e<i),!this._active){this._target[o]=V,this._notify(!0);return}if(e<0){this._target[o]=a;return}s=e/i%2,s=n&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[o]=this._fn(a,V,s)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][e]()}},I8=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!b1(t))return;let e=Object.keys(H2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{let a=t[o];if(!b1(a))return;let n={};for(let V of e)n[V]=a[V];(e2(a.properties)&&a.properties||[o]).forEach(V=>{(V===o||!i.has(V))&&i.set(V,n)})})}_animateOptions(t,e){let i=e.options,o=mp(t,i);if(!o)return[];let a=this._createAnimations(o,i);return i.$shared&&up(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,o=[],a=t.$animations||(t.$animations={}),n=Object.keys(e),V=Date.now(),s;for(s=n.length-1;s>=0;--s){let M=n[s];if(M.charAt(0)==="$")continue;if(M==="options"){o.push(...this._animateOptions(t,e));continue}let p=e[M],h=a[M],v=i.get(M);if(h)if(v&&h.active()){h.update(v,p,V);continue}else h.cancel();if(!v||!v.duration){t[M]=p;continue}a[M]=h=new cr(v,t,M,p),o.push(h)}return o}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return $0.add(this._chart,i),!0}};function up(r,t){let e=[],i=Object.keys(t);for(let o=0;o<i.length;o++){let a=r[i[o]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function mp(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Ga(r,t){let e=r&&r.options||{},i=e.reverse,o=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:o,end:i?o:a}}function hp(r,t,e){if(e===!1)return!1;let i=Ga(r,e),o=Ga(t,e);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function fp(r){let t,e,i,o;return b1(r)?(t=r.top,e=r.right,i=r.bottom,o=r.left):t=e=i=o=r,{top:t,right:e,bottom:i,left:o,disabled:r===!1}}function In(r,t){let e=[],i=r._getSortedDatasetMetas(t),o,a;for(o=0,a=i.length;o<a;++o)e.push(i[o].index);return e}function qa(r,t,e,i={}){let o=r.keys,a=i.mode==="single",n,V,s,M;if(t===null)return;let p=!1;for(n=0,V=o.length;n<V;++n){if(s=+o[n],s===e){if(p=!0,i.all)continue;break}M=r.values[s],n2(M)&&(a||t===0||P5(t)===P5(M))&&(t+=M)}return!p&&!i.all?0:t}function Ap(r,t){let{iScale:e,vScale:i}=t,o=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",n=Object.keys(r),V=new Array(n.length),s,M,p;for(s=0,M=n.length;s<M;++s)p=n[s],V[s]={[o]:p,[a]:r[p]};return V}function rr(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function vp(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function xp(r){let{min:t,max:e,minDefined:i,maxDefined:o}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:o?e:Number.POSITIVE_INFINITY}}function gp(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function Ya(r,t,e,i){for(let o of t.getMatchingVisibleMetas(i).reverse()){let a=r[o.index];if(e&&a>0||!e&&a<0)return o.index}return null}function Qa(r,t){let{chart:e,_cachedMeta:i}=r,o=e._stacks||(e._stacks={}),{iScale:a,vScale:n,index:V}=i,s=a.axis,M=n.axis,p=vp(a,n,i),h=t.length,v;for(let g=0;g<h;++g){let y=t[g],{[s]:k,[M]:O}=y,E=y._stacks||(y._stacks={});v=E[M]=gp(o,p,k),v[V]=O,v._top=Ya(v,n,!0,i.type),v._bottom=Ya(v,n,!1,i.type);let R=v._visualValues||(v._visualValues={});R[V]=O}}function ir(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function _p(r,t){return p0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Sp(r,t,e){return p0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function l9(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let o of t){let a=o._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var or=r=>r==="reset"||r==="none",Ka=(r,t)=>t?r:Object.assign({},r),wp=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:In(e,!0),values:null},c3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=rr(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&l9(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(h,v,g,y)=>h==="x"?v:h==="r"?y:g,a=e.xAxisID=P1(i.xAxisID,ir(t,"x")),n=e.yAxisID=P1(i.yAxisID,ir(t,"y")),V=e.rAxisID=P1(i.rAxisID,ir(t,"r")),s=e.indexAxis,M=e.iAxisID=o(s,a,n,V),p=e.vAxisID=o(s,n,a,V);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(n),e.rScale=this.getScaleForId(V),e.iScale=this.getScaleForId(M),e.vScale=this.getScaleForId(p)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&d8(this._data,this),t._stacked&&l9(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(b1(e)){let o=this._cachedMeta;this._data=Ap(e,o)}else if(i!==e){if(i){d8(i,this);let o=this._cachedMeta;l9(o),o._parsed=[]}e&&Object.isExtensible(e)&&Fe(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),o=!1;this._dataCheck();let a=e._stacked;e._stacked=rr(e.vScale,e),e.stack!==i.stack&&(o=!0,l9(e),e.stack=i.stack),this._resyncElements(t),(o||a!==e._stacked)&&(Qa(this,e._parsed),e._stacked=rr(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:n}=i,V=a.axis,s=t===0&&e===o.length?!0:i._sorted,M=t>0&&i._parsed[t-1],p,h,v;if(this._parsing===!1)i._parsed=o,i._sorted=!0,v=o;else{e2(o[t])?v=this.parseArrayData(i,o,t,e):b1(o[t])?v=this.parseObjectData(i,o,t,e):v=this.parsePrimitiveData(i,o,t,e);let g=()=>h[V]===null||M&&h[V]<M[V];for(p=0;p<e;++p)i._parsed[p+t]=h=v[p],s&&(g()&&(s=!1),M=h);i._sorted=s}n&&Qa(this,v)}parsePrimitiveData(t,e,i,o){let{iScale:a,vScale:n}=t,V=a.axis,s=n.axis,M=a.getLabels(),p=a===n,h=new Array(o),v,g,y;for(v=0,g=o;v<g;++v)y=v+i,h[v]={[V]:p||a.parse(M[y],y),[s]:n.parse(e[y],y)};return h}parseArrayData(t,e,i,o){let{xScale:a,yScale:n}=t,V=new Array(o),s,M,p,h;for(s=0,M=o;s<M;++s)p=s+i,h=e[p],V[s]={x:a.parse(h[0],p),y:n.parse(h[1],p)};return V}parseObjectData(t,e,i,o){let{xScale:a,yScale:n}=t,{xAxisKey:V="x",yAxisKey:s="y"}=this._parsing,M=new Array(o),p,h,v,g;for(p=0,h=o;p<h;++p)v=p+i,g=e[v],M[p]={x:a.parse(s3(g,V),v),y:n.parse(s3(g,s),v)};return M}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let o=this.chart,a=this._cachedMeta,n=e[t.axis],V={keys:In(o,!0),values:e._stacks[t.axis]._visualValues};return qa(V,n,a.index,{mode:i})}updateRangeFromParsed(t,e,i,o){let a=i[e.axis],n=a===null?NaN:a,V=o&&i._stacks[e.axis];o&&V&&(o.values=V,n=qa(o,a,this._cachedMeta.index)),t.min=Math.min(t.min,n),t.max=Math.max(t.max,n)}getMinMax(t,e){let i=this._cachedMeta,o=i._parsed,a=i._sorted&&t===i.iScale,n=o.length,V=this._getOtherScale(t),s=wp(e,i,this.chart),M={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:p,max:h}=xp(V),v,g;function y(){g=o[v];let k=g[V.axis];return!n2(g[t.axis])||p>k||h<k}for(v=0;v<n&&!(!y()&&(this.updateRangeFromParsed(M,t,g,s),a));++v);if(a){for(v=n-1;v>=0;--v)if(!y()){this.updateRangeFromParsed(M,t,g,s);break}}return M}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],o,a,n;for(o=0,a=e.length;o<a;++o)n=e[o][t.axis],n2(n)&&i.push(n);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,o=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=fp(P1(this.options.clip,hp(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],a=e.chartArea,n=[],V=this._drawStart||0,s=this._drawCount||o.length-V,M=this.options.drawActiveElementsOnTop,p;for(i.dataset&&i.dataset.draw(t,a,V,s),p=V;p<V+s;++p){let h=o[p];h.hidden||(h.active&&M?n.push(h):h.draw(t,a))}for(p=0;p<n.length;++p)n[p].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let o=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let n=this._cachedMeta.data[t];a=n.$context||(n.$context=Sp(this.getContext(),t,n)),a.parsed=this.getParsed(t),a.raw=o.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=_p(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let o=e==="active",a=this._cachedDataOpts,n=t+"-"+e,V=a[n],s=this.enableOptionSharing&&Q3(i);if(V)return Ka(V,s);let M=this.chart.config,p=M.datasetElementScopeKeys(this._type,t),h=o?[`${t}Hover`,"hover",t,""]:[t,""],v=M.getOptionScopes(this.getDataset(),p),g=Object.keys(H2.elements[t]),y=()=>this.getContext(i,o,e),k=M.resolveNamedOptions(v,g,y,h);return k.$shared&&(k.$shared=s,a[n]=Object.freeze(Ka(k,s))),k}_resolveAnimations(t,e,i){let o=this.chart,a=this._cachedDataOpts,n=`animation-${e}`,V=a[n];if(V)return V;let s;if(o.options.animation!==!1){let p=this.chart.config,h=p.datasetAnimationScopeKeys(this._type,e),v=p.getOptionScopes(this.getDataset(),h);s=p.createResolver(v,this.getContext(t,i,e))}let M=new I8(o,s&&s.animations);return s&&s._cacheable&&(a[n]=Object.freeze(M)),M}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||or(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),o=this._sharedOptions,a=this.getSharedOptions(i),n=this.includeOptions(e,a)||a!==o;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:n}}updateElement(t,e,i,o){or(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!or(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;let a=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[V,s,M]of this._syncList)this[V](s,M);this._syncList=[];let o=i.length,a=e.length,n=Math.min(a,o);n&&this.parse(0,n),a>o?this._insertElements(o,a-o,t):a<o&&this._removeElements(a,o-a)}_insertElements(t,e,i=!0){let o=this._cachedMeta,a=o.data,n=t+e,V,s=M=>{for(M.length+=e,V=M.length-1;V>=n;V--)M[V]=M[V-e]};for(s(a),V=t;V<n;++V)a[V]=new this.dataElementType;this._parsing&&s(o._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let o=i._parsed.splice(t,e);i._stacked&&l9(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};z(c3,"defaults",{}),z(c3,"datasetElementType",null),z(c3,"dataElementType",null);function bp(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let o=0,a=e.length;o<a;o++)i=i.concat(e[o].controller.getAllParsedValues(r));r._cache.$bar=p8(i.sort((o,a)=>o-a))}return r._cache.$bar}function yp(r){let t=r.iScale,e=bp(t,r.type),i=t._length,o,a,n,V,s=()=>{n===32767||n===-32768||(Q3(V)&&(i=Math.min(i,Math.abs(n-V)||i)),V=n)};for(o=0,a=e.length;o<a;++o)n=t.getPixelForValue(e[o]),s();for(V=void 0,o=0,a=t.ticks.length;o<a;++o)n=t.getPixelForTick(o),s();return i}function Zp(r,t,e,i){let o=e.barThickness,a,n;return S1(o)?(a=t.min*e.categoryPercentage,n=e.barPercentage):(a=o*i,n=1),{chunk:a/i,ratio:n,start:t.pixels[r]-a/2}}function kp(r,t,e,i){let o=t.pixels,a=o[r],n=r>0?o[r-1]:null,V=r<o.length-1?o[r+1]:null,s=e.categoryPercentage;n===null&&(n=a-(V===null?t.end-t.start:V-a)),V===null&&(V=a+a-n);let M=a-(a-Math.min(n,V))/2*s;return{chunk:Math.abs(V-n)/2*s/i,ratio:e.barPercentage,start:M}}function Op(r,t,e,i){let o=e.parse(r[0],i),a=e.parse(r[1],i),n=Math.min(o,a),V=Math.max(o,a),s=n,M=V;Math.abs(n)>Math.abs(V)&&(s=V,M=n),t[e.axis]=M,t._custom={barStart:s,barEnd:M,start:o,end:a,min:n,max:V}}function Nn(r,t,e,i){return e2(r)?Op(r,t,e,i):t[e.axis]=e.parse(r,i),t}function Xa(r,t,e,i){let o=r.iScale,a=r.vScale,n=o.getLabels(),V=o===a,s=[],M,p,h,v;for(M=e,p=e+i;M<p;++M)v=t[M],h={},h[o.axis]=V||o.parse(n[M],M),s.push(Nn(v,h,a,M));return s}function Cr(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function Tp(r,t,e){return r!==0?P5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Pp(r){let t,e,i,o,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(o="end",a="start"):(o="start",a="end"),{start:e,end:i,reverse:t,top:o,bottom:a}}function Ep(r,t,e,i){let o=t.borderSkipped,a={};if(!o){r.borderSkipped=a;return}if(o===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:n,end:V,reverse:s,top:M,bottom:p}=Pp(r);o==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?o=M:(e._bottom||0)===i?o=p:(a[Ja(p,n,V,s)]=!0,o=M)),a[Ja(o,n,V,s)]=!0,r.borderSkipped=a}function Ja(r,t,e,i){return i?(r=Fp(r,t,e),r=tn(r,e,t)):r=tn(r,t,e),r}function Fp(r,t,e){return r===t?e:r===e?t:r}function tn(r,t,e){return r==="start"?t:r==="end"?e:r}function $p(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var R0=class extends c3{parsePrimitiveData(t,e,i,o){return Xa(t,e,i,o)}parseArrayData(t,e,i,o){return Xa(t,e,i,o)}parseObjectData(t,e,i,o){let{iScale:a,vScale:n}=t,{xAxisKey:V="x",yAxisKey:s="y"}=this._parsing,M=a.axis==="x"?V:s,p=n.axis==="x"?V:s,h=[],v,g,y,k;for(v=i,g=i+o;v<g;++v)k=e[v],y={},y[a.axis]=a.parse(s3(k,M),v),h.push(Nn(s3(k,p),y,n,v));return h}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:o}=e,a=this.getParsed(t),n=a._custom,V=Cr(n)?"["+n.start+", "+n.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:V}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){let a=o==="reset",{index:n,_cachedMeta:{vScale:V}}=this,s=V.getBasePixel(),M=V.isHorizontal(),p=this._getRuler(),{sharedOptions:h,includeOptions:v}=this._getSharedOptions(e,o);for(let g=e;g<e+i;g++){let y=this.getParsed(g),k=a||S1(y[V.axis])?{base:s,head:s}:this._calculateBarValuePixels(g),O=this._calculateBarIndexPixels(g,p),E=(y._stacks||{})[V.axis],R={horizontal:M,base:k.base,enableBorderRadius:!E||Cr(y._custom)||n===E._top||n===E._bottom,x:M?k.head:O.center,y:M?O.center:k.head,height:M?O.size:Math.abs(k.size),width:M?Math.abs(k.size):O.size};v&&(R.options=h||this.resolveDataElementOptions(g,t[g].active?"active":o));let B=R.options||t[g].options;Ep(R,B,E,n),$p(R,B,p.ratio),this.updateElement(t[g],g,R,o)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(p=>p.controller.options.grouped),a=i.options.stacked,n=[],V=this._cachedMeta.controller.getParsed(e),s=V&&V[i.axis],M=p=>{let h=p._parsed.find(g=>g[i.axis]===s),v=h&&h[p.vScale.axis];if(S1(v)||isNaN(v))return!0};for(let p of o)if(!(e!==void 0&&M(p))&&((a===!1||n.indexOf(p.stack)===-1||a===void 0&&p.stack===void 0)&&n.push(p.stack),p.index===t))break;return n.length||n.push(void 0),n}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[P1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let o=this._getStacks(t,i),a=e!==void 0?o.indexOf(e):-1;return a===-1?o.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,o=[],a,n;for(a=0,n=e.data.length;a<n;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let V=t.barThickness;return{min:V||yp(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:V?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:o},options:{base:a,minBarLength:n}}=this,V=a||0,s=this.getParsed(t),M=s._custom,p=Cr(M),h=s[e.axis],v=0,g=i?this.applyStack(e,s,i):h,y,k;g!==h&&(v=g-h,g=h),p&&(h=M.barStart,g=M.barEnd-M.barStart,h!==0&&P5(h)!==P5(M.barEnd)&&(v=0),v+=h);let O=!S1(a)&&!p?a:v,E=e.getPixelForValue(O);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(v+g):y=E,k=y-E,Math.abs(k)<n){k=Tp(k,e,V)*n,h===V&&(E-=k/2);let R=e.getPixelForDecimal(0),B=e.getPixelForDecimal(1),K=Math.min(R,B),G=Math.max(R,B);E=Math.max(Math.min(E,G),K),y=E+k,i&&!p&&(s._stacks[e.axis]._visualValues[o]=e.getValueForPixel(y)-e.getValueForPixel(E))}if(E===e.getPixelForValue(V)){let R=P5(k)*e.getLineWidthForValue(V)/2;E+=R,k-=R}return{size:k,base:E,head:y,center:y+k/2}}_calculateBarIndexPixels(t,e){let i=e.scale,o=this.options,a=o.skipNull,n=P1(o.maxBarThickness,1/0),V,s,M=this._getAxisCount();if(e.grouped){let p=a?this._getStackCount(t):e.stackCount,h=o.barThickness==="flex"?kp(t,e,o,p*M):Zp(t,e,o,p*M),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(P1(v,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;V=h.start+h.chunk*y+h.chunk/2,s=Math.min(n,h.chunk*h.ratio)}else V=i.getPixelForValue(this.getParsed(t)[i.axis],t),s=Math.min(n,e.min*e.ratio);return{base:V-s/2,head:V+s/2,center:V,size:s}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length,a=0;for(;a<o;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};z(R0,"id","bar"),z(R0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(R0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var B0=class extends c3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=e,n=this.chart._animationsDisabled,{start:V,count:s}=Re(e,o,n);this._drawStart=V,this._drawCount=s,Be(e)&&(V=0,s=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;let M=this.resolveDatasetElementOptions(t);this.options.showLine||(M.borderWidth=0),M.segment=this.options.segment,this.updateElement(i,void 0,{animated:!n,options:M},t),this.updateElements(o,V,s,t)}updateElements(t,e,i,o){let a=o==="reset",{iScale:n,vScale:V,_stacked:s,_dataset:M}=this._cachedMeta,{sharedOptions:p,includeOptions:h}=this._getSharedOptions(e,o),v=n.axis,g=V.axis,{spanGaps:y,segment:k}=this.options,O=X3(y)?y:Number.POSITIVE_INFINITY,E=this.chart._animationsDisabled||a||o==="none",R=e+i,B=t.length,K=e>0&&this.getParsed(e-1);for(let G=0;G<B;++G){let c1=t[G],J=E?c1:{};if(G<e||G>=R){J.skip=!0;continue}let C1=this.getParsed(G),i1=S1(C1[g]),m1=J[v]=n.getPixelForValue(C1[v],G),I1=J[g]=a||i1?V.getBasePixel():V.getPixelForValue(s?this.applyStack(V,C1,s):C1[g],G);J.skip=isNaN(m1)||isNaN(I1)||i1,J.stop=G>0&&Math.abs(C1[v]-K[v])>O,k&&(J.parsed=C1,J.raw=M.data[G]),h&&(J.options=p||this.resolveDataElementOptions(G,c1.active?"active":o)),E||this.updateElement(c1,G,J,o),K=C1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;let a=o[0].size(this.resolveDataElementOptions(0)),n=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,n)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};z(B0,"id","line"),z(B0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(B0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function t7(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var dr=class r{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return t7()}parse(){return t7()}format(){return t7()}add(){return t7()}diff(){return t7()}startOf(){return t7()}endOf(){return t7()}},Dp={_date:dr};function Rp(r,t,e,i){let{controller:o,data:a,_sorted:n}=r,V=o._cachedMeta.iScale,s=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(V&&t===V.axis&&t!=="r"&&n&&a.length){let M=V._reversePixels?Pe:E0;if(i){if(o._sharedOptions){let p=a[0],h=typeof p.getRange=="function"&&p.getRange(t);if(h){let v=M(a,t,e-h),g=M(a,t,e+h);return{lo:v.lo,hi:g.hi}}}}else{let p=M(a,t,e);if(s){let{vScale:h}=o._cachedMeta,{_parsed:v}=r,g=v.slice(0,p.lo+1).reverse().findIndex(k=>!S1(k[h.axis]));p.lo-=Math.max(0,g);let y=v.slice(p.hi).findIndex(k=>!S1(k[h.axis]));p.hi+=Math.max(0,y)}return p}}return{lo:0,hi:a.length-1}}function v9(r,t,e,i,o){let a=r.getSortedVisibleDatasetMetas(),n=e[t];for(let V=0,s=a.length;V<s;++V){let{index:M,data:p}=a[V],{lo:h,hi:v}=Rp(a[V],t,n,o);for(let g=h;g<=v;++g){let y=p[g];y.skip||i(y,M,g)}}}function Bp(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,o){let a=t?Math.abs(i.x-o.x):0,n=e?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(n,2))}}function ar(r,t,e,i,o){let a=[];return!o&&!r.isPointInArea(t)||v9(r,e,t,function(V,s,M){!o&&!j5(V,r.chartArea,0)||V.inRange(t.x,t.y,i)&&a.push({element:V,datasetIndex:s,index:M})},!0),a}function zp(r,t,e,i){let o=[];function a(n,V,s){let{startAngle:M,endAngle:p}=n.getProps(["startAngle","endAngle"],i),{angle:h}=c8(n,{x:t.x,y:t.y});t9(h,M,p)&&o.push({element:n,datasetIndex:V,index:s})}return v9(r,e,t,a),o}function Ip(r,t,e,i,o,a){let n=[],V=Bp(e),s=Number.POSITIVE_INFINITY;function M(p,h,v){let g=p.inRange(t.x,t.y,o);if(i&&!g)return;let y=p.getCenterPoint(o);if(!(!!a||r.isPointInArea(y))&&!g)return;let O=V(t,y);O<s?(n=[{element:p,datasetIndex:h,index:v}],s=O):O===s&&n.push({element:p,datasetIndex:h,index:v})}return v9(r,e,t,M),n}function nr(r,t,e,i,o,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?zp(r,t,e,o):Ip(r,t,e,i,o,a)}function en(r,t,e,i,o){let a=[],n=e==="x"?"inXRange":"inYRange",V=!1;return v9(r,e,t,(s,M,p)=>{s[n]&&s[n](t[e],o)&&(a.push({element:s,datasetIndex:M,index:p}),V=V||s.inRange(t.x,t.y,o))}),i&&!V?[]:a}var Np={evaluateInteractionItems:v9,modes:{index(r,t,e,i){let o=q5(t,r),a=e.axis||"x",n=e.includeInvisible||!1,V=e.intersect?ar(r,o,a,i,n):nr(r,o,a,!1,i,n),s=[];return V.length?(r.getSortedVisibleDatasetMetas().forEach(M=>{let p=V[0].index,h=M.data[p];h&&!h.skip&&s.push({element:h,datasetIndex:M.index,index:p})}),s):[]},dataset(r,t,e,i){let o=q5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1,V=e.intersect?ar(r,o,a,i,n):nr(r,o,a,!1,i,n);if(V.length>0){let s=V[0].datasetIndex,M=r.getDatasetMeta(s).data;V=[];for(let p=0;p<M.length;++p)V.push({element:M[p],datasetIndex:s,index:p})}return V},point(r,t,e,i){let o=q5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return ar(r,o,a,i,n)},nearest(r,t,e,i){let o=q5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return nr(r,o,a,e.intersect,i,n)},x(r,t,e,i){let o=q5(t,r);return en(r,o,"x",e.intersect,i)},y(r,t,e,i){let o=q5(t,r);return en(r,o,"y",e.intersect,i)}}},Wn=["left","top","right","bottom"];function M9(r,t){return r.filter(e=>e.pos===t)}function rn(r,t){return r.filter(e=>Wn.indexOf(e.pos)===-1&&e.box.axis===t)}function c9(r,t){return r.sort((e,i)=>{let o=t?i:e,a=t?e:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function Wp(r){let t=[],e,i,o,a,n,V;for(e=0,i=(r||[]).length;e<i;++e)o=r[e],{position:a,options:{stack:n,stackWeight:V=1}}=o,t.push({index:e,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:n&&a+n,stackWeight:V});return t}function Up(r){let t={};for(let e of r){let{stack:i,pos:o,stackWeight:a}=e;if(!i||!Wn.includes(o))continue;let n=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});n.count++,n.weight+=a}return t}function jp(r,t){let e=Up(r),{vBoxMaxWidth:i,hBoxMaxHeight:o}=t,a,n,V;for(a=0,n=r.length;a<n;++a){V=r[a];let{fullSize:s}=V.box,M=e[V.stack],p=M&&V.stackWeight/M.weight;V.horizontal?(V.width=p?p*i:s&&t.availableWidth,V.height=o):(V.width=i,V.height=p?p*o:s&&t.availableHeight)}return e}function Gp(r){let t=Wp(r),e=c9(t.filter(M=>M.box.fullSize),!0),i=c9(M9(t,"left"),!0),o=c9(M9(t,"right")),a=c9(M9(t,"top"),!0),n=c9(M9(t,"bottom")),V=rn(t,"x"),s=rn(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:o.concat(s).concat(n).concat(V),chartArea:M9(t,"chartArea"),vertical:i.concat(o).concat(s),horizontal:a.concat(n).concat(V)}}function on(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function Un(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function qp(r,t,e,i){let{pos:o,box:a}=e,n=r.maxPadding;if(!b1(o)){e.size&&(r[o]-=e.size);let h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?a.height:a.width),e.size=h.size/h.count,r[o]+=e.size}a.getPadding&&Un(n,a.getPadding());let V=Math.max(0,t.outerWidth-on(n,r,"left","right")),s=Math.max(0,t.outerHeight-on(n,r,"top","bottom")),M=V!==r.w,p=s!==r.h;return r.w=V,r.h=s,e.horizontal?{same:M,other:p}:{same:p,other:M}}function Yp(r){let t=r.maxPadding;function e(i){let o=Math.max(t[i]-r[i],0);return r[i]+=o,o}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function Qp(r,t){let e=t.maxPadding;function i(o){let a={left:0,top:0,right:0,bottom:0};return o.forEach(n=>{a[n]=Math.max(t[n],e[n])}),a}return i(r?["left","right"]:["top","bottom"])}function u9(r,t,e,i){let o=[],a,n,V,s,M,p;for(a=0,n=r.length,M=0;a<n;++a){V=r[a],s=V.box,s.update(V.width||t.w,V.height||t.h,Qp(V.horizontal,t));let{same:h,other:v}=qp(t,e,V,i);M|=h&&o.length,p=p||v,s.fullSize||o.push(V)}return M&&u9(o,t,e,i)||p}function O8(r,t,e,i,o){r.top=e,r.left=t,r.right=t+i,r.bottom=e+o,r.width=i,r.height=o}function Cn(r,t,e,i){let o=e.padding,{x:a,y:n}=t;for(let V of r){let s=V.box,M=i[V.stack]||{count:1,placed:0,weight:1},p=V.stackWeight/M.weight||1;if(V.horizontal){let h=t.w*p,v=M.size||s.height;Q3(M.start)&&(n=M.start),s.fullSize?O8(s,o.left,n,e.outerWidth-o.right-o.left,v):O8(s,t.left+M.placed,n,h,v),M.start=n,M.placed+=h,n=s.bottom}else{let h=t.h*p,v=M.size||s.width;Q3(M.start)&&(a=M.start),s.fullSize?O8(s,a,o.top,v,e.outerHeight-o.bottom-o.top):O8(s,a,t.top+M.placed,v,h),M.start=a,M.placed+=h,a=s.right}}t.x=a,t.y=n}var T8={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let o=W2(r.options.layout.padding),a=Math.max(t-o.width,0),n=Math.max(e-o.height,0),V=Gp(r.boxes),s=V.vertical,M=V.horizontal;z1(r.boxes,k=>{typeof k.beforeLayout=="function"&&k.beforeLayout()});let p=s.reduce((k,O)=>O.box.options&&O.box.options.display===!1?k:k+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:o,availableWidth:a,availableHeight:n,vBoxMaxWidth:a/2/p,hBoxMaxHeight:n/2}),v=Object.assign({},o);Un(v,W2(i));let g=Object.assign({maxPadding:v,w:a,h:n,x:o.left,y:o.top},o),y=jp(s.concat(M),h);u9(V.fullSize,g,h,y),u9(s,g,h,y),u9(M,g,h,y)&&u9(s,g,h,y),Yp(g),Cn(V.leftAndTop,g,h,y),g.x+=g.w,g.y+=g.h,Cn(V.rightAndBottom,g,h,y),r.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},z1(V.chartArea,k=>{let O=k.box;Object.assign(O,r.chartArea),O.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}},N8=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}},pr=class extends N8{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},B8="$chartjs",Kp={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},an=r=>r===null||r==="";function Xp(r,t){let e=r.style,i=r.getAttribute("height"),o=r.getAttribute("width");if(r[B8]={initial:{height:i,width:o,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",an(o)){let a=b8(r,"width");a!==void 0&&(r.width=a)}if(an(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=b8(r,"height");a!==void 0&&(r.height=a)}return r}var jn=Qe?{passive:!0}:!1;function Jp(r,t,e){r&&r.addEventListener(t,e,jn)}function tu(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,jn)}function eu(r,t){let e=Kp[r.type]||r.type,{x:i,y:o}=q5(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:o!==void 0?o:null}}function W8(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function ru(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let V of a)n=n||W8(V.addedNodes,i),n=n&&!W8(V.removedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}function iu(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let V of a)n=n||W8(V.removedNodes,i),n=n&&!W8(V.addedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}var f9=new Map,nn=0;function Gn(){let r=window.devicePixelRatio;r!==nn&&(nn=r,f9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function ou(r,t){f9.size||window.addEventListener("resize",Gn),f9.set(r,t)}function Cu(r){f9.delete(r),f9.size||window.removeEventListener("resize",Gn)}function au(r,t,e){let i=r.canvas,o=i&&s9(i);if(!o)return;let a=m8((V,s)=>{let M=o.clientWidth;e(V,s),M<o.clientWidth&&e()},window),n=new ResizeObserver(V=>{let s=V[0],M=s.contentRect.width,p=s.contentRect.height;M===0&&p===0||a(M,p)});return n.observe(o),ou(r,a),n}function Hr(r,t,e){e&&e.disconnect(),t==="resize"&&Cu(r)}function nu(r,t,e){let i=r.canvas,o=m8(a=>{r.ctx!==null&&e(eu(a,r))},r);return Jp(i,t,o),o}var ur=class extends N8{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(Xp(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[B8])return!1;let i=e[B8].initial;["height","width"].forEach(a=>{let n=i[a];S1(n)?e.removeAttribute(a):e.setAttribute(a,n)});let o=i.style||{};return Object.keys(o).forEach(a=>{e.style[a]=o[a]}),e.width=e.width,delete e[B8],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let o=t.$proxies||(t.$proxies={}),n={attach:ru,detach:iu,resize:au}[e]||nu;o[e]=n(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),o=i[e];if(!o)return;({attach:Hr,detach:Hr,resize:Hr}[e]||tu)(t,e,o),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return Ye(t,e,i,o)}isAttached(t){let e=t&&s9(t);return!!(e&&e.isConnected)}};function Hu(r){return!V9()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?pr:ur}var K5=class{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return X3(this.x)&&X3(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let o={};return t.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}};z(K5,"defaults",{}),z(K5,"defaultRoutes");function Vu(r,t){let e=r.options.ticks,i=su(r),o=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?lu(t):[],n=a.length,V=a[0],s=a[n-1],M=[];if(n>o)return Mu(t,M,a,n/o),M;let p=Lu(a,t,o);if(n>0){let h,v,g=n>1?Math.round((s-V)/(n-1)):null;for(P8(t,M,p,S1(g)?0:V-g,V),h=0,v=n-1;h<v;h++)P8(t,M,p,a[h],a[h+1]);return P8(t,M,p,s,S1(g)?t.length:s+g),M}return P8(t,M,p),M}function su(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),o=r._maxLength/e;return Math.floor(Math.min(i,o))}function Lu(r,t,e){let i=cu(r),o=t.length/e;if(!i)return Math.max(o,1);let a=ke(i);for(let n=0,V=a.length-1;n<V;n++){let s=a[n];if(s>o)return s}return Math.max(o,1)}function lu(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function Mu(r,t,e,i){let o=0,a=e[0],n;for(i=Math.ceil(i),n=0;n<r.length;n++)n===a&&(t.push(r[n]),o++,a=e[o*i])}function P8(r,t,e,i,o){let a=P1(i,0),n=Math.min(P1(o,r.length),r.length),V=0,s,M,p;for(e=Math.ceil(e),o&&(s=o-i,e=s/Math.floor(s/e)),p=a;p<0;)V++,p=Math.round(a+V*e);for(M=Math.max(a,0);M<n;M++)M===p&&(t.push(r[M]),V++,p=Math.round(a+V*e))}function cu(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var du=r=>r==="left"?"right":r==="right"?"left":r,Hn=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,Vn=(r,t)=>Math.min(t||r,r);function sn(r,t){let e=[],i=r.length/t,o=r.length,a=0;for(;a<o;a+=i)e.push(r[Math.floor(a)]);return e}function pu(r,t,e){let i=r.ticks.length,o=Math.min(t,i-1),a=r._startPixel,n=r._endPixel,V=1e-6,s=r.getPixelForTick(o),M;if(!(e&&(i===1?M=Math.max(s-a,n-s):t===0?M=(r.getPixelForTick(1)-s)/2:M=(s-r.getPixelForTick(o-1))/2,s+=o<t?M:-M,s<a-V||s>n+V)))return s}function uu(r,t){z1(r,e=>{let i=e.gc,o=i.length/2,a;if(o>t){for(a=0;a<o;++a)delete e.data[i[a]];i.splice(0,o)}})}function d9(r){return r.drawTicks?r.tickLength:0}function Ln(r,t){if(!r.display)return 0;let e=R2(r.font,t),i=W2(r.padding);return(e2(r.text)?r.text.length:1)*e.lineHeight+i.height}function mu(r,t){return p0(r,{scale:t,type:"scale"})}function hu(r,t,e){return p0(r,{tick:e,index:t,type:"tick"})}function fu(r,t,e){let i=De(r);return(e&&t!=="right"||!e&&t==="right")&&(i=du(i)),i}function Au(r,t,e,i){let{top:o,left:a,bottom:n,right:V,chart:s}=r,{chartArea:M,scales:p}=s,h=0,v,g,y,k=n-o,O=V-a;if(r.isHorizontal()){if(g=h8(i,a,V),b1(e)){let E=Object.keys(e)[0],R=e[E];y=p[E].getPixelForValue(R)+k-t}else e==="center"?y=(M.bottom+M.top)/2+k-t:y=Hn(r,e,t);v=V-a}else{if(b1(e)){let E=Object.keys(e)[0],R=e[E];g=p[E].getPixelForValue(R)-O+t}else e==="center"?g=(M.left+M.right)/2-O+t:g=Hn(r,e,t);y=h8(i,n,o),h=e==="left"?-m2:m2}return{titleX:g,titleY:y,maxWidth:v,rotation:h}}var r7=class r extends K5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=J2(t,Number.POSITIVE_INFINITY),e=J2(e,Number.NEGATIVE_INFINITY),i=J2(i,Number.POSITIVE_INFINITY),o=J2(o,Number.NEGATIVE_INFINITY),{min:J2(t,i),max:J2(e,o),minDefined:n2(t),maxDefined:n2(e)}}getMinMax(t){let{min:e,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),n;if(o&&a)return{min:e,max:i};let V=this.getMatchingVisibleMetas();for(let s=0,M=V.length;s<M;++s)n=V[s].controller.getMinMax(this,t),o||(e=Math.min(e,n.min)),a||(i=Math.max(i,n.max));return e=a&&e>i?i:e,i=o&&e>i?e:i,{min:J2(e,J2(i,e)),max:J2(i,J2(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){J1(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:o,grace:a,ticks:n}=this.options,V=n.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ue(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=V<this.ticks.length;this._convertTicksToLabels(s?sn(this.ticks,V):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),n.display&&(n.autoSkip||n.source==="auto")&&(this.ticks=Vu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){J1(this.options.afterUpdate,[this])}beforeSetDimensions(){J1(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){J1(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),J1(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){J1(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,o,a;for(i=0,o=t.length;i<o;i++)a=t[i],a.label=J1(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){J1(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){J1(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=Vn(this.ticks.length,t.ticks.maxTicksLimit),o=e.minRotation||0,a=e.maxRotation,n=o,V,s,M;if(!this._isVisible()||!e.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}let p=this._getLabelSizes(),h=p.widest.width,v=p.highest.height,g=k2(this.chart.width-h,0,this.maxWidth);V=t.offset?this.maxWidth/i:g/(i-1),h+6>V&&(V=g/(i-(t.offset?.5:1)),s=this.maxHeight-d9(t.grid)-e.padding-Ln(t.title,this.chart.options.font),M=Math.sqrt(h*h+v*v),n=J4(Math.min(Math.asin(k2((p.highest.height+6)/V,-1,1)),Math.asin(k2(s/M,-1,1))-Math.asin(k2(v/M,-1,1)))),n=Math.max(o,Math.min(a,n))),this.labelRotation=n}afterCalculateLabelRotation(){J1(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){J1(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:a}}=this,n=this._isVisible(),V=this.isHorizontal();if(n){let s=Ln(o,e.options.font);if(V?(t.width=this.maxWidth,t.height=d9(a)+s):(t.height=this.maxHeight,t.width=d9(a)+s),i.display&&this.ticks.length){let{first:M,last:p,widest:h,highest:v}=this._getLabelSizes(),g=i.padding*2,y=d0(this.labelRotation),k=Math.cos(y),O=Math.sin(y);if(V){let E=i.mirror?0:O*h.width+k*v.height;t.height=Math.min(this.maxHeight,t.height+E+g)}else{let E=i.mirror?0:k*h.width+O*v.height;t.width=Math.min(this.maxWidth,t.width+E+g)}this._calculatePadding(M,p,O,k)}}this._handleMargins(),V?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){let{ticks:{align:a,padding:n},position:V}=this.options,s=this.labelRotation!==0,M=V!=="top"&&this.axis==="x";if(this.isHorizontal()){let p=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),v=0,g=0;s?M?(v=o*t.width,g=i*e.height):(v=i*t.height,g=o*e.width):a==="start"?g=e.width:a==="end"?v=t.width:a!=="inner"&&(v=t.width/2,g=e.width/2),this.paddingLeft=Math.max((v-p+n)*this.width/(this.width-p),0),this.paddingRight=Math.max((g-h+n)*this.width/(this.width-h),0)}else{let p=e.height/2,h=t.height/2;a==="start"?(p=0,h=t.height):a==="end"&&(p=e.height,h=0),this.paddingTop=p+n,this.paddingBottom=h+n}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){J1(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)S1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=sn(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:o,_longestTextCache:a}=this,n=[],V=[],s=Math.floor(e/Vn(e,i)),M=0,p=0,h,v,g,y,k,O,E,R,B,K,G;for(h=0;h<e;h+=s){if(y=t[h].label,k=this._resolveTickFontOptions(h),o.font=O=k.string,E=a[O]=a[O]||{data:{},gc:[]},R=k.lineHeight,B=K=0,!S1(y)&&!e2(y))B=U7(o,E.data,E.gc,B,y),K=R;else if(e2(y))for(v=0,g=y.length;v<g;++v)G=y[v],!S1(G)&&!e2(G)&&(B=U7(o,E.data,E.gc,B,G),K+=R);n.push(B),V.push(K),M=Math.max(B,M),p=Math.max(K,p)}uu(a,e);let c1=n.indexOf(M),J=V.indexOf(p),C1=i1=>({width:n[i1]||0,height:V[i1]||0});return{first:C1(0),last:C1(e-1),widest:C1(c1),highest:C1(J),widths:n,heights:V}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return Te(this._alignToPixels?F0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=hu(this.getContext(),t,i))}return this.$context||(this.$context=mu(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=d0(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),a=this._getLabelSizes(),n=t.autoSkipPadding||0,V=a?a.widest.width+n:0,s=a?a.highest.height+n:0;return this.isHorizontal()?s*i>V*o?V/i:s/o:s*o<V*i?s/i:V/o}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,o=this.options,{grid:a,position:n,border:V}=o,s=a.offset,M=this.isHorizontal(),h=this.ticks.length+(s?1:0),v=d9(a),g=[],y=V.setContext(this.getContext()),k=y.display?y.width:0,O=k/2,E=function(X){return F0(i,X,k)},R,B,K,G,c1,J,C1,i1,m1,I1,y1,V2;if(n==="top")R=E(this.bottom),J=this.bottom-v,i1=R-O,I1=E(t.top)+O,V2=t.bottom;else if(n==="bottom")R=E(this.top),I1=t.top,V2=E(t.bottom)-O,J=R+O,i1=this.top+v;else if(n==="left")R=E(this.right),c1=this.right-v,C1=R-O,m1=E(t.left)+O,y1=t.right;else if(n==="right")R=E(this.left),m1=t.left,y1=E(t.right)-O,c1=R+O,C1=this.left+v;else if(e==="x"){if(n==="center")R=E((t.top+t.bottom)/2+.5);else if(b1(n)){let X=Object.keys(n)[0],q1=n[X];R=E(this.chart.scales[X].getPixelForValue(q1))}I1=t.top,V2=t.bottom,J=R+O,i1=J+v}else if(e==="y"){if(n==="center")R=E((t.left+t.right)/2);else if(b1(n)){let X=Object.keys(n)[0],q1=n[X];R=E(this.chart.scales[X].getPixelForValue(q1))}c1=R-O,C1=c1-v,m1=t.left,y1=t.right}let G1=P1(o.ticks.maxTicksLimit,h),Z1=Math.max(1,Math.ceil(h/G1));for(B=0;B<h;B+=Z1){let X=this.getContext(B),q1=a.setContext(X),n1=V.setContext(X),U=q1.lineWidth,t1=q1.color,H1=n1.dash||[],h1=n1.dashOffset,V1=q1.tickWidth,s1=q1.tickColor,g1=q1.tickBorderDash||[],k1=q1.tickBorderDashOffset;K=pu(this,B,s),K!==void 0&&(G=F0(i,K,U),M?c1=C1=m1=y1=G:J=i1=I1=V2=G,g.push({tx1:c1,ty1:J,tx2:C1,ty2:i1,x1:m1,y1:I1,x2:y1,y2:V2,width:U,color:t1,borderDash:H1,borderDashOffset:h1,tickWidth:V1,tickColor:s1,tickBorderDash:g1,tickBorderDashOffset:k1}))}return this._ticksLength=h,this._borderValue=R,g}_computeLabelItems(t){let e=this.axis,i=this.options,{position:o,ticks:a}=i,n=this.isHorizontal(),V=this.ticks,{align:s,crossAlign:M,padding:p,mirror:h}=a,v=d9(i.grid),g=v+p,y=h?-p:g,k=-d0(this.labelRotation),O=[],E,R,B,K,G,c1,J,C1,i1,m1,I1,y1,V2="middle";if(o==="top")c1=this.bottom-y,J=this._getXAxisLabelAlignment();else if(o==="bottom")c1=this.top+y,J=this._getXAxisLabelAlignment();else if(o==="left"){let Z1=this._getYAxisLabelAlignment(v);J=Z1.textAlign,G=Z1.x}else if(o==="right"){let Z1=this._getYAxisLabelAlignment(v);J=Z1.textAlign,G=Z1.x}else if(e==="x"){if(o==="center")c1=(t.top+t.bottom)/2+g;else if(b1(o)){let Z1=Object.keys(o)[0],X=o[Z1];c1=this.chart.scales[Z1].getPixelForValue(X)+g}J=this._getXAxisLabelAlignment()}else if(e==="y"){if(o==="center")G=(t.left+t.right)/2-g;else if(b1(o)){let Z1=Object.keys(o)[0],X=o[Z1];G=this.chart.scales[Z1].getPixelForValue(X)}J=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(s==="start"?V2="top":s==="end"&&(V2="bottom"));let G1=this._getLabelSizes();for(E=0,R=V.length;E<R;++E){B=V[E],K=B.label;let Z1=a.setContext(this.getContext(E));C1=this.getPixelForTick(E)+a.labelOffset,i1=this._resolveTickFontOptions(E),m1=i1.lineHeight,I1=e2(K)?K.length:1;let X=I1/2,q1=Z1.color,n1=Z1.textStrokeColor,U=Z1.textStrokeWidth,t1=J;n?(G=C1,J==="inner"&&(E===R-1?t1=this.options.reverse?"left":"right":E===0?t1=this.options.reverse?"right":"left":t1="center"),o==="top"?M==="near"||k!==0?y1=-I1*m1+m1/2:M==="center"?y1=-G1.highest.height/2-X*m1+m1:y1=-G1.highest.height+m1/2:M==="near"||k!==0?y1=m1/2:M==="center"?y1=G1.highest.height/2-X*m1:y1=G1.highest.height-I1*m1,h&&(y1*=-1),k!==0&&!Z1.showLabelBackdrop&&(G+=m1/2*Math.sin(k))):(c1=C1,y1=(1-I1)*m1/2);let H1;if(Z1.showLabelBackdrop){let h1=W2(Z1.backdropPadding),V1=G1.heights[E],s1=G1.widths[E],g1=y1-h1.top,k1=0-h1.left;switch(V2){case"middle":g1-=V1/2;break;case"bottom":g1-=V1;break}switch(J){case"center":k1-=s1/2;break;case"right":k1-=s1;break;case"inner":E===R-1?k1-=s1:E>0&&(k1-=s1/2);break}H1={left:k1,top:g1,width:s1+h1.width,height:V1+h1.height,color:Z1.backdropColor}}O.push({label:K,font:i1,textOffset:y1,options:{rotation:k,color:q1,strokeColor:n1,strokeWidth:U,textAlign:t1,textBaseline:V2,translation:[G,c1],backdrop:H1}})}return O}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-d0(this.labelRotation))return t==="top"?"left":"right";let o="center";return e.align==="start"?o="left":e.align==="end"?o="right":e.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,n=this._getLabelSizes(),V=t+a,s=n.widest.width,M,p;return e==="left"?o?(p=this.right+a,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p+=s)):(p=this.right-V,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p=this.left)):e==="right"?o?(p=this.left+a,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p-=s)):(p=this.left+V,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p=this.right)):M="right",{textAlign:M,x:p}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:o,width:a,height:n}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,a,n),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let o=this.ticks.findIndex(a=>a.value===t);return o>=0?e.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,n,V=(s,M,p)=>{!p.width||!p.color||(i.save(),i.lineWidth=p.width,i.strokeStyle=p.color,i.setLineDash(p.borderDash||[]),i.lineDashOffset=p.borderDashOffset,i.beginPath(),i.moveTo(s.x,s.y),i.lineTo(M.x,M.y),i.stroke(),i.restore())};if(e.display)for(a=0,n=o.length;a<n;++a){let s=o[a];e.drawOnChartArea&&V({x:s.x1,y:s.y1},{x:s.x2,y:s.y2},s),e.drawTicks&&V({x:s.tx1,y:s.ty1},{x:s.tx2,y:s.ty2},{color:s.tickColor,width:s.tickWidth,borderDash:s.tickBorderDash,borderDashOffset:s.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),n=i.display?a.width:0;if(!n)return;let V=o.setContext(this.getContext(0)).lineWidth,s=this._borderValue,M,p,h,v;this.isHorizontal()?(M=F0(t,this.left,n)-n/2,p=F0(t,this.right,V)+V/2,h=v=s):(h=F0(t,this.top,n)-n/2,v=F0(t,this.bottom,V)+V/2,M=p=s),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(M,h),e.lineTo(p,v),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,o=this._computeLabelArea();o&&C9(i,o);let a=this.getLabelItems(t);for(let n of a){let V=n.options,s=n.font,M=n.label,p=n.textOffset;q7(i,M,0,p,s,V)}o&&a9(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;let a=R2(i.font),n=W2(i.padding),V=i.align,s=a.lineHeight/2;e==="bottom"||e==="center"||b1(e)?(s+=n.bottom,e2(i.text)&&(s+=a.lineHeight*(i.text.length-1))):s+=n.top;let{titleX:M,titleY:p,maxWidth:h,rotation:v}=Au(this,s,e,V);q7(t,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:v,textAlign:fu(V,e,o),textBaseline:"middle",translation:[M,p]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=P1(t.grid&&t.grid.z,-1),o=P1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[],a,n;for(a=0,n=e.length;a<n;++a){let V=e[a];V[i]===this.id&&(!t||V.type===t)&&o.push(V)}return o}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return R2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},X7=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;gu(e)&&(i=this.register(e));let o=this.items,a=t.id,n=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in o||(o[a]=t,vu(t,n,i),this.override&&H2.override(t.id,t.overrides)),n}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in H2[o]&&(delete H2[o][i],this.override&&delete L3[i])}};function vu(r,t,e){let i=u5(Object.create(null),[e?H2.get(e):{},H2.get(t),r.defaults]);H2.set(t,i),r.defaultRoutes&&xu(t,r.defaultRoutes),r.descriptors&&H2.describe(t,r.descriptors)}function xu(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),o=i.pop(),a=[r].concat(i).join("."),n=t[e].split("."),V=n.pop(),s=n.join(".");H2.route(a,o,s,V)})}function gu(r){return"id"in r&&"defaults"in r}var mr=class{constructor(){this.controllers=new X7(c3,"datasets",!0),this.elements=new X7(K5,"elements"),this.plugins=new X7(Object,"plugins"),this.scales=new X7(r7,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(o=>{let a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(t,a,o):z1(o,n=>{let V=i||this._getRegistryForType(n);this._exec(t,V,n)})})}_exec(t,e,i){let o=X4(t);J1(i["before"+o],[],i),e[t](i),J1(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let o=e.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return o}},m0=new mr,hr=class{constructor(){this._init=void 0}notify(t,e,i,o){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=o?this._descriptors(t).filter(o):this._descriptors(t),n=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),n}_notify(t,e,i,o){o=o||{};for(let a of t){let n=a.plugin,V=n[i],s=[e,o,a.options];if(J1(V,s,n)===!1&&o.cancelable)return!1}return!0}invalidate(){S1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,o=P1(i.options&&i.options.plugins,{}),a=_u(i);return o===!1&&!e?[]:wu(t,a,o,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,o=(a,n)=>a.filter(V=>!n.some(s=>V.plugin.id===s.plugin.id));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}};function _u(r){let t={},e=[],i=Object.keys(m0.plugins.items);for(let a=0;a<i.length;a++)e.push(m0.getPlugin(i[a]));let o=r.plugins||[];for(let a=0;a<o.length;a++){let n=o[a];e.indexOf(n)===-1&&(e.push(n),t[n.id]=!0)}return{plugins:e,localIds:t}}function Su(r,t){return!t&&r===!1?null:r===!0?{}:r}function wu(r,{plugins:t,localIds:e},i,o){let a=[],n=r.getContext();for(let V of t){let s=V.id,M=Su(i[s],o);M!==null&&a.push({plugin:V,options:bu(r.config,{plugin:V,local:e[s]},M,n)})}return a}function bu(r,{plugin:t,local:e},i,o){let a=r.pluginScopeKeys(t),n=r.getOptionScopes(i,a);return e&&t.defaults&&n.push(t.defaults),r.createResolver(n,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function fr(r,t){let e=H2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function yu(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function Zu(r,t){return r===t?"_index_":"_value_"}function ln(r){if(r==="x"||r==="y"||r==="r")return r}function ku(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function Ar(r,...t){if(ln(r))return r;for(let e of t){let i=e.axis||ku(e.position)||r.length>1&&ln(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function Mn(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function Ou(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return Mn(r,"x",e[0])||Mn(r,"y",e[0])}return{}}function Tu(r,t){let e=L3[r.type]||{scales:{}},i=t.scales||{},o=fr(r.type,t),a=Object.create(null);return Object.keys(i).forEach(n=>{let V=i[n];if(!b1(V))return console.error(`Invalid scale configuration for scale: ${n}`);if(V._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${n}`);let s=Ar(n,V,Ou(n,r),H2.scales[V.type]),M=Zu(s,o),p=e.scales||{};a[n]=Y3(Object.create(null),[{axis:s},V,p[s],p[M]])}),r.data.datasets.forEach(n=>{let V=n.type||r.type,s=n.indexAxis||fr(V,t),p=(L3[V]||{}).scales||{};Object.keys(p).forEach(h=>{let v=yu(h,s),g=n[v+"AxisID"]||v;a[g]=a[g]||Object.create(null),Y3(a[g],[{axis:v},i[g],p[h]])})}),Object.keys(a).forEach(n=>{let V=a[n];Y3(V,[H2.scales[V.type],H2.scale])}),a}function qn(r){let t=r.options||(r.options={});t.plugins=P1(t.plugins,{}),t.scales=Tu(r,t)}function Yn(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function Pu(r){return r=r||{},r.data=Yn(r.data),qn(r),r}var cn=new Map,Qn=new Set;function E8(r,t){let e=cn.get(r);return e||(e=t(),cn.set(r,e),Qn.add(e)),e}var p9=(r,t,e)=>{let i=s3(t,e);i!==void 0&&r.add(i)},vr=class{constructor(t){this._config=Pu(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Yn(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),qn(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return E8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return E8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return E8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return E8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,o=i.get(t);return(!o||e)&&(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){let{options:o,type:a}=this,n=this._cachedScopes(t,i),V=n.get(e);if(V)return V;let s=new Set;e.forEach(p=>{t&&(s.add(t),p.forEach(h=>p9(s,t,h))),p.forEach(h=>p9(s,o,h)),p.forEach(h=>p9(s,L3[a]||{},h)),p.forEach(h=>p9(s,H2,h)),p.forEach(h=>p9(s,v8,h))});let M=Array.from(s);return M.length===0&&M.push(Object.create(null)),Qn.has(e)&&n.set(e,M),M}chartOptionScopes(){let{options:t,type:e}=this;return[t,L3[e]||{},H2.datasets[e]||{},{type:e},H2,v8]}resolveNamedOptions(t,e,i,o=[""]){let a={$shared:!0},{resolver:n,subPrefixes:V}=dn(this._resolverCache,t,o),s=n;if(Fu(n,e)){a.$shared=!1,i=M0(i)?i():i;let M=this.createResolver(t,i,V);s=V3(n,i,M)}for(let M of e)a[M]=s[M];return a}createResolver(t,e,i=[""],o){let{resolver:a}=dn(this._resolverCache,t,i);return b1(e)?V3(a,e,void 0,o):a}};function dn(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let o=e.join(),a=i.get(o);return a||(a={resolver:H9(t,e),subPrefixes:e.filter(V=>!V.toLowerCase().includes("hover"))},i.set(o,a)),a}var Eu=r=>b1(r)&&Object.getOwnPropertyNames(r).some(t=>M0(r[t]));function Fu(r,t){let{isScriptable:e,isIndexable:i}=_8(r);for(let o of t){let a=e(o),n=i(o),V=(n||a)&&r[o];if(a&&(M0(V)||Eu(V))||n&&e2(V))return!0}return!1}var $u="4.5.1",Du=["top","bottom","left","right","chartArea"];function pn(r,t){return r==="top"||r==="bottom"||Du.indexOf(r)===-1&&t==="x"}function un(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function mn(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),J1(e&&e.onComplete,[r],t)}function Ru(r){let t=r.chart,e=t.options.animation;J1(e&&e.onProgress,[r],t)}function Kn(r){return V9()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var z8={},hn=r=>{let t=Kn(r);return Object.values(z8).filter(e=>e.canvas===t).pop()};function Bu(r,t,e){let i=Object.keys(r);for(let o of i){let a=+o;if(a>=t){let n=r[o];delete r[o],(e>0||a>t)&&(r[a+e]=n)}}}function zu(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var O2=class{static register(...t){m0.add(...t),fn()}static unregister(...t){m0.remove(...t),fn()}constructor(t,e){let i=this.config=new vr(e),o=Kn(t),a=hn(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let n=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Hu(o)),this.platform.updateConfig(i);let V=this.platform.acquireContext(o,n.aspectRatio),s=V&&V.canvas,M=s&&s.height,p=s&&s.width;if(this.id=be(),this.ctx=V,this.canvas=s,this.width=p,this.height=M,this._options=n,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new hr,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=$e(h=>this.update(h),n.resizeDelay||0),this._dataChanges=[],z8[this.id]=this,!V||!s){console.error("Failed to create chart: can't acquire context from the given item");return}$0.listen(this,"complete",mn),$0.listen(this,"progress",Ru),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:a}=this;return S1(t)?e&&a?a:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return m0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():w8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return x8(this.canvas,this.ctx),this}stop(){return $0.stop(this),this}resize(t,e){$0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,n=this.platform.getMaximumSize(o,t,e,a),V=i.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=n.width,this.height=n.height,this._aspectRatio=this.aspectRatio,w8(this,V,!0)&&(this.notifyPlugins("resize",{size:n}),J1(i.onResize,[this,n],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};z1(e,(i,o)=>{i.id=o})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce((n,V)=>(n[V]=!1,n),{}),a=[];e&&(a=a.concat(Object.keys(e).map(n=>{let V=e[n],s=Ar(n,V),M=s==="r",p=s==="x";return{options:V,dposition:M?"chartArea":p?"bottom":"left",dtype:M?"radialLinear":p?"category":"linear"}}))),z1(a,n=>{let V=n.options,s=V.id,M=Ar(s,V),p=P1(V.type,n.dtype);(V.position===void 0||pn(V.position,M)!==pn(n.dposition))&&(V.position=n.dposition),o[s]=!0;let h=null;if(s in i&&i[s].type===p)h=i[s];else{let v=m0.getScale(p);h=new v({id:s,type:p,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(V,t)}),z1(o,(n,V)=>{n||delete i[V]}),z1(i,n=>{T8.configure(this,n,n.options),T8.addBox(this,n)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((o,a)=>o.index-a.index),i>e){for(let o=e;o<i;++o)this._destroyDatasetMeta(o);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(un("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,o)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){let a=e[i],n=this.getDatasetMeta(i),V=a.type||this.config.type;if(n.type&&n.type!==V&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=V,n.indexAxis=a.indexAxis||fr(V,this.options),n.order=a.order||0,n.index=i,n.label=""+a.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{let s=m0.getController(V),{datasetElementType:M,dataElementType:p}=H2.datasets[V];Object.assign(s,{dataElementType:m0.getElement(p),datasetElementType:M&&m0.getElement(M)}),n.controller=new s(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){z1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let n=0;for(let M=0,p=this.data.datasets.length;M<p;M++){let{controller:h}=this.getDatasetMeta(M),v=!o&&a.indexOf(h)===-1;h.buildOrUpdateElements(v),n=Math.max(+h.getMaxOverflow(),n)}n=this._minPadding=i.layout.autoPadding?n:0,this._updateLayout(n),o||z1(a,M=>{M.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(un("z","_idx"));let{_active:V,_lastEvent:s}=this;s?this._eventHandler(s,!0):V.length&&this._updateHoverStyles(V,V,!0),this.render()}_updateScales(){z1(this.scales,t=>{T8.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!s8(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:o,count:a}of e){let n=i==="_removeElements"?-a:a;Bu(t,o,n)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(n=>n[0]===a).map((n,V)=>V+","+n.splice(1).join(","))),o=i(0);for(let a=1;a<e;a++)if(!s8(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;T8.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],z1(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,M0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&($0.has(this)?this.attached&&!$0.running(this)&&$0.start(this):(this.draw(),mn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],o,a;for(o=0,a=e.length;o<a;++o){let n=e[o];(!t||n.visible)&&i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},o=k8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&C9(e,o),t.controller.draw(),o&&a9(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return j5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,o){let a=Np.modes[e];return typeof a=="function"?a(this,t,i,o):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,o=i.filter(a=>a&&a._dataset===e).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=p0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let o=i?"show":"hide",a=this.getDatasetMeta(t),n=a.controller._resolveAnimations(void 0,o);Q3(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),n.update(a,{visible:i}),this.update(V=>V.datasetIndex===t?o:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),$0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),x8(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete z8[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,n)=>{e.addEventListener(this,a,n),t[a]=n},o=(a,n,V)=>{a.offsetX=n,a.offsetY=V,this._eventHandler(a)};z1(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(s,M)=>{e.addEventListener(this,s,M),t[s]=M},o=(s,M)=>{t[s]&&(e.removeEventListener(this,s,M),delete t[s])},a=(s,M)=>{this.canvas&&this.resize(s,M)},n,V=()=>{o("attach",V),this.attached=!0,this.resize(),i("resize",a),i("detach",n)};n=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",V)},e.isAttached(this.canvas)?V():n()}unbindEvents(){z1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},z1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let o=i?"set":"remove",a,n,V,s;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),V=0,s=t.length;V<s;++V){n=t[V];let M=n&&this.getDatasetMeta(n.datasetIndex).controller;M&&M[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:n})=>{let V=this.getDatasetMeta(a);if(!V)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:V.data[n],index:n}});!G7(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let o=this.options.hover,a=(s,M)=>s.filter(p=>!M.some(h=>p.datasetIndex===h.datasetIndex&&p.index===h.index)),n=a(e,t),V=i?t:a(t,e);n.length&&this.updateHoverStyle(n,o.mode,!1),V.length&&o.mode&&this.updateHoverStyle(V,o.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},o=n=>(n.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:o=[],options:a}=this,n=e,V=this._getActiveElements(t,o,i,n),s=Ze(t),M=zu(t,this._lastEvent,i,s);i&&(this._lastEvent=null,J1(a.onHover,[t,V,this],this),s&&J1(a.onClick,[t,V,this],this));let p=!G7(V,o);return(p||e)&&(this._active=V,this._updateHoverStyles(V,o,e)),this._lastEvent=M,p}_getActiveElements(t,e,i,o){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,o)}};z(O2,"defaults",H2),z(O2,"instances",z8),z(O2,"overrides",L3),z(O2,"registry",m0),z(O2,"version",$u),z(O2,"getChart",hn);function fn(){return z1(O2.instances,r=>r._plugins.invalidate())}function Iu(r,t,e){let{startAngle:i,x:o,y:a,outerRadius:n,innerRadius:V,options:s}=t,{borderWidth:M,borderJoinStyle:p}=s,h=Math.min(M/n,Z2(i-e));if(r.beginPath(),r.arc(o,a,n-M/2,i+h/2,e-h/2),V>0){let v=Math.min(M/V,Z2(i-e));r.arc(o,a,V+M/2,e-v/2,i+v/2,!0)}else{let v=Math.min(M/2,n*Z2(i-e));if(p==="round")r.arc(o,a,v,e-Q1/2,i+Q1/2,!0);else if(p==="bevel"){let g=2*v*v,y=-g*Math.cos(e+Q1/2)+o,k=-g*Math.sin(e+Q1/2)+a,O=g*Math.cos(i+Q1/2)+o,E=g*Math.sin(i+Q1/2)+a;r.lineTo(y,k),r.lineTo(O,E)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function Nu(r,t,e){let{startAngle:i,pixelMargin:o,x:a,y:n,outerRadius:V,innerRadius:s}=t,M=o/V;r.beginPath(),r.arc(a,n,V,i-M,e+M),s>o?(M=o/s,r.arc(a,n,s,e+M,i-M,!0)):r.arc(a,n,o,e+m2,i-m2),r.closePath(),r.clip()}function Wu(r){return n9(r,["outerStart","outerEnd","innerStart","innerEnd"])}function Uu(r,t,e,i){let o=Wu(r.options.borderRadius),a=(e-t)/2,n=Math.min(a,i*t/2),V=s=>{let M=(e-Math.min(a,s))*i/2;return k2(s,0,Math.min(a,M))};return{outerStart:V(o.outerStart),outerEnd:V(o.outerEnd),innerStart:k2(o.innerStart,0,n),innerEnd:k2(o.innerEnd,0,n)}}function Q7(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function U8(r,t,e,i,o,a){let{x:n,y:V,startAngle:s,pixelMargin:M,innerRadius:p}=t,h=Math.max(t.outerRadius+i+e-M,0),v=p>0?p+i+e+M:0,g=0,y=o-s;if(i){let Z1=p>0?p-i:0,X=h>0?h-i:0,q1=(Z1+X)/2,n1=q1!==0?y*q1/(q1+i):y;g=(y-n1)/2}let k=Math.max(.001,y*h-e/Q1)/h,O=(y-k)/2,E=s+O+g,R=o-O-g,{outerStart:B,outerEnd:K,innerStart:G,innerEnd:c1}=Uu(t,v,h,R-E),J=h-B,C1=h-K,i1=E+B/J,m1=R-K/C1,I1=v+G,y1=v+c1,V2=E+G/I1,G1=R-c1/y1;if(r.beginPath(),a){let Z1=(i1+m1)/2;if(r.arc(n,V,h,i1,Z1),r.arc(n,V,h,Z1,m1),K>0){let U=Q7(C1,m1,n,V);r.arc(U.x,U.y,K,m1,R+m2)}let X=Q7(y1,R,n,V);if(r.lineTo(X.x,X.y),c1>0){let U=Q7(y1,G1,n,V);r.arc(U.x,U.y,c1,R+m2,G1+Math.PI)}let q1=(R-c1/v+(E+G/v))/2;if(r.arc(n,V,v,R-c1/v,q1,!0),r.arc(n,V,v,q1,E+G/v,!0),G>0){let U=Q7(I1,V2,n,V);r.arc(U.x,U.y,G,V2+Math.PI,E-m2)}let n1=Q7(J,E,n,V);if(r.lineTo(n1.x,n1.y),B>0){let U=Q7(J,i1,n,V);r.arc(U.x,U.y,B,E-m2,i1)}}else{r.moveTo(n,V);let Z1=Math.cos(i1)*h+n,X=Math.sin(i1)*h+V;r.lineTo(Z1,X);let q1=Math.cos(m1)*h+n,n1=Math.sin(m1)*h+V;r.lineTo(q1,n1)}r.closePath()}function ju(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:V}=t,s=t.endAngle;if(a){U8(r,t,e,i,s,o);for(let M=0;M<a;++M)r.fill();isNaN(V)||(s=n+(V%c2||c2))}return U8(r,t,e,i,s,o),r.fill(),s}function Gu(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:V,options:s}=t,{borderWidth:M,borderJoinStyle:p,borderDash:h,borderDashOffset:v,borderRadius:g}=s,y=s.borderAlign==="inner";if(!M)return;r.setLineDash(h||[]),r.lineDashOffset=v,y?(r.lineWidth=M*2,r.lineJoin=p||"round"):(r.lineWidth=M,r.lineJoin=p||"bevel");let k=t.endAngle;if(a){U8(r,t,e,i,k,o);for(let O=0;O<a;++O)r.stroke();isNaN(V)||(k=n+(V%c2||c2))}y&&Nu(r,t,k),s.selfJoin&&k-n>=Q1&&g===0&&p!=="miter"&&Iu(r,t,k),a||(U8(r,t,e,i,k,o),r.stroke())}var M3=class extends K5{constructor(e){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.getProps(["x","y"],o),{angle:n,distance:V}=c8(a,{x:e,y:i}),{startAngle:s,endAngle:M,innerRadius:p,outerRadius:h,circumference:v}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),g=(this.options.spacing+this.options.borderWidth)/2,y=P1(v,M-s),k=t9(n,s,M)&&s!==M,O=y>=c2||k,E=J3(V,p+g,h+g);return O&&E}getCenterPoint(e){let{x:i,y:o,startAngle:a,endAngle:n,innerRadius:V,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:M,spacing:p}=this.options,h=(a+n)/2,v=(V+s+p+M)/2;return{x:i+Math.cos(h)*v,y:o+Math.sin(h)*v}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:o}=this,a=(i.offset||0)/4,n=(i.spacing||0)/2,V=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>c2?Math.floor(o/c2):0,o===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let s=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(s)*a,Math.sin(s)*a);let M=1-Math.sin(Math.min(Q1,o||0)),p=a*M;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,ju(e,this,p,n,V),Gu(e,this,p,n,V),e.restore()}};z(M3,"id","arc"),z(M3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),z(M3,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(M3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Xn(r,t,e=t){r.lineCap=P1(e.borderCapStyle,t.borderCapStyle),r.setLineDash(P1(e.borderDash,t.borderDash)),r.lineDashOffset=P1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=P1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=P1(e.borderWidth,t.borderWidth),r.strokeStyle=P1(e.borderColor,t.borderColor)}function qu(r,t,e){r.lineTo(e.x,e.y)}function Yu(r){return r.stepped?Ne:r.tension||r.cubicInterpolationMode==="monotone"?We:qu}function Jn(r,t,e={}){let i=r.length,{start:o=0,end:a=i-1}=e,{start:n,end:V}=t,s=Math.max(o,n),M=Math.min(a,V),p=o<n&&a<n||o>V&&a>V;return{count:i,start:s,loop:t.loop,ilen:M<s&&!p?i+M-s:M-s}}function Qu(r,t,e,i){let{points:o,options:a}=t,{count:n,start:V,loop:s,ilen:M}=Jn(o,e,i),p=Yu(a),{move:h=!0,reverse:v}=i||{},g,y,k;for(g=0;g<=M;++g)y=o[(V+(v?M-g:g))%n],!y.skip&&(h?(r.moveTo(y.x,y.y),h=!1):p(r,k,y,v,a.stepped),k=y);return s&&(y=o[(V+(v?M:0))%n],p(r,k,y,v,a.stepped)),!!s}function Ku(r,t,e,i){let o=t.points,{count:a,start:n,ilen:V}=Jn(o,e,i),{move:s=!0,reverse:M}=i||{},p=0,h=0,v,g,y,k,O,E,R=K=>(n+(M?V-K:K))%a,B=()=>{k!==O&&(r.lineTo(p,O),r.lineTo(p,k),r.lineTo(p,E))};for(s&&(g=o[R(0)],r.moveTo(g.x,g.y)),v=0;v<=V;++v){if(g=o[R(v)],g.skip)continue;let K=g.x,G=g.y,c1=K|0;c1===y?(G<k?k=G:G>O&&(O=G),p=(h*p+K)/++h):(B(),r.lineTo(K,G),y=c1,h=0,k=O=G),E=G}B()}function xr(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Ku:Qu}function Xu(r){return r.stepped?Ke:r.tension||r.cubicInterpolationMode==="monotone"?Xe:P0}function Ju(r,t,e,i){let o=t._path;o||(o=t._path=new Path2D,t.path(o,e,i)&&o.closePath()),Xn(r,t.options),r.stroke(o)}function tm(r,t,e,i){let{segments:o,options:a}=t,n=xr(t);for(let V of o)Xn(r,a,V.style),r.beginPath(),n(r,t,V,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var em=typeof Path2D=="function";function rm(r,t,e,i){em&&!t.options.segment?Ju(r,t,e,i):tm(r,t,e,i)}var m5=class extends K5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let o=i.spanGaps?this._loop:this._fullLoop;qe(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=er(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,o=t[e],a=this.points,n=Z8(this,{property:e,start:o,end:o});if(!n.length)return;let V=[],s=Xu(i),M,p;for(M=0,p=n.length;M<p;++M){let{start:h,end:v}=n[M],g=a[h],y=a[v];if(g===y){V.push(g);continue}let k=Math.abs((o-g[e])/(y[e]-g[e])),O=s(g,y,k,i.stepped);O[e]=t[e],V.push(O)}return V.length===1?V[0]:V}pathSegment(t,e,i){return xr(this)(t,this,e,i)}path(t,e,i){let o=this.segments,a=xr(this),n=this._loop;e=e||0,i=i||this.points.length-e;for(let V of o)n&=a(t,this,V,{start:e,end:e+i-1});return!!n}draw(t,e,i,o){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),rm(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};z(m5,"id","line"),z(m5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(m5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(m5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function An(r,t,e,i){let o=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<o.radius+o.hitRadius}var Y5=class extends K5{constructor(e){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.options,{x:n,y:V}=this.getProps(["x","y"],o);return Math.pow(e-n,2)+Math.pow(i-V,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return An(this,e,"x",i)}inYRange(e,i){return An(this,e,"y",i)}getCenterPoint(e){let{x:i,y:o}=this.getProps(["x","y"],e);return{x:i,y:o}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let o=i&&e.borderWidth||0;return(i+o)*2}draw(e,i){let o=this.options;this.skip||o.radius<.1||!j5(this,i,this.size(o)/2)||(e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.fillStyle=o.backgroundColor,o9(e,o,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};z(Y5,"id","point"),z(Y5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Y5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function tH(r,t){let{x:e,y:i,base:o,width:a,height:n}=r.getProps(["x","y","base","width","height"],t),V,s,M,p,h;return r.horizontal?(h=n/2,V=Math.min(e,o),s=Math.max(e,o),M=i-h,p=i+h):(h=a/2,V=e-h,s=e+h,M=Math.min(i,o),p=Math.max(i,o)),{left:V,top:M,right:s,bottom:p}}function d3(r,t,e,i){return r?0:k2(t,e,i)}function im(r,t,e){let i=r.options.borderWidth,o=r.borderSkipped,a=g8(i);return{t:d3(o.top,a.top,0,e),r:d3(o.right,a.right,0,t),b:d3(o.bottom,a.bottom,0,e),l:d3(o.left,a.left,0,t)}}function om(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),o=r.options.borderRadius,a=l3(o),n=Math.min(t,e),V=r.borderSkipped,s=i||b1(o);return{topLeft:d3(!s||V.top||V.left,a.topLeft,0,n),topRight:d3(!s||V.top||V.right,a.topRight,0,n),bottomLeft:d3(!s||V.bottom||V.left,a.bottomLeft,0,n),bottomRight:d3(!s||V.bottom||V.right,a.bottomRight,0,n)}}function Cm(r){let t=tH(r),e=t.right-t.left,i=t.bottom-t.top,o=im(r,e/2,i/2),a=om(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+o.l,y:t.top+o.t,w:e-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function Vr(r,t,e,i){let o=t===null,a=e===null,V=r&&!(o&&a)&&tH(r,i);return V&&(o||J3(t,V.left,V.right))&&(a||J3(e,V.top,V.bottom))}function am(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function nm(r,t){r.rect(t.x,t.y,t.w,t.h)}function sr(r,t,e={}){let i=r.x!==e.x?-t:0,o=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,n=(r.y+r.h!==e.y+e.h?t:0)-o;return{x:r.x+i,y:r.y+o,w:r.w+a,h:r.h+n,radius:r.radius}}var Q5=class extends K5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:n}=Cm(this),V=am(n.radius)?Y7:nm;t.save(),(n.w!==a.w||n.h!==a.h)&&(t.beginPath(),V(t,sr(n,e,a)),t.clip(),V(t,sr(a,-e,n)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),V(t,sr(a,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Vr(this,t,e,i)}inXRange(t,e){return Vr(this,t,null,e)}inYRange(t,e){return Vr(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+o)/2:e,y:a?i:(i+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};z(Q5,"id","bar"),z(Q5,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(Q5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Hm(r,t,e){let i=r.segments,o=r.points,a=t.points,n=[];for(let V of i){let{start:s,end:M}=V;M=G8(s,M,o);let p=gr(e,o[s],o[M],V.loop);if(!t.segments){n.push({source:V,target:p,start:o[s],end:o[M]});continue}let h=Z8(t,p);for(let v of h){let g=gr(e,a[v.start],a[v.end],v.loop),y=y8(V,o,g);for(let k of y)n.push({source:k,target:v,start:{[e]:vn(p,g,"start",Math.max)},end:{[e]:vn(p,g,"end",Math.min)}})}}return n}function gr(r,t,e,i){if(i)return;let o=t[r],a=e[r];return r==="angle"&&(o=Z2(o),a=Z2(a)),{property:r,start:o,end:a}}function Vm(r,t){let{x:e=null,y:i=null}=r||{},o=t.points,a=[];return t.segments.forEach(({start:n,end:V})=>{V=G8(n,V,o);let s=o[n],M=o[V];i!==null?(a.push({x:s.x,y:i}),a.push({x:M.x,y:i})):e!==null&&(a.push({x:e,y:s.y}),a.push({x:e,y:M.y}))}),a}function G8(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function vn(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function eH(r,t){let e=[],i=!1;return e2(r)?(i=!0,e=r):e=Vm(r,t),e.length?new m5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function xn(r){return r&&r.fill!==!1}function sm(r,t,e){let o=r[t].fill,a=[t],n;if(!e)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!n2(o))return o;if(n=r[o],!n)return!1;if(n.visible)return o;a.push(o),o=n.fill}return!1}function Lm(r,t,e){let i=dm(r);if(b1(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return n2(o)&&Math.floor(o)===o?lm(i[0],t,o,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function lm(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function Mm(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:b1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function cm(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:b1(r)?i=r.value:i=t.getBaseValue(),i}function dm(r){let t=r.options,e=t.fill,i=P1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function pm(r){let{scale:t,index:e,line:i}=r,o=[],a=i.segments,n=i.points,V=um(t,e);V.push(eH({x:null,y:t.bottom},i));for(let s=0;s<a.length;s++){let M=a[s];for(let p=M.start;p<=M.end;p++)mm(o,n[p],V)}return new m5({points:o,options:{}})}function um(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){let a=i[o];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function mm(r,t,e){let i=[];for(let o=0;o<e.length;o++){let a=e[o],{first:n,last:V,point:s}=hm(a,t,"x");if(!(!s||n&&V)){if(n)i.unshift(s);else if(r.push(s),!V)break}}r.push(...i)}function hm(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let o=i[e],a=r.segments,n=r.points,V=!1,s=!1;for(let M=0;M<a.length;M++){let p=a[M],h=n[p.start][e],v=n[p.end][e];if(J3(o,h,v)){V=o===h,s=o===v;break}}return{first:V,last:s,point:i}}var j8=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:o,y:a,radius:n}=this;return e=e||{start:0,end:c2},t.arc(o,a,n,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:o}=this,a=t.angle;return{x:e+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}};function fm(r){let{chart:t,fill:e,line:i}=r;if(n2(e))return Am(t,e);if(e==="stack")return pm(r);if(e==="shape")return!0;let o=vm(r);return o instanceof j8?o:eH(o,i)}function Am(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function vm(r){return(r.scale||{}).getPointPositionForValue?gm(r):xm(r)}function xm(r){let{scale:t={},fill:e}=r,i=Mm(e,t);if(n2(i)){let o=t.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function gm(r){let{scale:t,fill:e}=r,i=t.options,o=t.getLabels().length,a=i.reverse?t.max:t.min,n=cm(e,t,a),V=[];if(i.grid.circular){let s=t.getPointPositionForValue(0,a);return new j8({x:s.x,y:s.y,radius:t.getDistanceFromCenterForValue(n)})}for(let s=0;s<o;++s)V.push(t.getPointPositionForValue(s,n));return V}function Lr(r,t,e){let i=fm(t),{chart:o,index:a,line:n,scale:V,axis:s}=t,M=n.options,p=M.fill,h=M.backgroundColor,{above:v=h,below:g=h}=p||{},y=o.getDatasetMeta(a),k=k8(o,y);i&&n.points.length&&(C9(r,e),_m(r,{line:n,target:i,above:v,below:g,area:e,scale:V,axis:s,clip:k}),a9(r))}function _m(r,t){let{line:e,target:i,above:o,below:a,area:n,scale:V,clip:s}=t,M=e._loop?"angle":t.axis;r.save();let p=a;a!==o&&(M==="x"?(gn(r,i,n.top),lr(r,{line:e,target:i,color:o,scale:V,property:M,clip:s}),r.restore(),r.save(),gn(r,i,n.bottom)):M==="y"&&(_n(r,i,n.left),lr(r,{line:e,target:i,color:a,scale:V,property:M,clip:s}),r.restore(),r.save(),_n(r,i,n.right),p=o)),lr(r,{line:e,target:i,color:p,scale:V,property:M,clip:s}),r.restore()}function gn(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let V of i){let{start:s,end:M}=V,p=o[s],h=o[G8(s,M,o)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(p.x,e),r.lineTo(p.x,p.y)),n=!!t.pathSegment(r,V,{move:n}),n?r.closePath():r.lineTo(h.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function _n(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let V of i){let{start:s,end:M}=V,p=o[s],h=o[G8(s,M,o)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(e,p.y),r.lineTo(p.x,p.y)),n=!!t.pathSegment(r,V,{move:n}),n?r.closePath():r.lineTo(e,h.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function lr(r,t){let{line:e,target:i,property:o,color:a,scale:n,clip:V}=t,s=Hm(e,i,o);for(let{source:M,target:p,start:h,end:v}of s){let{style:{backgroundColor:g=a}={}}=M,y=i!==!0;r.save(),r.fillStyle=g,Sm(r,n,V,y&&gr(o,h,v)),r.beginPath();let k=!!e.pathSegment(r,M),O;if(y){k?r.closePath():Sn(r,i,v,o);let E=!!i.pathSegment(r,p,{move:k,reverse:!0});O=k&&E,O||Sn(r,i,h,o)}r.closePath(),r.fill(O?"evenodd":"nonzero"),r.restore()}}function Sm(r,t,e,i){let o=t.chart.chartArea,{property:a,start:n,end:V}=i||{};if(a==="x"||a==="y"){let s,M,p,h;a==="x"?(s=n,M=o.top,p=V,h=o.bottom):(s=o.left,M=n,p=o.right,h=V),r.beginPath(),e&&(s=Math.max(s,e.left),p=Math.min(p,e.right),M=Math.max(M,e.top),h=Math.min(h,e.bottom)),r.rect(s,M,p-s,h-M),r.clip()}}function Sn(r,t,e,i){let o=t.interpolate(e,i);o&&r.lineTo(o.x,o.y)}var rH={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,o=[],a,n,V,s;for(n=0;n<i;++n)a=r.getDatasetMeta(n),V=a.dataset,s=null,V&&V.options&&V instanceof m5&&(s={visible:r.isDatasetVisible(n),index:n,fill:Lm(V,n,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:V}),a.$filler=s,o.push(s);for(n=0;n<i;++n)s=o[n],!(!s||s.fill===!1)&&(s.fill=sm(o,n,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",o=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let n=o.length-1;n>=0;--n){let V=o[n].$filler;V&&(V.line.updateControlPoints(a,V.axis),i&&V.fill&&Lr(r.ctx,V,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){let a=i[o].$filler;xn(a)&&Lr(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!xn(i)||e.drawTime!=="beforeDatasetDraw"||Lr(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var m9={average(r){if(!r.length)return!1;let t,e,i=new Set,o=0,a=0;for(t=0,e=r.length;t<e;++t){let V=r[t].element;if(V&&V.hasValue()){let s=V.tooltipPosition();i.add(s.x),o+=s.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((V,s)=>V+s)/i.size,y:o/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,o=Number.POSITIVE_INFINITY,a,n,V;for(a=0,n=r.length;a<n;++a){let s=r[a].element;if(s&&s.hasValue()){let M=s.getCenterPoint(),p=K4(t,M);p<o&&(o=p,V=s)}}if(V){let s=V.tooltipPosition();e=s.x,i=s.y}return{x:e,y:i}}};function u0(r,t){return t&&(e2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function D0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function wm(r,t){let{element:e,datasetIndex:i,index:o}=t,a=r.getDatasetMeta(i).controller,{label:n,value:V}=a.getLabelAndValue(o);return{chart:r,label:n,parsed:a.getParsed(o),raw:r.data.datasets[i].data[o],formattedValue:V,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:e}}function wn(r,t){let e=r.chart.ctx,{body:i,footer:o,title:a}=r,{boxWidth:n,boxHeight:V}=t,s=R2(t.bodyFont),M=R2(t.titleFont),p=R2(t.footerFont),h=a.length,v=o.length,g=i.length,y=W2(t.padding),k=y.height,O=0,E=i.reduce((K,G)=>K+G.before.length+G.lines.length+G.after.length,0);if(E+=r.beforeBody.length+r.afterBody.length,h&&(k+=h*M.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),E){let K=t.displayColors?Math.max(V,s.lineHeight):s.lineHeight;k+=g*K+(E-g)*s.lineHeight+(E-1)*t.bodySpacing}v&&(k+=t.footerMarginTop+v*p.lineHeight+(v-1)*t.footerSpacing);let R=0,B=function(K){O=Math.max(O,e.measureText(K).width+R)};return e.save(),e.font=M.string,z1(r.title,B),e.font=s.string,z1(r.beforeBody.concat(r.afterBody),B),R=t.displayColors?n+2+t.boxPadding:0,z1(i,K=>{z1(K.before,B),z1(K.lines,B),z1(K.after,B)}),R=0,e.font=p.string,z1(r.footer,B),e.restore(),O+=y.width,{width:O,height:k}}function bm(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function ym(r,t,e,i){let{x:o,width:a}=i,n=e.caretSize+e.caretPadding;if(r==="left"&&o+a+n>t.width||r==="right"&&o-a-n<0)return!0}function Zm(r,t,e,i){let{x:o,width:a}=e,{width:n,chartArea:{left:V,right:s}}=r,M="center";return i==="center"?M=o<=(V+s)/2?"left":"right":o<=a/2?M="left":o>=n-a/2&&(M="right"),ym(M,r,t,e)&&(M="center"),M}function bn(r,t,e){let i=e.yAlign||t.yAlign||bm(r,e);return{xAlign:e.xAlign||t.xAlign||Zm(r,t,e,i),yAlign:i}}function km(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function Om(r,t,e){let{y:i,height:o}=r;return t==="top"?i+=e:t==="bottom"?i-=o+e:i-=o/2,i}function yn(r,t,e,i){let{caretSize:o,caretPadding:a,cornerRadius:n}=r,{xAlign:V,yAlign:s}=e,M=o+a,{topLeft:p,topRight:h,bottomLeft:v,bottomRight:g}=l3(n),y=km(t,V),k=Om(t,s,M);return s==="center"?V==="left"?y+=M:V==="right"&&(y-=M):V==="left"?y-=Math.max(p,v)+o:V==="right"&&(y+=Math.max(h,g)+o),{x:k2(y,0,i.width-t.width),y:k2(k,0,i.height-t.height)}}function F8(r,t,e){let i=W2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function Zn(r){return u0([],D0(r))}function Tm(r,t,e){return p0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function kn(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var iH={beforeTitle:G5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:G5,beforeBody:G5,beforeLabel:G5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return S1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:G5,afterBody:G5,beforeFooter:G5,footer:G5,afterFooter:G5};function a5(r,t,e,i){let o=r[t].call(e,i);return typeof o>"u"?iH[t].call(e,i):o}var h9=class extends K5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,a=new I8(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Tm(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,o=a5(i,"beforeTitle",this,t),a=a5(i,"title",this,t),n=a5(i,"afterTitle",this,t),V=[];return V=u0(V,D0(o)),V=u0(V,D0(a)),V=u0(V,D0(n)),V}getBeforeBody(t,e){return Zn(a5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,o=[];return z1(t,a=>{let n={before:[],lines:[],after:[]},V=kn(i,a);u0(n.before,D0(a5(V,"beforeLabel",this,a))),u0(n.lines,a5(V,"label",this,a)),u0(n.after,D0(a5(V,"afterLabel",this,a))),o.push(n)}),o}getAfterBody(t,e){return Zn(a5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,o=a5(i,"beforeFooter",this,t),a=a5(i,"footer",this,t),n=a5(i,"afterFooter",this,t),V=[];return V=u0(V,D0(o)),V=u0(V,D0(a)),V=u0(V,D0(n)),V}_createItems(t){let e=this._active,i=this.chart.data,o=[],a=[],n=[],V=[],s,M;for(s=0,M=e.length;s<M;++s)V.push(wm(this.chart,e[s]));return t.filter&&(V=V.filter((p,h,v)=>t.filter(p,h,v,i))),t.itemSort&&(V=V.sort((p,h)=>t.itemSort(p,h,i))),z1(V,p=>{let h=kn(t.callbacks,p);o.push(a5(h,"labelColor",this,p)),a.push(a5(h,"labelPointStyle",this,p)),n.push(a5(h,"labelTextColor",this,p))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=n,this.dataPoints=V,V}update(t,e){let i=this.options.setContext(this.getContext()),o=this._active,a,n=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{let V=m9[i.position].call(this,o,this._eventPosition);n=this._createItems(i),this.title=this.getTitle(n,i),this.beforeBody=this.getBeforeBody(n,i),this.body=this.getBody(n,i),this.afterBody=this.getAfterBody(n,i),this.footer=this.getFooter(n,i);let s=this._size=wn(this,i),M=Object.assign({},V,s),p=bn(this.chart,i,M),h=yn(i,M,p,this.chart);this.xAlign=p.xAlign,this.yAlign=p.yAlign,a={opacity:1,x:h.x,y:h.y,width:s.width,height:s.height,caretX:V.x,caretY:V.y}}this._tooltipItems=n,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){let a=this.getCaretPosition(t,i,o);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:o,yAlign:a}=this,{caretSize:n,cornerRadius:V}=i,{topLeft:s,topRight:M,bottomLeft:p,bottomRight:h}=l3(V),{x:v,y:g}=t,{width:y,height:k}=e,O,E,R,B,K,G;return a==="center"?(K=g+k/2,o==="left"?(O=v,E=O-n,B=K+n,G=K-n):(O=v+y,E=O+n,B=K-n,G=K+n),R=O):(o==="left"?E=v+Math.max(s,p)+n:o==="right"?E=v+y-Math.max(M,h)-n:E=this.caretX,a==="top"?(B=g,K=B-n,O=E-n,R=E+n):(B=g+k,K=B+n,O=E+n,R=E-n),G=B),{x1:O,x2:E,x3:R,y1:B,y2:K,y3:G}}drawTitle(t,e,i){let o=this.title,a=o.length,n,V,s;if(a){let M=L9(i.rtl,this.x,this.width);for(t.x=F8(this,i.titleAlign,i),e.textAlign=M.textAlign(i.titleAlign),e.textBaseline="middle",n=R2(i.titleFont),V=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string,s=0;s<a;++s)e.fillText(o[s],M.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+V,s+1===a&&(t.y+=i.titleMarginBottom-V)}}_drawColorBox(t,e,i,o,a){let n=this.labelColors[i],V=this.labelPointStyles[i],{boxHeight:s,boxWidth:M}=a,p=R2(a.bodyFont),h=F8(this,"left",a),v=o.x(h),g=s<p.lineHeight?(p.lineHeight-s)/2:0,y=e.y+g;if(a.usePointStyle){let k={radius:Math.min(M,s)/2,pointStyle:V.pointStyle,rotation:V.rotation,borderWidth:1},O=o.leftForLtr(v,M)+M/2,E=y+s/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,o9(t,k,O,E),t.strokeStyle=n.borderColor,t.fillStyle=n.backgroundColor,o9(t,k,O,E)}else{t.lineWidth=b1(n.borderWidth)?Math.max(...Object.values(n.borderWidth)):n.borderWidth||1,t.strokeStyle=n.borderColor,t.setLineDash(n.borderDash||[]),t.lineDashOffset=n.borderDashOffset||0;let k=o.leftForLtr(v,M),O=o.leftForLtr(o.xPlus(v,1),M-2),E=l3(n.borderRadius);Object.values(E).some(R=>R!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,Y7(t,{x:k,y,w:M,h:s,radius:E}),t.fill(),t.stroke(),t.fillStyle=n.backgroundColor,t.beginPath(),Y7(t,{x:O,y:y+1,w:M-2,h:s-2,radius:E}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(k,y,M,s),t.strokeRect(k,y,M,s),t.fillStyle=n.backgroundColor,t.fillRect(O,y+1,M-2,s-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:o}=this,{bodySpacing:a,bodyAlign:n,displayColors:V,boxHeight:s,boxWidth:M,boxPadding:p}=i,h=R2(i.bodyFont),v=h.lineHeight,g=0,y=L9(i.rtl,this.x,this.width),k=function(C1){e.fillText(C1,y.x(t.x+g),t.y+v/2),t.y+=v+a},O=y.textAlign(n),E,R,B,K,G,c1,J;for(e.textAlign=n,e.textBaseline="middle",e.font=h.string,t.x=F8(this,O,i),e.fillStyle=i.bodyColor,z1(this.beforeBody,k),g=V&&O!=="right"?n==="center"?M/2+p:M+2+p:0,K=0,c1=o.length;K<c1;++K){for(E=o[K],R=this.labelTextColors[K],e.fillStyle=R,z1(E.before,k),B=E.lines,V&&B.length&&(this._drawColorBox(e,t,K,y,i),v=Math.max(h.lineHeight,s)),G=0,J=B.length;G<J;++G)k(B[G]),v=h.lineHeight;z1(E.after,k)}g=0,v=h.lineHeight,z1(this.afterBody,k),t.y-=a}drawFooter(t,e,i){let o=this.footer,a=o.length,n,V;if(a){let s=L9(i.rtl,this.x,this.width);for(t.x=F8(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=s.textAlign(i.footerAlign),e.textBaseline="middle",n=R2(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,V=0;V<a;++V)e.fillText(o[V],s.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){let{xAlign:a,yAlign:n}=this,{x:V,y:s}=t,{width:M,height:p}=i,{topLeft:h,topRight:v,bottomLeft:g,bottomRight:y}=l3(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(V+h,s),n==="top"&&this.drawCaret(t,e,i,o),e.lineTo(V+M-v,s),e.quadraticCurveTo(V+M,s,V+M,s+v),n==="center"&&a==="right"&&this.drawCaret(t,e,i,o),e.lineTo(V+M,s+p-y),e.quadraticCurveTo(V+M,s+p,V+M-y,s+p),n==="bottom"&&this.drawCaret(t,e,i,o),e.lineTo(V+g,s+p),e.quadraticCurveTo(V,s+p,V,s+p-g),n==="center"&&a==="left"&&this.drawCaret(t,e,i,o),e.lineTo(V,s+h),e.quadraticCurveTo(V,s,V+h,s),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){let n=m9[t.position].call(this,this._active,this._eventPosition);if(!n)return;let V=this._size=wn(this,t),s=Object.assign({},n,this._size),M=bn(e,t,s),p=yn(t,s,M,e);(o._to!==p.x||a._to!==p.y)&&(this.xAlign=M.xAlign,this.yAlign=M.yAlign,this.width=V.width,this.height=V.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,p))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let n=W2(e.padding),V=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&V&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,o,e),Je(t,e.textDirection),a.y+=n.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),tr(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,o=t.map(({datasetIndex:V,index:s})=>{let M=this.chart.getDatasetMeta(V);if(!M)throw new Error("Cannot find a dataset at index "+V);return{datasetIndex:V,element:M.data[s],index:s}}),a=!G7(i,o),n=this._positionChanged(o,e);(a||n)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let o=this.options,a=this._active||[],n=this._getActiveElements(t,a,e,i),V=this._positionChanged(n,t),s=e||!G7(n,a)||V;return s&&(this._active=n,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,i,o){let a=this.options;if(t.type==="mouseout")return[];if(!o)return e.filter(V=>this.chart.data.datasets[V.datasetIndex]&&this.chart.getDatasetMeta(V.datasetIndex).controller.getParsed(V.index)!==void 0);let n=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&n.reverse(),n}_positionChanged(t,e){let{caretX:i,caretY:o,options:a}=this,n=m9[a.position].call(this,t,e);return n!==!1&&(i!==n.x||o!==n.y)}};z(h9,"positioners",m9);var oH={id:"tooltip",_element:h9,positioners:m9,afterInit(r,t,e){e&&(r.tooltip=new h9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:iH},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var Pm=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Em(r,t,e,i){let o=r.indexOf(t);if(o===-1)return Pm(r,t,e,i);let a=r.lastIndexOf(t);return o!==a?e:o}var Fm=(r,t)=>r===null?null:k2(Math.round(r),0,t);function On(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var J7=class extends r7{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:o,label:a}of e)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(S1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:Em(i,t,P1(e,t),this._addedLabels),Fm(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,o=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let n=t;n<=e;n++)o.push({value:n});return o}getLabelForValue(t){return On.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};z(J7,"id","category"),z(J7,"defaults",{ticks:{callback:On}});function $m(r,t){let e=[],{bounds:o,step:a,min:n,max:V,precision:s,count:M,maxTicks:p,maxDigits:h,includeBounds:v}=r,g=a||1,y=p-1,{min:k,max:O}=t,E=!S1(n),R=!S1(V),B=!S1(M),K=(O-k)/(h+1),G=L8((O-k)/y/g)*g,c1,J,C1,i1;if(G<1e-14&&!E&&!R)return[{value:k},{value:O}];i1=Math.ceil(O/G)-Math.floor(k/G),i1>y&&(G=L8(i1*G/y/g)*g),S1(s)||(c1=Math.pow(10,s),G=Math.ceil(G*c1)/c1),o==="ticks"?(J=Math.floor(k/G)*G,C1=Math.ceil(O/G)*G):(J=k,C1=O),E&&R&&a&&Oe((V-n)/a,G/1e3)?(i1=Math.round(Math.min((V-n)/G,p)),G=(V-n)/i1,J=n,C1=V):B?(J=E?n:J,C1=R?V:C1,i1=M-1,G=(C1-J)/i1):(i1=(C1-J)/G,K3(i1,Math.round(i1),G/1e3)?i1=Math.round(i1):i1=Math.ceil(i1));let m1=Math.max(M8(G),M8(J));c1=Math.pow(10,S1(s)?m1:s),J=Math.round(J*c1)/c1,C1=Math.round(C1*c1)/c1;let I1=0;for(E&&(v&&J!==n?(e.push({value:n}),J<n&&I1++,K3(Math.round((J+I1*G)*c1)/c1,n,Tn(n,K,r))&&I1++):J<n&&I1++);I1<i1;++I1){let y1=Math.round((J+I1*G)*c1)/c1;if(R&&y1>V)break;e.push({value:y1})}return R&&v&&C1!==V?e.length&&K3(e[e.length-1].value,V,Tn(V,K,r))?e[e.length-1].value=V:e.push({value:V}):(!R||C1===V)&&e.push({value:C1}),e}function Tn(r,t,{horizontal:e,minRotation:i}){let o=d0(i),a=(e?Math.sin(o):Math.cos(o))||.001,n=.75*t*(""+r).length;return Math.min(t/a,n)}var e4=class extends r7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return S1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:o,max:a}=this,n=s=>o=e?o:s,V=s=>a=i?a:s;if(t){let s=P5(o),M=P5(a);s<0&&M<0?V(0):s>0&&M>0&&n(0)}if(o===a){let s=a===0?1:Math.abs(a*.05);V(a+s),t||n(o-s)}this.min=o,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),e=e||11),e&&(o=Math.min(e,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let o={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,n=$m(o,a);return t.bounds==="ticks"&&l8(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return r9(t,this.chart.options.locale,this.options.ticks.format)}},p3=class extends e4{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=n2(t)?t:0,this.max=n2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=d0(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};z(p3,"id","linear"),z(p3,"defaults",{ticks:{callback:i9.formatters.numeric}});var A9=r=>Math.floor(c0(r)),e7=(r,t)=>Math.pow(10,A9(r)+t);function Pn(r){return r/Math.pow(10,A9(r))===1}function En(r,t,e){let i=Math.pow(10,e),o=Math.floor(r/i);return Math.ceil(t/i)-o}function Dm(r,t){let e=t-r,i=A9(e);for(;En(r,t,i)>10;)i++;for(;En(r,t,i)<10;)i--;return Math.min(i,A9(r))}function Rm(r,{min:t,max:e}){t=J2(r.min,t);let i=[],o=A9(t),a=Dm(t,e),n=a<0?Math.pow(10,Math.abs(a)):1,V=Math.pow(10,a),s=o>a?Math.pow(10,o):0,M=Math.round((t-s)*n)/n,p=Math.floor((t-s)/V/10)*V*10,h=Math.floor((M-p)/Math.pow(10,a)),v=J2(r.min,Math.round((s+p+h*Math.pow(10,a))*n)/n);for(;v<e;)i.push({value:v,major:Pn(v),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,n=a>=0?1:n),v=Math.round((s+p+h*Math.pow(10,a))*n)/n;let g=J2(r.max,v);return i.push({value:g,major:Pn(g),significand:h}),i}var $8=class extends r7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=e4.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return n2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=n2(t)?Math.max(0,t):null,this.max=n2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!n2(this._userMin)&&(this.min=t===e7(this.min,0)?e7(this.min,-1):e7(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,o=this.max,a=V=>i=t?i:V,n=V=>o=e?o:V;i===o&&(i<=0?(a(1),n(10)):(a(e7(i,-1)),n(e7(o,1)))),i<=0&&a(e7(o,-1)),o<=0&&n(e7(i,1)),this.min=i,this.max=o}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=Rm(e,this);return t.bounds==="ticks"&&l8(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":r9(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=c0(t),this._valueRange=c0(this.max)-c0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(c0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};z($8,"id","logarithmic"),z($8,"defaults",{ticks:{callback:i9.formatters.logarithmic,major:{enabled:!0}}});function _r(r){let t=r.ticks;if(t.display&&r.display){let e=W2(t.backdropPadding);return P1(t.font&&t.font.size,H2.font.size)+e.height}return 0}function Bm(r,t,e){return e=e2(e)?e:[e],{w:ze(r,t.string,e),h:e.length*t.lineHeight}}function Fn(r,t,e,i,o){return r===i||r===o?{start:t-e/2,end:t+e/2}:r<i||r>o?{start:t-e,end:t}:{start:t,end:t+e}}function zm(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],o=[],a=r._pointLabels.length,n=r.options.pointLabels,V=n.centerPointLabels?Q1/a:0;for(let s=0;s<a;s++){let M=n.setContext(r.getPointLabelContext(s));o[s]=M.padding;let p=r.getPointPosition(s,r.drawingArea+o[s],V),h=R2(M.font),v=Bm(r.ctx,h,r._pointLabels[s]);i[s]=v;let g=Z2(r.getIndexAngle(s)+V),y=Math.round(J4(g)),k=Fn(y,p.x,v.w,0,180),O=Fn(y,p.y,v.h,90,270);Im(e,t,g,k,O)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=Um(r,i,o)}function Im(r,t,e,i,o){let a=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e)),V=0,s=0;i.start<t.l?(V=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-V)):i.end>t.r&&(V=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+V)),o.start<t.t?(s=(t.t-o.start)/n,r.t=Math.min(r.t,t.t-s)):o.end>t.b&&(s=(o.end-t.b)/n,r.b=Math.max(r.b,t.b+s))}function Nm(r,t,e){let i=r.drawingArea,{extra:o,additionalAngle:a,padding:n,size:V}=e,s=r.getPointPosition(t,i+o+n,a),M=Math.round(J4(Z2(s.angle+m2))),p=qm(s.y,V.h,M),h=jm(M),v=Gm(s.x,V.w,h);return{visible:!0,x:s.x,y:p,textAlign:h,left:v,top:p,right:v+V.w,bottom:p+V.h}}function Wm(r,t){if(!t)return!0;let{left:e,top:i,right:o,bottom:a}=r;return!(j5({x:e,y:i},t)||j5({x:e,y:a},t)||j5({x:o,y:i},t)||j5({x:o,y:a},t))}function Um(r,t,e){let i=[],o=r._pointLabels.length,a=r.options,{centerPointLabels:n,display:V}=a.pointLabels,s={extra:_r(a)/2,additionalAngle:n?Q1/o:0},M;for(let p=0;p<o;p++){s.padding=e[p],s.size=t[p];let h=Nm(r,p,s);i.push(h),V==="auto"&&(h.visible=Wm(h,M),h.visible&&(M=h))}return i}function jm(r){return r===0||r===180?"center":r<180?"left":"right"}function Gm(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function qm(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function Ym(r,t,e){let{left:i,top:o,right:a,bottom:n}=e,{backdropColor:V}=t;if(!S1(V)){let s=l3(t.borderRadius),M=W2(t.backdropPadding);r.fillStyle=V;let p=i-M.left,h=o-M.top,v=a-i+M.width,g=n-o+M.height;Object.values(s).some(y=>y!==0)?(r.beginPath(),Y7(r,{x:p,y:h,w:v,h:g,radius:s}),r.fill()):r.fillRect(p,h,v,g)}}function Qm(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let o=t-1;o>=0;o--){let a=r._pointLabelItems[o];if(!a.visible)continue;let n=i.setContext(r.getPointLabelContext(o));Ym(e,n,a);let V=R2(n.font),{x:s,y:M,textAlign:p}=a;q7(e,r._pointLabels[o],s,M+V.lineHeight/2,V,{color:n.color,textAlign:p,textBaseline:"middle"})}}function CH(r,t,e,i){let{ctx:o}=r;if(e)o.arc(r.xCenter,r.yCenter,t,0,c2);else{let a=r.getPointPosition(0,t);o.moveTo(a.x,a.y);for(let n=1;n<i;n++)a=r.getPointPosition(n,t),o.lineTo(a.x,a.y)}}function Km(r,t,e,i,o){let a=r.ctx,n=t.circular,{color:V,lineWidth:s}=t;!n&&!i||!V||!s||e<0||(a.save(),a.strokeStyle=V,a.lineWidth=s,a.setLineDash(o.dash||[]),a.lineDashOffset=o.dashOffset,a.beginPath(),CH(r,e,n,i),a.closePath(),a.stroke(),a.restore())}function Xm(r,t,e){return p0(r,{label:e,index:t,type:"pointLabel"})}var K7=class extends e4{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=W2(_r(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=n2(t)&&!isNaN(t)?t:0,this.max=n2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/_r(this.options))}generateTickLabels(t){e4.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let o=J1(this.options.pointLabels.callback,[e,i],this);return o||o===0?o:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?zm(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){let e=c2/(this._pointLabels.length||1),i=this.options.startAngle||0;return Z2(t*e+d0(i))}getDistanceFromCenterForValue(t){if(S1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(S1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return Xm(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let o=this.getIndexAngle(t)-m2+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:o,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),CH(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:o,border:a}=e,n=this._pointLabels.length,V,s,M;if(e.pointLabels.display&&Qm(this,n),o.display&&this.ticks.forEach((p,h)=>{if(h!==0||h===0&&this.min<0){s=this.getDistanceFromCenterForValue(p.value);let v=this.getContext(h),g=o.setContext(v),y=a.setContext(v);Km(this,g,s,n,y)}}),i.display){for(t.save(),V=n-1;V>=0;V--){let p=i.setContext(this.getPointLabelContext(V)),{color:h,lineWidth:v}=p;!v||!h||(t.lineWidth=v,t.strokeStyle=h,t.setLineDash(p.borderDash),t.lineDashOffset=p.borderDashOffset,s=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),M=this.getPointPosition(V,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(M.x,M.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let o=this.getIndexAngle(0),a,n;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((V,s)=>{if(s===0&&this.min>=0&&!e.reverse)return;let M=i.setContext(this.getContext(s)),p=R2(M.font);if(a=this.getDistanceFromCenterForValue(this.ticks[s].value),M.showLabelBackdrop){t.font=p.string,n=t.measureText(V.label).width,t.fillStyle=M.backdropColor;let h=W2(M.backdropPadding);t.fillRect(-n/2-h.left,-a-p.size/2-h.top,n+h.width,p.size+h.height)}q7(t,V.label,0,-a,p,{color:M.color,strokeColor:M.textStrokeColor,strokeWidth:M.textStrokeWidth})}),t.restore()}drawTitle(){}};z(K7,"id","radialLinear"),z(K7,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:i9.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),z(K7,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),z(K7,"descriptors",{angleLines:{_fallback:"grid"}});var q8={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},n5=Object.keys(q8);function $n(r,t){return r-t}function Dn(r,t){if(S1(t))return null;let e=r._adapter,{parser:i,round:o,isoWeekday:a}=r._parseOpts,n=t;return typeof i=="function"&&(n=i(n)),n2(n)||(n=typeof i=="string"?e.parse(n,i):e.parse(n)),n===null?null:(o&&(n=o==="week"&&(X3(a)||a===!0)?e.startOf(n,"isoWeek",a):e.startOf(n,o)),+n)}function Rn(r,t,e,i){let o=n5.length;for(let a=n5.indexOf(r);a<o-1;++a){let n=q8[n5[a]],V=n.steps?n.steps:Number.MAX_SAFE_INTEGER;if(n.common&&Math.ceil((e-t)/(V*n.size))<=i)return n5[a]}return n5[o-1]}function Jm(r,t,e,i,o){for(let a=n5.length-1;a>=n5.indexOf(e);a--){let n=n5[a];if(q8[n].common&&r._adapter.diff(o,i,n)>=t-1)return n}return n5[e?n5.indexOf(e):0]}function th(r){for(let t=n5.indexOf(r)+1,e=n5.length;t<e;++t)if(q8[n5[t]].common)return n5[t]}function Bn(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:o}=e9(e,t),a=e[i]>=t?e[i]:e[o];r[a]=!0}}function eh(r,t,e,i){let o=r._adapter,a=+o.startOf(t[0].value,i),n=t[t.length-1].value,V,s;for(V=a;V<=n;V=+o.add(V,1,i))s=e[V],s>=0&&(t[s].major=!0);return t}function zn(r,t,e){let i=[],o={},a=t.length,n,V;for(n=0;n<a;++n)V=t[n],o[V]=n,i.push({value:V,major:!1});return a===0||!e?i:eh(r,i,o,e)}var t4=class extends r7{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),o=this._adapter=new Dp._date(t.adapters.date);o.init(e),Y3(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Dn(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:o,max:a,minDefined:n,maxDefined:V}=this.getUserBounds();function s(M){!n&&!isNaN(M.min)&&(o=Math.min(o,M.min)),!V&&!isNaN(M.max)&&(a=Math.max(a,M.max))}(!n||!V)&&(s(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&s(this.getMinMax(!1))),o=n2(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),a=n2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);let a=this.min,n=this.max,V=Ee(o,a,n);return this._unit=e.unit||(i.autoSkip?Rn(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Jm(this,V.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:th(this._unit),this.initOffsets(o),t.reverse&&V.reverse(),zn(this,V,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,o,a;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?e=1-o:e=(this.getDecimalForValue(t[1])-o)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let n=t.length<3?.5:.25;e=k2(e,0,n),i=k2(i,0,n),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,o=this.options,a=o.time,n=a.unit||Rn(a.minUnit,e,i,this._getLabelCapacity(e)),V=P1(o.ticks.stepSize,1),s=n==="week"?a.isoWeekday:!1,M=X3(s)||s===!0,p={},h=e,v,g;if(M&&(h=+t.startOf(h,"isoWeek",s)),h=+t.startOf(h,M?"day":n),t.diff(i,e,n)>1e5*V)throw new Error(e+" and "+i+" are too far apart with stepSize of "+V+" "+n);let y=o.ticks.source==="data"&&this.getDataTimestamps();for(v=h,g=0;v<i;v=+t.add(v,V,n),g++)Bn(p,v,y);return(v===i||o.bounds==="ticks"||g===1)&&Bn(p,v,y),Object.keys(p).sort($n).map(k=>+k)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let o=this.options.time.displayFormats,a=this._unit,n=e||o[a];return this._adapter.format(t,n)}_tickFormatFunction(t,e,i,o){let a=this.options,n=a.ticks.callback;if(n)return J1(n,[t,e,i],this);let V=a.time.displayFormats,s=this._unit,M=this._majorUnit,p=s&&V[s],h=M&&V[M],v=i[e],g=M&&h&&v&&v.major;return this._adapter.format(t,o||(g?h:p))}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,o=d0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(o),n=Math.sin(o),V=this._resolveTickFontOptions(0).size;return{w:i*a+V*n,h:i*n+V*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,zn(this,[t],this._majorUnit),o),n=this._getLabelSize(a),V=Math.floor(this.isHorizontal()?this.width/n.w:this.height/n.h)-1;return V>0?V:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(e=0,i=o.length;e<i;++e)t=t.concat(o[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(Dn(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return p8(t.sort($n))}};z(t4,"id","time"),z(t4,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function D8(r,t,e){let i=0,o=r.length-1,a,n,V,s;e?(t>=r[i].pos&&t<=r[o].pos&&({lo:i,hi:o}=E0(r,"pos",t)),{pos:a,time:V}=r[i],{pos:n,time:s}=r[o]):(t>=r[i].time&&t<=r[o].time&&({lo:i,hi:o}=E0(r,"time",t)),{time:a,pos:V}=r[i],{time:n,pos:s}=r[o]);let M=n-a;return M?V+(s-V)*(t-a)/M:V}var R8=class extends t4{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=D8(e,this.min),this._tableRange=D8(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,o=[],a=[],n,V,s,M,p;for(n=0,V=t.length;n<V;++n)M=t[n],M>=e&&M<=i&&o.push(M);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(n=0,V=o.length;n<V;++n)p=o[n+1],s=o[n-1],M=o[n],Math.round((p+s)/2)!==M&&a.push({time:M,pos:n/(V-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(D8(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return D8(this._table,i*this._tableRange+this._minPos,!0)}};z(R8,"id","timeseries"),z(R8,"defaults",t4.defaults);var aH=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),g9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):S1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),o=i.length,a=r.font,n=0,V;for(r.font=e.string,V=0;V<o;++V)n=Math.max(r.measureText(i[V]).width,n);return r.font=a,{height:o*e.lineHeight,width:n}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],o,a,n,V;for(o=0,n=t.length;o<n;++o)V=t[o],a=e.indexOf(V),a===-1?i.push([V,1]):e.splice(a,1);for(o=0,n=e.length;o<n;++o)i.push([e[o],-1]);return i},rasterize:function(r){return Math.round(r*aH)/aH}};function Sr(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var o=r.x-e,a=r.y-i,n=Math.sqrt(o*o+a*a);return{x:n?o/n:0,y:n?a/n:-1}}function rh(r,t,e,i,o){switch(o){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:o*=Math.PI/180,e=Math.cos(o),i=Math.sin(o);break}return{x:r,y:t,vx:e,vy:i}}var ih=0,HH=1,VH=2,sH=4,LH=8;function Y8(r,t,e){var i=ih;return r<e.left?i|=HH:r>e.right&&(i|=VH),t<e.top?i|=LH:t>e.bottom&&(i|=sH),i}function oh(r,t){for(var e=r.x0,i=r.y0,o=r.x1,a=r.y1,n=Y8(e,i,t),V=Y8(o,a,t),s,M,p;!(!(n|V)||n&V);)s=n||V,s&LH?(M=e+(o-e)*(t.top-i)/(a-i),p=t.top):s&sH?(M=e+(o-e)*(t.bottom-i)/(a-i),p=t.bottom):s&VH?(p=i+(a-i)*(t.right-e)/(o-e),M=t.right):s&HH&&(p=i+(a-i)*(t.left-e)/(o-e),M=t.left),s===n?(e=M,i=p,n=Y8(e,i,t)):(o=M,a=p,V=Y8(o,a,t));return{x0:e,x1:o,y0:i,y1:a}}function Q8(r,t){var e=t.anchor,i=r,o,a;return t.clamp&&(i=oh(i,t.area)),e==="start"?(o=i.x0,a=i.y0):e==="end"?(o=i.x1,a=i.y1):(o=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),rh(o,a,r.vx,r.vy,t.align)}var K8={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),o=Math.sin(e),a=r.innerRadius,n=r.outerRadius;return Q8({x0:r.x+i*a,y0:r.y+o*a,x1:r.x+i*n,y1:r.y+o*n,vx:i,vy:o},t)},point:function(r,t){var e=Sr(r,t.origin),i=e.x*r.options.radius,o=e.y*r.options.radius;return Q8({x0:r.x-i,y0:r.y-o,x1:r.x+i,y1:r.y+o,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=Sr(r,t.origin),i=r.x,o=r.y,a=0,n=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(o=Math.min(r.y,r.base),n=Math.abs(r.base-r.y)),Q8({x0:i,y0:o+n,x1:i+a,y1:o,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=Sr(r,t.origin);return Q8({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},z0=g9.rasterize;function Ch(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,o=r.size.width,a=-o/2,n=-i/2;return{frame:{x:a-e.left-t,y:n-e.top-t,w:o+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:n,w:o,h:i}}}function ah(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function nh(r){return r instanceof M3?K8.arc:r instanceof Y5?K8.point:r instanceof Q5?K8.bar:K8.fallback}function Hh(r,t,e,i,o,a){var n=Math.PI/2;if(a){var V=Math.min(a,o/2,i/2),s=t+V,M=e+V,p=t+i-V,h=e+o-V;r.moveTo(t,M),s<p&&M<h?(r.arc(s,M,V,-Math.PI,-n),r.arc(p,M,V,-n,0),r.arc(p,h,V,0,n),r.arc(s,h,V,n,Math.PI)):s<p?(r.moveTo(s,e),r.arc(p,M,V,-n,n),r.arc(s,M,V,n,Math.PI+n)):M<h?(r.arc(s,M,V,-Math.PI,0),r.arc(s,h,V,0,Math.PI)):r.arc(s,M,V,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,o)}function Vh(r,t,e){var i=e.backgroundColor,o=e.borderColor,a=e.borderWidth;!i&&(!o||!a)||(r.beginPath(),Hh(r,z0(t.x)+a/2,z0(t.y)+a/2,z0(t.w)-a,z0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),o&&a&&(r.strokeStyle=o,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function sh(r,t,e){var i=e.lineHeight,o=r.w,a=r.x,n=r.y+i/2;return t==="center"?a+=o/2:(t==="end"||t==="right")&&(a+=o),{h:i,w:o,x:a,y:n}}function Lh(r,t,e){var i=r.shadowBlur,o=e.stroked,a=z0(e.x),n=z0(e.y),V=z0(e.w);o&&r.strokeText(t,a,n,V),e.filled&&(i&&o&&(r.shadowBlur=0),r.fillText(t,a,n,V),i&&o&&(r.shadowBlur=i))}function lh(r,t,e,i){var o=i.textAlign,a=i.color,n=!!a,V=i.font,s=t.length,M=i.textStrokeColor,p=i.textStrokeWidth,h=M&&p,v;if(!(!s||!n&&!h))for(e=sh(e,o,V),r.font=V.string,r.textAlign=o,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,n&&(r.fillStyle=a),h&&(r.lineJoin="round",r.lineWidth=p,r.strokeStyle=M),v=0,s=t.length;v<s;++v)Lh(r,t[v],{stroked:h,filled:n,w:e.w,x:e.x,y:e.y+e.h*v})}var lH=function(r,t,e,i){var o=this;o._config=r,o._index=i,o._model=null,o._rects=null,o._ctx=t,o._el=e};u5(lH.prototype,{_modelize:function(r,t,e,i){var o=this,a=o._index,n=R2(t2([e.font,{}],i,a)),V=t2([e.color,H2.color],i,a);return{align:t2([e.align,"center"],i,a),anchor:t2([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:t2([e.backgroundColor,null],i,a),borderColor:t2([e.borderColor,null],i,a),borderRadius:t2([e.borderRadius,0],i,a),borderWidth:t2([e.borderWidth,0],i,a),clamp:t2([e.clamp,!1],i,a),clip:t2([e.clip,!1],i,a),color:V,display:r,font:n,lines:t,offset:t2([e.offset,4],i,a),opacity:t2([e.opacity,1],i,a),origin:ah(o._el,i),padding:W2(t2([e.padding,4],i,a)),positioner:nh(o._el),rotation:t2([e.rotation,0],i,a)*(Math.PI/180),size:g9.textSize(o._ctx,t,n),textAlign:t2([e.textAlign,"start"],i,a),textShadowBlur:t2([e.textShadowBlur,0],i,a),textShadowColor:t2([e.textShadowColor,V],i,a),textStrokeColor:t2([e.textStrokeColor,V],i,a),textStrokeWidth:t2([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,o=t._index,a=t._config,n,V,s,M=t2([a.display,!0],r,o);M&&(n=r.dataset.data[o],V=P1(J1(a.formatter,[n,r]),n),s=S1(V)?[]:g9.toTextLines(V),s.length&&(e=t._modelize(M,s,a,r),i=Ch(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,o=e._model,a=e._rects,n;this.visible()&&(i.save(),o.clip&&(n=o.area,i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()),i.globalAlpha=g9.bound(0,o.opacity,1),i.translate(z0(t.x),z0(t.y)),i.rotate(o.rotation),Vh(i,a.frame,o),lh(i,o.lines,a.text,o),i.restore())}});var Mh=Number.MIN_SAFE_INTEGER||-9007199254740991,ch=Number.MAX_SAFE_INTEGER||9007199254740991;function x9(r,t,e){var i=Math.cos(e),o=Math.sin(e),a=t.x,n=t.y;return{x:a+i*(r.x-a)-o*(r.y-n),y:n+o*(r.x-a)+i*(r.y-n)}}function nH(r,t){var e=ch,i=Mh,o=t.origin,a,n,V,s,M;for(a=0;a<r.length;++a)n=r[a],V=n.x-o.x,s=n.y-o.y,M=t.vx*V+t.vy*s,e=Math.min(e,M),i=Math.max(i,M);return{min:e,max:i}}function X8(r,t){var e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/o,vy:(t.y-r.y)/o,origin:r,ln:o}}var MH=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};u5(MH.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=x9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[X8(t[0],t[1]),X8(t[0],t[3])],o,a,n;for(this._rotation!==r._rotation&&i.push(X8(e[0],e[1]),X8(e[0],e[3])),o=0;o<i.length;++o)if(a=nH(t,i[o]),n=nH(e,i[o]),a.max<n.min||n.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[x9({x:t.x,y:t.y},i,e),x9({x:t.x+t.w,y:t.y},i,e),x9({x:t.x+t.w,y:t.y+t.h},i,e),x9({x:t.x,y:t.y+t.h},i,e)]}});function cH(r,t,e){var i=t.positioner(r,t),o=i.vx,a=i.vy;if(!o&&!a)return{x:i.x,y:i.y};var n=e.w,V=e.h,s=t.rotation,M=Math.abs(n/2*Math.cos(s))+Math.abs(V/2*Math.sin(s)),p=Math.abs(n/2*Math.sin(s))+Math.abs(V/2*Math.cos(s)),h=1/Math.max(Math.abs(o),Math.abs(a));return M*=o*h,p*=a*h,M+=t.offset*o,p+=t.offset*a,{x:i.x+M,y:i.y+p}}function dh(r,t){var e,i,o,a;for(e=r.length-1;e>=0;--e)for(o=r[e].$layout,i=e-1;i>=0&&o._visible;--i)a=r[i].$layout,a._visible&&o._box.intersects(a._box)&&t(o,a);return r}function ph(r){var t,e,i,o,a,n,V;for(t=0,e=r.length;t<e;++t)i=r[t],o=i.$layout,o._visible&&(V=new Proxy(i._el,{get:(s,M)=>s.getProps([M],!0)[M]}),a=i.geometry(),n=cH(V,i.model(),a),o._box.update(n,a,i.rotation()));return dh(r,function(s,M){var p=s._hidable,h=M._hidable;p&&h||h?M._visible=!1:p&&(s._visible=!1)})}var _9={prepare:function(r){var t=[],e,i,o,a,n;for(e=0,o=r.length;e<o;++e)for(i=0,a=r[e].length;i<a;++i)n=r[e][i],t.push(n),n.$layout={_box:new MH,_hidable:!1,_visible:!0,_set:e,_idx:n._index};return t.sort(function(V,s){var M=V.$layout,p=s.$layout;return M._idx===p._idx?p._set-M._set:p._idx-M._idx}),this.update(t),t},update:function(r){var t=!1,e,i,o,a,n;for(e=0,i=r.length;e<i;++e)o=r[e],a=o.model(),n=o.$layout,n._hidable=a&&a.display==="auto",n._visible=o.visible(),t|=n._hidable;t&&ph(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,o,a,n,V;for(e=0,i=t.length;e<i;++e)o=t[e],a=o.$layout,a._visible&&(n=o.geometry(),V=cH(o._el,o.model(),n),a._box.update(V,n,o.rotation()),o.draw(r,V))}},uh=function(r){if(S1(r))return null;var t=r,e,i,o;if(b1(r))if(!S1(r.label))t=r.label;else if(!S1(r.r))t=r.r;else for(t="",e=Object.keys(r),o=0,i=e.length;o<i;++o)t+=(o!==0?", ":"")+e[o]+": "+r[e[o]];return""+t},mh={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:uh,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},H5="$datalabels",dH="$default";function hh(r,t){var e=r.datalabels,i={},o=[],a,n;return e===!1?null:(e===!0&&(e={}),t=u5({},[t,e]),a=t.labels||{},n=Object.keys(a),delete t.labels,n.length?n.forEach(function(V){a[V]&&o.push(u5({},[t,a[V],{_key:V}]))}):o.push(t),i=o.reduce(function(V,s){return z1(s.listeners||{},function(M,p){V[p]=V[p]||{},V[p][s._key||dH]=M}),delete s.listeners,V},{}),{labels:o,listeners:i})}function wr(r,t,e,i){if(t){var o=e.$context,a=e.$groups,n;t[a._set]&&(n=t[a._set][a._key],n&&J1(n,[o,i])===!0&&(r[H5]._dirty=!0,e.update(o)))}}function fh(r,t,e,i,o){var a,n;!e&&!i||(e?i?e!==i&&(n=a=!0):n=!0:a=!0,n&&wr(r,t.leave,e,o),a&&wr(r,t.enter,i,o))}function Ah(r,t){var e=r[H5],i=e._listeners,o,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=_9.lookup(e._labels,t);else if(t.type!=="mouseout")return;o=e._hovered,e._hovered=a,fh(r,i,o,a,t)}}function vh(r,t){var e=r[H5],i=e._listeners.click,o=i&&_9.lookup(e._labels,t);o&&wr(r,i,o,t)}var pH={id:"datalabels",defaults:mh,beforeInit:function(r){r[H5]={_actives:[]}},beforeUpdate:function(r){var t=r[H5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,o=r[H5],a=o._datasets[i]=[],n=r.isDatasetVisible(i),V=r.data.datasets[i],s=hh(V,e),M=t.meta.data||[],p=r.ctx,h,v,g,y,k,O,E,R;for(p.save(),h=0,g=M.length;h<g;++h)if(E=M[h],E[H5]=[],n&&E&&r.getDataVisibility(h)&&!E.skip)for(v=0,y=s.labels.length;v<y;++v)k=s.labels[v],O=k._key,R=new lH(k,p,E,h),R.$groups={_set:i,_key:O||dH},R.$context={active:!1,chart:r,dataIndex:h,dataset:V,datasetIndex:i},R.update(R.$context),E[H5].push(R),a.push(R);p.restore(),u5(o._listeners,s.listeners,{merger:function(B,K,G){K[B]=K[B]||{},K[B][t.index]=G[B],o._listened=!0}})},afterUpdate:function(r){r[H5]._labels=_9.prepare(r[H5]._datasets)},afterDatasetsDraw:function(r){_9.draw(r,r[H5]._labels)},beforeEvent:function(r,t){if(r[H5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Ah(r,e);break;case"click":vh(r,e);break}}},afterEvent:function(r){var t=r[H5],e=t._actives,i=t._actives=r.getActiveElements(),o=g9.arrayDiff(e,i),a,n,V,s,M,p,h;for(a=0,n=o.length;a<n;++a)if(M=o[a],M[1])for(h=M[0].element[H5]||[],V=0,s=h.length;V<s;++V)p=h[V],p.$context.active=M[1]===1,p.update(p.$context);(t._dirty||o.length)&&(_9.update(t._labels),r.render()),delete t._dirty}};function J8(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var h0=class extends e1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=O0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return Z;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,o=e.secondaryLabel!==void 0;return _`
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
    `}getDateInfo(){let e=Q6(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let M=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:i3(this.hass,this.forecast.datetime),secondaryLabel:M}}if(this.forecastType==="daily")return e?{label:i3(this.hass,this.forecast.datetime),secondaryLabel:UC(this.hass,this.forecast.datetime)}:{label:i3(this.hass,this.forecast.datetime)};let o=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):QC(o),n=o,V;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:M,sunset:p}=this.suntimesInfo,h=v=>{let g=new Date(o);return g.setHours(v.getHours(),v.getMinutes()),g.getTime()>=o.getTime()&&g.getTime()<=a.getTime()};h(M)?(V="wsfc-sunrise",n=M):h(p)&&(V="wsfc-sunset",n=p)}if(V){let M=GC(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:M.suffix?`${M.time} ${M.suffix}`:M.time,className:V,icon:V==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:M.time,secondaryLabel:e?M.suffix:void 0,className:V}}let s=jC(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:s.hour}:{label:s.hour,secondaryLabel:e?s.suffix:void 0}}};h0.styles=u1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,Q([r1({attribute:!1})],h0.prototype,"hass",2),Q([r1({attribute:!1})],h0.prototype,"forecast",2),Q([r1({attribute:!1})],h0.prototype,"forecastType",2),Q([r1({attribute:!1})],h0.prototype,"isTwiceDailyEntity",2),Q([r1({attribute:!1})],h0.prototype,"config",2),h0=Q([a2("wsfc-forecast-header-items")],h0);var u3=class extends e1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?_`
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
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};u3.styles=u1`
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
  `,Q([r1({type:Boolean})],u3.prototype,"open",2),Q([r1({attribute:!1})],u3.prototype,"options",2),Q([r1({attribute:!1})],u3.prototype,"value",2),u3=Q([a2("wsfc-chart-attribute-selector")],u3);O2.register(R0,Q5,B0,m5,Y5,p3,J7,pH);var uH=16384,xh=6,tt=12,gh=10,_h=10,Sh=130,t5=class extends e1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=ra;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new N7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let o=q5(i,this._chart),a=this._chart.scales.x;if(!a)return;let n=a.getValueForPixel(o.x);if(n==null)return;let V=a.getLabelForValue(n),s=this._chart.data.labels?.indexOf(V)??-1;if(s===-1)return;let M=this.safeForecast[s];if(!M)return;let p={selectedForecast:M,action:e.detail.action};o2(this,"action",p)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let o=e.has("forecastType")||e.has("itemWidth");this.updateChartData(o)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return Z;let i=e.length,o=Math.max(i-1,0),a=this._getChartFontSize(),n=Sh+Math.max(0,a-tt),s={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${o} * var(--forecast-item-gap))`},M={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},p={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${n}px`};return _`
      <div
        class="${j3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
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
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":U5[this._selectedAttribute]}
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
        class="${j3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${X2(s)}
          .actionHandler=${L0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${X2(M)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${X2(p)}
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
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new O2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),o=this._chart.config.type,a=i.type;if(o!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let o=parseFloat(i);if(!isNaN(o))return o}return tt}_getBarLabelOffset(){return-22-(this._getChartFontSize()-tt)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),o=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),n=a+_h,V=gh+(a-tt),s={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:n,bottom:V,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:o,dash:[4,4]},grid:{offset:!0,display:!0,color:o,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,s);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,s);default:return this._getDefaultWeatherConfig(e,i,s)}}_getDefaultWeatherConfig(e,i,o){let{minTemp:a,maxTemp:n}=this.computeScaleLimits(e),V=i.getPropertyValue("--wfc-chart-temp-high-label-color"),s=i.getPropertyValue("--wfc-chart-temp-low-label-color"),M=i.getPropertyValue("--wfc-chart-precipitation-label-color"),p=i.getPropertyValue("--wfc-precipitation-bar-color"),h=z7(p5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),v=this.getTemperatureLineStyle(i,"temperature"),g=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(y=>y.datetime),datasets:[{data:e.map(y=>y.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:V,formatter:y=>y!=null?`${l0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...v},{data:e.map(y=>y.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:s,formatter:y=>y!=null?`${l0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...g},{type:"bar",data:e.map(y=>y.precipitation&&y.precipitation!==0?y.precipitation:null),backgroundColor:p,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:M,formatter:y=>na(y,p5(this.hass,this.weatherEntity,"precipitation"))}}]},options:B3({},o,{scales:{yTemp:{type:"linear",display:!1,min:a,max:n,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:h,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,o){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(n=>n.datetime),datasets:[{type:"bar",data:e.map(n=>n.uv_index!=null?Math.round(n.uv_index):0),backgroundColor:e.map(n=>i.getPropertyValue(J8(n.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:B3({},o,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,o){let a=this._selectedAttribute,n=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",V=i.getPropertyValue(n)||i.getPropertyValue("--wfc-chart-default-line-color"),s=i.getPropertyValue("--wfc-chart-label-color"),M=p5(this.hass,this.weatherEntity,a),p=e.map(O=>O[a]??0),h=Math.max(...p),v=Math.min(...p),g=h-v||1,y=h+g*.2,k=v-g*.1;return{type:"line",data:{labels:e.map(O=>O.datetime),datasets:[{data:e.map(O=>O[a]??null),borderColor:V,pointBackgroundColor:V,fill:!1,datalabels:{anchor:"end",align:"top",color:s,formatter:(O,E)=>{if(O===null)return null;let R=`${O} ${M}`;return R.length>xh&&E.dataIndex%2!==0?null:R}}}]},options:B3({},o,{scales:{y:{display:!1,min:k,max:y}}})}}getTemperatureLineStyle(e,i){let o=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(o),n=V=>this.computeTemperatureLineColor(V,e,a);return{borderColor:n,pointBorderColor:n,pointBackgroundColor:n,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,o){if(!this.config.forecast?.use_color_thresholds)return o;let a=e.chart,{ctx:n,chartArea:V,scales:s}=a;if(!V||!s.yTemp)return o;if(this._temperatureColors===null){let R=i;this._temperatureColors={cold:R.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:R.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:R.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:R.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:R.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:R.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let M=s.yTemp,{min:p,max:h}=M;if(!Number.isFinite(p)||!Number.isFinite(h))return o;let v=n.createLinearGradient(0,V.bottom,0,V.top),g=R=>Math.max(0,Math.min(1,(R-p)/(h-p))),k=p5(this.hass,this.weatherEntity,"temperature")==="\xB0F",O=R=>k?R*9/5+32:R,E=[{pos:g(O(-10)),color:this._temperatureColors.cold},{pos:g(O(0)),color:this._temperatureColors.freezing},{pos:g(O(8)),color:this._temperatureColors.chilly},{pos:g(O(18)),color:this._temperatureColors.mild},{pos:g(O(26)),color:this._temperatureColors.warm},{pos:g(O(34)),color:this._temperatureColors.hot}].sort((R,B)=>R.pos-B.pos);for(let R of E)v.addColorStop(R.pos,R.color);return v}computeScaleLimits(e){let i=e.map(B=>B.temperature),o=e.map(B=>B.templow??B.temperature),a=Math.min(...o),n=Math.max(...i),V=e.some(B=>B.templow!==void 0&&B.templow!==null),s=Math.max(n-a,10),M=.2,p=V?.35:.1,h=s*M,v=s*p,g=2,y=V?5:1,k=Math.max(h,g),O=Math.max(v,y),E=Math.floor(a-O),R=Math.ceil(n+k);return E>=R&&(R=E+1),{minTemp:E,maxTemp:R}}renderHeaderItems(e){let i=[],o;return e.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let V=i3(this.hass,a.datetime);o!==V&&(o=V,i.push(_`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${V}</div>
            </div>`))}i.push(_`
        <div class="wsfc-forecast-slot" data-index=${n}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${a}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
        </div>
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((uH+e)/(this.itemWidth+e));return this.forecast.length>i?(W5.debug(`Truncating forecast to ${i} items to stay under ${uH}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=o=>o==="temperature_and_precipitation"?!0:e.some(a=>a[o]!=null);return J6.filter(i).map(o=>({label:o==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,o)||o,icon:o==="temperature_and_precipitation"?"mdi:water-thermometer":U5[o],value:o}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};Q([r1({attribute:!1})],t5.prototype,"hass",2),Q([r1({attribute:!1})],t5.prototype,"weatherEntity",2),Q([r1({attribute:!1})],t5.prototype,"forecast",2),Q([r1({attribute:!1})],t5.prototype,"config",2),Q([r1({attribute:!1})],t5.prototype,"forecastType",2),Q([r1({attribute:!1})],t5.prototype,"isTwiceDailyEntity",2),Q([r1({attribute:!1})],t5.prototype,"itemWidth",2),Q([r1({attribute:!1})],t5.prototype,"isScrollable",2),Q([B4("canvas")],t5.prototype,"_canvas",2),Q([K2()],t5.prototype,"_settingsOpen",2),Q([K2()],t5.prototype,"_selectedAttribute",2),t5=Q([a2("wsfc-forecast-chart")],t5);var m3=class extends e1{createRenderRoot(){return this}render(){if(!this.forecast)return Z;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=Ca(this.forecast);return _`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?_`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:Z}
      </div>
      <div
        class=${j3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};Q([r1({attribute:!1})],m3.prototype,"hass",2),Q([r1({attribute:!1})],m3.prototype,"forecast",2),Q([r1({attribute:!1})],m3.prototype,"config",2),Q([r1({attribute:!1})],m3.prototype,"maxPrecipitation",2),m3=Q([a2("wsfc-forecast-details")],m3);var X5=class extends e1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return Z;let e=this.forecast.wind_speed||0,i=t8(this.forecast),o=this.radius,a=4,n=10,V=o+n,s=o+n,M=2*(o+n),p=Math.round(e),h=this.computeLineColor(),v=i;v!==void 0&&this.type==="direction"&&(v=(v+180)%360);let g=Number.isFinite(v),y=s-o,k=o*.55,O=y-k,E=o*.45;return _`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${M} ${M}"
        role="img"
        aria-label="${g?`Wind speed: ${p}, bearing: ${v} degrees`:`Wind speed: ${p}`}"
      >
        <circle
          cx="${V}"
          cy="${s}"
          r="${o}"
          stroke="${h}"
          stroke-width="${a}"
          fill="none"
        />
        ${g?w1` <g transform="rotate(${v} ${V} ${s})">
              <polygon
                points="${V-E},${y} ${V+E},${y} ${V},${O}"
                fill="${h}"
              />
            </g>`:Z}
        <text x="${V}" y="${s}" dy="0.1em">${p}</text>
      </svg>
    `}computeLineColor(){let e=W4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};X5.styles=u1`
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
  `,Q([r1({attribute:!1})],X5.prototype,"hass",2),Q([r1({attribute:!1})],X5.prototype,"weatherEntity",2),Q([r1({attribute:!1})],X5.prototype,"forecast",2),Q([r1({attribute:!1})],X5.prototype,"size",2),Q([r1({attribute:!1})],X5.prototype,"radius",2),Q([r1({attribute:!1})],X5.prototype,"type",2),X5=Q([a2("wsfc-wind-indicator")],X5);var h3=class extends e1{createRenderRoot(){return this}render(){return this.forecast?_`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??Z}
      </div>
    `:Z}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?_`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),o=J8(e);return _`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${X2({color:`var(${o})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return _`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;W5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};Q([r1({attribute:!1})],h3.prototype,"hass",2),Q([r1({attribute:!1})],h3.prototype,"weatherEntity",2),Q([r1({attribute:!1})],h3.prototype,"forecast",2),Q([r1({attribute:!1})],h3.prototype,"config",2),h3=Q([a2("wsfc-forecast-info")],h3);var J5=class extends e1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new N7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let o=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=o?.dataset.index?Number(o.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let o={selectedForecast:i,action:e.detail.action};o2(this,"action",o)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return Z;let e=[],i=z7(p5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),o;return this.forecast.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let V=i3(this.hass,a.datetime);o!==V&&(o=V,e.push(_`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${V}</div>
            </div>`))}e.push(_`
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
      `)}}),_`
      <div
        class="${j3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${L0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};Q([r1({attribute:!1})],J5.prototype,"hass",2),Q([r1({attribute:!1})],J5.prototype,"weatherEntity",2),Q([r1({attribute:!1})],J5.prototype,"forecast",2),Q([r1({attribute:!1})],J5.prototype,"forecastType",2),Q([r1({attribute:!1})],J5.prototype,"isTwiceDailyEntity",2),Q([r1({attribute:!1})],J5.prototype,"config",2),Q([r1({attribute:!1})],J5.prototype,"isScrollable",2),J5=Q([a2("wsfc-forecast-simple")],J5);var f3=class extends e1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=mH.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return Z;let e=this.getClasses(),i=this.getWeatherStateIcon();return _`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:o}=this.getCustomWeatherIconPath();return _` <img src="${i}" alt="${o}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?_`
        <div
          style="background-size: cover;${X2({"background-image":e})}"
        ></div>
      `:mH.has(this.state)?_`${Oh(this.state,this.isNightTime)}`:Z}};Q([r1({attribute:!1})],f3.prototype,"config",2),Q([r1({attribute:!1})],f3.prototype,"classes",2),Q([r1({attribute:!1})],f3.prototype,"isNightTime",2),Q([r1({attribute:!1})],f3.prototype,"state",2),f3=Q([a2("wsfc-weather-condition-icon-provider")],f3);var mH=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),wh=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),bh=new Set(["hail","rainy","pouring"]),yh=new Set(["windy","windy-variant"]),Zh=new Set(["snowy","snowy-rainy"]),kh=new Set(["lightning","lightning-rainy"]),Oh=(r,t)=>w1`
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
  ${wh.has(r)?w1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${bh.has(r)?w1`
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
  ${yh.has(r)?w1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Zh.has(r)?w1`
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
  ${kh.has(r)?w1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var A3=class extends e1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(Th(e))||k5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return Z;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==Z);return e.length===0?Z:_`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return Z;let{name:i,entity:o,label:a,icon:n}=e,V;if(o?V=e8(this.hass,this.weatherEntity,this.config,i,o):i&&(V=I7(this.hass,this.weatherEntity,this.config,i)),!V)return Z;let s=o?this.hass.states[o]||this.weatherEntity:this.weatherEntity,M=o?this.hass.states[o]:void 0,p=M&&!i?_`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${M}
              .icon=${n}
            ></ha-state-icon>
          `:_`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${s}
              .attribute=${i}
              .icon=${Va(i,n,M)}
            ></ha-attribute-icon>
          `;return _`
      <div class="wsfc-current-attribute">
        ${p}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,M)}
        </span>
        <span class="wsfc-current-attribute-value">${V}</span>
      </div>
    `}resolveLabel(e,i,o){return i||(e&&N2.includes(e)?this.localize(e):o?.attributes?.friendly_name??(e?k5(e).replace(/_/g," "):""))}};Q([r1({attribute:!1})],A3.prototype,"hass",2),Q([r1({attribute:!1})],A3.prototype,"weatherEntity",2),Q([r1({attribute:!1})],A3.prototype,"attributeConfigs",2),Q([r1({attribute:!1})],A3.prototype,"config",2),A3=Q([a2("wsfc-current-weather-attributes")],A3);var Th=r3(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var br={...U5,precipitation:"mdi:weather-rainy"},U2=class extends e1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,o=i?{...this.config,entity:i}:this.config;z4(this,this.hass,o,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return Z;let{state:e}=this.weatherEntity,i=this.getTemperature(),o=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),n=this.getConfiguredAttributes(),V=this.config.name||this.weatherEntity.attributes.friendly_name;return _`
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
                    .actionHandler=${L0({stopPropagation:!0,hasHold:k0(this.config.hold_action),hasDoubleClick:k0(this.config.double_tap_action)})}
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
        ${n.length>0?_`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${n}
            ></wsfc-current-weather-attributes>`:Z}
      </div>
    `}isNightTime(){let e=O0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?N2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return l0(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?l0(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let s=typeof i=="string"?{name:i}:i,{name:M,entity:p,icon:h}=s;if(p){let v=e8(this.hass,this.weatherEntity,this.config,M,p);if(v!=null){let g=this.hass.states[p];return M?{icon:h??g?.attributes?.icon??br[M],value:v}:{stateObj:g,icon:h,value:v}}}else if(M&&M in this.weatherEntity.attributes){let g=br[M],y=I7(this.hass,this.weatherEntity,this.config,M);if(y!=null)return{icon:h??g,value:y}}}let o=this.getTemperatureExtrema();if(o)return{value:`${o.high} / ${o.low}`};let a,n;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,n="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,n="humidity";else return null;return{icon:br[n],value:this.hass.formatEntityAttributeValue(this.weatherEntity,n,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=$7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,o=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if($7(a.datetime)===e){let n=a.templow??a.temperature,V=a.temperature;n!=null&&n<i&&(i=n),V!=null&&V>o&&(o=V)}return i===1/0||o===-1/0?null:{high:l0(this.hass,this.weatherEntity,o,this.config.current?.temperature_precision),low:l0(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};Q([r1({attribute:!1})],U2.prototype,"hass",2),Q([r1({attribute:!1})],U2.prototype,"weatherEntity",2),Q([r1({attribute:!1})],U2.prototype,"hourlyForecast",2),Q([r1({attribute:!1})],U2.prototype,"dailyForecast",2),Q([r1({attribute:!1})],U2.prototype,"config",2),U2=Q([a2("wsfc-current-weather")],U2);var hH=`:host {
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
`;var fH="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var AH=u1`
  ${w0(hH)}

  :host {
    --moon-texture: url("${w0(fH)}");
  }
`;var S9=10,Eh=3,et=14,Fh=75,$h=75,Dh=4,Rh=3,vH=2,Bh=[1.45,.7],xH=90,zh=50,Ih=.15,t0=class extends e1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],o=Math.round(i?.contentRect.height||0);this._containerHeight!==o&&(this._containerHeight=o,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),o=this.hass?.themes?.darkMode;i?.themes?.darkMode!==o&&(this._isDark=o??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?_`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return Z}})}
    `:Z}computeParticles(){let e=[];return this.getActiveEffects().forEach(o=>{switch(o){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/S9*Fh),a=Math.max(5,o),n=115/a;for(let V=0;V<a;V++){let s=-15+V*n+B1(0,n*.5),M=Math.random(),p=M*5+2,h=4.5/(M+.5)+B1(0,.8),v=B1(0,5,!0).toFixed(1),g=M*.7+.5,y=M<.3?1.5-M*3:M>.9?.5:0,k=p*.9,O=(10+M*25).toFixed(0),E=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${s.toFixed(1)}%`,delay:v,duration:h.toFixed(1),size:p.toFixed(0),opacity:g.toFixed(1),blur:y.toFixed(1),shadowSpread:k.toFixed(1),driftAmplitude:O,driftFrequency:E})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/S9*$h),a=Math.max(10,o),n=100/a;for(let V=0;V<a;V++){let s=V*n+B1(0,n*.8),M=B1(.2,.5,!0),p=B1(.4,.7,!0),h=B1(.85,1,!0),v=this._containerHeight*h;i.push({type:"rain",x:`${s.toFixed(1)}%`,delay:M.toFixed(2),duration:p.toFixed(2),landingPosY:v.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let n=0;n<30;n++){let V=n%6,s=Math.floor(n/6),M=100/6,p=30/5,h=B1(V*M+M*.15,(V+1)*M-M*.15),v=B1(s*p+p*.15,(s+1)*p-p*.15),g=B1(1,3),y=B1(.3,1,!0),k=B1(0,5,!0);e.push({type:"star",x:`${h.toFixed(0)}`,y:`${v.toFixed(0)}`,size:`${g}`,opacity:y.toFixed(2),delay:k.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let o=new Set,a=M=>i===!0?!0:Array.isArray(i)?i.includes(M):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&o.add("rain"),e.includes("snowy")&&a("snow")&&o.add("snow"),e.includes("lightning")&&a("lightning")&&o.add("lightning");let n=e==="sunny"||e==="clear-night",V=e==="cloudy",s=e==="partlycloudy";return(n||s||V)&&a("sky")&&o.add("sky"),(n||s)&&(this.isNightTime()?a("moon")&&o.add("moon"):a("sun")&&o.add("sun")),(V||s)&&a("cloud")&&o.add("cloud"),Array.from(o)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?O0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return _`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return _`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>_`<div
                class="sun-ray"
                style="${X2({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${B1(0,360)}`,height:`${B1(100,200)}`,width:`${B1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),o=e?Dh:Rh,a=100/o,n=[];for(let V=0;V<o;V++){let s=V%vH,M=s===0,p=V*a+B1(0,a*.5)-a*.25,h=e?M?B1(140,200):B1(215,285):M?B1(110,165):B1(180,240),v=h*B1(.38,.5,!0),g=e?M?B1(-26,-12):B1(-16,-2):M?B1(-10,4):B1(-4,12),y=e?M?B1(.36,.5,!0):B1(.5,.64,!0):M?B1(.68,.8,!0):B1(.82,.92,!0);i&&(y*=.7),n.push({type:"cloud",variant:e?"grey":"white",night:i,layer:s,shape:B1(1,5),flip:B1(0,1)===1,x:p.toFixed(1),y:g.toFixed(0),width:h.toFixed(0),height:v.toFixed(0),opacity:y.toFixed(2)})}return n}computeCloudDrift(){let e=this.currentForecast,i=e&&W4(this.hass,this.weatherEntity,e)||0,o=Math.min(i,et)/et,a=e?t8(e):void 0,n=a!==void 0?-Math.sin(a*Math.PI/180):0,V=Math.max(Ih,o*Math.abs(n));return{duration:xH-V*(xH-zh),driftRight:n>=0}}renderCloudFilter(){return _`
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
    `}renderClouds(){let e=this._particles.filter(n=>n.type==="cloud");if(!e.length)return Z;let{duration:i,driftRight:o}=this.computeCloudDrift(),a=n=>{let V=["cloud",`cloud-shape-${n.shape}`,n.variant==="grey"?"grey":"",n.night?"night":""].filter(Boolean).join(" ");return _`<div
        class="${V}"
        style="${X2({left:`${n.x}%`,top:`${n.y}px`,width:`${n.width}px`,height:`${n.height}px`,opacity:n.opacity,transform:n.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return _`
      ${this.renderCloudFilter()}
      ${Array.from({length:vH},(n,V)=>{let s=e.filter(p=>p.layer===V);if(!s.length)return Z;let M=Math.round(i*(Bh[V]??1)/5)*5;return _`<div
          class="cloud-track ${o?"drift-right":""}"
          style="${X2({"--cloud-drift-duration":`${M}s`})}"
        >
          <div class="cloud-set">${s.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${s.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>_`
        <div
          class="snowflake-path"
          style="${X2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>_`
        <div
          class="raindrop-path"
          style="${X2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return _` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:qC(this.hass,new Date);return _`
      ${this._particles.filter(i=>i.type==="star").map(i=>_`
          <div
            class="star"
            style="${X2({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?He(e.fraction,e.litRight):He(1,!0);return _`
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
        <path d=${YC(e.fraction,e.litRight)}></path>
      </svg>
    `:Z}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=p5(this.hass,this.weatherEntity,"precipitation"),o=z7(i,"hourly");if(o>0){let a=e/o*S9;return Math.min(S9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?S9:Eh}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let o=W4(this.hass,this.weatherEntity,i)||0,a=e?15:35,n=Math.min(o,et)/et,V=i.wind_bearing*Math.PI/180,s=Math.sin(V),p=Math.pow(n,e?.8:.5);return s*p*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};t0.styles=AH,Q([r1({attribute:!1})],t0.prototype,"hass",2),Q([r1({attribute:!1})],t0.prototype,"weatherEntity",2),Q([r1({attribute:!1})],t0.prototype,"currentForecast",2),Q([r1({attribute:!1})],t0.prototype,"config",2),Q([K2()],t0.prototype,"_isDark",2),Q([K2()],t0.prototype,"_containerHeight",2),t0=Q([a2("wsfc-animation-provider")],t0);var gH={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},Wh=1e3,d2=class extends e1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):z4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{z4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),o=i.find(a=>a==="weather.home")||i[0]||"";return{...gH,entity:o}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>U3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>U3))throw new Error(`temperature_precision must be 0 or greater and at most ${U3}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=B3({},gH,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:o}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:o}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,o=this.config?.forecast?.mode==="chart",a=1,n=1;return e&&(a+=2,n+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(o?(a+=3,n+=3):(a+=2,n+=2)),{rows:a,minRows:n,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return BC(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return Z;let e=this.config.entity,i=this.hass.states[e];if(!i)return _`<hui-warning>
        ${WC(this.hass,e)}
      </hui-warning>`;let o=O5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",n=this.getCurrentForecast();return _`
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
                .actionHandler=${L0({hasHold:k0(this.config.hold_action),hasDoubleClick:k0(this.config.double_tap_action)})}
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
                      .forecast=${n}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:_`<wsfc-forecast-simple
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
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,o=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:o}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let o=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,n=he(i,this._hourlyForecastEvent,"hourly"),V=he(i,this._dailyForecastEvent,O5(e));if(!n&&!V)return;this._dailyForecastData=V?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let s=this.config?.forecast?.hourly_group_size||0;s>1&&n?.forecast?this._hourlyForecastData=Ha(n.forecast,s):this._hourlyForecastData=n?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let M=this.getCurrentForecast();if(!M||M.length===0){let v=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,g=O5(e),y=g!==void 0,k=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(v||this._currentForecastType==="hourly"&&!N4(e,"hourly")||k&&!y)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(W5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=g||"daily"):k&&this._hourlyForecastData&&(W5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let p=this.getCurrentForecast().length,h=(this._currentForecastType==="hourly"?o:a)??0;p!==h&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",o=i,a=o?this._hourlyForecastData:this._dailyForecastData,n=this.hass?.states[this.config.entity],V=O5(n)||"daily";if(!a||a.length===0){W5.debug(`Cannot toggle to ${o?"hourly":V} forecast - no data available`);return}this._currentForecastType=i?"hourly":V,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(o)this.scrollToForecastItem(e);else{let s=this._dailyForecastData?.[0];s&&this.scrollToForecastItem(s,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let o=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!o)return;let a=$7(e.datetime),n=this.getCurrentForecast(),V=n.findIndex(h=>$7(h.datetime)===a),s=V!==-1?V:n.length-1,M=this._currentItemWidth||0,p=s*M;o.scrollTo({left:p,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},Wh)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let o=await e;if(!o)return;await o()}catch(o){if(pe(o))return;W5.warn(`Error unsubscribing from ${i} forecast:`,o)}}createForecastSubscription(e,i,o){return Promise.resolve(oa(this.hass,this.config.entity,e,i)).catch(a=>{if(ta(a)){setTimeout(o,2e3);return}pe(a)||W5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!aa(this.hass.states[this.config.entity])){W5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let o=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",n=a!=="hourly",V=a!=="daily",s=O5(o);s==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!n&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!V&&this._currentForecastType==="hourly"&&(this._currentForecastType=s||"daily"),s&&n&&(this._dailySubscription=this.createForecastSubscription(s,M=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=M,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),V&&N4(o,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",M=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=M,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let o=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/o),n=i.length,V=n*a,s=e-V,M=s>0?s/(n-1):0;this._currentItemWidth=a+M,this._isScrollable=i.length>o,this._haCard.style.setProperty("--forecast-item-gap",`${M}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:Object.values(me).some(V=>a.attributes[V]!==n.attributes[V])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),o=this.hass;return i?.connected===!1&&o?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:a.attributes.supported_features!==n.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!o)return!1;let a=i?.states[this.config.entity],n=o.states[this.config.entity];return!!a!=!!n}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),o=this.hass;return!i||!o?!1:KC(this.config).some(a=>i.states[a]!==o.states[a])}};d2.styles=$C,Q([r1({attribute:!1})],d2.prototype,"hass",2),Q([K2()],d2.prototype,"config",2),Q([K2()],d2.prototype,"_dailyForecastEvent",2),Q([K2()],d2.prototype,"_hourlyForecastEvent",2),Q([K2()],d2.prototype,"_currentItemWidth",2),Q([K2()],d2.prototype,"_currentForecastType",2),Q([K2()],d2.prototype,"_isScrollable",2),Q([B4("ha-card")],d2.prototype,"_haCard",2),Q([B4(".wsfc-forecast-container")],d2.prototype,"_forecastContainer",2);var f0=v4(I4(),1);var _H="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var SH="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var Uh={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},e0=class extends e1{constructor(){super(...arguments);this._schema=r3((e,i,o)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(o),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:X6.map(i=>({value:i,label:k5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:N2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||k5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:N2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||k5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:J6.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||k5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],o=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),o.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),o.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:o},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(o=>{let a=Uh[o];return[{name:`current.attribute_entity_${o}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${o}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${o}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:U3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:U3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=i7(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=i7(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let o=i7(this._config.current?.show_attributes);o[e]=i.detail.value,this._commitCustomAttributes(o)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let o=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||k5(o).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let o=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||k5(o).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let o=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${o}`)||k5(o).replace(/_/g," "),n=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${n}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let o=this.hass.states[this._config.entity];o&&(i=this.hass.formatEntityAttributeName(o,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return Z;let e=rt(this._config),i=this._getSelectedAttributes(e),o=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return _`
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
    `}_renderCustomAttributes(){let e=i7(this._config.current?.show_attributes);return _`
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
            <ha-svg-icon slot="start" .path=${SH}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,i){return _`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${jh}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${o=>this._customAttributeChanged(i,o)}
        ></ha-form>
        <ha-icon-button
          .path=${_H}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:qh(this._config.current?.show_attributes,e)}};o2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let o=Yh(i);if(delete o.temperature_entity,o?.forecast?.extra_attribute==="none"&&delete o.forecast.extra_attribute,Array.isArray(o.show_condition_effects)&&X6.every(n=>o.show_condition_effects.includes(n))&&(o.show_condition_effects=!0),o?.current){let a={},n={},V={};for(let s of Object.keys(o.current))if(s.startsWith("attribute_entity_")){let M=s.replace("attribute_entity_",""),p=o.current[s];p&&(a[M]=p),delete o.current[s]}else if(s.startsWith("attribute_label_")){let M=s.replace("attribute_label_",""),p=o.current[s];p&&(n[M]=p),delete o.current[s]}else if(s.startsWith("attribute_icon_")){let M=s.replace("attribute_icon_",""),p=o.current[s];p&&(V[M]=p),delete o.current[s]}if(Array.isArray(o.current.show_attributes)){let s=i7(this._config?.current?.show_attributes);o.current.show_attributes=wH(o.current.show_attributes,{entity:a,label:n,icon:V},s)}}o2(this,"config-changed",{config:o})}};e0.styles=u1`
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
  `,Q([r1({attribute:!1})],e0.prototype,"hass",2),Q([K2()],e0.prototype,"_config",2),e0=Q([a2("wsfc-flex-core-editor")],e0);var o7=r=>typeof r=="string"&&N2.includes(r),i7=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")o7(e)||t.push({name:e});else if(typeof e=="object"){let i=e;o7(i.name)||t.push(i)}}return t},wH=(r,t,e)=>{let i=N2.every(n=>r.includes(n)),o=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!o&&i?!0:[...r.map(n=>{let V=t.entity[n],s=t.label[n],M=t.icon[n];return V||s||M?{name:n,...V?{entity:V}:{},...s?{label:s}:{},...M?{icon:M}:{}}:n}),...e]},jh=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],Gh=r=>{if(r===!0)return[...N2];if(typeof r=="string")return o7(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")o7(e)&&t.push(e);else if(typeof e=="object"){let i=e;o7(i.name)&&t.push(i)}}return t},qh=(r,t)=>{let e=Gh(r),i=[],o={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(o.entity[a.name]=a.entity),a.label&&(o.label[a.name]=a.label),a.icon&&(o.icon[a.name]=a.icon));return wH(i,o,t)},Yh=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[o,a]=i;!o||!a||((!t[o]||typeof t[o]!="object")&&(t[o]={}),t[o][a]=r[e],delete t[e])}return t},rt=r=>{let t=Qh(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...X6]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...N2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let o of e)if(typeof o=="string")o7(o)&&i.push(o);else if(typeof o=="object"&&o!==null){let a=o;o7(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},Qh=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast.${o}`]=i[o];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`current.${o}`]=i[o];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast_action.${o}`]=i[o];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(c=>c.id),i=Object.fromEntries(t.map(c=>[c.id,c.label])),o={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],n=(c,m,d)=>Math.min(d,Math.max(m,c)),V=c=>typeof c=="number"&&isFinite(c),s={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function M(c){return s[c]||"mdi:weather-cloudy"}let p=["temps","icons","extra"],h={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function v(c){let m=Array.isArray(c.forecast_row_order)?c.forecast_row_order.filter(d=>p.includes(d)):null;(!m||!m.length)&&(m=(c.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let d of p)m.includes(d)||m.push(d);return m}let g={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},y=Object.keys(g);function k(c){let m=c&&c.forecast_extra,d;Array.isArray(m)?d=m:typeof m=="string"&&m&&m!=="none"?d=[m]:d=[];let A=new Set(d.filter(x=>g[x]));return y.filter(x=>A.has(x))}let O=["temps","icons",...y],E=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(y.map(c=>[c,g[c].label]))),R=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function B(c){c=c||{};let m={},d;if(Array.isArray(c.forecast_metric_order)&&c.forecast_metric_order.length){d=c.forecast_metric_order.filter(x=>O.includes(x));let A=c.forecast_metric_pos||{};for(let x of O)m[x]=A[x]||"hidden"}else{m.temps=c.forecast_temps||"hidden",m.icons=c.forecast_icons||"hidden";let A=k(c),x=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let b of y)m[b]=A.includes(b)?x:"hidden";let w=v(c);d=[];for(let b of w)b==="extra"?d.push(...y):d.push(b)}for(let A of O)d.includes(A)||d.push(A);for(let A of O)m[A]||(m[A]="hidden");return d.map(A=>({key:A,pos:m[A]}))}function K(c,m){if(!c||!m)return null;let d=g[c],A=m[c];return c==="wind_direction"&&(A=m.wind_direction!=null?m.wind_direction:m.wind_bearing),A==null||A===""?null:d&&d.arrow?"":(typeof A=="number"&&(A=Math.round(A)),A+(d&&d.unit||""))}function G(c,m){if(c==="wind_direction")return(g.wind_bearing||{}).icon;let d=g[c];return d?d.icon:""}let c1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function J(c,m){if(m){let d=c1[c];if(d&&o[d]&&o[d].icon)return o[d].icon}return G(c)}function C1(c){return c==="below"||c==null?0:c==="above"?100:c==="mid"?50:n(Number(c)||0,0,100)}function i1(c,m){m=m||0;let d="  ".repeat(m),A=x=>{if(x==null)return"null";if(typeof x=="boolean"||typeof x=="number")return String(x);let w=String(x);return w===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(w)||/^\s|\s$/.test(w)||/^(true|false|null|yes|no|~)$/i.test(w)||/^[\d.+-]/.test(w)?'"'+w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':w};if(Array.isArray(c))return c.length?c.map(x=>{if(x&&typeof x=="object"){let w=i1(x,m+1).replace(/^\s+/,"");return d+"- "+w}return d+"- "+A(x)}).join(`
`):d+"[]";if(c&&typeof c=="object"){let x=Object.keys(c);return x.length?x.map(w=>{let b=c[w];return b&&typeof b=="object"&&(Array.isArray(b)?b.length:Object.keys(b).length)?d+w+`:
`+i1(b,m+1):b&&typeof b=="object"?d+w+": "+(Array.isArray(b)?"[]":"{}"):d+w+": "+A(b)}).join(`
`):d+"{}"}return d+A(c)}function m1(c){try{return typeof W3=="function"&&W3(c)||c.language||navigator.language||"en"}catch{return"en"}}function I1(c){let m=c&&c.config||{};return{lat:m.latitude,lng:m.longitude}}function y1(c,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(m1(c),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function V2(c,m){let d=m instanceof Date?m:new Date;try{if(typeof O0=="function"){let w=O0(c,d);if(w&&w.sunrise&&w.sunset)return{sunrise:new Date(w.sunrise),sunset:new Date(w.sunset)}}}catch{}let{lat:A,lng:x}=I1(c);if(V(A)&&V(x)&&typeof f0=="object"&&f0.getTimes)try{let w=f0.getTimes(d,A,x);return{sunrise:w.sunrise,sunset:w.sunset}}catch{}return{sunrise:null,sunset:null}}function G1(c,m){let{lat:d,lng:A}=I1(c);if(!V(d)||!V(A)||typeof f0!="object"||!f0.getPosition)return null;try{return f0.getPosition(m,d,A).altitude}catch{return null}}function Z1(c){if(c==null)return .5;let m=c*180/Math.PI;return m>=0?n(.42+.58*Math.sin(c),.42,1):m>-12?n(.42*(m+12)/12,0,.42):0}let X=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function q1(c){c=n(c,0,1);let m=X[0],d=X[X.length-1];for(let b=0;b<X.length-1;b++)if(c>=X[b].at&&c<=X[b+1].at){m=X[b],d=X[b+1];break}let A=d.at-m.at||1,x=(c-m.at)/A,w=b=>Math.round(m.c[b]+(d.c[b]-m.c[b])*x);return[w(0),w(1),w(2)]}function n1(c){if(typeof c!="string")return null;let m=c.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(d=>d+d).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let U=c=>`rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`,t1=(c,m,d)=>c.map((A,x)=>A+(m[x]-A)*d);function H1(c,m){c=n(c,0,1);let d,A=m&&n1(m.day_color),x=m&&n1(m.night_color);A||x?d=t1(x||[11,16,38],A||[206,227,255],c):d=q1(c);let w=m&&V(m.cloud)?n(m.cloud,0,1):0;if(w>0){let b=.5*(d[0]+d[1]+d[2]),P=[b*.75+40,b*.75+42,b*.78+48];d=t1(d,P,w*.6)}return U(d)}function h1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function V1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function s1(c){return{font_size:c,font_weight:"400",color:""}}function g1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function k1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function p2(c,m){if(c==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let d=A=>`0 0 2px ${A}, 0 0 4px ${A}, 1px 1px 2px ${A}`;return c==="outline"?d("rgba(0,0,0,0.85)"):c==="auto"?d(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let A2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function T2(c){let m=c&&c.show_forecast!==!1,d=c&&c.default_forecast||"daily",A=a.map(P=>({key:P,show:!0})),x=h1,w=g1,b=V1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:c?c.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...k1(),...w(),...x(),...b()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:A,...w(),...x(),...b()},hourly:{show:m&&d==="hourly",...w(),...x(),...b()},daily:{show:m&&d!=="hourly",...w(),...x(),...b()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...w(),...x(),...b()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...w(),...x(),...b()}}}function s2(c){let m=T2(c),d=c&&c.wfc||{},A={order:Array.isArray(d.order)&&d.order.length?d.order.slice():m.order,card:{...m.card,...d.card||{}},current:{...m.current,...d.current||{}},details:{...m.details,...d.details||{}},hourly:{...m.hourly,...d.hourly||{}},daily:{...m.daily,...d.daily||{}},sun_position:{...m.sun_position,...d.sun_position||{}},sun_arc:{...m.sun_arc,...d.sun_arc||{}},editor_accordion:d.editor_accordion!==!1},x=Array.isArray(d.details&&d.details.items)?d.details.items.slice():m.details.items.slice();x=x.filter(b=>b&&o[b.key]),A.details.items=x.length?x:m.details.items,A.details.columns=n(parseInt(A.details.columns,10)||2,1,4);let w=new Set(A.details.items.map(b=>b.key));return Object.keys(o).forEach(b=>{w.has(b)||A.details.items.push({key:b,show:!1})}),["sun_position","sun_arc"].forEach(b=>{let P=d[b]||{};P.flush!==void 0&&(P.flush_top===void 0&&(A[b].flush_top=!!P.flush),P.flush_bottom===void 0&&(A[b].flush_bottom=!!P.flush),P.flush_edges===void 0&&(A[b].flush_edges=!!P.flush))}),e.forEach(b=>{A.order.includes(b)||A.order.push(b)}),A.order=A.order.filter(b=>e.includes(b)),A}let L1=d2.prototype;if(typeof U2<"u"&&U2&&U2.prototype&&U2.prototype.getSecondaryWeatherAttribute){let c=U2.prototype.getSecondaryWeatherAttribute;U2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:c.call(this)}}let e5=L1.setConfig;L1.setConfig=function(c){let m=s2(c),d=m.sun_position||{},A=d.forecast_extra,w=!!(!!(d.show||m.sun_arc&&m.sun_arc.show&&m.sun_arc.baseline_mode==="sky")&&(d.weather_adjust!==!1||[d.forecast_temps,d.forecast_icons].some(N=>N&&N!=="hidden")||(Array.isArray(A)?A.length:A&&A!=="none")||Object.values(d.forecast_metric_pos||{}).some(N=>N&&N!=="hidden"))),b=!!(m.hourly.show||w),P=!!(b||m.daily.show),D=b&&m.daily.show?"both":b?"hourly":"daily",W={...c,show_current:m.current.show||!P,show_forecast:P};P&&(D==="both"||!c.forecast_types||w)&&(W.forecast_types=D),e5.call(this,W),this.config.show_current=!!m.current.show,this.config.show_forecast=P,W.forecast_types&&(this.config.forecast_types=W.forecast_types),this.__wfcCfgSrc=void 0};let j2=L1.updated;L1.updated=function(c){j2&&j2.call(this,c),this.isConnected&&this._wfcSyncForecastSources()};let A5=L1.disconnectedCallback;L1.disconnectedCallback=function(){A5&&A5.call(this),this._wfcTeardownForecastSources()};let P2=L1.shouldUpdate;L1.shouldUpdate=function(c){if(P2&&P2.call(this,c))return!0;if(c&&c.has("hass")&&this.config){let m=c.get("hass"),d=this.hass;if(m&&d){let A=new Set;for(let x of this._wfcSources())if(x.overrides&&Object.values(x.overrides).forEach(w=>w&&A.add(w)),K1(x.ref)){let w=j0(this.config,this.hass,x2(x.ref));Object.values(w).forEach(b=>b&&A.add(b))}else x.ref&&A.add(x.ref);for(let x of A)if(m.states[x]!==d.states[x])return!0}}return!1},L1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=s2(this.config)),this.__wfcCfg},L1.computeRowSizing=function(){let c=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",d={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let b=(c.details.items||[]).filter(P=>P.show).length;return Math.max(1,Math.ceil(b/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(c.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(c.sun_arc.height)||90)+24)/56))},A=1,x=4;c.order.filter(b=>c[b]&&c[b].show&&d[b]).forEach(b=>{A+=d[b](),(b==="hourly"||b==="daily")&&(x=6)});let w=Math.max(1,A-1);return{rows:A,minRows:w,minColumns:x}},L1.render=function(){if(!this.config||!this.hass)return Z;let c=this.config.entity,m=this.hass.states[c];if(!m){let D=this.hass,W=D?D.config&&D.config.state!=="NOT_RUNNING"?`${D.localize("ui.card.common.entity_not_found")}: ${c}`:D.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return _`<hui-warning>${W}</hui-warning>`}let d=this._wfc(),A=typeof O5=="function"&&O5(m)==="twice_daily",x=this.config.forecast&&this.config.forecast.mode==="chart",w={stateObj:m,isTwice:A,chart:x},P=d.order.filter(D=>d[D]&&d[D].show).map(D=>{let W=this._wfcRenderSection(D,d,w);if(W===Z||W==null)return null;let N=d[D]||{},a1="wsfc-section";N.flush_top&&(a1+=" wsfc-flush-top"),N.flush_bottom&&(a1+=" wsfc-flush-bottom"),N.flush_edges&&(a1+=" wsfc-flush-edges");let d1=this._wfcBackgroundStyle(N);return _`<div class=${a1} data-section-id=${D} style=${d1}>
          ${this._wfcRenderTitle(N)}${W}
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
    `},L1._wfcDividerStyle=function(c){let m=[];return c.order.forEach(d=>{let A=c[d];if(!A||!A.show||!A.divider_above&&!A.divider_below)return;let x=`.wsfc-section[data-section-id="${d}"]`,w=A.divider_color||"var(--divider-color, #4a4a4a)",b=`${x}{position:relative;}`,P=D=>["solid","dashed","dotted","double"].includes(D)?D:"solid";if(A.divider_above){let D=Number(A.divider_above_width)||1,W=n(Number(A.divider_above_length)||100,1,100),N=P(A.divider_above_style);b+=`${x}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${x}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${W}%;border-top:${D}px ${N} ${w};}`}if(A.divider_below){let D=Number(A.divider_below_width)||1,W=n(Number(A.divider_below_length)||100,1,100),N=P(A.divider_below_style);b+=`${x}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${x}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${W}%;border-bottom:${D}px ${N} ${w};}`}m.push(b)}),m.length?_`<style>${m.join("")}</style>`:Z},L1._wfcCardAppearanceStyle=function(c){let m=c&&c.card||{},d=[];if(m.border_enabled){let x=Math.max(0,Number(m.border_width)||1),w=m.border_color||"var(--primary-color, #2196f3)",b=P=>P!==!1?`${x}px solid ${w}`:"none";d.push(`border-top:${b(m.border_top)}`),d.push(`border-bottom:${b(m.border_bottom)}`),d.push(`border-left:${b(m.border_left)}`),d.push(`border-right:${b(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let x=`${Number(m.border_radius)}px`,w=b=>b!==!1?x:"0";d.push(`border-radius:${w(m.corner_tl)} ${w(m.corner_tr)} ${w(m.corner_br)} ${w(m.corner_bl)}`)}m.bg_color&&d.push(`background:${m.bg_color}`);let A=[];if(m.glow_enabled){let x=m.glow_color||"var(--primary-color, #2196f3)",w=n(Number(m.glow_intensity)||1,.2,3),b=(12*w).toFixed(1),P=(-4*w).toFixed(1),D=(4*w).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?A.push(`0 0 ${b}px ${P}px ${x}`):(m.border_top!==!1&&A.push(`0 -${D}px ${b}px ${P}px ${x}`),m.border_bottom!==!1&&A.push(`0 ${D}px ${b}px ${P}px ${x}`),m.border_left!==!1&&A.push(`-${D}px 0 ${b}px ${P}px ${x}`),m.border_right!==!1&&A.push(`${D}px 0 ${b}px ${P}px ${x}`))}if(m.shadow_enabled){let x=v2(m.shadow_color||"#000000",n((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";A.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${x}`)}return A.length&&d.push(`box-shadow:${A.join(", ")}`),d.length?_`<style>ha-card{${d.join(";")};}</style>`:Z},L1._wfcBackgroundStyle=function(c){if(!c||!c.background_enabled)return"";let m=n(c.background_opacity==null?80:Number(c.background_opacity),0,100),d=(100-m)/100,A=100-m,x=c.background_color||"",w;x?w=v2(x,d)||x:w=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${A}%, transparent)`;let b=c.flush_edges?"0":"8px";return`background-color:${w};border-radius:${b};`};function v2(c,m){if(typeof c!="string")return null;let d=c.trim().replace(/^#/,"");if(d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),!/^[0-9a-fA-F]{6}$/.test(d))return null;let A=parseInt(d.slice(0,2),16),x=parseInt(d.slice(2,4),16),w=parseInt(d.slice(4,6),16);return`rgba(${A}, ${x}, ${w}, ${m})`}L1._wfcRenderTitle=function(c){if(!c||!c.title_show)return Z;let m=c.title_text||"",d=c.title_icon||"",A=c.title_text_align||"left",x=c.title_icon_align||"left",w=!!m&&A!=="hide",b=!!d&&x!=="hide";if(!w&&!b)return Z;let P=(c.title_icon_color?`color:${c.title_icon_color};`:"")+(c.title_icon_size?`--mdc-icon-size:${c.title_icon_size}px;width:${c.title_icon_size}px;height:${c.title_icon_size}px;`:""),D=(c.title_color?`color:${c.title_color};`:"")+(c.title_font_size?`font-size:${c.title_font_size}px;`:"")+(c.title_font_weight?`font-weight:${c.title_font_weight};`:""),W=b?_`<ha-icon class="wsfc-title-icon" .icon=${d} style=${P}></ha-icon>`:Z,N=w?_`<span class="wsfc-title-text" style=${D}>${m}</span>`:Z,a1=$=>{let l1=[];return b&&x===$&&l1.push(W),w&&A===$&&l1.push(N),l1},d1=Number(c.title_indent)||0;return _`<div class="wsfc-title-row" style="padding-left:${d1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${a1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${a1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${a1("right")}</span>
    </div>`},L1._wfcRenderSection=function(c,m,d){switch(c){case"current":return this._wfcRenderCurrent(d);case"details":return this._wfcRenderDetails(m,d);case"hourly":return this._wfcRenderForecast("hourly",d);case"daily":return this._wfcRenderForecast("daily",d);case"sun_position":return this._wfcRenderSunPosition(m,d);case"sun_arc":return this._wfcRenderSunArc(m,d);default:return Z}},L1._wfcRenderCurrent=function(c){let d=this._wfc().current||{},A=Number(d.header_state_size)||0,x=Number(d.header_temp_size)||0,w=Number(d.header_icon_size)||0,b=(w?`--current-conditions-icon-size:${w}px;`:"")+(A||x?`--wfc-hdr-state:${A?A+"px":"inherit"};--wfc-hdr-temp:${x?x+"px":"inherit"};`:""),P=_`
      <div
        class="wsfc-current-weather-container${A||x?" wsfc-hdr-sized":""}"
        style=${b||Z}
        .actionHandler=${L0({hasHold:k0(this.config.hold_action),hasDoubleClick:k0(this.config.double_tap_action)})}
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
    `,D=!!d.clock_show_time,W=!!d.clock_show_date;if(!D&&!W)return P;this._wfcEnsureClockTimer();let N=h2=>h2==="above"?"above-center":h2==="below"?"below-center":h2||"right",a1=N(d.clock_placement),d1=d.clock_date_placement==="with_time"||!d.clock_date_placement?a1:N(d.clock_date_placement),$=D?this._wfcRenderClockTime(d):null,l1=W?this._wfcRenderClockDate(d):null,W1=D&&W&&(d.clock_date_placement==="with_time"||!d.clock_date_placement),E1={},F1=(h2,u2)=>{u2&&(E1[h2]=E1[h2]||[]).push(u2)};W1?F1(a1,_`<div class="wsfc-clock">${$}${l1}</div>`):($&&F1(a1,_`<div class="wsfc-clock">${$}</div>`),l1&&F1(d1,_`<div class="wsfc-clock">${l1}</div>`));let U1=h2=>{let u2=[];return["left","center","right"].forEach(Y1=>{let z2=h2+"-"+Y1;E1[z2]&&u2.push(_`<div class="wsfc-clock-band-cell wsfc-cb-${Y1}">${E1[z2]}</div>`)}),u2.length?_`<div class="wsfc-clock-band">${u2}</div>`:Z},M1=U1("above"),$1=U1("below"),r0=E1.left||Z,l5=[].concat(E1.right||[],E1.center||[]),$5=E1.left&&E1.left.length||l5.length?_`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${r0}
          <div class="wsfc-cur-grow">${P}</div>
          ${l5.length?l5:Z}
        </div>`:P;return _`<div class="wsfc-cur-stack">${M1}${$5}${$1}</div>`},L1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let c=this.__wfcCfg||(this.config?s2(this.config):null),m=c&&c.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},L1._wfcRenderClockTime=function(c){let m=new Date,d=m1(this.hass),A={hour:"2-digit",minute:"2-digit"};c.clock_show_seconds&&(A.second="2-digit"),c.clock_format==="12"?A.hour12=!0:c.clock_format==="24"&&(A.hour12=!1);let x;try{x=m.toLocaleTimeString(d,A)}catch{x=m.toTimeString().slice(0,c.clock_show_seconds?8:5)}c.clock_format==="12"&&(x=x.replace(/^0/,""));let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),b=p2(c.clock_contrast,w),P=`font-size:${n(Number(c.clock_font_size)||28,8,100)}px;font-weight:${c.clock_font_weight||"500"};`+(c.clock_color?`color:${c.clock_color};`:"")+(c.clock_font_family?`font-family:${c.clock_font_family};`:"")+(b?`text-shadow:${b};`:"");return _`<div class="wsfc-clock-time" style=${P}>${x}</div>`};function s5(c,m,d){let A=D=>D<10?"0"+D:""+D,x=c.toLocaleDateString(d,{month:"long"}),w=c.toLocaleDateString(d,{month:"short"}),b=c.toLocaleDateString(d,{weekday:"long"}),P={YYYY:""+c.getFullYear(),YY:A(c.getFullYear()%100),MONTH:x,MON:w,WDAY:b,MM:A(c.getMonth()+1),M:""+(c.getMonth()+1),DD:A(c.getDate()),D:""+c.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,D=>P[D]!=null?P[D]:D)}L1._wfcRenderClockDate=function(c){let m=new Date,d=m1(this.hass),A=A2.find(W=>W.value===c.clock_date_format)||A2[0],x;try{x=A.pattern?s5(m,A.pattern,d):m.toLocaleDateString(d,A.opts)}catch{x=m.toDateString()}let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),b=c.clock_date_contrast!=null?c.clock_date_contrast:c.clock_contrast,P=p2(b,w),D=`font-size:${n(Number(c.clock_date_font_size)||12,8,100)}px;`+(c.clock_date_color?`color:${c.clock_date_color};`:"")+(P?`text-shadow:${P};`:"");return _`<div class="wsfc-clock-date" style=${D}>${x}</div>`},L1._wfcForecastConfigFor=function(c){let m=this.config&&this.config.forecast||{},d=m[`${c}_mode`]||m.mode||"simple",A=m[`${c}_extra_attribute`]!=null?m[`${c}_extra_attribute`]:m.extra_attribute;(A==="none"||A==="")&&(A=void 0);let x=m[`${c}_chart_attribute`]!=null?m[`${c}_chart_attribute`]:m.default_chart_attribute,w={...m,mode:d};return A==null?delete w.extra_attribute:w.extra_attribute=A,x!=null&&(w.default_chart_attribute=x),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(P=>{let D=m[`${c}_${P}`];D!=null&&(w[P]=D)}),{config:{...this.config,forecast:w},chart:d==="chart"}},L1._wfcRenderForecast=function(c,m){let d=c==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!d||!d.length)return Z;let A=this._wfcMergeForecast(d,c),{config:x,chart:w}=this._wfcForecastConfigFor(c),b=w?_`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${x}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${c}
          .isTwiceDailyEntity=${m.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:_`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${x}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${c}
          .isTwiceDailyEntity=${m.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return _`<div class="wsfc-forecast-container" data-forecast-type=${c}>${b}</div>`};let L5="device:",K1=c=>typeof c=="string"&&c.indexOf(L5)===0,x2=c=>K1(c)?c.slice(L5.length):null,U0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],At=U0.map(c=>c.key),vt=[{re:/feels?[\s_-]?likes?|apparent|wind[\s_-]?chill|windchill|heat[\s_-]?index/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}],L7=new WeakMap;function w3(c,m){if(!c||!m||!c.entities)return[];let d=L7.get(c.entities);if(d&&d.hass!==c&&(d.hass=c,Object.keys(c.entities).length!==d.size0&&(d=null)),!d){d=new Map;for(let A in c.entities){let x=c.entities[A]&&c.entities[A].device_id;x&&(d.has(x)||d.set(x,[]),d.get(x).push(A))}d.size0=Object.keys(c.entities).length,d.hass=c,L7.set(c.entities,d)}return d.get(m)||[]}function X9(c,m){let d=c&&c.states[m];if(!d)return null;let A=d.attributes&&d.attributes.device_class,x=(m+" "+(d.attributes&&d.attributes.friendly_name||"")).toLowerCase(),w=null;for(let P of vt)if(P.re.test(x)){w=P.key;break}if(w||(A==="temperature"?w="temperature":A==="humidity"?w="humidity":A==="pressure"||A==="atmospheric_pressure"?w="pressure":A==="wind_speed"?w="wind_speed":A==="irradiance"?w="solar_radiation":A==="illuminance"?w="illuminance":A==="precipitation_intensity"?w="precipitation":/(^|[\s_-])temperature/.test(x)?w="temperature":/pressure/.test(x)&&(w="pressure")),!w||At.indexOf(w)===-1)return null;let b=0;if(/indoor|inside/.test(x)||w==="uv_index"&&!/index|\buvi\b/.test(x))return null;if(w==="apparent_temperature"&&/chill|heat[\s_-]?index/.test(x)&&(b+=10),/globe|wbgt|soil|water|pool|probe|leaf|\bch[\s_-]?\d|(temperature|humidity)[\s_-]?\d|_\d+$/.test(x.replace(/_2$/,""))&&(b+=40),/outdoor/.test(x)&&(b-=2),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(x)&&(b+=20),w==="pressure"){if(/deficit|vpd|vapou?r/.test(x))return null;/absolute/.test(x)&&(b+=50),/relative|sea/.test(x)&&(b-=5)}return w==="precipitation"&&(/rate/.test(x)&&(b-=5),/event|hourly|24h|total/.test(x)&&(b+=10)),{key:w,penalty:b}}let J9=new WeakMap;function L4(c,m){let d=c&&c.devices||{},A=J9.get(d);return A||(A=new Map,J9.set(d,A)),A.has(m)||A.set(m,t6(d,m)),A.get(m)}function t6(c,m){let d=c[m],A=d&&d.config_entries||[];return A.length?Object.keys(c).filter(x=>x!==m&&(c[x].config_entries||[]).some(w=>A.includes(w))):[]}let e6=new WeakMap;function l7(c,m){if(!c||!c.entities)return M7(c,m);let d=e6.get(c.entities);d||(d=new Map,e6.set(c.entities,d));let A=[m,...L4(c,m)],x="";for(let D of A)for(let W of w3(c,D))c.states[W]&&(x+=W.length+",");let w=m+"|"+A.length+"|"+x,b=d.get(m);if(b&&b.key===w&&b.devices===c.devices)return b.map;let P=M7(c,m);return d.set(m,{key:w,devices:c.devices,map:P}),P}function M7(c,m){let d={},A={},x=w3(c,m).map(b=>[b,0]),w=L4(c,m).flatMap(b=>w3(c,b).map(P=>[P,15]));for(let[b,P]of[...x,...w]){let D=X9(c,b);if(!D)continue;let W={key:D.key,penalty:D.penalty+P};(A[W.key]==null||W.penalty<A[W.key])&&(A[W.key]=W.penalty,d[W.key]=b)}return d}function j0(c,m,d){let A={...l7(m,d)},x=c&&c.metric_sources&&c.metric_sources.device_map&&c.metric_sources.device_map[d]||{};for(let w in x)x[w]&&(A[w]=x[w]);return A}function r6(c,m){let d=c&&c.metric_sources||{};if(Array.isArray(d.sources))return d.sources.filter(D=>D&&D.ref).map(D=>({ref:D.ref,overrides:{...D.overrides||{}},disabled:!!D.disabled}));let A=[],x=d.device_map||{},w=d.custom||{},b=D=>K1(D)?{...x[x2(D)]||{}}:{},P=d.primary||c&&c.entity;return P&&A.push({ref:P,overrides:{...b(P),...w}}),d.fallback&&d.fallback!==P&&A.push({ref:d.fallback,overrides:b(d.fallback)}),A}L1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},L1._wfcSources=function(){return r6(this.config,this.hass)},L1._wfcSlotEntityForKey=function(c,m){return c?K1(c)?j0(this.config,this.hass,x2(c))[m]||null:c:null},L1._wfcMetricEntityChain=function(c){let m=[],d=A=>{A&&!m.includes(A)&&this.hass&&this.hass.states[A]&&m.push(A)};for(let A of this._wfcSources())A.disabled||(A.overrides&&A.overrides[c]&&d(A.overrides[c]),d(this._wfcSlotEntityForKey(A.ref,c)));return d(this.config&&this.config.entity),m},L1._wfcCurrentMetric=function(c){for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather."))try{let A=I7(this.hass,d,this.config,c);if(A!=null&&A!=="")return A}catch{}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let x=d.attributes&&d.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(d):x?`${A} ${x}`:`${A}`}catch{return x?`${A} ${x}`:`${A}`}}}}return null},L1._wfcCurrentMetricRaw=function(c){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather.")){let A=d.attributes?d.attributes[c]:null;if(A!=null&&A!=="")return A}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let x=Number(A);return isNaN(x)?A:x}}}return null},L1._wfcMergedCurrentEntity=function(c){try{if(!c||!c.attributes)return c;let m=this.config&&this.config.entity;if(!this._wfcSources().some(P=>P.ref!==m||P.overrides&&Object.keys(P.overrides).length))return c;let x={...c.attributes},w=!1,b=["temperature",...typeof N2<"u"?N2:[]];for(let P of b){let D=this._wfcCurrentMetricRaw(P);D!=null&&D!==x[P]&&(x[P]=D,w=!0)}return w?{...c,attributes:x}:c}catch{return c}},L1._wfcDetailValue=function(c,m){let d=o[c];if(!d)return null;if(d.kind==="sunrise"||d.kind==="sunset"){let A=V2(this.hass),x=d.kind==="sunrise"?A.sunrise:A.sunset;return x?y1(this.hass,x):null}try{let A=this._wfcCurrentMetric(c);return A??null}catch{return null}},L1._wfcRenderDetails=function(c,m){let d=c.details||{},A=(d.items||[]).filter(P=>P.show);if(d.chips)return this._wfcRenderDetailChips(d,A,m);let x=[];if(A.forEach(P=>{let D=o[P.key];if(!D)return;let W=this._wfcDetailValue(P.key,m);if(W==null||W==="")return;let N=P.mode==="custom",a1=N?P.icon_color:d.global_icon_color,d1=N?P.icon_size:d.global_icon_size,$=N?P.text_color:d.global_text_color,l1=N?P.text_size:d.global_text_size,W1=P.icon||D.icon||U5&&U5[P.key]||"mdi:information-outline",E1=(a1?`color:${a1};`:"")+(d1?`--mdc-icon-size:${d1}px;width:${d1}px;height:${d1}px;`:""),F1=($?`color:${$};`:"")+(l1?`font-size:${l1}px;`:"");x.push(_`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${W1} style=${E1}></ha-icon>
          <span class="wsfc-detail-value" style=${F1}>${W}</span>
        </div>
      `)}),!x.length)return Z;if((d.details_layout||"grid")==="wrap")return _`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${x}</div>
      </div>`;let w=n(parseInt(c.details.columns,10)||2,1,4),b=`grid-template-columns:repeat(${w}, minmax(0, 1fr));`;return _`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${w}" style=${b}>${x}</div>
    </div>`},L1._wfcRenderDetailChips=function(c,m,d){let A=n(Number(c.chip_scale)||1,.5,2.5),w=(c.chip_pill!=null?!!c.chip_pill:c.chip_shape!=="rounded"&&c.chip_shape!=="square")?999:c.chip_radius==null?8:Number(c.chip_radius),b=c.chip_icon_source||"auto",P=c.chip_show_icon!==!1,D=c.chip_layout||"wrap",W=Math.max(0,parseInt(c.chip_columns,10)||0),N=c.chip_text_size?`${Number(c.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${A})`,a1=c.chip_icon_size?`${Number(c.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${A})`,d1=`--wfc-chip-scale:${A};--wfc-chip-radius:${w}px;--wfc-chip-font:${N};--wfc-chip-icon-size:${a1};`+(c.chip_bg?`--wfc-chip-bg:${c.chip_bg};`:"")+(c.chip_border_color?`--wfc-chip-border:${c.chip_border_color};`:"")+(c.chip_text_color?`--wfc-chip-text:${c.chip_text_color};`:"")+(c.chip_icon_color?`--wfc-chip-icon:${c.chip_icon_color};`:"");D==="grid"&&W>0&&(d1+=`grid-template-columns:repeat(${W}, minmax(0, 1fr));`);let $=[];return m.forEach(l1=>{let W1=o[l1.key];if(!W1)return;let E1=this._wfcDetailValue(l1.key,d);if(c.chip_hide_when_off&&(E1==null||E1===""||E1==="unknown"||E1==="unavailable"))return;let F1=E1==null||E1===""?"\u2014":E1,U1=W1.label||l1.key,M1=c.chip_show_name?`${U1}: ${F1}`:F1,$1="";P&&b!=="none"&&($1=b==="entity"&&l1.icon||W1.icon,$1=$1||U5&&U5[l1.key]||"mdi:information-outline"),$.push(_`
        <span class="wsfc-chip">
          ${$1?_`<ha-icon .icon=${$1}></ha-icon>`:Z}
          <span class="wsfc-chip-text">${M1}</span>
        </span>
      `)}),$.length?_`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${D}" style=${d1}>${$}</div>
    </div>`:Z},L1._wfcHourlySource=function(){let c=this._hourlyForecastEvent,m=c&&Array.isArray(c.forecast)&&c.forecast.length?c.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},L1._wfcExtraForecastEntities=function(){let c=this.config&&this.config.entity,m=new Set,d=A=>{A&&A!==c&&typeof A=="string"&&A.startsWith("weather.")&&this.hass&&this.hass.states[A]&&m.add(A)};for(let A of this._wfcSources())A.disabled||(d(A.ref),A.overrides&&Object.values(A.overrides).forEach(d));return[...m]},L1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let c=new Set(this._wfcExtraForecastEntities());for(let x of Object.keys(this.__wfcSrc))if(!c.has(x)){try{this.__wfcSrc[x].unsub&&this.__wfcSrc[x].unsub()}catch{}delete this.__wfcSrc[x]}let m=this.config.forecast_types||"both",d=m!=="daily",A=m!=="hourly";c.forEach(x=>{if(this.__wfcSrc[x])return;let w={unsub:null,hourly:null,daily:null};this.__wfcSrc[x]=w;let b=(P,D)=>{try{let W=this.hass.connection.subscribeMessage(N=>{w[D]=N&&Array.isArray(N.forecast)?N.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:P,entity_id:x},{resubscribe:!1});Promise.resolve(W).then(N=>{if(this.__wfcSrc[x]!==w){try{N&&N()}catch{}return}let a1=w.unsub;w.unsub=()=>{try{a1&&a1()}catch{}try{N&&N()}catch{}}}).catch(()=>{})}catch{}};d&&b("hourly","hourly"),A&&b(O5&&typeof O5=="function"&&O5(this.hass.states[x])||"daily","daily")})}catch{}},L1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let c of Object.keys(this.__wfcSrc))try{this.__wfcSrc[c].unsub&&this.__wfcSrc[c].unsub()}catch{}this.__wfcSrc={}}},L1._wfcSourceForecast=function(c,m){let d=this.__wfcSrc&&this.__wfcSrc[c];return d&&d[m]||null},L1._wfcMergeForecast=function(c,m){try{if(!Array.isArray(c)||!c.length)return c;let d=this.config&&this.config.entity,A=this._wfcExtraForecastEntities();if(!A.length)return c;let x={};if(A.forEach(D=>{let W=this._wfcSourceForecast(D,m);Array.isArray(W)&&W.length&&(x[D]=W.map(N=>({t:new Date(N.datetime).getTime(),fc:N})).filter(N=>!isNaN(N.t)))}),!Object.keys(x).length)return c;let w=(D,W)=>{let N=x[D];if(!N)return null;let a1=null,d1=1/0;for(let $ of N){let l1=Math.abs($.t-W);l1<d1&&(d1=l1,a1=$.fc)}return d1<=90*6e4?a1:null},b=U0.map(D=>D.key),P={};return b.forEach(D=>{P[D]=this._wfcMetricEntityChain(D).filter(W=>W===d||x[W])}),c.map(D=>{let W=new Date(D.datetime).getTime();if(isNaN(W))return D;let N=D;return b.forEach(a1=>{for(let d1 of P[a1]){if(d1===d){if(D[a1]!=null)break;continue}let $=w(d1,W);if($&&$[a1]!=null){N===D&&(N={...D}),N[a1]=$[a1];break}}}),N})}catch{return c}},L1._wfcCloudAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let x=0;x<m.length;x++){let w=new Date(m[x].datetime);if(isNaN(w))continue;let b=Math.abs(w.getTime()-c.getTime());b<A&&(A=b,d=m[x])}return!d||A>90*6e4?null:V(d.cloud_coverage)?d.cloud_coverage/100:V(d.precipitation_probability)?d.precipitation_probability/100:null},L1._wfcForecastAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let x=0;x<m.length;x++){let w=new Date(m[x].datetime);if(isNaN(w))continue;let b=Math.abs(w.getTime()-c.getTime());b<A&&(A=b,d=m[x])}return d&&A<=90*6e4?d:null},L1._wfcSunHours=function(c){c=c||{};let m=new Date,d,A;if(c.timeframe_mode==="day")d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5);else if(c.timeframe_mode==="match_arc"){let P=V2(this.hass,m);P.sunrise&&P.sunset?(d=new Date(P.sunrise.getTime()-60*6e4),A=new Date(P.sunset.getTime()+60*6e4)):(d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5))}else{let P=n(Number(c.timeframe_hours)||24,1,72)*36e5;c.timeframe_anchor==="now_center"?(d=new Date(m.getTime()-P/2),A=new Date(m.getTime()+P/2)):(d=new Date(m),d.setMinutes(0,0,0),A=new Date(d.getTime()+P))}let x=A.getTime()-d.getTime(),w=n(Math.round(x/36e5),2,72),b=[];for(let P=0;P<=w;P++){let D=new Date(d.getTime()+x*P/w);b.push({date:D,cloud:this._wfcCloudAt(D)})}return b},L1._wfcFmtTime=function(c,m){if(!(c instanceof Date)||isNaN(c))return"--";let d=m1(this.hass);try{return m==="12"?c.toLocaleTimeString(d,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit",hour12:!1}):c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit"})}catch{return c.toTimeString().slice(0,5)}},L1._wfcSkyGradient=function(c){let m=this._wfcSunHours(c);if(m.length<2)return null;let{lat:d,lng:A}=I1(this.hass);if(!V(d)||!V(A))return null;let x=c.weather_adjust!==!1,w=m.length,b=[];for(let P=0;P<w;P++){let D=Z1(G1(this.hass,m[P].date)),W=(P/(w-1)*100).toFixed(2),N=H1(D,{day_color:c.day_color,night_color:c.night_color,cloud:x?m[P].cloud:0});b.push(`${N} ${W}%`)}return{gradient:`linear-gradient(to right, ${b.join(", ")})`,hours:m}},L1._wfcSunMarker=function(c,m){if(m==null)return Z;let d=c.marker_color||"var(--primary-text-color)",A=n(Number(c.marker_opacity==null?100:c.marker_opacity),0,100)/100;return _`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${d};opacity:${A};"></div>`},L1._wfcSunRiseSetMarkers=function(c,m,d,A){let{sunrise:x,sunset:w}=V2(this.hass);if(!x||!w||d<=m)return Z;let b=c.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",P=n(Number(c.ss_markers_opacity==null?100:c.ss_markers_opacity),0,100)/100,D=[];return[x.getTime(),w.getTime()].forEach(W=>{if(W<m||W>d)return;let N=((W-m)/(d-m)*100).toFixed(2);D.push(_`<span class="wsfc-sunpos-ssmark" style="left:${N}%;background:${b};opacity:${P};"></span>`)}),D.length?_`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${A}">${D}</div>`:Z},L1._wfcRenderSunPosition=function(c,m){let d=c.sun_position,A=this._wfcSkyGradient(d);if(!A)return Z;let{gradient:x,hours:w}=A,b=w.length,P=d.times_position||"below";P==="center"&&(P="overlay");let D=d.ticks_position||"hidden",W=P!=="hidden",N=D!=="hidden",a1=n(parseInt(d.ticks_every,10)||0,0,24),d1;if(a1>0&&b>1){let Y=(w[b-1].date.getTime()-w[0].date.getTime())/36e5,f1=Y>0?Y/(b-1):1;d1=Math.max(1,Math.round(a1/f1))}else d1=Math.max(1,Math.round((b-1)/8));let $=Y=>(Y/(b-1)*100).toFixed(2),l1=[];if(W)for(let Y=0;Y<b;Y+=d1){let f1;try{f1=w[Y].date.toLocaleTimeString(m1(this.hass),{hour:"numeric"})}catch{f1=w[Y].date.getHours()+""}l1.push(_`<span class="wsfc-sunpos-tick" style="left:${$(Y)}%">${f1}</span>`)}let W1=d.times_color||"var(--secondary-text-color, #9e9e9e)",E1=[];if(N)for(let Y=0;Y<b;Y+=d1)E1.push(_`<span class="wsfc-sunpos-mark" style="left:${$(Y)}%;background:${W1};"></span>`);let F1=Date.now(),U1=w[0].date.getTime(),M1=w[b-1].date.getTime(),r0=F1>=U1&&F1<=M1&&M1>U1?n((F1-U1)/(M1-U1)*100,0,100):null,l5=Number(d.height)||44,E2=`font-size:${Number(d.times_font_size)||11}px;font-weight:${d.times_font_weight||"400"};`+(d.times_color?`color:${d.times_color};`:""),$5=Y=>_`<div class="wsfc-sunpos-ticks${Y||""}" style=${E2}>${l1}</div>`,h2=Y=>_`<div class="wsfc-sunpos-marks${Y||""}">${E1}</div>`,u2=d.ss_markers_position||"hidden",Y1=u2!=="hidden",z2=B(d),g2={};z2.forEach(Y=>g2[Y.key]=Y.pos);let M5=g2.temps&&g2.temps!=="hidden",i0=g2.icons&&g2.icons!=="hidden",D5=d.forecast_temp_color||d.forecast_color||"",o0=d.forecast_icon_color||d.forecast_color||"",C0=d.forecast_extra_color||d.forecast_color||"",q0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),_2=d.forecast_metric_style||{},a0=Y=>_2[Y]&&_2[Y].text_color||(Y==="temps"?D5:C0),g5=Y=>_2[Y]&&_2[Y].icon_color||o0,p7=Y=>_2[Y]&&_2[Y].icon_size||d.forecast_icon_size,Z3=Y=>_2[Y]&&_2[Y].text_size||d.forecast_font_size||11,k3=Y=>p2(_2[Y]&&_2[Y].contrast||"",q0),A1=Y=>{let f1=a0(Y),T1=k3(Y);return`font-size:${Number(Z3(Y))||11}px;`+(f1?`color:${f1};`:"")+(T1?`text-shadow:${T1};`:"")},F2=Y=>{let f1=g5(Y),T1=p7(Y),D1=k3(Y);return(f1?`color:${f1};`:"")+(T1?`--mdc-icon-size:${T1}px;width:${T1}px;height:${T1}px;`:"")+(D1?`filter:drop-shadow(${D1});`:"")},N1=y.some(Y=>g2[Y]&&g2[Y]!=="hidden"),R5=[];if(M5||i0||N1){let Y=this._wfcHourlySource()||[];for(let f1 of Y){let T1=new Date(f1.datetime);if(isNaN(T1))continue;let D1=T1.getTime();D1<U1||D1>M1||R5.push({t:D1,fc:f1})}R5.sort((f1,T1)=>f1.t-T1.t)}let n0=M1-U1,v0=Y=>n0>0?((Y-U1)/n0*100).toFixed(2):"0",H0=(Y,f1)=>{let T1=null,D1=1/0;for(let $2 of R5){let Y2=Math.abs($2.t-Y);Y2<D1&&(D1=Y2,T1=$2.fc)}return D1<=f1?T1:null},G2={},L2=Y=>{let f1=Y==null?"":String(Y);if(G2[f1])return G2[f1];let T1=[];if(R5.length||Y==="ticks"||Y==="midticks"){let D1=Y==="all"||Y==="0",$2=Y==="ticks",Y2=Y==="midticks";if($2||Y2){let z5=n0>0&&b>1?n0/(b-1)*d1:36e5,T3=Math.max(z5/2,90*6e4),P3=Y2?d1/2:0;for(let c5=P3;c5<=b-1;c5+=d1){let o5=Math.floor(c5),kt=Math.min(b-1,Math.ceil(c5)),L6=c5-o5,S5=w[o5].date.getTime()+(w[kt].date.getTime()-w[o5].date.getTime())*L6;if(S5<U1||S5>M1)continue;let l6=(c5/(b-1)*100).toFixed(2);T1.push({pct:l6,fc:H0(S5,T3)})}}else if(D1)for(let z5 of R5)T1.push({pct:v0(z5.t),fc:z5.fc});else{let z5=n(parseInt(Y,10)||3,1,6),T3=null,P3=z5*36e5;for(let c5 of R5)(T3==null||c5.t-T3>=P3-6e4)&&(T1.push({pct:v0(c5.t),fc:c5.fc}),T3=c5.t)}}return G2[f1]=T1,T1},r5=Y=>{let f1=_2[Y]&&_2[Y].every;return f1!=null&&f1!==""?f1:d.forecast_every},l2=Y=>{let f1=L2(r5("temps"));return _`<div class="wsfc-sunpos-fc${Y||""}" style=${A1("temps")}>${f1.map(T1=>{let D1=T1.fc&&T1.fc.temperature!=null?Math.round(T1.fc.temperature)+"\xB0":"";return D1?_`<span class="wsfc-sunpos-fc-item" style="left:${T1.pct}%">${D1}</span>`:Z})}</div>`},B5=Y=>{let f1=F2("icons"),T1=L2(r5("icons"));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${Y||""}">${T1.map(D1=>{let $2=D1.fc&&D1.fc.condition?M(D1.fc.condition):"";return $2?_`<span class="wsfc-sunpos-fc-item" style="left:${D1.pct}%"><ha-icon .icon=${$2} style=${f1}></ha-icon></span>`:Z})}</div>`},u7=!!d.forecast_metric_detail_icons,x1=(Y,f1)=>{let T1=F2(Y),D1=L2(r5(Y));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${f1||""}" style=${A1(Y)}>${D1.map($2=>{let Y2=$2.fc?K(Y,$2.fc):null;if(Y2==null)return Z;let z5=J(Y,u7);return _`<span class="wsfc-sunpos-fc-item" style="left:${$2.pct}%">${z5?_`<ha-icon .icon=${z5} style=${T1}></ha-icon>`:Z}<span class="wsfc-sunpos-fc-extra-val">${Y2}</span></span>`})}</div>`},R1=Y=>{let f1=F2("icons"),T1=L2(r5("icons"));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${Y||""}" style=${A1("temps")}>${T1.map(D1=>{let $2=D1.fc&&D1.fc.condition?M(D1.fc.condition):"",Y2=D1.fc&&D1.fc.temperature!=null?Math.round(D1.fc.temperature)+"\xB0":"";return!$2&&!Y2?Z:_`<span class="wsfc-sunpos-fc-item" style="left:${D1.pct}%">${$2?_`<ha-icon .icon=${$2} style=${f1}></ha-icon>`:Z}${Y2?_`<span class="wsfc-sunpos-fc-temp-val">${Y2}</span>`:Z}</span>`})}</div>`},S2=!!d.forecast_temp_with_icon&&M5&&i0&&g2.temps===g2.icons,w2=(Y,f1)=>S2&&Y==="icons"?R1(f1):Y==="temps"?l2(f1):Y==="icons"?B5(f1):x1(Y,f1),i5=Y=>z2.filter(f1=>f1.pos===Y&&!(S2&&f1.key==="temps")).map(f1=>f1.key),_5=i5("overlay"),_1=[];_5.length===1?_1.push(w2(_5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):_5.forEach((Y,f1)=>{let T1=f1===0?" wsfc-sunpos-fc-ovl-top":f1===_5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";_1.push(w2(Y," wsfc-sunpos-fc-ovl"+T1))});let O3=i5("above").map(Y=>w2(Y)),q2=i5("below").reverse().map(Y=>w2(Y));return _`
      <div class="wsfc-sunpos-section">
        ${O3}
        ${Y1&&u2==="above"?this._wfcSunRiseSetMarkers(d,U1,M1,"row"):Z}
        ${N&&D==="above"?h2():Z}
        ${W&&P==="above"?$5():Z}
        <div class="wsfc-sunpos-bar" style="height:${l5}px;background:${x}">
          ${Y1&&u2==="overlay"?this._wfcSunRiseSetMarkers(d,U1,M1,"overlay"):Z}
          ${this._wfcSunMarker(d,r0)}
          ${N&&D==="overlay"?h2(" wsfc-sunpos-marks-center"):Z}
          ${W&&P==="overlay"?$5(" wsfc-sunpos-ticks-center"):Z}
          ${_1}
        </div>
        ${W&&P==="below"?$5():Z}
        ${N&&D==="below"?h2():Z}
        ${Y1&&u2==="below"?this._wfcSunRiseSetMarkers(d,U1,M1,"row"):Z}
        ${q2}
      </div>
    `},L1._wfcArcWindow=function(c,m,d){let A=c.timeframe_mode||"sunrise_sunset",x=Date.now();if(A==="day"){let w=new Date(x);return w.setHours(0,0,0,0),{t0:w.getTime(),t1:w.getTime()+24*36e5}}if(A==="hours"){let w=n(Number(c.timeframe_hours)||24,1,72)*36e5;if(c.timeframe_anchor==="now_center")return{t0:x-w/2,t1:x+w/2};let b=new Date(x);return b.setMinutes(0,0,0),{t0:b.getTime(),t1:b.getTime()+w}}return{t0:m,t1:d}},L1._wfcRenderSunArc=function(c,m){let d=c.sun_arc,{sunrise:A,sunset:x}=V2(this.hass);if(!A||!x)return Z;let w=Date.now(),b=A.getTime(),P=x.getTime(),D=P-b,W;if(d.baseline_mode==="sky"&&c.sun_position){let x1=this._wfcSunHours(c.sun_position);x1&&x1.length>=2&&(W={t0:x1[0].date.getTime(),t1:x1[x1.length-1].date.getTime()})}W||(W=this._wfcArcWindow(d,b,P));let N=W.t0,a1=W.t1,d1=a1-N||1,$=x1=>n((x1-N)/d1,0,1),l1=100,W1=78,E1=14,F1=$(b),U1=$(P),M1=U1-F1,$1=x1=>{if(M1<=0||x1<=F1||x1>=U1)return W1;let R1=(x1-F1)/M1;return W1-(W1-E1)*(1-Math.pow(2*R1-1,2))},r0=96,l5="";for(let x1=0;x1<=r0;x1++){let R1=x1/r0;l5+=(x1===0?"M":"L")+(R1*l1).toFixed(2)+" "+$1(R1).toFixed(2)+" "}let E2=w>=N&&w<=a1,$5=w>=b&&w<=P,h2=$(w),u2=(h2*100).toFixed(2),Y1=($1(h2)/l1*100).toFixed(2),z2=Number(d.height)||90,g2=d.time_format||"auto",M5=d.tick_color||"var(--secondary-text-color, #9e9e9e)",i0=[];{let x1=new Date(N);x1.setMinutes(0,0,0),x1.getTime()<N&&x1.setTime(x1.getTime()+36e5);for(let R1=x1.getTime();R1<=a1;R1+=36e5)i0.push($(R1))}let D5=[];d.show_arc_ticks&&i0.forEach(x1=>{if(x1<=0||x1>=1)return;let R1=(x1*l1).toFixed(2),S2=$1(x1);D5.push(w1`<line x1="${R1}" y1="${(S2-2.5).toFixed(2)}" x2="${R1}" y2="${(S2+2.5).toFixed(2)}" stroke="${M5}" stroke-width="0.6"></line>`)});let o0=[];d.show_base_ticks&&i0.forEach(x1=>{let R1=(x1*l1).toFixed(2);o0.push(w1`<line x1="${R1}" y1="${W1}" x2="${R1}" y2="${W1+3}" stroke="${M5}" stroke-width="0.6"></line>`)});let C0=d.sunrise_sunset_ticks||"none",q0=C0==="arc"||C0==="both",_2=C0==="base"||C0==="both",a0=[];b>=N&&b<=a1&&a0.push($(b)),P>=N&&P<=a1&&a0.push($(P)),q0&&a0.forEach(x1=>{let R1=(x1*l1).toFixed(2),S2=$1(x1);D5.push(w1`<line x1="${R1}" y1="${(S2-4.5).toFixed(2)}" x2="${R1}" y2="${(S2+4.5).toFixed(2)}" stroke="${M5}" stroke-width="1.4"></line>`)}),_2&&a0.forEach(x1=>{let R1=(x1*l1).toFixed(2);o0.push(w1`<line x1="${R1}" y1="${(W1-2).toFixed(2)}" x2="${R1}" y2="${W1+6}" stroke="${M5}" stroke-width="1.4"></line>`)});let g5=Z;if(E2){let x1="wsfc-sunarc-sun"+($5?"":" wsfc-sunarc-sun-night"),R1=`left:${u2}%;top:${Y1}%;`;if(!$5&&d.night_moon&&d.moon_icon==="phase"){let S2=f0.getMoonIllumination(new Date).phase,w2=10,i5=11,_5=Math.cos(S2*2*Math.PI),_1=Math.abs(_5)*w2,O3=S2<.5?1:0,q2=`M${i5} ${i5-w2} A${w2} ${w2} 0 0 ${O3} ${i5} ${i5+w2} A${_1} ${w2} 0 0 ${_5>0?1-O3:O3} ${i5} ${i5-w2} Z`;g5=_`<span class="${x1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${R1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${q2} fill="#e9e6d6"></path></svg></span>`}else if(!$5&&d.night_moon){let S2=d.moon_icon||"mdi:weather-night";g5=_`<ha-icon class="${x1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${S2} style=${R1}></ha-icon>`}else d.sun_icon?g5=_`<ha-icon class="${x1} wsfc-sunarc-sun-icon" .icon=${d.sun_icon} style=${R1}></ha-icon>`:g5=_`<span class="${x1} wsfc-sunarc-sun-dot" style=${R1}></span>`}let p7=`font-size:${Number(d.time_font_size)||13}px;font-weight:${d.time_font_weight||"600"};`+(d.time_color?`color:${d.time_color};`:""),Z3=`font-size:${Number(d.caption_font_size)||11}px;font-weight:${d.caption_font_weight||"400"};`+(d.caption_color?`color:${d.caption_color};`:""),k3=d.show_times!==!1,A1=d.show_captions!==!1,F2=!!d.show_ss_icons,N1=d.ss_icon_position||"left",R5=(d.ss_icon_color?`color:${d.ss_icon_color};`:"")+(d.ss_icon_size?`--mdc-icon-size:${d.ss_icon_size}px;width:${d.ss_icon_size}px;height:${d.ss_icon_size}px;`:""),n0=x1=>{if(!F2)return Z;let R1=x1==="sunrise"?d.sunrise_icon||"mdi:weather-sunset-up":d.sunset_icon||"mdi:weather-sunset-down";return _`<ha-icon class="wsfc-sunarc-ssicon" .icon=${R1} style=${R5}></ha-icon>`},v0=(x1,R1,S2,w2)=>{let i5=_`<div class="wsfc-sunarc-endtext">
        ${k3?_`<div class="wsfc-sunarc-time" style=${p7}>${x1}</div>`:Z}
        ${A1?_`<div class="wsfc-sunarc-cap" style=${Z3}>${R1}</div>`:Z}
      </div>`,_5=n0(w2);return _`<div class="wsfc-sunarc-end${S2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${N1==="above"?"column":N1==="below"?"column-reverse":N1==="right"?"row-reverse":"row"};">${_5}${i5}</div>
      </div>`},H0=k3||A1||F2,G2=H0?_`<div class="wsfc-sunarc-labels">
          ${v0(this._wfcFmtTime(A,g2),"sunrise",!1,"sunrise")}
          ${v0(this._wfcFmtTime(x,g2),"sunset",!0,"sunset")}
        </div>`:Z,L2=d.labels_position;L2==="below"||L2==null?L2=0:L2==="above"?L2=100:L2==="mid"?L2=50:L2=n(Number(L2),0,100);let r5=d.baseline_mode==="sky"&&c.sun_position,l2=r5?this._wfcRenderSunPosition(c,m):Z,B5=r5&&l2!==Z?Z:w1`<line class="wsfc-sunarc-horizon" x1="0" y1="${W1}" x2="${l1}" y2="${W1}"></line>`,u7=_`
      <div class="wsfc-sunarc-svg-wrap" style="height:${z2}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${l1} 100" preserveAspectRatio="none">
          ${B5}
          <path class="wsfc-sunarc-path" d=${l5.trim()}></path>
          ${D5}
          ${o0}
        </svg>
        ${g5}
        ${H0&&L2>0&&L2<100?_`<div class="wsfc-sunarc-overlay" style="top:${(100-L2).toFixed(1)}%;transform:translateY(-50%);">${G2}</div>`:Z}
      </div>
    `;return _`
      <div class="wsfc-sunarc-section">
        ${H0&&L2>=100?G2:Z}
        ${u7}
        ${r5&&l2!==Z?_`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-W1)/100)*z2).toFixed(1)}px;">${l2}</div>`:Z}
        ${H0&&L2<=0?G2:Z}
      </div>
    `},L1._wfcStyleTag=function(){return _`<style>
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
    </style>`};let q=e0.prototype,i6=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),l4={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},b3=null;function o6(){return b3||(b3=new Set,Object.values(c7).forEach(c=>c.forEach(m=>b3.add(m)))),b3}function M4(c,m){let d=[];return c.forEach(A=>{if(!m.has(A.name))if(A.schema){let x=M4(A.schema,m);x.length&&d.push({...A,schema:x})}else d.push(A)}),d}function xt(c){let m=o6(),d=new Set([...m,...i6]);c=M4(c,d);let A=new Map,x=[];c.forEach(W=>{i6.has(W.name)||(W.type==="expandable"?x.push(W):A.set(W.name,W))});let w=W=>W.map(N=>A.get(N)).filter(Boolean),b=(W,N,a1)=>{let d1=w(a1);return d1.length?[{name:W,type:"expandable",flatten:!0,icon:N,schema:d1}]:[]},P=W=>x.find(N=>N.name===W),D=[];{let W=P("attribute_entities");W&&D.push(l4.attribute_entities?{...W,icon:l4.attribute_entities}:W)}return D}let Gr=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],gt=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],_t=["tap_action","hold_action","double_tap_action"],St=["show_condition_effects"],wt=[],c7={current:["current.show_attributes"],hourly:[],daily:[]},C6={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},bt="Weather Flex sections";q.render=function(){if(!this.hass||!this._config)return Z;let c=rt(this._config),m=this._getSelectedAttributes(c),d=this._schema(this.localize.bind(this),m,c["forecast.mode"]),A=xt(d),x=b=>C6[b.name]||this._computeLabel(b)||b.name,w=this._wfcAccordionEnabled();return _`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${bt}</span>
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
            .computeLabel=${x}
            .computeHelper=${b=>this._wfcHelper(b)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:Z}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},q._wfcCardAppearancePanel=function(){let c=s2(this._config).card||{},m="card";return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${l4.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(St)}
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
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((c.glow_intensity==null?1:c.glow_intensity)*100),100,"glow_intensity",d=>this._wfcSetSecField(m,"glow_intensity",n((parseInt(d.target.value,10)||100)/100,.2,3)))}
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
    `};let c4=4;q._wfcEdSources=function(){return r6(this._config,this.hass)},q._wfcCommitSources=function(c){let m=c.filter(W=>W&&W.ref).map(W=>{let N={};for(let d1 in W.overrides||{})W.overrides[d1]&&(N[d1]=W.overrides[d1]);let a1={ref:W.ref};return Object.keys(N).length&&(a1.overrides=N),W.disabled&&(a1.disabled=!0),a1}),d={...this._config.metric_sources||{}};delete d.primary,delete d.fallback,delete d.custom,delete d.device_map,m.length?d.sources=m:delete d.sources;let A={...this._config,metric_sources:d},x=W=>{let N=this.hass&&this.hass.states[W],a1=N&&N.attributes&&N.attributes.supported_features;return typeof a1=="number"&&(a1&7)!==0},w=W=>W.map(N=>N.ref).filter(N=>typeof N=="string"&&N.startsWith("weather.")),b=w(m.filter(W=>!W.disabled)),P=w(m),D=b.find(x)||b[0]||P.find(x)||P[0];D&&(A.entity=D),Object.keys(d).length===0&&delete A.metric_sources,o2(this,"config-changed",{config:A})},q._wfcSetSourceRef=function(c,m){let d=this._wfcEdSources();d[c]&&(m?d[c]={ref:m,overrides:d[c].overrides||{}}:d.splice(c,1),this._wfcCommitSources(d))},q._wfcAddSource=function(c){if(!c)return;let m=this._wfcEdSources();m.length>=c4||(m.push({ref:c,overrides:{}}),this._wfcCommitSources(m))},q._wfcMoveSource=function(c,m){let d=this._wfcEdSources(),A=c+m;if(c<0||A<0||A>=d.length)return;let x=d[c];d[c]=d[A],d[A]=x,this._wfcCommitSources(d)},q._wfcRemoveSource=function(c){let m=this._wfcEdSources();c<0||c>=m.length||(m.splice(c,1),this._wfcCommitSources(m))},q._wfcToggleSourceDisabled=function(c){let m=this._wfcEdSources();m[c]&&(m[c].disabled=!m[c].disabled,this._wfcCommitSources(m))},q._wfcSetSourceOverride=function(c,m,d){let A=this._wfcEdSources();if(!A[c])return;let x={...A[c].overrides||{}};d?x[m]=d:delete x[m],A[c].overrides=x,this._wfcCommitSources(A)},q._wfcLiveValue=function(c,m){let d=this.hass&&this.hass.states[c];if(!d)return"";let A,x;return c.startsWith("weather.")?(A=d.attributes?d.attributes[m]:null,x=d.attributes&&d.attributes[m+"_unit"]):(A=d.state,x=d.attributes&&d.attributes.unit_of_measurement),A==null||A===""||A==="unknown"||A==="unavailable"?"":x?`${A} ${x}`:`${A}`},q._wfcAvailableMetrics=function(){let c=new Set;if(!this.hass)return c;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let A of this._wfcEdSources())if(!A.disabled)if(A.overrides&&Object.keys(A.overrides).forEach(x=>{c.add(x),m.add(A.overrides[x])}),K1(A.ref)){let x=j0(this._config,this.hass,x2(A.ref));Object.keys(x).forEach(w=>{c.add(w),m.add(x[w])})}else A.ref&&m.add(A.ref);m.forEach(A=>{let x=this.hass.states[A];x&&x.attributes&&Object.keys(x.attributes).forEach(w=>c.add(w))});let d=A=>{if(Array.isArray(A))for(let x of A)x&&Object.keys(x).forEach(w=>c.add(w))};return d(this._hourlyForecastData),d(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(A=>{A&&(d(A.hourly),d(A.daily))}),c};function yt(c){return String(c).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let v5={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function p1(c){return v5[c]||yt(c)}q._wfcMetricOptions=function(c,m){let d=this._wfcAvailableMetrics(),A=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(c||[]).forEach(x=>{let w=p1(x);A.push({value:x,label:d.has(x)?w:`${w} (unavailable)`})}),A},q._wfcSourceMappingEditor=function(c,m){let d=m.ref,A=m.overrides||{},x=K1(d),w=x?x2(d):null,b=x?l7(this.hass,w):{},P=N=>{if(x)return b[N]||"";if(!d)return"";if(d.startsWith("weather.")){let a1=this.hass&&this.hass.states[d];return a1&&a1.attributes&&a1.attributes[N]!=null?d:""}return""},D=x?{include_entities:w3(this.hass,w)}:{},W=N=>{let a1=N.key,d1=A[a1]||P(a1),$=!!A[a1],l1=d1?this._wfcLiveValue(d1,a1):"",W1=[{name:"e",selector:{entity:D}}],E1=$?" (override)":d1?"":" \u2014 none";return _`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:d1}}
            .schema=${W1}
            .computeLabel=${()=>N.label+E1}
            @value-changed=${F1=>this._wfcSetSourceOverride(c,a1,F1.detail&&F1.detail.value&&F1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${l1||"\u2014"}</span>
        </div>
      `};return _`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${x?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${x?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${U0.map(W)}
        </div>
      </details>
    `},q._wfcSourceSummaryList=function(c){let m=c.ref,d=c.overrides||{},A=K1(m),x=A?l7(this.hass,x2(m)):{},w=P=>{if(d[P])return d[P];if(A)return x[P]||"";if(m&&m.startsWith("weather.")){let D=this.hass&&this.hass.states[m];return D&&D.attributes&&D.attributes[P]!=null?m:""}return""},b=[];return U0.forEach(P=>{let D=w(P.key);if(!D)return;let W=this._wfcLiveValue(D,P.key);b.push(_`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${P.label}</span>
          <span class="wsfc-cond-ent" title=${D}>${D}</span>
          <span class="wsfc-cond-val">${W||"\u2014"}</span>
        </div>
      `)}),b.length?_`<div class="wsfc-cond-list">${b}</div>`:Z},q._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},q._wfcToggleSrcMap=function(c){let m=this._wfcSrcMapOpen();m.has(c)?m.delete(c):m.add(c),this.requestUpdate&&this.requestUpdate()},q._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},q._wfcSourceMetricCount=function(c){let m=c.ref,d=c.overrides||{},A=new Set(Object.keys(d).filter(x=>d[x]));if(K1(m))Object.keys(j0(this._config,this.hass,x2(m))).forEach(x=>A.add(x));else if(m&&m.startsWith("weather.")){let x=this.hass&&this.hass.states[m];x&&x.attributes&&U0.forEach(w=>{x.attributes[w.key]!=null&&A.add(w.key)})}return A.size},q._wfcSourceRow=function(c,m,d){let A=c.ref,x=K1(A),w=this._config.entity,b=x&&this.hass&&this.hass.devices&&this.hass.devices[x2(A)],P=x?b&&(b.name_by_user||b.name)||x2(A):A,D=x?"Device":A&&A.startsWith("weather.")?"Weather":"Sensor",W=x?"mdi:access-point":A&&A.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",N=!x&&A&&A.startsWith("weather."),a1=N&&A===w,d1=this._wfcSrcMapOpen().has(A),$=!!c.disabled,l1=this._wfcSourceMetricCount(c),W1=`${l1} value${l1===1?"":"s"} mapped`,E1=a1?_`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:N?_`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:_`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,F1="",U1=A&&!x?this.hass&&this.hass.states[A]:null;if(x)F1=l1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!U1)F1=`\u26A0 Entity not found: ${A}`;else if(U1.state==="unavailable"||U1.state==="unknown")F1=`\u26A0 Currently ${U1.state}.`;else if(N&&!a1){let M1=U1.attributes&&U1.attributes.supported_features;F1=typeof M1=="number"&&(M1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else N||(F1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return _`
      <div class="wsfc-src-row ${$?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${W}></ha-icon>
          <span class="wsfc-src-name">${P} <span class="wsfc-src-type">${D}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===d-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${$?"mdi:eye-off":"mdi:eye"} title=${$?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${d1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(A)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${E1}<span class="wsfc-src-count">${W1}</span>${$?_`<span class="wsfc-src-count">· hidden</span>`:Z}</div>
        ${F1?_`<div class="wsfc-src-detail">${F1}</div>`:Z}
        ${this._wfcSourceSummaryList(c)}
        ${d1?this._wfcSourceMappingEditor(m,c):Z}
      </div>
    `},q._wfcWeatherSourcesPanel=function(){let c=this._wfcEdSources(),m=c.some(b=>b.ref&&!K1(b.ref)&&b.ref.startsWith("weather.")),d=c.length>=c4,A=!!this.__wfcAddSourceOpen&&!d,x=_`
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
        @value-changed=${b=>{let P=b.detail&&b.detail.value&&b.detail.value.d;P&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(L5+P))}}
      ></ha-form>`;return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${d?_`<p class="wsfc-hint">Maximum of ${c4} sources reached. Remove one to add another.</p>`:_`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${A?"mdi:close":"mdi:plus"}></ha-icon>${A?"Cancel":"Add Source"}
              </div>
              ${A?_`<div class="wsfc-add-pickers">${x}${w}</div>`:Z}
            `}
          ${c.length?c.map((b,P)=>this._wfcSourceRow(b,P,c.length)):_`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!m&&c.length?_`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:Z}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},q._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},q._wfcHeadlineTempRow=function(){let c=this._config.current&&this._config.current.temperature_entity,m=c||"",d="";if(!m)for(let w of this._wfcEdSources()){if(w.disabled)continue;let b=this._wfcSlotEntityForKeyEd(w,"temperature");if(b&&this.hass&&this.hass.states[b]){m=b;break}}m?d=this.hass&&this.hass.states[m]&&this.hass.states[m].attributes&&this.hass.states[m].attributes.friendly_name||m:d="\u2014 none available \u2014";let A=m?this._wfcLiveValue(m,"temperature"):"",x=!!this.__wfcHeadlineEdit;return _`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${d}${c?_` <span class="wsfc-src-type">override</span>`:Z}</span>
          ${A?_`<span class="wsfc-srcmap-live">${A}</span>`:Z}
          <ha-icon class="wsfc-ico-btn ${x?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${x?_`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:Z}
      </div>
    `},q._wfcSlotEntityForKeyEd=function(c,m){if(c.overrides&&c.overrides[m])return c.overrides[m];let d=c.ref;if(!d)return null;if(K1(d))return j0(this._config,this.hass,x2(d))[m]||null;if(d.startsWith("weather.")){let A=this.hass&&this.hass.states[d];return A&&A.attributes&&A.attributes[m]!=null?d:null}return null},q._wfcSetForecastTypes=function(c,m){let d=c&&m?"both":c?"hourly":m?"daily":"both",A={...this._config,forecast_types:d};o2(this,"config-changed",{config:A})},q._wfcAdvancedPanel=function(){let c=this._config.forecast_types||"both",m=c==="both"||c==="hourly",d=c==="both"||c==="daily";return _`
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
          ${this._wfcStockFormFor(wt)}
        </div>
      </details>
    `},q._wfcUserActionsPanel=function(){let c=this._wfcStockFormFor(gt),m=this._wfcStockFormFor(_t),d=this._config.forecast||{};return _`
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
    `};let a6=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];q._wfcForecastTypeControls=function(c){let m=this._config.forecast||{},d=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],A=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],x=W=>m[`${W}_mode`]||m.mode||"simple",w=W=>(m[`${W}_extra_attribute`]!=null?m[`${W}_extra_attribute`]:m.extra_attribute)||"none",b=W=>(m[`${W}_chart_attribute`]!=null?m[`${W}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",P=(W,N,a1)=>{let d1=m[`${W}_${N}`];if(d1!=null)return!!d1;let $=m[N];return $!=null?!!$:a1},D=x(c)==="chart";return _`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${c}_mode`,"Display mode",d,x(c),"simple")}
        ${this._wfcForecastSelect(`${c}_extra_attribute`,"Extra metric",A,w(c),"none")}
      </div>
      ${D?_`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${c}_chart_attribute`,"Chart metric",a6,b(c),"temperature_and_precipitation")}
          </div>`:Z}
      ${this._wfcConfigCheckbox(`forecast.${c}_show_sun_times`,"Show sunrise & sunset times",P(c,"show_sun_times",!0),!0)}
      ${D?_`
            ${this._wfcConfigCheckbox(`forecast.${c}_use_color_thresholds`,"Use color thresholds",P(c,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${c}_show_attribute_selector`,"Show metric selector",P(c,"show_attribute_selector",!1),!1)}`:Z}
    `},q._wfcHelper=function(c){let m=this._computeHelper?this._computeHelper(c):void 0;return typeof m=="string"&&(m=m.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),m},q._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},q._wfcSetAccordion=function(c){let m=this._wfcState();m.editor_accordion=!!c,this._wfcCommit(m),this._wfcApplyAccordion()},q._wfcApplyAccordion=function(){let c=this.renderRoot||this.shadowRoot||this;!c||!c.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,c.addEventListener("toggle",m=>{let d=m.target;if(!d||!d.classList||!d.classList.contains("wsfc-panel")||(this._wfcRememberOpen(d),!d.open)||!this._wfcAccordionEnabled())return;(c.querySelectorAll?c.querySelectorAll("details.wsfc-panel"):[]).forEach(x=>{x!==d&&x.open&&(x.open=!1)})},!0))},q._wfcRememberOpen=function(c){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let m=this._wfcPanelKey(c);m&&(c.open?this.__wfcOpenPanels.add(m):this.__wfcOpenPanels.delete(m))},q._wfcPanelKey=function(c){let m=c.querySelector&&c.querySelector(".wsfc-panel-title");return m?(m.textContent||"").trim():""},q._wfcRestoreOpen=function(){let c=this.renderRoot||this.shadowRoot||this;!c||!c.querySelectorAll||!this.__wfcOpenPanels||c.querySelectorAll("details.wsfc-panel").forEach(m=>{let d=this._wfcPanelKey(m);d&&this.__wfcOpenPanels.has(d)&&(m.open=!0)})},q.updated=function(c){try{let m=Object.getPrototypeOf(q);m&&typeof m.updated=="function"&&m.updated.call(this,c)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},q._wfcEditorStyle=function(){return _`<style>
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
    </style>`};let n6="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";q._wfcCustomMetricsBody=function(){let c=i7(this._config.current&&this._config.current.show_attributes);return _`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${c.map((m,d)=>this._renderCustomAttributeRow(m,d))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${n6}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},q._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let d7={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function G0(c){if(c&&c.detail&&c.detail.value!==void 0)return c.detail.value;let m=c&&c.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function y3(c){let m=c&&c.target;return m&&typeof m.checked=="boolean"?m.checked:!!(c&&c.detail&&c.detail.value)}q._wfcState=function(){return JSON.parse(JSON.stringify(s2(this._config)))},q._wfcCommit=function(c){let m={...this._config,wfc:c};o2(this,"config-changed",{config:m})},q._wfcResetSection=function(c){let d=T2(this._config)[c];if(!d)return;let A=this._wfcState(),x=!!(A[c]&&A[c].show);A[c]={...JSON.parse(JSON.stringify(d)),show:x},this._wfcCommit(A)},q._wfcMoveSection=function(c,m){let d=this._wfcState(),A=d.order.indexOf(c),x=A+m;if(A<0||x<0||x>=d.order.length)return;let w=d.order[A];d.order[A]=d.order[x],d.order[x]=w,this._wfcCommit(d)},q._wfcCommitMetrics=function(c,m){let d=this._wfcState();d[c]||(d[c]={});let A=B(d[c]),x=A.map(b=>b.key),w={};A.forEach(b=>w[b.key]=b.pos),m(x,w),d[c].forecast_metric_order=x,d[c].forecast_metric_pos=w,delete d[c].forecast_temps,delete d[c].forecast_icons,delete d[c].forecast_extra,delete d[c].forecast_row_order,delete d[c].forecast_stack,this._wfcCommit(d)},q._wfcMoveMetric=function(c,m,d){this._wfcCommitMetrics(c,A=>{let x=A.indexOf(m),w=x+d;if(x<0||w<0||w>=A.length)return;let b=A[x];A[x]=A[w],A[w]=b})},q._wfcSetMetricPos=function(c,m,d){this._wfcCommitMetrics(c,(A,x)=>{x[m]=d})},q._wfcSetMetricStyle=function(c,m,d,A){let x=this._wfcState();x[c]||(x[c]={});let w={...x[c].forecast_metric_style||{}},b={...w[m]||{}};A==null||A===""?delete b[d]:b[d]=A,Object.keys(b).length?w[m]=b:delete w[m],x[c].forecast_metric_style=w,this._wfcCommit(x)},q._wfcMetricsOrder=function(c,m){let d=B(m),A=m.forecast_metric_style||{};return d.map((x,w,b)=>{let P=A[x.key]||{},D=x.key==="icons",W=x.key!=="temps";return _`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${E[x.key]||x.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${N=>N.stopPropagation()}
              @change=${N=>this._wfcSetMetricPos(c,x.key,N.target.value)}
            >
              ${R.map(N=>_`<option value=${N.value} ?selected=${N.value===x.pos}>${N.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${N=>{N.preventDefault(),N.stopPropagation(),this._wfcMoveMetric(c,x.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${w===b.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${N=>{N.preventDefault(),N.stopPropagation(),this._wfcMoveMetric(c,x.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${N=>this._wfcSetMetricStyle(c,x.key,"every",N.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(N=>({value:String(N),label:N+(N>1?" hours":" hour")}))].map(N=>_`<option value=${N.value} ?selected=${N.value===(P.every!=null?String(P.every):"")}>${N.label}</option>`)}
              </select>
            </label>
            ${W?_`
                  ${this._wfcColorField("Icon color",P.icon_color,N=>this._wfcSetMetricStyle(c,x.key,"icon_color",N.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",P.icon_size,N=>this._wfcSetMetricStyle(c,x.key,"icon_size",parseFloat(G0(N))||""))}`:Z}
            ${D?Z:_`
                  ${this._wfcColorField("Text color",P.text_color,N=>this._wfcSetMetricStyle(c,x.key,"text_color",N.target.value))}
                  ${this._wfcPlainNum("Font size (px)",P.text_size,N=>this._wfcSetMetricStyle(c,x.key,"text_size",parseFloat(G0(N))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${N=>this._wfcSetMetricStyle(c,x.key,"contrast",N.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(N=>_`<option value=${N.value} ?selected=${N.value===(P.contrast||"")}>${N.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},q._wfcToggleSection=function(c,m){let d=this._wfcState();d[c]||(d[c]={}),d[c].show=y3(m),this._wfcCommit(d)},q._wfcToggleSectionShow=function(c){let m=this._wfcState();m[c]||(m[c]={}),m[c].show=!m[c].show,this._wfcCommit(m)},q._wfcSetSecNum=function(c,m,d){let A=this._wfcState(),x=parseFloat(G0(d));A[c][m]=isNaN(x)?void 0:x,this._wfcCommit(A)},q._wfcSetSecField=function(c,m,d){let A=this._wfcState();A[c]||(A[c]={}),A[c][m]=d,this._wfcCommit(A)},q._wfcToggleSecField=function(c,m,d){this._wfcSetSecField(c,m,y3(d))},q._wfcSetForecastNum=function(c,m){let d={...this._config.forecast||{}};m==null||m<=0?delete d[c]:d[c]=m,o2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcSetConfigNum=function(c,m,d){let[A,x]=c.split("."),w={...this._config},b={...w[A]||{}},P=m==null||m===""||isNaN(Number(m))?null:Number(m);P==null?delete b[x]:b[x]=P,w[A]=b,o2(this,"config-changed",{config:w})},q._wfcConfigSlider=function(c,m,d,A,x){let w=x5(c,d||""),b=A!=null?n(Number(A),w.min,w.max):Number(x);return this._wfcSliderTpl(m,d,w,b,P=>this._wfcSetConfigNum(c,P.target.value,x))},q._wfcSetConfigStr=function(c,m,d){let A={...this._config};if(c.indexOf(".")===-1)d&&(m==null||m==="")?delete A[c]:A[c]=m;else{let[x,w]=c.split("."),b={...A[x]||{}};d&&(m==null||m==="")?delete b[w]:b[w]=m,A[x]=b}o2(this,"config-changed",{config:A})},q._wfcConfigSelect=function(c,m,d,A,x,w){let b=String(A??x);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${P=>this._wfcSetConfigStr(c,P.target.value,w)}>
          ${d.map(P=>_`<option value=${String(P.value)} ?selected=${String(P.value)===b}>${P.label}</option>`)}
        </select>
      </label>
    `},q._wfcSetConfigBool=function(c,m,d){let A={...this._config},x=(w,b)=>{m===!!d?delete w[b]:w[b]=m};if(c.indexOf(".")===-1)x(A,c);else{let[w,b]=c.split("."),P={...A[w]||{}};x(P,b),A[w]=P}o2(this,"config-changed",{config:A})},q._wfcConfigCheckbox=function(c,m,d,A){let x=d==null?!!A:!!d;return this._wfcCheckbox(m,x,w=>this._wfcSetConfigBool(c,w.target.checked,A))},q._wfcConfigText=function(c,m,d,A){return _`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${m}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${d||""}
          placeholder=${A||""}
          @change=${x=>this._wfcSetConfigStr(c,x.target.value)}
        />
      </label>
    `},q._wfcSetForecastField=function(c,m){let d={...this._config.forecast||{}};m==null||m===""?delete d[c]:d[c]=m,o2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcForecastSelect=function(c,m,d,A,x){let w=String(A??x);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${b=>this._wfcSetForecastField(c,b.target.value)}>
          ${d.map(b=>_`<option value=${String(b.value)} ?selected=${String(b.value)===w}>${b.label}</option>`)}
        </select>
      </label>
    `},q._wfcNumSecField=function(c,m,d,A){let x=parseFloat(G0(d));this._wfcSetSecField(c,m,isNaN(x)?A:x)},q._wfcMoveDetail=function(c,m){let d=this._wfcState(),A=d.details.items,x=A.findIndex(P=>P.key===c),w=x+m;if(x<0||w<0||w>=A.length)return;let b=A[x];A[x]=A[w],A[w]=b,this._wfcCommit(d)},q._wfcToggleDetail=function(c,m){let d=this._wfcState(),A=d.details.items.find(x=>x.key===c);A&&(A.show=y3(m)),this._wfcCommit(d)},q._wfcToggleDetailShow=function(c){let m=this._wfcState(),d=m.details.items.find(A=>A.key===c);d&&(d.show=!d.show,this._wfcCommit(m))},q._wfcSetDetailValue=function(c,m,d){let A=this._wfcState(),x=A.details.items.find(w=>w.key===c);x&&(x[m]=d),this._wfcCommit(A)},q._wfcSetDetail=function(c,m,d){let A=this._wfcState(),x=A.details.items.find(b=>b.key===c);if(!x)return;let w=G0(d);if(m==="icon_size"||m==="text_size"){let b=parseFloat(w);w=isNaN(b)?void 0:b}else(w===""||w==null)&&(w=void 0);x[m]=w,this._wfcCommit(A)},q._wfcColorField=function(c,m,d){return _`
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
    `},q._wfcSelect=function(c,m,d,A,x,w){let b=String(x??w);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${d}</span>
        <select
          class="wsfc-native-select"
          @change=${P=>this._wfcSetSecField(c,m,P.target.value)}
        >
          ${A.map(P=>_`<option value=${String(P.value)} ?selected=${String(P.value)===b}>${P.label}</option>`)}
        </select>
      </label>
    `};let d4={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function x5(c,m){return/chip_scale/.test(c)?{min:50,max:250,step:5}:/chip_columns/.test(c)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(c)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(c)?{min:0,max:48,step:1}:/header_icon_size/.test(c)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(c)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(c)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(c)?{min:-40,max:40,step:1}:/shadow_blur/.test(c)?{min:0,max:80,step:1}:/border_radius/.test(c)?{min:0,max:48,step:1}:/border_width/.test(c)?{min:0,max:12,step:1}:/hourly_slots/.test(c)?{min:0,max:48,step:1}:/daily_slots/.test(c)?{min:0,max:14,step:1}:/labels_position|opacity/.test(c)?{min:0,max:100,step:1}:/indent/.test(c)?{min:0,max:120,step:2}:/height/.test(c)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(c)?{min:8,max:100,step:1}:/font_size|_size$/.test(c)?{min:8,max:48,step:1}:/_width$/.test(c)?{min:1,max:12,step:1}:/_length$/.test(c)?{min:5,max:100,step:5}:/hourly_group_size/.test(c)?{min:1,max:4,step:1}:/temperature_precision/.test(c)?{min:0,max:2,step:1}:/hours/.test(c)?{min:1,max:48,step:1}:d4[m]||d4.px}q._wfcNumField=function(c,m,d,A,x,w){let b=x5(m,A||""),P=x!=null?Number(x):Number(w);return this._wfcSliderTpl(d,A,b,P,D=>this._wfcNumSecField(c,m,D,w))},q._wfcPlainSlider=function(c,m,d,A,x,w){let b=x5(x||"",m||""),P=d!=null?Number(d):Number(A);return this._wfcSliderTpl(c,m,b,P,w)},q._wfcSlotSlider=function(c,m,d){let A=x5(m,""),x=d!=null?n(Number(d),A.min,A.max):0,w=b=>Number(b)<=0?"All":String(b);return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(x)}
          @input=${b=>{let P=b.target.closest(".wsfc-slider-row"),D=P&&P.querySelector(".wsfc-slider-num");D&&(D.textContent=w(b.target.value))}}
          @change=${b=>this._wfcSetForecastNum(m,parseInt(b.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${w(x)}></span></span>
      </div>
    `},q._wfcAutoSizeField=function(c,m,d){let A=x5(m,""),x=this._wfcState()[c]||{},w=n(parseInt(x[m],10)||0,A.min,A.max),b=P=>Number(P)<=0?"Auto":`${P}px`;return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(w)}
          @input=${P=>{let D=P.target.closest(".wsfc-slider-row"),W=D&&D.querySelector(".wsfc-slider-num");W&&(W.textContent=b(P.target.value))}}
          @change=${P=>this._wfcSetSecField(c,m,parseInt(P.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${b(w)}></span></span>
      </div>
    `},q._wfcSliderTpl=function(c,m,d,A,x){let w=m||"";return _`
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
          @change=${x}
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
    `},q._wfcTextControls=function(c,m,d,A){let x=this._wfcState()[c]||{};return _`
      <div class="wsfc-sub-title">${d}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(c,`${m}_font_size`,"Size","px",x[`${m}_font_size`],A)}
        ${this._wfcSelect(c,`${m}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],x[`${m}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",x[`${m}_color`],w=>this._wfcSetSecField(c,`${m}_color`,w.target.value))}
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
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",m.background_opacity==null?80:m.background_opacity,80,"opacity",A=>this._wfcSetSecField(c,"background_opacity",n(parseInt(A.target.value,10)||0,0,100)))}`:Z}
    `},q._wfcSectionStyles=function(c,m){return this._wfcSubPanel("Section Styles",_`
        ${this._wfcFlushControls(c,m)}
        ${this._wfcDividerControls(c,m)}
        ${this._wfcBackgroundControls(c,m)}`)},q._wfcStockForm=function(c){return this._wfcStockFormFor(c7[c])},q._wfcStockFormFor=function(c){if(!c||!c.length)return Z;let m=rt(this._config),d=this._getSelectedAttributes(m),A=this._schema(this.localize.bind(this),d,"chart"),x=new Map,w=D=>D.forEach(W=>{W.schema?w(W.schema):x.set(W.name,W)});w(A);let b=c.map(D=>x.get(D)).filter(Boolean);if(!b.length)return Z;let P=D=>C6[D.name]||this._computeLabel(D)||D.name;return _`
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
    `},q._wfcSectionOptionsBody=function(c,m){let d=m[c]||{},A=c==="details",x=c==="current",w=c==="sun_position",b=c==="sun_arc",P=c==="hourly",D=c==="daily",W=this._config.forecast||{},N=this._config.current||{},a1=n(parseInt(d.columns,10)||2,1,4),d1=this._wfcMetricOptions(typeof N2<"u"?N2:[],!0);return _`
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
          ${x?_`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:Z}
          ${x?_`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(c,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(c,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(c,"header_temp_size","Temperature size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",d1,N.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(c)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(c)}
          ${P?_`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",W.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",W.hourly_group_size,1)}`:Z}
          ${D?_`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",W.daily_slots)}`:Z}
          ${A?_`
                ${this._wfcGroup("Layout")}
                ${d.chips?_`
                      ${this._wfcSelect(c,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.chip_layout==="column"?"wrap":d.chip_layout||"wrap","wrap")}
                      ${(d.chip_layout||"wrap")==="grid"?_`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(d.chip_columns,10)>0,$=>this._wfcSetSecField(c,"chip_columns",$.target.checked?n(parseInt(d.chip_columns,10)||2,1,6):0))}
                            ${parseInt(d.chip_columns,10)>0?this._wfcNumField(c,"chip_columns","Columns","",parseInt(d.chip_columns,10)||2,2):Z}`:Z}`:_`
                      ${this._wfcSelect(c,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.details_layout||"grid","grid")}
                      ${(d.details_layout||"grid")==="grid"?this._wfcNumField(c,"columns","Columns","",a1,2):Z}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!d.chips,$=>this._wfcToggleSecField(c,"chips",$))}
                ${d.chips?_`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square",$=>this._wfcSetSecField(c,"chip_pill",$.target.checked))}
                      ${(d.chip_pill!=null?d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?Z:this._wfcNumField(c,"chip_radius","Corner radius (0 = square)","px",d.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((d.chip_scale==null?1:d.chip_scale)*100),100,"chip_scale",$=>this._wfcSetSecField(c,"chip_scale",n((parseInt($.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(c,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",d.chip_text_color,$=>this._wfcSetSecField(c,"chip_text_color",$.target.value))}
                      ${this._wfcColorField("Chip background",d.chip_bg,$=>this._wfcSetSecField(c,"chip_bg",$.target.value))}
                      ${this._wfcColorField("Chip border",d.chip_border_color,$=>this._wfcSetSecField(c,"chip_border_color",$.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",d.chip_show_icon!==!1,$=>this._wfcToggleSecField(c,"chip_show_icon",$))}
                      ${d.chip_show_icon!==!1?_`
                            ${this._wfcSelect(c,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],d.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(c,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",d.chip_icon_color,$=>this._wfcSetSecField(c,"chip_icon_color",$.target.value))}`:Z}
                      ${this._wfcCheckbox("Show metric name in chip",!!d.chip_show_name,$=>this._wfcToggleSecField(c,"chip_show_name",$))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!d.chip_hide_when_off,$=>this._wfcToggleSecField(c,"chip_hide_when_off",$))}`:Z}

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
                        ${this._wfcColorField("Icon color",d.global_icon_color,$=>this._wfcSetSecField(c,"global_icon_color",$.target.value))}
                        ${this._wfcColorField("Text color",d.global_text_color,$=>this._wfcSetSecField(c,"global_text_color",$.target.value))}
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
                    ${this._wfcSelect(c,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map($=>({value:$,label:$+($>1?" hours":" hour")}))],d.ticks_every==null?0:d.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(c,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",_`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",d.marker_color,$=>this._wfcSetSecField(c,"marker_color",$.target.value))}
                      ${this._wfcNumField(c,"marker_opacity","Marker opacity","%",d.marker_opacity==null?100:d.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",_`
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ss_markers_position,"hidden")}
                    </div>
                    ${d.ss_markers_position&&d.ss_markers_position!=="hidden"?_`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",d.ss_markers_color,$=>this._wfcSetSecField(c,"ss_markers_color",$.target.value))}
                          ${this._wfcNumField(c,"ss_markers_opacity","Marker opacity","%",d.ss_markers_opacity==null?100:d.ss_markers_opacity,100)}
                        </div>`:Z}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",_`
                    ${this._wfcSubPanel("Metrics Defaults",_`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!d.forecast_metric_detail_icons,$=>this._wfcToggleSecField(c,"forecast_metric_detail_icons",$))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!d.forecast_temp_with_icon,$=>this._wfcToggleSecField(c,"forecast_temp_with_icon",$))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(c,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map($=>({value:$,label:$+($>1?" hours":" hour")}))],d.forecast_every,3)}
                          ${this._wfcNumField(c,"forecast_font_size","Text size","px",d.forecast_font_size,11)}
                          ${this._wfcNumField(c,"forecast_icon_size","Icon size","px",d.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",d.forecast_temp_color,$=>this._wfcSetSecField(c,"forecast_temp_color",$.target.value))}
                        ${this._wfcColorField("Icon color",d.forecast_icon_color,$=>this._wfcSetSecField(c,"forecast_icon_color",$.target.value))}
                        ${y.some($=>d.forecast_metric_pos&&d.forecast_metric_pos[$]&&d.forecast_metric_pos[$]!=="hidden"||k(d).includes($))?this._wfcColorField("Metric Text Color",d.forecast_extra_color,$=>this._wfcSetSecField(c,"forecast_extra_color",$.target.value)):Z}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(c,d)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",_`
                    ${this._wfcNumField(c,"height","Bar height","px",d.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",d.weather_adjust!==!1,$=>this._wfcToggleSecField(c,"weather_adjust",$))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",d.day_color,$=>this._wfcSetSecField(c,"day_color",$.target.value))}
                      ${this._wfcColorField("Night color",d.night_color,$=>this._wfcSetSecField(c,"night_color",$.target.value))}
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
                ${this._wfcPlainSlider("Labels position","",C1(d.labels_position),0,"labels_position",$=>this._wfcSetSecField(c,"labels_position",n(parseInt($.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${d.sun_icon||""}
                  @value-changed=${$=>this._wfcSetSecField(c,"sun_icon",$.detail&&$.detail.value||"")}
                ></ha-icon-picker>
                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!d.night_moon,$=>this._wfcToggleSecField(c,"night_moon",$))}
                ${d.night_moon?_`<ha-icon-picker
                      label="Moon icon"
                      .value=${d.moon_icon||"mdi:weather-night"}
                      @value-changed=${$=>this._wfcSetSecField(c,"moon_icon",$.detail&&$.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:Z}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],d.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",d.show_arc_ticks,$=>this._wfcToggleSecField(c,"show_arc_ticks",$))}
                ${this._wfcCheckbox("Show tick marks on the baseline",d.show_base_ticks!==!1,$=>this._wfcToggleSecField(c,"show_base_ticks",$))}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],d.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",d.tick_color,$=>this._wfcSetSecField(c,"tick_color",$.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",d.show_times!==!1,$=>this._wfcToggleSecField(c,"show_times",$))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",d.show_captions!==!1,$=>this._wfcToggleSecField(c,"show_captions",$))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",d.show_ss_icons,$=>this._wfcToggleSecField(c,"show_ss_icons",$))}
                ${d.show_ss_icons?_`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${d.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${$=>this._wfcSetSecField(c,"sunrise_icon",$.detail&&$.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${d.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${$=>this._wfcSetSecField(c,"sunset_icon",$.detail&&$.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(c,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],d.ss_icon_position,"left")}
                        ${this._wfcNumField(c,"ss_icon_size","Icon size","px",d.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",d.ss_icon_color,$=>this._wfcSetSecField(c,"ss_icon_color",$.target.value))}
                    `:Z}

                ${this._wfcTextControls(c,"time","Time text",13)}
                ${this._wfcTextControls(c,"caption","Sunrise / sunset caption",11)}
              `:Z}

          ${w?Z:this._wfcSectionStyles(c,d)}
        </div>
    `};let H6={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};q._wfcPlainNum=function(c,m,d){return this._wfcPlainSlider(c,"px",m,16,"_size",d)},q._wfcDetailRows=function(c){return c.details.items.map((d,A,x)=>{let w=o[d.key]||{};return _`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${d.icon||w.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${w.label||d.key}</span>
            <ha-icon class="wsfc-ico-btn ${A===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${b=>{b.preventDefault(),b.stopPropagation(),this._wfcMoveDetail(d.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${A===x.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
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
      `})};let V6=["current","details","hourly","daily","sun_arc","sun_position"];function Zt(c){let m=V6.filter(A=>c.includes(A)),d=c.filter(A=>!V6.includes(A));return[...m,...d]}q._wfcEditor=function(){let c=s2(this._config),m=Zt(c.order),d=c.order.map((x,w,b)=>{let P=!!(c[x]&&c[x].show);return _`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${H6[x]||d7.options}></ha-icon>
          <span class="wsfc-order-name">${i[x]||x}</span>
          <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(x,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${w===b.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(x,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${P?"mdi:eye":"mdi:eye-off"} title=${P?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(x)}></ha-icon>
        </div>
      `}),A=m.map(x=>_`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${H6[x]||d7.options}></ha-icon><span class="wsfc-panel-title">${i[x]||x}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(x,c)}
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${d7.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
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
    `};let s6=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];q._wfcClockPanel=function(c){let m="current",d=c.current||{},A=w=>w==="above"?"above-center":w==="below"?"below-center":w,x=d.clock_show_time!==!1;return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",x,w=>this._wfcToggleSecField(m,"clock_show_time",w))}
                ${x?_`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",s6,A(d.clock_placement),"right")}
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
                      ${this._wfcSelect(m,"clock_date_format","Date format",A2.map(w=>({value:w.value,label:w.label})),d.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...s6],d.clock_date_placement==="above"||d.clock_date_placement==="below"?A(d.clock_date_placement):d.clock_date_placement,"with_time")}
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
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,d2.__wfcResolve=s2,d2.__wfcBuild=r})();var w9=d2.prototype,ZH=(r,t)=>({config:r,hass:t,_wfcSources:w9._wfcSources,_wfcSlotEntityForKey:w9._wfcSlotEntityForKey,_wfcMetricEntityChain:w9._wfcMetricEntityChain});function kH(r,t,e){return!r||!t?[]:w9._wfcMetricEntityChain.call(ZH(r,t),e)}function v3(r,t,e){return kH(r,t,e).find(i=>!i.startsWith("weather."))||null}function h5(r,t,e){for(let i of kH(r,t,e)){let o=t.states[i];if(o){if(i.startsWith("weather.")){let a=o.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:Kh(o,e),entity:i}}else if(!["unknown","unavailable",""].includes(o.state)){let a=Number(o.state);return{value:isNaN(a)?o.state:a,unit:o.attributes?.unit_of_measurement||"",entity:i}}}}return null}function Kh(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function it(r,t,e,i,o=i){return r?.entities?.[o]||v3(t,e,i)}var bH=new WeakMap;function yr(r,t){let e=t?.devices||{},i=JSON.stringify(r?.metric_sources?.sources||[]),o=bH.get(e);return o&&o.hass!==t&&(o.hass=t,Object.keys(e).length!==o.size0&&(o=null)),o||(o=new Map,o.size0=Object.keys(e).length,o.hass=t,bH.set(e,o)),o.has(i)||o.set(i,Xh(r,t)),o.get(i)}function Xh(r,t){let e=[],i=t?.devices||{};for(let o of r?.metric_sources?.sources||[]){if(o.disabled||typeof o.ref!="string"||!o.ref.startsWith("device:"))continue;let a=o.ref.slice(7);e.includes(a)||e.push(a);let n=i[a]?.config_entries||[];for(let[V,s]of Object.entries(i))!e.includes(V)&&(s.config_entries||[]).some(M=>n.includes(M))&&e.push(V)}return e}var yH=new WeakMap;function r4(r,t){let e=r?.entities;if(!e)return[];let i=yH.get(e);if(i&&i.hass!==r&&(i.hass=r,Object.keys(e).length!==i.size0&&(i=null)),!i){i=new Map;for(let o in e){let a=e[o]?.device_id;a&&(i.has(a)||i.set(a,[]),i.get(a).push(o))}i.size0=Object.keys(e).length,i.hass=r,yH.set(e,i)}return i.get(t)||[]}function Zr(r,t){return yr(r,t).flatMap(e=>r4(t,e))}function OH(r,t,e){let i=Zr(r,t).filter(o=>{let a=t.states[o];return a&&e.test(`${o} ${a.attributes?.friendly_name||""}`)});return i.find(o=>!/indoor|inside/i.test(o))||i[0]||null}function E5(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function TH(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>v3(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let o=i.filter(a=>E5(t,a)!=null).length;return o===i.length?"online":o?"partial":"offline"}function PH(r,t,e,i){return!e||!t?null:w9._wfcSlotEntityForKey.call(ZH(r,t),e,i)||null}var Jh={ecowitt:"Ecowitt",ecowitt_local:"Ecowitt Local",ha_ecowitt_iot:"Ecowitt Official",openweathermap:"OpenWeatherMap",pirateweather:"Pirate Weather",nws:"National Weather Service",met:"Met.no",accuweather:"AccuWeather",wunderground:"Weather Underground",weatherunderground:"Weather Underground",wundergroundpws:"Weather Underground PWS",tomorrowio:"Tomorrow.io",template:"Template"};function i4(r,t){let e=t&&r?.entities?.[t]?.platform;return e?Jh[e]||e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}var j1={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i},battery:{label:"Station battery",icon:"mdi:battery",color:"#66bb6a",digits:null,find:/batt/i,health:!0},signal:{label:"Station signal",icon:"mdi:signal",color:"#42a5f5",digits:0,find:/signal/i,health:!0},rssi:{label:"Station RSSI",icon:"mdi:wifi-strength-2",color:"#42a5f5",digits:0,find:/rssi/i,health:!0},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function f5(r,t,e,i){if(i)return i;let o=j1[r];return o?o.key?v3(t,e,o.key):o.find?OH(t,e,o.find):null:null}function ot(r,t,e){if(e!=null&&e!=="")return Number(e);let i=j1[r]?.digits;return i??(/inHg/i.test(t)||t==="V"?2:/psi|kPa/i.test(t)?1:0)}function EH(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function FH(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var tf=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],o4=r=>r==null||isNaN(r)?"\u2014":tf[Math.round((r%360+360)%360/22.5)%16];var B2=r=>r.map(([t,e])=>({value:t,label:e})),Ct=["6h","12h","24h","48h","7d","30d","90d","365d"],$H=B2([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),ef=B2([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),rf=Object.entries(j1).map(([r,t])=>({value:r,label:t.label})),C7=r=>({entity:r?{domain:r}:{}}),x3={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:C7(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:C7("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Heading",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:rf}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:C7()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"CSS color, e.g. #ef5350. Blank uses the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:B2([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above."},{name:"ranges",selector:{select:{multiple:!0,options:Ct.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:Ct.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:Ct.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:Ct.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:B2([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,schema:[{name:"view",selector:{select:{options:B2([["compass","Compass"],["rose","Wind rose (24h)"]])}}},{name:"show_chart",selector:{boolean:{}},default:!0},{name:"entities.wind_speed",selector:C7("sensor")},{name:"entities.wind_gust_speed",selector:C7("sensor")},{name:"entities.wind_bearing",selector:C7("sensor")},{name:"rose_bins",selector:{object:{}},helper:"Speed thresholds for the rose, in the sensor's unit, e.g. [1, 5, 10, 15, 25]."}]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:ef}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:$H}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...$H]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:B2([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:B2([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},{name:"show_facts",selector:{boolean:{}},default:!1,helper:"Dawn, sunrise, solar noon, sunset, dusk and daylight under the tracker."}]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."}]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"overlay",selector:{select:{options:B2([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:B2([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:B2([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:B2([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"engine",selector:{select:{options:B2([["auto","Automatic"],["sgcc","Statistics Graph Chart Card (custom)"],["builtin","Home Assistant Statistics graph"]])}},default:"auto",helper:"Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card."},{name:"preset",selector:{select:{options:B2([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust, direction)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:.25,max:365,step:.25,mode:"box"}}},{name:"period",selector:{select:{options:B2([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:B2([["line","Line"],["bar","Bar"]])}},helper:"Built-in card only (the custom card sets this per series)."},{name:"stat_types",selector:{select:{multiple:!0,options:B2([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list."}]},health:{tag:"wsfc-panel-health",label:"Station health",icon:"mdi:heart-pulse",span:4,rows:0,schema:[{name:"show_devices",selector:{boolean:{}},helper:"Show device names even when there is only one."}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:C7("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},flex:{tag:"wsfc-panel-flex",label:"Weather Flex sections",icon:"mdi:view-agenda-outline",span:6,rows:0,flex:!0,schema:[]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};x3.map=x3.radar;var zH=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Height in row units (0 = fit content)."},{name:"display",selector:{select:{options:B2([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Show a panel button for it."},{name:"show",selector:{boolean:{}},default:!0,helper:"Visible when the dashboard loads."}],IH=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Vertical: minimum height in row units."}],M2=r=>x3[r?.type]||null,a7=r=>Math.max(1,Math.min(12,Number(r.span??M2(r)?.span??6)));function NH(r,t){let e=M2(r)||{},i=a7(r),o=i;t==="medium"&&(o=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(o=Number(r.span_narrow??(i<=3?6:12)));let a=A0(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,o)),rows:a}}var A0=r=>Math.max(0,Number(r.rows??M2(r)?.rows??0)),C4=r=>r.in_bar??(r.display==="popup"?!0:M2(r)?.inBar??!0);var DH=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"health",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],RH=new Set(["sky_bar","sun","sun_moon"]);function BH(r,t){let e=[],i=r.filter(V=>V&&RH.has(V.type)),o=i.find(V=>V.type==="sky_bar"),a=i.find(V=>V.type==="sun"||V.type==="sun_moon"),n=!1;for(let V of r){if(!V||!RH.has(V.type)){e.push(V);continue}let{type:s,sky_bar:M,show_moon:p,...h}=V,v={...h,type:"sky_tracker"};if(s==="sky_bar"&&(v.show_arc=!1),s==="sun"&&(v.show_facts=V.show_facts!==!1),o&&a&&(V===o||V===a)){if(n)continue;n=!0;let g=V===o?a:o,{type:y,sky_bar:k,show_moon:O,...E}=g;Object.assign(v,E,h),v.flex=Cf(g===o?g.flex:V.flex,g===o?V.flex:g.flex),delete v.show_arc,a.type==="sun"&&(v.show_facts=a.show_facts!==!1),v.flex||delete v.flex}e.push(v),s==="sun_moon"&&p!==!1&&e.push({type:"moon"})}if(t&&!e.some(V=>V?.type==="sky_tracker")){let V=e.findIndex(h=>h?.type==="hero"),M=e[V]?.flex?.wfc?.sun_position,p={type:"sky_tracker",span:12,rows:0,...M?{flex:{wfc:{sun_position:M}}}:{}};e.splice(V+1,0,p)}return e.map(V=>V?.type==="hero"?of(V):V)}function of(r){let{sky_bar:t,...e}=r;if(!e.flex?.wfc?.sun_position)return e;let{sun_position:o,...a}=e.flex.wfc,n={...e.flex,wfc:a};return Object.keys(a).length||delete n.wfc,Object.keys(n).length?e.flex=n:delete e.flex,e}function Cf(r,t){if(!r&&!t)return;let e={...t?.wfc||{}};return r?.wfc?.sun_position&&(e.sun_position={...e.sun_position||{},...r.wfc.sun_position}),{...t||{},...r||{},wfc:e}}function at(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:DH,e=t.find(o=>o?.type==="hero"),i=!!e&&e.sky_bar!==!1&&e.flex?.wfc?.sun_position?.show!==!1&&t!==DH;return t=BH(t,i).map(o=>o?.type==="stack"?{...o,panels:BH(o.panels||[],!1)}:o),t=t.filter(o=>o&&x3[o.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(o=>o.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(o=>o.type==="hero"&&r.hero&&typeof r.hero=="object"&&!o.flex?{...o,flex:r.hero}:o)}var kr=new Map;function nt(r,t,e,i){if(!r?.connection||!t)return()=>{};let o=`${t}|${e}`,a=kr.get(o);return a||(a={listeners:new Set,data:null,unsub:null},kr.set(o,a),a.unsub=r.connection.subscribeMessage(n=>{a.data=n?.forecast||[],a.listeners.forEach(V=>V(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(n=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,n),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(kr.delete(o),Promise.resolve(a.unsub).then(n=>typeof n=="function"&&n()).catch(()=>{}))}}function WH(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(o=>new Date(o.datetime).toDateString()===i)||r[t]||null}var I0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function V5(r,t){if(!I0(t))return t===void 0?r:t;let e={...I0(r)?r:{}};for(let i of Object.keys(t))e[i]=I0(t[i])&&I0(e[i])?V5(e[i],t[i]):t[i];return e}function Or(r,t){if(I0(r)&&I0(t)){let e={};for(let i of Object.keys(r)){let o=Or(r[i],t[i]);o!==void 0&&(e[i]=o)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function N0(r){if(!I0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let o=I0(i)?N0(i):i;I0(o)&&!Object.keys(o).length||(t[e]=o)}return t}var a4=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var Tr="wsfc-flex-core",UH="wsfc-flex-core-editor";customElements.get(Tr)||customElements.define(Tr,d2);{let r=e0.prototype,t=r._wfcWeatherSourcesPanel,e=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":t.call(this)},r.render=function(){return this.wsfcMode!=="sources"?e.call(this):!this.hass||!this._config?"":_`${this._wfcEditorStyle()}${t.call(this)}`},r.updated=function(o){i?.call(this,o);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(n=>{let V=n.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();n.hidden=!!V&&!a.includes(V)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let n=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");n&&(n.open=!0,this.__wsfcOpened=!0)}}}var jH=d2.__wfcBuild,GH=r=>d2.__wfcResolve(r);function af(r){return{...r,wfc:GH(r)}}function qH(r,t){let{entity:e,metric_sources:i,type:o,...a}={...r,wfc:GH(r)},{entity:n,metric_sources:V,...s}=af(t);return Or(a,s)||{}}var Ht=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(Tr)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(o){this.error=o?.message||String(o),console.error("weather-station-flex-card: invalid Weather Flex config",o,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var g3=v4(I4(),1),nf=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],Hf=r=>nf.find(([t])=>r<t)[1];function YH(r,t,e=31){let i=g3.getMoonIllumination(r).phase;for(let o=1;o<=e*24;o++){let a=new Date(r.getTime()+o*36e5),n=g3.getMoonIllumination(a).phase;if(t===0?n<i:i<t&&n>=t)return a;i=n}return null}function n4(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},o=g3.getMoonIllumination(t),a=e!=null?g3.getMoonTimes(t,e,i):{};return{phase:o.phase,name:Hf(o.phase),fraction:o.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:YH(t,.5),nextNew:YH(t,0)}}function Vt(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let o=g3.getTimes(t,e,i),a=o.sunset-o.sunrise;return{sunrise:o.sunrise,sunset:o.sunset,noon:o.solarNoon,dawn:o.dawn,dusk:o.dusk,daylightMs:a}}var H4=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),st=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});var Vf={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}},flex:{}},sf={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},Lf={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}},Lt;function lf(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(Lt||(Lt=new CSSStyleSheet,Lt.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,Lt],t.__wsfcFill=!0)}function y9(r,t){return{...Vf[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var QH=u1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,F5=class extends e1{constructor(){super();z(this,"type","flex");z(this,"defaultTitle","Weather");z(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new Ht}_coreConfig(){return V5(y9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return Z;let e=this._slot.update(this._coreConfig(),this.hass),i=this.type==="flex"?!!this.config?.title:this.config?.show_title!==!1;return _`
      ${i?X1(this.config,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${e}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}
      ${this.extra()}
    `}extra(){return Z}};z(F5,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),z(F5,"styles",[r2,QH]);var b9=class extends F5{constructor(){super(...arguments);z(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,o=i>=900?"large":i<560?"narrow":"normal";o!==this._size&&(this._size=o)}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_coreConfig(){let e=y9("hero",this.station);return this._size==="large"&&(e=V5(e,sf)),this._size==="narrow"&&(e=V5(e,Lf)),e=V5(e,this.config?.flex||{}),this.cardBg&&(e=V5(e,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}})),e}updated(){lf(this._slot.el)}render(){return!this.hass||!this.station?.entity?Z:_`<div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}`}};z(b9,"properties",{...F5.properties,cardBg:{attribute:!1}}),z(b9,"styles",[r2,QH,u1`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var Pr=class extends F5{constructor(){super(...arguments);z(this,"type","forecast");z(this,"defaultTitle","Forecast");z(this,"defaultIcon","mdi:calendar-week")}},Er=class extends F5{constructor(){super(...arguments);z(this,"type","hourly");z(this,"defaultTitle","Hourly forecast");z(this,"defaultIcon","mdi:clock-outline")}},Fr=class extends F5{constructor(){super(...arguments);z(this,"type","daily");z(this,"defaultTitle","Daily forecast");z(this,"defaultIcon","mdi:calendar-week")}};function $r(r,t){let e=V5(y9("sky_tracker",t),r?.flex||{}),i=e.wfc,o=i.sun_arc||(i.sun_arc={}),a=i.sun_position||(i.sun_position={}),n=r?.show_arc!==!1,V=r?.show_sky!==!1,s=r?.timeframe||"hours",M=Number(r?.hours??24),p=r?.anchor||"now_center";return o.timeframe_mode=s,a.timeframe_mode=s==="sunrise_sunset"?"match_arc":s,o.timeframe_hours=a.timeframe_hours=M,o.timeframe_anchor=a.timeframe_anchor=p,o.night_moon=r?.moon!==!1,r?.moon_phase===!1?o.moon_icon==="phase"&&(o.moon_icon="mdi:weather-night"):o.moon_icon="phase",n?(i.order=["sun_arc"],o.show=!0,o.baseline_mode=V?"sky":"line",a.show=!1):(i.order=["sun_position"],o.show=!1,a.show=V),e}var lt=class extends F5{constructor(){super(...arguments);z(this,"type","sky_tracker");z(this,"defaultTitle","Sky Tracker");z(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return $r(this.config,this.station)}render(){if(!this.hass||!this.station?.entity)return Z;let e=this.config||{};return e.show_arc===!1&&e.show_sky===!1?_`${X1(e,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`:_`${e.title||e.show_title?X1(e,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}
      ${e.show_facts?this._facts():Z}`}_facts(){let e=Vt(this.hass);if(!e)return Z;let i=H4(this.hass),o=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`,a=[["Dawn",i.format(e.dawn)],["Sunrise",i.format(e.sunrise)],["Solar noon",i.format(e.noon)],["Sunset",i.format(e.sunset)],["Dusk",i.format(e.dusk)],["Daylight",o(e.daylightMs)]];return _`<div class="facts">${a.map(([n,V])=>_`<div><span>${n}</span>${V}</div>`)}</div>`}};z(lt,"styles",[...F5.styles,u1`
      .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; font-size: 13px; }
      .facts div span { display: block; font-size: 11px; color: var(--wsfc-muted); }
    `]);customElements.get("wsfc-panel-flex")||customElements.define("wsfc-panel-flex",F5);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",b9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",Pr);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",Er);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",Fr);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",lt);O2.register(B0,m5,Y5,p3,R0,Q5);var Mt=[rH,oH];function _3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return _3("#"+i[1].split("").map(o=>o+o).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let o=parseInt(i[1],16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[o,a,n]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${o},${a},${n},${t})`}return e}function Mf(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return o=>i.format(new Date(o))}function cf(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function ct(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",o="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:cf(t,e)}}},scales:{x:{type:"linear",grid:{color:o},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:Mf(t,e)}}},_text:i,_grid:o}}var KH=new Map;async function XH(r,t){let e=KH.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return KH.set(r,{at:Date.now(),data:i}),i}var df=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function V4(r,t,e){return tV(r,t,Date.now()-e*36e5,`h${e}`)}function JH(r,t){let e=new Date;return e.setHours(0,0,0,0),tV(r,t,e.getTime(),`d${e.toDateString()}`)}function tV(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(e);return XH(`h|${i}|${o.join(",")}`,async()=>{let V=await r.callWS({type:"history/history_during_period",start_time:n.toISOString(),end_time:a.toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),s={};for(let M of o)s[M]=(V?.[M]||[]).map(p=>({t:Math.round((p.lu??p.lc??0)*1e3),v:df(p.s)}));return s})}function eV(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(a.getTime()-e*864e5);return XH(`s|${e}|${i}|${o.join(",")}`,async()=>{let V=await r.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:a.toISOString(),statistic_ids:o,period:i,types:["mean","min","max","change"]}),s={};for(let M of o)s[M]=(V?.[M]||[]).map(p=>({t:typeof p.start=="number"?p.start:Date.parse(p.start),mean:p.mean??null,min:p.min??null,max:p.max??null,change:p.change??null}));return s})}function n7(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let o=0;o<r.length;o+=e){let a=r.slice(o,o+e),n=a.map(V=>V.v).filter(V=>V!=null);i.push({t:a[Math.floor(a.length/2)].t,v:n.length?n.reduce((V,s)=>V+s,0)/n.length:null})}return i}function dt(r,t){let e=new Map,i=null;for(let o of r){if(o.v==null){i=null;continue}if(i!=null){let a=o.v>=i?o.v-i:o.v,n=Math.floor(o.t/t)*t;e.set(n,(e.get(n)||0)+a)}i=o.v}return[...e].map(([o,a])=>({t:o+t/2,v:Math.round(a*1e3)/1e3}))}function pt(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let o=Math.floor(i.t/t)*t,a=e.get(o)||[0,0];a[0]+=i.v,a[1]++,e.set(o,a)}return[...e].map(([i,[o,a]])=>({t:i+t/2,v:o/a}))}var rV={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},iV=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],H7=class extends e1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let o=j1[e.metric]||{},a=f5(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),n=a&&this.hass.states[a];return{...e,entity:a,label:e.label||o.label||n?.attributes?.friendly_name||a||"\u2014",color:e.color||this.config?.colors?.[e.metric]||o.color||iV[i%iV.length],axis:e.axis==="right"?"right":"left",style:e.style||(o.chart==="bar"?"bar":"line"),cumulative:e.cumulative??o.cumulative??!1,unit:n?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>rV[e])}render(){if(!this.hass)return Z;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),o=t.length>1?S7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):Z;return _`
      ${X1(this.config,this.defaultIcon,this.defaultTitle,o)}
      ${this.config?.show_readings===!1?Z:_`<div class="readings">
            ${i.map(a=>{let n=E5(this.hass,a.entity);return w7(this,{label:a.label,value:n?.value,unit:n?.unit,digits:ot(a.metric,n?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?_`<div class="note">${this._error}</div>`:Z}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(o=>[o.entity,o.style,o.axis,o.color,o.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(o=>this._error=`History unavailable: ${o?.message||o}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=rV[t]||24,o=e.map(n=>n.entity).filter(Boolean),a=new Map;if(i<=48){let n=await V4(this.hass,o,i);for(let V of e){let s=n[V.entity]||[],M=i<=12?15*6e4:36e5,p=V.style==="bar"?V.cumulative?dt(s,M):pt(s,M):n7(s);a.set(V,{line:p.map(h=>({x:h.t,y:h.v}))})}}else{let n=i>240?"day":"hour",V=await eV(this.hass,o,i/24,n);for(let s of e){let M=V[s.entity]||[],p=s.style==="bar"&&s.cumulative?"change":"mean";a.set(s,{line:M.map(h=>({x:h.t,y:h[p]})),min:M.map(h=>({x:h.t,y:h.min})),max:M.map(h=>({x:h.t,y:h.max}))})}}this._error=o.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let o=this.renderRoot.querySelector("canvas");if(!o)return;let a=ct(this,t,this.hass?.locale?.language),n=e.find(p=>p.axis==="left"),V=e.find(p=>p.axis==="right"),s=(p,h)=>{let v=p?.unit==="%",g={position:h,grid:h==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:R=>`${+R.toFixed(2)}${p?.unit&&p.unit.length<=3?p.unit:""}`}};v&&Object.assign(g,{min:0,max:100}),e.filter(R=>R.axis===h).every(R=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test(R.metric||""))&&e.some(R=>R.axis===h)&&(g.min=g.min??0),e.some(R=>R.axis===(h==="left"?"left":"right")&&R.style==="bar")&&(g.beginAtZero=!0);let k=this.config||{},O=k[`${h}_min`],E=k[`${h}_max`];return O!=null&&O!==""&&(g.min=Number(O)),E!=null&&E!==""&&(g.max=Number(E)),g};(n||!V)&&(a.scales.y=s(n,"left")),V&&(a.scales.y2=s(V,"right"));let M=[];e.forEach((p,h)=>{let v=i.get(p);if(!v)return;let g=p.axis==="right"?"y2":"y",y={label:p.label,data:v.line,borderColor:p.color,yAxisID:g,order:h+1};p.style==="bar"?Object.assign(y,{type:"bar",backgroundColor:_3(p.color,.6),borderWidth:0,borderRadius:2,order:50+h,barPercentage:.9,categoryPercentage:1}):p.style==="area"?Object.assign(y,{backgroundColor:_3(p.color,.13),fill:"origin",borderColor:_3(p.color,.75),borderWidth:1}):p.style==="dashed"&&Object.assign(y,{borderDash:[5,4],borderWidth:1.5}),M.push(y),(p.band??(h===0&&p.style==="line"))&&v.min&&v.max&&p.style!=="bar"&&M.push({label:`${p.label} max`,_band:!0,data:v.max,borderWidth:0,pointRadius:0,yAxisID:g,order:90,fill:"+1",backgroundColor:_3(p.color,.15)},{label:`${p.label} min`,_band:!0,data:v.min,borderWidth:0,pointRadius:0,yAxisID:g,order:91})}),a.plugins.tooltip.filter=p=>!p.dataset._band,this._chart&&this._chart.destroy(),this._chart=new O2(o,{type:"line",data:{datasets:M},options:a,plugins:Mt})}};z(H7,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),z(H7,"styles",r2);var Z9={temp_humidity:[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}],uv_solar:[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}],graph:[{metric:"temperature"}]},Dr=class extends H7{get defaultSeries(){return Z9.temp_humidity}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},Rr=class extends H7{get defaultSeries(){return Z9.uv_solar}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",H7);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",Dr);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",Rr);var oV={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},CV=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],k9=class extends e1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:it(t,e,i,"wind_speed"),gust:it(t,e,i,"wind_gust_speed"),dir:it(t,e,i,"wind_bearing")}}render(){if(!this.hass)return _``;let t=this._view||this.config?.view||"compass",e=this.station,i=this.hass,o=h5(e,i,"wind_speed"),a=h5(e,i,"wind_gust_speed"),n=h5(e,i,"wind_bearing"),V=o?.unit||a?.unit||"";return _`
      ${X1(this.config,"mdi:weather-windy","Wind",S7([{value:"compass",label:"Compass"},{value:"rose",label:"Rose 24h"}],t,s=>this._view=s,"Wind view"))}
      <div class="top">
        <div class="dial">${t==="rose"?this._roseSvg(V):this._compassSvg(o?.value,V,n?.value)}</div>
        <div class="side">
          <div class="readings">
            ${w7(this,{label:"Speed",value:o?.value,unit:V,digits:1,color:"var(--wsfc-wind)",entity:o?.entity})}
            ${w7(this,{label:"Gust",value:a?.value,unit:a?.unit||V,digits:1,color:"var(--wsfc-gust)",entity:a?.entity})}
            ${w7(this,{label:`From ${o4(n?.value)}`,value:n?.value,unit:"\xB0",entity:n?.entity})}
          </div>
          ${t==="rose"?this._roseLegend(V):""}
        </div>
      </div>
      ${this.config?.show_chart===!1?"":_`<div class="body"><canvas aria-label="Wind speed and gust history"></canvas></div>`}
      ${this._error?_`<div class="note">${this._error}</div>`:""}
    `}_compassSvg(t,e,i){let o=[];for(let V=0;V<72;V++){let s=V*5*Math.PI/180,M=V%18===0,p=V%6===0,h=M?78:p?82:85;o.push(w1`<line class="tick" x1=${100+Math.sin(s)*h} y1=${100-Math.cos(s)*h} x2=${100+Math.sin(s)*88} y2=${100-Math.cos(s)*88} stroke-width=${M?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([V,s])=>w1`<text class="lbl ${V==="N"?"n":""}" x=${100+Math.sin(s*Math.PI/180)*66} y=${100-Math.cos(s*Math.PI/180)*66}>${V}</text>`),n=Number.isFinite(i)?i:null;return w1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${o4(n)} at ${C2(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${o}${a}
      ${n==null?"":w1`<g class="ptr" style=${`transform: rotate(${n}deg); transform-origin: 100px 100px`}>
        <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
      </g>`}
      <text class="spd" x="100" y="104">${C2(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||oV[t]||oV.mph}_roseLegend(t){let e=this._bins(t),i=e.map((o,a)=>a<e.length-1?`${o}\u2013${e[a+1]}`:`${o}+`);return _`<div class="legend">${i.map((o,a)=>_`<span><i style="background:${CV[a+1]}"></i>${o}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return w1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(s=>s.reduce((M,p)=>M+p,0)),1e-4),o=84,a=[];e.sectors.forEach((s,M)=>{let p=0;s.forEach((h,v)=>{if(!h)return;let g=p+h;a.push(w1`<path d=${pf(100,100,p/i*o,g/i*o,M*22.5-10,M*22.5+10)} fill=${CV[v]} opacity="0.9"></path>`),p=g})});let n=[.25,.5,.75,1].map(s=>w1`<circle class="ring" cx="100" cy="100" r=${o*s} stroke-dasharray="2 3"></circle>`),V=[["N",0],["E",90],["S",180],["W",270]].map(([s,M])=>w1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(M*Math.PI/180)*95} y=${100-Math.cos(M*Math.PI/180)*95}>${s}</text>`);return w1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${n}${a}${V}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(i=>this._error=`History unavailable: ${i?.message||i}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await V4(this.hass,[t.speed,t.gust,t.dir],24),i=h5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=uf(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:n7(e[t.speed]||[]).map(o=>({x:o.t,y:o.v})),gust:n7(e[t.gust]||[]).map(o=>({x:o.t,y:o.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),o=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",n=ct(this,24,this.hass?.locale?.language);n.scales.y={min:0,grid:{color:n._grid},ticks:{color:n._text,callback:s=>`${s} ${t.unit}`,maxTicksLimit:4}};let V=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:o,backgroundColor:_3(o,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new O2(e,{type:"line",data:{datasets:V},options:n,plugins:Mt})}};z(k9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),z(k9,"styles",[r2,u1`
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
    `]);function pf(r,t,e,i,o,a){let n=(k,O)=>[r+Math.sin(O*Math.PI/180)*k,t-Math.cos(O*Math.PI/180)*k],[V,s]=n(i,o),[M,p]=n(i,a),[h,v]=n(e,a),[g,y]=n(e,o);return`M${V} ${s} A${i} ${i} 0 0 1 ${M} ${p} L${h} ${v} A${e} ${e} 0 0 0 ${g} ${y} Z`}function uf(r,t,e){let i=r.filter(M=>M.v!=null),o=t.filter(M=>M.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),n=0,V=0,s=0;for(let M=0;M<i.length;M++){let p=i[M].t,h=Math.min((i[M+1]?.t??Date.now())-p,30*6e4);if(h<=0)continue;for(;s+1<o.length&&o[s+1].t<=p;)s++;let v=o[s]?.t<=p?o[s].v:o[0]?.v??0;if(n+=h,v<e[0]){V+=h;continue}let g=e.findIndex(k=>v<k);g===-1&&(g=e.length);let y=Math.round((i[M].v%360+360)%360/22.5)%16;a[y][g]+=h}return n?{sectors:a.map(M=>M.map(p=>p/n)),calm:V/n}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",k9);var aV=`/* required styles */\r
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
`;var hf="https://api.rainviewer.com/public/weather-maps.json",ff=7,Af=600,vf=1800,xf=5*6e4,V7=null,gf=async()=>V7||(V7=(await Promise.resolve().then(()=>v4(HV(),1))).default),mt="https://server.arcgisonline.com/ArcGIS/rest/services",Br="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",VV={gray:r=>[`${mt}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,Br,16],streets:()=>[`${mt}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,Br,19],topo:()=>[`${mt}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,Br,19],imagery:()=>[`${mt}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},_f={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},O9=class extends e1{constructor(){super();z(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],o=this._overlay??this.config?.owm_default??"none";return _`
      ${X1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",e?S7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(a=>({value:a,label:`${this._radarOn?"+ ":""}${_f[a]||a}`}))],o,a=>this._setOverlay(a),"Map overlay"):"")}
      <div class="map"><div id="map"></div></div>
      ${this._radarOn?_`<div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"}>
          ${this._playing?"\u275A\u275A Pause":"\u25B6 Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel||""}</span>
        <span class="spacer"></span>
        ${this._error?_`<span class="note">${this._error}</span>`:""}
      </div>`:""}
    `}async firstUpdated(){await gf();let e=this.renderRoot.getElementById("map");if(!e||this._map)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,o=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=V7.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,o],this.config?.zoom??7),this._base=null,this._applyBase(),V7.circleMarker([i,o],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),xf)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&this.firstUpdated()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,o,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(VV[e.base_map]||VV.gray)(this._dark);this._base=V7.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:o}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(hf);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),o=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!o.length||!this._map)return;let a=new Map(this._frames.map(n=>[n.path,n]));this._frames=o.map(n=>{let V=a.get(n.path);if(V)return a.delete(n.path),V;let s=V7.tileLayer(`${i.host}${n.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:ff,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...n,layer:s,nowcast:(i.radar?.nowcast||[]).includes(n)}}),a.forEach(n=>this._map.removeLayer(n.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,n)=>a.layer.setOpacity(n===e?i:0));let o=this._frames[e];if(o){let a=new Date(o.time*1e3),n=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=o.nowcast?`${n} (forecast)`:n}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?vf:Af)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=V7.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};z(O9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),z(O9,"styles",[r2,w0(aV),u1`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",O9);function P9(r){let i=r<.5,o=Math.cos(r*2*Math.PI),a=Math.abs(o)*24,n=i?1:0,V=`M26 2 A24 24 0 0 ${n} 26 50 A${a} 24 0 0 ${o>0?1-n:n} 26 2 Z`;return w1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${V} fill="#e9e6d6"></path>
  </svg>`}var T9=class extends e1{render(){if(!this.hass)return Z;let t=n4(this.hass),e=o=>o?H4(this.hass).format(o):"\u2014",i=st(this.hass);return _`${X1(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${P9(t.phase)}</div>
        <div class="facts">
          <span class="name">${t.name}</span>
          <span>Illumination</span><span>${Math.round(t.fraction*100)}%</span>
          <span>Moonrise</span><span>${t.alwaysUp?"up all day":t.alwaysDown?"down all day":e(t.rise)}</span>
          <span>Moonset</span><span>${e(t.set)}</span>
          ${t.nextFull?_`<span>Next full</span><span>${i.format(t.nextFull)}</span>`:Z}
          ${t.nextNew?_`<span>Next new</span><span>${i.format(t.nextNew)}</span>`:Z}
        </div>
      </div>`}};z(T9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(T9,"styles",[r2,u1`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",T9);var Sf=5*6e4,E9=class extends e1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return f5(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return Z;let t=j1[this._metric]||{},e=this._entity,i=E5(this.hass,e),o=this.config?.unit??i?.unit??"",a=ot(this._metric,o,this.config?.digits),n=this.config?.color||t.color||"var(--primary-color)",V=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?_`
      <div class="top" style=${`--m-color:${n}`} @click=${()=>N5(this,e)}>
        <ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>
        <span class="name">${V}</span>
        ${this.config?.show_minmax===!1||!this._today?Z:_`<span class="mm"><span class="lo">Min ${C2(this._today.min,a)}</span><br /><span class="hi">Max ${C2(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>N5(this,e)}>
        <div class="val">${typeof i?.value=="number"?C2(i.value,a):i?.value??"\u2014"}<small>${o}</small></div>
        <div class="cap">${this._caption(i,o)}</div>
      </div>
      ${this.config?.chart==="none"?Z:_`<div class="spark" @click=${()=>N5(this,e)}>${this._spark(n)}</div>`}
    `:_`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=j1[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?EH(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return Z;let i=200,o=40,a=e.map(B=>B.v).filter(B=>B!=null);if(!a.length)return Z;let n=Date.now()-(this.config?.hours||24)*36e5,V=Date.now(),s=B=>(B-n)/(V-n)*i,M=(this.config?.chart||j1[this._metric]?.chart)==="bar",p=Math.min(...a),h=Math.max(...a);M&&(p=0),h-p<1e-9&&(h+=1,p=M?0:p-1);let v=B=>o-(B-p)/(h-p)*o;if(M){let B=Math.max(2,i/(this.config?.hours||24)*.7);return w1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(K=>K.v>0?w1`<rect x=${s(K.t)-B/2} y=${v(K.v)} width=${B} height=${o-v(K.v)} rx="1" fill=${t}></rect>`:Z)}
        <line x1="0" x2=${i} y1=${o} y2=${o} stroke=${t} stroke-opacity=".35"></line></svg>`}let g="",y=!1;for(let B of e){if(B.v==null){y=!1;continue}g+=`${y?"L":"M"}${s(B.t).toFixed(1)} ${v(B.v).toFixed(1)}`,y=!0}let k=e.find(B=>B.v!=null),O=[...e].reverse().find(B=>B.v!=null),E=`${g}L${s(O.t).toFixed(1)} ${o}L${s(k.t).toFixed(1)} ${o}Z`,R=`g${Math.random().toString(36).slice(2,8)}`;return w1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${R} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${E} fill=${`url(#${R})`}></path>
      <path d=${g} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<Sf||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,o]=await Promise.all([V4(this.hass,[t],e),JH(this.hass,[t])]),a=i[t]||[],n=(this.config?.chart||j1[this._metric]?.chart)==="bar",V=this.config?.cumulative??j1[this._metric]?.cumulative??!1;this._series=n?V?dt(a,36e5):pt(a,36e5):n7(a,160);let s=(o[t]||[]).map(M=>M.v).filter(M=>M!=null);if(this._today=s.length?{min:Math.min(...s),max:Math.max(...s)}:null,j1[this._metric]?.trend){let M=Date.now()-108e5,p=[...a].reverse().find(v=>v.t<=M&&v.v!=null),h=[...a].reverse().find(v=>v.v!=null);if(p&&h){let v=h.v-p.v,g=FH(E5(this.hass,t)?.unit||"");this._trend=v>g?"Rising":v<-g?"Falling":"Steady"}}}};z(E9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),z(E9,"styles",[r2,u1`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",E9);var wf=u1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,sV=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),F9=class extends e1{render(){if(!this.hass)return Z;let e=this.hass.states[this.station?.entity]?.state;return _`
      ${X1(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?sV(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):Z}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?Z:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],o=h5(t,e,"temperature");o&&i.push(`${C2(o.value,1)}${o.unit}`);let a=h5(t,e,"apparent_temperature");a&&o&&Math.abs(a.value-o.value)>=2&&i.push(`feels like ${C2(a.value,0)}${a.unit}`);let n=h5(t,e,"wind_speed"),V=h5(t,e,"wind_bearing"),s=h5(t,e,"wind_gust_speed");n&&(n.value<1?i.push("calm"):i.push(`wind ${V?`from the ${o4(V.value)} `:""}${C2(n.value,0)} ${n.unit}${s&&s.value>n.value*1.3?`, gusting ${C2(s.value,0)}`:""}`));let M=h5(t,e,"precipitation"),p=E5(e,f5("rain_today",t,e));M&&M.value>0?i.push(`raining ${C2(M.value,2)} ${M.unit}`):p&&p.value>0?i.push(`${C2(p.value,2)} ${p.unit} of rain today`):(M||p)&&i.push("dry");let h=h5(t,e,"humidity");if(h&&i.push(`humidity ${C2(h.value,0)}%`),!i.length)return"Waiting for station data.";let v=i.join(", ");return v[0].toUpperCase()+v.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return Z;let i=e.attributes||{},o=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return _`<div class="text" @click=${()=>N5(this,t)}>${o}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return Z;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?Z:i.slice(0,3).map(o=>{let a=String(o.Severity||o.severity||"").toLowerCase();return _`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>N5(this,t)}>
        <b>${o.Event||o.event||o.title||"Weather alert"}</b>${o.Headline||o.headline||""}
      </div>`})}_astro(){let t=H4(this.hass),e=st(this.hass),i=Vt(this.hass),o=n4(this.hass),a=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`;return _`<div class="astro">
      ${this.config?.show_sun===!1||!i?Z:_`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?Z:_`<div><h4>${P9(o.phase)}${o.name}</h4>
            <p>${Math.round(o.fraction*100)}% illuminated<br />
            ${o.nextFull?_`Full ${e.format(o.nextFull)}`:""}${o.nextNew?_` · New ${e.format(o.nextNew)}`:""}</p></div>`}
    </div>`}};z(F9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(F9,"styles",[r2,u1`
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
    `]);var $9=class extends e1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=nt(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return Z;let t=Number(this.config?.day_offset??1),e=WH(this._daily,t),i=this.config?.entity||this.station?.entity,o=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let n=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),V=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${n}`:n);if(!e)return _`${X1(this.config,"mdi:calendar-today",V)}<div class="note">Forecast not available yet.</div>`;let s=o.temperature_unit||"",M=o.precipitation_unit||"",p=o.wind_speed_unit||"",h=[];return e.precipitation!=null&&h.push(["Precipitation",`${C2(e.precipitation,M==="in"?2:1)} ${M}`]),e.precipitation_probability!=null&&h.push(["Chance of rain",`${C2(e.precipitation_probability)}%`]),e.wind_speed!=null&&h.push(["Wind",`${e.wind_bearing!=null?`${o4(Number(e.wind_bearing))} `:""}${C2(e.wind_speed)} ${p}`]),e.wind_gust_speed!=null&&h.push(["Gusts",`${C2(e.wind_gust_speed)} ${p}`]),e.humidity!=null&&h.push(["Humidity",`${C2(e.humidity)}%`]),e.uv_index!=null&&h.push(["UV index",C2(e.uv_index,1)]),_`
      ${X1(this.config,"mdi:calendar-today",V)}
      <div class="main" @click=${()=>N5(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?_`<span class="lo">${C2(e.templow)}°</span> / `:Z}<span class="hi">${C2(e.temperature)}°</span></div>
          <div class="cond">${sV(this.hass,e.condition)}${s?` \xB7 ${s}`:""}</div>
        </div>
      </div>
      <div class="rows">${h.map(([v,g])=>_`<span>${v}</span><span>${g}</span>`)}</div>
    `}};z($9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),z($9,"styles",[r2,wf,u1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var D9=class extends e1{render(){let t=this.config||{},e=t.show_status?TH(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return _`
      ${t.icon===""?Z:_`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      <div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?_`<div class="sub">${t.subtitle}</div>`:Z}</div>
      ${e?_`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:Z}
      <span class="grow"></span>
      ${this.bar?_`<div class="bar">${this.bar}</div>`:Z}
    `}};z(D9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),z(D9,"styles",[O6,u1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var R9=class extends e1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),_`${this.config?.title?X1(this.config,"mdi:card-outline",""):Z}
      ${this._err?_`<div class="note">${this._err}</div>`:_`<div class="host">${this._el||Z}</div>`}`):_`${X1(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};z(R9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),z(R9,"styles",[r2,u1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",F9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",$9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",D9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",R9);var B9=class extends e1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=(this.config?.panels||[]).filter(i=>i&&x3[i.type]);if(!t.length)return _`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical";return t.map((i,o)=>{let a=M2(i);if(!a)return Z;let n=Number(i.grow??(e?i.rows?1:0:1)),V=Number(i.rows??0),s=[`--grow:${n}`,i.min_width?`--basis:${i.min_width}px`:"",e&&V?`min-height:calc(${V} * var(--wsfc-row, 110px) + ${V-1} * var(--wsfc-gap, 12px))`:""].join(";"),M=a.bare||i.type==="stack";return _`<section class="tile ${i.type} ${M?"bare":""}" style=${s}>${this._el(i,o)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,o=this._els.get(i);if(!o){o=document.createElement(M2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,o)}return o.config=t,o.station=this.station,o.hass=this.hass,o}};z(B9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(B9,"styles",[k6,u1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",B9);var W0=v4(I4(),1);var LV=180/Math.PI,lV=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`,s7=r=>r instanceof Date&&!isNaN(r),z9=class extends e1{render(){if(!this.hass)return Z;let{latitude:t,longitude:e}=this.hass.config||{};if(t==null)return _`${X1(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,o=new Date(i);o.setHours(12,0,0,0);let a=W0.getTimes(o,t,e),n=new Date(o);n.setDate(n.getDate()-1);let V=W0.getTimes(n,t,e),s=W0.getMoonTimes(i,t,e),M=n4(this.hass,i),p=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),h=R=>s7(R)?p.format(R):"\u2014",v=s7(a.sunset)&&s7(a.sunrise)?a.sunset-a.sunrise:null,g=s7(V.sunset)&&s7(V.sunrise)?V.sunset-V.sunrise:null,y=v!=null&&g!=null?Math.round((v-g)/6e4):null,k=s7(a.dusk)&&s7(a.dawn)?a.dusk-a.dawn:null,O=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",s.rise,s.set,!0]],E=this.config||{};return _`
      ${X1(E,"mdi:telescope","Astronomy")}
      <div class="wrap">
        ${E.show_chart===!1?Z:_`<div class="chart">${this._chart(t,e,i)}</div>`}
        <div class="side">
          <table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${O.map(([R,B,K,G])=>_`<tr class=${G?"main":""}><td>${R}</td>
              <td>${R==="Moon"&&s.alwaysUp?"up all day":R==="Moon"&&s.alwaysDown?"down all day":h(B)}</td>
              <td>${R==="Moon"&&(s.alwaysUp||s.alwaysDown)?"":h(K)}</td></tr>`)}
          </table>
          <div class="sum">
            <div><span>Length of day</span>${lV(v)}${y!=null?_`<span class="d" style="display:inline">${y>=0?"+":"\u2212"}${Math.abs(y)}m</span>`:Z}</div>
            <div><span>Visible light</span>${lV(k)}</div>
            <div><span>Solar noon</span>${h(a.solarNoon)}</div>
            <div class="moon">${P9(M.phase)}<div><span>${M.name}</span>${Math.round(M.fraction*100)}% illuminated</div></div>
          </div>
        </div>
      </div>
    `}_chart(t,e,i){let M=new Date(i);M.setHours(0,0,0,0);let p=96,h=864e5/p,v=J=>70-J/90*58,g=J=>{let C1="";for(let i1=0;i1<=p;i1++){let m1=new Date(M.getTime()+i1*h);C1+=`${i1?"L":"M"}${(i1/p*300).toFixed(1)} ${v(J(m1)).toFixed(1)}`}return C1},y=J=>W0.getPosition(J,t,e).altitude*LV,k=J=>W0.getMoonPosition(J,t,e).altitude*LV,O=(i-M)/864e5*300,E=y(i),R=k(i),B=[0,6,12,18,24],K=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),G="var(--wsfc-sun-color, #fdd835)",c1="var(--wsfc-moon-color, #b0bec5)";return w1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${B.map(J=>w1`<line x1=${J/24*300} x2=${J/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,J/24*300))} y=${144} text-anchor="middle">${K.format(new Date(M.getTime()+J*36e5))}</text>`)}
      <path d=${g(k)} fill="none" stroke=${c1} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" opacity=".35"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${O} x2=${O} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${O} cy=${v(R)} r="5" fill=${c1} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${O} cy=${v(E)} r="7" fill=${G} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${G}>Sun ${Math.round(E)}°</text>
      <text class="lbl" x="4" y=${32} fill=${c1}>Moon ${Math.round(R)}°</text>
    </svg>`}};z(z9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(z9,"styles",[r2,u1`
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
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",z9);var bf={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function yf(r,t){let e=Number(r.latitude??t?.config?.latitude??39.5),i=Number(r.longitude??t?.config?.longitude??-98.35),o=t?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(o?"in":"mm"),metricTemp:r.temp_unit||(o?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(o?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:e.toFixed(3),lon:i.toFixed(3),detailLat:e.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var I9=class extends e1{render(){if(!this.hass)return Z;let t=this.config||{},e=yf(t,this.hass);return e!==this._url&&(this._url=e),_`${t.show_title===!1?Z:X1(t,"mdi:weather-windy",t.title||`${bf[t.overlay||"wind"]||"Wind"} map`)}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`}};z(I9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(I9,"styles",[r2,u1`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",I9);var S3={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}},ht={temps:{card:{hours_to_show:36,points_per_hour:4},series:{temperature:{color:"#ff7043",fill_opacity:.25,show_extrema:"always"},apparent_temperature:{color:"#ffb74d",show_fill:!1,line_style:"dashed",line_width:1.5},dew_point:{color:"#26c6da",show_fill:!1,line_width:1.5}}},wind:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0,lower_bound_secondary:0,upper_bound_secondary:360},metrics:["wind_speed","wind_gust_speed","wind_bearing"],series:{wind_speed:{color:"#42a5f5",aggregate_func:"avg",show_fill:!1,show_extrema:"always",show_extrema_min:!1},wind_gust_speed:{color:"#ff9800",aggregate_func:"max",fill_opacity:.2,line_width:1,show_extrema:"always",show_extrema_min:!1},wind_bearing:{color:"#9e9e9e",y_axis:"secondary",show_fill:!1,line_width:1,smooth:!1,graph_type:"step",unit:"\xB0"}}},pressure_humidity:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0},series:{pressure:{color:"#42a5f5",show_fill:!1,decimals:2},humidity:{color:"#26a69a",y_axis:"secondary",fill_opacity:.2}}},solar_uv:{card:{hours_to_show:24,points_per_hour:4,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{solar_radiation:{color:"#ffd54f",fill_opacity:.3,show_extrema:"always",show_extrema_min:!1},uv_index:{color:"#ff7043",y_axis:"secondary",aggregate_func:"max",show_fill:!1,line_width:2}}},rain:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{rain_rate:{color:"#7e57c2",graph_type:"bar",aggregate_func:"max",decimals:2},rain_today:{color:"#1e88e5",y_axis:"secondary",aggregate_func:"max",fill_opacity:.2,decimals:2,smooth:!1}}},temperature_range:{card:{hours_to_show:720,group_by:"date"},series:{temperature:{color:"#ff7043",show_range_band:!0,show_fill:!1,show_extrema:"always"}}}};function zr(r){let t=r?.engine||"auto";return t==="builtin"?"builtin":t==="sgcc"||customElements.get("statistics-graph-chart-card")?"sgcc":"builtin"}function Zf(r,t,e){return zr(r)==="sgcc"?kf(r,t,e):Of(r,t,e)}function kf(r,t,e){let i=ht[r.preset]||ht.temps,o=S3[r.preset]||S3.temps,a=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics||o.metrics,n=Array.isArray(r.entities)&&r.entities.length?r.entities:a.map(s=>{let M=f5(s,t,e,r.entity_overrides?.[s]);if(!M)return null;let p=r.colors?.[s];return{entity:M,name:j1[s]?.label||s,...i.series?.[s]||{},...p?{color:p}:{}}}).filter(Boolean),V={type:"custom:statistics-graph-chart-card",card_header:"",card_shadow:!1,card_border:!1,card_background_color:"transparent",card_padding:0,height:"auto",show_legend:!0,...i.card,entities:n};return n.some(s=>s.y_axis==="secondary")||(delete V.show_y2_axis,delete V.lower_bound_secondary,delete V.upper_bound_secondary),r.days_to_show!=null&&(V.hours_to_show=Number(r.days_to_show)*24),r.hours_to_show!=null&&(V.hours_to_show=Number(r.hours_to_show)),V5(V,r.card||{})}function Of(r,t,e){let i=S3[r.preset]||S3.temps,o=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:o.map(V=>{let s=f5(V,t,e,r.entity_overrides?.[V]);return s?{entity:s,name:j1[V]?.label||V}:null}).filter(Boolean),n={type:"statistics-graph",...i.card,entities:a};for(let V of["days_to_show","period","chart_type","stat_types","hide_legend"])r[V]!=null&&(n[V]=r[V]);return V5(n,r.card||{})}var N9=class extends e1{connectedCallback(){super.connectedCallback(),customElements.get("statistics-graph-chart-card")||customElements.whenDefined("statistics-graph-chart-card").then(()=>this.requestUpdate())}render(){if(!this.hass)return Z;let t=this.config||{},e=S3[t.preset]||S3.temps,i=Zf(t,this.station,this.hass);return i.entities?.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),_`${t.show_title===!1?Z:X1(t,e.icon,e.title)}
      ${this._err?_`<div class="note">${this._err}</div>`:_`<div class="host">${this._el||Z}</div>`}`):_`${X1(t,e.icon,e.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};z(N9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),z(N9,"styles",[r2,u1`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",N9);var Tf=[["online",(r,t)=>t==="connectivity"||/\bonline\b/.test(r)],["battery",(r,t)=>t==="battery"||/batt/.test(r)],["capacitor",r=>/capacitor|cap[\s_-]?volt/.test(r)],["rssi",(r,t)=>/rssi/.test(r)||t==="signal_strength"&&/dbm/.test(r)],["signal",(r,t)=>/signal/.test(r)||t==="signal_strength"]],Pf={online:"mdi:lan-connect",battery:"mdi:battery",capacitor:"mdi:flash",rssi:"mdi:wifi-strength-2",signal:"mdi:signal"},Ef={online:"Online",battery:"Battery",capacitor:"Capacitor",rssi:"RSSI",signal:"Signal"};function Ff(r,t){let e=t?.state,i=t?.attributes||{};if(e==null||e==="unavailable"||e==="unknown")return"bad";let o=Number(e),a=i.unit_of_measurement||"";if(r==="online")return e==="on"?"ok":"bad";if(r==="battery")return t.entity_id.startsWith("binary_sensor.")?e==="on"?"bad":"ok":a==="%"?o<15?"bad":o<30?"warn":"ok":a==="V"?o<2.3?"bad":o<2.5?"warn":"ok":!isNaN(o)&&o<=5?o<=1?"bad":o<=2?"warn":"ok":"";if(r==="capacitor")return a==="V"&&o<2.3?"warn":"ok";if(r==="rssi")return o<-90?"bad":o<-80?"warn":"ok";if(r==="signal"){if(a==="%")return o<25?"bad":o<50?"warn":"ok";if(!isNaN(o)&&o<=4)return o<=1?"bad":o<=2?"warn":"ok"}return""}function $f(r,t){let e=[];for(let i of yr(r,t)){let o=t.devices?.[i],a=[];for(let V of r4(t,i)){let s=t.entities[V],M=t.states[V];if(!M)continue;let p=`${V} ${M.attributes?.friendly_name||""} ${M.attributes?.unit_of_measurement||""}`.toLowerCase(),h=M.attributes?.device_class,v=Tf.find(([,k])=>k(p,h))?.[0];if(!v)continue;let g=M.attributes?.friendly_name||V,y=o?.name_by_user||o?.name;y&&g.startsWith(y)&&(g=g.slice(y.length).trim()||Ef[v]),a.push({eid:V,kind:v,name:g,st:M,level:Ff(v,M),platform:s.platform})}let n=["online","battery","capacitor","signal","rssi"];a.sort((V,s)=>n.indexOf(V.kind)-n.indexOf(s.kind)||V.name.localeCompare(s.name)),a.length&&e.push({device:o?.name_by_user||o?.name||i,model:o?.model,rows:a})}return e}var W9=class extends e1{render(){if(!this.hass)return Z;let t=this.config||{},e=$f(this.station,this.hass),i=o=>{let a=o.st,n=a.attributes?.unit_of_measurement||"";return o.kind==="online"?a.state==="on"?"Online":"Offline":a.entity_id.startsWith("binary_sensor.")?o.kind==="battery"?a.state==="on"?"Low":"OK":a.state:["unavailable","unknown"].includes(a.state)?"\u2014":`${a.state}${n?` ${n}`:""}`};return _`
      ${X1(t,"mdi:heart-pulse","Station health")}
      ${e.length?e.map(o=>_`<div class="grp">
            ${e.length>1||t.show_devices?_`<div class="dev">${o.device}${o.model?` \xB7 ${o.model}`:""}</div>`:Z}
            <div class="rows">${o.rows.map(a=>_`<div class="row ${a.level}" @click=${()=>N5(this,a.eid)} title=${a.eid}>
              <ha-icon icon=${a.kind==="battery"&&a.level==="bad"?"mdi:battery-alert":Pf[a.kind]}></ha-icon>
              <div class="t"><div class="n">${a.name}</div><div class="v">${i(a)}</div></div>
            </div>`)}</div>
          </div>`):_`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `}_lastReport(){let e=["temperature","humidity","wind_speed","pressure"].map(n=>v3(this.station,this.hass,n)).filter(Boolean).map(n=>Date.parse(this.hass.states[n]?.last_updated||this.hass.states[n]?.last_changed||"")).filter(n=>!isNaN(n));if(!e.length)return Z;let i=Math.round((Date.now()-Math.max(...e))/6e4),o=i>30?"bad":i>10?"warn":"",a=i<1?"just now":i<60?`${i} min ago`:`${Math.floor(i/60)} h ${i%60} min ago`;return _`<div class="last ${o}">Last reading ${a}</div>`}};z(W9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(W9,"styles",[r2,u1`
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
    `]);customElements.get("wsfc-panel-health")||customElements.define("wsfc-panel-health",W9);var Ir=30,U9=4,MV=10,Nr=r=>r.title?r.title:r.type==="metric"?j1[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(M2(r)?.label||r.type).replace(/ \(.*\)$/,""),cV=r=>r.icon||r.type==="metric"&&j1[r.metric]?.icon||M2(r)?.icon||"mdi:square-outline",j9=class extends e1{_gridIdx(){return(this.panels||[]).map((t,e)=>e).filter(t=>this.panels[t].display!=="popup")}render(){let t=this.panels||[],e=this._order||this._gridIdx(),i=t.map((o,a)=>a).filter(o=>t[o].display==="popup");return _`
      <div class="grid" style=${`--row:${Ir}px;--gap:${U9}px`}>
        ${e.map(o=>this._block(t[o],o))}
      </div>
      ${i.length?_`<div class="pops"><span>Pop-ups:</span>${i.map(o=>_`<span class="pop"><ha-icon icon=${cV(t[o])}></ha-icon>${Nr(t[o])}</span>`)}</div>`:Z}
    `}_block(t,e){let i=this._size?.index===e?this._size:null,o=i?i.span:a7(t),a=i?i.rows:A0(t),n=`grid-column: span ${o}; grid-row: span ${Math.max(1,a)};`,V=["blk",t.show===!1?"hidden":"",this._drag?.index===e?"dragging":"",i?"sizing":"",t.type].join(" ");return _`<div class=${V} style=${n} data-i=${e} tabindex="0" role="button"
        aria-label=${`${Nr(t)}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${s=>this._startMove(s,e)} @keydown=${s=>this._key(s,e)}>
      <ha-icon icon=${cV(t)}></ha-icon>
      <span class="nm">${Nr(t)}</span>
      <span class="dim">${o}×${a||"a"}</span>
      <span class="rz x" @pointerdown=${s=>this._startSize(s,e,"x")}></span>
      <span class="rz y" @pointerdown=${s=>this._startSize(s,e,"y")}></span>
      <span class="rz xy" @pointerdown=${s=>this._startSize(s,e,"xy")}></span>
    </div>`}_startMove(t,e){if(t.button!==0||t.target.classList.contains("rz"))return;t.preventDefault();let i=t.currentTarget;i.setPointerCapture(t.pointerId),this._order=this._gridIdx(),this._drag={index:e,x0:t.clientX,y0:t.clientY,moved:!1};let o=n=>this._onMove(n),a=()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let n=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),V=this._order;this._drag=null,this._order=null,n&&this._commitOrder(V)};i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(t){let e=this._drag;if(!e||!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<4)return;e.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(V=>Number(V.dataset.i)!==e.index),o=null;for(let V of i){let s=V.getBoundingClientRect();if(t.clientX>=s.left&&t.clientX<=s.right&&t.clientY>=s.top&&t.clientY<=s.bottom){o={i:Number(V.dataset.i),after:t.clientX>s.left+s.width/2};break}}if(!o){let V=i[i.length-1]?.getBoundingClientRect();if(V&&t.clientY>V.bottom)o={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(V=>V!==e.index),n=a.indexOf(o.i)+(o.after?1:0);a.splice(n,0,e.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(t){let e=this.panels,i=t.map(a=>e[a]),o=e.map(a=>a.display==="popup"?a:i.shift());this._emit(o)}_startSize(t,e,i){if(t.button!==0)return;t.preventDefault(),t.stopPropagation();let o=t.currentTarget;o.setPointerCapture(t.pointerId);let n=(this.renderRoot.querySelector(".grid").clientWidth-11*U9)/12+U9,V=this.panels[e],s=a7(V),M=A0(V);this._size={index:e,span:s,rows:M};let p=t.clientX,h=t.clientY,v=y=>{let k=i==="y"?s:Math.max(1,Math.min(12,s+Math.round((y.clientX-p)/n))),E=i==="x"?M:Math.max(0,Math.min(MV,(M||1)+Math.round((y.clientY-h)/(Ir+U9))));i!=="x"&&M===0&&E===1&&Math.abs(y.clientY-h)<(Ir+U9)/2&&(E=0),(k!==this._size.span||E!==this._size.rows)&&(this._size={index:e,span:k,rows:E})},g=()=>{o.removeEventListener("pointermove",v),o.removeEventListener("pointerup",g),o.removeEventListener("pointercancel",g);let{span:y,rows:k}=this._size;this._size=null,(y!==s||k!==M)&&this._commitSize(e,y,k)};o.addEventListener("pointermove",v),o.addEventListener("pointerup",g),o.addEventListener("pointercancel",g)}_commitSize(t,e,i){let o=M2(this.panels[t])||{},a={...this.panels[t],span:e,rows:i};e===o.span&&delete a.span,i===(o.rows??0)&&delete a.rows;let n=this.panels.slice();n[t]=a,this._emit(n)}_key(t,e){let i=this._gridIdx(),o=i.indexOf(e);if(t.shiftKey){let a=this.panels[e],n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!n)return;t.preventDefault(),this._commitSize(e,Math.max(1,Math.min(12,a7(a)+n[0])),Math.max(0,Math.min(MV,A0(a)+n[1])))}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let a=o+(t.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let n=i.slice();[n[o],n[a]]=[n[a],n[o]],this._commitOrder(n),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(t){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:t}}))}};z(j9,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0}}),z(j9,"styles",u1`
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",j9);var dV="__other__",G9=class extends e1{_name(t){let e=this.hass?.states?.[t],i=e?.attributes?.friendly_name||t,o=e&&!["unknown","unavailable"].includes(e.state)&&!t.startsWith("weather.")?` \xB7 ${e.state}${e.attributes?.unit_of_measurement?` ${e.attributes.unit_of_measurement}`:""}`:"";return`${i}${o}`}_emit(t){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!1}))}render(){let t=this.value||"",e=[...new Set([...this.candidates||[],...t?[t]:[]])].filter(o=>o!==this.defaultEntity||t===o),i=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return _`
      <div class="row">
        <select class=${t?"":"def"} aria-label=${this.label||"Entity"} @change=${o=>{let a=o.target.value;if(a===dV){this._other=!0,o.target.value=t;return}this._emit(a)}}>
          <option value="" ?selected=${!t}>${i}</option>
          ${e.map(o=>_`<option value=${o} ?selected=${o===t}>${this._name(o)}</option>`)}
          <option value=${dV}>Other entity…</option>
        </select>
        ${t?_`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:Z}
      </div>
      ${this._other?_`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:t}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${o=>{o.stopPropagation();let a=o.detail.value?.e;a&&this._emit(a)}}></ha-form></div>`:Z}
    `}};z(G9,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),z(G9,"styles",u1`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",G9);var Df=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],ft=r=>typeof r=="string"&&r.startsWith("device:"),q9=class extends e1{constructor(){super(),this._open=new Set}get _sources(){let t=this.config?.metric_sources||{};return Array.isArray(t.sources)?t.sources.filter(e=>e?.ref).map(e=>({ref:e.ref,overrides:{...e.overrides||{}},disabled:!!e.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(t){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:t}}}_commit(t){let e=t.filter(M=>M?.ref).map(M=>{let p=Object.fromEntries(Object.entries(M.overrides||{}).filter(([,h])=>h));return{ref:M.ref,...Object.keys(p).length?{overrides:p}:{},...M.disabled?{disabled:!0}:{}}}),i={...this.config?.metric_sources||{}};delete i.primary,delete i.fallback,delete i.custom,delete i.device_map,e.length?i.sources=e:delete i.sources;let o=M=>(this.hass?.states?.[M]?.attributes?.supported_features&7)!==0,a=M=>M.map(p=>p.ref).filter(p=>typeof p=="string"&&p.startsWith("weather.")),n=a(e.filter(M=>!M.disabled)),V=a(e),s=n.find(o)||n[0]||V.find(o)||V[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:s,metric_sources:Object.keys(i).length?i:void 0}}))}_info(t){let e=this.hass;if(ft(t)){let o=e?.devices?.[t.slice(7)],a=r4(e,t.slice(7))[0];return{icon:"mdi:access-point",name:o?.name_by_user||o?.name||t.slice(7),kind:"Station device",sub:[o?.manufacturer,o?.model].filter(Boolean).join(" "),integ:i4(e,a)}}let i=e?.states?.[t];return t.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:i?.attributes?.friendly_name||t,kind:"Weather entity",sub:"forecast + condition",integ:i4(e,t)}:{icon:"mdi:eye-outline",name:i?.attributes?.friendly_name||t,kind:"Sensor",sub:t,integ:i4(e,t)}}_candidates(t,e){let i=this.hass;if(!ft(t))return[];let o=e&&i.states[e]?.attributes?.unit_of_measurement,a=t.slice(7),n=i.devices?.[a]?.config_entries||[];return[...new Set([a,...Object.entries(i.devices||{}).filter(([,s])=>(s.config_entries||[]).some(M=>n.includes(M))).map(([s])=>s)])].flatMap(s=>r4(i,s)).filter(s=>s.startsWith("sensor.")&&i.states[s]?.attributes?.unit_of_measurement&&(!o||i.states[s].attributes.unit_of_measurement===o)).sort()}render(){if(!this.hass)return Z;let t=this._sources,e=this._station(t),i=t.some(o=>o.ref.startsWith("weather.")&&!o.disabled);return _`
      <div class="list">
        ${t.map((o,a)=>this._source(o,a,t,e))}
      </div>
      ${i?Z:_`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(t):_`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(t,e,i,o){let a=this._info(t.ref),n=this._open.has(t.ref),V=Df.map(([h,v])=>{let g=PH(o,this.hass,t.ref,h),y=t.ref.startsWith("weather.")?this.hass.states[t.ref]?.attributes?.[h]!=null:!!g;return{k:h,label:v,def:t.ref.startsWith("weather.")?y?t.ref:null:g,ov:t.overrides[h]||"",has:y||!!t.overrides[h]}}),s=V.filter(h=>h.has).length,M=h=>{let v=i.map(g=>({...g,overrides:{...g.overrides}}));h(v),this._commit(v)},p=()=>{let h=new Set(this._open);h.has(t.ref)?h.delete(t.ref):h.add(t.ref),this._open=h};return _`<div class="src ${n?"open":""} ${t.disabled?"off":""}">
      <div class="hd" @click=${p} role="button" tabindex="0" aria-expanded=${String(n)} @keydown=${h=>(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),p())}>
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
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?_`<div class="bd">
            ${a.sub?_`<div class="meta">${a.sub}</div>`:Z}
            <div class="tbl">
              ${V.filter(h=>h.has||ft(t.ref)).map(h=>{let v=h.ov||h.def,g=v&&!v.startsWith("weather.")?E5(this.hass,v):null,y=v?.startsWith("weather.")?this.hass.states[v]?.attributes?.[h.k]:null;return _`<span class="k">${h.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${h.ov} .defaultEntity=${h.def}
                    .defaultLabel=${t.ref.startsWith("weather.")&&!h.ov?h.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(t.ref,h.def)} label=${h.label}
                    @value-changed=${k=>M(O=>O[e].overrides[h.k]=k.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${g?`${g.value} ${g.unit}`:y!=null?String(y):""}</span>`})}
            </div>
            ${t.ref.startsWith("weather.")?_`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:Z}
          </div>`:Z}
    </div>`}_addForm(t){let e=i=>{if(!i||t.some(n=>n.ref===i)){this._adding=!1;return}this._adding=!1;let o=t.slice(),a=o.findIndex(n=>n.ref.startsWith("weather."));ft(i)&&a>=0?o.splice(a,0,{ref:i,overrides:{}}):o.push({ref:i,overrides:{}}),this._commit(o)};return _`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.d&&`device:${i.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};z(q9,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),z(q9,"styles",u1`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",q9);var s4=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],Rf=r=>/^#[0-9a-f]{6}$/i.test(r||"")?r:/^#[0-9a-f]{3}$/i.test(r||"")?"#"+r.slice(1).split("").map(t=>t+t).join(""):"#888888";function Bf(r){if(r.type==="statistics"){let t=r.preset||"temps",e=ht[t]||{};return((Array.isArray(r.metrics)&&r.metrics.length?r.metrics:e.metrics||S3[t]?.metrics)||[]).map((o,a)=>({metric:o,color:r.colors?.[o],defColor:e.series?.[o]?.color||j1[o]?.color||s4[a%s4.length],entity:r.entity_overrides?.[o]||"",key:"map"}))}return Array.isArray(r.series)&&r.series.length?r.series.map((t,e)=>({metric:t.metric,idx:e,color:t.color,defColor:j1[t.metric]?.color||s4[e%s4.length],entity:t.entity||"",label:t.label,key:"list"})):(Z9[r.type]||Z9.graph).map((t,e)=>({metric:t.metric,color:r.colors?.[t.metric],defColor:t.color||j1[t.metric]?.color||s4[e%s4.length],entity:r.entities?.[t.metric]||"",key:"map"}))}var Y9=class extends e1{_set(t,e,i){let o=a4(this.panel);if(t.key==="list")o.series[t.idx]=N0({...o.series[t.idx],[e]:i||void 0});else{let a=e==="color"?"colors":o.type==="statistics"?"entity_overrides":"entities";o[a]=N0({...o[a]||{},[t.metric]:i||void 0}),Object.keys(o[a]).length||delete o[a]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:o}}))}_candidates(t){let e=t&&this.hass.states[t]?.attributes?.unit_of_measurement;return Zr(this.station,this.hass).filter(i=>i.startsWith("sensor.")&&(!e||this.hass.states[i]?.attributes?.unit_of_measurement===e))}render(){if(!this.hass||!this.panel)return Z;let t=Bf(this.panel),e=this.panel.type!=="statistics"||zr(this.panel)==="sgcc";return _`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${t.map(i=>{let o=f5(i.metric,this.station,this.hass),a=i.color||i.defColor;return _`<span class="k">${i.label||j1[i.metric]?.label||i.metric||"Series"}</span>
          <span class="c">
            ${e?_`<input type="color" .value=${Rf(a)} title="Line color" aria-label="Line color" @change=${n=>this._set(i,"color",n.target.value)} />
                ${i.color?_`<button type="button" title="Default color" @click=${()=>this._set(i,"color","")}>↺</button>`:Z}`:_`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${i.entity} .defaultEntity=${o} .candidates=${this._candidates(o)} label=${`${i.metric} sensor`}
            @value-changed=${n=>this._set(i,"entity",n.detail.value)}></wsfc-entity-select>`})}
    </div>`}};z(Y9,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),z(Y9,"styles",u1`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",Y9);var zf=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],If={wind_bearing:"Wind direction",precipitation:"Rain rate"},Wr=[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"}]}},helper:"With the animated background, panels become semi-transparent and the hero stops drawing its own."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"Animated background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Animated background: blur behind panels. Default 6."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}],pV={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},Nf={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_chart:"Altitude chart",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",hours:"Hours",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here"},Wf=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function Uf(r,t,e){let i=t.split("."),o=r;i.slice(0,-1).forEach(n=>o=o[n]=o[n]&&typeof o[n]=="object"?{...o[n]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete o[a]:o[a]=e}function Ur(r,t,e={}){let i={};for(let o of t){let a=Wf(r,o.name);i[o.name]=a!==void 0?a:e[o.name]!==void 0?e[o.name]:o.default}return i}function jr(r,t,e,i={}){let o=a4(r);for(let a of t){let n=e[a.name],V=i[a.name]!==void 0?i[a.name]:a.default;V!==void 0&&JSON.stringify(n)===JSON.stringify(V)&&(n=void 0),Uf(o,a.name,n)}return N0(o)}function jf(r){let t=M2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:C4({...r,in_bar:void 0}),show:!0}}function uV(r){let t=M2(r);return r.title?r.title:r.type==="metric"?j1[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var Q9=class extends e1{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t}shouldUpdate(t){if(t.size===1&&t.has("hass")){let e=t.get("hass"),i=this.hass;if(e&&i&&e.entities===i.entities&&e.devices===i.devices&&e.areas===i.areas&&e.themes===i.themes&&e.locale===i.locale&&e.language===i.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._hassTimer),this._hassTimer=null}get _panels(){return at(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[o,a]of Object.entries(e||{}))a===void 0?delete i[o]:i[o]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?Z:_`
      <div class="ed">
        <div class="hdr"><span class="name">${P4}</span><span class="ver">v${Z6} · Weather Flex sections ${jH}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:cog-outline","General",()=>this._general())}
        ${this._section("buttons","mdi:gesture-tap-button","Panel buttons",()=>this._buttonsEditor())}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout",()=>this._layoutEditor())}
        ${this._section("hero","mdi:weather-partly-cloudy","Hero",()=>this._heroEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_section(t,e,i,o){let a=this._open===t;return _`<details class="panel" ?open=${a} @toggle=${n=>{n.target.open?this._open=t:this._open===t&&(this._open=null)}}>
      <summary><ha-icon icon=${e}></ha-icon><span>${i}</span></summary>
      ${a?_`<div class="body">${o()}</div>`:Z}
    </details>`}_form(t,e,i){return _`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${o=>o.label||Nf[o.name]||o.name}
      .computeHelper=${o=>o.helper}
      @value-changed=${o=>{o.stopPropagation(),i(o.detail.value)}}
    ></ha-form>`}_general(){return this._form(Ur(this._config,Wr,pV),Wr,t=>{let{panels:e,...i}=this._config,o=jr(i,Wr,t,pV);this._config.panels&&(o.panels=this._config.panels),this._emit(o)})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_stationEditor(){let t=this._station,e=[...zf,"rain_today","battery","signal","rssi"].map(o=>{let a=j1[o]?.find?f5(o,t,this.hass):v3(t,this.hass,o)||(this.hass.states[t.entity]?.attributes?.[o]!=null?t.entity:null),n=a&&!a.startsWith("weather.")?E5(this.hass,a):null,V=a?.startsWith("weather.")?this.hass.states[a]?.attributes?.[o]:null;return{k:o,e:a,v:n?`${n.value} ${n.unit}`:V!=null?String(V):"",label:If[o]||j1[o]?.label||o.replace(/_/g," "),integ:a?i4(this.hass,a):""}}),i=e.filter(o=>o.e).length;return _`
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
        <button class="btn" @click=${()=>this._setPanels([{type:"hero"},...t])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;let i=(o,a)=>{let n=t.slice();n[e]=o,this._setPanels(n,a)};return _`<p class="hint">Weather Flex Card's editor for the hero's sections. Weather Sources are under <b>Weather station</b>.</p>
      ${this._flexEditor(`${e}`,t[e],i)}`}_flexEditor(t,e,i){let o=`${t}:${e.type}`,a=this._flexEds.get(o);a||(a=document.createElement(UH),a.wsfcMode="sections",a.addEventListener("config-changed",M=>{M.stopPropagation(),a._wsfcOnChange?.(M.detail.config)}),this._flexEds.set(o,a));let n=M=>M.type==="sky_tracker"?$r(M,this._station):V5(y9(M.type,this._station),M.flex||{});a.wsfcPanels=M2(e)?.flexPanels||null,a._wsfcOnChange=M=>{let p=a4(e),h=qH(M,n({...e,flex:void 0}));Object.keys(h).length?p.flex=h:delete p.flex,i(p)};let V=n(e),s=JSON.stringify(V);return a._wsfcJson!==s&&(a._wsfcJson=s,a.setConfig(V)),a.hass=this.hass,_`<div class="flexed">${a}</div>`}_layoutEditor(){return _`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      <wsfc-layout-map .panels=${this._panels} @layout-changed=${t=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(t.detail.panels)}}></wsfc-layout-map>
    `}_panelList(){return _`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels side by side on every screen, put them in a <b>Stack</b>.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_buttonsEditor(){let t=this._config,e=this._panels,i=e.findIndex(M=>M.type==="heading"),o=i>=0&&!!e[i].show_bar,a=t.panel_bar===!1?"hidden":o?"heading":"top",n=M=>{let p=e.map((h,v)=>v===i?N0({...h,show_bar:M==="heading"?!0:void 0}):h);M==="heading"&&i<0&&p.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(p,{panel_bar:M==="hidden"?!1:void 0})},V=(M,p)=>{let h=e.map((v,g)=>{if(!M.includes(g))return v;let y=C4({...v,in_bar:void 0});return N0({...v,in_bar:p===y?void 0:p})});this._setPanels(h)},s=e.map((M,p)=>p);return _`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${M=>n(M.target.value)}>
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
          <input type="checkbox" .checked=${C4(M)} @change=${h=>V([p],h.target.checked)} />
          <ha-icon icon=${M.icon||M.type==="metric"&&j1[M.metric]?.icon||M2(M).icon}></ha-icon>
          <span>${uV(M)}</span>${M.display==="popup"?_`<span class="tag">pop-up</span>`:M.show===!1?_`<span class="tag">hidden on load</span>`:Z}
        </label>`)}
      </div>
    `}_list(t,e,i){let o=!!i,a=Object.entries(x3).filter(([s])=>s!=="map"&&!(o&&s==="hero")),n=i||"top",V=(this._addTypes||(this._addTypes={}))[n]||(o?"metric":this._addType);return _`
      <div class="rows">${t.map((s,M)=>this._panelRow(s,M,t,e,i?`${i}.${M}`:`${M}`,o))}</div>
      <div class="add">
        <select class="sel" @change=${s=>{this._addTypes[n]=s.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([s,M])=>_`<option value=${s} ?selected=${s===V}>${M.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let s={type:V};s.type==="metric"&&(s.metric="temperature"),s.type==="stack"&&(s.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,s]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${o?"Add to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,o,a,n){let V=M2(t),s=this._openPanel===a||String(this._openPanel||"").startsWith(`${a}.`),M=t.show===!1,p=()=>this._flexEds.clear(),h=k=>{let O=i.slice(),E=e+k;E<0||E>=O.length||([O[e],O[E]]=[O[E],O[e]],p(),this._openPanel=null,o(O))},v=(k,O)=>{let E=i.slice();E[e]=k,o(E,O)},g=n?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${a7(t)}/12${A0(t)?` \xD7 ${A0(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,y=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:V.label;return _`<div class="row ${s?"open":""} ${M?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&j1[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":V.icon)}></ha-icon>
        <div class="txt"><div class="n">${uV(t)}</div><div class="s">${y}${g?` \xB7 ${g}`:""}</div></div>
        ${n?_`<button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>h(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>h(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:Z}
        ${n?Z:_`<button class="ib" title=${M?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>v(N0({...t,show:M?void 0:!1}))}>
              <ha-icon icon=${M?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${s?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let k=i.slice();k.splice(e+1,0,a4(t)),p(),o(k)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let k=i.slice();k.splice(e,1),p(),this._openPanel=null,o(k)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${s?this._panelBody(t,a,v,n):Z}
    </div>`}_panelBody(t,e,i,o){let a=M2(t),n=o?{}:jf(t),V=o?IH:zH;t.type==="hero"&&(V=V.filter(v=>!["icon","display","in_bar"].includes(v.name)));let s=["graph","temp_humidity","uv_solar","statistics"].includes(t.type),M=["type","span","rows","display","in_bar","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...t.type==="metric"?["metric"]:[],...t.type==="statistics"?["preset"]:[],...t.type==="stack"?["panels","direction"]:[]],p=Object.keys(t).some(v=>!M.includes(v)),h=()=>i(Object.fromEntries(Object.entries(t).filter(([v])=>M.includes(v))));return _`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!p} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),h()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${s?_`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${t} .station=${this._station} @panel-changed=${v=>i(v.detail.panel)}></wsfc-series-editor>`:Z}
      <div class="grp">Layout</div>
      ${this._form(Ur(t,V,n),V,v=>i({type:t.type,...jr(t,V,v,n)}))}
      ${a.schema.length?_`<div class="grp">${a.label} options</div>
            ${this._form(Ur(t,a.schema),a.schema,v=>i({type:t.type,...jr(t,a.schema,v)}))}`:Z}
      ${t.type==="stack"?_`<div class="grp">Panels in this stack</div>
            <div class="nest">${this._list(t.panels||[],(v,g)=>i({...t,panels:v},g),e)}</div>`:Z}
      ${a.flex?_`<div class="grp">${t.type==="sky_tracker"?"Arc & sky details":"Weather Flex sections"}</div>
            ${t.type==="sky_tracker"?_`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:Z}
            ${t.type==="hero"&&!o?_`<p class="hint">Also under Hero above.</p>`:this._flexEditor(e,t,i)}`:Z}
    </div>`}};z(Q9,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),z(Q9,"styles",u1`
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
  `);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",Q9);var Gf=720,qf=1100,K9=class extends e1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),o=[];return i&&o.push({ref:`device:${i.id}`}),e&&o.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:o}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=at(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(t.map((i,o)=>i.show===!1?this._key(i,o):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return t.map((e,i)=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},o=e<(i.narrow_width||Gf)?"narrow":e<(i.medium_width||qf)?"medium":"wide";o!==this._size&&(this._size=o),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_fit(){let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let o=i.min_row_height||60,a=i.max_row_height||400,n=e.clientHeight;if(!n)return;let V=y=>(t.style.setProperty("--wsfc-row",`${y}px`),t.getBoundingClientRect().height),s=o,M=o+40,p=V(s),v=(V(M)-p)/(M-s),g=i.row_height||110;v>.5&&(g=Math.max(o,Math.min(a,s+(n-p)/v))),t.style.setProperty("--wsfc-row",`${Math.floor(g)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return Z;let t=this._config,e=this._full,i=this._animatedBg,o=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:"",i?`--wsfc-panel-opacity:${t.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${t.panel_blur??6}px`:""].join(";"),a=t.panels.some(n=>n.type==="heading"&&n.show_bar);return _`
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
    ></wsfc-animation-provider>`}_watchHourly(){let t=this._config.entity;this._hourlyFor!==t&&(this._unwatchHourly?.(),this._hourlyFor=t,this._unwatchHourly=nt(this.hass,t,"hourly",e=>{this._hourlyNow=e?.[0],this.requestUpdate()}))}_renderTitle(){let t=this._config;return _`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?_`<span class="subtitle">${t.subtitle}</span>`:Z}
    </div>`}_renderBar(){let e=this._config.panels.map((i,o)=>[i,o]).filter(([i])=>C4(i));return e.length?e.map(([i,o])=>{let a=M2(i),n=i.display==="popup",V=n?this._popup===o:!this._hidden.has(this._key(i,o));return _`<button
        type="button"
        class="chip ${V?"on":""} ${n?"popup":""}"
        aria-pressed=${n?Z:String(V)}
        aria-haspopup=${n?"dialog":Z}
        @click=${()=>this._toggle(i,o)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${n?_`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:Z}
      </button>`}):Z}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":t.type==="wind_map"?"Wind map":t.type==="statistics"?t.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[t.preset]||"Graph":M2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),o=this._key(t,e);i.has(o)?i.delete(o):i.add(o),this._hidden=i,this._saveHidden()}_renderPanels(){let t=this._config.panels,e=t.map((o,a)=>a).filter(o=>t[o].display!=="popup"&&!this._hidden.has(this._key(t[o],o)));if(this._focus!=null&&(e=[this._focus]),!e.length)return _`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(o=>{let a=t[o],n=M2(a),V=NH(a,i),s=this._focus!=null?12:V.span,M=this._focus!=null?Math.max(A0(a),5):V.rows,p=`grid-column: span ${s};${M?`grid-row: span ${M};min-height:calc(${M} * var(--wsfc-row) + ${M-1} * var(--wsfc-gap));`:""}`,h=n.bare||a.type==="hero",v=a.display==="tile_popup",g=!h&&!v&&!["metric","stack"].includes(a.type)&&i!=="narrow";return _`<section class="tile ${a.type} ${n.bare?"bare":""} ${M?"":"auto"} ${v?"tap":""}" style=${p}>
        ${v?_`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${a.title||this._autoTitle(a)}`}
              @click=${()=>this._popup=o}><span><ha-icon icon="mdi:arrow-expand"></ha-icon>Open</span></button>`:Z}
        ${g?_`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?o:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:Z}
        ${this._panelEl(a,o)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._config.panels[t];if(!e)return Z;let i=()=>this._popup=null;return _`<div class="scrim" @click=${o=>o.target===o.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let o=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(o);if(!a){a=document.createElement(M2(t).tag),this._els.set(o,a);for(let n of this._els.keys())n!==o&&n.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(n)}return a.config=t,a.station=this._station,a.cardBg=this._animatedBg,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),a}};z(K9,"properties",{hass:{attribute:!1},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),z(K9,"styles",[O6,k6,u1`
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
  `]);customElements.get(T4)||customElements.define(T4,K9);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===T4)||window.customCards.push({type:T4,name:`${P4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${P4.toUpperCase()}%c ${Z6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");
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
