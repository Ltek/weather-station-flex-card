/* weather-station-flex-card 2026.10.22.27 — https://github.com/Ltek/weather-station-flex-card */
var NV=Object.create;var R6=Object.defineProperty;var eo=Object.getOwnPropertyDescriptor;var WV=Object.getOwnPropertyNames;var UV=Object.getPrototypeOf,jV=Object.prototype.hasOwnProperty;var GV=(r,t,e)=>t in r?R6(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var ro=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var qV=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of WV(t))!jV.call(r,o)&&o!==e&&R6(r,o,{get:()=>t[o],enumerable:!(i=eo(t,o))||i.enumerable});return r};var b4=(r,t,e)=>(e=r!=null?NV(UV(r)):{},qV(t||!r||!r.__esModule?R6(e,"default",{value:r,enumerable:!0}):e,r));var Q=(r,t,e,i)=>{for(var o=i>1?void 0:i?eo(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(i?n(t,e,o):n(o))||o);return i&&o&&R6(t,e,o),o};var R=(r,t,e)=>GV(r,typeof t!="symbol"?t+"":t,e);var j4=ro((ma,Ze)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,o=Math.asin,a=Math.atan2,n=Math.acos,H=r/180,V=1e3*60*60*24,c=2440588,d=2451545;function m(U){return U.valueOf()/V-.5+c}function A(U){return new Date((U+.5-c)*V)}function g(U){return m(U)-d}var y=H*23.4397;function O(U,r1){return a(t(U)*e(y)-i(r1)*t(y),e(U))}function k(U,r1){return o(t(r1)*e(y)+e(r1)*t(y)*t(U))}function T(U,r1,s1){return a(t(U),e(U)*t(r1)-i(s1)*e(r1))}function $(U,r1,s1){return o(t(r1)*t(s1)+e(r1)*e(s1)*e(U))}function F(U,r1){return H*(280.16+360.9856235*U)-r1}function K(U){return U<0&&(U=0),2967e-7/Math.tan(U+.00312536/(U+.08901179))}function G(U){return H*(357.5291+.98560028*U)}function l1(U){var r1=H*(1.9148*t(U)+.02*t(2*U)+3e-4*t(3*U)),s1=H*102.9372;return U+r1+s1+r}function X(U){var r1=G(U),s1=l1(r1);return{dec:k(s1,0),ra:O(s1,0)}}var e1={};e1.getPosition=function(U,r1,s1){var m1=H*-s1,V1=H*r1,L1=g(U),g1=X(L1),k1=F(L1,m1)-g1.ra;return{azimuth:T(k1,V1,g1.dec),altitude:$(k1,V1,g1.dec)}};var o1=e1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];e1.addTime=function(U,r1,s1){o1.push([U,r1,s1])};var h1=9e-4;function U1(U,r1){return Math.round(U-h1-r1/(2*r))}function y1(U,r1,s1){return h1+(U+r1)/(2*r)+s1}function l2(U,r1,s1){return d+U+.0053*t(r1)-.0069*t(2*s1)}function K1(U,r1,s1){return n((t(U)-t(r1)*t(s1))/(e(r1)*e(s1)))}function Z1(U){return-2.076*Math.sqrt(U)/60}function J(U,r1,s1,m1,V1,L1,g1){var k1=K1(U,s1,m1),h2=y1(k1,r1,V1);return l2(h2,L1,g1)}e1.getTimes=function(U,r1,s1,m1){m1=m1||0;var V1=H*-s1,L1=H*r1,g1=Z1(m1),k1=g(U),h2=U1(k1,V1),x2=y1(0,V1,h2),$2=G(x2),c2=l1($2),c1=k(c2,0),o5=l2(x2,$2,c2),Y2,g5,F2,g2,c5,M5,e2={solarNoon:A(o5),nadir:A(o5-.5)};for(Y2=0,g5=o1.length;Y2<g5;Y2+=1)F2=o1[Y2],g2=(F2[0]+g1)*H,c5=J(g2,V1,L1,c1,h2,$2,c2),M5=o5-(c5-o5),e2[F2[1]]=A(M5),e2[F2[2]]=A(c5);return e2};function X1(U){var r1=H*(218.316+13.176396*U),s1=H*(134.963+13.064993*U),m1=H*(93.272+13.22935*U),V1=r1+H*6.289*t(s1),L1=H*5.128*t(m1),g1=385001-20905*e(s1);return{ra:O(V1,L1),dec:k(V1,L1),dist:g1}}e1.getMoonPosition=function(U,r1,s1){var m1=H*-s1,V1=H*r1,L1=g(U),g1=X1(L1),k1=F(L1,m1)-g1.ra,h2=$(k1,V1,g1.dec),x2=a(t(k1),i(V1)*e(g1.dec)-t(g1.dec)*e(k1));return h2=h2+K(h2),{azimuth:T(k1,V1,g1.dec),altitude:h2,distance:g1.dist,parallacticAngle:x2}},e1.getMoonIllumination=function(U){var r1=g(U||new Date),s1=X(r1),m1=X1(r1),V1=149598e3,L1=n(t(s1.dec)*t(m1.dec)+e(s1.dec)*e(m1.dec)*e(s1.ra-m1.ra)),g1=a(V1*t(L1),m1.dist-V1*e(L1)),k1=a(e(s1.dec)*t(s1.ra-m1.ra),t(s1.dec)*e(m1.dec)-e(s1.dec)*t(m1.dec)*e(s1.ra-m1.ra));return{fraction:(1+e(g1))/2,phase:.5+.5*g1*(k1<0?-1:1)/Math.PI,angle:k1}};function n1(U,r1){return new Date(U.valueOf()+r1*V/24)}e1.getMoonTimes=function(U,r1,s1,m1){var V1=new Date(U);m1?V1.setUTCHours(0,0,0,0):V1.setHours(0,0,0,0);for(var L1=.133*H,g1=e1.getMoonPosition(V1,r1,s1).altitude-L1,k1,h2,x2,$2,c2,c1,o5,Y2,g5,F2,g2,c5,M5,e2=1;e2<=24&&(k1=e1.getMoonPosition(n1(V1,e2),r1,s1).altitude-L1,h2=e1.getMoonPosition(n1(V1,e2+1),r1,s1).altitude-L1,c2=(g1+h2)/2-k1,c1=(h2-g1)/2,o5=-c1/(2*c2),Y2=(c2*o5+c1)*o5+k1,g5=c1*c1-4*c2*k1,F2=0,g5>=0&&(M5=Math.sqrt(g5)/(Math.abs(c2)*2),g2=o5-M5,c5=o5+M5,Math.abs(g2)<=1&&F2++,Math.abs(c5)<=1&&F2++,g2<-1&&(g2=c5)),F2===1?g1<0?x2=e2+g2:$2=e2+g2:F2===2&&(x2=e2+(Y2<0?c5:g2),$2=e2+(Y2<0?g2:c5)),!(x2&&$2));e2+=2)g1=h2;var _2={};return x2&&(_2.rise=n1(V1,x2)),$2&&(_2.set=n1(V1,$2)),!x2&&!$2&&(_2[Y2>0?"alwaysUp":"alwaysDown"]=!0),_2},typeof ma=="object"&&typeof Ze<"u"?Ze.exports=e1:typeof define=="function"&&define.amd?define(e1):window.SunCalc=e1})()});var WH=ro((Dt,NH)=>{(function(r,t){typeof Dt=="object"&&typeof NH<"u"?t(Dt):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(Dt,(function(r){"use strict";var t="1.9.4";function e(C){var s,l,u,f;for(l=1,u=arguments.length;l<u;l++){f=arguments[l];for(s in f)C[s]=f[s]}return C}var i=Object.create||(function(){function C(){}return function(s){return C.prototype=s,new C}})();function o(C,s){var l=Array.prototype.slice;if(C.bind)return C.bind.apply(C,l.call(arguments,1));var u=l.call(arguments,2);return function(){return C.apply(s,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function n(C){return"_leaflet_id"in C||(C._leaflet_id=++a),C._leaflet_id}function H(C,s,l){var u,f,b,P;return P=function(){u=!1,f&&(b.apply(l,f),f=!1)},b=function(){u?f=arguments:(C.apply(l,arguments),setTimeout(P,s),u=!0)},b}function V(C,s,l){var u=s[1],f=s[0],b=u-f;return C===u&&l?C:((C-f)%b+b)%b+f}function c(){return!1}function d(C,s){if(s===!1)return C;var l=Math.pow(10,s===void 0?6:s);return Math.round(C*l)/l}function m(C){return C.trim?C.trim():C.replace(/^\s+|\s+$/g,"")}function A(C){return m(C).split(/\s+/)}function g(C,s){Object.prototype.hasOwnProperty.call(C,"options")||(C.options=C.options?i(C.options):{});for(var l in s)C.options[l]=s[l];return C.options}function y(C,s,l){var u=[];for(var f in C)u.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(C[f]));return(!s||s.indexOf("?")===-1?"?":"&")+u.join("&")}var O=/\{ *([\w_ -]+) *\}/g;function k(C,s){return C.replace(O,function(l,u){var f=s[u];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(s)),f})}var T=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"};function $(C,s){for(var l=0;l<C.length;l++)if(C[l]===s)return l;return-1}var F="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function K(C){return window["webkit"+C]||window["moz"+C]||window["ms"+C]}var G=0;function l1(C){var s=+new Date,l=Math.max(0,16-(s-G));return G=s+l,window.setTimeout(C,l)}var X=window.requestAnimationFrame||K("RequestAnimationFrame")||l1,e1=window.cancelAnimationFrame||K("CancelAnimationFrame")||K("CancelRequestAnimationFrame")||function(C){window.clearTimeout(C)};function o1(C,s,l){if(l&&X===l1)C.call(s);else return X.call(window,o(C,s))}function h1(C){C&&e1.call(window,C)}var U1={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:n,throttle:H,wrapNum:V,falseFn:c,formatNum:d,trim:m,splitWords:A,setOptions:g,getParamString:y,template:k,isArray:T,indexOf:$,emptyImageUrl:F,requestFn:X,cancelFn:e1,requestAnimFrame:o1,cancelAnimFrame:h1};function y1(){}y1.extend=function(C){var s=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=s.__super__=this.prototype,u=i(l);u.constructor=s,s.prototype=u;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(s[f]=this[f]);return C.statics&&e(s,C.statics),C.includes&&(l2(C.includes),e.apply(null,[u].concat(C.includes))),e(u,C),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,C.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var b=0,P=u._initHooks.length;b<P;b++)u._initHooks[b].call(this)}},s},y1.include=function(C){var s=this.prototype.options;return e(this.prototype,C),C.options&&(this.prototype.options=s,this.mergeOptions(C.options)),this},y1.mergeOptions=function(C){return e(this.prototype.options,C),this},y1.addInitHook=function(C){var s=Array.prototype.slice.call(arguments,1),l=typeof C=="function"?C:function(){this[C].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function l2(C){if(!(typeof L>"u"||!L||!L.Mixin)){C=T(C)?C:[C];for(var s=0;s<C.length;s++)C[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var K1={on:function(C,s,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],s);else{C=A(C);for(var f=0,b=C.length;f<b;f++)this._on(C[f],s,l)}return this},off:function(C,s,l){if(!arguments.length)delete this._events;else if(typeof C=="object")for(var u in C)this._off(u,C[u],s);else{C=A(C);for(var f=arguments.length===1,b=0,P=C.length;b<P;b++)f?this._off(C[b]):this._off(C[b],s,l)}return this},_on:function(C,s,l,u){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(C,s,l)===!1){l===this&&(l=void 0);var f={fn:s,ctx:l};u&&(f.once=!0),this._events=this._events||{},this._events[C]=this._events[C]||[],this._events[C].push(f)}},_off:function(C,s,l){var u,f,b;if(this._events&&(u=this._events[C],!!u)){if(arguments.length===1){if(this._firingCount)for(f=0,b=u.length;f<b;f++)u[f].fn=c;delete this._events[C];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var P=this._listens(C,s,l);if(P!==!1){var D=u[P];this._firingCount&&(D.fn=c,this._events[C]=u=u.slice()),u.splice(P,1)}}},fire:function(C,s,l){if(!this.listens(C,l))return this;var u=e({},s,{type:C,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var f=this._events[C];if(f){this._firingCount=this._firingCount+1||1;for(var b=0,P=f.length;b<P;b++){var D=f[b],I=D.fn;D.once&&this.off(C,I,D.ctx),I.call(D.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(C,s,l,u){typeof C!="string"&&console.warn('"string" type argument expected');var f=s;typeof s!="function"&&(u=!!s,f=void 0,l=void 0);var b=this._events&&this._events[C];if(b&&b.length&&this._listens(C,f,l)!==!1)return!0;if(u){for(var P in this._eventParents)if(this._eventParents[P].listens(C,s,l,u))return!0}return!1},_listens:function(C,s,l){if(!this._events)return!1;var u=this._events[C]||[];if(!s)return!!u.length;l===this&&(l=void 0);for(var f=0,b=u.length;f<b;f++)if(u[f].fn===s&&u[f].ctx===l)return f;return!1},once:function(C,s,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],s,!0);else{C=A(C);for(var f=0,b=C.length;f<b;f++)this._on(C[f],s,l,!0)}return this},addEventParent:function(C){return this._eventParents=this._eventParents||{},this._eventParents[n(C)]=C,this},removeEventParent:function(C){return this._eventParents&&delete this._eventParents[n(C)],this},_propagateEvent:function(C){for(var s in this._eventParents)this._eventParents[s].fire(C.type,e({layer:C.target,propagatedFrom:C.target},C),!0)}};K1.addEventListener=K1.on,K1.removeEventListener=K1.clearAllEventListeners=K1.off,K1.addOneTimeEventListener=K1.once,K1.fireEvent=K1.fire,K1.hasEventListeners=K1.listens;var Z1=y1.extend(K1);function J(C,s,l){this.x=l?Math.round(C):C,this.y=l?Math.round(s):s}var X1=Math.trunc||function(C){return C>0?Math.floor(C):Math.ceil(C)};J.prototype={clone:function(){return new J(this.x,this.y)},add:function(C){return this.clone()._add(n1(C))},_add:function(C){return this.x+=C.x,this.y+=C.y,this},subtract:function(C){return this.clone()._subtract(n1(C))},_subtract:function(C){return this.x-=C.x,this.y-=C.y,this},divideBy:function(C){return this.clone()._divideBy(C)},_divideBy:function(C){return this.x/=C,this.y/=C,this},multiplyBy:function(C){return this.clone()._multiplyBy(C)},_multiplyBy:function(C){return this.x*=C,this.y*=C,this},scaleBy:function(C){return new J(this.x*C.x,this.y*C.y)},unscaleBy:function(C){return new J(this.x/C.x,this.y/C.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=X1(this.x),this.y=X1(this.y),this},distanceTo:function(C){C=n1(C);var s=C.x-this.x,l=C.y-this.y;return Math.sqrt(s*s+l*l)},equals:function(C){return C=n1(C),C.x===this.x&&C.y===this.y},contains:function(C){return C=n1(C),Math.abs(C.x)<=Math.abs(this.x)&&Math.abs(C.y)<=Math.abs(this.y)},toString:function(){return"Point("+d(this.x)+", "+d(this.y)+")"}};function n1(C,s,l){return C instanceof J?C:T(C)?new J(C[0],C[1]):C==null?C:typeof C=="object"&&"x"in C&&"y"in C?new J(C.x,C.y):new J(C,s,l)}function U(C,s){if(C)for(var l=s?[C,s]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}U.prototype={extend:function(C){var s,l;if(!C)return this;if(C instanceof J||typeof C[0]=="number"||"x"in C)s=l=n1(C);else if(C=r1(C),s=C.min,l=C.max,!s||!l)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=l.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(C){return n1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,C)},getBottomLeft:function(){return n1(this.min.x,this.max.y)},getTopRight:function(){return n1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(C){var s,l;return typeof C[0]=="number"||C instanceof J?C=n1(C):C=r1(C),C instanceof U?(s=C.min,l=C.max):s=l=C,s.x>=this.min.x&&l.x<=this.max.x&&s.y>=this.min.y&&l.y<=this.max.y},intersects:function(C){C=r1(C);var s=this.min,l=this.max,u=C.min,f=C.max,b=f.x>=s.x&&u.x<=l.x,P=f.y>=s.y&&u.y<=l.y;return b&&P},overlaps:function(C){C=r1(C);var s=this.min,l=this.max,u=C.min,f=C.max,b=f.x>s.x&&u.x<l.x,P=f.y>s.y&&u.y<l.y;return b&&P},isValid:function(){return!!(this.min&&this.max)},pad:function(C){var s=this.min,l=this.max,u=Math.abs(s.x-l.x)*C,f=Math.abs(s.y-l.y)*C;return r1(n1(s.x-u,s.y-f),n1(l.x+u,l.y+f))},equals:function(C){return C?(C=r1(C),this.min.equals(C.getTopLeft())&&this.max.equals(C.getBottomRight())):!1}};function r1(C,s){return!C||C instanceof U?C:new U(C,s)}function s1(C,s){if(C)for(var l=s?[C,s]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}s1.prototype={extend:function(C){var s=this._southWest,l=this._northEast,u,f;if(C instanceof V1)u=C,f=C;else if(C instanceof s1){if(u=C._southWest,f=C._northEast,!u||!f)return this}else return C?this.extend(L1(C)||m1(C)):this;return!s&&!l?(this._southWest=new V1(u.lat,u.lng),this._northEast=new V1(f.lat,f.lng)):(s.lat=Math.min(u.lat,s.lat),s.lng=Math.min(u.lng,s.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(C){var s=this._southWest,l=this._northEast,u=Math.abs(s.lat-l.lat)*C,f=Math.abs(s.lng-l.lng)*C;return new s1(new V1(s.lat-u,s.lng-f),new V1(l.lat+u,l.lng+f))},getCenter:function(){return new V1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V1(this.getNorth(),this.getWest())},getSouthEast:function(){return new V1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(C){typeof C[0]=="number"||C instanceof V1||"lat"in C?C=L1(C):C=m1(C);var s=this._southWest,l=this._northEast,u,f;return C instanceof s1?(u=C.getSouthWest(),f=C.getNorthEast()):u=f=C,u.lat>=s.lat&&f.lat<=l.lat&&u.lng>=s.lng&&f.lng<=l.lng},intersects:function(C){C=m1(C);var s=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),b=f.lat>=s.lat&&u.lat<=l.lat,P=f.lng>=s.lng&&u.lng<=l.lng;return b&&P},overlaps:function(C){C=m1(C);var s=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),b=f.lat>s.lat&&u.lat<l.lat,P=f.lng>s.lng&&u.lng<l.lng;return b&&P},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(C,s){return C?(C=m1(C),this._southWest.equals(C.getSouthWest(),s)&&this._northEast.equals(C.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function m1(C,s){return C instanceof s1?C:new s1(C,s)}function V1(C,s,l){if(isNaN(C)||isNaN(s))throw new Error("Invalid LatLng object: ("+C+", "+s+")");this.lat=+C,this.lng=+s,l!==void 0&&(this.alt=+l)}V1.prototype={equals:function(C,s){if(!C)return!1;C=L1(C);var l=Math.max(Math.abs(this.lat-C.lat),Math.abs(this.lng-C.lng));return l<=(s===void 0?1e-9:s)},toString:function(C){return"LatLng("+d(this.lat,C)+", "+d(this.lng,C)+")"},distanceTo:function(C){return k1.distance(this,L1(C))},wrap:function(){return k1.wrapLatLng(this)},toBounds:function(C){var s=180*C/40075017,l=s/Math.cos(Math.PI/180*this.lat);return m1([this.lat-s,this.lng-l],[this.lat+s,this.lng+l])},clone:function(){return new V1(this.lat,this.lng,this.alt)}};function L1(C,s,l){return C instanceof V1?C:T(C)&&typeof C[0]!="object"?C.length===3?new V1(C[0],C[1],C[2]):C.length===2?new V1(C[0],C[1]):null:C==null?C:typeof C=="object"&&"lat"in C?new V1(C.lat,"lng"in C?C.lng:C.lon,C.alt):s===void 0?null:new V1(C,s,l)}var g1={latLngToPoint:function(C,s){var l=this.projection.project(C),u=this.scale(s);return this.transformation._transform(l,u)},pointToLatLng:function(C,s){var l=this.scale(s),u=this.transformation.untransform(C,l);return this.projection.unproject(u)},project:function(C){return this.projection.project(C)},unproject:function(C){return this.projection.unproject(C)},scale:function(C){return 256*Math.pow(2,C)},zoom:function(C){return Math.log(C/256)/Math.LN2},getProjectedBounds:function(C){if(this.infinite)return null;var s=this.projection.bounds,l=this.scale(C),u=this.transformation.transform(s.min,l),f=this.transformation.transform(s.max,l);return new U(u,f)},infinite:!1,wrapLatLng:function(C){var s=this.wrapLng?V(C.lng,this.wrapLng,!0):C.lng,l=this.wrapLat?V(C.lat,this.wrapLat,!0):C.lat,u=C.alt;return new V1(l,s,u)},wrapLatLngBounds:function(C){var s=C.getCenter(),l=this.wrapLatLng(s),u=s.lat-l.lat,f=s.lng-l.lng;if(u===0&&f===0)return C;var b=C.getSouthWest(),P=C.getNorthEast(),D=new V1(b.lat-u,b.lng-f),I=new V1(P.lat-u,P.lng-f);return new s1(D,I)}},k1=e({},g1,{wrapLng:[-180,180],R:6371e3,distance:function(C,s){var l=Math.PI/180,u=C.lat*l,f=s.lat*l,b=Math.sin((s.lat-C.lat)*l/2),P=Math.sin((s.lng-C.lng)*l/2),D=b*b+Math.cos(u)*Math.cos(f)*P*P,I=2*Math.atan2(Math.sqrt(D),Math.sqrt(1-D));return this.R*I}}),h2=6378137,x2={R:h2,MAX_LATITUDE:85.0511287798,project:function(C){var s=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,C.lat),-l),f=Math.sin(u*s);return new J(this.R*C.lng*s,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(C){var s=180/Math.PI;return new V1((2*Math.atan(Math.exp(C.y/this.R))-Math.PI/2)*s,C.x*s/this.R)},bounds:(function(){var C=h2*Math.PI;return new U([-C,-C],[C,C])})()};function $2(C,s,l,u){if(T(C)){this._a=C[0],this._b=C[1],this._c=C[2],this._d=C[3];return}this._a=C,this._b=s,this._c=l,this._d=u}$2.prototype={transform:function(C,s){return this._transform(C.clone(),s)},_transform:function(C,s){return s=s||1,C.x=s*(this._a*C.x+this._b),C.y=s*(this._c*C.y+this._d),C},untransform:function(C,s){return s=s||1,new J((C.x/s-this._b)/this._a,(C.y/s-this._d)/this._c)}};function c2(C,s,l,u){return new $2(C,s,l,u)}var c1=e({},k1,{code:"EPSG:3857",projection:x2,transformation:(function(){var C=.5/(Math.PI*x2.R);return c2(C,.5,-C,.5)})()}),o5=e({},c1,{code:"EPSG:900913"});function Y2(C){return document.createElementNS("http://www.w3.org/2000/svg",C)}function g5(C,s){var l="",u,f,b,P,D,I;for(u=0,b=C.length;u<b;u++){for(D=C[u],f=0,P=D.length;f<P;f++)I=D[f],l+=(f?"L":"M")+I.x+" "+I.y;l+=s?u1.svg?"z":"x":""}return l||"M0 0"}var F2=document.documentElement.style,g2="ActiveXObject"in window,c5=g2&&!document.addEventListener,M5="msLaunchUri"in navigator&&!("documentMode"in document),e2=_5("webkit"),_2=_5("android"),Y0=_5("android 2")||_5("android 3"),Ut=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),jt=_2&&_5("Google")&&Ut<537&&!("AudioNode"in window),M7=!!window.opera,k3=!M5&&_5("chrome"),L6=_5("gecko")&&!e2&&!M7&&!g2,l6=!k3&&_5("safari"),d4=_5("phantom"),c6="OTransition"in F2,M6=navigator.platform.indexOf("Win")===0,d7=g2&&"transition"in F2,p7="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Y0,Q0="MozPerspective"in F2,d6=!window.L_DISABLE_3D&&(d7||p7||Q0)&&!c6&&!d4,q=typeof orientation<"u"||_5("mobile"),p6=q&&e2,p4=q&&p7,O3=!window.PointerEvent&&window.MSPointerEvent,u6=!!(window.PointerEvent||O3),u4="ontouchstart"in window||!!window.TouchEvent,Gt=!window.L_NO_TOUCH&&(u4||u6),gi=q&&M7,qt=q&&L6,Yt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Qt=(function(){var C=!1;try{var s=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("testPassiveEventSupport",c,s),window.removeEventListener("testPassiveEventSupport",c,s)}catch{}return C})(),Kt=(function(){return!!document.createElement("canvas").getContext})(),u7=!!(document.createElementNS&&Y2("svg").createSVGRect),h6=!!u7&&(function(){var C=document.createElement("div");return C.innerHTML="<svg/>",(C.firstChild&&C.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Xt=!u7&&(function(){try{var C=document.createElement("div");C.innerHTML='<v:shape adj="1"/>';var s=C.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}})(),h4=navigator.platform.indexOf("Mac")===0,Jt=navigator.platform.indexOf("Linux")===0;function _5(C){return navigator.userAgent.toLowerCase().indexOf(C)>=0}var u1={ie:g2,ielt9:c5,edge:M5,webkit:e2,android:_2,android23:Y0,androidStock:jt,opera:M7,chrome:k3,gecko:L6,safari:l6,phantom:d4,opera12:c6,win:M6,ie3d:d7,webkit3d:p7,gecko3d:Q0,any3d:d6,mobile:q,mobileWebkit:p6,mobileWebkit3d:p4,msPointer:O3,pointer:u6,touch:Gt,touchNative:u4,mobileOpera:gi,mobileGecko:qt,retina:Yt,passiveEvents:Qt,canvas:Kt,svg:u7,vml:Xt,inlineSvg:h6,mac:h4,linux:Jt},m6=u1.msPointer?"MSPointerDown":"pointerdown",f6=u1.msPointer?"MSPointerMove":"pointermove",h7=u1.msPointer?"MSPointerUp":"pointerup",K0=u1.msPointer?"MSPointerCancel":"pointercancel",T3={touchstart:m6,touchmove:f6,touchend:h7,touchcancel:K0},m4={touchstart:v,touchmove:p,touchend:p,touchcancel:p},b5={},f4=!1;function A6(C,s,l){return s==="touchstart"&&h(),m4[s]?(l=m4[s].bind(this,l),C.addEventListener(T3[s],l,!1),l):(console.warn("wrong event specified:",s),c)}function v6(C,s,l){if(!T3[s]){console.warn("wrong event specified:",s);return}C.removeEventListener(T3[s],l,!1)}function te(C){b5[C.pointerId]=C}function x6(C){b5[C.pointerId]&&(b5[C.pointerId]=C)}function M(C){delete b5[C.pointerId]}function h(){f4||(document.addEventListener(m6,te,!0),document.addEventListener(f6,x6,!0),document.addEventListener(h7,M,!0),document.addEventListener(K0,M,!0),f4=!0)}function p(C,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var l in b5)s.touches.push(b5[l]);s.changedTouches=[s],C(s)}}function v(C,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&d2(s),p(C,s)}function _(C){var s={},l,u;for(u in C)l=C[u],s[u]=l&&l.bind?l.bind(C):l;return C=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var w=200;function S(C,s){C.addEventListener("dblclick",s);var l=0,u;function f(b){if(b.detail!==1){u=b.detail;return}if(!(b.pointerType==="mouse"||b.sourceCapabilities&&!b.sourceCapabilities.firesTouchEvents)){var P=f7(b);if(!(P.some(function(I){return I instanceof HTMLLabelElement&&I.attributes.for})&&!P.some(function(I){return I instanceof HTMLInputElement||I instanceof HTMLSelectElement}))){var D=Date.now();D-l<=w?(u++,u===2&&s(_(b))):u=1,l=D}}}return C.addEventListener("click",f),{dblclick:s,simDblclick:f}}function E(C,s){C.removeEventListener("dblclick",s.dblclick),C.removeEventListener("click",s.simDblclick)}var z=A2(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),W=A2(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),N=W==="webkitTransition"||W==="OTransition"?W+"End":"transitionend";function a1(C){return typeof C=="string"?document.getElementById(C):C}function p1(C,s){var l=C.style[s]||C.currentStyle&&C.currentStyle[s];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(C,null);l=u?u[s]:null}return l==="auto"?null:l}function B(C,s,l){var u=document.createElement(C);return u.className=s||"",l&&l.appendChild(u),u}function M1(C){var s=C.parentNode;s&&s.removeChild(C)}function Y1(C){for(;C.firstChild;)C.removeChild(C.firstChild)}function F1(C){var s=C.parentNode;s&&s.lastChild!==C&&s.appendChild(C)}function R1(C){var s=C.parentNode;s&&s.firstChild!==C&&s.insertBefore(C,s.firstChild)}function Q1(C,s){if(C.classList!==void 0)return C.classList.contains(s);var l=d5(C);return l.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(l)}function d1(C,s){if(C.classList!==void 0)for(var l=A(s),u=0,f=l.length;u<f;u++)C.classList.add(l[u]);else if(!Q1(C,s)){var b=d5(C);n0(C,(b?b+" ":"")+s)}}function D1(C,s){C.classList!==void 0?C.classList.remove(s):n0(C,m((" "+d5(C)+" ").replace(" "+s+" "," ")))}function n0(C,s){C.className.baseVal===void 0?C.className=s:C.className.baseVal=s}function d5(C){return C.correspondingElement&&(C=C.correspondingElement),C.className.baseVal===void 0?C.className:C.className.baseVal}function R2(C,s){"opacity"in C.style?C.style.opacity=s:"filter"in C.style&&I5(C,s)}function I5(C,s){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=C.filters.item(u)}catch{if(s===1)return}s=Math.round(s*100),l?(l.Enabled=s!==100,l.Opacity=s):C.style.filter+=" progid:"+u+"(opacity="+s+")"}function A2(C){for(var s=document.documentElement.style,l=0;l<C.length;l++)if(C[l]in s)return C[l];return!1}function m2(C,s,l){var u=s||new J(0,0);C.style[z]=(u1.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function J1(C,s){C._leaflet_pos=s,u1.any3d?m2(C,s):(C.style.left=s.x+"px",C.style.top=s.y+"px")}function W2(C){return C._leaflet_pos||new J(0,0)}var b2,p5,s0;if("onselectstart"in document)b2=function(){A1(window,"selectstart",d2)},p5=function(){j1(window,"selectstart",d2)};else{var N5=A2(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);b2=function(){if(N5){var C=document.documentElement.style;s0=C[N5],C[N5]="none"}},p5=function(){N5&&(document.documentElement.style[N5]=s0,s0=void 0)}}function H0(){A1(window,"dragstart",d2)}function V0(){j1(window,"dragstart",d2)}var X0,w2;function L0(C){for(;C.tabIndex===-1;)C=C.parentNode;C.style&&(w5(),X0=C,w2=C.style.outlineStyle,C.style.outlineStyle="none",A1(window,"keydown",w5))}function w5(){X0&&(X0.style.outlineStyle=w2,X0=void 0,w2=void 0,j1(window,"keydown",w5))}function m7(C){do C=C.parentNode;while((!C.offsetWidth||!C.offsetHeight)&&C!==document.body);return C}function P3(C){var s=C.getBoundingClientRect();return{x:s.width/C.offsetWidth||1,y:s.height/C.offsetHeight||1,boundingClientRect:s}}var E3={__proto__:null,TRANSFORM:z,TRANSITION:W,TRANSITION_END:N,get:a1,getStyle:p1,create:B,remove:M1,empty:Y1,toFront:F1,toBack:R1,hasClass:Q1,addClass:d1,removeClass:D1,setClass:n0,getClass:d5,setOpacity:R2,testProp:A2,setTransform:m2,setPosition:J1,getPosition:W2,get disableTextSelection(){return b2},get enableTextSelection(){return p5},disableImageDrag:H0,enableImageDrag:V0,preventOutline:L0,restoreOutline:w5,getSizedParentNode:m7,getScale:P3};function A1(C,s,l,u){if(s&&typeof s=="object")for(var f in s)b0(C,f,s[f],l);else{s=A(s);for(var b=0,P=s.length;b<P;b++)b0(C,s[b],l,u)}return this}var D2="_leaflet_events";function j1(C,s,l,u){if(arguments.length===1)W5(C),delete C[D2];else if(s&&typeof s=="object")for(var f in s)c0(C,f,s[f],l);else if(s=A(s),arguments.length===2)W5(C,function(D){return $(s,D)!==-1});else for(var b=0,P=s.length;b<P;b++)c0(C,s[b],l,u);return this}function W5(C,s){for(var l in C[D2]){var u=l.split(/\d/)[0];(!s||s(u))&&c0(C,u,null,null,l)}}var l0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function b0(C,s,l,u){var f=s+n(l)+(u?"_"+n(u):"");if(C[D2]&&C[D2][f])return this;var b=function(D){return l.call(u||C,D||window.event)},P=b;!u1.touchNative&&u1.pointer&&s.indexOf("touch")===0?b=A6(C,s,b):u1.touch&&s==="dblclick"?b=S(C,b):"addEventListener"in C?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?C.addEventListener(l0[s]||s,b,u1.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(b=function(D){D=D||window.event,y2(C,D)&&P(D)},C.addEventListener(l0[s],b,!1)):C.addEventListener(s,P,!1):C.attachEvent("on"+s,b),C[D2]=C[D2]||{},C[D2][f]=b}function c0(C,s,l,u,f){f=f||s+n(l)+(u?"_"+n(u):"");var b=C[D2]&&C[D2][f];if(!b)return this;!u1.touchNative&&u1.pointer&&s.indexOf("touch")===0?v6(C,s,b):u1.touch&&s==="dblclick"?E(C,b):"removeEventListener"in C?C.removeEventListener(l0[s]||s,b,!1):C.detachEvent("on"+s,b),C[D2][f]=null}function Q2(C){return C.stopPropagation?C.stopPropagation():C.originalEvent?C.originalEvent._stopped=!0:C.cancelBubble=!0,this}function M2(C){return b0(C,"wheel",Q2),this}function C5(C){return A1(C,"mousedown touchstart dblclick contextmenu",Q2),C._leaflet_disable_click=!0,this}function d2(C){return C.preventDefault?C.preventDefault():C.returnValue=!1,this}function U5(C){return d2(C),Q2(C),this}function f7(C){if(C.composedPath)return C.composedPath();for(var s=[],l=C.target;l;)s.push(l),l=l.parentNode;return s}function x1(C,s){if(!s)return new J(C.clientX,C.clientY);var l=P3(s),u=l.boundingClientRect;return new J((C.clientX-u.left)/l.x-s.clientLeft,(C.clientY-u.top)/l.y-s.clientTop)}var I1=u1.linux&&u1.chrome?window.devicePixelRatio:u1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function S2(C){return u1.edge?C.wheelDeltaY/2:C.deltaY&&C.deltaMode===0?-C.deltaY/I1:C.deltaY&&C.deltaMode===1?-C.deltaY*20:C.deltaY&&C.deltaMode===2?-C.deltaY*60:C.deltaX||C.deltaZ?0:C.wheelDelta?(C.wheelDeltaY||C.wheelDelta)/2:C.detail&&Math.abs(C.detail)<32765?-C.detail*20:C.detail?C.detail/-32765*60:0}function y2(C,s){var l=s.relatedTarget;if(!l)return!0;try{for(;l&&l!==C;)l=l.parentNode}catch{return!1}return l!==C}var a5={__proto__:null,on:A1,off:j1,stopPropagation:Q2,disableScrollPropagation:M2,disableClickPropagation:C5,preventDefault:d2,stop:U5,getPropagationPath:f7,getMousePosition:x1,getWheelDelta:S2,isExternalTarget:y2,addListener:A1,removeListener:j1},S5=Z1.extend({run:function(C,s,l,u){this.stop(),this._el=C,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=W2(C),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=o1(this._animate,this),this._step()},_step:function(C){var s=+new Date-this._startTime,l=this._duration*1e3;s<l?this._runFrame(this._easeOut(s/l),C):(this._runFrame(1),this._complete())},_runFrame:function(C,s){var l=this._startPos.add(this._offset.multiplyBy(C));s&&l._round(),J1(this._el,l),this.fire("step")},_complete:function(){h1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(C){return 1-Math.pow(1-C,this._easeOutPower)}}),_1=Z1.extend({options:{crs:c1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(C,s){s=g(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(C),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(L1(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=W&&u1.any3d&&!u1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A1(this._proxy,N,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(C,s,l){if(s=s===void 0?this._zoom:this._limitZoom(s),C=this._limitCenter(L1(C),s,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(C,s,l.zoom):this._tryAnimatedPan(C,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(C,s,l.pan&&l.pan.noMoveStart),this},setZoom:function(C,s){return this._loaded?this.setView(this.getCenter(),C,{zoom:s}):(this._zoom=C,this)},zoomIn:function(C,s){return C=C||(u1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+C,s)},zoomOut:function(C,s){return C=C||(u1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-C,s)},setZoomAround:function(C,s,l){var u=this.getZoomScale(s),f=this.getSize().divideBy(2),b=C instanceof J?C:this.latLngToContainerPoint(C),P=b.subtract(f).multiplyBy(1-1/u),D=this.containerPointToLatLng(f.add(P));return this.setView(D,s,{zoom:l})},_getBoundsCenterZoom:function(C,s){s=s||{},C=C.getBounds?C.getBounds():m1(C);var l=n1(s.paddingTopLeft||s.padding||[0,0]),u=n1(s.paddingBottomRight||s.padding||[0,0]),f=this.getBoundsZoom(C,!1,l.add(u));if(f=typeof s.maxZoom=="number"?Math.min(s.maxZoom,f):f,f===1/0)return{center:C.getCenter(),zoom:f};var b=u.subtract(l).divideBy(2),P=this.project(C.getSouthWest(),f),D=this.project(C.getNorthEast(),f),I=this.unproject(P.add(D).divideBy(2).add(b),f);return{center:I,zoom:f}},fitBounds:function(C,s){if(C=m1(C),!C.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(C,s);return this.setView(l.center,l.zoom,s)},fitWorld:function(C){return this.fitBounds([[-90,-180],[90,180]],C)},panTo:function(C,s){return this.setView(C,this._zoom,{pan:s})},panBy:function(C,s){if(C=n1(C).round(),s=s||{},!C.x&&!C.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(C))return this._resetView(this.unproject(this.project(this.getCenter()).add(C)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new S5,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){d1(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(C).round();this._panAnim.run(this._mapPane,l,s.duration||.25,s.easeLinearity)}else this._rawPanBy(C),this.fire("move").fire("moveend");return this},flyTo:function(C,s,l){if(l=l||{},l.animate===!1||!u1.any3d)return this.setView(C,s,l);this._stop();var u=this.project(this.getCenter()),f=this.project(C),b=this.getSize(),P=this._zoom;C=L1(C),s=s===void 0?P:s;var D=Math.max(b.x,b.y),I=D*this.getZoomScale(P,s),j=f.distanceTo(u)||1,C1=1.42,v1=C1*C1;function O1(v2){var F6=v2?-1:1,DV=v2?I:D,BV=I*I-D*D+F6*v1*v1*j*j,zV=2*DV*v1*j,Ve=BV/zV,to=Math.sqrt(Ve*Ve+1)-Ve,IV=to<1e-9?-18:Math.log(to);return IV}function J2(v2){return(Math.exp(v2)-Math.exp(-v2))/2}function Z2(v2){return(Math.exp(v2)+Math.exp(-v2))/2}function k5(v2){return J2(v2)/Z2(v2)}var s5=O1(0);function b7(v2){return D*(Z2(s5)/Z2(s5+C1*v2))}function EV(v2){return D*(Z2(s5)*k5(s5+C1*v2)-J2(s5))/v1}function $V(v2){return 1-Math.pow(1-v2,1.5)}var FV=Date.now(),Xi=(O1(1)-s5)/C1,RV=l.duration?1e3*l.duration:1e3*Xi*.8;function Ji(){var v2=(Date.now()-FV)/RV,F6=$V(v2)*Xi;v2<=1?(this._flyToFrame=o1(Ji,this),this._move(this.unproject(u.add(f.subtract(u).multiplyBy(EV(F6)/j)),P),this.getScaleZoom(D/b7(F6),P),{flyTo:!0})):this._move(C,s)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Ji.call(this),this},flyToBounds:function(C,s){var l=this._getBoundsCenterZoom(C,s);return this.flyTo(l.center,l.zoom,s)},setMaxBounds:function(C){return C=m1(C),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),C.isValid()?(this.options.maxBounds=C,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(C){var s=this.options.minZoom;return this.options.minZoom=C,this._loaded&&s!==C&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(C):this},setMaxZoom:function(C){var s=this.options.maxZoom;return this.options.maxZoom=C,this._loaded&&s!==C&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(C):this},panInsideBounds:function(C,s){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,m1(C));return l.equals(u)||this.panTo(u,s),this._enforcingBounds=!1,this},panInside:function(C,s){s=s||{};var l=n1(s.paddingTopLeft||s.padding||[0,0]),u=n1(s.paddingBottomRight||s.padding||[0,0]),f=this.project(this.getCenter()),b=this.project(C),P=this.getPixelBounds(),D=r1([P.min.add(l),P.max.subtract(u)]),I=D.getSize();if(!D.contains(b)){this._enforcingBounds=!0;var j=b.subtract(D.getCenter()),C1=D.extend(b).getSize().subtract(I);f.x+=j.x<0?-C1.x:C1.x,f.y+=j.y<0?-C1.y:C1.y,this.panTo(this.unproject(f),s),this._enforcingBounds=!1}return this},invalidateSize:function(C){if(!this._loaded)return this;C=e({animate:!1,pan:!0},C===!0?{animate:!0}:C);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=s.divideBy(2).round(),f=l.divideBy(2).round(),b=u.subtract(f);return!b.x&&!b.y?this:(C.animate&&C.pan?this.panBy(b):(C.pan&&this._rawPanBy(b),this.fire("move"),C.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(C){if(C=this._locateOptions=e({timeout:1e4,watch:!1},C),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=o(this._handleGeolocationResponse,this),l=o(this._handleGeolocationError,this);return C.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,l,C):navigator.geolocation.getCurrentPosition(s,l,C),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(C){if(this._container._leaflet_id){var s=C.code,l=C.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(C){if(this._container._leaflet_id){var s=C.coords.latitude,l=C.coords.longitude,u=new V1(s,l),f=u.toBounds(C.coords.accuracy*2),b=this._locateOptions;if(b.setView){var P=this.getBoundsZoom(f);this.setView(u,b.maxZoom?Math.min(P,b.maxZoom):P)}var D={latlng:u,bounds:f,timestamp:C.timestamp};for(var I in C.coords)typeof C.coords[I]=="number"&&(D[I]=C.coords[I]);this.fire("locationfound",D)}},addHandler:function(C,s){if(!s)return this;var l=this[C]=new s(this);return this._handlers.push(l),this.options[C]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),M1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(h1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var C;for(C in this._layers)this._layers[C].remove();for(C in this._panes)M1(this._panes[C]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(C,s){var l="leaflet-pane"+(C?" leaflet-"+C.replace("Pane","")+"-pane":""),u=B("div",l,s||this._mapPane);return C&&(this._panes[C]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var C=this.getPixelBounds(),s=this.unproject(C.getBottomLeft()),l=this.unproject(C.getTopRight());return new s1(s,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(C,s,l){C=m1(C),l=n1(l||[0,0]);var u=this.getZoom()||0,f=this.getMinZoom(),b=this.getMaxZoom(),P=C.getNorthWest(),D=C.getSouthEast(),I=this.getSize().subtract(l),j=r1(this.project(D,u),this.project(P,u)).getSize(),C1=u1.any3d?this.options.zoomSnap:1,v1=I.x/j.x,O1=I.y/j.y,J2=s?Math.max(v1,O1):Math.min(v1,O1);return u=this.getScaleZoom(J2,u),C1&&(u=Math.round(u/(C1/100))*(C1/100),u=s?Math.ceil(u/C1)*C1:Math.floor(u/C1)*C1),Math.max(f,Math.min(b,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new J(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(C,s){var l=this._getTopLeftPoint(C,s);return new U(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(C){return this.options.crs.getProjectedBounds(C===void 0?this.getZoom():C)},getPane:function(C){return typeof C=="string"?this._panes[C]:C},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(C,s){var l=this.options.crs;return s=s===void 0?this._zoom:s,l.scale(C)/l.scale(s)},getScaleZoom:function(C,s){var l=this.options.crs;s=s===void 0?this._zoom:s;var u=l.zoom(C*l.scale(s));return isNaN(u)?1/0:u},project:function(C,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(L1(C),s)},unproject:function(C,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(n1(C),s)},layerPointToLatLng:function(C){var s=n1(C).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(C){var s=this.project(L1(C))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(C){return this.options.crs.wrapLatLng(L1(C))},wrapLatLngBounds:function(C){return this.options.crs.wrapLatLngBounds(m1(C))},distance:function(C,s){return this.options.crs.distance(L1(C),L1(s))},containerPointToLayerPoint:function(C){return n1(C).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(C){return n1(C).add(this._getMapPanePos())},containerPointToLatLng:function(C){var s=this.containerPointToLayerPoint(n1(C));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(C){return this.layerPointToContainerPoint(this.latLngToLayerPoint(L1(C)))},mouseEventToContainerPoint:function(C){return x1(C,this._container)},mouseEventToLayerPoint:function(C){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(C))},mouseEventToLatLng:function(C){return this.layerPointToLatLng(this.mouseEventToLayerPoint(C))},_initContainer:function(C){var s=this._container=a1(C);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A1(s,"scroll",this._onScroll,this),this._containerId=n(s)},_initLayout:function(){var C=this._container;this._fadeAnimated=this.options.fadeAnimation&&u1.any3d,d1(C,"leaflet-container"+(u1.touch?" leaflet-touch":"")+(u1.retina?" leaflet-retina":"")+(u1.ielt9?" leaflet-oldie":"")+(u1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=p1(C,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(C.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var C=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),J1(this._mapPane,new J(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(d1(C.markerPane,"leaflet-zoom-hide"),d1(C.shadowPane,"leaflet-zoom-hide"))},_resetView:function(C,s,l){J1(this._mapPane,new J(0,0));var u=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var f=this._zoom!==s;this._moveStart(f,l)._move(C,s)._moveEnd(f),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(C,s){return C&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(C,s,l,u){s===void 0&&(s=this._zoom);var f=this._zoom!==s;return this._zoom=s,this._lastCenter=C,this._pixelOrigin=this._getNewPixelOrigin(C),u?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(C){return C&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return h1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(C){J1(this._mapPane,this._getMapPanePos().subtract(C))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(C){this._targets={},this._targets[n(this._container)]=this;var s=C?j1:A1;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),u1.any3d&&this.options.transform3DLimit&&(C?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){h1(this._resizeRequest),this._resizeRequest=o1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var C=this._getMapPanePos();Math.max(Math.abs(C.x),Math.abs(C.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(C,s){for(var l=[],u,f=s==="mouseout"||s==="mouseover",b=C.target||C.srcElement,P=!1;b;){if(u=this._targets[n(b)],u&&(s==="click"||s==="preclick")&&this._draggableMoved(u)){P=!0;break}if(u&&u.listens(s,!0)&&(f&&!y2(b,C)||(l.push(u),f))||b===this._container)break;b=b.parentNode}return!l.length&&!P&&!f&&this.listens(s,!0)&&(l=[this]),l},_isClickDisabled:function(C){for(;C&&C!==this._container;){if(C._leaflet_disable_click)return!0;C=C.parentNode}},_handleDOMEvent:function(C){var s=C.target||C.srcElement;if(!(!this._loaded||s._leaflet_disable_events||C.type==="click"&&this._isClickDisabled(s))){var l=C.type;l==="mousedown"&&L0(s),this._fireDOMEvent(C,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(C,s,l){if(C.type==="click"){var u=e({},C);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var f=this._findEventTargets(C,s);if(l){for(var b=[],P=0;P<l.length;P++)l[P].listens(s,!0)&&b.push(l[P]);f=b.concat(f)}if(f.length){s==="contextmenu"&&d2(C);var D=f[0],I={originalEvent:C};if(C.type!=="keypress"&&C.type!=="keydown"&&C.type!=="keyup"){var j=D.getLatLng&&(!D._radius||D._radius<=10);I.containerPoint=j?this.latLngToContainerPoint(D.getLatLng()):this.mouseEventToContainerPoint(C),I.layerPoint=this.containerPointToLayerPoint(I.containerPoint),I.latlng=j?D.getLatLng():this.layerPointToLatLng(I.layerPoint)}for(P=0;P<f.length;P++)if(f[P].fire(s,I,!0),I.originalEvent._stopped||f[P].options.bubblingMouseEvents===!1&&$(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(C){return C=C.dragging&&C.dragging.enabled()?C:this,C.dragging&&C.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var C=0,s=this._handlers.length;C<s;C++)this._handlers[C].disable()},whenReady:function(C,s){return this._loaded?C.call(s||this,{target:this}):this.on("load",C,s),this},_getMapPanePos:function(){return W2(this._mapPane)||new J(0,0)},_moved:function(){var C=this._getMapPanePos();return C&&!C.equals([0,0])},_getTopLeftPoint:function(C,s){var l=C&&s!==void 0?this._getNewPixelOrigin(C,s):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(C,s){var l=this.getSize()._divideBy(2);return this.project(C,s)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(C,s,l){var u=this._getNewPixelOrigin(l,s);return this.project(C,s)._subtract(u)},_latLngBoundsToNewLayerBounds:function(C,s,l){var u=this._getNewPixelOrigin(l,s);return r1([this.project(C.getSouthWest(),s)._subtract(u),this.project(C.getNorthWest(),s)._subtract(u),this.project(C.getSouthEast(),s)._subtract(u),this.project(C.getNorthEast(),s)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(C){return this.latLngToLayerPoint(C).subtract(this._getCenterLayerPoint())},_limitCenter:function(C,s,l){if(!l)return C;var u=this.project(C,s),f=this.getSize().divideBy(2),b=new U(u.subtract(f),u.add(f)),P=this._getBoundsOffset(b,l,s);return Math.abs(P.x)<=1&&Math.abs(P.y)<=1?C:this.unproject(u.add(P),s)},_limitOffset:function(C,s){if(!s)return C;var l=this.getPixelBounds(),u=new U(l.min.add(C),l.max.add(C));return C.add(this._getBoundsOffset(u,s))},_getBoundsOffset:function(C,s,l){var u=r1(this.project(s.getNorthEast(),l),this.project(s.getSouthWest(),l)),f=u.min.subtract(C.min),b=u.max.subtract(C.max),P=this._rebound(f.x,-b.x),D=this._rebound(f.y,-b.y);return new J(P,D)},_rebound:function(C,s){return C+s>0?Math.round(C-s)/2:Math.max(0,Math.ceil(C))-Math.max(0,Math.floor(s))},_limitZoom:function(C){var s=this.getMinZoom(),l=this.getMaxZoom(),u=u1.any3d?this.options.zoomSnap:1;return u&&(C=Math.round(C/u)*u),Math.max(s,Math.min(l,C))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){D1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(C,s){var l=this._getCenterOffset(C)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,s),!0)},_createAnimProxy:function(){var C=this._proxy=B("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(C),this.on("zoomanim",function(s){var l=z,u=this._proxy.style[l];m2(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){M1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var C=this.getCenter(),s=this.getZoom();m2(this._proxy,this.project(C,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(C){this._animatingZoom&&C.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(C,s,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(s),f=this._getCenterOffset(C)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(f)?!1:(o1(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(C,s,!0)},this),!0)},_animateZoom:function(C,s,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=C,this._animateToZoom=s,d1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:C,zoom:s,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&D1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function $3(C,s){return new _1(C,s)}var K2=y1.extend({options:{position:"topright"},initialize:function(C){g(this,C)},getPosition:function(){return this.options.position},setPosition:function(C){var s=this._map;return s&&s.removeControl(this),this.options.position=C,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(C){this.remove(),this._map=C;var s=this._container=this.onAdd(C),l=this.getPosition(),u=C._controlCorners[l];return d1(s,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(s,u.firstChild):u.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(M1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(C){this._map&&C&&C.screenX>0&&C.screenY>0&&this._map.getContainer().focus()}}),Y=function(C){return new K2(C)};_1.include({addControl:function(C){return C.addTo(this),this},removeControl:function(C){return C.remove(),this},_initControlPos:function(){var C=this._controlCorners={},s="leaflet-",l=this._controlContainer=B("div",s+"control-container",this._container);function u(f,b){var P=s+f+" "+s+b;C[f+b]=B("div",P,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var C in this._controlCorners)M1(this._controlCorners[C]);M1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var f1=K2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(C,s,l,u){return l<u?-1:u<l?1:0}},initialize:function(C,s,l){g(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in C)this._addLayer(C[u],u);for(u in s)this._addLayer(s[u],u,!0)},onAdd:function(C){this._initLayout(),this._update(),this._map=C,C.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(C){return K2.prototype.addTo.call(this,C),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var C=0;C<this._layers.length;C++)this._layers[C].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(C,s){return this._addLayer(C,s),this._map?this._update():this},addOverlay:function(C,s){return this._addLayer(C,s,!0),this._map?this._update():this},removeLayer:function(C){C.off("add remove",this._onLayerChange,this);var s=this._getLayer(n(C));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){d1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var C=this._map.getSize().y-(this._container.offsetTop+50);return C<this._section.clientHeight?(d1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=C+"px"):D1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return D1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var C="leaflet-control-layers",s=this._container=B("div",C),l=this.options.collapsed;s.setAttribute("aria-haspopup",!0),C5(s),M2(s);var u=this._section=B("section",C+"-list");l&&(this._map.on("click",this.collapse,this),A1(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=B("a",C+"-toggle",s);f.href="#",f.title="Layers",f.setAttribute("role","button"),A1(f,{keydown:function(b){b.keyCode===13&&this._expandSafely()},click:function(b){d2(b),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=B("div",C+"-base",u),this._separator=B("div",C+"-separator",u),this._overlaysList=B("div",C+"-overlays",u),s.appendChild(u)},_getLayer:function(C){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&n(this._layers[s].layer)===C)return this._layers[s]},_addLayer:function(C,s,l){this._map&&C.on("add remove",this._onLayerChange,this),this._layers.push({layer:C,name:s,overlay:l}),this.options.sortLayers&&this._layers.sort(o(function(u,f){return this.options.sortFunction(u.layer,f.layer,u.name,f.name)},this)),this.options.autoZIndex&&C.setZIndex&&(this._lastZIndex++,C.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Y1(this._baseLayersList),Y1(this._overlaysList),this._layerControlInputs=[];var C,s,l,u,f=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),s=s||u.overlay,C=C||!u.overlay,f+=u.overlay?0:1;return this.options.hideSingleBase&&(C=C&&f>1,this._baseLayersList.style.display=C?"":"none"),this._separator.style.display=s&&C?"":"none",this},_onLayerChange:function(C){this._handlingClick||this._update();var s=this._getLayer(n(C.target)),l=s.overlay?C.type==="add"?"overlayadd":"overlayremove":C.type==="add"?"baselayerchange":null;l&&this._map.fire(l,s)},_createRadioElement:function(C,s){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+C+'"'+(s?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(C){var s=document.createElement("label"),l=this._map.hasLayer(C.layer),u;C.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+n(this),l),this._layerControlInputs.push(u),u.layerId=n(C.layer),A1(u,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+C.name;var b=document.createElement("span");s.appendChild(b),b.appendChild(u),b.appendChild(f);var P=C.overlay?this._overlaysList:this._baseLayersList;return P.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var C=this._layerControlInputs,s,l,u=[],f=[];this._handlingClick=!0;for(var b=C.length-1;b>=0;b--)s=C[b],l=this._getLayer(s.layerId).layer,s.checked?u.push(l):s.checked||f.push(l);for(b=0;b<f.length;b++)this._map.hasLayer(f[b])&&this._map.removeLayer(f[b]);for(b=0;b<u.length;b++)this._map.hasLayer(u[b])||this._map.addLayer(u[b]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var C=this._layerControlInputs,s,l,u=this._map.getZoom(),f=C.length-1;f>=0;f--)s=C[f],l=this._getLayer(s.layerId).layer,s.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var C=this._section;this._preventClick=!0,A1(C,"click",d2),this.expand();var s=this;setTimeout(function(){j1(C,"click",d2),s._preventClick=!1})}}),P1=function(C,s,l){return new f1(C,s,l)},B1=K2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(C){var s="leaflet-control-zoom",l=B("div",s+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,s+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,s+"-out",l,this._zoomOut),this._updateDisabled(),C.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(C){C.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(C){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(C.shiftKey?3:1))},_zoomOut:function(C){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(C.shiftKey?3:1))},_createButton:function(C,s,l,u,f){var b=B("a",l,u);return b.innerHTML=C,b.href="#",b.title=s,b.setAttribute("role","button"),b.setAttribute("aria-label",s),C5(b),A1(b,"click",U5),A1(b,"click",f,this),A1(b,"click",this._refocusOnMap,this),b},_updateDisabled:function(){var C=this._map,s="leaflet-disabled";D1(this._zoomInButton,s),D1(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||C._zoom===C.getMinZoom())&&(d1(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||C._zoom===C.getMaxZoom())&&(d1(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});_1.mergeOptions({zoomControl:!0}),_1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new B1,this.addControl(this.zoomControl))});var B2=function(C){return new B1(C)},X2=K2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(C){var s="leaflet-control-scale",l=B("div",s),u=this.options;return this._addScales(u,s+"-line",l),C.on(u.updateWhenIdle?"moveend":"move",this._update,this),C.whenReady(this._update,this),l},onRemove:function(C){C.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(C,s,l){C.metric&&(this._mScale=B("div",s,l)),C.imperial&&(this._iScale=B("div",s,l))},_update:function(){var C=this._map,s=C.getSize().y/2,l=C.distance(C.containerPointToLatLng([0,s]),C.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(l)},_updateScales:function(C){this.options.metric&&C&&this._updateMetric(C),this.options.imperial&&C&&this._updateImperial(C)},_updateMetric:function(C){var s=this._getRoundNum(C),l=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,l,s/C)},_updateImperial:function(C){var s=C*3.2808399,l,u,f;s>5280?(l=s/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(f=this._getRoundNum(s),this._updateScale(this._iScale,f+" ft",f/s))},_updateScale:function(C,s,l){C.style.width=Math.round(this.options.maxWidth*l)+"px",C.innerHTML=s},_getRoundNum:function(C){var s=Math.pow(10,(Math.floor(C)+"").length-1),l=C/s;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,s*l}}),j5=function(C){return new X2(C)},F3='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',R3=K2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(u1.inlineSvg?F3+" ":"")+"Leaflet</a>"},initialize:function(C){g(this,C),this._attributions={}},onAdd:function(C){C.attributionControl=this,this._container=B("div","leaflet-control-attribution"),C5(this._container);for(var s in C._layers)C._layers[s].getAttribution&&this.addAttribution(C._layers[s].getAttribution());return this._update(),C.on("layeradd",this._addAttribution,this),this._container},onRemove:function(C){C.off("layeradd",this._addAttribution,this)},_addAttribution:function(C){C.layer.getAttribution&&(this.addAttribution(C.layer.getAttribution()),C.layer.once("remove",function(){this.removeAttribution(C.layer.getAttribution())},this))},setPrefix:function(C){return this.options.prefix=C,this._update(),this},addAttribution:function(C){return C?(this._attributions[C]||(this._attributions[C]=0),this._attributions[C]++,this._update(),this):this},removeAttribution:function(C){return C?(this._attributions[C]&&(this._attributions[C]--,this._update()),this):this},_update:function(){if(this._map){var C=[];for(var s in this._attributions)this._attributions[s]&&C.push(s);var l=[];this.options.prefix&&l.push(this.options.prefix),C.length&&l.push(C.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});_1.mergeOptions({attributionControl:!0}),_1.addInitHook(function(){this.options.attributionControl&&new R3().addTo(this)});var u5=function(C){return new R3(C)};K2.Layers=f1,K2.Zoom=B1,K2.Scale=X2,K2.Attribution=R3,Y.layers=P1,Y.zoom=B2,Y.scale=j5,Y.attribution=u5;var n5=y1.extend({initialize:function(C){this._map=C},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});n5.addTo=function(C,s){return C.addHandler(s,this),this};var ee={Events:K1},g6=u1.touch?"touchstart mousedown":"mousedown",y5=Z1.extend({options:{clickTolerance:3},initialize:function(C,s,l,u){g(this,u),this._element=C,this._dragStartTarget=s||C,this._preventOutline=l},enable:function(){this._enabled||(A1(this._dragStartTarget,g6,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(y5._dragging===this&&this.finishDrag(!0),j1(this._dragStartTarget,g6,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(C){if(this._enabled&&(this._moved=!1,!Q1(this._element,"leaflet-zoom-anim"))){if(C.touches&&C.touches.length!==1){y5._dragging===this&&this.finishDrag();return}if(!(y5._dragging||C.shiftKey||C.which!==1&&C.button!==1&&!C.touches)&&(y5._dragging=this,this._preventOutline&&L0(this._element),H0(),b2(),!this._moving)){this.fire("down");var s=C.touches?C.touches[0]:C,l=m7(this._element);this._startPoint=new J(s.clientX,s.clientY),this._startPos=W2(this._element),this._parentScale=P3(l);var u=C.type==="mousedown";A1(document,u?"mousemove":"touchmove",this._onMove,this),A1(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(C){if(this._enabled){if(C.touches&&C.touches.length>1){this._moved=!0;return}var s=C.touches&&C.touches.length===1?C.touches[0]:C,l=new J(s.clientX,s.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,d2(C),this._moved||(this.fire("dragstart"),this._moved=!0,d1(document.body,"leaflet-dragging"),this._lastTarget=C.target||C.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),d1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=C,this._updatePosition())}},_updatePosition:function(){var C={originalEvent:this._lastEvent};this.fire("predrag",C),J1(this._element,this._newPos),this.fire("drag",C)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(C){D1(document.body,"leaflet-dragging"),this._lastTarget&&(D1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),j1(document,"mousemove touchmove",this._onMove,this),j1(document,"mouseup touchend touchcancel",this._onUp,this),V0(),p5();var s=this._moved&&this._moving;this._moving=!1,y5._dragging=!1,s&&this.fire("dragend",{noInertia:C,distance:this._newPos.distanceTo(this._startPos)})}});function _6(C,s,l){var u,f=[1,4,2,8],b,P,D,I,j,C1,v1,O1;for(b=0,C1=C.length;b<C1;b++)C[b]._code=D3(C[b],s);for(D=0;D<4;D++){for(v1=f[D],u=[],b=0,C1=C.length,P=C1-1;b<C1;P=b++)I=C[b],j=C[P],I._code&v1?j._code&v1||(O1=b6(j,I,v1,s,l),O1._code=D3(O1,s),u.push(O1)):(j._code&v1&&(O1=b6(j,I,v1,s,l),O1._code=D3(O1,s),u.push(O1)),u.push(I));C=u}return C}function _i(C,s){var l,u,f,b,P,D,I,j,C1;if(!C||C.length===0)throw new Error("latlngs not passed");Z5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var v1=L1([0,0]),O1=m1(C),J2=O1.getNorthWest().distanceTo(O1.getSouthWest())*O1.getNorthEast().distanceTo(O1.getNorthWest());J2<1700&&(v1=re(C));var Z2=C.length,k5=[];for(l=0;l<Z2;l++){var s5=L1(C[l]);k5.push(s.project(L1([s5.lat-v1.lat,s5.lng-v1.lng])))}for(D=I=j=0,l=0,u=Z2-1;l<Z2;u=l++)f=k5[l],b=k5[u],P=f.y*b.x-b.y*f.x,I+=(f.x+b.x)*P,j+=(f.y+b.y)*P,D+=P*3;D===0?C1=k5[0]:C1=[I/D,j/D];var b7=s.unproject(n1(C1));return L1([b7.lat+v1.lat,b7.lng+v1.lng])}function re(C){for(var s=0,l=0,u=0,f=0;f<C.length;f++){var b=L1(C[f]);s+=b.lat,l+=b.lng,u++}return L1([s/u,l/u])}var CV={__proto__:null,clipPolygon:_6,polygonCenter:_i,centroid:re};function bi(C,s){if(!s||!C.length)return C.slice();var l=s*s;return C=sV(C,l),C=nV(C,l),C}function wi(C,s,l){return Math.sqrt(A4(C,s,l,!0))}function aV(C,s,l){return A4(C,s,l)}function nV(C,s){var l=C.length,u=typeof Uint8Array<"u"?Uint8Array:Array,f=new u(l);f[0]=f[l-1]=1,ie(C,f,s,0,l-1);var b,P=[];for(b=0;b<l;b++)f[b]&&P.push(C[b]);return P}function ie(C,s,l,u,f){var b=0,P,D,I;for(D=u+1;D<=f-1;D++)I=A4(C[D],C[u],C[f],!0),I>b&&(P=D,b=I);b>l&&(s[P]=1,ie(C,s,l,u,P),ie(C,s,l,P,f))}function sV(C,s){for(var l=[C[0]],u=1,f=0,b=C.length;u<b;u++)HV(C[u],C[f])>s&&(l.push(C[u]),f=u);return f<b-1&&l.push(C[b-1]),l}var Si;function yi(C,s,l,u,f){var b=u?Si:D3(C,l),P=D3(s,l),D,I,j;for(Si=P;;){if(!(b|P))return[C,s];if(b&P)return!1;D=b||P,I=b6(C,s,D,l,f),j=D3(I,l),D===b?(C=I,b=j):(s=I,P=j)}}function b6(C,s,l,u,f){var b=s.x-C.x,P=s.y-C.y,D=u.min,I=u.max,j,C1;return l&8?(j=C.x+b*(I.y-C.y)/P,C1=I.y):l&4?(j=C.x+b*(D.y-C.y)/P,C1=D.y):l&2?(j=I.x,C1=C.y+P*(I.x-C.x)/b):l&1&&(j=D.x,C1=C.y+P*(D.x-C.x)/b),new J(j,C1,f)}function D3(C,s){var l=0;return C.x<s.min.x?l|=1:C.x>s.max.x&&(l|=2),C.y<s.min.y?l|=4:C.y>s.max.y&&(l|=8),l}function HV(C,s){var l=s.x-C.x,u=s.y-C.y;return l*l+u*u}function A4(C,s,l,u){var f=s.x,b=s.y,P=l.x-f,D=l.y-b,I=P*P+D*D,j;return I>0&&(j=((C.x-f)*P+(C.y-b)*D)/I,j>1?(f=l.x,b=l.y):j>0&&(f+=P*j,b+=D*j)),P=C.x-f,D=C.y-b,u?P*P+D*D:new J(f,b)}function Z5(C){return!T(C[0])||typeof C[0][0]!="object"&&typeof C[0][0]<"u"}function Zi(C){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Z5(C)}function ki(C,s){var l,u,f,b,P,D,I,j;if(!C||C.length===0)throw new Error("latlngs not passed");Z5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var C1=L1([0,0]),v1=m1(C),O1=v1.getNorthWest().distanceTo(v1.getSouthWest())*v1.getNorthEast().distanceTo(v1.getNorthWest());O1<1700&&(C1=re(C));var J2=C.length,Z2=[];for(l=0;l<J2;l++){var k5=L1(C[l]);Z2.push(s.project(L1([k5.lat-C1.lat,k5.lng-C1.lng])))}for(l=0,u=0;l<J2-1;l++)u+=Z2[l].distanceTo(Z2[l+1])/2;if(u===0)j=Z2[0];else for(l=0,b=0;l<J2-1;l++)if(P=Z2[l],D=Z2[l+1],f=P.distanceTo(D),b+=f,b>u){I=(b-u)/f,j=[D.x-I*(D.x-P.x),D.y-I*(D.y-P.y)];break}var s5=s.unproject(n1(j));return L1([s5.lat+C1.lat,s5.lng+C1.lng])}var VV={__proto__:null,simplify:bi,pointToSegmentDistance:wi,closestPointOnSegment:aV,clipSegment:yi,_getEdgeIntersection:b6,_getBitCode:D3,_sqClosestPointOnSegment:A4,isFlat:Z5,_flat:Zi,polylineCenter:ki},oe={project:function(C){return new J(C.lng,C.lat)},unproject:function(C){return new V1(C.y,C.x)},bounds:new U([-180,-90],[180,90])},Ce={R:6378137,R_MINOR:6356752314245179e-9,bounds:new U([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(C){var s=Math.PI/180,l=this.R,u=C.lat*s,f=this.R_MINOR/l,b=Math.sqrt(1-f*f),P=b*Math.sin(u),D=Math.tan(Math.PI/4-u/2)/Math.pow((1-P)/(1+P),b/2);return u=-l*Math.log(Math.max(D,1e-10)),new J(C.lng*s*l,u)},unproject:function(C){for(var s=180/Math.PI,l=this.R,u=this.R_MINOR/l,f=Math.sqrt(1-u*u),b=Math.exp(-C.y/l),P=Math.PI/2-2*Math.atan(b),D=0,I=.1,j;D<15&&Math.abs(I)>1e-7;D++)j=f*Math.sin(P),j=Math.pow((1-j)/(1+j),f/2),I=Math.PI/2-2*Math.atan(b*j)-P,P+=I;return new V1(P*s,C.x*s/l)}},LV={__proto__:null,LonLat:oe,Mercator:Ce,SphericalMercator:x2},lV=e({},k1,{code:"EPSG:3395",projection:Ce,transformation:(function(){var C=.5/(Math.PI*Ce.R);return c2(C,.5,-C,.5)})()}),Oi=e({},k1,{code:"EPSG:4326",projection:oe,transformation:c2(1/180,1,-1/180,.5)}),cV=e({},g1,{projection:oe,transformation:c2(1,0,-1,0),scale:function(C){return Math.pow(2,C)},zoom:function(C){return Math.log(C)/Math.LN2},distance:function(C,s){var l=s.lng-C.lng,u=s.lat-C.lat;return Math.sqrt(l*l+u*u)},infinite:!0});g1.Earth=k1,g1.EPSG3395=lV,g1.EPSG3857=c1,g1.EPSG900913=o5,g1.EPSG4326=Oi,g1.Simple=cV;var G5=Z1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(C){return C.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(C){return C&&C.removeLayer(this),this},getPane:function(C){return this._map.getPane(C?this.options[C]||C:this.options.pane)},addInteractiveTarget:function(C){return this._map._targets[n(C)]=this,this},removeInteractiveTarget:function(C){return delete this._map._targets[n(C)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(C){var s=C.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var l=this.getEvents();s.on(l,this),this.once("remove",function(){s.off(l,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});_1.include({addLayer:function(C){if(!C._layerAdd)throw new Error("The provided object is not a Layer.");var s=n(C);return this._layers[s]?this:(this._layers[s]=C,C._mapToAdd=this,C.beforeAdd&&C.beforeAdd(this),this.whenReady(C._layerAdd,C),this)},removeLayer:function(C){var s=n(C);return this._layers[s]?(this._loaded&&C.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:C}),C.fire("remove")),C._map=C._mapToAdd=null,this):this},hasLayer:function(C){return n(C)in this._layers},eachLayer:function(C,s){for(var l in this._layers)C.call(s,this._layers[l]);return this},_addLayers:function(C){C=C?T(C)?C:[C]:[];for(var s=0,l=C.length;s<l;s++)this.addLayer(C[s])},_addZoomLimit:function(C){(!isNaN(C.options.maxZoom)||!isNaN(C.options.minZoom))&&(this._zoomBoundLayers[n(C)]=C,this._updateZoomLevels())},_removeZoomLimit:function(C){var s=n(C);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var C=1/0,s=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var f=this._zoomBoundLayers[u].options;C=f.minZoom===void 0?C:Math.min(C,f.minZoom),s=f.maxZoom===void 0?s:Math.max(s,f.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=C===1/0?void 0:C,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var A7=G5.extend({initialize:function(C,s){g(this,s),this._layers={};var l,u;if(C)for(l=0,u=C.length;l<u;l++)this.addLayer(C[l])},addLayer:function(C){var s=this.getLayerId(C);return this._layers[s]=C,this._map&&this._map.addLayer(C),this},removeLayer:function(C){var s=C in this._layers?C:this.getLayerId(C);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(C){var s=typeof C=="number"?C:this.getLayerId(C);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(C){var s=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[C]&&u[C].apply(u,s);return this},onAdd:function(C){this.eachLayer(C.addLayer,C)},onRemove:function(C){this.eachLayer(C.removeLayer,C)},eachLayer:function(C,s){for(var l in this._layers)C.call(s,this._layers[l]);return this},getLayer:function(C){return this._layers[C]},getLayers:function(){var C=[];return this.eachLayer(C.push,C),C},setZIndex:function(C){return this.invoke("setZIndex",C)},getLayerId:function(C){return n(C)}}),MV=function(C,s){return new A7(C,s)},w0=A7.extend({addLayer:function(C){return this.hasLayer(C)?this:(C.addEventParent(this),A7.prototype.addLayer.call(this,C),this.fire("layeradd",{layer:C}))},removeLayer:function(C){return this.hasLayer(C)?(C in this._layers&&(C=this._layers[C]),C.removeEventParent(this),A7.prototype.removeLayer.call(this,C),this.fire("layerremove",{layer:C})):this},setStyle:function(C){return this.invoke("setStyle",C)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var C=new s1;for(var s in this._layers){var l=this._layers[s];C.extend(l.getBounds?l.getBounds():l.getLatLng())}return C}}),dV=function(C,s){return new w0(C,s)},v7=y1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(C){g(this,C)},createIcon:function(C){return this._createIcon("icon",C)},createShadow:function(C){return this._createIcon("shadow",C)},_createIcon:function(C,s){var l=this._getIconUrl(C);if(!l){if(C==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(u,C),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(C,s){var l=this.options,u=l[s+"Size"];typeof u=="number"&&(u=[u,u]);var f=n1(u),b=n1(s==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));C.className="leaflet-marker-"+s+" "+(l.className||""),b&&(C.style.marginLeft=-b.x+"px",C.style.marginTop=-b.y+"px"),f&&(C.style.width=f.x+"px",C.style.height=f.y+"px")},_createImg:function(C,s){return s=s||document.createElement("img"),s.src=C,s},_getIconUrl:function(C){return u1.retina&&this.options[C+"RetinaUrl"]||this.options[C+"Url"]}});function pV(C){return new v7(C)}var v4=v7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(C){return typeof v4.imagePath!="string"&&(v4.imagePath=this._detectIconPath()),(this.options.imagePath||v4.imagePath)+v7.prototype._getIconUrl.call(this,C)},_stripUrl:function(C){var s=function(l,u,f){var b=u.exec(l);return b&&b[f]};return C=s(C,/^url\((['"])?(.+)\1\)$/,2),C&&s(C,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var C=B("div","leaflet-default-icon-path",document.body),s=p1(C,"background-image")||p1(C,"backgroundImage");if(document.body.removeChild(C),s=this._stripUrl(s),s)return s;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Ti=n5.extend({initialize:function(C){this._marker=C},addHooks:function(){var C=this._marker._icon;this._draggable||(this._draggable=new y5(C,C,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),d1(C,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&D1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(C){var s=this._marker,l=s._map,u=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,b=W2(s._icon),P=l.getPixelBounds(),D=l.getPixelOrigin(),I=r1(P.min._subtract(D).add(f),P.max._subtract(D).subtract(f));if(!I.contains(b)){var j=n1((Math.max(I.max.x,b.x)-I.max.x)/(P.max.x-I.max.x)-(Math.min(I.min.x,b.x)-I.min.x)/(P.min.x-I.min.x),(Math.max(I.max.y,b.y)-I.max.y)/(P.max.y-I.max.y)-(Math.min(I.min.y,b.y)-I.min.y)/(P.min.y-I.min.y)).multiplyBy(u);l.panBy(j,{animate:!1}),this._draggable._newPos._add(j),this._draggable._startPos._add(j),J1(s._icon,this._draggable._newPos),this._onDrag(C),this._panRequest=o1(this._adjustPan.bind(this,C))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(C){this._marker.options.autoPan&&(h1(this._panRequest),this._panRequest=o1(this._adjustPan.bind(this,C)))},_onDrag:function(C){var s=this._marker,l=s._shadow,u=W2(s._icon),f=s._map.layerPointToLatLng(u);l&&J1(l,u),s._latlng=f,C.latlng=f,C.oldLatLng=this._oldLatLng,s.fire("move",C).fire("drag",C)},_onDragEnd:function(C){h1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",C)}}),w6=G5.extend({options:{icon:new v4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(C,s){g(this,s),this._latlng=L1(C)},onAdd:function(C){this._zoomAnimated=this._zoomAnimated&&C.options.markerZoomAnimation,this._zoomAnimated&&C.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(C){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&C.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(C){var s=this._latlng;return this._latlng=L1(C),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(C){return this.options.zIndexOffset=C,this.update()},getIcon:function(){return this.options.icon},setIcon:function(C){return this.options.icon=C,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var C=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(C)}return this},_initIcon:function(){var C=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=C.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,C.title&&(l.title=C.title),l.tagName==="IMG"&&(l.alt=C.alt||"")),d1(l,s),C.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,C.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A1(l,"focus",this._panOnFocus,this);var f=C.icon.createShadow(this._shadow),b=!1;f!==this._shadow&&(this._removeShadow(),b=!0),f&&(d1(f,s),f.alt=""),this._shadow=f,C.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&b&&this.getPane(C.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&j1(this._icon,"focus",this._panOnFocus,this),M1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&M1(this._shadow),this._shadow=null},_setPos:function(C){this._icon&&J1(this._icon,C),this._shadow&&J1(this._shadow,C),this._zIndex=C.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(C){this._icon&&(this._icon.style.zIndex=this._zIndex+C)},_animateZoom:function(C){var s=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(d1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ti)){var C=this.options.draggable;this.dragging&&(C=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ti(this),C&&this.dragging.enable()}},setOpacity:function(C){return this.options.opacity=C,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var C=this.options.opacity;this._icon&&R2(this._icon,C),this._shadow&&R2(this._shadow,C)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var C=this._map;if(C){var s=this.options.icon.options,l=s.iconSize?n1(s.iconSize):n1(0,0),u=s.iconAnchor?n1(s.iconAnchor):n1(0,0);C.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function uV(C,s){return new w6(C,s)}var J0=G5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(C){this._renderer=C.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(C){return g(this,C),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&C&&Object.prototype.hasOwnProperty.call(C,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),S6=J0.extend({options:{fill:!0,radius:10},initialize:function(C,s){g(this,s),this._latlng=L1(C),this._radius=this.options.radius},setLatLng:function(C){var s=this._latlng;return this._latlng=L1(C),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(C){return this.options.radius=this._radius=C,this.redraw()},getRadius:function(){return this._radius},setStyle:function(C){var s=C&&C.radius||this._radius;return J0.prototype.setStyle.call(this,C),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var C=this._radius,s=this._radiusY||C,l=this._clickTolerance(),u=[C+l,s+l];this._pxBounds=new U(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(C){return C.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function hV(C,s){return new S6(C,s)}var ae=S6.extend({initialize:function(C,s,l){if(typeof s=="number"&&(s=e({},l,{radius:s})),g(this,s),this._latlng=L1(C),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(C){return this._mRadius=C,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var C=[this._radius,this._radiusY||this._radius];return new s1(this._map.layerPointToLatLng(this._point.subtract(C)),this._map.layerPointToLatLng(this._point.add(C)))},setStyle:J0.prototype.setStyle,_project:function(){var C=this._latlng.lng,s=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===k1.distance){var f=Math.PI/180,b=this._mRadius/k1.R/f,P=l.project([s+b,C]),D=l.project([s-b,C]),I=P.add(D).divideBy(2),j=l.unproject(I).lat,C1=Math.acos((Math.cos(b*f)-Math.sin(s*f)*Math.sin(j*f))/(Math.cos(s*f)*Math.cos(j*f)))/f;(isNaN(C1)||C1===0)&&(C1=b/Math.cos(Math.PI/180*s)),this._point=I.subtract(l.getPixelOrigin()),this._radius=isNaN(C1)?0:I.x-l.project([j,C-C1]).x,this._radiusY=I.y-P.y}else{var v1=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(v1).x}this._updateBounds()}});function mV(C,s,l){return new ae(C,s,l)}var S0=J0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(C,s){g(this,s),this._setLatLngs(C)},getLatLngs:function(){return this._latlngs},setLatLngs:function(C){return this._setLatLngs(C),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(C){for(var s=1/0,l=null,u=A4,f,b,P=0,D=this._parts.length;P<D;P++)for(var I=this._parts[P],j=1,C1=I.length;j<C1;j++){f=I[j-1],b=I[j];var v1=u(C,f,b,!0);v1<s&&(s=v1,l=u(C,f,b))}return l&&(l.distance=Math.sqrt(s)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ki(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(C,s){return s=s||this._defaultShape(),C=L1(C),s.push(C),this._bounds.extend(C),this.redraw()},_setLatLngs:function(C){this._bounds=new s1,this._latlngs=this._convertLatLngs(C)},_defaultShape:function(){return Z5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(C){for(var s=[],l=Z5(C),u=0,f=C.length;u<f;u++)l?(s[u]=L1(C[u]),this._bounds.extend(s[u])):s[u]=this._convertLatLngs(C[u]);return s},_project:function(){var C=new U;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,C),this._bounds.isValid()&&C.isValid()&&(this._rawPxBounds=C,this._updateBounds())},_updateBounds:function(){var C=this._clickTolerance(),s=new J(C,C);this._rawPxBounds&&(this._pxBounds=new U([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(C,s,l){var u=C[0]instanceof V1,f=C.length,b,P;if(u){for(P=[],b=0;b<f;b++)P[b]=this._map.latLngToLayerPoint(C[b]),l.extend(P[b]);s.push(P)}else for(b=0;b<f;b++)this._projectLatlngs(C[b],s,l)},_clipPoints:function(){var C=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,l,u,f,b,P,D,I;for(l=0,f=0,b=this._rings.length;l<b;l++)for(I=this._rings[l],u=0,P=I.length;u<P-1;u++)D=yi(I[u],I[u+1],C,u,!0),D&&(s[f]=s[f]||[],s[f].push(D[0]),(D[1]!==I[u+1]||u===P-2)&&(s[f].push(D[1]),f++))}},_simplifyPoints:function(){for(var C=this._parts,s=this.options.smoothFactor,l=0,u=C.length;l<u;l++)C[l]=bi(C[l],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(C,s){var l,u,f,b,P,D,I=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(l=0,b=this._parts.length;l<b;l++)for(D=this._parts[l],u=0,P=D.length,f=P-1;u<P;f=u++)if(!(!s&&u===0)&&wi(C,D[f],D[u])<=I)return!0;return!1}});function fV(C,s){return new S0(C,s)}S0._flat=Zi;var x7=S0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return _i(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(C){var s=S0.prototype._convertLatLngs.call(this,C),l=s.length;return l>=2&&s[0]instanceof V1&&s[0].equals(s[l-1])&&s.pop(),s},_setLatLngs:function(C){S0.prototype._setLatLngs.call(this,C),Z5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Z5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var C=this._renderer._bounds,s=this.options.weight,l=new J(s,s);if(C=new U(C.min.subtract(l),C.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,f=this._rings.length,b;u<f;u++)b=_6(this._rings[u],C,!0),b.length&&this._parts.push(b)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(C){var s=!1,l,u,f,b,P,D,I,j;if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(b=0,I=this._parts.length;b<I;b++)for(l=this._parts[b],P=0,j=l.length,D=j-1;P<j;D=P++)u=l[P],f=l[D],u.y>C.y!=f.y>C.y&&C.x<(f.x-u.x)*(C.y-u.y)/(f.y-u.y)+u.x&&(s=!s);return s||S0.prototype._containsPoint.call(this,C,!0)}});function AV(C,s){return new x7(C,s)}var y0=w0.extend({initialize:function(C,s){g(this,s),this._layers={},C&&this.addData(C)},addData:function(C){var s=T(C)?C:C.features,l,u,f;if(s){for(l=0,u=s.length;l<u;l++)f=s[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var b=this.options;if(b.filter&&!b.filter(C))return this;var P=y6(C,b);return P?(P.feature=O6(C),P.defaultOptions=P.options,this.resetStyle(P),b.onEachFeature&&b.onEachFeature(C,P),this.addLayer(P)):this},resetStyle:function(C){return C===void 0?this.eachLayer(this.resetStyle,this):(C.options=e({},C.defaultOptions),this._setLayerStyle(C,this.options.style),this)},setStyle:function(C){return this.eachLayer(function(s){this._setLayerStyle(s,C)},this)},_setLayerStyle:function(C,s){C.setStyle&&(typeof s=="function"&&(s=s(C.feature)),C.setStyle(s))}});function y6(C,s){var l=C.type==="Feature"?C.geometry:C,u=l?l.coordinates:null,f=[],b=s&&s.pointToLayer,P=s&&s.coordsToLatLng||ne,D,I,j,C1;if(!u&&!l)return null;switch(l.type){case"Point":return D=P(u),Pi(b,C,D,s);case"MultiPoint":for(j=0,C1=u.length;j<C1;j++)D=P(u[j]),f.push(Pi(b,C,D,s));return new w0(f);case"LineString":case"MultiLineString":return I=Z6(u,l.type==="LineString"?0:1,P),new S0(I,s);case"Polygon":case"MultiPolygon":return I=Z6(u,l.type==="Polygon"?1:2,P),new x7(I,s);case"GeometryCollection":for(j=0,C1=l.geometries.length;j<C1;j++){var v1=y6({geometry:l.geometries[j],type:"Feature",properties:C.properties},s);v1&&f.push(v1)}return new w0(f);case"FeatureCollection":for(j=0,C1=l.features.length;j<C1;j++){var O1=y6(l.features[j],s);O1&&f.push(O1)}return new w0(f);default:throw new Error("Invalid GeoJSON object.")}}function Pi(C,s,l,u){return C?C(s,l):new w6(l,u&&u.markersInheritOptions&&u)}function ne(C){return new V1(C[1],C[0],C[2])}function Z6(C,s,l){for(var u=[],f=0,b=C.length,P;f<b;f++)P=s?Z6(C[f],s-1,l):(l||ne)(C[f]),u.push(P);return u}function se(C,s){return C=L1(C),C.alt!==void 0?[d(C.lng,s),d(C.lat,s),d(C.alt,s)]:[d(C.lng,s),d(C.lat,s)]}function k6(C,s,l,u){for(var f=[],b=0,P=C.length;b<P;b++)f.push(s?k6(C[b],Z5(C[b])?0:s-1,l,u):se(C[b],u));return!s&&l&&f.length>0&&f.push(f[0].slice()),f}function g7(C,s){return C.feature?e({},C.feature,{geometry:s}):O6(s)}function O6(C){return C.type==="Feature"||C.type==="FeatureCollection"?C:{type:"Feature",properties:{},geometry:C}}var He={toGeoJSON:function(C){return g7(this,{type:"Point",coordinates:se(this.getLatLng(),C)})}};w6.include(He),ae.include(He),S6.include(He),S0.include({toGeoJSON:function(C){var s=!Z5(this._latlngs),l=k6(this._latlngs,s?1:0,!1,C);return g7(this,{type:(s?"Multi":"")+"LineString",coordinates:l})}}),x7.include({toGeoJSON:function(C){var s=!Z5(this._latlngs),l=s&&!Z5(this._latlngs[0]),u=k6(this._latlngs,l?2:s?1:0,!0,C);return s||(u=[u]),g7(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),A7.include({toMultiPoint:function(C){var s=[];return this.eachLayer(function(l){s.push(l.toGeoJSON(C).geometry.coordinates)}),g7(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(C){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(C);var l=s==="GeometryCollection",u=[];return this.eachLayer(function(f){if(f.toGeoJSON){var b=f.toGeoJSON(C);if(l)u.push(b.geometry);else{var P=O6(b);P.type==="FeatureCollection"?u.push.apply(u,P.features):u.push(P)}}}),l?g7(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function Ei(C,s){return new y0(C,s)}var vV=Ei,T6=G5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(C,s,l){this._url=C,this._bounds=m1(s),g(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(d1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){M1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(C){return this.options.opacity=C,this._image&&this._updateOpacity(),this},setStyle:function(C){return C.opacity&&this.setOpacity(C.opacity),this},bringToFront:function(){return this._map&&F1(this._image),this},bringToBack:function(){return this._map&&R1(this._image),this},setUrl:function(C){return this._url=C,this._image&&(this._image.src=C),this},setBounds:function(C){return this._bounds=m1(C),this._map&&this._reset(),this},getEvents:function(){var C={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var C=this._url.tagName==="IMG",s=this._image=C?this._url:B("img");if(d1(s,"leaflet-image-layer"),this._zoomAnimated&&d1(s,"leaflet-zoom-animated"),this.options.className&&d1(s,this.options.className),s.onselectstart=c,s.onmousemove=c,s.onload=o(this.fire,this,"load"),s.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),C){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(C){var s=this._map.getZoomScale(C.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,C.zoom,C.center).min;m2(this._image,l,s)},_reset:function(){var C=this._image,s=new U(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=s.getSize();J1(C,s.min),C.style.width=l.x+"px",C.style.height=l.y+"px"},_updateOpacity:function(){R2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var C=this.options.errorOverlayUrl;C&&this._url!==C&&(this._url=C,this._image.src=C)},getCenter:function(){return this._bounds.getCenter()}}),xV=function(C,s,l){return new T6(C,s,l)},$i=T6.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var C=this._url.tagName==="VIDEO",s=this._image=C?this._url:B("video");if(d1(s,"leaflet-image-layer"),this._zoomAnimated&&d1(s,"leaflet-zoom-animated"),this.options.className&&d1(s,this.options.className),s.onselectstart=c,s.onmousemove=c,s.onloadeddata=o(this.fire,this,"load"),C){for(var l=s.getElementsByTagName("source"),u=[],f=0;f<l.length;f++)u.push(l[f].src);this._url=l.length>0?u:[s.src];return}T(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var b=0;b<this._url.length;b++){var P=B("source");P.src=this._url[b],s.appendChild(P)}}});function gV(C,s,l){return new $i(C,s,l)}var Fi=T6.extend({_initImage:function(){var C=this._image=this._url;d1(C,"leaflet-image-layer"),this._zoomAnimated&&d1(C,"leaflet-zoom-animated"),this.options.className&&d1(C,this.options.className),C.onselectstart=c,C.onmousemove=c}});function _V(C,s,l){return new Fi(C,s,l)}var M0=G5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(C,s){C&&(C instanceof V1||T(C))?(this._latlng=L1(C),g(this,s)):(g(this,C),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(C){return C=arguments.length?C:this._source._map,C.hasLayer(this)||C.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(C){return this._map?this.close():(arguments.length?this._source=C:C=this._source,this._prepareOpen(),this.openOn(C._map)),this},onAdd:function(C){this._zoomAnimated=C._zoomAnimated,this._container||this._initLayout(),C._fadeAnimated&&R2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),C._fadeAnimated&&R2(this._container,1),this.bringToFront(),this.options.interactive&&(d1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(C){C._fadeAnimated?(R2(this._container,0),this._removeTimeout=setTimeout(o(M1,void 0,this._container),200)):M1(this._container),this.options.interactive&&(D1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(C){return this._latlng=L1(C),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(C){return this._content=C,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var C={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&F1(this._container),this},bringToBack:function(){return this._map&&R1(this._container),this},_prepareOpen:function(C){var s=this._source;if(!s._map)return!1;if(s instanceof w0){s=null;var l=this._source._layers;for(var u in l)if(l[u]._map){s=l[u];break}if(!s)return!1;this._source=s}if(!C)if(s.getCenter)C=s.getCenter();else if(s.getLatLng)C=s.getLatLng();else if(s.getBounds)C=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(C),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var C=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")C.innerHTML=s;else{for(;C.hasChildNodes();)C.removeChild(C.firstChild);C.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var C=this._map.latLngToLayerPoint(this._latlng),s=n1(this.options.offset),l=this._getAnchor();this._zoomAnimated?J1(this._container,C.add(l)):s=s.add(C).add(l);var u=this._containerBottom=-s.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=u+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});_1.include({_initOverlay:function(C,s,l,u){var f=s;return f instanceof C||(f=new C(u).setContent(s)),l&&f.setLatLng(l),f}}),G5.include({_initOverlay:function(C,s,l,u){var f=l;return f instanceof C?(g(f,u),f._source=this):(f=s&&!u?s:new C(u,this),f.setContent(l)),f}});var P6=M0.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(C){return C=arguments.length?C:this._source._map,!C.hasLayer(this)&&C._popup&&C._popup.options.autoClose&&C.removeLayer(C._popup),C._popup=this,M0.prototype.openOn.call(this,C)},onAdd:function(C){M0.prototype.onAdd.call(this,C),C.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof J0||this._source.on("preclick",Q2))},onRemove:function(C){M0.prototype.onRemove.call(this,C),C.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof J0||this._source.off("preclick",Q2))},getEvents:function(){var C=M0.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(C.preclick=this.close),this.options.keepInView&&(C.moveend=this._adjustPan),C},_initLayout:function(){var C="leaflet-popup",s=this._container=B("div",C+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=B("div",C+"-content-wrapper",s);if(this._contentNode=B("div",C+"-content",l),C5(s),M2(this._contentNode),A1(s,"contextmenu",Q2),this._tipContainer=B("div",C+"-tip-container",s),this._tip=B("div",C+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=B("a",C+"-close-button",s);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',A1(u,"click",function(f){d2(f),this.close()},this)}},_updateLayout:function(){var C=this._contentNode,s=C.style;s.width="",s.whiteSpace="nowrap";var l=C.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),s.width=l+1+"px",s.whiteSpace="",s.height="";var u=C.offsetHeight,f=this.options.maxHeight,b="leaflet-popup-scrolled";f&&u>f?(s.height=f+"px",d1(C,b)):D1(C,b),this._containerWidth=this._container.offsetWidth},_animateZoom:function(C){var s=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center),l=this._getAnchor();J1(this._container,s.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var C=this._map,s=parseInt(p1(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+s,u=this._containerWidth,f=new J(this._containerLeft,-l-this._containerBottom);f._add(W2(this._container));var b=C.layerPointToContainerPoint(f),P=n1(this.options.autoPanPadding),D=n1(this.options.autoPanPaddingTopLeft||P),I=n1(this.options.autoPanPaddingBottomRight||P),j=C.getSize(),C1=0,v1=0;b.x+u+I.x>j.x&&(C1=b.x+u-j.x+I.x),b.x-C1-D.x<0&&(C1=b.x-D.x),b.y+l+I.y>j.y&&(v1=b.y+l-j.y+I.y),b.y-v1-D.y<0&&(v1=b.y-D.y),(C1||v1)&&(this.options.keepInView&&(this._autopanning=!0),C.fire("autopanstart").panBy([C1,v1]))}},_getAnchor:function(){return n1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),bV=function(C,s){return new P6(C,s)};_1.mergeOptions({closePopupOnClick:!0}),_1.include({openPopup:function(C,s,l){return this._initOverlay(P6,C,s,l).openOn(this),this},closePopup:function(C){return C=arguments.length?C:this._popup,C&&C.close(),this}}),G5.include({bindPopup:function(C,s){return this._popup=this._initOverlay(P6,this._popup,C,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(C){return this._popup&&(this instanceof w0||(this._popup._source=this),this._popup._prepareOpen(C||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(C){return this._popup&&this._popup.setContent(C),this},getPopup:function(){return this._popup},_openPopup:function(C){if(!(!this._popup||!this._map)){U5(C);var s=C.layer||C.target;if(this._popup._source===s&&!(s instanceof J0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(C.latlng);return}this._popup._source=s,this.openPopup(C.latlng)}},_movePopup:function(C){this._popup.setLatLng(C.latlng)},_onKeyPress:function(C){C.originalEvent.keyCode===13&&this._openPopup(C)}});var E6=M0.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(C){M0.prototype.onAdd.call(this,C),this.setOpacity(this.options.opacity),C.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(C){M0.prototype.onRemove.call(this,C),C.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var C=M0.prototype.getEvents.call(this);return this.options.permanent||(C.preclick=this.close),C},_initLayout:function(){var C="leaflet-tooltip",s=C+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=B("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+n(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(C){var s,l,u=this._map,f=this._container,b=u.latLngToContainerPoint(u.getCenter()),P=u.layerPointToContainerPoint(C),D=this.options.direction,I=f.offsetWidth,j=f.offsetHeight,C1=n1(this.options.offset),v1=this._getAnchor();D==="top"?(s=I/2,l=j):D==="bottom"?(s=I/2,l=0):D==="center"?(s=I/2,l=j/2):D==="right"?(s=0,l=j/2):D==="left"?(s=I,l=j/2):P.x<b.x?(D="right",s=0,l=j/2):(D="left",s=I+(C1.x+v1.x)*2,l=j/2),C=C.subtract(n1(s,l,!0)).add(C1).add(v1),D1(f,"leaflet-tooltip-right"),D1(f,"leaflet-tooltip-left"),D1(f,"leaflet-tooltip-top"),D1(f,"leaflet-tooltip-bottom"),d1(f,"leaflet-tooltip-"+D),J1(f,C)},_updatePosition:function(){var C=this._map.latLngToLayerPoint(this._latlng);this._setPosition(C)},setOpacity:function(C){this.options.opacity=C,this._container&&R2(this._container,C)},_animateZoom:function(C){var s=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center);this._setPosition(s)},_getAnchor:function(){return n1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),wV=function(C,s){return new E6(C,s)};_1.include({openTooltip:function(C,s,l){return this._initOverlay(E6,C,s,l).openOn(this),this},closeTooltip:function(C){return C.close(),this}}),G5.include({bindTooltip:function(C,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(E6,this._tooltip,C,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(C){if(!(!C&&this._tooltipHandlersAdded)){var s=C?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[s](l),this._tooltipHandlersAdded=!C}},openTooltip:function(C){return this._tooltip&&(this instanceof w0||(this._tooltip._source=this),this._tooltip._prepareOpen(C)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(C){return this._tooltip&&this._tooltip.setContent(C),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(C){var s=typeof C.getElement=="function"&&C.getElement();s&&(A1(s,"focus",function(){this._tooltip._source=C,this.openTooltip()},this),A1(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(C){var s=typeof C.getElement=="function"&&C.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(C){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(C)});return}this._tooltip._source=C.layer||C.target,this.openTooltip(this._tooltip.options.sticky?C.latlng:void 0)}},_moveTooltip:function(C){var s=C.latlng,l,u;this._tooltip.options.sticky&&C.originalEvent&&(l=this._map.mouseEventToContainerPoint(C.originalEvent),u=this._map.containerPointToLayerPoint(l),s=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(s)}});var Ri=v7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(C){var s=C&&C.tagName==="DIV"?C:document.createElement("div"),l=this.options;if(l.html instanceof Element?(Y1(s),s.appendChild(l.html)):s.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=n1(l.bgPos);s.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function SV(C){return new Ri(C)}v7.Default=v4;var x4=G5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:u1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(C){g(this,C)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(C){C._addZoomLimit(this)},onRemove:function(C){this._removeAllTiles(),M1(this._container),C._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(F1(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(R1(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(C){return this.options.opacity=C,this._updateOpacity(),this},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var C=this._clampZoom(this._map.getZoom());C!==this._tileZoom&&(this._tileZoom=C,this._updateLevels()),this._update()}return this},getEvents:function(){var C={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=H(this._onMoveEnd,this.options.updateInterval,this)),C.move=this._onMove),this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},createTile:function(){return document.createElement("div")},getTileSize:function(){var C=this.options.tileSize;return C instanceof J?C:new J(C,C)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(C){for(var s=this.getPane().children,l=-C(-1/0,1/0),u=0,f=s.length,b;u<f;u++)b=s[u].style.zIndex,s[u]!==this._container&&b&&(l=C(l,+b));isFinite(l)&&(this.options.zIndex=l+C(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!u1.ielt9){R2(this._container,this.options.opacity);var C=+new Date,s=!1,l=!1;for(var u in this._tiles){var f=this._tiles[u];if(!(!f.current||!f.loaded)){var b=Math.min(1,(C-f.loaded)/200);R2(f.el,b),b<1?s=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),s&&(h1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this))}},_onOpaqueTile:c,_initContainer:function(){this._container||(this._container=B("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var C=this._tileZoom,s=this.options.maxZoom;if(C!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===C?(this._levels[l].el.style.zIndex=s-Math.abs(C-l),this._onUpdateLevel(l)):(M1(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[C],f=this._map;return u||(u=this._levels[C]={},u.el=B("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=s,u.origin=f.project(f.unproject(f.getPixelOrigin()),C).round(),u.zoom=C,this._setZoomTransform(u,f.getCenter(),f.getZoom()),c(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:c,_onRemoveLevel:c,_onCreateLevel:c,_pruneTiles:function(){if(this._map){var C,s,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(C in this._tiles)s=this._tiles[C],s.retain=s.current;for(C in this._tiles)if(s=this._tiles[C],s.current&&!s.active){var u=s.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(C in this._tiles)this._tiles[C].retain||this._removeTile(C)}},_removeTilesAtZoom:function(C){for(var s in this._tiles)this._tiles[s].coords.z===C&&this._removeTile(s)},_removeAllTiles:function(){for(var C in this._tiles)this._removeTile(C)},_invalidateAll:function(){for(var C in this._levels)M1(this._levels[C].el),this._onRemoveLevel(Number(C)),delete this._levels[C];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(C,s,l,u){var f=Math.floor(C/2),b=Math.floor(s/2),P=l-1,D=new J(+f,+b);D.z=+P;var I=this._tileCoordsToKey(D),j=this._tiles[I];return j&&j.active?(j.retain=!0,!0):(j&&j.loaded&&(j.retain=!0),P>u?this._retainParent(f,b,P,u):!1)},_retainChildren:function(C,s,l,u){for(var f=2*C;f<2*C+2;f++)for(var b=2*s;b<2*s+2;b++){var P=new J(f,b);P.z=l+1;var D=this._tileCoordsToKey(P),I=this._tiles[D];if(I&&I.active){I.retain=!0;continue}else I&&I.loaded&&(I.retain=!0);l+1<u&&this._retainChildren(f,b,l+1,u)}},_resetView:function(C){var s=C&&(C.pinch||C.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(C){this._setView(C.center,C.zoom,!0,C.noUpdate)},_clampZoom:function(C){var s=this.options;return s.minNativeZoom!==void 0&&C<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<C?s.maxNativeZoom:C},_setView:function(C,s,l,u){var f=Math.round(s);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var b=this.options.updateWhenZooming&&f!==this._tileZoom;(!u||b)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(C),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(C,s)},_setZoomTransforms:function(C,s){for(var l in this._levels)this._setZoomTransform(this._levels[l],C,s)},_setZoomTransform:function(C,s,l){var u=this._map.getZoomScale(l,C.zoom),f=C.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(s,l)).round();u1.any3d?m2(C.el,f,u):J1(C.el,f)},_resetGrid:function(){var C=this._map,s=C.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(C.project([0,s.wrapLng[0]],u).x/l.x),Math.ceil(C.project([0,s.wrapLng[1]],u).x/l.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(C.project([s.wrapLat[0],0],u).y/l.x),Math.ceil(C.project([s.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(C){var s=this._map,l=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),u=s.getZoomScale(l,this._tileZoom),f=s.project(C,this._tileZoom).floor(),b=s.getSize().divideBy(u*2);return new U(f.subtract(b),f.add(b))},_update:function(C){var s=this._map;if(s){var l=this._clampZoom(s.getZoom());if(C===void 0&&(C=s.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(C),f=this._pxBoundsToTileRange(u),b=f.getCenter(),P=[],D=this.options.keepBuffer,I=new U(f.getBottomLeft().subtract([D,-D]),f.getTopRight().add([D,-D]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var j in this._tiles){var C1=this._tiles[j].coords;(C1.z!==this._tileZoom||!I.contains(new J(C1.x,C1.y)))&&(this._tiles[j].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(C,l);return}for(var v1=f.min.y;v1<=f.max.y;v1++)for(var O1=f.min.x;O1<=f.max.x;O1++){var J2=new J(O1,v1);if(J2.z=this._tileZoom,!!this._isValidTile(J2)){var Z2=this._tiles[this._tileCoordsToKey(J2)];Z2?Z2.current=!0:P.push(J2)}}if(P.sort(function(s5,b7){return s5.distanceTo(b)-b7.distanceTo(b)}),P.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var k5=document.createDocumentFragment();for(O1=0;O1<P.length;O1++)this._addTile(P[O1],k5);this._level.el.appendChild(k5)}}}},_isValidTile:function(C){var s=this._map.options.crs;if(!s.infinite){var l=this._globalTileRange;if(!s.wrapLng&&(C.x<l.min.x||C.x>l.max.x)||!s.wrapLat&&(C.y<l.min.y||C.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(C);return m1(this.options.bounds).overlaps(u)},_keyToBounds:function(C){return this._tileCoordsToBounds(this._keyToTileCoords(C))},_tileCoordsToNwSe:function(C){var s=this._map,l=this.getTileSize(),u=C.scaleBy(l),f=u.add(l),b=s.unproject(u,C.z),P=s.unproject(f,C.z);return[b,P]},_tileCoordsToBounds:function(C){var s=this._tileCoordsToNwSe(C),l=new s1(s[0],s[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(C){return C.x+":"+C.y+":"+C.z},_keyToTileCoords:function(C){var s=C.split(":"),l=new J(+s[0],+s[1]);return l.z=+s[2],l},_removeTile:function(C){var s=this._tiles[C];s&&(M1(s.el),delete this._tiles[C],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(C)}))},_initTile:function(C){d1(C,"leaflet-tile");var s=this.getTileSize();C.style.width=s.x+"px",C.style.height=s.y+"px",C.onselectstart=c,C.onmousemove=c,u1.ielt9&&this.options.opacity<1&&R2(C,this.options.opacity)},_addTile:function(C,s){var l=this._getTilePos(C),u=this._tileCoordsToKey(C),f=this.createTile(this._wrapCoords(C),o(this._tileReady,this,C));this._initTile(f),this.createTile.length<2&&o1(o(this._tileReady,this,C,null,f)),J1(f,l),this._tiles[u]={el:f,coords:C,current:!0},s.appendChild(f),this.fire("tileloadstart",{tile:f,coords:C})},_tileReady:function(C,s,l){s&&this.fire("tileerror",{error:s,tile:l,coords:C});var u=this._tileCoordsToKey(C);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?(R2(l.el,0),h1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),s||(d1(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:C})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),u1.ielt9||!this._map._fadeAnimated?o1(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(C){return C.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(C){var s=new J(this._wrapX?V(C.x,this._wrapX):C.x,this._wrapY?V(C.y,this._wrapY):C.y);return s.z=C.z,s},_pxBoundsToTileRange:function(C){var s=this.getTileSize();return new U(C.min.unscaleBy(s).floor(),C.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var C in this._tiles)if(!this._tiles[C].loaded)return!1;return!0}});function yV(C){return new x4(C)}var _7=x4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(C,s){this._url=C,s=g(this,s),s.detectRetina&&u1.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(C,s){return this._url===C&&s===void 0&&(s=!0),this._url=C,s||this.redraw(),this},createTile:function(C,s){var l=document.createElement("img");return A1(l,"load",o(this._tileOnLoad,this,s,l)),A1(l,"error",o(this._tileOnError,this,s,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(C),l},getTileUrl:function(C){var s={r:u1.retina?"@2x":"",s:this._getSubdomain(C),x:C.x,y:C.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-C.y;this.options.tms&&(s.y=l),s["-y"]=l}return k(this._url,e(s,this.options))},_tileOnLoad:function(C,s){u1.ielt9?setTimeout(o(C,this,null,s),0):C(null,s)},_tileOnError:function(C,s,l){var u=this.options.errorTileUrl;u&&s.getAttribute("src")!==u&&(s.src=u),C(l,s)},_onTileRemove:function(C){C.tile.onload=null},_getZoomForUrl:function(){var C=this._tileZoom,s=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(C=s-C),C+u},_getSubdomain:function(C){var s=Math.abs(C.x+C.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var C,s;for(C in this._tiles)if(this._tiles[C].coords.z!==this._tileZoom&&(s=this._tiles[C].el,s.onload=c,s.onerror=c,!s.complete)){s.src=F;var l=this._tiles[C].coords;M1(s),delete this._tiles[C],this.fire("tileabort",{tile:s,coords:l})}},_removeTile:function(C){var s=this._tiles[C];if(s)return s.el.setAttribute("src",F),x4.prototype._removeTile.call(this,C)},_tileReady:function(C,s,l){if(!(!this._map||l&&l.getAttribute("src")===F))return x4.prototype._tileReady.call(this,C,s,l)}});function Di(C,s){return new _7(C,s)}var Bi=_7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(C,s){this._url=C;var l=e({},this.defaultWmsParams);for(var u in s)u in this.options||(l[u]=s[u]);s=g(this,s);var f=s.detectRetina&&u1.retina?2:1,b=this.getTileSize();l.width=b.x*f,l.height=b.y*f,this.wmsParams=l},onAdd:function(C){this._crs=this.options.crs||C.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,_7.prototype.onAdd.call(this,C)},getTileUrl:function(C){var s=this._tileCoordsToNwSe(C),l=this._crs,u=r1(l.project(s[0]),l.project(s[1])),f=u.min,b=u.max,P=(this._wmsVersion>=1.3&&this._crs===Oi?[f.y,f.x,b.y,b.x]:[f.x,f.y,b.x,b.y]).join(","),D=_7.prototype.getTileUrl.call(this,C);return D+y(this.wmsParams,D,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+P},setParams:function(C,s){return e(this.wmsParams,C),s||this.redraw(),this}});function ZV(C,s){return new Bi(C,s)}_7.WMS=Bi,Di.wms=ZV;var Z0=G5.extend({options:{padding:.1},initialize:function(C){g(this,C),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),d1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var C={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(C.zoomanim=this._onAnimZoom),C},_onAnimZoom:function(C){this._updateTransform(C.center,C.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(C,s){var l=this._map.getZoomScale(s,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,s),b=u.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(C,s));u1.any3d?m2(this._container,b,l):J1(this._container,b)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var C in this._layers)this._layers[C]._reset()},_onZoomEnd:function(){for(var C in this._layers)this._layers[C]._project()},_updatePaths:function(){for(var C in this._layers)this._layers[C]._update()},_update:function(){var C=this.options.padding,s=this._map.getSize(),l=this._map.containerPointToLayerPoint(s.multiplyBy(-C)).round();this._bounds=new U(l,l.add(s.multiplyBy(1+C*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),zi=Z0.extend({options:{tolerance:0},getEvents:function(){var C=Z0.prototype.getEvents.call(this);return C.viewprereset=this._onViewPreReset,C},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Z0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var C=this._container=document.createElement("canvas");A1(C,"mousemove",this._onMouseMove,this),A1(C,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A1(C,"mouseout",this._handleMouseOut,this),C._leaflet_disable_events=!0,this._ctx=C.getContext("2d")},_destroyContainer:function(){h1(this._redrawRequest),delete this._ctx,M1(this._container),j1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var C;this._redrawBounds=null;for(var s in this._layers)C=this._layers[s],C._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Z0.prototype._update.call(this);var C=this._bounds,s=this._container,l=C.getSize(),u=u1.retina?2:1;J1(s,C.min),s.width=u*l.x,s.height=u*l.y,s.style.width=l.x+"px",s.style.height=l.y+"px",u1.retina&&this._ctx.scale(2,2),this._ctx.translate(-C.min.x,-C.min.y),this.fire("update")}},_reset:function(){Z0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(C){this._updateDashArray(C),this._layers[n(C)]=C;var s=C._order={layer:C,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(C){this._requestRedraw(C)},_removePath:function(C){var s=C._order,l=s.next,u=s.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete C._order,delete this._layers[n(C)],this._requestRedraw(C)},_updatePath:function(C){this._extendRedrawBounds(C),C._project(),C._update(),this._requestRedraw(C)},_updateStyle:function(C){this._updateDashArray(C),this._requestRedraw(C)},_updateDashArray:function(C){if(typeof C.options.dashArray=="string"){var s=C.options.dashArray.split(/[, ]+/),l=[],u,f;for(f=0;f<s.length;f++){if(u=Number(s[f]),isNaN(u))return;l.push(u)}C.options._dashArray=l}else C.options._dashArray=C.options.dashArray},_requestRedraw:function(C){this._map&&(this._extendRedrawBounds(C),this._redrawRequest=this._redrawRequest||o1(this._redraw,this))},_extendRedrawBounds:function(C){if(C._pxBounds){var s=(C.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new U,this._redrawBounds.extend(C._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(C._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var C=this._redrawBounds;if(C){var s=C.getSize();this._ctx.clearRect(C.min.x,C.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var C,s=this._redrawBounds;if(this._ctx.save(),s){var l=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)C=u.layer,(!s||C._pxBounds&&C._pxBounds.intersects(s))&&C._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(C,s){if(this._drawing){var l,u,f,b,P=C._parts,D=P.length,I=this._ctx;if(D){for(I.beginPath(),l=0;l<D;l++){for(u=0,f=P[l].length;u<f;u++)b=P[l][u],I[u?"lineTo":"moveTo"](b.x,b.y);s&&I.closePath()}this._fillStroke(I,C)}}},_updateCircle:function(C){if(!(!this._drawing||C._empty())){var s=C._point,l=this._ctx,u=Math.max(Math.round(C._radius),1),f=(Math.max(Math.round(C._radiusY),1)||u)/u;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(s.x,s.y/f,u,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,C)}},_fillStroke:function(C,s){var l=s.options;l.fill&&(C.globalAlpha=l.fillOpacity,C.fillStyle=l.fillColor||l.color,C.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(C.setLineDash&&C.setLineDash(s.options&&s.options._dashArray||[]),C.globalAlpha=l.opacity,C.lineWidth=l.weight,C.strokeStyle=l.color,C.lineCap=l.lineCap,C.lineJoin=l.lineJoin,C.stroke())},_onClick:function(C){for(var s=this._map.mouseEventToLayerPoint(C),l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(s)&&(!(C.type==="click"||C.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,C)},_onMouseMove:function(C){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(C);this._handleMouseHover(C,s)}},_handleMouseOut:function(C){var s=this._hoveredLayer;s&&(D1(this._container,"leaflet-interactive"),this._fireEvent([s],C,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(C,s){if(!this._mouseHoverThrottled){for(var l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(s)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(C),u&&(d1(this._container,"leaflet-interactive"),this._fireEvent([u],C,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,C),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(C,s,l){this._map._fireDOMEvent(s,l||s.type,C)},_bringToFront:function(C){var s=C._order;if(s){var l=s.next,u=s.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(C)}},_bringToBack:function(C){var s=C._order;if(s){var l=s.next,u=s.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(C)}}});function Ii(C){return u1.canvas?new zi(C):null}var g4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(C){return document.createElement("<lvml:"+C+' class="lvml">')}}catch{}return function(C){return document.createElement("<"+C+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),kV={_initContainer:function(){this._container=B("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Z0.prototype._update.call(this),this.fire("update"))},_initPath:function(C){var s=C._container=g4("shape");d1(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",C._path=g4("path"),s.appendChild(C._path),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){var s=C._container;this._container.appendChild(s),C.options.interactive&&C.addInteractiveTarget(s)},_removePath:function(C){var s=C._container;M1(s),C.removeInteractiveTarget(s),delete this._layers[n(C)]},_updateStyle:function(C){var s=C._stroke,l=C._fill,u=C.options,f=C._container;f.stroked=!!u.stroke,f.filled=!!u.fill,u.stroke?(s||(s=C._stroke=g4("stroke")),f.appendChild(s),s.weight=u.weight+"px",s.color=u.color,s.opacity=u.opacity,u.dashArray?s.dashStyle=T(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=u.lineCap.replace("butt","flat"),s.joinstyle=u.lineJoin):s&&(f.removeChild(s),C._stroke=null),u.fill?(l||(l=C._fill=g4("fill")),f.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(f.removeChild(l),C._fill=null)},_updateCircle:function(C){var s=C._point.round(),l=Math.round(C._radius),u=Math.round(C._radiusY||l);this._setPath(C,C._empty()?"M0 0":"AL "+s.x+","+s.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(C,s){C._path.v=s},_bringToFront:function(C){F1(C._container)},_bringToBack:function(C){R1(C._container)}},$6=u1.vml?g4:Y2,_4=Z0.extend({_initContainer:function(){this._container=$6("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=$6("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){M1(this._container),j1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Z0.prototype._update.call(this);var C=this._bounds,s=C.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,l.setAttribute("width",s.x),l.setAttribute("height",s.y)),J1(l,C.min),l.setAttribute("viewBox",[C.min.x,C.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(C){var s=C._path=$6("path");C.options.className&&d1(s,C.options.className),C.options.interactive&&d1(s,"leaflet-interactive"),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(C._path),C.addInteractiveTarget(C._path)},_removePath:function(C){M1(C._path),C.removeInteractiveTarget(C._path),delete this._layers[n(C)]},_updatePath:function(C){C._project(),C._update()},_updateStyle:function(C){var s=C._path,l=C.options;s&&(l.stroke?(s.setAttribute("stroke",l.color),s.setAttribute("stroke-opacity",l.opacity),s.setAttribute("stroke-width",l.weight),s.setAttribute("stroke-linecap",l.lineCap),s.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?s.setAttribute("stroke-dasharray",l.dashArray):s.removeAttribute("stroke-dasharray"),l.dashOffset?s.setAttribute("stroke-dashoffset",l.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),l.fill?(s.setAttribute("fill",l.fillColor||l.color),s.setAttribute("fill-opacity",l.fillOpacity),s.setAttribute("fill-rule",l.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(C,s){this._setPath(C,g5(C._parts,s))},_updateCircle:function(C){var s=C._point,l=Math.max(Math.round(C._radius),1),u=Math.max(Math.round(C._radiusY),1)||l,f="a"+l+","+u+" 0 1,0 ",b=C._empty()?"M0 0":"M"+(s.x-l)+","+s.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(C,b)},_setPath:function(C,s){C._path.setAttribute("d",s)},_bringToFront:function(C){F1(C._path)},_bringToBack:function(C){R1(C._path)}});u1.vml&&_4.include(kV);function Ni(C){return u1.svg||u1.vml?new _4(C):null}_1.include({getRenderer:function(C){var s=C.options.renderer||this._getPaneRenderer(C.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(C){if(C==="overlayPane"||C===void 0)return!1;var s=this._paneRenderers[C];return s===void 0&&(s=this._createRenderer({pane:C}),this._paneRenderers[C]=s),s},_createRenderer:function(C){return this.options.preferCanvas&&Ii(C)||Ni(C)}});var Wi=x7.extend({initialize:function(C,s){x7.prototype.initialize.call(this,this._boundsToLatLngs(C),s)},setBounds:function(C){return this.setLatLngs(this._boundsToLatLngs(C))},_boundsToLatLngs:function(C){return C=m1(C),[C.getSouthWest(),C.getNorthWest(),C.getNorthEast(),C.getSouthEast()]}});function OV(C,s){return new Wi(C,s)}_4.create=$6,_4.pointsToPath=g5,y0.geometryToLayer=y6,y0.coordsToLatLng=ne,y0.coordsToLatLngs=Z6,y0.latLngToCoords=se,y0.latLngsToCoords=k6,y0.getFeature=g7,y0.asFeature=O6,_1.mergeOptions({boxZoom:!0});var Ui=n5.extend({initialize:function(C){this._map=C,this._container=C._container,this._pane=C._panes.overlayPane,this._resetStateTimeout=0,C.on("unload",this._destroy,this)},addHooks:function(){A1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){j1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){M1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(C){if(!C.shiftKey||C.which!==1&&C.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),b2(),H0(),this._startPoint=this._map.mouseEventToContainerPoint(C),A1(document,{contextmenu:U5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(C){this._moved||(this._moved=!0,this._box=B("div","leaflet-zoom-box",this._container),d1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(C);var s=new U(this._point,this._startPoint),l=s.getSize();J1(this._box,s.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(M1(this._box),D1(this._container,"leaflet-crosshair")),p5(),V0(),j1(document,{contextmenu:U5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(C){if(!(C.which!==1&&C.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var s=new s1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(C){C.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});_1.addInitHook("addHandler","boxZoom",Ui),_1.mergeOptions({doubleClickZoom:!0});var ji=n5.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(C){var s=this._map,l=s.getZoom(),u=s.options.zoomDelta,f=C.originalEvent.shiftKey?l-u:l+u;s.options.doubleClickZoom==="center"?s.setZoom(f):s.setZoomAround(C.containerPoint,f)}});_1.addInitHook("addHandler","doubleClickZoom",ji),_1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Gi=n5.extend({addHooks:function(){if(!this._draggable){var C=this._map;this._draggable=new y5(C._mapPane,C._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),C.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),C.on("zoomend",this._onZoomEnd,this),C.whenReady(this._onZoomEnd,this))}d1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){D1(this._map._container,"leaflet-grab"),D1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var C=this._map;if(C._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=m1(this._map.options.maxBounds);this._offsetLimit=r1(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;C.fire("movestart").fire("dragstart"),C.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(C){if(this._map.options.inertia){var s=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(s),this._prunePositions(s)}this._map.fire("move",C).fire("drag",C)},_prunePositions:function(C){for(;this._positions.length>1&&C-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var C=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(C).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(C,s){return C-(C-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var C=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;C.x<s.min.x&&(C.x=this._viscousLimit(C.x,s.min.x)),C.y<s.min.y&&(C.y=this._viscousLimit(C.y,s.min.y)),C.x>s.max.x&&(C.x=this._viscousLimit(C.x,s.max.x)),C.y>s.max.y&&(C.y=this._viscousLimit(C.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(C)}},_onPreDragWrap:function(){var C=this._worldWidth,s=Math.round(C/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,f=(u-s+l)%C+s-l,b=(u+s+l)%C-s-l,P=Math.abs(f+l)<Math.abs(b+l)?f:b;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=P},_onDragEnd:function(C){var s=this._map,l=s.options,u=!l.inertia||C.noInertia||this._times.length<2;if(s.fire("dragend",C),u)s.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),b=(this._lastTime-this._times[0])/1e3,P=l.easeLinearity,D=f.multiplyBy(P/b),I=D.distanceTo([0,0]),j=Math.min(l.inertiaMaxSpeed,I),C1=D.multiplyBy(j/I),v1=j/(l.inertiaDeceleration*P),O1=C1.multiplyBy(-v1/2).round();!O1.x&&!O1.y?s.fire("moveend"):(O1=s._limitOffset(O1,s.options.maxBounds),o1(function(){s.panBy(O1,{duration:v1,easeLinearity:P,noMoveStart:!0,animate:!0})}))}}});_1.addInitHook("addHandler","dragging",Gi),_1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var qi=n5.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(C){this._map=C,this._setPanDelta(C.options.keyboardPanDelta),this._setZoomDelta(C.options.zoomDelta)},addHooks:function(){var C=this._map._container;C.tabIndex<=0&&(C.tabIndex="0"),A1(C,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),j1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var C=document.body,s=document.documentElement,l=C.scrollTop||s.scrollTop,u=C.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(C){var s=this._panKeys={},l=this.keyCodes,u,f;for(u=0,f=l.left.length;u<f;u++)s[l.left[u]]=[-1*C,0];for(u=0,f=l.right.length;u<f;u++)s[l.right[u]]=[C,0];for(u=0,f=l.down.length;u<f;u++)s[l.down[u]]=[0,C];for(u=0,f=l.up.length;u<f;u++)s[l.up[u]]=[0,-1*C]},_setZoomDelta:function(C){var s=this._zoomKeys={},l=this.keyCodes,u,f;for(u=0,f=l.zoomIn.length;u<f;u++)s[l.zoomIn[u]]=C;for(u=0,f=l.zoomOut.length;u<f;u++)s[l.zoomOut[u]]=-C},_addHooks:function(){A1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){j1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(C){if(!(C.altKey||C.ctrlKey||C.metaKey)){var s=C.keyCode,l=this._map,u;if(s in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[s],C.shiftKey&&(u=n1(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(n1(u),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(f)}else l.panBy(u)}else if(s in this._zoomKeys)l.setZoom(l.getZoom()+(C.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;U5(C)}}});_1.addInitHook("addHandler","keyboard",qi),_1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Yi=n5.extend({addHooks:function(){A1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){j1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(C){var s=S2(C),l=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(C),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),u),U5(C)},_performZoom:function(){var C=this._map,s=C.getZoom(),l=this._map.options.zoomSnap||0;C._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,b=l?Math.ceil(f/l)*l:f,P=C._limitZoom(s+(this._delta>0?b:-b))-s;this._delta=0,this._startTime=null,P&&(C.options.scrollWheelZoom==="center"?C.setZoom(s+P):C.setZoomAround(this._lastMousePos,s+P))}});_1.addInitHook("addHandler","scrollWheelZoom",Yi);var TV=600;_1.mergeOptions({tapHold:u1.touchNative&&u1.safari&&u1.mobile,tapTolerance:15});var Qi=n5.extend({addHooks:function(){A1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){j1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(C){if(clearTimeout(this._holdTimeout),C.touches.length===1){var s=C.touches[0];this._startPos=this._newPos=new J(s.clientX,s.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(A1(document,"touchend",d2),A1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),TV),A1(document,"touchend touchcancel contextmenu",this._cancel,this),A1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function C(){j1(document,"touchend",d2),j1(document,"touchend touchcancel",C)},_cancel:function(){clearTimeout(this._holdTimeout),j1(document,"touchend touchcancel contextmenu",this._cancel,this),j1(document,"touchmove",this._onMove,this)},_onMove:function(C){var s=C.touches[0];this._newPos=new J(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(C,s){var l=new MouseEvent(C,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});l._simulated=!0,s.target.dispatchEvent(l)}});_1.addInitHook("addHandler","tapHold",Qi),_1.mergeOptions({touchZoom:u1.touch,bounceAtZoomLimits:!0});var Ki=n5.extend({addHooks:function(){d1(this._map._container,"leaflet-touch-zoom"),A1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){D1(this._map._container,"leaflet-touch-zoom"),j1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(C){var s=this._map;if(!(!C.touches||C.touches.length!==2||s._animatingZoom||this._zooming)){var l=s.mouseEventToContainerPoint(C.touches[0]),u=s.mouseEventToContainerPoint(C.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),A1(document,"touchmove",this._onTouchMove,this),A1(document,"touchend touchcancel",this._onTouchEnd,this),d2(C)}},_onTouchMove:function(C){if(!(!C.touches||C.touches.length!==2||!this._zooming)){var s=this._map,l=s.mouseEventToContainerPoint(C.touches[0]),u=s.mouseEventToContainerPoint(C.touches[1]),f=l.distanceTo(u)/this._startDist;if(this._zoom=s.getScaleZoom(f,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&f<1||this._zoom>s.getMaxZoom()&&f>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var b=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(f===1&&b.x===0&&b.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(b),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),h1(this._animRequest);var P=o(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=o1(P,this,!0),d2(C)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,h1(this._animRequest),j1(document,"touchmove",this._onTouchMove,this),j1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});_1.addInitHook("addHandler","touchZoom",Ki),_1.BoxZoom=Ui,_1.DoubleClickZoom=ji,_1.Drag=Gi,_1.Keyboard=qi,_1.ScrollWheelZoom=Yi,_1.TapHold=Qi,_1.TouchZoom=Ki,r.Bounds=U,r.Browser=u1,r.CRS=g1,r.Canvas=zi,r.Circle=ae,r.CircleMarker=S6,r.Class=y1,r.Control=K2,r.DivIcon=Ri,r.DivOverlay=M0,r.DomEvent=a5,r.DomUtil=E3,r.Draggable=y5,r.Evented=Z1,r.FeatureGroup=w0,r.GeoJSON=y0,r.GridLayer=x4,r.Handler=n5,r.Icon=v7,r.ImageOverlay=T6,r.LatLng=V1,r.LatLngBounds=s1,r.Layer=G5,r.LayerGroup=A7,r.LineUtil=VV,r.Map=_1,r.Marker=w6,r.Mixin=ee,r.Path=J0,r.Point=J,r.PolyUtil=CV,r.Polygon=x7,r.Polyline=S0,r.Popup=P6,r.PosAnimation=S5,r.Projection=LV,r.Rectangle=Wi,r.Renderer=Z0,r.SVG=_4,r.SVGOverlay=Fi,r.TileLayer=_7,r.Tooltip=E6,r.Transformation=$2,r.Util=U1,r.VideoOverlay=$i,r.bind=o,r.bounds=r1,r.canvas=Ii,r.circle=mV,r.circleMarker=hV,r.control=Y,r.divIcon=SV,r.extend=e,r.featureGroup=dV,r.geoJSON=Ei,r.geoJson=vV,r.gridLayer=yV,r.icon=pV,r.imageOverlay=xV,r.latLng=L1,r.latLngBounds=m1,r.layerGroup=MV,r.map=$3,r.marker=uV,r.point=n1,r.polygon=AV,r.polyline=fV,r.popup=bV,r.rectangle=OV,r.setOptions=g,r.stamp=n,r.svg=Ni,r.svgOverlay=_V,r.tileLayer=Di,r.tooltip=wV,r.transformation=c2,r.version=t,r.videoOverlay=gV;var PV=window.L;r.noConflict=function(){return window.L=PV,this},window.L=r}))});var D6=globalThis,B6=D6.ShadowRoot&&(D6.ShadyCSS===void 0||D6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),io=new WeakMap,w4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B6&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=io.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&io.set(e,t))}return t}toString(){return this.cssText}},k0=r=>new w4(typeof r=="string"?r:r+"",void 0,Le),H1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new w4(e,r,Le)},oo=(r,t)=>{if(B6)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),o=D6.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)}},le=B6?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return k0(e)})(r):r;var{is:YV,defineProperty:QV,getOwnPropertyDescriptor:KV,getOwnPropertyNames:XV,getOwnPropertySymbols:JV,getPrototypeOf:tL}=Object,t3=globalThis,Co=t3.trustedTypes,eL=Co?Co.emptyScript:"",rL=t3.reactiveElementPolyfillSupport,S4=(r,t)=>r,y4={toAttribute(r,t){switch(t){case Boolean:r=r?eL:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},z6=(r,t)=>!YV(r,t),ao={attribute:!0,type:String,converter:y4,reflect:!1,useDefault:!1,hasChanged:z6};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),t3.litPropertyMetadata??(t3.litPropertyMetadata=new WeakMap);var O0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ao){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&QV(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:a}=KV(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let H=o?.call(this);a?.call(this,n),this.requestUpdate(t,H,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ao}static _$Ei(){if(this.hasOwnProperty(S4("elementProperties")))return;let t=tL(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S4("properties"))){let e=this.properties,i=[...XV(e),...JV(e)];for(let o of i)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(le(o))}else t!==void 0&&e.push(le(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:y4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:y4;this._$Em=o;let H=n.fromAttribute(e,a.type);this[o]=H??this._$Ej?.get(o)??H,this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(t!==void 0){let n=this.constructor;if(o===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??z6)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:n}=a,H=this[o];n!==!0||this._$AL.has(o)||H===void 0||this.C(o,void 0,a,H)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};O0.elementStyles=[],O0.shadowRootOptions={mode:"open"},O0[S4("elementProperties")]=new Map,O0[S4("finalized")]=new Map,rL?.({ReactiveElement:O0}),(t3.reactiveElementVersions??(t3.reactiveElementVersions=[])).push("2.1.2");var k4=globalThis,no=r=>r,I6=k4.trustedTypes,so=I6?I6.createPolicy("lit-html",{createHTML:r=>r}):void 0,Mo="$lit$",e3=`lit$${Math.random().toFixed(9).slice(2)}$`,po="?"+e3,iL=`<${po}>`,I3=document,O4=()=>I3.createComment(""),T4=r=>r===null||typeof r!="object"&&typeof r!="function",me=Array.isArray,oL=r=>me(r)||typeof r?.[Symbol.iterator]=="function",ce=`[ 	
\f\r]`,Z4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ho=/-->/g,Vo=/>/g,B3=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lo=/'/g,lo=/"/g,uo=/^(?:script|style|textarea|title)$/i,fe=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),x=fe(1),w1=fe(2),mv=fe(3),h5=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),co=new WeakMap,z3=I3.createTreeWalker(I3,129);function ho(r,t){if(!me(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return so!==void 0?so.createHTML(t):t}var CL=(r,t)=>{let e=r.length-1,i=[],o,a=t===2?"<svg>":t===3?"<math>":"",n=Z4;for(let H=0;H<e;H++){let V=r[H],c,d,m=-1,A=0;for(;A<V.length&&(n.lastIndex=A,d=n.exec(V),d!==null);)A=n.lastIndex,n===Z4?d[1]==="!--"?n=Ho:d[1]!==void 0?n=Vo:d[2]!==void 0?(uo.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=B3):d[3]!==void 0&&(n=B3):n===B3?d[0]===">"?(n=o??Z4,m=-1):d[1]===void 0?m=-2:(m=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?B3:d[3]==='"'?lo:Lo):n===lo||n===Lo?n=B3:n===Ho||n===Vo?n=Z4:(n=B3,o=void 0);let g=n===B3&&r[H+1].startsWith("/>")?" ":"";a+=n===Z4?V+iL:m>=0?(i.push(c),V.slice(0,m)+Mo+V.slice(m)+e3+g):V+e3+(m===-2?H:g)}return[ho(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},P4=class r{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,n=0,H=t.length-1,V=this.parts,[c,d]=CL(t,e);if(this.el=r.createElement(c,i),z3.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=z3.nextNode())!==null&&V.length<H;){if(o.nodeType===1){if(o.hasAttributes())for(let m of o.getAttributeNames())if(m.endsWith(Mo)){let A=d[n++],g=o.getAttribute(m).split(e3),y=/([.?@])?(.*)/.exec(A);V.push({type:1,index:a,name:y[2],strings:g,ctor:y[1]==="."?de:y[1]==="?"?pe:y[1]==="@"?ue:S7}),o.removeAttribute(m)}else m.startsWith(e3)&&(V.push({type:6,index:a}),o.removeAttribute(m));if(uo.test(o.tagName)){let m=o.textContent.split(e3),A=m.length-1;if(A>0){o.textContent=I6?I6.emptyScript:"";for(let g=0;g<A;g++)o.append(m[g],O4()),z3.nextNode(),V.push({type:2,index:++a});o.append(m[A],O4())}}}else if(o.nodeType===8)if(o.data===po)V.push({type:2,index:a});else{let m=-1;for(;(m=o.data.indexOf(e3,m+1))!==-1;)V.push({type:7,index:a}),m+=e3.length-1}a++}}static createElement(t,e){let i=I3.createElement("template");return i.innerHTML=t,i}};function w7(r,t,e=r,i){if(t===h5)return t;let o=i!==void 0?e._$Co?.[i]:e._$Cl,a=T4(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=w7(r,o._$AS(r,t.values),o,i)),t}var Me=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??I3).importNode(e,!0);z3.currentNode=o;let a=z3.nextNode(),n=0,H=0,V=i[0];for(;V!==void 0;){if(n===V.index){let c;V.type===2?c=new E4(a,a.nextSibling,this,t):V.type===1?c=new V.ctor(a,V.name,V.strings,this,t):V.type===6&&(c=new he(a,this,t)),this._$AV.push(c),V=i[++H]}n!==V?.index&&(a=z3.nextNode(),n++)}return z3.currentNode=I3,o}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},E4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w7(this,t,e),T4(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==h5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):oL(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&T4(this._$AH)?this._$AA.nextSibling.data=t:this.T(I3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P4.createElement(ho(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let a=new Me(o,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=co.get(t.strings);return e===void 0&&co.set(t.strings,e=new P4(t)),e}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let a of t)o===e.length?e.push(i=new r(this.O(O4()),this.O(O4()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=no(t).nextSibling;no(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,o){let a=this.strings,n=!1;if(a===void 0)t=w7(this,t,e,0),n=!T4(t)||t!==this._$AH&&t!==h5,n&&(this._$AH=t);else{let H=t,V,c;for(t=a[0],V=0;V<a.length-1;V++)c=w7(this,H[i+V],e,V),c===h5&&(c=this._$AH[V]),n||(n=!T4(c)||c!==this._$AH[V]),c===Z?t=Z:t!==Z&&(t+=(c??"")+a[V+1]),this._$AH[V]=c}n&&!o&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},de=class extends S7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},pe=class extends S7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},ue=class extends S7{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=w7(this,t,e,0)??Z)===h5)return;let i=this._$AH,o=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},he=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w7(this,t)}};var aL=k4.litHtmlPolyfillSupport;aL?.(P4,E4),(k4.litHtmlVersions??(k4.litHtmlVersions=[])).push("3.3.3");var mo=(r,t,e)=>{let i=e?.renderBefore??t,o=i._$litPart$;if(o===void 0){let a=e?.renderBefore??null;i._$litPart$=o=new E4(t.insertBefore(O4(),a),a,void 0,e??{})}return o._$AI(r),o};var $4=globalThis,t1=class extends O0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mo(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return h5}};t1._$litElement$=!0,t1.finalized=!0,$4.litElementHydrateSupport?.({LitElement:t1});var nL=$4.litElementPolyfillSupport;nL?.({LitElement:t1});($4.litElementVersions??($4.litElementVersions=[])).push("4.2.2");var N6="2026.10.22.27",F4="weather-station-flex-card",R4="Weather Station Flex Card";var G1=H1`
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
`,W6=H1`
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg, rgba(127, 127, 127, 0.08));
      border-radius: var(--wsfc-radius, 16px);
      box-shadow: var(--wsfc-tile-shadow, none);
      border: var(--wsfc-tile-border, 0 solid transparent);
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
    /* Panels without a tile of their own get no border or shadow. */
    .tile.bare:not(.bg-translucent):not(.bg-solid), .tile.stack { border: 0; box-shadow: none; }
    /* Children fill the tile but never shrink below their content. */
    .tile > :not(.expand) { flex: 1 0 auto; }
`,U6=H1`
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
`,z1=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function y7(r,t,e,i){return x`<div class="seg" role="group" aria-label=${i}>
    ${r.map(o=>x`<button type="button" aria-pressed=${String(o.value===t)} @click=${()=>e(o.value)}>${o.label}</button>`)}
  </div>`}function C2(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function $1(r,t,e,i=Z){return r?.show_title===!1?i===Z?Z:x`<div class="head"><span class="title"></span>${i}</div>`:x`<div class="head">
    <ha-icon icon=${r?.icon||t}></ha-icon>
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function Z7(r,{label:t,value:e,unit:i,digits:o=0,color:a,entity:n}){let H=()=>C2(r,n);return x`<div class="reading" @click=${H} role=${n?"button":Z} tabindex=${n?0:Z}
    @keydown=${V=>(V.key==="Enter"||V.key===" ")&&H()}>
    <span class="v">${z1(e,o)}<small>${i||""}</small></span>
    <span class="l">${a?x`<span class="dot" style="background:${a}"></span>`:Z}${t}</span>
  </div>`}var j6=H1`
  .paused { flex: 1; min-height: 120px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    color: var(--wsfc-muted); font-size: 13px; text-align: center; padding: 8px;
    background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
  .paused ha-icon { --mdc-icon-size: 32px; opacity: 0.7; }
`;function G6(r,t){return x`<div class="paused" role="img" aria-label="${t} paused while editing"><ha-icon icon=${r}></ha-icon><span>${t} — paused while editing</span></div>`}var sL=typeof global=="object"&&global&&global.Object===Object&&global,q6=sL;var HL=typeof self=="object"&&self&&self.Object===Object&&self,VL=q6||HL||Function("return this")(),O5=VL;var LL=O5.Symbol,T0=LL;var fo=Object.prototype,lL=fo.hasOwnProperty,cL=fo.toString,D4=T0?T0.toStringTag:void 0;function ML(r){var t=lL.call(r,D4),e=r[D4];try{r[D4]=void 0;var i=!0}catch{}var o=cL.call(r);return i&&(t?r[D4]=e:delete r[D4]),o}var Ao=ML;var dL=Object.prototype,pL=dL.toString;function uL(r){return pL.call(r)}var vo=uL;var hL="[object Null]",mL="[object Undefined]",xo=T0?T0.toStringTag:void 0;function fL(r){return r==null?r===void 0?mL:hL:xo&&xo in Object(r)?Ao(r):vo(r)}var d0=fL;function AL(r){return r!=null&&typeof r=="object"}var T5=AL;var vL="[object Symbol]";function xL(r){return typeof r=="symbol"||T5(r)&&d0(r)==vL}var Y6=xL;function gL(r,t){for(var e=-1,i=r==null?0:r.length,o=Array(i);++e<i;)o[e]=t(r[e],e,r);return o}var go=gL;var _L=Array.isArray,N3=_L;var bL=1/0,_o=T0?T0.prototype:void 0,bo=_o?_o.toString:void 0;function wo(r){if(typeof r=="string")return r;if(N3(r))return go(r,wo)+"";if(Y6(r))return bo?bo.call(r):"";var t=r+"";return t=="0"&&1/r==-bL?"-0":t}var So=wo;var wL=/\s/;function SL(r){for(var t=r.length;t--&&wL.test(r.charAt(t)););return t}var yo=SL;var yL=/^\s+/;function ZL(r){return r&&r.slice(0,yo(r)+1).replace(yL,"")}var Zo=ZL;function kL(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var z2=kL;var ko=NaN,OL=/^[-+]0x[0-9a-f]+$/i,TL=/^0b[01]+$/i,PL=/^0o[0-7]+$/i,EL=parseInt;function $L(r){if(typeof r=="number")return r;if(Y6(r))return ko;if(z2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=z2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Zo(r);var e=TL.test(r);return e||PL.test(r)?EL(r.slice(2),e?2:8):OL.test(r)?ko:+r}var Oo=$L;var To=1/0,FL=17976931348623157e292;function RL(r){if(!r)return r===0?r:0;if(r=Oo(r),r===To||r===-To){var t=r<0?-1:1;return t*FL}return r===r?r:0}var Ae=RL;function DL(r){return r}var Q6=DL;var BL="[object AsyncFunction]",zL="[object Function]",IL="[object GeneratorFunction]",NL="[object Proxy]";function WL(r){if(!z2(r))return!1;var t=d0(r);return t==zL||t==IL||t==BL||t==NL}var k7=WL;var UL=O5["__core-js_shared__"],K6=UL;var Po=(function(){var r=/[^.]+$/.exec(K6&&K6.keys&&K6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function jL(r){return!!Po&&Po in r}var Eo=jL;var GL=Function.prototype,qL=GL.toString;function YL(r){if(r!=null){try{return qL.call(r)}catch{}try{return r+""}catch{}}return""}var $o=YL;var QL=/[\\^$.*+?()[\]{}|]/g,KL=/^\[object .+?Constructor\]$/,XL=Function.prototype,JL=Object.prototype,tl=XL.toString,el=JL.hasOwnProperty,rl=RegExp("^"+tl.call(el).replace(QL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function il(r){if(!z2(r)||Eo(r))return!1;var t=k7(r)?rl:KL;return t.test($o(r))}var Fo=il;function ol(r,t){return r?.[t]}var Ro=ol;function Cl(r,t){var e=Ro(r,t);return Fo(e)?e:void 0}var O7=Cl;var Do=Object.create,al=(function(){function r(){}return function(t){if(!z2(t))return{};if(Do)return Do(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),Bo=al;function nl(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var zo=nl;function sl(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var Io=sl;var Hl=800,Vl=16,Ll=Date.now;function ll(r){var t=0,e=0;return function(){var i=Ll(),o=Vl-(i-e);if(e=i,o>0){if(++t>=Hl)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var No=ll;function cl(r){return function(){return r}}var Wo=cl;var Ml=(function(){try{var r=O7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),T7=Ml;var dl=T7?function(r,t){return T7(r,"toString",{configurable:!0,enumerable:!1,value:Wo(t),writable:!0})}:Q6,Uo=dl;var pl=No(Uo),jo=pl;var ul=9007199254740991,hl=/^(?:0|[1-9]\d*)$/;function ml(r,t){var e=typeof r;return t=t??ul,!!t&&(e=="number"||e!="symbol"&&hl.test(r))&&r>-1&&r%1==0&&r<t}var X6=ml;function fl(r,t,e){t=="__proto__"&&T7?T7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var P7=fl;function Al(r,t){return r===t||r!==r&&t!==t}var r3=Al;var vl=Object.prototype,xl=vl.hasOwnProperty;function gl(r,t,e){var i=r[t];(!(xl.call(r,t)&&r3(i,e))||e===void 0&&!(t in r))&&P7(r,t,e)}var Go=gl;function _l(r,t,e,i){var o=!e;e||(e={});for(var a=-1,n=t.length;++a<n;){var H=t[a],V=i?i(e[H],r[H],H,e,r):void 0;V===void 0&&(V=r[H]),o?P7(e,H,V):Go(e,H,V)}return e}var qo=_l;var Yo=Math.max;function bl(r,t,e){return t=Yo(t===void 0?r.length-1:t,0),function(){for(var i=arguments,o=-1,a=Yo(i.length-t,0),n=Array(a);++o<a;)n[o]=i[t+o];o=-1;for(var H=Array(t+1);++o<t;)H[o]=i[o];return H[t]=e(n),zo(r,this,H)}}var Qo=bl;function wl(r,t){return jo(Qo(r,t,Q6),r+"")}var Ko=wl;var Sl=9007199254740991;function yl(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Sl}var J6=yl;function Zl(r){return r!=null&&J6(r.length)&&!k7(r)}var E7=Zl;function kl(r,t,e){if(!z2(e))return!1;var i=typeof t;return(i=="number"?E7(e)&&X6(t,e.length):i=="string"&&t in e)?r3(e[t],r):!1}var t8=kl;function Ol(r){return Ko(function(t,e){var i=-1,o=e.length,a=o>1?e[o-1]:void 0,n=o>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(o--,a):void 0,n&&t8(e[0],e[1],n)&&(a=o<3?void 0:a,o=1),t=Object(t);++i<o;){var H=e[i];H&&r(t,H,i,a)}return t})}var Xo=Ol;var Tl=Object.prototype;function Pl(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||Tl;return r===e}var e8=Pl;function El(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var Jo=El;var $l="[object Arguments]";function Fl(r){return T5(r)&&d0(r)==$l}var ve=Fl;var tC=Object.prototype,Rl=tC.hasOwnProperty,Dl=tC.propertyIsEnumerable,Bl=ve((function(){return arguments})())?ve:function(r){return T5(r)&&Rl.call(r,"callee")&&!Dl.call(r,"callee")},B4=Bl;function zl(){return!1}var eC=zl;var oC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rC=oC&&typeof module=="object"&&module&&!module.nodeType&&module,Il=rC&&rC.exports===oC,iC=Il?O5.Buffer:void 0,Nl=iC?iC.isBuffer:void 0,Wl=Nl||eC,r8=Wl;var Ul="[object Arguments]",jl="[object Array]",Gl="[object Boolean]",ql="[object Date]",Yl="[object Error]",Ql="[object Function]",Kl="[object Map]",Xl="[object Number]",Jl="[object Object]",tc="[object RegExp]",ec="[object Set]",rc="[object String]",ic="[object WeakMap]",oc="[object ArrayBuffer]",Cc="[object DataView]",ac="[object Float32Array]",nc="[object Float64Array]",sc="[object Int8Array]",Hc="[object Int16Array]",Vc="[object Int32Array]",Lc="[object Uint8Array]",lc="[object Uint8ClampedArray]",cc="[object Uint16Array]",Mc="[object Uint32Array]",a2={};a2[ac]=a2[nc]=a2[sc]=a2[Hc]=a2[Vc]=a2[Lc]=a2[lc]=a2[cc]=a2[Mc]=!0;a2[Ul]=a2[jl]=a2[oc]=a2[Gl]=a2[Cc]=a2[ql]=a2[Yl]=a2[Ql]=a2[Kl]=a2[Xl]=a2[Jl]=a2[tc]=a2[ec]=a2[rc]=a2[ic]=!1;function dc(r){return T5(r)&&J6(r.length)&&!!a2[d0(r)]}var CC=dc;function pc(r){return function(t){return r(t)}}var aC=pc;var nC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,z4=nC&&typeof module=="object"&&module&&!module.nodeType&&module,uc=z4&&z4.exports===nC,xe=uc&&q6.process,hc=(function(){try{var r=z4&&z4.require&&z4.require("util").types;return r||xe&&xe.binding&&xe.binding("util")}catch{}})(),ge=hc;var sC=ge&&ge.isTypedArray,mc=sC?aC(sC):CC,i8=mc;var fc=Object.prototype,Ac=fc.hasOwnProperty;function vc(r,t){var e=N3(r),i=!e&&B4(r),o=!e&&!i&&r8(r),a=!e&&!i&&!o&&i8(r),n=e||i||o||a,H=n?Jo(r.length,String):[],V=H.length;for(var c in r)(t||Ac.call(r,c))&&!(n&&(c=="length"||o&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||X6(c,V)))&&H.push(c);return H}var HC=vc;function xc(r,t){return function(e){return r(t(e))}}var VC=xc;function gc(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var LC=gc;var _c=Object.prototype,bc=_c.hasOwnProperty;function wc(r){if(!z2(r))return LC(r);var t=e8(r),e=[];for(var i in r)i=="constructor"&&(t||!bc.call(r,i))||e.push(i);return e}var lC=wc;function Sc(r){return E7(r)?HC(r,!0):lC(r)}var o8=Sc;var yc=O7(Object,"create"),P0=yc;function Zc(){this.__data__=P0?P0(null):{},this.size=0}var cC=Zc;function kc(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var MC=kc;var Oc="__lodash_hash_undefined__",Tc=Object.prototype,Pc=Tc.hasOwnProperty;function Ec(r){var t=this.__data__;if(P0){var e=t[r];return e===Oc?void 0:e}return Pc.call(t,r)?t[r]:void 0}var dC=Ec;var $c=Object.prototype,Fc=$c.hasOwnProperty;function Rc(r){var t=this.__data__;return P0?t[r]!==void 0:Fc.call(t,r)}var pC=Rc;var Dc="__lodash_hash_undefined__";function Bc(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=P0&&t===void 0?Dc:t,this}var uC=Bc;function $7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}$7.prototype.clear=cC;$7.prototype.delete=MC;$7.prototype.get=dC;$7.prototype.has=pC;$7.prototype.set=uC;var _e=$7;function zc(){this.__data__=[],this.size=0}var hC=zc;function Ic(r,t){for(var e=r.length;e--;)if(r3(r[e][0],t))return e;return-1}var i3=Ic;var Nc=Array.prototype,Wc=Nc.splice;function Uc(r){var t=this.__data__,e=i3(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():Wc.call(t,e,1),--this.size,!0}var mC=Uc;function jc(r){var t=this.__data__,e=i3(t,r);return e<0?void 0:t[e][1]}var fC=jc;function Gc(r){return i3(this.__data__,r)>-1}var AC=Gc;function qc(r,t){var e=this.__data__,i=i3(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var vC=qc;function F7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}F7.prototype.clear=hC;F7.prototype.delete=mC;F7.prototype.get=fC;F7.prototype.has=AC;F7.prototype.set=vC;var o3=F7;var Yc=O7(O5,"Map"),C8=Yc;function Qc(){this.size=0,this.__data__={hash:new _e,map:new(C8||o3),string:new _e}}var xC=Qc;function Kc(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var gC=Kc;function Xc(r,t){var e=r.__data__;return gC(t)?e[typeof t=="string"?"string":"hash"]:e.map}var C3=Xc;function Jc(r){var t=C3(this,r).delete(r);return this.size-=t?1:0,t}var _C=Jc;function tM(r){return C3(this,r).get(r)}var bC=tM;function eM(r){return C3(this,r).has(r)}var wC=eM;function rM(r,t){var e=C3(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var SC=rM;function R7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}R7.prototype.clear=xC;R7.prototype.delete=_C;R7.prototype.get=bC;R7.prototype.has=wC;R7.prototype.set=SC;var yC=R7;function iM(r){return r==null?"":So(r)}var a8=iM;var oM=VC(Object.getPrototypeOf,Object),n8=oM;var CM="[object Object]",aM=Function.prototype,nM=Object.prototype,ZC=aM.toString,sM=nM.hasOwnProperty,HM=ZC.call(Object);function VM(r){if(!T5(r)||d0(r)!=CM)return!1;var t=n8(r);if(t===null)return!0;var e=sM.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&ZC.call(e)==HM}var kC=VM;function LM(r,t,e){var i=-1,o=r.length;t<0&&(t=-t>o?0:o+t),e=e>o?o:e,e<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=r[i+t];return a}var OC=LM;function lM(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:OC(r,t,e)}var TC=lM;var cM="\\ud800-\\udfff",MM="\\u0300-\\u036f",dM="\\ufe20-\\ufe2f",pM="\\u20d0-\\u20ff",uM=MM+dM+pM,hM="\\ufe0e\\ufe0f",mM="\\u200d",fM=RegExp("["+mM+cM+uM+hM+"]");function AM(r){return fM.test(r)}var s8=AM;function vM(r){return r.split("")}var PC=vM;var EC="\\ud800-\\udfff",xM="\\u0300-\\u036f",gM="\\ufe20-\\ufe2f",_M="\\u20d0-\\u20ff",bM=xM+gM+_M,wM="\\ufe0e\\ufe0f",SM="["+EC+"]",be="["+bM+"]",we="\\ud83c[\\udffb-\\udfff]",yM="(?:"+be+"|"+we+")",$C="[^"+EC+"]",FC="(?:\\ud83c[\\udde6-\\uddff]){2}",RC="[\\ud800-\\udbff][\\udc00-\\udfff]",ZM="\\u200d",DC=yM+"?",BC="["+wM+"]?",kM="(?:"+ZM+"(?:"+[$C,FC,RC].join("|")+")"+BC+DC+")*",OM=BC+DC+kM,TM="(?:"+[$C+be+"?",be,FC,RC,SM].join("|")+")",PM=RegExp(we+"(?="+we+")|"+TM+OM,"g");function EM(r){return r.match(PM)||[]}var zC=EM;function $M(r){return s8(r)?zC(r):PC(r)}var IC=$M;function FM(r){return function(t){t=a8(t);var e=s8(t)?IC(t):void 0,i=e?e[0]:t.charAt(0),o=e?TC(e,1).join(""):t.slice(1);return i[r]()+o}}var NC=FM;var RM=NC("toUpperCase"),WC=RM;function DM(r){return WC(a8(r).toLowerCase())}var P5=DM;function BM(){this.__data__=new o3,this.size=0}var UC=BM;function zM(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var jC=zM;function IM(r){return this.__data__.get(r)}var GC=IM;function NM(r){return this.__data__.has(r)}var qC=NM;var WM=200;function UM(r,t){var e=this.__data__;if(e instanceof o3){var i=e.__data__;if(!C8||i.length<WM-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new yC(i)}return e.set(r,t),this.size=e.size,this}var YC=UM;function D7(r){var t=this.__data__=new o3(r);this.size=t.size}D7.prototype.clear=UC;D7.prototype.delete=jC;D7.prototype.get=GC;D7.prototype.has=qC;D7.prototype.set=YC;var QC=D7;var ta=typeof exports=="object"&&exports&&!exports.nodeType&&exports,KC=ta&&typeof module=="object"&&module&&!module.nodeType&&module,jM=KC&&KC.exports===ta,XC=jM?O5.Buffer:void 0,JC=XC?XC.allocUnsafe:void 0;function GM(r,t){if(t)return r.slice();var e=r.length,i=JC?JC(e):new r.constructor(e);return r.copy(i),i}var ea=GM;var qM=O5.Uint8Array,Se=qM;function YM(r){var t=new r.constructor(r.byteLength);return new Se(t).set(new Se(r)),t}var ra=YM;function QM(r,t){var e=t?ra(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var ia=QM;function KM(r){return typeof r.constructor=="function"&&!e8(r)?Bo(n8(r)):{}}var oa=KM;function XM(r){return function(t,e,i){for(var o=-1,a=Object(t),n=i(t),H=n.length;H--;){var V=n[r?H:++o];if(e(a[V],V,a)===!1)break}return t}}var Ca=XM;var JM=Ca(),aa=JM;function td(r,t,e){(e!==void 0&&!r3(r[t],e)||e===void 0&&!(t in r))&&P7(r,t,e)}var I4=td;function ed(r){return T5(r)&&E7(r)}var na=ed;function rd(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var N4=rd;function id(r){return qo(r,o8(r))}var sa=id;function od(r,t,e,i,o,a,n){var H=N4(r,e),V=N4(t,e),c=n.get(V);if(c){I4(r,e,c);return}var d=a?a(H,V,e+"",r,t,n):void 0,m=d===void 0;if(m){var A=N3(V),g=!A&&r8(V),y=!A&&!g&&i8(V);d=V,A||g||y?N3(H)?d=H:na(H)?d=Io(H):g?(m=!1,d=ea(V,!0)):y?(m=!1,d=ia(V,!0)):d=[]:kC(V)||B4(V)?(d=H,B4(H)?d=sa(H):(!z2(H)||k7(H))&&(d=oa(V))):m=!1}m&&(n.set(V,d),o(d,V,i,a,n),n.delete(V)),I4(r,e,d)}var Ha=od;function Va(r,t,e,i,o){r!==t&&aa(t,function(a,n){if(o||(o=new QC),z2(a))Ha(r,t,n,e,Va,i,o);else{var H=i?i(N4(r,n),a,n+"",r,t,o):void 0;H===void 0&&(H=a),I4(r,n,H)}},o8)}var La=Va;var Cd=Xo(function(r,t,e){La(r,t,e)}),W3=Cd;var ad=Math.floor,nd=Math.random;function sd(r,t){return r+ad(nd()*(t-r+1))}var la=sd;var Hd=parseFloat,Vd=Math.min,Ld=Math.random;function ld(r,t,e){if(e&&typeof e!="boolean"&&t8(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=Ae(r),t===void 0?(t=r,r=0):t=Ae(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var o=Ld();return Vd(r+o*(t-r+Hd("1e-"+((o+"").length-1))),t)}return la(r,t)}var N1=ld;var H2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var cd={attribute:!0,type:String,converter:y4,reflect:!1,hasChanged:z6},Md=(r=cd,t,e)=>{let{kind:i,metadata:o}=e,a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:n}=e;return{set(H){let V=t.get.call(this);t.set.call(this,H),this.requestUpdate(n,V,r,!0,H)},init(H){return H!==void 0&&this.C(n,void 0,r,H),H}}}if(i==="setter"){let{name:n}=e;return function(H){let V=this[n];t.call(this,H),this.requestUpdate(n,V,r,!0,H)}}throw Error("Unsupported decorator location: "+i)};function i1(r){return(t,e)=>typeof e=="object"?Md(r,t,e):((i,o,a)=>{let n=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),n?Object.getOwnPropertyDescriptor(o,a):void 0})(r,t,e)}function t5(r){return i1({...r,state:!0,attribute:!1})}var U3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function W4(r,t){return(e,i,o)=>{let a=n=>n.renderRoot?.querySelector(r)??null;if(t){let{get:n,set:H}=typeof i=="object"?e:o??(()=>{let V=Symbol();return{get(){return this[V]},set(c){this[V]=c}}})();return U3(e,i,{get(){let V=n.call(this);return V===void 0&&(V=a(this),(V!==null||this.hasUpdated)&&H.call(this,V)),V}})}return U3(e,i,{get(){return a(this)}})}}var ca=`:host {
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
`;var Ma=H1`
  ${k0(ca)}
`;var j3,G3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(j3||(j3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(G3||(G3={}));function pa(){return(pa=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function pd(r){return r.substr(0,r.indexOf("."))}var ud=function(r){switch(r.number_format){case j3.comma_decimal:return["en-US","en"];case j3.decimal_comma:return["de","es","it"];case j3.space_comma:return["fr","sv","cs"];case j3.system:return;default:return r.language}},hd=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},ye=function(r,t,e){var i=t?ud(t):void 0;if(Number.isNaN=Number.isNaN||function o(a){return typeof a=="number"&&o(a)},t?.number_format!==j3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,da(r,e)).format(Number(r))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,da(r,e)).format(Number(r))}return typeof r=="string"?r:hd(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},da=function(r,t){var e=pa({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var md=["closed","locked","off"];var n2=function(r,t,e,i){i=i||{},e=e??{};var o=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return o.detail=e,r.dispatchEvent(o),o};var H8=function(r){n2(window,"haptic",r)},fd=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),n2(window,"location-changed",{replace:e})},Ad=function(r,t,e){e===void 0&&(e=!0);var i,o=pd(t),a=o==="group"?"homeassistant":o;switch(o){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},vd=function(r,t){var e=md.includes(r.states[t].state);return Ad(r,t,e)},xd=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(H8("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&n2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&fd(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(vd(t,e.entity),H8("success"));break;case"call-service":if(!i.service)return void H8("failure");var o=i.service.split(".",2);t.callService(o[0],o[1],i.service_data,i.target),H8("success");break;case"fire-dom-event":n2(r,"ll-custom",i)}},U4=function(r,t,e,i){var o;i==="double_tap"&&e.double_tap_action?o=e.double_tap_action:i==="hold"&&e.hold_action?o=e.hold_action:i==="tap"&&e.tap_action&&(o=e.tap_action),xd(r,t,e,o)};function E0(r){return r!==void 0&&r.action!=="none"}function ua(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var ha="NOT_RUNNING";var V8=b4(j4(),1);var fa=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function gd(r,t){return!!(r===t||fa(r)&&fa(t))}function _d(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!gd(r[e],t[e]))return!1;return!0}function a3(r,t){t===void 0&&(t=_d);var e=null;function i(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(e&&e.lastThis===this&&t(o,e.lastArgs))return e.lastResult;var n=r.apply(this,o);return e={lastResult:n,lastArgs:o,lastThis:this},n}return i.clear=function(){e=null},i}var Aa=(r,t)=>r?r.config.state!==ha?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",n3=(r,t)=>z7(t).toLocaleDateString(q3(r),{weekday:"short"}),va=(r,t)=>z7(t).toLocaleDateString(q3(r),{day:"numeric"}),xa=(r,t)=>{let e=z7(t),i=q3(r),o=L8(r);try{let d=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:o}).formatToParts(e),m=d.find(g=>g.type==="hour"),A=d.find(g=>g.type==="dayPeriod");if(m){if(A)return{hour:m.value,suffix:A.value};let g=d.indexOf(m),y=d.slice(g+1).filter(O=>O.type==="literal").map(O=>O.value).join("");return y&&y.trim()?{hour:m.value,suffix:y.trim()}:{hour:m.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:o}),n=a.match(/\d+/),H=n?n[0]:a,V=a.replace(/\d+\s*/,"").trim();return V?{hour:H,suffix:V}:{hour:H}},ga=(r,t)=>{let e=z7(t),i=q3(r),o=L8(r);try{let d=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:o}).formatToParts(e),m=d.find(y=>y.type==="hour"),A=d.find(y=>y.type==="minute"),g=d.find(y=>y.type==="dayPeriod");if(m&&A){let y=d.indexOf(m),O=d.indexOf(A),k=d.slice(y+1,O).map(F=>F.value).join(""),T=`${m.value}${k}${A.value}`;if(g)return{time:T,suffix:g.value};let $=d.slice(O+1).filter(F=>F.type==="literal").map(F=>F.value).join("");return $&&$.trim()?{time:T,suffix:$.trim()}:{time:T}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:o}),n=a.match(/\d+[:.]\d+/),H=n?n[0]:a,V=a.replace(/\d+[:.]\d+\s*/,"").trim();return V?{time:H,suffix:V}:{time:H}},B7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},L8=a3(r=>{let t=r?.locale;if(t?.time_format===G3.language||t?.time_format===G3.system){let e=t.time_format===G3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===G3.am_pm}),q3=r=>r?.locale?.language||navigator.language||"en",z7=r=>typeof r=="string"?new Date(r):r,$0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let o=z7(t),a=V8.getTimes(o,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:o<a.sunrise||o>a.sunset}},_a=(r,t)=>{let e=z7(t),{fraction:i,phase:o}=V8.getMoonIllumination(e),a=o<=.5,n=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==n}},ba=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=e<.5,a=t===o?0:1,n=t?-60:160;return`M50 0 L${n} 0 L${n} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},Oe=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${o} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},I7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,wa=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},ke=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},Sa=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=ke(t.secondary_info_attribute);i&&e.add(i);let o=t.show_attributes;if(Array.isArray(o))for(let a of o){let n=ke(a);n&&e.add(n)}else{let a=ke(o);a&&e.add(a)}return e.delete(r.entity),[...e]};var U2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},$e={silent:{level:-1},fatal:{level:U2.fatal},error:{level:U2.error},warn:{level:U2.warn},log:{level:U2.log},info:{level:U2.info},success:{level:U2.success},fail:{level:U2.fail},ready:{level:U2.info},start:{level:U2.info},box:{level:U2.info},debug:{level:U2.debug},trace:{level:U2.trace},verbose:{level:U2.verbose}};function Te(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function Fe(r,t,e=".",i){if(!Te(t))return Fe(r,{},e,i);let o=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let n=r[a];n!=null&&(i&&i(o,a,n,e)||(Array.isArray(n)&&Array.isArray(o[a])?o[a]=[...n,...o[a]]:Te(n)&&Te(o[a])?o[a]=Fe(n,o[a],(e?`${e}.`:"")+a.toString(),i):o[a]=n))}return o}function bd(r){return(...t)=>t.reduce((e,i)=>Fe(e,i,"",r),{})}var wd=bd();function Sd(r){return Object.prototype.toString.call(r)==="[object Object]"}function yd(r){return!(!Sd(r)||!r.message&&!r.args||r.stack)}var Pe=!1,ya=[],k2=class r{constructor(t={}){R(this,"options");R(this,"_lastLog");R(this,"_mockFn");let e=t.types||$e;this.options=wd({...t,defaults:{...t.defaults},level:Ee(t.level,e),reporters:[...t.reporters||[]]},{types:$e,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let o={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(o),this[i].raw=this._wrapLogFn(o,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=Ee(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){Pe=!0}resumeLogs(){Pe=!1;let t=ya.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(Pe){ya.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let o={date:new Date,args:[],...t,level:Ee(t.level,this.options.types)};!i&&e.length===1&&yd(e[0])?Object.assign(o,e[0]):o.args=[...e],o.message&&(o.args.unshift(o.message),delete o.message),o.additional&&(Array.isArray(o.additional)||(o.additional=o.additional.split(`
`)),o.args.push(`
`+o.additional.join(`
`)),delete o.additional),o.type=typeof o.type=="string"?o.type.toLowerCase():"log",o.tag=typeof o.tag=="string"?o.tag:"";let a=(H=!1)=>{let V=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&V>0){let c=[...this._lastLog.object.args];V>1&&c.push(`(repeated ${V} times)`),this._log({...this._lastLog.object,args:c}),this._lastLog.count=1}H&&(this._lastLog.object=o,this._log(o))};clearTimeout(this._lastLog.timeout);let n=this._lastLog.time&&o.date?o.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=o.date,n<this.options.throttle)try{let H=JSON.stringify([o.type,o.tag,o.args]),V=this._lastLog.serialized===H;if(this._lastLog.serialized=H,V&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function Ee(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}k2.prototype.add=k2.prototype.addReporter;k2.prototype.remove=k2.prototype.removeReporter;k2.prototype.clear=k2.prototype.removeReporter;k2.prototype.withScope=k2.prototype.withTag;k2.prototype.mock=k2.prototype.mockTypes;k2.prototype.pause=k2.prototype.pauseLogs;k2.prototype.resume=k2.prototype.resumeLogs;function Za(r={}){return new k2(r)}var Re=class{constructor(t){R(this,"options");R(this,"defaultColor");R(this,"levelColorMap");R(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,o=t.tag||"",n=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,H=`%c${[o,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${H}%c ${t.args[0]}`,n,"",...t.args.slice(1)):e(H,n,...t.args)}};function De(r={}){return Za({reporters:r.reporters||[new Re({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var QS=De();var Zd=U2.info,q5=De({level:Zd}).withTag("weather-forecast-card");var ka=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",Be=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var l8={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},N7=r=>(...t)=>({_$litDirective$:r,values:t}),s3=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Oa="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,ze=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Oa?"100px":"50px",height:Oa?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",H=>{let V=H||window.event;return V.preventDefault&&V.preventDefault(),V.stopPropagation&&V.stopPropagation(),V.cancelBubble=!0,V.returnValue=!1,!1});let o=H=>{this.held=!1;let V,c;H.touches?(V=H.touches[0].pageX,c=H.touches[0].pageY):(V=H.pageX,c=H.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(V,c),this.held=!0},this.holdTime)},a=H=>{H.preventDefault(),i.stopPropagation&&H.stopPropagation(),!(["touchend","touchcancel"].includes(H.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?n2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?H.type==="click"&&H.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,n2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,n2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):n2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},n=H=>{H.keyCode===13&&a(H)};e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",o,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",n)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",ze);var kd=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},Od=(r,t)=>{let e=kd();e&&e.bind(r,t)},p0=N7(class extends s3{update(r,[t]){return Od(r.element,t),h5}render(r){}});var Y3=2,j2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],c8=["rain","snow","lightning","sky","moon","sun","cloud"],M8=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],Ta="temperature_and_precipitation";var Ie=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(Ie||{}),Td=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Pd={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},Y5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},Ed=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return Td[e]},$d=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let o=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return o;let a=Ed(i);if(!a)return o;let n=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${o} (${n})`},m5=(r,t,e)=>{let i=r.config,o=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||o;case"precipitation":return t.attributes.precipitation_unit||(o==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(o==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},Fd=288e5,Rd=864e5,Dd=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Fd}},Bd=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Rd}},Pa=r=>{if(r?.forecast&&r.forecast.length>2)return Dd(r.forecast)?{forecast:r.forecast,type:"hourly"}:Bd(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},Ne=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:Pa(r);if(e==="legacy")return Pa(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},Ea=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var $a=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,Fa=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,o=(t&4)!==0;return e||i||o},G4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let o={hourly:2,daily:1,twice_daily:4}[t];return(e&o)!==0},E5=r=>{if(G4(r,"daily"))return"daily";if(G4(r,"twice_daily"))return"twice_daily"},Ra=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},W7=a3((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),q4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=m5(r,t,"wind_speed");return zd(e.wind_speed,i)},zd=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},d8=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return Pd[e]}}},Da=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,n=a===0?t:t-a,H=r.slice(i,i+n);if(i+=H.length,H.length===0)continue;let V=H.map(F=>F.temperature),c=H.map(F=>F.humidity).filter(F=>F!==void 0),d=H.map(F=>F.pressure).filter(F=>F!==void 0),m=H.map(F=>F.wind_speed).filter(F=>F!==void 0),A=H.map(F=>F.wind_bearing).filter(F=>F!==void 0),g=H.map(F=>F.precipitation_probability).filter(F=>F!==void 0),y=H.map(F=>F.uv_index).filter(F=>F!==void 0),O=H.map(F=>F.apparent_temperature).filter(F=>F!==void 0),k=new Date(H[H.length-1].datetime);k.setMinutes(59),k.setSeconds(59);let T={datetime:H[0].datetime,groupEndtime:k.toISOString(),condition:Wd(H),temperature:parseFloat(I7(V).toFixed(1))};c.length>0&&(T.humidity=Math.round(I7(c))),g.length>0&&(T.precipitation_probability=Math.max(...g)),H.some(F=>F.precipitation!==void 0)&&(T.precipitation=H.reduce((F,K)=>F+(K.precipitation||0),0));let $=H.map(F=>F.templow).filter(F=>F!==void 0);$.length>0&&(T.templow=Math.min(...$)),d.length>0&&(T.pressure=Math.round(I7(d))),m.length>0&&(T.wind_speed=I7(m)),A.length>0&&(T.wind_bearing=Nd(A)),y.length>0&&(T.uv_index=Math.max(...y)),O.length>0&&(T.apparent_temperature=parseFloat(I7(O).toFixed(1))),e.push(T)}return e},Id="mdi:gauge",Ba=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?Y5[r]:void 0)??Id),U7=(r,t,e,i)=>{let o=t.attributes[i];if(o!==void 0){if(i==="wind_speed")return $d(r,t);if(i==="wind_gust_speed"){let a=m5(r,t,"wind_gust_speed");return`${ye(o,r.locale)} ${a}`}if(i==="ozone"){let a=m5(r,t,"ozone");return`${o} ${a}`}return i==="apparent_temperature"||i==="dew_point"?u0(r,t,o,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},p8=(r,t,e,i,o)=>{let a=r.states[o];if(!a)return;let n=a.state;return n===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?u0(r,t,n,e.current?.temperature_precision):r.formatEntityState(a)},u0=(r,t,e,i,o)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,n=m5(r,t,"temperature"),H=typeof e=="string"?parseFloat(e):e;return isNaN(H)?`${e}${o?"":n}`:`${ye(H,r.locale,a)}${o?"":n}`},Nd=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(H=>{let V=H*Math.PI/180;t+=Math.sin(V),e+=Math.cos(V)});let i=t/r.length,o=e/r.length,n=Math.atan2(i,o)*180/Math.PI;return n<0&&(n+=360),Math.round(n)},Wd=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let o=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return o===-1&&(o=0),a===-1&&(a=0),o-a}),r[0]?.condition||"exceptional"};var j7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let o=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{o&&(o.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let o=t.scrollLeft,a=Math.round(o/i)*i,n=500,H=performance.now(),V=d=>d*(2-d),c=d=>{let m=this._container;if(!m){this._completeFinalize();return}let A=d-H,g=Math.min(A/n,1),y=V(g);m.scrollLeft=o+(a-o)*y,g<1?this._state.momentumId=requestAnimationFrame(c):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(c)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var za="important",Ud=" !"+za,e5=N7(class extends s3{constructor(r){if(super(r),r.type!==l8.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let o=t[i];if(o!=null){this.ft.add(i);let a=typeof o=="string"&&o.endsWith(Ud);i.includes("-")||a?e.setProperty(i,a?o.slice(0,-11):o,a?za:""):e[i]=o}}return h5}});var Q3=N7(class extends s3{constructor(r){if(super(r),r.type!==l8.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return h5}});function K4(r){return r+.5|0}var H3=(r,t,e)=>Math.max(Math.min(r,e),t);function Y4(r){return H3(K4(r*2.55),0,255)}function V3(r){return H3(K4(r*255),0,255)}function F0(r){return H3(K4(r/2.55)/100,0,1)}function Ia(r){return H3(K4(r*100),0,100)}var $5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ue=[..."0123456789ABCDEF"],jd=r=>Ue[r&15],Gd=r=>Ue[(r&240)>>4]+Ue[r&15],u8=r=>(r&240)>>4===(r&15),qd=r=>u8(r.r)&&u8(r.g)&&u8(r.b)&&u8(r.a);function Yd(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&$5[r[1]]*17,g:255&$5[r[2]]*17,b:255&$5[r[3]]*17,a:t===5?$5[r[4]]*17:255}:(t===7||t===9)&&(e={r:$5[r[1]]<<4|$5[r[2]],g:$5[r[3]]<<4|$5[r[4]],b:$5[r[5]]<<4|$5[r[6]],a:t===9?$5[r[7]]<<4|$5[r[8]]:255})),e}var Qd=(r,t)=>r<255?t(r):"";function Kd(r){var t=qd(r)?jd:Gd;return r?"#"+t(r.r)+t(r.g)+t(r.b)+Qd(r.a,t):void 0}var Xd=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ja(r,t,e){let i=t*Math.min(e,1-e),o=(a,n=(a+r/30)%12)=>e-i*Math.max(Math.min(n-3,9-n,1),-1);return[o(0),o(8),o(4)]}function Jd(r,t,e){let i=(o,a=(o+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function tp(r,t,e){let i=ja(r,1,.5),o;for(t+e>1&&(o=1/(t+e),t*=o,e*=o),o=0;o<3;o++)i[o]*=1-t-e,i[o]+=t;return i}function ep(r,t,e,i,o){return r===o?(t-e)/i+(t<e?6:0):t===o?(e-r)/i+2:(r-t)/i+4}function je(r){let e=r.r/255,i=r.g/255,o=r.b/255,a=Math.max(e,i,o),n=Math.min(e,i,o),H=(a+n)/2,V,c,d;return a!==n&&(d=a-n,c=H>.5?d/(2-a-n):d/(a+n),V=ep(e,i,o,d,a),V=V*60+.5),[V|0,c||0,H]}function Ge(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(V3)}function qe(r,t,e){return Ge(ja,r,t,e)}function rp(r,t,e){return Ge(tp,r,t,e)}function ip(r,t,e){return Ge(Jd,r,t,e)}function Ga(r){return(r%360+360)%360}function op(r){let t=Xd.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?Y4(+t[5]):V3(+t[5]));let o=Ga(+t[2]),a=+t[3]/100,n=+t[4]/100;return t[1]==="hwb"?i=rp(o,a,n):t[1]==="hsv"?i=ip(o,a,n):i=qe(o,a,n),{r:i[0],g:i[1],b:i[2],a:e}}function Cp(r,t){var e=je(r);e[0]=Ga(e[0]+t),e=qe(e),r.r=e[0],r.g=e[1],r.b=e[2]}function ap(r){if(!r)return;let t=je(r),e=t[0],i=Ia(t[1]),o=Ia(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${o}%, ${F0(r.a)})`:`hsl(${e}, ${i}%, ${o}%)`}var Na={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Wa={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function np(){let r={},t=Object.keys(Wa),e=Object.keys(Na),i,o,a,n,H;for(i=0;i<t.length;i++){for(n=H=t[i],o=0;o<e.length;o++)a=e[o],H=H.replace(a,Na[a]);a=parseInt(Wa[n],16),r[H]=[a>>16&255,a>>8&255,a&255]}return r}var h8;function sp(r){h8||(h8=np(),h8.transparent=[0,0,0,0]);let t=h8[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Hp=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Vp(r){let t=Hp.exec(r),e=255,i,o,a;if(t){if(t[7]!==i){let n=+t[7];e=t[8]?Y4(n):H3(n*255,0,255)}return i=+t[1],o=+t[3],a=+t[5],i=255&(t[2]?Y4(i):H3(i,0,255)),o=255&(t[4]?Y4(o):H3(o,0,255)),a=255&(t[6]?Y4(a):H3(a,0,255)),{r:i,g:o,b:a,a:e}}}function Lp(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${F0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var We=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,G7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function lp(r,t,e){let i=G7(F0(r.r)),o=G7(F0(r.g)),a=G7(F0(r.b));return{r:V3(We(i+e*(G7(F0(t.r))-i))),g:V3(We(o+e*(G7(F0(t.g))-o))),b:V3(We(a+e*(G7(F0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function m8(r,t,e){if(r){let i=je(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=qe(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function qa(r,t){return r&&Object.assign(t||{},r)}function Ua(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=V3(r[3]))):(t=qa(r,{r:0,g:0,b:0,a:1}),t.a=V3(t.a)),t}function cp(r){return r.charAt(0)==="r"?Vp(r):op(r)}var Q4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=Ua(t):e==="string"&&(i=Yd(t)||sp(t)||cp(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=qa(this._rgb);return t&&(t.a=F0(t.a)),t}set rgb(t){this._rgb=Ua(t)}rgbString(){return this._valid?Lp(this._rgb):void 0}hexString(){return this._valid?Kd(this._rgb):void 0}hslString(){return this._valid?ap(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,o=t.rgb,a,n=e===a?.5:e,H=2*n-1,V=i.a-o.a,c=((H*V===-1?H:(H+V)/(1+H*V))+1)/2;a=1-c,i.r=255&c*i.r+a*o.r+.5,i.g=255&c*i.g+a*o.g+.5,i.b=255&c*i.b+a*o.b+.5,i.a=n*i.a+(1-n)*o.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=lp(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=V3(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=K4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return m8(this._rgb,2,t),this}darken(t){return m8(this._rgb,2,-t),this}saturate(t){return m8(this._rgb,1,t),this}desaturate(t){return m8(this._rgb,1,-t),this}rotate(t){return Cp(this._rgb,t),this}};function K5(){}var Xe=(()=>{let r=0;return()=>r++})();function b1(r){return r==null}function o2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function S1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function V2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function r5(r,t){return V2(r)?r:t}function E1(r,t){return typeof r>"u"?t:r}var Je=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function r2(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function W1(r,t,e,i){let o,a,n;if(o2(r))if(a=r.length,i)for(o=a-1;o>=0;o--)t.call(e,r[o],o);else for(o=0;o<a;o++)t.call(e,r[o],o);else if(S1(r))for(n=Object.keys(r),a=n.length,o=0;o<a;o++)t.call(e,r[n[o]],n[o])}function Q7(r,t){let e,i,o,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(o=r[e],a=t[e],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function J4(r){if(o2(r))return r.map(J4);if(S1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,o=0;for(;o<i;++o)t[e[o]]=J4(r[e[o]]);return t}return r}function Cn(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function an(r,t,e,i){if(!Cn(r))return;let o=t[r],a=e[r];S1(o)&&S1(a)?f5(o,a,i):t[r]=J4(a)}function f5(r,t,e){let i=o2(t)?t:[t],o=i.length;if(!S1(r))return r;e=e||{};let a=e.merger||an,n;for(let H=0;H<o;++H){if(n=i[H],!S1(n))continue;let V=Object.keys(n);for(let c=0,d=V.length;c<d;++c)a(V[c],r,n,e)}return r}function J3(r,t){return f5(r,t,{merger:nn})}function nn(r,t,e){if(!Cn(r))return;let i=t[r],o=e[r];S1(i)&&S1(o)?J3(i,o):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=J4(o))}var Ya={"":r=>r,x:r=>r.x,y:r=>r.y};function sn(r){let t=r.split("."),e=[],i="";for(let o of t)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function Mp(r){let t=sn(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function M3(r,t){return(Ya[t]||(Ya[t]=Mp(t)))(r)}function r9(r){return r.charAt(0).toUpperCase()+r.slice(1)}var t7=r=>typeof r<"u",h0=r=>typeof r=="function",_8=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function tr(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var t2=Math.PI,p2=2*t2,Hn=p2+t2,t9=Number.POSITIVE_INFINITY,Vn=t2/180,f2=t2/2,L3=t2/4,Qe=t2*2/3,m0=Math.log10,F5=Math.sign;function e7(r,t,e){return Math.abs(r-t)<e}function b8(r){let t=Math.round(r);r=e7(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(m0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function er(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((o,a)=>o-a).pop(),t}function dp(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function r7(r){return!dp(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function rr(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function w8(r,t,e){let i,o,a;for(i=0,o=r.length;i<o;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function f0(r){return r*(t2/180)}function i9(r){return r*(180/t2)}function S8(r){if(!V2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function y8(r,t){let e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*t2&&(a+=p2),{angle:a,distance:o}}function e9(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function Ln(r,t){return(r-t+Hn)%p2-t2}function O2(r){return(r%p2+p2)%p2}function o9(r,t,e,i){let o=O2(r),a=O2(t),n=O2(e),H=O2(a-o),V=O2(n-o),c=O2(o-a),d=O2(o-n);return o===a||o===n||i&&a===n||H>V&&c<d}function T2(r,t,e){return Math.max(t,Math.min(e,r))}function ir(r){return T2(r,-32768,32767)}function i7(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function C9(r,t,e){e=e||(n=>r[n]<t);let i=r.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,e(a)?o=a:i=a;return{lo:o,hi:i}}var D0=(r,t,e,i)=>C9(r,e,i?o=>{let a=r[o][t];return a<e||a===e&&r[o+1][t]===e}:o=>r[o][t]<e),or=(r,t,e)=>C9(r,e,i=>r[i][t]>=e);function Cr(r,t,e){let i=0,o=r.length;for(;i<o&&r[i]<t;)i++;for(;o>i&&r[o-1]>e;)o--;return i>0||o<r.length?r.slice(i,o):r}var ln=["push","pop","shift","splice","unshift"];function ar(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),ln.forEach(e=>{let i="_onData"+r9(e),o=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let n=o.apply(this,a);return r._chartjs.listeners.forEach(H=>{typeof H[i]=="function"&&H[i](...a)}),n}})})}function Z8(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,o=i.indexOf(t);o!==-1&&i.splice(o,1),!(i.length>0)&&(ln.forEach(a=>{delete r[a]}),delete r._chartjs)}function k8(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var O8=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function T8(r,t){let e=[],i=!1;return function(...o){e=o,i||(i=!0,O8.call(window,()=>{i=!1,r.apply(t,e)}))}}function nr(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var sr=r=>r==="start"?"left":r==="end"?"right":"center",P8=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function Hr(r,t,e){let i=t.length,o=0,a=i;if(r._sorted){let{iScale:n,vScale:H,_parsed:V}=r,c=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,d=n.axis,{min:m,max:A,minDefined:g,maxDefined:y}=n.getUserBounds();if(g){if(o=Math.min(D0(V,d,m).lo,e?i:D0(t,d,n.getPixelForValue(m)).lo),c){let O=V.slice(0,o+1).reverse().findIndex(k=>!b1(k[H.axis]));o-=Math.max(0,O)}o=T2(o,0,i-1)}if(y){let O=Math.max(D0(V,n.axis,A,!0).hi+1,e?0:D0(t,d,n.getPixelForValue(A),!0).hi+1);if(c){let k=V.slice(O-1).findIndex(T=>!b1(T[H.axis]));O+=Math.max(0,k)}a=T2(O,o,i)-o}else a=i-o}return{start:o,count:a}}function Vr(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,o={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=o,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,o),a}var f8=r=>r===0||r===1,Qa=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*p2/e)),Ka=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*p2/e)+1,K3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*f2)+1,easeOutSine:r=>Math.sin(r*f2),easeInOutSine:r=>-.5*(Math.cos(t2*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>f8(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>f8(r)?r:Qa(r,.075,.3),easeOutElastic:r=>f8(r)?r:Ka(r,.075,.3),easeInOutElastic(r){return f8(r)?r:r<.5?.5*Qa(r*2,.1125,.45):.5+.5*Ka(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-K3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?K3.easeInBounce(r*2)*.5:K3.easeOutBounce(r*2-1)*.5+.5};function E8(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function $8(r){return E8(r)?r:new Q4(r)}function x8(r){return E8(r)?r:new Q4(r).saturate(.5).darken(.1).hexString()}var pp=["x","y","borderWidth","radius","tension"],up=["color","borderColor","backgroundColor"];function hp(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:up},numbers:{type:"number",properties:pp}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function mp(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Xa=new Map;function fp(r,t){t=t||{};let e=r+JSON.stringify(t),i=Xa.get(e);return i||(i=new Intl.NumberFormat(r,t),Xa.set(e,i)),i}function a9(r,t,e){return fp(t,e).format(r)}var cn={values(r){return o2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,o,a=r;if(e.length>1){let c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(o="scientific"),a=Ap(r,e)}let n=m0(Math.abs(a)),H=isNaN(n)?1:Math.max(Math.min(-1*Math.floor(n),20),0),V={notation:o,minimumFractionDigits:H,maximumFractionDigits:H};return Object.assign(V,this.options.ticks.format),a9(r,i,V)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(m0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?cn.numeric.call(this,r,t,e):""}};function Ap(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var n9={formatters:cn};function vp(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:n9.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var d3=Object.create(null),F8=Object.create(null);function X4(r,t){if(!t)return r;let e=t.split(".");for(let i=0,o=e.length;i<o;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function Ye(r,t,e){return typeof t=="string"?f5(X4(r,t),e):f5(X4(r,""),t)}var Ke=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>x8(o.backgroundColor),this.hoverBorderColor=(i,o)=>x8(o.borderColor),this.hoverColor=(i,o)=>x8(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ye(this,t,e)}get(t){return X4(this,t)}describe(t,e){return Ye(F8,t,e)}override(t,e){return Ye(d3,t,e)}route(t,e,i,o){let a=X4(this,t),n=X4(this,i),H="_"+e;Object.defineProperties(a,{[H]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let V=this[H],c=n[o];return S1(V)?Object.assign({},c,V):E1(V,c)},set(V){this[H]=V}}})}apply(t){t.forEach(e=>e(this))}},L2=new Ke({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[hp,mp,vp]);function Mn(r){return!r||b1(r.size)||b1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function q7(r,t,e,i,o){let a=t[o];return a||(a=t[o]=r.measureText(o).width,e.push(o)),a>i&&(i=a),i}function Lr(r,t,e,i){i=i||{};let o=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(o=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let n=0,H=e.length,V,c,d,m,A;for(V=0;V<H;V++)if(m=e[V],m!=null&&!o2(m))n=q7(r,o,a,n,m);else if(o2(m))for(c=0,d=m.length;c<d;c++)A=m[c],A!=null&&!o2(A)&&(n=q7(r,o,a,n,A));r.restore();let g=a.length/2;if(g>e.length){for(V=0;V<g;V++)delete o[a[V]];a.splice(0,g)}return n}function B0(r,t,e){let i=r.currentDevicePixelRatio,o=e!==0?Math.max(e/2,.5):0;return Math.round((t-o)*i)/i+o}function R8(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function s9(r,t,e,i){lr(r,t,e,i,null)}function lr(r,t,e,i,o){let a,n,H,V,c,d,m,A,g=t.pointStyle,y=t.rotation,O=t.radius,k=(y||0)*Vn;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(k),r.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),r.restore();return}if(!(isNaN(O)||O<=0)){switch(r.beginPath(),g){default:o?r.ellipse(e,i,o/2,O,0,0,p2):r.arc(e,i,O,0,p2),r.closePath();break;case"triangle":d=o?o/2:O,r.moveTo(e+Math.sin(k)*d,i-Math.cos(k)*O),k+=Qe,r.lineTo(e+Math.sin(k)*d,i-Math.cos(k)*O),k+=Qe,r.lineTo(e+Math.sin(k)*d,i-Math.cos(k)*O),r.closePath();break;case"rectRounded":c=O*.516,V=O-c,n=Math.cos(k+L3)*V,m=Math.cos(k+L3)*(o?o/2-c:V),H=Math.sin(k+L3)*V,A=Math.sin(k+L3)*(o?o/2-c:V),r.arc(e-m,i-H,c,k-t2,k-f2),r.arc(e+A,i-n,c,k-f2,k),r.arc(e+m,i+H,c,k,k+f2),r.arc(e-A,i+n,c,k+f2,k+t2),r.closePath();break;case"rect":if(!y){V=Math.SQRT1_2*O,d=o?o/2:V,r.rect(e-d,i-V,2*d,2*V);break}k+=L3;case"rectRot":m=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,H=Math.sin(k)*O,A=Math.sin(k)*(o?o/2:O),r.moveTo(e-m,i-H),r.lineTo(e+A,i-n),r.lineTo(e+m,i+H),r.lineTo(e-A,i+n),r.closePath();break;case"crossRot":k+=L3;case"cross":m=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,H=Math.sin(k)*O,A=Math.sin(k)*(o?o/2:O),r.moveTo(e-m,i-H),r.lineTo(e+m,i+H),r.moveTo(e+A,i-n),r.lineTo(e-A,i+n);break;case"star":m=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,H=Math.sin(k)*O,A=Math.sin(k)*(o?o/2:O),r.moveTo(e-m,i-H),r.lineTo(e+m,i+H),r.moveTo(e+A,i-n),r.lineTo(e-A,i+n),k+=L3,m=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,H=Math.sin(k)*O,A=Math.sin(k)*(o?o/2:O),r.moveTo(e-m,i-H),r.lineTo(e+m,i+H),r.moveTo(e+A,i-n),r.lineTo(e-A,i+n);break;case"line":n=o?o/2:Math.cos(k)*O,H=Math.sin(k)*O,r.moveTo(e-n,i-H),r.lineTo(e+n,i+H);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(k)*(o?o/2:O),i+Math.sin(k)*O);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function Q5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function H9(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function V9(r){r.restore()}function cr(r,t,e,i,o){if(!t)return r.lineTo(e.x,e.y);if(o==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else o==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function Mr(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function xp(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),b1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function gp(r,t,e,i,o){if(o.strikethrough||o.underline){let a=r.measureText(i),n=t-a.actualBoundingBoxLeft,H=t+a.actualBoundingBoxRight,V=e-a.actualBoundingBoxAscent,c=e+a.actualBoundingBoxDescent,d=o.strikethrough?(V+c)/2:c;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=o.decorationWidth||2,r.moveTo(n,d),r.lineTo(H,d),r.stroke()}}function _p(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function K7(r,t,e,i,o,a={}){let n=o2(t)?t:[t],H=a.strokeWidth>0&&a.strokeColor!=="",V,c;for(r.save(),r.font=o.string,xp(r,a),V=0;V<n.length;++V)c=n[V],a.backdrop&&_p(r,a.backdrop),H&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),b1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(c,e,i,a.maxWidth)),r.fillText(c,e,i,a.maxWidth),gp(r,e,i,c,a),i+=Number(o.lineHeight);r.restore()}function X7(r,t){let{x:e,y:i,w:o,h:a,radius:n}=t;r.arc(e+n.topLeft,i+n.topLeft,n.topLeft,1.5*t2,t2,!0),r.lineTo(e,i+a-n.bottomLeft),r.arc(e+n.bottomLeft,i+a-n.bottomLeft,n.bottomLeft,t2,f2,!0),r.lineTo(e+o-n.bottomRight,i+a),r.arc(e+o-n.bottomRight,i+a-n.bottomRight,n.bottomRight,f2,0,!0),r.lineTo(e+o,i+n.topRight),r.arc(e+o-n.topRight,i+n.topRight,n.topRight,0,-f2,!0),r.lineTo(e+n.topLeft,i)}var bp=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,wp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function dn(r,t){let e=(""+r).match(bp);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var Sp=r=>+r||0;function L9(r,t){let e={},i=S1(t),o=i?Object.keys(t):t,a=S1(r)?i?n=>E1(r[n],r[t[n]]):n=>r[n]:()=>r;for(let n of o)e[n]=Sp(a(n));return e}function D8(r){return L9(r,{top:"y",right:"x",bottom:"y",left:"x"})}function p3(r){return L9(r,["topLeft","topRight","bottomLeft","bottomRight"])}function G2(r){let t=D8(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function I2(r,t){r=r||{},t=t||L2.font;let e=E1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=E1(r.style,t.style);i&&!(""+i).match(wp)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let o={family:E1(r.family,t.family),lineHeight:dn(E1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:E1(r.weight,t.weight),string:""};return o.string=Mn(o),o}function i2(r,t,e,i){let o=!0,a,n,H;for(a=0,n=r.length;a<n;++a)if(H=r[a],H!==void 0&&(t!==void 0&&typeof H=="function"&&(H=H(t),o=!1),e!==void 0&&o2(H)&&(H=H[e%H.length],o=!1),H!==void 0))return i&&!o&&(i.cacheable=!1),H}function dr(r,t,e){let{min:i,max:o}=r,a=Je(t,(o-i)/2),n=(H,V)=>e&&H===0?0:H+V;return{min:n(i,-Math.abs(a)),max:n(o,a)}}function A0(r,t){return Object.assign(Object.create(r),t)}function l9(r,t=[""],e,i,o=()=>r[0]){let a=e||r;typeof i>"u"&&(i=hn("_fallback",r));let n={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:o,override:H=>l9([H,...r],t,a,i)};return new Proxy(n,{deleteProperty(H,V){return delete H[V],delete H._keys,delete r[0][V],!0},get(H,V){return pn(H,V,()=>$p(V,t,r,H))},getOwnPropertyDescriptor(H,V){return Reflect.getOwnPropertyDescriptor(H._scopes[0],V)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(H,V){return tn(H).includes(V)},ownKeys(H){return tn(H)},set(H,V,c){let d=H._storage||(H._storage=o());return H[V]=d[V]=c,delete H._keys,!0}})}function c3(r,t,e,i){let o={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:B8(r,i),setContext:a=>c3(r,a,e,i),override:a=>c3(r.override(a),t,e,i)};return new Proxy(o,{deleteProperty(a,n){return delete a[n],delete r[n],!0},get(a,n,H){return pn(a,n,()=>Zp(a,n,H))},getOwnPropertyDescriptor(a,n){return a._descriptors.allKeys?Reflect.has(r,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,n)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,n){return Reflect.has(r,n)},ownKeys(){return Reflect.ownKeys(r)},set(a,n,H){return r[n]=H,delete a[n],!0}})}function B8(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:o=t.allKeys}=r;return{allKeys:o,scriptable:e,indexable:i,isScriptable:h0(e)?e:()=>e,isIndexable:h0(i)?i:()=>i}}var yp=(r,t)=>r?r+r9(t):t,pr=(r,t)=>S1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function pn(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function Zp(r,t,e){let{_proxy:i,_context:o,_subProxy:a,_descriptors:n}=r,H=i[t];return h0(H)&&n.isScriptable(t)&&(H=kp(t,H,r,e)),o2(H)&&H.length&&(H=Op(t,H,r,n.isIndexable)),pr(t,H)&&(H=c3(H,o,a&&a[t],n)),H}function kp(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_stack:H}=e;if(H.has(r))throw new Error("Recursion detected: "+Array.from(H).join("->")+"->"+r);H.add(r);let V=t(a,n||i);return H.delete(r),pr(r,V)&&(V=ur(o._scopes,o,r,V)),V}function Op(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_descriptors:H}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(S1(t[0])){let V=t,c=o._scopes.filter(d=>d!==V);t=[];for(let d of V){let m=ur(c,o,r,d);t.push(c3(m,a,n&&n[r],H))}}return t}function un(r,t,e){return h0(r)?r(t,e):r}var Tp=(r,t)=>r===!0?t:typeof r=="string"?M3(t,r):void 0;function Pp(r,t,e,i,o){for(let a of t){let n=Tp(e,a);if(n){r.add(n);let H=un(n._fallback,e,o);if(typeof H<"u"&&H!==e&&H!==i)return H}else if(n===!1&&typeof i<"u"&&e!==i)return null}return!1}function ur(r,t,e,i){let o=t._rootScopes,a=un(t._fallback,e,i),n=[...r,...o],H=new Set;H.add(i);let V=Ja(H,n,e,a||e,i);return V===null||typeof a<"u"&&a!==e&&(V=Ja(H,n,a,V,i),V===null)?!1:l9(Array.from(H),[""],o,a,()=>Ep(t,e,i))}function Ja(r,t,e,i,o){for(;e;)e=Pp(r,t,e,i,o);return e}function Ep(r,t,e){let i=r._getTarget();t in i||(i[t]={});let o=i[t];return o2(o)&&S1(e)?e:o||{}}function $p(r,t,e,i){let o;for(let a of t)if(o=hn(yp(a,r),e),typeof o<"u")return pr(r,o)?ur(e,i,r,o):o}function hn(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function tn(r){let t=r._keys;return t||(t=r._keys=Fp(r._scopes)),t}function Fp(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(o=>!o.startsWith("_")))t.add(i);return Array.from(t)}var Rp=Number.EPSILON||1e-14,Y7=(r,t)=>t<r.length&&!r[t].skip&&r[t],mn=r=>r==="x"?"y":"x";function fn(r,t,e,i){let o=r.skip?t:r,a=t,n=e.skip?t:e,H=e9(a,o),V=e9(n,a),c=H/(H+V),d=V/(H+V);c=isNaN(c)?0:c,d=isNaN(d)?0:d;let m=i*c,A=i*d;return{previous:{x:a.x-m*(n.x-o.x),y:a.y-m*(n.y-o.y)},next:{x:a.x+A*(n.x-o.x),y:a.y+A*(n.y-o.y)}}}function Dp(r,t,e){let i=r.length,o,a,n,H,V,c=Y7(r,0);for(let d=0;d<i-1;++d)if(V=c,c=Y7(r,d+1),!(!V||!c)){if(e7(t[d],0,Rp)){e[d]=e[d+1]=0;continue}o=e[d]/t[d],a=e[d+1]/t[d],H=Math.pow(o,2)+Math.pow(a,2),!(H<=9)&&(n=3/Math.sqrt(H),e[d]=o*n*t[d],e[d+1]=a*n*t[d])}}function Bp(r,t,e="x"){let i=mn(e),o=r.length,a,n,H,V=Y7(r,0);for(let c=0;c<o;++c){if(n=H,H=V,V=Y7(r,c+1),!H)continue;let d=H[e],m=H[i];n&&(a=(d-n[e])/3,H[`cp1${e}`]=d-a,H[`cp1${i}`]=m-a*t[c]),V&&(a=(V[e]-d)/3,H[`cp2${e}`]=d+a,H[`cp2${i}`]=m+a*t[c])}}function An(r,t="x"){let e=mn(t),i=r.length,o=Array(i).fill(0),a=Array(i),n,H,V,c=Y7(r,0);for(n=0;n<i;++n)if(H=V,V=c,c=Y7(r,n+1),!!V){if(c){let d=c[t]-V[t];o[n]=d!==0?(c[e]-V[e])/d:0}a[n]=H?c?F5(o[n-1])!==F5(o[n])?0:(o[n-1]+o[n])/2:o[n-1]:o[n]}Dp(r,o,a),Bp(r,a,t)}function A8(r,t,e){return Math.max(Math.min(r,e),t)}function zp(r,t){let e,i,o,a,n,H=Q5(r[0],t);for(e=0,i=r.length;e<i;++e)n=a,a=H,H=e<i-1&&Q5(r[e+1],t),a&&(o=r[e],n&&(o.cp1x=A8(o.cp1x,t.left,t.right),o.cp1y=A8(o.cp1y,t.top,t.bottom)),H&&(o.cp2x=A8(o.cp2x,t.left,t.right),o.cp2y=A8(o.cp2y,t.top,t.bottom)))}function hr(r,t,e,i,o){let a,n,H,V;if(t.spanGaps&&(r=r.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")An(r,o);else{let c=i?r[r.length-1]:r[0];for(a=0,n=r.length;a<n;++a)H=r[a],V=fn(c,H,r[Math.min(a+1,n-(i?0:1))%n],t.tension),H.cp1x=V.previous.x,H.cp1y=V.previous.y,H.cp2x=V.next.x,H.cp2y=V.next.y,c=H}t.capBezierPoints&&zp(r,e)}function c9(){return typeof window<"u"&&typeof document<"u"}function M9(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function g8(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var z8=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function vn(r,t){return z8(r).getPropertyValue(t)}var Ip=["top","right","bottom","left"];function X3(r,t,e){let i={};e=e?"-"+e:"";for(let o=0;o<4;o++){let a=Ip[o];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var Np=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function Wp(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:o,offsetY:a}=i,n=!1,H,V;if(Np(o,a,r.target))H=o,V=a;else{let c=t.getBoundingClientRect();H=i.clientX-c.left,V=i.clientY-c.top,n=!0}return{x:H,y:V,box:n}}function X5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,o=z8(e),a=o.boxSizing==="border-box",n=X3(o,"padding"),H=X3(o,"border","width"),{x:V,y:c,box:d}=Wp(r,e),m=n.left+(d&&H.left),A=n.top+(d&&H.top),{width:g,height:y}=t;return a&&(g-=n.width+H.width,y-=n.height+H.height),{x:Math.round((V-m)/g*e.width/i),y:Math.round((c-A)/y*e.height/i)}}function Up(r,t,e){let i,o;if(t===void 0||e===void 0){let a=r&&M9(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let n=a.getBoundingClientRect(),H=z8(a),V=X3(H,"border","width"),c=X3(H,"padding");t=n.width-c.width-V.width,e=n.height-c.height-V.height,i=g8(H.maxWidth,a,"clientWidth"),o=g8(H.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||t9,maxHeight:o||t9}}var l3=r=>Math.round(r*10)/10;function mr(r,t,e,i){let o=z8(r),a=X3(o,"margin"),n=g8(o.maxWidth,r,"clientWidth")||t9,H=g8(o.maxHeight,r,"clientHeight")||t9,V=Up(r,t,e),{width:c,height:d}=V;if(o.boxSizing==="content-box"){let A=X3(o,"border","width"),g=X3(o,"padding");c-=g.width+A.width,d-=g.height+A.height}return c=Math.max(0,c-a.width),d=Math.max(0,i?c/i:d-a.height),c=l3(Math.min(c,n,V.maxWidth)),d=l3(Math.min(d,H,V.maxHeight)),c&&!d&&(d=l3(c/2)),(t!==void 0||e!==void 0)&&i&&V.height&&d>V.height&&(d=V.height,c=l3(Math.floor(d*i))),{width:c,height:d}}function I8(r,t,e){let i=t||1,o=l3(r.height*i),a=l3(r.width*i);r.height=l3(r.height),r.width=l3(r.width);let n=r.canvas;return n.style&&(e||!n.style.height&&!n.style.width)&&(n.style.height=`${r.height}px`,n.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||n.height!==o||n.width!==a?(r.currentDevicePixelRatio=i,n.height=o,n.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var fr=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};c9()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function N8(r,t){let e=vn(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function R0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function Ar(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function vr(r,t,e,i){let o={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},n=R0(r,o,e),H=R0(o,a,e),V=R0(a,t,e),c=R0(n,H,e),d=R0(H,V,e);return R0(c,d,e)}var jp=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},Gp=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function d9(r,t,e){return r?jp(t,e):Gp()}function xr(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function gr(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function xn(r){return r==="angle"?{between:o9,compare:Ln,normalize:O2}:{between:i7,compare:(t,e)=>t-e,normalize:t=>t}}function en({start:r,end:t,count:e,loop:i,style:o}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:o}}function qp(r,t,e){let{property:i,start:o,end:a}=e,{between:n,normalize:H}=xn(i),V=t.length,{start:c,end:d,loop:m}=r,A,g;if(m){for(c+=V,d+=V,A=0,g=V;A<g&&n(H(t[c%V][i]),o,a);++A)c--,d--;c%=V,d%=V}return d<c&&(d+=V),{start:c,end:d,loop:m,style:r.style}}function W8(r,t,e){if(!e)return[r];let{property:i,start:o,end:a}=e,n=t.length,{compare:H,between:V,normalize:c}=xn(i),{start:d,end:m,loop:A,style:g}=qp(r,t,e),y=[],O=!1,k=null,T,$,F,K=()=>V(o,F,T)&&H(o,F)!==0,G=()=>H(a,T)===0||V(a,F,T),l1=()=>O||K(),X=()=>!O||G();for(let e1=d,o1=d;e1<=m;++e1)$=t[e1%n],!$.skip&&(T=c($[i]),T!==F&&(O=V(T,o,a),k===null&&l1()&&(k=H(T,o)===0?e1:o1),k!==null&&X()&&(y.push(en({start:k,end:e1,loop:A,count:n,style:g})),k=null),o1=e1,F=T));return k!==null&&y.push(en({start:k,end:m,loop:A,count:n,style:g})),y}function U8(r,t){let e=[],i=r.segments;for(let o=0;o<i.length;o++){let a=W8(i[o],r.points,t);a.length&&e.push(...a)}return e}function Yp(r,t,e,i){let o=0,a=t-1;if(e&&!i)for(;o<t&&!r[o].skip;)o++;for(;o<t&&r[o].skip;)o++;for(o%=t,e&&(a+=o);a>o&&r[a%t].skip;)a--;return a%=t,{start:o,end:a}}function Qp(r,t,e,i){let o=r.length,a=[],n=t,H=r[t],V;for(V=t+1;V<=e;++V){let c=r[V%o];c.skip||c.stop?H.skip||(i=!1,a.push({start:t%o,end:(V-1)%o,loop:i}),t=n=c.stop?V:null):(n=V,H.skip&&(t=V)),H=c}return n!==null&&a.push({start:t%o,end:n%o,loop:i}),a}function _r(r,t){let e=r.points,i=r.options.spanGaps,o=e.length;if(!o)return[];let a=!!r._loop,{start:n,end:H}=Yp(e,o,a,i);if(i===!0)return rn(r,[{start:n,end:H,loop:a}],e,t);let V=H<n?H+o:H,c=!!r._fullLoop&&n===0&&H===o-1;return rn(r,Qp(e,n,V,c),e,t)}function rn(r,t,e,i){return!i||!i.setContext||!e?t:Kp(r,t,e,i)}function Kp(r,t,e,i){let o=r._chart.getContext(),a=on(r.options),{_datasetIndex:n,options:{spanGaps:H}}=r,V=e.length,c=[],d=a,m=t[0].start,A=m;function g(y,O,k,T){let $=H?-1:1;if(y!==O){for(y+=V;e[y%V].skip;)y-=$;for(;e[O%V].skip;)O+=$;y%V!==O%V&&(c.push({start:y%V,end:O%V,loop:k,style:T}),d=T,m=O%V)}}for(let y of t){m=H?m:y.start;let O=e[m%V],k;for(A=m+1;A<=y.end;A++){let T=e[A%V];k=on(i.setContext(A0(o,{type:"segment",p0:O,p1:T,p0DataIndex:(A-1)%V,p1DataIndex:A%V,datasetIndex:n}))),Xp(k,d)&&g(m,A-1,y.loop,d),O=T,d=k}m<A-1&&g(m,A-1,y.loop,d)}return c}function on(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function Xp(r,t){if(!t)return!1;let e=[],i=function(o,a){return E8(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function v8(r,t,e){return r.options.clip?r[e]:t[e]}function Jp(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:v8(e,t,"left"),right:v8(e,t,"right"),top:v8(i,t,"top"),bottom:v8(i,t,"bottom")}:t}function j8(r,t){let e=t._clip;if(e.disabled)return!1;let i=Jp(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var Fr=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){let a=e.listeners[o],n=e.duration;a.forEach(H=>H({chart:t,initial:e.initial,numSteps:n,currentStep:Math.min(i-e.start,n)}))}_refresh(){this._request||(this._running=!0,this._request=O8.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;let a=i.items,n=a.length-1,H=!1,V;for(;n>=0;--n)V=a[n],V._active?(V._total>i.duration&&(i.duration=V._total),V.tick(t),H=!0):(a[n]=a[a.length-1],a.pop());H&&(o.draw(),this._notify(o,i,t,"progress")),a.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},z0=new Fr,gn="transparent",iu={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=$8(r||gn),o=i.valid&&$8(t||gn);return o&&o.valid?o.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},Rr=class{constructor(t,e,i,o){let a=e[i];o=i2([t.to,o,a,t.from]);let n=i2([t.from,a,o]);this._active=!0,this._fn=t.fn||iu[t.type||typeof n],this._easing=K3[t.easing]||K3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=n,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let o=this._target[this._prop],a=i-this._start,n=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(n,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=i2([t.to,e,o,t.from]),this._from=i2([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,o=this._prop,a=this._from,n=this._loop,H=this._to,V;if(this._active=a!==H&&(n||e<i),!this._active){this._target[o]=H,this._notify(!0);return}if(e<0){this._target[o]=a;return}V=e/i%2,V=n&&V>1?2-V:V,V=this._easing(Math.min(1,Math.max(0,V))),this._target[o]=this._fn(a,H,V)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][e]()}},it=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!S1(t))return;let e=Object.keys(L2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{let a=t[o];if(!S1(a))return;let n={};for(let H of e)n[H]=a[H];(o2(a.properties)&&a.properties||[o]).forEach(H=>{(H===o||!i.has(H))&&i.set(H,n)})})}_animateOptions(t,e){let i=e.options,o=Cu(t,i);if(!o)return[];let a=this._createAnimations(o,i);return i.$shared&&ou(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,o=[],a=t.$animations||(t.$animations={}),n=Object.keys(e),H=Date.now(),V;for(V=n.length-1;V>=0;--V){let c=n[V];if(c.charAt(0)==="$")continue;if(c==="options"){o.push(...this._animateOptions(t,e));continue}let d=e[c],m=a[c],A=i.get(c);if(m)if(A&&m.active()){m.update(A,d,H);continue}else m.cancel();if(!A||!A.duration){t[c]=d;continue}a[c]=m=new Rr(A,t,c,d),o.push(m)}return o}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return z0.add(this._chart,i),!0}};function ou(r,t){let e=[],i=Object.keys(t);for(let o=0;o<i.length;o++){let a=r[i[o]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function Cu(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function _n(r,t){let e=r&&r.options||{},i=e.reverse,o=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:o,end:i?o:a}}function au(r,t,e){if(e===!1)return!1;let i=_n(r,e),o=_n(t,e);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function nu(r){let t,e,i,o;return S1(r)?(t=r.top,e=r.right,i=r.bottom,o=r.left):t=e=i=o=r,{top:t,right:e,bottom:i,left:o,disabled:r===!1}}function ms(r,t){let e=[],i=r._getSortedDatasetMetas(t),o,a;for(o=0,a=i.length;o<a;++o)e.push(i[o].index);return e}function bn(r,t,e,i={}){let o=r.keys,a=i.mode==="single",n,H,V,c;if(t===null)return;let d=!1;for(n=0,H=o.length;n<H;++n){if(V=+o[n],V===e){if(d=!0,i.all)continue;break}c=r.values[V],V2(c)&&(a||t===0||F5(t)===F5(c))&&(t+=c)}return!d&&!i.all?0:t}function su(r,t){let{iScale:e,vScale:i}=t,o=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",n=Object.keys(r),H=new Array(n.length),V,c,d;for(V=0,c=n.length;V<c;++V)d=n[V],H[V]={[o]:d,[a]:r[d]};return H}function br(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function Hu(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function Vu(r){let{min:t,max:e,minDefined:i,maxDefined:o}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:o?e:Number.POSITIVE_INFINITY}}function Lu(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function wn(r,t,e,i){for(let o of t.getMatchingVisibleMetas(i).reverse()){let a=r[o.index];if(e&&a>0||!e&&a<0)return o.index}return null}function Sn(r,t){let{chart:e,_cachedMeta:i}=r,o=e._stacks||(e._stacks={}),{iScale:a,vScale:n,index:H}=i,V=a.axis,c=n.axis,d=Hu(a,n,i),m=t.length,A;for(let g=0;g<m;++g){let y=t[g],{[V]:O,[c]:k}=y,T=y._stacks||(y._stacks={});A=T[c]=Lu(o,d,O),A[H]=k,A._top=wn(A,n,!0,i.type),A._bottom=wn(A,n,!1,i.type);let $=A._visualValues||(A._visualValues={});$[H]=k}}function wr(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function lu(r,t){return A0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function cu(r,t,e){return A0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function p9(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let o of t){let a=o._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var Sr=r=>r==="reset"||r==="none",yn=(r,t)=>t?r:Object.assign({},r),Mu=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:ms(e,!0),values:null},h3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=br(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&p9(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(m,A,g,y)=>m==="x"?A:m==="r"?y:g,a=e.xAxisID=E1(i.xAxisID,wr(t,"x")),n=e.yAxisID=E1(i.yAxisID,wr(t,"y")),H=e.rAxisID=E1(i.rAxisID,wr(t,"r")),V=e.indexAxis,c=e.iAxisID=o(V,a,n,H),d=e.vAxisID=o(V,n,a,H);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(n),e.rScale=this.getScaleForId(H),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&Z8(this._data,this),t._stacked&&p9(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(S1(e)){let o=this._cachedMeta;this._data=su(e,o)}else if(i!==e){if(i){Z8(i,this);let o=this._cachedMeta;p9(o),o._parsed=[]}e&&Object.isExtensible(e)&&ar(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),o=!1;this._dataCheck();let a=e._stacked;e._stacked=br(e.vScale,e),e.stack!==i.stack&&(o=!0,p9(e),e.stack=i.stack),this._resyncElements(t),(o||a!==e._stacked)&&(Sn(this,e._parsed),e._stacked=br(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:n}=i,H=a.axis,V=t===0&&e===o.length?!0:i._sorted,c=t>0&&i._parsed[t-1],d,m,A;if(this._parsing===!1)i._parsed=o,i._sorted=!0,A=o;else{o2(o[t])?A=this.parseArrayData(i,o,t,e):S1(o[t])?A=this.parseObjectData(i,o,t,e):A=this.parsePrimitiveData(i,o,t,e);let g=()=>m[H]===null||c&&m[H]<c[H];for(d=0;d<e;++d)i._parsed[d+t]=m=A[d],V&&(g()&&(V=!1),c=m);i._sorted=V}n&&Sn(this,A)}parsePrimitiveData(t,e,i,o){let{iScale:a,vScale:n}=t,H=a.axis,V=n.axis,c=a.getLabels(),d=a===n,m=new Array(o),A,g,y;for(A=0,g=o;A<g;++A)y=A+i,m[A]={[H]:d||a.parse(c[y],y),[V]:n.parse(e[y],y)};return m}parseArrayData(t,e,i,o){let{xScale:a,yScale:n}=t,H=new Array(o),V,c,d,m;for(V=0,c=o;V<c;++V)d=V+i,m=e[d],H[V]={x:a.parse(m[0],d),y:n.parse(m[1],d)};return H}parseObjectData(t,e,i,o){let{xScale:a,yScale:n}=t,{xAxisKey:H="x",yAxisKey:V="y"}=this._parsing,c=new Array(o),d,m,A,g;for(d=0,m=o;d<m;++d)A=d+i,g=e[A],c[d]={x:a.parse(M3(g,H),A),y:n.parse(M3(g,V),A)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let o=this.chart,a=this._cachedMeta,n=e[t.axis],H={keys:ms(o,!0),values:e._stacks[t.axis]._visualValues};return bn(H,n,a.index,{mode:i})}updateRangeFromParsed(t,e,i,o){let a=i[e.axis],n=a===null?NaN:a,H=o&&i._stacks[e.axis];o&&H&&(o.values=H,n=bn(o,a,this._cachedMeta.index)),t.min=Math.min(t.min,n),t.max=Math.max(t.max,n)}getMinMax(t,e){let i=this._cachedMeta,o=i._parsed,a=i._sorted&&t===i.iScale,n=o.length,H=this._getOtherScale(t),V=Mu(e,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:m}=Vu(H),A,g;function y(){g=o[A];let O=g[H.axis];return!V2(g[t.axis])||d>O||m<O}for(A=0;A<n&&!(!y()&&(this.updateRangeFromParsed(c,t,g,V),a));++A);if(a){for(A=n-1;A>=0;--A)if(!y()){this.updateRangeFromParsed(c,t,g,V);break}}return c}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],o,a,n;for(o=0,a=e.length;o<a;++o)n=e[o][t.axis],V2(n)&&i.push(n);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,o=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=nu(E1(this.options.clip,au(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],a=e.chartArea,n=[],H=this._drawStart||0,V=this._drawCount||o.length-H,c=this.options.drawActiveElementsOnTop,d;for(i.dataset&&i.dataset.draw(t,a,H,V),d=H;d<H+V;++d){let m=o[d];m.hidden||(m.active&&c?n.push(m):m.draw(t,a))}for(d=0;d<n.length;++d)n[d].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let o=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let n=this._cachedMeta.data[t];a=n.$context||(n.$context=cu(this.getContext(),t,n)),a.parsed=this.getParsed(t),a.raw=o.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=lu(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let o=e==="active",a=this._cachedDataOpts,n=t+"-"+e,H=a[n],V=this.enableOptionSharing&&t7(i);if(H)return yn(H,V);let c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),m=o?[`${t}Hover`,"hover",t,""]:[t,""],A=c.getOptionScopes(this.getDataset(),d),g=Object.keys(L2.elements[t]),y=()=>this.getContext(i,o,e),O=c.resolveNamedOptions(A,g,y,m);return O.$shared&&(O.$shared=V,a[n]=Object.freeze(yn(O,V))),O}_resolveAnimations(t,e,i){let o=this.chart,a=this._cachedDataOpts,n=`animation-${e}`,H=a[n];if(H)return H;let V;if(o.options.animation!==!1){let d=this.chart.config,m=d.datasetAnimationScopeKeys(this._type,e),A=d.getOptionScopes(this.getDataset(),m);V=d.createResolver(A,this.getContext(t,i,e))}let c=new it(o,V&&V.animations);return V&&V._cacheable&&(a[n]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Sr(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),o=this._sharedOptions,a=this.getSharedOptions(i),n=this.includeOptions(e,a)||a!==o;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:n}}updateElement(t,e,i,o){Sr(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!Sr(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;let a=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[H,V,c]of this._syncList)this[H](V,c);this._syncList=[];let o=i.length,a=e.length,n=Math.min(a,o);n&&this.parse(0,n),a>o?this._insertElements(o,a-o,t):a<o&&this._removeElements(a,o-a)}_insertElements(t,e,i=!0){let o=this._cachedMeta,a=o.data,n=t+e,H,V=c=>{for(c.length+=e,H=c.length-1;H>=n;H--)c[H]=c[H-e]};for(V(a),H=t;H<n;++H)a[H]=new this.dataElementType;this._parsing&&V(o._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let o=i._parsed.splice(t,e);i._stacked&&p9(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};R(h3,"defaults",{}),R(h3,"datasetElementType",null),R(h3,"dataElementType",null);function du(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let o=0,a=e.length;o<a;o++)i=i.concat(e[o].controller.getAllParsedValues(r));r._cache.$bar=k8(i.sort((o,a)=>o-a))}return r._cache.$bar}function pu(r){let t=r.iScale,e=du(t,r.type),i=t._length,o,a,n,H,V=()=>{n===32767||n===-32768||(t7(H)&&(i=Math.min(i,Math.abs(n-H)||i)),H=n)};for(o=0,a=e.length;o<a;++o)n=t.getPixelForValue(e[o]),V();for(H=void 0,o=0,a=t.ticks.length;o<a;++o)n=t.getPixelForTick(o),V();return i}function uu(r,t,e,i){let o=e.barThickness,a,n;return b1(o)?(a=t.min*e.categoryPercentage,n=e.barPercentage):(a=o*i,n=1),{chunk:a/i,ratio:n,start:t.pixels[r]-a/2}}function hu(r,t,e,i){let o=t.pixels,a=o[r],n=r>0?o[r-1]:null,H=r<o.length-1?o[r+1]:null,V=e.categoryPercentage;n===null&&(n=a-(H===null?t.end-t.start:H-a)),H===null&&(H=a+a-n);let c=a-(a-Math.min(n,H))/2*V;return{chunk:Math.abs(H-n)/2*V/i,ratio:e.barPercentage,start:c}}function mu(r,t,e,i){let o=e.parse(r[0],i),a=e.parse(r[1],i),n=Math.min(o,a),H=Math.max(o,a),V=n,c=H;Math.abs(n)>Math.abs(H)&&(V=H,c=n),t[e.axis]=c,t._custom={barStart:V,barEnd:c,start:o,end:a,min:n,max:H}}function fs(r,t,e,i){return o2(r)?mu(r,t,e,i):t[e.axis]=e.parse(r,i),t}function Zn(r,t,e,i){let o=r.iScale,a=r.vScale,n=o.getLabels(),H=o===a,V=[],c,d,m,A;for(c=e,d=e+i;c<d;++c)A=t[c],m={},m[o.axis]=H||o.parse(n[c],c),V.push(fs(A,m,a,c));return V}function yr(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function fu(r,t,e){return r!==0?F5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Au(r){let t,e,i,o,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(o="end",a="start"):(o="start",a="end"),{start:e,end:i,reverse:t,top:o,bottom:a}}function vu(r,t,e,i){let o=t.borderSkipped,a={};if(!o){r.borderSkipped=a;return}if(o===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:n,end:H,reverse:V,top:c,bottom:d}=Au(r);o==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?o=c:(e._bottom||0)===i?o=d:(a[kn(d,n,H,V)]=!0,o=c)),a[kn(o,n,H,V)]=!0,r.borderSkipped=a}function kn(r,t,e,i){return i?(r=xu(r,t,e),r=On(r,e,t)):r=On(r,t,e),r}function xu(r,t,e){return r===t?e:r===e?t:r}function On(r,t,e){return r==="start"?t:r==="end"?e:r}function gu(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var N0=class extends h3{parsePrimitiveData(t,e,i,o){return Zn(t,e,i,o)}parseArrayData(t,e,i,o){return Zn(t,e,i,o)}parseObjectData(t,e,i,o){let{iScale:a,vScale:n}=t,{xAxisKey:H="x",yAxisKey:V="y"}=this._parsing,c=a.axis==="x"?H:V,d=n.axis==="x"?H:V,m=[],A,g,y,O;for(A=i,g=i+o;A<g;++A)O=e[A],y={},y[a.axis]=a.parse(M3(O,c),A),m.push(fs(M3(O,d),y,n,A));return m}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:o}=e,a=this.getParsed(t),n=a._custom,H=yr(n)?"["+n.start+", "+n.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:H}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){let a=o==="reset",{index:n,_cachedMeta:{vScale:H}}=this,V=H.getBasePixel(),c=H.isHorizontal(),d=this._getRuler(),{sharedOptions:m,includeOptions:A}=this._getSharedOptions(e,o);for(let g=e;g<e+i;g++){let y=this.getParsed(g),O=a||b1(y[H.axis])?{base:V,head:V}:this._calculateBarValuePixels(g),k=this._calculateBarIndexPixels(g,d),T=(y._stacks||{})[H.axis],$={horizontal:c,base:O.base,enableBorderRadius:!T||yr(y._custom)||n===T._top||n===T._bottom,x:c?O.head:k.center,y:c?k.center:O.head,height:c?k.size:Math.abs(O.size),width:c?Math.abs(O.size):k.size};A&&($.options=m||this.resolveDataElementOptions(g,t[g].active?"active":o));let F=$.options||t[g].options;vu($,F,T,n),gu($,F,d.ratio),this.updateElement(t[g],g,$,o)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),a=i.options.stacked,n=[],H=this._cachedMeta.controller.getParsed(e),V=H&&H[i.axis],c=d=>{let m=d._parsed.find(g=>g[i.axis]===V),A=m&&m[d.vScale.axis];if(b1(A)||isNaN(A))return!0};for(let d of o)if(!(e!==void 0&&c(d))&&((a===!1||n.indexOf(d.stack)===-1||a===void 0&&d.stack===void 0)&&n.push(d.stack),d.index===t))break;return n.length||n.push(void 0),n}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[E1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let o=this._getStacks(t,i),a=e!==void 0?o.indexOf(e):-1;return a===-1?o.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,o=[],a,n;for(a=0,n=e.data.length;a<n;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let H=t.barThickness;return{min:H||pu(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:H?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:o},options:{base:a,minBarLength:n}}=this,H=a||0,V=this.getParsed(t),c=V._custom,d=yr(c),m=V[e.axis],A=0,g=i?this.applyStack(e,V,i):m,y,O;g!==m&&(A=g-m,g=m),d&&(m=c.barStart,g=c.barEnd-c.barStart,m!==0&&F5(m)!==F5(c.barEnd)&&(A=0),A+=m);let k=!b1(a)&&!d?a:A,T=e.getPixelForValue(k);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(A+g):y=T,O=y-T,Math.abs(O)<n){O=fu(O,e,H)*n,m===H&&(T-=O/2);let $=e.getPixelForDecimal(0),F=e.getPixelForDecimal(1),K=Math.min($,F),G=Math.max($,F);T=Math.max(Math.min(T,G),K),y=T+O,i&&!d&&(V._stacks[e.axis]._visualValues[o]=e.getValueForPixel(y)-e.getValueForPixel(T))}if(T===e.getPixelForValue(H)){let $=F5(O)*e.getLineWidthForValue(H)/2;T+=$,O-=$}return{size:O,base:T,head:y,center:y+O/2}}_calculateBarIndexPixels(t,e){let i=e.scale,o=this.options,a=o.skipNull,n=E1(o.maxBarThickness,1/0),H,V,c=this._getAxisCount();if(e.grouped){let d=a?this._getStackCount(t):e.stackCount,m=o.barThickness==="flex"?hu(t,e,o,d*c):uu(t,e,o,d*c),A=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(E1(A,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;H=m.start+m.chunk*y+m.chunk/2,V=Math.min(n,m.chunk*m.ratio)}else H=i.getPixelForValue(this.getParsed(t)[i.axis],t),V=Math.min(n,e.min*e.ratio);return{base:H-V/2,head:H+V/2,center:H,size:V}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length,a=0;for(;a<o;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};R(N0,"id","bar"),R(N0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),R(N0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var W0=class extends h3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=e,n=this.chart._animationsDisabled,{start:H,count:V}=Hr(e,o,n);this._drawStart=H,this._drawCount=V,Vr(e)&&(H=0,V=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;let c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!n,options:c},t),this.updateElements(o,H,V,t)}updateElements(t,e,i,o){let a=o==="reset",{iScale:n,vScale:H,_stacked:V,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:m}=this._getSharedOptions(e,o),A=n.axis,g=H.axis,{spanGaps:y,segment:O}=this.options,k=r7(y)?y:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||a||o==="none",$=e+i,F=t.length,K=e>0&&this.getParsed(e-1);for(let G=0;G<F;++G){let l1=t[G],X=T?l1:{};if(G<e||G>=$){X.skip=!0;continue}let e1=this.getParsed(G),o1=b1(e1[g]),h1=X[A]=n.getPixelForValue(e1[A],G),U1=X[g]=a||o1?H.getBasePixel():H.getPixelForValue(V?this.applyStack(H,e1,V):e1[g],G);X.skip=isNaN(h1)||isNaN(U1)||o1,X.stop=G>0&&Math.abs(e1[A]-K[A])>k,O&&(X.parsed=e1,X.raw=c.data[G]),m&&(X.options=d||this.resolveDataElementOptions(G,l1.active?"active":o)),T||this.updateElement(l1,G,X,o),K=e1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;let a=o[0].size(this.resolveDataElementOptions(0)),n=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,n)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};R(W0,"id","line"),R(W0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),R(W0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function o7(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Dr=class r{constructor(t){R(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return o7()}parse(){return o7()}format(){return o7()}add(){return o7()}diff(){return o7()}startOf(){return o7()}endOf(){return o7()}},_u={_date:Dr};function bu(r,t,e,i){let{controller:o,data:a,_sorted:n}=r,H=o._cachedMeta.iScale,V=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(H&&t===H.axis&&t!=="r"&&n&&a.length){let c=H._reversePixels?or:D0;if(i){if(o._sharedOptions){let d=a[0],m=typeof d.getRange=="function"&&d.getRange(t);if(m){let A=c(a,t,e-m),g=c(a,t,e+m);return{lo:A.lo,hi:g.hi}}}}else{let d=c(a,t,e);if(V){let{vScale:m}=o._cachedMeta,{_parsed:A}=r,g=A.slice(0,d.lo+1).reverse().findIndex(O=>!b1(O[m.axis]));d.lo-=Math.max(0,g);let y=A.slice(d.hi).findIndex(O=>!b1(O[m.axis]));d.hi+=Math.max(0,y)}return d}}return{lo:0,hi:a.length-1}}function b9(r,t,e,i,o){let a=r.getSortedVisibleDatasetMetas(),n=e[t];for(let H=0,V=a.length;H<V;++H){let{index:c,data:d}=a[H],{lo:m,hi:A}=bu(a[H],t,n,o);for(let g=m;g<=A;++g){let y=d[g];y.skip||i(y,c,g)}}}function wu(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,o){let a=t?Math.abs(i.x-o.x):0,n=e?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(n,2))}}function Zr(r,t,e,i,o){let a=[];return!o&&!r.isPointInArea(t)||b9(r,e,t,function(H,V,c){!o&&!Q5(H,r.chartArea,0)||H.inRange(t.x,t.y,i)&&a.push({element:H,datasetIndex:V,index:c})},!0),a}function Su(r,t,e,i){let o=[];function a(n,H,V){let{startAngle:c,endAngle:d}=n.getProps(["startAngle","endAngle"],i),{angle:m}=y8(n,{x:t.x,y:t.y});o9(m,c,d)&&o.push({element:n,datasetIndex:H,index:V})}return b9(r,e,t,a),o}function yu(r,t,e,i,o,a){let n=[],H=wu(e),V=Number.POSITIVE_INFINITY;function c(d,m,A){let g=d.inRange(t.x,t.y,o);if(i&&!g)return;let y=d.getCenterPoint(o);if(!(!!a||r.isPointInArea(y))&&!g)return;let k=H(t,y);k<V?(n=[{element:d,datasetIndex:m,index:A}],V=k):k===V&&n.push({element:d,datasetIndex:m,index:A})}return b9(r,e,t,c),n}function kr(r,t,e,i,o,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?Su(r,t,e,o):yu(r,t,e,i,o,a)}function Tn(r,t,e,i,o){let a=[],n=e==="x"?"inXRange":"inYRange",H=!1;return b9(r,e,t,(V,c,d)=>{V[n]&&V[n](t[e],o)&&(a.push({element:V,datasetIndex:c,index:d}),H=H||V.inRange(t.x,t.y,o))}),i&&!H?[]:a}var Zu={evaluateInteractionItems:b9,modes:{index(r,t,e,i){let o=X5(t,r),a=e.axis||"x",n=e.includeInvisible||!1,H=e.intersect?Zr(r,o,a,i,n):kr(r,o,a,!1,i,n),V=[];return H.length?(r.getSortedVisibleDatasetMetas().forEach(c=>{let d=H[0].index,m=c.data[d];m&&!m.skip&&V.push({element:m,datasetIndex:c.index,index:d})}),V):[]},dataset(r,t,e,i){let o=X5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1,H=e.intersect?Zr(r,o,a,i,n):kr(r,o,a,!1,i,n);if(H.length>0){let V=H[0].datasetIndex,c=r.getDatasetMeta(V).data;H=[];for(let d=0;d<c.length;++d)H.push({element:c[d],datasetIndex:V,index:d})}return H},point(r,t,e,i){let o=X5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return Zr(r,o,a,i,n)},nearest(r,t,e,i){let o=X5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return kr(r,o,a,e.intersect,i,n)},x(r,t,e,i){let o=X5(t,r);return Tn(r,o,"x",e.intersect,i)},y(r,t,e,i){let o=X5(t,r);return Tn(r,o,"y",e.intersect,i)}}},As=["left","top","right","bottom"];function u9(r,t){return r.filter(e=>e.pos===t)}function Pn(r,t){return r.filter(e=>As.indexOf(e.pos)===-1&&e.box.axis===t)}function h9(r,t){return r.sort((e,i)=>{let o=t?i:e,a=t?e:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function ku(r){let t=[],e,i,o,a,n,H;for(e=0,i=(r||[]).length;e<i;++e)o=r[e],{position:a,options:{stack:n,stackWeight:H=1}}=o,t.push({index:e,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:n&&a+n,stackWeight:H});return t}function Ou(r){let t={};for(let e of r){let{stack:i,pos:o,stackWeight:a}=e;if(!i||!As.includes(o))continue;let n=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});n.count++,n.weight+=a}return t}function Tu(r,t){let e=Ou(r),{vBoxMaxWidth:i,hBoxMaxHeight:o}=t,a,n,H;for(a=0,n=r.length;a<n;++a){H=r[a];let{fullSize:V}=H.box,c=e[H.stack],d=c&&H.stackWeight/c.weight;H.horizontal?(H.width=d?d*i:V&&t.availableWidth,H.height=o):(H.width=i,H.height=d?d*o:V&&t.availableHeight)}return e}function Pu(r){let t=ku(r),e=h9(t.filter(c=>c.box.fullSize),!0),i=h9(u9(t,"left"),!0),o=h9(u9(t,"right")),a=h9(u9(t,"top"),!0),n=h9(u9(t,"bottom")),H=Pn(t,"x"),V=Pn(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:o.concat(V).concat(n).concat(H),chartArea:u9(t,"chartArea"),vertical:i.concat(o).concat(V),horizontal:a.concat(n).concat(H)}}function En(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function vs(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function Eu(r,t,e,i){let{pos:o,box:a}=e,n=r.maxPadding;if(!S1(o)){e.size&&(r[o]-=e.size);let m=i[e.stack]||{size:0,count:1};m.size=Math.max(m.size,e.horizontal?a.height:a.width),e.size=m.size/m.count,r[o]+=e.size}a.getPadding&&vs(n,a.getPadding());let H=Math.max(0,t.outerWidth-En(n,r,"left","right")),V=Math.max(0,t.outerHeight-En(n,r,"top","bottom")),c=H!==r.w,d=V!==r.h;return r.w=H,r.h=V,e.horizontal?{same:c,other:d}:{same:d,other:c}}function $u(r){let t=r.maxPadding;function e(i){let o=Math.max(t[i]-r[i],0);return r[i]+=o,o}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function Fu(r,t){let e=t.maxPadding;function i(o){let a={left:0,top:0,right:0,bottom:0};return o.forEach(n=>{a[n]=Math.max(t[n],e[n])}),a}return i(r?["left","right"]:["top","bottom"])}function A9(r,t,e,i){let o=[],a,n,H,V,c,d;for(a=0,n=r.length,c=0;a<n;++a){H=r[a],V=H.box,V.update(H.width||t.w,H.height||t.h,Fu(H.horizontal,t));let{same:m,other:A}=Eu(t,e,H,i);c|=m&&o.length,d=d||A,V.fullSize||o.push(H)}return c&&A9(o,t,e,i)||d}function G8(r,t,e,i,o){r.top=e,r.left=t,r.right=t+i,r.bottom=e+o,r.width=i,r.height=o}function $n(r,t,e,i){let o=e.padding,{x:a,y:n}=t;for(let H of r){let V=H.box,c=i[H.stack]||{count:1,placed:0,weight:1},d=H.stackWeight/c.weight||1;if(H.horizontal){let m=t.w*d,A=c.size||V.height;t7(c.start)&&(n=c.start),V.fullSize?G8(V,o.left,n,e.outerWidth-o.right-o.left,A):G8(V,t.left+c.placed,n,m,A),c.start=n,c.placed+=m,n=V.bottom}else{let m=t.h*d,A=c.size||V.width;t7(c.start)&&(a=c.start),V.fullSize?G8(V,a,o.top,A,e.outerHeight-o.bottom-o.top):G8(V,a,t.top+c.placed,A,m),c.start=a,c.placed+=m,a=V.right}}t.x=a,t.y=n}var q8={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let o=G2(r.options.layout.padding),a=Math.max(t-o.width,0),n=Math.max(e-o.height,0),H=Pu(r.boxes),V=H.vertical,c=H.horizontal;W1(r.boxes,O=>{typeof O.beforeLayout=="function"&&O.beforeLayout()});let d=V.reduce((O,k)=>k.box.options&&k.box.options.display===!1?O:O+1,0)||1,m=Object.freeze({outerWidth:t,outerHeight:e,padding:o,availableWidth:a,availableHeight:n,vBoxMaxWidth:a/2/d,hBoxMaxHeight:n/2}),A=Object.assign({},o);vs(A,G2(i));let g=Object.assign({maxPadding:A,w:a,h:n,x:o.left,y:o.top},o),y=Tu(V.concat(c),m);A9(H.fullSize,g,m,y),A9(V,g,m,y),A9(c,g,m,y)&&A9(V,g,m,y),$u(g),$n(H.leftAndTop,g,m,y),g.x+=g.w,g.y+=g.h,$n(H.rightAndBottom,g,m,y),r.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},W1(H.chartArea,O=>{let k=O.box;Object.assign(k,r.chartArea),k.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}},ot=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}},Br=class extends ot{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},et="$chartjs",Ru={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Fn=r=>r===null||r==="";function Du(r,t){let e=r.style,i=r.getAttribute("height"),o=r.getAttribute("width");if(r[et]={initial:{height:i,width:o,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Fn(o)){let a=N8(r,"width");a!==void 0&&(r.width=a)}if(Fn(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=N8(r,"height");a!==void 0&&(r.height=a)}return r}var xs=fr?{passive:!0}:!1;function Bu(r,t,e){r&&r.addEventListener(t,e,xs)}function zu(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,xs)}function Iu(r,t){let e=Ru[r.type]||r.type,{x:i,y:o}=X5(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:o!==void 0?o:null}}function Ct(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function Nu(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let H of a)n=n||Ct(H.addedNodes,i),n=n&&!Ct(H.removedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}function Wu(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let H of a)n=n||Ct(H.removedNodes,i),n=n&&!Ct(H.addedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}var g9=new Map,Rn=0;function gs(){let r=window.devicePixelRatio;r!==Rn&&(Rn=r,g9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function Uu(r,t){g9.size||window.addEventListener("resize",gs),g9.set(r,t)}function ju(r){g9.delete(r),g9.size||window.removeEventListener("resize",gs)}function Gu(r,t,e){let i=r.canvas,o=i&&M9(i);if(!o)return;let a=T8((H,V)=>{let c=o.clientWidth;e(H,V),c<o.clientWidth&&e()},window),n=new ResizeObserver(H=>{let V=H[0],c=V.contentRect.width,d=V.contentRect.height;c===0&&d===0||a(c,d)});return n.observe(o),Uu(r,a),n}function Or(r,t,e){e&&e.disconnect(),t==="resize"&&ju(r)}function qu(r,t,e){let i=r.canvas,o=T8(a=>{r.ctx!==null&&e(Iu(a,r))},r);return Bu(i,t,o),o}var zr=class extends ot{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(Du(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[et])return!1;let i=e[et].initial;["height","width"].forEach(a=>{let n=i[a];b1(n)?e.removeAttribute(a):e.setAttribute(a,n)});let o=i.style||{};return Object.keys(o).forEach(a=>{e.style[a]=o[a]}),e.width=e.width,delete e[et],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let o=t.$proxies||(t.$proxies={}),n={attach:Nu,detach:Wu,resize:Gu}[e]||qu;o[e]=n(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),o=i[e];if(!o)return;({attach:Or,detach:Or,resize:Or}[e]||zu)(t,e,o),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return mr(t,e,i,o)}isAttached(t){let e=t&&M9(t);return!!(e&&e.isConnected)}};function Yu(r){return!c9()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?Br:zr}var e0=class{constructor(){R(this,"x");R(this,"y");R(this,"active",!1);R(this,"options");R(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return r7(this.x)&&r7(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let o={};return t.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}};R(e0,"defaults",{}),R(e0,"defaultRoutes");function Qu(r,t){let e=r.options.ticks,i=Ku(r),o=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?Ju(t):[],n=a.length,H=a[0],V=a[n-1],c=[];if(n>o)return th(t,c,a,n/o),c;let d=Xu(a,t,o);if(n>0){let m,A,g=n>1?Math.round((V-H)/(n-1)):null;for(Y8(t,c,d,b1(g)?0:H-g,H),m=0,A=n-1;m<A;m++)Y8(t,c,d,a[m],a[m+1]);return Y8(t,c,d,V,b1(g)?t.length:V+g),c}return Y8(t,c,d),c}function Ku(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),o=r._maxLength/e;return Math.floor(Math.min(i,o))}function Xu(r,t,e){let i=eh(r),o=t.length/e;if(!i)return Math.max(o,1);let a=er(i);for(let n=0,H=a.length-1;n<H;n++){let V=a[n];if(V>o)return V}return Math.max(o,1)}function Ju(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function th(r,t,e,i){let o=0,a=e[0],n;for(i=Math.ceil(i),n=0;n<r.length;n++)n===a&&(t.push(r[n]),o++,a=e[o*i])}function Y8(r,t,e,i,o){let a=E1(i,0),n=Math.min(E1(o,r.length),r.length),H=0,V,c,d;for(e=Math.ceil(e),o&&(V=o-i,e=V/Math.floor(V/e)),d=a;d<0;)H++,d=Math.round(a+H*e);for(c=Math.max(a,0);c<n;c++)c===d&&(t.push(r[c]),H++,d=Math.round(a+H*e))}function eh(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var rh=r=>r==="left"?"right":r==="right"?"left":r,Dn=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,Bn=(r,t)=>Math.min(t||r,r);function zn(r,t){let e=[],i=r.length/t,o=r.length,a=0;for(;a<o;a+=i)e.push(r[Math.floor(a)]);return e}function ih(r,t,e){let i=r.ticks.length,o=Math.min(t,i-1),a=r._startPixel,n=r._endPixel,H=1e-6,V=r.getPixelForTick(o),c;if(!(e&&(i===1?c=Math.max(V-a,n-V):t===0?c=(r.getPixelForTick(1)-V)/2:c=(V-r.getPixelForTick(o-1))/2,V+=o<t?c:-c,V<a-H||V>n+H)))return V}function oh(r,t){W1(r,e=>{let i=e.gc,o=i.length/2,a;if(o>t){for(a=0;a<o;++a)delete e.data[i[a]];i.splice(0,o)}})}function m9(r){return r.drawTicks?r.tickLength:0}function In(r,t){if(!r.display)return 0;let e=I2(r.font,t),i=G2(r.padding);return(o2(r.text)?r.text.length:1)*e.lineHeight+i.height}function Ch(r,t){return A0(r,{scale:t,type:"scale"})}function ah(r,t,e){return A0(r,{tick:e,index:t,type:"tick"})}function nh(r,t,e){let i=sr(r);return(e&&t!=="right"||!e&&t==="right")&&(i=rh(i)),i}function sh(r,t,e,i){let{top:o,left:a,bottom:n,right:H,chart:V}=r,{chartArea:c,scales:d}=V,m=0,A,g,y,O=n-o,k=H-a;if(r.isHorizontal()){if(g=P8(i,a,H),S1(e)){let T=Object.keys(e)[0],$=e[T];y=d[T].getPixelForValue($)+O-t}else e==="center"?y=(c.bottom+c.top)/2+O-t:y=Dn(r,e,t);A=H-a}else{if(S1(e)){let T=Object.keys(e)[0],$=e[T];g=d[T].getPixelForValue($)-k+t}else e==="center"?g=(c.left+c.right)/2-k+t:g=Dn(r,e,t);y=P8(i,n,o),m=e==="left"?-f2:f2}return{titleX:g,titleY:y,maxWidth:A,rotation:m}}var a7=class r extends e0{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=r5(t,Number.POSITIVE_INFINITY),e=r5(e,Number.NEGATIVE_INFINITY),i=r5(i,Number.POSITIVE_INFINITY),o=r5(o,Number.NEGATIVE_INFINITY),{min:r5(t,i),max:r5(e,o),minDefined:V2(t),maxDefined:V2(e)}}getMinMax(t){let{min:e,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),n;if(o&&a)return{min:e,max:i};let H=this.getMatchingVisibleMetas();for(let V=0,c=H.length;V<c;++V)n=H[V].controller.getMinMax(this,t),o||(e=Math.min(e,n.min)),a||(i=Math.max(i,n.max));return e=a&&e>i?i:e,i=o&&e>i?e:i,{min:r5(e,r5(i,e)),max:r5(i,r5(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){r2(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:o,grace:a,ticks:n}=this.options,H=n.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=dr(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let V=H<this.ticks.length;this._convertTicksToLabels(V?zn(this.ticks,H):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),n.display&&(n.autoSkip||n.source==="auto")&&(this.ticks=Qu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),V&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){r2(this.options.afterUpdate,[this])}beforeSetDimensions(){r2(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){r2(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),r2(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){r2(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,o,a;for(i=0,o=t.length;i<o;i++)a=t[i],a.label=r2(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){r2(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){r2(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=Bn(this.ticks.length,t.ticks.maxTicksLimit),o=e.minRotation||0,a=e.maxRotation,n=o,H,V,c;if(!this._isVisible()||!e.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}let d=this._getLabelSizes(),m=d.widest.width,A=d.highest.height,g=T2(this.chart.width-m,0,this.maxWidth);H=t.offset?this.maxWidth/i:g/(i-1),m+6>H&&(H=g/(i-(t.offset?.5:1)),V=this.maxHeight-m9(t.grid)-e.padding-In(t.title,this.chart.options.font),c=Math.sqrt(m*m+A*A),n=i9(Math.min(Math.asin(T2((d.highest.height+6)/H,-1,1)),Math.asin(T2(V/c,-1,1))-Math.asin(T2(A/c,-1,1)))),n=Math.max(o,Math.min(a,n))),this.labelRotation=n}afterCalculateLabelRotation(){r2(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){r2(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:a}}=this,n=this._isVisible(),H=this.isHorizontal();if(n){let V=In(o,e.options.font);if(H?(t.width=this.maxWidth,t.height=m9(a)+V):(t.height=this.maxHeight,t.width=m9(a)+V),i.display&&this.ticks.length){let{first:c,last:d,widest:m,highest:A}=this._getLabelSizes(),g=i.padding*2,y=f0(this.labelRotation),O=Math.cos(y),k=Math.sin(y);if(H){let T=i.mirror?0:k*m.width+O*A.height;t.height=Math.min(this.maxHeight,t.height+T+g)}else{let T=i.mirror?0:O*m.width+k*A.height;t.width=Math.min(this.maxWidth,t.width+T+g)}this._calculatePadding(c,d,k,O)}}this._handleMargins(),H?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){let{ticks:{align:a,padding:n},position:H}=this.options,V=this.labelRotation!==0,c=H!=="top"&&this.axis==="x";if(this.isHorizontal()){let d=this.getPixelForTick(0)-this.left,m=this.right-this.getPixelForTick(this.ticks.length-1),A=0,g=0;V?c?(A=o*t.width,g=i*e.height):(A=i*t.height,g=o*e.width):a==="start"?g=e.width:a==="end"?A=t.width:a!=="inner"&&(A=t.width/2,g=e.width/2),this.paddingLeft=Math.max((A-d+n)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-m+n)*this.width/(this.width-m),0)}else{let d=e.height/2,m=t.height/2;a==="start"?(d=0,m=t.height):a==="end"&&(d=e.height,m=0),this.paddingTop=d+n,this.paddingBottom=m+n}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){r2(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)b1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=zn(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:o,_longestTextCache:a}=this,n=[],H=[],V=Math.floor(e/Bn(e,i)),c=0,d=0,m,A,g,y,O,k,T,$,F,K,G;for(m=0;m<e;m+=V){if(y=t[m].label,O=this._resolveTickFontOptions(m),o.font=k=O.string,T=a[k]=a[k]||{data:{},gc:[]},$=O.lineHeight,F=K=0,!b1(y)&&!o2(y))F=q7(o,T.data,T.gc,F,y),K=$;else if(o2(y))for(A=0,g=y.length;A<g;++A)G=y[A],!b1(G)&&!o2(G)&&(F=q7(o,T.data,T.gc,F,G),K+=$);n.push(F),H.push(K),c=Math.max(F,c),d=Math.max(K,d)}oh(a,e);let l1=n.indexOf(c),X=H.indexOf(d),e1=o1=>({width:n[o1]||0,height:H[o1]||0});return{first:e1(0),last:e1(e-1),widest:e1(l1),highest:e1(X),widths:n,heights:H}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return ir(this._alignToPixels?B0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=ah(this.getContext(),t,i))}return this.$context||(this.$context=Ch(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=f0(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),a=this._getLabelSizes(),n=t.autoSkipPadding||0,H=a?a.widest.width+n:0,V=a?a.highest.height+n:0;return this.isHorizontal()?V*i>H*o?H/i:V/o:V*o<H*i?V/i:H/o}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,o=this.options,{grid:a,position:n,border:H}=o,V=a.offset,c=this.isHorizontal(),m=this.ticks.length+(V?1:0),A=m9(a),g=[],y=H.setContext(this.getContext()),O=y.display?y.width:0,k=O/2,T=function(J){return B0(i,J,O)},$,F,K,G,l1,X,e1,o1,h1,U1,y1,l2;if(n==="top")$=T(this.bottom),X=this.bottom-A,o1=$-k,U1=T(t.top)+k,l2=t.bottom;else if(n==="bottom")$=T(this.top),U1=t.top,l2=T(t.bottom)-k,X=$+k,o1=this.top+A;else if(n==="left")$=T(this.right),l1=this.right-A,e1=$-k,h1=T(t.left)+k,y1=t.right;else if(n==="right")$=T(this.left),h1=t.left,y1=T(t.right)-k,l1=$+k,e1=this.left+A;else if(e==="x"){if(n==="center")$=T((t.top+t.bottom)/2+.5);else if(S1(n)){let J=Object.keys(n)[0],X1=n[J];$=T(this.chart.scales[J].getPixelForValue(X1))}U1=t.top,l2=t.bottom,X=$+k,o1=X+A}else if(e==="y"){if(n==="center")$=T((t.left+t.right)/2);else if(S1(n)){let J=Object.keys(n)[0],X1=n[J];$=T(this.chart.scales[J].getPixelForValue(X1))}l1=$-k,e1=l1-A,h1=t.left,y1=t.right}let K1=E1(o.ticks.maxTicksLimit,m),Z1=Math.max(1,Math.ceil(m/K1));for(F=0;F<m;F+=Z1){let J=this.getContext(F),X1=a.setContext(J),n1=H.setContext(J),U=X1.lineWidth,r1=X1.color,s1=n1.dash||[],m1=n1.dashOffset,V1=X1.tickWidth,L1=X1.tickColor,g1=X1.tickBorderDash||[],k1=X1.tickBorderDashOffset;K=ih(this,F,V),K!==void 0&&(G=B0(i,K,U),c?l1=e1=h1=y1=G:X=o1=U1=l2=G,g.push({tx1:l1,ty1:X,tx2:e1,ty2:o1,x1:h1,y1:U1,x2:y1,y2:l2,width:U,color:r1,borderDash:s1,borderDashOffset:m1,tickWidth:V1,tickColor:L1,tickBorderDash:g1,tickBorderDashOffset:k1}))}return this._ticksLength=m,this._borderValue=$,g}_computeLabelItems(t){let e=this.axis,i=this.options,{position:o,ticks:a}=i,n=this.isHorizontal(),H=this.ticks,{align:V,crossAlign:c,padding:d,mirror:m}=a,A=m9(i.grid),g=A+d,y=m?-d:g,O=-f0(this.labelRotation),k=[],T,$,F,K,G,l1,X,e1,o1,h1,U1,y1,l2="middle";if(o==="top")l1=this.bottom-y,X=this._getXAxisLabelAlignment();else if(o==="bottom")l1=this.top+y,X=this._getXAxisLabelAlignment();else if(o==="left"){let Z1=this._getYAxisLabelAlignment(A);X=Z1.textAlign,G=Z1.x}else if(o==="right"){let Z1=this._getYAxisLabelAlignment(A);X=Z1.textAlign,G=Z1.x}else if(e==="x"){if(o==="center")l1=(t.top+t.bottom)/2+g;else if(S1(o)){let Z1=Object.keys(o)[0],J=o[Z1];l1=this.chart.scales[Z1].getPixelForValue(J)+g}X=this._getXAxisLabelAlignment()}else if(e==="y"){if(o==="center")G=(t.left+t.right)/2-g;else if(S1(o)){let Z1=Object.keys(o)[0],J=o[Z1];G=this.chart.scales[Z1].getPixelForValue(J)}X=this._getYAxisLabelAlignment(A).textAlign}e==="y"&&(V==="start"?l2="top":V==="end"&&(l2="bottom"));let K1=this._getLabelSizes();for(T=0,$=H.length;T<$;++T){F=H[T],K=F.label;let Z1=a.setContext(this.getContext(T));e1=this.getPixelForTick(T)+a.labelOffset,o1=this._resolveTickFontOptions(T),h1=o1.lineHeight,U1=o2(K)?K.length:1;let J=U1/2,X1=Z1.color,n1=Z1.textStrokeColor,U=Z1.textStrokeWidth,r1=X;n?(G=e1,X==="inner"&&(T===$-1?r1=this.options.reverse?"left":"right":T===0?r1=this.options.reverse?"right":"left":r1="center"),o==="top"?c==="near"||O!==0?y1=-U1*h1+h1/2:c==="center"?y1=-K1.highest.height/2-J*h1+h1:y1=-K1.highest.height+h1/2:c==="near"||O!==0?y1=h1/2:c==="center"?y1=K1.highest.height/2-J*h1:y1=K1.highest.height-U1*h1,m&&(y1*=-1),O!==0&&!Z1.showLabelBackdrop&&(G+=h1/2*Math.sin(O))):(l1=e1,y1=(1-U1)*h1/2);let s1;if(Z1.showLabelBackdrop){let m1=G2(Z1.backdropPadding),V1=K1.heights[T],L1=K1.widths[T],g1=y1-m1.top,k1=0-m1.left;switch(l2){case"middle":g1-=V1/2;break;case"bottom":g1-=V1;break}switch(X){case"center":k1-=L1/2;break;case"right":k1-=L1;break;case"inner":T===$-1?k1-=L1:T>0&&(k1-=L1/2);break}s1={left:k1,top:g1,width:L1+m1.width,height:V1+m1.height,color:Z1.backdropColor}}k.push({label:K,font:o1,textOffset:y1,options:{rotation:O,color:X1,strokeColor:n1,strokeWidth:U,textAlign:r1,textBaseline:l2,translation:[G,l1],backdrop:s1}})}return k}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-f0(this.labelRotation))return t==="top"?"left":"right";let o="center";return e.align==="start"?o="left":e.align==="end"?o="right":e.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,n=this._getLabelSizes(),H=t+a,V=n.widest.width,c,d;return e==="left"?o?(d=this.right+a,i==="near"?c="left":i==="center"?(c="center",d+=V/2):(c="right",d+=V)):(d=this.right-H,i==="near"?c="right":i==="center"?(c="center",d-=V/2):(c="left",d=this.left)):e==="right"?o?(d=this.left+a,i==="near"?c="right":i==="center"?(c="center",d-=V/2):(c="left",d-=V)):(d=this.left+H,i==="near"?c="left":i==="center"?(c="center",d+=V/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:o,width:a,height:n}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,a,n),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let o=this.ticks.findIndex(a=>a.value===t);return o>=0?e.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,n,H=(V,c,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(V.x,V.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(e.display)for(a=0,n=o.length;a<n;++a){let V=o[a];e.drawOnChartArea&&H({x:V.x1,y:V.y1},{x:V.x2,y:V.y2},V),e.drawTicks&&H({x:V.tx1,y:V.ty1},{x:V.tx2,y:V.ty2},{color:V.tickColor,width:V.tickWidth,borderDash:V.tickBorderDash,borderDashOffset:V.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),n=i.display?a.width:0;if(!n)return;let H=o.setContext(this.getContext(0)).lineWidth,V=this._borderValue,c,d,m,A;this.isHorizontal()?(c=B0(t,this.left,n)-n/2,d=B0(t,this.right,H)+H/2,m=A=V):(m=B0(t,this.top,n)-n/2,A=B0(t,this.bottom,H)+H/2,c=d=V),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(c,m),e.lineTo(d,A),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,o=this._computeLabelArea();o&&H9(i,o);let a=this.getLabelItems(t);for(let n of a){let H=n.options,V=n.font,c=n.label,d=n.textOffset;K7(i,c,0,d,V,H)}o&&V9(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;let a=I2(i.font),n=G2(i.padding),H=i.align,V=a.lineHeight/2;e==="bottom"||e==="center"||S1(e)?(V+=n.bottom,o2(i.text)&&(V+=a.lineHeight*(i.text.length-1))):V+=n.top;let{titleX:c,titleY:d,maxWidth:m,rotation:A}=sh(this,V,e,H);K7(t,i.text,0,0,a,{color:i.color,maxWidth:m,rotation:A,textAlign:nh(H,e,o),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=E1(t.grid&&t.grid.z,-1),o=E1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[],a,n;for(a=0,n=e.length;a<n;++a){let H=e[a];H[i]===this.id&&(!t||H.type===t)&&o.push(H)}return o}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return I2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},e4=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;Lh(e)&&(i=this.register(e));let o=this.items,a=t.id,n=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in o||(o[a]=t,Hh(t,n,i),this.override&&L2.override(t.id,t.overrides)),n}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in L2[o]&&(delete L2[o][i],this.override&&delete d3[i])}};function Hh(r,t,e){let i=f5(Object.create(null),[e?L2.get(e):{},L2.get(t),r.defaults]);L2.set(t,i),r.defaultRoutes&&Vh(t,r.defaultRoutes),r.descriptors&&L2.describe(t,r.descriptors)}function Vh(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),o=i.pop(),a=[r].concat(i).join("."),n=t[e].split("."),H=n.pop(),V=n.join(".");L2.route(a,o,V,H)})}function Lh(r){return"id"in r&&"defaults"in r}var Ir=class{constructor(){this.controllers=new e4(h3,"datasets",!0),this.elements=new e4(e0,"elements"),this.plugins=new e4(Object,"plugins"),this.scales=new e4(a7,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(o=>{let a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(t,a,o):W1(o,n=>{let H=i||this._getRegistryForType(n);this._exec(t,H,n)})})}_exec(t,e,i){let o=r9(t);r2(i["before"+o],[],i),e[t](i),r2(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let o=e.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return o}},x0=new Ir,Nr=class{constructor(){this._init=void 0}notify(t,e,i,o){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=o?this._descriptors(t).filter(o):this._descriptors(t),n=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),n}_notify(t,e,i,o){o=o||{};for(let a of t){let n=a.plugin,H=n[i],V=[e,o,a.options];if(r2(H,V,n)===!1&&o.cancelable)return!1}return!0}invalidate(){b1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,o=E1(i.options&&i.options.plugins,{}),a=lh(i);return o===!1&&!e?[]:Mh(t,a,o,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,o=(a,n)=>a.filter(H=>!n.some(V=>H.plugin.id===V.plugin.id));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}};function lh(r){let t={},e=[],i=Object.keys(x0.plugins.items);for(let a=0;a<i.length;a++)e.push(x0.getPlugin(i[a]));let o=r.plugins||[];for(let a=0;a<o.length;a++){let n=o[a];e.indexOf(n)===-1&&(e.push(n),t[n.id]=!0)}return{plugins:e,localIds:t}}function ch(r,t){return!t&&r===!1?null:r===!0?{}:r}function Mh(r,{plugins:t,localIds:e},i,o){let a=[],n=r.getContext();for(let H of t){let V=H.id,c=ch(i[V],o);c!==null&&a.push({plugin:H,options:dh(r.config,{plugin:H,local:e[V]},c,n)})}return a}function dh(r,{plugin:t,local:e},i,o){let a=r.pluginScopeKeys(t),n=r.getOptionScopes(i,a);return e&&t.defaults&&n.push(t.defaults),r.createResolver(n,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Wr(r,t){let e=L2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function ph(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function uh(r,t){return r===t?"_index_":"_value_"}function Nn(r){if(r==="x"||r==="y"||r==="r")return r}function hh(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function Ur(r,...t){if(Nn(r))return r;for(let e of t){let i=e.axis||hh(e.position)||r.length>1&&Nn(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function Wn(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function mh(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return Wn(r,"x",e[0])||Wn(r,"y",e[0])}return{}}function fh(r,t){let e=d3[r.type]||{scales:{}},i=t.scales||{},o=Wr(r.type,t),a=Object.create(null);return Object.keys(i).forEach(n=>{let H=i[n];if(!S1(H))return console.error(`Invalid scale configuration for scale: ${n}`);if(H._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${n}`);let V=Ur(n,H,mh(n,r),L2.scales[H.type]),c=uh(V,o),d=e.scales||{};a[n]=J3(Object.create(null),[{axis:V},H,d[V],d[c]])}),r.data.datasets.forEach(n=>{let H=n.type||r.type,V=n.indexAxis||Wr(H,t),d=(d3[H]||{}).scales||{};Object.keys(d).forEach(m=>{let A=ph(m,V),g=n[A+"AxisID"]||A;a[g]=a[g]||Object.create(null),J3(a[g],[{axis:A},i[g],d[m]])})}),Object.keys(a).forEach(n=>{let H=a[n];J3(H,[L2.scales[H.type],L2.scale])}),a}function _s(r){let t=r.options||(r.options={});t.plugins=E1(t.plugins,{}),t.scales=fh(r,t)}function bs(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function Ah(r){return r=r||{},r.data=bs(r.data),_s(r),r}var Un=new Map,ws=new Set;function Q8(r,t){let e=Un.get(r);return e||(e=t(),Un.set(r,e),ws.add(e)),e}var f9=(r,t,e)=>{let i=M3(t,e);i!==void 0&&r.add(i)},jr=class{constructor(t){this._config=Ah(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=bs(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),_s(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Q8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Q8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Q8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return Q8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,o=i.get(t);return(!o||e)&&(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){let{options:o,type:a}=this,n=this._cachedScopes(t,i),H=n.get(e);if(H)return H;let V=new Set;e.forEach(d=>{t&&(V.add(t),d.forEach(m=>f9(V,t,m))),d.forEach(m=>f9(V,o,m)),d.forEach(m=>f9(V,d3[a]||{},m)),d.forEach(m=>f9(V,L2,m)),d.forEach(m=>f9(V,F8,m))});let c=Array.from(V);return c.length===0&&c.push(Object.create(null)),ws.has(e)&&n.set(e,c),c}chartOptionScopes(){let{options:t,type:e}=this;return[t,d3[e]||{},L2.datasets[e]||{},{type:e},L2,F8]}resolveNamedOptions(t,e,i,o=[""]){let a={$shared:!0},{resolver:n,subPrefixes:H}=jn(this._resolverCache,t,o),V=n;if(xh(n,e)){a.$shared=!1,i=h0(i)?i():i;let c=this.createResolver(t,i,H);V=c3(n,i,c)}for(let c of e)a[c]=V[c];return a}createResolver(t,e,i=[""],o){let{resolver:a}=jn(this._resolverCache,t,i);return S1(e)?c3(a,e,void 0,o):a}};function jn(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let o=e.join(),a=i.get(o);return a||(a={resolver:l9(t,e),subPrefixes:e.filter(H=>!H.toLowerCase().includes("hover"))},i.set(o,a)),a}var vh=r=>S1(r)&&Object.getOwnPropertyNames(r).some(t=>h0(r[t]));function xh(r,t){let{isScriptable:e,isIndexable:i}=B8(r);for(let o of t){let a=e(o),n=i(o),H=(n||a)&&r[o];if(a&&(h0(H)||vh(H))||n&&o2(H))return!0}return!1}var gh="4.5.1",_h=["top","bottom","left","right","chartArea"];function Gn(r,t){return r==="top"||r==="bottom"||_h.indexOf(r)===-1&&t==="x"}function qn(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function Yn(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),r2(e&&e.onComplete,[r],t)}function bh(r){let t=r.chart,e=t.options.animation;r2(e&&e.onProgress,[r],t)}function Ss(r){return c9()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var rt={},Qn=r=>{let t=Ss(r);return Object.values(rt).filter(e=>e.canvas===t).pop()};function wh(r,t,e){let i=Object.keys(r);for(let o of i){let a=+o;if(a>=t){let n=r[o];delete r[o],(e>0||a>t)&&(r[a+e]=n)}}}function Sh(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var P2=class{static register(...t){x0.add(...t),Kn()}static unregister(...t){x0.remove(...t),Kn()}constructor(t,e){let i=this.config=new jr(e),o=Ss(t),a=Qn(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let n=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Yu(o)),this.platform.updateConfig(i);let H=this.platform.acquireContext(o,n.aspectRatio),V=H&&H.canvas,c=V&&V.height,d=V&&V.width;if(this.id=Xe(),this.ctx=H,this.canvas=V,this.width=d,this.height=c,this._options=n,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Nr,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=nr(m=>this.update(m),n.resizeDelay||0),this._dataChanges=[],rt[this.id]=this,!H||!V){console.error("Failed to create chart: can't acquire context from the given item");return}z0.listen(this,"complete",Yn),z0.listen(this,"progress",bh),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:a}=this;return b1(t)?e&&a?a:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return x0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():I8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return R8(this.canvas,this.ctx),this}stop(){return z0.stop(this),this}resize(t,e){z0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,n=this.platform.getMaximumSize(o,t,e,a),H=i.devicePixelRatio||this.platform.getDevicePixelRatio(),V=this.width?"resize":"attach";this.width=n.width,this.height=n.height,this._aspectRatio=this.aspectRatio,I8(this,H,!0)&&(this.notifyPlugins("resize",{size:n}),r2(i.onResize,[this,n],this),this.attached&&this._doResize(V)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};W1(e,(i,o)=>{i.id=o})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce((n,H)=>(n[H]=!1,n),{}),a=[];e&&(a=a.concat(Object.keys(e).map(n=>{let H=e[n],V=Ur(n,H),c=V==="r",d=V==="x";return{options:H,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),W1(a,n=>{let H=n.options,V=H.id,c=Ur(V,H),d=E1(H.type,n.dtype);(H.position===void 0||Gn(H.position,c)!==Gn(n.dposition))&&(H.position=n.dposition),o[V]=!0;let m=null;if(V in i&&i[V].type===d)m=i[V];else{let A=x0.getScale(d);m=new A({id:V,type:d,ctx:this.ctx,chart:this}),i[m.id]=m}m.init(H,t)}),W1(o,(n,H)=>{n||delete i[H]}),W1(i,n=>{q8.configure(this,n,n.options),q8.addBox(this,n)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((o,a)=>o.index-a.index),i>e){for(let o=e;o<i;++o)this._destroyDatasetMeta(o);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(qn("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,o)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){let a=e[i],n=this.getDatasetMeta(i),H=a.type||this.config.type;if(n.type&&n.type!==H&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=H,n.indexAxis=a.indexAxis||Wr(H,this.options),n.order=a.order||0,n.index=i,n.label=""+a.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{let V=x0.getController(H),{datasetElementType:c,dataElementType:d}=L2.datasets[H];Object.assign(V,{dataElementType:x0.getElement(d),datasetElementType:c&&x0.getElement(c)}),n.controller=new V(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){W1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let n=0;for(let c=0,d=this.data.datasets.length;c<d;c++){let{controller:m}=this.getDatasetMeta(c),A=!o&&a.indexOf(m)===-1;m.buildOrUpdateElements(A),n=Math.max(+m.getMaxOverflow(),n)}n=this._minPadding=i.layout.autoPadding?n:0,this._updateLayout(n),o||W1(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(qn("z","_idx"));let{_active:H,_lastEvent:V}=this;V?this._eventHandler(V,!0):H.length&&this._updateHoverStyles(H,H,!0),this.render()}_updateScales(){W1(this.scales,t=>{q8.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!_8(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:o,count:a}of e){let n=i==="_removeElements"?-a:a;wh(t,o,n)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(n=>n[0]===a).map((n,H)=>H+","+n.splice(1).join(","))),o=i(0);for(let a=1;a<e;a++)if(!_8(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;q8.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],W1(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,h0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(z0.has(this)?this.attached&&!z0.running(this)&&z0.start(this):(this.draw(),Yn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],o,a;for(o=0,a=e.length;o<a;++o){let n=e[o];(!t||n.visible)&&i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},o=j8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&H9(e,o),t.controller.draw(),o&&V9(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return Q5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,o){let a=Zu.modes[e];return typeof a=="function"?a(this,t,i,o):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,o=i.filter(a=>a&&a._dataset===e).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=A0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let o=i?"show":"hide",a=this.getDatasetMeta(t),n=a.controller._resolveAnimations(void 0,o);t7(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),n.update(a,{visible:i}),this.update(H=>H.datasetIndex===t?o:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),z0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),R8(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete rt[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,n)=>{e.addEventListener(this,a,n),t[a]=n},o=(a,n,H)=>{a.offsetX=n,a.offsetY=H,this._eventHandler(a)};W1(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(V,c)=>{e.addEventListener(this,V,c),t[V]=c},o=(V,c)=>{t[V]&&(e.removeEventListener(this,V,c),delete t[V])},a=(V,c)=>{this.canvas&&this.resize(V,c)},n,H=()=>{o("attach",H),this.attached=!0,this.resize(),i("resize",a),i("detach",n)};n=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",H)},e.isAttached(this.canvas)?H():n()}unbindEvents(){W1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},W1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let o=i?"set":"remove",a,n,H,V;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),H=0,V=t.length;H<V;++H){n=t[H];let c=n&&this.getDatasetMeta(n.datasetIndex).controller;c&&c[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:n})=>{let H=this.getDatasetMeta(a);if(!H)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:H.data[n],index:n}});!Q7(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let o=this.options.hover,a=(V,c)=>V.filter(d=>!c.some(m=>d.datasetIndex===m.datasetIndex&&d.index===m.index)),n=a(e,t),H=i?t:a(t,e);n.length&&this.updateHoverStyle(n,o.mode,!1),H.length&&o.mode&&this.updateHoverStyle(H,o.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},o=n=>(n.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:o=[],options:a}=this,n=e,H=this._getActiveElements(t,o,i,n),V=tr(t),c=Sh(t,this._lastEvent,i,V);i&&(this._lastEvent=null,r2(a.onHover,[t,H,this],this),V&&r2(a.onClick,[t,H,this],this));let d=!Q7(H,o);return(d||e)&&(this._active=H,this._updateHoverStyles(H,o,e)),this._lastEvent=c,d}_getActiveElements(t,e,i,o){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,o)}};R(P2,"defaults",L2),R(P2,"instances",rt),R(P2,"overrides",d3),R(P2,"registry",x0),R(P2,"version",gh),R(P2,"getChart",Qn);function Kn(){return W1(P2.instances,r=>r._plugins.invalidate())}function yh(r,t,e){let{startAngle:i,x:o,y:a,outerRadius:n,innerRadius:H,options:V}=t,{borderWidth:c,borderJoinStyle:d}=V,m=Math.min(c/n,O2(i-e));if(r.beginPath(),r.arc(o,a,n-c/2,i+m/2,e-m/2),H>0){let A=Math.min(c/H,O2(i-e));r.arc(o,a,H+c/2,e-A/2,i+A/2,!0)}else{let A=Math.min(c/2,n*O2(i-e));if(d==="round")r.arc(o,a,A,e-t2/2,i+t2/2,!0);else if(d==="bevel"){let g=2*A*A,y=-g*Math.cos(e+t2/2)+o,O=-g*Math.sin(e+t2/2)+a,k=g*Math.cos(i+t2/2)+o,T=g*Math.sin(i+t2/2)+a;r.lineTo(y,O),r.lineTo(k,T)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function Zh(r,t,e){let{startAngle:i,pixelMargin:o,x:a,y:n,outerRadius:H,innerRadius:V}=t,c=o/H;r.beginPath(),r.arc(a,n,H,i-c,e+c),V>o?(c=o/V,r.arc(a,n,V,e+c,i-c,!0)):r.arc(a,n,o,e+f2,i-f2),r.closePath(),r.clip()}function kh(r){return L9(r,["outerStart","outerEnd","innerStart","innerEnd"])}function Oh(r,t,e,i){let o=kh(r.options.borderRadius),a=(e-t)/2,n=Math.min(a,i*t/2),H=V=>{let c=(e-Math.min(a,V))*i/2;return T2(V,0,Math.min(a,c))};return{outerStart:H(o.outerStart),outerEnd:H(o.outerEnd),innerStart:T2(o.innerStart,0,n),innerEnd:T2(o.innerEnd,0,n)}}function J7(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function at(r,t,e,i,o,a){let{x:n,y:H,startAngle:V,pixelMargin:c,innerRadius:d}=t,m=Math.max(t.outerRadius+i+e-c,0),A=d>0?d+i+e+c:0,g=0,y=o-V;if(i){let Z1=d>0?d-i:0,J=m>0?m-i:0,X1=(Z1+J)/2,n1=X1!==0?y*X1/(X1+i):y;g=(y-n1)/2}let O=Math.max(.001,y*m-e/t2)/m,k=(y-O)/2,T=V+k+g,$=o-k-g,{outerStart:F,outerEnd:K,innerStart:G,innerEnd:l1}=Oh(t,A,m,$-T),X=m-F,e1=m-K,o1=T+F/X,h1=$-K/e1,U1=A+G,y1=A+l1,l2=T+G/U1,K1=$-l1/y1;if(r.beginPath(),a){let Z1=(o1+h1)/2;if(r.arc(n,H,m,o1,Z1),r.arc(n,H,m,Z1,h1),K>0){let U=J7(e1,h1,n,H);r.arc(U.x,U.y,K,h1,$+f2)}let J=J7(y1,$,n,H);if(r.lineTo(J.x,J.y),l1>0){let U=J7(y1,K1,n,H);r.arc(U.x,U.y,l1,$+f2,K1+Math.PI)}let X1=($-l1/A+(T+G/A))/2;if(r.arc(n,H,A,$-l1/A,X1,!0),r.arc(n,H,A,X1,T+G/A,!0),G>0){let U=J7(U1,l2,n,H);r.arc(U.x,U.y,G,l2+Math.PI,T-f2)}let n1=J7(X,T,n,H);if(r.lineTo(n1.x,n1.y),F>0){let U=J7(X,o1,n,H);r.arc(U.x,U.y,F,T-f2,o1)}}else{r.moveTo(n,H);let Z1=Math.cos(o1)*m+n,J=Math.sin(o1)*m+H;r.lineTo(Z1,J);let X1=Math.cos(h1)*m+n,n1=Math.sin(h1)*m+H;r.lineTo(X1,n1)}r.closePath()}function Th(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:H}=t,V=t.endAngle;if(a){at(r,t,e,i,V,o);for(let c=0;c<a;++c)r.fill();isNaN(H)||(V=n+(H%p2||p2))}return at(r,t,e,i,V,o),r.fill(),V}function Ph(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:H,options:V}=t,{borderWidth:c,borderJoinStyle:d,borderDash:m,borderDashOffset:A,borderRadius:g}=V,y=V.borderAlign==="inner";if(!c)return;r.setLineDash(m||[]),r.lineDashOffset=A,y?(r.lineWidth=c*2,r.lineJoin=d||"round"):(r.lineWidth=c,r.lineJoin=d||"bevel");let O=t.endAngle;if(a){at(r,t,e,i,O,o);for(let k=0;k<a;++k)r.stroke();isNaN(H)||(O=n+(H%p2||p2))}y&&Zh(r,t,O),V.selfJoin&&O-n>=t2&&g===0&&d!=="miter"&&yh(r,t,O),a||(at(r,t,e,i,O,o),r.stroke())}var u3=class extends e0{constructor(e){super();R(this,"circumference");R(this,"endAngle");R(this,"fullCircles");R(this,"innerRadius");R(this,"outerRadius");R(this,"pixelMargin");R(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.getProps(["x","y"],o),{angle:n,distance:H}=y8(a,{x:e,y:i}),{startAngle:V,endAngle:c,innerRadius:d,outerRadius:m,circumference:A}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),g=(this.options.spacing+this.options.borderWidth)/2,y=E1(A,c-V),O=o9(n,V,c)&&V!==c,k=y>=p2||O,T=i7(H,d+g,m+g);return k&&T}getCenterPoint(e){let{x:i,y:o,startAngle:a,endAngle:n,innerRadius:H,outerRadius:V}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:d}=this.options,m=(a+n)/2,A=(H+V+d+c)/2;return{x:i+Math.cos(m)*A,y:o+Math.sin(m)*A}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:o}=this,a=(i.offset||0)/4,n=(i.spacing||0)/2,H=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>p2?Math.floor(o/p2):0,o===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let V=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(V)*a,Math.sin(V)*a);let c=1-Math.sin(Math.min(t2,o||0)),d=a*c;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,Th(e,this,d,n,H),Ph(e,this,d,n,H),e.restore()}};R(u3,"id","arc"),R(u3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),R(u3,"defaultRoutes",{backgroundColor:"backgroundColor"}),R(u3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function ys(r,t,e=t){r.lineCap=E1(e.borderCapStyle,t.borderCapStyle),r.setLineDash(E1(e.borderDash,t.borderDash)),r.lineDashOffset=E1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=E1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=E1(e.borderWidth,t.borderWidth),r.strokeStyle=E1(e.borderColor,t.borderColor)}function Eh(r,t,e){r.lineTo(e.x,e.y)}function $h(r){return r.stepped?cr:r.tension||r.cubicInterpolationMode==="monotone"?Mr:Eh}function Zs(r,t,e={}){let i=r.length,{start:o=0,end:a=i-1}=e,{start:n,end:H}=t,V=Math.max(o,n),c=Math.min(a,H),d=o<n&&a<n||o>H&&a>H;return{count:i,start:V,loop:t.loop,ilen:c<V&&!d?i+c-V:c-V}}function Fh(r,t,e,i){let{points:o,options:a}=t,{count:n,start:H,loop:V,ilen:c}=Zs(o,e,i),d=$h(a),{move:m=!0,reverse:A}=i||{},g,y,O;for(g=0;g<=c;++g)y=o[(H+(A?c-g:g))%n],!y.skip&&(m?(r.moveTo(y.x,y.y),m=!1):d(r,O,y,A,a.stepped),O=y);return V&&(y=o[(H+(A?c:0))%n],d(r,O,y,A,a.stepped)),!!V}function Rh(r,t,e,i){let o=t.points,{count:a,start:n,ilen:H}=Zs(o,e,i),{move:V=!0,reverse:c}=i||{},d=0,m=0,A,g,y,O,k,T,$=K=>(n+(c?H-K:K))%a,F=()=>{O!==k&&(r.lineTo(d,k),r.lineTo(d,O),r.lineTo(d,T))};for(V&&(g=o[$(0)],r.moveTo(g.x,g.y)),A=0;A<=H;++A){if(g=o[$(A)],g.skip)continue;let K=g.x,G=g.y,l1=K|0;l1===y?(G<O?O=G:G>k&&(k=G),d=(m*d+K)/++m):(F(),r.lineTo(K,G),y=l1,m=0,O=k=G),T=G}F()}function Gr(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Rh:Fh}function Dh(r){return r.stepped?Ar:r.tension||r.cubicInterpolationMode==="monotone"?vr:R0}function Bh(r,t,e,i){let o=t._path;o||(o=t._path=new Path2D,t.path(o,e,i)&&o.closePath()),ys(r,t.options),r.stroke(o)}function zh(r,t,e,i){let{segments:o,options:a}=t,n=Gr(t);for(let H of o)ys(r,a,H.style),r.beginPath(),n(r,t,H,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var Ih=typeof Path2D=="function";function Nh(r,t,e,i){Ih&&!t.options.segment?Bh(r,t,e,i):zh(r,t,e,i)}var A5=class extends e0{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let o=i.spanGaps?this._loop:this._fullLoop;hr(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=_r(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,o=t[e],a=this.points,n=U8(this,{property:e,start:o,end:o});if(!n.length)return;let H=[],V=Dh(i),c,d;for(c=0,d=n.length;c<d;++c){let{start:m,end:A}=n[c],g=a[m],y=a[A];if(g===y){H.push(g);continue}let O=Math.abs((o-g[e])/(y[e]-g[e])),k=V(g,y,O,i.stepped);k[e]=t[e],H.push(k)}return H.length===1?H[0]:H}pathSegment(t,e,i){return Gr(this)(t,this,e,i)}path(t,e,i){let o=this.segments,a=Gr(this),n=this._loop;e=e||0,i=i||this.points.length-e;for(let H of o)n&=a(t,this,H,{start:e,end:e+i-1});return!!n}draw(t,e,i,o){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Nh(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};R(A5,"id","line"),R(A5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),R(A5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),R(A5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Xn(r,t,e,i){let o=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<o.radius+o.hitRadius}var J5=class extends e0{constructor(e){super();R(this,"parsed");R(this,"skip");R(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.options,{x:n,y:H}=this.getProps(["x","y"],o);return Math.pow(e-n,2)+Math.pow(i-H,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return Xn(this,e,"x",i)}inYRange(e,i){return Xn(this,e,"y",i)}getCenterPoint(e){let{x:i,y:o}=this.getProps(["x","y"],e);return{x:i,y:o}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let o=i&&e.borderWidth||0;return(i+o)*2}draw(e,i){let o=this.options;this.skip||o.radius<.1||!Q5(this,i,this.size(o)/2)||(e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.fillStyle=o.backgroundColor,s9(e,o,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};R(J5,"id","point"),R(J5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),R(J5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function ks(r,t){let{x:e,y:i,base:o,width:a,height:n}=r.getProps(["x","y","base","width","height"],t),H,V,c,d,m;return r.horizontal?(m=n/2,H=Math.min(e,o),V=Math.max(e,o),c=i-m,d=i+m):(m=a/2,H=e-m,V=e+m,c=Math.min(i,o),d=Math.max(i,o)),{left:H,top:c,right:V,bottom:d}}function m3(r,t,e,i){return r?0:T2(t,e,i)}function Wh(r,t,e){let i=r.options.borderWidth,o=r.borderSkipped,a=D8(i);return{t:m3(o.top,a.top,0,e),r:m3(o.right,a.right,0,t),b:m3(o.bottom,a.bottom,0,e),l:m3(o.left,a.left,0,t)}}function Uh(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),o=r.options.borderRadius,a=p3(o),n=Math.min(t,e),H=r.borderSkipped,V=i||S1(o);return{topLeft:m3(!V||H.top||H.left,a.topLeft,0,n),topRight:m3(!V||H.top||H.right,a.topRight,0,n),bottomLeft:m3(!V||H.bottom||H.left,a.bottomLeft,0,n),bottomRight:m3(!V||H.bottom||H.right,a.bottomRight,0,n)}}function jh(r){let t=ks(r),e=t.right-t.left,i=t.bottom-t.top,o=Wh(r,e/2,i/2),a=Uh(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+o.l,y:t.top+o.t,w:e-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function Tr(r,t,e,i){let o=t===null,a=e===null,H=r&&!(o&&a)&&ks(r,i);return H&&(o||i7(t,H.left,H.right))&&(a||i7(e,H.top,H.bottom))}function Gh(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function qh(r,t){r.rect(t.x,t.y,t.w,t.h)}function Pr(r,t,e={}){let i=r.x!==e.x?-t:0,o=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,n=(r.y+r.h!==e.y+e.h?t:0)-o;return{x:r.x+i,y:r.y+o,w:r.w+a,h:r.h+n,radius:r.radius}}var t0=class extends e0{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:n}=jh(this),H=Gh(n.radius)?X7:qh;t.save(),(n.w!==a.w||n.h!==a.h)&&(t.beginPath(),H(t,Pr(n,e,a)),t.clip(),H(t,Pr(a,-e,n)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),H(t,Pr(a,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Tr(this,t,e,i)}inXRange(t,e){return Tr(this,t,null,e)}inYRange(t,e){return Tr(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+o)/2:e,y:a?i:(i+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};R(t0,"id","bar"),R(t0,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),R(t0,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Yh(r,t,e){let i=r.segments,o=r.points,a=t.points,n=[];for(let H of i){let{start:V,end:c}=H;c=st(V,c,o);let d=qr(e,o[V],o[c],H.loop);if(!t.segments){n.push({source:H,target:d,start:o[V],end:o[c]});continue}let m=U8(t,d);for(let A of m){let g=qr(e,a[A.start],a[A.end],A.loop),y=W8(H,o,g);for(let O of y)n.push({source:O,target:A,start:{[e]:Jn(d,g,"start",Math.max)},end:{[e]:Jn(d,g,"end",Math.min)}})}}return n}function qr(r,t,e,i){if(i)return;let o=t[r],a=e[r];return r==="angle"&&(o=O2(o),a=O2(a)),{property:r,start:o,end:a}}function Qh(r,t){let{x:e=null,y:i=null}=r||{},o=t.points,a=[];return t.segments.forEach(({start:n,end:H})=>{H=st(n,H,o);let V=o[n],c=o[H];i!==null?(a.push({x:V.x,y:i}),a.push({x:c.x,y:i})):e!==null&&(a.push({x:e,y:V.y}),a.push({x:e,y:c.y}))}),a}function st(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Jn(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function Os(r,t){let e=[],i=!1;return o2(r)?(i=!0,e=r):e=Qh(r,t),e.length?new A5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function ts(r){return r&&r.fill!==!1}function Kh(r,t,e){let o=r[t].fill,a=[t],n;if(!e)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!V2(o))return o;if(n=r[o],!n)return!1;if(n.visible)return o;a.push(o),o=n.fill}return!1}function Xh(r,t,e){let i=rm(r);if(S1(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return V2(o)&&Math.floor(o)===o?Jh(i[0],t,o,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Jh(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function tm(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:S1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function em(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:S1(r)?i=r.value:i=t.getBaseValue(),i}function rm(r){let t=r.options,e=t.fill,i=E1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function im(r){let{scale:t,index:e,line:i}=r,o=[],a=i.segments,n=i.points,H=om(t,e);H.push(Os({x:null,y:t.bottom},i));for(let V=0;V<a.length;V++){let c=a[V];for(let d=c.start;d<=c.end;d++)Cm(o,n[d],H)}return new A5({points:o,options:{}})}function om(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){let a=i[o];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function Cm(r,t,e){let i=[];for(let o=0;o<e.length;o++){let a=e[o],{first:n,last:H,point:V}=am(a,t,"x");if(!(!V||n&&H)){if(n)i.unshift(V);else if(r.push(V),!H)break}}r.push(...i)}function am(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let o=i[e],a=r.segments,n=r.points,H=!1,V=!1;for(let c=0;c<a.length;c++){let d=a[c],m=n[d.start][e],A=n[d.end][e];if(i7(o,m,A)){H=o===m,V=o===A;break}}return{first:H,last:V,point:i}}var nt=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:o,y:a,radius:n}=this;return e=e||{start:0,end:p2},t.arc(o,a,n,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:o}=this,a=t.angle;return{x:e+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}};function nm(r){let{chart:t,fill:e,line:i}=r;if(V2(e))return sm(t,e);if(e==="stack")return im(r);if(e==="shape")return!0;let o=Hm(r);return o instanceof nt?o:Os(o,i)}function sm(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function Hm(r){return(r.scale||{}).getPointPositionForValue?Lm(r):Vm(r)}function Vm(r){let{scale:t={},fill:e}=r,i=tm(e,t);if(V2(i)){let o=t.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function Lm(r){let{scale:t,fill:e}=r,i=t.options,o=t.getLabels().length,a=i.reverse?t.max:t.min,n=em(e,t,a),H=[];if(i.grid.circular){let V=t.getPointPositionForValue(0,a);return new nt({x:V.x,y:V.y,radius:t.getDistanceFromCenterForValue(n)})}for(let V=0;V<o;++V)H.push(t.getPointPositionForValue(V,n));return H}function Er(r,t,e){let i=nm(t),{chart:o,index:a,line:n,scale:H,axis:V}=t,c=n.options,d=c.fill,m=c.backgroundColor,{above:A=m,below:g=m}=d||{},y=o.getDatasetMeta(a),O=j8(o,y);i&&n.points.length&&(H9(r,e),lm(r,{line:n,target:i,above:A,below:g,area:e,scale:H,axis:V,clip:O}),V9(r))}function lm(r,t){let{line:e,target:i,above:o,below:a,area:n,scale:H,clip:V}=t,c=e._loop?"angle":t.axis;r.save();let d=a;a!==o&&(c==="x"?(es(r,i,n.top),$r(r,{line:e,target:i,color:o,scale:H,property:c,clip:V}),r.restore(),r.save(),es(r,i,n.bottom)):c==="y"&&(rs(r,i,n.left),$r(r,{line:e,target:i,color:a,scale:H,property:c,clip:V}),r.restore(),r.save(),rs(r,i,n.right),d=o)),$r(r,{line:e,target:i,color:d,scale:H,property:c,clip:V}),r.restore()}function es(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let H of i){let{start:V,end:c}=H,d=o[V],m=o[st(V,c,o)];a?(r.moveTo(d.x,d.y),a=!1):(r.lineTo(d.x,e),r.lineTo(d.x,d.y)),n=!!t.pathSegment(r,H,{move:n}),n?r.closePath():r.lineTo(m.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function rs(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let H of i){let{start:V,end:c}=H,d=o[V],m=o[st(V,c,o)];a?(r.moveTo(d.x,d.y),a=!1):(r.lineTo(e,d.y),r.lineTo(d.x,d.y)),n=!!t.pathSegment(r,H,{move:n}),n?r.closePath():r.lineTo(e,m.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function $r(r,t){let{line:e,target:i,property:o,color:a,scale:n,clip:H}=t,V=Yh(e,i,o);for(let{source:c,target:d,start:m,end:A}of V){let{style:{backgroundColor:g=a}={}}=c,y=i!==!0;r.save(),r.fillStyle=g,cm(r,n,H,y&&qr(o,m,A)),r.beginPath();let O=!!e.pathSegment(r,c),k;if(y){O?r.closePath():is(r,i,A,o);let T=!!i.pathSegment(r,d,{move:O,reverse:!0});k=O&&T,k||is(r,i,m,o)}r.closePath(),r.fill(k?"evenodd":"nonzero"),r.restore()}}function cm(r,t,e,i){let o=t.chart.chartArea,{property:a,start:n,end:H}=i||{};if(a==="x"||a==="y"){let V,c,d,m;a==="x"?(V=n,c=o.top,d=H,m=o.bottom):(V=o.left,c=n,d=o.right,m=H),r.beginPath(),e&&(V=Math.max(V,e.left),d=Math.min(d,e.right),c=Math.max(c,e.top),m=Math.min(m,e.bottom)),r.rect(V,c,d-V,m-c),r.clip()}}function is(r,t,e,i){let o=t.interpolate(e,i);o&&r.lineTo(o.x,o.y)}var Ts={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,o=[],a,n,H,V;for(n=0;n<i;++n)a=r.getDatasetMeta(n),H=a.dataset,V=null,H&&H.options&&H instanceof A5&&(V={visible:r.isDatasetVisible(n),index:n,fill:Xh(H,n,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:H}),a.$filler=V,o.push(V);for(n=0;n<i;++n)V=o[n],!(!V||V.fill===!1)&&(V.fill=Kh(o,n,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",o=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let n=o.length-1;n>=0;--n){let H=o[n].$filler;H&&(H.line.updateControlPoints(a,H.axis),i&&H.fill&&Er(r.ctx,H,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){let a=i[o].$filler;ts(a)&&Er(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!ts(i)||e.drawTime!=="beforeDatasetDraw"||Er(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var v9={average(r){if(!r.length)return!1;let t,e,i=new Set,o=0,a=0;for(t=0,e=r.length;t<e;++t){let H=r[t].element;if(H&&H.hasValue()){let V=H.tooltipPosition();i.add(V.x),o+=V.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((H,V)=>H+V)/i.size,y:o/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,o=Number.POSITIVE_INFINITY,a,n,H;for(a=0,n=r.length;a<n;++a){let V=r[a].element;if(V&&V.hasValue()){let c=V.getCenterPoint(),d=e9(t,c);d<o&&(o=d,H=V)}}if(H){let V=H.tooltipPosition();e=V.x,i=V.y}return{x:e,y:i}}};function v0(r,t){return t&&(o2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function I0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function Mm(r,t){let{element:e,datasetIndex:i,index:o}=t,a=r.getDatasetMeta(i).controller,{label:n,value:H}=a.getLabelAndValue(o);return{chart:r,label:n,parsed:a.getParsed(o),raw:r.data.datasets[i].data[o],formattedValue:H,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:e}}function os(r,t){let e=r.chart.ctx,{body:i,footer:o,title:a}=r,{boxWidth:n,boxHeight:H}=t,V=I2(t.bodyFont),c=I2(t.titleFont),d=I2(t.footerFont),m=a.length,A=o.length,g=i.length,y=G2(t.padding),O=y.height,k=0,T=i.reduce((K,G)=>K+G.before.length+G.lines.length+G.after.length,0);if(T+=r.beforeBody.length+r.afterBody.length,m&&(O+=m*c.lineHeight+(m-1)*t.titleSpacing+t.titleMarginBottom),T){let K=t.displayColors?Math.max(H,V.lineHeight):V.lineHeight;O+=g*K+(T-g)*V.lineHeight+(T-1)*t.bodySpacing}A&&(O+=t.footerMarginTop+A*d.lineHeight+(A-1)*t.footerSpacing);let $=0,F=function(K){k=Math.max(k,e.measureText(K).width+$)};return e.save(),e.font=c.string,W1(r.title,F),e.font=V.string,W1(r.beforeBody.concat(r.afterBody),F),$=t.displayColors?n+2+t.boxPadding:0,W1(i,K=>{W1(K.before,F),W1(K.lines,F),W1(K.after,F)}),$=0,e.font=d.string,W1(r.footer,F),e.restore(),k+=y.width,{width:k,height:O}}function dm(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function pm(r,t,e,i){let{x:o,width:a}=i,n=e.caretSize+e.caretPadding;if(r==="left"&&o+a+n>t.width||r==="right"&&o-a-n<0)return!0}function um(r,t,e,i){let{x:o,width:a}=e,{width:n,chartArea:{left:H,right:V}}=r,c="center";return i==="center"?c=o<=(H+V)/2?"left":"right":o<=a/2?c="left":o>=n-a/2&&(c="right"),pm(c,r,t,e)&&(c="center"),c}function Cs(r,t,e){let i=e.yAlign||t.yAlign||dm(r,e);return{xAlign:e.xAlign||t.xAlign||um(r,t,e,i),yAlign:i}}function hm(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function mm(r,t,e){let{y:i,height:o}=r;return t==="top"?i+=e:t==="bottom"?i-=o+e:i-=o/2,i}function as(r,t,e,i){let{caretSize:o,caretPadding:a,cornerRadius:n}=r,{xAlign:H,yAlign:V}=e,c=o+a,{topLeft:d,topRight:m,bottomLeft:A,bottomRight:g}=p3(n),y=hm(t,H),O=mm(t,V,c);return V==="center"?H==="left"?y+=c:H==="right"&&(y-=c):H==="left"?y-=Math.max(d,A)+o:H==="right"&&(y+=Math.max(m,g)+o),{x:T2(y,0,i.width-t.width),y:T2(O,0,i.height-t.height)}}function K8(r,t,e){let i=G2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function ns(r){return v0([],I0(r))}function fm(r,t,e){return A0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function ss(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var Ps={beforeTitle:K5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:K5,beforeBody:K5,beforeLabel:K5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return b1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:K5,afterBody:K5,beforeFooter:K5,footer:K5,afterFooter:K5};function H5(r,t,e,i){let o=r[t].call(e,i);return typeof o>"u"?Ps[t].call(e,i):o}var x9=class extends e0{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,a=new it(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=fm(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,o=H5(i,"beforeTitle",this,t),a=H5(i,"title",this,t),n=H5(i,"afterTitle",this,t),H=[];return H=v0(H,I0(o)),H=v0(H,I0(a)),H=v0(H,I0(n)),H}getBeforeBody(t,e){return ns(H5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,o=[];return W1(t,a=>{let n={before:[],lines:[],after:[]},H=ss(i,a);v0(n.before,I0(H5(H,"beforeLabel",this,a))),v0(n.lines,H5(H,"label",this,a)),v0(n.after,I0(H5(H,"afterLabel",this,a))),o.push(n)}),o}getAfterBody(t,e){return ns(H5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,o=H5(i,"beforeFooter",this,t),a=H5(i,"footer",this,t),n=H5(i,"afterFooter",this,t),H=[];return H=v0(H,I0(o)),H=v0(H,I0(a)),H=v0(H,I0(n)),H}_createItems(t){let e=this._active,i=this.chart.data,o=[],a=[],n=[],H=[],V,c;for(V=0,c=e.length;V<c;++V)H.push(Mm(this.chart,e[V]));return t.filter&&(H=H.filter((d,m,A)=>t.filter(d,m,A,i))),t.itemSort&&(H=H.sort((d,m)=>t.itemSort(d,m,i))),W1(H,d=>{let m=ss(t.callbacks,d);o.push(H5(m,"labelColor",this,d)),a.push(H5(m,"labelPointStyle",this,d)),n.push(H5(m,"labelTextColor",this,d))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=n,this.dataPoints=H,H}update(t,e){let i=this.options.setContext(this.getContext()),o=this._active,a,n=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{let H=v9[i.position].call(this,o,this._eventPosition);n=this._createItems(i),this.title=this.getTitle(n,i),this.beforeBody=this.getBeforeBody(n,i),this.body=this.getBody(n,i),this.afterBody=this.getAfterBody(n,i),this.footer=this.getFooter(n,i);let V=this._size=os(this,i),c=Object.assign({},H,V),d=Cs(this.chart,i,c),m=as(i,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:m.x,y:m.y,width:V.width,height:V.height,caretX:H.x,caretY:H.y}}this._tooltipItems=n,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){let a=this.getCaretPosition(t,i,o);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:o,yAlign:a}=this,{caretSize:n,cornerRadius:H}=i,{topLeft:V,topRight:c,bottomLeft:d,bottomRight:m}=p3(H),{x:A,y:g}=t,{width:y,height:O}=e,k,T,$,F,K,G;return a==="center"?(K=g+O/2,o==="left"?(k=A,T=k-n,F=K+n,G=K-n):(k=A+y,T=k+n,F=K-n,G=K+n),$=k):(o==="left"?T=A+Math.max(V,d)+n:o==="right"?T=A+y-Math.max(c,m)-n:T=this.caretX,a==="top"?(F=g,K=F-n,k=T-n,$=T+n):(F=g+O,K=F+n,k=T+n,$=T-n),G=F),{x1:k,x2:T,x3:$,y1:F,y2:K,y3:G}}drawTitle(t,e,i){let o=this.title,a=o.length,n,H,V;if(a){let c=d9(i.rtl,this.x,this.width);for(t.x=K8(this,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",n=I2(i.titleFont),H=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string,V=0;V<a;++V)e.fillText(o[V],c.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+H,V+1===a&&(t.y+=i.titleMarginBottom-H)}}_drawColorBox(t,e,i,o,a){let n=this.labelColors[i],H=this.labelPointStyles[i],{boxHeight:V,boxWidth:c}=a,d=I2(a.bodyFont),m=K8(this,"left",a),A=o.x(m),g=V<d.lineHeight?(d.lineHeight-V)/2:0,y=e.y+g;if(a.usePointStyle){let O={radius:Math.min(c,V)/2,pointStyle:H.pointStyle,rotation:H.rotation,borderWidth:1},k=o.leftForLtr(A,c)+c/2,T=y+V/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,s9(t,O,k,T),t.strokeStyle=n.borderColor,t.fillStyle=n.backgroundColor,s9(t,O,k,T)}else{t.lineWidth=S1(n.borderWidth)?Math.max(...Object.values(n.borderWidth)):n.borderWidth||1,t.strokeStyle=n.borderColor,t.setLineDash(n.borderDash||[]),t.lineDashOffset=n.borderDashOffset||0;let O=o.leftForLtr(A,c),k=o.leftForLtr(o.xPlus(A,1),c-2),T=p3(n.borderRadius);Object.values(T).some($=>$!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,X7(t,{x:O,y,w:c,h:V,radius:T}),t.fill(),t.stroke(),t.fillStyle=n.backgroundColor,t.beginPath(),X7(t,{x:k,y:y+1,w:c-2,h:V-2,radius:T}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(O,y,c,V),t.strokeRect(O,y,c,V),t.fillStyle=n.backgroundColor,t.fillRect(k,y+1,c-2,V-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:o}=this,{bodySpacing:a,bodyAlign:n,displayColors:H,boxHeight:V,boxWidth:c,boxPadding:d}=i,m=I2(i.bodyFont),A=m.lineHeight,g=0,y=d9(i.rtl,this.x,this.width),O=function(e1){e.fillText(e1,y.x(t.x+g),t.y+A/2),t.y+=A+a},k=y.textAlign(n),T,$,F,K,G,l1,X;for(e.textAlign=n,e.textBaseline="middle",e.font=m.string,t.x=K8(this,k,i),e.fillStyle=i.bodyColor,W1(this.beforeBody,O),g=H&&k!=="right"?n==="center"?c/2+d:c+2+d:0,K=0,l1=o.length;K<l1;++K){for(T=o[K],$=this.labelTextColors[K],e.fillStyle=$,W1(T.before,O),F=T.lines,H&&F.length&&(this._drawColorBox(e,t,K,y,i),A=Math.max(m.lineHeight,V)),G=0,X=F.length;G<X;++G)O(F[G]),A=m.lineHeight;W1(T.after,O)}g=0,A=m.lineHeight,W1(this.afterBody,O),t.y-=a}drawFooter(t,e,i){let o=this.footer,a=o.length,n,H;if(a){let V=d9(i.rtl,this.x,this.width);for(t.x=K8(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=V.textAlign(i.footerAlign),e.textBaseline="middle",n=I2(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,H=0;H<a;++H)e.fillText(o[H],V.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){let{xAlign:a,yAlign:n}=this,{x:H,y:V}=t,{width:c,height:d}=i,{topLeft:m,topRight:A,bottomLeft:g,bottomRight:y}=p3(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(H+m,V),n==="top"&&this.drawCaret(t,e,i,o),e.lineTo(H+c-A,V),e.quadraticCurveTo(H+c,V,H+c,V+A),n==="center"&&a==="right"&&this.drawCaret(t,e,i,o),e.lineTo(H+c,V+d-y),e.quadraticCurveTo(H+c,V+d,H+c-y,V+d),n==="bottom"&&this.drawCaret(t,e,i,o),e.lineTo(H+g,V+d),e.quadraticCurveTo(H,V+d,H,V+d-g),n==="center"&&a==="left"&&this.drawCaret(t,e,i,o),e.lineTo(H,V+m),e.quadraticCurveTo(H,V,H+m,V),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){let n=v9[t.position].call(this,this._active,this._eventPosition);if(!n)return;let H=this._size=os(this,t),V=Object.assign({},n,this._size),c=Cs(e,t,V),d=as(t,V,c,e);(o._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=H.width,this.height=H.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let n=G2(e.padding),H=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&H&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,o,e),xr(t,e.textDirection),a.y+=n.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),gr(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,o=t.map(({datasetIndex:H,index:V})=>{let c=this.chart.getDatasetMeta(H);if(!c)throw new Error("Cannot find a dataset at index "+H);return{datasetIndex:H,element:c.data[V],index:V}}),a=!Q7(i,o),n=this._positionChanged(o,e);(a||n)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let o=this.options,a=this._active||[],n=this._getActiveElements(t,a,e,i),H=this._positionChanged(n,t),V=e||!Q7(n,a)||H;return V&&(this._active=n,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),V}_getActiveElements(t,e,i,o){let a=this.options;if(t.type==="mouseout")return[];if(!o)return e.filter(H=>this.chart.data.datasets[H.datasetIndex]&&this.chart.getDatasetMeta(H.datasetIndex).controller.getParsed(H.index)!==void 0);let n=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&n.reverse(),n}_positionChanged(t,e){let{caretX:i,caretY:o,options:a}=this,n=v9[a.position].call(this,t,e);return n!==!1&&(i!==n.x||o!==n.y)}};R(x9,"positioners",v9);var Es={id:"tooltip",_element:x9,positioners:v9,afterInit(r,t,e){e&&(r.tooltip=new x9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Ps},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var Am=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function vm(r,t,e,i){let o=r.indexOf(t);if(o===-1)return Am(r,t,e,i);let a=r.lastIndexOf(t);return o!==a?e:o}var xm=(r,t)=>r===null?null:T2(Math.round(r),0,t);function Hs(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var r4=class extends a7{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:o,label:a}of e)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(b1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:vm(i,t,E1(e,t),this._addedLabels),xm(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,o=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let n=t;n<=e;n++)o.push({value:n});return o}getLabelForValue(t){return Hs.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};R(r4,"id","category"),R(r4,"defaults",{ticks:{callback:Hs}});function gm(r,t){let e=[],{bounds:o,step:a,min:n,max:H,precision:V,count:c,maxTicks:d,maxDigits:m,includeBounds:A}=r,g=a||1,y=d-1,{min:O,max:k}=t,T=!b1(n),$=!b1(H),F=!b1(c),K=(k-O)/(m+1),G=b8((k-O)/y/g)*g,l1,X,e1,o1;if(G<1e-14&&!T&&!$)return[{value:O},{value:k}];o1=Math.ceil(k/G)-Math.floor(O/G),o1>y&&(G=b8(o1*G/y/g)*g),b1(V)||(l1=Math.pow(10,V),G=Math.ceil(G*l1)/l1),o==="ticks"?(X=Math.floor(O/G)*G,e1=Math.ceil(k/G)*G):(X=O,e1=k),T&&$&&a&&rr((H-n)/a,G/1e3)?(o1=Math.round(Math.min((H-n)/G,d)),G=(H-n)/o1,X=n,e1=H):F?(X=T?n:X,e1=$?H:e1,o1=c-1,G=(e1-X)/o1):(o1=(e1-X)/G,e7(o1,Math.round(o1),G/1e3)?o1=Math.round(o1):o1=Math.ceil(o1));let h1=Math.max(S8(G),S8(X));l1=Math.pow(10,b1(V)?h1:V),X=Math.round(X*l1)/l1,e1=Math.round(e1*l1)/l1;let U1=0;for(T&&(A&&X!==n?(e.push({value:n}),X<n&&U1++,e7(Math.round((X+U1*G)*l1)/l1,n,Vs(n,K,r))&&U1++):X<n&&U1++);U1<o1;++U1){let y1=Math.round((X+U1*G)*l1)/l1;if($&&y1>H)break;e.push({value:y1})}return $&&A&&e1!==H?e.length&&e7(e[e.length-1].value,H,Vs(H,K,r))?e[e.length-1].value=H:e.push({value:H}):(!$||e1===H)&&e.push({value:e1}),e}function Vs(r,t,{horizontal:e,minRotation:i}){let o=f0(i),a=(e?Math.sin(o):Math.cos(o))||.001,n=.75*t*(""+r).length;return Math.min(t/a,n)}var o4=class extends a7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return b1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:o,max:a}=this,n=V=>o=e?o:V,H=V=>a=i?a:V;if(t){let V=F5(o),c=F5(a);V<0&&c<0?H(0):V>0&&c>0&&n(0)}if(o===a){let V=a===0?1:Math.abs(a*.05);H(a+V),t||n(o-V)}this.min=o,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),e=e||11),e&&(o=Math.min(e,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let o={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,n=gm(o,a);return t.bounds==="ticks"&&w8(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return a9(t,this.chart.options.locale,this.options.ticks.format)}},f3=class extends o4{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?t:0,this.max=V2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=f0(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};R(f3,"id","linear"),R(f3,"defaults",{ticks:{callback:n9.formatters.numeric}});var _9=r=>Math.floor(m0(r)),C7=(r,t)=>Math.pow(10,_9(r)+t);function Ls(r){return r/Math.pow(10,_9(r))===1}function ls(r,t,e){let i=Math.pow(10,e),o=Math.floor(r/i);return Math.ceil(t/i)-o}function _m(r,t){let e=t-r,i=_9(e);for(;ls(r,t,i)>10;)i++;for(;ls(r,t,i)<10;)i--;return Math.min(i,_9(r))}function bm(r,{min:t,max:e}){t=r5(r.min,t);let i=[],o=_9(t),a=_m(t,e),n=a<0?Math.pow(10,Math.abs(a)):1,H=Math.pow(10,a),V=o>a?Math.pow(10,o):0,c=Math.round((t-V)*n)/n,d=Math.floor((t-V)/H/10)*H*10,m=Math.floor((c-d)/Math.pow(10,a)),A=r5(r.min,Math.round((V+d+m*Math.pow(10,a))*n)/n);for(;A<e;)i.push({value:A,major:Ls(A),significand:m}),m>=10?m=m<15?15:20:m++,m>=20&&(a++,m=2,n=a>=0?1:n),A=Math.round((V+d+m*Math.pow(10,a))*n)/n;let g=r5(r.max,A);return i.push({value:g,major:Ls(g),significand:m}),i}var X8=class extends a7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=o4.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return V2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?Math.max(0,t):null,this.max=V2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!V2(this._userMin)&&(this.min=t===C7(this.min,0)?C7(this.min,-1):C7(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,o=this.max,a=H=>i=t?i:H,n=H=>o=e?o:H;i===o&&(i<=0?(a(1),n(10)):(a(C7(i,-1)),n(C7(o,1)))),i<=0&&a(C7(o,-1)),o<=0&&n(C7(i,1)),this.min=i,this.max=o}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=bm(e,this);return t.bounds==="ticks"&&w8(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":a9(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=m0(t),this._valueRange=m0(this.max)-m0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(m0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};R(X8,"id","logarithmic"),R(X8,"defaults",{ticks:{callback:n9.formatters.logarithmic,major:{enabled:!0}}});function Yr(r){let t=r.ticks;if(t.display&&r.display){let e=G2(t.backdropPadding);return E1(t.font&&t.font.size,L2.font.size)+e.height}return 0}function wm(r,t,e){return e=o2(e)?e:[e],{w:Lr(r,t.string,e),h:e.length*t.lineHeight}}function cs(r,t,e,i,o){return r===i||r===o?{start:t-e/2,end:t+e/2}:r<i||r>o?{start:t-e,end:t}:{start:t,end:t+e}}function Sm(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],o=[],a=r._pointLabels.length,n=r.options.pointLabels,H=n.centerPointLabels?t2/a:0;for(let V=0;V<a;V++){let c=n.setContext(r.getPointLabelContext(V));o[V]=c.padding;let d=r.getPointPosition(V,r.drawingArea+o[V],H),m=I2(c.font),A=wm(r.ctx,m,r._pointLabels[V]);i[V]=A;let g=O2(r.getIndexAngle(V)+H),y=Math.round(i9(g)),O=cs(y,d.x,A.w,0,180),k=cs(y,d.y,A.h,90,270);ym(e,t,g,O,k)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=Om(r,i,o)}function ym(r,t,e,i,o){let a=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e)),H=0,V=0;i.start<t.l?(H=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-H)):i.end>t.r&&(H=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+H)),o.start<t.t?(V=(t.t-o.start)/n,r.t=Math.min(r.t,t.t-V)):o.end>t.b&&(V=(o.end-t.b)/n,r.b=Math.max(r.b,t.b+V))}function Zm(r,t,e){let i=r.drawingArea,{extra:o,additionalAngle:a,padding:n,size:H}=e,V=r.getPointPosition(t,i+o+n,a),c=Math.round(i9(O2(V.angle+f2))),d=Em(V.y,H.h,c),m=Tm(c),A=Pm(V.x,H.w,m);return{visible:!0,x:V.x,y:d,textAlign:m,left:A,top:d,right:A+H.w,bottom:d+H.h}}function km(r,t){if(!t)return!0;let{left:e,top:i,right:o,bottom:a}=r;return!(Q5({x:e,y:i},t)||Q5({x:e,y:a},t)||Q5({x:o,y:i},t)||Q5({x:o,y:a},t))}function Om(r,t,e){let i=[],o=r._pointLabels.length,a=r.options,{centerPointLabels:n,display:H}=a.pointLabels,V={extra:Yr(a)/2,additionalAngle:n?t2/o:0},c;for(let d=0;d<o;d++){V.padding=e[d],V.size=t[d];let m=Zm(r,d,V);i.push(m),H==="auto"&&(m.visible=km(m,c),m.visible&&(c=m))}return i}function Tm(r){return r===0||r===180?"center":r<180?"left":"right"}function Pm(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function Em(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function $m(r,t,e){let{left:i,top:o,right:a,bottom:n}=e,{backdropColor:H}=t;if(!b1(H)){let V=p3(t.borderRadius),c=G2(t.backdropPadding);r.fillStyle=H;let d=i-c.left,m=o-c.top,A=a-i+c.width,g=n-o+c.height;Object.values(V).some(y=>y!==0)?(r.beginPath(),X7(r,{x:d,y:m,w:A,h:g,radius:V}),r.fill()):r.fillRect(d,m,A,g)}}function Fm(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let o=t-1;o>=0;o--){let a=r._pointLabelItems[o];if(!a.visible)continue;let n=i.setContext(r.getPointLabelContext(o));$m(e,n,a);let H=I2(n.font),{x:V,y:c,textAlign:d}=a;K7(e,r._pointLabels[o],V,c+H.lineHeight/2,H,{color:n.color,textAlign:d,textBaseline:"middle"})}}function $s(r,t,e,i){let{ctx:o}=r;if(e)o.arc(r.xCenter,r.yCenter,t,0,p2);else{let a=r.getPointPosition(0,t);o.moveTo(a.x,a.y);for(let n=1;n<i;n++)a=r.getPointPosition(n,t),o.lineTo(a.x,a.y)}}function Rm(r,t,e,i,o){let a=r.ctx,n=t.circular,{color:H,lineWidth:V}=t;!n&&!i||!H||!V||e<0||(a.save(),a.strokeStyle=H,a.lineWidth=V,a.setLineDash(o.dash||[]),a.lineDashOffset=o.dashOffset,a.beginPath(),$s(r,e,n,i),a.closePath(),a.stroke(),a.restore())}function Dm(r,t,e){return A0(r,{label:e,index:t,type:"pointLabel"})}var t4=class extends o4{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=G2(Yr(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=V2(t)&&!isNaN(t)?t:0,this.max=V2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Yr(this.options))}generateTickLabels(t){o4.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let o=r2(this.options.pointLabels.callback,[e,i],this);return o||o===0?o:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?Sm(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){let e=p2/(this._pointLabels.length||1),i=this.options.startAngle||0;return O2(t*e+f0(i))}getDistanceFromCenterForValue(t){if(b1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(b1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return Dm(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let o=this.getIndexAngle(t)-f2+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:o,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),$s(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:o,border:a}=e,n=this._pointLabels.length,H,V,c;if(e.pointLabels.display&&Fm(this,n),o.display&&this.ticks.forEach((d,m)=>{if(m!==0||m===0&&this.min<0){V=this.getDistanceFromCenterForValue(d.value);let A=this.getContext(m),g=o.setContext(A),y=a.setContext(A);Rm(this,g,V,n,y)}}),i.display){for(t.save(),H=n-1;H>=0;H--){let d=i.setContext(this.getPointLabelContext(H)),{color:m,lineWidth:A}=d;!A||!m||(t.lineWidth=A,t.strokeStyle=m,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,V=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(H,V),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let o=this.getIndexAngle(0),a,n;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((H,V)=>{if(V===0&&this.min>=0&&!e.reverse)return;let c=i.setContext(this.getContext(V)),d=I2(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[V].value),c.showLabelBackdrop){t.font=d.string,n=t.measureText(H.label).width,t.fillStyle=c.backdropColor;let m=G2(c.backdropPadding);t.fillRect(-n/2-m.left,-a-d.size/2-m.top,n+m.width,d.size+m.height)}K7(t,H.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}};R(t4,"id","radialLinear"),R(t4,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:n9.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),R(t4,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),R(t4,"descriptors",{angleLines:{_fallback:"grid"}});var Ht={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},V5=Object.keys(Ht);function Ms(r,t){return r-t}function ds(r,t){if(b1(t))return null;let e=r._adapter,{parser:i,round:o,isoWeekday:a}=r._parseOpts,n=t;return typeof i=="function"&&(n=i(n)),V2(n)||(n=typeof i=="string"?e.parse(n,i):e.parse(n)),n===null?null:(o&&(n=o==="week"&&(r7(a)||a===!0)?e.startOf(n,"isoWeek",a):e.startOf(n,o)),+n)}function ps(r,t,e,i){let o=V5.length;for(let a=V5.indexOf(r);a<o-1;++a){let n=Ht[V5[a]],H=n.steps?n.steps:Number.MAX_SAFE_INTEGER;if(n.common&&Math.ceil((e-t)/(H*n.size))<=i)return V5[a]}return V5[o-1]}function Bm(r,t,e,i,o){for(let a=V5.length-1;a>=V5.indexOf(e);a--){let n=V5[a];if(Ht[n].common&&r._adapter.diff(o,i,n)>=t-1)return n}return V5[e?V5.indexOf(e):0]}function zm(r){for(let t=V5.indexOf(r)+1,e=V5.length;t<e;++t)if(Ht[V5[t]].common)return V5[t]}function us(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:o}=C9(e,t),a=e[i]>=t?e[i]:e[o];r[a]=!0}}function Im(r,t,e,i){let o=r._adapter,a=+o.startOf(t[0].value,i),n=t[t.length-1].value,H,V;for(H=a;H<=n;H=+o.add(H,1,i))V=e[H],V>=0&&(t[V].major=!0);return t}function hs(r,t,e){let i=[],o={},a=t.length,n,H;for(n=0;n<a;++n)H=t[n],o[H]=n,i.push({value:H,major:!1});return a===0||!e?i:Im(r,i,o,e)}var i4=class extends a7{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),o=this._adapter=new _u._date(t.adapters.date);o.init(e),J3(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ds(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:o,max:a,minDefined:n,maxDefined:H}=this.getUserBounds();function V(c){!n&&!isNaN(c.min)&&(o=Math.min(o,c.min)),!H&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!n||!H)&&(V(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&V(this.getMinMax(!1))),o=V2(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),a=V2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);let a=this.min,n=this.max,H=Cr(o,a,n);return this._unit=e.unit||(i.autoSkip?ps(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Bm(this,H.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:zm(this._unit),this.initOffsets(o),t.reverse&&H.reverse(),hs(this,H,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,o,a;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?e=1-o:e=(this.getDecimalForValue(t[1])-o)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let n=t.length<3?.5:.25;e=T2(e,0,n),i=T2(i,0,n),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,o=this.options,a=o.time,n=a.unit||ps(a.minUnit,e,i,this._getLabelCapacity(e)),H=E1(o.ticks.stepSize,1),V=n==="week"?a.isoWeekday:!1,c=r7(V)||V===!0,d={},m=e,A,g;if(c&&(m=+t.startOf(m,"isoWeek",V)),m=+t.startOf(m,c?"day":n),t.diff(i,e,n)>1e5*H)throw new Error(e+" and "+i+" are too far apart with stepSize of "+H+" "+n);let y=o.ticks.source==="data"&&this.getDataTimestamps();for(A=m,g=0;A<i;A=+t.add(A,H,n),g++)us(d,A,y);return(A===i||o.bounds==="ticks"||g===1)&&us(d,A,y),Object.keys(d).sort(Ms).map(O=>+O)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let o=this.options.time.displayFormats,a=this._unit,n=e||o[a];return this._adapter.format(t,n)}_tickFormatFunction(t,e,i,o){let a=this.options,n=a.ticks.callback;if(n)return r2(n,[t,e,i],this);let H=a.time.displayFormats,V=this._unit,c=this._majorUnit,d=V&&H[V],m=c&&H[c],A=i[e],g=c&&m&&A&&A.major;return this._adapter.format(t,o||(g?m:d))}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,o=f0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(o),n=Math.sin(o),H=this._resolveTickFontOptions(0).size;return{w:i*a+H*n,h:i*n+H*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,hs(this,[t],this._majorUnit),o),n=this._getLabelSize(a),H=Math.floor(this.isHorizontal()?this.width/n.w:this.height/n.h)-1;return H>0?H:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(e=0,i=o.length;e<i;++e)t=t.concat(o[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(ds(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return k8(t.sort(Ms))}};R(i4,"id","time"),R(i4,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function J8(r,t,e){let i=0,o=r.length-1,a,n,H,V;e?(t>=r[i].pos&&t<=r[o].pos&&({lo:i,hi:o}=D0(r,"pos",t)),{pos:a,time:H}=r[i],{pos:n,time:V}=r[o]):(t>=r[i].time&&t<=r[o].time&&({lo:i,hi:o}=D0(r,"time",t)),{time:a,pos:H}=r[i],{time:n,pos:V}=r[o]);let c=n-a;return c?H+(V-H)*(t-a)/c:H}var tt=class extends i4{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=J8(e,this.min),this._tableRange=J8(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,o=[],a=[],n,H,V,c,d;for(n=0,H=t.length;n<H;++n)c=t[n],c>=e&&c<=i&&o.push(c);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(n=0,H=o.length;n<H;++n)d=o[n+1],V=o[n-1],c=o[n],Math.round((d+V)/2)!==c&&a.push({time:c,pos:n/(H-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(J8(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return J8(this._table,i*this._tableRange+this._minPos,!0)}};R(tt,"id","timeseries"),R(tt,"defaults",i4.defaults);var Fs=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),S9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):b1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),o=i.length,a=r.font,n=0,H;for(r.font=e.string,H=0;H<o;++H)n=Math.max(r.measureText(i[H]).width,n);return r.font=a,{height:o*e.lineHeight,width:n}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],o,a,n,H;for(o=0,n=t.length;o<n;++o)H=t[o],a=e.indexOf(H),a===-1?i.push([H,1]):e.splice(a,1);for(o=0,n=e.length;o<n;++o)i.push([e[o],-1]);return i},rasterize:function(r){return Math.round(r*Fs)/Fs}};function Qr(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var o=r.x-e,a=r.y-i,n=Math.sqrt(o*o+a*a);return{x:n?o/n:0,y:n?a/n:-1}}function Nm(r,t,e,i,o){switch(o){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:o*=Math.PI/180,e=Math.cos(o),i=Math.sin(o);break}return{x:r,y:t,vx:e,vy:i}}var Wm=0,Ds=1,Bs=2,zs=4,Is=8;function Vt(r,t,e){var i=Wm;return r<e.left?i|=Ds:r>e.right&&(i|=Bs),t<e.top?i|=Is:t>e.bottom&&(i|=zs),i}function Um(r,t){for(var e=r.x0,i=r.y0,o=r.x1,a=r.y1,n=Vt(e,i,t),H=Vt(o,a,t),V,c,d;!(!(n|H)||n&H);)V=n||H,V&Is?(c=e+(o-e)*(t.top-i)/(a-i),d=t.top):V&zs?(c=e+(o-e)*(t.bottom-i)/(a-i),d=t.bottom):V&Bs?(d=i+(a-i)*(t.right-e)/(o-e),c=t.right):V&Ds&&(d=i+(a-i)*(t.left-e)/(o-e),c=t.left),V===n?(e=c,i=d,n=Vt(e,i,t)):(o=c,a=d,H=Vt(o,a,t));return{x0:e,x1:o,y0:i,y1:a}}function Lt(r,t){var e=t.anchor,i=r,o,a;return t.clamp&&(i=Um(i,t.area)),e==="start"?(o=i.x0,a=i.y0):e==="end"?(o=i.x1,a=i.y1):(o=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),Nm(o,a,r.vx,r.vy,t.align)}var lt={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),o=Math.sin(e),a=r.innerRadius,n=r.outerRadius;return Lt({x0:r.x+i*a,y0:r.y+o*a,x1:r.x+i*n,y1:r.y+o*n,vx:i,vy:o},t)},point:function(r,t){var e=Qr(r,t.origin),i=e.x*r.options.radius,o=e.y*r.options.radius;return Lt({x0:r.x-i,y0:r.y-o,x1:r.x+i,y1:r.y+o,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=Qr(r,t.origin),i=r.x,o=r.y,a=0,n=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(o=Math.min(r.y,r.base),n=Math.abs(r.base-r.y)),Lt({x0:i,y0:o+n,x1:i+a,y1:o,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=Qr(r,t.origin);return Lt({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},U0=S9.rasterize;function jm(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,o=r.size.width,a=-o/2,n=-i/2;return{frame:{x:a-e.left-t,y:n-e.top-t,w:o+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:n,w:o,h:i}}}function Gm(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function qm(r){return r instanceof u3?lt.arc:r instanceof J5?lt.point:r instanceof t0?lt.bar:lt.fallback}function Ym(r,t,e,i,o,a){var n=Math.PI/2;if(a){var H=Math.min(a,o/2,i/2),V=t+H,c=e+H,d=t+i-H,m=e+o-H;r.moveTo(t,c),V<d&&c<m?(r.arc(V,c,H,-Math.PI,-n),r.arc(d,c,H,-n,0),r.arc(d,m,H,0,n),r.arc(V,m,H,n,Math.PI)):V<d?(r.moveTo(V,e),r.arc(d,c,H,-n,n),r.arc(V,c,H,n,Math.PI+n)):c<m?(r.arc(V,c,H,-Math.PI,0),r.arc(V,m,H,0,Math.PI)):r.arc(V,c,H,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,o)}function Qm(r,t,e){var i=e.backgroundColor,o=e.borderColor,a=e.borderWidth;!i&&(!o||!a)||(r.beginPath(),Ym(r,U0(t.x)+a/2,U0(t.y)+a/2,U0(t.w)-a,U0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),o&&a&&(r.strokeStyle=o,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function Km(r,t,e){var i=e.lineHeight,o=r.w,a=r.x,n=r.y+i/2;return t==="center"?a+=o/2:(t==="end"||t==="right")&&(a+=o),{h:i,w:o,x:a,y:n}}function Xm(r,t,e){var i=r.shadowBlur,o=e.stroked,a=U0(e.x),n=U0(e.y),H=U0(e.w);o&&r.strokeText(t,a,n,H),e.filled&&(i&&o&&(r.shadowBlur=0),r.fillText(t,a,n,H),i&&o&&(r.shadowBlur=i))}function Jm(r,t,e,i){var o=i.textAlign,a=i.color,n=!!a,H=i.font,V=t.length,c=i.textStrokeColor,d=i.textStrokeWidth,m=c&&d,A;if(!(!V||!n&&!m))for(e=Km(e,o,H),r.font=H.string,r.textAlign=o,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,n&&(r.fillStyle=a),m&&(r.lineJoin="round",r.lineWidth=d,r.strokeStyle=c),A=0,V=t.length;A<V;++A)Xm(r,t[A],{stroked:m,filled:n,w:e.w,x:e.x,y:e.y+e.h*A})}var Ns=function(r,t,e,i){var o=this;o._config=r,o._index=i,o._model=null,o._rects=null,o._ctx=t,o._el=e};f5(Ns.prototype,{_modelize:function(r,t,e,i){var o=this,a=o._index,n=I2(i2([e.font,{}],i,a)),H=i2([e.color,L2.color],i,a);return{align:i2([e.align,"center"],i,a),anchor:i2([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:i2([e.backgroundColor,null],i,a),borderColor:i2([e.borderColor,null],i,a),borderRadius:i2([e.borderRadius,0],i,a),borderWidth:i2([e.borderWidth,0],i,a),clamp:i2([e.clamp,!1],i,a),clip:i2([e.clip,!1],i,a),color:H,display:r,font:n,lines:t,offset:i2([e.offset,4],i,a),opacity:i2([e.opacity,1],i,a),origin:Gm(o._el,i),padding:G2(i2([e.padding,4],i,a)),positioner:qm(o._el),rotation:i2([e.rotation,0],i,a)*(Math.PI/180),size:S9.textSize(o._ctx,t,n),textAlign:i2([e.textAlign,"start"],i,a),textShadowBlur:i2([e.textShadowBlur,0],i,a),textShadowColor:i2([e.textShadowColor,H],i,a),textStrokeColor:i2([e.textStrokeColor,H],i,a),textStrokeWidth:i2([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,o=t._index,a=t._config,n,H,V,c=i2([a.display,!0],r,o);c&&(n=r.dataset.data[o],H=E1(r2(a.formatter,[n,r]),n),V=b1(H)?[]:S9.toTextLines(H),V.length&&(e=t._modelize(c,V,a,r),i=jm(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,o=e._model,a=e._rects,n;this.visible()&&(i.save(),o.clip&&(n=o.area,i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()),i.globalAlpha=S9.bound(0,o.opacity,1),i.translate(U0(t.x),U0(t.y)),i.rotate(o.rotation),Qm(i,a.frame,o),Jm(i,o.lines,a.text,o),i.restore())}});var tf=Number.MIN_SAFE_INTEGER||-9007199254740991,ef=Number.MAX_SAFE_INTEGER||9007199254740991;function w9(r,t,e){var i=Math.cos(e),o=Math.sin(e),a=t.x,n=t.y;return{x:a+i*(r.x-a)-o*(r.y-n),y:n+o*(r.x-a)+i*(r.y-n)}}function Rs(r,t){var e=ef,i=tf,o=t.origin,a,n,H,V,c;for(a=0;a<r.length;++a)n=r[a],H=n.x-o.x,V=n.y-o.y,c=t.vx*H+t.vy*V,e=Math.min(e,c),i=Math.max(i,c);return{min:e,max:i}}function ct(r,t){var e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/o,vy:(t.y-r.y)/o,origin:r,ln:o}}var Ws=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};f5(Ws.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=w9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[ct(t[0],t[1]),ct(t[0],t[3])],o,a,n;for(this._rotation!==r._rotation&&i.push(ct(e[0],e[1]),ct(e[0],e[3])),o=0;o<i.length;++o)if(a=Rs(t,i[o]),n=Rs(e,i[o]),a.max<n.min||n.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[w9({x:t.x,y:t.y},i,e),w9({x:t.x+t.w,y:t.y},i,e),w9({x:t.x+t.w,y:t.y+t.h},i,e),w9({x:t.x,y:t.y+t.h},i,e)]}});function Us(r,t,e){var i=t.positioner(r,t),o=i.vx,a=i.vy;if(!o&&!a)return{x:i.x,y:i.y};var n=e.w,H=e.h,V=t.rotation,c=Math.abs(n/2*Math.cos(V))+Math.abs(H/2*Math.sin(V)),d=Math.abs(n/2*Math.sin(V))+Math.abs(H/2*Math.cos(V)),m=1/Math.max(Math.abs(o),Math.abs(a));return c*=o*m,d*=a*m,c+=t.offset*o,d+=t.offset*a,{x:i.x+c,y:i.y+d}}function rf(r,t){var e,i,o,a;for(e=r.length-1;e>=0;--e)for(o=r[e].$layout,i=e-1;i>=0&&o._visible;--i)a=r[i].$layout,a._visible&&o._box.intersects(a._box)&&t(o,a);return r}function of(r){var t,e,i,o,a,n,H;for(t=0,e=r.length;t<e;++t)i=r[t],o=i.$layout,o._visible&&(H=new Proxy(i._el,{get:(V,c)=>V.getProps([c],!0)[c]}),a=i.geometry(),n=Us(H,i.model(),a),o._box.update(n,a,i.rotation()));return rf(r,function(V,c){var d=V._hidable,m=c._hidable;d&&m||m?c._visible=!1:d&&(V._visible=!1)})}var y9={prepare:function(r){var t=[],e,i,o,a,n;for(e=0,o=r.length;e<o;++e)for(i=0,a=r[e].length;i<a;++i)n=r[e][i],t.push(n),n.$layout={_box:new Ws,_hidable:!1,_visible:!0,_set:e,_idx:n._index};return t.sort(function(H,V){var c=H.$layout,d=V.$layout;return c._idx===d._idx?d._set-c._set:d._idx-c._idx}),this.update(t),t},update:function(r){var t=!1,e,i,o,a,n;for(e=0,i=r.length;e<i;++e)o=r[e],a=o.model(),n=o.$layout,n._hidable=a&&a.display==="auto",n._visible=o.visible(),t|=n._hidable;t&&of(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,o,a,n,H;for(e=0,i=t.length;e<i;++e)o=t[e],a=o.$layout,a._visible&&(n=o.geometry(),H=Us(o._el,o.model(),n),a._box.update(H,n,o.rotation()),o.draw(r,H))}},Cf=function(r){if(b1(r))return null;var t=r,e,i,o;if(S1(r))if(!b1(r.label))t=r.label;else if(!b1(r.r))t=r.r;else for(t="",e=Object.keys(r),o=0,i=e.length;o<i;++o)t+=(o!==0?", ":"")+e[o]+": "+r[e[o]];return""+t},af={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Cf,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},L5="$datalabels",js="$default";function nf(r,t){var e=r.datalabels,i={},o=[],a,n;return e===!1?null:(e===!0&&(e={}),t=f5({},[t,e]),a=t.labels||{},n=Object.keys(a),delete t.labels,n.length?n.forEach(function(H){a[H]&&o.push(f5({},[t,a[H],{_key:H}]))}):o.push(t),i=o.reduce(function(H,V){return W1(V.listeners||{},function(c,d){H[d]=H[d]||{},H[d][V._key||js]=c}),delete V.listeners,H},{}),{labels:o,listeners:i})}function Kr(r,t,e,i){if(t){var o=e.$context,a=e.$groups,n;t[a._set]&&(n=t[a._set][a._key],n&&r2(n,[o,i])===!0&&(r[L5]._dirty=!0,e.update(o)))}}function sf(r,t,e,i,o){var a,n;!e&&!i||(e?i?e!==i&&(n=a=!0):n=!0:a=!0,n&&Kr(r,t.leave,e,o),a&&Kr(r,t.enter,i,o))}function Hf(r,t){var e=r[L5],i=e._listeners,o,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=y9.lookup(e._labels,t);else if(t.type!=="mouseout")return;o=e._hovered,e._hovered=a,sf(r,i,o,a,t)}}function Vf(r,t){var e=r[L5],i=e._listeners.click,o=i&&y9.lookup(e._labels,t);o&&Kr(r,i,o,t)}var Gs={id:"datalabels",defaults:af,beforeInit:function(r){r[L5]={_actives:[]}},beforeUpdate:function(r){var t=r[L5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,o=r[L5],a=o._datasets[i]=[],n=r.isDatasetVisible(i),H=r.data.datasets[i],V=nf(H,e),c=t.meta.data||[],d=r.ctx,m,A,g,y,O,k,T,$;for(d.save(),m=0,g=c.length;m<g;++m)if(T=c[m],T[L5]=[],n&&T&&r.getDataVisibility(m)&&!T.skip)for(A=0,y=V.labels.length;A<y;++A)O=V.labels[A],k=O._key,$=new Ns(O,d,T,m),$.$groups={_set:i,_key:k||js},$.$context={active:!1,chart:r,dataIndex:m,dataset:H,datasetIndex:i},$.update($.$context),T[L5].push($),a.push($);d.restore(),f5(o._listeners,V.listeners,{merger:function(F,K,G){K[F]=K[F]||{},K[F][t.index]=G[F],o._listened=!0}})},afterUpdate:function(r){r[L5]._labels=y9.prepare(r[L5]._datasets)},afterDatasetsDraw:function(r){y9.draw(r,r[L5]._labels)},beforeEvent:function(r,t){if(r[L5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Hf(r,e);break;case"click":Vf(r,e);break}}},afterEvent:function(r){var t=r[L5],e=t._actives,i=t._actives=r.getActiveElements(),o=S9.arrayDiff(e,i),a,n,H,V,c,d,m;for(a=0,n=o.length;a<n;++a)if(c=o[a],c[1])for(m=c[0].element[L5]||[],H=0,V=m.length;H<V;++H)d=m[H],d.$context.active=c[1]===1,d.update(d.$context);(t._dirty||o.length)&&(y9.update(t._labels),r.render()),delete t._dirty}};function Mt(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var g0=class extends t1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=$0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return Z;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,o=e.secondaryLabel!==void 0;return x`
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
    `}getDateInfo(){let e=L8(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let c=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:n3(this.hass,this.forecast.datetime),secondaryLabel:c}}if(this.forecastType==="daily")return e?{label:n3(this.hass,this.forecast.datetime),secondaryLabel:va(this.hass,this.forecast.datetime)}:{label:n3(this.hass,this.forecast.datetime)};let o=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):wa(o),n=o,H;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:c,sunset:d}=this.suntimesInfo,m=A=>{let g=new Date(o);return g.setHours(A.getHours(),A.getMinutes()),g.getTime()>=o.getTime()&&g.getTime()<=a.getTime()};m(c)?(H="wsfc-sunrise",n=c):m(d)&&(H="wsfc-sunset",n=d)}if(H){let c=ga(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:c.suffix?`${c.time} ${c.suffix}`:c.time,className:H,icon:H==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:c.time,secondaryLabel:e?c.suffix:void 0,className:H}}let V=xa(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:V.hour}:{label:V.hour,secondaryLabel:e?V.suffix:void 0}}};g0.styles=H1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,Q([i1({attribute:!1})],g0.prototype,"hass",2),Q([i1({attribute:!1})],g0.prototype,"forecast",2),Q([i1({attribute:!1})],g0.prototype,"forecastType",2),Q([i1({attribute:!1})],g0.prototype,"isTwiceDailyEntity",2),Q([i1({attribute:!1})],g0.prototype,"config",2),g0=Q([H2("wsfc-forecast-header-items")],g0);var A3=class extends t1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?x`
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
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};A3.styles=H1`
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
  `,Q([i1({type:Boolean})],A3.prototype,"open",2),Q([i1({attribute:!1})],A3.prototype,"options",2),Q([i1({attribute:!1})],A3.prototype,"value",2),A3=Q([H2("wsfc-chart-attribute-selector")],A3);P2.register(N0,t0,W0,A5,J5,f3,r4,Gs);var qs=16384,Lf=6,dt=12,lf=10,cf=10,Mf=130,i5=class extends t1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=Ta;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new j7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let o=X5(i,this._chart),a=this._chart.scales.x;if(!a)return;let n=a.getValueForPixel(o.x);if(n==null)return;let H=a.getLabelForValue(n),V=this._chart.data.labels?.indexOf(H)??-1;if(V===-1)return;let c=this.safeForecast[V];if(!c)return;let d={selectedForecast:c,action:e.detail.action};n2(this,"action",d)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let o=e.has("forecastType")||e.has("itemWidth");this.updateChartData(o)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return Z;let i=e.length,o=Math.max(i-1,0),a=this._getChartFontSize(),n=Mf+Math.max(0,a-dt),V={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${o} * var(--forecast-item-gap))`},c={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},d={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${n}px`};return x`
      <div
        class="${Q3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
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
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":Y5[this._selectedAttribute]}
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
          style=${e5(V)}
          .actionHandler=${p0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${e5(c)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${e5(d)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${e.map((m,A)=>x`
                <div class="wsfc-forecast-slot" data-index=${A}>
                  <wsfc-forecast-info
                    .hass=${this.hass}
                    .weatherEntity=${this.weatherEntity}
                    .forecast=${m}
                    .config=${this.config}
                    .hidePrecipitation=${!0}
                  ></wsfc-forecast-info>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new P2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),o=this._chart.config.type,a=i.type;if(o!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let o=parseFloat(i);if(!isNaN(o))return o}return dt}_getBarLabelOffset(){return-22-(this._getChartFontSize()-dt)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),o=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),n=a+cf,H=lf+(a-dt),V={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:n,bottom:H,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:o,dash:[4,4]},grid:{offset:!0,display:!0,color:o,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,V);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,V);default:return this._getDefaultWeatherConfig(e,i,V)}}_getDefaultWeatherConfig(e,i,o){let{minTemp:a,maxTemp:n}=this.computeScaleLimits(e),H=i.getPropertyValue("--wfc-chart-temp-high-label-color"),V=i.getPropertyValue("--wfc-chart-temp-low-label-color"),c=i.getPropertyValue("--wfc-chart-precipitation-label-color"),d=i.getPropertyValue("--wfc-precipitation-bar-color"),m=W7(m5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),A=this.getTemperatureLineStyle(i,"temperature"),g=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(y=>y.datetime),datasets:[{data:e.map(y=>y.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:H,formatter:y=>y!=null?`${u0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...A},{data:e.map(y=>y.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:V,formatter:y=>y!=null?`${u0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...g},{type:"bar",data:e.map(y=>y.precipitation&&y.precipitation!==0?y.precipitation:null),backgroundColor:d,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:c,formatter:y=>Ra(y,m5(this.hass,this.weatherEntity,"precipitation"))}}]},options:W3({},o,{scales:{yTemp:{type:"linear",display:!1,min:a,max:n,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:m,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,o){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(n=>n.datetime),datasets:[{type:"bar",data:e.map(n=>n.uv_index!=null?Math.round(n.uv_index):0),backgroundColor:e.map(n=>i.getPropertyValue(Mt(n.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:W3({},o,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,o){let a=this._selectedAttribute,n=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",H=i.getPropertyValue(n)||i.getPropertyValue("--wfc-chart-default-line-color"),V=i.getPropertyValue("--wfc-chart-label-color"),c=m5(this.hass,this.weatherEntity,a),d=e.map(k=>k[a]??0),m=Math.max(...d),A=Math.min(...d),g=m-A||1,y=m+g*.2,O=A-g*.1;return{type:"line",data:{labels:e.map(k=>k.datetime),datasets:[{data:e.map(k=>k[a]??null),borderColor:H,pointBackgroundColor:H,fill:!1,datalabels:{anchor:"end",align:"top",color:V,formatter:(k,T)=>{if(k===null)return null;let $=`${k} ${c}`;return $.length>Lf&&T.dataIndex%2!==0?null:$}}}]},options:W3({},o,{scales:{y:{display:!1,min:O,max:y}}})}}getTemperatureLineStyle(e,i){let o=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(o),n=H=>this.computeTemperatureLineColor(H,e,a);return{borderColor:n,pointBorderColor:n,pointBackgroundColor:n,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,o){if(!this.config.forecast?.use_color_thresholds)return o;let a=e.chart,{ctx:n,chartArea:H,scales:V}=a;if(!H||!V.yTemp)return o;if(this._temperatureColors===null){let $=i;this._temperatureColors={cold:$.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:$.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:$.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:$.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:$.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:$.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let c=V.yTemp,{min:d,max:m}=c;if(!Number.isFinite(d)||!Number.isFinite(m))return o;let A=n.createLinearGradient(0,H.bottom,0,H.top),g=$=>Math.max(0,Math.min(1,($-d)/(m-d))),O=m5(this.hass,this.weatherEntity,"temperature")==="\xB0F",k=$=>O?$*9/5+32:$,T=[{pos:g(k(-10)),color:this._temperatureColors.cold},{pos:g(k(0)),color:this._temperatureColors.freezing},{pos:g(k(8)),color:this._temperatureColors.chilly},{pos:g(k(18)),color:this._temperatureColors.mild},{pos:g(k(26)),color:this._temperatureColors.warm},{pos:g(k(34)),color:this._temperatureColors.hot}].sort(($,F)=>$.pos-F.pos);for(let $ of T)A.addColorStop($.pos,$.color);return A}computeScaleLimits(e){let i=e.map(F=>F.temperature),o=e.map(F=>F.templow??F.temperature),a=Math.min(...o),n=Math.max(...i),H=e.some(F=>F.templow!==void 0&&F.templow!==null),V=Math.max(n-a,10),c=.2,d=H?.35:.1,m=V*c,A=V*d,g=2,y=H?5:1,O=Math.max(m,g),k=Math.max(A,y),T=Math.floor(a-k),$=Math.ceil(n+O);return T>=$&&($=T+1),{minTemp:T,maxTemp:$}}renderHeaderItems(e){let i=[],o;return e.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let H=n3(this.hass,a.datetime);o!==H&&(o=H,i.push(x`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${H}</div>
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
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((qs+e)/(this.itemWidth+e));return this.forecast.length>i?(q5.debug(`Truncating forecast to ${i} items to stay under ${qs}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=o=>o==="temperature_and_precipitation"?!0:e.some(a=>a[o]!=null);return M8.filter(i).map(o=>({label:o==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,o)||o,icon:o==="temperature_and_precipitation"?"mdi:water-thermometer":Y5[o],value:o}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};Q([i1({attribute:!1})],i5.prototype,"hass",2),Q([i1({attribute:!1})],i5.prototype,"weatherEntity",2),Q([i1({attribute:!1})],i5.prototype,"forecast",2),Q([i1({attribute:!1})],i5.prototype,"config",2),Q([i1({attribute:!1})],i5.prototype,"forecastType",2),Q([i1({attribute:!1})],i5.prototype,"isTwiceDailyEntity",2),Q([i1({attribute:!1})],i5.prototype,"itemWidth",2),Q([i1({attribute:!1})],i5.prototype,"isScrollable",2),Q([W4("canvas")],i5.prototype,"_canvas",2),Q([t5()],i5.prototype,"_settingsOpen",2),Q([t5()],i5.prototype,"_selectedAttribute",2),i5=Q([H2("wsfc-forecast-chart")],i5);var v3=class extends t1{createRenderRoot(){return this}render(){if(!this.forecast)return Z;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=$a(this.forecast);return x`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?x`<span
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
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};Q([i1({attribute:!1})],v3.prototype,"hass",2),Q([i1({attribute:!1})],v3.prototype,"forecast",2),Q([i1({attribute:!1})],v3.prototype,"config",2),Q([i1({attribute:!1})],v3.prototype,"maxPrecipitation",2),v3=Q([H2("wsfc-forecast-details")],v3);var r0=class extends t1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return Z;let e=this.forecast.wind_speed||0,i=d8(this.forecast),o=this.radius,a=4,n=10,H=o+n,V=o+n,c=2*(o+n),d=Math.round(e),m=this.computeLineColor(),A=i;A!==void 0&&this.type==="direction"&&(A=(A+180)%360);let g=Number.isFinite(A),y=V-o,O=o*.55,k=y-O,T=o*.45;return x`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${c} ${c}"
        role="img"
        aria-label="${g?`Wind speed: ${d}, bearing: ${A} degrees`:`Wind speed: ${d}`}"
      >
        <circle
          cx="${H}"
          cy="${V}"
          r="${o}"
          stroke="${m}"
          stroke-width="${a}"
          fill="none"
        />
        ${g?w1` <g transform="rotate(${A} ${H} ${V})">
              <polygon
                points="${H-T},${y} ${H+T},${y} ${H},${k}"
                fill="${m}"
              />
            </g>`:Z}
        <text x="${H}" y="${V}" dy="0.1em">${d}</text>
      </svg>
    `}computeLineColor(){let e=q4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};r0.styles=H1`
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
  `,Q([i1({attribute:!1})],r0.prototype,"hass",2),Q([i1({attribute:!1})],r0.prototype,"weatherEntity",2),Q([i1({attribute:!1})],r0.prototype,"forecast",2),Q([i1({attribute:!1})],r0.prototype,"size",2),Q([i1({attribute:!1})],r0.prototype,"radius",2),Q([i1({attribute:!1})],r0.prototype,"type",2),r0=Q([H2("wsfc-wind-indicator")],r0);var x3=class extends t1{createRenderRoot(){return this}render(){return this.forecast?x`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??Z}
      </div>
    `:Z}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?x`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),o=Mt(e);return x`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${e5({color:`var(${o})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return x`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;q5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};Q([i1({attribute:!1})],x3.prototype,"hass",2),Q([i1({attribute:!1})],x3.prototype,"weatherEntity",2),Q([i1({attribute:!1})],x3.prototype,"forecast",2),Q([i1({attribute:!1})],x3.prototype,"config",2),x3=Q([H2("wsfc-forecast-info")],x3);var i0=class extends t1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new j7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let o=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=o?.dataset.index?Number(o.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let o={selectedForecast:i,action:e.detail.action};n2(this,"action",o)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return Z;let e=[],i=W7(m5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),o;return this.forecast.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let H=n3(this.hass,a.datetime);o!==H&&(o=H,e.push(x`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${H}</div>
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
        class="${Q3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${p0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};Q([i1({attribute:!1})],i0.prototype,"hass",2),Q([i1({attribute:!1})],i0.prototype,"weatherEntity",2),Q([i1({attribute:!1})],i0.prototype,"forecast",2),Q([i1({attribute:!1})],i0.prototype,"forecastType",2),Q([i1({attribute:!1})],i0.prototype,"isTwiceDailyEntity",2),Q([i1({attribute:!1})],i0.prototype,"config",2),Q([i1({attribute:!1})],i0.prototype,"isScrollable",2),i0=Q([H2("wsfc-forecast-simple")],i0);var g3=class extends t1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=Ys.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return Z;let e=this.getClasses(),i=this.getWeatherStateIcon();return x`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:o}=this.getCustomWeatherIconPath();return x` <img src="${i}" alt="${o}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?x`
        <div
          style="background-size: cover;${e5({"background-image":e})}"
        ></div>
      `:Ys.has(this.state)?x`${ff(this.state,this.isNightTime)}`:Z}};Q([i1({attribute:!1})],g3.prototype,"config",2),Q([i1({attribute:!1})],g3.prototype,"classes",2),Q([i1({attribute:!1})],g3.prototype,"isNightTime",2),Q([i1({attribute:!1})],g3.prototype,"state",2),g3=Q([H2("wsfc-weather-condition-icon-provider")],g3);var Ys=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),df=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),pf=new Set(["hail","rainy","pouring"]),uf=new Set(["windy","windy-variant"]),hf=new Set(["snowy","snowy-rainy"]),mf=new Set(["lightning","lightning-rainy"]),ff=(r,t)=>w1`
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
  ${df.has(r)?w1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${pf.has(r)?w1`
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
  ${uf.has(r)?w1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${hf.has(r)?w1`
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
  ${mf.has(r)?w1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var _3=class extends t1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(Af(e))||P5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return Z;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==Z);return e.length===0?Z:x`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return Z;let{name:i,entity:o,label:a,icon:n}=e,H;if(o?H=p8(this.hass,this.weatherEntity,this.config,i,o):i&&(H=U7(this.hass,this.weatherEntity,this.config,i)),!H)return Z;let V=o?this.hass.states[o]||this.weatherEntity:this.weatherEntity,c=o?this.hass.states[o]:void 0,d=c&&!i?x`
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
              .icon=${Ba(i,n,c)}
            ></ha-attribute-icon>
          `;return x`
      <div class="wsfc-current-attribute">
        ${d}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,c)}
        </span>
        <span class="wsfc-current-attribute-value">${H}</span>
      </div>
    `}resolveLabel(e,i,o){return i||(e&&j2.includes(e)?this.localize(e):o?.attributes?.friendly_name??(e?P5(e).replace(/_/g," "):""))}};Q([i1({attribute:!1})],_3.prototype,"hass",2),Q([i1({attribute:!1})],_3.prototype,"weatherEntity",2),Q([i1({attribute:!1})],_3.prototype,"attributeConfigs",2),Q([i1({attribute:!1})],_3.prototype,"config",2),_3=Q([H2("wsfc-current-weather-attributes")],_3);var Af=a3(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var Xr={...Y5,precipitation:"mdi:weather-rainy"},q2=class extends t1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,o=i?{...this.config,entity:i}:this.config;U4(this,this.hass,o,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return Z;let{state:e}=this.weatherEntity,i=this.getTemperature(),o=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),n=this.getConfiguredAttributes(),H=this.config.name||this.weatherEntity.attributes.friendly_name;return x`
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
            ${H?x`<span class="wsfc-name wsfc-secondary">${H}</span>`:Z}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${i!==null?x`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${p0({stopPropagation:!0,hasHold:E0(this.config.hold_action),hasDoubleClick:E0(this.config.double_tap_action)})}
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
    `}isNightTime(){let e=$0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?j2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return u0(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?u0(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let V=typeof i=="string"?{name:i}:i,{name:c,entity:d,icon:m}=V;if(d){let A=p8(this.hass,this.weatherEntity,this.config,c,d);if(A!=null){let g=this.hass.states[d];return c?{icon:m??g?.attributes?.icon??Xr[c],value:A}:{stateObj:g,icon:m,value:A}}}else if(c&&c in this.weatherEntity.attributes){let g=Xr[c],y=U7(this.hass,this.weatherEntity,this.config,c);if(y!=null)return{icon:m??g,value:y}}}let o=this.getTemperatureExtrema();if(o)return{value:`${o.high} / ${o.low}`};let a,n;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,n="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,n="humidity";else return null;return{icon:Xr[n],value:this.hass.formatEntityAttributeValue(this.weatherEntity,n,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=B7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,o=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(B7(a.datetime)===e){let n=a.templow??a.temperature,H=a.temperature;n!=null&&n<i&&(i=n),H!=null&&H>o&&(o=H)}return i===1/0||o===-1/0?null:{high:u0(this.hass,this.weatherEntity,o,this.config.current?.temperature_precision),low:u0(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};Q([i1({attribute:!1})],q2.prototype,"hass",2),Q([i1({attribute:!1})],q2.prototype,"weatherEntity",2),Q([i1({attribute:!1})],q2.prototype,"hourlyForecast",2),Q([i1({attribute:!1})],q2.prototype,"dailyForecast",2),Q([i1({attribute:!1})],q2.prototype,"config",2),q2=Q([H2("wsfc-current-weather")],q2);var Qs=`:host {
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
`;var Ks="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var Xs=H1`
  ${k0(Qs)}

  :host {
    --moon-texture: url("${k0(Ks)}");
  }
`;var Z9=10,xf=3,pt=14,gf=75,_f=75,bf=4,wf=3,Js=2,Sf=[1.45,.7],tH=90,yf=50,Zf=.15,o0=class extends t1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],o=Math.round(i?.contentRect.height||0);this._containerHeight!==o&&(this._containerHeight=o,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),o=this.hass?.themes?.darkMode;i?.themes?.darkMode!==o&&(this._isDark=o??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?x`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return Z}})}
    `:Z}computeParticles(){let e=[];return this.getActiveEffects().forEach(o=>{switch(o){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/Z9*gf),a=Math.max(5,o),n=115/a;for(let H=0;H<a;H++){let V=-15+H*n+N1(0,n*.5),c=Math.random(),d=c*5+2,m=4.5/(c+.5)+N1(0,.8),A=N1(0,5,!0).toFixed(1),g=c*.7+.5,y=c<.3?1.5-c*3:c>.9?.5:0,O=d*.9,k=(10+c*25).toFixed(0),T=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${V.toFixed(1)}%`,delay:A,duration:m.toFixed(1),size:d.toFixed(0),opacity:g.toFixed(1),blur:y.toFixed(1),shadowSpread:O.toFixed(1),driftAmplitude:k,driftFrequency:T})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/Z9*_f),a=Math.max(10,o),n=100/a;for(let H=0;H<a;H++){let V=H*n+N1(0,n*.8),c=N1(.2,.5,!0),d=N1(.4,.7,!0),m=N1(.85,1,!0),A=this._containerHeight*m;i.push({type:"rain",x:`${V.toFixed(1)}%`,delay:c.toFixed(2),duration:d.toFixed(2),landingPosY:A.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let n=0;n<30;n++){let H=n%6,V=Math.floor(n/6),c=100/6,d=30/5,m=N1(H*c+c*.15,(H+1)*c-c*.15),A=N1(V*d+d*.15,(V+1)*d-d*.15),g=N1(1,3),y=N1(.3,1,!0),O=N1(0,5,!0);e.push({type:"star",x:`${m.toFixed(0)}`,y:`${A.toFixed(0)}`,size:`${g}`,opacity:y.toFixed(2),delay:O.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let o=new Set,a=c=>i===!0?!0:Array.isArray(i)?i.includes(c):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&o.add("rain"),e.includes("snowy")&&a("snow")&&o.add("snow"),e.includes("lightning")&&a("lightning")&&o.add("lightning");let n=e==="sunny"||e==="clear-night",H=e==="cloudy",V=e==="partlycloudy";return(n||V||H)&&a("sky")&&o.add("sky"),(n||V)&&(this.isNightTime()?a("moon")&&o.add("moon"):a("sun")&&o.add("sun")),(H||V)&&a("cloud")&&o.add("cloud"),Array.from(o)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?$0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return x`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return x`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>x`<div
                class="sun-ray"
                style="${e5({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${N1(0,360)}`,height:`${N1(100,200)}`,width:`${N1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),o=e?bf:wf,a=100/o,n=[];for(let H=0;H<o;H++){let V=H%Js,c=V===0,d=H*a+N1(0,a*.5)-a*.25,m=e?c?N1(140,200):N1(215,285):c?N1(110,165):N1(180,240),A=m*N1(.38,.5,!0),g=e?c?N1(-26,-12):N1(-16,-2):c?N1(-10,4):N1(-4,12),y=e?c?N1(.36,.5,!0):N1(.5,.64,!0):c?N1(.68,.8,!0):N1(.82,.92,!0);i&&(y*=.7),n.push({type:"cloud",variant:e?"grey":"white",night:i,layer:V,shape:N1(1,5),flip:N1(0,1)===1,x:d.toFixed(1),y:g.toFixed(0),width:m.toFixed(0),height:A.toFixed(0),opacity:y.toFixed(2)})}return n}computeCloudDrift(){let e=this.currentForecast,i=e&&q4(this.hass,this.weatherEntity,e)||0,o=Math.min(i,pt)/pt,a=e?d8(e):void 0,n=a!==void 0?-Math.sin(a*Math.PI/180):0,H=Math.max(Zf,o*Math.abs(n));return{duration:tH-H*(tH-yf),driftRight:n>=0}}renderCloudFilter(){return x`
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
    `}renderClouds(){let e=this._particles.filter(n=>n.type==="cloud");if(!e.length)return Z;let{duration:i,driftRight:o}=this.computeCloudDrift(),a=n=>{let H=["cloud",`cloud-shape-${n.shape}`,n.variant==="grey"?"grey":"",n.night?"night":""].filter(Boolean).join(" ");return x`<div
        class="${H}"
        style="${e5({left:`${n.x}%`,top:`${n.y}px`,width:`${n.width}px`,height:`${n.height}px`,opacity:n.opacity,transform:n.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return x`
      ${this.renderCloudFilter()}
      ${Array.from({length:Js},(n,H)=>{let V=e.filter(d=>d.layer===H);if(!V.length)return Z;let c=Math.round(i*(Sf[H]??1)/5)*5;return x`<div
          class="cloud-track ${o?"drift-right":""}"
          style="${e5({"--cloud-drift-duration":`${c}s`})}"
        >
          <div class="cloud-set">${V.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${V.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>x`
        <div
          class="snowflake-path"
          style="${e5({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>x`
        <div
          class="raindrop-path"
          style="${e5({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return x` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:_a(this.hass,new Date);return x`
      ${this._particles.filter(i=>i.type==="star").map(i=>x`
          <div
            class="star"
            style="${e5({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?Oe(e.fraction,e.litRight):Oe(1,!0);return x`
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
        <path d=${ba(e.fraction,e.litRight)}></path>
      </svg>
    `:Z}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=m5(this.hass,this.weatherEntity,"precipitation"),o=W7(i,"hourly");if(o>0){let a=e/o*Z9;return Math.min(Z9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?Z9:xf}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let o=q4(this.hass,this.weatherEntity,i)||0,a=e?15:35,n=Math.min(o,pt)/pt,H=i.wind_bearing*Math.PI/180,V=Math.sin(H),d=Math.pow(n,e?.8:.5);return V*d*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};o0.styles=Xs,Q([i1({attribute:!1})],o0.prototype,"hass",2),Q([i1({attribute:!1})],o0.prototype,"weatherEntity",2),Q([i1({attribute:!1})],o0.prototype,"currentForecast",2),Q([i1({attribute:!1})],o0.prototype,"config",2),Q([t5()],o0.prototype,"_isDark",2),Q([t5()],o0.prototype,"_containerHeight",2),o0=Q([H2("wsfc-animation-provider")],o0);var eH={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},Of=1e3,u2=class extends t1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):U4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{U4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),o=i.find(a=>a==="weather.home")||i[0]||"";return{...eH,entity:o}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>Y3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>Y3))throw new Error(`temperature_precision must be 0 or greater and at most ${Y3}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=W3({},eH,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:o}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:o}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,o=this.config?.forecast?.mode==="chart",a=1,n=1;return e&&(a+=2,n+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(o?(a+=3,n+=3):(a+=2,n+=2)),{rows:a,minRows:n,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return ua(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return Z;let e=this.config.entity,i=this.hass.states[e];if(!i)return x`<hui-warning>
        ${Aa(this.hass,e)}
      </hui-warning>`;let o=E5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",n=this.getCurrentForecast();return x`
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
                .actionHandler=${p0({hasHold:E0(this.config.hold_action),hasDoubleClick:E0(this.config.double_tap_action)})}
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
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,o=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:o}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let o=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,n=Ne(i,this._hourlyForecastEvent,"hourly"),H=Ne(i,this._dailyForecastEvent,E5(e));if(!n&&!H)return;this._dailyForecastData=H?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let V=this.config?.forecast?.hourly_group_size||0;V>1&&n?.forecast?this._hourlyForecastData=Da(n.forecast,V):this._hourlyForecastData=n?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let c=this.getCurrentForecast();if(!c||c.length===0){let A=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,g=E5(e),y=g!==void 0,O=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(A||this._currentForecastType==="hourly"&&!G4(e,"hourly")||O&&!y)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(q5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=g||"daily"):O&&this._hourlyForecastData&&(q5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let d=this.getCurrentForecast().length,m=(this._currentForecastType==="hourly"?o:a)??0;d!==m&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",o=i,a=o?this._hourlyForecastData:this._dailyForecastData,n=this.hass?.states[this.config.entity],H=E5(n)||"daily";if(!a||a.length===0){q5.debug(`Cannot toggle to ${o?"hourly":H} forecast - no data available`);return}this._currentForecastType=i?"hourly":H,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(o)this.scrollToForecastItem(e);else{let V=this._dailyForecastData?.[0];V&&this.scrollToForecastItem(V,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let o=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!o)return;let a=B7(e.datetime),n=this.getCurrentForecast(),H=n.findIndex(m=>B7(m.datetime)===a),V=H!==-1?H:n.length-1,c=this._currentItemWidth||0,d=V*c;o.scrollTo({left:d,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},Of)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let o=await e;if(!o)return;await o()}catch(o){if(Be(o))return;q5.warn(`Error unsubscribing from ${i} forecast:`,o)}}createForecastSubscription(e,i,o){return Promise.resolve(Ea(this.hass,this.config.entity,e,i)).catch(a=>{if(ka(a)){setTimeout(o,2e3);return}Be(a)||q5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!Fa(this.hass.states[this.config.entity])){q5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let o=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",n=a!=="hourly",H=a!=="daily",V=E5(o);V==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!n&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!H&&this._currentForecastType==="hourly"&&(this._currentForecastType=V||"daily"),V&&n&&(this._dailySubscription=this.createForecastSubscription(V,c=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=c,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),H&&G4(o,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",c=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=c,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let o=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/o),n=i.length,H=n*a,V=e-H,c=V>0?V/(n-1):0;this._currentItemWidth=a+c,this._isScrollable=i.length>o,this._haCard.style.setProperty("--forecast-item-gap",`${c}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:Object.values(Ie).some(H=>a.attributes[H]!==n.attributes[H])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),o=this.hass;return i?.connected===!1&&o?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:a.attributes.supported_features!==n.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!o)return!1;let a=i?.states[this.config.entity],n=o.states[this.config.entity];return!!a!=!!n}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),o=this.hass;return!i||!o?!1:Sa(this.config).some(a=>i.states[a]!==o.states[a])}};u2.styles=Ma,Q([i1({attribute:!1})],u2.prototype,"hass",2),Q([t5()],u2.prototype,"config",2),Q([t5()],u2.prototype,"_dailyForecastEvent",2),Q([t5()],u2.prototype,"_hourlyForecastEvent",2),Q([t5()],u2.prototype,"_currentItemWidth",2),Q([t5()],u2.prototype,"_currentForecastType",2),Q([t5()],u2.prototype,"_isScrollable",2),Q([W4("ha-card")],u2.prototype,"_haCard",2),Q([W4(".wsfc-forecast-container")],u2.prototype,"_forecastContainer",2);var _0=b4(j4(),1);var rH="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var iH="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var Tf={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},C0=class extends t1{constructor(){super(...arguments);this._schema=a3((e,i,o)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(o),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:c8.map(i=>({value:i,label:P5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:j2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||P5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:j2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||P5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:M8.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||P5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],o=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),o.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),o.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:o},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(o=>{let a=Tf[o];return[{name:`current.attribute_entity_${o}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${o}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${o}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:Y3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:Y3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=n7(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=n7(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let o=n7(this._config.current?.show_attributes);o[e]=i.detail.value,this._commitCustomAttributes(o)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let o=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||P5(o).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let o=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||P5(o).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let o=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${o}`)||P5(o).replace(/_/g," "),n=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${n}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let o=this.hass.states[this._config.entity];o&&(i=this.hass.formatEntityAttributeName(o,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return Z;let e=ut(this._config),i=this._getSelectedAttributes(e),o=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return x`
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
    `}_renderCustomAttributes(){let e=n7(this._config.current?.show_attributes);return x`
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
            <ha-svg-icon slot="start" .path=${iH}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,i){return x`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Pf}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${o=>this._customAttributeChanged(i,o)}
        ></ha-form>
        <ha-icon-button
          .path=${rH}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:$f(this._config.current?.show_attributes,e)}};n2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let o=Ff(i);if(delete o.temperature_entity,o?.forecast?.extra_attribute==="none"&&delete o.forecast.extra_attribute,Array.isArray(o.show_condition_effects)&&c8.every(n=>o.show_condition_effects.includes(n))&&(o.show_condition_effects=!0),o?.current){let a={},n={},H={};for(let V of Object.keys(o.current))if(V.startsWith("attribute_entity_")){let c=V.replace("attribute_entity_",""),d=o.current[V];d&&(a[c]=d),delete o.current[V]}else if(V.startsWith("attribute_label_")){let c=V.replace("attribute_label_",""),d=o.current[V];d&&(n[c]=d),delete o.current[V]}else if(V.startsWith("attribute_icon_")){let c=V.replace("attribute_icon_",""),d=o.current[V];d&&(H[c]=d),delete o.current[V]}if(Array.isArray(o.current.show_attributes)){let V=n7(this._config?.current?.show_attributes);o.current.show_attributes=oH(o.current.show_attributes,{entity:a,label:n,icon:H},V)}}n2(this,"config-changed",{config:o})}};C0.styles=H1`
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
  `,Q([i1({attribute:!1})],C0.prototype,"hass",2),Q([t5()],C0.prototype,"_config",2),C0=Q([H2("wsfc-flex-core-editor")],C0);var s7=r=>typeof r=="string"&&j2.includes(r),n7=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")s7(e)||t.push({name:e});else if(typeof e=="object"){let i=e;s7(i.name)||t.push(i)}}return t},oH=(r,t,e)=>{let i=j2.every(n=>r.includes(n)),o=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!o&&i?!0:[...r.map(n=>{let H=t.entity[n],V=t.label[n],c=t.icon[n];return H||V||c?{name:n,...H?{entity:H}:{},...V?{label:V}:{},...c?{icon:c}:{}}:n}),...e]},Pf=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],Ef=r=>{if(r===!0)return[...j2];if(typeof r=="string")return s7(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")s7(e)&&t.push(e);else if(typeof e=="object"){let i=e;s7(i.name)&&t.push(i)}}return t},$f=(r,t)=>{let e=Ef(r),i=[],o={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(o.entity[a.name]=a.entity),a.label&&(o.label[a.name]=a.label),a.icon&&(o.icon[a.name]=a.icon));return oH(i,o,t)},Ff=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[o,a]=i;!o||!a||((!t[o]||typeof t[o]!="object")&&(t[o]={}),t[o][a]=r[e],delete t[e])}return t},ut=r=>{let t=Rf(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...c8]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...j2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let o of e)if(typeof o=="string")s7(o)&&i.push(o);else if(typeof o=="object"&&o!==null){let a=o;s7(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},Rf=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast.${o}`]=i[o];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`current.${o}`]=i[o];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast_action.${o}`]=i[o];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(M=>M.id),i=Object.fromEntries(t.map(M=>[M.id,M.label])),o={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],n=(M,h,p)=>Math.min(p,Math.max(h,M)),H=M=>typeof M=="number"&&isFinite(M),V={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function c(M){return V[M]||"mdi:weather-cloudy"}let d=["temps","icons","extra"],m={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function A(M){let h=Array.isArray(M.forecast_row_order)?M.forecast_row_order.filter(p=>d.includes(p)):null;(!h||!h.length)&&(h=(M.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let p of d)h.includes(p)||h.push(p);return h}let g={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},y=Object.keys(g);function O(M){let h=M&&M.forecast_extra,p;Array.isArray(h)?p=h:typeof h=="string"&&h&&h!=="none"?p=[h]:p=[];let v=new Set(p.filter(_=>g[_]));return y.filter(_=>v.has(_))}let k=["temps","icons",...y],T=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(y.map(M=>[M,g[M].label]))),$=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function F(M){M=M||{};let h={},p;if(Array.isArray(M.forecast_metric_order)&&M.forecast_metric_order.length){p=M.forecast_metric_order.filter(_=>k.includes(_));let v=M.forecast_metric_pos||{};for(let _ of k)h[_]=v[_]||"hidden"}else{h.temps=M.forecast_temps||"hidden",h.icons=M.forecast_icons||"hidden";let v=O(M),_=h.temps!=="hidden"?h.temps:h.icons!=="hidden"?h.icons:"below";for(let S of y)h[S]=v.includes(S)?_:"hidden";let w=A(M);p=[];for(let S of w)S==="extra"?p.push(...y):p.push(S)}for(let v of k)p.includes(v)||p.push(v);for(let v of k)h[v]||(h[v]="hidden");return p.map(v=>({key:v,pos:h[v]}))}function K(M,h){if(!M||!h)return null;let p=g[M],v=h[M];return M==="wind_direction"&&(v=h.wind_direction!=null?h.wind_direction:h.wind_bearing),v==null||v===""?null:p&&p.arrow?"":(typeof v=="number"&&(v=Math.round(v)),v+(p&&p.unit||""))}function G(M,h){if(M==="wind_direction")return(g.wind_bearing||{}).icon;let p=g[M];return p?p.icon:""}let l1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function X(M,h){if(h){let p=l1[M];if(p&&o[p]&&o[p].icon)return o[p].icon}return G(M)}function e1(M){return M==="below"||M==null?0:M==="above"?100:M==="mid"?50:n(Number(M)||0,0,100)}function o1(M,h){h=h||0;let p="  ".repeat(h),v=_=>{if(_==null)return"null";if(typeof _=="boolean"||typeof _=="number")return String(_);let w=String(_);return w===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(w)||/^\s|\s$/.test(w)||/^(true|false|null|yes|no|~)$/i.test(w)||/^[\d.+-]/.test(w)?'"'+w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':w};if(Array.isArray(M))return M.length?M.map(_=>{if(_&&typeof _=="object"){let w=o1(_,h+1).replace(/^\s+/,"");return p+"- "+w}return p+"- "+v(_)}).join(`
`):p+"[]";if(M&&typeof M=="object"){let _=Object.keys(M);return _.length?_.map(w=>{let S=M[w];return S&&typeof S=="object"&&(Array.isArray(S)?S.length:Object.keys(S).length)?p+w+`:
`+o1(S,h+1):S&&typeof S=="object"?p+w+": "+(Array.isArray(S)?"[]":"{}"):p+w+": "+v(S)}).join(`
`):p+"{}"}return p+v(M)}function h1(M){try{return typeof q3=="function"&&q3(M)||M.language||navigator.language||"en"}catch{return"en"}}function U1(M){let h=M&&M.config||{};return{lat:h.latitude,lng:h.longitude}}function y1(M,h){if(!(h instanceof Date)||isNaN(h))return"--";try{return h.toLocaleTimeString(h1(M),{hour:"2-digit",minute:"2-digit"})}catch{return h.toTimeString().slice(0,5)}}function l2(M,h){let p=h instanceof Date?h:new Date;try{if(typeof $0=="function"){let w=$0(M,p);if(w&&w.sunrise&&w.sunset)return{sunrise:new Date(w.sunrise),sunset:new Date(w.sunset)}}}catch{}let{lat:v,lng:_}=U1(M);if(H(v)&&H(_)&&typeof _0=="object"&&_0.getTimes)try{let w=_0.getTimes(p,v,_);return{sunrise:w.sunrise,sunset:w.sunset}}catch{}return{sunrise:null,sunset:null}}function K1(M,h){let{lat:p,lng:v}=U1(M);if(!H(p)||!H(v)||typeof _0!="object"||!_0.getPosition)return null;try{return _0.getPosition(h,p,v).altitude}catch{return null}}function Z1(M){if(M==null)return .5;let h=M*180/Math.PI;return h>=0?n(.42+.58*Math.sin(M),.42,1):h>-12?n(.42*(h+12)/12,0,.42):0}let J=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function X1(M){M=n(M,0,1);let h=J[0],p=J[J.length-1];for(let S=0;S<J.length-1;S++)if(M>=J[S].at&&M<=J[S+1].at){h=J[S],p=J[S+1];break}let v=p.at-h.at||1,_=(M-h.at)/v,w=S=>Math.round(h.c[S]+(p.c[S]-h.c[S])*_);return[w(0),w(1),w(2)]}function n1(M){if(typeof M!="string")return null;let h=M.trim().replace(/^#/,"");return h.length===3&&(h=h.split("").map(p=>p+p).join("")),/^[0-9a-fA-F]{6}$/.test(h)?[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]:null}let U=M=>`rgb(${Math.round(M[0])}, ${Math.round(M[1])}, ${Math.round(M[2])})`,r1=(M,h,p)=>M.map((v,_)=>v+(h[_]-v)*p);function s1(M,h){M=n(M,0,1);let p,v=h&&n1(h.day_color),_=h&&n1(h.night_color);v||_?p=r1(_||[11,16,38],v||[206,227,255],M):p=X1(M);let w=h&&H(h.cloud)?n(h.cloud,0,1):0;if(w>0){let S=.5*(p[0]+p[1]+p[2]),E=[S*.75+40,S*.75+42,S*.78+48];p=r1(p,E,w*.6)}return U(p)}function m1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function V1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function L1(M){return{font_size:M,font_weight:"400",color:""}}function g1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function k1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function h2(M,h){if(M==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let p=v=>`0 0 2px ${v}, 0 0 4px ${v}, 1px 1px 2px ${v}`;return M==="outline"?p("rgba(0,0,0,0.85)"):M==="auto"?p(h?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let x2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function $2(M){let h=M&&M.show_forecast!==!1,p=M&&M.default_forecast||"daily",v=a.map(E=>({key:E,show:!0})),_=m1,w=g1,S=V1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:M?M.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...k1(),...w(),..._(),...S()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:v,...w(),..._(),...S()},hourly:{show:h&&p==="hourly",...w(),..._(),...S()},daily:{show:h&&p!=="hourly",...w(),..._(),...S()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...w(),..._(),...S()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...w(),..._(),...S()}}}function c2(M){let h=$2(M),p=M&&M.wfc||{},v={order:Array.isArray(p.order)&&p.order.length?p.order.slice():h.order,card:{...h.card,...p.card||{}},current:{...h.current,...p.current||{}},details:{...h.details,...p.details||{}},hourly:{...h.hourly,...p.hourly||{}},daily:{...h.daily,...p.daily||{}},sun_position:{...h.sun_position,...p.sun_position||{}},sun_arc:{...h.sun_arc,...p.sun_arc||{}},editor_accordion:p.editor_accordion!==!1},_=Array.isArray(p.details&&p.details.items)?p.details.items.slice():h.details.items.slice();_=_.filter(S=>S&&o[S.key]),v.details.items=_.length?_:h.details.items,v.details.columns=n(parseInt(v.details.columns,10)||2,1,4);let w=new Set(v.details.items.map(S=>S.key));return Object.keys(o).forEach(S=>{w.has(S)||v.details.items.push({key:S,show:!1})}),["sun_position","sun_arc"].forEach(S=>{let E=p[S]||{};E.flush!==void 0&&(E.flush_top===void 0&&(v[S].flush_top=!!E.flush),E.flush_bottom===void 0&&(v[S].flush_bottom=!!E.flush),E.flush_edges===void 0&&(v[S].flush_edges=!!E.flush))}),e.forEach(S=>{v.order.includes(S)||v.order.push(S)}),v.order=v.order.filter(S=>e.includes(S)),v}let c1=u2.prototype;if(typeof q2<"u"&&q2&&q2.prototype&&q2.prototype.getSecondaryWeatherAttribute){let M=q2.prototype.getSecondaryWeatherAttribute;q2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:M.call(this)}}let o5=c1.setConfig;c1.setConfig=function(M){let h=c2(M),p=h.sun_position||{},v=p.forecast_extra,w=!!(!!(p.show||h.sun_arc&&h.sun_arc.show&&h.sun_arc.baseline_mode==="sky")&&(p.weather_adjust!==!1||[p.forecast_temps,p.forecast_icons].some(N=>N&&N!=="hidden")||(Array.isArray(v)?v.length:v&&v!=="none")||Object.values(p.forecast_metric_pos||{}).some(N=>N&&N!=="hidden"))),S=!!(h.hourly.show||w),E=!!(S||h.daily.show),z=S&&h.daily.show?"both":S?"hourly":"daily",W={...M,show_current:h.current.show||!E,show_forecast:E};E&&(z==="both"||!M.forecast_types||w)&&(W.forecast_types=z),o5.call(this,W),this.config.show_current=!!h.current.show,this.config.show_forecast=E,W.forecast_types&&(this.config.forecast_types=W.forecast_types),this.__wfcCfgSrc=void 0};let Y2=c1.updated;c1.updated=function(M){Y2&&Y2.call(this,M),this.isConnected&&this._wfcSyncForecastSources()};let g5=c1.disconnectedCallback;c1.disconnectedCallback=function(){g5&&g5.call(this),this._wfcTeardownForecastSources()};let F2=c1.shouldUpdate;c1.shouldUpdate=function(M){if(F2&&F2.call(this,M))return!0;if(M&&M.has("hass")&&this.config){let h=M.get("hass"),p=this.hass;if(h&&p){let v=new Set;for(let _ of this._wfcSources())if(_.overrides&&Object.values(_.overrides).forEach(w=>w&&v.add(w)),e2(_.ref)){let w=Q0(this.config,this.hass,_2(_.ref));Object.values(w).forEach(S=>S&&v.add(S))}else _.ref&&v.add(_.ref);for(let _ of v)if(h.states[_]!==p.states[_])return!0}}return!1},c1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=c2(this.config)),this.__wfcCfg},c1.computeRowSizing=function(){let M=this._wfc(),h=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",p={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let S=(M.details.items||[]).filter(E=>E.show).length;return Math.max(1,Math.ceil(S/2))},hourly:()=>h?3:2,daily:()=>h?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(M.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(M.sun_arc.height)||90)+24)/56))},v=1,_=4;M.order.filter(S=>M[S]&&M[S].show&&p[S]).forEach(S=>{v+=p[S](),(S==="hourly"||S==="daily")&&(_=6)});let w=Math.max(1,v-1);return{rows:v,minRows:w,minColumns:_}},c1.render=function(){if(!this.config||!this.hass)return Z;let M=this.config.entity,h=this.hass.states[M];if(!h){let z=this.hass,W=z?z.config&&z.config.state!=="NOT_RUNNING"?`${z.localize("ui.card.common.entity_not_found")}: ${M}`:z.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return x`<hui-warning>${W}</hui-warning>`}let p=this._wfc(),v=typeof E5=="function"&&E5(h)==="twice_daily",_=this.config.forecast&&this.config.forecast.mode==="chart",w={stateObj:h,isTwice:v,chart:_},E=p.order.filter(z=>p[z]&&p[z].show).map(z=>{let W=this._wfcRenderSection(z,p,w);if(W===Z||W==null)return null;let N=p[z]||{},a1="wsfc-section";N.flush_top&&(a1+=" wsfc-flush-top"),N.flush_bottom&&(a1+=" wsfc-flush-bottom"),N.flush_edges&&(a1+=" wsfc-flush-edges");let p1=this._wfcBackgroundStyle(N);return x`<div class=${a1} data-section-id=${z} style=${p1}>
          ${this._wfcRenderTitle(N)}${W}
        </div>`}).filter(Boolean);return x`
      <ha-card>
        ${this.config.show_condition_effects?x`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${h}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:Z}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(p)}
        ${this._wfcCardAppearanceStyle(p)}
        <div class="wsfc-container">${E}</div>
      </ha-card>
    `},c1._wfcDividerStyle=function(M){let h=[];return M.order.forEach(p=>{let v=M[p];if(!v||!v.show||!v.divider_above&&!v.divider_below)return;let _=`.wsfc-section[data-section-id="${p}"]`,w=v.divider_color||"var(--divider-color, #4a4a4a)",S=`${_}{position:relative;}`,E=z=>["solid","dashed","dotted","double"].includes(z)?z:"solid";if(v.divider_above){let z=Number(v.divider_above_width)||1,W=n(Number(v.divider_above_length)||100,1,100),N=E(v.divider_above_style);S+=`${_}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${_}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${W}%;border-top:${z}px ${N} ${w};}`}if(v.divider_below){let z=Number(v.divider_below_width)||1,W=n(Number(v.divider_below_length)||100,1,100),N=E(v.divider_below_style);S+=`${_}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${_}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${W}%;border-bottom:${z}px ${N} ${w};}`}h.push(S)}),h.length?x`<style>${h.join("")}</style>`:Z},c1._wfcCardAppearanceStyle=function(M){let h=M&&M.card||{},p=[];if(h.border_enabled){let _=Math.max(0,Number(h.border_width)||1),w=h.border_color||"var(--primary-color, #2196f3)",S=E=>E!==!1?`${_}px solid ${w}`:"none";p.push(`border-top:${S(h.border_top)}`),p.push(`border-bottom:${S(h.border_bottom)}`),p.push(`border-left:${S(h.border_left)}`),p.push(`border-right:${S(h.border_right)}`)}if(h.border_radius!==""&&h.border_radius!=null){let _=`${Number(h.border_radius)}px`,w=S=>S!==!1?_:"0";p.push(`border-radius:${w(h.corner_tl)} ${w(h.corner_tr)} ${w(h.corner_br)} ${w(h.corner_bl)}`)}h.bg_color&&p.push(`background:${h.bg_color}`);let v=[];if(h.glow_enabled){let _=h.glow_color||"var(--primary-color, #2196f3)",w=n(Number(h.glow_intensity)||1,.2,3),S=(12*w).toFixed(1),E=(-4*w).toFixed(1),z=(4*w).toFixed(1);h.glow_borders_only===!1||!h.border_enabled?v.push(`0 0 ${S}px ${E}px ${_}`):(h.border_top!==!1&&v.push(`0 -${z}px ${S}px ${E}px ${_}`),h.border_bottom!==!1&&v.push(`0 ${z}px ${S}px ${E}px ${_}`),h.border_left!==!1&&v.push(`-${z}px 0 ${S}px ${E}px ${_}`),h.border_right!==!1&&v.push(`${z}px 0 ${S}px ${E}px ${_}`))}if(h.shadow_enabled){let _=g2(h.shadow_color||"#000000",n((Number(h.shadow_opacity)||0)/100,0,1))||h.shadow_color||"rgba(0,0,0,0.35)";v.push(`${Number(h.shadow_x)||0}px ${Number(h.shadow_y)||0}px ${Number(h.shadow_blur)||0}px ${Number(h.shadow_spread)||0}px ${_}`)}return v.length&&p.push(`box-shadow:${v.join(", ")}`),p.length?x`<style>ha-card{${p.join(";")};}</style>`:Z},c1._wfcBackgroundStyle=function(M){if(!M||!M.background_enabled)return"";let h=n(M.background_opacity==null?80:Number(M.background_opacity),0,100),p=(100-h)/100,v=100-h,_=M.background_color||"",w;_?w=g2(_,p)||_:w=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${v}%, transparent)`;let S=M.flush_edges?"0":"8px";return`background-color:${w};border-radius:${S};`};function g2(M,h){if(typeof M!="string")return null;let p=M.trim().replace(/^#/,"");if(p.length===3&&(p=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]),!/^[0-9a-fA-F]{6}$/.test(p))return null;let v=parseInt(p.slice(0,2),16),_=parseInt(p.slice(2,4),16),w=parseInt(p.slice(4,6),16);return`rgba(${v}, ${_}, ${w}, ${h})`}c1._wfcRenderTitle=function(M){if(!M||!M.title_show)return Z;let h=M.title_text||"",p=M.title_icon||"",v=M.title_text_align||"left",_=M.title_icon_align||"left",w=!!h&&v!=="hide",S=!!p&&_!=="hide";if(!w&&!S)return Z;let E=(M.title_icon_color?`color:${M.title_icon_color};`:"")+(M.title_icon_size?`--mdc-icon-size:${M.title_icon_size}px;width:${M.title_icon_size}px;height:${M.title_icon_size}px;`:""),z=(M.title_color?`color:${M.title_color};`:"")+(M.title_font_size?`font-size:${M.title_font_size}px;`:"")+(M.title_font_weight?`font-weight:${M.title_font_weight};`:""),W=S?x`<ha-icon class="wsfc-title-icon" .icon=${p} style=${E}></ha-icon>`:Z,N=w?x`<span class="wsfc-title-text" style=${z}>${h}</span>`:Z,a1=B=>{let M1=[];return S&&_===B&&M1.push(W),w&&v===B&&M1.push(N),M1},p1=Number(M.title_indent)||0;return x`<div class="wsfc-title-row" style="padding-left:${p1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${a1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${a1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${a1("right")}</span>
    </div>`},c1._wfcRenderSection=function(M,h,p){switch(M){case"current":return this._wfcRenderCurrent(p);case"details":return this._wfcRenderDetails(h,p);case"hourly":return this._wfcRenderForecast("hourly",p);case"daily":return this._wfcRenderForecast("daily",p);case"sun_position":return this._wfcRenderSunPosition(h,p);case"sun_arc":return this._wfcRenderSunArc(h,p);default:return Z}},c1._wfcRenderCurrent=function(M){let p=this._wfc().current||{},v=Number(p.header_state_size)||0,_=Number(p.header_temp_size)||0,w=Number(p.header_icon_size)||0,S=(w?`--current-conditions-icon-size:${w}px;`:"")+(v||_?`--wfc-hdr-state:${v?v+"px":"inherit"};--wfc-hdr-temp:${_?_+"px":"inherit"};`:""),E=x`
      <div
        class="wsfc-current-weather-container${v||_?" wsfc-hdr-sized":""}"
        style=${S||Z}
        .actionHandler=${p0({hasHold:E0(this.config.hold_action),hasDoubleClick:E0(this.config.double_tap_action)})}
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
    `,z=!!p.clock_show_time,W=!!p.clock_show_date;if(!z&&!W)return E;this._wfcEnsureClockTimer();let N=A2=>A2==="above"?"above-center":A2==="below"?"below-center":A2||"right",a1=N(p.clock_placement),p1=p.clock_date_placement==="with_time"||!p.clock_date_placement?a1:N(p.clock_date_placement),B=z?this._wfcRenderClockTime(p):null,M1=W?this._wfcRenderClockDate(p):null,Y1=z&&W&&(p.clock_date_placement==="with_time"||!p.clock_date_placement),F1={},R1=(A2,m2)=>{m2&&(F1[A2]=F1[A2]||[]).push(m2)};Y1?R1(a1,x`<div class="wsfc-clock">${B}${M1}</div>`):(B&&R1(a1,x`<div class="wsfc-clock">${B}</div>`),M1&&R1(p1,x`<div class="wsfc-clock">${M1}</div>`));let Q1=A2=>{let m2=[];return["left","center","right"].forEach(J1=>{let W2=A2+"-"+J1;F1[W2]&&m2.push(x`<div class="wsfc-clock-band-cell wsfc-cb-${J1}">${F1[W2]}</div>`)}),m2.length?x`<div class="wsfc-clock-band">${m2}</div>`:Z},d1=Q1("above"),D1=Q1("below"),n0=F1.left||Z,d5=[].concat(F1.right||[],F1.center||[]),I5=F1.left&&F1.left.length||d5.length?x`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${n0}
          <div class="wsfc-cur-grow">${E}</div>
          ${d5.length?d5:Z}
        </div>`:E;return x`<div class="wsfc-cur-stack">${d1}${I5}${D1}</div>`},c1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let M=this.__wfcCfg||(this.config?c2(this.config):null),h=M&&M.current;this.isConnected&&h&&(h.clock_show_time||h.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},c1._wfcRenderClockTime=function(M){let h=new Date,p=h1(this.hass),v={hour:"2-digit",minute:"2-digit"};M.clock_show_seconds&&(v.second="2-digit"),M.clock_format==="12"?v.hour12=!0:M.clock_format==="24"&&(v.hour12=!1);let _;try{_=h.toLocaleTimeString(p,v)}catch{_=h.toTimeString().slice(0,M.clock_show_seconds?8:5)}M.clock_format==="12"&&(_=_.replace(/^0/,""));let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),S=h2(M.clock_contrast,w),E=`font-size:${Number(M.clock_font_size)>0?n(Number(M.clock_font_size),8,100)+"px":"var(--wfc-clock-auto, 28px)"};font-weight:${M.clock_font_weight||"500"};`+(M.clock_color?`color:${M.clock_color};`:"")+(M.clock_font_family?`font-family:${M.clock_font_family};`:"")+(S?`text-shadow:${S};`:"");return x`<div class="wsfc-clock-time" style=${E}>${_}</div>`};function c5(M,h,p){let v=z=>z<10?"0"+z:""+z,_=M.toLocaleDateString(p,{month:"long"}),w=M.toLocaleDateString(p,{month:"short"}),S=M.toLocaleDateString(p,{weekday:"long"}),E={YYYY:""+M.getFullYear(),YY:v(M.getFullYear()%100),MONTH:_,MON:w,WDAY:S,MM:v(M.getMonth()+1),M:""+(M.getMonth()+1),DD:v(M.getDate()),D:""+M.getDate()};return h.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,z=>E[z]!=null?E[z]:z)}c1._wfcRenderClockDate=function(M){let h=new Date,p=h1(this.hass),v=x2.find(W=>W.value===M.clock_date_format)||x2[0],_;try{_=v.pattern?c5(h,v.pattern,p):h.toLocaleDateString(p,v.opts)}catch{_=h.toDateString()}let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),S=M.clock_date_contrast!=null?M.clock_date_contrast:M.clock_contrast,E=h2(S,w),z=`font-size:${Number(M.clock_date_font_size)>0?n(Number(M.clock_date_font_size),8,100)+"px":"var(--wfc-clock-date-auto, 12px)"};`+(M.clock_date_color?`color:${M.clock_date_color};`:"")+(E?`text-shadow:${E};`:"");return x`<div class="wsfc-clock-date" style=${z}>${_}</div>`},c1._wfcForecastConfigFor=function(M){let h=this.config&&this.config.forecast||{},p=h[`${M}_mode`]||h.mode||"simple",v=h[`${M}_extra_attribute`]!=null?h[`${M}_extra_attribute`]:h.extra_attribute;(v==="none"||v==="")&&(v=void 0);let _=h[`${M}_chart_attribute`]!=null?h[`${M}_chart_attribute`]:h.default_chart_attribute,w={...h,mode:p};return v==null?delete w.extra_attribute:w.extra_attribute=v,_!=null&&(w.default_chart_attribute=_),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(E=>{let z=h[`${M}_${E}`];z!=null&&(w[E]=z)}),{config:{...this.config,forecast:w},chart:p==="chart"}},c1._wfcRenderForecast=function(M,h){let p=M==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!p||!p.length)return Z;let v=this._wfcMergeForecast(p,M),{config:_,chart:w}=this._wfcForecastConfigFor(M),S=w?x`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${_}
          .weatherEntity=${h.stateObj}
          .forecast=${v}
          .forecastType=${M}
          .isTwiceDailyEntity=${h.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:x`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${_}
          .weatherEntity=${h.stateObj}
          .forecast=${v}
          .forecastType=${M}
          .isTwiceDailyEntity=${h.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return x`<div class="wsfc-forecast-container" data-forecast-type=${M}>${S}</div>`};let M5="device:",e2=M=>typeof M=="string"&&M.indexOf(M5)===0,_2=M=>e2(M)?M.slice(M5.length):null,Y0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],Ut=Y0.map(M=>M.key),jt=[{re:/feels?[\s_-]?likes?|apparent|wind[\s_-]?chill|windchill|heat[\s_-]?index/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}],M7=new WeakMap;function k3(M,h){if(!M||!h||!M.entities)return[];let p=M7.get(M.entities);if(p&&p.hass!==M&&(p.hass=M,Object.keys(M.entities).length!==p.size0&&(p=null)),!p){p=new Map;for(let v in M.entities){let _=M.entities[v]&&M.entities[v].device_id;_&&(p.has(_)||p.set(_,[]),p.get(_).push(v))}p.size0=Object.keys(M.entities).length,p.hass=M,M7.set(M.entities,p)}return p.get(h)||[]}function L6(M,h){let p=M&&M.states[h];if(!p)return null;let v=p.attributes&&p.attributes.device_class,_=(h+" "+(p.attributes&&p.attributes.friendly_name||"")).toLowerCase(),w=null;for(let E of jt)if(E.re.test(_)){w=E.key;break}if(w||(v==="temperature"?w="temperature":v==="humidity"?w="humidity":v==="pressure"||v==="atmospheric_pressure"?w="pressure":v==="wind_speed"?w="wind_speed":v==="irradiance"?w="solar_radiation":v==="illuminance"?w="illuminance":v==="precipitation_intensity"?w="precipitation":/(^|[\s_-])temperature/.test(_)?w="temperature":/pressure/.test(_)&&(w="pressure")),!w||Ut.indexOf(w)===-1)return null;let S=0;if(/indoor|inside/.test(_)||w==="uv_index"&&!/index|\buvi\b/.test(_))return null;if(w==="apparent_temperature"&&/chill|heat[\s_-]?index/.test(_)&&(S+=10),/globe|wbgt|soil|water|pool|probe|leaf|\bch[\s_-]?\d|(temperature|humidity)[\s_-]?\d|_\d+$/.test(_.replace(/_2$/,""))&&(S+=40),/outdoor/.test(_)&&(S-=2),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(_)&&(S+=20),w==="pressure"){if(/deficit|vpd|vapou?r/.test(_))return null;/absolute/.test(_)&&(S+=50),/relative|sea/.test(_)&&(S-=5)}return w==="precipitation"&&(/rate/.test(_)&&(S-=5),/event|hourly|24h|total/.test(_)&&(S+=10)),{key:w,penalty:S}}let l6=new WeakMap;function d4(M,h){let p=M&&M.devices||{},v=l6.get(p);return v||(v=new Map,l6.set(p,v)),v.has(h)||v.set(h,c6(p,h)),v.get(h)}function c6(M,h){let p=M[h],v=p&&p.config_entries||[];return v.length?Object.keys(M).filter(_=>_!==h&&(M[_].config_entries||[]).some(w=>v.includes(w))):[]}let M6=new WeakMap;function d7(M,h){if(!M||!M.entities)return p7(M,h);let p=M6.get(M.entities);p||(p=new Map,M6.set(M.entities,p));let v=[h,...d4(M,h)],_="";for(let z of v)for(let W of k3(M,z))M.states[W]&&(_+=W.length+",");let w=h+"|"+v.length+"|"+_,S=p.get(h);if(S&&S.key===w&&S.devices===M.devices)return S.map;let E=p7(M,h);return p.set(h,{key:w,devices:M.devices,map:E}),E}function p7(M,h){let p={},v={},_=k3(M,h).map(S=>[S,0]),w=d4(M,h).flatMap(S=>k3(M,S).map(E=>[E,15]));for(let[S,E]of[..._,...w]){let z=L6(M,S);if(!z)continue;let W={key:z.key,penalty:z.penalty+E};(v[W.key]==null||W.penalty<v[W.key])&&(v[W.key]=W.penalty,p[W.key]=S)}return p}function Q0(M,h,p){let v={...d7(h,p)},_=M&&M.metric_sources&&M.metric_sources.device_map&&M.metric_sources.device_map[p]||{};for(let w in _)_[w]&&(v[w]=_[w]);return v}function d6(M,h){let p=M&&M.metric_sources||{};if(Array.isArray(p.sources))return p.sources.filter(z=>z&&z.ref).map(z=>({ref:z.ref,overrides:{...z.overrides||{}},disabled:!!z.disabled}));let v=[],_=p.device_map||{},w=p.custom||{},S=z=>e2(z)?{..._[_2(z)]||{}}:{},E=p.primary||M&&M.entity;return E&&v.push({ref:E,overrides:{...S(E),...w}}),p.fallback&&p.fallback!==E&&v.push({ref:p.fallback,overrides:S(p.fallback)}),v}c1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},c1._wfcSources=function(){return d6(this.config,this.hass)},c1._wfcSlotEntityForKey=function(M,h){return M?e2(M)?Q0(this.config,this.hass,_2(M))[h]||null:M:null},c1._wfcMetricEntityChain=function(M){let h=[],p=v=>{v&&!h.includes(v)&&this.hass&&this.hass.states[v]&&h.push(v)};for(let v of this._wfcSources())v.disabled||(v.overrides&&v.overrides[M]&&p(v.overrides[M]),p(this._wfcSlotEntityForKey(v.ref,M)));return p(this.config&&this.config.entity),h},c1._wfcCurrentMetric=function(M){for(let h of this._wfcMetricEntityChain(M)){let p=this.hass.states[h];if(p)if(h.startsWith("weather."))try{let v=U7(this.hass,p,this.config,M);if(v!=null&&v!=="")return v}catch{}else{let v=p.state;if(v!=null&&v!==""&&v!=="unknown"&&v!=="unavailable"){let _=p.attributes&&p.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(p):_?`${v} ${_}`:`${v}`}catch{return _?`${v} ${_}`:`${v}`}}}}return null},c1._wfcCurrentMetricRaw=function(M){if(!this.hass)return null;for(let h of this._wfcMetricEntityChain(M)){let p=this.hass.states[h];if(p)if(h.startsWith("weather.")){let v=p.attributes?p.attributes[M]:null;if(v!=null&&v!=="")return v}else{let v=p.state;if(v!=null&&v!==""&&v!=="unknown"&&v!=="unavailable"){let _=Number(v);return isNaN(_)?v:_}}}return null},c1._wfcMergedCurrentEntity=function(M){try{if(!M||!M.attributes)return M;let h=this.config&&this.config.entity;if(!this._wfcSources().some(E=>E.ref!==h||E.overrides&&Object.keys(E.overrides).length))return M;let _={...M.attributes},w=!1,S=["temperature",...typeof j2<"u"?j2:[]];for(let E of S){let z=this._wfcCurrentMetricRaw(E);z!=null&&z!==_[E]&&(_[E]=z,w=!0)}return w?{...M,attributes:_}:M}catch{return M}},c1._wfcDetailValue=function(M,h){let p=o[M];if(!p)return null;if(p.kind==="sunrise"||p.kind==="sunset"){let v=l2(this.hass),_=p.kind==="sunrise"?v.sunrise:v.sunset;return _?y1(this.hass,_):null}try{let v=this._wfcCurrentMetric(M);return v??null}catch{return null}},c1._wfcRenderDetails=function(M,h){let p=M.details||{},v=(p.items||[]).filter(E=>E.show);if(p.chips)return this._wfcRenderDetailChips(p,v,h);let _=[];if(v.forEach(E=>{let z=o[E.key];if(!z)return;let W=this._wfcDetailValue(E.key,h);if(W==null||W==="")return;let N=E.mode==="custom",a1=N?E.icon_color:p.global_icon_color,p1=N?E.icon_size:p.global_icon_size,B=N?E.text_color:p.global_text_color,M1=N?E.text_size:p.global_text_size,Y1=E.icon||z.icon||Y5&&Y5[E.key]||"mdi:information-outline",F1=(a1?`color:${a1};`:"")+(p1?`--mdc-icon-size:${p1}px;width:${p1}px;height:${p1}px;`:""),R1=(B?`color:${B};`:"")+(M1?`font-size:${M1}px;`:"");_.push(x`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${Y1} style=${F1}></ha-icon>
          <span class="wsfc-detail-value" style=${R1}>${W}</span>
        </div>
      `)}),!_.length)return Z;if((p.details_layout||"grid")==="wrap")return x`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${_}</div>
      </div>`;let w=n(parseInt(M.details.columns,10)||2,1,4),S=`grid-template-columns:repeat(${w}, minmax(0, 1fr));`;return x`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${w}" style=${S}>${_}</div>
    </div>`},c1._wfcRenderDetailChips=function(M,h,p){let v=n(Number(M.chip_scale)||1,.5,2.5),w=(M.chip_pill!=null?!!M.chip_pill:M.chip_shape!=="rounded"&&M.chip_shape!=="square")?999:M.chip_radius==null?8:Number(M.chip_radius),S=M.chip_icon_source||"auto",E=M.chip_show_icon!==!1,z=M.chip_layout||"wrap",W=Math.max(0,parseInt(M.chip_columns,10)||0),N=M.chip_text_size?`${Number(M.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${v})`,a1=M.chip_icon_size?`${Number(M.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${v})`,p1=`--wfc-chip-scale:${v};--wfc-chip-radius:${w}px;--wfc-chip-font:${N};--wfc-chip-icon-size:${a1};`+(M.chip_bg?`--wfc-chip-bg:${M.chip_bg};`:"")+(M.chip_border_color?`--wfc-chip-border:${M.chip_border_color};`:"")+(M.chip_text_color?`--wfc-chip-text:${M.chip_text_color};`:"")+(M.chip_icon_color?`--wfc-chip-icon:${M.chip_icon_color};`:"");z==="grid"&&W>0&&(p1+=`grid-template-columns:repeat(${W}, minmax(0, 1fr));`);let B=[];return h.forEach(M1=>{let Y1=o[M1.key];if(!Y1)return;let F1=this._wfcDetailValue(M1.key,p);if(M.chip_hide_when_off&&(F1==null||F1===""||F1==="unknown"||F1==="unavailable"))return;let R1=F1==null||F1===""?"\u2014":F1,Q1=Y1.label||M1.key,d1=M.chip_show_name?`${Q1}: ${R1}`:R1,D1="";E&&S!=="none"&&(D1=S==="entity"&&M1.icon||Y1.icon,D1=D1||Y5&&Y5[M1.key]||"mdi:information-outline"),B.push(x`
        <span class="wsfc-chip">
          ${D1?x`<ha-icon .icon=${D1}></ha-icon>`:Z}
          <span class="wsfc-chip-text">${d1}</span>
        </span>
      `)}),B.length?x`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${z}" style=${p1}>${B}</div>
    </div>`:Z},c1._wfcHourlySource=function(){let M=this._hourlyForecastEvent,h=M&&Array.isArray(M.forecast)&&M.forecast.length?M.forecast:this._hourlyForecastData;return this._wfcMergeForecast(h,"hourly")},c1._wfcExtraForecastEntities=function(){let M=this.config&&this.config.entity,h=new Set,p=v=>{v&&v!==M&&typeof v=="string"&&v.startsWith("weather.")&&this.hass&&this.hass.states[v]&&h.add(v)};for(let v of this._wfcSources())v.disabled||(p(v.ref),v.overrides&&Object.values(v.overrides).forEach(p));return[...h]},c1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let M=new Set(this._wfcExtraForecastEntities());for(let _ of Object.keys(this.__wfcSrc))if(!M.has(_)){try{this.__wfcSrc[_].unsub&&this.__wfcSrc[_].unsub()}catch{}delete this.__wfcSrc[_]}let h=this.config.forecast_types||"both",p=h!=="daily",v=h!=="hourly";M.forEach(_=>{if(this.__wfcSrc[_])return;let w={unsub:null,hourly:null,daily:null};this.__wfcSrc[_]=w;let S=(E,z)=>{try{let W=this.hass.connection.subscribeMessage(N=>{w[z]=N&&Array.isArray(N.forecast)?N.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:E,entity_id:_},{resubscribe:!1});Promise.resolve(W).then(N=>{if(this.__wfcSrc[_]!==w){try{N&&N()}catch{}return}let a1=w.unsub;w.unsub=()=>{try{a1&&a1()}catch{}try{N&&N()}catch{}}}).catch(()=>{})}catch{}};p&&S("hourly","hourly"),v&&S(E5&&typeof E5=="function"&&E5(this.hass.states[_])||"daily","daily")})}catch{}},c1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let M of Object.keys(this.__wfcSrc))try{this.__wfcSrc[M].unsub&&this.__wfcSrc[M].unsub()}catch{}this.__wfcSrc={}}},c1._wfcSourceForecast=function(M,h){let p=this.__wfcSrc&&this.__wfcSrc[M];return p&&p[h]||null},c1._wfcMergeForecast=function(M,h){try{if(!Array.isArray(M)||!M.length)return M;let p=this.config&&this.config.entity,v=this._wfcExtraForecastEntities();if(!v.length)return M;let _={};if(v.forEach(z=>{let W=this._wfcSourceForecast(z,h);Array.isArray(W)&&W.length&&(_[z]=W.map(N=>({t:new Date(N.datetime).getTime(),fc:N})).filter(N=>!isNaN(N.t)))}),!Object.keys(_).length)return M;let w=(z,W)=>{let N=_[z];if(!N)return null;let a1=null,p1=1/0;for(let B of N){let M1=Math.abs(B.t-W);M1<p1&&(p1=M1,a1=B.fc)}return p1<=90*6e4?a1:null},S=Y0.map(z=>z.key),E={};return S.forEach(z=>{E[z]=this._wfcMetricEntityChain(z).filter(W=>W===p||_[W])}),M.map(z=>{let W=new Date(z.datetime).getTime();if(isNaN(W))return z;let N=z;return S.forEach(a1=>{for(let p1 of E[a1]){if(p1===p){if(z[a1]!=null)break;continue}let B=w(p1,W);if(B&&B[a1]!=null){N===z&&(N={...z}),N[a1]=B[a1];break}}}),N})}catch{return M}},c1._wfcCloudAt=function(M){let h=this._wfcHourlySource();if(!h||!h.length)return null;let p=null,v=1/0;for(let _=0;_<h.length;_++){let w=new Date(h[_].datetime);if(isNaN(w))continue;let S=Math.abs(w.getTime()-M.getTime());S<v&&(v=S,p=h[_])}return!p||v>90*6e4?null:H(p.cloud_coverage)?p.cloud_coverage/100:H(p.precipitation_probability)?p.precipitation_probability/100:null},c1._wfcForecastAt=function(M){let h=this._wfcHourlySource();if(!h||!h.length)return null;let p=null,v=1/0;for(let _=0;_<h.length;_++){let w=new Date(h[_].datetime);if(isNaN(w))continue;let S=Math.abs(w.getTime()-M.getTime());S<v&&(v=S,p=h[_])}return p&&v<=90*6e4?p:null},c1._wfcSunHours=function(M){M=M||{};let h=new Date,p,v;if(M.timeframe_mode==="day")p=new Date(h),p.setHours(0,0,0,0),v=new Date(p.getTime()+24*36e5);else if(M.timeframe_mode==="match_arc"){let E=l2(this.hass,h);E.sunrise&&E.sunset?(p=new Date(E.sunrise.getTime()-60*6e4),v=new Date(E.sunset.getTime()+60*6e4)):(p=new Date(h),p.setHours(0,0,0,0),v=new Date(p.getTime()+24*36e5))}else{let E=n(Number(M.timeframe_hours)||24,1,72)*36e5;M.timeframe_anchor==="now_center"?(p=new Date(h.getTime()-E/2),v=new Date(h.getTime()+E/2)):(p=new Date(h),p.setMinutes(0,0,0),v=new Date(p.getTime()+E))}let _=v.getTime()-p.getTime(),w=n(Math.round(_/36e5),2,72),S=[];for(let E=0;E<=w;E++){let z=new Date(p.getTime()+_*E/w);S.push({date:z,cloud:this._wfcCloudAt(z)})}return S},c1._wfcFmtTime=function(M,h){if(!(M instanceof Date)||isNaN(M))return"--";let p=h1(this.hass);try{return h==="12"?M.toLocaleTimeString(p,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):h==="24"?M.toLocaleTimeString(p,{hour:"2-digit",minute:"2-digit",hour12:!1}):M.toLocaleTimeString(p,{hour:"2-digit",minute:"2-digit"})}catch{return M.toTimeString().slice(0,5)}},c1._wfcSkyGradient=function(M){let h=this._wfcSunHours(M);if(h.length<2)return null;let{lat:p,lng:v}=U1(this.hass);if(!H(p)||!H(v))return null;let _=M.weather_adjust!==!1,w=h.length,S=[];for(let E=0;E<w;E++){let z=Z1(K1(this.hass,h[E].date)),W=(E/(w-1)*100).toFixed(2),N=s1(z,{day_color:M.day_color,night_color:M.night_color,cloud:_?h[E].cloud:0});S.push(`${N} ${W}%`)}return{gradient:`linear-gradient(to right, ${S.join(", ")})`,hours:h}},c1._wfcSunMarker=function(M,h){if(h==null)return Z;let p=M.marker_color||"var(--primary-text-color)",v=n(Number(M.marker_opacity==null?100:M.marker_opacity),0,100)/100;return x`<div class="wsfc-sunpos-now" style="left:${h.toFixed(2)}%;background:${p};opacity:${v};"></div>`},c1._wfcSunRiseSetMarkers=function(M,h,p,v){let{sunrise:_,sunset:w}=l2(this.hass);if(!_||!w||p<=h)return Z;let S=M.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",E=n(Number(M.ss_markers_opacity==null?100:M.ss_markers_opacity),0,100)/100,z=[];return[_.getTime(),w.getTime()].forEach(W=>{if(W<h||W>p)return;let N=((W-h)/(p-h)*100).toFixed(2);z.push(x`<span class="wsfc-sunpos-ssmark" style="left:${N}%;background:${S};opacity:${E};"></span>`)}),z.length?x`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${v}">${z}</div>`:Z},c1._wfcRenderSunPosition=function(M,h){let p=M.sun_position,v=this._wfcSkyGradient(p);if(!v)return Z;let{gradient:_,hours:w}=v,S=w.length,E=p.times_position||"below";E==="center"&&(E="overlay");let z=p.ticks_position||"hidden",W=E!=="hidden",N=z!=="hidden",a1=n(parseInt(p.ticks_every,10)||0,0,24),p1;if(a1>0&&S>1){let Y=(w[S-1].date.getTime()-w[0].date.getTime())/36e5,f1=Y>0?Y/(S-1):1;p1=Math.max(1,Math.round(a1/f1))}else p1=Math.max(1,Math.round((S-1)/8));let B=Y=>(Y/(S-1)*100).toFixed(2),M1=[];if(W)for(let Y=0;Y<S;Y+=p1){let f1;try{f1=w[Y].date.toLocaleTimeString(h1(this.hass),{hour:"numeric"})}catch{f1=w[Y].date.getHours()+""}M1.push(x`<span class="wsfc-sunpos-tick" style="left:${B(Y)}%">${f1}</span>`)}let Y1=p.times_color||"var(--secondary-text-color, #9e9e9e)",F1=[];if(N)for(let Y=0;Y<S;Y+=p1)F1.push(x`<span class="wsfc-sunpos-mark" style="left:${B(Y)}%;background:${Y1};"></span>`);let R1=Date.now(),Q1=w[0].date.getTime(),d1=w[S-1].date.getTime(),n0=R1>=Q1&&R1<=d1&&d1>Q1?n((R1-Q1)/(d1-Q1)*100,0,100):null,d5=Number(p.height)||44,R2=`font-size:${Number(p.times_font_size)||11}px;font-weight:${p.times_font_weight||"400"};`+(p.times_color?`color:${p.times_color};`:""),I5=Y=>x`<div class="wsfc-sunpos-ticks${Y||""}" style=${R2}>${M1}</div>`,A2=Y=>x`<div class="wsfc-sunpos-marks${Y||""}">${F1}</div>`,m2=p.ss_markers_position||"hidden",J1=m2!=="hidden",W2=F(p),b2={};W2.forEach(Y=>b2[Y.key]=Y.pos);let p5=b2.temps&&b2.temps!=="hidden",s0=b2.icons&&b2.icons!=="hidden",N5=p.forecast_temp_color||p.forecast_color||"",H0=p.forecast_icon_color||p.forecast_color||"",V0=p.forecast_extra_color||p.forecast_color||"",X0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),w2=p.forecast_metric_style||{},L0=Y=>w2[Y]&&w2[Y].text_color||(Y==="temps"?N5:V0),w5=Y=>w2[Y]&&w2[Y].icon_color||H0,m7=Y=>w2[Y]&&w2[Y].icon_size||p.forecast_icon_size,P3=Y=>w2[Y]&&w2[Y].text_size||p.forecast_font_size||11,E3=Y=>h2(w2[Y]&&w2[Y].contrast||"",X0),A1=Y=>{let f1=L0(Y),P1=E3(Y);return`font-size:${Number(P3(Y))||11}px;`+(f1?`color:${f1};`:"")+(P1?`text-shadow:${P1};`:"")},D2=Y=>{let f1=w5(Y),P1=m7(Y),B1=E3(Y);return(f1?`color:${f1};`:"")+(P1?`--mdc-icon-size:${P1}px;width:${P1}px;height:${P1}px;`:"")+(B1?`filter:drop-shadow(${B1});`:"")},j1=y.some(Y=>b2[Y]&&b2[Y]!=="hidden"),W5=[];if(p5||s0||j1){let Y=this._wfcHourlySource()||[];for(let f1 of Y){let P1=new Date(f1.datetime);if(isNaN(P1))continue;let B1=P1.getTime();B1<Q1||B1>d1||W5.push({t:B1,fc:f1})}W5.sort((f1,P1)=>f1.t-P1.t)}let l0=d1-Q1,b0=Y=>l0>0?((Y-Q1)/l0*100).toFixed(2):"0",c0=(Y,f1)=>{let P1=null,B1=1/0;for(let B2 of W5){let X2=Math.abs(B2.t-Y);X2<B1&&(B1=X2,P1=B2.fc)}return B1<=f1?P1:null},Q2={},M2=Y=>{let f1=Y==null?"":String(Y);if(Q2[f1])return Q2[f1];let P1=[];if(W5.length||Y==="ticks"||Y==="midticks"){let B1=Y==="all"||Y==="0",B2=Y==="ticks",X2=Y==="midticks";if(B2||X2){let j5=l0>0&&S>1?l0/(S-1)*p1:36e5,F3=Math.max(j5/2,90*6e4),R3=X2?p1/2:0;for(let u5=R3;u5<=S-1;u5+=p1){let n5=Math.floor(u5),ee=Math.min(S-1,Math.ceil(u5)),g6=u5-n5,y5=w[n5].date.getTime()+(w[ee].date.getTime()-w[n5].date.getTime())*g6;if(y5<Q1||y5>d1)continue;let _6=(u5/(S-1)*100).toFixed(2);P1.push({pct:_6,fc:c0(y5,F3)})}}else if(B1)for(let j5 of W5)P1.push({pct:b0(j5.t),fc:j5.fc});else{let j5=n(parseInt(Y,10)||3,1,6),F3=null,R3=j5*36e5;for(let u5 of W5)(F3==null||u5.t-F3>=R3-6e4)&&(P1.push({pct:b0(u5.t),fc:u5.fc}),F3=u5.t)}}return Q2[f1]=P1,P1},C5=Y=>{let f1=w2[Y]&&w2[Y].every;return f1!=null&&f1!==""?f1:p.forecast_every},d2=Y=>{let f1=M2(C5("temps"));return x`<div class="wsfc-sunpos-fc${Y||""}" style=${A1("temps")}>${f1.map(P1=>{let B1=P1.fc&&P1.fc.temperature!=null?Math.round(P1.fc.temperature)+"\xB0":"";return B1?x`<span class="wsfc-sunpos-fc-item" style="left:${P1.pct}%">${B1}</span>`:Z})}</div>`},U5=Y=>{let f1=D2("icons"),P1=M2(C5("icons"));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${Y||""}">${P1.map(B1=>{let B2=B1.fc&&B1.fc.condition?c(B1.fc.condition):"";return B2?x`<span class="wsfc-sunpos-fc-item" style="left:${B1.pct}%"><ha-icon .icon=${B2} style=${f1}></ha-icon></span>`:Z})}</div>`},f7=!!p.forecast_metric_detail_icons,x1=(Y,f1)=>{let P1=D2(Y),B1=M2(C5(Y));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${f1||""}" style=${A1(Y)}>${B1.map(B2=>{let X2=B2.fc?K(Y,B2.fc):null;if(X2==null)return Z;let j5=X(Y,f7);return x`<span class="wsfc-sunpos-fc-item" style="left:${B2.pct}%">${j5?x`<ha-icon .icon=${j5} style=${P1}></ha-icon>`:Z}<span class="wsfc-sunpos-fc-extra-val">${X2}</span></span>`})}</div>`},I1=Y=>{let f1=D2("icons"),P1=M2(C5("icons"));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${Y||""}" style=${A1("temps")}>${P1.map(B1=>{let B2=B1.fc&&B1.fc.condition?c(B1.fc.condition):"",X2=B1.fc&&B1.fc.temperature!=null?Math.round(B1.fc.temperature)+"\xB0":"";return!B2&&!X2?Z:x`<span class="wsfc-sunpos-fc-item" style="left:${B1.pct}%">${B2?x`<ha-icon .icon=${B2} style=${f1}></ha-icon>`:Z}${X2?x`<span class="wsfc-sunpos-fc-temp-val">${X2}</span>`:Z}</span>`})}</div>`},S2=!!p.forecast_temp_with_icon&&p5&&s0&&b2.temps===b2.icons,y2=(Y,f1)=>S2&&Y==="icons"?I1(f1):Y==="temps"?d2(f1):Y==="icons"?U5(f1):x1(Y,f1),a5=Y=>W2.filter(f1=>f1.pos===Y&&!(S2&&f1.key==="temps")).map(f1=>f1.key),S5=a5("overlay"),_1=[];S5.length===1?_1.push(y2(S5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):S5.forEach((Y,f1)=>{let P1=f1===0?" wsfc-sunpos-fc-ovl-top":f1===S5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";_1.push(y2(Y," wsfc-sunpos-fc-ovl"+P1))});let $3=a5("above").map(Y=>y2(Y)),K2=a5("below").reverse().map(Y=>y2(Y));return x`
      <div class="wsfc-sunpos-section">
        ${$3}
        ${J1&&m2==="above"?this._wfcSunRiseSetMarkers(p,Q1,d1,"row"):Z}
        ${N&&z==="above"?A2():Z}
        ${W&&E==="above"?I5():Z}
        <div class="wsfc-sunpos-bar" style="height:${d5}px;background:${_}">
          ${J1&&m2==="overlay"?this._wfcSunRiseSetMarkers(p,Q1,d1,"overlay"):Z}
          ${this._wfcSunMarker(p,n0)}
          ${N&&z==="overlay"?A2(" wsfc-sunpos-marks-center"):Z}
          ${W&&E==="overlay"?I5(" wsfc-sunpos-ticks-center"):Z}
          ${_1}
        </div>
        ${W&&E==="below"?I5():Z}
        ${N&&z==="below"?A2():Z}
        ${J1&&m2==="below"?this._wfcSunRiseSetMarkers(p,Q1,d1,"row"):Z}
        ${K2}
      </div>
    `},c1._wfcArcWindow=function(M,h,p){let v=M.timeframe_mode||"sunrise_sunset",_=Date.now();if(v==="day"){let w=new Date(_);return w.setHours(0,0,0,0),{t0:w.getTime(),t1:w.getTime()+24*36e5}}if(v==="hours"){let w=n(Number(M.timeframe_hours)||24,1,72)*36e5;if(M.timeframe_anchor==="now_center")return{t0:_-w/2,t1:_+w/2};let S=new Date(_);return S.setMinutes(0,0,0),{t0:S.getTime(),t1:S.getTime()+w}}return{t0:h,t1:p}},c1._wfcRenderSunArc=function(M,h){let p=M.sun_arc,{sunrise:v,sunset:_}=l2(this.hass);if(!v||!_)return Z;let w=Date.now(),S=v.getTime(),E=_.getTime(),z=E-S,W;if(p.baseline_mode==="sky"&&M.sun_position){let x1=this._wfcSunHours(M.sun_position);x1&&x1.length>=2&&(W={t0:x1[0].date.getTime(),t1:x1[x1.length-1].date.getTime()})}W||(W=this._wfcArcWindow(p,S,E));let N=W.t0,a1=W.t1,p1=a1-N||1,B=x1=>n((x1-N)/p1,0,1),M1=100,Y1=78,F1=14,R1=B(S),Q1=B(E),d1=Q1-R1,D1=x1=>{if(d1<=0||x1<=R1||x1>=Q1)return Y1;let I1=(x1-R1)/d1;return Y1-(Y1-F1)*(1-Math.pow(2*I1-1,2))},n0=96,d5="";for(let x1=0;x1<=n0;x1++){let I1=x1/n0;d5+=(x1===0?"M":"L")+(I1*M1).toFixed(2)+" "+D1(I1).toFixed(2)+" "}let R2=w>=N&&w<=a1,I5=w>=S&&w<=E,A2=B(w),m2=(A2*100).toFixed(2),J1=(D1(A2)/M1*100).toFixed(2),W2=Number(p.height)||90,b2=p.time_format||"auto",p5=p.tick_color||"var(--secondary-text-color, #9e9e9e)",s0=[];{let x1=new Date(N);x1.setMinutes(0,0,0),x1.getTime()<N&&x1.setTime(x1.getTime()+36e5);for(let I1=x1.getTime();I1<=a1;I1+=36e5)s0.push(B(I1))}let N5=[];p.show_arc_ticks&&s0.forEach(x1=>{if(x1<=0||x1>=1)return;let I1=(x1*M1).toFixed(2),S2=D1(x1);N5.push(w1`<line x1="${I1}" y1="${(S2-2.5).toFixed(2)}" x2="${I1}" y2="${(S2+2.5).toFixed(2)}" stroke="${p5}" stroke-width="0.6"></line>`)});let H0=[];p.show_base_ticks&&s0.forEach(x1=>{let I1=(x1*M1).toFixed(2);H0.push(w1`<line x1="${I1}" y1="${Y1}" x2="${I1}" y2="${Y1+3}" stroke="${p5}" stroke-width="0.6"></line>`)});let V0=p.sunrise_sunset_ticks||"none",X0=V0==="arc"||V0==="both",w2=V0==="base"||V0==="both",L0=[];S>=N&&S<=a1&&L0.push(B(S)),E>=N&&E<=a1&&L0.push(B(E)),X0&&L0.forEach(x1=>{let I1=(x1*M1).toFixed(2),S2=D1(x1);N5.push(w1`<line x1="${I1}" y1="${(S2-4.5).toFixed(2)}" x2="${I1}" y2="${(S2+4.5).toFixed(2)}" stroke="${p5}" stroke-width="1.4"></line>`)}),w2&&L0.forEach(x1=>{let I1=(x1*M1).toFixed(2);H0.push(w1`<line x1="${I1}" y1="${(Y1-2).toFixed(2)}" x2="${I1}" y2="${Y1+6}" stroke="${p5}" stroke-width="1.4"></line>`)});let w5=Z;if(R2){let x1="wsfc-sunarc-sun"+(I5?"":" wsfc-sunarc-sun-night"),I1=`left:${m2}%;top:${J1}%;`;if(!I5&&p.night_moon&&p.moon_icon==="phase"){let S2=_0.getMoonIllumination(new Date).phase,y2=10,a5=11,S5=Math.cos(S2*2*Math.PI),_1=Math.abs(S5)*y2,$3=S2<.5?1:0,K2=`M${a5} ${a5-y2} A${y2} ${y2} 0 0 ${$3} ${a5} ${a5+y2} A${_1} ${y2} 0 0 ${S5>0?1-$3:$3} ${a5} ${a5-y2} Z`;w5=x`<span class="${x1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${I1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${K2} fill="#e9e6d6"></path></svg></span>`}else if(!I5&&p.night_moon){let S2=p.moon_icon||"mdi:weather-night";w5=x`<ha-icon class="${x1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${S2} style=${I1}></ha-icon>`}else p.sun_icon?w5=x`<ha-icon class="${x1} wsfc-sunarc-sun-icon" .icon=${p.sun_icon} style=${I1}></ha-icon>`:w5=x`<span class="${x1} wsfc-sunarc-sun-dot" style=${I1}></span>`}let m7=`font-size:${Number(p.time_font_size)||13}px;font-weight:${p.time_font_weight||"600"};`+(p.time_color?`color:${p.time_color};`:""),P3=`font-size:${Number(p.caption_font_size)||11}px;font-weight:${p.caption_font_weight||"400"};`+(p.caption_color?`color:${p.caption_color};`:""),E3=p.show_times!==!1,A1=p.show_captions!==!1,D2=!!p.show_ss_icons,j1=p.ss_icon_position||"left",W5=(p.ss_icon_color?`color:${p.ss_icon_color};`:"")+(p.ss_icon_size?`--mdc-icon-size:${p.ss_icon_size}px;width:${p.ss_icon_size}px;height:${p.ss_icon_size}px;`:""),l0=x1=>{if(!D2)return Z;let I1=x1==="sunrise"?p.sunrise_icon||"mdi:weather-sunset-up":p.sunset_icon||"mdi:weather-sunset-down";return x`<ha-icon class="wsfc-sunarc-ssicon" .icon=${I1} style=${W5}></ha-icon>`},b0=(x1,I1,S2,y2)=>{let a5=x`<div class="wsfc-sunarc-endtext">
        ${E3?x`<div class="wsfc-sunarc-time" style=${m7}>${x1}</div>`:Z}
        ${A1?x`<div class="wsfc-sunarc-cap" style=${P3}>${I1}</div>`:Z}
      </div>`,S5=l0(y2);return x`<div class="wsfc-sunarc-end${S2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${j1==="above"?"column":j1==="below"?"column-reverse":j1==="right"?"row-reverse":"row"};">${S5}${a5}</div>
      </div>`},c0=E3||A1||D2,Q2=c0?x`<div class="wsfc-sunarc-labels">
          ${b0(this._wfcFmtTime(v,b2),"sunrise",!1,"sunrise")}
          ${b0(this._wfcFmtTime(_,b2),"sunset",!0,"sunset")}
        </div>`:Z,M2=p.labels_position;M2==="below"||M2==null?M2=0:M2==="above"?M2=100:M2==="mid"?M2=50:M2=n(Number(M2),0,100);let C5=p.baseline_mode==="sky"&&M.sun_position,d2=C5?this._wfcRenderSunPosition(M,h):Z,U5=C5&&d2!==Z?Z:w1`<line class="wsfc-sunarc-horizon" x1="0" y1="${Y1}" x2="${M1}" y2="${Y1}"></line>`,f7=x`
      <div class="wsfc-sunarc-svg-wrap" style="height:${W2}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${M1} 100" preserveAspectRatio="none">
          ${U5}
          <path class="wsfc-sunarc-path" d=${d5.trim()}></path>
          ${N5}
          ${H0}
        </svg>
        ${w5}
        ${c0&&M2>0&&M2<100?x`<div class="wsfc-sunarc-overlay" style="top:${(100-M2).toFixed(1)}%;transform:translateY(-50%);">${Q2}</div>`:Z}
      </div>
    `;return x`
      <div class="wsfc-sunarc-section">
        ${c0&&M2>=100?Q2:Z}
        ${f7}
        ${C5&&d2!==Z?x`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-Y1)/100)*W2).toFixed(1)}px;">${d2}</div>`:Z}
        ${c0&&M2<=0?Q2:Z}
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
    </style>`};let q=C0.prototype,p6=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),p4={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},O3=null;function u6(){return O3||(O3=new Set,Object.values(u7).forEach(M=>M.forEach(h=>O3.add(h)))),O3}function u4(M,h){let p=[];return M.forEach(v=>{if(!h.has(v.name))if(v.schema){let _=u4(v.schema,h);_.length&&p.push({...v,schema:_})}else p.push(v)}),p}function Gt(M){let h=u6(),p=new Set([...h,...p6]);M=u4(M,p);let v=new Map,_=[];M.forEach(W=>{p6.has(W.name)||(W.type==="expandable"?_.push(W):v.set(W.name,W))});let w=W=>W.map(N=>v.get(N)).filter(Boolean),S=(W,N,a1)=>{let p1=w(a1);return p1.length?[{name:W,type:"expandable",flatten:!0,icon:N,schema:p1}]:[]},E=W=>_.find(N=>N.name===W),z=[];{let W=E("attribute_entities");W&&z.push(p4.attribute_entities?{...W,icon:p4.attribute_entities}:W)}return z}let gi=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],qt=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],Yt=["tap_action","hold_action","double_tap_action"],Qt=["show_condition_effects"],Kt=[],u7={current:["current.show_attributes"],hourly:[],daily:[]},h6={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},Xt="Weather Flex sections";q.render=function(){if(!this.hass||!this._config)return Z;let M=ut(this._config),h=this._getSelectedAttributes(M),p=this._schema(this.localize.bind(this),h,M["forecast.mode"]),v=Gt(p),_=S=>h6[S.name]||this._computeLabel(S)||S.name,w=this._wfcAccordionEnabled();return x`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${Xt}</span>
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
      ${v.length?x`<ha-form
            .hass=${this.hass}
            .data=${M}
            .schema=${v}
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
    `},q._wfcCardAppearancePanel=function(){let M=c2(this._config).card||{},h="card";return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${p4.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(Qt)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!M.border_enabled,p=>this._wfcToggleSecField(h,"border_enabled",p))}
            ${M.border_enabled?x`
                  ${this._wfcColorField("Border color",M.border_color,p=>this._wfcSetSecField(h,"border_color",p.target.value))}
                  ${this._wfcNumField(h,"border_width","Border width","px",M.border_width,1)}
                  ${this._wfcNumField(h,"border_radius","Corner radius","px",M.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",M.border_top!==!1,p=>this._wfcToggleSecField(h,"border_top",p))}
                    ${this._wfcCheckbox("Bottom",M.border_bottom!==!1,p=>this._wfcToggleSecField(h,"border_bottom",p))}
                    ${this._wfcCheckbox("Left",M.border_left!==!1,p=>this._wfcToggleSecField(h,"border_left",p))}
                    ${this._wfcCheckbox("Right",M.border_right!==!1,p=>this._wfcToggleSecField(h,"border_right",p))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",M.corner_tl!==!1,p=>this._wfcToggleSecField(h,"corner_tl",p))}
                    ${this._wfcCheckbox("Top-right",M.corner_tr!==!1,p=>this._wfcToggleSecField(h,"corner_tr",p))}
                    ${this._wfcCheckbox("Bottom-right",M.corner_br!==!1,p=>this._wfcToggleSecField(h,"corner_br",p))}
                    ${this._wfcCheckbox("Bottom-left",M.corner_bl!==!1,p=>this._wfcToggleSecField(h,"corner_bl",p))}
                  </div>`:Z}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",M.bg_color,p=>this._wfcSetSecField(h,"bg_color",p.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!M.glow_enabled,p=>this._wfcToggleSecField(h,"glow_enabled",p))}
            ${M.glow_enabled?x`
                  ${this._wfcColorField("Glow color",M.glow_color,p=>this._wfcSetSecField(h,"glow_color",p.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((M.glow_intensity==null?1:M.glow_intensity)*100),100,"glow_intensity",p=>this._wfcSetSecField(h,"glow_intensity",n((parseInt(p.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",M.glow_borders_only!==!1,p=>this._wfcToggleSecField(h,"glow_borders_only",p))}`:Z}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!M.shadow_enabled,p=>this._wfcToggleSecField(h,"shadow_enabled",p))}
            ${M.shadow_enabled?x`
                  ${this._wfcColorField("Shadow color",M.shadow_color,p=>this._wfcSetSecField(h,"shadow_color",p.target.value))}
                  ${this._wfcNumField(h,"shadow_x","Offset X","px",M.shadow_x,0)}
                  ${this._wfcNumField(h,"shadow_y","Offset Y","px",M.shadow_y,4)}
                  ${this._wfcNumField(h,"shadow_blur","Blur","px",M.shadow_blur,16)}
                  ${this._wfcNumField(h,"shadow_spread","Spread","px",M.shadow_spread,0)}
                  ${this._wfcNumField(h,"shadow_opacity","Opacity","%",M.shadow_opacity,35)}`:Z}
          </div>
        </div>
      </details>
    `};let h4=4;q._wfcEdSources=function(){return d6(this._config,this.hass)},q._wfcCommitSources=function(M){let h=M.filter(W=>W&&W.ref).map(W=>{let N={};for(let p1 in W.overrides||{})W.overrides[p1]&&(N[p1]=W.overrides[p1]);let a1={ref:W.ref};return Object.keys(N).length&&(a1.overrides=N),W.disabled&&(a1.disabled=!0),a1}),p={...this._config.metric_sources||{}};delete p.primary,delete p.fallback,delete p.custom,delete p.device_map,h.length?p.sources=h:delete p.sources;let v={...this._config,metric_sources:p},_=W=>{let N=this.hass&&this.hass.states[W],a1=N&&N.attributes&&N.attributes.supported_features;return typeof a1=="number"&&(a1&7)!==0},w=W=>W.map(N=>N.ref).filter(N=>typeof N=="string"&&N.startsWith("weather.")),S=w(h.filter(W=>!W.disabled)),E=w(h),z=S.find(_)||S[0]||E.find(_)||E[0];z&&(v.entity=z),Object.keys(p).length===0&&delete v.metric_sources,n2(this,"config-changed",{config:v})},q._wfcSetSourceRef=function(M,h){let p=this._wfcEdSources();p[M]&&(h?p[M]={ref:h,overrides:p[M].overrides||{}}:p.splice(M,1),this._wfcCommitSources(p))},q._wfcAddSource=function(M){if(!M)return;let h=this._wfcEdSources();h.length>=h4||(h.push({ref:M,overrides:{}}),this._wfcCommitSources(h))},q._wfcMoveSource=function(M,h){let p=this._wfcEdSources(),v=M+h;if(M<0||v<0||v>=p.length)return;let _=p[M];p[M]=p[v],p[v]=_,this._wfcCommitSources(p)},q._wfcRemoveSource=function(M){let h=this._wfcEdSources();M<0||M>=h.length||(h.splice(M,1),this._wfcCommitSources(h))},q._wfcToggleSourceDisabled=function(M){let h=this._wfcEdSources();h[M]&&(h[M].disabled=!h[M].disabled,this._wfcCommitSources(h))},q._wfcSetSourceOverride=function(M,h,p){let v=this._wfcEdSources();if(!v[M])return;let _={...v[M].overrides||{}};p?_[h]=p:delete _[h],v[M].overrides=_,this._wfcCommitSources(v)},q._wfcLiveValue=function(M,h){let p=this.hass&&this.hass.states[M];if(!p)return"";let v,_;return M.startsWith("weather.")?(v=p.attributes?p.attributes[h]:null,_=p.attributes&&p.attributes[h+"_unit"]):(v=p.state,_=p.attributes&&p.attributes.unit_of_measurement),v==null||v===""||v==="unknown"||v==="unavailable"?"":_?`${v} ${_}`:`${v}`},q._wfcAvailableMetrics=function(){let M=new Set;if(!this.hass)return M;let h=new Set;this._config.entity&&h.add(this._config.entity);for(let v of this._wfcEdSources())if(!v.disabled)if(v.overrides&&Object.keys(v.overrides).forEach(_=>{M.add(_),h.add(v.overrides[_])}),e2(v.ref)){let _=Q0(this._config,this.hass,_2(v.ref));Object.keys(_).forEach(w=>{M.add(w),h.add(_[w])})}else v.ref&&h.add(v.ref);h.forEach(v=>{let _=this.hass.states[v];_&&_.attributes&&Object.keys(_.attributes).forEach(w=>M.add(w))});let p=v=>{if(Array.isArray(v))for(let _ of v)_&&Object.keys(_).forEach(w=>M.add(w))};return p(this._hourlyForecastData),p(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(v=>{v&&(p(v.hourly),p(v.daily))}),M};function Jt(M){return String(M).split(/[_\s]+/).filter(Boolean).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")}let _5={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function u1(M){return _5[M]||Jt(M)}q._wfcMetricOptions=function(M,h){let p=this._wfcAvailableMetrics(),v=h?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(M||[]).forEach(_=>{let w=u1(_);v.push({value:_,label:p.has(_)?w:`${w} (unavailable)`})}),v},q._wfcSourceMappingEditor=function(M,h){let p=h.ref,v=h.overrides||{},_=e2(p),w=_?_2(p):null,S=_?d7(this.hass,w):{},E=N=>{if(_)return S[N]||"";if(!p)return"";if(p.startsWith("weather.")){let a1=this.hass&&this.hass.states[p];return a1&&a1.attributes&&a1.attributes[N]!=null?p:""}return""},z=_?{include_entities:k3(this.hass,w)}:{},W=N=>{let a1=N.key,p1=v[a1]||E(a1),B=!!v[a1],M1=p1?this._wfcLiveValue(p1,a1):"",Y1=[{name:"e",selector:{entity:z}}],F1=B?" (override)":p1?"":" \u2014 none";return x`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:p1}}
            .schema=${Y1}
            .computeLabel=${()=>N.label+F1}
            @value-changed=${R1=>this._wfcSetSourceOverride(M,a1,R1.detail&&R1.detail.value&&R1.detail.value.e||"")}
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
          ${Y0.map(W)}
        </div>
      </details>
    `},q._wfcSourceSummaryList=function(M){let h=M.ref,p=M.overrides||{},v=e2(h),_=v?d7(this.hass,_2(h)):{},w=E=>{if(p[E])return p[E];if(v)return _[E]||"";if(h&&h.startsWith("weather.")){let z=this.hass&&this.hass.states[h];return z&&z.attributes&&z.attributes[E]!=null?h:""}return""},S=[];return Y0.forEach(E=>{let z=w(E.key);if(!z)return;let W=this._wfcLiveValue(z,E.key);S.push(x`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${E.label}</span>
          <span class="wsfc-cond-ent" title=${z}>${z}</span>
          <span class="wsfc-cond-val">${W||"\u2014"}</span>
        </div>
      `)}),S.length?x`<div class="wsfc-cond-list">${S}</div>`:Z},q._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},q._wfcToggleSrcMap=function(M){let h=this._wfcSrcMapOpen();h.has(M)?h.delete(M):h.add(M),this.requestUpdate&&this.requestUpdate()},q._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},q._wfcSourceMetricCount=function(M){let h=M.ref,p=M.overrides||{},v=new Set(Object.keys(p).filter(_=>p[_]));if(e2(h))Object.keys(Q0(this._config,this.hass,_2(h))).forEach(_=>v.add(_));else if(h&&h.startsWith("weather.")){let _=this.hass&&this.hass.states[h];_&&_.attributes&&Y0.forEach(w=>{_.attributes[w.key]!=null&&v.add(w.key)})}return v.size},q._wfcSourceRow=function(M,h,p){let v=M.ref,_=e2(v),w=this._config.entity,S=_&&this.hass&&this.hass.devices&&this.hass.devices[_2(v)],E=_?S&&(S.name_by_user||S.name)||_2(v):v,z=_?"Device":v&&v.startsWith("weather.")?"Weather":"Sensor",W=_?"mdi:access-point":v&&v.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",N=!_&&v&&v.startsWith("weather."),a1=N&&v===w,p1=this._wfcSrcMapOpen().has(v),B=!!M.disabled,M1=this._wfcSourceMetricCount(M),Y1=`${M1} value${M1===1?"":"s"} mapped`,F1=a1?x`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:N?x`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:x`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,R1="",Q1=v&&!_?this.hass&&this.hass.states[v]:null;if(_)R1=M1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!Q1)R1=`\u26A0 Entity not found: ${v}`;else if(Q1.state==="unavailable"||Q1.state==="unknown")R1=`\u26A0 Currently ${Q1.state}.`;else if(N&&!a1){let d1=Q1.attributes&&Q1.attributes.supported_features;R1=typeof d1=="number"&&(d1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else N||(R1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return x`
      <div class="wsfc-src-row ${B?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${W}></ha-icon>
          <span class="wsfc-src-name">${E} <span class="wsfc-src-type">${z}</span></span>
          <ha-icon class="wsfc-ico-btn ${h===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(h,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${h===p-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(h,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${B?"mdi:eye-off":"mdi:eye"} title=${B?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(h)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${p1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(v)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(h)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${F1}<span class="wsfc-src-count">${Y1}</span>${B?x`<span class="wsfc-src-count">· hidden</span>`:Z}</div>
        ${R1?x`<div class="wsfc-src-detail">${R1}</div>`:Z}
        ${this._wfcSourceSummaryList(M)}
        ${p1?this._wfcSourceMappingEditor(h,M):Z}
      </div>
    `},q._wfcWeatherSourcesPanel=function(){let M=this._wfcEdSources(),h=M.some(S=>S.ref&&!e2(S.ref)&&S.ref.startsWith("weather.")),p=M.length>=h4,v=!!this.__wfcAddSourceOpen&&!p,_=x`
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
        @value-changed=${S=>{let E=S.detail&&S.detail.value&&S.detail.value.d;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(M5+E))}}
      ></ha-form>`;return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${p?x`<p class="wsfc-hint">Maximum of ${h4} sources reached. Remove one to add another.</p>`:x`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${v?"mdi:close":"mdi:plus"}></ha-icon>${v?"Cancel":"Add Source"}
              </div>
              ${v?x`<div class="wsfc-add-pickers">${_}${w}</div>`:Z}
            `}
          ${M.length?M.map((S,E)=>this._wfcSourceRow(S,E,M.length)):x`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!h&&M.length?x`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:Z}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},q._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},q._wfcHeadlineTempRow=function(){let M=this._config.current&&this._config.current.temperature_entity,h=M||"",p="";if(!h)for(let w of this._wfcEdSources()){if(w.disabled)continue;let S=this._wfcSlotEntityForKeyEd(w,"temperature");if(S&&this.hass&&this.hass.states[S]){h=S;break}}h?p=this.hass&&this.hass.states[h]&&this.hass.states[h].attributes&&this.hass.states[h].attributes.friendly_name||h:p="\u2014 none available \u2014";let v=h?this._wfcLiveValue(h,"temperature"):"",_=!!this.__wfcHeadlineEdit;return x`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${p}${M?x` <span class="wsfc-src-type">override</span>`:Z}</span>
          ${v?x`<span class="wsfc-srcmap-live">${v}</span>`:Z}
          <ha-icon class="wsfc-ico-btn ${_?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${_?x`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:Z}
      </div>
    `},q._wfcSlotEntityForKeyEd=function(M,h){if(M.overrides&&M.overrides[h])return M.overrides[h];let p=M.ref;if(!p)return null;if(e2(p))return Q0(this._config,this.hass,_2(p))[h]||null;if(p.startsWith("weather.")){let v=this.hass&&this.hass.states[p];return v&&v.attributes&&v.attributes[h]!=null?p:null}return null},q._wfcSetForecastTypes=function(M,h){let p=M&&h?"both":M?"hourly":h?"daily":"both",v={...this._config,forecast_types:p};n2(this,"config-changed",{config:v})},q._wfcAdvancedPanel=function(){let M=this._config.forecast_types||"both",h=M==="both"||M==="hourly",p=M==="both"||M==="daily";return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",h,v=>this._wfcSetForecastTypes(v.target.checked,p))}
          ${this._wfcCheckbox("Daily",p,v=>this._wfcSetForecastTypes(h,v.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(Kt)}
        </div>
      </details>
    `},q._wfcUserActionsPanel=function(){let M=this._wfcStockFormFor(qt),h=this._wfcStockFormFor(Yt),p=this._config.forecast||{};return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${M}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",p.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${h}
        </div>
      </details>
    `};let m6=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];q._wfcForecastTypeControls=function(M){let h=this._config.forecast||{},p=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],v=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],_=W=>h[`${W}_mode`]||h.mode||"simple",w=W=>(h[`${W}_extra_attribute`]!=null?h[`${W}_extra_attribute`]:h.extra_attribute)||"none",S=W=>(h[`${W}_chart_attribute`]!=null?h[`${W}_chart_attribute`]:h.default_chart_attribute)||"temperature_and_precipitation",E=(W,N,a1)=>{let p1=h[`${W}_${N}`];if(p1!=null)return!!p1;let B=h[N];return B!=null?!!B:a1},z=_(M)==="chart";return x`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${M}_mode`,"Display mode",p,_(M),"simple")}
        ${this._wfcForecastSelect(`${M}_extra_attribute`,"Extra metric",v,w(M),"none")}
      </div>
      ${z?x`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${M}_chart_attribute`,"Chart metric",m6,S(M),"temperature_and_precipitation")}
          </div>`:Z}
      ${this._wfcConfigCheckbox(`forecast.${M}_show_sun_times`,"Show sunrise & sunset times",E(M,"show_sun_times",!0),!0)}
      ${z?x`
            ${this._wfcConfigCheckbox(`forecast.${M}_use_color_thresholds`,"Use color thresholds",E(M,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${M}_show_attribute_selector`,"Show metric selector",E(M,"show_attribute_selector",!1),!1)}`:Z}
    `},q._wfcHelper=function(M){let h=this._computeHelper?this._computeHelper(M):void 0;return typeof h=="string"&&(h=h.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),h},q._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},q._wfcSetAccordion=function(M){let h=this._wfcState();h.editor_accordion=!!M,this._wfcCommit(h),this._wfcApplyAccordion()},q._wfcApplyAccordion=function(){let M=this.renderRoot||this.shadowRoot||this;!M||!M.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,M.addEventListener("toggle",h=>{let p=h.target;if(!p||!p.classList||!p.classList.contains("wsfc-panel")||(this._wfcRememberOpen(p),!p.open)||!this._wfcAccordionEnabled())return;(M.querySelectorAll?M.querySelectorAll("details.wsfc-panel"):[]).forEach(_=>{_!==p&&_.open&&(_.open=!1)})},!0))},q._wfcRememberOpen=function(M){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let h=this._wfcPanelKey(M);h&&(M.open?this.__wfcOpenPanels.add(h):this.__wfcOpenPanels.delete(h))},q._wfcPanelKey=function(M){let h=M.querySelector&&M.querySelector(".wsfc-panel-title");return h?(h.textContent||"").trim():""},q._wfcRestoreOpen=function(){let M=this.renderRoot||this.shadowRoot||this;!M||!M.querySelectorAll||!this.__wfcOpenPanels||M.querySelectorAll("details.wsfc-panel").forEach(h=>{let p=this._wfcPanelKey(h);p&&this.__wfcOpenPanels.has(p)&&(h.open=!0)})},q.updated=function(M){try{let h=Object.getPrototypeOf(q);h&&typeof h.updated=="function"&&h.updated.call(this,M)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},q._wfcEditorStyle=function(){return x`<style>
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
    </style>`};let f6="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";q._wfcCustomMetricsBody=function(){let M=n7(this._config.current&&this._config.current.show_attributes);return x`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${M.map((h,p)=>this._renderCustomAttributeRow(h,p))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${f6}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},q._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let h7={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function K0(M){if(M&&M.detail&&M.detail.value!==void 0)return M.detail.value;let h=M&&M.target;if(h)return(h.type==="checkbox"||typeof h.checked=="boolean")&&(h.tagName==="HA-SWITCH"||h.type==="checkbox")?h.checked:h.value}function T3(M){let h=M&&M.target;return h&&typeof h.checked=="boolean"?h.checked:!!(M&&M.detail&&M.detail.value)}q._wfcState=function(){return JSON.parse(JSON.stringify(c2(this._config)))},q._wfcCommit=function(M){let h={...this._config,wfc:M};n2(this,"config-changed",{config:h})},q._wfcResetSection=function(M){let p=$2(this._config)[M];if(!p)return;let v=this._wfcState(),_=!!(v[M]&&v[M].show);v[M]={...JSON.parse(JSON.stringify(p)),show:_},this._wfcCommit(v)},q._wfcMoveSection=function(M,h){let p=this._wfcState(),v=p.order.indexOf(M),_=v+h;if(v<0||_<0||_>=p.order.length)return;let w=p.order[v];p.order[v]=p.order[_],p.order[_]=w,this._wfcCommit(p)},q._wfcCommitMetrics=function(M,h){let p=this._wfcState();p[M]||(p[M]={});let v=F(p[M]),_=v.map(S=>S.key),w={};v.forEach(S=>w[S.key]=S.pos),h(_,w),p[M].forecast_metric_order=_,p[M].forecast_metric_pos=w,delete p[M].forecast_temps,delete p[M].forecast_icons,delete p[M].forecast_extra,delete p[M].forecast_row_order,delete p[M].forecast_stack,this._wfcCommit(p)},q._wfcMoveMetric=function(M,h,p){this._wfcCommitMetrics(M,v=>{let _=v.indexOf(h),w=_+p;if(_<0||w<0||w>=v.length)return;let S=v[_];v[_]=v[w],v[w]=S})},q._wfcSetMetricPos=function(M,h,p){this._wfcCommitMetrics(M,(v,_)=>{_[h]=p})},q._wfcSetMetricStyle=function(M,h,p,v){let _=this._wfcState();_[M]||(_[M]={});let w={..._[M].forecast_metric_style||{}},S={...w[h]||{}};v==null||v===""?delete S[p]:S[p]=v,Object.keys(S).length?w[h]=S:delete w[h],_[M].forecast_metric_style=w,this._wfcCommit(_)},q._wfcMetricsOrder=function(M,h){let p=F(h),v=h.forecast_metric_style||{};return p.map((_,w,S)=>{let E=v[_.key]||{},z=_.key==="icons",W=_.key!=="temps";return x`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${T[_.key]||_.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${N=>N.stopPropagation()}
              @change=${N=>this._wfcSetMetricPos(M,_.key,N.target.value)}
            >
              ${$.map(N=>x`<option value=${N.value} ?selected=${N.value===_.pos}>${N.label}</option>`)}
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
                  ${this._wfcPlainNum("Icon size (px)",E.icon_size,N=>this._wfcSetMetricStyle(M,_.key,"icon_size",parseFloat(K0(N))||""))}`:Z}
            ${z?Z:x`
                  ${this._wfcColorField("Text color",E.text_color,N=>this._wfcSetMetricStyle(M,_.key,"text_color",N.target.value))}
                  ${this._wfcPlainNum("Font size (px)",E.text_size,N=>this._wfcSetMetricStyle(M,_.key,"text_size",parseFloat(K0(N))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${N=>this._wfcSetMetricStyle(M,_.key,"contrast",N.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(N=>x`<option value=${N.value} ?selected=${N.value===(E.contrast||"")}>${N.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},q._wfcToggleSection=function(M,h){let p=this._wfcState();p[M]||(p[M]={}),p[M].show=T3(h),this._wfcCommit(p)},q._wfcToggleSectionShow=function(M){let h=this._wfcState();h[M]||(h[M]={}),h[M].show=!h[M].show,this._wfcCommit(h)},q._wfcSetSecNum=function(M,h,p){let v=this._wfcState(),_=parseFloat(K0(p));v[M][h]=isNaN(_)?void 0:_,this._wfcCommit(v)},q._wfcSetSecField=function(M,h,p){let v=this._wfcState();v[M]||(v[M]={}),v[M][h]=p,this._wfcCommit(v)},q._wfcToggleSecField=function(M,h,p){this._wfcSetSecField(M,h,T3(p))},q._wfcSetForecastNum=function(M,h){let p={...this._config.forecast||{}};h==null||h<=0?delete p[M]:p[M]=h,n2(this,"config-changed",{config:{...this._config,forecast:p}})},q._wfcSetConfigNum=function(M,h,p){let[v,_]=M.split("."),w={...this._config},S={...w[v]||{}},E=h==null||h===""||isNaN(Number(h))?null:Number(h);E==null?delete S[_]:S[_]=E,w[v]=S,n2(this,"config-changed",{config:w})},q._wfcConfigSlider=function(M,h,p,v,_){let w=b5(M,p||""),S=v!=null?n(Number(v),w.min,w.max):Number(_);return this._wfcSliderTpl(h,p,w,S,E=>this._wfcSetConfigNum(M,E.target.value,_))},q._wfcSetConfigStr=function(M,h,p){let v={...this._config};if(M.indexOf(".")===-1)p&&(h==null||h==="")?delete v[M]:v[M]=h;else{let[_,w]=M.split("."),S={...v[_]||{}};p&&(h==null||h==="")?delete S[w]:S[w]=h,v[_]=S}n2(this,"config-changed",{config:v})},q._wfcConfigSelect=function(M,h,p,v,_,w){let S=String(v??_);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${h}</span>
        <select class="wsfc-native-select" @change=${E=>this._wfcSetConfigStr(M,E.target.value,w)}>
          ${p.map(E=>x`<option value=${String(E.value)} ?selected=${String(E.value)===S}>${E.label}</option>`)}
        </select>
      </label>
    `},q._wfcSetConfigBool=function(M,h,p){let v={...this._config},_=(w,S)=>{h===!!p?delete w[S]:w[S]=h};if(M.indexOf(".")===-1)_(v,M);else{let[w,S]=M.split("."),E={...v[w]||{}};_(E,S),v[w]=E}n2(this,"config-changed",{config:v})},q._wfcConfigCheckbox=function(M,h,p,v){let _=p==null?!!v:!!p;return this._wfcCheckbox(h,_,w=>this._wfcSetConfigBool(M,w.target.checked,v))},q._wfcConfigText=function(M,h,p,v){return x`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${h}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${p||""}
          placeholder=${v||""}
          @change=${_=>this._wfcSetConfigStr(M,_.target.value)}
        />
      </label>
    `},q._wfcSetForecastField=function(M,h){let p={...this._config.forecast||{}};h==null||h===""?delete p[M]:p[M]=h,n2(this,"config-changed",{config:{...this._config,forecast:p}})},q._wfcForecastSelect=function(M,h,p,v,_){let w=String(v??_);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${h}</span>
        <select class="wsfc-native-select" @change=${S=>this._wfcSetForecastField(M,S.target.value)}>
          ${p.map(S=>x`<option value=${String(S.value)} ?selected=${String(S.value)===w}>${S.label}</option>`)}
        </select>
      </label>
    `},q._wfcNumSecField=function(M,h,p,v){let _=parseFloat(K0(p));this._wfcSetSecField(M,h,isNaN(_)?v:_)},q._wfcMoveDetail=function(M,h){let p=this._wfcState(),v=p.details.items,_=v.findIndex(E=>E.key===M),w=_+h;if(_<0||w<0||w>=v.length)return;let S=v[_];v[_]=v[w],v[w]=S,this._wfcCommit(p)},q._wfcToggleDetail=function(M,h){let p=this._wfcState(),v=p.details.items.find(_=>_.key===M);v&&(v.show=T3(h)),this._wfcCommit(p)},q._wfcToggleDetailShow=function(M){let h=this._wfcState(),p=h.details.items.find(v=>v.key===M);p&&(p.show=!p.show,this._wfcCommit(h))},q._wfcSetDetailValue=function(M,h,p){let v=this._wfcState(),_=v.details.items.find(w=>w.key===M);_&&(_[h]=p),this._wfcCommit(v)},q._wfcSetDetail=function(M,h,p){let v=this._wfcState(),_=v.details.items.find(S=>S.key===M);if(!_)return;let w=K0(p);if(h==="icon_size"||h==="text_size"){let S=parseFloat(w);w=isNaN(S)?void 0:S}else(w===""||w==null)&&(w=void 0);_[h]=w,this._wfcCommit(v)},q._wfcColorField=function(M,h,p){return x`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${M}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${h||"#888888"}
          @change=${p}
          @input=${p}
        />
        <span class="wsfc-color-hex">${h||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!h}
          @click=${()=>p({target:{value:""}})}
        >Reset</button>
      </div>
    `},q._wfcSelect=function(M,h,p,v,_,w){if(this.wsfcHide&&this.wsfcHide.includes(h))return Z;let S=String(_??w);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${p}</span>
        <select
          class="wsfc-native-select"
          @change=${E=>this._wfcSetSecField(M,h,E.target.value)}
        >
          ${v.map(E=>x`<option value=${String(E.value)} ?selected=${String(E.value)===S}>${E.label}</option>`)}
        </select>
      </label>
    `};let m4={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function b5(M,h){return/chip_scale/.test(M)?{min:50,max:250,step:5}:/chip_columns/.test(M)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(M)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(M)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(M)?{min:0,max:100,step:1}:/header_icon_size/.test(M)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(M)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(M)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(M)?{min:-40,max:40,step:1}:/shadow_blur/.test(M)?{min:0,max:80,step:1}:/border_radius/.test(M)?{min:0,max:48,step:1}:/border_width/.test(M)?{min:0,max:12,step:1}:/hourly_slots/.test(M)?{min:0,max:48,step:1}:/daily_slots/.test(M)?{min:0,max:14,step:1}:/labels_position|opacity/.test(M)?{min:0,max:100,step:1}:/indent/.test(M)?{min:0,max:120,step:2}:/height/.test(M)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(M)?{min:8,max:100,step:1}:/font_size|_size$/.test(M)?{min:8,max:48,step:1}:/_width$/.test(M)?{min:1,max:12,step:1}:/_length$/.test(M)?{min:5,max:100,step:5}:/hourly_group_size/.test(M)?{min:1,max:4,step:1}:/temperature_precision/.test(M)?{min:0,max:2,step:1}:/hours/.test(M)?{min:1,max:48,step:1}:m4[h]||m4.px}q._wfcNumField=function(M,h,p,v,_,w){if(this.wsfcHide&&this.wsfcHide.includes(h))return Z;let S=b5(h,v||""),E=_!=null?Number(_):Number(w);return this._wfcSliderTpl(p,v,S,E,z=>this._wfcNumSecField(M,h,z,w))},q._wfcPlainSlider=function(M,h,p,v,_,w){let S=b5(_||"",h||""),E=p!=null?Number(p):Number(v);return this._wfcSliderTpl(M,h,S,E,w)},q._wfcSlotSlider=function(M,h,p){let v=b5(h,""),_=p!=null?n(Number(p),v.min,v.max):0,w=S=>Number(S)<=0?"All":String(S);return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${M}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${v.min}
          max=${v.max}
          step=${v.step}
          .value=${String(_)}
          @input=${S=>{let E=S.target.closest(".wsfc-slider-row"),z=E&&E.querySelector(".wsfc-slider-num");z&&(z.textContent=w(S.target.value))}}
          @change=${S=>this._wfcSetForecastNum(h,parseInt(S.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${w(_)}></span></span>
      </div>
    `},q._wfcAutoSizeField=function(M,h,p){let v=b5(h,""),_=this._wfcState()[M]||{},w=n(parseInt(_[h],10)||0,v.min,v.max),S=E=>Number(E)<=0?"Auto":`${E}px`;return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${p}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${v.min}
          max=${v.max}
          step=${v.step}
          .value=${String(w)}
          @input=${E=>{let z=E.target.closest(".wsfc-slider-row"),W=z&&z.querySelector(".wsfc-slider-num");W&&(W.textContent=S(E.target.value))}}
          @change=${E=>this._wfcSetSecField(M,h,parseInt(E.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${S(w)}></span></span>
      </div>
    `},q._wfcSliderTpl=function(M,h,p,v,_){let w=h||"";return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${M}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${p.min}
          max=${p.max}
          step=${p.step}
          .value=${String(v)}
          @input=${S=>{let E=S.target.closest(".wsfc-slider-row"),z=E&&E.querySelector(".wsfc-slider-num");z&&(z.textContent=S.target.value)}}
          @change=${_}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(v)}></span>${w}</span>
      </div>
    `},q._wfcCheckbox=function(M,h,p){return x`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!h} @change=${p} />
        <span>${M}</span>
      </label>
    `},q._wfcGroup=function(M){return M?x`<div class="wsfc-group-div"><span class="wsfc-group-label">${M}</span></div>`:x`<div class="wsfc-group-div"></div>`},q._wfcSubPanel=function(M,h){return x`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${M}</span></summary>
        <div class="wsfc-subpanel-body">${h}</div>
      </details>
    `},q._wfcFlushControls=function(M,h){return x`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",h.flush_edges,p=>this._wfcToggleSecField(M,"flush_edges",p))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",h.flush_top,p=>this._wfcToggleSecField(M,"flush_top",p))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",h.flush_bottom,p=>this._wfcToggleSecField(M,"flush_bottom",p))}
    `},q._wfcTextControls=function(M,h,p,v){let _=this._wfcState()[M]||{};return x`
      <div class="wsfc-sub-title">${p}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(M,`${h}_font_size`,"Size","px",_[`${h}_font_size`],v)}
        ${this._wfcSelect(M,`${h}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],_[`${h}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",_[`${h}_color`],w=>this._wfcSetSecField(M,`${h}_color`,w.target.value))}
    `};let f4=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];q._wfcDividerControls=function(M,h){return x`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",h.divider_above,p=>this._wfcToggleSecField(M,"divider_above",p))}
      ${h.divider_above?x`
            <div class="wsfc-row">
              ${this._wfcNumField(M,"divider_above_width","Thickness","px",h.divider_above_width,1)}
              ${this._wfcNumField(M,"divider_above_length","Length","%",h.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(M,"divider_above_style","Line style",f4,h.divider_above_style,"solid")}
            </div>`:Z}

      ${this._wfcCheckbox("Section Divider Below",h.divider_below,p=>this._wfcToggleSecField(M,"divider_below",p))}
      ${h.divider_below?x`
            <div class="wsfc-row">
              ${this._wfcNumField(M,"divider_below_width","Thickness","px",h.divider_below_width,1)}
              ${this._wfcNumField(M,"divider_below_length","Length","%",h.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(M,"divider_below_style","Line style",f4,h.divider_below_style,"solid")}
            </div>`:Z}

      ${h.divider_above||h.divider_below?this._wfcColorField("Divider color",h.divider_color,p=>this._wfcSetSecField(M,"divider_color",p.target.value)):Z}
    `},q._wfcBackgroundControls=function(M,h){let p=!!h.background_enabled;return x`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",p,v=>this._wfcToggleSecField(M,"background_enabled",v))}
      ${p?x`
            ${this._wfcColorField("Background color",h.background_color,v=>this._wfcSetSecField(M,"background_color",v.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",h.background_opacity==null?80:h.background_opacity,80,"opacity",v=>this._wfcSetSecField(M,"background_opacity",n(parseInt(v.target.value,10)||0,0,100)))}`:Z}
    `},q._wfcSectionStyles=function(M,h){return this._wfcSubPanel("Section Styles",x`
        ${this._wfcFlushControls(M,h)}
        ${this._wfcDividerControls(M,h)}
        ${this._wfcBackgroundControls(M,h)}`)},q._wfcStockForm=function(M){return this._wfcStockFormFor(u7[M])},q._wfcStockFormFor=function(M){if(!M||!M.length)return Z;let h=ut(this._config),p=this._getSelectedAttributes(h),v=this._schema(this.localize.bind(this),p,"chart"),_=new Map,w=z=>z.forEach(W=>{W.schema?w(W.schema):_.set(W.name,W)});w(v);let S=M.map(z=>_.get(z)).filter(Boolean);if(!S.length)return Z;let E=z=>h6[z.name]||this._computeLabel(z)||z.name;return x`
      <ha-form
        .hass=${this.hass}
        .data=${h}
        .schema=${S}
        .computeLabel=${E}
        .computeHelper=${z=>this._wfcHelper(z)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},q._wfcTitleControls=function(M,h){return x`
      ${this._wfcCheckbox("Show Title Row",h.title_show,p=>this._wfcToggleSecField(M,"title_show",p))}
      ${h.title_show?x`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${h.title_text||""}
                @change=${p=>this._wfcSetSecField(M,"title_text",p.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${h.title_icon||""}
              @value-changed=${p=>this._wfcSetSecField(M,"title_icon",p.detail&&p.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(M,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],h.title_text_align,"left")}
              ${this._wfcSelect(M,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],h.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(M,"title_font_size","Text size","px",h.title_font_size,15)}
            ${this._wfcSelect(M,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],h.title_font_weight,"600")}
            ${this._wfcNumField(M,"title_icon_size","Icon size","px",h.title_icon_size,20)}
            ${this._wfcNumField(M,"title_indent","Indent","px",h.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",h.title_color,p=>this._wfcSetSecField(M,"title_color",p.target.value))}
              ${this._wfcColorField("Icon color",h.title_icon_color,p=>this._wfcSetSecField(M,"title_icon_color",p.target.value))}
            </div>
          `:Z}
    `},q._wfcSectionOptionsBody=function(M,h){let p=h[M]||{},v=M==="details",_=M==="current",w=M==="sun_position",S=M==="sun_arc",E=M==="hourly",z=M==="daily",W=this._config.forecast||{},N=this._config.current||{},a1=n(parseInt(p.columns,10)||2,1,4),p1=this._wfcMetricOptions(typeof j2<"u"?j2:[],!0);return x`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(M)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(M,p)}
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
          ${z?x`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",W.daily_slots)}`:Z}
          ${v?x`
                ${this._wfcGroup("Layout")}
                ${p.chips?x`
                      ${this._wfcSelect(M,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],p.chip_layout==="column"?"wrap":p.chip_layout||"wrap","wrap")}
                      ${(p.chip_layout||"wrap")==="grid"?x`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(p.chip_columns,10)>0,B=>this._wfcSetSecField(M,"chip_columns",B.target.checked?n(parseInt(p.chip_columns,10)||2,1,6):0))}
                            ${parseInt(p.chip_columns,10)>0?this._wfcNumField(M,"chip_columns","Columns","",parseInt(p.chip_columns,10)||2,2):Z}`:Z}`:x`
                      ${this._wfcSelect(M,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],p.details_layout||"grid","grid")}
                      ${(p.details_layout||"grid")==="grid"?this._wfcNumField(M,"columns","Columns","",a1,2):Z}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!p.chips,B=>this._wfcToggleSecField(M,"chips",B))}
                ${p.chips?x`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",p.chip_pill!=null?!!p.chip_pill:p.chip_shape!=="rounded"&&p.chip_shape!=="square",B=>this._wfcSetSecField(M,"chip_pill",B.target.checked))}
                      ${(p.chip_pill!=null?p.chip_pill:p.chip_shape!=="rounded"&&p.chip_shape!=="square")?Z:this._wfcNumField(M,"chip_radius","Corner radius (0 = square)","px",p.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((p.chip_scale==null?1:p.chip_scale)*100),100,"chip_scale",B=>this._wfcSetSecField(M,"chip_scale",n((parseInt(B.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(M,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",p.chip_text_color,B=>this._wfcSetSecField(M,"chip_text_color",B.target.value))}
                      ${this._wfcColorField("Chip background",p.chip_bg,B=>this._wfcSetSecField(M,"chip_bg",B.target.value))}
                      ${this._wfcColorField("Chip border",p.chip_border_color,B=>this._wfcSetSecField(M,"chip_border_color",B.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",p.chip_show_icon!==!1,B=>this._wfcToggleSecField(M,"chip_show_icon",B))}
                      ${p.chip_show_icon!==!1?x`
                            ${this._wfcSelect(M,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],p.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(M,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",p.chip_icon_color,B=>this._wfcSetSecField(M,"chip_icon_color",B.target.value))}`:Z}
                      ${this._wfcCheckbox("Show metric name in chip",!!p.chip_show_name,B=>this._wfcToggleSecField(M,"chip_show_name",B))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!p.chip_hide_when_off,B=>this._wfcToggleSecField(M,"chip_hide_when_off",B))}`:Z}

                ${p.chips?x`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(h)}`:x`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(M,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(M,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",p.global_icon_color,B=>this._wfcSetSecField(M,"global_icon_color",B.target.value))}
                        ${this._wfcColorField("Text color",p.global_text_color,B=>this._wfcSetSecField(M,"global_text_color",B.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(h)}`}
              `:Z}

          ${w?x`
                ${this._wfcSubPanel("Time",x`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?Z:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(M,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],p.timeframe_mode,"hours")}
                      ${p.timeframe_mode==="hours"||p.timeframe_mode==null?x`
                            ${this._wfcNumField(M,"timeframe_hours","Hours","",p.timeframe_hours,24)}
                            ${this._wfcSelect(M,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],p.timeframe_anchor,"now_left")}
                          `:Z}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(M,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],p.times_position==="center"?"overlay":p.times_position,"below")}
                      ${this._wfcSelect(M,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],p.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(M,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(B=>({value:B,label:B+(B>1?" hours":" hour")}))],p.ticks_every==null?0:p.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(M,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",x`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",p.marker_color,B=>this._wfcSetSecField(M,"marker_color",B.target.value))}
                      ${this._wfcNumField(M,"marker_opacity","Marker opacity","%",p.marker_opacity==null?100:p.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",x`
                    <div class="wsfc-row">
                      ${this._wfcSelect(M,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],p.ss_markers_position,"hidden")}
                    </div>
                    ${p.ss_markers_position&&p.ss_markers_position!=="hidden"?x`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",p.ss_markers_color,B=>this._wfcSetSecField(M,"ss_markers_color",B.target.value))}
                          ${this._wfcNumField(M,"ss_markers_opacity","Marker opacity","%",p.ss_markers_opacity==null?100:p.ss_markers_opacity,100)}
                        </div>`:Z}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",x`
                    ${this._wfcSubPanel("Metrics Defaults",x`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!p.forecast_metric_detail_icons,B=>this._wfcToggleSecField(M,"forecast_metric_detail_icons",B))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!p.forecast_temp_with_icon,B=>this._wfcToggleSecField(M,"forecast_temp_with_icon",B))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(M,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(B=>({value:B,label:B+(B>1?" hours":" hour")}))],p.forecast_every,3)}
                          ${this._wfcNumField(M,"forecast_font_size","Text size","px",p.forecast_font_size,11)}
                          ${this._wfcNumField(M,"forecast_icon_size","Icon size","px",p.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",p.forecast_temp_color,B=>this._wfcSetSecField(M,"forecast_temp_color",B.target.value))}
                        ${this._wfcColorField("Icon color",p.forecast_icon_color,B=>this._wfcSetSecField(M,"forecast_icon_color",B.target.value))}
                        ${y.some(B=>p.forecast_metric_pos&&p.forecast_metric_pos[B]&&p.forecast_metric_pos[B]!=="hidden"||O(p).includes(B))?this._wfcColorField("Metric Text Color",p.forecast_extra_color,B=>this._wfcSetSecField(M,"forecast_extra_color",B.target.value)):Z}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(M,p)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",x`
                    ${this._wfcNumField(M,"height","Bar height","px",p.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",p.weather_adjust!==!1,B=>this._wfcToggleSecField(M,"weather_adjust",B))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",p.day_color,B=>this._wfcSetSecField(M,"day_color",B.target.value))}
                      ${this._wfcColorField("Night color",p.night_color,B=>this._wfcSetSecField(M,"night_color",B.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(M,p)}
              `:Z}

          ${S?x`
                <div class="wsfc-row">
                  ${this._wfcNumField(M,"height","Arc height","px",p.height,90)}
                  ${this._wfcSelect(M,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],p.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?Z:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(M,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],p.timeframe_mode,"sunrise_sunset")}
                  ${p.timeframe_mode==="hours"?x`
                        ${this._wfcNumField(M,"timeframe_hours","Hours","",p.timeframe_hours,24)}
                        ${this._wfcSelect(M,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],p.timeframe_anchor,"now_left")}
                      `:Z}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",e1(p.labels_position),0,"labels_position",B=>this._wfcSetSecField(M,"labels_position",n(parseInt(B.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${p.sun_icon||""}
                  @value-changed=${B=>this._wfcSetSecField(M,"sun_icon",B.detail&&B.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?Z:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!p.night_moon,B=>this._wfcToggleSecField(M,"night_moon",B))}
                ${p.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?x`<ha-icon-picker
                      label="Moon icon"
                      .value=${p.moon_icon||"mdi:weather-night"}
                      @value-changed=${B=>this._wfcSetSecField(M,"moon_icon",B.detail&&B.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:Z}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(M,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],p.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",p.show_arc_ticks,B=>this._wfcToggleSecField(M,"show_arc_ticks",B))}
                ${this._wfcCheckbox("Show tick marks on the baseline",p.show_base_ticks!==!1,B=>this._wfcToggleSecField(M,"show_base_ticks",B))}
                <div class="wsfc-row">
                  ${this._wfcSelect(M,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],p.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",p.tick_color,B=>this._wfcSetSecField(M,"tick_color",B.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",p.show_times!==!1,B=>this._wfcToggleSecField(M,"show_times",B))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",p.show_captions!==!1,B=>this._wfcToggleSecField(M,"show_captions",B))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",p.show_ss_icons,B=>this._wfcToggleSecField(M,"show_ss_icons",B))}
                ${p.show_ss_icons?x`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${p.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${B=>this._wfcSetSecField(M,"sunrise_icon",B.detail&&B.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${p.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${B=>this._wfcSetSecField(M,"sunset_icon",B.detail&&B.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],p.ss_icon_position,"left")}
                        ${this._wfcNumField(M,"ss_icon_size","Icon size","px",p.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",p.ss_icon_color,B=>this._wfcSetSecField(M,"ss_icon_color",B.target.value))}
                    `:Z}

                ${this._wfcTextControls(M,"time","Time text",13)}
                ${this._wfcTextControls(M,"caption","Sunrise / sunset caption",11)}
              `:Z}

          ${w?Z:this._wfcSectionStyles(M,p)}
        </div>
    `};let A6={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};q._wfcPlainNum=function(M,h,p){return this._wfcPlainSlider(M,"px",h,16,"_size",p)},q._wfcDetailRows=function(M){return M.details.items.map((p,v,_)=>{let w=o[p.key]||{};return x`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${p.icon||w.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${w.label||p.key}</span>
            <ha-icon class="wsfc-ico-btn ${v===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${S=>{S.preventDefault(),S.stopPropagation(),this._wfcMoveDetail(p.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${v===_.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${S=>{S.preventDefault(),S.stopPropagation(),this._wfcMoveDetail(p.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${p.show?"mdi:eye":"mdi:eye-off"} title=${p.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${S=>{S.preventDefault(),S.stopPropagation(),this._wfcToggleDetailShow(p.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${w.icon||""}
              .value=${p.icon||""}
              @value-changed=${S=>this._wfcSetDetail(p.key,"icon",S)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${S=>this._wfcSetDetailValue(p.key,"mode",S.target.value)}>
                <option value="global" ?selected=${p.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${p.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${p.mode==="custom"?x`
                  ${this._wfcPlainNum("Icon size (px)",p.icon_size,S=>this._wfcSetDetail(p.key,"icon_size",S))}
                  ${this._wfcPlainNum("Text size (px)",p.text_size,S=>this._wfcSetDetail(p.key,"text_size",S))}
                  ${this._wfcColorField("Icon color",p.icon_color,S=>this._wfcSetDetail(p.key,"icon_color",S))}
                  ${this._wfcColorField("Text color",p.text_color,S=>this._wfcSetDetail(p.key,"text_color",S))}
                `:Z}
          </div>
        </details>
      `})};let v6=["current","details","hourly","daily","sun_arc","sun_position"];function te(M){let h=v6.filter(v=>M.includes(v)),p=M.filter(v=>!v6.includes(v));return[...h,...p]}q._wfcEditor=function(){let M=c2(this._config),h=te(M.order),p=M.order.map((_,w,S)=>{let E=!!(M[_]&&M[_].show);return x`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${A6[_]||h7.options}></ha-icon>
          <span class="wsfc-order-name">${i[_]||_}</span>
          <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(_,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${w===S.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(_,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${E?"mdi:eye":"mdi:eye-off"} title=${E?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(_)}></ha-icon>
        </div>
      `}),v=h.map(_=>x`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${A6[_]||h7.options}></ha-icon><span class="wsfc-panel-title">${i[_]||_}</span></summary>
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${h7.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${p}
        </div>
      </details>
      ${v}
      ${this._wfcClockPanel(M)}
    `};let x6=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];q._wfcClockPanel=function(M){let h="current",p=M.current||{},v=w=>w==="above"?"above-center":w==="below"?"below-center":w,_=p.clock_show_time!==!1;return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",_,w=>this._wfcToggleSecField(h,"clock_show_time",w))}
                ${_?x`
                      <div class="wsfc-row">
                        ${this._wfcSelect(h,"clock_placement","Clock placement",x6,v(p.clock_placement),"right")}
                        ${this._wfcSelect(h,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],p.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",p.clock_show_seconds,w=>this._wfcToggleSecField(h,"clock_show_seconds",w))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(h,"clock_font_size","Time size")}
                        ${this._wfcSelect(h,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],p.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",p.clock_color,w=>this._wfcSetSecField(h,"clock_color",w.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${p.clock_font_family||""}
                          @change=${w=>this._wfcSetSecField(h,"clock_font_family",w.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(h,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],p.clock_contrast,"none")}`:Z}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",p.clock_show_date,w=>this._wfcToggleSecField(h,"clock_show_date",w))}
                ${p.clock_show_date?x`
                      ${this._wfcSelect(h,"clock_date_format","Date format",x2.map(w=>({value:w.value,label:w.label})),p.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(h,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...x6],p.clock_date_placement==="above"||p.clock_date_placement==="below"?v(p.clock_date_placement):p.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(h,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",p.clock_date_color,w=>this._wfcSetSecField(h,"clock_date_color",w.target.value))}
                      </div>
                      ${this._wfcSelect(h,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],p.clock_date_contrast!=null?p.clock_date_contrast:p.clock_contrast,"none")}`:Z}
        </div>
      </details>
    `},q._wfcYamlPanel=function(){let M;try{M=o1(this._config)}catch{M="# (unable to render YAML)"}return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${M}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,u2.__wfcResolve=c2,u2.__wfcBuild=r})();var k9=u2.prototype,nH=(r,t)=>({config:r,hass:t,_wfcSources:k9._wfcSources,_wfcSlotEntityForKey:k9._wfcSlotEntityForKey,_wfcMetricEntityChain:k9._wfcMetricEntityChain});function sH(r,t,e){return!r||!t?[]:k9._wfcMetricEntityChain.call(nH(r,t),e)}function b3(r,t,e){return sH(r,t,e).find(i=>!i.startsWith("weather."))||null}function v5(r,t,e){for(let i of sH(r,t,e)){let o=t.states[i];if(o){if(i.startsWith("weather.")){let a=o.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:Df(o,e),entity:i}}else if(!["unknown","unavailable",""].includes(o.state)){let a=Number(o.state);return{value:isNaN(a)?o.state:a,unit:o.attributes?.unit_of_measurement||"",entity:i}}}}return null}function Df(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function ht(r,t,e,i,o=i){return r?.entities?.[o]||b3(t,e,i)}var CH=new WeakMap;function Jr(r,t){let e=t?.devices||{},i=JSON.stringify(r?.metric_sources?.sources||[]),o=CH.get(e);return o&&o.hass!==t&&(o.hass=t,Object.keys(e).length!==o.size0&&(o=null)),o||(o=new Map,o.size0=Object.keys(e).length,o.hass=t,CH.set(e,o)),o.has(i)||o.set(i,Bf(r,t)),o.get(i)}function Bf(r,t){let e=[],i=t?.devices||{};for(let o of r?.metric_sources?.sources||[]){if(o.disabled||typeof o.ref!="string"||!o.ref.startsWith("device:"))continue;let a=o.ref.slice(7);e.includes(a)||e.push(a);let n=i[a]?.config_entries||[];for(let[H,V]of Object.entries(i))!e.includes(H)&&(V.config_entries||[]).some(c=>n.includes(c))&&e.push(H)}return e}var aH=new WeakMap;function C4(r,t){let e=r?.entities;if(!e)return[];let i=aH.get(e);if(i&&i.hass!==r&&(i.hass=r,Object.keys(e).length!==i.size0&&(i=null)),!i){i=new Map;for(let o in e){let a=e[o]?.device_id;a&&(i.has(a)||i.set(a,[]),i.get(a).push(o))}i.size0=Object.keys(e).length,i.hass=r,aH.set(e,i)}return i.get(t)||[]}function O9(r,t){return Jr(r,t).flatMap(e=>C4(t,e))}function HH(r,t,e){let i=O9(r,t).filter(o=>{let a=t.states[o];return a&&e.test(`${o} ${a.attributes?.friendly_name||""}`)});return i.find(o=>!/indoor|inside/i.test(o))||i[0]||null}function N2(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function VH(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>b3(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let o=i.filter(a=>N2(t,a)!=null).length;return o===i.length?"online":o?"partial":"offline"}function LH(r,t,e,i){return!e||!t?null:k9._wfcSlotEntityForKey.call(nH(r,t),e,i)||null}var zf={ecowitt:"Ecowitt",ecowitt_local:"Ecowitt Local",ha_ecowitt_iot:"Ecowitt Official",openweathermap:"OpenWeatherMap",pirateweather:"Pirate Weather",nws:"National Weather Service",met:"Met.no",accuweather:"AccuWeather",wunderground:"Weather Underground",weatherunderground:"Weather Underground",wundergroundpws:"Weather Underground PWS",tomorrowio:"Tomorrow.io",template:"Template",airnow:"AirNow",pollenlevels:"Pollen Levels (Google)",kleenex_pollenradar:"Kleenex Pollen Radar",silam_pollen:"SILAM Pollen"};function w3(r,t){let e=t&&r?.entities?.[t]?.platform;return e?zf[e]||e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}var ii={aqi:{dc:"aqi",airnow:"aqi",re:/\baqi\b|air[\s_-]?quality[\s_-]?index/i,label:"AQI"},pm2_5:{dc:"pm25",airnow:"pm25",re:/pm[\s_.-]?2[\s_.-]?5/i,label:"PM2.5"},pm10:{dc:"pm10",airnow:"pm10",re:/pm[\s_.-]?10/i,label:"PM10"},ozone:{dc:"ozone",airnow:"o3",re:/\bo3\b|ozone/i,label:"Ozone"},co2:{dc:"carbon_dioxide",airnow:null,re:/\bco2\b|carbon[\s_-]?dioxide/i,label:"CO\u2082"}},lH=/indoor|inside/i,ti=(r,t)=>{let e=r.states[t];return e&&!["unavailable","unknown"].includes(e.state)},If=(r,t,e)=>{let i=r.states[t];if(!i||!t.startsWith("sensor."))return!1;let o=i.attributes?.device_class;return o?o===e.dc:e.re.test(`${t} ${i.attributes?.friendly_name||""}`)};function mt(r,t,e){let i=ii[e];if(!i||!t?.states)return null;let a=O9(r,t).filter(V=>If(t,V,i)).filter(V=>!lH.test(`${V} ${t.states[V]?.attributes?.friendly_name||""}`));if(a.length)return a.find(V=>ti(t,V))||a[0];let n=t.entities||{};if(i.airnow){let V=Object.keys(n).filter(c=>n[c]?.platform==="airnow"&&n[c]?.translation_key===i.airnow&&t.states[c]);if(V.length)return V.find(c=>ti(t,c))||V[0]}return Object.keys(t.states).filter(V=>!V.startsWith("sensor.")||t.states[V].attributes?.device_class!==i.dc?!1:!lH.test(`${V} ${t.states[V].attributes?.friendly_name||""}`)).find(V=>ti(t,V))||null}function MH(r,t){let e=r?.entities||{},i=e[t]?.device_id;return i&&Object.keys(e).find(o=>e[o]?.device_id===i&&e[o]?.translation_key==="station")||null}var a0=[{max:50,name:"Good",color:"#00e400"},{max:100,name:"Moderate",color:"#ffff00"},{max:150,name:"Unhealthy for sensitive groups",short:"Sensitive groups",color:"#ff7e00"},{max:200,name:"Unhealthy",color:"#ff0000"},{max:300,name:"Very unhealthy",color:"#8f3f97"},{max:1/0,name:"Hazardous",color:"#7e0023"}],T9=r=>r==null||isNaN(r)?null:a0.findIndex(t=>r<=t.max),cH={pm2_5:[9,35.4,55.4,125.4,225.4,325.4],pm10:[54,154,254,354,424,604],ozone:[.054,.07,.085,.105,.2,.604]},ei=[0,50,100,150,200,300,500],oi={benzene:{re:/benzene/i,unit:"ppb",t:[1,3,9,30],source:"ATSDR minimal risk levels (chronic 3 ppb, acute 9 ppb)"},co2:{re:/\bco2\b|carbon[\s_-]?dioxide/i,unit:"ppm",t:[1e3,2e3,5e3,1e4],source:"ASHRAE comfort guidance 1000 ppm; OSHA limit 5000 ppm"}},Nf=(r,t)=>/ppb/i.test(t||"")?r/1e3:/µg|ug/i.test(t||"")?r/1960:r;function ri(r,t){let e=0;for(let i=0;i<t.length;i++){if(r<=t[i])return Math.round(ei[i]+(r-e)/(t[i]-e)*(ei[i+1]-ei[i]));e=t[i]}return 500}function ft(r,t,e,i){if(t==null||isNaN(t))return null;let o=Number(t);if(i?.length)return ri(o,[...i]);if(cH[r])return ri(r==="ozone"?Nf(o,e):o,cH[r]);let a=oi[r];return a?ri(o,a.t):null}var q1={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i},battery:{label:"Station battery",icon:"mdi:battery",color:"#66bb6a",digits:null,find:/batt/i,health:!0},signal:{label:"Station signal",icon:"mdi:signal",color:"#42a5f5",digits:0,find:/signal/i,health:!0},rssi:{label:"Station RSSI",icon:"mdi:wifi-strength-2",color:"#42a5f5",digits:0,find:/rssi/i,health:!0},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},aqi:{label:"AQI",icon:"mdi:air-filter",color:"#66bb6a",digits:0,aq:"aqi"},pm2_5:{label:"PM2.5",icon:"mdi:blur",color:"#ffb74d",digits:1,aq:"pm2_5"},pm10:{label:"PM10",icon:"mdi:blur-linear",color:"#a1887f",digits:0,aq:"pm10"},ozone:{label:"Ozone",icon:"mdi:molecule",color:"#4fc3f7",digits:3,aq:"ozone"},co2:{label:"CO\u2082",icon:"mdi:molecule-co2",color:"#4fc3f7",digits:0,aq:"co2"},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function x5(r,t,e,i){if(i)return i;let o=q1[r];return o?o.key?b3(t,e,o.key):o.aq?mt(t,e,o.aq):o.find?HH(t,e,o.find):null:null}function a4(r,t,e){if(e!=null&&e!=="")return Number(e);let i=q1[r]?.digits;return i??(/inHg/i.test(t)||t==="V"?2:/psi|kPa/i.test(t)?1:0)}function dH(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function pH(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var Wf=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],n4=r=>r==null||isNaN(r)?"\u2014":Wf[Math.round((r%360+360)%360/22.5)%16];var Uf="pollenlevels",jf=new Set(["plants_in_season_today","overall_pollen_risk_today","top_pollen_types_today"]),At={TREE:"mdi:tree",GRASS:"mdi:grass",WEED:"mdi:flower-tulip"},Gf={ALDER:[1,2,3,4],ASH:[3,4,5],BIRCH:[3,4,5],COTTONWOOD:[3,4,5],ELM:[2,3,4],MAPLE:[2,3,4],OLIVE:[4,5,6],JUNIPER:[1,2,3,4],OAK:[3,4,5,6],PINE:[4,5,6],CYPRESS_PINE:[8,9,10],HAZEL:[1,2,3],GRAMINALES:[5,6,7,8],RAGWEED:[8,9,10],MUGWORT:[7,8,9],JAPANESE_CEDAR:[2,3,4],JAPANESE_CYPRESS:[3,4],TREE:[2,3,4,5,6],GRASS:[5,6,7,8],WEED:[8,9,10]},vt=["January","February","March","April","May","June","July","August","September","October","November","December"],qf={winter:[12,1,2],spring:[3,4,5],summer:[6,7,8],fall:[9,10,11],autumn:[9,10,11]};function uH(r,t=!1){if(!r||typeof r!="string")return[];let e=new Set,i=/\b(early|mid|late)?[\s-]*(winter|spring|summer|fall|autumn)\b/gi,o;for(;o=i.exec(r);){let a=qf[o[2].toLowerCase()],n=(o[1]||"").toLowerCase();(n==="early"?a.slice(0,2):n==="late"?a.slice(1):n==="mid"?[a[1]]:a).forEach(V=>e.add(V))}return[...e].map(a=>t?(a+5)%12+1:a).sort((a,n)=>a-n)}function Yf(r,t){return r==null||isNaN(r)||r<=0?t===!1?"off":"none":r<=2?"low":r<=3?"medium":"high"}var xt={none:"None",low:"Low",medium:"Medium",high:"High",off:"Off season"},hH=r=>{let t=Number(r);return r==null||r===""||isNaN(t)?null:t};function Qf(r){let t=r?.entities||{},e=r?.devices||{},i=new Map;for(let o in t){let a=t[o];if(a?.platform!==Uf||!o.startsWith("sensor."))continue;let n=r.states[o];if(!n)continue;let H=e[a.device_id]||{},c=(H.config_entries_subentries?JSON.stringify(H.config_entries_subentries):"")||(H.config_entries||[])[0]||"default";i.has(c)||i.set(c,{key:c,devices:new Set,plants:[],types:[],summary:{}});let d=i.get(c);if(a.device_id&&d.devices.add(a.device_id),a.entity_category)continue;if(jf.has(a.translation_key)){d.summary[a.translation_key]=o;continue}let m=n.attributes||{};m.code?d.plants.push(o):"category"in m&&d.types.push(o)}return[...i.values()]}function Kf(r,t,e,i){let o=r.states[t],a=o?.attributes||{},n=String(a.code||"").toUpperCase()||Jf(a.icon)||tA(a.friendly_name),H=hH(o?.state),V=hH(a.tomorrow_value),c=a.trend;!c&&H!=null&&V!=null&&(c=V>H?"up":V<H?"down":"flat");let d=e?.[n]||e?.[a.code]||(uH(a.season,i).length?uH(a.season,i):Xf(Gf[n],i))||[],m=String(a.type||"").toUpperCase();return{entity:t,code:n,name:eA(a.friendly_name,r,t)||n,icon:At[m]||At[n]||a.icon||"mdi:flower-pollen",value:H,max:5,pct:H==null?0:Math.max(0,Math.min(100,H/5*100)),inSeason:a.inSeason??null,level:Yf(H,a.inSeason),category:a.category||null,tomorrow:V,trend:c||null,color:a.color_hex||null,months:d||[]}}var Xf=(r,t)=>r&&t?r.map(e=>(e+5)%12+1):r,Jf=r=>Object.keys(At).find(t=>At[t]===r)||"",tA=r=>/grass/i.test(r||"")?"GRASS":/tree/i.test(r||"")?"TREE":/weed/i.test(r||"")?"WEED":"";function eA(r,t,e){if(!r)return"";let i=t.devices?.[t.entities?.[e]?.device_id],o=i?.name_by_user||i?.name;return o&&r.startsWith(o)&&r.slice(o.length).trim()||r}function gt(r,t,e=new Date){let i=r||{},o=(t?.config?.latitude??0)<0,a=null,n;if(Array.isArray(i.entities)&&i.entities.length)n=i.entities.filter(T=>t.states[T]);else{let T=Qf(t);if(a=i.device&&T.find($=>$.devices.has(i.device))||T[0]||null,!a)return{source:null,rows:[],entities:[]};n=i.view==="types"?a.types:a.plants.length?a.plants:a.types}let H=n.map(T=>Kf(t,T,i.seasons,o));if(Array.isArray(i.species)&&i.species.length)H=i.species.map($=>String($).toUpperCase()).map($=>H.find(F=>F.code===$||F.name.toUpperCase()===$)).filter(Boolean);else{H.sort(($,F)=>(F.value??-1)-($.value??-1)||+(F.inSeason===!0)-+($.inSeason===!0)||$.name.localeCompare(F.name));let T=Number(i.max_rows??6);T>0&&(H=H.slice(0,T))}let V=e.getMonth()+1,c=Array.from({length:12},(T,$)=>H.filter(F=>F.months.includes($+1)).length),d=H.filter(T=>(T.value??0)>0).sort((T,$)=>$.value-T.value)[0]||null,m=T=>(T.value??0)<=0,A=T=>(T.value??0)>0||T.inSeason===!0||T.inSeason==null&&T.months.includes(V),g=H.some(A),y=H;i.hide_off_season!==!1&&(H=H.filter(A)),i.hide_none!==!1&&(H=H.filter(T=>!m(T)));let O;d?O=`${d.name} ${xt[d.level].toLowerCase()} today`:g?O=i.show_nothing===!1?"":i.nothing_text||"In season, but nothing in the air today":O=["Out of season",rA(y,V)].filter(Boolean).join(" \xB7 ");let k=a?.summary||{};return{source:i.show_source===!1?"":i.source||(i.entities?.length?"Pollen":"Google"),town:i.show_location===!1?"":i.location||t?.config?.location_name||"",anyIn:g,top:d,status:O,rows:H,total:y.length,outOfSeason:y.length>0&&!g,allNone:y.length>0&&y.every(m),strip:c,month:V,entities:[...n,...Object.values(k)]}}function rA(r,t){let e=null;for(let i of r)if(i.months.length)for(let o=1;o<=12;o++){let a=(t-1+o)%12+1;if(i.months.includes(a)){(!e||o<e.d)&&(e={r:i,d:o,m:a});break}}return e?`${e.r.name} due in ${vt[e.m-1]}`:""}var j0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function E2(r,t){if(!j0(t))return t===void 0?r:t;let e={...j0(r)?r:{}};for(let i of Object.keys(t))e[i]=j0(t[i])&&j0(e[i])?E2(e[i],t[i]):t[i];return e}function Ci(r,t){if(j0(r)&&j0(t)){let e={};for(let i of Object.keys(r)){let o=Ci(r[i],t[i]);o!==void 0&&(e[i]=o)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function R5(r){if(!j0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let o=j0(i)?R5(i):i;j0(o)&&!Object.keys(o).length||(t[e]=o)}return t}var s4=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var P9="windrose-card",iA=()=>!!customElements.get(P9);function ni(r){let t=r?.rose_engine||"auto";return t==="builtin"?"builtin":t==="windrose"||iA()?"windrose":"builtin"}var oA={mph:"mph","km/h":"kph","m/s":"mps",kn:"knot",kt:"knot",knots:"knot","ft/s":"fps",Beaufort:"bft"},CA=(r,t)=>({location:"bottom",buttons:r.map(([e,i,o])=>({type:"period_selector",button_text:e,period_back:i,...i===t?{active:!0}:{},...o||{}}))}),H4={standard:{label:"Standard \u2014 24 h, speed bar at the side, current direction",build:()=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"}})},periods:{label:"Period buttons \u2014 1 h / 8 h / 1 day / 7 days",build:()=>({windspeed_bar_location:"bottom",buttons_config:CA([["1 h","-1h"],["8 h","-8h"],["1 day","-1d"],["7 days","-7d",{use_statistics:!0,statistics_period:"hour"}]],"-1d")})},beaufort:{label:"Beaufort \u2014 speed and gust bars in Beaufort, live speed arrows",build:r=>({windspeed_bar_location:"bottom",data_period:{period_back:"-1d"},_speed:{speed_range_beaufort:!0,current_speed_arrow:!0,windspeed_bar_full:!0},_gust:{speed_range_beaufort:!0,current_speed_arrow:!0,windspeed_bar_full:!0,output_speed_unit:r}})},corners:{label:"Corner info \u2014 speed, direction and gust around the rose (sygad's style)",build:(r,t,e)=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"},rose_config:{center_circle:{text:"${calm-percentage}%"}},corner_info:{top_left:{label:"Speed",entity:t.speed,unit:` ${e}`,precision:1},top_right:{label:"Direction",entity:t.dir,input_unit:"degrees",output_unit:"letters"},...t.gust?{bottom_left:{label:"Gust",entity:t.gust,unit:` ${e}`,precision:1}}:{}}})},stats:{label:"Statistics \u2014 min / max / average speed and calm % under the rose",build:()=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"},text_blocks:{bottom:{...ai({})}}})},playback:{label:"Playback \u2014 step through the last 10 days (hourly statistics)",build:()=>({windspeed_bar_location:"right",buttons_config:{location:"bottom",buttons:[{type:"period_shift",button_text:"\u221212 h",shift_period:"-12h"},{type:"period_selector",button_text:"24 h",period_back:"-1d",active:!0},{type:"period_shift",button_text:"+12 h",shift_period:"+12h"},{type:"period_shift_play",button_text:"\u25B6 10 days",period_back:"-10d",window_period:"-1d",step_period:"+3h",delay:150,use_statistics:!0,statistics_period:"hour"}]}})},minimal:{label:"Minimal \u2014 the rose only",build:()=>({hide_windspeed_bar:!0,data_period:{period_back:"-1d"},direction_labels:{show_intercardinal_directions:!1}})}},_t={min:["Min","min-speed"],avg:["Avg","average-speed"],max:["Max","max-speed"],median:["Median","median-speed"],p90:["P90","p90-speed"],calm:["Calm","calm-percentage","%"]},aA=["min","avg","max","p90","calm"];function ai(r){let e=(Array.isArray(r?.stats_items)&&r.stats_items.length?r.stats_items:aA).filter(o=>_t[o]).map(o=>_t[o][0]+" ${"+_t[o][1]+"}"+(_t[o][2]||"")).join(" \xB7 ");return{text:r?.stats_weight&&r.stats_weight!=="400"?`<span style="font-weight:${Number(r.stats_weight)}">${e}</span>`:e,text_size:Number(r?.stats_size)||13,text_color:r?.stats_color||"var(--secondary-text-color)"}}function nA(r,t,e,i){let o=a=>a!=null&&a!==""&&a!=="preset";if(o(t.wr_bars)&&(t.wr_bars==="hidden"?r.hide_windspeed_bar=!0:(delete r.hide_windspeed_bar,r.windspeed_bar_location=t.wr_bars)),o(t.wr_corners)&&(t.wr_corners==="off"?delete r.corner_info:r.corner_info=H4.corners.build("",e,i).corner_info),o(t.wr_stats))delete r.text_blocks,t.wr_stats!=="off"&&(r.text_blocks={[t.wr_stats]:ai(t)});else if(r.text_blocks)for(let a of Object.keys(r.text_blocks))r.text_blocks[a]=ai(t);if(o(t.wr_buttons)&&(t.wr_buttons==="none"?delete r.buttons_config:r.buttons_config={...H4[t.wr_buttons].build().buttons_config}),r.buttons_config&&o(t.wr_buttons_position)&&(r.buttons_config={...r.buttons_config,location:t.wr_buttons_position}),o(t.wr_period)){let a=r.buttons_config?.buttons,n=a?.filter(H=>H.type==="period_selector");if(n?.length){let H=n.find(V=>V.period_back===t.wr_period);H?r.buttons_config={...r.buttons_config,buttons:a.map(V=>V.type==="period_selector"?{...V,active:V===H}:V)}:r.data_period={period_back:t.wr_period}}else r.data_period={period_back:t.wr_period}}if(o(t.wr_beaufort)){let a=t.wr_beaufort==="on";r.windspeed_entities=r.windspeed_entities.map(n=>({...n,speed_range_beaufort:a,...a?{current_speed_arrow:!0}:{}}))}return t.wr_arrow===!1?r.current_direction={show_arrow:!1}:r.current_direction={...r.current_direction||{},show_arrow:!0,...t.wr_arrow_size!=null?{arrow_size:Number(t.wr_arrow_size)}:{}},t.wr_arrow_color&&(r.colors={...r.colors||{},rose_current_direction_arrow:t.wr_arrow_color}),(o(t.wr_speed_arrows)||t.wr_speed_arrow_size!=null)&&(r.windspeed_entities=r.windspeed_entities.map(a=>({...a,...o(t.wr_speed_arrows)?{current_speed_arrow:t.wr_speed_arrows==="on"}:{},...t.wr_speed_arrow_size!=null?{current_speed_arrow_size:Number(t.wr_speed_arrow_size)}:{}}))),r}function mH(r,t,e){let i=oA[e]||"mph",o=H4[r?.windrose_preset]||H4.standard,{_speed:a,_gust:n,...H}=o.build(i,t,e),V={speed_unit:"auto",output_speed_unit:i,output_speed_unit_label:e||void 0,speed_range_beaufort:!1,windspeed_bar_full:!1},c={type:`custom:${P9}`,refresh_interval:300,wind_direction_entity:{entity:t.dir},windspeed_entities:[{entity:t.speed,name:"Speed",...V,...a||{}},...t.gust?[{entity:t.gust,name:"Gust",...V,use_for_windrose:!1,...n||{}}]:[]],current_direction:{show_arrow:!0},matching_strategy:{name:"full-time"},...H};nA(c,r||{},t,e);let d=E2(c,r?.windrose||{});return d.buttons_config?.buttons?.some(m=>m.type==="period_selector"&&m.active)&&delete d.data_period,d}var T1=r=>r.map(([t,e])=>({value:t,label:e})),bt=["6h","12h","24h","48h","7d","30d","90d","365d"],fH=T1([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),sA=T1([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),HA=Object.entries(q1).map(([r,t])=>({value:r,label:t.label})),D5=r=>({entity:r?{domain:r}:{}}),G0={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[{name:"auto_scale",selector:{boolean:{}},default:!1,helper:"Size the temperature, condition, icon, clock, date and metric chips from the panel's size, over the sizes set below. Sizes left at Auto below follow the panel either way."},{name:"scale",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Auto scaling: make the auto sizes bigger or smaller."}]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:D5(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:D5("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Button Menu",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:HA}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:D5()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"CSS color, e.g. #ef5350. Blank uses the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:T1([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above."},{name:"ranges",selector:{select:{multiple:!0,options:bt.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:bt.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:bt.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:bt.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:T1([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,groups:[["View",[{name:"view",selector:{select:{options:T1([["compass","Compass"],["rose","Wind rose"]])}}},{name:"show_view_buttons",selector:{boolean:{}},default:!0,helper:"Compass / Rose buttons in the header."}]],["Readings (speed, gust, direction)",[{name:"readings_position",selector:{select:{options:T1([["auto","Automatic \u2014 beside the dial; hidden with the Wind Rose Card"],["side","Beside the dial"],["above","Above"],["below","Below"],["hidden","Hidden"]])}},default:"auto"}]],["Chart",[{name:"show_chart",label:"Show the chart",selector:{boolean:{}},default:!0,helper:"24 h speed and gust chart."},{name:"chart_position",selector:{select:{options:T1([["below","Below"],["above","Above"]])}},default:"below"},{name:"windrose_chart",selector:{boolean:{}},default:!0,helper:"Also with the Wind Rose Card."}]],["Compass",[{name:"compass_arrow_size",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Direction pointer size."},{name:"compass_arrow_color",selector:{text:{}},helper:"Pointer color, e.g. #ff5252 (default: the wind color)."}]],["Wind rose",[{name:"rose_engine",selector:{select:{options:T1([["auto","Automatic \u2014 Wind Rose Card when installed"],["windrose","Wind Rose Card (custom:windrose-card)"],["builtin","Built-in rose"]])}},default:"auto",helper:"aukedejong's Wind Rose Card (HACS) with your station's sensors filled in, or our built-in 24 h rose."},{name:"show_legend",selector:{boolean:{}},default:!0,helper:"Built-in rose: speed colour legend."},{name:"rose_bins",selector:{object:{}},helper:"Built-in rose: speed thresholds in the sensor's unit, e.g. [1, 5, 10, 15, 25]."},{name:"windrose_preset",selector:{select:{options:Object.entries(H4).map(([r,t])=>({value:r,label:t.label}))}},default:"standard",helper:"Wind Rose Card starting layout; the settings below change parts of it."},{name:"wr_period",selector:{select:{options:T1([["preset","From the preset"],["-1h","1 hour"],["-8h","8 hours"],["-1d","24 hours"],["-7d","7 days"],["-30d","30 days"]])}},default:"preset",helper:"Period shown first."},{name:"wr_arrow",selector:{boolean:{}},default:!0,helper:"Current direction arrow."},{name:"wr_arrow_size",selector:{number:{min:10,max:120,step:5,mode:"slider"}},default:50,helper:"Direction arrow size."},{name:"wr_arrow_color",selector:{text:{}},helper:"Arrow color (default red). The Wind Rose Card uses it for the speed-bar arrows too."}]],["Wind Rose Card: speed bars",[{name:"wr_bars",selector:{select:{options:T1([["preset","From the preset"],["right","Right"],["bottom","Bottom"],["hidden","Hidden"]])}},default:"preset"},{name:"wr_beaufort",selector:{select:{options:T1([["preset","From the preset"],["on","Beaufort"],["off","Speed unit"]])}},default:"preset"},{name:"wr_speed_arrows",selector:{select:{options:T1([["preset","From the preset"],["on","Show"],["off","Hide"]])}},default:"preset",helper:"Arrow on each bar at the current speed."},{name:"wr_speed_arrow_size",selector:{number:{min:10,max:120,step:5,mode:"slider"}},default:40}]],["Wind Rose Card: corner info",[{name:"wr_corners",selector:{select:{options:T1([["preset","From the preset"],["on","Show (speed, direction, gust)"],["off","Hide"]])}},default:"preset"}]],["Wind Rose Card: statistics",[{name:"wr_stats",selector:{select:{options:T1([["preset","From the preset"],["top","Above the rose"],["bottom","Below the rose"],["off","Hide"]])}},default:"preset"},{name:"stats_items",selector:{select:{multiple:!0,options:T1([["min","Min"],["avg","Average"],["max","Max"],["median","Median"],["p90","P90 (gust-like)"],["calm","Calm %"]])}},default:["min","avg","max","p90","calm"]},{name:"stats_size",selector:{number:{min:8,max:40,mode:"box",unit_of_measurement:"px"}},default:13},{name:"stats_weight",selector:{select:{options:T1([["400","Regular"],["500","Medium"],["700","Bold"]])}},default:"400"},{name:"stats_color",selector:{text:{}},helper:"CSS color (default: secondary text)."}]],["Wind Rose Card: buttons",[{name:"wr_buttons",selector:{select:{options:T1([["preset","From the preset"],["periods","Period buttons (1 h \u2026 7 days)"],["playback","Playback (\xB112 h, play 10 days)"],["none","None"]])}},default:"preset"},{name:"wr_buttons_position",selector:{select:{options:T1([["preset","From the preset"],["top","Top"],["bottom","Bottom"]])}},default:"preset"}]],["Wind Rose Card: advanced",[{name:"windrose",selector:{object:{}},helper:"Any of the card's own options, merged last, e.g. rose_config, colors or speed_ranges."}]],["Sensors",[{name:"entities.wind_speed",selector:D5("sensor")},{name:"entities.wind_gust_speed",selector:D5("sensor")},{name:"entities.wind_bearing",selector:D5("sensor")}]]]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:sA}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:fH}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...fH]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],flexHide:["timeframe_mode","timeframe_hours","timeframe_anchor","night_moon"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:T1([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:T1([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},{name:"show_facts",selector:{boolean:{}},default:!1,helper:"Dawn, sunrise, solar noon, sunset, dusk and daylight under the tracker."}]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",label:"Altitude chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."}]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"overlay",selector:{select:{options:T1([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:T1([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:T1([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:T1([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"engine",selector:{select:{options:T1([["auto","Automatic"],["sgcc","Statistics Graph Chart Card (custom)"],["builtin","Home Assistant Statistics graph"]])}},default:"auto",helper:"Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card."},{name:"preset",selector:{select:{options:T1([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust, direction)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["air_quality","Air quality (AQI, PM2.5)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:.25,max:365,step:.25,mode:"box"}}},{name:"period",selector:{select:{options:T1([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:T1([["line","Line"],["bar","Bar"]])}},helper:"Built-in card only (the custom card sets this per series)."},{name:"stat_types",selector:{select:{multiple:!0,options:T1([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list."}]},health:{tag:"wsfc-panel-health",label:"Station health",icon:"mdi:heart-pulse",span:4,rows:0,schema:[{name:"show_devices",selector:{boolean:{}},helper:"Show device names even when there is only one."}]},pollen:{tag:"wsfc-panel-pollen",label:"Pollen",icon:"mdi:flower-pollen",span:4,rows:0,hideWhen:(r,t)=>{let e=gt(r,t);return r.hide_when_off_season===!0&&e.outOfSeason||r.hide_when_none===!0&&e.allNone},schema:[{name:"device",selector:{device:{integration:"pollenlevels"}},helper:"Pollen Levels location (default: the first one)."},{name:"view",selector:{select:{options:T1([["plants","Species (oak, juniper, ragweed \u2026)"],["types","Types (tree, grass, weed)"]])}},default:"plants"},{name:"species",selector:{text:{multiple:!0}},helper:"Species to show, in order, by Google code or name (e.g. JUNIPER, OAK, GRAMINALES). Blank shows the busiest."},{name:"max_rows",selector:{number:{min:0,max:20,mode:"box"}},default:6,helper:"Rows when no species are listed (0 = all)."},{name:"hide_off_season",selector:{boolean:{}},default:!0,helper:"Hide species that are out of season."},{name:"hide_when_off_season",selector:{boolean:{}},default:!1,helper:"Hide the whole panel when no species is in season (its panel button still opens it)."},{name:"hide_when_none",selector:{boolean:{}},default:!1,helper:"Hide the whole panel when every species is at None today (its panel button still opens it)."},{name:"show_tomorrow",selector:{boolean:{}},default:!0},{name:"show_season",selector:{boolean:{}},default:!0,helper:"12-month strip: how many of the shown species are in season each month."},{name:"hide_none",selector:{boolean:{}},default:!0,helper:"Hide species with nothing in the air today (level None)."},{name:"show_nothing",selector:{boolean:{}},default:!0,helper:'Show "In season, but nothing in the air today" in the header line when every species is at None.'},{name:"nothing_text",selector:{text:{}},helper:'Replace that text, e.g. "All clear".'},{name:"show_source",selector:{boolean:{}},default:!0,helper:"Show the data source (Google) in the header line."},{name:"source",selector:{text:{}},helper:"Replace the source text."},{name:"show_location",selector:{boolean:{}},default:!0,helper:"Show the town in the header line."},{name:"location",selector:{text:{}},helper:"Replace the town (default: your Home Assistant location name)."},{name:"seasons",selector:{object:{}},helper:"Season months per species, e.g. JUNIPER: [1, 2, 3, 4]. Default: Google's season text, else typical months."},{name:"entities",selector:{entity:{multiple:!0,domain:"sensor"}},helper:"Advanced: use these sensors instead of finding Pollen Levels automatically."}]},air_quality:{tag:"wsfc-panel-air-quality",label:"Air quality",icon:"mdi:air-filter",span:4,rows:0,schema:[{name:"layout",selector:{select:{options:T1([["scale","Scale \u2014 colour scale and rating per pollutant (like Pollen)"],["rows","Rows \u2014 bar, level and value per pollutant"],["bars","Vertical bars on the AQI scale"],["tiles","Tiles"]])}},default:"scale"},{name:"pollutants",selector:{select:{multiple:!0,options:T1([["pm2_5","PM2.5"],["pm10","PM10"],["ozone","Ozone"],["co2","CO\u2082"]])}},helper:"Default: all that are found."},{name:"extra",selector:{object:{}},helper:"More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO\u2082 have built-in thresholds."},{name:"show_aqi",selector:{boolean:{}},default:!0},{name:"show_scale",selector:{boolean:{}},helper:"Rows, bars and tiles: AQI colour scale under the number (default: on for tiles only)."},{name:"bar_height",selector:{number:{min:60,max:400,mode:"box",unit_of_measurement:"px"}},helper:"Vertical bars: height (default 140)."},{name:"show_source",selector:{boolean:{}},default:!0,helper:"Show the data source (e.g. AirNow, Boulder AIR)."},{name:"source",selector:{text:{}},helper:"Replace the source text (default: the sensor's source attribute or integration)."},{name:"show_location",selector:{boolean:{}},default:!0,helper:"Show the reporting area / town (AirNow's reporting area)."},{name:"location",selector:{text:{}},helper:"Replace the area or town text."},{name:"entities.aqi",selector:D5("sensor"),helper:"Default: the station's own sensor, else AirNow, else any outdoor AQI sensor."},{name:"entities.pm2_5",selector:D5("sensor")},{name:"entities.pm10",selector:D5("sensor")},{name:"entities.ozone",selector:D5("sensor")},{name:"entities.co2",selector:D5("sensor")}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:D5("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},chips:{tag:"wsfc-panel-chips",label:"Chips (current conditions)",icon:"mdi:format-list-bulleted-square",span:12,rows:0,flex:!0,flexPanels:["Current Weather Metrics"],schema:[]},clock:{tag:"wsfc-panel-clock",label:"Clock",icon:"mdi:clock-outline",span:4,rows:1,inBar:!1,schema:[{name:"show_time",selector:{boolean:{}},default:!0},{name:"show_seconds",selector:{boolean:{}},default:!1},{name:"time_format",selector:{select:{options:T1([["auto","Home Assistant's setting"],["12","12-hour"],["24","24-hour"]])}},default:"auto"},{name:"show_date",selector:{boolean:{}},default:!0},{name:"date_format",selector:{select:{options:T1([["long","Thursday, October 22"],["medium","Thu, Oct 22"],["short","10/22"],["weekday","Thursday"],["full","Thursday, October 22, 2026"]])}},default:"medium"},{name:"align",selector:{select:{options:T1([["center","Center"],["left","Left"],["right","Right"]])}},default:"center"},{name:"auto_size",selector:{boolean:{}},default:!0,helper:"Size the time and date to fill the panel."},{name:"scale",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Auto size: bigger or smaller."},{name:"time_size",selector:{number:{min:12,max:200,mode:"box",unit_of_measurement:"px"}},helper:"Auto size off: time size (default 48)."},{name:"date_size",selector:{number:{min:8,max:80,mode:"box",unit_of_measurement:"px"}},helper:"Auto size off: date size (default 16)."},{name:"time_weight",selector:{select:{options:T1([["300","Light"],["400","Regular"],["500","Medium"],["700","Bold"]])}},default:"300"},{name:"color",selector:{text:{}},helper:"CSS color for the time (default: the theme's text color)."},{name:"date_color",selector:{text:{}},helper:"CSS color for the date (default: secondary text)."}]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};for(let r of Object.values(G0))r.groups&&!r.schema&&(r.schema=r.groups.flatMap(([,t])=>t));var xH=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,step:.5,mode:"slider"}},helper:"Height in row units, in half steps (0 = fit content, 0.5 = half height)."},{name:"display",selector:{select:{options:T1([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless Shown is off)."},{name:"tile_background",selector:{select:{options:T1([["default","Default"],["translucent","See-through (uses Panel opacity)"],["solid","Solid"],["none","None"]])}},default:"default",helper:"This panel's background. Default: see-through with the animated background, the theme's otherwise; the button menu has none."},{name:"show",selector:{boolean:{}},default:!0,helper:"Visible when the dashboard loads."}],gH=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,step:.5,mode:"slider"}},helper:"Vertical: minimum height in row units (half steps allowed)."}],s2=r=>G0[r?.type]||null,B5=r=>Math.max(1,Math.min(12,Number(r.span??s2(r)?.span??6)));function _H(r,t){let e=s2(r)||{},i=B5(r),o=i;t==="medium"&&(o=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(o=Number(r.span_narrow??(i<=3?6:12)));let a=l5(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,o)),rows:a}}var l5=r=>Math.max(0,Number(r.rows??s2(r)?.rows??0)),H7=r=>r.in_bar??(r.display==="popup"?!0:s2(r)?.inBar??!0);var AH=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"health",show:!1},{type:"pollen",show:!1},{type:"air_quality",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],si=new Set(["sky_bar","sun","sun_moon"]);function vH(r,t){let e=[],i=r.filter(H=>H&&si.has(H.type)),o=i.find(H=>H.type==="sky_bar"),a=i.find(H=>H.type==="sun"||H.type==="sun_moon"),n=!1;for(let H of r){if(!H||!si.has(H.type)){e.push(H);continue}let{type:V,sky_bar:c,show_moon:d,...m}=H,A={...m,type:"sky_tracker"};if(V==="sky_bar"&&(A.show_arc=!1),V==="sun"&&(A.show_facts=H.show_facts!==!1),o&&a&&(H===o||H===a)){if(n)continue;n=!0;let g=H===o?a:o,{type:y,sky_bar:O,show_moon:k,...T}=g;Object.assign(A,T,m),A.flex=LA(g===o?g.flex:H.flex,g===o?H.flex:g.flex),delete A.show_arc,a.type==="sun"&&(A.show_facts=a.show_facts!==!1),A.flex||delete A.flex}e.push(A),V==="sun_moon"&&d!==!1&&e.push({type:"moon"})}if(t&&!e.some(H=>H?.type==="sky_tracker")){let H=e.findIndex(m=>m?.type==="hero"),c=e[H]?.flex?.wfc?.sun_position,d={type:"sky_tracker",span:12,rows:0,...c?{flex:{wfc:{sun_position:c}}}:{}};e.splice(H+1,0,d)}return e.map(H=>H?.type==="hero"?VA(H):H)}function VA(r){let{sky_bar:t,...e}=r;if(!e.flex?.wfc?.sun_position)return e;let{sun_position:o,...a}=e.flex.wfc,n={...e.flex,wfc:a};return Object.keys(a).length||delete n.wfc,Object.keys(n).length?e.flex=n:delete e.flex,e}function LA(r,t){if(!r&&!t)return;let e={...t?.wfc||{}};return r?.wfc?.sun_position&&(e.sun_position={...e.sun_position||{},...r.wfc.sun_position}),{...t||{},...r||{},wfc:e}}function wt(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:AH,e=t.find(a=>a?.type==="hero"),i=t.some(a=>a&&si.has(a.type))||!!e&&("sky_bar"in e||!!e.flex?.wfc?.sun_position),o=!!e&&i&&e.sky_bar!==!1&&e.flex?.wfc?.sun_position?.show!==!1&&t!==AH;return t=vH(t,o).map(a=>a?.type==="stack"?{...a,panels:vH(a.panels||[],!1)}:a),t=t.filter(a=>a&&G0[a.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(a=>a.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(a=>a.type==="hero"&&r.hero&&typeof r.hero=="object"&&!a.flex?{...a,flex:r.hero}:a)}var Hi=new Map;function St(r,t,e,i){if(!r?.connection||!t)return()=>{};let o=`${t}|${e}`,a=Hi.get(o);return a||(a={listeners:new Set,data:null,unsub:null},Hi.set(o,a),a.unsub=r.connection.subscribeMessage(n=>{a.data=n?.forecast||[],a.listeners.forEach(H=>H(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(n=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,n),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(Hi.delete(o),Promise.resolve(a.unsub).then(n=>typeof n=="function"&&n()).catch(()=>{}))}}function bH(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(o=>new Date(o.datetime).toDateString()===i)||r[t]||null}var Vi="wsfc-flex-core",wH="wsfc-flex-core-editor";customElements.get(Vi)||customElements.define(Vi,u2);{let r=C0.prototype,t=r._wfcWeatherSourcesPanel,e=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":t.call(this)},r.render=function(){return this.wsfcMode!=="sources"?e.call(this):!this.hass||!this._config?"":x`${this._wfcEditorStyle()}${t.call(this)}`},r.updated=function(o){i?.call(this,o);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(n=>{let H=n.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();n.hidden=!!H&&!a.includes(H)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let n=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");n&&(n.open=!0,this.__wsfcOpened=!0)}}}var SH=u2.__wfcBuild,yH=r=>u2.__wfcResolve(r);function lA(r){return{...r,wfc:yH(r)}}function ZH(r,t){let{entity:e,metric_sources:i,type:o,...a}={...r,wfc:yH(r)},{entity:n,metric_sources:H,...V}=lA(t);return Ci(a,V)||{}}var yt=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(Vi)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(o){this.error=o?.message||String(o),console.error("weather-station-flex-card: invalid Weather Flex config",o,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var S3=b4(j4(),1),cA=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],MA=r=>cA.find(([t])=>r<t)[1];function kH(r,t,e=31){let i=S3.getMoonIllumination(r).phase;for(let o=1;o<=e*24;o++){let a=new Date(r.getTime()+o*36e5),n=S3.getMoonIllumination(a).phase;if(t===0?n<i:i<t&&n>=t)return a;i=n}return null}function V4(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},o=S3.getMoonIllumination(t),a=e!=null?S3.getMoonTimes(t,e,i):{};return{phase:o.phase,name:MA(o.phase),fraction:o.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:kH(t,.5),nextNew:kH(t,0)}}function Zt(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let o=S3.getTimes(t,e,i),a=o.sunset-o.sunrise;return{sunrise:o.sunrise,sunset:o.sunset,noon:o.solarNoon,dawn:o.dawn,dusk:o.dusk,daylightMs:a}}var L4=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),kt=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});var Tt={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}}};Tt.chips={wfc:{order:["details"],current:{show:!1},details:{...Tt.hero.wfc.details,items:Tt.hero.wfc.details.items.map(r=>({...r}))},hourly:{show:!1},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}};var dA={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},pA={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}};function uA(r,t,e=1){let i=Math.max(30,Math.min(120,r*.07));t>0&&(i=Math.min(i,Math.max(30,t*.36))),i*=e;let o=a=>Math.round(a);return{header_temp_size:o(i),header_state_size:o(Math.max(12,i*.33)),header_icon_size:o(i*1.3),clock:o(i*.78),date:o(Math.max(10,i*.25)),chip_scale:Math.round(Math.max(.6,Math.min(2.5,i/64*1.05))*100)/100}}var Ot;function hA(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(Ot||(Ot=new CSSStyleSheet,Ot.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,Ot],t.__wsfcFill=!0)}function $9(r,t){return{...Tt[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var OH=H1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,z5=class extends t1{constructor(){super();R(this,"type","");R(this,"defaultTitle","Weather");R(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new yt}_coreConfig(){return E2($9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return Z;let e=this._slot.update(this._coreConfig(),this.hass),i=this.titleOnlyWhenSet?!!this.config?.title:this.config?.show_title!==!1;return x`
      ${i?$1(this.config,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${e}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:Z}
      ${this.extra()}
    `}extra(){return Z}};R(z5,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),R(z5,"styles",[G1,OH]);var E9=class extends z5{constructor(){super(...arguments);R(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,o=i>=900?"large":i<560?"narrow":"normal";o!==this._size&&(this._size=o);let a=this.parentElement?.classList.contains("auto")?0:e.contentRect.height,n=`${Math.round(i/8)}:${Math.round(a/8)}`;n!==this._dimKey&&(this._dimKey=n,this._dims={w:i,h:a},this.requestUpdate())}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}get _auto(){let{w:e=0,h:i=0}=this._dims||{};return uA(e||700,i,Math.max(.3,Math.min(3,Number(this.config?.scale??100)/100)))}_coreConfig(){let e=$9("hero",this.station);if(this._size==="large"&&(e=E2(e,dA)),this._size==="narrow"&&(e=E2(e,pA)),e=E2(e,this.config?.flex||{}),this.config?.auto_scale){let i=this._auto;e=E2(e,{wfc:{current:{header_temp_size:i.header_temp_size,header_state_size:i.header_state_size,header_icon_size:i.header_icon_size,clock_font_size:0,clock_date_font_size:0},details:{chip_scale:i.chip_scale,chip_text_size:"",chip_icon_size:"",global_icon_size:Math.round(22*i.chip_scale),global_text_size:Math.round(14*i.chip_scale)}}})}return this.cardBg?e=E2(e,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}}):this.lite&&(e=E2(e,{show_condition_effects:!1})),e}updated(){hA(this._slot.el)}render(){if(!this.hass||!this.station?.entity)return Z;let e=this._auto;return x`<div class="core" style="--wfc-clock-auto:${e.clock}px;--wfc-clock-date-auto:${e.date}px">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:Z}`}};R(E9,"properties",{...z5.properties,cardBg:{attribute:!1},lite:{attribute:!1}}),R(E9,"styles",[G1,OH,H1`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var Li=class extends z5{constructor(){super(...arguments);R(this,"type","forecast");R(this,"defaultTitle","Forecast");R(this,"defaultIcon","mdi:calendar-week")}},li=class extends z5{constructor(){super(...arguments);R(this,"type","hourly");R(this,"defaultTitle","Hourly forecast");R(this,"defaultIcon","mdi:clock-outline")}},ci=class extends z5{constructor(){super(...arguments);R(this,"type","daily");R(this,"defaultTitle","Daily forecast");R(this,"defaultIcon","mdi:calendar-week")}};function di(r,t){let e=E2($9("sky_tracker",t),r?.flex||{}),i=e.wfc,o=i.sun_arc||(i.sun_arc={}),a=i.sun_position||(i.sun_position={}),n=r?.show_arc!==!1,H=r?.show_sky!==!1,V=r?.timeframe||"hours",c=Number(r?.hours??24),d=r?.anchor||"now_center";return o.timeframe_mode=V,a.timeframe_mode=V==="sunrise_sunset"?"match_arc":V,o.timeframe_hours=a.timeframe_hours=c,o.timeframe_anchor=a.timeframe_anchor=d,o.night_moon=r?.moon!==!1,r?.moon_phase===!1?o.moon_icon==="phase"&&(o.moon_icon="mdi:weather-night"):o.moon_icon="phase",n?(i.order=["sun_arc"],o.show=!0,o.baseline_mode=H?"sky":"line",a.show=!1):(i.order=["sun_position"],o.show=!1,a.show=H),e}var Mi=class extends z5{constructor(){super(...arguments);R(this,"type","chips");R(this,"defaultTitle","Current conditions");R(this,"defaultIcon","mdi:format-list-bulleted-square");R(this,"titleOnlyWhenSet",!0)}},Pt=class extends z5{constructor(){super(...arguments);R(this,"type","sky_tracker");R(this,"defaultTitle","Sky Tracker");R(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return di(this.config,this.station)}render(){if(!this.hass||!this.station?.entity)return Z;let e=this.config||{};return e.show_arc===!1&&e.show_sky===!1?x`${$1(e,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`:x`${e.title||e.show_title?$1(e,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:Z}
      ${e.show_facts?this._facts():Z}`}_facts(){let e=Zt(this.hass);if(!e)return Z;let i=L4(this.hass),o=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`,a=[["Dawn",i.format(e.dawn)],["Sunrise",i.format(e.sunrise)],["Solar noon",i.format(e.noon)],["Sunset",i.format(e.sunset)],["Dusk",i.format(e.dusk)],["Daylight",o(e.daylightMs)]];return x`<div class="facts">${a.map(([n,H])=>x`<div><span>${n}</span>${H}</div>`)}</div>`}};R(Pt,"styles",[...z5.styles,H1`
      .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; font-size: 13px; }
      .facts div span { display: block; font-size: 11px; color: var(--wsfc-muted); }
    `]);customElements.get("wsfc-panel-chips")||customElements.define("wsfc-panel-chips",Mi);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",E9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",Li);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",li);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",ci);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",Pt);P2.register(W0,A5,J5,f3,N0,t0);var Et=[Ts,Es];function y3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return y3("#"+i[1].split("").map(o=>o+o).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let o=parseInt(i[1],16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[o,a,n]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${o},${a},${n},${t})`}return e}function mA(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return o=>i.format(new Date(o))}function fA(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function $t(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",o="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:fA(t,e)}}},scales:{x:{type:"linear",grid:{color:o},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:mA(t,e)}}},_text:i,_grid:o}}var TH=new Map;async function PH(r,t){let e=TH.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return TH.set(r,{at:Date.now(),data:i}),i}var AA=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function l4(r,t,e){return $H(r,t,Date.now()-e*36e5,`h${e}`)}function EH(r,t){let e=new Date;return e.setHours(0,0,0,0),$H(r,t,e.getTime(),`d${e.toDateString()}`)}function $H(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(e);return PH(`h|${i}|${o.join(",")}`,async()=>{let H=await r.callWS({type:"history/history_during_period",start_time:n.toISOString(),end_time:a.toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),V={};for(let c of o)V[c]=(H?.[c]||[]).map(d=>({t:Math.round((d.lu??d.lc??0)*1e3),v:AA(d.s)}));return V})}function FH(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(a.getTime()-e*864e5);return PH(`s|${e}|${i}|${o.join(",")}`,async()=>{let H=await r.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:a.toISOString(),statistic_ids:o,period:i,types:["mean","min","max","change"]}),V={};for(let c of o)V[c]=(H?.[c]||[]).map(d=>({t:typeof d.start=="number"?d.start:Date.parse(d.start),mean:d.mean??null,min:d.min??null,max:d.max??null,change:d.change??null}));return V})}function V7(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let o=0;o<r.length;o+=e){let a=r.slice(o,o+e),n=a.map(H=>H.v).filter(H=>H!=null);i.push({t:a[Math.floor(a.length/2)].t,v:n.length?n.reduce((H,V)=>H+V,0)/n.length:null})}return i}function Ft(r,t){let e=new Map,i=null;for(let o of r){if(o.v==null){i=null;continue}if(i!=null){let a=o.v>=i?o.v-i:o.v,n=Math.floor(o.t/t)*t;e.set(n,(e.get(n)||0)+a)}i=o.v}return[...e].map(([o,a])=>({t:o+t/2,v:Math.round(a*1e3)/1e3}))}function Rt(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let o=Math.floor(i.t/t)*t,a=e.get(o)||[0,0];a[0]+=i.v,a[1]++,e.set(o,a)}return[...e].map(([i,[o,a]])=>({t:i+t/2,v:o/a}))}var RH={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},DH=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],L7=class extends t1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let o=q1[e.metric]||{},a=x5(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),n=a&&this.hass.states[a];return{...e,entity:a,label:e.label||o.label||n?.attributes?.friendly_name||a||"\u2014",color:this.config?.colors?.[e.metric]||e.color||o.color||DH[i%DH.length],axis:e.axis==="right"?"right":"left",style:e.style||(o.chart==="bar"?"bar":"line"),cumulative:e.cumulative??o.cumulative??!1,unit:n?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>RH[e])}render(){if(!this.hass)return Z;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),o=t.length>1?y7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):Z;return x`
      ${$1(this.config,this.defaultIcon,this.defaultTitle,o)}
      ${this.config?.show_readings===!1?Z:x`<div class="readings">
            ${i.map(a=>{let n=N2(this.hass,a.entity);return Z7(this,{label:a.label,value:n?.value,unit:n?.unit,digits:a4(a.metric,n?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?x`<div class="note">${this._error}</div>`:Z}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(o=>[o.entity,o.style,o.axis,o.color,o.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(o=>this._error=`History unavailable: ${o?.message||o}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=RH[t]||24,o=e.map(n=>n.entity).filter(Boolean),a=new Map;if(i<=48){let n=await l4(this.hass,o,i);for(let H of e){let V=n[H.entity]||[],c=i<=12?15*6e4:36e5,d=H.style==="bar"?H.cumulative?Ft(V,c):Rt(V,c):V7(V);a.set(H,{line:d.map(m=>({x:m.t,y:m.v}))})}}else{let n=i>240?"day":"hour",H=await FH(this.hass,o,i/24,n);for(let V of e){let c=H[V.entity]||[],d=V.style==="bar"&&V.cumulative?"change":"mean";a.set(V,{line:c.map(m=>({x:m.t,y:m[d]})),min:c.map(m=>({x:m.t,y:m.min})),max:c.map(m=>({x:m.t,y:m.max}))})}}this._error=o.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let o=this.renderRoot.querySelector("canvas");if(!o)return;let a=$t(this,t,this.hass?.locale?.language),n=e.find(d=>d.axis==="left"),H=e.find(d=>d.axis==="right"),V=(d,m)=>{let A=d?.unit==="%",g={position:m,grid:m==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:$=>`${+$.toFixed(2)}${d?.unit&&d.unit.length<=3?d.unit:""}`}};A&&Object.assign(g,{min:0,max:100}),e.filter($=>$.axis===m).every($=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test($.metric||""))&&e.some($=>$.axis===m)&&(g.min=g.min??0),e.some($=>$.axis===(m==="left"?"left":"right")&&$.style==="bar")&&(g.beginAtZero=!0);let O=this.config||{},k=O[`${m}_min`],T=O[`${m}_max`];return k!=null&&k!==""&&(g.min=Number(k)),T!=null&&T!==""&&(g.max=Number(T)),g};(n||!H)&&(a.scales.y=V(n,"left")),H&&(a.scales.y2=V(H,"right"));let c=[];e.forEach((d,m)=>{let A=i.get(d);if(!A)return;let g=d.axis==="right"?"y2":"y",y={label:d.label,data:A.line,borderColor:d.color,yAxisID:g,order:m+1};d.style==="bar"?Object.assign(y,{type:"bar",backgroundColor:y3(d.color,.6),borderWidth:0,borderRadius:2,order:50+m,barPercentage:.9,categoryPercentage:1}):d.style==="area"?Object.assign(y,{backgroundColor:y3(d.color,.13),fill:"origin",borderColor:y3(d.color,.75),borderWidth:1}):d.style==="dashed"&&Object.assign(y,{borderDash:[5,4],borderWidth:1.5}),c.push(y),(d.band??(m===0&&d.style==="line"))&&A.min&&A.max&&d.style!=="bar"&&c.push({label:`${d.label} max`,_band:!0,data:A.max,borderWidth:0,pointRadius:0,yAxisID:g,order:90,fill:"+1",backgroundColor:y3(d.color,.15)},{label:`${d.label} min`,_band:!0,data:A.min,borderWidth:0,pointRadius:0,yAxisID:g,order:91})}),a.plugins.tooltip.filter=d=>!d.dataset._band,this._chart&&this._chart.destroy(),this._chart=new P2(o,{type:"line",data:{datasets:c},options:a,plugins:Et})}};R(L7,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),R(L7,"styles",G1);var F9={temp_humidity:[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}],uv_solar:[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}],graph:[{metric:"temperature"}]},pi=class extends L7{get defaultSeries(){return F9.temp_humidity}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},ui=class extends L7{get defaultSeries(){return F9.uv_solar}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",L7);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",pi);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",ui);var BH={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},zH=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],R9=class extends t1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:ht(t,e,i,"wind_speed"),gust:ht(t,e,i,"wind_gust_speed"),dir:ht(t,e,i,"wind_bearing")}}render(){if(!this.hass)return x``;let t=this.config||{},e=this._view||t.view||"compass",i=this.station,o=this.hass,a=v5(i,o,"wind_speed"),n=v5(i,o,"wind_gust_speed"),H=v5(i,o,"wind_bearing"),V=a?.unit||n?.unit||"",c=e==="rose"&&ni(t)==="windrose",d={value:"rose",label:c||ni(t)==="windrose"?"Rose":"Rose 24h"},m=t.show_view_buttons===!1?"":y7([{value:"compass",label:"Compass"},d],e,$=>this._view=$,"Wind view"),A=t.readings_position||"auto";A==="auto"&&(A=c?"hidden":"side");let g=x`<div class="readings">
      ${Z7(this,{label:"Speed",value:a?.value,unit:V,digits:1,color:"var(--wsfc-wind)",entity:a?.entity})}
      ${Z7(this,{label:"Gust",value:n?.value,unit:n?.unit||V,digits:1,color:"var(--wsfc-gust)",entity:n?.entity})}
      ${Z7(this,{label:`From ${n4(H?.value)}`,value:H?.value,unit:"\xB0",entity:H?.entity})}
    </div>`,y=e==="rose"&&!c&&t.show_legend!==!1?this._roseLegend(V):"",O=t.chart_position==="above",k=t.show_chart===!1||c&&t.windrose_chart===!1?"":x`<div class="body ${O?"above":""}"><canvas aria-label="Wind speed and gust history"></canvas></div>`,T;if(c){let $=this._ids();$.dir&&$.speed&&(this._ensureRose(mH(t,$,V)),this._wrEl&&(this._wrEl.hass=this.hass),T=this._wrErr?x`<div class="note">${this._wrErr}</div>`:x`<div class="wr">${this._wrEl||""}</div>`)}if(!T){let $=x`<div class="dial">${e==="rose"?this._roseSvg(V):this._compassSvg(a?.value,V,H?.value)}</div>`;T=A==="side"?x`<div class="top">${$}<div class="side">${g}${y}</div></div>`:x`<div class="top center">${$}</div>${y?x`<div class="side">${y}</div>`:""}`}return x`
      ${$1(t,"mdi:weather-windy","Wind",m)}
      ${O?k:""}
      ${A==="above"?g:""}
      ${T}
      ${A==="below"||A==="side"&&c?g:""}
      ${O?"":k}
      ${this._error?x`<div class="note">${this._error}</div>`:""}
    `}connectedCallback(){super.connectedCallback(),customElements.get(P9)||customElements.whenDefined(P9).then(()=>this.requestUpdate())}async _ensureRose(t){let e=JSON.stringify(t);if(e!==this._wrJson){this._wrJson=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._wrJson!==e)return;this._wrEl=i.createCardElement(t),this._wrEl.hass=this.hass,this._wrErr=void 0,this.requestUpdate()}catch(i){this._wrErr=`Wind Rose Card failed to load: ${i?.message||i}`,this.requestUpdate()}}}_compassSvg(t,e,i){let o=[];for(let H=0;H<72;H++){let V=H*5*Math.PI/180,c=H%18===0,d=H%6===0,m=c?78:d?82:85;o.push(w1`<line class="tick" x1=${100+Math.sin(V)*m} y1=${100-Math.cos(V)*m} x2=${100+Math.sin(V)*88} y2=${100-Math.cos(V)*88} stroke-width=${c?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([H,V])=>w1`<text class="lbl ${H==="N"?"n":""}" x=${100+Math.sin(V*Math.PI/180)*66} y=${100-Math.cos(V*Math.PI/180)*66}>${H}</text>`),n=Number.isFinite(i)?i:null;return w1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${n4(n)} at ${z1(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${o}${a}
      ${n==null?"":w1`<g class="ptr" style=${`transform: rotate(${n}deg); transform-origin: 100px 100px;${this.config?.compass_arrow_color?`fill:${this.config.compass_arrow_color};`:""}`}>
        <g style=${`transform: scale(${Math.max(.5,Math.min(2,Number(this.config?.compass_arrow_size??100)/100))}); transform-origin: 100px 10px`}>
          <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
        </g>
      </g>`}
      <text class="spd" x="100" y="104">${z1(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||BH[t]||BH.mph}_roseLegend(t){let e=this._bins(t),i=e.map((o,a)=>a<e.length-1?`${o}\u2013${e[a+1]}`:`${o}+`);return x`<div class="legend">${i.map((o,a)=>x`<span><i style="background:${zH[a+1]}"></i>${o}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return w1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(V=>V.reduce((c,d)=>c+d,0)),1e-4),o=84,a=[];e.sectors.forEach((V,c)=>{let d=0;V.forEach((m,A)=>{if(!m)return;let g=d+m;a.push(w1`<path d=${vA(100,100,d/i*o,g/i*o,c*22.5-10,c*22.5+10)} fill=${zH[A]} opacity="0.9"></path>`),d=g})});let n=[.25,.5,.75,1].map(V=>w1`<circle class="ring" cx="100" cy="100" r=${o*V} stroke-dasharray="2 3"></circle>`),H=[["N",0],["E",90],["S",180],["W",270]].map(([V,c])=>w1`<text class="lbl ${V==="N"?"n":""}" x=${100+Math.sin(c*Math.PI/180)*95} y=${100-Math.cos(c*Math.PI/180)*95}>${V}</text>`);return w1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${n}${a}${H}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(i=>this._error=`History unavailable: ${i?.message||i}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await l4(this.hass,[t.speed,t.gust,t.dir],24),i=v5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=xA(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:V7(e[t.speed]||[]).map(o=>({x:o.t,y:o.v})),gust:V7(e[t.gust]||[]).map(o=>({x:o.t,y:o.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),o=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",n=$t(this,24,this.hass?.locale?.language);n.scales.y={min:0,grid:{color:n._grid},ticks:{color:n._text,callback:V=>`${V} ${t.unit}`,maxTicksLimit:4}};let H=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:o,backgroundColor:y3(o,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new P2(e,{type:"line",data:{datasets:H},options:n,plugins:Et})}};R(R9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),R(R9,"styles",[G1,H1`
      .top { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
      .top.center { justify-content: center; }
      /* Above the dial the chart is a strip, so the dial keeps its room. */
      .body.above { flex: 0 0 auto; height: 120px; min-height: 0; margin: 0 0 8px; }
      .top.center .dial { width: min(220px, 70%); }
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
      .wr { min-height: 200px; }
      .wr > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; display: block; }
    `]);function vA(r,t,e,i,o,a){let n=(O,k)=>[r+Math.sin(k*Math.PI/180)*O,t-Math.cos(k*Math.PI/180)*O],[H,V]=n(i,o),[c,d]=n(i,a),[m,A]=n(e,a),[g,y]=n(e,o);return`M${H} ${V} A${i} ${i} 0 0 1 ${c} ${d} L${m} ${A} A${e} ${e} 0 0 0 ${g} ${y} Z`}function xA(r,t,e){let i=r.filter(c=>c.v!=null),o=t.filter(c=>c.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),n=0,H=0,V=0;for(let c=0;c<i.length;c++){let d=i[c].t,m=Math.min((i[c+1]?.t??Date.now())-d,30*6e4);if(m<=0)continue;for(;V+1<o.length&&o[V+1].t<=d;)V++;let A=o[V]?.t<=d?o[V].v:o[0]?.v??0;if(n+=m,A<e[0]){H+=m;continue}let g=e.findIndex(O=>A<O);g===-1&&(g=e.length);let y=Math.round((i[c].v%360+360)%360/22.5)%16;a[y][g]+=m}return n?{sectors:a.map(c=>c.map(d=>d/n)),calm:H/n}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",R9);var IH=`/* required styles */\r
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
`;var _A="https://api.rainviewer.com/public/weather-maps.json",bA=7,wA=600,SA=1800,yA=5*6e4,l7=null,ZA=async()=>l7||(l7=(await Promise.resolve().then(()=>b4(WH(),1))).default),Bt="https://server.arcgisonline.com/ArcGIS/rest/services",hi="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",UH={gray:r=>[`${Bt}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,hi,16],streets:()=>[`${Bt}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,hi,19],topo:()=>[`${Bt}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,hi,19],imagery:()=>[`${Bt}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},kA={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},D9=class extends t1{constructor(){super();R(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],o=this._overlay??this.config?.owm_default??"none";if(this.lite)return x`${$1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map")}${G6(this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar loop":"Map")}`;let a=x`<span class="ctl">
      ${this._radarOn?x`
        ${this._error?x`<span class="err" title=${this._error}>Radar unavailable</span>`:x`<span class="time" aria-live="off">${this._frameLabel||""}</span>`}
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"} title=${this._playing?"Pause":"Play"}>
          <ha-icon icon=${this._playing?"mdi:pause":"mdi:play"}></ha-icon>
        </button>`:""}
      ${e?y7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(n=>({value:n,label:`${this._radarOn?"+ ":""}${kA[n]||n}`}))],o,n=>this._setOverlay(n),"Map overlay"):""}
    </span>`;return x`
      ${$1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",a)}
      <div class="map"><div id="map"></div></div>
    `}firstUpdated(){this.lite||this._initMap()}async _initMap(){await ZA();let e=this.renderRoot.getElementById("map");if(!e||this._map||this.lite)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,o=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=l7.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,o],this.config?.zoom??7),this._base=null,this._applyBase(),l7.circleMarker([i,o],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),yA)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("lite")&&e.get("lite")!==void 0&&(this.lite?this._teardown():this._map||this._initMap()),e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),this._teardown()}_teardown(){clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null,this._frames=[],this._base=null,this._owm=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&!this.lite&&this._initMap()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,o,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(UH[e.base_map]||UH.gray)(this._dark);this._base=l7.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:o}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(_A);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),o=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!o.length||!this._map)return;let a=new Map(this._frames.map(n=>[n.path,n]));this._frames=o.map(n=>{let H=a.get(n.path);if(H)return a.delete(n.path),H;let V=l7.tileLayer(`${i.host}${n.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:bA,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...n,layer:V,nowcast:(i.radar?.nowcast||[]).includes(n)}}),a.forEach(n=>this._map.removeLayer(n.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,n)=>a.layer.setOpacity(n===e?i:0));let o=this._frames[e];if(o){let a=new Date(o.time*1e3),n=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=o.nowcast?`${n} (forecast)`:n}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?SA:wA)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=l7.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};R(D9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),R(D9,"styles",[G1,j6,k0(IH),H1`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .ctl { display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
      .ctl button.play { display: inline-grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 50%; cursor: pointer;
        background: var(--primary-color); color: var(--text-primary-color, #fff); }
      .ctl button.play ha-icon { --mdc-icon-size: 18px; }
      .ctl button.play:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; white-space: nowrap; }
      .err { color: var(--warning-color, #ffa600); font-size: 12px; white-space: nowrap; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",D9);function z9(r){let i=r<.5,o=Math.cos(r*2*Math.PI),a=Math.abs(o)*24,n=i?1:0,H=`M26 2 A24 24 0 0 ${n} 26 50 A${a} 24 0 0 ${o>0?1-n:n} 26 2 Z`;return w1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${H} fill="#e9e6d6"></path>
  </svg>`}var B9=class extends t1{render(){if(!this.hass)return Z;let t=V4(this.hass),e=o=>o?L4(this.hass).format(o):"\u2014",i=kt(this.hass);return x`${$1(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${z9(t.phase)}</div>
        <div class="facts">
          <span class="name">${t.name}</span>
          <span>Illumination</span><span>${Math.round(t.fraction*100)}%</span>
          <span>Moonrise</span><span>${t.alwaysUp?"up all day":t.alwaysDown?"down all day":e(t.rise)}</span>
          <span>Moonset</span><span>${e(t.set)}</span>
          ${t.nextFull?x`<span>Next full</span><span>${i.format(t.nextFull)}</span>`:Z}
          ${t.nextNew?x`<span>Next new</span><span>${i.format(t.nextNew)}</span>`:Z}
        </div>
      </div>`}};R(B9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),R(B9,"styles",[G1,H1`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",B9);var OA=5*6e4,I9=class extends t1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return x5(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return Z;let t=q1[this._metric]||{},e=this._entity,i=N2(this.hass,e),o=this.config?.unit??i?.unit??"",a=a4(this._metric,o,this.config?.digits),n=this.config?.color||t.color||"var(--primary-color)",H=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?x`
      <div class="top" style=${`--m-color:${n}`} @click=${()=>C2(this,e)}>
        <ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>
        <span class="name">${H}</span>
        ${this.config?.show_minmax===!1||!this._today?Z:x`<span class="mm"><span class="lo">Min ${z1(this._today.min,a)}</span><br /><span class="hi">Max ${z1(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>C2(this,e)}>
        <div class="val">${typeof i?.value=="number"?z1(i.value,a):i?.value??"\u2014"}<small>${o}</small></div>
        <div class="cap">${this._caption(i,o)}</div>
      </div>
      ${this.config?.chart==="none"?Z:x`<div class="spark" @click=${()=>C2(this,e)}>${this._spark(n)}</div>`}
    `:x`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=q1[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?dH(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return Z;let i=200,o=40,a=e.map(F=>F.v).filter(F=>F!=null);if(!a.length)return Z;let n=Date.now()-(this.config?.hours||24)*36e5,H=Date.now(),V=F=>(F-n)/(H-n)*i,c=(this.config?.chart||q1[this._metric]?.chart)==="bar",d=Math.min(...a),m=Math.max(...a);c&&(d=0),m-d<1e-9&&(m+=1,d=c?0:d-1);let A=F=>o-(F-d)/(m-d)*o;if(c){let F=Math.max(2,i/(this.config?.hours||24)*.7);return w1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(K=>K.v>0?w1`<rect x=${V(K.t)-F/2} y=${A(K.v)} width=${F} height=${o-A(K.v)} rx="1" fill=${t}></rect>`:Z)}
        <line x1="0" x2=${i} y1=${o} y2=${o} stroke=${t} stroke-opacity=".35"></line></svg>`}let g="",y=!1;for(let F of e){if(F.v==null){y=!1;continue}g+=`${y?"L":"M"}${V(F.t).toFixed(1)} ${A(F.v).toFixed(1)}`,y=!0}let O=e.find(F=>F.v!=null),k=[...e].reverse().find(F=>F.v!=null),T=`${g}L${V(k.t).toFixed(1)} ${o}L${V(O.t).toFixed(1)} ${o}Z`,$=`g${Math.random().toString(36).slice(2,8)}`;return w1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${$} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${T} fill=${`url(#${$})`}></path>
      <path d=${g} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<OA||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,o]=await Promise.all([l4(this.hass,[t],e),EH(this.hass,[t])]),a=i[t]||[],n=(this.config?.chart||q1[this._metric]?.chart)==="bar",H=this.config?.cumulative??q1[this._metric]?.cumulative??!1;this._series=n?H?Ft(a,36e5):Rt(a,36e5):V7(a,160);let V=(o[t]||[]).map(c=>c.v).filter(c=>c!=null);if(this._today=V.length?{min:Math.min(...V),max:Math.max(...V)}:null,q1[this._metric]?.trend){let c=Date.now()-108e5,d=[...a].reverse().find(A=>A.t<=c&&A.v!=null),m=[...a].reverse().find(A=>A.v!=null);if(d&&m){let A=m.v-d.v,g=pH(N2(this.hass,t)?.unit||"");this._trend=A>g?"Rising":A<-g?"Falling":"Steady"}}}};R(I9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),R(I9,"styles",[G1,H1`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",I9);var TA=H1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,jH=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),N9=class extends t1{render(){if(!this.hass)return Z;let e=this.hass.states[this.station?.entity]?.state;return x`
      ${$1(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?jH(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):Z}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?Z:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],o=v5(t,e,"temperature");o&&i.push(`${z1(o.value,1)}${o.unit}`);let a=v5(t,e,"apparent_temperature");a&&o&&Math.abs(a.value-o.value)>=2&&i.push(`feels like ${z1(a.value,0)}${a.unit}`);let n=v5(t,e,"wind_speed"),H=v5(t,e,"wind_bearing"),V=v5(t,e,"wind_gust_speed");n&&(n.value<1?i.push("calm"):i.push(`wind ${H?`from the ${n4(H.value)} `:""}${z1(n.value,0)} ${n.unit}${V&&V.value>n.value*1.3?`, gusting ${z1(V.value,0)}`:""}`));let c=v5(t,e,"precipitation"),d=N2(e,x5("rain_today",t,e));c&&c.value>0?i.push(`raining ${z1(c.value,2)} ${c.unit}`):d&&d.value>0?i.push(`${z1(d.value,2)} ${d.unit} of rain today`):(c||d)&&i.push("dry");let m=v5(t,e,"humidity");if(m&&i.push(`humidity ${z1(m.value,0)}%`),!i.length)return"Waiting for station data.";let A=i.join(", ");return A[0].toUpperCase()+A.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return Z;let i=e.attributes||{},o=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return x`<div class="text" @click=${()=>C2(this,t)}>${o}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return Z;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?Z:i.slice(0,3).map(o=>{let a=String(o.Severity||o.severity||"").toLowerCase();return x`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>C2(this,t)}>
        <b>${o.Event||o.event||o.title||"Weather alert"}</b>${o.Headline||o.headline||""}
      </div>`})}_astro(){let t=L4(this.hass),e=kt(this.hass),i=Zt(this.hass),o=V4(this.hass),a=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`;return x`<div class="astro">
      ${this.config?.show_sun===!1||!i?Z:x`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?Z:x`<div><h4>${z9(o.phase)}${o.name}</h4>
            <p>${Math.round(o.fraction*100)}% illuminated<br />
            ${o.nextFull?x`Full ${e.format(o.nextFull)}`:""}${o.nextNew?x` · New ${e.format(o.nextNew)}`:""}</p></div>`}
    </div>`}};R(N9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),R(N9,"styles",[G1,H1`
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
    `]);var W9=class extends t1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=St(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return Z;let t=Number(this.config?.day_offset??1),e=bH(this._daily,t),i=this.config?.entity||this.station?.entity,o=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let n=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),H=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${n}`:n);if(!e)return x`${$1(this.config,"mdi:calendar-today",H)}<div class="note">Forecast not available yet.</div>`;let V=o.temperature_unit||"",c=o.precipitation_unit||"",d=o.wind_speed_unit||"",m=[];return e.precipitation!=null&&m.push(["Precipitation",`${z1(e.precipitation,c==="in"?2:1)} ${c}`]),e.precipitation_probability!=null&&m.push(["Chance of rain",`${z1(e.precipitation_probability)}%`]),e.wind_speed!=null&&m.push(["Wind",`${e.wind_bearing!=null?`${n4(Number(e.wind_bearing))} `:""}${z1(e.wind_speed)} ${d}`]),e.wind_gust_speed!=null&&m.push(["Gusts",`${z1(e.wind_gust_speed)} ${d}`]),e.humidity!=null&&m.push(["Humidity",`${z1(e.humidity)}%`]),e.uv_index!=null&&m.push(["UV index",z1(e.uv_index,1)]),x`
      ${$1(this.config,"mdi:calendar-today",H)}
      <div class="main" @click=${()=>C2(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?x`<span class="lo">${z1(e.templow)}°</span> / `:Z}<span class="hi">${z1(e.temperature)}°</span></div>
          <div class="cond">${jH(this.hass,e.condition)}${V?` \xB7 ${V}`:""}</div>
        </div>
      </div>
      <div class="rows">${m.map(([A,g])=>x`<span>${A}</span><span>${g}</span>`)}</div>
    `}};R(W9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),R(W9,"styles",[G1,TA,H1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var U9=class extends t1{render(){let t=this.config||{},e=t.show_status?VH(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return x`
      ${t.icon===""?Z:x`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      <div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?x`<div class="sub">${t.subtitle}</div>`:Z}</div>
      ${e?x`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:Z}
      <span class="grow"></span>
      ${this.bar?x`<div class="bar">${this.bar}</div>`:Z}
    `}};R(U9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),R(U9,"styles",[U6,H1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var j9=class extends t1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),x`${this.config?.title?$1(this.config,"mdi:card-outline",""):Z}
      ${this._err?x`<div class="note">${this._err}</div>`:x`<div class="host">${this._el||Z}</div>`}`):x`${$1(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};R(j9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),R(j9,"styles",[G1,H1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",N9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",W9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",U9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",j9);var G9=class extends t1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=this.config?.panels||[];if(!t.some(a=>a&&G0[a.type]))return x`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical",i=String(this.hiddenKids||"").split(","),o=e&&Number(this.config?.rows)>0;return t.map((a,n)=>{if(!a||!G0[a.type]||i[n]==="true")return Z;let H=s2(a);if(!H)return Z;let V=Number(a.grow??(e?a.rows||o?1:0:1)),c=Number(a.rows??0),d=[`--grow:${V}`,a.min_width?`--basis:${a.min_width}px`:"",e&&c?`min-height:calc(${c} * var(--wsfc-row, 110px) + ${c-1} * var(--wsfc-gap, 12px))`:""].join(";"),m=H.bare||a.type==="stack";return x`<section class="tile ${a.type} ${m?"bare":""}" style=${d}>${this._el(a,n)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,o=this._els.get(i);if(!o){o=document.createElement(s2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,o)}return o.config=t,o.station=this.station,o.lite=this.lite,o.hass=this.hass,o}};R(G9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},hiddenKids:{attribute:!1}}),R(G9,"styles",[W6,H1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",G9);var q0=b4(j4(),1);var GH=180/Math.PI,qH=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`,c7=r=>r instanceof Date&&!isNaN(r),q9=class extends t1{render(){if(!this.hass)return Z;let{latitude:t,longitude:e}=this.hass.config||{};if(t==null)return x`${$1(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,o=new Date(i);o.setHours(12,0,0,0);let a=q0.getTimes(o,t,e),n=new Date(o);n.setDate(n.getDate()-1);let H=q0.getTimes(n,t,e),V=q0.getMoonTimes(i,t,e),c=V4(this.hass,i),d=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),m=$=>c7($)?d.format($):"\u2014",A=c7(a.sunset)&&c7(a.sunrise)?a.sunset-a.sunrise:null,g=c7(H.sunset)&&c7(H.sunrise)?H.sunset-H.sunrise:null,y=A!=null&&g!=null?Math.round((A-g)/6e4):null,O=c7(a.dusk)&&c7(a.dawn)?a.dusk-a.dawn:null,k=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",V.rise,V.set,!0]],T=this.config||{};return x`
      ${$1(T,"mdi:telescope","Astronomy")}
      <div class="wrap">
        ${T.show_chart===!1?Z:x`<div class="chart">${this._chart(t,e,i)}</div>`}
        <div class="side">
          <table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${k.map(([$,F,K,G])=>x`<tr class=${G?"main":""}><td>${$}</td>
              <td>${$==="Moon"&&V.alwaysUp?"up all day":$==="Moon"&&V.alwaysDown?"down all day":m(F)}</td>
              <td>${$==="Moon"&&(V.alwaysUp||V.alwaysDown)?"":m(K)}</td></tr>`)}
          </table>
          <div class="sum">
            <div><span>Length of day</span>${qH(A)}${y!=null?x`<span class="d" style="display:inline">${y>=0?"+":"\u2212"}${Math.abs(y)}m</span>`:Z}</div>
            <div><span>Visible light</span>${qH(O)}</div>
            <div><span>Solar noon</span>${m(a.solarNoon)}</div>
            <div class="moon">${z9(c.phase)}<div><span>${c.name}</span>${Math.round(c.fraction*100)}% illuminated</div></div>
          </div>
        </div>
      </div>
    `}_chart(t,e,i){let c=new Date(i);c.setHours(0,0,0,0);let d=96,m=864e5/d,A=X=>70-X/90*58,g=X=>{let e1="";for(let o1=0;o1<=d;o1++){let h1=new Date(c.getTime()+o1*m);e1+=`${o1?"L":"M"}${(o1/d*300).toFixed(1)} ${A(X(h1)).toFixed(1)}`}return e1},y=X=>q0.getPosition(X,t,e).altitude*GH,O=X=>q0.getMoonPosition(X,t,e).altitude*GH,k=(i-c)/864e5*300,T=y(i),$=O(i),F=[0,6,12,18,24],K=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),G="var(--wsfc-sun-color, #fdd835)",l1="var(--wsfc-moon-color, #b0bec5)";return w1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${F.map(X=>w1`<line x1=${X/24*300} x2=${X/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,X/24*300))} y=${144} text-anchor="middle">${K.format(new Date(c.getTime()+X*36e5))}</text>`)}
      <path d=${g(O)} fill="none" stroke=${l1} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" opacity=".35"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${k} x2=${k} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${k} cy=${A($)} r="5" fill=${l1} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${k} cy=${A(T)} r="7" fill=${G} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${G}>Sun ${Math.round(T)}°</text>
      <text class="lbl" x="4" y=${32} fill=${l1}>Moon ${Math.round($)}°</text>
    </svg>`}};R(q9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),R(q9,"styles",[G1,H1`
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
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",q9);var PA={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function EA(r,t){let e=Number(r.latitude??t?.config?.latitude??39.5),i=Number(r.longitude??t?.config?.longitude??-98.35),o=t?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(o?"in":"mm"),metricTemp:r.temp_unit||(o?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(o?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:e.toFixed(3),lon:i.toFixed(3),detailLat:e.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var Y9=class extends t1{render(){if(!this.hass)return Z;let t=this.config||{},e=EA(t,this.hass);e!==this._url&&(this._url=e);let i=t.show_title===!1?Z:$1(t,"mdi:weather-windy",t.title||`${PA[t.overlay||"wind"]||"Wind"} map`);return this.lite?x`${i}${G6("mdi:map-marker-radius-outline","Windy map")}`:x`${i}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`}};R(Y9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1}}),R(Y9,"styles",[G1,j6,H1`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",Y9);var Z3={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},air_quality:{title:"Air quality",icon:"mdi:air-filter",metrics:["aqi","pm2_5"],card:{days_to_show:2,period:"hour",chart_type:"line",stat_types:["mean","max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}},zt={temps:{card:{hours_to_show:36,points_per_hour:4},series:{temperature:{color:"#ff7043",fill_opacity:.25,show_extrema:"always"},apparent_temperature:{color:"#ffb74d",show_fill:!1,line_style:"dashed",line_width:1.5},dew_point:{color:"#26c6da",show_fill:!1,line_width:1.5}}},wind:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0,lower_bound_secondary:0,upper_bound_secondary:360},metrics:["wind_speed","wind_gust_speed","wind_bearing"],series:{wind_speed:{color:"#42a5f5",aggregate_func:"avg",show_fill:!1,show_extrema:"always",show_extrema_min:!1},wind_gust_speed:{color:"#ff9800",aggregate_func:"max",fill_opacity:.2,line_width:1,show_extrema:"always",show_extrema_min:!1},wind_bearing:{color:"#9e9e9e",y_axis:"secondary",show_fill:!1,line_width:1,smooth:!1,graph_type:"step",unit:"\xB0"}}},pressure_humidity:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0},series:{pressure:{color:"#42a5f5",show_fill:!1,decimals:2},humidity:{color:"#26a69a",y_axis:"secondary",fill_opacity:.2}}},solar_uv:{card:{hours_to_show:24,points_per_hour:4,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{solar_radiation:{color:"#ffd54f",fill_opacity:.3,show_extrema:"always",show_extrema_min:!1},uv_index:{color:"#ff7043",y_axis:"secondary",aggregate_func:"max",show_fill:!1,line_width:2}}},rain:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{rain_rate:{color:"#7e57c2",graph_type:"bar",aggregate_func:"max",decimals:2},rain_today:{color:"#1e88e5",y_axis:"secondary",aggregate_func:"max",fill_opacity:.2,decimals:2,smooth:!1}}},air_quality:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{aqi:{color:"#66bb6a",fill_opacity:.2,show_extrema:"always",show_extrema_min:!1,decimals:0},pm2_5:{color:"#ffb74d",y_axis:"secondary",show_fill:!1,decimals:1}}},temperature_range:{card:{hours_to_show:720,group_by:"date"},series:{temperature:{color:"#ff7043",show_range_band:!0,show_fill:!1,show_extrema:"always"}}}};function mi(r){let t=r?.engine||"auto";return t==="builtin"?"builtin":t==="sgcc"||customElements.get("statistics-graph-chart-card")?"sgcc":"builtin"}function $A(r,t,e){return mi(r)==="sgcc"?FA(r,t,e):RA(r,t,e)}function FA(r,t,e){let i=zt[r.preset]||zt.temps,o=Z3[r.preset]||Z3.temps,a=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics||o.metrics,n=Array.isArray(r.entities)&&r.entities.length?r.entities:a.map(V=>{let c=x5(V,t,e,r.entity_overrides?.[V]);if(!c)return null;let d=r.colors?.[V];return{entity:c,name:q1[V]?.label||V,...i.series?.[V]||{},...d?{color:d}:{}}}).filter(Boolean),H={type:"custom:statistics-graph-chart-card",card_header:"",card_shadow:!1,card_border:!1,card_background_color:"transparent",card_padding:0,height:"auto",show_legend:!0,...i.card,entities:n};return n.some(V=>V.y_axis==="secondary")||(delete H.show_y2_axis,delete H.lower_bound_secondary,delete H.upper_bound_secondary),r.days_to_show!=null&&(H.hours_to_show=Number(r.days_to_show)*24),r.hours_to_show!=null&&(H.hours_to_show=Number(r.hours_to_show)),E2(H,r.card||{})}function RA(r,t,e){let i=Z3[r.preset]||Z3.temps,o=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:o.map(H=>{let V=x5(H,t,e,r.entity_overrides?.[H]);return V?{entity:V,name:q1[H]?.label||H}:null}).filter(Boolean),n={type:"statistics-graph",...i.card,entities:a};for(let H of["days_to_show","period","chart_type","stat_types","hide_legend"])r[H]!=null&&(n[H]=r[H]);return E2(n,r.card||{})}var Q9=class extends t1{connectedCallback(){super.connectedCallback(),customElements.get("statistics-graph-chart-card")||customElements.whenDefined("statistics-graph-chart-card").then(()=>this.requestUpdate())}render(){if(!this.hass)return Z;let t=this.config||{},e=Z3[t.preset]||Z3.temps,i=$A(t,this.station,this.hass);return i.entities?.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),x`${t.show_title===!1?Z:$1(t,e.icon,e.title)}
      ${this._err?x`<div class="note">${this._err}</div>`:x`<div class="host">${this._el||Z}</div>`}`):x`${$1(t,e.icon,e.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};R(Q9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),R(Q9,"styles",[G1,H1`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",Q9);var DA=[["online",(r,t)=>t==="connectivity"||/\bonline\b/.test(r)],["battery",(r,t)=>t==="battery"||/batt/.test(r)],["capacitor",r=>/capacitor|cap[\s_-]?volt/.test(r)],["rssi",(r,t)=>/rssi/.test(r)||t==="signal_strength"&&/dbm/.test(r)],["signal",(r,t)=>/signal/.test(r)||t==="signal_strength"]],BA={online:"mdi:lan-connect",battery:"mdi:battery",capacitor:"mdi:flash",rssi:"mdi:wifi-strength-2",signal:"mdi:signal"},zA={online:"Online",battery:"Battery",capacitor:"Capacitor",rssi:"RSSI",signal:"Signal"};function IA(r,t){let e=t?.state,i=t?.attributes||{};if(e==null||e==="unavailable"||e==="unknown")return"bad";let o=Number(e),a=i.unit_of_measurement||"";if(r==="online")return e==="on"?"ok":"bad";if(r==="battery")return t.entity_id.startsWith("binary_sensor.")?e==="on"?"bad":"ok":a==="%"?o<15?"bad":o<30?"warn":"ok":a==="V"?o<2.3?"bad":o<2.5?"warn":"ok":!isNaN(o)&&o<=5?o<=1?"bad":o<=2?"warn":"ok":"";if(r==="capacitor")return a==="V"&&o<2.3?"warn":"ok";if(r==="rssi")return o<-90?"bad":o<-80?"warn":"ok";if(r==="signal"){if(a==="%")return o<25?"bad":o<50?"warn":"ok";if(!isNaN(o)&&o<=4)return o<=1?"bad":o<=2?"warn":"ok"}return""}function NA(r,t){let e=[];for(let i of Jr(r,t)){let o=t.devices?.[i],a=[];for(let H of C4(t,i)){let V=t.entities[H],c=t.states[H];if(!c)continue;let d=`${H} ${c.attributes?.friendly_name||""} ${c.attributes?.unit_of_measurement||""}`.toLowerCase(),m=c.attributes?.device_class,A=DA.find(([,O])=>O(d,m))?.[0];if(!A)continue;let g=c.attributes?.friendly_name||H,y=o?.name_by_user||o?.name;y&&g.startsWith(y)&&(g=g.slice(y.length).trim()||zA[A]),a.push({eid:H,kind:A,name:g,st:c,level:IA(A,c),platform:V.platform})}let n=["online","battery","capacitor","signal","rssi"];a.sort((H,V)=>n.indexOf(H.kind)-n.indexOf(V.kind)||H.name.localeCompare(V.name)),a.length&&e.push({device:o?.name_by_user||o?.name||i,model:o?.model,rows:a})}return e}var K9=class extends t1{render(){if(!this.hass)return Z;let t=this.config||{},e=NA(this.station,this.hass),i=o=>{let a=o.st,n=a.attributes?.unit_of_measurement||"";return o.kind==="online"?a.state==="on"?"Online":"Offline":a.entity_id.startsWith("binary_sensor.")?o.kind==="battery"?a.state==="on"?"Low":"OK":a.state:["unavailable","unknown"].includes(a.state)?"\u2014":`${a.state}${n?` ${n}`:""}`};return x`
      ${$1(t,"mdi:heart-pulse","Station health")}
      ${e.length?e.map(o=>x`<div class="grp">
            ${e.length>1||t.show_devices?x`<div class="dev">${o.device}${o.model?` \xB7 ${o.model}`:""}</div>`:Z}
            <div class="rows">${o.rows.map(a=>x`<div class="row ${a.level}" @click=${()=>C2(this,a.eid)} title=${a.eid}>
              <ha-icon icon=${a.kind==="battery"&&a.level==="bad"?"mdi:battery-alert":BA[a.kind]}></ha-icon>
              <div class="t"><div class="n">${a.name}</div><div class="v">${i(a)}</div></div>
            </div>`)}</div>
          </div>`):x`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `}_lastReport(){let e=["temperature","humidity","wind_speed","pressure"].map(n=>b3(this.station,this.hass,n)).filter(Boolean).map(n=>Date.parse(this.hass.states[n]?.last_updated||this.hass.states[n]?.last_changed||"")).filter(n=>!isNaN(n));if(!e.length)return Z;let i=Math.round((Date.now()-Math.max(...e))/6e4),o=i>30?"bad":i>10?"warn":"",a=i<1?"just now":i<60?`${i} min ago`:`${Math.floor(i/60)} h ${i%60} min ago`;return x`<div class="last ${o}">Last reading ${a}</div>`}};R(K9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),R(K9,"styles",[G1,H1`
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
    `]);customElements.get("wsfc-panel-health")||customElements.define("wsfc-panel-health",K9);var WA={up:"mdi:arrow-top-right",down:"mdi:arrow-bottom-right",flat:"mdi:arrow-right"},UA={up:"rising tomorrow",down:"falling tomorrow",flat:"same tomorrow"},X9=class extends t1{shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this._ids||e.entities!==this.hass.entities?!0:this._ids.some(i=>e.states[i]!==this.hass.states[i])}render(){if(!this.hass)return Z;let t=this.config||{},e=gt(t,this.hass);if(this._ids=e.entities,!e.total)return x`${$1(t,"mdi:flower-pollen","Pollen")}
        <div class="note">No pollen sensors found. Install the Pollen Levels integration from HACS (Google Pollen API — US and worldwide), or list sensors under this panel's options.</div>`;let i=[e.source,e.town,e.status].filter(Boolean);return x`
      ${$1(t,"mdi:flower-pollen","Pollen")}
      <div class="hdr">${i.join(" \xB7 ")}</div>
      <div class="rows">${e.rows.map(o=>x`
        <div class="row ${o.level}" @click=${()=>C2(this,o.entity)} role="button" tabindex="0"
          @keydown=${a=>(a.key==="Enter"||a.key===" ")&&C2(this,o.entity)}
          aria-label="${o.name}: ${xt[o.level]}${o.value!=null?`, ${o.value} of 5`:""}${o.trend?`, ${UA[o.trend]}`:""}">
          <ha-icon icon=${o.icon}></ha-icon>
          <span class="nm">${o.name}</span>
          <span class="bar"><i style="width:${o.pct}%"></i></span>
          <span class="chip">${xt[o.level]}</span>
          <span class="val">${o.value??"\u2014"}</span>
          ${t.show_tomorrow!==!1&&o.trend?x`<ha-icon class="tr ${o.trend}" icon=${WA[o.trend]} title=${`Tomorrow: ${o.tomorrow??"\u2014"}`}></ha-icon>`:x`<span></span>`}
        </div>`)}
      </div>
      ${t.show_season===!1?Z:x`<div class="slabel">Season</div><div class="strip" role="img" aria-label="Pollen season by month">
        ${e.strip.map((o,a)=>x`<span class="m ${o?`c${Math.min(o,3)}`:""} ${a+1===e.month?"now":""}"
          title="${vt[a]}: ${o} species in season"><i></i>${vt[a][0]}</span>`)}
      </div>`}
    `}};R(X9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),R(X9,"styles",[G1,H1`
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
    `]);customElements.get("wsfc-panel-pollen")||customElements.define("wsfc-panel-pollen",X9);var jA=["pm2_5","pm10","ozone","co2"],GA={pm2_5:"mdi:blur",pm10:"mdi:blur-linear",ozone:"mdi:molecule",co2:"mdi:molecule-co2"},fi=200,qA=r=>r==null?"":a0[r].short||a0[r].name,YA=["Low","Moderate","Elevated","High","Very high","Very high"],J9=[0,50,100,150,200,300,500];function QA(r,t){if(r==null)return null;let e=Math.max(0,Math.min(r,J9[t])),i=J9.findIndex((a,n)=>n>0&&e<=a)-1;i<0&&(i=t-1);let o=(e-J9[i])/(J9[i+1]-J9[i]);return(i+o)/t*100}function KA(r,t,e){let i=r||{},o=k=>i.entities?.[k]||mt(t,e,k),a=o("aqi"),n=N2(e,a),H=typeof n?.value=="number"?n.value:null,V=T9(H),c=a?e.states[a]:null,d=a&&MH(e,a),m=i.show_location===!1?null:i.location||(d?N2(e,d)?.value:null),A=Array.isArray(i.pollutants)&&i.pollutants.length?i.pollutants:jA,g=[];for(let k of A){let T=o(k),$=N2(e,T);if(!T||!$||typeof $.value!="number")continue;let F=ft(k,$.value,$.unit),K=k!=="co2";g.push({k,e:T,label:ii[k]?.label||k,icon:GA[k],value:$.value,unit:$.unit,index:F,level:T9(F),epa:K,digits:k==="ozone"&&!/ppm/i.test($.unit)?1:a4(k,$.unit)})}for(let k of Array.isArray(i.extra)?i.extra:[]){let T=typeof k=="string"?k:k?.entity,$=N2(e,T);if(!$||typeof $.value!="number")continue;let F=e.states[T],K=k.label||F?.attributes?.friendly_name||T,G=Object.entries(oi).find(([,e1])=>e1.re.test(`${T} ${K}`)),l1=Array.isArray(k.thresholds)&&k.thresholds.length?k.thresholds.map(Number):null,X=l1?ft(null,$.value,$.unit,l1):G?ft(G[0],$.value,$.unit):null;g.push({k:T,e:T,label:K,icon:k.icon||F?.attributes?.icon||"mdi:flask-outline",value:$.value,unit:$.unit,index:X,level:T9(X),epa:!1,digits:k.digits??(Math.abs($.value)<1?3:Math.abs($.value)<10?2:0)})}let y=c?.attributes?.main_pollutant||c?.attributes?.dominant_pollutant||g.filter(k=>k.epa&&k.index!=null).sort((k,T)=>T.index-k.index)[0]?.label||"",O=i.show_source===!1?"":i.source||c?.attributes?.source||(a?w3(e,a):"");return{aqiE:a,aqi:H,level:V,name:c?.attributes?.description||c?.attributes?.category||(V!=null?a0[V].name:""),area:m,source:O,main:y,time:c?.attributes?.time||null,rows:g,entities:[a,d,...g.map(k=>k.e)].filter(Boolean)}}var c4=r=>r.level==null?"No standard":r.epa?qA(r.level):YA[r.level],It=r=>r.index==null?"":r.epa?`AQI ${r.index} \u2014 ${a0[r.level].name}`:`Index ${r.index} on the AQI scale`,YH=r=>r.index==null?0:Math.min(100,r.index/fi*100),Nt=r=>x`${z1(r.value,r.digits)}<small>${r.unit}</small>`,t6=class extends t1{shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this._ids?!0:this._ids.some(i=>e.states[i]!==this.hass.states[i])}render(){if(!this.hass)return Z;let t=this.config||{},e=KA(t,this.station,this.hass);if(this._ids=e.entities,!e.aqiE&&!e.rows.length)return x`${$1(t,"mdi:air-filter","Air quality")}
        <div class="note">No air-quality sensors found. Add Home Assistant's AirNow integration (free key from airnowapi.org), an outdoor PM2.5 sensor, or set the entities under this panel's options.</div>`;let i=t.layout||"scale";return i==="scale"?x`${$1(t,"mdi:air-filter","Air quality")}${this._scaleLayout(e,t)}`:x`
      ${$1(t,"mdi:air-filter","Air quality")}
      ${e.aqiE&&t.show_aqi!==!1?this._aqi(e,t,i):Z}
      ${i==="rows"?this._rows(e):i==="bars"?this._bars(e,t):this._tiles(e)}
    `}_aqi(t,e,i){let o=t.level!=null?a0[t.level].color:"var(--wsfc-muted)",a=t.time?new Date(t.time):null,n=a&&!isNaN(a)?a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",H=["US AQI",t.area,t.source&&t.source!==t.area?t.source:"",t.main?`main pollutant ${t.main}`:"",n].filter(Boolean).join(" \xB7 "),V=t.aqi!=null?Math.min(100,Math.min(t.aqi,300)/300*100):null,c=e.show_scale??i==="tiles";return x`
      <div class="top" @click=${()=>C2(this,t.aqiE)}>
        <span class="aqi" style="color:${o}">${z1(t.aqi)}</span>
        <div><div class="cat">${t.name||"\u2014"}</div><div class="sub">${H}</div></div>
      </div>
      ${c?x`
        <div class="scale" role="img" aria-label="AQI ${z1(t.aqi)} on a 0 to 300 scale">
          ${a0.slice(0,5).map((d,m)=>x`<span style="background:${d.color};flex:${m<4?50:100}"></span>`)}
          ${V!=null?x`<i class="mark" style="left:${V}%"></i>`:Z}
        </div>
        <div class="ticks">${[0,50,100,150,200,300].map(d=>x`<span style="left:${d/300*100}%">${d===300?"300+":d}</span>`)}</div>`:Z}`}_seg(t,e,i=!1){let o=e?6:5,a=QA(t,o),n=T9(t);return x`<div class="seg ${i?"big":""}" role="img" aria-hidden="true">
      ${a0.slice(0,o).map(H=>x`<span style="background:${H.color}"></span>`)}
      ${a!=null?x`<i class="knob" style="left:${a}%;--c:${a0[n].color}"></i>`:Z}
    </div>`}_scaleLayout(t,e){let i=t.time?new Date(t.time):null,o=i&&!isNaN(i)?i.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",a=[t.source,t.area,t.name,o].filter(Boolean).join(" \xB7 ");return x`
      ${a?x`<div class="hdr">${a}</div>`:Z}
      ${t.aqiE&&e.show_aqi!==!1?x`
        <div class="shead" @click=${()=>C2(this,t.aqiE)} role="button" tabindex="0"
          @keydown=${n=>(n.key==="Enter"||n.key===" ")&&C2(this,t.aqiE)}
          aria-label="Air Quality Index ${z1(t.aqi)}, ${t.name}${t.main?`, main pollutant ${t.main}`:""}">
          <span class="t">Air Quality Index</span>
          <span class="p">${t.main?`(${t.main})`:""}</span>
          <span class="n">${z1(t.aqi)}</span>
        </div>
        ${this._seg(t.aqi,!0,!0)}`:Z}
      ${t.rows.length?x`<div class="srows">${t.rows.map(n=>x`
        <div class="srow" style=${this._color(n)} role="button" tabindex="0" @click=${()=>C2(this,n.e)}
          @keydown=${H=>(H.key==="Enter"||H.key===" ")&&C2(this,n.e)}
          title=${It(n)} aria-label="${n.label}: ${z1(n.value,n.digits)} ${n.unit}${n.level!=null?`, ${c4(n)}`:""}">
          <ha-icon icon=${n.icon}></ha-icon>
          ${n.level==null?x`<span class="nm">${n.label}</span><span class="plain">${Nt(n)}</span>`:x`<div><div class="nm">${n.label}</div><div class="nv">${z1(n.value,n.digits)} ${n.unit}</div></div>
              ${this._seg(n.index,n.epa)}
              <span class="rt">${c4(n)}</span>`}
        </div>`)}</div>`:Z}
    `}_color(t){return t.level!=null?`--c:${a0[t.level].color}`:""}_tiles(t){return t.rows.length?x`<div class="tiles">${t.rows.map(e=>x`
      <div class="tile" style=${this._color(e)} @click=${()=>C2(this,e.e)} title=${It(e)||e.e}>
        <span class="dot"></span>
        <div><div class="n">${e.label}</div><div class="v">${Nt(e)}</div></div>
      </div>`)}</div>`:Z}_rows(t){return t.rows.length?x`<div class="rows">${t.rows.map(e=>x`
      <div class="row" style=${this._color(e)} role="button" tabindex="0" @click=${()=>C2(this,e.e)}
        @keydown=${i=>(i.key==="Enter"||i.key===" ")&&C2(this,e.e)}
        aria-label="${e.label}: ${z1(e.value,e.digits)} ${e.unit}, ${c4(e)}">
        <ha-icon icon=${e.icon}></ha-icon>
        <span>${e.label}</span>
        <span class="track"><i style="width:${YH(e)}%"></i></span>
        <span class="chip ${e.level==null?"none":""}" title=${It(e)}>${c4(e)}</span>
        <span class="val">${Nt(e)}</span>
      </div>`)}</div>`:Z}_bars(t,e){if(!t.rows.length)return Z;let i=Number(e.bar_height)||140,o=[50,100,150];return x`<div class="bars" style="--n:${t.rows.length};--h:${i}px">
      <div class="axis" style="margin-top:21px">${[0,...o,200].map(a=>x`<span style="bottom:${a/fi*100}%">${a}</span>`)}</div>
      <div class="plot">${o.map(a=>x`<hr style="bottom:${a/fi*100}%" />`)}</div>
      ${t.rows.map((a,n)=>x`
        <div class="col" style="grid-row:1;grid-column:${n+2};${this._color(a)}" role="button" tabindex="0"
          @click=${()=>C2(this,a.e)} @keydown=${H=>(H.key==="Enter"||H.key===" ")&&C2(this,a.e)}
          title=${It(a)} aria-label="${a.label}: ${z1(a.value,a.digits)} ${a.unit}, ${c4(a)}">
          <span class="bv">${Nt(a)}</span>
          <span class="bt"><i style="height:${YH(a)}%"></i></span>
          <span class="bn">${a.label}</span>
          <span class="bc">${c4(a)}</span>
        </div>`)}
    </div>`}};R(t6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),R(t6,"styles",[G1,H1`
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
    `]);customElements.get("wsfc-panel-air-quality")||customElements.define("wsfc-panel-air-quality",t6);var QH={long:{weekday:"long",month:"long",day:"numeric"},medium:{weekday:"short",month:"short",day:"numeric"},short:{month:"numeric",day:"numeric"},weekday:{weekday:"long"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}};function XA(r,t){let e=r?.time_format||"auto";if(e==="12")return!0;if(e==="24")return!1;let i=t?.locale?.time_format;if(i==="12")return!0;if(i==="24")return!1}function JA(r,t,e=new Date){let i=t?.locale?.language||t?.language||void 0,o=XA(r,t),a=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",...r?.show_seconds?{second:"2-digit"}:{},...o!=null?{hour12:o}:{}}),n=new Intl.DateTimeFormat(i,QH[r?.date_format]||QH.medium);return{time:a.format(e),date:n.format(e)}}function tv(r,t,e,i,o=1){let a=Math.max(4,String(e).length),n=r*.92/(a*.56);return t>0&&(n=Math.min(n,t*.9/(i?1.55:1.1))),n=Math.max(14,n*o),{time:Math.round(n),date:Math.round(Math.max(10,n*.3))}}var e6=class extends t1{constructor(){super(),this._now=new Date}connectedCallback(){super.connectedCallback(),this._tick(),this._ro=new ResizeObserver(([t])=>{let{width:e,height:i}=t.contentRect,o=`${Math.round(e)}:${Math.round(i)}`;o!==this._dimKey&&(this._dimKey=o,this._dims={w:e,h:i})}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),this._ro?.disconnect()}_tick(){clearTimeout(this._timer),this._now=new Date;let t=this.config?.show_seconds?1e3-this._now.getMilliseconds():6e4-(this._now.getSeconds()*1e3+this._now.getMilliseconds());this._timer=setTimeout(()=>this._tick(),t+20)}updated(t){t.has("config")&&this._tick()}shouldUpdate(t){return!(t.size===1&&t.has("hass")&&t.get("hass"))}render(){if(!this.hass)return Z;let t=this.config||{},e=t.show_time!==!1,i=t.show_date!==!1,{time:o,date:a}=JA(t,this.hass,this._now),{w:n=300,h:H=0}=this._dims||{},V=t.auto_size!==!1,c=V?tv(n,H,e?o:a,e&&i,Number(t.scale??100)/100):{time:Number(t.time_size)||48,date:Number(t.date_size)||16},d=e?c.date:V?c.time*.6:c.date;return x`<div class="clock ${t.align||"center"}" role="timer" aria-live="off" aria-label=${[e?o:"",i?a:""].filter(Boolean).join(", ")}>
      ${e?x`<span class="time" style="font-size:${c.time}px;font-weight:${t.time_weight||300};${t.color?`color:${t.color};`:""}">${o}</span>`:Z}
      ${i?x`<span class="date" style="font-size:${Math.round(d)}px;${t.date_color?`color:${t.date_color};`:""}">${a}</span>`:Z}
    </div>`}};R(e6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_now:{state:!0},_dims:{state:!0}}),R(e6,"styles",[G1,H1`
      /* The text is laid over the panel's box, so its size never feeds back into the box it's measured from. */
      :host { position: relative; min-height: 60px; flex: 1 1 auto; }
      .clock { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; line-height: 1.05; font-variant-numeric: tabular-nums; overflow: hidden; }
      .time { white-space: nowrap; letter-spacing: -0.01em; }
      .date { color: var(--secondary-text-color); white-space: nowrap; margin-top: 0.15em; }
      .left { align-items: flex-start; text-align: left; }
      .center { align-items: center; text-align: center; }
      .right { align-items: flex-end; text-align: right; }
    `]);customElements.get("wsfc-panel-clock")||customElements.define("wsfc-panel-clock",e6);var Ai=30,r6=4,KH=10,vi=r=>r.title?r.title:r.type==="metric"?q1[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(s2(r)?.label||r.type).replace(/ \(.*\)$/,""),XH=r=>r.icon||r.type==="metric"&&q1[r.metric]?.icon||s2(r)?.icon||"mdi:square-outline",i6=class extends t1{_gridIdx(){return(this.panels||[]).map((t,e)=>e).filter(t=>this.panels[t].display!=="popup")}render(){let t=this.panels||[],e=this._order||this._gridIdx(),i=t.map((o,a)=>a).filter(o=>t[o].display==="popup");return x`
      <div class="grid" style=${`--row:${Ai}px;--gap:${r6}px`}>
        ${e.map(o=>this._block(t[o],o))}
      </div>
      ${i.length?x`<div class="pops"><span>Pop-ups:</span>${i.map(o=>x`<span class="pop"><ha-icon icon=${XH(t[o])}></ha-icon>${vi(t[o])}</span>`)}</div>`:Z}
    `}_block(t,e){let i=this._size?.index===e?this._size:null,o=i?i.span:B5(t),a=i?i.rows:l5(t),n=`grid-column: span ${o}; grid-row: span ${a?Math.max(1,Math.round(a*2)):2};`,H=["blk",t.show===!1?"hidden":"",this._drag?.index===e?"dragging":"",i?"sizing":"",t.type].join(" ");return x`<div class=${H} style=${n} data-i=${e} tabindex="0" role="button"
        aria-label=${`${vi(t)}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${V=>this._startMove(V,e)} @keydown=${V=>this._key(V,e)}>
      <ha-icon icon=${XH(t)}></ha-icon>
      <span class="nm">${vi(t)}</span>
      <span class="dim">${o}×${a||"a"}</span>
      <span class="rz x" @pointerdown=${V=>this._startSize(V,e,"x")}></span>
      <span class="rz y" @pointerdown=${V=>this._startSize(V,e,"y")}></span>
      <span class="rz xy" @pointerdown=${V=>this._startSize(V,e,"xy")}></span>
    </div>`}_startMove(t,e){if(t.button!==0||t.target.classList.contains("rz"))return;t.preventDefault();let i=t.currentTarget;i.setPointerCapture(t.pointerId),this._order=this._gridIdx(),this._drag={index:e,x0:t.clientX,y0:t.clientY,moved:!1};let o=n=>this._onMove(n),a=()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let n=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),H=this._order;this._drag=null,this._order=null,n&&this._commitOrder(H)};i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(t){let e=this._drag;if(!e||!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<4)return;e.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(H=>Number(H.dataset.i)!==e.index),o=null;for(let H of i){let V=H.getBoundingClientRect();if(t.clientX>=V.left&&t.clientX<=V.right&&t.clientY>=V.top&&t.clientY<=V.bottom){o={i:Number(H.dataset.i),after:t.clientX>V.left+V.width/2};break}}if(!o){let H=i[i.length-1]?.getBoundingClientRect();if(H&&t.clientY>H.bottom)o={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(H=>H!==e.index),n=a.indexOf(o.i)+(o.after?1:0);a.splice(n,0,e.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(t){let e=this.panels,i=t.map(a=>e[a]),o=e.map(a=>a.display==="popup"?a:i.shift());this._emit(o)}_startSize(t,e,i){if(t.button!==0)return;t.preventDefault(),t.stopPropagation();let o=t.currentTarget;o.setPointerCapture(t.pointerId);let n=(this.renderRoot.querySelector(".grid").clientWidth-11*r6)/12+r6,H=this.panels[e],V=B5(H),c=l5(H);this._size={index:e,span:V,rows:c};let d=t.clientX,m=t.clientY,A=y=>{let O=i==="y"?V:Math.max(1,Math.min(12,V+Math.round((y.clientX-d)/n))),T=i==="x"?c:Math.max(.5,Math.min(KH,(c||1)+Math.round(2*(y.clientY-m)/(Ai+r6))/2));i!=="x"&&c===0&&T===1&&Math.abs(y.clientY-m)<(Ai+r6)/4&&(T=0),(O!==this._size.span||T!==this._size.rows)&&(this._size={index:e,span:O,rows:T})},g=()=>{o.removeEventListener("pointermove",A),o.removeEventListener("pointerup",g),o.removeEventListener("pointercancel",g);let{span:y,rows:O}=this._size;this._size=null,(y!==V||O!==c)&&this._commitSize(e,y,O)};o.addEventListener("pointermove",A),o.addEventListener("pointerup",g),o.addEventListener("pointercancel",g)}_commitSize(t,e,i){let o=s2(this.panels[t])||{},a={...this.panels[t],span:e,rows:i};e===o.span&&delete a.span,i===(o.rows??0)&&delete a.rows;let n=this.panels.slice();n[t]=a,this._emit(n)}_key(t,e){let i=this._gridIdx(),o=i.indexOf(e);if(t.shiftKey){let a=this.panels[e],n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!n)return;t.preventDefault(),this._commitSize(e,Math.max(1,Math.min(12,B5(a)+n[0])),Math.max(0,Math.min(KH,l5(a)+n[1]/2)))}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let a=o+(t.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let n=i.slice();[n[o],n[a]]=[n[a],n[o]],this._commitOrder(n),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(t){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:t}}))}};R(i6,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0}}),R(i6,"styles",H1`
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: calc((var(--row) - var(--gap)) / 2);
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",i6);var JH="__other__",o6=class extends t1{_name(t){let e=this.hass?.states?.[t],i=e?.attributes?.friendly_name||t,o=e&&!["unknown","unavailable"].includes(e.state)&&!t.startsWith("weather.")?` \xB7 ${e.state}${e.attributes?.unit_of_measurement?` ${e.attributes.unit_of_measurement}`:""}`:"";return`${i}${o}`}_emit(t){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!1}))}render(){let t=this.value||"",e=[...new Set([...this.candidates||[],...t?[t]:[]])].filter(o=>o!==this.defaultEntity||t===o),i=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return x`
      <div class="row">
        <select class=${t?"":"def"} aria-label=${this.label||"Entity"} @change=${o=>{let a=o.target.value;if(a===JH){this._other=!0,o.target.value=t;return}this._emit(a)}}>
          <option value="" ?selected=${!t}>${i}</option>
          ${e.map(o=>x`<option value=${o} ?selected=${o===t}>${this._name(o)}</option>`)}
          <option value=${JH}>Other entity…</option>
        </select>
        ${t?x`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:Z}
      </div>
      ${this._other?x`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:t}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${o=>{o.stopPropagation();let a=o.detail.value?.e;a&&this._emit(a)}}></ha-form></div>`:Z}
    `}};R(o6,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),R(o6,"styles",H1`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",o6);var ev=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],Wt=r=>typeof r=="string"&&r.startsWith("device:"),C6=class extends t1{constructor(){super(),this._open=new Set}get _sources(){let t=this.config?.metric_sources||{};return Array.isArray(t.sources)?t.sources.filter(e=>e?.ref).map(e=>({ref:e.ref,overrides:{...e.overrides||{}},disabled:!!e.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(t){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:t}}}_commit(t){let e=t.filter(c=>c?.ref).map(c=>{let d=Object.fromEntries(Object.entries(c.overrides||{}).filter(([,m])=>m));return{ref:c.ref,...Object.keys(d).length?{overrides:d}:{},...c.disabled?{disabled:!0}:{}}}),i={...this.config?.metric_sources||{}};delete i.primary,delete i.fallback,delete i.custom,delete i.device_map,e.length?i.sources=e:delete i.sources;let o=c=>(this.hass?.states?.[c]?.attributes?.supported_features&7)!==0,a=c=>c.map(d=>d.ref).filter(d=>typeof d=="string"&&d.startsWith("weather.")),n=a(e.filter(c=>!c.disabled)),H=a(e),V=n.find(o)||n[0]||H.find(o)||H[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:V,metric_sources:Object.keys(i).length?i:void 0}}))}_info(t){let e=this.hass;if(Wt(t)){let o=e?.devices?.[t.slice(7)],a=C4(e,t.slice(7))[0];return{icon:"mdi:access-point",name:o?.name_by_user||o?.name||t.slice(7),kind:"Station device",sub:[o?.manufacturer,o?.model].filter(Boolean).join(" "),integ:w3(e,a)}}let i=e?.states?.[t];return t.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:i?.attributes?.friendly_name||t,kind:"Weather entity",sub:"forecast + condition",integ:w3(e,t)}:{icon:"mdi:eye-outline",name:i?.attributes?.friendly_name||t,kind:"Sensor",sub:t,integ:w3(e,t)}}_candidates(t,e){let i=this.hass;if(!Wt(t))return[];let o=e&&i.states[e]?.attributes?.unit_of_measurement,a=t.slice(7),n=i.devices?.[a]?.config_entries||[];return[...new Set([a,...Object.entries(i.devices||{}).filter(([,V])=>(V.config_entries||[]).some(c=>n.includes(c))).map(([V])=>V)])].flatMap(V=>C4(i,V)).filter(V=>V.startsWith("sensor.")&&i.states[V]?.attributes?.unit_of_measurement&&(!o||i.states[V].attributes.unit_of_measurement===o)).sort()}render(){if(!this.hass)return Z;let t=this._sources,e=this._station(t),i=t.some(o=>o.ref.startsWith("weather.")&&!o.disabled);return x`
      <div class="list">
        ${t.map((o,a)=>this._source(o,a,t,e))}
      </div>
      ${i?Z:x`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(t):x`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(t,e,i,o){let a=this._info(t.ref),n=this._open.has(t.ref),H=ev.map(([m,A])=>{let g=LH(o,this.hass,t.ref,m),y=t.ref.startsWith("weather.")?this.hass.states[t.ref]?.attributes?.[m]!=null:!!g;return{k:m,label:A,def:t.ref.startsWith("weather.")?y?t.ref:null:g,ov:t.overrides[m]||"",has:y||!!t.overrides[m]}}),V=H.filter(m=>m.has).length,c=m=>{let A=i.map(g=>({...g,overrides:{...g.overrides}}));m(A),this._commit(A)},d=()=>{let m=new Set(this._open);m.has(t.ref)?m.delete(t.ref):m.add(t.ref),this._open=m};return x`<div class="src ${n?"open":""} ${t.disabled?"off":""}">
      <div class="hd" @click=${d} role="button" tabindex="0" aria-expanded=${String(n)} @keydown=${m=>(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),d())}>
        <span class="rank">${e+1}</span>
        <ha-icon class="lead" icon=${a.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${a.name}${t.disabled?x` <span class="tag">hidden</span>`:Z}</div>
          <div class="sb"><span class="pill">${a.kind}</span>${a.integ?x`<span class="pill integ">${a.integ}</span>`:Z}<span>${V} value${V===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${m=>m.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${e===0} @click=${()=>c(m=>[m[e-1],m[e]]=[m[e],m[e-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${e===i.length-1} @click=${()=>c(m=>[m[e+1],m[e]]=[m[e],m[e+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${t.disabled?"Use this source":"Skip this source"} @click=${()=>c(m=>m[e].disabled=!m[e].disabled)}><ha-icon icon=${t.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>c(m=>m.splice(e,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?x`<div class="bd">
            ${a.sub?x`<div class="meta">${a.sub}</div>`:Z}
            <div class="tbl">
              ${H.filter(m=>m.has||Wt(t.ref)).map(m=>{let A=m.ov||m.def,g=A&&!A.startsWith("weather.")?N2(this.hass,A):null,y=A?.startsWith("weather.")?this.hass.states[A]?.attributes?.[m.k]:null;return x`<span class="k">${m.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${m.ov} .defaultEntity=${m.def}
                    .defaultLabel=${t.ref.startsWith("weather.")&&!m.ov?m.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(t.ref,m.def)} label=${m.label}
                    @value-changed=${O=>c(k=>k[e].overrides[m.k]=O.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${g?`${g.value} ${g.unit}`:y!=null?String(y):""}</span>`})}
            </div>
            ${t.ref.startsWith("weather.")?x`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:Z}
          </div>`:Z}
    </div>`}_addForm(t){let e=i=>{if(!i||t.some(n=>n.ref===i)){this._adding=!1;return}this._adding=!1;let o=t.slice(),a=o.findIndex(n=>n.ref.startsWith("weather."));Wt(i)&&a>=0?o.splice(a,0,{ref:i,overrides:{}}):o.push({ref:i,overrides:{}}),this._commit(o)};return x`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.d&&`device:${i.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};R(C6,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),R(C6,"styles",H1`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",C6);var M4=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],rv=r=>/^#[0-9a-f]{6}$/i.test(r||"")?r:/^#[0-9a-f]{3}$/i.test(r||"")?"#"+r.slice(1).split("").map(t=>t+t).join(""):"#888888";function iv(r){if(r.type==="statistics"){let t=r.preset||"temps",e=zt[t]||{};return((Array.isArray(r.metrics)&&r.metrics.length?r.metrics:e.metrics||Z3[t]?.metrics)||[]).map((o,a)=>({metric:o,color:r.colors?.[o],defColor:e.series?.[o]?.color||q1[o]?.color||M4[a%M4.length],entity:r.entity_overrides?.[o]||"",key:"map"}))}return Array.isArray(r.series)&&r.series.length?r.series.map((t,e)=>({metric:t.metric,idx:e,color:t.color,defColor:q1[t.metric]?.color||M4[e%M4.length],entity:t.entity||"",label:t.label,key:"list"})):(F9[r.type]||F9.graph).map((t,e)=>({metric:t.metric,color:r.colors?.[t.metric],defColor:t.color||q1[t.metric]?.color||M4[e%M4.length],entity:r.entities?.[t.metric]||"",key:"map"}))}var a6=class extends t1{_set(t,e,i){let o=s4(this.panel);if(t.key==="list")o.series[t.idx]=R5({...o.series[t.idx],[e]:i||void 0});else{let a=e==="color"?"colors":o.type==="statistics"?"entity_overrides":"entities";o[a]=R5({...o[a]||{},[t.metric]:i||void 0}),Object.keys(o[a]).length||delete o[a]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:o}}))}_candidates(t){let e=t&&this.hass.states[t]?.attributes?.unit_of_measurement;return O9(this.station,this.hass).filter(i=>i.startsWith("sensor.")&&(!e||this.hass.states[i]?.attributes?.unit_of_measurement===e))}render(){if(!this.hass||!this.panel)return Z;let t=iv(this.panel),e=this.panel.type!=="statistics"||mi(this.panel)==="sgcc";return x`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${t.map(i=>{let o=x5(i.metric,this.station,this.hass),a=i.color||i.defColor;return x`<span class="k">${i.label||q1[i.metric]?.label||i.metric||"Series"}</span>
          <span class="c">
            ${e?x`<input type="color" .value=${rv(a)} title="Line color" aria-label="Line color" @change=${n=>this._set(i,"color",n.target.value)} />
                ${i.color?x`<button type="button" title="Default color" @click=${()=>this._set(i,"color","")}>↺</button>`:Z}`:x`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${i.entity} .defaultEntity=${o} .candidates=${this._candidates(o)} label=${`${i.metric} sensor`}
            @value-changed=${n=>this._set(i,"entity",n.detail.value)}></wsfc-entity-select>`})}
    </div>`}};R(a6,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),R(a6,"styles",H1`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",a6);var ov=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],Cv={wind_bearing:"Wind direction",precipitation:"Rain rate"},eV=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."},{name:"background_image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]],["Panels",[{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"With a card background: blur behind panels. Default 6."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Corner radius (default: the theme's card radius)."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"CSS color, e.g. #4fc3f7 or rgba(255,255,255,.2). Blank: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",selector:{text:{}},helper:"Glow color (default: the border color, else the theme's primary color)."},{name:"panel_glow_size",selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]],["Layout & behaviour",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"lite_editing",selector:{boolean:{}},default:!0,helper:"While the dashboard or this card is being edited: no animated background or blur, and the radar and Windy maps show a placeholder. Keeps the editor responsive."}]]],g$=eV.flatMap(([,r])=>r),tV={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6,lite_editing:!0},av={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_chart:"Altitude chart",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",hours:"Hours",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",lite_editing:"Pause animations and maps while editing",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",wr_stats:"Position",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},nv=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function sv(r,t,e){let i=t.split("."),o=r;i.slice(0,-1).forEach(n=>o=o[n]=o[n]&&typeof o[n]=="object"?{...o[n]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete o[a]:o[a]=e}function n6(r,t,e={}){let i={};for(let o of t){let a=nv(r,o.name);i[o.name]=a!==void 0?a:e[o.name]!==void 0?e[o.name]:o.default}return i}function s6(r,t,e,i={}){let o=s4(r);for(let a of t){let n=e[a.name],H=i[a.name]!==void 0?i[a.name]:a.default;H!==void 0&&JSON.stringify(n)===JSON.stringify(H)&&(n=void 0),sv(o,a.name,n)}return R5(o)}var rV=["span","rows","display","span_medium","span_narrow","rows_compact"];function Hv(r,t){let e=r[t],i=r[t+1],o=H=>{let V={...H};for(let c of rV)delete V[c];return V},a=r.slice();if(i.type==="stack"&&i.direction==="vertical"){let H=l5(e)+l5(i);return a.splice(t,2,R5({...i,span:Math.max(B5(e),B5(i)),rows:H||void 0,panels:[o(e),...i.panels||[]]})),a}let n=l5(e)+l5(i);return a.splice(t,2,R5({type:"stack",direction:"vertical",span:Math.max(B5(e),B5(i)),rows:n||void 0,panels:[o(e),o(i)]})),a}function iV(r,t,e){let i={...r[e]};for(let a of rV)delete i[a];let o=r.slice();return o[t]={...o[t],panels:[...o[t].panels||[],i]},o.splice(e,1),o}function oV(r,t,e){let i=r[t],o=(i.panels||[]).slice(),[a]=o.splice(e,1),n=r.slice(),H=R5({...a,span:B5(i),rows:void 0});return o.length?n.splice(t,1,{...i,panels:o},H):n.splice(t,1,H),n}function Vv(r){let t=s2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:H7({...r,in_bar:void 0}),show:!0}}function xi(r){let t=s2(r);return r.title?r.title:r.type==="metric"?q1[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var H6=class extends t1{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t}shouldUpdate(t){if(t.size===1&&t.has("hass")){let e=t.get("hass"),i=this.hass;if(e&&i&&e.entities===i.entities&&e.devices===i.devices&&e.areas===i.areas&&e.themes===i.themes&&e.locale===i.locale&&e.language===i.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._hassTimer),this._hassTimer=null}get _panels(){return wt(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[o,a]of Object.entries(e||{}))a===void 0?delete i[o]:i[o]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?Z:x`
      <div class="ed">
        <div class="hdr"><span class="name">${R4}</span><span class="ver">v${N6} · Weather Flex sections ${SH}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general())}
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
      .computeLabel=${o=>o.label||av[o.name]||o.name}
      .computeHelper=${o=>o.helper}
      @value-changed=${o=>{o.stopPropagation(),i(o.detail.value)}}
    ></ha-form>`}_general(){let t=this._config.background||"none";return eV.map(([e,i])=>{let o=i.filter(a=>t==="image"||!a.name.startsWith("background_"));return x`<div class="agrp"><div class="agrp-t">${e}</div>${this._form(n6(this._config,o,tV),o,a=>{let{panels:n,...H}=this._config,V=s6(H,o,a,tV);this._config.panels&&(V.panels=this._config.panels),this._emit(V)})}</div>`})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_stationEditor(){let t=this._station,e=[...ov,"rain_today","battery","signal","rssi","aqi","pm2_5","pm10","ozone"].map(o=>{let a=q1[o]?.find||q1[o]?.aq?x5(o,t,this.hass):b3(t,this.hass,o)||(this.hass.states[t.entity]?.attributes?.[o]!=null?t.entity:null),n=a&&!a.startsWith("weather.")?N2(this.hass,a):null,H=a?.startsWith("weather.")?this.hass.states[a]?.attributes?.[o]:null;return{k:o,e:a,v:n?`${n.value} ${n.unit}`:H!=null?String(H):"",label:Cv[o]||q1[o]?.label||o.replace(/_/g," "),integ:a?w3(this.hass,a):""}}),i=e.filter(o=>o.e).length;return x`
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
    `}_heroEditor(){let t=this._panels,e=t.findIndex(a=>a.type==="hero");if(e<0)return x`<p class="hint">There is no hero panel. Add one here, or set the station under <b>Weather station</b>.</p>
        <button class="btn" @click=${()=>this._setPanels([{type:"hero"},...t])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;let i=(a,n)=>{let H=t.slice();H[e]=a,this._setPanels(H,n)},o=G0.hero.schema;return x`
      ${this._form(n6(t[e],o),o,a=>i({...s6(t[e],o,a),type:"hero"}))}
      <p class="hint">Weather Flex Card's editor for the hero's sections. Weather Sources are under <b>Weather station</b>. Sizes at Auto follow the panel's size.</p>
      ${this._flexEditor(`${e}`,t[e],i)}`}_flexEditor(t,e,i){let o=`${t}:${e.type}`,a=this._flexEds.get(o);a||(a=document.createElement(wH),a.wsfcMode="sections",a.addEventListener("config-changed",c=>{c.stopPropagation(),a._wsfcOnChange?.(c.detail.config)}),this._flexEds.set(o,a));let n=c=>c.type==="sky_tracker"?di(c,this._station):E2($9(c.type,this._station),c.flex||{});a.wsfcPanels=s2(e)?.flexPanels||null,a.wsfcHide=s2(e)?.flexHide||null,a._wsfcOnChange=c=>{let d=s4(e),m=ZH(c,n({...e,flex:void 0}));Object.keys(m).length?d.flex=m:delete d.flex,i(d)};let H=n(e),V=JSON.stringify(H);return a._wsfcJson!==V&&(a._wsfcJson=V,a.setConfig(H)),a.hass=this.hass,x`<div class="flexed">${a}</div>`}_layoutEditor(){return x`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      <wsfc-layout-map .panels=${this._panels} @layout-changed=${t=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(t.detail.panels)}}></wsfc-layout-map>
    `}_panelList(){return x`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_buttonsEditor(){let t=this._config,e=this._panels,i=e.findIndex(c=>c.type==="heading"),o=i>=0&&!!e[i].show_bar,a=t.panel_bar===!1?"hidden":o?"heading":"top",n=c=>{let d=e.map((m,A)=>A===i?R5({...m,show_bar:c==="heading"?!0:void 0}):m);c==="heading"&&i<0&&d.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(d,{panel_bar:c==="hidden"?!1:void 0})},H=(c,d)=>{let m=e.map((A,g)=>{if(!c.includes(g))return A;let y=H7({...A,in_bar:void 0});return R5({...A,in_bar:d===y?void 0:d})});this._setPanels(m)},V=e.map((c,d)=>d);return x`
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
        <button class="btn sm" @click=${()=>H(V,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>H(V,!1)}>None</button>
      </div>
      <div class="checks">
        ${e.map((c,d)=>x`<label class="chk">
          <input type="checkbox" .checked=${H7(c)} @change=${m=>H([d],m.target.checked)} />
          <ha-icon icon=${c.icon||c.type==="metric"&&q1[c.metric]?.icon||s2(c).icon}></ha-icon>
          <span>${xi(c)}</span>${c.display==="popup"?x`<span class="tag">pop-up</span>`:c.show===!1?x`<span class="tag">hidden on load</span>`:Z}
        </label>`)}
      </div>
    `}_list(t,e,i){let o=!!i,a=Object.entries(G0).filter(([V])=>!(o&&V==="hero")).sort(([V,c],[d,m])=>V==="hero"?-1:d==="hero"?1:c.label.localeCompare(m.label)),n=i||"top",H=(this._addTypes||(this._addTypes={}))[n]||(o?"metric":this._addType);return x`
      <div class="rows">${t.map((V,c)=>this._panelRow(V,c,t,e,i?`${i}.${c}`:`${c}`,o))}</div>
      <div class="add">
        <select class="sel" @change=${V=>{this._addTypes[n]=V.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([V,c])=>x`<option value=${V} ?selected=${V===H}>${c.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let V={type:H};V.type==="metric"&&(V.metric="temperature"),V.type==="stack"&&(V.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,V]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${o?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,o,a,n){let H=s2(t),V=this._openPanel===a||t.type!=="stack"&&String(this._openPanel||"").startsWith(`${a}.`),c=t.show===!1,d=()=>this._flexEds.clear(),m=O=>{let k=i.slice(),T=e+O;T<0||T>=k.length||([k[e],k[T]]=[k[T],k[e]],d(),this._openPanel=null,o(k))},A=(O,k)=>{let T=i.slice();T[e]=O,o(T,k)},g=n?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${B5(t)}/12${l5(t)?` \xD7 ${l5(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,y=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:H.label;return x`<div class="row ${V?"open":""} ${c?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&q1[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":H.icon)}></ha-icon>
        <div class="txt"><div class="n">${xi(t)}</div><div class="s">${y}${g?` \xB7 ${g}`:""}</div></div>
        ${n?x`<button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>m(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>m(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:Z}
        ${n?Z:x`<button class="ib" title=${c?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>A(R5({...t,show:c?void 0:!1}))}>
              <ha-icon icon=${c?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${n&&/^\d+\.\d+$/.test(a)?x`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{d(),this._openPanel=null,this._setPanels(oV(this._panels,Number(a.split(".")[0]),e))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:Z}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${V?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let O=i.slice();O.splice(e+1,0,s4(t)),d(),o(O)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let O=i.slice();O.splice(e,1),d(),this._openPanel=null,o(O)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${V?this._panelBody(t,a,A,n):Z}
      ${t.type==="stack"?this._stackKids(t,e,a,A,n):Z}
    </div>`}_stackKids(t,e,i,o,a){let H=!a?this._panels.map((c,d)=>[c,d]).filter(([c,d])=>d!==e&&c.type!=="hero"&&c.type!=="stack"):[],V=(this._moveIn||(this._moveIn={}))[i]??H[0]?.[1]??"";return x`<div class="kids">
      ${this._list(t.panels||[],(c,d)=>o({...t,panels:c},d),i)}
      ${H.length?x`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${c=>{this._moveIn[i]=Number(c.target.value),this.requestUpdate()}}>
              ${H.map(([c,d])=>x`<option value=${d} ?selected=${d===V}>${xi(c)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(iV(this._panels,e,Number(V)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:Z}
    </div>`}_panelBody(t,e,i,o){let a=s2(t),n=o?{}:Vv(t),H=o?gH:xH;t.type==="hero"&&(H=H.filter(A=>!["icon","display","in_bar"].includes(A.name)));let V=["graph","temp_humidity","uv_solar","statistics"].includes(t.type),c=["type","span","rows","display","in_bar","tile_background","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...t.type==="metric"?["metric"]:[],...t.type==="statistics"?["preset"]:[],...t.type==="stack"?["panels","direction"]:[]],d=Object.keys(t).some(A=>!c.includes(A)),m=()=>i(Object.fromEntries(Object.entries(t).filter(([A])=>c.includes(A))));return x`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!d} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),m()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${V?x`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${t} .station=${this._station} @panel-changed=${A=>i(A.detail.panel)}></wsfc-series-editor>`:Z}
      <div class="grp">Layout</div>
      ${this._form(n6(t,H,n),H,A=>i({type:t.type,...s6(t,H,A,n)}))}
      ${a.groups?a.groups.map(([A,g])=>x`<div class="grp">${A}</div>
            ${this._form(n6(t,g),g,y=>i({...s6(t,g,y),type:t.type}))}`):a.schema.length?x`<div class="grp">${a.label} options</div>
              ${this._form(n6(t,a.schema),a.schema,A=>i({type:t.type,...s6(t,a.schema,A)}))}`:Z}
      ${a.flex?x`<div class="grp">${t.type==="sky_tracker"?"Arc & sky details":"Weather Flex sections"}</div>
            ${t.type==="sky_tracker"?x`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:Z}
            ${t.type==="hero"&&!o?x`<p class="hint">Also under Hero above.</p>`:this._flexEditor(e,t,i)}`:Z}
    </div>`}};R(H6,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),R(H6,"styles",H1`
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
    .agrp + .agrp { margin-top: var(--ltek-sp-4, 16px); }
    .agrp-t { font-size: var(--ltek-fs-small, 12px); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ltek-c-muted); margin: 0 0 var(--ltek-sp-2, 8px); padding-bottom: 4px; border-bottom: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
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
    /* A stack's panels, indented under its row. */
    .kids { margin: 0 var(--ltek-sp-2) var(--ltek-sp-2) var(--ltek-sp-6, 24px); padding-left: var(--ltek-sp-3); border-left: 2px solid var(--ltek-c-accent); display: flex; flex-direction: column; gap: var(--ltek-sp-2); }
    .nest { border-left: 2px solid var(--ltek-c-border); padding-left: var(--ltek-sp-3); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .flexed { border-left: 2px solid var(--ltek-c-accent-fade); padding-left: var(--ltek-sp-3); }
  `);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",H6);globalThis.__wsfcEditorHelpers={stackWithNext:Hv,unstack:oV,moveIntoStack:iV};var Lv=720,lv=1100;function cv(r){let t=[];r.panel_radius!=null&&t.push(`--wsfc-radius:${Number(r.panel_radius)}px`);let e={soft:"0 2px 6px rgba(0,0,0,.25)",medium:"0 4px 14px rgba(0,0,0,.35)",strong:"0 8px 28px rgba(0,0,0,.5)"},i=[];if(e[r.panel_shadow]&&i.push(e[r.panel_shadow]),r.panel_glow){let o=r.panel_glow_color||r.panel_border_color||"var(--primary-color)";i.push(`0 0 ${Number(r.panel_glow_size??10)}px ${o}`)}return i.length&&t.push(`--wsfc-tile-shadow:${i.join(",")}`),(r.panel_border_width!=null||r.panel_border_color)&&t.push(`--wsfc-tile-border:${Number(r.panel_border_width??1)}px solid ${r.panel_border_color||"var(--divider-color, rgba(127,127,127,.3))"}`),t}var V6=class extends t1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),o=[];return i&&o.push({ref:`device:${i.id}`}),e&&o.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:o}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=wt(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_entries(t=this._config.panels){let e=[];return t.forEach((i,o)=>{e.push([i,o]),i.type==="stack"&&(i.panels||[]).forEach((a,n)=>a&&e.push([a,`${o}.${n}`]))}),e}_at(t){let e=this._config.panels;if(typeof t=="number")return e[t];let[i,o]=String(t).split(".").map(Number);return o==null?e[i]:e[i]?.panels?.[o]}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(this._entries(t).map(([i,o])=>i.show===!1?this._key(i,o):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return this._entries(t).map(([e,i])=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},o=e<(i.narrow_width||Lv)?"narrow":e<(i.medium_width||lv)?"medium":"wide";o!==this._size&&(this._size=o),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_fit(){let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let o=i.min_row_height||60,a=i.max_row_height||400,n=e.clientHeight;if(!n)return;let H=y=>(t.style.setProperty("--wsfc-row",`${y}px`),t.getBoundingClientRect().height),V=o,c=o+40,d=H(V),A=(H(c)-d)/(c-V),g=i.row_height||110;A>.5&&(g=Math.max(o,Math.min(a,V+(n-d)/A))),t.style.setProperty("--wsfc-row",`${Math.floor(g)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return Z;let t=this._config,e=this._full,i=this._animatedBg,o=this._lite,a=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:"",i?`--wsfc-panel-opacity:${t.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${t.panel_blur??6}px`:"",...cv(t)].join(";"),n=t.panels.some(H=>H.type==="heading"&&H.show_bar);return x`
      <ha-card class=${`wsfc ${e?"full":""} ${this._layoutSize} ${i?"animated":""} ${o?"lite":""}`} style=${a}>
        ${t.background==="image"?this._renderImage():i&&!o?this._renderBackground():Z}
        ${t.title?this._renderTitle():Z}
        ${t.panel_bar===!1||n?Z:x`<div class="topbar">${this._renderBar()}</div>`}
        <div class="scroller"><div class="grid">${this._renderPanels()}</div></div>
        ${this._popup!=null?this._renderPopup():Z}
      </ha-card>
    `}get _lite(){return this._config?.lite_editing===!1?!1:!!(this.preview||this.editMode||/[?&]edit=1(&|$)/.test(globalThis.location?.search||""))}get _animatedBg(){let t=this._config?.background;return t==="animated"||t==="image"&&!!this._bgSource()}_bgSource(){let t=this._config||{};if(t.background_image_url)return String(t.background_image_url);let e=t.background_image;return(typeof e=="object"?e?.media_content_id:e)||""}_renderImage(){let t=this._config,e=this._bgSource();if(!e)return Z;if(e.startsWith("media-source://")){let n=this._bgResolved;if(n?.id===e&&Date.now()-n.at<23*36e5)e=n.url;else{if(this._bgPending!==e){this._bgPending=e;let H=e;this.hass.callWS({type:"media_source/resolve_media",media_content_id:H}).then(V=>{this._bgResolved={id:H,url:V.url,at:Date.now()},this.requestUpdate()}).catch(()=>{}).finally(()=>{this._bgPending===H&&(this._bgPending=null)})}return Z}}e.startsWith("/")&&this.hass?.hassUrl&&(e=this.hass.hassUrl(e));let i=e.replace(/["\\()]/g,n=>encodeURIComponent(n)),o=t.background_image_fit||"cover",a=Number(t.background_dim??.25);return x`<div class="bg bgimg" style="background-image:url(&quot;${i}&quot;);background-size:${o==="tile"?"auto":o};background-repeat:${o==="tile"?"repeat":"no-repeat"};--dim:${a}"></div>`}_renderBackground(){let t=this._config,e=this.hass.states[t.entity];if(!e)return Z;this._watchHourly();let i=t.background_effects??!0;return x`<wsfc-animation-provider class="bg"
      .hass=${this.hass}
      .weatherEntity=${e}
      .config=${{entity:t.entity,show_condition_effects:i,show_moon_phase:t.background_moon_phase??!0}}
      .currentForecast=${this._hourlyNow}
    ></wsfc-animation-provider>`}_watchHourly(){let t=this._config.entity;this._hourlyFor!==t&&(this._unwatchHourly?.(),this._hourlyFor=t,this._unwatchHourly=St(this.hass,t,"hourly",e=>{this._hourlyNow=e?.[0],this.requestUpdate()}))}_renderTitle(){let t=this._config;return x`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?x`<span class="subtitle">${t.subtitle}</span>`:Z}
    </div>`}_renderBar(){let t=this._config.panels,e=this._entries(t).filter(([i])=>H7(i));return e.length?e.map(([i,o])=>{let a=s2(i),n=i.display==="popup"||this._isEmpty(i),H=n?this._popup===o:!this._hidden.has(this._key(i,o));return x`<button
        type="button"
        class="chip ${H?"on":""} ${n?"popup":""}"
        aria-pressed=${n?Z:String(H)}
        aria-haspopup=${n?"dialog":Z}
        @click=${()=>this._toggle(i,o)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${n?x`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:Z}
      </button>`}):Z}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":t.type==="wind_map"?"Wind map":t.type==="statistics"?t.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[t.preset]||"Graph":s2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"||this._isEmpty(t)){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),o=this._key(t,e);i.has(o)?i.delete(o):i.add(o),this._hidden=i,this._saveHidden()}_isHidden(t,e){return!H7(t)||this._config.panel_bar===!1?t.show===!1:this._hidden.has(this._key(t,e))}_isEmpty(t,e){if(t.type==="stack"&&e!=null&&typeof e=="number"){let o=(t.panels||[]).filter(Boolean);return o.length>0&&o.every((a,n)=>this._isHidden(a,`${e}.${n}`)||this._isEmpty(a))}let i=s2(t)?.hideWhen;try{return!!(i&&i(t,this.hass,this._station))}catch{return!1}}_renderPanels(){let t=this._config.panels,e=t.map((o,a)=>a).filter(o=>t[o].display!=="popup"&&!this._isHidden(t[o],o)&&!this._isEmpty(t[o],o));if(this._focus!=null&&(e=[this._focus]),!e.length)return x`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(o=>{let a=t[o],n=s2(a),H=_H(a,i),V=this._focus!=null?12:H.span,c=this._focus!=null?Math.max(l5(a),5):H.rows,d=`grid-column: span ${V};grid-row: span ${c?Math.max(1,Math.round(c*2)):2};${c?`min-height:calc(${c} * var(--wsfc-row) + ${c-1} * var(--wsfc-gap));`:""}`,m=n.bare||a.type==="hero",A=a.display==="tile_popup",g=!m&&!A&&!["metric","stack","clock","chips"].includes(a.type)&&i!=="narrow",y=a.tile_background&&a.tile_background!=="default"?`bg-${a.tile_background}`:"";return x`<section class="tile ${a.type} ${n.bare?"bare":""} ${y} ${c?"":"auto"} ${A?"tap":""}" style=${d}>
        ${A?x`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${a.title||this._autoTitle(a)}`}
              @click=${()=>this._popup=o}><span><ha-icon icon="mdi:arrow-expand"></ha-icon></span></button>`:Z}
        ${g?x`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?o:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:Z}
        ${this._panelEl(a,o)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._at(t);if(!e)return Z;let i=()=>this._popup=null;return x`<div class="scrim" @click=${o=>o.target===o.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let o=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(o);if(!a){a=document.createElement(s2(t).tag),this._els.set(o,a);for(let n of this._els.keys())n!==o&&n.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(n)}return a.config=t,a.station=this._station,a.cardBg=this._animatedBg,a.lite=this._lite,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),t.type==="stack"&&!i&&(a.hiddenKids=(t.panels||[]).map((n,H)=>!!n&&(this._isHidden(n,`${e}.${H}`)||this._isEmpty(n))).join(",")),a}};R(V6,"properties",{hass:{attribute:!1},preview:{type:Boolean},editMode:{type:Boolean},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),R(V6,"styles",[U6,W6,H1`
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
    .bgimg { position: absolute; inset: 0; background-position: center; pointer-events: none; }
    .bgimg::after { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, var(--dim, 0.25)); border-radius: inherit; }

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
    /* Same corner icon as the expand button on other panels. */
    .tap-open span {
      display: inline-flex; margin: 8px; padding: 4px; border-radius: 50%; line-height: 0;
      color: var(--secondary-text-color);
    }
    .tap-open:hover span { color: var(--primary-text-color); }
    .tap-open ha-icon { --mdc-icon-size: 18px; }
    .tile .tap-open ~ * { --wsfc-head-pad: 28px; }
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
  `]);customElements.get(F4)||customElements.define(F4,V6);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===F4)||window.customCards.push({type:F4,name:`${R4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${R4.toUpperCase()}%c ${N6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");export{cv as panelStyleVars};
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
