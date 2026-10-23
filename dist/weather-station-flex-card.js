/* weather-station-flex-card 2026.10.23.41 — https://github.com/Ltek/weather-station-flex-card */
var hL=Object.create;var D6=Object.defineProperty;var lo=Object.getOwnPropertyDescriptor;var mL=Object.getOwnPropertyNames;var fL=Object.getPrototypeOf,AL=Object.prototype.hasOwnProperty;var vL=(r,t,e)=>t in r?D6(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var co=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var xL=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of mL(t))!AL.call(r,o)&&o!==e&&D6(r,o,{get:()=>t[o],enumerable:!(i=lo(t,o))||i.enumerable});return r};var O7=(r,t,e)=>(e=r!=null?hL(fL(r)):{},xL(t||!r||!r.__esModule?D6(e,"default",{value:r,enumerable:!0}):e,r));var K=(r,t,e,i)=>{for(var o=i>1?void 0:i?lo(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(i?n(t,e,o):n(o))||o);return i&&o&&D6(t,e,o),o};var D=(r,t,e)=>vL(r,typeof t!="symbol"?t+"":t,e);var j7=co((ZC,De)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,o=Math.asin,a=Math.atan2,n=Math.acos,s=r/180,V=1e3*60*60*24,l=2440588,M=2451545;function u(j){return j.valueOf()/V-.5+l}function f(j){return new Date((j+.5-l)*V)}function g(j){return u(j)-M}var b=s*23.4397;function k(j,a1){return a(t(j)*e(b)-i(a1)*t(b),e(j))}function O(j,a1){return o(t(a1)*e(b)+e(a1)*t(b)*t(j))}function T(j,a1,L1){return a(t(j),e(j)*t(a1)-i(L1)*e(a1))}function $(j,a1,L1){return o(t(a1)*t(L1)+e(a1)*e(L1)*e(j))}function F(j,a1){return s*(280.16+360.9856235*j)-a1}function Q(j){return j<0&&(j=0),2967e-7/Math.tan(j+.00312536/(j+.08901179))}function U(j){return s*(357.5291+.98560028*j)}function e1(j){var a1=s*(1.9148*t(j)+.02*t(2*j)+3e-4*t(3*j)),L1=s*102.9372;return j+a1+L1+r}function J(j){var a1=U(j),L1=e1(a1);return{dec:O(L1,0),ra:k(L1,0)}}var X={};X.getPosition=function(j,a1,L1){var m1=s*-L1,c1=s*a1,M1=g(j),b1=J(M1),P1=F(M1,m1)-b1.ra;return{azimuth:T(P1,c1,b1.dec),altitude:$(P1,c1,b1.dec)}};var i1=X.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];X.addTime=function(j,a1,L1){i1.push([j,a1,L1])};var d1=9e-4;function _1(j,a1){return Math.round(j-d1-a1/(2*r))}function A1(j,a1,L1){return d1+(j+a1)/(2*r)+L1}function i2(j,a1,L1){return M+j+.0053*t(a1)-.0069*t(2*L1)}function G1(j,a1,L1){return n((t(j)-t(a1)*t(L1))/(e(a1)*e(L1)))}function T1(j){return-2.076*Math.sqrt(j)/60}function t1(j,a1,L1,m1,c1,M1,b1){var P1=G1(j,L1,m1),h2=A1(P1,a1,c1);return i2(h2,M1,b1)}X.getTimes=function(j,a1,L1,m1){m1=m1||0;var c1=s*-L1,M1=s*a1,b1=T1(m1),P1=g(j),h2=_1(P1,c1),g2=A1(0,c1,h2),R2=U(g2),c2=e1(R2),H1=O(c2,0),C5=i2(g2,R2,c2),Q2,w5,D2,_2,M5,d5,r2={solarNoon:f(C5),nadir:f(C5-.5)};for(Q2=0,w5=i1.length;Q2<w5;Q2+=1)D2=i1[Q2],_2=(D2[0]+b1)*s,M5=t1(_2,c1,M1,H1,h2,R2,c2),d5=C5-(M5-C5),r2[D2[1]]=f(d5),r2[D2[2]]=f(M5);return r2};function J1(j){var a1=s*(218.316+13.176396*j),L1=s*(134.963+13.064993*j),m1=s*(93.272+13.22935*j),c1=a1+s*6.289*t(L1),M1=s*5.128*t(m1),b1=385001-20905*e(L1);return{ra:k(c1,M1),dec:O(c1,M1),dist:b1}}X.getMoonPosition=function(j,a1,L1){var m1=s*-L1,c1=s*a1,M1=g(j),b1=J1(M1),P1=F(M1,m1)-b1.ra,h2=$(P1,c1,b1.dec),g2=a(t(P1),i(c1)*e(b1.dec)-t(b1.dec)*e(P1));return h2=h2+Q(h2),{azimuth:T(P1,c1,b1.dec),altitude:h2,distance:b1.dist,parallacticAngle:g2}},X.getMoonIllumination=function(j){var a1=g(j||new Date),L1=J(a1),m1=J1(a1),c1=149598e3,M1=n(t(L1.dec)*t(m1.dec)+e(L1.dec)*e(m1.dec)*e(L1.ra-m1.ra)),b1=a(c1*t(M1),m1.dist-c1*e(M1)),P1=a(e(L1.dec)*t(L1.ra-m1.ra),t(L1.dec)*e(m1.dec)-e(L1.dec)*t(m1.dec)*e(L1.ra-m1.ra));return{fraction:(1+e(b1))/2,phase:.5+.5*b1*(P1<0?-1:1)/Math.PI,angle:P1}};function V1(j,a1){return new Date(j.valueOf()+a1*V/24)}X.getMoonTimes=function(j,a1,L1,m1){var c1=new Date(j);m1?c1.setUTCHours(0,0,0,0):c1.setHours(0,0,0,0);for(var M1=.133*s,b1=X.getMoonPosition(c1,a1,L1).altitude-M1,P1,h2,g2,R2,c2,H1,C5,Q2,w5,D2,_2,M5,d5,r2=1;r2<=24&&(P1=X.getMoonPosition(V1(c1,r2),a1,L1).altitude-M1,h2=X.getMoonPosition(V1(c1,r2+1),a1,L1).altitude-M1,c2=(b1+h2)/2-P1,H1=(h2-b1)/2,C5=-H1/(2*c2),Q2=(c2*C5+H1)*C5+P1,w5=H1*H1-4*c2*P1,D2=0,w5>=0&&(d5=Math.sqrt(w5)/(Math.abs(c2)*2),_2=C5-d5,M5=C5+d5,Math.abs(_2)<=1&&D2++,Math.abs(M5)<=1&&D2++,_2<-1&&(_2=M5)),D2===1?b1<0?g2=r2+_2:R2=r2+_2:D2===2&&(g2=r2+(Q2<0?M5:_2),R2=r2+(Q2<0?_2:M5)),!(g2&&R2));r2+=2)b1=h2;var b2={};return g2&&(b2.rise=V1(c1,g2)),R2&&(b2.set=V1(c1,R2)),!g2&&!R2&&(b2[Q2>0?"alwaysUp":"alwaysDown"]=!0),b2},typeof ZC=="object"&&typeof De<"u"?De.exports=X:typeof define=="function"&&define.amd?define(X):window.SunCalc=X})()});var lV=co((jt,LV)=>{(function(r,t){typeof jt=="object"&&typeof LV<"u"?t(jt):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(jt,(function(r){"use strict";var t="1.9.4";function e(C){var H,c,h,A;for(c=1,h=arguments.length;c<h;c++){A=arguments[c];for(H in A)C[H]=A[H]}return C}var i=Object.create||(function(){function C(){}return function(H){return C.prototype=H,new C}})();function o(C,H){var c=Array.prototype.slice;if(C.bind)return C.bind.apply(C,c.call(arguments,1));var h=c.call(arguments,2);return function(){return C.apply(H,h.length?h.concat(c.call(arguments)):arguments)}}var a=0;function n(C){return"_leaflet_id"in C||(C._leaflet_id=++a),C._leaflet_id}function s(C,H,c){var h,A,w,P;return P=function(){h=!1,A&&(w.apply(c,A),A=!1)},w=function(){h?A=arguments:(C.apply(c,arguments),setTimeout(P,H),h=!0)},w}function V(C,H,c){var h=H[1],A=H[0],w=h-A;return C===h&&c?C:((C-A)%w+w)%w+A}function l(){return!1}function M(C,H){if(H===!1)return C;var c=Math.pow(10,H===void 0?6:H);return Math.round(C*c)/c}function u(C){return C.trim?C.trim():C.replace(/^\s+|\s+$/g,"")}function f(C){return u(C).split(/\s+/)}function g(C,H){Object.prototype.hasOwnProperty.call(C,"options")||(C.options=C.options?i(C.options):{});for(var c in H)C.options[c]=H[c];return C.options}function b(C,H,c){var h=[];for(var A in C)h.push(encodeURIComponent(c?A.toUpperCase():A)+"="+encodeURIComponent(C[A]));return(!H||H.indexOf("?")===-1?"?":"&")+h.join("&")}var k=/\{ *([\w_ -]+) *\}/g;function O(C,H){return C.replace(k,function(c,h){var A=H[h];if(A===void 0)throw new Error("No value provided for variable "+c);return typeof A=="function"&&(A=A(H)),A})}var T=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"};function $(C,H){for(var c=0;c<C.length;c++)if(C[c]===H)return c;return-1}var F="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Q(C){return window["webkit"+C]||window["moz"+C]||window["ms"+C]}var U=0;function e1(C){var H=+new Date,c=Math.max(0,16-(H-U));return U=H+c,window.setTimeout(C,c)}var J=window.requestAnimationFrame||Q("RequestAnimationFrame")||e1,X=window.cancelAnimationFrame||Q("CancelAnimationFrame")||Q("CancelRequestAnimationFrame")||function(C){window.clearTimeout(C)};function i1(C,H,c){if(c&&J===e1)C.call(H);else return J.call(window,o(C,H))}function d1(C){C&&X.call(window,C)}var _1={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:n,throttle:s,wrapNum:V,falseFn:l,formatNum:M,trim:u,splitWords:f,setOptions:g,getParamString:b,template:O,isArray:T,indexOf:$,emptyImageUrl:F,requestFn:J,cancelFn:X,requestAnimFrame:i1,cancelAnimFrame:d1};function A1(){}A1.extend=function(C){var H=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=H.__super__=this.prototype,h=i(c);h.constructor=H,H.prototype=h;for(var A in this)Object.prototype.hasOwnProperty.call(this,A)&&A!=="prototype"&&A!=="__super__"&&(H[A]=this[A]);return C.statics&&e(H,C.statics),C.includes&&(i2(C.includes),e.apply(null,[h].concat(C.includes))),e(h,C),delete h.statics,delete h.includes,h.options&&(h.options=c.options?i(c.options):{},e(h.options,C.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var w=0,P=h._initHooks.length;w<P;w++)h._initHooks[w].call(this)}},H},A1.include=function(C){var H=this.prototype.options;return e(this.prototype,C),C.options&&(this.prototype.options=H,this.mergeOptions(C.options)),this},A1.mergeOptions=function(C){return e(this.prototype.options,C),this},A1.addInitHook=function(C){var H=Array.prototype.slice.call(arguments,1),c=typeof C=="function"?C:function(){this[C].apply(this,H)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function i2(C){if(!(typeof L>"u"||!L||!L.Mixin)){C=T(C)?C:[C];for(var H=0;H<C.length;H++)C[H]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var G1={on:function(C,H,c){if(typeof C=="object")for(var h in C)this._on(h,C[h],H);else{C=f(C);for(var A=0,w=C.length;A<w;A++)this._on(C[A],H,c)}return this},off:function(C,H,c){if(!arguments.length)delete this._events;else if(typeof C=="object")for(var h in C)this._off(h,C[h],H);else{C=f(C);for(var A=arguments.length===1,w=0,P=C.length;w<P;w++)A?this._off(C[w]):this._off(C[w],H,c)}return this},_on:function(C,H,c,h){if(typeof H!="function"){console.warn("wrong listener type: "+typeof H);return}if(this._listens(C,H,c)===!1){c===this&&(c=void 0);var A={fn:H,ctx:c};h&&(A.once=!0),this._events=this._events||{},this._events[C]=this._events[C]||[],this._events[C].push(A)}},_off:function(C,H,c){var h,A,w;if(this._events&&(h=this._events[C],!!h)){if(arguments.length===1){if(this._firingCount)for(A=0,w=h.length;A<w;A++)h[A].fn=l;delete this._events[C];return}if(typeof H!="function"){console.warn("wrong listener type: "+typeof H);return}var P=this._listens(C,H,c);if(P!==!1){var I=h[P];this._firingCount&&(I.fn=l,this._events[C]=h=h.slice()),h.splice(P,1)}}},fire:function(C,H,c){if(!this.listens(C,c))return this;var h=e({},H,{type:C,target:this,sourceTarget:H&&H.sourceTarget||this});if(this._events){var A=this._events[C];if(A){this._firingCount=this._firingCount+1||1;for(var w=0,P=A.length;w<P;w++){var I=A[w],N=I.fn;I.once&&this.off(C,N,I.ctx),N.call(I.ctx||this,h)}this._firingCount--}}return c&&this._propagateEvent(h),this},listens:function(C,H,c,h){typeof C!="string"&&console.warn('"string" type argument expected');var A=H;typeof H!="function"&&(h=!!H,A=void 0,c=void 0);var w=this._events&&this._events[C];if(w&&w.length&&this._listens(C,A,c)!==!1)return!0;if(h){for(var P in this._eventParents)if(this._eventParents[P].listens(C,H,c,h))return!0}return!1},_listens:function(C,H,c){if(!this._events)return!1;var h=this._events[C]||[];if(!H)return!!h.length;c===this&&(c=void 0);for(var A=0,w=h.length;A<w;A++)if(h[A].fn===H&&h[A].ctx===c)return A;return!1},once:function(C,H,c){if(typeof C=="object")for(var h in C)this._on(h,C[h],H,!0);else{C=f(C);for(var A=0,w=C.length;A<w;A++)this._on(C[A],H,c,!0)}return this},addEventParent:function(C){return this._eventParents=this._eventParents||{},this._eventParents[n(C)]=C,this},removeEventParent:function(C){return this._eventParents&&delete this._eventParents[n(C)],this},_propagateEvent:function(C){for(var H in this._eventParents)this._eventParents[H].fire(C.type,e({layer:C.target,propagatedFrom:C.target},C),!0)}};G1.addEventListener=G1.on,G1.removeEventListener=G1.clearAllEventListeners=G1.off,G1.addOneTimeEventListener=G1.once,G1.fireEvent=G1.fire,G1.hasEventListeners=G1.listens;var T1=A1.extend(G1);function t1(C,H,c){this.x=c?Math.round(C):C,this.y=c?Math.round(H):H}var J1=Math.trunc||function(C){return C>0?Math.floor(C):Math.ceil(C)};t1.prototype={clone:function(){return new t1(this.x,this.y)},add:function(C){return this.clone()._add(V1(C))},_add:function(C){return this.x+=C.x,this.y+=C.y,this},subtract:function(C){return this.clone()._subtract(V1(C))},_subtract:function(C){return this.x-=C.x,this.y-=C.y,this},divideBy:function(C){return this.clone()._divideBy(C)},_divideBy:function(C){return this.x/=C,this.y/=C,this},multiplyBy:function(C){return this.clone()._multiplyBy(C)},_multiplyBy:function(C){return this.x*=C,this.y*=C,this},scaleBy:function(C){return new t1(this.x*C.x,this.y*C.y)},unscaleBy:function(C){return new t1(this.x/C.x,this.y/C.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=J1(this.x),this.y=J1(this.y),this},distanceTo:function(C){C=V1(C);var H=C.x-this.x,c=C.y-this.y;return Math.sqrt(H*H+c*c)},equals:function(C){return C=V1(C),C.x===this.x&&C.y===this.y},contains:function(C){return C=V1(C),Math.abs(C.x)<=Math.abs(this.x)&&Math.abs(C.y)<=Math.abs(this.y)},toString:function(){return"Point("+M(this.x)+", "+M(this.y)+")"}};function V1(C,H,c){return C instanceof t1?C:T(C)?new t1(C[0],C[1]):C==null?C:typeof C=="object"&&"x"in C&&"y"in C?new t1(C.x,C.y):new t1(C,H,c)}function j(C,H){if(C)for(var c=H?[C,H]:C,h=0,A=c.length;h<A;h++)this.extend(c[h])}j.prototype={extend:function(C){var H,c;if(!C)return this;if(C instanceof t1||typeof C[0]=="number"||"x"in C)H=c=V1(C);else if(C=a1(C),H=C.min,c=C.max,!H||!c)return this;return!this.min&&!this.max?(this.min=H.clone(),this.max=c.clone()):(this.min.x=Math.min(H.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(H.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(C){return V1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,C)},getBottomLeft:function(){return V1(this.min.x,this.max.y)},getTopRight:function(){return V1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(C){var H,c;return typeof C[0]=="number"||C instanceof t1?C=V1(C):C=a1(C),C instanceof j?(H=C.min,c=C.max):H=c=C,H.x>=this.min.x&&c.x<=this.max.x&&H.y>=this.min.y&&c.y<=this.max.y},intersects:function(C){C=a1(C);var H=this.min,c=this.max,h=C.min,A=C.max,w=A.x>=H.x&&h.x<=c.x,P=A.y>=H.y&&h.y<=c.y;return w&&P},overlaps:function(C){C=a1(C);var H=this.min,c=this.max,h=C.min,A=C.max,w=A.x>H.x&&h.x<c.x,P=A.y>H.y&&h.y<c.y;return w&&P},isValid:function(){return!!(this.min&&this.max)},pad:function(C){var H=this.min,c=this.max,h=Math.abs(H.x-c.x)*C,A=Math.abs(H.y-c.y)*C;return a1(V1(H.x-h,H.y-A),V1(c.x+h,c.y+A))},equals:function(C){return C?(C=a1(C),this.min.equals(C.getTopLeft())&&this.max.equals(C.getBottomRight())):!1}};function a1(C,H){return!C||C instanceof j?C:new j(C,H)}function L1(C,H){if(C)for(var c=H?[C,H]:C,h=0,A=c.length;h<A;h++)this.extend(c[h])}L1.prototype={extend:function(C){var H=this._southWest,c=this._northEast,h,A;if(C instanceof c1)h=C,A=C;else if(C instanceof L1){if(h=C._southWest,A=C._northEast,!h||!A)return this}else return C?this.extend(M1(C)||m1(C)):this;return!H&&!c?(this._southWest=new c1(h.lat,h.lng),this._northEast=new c1(A.lat,A.lng)):(H.lat=Math.min(h.lat,H.lat),H.lng=Math.min(h.lng,H.lng),c.lat=Math.max(A.lat,c.lat),c.lng=Math.max(A.lng,c.lng)),this},pad:function(C){var H=this._southWest,c=this._northEast,h=Math.abs(H.lat-c.lat)*C,A=Math.abs(H.lng-c.lng)*C;return new L1(new c1(H.lat-h,H.lng-A),new c1(c.lat+h,c.lng+A))},getCenter:function(){return new c1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new c1(this.getNorth(),this.getWest())},getSouthEast:function(){return new c1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(C){typeof C[0]=="number"||C instanceof c1||"lat"in C?C=M1(C):C=m1(C);var H=this._southWest,c=this._northEast,h,A;return C instanceof L1?(h=C.getSouthWest(),A=C.getNorthEast()):h=A=C,h.lat>=H.lat&&A.lat<=c.lat&&h.lng>=H.lng&&A.lng<=c.lng},intersects:function(C){C=m1(C);var H=this._southWest,c=this._northEast,h=C.getSouthWest(),A=C.getNorthEast(),w=A.lat>=H.lat&&h.lat<=c.lat,P=A.lng>=H.lng&&h.lng<=c.lng;return w&&P},overlaps:function(C){C=m1(C);var H=this._southWest,c=this._northEast,h=C.getSouthWest(),A=C.getNorthEast(),w=A.lat>H.lat&&h.lat<c.lat,P=A.lng>H.lng&&h.lng<c.lng;return w&&P},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(C,H){return C?(C=m1(C),this._southWest.equals(C.getSouthWest(),H)&&this._northEast.equals(C.getNorthEast(),H)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function m1(C,H){return C instanceof L1?C:new L1(C,H)}function c1(C,H,c){if(isNaN(C)||isNaN(H))throw new Error("Invalid LatLng object: ("+C+", "+H+")");this.lat=+C,this.lng=+H,c!==void 0&&(this.alt=+c)}c1.prototype={equals:function(C,H){if(!C)return!1;C=M1(C);var c=Math.max(Math.abs(this.lat-C.lat),Math.abs(this.lng-C.lng));return c<=(H===void 0?1e-9:H)},toString:function(C){return"LatLng("+M(this.lat,C)+", "+M(this.lng,C)+")"},distanceTo:function(C){return P1.distance(this,M1(C))},wrap:function(){return P1.wrapLatLng(this)},toBounds:function(C){var H=180*C/40075017,c=H/Math.cos(Math.PI/180*this.lat);return m1([this.lat-H,this.lng-c],[this.lat+H,this.lng+c])},clone:function(){return new c1(this.lat,this.lng,this.alt)}};function M1(C,H,c){return C instanceof c1?C:T(C)&&typeof C[0]!="object"?C.length===3?new c1(C[0],C[1],C[2]):C.length===2?new c1(C[0],C[1]):null:C==null?C:typeof C=="object"&&"lat"in C?new c1(C.lat,"lng"in C?C.lng:C.lon,C.alt):H===void 0?null:new c1(C,H,c)}var b1={latLngToPoint:function(C,H){var c=this.projection.project(C),h=this.scale(H);return this.transformation._transform(c,h)},pointToLatLng:function(C,H){var c=this.scale(H),h=this.transformation.untransform(C,c);return this.projection.unproject(h)},project:function(C){return this.projection.project(C)},unproject:function(C){return this.projection.unproject(C)},scale:function(C){return 256*Math.pow(2,C)},zoom:function(C){return Math.log(C/256)/Math.LN2},getProjectedBounds:function(C){if(this.infinite)return null;var H=this.projection.bounds,c=this.scale(C),h=this.transformation.transform(H.min,c),A=this.transformation.transform(H.max,c);return new j(h,A)},infinite:!1,wrapLatLng:function(C){var H=this.wrapLng?V(C.lng,this.wrapLng,!0):C.lng,c=this.wrapLat?V(C.lat,this.wrapLat,!0):C.lat,h=C.alt;return new c1(c,H,h)},wrapLatLngBounds:function(C){var H=C.getCenter(),c=this.wrapLatLng(H),h=H.lat-c.lat,A=H.lng-c.lng;if(h===0&&A===0)return C;var w=C.getSouthWest(),P=C.getNorthEast(),I=new c1(w.lat-h,w.lng-A),N=new c1(P.lat-h,P.lng-A);return new L1(I,N)}},P1=e({},b1,{wrapLng:[-180,180],R:6371e3,distance:function(C,H){var c=Math.PI/180,h=C.lat*c,A=H.lat*c,w=Math.sin((H.lat-C.lat)*c/2),P=Math.sin((H.lng-C.lng)*c/2),I=w*w+Math.cos(h)*Math.cos(A)*P*P,N=2*Math.atan2(Math.sqrt(I),Math.sqrt(1-I));return this.R*N}}),h2=6378137,g2={R:h2,MAX_LATITUDE:85.0511287798,project:function(C){var H=Math.PI/180,c=this.MAX_LATITUDE,h=Math.max(Math.min(c,C.lat),-c),A=Math.sin(h*H);return new t1(this.R*C.lng*H,this.R*Math.log((1+A)/(1-A))/2)},unproject:function(C){var H=180/Math.PI;return new c1((2*Math.atan(Math.exp(C.y/this.R))-Math.PI/2)*H,C.x*H/this.R)},bounds:(function(){var C=h2*Math.PI;return new j([-C,-C],[C,C])})()};function R2(C,H,c,h){if(T(C)){this._a=C[0],this._b=C[1],this._c=C[2],this._d=C[3];return}this._a=C,this._b=H,this._c=c,this._d=h}R2.prototype={transform:function(C,H){return this._transform(C.clone(),H)},_transform:function(C,H){return H=H||1,C.x=H*(this._a*C.x+this._b),C.y=H*(this._c*C.y+this._d),C},untransform:function(C,H){return H=H||1,new t1((C.x/H-this._b)/this._a,(C.y/H-this._d)/this._c)}};function c2(C,H,c,h){return new R2(C,H,c,h)}var H1=e({},P1,{code:"EPSG:3857",projection:g2,transformation:(function(){var C=.5/(Math.PI*g2.R);return c2(C,.5,-C,.5)})()}),C5=e({},H1,{code:"EPSG:900913"});function Q2(C){return document.createElementNS("http://www.w3.org/2000/svg",C)}function w5(C,H){var c="",h,A,w,P,I,N;for(h=0,w=C.length;h<w;h++){for(I=C[h],A=0,P=I.length;A<P;A++)N=I[A],c+=(A?"L":"M")+N.x+" "+N.y;c+=H?h1.svg?"z":"x":""}return c||"M0 0"}var D2=document.documentElement.style,_2="ActiveXObject"in window,M5=_2&&!document.addEventListener,d5="msLaunchUri"in navigator&&!("documentMode"in document),r2=b5("webkit"),b2=b5("android"),Q0=b5("android 2")||b5("android 3"),te=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ee=b2&&b5("Google")&&te<537&&!("AudioNode"in window),m7=!!window.opera,$3=!d5&&b5("chrome"),l6=b5("gecko")&&!r2&&!m7&&!_2,c6=!$3&&b5("safari"),f4=b5("phantom"),M6="OTransition"in D2,d6=navigator.platform.indexOf("Win")===0,f7=_2&&"transition"in D2,A7="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Q0,K0="MozPerspective"in D2,p6=!window.L_DISABLE_3D&&(f7||A7||K0)&&!M6&&!f4,q=typeof orientation<"u"||b5("mobile"),u6=q&&r2,A4=q&&A7,F3=!window.PointerEvent&&window.MSPointerEvent,h6=!!(window.PointerEvent||F3),v4="ontouchstart"in window||!!window.TouchEvent,re=!window.L_NO_TOUCH&&(v4||h6),Ei=q&&m7,ie=q&&l6,oe=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ae=(function(){var C=!1;try{var H=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("testPassiveEventSupport",l,H),window.removeEventListener("testPassiveEventSupport",l,H)}catch{}return C})(),Ce=(function(){return!!document.createElement("canvas").getContext})(),v7=!!(document.createElementNS&&Q2("svg").createSVGRect),m6=!!v7&&(function(){var C=document.createElement("div");return C.innerHTML="<svg/>",(C.firstChild&&C.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),ne=!v7&&(function(){try{var C=document.createElement("div");C.innerHTML='<v:shape adj="1"/>';var H=C.firstChild;return H.style.behavior="url(#default#VML)",H&&typeof H.adj=="object"}catch{return!1}})(),x4=navigator.platform.indexOf("Mac")===0,se=navigator.platform.indexOf("Linux")===0;function b5(C){return navigator.userAgent.toLowerCase().indexOf(C)>=0}var h1={ie:_2,ielt9:M5,edge:d5,webkit:r2,android:b2,android23:Q0,androidStock:ee,opera:m7,chrome:$3,gecko:l6,safari:c6,phantom:f4,opera12:M6,win:d6,ie3d:f7,webkit3d:A7,gecko3d:K0,any3d:p6,mobile:q,mobileWebkit:u6,mobileWebkit3d:A4,msPointer:F3,pointer:h6,touch:re,touchNative:v4,mobileOpera:Ei,mobileGecko:ie,retina:oe,passiveEvents:ae,canvas:Ce,svg:v7,vml:ne,inlineSvg:m6,mac:x4,linux:se},f6=h1.msPointer?"MSPointerDown":"pointerdown",A6=h1.msPointer?"MSPointerMove":"pointermove",x7=h1.msPointer?"MSPointerUp":"pointerup",X0=h1.msPointer?"MSPointerCancel":"pointercancel",R3={touchstart:f6,touchmove:A6,touchend:x7,touchcancel:X0},g4={touchstart:v,touchmove:p,touchend:p,touchcancel:p},S5={},_4=!1;function v6(C,H,c){return H==="touchstart"&&m(),g4[H]?(c=g4[H].bind(this,c),C.addEventListener(R3[H],c,!1),c):(console.warn("wrong event specified:",H),l)}function x6(C,H,c){if(!R3[H]){console.warn("wrong event specified:",H);return}C.removeEventListener(R3[H],c,!1)}function He(C){S5[C.pointerId]=C}function g6(C){S5[C.pointerId]&&(S5[C.pointerId]=C)}function d(C){delete S5[C.pointerId]}function m(){_4||(document.addEventListener(f6,He,!0),document.addEventListener(A6,g6,!0),document.addEventListener(x7,d,!0),document.addEventListener(X0,d,!0),_4=!0)}function p(C,H){if(H.pointerType!==(H.MSPOINTER_TYPE_MOUSE||"mouse")){H.touches=[];for(var c in S5)H.touches.push(S5[c]);H.changedTouches=[H],C(H)}}function v(C,H){H.MSPOINTER_TYPE_TOUCH&&H.pointerType===H.MSPOINTER_TYPE_TOUCH&&d2(H),p(C,H)}function _(C){var H={},c,h;for(h in C)c=C[h],H[h]=c&&c.bind?c.bind(C):c;return C=H,H.type="dblclick",H.detail=2,H.isTrusted=!1,H._simulated=!0,H}var Z=200;function y(C,H){C.addEventListener("dblclick",H);var c=0,h;function A(w){if(w.detail!==1){h=w.detail;return}if(!(w.pointerType==="mouse"||w.sourceCapabilities&&!w.sourceCapabilities.firesTouchEvents)){var P=_7(w);if(!(P.some(function(N){return N instanceof HTMLLabelElement&&N.attributes.for})&&!P.some(function(N){return N instanceof HTMLInputElement||N instanceof HTMLSelectElement}))){var I=Date.now();I-c<=Z?(h++,h===2&&H(_(w))):h=1,c=I}}}return C.addEventListener("click",A),{dblclick:H,simDblclick:A}}function E(C,H){C.removeEventListener("dblclick",H.dblclick),C.removeEventListener("click",H.simDblclick)}var B=v2(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),W=v2(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),z=W==="webkitTransition"||W==="OTransition"?W+"End":"transitionend";function o1(C){return typeof C=="string"?document.getElementById(C):C}function l1(C,H){var c=C.style[H]||C.currentStyle&&C.currentStyle[H];if((!c||c==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(C,null);c=h?h[H]:null}return c==="auto"?null:c}function R(C,H,c){var h=document.createElement(C);return h.className=H||"",c&&c.appendChild(h),h}function p1(C){var H=C.parentNode;H&&H.removeChild(C)}function K1(C){for(;C.firstChild;)C.removeChild(C.firstChild)}function R1(C){var H=C.parentNode;H&&H.lastChild!==C&&H.appendChild(C)}function D1(C){var H=C.parentNode;H&&H.firstChild!==C&&H.insertBefore(C,H.firstChild)}function X1(C,H){if(C.classList!==void 0)return C.classList.contains(H);var c=p5(C);return c.length>0&&new RegExp("(^|\\s)"+H+"(\\s|$)").test(c)}function u1(C,H){if(C.classList!==void 0)for(var c=f(H),h=0,A=c.length;h<A;h++)C.classList.add(c[h]);else if(!X1(C,H)){var w=p5(C);H0(C,(w?w+" ":"")+H)}}function B1(C,H){C.classList!==void 0?C.classList.remove(H):H0(C,u((" "+p5(C)+" ").replace(" "+H+" "," ")))}function H0(C,H){C.className.baseVal===void 0?C.className=H:C.className.baseVal=H}function p5(C){return C.correspondingElement&&(C=C.correspondingElement),C.className.baseVal===void 0?C.className:C.className.baseVal}function B2(C,H){"opacity"in C.style?C.style.opacity=H:"filter"in C.style&&W5(C,H)}function W5(C,H){var c=!1,h="DXImageTransform.Microsoft.Alpha";try{c=C.filters.item(h)}catch{if(H===1)return}H=Math.round(H*100),c?(c.Enabled=H!==100,c.Opacity=H):C.style.filter+=" progid:"+h+"(opacity="+H+")"}function v2(C){for(var H=document.documentElement.style,c=0;c<C.length;c++)if(C[c]in H)return C[c];return!1}function m2(C,H,c){var h=H||new t1(0,0);C.style[B]=(h1.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(c?" scale("+c+")":"")}function t2(C,H){C._leaflet_pos=H,h1.any3d?m2(C,H):(C.style.left=H.x+"px",C.style.top=H.y+"px")}function U2(C){return C._leaflet_pos||new t1(0,0)}var S2,u5,V0;if("onselectstart"in document)S2=function(){v1(window,"selectstart",d2)},u5=function(){j1(window,"selectstart",d2)};else{var U5=v2(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);S2=function(){if(U5){var C=document.documentElement.style;V0=C[U5],C[U5]="none"}},u5=function(){U5&&(document.documentElement.style[U5]=V0,V0=void 0)}}function L0(){v1(window,"dragstart",d2)}function l0(){j1(window,"dragstart",d2)}var J0,y2;function c0(C){for(;C.tabIndex===-1;)C=C.parentNode;C.style&&(y5(),J0=C,y2=C.style.outlineStyle,C.style.outlineStyle="none",v1(window,"keydown",y5))}function y5(){J0&&(J0.style.outlineStyle=y2,J0=void 0,y2=void 0,j1(window,"keydown",y5))}function g7(C){do C=C.parentNode;while((!C.offsetWidth||!C.offsetHeight)&&C!==document.body);return C}function D3(C){var H=C.getBoundingClientRect();return{x:H.width/C.offsetWidth||1,y:H.height/C.offsetHeight||1,boundingClientRect:H}}var B3={__proto__:null,TRANSFORM:B,TRANSITION:W,TRANSITION_END:z,get:o1,getStyle:l1,create:R,remove:p1,empty:K1,toFront:R1,toBack:D1,hasClass:X1,addClass:u1,removeClass:B1,setClass:H0,getClass:p5,setOpacity:B2,testProp:v2,setTransform:m2,setPosition:t2,getPosition:U2,get disableTextSelection(){return S2},get enableTextSelection(){return u5},disableImageDrag:L0,enableImageDrag:l0,preventOutline:c0,restoreOutline:y5,getSizedParentNode:g7,getScale:D3};function v1(C,H,c,h){if(H&&typeof H=="object")for(var A in H)S0(C,A,H[A],c);else{H=f(H);for(var w=0,P=H.length;w<P;w++)S0(C,H[w],c,h)}return this}var z2="_leaflet_events";function j1(C,H,c,h){if(arguments.length===1)j5(C),delete C[z2];else if(H&&typeof H=="object")for(var A in H)d0(C,A,H[A],c);else if(H=f(H),arguments.length===2)j5(C,function(I){return $(H,I)!==-1});else for(var w=0,P=H.length;w<P;w++)d0(C,H[w],c,h);return this}function j5(C,H){for(var c in C[z2]){var h=c.split(/\d/)[0];(!H||H(h))&&d0(C,h,null,null,c)}}var M0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function S0(C,H,c,h){var A=H+n(c)+(h?"_"+n(h):"");if(C[z2]&&C[z2][A])return this;var w=function(I){return c.call(h||C,I||window.event)},P=w;!h1.touchNative&&h1.pointer&&H.indexOf("touch")===0?w=v6(C,H,w):h1.touch&&H==="dblclick"?w=y(C,w):"addEventListener"in C?H==="touchstart"||H==="touchmove"||H==="wheel"||H==="mousewheel"?C.addEventListener(M0[H]||H,w,h1.passiveEvents?{passive:!1}:!1):H==="mouseenter"||H==="mouseleave"?(w=function(I){I=I||window.event,k2(C,I)&&P(I)},C.addEventListener(M0[H],w,!1)):C.addEventListener(H,P,!1):C.attachEvent("on"+H,w),C[z2]=C[z2]||{},C[z2][A]=w}function d0(C,H,c,h,A){A=A||H+n(c)+(h?"_"+n(h):"");var w=C[z2]&&C[z2][A];if(!w)return this;!h1.touchNative&&h1.pointer&&H.indexOf("touch")===0?x6(C,H,w):h1.touch&&H==="dblclick"?E(C,w):"removeEventListener"in C?C.removeEventListener(M0[H]||H,w,!1):C.detachEvent("on"+H,w),C[z2][A]=null}function K2(C){return C.stopPropagation?C.stopPropagation():C.originalEvent?C.originalEvent._stopped=!0:C.cancelBubble=!0,this}function M2(C){return S0(C,"wheel",K2),this}function n5(C){return v1(C,"mousedown touchstart dblclick contextmenu",K2),C._leaflet_disable_click=!0,this}function d2(C){return C.preventDefault?C.preventDefault():C.returnValue=!1,this}function G5(C){return d2(C),K2(C),this}function _7(C){if(C.composedPath)return C.composedPath();for(var H=[],c=C.target;c;)H.push(c),c=c.parentNode;return H}function g1(C,H){if(!H)return new t1(C.clientX,C.clientY);var c=D3(H),h=c.boundingClientRect;return new t1((C.clientX-h.left)/c.x-H.clientLeft,(C.clientY-h.top)/c.y-H.clientTop)}var N1=h1.linux&&h1.chrome?window.devicePixelRatio:h1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Z2(C){return h1.edge?C.wheelDeltaY/2:C.deltaY&&C.deltaMode===0?-C.deltaY/N1:C.deltaY&&C.deltaMode===1?-C.deltaY*20:C.deltaY&&C.deltaMode===2?-C.deltaY*60:C.deltaX||C.deltaZ?0:C.wheelDelta?(C.wheelDeltaY||C.wheelDelta)/2:C.detail&&Math.abs(C.detail)<32765?-C.detail*20:C.detail?C.detail/-32765*60:0}function k2(C,H){var c=H.relatedTarget;if(!c)return!0;try{for(;c&&c!==C;)c=c.parentNode}catch{return!1}return c!==C}var s5={__proto__:null,on:v1,off:j1,stopPropagation:K2,disableScrollPropagation:M2,disableClickPropagation:n5,preventDefault:d2,stop:G5,getPropagationPath:_7,getMousePosition:g1,getWheelDelta:Z2,isExternalTarget:k2,addListener:v1,removeListener:j1},Z5=T1.extend({run:function(C,H,c,h){this.stop(),this._el=C,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=U2(C),this._offset=H.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=i1(this._animate,this),this._step()},_step:function(C){var H=+new Date-this._startTime,c=this._duration*1e3;H<c?this._runFrame(this._easeOut(H/c),C):(this._runFrame(1),this._complete())},_runFrame:function(C,H){var c=this._startPos.add(this._offset.multiplyBy(C));H&&c._round(),t2(this._el,c),this.fire("step")},_complete:function(){d1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(C){return 1-Math.pow(1-C,this._easeOutPower)}}),S1=T1.extend({options:{crs:H1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(C,H){H=g(this,H),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(C),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),H.maxBounds&&this.setMaxBounds(H.maxBounds),H.zoom!==void 0&&(this._zoom=this._limitZoom(H.zoom)),H.center&&H.zoom!==void 0&&this.setView(M1(H.center),H.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=W&&h1.any3d&&!h1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),v1(this._proxy,z,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(C,H,c){if(H=H===void 0?this._zoom:this._limitZoom(H),C=this._limitCenter(M1(C),H,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=e({animate:c.animate},c.zoom),c.pan=e({animate:c.animate,duration:c.duration},c.pan));var h=this._zoom!==H?this._tryAnimatedZoom&&this._tryAnimatedZoom(C,H,c.zoom):this._tryAnimatedPan(C,c.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(C,H,c.pan&&c.pan.noMoveStart),this},setZoom:function(C,H){return this._loaded?this.setView(this.getCenter(),C,{zoom:H}):(this._zoom=C,this)},zoomIn:function(C,H){return C=C||(h1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+C,H)},zoomOut:function(C,H){return C=C||(h1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-C,H)},setZoomAround:function(C,H,c){var h=this.getZoomScale(H),A=this.getSize().divideBy(2),w=C instanceof t1?C:this.latLngToContainerPoint(C),P=w.subtract(A).multiplyBy(1-1/h),I=this.containerPointToLatLng(A.add(P));return this.setView(I,H,{zoom:c})},_getBoundsCenterZoom:function(C,H){H=H||{},C=C.getBounds?C.getBounds():m1(C);var c=V1(H.paddingTopLeft||H.padding||[0,0]),h=V1(H.paddingBottomRight||H.padding||[0,0]),A=this.getBoundsZoom(C,!1,c.add(h));if(A=typeof H.maxZoom=="number"?Math.min(H.maxZoom,A):A,A===1/0)return{center:C.getCenter(),zoom:A};var w=h.subtract(c).divideBy(2),P=this.project(C.getSouthWest(),A),I=this.project(C.getNorthEast(),A),N=this.unproject(P.add(I).divideBy(2).add(w),A);return{center:N,zoom:A}},fitBounds:function(C,H){if(C=m1(C),!C.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(C,H);return this.setView(c.center,c.zoom,H)},fitWorld:function(C){return this.fitBounds([[-90,-180],[90,180]],C)},panTo:function(C,H){return this.setView(C,this._zoom,{pan:H})},panBy:function(C,H){if(C=V1(C).round(),H=H||{},!C.x&&!C.y)return this.fire("moveend");if(H.animate!==!0&&!this.getSize().contains(C))return this._resetView(this.unproject(this.project(this.getCenter()).add(C)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Z5,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),H.noMoveStart||this.fire("movestart"),H.animate!==!1){u1(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(C).round();this._panAnim.run(this._mapPane,c,H.duration||.25,H.easeLinearity)}else this._rawPanBy(C),this.fire("move").fire("moveend");return this},flyTo:function(C,H,c){if(c=c||{},c.animate===!1||!h1.any3d)return this.setView(C,H,c);this._stop();var h=this.project(this.getCenter()),A=this.project(C),w=this.getSize(),P=this._zoom;C=M1(C),H=H===void 0?P:H;var I=Math.max(w.x,w.y),N=I*this.getZoomScale(P,H),G=A.distanceTo(h)||1,n1=1.42,x1=n1*n1;function E1(x2){var R6=x2?-1:1,ML=x2?N:I,dL=N*N-I*I+R6*x1*x1*G*G,pL=2*ML*x1*G,me=dL/pL,Lo=Math.sqrt(me*me+1)-me,uL=Lo<1e-9?-18:Math.log(Lo);return uL}function t5(x2){return(Math.exp(x2)-Math.exp(-x2))/2}function O2(x2){return(Math.exp(x2)+Math.exp(-x2))/2}function T5(x2){return t5(x2)/O2(x2)}var V5=E1(0);function k7(x2){return I*(O2(V5)/O2(V5+n1*x2))}function VL(x2){return I*(O2(V5)*T5(V5+n1*x2)-t5(V5))/x1}function LL(x2){return 1-Math.pow(1-x2,1.5)}var lL=Date.now(),Ho=(E1(1)-V5)/n1,cL=c.duration?1e3*c.duration:1e3*Ho*.8;function Vo(){var x2=(Date.now()-lL)/cL,R6=LL(x2)*Ho;x2<=1?(this._flyToFrame=i1(Vo,this),this._move(this.unproject(h.add(A.subtract(h).multiplyBy(VL(R6)/G)),P),this.getScaleZoom(I/k7(R6),P),{flyTo:!0})):this._move(C,H)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),Vo.call(this),this},flyToBounds:function(C,H){var c=this._getBoundsCenterZoom(C,H);return this.flyTo(c.center,c.zoom,H)},setMaxBounds:function(C){return C=m1(C),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),C.isValid()?(this.options.maxBounds=C,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(C){var H=this.options.minZoom;return this.options.minZoom=C,this._loaded&&H!==C&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(C):this},setMaxZoom:function(C){var H=this.options.maxZoom;return this.options.maxZoom=C,this._loaded&&H!==C&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(C):this},panInsideBounds:function(C,H){this._enforcingBounds=!0;var c=this.getCenter(),h=this._limitCenter(c,this._zoom,m1(C));return c.equals(h)||this.panTo(h,H),this._enforcingBounds=!1,this},panInside:function(C,H){H=H||{};var c=V1(H.paddingTopLeft||H.padding||[0,0]),h=V1(H.paddingBottomRight||H.padding||[0,0]),A=this.project(this.getCenter()),w=this.project(C),P=this.getPixelBounds(),I=a1([P.min.add(c),P.max.subtract(h)]),N=I.getSize();if(!I.contains(w)){this._enforcingBounds=!0;var G=w.subtract(I.getCenter()),n1=I.extend(w).getSize().subtract(N);A.x+=G.x<0?-n1.x:n1.x,A.y+=G.y<0?-n1.y:n1.y,this.panTo(this.unproject(A),H),this._enforcingBounds=!1}return this},invalidateSize:function(C){if(!this._loaded)return this;C=e({animate:!1,pan:!0},C===!0?{animate:!0}:C);var H=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),h=H.divideBy(2).round(),A=c.divideBy(2).round(),w=h.subtract(A);return!w.x&&!w.y?this:(C.animate&&C.pan?this.panBy(w):(C.pan&&this._rawPanBy(w),this.fire("move"),C.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:H,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(C){if(C=this._locateOptions=e({timeout:1e4,watch:!1},C),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var H=o(this._handleGeolocationResponse,this),c=o(this._handleGeolocationError,this);return C.watch?this._locationWatchId=navigator.geolocation.watchPosition(H,c,C):navigator.geolocation.getCurrentPosition(H,c,C),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(C){if(this._container._leaflet_id){var H=C.code,c=C.message||(H===1?"permission denied":H===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:H,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(C){if(this._container._leaflet_id){var H=C.coords.latitude,c=C.coords.longitude,h=new c1(H,c),A=h.toBounds(C.coords.accuracy*2),w=this._locateOptions;if(w.setView){var P=this.getBoundsZoom(A);this.setView(h,w.maxZoom?Math.min(P,w.maxZoom):P)}var I={latlng:h,bounds:A,timestamp:C.timestamp};for(var N in C.coords)typeof C.coords[N]=="number"&&(I[N]=C.coords[N]);this.fire("locationfound",I)}},addHandler:function(C,H){if(!H)return this;var c=this[C]=new H(this);return this._handlers.push(c),this.options[C]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),p1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(d1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var C;for(C in this._layers)this._layers[C].remove();for(C in this._panes)p1(this._panes[C]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(C,H){var c="leaflet-pane"+(C?" leaflet-"+C.replace("Pane","")+"-pane":""),h=R("div",c,H||this._mapPane);return C&&(this._panes[C]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var C=this.getPixelBounds(),H=this.unproject(C.getBottomLeft()),c=this.unproject(C.getTopRight());return new L1(H,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(C,H,c){C=m1(C),c=V1(c||[0,0]);var h=this.getZoom()||0,A=this.getMinZoom(),w=this.getMaxZoom(),P=C.getNorthWest(),I=C.getSouthEast(),N=this.getSize().subtract(c),G=a1(this.project(I,h),this.project(P,h)).getSize(),n1=h1.any3d?this.options.zoomSnap:1,x1=N.x/G.x,E1=N.y/G.y,t5=H?Math.max(x1,E1):Math.min(x1,E1);return h=this.getScaleZoom(t5,h),n1&&(h=Math.round(h/(n1/100))*(n1/100),h=H?Math.ceil(h/n1)*n1:Math.floor(h/n1)*n1),Math.max(A,Math.min(w,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new t1(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(C,H){var c=this._getTopLeftPoint(C,H);return new j(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(C){return this.options.crs.getProjectedBounds(C===void 0?this.getZoom():C)},getPane:function(C){return typeof C=="string"?this._panes[C]:C},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(C,H){var c=this.options.crs;return H=H===void 0?this._zoom:H,c.scale(C)/c.scale(H)},getScaleZoom:function(C,H){var c=this.options.crs;H=H===void 0?this._zoom:H;var h=c.zoom(C*c.scale(H));return isNaN(h)?1/0:h},project:function(C,H){return H=H===void 0?this._zoom:H,this.options.crs.latLngToPoint(M1(C),H)},unproject:function(C,H){return H=H===void 0?this._zoom:H,this.options.crs.pointToLatLng(V1(C),H)},layerPointToLatLng:function(C){var H=V1(C).add(this.getPixelOrigin());return this.unproject(H)},latLngToLayerPoint:function(C){var H=this.project(M1(C))._round();return H._subtract(this.getPixelOrigin())},wrapLatLng:function(C){return this.options.crs.wrapLatLng(M1(C))},wrapLatLngBounds:function(C){return this.options.crs.wrapLatLngBounds(m1(C))},distance:function(C,H){return this.options.crs.distance(M1(C),M1(H))},containerPointToLayerPoint:function(C){return V1(C).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(C){return V1(C).add(this._getMapPanePos())},containerPointToLatLng:function(C){var H=this.containerPointToLayerPoint(V1(C));return this.layerPointToLatLng(H)},latLngToContainerPoint:function(C){return this.layerPointToContainerPoint(this.latLngToLayerPoint(M1(C)))},mouseEventToContainerPoint:function(C){return g1(C,this._container)},mouseEventToLayerPoint:function(C){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(C))},mouseEventToLatLng:function(C){return this.layerPointToLatLng(this.mouseEventToLayerPoint(C))},_initContainer:function(C){var H=this._container=o1(C);if(H){if(H._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");v1(H,"scroll",this._onScroll,this),this._containerId=n(H)},_initLayout:function(){var C=this._container;this._fadeAnimated=this.options.fadeAnimation&&h1.any3d,u1(C,"leaflet-container"+(h1.touch?" leaflet-touch":"")+(h1.retina?" leaflet-retina":"")+(h1.ielt9?" leaflet-oldie":"")+(h1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var H=l1(C,"position");H!=="absolute"&&H!=="relative"&&H!=="fixed"&&H!=="sticky"&&(C.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var C=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),t2(this._mapPane,new t1(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(u1(C.markerPane,"leaflet-zoom-hide"),u1(C.shadowPane,"leaflet-zoom-hide"))},_resetView:function(C,H,c){t2(this._mapPane,new t1(0,0));var h=!this._loaded;this._loaded=!0,H=this._limitZoom(H),this.fire("viewprereset");var A=this._zoom!==H;this._moveStart(A,c)._move(C,H)._moveEnd(A),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(C,H){return C&&this.fire("zoomstart"),H||this.fire("movestart"),this},_move:function(C,H,c,h){H===void 0&&(H=this._zoom);var A=this._zoom!==H;return this._zoom=H,this._lastCenter=C,this._pixelOrigin=this._getNewPixelOrigin(C),h?c&&c.pinch&&this.fire("zoom",c):((A||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(C){return C&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return d1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(C){t2(this._mapPane,this._getMapPanePos().subtract(C))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(C){this._targets={},this._targets[n(this._container)]=this;var H=C?j1:v1;H(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&H(window,"resize",this._onResize,this),h1.any3d&&this.options.transform3DLimit&&(C?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){d1(this._resizeRequest),this._resizeRequest=i1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var C=this._getMapPanePos();Math.max(Math.abs(C.x),Math.abs(C.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(C,H){for(var c=[],h,A=H==="mouseout"||H==="mouseover",w=C.target||C.srcElement,P=!1;w;){if(h=this._targets[n(w)],h&&(H==="click"||H==="preclick")&&this._draggableMoved(h)){P=!0;break}if(h&&h.listens(H,!0)&&(A&&!k2(w,C)||(c.push(h),A))||w===this._container)break;w=w.parentNode}return!c.length&&!P&&!A&&this.listens(H,!0)&&(c=[this]),c},_isClickDisabled:function(C){for(;C&&C!==this._container;){if(C._leaflet_disable_click)return!0;C=C.parentNode}},_handleDOMEvent:function(C){var H=C.target||C.srcElement;if(!(!this._loaded||H._leaflet_disable_events||C.type==="click"&&this._isClickDisabled(H))){var c=C.type;c==="mousedown"&&c0(H),this._fireDOMEvent(C,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(C,H,c){if(C.type==="click"){var h=e({},C);h.type="preclick",this._fireDOMEvent(h,h.type,c)}var A=this._findEventTargets(C,H);if(c){for(var w=[],P=0;P<c.length;P++)c[P].listens(H,!0)&&w.push(c[P]);A=w.concat(A)}if(A.length){H==="contextmenu"&&d2(C);var I=A[0],N={originalEvent:C};if(C.type!=="keypress"&&C.type!=="keydown"&&C.type!=="keyup"){var G=I.getLatLng&&(!I._radius||I._radius<=10);N.containerPoint=G?this.latLngToContainerPoint(I.getLatLng()):this.mouseEventToContainerPoint(C),N.layerPoint=this.containerPointToLayerPoint(N.containerPoint),N.latlng=G?I.getLatLng():this.layerPointToLatLng(N.layerPoint)}for(P=0;P<A.length;P++)if(A[P].fire(H,N,!0),N.originalEvent._stopped||A[P].options.bubblingMouseEvents===!1&&$(this._mouseEvents,H)!==-1)return}},_draggableMoved:function(C){return C=C.dragging&&C.dragging.enabled()?C:this,C.dragging&&C.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var C=0,H=this._handlers.length;C<H;C++)this._handlers[C].disable()},whenReady:function(C,H){return this._loaded?C.call(H||this,{target:this}):this.on("load",C,H),this},_getMapPanePos:function(){return U2(this._mapPane)||new t1(0,0)},_moved:function(){var C=this._getMapPanePos();return C&&!C.equals([0,0])},_getTopLeftPoint:function(C,H){var c=C&&H!==void 0?this._getNewPixelOrigin(C,H):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(C,H){var c=this.getSize()._divideBy(2);return this.project(C,H)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(C,H,c){var h=this._getNewPixelOrigin(c,H);return this.project(C,H)._subtract(h)},_latLngBoundsToNewLayerBounds:function(C,H,c){var h=this._getNewPixelOrigin(c,H);return a1([this.project(C.getSouthWest(),H)._subtract(h),this.project(C.getNorthWest(),H)._subtract(h),this.project(C.getSouthEast(),H)._subtract(h),this.project(C.getNorthEast(),H)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(C){return this.latLngToLayerPoint(C).subtract(this._getCenterLayerPoint())},_limitCenter:function(C,H,c){if(!c)return C;var h=this.project(C,H),A=this.getSize().divideBy(2),w=new j(h.subtract(A),h.add(A)),P=this._getBoundsOffset(w,c,H);return Math.abs(P.x)<=1&&Math.abs(P.y)<=1?C:this.unproject(h.add(P),H)},_limitOffset:function(C,H){if(!H)return C;var c=this.getPixelBounds(),h=new j(c.min.add(C),c.max.add(C));return C.add(this._getBoundsOffset(h,H))},_getBoundsOffset:function(C,H,c){var h=a1(this.project(H.getNorthEast(),c),this.project(H.getSouthWest(),c)),A=h.min.subtract(C.min),w=h.max.subtract(C.max),P=this._rebound(A.x,-w.x),I=this._rebound(A.y,-w.y);return new t1(P,I)},_rebound:function(C,H){return C+H>0?Math.round(C-H)/2:Math.max(0,Math.ceil(C))-Math.max(0,Math.floor(H))},_limitZoom:function(C){var H=this.getMinZoom(),c=this.getMaxZoom(),h=h1.any3d?this.options.zoomSnap:1;return h&&(C=Math.round(C/h)*h),Math.max(H,Math.min(c,C))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){B1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(C,H){var c=this._getCenterOffset(C)._trunc();return(H&&H.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,H),!0)},_createAnimProxy:function(){var C=this._proxy=R("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(C),this.on("zoomanim",function(H){var c=B,h=this._proxy.style[c];m2(this._proxy,this.project(H.center,H.zoom),this.getZoomScale(H.zoom,1)),h===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){p1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var C=this.getCenter(),H=this.getZoom();m2(this._proxy,this.project(C,H),this.getZoomScale(H,1))},_catchTransitionEnd:function(C){this._animatingZoom&&C.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(C,H,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(H-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(H),A=this._getCenterOffset(C)._divideBy(1-1/h);return c.animate!==!0&&!this.getSize().contains(A)?!1:(i1(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(C,H,!0)},this),!0)},_animateZoom:function(C,H,c,h){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=C,this._animateToZoom=H,u1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:C,zoom:H,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&B1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function z3(C,H){return new S1(C,H)}var X2=A1.extend({options:{position:"topright"},initialize:function(C){g(this,C)},getPosition:function(){return this.options.position},setPosition:function(C){var H=this._map;return H&&H.removeControl(this),this.options.position=C,H&&H.addControl(this),this},getContainer:function(){return this._container},addTo:function(C){this.remove(),this._map=C;var H=this._container=this.onAdd(C),c=this.getPosition(),h=C._controlCorners[c];return u1(H,"leaflet-control"),c.indexOf("bottom")!==-1?h.insertBefore(H,h.firstChild):h.appendChild(H),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(p1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(C){this._map&&C&&C.screenX>0&&C.screenY>0&&this._map.getContainer().focus()}}),Y=function(C){return new X2(C)};S1.include({addControl:function(C){return C.addTo(this),this},removeControl:function(C){return C.remove(),this},_initControlPos:function(){var C=this._controlCorners={},H="leaflet-",c=this._controlContainer=R("div",H+"control-container",this._container);function h(A,w){var P=H+A+" "+H+w;C[A+w]=R("div",P,c)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var C in this._controlCorners)p1(this._controlCorners[C]);p1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var f1=X2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(C,H,c,h){return c<h?-1:h<c?1:0}},initialize:function(C,H,c){g(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in C)this._addLayer(C[h],h);for(h in H)this._addLayer(H[h],h,!0)},onAdd:function(C){this._initLayout(),this._update(),this._map=C,C.on("zoomend",this._checkDisabledLayers,this);for(var H=0;H<this._layers.length;H++)this._layers[H].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(C){return X2.prototype.addTo.call(this,C),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var C=0;C<this._layers.length;C++)this._layers[C].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(C,H){return this._addLayer(C,H),this._map?this._update():this},addOverlay:function(C,H){return this._addLayer(C,H,!0),this._map?this._update():this},removeLayer:function(C){C.off("add remove",this._onLayerChange,this);var H=this._getLayer(n(C));return H&&this._layers.splice(this._layers.indexOf(H),1),this._map?this._update():this},expand:function(){u1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var C=this._map.getSize().y-(this._container.offsetTop+50);return C<this._section.clientHeight?(u1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=C+"px"):B1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return B1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var C="leaflet-control-layers",H=this._container=R("div",C),c=this.options.collapsed;H.setAttribute("aria-haspopup",!0),n5(H),M2(H);var h=this._section=R("section",C+"-list");c&&(this._map.on("click",this.collapse,this),v1(H,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var A=this._layersLink=R("a",C+"-toggle",H);A.href="#",A.title="Layers",A.setAttribute("role","button"),v1(A,{keydown:function(w){w.keyCode===13&&this._expandSafely()},click:function(w){d2(w),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=R("div",C+"-base",h),this._separator=R("div",C+"-separator",h),this._overlaysList=R("div",C+"-overlays",h),H.appendChild(h)},_getLayer:function(C){for(var H=0;H<this._layers.length;H++)if(this._layers[H]&&n(this._layers[H].layer)===C)return this._layers[H]},_addLayer:function(C,H,c){this._map&&C.on("add remove",this._onLayerChange,this),this._layers.push({layer:C,name:H,overlay:c}),this.options.sortLayers&&this._layers.sort(o(function(h,A){return this.options.sortFunction(h.layer,A.layer,h.name,A.name)},this)),this.options.autoZIndex&&C.setZIndex&&(this._lastZIndex++,C.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;K1(this._baseLayersList),K1(this._overlaysList),this._layerControlInputs=[];var C,H,c,h,A=0;for(c=0;c<this._layers.length;c++)h=this._layers[c],this._addItem(h),H=H||h.overlay,C=C||!h.overlay,A+=h.overlay?0:1;return this.options.hideSingleBase&&(C=C&&A>1,this._baseLayersList.style.display=C?"":"none"),this._separator.style.display=H&&C?"":"none",this},_onLayerChange:function(C){this._handlingClick||this._update();var H=this._getLayer(n(C.target)),c=H.overlay?C.type==="add"?"overlayadd":"overlayremove":C.type==="add"?"baselayerchange":null;c&&this._map.fire(c,H)},_createRadioElement:function(C,H){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+C+'"'+(H?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=c,h.firstChild},_addItem:function(C){var H=document.createElement("label"),c=this._map.hasLayer(C.layer),h;C.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=c):h=this._createRadioElement("leaflet-base-layers_"+n(this),c),this._layerControlInputs.push(h),h.layerId=n(C.layer),v1(h,"click",this._onInputClick,this);var A=document.createElement("span");A.innerHTML=" "+C.name;var w=document.createElement("span");H.appendChild(w),w.appendChild(h),w.appendChild(A);var P=C.overlay?this._overlaysList:this._baseLayersList;return P.appendChild(H),this._checkDisabledLayers(),H},_onInputClick:function(){if(!this._preventClick){var C=this._layerControlInputs,H,c,h=[],A=[];this._handlingClick=!0;for(var w=C.length-1;w>=0;w--)H=C[w],c=this._getLayer(H.layerId).layer,H.checked?h.push(c):H.checked||A.push(c);for(w=0;w<A.length;w++)this._map.hasLayer(A[w])&&this._map.removeLayer(A[w]);for(w=0;w<h.length;w++)this._map.hasLayer(h[w])||this._map.addLayer(h[w]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var C=this._layerControlInputs,H,c,h=this._map.getZoom(),A=C.length-1;A>=0;A--)H=C[A],c=this._getLayer(H.layerId).layer,H.disabled=c.options.minZoom!==void 0&&h<c.options.minZoom||c.options.maxZoom!==void 0&&h>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var C=this._section;this._preventClick=!0,v1(C,"click",d2),this.expand();var H=this;setTimeout(function(){j1(C,"click",d2),H._preventClick=!1})}}),$1=function(C,H,c){return new f1(C,H,c)},z1=X2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(C){var H="leaflet-control-zoom",c=R("div",H+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,H+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,H+"-out",c,this._zoomOut),this._updateDisabled(),C.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(C){C.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(C){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(C.shiftKey?3:1))},_zoomOut:function(C){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(C.shiftKey?3:1))},_createButton:function(C,H,c,h,A){var w=R("a",c,h);return w.innerHTML=C,w.href="#",w.title=H,w.setAttribute("role","button"),w.setAttribute("aria-label",H),n5(w),v1(w,"click",G5),v1(w,"click",A,this),v1(w,"click",this._refocusOnMap,this),w},_updateDisabled:function(){var C=this._map,H="leaflet-disabled";B1(this._zoomInButton,H),B1(this._zoomOutButton,H),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||C._zoom===C.getMinZoom())&&(u1(this._zoomOutButton,H),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||C._zoom===C.getMaxZoom())&&(u1(this._zoomInButton,H),this._zoomInButton.setAttribute("aria-disabled","true"))}});S1.mergeOptions({zoomControl:!0}),S1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new z1,this.addControl(this.zoomControl))});var I2=function(C){return new z1(C)},J2=X2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(C){var H="leaflet-control-scale",c=R("div",H),h=this.options;return this._addScales(h,H+"-line",c),C.on(h.updateWhenIdle?"moveend":"move",this._update,this),C.whenReady(this._update,this),c},onRemove:function(C){C.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(C,H,c){C.metric&&(this._mScale=R("div",H,c)),C.imperial&&(this._iScale=R("div",H,c))},_update:function(){var C=this._map,H=C.getSize().y/2,c=C.distance(C.containerPointToLatLng([0,H]),C.containerPointToLatLng([this.options.maxWidth,H]));this._updateScales(c)},_updateScales:function(C){this.options.metric&&C&&this._updateMetric(C),this.options.imperial&&C&&this._updateImperial(C)},_updateMetric:function(C){var H=this._getRoundNum(C),c=H<1e3?H+" m":H/1e3+" km";this._updateScale(this._mScale,c,H/C)},_updateImperial:function(C){var H=C*3.2808399,c,h,A;H>5280?(c=H/5280,h=this._getRoundNum(c),this._updateScale(this._iScale,h+" mi",h/c)):(A=this._getRoundNum(H),this._updateScale(this._iScale,A+" ft",A/H))},_updateScale:function(C,H,c){C.style.width=Math.round(this.options.maxWidth*c)+"px",C.innerHTML=H},_getRoundNum:function(C){var H=Math.pow(10,(Math.floor(C)+"").length-1),c=C/H;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,H*c}}),q5=function(C){return new J2(C)},I3='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',N3=X2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(h1.inlineSvg?I3+" ":"")+"Leaflet</a>"},initialize:function(C){g(this,C),this._attributions={}},onAdd:function(C){C.attributionControl=this,this._container=R("div","leaflet-control-attribution"),n5(this._container);for(var H in C._layers)C._layers[H].getAttribution&&this.addAttribution(C._layers[H].getAttribution());return this._update(),C.on("layeradd",this._addAttribution,this),this._container},onRemove:function(C){C.off("layeradd",this._addAttribution,this)},_addAttribution:function(C){C.layer.getAttribution&&(this.addAttribution(C.layer.getAttribution()),C.layer.once("remove",function(){this.removeAttribution(C.layer.getAttribution())},this))},setPrefix:function(C){return this.options.prefix=C,this._update(),this},addAttribution:function(C){return C?(this._attributions[C]||(this._attributions[C]=0),this._attributions[C]++,this._update(),this):this},removeAttribution:function(C){return C?(this._attributions[C]&&(this._attributions[C]--,this._update()),this):this},_update:function(){if(this._map){var C=[];for(var H in this._attributions)this._attributions[H]&&C.push(H);var c=[];this.options.prefix&&c.push(this.options.prefix),C.length&&c.push(C.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});S1.mergeOptions({attributionControl:!0}),S1.addInitHook(function(){this.options.attributionControl&&new N3().addTo(this)});var h5=function(C){return new N3(C)};X2.Layers=f1,X2.Zoom=z1,X2.Scale=J2,X2.Attribution=N3,Y.layers=$1,Y.zoom=I2,Y.scale=q5,Y.attribution=h5;var H5=A1.extend({initialize:function(C){this._map=C},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});H5.addTo=function(C,H){return C.addHandler(H,this),this};var Ve={Events:G1},_6=h1.touch?"touchstart mousedown":"mousedown",k5=T1.extend({options:{clickTolerance:3},initialize:function(C,H,c,h){g(this,h),this._element=C,this._dragStartTarget=H||C,this._preventOutline=c},enable:function(){this._enabled||(v1(this._dragStartTarget,_6,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(k5._dragging===this&&this.finishDrag(!0),j1(this._dragStartTarget,_6,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(C){if(this._enabled&&(this._moved=!1,!X1(this._element,"leaflet-zoom-anim"))){if(C.touches&&C.touches.length!==1){k5._dragging===this&&this.finishDrag();return}if(!(k5._dragging||C.shiftKey||C.which!==1&&C.button!==1&&!C.touches)&&(k5._dragging=this,this._preventOutline&&c0(this._element),L0(),S2(),!this._moving)){this.fire("down");var H=C.touches?C.touches[0]:C,c=g7(this._element);this._startPoint=new t1(H.clientX,H.clientY),this._startPos=U2(this._element),this._parentScale=D3(c);var h=C.type==="mousedown";v1(document,h?"mousemove":"touchmove",this._onMove,this),v1(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(C){if(this._enabled){if(C.touches&&C.touches.length>1){this._moved=!0;return}var H=C.touches&&C.touches.length===1?C.touches[0]:C,c=new t1(H.clientX,H.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,d2(C),this._moved||(this.fire("dragstart"),this._moved=!0,u1(document.body,"leaflet-dragging"),this._lastTarget=C.target||C.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),u1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=C,this._updatePosition())}},_updatePosition:function(){var C={originalEvent:this._lastEvent};this.fire("predrag",C),t2(this._element,this._newPos),this.fire("drag",C)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(C){B1(document.body,"leaflet-dragging"),this._lastTarget&&(B1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),j1(document,"mousemove touchmove",this._onMove,this),j1(document,"mouseup touchend touchcancel",this._onUp,this),l0(),u5();var H=this._moved&&this._moving;this._moving=!1,k5._dragging=!1,H&&this.fire("dragend",{noInertia:C,distance:this._newPos.distanceTo(this._startPos)})}});function w6(C,H,c){var h,A=[1,4,2,8],w,P,I,N,G,n1,x1,E1;for(w=0,n1=C.length;w<n1;w++)C[w]._code=W3(C[w],H);for(I=0;I<4;I++){for(x1=A[I],h=[],w=0,n1=C.length,P=n1-1;w<n1;P=w++)N=C[w],G=C[P],N._code&x1?G._code&x1||(E1=b6(G,N,x1,H,c),E1._code=W3(E1,H),h.push(E1)):(G._code&x1&&(E1=b6(G,N,x1,H,c),E1._code=W3(E1,H),h.push(E1)),h.push(N));C=h}return C}function $i(C,H){var c,h,A,w,P,I,N,G,n1;if(!C||C.length===0)throw new Error("latlngs not passed");O5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var x1=M1([0,0]),E1=m1(C),t5=E1.getNorthWest().distanceTo(E1.getSouthWest())*E1.getNorthEast().distanceTo(E1.getNorthWest());t5<1700&&(x1=Le(C));var O2=C.length,T5=[];for(c=0;c<O2;c++){var V5=M1(C[c]);T5.push(H.project(M1([V5.lat-x1.lat,V5.lng-x1.lng])))}for(I=N=G=0,c=0,h=O2-1;c<O2;h=c++)A=T5[c],w=T5[h],P=A.y*w.x-w.y*A.x,N+=(A.x+w.x)*P,G+=(A.y+w.y)*P,I+=P*3;I===0?n1=T5[0]:n1=[N/I,G/I];var k7=H.unproject(V1(n1));return M1([k7.lat+x1.lat,k7.lng+x1.lng])}function Le(C){for(var H=0,c=0,h=0,A=0;A<C.length;A++){var w=M1(C[A]);H+=w.lat,c+=w.lng,h++}return M1([H/h,c/h])}var PV={__proto__:null,clipPolygon:w6,polygonCenter:$i,centroid:Le};function Fi(C,H){if(!H||!C.length)return C.slice();var c=H*H;return C=FV(C,c),C=$V(C,c),C}function Ri(C,H,c){return Math.sqrt(w4(C,H,c,!0))}function EV(C,H,c){return w4(C,H,c)}function $V(C,H){var c=C.length,h=typeof Uint8Array<"u"?Uint8Array:Array,A=new h(c);A[0]=A[c-1]=1,le(C,A,H,0,c-1);var w,P=[];for(w=0;w<c;w++)A[w]&&P.push(C[w]);return P}function le(C,H,c,h,A){var w=0,P,I,N;for(I=h+1;I<=A-1;I++)N=w4(C[I],C[h],C[A],!0),N>w&&(P=I,w=N);w>c&&(H[P]=1,le(C,H,c,h,P),le(C,H,c,P,A))}function FV(C,H){for(var c=[C[0]],h=1,A=0,w=C.length;h<w;h++)RV(C[h],C[A])>H&&(c.push(C[h]),A=h);return A<w-1&&c.push(C[w-1]),c}var Di;function Bi(C,H,c,h,A){var w=h?Di:W3(C,c),P=W3(H,c),I,N,G;for(Di=P;;){if(!(w|P))return[C,H];if(w&P)return!1;I=w||P,N=b6(C,H,I,c,A),G=W3(N,c),I===w?(C=N,w=G):(H=N,P=G)}}function b6(C,H,c,h,A){var w=H.x-C.x,P=H.y-C.y,I=h.min,N=h.max,G,n1;return c&8?(G=C.x+w*(N.y-C.y)/P,n1=N.y):c&4?(G=C.x+w*(I.y-C.y)/P,n1=I.y):c&2?(G=N.x,n1=C.y+P*(N.x-C.x)/w):c&1&&(G=I.x,n1=C.y+P*(I.x-C.x)/w),new t1(G,n1,A)}function W3(C,H){var c=0;return C.x<H.min.x?c|=1:C.x>H.max.x&&(c|=2),C.y<H.min.y?c|=4:C.y>H.max.y&&(c|=8),c}function RV(C,H){var c=H.x-C.x,h=H.y-C.y;return c*c+h*h}function w4(C,H,c,h){var A=H.x,w=H.y,P=c.x-A,I=c.y-w,N=P*P+I*I,G;return N>0&&(G=((C.x-A)*P+(C.y-w)*I)/N,G>1?(A=c.x,w=c.y):G>0&&(A+=P*G,w+=I*G)),P=C.x-A,I=C.y-w,h?P*P+I*I:new t1(A,w)}function O5(C){return!T(C[0])||typeof C[0][0]!="object"&&typeof C[0][0]<"u"}function zi(C){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),O5(C)}function Ii(C,H){var c,h,A,w,P,I,N,G;if(!C||C.length===0)throw new Error("latlngs not passed");O5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var n1=M1([0,0]),x1=m1(C),E1=x1.getNorthWest().distanceTo(x1.getSouthWest())*x1.getNorthEast().distanceTo(x1.getNorthWest());E1<1700&&(n1=Le(C));var t5=C.length,O2=[];for(c=0;c<t5;c++){var T5=M1(C[c]);O2.push(H.project(M1([T5.lat-n1.lat,T5.lng-n1.lng])))}for(c=0,h=0;c<t5-1;c++)h+=O2[c].distanceTo(O2[c+1])/2;if(h===0)G=O2[0];else for(c=0,w=0;c<t5-1;c++)if(P=O2[c],I=O2[c+1],A=P.distanceTo(I),w+=A,w>h){N=(w-h)/A,G=[I.x-N*(I.x-P.x),I.y-N*(I.y-P.y)];break}var V5=H.unproject(V1(G));return M1([V5.lat+n1.lat,V5.lng+n1.lng])}var DV={__proto__:null,simplify:Fi,pointToSegmentDistance:Ri,closestPointOnSegment:EV,clipSegment:Bi,_getEdgeIntersection:b6,_getBitCode:W3,_sqClosestPointOnSegment:w4,isFlat:O5,_flat:zi,polylineCenter:Ii},ce={project:function(C){return new t1(C.lng,C.lat)},unproject:function(C){return new c1(C.y,C.x)},bounds:new j([-180,-90],[180,90])},Me={R:6378137,R_MINOR:6356752314245179e-9,bounds:new j([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(C){var H=Math.PI/180,c=this.R,h=C.lat*H,A=this.R_MINOR/c,w=Math.sqrt(1-A*A),P=w*Math.sin(h),I=Math.tan(Math.PI/4-h/2)/Math.pow((1-P)/(1+P),w/2);return h=-c*Math.log(Math.max(I,1e-10)),new t1(C.lng*H*c,h)},unproject:function(C){for(var H=180/Math.PI,c=this.R,h=this.R_MINOR/c,A=Math.sqrt(1-h*h),w=Math.exp(-C.y/c),P=Math.PI/2-2*Math.atan(w),I=0,N=.1,G;I<15&&Math.abs(N)>1e-7;I++)G=A*Math.sin(P),G=Math.pow((1-G)/(1+G),A/2),N=Math.PI/2-2*Math.atan(w*G)-P,P+=N;return new c1(P*H,C.x*H/c)}},BV={__proto__:null,LonLat:ce,Mercator:Me,SphericalMercator:g2},zV=e({},P1,{code:"EPSG:3395",projection:Me,transformation:(function(){var C=.5/(Math.PI*Me.R);return c2(C,.5,-C,.5)})()}),Ni=e({},P1,{code:"EPSG:4326",projection:ce,transformation:c2(1/180,1,-1/180,.5)}),IV=e({},b1,{projection:ce,transformation:c2(1,0,-1,0),scale:function(C){return Math.pow(2,C)},zoom:function(C){return Math.log(C)/Math.LN2},distance:function(C,H){var c=H.lng-C.lng,h=H.lat-C.lat;return Math.sqrt(c*c+h*h)},infinite:!0});b1.Earth=P1,b1.EPSG3395=zV,b1.EPSG3857=H1,b1.EPSG900913=C5,b1.EPSG4326=Ni,b1.Simple=IV;var Y5=T1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(C){return C.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(C){return C&&C.removeLayer(this),this},getPane:function(C){return this._map.getPane(C?this.options[C]||C:this.options.pane)},addInteractiveTarget:function(C){return this._map._targets[n(C)]=this,this},removeInteractiveTarget:function(C){return delete this._map._targets[n(C)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(C){var H=C.target;if(H.hasLayer(this)){if(this._map=H,this._zoomAnimated=H._zoomAnimated,this.getEvents){var c=this.getEvents();H.on(c,this),this.once("remove",function(){H.off(c,this)},this)}this.onAdd(H),this.fire("add"),H.fire("layeradd",{layer:this})}}});S1.include({addLayer:function(C){if(!C._layerAdd)throw new Error("The provided object is not a Layer.");var H=n(C);return this._layers[H]?this:(this._layers[H]=C,C._mapToAdd=this,C.beforeAdd&&C.beforeAdd(this),this.whenReady(C._layerAdd,C),this)},removeLayer:function(C){var H=n(C);return this._layers[H]?(this._loaded&&C.onRemove(this),delete this._layers[H],this._loaded&&(this.fire("layerremove",{layer:C}),C.fire("remove")),C._map=C._mapToAdd=null,this):this},hasLayer:function(C){return n(C)in this._layers},eachLayer:function(C,H){for(var c in this._layers)C.call(H,this._layers[c]);return this},_addLayers:function(C){C=C?T(C)?C:[C]:[];for(var H=0,c=C.length;H<c;H++)this.addLayer(C[H])},_addZoomLimit:function(C){(!isNaN(C.options.maxZoom)||!isNaN(C.options.minZoom))&&(this._zoomBoundLayers[n(C)]=C,this._updateZoomLevels())},_removeZoomLimit:function(C){var H=n(C);this._zoomBoundLayers[H]&&(delete this._zoomBoundLayers[H],this._updateZoomLevels())},_updateZoomLevels:function(){var C=1/0,H=-1/0,c=this._getZoomSpan();for(var h in this._zoomBoundLayers){var A=this._zoomBoundLayers[h].options;C=A.minZoom===void 0?C:Math.min(C,A.minZoom),H=A.maxZoom===void 0?H:Math.max(H,A.maxZoom)}this._layersMaxZoom=H===-1/0?void 0:H,this._layersMinZoom=C===1/0?void 0:C,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var w7=Y5.extend({initialize:function(C,H){g(this,H),this._layers={};var c,h;if(C)for(c=0,h=C.length;c<h;c++)this.addLayer(C[c])},addLayer:function(C){var H=this.getLayerId(C);return this._layers[H]=C,this._map&&this._map.addLayer(C),this},removeLayer:function(C){var H=C in this._layers?C:this.getLayerId(C);return this._map&&this._layers[H]&&this._map.removeLayer(this._layers[H]),delete this._layers[H],this},hasLayer:function(C){var H=typeof C=="number"?C:this.getLayerId(C);return H in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(C){var H=Array.prototype.slice.call(arguments,1),c,h;for(c in this._layers)h=this._layers[c],h[C]&&h[C].apply(h,H);return this},onAdd:function(C){this.eachLayer(C.addLayer,C)},onRemove:function(C){this.eachLayer(C.removeLayer,C)},eachLayer:function(C,H){for(var c in this._layers)C.call(H,this._layers[c]);return this},getLayer:function(C){return this._layers[C]},getLayers:function(){var C=[];return this.eachLayer(C.push,C),C},setZIndex:function(C){return this.invoke("setZIndex",C)},getLayerId:function(C){return n(C)}}),NV=function(C,H){return new w7(C,H)},y0=w7.extend({addLayer:function(C){return this.hasLayer(C)?this:(C.addEventParent(this),w7.prototype.addLayer.call(this,C),this.fire("layeradd",{layer:C}))},removeLayer:function(C){return this.hasLayer(C)?(C in this._layers&&(C=this._layers[C]),C.removeEventParent(this),w7.prototype.removeLayer.call(this,C),this.fire("layerremove",{layer:C})):this},setStyle:function(C){return this.invoke("setStyle",C)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var C=new L1;for(var H in this._layers){var c=this._layers[H];C.extend(c.getBounds?c.getBounds():c.getLatLng())}return C}}),WV=function(C,H){return new y0(C,H)},b7=A1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(C){g(this,C)},createIcon:function(C){return this._createIcon("icon",C)},createShadow:function(C){return this._createIcon("shadow",C)},_createIcon:function(C,H){var c=this._getIconUrl(C);if(!c){if(C==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(c,H&&H.tagName==="IMG"?H:null);return this._setIconStyles(h,C),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(C,H){var c=this.options,h=c[H+"Size"];typeof h=="number"&&(h=[h,h]);var A=V1(h),w=V1(H==="shadow"&&c.shadowAnchor||c.iconAnchor||A&&A.divideBy(2,!0));C.className="leaflet-marker-"+H+" "+(c.className||""),w&&(C.style.marginLeft=-w.x+"px",C.style.marginTop=-w.y+"px"),A&&(C.style.width=A.x+"px",C.style.height=A.y+"px")},_createImg:function(C,H){return H=H||document.createElement("img"),H.src=C,H},_getIconUrl:function(C){return h1.retina&&this.options[C+"RetinaUrl"]||this.options[C+"Url"]}});function UV(C){return new b7(C)}var b4=b7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(C){return typeof b4.imagePath!="string"&&(b4.imagePath=this._detectIconPath()),(this.options.imagePath||b4.imagePath)+b7.prototype._getIconUrl.call(this,C)},_stripUrl:function(C){var H=function(c,h,A){var w=h.exec(c);return w&&w[A]};return C=H(C,/^url\((['"])?(.+)\1\)$/,2),C&&H(C,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var C=R("div","leaflet-default-icon-path",document.body),H=l1(C,"background-image")||l1(C,"backgroundImage");if(document.body.removeChild(C),H=this._stripUrl(H),H)return H;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Wi=H5.extend({initialize:function(C){this._marker=C},addHooks:function(){var C=this._marker._icon;this._draggable||(this._draggable=new k5(C,C,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),u1(C,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&B1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(C){var H=this._marker,c=H._map,h=this._marker.options.autoPanSpeed,A=this._marker.options.autoPanPadding,w=U2(H._icon),P=c.getPixelBounds(),I=c.getPixelOrigin(),N=a1(P.min._subtract(I).add(A),P.max._subtract(I).subtract(A));if(!N.contains(w)){var G=V1((Math.max(N.max.x,w.x)-N.max.x)/(P.max.x-N.max.x)-(Math.min(N.min.x,w.x)-N.min.x)/(P.min.x-N.min.x),(Math.max(N.max.y,w.y)-N.max.y)/(P.max.y-N.max.y)-(Math.min(N.min.y,w.y)-N.min.y)/(P.min.y-N.min.y)).multiplyBy(h);c.panBy(G,{animate:!1}),this._draggable._newPos._add(G),this._draggable._startPos._add(G),t2(H._icon,this._draggable._newPos),this._onDrag(C),this._panRequest=i1(this._adjustPan.bind(this,C))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(C){this._marker.options.autoPan&&(d1(this._panRequest),this._panRequest=i1(this._adjustPan.bind(this,C)))},_onDrag:function(C){var H=this._marker,c=H._shadow,h=U2(H._icon),A=H._map.layerPointToLatLng(h);c&&t2(c,h),H._latlng=A,C.latlng=A,C.oldLatLng=this._oldLatLng,H.fire("move",C).fire("drag",C)},_onDragEnd:function(C){d1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",C)}}),S6=Y5.extend({options:{icon:new b4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(C,H){g(this,H),this._latlng=M1(C)},onAdd:function(C){this._zoomAnimated=this._zoomAnimated&&C.options.markerZoomAnimation,this._zoomAnimated&&C.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(C){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&C.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(C){var H=this._latlng;return this._latlng=M1(C),this.update(),this.fire("move",{oldLatLng:H,latlng:this._latlng})},setZIndexOffset:function(C){return this.options.zIndexOffset=C,this.update()},getIcon:function(){return this.options.icon},setIcon:function(C){return this.options.icon=C,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var C=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(C)}return this},_initIcon:function(){var C=this.options,H="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=C.icon.createIcon(this._icon),h=!1;c!==this._icon&&(this._icon&&this._removeIcon(),h=!0,C.title&&(c.title=C.title),c.tagName==="IMG"&&(c.alt=C.alt||"")),u1(c,H),C.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,C.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&v1(c,"focus",this._panOnFocus,this);var A=C.icon.createShadow(this._shadow),w=!1;A!==this._shadow&&(this._removeShadow(),w=!0),A&&(u1(A,H),A.alt=""),this._shadow=A,C.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),A&&w&&this.getPane(C.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&j1(this._icon,"focus",this._panOnFocus,this),p1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&p1(this._shadow),this._shadow=null},_setPos:function(C){this._icon&&t2(this._icon,C),this._shadow&&t2(this._shadow,C),this._zIndex=C.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(C){this._icon&&(this._icon.style.zIndex=this._zIndex+C)},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center).round();this._setPos(H)},_initInteraction:function(){if(this.options.interactive&&(u1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Wi)){var C=this.options.draggable;this.dragging&&(C=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Wi(this),C&&this.dragging.enable()}},setOpacity:function(C){return this.options.opacity=C,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var C=this.options.opacity;this._icon&&B2(this._icon,C),this._shadow&&B2(this._shadow,C)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var C=this._map;if(C){var H=this.options.icon.options,c=H.iconSize?V1(H.iconSize):V1(0,0),h=H.iconAnchor?V1(H.iconAnchor):V1(0,0);C.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:c.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function jV(C,H){return new S6(C,H)}var t3=Y5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(C){this._renderer=C.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(C){return g(this,C),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&C&&Object.prototype.hasOwnProperty.call(C,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),y6=t3.extend({options:{fill:!0,radius:10},initialize:function(C,H){g(this,H),this._latlng=M1(C),this._radius=this.options.radius},setLatLng:function(C){var H=this._latlng;return this._latlng=M1(C),this.redraw(),this.fire("move",{oldLatLng:H,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(C){return this.options.radius=this._radius=C,this.redraw()},getRadius:function(){return this._radius},setStyle:function(C){var H=C&&C.radius||this._radius;return t3.prototype.setStyle.call(this,C),this.setRadius(H),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var C=this._radius,H=this._radiusY||C,c=this._clickTolerance(),h=[C+c,H+c];this._pxBounds=new j(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(C){return C.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function GV(C,H){return new y6(C,H)}var de=y6.extend({initialize:function(C,H,c){if(typeof H=="number"&&(H=e({},c,{radius:H})),g(this,H),this._latlng=M1(C),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(C){return this._mRadius=C,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var C=[this._radius,this._radiusY||this._radius];return new L1(this._map.layerPointToLatLng(this._point.subtract(C)),this._map.layerPointToLatLng(this._point.add(C)))},setStyle:t3.prototype.setStyle,_project:function(){var C=this._latlng.lng,H=this._latlng.lat,c=this._map,h=c.options.crs;if(h.distance===P1.distance){var A=Math.PI/180,w=this._mRadius/P1.R/A,P=c.project([H+w,C]),I=c.project([H-w,C]),N=P.add(I).divideBy(2),G=c.unproject(N).lat,n1=Math.acos((Math.cos(w*A)-Math.sin(H*A)*Math.sin(G*A))/(Math.cos(H*A)*Math.cos(G*A)))/A;(isNaN(n1)||n1===0)&&(n1=w/Math.cos(Math.PI/180*H)),this._point=N.subtract(c.getPixelOrigin()),this._radius=isNaN(n1)?0:N.x-c.project([G,C-n1]).x,this._radiusY=N.y-P.y}else{var x1=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(x1).x}this._updateBounds()}});function qV(C,H,c){return new de(C,H,c)}var Z0=t3.extend({options:{smoothFactor:1,noClip:!1},initialize:function(C,H){g(this,H),this._setLatLngs(C)},getLatLngs:function(){return this._latlngs},setLatLngs:function(C){return this._setLatLngs(C),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(C){for(var H=1/0,c=null,h=w4,A,w,P=0,I=this._parts.length;P<I;P++)for(var N=this._parts[P],G=1,n1=N.length;G<n1;G++){A=N[G-1],w=N[G];var x1=h(C,A,w,!0);x1<H&&(H=x1,c=h(C,A,w))}return c&&(c.distance=Math.sqrt(H)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ii(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(C,H){return H=H||this._defaultShape(),C=M1(C),H.push(C),this._bounds.extend(C),this.redraw()},_setLatLngs:function(C){this._bounds=new L1,this._latlngs=this._convertLatLngs(C)},_defaultShape:function(){return O5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(C){for(var H=[],c=O5(C),h=0,A=C.length;h<A;h++)c?(H[h]=M1(C[h]),this._bounds.extend(H[h])):H[h]=this._convertLatLngs(C[h]);return H},_project:function(){var C=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,C),this._bounds.isValid()&&C.isValid()&&(this._rawPxBounds=C,this._updateBounds())},_updateBounds:function(){var C=this._clickTolerance(),H=new t1(C,C);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(H),this._rawPxBounds.max.add(H)]))},_projectLatlngs:function(C,H,c){var h=C[0]instanceof c1,A=C.length,w,P;if(h){for(P=[],w=0;w<A;w++)P[w]=this._map.latLngToLayerPoint(C[w]),c.extend(P[w]);H.push(P)}else for(w=0;w<A;w++)this._projectLatlngs(C[w],H,c)},_clipPoints:function(){var C=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}var H=this._parts,c,h,A,w,P,I,N;for(c=0,A=0,w=this._rings.length;c<w;c++)for(N=this._rings[c],h=0,P=N.length;h<P-1;h++)I=Bi(N[h],N[h+1],C,h,!0),I&&(H[A]=H[A]||[],H[A].push(I[0]),(I[1]!==N[h+1]||h===P-2)&&(H[A].push(I[1]),A++))}},_simplifyPoints:function(){for(var C=this._parts,H=this.options.smoothFactor,c=0,h=C.length;c<h;c++)C[c]=Fi(C[c],H)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(C,H){var c,h,A,w,P,I,N=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(c=0,w=this._parts.length;c<w;c++)for(I=this._parts[c],h=0,P=I.length,A=P-1;h<P;A=h++)if(!(!H&&h===0)&&Ri(C,I[A],I[h])<=N)return!0;return!1}});function YV(C,H){return new Z0(C,H)}Z0._flat=zi;var S7=Z0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return $i(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(C){var H=Z0.prototype._convertLatLngs.call(this,C),c=H.length;return c>=2&&H[0]instanceof c1&&H[0].equals(H[c-1])&&H.pop(),H},_setLatLngs:function(C){Z0.prototype._setLatLngs.call(this,C),O5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return O5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var C=this._renderer._bounds,H=this.options.weight,c=new t1(H,H);if(C=new j(C.min.subtract(c),C.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,A=this._rings.length,w;h<A;h++)w=w6(this._rings[h],C,!0),w.length&&this._parts.push(w)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(C){var H=!1,c,h,A,w,P,I,N,G;if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(w=0,N=this._parts.length;w<N;w++)for(c=this._parts[w],P=0,G=c.length,I=G-1;P<G;I=P++)h=c[P],A=c[I],h.y>C.y!=A.y>C.y&&C.x<(A.x-h.x)*(C.y-h.y)/(A.y-h.y)+h.x&&(H=!H);return H||Z0.prototype._containsPoint.call(this,C,!0)}});function QV(C,H){return new S7(C,H)}var k0=y0.extend({initialize:function(C,H){g(this,H),this._layers={},C&&this.addData(C)},addData:function(C){var H=T(C)?C:C.features,c,h,A;if(H){for(c=0,h=H.length;c<h;c++)A=H[c],(A.geometries||A.geometry||A.features||A.coordinates)&&this.addData(A);return this}var w=this.options;if(w.filter&&!w.filter(C))return this;var P=Z6(C,w);return P?(P.feature=T6(C),P.defaultOptions=P.options,this.resetStyle(P),w.onEachFeature&&w.onEachFeature(C,P),this.addLayer(P)):this},resetStyle:function(C){return C===void 0?this.eachLayer(this.resetStyle,this):(C.options=e({},C.defaultOptions),this._setLayerStyle(C,this.options.style),this)},setStyle:function(C){return this.eachLayer(function(H){this._setLayerStyle(H,C)},this)},_setLayerStyle:function(C,H){C.setStyle&&(typeof H=="function"&&(H=H(C.feature)),C.setStyle(H))}});function Z6(C,H){var c=C.type==="Feature"?C.geometry:C,h=c?c.coordinates:null,A=[],w=H&&H.pointToLayer,P=H&&H.coordsToLatLng||pe,I,N,G,n1;if(!h&&!c)return null;switch(c.type){case"Point":return I=P(h),Ui(w,C,I,H);case"MultiPoint":for(G=0,n1=h.length;G<n1;G++)I=P(h[G]),A.push(Ui(w,C,I,H));return new y0(A);case"LineString":case"MultiLineString":return N=k6(h,c.type==="LineString"?0:1,P),new Z0(N,H);case"Polygon":case"MultiPolygon":return N=k6(h,c.type==="Polygon"?1:2,P),new S7(N,H);case"GeometryCollection":for(G=0,n1=c.geometries.length;G<n1;G++){var x1=Z6({geometry:c.geometries[G],type:"Feature",properties:C.properties},H);x1&&A.push(x1)}return new y0(A);case"FeatureCollection":for(G=0,n1=c.features.length;G<n1;G++){var E1=Z6(c.features[G],H);E1&&A.push(E1)}return new y0(A);default:throw new Error("Invalid GeoJSON object.")}}function Ui(C,H,c,h){return C?C(H,c):new S6(c,h&&h.markersInheritOptions&&h)}function pe(C){return new c1(C[1],C[0],C[2])}function k6(C,H,c){for(var h=[],A=0,w=C.length,P;A<w;A++)P=H?k6(C[A],H-1,c):(c||pe)(C[A]),h.push(P);return h}function ue(C,H){return C=M1(C),C.alt!==void 0?[M(C.lng,H),M(C.lat,H),M(C.alt,H)]:[M(C.lng,H),M(C.lat,H)]}function O6(C,H,c,h){for(var A=[],w=0,P=C.length;w<P;w++)A.push(H?O6(C[w],O5(C[w])?0:H-1,c,h):ue(C[w],h));return!H&&c&&A.length>0&&A.push(A[0].slice()),A}function y7(C,H){return C.feature?e({},C.feature,{geometry:H}):T6(H)}function T6(C){return C.type==="Feature"||C.type==="FeatureCollection"?C:{type:"Feature",properties:{},geometry:C}}var he={toGeoJSON:function(C){return y7(this,{type:"Point",coordinates:ue(this.getLatLng(),C)})}};S6.include(he),de.include(he),y6.include(he),Z0.include({toGeoJSON:function(C){var H=!O5(this._latlngs),c=O6(this._latlngs,H?1:0,!1,C);return y7(this,{type:(H?"Multi":"")+"LineString",coordinates:c})}}),S7.include({toGeoJSON:function(C){var H=!O5(this._latlngs),c=H&&!O5(this._latlngs[0]),h=O6(this._latlngs,c?2:H?1:0,!0,C);return H||(h=[h]),y7(this,{type:(c?"Multi":"")+"Polygon",coordinates:h})}}),w7.include({toMultiPoint:function(C){var H=[];return this.eachLayer(function(c){H.push(c.toGeoJSON(C).geometry.coordinates)}),y7(this,{type:"MultiPoint",coordinates:H})},toGeoJSON:function(C){var H=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(H==="MultiPoint")return this.toMultiPoint(C);var c=H==="GeometryCollection",h=[];return this.eachLayer(function(A){if(A.toGeoJSON){var w=A.toGeoJSON(C);if(c)h.push(w.geometry);else{var P=T6(w);P.type==="FeatureCollection"?h.push.apply(h,P.features):h.push(P)}}}),c?y7(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function ji(C,H){return new k0(C,H)}var KV=ji,P6=Y5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(C,H,c){this._url=C,this._bounds=m1(H),g(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(u1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){p1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(C){return this.options.opacity=C,this._image&&this._updateOpacity(),this},setStyle:function(C){return C.opacity&&this.setOpacity(C.opacity),this},bringToFront:function(){return this._map&&R1(this._image),this},bringToBack:function(){return this._map&&D1(this._image),this},setUrl:function(C){return this._url=C,this._image&&(this._image.src=C),this},setBounds:function(C){return this._bounds=m1(C),this._map&&this._reset(),this},getEvents:function(){var C={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var C=this._url.tagName==="IMG",H=this._image=C?this._url:R("img");if(u1(H,"leaflet-image-layer"),this._zoomAnimated&&u1(H,"leaflet-zoom-animated"),this.options.className&&u1(H,this.options.className),H.onselectstart=l,H.onmousemove=l,H.onload=o(this.fire,this,"load"),H.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(H.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),C){this._url=H.src;return}H.src=this._url,H.alt=this.options.alt},_animateZoom:function(C){var H=this._map.getZoomScale(C.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,C.zoom,C.center).min;m2(this._image,c,H)},_reset:function(){var C=this._image,H=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=H.getSize();t2(C,H.min),C.style.width=c.x+"px",C.style.height=c.y+"px"},_updateOpacity:function(){B2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var C=this.options.errorOverlayUrl;C&&this._url!==C&&(this._url=C,this._image.src=C)},getCenter:function(){return this._bounds.getCenter()}}),XV=function(C,H,c){return new P6(C,H,c)},Gi=P6.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var C=this._url.tagName==="VIDEO",H=this._image=C?this._url:R("video");if(u1(H,"leaflet-image-layer"),this._zoomAnimated&&u1(H,"leaflet-zoom-animated"),this.options.className&&u1(H,this.options.className),H.onselectstart=l,H.onmousemove=l,H.onloadeddata=o(this.fire,this,"load"),C){for(var c=H.getElementsByTagName("source"),h=[],A=0;A<c.length;A++)h.push(c[A].src);this._url=c.length>0?h:[H.src];return}T(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(H.style,"objectFit")&&(H.style.objectFit="fill"),H.autoplay=!!this.options.autoplay,H.loop=!!this.options.loop,H.muted=!!this.options.muted,H.playsInline=!!this.options.playsInline;for(var w=0;w<this._url.length;w++){var P=R("source");P.src=this._url[w],H.appendChild(P)}}});function JV(C,H,c){return new Gi(C,H,c)}var qi=P6.extend({_initImage:function(){var C=this._image=this._url;u1(C,"leaflet-image-layer"),this._zoomAnimated&&u1(C,"leaflet-zoom-animated"),this.options.className&&u1(C,this.options.className),C.onselectstart=l,C.onmousemove=l}});function tL(C,H,c){return new qi(C,H,c)}var p0=Y5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(C,H){C&&(C instanceof c1||T(C))?(this._latlng=M1(C),g(this,H)):(g(this,C),this._source=H),this.options.content&&(this._content=this.options.content)},openOn:function(C){return C=arguments.length?C:this._source._map,C.hasLayer(this)||C.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(C){return this._map?this.close():(arguments.length?this._source=C:C=this._source,this._prepareOpen(),this.openOn(C._map)),this},onAdd:function(C){this._zoomAnimated=C._zoomAnimated,this._container||this._initLayout(),C._fadeAnimated&&B2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),C._fadeAnimated&&B2(this._container,1),this.bringToFront(),this.options.interactive&&(u1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(C){C._fadeAnimated?(B2(this._container,0),this._removeTimeout=setTimeout(o(p1,void 0,this._container),200)):p1(this._container),this.options.interactive&&(B1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(C){return this._latlng=M1(C),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(C){return this._content=C,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var C={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&R1(this._container),this},bringToBack:function(){return this._map&&D1(this._container),this},_prepareOpen:function(C){var H=this._source;if(!H._map)return!1;if(H instanceof y0){H=null;var c=this._source._layers;for(var h in c)if(c[h]._map){H=c[h];break}if(!H)return!1;this._source=H}if(!C)if(H.getCenter)C=H.getCenter();else if(H.getLatLng)C=H.getLatLng();else if(H.getBounds)C=H.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(C),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var C=this._contentNode,H=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof H=="string")C.innerHTML=H;else{for(;C.hasChildNodes();)C.removeChild(C.firstChild);C.appendChild(H)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var C=this._map.latLngToLayerPoint(this._latlng),H=V1(this.options.offset),c=this._getAnchor();this._zoomAnimated?t2(this._container,C.add(c)):H=H.add(C).add(c);var h=this._containerBottom=-H.y,A=this._containerLeft=-Math.round(this._containerWidth/2)+H.x;this._container.style.bottom=h+"px",this._container.style.left=A+"px"}},_getAnchor:function(){return[0,0]}});S1.include({_initOverlay:function(C,H,c,h){var A=H;return A instanceof C||(A=new C(h).setContent(H)),c&&A.setLatLng(c),A}}),Y5.include({_initOverlay:function(C,H,c,h){var A=c;return A instanceof C?(g(A,h),A._source=this):(A=H&&!h?H:new C(h,this),A.setContent(c)),A}});var E6=p0.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(C){return C=arguments.length?C:this._source._map,!C.hasLayer(this)&&C._popup&&C._popup.options.autoClose&&C.removeLayer(C._popup),C._popup=this,p0.prototype.openOn.call(this,C)},onAdd:function(C){p0.prototype.onAdd.call(this,C),C.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof t3||this._source.on("preclick",K2))},onRemove:function(C){p0.prototype.onRemove.call(this,C),C.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof t3||this._source.off("preclick",K2))},getEvents:function(){var C=p0.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(C.preclick=this.close),this.options.keepInView&&(C.moveend=this._adjustPan),C},_initLayout:function(){var C="leaflet-popup",H=this._container=R("div",C+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=R("div",C+"-content-wrapper",H);if(this._contentNode=R("div",C+"-content",c),n5(H),M2(this._contentNode),v1(H,"contextmenu",K2),this._tipContainer=R("div",C+"-tip-container",H),this._tip=R("div",C+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=R("a",C+"-close-button",H);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',v1(h,"click",function(A){d2(A),this.close()},this)}},_updateLayout:function(){var C=this._contentNode,H=C.style;H.width="",H.whiteSpace="nowrap";var c=C.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),H.width=c+1+"px",H.whiteSpace="",H.height="";var h=C.offsetHeight,A=this.options.maxHeight,w="leaflet-popup-scrolled";A&&h>A?(H.height=A+"px",u1(C,w)):B1(C,w),this._containerWidth=this._container.offsetWidth},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center),c=this._getAnchor();t2(this._container,H.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var C=this._map,H=parseInt(l1(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+H,h=this._containerWidth,A=new t1(this._containerLeft,-c-this._containerBottom);A._add(U2(this._container));var w=C.layerPointToContainerPoint(A),P=V1(this.options.autoPanPadding),I=V1(this.options.autoPanPaddingTopLeft||P),N=V1(this.options.autoPanPaddingBottomRight||P),G=C.getSize(),n1=0,x1=0;w.x+h+N.x>G.x&&(n1=w.x+h-G.x+N.x),w.x-n1-I.x<0&&(n1=w.x-I.x),w.y+c+N.y>G.y&&(x1=w.y+c-G.y+N.y),w.y-x1-I.y<0&&(x1=w.y-I.y),(n1||x1)&&(this.options.keepInView&&(this._autopanning=!0),C.fire("autopanstart").panBy([n1,x1]))}},_getAnchor:function(){return V1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),eL=function(C,H){return new E6(C,H)};S1.mergeOptions({closePopupOnClick:!0}),S1.include({openPopup:function(C,H,c){return this._initOverlay(E6,C,H,c).openOn(this),this},closePopup:function(C){return C=arguments.length?C:this._popup,C&&C.close(),this}}),Y5.include({bindPopup:function(C,H){return this._popup=this._initOverlay(E6,this._popup,C,H),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(C){return this._popup&&(this instanceof y0||(this._popup._source=this),this._popup._prepareOpen(C||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(C){return this._popup&&this._popup.setContent(C),this},getPopup:function(){return this._popup},_openPopup:function(C){if(!(!this._popup||!this._map)){G5(C);var H=C.layer||C.target;if(this._popup._source===H&&!(H instanceof t3)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(C.latlng);return}this._popup._source=H,this.openPopup(C.latlng)}},_movePopup:function(C){this._popup.setLatLng(C.latlng)},_onKeyPress:function(C){C.originalEvent.keyCode===13&&this._openPopup(C)}});var $6=p0.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(C){p0.prototype.onAdd.call(this,C),this.setOpacity(this.options.opacity),C.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(C){p0.prototype.onRemove.call(this,C),C.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var C=p0.prototype.getEvents.call(this);return this.options.permanent||(C.preclick=this.close),C},_initLayout:function(){var C="leaflet-tooltip",H=C+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=R("div",H),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+n(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(C){var H,c,h=this._map,A=this._container,w=h.latLngToContainerPoint(h.getCenter()),P=h.layerPointToContainerPoint(C),I=this.options.direction,N=A.offsetWidth,G=A.offsetHeight,n1=V1(this.options.offset),x1=this._getAnchor();I==="top"?(H=N/2,c=G):I==="bottom"?(H=N/2,c=0):I==="center"?(H=N/2,c=G/2):I==="right"?(H=0,c=G/2):I==="left"?(H=N,c=G/2):P.x<w.x?(I="right",H=0,c=G/2):(I="left",H=N+(n1.x+x1.x)*2,c=G/2),C=C.subtract(V1(H,c,!0)).add(n1).add(x1),B1(A,"leaflet-tooltip-right"),B1(A,"leaflet-tooltip-left"),B1(A,"leaflet-tooltip-top"),B1(A,"leaflet-tooltip-bottom"),u1(A,"leaflet-tooltip-"+I),t2(A,C)},_updatePosition:function(){var C=this._map.latLngToLayerPoint(this._latlng);this._setPosition(C)},setOpacity:function(C){this.options.opacity=C,this._container&&B2(this._container,C)},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center);this._setPosition(H)},_getAnchor:function(){return V1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),rL=function(C,H){return new $6(C,H)};S1.include({openTooltip:function(C,H,c){return this._initOverlay($6,C,H,c).openOn(this),this},closeTooltip:function(C){return C.close(),this}}),Y5.include({bindTooltip:function(C,H){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay($6,this._tooltip,C,H),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(C){if(!(!C&&this._tooltipHandlersAdded)){var H=C?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[H](c),this._tooltipHandlersAdded=!C}},openTooltip:function(C){return this._tooltip&&(this instanceof y0||(this._tooltip._source=this),this._tooltip._prepareOpen(C)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(C){return this._tooltip&&this._tooltip.setContent(C),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(C){var H=typeof C.getElement=="function"&&C.getElement();H&&(v1(H,"focus",function(){this._tooltip._source=C,this.openTooltip()},this),v1(H,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(C){var H=typeof C.getElement=="function"&&C.getElement();H&&H.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(C){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var H=this;this._map.once("moveend",function(){H._openOnceFlag=!1,H._openTooltip(C)});return}this._tooltip._source=C.layer||C.target,this.openTooltip(this._tooltip.options.sticky?C.latlng:void 0)}},_moveTooltip:function(C){var H=C.latlng,c,h;this._tooltip.options.sticky&&C.originalEvent&&(c=this._map.mouseEventToContainerPoint(C.originalEvent),h=this._map.containerPointToLayerPoint(c),H=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(H)}});var Yi=b7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(C){var H=C&&C.tagName==="DIV"?C:document.createElement("div"),c=this.options;if(c.html instanceof Element?(K1(H),H.appendChild(c.html)):H.innerHTML=c.html!==!1?c.html:"",c.bgPos){var h=V1(c.bgPos);H.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(H,"icon"),H},createShadow:function(){return null}});function iL(C){return new Yi(C)}b7.Default=b4;var S4=Y5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:h1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(C){g(this,C)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(C){C._addZoomLimit(this)},onRemove:function(C){this._removeAllTiles(),p1(this._container),C._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(R1(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(D1(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(C){return this.options.opacity=C,this._updateOpacity(),this},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var C=this._clampZoom(this._map.getZoom());C!==this._tileZoom&&(this._tileZoom=C,this._updateLevels()),this._update()}return this},getEvents:function(){var C={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=s(this._onMoveEnd,this.options.updateInterval,this)),C.move=this._onMove),this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},createTile:function(){return document.createElement("div")},getTileSize:function(){var C=this.options.tileSize;return C instanceof t1?C:new t1(C,C)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(C){for(var H=this.getPane().children,c=-C(-1/0,1/0),h=0,A=H.length,w;h<A;h++)w=H[h].style.zIndex,H[h]!==this._container&&w&&(c=C(c,+w));isFinite(c)&&(this.options.zIndex=c+C(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!h1.ielt9){B2(this._container,this.options.opacity);var C=+new Date,H=!1,c=!1;for(var h in this._tiles){var A=this._tiles[h];if(!(!A.current||!A.loaded)){var w=Math.min(1,(C-A.loaded)/200);B2(A.el,w),w<1?H=!0:(A.active?c=!0:this._onOpaqueTile(A),A.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),H&&(d1(this._fadeFrame),this._fadeFrame=i1(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=R("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var C=this._tileZoom,H=this.options.maxZoom;if(C!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===C?(this._levels[c].el.style.zIndex=H-Math.abs(C-c),this._onUpdateLevel(c)):(p1(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var h=this._levels[C],A=this._map;return h||(h=this._levels[C]={},h.el=R("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=H,h.origin=A.project(A.unproject(A.getPixelOrigin()),C).round(),h.zoom=C,this._setZoomTransform(h,A.getCenter(),A.getZoom()),l(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var C,H,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(C in this._tiles)H=this._tiles[C],H.retain=H.current;for(C in this._tiles)if(H=this._tiles[C],H.current&&!H.active){var h=H.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(C in this._tiles)this._tiles[C].retain||this._removeTile(C)}},_removeTilesAtZoom:function(C){for(var H in this._tiles)this._tiles[H].coords.z===C&&this._removeTile(H)},_removeAllTiles:function(){for(var C in this._tiles)this._removeTile(C)},_invalidateAll:function(){for(var C in this._levels)p1(this._levels[C].el),this._onRemoveLevel(Number(C)),delete this._levels[C];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(C,H,c,h){var A=Math.floor(C/2),w=Math.floor(H/2),P=c-1,I=new t1(+A,+w);I.z=+P;var N=this._tileCoordsToKey(I),G=this._tiles[N];return G&&G.active?(G.retain=!0,!0):(G&&G.loaded&&(G.retain=!0),P>h?this._retainParent(A,w,P,h):!1)},_retainChildren:function(C,H,c,h){for(var A=2*C;A<2*C+2;A++)for(var w=2*H;w<2*H+2;w++){var P=new t1(A,w);P.z=c+1;var I=this._tileCoordsToKey(P),N=this._tiles[I];if(N&&N.active){N.retain=!0;continue}else N&&N.loaded&&(N.retain=!0);c+1<h&&this._retainChildren(A,w,c+1,h)}},_resetView:function(C){var H=C&&(C.pinch||C.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),H,H)},_animateZoom:function(C){this._setView(C.center,C.zoom,!0,C.noUpdate)},_clampZoom:function(C){var H=this.options;return H.minNativeZoom!==void 0&&C<H.minNativeZoom?H.minNativeZoom:H.maxNativeZoom!==void 0&&H.maxNativeZoom<C?H.maxNativeZoom:C},_setView:function(C,H,c,h){var A=Math.round(H);this.options.maxZoom!==void 0&&A>this.options.maxZoom||this.options.minZoom!==void 0&&A<this.options.minZoom?A=void 0:A=this._clampZoom(A);var w=this.options.updateWhenZooming&&A!==this._tileZoom;(!h||w)&&(this._tileZoom=A,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),A!==void 0&&this._update(C),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(C,H)},_setZoomTransforms:function(C,H){for(var c in this._levels)this._setZoomTransform(this._levels[c],C,H)},_setZoomTransform:function(C,H,c){var h=this._map.getZoomScale(c,C.zoom),A=C.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(H,c)).round();h1.any3d?m2(C.el,A,h):t2(C.el,A)},_resetGrid:function(){var C=this._map,H=C.options.crs,c=this._tileSize=this.getTileSize(),h=this._tileZoom,A=this._map.getPixelWorldBounds(this._tileZoom);A&&(this._globalTileRange=this._pxBoundsToTileRange(A)),this._wrapX=H.wrapLng&&!this.options.noWrap&&[Math.floor(C.project([0,H.wrapLng[0]],h).x/c.x),Math.ceil(C.project([0,H.wrapLng[1]],h).x/c.y)],this._wrapY=H.wrapLat&&!this.options.noWrap&&[Math.floor(C.project([H.wrapLat[0],0],h).y/c.x),Math.ceil(C.project([H.wrapLat[1],0],h).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(C){var H=this._map,c=H._animatingZoom?Math.max(H._animateToZoom,H.getZoom()):H.getZoom(),h=H.getZoomScale(c,this._tileZoom),A=H.project(C,this._tileZoom).floor(),w=H.getSize().divideBy(h*2);return new j(A.subtract(w),A.add(w))},_update:function(C){var H=this._map;if(H){var c=this._clampZoom(H.getZoom());if(C===void 0&&(C=H.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(C),A=this._pxBoundsToTileRange(h),w=A.getCenter(),P=[],I=this.options.keepBuffer,N=new j(A.getBottomLeft().subtract([I,-I]),A.getTopRight().add([I,-I]));if(!(isFinite(A.min.x)&&isFinite(A.min.y)&&isFinite(A.max.x)&&isFinite(A.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var G in this._tiles){var n1=this._tiles[G].coords;(n1.z!==this._tileZoom||!N.contains(new t1(n1.x,n1.y)))&&(this._tiles[G].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(C,c);return}for(var x1=A.min.y;x1<=A.max.y;x1++)for(var E1=A.min.x;E1<=A.max.x;E1++){var t5=new t1(E1,x1);if(t5.z=this._tileZoom,!!this._isValidTile(t5)){var O2=this._tiles[this._tileCoordsToKey(t5)];O2?O2.current=!0:P.push(t5)}}if(P.sort(function(V5,k7){return V5.distanceTo(w)-k7.distanceTo(w)}),P.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var T5=document.createDocumentFragment();for(E1=0;E1<P.length;E1++)this._addTile(P[E1],T5);this._level.el.appendChild(T5)}}}},_isValidTile:function(C){var H=this._map.options.crs;if(!H.infinite){var c=this._globalTileRange;if(!H.wrapLng&&(C.x<c.min.x||C.x>c.max.x)||!H.wrapLat&&(C.y<c.min.y||C.y>c.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(C);return m1(this.options.bounds).overlaps(h)},_keyToBounds:function(C){return this._tileCoordsToBounds(this._keyToTileCoords(C))},_tileCoordsToNwSe:function(C){var H=this._map,c=this.getTileSize(),h=C.scaleBy(c),A=h.add(c),w=H.unproject(h,C.z),P=H.unproject(A,C.z);return[w,P]},_tileCoordsToBounds:function(C){var H=this._tileCoordsToNwSe(C),c=new L1(H[0],H[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(C){return C.x+":"+C.y+":"+C.z},_keyToTileCoords:function(C){var H=C.split(":"),c=new t1(+H[0],+H[1]);return c.z=+H[2],c},_removeTile:function(C){var H=this._tiles[C];H&&(p1(H.el),delete this._tiles[C],this.fire("tileunload",{tile:H.el,coords:this._keyToTileCoords(C)}))},_initTile:function(C){u1(C,"leaflet-tile");var H=this.getTileSize();C.style.width=H.x+"px",C.style.height=H.y+"px",C.onselectstart=l,C.onmousemove=l,h1.ielt9&&this.options.opacity<1&&B2(C,this.options.opacity)},_addTile:function(C,H){var c=this._getTilePos(C),h=this._tileCoordsToKey(C),A=this.createTile(this._wrapCoords(C),o(this._tileReady,this,C));this._initTile(A),this.createTile.length<2&&i1(o(this._tileReady,this,C,null,A)),t2(A,c),this._tiles[h]={el:A,coords:C,current:!0},H.appendChild(A),this.fire("tileloadstart",{tile:A,coords:C})},_tileReady:function(C,H,c){H&&this.fire("tileerror",{error:H,tile:c,coords:C});var h=this._tileCoordsToKey(C);c=this._tiles[h],c&&(c.loaded=+new Date,this._map._fadeAnimated?(B2(c.el,0),d1(this._fadeFrame),this._fadeFrame=i1(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),H||(u1(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:C})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),h1.ielt9||!this._map._fadeAnimated?i1(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(C){return C.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(C){var H=new t1(this._wrapX?V(C.x,this._wrapX):C.x,this._wrapY?V(C.y,this._wrapY):C.y);return H.z=C.z,H},_pxBoundsToTileRange:function(C){var H=this.getTileSize();return new j(C.min.unscaleBy(H).floor(),C.max.unscaleBy(H).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var C in this._tiles)if(!this._tiles[C].loaded)return!1;return!0}});function oL(C){return new S4(C)}var Z7=S4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(C,H){this._url=C,H=g(this,H),H.detectRetina&&h1.retina&&H.maxZoom>0?(H.tileSize=Math.floor(H.tileSize/2),H.zoomReverse?(H.zoomOffset--,H.minZoom=Math.min(H.maxZoom,H.minZoom+1)):(H.zoomOffset++,H.maxZoom=Math.max(H.minZoom,H.maxZoom-1)),H.minZoom=Math.max(0,H.minZoom)):H.zoomReverse?H.minZoom=Math.min(H.maxZoom,H.minZoom):H.maxZoom=Math.max(H.minZoom,H.maxZoom),typeof H.subdomains=="string"&&(H.subdomains=H.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(C,H){return this._url===C&&H===void 0&&(H=!0),this._url=C,H||this.redraw(),this},createTile:function(C,H){var c=document.createElement("img");return v1(c,"load",o(this._tileOnLoad,this,H,c)),v1(c,"error",o(this._tileOnError,this,H,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(C),c},getTileUrl:function(C){var H={r:h1.retina?"@2x":"",s:this._getSubdomain(C),x:C.x,y:C.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-C.y;this.options.tms&&(H.y=c),H["-y"]=c}return O(this._url,e(H,this.options))},_tileOnLoad:function(C,H){h1.ielt9?setTimeout(o(C,this,null,H),0):C(null,H)},_tileOnError:function(C,H,c){var h=this.options.errorTileUrl;h&&H.getAttribute("src")!==h&&(H.src=h),C(c,H)},_onTileRemove:function(C){C.tile.onload=null},_getZoomForUrl:function(){var C=this._tileZoom,H=this.options.maxZoom,c=this.options.zoomReverse,h=this.options.zoomOffset;return c&&(C=H-C),C+h},_getSubdomain:function(C){var H=Math.abs(C.x+C.y)%this.options.subdomains.length;return this.options.subdomains[H]},_abortLoading:function(){var C,H;for(C in this._tiles)if(this._tiles[C].coords.z!==this._tileZoom&&(H=this._tiles[C].el,H.onload=l,H.onerror=l,!H.complete)){H.src=F;var c=this._tiles[C].coords;p1(H),delete this._tiles[C],this.fire("tileabort",{tile:H,coords:c})}},_removeTile:function(C){var H=this._tiles[C];if(H)return H.el.setAttribute("src",F),S4.prototype._removeTile.call(this,C)},_tileReady:function(C,H,c){if(!(!this._map||c&&c.getAttribute("src")===F))return S4.prototype._tileReady.call(this,C,H,c)}});function Qi(C,H){return new Z7(C,H)}var Ki=Z7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(C,H){this._url=C;var c=e({},this.defaultWmsParams);for(var h in H)h in this.options||(c[h]=H[h]);H=g(this,H);var A=H.detectRetina&&h1.retina?2:1,w=this.getTileSize();c.width=w.x*A,c.height=w.y*A,this.wmsParams=c},onAdd:function(C){this._crs=this.options.crs||C.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var H=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[H]=this._crs.code,Z7.prototype.onAdd.call(this,C)},getTileUrl:function(C){var H=this._tileCoordsToNwSe(C),c=this._crs,h=a1(c.project(H[0]),c.project(H[1])),A=h.min,w=h.max,P=(this._wmsVersion>=1.3&&this._crs===Ni?[A.y,A.x,w.y,w.x]:[A.x,A.y,w.x,w.y]).join(","),I=Z7.prototype.getTileUrl.call(this,C);return I+b(this.wmsParams,I,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+P},setParams:function(C,H){return e(this.wmsParams,C),H||this.redraw(),this}});function aL(C,H){return new Ki(C,H)}Z7.WMS=Ki,Qi.wms=aL;var O0=Y5.extend({options:{padding:.1},initialize:function(C){g(this,C),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),u1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var C={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(C.zoomanim=this._onAnimZoom),C},_onAnimZoom:function(C){this._updateTransform(C.center,C.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(C,H){var c=this._map.getZoomScale(H,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),A=this._map.project(this._center,H),w=h.multiplyBy(-c).add(A).subtract(this._map._getNewPixelOrigin(C,H));h1.any3d?m2(this._container,w,c):t2(this._container,w)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var C in this._layers)this._layers[C]._reset()},_onZoomEnd:function(){for(var C in this._layers)this._layers[C]._project()},_updatePaths:function(){for(var C in this._layers)this._layers[C]._update()},_update:function(){var C=this.options.padding,H=this._map.getSize(),c=this._map.containerPointToLayerPoint(H.multiplyBy(-C)).round();this._bounds=new j(c,c.add(H.multiplyBy(1+C*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Xi=O0.extend({options:{tolerance:0},getEvents:function(){var C=O0.prototype.getEvents.call(this);return C.viewprereset=this._onViewPreReset,C},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){O0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var C=this._container=document.createElement("canvas");v1(C,"mousemove",this._onMouseMove,this),v1(C,"click dblclick mousedown mouseup contextmenu",this._onClick,this),v1(C,"mouseout",this._handleMouseOut,this),C._leaflet_disable_events=!0,this._ctx=C.getContext("2d")},_destroyContainer:function(){d1(this._redrawRequest),delete this._ctx,p1(this._container),j1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var C;this._redrawBounds=null;for(var H in this._layers)C=this._layers[H],C._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){O0.prototype._update.call(this);var C=this._bounds,H=this._container,c=C.getSize(),h=h1.retina?2:1;t2(H,C.min),H.width=h*c.x,H.height=h*c.y,H.style.width=c.x+"px",H.style.height=c.y+"px",h1.retina&&this._ctx.scale(2,2),this._ctx.translate(-C.min.x,-C.min.y),this.fire("update")}},_reset:function(){O0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(C){this._updateDashArray(C),this._layers[n(C)]=C;var H=C._order={layer:C,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=H),this._drawLast=H,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(C){this._requestRedraw(C)},_removePath:function(C){var H=C._order,c=H.next,h=H.prev;c?c.prev=h:this._drawLast=h,h?h.next=c:this._drawFirst=c,delete C._order,delete this._layers[n(C)],this._requestRedraw(C)},_updatePath:function(C){this._extendRedrawBounds(C),C._project(),C._update(),this._requestRedraw(C)},_updateStyle:function(C){this._updateDashArray(C),this._requestRedraw(C)},_updateDashArray:function(C){if(typeof C.options.dashArray=="string"){var H=C.options.dashArray.split(/[, ]+/),c=[],h,A;for(A=0;A<H.length;A++){if(h=Number(H[A]),isNaN(h))return;c.push(h)}C.options._dashArray=c}else C.options._dashArray=C.options.dashArray},_requestRedraw:function(C){this._map&&(this._extendRedrawBounds(C),this._redrawRequest=this._redrawRequest||i1(this._redraw,this))},_extendRedrawBounds:function(C){if(C._pxBounds){var H=(C.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(C._pxBounds.min.subtract([H,H])),this._redrawBounds.extend(C._pxBounds.max.add([H,H]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var C=this._redrawBounds;if(C){var H=C.getSize();this._ctx.clearRect(C.min.x,C.min.y,H.x,H.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var C,H=this._redrawBounds;if(this._ctx.save(),H){var c=H.getSize();this._ctx.beginPath(),this._ctx.rect(H.min.x,H.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)C=h.layer,(!H||C._pxBounds&&C._pxBounds.intersects(H))&&C._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(C,H){if(this._drawing){var c,h,A,w,P=C._parts,I=P.length,N=this._ctx;if(I){for(N.beginPath(),c=0;c<I;c++){for(h=0,A=P[c].length;h<A;h++)w=P[c][h],N[h?"lineTo":"moveTo"](w.x,w.y);H&&N.closePath()}this._fillStroke(N,C)}}},_updateCircle:function(C){if(!(!this._drawing||C._empty())){var H=C._point,c=this._ctx,h=Math.max(Math.round(C._radius),1),A=(Math.max(Math.round(C._radiusY),1)||h)/h;A!==1&&(c.save(),c.scale(1,A)),c.beginPath(),c.arc(H.x,H.y/A,h,0,Math.PI*2,!1),A!==1&&c.restore(),this._fillStroke(c,C)}},_fillStroke:function(C,H){var c=H.options;c.fill&&(C.globalAlpha=c.fillOpacity,C.fillStyle=c.fillColor||c.color,C.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(C.setLineDash&&C.setLineDash(H.options&&H.options._dashArray||[]),C.globalAlpha=c.opacity,C.lineWidth=c.weight,C.strokeStyle=c.color,C.lineCap=c.lineCap,C.lineJoin=c.lineJoin,C.stroke())},_onClick:function(C){for(var H=this._map.mouseEventToLayerPoint(C),c,h,A=this._drawFirst;A;A=A.next)c=A.layer,c.options.interactive&&c._containsPoint(H)&&(!(C.type==="click"||C.type==="preclick")||!this._map._draggableMoved(c))&&(h=c);this._fireEvent(h?[h]:!1,C)},_onMouseMove:function(C){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var H=this._map.mouseEventToLayerPoint(C);this._handleMouseHover(C,H)}},_handleMouseOut:function(C){var H=this._hoveredLayer;H&&(B1(this._container,"leaflet-interactive"),this._fireEvent([H],C,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(C,H){if(!this._mouseHoverThrottled){for(var c,h,A=this._drawFirst;A;A=A.next)c=A.layer,c.options.interactive&&c._containsPoint(H)&&(h=c);h!==this._hoveredLayer&&(this._handleMouseOut(C),h&&(u1(this._container,"leaflet-interactive"),this._fireEvent([h],C,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,C),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(C,H,c){this._map._fireDOMEvent(H,c||H.type,C)},_bringToFront:function(C){var H=C._order;if(H){var c=H.next,h=H.prev;if(c)c.prev=h;else return;h?h.next=c:c&&(this._drawFirst=c),H.prev=this._drawLast,this._drawLast.next=H,H.next=null,this._drawLast=H,this._requestRedraw(C)}},_bringToBack:function(C){var H=C._order;if(H){var c=H.next,h=H.prev;if(h)h.next=c;else return;c?c.prev=h:h&&(this._drawLast=h),H.prev=null,H.next=this._drawFirst,this._drawFirst.prev=H,this._drawFirst=H,this._requestRedraw(C)}}});function Ji(C){return h1.canvas?new Xi(C):null}var y4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(C){return document.createElement("<lvml:"+C+' class="lvml">')}}catch{}return function(C){return document.createElement("<"+C+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),CL={_initContainer:function(){this._container=R("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(O0.prototype._update.call(this),this.fire("update"))},_initPath:function(C){var H=C._container=y4("shape");u1(H,"leaflet-vml-shape "+(this.options.className||"")),H.coordsize="1 1",C._path=y4("path"),H.appendChild(C._path),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){var H=C._container;this._container.appendChild(H),C.options.interactive&&C.addInteractiveTarget(H)},_removePath:function(C){var H=C._container;p1(H),C.removeInteractiveTarget(H),delete this._layers[n(C)]},_updateStyle:function(C){var H=C._stroke,c=C._fill,h=C.options,A=C._container;A.stroked=!!h.stroke,A.filled=!!h.fill,h.stroke?(H||(H=C._stroke=y4("stroke")),A.appendChild(H),H.weight=h.weight+"px",H.color=h.color,H.opacity=h.opacity,h.dashArray?H.dashStyle=T(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):H.dashStyle="",H.endcap=h.lineCap.replace("butt","flat"),H.joinstyle=h.lineJoin):H&&(A.removeChild(H),C._stroke=null),h.fill?(c||(c=C._fill=y4("fill")),A.appendChild(c),c.color=h.fillColor||h.color,c.opacity=h.fillOpacity):c&&(A.removeChild(c),C._fill=null)},_updateCircle:function(C){var H=C._point.round(),c=Math.round(C._radius),h=Math.round(C._radiusY||c);this._setPath(C,C._empty()?"M0 0":"AL "+H.x+","+H.y+" "+c+","+h+" 0,"+65535*360)},_setPath:function(C,H){C._path.v=H},_bringToFront:function(C){R1(C._container)},_bringToBack:function(C){D1(C._container)}},F6=h1.vml?y4:Q2,Z4=O0.extend({_initContainer:function(){this._container=F6("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=F6("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){p1(this._container),j1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){O0.prototype._update.call(this);var C=this._bounds,H=C.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(H))&&(this._svgSize=H,c.setAttribute("width",H.x),c.setAttribute("height",H.y)),t2(c,C.min),c.setAttribute("viewBox",[C.min.x,C.min.y,H.x,H.y].join(" ")),this.fire("update")}},_initPath:function(C){var H=C._path=F6("path");C.options.className&&u1(H,C.options.className),C.options.interactive&&u1(H,"leaflet-interactive"),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(C._path),C.addInteractiveTarget(C._path)},_removePath:function(C){p1(C._path),C.removeInteractiveTarget(C._path),delete this._layers[n(C)]},_updatePath:function(C){C._project(),C._update()},_updateStyle:function(C){var H=C._path,c=C.options;H&&(c.stroke?(H.setAttribute("stroke",c.color),H.setAttribute("stroke-opacity",c.opacity),H.setAttribute("stroke-width",c.weight),H.setAttribute("stroke-linecap",c.lineCap),H.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?H.setAttribute("stroke-dasharray",c.dashArray):H.removeAttribute("stroke-dasharray"),c.dashOffset?H.setAttribute("stroke-dashoffset",c.dashOffset):H.removeAttribute("stroke-dashoffset")):H.setAttribute("stroke","none"),c.fill?(H.setAttribute("fill",c.fillColor||c.color),H.setAttribute("fill-opacity",c.fillOpacity),H.setAttribute("fill-rule",c.fillRule||"evenodd")):H.setAttribute("fill","none"))},_updatePoly:function(C,H){this._setPath(C,w5(C._parts,H))},_updateCircle:function(C){var H=C._point,c=Math.max(Math.round(C._radius),1),h=Math.max(Math.round(C._radiusY),1)||c,A="a"+c+","+h+" 0 1,0 ",w=C._empty()?"M0 0":"M"+(H.x-c)+","+H.y+A+c*2+",0 "+A+-c*2+",0 ";this._setPath(C,w)},_setPath:function(C,H){C._path.setAttribute("d",H)},_bringToFront:function(C){R1(C._path)},_bringToBack:function(C){D1(C._path)}});h1.vml&&Z4.include(CL);function to(C){return h1.svg||h1.vml?new Z4(C):null}S1.include({getRenderer:function(C){var H=C.options.renderer||this._getPaneRenderer(C.options.pane)||this.options.renderer||this._renderer;return H||(H=this._renderer=this._createRenderer()),this.hasLayer(H)||this.addLayer(H),H},_getPaneRenderer:function(C){if(C==="overlayPane"||C===void 0)return!1;var H=this._paneRenderers[C];return H===void 0&&(H=this._createRenderer({pane:C}),this._paneRenderers[C]=H),H},_createRenderer:function(C){return this.options.preferCanvas&&Ji(C)||to(C)}});var eo=S7.extend({initialize:function(C,H){S7.prototype.initialize.call(this,this._boundsToLatLngs(C),H)},setBounds:function(C){return this.setLatLngs(this._boundsToLatLngs(C))},_boundsToLatLngs:function(C){return C=m1(C),[C.getSouthWest(),C.getNorthWest(),C.getNorthEast(),C.getSouthEast()]}});function nL(C,H){return new eo(C,H)}Z4.create=F6,Z4.pointsToPath=w5,k0.geometryToLayer=Z6,k0.coordsToLatLng=pe,k0.coordsToLatLngs=k6,k0.latLngToCoords=ue,k0.latLngsToCoords=O6,k0.getFeature=y7,k0.asFeature=T6,S1.mergeOptions({boxZoom:!0});var ro=H5.extend({initialize:function(C){this._map=C,this._container=C._container,this._pane=C._panes.overlayPane,this._resetStateTimeout=0,C.on("unload",this._destroy,this)},addHooks:function(){v1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){j1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){p1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(C){if(!C.shiftKey||C.which!==1&&C.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),S2(),L0(),this._startPoint=this._map.mouseEventToContainerPoint(C),v1(document,{contextmenu:G5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(C){this._moved||(this._moved=!0,this._box=R("div","leaflet-zoom-box",this._container),u1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(C);var H=new j(this._point,this._startPoint),c=H.getSize();t2(this._box,H.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(p1(this._box),B1(this._container,"leaflet-crosshair")),u5(),l0(),j1(document,{contextmenu:G5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(C){if(!(C.which!==1&&C.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var H=new L1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(H).fire("boxzoomend",{boxZoomBounds:H})}},_onKeyDown:function(C){C.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});S1.addInitHook("addHandler","boxZoom",ro),S1.mergeOptions({doubleClickZoom:!0});var io=H5.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(C){var H=this._map,c=H.getZoom(),h=H.options.zoomDelta,A=C.originalEvent.shiftKey?c-h:c+h;H.options.doubleClickZoom==="center"?H.setZoom(A):H.setZoomAround(C.containerPoint,A)}});S1.addInitHook("addHandler","doubleClickZoom",io),S1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var oo=H5.extend({addHooks:function(){if(!this._draggable){var C=this._map;this._draggable=new k5(C._mapPane,C._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),C.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),C.on("zoomend",this._onZoomEnd,this),C.whenReady(this._onZoomEnd,this))}u1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){B1(this._map._container,"leaflet-grab"),B1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var C=this._map;if(C._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var H=m1(this._map.options.maxBounds);this._offsetLimit=a1(this._map.latLngToContainerPoint(H.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(H.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;C.fire("movestart").fire("dragstart"),C.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(C){if(this._map.options.inertia){var H=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(H),this._prunePositions(H)}this._map.fire("move",C).fire("drag",C)},_prunePositions:function(C){for(;this._positions.length>1&&C-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var C=this._map.getSize().divideBy(2),H=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=H.subtract(C).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(C,H){return C-(C-H)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var C=this._draggable._newPos.subtract(this._draggable._startPos),H=this._offsetLimit;C.x<H.min.x&&(C.x=this._viscousLimit(C.x,H.min.x)),C.y<H.min.y&&(C.y=this._viscousLimit(C.y,H.min.y)),C.x>H.max.x&&(C.x=this._viscousLimit(C.x,H.max.x)),C.y>H.max.y&&(C.y=this._viscousLimit(C.y,H.max.y)),this._draggable._newPos=this._draggable._startPos.add(C)}},_onPreDragWrap:function(){var C=this._worldWidth,H=Math.round(C/2),c=this._initialWorldOffset,h=this._draggable._newPos.x,A=(h-H+c)%C+H-c,w=(h+H+c)%C-H-c,P=Math.abs(A+c)<Math.abs(w+c)?A:w;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=P},_onDragEnd:function(C){var H=this._map,c=H.options,h=!c.inertia||C.noInertia||this._times.length<2;if(H.fire("dragend",C),h)H.fire("moveend");else{this._prunePositions(+new Date);var A=this._lastPos.subtract(this._positions[0]),w=(this._lastTime-this._times[0])/1e3,P=c.easeLinearity,I=A.multiplyBy(P/w),N=I.distanceTo([0,0]),G=Math.min(c.inertiaMaxSpeed,N),n1=I.multiplyBy(G/N),x1=G/(c.inertiaDeceleration*P),E1=n1.multiplyBy(-x1/2).round();!E1.x&&!E1.y?H.fire("moveend"):(E1=H._limitOffset(E1,H.options.maxBounds),i1(function(){H.panBy(E1,{duration:x1,easeLinearity:P,noMoveStart:!0,animate:!0})}))}}});S1.addInitHook("addHandler","dragging",oo),S1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ao=H5.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(C){this._map=C,this._setPanDelta(C.options.keyboardPanDelta),this._setZoomDelta(C.options.zoomDelta)},addHooks:function(){var C=this._map._container;C.tabIndex<=0&&(C.tabIndex="0"),v1(C,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),j1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var C=document.body,H=document.documentElement,c=C.scrollTop||H.scrollTop,h=C.scrollLeft||H.scrollLeft;this._map._container.focus(),window.scrollTo(h,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(C){var H=this._panKeys={},c=this.keyCodes,h,A;for(h=0,A=c.left.length;h<A;h++)H[c.left[h]]=[-1*C,0];for(h=0,A=c.right.length;h<A;h++)H[c.right[h]]=[C,0];for(h=0,A=c.down.length;h<A;h++)H[c.down[h]]=[0,C];for(h=0,A=c.up.length;h<A;h++)H[c.up[h]]=[0,-1*C]},_setZoomDelta:function(C){var H=this._zoomKeys={},c=this.keyCodes,h,A;for(h=0,A=c.zoomIn.length;h<A;h++)H[c.zoomIn[h]]=C;for(h=0,A=c.zoomOut.length;h<A;h++)H[c.zoomOut[h]]=-C},_addHooks:function(){v1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){j1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(C){if(!(C.altKey||C.ctrlKey||C.metaKey)){var H=C.keyCode,c=this._map,h;if(H in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(h=this._panKeys[H],C.shiftKey&&(h=V1(h).multiplyBy(3)),c.options.maxBounds&&(h=c._limitOffset(V1(h),c.options.maxBounds)),c.options.worldCopyJump){var A=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(h)));c.panTo(A)}else c.panBy(h)}else if(H in this._zoomKeys)c.setZoom(c.getZoom()+(C.shiftKey?3:1)*this._zoomKeys[H]);else if(H===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;G5(C)}}});S1.addInitHook("addHandler","keyboard",ao),S1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Co=H5.extend({addHooks:function(){v1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){j1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(C){var H=Z2(C),c=this._map.options.wheelDebounceTime;this._delta+=H,this._lastMousePos=this._map.mouseEventToContainerPoint(C),this._startTime||(this._startTime=+new Date);var h=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),h),G5(C)},_performZoom:function(){var C=this._map,H=C.getZoom(),c=this._map.options.zoomSnap||0;C._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),A=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,w=c?Math.ceil(A/c)*c:A,P=C._limitZoom(H+(this._delta>0?w:-w))-H;this._delta=0,this._startTime=null,P&&(C.options.scrollWheelZoom==="center"?C.setZoom(H+P):C.setZoomAround(this._lastMousePos,H+P))}});S1.addInitHook("addHandler","scrollWheelZoom",Co);var sL=600;S1.mergeOptions({tapHold:h1.touchNative&&h1.safari&&h1.mobile,tapTolerance:15});var no=H5.extend({addHooks:function(){v1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){j1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(C){if(clearTimeout(this._holdTimeout),C.touches.length===1){var H=C.touches[0];this._startPos=this._newPos=new t1(H.clientX,H.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(v1(document,"touchend",d2),v1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",H))},this),sL),v1(document,"touchend touchcancel contextmenu",this._cancel,this),v1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function C(){j1(document,"touchend",d2),j1(document,"touchend touchcancel",C)},_cancel:function(){clearTimeout(this._holdTimeout),j1(document,"touchend touchcancel contextmenu",this._cancel,this),j1(document,"touchmove",this._onMove,this)},_onMove:function(C){var H=C.touches[0];this._newPos=new t1(H.clientX,H.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(C,H){var c=new MouseEvent(C,{bubbles:!0,cancelable:!0,view:window,screenX:H.screenX,screenY:H.screenY,clientX:H.clientX,clientY:H.clientY});c._simulated=!0,H.target.dispatchEvent(c)}});S1.addInitHook("addHandler","tapHold",no),S1.mergeOptions({touchZoom:h1.touch,bounceAtZoomLimits:!0});var so=H5.extend({addHooks:function(){u1(this._map._container,"leaflet-touch-zoom"),v1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){B1(this._map._container,"leaflet-touch-zoom"),j1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(C){var H=this._map;if(!(!C.touches||C.touches.length!==2||H._animatingZoom||this._zooming)){var c=H.mouseEventToContainerPoint(C.touches[0]),h=H.mouseEventToContainerPoint(C.touches[1]);this._centerPoint=H.getSize()._divideBy(2),this._startLatLng=H.containerPointToLatLng(this._centerPoint),H.options.touchZoom!=="center"&&(this._pinchStartLatLng=H.containerPointToLatLng(c.add(h)._divideBy(2))),this._startDist=c.distanceTo(h),this._startZoom=H.getZoom(),this._moved=!1,this._zooming=!0,H._stop(),v1(document,"touchmove",this._onTouchMove,this),v1(document,"touchend touchcancel",this._onTouchEnd,this),d2(C)}},_onTouchMove:function(C){if(!(!C.touches||C.touches.length!==2||!this._zooming)){var H=this._map,c=H.mouseEventToContainerPoint(C.touches[0]),h=H.mouseEventToContainerPoint(C.touches[1]),A=c.distanceTo(h)/this._startDist;if(this._zoom=H.getScaleZoom(A,this._startZoom),!H.options.bounceAtZoomLimits&&(this._zoom<H.getMinZoom()&&A<1||this._zoom>H.getMaxZoom()&&A>1)&&(this._zoom=H._limitZoom(this._zoom)),H.options.touchZoom==="center"){if(this._center=this._startLatLng,A===1)return}else{var w=c._add(h)._divideBy(2)._subtract(this._centerPoint);if(A===1&&w.x===0&&w.y===0)return;this._center=H.unproject(H.project(this._pinchStartLatLng,this._zoom).subtract(w),this._zoom)}this._moved||(H._moveStart(!0,!1),this._moved=!0),d1(this._animRequest);var P=o(H._move,H,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=i1(P,this,!0),d2(C)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,d1(this._animRequest),j1(document,"touchmove",this._onTouchMove,this),j1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});S1.addInitHook("addHandler","touchZoom",so),S1.BoxZoom=ro,S1.DoubleClickZoom=io,S1.Drag=oo,S1.Keyboard=ao,S1.ScrollWheelZoom=Co,S1.TapHold=no,S1.TouchZoom=so,r.Bounds=j,r.Browser=h1,r.CRS=b1,r.Canvas=Xi,r.Circle=de,r.CircleMarker=y6,r.Class=A1,r.Control=X2,r.DivIcon=Yi,r.DivOverlay=p0,r.DomEvent=s5,r.DomUtil=B3,r.Draggable=k5,r.Evented=T1,r.FeatureGroup=y0,r.GeoJSON=k0,r.GridLayer=S4,r.Handler=H5,r.Icon=b7,r.ImageOverlay=P6,r.LatLng=c1,r.LatLngBounds=L1,r.Layer=Y5,r.LayerGroup=w7,r.LineUtil=DV,r.Map=S1,r.Marker=S6,r.Mixin=Ve,r.Path=t3,r.Point=t1,r.PolyUtil=PV,r.Polygon=S7,r.Polyline=Z0,r.Popup=E6,r.PosAnimation=Z5,r.Projection=BV,r.Rectangle=eo,r.Renderer=O0,r.SVG=Z4,r.SVGOverlay=qi,r.TileLayer=Z7,r.Tooltip=$6,r.Transformation=R2,r.Util=_1,r.VideoOverlay=Gi,r.bind=o,r.bounds=a1,r.canvas=Ji,r.circle=qV,r.circleMarker=GV,r.control=Y,r.divIcon=iL,r.extend=e,r.featureGroup=WV,r.geoJSON=ji,r.geoJson=KV,r.gridLayer=oL,r.icon=UV,r.imageOverlay=XV,r.latLng=M1,r.latLngBounds=m1,r.layerGroup=NV,r.map=z3,r.marker=jV,r.point=V1,r.polygon=QV,r.polyline=YV,r.popup=eL,r.rectangle=nL,r.setOptions=g,r.stamp=n,r.svg=to,r.svgOverlay=tL,r.tileLayer=Qi,r.tooltip=rL,r.transformation=c2,r.version=t,r.videoOverlay=JV;var HL=window.L;r.noConflict=function(){return window.L=HL,this},window.L=r}))});var B6=globalThis,z6=B6.ShadowRoot&&(B6.ShadyCSS===void 0||B6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),Mo=new WeakMap,k4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z6&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Mo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Mo.set(e,t))}return t}toString(){return this.cssText}},T0=r=>new k4(typeof r=="string"?r:r+"",void 0,fe),s1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new k4(e,r,fe)},po=(r,t)=>{if(z6)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),o=B6.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)}},Ae=z6?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return T0(e)})(r):r;var{is:gL,defineProperty:_L,getOwnPropertyDescriptor:wL,getOwnPropertyNames:bL,getOwnPropertySymbols:SL,getPrototypeOf:yL}=Object,e3=globalThis,uo=e3.trustedTypes,ZL=uo?uo.emptyScript:"",kL=e3.reactiveElementPolyfillSupport,O4=(r,t)=>r,T4={toAttribute(r,t){switch(t){case Boolean:r=r?ZL:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},I6=(r,t)=>!gL(r,t),ho={attribute:!0,type:String,converter:T4,reflect:!1,useDefault:!1,hasChanged:I6};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),e3.litPropertyMetadata??(e3.litPropertyMetadata=new WeakMap);var P0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ho){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&_L(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:a}=wL(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let s=o?.call(this);a?.call(this,n),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ho}static _$Ei(){if(this.hasOwnProperty(O4("elementProperties")))return;let t=yL(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O4("properties"))){let e=this.properties,i=[...bL(e),...SL(e)];for(let o of i)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Ae(o))}else t!==void 0&&e.push(Ae(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return po(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:T4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:T4;this._$Em=o;let s=n.fromAttribute(e,a.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(t!==void 0){let n=this.constructor;if(o===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??I6)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:n}=a,s=this[o];n!==!0||this._$AL.has(o)||s===void 0||this.C(o,void 0,a,s)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};P0.elementStyles=[],P0.shadowRootOptions={mode:"open"},P0[O4("elementProperties")]=new Map,P0[O4("finalized")]=new Map,kL?.({ReactiveElement:P0}),(e3.reactiveElementVersions??(e3.reactiveElementVersions=[])).push("2.1.2");var E4=globalThis,mo=r=>r,N6=E4.trustedTypes,fo=N6?N6.createPolicy("lit-html",{createHTML:r=>r}):void 0,wo="$lit$",r3=`lit$${Math.random().toFixed(9).slice(2)}$`,bo="?"+r3,OL=`<${bo}>`,G3=document,$4=()=>G3.createComment(""),F4=r=>r===null||typeof r!="object"&&typeof r!="function",Se=Array.isArray,TL=r=>Se(r)||typeof r?.[Symbol.iterator]=="function",ve=`[ 	
\f\r]`,P4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,vo=/>/g,U3=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xo=/'/g,go=/"/g,So=/^(?:script|style|textarea|title)$/i,ye=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),x=ye(1),Z1=ye(2),Cx=ye(3),m5=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),_o=new WeakMap,j3=G3.createTreeWalker(G3,129);function yo(r,t){if(!Se(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fo!==void 0?fo.createHTML(t):t}var PL=(r,t)=>{let e=r.length-1,i=[],o,a=t===2?"<svg>":t===3?"<math>":"",n=P4;for(let s=0;s<e;s++){let V=r[s],l,M,u=-1,f=0;for(;f<V.length&&(n.lastIndex=f,M=n.exec(V),M!==null);)f=n.lastIndex,n===P4?M[1]==="!--"?n=Ao:M[1]!==void 0?n=vo:M[2]!==void 0?(So.test(M[2])&&(o=RegExp("</"+M[2],"g")),n=U3):M[3]!==void 0&&(n=U3):n===U3?M[0]===">"?(n=o??P4,u=-1):M[1]===void 0?u=-2:(u=n.lastIndex-M[2].length,l=M[1],n=M[3]===void 0?U3:M[3]==='"'?go:xo):n===go||n===xo?n=U3:n===Ao||n===vo?n=P4:(n=U3,o=void 0);let g=n===U3&&r[s+1].startsWith("/>")?" ":"";a+=n===P4?V+OL:u>=0?(i.push(l),V.slice(0,u)+wo+V.slice(u)+r3+g):V+r3+(u===-2?s:g)}return[yo(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},R4=class r{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,n=0,s=t.length-1,V=this.parts,[l,M]=PL(t,e);if(this.el=r.createElement(l,i),j3.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=j3.nextNode())!==null&&V.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(wo)){let f=M[n++],g=o.getAttribute(u).split(r3),b=/([.?@])?(.*)/.exec(f);V.push({type:1,index:a,name:b[2],strings:g,ctor:b[1]==="."?ge:b[1]==="?"?_e:b[1]==="@"?we:P7}),o.removeAttribute(u)}else u.startsWith(r3)&&(V.push({type:6,index:a}),o.removeAttribute(u));if(So.test(o.tagName)){let u=o.textContent.split(r3),f=u.length-1;if(f>0){o.textContent=N6?N6.emptyScript:"";for(let g=0;g<f;g++)o.append(u[g],$4()),j3.nextNode(),V.push({type:2,index:++a});o.append(u[f],$4())}}}else if(o.nodeType===8)if(o.data===bo)V.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(r3,u+1))!==-1;)V.push({type:7,index:a}),u+=r3.length-1}a++}}static createElement(t,e){let i=G3.createElement("template");return i.innerHTML=t,i}};function T7(r,t,e=r,i){if(t===m5)return t;let o=i!==void 0?e._$Co?.[i]:e._$Cl,a=F4(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=T7(r,o._$AS(r,t.values),o,i)),t}var xe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??G3).importNode(e,!0);j3.currentNode=o;let a=j3.nextNode(),n=0,s=0,V=i[0];for(;V!==void 0;){if(n===V.index){let l;V.type===2?l=new D4(a,a.nextSibling,this,t):V.type===1?l=new V.ctor(a,V.name,V.strings,this,t):V.type===6&&(l=new be(a,this,t)),this._$AV.push(l),V=i[++s]}n!==V?.index&&(a=j3.nextNode(),n++)}return j3.currentNode=G3,o}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},D4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T7(this,t,e),F4(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==m5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):TL(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&F4(this._$AH)?this._$AA.nextSibling.data=t:this.T(G3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=R4.createElement(yo(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let a=new xe(o,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=_o.get(t.strings);return e===void 0&&_o.set(t.strings,e=new R4(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let a of t)o===e.length?e.push(i=new r(this.O($4()),this.O($4()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=mo(t).nextSibling;mo(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(t,e=this,i,o){let a=this.strings,n=!1;if(a===void 0)t=T7(this,t,e,0),n=!F4(t)||t!==this._$AH&&t!==m5,n&&(this._$AH=t);else{let s=t,V,l;for(t=a[0],V=0;V<a.length-1;V++)l=T7(this,s[i+V],e,V),l===m5&&(l=this._$AH[V]),n||(n=!F4(l)||l!==this._$AH[V]),l===S?t=S:t!==S&&(t+=(l??"")+a[V+1]),this._$AH[V]=l}n&&!o&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ge=class extends P7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},_e=class extends P7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},we=class extends P7{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=T7(this,t,e,0)??S)===m5)return;let i=this._$AH,o=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==S&&(i===S||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},be=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T7(this,t)}};var EL=E4.litHtmlPolyfillSupport;EL?.(R4,D4),(E4.litHtmlVersions??(E4.litHtmlVersions=[])).push("3.3.3");var Zo=(r,t,e)=>{let i=e?.renderBefore??t,o=i._$litPart$;if(o===void 0){let a=e?.renderBefore??null;i._$litPart$=o=new D4(t.insertBefore($4(),a),a,void 0,e??{})}return o._$AI(r),o};var B4=globalThis,r1=class extends P0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zo(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return m5}};r1._$litElement$=!0,r1.finalized=!0,B4.litElementHydrateSupport?.({LitElement:r1});var $L=B4.litElementPolyfillSupport;$L?.({LitElement:r1});(B4.litElementVersions??(B4.litElementVersions=[])).push("4.2.2");var W6="2026.10.23.41",z4="weather-station-flex-card",I4="Weather Station Flex Card";var q1=s1`
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
`,U6=s1`
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg, rgba(127, 127, 127, 0.08));
      border-radius: var(--wsfc-radius, 16px);
      box-shadow: var(--wsfc-tile-drop, 0 0 0 transparent), var(--wsfc-tile-glow, 0 0 0 transparent);
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
    /* Per panel: no shadow / border / glow (Layout → Shadow, Border, Glow). */
    .tile.no-shadow { --wsfc-tile-drop: 0 0 0 transparent; }
    .tile.no-glow { --wsfc-tile-glow: 0 0 0 transparent; }
    .tile.no-border { --wsfc-tile-border: 0 solid transparent; }
    /* Panels without a tile of their own get no border or shadow. */
    .tile.bare:not(.bg-translucent):not(.bg-solid), .tile.stack { border: 0; box-shadow: none; }
    /* Children fill the tile but never shrink below their content. */
    .tile > :not(.expand) { flex: 1 0 auto; }
`,j6=s1`
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
`,I1=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function E7(r,t,e,i){return x`<div class="seg" role="group" aria-label=${i}>
    ${r.map(o=>x`<button type="button" aria-pressed=${String(o.value===t)} @click=${()=>e(o.value)}>${o.label}</button>`)}
  </div>`}function n2(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function F1(r,t,e,i=S){return r?.show_title===!1?i===S?S:x`<div class="head"><span class="title"></span>${i}</div>`:x`<div class="head">
    ${r?.show_icon===!1?S:x`<ha-icon icon=${r?.icon||t}></ha-icon>`}
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function $7(r,{label:t,value:e,unit:i,digits:o=0,color:a,entity:n}){let s=()=>n2(r,n);return x`<div class="reading" @click=${s} role=${n?"button":S} tabindex=${n?0:S}
    @keydown=${V=>(V.key==="Enter"||V.key===" ")&&s()}>
    <span class="v">${I1(e,o)}<small>${i||""}</small></span>
    <span class="l">${a?x`<span class="dot" style="background:${a}"></span>`:S}${t}</span>
  </div>`}var G6=s1`
  .paused { flex: 1; min-height: 120px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    color: var(--wsfc-muted); font-size: 13px; text-align: center; padding: 8px;
    background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
  .paused ha-icon { --mdc-icon-size: 32px; opacity: 0.7; }
`;function q6(r,t){return x`<div class="paused" role="img" aria-label="${t} paused while editing"><ha-icon icon=${r}></ha-icon><span>${t} — paused while editing</span></div>`}var FL=typeof global=="object"&&global&&global.Object===Object&&global,Y6=FL;var RL=typeof self=="object"&&self&&self.Object===Object&&self,DL=Y6||RL||Function("return this")(),P5=DL;var BL=P5.Symbol,E0=BL;var ko=Object.prototype,zL=ko.hasOwnProperty,IL=ko.toString,N4=E0?E0.toStringTag:void 0;function NL(r){var t=zL.call(r,N4),e=r[N4];try{r[N4]=void 0;var i=!0}catch{}var o=IL.call(r);return i&&(t?r[N4]=e:delete r[N4]),o}var Oo=NL;var WL=Object.prototype,UL=WL.toString;function jL(r){return UL.call(r)}var To=jL;var GL="[object Null]",qL="[object Undefined]",Po=E0?E0.toStringTag:void 0;function YL(r){return r==null?r===void 0?qL:GL:Po&&Po in Object(r)?Oo(r):To(r)}var u0=YL;function QL(r){return r!=null&&typeof r=="object"}var E5=QL;var KL="[object Symbol]";function XL(r){return typeof r=="symbol"||E5(r)&&u0(r)==KL}var Q6=XL;function JL(r,t){for(var e=-1,i=r==null?0:r.length,o=Array(i);++e<i;)o[e]=t(r[e],e,r);return o}var Eo=JL;var tl=Array.isArray,q3=tl;var el=1/0,$o=E0?E0.prototype:void 0,Fo=$o?$o.toString:void 0;function Ro(r){if(typeof r=="string")return r;if(q3(r))return Eo(r,Ro)+"";if(Q6(r))return Fo?Fo.call(r):"";var t=r+"";return t=="0"&&1/r==-el?"-0":t}var Do=Ro;var rl=/\s/;function il(r){for(var t=r.length;t--&&rl.test(r.charAt(t)););return t}var Bo=il;var ol=/^\s+/;function al(r){return r&&r.slice(0,Bo(r)+1).replace(ol,"")}var zo=al;function Cl(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var N2=Cl;var Io=NaN,nl=/^[-+]0x[0-9a-f]+$/i,sl=/^0b[01]+$/i,Hl=/^0o[0-7]+$/i,Vl=parseInt;function Ll(r){if(typeof r=="number")return r;if(Q6(r))return Io;if(N2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=N2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=zo(r);var e=sl.test(r);return e||Hl.test(r)?Vl(r.slice(2),e?2:8):nl.test(r)?Io:+r}var No=Ll;var Wo=1/0,ll=17976931348623157e292;function cl(r){if(!r)return r===0?r:0;if(r=No(r),r===Wo||r===-Wo){var t=r<0?-1:1;return t*ll}return r===r?r:0}var Ze=cl;function Ml(r){return r}var K6=Ml;var dl="[object AsyncFunction]",pl="[object Function]",ul="[object GeneratorFunction]",hl="[object Proxy]";function ml(r){if(!N2(r))return!1;var t=u0(r);return t==pl||t==ul||t==dl||t==hl}var F7=ml;var fl=P5["__core-js_shared__"],X6=fl;var Uo=(function(){var r=/[^.]+$/.exec(X6&&X6.keys&&X6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function Al(r){return!!Uo&&Uo in r}var jo=Al;var vl=Function.prototype,xl=vl.toString;function gl(r){if(r!=null){try{return xl.call(r)}catch{}try{return r+""}catch{}}return""}var Go=gl;var _l=/[\\^$.*+?()[\]{}|]/g,wl=/^\[object .+?Constructor\]$/,bl=Function.prototype,Sl=Object.prototype,yl=bl.toString,Zl=Sl.hasOwnProperty,kl=RegExp("^"+yl.call(Zl).replace(_l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ol(r){if(!N2(r)||jo(r))return!1;var t=F7(r)?kl:wl;return t.test(Go(r))}var qo=Ol;function Tl(r,t){return r?.[t]}var Yo=Tl;function Pl(r,t){var e=Yo(r,t);return qo(e)?e:void 0}var R7=Pl;var Qo=Object.create,El=(function(){function r(){}return function(t){if(!N2(t))return{};if(Qo)return Qo(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),Ko=El;function $l(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var Xo=$l;function Fl(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var Jo=Fl;var Rl=800,Dl=16,Bl=Date.now;function zl(r){var t=0,e=0;return function(){var i=Bl(),o=Dl-(i-e);if(e=i,o>0){if(++t>=Rl)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var ta=zl;function Il(r){return function(){return r}}var ea=Il;var Nl=(function(){try{var r=R7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),D7=Nl;var Wl=D7?function(r,t){return D7(r,"toString",{configurable:!0,enumerable:!1,value:ea(t),writable:!0})}:K6,ra=Wl;var Ul=ta(ra),ia=Ul;var jl=9007199254740991,Gl=/^(?:0|[1-9]\d*)$/;function ql(r,t){var e=typeof r;return t=t??jl,!!t&&(e=="number"||e!="symbol"&&Gl.test(r))&&r>-1&&r%1==0&&r<t}var J6=ql;function Yl(r,t,e){t=="__proto__"&&D7?D7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var B7=Yl;function Ql(r,t){return r===t||r!==r&&t!==t}var i3=Ql;var Kl=Object.prototype,Xl=Kl.hasOwnProperty;function Jl(r,t,e){var i=r[t];(!(Xl.call(r,t)&&i3(i,e))||e===void 0&&!(t in r))&&B7(r,t,e)}var oa=Jl;function tc(r,t,e,i){var o=!e;e||(e={});for(var a=-1,n=t.length;++a<n;){var s=t[a],V=i?i(e[s],r[s],s,e,r):void 0;V===void 0&&(V=r[s]),o?B7(e,s,V):oa(e,s,V)}return e}var aa=tc;var Ca=Math.max;function ec(r,t,e){return t=Ca(t===void 0?r.length-1:t,0),function(){for(var i=arguments,o=-1,a=Ca(i.length-t,0),n=Array(a);++o<a;)n[o]=i[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=i[o];return s[t]=e(n),Xo(r,this,s)}}var na=ec;function rc(r,t){return ia(na(r,t,K6),r+"")}var sa=rc;var ic=9007199254740991;function oc(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ic}var t8=oc;function ac(r){return r!=null&&t8(r.length)&&!F7(r)}var z7=ac;function Cc(r,t,e){if(!N2(e))return!1;var i=typeof t;return(i=="number"?z7(e)&&J6(t,e.length):i=="string"&&t in e)?i3(e[t],r):!1}var e8=Cc;function nc(r){return sa(function(t,e){var i=-1,o=e.length,a=o>1?e[o-1]:void 0,n=o>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(o--,a):void 0,n&&e8(e[0],e[1],n)&&(a=o<3?void 0:a,o=1),t=Object(t);++i<o;){var s=e[i];s&&r(t,s,i,a)}return t})}var Ha=nc;var sc=Object.prototype;function Hc(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||sc;return r===e}var r8=Hc;function Vc(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var Va=Vc;var Lc="[object Arguments]";function lc(r){return E5(r)&&u0(r)==Lc}var ke=lc;var La=Object.prototype,cc=La.hasOwnProperty,Mc=La.propertyIsEnumerable,dc=ke((function(){return arguments})())?ke:function(r){return E5(r)&&cc.call(r,"callee")&&!Mc.call(r,"callee")},W4=dc;function pc(){return!1}var la=pc;var da=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ca=da&&typeof module=="object"&&module&&!module.nodeType&&module,uc=ca&&ca.exports===da,Ma=uc?P5.Buffer:void 0,hc=Ma?Ma.isBuffer:void 0,mc=hc||la,i8=mc;var fc="[object Arguments]",Ac="[object Array]",vc="[object Boolean]",xc="[object Date]",gc="[object Error]",_c="[object Function]",wc="[object Map]",bc="[object Number]",Sc="[object Object]",yc="[object RegExp]",Zc="[object Set]",kc="[object String]",Oc="[object WeakMap]",Tc="[object ArrayBuffer]",Pc="[object DataView]",Ec="[object Float32Array]",$c="[object Float64Array]",Fc="[object Int8Array]",Rc="[object Int16Array]",Dc="[object Int32Array]",Bc="[object Uint8Array]",zc="[object Uint8ClampedArray]",Ic="[object Uint16Array]",Nc="[object Uint32Array]",s2={};s2[Ec]=s2[$c]=s2[Fc]=s2[Rc]=s2[Dc]=s2[Bc]=s2[zc]=s2[Ic]=s2[Nc]=!0;s2[fc]=s2[Ac]=s2[Tc]=s2[vc]=s2[Pc]=s2[xc]=s2[gc]=s2[_c]=s2[wc]=s2[bc]=s2[Sc]=s2[yc]=s2[Zc]=s2[kc]=s2[Oc]=!1;function Wc(r){return E5(r)&&t8(r.length)&&!!s2[u0(r)]}var pa=Wc;function Uc(r){return function(t){return r(t)}}var ua=Uc;var ha=typeof exports=="object"&&exports&&!exports.nodeType&&exports,U4=ha&&typeof module=="object"&&module&&!module.nodeType&&module,jc=U4&&U4.exports===ha,Oe=jc&&Y6.process,Gc=(function(){try{var r=U4&&U4.require&&U4.require("util").types;return r||Oe&&Oe.binding&&Oe.binding("util")}catch{}})(),Te=Gc;var ma=Te&&Te.isTypedArray,qc=ma?ua(ma):pa,o8=qc;var Yc=Object.prototype,Qc=Yc.hasOwnProperty;function Kc(r,t){var e=q3(r),i=!e&&W4(r),o=!e&&!i&&i8(r),a=!e&&!i&&!o&&o8(r),n=e||i||o||a,s=n?Va(r.length,String):[],V=s.length;for(var l in r)(t||Qc.call(r,l))&&!(n&&(l=="length"||o&&(l=="offset"||l=="parent")||a&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||J6(l,V)))&&s.push(l);return s}var fa=Kc;function Xc(r,t){return function(e){return r(t(e))}}var Aa=Xc;function Jc(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var va=Jc;var tM=Object.prototype,eM=tM.hasOwnProperty;function rM(r){if(!N2(r))return va(r);var t=r8(r),e=[];for(var i in r)i=="constructor"&&(t||!eM.call(r,i))||e.push(i);return e}var xa=rM;function iM(r){return z7(r)?fa(r,!0):xa(r)}var a8=iM;var oM=R7(Object,"create"),$0=oM;function aM(){this.__data__=$0?$0(null):{},this.size=0}var ga=aM;function CM(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var _a=CM;var nM="__lodash_hash_undefined__",sM=Object.prototype,HM=sM.hasOwnProperty;function VM(r){var t=this.__data__;if($0){var e=t[r];return e===nM?void 0:e}return HM.call(t,r)?t[r]:void 0}var wa=VM;var LM=Object.prototype,lM=LM.hasOwnProperty;function cM(r){var t=this.__data__;return $0?t[r]!==void 0:lM.call(t,r)}var ba=cM;var MM="__lodash_hash_undefined__";function dM(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=$0&&t===void 0?MM:t,this}var Sa=dM;function I7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}I7.prototype.clear=ga;I7.prototype.delete=_a;I7.prototype.get=wa;I7.prototype.has=ba;I7.prototype.set=Sa;var Pe=I7;function pM(){this.__data__=[],this.size=0}var ya=pM;function uM(r,t){for(var e=r.length;e--;)if(i3(r[e][0],t))return e;return-1}var o3=uM;var hM=Array.prototype,mM=hM.splice;function fM(r){var t=this.__data__,e=o3(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():mM.call(t,e,1),--this.size,!0}var Za=fM;function AM(r){var t=this.__data__,e=o3(t,r);return e<0?void 0:t[e][1]}var ka=AM;function vM(r){return o3(this.__data__,r)>-1}var Oa=vM;function xM(r,t){var e=this.__data__,i=o3(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var Ta=xM;function N7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}N7.prototype.clear=ya;N7.prototype.delete=Za;N7.prototype.get=ka;N7.prototype.has=Oa;N7.prototype.set=Ta;var a3=N7;var gM=R7(P5,"Map"),C8=gM;function _M(){this.size=0,this.__data__={hash:new Pe,map:new(C8||a3),string:new Pe}}var Pa=_M;function wM(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var Ea=wM;function bM(r,t){var e=r.__data__;return Ea(t)?e[typeof t=="string"?"string":"hash"]:e.map}var C3=bM;function SM(r){var t=C3(this,r).delete(r);return this.size-=t?1:0,t}var $a=SM;function yM(r){return C3(this,r).get(r)}var Fa=yM;function ZM(r){return C3(this,r).has(r)}var Ra=ZM;function kM(r,t){var e=C3(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var Da=kM;function W7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}W7.prototype.clear=Pa;W7.prototype.delete=$a;W7.prototype.get=Fa;W7.prototype.has=Ra;W7.prototype.set=Da;var Ba=W7;function OM(r){return r==null?"":Do(r)}var n8=OM;var TM=Aa(Object.getPrototypeOf,Object),s8=TM;var PM="[object Object]",EM=Function.prototype,$M=Object.prototype,za=EM.toString,FM=$M.hasOwnProperty,RM=za.call(Object);function DM(r){if(!E5(r)||u0(r)!=PM)return!1;var t=s8(r);if(t===null)return!0;var e=FM.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&za.call(e)==RM}var Ia=DM;function BM(r,t,e){var i=-1,o=r.length;t<0&&(t=-t>o?0:o+t),e=e>o?o:e,e<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=r[i+t];return a}var Na=BM;function zM(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:Na(r,t,e)}var Wa=zM;var IM="\\ud800-\\udfff",NM="\\u0300-\\u036f",WM="\\ufe20-\\ufe2f",UM="\\u20d0-\\u20ff",jM=NM+WM+UM,GM="\\ufe0e\\ufe0f",qM="\\u200d",YM=RegExp("["+qM+IM+jM+GM+"]");function QM(r){return YM.test(r)}var H8=QM;function KM(r){return r.split("")}var Ua=KM;var ja="\\ud800-\\udfff",XM="\\u0300-\\u036f",JM="\\ufe20-\\ufe2f",td="\\u20d0-\\u20ff",ed=XM+JM+td,rd="\\ufe0e\\ufe0f",id="["+ja+"]",Ee="["+ed+"]",$e="\\ud83c[\\udffb-\\udfff]",od="(?:"+Ee+"|"+$e+")",Ga="[^"+ja+"]",qa="(?:\\ud83c[\\udde6-\\uddff]){2}",Ya="[\\ud800-\\udbff][\\udc00-\\udfff]",ad="\\u200d",Qa=od+"?",Ka="["+rd+"]?",Cd="(?:"+ad+"(?:"+[Ga,qa,Ya].join("|")+")"+Ka+Qa+")*",nd=Ka+Qa+Cd,sd="(?:"+[Ga+Ee+"?",Ee,qa,Ya,id].join("|")+")",Hd=RegExp($e+"(?="+$e+")|"+sd+nd,"g");function Vd(r){return r.match(Hd)||[]}var Xa=Vd;function Ld(r){return H8(r)?Xa(r):Ua(r)}var Ja=Ld;function ld(r){return function(t){t=n8(t);var e=H8(t)?Ja(t):void 0,i=e?e[0]:t.charAt(0),o=e?Wa(e,1).join(""):t.slice(1);return i[r]()+o}}var tC=ld;var cd=tC("toUpperCase"),eC=cd;function Md(r){return eC(n8(r).toLowerCase())}var $5=Md;function dd(){this.__data__=new a3,this.size=0}var rC=dd;function pd(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var iC=pd;function ud(r){return this.__data__.get(r)}var oC=ud;function hd(r){return this.__data__.has(r)}var aC=hd;var md=200;function fd(r,t){var e=this.__data__;if(e instanceof a3){var i=e.__data__;if(!C8||i.length<md-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new Ba(i)}return e.set(r,t),this.size=e.size,this}var CC=fd;function U7(r){var t=this.__data__=new a3(r);this.size=t.size}U7.prototype.clear=rC;U7.prototype.delete=iC;U7.prototype.get=oC;U7.prototype.has=aC;U7.prototype.set=CC;var nC=U7;var LC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,sC=LC&&typeof module=="object"&&module&&!module.nodeType&&module,Ad=sC&&sC.exports===LC,HC=Ad?P5.Buffer:void 0,VC=HC?HC.allocUnsafe:void 0;function vd(r,t){if(t)return r.slice();var e=r.length,i=VC?VC(e):new r.constructor(e);return r.copy(i),i}var lC=vd;var xd=P5.Uint8Array,Fe=xd;function gd(r){var t=new r.constructor(r.byteLength);return new Fe(t).set(new Fe(r)),t}var cC=gd;function _d(r,t){var e=t?cC(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var MC=_d;function wd(r){return typeof r.constructor=="function"&&!r8(r)?Ko(s8(r)):{}}var dC=wd;function bd(r){return function(t,e,i){for(var o=-1,a=Object(t),n=i(t),s=n.length;s--;){var V=n[r?s:++o];if(e(a[V],V,a)===!1)break}return t}}var pC=bd;var Sd=pC(),uC=Sd;function yd(r,t,e){(e!==void 0&&!i3(r[t],e)||e===void 0&&!(t in r))&&B7(r,t,e)}var j4=yd;function Zd(r){return E5(r)&&z7(r)}var hC=Zd;function kd(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var G4=kd;function Od(r){return aa(r,a8(r))}var mC=Od;function Td(r,t,e,i,o,a,n){var s=G4(r,e),V=G4(t,e),l=n.get(V);if(l){j4(r,e,l);return}var M=a?a(s,V,e+"",r,t,n):void 0,u=M===void 0;if(u){var f=q3(V),g=!f&&i8(V),b=!f&&!g&&o8(V);M=V,f||g||b?q3(s)?M=s:hC(s)?M=Jo(s):g?(u=!1,M=lC(V,!0)):b?(u=!1,M=MC(V,!0)):M=[]:Ia(V)||W4(V)?(M=s,W4(s)?M=mC(s):(!N2(s)||F7(s))&&(M=dC(V))):u=!1}u&&(n.set(V,M),o(M,V,i,a,n),n.delete(V)),j4(r,e,M)}var fC=Td;function AC(r,t,e,i,o){r!==t&&uC(t,function(a,n){if(o||(o=new nC),N2(a))fC(r,t,n,e,AC,i,o);else{var s=i?i(G4(r,n),a,n+"",r,t,o):void 0;s===void 0&&(s=a),j4(r,n,s)}},a8)}var vC=AC;var Pd=Ha(function(r,t,e){vC(r,t,e)}),Y3=Pd;var Ed=Math.floor,$d=Math.random;function Fd(r,t){return r+Ed($d()*(t-r+1))}var xC=Fd;var Rd=parseFloat,Dd=Math.min,Bd=Math.random;function zd(r,t,e){if(e&&typeof e!="boolean"&&e8(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=Ze(r),t===void 0?(t=r,r=0):t=Ze(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var o=Bd();return Dd(r+o*(t-r+Rd("1e-"+((o+"").length-1))),t)}return xC(r,t)}var W1=zd;var L2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Id={attribute:!0,type:String,converter:T4,reflect:!1,hasChanged:I6},Nd=(r=Id,t,e)=>{let{kind:i,metadata:o}=e,a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:n}=e;return{set(s){let V=t.get.call(this);t.set.call(this,s),this.requestUpdate(n,V,r,!0,s)},init(s){return s!==void 0&&this.C(n,void 0,r,s),s}}}if(i==="setter"){let{name:n}=e;return function(s){let V=this[n];t.call(this,s),this.requestUpdate(n,V,r,!0,s)}}throw Error("Unsupported decorator location: "+i)};function C1(r){return(t,e)=>typeof e=="object"?Nd(r,t,e):((i,o,a)=>{let n=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),n?Object.getOwnPropertyDescriptor(o,a):void 0})(r,t,e)}function e5(r){return C1({...r,state:!0,attribute:!1})}var Q3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function q4(r,t){return(e,i,o)=>{let a=n=>n.renderRoot?.querySelector(r)??null;if(t){let{get:n,set:s}=typeof i=="object"?e:o??(()=>{let V=Symbol();return{get(){return this[V]},set(l){this[V]=l}}})();return Q3(e,i,{get(){let V=n.call(this);return V===void 0&&(V=a(this),(V!==null||this.hasUpdated)&&s.call(this,V)),V}})}return Q3(e,i,{get(){return a(this)}})}}var gC=`:host {
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
`;var _C=s1`
  ${T0(gC)}
`;var K3,X3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(K3||(K3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(X3||(X3={}));function bC(){return(bC=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function Ud(r){return r.substr(0,r.indexOf("."))}var jd=function(r){switch(r.number_format){case K3.comma_decimal:return["en-US","en"];case K3.decimal_comma:return["de","es","it"];case K3.space_comma:return["fr","sv","cs"];case K3.system:return;default:return r.language}},Gd=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},Re=function(r,t,e){var i=t?jd(t):void 0;if(Number.isNaN=Number.isNaN||function o(a){return typeof a=="number"&&o(a)},t?.number_format!==K3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,wC(r,e)).format(Number(r))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,wC(r,e)).format(Number(r))}return typeof r=="string"?r:Gd(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},wC=function(r,t){var e=bC({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var qd=["closed","locked","off"];var H2=function(r,t,e,i){i=i||{},e=e??{};var o=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return o.detail=e,r.dispatchEvent(o),o};var V8=function(r){H2(window,"haptic",r)},Yd=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),H2(window,"location-changed",{replace:e})},Qd=function(r,t,e){e===void 0&&(e=!0);var i,o=Ud(t),a=o==="group"?"homeassistant":o;switch(o){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},Kd=function(r,t){var e=qd.includes(r.states[t].state);return Qd(r,t,e)},Xd=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(V8("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&H2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&Yd(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(Kd(t,e.entity),V8("success"));break;case"call-service":if(!i.service)return void V8("failure");var o=i.service.split(".",2);t.callService(o[0],o[1],i.service_data,i.target),V8("success");break;case"fire-dom-event":H2(r,"ll-custom",i)}},Y4=function(r,t,e,i){var o;i==="double_tap"&&e.double_tap_action?o=e.double_tap_action:i==="hold"&&e.hold_action?o=e.hold_action:i==="tap"&&e.tap_action&&(o=e.tap_action),Xd(r,t,e,o)};function F0(r){return r!==void 0&&r.action!=="none"}function SC(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var yC="NOT_RUNNING";var L8=O7(j7(),1);var kC=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Jd(r,t){return!!(r===t||kC(r)&&kC(t))}function tp(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!Jd(r[e],t[e]))return!1;return!0}function n3(r,t){t===void 0&&(t=tp);var e=null;function i(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(e&&e.lastThis===this&&t(o,e.lastArgs))return e.lastResult;var n=r.apply(this,o);return e={lastResult:n,lastArgs:o,lastThis:this},n}return i.clear=function(){e=null},i}var OC=(r,t)=>r?r.config.state!==yC?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",s3=(r,t)=>q7(t).toLocaleDateString(J3(r),{weekday:"short"}),TC=(r,t)=>q7(t).toLocaleDateString(J3(r),{day:"numeric"}),PC=(r,t)=>{let e=q7(t),i=J3(r),o=l8(r);try{let M=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:o}).formatToParts(e),u=M.find(g=>g.type==="hour"),f=M.find(g=>g.type==="dayPeriod");if(u){if(f)return{hour:u.value,suffix:f.value};let g=M.indexOf(u),b=M.slice(g+1).filter(k=>k.type==="literal").map(k=>k.value).join("");return b&&b.trim()?{hour:u.value,suffix:b.trim()}:{hour:u.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:o}),n=a.match(/\d+/),s=n?n[0]:a,V=a.replace(/\d+\s*/,"").trim();return V?{hour:s,suffix:V}:{hour:s}},EC=(r,t)=>{let e=q7(t),i=J3(r),o=l8(r);try{let M=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:o}).formatToParts(e),u=M.find(b=>b.type==="hour"),f=M.find(b=>b.type==="minute"),g=M.find(b=>b.type==="dayPeriod");if(u&&f){let b=M.indexOf(u),k=M.indexOf(f),O=M.slice(b+1,k).map(F=>F.value).join(""),T=`${u.value}${O}${f.value}`;if(g)return{time:T,suffix:g.value};let $=M.slice(k+1).filter(F=>F.type==="literal").map(F=>F.value).join("");return $&&$.trim()?{time:T,suffix:$.trim()}:{time:T}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:o}),n=a.match(/\d+[:.]\d+/),s=n?n[0]:a,V=a.replace(/\d+[:.]\d+\s*/,"").trim();return V?{time:s,suffix:V}:{time:s}},G7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},l8=n3(r=>{let t=r?.locale;if(t?.time_format===X3.language||t?.time_format===X3.system){let e=t.time_format===X3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===X3.am_pm}),J3=r=>r?.locale?.language||navigator.language||"en",q7=r=>typeof r=="string"?new Date(r):r,R0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let o=q7(t),a=L8.getTimes(o,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:o<a.sunrise||o>a.sunset}},$C=(r,t)=>{let e=q7(t),{fraction:i,phase:o}=L8.getMoonIllumination(e),a=o<=.5,n=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==n}},FC=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=e<.5,a=t===o?0:1,n=t?-60:160;return`M50 0 L${n} 0 L${n} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},ze=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${o} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},Y7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,RC=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},Be=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},DC=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=Be(t.secondary_info_attribute);i&&e.add(i);let o=t.show_attributes;if(Array.isArray(o))for(let a of o){let n=Be(a);n&&e.add(n)}else{let a=Be(o);a&&e.add(a)}return e.delete(r.entity),[...e]};var j2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},Ue={silent:{level:-1},fatal:{level:j2.fatal},error:{level:j2.error},warn:{level:j2.warn},log:{level:j2.log},info:{level:j2.info},success:{level:j2.success},fail:{level:j2.fail},ready:{level:j2.info},start:{level:j2.info},box:{level:j2.info},debug:{level:j2.debug},trace:{level:j2.trace},verbose:{level:j2.verbose}};function Ie(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function je(r,t,e=".",i){if(!Ie(t))return je(r,{},e,i);let o=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let n=r[a];n!=null&&(i&&i(o,a,n,e)||(Array.isArray(n)&&Array.isArray(o[a])?o[a]=[...n,...o[a]]:Ie(n)&&Ie(o[a])?o[a]=je(n,o[a],(e?`${e}.`:"")+a.toString(),i):o[a]=n))}return o}function ep(r){return(...t)=>t.reduce((e,i)=>je(e,i,"",r),{})}var rp=ep();function ip(r){return Object.prototype.toString.call(r)==="[object Object]"}function op(r){return!(!ip(r)||!r.message&&!r.args||r.stack)}var Ne=!1,BC=[],T2=class r{constructor(t={}){D(this,"options");D(this,"_lastLog");D(this,"_mockFn");let e=t.types||Ue;this.options=rp({...t,defaults:{...t.defaults},level:We(t.level,e),reporters:[...t.reporters||[]]},{types:Ue,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let o={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(o),this[i].raw=this._wrapLogFn(o,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=We(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){Ne=!0}resumeLogs(){Ne=!1;let t=BC.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(Ne){BC.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let o={date:new Date,args:[],...t,level:We(t.level,this.options.types)};!i&&e.length===1&&op(e[0])?Object.assign(o,e[0]):o.args=[...e],o.message&&(o.args.unshift(o.message),delete o.message),o.additional&&(Array.isArray(o.additional)||(o.additional=o.additional.split(`
`)),o.args.push(`
`+o.additional.join(`
`)),delete o.additional),o.type=typeof o.type=="string"?o.type.toLowerCase():"log",o.tag=typeof o.tag=="string"?o.tag:"";let a=(s=!1)=>{let V=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&V>0){let l=[...this._lastLog.object.args];V>1&&l.push(`(repeated ${V} times)`),this._log({...this._lastLog.object,args:l}),this._lastLog.count=1}s&&(this._lastLog.object=o,this._log(o))};clearTimeout(this._lastLog.timeout);let n=this._lastLog.time&&o.date?o.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=o.date,n<this.options.throttle)try{let s=JSON.stringify([o.type,o.tag,o.args]),V=this._lastLog.serialized===s;if(this._lastLog.serialized=s,V&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function We(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}T2.prototype.add=T2.prototype.addReporter;T2.prototype.remove=T2.prototype.removeReporter;T2.prototype.clear=T2.prototype.removeReporter;T2.prototype.withScope=T2.prototype.withTag;T2.prototype.mock=T2.prototype.mockTypes;T2.prototype.pause=T2.prototype.pauseLogs;T2.prototype.resume=T2.prototype.resumeLogs;function zC(r={}){return new T2(r)}var Ge=class{constructor(t){D(this,"options");D(this,"defaultColor");D(this,"levelColorMap");D(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,o=t.tag||"",n=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,s=`%c${[o,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${s}%c ${t.args[0]}`,n,"",...t.args.slice(1)):e(s,n,...t.args)}};function qe(r={}){return zC({reporters:r.reporters||[new Ge({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var Fy=qe();var ap=j2.info,Q5=qe({level:ap}).withTag("weather-forecast-card");var IC=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",Ye=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var c8={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Q7=r=>(...t)=>({_$litDirective$:r,values:t}),H3=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var NC="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,Qe=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:NC?"100px":"50px",height:NC?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",s=>{let V=s||window.event;return V.preventDefault&&V.preventDefault(),V.stopPropagation&&V.stopPropagation(),V.cancelBubble=!0,V.returnValue=!1,!1});let o=s=>{this.held=!1;let V,l;s.touches?(V=s.touches[0].pageX,l=s.touches[0].pageY):(V=s.pageX,l=s.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(V,l),this.held=!0},this.holdTime)},a=s=>{s.preventDefault(),i.stopPropagation&&s.stopPropagation(),!(["touchend","touchcancel"].includes(s.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?H2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?s.type==="click"&&s.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,H2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,H2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):H2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},n=s=>{s.keyCode===13&&a(s)};e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",o,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",n)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",Qe);var Cp=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},np=(r,t)=>{let e=Cp();e&&e.bind(r,t)},h0=Q7(class extends H3{update(r,[t]){return np(r.element,t),m5}render(r){}});var t7=2,G2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],M8=["rain","snow","lightning","sky","moon","sun","cloud"],d8=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],WC="temperature_and_precipitation";var Ke=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(Ke||{}),sp=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Hp={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},K5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},Vp=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return sp[e]},Lp=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let o=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return o;let a=Vp(i);if(!a)return o;let n=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${o} (${n})`},f5=(r,t,e)=>{let i=r.config,o=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||o;case"precipitation":return t.attributes.precipitation_unit||(o==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(o==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},lp=288e5,cp=864e5,Mp=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<lp}},dp=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<cp}},UC=r=>{if(r?.forecast&&r.forecast.length>2)return Mp(r.forecast)?{forecast:r.forecast,type:"hourly"}:dp(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},Xe=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:UC(r);if(e==="legacy")return UC(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},jC=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var GC=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,qC=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,o=(t&4)!==0;return e||i||o},Q4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let o={hourly:2,daily:1,twice_daily:4}[t];return(e&o)!==0},F5=r=>{if(Q4(r,"daily"))return"daily";if(Q4(r,"twice_daily"))return"twice_daily"},YC=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},K7=n3((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),K4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=f5(r,t,"wind_speed");return pp(e.wind_speed,i)},pp=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},p8=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return Hp[e]}}},QC=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,n=a===0?t:t-a,s=r.slice(i,i+n);if(i+=s.length,s.length===0)continue;let V=s.map(F=>F.temperature),l=s.map(F=>F.humidity).filter(F=>F!==void 0),M=s.map(F=>F.pressure).filter(F=>F!==void 0),u=s.map(F=>F.wind_speed).filter(F=>F!==void 0),f=s.map(F=>F.wind_bearing).filter(F=>F!==void 0),g=s.map(F=>F.precipitation_probability).filter(F=>F!==void 0),b=s.map(F=>F.uv_index).filter(F=>F!==void 0),k=s.map(F=>F.apparent_temperature).filter(F=>F!==void 0),O=new Date(s[s.length-1].datetime);O.setMinutes(59),O.setSeconds(59);let T={datetime:s[0].datetime,groupEndtime:O.toISOString(),condition:mp(s),temperature:parseFloat(Y7(V).toFixed(1))};l.length>0&&(T.humidity=Math.round(Y7(l))),g.length>0&&(T.precipitation_probability=Math.max(...g)),s.some(F=>F.precipitation!==void 0)&&(T.precipitation=s.reduce((F,Q)=>F+(Q.precipitation||0),0));let $=s.map(F=>F.templow).filter(F=>F!==void 0);$.length>0&&(T.templow=Math.min(...$)),M.length>0&&(T.pressure=Math.round(Y7(M))),u.length>0&&(T.wind_speed=Y7(u)),f.length>0&&(T.wind_bearing=hp(f)),b.length>0&&(T.uv_index=Math.max(...b)),k.length>0&&(T.apparent_temperature=parseFloat(Y7(k).toFixed(1))),e.push(T)}return e},up="mdi:gauge",KC=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?K5[r]:void 0)??up),X7=(r,t,e,i)=>{let o=t.attributes[i];if(o!==void 0){if(i==="wind_speed")return Lp(r,t);if(i==="wind_gust_speed"){let a=f5(r,t,"wind_gust_speed");return`${Re(o,r.locale)} ${a}`}if(i==="ozone"){let a=f5(r,t,"ozone");return`${o} ${a}`}return i==="apparent_temperature"||i==="dew_point"?m0(r,t,o,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},u8=(r,t,e,i,o)=>{let a=r.states[o];if(!a)return;let n=a.state;return n===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?m0(r,t,n,e.current?.temperature_precision):r.formatEntityState(a)},m0=(r,t,e,i,o)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,n=f5(r,t,"temperature"),s=typeof e=="string"?parseFloat(e):e;return isNaN(s)?`${e}${o?"":n}`:`${Re(s,r.locale,a)}${o?"":n}`},hp=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(s=>{let V=s*Math.PI/180;t+=Math.sin(V),e+=Math.cos(V)});let i=t/r.length,o=e/r.length,n=Math.atan2(i,o)*180/Math.PI;return n<0&&(n+=360),Math.round(n)},mp=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let o=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return o===-1&&(o=0),a===-1&&(a=0),o-a}),r[0]?.condition||"exceptional"};var J7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let o=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{o&&(o.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let o=t.scrollLeft,a=Math.round(o/i)*i,n=500,s=performance.now(),V=M=>M*(2-M),l=M=>{let u=this._container;if(!u){this._completeFinalize();return}let f=M-s,g=Math.min(f/n,1),b=V(g);u.scrollLeft=o+(a-o)*b,g<1?this._state.momentumId=requestAnimationFrame(l):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(l)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var XC="important",fp=" !"+XC,r5=Q7(class extends H3{constructor(r){if(super(r),r.type!==c8.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let o=t[i];if(o!=null){this.ft.add(i);let a=typeof o=="string"&&o.endsWith(fp);i.includes("-")||a?e.setProperty(i,a?o.slice(0,-11):o,a?XC:""):e[i]=o}}return m5}});var e7=Q7(class extends H3{constructor(r){if(super(r),r.type!==c8.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return m5}});function t9(r){return r+.5|0}var V3=(r,t,e)=>Math.max(Math.min(r,e),t);function X4(r){return V3(t9(r*2.55),0,255)}function L3(r){return V3(t9(r*255),0,255)}function D0(r){return V3(t9(r/2.55)/100,0,1)}function JC(r){return V3(t9(r*100),0,100)}var R5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},tr=[..."0123456789ABCDEF"],Ap=r=>tr[r&15],vp=r=>tr[(r&240)>>4]+tr[r&15],h8=r=>(r&240)>>4===(r&15),xp=r=>h8(r.r)&&h8(r.g)&&h8(r.b)&&h8(r.a);function gp(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&R5[r[1]]*17,g:255&R5[r[2]]*17,b:255&R5[r[3]]*17,a:t===5?R5[r[4]]*17:255}:(t===7||t===9)&&(e={r:R5[r[1]]<<4|R5[r[2]],g:R5[r[3]]<<4|R5[r[4]],b:R5[r[5]]<<4|R5[r[6]],a:t===9?R5[r[7]]<<4|R5[r[8]]:255})),e}var _p=(r,t)=>r<255?t(r):"";function wp(r){var t=xp(r)?Ap:vp;return r?"#"+t(r.r)+t(r.g)+t(r.b)+_p(r.a,t):void 0}var bp=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function on(r,t,e){let i=t*Math.min(e,1-e),o=(a,n=(a+r/30)%12)=>e-i*Math.max(Math.min(n-3,9-n,1),-1);return[o(0),o(8),o(4)]}function Sp(r,t,e){let i=(o,a=(o+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function yp(r,t,e){let i=on(r,1,.5),o;for(t+e>1&&(o=1/(t+e),t*=o,e*=o),o=0;o<3;o++)i[o]*=1-t-e,i[o]+=t;return i}function Zp(r,t,e,i,o){return r===o?(t-e)/i+(t<e?6:0):t===o?(e-r)/i+2:(r-t)/i+4}function er(r){let e=r.r/255,i=r.g/255,o=r.b/255,a=Math.max(e,i,o),n=Math.min(e,i,o),s=(a+n)/2,V,l,M;return a!==n&&(M=a-n,l=s>.5?M/(2-a-n):M/(a+n),V=Zp(e,i,o,M,a),V=V*60+.5),[V|0,l||0,s]}function rr(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(L3)}function ir(r,t,e){return rr(on,r,t,e)}function kp(r,t,e){return rr(yp,r,t,e)}function Op(r,t,e){return rr(Sp,r,t,e)}function an(r){return(r%360+360)%360}function Tp(r){let t=bp.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?X4(+t[5]):L3(+t[5]));let o=an(+t[2]),a=+t[3]/100,n=+t[4]/100;return t[1]==="hwb"?i=kp(o,a,n):t[1]==="hsv"?i=Op(o,a,n):i=ir(o,a,n),{r:i[0],g:i[1],b:i[2],a:e}}function Pp(r,t){var e=er(r);e[0]=an(e[0]+t),e=ir(e),r.r=e[0],r.g=e[1],r.b=e[2]}function Ep(r){if(!r)return;let t=er(r),e=t[0],i=JC(t[1]),o=JC(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${o}%, ${D0(r.a)})`:`hsl(${e}, ${i}%, ${o}%)`}var tn={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},en={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function $p(){let r={},t=Object.keys(en),e=Object.keys(tn),i,o,a,n,s;for(i=0;i<t.length;i++){for(n=s=t[i],o=0;o<e.length;o++)a=e[o],s=s.replace(a,tn[a]);a=parseInt(en[n],16),r[s]=[a>>16&255,a>>8&255,a&255]}return r}var m8;function Fp(r){m8||(m8=$p(),m8.transparent=[0,0,0,0]);let t=m8[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Rp=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Dp(r){let t=Rp.exec(r),e=255,i,o,a;if(t){if(t[7]!==i){let n=+t[7];e=t[8]?X4(n):V3(n*255,0,255)}return i=+t[1],o=+t[3],a=+t[5],i=255&(t[2]?X4(i):V3(i,0,255)),o=255&(t[4]?X4(o):V3(o,0,255)),a=255&(t[6]?X4(a):V3(a,0,255)),{r:i,g:o,b:a,a:e}}}function Bp(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${D0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var Je=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,t4=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function zp(r,t,e){let i=t4(D0(r.r)),o=t4(D0(r.g)),a=t4(D0(r.b));return{r:L3(Je(i+e*(t4(D0(t.r))-i))),g:L3(Je(o+e*(t4(D0(t.g))-o))),b:L3(Je(a+e*(t4(D0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function f8(r,t,e){if(r){let i=er(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=ir(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function Cn(r,t){return r&&Object.assign(t||{},r)}function rn(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=L3(r[3]))):(t=Cn(r,{r:0,g:0,b:0,a:1}),t.a=L3(t.a)),t}function Ip(r){return r.charAt(0)==="r"?Dp(r):Tp(r)}var J4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=rn(t):e==="string"&&(i=gp(t)||Fp(t)||Ip(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Cn(this._rgb);return t&&(t.a=D0(t.a)),t}set rgb(t){this._rgb=rn(t)}rgbString(){return this._valid?Bp(this._rgb):void 0}hexString(){return this._valid?wp(this._rgb):void 0}hslString(){return this._valid?Ep(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,o=t.rgb,a,n=e===a?.5:e,s=2*n-1,V=i.a-o.a,l=((s*V===-1?s:(s+V)/(1+s*V))+1)/2;a=1-l,i.r=255&l*i.r+a*o.r+.5,i.g=255&l*i.g+a*o.g+.5,i.b=255&l*i.b+a*o.b+.5,i.a=n*i.a+(1-n)*o.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=zp(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=L3(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=t9(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return f8(this._rgb,2,t),this}darken(t){return f8(this._rgb,2,-t),this}saturate(t){return f8(this._rgb,1,t),this}desaturate(t){return f8(this._rgb,1,-t),this}rotate(t){return Pp(this._rgb,t),this}};function J5(){}var nr=(()=>{let r=0;return()=>r++})();function y1(r){return r==null}function a2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function O1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function l2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function i5(r,t){return l2(r)?r:t}function w1(r,t){return typeof r>"u"?t:r}var sr=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function Y1(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function U1(r,t,e,i){let o,a,n;if(a2(r))if(a=r.length,i)for(o=a-1;o>=0;o--)t.call(e,r[o],o);else for(o=0;o<a;o++)t.call(e,r[o],o);else if(O1(r))for(n=Object.keys(r),a=n.length,o=0;o<a;o++)t.call(e,r[n[o]],n[o])}function i4(r,t){let e,i,o,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(o=r[e],a=t[e],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function r9(r){if(a2(r))return r.map(r9);if(O1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,o=0;for(;o<i;++o)t[e[o]]=r9(r[e[o]]);return t}return r}function pn(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function un(r,t,e,i){if(!pn(r))return;let o=t[r],a=e[r];O1(o)&&O1(a)?A5(o,a,i):t[r]=r9(a)}function A5(r,t,e){let i=a2(t)?t:[t],o=i.length;if(!O1(r))return r;e=e||{};let a=e.merger||un,n;for(let s=0;s<o;++s){if(n=i[s],!O1(n))continue;let V=Object.keys(n);for(let l=0,M=V.length;l<M;++l)a(V[l],r,n,e)}return r}function o7(r,t){return A5(r,t,{merger:hn})}function hn(r,t,e){if(!pn(r))return;let i=t[r],o=e[r];O1(i)&&O1(o)?o7(i,o):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=r9(o))}var nn={"":r=>r,x:r=>r.x,y:r=>r.y};function mn(r){let t=r.split("."),e=[],i="";for(let o of t)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function Np(r){let t=mn(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function d3(r,t){return(nn[t]||(nn[t]=Np(t)))(r)}function a9(r){return r.charAt(0).toUpperCase()+r.slice(1)}var a7=r=>typeof r<"u",f0=r=>typeof r=="function",w8=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function Hr(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var e2=Math.PI,p2=2*e2,fn=p2+e2,i9=Number.POSITIVE_INFINITY,An=e2/180,f2=e2/2,l3=e2/4,ar=e2*2/3,A0=Math.log10,D5=Math.sign;function C7(r,t,e){return Math.abs(r-t)<e}function b8(r){let t=Math.round(r);r=C7(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(A0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function Vr(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((o,a)=>o-a).pop(),t}function Wp(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function n7(r){return!Wp(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function Lr(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function S8(r,t,e){let i,o,a;for(i=0,o=r.length;i<o;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function v0(r){return r*(e2/180)}function C9(r){return r*(180/e2)}function y8(r){if(!l2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function Z8(r,t){let e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*e2&&(a+=p2),{angle:a,distance:o}}function o9(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function vn(r,t){return(r-t+fn)%p2-e2}function P2(r){return(r%p2+p2)%p2}function n9(r,t,e,i){let o=P2(r),a=P2(t),n=P2(e),s=P2(a-o),V=P2(n-o),l=P2(o-a),M=P2(o-n);return o===a||o===n||i&&a===n||s>V&&l<M}function E2(r,t,e){return Math.max(t,Math.min(e,r))}function lr(r){return E2(r,-32768,32767)}function t0(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function s9(r,t,e){e=e||(n=>r[n]<t);let i=r.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,e(a)?o=a:i=a;return{lo:o,hi:i}}var z0=(r,t,e,i)=>s9(r,e,i?o=>{let a=r[o][t];return a<e||a===e&&r[o+1][t]===e}:o=>r[o][t]<e),cr=(r,t,e)=>s9(r,e,i=>r[i][t]>=e);function Mr(r,t,e){let i=0,o=r.length;for(;i<o&&r[i]<t;)i++;for(;o>i&&r[o-1]>e;)o--;return i>0||o<r.length?r.slice(i,o):r}var xn=["push","pop","shift","splice","unshift"];function dr(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),xn.forEach(e=>{let i="_onData"+a9(e),o=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let n=o.apply(this,a);return r._chartjs.listeners.forEach(s=>{typeof s[i]=="function"&&s[i](...a)}),n}})})}function k8(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,o=i.indexOf(t);o!==-1&&i.splice(o,1),!(i.length>0)&&(xn.forEach(a=>{delete r[a]}),delete r._chartjs)}function O8(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var T8=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function P8(r,t){let e=[],i=!1;return function(...o){e=o,i||(i=!0,T8.call(window,()=>{i=!1,r.apply(t,e)}))}}function pr(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var E8=r=>r==="start"?"left":r==="end"?"right":"center",o5=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2,ur=(r,t,e,i)=>r===(i?"left":"right")?e:r==="center"?(t+e)/2:t;function hr(r,t,e){let i=t.length,o=0,a=i;if(r._sorted){let{iScale:n,vScale:s,_parsed:V}=r,l=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,M=n.axis,{min:u,max:f,minDefined:g,maxDefined:b}=n.getUserBounds();if(g){if(o=Math.min(z0(V,M,u).lo,e?i:z0(t,M,n.getPixelForValue(u)).lo),l){let k=V.slice(0,o+1).reverse().findIndex(O=>!y1(O[s.axis]));o-=Math.max(0,k)}o=E2(o,0,i-1)}if(b){let k=Math.max(z0(V,n.axis,f,!0).hi+1,e?0:z0(t,M,n.getPixelForValue(f),!0).hi+1);if(l){let O=V.slice(k-1).findIndex(T=>!y1(T[s.axis]));k+=Math.max(0,O)}a=E2(k,o,i)-o}else a=i-o}return{start:o,count:a}}function mr(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,o={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=o,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,o),a}var A8=r=>r===0||r===1,sn=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*p2/e)),Hn=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*p2/e)+1,r7={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*f2)+1,easeOutSine:r=>Math.sin(r*f2),easeInOutSine:r=>-.5*(Math.cos(e2*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>A8(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>A8(r)?r:sn(r,.075,.3),easeOutElastic:r=>A8(r)?r:Hn(r,.075,.3),easeInOutElastic(r){return A8(r)?r:r<.5?.5*sn(r*2,.1125,.45):.5+.5*Hn(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-r7.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?r7.easeInBounce(r*2)*.5:r7.easeOutBounce(r*2-1)*.5+.5};function $8(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function F8(r){return $8(r)?r:new J4(r)}function g8(r){return $8(r)?r:new J4(r).saturate(.5).darken(.1).hexString()}var Up=["x","y","borderWidth","radius","tension"],jp=["color","borderColor","backgroundColor"];function Gp(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:jp},numbers:{type:"number",properties:Up}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function qp(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Vn=new Map;function Yp(r,t){t=t||{};let e=r+JSON.stringify(t),i=Vn.get(e);return i||(i=new Intl.NumberFormat(r,t),Vn.set(e,i)),i}function H9(r,t,e){return Yp(t,e).format(r)}var gn={values(r){return a2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,o,a=r;if(e.length>1){let l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(o="scientific"),a=Qp(r,e)}let n=A0(Math.abs(a)),s=isNaN(n)?1:Math.max(Math.min(-1*Math.floor(n),20),0),V={notation:o,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(V,this.options.ticks.format),H9(r,i,V)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(A0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?gn.numeric.call(this,r,t,e):""}};function Qp(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var V9={formatters:gn};function Kp(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:V9.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var p3=Object.create(null),R8=Object.create(null);function e9(r,t){if(!t)return r;let e=t.split(".");for(let i=0,o=e.length;i<o;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function or(r,t,e){return typeof t=="string"?A5(e9(r,t),e):A5(e9(r,""),t)}var Cr=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>g8(o.backgroundColor),this.hoverBorderColor=(i,o)=>g8(o.borderColor),this.hoverColor=(i,o)=>g8(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return or(this,t,e)}get(t){return e9(this,t)}describe(t,e){return or(R8,t,e)}override(t,e){return or(p3,t,e)}route(t,e,i,o){let a=e9(this,t),n=e9(this,i),s="_"+e;Object.defineProperties(a,{[s]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let V=this[s],l=n[o];return O1(V)?Object.assign({},l,V):w1(V,l)},set(V){this[s]=V}}})}apply(t){t.forEach(e=>e(this))}},V2=new Cr({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Gp,qp,Kp]);function _n(r){return!r||y1(r.size)||y1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function e4(r,t,e,i,o){let a=t[o];return a||(a=t[o]=r.measureText(o).width,e.push(o)),a>i&&(i=a),i}function fr(r,t,e,i){i=i||{};let o=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(o=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let n=0,s=e.length,V,l,M,u,f;for(V=0;V<s;V++)if(u=e[V],u!=null&&!a2(u))n=e4(r,o,a,n,u);else if(a2(u))for(l=0,M=u.length;l<M;l++)f=u[l],f!=null&&!a2(f)&&(n=e4(r,o,a,n,f));r.restore();let g=a.length/2;if(g>e.length){for(V=0;V<g;V++)delete o[a[V]];a.splice(0,g)}return n}function I0(r,t,e){let i=r.currentDevicePixelRatio,o=e!==0?Math.max(e/2,.5):0;return Math.round((t-o)*i)/i+o}function D8(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function L9(r,t,e,i){B8(r,t,e,i,null)}function B8(r,t,e,i,o){let a,n,s,V,l,M,u,f,g=t.pointStyle,b=t.rotation,k=t.radius,O=(b||0)*An;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(O),r.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),r.restore();return}if(!(isNaN(k)||k<=0)){switch(r.beginPath(),g){default:o?r.ellipse(e,i,o/2,k,0,0,p2):r.arc(e,i,k,0,p2),r.closePath();break;case"triangle":M=o?o/2:k,r.moveTo(e+Math.sin(O)*M,i-Math.cos(O)*k),O+=ar,r.lineTo(e+Math.sin(O)*M,i-Math.cos(O)*k),O+=ar,r.lineTo(e+Math.sin(O)*M,i-Math.cos(O)*k),r.closePath();break;case"rectRounded":l=k*.516,V=k-l,n=Math.cos(O+l3)*V,u=Math.cos(O+l3)*(o?o/2-l:V),s=Math.sin(O+l3)*V,f=Math.sin(O+l3)*(o?o/2-l:V),r.arc(e-u,i-s,l,O-e2,O-f2),r.arc(e+f,i-n,l,O-f2,O),r.arc(e+u,i+s,l,O,O+f2),r.arc(e-f,i+n,l,O+f2,O+e2),r.closePath();break;case"rect":if(!b){V=Math.SQRT1_2*k,M=o?o/2:V,r.rect(e-M,i-V,2*M,2*V);break}O+=l3;case"rectRot":u=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,s=Math.sin(O)*k,f=Math.sin(O)*(o?o/2:k),r.moveTo(e-u,i-s),r.lineTo(e+f,i-n),r.lineTo(e+u,i+s),r.lineTo(e-f,i+n),r.closePath();break;case"crossRot":O+=l3;case"cross":u=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,s=Math.sin(O)*k,f=Math.sin(O)*(o?o/2:k),r.moveTo(e-u,i-s),r.lineTo(e+u,i+s),r.moveTo(e+f,i-n),r.lineTo(e-f,i+n);break;case"star":u=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,s=Math.sin(O)*k,f=Math.sin(O)*(o?o/2:k),r.moveTo(e-u,i-s),r.lineTo(e+u,i+s),r.moveTo(e+f,i-n),r.lineTo(e-f,i+n),O+=l3,u=Math.cos(O)*(o?o/2:k),n=Math.cos(O)*k,s=Math.sin(O)*k,f=Math.sin(O)*(o?o/2:k),r.moveTo(e-u,i-s),r.lineTo(e+u,i+s),r.moveTo(e+f,i-n),r.lineTo(e-f,i+n);break;case"line":n=o?o/2:Math.cos(O)*k,s=Math.sin(O)*k,r.moveTo(e-n,i-s),r.lineTo(e+n,i+s);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(O)*(o?o/2:k),i+Math.sin(O)*k);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function X5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function o4(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function a4(r){r.restore()}function Ar(r,t,e,i,o){if(!t)return r.lineTo(e.x,e.y);if(o==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else o==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function vr(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Xp(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),y1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function Jp(r,t,e,i,o){if(o.strikethrough||o.underline){let a=r.measureText(i),n=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,V=e-a.actualBoundingBoxAscent,l=e+a.actualBoundingBoxDescent,M=o.strikethrough?(V+l)/2:l;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=o.decorationWidth||2,r.moveTo(n,M),r.lineTo(s,M),r.stroke()}}function tu(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function u3(r,t,e,i,o,a={}){let n=a2(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!=="",V,l;for(r.save(),r.font=o.string,Xp(r,a),V=0;V<n.length;++V)l=n[V],a.backdrop&&tu(r,a.backdrop),s&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),y1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(l,e,i,a.maxWidth)),r.fillText(l,e,i,a.maxWidth),Jp(r,e,i,l,a),i+=Number(o.lineHeight);r.restore()}function s7(r,t){let{x:e,y:i,w:o,h:a,radius:n}=t;r.arc(e+n.topLeft,i+n.topLeft,n.topLeft,1.5*e2,e2,!0),r.lineTo(e,i+a-n.bottomLeft),r.arc(e+n.bottomLeft,i+a-n.bottomLeft,n.bottomLeft,e2,f2,!0),r.lineTo(e+o-n.bottomRight,i+a),r.arc(e+o-n.bottomRight,i+a-n.bottomRight,n.bottomRight,f2,0,!0),r.lineTo(e+o,i+n.topRight),r.arc(e+o-n.topRight,i+n.topRight,n.topRight,0,-f2,!0),r.lineTo(e+n.topLeft,i)}var eu=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,ru=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wn(r,t){let e=(""+r).match(eu);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var iu=r=>+r||0;function l9(r,t){let e={},i=O1(t),o=i?Object.keys(t):t,a=O1(r)?i?n=>w1(r[n],r[t[n]]):n=>r[n]:()=>r;for(let n of o)e[n]=iu(a(n));return e}function z8(r){return l9(r,{top:"y",right:"x",bottom:"y",left:"x"})}function N0(r){return l9(r,["topLeft","topRight","bottomLeft","bottomRight"])}function w2(r){let t=z8(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function A2(r,t){r=r||{},t=t||V2.font;let e=w1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=w1(r.style,t.style);i&&!(""+i).match(ru)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let o={family:w1(r.family,t.family),lineHeight:wn(w1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:w1(r.weight,t.weight),string:""};return o.string=_n(o),o}function o2(r,t,e,i){let o=!0,a,n,s;for(a=0,n=r.length;a<n;++a)if(s=r[a],s!==void 0&&(t!==void 0&&typeof s=="function"&&(s=s(t),o=!1),e!==void 0&&a2(s)&&(s=s[e%s.length],o=!1),s!==void 0))return i&&!o&&(i.cacheable=!1),s}function xr(r,t,e){let{min:i,max:o}=r,a=sr(t,(o-i)/2),n=(s,V)=>e&&s===0?0:s+V;return{min:n(i,-Math.abs(a)),max:n(o,a)}}function x0(r,t){return Object.assign(Object.create(r),t)}function c9(r,t=[""],e,i,o=()=>r[0]){let a=e||r;typeof i>"u"&&(i=yn("_fallback",r));let n={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:o,override:s=>c9([s,...r],t,a,i)};return new Proxy(n,{deleteProperty(s,V){return delete s[V],delete s._keys,delete r[0][V],!0},get(s,V){return bn(s,V,()=>Lu(V,t,r,s))},getOwnPropertyDescriptor(s,V){return Reflect.getOwnPropertyDescriptor(s._scopes[0],V)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(s,V){return ln(s).includes(V)},ownKeys(s){return ln(s)},set(s,V,l){let M=s._storage||(s._storage=o());return s[V]=M[V]=l,delete s._keys,!0}})}function M3(r,t,e,i){let o={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:I8(r,i),setContext:a=>M3(r,a,e,i),override:a=>M3(r.override(a),t,e,i)};return new Proxy(o,{deleteProperty(a,n){return delete a[n],delete r[n],!0},get(a,n,s){return bn(a,n,()=>au(a,n,s))},getOwnPropertyDescriptor(a,n){return a._descriptors.allKeys?Reflect.has(r,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,n)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,n){return Reflect.has(r,n)},ownKeys(){return Reflect.ownKeys(r)},set(a,n,s){return r[n]=s,delete a[n],!0}})}function I8(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:o=t.allKeys}=r;return{allKeys:o,scriptable:e,indexable:i,isScriptable:f0(e)?e:()=>e,isIndexable:f0(i)?i:()=>i}}var ou=(r,t)=>r?r+a9(t):t,gr=(r,t)=>O1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function bn(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function au(r,t,e){let{_proxy:i,_context:o,_subProxy:a,_descriptors:n}=r,s=i[t];return f0(s)&&n.isScriptable(t)&&(s=Cu(t,s,r,e)),a2(s)&&s.length&&(s=nu(t,s,r,n.isIndexable)),gr(t,s)&&(s=M3(s,o,a&&a[t],n)),s}function Cu(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_stack:s}=e;if(s.has(r))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+r);s.add(r);let V=t(a,n||i);return s.delete(r),gr(r,V)&&(V=_r(o._scopes,o,r,V)),V}function nu(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_descriptors:s}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(O1(t[0])){let V=t,l=o._scopes.filter(M=>M!==V);t=[];for(let M of V){let u=_r(l,o,r,M);t.push(M3(u,a,n&&n[r],s))}}return t}function Sn(r,t,e){return f0(r)?r(t,e):r}var su=(r,t)=>r===!0?t:typeof r=="string"?d3(t,r):void 0;function Hu(r,t,e,i,o){for(let a of t){let n=su(e,a);if(n){r.add(n);let s=Sn(n._fallback,e,o);if(typeof s<"u"&&s!==e&&s!==i)return s}else if(n===!1&&typeof i<"u"&&e!==i)return null}return!1}function _r(r,t,e,i){let o=t._rootScopes,a=Sn(t._fallback,e,i),n=[...r,...o],s=new Set;s.add(i);let V=Ln(s,n,e,a||e,i);return V===null||typeof a<"u"&&a!==e&&(V=Ln(s,n,a,V,i),V===null)?!1:c9(Array.from(s),[""],o,a,()=>Vu(t,e,i))}function Ln(r,t,e,i,o){for(;e;)e=Hu(r,t,e,i,o);return e}function Vu(r,t,e){let i=r._getTarget();t in i||(i[t]={});let o=i[t];return a2(o)&&O1(e)?e:o||{}}function Lu(r,t,e,i){let o;for(let a of t)if(o=yn(ou(a,r),e),typeof o<"u")return gr(r,o)?_r(e,i,r,o):o}function yn(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function ln(r){let t=r._keys;return t||(t=r._keys=lu(r._scopes)),t}function lu(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(o=>!o.startsWith("_")))t.add(i);return Array.from(t)}var cu=Number.EPSILON||1e-14,r4=(r,t)=>t<r.length&&!r[t].skip&&r[t],Zn=r=>r==="x"?"y":"x";function kn(r,t,e,i){let o=r.skip?t:r,a=t,n=e.skip?t:e,s=o9(a,o),V=o9(n,a),l=s/(s+V),M=V/(s+V);l=isNaN(l)?0:l,M=isNaN(M)?0:M;let u=i*l,f=i*M;return{previous:{x:a.x-u*(n.x-o.x),y:a.y-u*(n.y-o.y)},next:{x:a.x+f*(n.x-o.x),y:a.y+f*(n.y-o.y)}}}function Mu(r,t,e){let i=r.length,o,a,n,s,V,l=r4(r,0);for(let M=0;M<i-1;++M)if(V=l,l=r4(r,M+1),!(!V||!l)){if(C7(t[M],0,cu)){e[M]=e[M+1]=0;continue}o=e[M]/t[M],a=e[M+1]/t[M],s=Math.pow(o,2)+Math.pow(a,2),!(s<=9)&&(n=3/Math.sqrt(s),e[M]=o*n*t[M],e[M+1]=a*n*t[M])}}function du(r,t,e="x"){let i=Zn(e),o=r.length,a,n,s,V=r4(r,0);for(let l=0;l<o;++l){if(n=s,s=V,V=r4(r,l+1),!s)continue;let M=s[e],u=s[i];n&&(a=(M-n[e])/3,s[`cp1${e}`]=M-a,s[`cp1${i}`]=u-a*t[l]),V&&(a=(V[e]-M)/3,s[`cp2${e}`]=M+a,s[`cp2${i}`]=u+a*t[l])}}function On(r,t="x"){let e=Zn(t),i=r.length,o=Array(i).fill(0),a=Array(i),n,s,V,l=r4(r,0);for(n=0;n<i;++n)if(s=V,V=l,l=r4(r,n+1),!!V){if(l){let M=l[t]-V[t];o[n]=M!==0?(l[e]-V[e])/M:0}a[n]=s?l?D5(o[n-1])!==D5(o[n])?0:(o[n-1]+o[n])/2:o[n-1]:o[n]}Mu(r,o,a),du(r,a,t)}function v8(r,t,e){return Math.max(Math.min(r,e),t)}function pu(r,t){let e,i,o,a,n,s=X5(r[0],t);for(e=0,i=r.length;e<i;++e)n=a,a=s,s=e<i-1&&X5(r[e+1],t),a&&(o=r[e],n&&(o.cp1x=v8(o.cp1x,t.left,t.right),o.cp1y=v8(o.cp1y,t.top,t.bottom)),s&&(o.cp2x=v8(o.cp2x,t.left,t.right),o.cp2y=v8(o.cp2y,t.top,t.bottom)))}function wr(r,t,e,i,o){let a,n,s,V;if(t.spanGaps&&(r=r.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")On(r,o);else{let l=i?r[r.length-1]:r[0];for(a=0,n=r.length;a<n;++a)s=r[a],V=kn(l,s,r[Math.min(a+1,n-(i?0:1))%n],t.tension),s.cp1x=V.previous.x,s.cp1y=V.previous.y,s.cp2x=V.next.x,s.cp2y=V.next.y,l=s}t.capBezierPoints&&pu(r,e)}function M9(){return typeof window<"u"&&typeof document<"u"}function d9(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function _8(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var N8=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function Tn(r,t){return N8(r).getPropertyValue(t)}var uu=["top","right","bottom","left"];function i7(r,t,e){let i={};e=e?"-"+e:"";for(let o=0;o<4;o++){let a=uu[o];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var hu=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function mu(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:o,offsetY:a}=i,n=!1,s,V;if(hu(o,a,r.target))s=o,V=a;else{let l=t.getBoundingClientRect();s=i.clientX-l.left,V=i.clientY-l.top,n=!0}return{x:s,y:V,box:n}}function e0(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,o=N8(e),a=o.boxSizing==="border-box",n=i7(o,"padding"),s=i7(o,"border","width"),{x:V,y:l,box:M}=mu(r,e),u=n.left+(M&&s.left),f=n.top+(M&&s.top),{width:g,height:b}=t;return a&&(g-=n.width+s.width,b-=n.height+s.height),{x:Math.round((V-u)/g*e.width/i),y:Math.round((l-f)/b*e.height/i)}}function fu(r,t,e){let i,o;if(t===void 0||e===void 0){let a=r&&d9(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let n=a.getBoundingClientRect(),s=N8(a),V=i7(s,"border","width"),l=i7(s,"padding");t=n.width-l.width-V.width,e=n.height-l.height-V.height,i=_8(s.maxWidth,a,"clientWidth"),o=_8(s.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||i9,maxHeight:o||i9}}var c3=r=>Math.round(r*10)/10;function br(r,t,e,i){let o=N8(r),a=i7(o,"margin"),n=_8(o.maxWidth,r,"clientWidth")||i9,s=_8(o.maxHeight,r,"clientHeight")||i9,V=fu(r,t,e),{width:l,height:M}=V;if(o.boxSizing==="content-box"){let f=i7(o,"border","width"),g=i7(o,"padding");l-=g.width+f.width,M-=g.height+f.height}return l=Math.max(0,l-a.width),M=Math.max(0,i?l/i:M-a.height),l=c3(Math.min(l,n,V.maxWidth)),M=c3(Math.min(M,s,V.maxHeight)),l&&!M&&(M=c3(l/2)),(t!==void 0||e!==void 0)&&i&&V.height&&M>V.height&&(M=V.height,l=c3(Math.floor(M*i))),{width:l,height:M}}function W8(r,t,e){let i=t||1,o=c3(r.height*i),a=c3(r.width*i);r.height=c3(r.height),r.width=c3(r.width);let n=r.canvas;return n.style&&(e||!n.style.height&&!n.style.width)&&(n.style.height=`${r.height}px`,n.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||n.height!==o||n.width!==a?(r.currentDevicePixelRatio=i,n.height=o,n.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var Sr=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};M9()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function U8(r,t){let e=Tn(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function B0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function yr(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function Zr(r,t,e,i){let o={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},n=B0(r,o,e),s=B0(o,a,e),V=B0(a,t,e),l=B0(n,s,e),M=B0(s,V,e);return B0(l,M,e)}var Au=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},vu=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function h3(r,t,e){return r?Au(t,e):vu()}function j8(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function G8(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function Pn(r){return r==="angle"?{between:n9,compare:vn,normalize:P2}:{between:t0,compare:(t,e)=>t-e,normalize:t=>t}}function cn({start:r,end:t,count:e,loop:i,style:o}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:o}}function xu(r,t,e){let{property:i,start:o,end:a}=e,{between:n,normalize:s}=Pn(i),V=t.length,{start:l,end:M,loop:u}=r,f,g;if(u){for(l+=V,M+=V,f=0,g=V;f<g&&n(s(t[l%V][i]),o,a);++f)l--,M--;l%=V,M%=V}return M<l&&(M+=V),{start:l,end:M,loop:u,style:r.style}}function q8(r,t,e){if(!e)return[r];let{property:i,start:o,end:a}=e,n=t.length,{compare:s,between:V,normalize:l}=Pn(i),{start:M,end:u,loop:f,style:g}=xu(r,t,e),b=[],k=!1,O=null,T,$,F,Q=()=>V(o,F,T)&&s(o,F)!==0,U=()=>s(a,T)===0||V(a,F,T),e1=()=>k||Q(),J=()=>!k||U();for(let X=M,i1=M;X<=u;++X)$=t[X%n],!$.skip&&(T=l($[i]),T!==F&&(k=V(T,o,a),O===null&&e1()&&(O=s(T,o)===0?X:i1),O!==null&&J()&&(b.push(cn({start:O,end:X,loop:f,count:n,style:g})),O=null),i1=X,F=T));return O!==null&&b.push(cn({start:O,end:u,loop:f,count:n,style:g})),b}function Y8(r,t){let e=[],i=r.segments;for(let o=0;o<i.length;o++){let a=q8(i[o],r.points,t);a.length&&e.push(...a)}return e}function gu(r,t,e,i){let o=0,a=t-1;if(e&&!i)for(;o<t&&!r[o].skip;)o++;for(;o<t&&r[o].skip;)o++;for(o%=t,e&&(a+=o);a>o&&r[a%t].skip;)a--;return a%=t,{start:o,end:a}}function _u(r,t,e,i){let o=r.length,a=[],n=t,s=r[t],V;for(V=t+1;V<=e;++V){let l=r[V%o];l.skip||l.stop?s.skip||(i=!1,a.push({start:t%o,end:(V-1)%o,loop:i}),t=n=l.stop?V:null):(n=V,s.skip&&(t=V)),s=l}return n!==null&&a.push({start:t%o,end:n%o,loop:i}),a}function kr(r,t){let e=r.points,i=r.options.spanGaps,o=e.length;if(!o)return[];let a=!!r._loop,{start:n,end:s}=gu(e,o,a,i);if(i===!0)return Mn(r,[{start:n,end:s,loop:a}],e,t);let V=s<n?s+o:s,l=!!r._fullLoop&&n===0&&s===o-1;return Mn(r,_u(e,n,V,l),e,t)}function Mn(r,t,e,i){return!i||!i.setContext||!e?t:wu(r,t,e,i)}function wu(r,t,e,i){let o=r._chart.getContext(),a=dn(r.options),{_datasetIndex:n,options:{spanGaps:s}}=r,V=e.length,l=[],M=a,u=t[0].start,f=u;function g(b,k,O,T){let $=s?-1:1;if(b!==k){for(b+=V;e[b%V].skip;)b-=$;for(;e[k%V].skip;)k+=$;b%V!==k%V&&(l.push({start:b%V,end:k%V,loop:O,style:T}),M=T,u=k%V)}}for(let b of t){u=s?u:b.start;let k=e[u%V],O;for(f=u+1;f<=b.end;f++){let T=e[f%V];O=dn(i.setContext(x0(o,{type:"segment",p0:k,p1:T,p0DataIndex:(f-1)%V,p1DataIndex:f%V,datasetIndex:n}))),bu(O,M)&&g(u,f-1,b.loop,M),k=T,M=O}u<f-1&&g(u,f-1,b.loop,M)}return l}function dn(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function bu(r,t){if(!t)return!1;let e=[],i=function(o,a){return $8(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function x8(r,t,e){return r.options.clip?r[e]:t[e]}function Su(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:x8(e,t,"left"),right:x8(e,t,"right"),top:x8(i,t,"top"),bottom:x8(i,t,"bottom")}:t}function Q8(r,t){let e=t._clip;if(e.disabled)return!1;let i=Su(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var Nr=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){let a=e.listeners[o],n=e.duration;a.forEach(s=>s({chart:t,initial:e.initial,numSteps:n,currentStep:Math.min(i-e.start,n)}))}_refresh(){this._request||(this._running=!0,this._request=T8.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;let a=i.items,n=a.length-1,s=!1,V;for(;n>=0;--n)V=a[n],V._active?(V._total>i.duration&&(i.duration=V._total),V.tick(t),s=!0):(a[n]=a[a.length-1],a.pop());s&&(o.draw(),this._notify(o,i,t,"progress")),a.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},W0=new Nr,En="transparent",ku={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=F8(r||En),o=i.valid&&F8(t||En);return o&&o.valid?o.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},Wr=class{constructor(t,e,i,o){let a=e[i];o=o2([t.to,o,a,t.from]);let n=o2([t.from,a,o]);this._active=!0,this._fn=t.fn||ku[t.type||typeof n],this._easing=r7[t.easing]||r7.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=n,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let o=this._target[this._prop],a=i-this._start,n=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(n,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=o2([t.to,e,o,t.from]),this._from=o2([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,o=this._prop,a=this._from,n=this._loop,s=this._to,V;if(this._active=a!==s&&(n||e<i),!this._active){this._target[o]=s,this._notify(!0);return}if(e<0){this._target[o]=a;return}V=e/i%2,V=n&&V>1?2-V:V,V=this._easing(Math.min(1,Math.max(0,V))),this._target[o]=this._fn(a,s,V)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][e]()}},Ct=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!O1(t))return;let e=Object.keys(V2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{let a=t[o];if(!O1(a))return;let n={};for(let s of e)n[s]=a[s];(a2(a.properties)&&a.properties||[o]).forEach(s=>{(s===o||!i.has(s))&&i.set(s,n)})})}_animateOptions(t,e){let i=e.options,o=Tu(t,i);if(!o)return[];let a=this._createAnimations(o,i);return i.$shared&&Ou(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,o=[],a=t.$animations||(t.$animations={}),n=Object.keys(e),s=Date.now(),V;for(V=n.length-1;V>=0;--V){let l=n[V];if(l.charAt(0)==="$")continue;if(l==="options"){o.push(...this._animateOptions(t,e));continue}let M=e[l],u=a[l],f=i.get(l);if(u)if(f&&u.active()){u.update(f,M,s);continue}else u.cancel();if(!f||!f.duration){t[l]=M;continue}a[l]=u=new Wr(f,t,l,M),o.push(u)}return o}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return W0.add(this._chart,i),!0}};function Ou(r,t){let e=[],i=Object.keys(t);for(let o=0;o<i.length;o++){let a=r[i[o]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function Tu(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function $n(r,t){let e=r&&r.options||{},i=e.reverse,o=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:o,end:i?o:a}}function Pu(r,t,e){if(e===!1)return!1;let i=$n(r,e),o=$n(t,e);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function Eu(r){let t,e,i,o;return O1(r)?(t=r.top,e=r.right,i=r.bottom,o=r.left):t=e=i=o=r,{top:t,right:e,bottom:i,left:o,disabled:r===!1}}function ks(r,t){let e=[],i=r._getSortedDatasetMetas(t),o,a;for(o=0,a=i.length;o<a;++o)e.push(i[o].index);return e}function Fn(r,t,e,i={}){let o=r.keys,a=i.mode==="single",n,s,V,l;if(t===null)return;let M=!1;for(n=0,s=o.length;n<s;++n){if(V=+o[n],V===e){if(M=!0,i.all)continue;break}l=r.values[V],l2(l)&&(a||t===0||D5(t)===D5(l))&&(t+=l)}return!M&&!i.all?0:t}function $u(r,t){let{iScale:e,vScale:i}=t,o=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",n=Object.keys(r),s=new Array(n.length),V,l,M;for(V=0,l=n.length;V<l;++V)M=n[V],s[V]={[o]:M,[a]:r[M]};return s}function Or(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function Fu(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function Ru(r){let{min:t,max:e,minDefined:i,maxDefined:o}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:o?e:Number.POSITIVE_INFINITY}}function Du(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function Rn(r,t,e,i){for(let o of t.getMatchingVisibleMetas(i).reverse()){let a=r[o.index];if(e&&a>0||!e&&a<0)return o.index}return null}function Dn(r,t){let{chart:e,_cachedMeta:i}=r,o=e._stacks||(e._stacks={}),{iScale:a,vScale:n,index:s}=i,V=a.axis,l=n.axis,M=Fu(a,n,i),u=t.length,f;for(let g=0;g<u;++g){let b=t[g],{[V]:k,[l]:O}=b,T=b._stacks||(b._stacks={});f=T[l]=Du(o,M,k),f[s]=O,f._top=Rn(f,n,!0,i.type),f._bottom=Rn(f,n,!1,i.type);let $=f._visualValues||(f._visualValues={});$[s]=O}}function Tr(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function Bu(r,t){return x0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function zu(r,t,e){return x0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function p9(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let o of t){let a=o._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var Pr=r=>r==="reset"||r==="none",Bn=(r,t)=>t?r:Object.assign({},r),Iu=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:ks(e,!0),values:null},f3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Or(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&p9(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(u,f,g,b)=>u==="x"?f:u==="r"?b:g,a=e.xAxisID=w1(i.xAxisID,Tr(t,"x")),n=e.yAxisID=w1(i.yAxisID,Tr(t,"y")),s=e.rAxisID=w1(i.rAxisID,Tr(t,"r")),V=e.indexAxis,l=e.iAxisID=o(V,a,n,s),M=e.vAxisID=o(V,n,a,s);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(n),e.rScale=this.getScaleForId(s),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(M)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&k8(this._data,this),t._stacked&&p9(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(O1(e)){let o=this._cachedMeta;this._data=$u(e,o)}else if(i!==e){if(i){k8(i,this);let o=this._cachedMeta;p9(o),o._parsed=[]}e&&Object.isExtensible(e)&&dr(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),o=!1;this._dataCheck();let a=e._stacked;e._stacked=Or(e.vScale,e),e.stack!==i.stack&&(o=!0,p9(e),e.stack=i.stack),this._resyncElements(t),(o||a!==e._stacked)&&(Dn(this,e._parsed),e._stacked=Or(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:n}=i,s=a.axis,V=t===0&&e===o.length?!0:i._sorted,l=t>0&&i._parsed[t-1],M,u,f;if(this._parsing===!1)i._parsed=o,i._sorted=!0,f=o;else{a2(o[t])?f=this.parseArrayData(i,o,t,e):O1(o[t])?f=this.parseObjectData(i,o,t,e):f=this.parsePrimitiveData(i,o,t,e);let g=()=>u[s]===null||l&&u[s]<l[s];for(M=0;M<e;++M)i._parsed[M+t]=u=f[M],V&&(g()&&(V=!1),l=u);i._sorted=V}n&&Dn(this,f)}parsePrimitiveData(t,e,i,o){let{iScale:a,vScale:n}=t,s=a.axis,V=n.axis,l=a.getLabels(),M=a===n,u=new Array(o),f,g,b;for(f=0,g=o;f<g;++f)b=f+i,u[f]={[s]:M||a.parse(l[b],b),[V]:n.parse(e[b],b)};return u}parseArrayData(t,e,i,o){let{xScale:a,yScale:n}=t,s=new Array(o),V,l,M,u;for(V=0,l=o;V<l;++V)M=V+i,u=e[M],s[V]={x:a.parse(u[0],M),y:n.parse(u[1],M)};return s}parseObjectData(t,e,i,o){let{xScale:a,yScale:n}=t,{xAxisKey:s="x",yAxisKey:V="y"}=this._parsing,l=new Array(o),M,u,f,g;for(M=0,u=o;M<u;++M)f=M+i,g=e[f],l[M]={x:a.parse(d3(g,s),f),y:n.parse(d3(g,V),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let o=this.chart,a=this._cachedMeta,n=e[t.axis],s={keys:ks(o,!0),values:e._stacks[t.axis]._visualValues};return Fn(s,n,a.index,{mode:i})}updateRangeFromParsed(t,e,i,o){let a=i[e.axis],n=a===null?NaN:a,s=o&&i._stacks[e.axis];o&&s&&(o.values=s,n=Fn(o,a,this._cachedMeta.index)),t.min=Math.min(t.min,n),t.max=Math.max(t.max,n)}getMinMax(t,e){let i=this._cachedMeta,o=i._parsed,a=i._sorted&&t===i.iScale,n=o.length,s=this._getOtherScale(t),V=Iu(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:M,max:u}=Ru(s),f,g;function b(){g=o[f];let k=g[s.axis];return!l2(g[t.axis])||M>k||u<k}for(f=0;f<n&&!(!b()&&(this.updateRangeFromParsed(l,t,g,V),a));++f);if(a){for(f=n-1;f>=0;--f)if(!b()){this.updateRangeFromParsed(l,t,g,V);break}}return l}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],o,a,n;for(o=0,a=e.length;o<a;++o)n=e[o][t.axis],l2(n)&&i.push(n);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,o=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=Eu(w1(this.options.clip,Pu(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],a=e.chartArea,n=[],s=this._drawStart||0,V=this._drawCount||o.length-s,l=this.options.drawActiveElementsOnTop,M;for(i.dataset&&i.dataset.draw(t,a,s,V),M=s;M<s+V;++M){let u=o[M];u.hidden||(u.active&&l?n.push(u):u.draw(t,a))}for(M=0;M<n.length;++M)n[M].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let o=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let n=this._cachedMeta.data[t];a=n.$context||(n.$context=zu(this.getContext(),t,n)),a.parsed=this.getParsed(t),a.raw=o.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Bu(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let o=e==="active",a=this._cachedDataOpts,n=t+"-"+e,s=a[n],V=this.enableOptionSharing&&a7(i);if(s)return Bn(s,V);let l=this.chart.config,M=l.datasetElementScopeKeys(this._type,t),u=o?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),M),g=Object.keys(V2.elements[t]),b=()=>this.getContext(i,o,e),k=l.resolveNamedOptions(f,g,b,u);return k.$shared&&(k.$shared=V,a[n]=Object.freeze(Bn(k,V))),k}_resolveAnimations(t,e,i){let o=this.chart,a=this._cachedDataOpts,n=`animation-${e}`,s=a[n];if(s)return s;let V;if(o.options.animation!==!1){let M=this.chart.config,u=M.datasetAnimationScopeKeys(this._type,e),f=M.getOptionScopes(this.getDataset(),u);V=M.createResolver(f,this.getContext(t,i,e))}let l=new Ct(o,V&&V.animations);return V&&V._cacheable&&(a[n]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Pr(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),o=this._sharedOptions,a=this.getSharedOptions(i),n=this.includeOptions(e,a)||a!==o;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:n}}updateElement(t,e,i,o){Pr(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!Pr(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;let a=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[s,V,l]of this._syncList)this[s](V,l);this._syncList=[];let o=i.length,a=e.length,n=Math.min(a,o);n&&this.parse(0,n),a>o?this._insertElements(o,a-o,t):a<o&&this._removeElements(a,o-a)}_insertElements(t,e,i=!0){let o=this._cachedMeta,a=o.data,n=t+e,s,V=l=>{for(l.length+=e,s=l.length-1;s>=n;s--)l[s]=l[s-e]};for(V(a),s=t;s<n;++s)a[s]=new this.dataElementType;this._parsing&&V(o._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let o=i._parsed.splice(t,e);i._stacked&&p9(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};D(f3,"defaults",{}),D(f3,"datasetElementType",null),D(f3,"dataElementType",null);function Nu(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let o=0,a=e.length;o<a;o++)i=i.concat(e[o].controller.getAllParsedValues(r));r._cache.$bar=O8(i.sort((o,a)=>o-a))}return r._cache.$bar}function Wu(r){let t=r.iScale,e=Nu(t,r.type),i=t._length,o,a,n,s,V=()=>{n===32767||n===-32768||(a7(s)&&(i=Math.min(i,Math.abs(n-s)||i)),s=n)};for(o=0,a=e.length;o<a;++o)n=t.getPixelForValue(e[o]),V();for(s=void 0,o=0,a=t.ticks.length;o<a;++o)n=t.getPixelForTick(o),V();return i}function Uu(r,t,e,i){let o=e.barThickness,a,n;return y1(o)?(a=t.min*e.categoryPercentage,n=e.barPercentage):(a=o*i,n=1),{chunk:a/i,ratio:n,start:t.pixels[r]-a/2}}function ju(r,t,e,i){let o=t.pixels,a=o[r],n=r>0?o[r-1]:null,s=r<o.length-1?o[r+1]:null,V=e.categoryPercentage;n===null&&(n=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-n);let l=a-(a-Math.min(n,s))/2*V;return{chunk:Math.abs(s-n)/2*V/i,ratio:e.barPercentage,start:l}}function Gu(r,t,e,i){let o=e.parse(r[0],i),a=e.parse(r[1],i),n=Math.min(o,a),s=Math.max(o,a),V=n,l=s;Math.abs(n)>Math.abs(s)&&(V=s,l=n),t[e.axis]=l,t._custom={barStart:V,barEnd:l,start:o,end:a,min:n,max:s}}function Os(r,t,e,i){return a2(r)?Gu(r,t,e,i):t[e.axis]=e.parse(r,i),t}function zn(r,t,e,i){let o=r.iScale,a=r.vScale,n=o.getLabels(),s=o===a,V=[],l,M,u,f;for(l=e,M=e+i;l<M;++l)f=t[l],u={},u[o.axis]=s||o.parse(n[l],l),V.push(Os(f,u,a,l));return V}function Er(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function qu(r,t,e){return r!==0?D5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Yu(r){let t,e,i,o,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(o="end",a="start"):(o="start",a="end"),{start:e,end:i,reverse:t,top:o,bottom:a}}function Qu(r,t,e,i){let o=t.borderSkipped,a={};if(!o){r.borderSkipped=a;return}if(o===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:n,end:s,reverse:V,top:l,bottom:M}=Yu(r);o==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?o=l:(e._bottom||0)===i?o=M:(a[In(M,n,s,V)]=!0,o=l)),a[In(o,n,s,V)]=!0,r.borderSkipped=a}function In(r,t,e,i){return i?(r=Ku(r,t,e),r=Nn(r,e,t)):r=Nn(r,t,e),r}function Ku(r,t,e){return r===t?e:r===e?t:r}function Nn(r,t,e){return r==="start"?t:r==="end"?e:r}function Xu(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var j0=class extends f3{parsePrimitiveData(t,e,i,o){return zn(t,e,i,o)}parseArrayData(t,e,i,o){return zn(t,e,i,o)}parseObjectData(t,e,i,o){let{iScale:a,vScale:n}=t,{xAxisKey:s="x",yAxisKey:V="y"}=this._parsing,l=a.axis==="x"?s:V,M=n.axis==="x"?s:V,u=[],f,g,b,k;for(f=i,g=i+o;f<g;++f)k=e[f],b={},b[a.axis]=a.parse(d3(k,l),f),u.push(Os(d3(k,M),b,n,f));return u}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:o}=e,a=this.getParsed(t),n=a._custom,s=Er(n)?"["+n.start+", "+n.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){let a=o==="reset",{index:n,_cachedMeta:{vScale:s}}=this,V=s.getBasePixel(),l=s.isHorizontal(),M=this._getRuler(),{sharedOptions:u,includeOptions:f}=this._getSharedOptions(e,o);for(let g=e;g<e+i;g++){let b=this.getParsed(g),k=a||y1(b[s.axis])?{base:V,head:V}:this._calculateBarValuePixels(g),O=this._calculateBarIndexPixels(g,M),T=(b._stacks||{})[s.axis],$={horizontal:l,base:k.base,enableBorderRadius:!T||Er(b._custom)||n===T._top||n===T._bottom,x:l?k.head:O.center,y:l?O.center:k.head,height:l?O.size:Math.abs(k.size),width:l?Math.abs(k.size):O.size};f&&($.options=u||this.resolveDataElementOptions(g,t[g].active?"active":o));let F=$.options||t[g].options;Qu($,F,T,n),Xu($,F,M.ratio),this.updateElement(t[g],g,$,o)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(M=>M.controller.options.grouped),a=i.options.stacked,n=[],s=this._cachedMeta.controller.getParsed(e),V=s&&s[i.axis],l=M=>{let u=M._parsed.find(g=>g[i.axis]===V),f=u&&u[M.vScale.axis];if(y1(f)||isNaN(f))return!0};for(let M of o)if(!(e!==void 0&&l(M))&&((a===!1||n.indexOf(M.stack)===-1||a===void 0&&M.stack===void 0)&&n.push(M.stack),M.index===t))break;return n.length||n.push(void 0),n}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[w1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let o=this._getStacks(t,i),a=e!==void 0?o.indexOf(e):-1;return a===-1?o.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,o=[],a,n;for(a=0,n=e.data.length;a<n;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let s=t.barThickness;return{min:s||Wu(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:o},options:{base:a,minBarLength:n}}=this,s=a||0,V=this.getParsed(t),l=V._custom,M=Er(l),u=V[e.axis],f=0,g=i?this.applyStack(e,V,i):u,b,k;g!==u&&(f=g-u,g=u),M&&(u=l.barStart,g=l.barEnd-l.barStart,u!==0&&D5(u)!==D5(l.barEnd)&&(f=0),f+=u);let O=!y1(a)&&!M?a:f,T=e.getPixelForValue(O);if(this.chart.getDataVisibility(t)?b=e.getPixelForValue(f+g):b=T,k=b-T,Math.abs(k)<n){k=qu(k,e,s)*n,u===s&&(T-=k/2);let $=e.getPixelForDecimal(0),F=e.getPixelForDecimal(1),Q=Math.min($,F),U=Math.max($,F);T=Math.max(Math.min(T,U),Q),b=T+k,i&&!M&&(V._stacks[e.axis]._visualValues[o]=e.getValueForPixel(b)-e.getValueForPixel(T))}if(T===e.getPixelForValue(s)){let $=D5(k)*e.getLineWidthForValue(s)/2;T+=$,k-=$}return{size:k,base:T,head:b,center:b+k/2}}_calculateBarIndexPixels(t,e){let i=e.scale,o=this.options,a=o.skipNull,n=w1(o.maxBarThickness,1/0),s,V,l=this._getAxisCount();if(e.grouped){let M=a?this._getStackCount(t):e.stackCount,u=o.barThickness==="flex"?ju(t,e,o,M*l):Uu(t,e,o,M*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(w1(f,this.getFirstScaleIdForIndexAxis())),b=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;s=u.start+u.chunk*b+u.chunk/2,V=Math.min(n,u.chunk*u.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),V=Math.min(n,e.min*e.ratio);return{base:s-V/2,head:s+V/2,center:s,size:V}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length,a=0;for(;a<o;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};D(j0,"id","bar"),D(j0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),D(j0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var G0=class extends f3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=e,n=this.chart._animationsDisabled,{start:s,count:V}=hr(e,o,n);this._drawStart=s,this._drawCount=V,mr(e)&&(s=0,V=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;let l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!n,options:l},t),this.updateElements(o,s,V,t)}updateElements(t,e,i,o){let a=o==="reset",{iScale:n,vScale:s,_stacked:V,_dataset:l}=this._cachedMeta,{sharedOptions:M,includeOptions:u}=this._getSharedOptions(e,o),f=n.axis,g=s.axis,{spanGaps:b,segment:k}=this.options,O=n7(b)?b:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||a||o==="none",$=e+i,F=t.length,Q=e>0&&this.getParsed(e-1);for(let U=0;U<F;++U){let e1=t[U],J=T?e1:{};if(U<e||U>=$){J.skip=!0;continue}let X=this.getParsed(U),i1=y1(X[g]),d1=J[f]=n.getPixelForValue(X[f],U),_1=J[g]=a||i1?s.getBasePixel():s.getPixelForValue(V?this.applyStack(s,X,V):X[g],U);J.skip=isNaN(d1)||isNaN(_1)||i1,J.stop=U>0&&Math.abs(X[f]-Q[f])>O,k&&(J.parsed=X,J.raw=l.data[U]),u&&(J.options=M||this.resolveDataElementOptions(U,e1.active?"active":o)),T||this.updateElement(e1,U,J,o),Q=X}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;let a=o[0].size(this.resolveDataElementOptions(0)),n=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,n)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};D(G0,"id","line"),D(G0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),D(G0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function H7(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Ur=class r{constructor(t){D(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return H7()}parse(){return H7()}format(){return H7()}add(){return H7()}diff(){return H7()}startOf(){return H7()}endOf(){return H7()}},Ju={_date:Ur};function th(r,t,e,i){let{controller:o,data:a,_sorted:n}=r,s=o._cachedMeta.iScale,V=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!=="r"&&n&&a.length){let l=s._reversePixels?cr:z0;if(i){if(o._sharedOptions){let M=a[0],u=typeof M.getRange=="function"&&M.getRange(t);if(u){let f=l(a,t,e-u),g=l(a,t,e+u);return{lo:f.lo,hi:g.hi}}}}else{let M=l(a,t,e);if(V){let{vScale:u}=o._cachedMeta,{_parsed:f}=r,g=f.slice(0,M.lo+1).reverse().findIndex(k=>!y1(k[u.axis]));M.lo-=Math.max(0,g);let b=f.slice(M.hi).findIndex(k=>!y1(k[u.axis]));M.hi+=Math.max(0,b)}return M}}return{lo:0,hi:a.length-1}}function w9(r,t,e,i,o){let a=r.getSortedVisibleDatasetMetas(),n=e[t];for(let s=0,V=a.length;s<V;++s){let{index:l,data:M}=a[s],{lo:u,hi:f}=th(a[s],t,n,o);for(let g=u;g<=f;++g){let b=M[g];b.skip||i(b,l,g)}}}function eh(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,o){let a=t?Math.abs(i.x-o.x):0,n=e?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(n,2))}}function $r(r,t,e,i,o){let a=[];return!o&&!r.isPointInArea(t)||w9(r,e,t,function(s,V,l){!o&&!X5(s,r.chartArea,0)||s.inRange(t.x,t.y,i)&&a.push({element:s,datasetIndex:V,index:l})},!0),a}function rh(r,t,e,i){let o=[];function a(n,s,V){let{startAngle:l,endAngle:M}=n.getProps(["startAngle","endAngle"],i),{angle:u}=Z8(n,{x:t.x,y:t.y});n9(u,l,M)&&o.push({element:n,datasetIndex:s,index:V})}return w9(r,e,t,a),o}function ih(r,t,e,i,o,a){let n=[],s=eh(e),V=Number.POSITIVE_INFINITY;function l(M,u,f){let g=M.inRange(t.x,t.y,o);if(i&&!g)return;let b=M.getCenterPoint(o);if(!(!!a||r.isPointInArea(b))&&!g)return;let O=s(t,b);O<V?(n=[{element:M,datasetIndex:u,index:f}],V=O):O===V&&n.push({element:M,datasetIndex:u,index:f})}return w9(r,e,t,l),n}function Fr(r,t,e,i,o,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?rh(r,t,e,o):ih(r,t,e,i,o,a)}function Wn(r,t,e,i,o){let a=[],n=e==="x"?"inXRange":"inYRange",s=!1;return w9(r,e,t,(V,l,M)=>{V[n]&&V[n](t[e],o)&&(a.push({element:V,datasetIndex:l,index:M}),s=s||V.inRange(t.x,t.y,o))}),i&&!s?[]:a}var oh={evaluateInteractionItems:w9,modes:{index(r,t,e,i){let o=e0(t,r),a=e.axis||"x",n=e.includeInvisible||!1,s=e.intersect?$r(r,o,a,i,n):Fr(r,o,a,!1,i,n),V=[];return s.length?(r.getSortedVisibleDatasetMetas().forEach(l=>{let M=s[0].index,u=l.data[M];u&&!u.skip&&V.push({element:u,datasetIndex:l.index,index:M})}),V):[]},dataset(r,t,e,i){let o=e0(t,r),a=e.axis||"xy",n=e.includeInvisible||!1,s=e.intersect?$r(r,o,a,i,n):Fr(r,o,a,!1,i,n);if(s.length>0){let V=s[0].datasetIndex,l=r.getDatasetMeta(V).data;s=[];for(let M=0;M<l.length;++M)s.push({element:l[M],datasetIndex:V,index:M})}return s},point(r,t,e,i){let o=e0(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return $r(r,o,a,i,n)},nearest(r,t,e,i){let o=e0(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return Fr(r,o,a,e.intersect,i,n)},x(r,t,e,i){let o=e0(t,r);return Wn(r,o,"x",e.intersect,i)},y(r,t,e,i){let o=e0(t,r);return Wn(r,o,"y",e.intersect,i)}}},Ts=["left","top","right","bottom"];function u9(r,t){return r.filter(e=>e.pos===t)}function Un(r,t){return r.filter(e=>Ts.indexOf(e.pos)===-1&&e.box.axis===t)}function h9(r,t){return r.sort((e,i)=>{let o=t?i:e,a=t?e:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function ah(r){let t=[],e,i,o,a,n,s;for(e=0,i=(r||[]).length;e<i;++e)o=r[e],{position:a,options:{stack:n,stackWeight:s=1}}=o,t.push({index:e,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:n&&a+n,stackWeight:s});return t}function Ch(r){let t={};for(let e of r){let{stack:i,pos:o,stackWeight:a}=e;if(!i||!Ts.includes(o))continue;let n=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});n.count++,n.weight+=a}return t}function nh(r,t){let e=Ch(r),{vBoxMaxWidth:i,hBoxMaxHeight:o}=t,a,n,s;for(a=0,n=r.length;a<n;++a){s=r[a];let{fullSize:V}=s.box,l=e[s.stack],M=l&&s.stackWeight/l.weight;s.horizontal?(s.width=M?M*i:V&&t.availableWidth,s.height=o):(s.width=i,s.height=M?M*o:V&&t.availableHeight)}return e}function sh(r){let t=ah(r),e=h9(t.filter(l=>l.box.fullSize),!0),i=h9(u9(t,"left"),!0),o=h9(u9(t,"right")),a=h9(u9(t,"top"),!0),n=h9(u9(t,"bottom")),s=Un(t,"x"),V=Un(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:o.concat(V).concat(n).concat(s),chartArea:u9(t,"chartArea"),vertical:i.concat(o).concat(V),horizontal:a.concat(n).concat(s)}}function jn(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function Ps(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function Hh(r,t,e,i){let{pos:o,box:a}=e,n=r.maxPadding;if(!O1(o)){e.size&&(r[o]-=e.size);let u=i[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?a.height:a.width),e.size=u.size/u.count,r[o]+=e.size}a.getPadding&&Ps(n,a.getPadding());let s=Math.max(0,t.outerWidth-jn(n,r,"left","right")),V=Math.max(0,t.outerHeight-jn(n,r,"top","bottom")),l=s!==r.w,M=V!==r.h;return r.w=s,r.h=V,e.horizontal?{same:l,other:M}:{same:M,other:l}}function Vh(r){let t=r.maxPadding;function e(i){let o=Math.max(t[i]-r[i],0);return r[i]+=o,o}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function Lh(r,t){let e=t.maxPadding;function i(o){let a={left:0,top:0,right:0,bottom:0};return o.forEach(n=>{a[n]=Math.max(t[n],e[n])}),a}return i(r?["left","right"]:["top","bottom"])}function A9(r,t,e,i){let o=[],a,n,s,V,l,M;for(a=0,n=r.length,l=0;a<n;++a){s=r[a],V=s.box,V.update(s.width||t.w,s.height||t.h,Lh(s.horizontal,t));let{same:u,other:f}=Hh(t,e,s,i);l|=u&&o.length,M=M||f,V.fullSize||o.push(s)}return l&&A9(o,t,e,i)||M}function K8(r,t,e,i,o){r.top=e,r.left=t,r.right=t+i,r.bottom=e+o,r.width=i,r.height=o}function Gn(r,t,e,i){let o=e.padding,{x:a,y:n}=t;for(let s of r){let V=s.box,l=i[s.stack]||{count:1,placed:0,weight:1},M=s.stackWeight/l.weight||1;if(s.horizontal){let u=t.w*M,f=l.size||V.height;a7(l.start)&&(n=l.start),V.fullSize?K8(V,o.left,n,e.outerWidth-o.right-o.left,f):K8(V,t.left+l.placed,n,u,f),l.start=n,l.placed+=u,n=V.bottom}else{let u=t.h*M,f=l.size||V.width;a7(l.start)&&(a=l.start),V.fullSize?K8(V,a,o.top,f,e.outerHeight-o.bottom-o.top):K8(V,a,t.top+l.placed,f,u),l.start=a,l.placed+=u,a=V.right}}t.x=a,t.y=n}var A3={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let o=w2(r.options.layout.padding),a=Math.max(t-o.width,0),n=Math.max(e-o.height,0),s=sh(r.boxes),V=s.vertical,l=s.horizontal;U1(r.boxes,k=>{typeof k.beforeLayout=="function"&&k.beforeLayout()});let M=V.reduce((k,O)=>O.box.options&&O.box.options.display===!1?k:k+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:o,availableWidth:a,availableHeight:n,vBoxMaxWidth:a/2/M,hBoxMaxHeight:n/2}),f=Object.assign({},o);Ps(f,w2(i));let g=Object.assign({maxPadding:f,w:a,h:n,x:o.left,y:o.top},o),b=nh(V.concat(l),u);A9(s.fullSize,g,u,b),A9(V,g,u,b),A9(l,g,u,b)&&A9(V,g,u,b),Vh(g),Gn(s.leftAndTop,g,u,b),g.x+=g.w,g.y+=g.h,Gn(s.rightAndBottom,g,u,b),r.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},U1(s.chartArea,k=>{let O=k.box;Object.assign(O,r.chartArea),O.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}},nt=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}},jr=class extends nt{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},ot="$chartjs",lh={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},qn=r=>r===null||r==="";function ch(r,t){let e=r.style,i=r.getAttribute("height"),o=r.getAttribute("width");if(r[ot]={initial:{height:i,width:o,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",qn(o)){let a=U8(r,"width");a!==void 0&&(r.width=a)}if(qn(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=U8(r,"height");a!==void 0&&(r.height=a)}return r}var Es=Sr?{passive:!0}:!1;function Mh(r,t,e){r&&r.addEventListener(t,e,Es)}function dh(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,Es)}function ph(r,t){let e=lh[r.type]||r.type,{x:i,y:o}=e0(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:o!==void 0?o:null}}function st(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function uh(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let s of a)n=n||st(s.addedNodes,i),n=n&&!st(s.removedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}function hh(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let s of a)n=n||st(s.removedNodes,i),n=n&&!st(s.addedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}var g9=new Map,Yn=0;function $s(){let r=window.devicePixelRatio;r!==Yn&&(Yn=r,g9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function mh(r,t){g9.size||window.addEventListener("resize",$s),g9.set(r,t)}function fh(r){g9.delete(r),g9.size||window.removeEventListener("resize",$s)}function Ah(r,t,e){let i=r.canvas,o=i&&d9(i);if(!o)return;let a=P8((s,V)=>{let l=o.clientWidth;e(s,V),l<o.clientWidth&&e()},window),n=new ResizeObserver(s=>{let V=s[0],l=V.contentRect.width,M=V.contentRect.height;l===0&&M===0||a(l,M)});return n.observe(o),mh(r,a),n}function Rr(r,t,e){e&&e.disconnect(),t==="resize"&&fh(r)}function vh(r,t,e){let i=r.canvas,o=P8(a=>{r.ctx!==null&&e(ph(a,r))},r);return Mh(i,t,o),o}var Gr=class extends nt{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(ch(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[ot])return!1;let i=e[ot].initial;["height","width"].forEach(a=>{let n=i[a];y1(n)?e.removeAttribute(a):e.setAttribute(a,n)});let o=i.style||{};return Object.keys(o).forEach(a=>{e.style[a]=o[a]}),e.width=e.width,delete e[ot],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let o=t.$proxies||(t.$proxies={}),n={attach:uh,detach:hh,resize:Ah}[e]||vh;o[e]=n(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),o=i[e];if(!o)return;({attach:Rr,detach:Rr,resize:Rr}[e]||dh)(t,e,o),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return br(t,e,i,o)}isAttached(t){let e=t&&d9(t);return!!(e&&e.isConnected)}};function xh(r){return!M9()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?jr:Gr}var B5=class{constructor(){D(this,"x");D(this,"y");D(this,"active",!1);D(this,"options");D(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return n7(this.x)&&n7(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let o={};return t.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}};D(B5,"defaults",{}),D(B5,"defaultRoutes");function gh(r,t){let e=r.options.ticks,i=_h(r),o=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?bh(t):[],n=a.length,s=a[0],V=a[n-1],l=[];if(n>o)return Sh(t,l,a,n/o),l;let M=wh(a,t,o);if(n>0){let u,f,g=n>1?Math.round((V-s)/(n-1)):null;for(X8(t,l,M,y1(g)?0:s-g,s),u=0,f=n-1;u<f;u++)X8(t,l,M,a[u],a[u+1]);return X8(t,l,M,V,y1(g)?t.length:V+g),l}return X8(t,l,M),l}function _h(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),o=r._maxLength/e;return Math.floor(Math.min(i,o))}function wh(r,t,e){let i=yh(r),o=t.length/e;if(!i)return Math.max(o,1);let a=Vr(i);for(let n=0,s=a.length-1;n<s;n++){let V=a[n];if(V>o)return V}return Math.max(o,1)}function bh(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function Sh(r,t,e,i){let o=0,a=e[0],n;for(i=Math.ceil(i),n=0;n<r.length;n++)n===a&&(t.push(r[n]),o++,a=e[o*i])}function X8(r,t,e,i,o){let a=w1(i,0),n=Math.min(w1(o,r.length),r.length),s=0,V,l,M;for(e=Math.ceil(e),o&&(V=o-i,e=V/Math.floor(V/e)),M=a;M<0;)s++,M=Math.round(a+s*e);for(l=Math.max(a,0);l<n;l++)l===M&&(t.push(r[l]),s++,M=Math.round(a+s*e))}function yh(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var Zh=r=>r==="left"?"right":r==="right"?"left":r,Qn=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,Kn=(r,t)=>Math.min(t||r,r);function Xn(r,t){let e=[],i=r.length/t,o=r.length,a=0;for(;a<o;a+=i)e.push(r[Math.floor(a)]);return e}function kh(r,t,e){let i=r.ticks.length,o=Math.min(t,i-1),a=r._startPixel,n=r._endPixel,s=1e-6,V=r.getPixelForTick(o),l;if(!(e&&(i===1?l=Math.max(V-a,n-V):t===0?l=(r.getPixelForTick(1)-V)/2:l=(V-r.getPixelForTick(o-1))/2,V+=o<t?l:-l,V<a-s||V>n+s)))return V}function Oh(r,t){U1(r,e=>{let i=e.gc,o=i.length/2,a;if(o>t){for(a=0;a<o;++a)delete e.data[i[a]];i.splice(0,o)}})}function m9(r){return r.drawTicks?r.tickLength:0}function Jn(r,t){if(!r.display)return 0;let e=A2(r.font,t),i=w2(r.padding);return(a2(r.text)?r.text.length:1)*e.lineHeight+i.height}function Th(r,t){return x0(r,{scale:t,type:"scale"})}function Ph(r,t,e){return x0(r,{tick:e,index:t,type:"tick"})}function Eh(r,t,e){let i=E8(r);return(e&&t!=="right"||!e&&t==="right")&&(i=Zh(i)),i}function $h(r,t,e,i){let{top:o,left:a,bottom:n,right:s,chart:V}=r,{chartArea:l,scales:M}=V,u=0,f,g,b,k=n-o,O=s-a;if(r.isHorizontal()){if(g=o5(i,a,s),O1(e)){let T=Object.keys(e)[0],$=e[T];b=M[T].getPixelForValue($)+k-t}else e==="center"?b=(l.bottom+l.top)/2+k-t:b=Qn(r,e,t);f=s-a}else{if(O1(e)){let T=Object.keys(e)[0],$=e[T];g=M[T].getPixelForValue($)-O+t}else e==="center"?g=(l.left+l.right)/2-O+t:g=Qn(r,e,t);b=o5(i,n,o),u=e==="left"?-f2:f2}return{titleX:g,titleY:b,maxWidth:f,rotation:u}}var L7=class r extends B5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=i5(t,Number.POSITIVE_INFINITY),e=i5(e,Number.NEGATIVE_INFINITY),i=i5(i,Number.POSITIVE_INFINITY),o=i5(o,Number.NEGATIVE_INFINITY),{min:i5(t,i),max:i5(e,o),minDefined:l2(t),maxDefined:l2(e)}}getMinMax(t){let{min:e,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),n;if(o&&a)return{min:e,max:i};let s=this.getMatchingVisibleMetas();for(let V=0,l=s.length;V<l;++V)n=s[V].controller.getMinMax(this,t),o||(e=Math.min(e,n.min)),a||(i=Math.max(i,n.max));return e=a&&e>i?i:e,i=o&&e>i?e:i,{min:i5(e,i5(i,e)),max:i5(i,i5(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Y1(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:o,grace:a,ticks:n}=this.options,s=n.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=xr(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let V=s<this.ticks.length;this._convertTicksToLabels(V?Xn(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),n.display&&(n.autoSkip||n.source==="auto")&&(this.ticks=gh(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),V&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Y1(this.options.afterUpdate,[this])}beforeSetDimensions(){Y1(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Y1(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Y1(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Y1(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,o,a;for(i=0,o=t.length;i<o;i++)a=t[i],a.label=Y1(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){Y1(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Y1(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=Kn(this.ticks.length,t.ticks.maxTicksLimit),o=e.minRotation||0,a=e.maxRotation,n=o,s,V,l;if(!this._isVisible()||!e.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}let M=this._getLabelSizes(),u=M.widest.width,f=M.highest.height,g=E2(this.chart.width-u,0,this.maxWidth);s=t.offset?this.maxWidth/i:g/(i-1),u+6>s&&(s=g/(i-(t.offset?.5:1)),V=this.maxHeight-m9(t.grid)-e.padding-Jn(t.title,this.chart.options.font),l=Math.sqrt(u*u+f*f),n=C9(Math.min(Math.asin(E2((M.highest.height+6)/s,-1,1)),Math.asin(E2(V/l,-1,1))-Math.asin(E2(f/l,-1,1)))),n=Math.max(o,Math.min(a,n))),this.labelRotation=n}afterCalculateLabelRotation(){Y1(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Y1(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:a}}=this,n=this._isVisible(),s=this.isHorizontal();if(n){let V=Jn(o,e.options.font);if(s?(t.width=this.maxWidth,t.height=m9(a)+V):(t.height=this.maxHeight,t.width=m9(a)+V),i.display&&this.ticks.length){let{first:l,last:M,widest:u,highest:f}=this._getLabelSizes(),g=i.padding*2,b=v0(this.labelRotation),k=Math.cos(b),O=Math.sin(b);if(s){let T=i.mirror?0:O*u.width+k*f.height;t.height=Math.min(this.maxHeight,t.height+T+g)}else{let T=i.mirror?0:k*u.width+O*f.height;t.width=Math.min(this.maxWidth,t.width+T+g)}this._calculatePadding(l,M,O,k)}}this._handleMargins(),s?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){let{ticks:{align:a,padding:n},position:s}=this.options,V=this.labelRotation!==0,l=s!=="top"&&this.axis==="x";if(this.isHorizontal()){let M=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1),f=0,g=0;V?l?(f=o*t.width,g=i*e.height):(f=i*t.height,g=o*e.width):a==="start"?g=e.width:a==="end"?f=t.width:a!=="inner"&&(f=t.width/2,g=e.width/2),this.paddingLeft=Math.max((f-M+n)*this.width/(this.width-M),0),this.paddingRight=Math.max((g-u+n)*this.width/(this.width-u),0)}else{let M=e.height/2,u=t.height/2;a==="start"?(M=0,u=t.height):a==="end"&&(M=e.height,u=0),this.paddingTop=M+n,this.paddingBottom=u+n}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Y1(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)y1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=Xn(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:o,_longestTextCache:a}=this,n=[],s=[],V=Math.floor(e/Kn(e,i)),l=0,M=0,u,f,g,b,k,O,T,$,F,Q,U;for(u=0;u<e;u+=V){if(b=t[u].label,k=this._resolveTickFontOptions(u),o.font=O=k.string,T=a[O]=a[O]||{data:{},gc:[]},$=k.lineHeight,F=Q=0,!y1(b)&&!a2(b))F=e4(o,T.data,T.gc,F,b),Q=$;else if(a2(b))for(f=0,g=b.length;f<g;++f)U=b[f],!y1(U)&&!a2(U)&&(F=e4(o,T.data,T.gc,F,U),Q+=$);n.push(F),s.push(Q),l=Math.max(F,l),M=Math.max(Q,M)}Oh(a,e);let e1=n.indexOf(l),J=s.indexOf(M),X=i1=>({width:n[i1]||0,height:s[i1]||0});return{first:X(0),last:X(e-1),widest:X(e1),highest:X(J),widths:n,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return lr(this._alignToPixels?I0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=Ph(this.getContext(),t,i))}return this.$context||(this.$context=Th(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=v0(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),a=this._getLabelSizes(),n=t.autoSkipPadding||0,s=a?a.widest.width+n:0,V=a?a.highest.height+n:0;return this.isHorizontal()?V*i>s*o?s/i:V/o:V*o<s*i?V/i:s/o}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,o=this.options,{grid:a,position:n,border:s}=o,V=a.offset,l=this.isHorizontal(),u=this.ticks.length+(V?1:0),f=m9(a),g=[],b=s.setContext(this.getContext()),k=b.display?b.width:0,O=k/2,T=function(t1){return I0(i,t1,k)},$,F,Q,U,e1,J,X,i1,d1,_1,A1,i2;if(n==="top")$=T(this.bottom),J=this.bottom-f,i1=$-O,_1=T(t.top)+O,i2=t.bottom;else if(n==="bottom")$=T(this.top),_1=t.top,i2=T(t.bottom)-O,J=$+O,i1=this.top+f;else if(n==="left")$=T(this.right),e1=this.right-f,X=$-O,d1=T(t.left)+O,A1=t.right;else if(n==="right")$=T(this.left),d1=t.left,A1=T(t.right)-O,e1=$+O,X=this.left+f;else if(e==="x"){if(n==="center")$=T((t.top+t.bottom)/2+.5);else if(O1(n)){let t1=Object.keys(n)[0],J1=n[t1];$=T(this.chart.scales[t1].getPixelForValue(J1))}_1=t.top,i2=t.bottom,J=$+O,i1=J+f}else if(e==="y"){if(n==="center")$=T((t.left+t.right)/2);else if(O1(n)){let t1=Object.keys(n)[0],J1=n[t1];$=T(this.chart.scales[t1].getPixelForValue(J1))}e1=$-O,X=e1-f,d1=t.left,A1=t.right}let G1=w1(o.ticks.maxTicksLimit,u),T1=Math.max(1,Math.ceil(u/G1));for(F=0;F<u;F+=T1){let t1=this.getContext(F),J1=a.setContext(t1),V1=s.setContext(t1),j=J1.lineWidth,a1=J1.color,L1=V1.dash||[],m1=V1.dashOffset,c1=J1.tickWidth,M1=J1.tickColor,b1=J1.tickBorderDash||[],P1=J1.tickBorderDashOffset;Q=kh(this,F,V),Q!==void 0&&(U=I0(i,Q,j),l?e1=X=d1=A1=U:J=i1=_1=i2=U,g.push({tx1:e1,ty1:J,tx2:X,ty2:i1,x1:d1,y1:_1,x2:A1,y2:i2,width:j,color:a1,borderDash:L1,borderDashOffset:m1,tickWidth:c1,tickColor:M1,tickBorderDash:b1,tickBorderDashOffset:P1}))}return this._ticksLength=u,this._borderValue=$,g}_computeLabelItems(t){let e=this.axis,i=this.options,{position:o,ticks:a}=i,n=this.isHorizontal(),s=this.ticks,{align:V,crossAlign:l,padding:M,mirror:u}=a,f=m9(i.grid),g=f+M,b=u?-M:g,k=-v0(this.labelRotation),O=[],T,$,F,Q,U,e1,J,X,i1,d1,_1,A1,i2="middle";if(o==="top")e1=this.bottom-b,J=this._getXAxisLabelAlignment();else if(o==="bottom")e1=this.top+b,J=this._getXAxisLabelAlignment();else if(o==="left"){let T1=this._getYAxisLabelAlignment(f);J=T1.textAlign,U=T1.x}else if(o==="right"){let T1=this._getYAxisLabelAlignment(f);J=T1.textAlign,U=T1.x}else if(e==="x"){if(o==="center")e1=(t.top+t.bottom)/2+g;else if(O1(o)){let T1=Object.keys(o)[0],t1=o[T1];e1=this.chart.scales[T1].getPixelForValue(t1)+g}J=this._getXAxisLabelAlignment()}else if(e==="y"){if(o==="center")U=(t.left+t.right)/2-g;else if(O1(o)){let T1=Object.keys(o)[0],t1=o[T1];U=this.chart.scales[T1].getPixelForValue(t1)}J=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(V==="start"?i2="top":V==="end"&&(i2="bottom"));let G1=this._getLabelSizes();for(T=0,$=s.length;T<$;++T){F=s[T],Q=F.label;let T1=a.setContext(this.getContext(T));X=this.getPixelForTick(T)+a.labelOffset,i1=this._resolveTickFontOptions(T),d1=i1.lineHeight,_1=a2(Q)?Q.length:1;let t1=_1/2,J1=T1.color,V1=T1.textStrokeColor,j=T1.textStrokeWidth,a1=J;n?(U=X,J==="inner"&&(T===$-1?a1=this.options.reverse?"left":"right":T===0?a1=this.options.reverse?"right":"left":a1="center"),o==="top"?l==="near"||k!==0?A1=-_1*d1+d1/2:l==="center"?A1=-G1.highest.height/2-t1*d1+d1:A1=-G1.highest.height+d1/2:l==="near"||k!==0?A1=d1/2:l==="center"?A1=G1.highest.height/2-t1*d1:A1=G1.highest.height-_1*d1,u&&(A1*=-1),k!==0&&!T1.showLabelBackdrop&&(U+=d1/2*Math.sin(k))):(e1=X,A1=(1-_1)*d1/2);let L1;if(T1.showLabelBackdrop){let m1=w2(T1.backdropPadding),c1=G1.heights[T],M1=G1.widths[T],b1=A1-m1.top,P1=0-m1.left;switch(i2){case"middle":b1-=c1/2;break;case"bottom":b1-=c1;break}switch(J){case"center":P1-=M1/2;break;case"right":P1-=M1;break;case"inner":T===$-1?P1-=M1:T>0&&(P1-=M1/2);break}L1={left:P1,top:b1,width:M1+m1.width,height:c1+m1.height,color:T1.backdropColor}}O.push({label:Q,font:i1,textOffset:A1,options:{rotation:k,color:J1,strokeColor:V1,strokeWidth:j,textAlign:a1,textBaseline:i2,translation:[U,e1],backdrop:L1}})}return O}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-v0(this.labelRotation))return t==="top"?"left":"right";let o="center";return e.align==="start"?o="left":e.align==="end"?o="right":e.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,n=this._getLabelSizes(),s=t+a,V=n.widest.width,l,M;return e==="left"?o?(M=this.right+a,i==="near"?l="left":i==="center"?(l="center",M+=V/2):(l="right",M+=V)):(M=this.right-s,i==="near"?l="right":i==="center"?(l="center",M-=V/2):(l="left",M=this.left)):e==="right"?o?(M=this.left+a,i==="near"?l="right":i==="center"?(l="center",M-=V/2):(l="left",M-=V)):(M=this.left+s,i==="near"?l="left":i==="center"?(l="center",M+=V/2):(l="right",M=this.right)):l="right",{textAlign:l,x:M}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:o,width:a,height:n}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,a,n),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let o=this.ticks.findIndex(a=>a.value===t);return o>=0?e.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,n,s=(V,l,M)=>{!M.width||!M.color||(i.save(),i.lineWidth=M.width,i.strokeStyle=M.color,i.setLineDash(M.borderDash||[]),i.lineDashOffset=M.borderDashOffset,i.beginPath(),i.moveTo(V.x,V.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(a=0,n=o.length;a<n;++a){let V=o[a];e.drawOnChartArea&&s({x:V.x1,y:V.y1},{x:V.x2,y:V.y2},V),e.drawTicks&&s({x:V.tx1,y:V.ty1},{x:V.tx2,y:V.ty2},{color:V.tickColor,width:V.tickWidth,borderDash:V.tickBorderDash,borderDashOffset:V.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),n=i.display?a.width:0;if(!n)return;let s=o.setContext(this.getContext(0)).lineWidth,V=this._borderValue,l,M,u,f;this.isHorizontal()?(l=I0(t,this.left,n)-n/2,M=I0(t,this.right,s)+s/2,u=f=V):(u=I0(t,this.top,n)-n/2,f=I0(t,this.bottom,s)+s/2,l=M=V),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(l,u),e.lineTo(M,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,o=this._computeLabelArea();o&&o4(i,o);let a=this.getLabelItems(t);for(let n of a){let s=n.options,V=n.font,l=n.label,M=n.textOffset;u3(i,l,0,M,V,s)}o&&a4(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;let a=A2(i.font),n=w2(i.padding),s=i.align,V=a.lineHeight/2;e==="bottom"||e==="center"||O1(e)?(V+=n.bottom,a2(i.text)&&(V+=a.lineHeight*(i.text.length-1))):V+=n.top;let{titleX:l,titleY:M,maxWidth:u,rotation:f}=$h(this,V,e,s);u3(t,i.text,0,0,a,{color:i.color,maxWidth:u,rotation:f,textAlign:Eh(s,e,o),textBaseline:"middle",translation:[l,M]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=w1(t.grid&&t.grid.z,-1),o=w1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[],a,n;for(a=0,n=e.length;a<n;++a){let s=e[a];s[i]===this.id&&(!t||s.type===t)&&o.push(s)}return o}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return A2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},s4=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;Dh(e)&&(i=this.register(e));let o=this.items,a=t.id,n=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in o||(o[a]=t,Fh(t,n,i),this.override&&V2.override(t.id,t.overrides)),n}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in V2[o]&&(delete V2[o][i],this.override&&delete p3[i])}};function Fh(r,t,e){let i=A5(Object.create(null),[e?V2.get(e):{},V2.get(t),r.defaults]);V2.set(t,i),r.defaultRoutes&&Rh(t,r.defaultRoutes),r.descriptors&&V2.describe(t,r.descriptors)}function Rh(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),o=i.pop(),a=[r].concat(i).join("."),n=t[e].split("."),s=n.pop(),V=n.join(".");V2.route(a,o,V,s)})}function Dh(r){return"id"in r&&"defaults"in r}var qr=class{constructor(){this.controllers=new s4(f3,"datasets",!0),this.elements=new s4(B5,"elements"),this.plugins=new s4(Object,"plugins"),this.scales=new s4(L7,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(o=>{let a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(t,a,o):U1(o,n=>{let s=i||this._getRegistryForType(n);this._exec(t,s,n)})})}_exec(t,e,i){let o=a9(t);Y1(i["before"+o],[],i),e[t](i),Y1(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let o=e.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return o}},_0=new qr,Yr=class{constructor(){this._init=void 0}notify(t,e,i,o){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=o?this._descriptors(t).filter(o):this._descriptors(t),n=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),n}_notify(t,e,i,o){o=o||{};for(let a of t){let n=a.plugin,s=n[i],V=[e,o,a.options];if(Y1(s,V,n)===!1&&o.cancelable)return!1}return!0}invalidate(){y1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,o=w1(i.options&&i.options.plugins,{}),a=Bh(i);return o===!1&&!e?[]:Ih(t,a,o,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,o=(a,n)=>a.filter(s=>!n.some(V=>s.plugin.id===V.plugin.id));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}};function Bh(r){let t={},e=[],i=Object.keys(_0.plugins.items);for(let a=0;a<i.length;a++)e.push(_0.getPlugin(i[a]));let o=r.plugins||[];for(let a=0;a<o.length;a++){let n=o[a];e.indexOf(n)===-1&&(e.push(n),t[n.id]=!0)}return{plugins:e,localIds:t}}function zh(r,t){return!t&&r===!1?null:r===!0?{}:r}function Ih(r,{plugins:t,localIds:e},i,o){let a=[],n=r.getContext();for(let s of t){let V=s.id,l=zh(i[V],o);l!==null&&a.push({plugin:s,options:Nh(r.config,{plugin:s,local:e[V]},l,n)})}return a}function Nh(r,{plugin:t,local:e},i,o){let a=r.pluginScopeKeys(t),n=r.getOptionScopes(i,a);return e&&t.defaults&&n.push(t.defaults),r.createResolver(n,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Qr(r,t){let e=V2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Wh(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function Uh(r,t){return r===t?"_index_":"_value_"}function ts(r){if(r==="x"||r==="y"||r==="r")return r}function jh(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function Kr(r,...t){if(ts(r))return r;for(let e of t){let i=e.axis||jh(e.position)||r.length>1&&ts(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function es(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function Gh(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return es(r,"x",e[0])||es(r,"y",e[0])}return{}}function qh(r,t){let e=p3[r.type]||{scales:{}},i=t.scales||{},o=Qr(r.type,t),a=Object.create(null);return Object.keys(i).forEach(n=>{let s=i[n];if(!O1(s))return console.error(`Invalid scale configuration for scale: ${n}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${n}`);let V=Kr(n,s,Gh(n,r),V2.scales[s.type]),l=Uh(V,o),M=e.scales||{};a[n]=o7(Object.create(null),[{axis:V},s,M[V],M[l]])}),r.data.datasets.forEach(n=>{let s=n.type||r.type,V=n.indexAxis||Qr(s,t),M=(p3[s]||{}).scales||{};Object.keys(M).forEach(u=>{let f=Wh(u,V),g=n[f+"AxisID"]||f;a[g]=a[g]||Object.create(null),o7(a[g],[{axis:f},i[g],M[u]])})}),Object.keys(a).forEach(n=>{let s=a[n];o7(s,[V2.scales[s.type],V2.scale])}),a}function Fs(r){let t=r.options||(r.options={});t.plugins=w1(t.plugins,{}),t.scales=qh(r,t)}function Rs(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function Yh(r){return r=r||{},r.data=Rs(r.data),Fs(r),r}var rs=new Map,Ds=new Set;function J8(r,t){let e=rs.get(r);return e||(e=t(),rs.set(r,e),Ds.add(e)),e}var f9=(r,t,e)=>{let i=d3(t,e);i!==void 0&&r.add(i)},Xr=class{constructor(t){this._config=Yh(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Rs(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),Fs(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return J8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return J8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return J8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return J8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,o=i.get(t);return(!o||e)&&(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){let{options:o,type:a}=this,n=this._cachedScopes(t,i),s=n.get(e);if(s)return s;let V=new Set;e.forEach(M=>{t&&(V.add(t),M.forEach(u=>f9(V,t,u))),M.forEach(u=>f9(V,o,u)),M.forEach(u=>f9(V,p3[a]||{},u)),M.forEach(u=>f9(V,V2,u)),M.forEach(u=>f9(V,R8,u))});let l=Array.from(V);return l.length===0&&l.push(Object.create(null)),Ds.has(e)&&n.set(e,l),l}chartOptionScopes(){let{options:t,type:e}=this;return[t,p3[e]||{},V2.datasets[e]||{},{type:e},V2,R8]}resolveNamedOptions(t,e,i,o=[""]){let a={$shared:!0},{resolver:n,subPrefixes:s}=is(this._resolverCache,t,o),V=n;if(Kh(n,e)){a.$shared=!1,i=f0(i)?i():i;let l=this.createResolver(t,i,s);V=M3(n,i,l)}for(let l of e)a[l]=V[l];return a}createResolver(t,e,i=[""],o){let{resolver:a}=is(this._resolverCache,t,i);return O1(e)?M3(a,e,void 0,o):a}};function is(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let o=e.join(),a=i.get(o);return a||(a={resolver:c9(t,e),subPrefixes:e.filter(s=>!s.toLowerCase().includes("hover"))},i.set(o,a)),a}var Qh=r=>O1(r)&&Object.getOwnPropertyNames(r).some(t=>f0(r[t]));function Kh(r,t){let{isScriptable:e,isIndexable:i}=I8(r);for(let o of t){let a=e(o),n=i(o),s=(n||a)&&r[o];if(a&&(f0(s)||Qh(s))||n&&a2(s))return!0}return!1}var Xh="4.5.1",Jh=["top","bottom","left","right","chartArea"];function os(r,t){return r==="top"||r==="bottom"||Jh.indexOf(r)===-1&&t==="x"}function as(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function Cs(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Y1(e&&e.onComplete,[r],t)}function tm(r){let t=r.chart,e=t.options.animation;Y1(e&&e.onProgress,[r],t)}function Bs(r){return M9()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var at={},ns=r=>{let t=Bs(r);return Object.values(at).filter(e=>e.canvas===t).pop()};function em(r,t,e){let i=Object.keys(r);for(let o of i){let a=+o;if(a>=t){let n=r[o];delete r[o],(e>0||a>t)&&(r[a+e]=n)}}}function rm(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var $2=class{static register(...t){_0.add(...t),ss()}static unregister(...t){_0.remove(...t),ss()}constructor(t,e){let i=this.config=new Xr(e),o=Bs(t),a=ns(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let n=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||xh(o)),this.platform.updateConfig(i);let s=this.platform.acquireContext(o,n.aspectRatio),V=s&&s.canvas,l=V&&V.height,M=V&&V.width;if(this.id=nr(),this.ctx=s,this.canvas=V,this.width=M,this.height=l,this._options=n,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Yr,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=pr(u=>this.update(u),n.resizeDelay||0),this._dataChanges=[],at[this.id]=this,!s||!V){console.error("Failed to create chart: can't acquire context from the given item");return}W0.listen(this,"complete",Cs),W0.listen(this,"progress",tm),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:a}=this;return y1(t)?e&&a?a:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return _0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():W8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return D8(this.canvas,this.ctx),this}stop(){return W0.stop(this),this}resize(t,e){W0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,n=this.platform.getMaximumSize(o,t,e,a),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),V=this.width?"resize":"attach";this.width=n.width,this.height=n.height,this._aspectRatio=this.aspectRatio,W8(this,s,!0)&&(this.notifyPlugins("resize",{size:n}),Y1(i.onResize,[this,n],this),this.attached&&this._doResize(V)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};U1(e,(i,o)=>{i.id=o})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce((n,s)=>(n[s]=!1,n),{}),a=[];e&&(a=a.concat(Object.keys(e).map(n=>{let s=e[n],V=Kr(n,s),l=V==="r",M=V==="x";return{options:s,dposition:l?"chartArea":M?"bottom":"left",dtype:l?"radialLinear":M?"category":"linear"}}))),U1(a,n=>{let s=n.options,V=s.id,l=Kr(V,s),M=w1(s.type,n.dtype);(s.position===void 0||os(s.position,l)!==os(n.dposition))&&(s.position=n.dposition),o[V]=!0;let u=null;if(V in i&&i[V].type===M)u=i[V];else{let f=_0.getScale(M);u=new f({id:V,type:M,ctx:this.ctx,chart:this}),i[u.id]=u}u.init(s,t)}),U1(o,(n,s)=>{n||delete i[s]}),U1(i,n=>{A3.configure(this,n,n.options),A3.addBox(this,n)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((o,a)=>o.index-a.index),i>e){for(let o=e;o<i;++o)this._destroyDatasetMeta(o);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(as("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,o)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){let a=e[i],n=this.getDatasetMeta(i),s=a.type||this.config.type;if(n.type&&n.type!==s&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=s,n.indexAxis=a.indexAxis||Qr(s,this.options),n.order=a.order||0,n.index=i,n.label=""+a.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{let V=_0.getController(s),{datasetElementType:l,dataElementType:M}=V2.datasets[s];Object.assign(V,{dataElementType:_0.getElement(M),datasetElementType:l&&_0.getElement(l)}),n.controller=new V(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){U1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let n=0;for(let l=0,M=this.data.datasets.length;l<M;l++){let{controller:u}=this.getDatasetMeta(l),f=!o&&a.indexOf(u)===-1;u.buildOrUpdateElements(f),n=Math.max(+u.getMaxOverflow(),n)}n=this._minPadding=i.layout.autoPadding?n:0,this._updateLayout(n),o||U1(a,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(as("z","_idx"));let{_active:s,_lastEvent:V}=this;V?this._eventHandler(V,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){U1(this.scales,t=>{A3.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!w8(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:o,count:a}of e){let n=i==="_removeElements"?-a:a;em(t,o,n)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(n=>n[0]===a).map((n,s)=>s+","+n.splice(1).join(","))),o=i(0);for(let a=1;a<e;a++)if(!w8(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;A3.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],U1(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,f0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(W0.has(this)?this.attached&&!W0.running(this)&&W0.start(this):(this.draw(),Cs({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],o,a;for(o=0,a=e.length;o<a;++o){let n=e[o];(!t||n.visible)&&i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},o=Q8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&o4(e,o),t.controller.draw(),o&&a4(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return X5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,o){let a=oh.modes[e];return typeof a=="function"?a(this,t,i,o):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,o=i.filter(a=>a&&a._dataset===e).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=x0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let o=i?"show":"hide",a=this.getDatasetMeta(t),n=a.controller._resolveAnimations(void 0,o);a7(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),n.update(a,{visible:i}),this.update(s=>s.datasetIndex===t?o:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),W0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),D8(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete at[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,n)=>{e.addEventListener(this,a,n),t[a]=n},o=(a,n,s)=>{a.offsetX=n,a.offsetY=s,this._eventHandler(a)};U1(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(V,l)=>{e.addEventListener(this,V,l),t[V]=l},o=(V,l)=>{t[V]&&(e.removeEventListener(this,V,l),delete t[V])},a=(V,l)=>{this.canvas&&this.resize(V,l)},n,s=()=>{o("attach",s),this.attached=!0,this.resize(),i("resize",a),i("detach",n)};n=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",s)},e.isAttached(this.canvas)?s():n()}unbindEvents(){U1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},U1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let o=i?"set":"remove",a,n,s,V;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),s=0,V=t.length;s<V;++s){n=t[s];let l=n&&this.getDatasetMeta(n.datasetIndex).controller;l&&l[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:n})=>{let s=this.getDatasetMeta(a);if(!s)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:s.data[n],index:n}});!i4(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let o=this.options.hover,a=(V,l)=>V.filter(M=>!l.some(u=>M.datasetIndex===u.datasetIndex&&M.index===u.index)),n=a(e,t),s=i?t:a(t,e);n.length&&this.updateHoverStyle(n,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},o=n=>(n.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:o=[],options:a}=this,n=e,s=this._getActiveElements(t,o,i,n),V=Hr(t),l=rm(t,this._lastEvent,i,V);i&&(this._lastEvent=null,Y1(a.onHover,[t,s,this],this),V&&Y1(a.onClick,[t,s,this],this));let M=!i4(s,o);return(M||e)&&(this._active=s,this._updateHoverStyles(s,o,e)),this._lastEvent=l,M}_getActiveElements(t,e,i,o){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,o)}};D($2,"defaults",V2),D($2,"instances",at),D($2,"overrides",p3),D($2,"registry",_0),D($2,"version",Xh),D($2,"getChart",ns);function ss(){return U1($2.instances,r=>r._plugins.invalidate())}function im(r,t,e){let{startAngle:i,x:o,y:a,outerRadius:n,innerRadius:s,options:V}=t,{borderWidth:l,borderJoinStyle:M}=V,u=Math.min(l/n,P2(i-e));if(r.beginPath(),r.arc(o,a,n-l/2,i+u/2,e-u/2),s>0){let f=Math.min(l/s,P2(i-e));r.arc(o,a,s+l/2,e-f/2,i+f/2,!0)}else{let f=Math.min(l/2,n*P2(i-e));if(M==="round")r.arc(o,a,f,e-e2/2,i+e2/2,!0);else if(M==="bevel"){let g=2*f*f,b=-g*Math.cos(e+e2/2)+o,k=-g*Math.sin(e+e2/2)+a,O=g*Math.cos(i+e2/2)+o,T=g*Math.sin(i+e2/2)+a;r.lineTo(b,k),r.lineTo(O,T)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function om(r,t,e){let{startAngle:i,pixelMargin:o,x:a,y:n,outerRadius:s,innerRadius:V}=t,l=o/s;r.beginPath(),r.arc(a,n,s,i-l,e+l),V>o?(l=o/V,r.arc(a,n,V,e+l,i-l,!0)):r.arc(a,n,o,e+f2,i-f2),r.closePath(),r.clip()}function am(r){return l9(r,["outerStart","outerEnd","innerStart","innerEnd"])}function Cm(r,t,e,i){let o=am(r.options.borderRadius),a=(e-t)/2,n=Math.min(a,i*t/2),s=V=>{let l=(e-Math.min(a,V))*i/2;return E2(V,0,Math.min(a,l))};return{outerStart:s(o.outerStart),outerEnd:s(o.outerEnd),innerStart:E2(o.innerStart,0,n),innerEnd:E2(o.innerEnd,0,n)}}function C4(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function Ht(r,t,e,i,o,a){let{x:n,y:s,startAngle:V,pixelMargin:l,innerRadius:M}=t,u=Math.max(t.outerRadius+i+e-l,0),f=M>0?M+i+e+l:0,g=0,b=o-V;if(i){let T1=M>0?M-i:0,t1=u>0?u-i:0,J1=(T1+t1)/2,V1=J1!==0?b*J1/(J1+i):b;g=(b-V1)/2}let k=Math.max(.001,b*u-e/e2)/u,O=(b-k)/2,T=V+O+g,$=o-O-g,{outerStart:F,outerEnd:Q,innerStart:U,innerEnd:e1}=Cm(t,f,u,$-T),J=u-F,X=u-Q,i1=T+F/J,d1=$-Q/X,_1=f+U,A1=f+e1,i2=T+U/_1,G1=$-e1/A1;if(r.beginPath(),a){let T1=(i1+d1)/2;if(r.arc(n,s,u,i1,T1),r.arc(n,s,u,T1,d1),Q>0){let j=C4(X,d1,n,s);r.arc(j.x,j.y,Q,d1,$+f2)}let t1=C4(A1,$,n,s);if(r.lineTo(t1.x,t1.y),e1>0){let j=C4(A1,G1,n,s);r.arc(j.x,j.y,e1,$+f2,G1+Math.PI)}let J1=($-e1/f+(T+U/f))/2;if(r.arc(n,s,f,$-e1/f,J1,!0),r.arc(n,s,f,J1,T+U/f,!0),U>0){let j=C4(_1,i2,n,s);r.arc(j.x,j.y,U,i2+Math.PI,T-f2)}let V1=C4(J,T,n,s);if(r.lineTo(V1.x,V1.y),F>0){let j=C4(J,i1,n,s);r.arc(j.x,j.y,F,T-f2,i1)}}else{r.moveTo(n,s);let T1=Math.cos(i1)*u+n,t1=Math.sin(i1)*u+s;r.lineTo(T1,t1);let J1=Math.cos(d1)*u+n,V1=Math.sin(d1)*u+s;r.lineTo(J1,V1)}r.closePath()}function nm(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:s}=t,V=t.endAngle;if(a){Ht(r,t,e,i,V,o);for(let l=0;l<a;++l)r.fill();isNaN(s)||(V=n+(s%p2||p2))}return Ht(r,t,e,i,V,o),r.fill(),V}function sm(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:s,options:V}=t,{borderWidth:l,borderJoinStyle:M,borderDash:u,borderDashOffset:f,borderRadius:g}=V,b=V.borderAlign==="inner";if(!l)return;r.setLineDash(u||[]),r.lineDashOffset=f,b?(r.lineWidth=l*2,r.lineJoin=M||"round"):(r.lineWidth=l,r.lineJoin=M||"bevel");let k=t.endAngle;if(a){Ht(r,t,e,i,k,o);for(let O=0;O<a;++O)r.stroke();isNaN(s)||(k=n+(s%p2||p2))}b&&om(r,t,k),V.selfJoin&&k-n>=e2&&g===0&&M!=="miter"&&im(r,t,k),a||(Ht(r,t,e,i,k,o),r.stroke())}var m3=class extends B5{constructor(e){super();D(this,"circumference");D(this,"endAngle");D(this,"fullCircles");D(this,"innerRadius");D(this,"outerRadius");D(this,"pixelMargin");D(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.getProps(["x","y"],o),{angle:n,distance:s}=Z8(a,{x:e,y:i}),{startAngle:V,endAngle:l,innerRadius:M,outerRadius:u,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),g=(this.options.spacing+this.options.borderWidth)/2,b=w1(f,l-V),k=n9(n,V,l)&&V!==l,O=b>=p2||k,T=t0(s,M+g,u+g);return O&&T}getCenterPoint(e){let{x:i,y:o,startAngle:a,endAngle:n,innerRadius:s,outerRadius:V}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:M}=this.options,u=(a+n)/2,f=(s+V+M+l)/2;return{x:i+Math.cos(u)*f,y:o+Math.sin(u)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:o}=this,a=(i.offset||0)/4,n=(i.spacing||0)/2,s=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>p2?Math.floor(o/p2):0,o===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let V=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(V)*a,Math.sin(V)*a);let l=1-Math.sin(Math.min(e2,o||0)),M=a*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,nm(e,this,M,n,s),sm(e,this,M,n,s),e.restore()}};D(m3,"id","arc"),D(m3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),D(m3,"defaultRoutes",{backgroundColor:"backgroundColor"}),D(m3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function zs(r,t,e=t){r.lineCap=w1(e.borderCapStyle,t.borderCapStyle),r.setLineDash(w1(e.borderDash,t.borderDash)),r.lineDashOffset=w1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=w1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=w1(e.borderWidth,t.borderWidth),r.strokeStyle=w1(e.borderColor,t.borderColor)}function Hm(r,t,e){r.lineTo(e.x,e.y)}function Vm(r){return r.stepped?Ar:r.tension||r.cubicInterpolationMode==="monotone"?vr:Hm}function Is(r,t,e={}){let i=r.length,{start:o=0,end:a=i-1}=e,{start:n,end:s}=t,V=Math.max(o,n),l=Math.min(a,s),M=o<n&&a<n||o>s&&a>s;return{count:i,start:V,loop:t.loop,ilen:l<V&&!M?i+l-V:l-V}}function Lm(r,t,e,i){let{points:o,options:a}=t,{count:n,start:s,loop:V,ilen:l}=Is(o,e,i),M=Vm(a),{move:u=!0,reverse:f}=i||{},g,b,k;for(g=0;g<=l;++g)b=o[(s+(f?l-g:g))%n],!b.skip&&(u?(r.moveTo(b.x,b.y),u=!1):M(r,k,b,f,a.stepped),k=b);return V&&(b=o[(s+(f?l:0))%n],M(r,k,b,f,a.stepped)),!!V}function lm(r,t,e,i){let o=t.points,{count:a,start:n,ilen:s}=Is(o,e,i),{move:V=!0,reverse:l}=i||{},M=0,u=0,f,g,b,k,O,T,$=Q=>(n+(l?s-Q:Q))%a,F=()=>{k!==O&&(r.lineTo(M,O),r.lineTo(M,k),r.lineTo(M,T))};for(V&&(g=o[$(0)],r.moveTo(g.x,g.y)),f=0;f<=s;++f){if(g=o[$(f)],g.skip)continue;let Q=g.x,U=g.y,e1=Q|0;e1===b?(U<k?k=U:U>O&&(O=U),M=(u*M+Q)/++u):(F(),r.lineTo(Q,U),b=e1,u=0,k=O=U),T=U}F()}function Jr(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?lm:Lm}function cm(r){return r.stepped?yr:r.tension||r.cubicInterpolationMode==="monotone"?Zr:B0}function Mm(r,t,e,i){let o=t._path;o||(o=t._path=new Path2D,t.path(o,e,i)&&o.closePath()),zs(r,t.options),r.stroke(o)}function dm(r,t,e,i){let{segments:o,options:a}=t,n=Jr(t);for(let s of o)zs(r,a,s.style),r.beginPath(),n(r,t,s,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var pm=typeof Path2D=="function";function um(r,t,e,i){pm&&!t.options.segment?Mm(r,t,e,i):dm(r,t,e,i)}var v5=class extends B5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let o=i.spanGaps?this._loop:this._fullLoop;wr(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=kr(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,o=t[e],a=this.points,n=Y8(this,{property:e,start:o,end:o});if(!n.length)return;let s=[],V=cm(i),l,M;for(l=0,M=n.length;l<M;++l){let{start:u,end:f}=n[l],g=a[u],b=a[f];if(g===b){s.push(g);continue}let k=Math.abs((o-g[e])/(b[e]-g[e])),O=V(g,b,k,i.stepped);O[e]=t[e],s.push(O)}return s.length===1?s[0]:s}pathSegment(t,e,i){return Jr(this)(t,this,e,i)}path(t,e,i){let o=this.segments,a=Jr(this),n=this._loop;e=e||0,i=i||this.points.length-e;for(let s of o)n&=a(t,this,s,{start:e,end:e+i-1});return!!n}draw(t,e,i,o){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),um(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};D(v5,"id","line"),D(v5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),D(v5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),D(v5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Hs(r,t,e,i){let o=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<o.radius+o.hitRadius}var r0=class extends B5{constructor(e){super();D(this,"parsed");D(this,"skip");D(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.options,{x:n,y:s}=this.getProps(["x","y"],o);return Math.pow(e-n,2)+Math.pow(i-s,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return Hs(this,e,"x",i)}inYRange(e,i){return Hs(this,e,"y",i)}getCenterPoint(e){let{x:i,y:o}=this.getProps(["x","y"],e);return{x:i,y:o}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let o=i&&e.borderWidth||0;return(i+o)*2}draw(e,i){let o=this.options;this.skip||o.radius<.1||!X5(this,i,this.size(o)/2)||(e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.fillStyle=o.backgroundColor,L9(e,o,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};D(r0,"id","point"),D(r0,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),D(r0,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Ns(r,t){let{x:e,y:i,base:o,width:a,height:n}=r.getProps(["x","y","base","width","height"],t),s,V,l,M,u;return r.horizontal?(u=n/2,s=Math.min(e,o),V=Math.max(e,o),l=i-u,M=i+u):(u=a/2,s=e-u,V=e+u,l=Math.min(i,o),M=Math.max(i,o)),{left:s,top:l,right:V,bottom:M}}function v3(r,t,e,i){return r?0:E2(t,e,i)}function hm(r,t,e){let i=r.options.borderWidth,o=r.borderSkipped,a=z8(i);return{t:v3(o.top,a.top,0,e),r:v3(o.right,a.right,0,t),b:v3(o.bottom,a.bottom,0,e),l:v3(o.left,a.left,0,t)}}function mm(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),o=r.options.borderRadius,a=N0(o),n=Math.min(t,e),s=r.borderSkipped,V=i||O1(o);return{topLeft:v3(!V||s.top||s.left,a.topLeft,0,n),topRight:v3(!V||s.top||s.right,a.topRight,0,n),bottomLeft:v3(!V||s.bottom||s.left,a.bottomLeft,0,n),bottomRight:v3(!V||s.bottom||s.right,a.bottomRight,0,n)}}function fm(r){let t=Ns(r),e=t.right-t.left,i=t.bottom-t.top,o=hm(r,e/2,i/2),a=mm(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+o.l,y:t.top+o.t,w:e-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function Dr(r,t,e,i){let o=t===null,a=e===null,s=r&&!(o&&a)&&Ns(r,i);return s&&(o||t0(t,s.left,s.right))&&(a||t0(e,s.top,s.bottom))}function Am(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function vm(r,t){r.rect(t.x,t.y,t.w,t.h)}function Br(r,t,e={}){let i=r.x!==e.x?-t:0,o=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,n=(r.y+r.h!==e.y+e.h?t:0)-o;return{x:r.x+i,y:r.y+o,w:r.w+a,h:r.h+n,radius:r.radius}}var i0=class extends B5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:n}=fm(this),s=Am(n.radius)?s7:vm;t.save(),(n.w!==a.w||n.h!==a.h)&&(t.beginPath(),s(t,Br(n,e,a)),t.clip(),s(t,Br(a,-e,n)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,Br(a,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Dr(this,t,e,i)}inXRange(t,e){return Dr(this,t,null,e)}inYRange(t,e){return Dr(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+o)/2:e,y:a?i:(i+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};D(i0,"id","bar"),D(i0,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),D(i0,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function xm(r,t,e){let i=r.segments,o=r.points,a=t.points,n=[];for(let s of i){let{start:V,end:l}=s;l=lt(V,l,o);let M=ti(e,o[V],o[l],s.loop);if(!t.segments){n.push({source:s,target:M,start:o[V],end:o[l]});continue}let u=Y8(t,M);for(let f of u){let g=ti(e,a[f.start],a[f.end],f.loop),b=q8(s,o,g);for(let k of b)n.push({source:k,target:f,start:{[e]:Vs(M,g,"start",Math.max)},end:{[e]:Vs(M,g,"end",Math.min)}})}}return n}function ti(r,t,e,i){if(i)return;let o=t[r],a=e[r];return r==="angle"&&(o=P2(o),a=P2(a)),{property:r,start:o,end:a}}function gm(r,t){let{x:e=null,y:i=null}=r||{},o=t.points,a=[];return t.segments.forEach(({start:n,end:s})=>{s=lt(n,s,o);let V=o[n],l=o[s];i!==null?(a.push({x:V.x,y:i}),a.push({x:l.x,y:i})):e!==null&&(a.push({x:e,y:V.y}),a.push({x:e,y:l.y}))}),a}function lt(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Vs(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function Ws(r,t){let e=[],i=!1;return a2(r)?(i=!0,e=r):e=gm(r,t),e.length?new v5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Ls(r){return r&&r.fill!==!1}function _m(r,t,e){let o=r[t].fill,a=[t],n;if(!e)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!l2(o))return o;if(n=r[o],!n)return!1;if(n.visible)return o;a.push(o),o=n.fill}return!1}function wm(r,t,e){let i=Zm(r);if(O1(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return l2(o)&&Math.floor(o)===o?bm(i[0],t,o,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function bm(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function Sm(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:O1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function ym(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:O1(r)?i=r.value:i=t.getBaseValue(),i}function Zm(r){let t=r.options,e=t.fill,i=w1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function km(r){let{scale:t,index:e,line:i}=r,o=[],a=i.segments,n=i.points,s=Om(t,e);s.push(Ws({x:null,y:t.bottom},i));for(let V=0;V<a.length;V++){let l=a[V];for(let M=l.start;M<=l.end;M++)Tm(o,n[M],s)}return new v5({points:o,options:{}})}function Om(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){let a=i[o];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function Tm(r,t,e){let i=[];for(let o=0;o<e.length;o++){let a=e[o],{first:n,last:s,point:V}=Pm(a,t,"x");if(!(!V||n&&s)){if(n)i.unshift(V);else if(r.push(V),!s)break}}r.push(...i)}function Pm(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let o=i[e],a=r.segments,n=r.points,s=!1,V=!1;for(let l=0;l<a.length;l++){let M=a[l],u=n[M.start][e],f=n[M.end][e];if(t0(o,u,f)){s=o===u,V=o===f;break}}return{first:s,last:V,point:i}}var Vt=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:o,y:a,radius:n}=this;return e=e||{start:0,end:p2},t.arc(o,a,n,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:o}=this,a=t.angle;return{x:e+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}};function Em(r){let{chart:t,fill:e,line:i}=r;if(l2(e))return $m(t,e);if(e==="stack")return km(r);if(e==="shape")return!0;let o=Fm(r);return o instanceof Vt?o:Ws(o,i)}function $m(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function Fm(r){return(r.scale||{}).getPointPositionForValue?Dm(r):Rm(r)}function Rm(r){let{scale:t={},fill:e}=r,i=Sm(e,t);if(l2(i)){let o=t.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function Dm(r){let{scale:t,fill:e}=r,i=t.options,o=t.getLabels().length,a=i.reverse?t.max:t.min,n=ym(e,t,a),s=[];if(i.grid.circular){let V=t.getPointPositionForValue(0,a);return new Vt({x:V.x,y:V.y,radius:t.getDistanceFromCenterForValue(n)})}for(let V=0;V<o;++V)s.push(t.getPointPositionForValue(V,n));return s}function zr(r,t,e){let i=Em(t),{chart:o,index:a,line:n,scale:s,axis:V}=t,l=n.options,M=l.fill,u=l.backgroundColor,{above:f=u,below:g=u}=M||{},b=o.getDatasetMeta(a),k=Q8(o,b);i&&n.points.length&&(o4(r,e),Bm(r,{line:n,target:i,above:f,below:g,area:e,scale:s,axis:V,clip:k}),a4(r))}function Bm(r,t){let{line:e,target:i,above:o,below:a,area:n,scale:s,clip:V}=t,l=e._loop?"angle":t.axis;r.save();let M=a;a!==o&&(l==="x"?(ls(r,i,n.top),Ir(r,{line:e,target:i,color:o,scale:s,property:l,clip:V}),r.restore(),r.save(),ls(r,i,n.bottom)):l==="y"&&(cs(r,i,n.left),Ir(r,{line:e,target:i,color:a,scale:s,property:l,clip:V}),r.restore(),r.save(),cs(r,i,n.right),M=o)),Ir(r,{line:e,target:i,color:M,scale:s,property:l,clip:V}),r.restore()}function ls(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let s of i){let{start:V,end:l}=s,M=o[V],u=o[lt(V,l,o)];a?(r.moveTo(M.x,M.y),a=!1):(r.lineTo(M.x,e),r.lineTo(M.x,M.y)),n=!!t.pathSegment(r,s,{move:n}),n?r.closePath():r.lineTo(u.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function cs(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let s of i){let{start:V,end:l}=s,M=o[V],u=o[lt(V,l,o)];a?(r.moveTo(M.x,M.y),a=!1):(r.lineTo(e,M.y),r.lineTo(M.x,M.y)),n=!!t.pathSegment(r,s,{move:n}),n?r.closePath():r.lineTo(e,u.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function Ir(r,t){let{line:e,target:i,property:o,color:a,scale:n,clip:s}=t,V=xm(e,i,o);for(let{source:l,target:M,start:u,end:f}of V){let{style:{backgroundColor:g=a}={}}=l,b=i!==!0;r.save(),r.fillStyle=g,zm(r,n,s,b&&ti(o,u,f)),r.beginPath();let k=!!e.pathSegment(r,l),O;if(b){k?r.closePath():Ms(r,i,f,o);let T=!!i.pathSegment(r,M,{move:k,reverse:!0});O=k&&T,O||Ms(r,i,u,o)}r.closePath(),r.fill(O?"evenodd":"nonzero"),r.restore()}}function zm(r,t,e,i){let o=t.chart.chartArea,{property:a,start:n,end:s}=i||{};if(a==="x"||a==="y"){let V,l,M,u;a==="x"?(V=n,l=o.top,M=s,u=o.bottom):(V=o.left,l=n,M=o.right,u=s),r.beginPath(),e&&(V=Math.max(V,e.left),M=Math.min(M,e.right),l=Math.max(l,e.top),u=Math.min(u,e.bottom)),r.rect(V,l,M-V,u-l),r.clip()}}function Ms(r,t,e,i){let o=t.interpolate(e,i);o&&r.lineTo(o.x,o.y)}var ri={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,o=[],a,n,s,V;for(n=0;n<i;++n)a=r.getDatasetMeta(n),s=a.dataset,V=null,s&&s.options&&s instanceof v5&&(V={visible:r.isDatasetVisible(n),index:n,fill:wm(s,n,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=V,o.push(V);for(n=0;n<i;++n)V=o[n],!(!V||V.fill===!1)&&(V.fill=_m(o,n,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",o=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let n=o.length-1;n>=0;--n){let s=o[n].$filler;s&&(s.line.updateControlPoints(a,s.axis),i&&s.fill&&zr(r.ctx,s,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){let a=i[o].$filler;Ls(a)&&zr(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!Ls(i)||e.drawTime!=="beforeDatasetDraw"||zr(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},ds=(r,t)=>{let{boxHeight:e=t,boxWidth:i=t}=r;return r.usePointStyle&&(e=Math.min(e,t),i=r.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},Im=(r,t)=>r!==null&&t!==null&&r.datasetIndex===t.datasetIndex&&r.index===t.index,Lt=class extends B5{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=Y1(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,o)=>t.sort(i,o,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}let i=t.labels,o=A2(i.font),a=o.size,n=this._computeTitleHeight(),{boxWidth:s,itemHeight:V}=ds(i,a),l,M;e.font=o.string,this.isHorizontal()?(l=this.maxWidth,M=this._fitRows(n,a,s,V)+10):(M=this.maxHeight,l=this._fitCols(n,o,s,V)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(M,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,o){let{ctx:a,maxWidth:n,options:{labels:{padding:s}}}=this,V=this.legendHitBoxes=[],l=this.lineWidths=[0],M=o+s,u=t;a.textAlign="left",a.textBaseline="middle";let f=-1,g=-M;return this.legendItems.forEach((b,k)=>{let O=i+e/2+a.measureText(b.text).width;(k===0||l[l.length-1]+O+2*s>n)&&(u+=M,l[l.length-(k>0?0:1)]=0,g+=M,f++),V[k]={left:0,top:g,row:f,width:O,height:o},l[l.length-1]+=O+s}),u}_fitCols(t,e,i,o){let{ctx:a,maxHeight:n,options:{labels:{padding:s}}}=this,V=this.legendHitBoxes=[],l=this.columnSizes=[],M=n-t,u=s,f=0,g=0,b=0,k=0;return this.legendItems.forEach((O,T)=>{let{itemWidth:$,itemHeight:F}=Nm(i,e,a,O,o);T>0&&g+F+2*s>M&&(u+=f+s,l.push({width:f,height:g}),b+=f+s,k++,f=g=0),V[T]={left:b,top:g,col:k,width:$,height:F},f=Math.max(f,$),g+=F+s}),u+=f,l.push({width:f,height:g}),u}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:o},rtl:a}}=this,n=h3(a,this.left,this.width);if(this.isHorizontal()){let s=0,V=o5(i,this.left+o,this.right-this.lineWidths[s]);for(let l of e)s!==l.row&&(s=l.row,V=o5(i,this.left+o,this.right-this.lineWidths[s])),l.top+=this.top+t+o,l.left=n.leftForLtr(n.x(V),l.width),V+=l.width+o}else{let s=0,V=o5(i,this.top+t+o,this.bottom-this.columnSizes[s].height);for(let l of e)l.col!==s&&(s=l.col,V=o5(i,this.top+t+o,this.bottom-this.columnSizes[s].height)),l.top=V,l.left+=this.left+o,l.left=n.leftForLtr(n.x(l.left),l.width),V+=l.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){let t=this.ctx;o4(t,this),this._draw(),a4(t)}}_draw(){let{options:t,columnSizes:e,lineWidths:i,ctx:o}=this,{align:a,labels:n}=t,s=V2.color,V=h3(t.rtl,this.left,this.width),l=A2(n.font),{padding:M}=n,u=l.size,f=u/2,g;this.drawTitle(),o.textAlign=V.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=l.string;let{boxWidth:b,boxHeight:k,itemHeight:O}=ds(n,u),T=function(e1,J,X){if(isNaN(b)||b<=0||isNaN(k)||k<0)return;o.save();let i1=w1(X.lineWidth,1);if(o.fillStyle=w1(X.fillStyle,s),o.lineCap=w1(X.lineCap,"butt"),o.lineDashOffset=w1(X.lineDashOffset,0),o.lineJoin=w1(X.lineJoin,"miter"),o.lineWidth=i1,o.strokeStyle=w1(X.strokeStyle,s),o.setLineDash(w1(X.lineDash,[])),n.usePointStyle){let d1={radius:k*Math.SQRT2/2,pointStyle:X.pointStyle,rotation:X.rotation,borderWidth:i1},_1=V.xPlus(e1,b/2),A1=J+f;B8(o,d1,_1,A1,n.pointStyleWidth&&b)}else{let d1=J+Math.max((u-k)/2,0),_1=V.leftForLtr(e1,b),A1=N0(X.borderRadius);o.beginPath(),Object.values(A1).some(i2=>i2!==0)?s7(o,{x:_1,y:d1,w:b,h:k,radius:A1}):o.rect(_1,d1,b,k),o.fill(),i1!==0&&o.stroke()}o.restore()},$=function(e1,J,X){u3(o,X.text,e1,J+O/2,l,{strikethrough:X.hidden,textAlign:V.textAlign(X.textAlign)})},F=this.isHorizontal(),Q=this._computeTitleHeight();F?g={x:o5(a,this.left+M,this.right-i[0]),y:this.top+M+Q,line:0}:g={x:this.left+M,y:o5(a,this.top+Q+M,this.bottom-e[0].height),line:0},j8(this.ctx,t.textDirection);let U=O+M;this.legendItems.forEach((e1,J)=>{o.strokeStyle=e1.fontColor,o.fillStyle=e1.fontColor;let X=o.measureText(e1.text).width,i1=V.textAlign(e1.textAlign||(e1.textAlign=n.textAlign)),d1=b+f+X,_1=g.x,A1=g.y;V.setWidth(this.width),F?J>0&&_1+d1+M>this.right&&(A1=g.y+=U,g.line++,_1=g.x=o5(a,this.left+M,this.right-i[g.line])):J>0&&A1+U>this.bottom&&(_1=g.x=_1+e[g.line].width+M,g.line++,A1=g.y=o5(a,this.top+Q+M,this.bottom-e[g.line].height));let i2=V.x(_1);if(T(i2,A1,e1),_1=ur(i1,_1+b+f,F?_1+d1:this.right,t.rtl),$(V.x(_1),A1,e1),F)g.x+=d1+M;else if(typeof e1.text!="string"){let G1=l.lineHeight;g.y+=Us(e1,G1)+M}else g.y+=U}),G8(this.ctx,t.textDirection)}drawTitle(){let t=this.options,e=t.title,i=A2(e.font),o=w2(e.padding);if(!e.display)return;let a=h3(t.rtl,this.left,this.width),n=this.ctx,s=e.position,V=i.size/2,l=o.top+V,M,u=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),M=this.top+l,u=o5(t.align,u,this.right-f);else{let b=this.columnSizes.reduce((k,O)=>Math.max(k,O.height),0);M=l+o5(t.align,this.top,this.bottom-b-t.labels.padding-this._computeTitleHeight())}let g=o5(s,u,u+f);n.textAlign=a.textAlign(E8(s)),n.textBaseline="middle",n.strokeStyle=e.color,n.fillStyle=e.color,n.font=i.string,u3(n,e.text,g,M,i)}_computeTitleHeight(){let t=this.options.title,e=A2(t.font),i=w2(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,o,a;if(t0(t,this.left,this.right)&&t0(e,this.top,this.bottom)){for(a=this.legendHitBoxes,i=0;i<a.length;++i)if(o=a[i],t0(t,o.left,o.left+o.width)&&t0(e,o.top,o.top+o.height))return this.legendItems[i]}return null}handleEvent(t){let e=this.options;if(!jm(t.type,e))return;let i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){let o=this._hoveredItem,a=Im(o,i);o&&!a&&Y1(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!a&&Y1(e.onHover,[t,i,this],this)}else i&&Y1(e.onClick,[t,i,this],this)}};function Nm(r,t,e,i,o){let a=Wm(i,r,t,e),n=Um(o,i,t.lineHeight);return{itemWidth:a,itemHeight:n}}function Wm(r,t,e,i){let o=r.text;return o&&typeof o!="string"&&(o=o.reduce((a,n)=>a.length>n.length?a:n)),t+e.size/2+i.measureText(o).width}function Um(r,t,e){let i=r;return typeof t.text!="string"&&(i=Us(t,e)),i}function Us(r,t){let e=r.text?r.text.length:0;return t*e}function jm(r,t){return!!((r==="mousemove"||r==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(r==="click"||r==="mouseup"))}var js={id:"legend",_element:Lt,start(r,t,e){let i=r.legend=new Lt({ctx:r.ctx,options:e,chart:r});A3.configure(r,i,e),A3.addBox(r,i)},stop(r){A3.removeBox(r,r.legend),delete r.legend},beforeUpdate(r,t,e){let i=r.legend;A3.configure(r,i,e),i.options=e},afterUpdate(r){let t=r.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(r,t){t.replay||r.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(r,t,e){let i=t.datasetIndex,o=e.chart;o.isDatasetVisible(i)?(o.hide(i),t.hidden=!0):(o.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:r=>r.chart.options.color,boxWidth:40,padding:10,generateLabels(r){let t=r.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:o,color:a,useBorderRadius:n,borderRadius:s}}=r.legend.options;return r._getSortedDatasetMetas().map(V=>{let l=V.controller.getStyle(e?0:void 0),M=w2(l.borderWidth);return{text:t[V.index].label,fillStyle:l.backgroundColor,fontColor:a,hidden:!V.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(M.width+M.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:o||l.textAlign,borderRadius:n&&(s||l.borderRadius),datasetIndex:V.index}},this)}},title:{color:r=>r.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:r=>!r.startsWith("on"),labels:{_scriptable:r=>!["generateLabels","filter","sort"].includes(r)}}};var v9={average(r){if(!r.length)return!1;let t,e,i=new Set,o=0,a=0;for(t=0,e=r.length;t<e;++t){let s=r[t].element;if(s&&s.hasValue()){let V=s.tooltipPosition();i.add(V.x),o+=V.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((s,V)=>s+V)/i.size,y:o/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,o=Number.POSITIVE_INFINITY,a,n,s;for(a=0,n=r.length;a<n;++a){let V=r[a].element;if(V&&V.hasValue()){let l=V.getCenterPoint(),M=o9(t,l);M<o&&(o=M,s=V)}}if(s){let V=s.tooltipPosition();e=V.x,i=V.y}return{x:e,y:i}}};function g0(r,t){return t&&(a2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function U0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function Gm(r,t){let{element:e,datasetIndex:i,index:o}=t,a=r.getDatasetMeta(i).controller,{label:n,value:s}=a.getLabelAndValue(o);return{chart:r,label:n,parsed:a.getParsed(o),raw:r.data.datasets[i].data[o],formattedValue:s,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:e}}function ps(r,t){let e=r.chart.ctx,{body:i,footer:o,title:a}=r,{boxWidth:n,boxHeight:s}=t,V=A2(t.bodyFont),l=A2(t.titleFont),M=A2(t.footerFont),u=a.length,f=o.length,g=i.length,b=w2(t.padding),k=b.height,O=0,T=i.reduce((Q,U)=>Q+U.before.length+U.lines.length+U.after.length,0);if(T+=r.beforeBody.length+r.afterBody.length,u&&(k+=u*l.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),T){let Q=t.displayColors?Math.max(s,V.lineHeight):V.lineHeight;k+=g*Q+(T-g)*V.lineHeight+(T-1)*t.bodySpacing}f&&(k+=t.footerMarginTop+f*M.lineHeight+(f-1)*t.footerSpacing);let $=0,F=function(Q){O=Math.max(O,e.measureText(Q).width+$)};return e.save(),e.font=l.string,U1(r.title,F),e.font=V.string,U1(r.beforeBody.concat(r.afterBody),F),$=t.displayColors?n+2+t.boxPadding:0,U1(i,Q=>{U1(Q.before,F),U1(Q.lines,F),U1(Q.after,F)}),$=0,e.font=M.string,U1(r.footer,F),e.restore(),O+=b.width,{width:O,height:k}}function qm(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function Ym(r,t,e,i){let{x:o,width:a}=i,n=e.caretSize+e.caretPadding;if(r==="left"&&o+a+n>t.width||r==="right"&&o-a-n<0)return!0}function Qm(r,t,e,i){let{x:o,width:a}=e,{width:n,chartArea:{left:s,right:V}}=r,l="center";return i==="center"?l=o<=(s+V)/2?"left":"right":o<=a/2?l="left":o>=n-a/2&&(l="right"),Ym(l,r,t,e)&&(l="center"),l}function us(r,t,e){let i=e.yAlign||t.yAlign||qm(r,e);return{xAlign:e.xAlign||t.xAlign||Qm(r,t,e,i),yAlign:i}}function Km(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function Xm(r,t,e){let{y:i,height:o}=r;return t==="top"?i+=e:t==="bottom"?i-=o+e:i-=o/2,i}function hs(r,t,e,i){let{caretSize:o,caretPadding:a,cornerRadius:n}=r,{xAlign:s,yAlign:V}=e,l=o+a,{topLeft:M,topRight:u,bottomLeft:f,bottomRight:g}=N0(n),b=Km(t,s),k=Xm(t,V,l);return V==="center"?s==="left"?b+=l:s==="right"&&(b-=l):s==="left"?b-=Math.max(M,f)+o:s==="right"&&(b+=Math.max(u,g)+o),{x:E2(b,0,i.width-t.width),y:E2(k,0,i.height-t.height)}}function tt(r,t,e){let i=w2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function ms(r){return g0([],U0(r))}function Jm(r,t,e){return x0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function fs(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var Gs={beforeTitle:J5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:J5,beforeBody:J5,beforeLabel:J5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return y1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:J5,afterBody:J5,beforeFooter:J5,footer:J5,afterFooter:J5};function L5(r,t,e,i){let o=r[t].call(e,i);return typeof o>"u"?Gs[t].call(e,i):o}var x9=class extends B5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,a=new Ct(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Jm(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,o=L5(i,"beforeTitle",this,t),a=L5(i,"title",this,t),n=L5(i,"afterTitle",this,t),s=[];return s=g0(s,U0(o)),s=g0(s,U0(a)),s=g0(s,U0(n)),s}getBeforeBody(t,e){return ms(L5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,o=[];return U1(t,a=>{let n={before:[],lines:[],after:[]},s=fs(i,a);g0(n.before,U0(L5(s,"beforeLabel",this,a))),g0(n.lines,L5(s,"label",this,a)),g0(n.after,U0(L5(s,"afterLabel",this,a))),o.push(n)}),o}getAfterBody(t,e){return ms(L5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,o=L5(i,"beforeFooter",this,t),a=L5(i,"footer",this,t),n=L5(i,"afterFooter",this,t),s=[];return s=g0(s,U0(o)),s=g0(s,U0(a)),s=g0(s,U0(n)),s}_createItems(t){let e=this._active,i=this.chart.data,o=[],a=[],n=[],s=[],V,l;for(V=0,l=e.length;V<l;++V)s.push(Gm(this.chart,e[V]));return t.filter&&(s=s.filter((M,u,f)=>t.filter(M,u,f,i))),t.itemSort&&(s=s.sort((M,u)=>t.itemSort(M,u,i))),U1(s,M=>{let u=fs(t.callbacks,M);o.push(L5(u,"labelColor",this,M)),a.push(L5(u,"labelPointStyle",this,M)),n.push(L5(u,"labelTextColor",this,M))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=n,this.dataPoints=s,s}update(t,e){let i=this.options.setContext(this.getContext()),o=this._active,a,n=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{let s=v9[i.position].call(this,o,this._eventPosition);n=this._createItems(i),this.title=this.getTitle(n,i),this.beforeBody=this.getBeforeBody(n,i),this.body=this.getBody(n,i),this.afterBody=this.getAfterBody(n,i),this.footer=this.getFooter(n,i);let V=this._size=ps(this,i),l=Object.assign({},s,V),M=us(this.chart,i,l),u=hs(i,l,M,this.chart);this.xAlign=M.xAlign,this.yAlign=M.yAlign,a={opacity:1,x:u.x,y:u.y,width:V.width,height:V.height,caretX:s.x,caretY:s.y}}this._tooltipItems=n,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){let a=this.getCaretPosition(t,i,o);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:o,yAlign:a}=this,{caretSize:n,cornerRadius:s}=i,{topLeft:V,topRight:l,bottomLeft:M,bottomRight:u}=N0(s),{x:f,y:g}=t,{width:b,height:k}=e,O,T,$,F,Q,U;return a==="center"?(Q=g+k/2,o==="left"?(O=f,T=O-n,F=Q+n,U=Q-n):(O=f+b,T=O+n,F=Q-n,U=Q+n),$=O):(o==="left"?T=f+Math.max(V,M)+n:o==="right"?T=f+b-Math.max(l,u)-n:T=this.caretX,a==="top"?(F=g,Q=F-n,O=T-n,$=T+n):(F=g+k,Q=F+n,O=T+n,$=T-n),U=F),{x1:O,x2:T,x3:$,y1:F,y2:Q,y3:U}}drawTitle(t,e,i){let o=this.title,a=o.length,n,s,V;if(a){let l=h3(i.rtl,this.x,this.width);for(t.x=tt(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",n=A2(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string,V=0;V<a;++V)e.fillText(o[V],l.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+s,V+1===a&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,o,a){let n=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:V,boxWidth:l}=a,M=A2(a.bodyFont),u=tt(this,"left",a),f=o.x(u),g=V<M.lineHeight?(M.lineHeight-V)/2:0,b=e.y+g;if(a.usePointStyle){let k={radius:Math.min(l,V)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},O=o.leftForLtr(f,l)+l/2,T=b+V/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,L9(t,k,O,T),t.strokeStyle=n.borderColor,t.fillStyle=n.backgroundColor,L9(t,k,O,T)}else{t.lineWidth=O1(n.borderWidth)?Math.max(...Object.values(n.borderWidth)):n.borderWidth||1,t.strokeStyle=n.borderColor,t.setLineDash(n.borderDash||[]),t.lineDashOffset=n.borderDashOffset||0;let k=o.leftForLtr(f,l),O=o.leftForLtr(o.xPlus(f,1),l-2),T=N0(n.borderRadius);Object.values(T).some($=>$!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,s7(t,{x:k,y:b,w:l,h:V,radius:T}),t.fill(),t.stroke(),t.fillStyle=n.backgroundColor,t.beginPath(),s7(t,{x:O,y:b+1,w:l-2,h:V-2,radius:T}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(k,b,l,V),t.strokeRect(k,b,l,V),t.fillStyle=n.backgroundColor,t.fillRect(O,b+1,l-2,V-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:o}=this,{bodySpacing:a,bodyAlign:n,displayColors:s,boxHeight:V,boxWidth:l,boxPadding:M}=i,u=A2(i.bodyFont),f=u.lineHeight,g=0,b=h3(i.rtl,this.x,this.width),k=function(X){e.fillText(X,b.x(t.x+g),t.y+f/2),t.y+=f+a},O=b.textAlign(n),T,$,F,Q,U,e1,J;for(e.textAlign=n,e.textBaseline="middle",e.font=u.string,t.x=tt(this,O,i),e.fillStyle=i.bodyColor,U1(this.beforeBody,k),g=s&&O!=="right"?n==="center"?l/2+M:l+2+M:0,Q=0,e1=o.length;Q<e1;++Q){for(T=o[Q],$=this.labelTextColors[Q],e.fillStyle=$,U1(T.before,k),F=T.lines,s&&F.length&&(this._drawColorBox(e,t,Q,b,i),f=Math.max(u.lineHeight,V)),U=0,J=F.length;U<J;++U)k(F[U]),f=u.lineHeight;U1(T.after,k)}g=0,f=u.lineHeight,U1(this.afterBody,k),t.y-=a}drawFooter(t,e,i){let o=this.footer,a=o.length,n,s;if(a){let V=h3(i.rtl,this.x,this.width);for(t.x=tt(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=V.textAlign(i.footerAlign),e.textBaseline="middle",n=A2(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,s=0;s<a;++s)e.fillText(o[s],V.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){let{xAlign:a,yAlign:n}=this,{x:s,y:V}=t,{width:l,height:M}=i,{topLeft:u,topRight:f,bottomLeft:g,bottomRight:b}=N0(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(s+u,V),n==="top"&&this.drawCaret(t,e,i,o),e.lineTo(s+l-f,V),e.quadraticCurveTo(s+l,V,s+l,V+f),n==="center"&&a==="right"&&this.drawCaret(t,e,i,o),e.lineTo(s+l,V+M-b),e.quadraticCurveTo(s+l,V+M,s+l-b,V+M),n==="bottom"&&this.drawCaret(t,e,i,o),e.lineTo(s+g,V+M),e.quadraticCurveTo(s,V+M,s,V+M-g),n==="center"&&a==="left"&&this.drawCaret(t,e,i,o),e.lineTo(s,V+u),e.quadraticCurveTo(s,V,s+u,V),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){let n=v9[t.position].call(this,this._active,this._eventPosition);if(!n)return;let s=this._size=ps(this,t),V=Object.assign({},n,this._size),l=us(e,t,V),M=hs(t,V,l,e);(o._to!==M.x||a._to!==M.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=s.width,this.height=s.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,M))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let n=w2(e.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,o,e),j8(t,e.textDirection),a.y+=n.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),G8(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,o=t.map(({datasetIndex:s,index:V})=>{let l=this.chart.getDatasetMeta(s);if(!l)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:l.data[V],index:V}}),a=!i4(i,o),n=this._positionChanged(o,e);(a||n)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let o=this.options,a=this._active||[],n=this._getActiveElements(t,a,e,i),s=this._positionChanged(n,t),V=e||!i4(n,a)||s;return V&&(this._active=n,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),V}_getActiveElements(t,e,i,o){let a=this.options;if(t.type==="mouseout")return[];if(!o)return e.filter(s=>this.chart.data.datasets[s.datasetIndex]&&this.chart.getDatasetMeta(s.datasetIndex).controller.getParsed(s.index)!==void 0);let n=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&n.reverse(),n}_positionChanged(t,e){let{caretX:i,caretY:o,options:a}=this,n=v9[a.position].call(this,t,e);return n!==!1&&(i!==n.x||o!==n.y)}};D(x9,"positioners",v9);var ii={id:"tooltip",_element:x9,positioners:v9,afterInit(r,t,e){e&&(r.tooltip=new x9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Gs},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var tf=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function ef(r,t,e,i){let o=r.indexOf(t);if(o===-1)return tf(r,t,e,i);let a=r.lastIndexOf(t);return o!==a?e:o}var rf=(r,t)=>r===null?null:E2(Math.round(r),0,t);function As(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var H4=class extends L7{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:o,label:a}of e)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(y1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:ef(i,t,w1(e,t),this._addedLabels),rf(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,o=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let n=t;n<=e;n++)o.push({value:n});return o}getLabelForValue(t){return As.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};D(H4,"id","category"),D(H4,"defaults",{ticks:{callback:As}});function of(r,t){let e=[],{bounds:o,step:a,min:n,max:s,precision:V,count:l,maxTicks:M,maxDigits:u,includeBounds:f}=r,g=a||1,b=M-1,{min:k,max:O}=t,T=!y1(n),$=!y1(s),F=!y1(l),Q=(O-k)/(u+1),U=b8((O-k)/b/g)*g,e1,J,X,i1;if(U<1e-14&&!T&&!$)return[{value:k},{value:O}];i1=Math.ceil(O/U)-Math.floor(k/U),i1>b&&(U=b8(i1*U/b/g)*g),y1(V)||(e1=Math.pow(10,V),U=Math.ceil(U*e1)/e1),o==="ticks"?(J=Math.floor(k/U)*U,X=Math.ceil(O/U)*U):(J=k,X=O),T&&$&&a&&Lr((s-n)/a,U/1e3)?(i1=Math.round(Math.min((s-n)/U,M)),U=(s-n)/i1,J=n,X=s):F?(J=T?n:J,X=$?s:X,i1=l-1,U=(X-J)/i1):(i1=(X-J)/U,C7(i1,Math.round(i1),U/1e3)?i1=Math.round(i1):i1=Math.ceil(i1));let d1=Math.max(y8(U),y8(J));e1=Math.pow(10,y1(V)?d1:V),J=Math.round(J*e1)/e1,X=Math.round(X*e1)/e1;let _1=0;for(T&&(f&&J!==n?(e.push({value:n}),J<n&&_1++,C7(Math.round((J+_1*U)*e1)/e1,n,vs(n,Q,r))&&_1++):J<n&&_1++);_1<i1;++_1){let A1=Math.round((J+_1*U)*e1)/e1;if($&&A1>s)break;e.push({value:A1})}return $&&f&&X!==s?e.length&&C7(e[e.length-1].value,s,vs(s,Q,r))?e[e.length-1].value=s:e.push({value:s}):(!$||X===s)&&e.push({value:X}),e}function vs(r,t,{horizontal:e,minRotation:i}){let o=v0(i),a=(e?Math.sin(o):Math.cos(o))||.001,n=.75*t*(""+r).length;return Math.min(t/a,n)}var L4=class extends L7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return y1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:o,max:a}=this,n=V=>o=e?o:V,s=V=>a=i?a:V;if(t){let V=D5(o),l=D5(a);V<0&&l<0?s(0):V>0&&l>0&&n(0)}if(o===a){let V=a===0?1:Math.abs(a*.05);s(a+V),t||n(o-V)}this.min=o,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),e=e||11),e&&(o=Math.min(e,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let o={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,n=of(o,a);return t.bounds==="ticks"&&S8(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return H9(t,this.chart.options.locale,this.options.ticks.format)}},x3=class extends L4{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=l2(t)?t:0,this.max=l2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=v0(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};D(x3,"id","linear"),D(x3,"defaults",{ticks:{callback:V9.formatters.numeric}});var _9=r=>Math.floor(A0(r)),V7=(r,t)=>Math.pow(10,_9(r)+t);function xs(r){return r/Math.pow(10,_9(r))===1}function gs(r,t,e){let i=Math.pow(10,e),o=Math.floor(r/i);return Math.ceil(t/i)-o}function af(r,t){let e=t-r,i=_9(e);for(;gs(r,t,i)>10;)i++;for(;gs(r,t,i)<10;)i--;return Math.min(i,_9(r))}function Cf(r,{min:t,max:e}){t=i5(r.min,t);let i=[],o=_9(t),a=af(t,e),n=a<0?Math.pow(10,Math.abs(a)):1,s=Math.pow(10,a),V=o>a?Math.pow(10,o):0,l=Math.round((t-V)*n)/n,M=Math.floor((t-V)/s/10)*s*10,u=Math.floor((l-M)/Math.pow(10,a)),f=i5(r.min,Math.round((V+M+u*Math.pow(10,a))*n)/n);for(;f<e;)i.push({value:f,major:xs(f),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(a++,u=2,n=a>=0?1:n),f=Math.round((V+M+u*Math.pow(10,a))*n)/n;let g=i5(r.max,f);return i.push({value:g,major:xs(g),significand:u}),i}var et=class extends L7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=L4.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return l2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=l2(t)?Math.max(0,t):null,this.max=l2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!l2(this._userMin)&&(this.min=t===V7(this.min,0)?V7(this.min,-1):V7(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,o=this.max,a=s=>i=t?i:s,n=s=>o=e?o:s;i===o&&(i<=0?(a(1),n(10)):(a(V7(i,-1)),n(V7(o,1)))),i<=0&&a(V7(o,-1)),o<=0&&n(V7(i,1)),this.min=i,this.max=o}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=Cf(e,this);return t.bounds==="ticks"&&S8(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":H9(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=A0(t),this._valueRange=A0(this.max)-A0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(A0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};D(et,"id","logarithmic"),D(et,"defaults",{ticks:{callback:V9.formatters.logarithmic,major:{enabled:!0}}});function ei(r){let t=r.ticks;if(t.display&&r.display){let e=w2(t.backdropPadding);return w1(t.font&&t.font.size,V2.font.size)+e.height}return 0}function nf(r,t,e){return e=a2(e)?e:[e],{w:fr(r,t.string,e),h:e.length*t.lineHeight}}function _s(r,t,e,i,o){return r===i||r===o?{start:t-e/2,end:t+e/2}:r<i||r>o?{start:t-e,end:t}:{start:t,end:t+e}}function sf(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],o=[],a=r._pointLabels.length,n=r.options.pointLabels,s=n.centerPointLabels?e2/a:0;for(let V=0;V<a;V++){let l=n.setContext(r.getPointLabelContext(V));o[V]=l.padding;let M=r.getPointPosition(V,r.drawingArea+o[V],s),u=A2(l.font),f=nf(r.ctx,u,r._pointLabels[V]);i[V]=f;let g=P2(r.getIndexAngle(V)+s),b=Math.round(C9(g)),k=_s(b,M.x,f.w,0,180),O=_s(b,M.y,f.h,90,270);Hf(e,t,g,k,O)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=lf(r,i,o)}function Hf(r,t,e,i,o){let a=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e)),s=0,V=0;i.start<t.l?(s=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-s)):i.end>t.r&&(s=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+s)),o.start<t.t?(V=(t.t-o.start)/n,r.t=Math.min(r.t,t.t-V)):o.end>t.b&&(V=(o.end-t.b)/n,r.b=Math.max(r.b,t.b+V))}function Vf(r,t,e){let i=r.drawingArea,{extra:o,additionalAngle:a,padding:n,size:s}=e,V=r.getPointPosition(t,i+o+n,a),l=Math.round(C9(P2(V.angle+f2))),M=df(V.y,s.h,l),u=cf(l),f=Mf(V.x,s.w,u);return{visible:!0,x:V.x,y:M,textAlign:u,left:f,top:M,right:f+s.w,bottom:M+s.h}}function Lf(r,t){if(!t)return!0;let{left:e,top:i,right:o,bottom:a}=r;return!(X5({x:e,y:i},t)||X5({x:e,y:a},t)||X5({x:o,y:i},t)||X5({x:o,y:a},t))}function lf(r,t,e){let i=[],o=r._pointLabels.length,a=r.options,{centerPointLabels:n,display:s}=a.pointLabels,V={extra:ei(a)/2,additionalAngle:n?e2/o:0},l;for(let M=0;M<o;M++){V.padding=e[M],V.size=t[M];let u=Vf(r,M,V);i.push(u),s==="auto"&&(u.visible=Lf(u,l),u.visible&&(l=u))}return i}function cf(r){return r===0||r===180?"center":r<180?"left":"right"}function Mf(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function df(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function pf(r,t,e){let{left:i,top:o,right:a,bottom:n}=e,{backdropColor:s}=t;if(!y1(s)){let V=N0(t.borderRadius),l=w2(t.backdropPadding);r.fillStyle=s;let M=i-l.left,u=o-l.top,f=a-i+l.width,g=n-o+l.height;Object.values(V).some(b=>b!==0)?(r.beginPath(),s7(r,{x:M,y:u,w:f,h:g,radius:V}),r.fill()):r.fillRect(M,u,f,g)}}function uf(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let o=t-1;o>=0;o--){let a=r._pointLabelItems[o];if(!a.visible)continue;let n=i.setContext(r.getPointLabelContext(o));pf(e,n,a);let s=A2(n.font),{x:V,y:l,textAlign:M}=a;u3(e,r._pointLabels[o],V,l+s.lineHeight/2,s,{color:n.color,textAlign:M,textBaseline:"middle"})}}function qs(r,t,e,i){let{ctx:o}=r;if(e)o.arc(r.xCenter,r.yCenter,t,0,p2);else{let a=r.getPointPosition(0,t);o.moveTo(a.x,a.y);for(let n=1;n<i;n++)a=r.getPointPosition(n,t),o.lineTo(a.x,a.y)}}function hf(r,t,e,i,o){let a=r.ctx,n=t.circular,{color:s,lineWidth:V}=t;!n&&!i||!s||!V||e<0||(a.save(),a.strokeStyle=s,a.lineWidth=V,a.setLineDash(o.dash||[]),a.lineDashOffset=o.dashOffset,a.beginPath(),qs(r,e,n,i),a.closePath(),a.stroke(),a.restore())}function mf(r,t,e){return x0(r,{label:e,index:t,type:"pointLabel"})}var n4=class extends L4{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=w2(ei(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=l2(t)&&!isNaN(t)?t:0,this.max=l2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ei(this.options))}generateTickLabels(t){L4.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let o=Y1(this.options.pointLabels.callback,[e,i],this);return o||o===0?o:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?sf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){let e=p2/(this._pointLabels.length||1),i=this.options.startAngle||0;return P2(t*e+v0(i))}getDistanceFromCenterForValue(t){if(y1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(y1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return mf(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let o=this.getIndexAngle(t)-f2+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:o,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),qs(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:o,border:a}=e,n=this._pointLabels.length,s,V,l;if(e.pointLabels.display&&uf(this,n),o.display&&this.ticks.forEach((M,u)=>{if(u!==0||u===0&&this.min<0){V=this.getDistanceFromCenterForValue(M.value);let f=this.getContext(u),g=o.setContext(f),b=a.setContext(f);hf(this,g,V,n,b)}}),i.display){for(t.save(),s=n-1;s>=0;s--){let M=i.setContext(this.getPointLabelContext(s)),{color:u,lineWidth:f}=M;!f||!u||(t.lineWidth=f,t.strokeStyle=u,t.setLineDash(M.borderDash),t.lineDashOffset=M.borderDashOffset,V=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(s,V),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let o=this.getIndexAngle(0),a,n;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,V)=>{if(V===0&&this.min>=0&&!e.reverse)return;let l=i.setContext(this.getContext(V)),M=A2(l.font);if(a=this.getDistanceFromCenterForValue(this.ticks[V].value),l.showLabelBackdrop){t.font=M.string,n=t.measureText(s.label).width,t.fillStyle=l.backdropColor;let u=w2(l.backdropPadding);t.fillRect(-n/2-u.left,-a-M.size/2-u.top,n+u.width,M.size+u.height)}u3(t,s.label,0,-a,M,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}};D(n4,"id","radialLinear"),D(n4,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:V9.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),D(n4,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),D(n4,"descriptors",{angleLines:{_fallback:"grid"}});var ct={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},l5=Object.keys(ct);function ws(r,t){return r-t}function bs(r,t){if(y1(t))return null;let e=r._adapter,{parser:i,round:o,isoWeekday:a}=r._parseOpts,n=t;return typeof i=="function"&&(n=i(n)),l2(n)||(n=typeof i=="string"?e.parse(n,i):e.parse(n)),n===null?null:(o&&(n=o==="week"&&(n7(a)||a===!0)?e.startOf(n,"isoWeek",a):e.startOf(n,o)),+n)}function Ss(r,t,e,i){let o=l5.length;for(let a=l5.indexOf(r);a<o-1;++a){let n=ct[l5[a]],s=n.steps?n.steps:Number.MAX_SAFE_INTEGER;if(n.common&&Math.ceil((e-t)/(s*n.size))<=i)return l5[a]}return l5[o-1]}function ff(r,t,e,i,o){for(let a=l5.length-1;a>=l5.indexOf(e);a--){let n=l5[a];if(ct[n].common&&r._adapter.diff(o,i,n)>=t-1)return n}return l5[e?l5.indexOf(e):0]}function Af(r){for(let t=l5.indexOf(r)+1,e=l5.length;t<e;++t)if(ct[l5[t]].common)return l5[t]}function ys(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:o}=s9(e,t),a=e[i]>=t?e[i]:e[o];r[a]=!0}}function vf(r,t,e,i){let o=r._adapter,a=+o.startOf(t[0].value,i),n=t[t.length-1].value,s,V;for(s=a;s<=n;s=+o.add(s,1,i))V=e[s],V>=0&&(t[V].major=!0);return t}function Zs(r,t,e){let i=[],o={},a=t.length,n,s;for(n=0;n<a;++n)s=t[n],o[s]=n,i.push({value:s,major:!1});return a===0||!e?i:vf(r,i,o,e)}var V4=class extends L7{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),o=this._adapter=new Ju._date(t.adapters.date);o.init(e),o7(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:bs(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:o,max:a,minDefined:n,maxDefined:s}=this.getUserBounds();function V(l){!n&&!isNaN(l.min)&&(o=Math.min(o,l.min)),!s&&!isNaN(l.max)&&(a=Math.max(a,l.max))}(!n||!s)&&(V(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&V(this.getMinMax(!1))),o=l2(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),a=l2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);let a=this.min,n=this.max,s=Mr(o,a,n);return this._unit=e.unit||(i.autoSkip?Ss(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):ff(this,s.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Af(this._unit),this.initOffsets(o),t.reverse&&s.reverse(),Zs(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,o,a;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?e=1-o:e=(this.getDecimalForValue(t[1])-o)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let n=t.length<3?.5:.25;e=E2(e,0,n),i=E2(i,0,n),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,o=this.options,a=o.time,n=a.unit||Ss(a.minUnit,e,i,this._getLabelCapacity(e)),s=w1(o.ticks.stepSize,1),V=n==="week"?a.isoWeekday:!1,l=n7(V)||V===!0,M={},u=e,f,g;if(l&&(u=+t.startOf(u,"isoWeek",V)),u=+t.startOf(u,l?"day":n),t.diff(i,e,n)>1e5*s)throw new Error(e+" and "+i+" are too far apart with stepSize of "+s+" "+n);let b=o.ticks.source==="data"&&this.getDataTimestamps();for(f=u,g=0;f<i;f=+t.add(f,s,n),g++)ys(M,f,b);return(f===i||o.bounds==="ticks"||g===1)&&ys(M,f,b),Object.keys(M).sort(ws).map(k=>+k)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let o=this.options.time.displayFormats,a=this._unit,n=e||o[a];return this._adapter.format(t,n)}_tickFormatFunction(t,e,i,o){let a=this.options,n=a.ticks.callback;if(n)return Y1(n,[t,e,i],this);let s=a.time.displayFormats,V=this._unit,l=this._majorUnit,M=V&&s[V],u=l&&s[l],f=i[e],g=l&&u&&f&&f.major;return this._adapter.format(t,o||(g?u:M))}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,o=v0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(o),n=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:i*a+s*n,h:i*n+s*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,Zs(this,[t],this._majorUnit),o),n=this._getLabelSize(a),s=Math.floor(this.isHorizontal()?this.width/n.w:this.height/n.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(e=0,i=o.length;e<i;++e)t=t.concat(o[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(bs(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return O8(t.sort(ws))}};D(V4,"id","time"),D(V4,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function rt(r,t,e){let i=0,o=r.length-1,a,n,s,V;e?(t>=r[i].pos&&t<=r[o].pos&&({lo:i,hi:o}=z0(r,"pos",t)),{pos:a,time:s}=r[i],{pos:n,time:V}=r[o]):(t>=r[i].time&&t<=r[o].time&&({lo:i,hi:o}=z0(r,"time",t)),{time:a,pos:s}=r[i],{time:n,pos:V}=r[o]);let l=n-a;return l?s+(V-s)*(t-a)/l:s}var it=class extends V4{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=rt(e,this.min),this._tableRange=rt(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,o=[],a=[],n,s,V,l,M;for(n=0,s=t.length;n<s;++n)l=t[n],l>=e&&l<=i&&o.push(l);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(n=0,s=o.length;n<s;++n)M=o[n+1],V=o[n-1],l=o[n],Math.round((M+V)/2)!==l&&a.push({time:l,pos:n/(s-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(rt(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return rt(this._table,i*this._tableRange+this._minPos,!0)}};D(it,"id","timeseries"),D(it,"defaults",V4.defaults);var Ys=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),S9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):y1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),o=i.length,a=r.font,n=0,s;for(r.font=e.string,s=0;s<o;++s)n=Math.max(r.measureText(i[s]).width,n);return r.font=a,{height:o*e.lineHeight,width:n}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],o,a,n,s;for(o=0,n=t.length;o<n;++o)s=t[o],a=e.indexOf(s),a===-1?i.push([s,1]):e.splice(a,1);for(o=0,n=e.length;o<n;++o)i.push([e[o],-1]);return i},rasterize:function(r){return Math.round(r*Ys)/Ys}};function oi(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var o=r.x-e,a=r.y-i,n=Math.sqrt(o*o+a*a);return{x:n?o/n:0,y:n?a/n:-1}}function xf(r,t,e,i,o){switch(o){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:o*=Math.PI/180,e=Math.cos(o),i=Math.sin(o);break}return{x:r,y:t,vx:e,vy:i}}var gf=0,Ks=1,Xs=2,Js=4,tH=8;function Mt(r,t,e){var i=gf;return r<e.left?i|=Ks:r>e.right&&(i|=Xs),t<e.top?i|=tH:t>e.bottom&&(i|=Js),i}function _f(r,t){for(var e=r.x0,i=r.y0,o=r.x1,a=r.y1,n=Mt(e,i,t),s=Mt(o,a,t),V,l,M;!(!(n|s)||n&s);)V=n||s,V&tH?(l=e+(o-e)*(t.top-i)/(a-i),M=t.top):V&Js?(l=e+(o-e)*(t.bottom-i)/(a-i),M=t.bottom):V&Xs?(M=i+(a-i)*(t.right-e)/(o-e),l=t.right):V&Ks&&(M=i+(a-i)*(t.left-e)/(o-e),l=t.left),V===n?(e=l,i=M,n=Mt(e,i,t)):(o=l,a=M,s=Mt(o,a,t));return{x0:e,x1:o,y0:i,y1:a}}function dt(r,t){var e=t.anchor,i=r,o,a;return t.clamp&&(i=_f(i,t.area)),e==="start"?(o=i.x0,a=i.y0):e==="end"?(o=i.x1,a=i.y1):(o=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),xf(o,a,r.vx,r.vy,t.align)}var pt={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),o=Math.sin(e),a=r.innerRadius,n=r.outerRadius;return dt({x0:r.x+i*a,y0:r.y+o*a,x1:r.x+i*n,y1:r.y+o*n,vx:i,vy:o},t)},point:function(r,t){var e=oi(r,t.origin),i=e.x*r.options.radius,o=e.y*r.options.radius;return dt({x0:r.x-i,y0:r.y-o,x1:r.x+i,y1:r.y+o,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=oi(r,t.origin),i=r.x,o=r.y,a=0,n=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(o=Math.min(r.y,r.base),n=Math.abs(r.base-r.y)),dt({x0:i,y0:o+n,x1:i+a,y1:o,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=oi(r,t.origin);return dt({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},q0=S9.rasterize;function wf(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,o=r.size.width,a=-o/2,n=-i/2;return{frame:{x:a-e.left-t,y:n-e.top-t,w:o+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:n,w:o,h:i}}}function bf(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function Sf(r){return r instanceof m3?pt.arc:r instanceof r0?pt.point:r instanceof i0?pt.bar:pt.fallback}function yf(r,t,e,i,o,a){var n=Math.PI/2;if(a){var s=Math.min(a,o/2,i/2),V=t+s,l=e+s,M=t+i-s,u=e+o-s;r.moveTo(t,l),V<M&&l<u?(r.arc(V,l,s,-Math.PI,-n),r.arc(M,l,s,-n,0),r.arc(M,u,s,0,n),r.arc(V,u,s,n,Math.PI)):V<M?(r.moveTo(V,e),r.arc(M,l,s,-n,n),r.arc(V,l,s,n,Math.PI+n)):l<u?(r.arc(V,l,s,-Math.PI,0),r.arc(V,u,s,0,Math.PI)):r.arc(V,l,s,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,o)}function Zf(r,t,e){var i=e.backgroundColor,o=e.borderColor,a=e.borderWidth;!i&&(!o||!a)||(r.beginPath(),yf(r,q0(t.x)+a/2,q0(t.y)+a/2,q0(t.w)-a,q0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),o&&a&&(r.strokeStyle=o,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function kf(r,t,e){var i=e.lineHeight,o=r.w,a=r.x,n=r.y+i/2;return t==="center"?a+=o/2:(t==="end"||t==="right")&&(a+=o),{h:i,w:o,x:a,y:n}}function Of(r,t,e){var i=r.shadowBlur,o=e.stroked,a=q0(e.x),n=q0(e.y),s=q0(e.w);o&&r.strokeText(t,a,n,s),e.filled&&(i&&o&&(r.shadowBlur=0),r.fillText(t,a,n,s),i&&o&&(r.shadowBlur=i))}function Tf(r,t,e,i){var o=i.textAlign,a=i.color,n=!!a,s=i.font,V=t.length,l=i.textStrokeColor,M=i.textStrokeWidth,u=l&&M,f;if(!(!V||!n&&!u))for(e=kf(e,o,s),r.font=s.string,r.textAlign=o,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,n&&(r.fillStyle=a),u&&(r.lineJoin="round",r.lineWidth=M,r.strokeStyle=l),f=0,V=t.length;f<V;++f)Of(r,t[f],{stroked:u,filled:n,w:e.w,x:e.x,y:e.y+e.h*f})}var eH=function(r,t,e,i){var o=this;o._config=r,o._index=i,o._model=null,o._rects=null,o._ctx=t,o._el=e};A5(eH.prototype,{_modelize:function(r,t,e,i){var o=this,a=o._index,n=A2(o2([e.font,{}],i,a)),s=o2([e.color,V2.color],i,a);return{align:o2([e.align,"center"],i,a),anchor:o2([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:o2([e.backgroundColor,null],i,a),borderColor:o2([e.borderColor,null],i,a),borderRadius:o2([e.borderRadius,0],i,a),borderWidth:o2([e.borderWidth,0],i,a),clamp:o2([e.clamp,!1],i,a),clip:o2([e.clip,!1],i,a),color:s,display:r,font:n,lines:t,offset:o2([e.offset,4],i,a),opacity:o2([e.opacity,1],i,a),origin:bf(o._el,i),padding:w2(o2([e.padding,4],i,a)),positioner:Sf(o._el),rotation:o2([e.rotation,0],i,a)*(Math.PI/180),size:S9.textSize(o._ctx,t,n),textAlign:o2([e.textAlign,"start"],i,a),textShadowBlur:o2([e.textShadowBlur,0],i,a),textShadowColor:o2([e.textShadowColor,s],i,a),textStrokeColor:o2([e.textStrokeColor,s],i,a),textStrokeWidth:o2([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,o=t._index,a=t._config,n,s,V,l=o2([a.display,!0],r,o);l&&(n=r.dataset.data[o],s=w1(Y1(a.formatter,[n,r]),n),V=y1(s)?[]:S9.toTextLines(s),V.length&&(e=t._modelize(l,V,a,r),i=wf(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,o=e._model,a=e._rects,n;this.visible()&&(i.save(),o.clip&&(n=o.area,i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()),i.globalAlpha=S9.bound(0,o.opacity,1),i.translate(q0(t.x),q0(t.y)),i.rotate(o.rotation),Zf(i,a.frame,o),Tf(i,o.lines,a.text,o),i.restore())}});var Pf=Number.MIN_SAFE_INTEGER||-9007199254740991,Ef=Number.MAX_SAFE_INTEGER||9007199254740991;function b9(r,t,e){var i=Math.cos(e),o=Math.sin(e),a=t.x,n=t.y;return{x:a+i*(r.x-a)-o*(r.y-n),y:n+o*(r.x-a)+i*(r.y-n)}}function Qs(r,t){var e=Ef,i=Pf,o=t.origin,a,n,s,V,l;for(a=0;a<r.length;++a)n=r[a],s=n.x-o.x,V=n.y-o.y,l=t.vx*s+t.vy*V,e=Math.min(e,l),i=Math.max(i,l);return{min:e,max:i}}function ut(r,t){var e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/o,vy:(t.y-r.y)/o,origin:r,ln:o}}var rH=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};A5(rH.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=b9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[ut(t[0],t[1]),ut(t[0],t[3])],o,a,n;for(this._rotation!==r._rotation&&i.push(ut(e[0],e[1]),ut(e[0],e[3])),o=0;o<i.length;++o)if(a=Qs(t,i[o]),n=Qs(e,i[o]),a.max<n.min||n.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[b9({x:t.x,y:t.y},i,e),b9({x:t.x+t.w,y:t.y},i,e),b9({x:t.x+t.w,y:t.y+t.h},i,e),b9({x:t.x,y:t.y+t.h},i,e)]}});function iH(r,t,e){var i=t.positioner(r,t),o=i.vx,a=i.vy;if(!o&&!a)return{x:i.x,y:i.y};var n=e.w,s=e.h,V=t.rotation,l=Math.abs(n/2*Math.cos(V))+Math.abs(s/2*Math.sin(V)),M=Math.abs(n/2*Math.sin(V))+Math.abs(s/2*Math.cos(V)),u=1/Math.max(Math.abs(o),Math.abs(a));return l*=o*u,M*=a*u,l+=t.offset*o,M+=t.offset*a,{x:i.x+l,y:i.y+M}}function $f(r,t){var e,i,o,a;for(e=r.length-1;e>=0;--e)for(o=r[e].$layout,i=e-1;i>=0&&o._visible;--i)a=r[i].$layout,a._visible&&o._box.intersects(a._box)&&t(o,a);return r}function Ff(r){var t,e,i,o,a,n,s;for(t=0,e=r.length;t<e;++t)i=r[t],o=i.$layout,o._visible&&(s=new Proxy(i._el,{get:(V,l)=>V.getProps([l],!0)[l]}),a=i.geometry(),n=iH(s,i.model(),a),o._box.update(n,a,i.rotation()));return $f(r,function(V,l){var M=V._hidable,u=l._hidable;M&&u||u?l._visible=!1:M&&(V._visible=!1)})}var y9={prepare:function(r){var t=[],e,i,o,a,n;for(e=0,o=r.length;e<o;++e)for(i=0,a=r[e].length;i<a;++i)n=r[e][i],t.push(n),n.$layout={_box:new rH,_hidable:!1,_visible:!0,_set:e,_idx:n._index};return t.sort(function(s,V){var l=s.$layout,M=V.$layout;return l._idx===M._idx?M._set-l._set:M._idx-l._idx}),this.update(t),t},update:function(r){var t=!1,e,i,o,a,n;for(e=0,i=r.length;e<i;++e)o=r[e],a=o.model(),n=o.$layout,n._hidable=a&&a.display==="auto",n._visible=o.visible(),t|=n._hidable;t&&Ff(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,o,a,n,s;for(e=0,i=t.length;e<i;++e)o=t[e],a=o.$layout,a._visible&&(n=o.geometry(),s=iH(o._el,o.model(),n),a._box.update(s,n,o.rotation()),o.draw(r,s))}},Rf=function(r){if(y1(r))return null;var t=r,e,i,o;if(O1(r))if(!y1(r.label))t=r.label;else if(!y1(r.r))t=r.r;else for(t="",e=Object.keys(r),o=0,i=e.length;o<i;++o)t+=(o!==0?", ":"")+e[o]+": "+r[e[o]];return""+t},Df={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Rf,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},c5="$datalabels",oH="$default";function Bf(r,t){var e=r.datalabels,i={},o=[],a,n;return e===!1?null:(e===!0&&(e={}),t=A5({},[t,e]),a=t.labels||{},n=Object.keys(a),delete t.labels,n.length?n.forEach(function(s){a[s]&&o.push(A5({},[t,a[s],{_key:s}]))}):o.push(t),i=o.reduce(function(s,V){return U1(V.listeners||{},function(l,M){s[M]=s[M]||{},s[M][V._key||oH]=l}),delete V.listeners,s},{}),{labels:o,listeners:i})}function ai(r,t,e,i){if(t){var o=e.$context,a=e.$groups,n;t[a._set]&&(n=t[a._set][a._key],n&&Y1(n,[o,i])===!0&&(r[c5]._dirty=!0,e.update(o)))}}function zf(r,t,e,i,o){var a,n;!e&&!i||(e?i?e!==i&&(n=a=!0):n=!0:a=!0,n&&ai(r,t.leave,e,o),a&&ai(r,t.enter,i,o))}function If(r,t){var e=r[c5],i=e._listeners,o,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=y9.lookup(e._labels,t);else if(t.type!=="mouseout")return;o=e._hovered,e._hovered=a,zf(r,i,o,a,t)}}function Nf(r,t){var e=r[c5],i=e._listeners.click,o=i&&y9.lookup(e._labels,t);o&&ai(r,i,o,t)}var aH={id:"datalabels",defaults:Df,beforeInit:function(r){r[c5]={_actives:[]}},beforeUpdate:function(r){var t=r[c5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,o=r[c5],a=o._datasets[i]=[],n=r.isDatasetVisible(i),s=r.data.datasets[i],V=Bf(s,e),l=t.meta.data||[],M=r.ctx,u,f,g,b,k,O,T,$;for(M.save(),u=0,g=l.length;u<g;++u)if(T=l[u],T[c5]=[],n&&T&&r.getDataVisibility(u)&&!T.skip)for(f=0,b=V.labels.length;f<b;++f)k=V.labels[f],O=k._key,$=new eH(k,M,T,u),$.$groups={_set:i,_key:O||oH},$.$context={active:!1,chart:r,dataIndex:u,dataset:s,datasetIndex:i},$.update($.$context),T[c5].push($),a.push($);M.restore(),A5(o._listeners,V.listeners,{merger:function(F,Q,U){Q[F]=Q[F]||{},Q[F][t.index]=U[F],o._listened=!0}})},afterUpdate:function(r){r[c5]._labels=y9.prepare(r[c5]._datasets)},afterDatasetsDraw:function(r){y9.draw(r,r[c5]._labels)},beforeEvent:function(r,t){if(r[c5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":If(r,e);break;case"click":Nf(r,e);break}}},afterEvent:function(r){var t=r[c5],e=t._actives,i=t._actives=r.getActiveElements(),o=S9.arrayDiff(e,i),a,n,s,V,l,M,u;for(a=0,n=o.length;a<n;++a)if(l=o[a],l[1])for(u=l[0].element[c5]||[],s=0,V=u.length;s<V;++s)M=u[s],M.$context.active=l[1]===1,M.update(M.$context);(t._dirty||o.length)&&(y9.update(t._labels),r.render()),delete t._dirty}};function ht(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var w0=class extends r1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=R0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return S;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,o=e.secondaryLabel!==void 0;return x`
      <div
        class="wsfc-forecast-slot-time ${e.className||""} ${o?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${e.icon?x`<ha-icon .icon=${e.icon}></ha-icon>`:e.label}</span
        >
        ${o?x`<span class="wsfc-forecast-slot-time-secondary"
              >${e.secondaryLabel}</span
            >`:S}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${i}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let e=l8(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let l=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:s3(this.hass,this.forecast.datetime),secondaryLabel:l}}if(this.forecastType==="daily")return e?{label:s3(this.hass,this.forecast.datetime),secondaryLabel:TC(this.hass,this.forecast.datetime)}:{label:s3(this.hass,this.forecast.datetime)};let o=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):RC(o),n=o,s;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:l,sunset:M}=this.suntimesInfo,u=f=>{let g=new Date(o);return g.setHours(f.getHours(),f.getMinutes()),g.getTime()>=o.getTime()&&g.getTime()<=a.getTime()};u(l)?(s="wsfc-sunrise",n=l):u(M)&&(s="wsfc-sunset",n=M)}if(s){let l=EC(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:l.suffix?`${l.time} ${l.suffix}`:l.time,className:s,icon:s==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:l.time,secondaryLabel:e?l.suffix:void 0,className:s}}let V=PC(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:V.hour}:{label:V.hour,secondaryLabel:e?V.suffix:void 0}}};w0.styles=s1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,K([C1({attribute:!1})],w0.prototype,"hass",2),K([C1({attribute:!1})],w0.prototype,"forecast",2),K([C1({attribute:!1})],w0.prototype,"forecastType",2),K([C1({attribute:!1})],w0.prototype,"isTwiceDailyEntity",2),K([C1({attribute:!1})],w0.prototype,"config",2),w0=K([L2("wsfc-forecast-header-items")],w0);var g3=class extends r1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?x`
      <div class="dropdown">
        ${this.options.map(e=>this._renderOption(e))}
      </div>
    `:S}_renderOption(e){let i=this.value===e.value;return x`
      <div
        class="menu-item ${i?"selected":""}"
        @click=${o=>this._onSelected(o,e.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${e.icon}></ha-icon>
          <span>${e.label}</span>
        </div>
      </div>
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};g3.styles=s1`
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
  `,K([C1({type:Boolean})],g3.prototype,"open",2),K([C1({attribute:!1})],g3.prototype,"options",2),K([C1({attribute:!1})],g3.prototype,"value",2),g3=K([L2("wsfc-chart-attribute-selector")],g3);$2.register(j0,i0,G0,v5,r0,x3,H4,aH);var CH=16384,Wf=6,mt=12,Uf=10,jf=10,Gf=130,a5=class extends r1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=WC;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new J7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let o=e0(i,this._chart),a=this._chart.scales.x;if(!a)return;let n=a.getValueForPixel(o.x);if(n==null)return;let s=a.getLabelForValue(n),V=this._chart.data.labels?.indexOf(s)??-1;if(V===-1)return;let l=this.safeForecast[V];if(!l)return;let M={selectedForecast:l,action:e.detail.action};H2(this,"action",M)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let o=e.has("forecastType")||e.has("itemWidth");this.updateChartData(o)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return S;let i=e.length,o=Math.max(i-1,0),a=this._getChartFontSize(),n=Gf+Math.max(0,a-mt),V={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${o} * var(--forecast-item-gap))`},l={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},M={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${n}px`};return x`
      <div
        class="${e7({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
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
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":K5[this._selectedAttribute]}
                  ></ha-icon>
                </ha-button>
              </div>`:S}
        <wsfc-chart-attribute-selector
          .open=${this._settingsOpen}
          .options=${this._getChartOptions()}
          .value=${this._selectedAttribute}
          @selected=${this._onAttributesSelected}
          @closed=${this._onSettingsClosed}
        ></wsfc-chart-attribute-selector>
      </div>
      <div
        class="${e7({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${r5(V)}
          .actionHandler=${h0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${r5(l)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${r5(M)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${e.map((u,f)=>x`
                <div class="wsfc-forecast-slot" data-index=${f}>
                  <wsfc-forecast-info
                    .hass=${this.hass}
                    .weatherEntity=${this.weatherEntity}
                    .forecast=${u}
                    .config=${this.config}
                    .hidePrecipitation=${!0}
                  ></wsfc-forecast-info>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new $2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),o=this._chart.config.type,a=i.type;if(o!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let o=parseFloat(i);if(!isNaN(o))return o}return mt}_getBarLabelOffset(){return-22-(this._getChartFontSize()-mt)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),o=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),n=a+jf,s=Uf+(a-mt),V={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:n,bottom:s,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:o,dash:[4,4]},grid:{offset:!0,display:!0,color:o,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,V);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,V);default:return this._getDefaultWeatherConfig(e,i,V)}}_getDefaultWeatherConfig(e,i,o){let{minTemp:a,maxTemp:n}=this.computeScaleLimits(e),s=i.getPropertyValue("--wfc-chart-temp-high-label-color"),V=i.getPropertyValue("--wfc-chart-temp-low-label-color"),l=i.getPropertyValue("--wfc-chart-precipitation-label-color"),M=i.getPropertyValue("--wfc-precipitation-bar-color"),u=K7(f5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),f=this.getTemperatureLineStyle(i,"temperature"),g=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(b=>b.datetime),datasets:[{data:e.map(b=>b.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:s,formatter:b=>b!=null?`${m0(this.hass,this.weatherEntity,b,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...f},{data:e.map(b=>b.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:V,formatter:b=>b!=null?`${m0(this.hass,this.weatherEntity,b,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...g},{type:"bar",data:e.map(b=>b.precipitation&&b.precipitation!==0?b.precipitation:null),backgroundColor:M,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:l,formatter:b=>YC(b,f5(this.hass,this.weatherEntity,"precipitation"))}}]},options:Y3({},o,{scales:{yTemp:{type:"linear",display:!1,min:a,max:n,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:u,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,o){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(n=>n.datetime),datasets:[{type:"bar",data:e.map(n=>n.uv_index!=null?Math.round(n.uv_index):0),backgroundColor:e.map(n=>i.getPropertyValue(ht(n.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:Y3({},o,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,o){let a=this._selectedAttribute,n=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",s=i.getPropertyValue(n)||i.getPropertyValue("--wfc-chart-default-line-color"),V=i.getPropertyValue("--wfc-chart-label-color"),l=f5(this.hass,this.weatherEntity,a),M=e.map(O=>O[a]??0),u=Math.max(...M),f=Math.min(...M),g=u-f||1,b=u+g*.2,k=f-g*.1;return{type:"line",data:{labels:e.map(O=>O.datetime),datasets:[{data:e.map(O=>O[a]??null),borderColor:s,pointBackgroundColor:s,fill:!1,datalabels:{anchor:"end",align:"top",color:V,formatter:(O,T)=>{if(O===null)return null;let $=`${O} ${l}`;return $.length>Wf&&T.dataIndex%2!==0?null:$}}}]},options:Y3({},o,{scales:{y:{display:!1,min:k,max:b}}})}}getTemperatureLineStyle(e,i){let o=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(o),n=s=>this.computeTemperatureLineColor(s,e,a);return{borderColor:n,pointBorderColor:n,pointBackgroundColor:n,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,o){if(!this.config.forecast?.use_color_thresholds)return o;let a=e.chart,{ctx:n,chartArea:s,scales:V}=a;if(!s||!V.yTemp)return o;if(this._temperatureColors===null){let $=i;this._temperatureColors={cold:$.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:$.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:$.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:$.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:$.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:$.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let l=V.yTemp,{min:M,max:u}=l;if(!Number.isFinite(M)||!Number.isFinite(u))return o;let f=n.createLinearGradient(0,s.bottom,0,s.top),g=$=>Math.max(0,Math.min(1,($-M)/(u-M))),k=f5(this.hass,this.weatherEntity,"temperature")==="\xB0F",O=$=>k?$*9/5+32:$,T=[{pos:g(O(-10)),color:this._temperatureColors.cold},{pos:g(O(0)),color:this._temperatureColors.freezing},{pos:g(O(8)),color:this._temperatureColors.chilly},{pos:g(O(18)),color:this._temperatureColors.mild},{pos:g(O(26)),color:this._temperatureColors.warm},{pos:g(O(34)),color:this._temperatureColors.hot}].sort(($,F)=>$.pos-F.pos);for(let $ of T)f.addColorStop($.pos,$.color);return f}computeScaleLimits(e){let i=e.map(F=>F.temperature),o=e.map(F=>F.templow??F.temperature),a=Math.min(...o),n=Math.max(...i),s=e.some(F=>F.templow!==void 0&&F.templow!==null),V=Math.max(n-a,10),l=.2,M=s?.35:.1,u=V*l,f=V*M,g=2,b=s?5:1,k=Math.max(u,g),O=Math.max(f,b),T=Math.floor(a-O),$=Math.ceil(n+k);return T>=$&&($=T+1),{minTemp:T,maxTemp:$}}renderHeaderItems(e){let i=[],o;return e.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let s=s3(this.hass,a.datetime);o!==s&&(o=s,i.push(x`<div class="wsfc-day-indicator-container">
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
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((CH+e)/(this.itemWidth+e));return this.forecast.length>i?(Q5.debug(`Truncating forecast to ${i} items to stay under ${CH}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=o=>o==="temperature_and_precipitation"?!0:e.some(a=>a[o]!=null);return d8.filter(i).map(o=>({label:o==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,o)||o,icon:o==="temperature_and_precipitation"?"mdi:water-thermometer":K5[o],value:o}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};K([C1({attribute:!1})],a5.prototype,"hass",2),K([C1({attribute:!1})],a5.prototype,"weatherEntity",2),K([C1({attribute:!1})],a5.prototype,"forecast",2),K([C1({attribute:!1})],a5.prototype,"config",2),K([C1({attribute:!1})],a5.prototype,"forecastType",2),K([C1({attribute:!1})],a5.prototype,"isTwiceDailyEntity",2),K([C1({attribute:!1})],a5.prototype,"itemWidth",2),K([C1({attribute:!1})],a5.prototype,"isScrollable",2),K([q4("canvas")],a5.prototype,"_canvas",2),K([e5()],a5.prototype,"_settingsOpen",2),K([e5()],a5.prototype,"_selectedAttribute",2),a5=K([L2("wsfc-forecast-chart")],a5);var _3=class extends r1{createRenderRoot(){return this}render(){if(!this.forecast)return S;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=GC(this.forecast);return x`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?x`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:S}
      </div>
      <div
        class=${e7({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};K([C1({attribute:!1})],_3.prototype,"hass",2),K([C1({attribute:!1})],_3.prototype,"forecast",2),K([C1({attribute:!1})],_3.prototype,"config",2),K([C1({attribute:!1})],_3.prototype,"maxPrecipitation",2),_3=K([L2("wsfc-forecast-details")],_3);var o0=class extends r1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return S;let e=this.forecast.wind_speed||0,i=p8(this.forecast),o=this.radius,a=4,n=10,s=o+n,V=o+n,l=2*(o+n),M=Math.round(e),u=this.computeLineColor(),f=i;f!==void 0&&this.type==="direction"&&(f=(f+180)%360);let g=Number.isFinite(f),b=V-o,k=o*.55,O=b-k,T=o*.45;return x`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${l} ${l}"
        role="img"
        aria-label="${g?`Wind speed: ${M}, bearing: ${f} degrees`:`Wind speed: ${M}`}"
      >
        <circle
          cx="${s}"
          cy="${V}"
          r="${o}"
          stroke="${u}"
          stroke-width="${a}"
          fill="none"
        />
        ${g?Z1` <g transform="rotate(${f} ${s} ${V})">
              <polygon
                points="${s-T},${b} ${s+T},${b} ${s},${O}"
                fill="${u}"
              />
            </g>`:S}
        <text x="${s}" y="${V}" dy="0.1em">${M}</text>
      </svg>
    `}computeLineColor(){let e=K4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};o0.styles=s1`
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
  `,K([C1({attribute:!1})],o0.prototype,"hass",2),K([C1({attribute:!1})],o0.prototype,"weatherEntity",2),K([C1({attribute:!1})],o0.prototype,"forecast",2),K([C1({attribute:!1})],o0.prototype,"size",2),K([C1({attribute:!1})],o0.prototype,"radius",2),K([C1({attribute:!1})],o0.prototype,"type",2),o0=K([L2("wsfc-wind-indicator")],o0);var w3=class extends r1{createRenderRoot(){return this}render(){return this.forecast?x`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??S}
      </div>
    `:S}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?x`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),o=ht(e);return x`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${r5({color:`var(${o})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return x`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;Q5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};K([C1({attribute:!1})],w3.prototype,"hass",2),K([C1({attribute:!1})],w3.prototype,"weatherEntity",2),K([C1({attribute:!1})],w3.prototype,"forecast",2),K([C1({attribute:!1})],w3.prototype,"config",2),w3=K([L2("wsfc-forecast-info")],w3);var a0=class extends r1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new J7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let o=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=o?.dataset.index?Number(o.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let o={selectedForecast:i,action:e.detail.action};H2(this,"action",o)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return S;let e=[],i=K7(f5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),o;return this.forecast.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let s=s3(this.hass,a.datetime);o!==s&&(o=s,e.push(x`<div class="wsfc-day-indicator-container">
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
        class="${e7({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${h0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};K([C1({attribute:!1})],a0.prototype,"hass",2),K([C1({attribute:!1})],a0.prototype,"weatherEntity",2),K([C1({attribute:!1})],a0.prototype,"forecast",2),K([C1({attribute:!1})],a0.prototype,"forecastType",2),K([C1({attribute:!1})],a0.prototype,"isTwiceDailyEntity",2),K([C1({attribute:!1})],a0.prototype,"config",2),K([C1({attribute:!1})],a0.prototype,"isScrollable",2),a0=K([L2("wsfc-forecast-simple")],a0);var b3=class extends r1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=nH.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return S;let e=this.getClasses(),i=this.getWeatherStateIcon();return x`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:o}=this.getCustomWeatherIconPath();return x` <img src="${i}" alt="${o}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?x`
        <div
          style="background-size: cover;${r5({"background-image":e})}"
        ></div>
      `:nH.has(this.state)?x`${Jf(this.state,this.isNightTime)}`:S}};K([C1({attribute:!1})],b3.prototype,"config",2),K([C1({attribute:!1})],b3.prototype,"classes",2),K([C1({attribute:!1})],b3.prototype,"isNightTime",2),K([C1({attribute:!1})],b3.prototype,"state",2),b3=K([L2("wsfc-weather-condition-icon-provider")],b3);var nH=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),qf=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),Yf=new Set(["hail","rainy","pouring"]),Qf=new Set(["windy","windy-variant"]),Kf=new Set(["snowy","snowy-rainy"]),Xf=new Set(["lightning","lightning-rainy"]),Jf=(r,t)=>Z1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${r==="sunny"&&t?Z1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:r==="sunny"?Z1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${r==="clear-night"?Z1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${r==="partlycloudy"&&t?Z1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:r==="partlycloudy"?Z1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${qf.has(r)?Z1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${Yf.has(r)?Z1`
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
  ${r==="pouring"?Z1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${Qf.has(r)?Z1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Kf.has(r)?Z1`
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
  ${Xf.has(r)?Z1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var S3=class extends r1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(tA(e))||$5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return S;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==S);return e.length===0?S:x`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return S;let{name:i,entity:o,label:a,icon:n}=e,s;if(o?s=u8(this.hass,this.weatherEntity,this.config,i,o):i&&(s=X7(this.hass,this.weatherEntity,this.config,i)),!s)return S;let V=o?this.hass.states[o]||this.weatherEntity:this.weatherEntity,l=o?this.hass.states[o]:void 0,M=l&&!i?x`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${l}
              .icon=${n}
            ></ha-state-icon>
          `:x`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${V}
              .attribute=${i}
              .icon=${KC(i,n,l)}
            ></ha-attribute-icon>
          `;return x`
      <div class="wsfc-current-attribute">
        ${M}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,l)}
        </span>
        <span class="wsfc-current-attribute-value">${s}</span>
      </div>
    `}resolveLabel(e,i,o){return i||(e&&G2.includes(e)?this.localize(e):o?.attributes?.friendly_name??(e?$5(e).replace(/_/g," "):""))}};K([C1({attribute:!1})],S3.prototype,"hass",2),K([C1({attribute:!1})],S3.prototype,"weatherEntity",2),K([C1({attribute:!1})],S3.prototype,"attributeConfigs",2),K([C1({attribute:!1})],S3.prototype,"config",2),S3=K([L2("wsfc-current-weather-attributes")],S3);var tA=n3(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var Ci={...K5,precipitation:"mdi:weather-rainy"},q2=class extends r1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,o=i?{...this.config,entity:i}:this.config;Y4(this,this.hass,o,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return S;let{state:e}=this.weatherEntity,i=this.getTemperature(),o=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),n=this.getConfiguredAttributes(),s=this.config.name||this.weatherEntity.attributes.friendly_name;return x`
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
            ${s?x`<span class="wsfc-name wsfc-secondary">${s}</span>`:S}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${i!==null?x`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${h0({stopPropagation:!0,hasHold:F0(this.config.hold_action),hasDoubleClick:F0(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${i}
                  </div>
                `:S}
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
                          `:S}
                    <span class="wsfc-current-secondary-value wsfc-secondary"
                      >${o.value}</span
                    >
                  </div>
                `:S}
          </div>
        </div>
        ${n.length>0?x`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${n}
            ></wsfc-current-weather-attributes>`:S}
      </div>
    `}isNightTime(){let e=R0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?G2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return m0(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?m0(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let V=typeof i=="string"?{name:i}:i,{name:l,entity:M,icon:u}=V;if(M){let f=u8(this.hass,this.weatherEntity,this.config,l,M);if(f!=null){let g=this.hass.states[M];return l?{icon:u??g?.attributes?.icon??Ci[l],value:f}:{stateObj:g,icon:u,value:f}}}else if(l&&l in this.weatherEntity.attributes){let g=Ci[l],b=X7(this.hass,this.weatherEntity,this.config,l);if(b!=null)return{icon:u??g,value:b}}}let o=this.getTemperatureExtrema();if(o)return{value:`${o.high} / ${o.low}`};let a,n;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,n="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,n="humidity";else return null;return{icon:Ci[n],value:this.hass.formatEntityAttributeValue(this.weatherEntity,n,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=G7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,o=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(G7(a.datetime)===e){let n=a.templow??a.temperature,s=a.temperature;n!=null&&n<i&&(i=n),s!=null&&s>o&&(o=s)}return i===1/0||o===-1/0?null:{high:m0(this.hass,this.weatherEntity,o,this.config.current?.temperature_precision),low:m0(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};K([C1({attribute:!1})],q2.prototype,"hass",2),K([C1({attribute:!1})],q2.prototype,"weatherEntity",2),K([C1({attribute:!1})],q2.prototype,"hourlyForecast",2),K([C1({attribute:!1})],q2.prototype,"dailyForecast",2),K([C1({attribute:!1})],q2.prototype,"config",2),q2=K([L2("wsfc-current-weather")],q2);var sH=`:host {
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
`;var HH="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var VH=s1`
  ${T0(sH)}

  :host {
    --moon-texture: url("${T0(HH)}");
  }
`;var Z9=10,rA=3,ft=14,iA=75,oA=75,aA=4,CA=3,LH=2,nA=[1.45,.7],lH=90,sA=50,HA=.15,C0=class extends r1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],o=Math.round(i?.contentRect.height||0);this._containerHeight!==o&&(this._containerHeight=o,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),o=this.hass?.themes?.darkMode;i?.themes?.darkMode!==o&&(this._isDark=o??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?x`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return S}})}
    `:S}computeParticles(){let e=[];return this.getActiveEffects().forEach(o=>{switch(o){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/Z9*iA),a=Math.max(5,o),n=115/a;for(let s=0;s<a;s++){let V=-15+s*n+W1(0,n*.5),l=Math.random(),M=l*5+2,u=4.5/(l+.5)+W1(0,.8),f=W1(0,5,!0).toFixed(1),g=l*.7+.5,b=l<.3?1.5-l*3:l>.9?.5:0,k=M*.9,O=(10+l*25).toFixed(0),T=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${V.toFixed(1)}%`,delay:f,duration:u.toFixed(1),size:M.toFixed(0),opacity:g.toFixed(1),blur:b.toFixed(1),shadowSpread:k.toFixed(1),driftAmplitude:O,driftFrequency:T})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/Z9*oA),a=Math.max(10,o),n=100/a;for(let s=0;s<a;s++){let V=s*n+W1(0,n*.8),l=W1(.2,.5,!0),M=W1(.4,.7,!0),u=W1(.85,1,!0),f=this._containerHeight*u;i.push({type:"rain",x:`${V.toFixed(1)}%`,delay:l.toFixed(2),duration:M.toFixed(2),landingPosY:f.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let n=0;n<30;n++){let s=n%6,V=Math.floor(n/6),l=100/6,M=30/5,u=W1(s*l+l*.15,(s+1)*l-l*.15),f=W1(V*M+M*.15,(V+1)*M-M*.15),g=W1(1,3),b=W1(.3,1,!0),k=W1(0,5,!0);e.push({type:"star",x:`${u.toFixed(0)}`,y:`${f.toFixed(0)}`,size:`${g}`,opacity:b.toFixed(2),delay:k.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let o=new Set,a=l=>i===!0?!0:Array.isArray(i)?i.includes(l):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&o.add("rain"),e.includes("snowy")&&a("snow")&&o.add("snow"),e.includes("lightning")&&a("lightning")&&o.add("lightning");let n=e==="sunny"||e==="clear-night",s=e==="cloudy",V=e==="partlycloudy";return(n||V||s)&&a("sky")&&o.add("sky"),(n||V)&&(this.isNightTime()?a("moon")&&o.add("moon"):a("sun")&&o.add("sun")),(s||V)&&a("cloud")&&o.add("cloud"),Array.from(o)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?R0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return x`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return x`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>x`<div
                class="sun-ray"
                style="${r5({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${W1(0,360)}`,height:`${W1(100,200)}`,width:`${W1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),o=e?aA:CA,a=100/o,n=[];for(let s=0;s<o;s++){let V=s%LH,l=V===0,M=s*a+W1(0,a*.5)-a*.25,u=e?l?W1(140,200):W1(215,285):l?W1(110,165):W1(180,240),f=u*W1(.38,.5,!0),g=e?l?W1(-26,-12):W1(-16,-2):l?W1(-10,4):W1(-4,12),b=e?l?W1(.36,.5,!0):W1(.5,.64,!0):l?W1(.68,.8,!0):W1(.82,.92,!0);i&&(b*=.7),n.push({type:"cloud",variant:e?"grey":"white",night:i,layer:V,shape:W1(1,5),flip:W1(0,1)===1,x:M.toFixed(1),y:g.toFixed(0),width:u.toFixed(0),height:f.toFixed(0),opacity:b.toFixed(2)})}return n}computeCloudDrift(){let e=this.currentForecast,i=e&&K4(this.hass,this.weatherEntity,e)||0,o=Math.min(i,ft)/ft,a=e?p8(e):void 0,n=a!==void 0?-Math.sin(a*Math.PI/180):0,s=Math.max(HA,o*Math.abs(n));return{duration:lH-s*(lH-sA),driftRight:n>=0}}renderCloudFilter(){return x`
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
    `}renderClouds(){let e=this._particles.filter(n=>n.type==="cloud");if(!e.length)return S;let{duration:i,driftRight:o}=this.computeCloudDrift(),a=n=>{let s=["cloud",`cloud-shape-${n.shape}`,n.variant==="grey"?"grey":"",n.night?"night":""].filter(Boolean).join(" ");return x`<div
        class="${s}"
        style="${r5({left:`${n.x}%`,top:`${n.y}px`,width:`${n.width}px`,height:`${n.height}px`,opacity:n.opacity,transform:n.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return x`
      ${this.renderCloudFilter()}
      ${Array.from({length:LH},(n,s)=>{let V=e.filter(M=>M.layer===s);if(!V.length)return S;let l=Math.round(i*(nA[s]??1)/5)*5;return x`<div
          class="cloud-track ${o?"drift-right":""}"
          style="${r5({"--cloud-drift-duration":`${l}s`})}"
        >
          <div class="cloud-set">${V.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${V.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>x`
        <div
          class="snowflake-path"
          style="${r5({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>x`
        <div
          class="raindrop-path"
          style="${r5({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return x` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:$C(this.hass,new Date);return x`
      ${this._particles.filter(i=>i.type==="star").map(i=>x`
          <div
            class="star"
            style="${r5({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?ze(e.fraction,e.litRight):ze(1,!0);return x`
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
        <path d=${FC(e.fraction,e.litRight)}></path>
      </svg>
    `:S}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=f5(this.hass,this.weatherEntity,"precipitation"),o=K7(i,"hourly");if(o>0){let a=e/o*Z9;return Math.min(Z9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?Z9:rA}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let o=K4(this.hass,this.weatherEntity,i)||0,a=e?15:35,n=Math.min(o,ft)/ft,s=i.wind_bearing*Math.PI/180,V=Math.sin(s),M=Math.pow(n,e?.8:.5);return V*M*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};C0.styles=VH,K([C1({attribute:!1})],C0.prototype,"hass",2),K([C1({attribute:!1})],C0.prototype,"weatherEntity",2),K([C1({attribute:!1})],C0.prototype,"currentForecast",2),K([C1({attribute:!1})],C0.prototype,"config",2),K([e5()],C0.prototype,"_isDark",2),K([e5()],C0.prototype,"_containerHeight",2),C0=K([L2("wsfc-animation-provider")],C0);var cH={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},LA=1e3,u2=class extends r1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):Y4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{Y4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),o=i.find(a=>a==="weather.home")||i[0]||"";return{...cH,entity:o}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>t7)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>t7))throw new Error(`temperature_precision must be 0 or greater and at most ${t7}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=Y3({},cH,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:o}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:o}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,o=this.config?.forecast?.mode==="chart",a=1,n=1;return e&&(a+=2,n+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(o?(a+=3,n+=3):(a+=2,n+=2)),{rows:a,minRows:n,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return SC(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return S;let e=this.config.entity,i=this.hass.states[e];if(!i)return x`<hui-warning>
        ${OC(this.hass,e)}
      </hui-warning>`;let o=F5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",n=this.getCurrentForecast();return x`
      <ha-card>
        ${this.config.show_condition_effects?x`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${i}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData?.[0]}
            ></wsfc-animation-provider>`:S}
        <div class="wsfc-container">
          ${this.config.show_current?x`<div
                class="wsfc-current-weather-container"
                .actionHandler=${h0({hasHold:F0(this.config.hold_action),hasDoubleClick:F0(this.config.double_tap_action)})}
                @action=${this.onCardAction}
              >
                <wsfc-current-weather
                  .hass=${this.hass}
                  .weatherEntity=${i}
                  .config=${this.config}
                  .hourlyForecast=${this._hourlyForecastData}
                  .dailyForecast=${this._dailyForecastData}
                ></wsfc-current-weather>
              </div>`:S}
          ${this.config.show_forecast===!1?S:x`<div class="wsfc-forecast-container">
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
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,o=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:o}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let o=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,n=Xe(i,this._hourlyForecastEvent,"hourly"),s=Xe(i,this._dailyForecastEvent,F5(e));if(!n&&!s)return;this._dailyForecastData=s?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let V=this.config?.forecast?.hourly_group_size||0;V>1&&n?.forecast?this._hourlyForecastData=QC(n.forecast,V):this._hourlyForecastData=n?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let l=this.getCurrentForecast();if(!l||l.length===0){let f=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,g=F5(e),b=g!==void 0,k=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(f||this._currentForecastType==="hourly"&&!Q4(e,"hourly")||k&&!b)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(Q5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=g||"daily"):k&&this._hourlyForecastData&&(Q5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let M=this.getCurrentForecast().length,u=(this._currentForecastType==="hourly"?o:a)??0;M!==u&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",o=i,a=o?this._hourlyForecastData:this._dailyForecastData,n=this.hass?.states[this.config.entity],s=F5(n)||"daily";if(!a||a.length===0){Q5.debug(`Cannot toggle to ${o?"hourly":s} forecast - no data available`);return}this._currentForecastType=i?"hourly":s,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(o)this.scrollToForecastItem(e);else{let V=this._dailyForecastData?.[0];V&&this.scrollToForecastItem(V,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let o=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!o)return;let a=G7(e.datetime),n=this.getCurrentForecast(),s=n.findIndex(u=>G7(u.datetime)===a),V=s!==-1?s:n.length-1,l=this._currentItemWidth||0,M=V*l;o.scrollTo({left:M,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},LA)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let o=await e;if(!o)return;await o()}catch(o){if(Ye(o))return;Q5.warn(`Error unsubscribing from ${i} forecast:`,o)}}createForecastSubscription(e,i,o){return Promise.resolve(jC(this.hass,this.config.entity,e,i)).catch(a=>{if(IC(a)){setTimeout(o,2e3);return}Ye(a)||Q5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!qC(this.hass.states[this.config.entity])){Q5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let o=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",n=a!=="hourly",s=a!=="daily",V=F5(o);V==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!n&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!s&&this._currentForecastType==="hourly"&&(this._currentForecastType=V||"daily"),V&&n&&(this._dailySubscription=this.createForecastSubscription(V,l=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=l,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),s&&Q4(o,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",l=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=l,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let o=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/o),n=i.length,s=n*a,V=e-s,l=V>0?V/(n-1):0;this._currentItemWidth=a+l,this._isScrollable=i.length>o,this._haCard.style.setProperty("--forecast-item-gap",`${l}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:Object.values(Ke).some(s=>a.attributes[s]!==n.attributes[s])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),o=this.hass;return i?.connected===!1&&o?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:a.attributes.supported_features!==n.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!o)return!1;let a=i?.states[this.config.entity],n=o.states[this.config.entity];return!!a!=!!n}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),o=this.hass;return!i||!o?!1:DC(this.config).some(a=>i.states[a]!==o.states[a])}};u2.styles=_C,K([C1({attribute:!1})],u2.prototype,"hass",2),K([e5()],u2.prototype,"config",2),K([e5()],u2.prototype,"_dailyForecastEvent",2),K([e5()],u2.prototype,"_hourlyForecastEvent",2),K([e5()],u2.prototype,"_currentItemWidth",2),K([e5()],u2.prototype,"_currentForecastType",2),K([e5()],u2.prototype,"_isScrollable",2),K([q4("ha-card")],u2.prototype,"_haCard",2),K([q4(".wsfc-forecast-container")],u2.prototype,"_forecastContainer",2);var b0=O7(j7(),1);var MH="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var dH="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var lA={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},n0=class extends r1{constructor(){super(...arguments);this._schema=n3((e,i,o)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(o),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:M8.map(i=>({value:i,label:$5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:G2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||$5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:G2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||$5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:d8.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||$5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],o=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),o.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),o.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:o},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(o=>{let a=lA[o];return[{name:`current.attribute_entity_${o}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${o}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${o}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:t7}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:t7}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=l7(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=l7(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let o=l7(this._config.current?.show_attributes);o[e]=i.detail.value,this._commitCustomAttributes(o)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let o=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||$5(o).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let o=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||$5(o).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let o=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${o}`)||$5(o).replace(/_/g," "),n=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${n}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let o=this.hass.states[this._config.entity];o&&(i=this.hass.formatEntityAttributeName(o,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return S;let e=At(this._config),i=this._getSelectedAttributes(e),o=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return x`
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
    `}_renderCustomAttributes(){let e=l7(this._config.current?.show_attributes);return x`
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
            <ha-svg-icon slot="start" .path=${dH}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,i){return x`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${cA}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${o=>this._customAttributeChanged(i,o)}
        ></ha-form>
        <ha-icon-button
          .path=${MH}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:dA(this._config.current?.show_attributes,e)}};H2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let o=pA(i);if(delete o.temperature_entity,o?.forecast?.extra_attribute==="none"&&delete o.forecast.extra_attribute,Array.isArray(o.show_condition_effects)&&M8.every(n=>o.show_condition_effects.includes(n))&&(o.show_condition_effects=!0),o?.current){let a={},n={},s={};for(let V of Object.keys(o.current))if(V.startsWith("attribute_entity_")){let l=V.replace("attribute_entity_",""),M=o.current[V];M&&(a[l]=M),delete o.current[V]}else if(V.startsWith("attribute_label_")){let l=V.replace("attribute_label_",""),M=o.current[V];M&&(n[l]=M),delete o.current[V]}else if(V.startsWith("attribute_icon_")){let l=V.replace("attribute_icon_",""),M=o.current[V];M&&(s[l]=M),delete o.current[V]}if(Array.isArray(o.current.show_attributes)){let V=l7(this._config?.current?.show_attributes);o.current.show_attributes=pH(o.current.show_attributes,{entity:a,label:n,icon:s},V)}}H2(this,"config-changed",{config:o})}};n0.styles=s1`
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
  `,K([C1({attribute:!1})],n0.prototype,"hass",2),K([e5()],n0.prototype,"_config",2),n0=K([L2("wsfc-flex-core-editor")],n0);var c7=r=>typeof r=="string"&&G2.includes(r),l7=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")c7(e)||t.push({name:e});else if(typeof e=="object"){let i=e;c7(i.name)||t.push(i)}}return t},pH=(r,t,e)=>{let i=G2.every(n=>r.includes(n)),o=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!o&&i?!0:[...r.map(n=>{let s=t.entity[n],V=t.label[n],l=t.icon[n];return s||V||l?{name:n,...s?{entity:s}:{},...V?{label:V}:{},...l?{icon:l}:{}}:n}),...e]},cA=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],MA=r=>{if(r===!0)return[...G2];if(typeof r=="string")return c7(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")c7(e)&&t.push(e);else if(typeof e=="object"){let i=e;c7(i.name)&&t.push(i)}}return t},dA=(r,t)=>{let e=MA(r),i=[],o={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(o.entity[a.name]=a.entity),a.label&&(o.label[a.name]=a.label),a.icon&&(o.icon[a.name]=a.icon));return pH(i,o,t)},pA=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[o,a]=i;!o||!a||((!t[o]||typeof t[o]!="object")&&(t[o]={}),t[o][a]=r[e],delete t[e])}return t},At=r=>{let t=uA(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...M8]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...G2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let o of e)if(typeof o=="string")c7(o)&&i.push(o);else if(typeof o=="object"&&o!==null){let a=o;c7(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},uA=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast.${o}`]=i[o];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`current.${o}`]=i[o];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast_action.${o}`]=i[o];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(d=>d.id),i=Object.fromEntries(t.map(d=>[d.id,d.label])),o={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],n=(d,m,p)=>Math.min(p,Math.max(m,d)),s=d=>typeof d=="number"&&isFinite(d),V={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function l(d){return V[d]||"mdi:weather-cloudy"}let M=["temps","icons","extra"],u={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function f(d){let m=Array.isArray(d.forecast_row_order)?d.forecast_row_order.filter(p=>M.includes(p)):null;(!m||!m.length)&&(m=(d.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let p of M)m.includes(p)||m.push(p);return m}let g={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},b=Object.keys(g);function k(d){let m=d&&d.forecast_extra,p;Array.isArray(m)?p=m:typeof m=="string"&&m&&m!=="none"?p=[m]:p=[];let v=new Set(p.filter(_=>g[_]));return b.filter(_=>v.has(_))}let O=["temps","icons",...b],T=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(b.map(d=>[d,g[d].label]))),$=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function F(d){d=d||{};let m={},p;if(Array.isArray(d.forecast_metric_order)&&d.forecast_metric_order.length){p=d.forecast_metric_order.filter(_=>O.includes(_));let v=d.forecast_metric_pos||{};for(let _ of O)m[_]=v[_]||"hidden"}else{m.temps=d.forecast_temps||"hidden",m.icons=d.forecast_icons||"hidden";let v=k(d),_=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let y of b)m[y]=v.includes(y)?_:"hidden";let Z=f(d);p=[];for(let y of Z)y==="extra"?p.push(...b):p.push(y)}for(let v of O)p.includes(v)||p.push(v);for(let v of O)m[v]||(m[v]="hidden");return p.map(v=>({key:v,pos:m[v]}))}function Q(d,m){if(!d||!m)return null;let p=g[d],v=m[d];return d==="wind_direction"&&(v=m.wind_direction!=null?m.wind_direction:m.wind_bearing),v==null||v===""?null:p&&p.arrow?"":(typeof v=="number"&&(v=Math.round(v)),v+(p&&p.unit||""))}function U(d,m){if(d==="wind_direction")return(g.wind_bearing||{}).icon;let p=g[d];return p?p.icon:""}let e1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function J(d,m){if(m){let p=e1[d];if(p&&o[p]&&o[p].icon)return o[p].icon}return U(d)}function X(d){return d==="below"||d==null?0:d==="above"?100:d==="mid"?50:n(Number(d)||0,0,100)}function i1(d,m){m=m||0;let p="  ".repeat(m),v=_=>{if(_==null)return"null";if(typeof _=="boolean"||typeof _=="number")return String(_);let Z=String(_);return Z===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(Z)||/^\s|\s$/.test(Z)||/^(true|false|null|yes|no|~)$/i.test(Z)||/^[\d.+-]/.test(Z)?'"'+Z.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':Z};if(Array.isArray(d))return d.length?d.map(_=>{if(_&&typeof _=="object"){let Z=i1(_,m+1).replace(/^\s+/,"");return p+"- "+Z}return p+"- "+v(_)}).join(`
`):p+"[]";if(d&&typeof d=="object"){let _=Object.keys(d);return _.length?_.map(Z=>{let y=d[Z];return y&&typeof y=="object"&&(Array.isArray(y)?y.length:Object.keys(y).length)?p+Z+`:
`+i1(y,m+1):y&&typeof y=="object"?p+Z+": "+(Array.isArray(y)?"[]":"{}"):p+Z+": "+v(y)}).join(`
`):p+"{}"}return p+v(d)}function d1(d){try{return typeof J3=="function"&&J3(d)||d.language||navigator.language||"en"}catch{return"en"}}function _1(d){let m=d&&d.config||{};return{lat:m.latitude,lng:m.longitude}}function A1(d,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(d1(d),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function i2(d,m){let p=m instanceof Date?m:new Date;try{if(typeof R0=="function"){let Z=R0(d,p);if(Z&&Z.sunrise&&Z.sunset)return{sunrise:new Date(Z.sunrise),sunset:new Date(Z.sunset)}}}catch{}let{lat:v,lng:_}=_1(d);if(s(v)&&s(_)&&typeof b0=="object"&&b0.getTimes)try{let Z=b0.getTimes(p,v,_);return{sunrise:Z.sunrise,sunset:Z.sunset}}catch{}return{sunrise:null,sunset:null}}function G1(d,m){let{lat:p,lng:v}=_1(d);if(!s(p)||!s(v)||typeof b0!="object"||!b0.getPosition)return null;try{return b0.getPosition(m,p,v).altitude}catch{return null}}function T1(d){if(d==null)return .5;let m=d*180/Math.PI;return m>=0?n(.42+.58*Math.sin(d),.42,1):m>-12?n(.42*(m+12)/12,0,.42):0}let t1=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function J1(d){d=n(d,0,1);let m=t1[0],p=t1[t1.length-1];for(let y=0;y<t1.length-1;y++)if(d>=t1[y].at&&d<=t1[y+1].at){m=t1[y],p=t1[y+1];break}let v=p.at-m.at||1,_=(d-m.at)/v,Z=y=>Math.round(m.c[y]+(p.c[y]-m.c[y])*_);return[Z(0),Z(1),Z(2)]}function V1(d){if(typeof d!="string")return null;let m=d.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(p=>p+p).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let j=d=>`rgb(${Math.round(d[0])}, ${Math.round(d[1])}, ${Math.round(d[2])})`,a1=(d,m,p)=>d.map((v,_)=>v+(m[_]-v)*p);function L1(d,m){d=n(d,0,1);let p,v=m&&V1(m.day_color),_=m&&V1(m.night_color);v||_?p=a1(_||[11,16,38],v||[206,227,255],d):p=J1(d);let Z=m&&s(m.cloud)?n(m.cloud,0,1):0;if(Z>0){let y=.5*(p[0]+p[1]+p[2]),E=[y*.75+40,y*.75+42,y*.78+48];p=a1(p,E,Z*.6)}return j(p)}function m1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function c1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function M1(d){return{font_size:d,font_weight:"400",color:""}}function b1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function P1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function h2(d,m){if(d==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let p=v=>`0 0 2px ${v}, 0 0 4px ${v}, 1px 1px 2px ${v}`;return d==="outline"?p("rgba(0,0,0,0.85)"):d==="auto"?p(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let g2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function R2(d){let m=d&&d.show_forecast!==!1,p=d&&d.default_forecast||"daily",v=a.map(E=>({key:E,show:!0})),_=m1,Z=b1,y=c1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:d?d.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...P1(),...Z(),..._(),...y()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:v,...Z(),..._(),...y()},hourly:{show:m&&p==="hourly",...Z(),..._(),...y()},daily:{show:m&&p!=="hourly",...Z(),..._(),...y()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...Z(),..._(),...y()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...Z(),..._(),...y()}}}function c2(d){let m=R2(d),p=d&&d.wfc||{},v={order:Array.isArray(p.order)&&p.order.length?p.order.slice():m.order,card:{...m.card,...p.card||{}},current:{...m.current,...p.current||{}},details:{...m.details,...p.details||{}},hourly:{...m.hourly,...p.hourly||{}},daily:{...m.daily,...p.daily||{}},sun_position:{...m.sun_position,...p.sun_position||{}},sun_arc:{...m.sun_arc,...p.sun_arc||{}},editor_accordion:p.editor_accordion!==!1},_=Array.isArray(p.details&&p.details.items)?p.details.items.slice():m.details.items.slice();_=_.filter(y=>y&&o[y.key]),v.details.items=_.length?_:m.details.items,v.details.columns=n(parseInt(v.details.columns,10)||2,1,4);let Z=new Set(v.details.items.map(y=>y.key));return Object.keys(o).forEach(y=>{Z.has(y)||v.details.items.push({key:y,show:!1})}),["sun_position","sun_arc"].forEach(y=>{let E=p[y]||{};E.flush!==void 0&&(E.flush_top===void 0&&(v[y].flush_top=!!E.flush),E.flush_bottom===void 0&&(v[y].flush_bottom=!!E.flush),E.flush_edges===void 0&&(v[y].flush_edges=!!E.flush))}),e.forEach(y=>{v.order.includes(y)||v.order.push(y)}),v.order=v.order.filter(y=>e.includes(y)),v}let H1=u2.prototype;if(typeof q2<"u"&&q2&&q2.prototype&&q2.prototype.getSecondaryWeatherAttribute){let d=q2.prototype.getSecondaryWeatherAttribute;q2.prototype.getSecondaryWeatherAttribute=function(){let m=this.config&&this.config.current&&this.config.current.secondary_info_attribute;if(m==="__wfc_none__")return null;if(typeof m=="string"&&m&&this.weatherEntity&&H1._wfcMetricEntityChain){let p={config:this.config,hass:this.hass,_wfcSources:H1._wfcSources,_wfcSlotEntityForKey:H1._wfcSlotEntityForKey,_wfcMetricEntityChain:H1._wfcMetricEntityChain},v=null;try{v=(H1._wfcMetricEntityChain.call(p,m)||[]).find(_=>!String(_).startsWith("weather.")&&this.hass&&this.hass.states[_])}catch{v=null}if(v){let _={...this.config,current:{...this.config.current,secondary_info_attribute:{name:m,entity:v}}};return d.call(Object.create(this,{config:{value:_}}))}if(!(m in(this.weatherEntity.attributes||{})))return null}return d.call(this)}}let C5=H1.setConfig;H1.setConfig=function(d){let m=c2(d),p=m.sun_position||{},v=p.forecast_extra,Z=!!(!!(p.show||m.sun_arc&&m.sun_arc.show&&m.sun_arc.baseline_mode==="sky")&&(p.weather_adjust!==!1||[p.forecast_temps,p.forecast_icons].some(R=>R&&R!=="hidden")||(Array.isArray(v)?v.length:v&&v!=="none")||Object.values(p.forecast_metric_pos||{}).some(R=>R&&R!=="hidden"))),y=d.current&&d.current.secondary_info_attribute,E=!!(m.current.show&&(y==null||y==="")),B=!!(m.hourly.show||Z||E),W=!!(m.daily.show||E),z=!!(B||W),o1=B&&W?"both":B?"hourly":"daily",l1={...d,show_current:m.current.show||!z,show_forecast:z};z&&(o1==="both"||!d.forecast_types||Z||E)&&(l1.forecast_types=o1),C5.call(this,l1),this.config.show_current=!!m.current.show,this.config.show_forecast=z,l1.forecast_types&&(this.config.forecast_types=l1.forecast_types),this.__wfcCfgSrc=void 0};let Q2=H1.updated;H1.updated=function(d){Q2&&Q2.call(this,d),this.isConnected&&this._wfcSyncForecastSources()};let w5=H1.disconnectedCallback;H1.disconnectedCallback=function(){w5&&w5.call(this),this._wfcTeardownForecastSources()};let D2=H1.shouldUpdate;H1.shouldUpdate=function(d){if(D2&&D2.call(this,d))return!0;if(d&&d.has("hass")&&this.config){let m=d.get("hass"),p=this.hass;if(m&&p){let v=new Set;for(let _ of this._wfcSources())if(_.overrides&&Object.values(_.overrides).forEach(Z=>Z&&v.add(Z)),r2(_.ref)){let Z=K0(this.config,this.hass,b2(_.ref));Object.values(Z).forEach(y=>y&&v.add(y))}else _.ref&&v.add(_.ref);for(let _ of v)if(m.states[_]!==p.states[_])return!0}}return!1},H1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=c2(this.config)),this.__wfcCfg},H1.computeRowSizing=function(){let d=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",p={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let y=(d.details.items||[]).filter(E=>E.show).length;return Math.max(1,Math.ceil(y/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(d.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(d.sun_arc.height)||90)+24)/56))},v=1,_=4;d.order.filter(y=>d[y]&&d[y].show&&p[y]).forEach(y=>{v+=p[y](),(y==="hourly"||y==="daily")&&(_=6)});let Z=Math.max(1,v-1);return{rows:v,minRows:Z,minColumns:_}},H1.render=function(){if(!this.config||!this.hass)return S;let d=this.config.entity,m=this.hass.states[d];if(!m){let B=this.hass,W=B?B.config&&B.config.state!=="NOT_RUNNING"?`${B.localize("ui.card.common.entity_not_found")}: ${d}`:B.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return x`<hui-warning>${W}</hui-warning>`}let p=this._wfc(),v=typeof F5=="function"&&F5(m)==="twice_daily",_=this.config.forecast&&this.config.forecast.mode==="chart",Z={stateObj:m,isTwice:v,chart:_},E=p.order.filter(B=>p[B]&&p[B].show).map(B=>{let W=this._wfcRenderSection(B,p,Z);if(W===S||W==null)return null;let z=p[B]||{},o1="wsfc-section";z.flush_top&&(o1+=" wsfc-flush-top"),z.flush_bottom&&(o1+=" wsfc-flush-bottom"),z.flush_edges&&(o1+=" wsfc-flush-edges");let l1=this._wfcBackgroundStyle(z);return x`<div class=${o1} data-section-id=${B} style=${l1}>
          ${this._wfcRenderTitle(z)}${W}
        </div>`}).filter(Boolean);return x`
      <ha-card>
        ${this.config.show_condition_effects?x`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${m}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:S}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(p)}
        ${this._wfcCardAppearanceStyle(p)}
        <div class="wsfc-container">${E}</div>
      </ha-card>
    `},H1._wfcDividerStyle=function(d){let m=[];return d.order.forEach(p=>{let v=d[p];if(!v||!v.show||!v.divider_above&&!v.divider_below)return;let _=`.wsfc-section[data-section-id="${p}"]`,Z=v.divider_color||"var(--divider-color, #4a4a4a)",y=`${_}{position:relative;}`,E=B=>["solid","dashed","dotted","double"].includes(B)?B:"solid";if(v.divider_above){let B=Number(v.divider_above_width)||1,W=n(Number(v.divider_above_length)||100,1,100),z=E(v.divider_above_style);y+=`${_}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${_}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${W}%;border-top:${B}px ${z} ${Z};}`}if(v.divider_below){let B=Number(v.divider_below_width)||1,W=n(Number(v.divider_below_length)||100,1,100),z=E(v.divider_below_style);y+=`${_}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${_}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${W}%;border-bottom:${B}px ${z} ${Z};}`}m.push(y)}),m.length?x`<style>${m.join("")}</style>`:S},H1._wfcCardAppearanceStyle=function(d){let m=d&&d.card||{},p=[];if(m.border_enabled){let _=Math.max(0,Number(m.border_width)||1),Z=m.border_color||"var(--primary-color, #2196f3)",y=E=>E!==!1?`${_}px solid ${Z}`:"none";p.push(`border-top:${y(m.border_top)}`),p.push(`border-bottom:${y(m.border_bottom)}`),p.push(`border-left:${y(m.border_left)}`),p.push(`border-right:${y(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let _=`${Number(m.border_radius)}px`,Z=y=>y!==!1?_:"0";p.push(`border-radius:${Z(m.corner_tl)} ${Z(m.corner_tr)} ${Z(m.corner_br)} ${Z(m.corner_bl)}`)}m.bg_color&&p.push(`background:${m.bg_color}`);let v=[];if(m.glow_enabled){let _=m.glow_color||"var(--primary-color, #2196f3)",Z=n(Number(m.glow_intensity)||1,.2,3),y=(12*Z).toFixed(1),E=(-4*Z).toFixed(1),B=(4*Z).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?v.push(`0 0 ${y}px ${E}px ${_}`):(m.border_top!==!1&&v.push(`0 -${B}px ${y}px ${E}px ${_}`),m.border_bottom!==!1&&v.push(`0 ${B}px ${y}px ${E}px ${_}`),m.border_left!==!1&&v.push(`-${B}px 0 ${y}px ${E}px ${_}`),m.border_right!==!1&&v.push(`${B}px 0 ${y}px ${E}px ${_}`))}if(m.shadow_enabled){let _=_2(m.shadow_color||"#000000",n((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";v.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${_}`)}return v.length&&p.push(`box-shadow:${v.join(", ")}`),p.length?x`<style>ha-card{${p.join(";")};}</style>`:S},H1._wfcBackgroundStyle=function(d){if(!d||!d.background_enabled)return"";let m=n(d.background_opacity==null?80:Number(d.background_opacity),0,100),p=(100-m)/100,v=100-m,_=d.background_color||"",Z;_?Z=_2(_,p)||`color-mix(in srgb, ${_} ${v}%, transparent)`:Z=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${v}%, transparent)`;let y=d.flush_edges?"0":"8px";return`background-color:${Z};border-radius:${y};`};function _2(d,m){if(typeof d!="string")return null;let p=d.trim().replace(/^#/,"");if(p.length===3&&(p=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]),!/^[0-9a-fA-F]{6}$/.test(p))return null;let v=parseInt(p.slice(0,2),16),_=parseInt(p.slice(2,4),16),Z=parseInt(p.slice(4,6),16);return`rgba(${v}, ${_}, ${Z}, ${m})`}H1._wfcRenderTitle=function(d){if(!d||!d.title_show)return S;let m=d.title_text||"",p=d.title_icon||"",v=d.title_text_align||"left",_=d.title_icon_align||"left",Z=!!m&&v!=="hide",y=!!p&&_!=="hide";if(!Z&&!y)return S;let E=(d.title_icon_color?`color:${d.title_icon_color};`:"")+(d.title_icon_size?`--mdc-icon-size:${d.title_icon_size}px;width:${d.title_icon_size}px;height:${d.title_icon_size}px;`:""),B=(d.title_color?`color:${d.title_color};`:"")+(d.title_font_size?`font-size:${d.title_font_size}px;`:"")+(d.title_font_weight?`font-weight:${d.title_font_weight};`:""),W=y?x`<ha-icon class="wsfc-title-icon" .icon=${p} style=${E}></ha-icon>`:S,z=Z?x`<span class="wsfc-title-text" style=${B}>${m}</span>`:S,o1=R=>{let p1=[];return y&&_===R&&p1.push(W),Z&&v===R&&p1.push(z),p1},l1=Number(d.title_indent)||0;return x`<div class="wsfc-title-row" style="padding-left:${l1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${o1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${o1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${o1("right")}</span>
    </div>`},H1._wfcRenderSection=function(d,m,p){switch(d){case"current":return this._wfcRenderCurrent(p);case"details":return this._wfcRenderDetails(m,p);case"hourly":return this._wfcRenderForecast("hourly",p);case"daily":return this._wfcRenderForecast("daily",p);case"sun_position":return this._wfcRenderSunPosition(m,p);case"sun_arc":return this._wfcRenderSunArc(m,p);default:return S}},H1._wfcRenderCurrent=function(d){let p=this._wfc().current||{},v=Number(p.header_state_size)||0,_=Number(p.header_temp_size)||0,Z=Number(p.header_icon_size)||0,y=(Z?`--current-conditions-icon-size:${Z}px;`:"")+(v||_?`--wfc-hdr-state:${v?v+"px":"inherit"};--wfc-hdr-temp:${_?_+"px":"inherit"};`:""),E=x`
      <div
        class="wsfc-current-weather-container${v||_?" wsfc-hdr-sized":""}"
        style=${y||S}
        .actionHandler=${h0({hasHold:F0(this.config.hold_action),hasDoubleClick:F0(this.config.double_tap_action)})}
        @action=${this.onCardAction}
      >
        <wsfc-current-weather
          class=${(this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?"wsfc-hide-secondary":""}
          .hass=${this.hass}
          .weatherEntity=${this._wfcMergedCurrentEntity(d.stateObj)}
          .config=${this.config}
          .hourlyForecast=${this._hourlyForecastData}
          .dailyForecast=${this._dailyForecastData}
        ></wsfc-current-weather>
      </div>
    `,B=!!p.clock_show_time,W=!!p.clock_show_date;if(!B&&!W)return E;this._wfcEnsureClockTimer();let z=v2=>v2==="above"?"above-center":v2==="below"?"below-center":v2||"right",o1=z(p.clock_placement),l1=p.clock_date_placement==="with_time"||!p.clock_date_placement?o1:z(p.clock_date_placement),R=B?this._wfcRenderClockTime(p):null,p1=W?this._wfcRenderClockDate(p):null,K1=B&&W&&(p.clock_date_placement==="with_time"||!p.clock_date_placement),R1={},D1=(v2,m2)=>{m2&&(R1[v2]=R1[v2]||[]).push(m2)};K1?D1(o1,x`<div class="wsfc-clock">${R}${p1}</div>`):(R&&D1(o1,x`<div class="wsfc-clock">${R}</div>`),p1&&D1(l1,x`<div class="wsfc-clock">${p1}</div>`));let X1=v2=>{let m2=[];return["left","center","right"].forEach(t2=>{let U2=v2+"-"+t2;R1[U2]&&m2.push(x`<div class="wsfc-clock-band-cell wsfc-cb-${t2}">${R1[U2]}</div>`)}),m2.length?x`<div class="wsfc-clock-band">${m2}</div>`:S},u1=X1("above"),B1=X1("below"),H0=R1.left||S,p5=[].concat(R1.right||[],R1.center||[]),W5=R1.left&&R1.left.length||p5.length?x`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${H0}
          <div class="wsfc-cur-grow">${E}</div>
          ${p5.length?p5:S}
        </div>`:E;return x`<div class="wsfc-cur-stack">${u1}${W5}${B1}</div>`},H1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let d=this.__wfcCfg||(this.config?c2(this.config):null),m=d&&d.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},H1._wfcRenderClockTime=function(d){let m=new Date,p=d1(this.hass),v={hour:"2-digit",minute:"2-digit"};d.clock_show_seconds&&(v.second="2-digit"),d.clock_format==="12"?v.hour12=!0:d.clock_format==="24"&&(v.hour12=!1);let _;try{_=m.toLocaleTimeString(p,v)}catch{_=m.toTimeString().slice(0,d.clock_show_seconds?8:5)}d.clock_format==="12"&&(_=_.replace(/^0/,""));let Z=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),y=h2(d.clock_contrast,Z),E=`font-size:${Number(d.clock_font_size)>0?n(Number(d.clock_font_size),8,100)+"px":"var(--wfc-clock-auto, 28px)"};font-weight:${d.clock_font_weight||"500"};`+(d.clock_color?`color:${d.clock_color};`:"")+(d.clock_font_family?`font-family:${d.clock_font_family};`:"")+(y?`text-shadow:${y};`:"");return x`<div class="wsfc-clock-time" style=${E}>${_}</div>`};function M5(d,m,p){let v=B=>B<10?"0"+B:""+B,_=d.toLocaleDateString(p,{month:"long"}),Z=d.toLocaleDateString(p,{month:"short"}),y=d.toLocaleDateString(p,{weekday:"long"}),E={YYYY:""+d.getFullYear(),YY:v(d.getFullYear()%100),MONTH:_,MON:Z,WDAY:y,MM:v(d.getMonth()+1),M:""+(d.getMonth()+1),DD:v(d.getDate()),D:""+d.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,B=>E[B]!=null?E[B]:B)}H1._wfcRenderClockDate=function(d){let m=new Date,p=d1(this.hass),v=g2.find(W=>W.value===d.clock_date_format)||g2[0],_;try{_=v.pattern?M5(m,v.pattern,p):m.toLocaleDateString(p,v.opts)}catch{_=m.toDateString()}let Z=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),y=d.clock_date_contrast!=null?d.clock_date_contrast:d.clock_contrast,E=h2(y,Z),B=`font-size:${Number(d.clock_date_font_size)>0?n(Number(d.clock_date_font_size),8,100)+"px":"var(--wfc-clock-date-auto, 12px)"};`+(d.clock_date_color?`color:${d.clock_date_color};`:"")+(E?`text-shadow:${E};`:"");return x`<div class="wsfc-clock-date" style=${B}>${_}</div>`},H1._wfcForecastConfigFor=function(d){let m=this.config&&this.config.forecast||{},p=m[`${d}_mode`]||m.mode||"simple",v=m[`${d}_extra_attribute`]!=null?m[`${d}_extra_attribute`]:m.extra_attribute;(v==="none"||v==="")&&(v=void 0);let _=m[`${d}_chart_attribute`]!=null?m[`${d}_chart_attribute`]:m.default_chart_attribute,Z={...m,mode:p};return v==null?delete Z.extra_attribute:Z.extra_attribute=v,_!=null&&(Z.default_chart_attribute=_),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(E=>{let B=m[`${d}_${E}`];B!=null&&(Z[E]=B)}),{config:{...this.config,forecast:Z},chart:p==="chart"}},H1._wfcRenderForecast=function(d,m){let p=d==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!p||!p.length)return S;let v=this._wfcMergeForecast(p,d),{config:_,chart:Z}=this._wfcForecastConfigFor(d),y=Z?x`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${_}
          .weatherEntity=${m.stateObj}
          .forecast=${v}
          .forecastType=${d}
          .isTwiceDailyEntity=${m.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:x`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${_}
          .weatherEntity=${m.stateObj}
          .forecast=${v}
          .forecastType=${d}
          .isTwiceDailyEntity=${m.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return x`<div class="wsfc-forecast-container" data-forecast-type=${d}>${y}</div>`};let d5="device:",r2=d=>typeof d=="string"&&d.indexOf(d5)===0,b2=d=>r2(d)?d.slice(d5.length):null,Q0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],te=Q0.map(d=>d.key),ee=[{re:/feels?[\s_-]?likes?|apparent|wind[\s_-]?chill|windchill|heat[\s_-]?index/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}],m7=new WeakMap;function $3(d,m){if(!d||!m||!d.entities)return[];let p=m7.get(d.entities);if(p&&p.hass!==d&&(p.hass=d,Object.keys(d.entities).length!==p.size0&&(p=null)),!p){p=new Map;for(let v in d.entities){let _=d.entities[v]&&d.entities[v].device_id;_&&(p.has(_)||p.set(_,[]),p.get(_).push(v))}p.size0=Object.keys(d.entities).length,p.hass=d,m7.set(d.entities,p)}return p.get(m)||[]}function l6(d,m){let p=d&&d.states[m];if(!p)return null;let v=p.attributes&&p.attributes.device_class,_=(m+" "+(p.attributes&&p.attributes.friendly_name||"")).toLowerCase(),Z=null;for(let E of ee)if(E.re.test(_)){Z=E.key;break}if(Z||(v==="temperature"?Z="temperature":v==="humidity"?Z="humidity":v==="pressure"||v==="atmospheric_pressure"?Z="pressure":v==="wind_speed"?Z="wind_speed":v==="irradiance"?Z="solar_radiation":v==="illuminance"?Z="illuminance":v==="precipitation_intensity"?Z="precipitation":/(^|[\s_-])temperature/.test(_)?Z="temperature":/pressure/.test(_)&&(Z="pressure")),!Z||te.indexOf(Z)===-1)return null;let y=0;if(/indoor|inside/.test(_)||Z==="uv_index"&&!/index|\buvi\b/.test(_))return null;if(Z==="apparent_temperature"&&/chill|heat[\s_-]?index/.test(_)&&(y+=10),/globe|wbgt|soil|water|pool|probe|leaf|\bch[\s_-]?\d|(temperature|humidity)[\s_-]?\d|_\d+$/.test(_.replace(/_2$/,""))&&(y+=40),/outdoor/.test(_)&&(y-=2),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(_)&&(y+=20),Z==="pressure"){if(/deficit|vpd|vapou?r/.test(_))return null;/absolute/.test(_)&&(y+=50),/relative|sea/.test(_)&&(y-=5)}return Z==="precipitation"&&(/rate/.test(_)&&(y-=5),/event|hourly|24h|total/.test(_)&&(y+=10)),{key:Z,penalty:y}}let c6=new WeakMap;function f4(d,m){let p=d&&d.devices||{},v=c6.get(p);return v||(v=new Map,c6.set(p,v)),v.has(m)||v.set(m,M6(p,m)),v.get(m)}function M6(d,m){let p=d[m],v=p&&p.config_entries||[];return v.length?Object.keys(d).filter(_=>_!==m&&(d[_].config_entries||[]).some(Z=>v.includes(Z))):[]}let d6=new WeakMap;function f7(d,m){if(!d||!d.entities)return A7(d,m);let p=d6.get(d.entities);p||(p=new Map,d6.set(d.entities,p));let v=[m,...f4(d,m)],_="";for(let B of v)for(let W of $3(d,B))d.states[W]&&(_+=W.length+",");let Z=m+"|"+v.length+"|"+_,y=p.get(m);if(y&&y.key===Z&&y.devices===d.devices)return y.map;let E=A7(d,m);return p.set(m,{key:Z,devices:d.devices,map:E}),E}function A7(d,m){let p={},v={},_=$3(d,m).map(y=>[y,0]),Z=f4(d,m).flatMap(y=>$3(d,y).map(E=>[E,15]));for(let[y,E]of[..._,...Z]){let B=l6(d,y);if(!B)continue;let W={key:B.key,penalty:B.penalty+E};(v[W.key]==null||W.penalty<v[W.key])&&(v[W.key]=W.penalty,p[W.key]=y)}return p}function K0(d,m,p){let v={...f7(m,p)},_=d&&d.metric_sources&&d.metric_sources.device_map&&d.metric_sources.device_map[p]||{};for(let Z in _)_[Z]&&(v[Z]=_[Z]);return v}function p6(d,m){let p=d&&d.metric_sources||{};if(Array.isArray(p.sources))return p.sources.filter(B=>B&&B.ref).map(B=>({ref:B.ref,overrides:{...B.overrides||{}},disabled:!!B.disabled}));let v=[],_=p.device_map||{},Z=p.custom||{},y=B=>r2(B)?{..._[b2(B)]||{}}:{},E=p.primary||d&&d.entity;return E&&v.push({ref:E,overrides:{...y(E),...Z}}),p.fallback&&p.fallback!==E&&v.push({ref:p.fallback,overrides:y(p.fallback)}),v}H1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},H1._wfcSources=function(){return p6(this.config,this.hass)},H1._wfcSlotEntityForKey=function(d,m){return d?r2(d)?K0(this.config,this.hass,b2(d))[m]||null:d:null},H1._wfcMetricEntityChain=function(d){let m=[],p=v=>{v&&!m.includes(v)&&this.hass&&this.hass.states[v]&&m.push(v)};for(let v of this._wfcSources())v.disabled||(v.overrides&&v.overrides[d]&&p(v.overrides[d]),p(this._wfcSlotEntityForKey(v.ref,d)));return p(this.config&&this.config.entity),m},H1._wfcCurrentMetric=function(d){for(let m of this._wfcMetricEntityChain(d)){let p=this.hass.states[m];if(p)if(m.startsWith("weather."))try{let v=X7(this.hass,p,this.config,d);if(v!=null&&v!=="")return v}catch{}else{let v=p.state;if(v!=null&&v!==""&&v!=="unknown"&&v!=="unavailable"){let _=p.attributes&&p.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(p):_?`${v} ${_}`:`${v}`}catch{return _?`${v} ${_}`:`${v}`}}}}return null},H1._wfcCurrentMetricRaw=function(d){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(d)){let p=this.hass.states[m];if(p)if(m.startsWith("weather.")){let v=p.attributes?p.attributes[d]:null;if(v!=null&&v!=="")return v}else{let v=p.state;if(v!=null&&v!==""&&v!=="unknown"&&v!=="unavailable"){let _=Number(v);return isNaN(_)?v:_}}}return null},H1._wfcMergedCurrentEntity=function(d){try{if(!d||!d.attributes)return d;let m=this.config&&this.config.entity;if(!this._wfcSources().some(E=>E.ref!==m||E.overrides&&Object.keys(E.overrides).length))return d;let _={...d.attributes},Z=!1,y=["temperature",...typeof G2<"u"?G2:[]];for(let E of y){let B=this._wfcCurrentMetricRaw(E);B!=null&&B!==_[E]&&(_[E]=B,Z=!0)}return Z?{...d,attributes:_}:d}catch{return d}},H1._wfcDetailValue=function(d,m){let p=o[d];if(!p)return null;if(p.kind==="sunrise"||p.kind==="sunset"){let v=i2(this.hass),_=p.kind==="sunrise"?v.sunrise:v.sunset;return _?A1(this.hass,_):null}try{let v=this._wfcCurrentMetric(d);return v??null}catch{return null}},H1._wfcRenderDetails=function(d,m){let p=d.details||{},v=(p.items||[]).filter(E=>E.show);if(p.chips)return this._wfcRenderDetailChips(p,v,m);let _=[];if(v.forEach(E=>{let B=o[E.key];if(!B)return;let W=this._wfcDetailValue(E.key,m);if(W==null||W==="")return;let z=E.mode==="custom",o1=z?E.icon_color:p.global_icon_color,l1=z?E.icon_size:p.global_icon_size,R=z?E.text_color:p.global_text_color,p1=z?E.text_size:p.global_text_size,K1=E.icon||B.icon||K5&&K5[E.key]||"mdi:information-outline",R1=(o1?`color:${o1};`:"")+(l1?`--mdc-icon-size:${l1}px;width:${l1}px;height:${l1}px;`:""),D1=(R?`color:${R};`:"")+(p1?`font-size:${p1}px;`:"");_.push(x`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${K1} style=${R1}></ha-icon>
          <span class="wsfc-detail-value" style=${D1}>${W}</span>
        </div>
      `)}),!_.length)return S;if((p.details_layout||"grid")==="wrap")return x`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${_}</div>
      </div>`;let Z=n(parseInt(d.details.columns,10)||2,1,4),y=`grid-template-columns:repeat(${Z}, minmax(0, 1fr));`;return x`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${Z}" style=${y}>${_}</div>
    </div>`},H1._wfcRenderDetailChips=function(d,m,p){let v=n(Number(d.chip_scale)||1,.5,2.5),Z=(d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?999:d.chip_radius==null?8:Number(d.chip_radius),y=d.chip_icon_source||"auto",E=d.chip_show_icon!==!1,B=d.chip_layout||"wrap",W=Math.max(0,parseInt(d.chip_columns,10)||0),z=d.chip_text_size?`${Number(d.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${v})`,o1=d.chip_icon_size?`${Number(d.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${v})`,l1=`--wfc-chip-scale:${v};--wfc-chip-radius:${Z}px;--wfc-chip-font:${z};--wfc-chip-icon-size:${o1};`+(d.chip_bg?`--wfc-chip-bg:${d.chip_bg};`:"")+(d.chip_border_color?`--wfc-chip-border:${d.chip_border_color};`:"")+(d.chip_text_color?`--wfc-chip-text:${d.chip_text_color};`:"")+(d.chip_icon_color?`--wfc-chip-icon:${d.chip_icon_color};`:"");B==="grid"&&W>0&&(l1+=`grid-template-columns:repeat(${W}, minmax(0, 1fr));`);let R=[];return m.forEach(p1=>{let K1=o[p1.key];if(!K1)return;let R1=this._wfcDetailValue(p1.key,p);if(d.chip_hide_when_off&&(R1==null||R1===""||R1==="unknown"||R1==="unavailable"))return;let D1=R1==null||R1===""?"\u2014":R1,X1=K1.label||p1.key,u1=d.chip_show_name?`${X1}: ${D1}`:D1,B1="";E&&y!=="none"&&(B1=y==="entity"&&p1.icon||K1.icon,B1=B1||K5&&K5[p1.key]||"mdi:information-outline"),R.push(x`
        <span class="wsfc-chip">
          ${B1?x`<ha-icon .icon=${B1}></ha-icon>`:S}
          <span class="wsfc-chip-text">${u1}</span>
        </span>
      `)}),R.length?x`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${B}" style=${l1}>${R}</div>
    </div>`:S},H1._wfcHourlySource=function(){let d=this._hourlyForecastEvent,m=d&&Array.isArray(d.forecast)&&d.forecast.length?d.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},H1._wfcExtraForecastEntities=function(){let d=this.config&&this.config.entity,m=new Set,p=v=>{v&&v!==d&&typeof v=="string"&&v.startsWith("weather.")&&this.hass&&this.hass.states[v]&&m.add(v)};for(let v of this._wfcSources())v.disabled||(p(v.ref),v.overrides&&Object.values(v.overrides).forEach(p));return[...m]},H1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let d=new Set(this._wfcExtraForecastEntities());for(let _ of Object.keys(this.__wfcSrc))if(!d.has(_)){try{this.__wfcSrc[_].unsub&&this.__wfcSrc[_].unsub()}catch{}delete this.__wfcSrc[_]}let m=this.config.forecast_types||"both",p=m!=="daily",v=m!=="hourly";d.forEach(_=>{if(this.__wfcSrc[_])return;let Z={unsub:null,hourly:null,daily:null};this.__wfcSrc[_]=Z;let y=(E,B)=>{try{let W=this.hass.connection.subscribeMessage(z=>{Z[B]=z&&Array.isArray(z.forecast)?z.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:E,entity_id:_},{resubscribe:!1});Promise.resolve(W).then(z=>{if(this.__wfcSrc[_]!==Z){try{z&&z()}catch{}return}let o1=Z.unsub;Z.unsub=()=>{try{o1&&o1()}catch{}try{z&&z()}catch{}}}).catch(()=>{})}catch{}};p&&y("hourly","hourly"),v&&y(F5&&typeof F5=="function"&&F5(this.hass.states[_])||"daily","daily")})}catch{}},H1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let d of Object.keys(this.__wfcSrc))try{this.__wfcSrc[d].unsub&&this.__wfcSrc[d].unsub()}catch{}this.__wfcSrc={}}},H1._wfcSourceForecast=function(d,m){let p=this.__wfcSrc&&this.__wfcSrc[d];return p&&p[m]||null},H1._wfcMergeForecast=function(d,m){try{if(!Array.isArray(d)||!d.length)return d;let p=this.config&&this.config.entity,v=this._wfcExtraForecastEntities();if(!v.length)return d;let _={};if(v.forEach(B=>{let W=this._wfcSourceForecast(B,m);Array.isArray(W)&&W.length&&(_[B]=W.map(z=>({t:new Date(z.datetime).getTime(),fc:z})).filter(z=>!isNaN(z.t)))}),!Object.keys(_).length)return d;let Z=(B,W)=>{let z=_[B];if(!z)return null;let o1=null,l1=1/0;for(let R of z){let p1=Math.abs(R.t-W);p1<l1&&(l1=p1,o1=R.fc)}return l1<=90*6e4?o1:null},y=Q0.map(B=>B.key),E={};return y.forEach(B=>{E[B]=this._wfcMetricEntityChain(B).filter(W=>W===p||_[W])}),d.map(B=>{let W=new Date(B.datetime).getTime();if(isNaN(W))return B;let z=B;return y.forEach(o1=>{for(let l1 of E[o1]){if(l1===p){if(B[o1]!=null)break;continue}let R=Z(l1,W);if(R&&R[o1]!=null){z===B&&(z={...B}),z[o1]=R[o1];break}}}),z})}catch{return d}},H1._wfcCloudAt=function(d){let m=this._wfcHourlySource();if(!m||!m.length)return null;let p=null,v=1/0;for(let _=0;_<m.length;_++){let Z=new Date(m[_].datetime);if(isNaN(Z))continue;let y=Math.abs(Z.getTime()-d.getTime());y<v&&(v=y,p=m[_])}return!p||v>90*6e4?null:s(p.cloud_coverage)?p.cloud_coverage/100:s(p.precipitation_probability)?p.precipitation_probability/100:null},H1._wfcForecastAt=function(d){let m=this._wfcHourlySource();if(!m||!m.length)return null;let p=null,v=1/0;for(let _=0;_<m.length;_++){let Z=new Date(m[_].datetime);if(isNaN(Z))continue;let y=Math.abs(Z.getTime()-d.getTime());y<v&&(v=y,p=m[_])}return p&&v<=90*6e4?p:null},H1._wfcSunHours=function(d){d=d||{};let m=new Date,p,v;if(d.timeframe_mode==="day")p=new Date(m),p.setHours(0,0,0,0),v=new Date(p.getTime()+24*36e5);else if(d.timeframe_mode==="match_arc"){let E=i2(this.hass,m);E.sunrise&&E.sunset?(p=new Date(E.sunrise.getTime()-60*6e4),v=new Date(E.sunset.getTime()+60*6e4)):(p=new Date(m),p.setHours(0,0,0,0),v=new Date(p.getTime()+24*36e5))}else{let E=n(Number(d.timeframe_hours)||24,1,72)*36e5;d.timeframe_anchor==="now_center"?(p=new Date(m.getTime()-E/2),v=new Date(m.getTime()+E/2)):(p=new Date(m),p.setMinutes(0,0,0),v=new Date(p.getTime()+E))}let _=v.getTime()-p.getTime(),Z=n(Math.round(_/36e5),2,72),y=[];for(let E=0;E<=Z;E++){let B=new Date(p.getTime()+_*E/Z);y.push({date:B,cloud:this._wfcCloudAt(B)})}return y},H1._wfcFmtTime=function(d,m){if(!(d instanceof Date)||isNaN(d))return"--";let p=d1(this.hass);try{return m==="12"?d.toLocaleTimeString(p,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?d.toLocaleTimeString(p,{hour:"2-digit",minute:"2-digit",hour12:!1}):d.toLocaleTimeString(p,{hour:"2-digit",minute:"2-digit"})}catch{return d.toTimeString().slice(0,5)}},H1._wfcSkyGradient=function(d){let m=this._wfcSunHours(d);if(m.length<2)return null;let{lat:p,lng:v}=_1(this.hass);if(!s(p)||!s(v))return null;let _=d.weather_adjust!==!1,Z=m.length,y=[];for(let E=0;E<Z;E++){let B=T1(G1(this.hass,m[E].date)),W=(E/(Z-1)*100).toFixed(2),z=L1(B,{day_color:d.day_color,night_color:d.night_color,cloud:_?m[E].cloud:0});y.push(`${z} ${W}%`)}return{gradient:`linear-gradient(to right, ${y.join(", ")})`,hours:m}},H1._wfcSunMarker=function(d,m){if(m==null)return S;let p=d.marker_color||"var(--primary-text-color)",v=n(Number(d.marker_opacity==null?100:d.marker_opacity),0,100)/100;return x`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${p};opacity:${v};"></div>`},H1._wfcSunRiseSetMarkers=function(d,m,p,v){let{sunrise:_,sunset:Z}=i2(this.hass);if(!_||!Z||p<=m)return S;let y=d.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",E=n(Number(d.ss_markers_opacity==null?100:d.ss_markers_opacity),0,100)/100,B=[];return[_.getTime(),Z.getTime()].forEach(W=>{if(W<m||W>p)return;let z=((W-m)/(p-m)*100).toFixed(2);B.push(x`<span class="wsfc-sunpos-ssmark" style="left:${z}%;background:${y};opacity:${E};"></span>`)}),B.length?x`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${v}">${B}</div>`:S},H1._wfcRenderSunPosition=function(d,m){let p=d.sun_position,v=this._wfcSkyGradient(p);if(!v)return S;let{gradient:_,hours:Z}=v,y=Z.length,E=p.times_position||"below";E==="center"&&(E="overlay");let B=p.ticks_position||"hidden",W=E!=="hidden",z=B!=="hidden",o1=n(parseInt(p.ticks_every,10)||0,0,24),l1;if(o1>0&&y>1){let Y=(Z[y-1].date.getTime()-Z[0].date.getTime())/36e5,f1=Y>0?Y/(y-1):1;l1=Math.max(1,Math.round(o1/f1))}else l1=Math.max(1,Math.round((y-1)/8));let R=Y=>(Y/(y-1)*100).toFixed(2),p1=[];if(W)for(let Y=0;Y<y;Y+=l1){let f1;try{f1=Z[Y].date.toLocaleTimeString(d1(this.hass),{hour:"numeric"})}catch{f1=Z[Y].date.getHours()+""}p1.push(x`<span class="wsfc-sunpos-tick" style="left:${R(Y)}%">${f1}</span>`)}let K1=p.times_color||"var(--secondary-text-color, #9e9e9e)",R1=[];if(z)for(let Y=0;Y<y;Y+=l1)R1.push(x`<span class="wsfc-sunpos-mark" style="left:${R(Y)}%;background:${K1};"></span>`);let D1=Date.now(),X1=Z[0].date.getTime(),u1=Z[y-1].date.getTime(),H0=D1>=X1&&D1<=u1&&u1>X1?n((D1-X1)/(u1-X1)*100,0,100):null,p5=Number(p.height)||44,B2=`font-size:${Number(p.times_font_size)||11}px;font-weight:${p.times_font_weight||"400"};`+(p.times_color?`color:${p.times_color};`:""),W5=Y=>x`<div class="wsfc-sunpos-ticks${Y||""}" style=${B2}>${p1}</div>`,v2=Y=>x`<div class="wsfc-sunpos-marks${Y||""}">${R1}</div>`,m2=p.ss_markers_position||"hidden",t2=m2!=="hidden",U2=F(p),S2={};U2.forEach(Y=>S2[Y.key]=Y.pos);let u5=S2.temps&&S2.temps!=="hidden",V0=S2.icons&&S2.icons!=="hidden",U5=p.forecast_temp_color||p.forecast_color||"",L0=p.forecast_icon_color||p.forecast_color||"",l0=p.forecast_extra_color||p.forecast_color||"",J0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),y2=p.forecast_metric_style||{},c0=Y=>y2[Y]&&y2[Y].text_color||(Y==="temps"?U5:l0),y5=Y=>y2[Y]&&y2[Y].icon_color||L0,g7=Y=>y2[Y]&&y2[Y].icon_size||p.forecast_icon_size,D3=Y=>y2[Y]&&y2[Y].text_size||p.forecast_font_size||11,B3=Y=>h2(y2[Y]&&y2[Y].contrast||"",J0),v1=Y=>{let f1=c0(Y),$1=B3(Y);return`font-size:${Number(D3(Y))||11}px;`+(f1?`color:${f1};`:"")+($1?`text-shadow:${$1};`:"")},z2=Y=>{let f1=y5(Y),$1=g7(Y),z1=B3(Y);return(f1?`color:${f1};`:"")+($1?`--mdc-icon-size:${$1}px;width:${$1}px;height:${$1}px;`:"")+(z1?`filter:drop-shadow(${z1});`:"")},j1=b.some(Y=>S2[Y]&&S2[Y]!=="hidden"),j5=[];if(u5||V0||j1){let Y=this._wfcHourlySource()||[];for(let f1 of Y){let $1=new Date(f1.datetime);if(isNaN($1))continue;let z1=$1.getTime();z1<X1||z1>u1||j5.push({t:z1,fc:f1})}j5.sort((f1,$1)=>f1.t-$1.t)}let M0=u1-X1,S0=Y=>M0>0?((Y-X1)/M0*100).toFixed(2):"0",d0=(Y,f1)=>{let $1=null,z1=1/0;for(let I2 of j5){let J2=Math.abs(I2.t-Y);J2<z1&&(z1=J2,$1=I2.fc)}return z1<=f1?$1:null},K2={},M2=Y=>{let f1=Y==null?"":String(Y);if(K2[f1])return K2[f1];let $1=[];if(j5.length||Y==="ticks"||Y==="midticks"){let z1=Y==="all"||Y==="0",I2=Y==="ticks",J2=Y==="midticks";if(I2||J2){let q5=M0>0&&y>1?M0/(y-1)*l1:36e5,I3=Math.max(q5/2,90*6e4),N3=J2?l1/2:0;for(let h5=N3;h5<=y-1;h5+=l1){let H5=Math.floor(h5),Ve=Math.min(y-1,Math.ceil(h5)),_6=h5-H5,k5=Z[H5].date.getTime()+(Z[Ve].date.getTime()-Z[H5].date.getTime())*_6;if(k5<X1||k5>u1)continue;let w6=(h5/(y-1)*100).toFixed(2);$1.push({pct:w6,fc:d0(k5,I3)})}}else if(z1)for(let q5 of j5)$1.push({pct:S0(q5.t),fc:q5.fc});else{let q5=n(parseInt(Y,10)||3,1,6),I3=null,N3=q5*36e5;for(let h5 of j5)(I3==null||h5.t-I3>=N3-6e4)&&($1.push({pct:S0(h5.t),fc:h5.fc}),I3=h5.t)}}return K2[f1]=$1,$1},n5=Y=>{let f1=y2[Y]&&y2[Y].every;return f1!=null&&f1!==""?f1:p.forecast_every},d2=Y=>{let f1=M2(n5("temps"));return x`<div class="wsfc-sunpos-fc${Y||""}" style=${v1("temps")}>${f1.map($1=>{let z1=$1.fc&&$1.fc.temperature!=null?Math.round($1.fc.temperature)+"\xB0":"";return z1?x`<span class="wsfc-sunpos-fc-item" style="left:${$1.pct}%">${z1}</span>`:S})}</div>`},G5=Y=>{let f1=z2("icons"),$1=M2(n5("icons"));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${Y||""}">${$1.map(z1=>{let I2=z1.fc&&z1.fc.condition?l(z1.fc.condition):"";return I2?x`<span class="wsfc-sunpos-fc-item" style="left:${z1.pct}%"><ha-icon .icon=${I2} style=${f1}></ha-icon></span>`:S})}</div>`},_7=!!p.forecast_metric_detail_icons,g1=(Y,f1)=>{let $1=z2(Y),z1=M2(n5(Y));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${f1||""}" style=${v1(Y)}>${z1.map(I2=>{let J2=I2.fc?Q(Y,I2.fc):null;if(J2==null)return S;let q5=J(Y,_7);return x`<span class="wsfc-sunpos-fc-item" style="left:${I2.pct}%">${q5?x`<ha-icon .icon=${q5} style=${$1}></ha-icon>`:S}<span class="wsfc-sunpos-fc-extra-val">${J2}</span></span>`})}</div>`},N1=Y=>{let f1=z2("icons"),$1=M2(n5("icons"));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${Y||""}" style=${v1("temps")}>${$1.map(z1=>{let I2=z1.fc&&z1.fc.condition?l(z1.fc.condition):"",J2=z1.fc&&z1.fc.temperature!=null?Math.round(z1.fc.temperature)+"\xB0":"";return!I2&&!J2?S:x`<span class="wsfc-sunpos-fc-item" style="left:${z1.pct}%">${I2?x`<ha-icon .icon=${I2} style=${f1}></ha-icon>`:S}${J2?x`<span class="wsfc-sunpos-fc-temp-val">${J2}</span>`:S}</span>`})}</div>`},Z2=!!p.forecast_temp_with_icon&&u5&&V0&&S2.temps===S2.icons,k2=(Y,f1)=>Z2&&Y==="icons"?N1(f1):Y==="temps"?d2(f1):Y==="icons"?G5(f1):g1(Y,f1),s5=Y=>U2.filter(f1=>f1.pos===Y&&!(Z2&&f1.key==="temps")).map(f1=>f1.key),Z5=s5("overlay"),S1=[];Z5.length===1?S1.push(k2(Z5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):Z5.forEach((Y,f1)=>{let $1=f1===0?" wsfc-sunpos-fc-ovl-top":f1===Z5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";S1.push(k2(Y," wsfc-sunpos-fc-ovl"+$1))});let z3=s5("above").map(Y=>k2(Y)),X2=s5("below").reverse().map(Y=>k2(Y));return x`
      <div class="wsfc-sunpos-section">
        ${z3}
        ${t2&&m2==="above"?this._wfcSunRiseSetMarkers(p,X1,u1,"row"):S}
        ${z&&B==="above"?v2():S}
        ${W&&E==="above"?W5():S}
        <div class="wsfc-sunpos-bar" style="height:${p5}px;background:${_}">
          ${t2&&m2==="overlay"?this._wfcSunRiseSetMarkers(p,X1,u1,"overlay"):S}
          ${this._wfcSunMarker(p,H0)}
          ${z&&B==="overlay"?v2(" wsfc-sunpos-marks-center"):S}
          ${W&&E==="overlay"?W5(" wsfc-sunpos-ticks-center"):S}
          ${S1}
        </div>
        ${W&&E==="below"?W5():S}
        ${z&&B==="below"?v2():S}
        ${t2&&m2==="below"?this._wfcSunRiseSetMarkers(p,X1,u1,"row"):S}
        ${X2}
      </div>
    `},H1._wfcArcWindow=function(d,m,p){let v=d.timeframe_mode||"sunrise_sunset",_=Date.now();if(v==="day"){let Z=new Date(_);return Z.setHours(0,0,0,0),{t0:Z.getTime(),t1:Z.getTime()+24*36e5}}if(v==="hours"){let Z=n(Number(d.timeframe_hours)||24,1,72)*36e5;if(d.timeframe_anchor==="now_center")return{t0:_-Z/2,t1:_+Z/2};let y=new Date(_);return y.setMinutes(0,0,0),{t0:y.getTime(),t1:y.getTime()+Z}}return{t0:m,t1:p}},H1._wfcRenderSunArc=function(d,m){let p=d.sun_arc,{sunrise:v,sunset:_}=i2(this.hass);if(!v||!_)return S;let Z=Date.now(),y=v.getTime(),E=_.getTime(),B=E-y,W;if(p.baseline_mode==="sky"&&d.sun_position){let g1=this._wfcSunHours(d.sun_position);g1&&g1.length>=2&&(W={t0:g1[0].date.getTime(),t1:g1[g1.length-1].date.getTime()})}W||(W=this._wfcArcWindow(p,y,E));let z=W.t0,o1=W.t1,l1=o1-z||1,R=g1=>n((g1-z)/l1,0,1),p1=100,K1=78,R1=14,D1=R(y),X1=R(E),u1=X1-D1,B1=g1=>{if(u1<=0||g1<=D1||g1>=X1)return K1;let N1=(g1-D1)/u1;return K1-(K1-R1)*(1-Math.pow(2*N1-1,2))},H0=96,p5="";for(let g1=0;g1<=H0;g1++){let N1=g1/H0;p5+=(g1===0?"M":"L")+(N1*p1).toFixed(2)+" "+B1(N1).toFixed(2)+" "}let B2=Z>=z&&Z<=o1,W5=Z>=y&&Z<=E,v2=R(Z),m2=(v2*100).toFixed(2),t2=(B1(v2)/p1*100).toFixed(2),U2=Number(p.height)||90,S2=p.time_format||"auto",u5=p.tick_color||"var(--secondary-text-color, #9e9e9e)",V0=[];{let g1=new Date(z);g1.setMinutes(0,0,0),g1.getTime()<z&&g1.setTime(g1.getTime()+36e5);for(let N1=g1.getTime();N1<=o1;N1+=36e5)V0.push(R(N1))}let U5=[];p.show_arc_ticks&&V0.forEach(g1=>{if(g1<=0||g1>=1)return;let N1=(g1*p1).toFixed(2),Z2=B1(g1);U5.push(Z1`<line x1="${N1}" y1="${(Z2-2.5).toFixed(2)}" x2="${N1}" y2="${(Z2+2.5).toFixed(2)}" stroke="${u5}" stroke-width="0.6"></line>`)});let L0=[];p.show_base_ticks&&V0.forEach(g1=>{let N1=(g1*p1).toFixed(2);L0.push(Z1`<line x1="${N1}" y1="${K1}" x2="${N1}" y2="${K1+3}" stroke="${u5}" stroke-width="0.6"></line>`)});let l0=p.sunrise_sunset_ticks||"none",J0=l0==="arc"||l0==="both",y2=l0==="base"||l0==="both",c0=[];y>=z&&y<=o1&&c0.push(R(y)),E>=z&&E<=o1&&c0.push(R(E)),J0&&c0.forEach(g1=>{let N1=(g1*p1).toFixed(2),Z2=B1(g1);U5.push(Z1`<line x1="${N1}" y1="${(Z2-4.5).toFixed(2)}" x2="${N1}" y2="${(Z2+4.5).toFixed(2)}" stroke="${u5}" stroke-width="1.4"></line>`)}),y2&&c0.forEach(g1=>{let N1=(g1*p1).toFixed(2);L0.push(Z1`<line x1="${N1}" y1="${(K1-2).toFixed(2)}" x2="${N1}" y2="${K1+6}" stroke="${u5}" stroke-width="1.4"></line>`)});let y5=S;if(B2){let g1="wsfc-sunarc-sun"+(W5?"":" wsfc-sunarc-sun-night"),N1=`left:${m2}%;top:${t2}%;`;if(!W5&&p.night_moon&&p.moon_icon==="phase"){let Z2=b0.getMoonIllumination(new Date).phase,k2=10,s5=11,Z5=Math.cos(Z2*2*Math.PI),S1=Math.abs(Z5)*k2,z3=Z2<.5?1:0,X2=`M${s5} ${s5-k2} A${k2} ${k2} 0 0 ${z3} ${s5} ${s5+k2} A${S1} ${k2} 0 0 ${Z5>0?1-z3:z3} ${s5} ${s5-k2} Z`;y5=x`<span class="${g1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${N1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${X2} fill="#e9e6d6"></path></svg></span>`}else if(!W5&&p.night_moon){let Z2=p.moon_icon||"mdi:weather-night";y5=x`<ha-icon class="${g1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${Z2} style=${N1}></ha-icon>`}else p.sun_icon?y5=x`<ha-icon class="${g1} wsfc-sunarc-sun-icon" .icon=${p.sun_icon} style=${N1}></ha-icon>`:y5=x`<span class="${g1} wsfc-sunarc-sun-dot" style=${N1}></span>`}let g7=`font-size:${Number(p.time_font_size)||13}px;font-weight:${p.time_font_weight||"600"};`+(p.time_color?`color:${p.time_color};`:""),D3=`font-size:${Number(p.caption_font_size)||11}px;font-weight:${p.caption_font_weight||"400"};`+(p.caption_color?`color:${p.caption_color};`:""),B3=p.show_times!==!1,v1=p.show_captions!==!1,z2=!!p.show_ss_icons,j1=p.ss_icon_position||"left",j5=(p.ss_icon_color?`color:${p.ss_icon_color};`:"")+(p.ss_icon_size?`--mdc-icon-size:${p.ss_icon_size}px;width:${p.ss_icon_size}px;height:${p.ss_icon_size}px;`:""),M0=g1=>{if(!z2)return S;let N1=g1==="sunrise"?p.sunrise_icon||"mdi:weather-sunset-up":p.sunset_icon||"mdi:weather-sunset-down";return x`<ha-icon class="wsfc-sunarc-ssicon" .icon=${N1} style=${j5}></ha-icon>`},S0=(g1,N1,Z2,k2)=>{let s5=x`<div class="wsfc-sunarc-endtext">
        ${B3?x`<div class="wsfc-sunarc-time" style=${g7}>${g1}</div>`:S}
        ${v1?x`<div class="wsfc-sunarc-cap" style=${D3}>${N1}</div>`:S}
      </div>`,Z5=M0(k2);return x`<div class="wsfc-sunarc-end${Z2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${j1==="above"?"column":j1==="below"?"column-reverse":j1==="right"?"row-reverse":"row"};">${Z5}${s5}</div>
      </div>`},d0=B3||v1||z2,K2=d0?x`<div class="wsfc-sunarc-labels">
          ${S0(this._wfcFmtTime(v,S2),"sunrise",!1,"sunrise")}
          ${S0(this._wfcFmtTime(_,S2),"sunset",!0,"sunset")}
        </div>`:S,M2=p.labels_position;M2==="below"||M2==null?M2=0:M2==="above"?M2=100:M2==="mid"?M2=50:M2=n(Number(M2),0,100);let n5=p.baseline_mode==="sky"&&d.sun_position,d2=n5?this._wfcRenderSunPosition(d,m):S,G5=n5&&d2!==S?S:Z1`<line class="wsfc-sunarc-horizon" x1="0" y1="${K1}" x2="${p1}" y2="${K1}"></line>`,_7=x`
      <div class="wsfc-sunarc-svg-wrap" style="height:${U2}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${p1} 100" preserveAspectRatio="none">
          ${G5}
          <path class="wsfc-sunarc-path" d=${p5.trim()}></path>
          ${U5}
          ${L0}
        </svg>
        ${y5}
        ${d0&&M2>0&&M2<100?x`<div class="wsfc-sunarc-overlay" style="top:${(100-M2).toFixed(1)}%;transform:translateY(-50%);">${K2}</div>`:S}
      </div>
    `;return x`
      <div class="wsfc-sunarc-section">
        ${d0&&M2>=100?K2:S}
        ${_7}
        ${n5&&d2!==S?x`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-K1)/100)*U2).toFixed(1)}px;">${d2}</div>`:S}
        ${d0&&M2<=0?K2:S}
      </div>
    `},H1._wfcStyleTag=function(){return x`<style>
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
    </style>`};let q=n0.prototype,u6=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),A4={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},F3=null;function h6(){return F3||(F3=new Set,Object.values(v7).forEach(d=>d.forEach(m=>F3.add(m)))),F3}function v4(d,m){let p=[];return d.forEach(v=>{if(!m.has(v.name))if(v.schema){let _=v4(v.schema,m);_.length&&p.push({...v,schema:_})}else p.push(v)}),p}function re(d){let m=h6(),p=new Set([...m,...u6]);d=v4(d,p);let v=new Map,_=[];d.forEach(W=>{u6.has(W.name)||(W.type==="expandable"?_.push(W):v.set(W.name,W))});let Z=W=>W.map(z=>v.get(z)).filter(Boolean),y=(W,z,o1)=>{let l1=Z(o1);return l1.length?[{name:W,type:"expandable",flatten:!0,icon:z,schema:l1}]:[]},E=W=>_.find(z=>z.name===W),B=[];{let W=E("attribute_entities");W&&B.push(A4.attribute_entities?{...W,icon:A4.attribute_entities}:W)}return B}let Ei=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],ie=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],oe=["tap_action","hold_action","double_tap_action"],ae=["show_condition_effects"],Ce=[],v7={current:["current.show_attributes"],hourly:[],daily:[]},m6={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},ne="Weather Flex sections";q.render=function(){if(!this.hass||!this._config)return S;let d=At(this._config),m=this._getSelectedAttributes(d),p=this._schema(this.localize.bind(this),m,d["forecast.mode"]),v=re(p),_=y=>m6[y.name]||this._computeLabel(y)||y.name,Z=this._wfcAccordionEnabled();return x`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?S:x`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${ne}</span>
          <span class="wsfc-ed-ver">build ${r}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${Z}
            @change=${y=>this._wfcSetAccordion(y.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>`}
      ${v.length?x`<ha-form
            .hass=${this.hass}
            .data=${d}
            .schema=${v}
            .computeLabel=${_}
            .computeHelper=${y=>this._wfcHelper(y)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:S}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},q._wfcCardAppearancePanel=function(){let d=c2(this._config).card||{},m="card";return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${A4.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(ae)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!d.border_enabled,p=>this._wfcToggleSecField(m,"border_enabled",p))}
            ${d.border_enabled?x`
                  ${this._wfcColorField("Border color",d.border_color,p=>this._wfcSetSecField(m,"border_color",p.target.value))}
                  ${this._wfcNumField(m,"border_width","Border width","px",d.border_width,1)}
                  ${this._wfcNumField(m,"border_radius","Corner radius","px",d.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",d.border_top!==!1,p=>this._wfcToggleSecField(m,"border_top",p))}
                    ${this._wfcCheckbox("Bottom",d.border_bottom!==!1,p=>this._wfcToggleSecField(m,"border_bottom",p))}
                    ${this._wfcCheckbox("Left",d.border_left!==!1,p=>this._wfcToggleSecField(m,"border_left",p))}
                    ${this._wfcCheckbox("Right",d.border_right!==!1,p=>this._wfcToggleSecField(m,"border_right",p))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",d.corner_tl!==!1,p=>this._wfcToggleSecField(m,"corner_tl",p))}
                    ${this._wfcCheckbox("Top-right",d.corner_tr!==!1,p=>this._wfcToggleSecField(m,"corner_tr",p))}
                    ${this._wfcCheckbox("Bottom-right",d.corner_br!==!1,p=>this._wfcToggleSecField(m,"corner_br",p))}
                    ${this._wfcCheckbox("Bottom-left",d.corner_bl!==!1,p=>this._wfcToggleSecField(m,"corner_bl",p))}
                  </div>`:S}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",d.bg_color,p=>this._wfcSetSecField(m,"bg_color",p.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!d.glow_enabled,p=>this._wfcToggleSecField(m,"glow_enabled",p))}
            ${d.glow_enabled?x`
                  ${this._wfcColorField("Glow color",d.glow_color,p=>this._wfcSetSecField(m,"glow_color",p.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((d.glow_intensity==null?1:d.glow_intensity)*100),100,"glow_intensity",p=>this._wfcSetSecField(m,"glow_intensity",n((parseInt(p.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",d.glow_borders_only!==!1,p=>this._wfcToggleSecField(m,"glow_borders_only",p))}`:S}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!d.shadow_enabled,p=>this._wfcToggleSecField(m,"shadow_enabled",p))}
            ${d.shadow_enabled?x`
                  ${this._wfcColorField("Shadow color",d.shadow_color,p=>this._wfcSetSecField(m,"shadow_color",p.target.value))}
                  ${this._wfcNumField(m,"shadow_x","Offset X","px",d.shadow_x,0)}
                  ${this._wfcNumField(m,"shadow_y","Offset Y","px",d.shadow_y,4)}
                  ${this._wfcNumField(m,"shadow_blur","Blur","px",d.shadow_blur,16)}
                  ${this._wfcNumField(m,"shadow_spread","Spread","px",d.shadow_spread,0)}
                  ${this._wfcNumField(m,"shadow_opacity","Opacity","%",d.shadow_opacity,35)}`:S}
          </div>
        </div>
      </details>
    `};let x4=4;q._wfcEdSources=function(){return p6(this._config,this.hass)},q._wfcCommitSources=function(d){let m=d.filter(W=>W&&W.ref).map(W=>{let z={};for(let l1 in W.overrides||{})W.overrides[l1]&&(z[l1]=W.overrides[l1]);let o1={ref:W.ref};return Object.keys(z).length&&(o1.overrides=z),W.disabled&&(o1.disabled=!0),o1}),p={...this._config.metric_sources||{}};delete p.primary,delete p.fallback,delete p.custom,delete p.device_map,m.length?p.sources=m:delete p.sources;let v={...this._config,metric_sources:p},_=W=>{let z=this.hass&&this.hass.states[W],o1=z&&z.attributes&&z.attributes.supported_features;return typeof o1=="number"&&(o1&7)!==0},Z=W=>W.map(z=>z.ref).filter(z=>typeof z=="string"&&z.startsWith("weather.")),y=Z(m.filter(W=>!W.disabled)),E=Z(m),B=y.find(_)||y[0]||E.find(_)||E[0];B&&(v.entity=B),Object.keys(p).length===0&&delete v.metric_sources,H2(this,"config-changed",{config:v})},q._wfcSetSourceRef=function(d,m){let p=this._wfcEdSources();p[d]&&(m?p[d]={ref:m,overrides:p[d].overrides||{}}:p.splice(d,1),this._wfcCommitSources(p))},q._wfcAddSource=function(d){if(!d)return;let m=this._wfcEdSources();m.length>=x4||(m.push({ref:d,overrides:{}}),this._wfcCommitSources(m))},q._wfcMoveSource=function(d,m){let p=this._wfcEdSources(),v=d+m;if(d<0||v<0||v>=p.length)return;let _=p[d];p[d]=p[v],p[v]=_,this._wfcCommitSources(p)},q._wfcRemoveSource=function(d){let m=this._wfcEdSources();d<0||d>=m.length||(m.splice(d,1),this._wfcCommitSources(m))},q._wfcToggleSourceDisabled=function(d){let m=this._wfcEdSources();m[d]&&(m[d].disabled=!m[d].disabled,this._wfcCommitSources(m))},q._wfcSetSourceOverride=function(d,m,p){let v=this._wfcEdSources();if(!v[d])return;let _={...v[d].overrides||{}};p?_[m]=p:delete _[m],v[d].overrides=_,this._wfcCommitSources(v)},q._wfcLiveValue=function(d,m){let p=this.hass&&this.hass.states[d];if(!p)return"";let v,_;return d.startsWith("weather.")?(v=p.attributes?p.attributes[m]:null,_=p.attributes&&p.attributes[m+"_unit"]):(v=p.state,_=p.attributes&&p.attributes.unit_of_measurement),v==null||v===""||v==="unknown"||v==="unavailable"?"":_?`${v} ${_}`:`${v}`},q._wfcAvailableMetrics=function(){let d=new Set;if(!this.hass)return d;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let v of this._wfcEdSources())if(!v.disabled)if(v.overrides&&Object.keys(v.overrides).forEach(_=>{d.add(_),m.add(v.overrides[_])}),r2(v.ref)){let _=K0(this._config,this.hass,b2(v.ref));Object.keys(_).forEach(Z=>{d.add(Z),m.add(_[Z])})}else v.ref&&m.add(v.ref);m.forEach(v=>{let _=this.hass.states[v];_&&_.attributes&&Object.keys(_.attributes).forEach(Z=>d.add(Z))});let p=v=>{if(Array.isArray(v))for(let _ of v)_&&Object.keys(_).forEach(Z=>d.add(Z))};return p(this._hourlyForecastData),p(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(v=>{v&&(p(v.hourly),p(v.daily))}),d};function se(d){return String(d).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let b5={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function h1(d){return b5[d]||se(d)}q._wfcMetricOptions=function(d,m){let p=this._wfcAvailableMetrics(),v=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(d||[]).forEach(_=>{let Z=h1(_);v.push({value:_,label:p.has(_)?Z:`${Z} (unavailable)`})}),v},q._wfcSourceMappingEditor=function(d,m){let p=m.ref,v=m.overrides||{},_=r2(p),Z=_?b2(p):null,y=_?f7(this.hass,Z):{},E=z=>{if(_)return y[z]||"";if(!p)return"";if(p.startsWith("weather.")){let o1=this.hass&&this.hass.states[p];return o1&&o1.attributes&&o1.attributes[z]!=null?p:""}return""},B=_?{include_entities:$3(this.hass,Z)}:{},W=z=>{let o1=z.key,l1=v[o1]||E(o1),R=!!v[o1],p1=l1?this._wfcLiveValue(l1,o1):"",K1=[{name:"e",selector:{entity:B}}],R1=R?" (override)":l1?"":" \u2014 none";return x`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:l1}}
            .schema=${K1}
            .computeLabel=${()=>z.label+R1}
            @value-changed=${D1=>this._wfcSetSourceOverride(d,o1,D1.detail&&D1.detail.value&&D1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${p1||"\u2014"}</span>
        </div>
      `};return x`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${_?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${_?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${Q0.map(W)}
        </div>
      </details>
    `},q._wfcSourceSummaryList=function(d){let m=d.ref,p=d.overrides||{},v=r2(m),_=v?f7(this.hass,b2(m)):{},Z=E=>{if(p[E])return p[E];if(v)return _[E]||"";if(m&&m.startsWith("weather.")){let B=this.hass&&this.hass.states[m];return B&&B.attributes&&B.attributes[E]!=null?m:""}return""},y=[];return Q0.forEach(E=>{let B=Z(E.key);if(!B)return;let W=this._wfcLiveValue(B,E.key);y.push(x`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${E.label}</span>
          <span class="wsfc-cond-ent" title=${B}>${B}</span>
          <span class="wsfc-cond-val">${W||"\u2014"}</span>
        </div>
      `)}),y.length?x`<div class="wsfc-cond-list">${y}</div>`:S},q._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},q._wfcToggleSrcMap=function(d){let m=this._wfcSrcMapOpen();m.has(d)?m.delete(d):m.add(d),this.requestUpdate&&this.requestUpdate()},q._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},q._wfcSourceMetricCount=function(d){let m=d.ref,p=d.overrides||{},v=new Set(Object.keys(p).filter(_=>p[_]));if(r2(m))Object.keys(K0(this._config,this.hass,b2(m))).forEach(_=>v.add(_));else if(m&&m.startsWith("weather.")){let _=this.hass&&this.hass.states[m];_&&_.attributes&&Q0.forEach(Z=>{_.attributes[Z.key]!=null&&v.add(Z.key)})}return v.size},q._wfcSourceRow=function(d,m,p){let v=d.ref,_=r2(v),Z=this._config.entity,y=_&&this.hass&&this.hass.devices&&this.hass.devices[b2(v)],E=_?y&&(y.name_by_user||y.name)||b2(v):v,B=_?"Device":v&&v.startsWith("weather.")?"Weather":"Sensor",W=_?"mdi:access-point":v&&v.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",z=!_&&v&&v.startsWith("weather."),o1=z&&v===Z,l1=this._wfcSrcMapOpen().has(v),R=!!d.disabled,p1=this._wfcSourceMetricCount(d),K1=`${p1} value${p1===1?"":"s"} mapped`,R1=o1?x`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:z?x`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:x`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,D1="",X1=v&&!_?this.hass&&this.hass.states[v]:null;if(_)D1=p1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!X1)D1=`\u26A0 Entity not found: ${v}`;else if(X1.state==="unavailable"||X1.state==="unknown")D1=`\u26A0 Currently ${X1.state}.`;else if(z&&!o1){let u1=X1.attributes&&X1.attributes.supported_features;D1=typeof u1=="number"&&(u1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else z||(D1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return x`
      <div class="wsfc-src-row ${R?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${W}></ha-icon>
          <span class="wsfc-src-name">${E} <span class="wsfc-src-type">${B}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===p-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${R?"mdi:eye-off":"mdi:eye"} title=${R?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${l1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(v)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${R1}<span class="wsfc-src-count">${K1}</span>${R?x`<span class="wsfc-src-count">· hidden</span>`:S}</div>
        ${D1?x`<div class="wsfc-src-detail">${D1}</div>`:S}
        ${this._wfcSourceSummaryList(d)}
        ${l1?this._wfcSourceMappingEditor(m,d):S}
      </div>
    `},q._wfcWeatherSourcesPanel=function(){let d=this._wfcEdSources(),m=d.some(y=>y.ref&&!r2(y.ref)&&y.ref.startsWith("weather.")),p=d.length>=x4,v=!!this.__wfcAddSourceOpen&&!p,_=x`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${y=>{let E=y.detail&&y.detail.value&&y.detail.value.e;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(E))}}
      ></ha-form>`,Z=x`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${y=>{let E=y.detail&&y.detail.value&&y.detail.value.d;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(d5+E))}}
      ></ha-form>`;return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${p?x`<p class="wsfc-hint">Maximum of ${x4} sources reached. Remove one to add another.</p>`:x`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${v?"mdi:close":"mdi:plus"}></ha-icon>${v?"Cancel":"Add Source"}
              </div>
              ${v?x`<div class="wsfc-add-pickers">${_}${Z}</div>`:S}
            `}
          ${d.length?d.map((y,E)=>this._wfcSourceRow(y,E,d.length)):x`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!m&&d.length?x`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:S}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},q._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},q._wfcHeadlineTempRow=function(){let d=this._config.current&&this._config.current.temperature_entity,m=d||"",p="";if(!m)for(let Z of this._wfcEdSources()){if(Z.disabled)continue;let y=this._wfcSlotEntityForKeyEd(Z,"temperature");if(y&&this.hass&&this.hass.states[y]){m=y;break}}m?p=this.hass&&this.hass.states[m]&&this.hass.states[m].attributes&&this.hass.states[m].attributes.friendly_name||m:p="\u2014 none available \u2014";let v=m?this._wfcLiveValue(m,"temperature"):"",_=!!this.__wfcHeadlineEdit;return x`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${p}${d?x` <span class="wsfc-src-type">override</span>`:S}</span>
          ${v?x`<span class="wsfc-srcmap-live">${v}</span>`:S}
          <ha-icon class="wsfc-ico-btn ${_?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${_?x`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:S}
      </div>
    `},q._wfcSlotEntityForKeyEd=function(d,m){if(d.overrides&&d.overrides[m])return d.overrides[m];let p=d.ref;if(!p)return null;if(r2(p))return K0(this._config,this.hass,b2(p))[m]||null;if(p.startsWith("weather.")){let v=this.hass&&this.hass.states[p];return v&&v.attributes&&v.attributes[m]!=null?p:null}return null},q._wfcSetForecastTypes=function(d,m){let p=d&&m?"both":d?"hourly":m?"daily":"both",v={...this._config,forecast_types:p};H2(this,"config-changed",{config:v})},q._wfcAdvancedPanel=function(){let d=this._config.forecast_types||"both",m=d==="both"||d==="hourly",p=d==="both"||d==="daily";return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",m,v=>this._wfcSetForecastTypes(v.target.checked,p))}
          ${this._wfcCheckbox("Daily",p,v=>this._wfcSetForecastTypes(m,v.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(Ce)}
        </div>
      </details>
    `},q._wfcUserActionsPanel=function(){let d=this._wfcStockFormFor(ie),m=this._wfcStockFormFor(oe),p=this._config.forecast||{};return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${d}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",p.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${m}
        </div>
      </details>
    `};let f6=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];q._wfcForecastTypeControls=function(d){let m=this._config.forecast||{},p=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],v=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],_=W=>m[`${W}_mode`]||m.mode||"simple",Z=W=>(m[`${W}_extra_attribute`]!=null?m[`${W}_extra_attribute`]:m.extra_attribute)||"none",y=W=>(m[`${W}_chart_attribute`]!=null?m[`${W}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",E=(W,z,o1)=>{let l1=m[`${W}_${z}`];if(l1!=null)return!!l1;let R=m[z];return R!=null?!!R:o1},B=_(d)==="chart";return x`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${d}_mode`,"Display mode",p,_(d),"simple")}
        ${this._wfcForecastSelect(`${d}_extra_attribute`,"Extra metric",v,Z(d),"none")}
      </div>
      ${B?x`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${d}_chart_attribute`,"Chart metric",f6,y(d),"temperature_and_precipitation")}
          </div>`:S}
      ${this._wfcConfigCheckbox(`forecast.${d}_show_sun_times`,"Show sunrise & sunset times",E(d,"show_sun_times",!0),!0)}
      ${B?x`
            ${this._wfcConfigCheckbox(`forecast.${d}_use_color_thresholds`,"Use color thresholds",E(d,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${d}_show_attribute_selector`,"Show metric selector",E(d,"show_attribute_selector",!1),!1)}`:S}
    `},q._wfcHelper=function(d){let m=this._computeHelper?this._computeHelper(d):void 0;return typeof m=="string"&&(m=m.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),m},q._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},q._wfcSetAccordion=function(d){let m=this._wfcState();m.editor_accordion=!!d,this._wfcCommit(m),this._wfcApplyAccordion()},q._wfcApplyAccordion=function(){let d=this.renderRoot||this.shadowRoot||this;!d||!d.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,d.addEventListener("toggle",m=>{let p=m.target;if(!p||!p.classList||!p.classList.contains("wsfc-panel")||(this._wfcRememberOpen(p),!p.open)||!this._wfcAccordionEnabled())return;(d.querySelectorAll?d.querySelectorAll("details.wsfc-panel"):[]).forEach(_=>{_!==p&&_.open&&(_.open=!1)})},!0))},q._wfcRememberOpen=function(d){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let m=this._wfcPanelKey(d);m&&(d.open?this.__wfcOpenPanels.add(m):this.__wfcOpenPanels.delete(m))},q._wfcPanelKey=function(d){let m=d.querySelector&&d.querySelector(".wsfc-panel-title");return m?(m.textContent||"").trim():""},q._wfcRestoreOpen=function(){let d=this.renderRoot||this.shadowRoot||this;!d||!d.querySelectorAll||!this.__wfcOpenPanels||d.querySelectorAll("details.wsfc-panel").forEach(m=>{let p=this._wfcPanelKey(m);p&&this.__wfcOpenPanels.has(p)&&(m.open=!0)})},q.updated=function(d){try{let m=Object.getPrototypeOf(q);m&&typeof m.updated=="function"&&m.updated.call(this,d)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},q._wfcEditorStyle=function(){return x`<style>
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
    </style>`};let A6="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";q._wfcCustomMetricsBody=function(){let d=l7(this._config.current&&this._config.current.show_attributes);return x`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${d.map((m,p)=>this._renderCustomAttributeRow(m,p))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${A6}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},q._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let x7={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function X0(d){if(d&&d.detail&&d.detail.value!==void 0)return d.detail.value;let m=d&&d.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function R3(d){let m=d&&d.target;return m&&typeof m.checked=="boolean"?m.checked:!!(d&&d.detail&&d.detail.value)}q._wfcState=function(){return JSON.parse(JSON.stringify(c2(this._config)))},q._wfcCommit=function(d){let m={...this._config,wfc:d};H2(this,"config-changed",{config:m})},q._wfcResetSection=function(d){let p=R2(this._config)[d];if(!p)return;let v=this._wfcState(),_=!!(v[d]&&v[d].show);v[d]={...JSON.parse(JSON.stringify(p)),show:_},this._wfcCommit(v)},q._wfcMoveSection=function(d,m){let p=this._wfcState(),v=p.order.indexOf(d),_=v+m;if(v<0||_<0||_>=p.order.length)return;let Z=p.order[v];p.order[v]=p.order[_],p.order[_]=Z,this._wfcCommit(p)},q._wfcCommitMetrics=function(d,m){let p=this._wfcState();p[d]||(p[d]={});let v=F(p[d]),_=v.map(y=>y.key),Z={};v.forEach(y=>Z[y.key]=y.pos),m(_,Z),p[d].forecast_metric_order=_,p[d].forecast_metric_pos=Z,delete p[d].forecast_temps,delete p[d].forecast_icons,delete p[d].forecast_extra,delete p[d].forecast_row_order,delete p[d].forecast_stack,this._wfcCommit(p)},q._wfcMoveMetric=function(d,m,p){this._wfcCommitMetrics(d,v=>{let _=v.indexOf(m),Z=_+p;if(_<0||Z<0||Z>=v.length)return;let y=v[_];v[_]=v[Z],v[Z]=y})},q._wfcSetMetricPos=function(d,m,p){this._wfcCommitMetrics(d,(v,_)=>{_[m]=p})},q._wfcSetMetricStyle=function(d,m,p,v){let _=this._wfcState();_[d]||(_[d]={});let Z={..._[d].forecast_metric_style||{}},y={...Z[m]||{}};v==null||v===""?delete y[p]:y[p]=v,Object.keys(y).length?Z[m]=y:delete Z[m],_[d].forecast_metric_style=Z,this._wfcCommit(_)},q._wfcMetricsOrder=function(d,m){let p=F(m),v=m.forecast_metric_style||{};return p.map((_,Z,y)=>{let E=v[_.key]||{},B=_.key==="icons",W=_.key!=="temps";return x`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${T[_.key]||_.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${z=>z.stopPropagation()}
              @change=${z=>this._wfcSetMetricPos(d,_.key,z.target.value)}
            >
              ${$.map(z=>x`<option value=${z.value} ?selected=${z.value===_.pos}>${z.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${Z===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${z=>{z.preventDefault(),z.stopPropagation(),this._wfcMoveMetric(d,_.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${Z===y.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${z=>{z.preventDefault(),z.stopPropagation(),this._wfcMoveMetric(d,_.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${z=>this._wfcSetMetricStyle(d,_.key,"every",z.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(z=>({value:String(z),label:z+(z>1?" hours":" hour")}))].map(z=>x`<option value=${z.value} ?selected=${z.value===(E.every!=null?String(E.every):"")}>${z.label}</option>`)}
              </select>
            </label>
            ${W?x`
                  ${this._wfcColorField("Icon color",E.icon_color,z=>this._wfcSetMetricStyle(d,_.key,"icon_color",z.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",E.icon_size,z=>this._wfcSetMetricStyle(d,_.key,"icon_size",parseFloat(X0(z))||""))}`:S}
            ${B?S:x`
                  ${this._wfcColorField("Text color",E.text_color,z=>this._wfcSetMetricStyle(d,_.key,"text_color",z.target.value))}
                  ${this._wfcPlainNum("Font size (px)",E.text_size,z=>this._wfcSetMetricStyle(d,_.key,"text_size",parseFloat(X0(z))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${z=>this._wfcSetMetricStyle(d,_.key,"contrast",z.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(z=>x`<option value=${z.value} ?selected=${z.value===(E.contrast||"")}>${z.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},q._wfcToggleSection=function(d,m){let p=this._wfcState();p[d]||(p[d]={}),p[d].show=R3(m),this._wfcCommit(p)},q._wfcToggleSectionShow=function(d){let m=this._wfcState();m[d]||(m[d]={}),m[d].show=!m[d].show,this._wfcCommit(m)},q._wfcSetSecNum=function(d,m,p){let v=this._wfcState(),_=parseFloat(X0(p));v[d][m]=isNaN(_)?void 0:_,this._wfcCommit(v)},q._wfcSetSecField=function(d,m,p){let v=this._wfcState();v[d]||(v[d]={}),v[d][m]=p,this._wfcCommit(v)},q._wfcToggleSecField=function(d,m,p){this._wfcSetSecField(d,m,R3(p))},q._wfcSetForecastNum=function(d,m){let p={...this._config.forecast||{}};m==null||m<=0?delete p[d]:p[d]=m,H2(this,"config-changed",{config:{...this._config,forecast:p}})},q._wfcSetConfigNum=function(d,m,p){let[v,_]=d.split("."),Z={...this._config},y={...Z[v]||{}},E=m==null||m===""||isNaN(Number(m))?null:Number(m);E==null?delete y[_]:y[_]=E,Z[v]=y,H2(this,"config-changed",{config:Z})},q._wfcConfigSlider=function(d,m,p,v,_){let Z=S5(d,p||""),y=v!=null?n(Number(v),Z.min,Z.max):Number(_);return this._wfcSliderTpl(m,p,Z,y,E=>this._wfcSetConfigNum(d,E.target.value,_))},q._wfcSetConfigStr=function(d,m,p){let v={...this._config};if(d.indexOf(".")===-1)p&&(m==null||m==="")?delete v[d]:v[d]=m;else{let[_,Z]=d.split("."),y={...v[_]||{}};p&&(m==null||m==="")?delete y[Z]:y[Z]=m,v[_]=y}H2(this,"config-changed",{config:v})},q._wfcConfigSelect=function(d,m,p,v,_,Z){let y=String(v??_);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${E=>this._wfcSetConfigStr(d,E.target.value,Z)}>
          ${p.map(E=>x`<option value=${String(E.value)} ?selected=${String(E.value)===y}>${E.label}</option>`)}
        </select>
      </label>
    `},q._wfcSetConfigBool=function(d,m,p){let v={...this._config},_=(Z,y)=>{m===!!p?delete Z[y]:Z[y]=m};if(d.indexOf(".")===-1)_(v,d);else{let[Z,y]=d.split("."),E={...v[Z]||{}};_(E,y),v[Z]=E}H2(this,"config-changed",{config:v})},q._wfcConfigCheckbox=function(d,m,p,v){let _=p==null?!!v:!!p;return this._wfcCheckbox(m,_,Z=>this._wfcSetConfigBool(d,Z.target.checked,v))},q._wfcConfigText=function(d,m,p,v){return x`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${m}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${p||""}
          placeholder=${v||""}
          @change=${_=>this._wfcSetConfigStr(d,_.target.value)}
        />
      </label>
    `},q._wfcSetForecastField=function(d,m){let p={...this._config.forecast||{}};m==null||m===""?delete p[d]:p[d]=m,H2(this,"config-changed",{config:{...this._config,forecast:p}})},q._wfcForecastSelect=function(d,m,p,v,_){let Z=String(v??_);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${y=>this._wfcSetForecastField(d,y.target.value)}>
          ${p.map(y=>x`<option value=${String(y.value)} ?selected=${String(y.value)===Z}>${y.label}</option>`)}
        </select>
      </label>
    `},q._wfcNumSecField=function(d,m,p,v){let _=parseFloat(X0(p));this._wfcSetSecField(d,m,isNaN(_)?v:_)},q._wfcMoveDetail=function(d,m){let p=this._wfcState(),v=p.details.items,_=v.findIndex(E=>E.key===d),Z=_+m;if(_<0||Z<0||Z>=v.length)return;let y=v[_];v[_]=v[Z],v[Z]=y,this._wfcCommit(p)},q._wfcToggleDetail=function(d,m){let p=this._wfcState(),v=p.details.items.find(_=>_.key===d);v&&(v.show=R3(m)),this._wfcCommit(p)},q._wfcToggleDetailShow=function(d){let m=this._wfcState(),p=m.details.items.find(v=>v.key===d);p&&(p.show=!p.show,this._wfcCommit(m))},q._wfcSetDetailValue=function(d,m,p){let v=this._wfcState(),_=v.details.items.find(Z=>Z.key===d);_&&(_[m]=p),this._wfcCommit(v)},q._wfcSetDetail=function(d,m,p){let v=this._wfcState(),_=v.details.items.find(y=>y.key===d);if(!_)return;let Z=X0(p);if(m==="icon_size"||m==="text_size"){let y=parseFloat(Z);Z=isNaN(y)?void 0:y}else(Z===""||Z==null)&&(Z=void 0);_[m]=Z,this._wfcCommit(v)},q._wfcColorField=function(d,m,p){if(/^(Day|Night) color$/.test(d))return this._wfcColorFieldHex(d,m,p);let v=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],_=m==null?"":String(m),Z=/background|bg$|^Chip background/i.test(d),y=_===""?"default":_==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(_)?"custom":/^var\(/.test(_)&&v.some(([z])=>z===_)?"theme":"css",E=/^#[0-9a-fA-F]{6}$/.test(_)?_:"#4fc3f7",B=z=>p({target:{value:z}}),W=z=>B(z==="default"?"":z==="transparent"?"transparent":z==="theme"?v.some(([o1])=>o1===_)?_:v[0][0]:z==="custom"?E:_||E);return x`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${d}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${z=>W(z.target.value)}>
          ${[["default","Not set"],...Z||y==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([z,o1])=>x`<option value=${z} ?selected=${z===y}>${o1}</option>`)}
        </select>
        ${y==="theme"?x`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${z=>B(z.target.value)}>${v.map(([z,o1])=>x`<option value=${z} ?selected=${z===_}>${o1}</option>`)}</select>`:y==="custom"?x`<input type="color" class="wsfc-color-input" .value=${E} @change=${z=>B(z.target.value)} />`:y==="css"?x`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${_} @change=${z=>B(z.target.value)} />`:S}
        ${y!=="default"&&y!=="transparent"?x`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${_}"></span>`:S}
      </div>
    `},q._wfcColorFieldHex=function(d,m,p){return x`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${d}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${m||"#888888"}
          @change=${p}
          @input=${p}
        />
        <span class="wsfc-color-hex">${m||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!m}
          @click=${()=>p({target:{value:""}})}
        >Reset</button>
      </div>
    `},q._wfcSelect=function(d,m,p,v,_,Z){if(this.wsfcHide&&this.wsfcHide.includes(m))return S;let y=String(_??Z);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${p}</span>
        <select
          class="wsfc-native-select"
          @change=${E=>this._wfcSetSecField(d,m,E.target.value)}
        >
          ${v.map(E=>x`<option value=${String(E.value)} ?selected=${String(E.value)===y}>${E.label}</option>`)}
        </select>
      </label>
    `};let g4={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function S5(d,m){return/chip_scale/.test(d)?{min:50,max:250,step:5}:/chip_columns/.test(d)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(d)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(d)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(d)?{min:0,max:100,step:1}:/header_icon_size/.test(d)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(d)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(d)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(d)?{min:-40,max:40,step:1}:/shadow_blur/.test(d)?{min:0,max:80,step:1}:/border_radius/.test(d)?{min:0,max:48,step:1}:/border_width/.test(d)?{min:0,max:12,step:1}:/hourly_slots/.test(d)?{min:0,max:48,step:1}:/daily_slots/.test(d)?{min:0,max:14,step:1}:/labels_position|opacity/.test(d)?{min:0,max:100,step:1}:/indent/.test(d)?{min:0,max:120,step:2}:/height/.test(d)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(d)?{min:8,max:100,step:1}:/font_size|_size$/.test(d)?{min:8,max:48,step:1}:/_width$/.test(d)?{min:1,max:12,step:1}:/_length$/.test(d)?{min:5,max:100,step:5}:/hourly_group_size/.test(d)?{min:1,max:4,step:1}:/temperature_precision/.test(d)?{min:0,max:2,step:1}:/hours/.test(d)?{min:1,max:48,step:1}:g4[m]||g4.px}q._wfcNumField=function(d,m,p,v,_,Z){if(this.wsfcHide&&this.wsfcHide.includes(m))return S;let y=S5(m,v||""),E=_!=null?Number(_):Number(Z);return this._wfcSliderTpl(p,v,y,E,B=>this._wfcNumSecField(d,m,B,Z))},q._wfcPlainSlider=function(d,m,p,v,_,Z){let y=S5(_||"",m||""),E=p!=null?Number(p):Number(v);return this._wfcSliderTpl(d,m,y,E,Z)},q._wfcSlotSlider=function(d,m,p){let v=S5(m,""),_=p!=null?n(Number(p),v.min,v.max):0,Z=y=>Number(y)<=0?"All":String(y);return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${v.min}
          max=${v.max}
          step=${v.step}
          .value=${String(_)}
          @input=${y=>{let E=y.target.closest(".wsfc-slider-row"),B=E&&E.querySelector(".wsfc-slider-num");B&&(B.textContent=Z(y.target.value))}}
          @change=${y=>this._wfcSetForecastNum(m,parseInt(y.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${Z(_)}></span></span>
      </div>
    `},q._wfcAutoSizeField=function(d,m,p){let v=S5(m,""),_=this._wfcState()[d]||{},Z=n(parseInt(_[m],10)||0,v.min,v.max),y=E=>Number(E)<=0?"Auto":`${E}px`;return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${p}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${v.min}
          max=${v.max}
          step=${v.step}
          .value=${String(Z)}
          @input=${E=>{let B=E.target.closest(".wsfc-slider-row"),W=B&&B.querySelector(".wsfc-slider-num");W&&(W.textContent=y(E.target.value))}}
          @change=${E=>this._wfcSetSecField(d,m,parseInt(E.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${y(Z)}></span></span>
      </div>
    `},q._wfcSliderTpl=function(d,m,p,v,_){let Z=m||"";return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${p.min}
          max=${p.max}
          step=${p.step}
          .value=${String(v)}
          @input=${y=>{let E=y.target.closest(".wsfc-slider-row"),B=E&&E.querySelector(".wsfc-slider-num");B&&(B.textContent=y.target.value)}}
          @change=${_}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(v)}></span>${Z}</span>
      </div>
    `},q._wfcCheckbox=function(d,m,p){return x`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!m} @change=${p} />
        <span>${d}</span>
      </label>
    `},q._wfcGroup=function(d){return d?x`<div class="wsfc-group-div"><span class="wsfc-group-label">${d}</span></div>`:x`<div class="wsfc-group-div"></div>`},q._wfcSubPanel=function(d,m){return x`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${d}</span></summary>
        <div class="wsfc-subpanel-body">${m}</div>
      </details>
    `},q._wfcFlushControls=function(d,m){return x`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",m.flush_edges,p=>this._wfcToggleSecField(d,"flush_edges",p))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",m.flush_top,p=>this._wfcToggleSecField(d,"flush_top",p))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",m.flush_bottom,p=>this._wfcToggleSecField(d,"flush_bottom",p))}
    `},q._wfcTextControls=function(d,m,p,v){let _=this._wfcState()[d]||{};return x`
      <div class="wsfc-sub-title">${p}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(d,`${m}_font_size`,"Size","px",_[`${m}_font_size`],v)}
        ${this._wfcSelect(d,`${m}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],_[`${m}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",_[`${m}_color`],Z=>this._wfcSetSecField(d,`${m}_color`,Z.target.value))}
    `};let _4=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];q._wfcDividerControls=function(d,m){return x`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",m.divider_above,p=>this._wfcToggleSecField(d,"divider_above",p))}
      ${m.divider_above?x`
            <div class="wsfc-row">
              ${this._wfcNumField(d,"divider_above_width","Thickness","px",m.divider_above_width,1)}
              ${this._wfcNumField(d,"divider_above_length","Length","%",m.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(d,"divider_above_style","Line style",_4,m.divider_above_style,"solid")}
            </div>`:S}

      ${this._wfcCheckbox("Section Divider Below",m.divider_below,p=>this._wfcToggleSecField(d,"divider_below",p))}
      ${m.divider_below?x`
            <div class="wsfc-row">
              ${this._wfcNumField(d,"divider_below_width","Thickness","px",m.divider_below_width,1)}
              ${this._wfcNumField(d,"divider_below_length","Length","%",m.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(d,"divider_below_style","Line style",_4,m.divider_below_style,"solid")}
            </div>`:S}

      ${m.divider_above||m.divider_below?this._wfcColorField("Divider color",m.divider_color,p=>this._wfcSetSecField(d,"divider_color",p.target.value)):S}
    `},q._wfcBackgroundControls=function(d,m){let p=!!m.background_enabled;return x`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",p,v=>this._wfcToggleSecField(d,"background_enabled",v))}
      ${p?x`
            ${this._wfcColorField("Background color",m.background_color,v=>this._wfcSetSecField(d,"background_color",v.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",m.background_opacity==null?80:m.background_opacity,80,"opacity",v=>this._wfcSetSecField(d,"background_opacity",n(parseInt(v.target.value,10)||0,0,100)))}`:S}
    `},q._wfcSectionStyles=function(d,m){return this._wfcSubPanel("Section Styles",x`
        ${this._wfcFlushControls(d,m)}
        ${this._wfcDividerControls(d,m)}
        ${this._wfcBackgroundControls(d,m)}`)},q._wfcStockForm=function(d){return this._wfcStockFormFor(v7[d])},q._wfcStockFormFor=function(d){if(!d||!d.length)return S;let m=At(this._config),p=this._getSelectedAttributes(m),v=this._schema(this.localize.bind(this),p,"chart"),_=new Map,Z=B=>B.forEach(W=>{W.schema?Z(W.schema):_.set(W.name,W)});Z(v);let y=d.map(B=>_.get(B)).filter(Boolean);if(!y.length)return S;let E=B=>m6[B.name]||this._computeLabel(B)||B.name;return x`
      <ha-form
        .hass=${this.hass}
        .data=${m}
        .schema=${y}
        .computeLabel=${E}
        .computeHelper=${B=>this._wfcHelper(B)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},q._wfcTitleControls=function(d,m){return x`
      ${this._wfcCheckbox("Show Title Row",m.title_show,p=>this._wfcToggleSecField(d,"title_show",p))}
      ${m.title_show?x`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${m.title_text||""}
                @change=${p=>this._wfcSetSecField(d,"title_text",p.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${m.title_icon||""}
              @value-changed=${p=>this._wfcSetSecField(d,"title_icon",p.detail&&p.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(d,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_text_align,"left")}
              ${this._wfcSelect(d,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(d,"title_font_size","Text size","px",m.title_font_size,15)}
            ${this._wfcSelect(d,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],m.title_font_weight,"600")}
            ${this._wfcNumField(d,"title_icon_size","Icon size","px",m.title_icon_size,20)}
            ${this._wfcNumField(d,"title_indent","Indent","px",m.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",m.title_color,p=>this._wfcSetSecField(d,"title_color",p.target.value))}
              ${this._wfcColorField("Icon color",m.title_icon_color,p=>this._wfcSetSecField(d,"title_icon_color",p.target.value))}
            </div>
          `:S}
    `},q._wfcSectionOptionsBody=function(d,m){let p=m[d]||{},v=d==="details",_=d==="current",Z=d==="sun_position",y=d==="sun_arc",E=d==="hourly",B=d==="daily",W=this._config.forecast||{},z=this._config.current||{},o1=n(parseInt(p.columns,10)||2,1,4),l1=this._wfcMetricOptions(typeof G2<"u"?G2:[],!0);return x`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(d)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(d,p)}
          ${_?x`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:S}
          ${_?x`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(d,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(d,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(d,"header_temp_size","Temperature size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",l1,z.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(d)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(d)}
          ${E?x`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",W.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",W.hourly_group_size,1)}`:S}
          ${B?x`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",W.daily_slots)}`:S}
          ${v?x`
                ${this._wfcGroup("Layout")}
                ${p.chips?x`
                      ${this._wfcSelect(d,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],p.chip_layout==="column"?"wrap":p.chip_layout||"wrap","wrap")}
                      ${(p.chip_layout||"wrap")==="grid"?x`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(p.chip_columns,10)>0,R=>this._wfcSetSecField(d,"chip_columns",R.target.checked?n(parseInt(p.chip_columns,10)||2,1,6):0))}
                            ${parseInt(p.chip_columns,10)>0?this._wfcNumField(d,"chip_columns","Columns","",parseInt(p.chip_columns,10)||2,2):S}`:S}`:x`
                      ${this._wfcSelect(d,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],p.details_layout||"grid","grid")}
                      ${(p.details_layout||"grid")==="grid"?this._wfcNumField(d,"columns","Columns","",o1,2):S}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!p.chips,R=>this._wfcToggleSecField(d,"chips",R))}
                ${p.chips?x`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",p.chip_pill!=null?!!p.chip_pill:p.chip_shape!=="rounded"&&p.chip_shape!=="square",R=>this._wfcSetSecField(d,"chip_pill",R.target.checked))}
                      ${(p.chip_pill!=null?p.chip_pill:p.chip_shape!=="rounded"&&p.chip_shape!=="square")?S:this._wfcNumField(d,"chip_radius","Corner radius (0 = square)","px",p.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((p.chip_scale==null?1:p.chip_scale)*100),100,"chip_scale",R=>this._wfcSetSecField(d,"chip_scale",n((parseInt(R.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(d,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",p.chip_text_color,R=>this._wfcSetSecField(d,"chip_text_color",R.target.value))}
                      ${this._wfcColorField("Chip background",p.chip_bg,R=>this._wfcSetSecField(d,"chip_bg",R.target.value))}
                      ${this._wfcColorField("Chip border",p.chip_border_color,R=>this._wfcSetSecField(d,"chip_border_color",R.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",p.chip_show_icon!==!1,R=>this._wfcToggleSecField(d,"chip_show_icon",R))}
                      ${p.chip_show_icon!==!1?x`
                            ${this._wfcSelect(d,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],p.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(d,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",p.chip_icon_color,R=>this._wfcSetSecField(d,"chip_icon_color",R.target.value))}`:S}
                      ${this._wfcCheckbox("Show metric name in chip",!!p.chip_show_name,R=>this._wfcToggleSecField(d,"chip_show_name",R))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!p.chip_hide_when_off,R=>this._wfcToggleSecField(d,"chip_hide_when_off",R))}`:S}

                ${p.chips?x`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(m)}`:x`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(d,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(d,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",p.global_icon_color,R=>this._wfcSetSecField(d,"global_icon_color",R.target.value))}
                        ${this._wfcColorField("Text color",p.global_text_color,R=>this._wfcSetSecField(d,"global_text_color",R.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(m)}`}
              `:S}

          ${Z?x`
                ${this._wfcSubPanel("Time",x`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?S:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(d,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],p.timeframe_mode,"hours")}
                      ${p.timeframe_mode==="hours"||p.timeframe_mode==null?x`
                            ${this._wfcNumField(d,"timeframe_hours","Hours","",p.timeframe_hours,24)}
                            ${this._wfcSelect(d,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],p.timeframe_anchor,"now_left")}
                          `:S}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(d,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],p.times_position==="center"?"overlay":p.times_position,"below")}
                      ${this._wfcSelect(d,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],p.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(d,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(R=>({value:R,label:R+(R>1?" hours":" hour")}))],p.ticks_every==null?0:p.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(d,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",x`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",p.marker_color,R=>this._wfcSetSecField(d,"marker_color",R.target.value))}
                      ${this._wfcNumField(d,"marker_opacity","Marker opacity","%",p.marker_opacity==null?100:p.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",x`
                    <div class="wsfc-row">
                      ${this._wfcSelect(d,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],p.ss_markers_position,"hidden")}
                    </div>
                    ${p.ss_markers_position&&p.ss_markers_position!=="hidden"?x`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",p.ss_markers_color,R=>this._wfcSetSecField(d,"ss_markers_color",R.target.value))}
                          ${this._wfcNumField(d,"ss_markers_opacity","Marker opacity","%",p.ss_markers_opacity==null?100:p.ss_markers_opacity,100)}
                        </div>`:S}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",x`
                    ${this._wfcSubPanel("Metrics Defaults",x`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!p.forecast_metric_detail_icons,R=>this._wfcToggleSecField(d,"forecast_metric_detail_icons",R))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!p.forecast_temp_with_icon,R=>this._wfcToggleSecField(d,"forecast_temp_with_icon",R))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(d,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(R=>({value:R,label:R+(R>1?" hours":" hour")}))],p.forecast_every,3)}
                          ${this._wfcNumField(d,"forecast_font_size","Text size","px",p.forecast_font_size,11)}
                          ${this._wfcNumField(d,"forecast_icon_size","Icon size","px",p.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",p.forecast_temp_color,R=>this._wfcSetSecField(d,"forecast_temp_color",R.target.value))}
                        ${this._wfcColorField("Icon color",p.forecast_icon_color,R=>this._wfcSetSecField(d,"forecast_icon_color",R.target.value))}
                        ${b.some(R=>p.forecast_metric_pos&&p.forecast_metric_pos[R]&&p.forecast_metric_pos[R]!=="hidden"||k(p).includes(R))?this._wfcColorField("Metric Text Color",p.forecast_extra_color,R=>this._wfcSetSecField(d,"forecast_extra_color",R.target.value)):S}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(d,p)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",x`
                    ${this._wfcNumField(d,"height","Bar height","px",p.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",p.weather_adjust!==!1,R=>this._wfcToggleSecField(d,"weather_adjust",R))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",p.day_color,R=>this._wfcSetSecField(d,"day_color",R.target.value))}
                      ${this._wfcColorField("Night color",p.night_color,R=>this._wfcSetSecField(d,"night_color",R.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(d,p)}
              `:S}

          ${y?x`
                <div class="wsfc-row">
                  ${this._wfcNumField(d,"height","Arc height","px",p.height,90)}
                  ${this._wfcSelect(d,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],p.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?S:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(d,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],p.timeframe_mode,"sunrise_sunset")}
                  ${p.timeframe_mode==="hours"?x`
                        ${this._wfcNumField(d,"timeframe_hours","Hours","",p.timeframe_hours,24)}
                        ${this._wfcSelect(d,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],p.timeframe_anchor,"now_left")}
                      `:S}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",X(p.labels_position),0,"labels_position",R=>this._wfcSetSecField(d,"labels_position",n(parseInt(R.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${p.sun_icon||""}
                  @value-changed=${R=>this._wfcSetSecField(d,"sun_icon",R.detail&&R.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?S:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!p.night_moon,R=>this._wfcToggleSecField(d,"night_moon",R))}
                ${p.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?x`<ha-icon-picker
                      label="Moon icon"
                      .value=${p.moon_icon||"mdi:weather-night"}
                      @value-changed=${R=>this._wfcSetSecField(d,"moon_icon",R.detail&&R.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:S}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(d,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],p.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",p.show_arc_ticks,R=>this._wfcToggleSecField(d,"show_arc_ticks",R))}
                ${this._wfcCheckbox("Show tick marks on the baseline",p.show_base_ticks!==!1,R=>this._wfcToggleSecField(d,"show_base_ticks",R))}
                <div class="wsfc-row">
                  ${this._wfcSelect(d,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],p.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",p.tick_color,R=>this._wfcSetSecField(d,"tick_color",R.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",p.show_times!==!1,R=>this._wfcToggleSecField(d,"show_times",R))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",p.show_captions!==!1,R=>this._wfcToggleSecField(d,"show_captions",R))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",p.show_ss_icons,R=>this._wfcToggleSecField(d,"show_ss_icons",R))}
                ${p.show_ss_icons?x`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${p.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${R=>this._wfcSetSecField(d,"sunrise_icon",R.detail&&R.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${p.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${R=>this._wfcSetSecField(d,"sunset_icon",R.detail&&R.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(d,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],p.ss_icon_position,"left")}
                        ${this._wfcNumField(d,"ss_icon_size","Icon size","px",p.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",p.ss_icon_color,R=>this._wfcSetSecField(d,"ss_icon_color",R.target.value))}
                    `:S}

                ${this._wfcTextControls(d,"time","Time text",13)}
                ${this._wfcTextControls(d,"caption","Sunrise / sunset caption",11)}
              `:S}

          ${Z?S:this._wfcSectionStyles(d,p)}
        </div>
    `};let v6={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};q._wfcPlainNum=function(d,m,p){return this._wfcPlainSlider(d,"px",m,16,"_size",p)},q._wfcDetailRows=function(d){return d.details.items.map((p,v,_)=>{let Z=o[p.key]||{};return x`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${p.icon||Z.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${Z.label||p.key}</span>
            <ha-icon class="wsfc-ico-btn ${v===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveDetail(p.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${v===_.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveDetail(p.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${p.show?"mdi:eye":"mdi:eye-off"} title=${p.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcToggleDetailShow(p.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${Z.icon||""}
              .value=${p.icon||""}
              @value-changed=${y=>this._wfcSetDetail(p.key,"icon",y)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetDetailValue(p.key,"mode",y.target.value)}>
                <option value="global" ?selected=${p.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${p.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${p.mode==="custom"?x`
                  ${this._wfcPlainNum("Icon size (px)",p.icon_size,y=>this._wfcSetDetail(p.key,"icon_size",y))}
                  ${this._wfcPlainNum("Text size (px)",p.text_size,y=>this._wfcSetDetail(p.key,"text_size",y))}
                  ${this._wfcColorField("Icon color",p.icon_color,y=>this._wfcSetDetail(p.key,"icon_color",y))}
                  ${this._wfcColorField("Text color",p.text_color,y=>this._wfcSetDetail(p.key,"text_color",y))}
                `:S}
          </div>
        </details>
      `})};let x6=["current","details","hourly","daily","sun_arc","sun_position"];function He(d){let m=x6.filter(v=>d.includes(v)),p=d.filter(v=>!x6.includes(v));return[...m,...p]}q._wfcEditor=function(){let d=c2(this._config),m=He(d.order),p=d.order.map((_,Z,y)=>{let E=!!(d[_]&&d[_].show);return x`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${v6[_]||x7.options}></ha-icon>
          <span class="wsfc-order-name">${i[_]||_}</span>
          <ha-icon class="wsfc-ico-btn ${Z===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(_,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${Z===y.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(_,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${E?"mdi:eye":"mdi:eye-off"} title=${E?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(_)}></ha-icon>
        </div>
      `}),v=m.map(_=>x`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${v6[_]||x7.options}></ha-icon><span class="wsfc-panel-title">${i[_]||_}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(_,d)}
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${x7.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${p}
        </div>
      </details>
      ${v}
      ${this._wfcClockPanel(d)}
    `};let g6=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];q._wfcClockPanel=function(d){let m="current",p=d.current||{},v=Z=>Z==="above"?"above-center":Z==="below"?"below-center":Z,_=p.clock_show_time!==!1;return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",_,Z=>this._wfcToggleSecField(m,"clock_show_time",Z))}
                ${_?x`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",g6,v(p.clock_placement),"right")}
                        ${this._wfcSelect(m,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],p.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",p.clock_show_seconds,Z=>this._wfcToggleSecField(m,"clock_show_seconds",Z))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(m,"clock_font_size","Time size")}
                        ${this._wfcSelect(m,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],p.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",p.clock_color,Z=>this._wfcSetSecField(m,"clock_color",Z.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${p.clock_font_family||""}
                          @change=${Z=>this._wfcSetSecField(m,"clock_font_family",Z.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(m,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],p.clock_contrast,"none")}`:S}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",p.clock_show_date,Z=>this._wfcToggleSecField(m,"clock_show_date",Z))}
                ${p.clock_show_date?x`
                      ${this._wfcSelect(m,"clock_date_format","Date format",g2.map(Z=>({value:Z.value,label:Z.label})),p.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...g6],p.clock_date_placement==="above"||p.clock_date_placement==="below"?v(p.clock_date_placement):p.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(m,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",p.clock_date_color,Z=>this._wfcSetSecField(m,"clock_date_color",Z.target.value))}
                      </div>
                      ${this._wfcSelect(m,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],p.clock_date_contrast!=null?p.clock_date_contrast:p.clock_contrast,"none")}`:S}
        </div>
      </details>
    `},q._wfcYamlPanel=function(){let d;try{d=i1(this._config)}catch{d="# (unable to render YAML)"}return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${d}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,u2.__wfcResolve=c2,u2.__wfcBuild=r})();var k9=u2.prototype,mH=(r,t)=>({config:r,hass:t,_wfcSources:k9._wfcSources,_wfcSlotEntityForKey:k9._wfcSlotEntityForKey,_wfcMetricEntityChain:k9._wfcMetricEntityChain});function fH(r,t,e){return!r||!t?[]:k9._wfcMetricEntityChain.call(mH(r,t),e)}function y3(r,t,e){return fH(r,t,e).find(i=>!i.startsWith("weather."))||null}function x5(r,t,e){for(let i of fH(r,t,e)){let o=t.states[i];if(o){if(i.startsWith("weather.")){let a=o.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:hA(o,e),entity:i}}else if(!["unknown","unavailable",""].includes(o.state)){let a=Number(o.state);return{value:isNaN(a)?o.state:a,unit:o.attributes?.unit_of_measurement||"",entity:i}}}}return null}function hA(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function vt(r,t,e,i,o=i){return r?.entities?.[o]||y3(t,e,i)}var uH=new WeakMap;function ni(r,t){let e=t?.devices||{},i=JSON.stringify(r?.metric_sources?.sources||[]),o=uH.get(e);return o&&o.hass!==t&&(o.hass=t,Object.keys(e).length!==o.size0&&(o=null)),o||(o=new Map,o.size0=Object.keys(e).length,o.hass=t,uH.set(e,o)),o.has(i)||o.set(i,mA(r,t)),o.get(i)}function mA(r,t){let e=[],i=t?.devices||{};for(let o of r?.metric_sources?.sources||[]){if(o.disabled||typeof o.ref!="string"||!o.ref.startsWith("device:"))continue;let a=o.ref.slice(7);e.includes(a)||e.push(a);let n=i[a]?.config_entries||[];for(let[s,V]of Object.entries(i))!e.includes(s)&&(V.config_entries||[]).some(l=>n.includes(l))&&e.push(s)}return e}var hH=new WeakMap;function l4(r,t){let e=r?.entities;if(!e)return[];let i=hH.get(e);if(i&&i.hass!==r&&(i.hass=r,Object.keys(e).length!==i.size0&&(i=null)),!i){i=new Map;for(let o in e){let a=e[o]?.device_id;a&&(i.has(a)||i.set(a,[]),i.get(a).push(o))}i.size0=Object.keys(e).length,i.hass=r,hH.set(e,i)}return i.get(t)||[]}function O9(r,t){return ni(r,t).flatMap(e=>l4(t,e))}function AH(r,t,e){let i=O9(r,t).filter(o=>{let a=t.states[o];return a&&e.test(`${o} ${a.attributes?.friendly_name||""}`)});return i.find(o=>!/indoor|inside/i.test(o))||i[0]||null}function W2(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function vH(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>y3(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let o=i.filter(a=>W2(t,a)!=null).length;return o===i.length?"online":o?"partial":"offline"}function xH(r,t,e,i){return!e||!t?null:k9._wfcSlotEntityForKey.call(mH(r,t),e,i)||null}var fA={ecowitt:"Ecowitt",ecowitt_local:"Ecowitt Local",ha_ecowitt_iot:"Ecowitt Official",openweathermap:"OpenWeatherMap",pirateweather:"Pirate Weather",nws:"National Weather Service",met:"Met.no",accuweather:"AccuWeather",wunderground:"Weather Underground",weatherunderground:"Weather Underground",wundergroundpws:"Weather Underground PWS",tomorrowio:"Tomorrow.io",template:"Template",airnow:"AirNow",pollenlevels:"Pollen Levels (Google)",kleenex_pollenradar:"Kleenex Pollen Radar",silam_pollen:"SILAM Pollen"};function Z3(r,t){let e=t&&r?.entities?.[t]?.platform;return e?fA[e]||e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}var Li={aqi:{dc:"aqi",airnow:"aqi",re:/\baqi\b|air[\s_-]?quality[\s_-]?index/i,label:"AQI"},pm2_5:{dc:"pm25",airnow:"pm25",re:/pm[\s_.-]?2[\s_.-]?5/i,label:"PM2.5"},pm10:{dc:"pm10",airnow:"pm10",re:/pm[\s_.-]?10/i,label:"PM10"},ozone:{dc:"ozone",airnow:"o3",re:/\bo3\b|ozone/i,label:"Ozone"},co2:{dc:"carbon_dioxide",airnow:null,re:/\bco2\b|carbon[\s_-]?dioxide/i,label:"CO\u2082"}},gH=/indoor|inside/i,si=(r,t)=>{let e=r.states[t];return e&&!["unavailable","unknown"].includes(e.state)},AA=(r,t,e)=>{let i=r.states[t];if(!i||!t.startsWith("sensor."))return!1;let o=i.attributes?.device_class;return o?o===e.dc:e.re.test(`${t} ${i.attributes?.friendly_name||""}`)};function xt(r,t,e){let i=Li[e];if(!i||!t?.states)return null;let a=O9(r,t).filter(V=>AA(t,V,i)).filter(V=>!gH.test(`${V} ${t.states[V]?.attributes?.friendly_name||""}`));if(a.length)return a.find(V=>si(t,V))||a[0];let n=t.entities||{};if(i.airnow){let V=Object.keys(n).filter(l=>n[l]?.platform==="airnow"&&n[l]?.translation_key===i.airnow&&t.states[l]);if(V.length)return V.find(l=>si(t,l))||V[0]}return Object.keys(t.states).filter(V=>!V.startsWith("sensor.")||t.states[V].attributes?.device_class!==i.dc?!1:!gH.test(`${V} ${t.states[V].attributes?.friendly_name||""}`)).find(V=>si(t,V))||null}function wH(r,t){let e=r?.entities||{},i=e[t]?.device_id;return i&&Object.keys(e).find(o=>e[o]?.device_id===i&&e[o]?.translation_key==="station")||null}var s0=[{max:50,name:"Good",color:"#00e400"},{max:100,name:"Moderate",color:"#ffff00"},{max:150,name:"Unhealthy for sensitive groups",short:"Sensitive groups",color:"#ff7e00"},{max:200,name:"Unhealthy",color:"#ff0000"},{max:300,name:"Very unhealthy",color:"#8f3f97"},{max:1/0,name:"Hazardous",color:"#7e0023"}],T9=r=>r==null||isNaN(r)?null:s0.findIndex(t=>r<=t.max),_H={pm2_5:[9,35.4,55.4,125.4,225.4,325.4],pm10:[54,154,254,354,424,604],ozone:[.054,.07,.085,.105,.2,.604]},Hi=[0,50,100,150,200,300,500],li={benzene:{re:/benzene/i,unit:"ppb",t:[1,3,9,30],source:"ATSDR minimal risk levels (chronic 3 ppb, acute 9 ppb)"},co2:{re:/\bco2\b|carbon[\s_-]?dioxide/i,unit:"ppm",t:[1e3,2e3,5e3,1e4],source:"ASHRAE comfort guidance 1000 ppm; OSHA limit 5000 ppm"}},vA=(r,t)=>/ppb/i.test(t||"")?r/1e3:/µg|ug/i.test(t||"")?r/1960:r;function Vi(r,t){let e=0;for(let i=0;i<t.length;i++){if(r<=t[i])return Math.round(Hi[i]+(r-e)/(t[i]-e)*(Hi[i+1]-Hi[i]));e=t[i]}return 500}function gt(r,t,e,i){if(t==null||isNaN(t))return null;let o=Number(t);if(i?.length)return Vi(o,[...i]);if(_H[r])return Vi(r==="ozone"?vA(o,e):o,_H[r]);let a=li[r];return a?Vi(o,a.t):null}var Q1={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i},battery:{label:"Station battery",icon:"mdi:battery",color:"#66bb6a",digits:null,find:/batt/i,health:!0},signal:{label:"Station signal",icon:"mdi:signal",color:"#42a5f5",digits:0,find:/signal/i,health:!0},rssi:{label:"Station RSSI",icon:"mdi:wifi-strength-2",color:"#42a5f5",digits:0,find:/rssi/i,health:!0},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},aqi:{label:"AQI",icon:"mdi:air-filter",color:"#66bb6a",digits:0,aq:"aqi"},pm2_5:{label:"PM2.5",icon:"mdi:blur",color:"#ffb74d",digits:1,aq:"pm2_5"},pm10:{label:"PM10",icon:"mdi:blur-linear",color:"#a1887f",digits:0,aq:"pm10"},ozone:{label:"Ozone",icon:"mdi:molecule",color:"#4fc3f7",digits:3,aq:"ozone"},co2:{label:"CO\u2082",icon:"mdi:molecule-co2",color:"#4fc3f7",digits:0,aq:"co2"},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function g5(r,t,e,i){if(i)return i;let o=Q1[r];return o?o.key?y3(t,e,o.key):o.aq?xt(t,e,o.aq):o.find?AH(t,e,o.find):null:null}function c4(r,t,e){if(e!=null&&e!=="")return Number(e);let i=Q1[r]?.digits;return i??(/inHg/i.test(t)||t==="V"?2:/psi|kPa/i.test(t)?1:0)}function bH(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function SH(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var xA=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],M4=r=>r==null||isNaN(r)?"\u2014":xA[Math.round((r%360+360)%360/22.5)%16];var gA="pollenlevels",_A=new Set(["plants_in_season_today","overall_pollen_risk_today","top_pollen_types_today"]),_t={TREE:"mdi:tree",GRASS:"mdi:grass",WEED:"mdi:flower-tulip"},wA={ALDER:[1,2,3,4],ASH:[3,4,5],BIRCH:[3,4,5],COTTONWOOD:[3,4,5],ELM:[2,3,4],MAPLE:[2,3,4],OLIVE:[4,5,6],JUNIPER:[1,2,3,4],OAK:[3,4,5,6],PINE:[4,5,6],CYPRESS_PINE:[8,9,10],HAZEL:[1,2,3],GRAMINALES:[5,6,7,8],RAGWEED:[8,9,10],MUGWORT:[7,8,9],JAPANESE_CEDAR:[2,3,4],JAPANESE_CYPRESS:[3,4],TREE:[2,3,4,5,6],GRASS:[5,6,7,8],WEED:[8,9,10]},wt=["January","February","March","April","May","June","July","August","September","October","November","December"],bA={winter:[12,1,2],spring:[3,4,5],summer:[6,7,8],fall:[9,10,11],autumn:[9,10,11]};function yH(r,t=!1){if(!r||typeof r!="string")return[];let e=new Set,i=/\b(early|mid|late)?[\s-]*(winter|spring|summer|fall|autumn)\b/gi,o;for(;o=i.exec(r);){let a=bA[o[2].toLowerCase()],n=(o[1]||"").toLowerCase();(n==="early"?a.slice(0,2):n==="late"?a.slice(1):n==="mid"?[a[1]]:a).forEach(V=>e.add(V))}return[...e].map(a=>t?(a+5)%12+1:a).sort((a,n)=>a-n)}function SA(r,t){return r==null||isNaN(r)||r<=0?t===!1?"off":"none":r<=2?"low":r<=3?"medium":"high"}var bt={none:"None",low:"Low",medium:"Medium",high:"High",off:"Off season"},ZH=r=>{let t=Number(r);return r==null||r===""||isNaN(t)?null:t};function yA(r){let t=r?.entities||{},e=r?.devices||{},i=new Map;for(let o in t){let a=t[o];if(a?.platform!==gA||!o.startsWith("sensor."))continue;let n=r.states[o];if(!n)continue;let s=e[a.device_id]||{},l=(s.config_entries_subentries?JSON.stringify(s.config_entries_subentries):"")||(s.config_entries||[])[0]||"default";i.has(l)||i.set(l,{key:l,devices:new Set,plants:[],types:[],summary:{}});let M=i.get(l);if(a.device_id&&M.devices.add(a.device_id),a.entity_category)continue;if(_A.has(a.translation_key)){M.summary[a.translation_key]=o;continue}let u=n.attributes||{};u.code?M.plants.push(o):"category"in u&&M.types.push(o)}return[...i.values()]}function ZA(r,t,e,i){let o=r.states[t],a=o?.attributes||{},n=String(a.code||"").toUpperCase()||OA(a.icon)||TA(a.friendly_name),s=ZH(o?.state),V=ZH(a.tomorrow_value),l=a.trend;!l&&s!=null&&V!=null&&(l=V>s?"up":V<s?"down":"flat");let M=e?.[n]||e?.[a.code]||(yH(a.season,i).length?yH(a.season,i):kA(wA[n],i))||[],u=String(a.type||"").toUpperCase();return{entity:t,code:n,name:PA(a.friendly_name,r,t)||n,icon:_t[u]||_t[n]||a.icon||"mdi:flower-pollen",value:s,max:5,pct:s==null?0:Math.max(0,Math.min(100,s/5*100)),inSeason:a.inSeason??null,level:SA(s,a.inSeason),category:a.category||null,tomorrow:V,trend:l||null,color:a.color_hex||null,months:M||[]}}var kA=(r,t)=>r&&t?r.map(e=>(e+5)%12+1):r,OA=r=>Object.keys(_t).find(t=>_t[t]===r)||"",TA=r=>/grass/i.test(r||"")?"GRASS":/tree/i.test(r||"")?"TREE":/weed/i.test(r||"")?"WEED":"";function PA(r,t,e){if(!r)return"";let i=t.devices?.[t.entities?.[e]?.device_id],o=i?.name_by_user||i?.name;return o&&r.startsWith(o)&&r.slice(o.length).trim()||r}function St(r,t,e=new Date){let i=r||{},o=(t?.config?.latitude??0)<0,a=null,n;if(Array.isArray(i.entities)&&i.entities.length)n=i.entities.filter(T=>t.states[T]);else{let T=yA(t);if(a=i.device&&T.find($=>$.devices.has(i.device))||T[0]||null,!a)return{source:null,rows:[],entities:[]};n=i.view==="types"?a.types:a.plants.length?a.plants:a.types}let s=n.map(T=>ZA(t,T,i.seasons,o));if(Array.isArray(i.species)&&i.species.length)s=i.species.map($=>String($).toUpperCase()).map($=>s.find(F=>F.code===$||F.name.toUpperCase()===$)).filter(Boolean);else{s.sort(($,F)=>(F.value??-1)-($.value??-1)||+(F.inSeason===!0)-+($.inSeason===!0)||$.name.localeCompare(F.name));let T=Number(i.max_rows??6);T>0&&(s=s.slice(0,T))}let V=e.getMonth()+1,l=Array.from({length:12},(T,$)=>s.filter(F=>F.months.includes($+1)).length),M=s.filter(T=>(T.value??0)>0).sort((T,$)=>$.value-T.value)[0]||null,u=T=>(T.value??0)<=0,f=T=>(T.value??0)>0||T.inSeason===!0||T.inSeason==null&&T.months.includes(V),g=s.some(f),b=s;i.hide_off_season!==!1&&(s=s.filter(f)),i.hide_none!==!1&&(s=s.filter(T=>!u(T)));let k;M?k=`${M.name} ${bt[M.level].toLowerCase()} today`:g?k=i.show_nothing===!1?"":i.nothing_text||"In season, but nothing in the air today":k=["Out of season",EA(b,V)].filter(Boolean).join(" \xB7 ");let O=a?.summary||{};return{source:i.show_source===!1?"":i.source||(i.entities?.length?"Pollen":"Google"),town:i.show_location===!1?"":i.location||t?.config?.location_name||"",anyIn:g,top:M,status:k,rows:s,total:b.length,outOfSeason:b.length>0&&!g,allNone:b.length>0&&b.every(u),strip:l,month:V,entities:[...n,...Object.values(O)]}}function EA(r,t){let e=null;for(let i of r)if(i.months.length)for(let o=1;o<=12;o++){let a=(t-1+o)%12+1;if(i.months.includes(a)){(!e||o<e.d)&&(e={r:i,d:o,m:a});break}}return e?`${e.r.name} due in ${wt[e.m-1]}`:""}var Y0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function F2(r,t){if(!Y0(t))return t===void 0?r:t;let e={...Y0(r)?r:{}};for(let i of Object.keys(t))e[i]=Y0(t[i])&&Y0(e[i])?F2(e[i],t[i]):t[i];return e}function ci(r,t){if(Y0(r)&&Y0(t)){let e={};for(let i of Object.keys(r)){let o=ci(r[i],t[i]);o!==void 0&&(e[i]=o)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function z5(r){if(!Y0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let o=Y0(i)?z5(i):i;Y0(o)&&!Object.keys(o).length||(t[e]=o)}return t}var d4=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var E9="windrose-card",$A=()=>!!customElements.get(E9);function di(r){let t=r?.rose_engine||"auto";return t==="builtin"?"builtin":t==="windrose"||$A()?"windrose":"builtin"}var FA={mph:"mph","km/h":"kph","m/s":"mps",kn:"knot",kt:"knot",knots:"knot","ft/s":"fps",Beaufort:"bft"},RA=(r,t)=>({location:"bottom",buttons:r.map(([e,i,o])=>({type:"period_selector",button_text:e,period_back:i,...i===t?{active:!0}:{},...o||{}}))}),P9={standard:{label:"Standard \u2014 24 h, speed bar at the side, current direction",build:()=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"}})},periods:{label:"Period buttons \u2014 1 h / 8 h / 1 day / 7 days",build:()=>({windspeed_bar_location:"bottom",buttons_config:RA([["1 h","-1h"],["8 h","-8h"],["1 day","-1d"],["7 days","-7d",{use_statistics:!0,statistics_period:"hour"}]],"-1d")})},beaufort:{label:"Beaufort \u2014 speed and gust bars in Beaufort, live speed arrows",build:r=>({windspeed_bar_location:"bottom",data_period:{period_back:"-1d"},_speed:{speed_range_beaufort:!0,current_speed_arrow:!0,windspeed_bar_full:!0},_gust:{speed_range_beaufort:!0,current_speed_arrow:!0,windspeed_bar_full:!0,output_speed_unit:r}})},corners:{label:"Corner info \u2014 speed, direction and gust around the rose (sygad's style)",build:(r,t,e)=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"},rose_config:{center_circle:{text:"${calm-percentage}%"}},corner_info:{top_left:{label:"Speed",entity:t.speed,unit:` ${e}`,precision:1},top_right:{label:"Direction",entity:t.dir,input_unit:"degrees",output_unit:"letters"},...t.gust?{bottom_left:{label:"Gust",entity:t.gust,unit:` ${e}`,precision:1}}:{}}})},stats:{label:"Statistics \u2014 min / max / average speed and calm % under the rose",build:()=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"},text_blocks:{bottom:{...Mi({})}}})},playback:{label:"Playback \u2014 step through the last 10 days (hourly statistics)",build:()=>({windspeed_bar_location:"right",buttons_config:{location:"bottom",buttons:[{type:"period_shift",button_text:"\u221212 h",shift_period:"-12h"},{type:"period_selector",button_text:"24 h",period_back:"-1d",active:!0},{type:"period_shift",button_text:"+12 h",shift_period:"+12h"},{type:"period_shift_play",button_text:"\u25B6 10 days",period_back:"-10d",window_period:"-1d",step_period:"+3h",delay:150,use_statistics:!0,statistics_period:"hour"}]}})},minimal:{label:"Minimal \u2014 the rose only",build:()=>({hide_windspeed_bar:!0,data_period:{period_back:"-1d"},direction_labels:{show_intercardinal_directions:!1}})}},yt={min:["Min","min-speed"],avg:["Avg","average-speed"],max:["Max","max-speed"],median:["Median","median-speed"],p90:["P90","p90-speed"],calm:["Calm","calm-percentage","%"]},DA=["min","avg","max","p90","calm"];function Mi(r){let e=(Array.isArray(r?.stats_items)&&r.stats_items.length?r.stats_items:DA).filter(a=>yt[a]).map(a=>yt[a][0]+" ${"+yt[a][1]+"}"+(yt[a][2]||"")).join(" \xB7 "),i=[r?.stats_weight&&r.stats_weight!=="400"?`font-weight:${Number(r.stats_weight)}`:"",r?.stats_align&&r.stats_align!=="left"?`text-align:${r.stats_align}`:""].filter(Boolean).join(";");return{text:i?`<div style="${i}">${e}</div>`:e,text_size:Number(r?.stats_size)||13,text_color:r?.stats_color||"var(--secondary-text-color)"}}var BA=["top_left","top_right","bottom_left","bottom_right"];function kH(r,t,e){let i={speed:{label:"Speed",entity:t.speed,unit:` ${e}`,precision:1},direction:{label:"Direction",entity:t.dir,input_unit:"degrees",output_unit:"letters"},gust:t.gust?{label:"Gust",entity:t.gust,unit:` ${e}`,precision:1}:null},o={speed:r?.corner_speed||"top_left",direction:r?.corner_direction||"top_right",gust:r?.corner_gust||"bottom_left"},a={};for(let[n,s]of Object.entries(i)){let V=o[n];!s||!BA.includes(V)||a[V]||(a[V]={...s,...r?.corner_label_size?{label_text_size:Number(r.corner_label_size)}:{},...r?.corner_value_size?{value_text_size:Number(r.corner_value_size)}:{},...r?.corner_color?{color:r.corner_color}:{}})}return a}function zA(r,t,e,i){let o=a=>a!=null&&a!==""&&a!=="preset";if(o(t.wr_bars)&&(t.wr_bars==="hidden"?r.hide_windspeed_bar=!0:(delete r.hide_windspeed_bar,r.windspeed_bar_location=t.wr_bars)),r.corner_info&&!o(t.wr_corners)&&(t.corner_speed||t.corner_direction||t.corner_gust||t.corner_label_size||t.corner_value_size||t.corner_color)&&(r.corner_info=kH(t,e,i)),o(t.wr_corners)&&(t.wr_corners==="off"?delete r.corner_info:r.corner_info=kH(t,e,i)),o(t.wr_stats))delete r.text_blocks,t.wr_stats!=="off"&&(r.text_blocks={[t.wr_stats]:Mi(t)});else if(r.text_blocks)for(let a of Object.keys(r.text_blocks))r.text_blocks[a]=Mi(t);if(o(t.wr_buttons)&&(t.wr_buttons==="none"?delete r.buttons_config:r.buttons_config={...P9[t.wr_buttons].build().buttons_config}),r.buttons_config&&o(t.wr_buttons_position)&&(r.buttons_config={...r.buttons_config,location:t.wr_buttons_position}),o(t.wr_period)){let a=r.buttons_config?.buttons,n=a?.filter(s=>s.type==="period_selector");if(n?.length){let s=n.find(V=>V.period_back===t.wr_period);s?r.buttons_config={...r.buttons_config,buttons:a.map(V=>V.type==="period_selector"?{...V,active:V===s}:V)}:r.data_period={period_back:t.wr_period}}else r.data_period={period_back:t.wr_period}}if(o(t.wr_beaufort)){let a=t.wr_beaufort==="on";r.windspeed_entities=r.windspeed_entities.map(n=>({...n,speed_range_beaufort:a,...a?{current_speed_arrow:!0}:{}}))}return t.wr_arrow===!1?r.current_direction={show_arrow:!1}:r.current_direction={...r.current_direction||{},show_arrow:!0,...t.wr_arrow_size!=null?{arrow_size:Number(t.wr_arrow_size)}:{}},t.wr_arrow_color&&(r.colors={...r.colors||{},rose_current_direction_arrow:t.wr_arrow_color}),(o(t.wr_speed_arrows)||t.wr_speed_arrow_size!=null)&&(r.windspeed_entities=r.windspeed_entities.map(a=>({...a,...o(t.wr_speed_arrows)?{current_speed_arrow:t.wr_speed_arrows==="on"}:{},...t.wr_speed_arrow_size!=null?{current_speed_arrow_size:Number(t.wr_speed_arrow_size)}:{}}))),r}function OH(r,t,e){let i=FA[e]||"mph",o=P9[r?.windrose_preset]||P9.standard,{_speed:a,_gust:n,...s}=o.build(i,t,e),V={speed_unit:"auto",output_speed_unit:i,output_speed_unit_label:e||void 0,speed_range_beaufort:!1,windspeed_bar_full:!1},l={type:`custom:${E9}`,refresh_interval:300,wind_direction_entity:{entity:t.dir},windspeed_entities:[{entity:t.speed,name:"Speed",...V,...a||{}},...t.gust?[{entity:t.gust,name:"Gust",...V,use_for_windrose:!1,...n||{}}]:[]],current_direction:{show_arrow:!0},matching_strategy:{name:"full-time"},...s};zA(l,r||{},t,e);let M=F2(l,r?.windrose||{});return M.buttons_config?.buttons?.some(u=>u.type==="period_selector"&&u.active)&&delete M.data_period,M}var pi=O7(j7(),1);var k3=O7(j7(),1),IA=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],NA=r=>IA.find(([t])=>r<t)[1];function TH(r,t,e=31){let i=k3.getMoonIllumination(r).phase;for(let o=1;o<=e*24;o++){let a=new Date(r.getTime()+o*36e5),n=k3.getMoonIllumination(a).phase;if(t===0?n<i:i<t&&n>=t)return a;i=n}return null}function p4(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},o=k3.getMoonIllumination(t),a=e!=null?k3.getMoonTimes(t,e,i):{};return{phase:o.phase,name:NA(o.phase),fraction:o.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:TH(t,.5),nextNew:TH(t,0)}}function PH(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let o=k3.getTimes(t,e,i),a=o.sunset-o.sunrise;return{sunrise:o.sunrise,sunset:o.sunset,noon:o.solarNoon,dawn:o.dawn,dusk:o.dusk,daylightMs:a}}var Zt=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),kt=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});function F9(r){let i=r<.5,o=Math.cos(r*2*Math.PI),a=Math.abs(o)*24,n=i?1:0,s=`M26 2 A24 24 0 0 ${n} 26 50 A${a} 24 0 0 ${o>0?1-n:n} 26 2 Z`;return Z1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${s} fill="#e9e6d6"></path>
  </svg>`}var $9=class extends r1{render(){if(!this.hass)return S;let t=p4(this.hass),e=o=>o?Zt(this.hass).format(o):"\u2014",i=kt(this.hass);return x`${F1(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${F9(t.phase)}</div>
        <div class="facts">
          <span class="name">${t.name}</span>
          <span>Illumination</span><span>${Math.round(t.fraction*100)}%</span>
          <span>Moonrise</span><span>${t.alwaysUp?"up all day":t.alwaysDown?"down all day":e(t.rise)}</span>
          <span>Moonset</span><span>${e(t.set)}</span>
          ${t.nextFull?x`<span>Next full</span><span>${i.format(t.nextFull)}</span>`:S}
          ${t.nextNew?x`<span>Next new</span><span>${i.format(t.nextNew)}</span>`:S}
        </div>
      </div>`}};D($9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),D($9,"styles",[q1,s1`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",$9);var R9=r=>r.map(([t,e])=>({value:t,label:e})),Ot=[["dawn","Dawn"],["sunrise","Sunrise"],["solar_noon","Solar noon"],["sunset","Sunset"],["dusk","Dusk"],["day_length","Length of day"],["visible_light","Visible light"],["moonrise","Moonrise"],["moonset","Moonset"],["moon_phase","Moon phase"],["moon_illumination","Illumination"],["next_full","Next full moon"],["next_new","Next new moon"]],$H=Ot.map(([r])=>r),M7=r=>r instanceof Date&&!isNaN(r),EH=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`;function Tt(r=$H,t=!1){let e=o=>!!o.show_facts,i=R9([["400","Regular"],["500","Medium"],["700","Bold"]]);return[{name:"show_facts",label:"Show sun & moon facts",selector:{boolean:{}},default:t},{name:"facts",label:"Facts",when:e,selector:{select:{multiple:!0,options:R9(Ot)}},default:r},{name:"fact_align",label:"Alignment",when:e,selector:{select:{options:R9([["left","Left"],["center","Center"],["right","Right"]])}},default:"left"},{name:"fact_moon_illum",label:"Illumination",when:o=>e(o)&&(o.facts||r).includes("moon_phase"),selector:{select:{options:R9([["separate","Its own fact"],["right","With the moon phase, to the right of it"],["below","With the moon phase, under it"]])}},default:"separate"},{name:"fact_illum_value",label:"Illumination %",when:o=>e(o)&&(o.fact_moon_illum||"separate")!=="separate"&&(o.facts||r).includes("moon_phase"),selector:{select:{options:R9([["below","Under the label"],["right","To the right of the label"]])}},default:"below"},{name:"fact_moon_size",label:"Moon image size",when:o=>e(o)&&(o.facts||r).includes("moon_phase"),selector:{number:{min:16,max:160,step:2,mode:"slider",unit_of_measurement:"px"}},default:36},{name:"fact_label_size",label:"Label size",when:e,selector:{number:{min:8,max:32,mode:"slider",unit_of_measurement:"px"}},default:11},{name:"fact_label_weight",label:"Label weight",when:e,selector:{select:{options:i}},default:"400"},{name:"fact_label_color",label:"Label color",when:e,selector:{text:{}},helper:"Not set: secondary text."},{name:"fact_value_size",label:"Value size",when:e,selector:{number:{min:8,max:40,mode:"slider",unit_of_measurement:"px"}},default:13},{name:"fact_value_weight",label:"Value weight",when:e,selector:{select:{options:i}},default:"400"},{name:"fact_value_color",label:"Value color",when:e,selector:{text:{}},helper:"Not set: primary text."}].map(o=>({...o,sub:"Sun & moon facts"}))}function WA(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let o=new Date(t);o.setHours(12,0,0,0);let a=pi.getTimes(o,e,i),n=new Date(o);n.setDate(n.getDate()-1);let s=pi.getTimes(n,e,i),V=p4(r,t),l=new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),M=new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"}),u=k=>M7(k)?l.format(k):"\u2014",f=M7(a.sunset)&&M7(a.sunrise)?a.sunset-a.sunrise:null,g=M7(s.sunset)&&M7(s.sunrise)?s.sunset-s.sunrise:null,b=f!=null&&g!=null?Math.round((f-g)/6e4):null;return{dawn:u(a.dawn),sunrise:u(a.sunrise),solar_noon:u(a.solarNoon),sunset:u(a.sunset),dusk:u(a.dusk),day_length:EH(f),day_change:b==null?"":`${b>=0?"+":"\u2212"}${Math.abs(b)}m`,visible_light:EH(M7(a.dusk)&&M7(a.dawn)?a.dusk-a.dawn:null),moonrise:V.alwaysUp?"up all day":V.alwaysDown?"down all day":u(V.rise),moonset:V.alwaysUp||V.alwaysDown?"\u2014":u(V.set),moon_phase:V.name,moon_phase_value:V.phase,moon_illumination:`${Math.round(V.fraction*100)}%`,next_full:V.nextFull?M.format(V.nextFull):"\u2014",next_new:V.nextNew?M.format(V.nextNew):"\u2014"}}function D9(r,t,e=$H,i=!1){if(!(i?t?.show_facts!==!1:t?.show_facts===!0))return S;let o=WA(r);if(!o)return S;let a=t?.fact_moon_illum==="right"||t?.fact_moon_illum==="below"?t.fact_moon_illum:null,n=(Array.isArray(t?.facts)?t.facts:e).filter(M=>Ot.some(([u])=>u===M));if(a&&n.includes("moon_phase")&&(n=n.filter(M=>M!=="moon_illumination")),!n.length)return S;let s=Object.fromEntries(Ot),V=[t.fact_label_size?`--fl-size:${Number(t.fact_label_size)}px`:"",t.fact_label_weight?`--fl-weight:${t.fact_label_weight}`:"",t.fact_label_color?`--fl-color:${t.fact_label_color}`:"",t.fact_value_size?`--fv-size:${Number(t.fact_value_size)}px`:"",t.fact_value_weight?`--fv-weight:${t.fact_value_weight}`:"",t.fact_value_color?`--fv-color:${t.fact_value_color}`:"",`--moon-img:${Number(t.fact_moon_size)||36}px`,`--f-align:${t.fact_align||"left"}`].filter(Boolean).join(";"),l=x`<div class="illum ${t.fact_illum_value==="right"?"inline":""}"><span class="fl">${s.moon_illumination}</span><span class="fv">${o.moon_illumination}</span></div>`;return x`<div class="facts" style=${V}>${n.map(M=>M==="moon_phase"?x`<div class="fact moon"><span class="mi">${F9(o.moon_phase_value)}</span>
          <div class="mt ${a==="right"?"row":""}"><div><span class="fl">${s[M]}</span><span class="fv">${o.moon_phase}</span></div>${a?l:S}</div></div>`:x`<div class="fact"><span class="fl">${s[M]}</span><span class="fv">${o[M]}${M==="day_length"&&o.day_change?x` <small class="fd">${o.day_change}</small>`:S}</span></div>`)}</div>`}var B9=s1`
  .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; text-align: var(--f-align, left); }
  .fact { min-width: 0; }
  .fact .fl { display: block; font-size: var(--fl-size, 11px); font-weight: var(--fl-weight, 400); color: var(--fl-color, var(--secondary-text-color)); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .fact .fv { display: block; font-size: var(--fv-size, 13px); font-weight: var(--fv-weight, 400); color: var(--fv-color, var(--primary-text-color)); white-space: nowrap; font-variant-numeric: tabular-nums; }
  .fact .fd { font-size: 0.8em; color: var(--secondary-text-color); }
  /* The moon item takes two columns (image + name) and never runs into its neighbour. */
  .fact.moon { display: flex; align-items: center; gap: 8px; grid-column: span 2; overflow: hidden; }
  .fact.moon > div { min-width: 0; }
  .fact.moon .fv { overflow: hidden; text-overflow: ellipsis; }
  .fact.moon .mi { flex: 0 0 auto; line-height: 0; }
  .facts[style*="--f-align:center"] .fact.moon { justify-content: center; }
  .facts[style*="--f-align:right"] .fact.moon { justify-content: flex-end; }
  .fact.moon .mt { min-width: 0; display: flex; flex-direction: column; gap: 4px; }
  .fact.moon .mt.row { flex-direction: row; align-items: flex-start; gap: 14px; }
  .illum .fl, .illum .fv { display: block; }
  .illum.inline { display: flex; align-items: baseline; gap: 6px; }
  .fact.moon .mi svg { width: var(--moon-img, 36px); height: var(--moon-img, 36px); display: block; }
`;var k1=r=>r.map(([t,e])=>({value:t,label:e})),Pt=["6h","12h","24h","48h","7d","30d","90d","365d"],FH=k1([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),UA=k1([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),jA=Object.entries(Q1).map(([r,t])=>({value:r,label:t.label})),I5=r=>({entity:r?{domain:r}:{}}),O3={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[{name:"auto_scale",selector:{boolean:{}},default:!1,helper:"Size the temperature, condition, icon, clock, date and metric chips from the panel's size, over the sizes set below. Sizes left at Auto below follow the panel either way."},{name:"scale",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Auto scaling: make the auto sizes bigger or smaller."},...Tt()]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:I5(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:I5("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Button Menu",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:jA}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:I5()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"Not set: the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:k1([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above."},{name:"ranges",selector:{select:{multiple:!0,options:Pt.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:Pt.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:Pt.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:Pt.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:k1([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,fit:!0,groups:[["View",[{name:"fit",selector:{boolean:{}},default:!0,helper:"Shrink the compass or rose so everything fits the panel's height (instead of the panel growing and stretching its row)."},{name:"view",selector:{select:{options:k1([["compass","Compass"],["rose","Wind rose"]])}}},{name:"show_view_buttons",selector:{boolean:{}},default:!0,helper:"Compass / Rose buttons in the header."}]],["Readings (speed, gust, direction)",[{name:"readings_position",selector:{select:{options:k1([["auto","Automatic \u2014 beside the dial; hidden with the Wind Rose Card"],["side","Beside the dial"],["above","Above"],["below","Below"],["hidden","Hidden"]])}},default:"auto"}]],["Chart",[{name:"show_chart",label:"Show the chart",selector:{boolean:{}},default:!0,helper:"24 h speed and gust chart."},{name:"chart_position",when:r=>r.show_chart!==!1,selector:{select:{options:k1([["below","Below"],["above","Above"]])}},default:"below"},{name:"chart_legend",when:r=>r.show_chart!==!1,selector:{boolean:{}},default:!1,helper:"Speed / Gust legend on the chart."},{name:"windrose_chart",when:r=>r.show_chart!==!1,selector:{boolean:{}},default:!0,helper:"Also with the Wind Rose Card."}]],["Compass",[{name:"dial_scale",selector:{number:{min:50,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Compass and built-in rose size."},{name:"compass_arrow_size",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Direction pointer size."},{name:"compass_arrow_color",selector:{text:{}},helper:"Not set: the wind color."}]],["Wind rose",[{name:"rose_engine",selector:{select:{options:k1([["auto","Automatic \u2014 Wind Rose Card when installed"],["windrose","Wind Rose Card (custom:windrose-card)"],["builtin","Built-in rose"]])}},default:"auto",helper:"aukedejong's Wind Rose Card (HACS) with your station's sensors filled in, or our built-in 24 h rose."},{name:"show_legend",selector:{boolean:{}},default:!0,helper:"Built-in rose: speed colour legend."},{name:"rose_bins",selector:{object:{}},helper:"Built-in rose: speed thresholds in the sensor's unit, e.g. [1, 5, 10, 15, 25]."},{name:"windrose_preset",selector:{select:{options:Object.entries(P9).map(([r,t])=>({value:r,label:t.label}))}},default:"standard",helper:"Wind Rose Card starting layout; the settings below change parts of it."},{name:"wr_period",selector:{select:{options:k1([["preset","From the preset"],["-1h","1 hour"],["-8h","8 hours"],["-1d","24 hours"],["-7d","7 days"],["-30d","30 days"]])}},default:"preset",helper:"Period shown first."},{name:"wr_scale",selector:{number:{min:30,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Wind Rose Card size within the panel."},{name:"wr_arrow",selector:{boolean:{}},default:!0,helper:"Current direction arrow."},{name:"wr_arrow_size",when:r=>r.wr_arrow!==!1,selector:{number:{min:10,max:120,step:5,mode:"slider"}},default:50,helper:"Direction arrow (pointer) size."},{name:"wr_arrow_color",when:r=>r.wr_arrow!==!1,selector:{text:{}},helper:"Not set: red. The Wind Rose Card uses it for the speed-bar arrows too."}]],["Wind Rose Card: speed bars",[{name:"wr_bars",selector:{select:{options:k1([["preset","From the preset"],["right","Right"],["bottom","Bottom"],["hidden","Hidden"]])}},default:"preset"},{name:"wr_beaufort",selector:{select:{options:k1([["preset","From the preset"],["on","Beaufort"],["off","Speed unit"]])}},default:"preset"},{name:"wr_speed_arrows",selector:{select:{options:k1([["preset","From the preset"],["on","Show"],["off","Hide"]])}},default:"preset",helper:"Arrow on each bar at the current speed."},{name:"wr_speed_arrow_size",when:r=>r.wr_speed_arrows!=="off",selector:{number:{min:10,max:120,step:5,mode:"slider"}},default:40}]],["Wind Rose Card: corner info",[{name:"wr_corners",selector:{select:{options:k1([["preset","From the preset"],["on","Show"],["off","Hide"]])}},default:"preset"},...[["corner_speed","top_left"],["corner_direction","top_right"],["corner_gust","bottom_left"]].map(([r,t])=>({name:r,when:e=>e.wr_corners!=="off",selector:{select:{options:k1([["top_left","Top left"],["top_right","Top right"],["bottom_left","Bottom left"],["bottom_right","Bottom right"],["hidden","Hidden"]])}},default:t})),{name:"corner_label_size",when:r=>r.wr_corners!=="off",selector:{number:{min:20,max:120,step:5,mode:"slider"}},default:50,helper:"Label size (the card's own scale)."},{name:"corner_value_size",when:r=>r.wr_corners!=="off",selector:{number:{min:20,max:160,step:5,mode:"slider"}},default:80,helper:"Value size (the card's own scale)."},{name:"corner_color",when:r=>r.wr_corners!=="off",selector:{text:{}},helper:"Text color."}]],["Wind Rose Card: statistics",[{name:"wr_stats",selector:{select:{options:k1([["preset","From the preset"],["top","Above the rose"],["bottom","Below the rose"],["off","Hide"]])}},default:"preset"},{name:"stats_items",when:r=>r.wr_stats!=="off",selector:{select:{multiple:!0,options:k1([["min","Min"],["avg","Average"],["max","Max"],["median","Median"],["p90","P90 (gust-like)"],["calm","Calm %"]])}},default:["min","avg","max","p90","calm"]},{name:"stats_align",when:r=>r.wr_stats!=="off",selector:{select:{options:k1([["left","Left"],["center","Center"],["right","Right"]])}},default:"left"},{name:"stats_size",when:r=>r.wr_stats!=="off",selector:{number:{min:8,max:40,mode:"slider",unit_of_measurement:"px"}},default:13},{name:"stats_weight",when:r=>r.wr_stats!=="off",selector:{select:{options:k1([["400","Regular"],["500","Medium"],["700","Bold"]])}},default:"400"},{name:"stats_color",when:r=>r.wr_stats!=="off",selector:{text:{}},helper:"Not set: secondary text."}]],["Wind Rose Card: buttons",[{name:"wr_buttons",selector:{select:{options:k1([["preset","From the preset"],["periods","Period buttons (1 h \u2026 7 days)"],["playback","Playback (\xB112 h, play 10 days)"],["none","None"]])}},default:"preset"},{name:"wr_buttons_position",when:r=>r.wr_buttons!=="none",selector:{select:{options:k1([["preset","From the preset"],["top","Top"],["bottom","Bottom"]])}},default:"preset"}]],["Wind Rose Card: advanced",[{name:"windrose",selector:{object:{}},helper:"Any of the card's own options, merged last, e.g. rose_config, colors or speed_ranges."}]],["Sensors",[{name:"entities.wind_speed",selector:I5("sensor")},{name:"entities.wind_gust_speed",selector:I5("sensor")},{name:"entities.wind_bearing",selector:I5("sensor")}]]]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:UA}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:FH}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...FH]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],flexHide:["timeframe_mode","timeframe_hours","timeframe_anchor","night_moon"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:k1([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:k1([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},...Tt()]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",label:"Altitude chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."},{name:"show_table",label:"Sun & moon table",selector:{boolean:{}},default:!0,helper:"Rise and set times for the sun, the three twilights and the moon."},...Tt(void 0,!0)]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"overlay",selector:{select:{options:k1([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:k1([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:k1([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:k1([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"engine",selector:{select:{options:k1([["auto","Automatic"],["sgcc","Statistics Graph Chart Card (custom)"],["builtin","Home Assistant Statistics graph"]])}},default:"auto",helper:"Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card."},{name:"preset",selector:{select:{options:k1([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust, direction)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["air_quality","Air quality (AQI, PM2.5)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:.25,max:365,step:.25,mode:"box"}}},{name:"period",selector:{select:{options:k1([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:k1([["line","Line"],["bar","Bar"]])}},helper:"Built-in card only (the custom card sets this per series)."},{name:"stat_types",selector:{select:{multiple:!0,options:k1([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list."}]},health:{tag:"wsfc-panel-health",label:"Station health",icon:"mdi:heart-pulse",span:4,rows:0,schema:[{name:"show_devices",selector:{boolean:{}},helper:"Show device names even when there is only one."}]},pollen:{tag:"wsfc-panel-pollen",label:"Pollen",icon:"mdi:flower-pollen",span:4,rows:0,hideWhen:(r,t)=>{let e=St(r,t);return r.hide_when_off_season===!0&&e.outOfSeason||r.hide_when_none===!0&&e.allNone},schema:[{name:"device",selector:{device:{integration:"pollenlevels"}},helper:"Pollen Levels location (default: the first one)."},{name:"view",selector:{select:{options:k1([["plants","Species (oak, juniper, ragweed \u2026)"],["types","Types (tree, grass, weed)"]])}},default:"plants"},{name:"species",selector:{text:{multiple:!0}},helper:"Species to show, in order, by Google code or name (e.g. JUNIPER, OAK, GRAMINALES). Blank shows the busiest."},{name:"max_rows",selector:{number:{min:0,max:20,mode:"box"}},default:6,helper:"Rows when no species are listed (0 = all)."},{name:"hide_off_season",selector:{boolean:{}},default:!0,helper:"Hide species that are out of season."},{name:"hide_when_off_season",selector:{boolean:{}},default:!1,helper:"Hide the whole panel when no species is in season (its panel button still opens it)."},{name:"hide_when_none",selector:{boolean:{}},default:!1,helper:"Hide the whole panel when every species is at None today (its panel button still opens it)."},{name:"show_tomorrow",selector:{boolean:{}},default:!0},{name:"show_season",selector:{boolean:{}},default:!0,helper:"12-month strip: how many of the shown species are in season each month."},{name:"hide_none",selector:{boolean:{}},default:!0,helper:"Hide species with nothing in the air today (level None)."},{name:"show_nothing",selector:{boolean:{}},default:!0,helper:'Show "In season, but nothing in the air today" in the header line when every species is at None.'},{name:"nothing_text",selector:{text:{}},helper:'Replace that text, e.g. "All clear".'},{name:"show_source",selector:{boolean:{}},default:!0,helper:"Show the data source (Google) in the header line."},{name:"source",selector:{text:{}},helper:"Replace the source text."},{name:"show_location",selector:{boolean:{}},default:!0,helper:"Show the town in the header line."},{name:"location",selector:{text:{}},helper:"Replace the town (default: your Home Assistant location name)."},{name:"seasons",selector:{object:{}},helper:"Season months per species, e.g. JUNIPER: [1, 2, 3, 4]. Default: Google's season text, else typical months."},{name:"entities",selector:{entity:{multiple:!0,domain:"sensor"}},helper:"Advanced: use these sensors instead of finding Pollen Levels automatically."}]},air_quality:{tag:"wsfc-panel-air-quality",label:"Air quality",icon:"mdi:air-filter",span:4,rows:0,schema:[{name:"layout",selector:{select:{options:k1([["scale","Scale \u2014 colour scale and rating per pollutant (like Pollen)"],["rows","Rows \u2014 bar, level and value per pollutant"],["bars","Vertical bars on the AQI scale"],["tiles","Tiles"]])}},default:"scale"},{name:"pollutants",selector:{select:{multiple:!0,options:k1([["pm2_5","PM2.5"],["pm10","PM10"],["ozone","Ozone"],["co2","CO\u2082"]])}},helper:"Default: all that are found."},{name:"extra",selector:{object:{}},helper:"More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO\u2082 have built-in thresholds."},{name:"show_aqi",selector:{boolean:{}},default:!0},{name:"show_scale",selector:{boolean:{}},helper:"Rows, bars and tiles: AQI colour scale under the number (default: on for tiles only)."},{name:"bar_height",selector:{number:{min:60,max:400,mode:"box",unit_of_measurement:"px"}},helper:"Vertical bars: height (default 140)."},{name:"show_source",selector:{boolean:{}},default:!0,helper:"Show the data source (e.g. AirNow, Boulder AIR)."},{name:"source",selector:{text:{}},helper:"Replace the source text (default: the sensor's source attribute or integration)."},{name:"show_location",selector:{boolean:{}},default:!0,helper:"Show the reporting area / town (AirNow's reporting area)."},{name:"location",selector:{text:{}},helper:"Replace the area or town text."},{name:"entities.aqi",selector:I5("sensor"),helper:"Default: the station's own sensor, else AirNow, else any outdoor AQI sensor."},{name:"entities.pm2_5",selector:I5("sensor")},{name:"entities.pm10",selector:I5("sensor")},{name:"entities.ozone",selector:I5("sensor")},{name:"entities.co2",selector:I5("sensor")}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:I5("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},chips:{tag:"wsfc-panel-chips",label:"Current Weather Metrics",icon:"mdi:format-list-bulleted-square",span:12,rows:0,flex:!0,flexPanels:["Current Weather Metrics"],schema:[]},clock:{tag:"wsfc-panel-clock",label:"Clock",icon:"mdi:clock-outline",span:4,rows:1,inBar:!1,schema:[{name:"show_time",selector:{boolean:{}},default:!0},{name:"show_seconds",selector:{boolean:{}},default:!1},{name:"time_format",selector:{select:{options:k1([["auto","Home Assistant's setting"],["12","12-hour"],["24","24-hour"]])}},default:"auto"},{name:"show_date",selector:{boolean:{}},default:!0},{name:"date_format",selector:{select:{options:k1([["long","Thursday, October 22"],["medium","Thu, Oct 22"],["short","10/22"],["weekday","Thursday"],["full","Thursday, October 22, 2026"]])}},default:"medium"},{name:"align",selector:{select:{options:k1([["center","Center"],["left","Left"],["right","Right"]])}},default:"center"},{name:"auto_size",selector:{boolean:{}},default:!0,helper:"Size the time and date to fill the panel."},{name:"scale",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Auto size: bigger or smaller."},{name:"time_size",selector:{number:{min:12,max:200,mode:"box",unit_of_measurement:"px"}},helper:"Auto size off: time size (default 48)."},{name:"date_size",selector:{number:{min:8,max:80,mode:"box",unit_of_measurement:"px"}},helper:"Auto size off: date size (default 16)."},{name:"time_weight",selector:{select:{options:k1([["300","Light"],["400","Regular"],["500","Medium"],["700","Bold"]])}},default:"300"},{name:"color",selector:{text:{}},helper:"Time color. Not set: the theme's text color."},{name:"date_color",selector:{text:{}},helper:"Not set: secondary text."}]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};for(let r of Object.values(O3))r.groups&&!r.schema&&(r.schema=r.groups.flatMap(([,t])=>t));var BH=[{name:"show_title",label:"Show the title",selector:{boolean:{}},default:!0},{name:"title",when:r=>r.show_title!==!1,selector:{text:{}}},{name:"show_icon",label:"Show the title icon",when:r=>r.show_title!==!1,selector:{boolean:{}},default:!0},{name:"icon",when:r=>r.show_title!==!1&&r.show_icon!==!1,selector:{icon:{}}}],zH=new Set(["hero","stack","clock"]),hi=new Set(["chips","sky_tracker","card"]),IH=[...BH,{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,step:.5,mode:"slider"}},helper:"Height in row units, in half steps (0 = fit content, 0.5 = half height)."},{name:"display",selector:{select:{options:k1([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless hidden with the eye icon in the panel list)."},{name:"tile_background",section:"Default Overrides",label:"Panel background",selector:{select:{options:k1([["default","Default"],["translucent","See-through (uses Panel opacity)"],["solid","Solid"],["none","None"]])}},default:"default"},{name:"tile_shadow",section:"Default Overrides",label:"Disable shadow",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_border",section:"Default Overrides",label:"Disable border",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_glow",section:"Default Overrides",label:"Disable glow",invert:!0,selector:{boolean:{}},default:!0}],NH=[...BH,{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,step:.5,mode:"slider"}},helper:"Vertical: minimum height in row units (half steps allowed)."},{name:"tile_shadow",section:"Default Overrides",label:"Disable shadow",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_border",section:"Default Overrides",label:"Disable border",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_glow",section:"Default Overrides",label:"Disable glow",invert:!0,selector:{boolean:{}},default:!0}],C2=r=>O3[r?.type]||null,_5=r=>Math.max(1,Math.min(12,Number(r.span??C2(r)?.span??6)));function WH(r,t){let e=C2(r)||{},i=_5(r),o=i;t==="medium"&&(o=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(o=Number(r.span_narrow??(i<=3?6:12)));let a=Y2(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,o)),rows:a}}var Y2=r=>Math.max(0,Number(r.rows??C2(r)?.rows??0)),d7=r=>r.in_bar??(r.display==="popup"?!0:C2(r)?.inBar??!0);var RH=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"health",show:!1},{type:"pollen",show:!1},{type:"air_quality",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],ui=new Set(["sky_bar","sun","sun_moon"]);function DH(r,t){let e=[],i=r.filter(s=>s&&ui.has(s.type)),o=i.find(s=>s.type==="sky_bar"),a=i.find(s=>s.type==="sun"||s.type==="sun_moon"),n=!1;for(let s of r){if(!s||!ui.has(s.type)){e.push(s);continue}let{type:V,sky_bar:l,show_moon:M,...u}=s,f={...u,type:"sky_tracker"};if(V==="sky_bar"&&(f.show_arc=!1),V==="sun"&&(f.show_facts=s.show_facts!==!1),o&&a&&(s===o||s===a)){if(n)continue;n=!0;let g=s===o?a:o,{type:b,sky_bar:k,show_moon:O,...T}=g;Object.assign(f,T,u),f.flex=qA(g===o?g.flex:s.flex,g===o?s.flex:g.flex),delete f.show_arc,a.type==="sun"&&(f.show_facts=a.show_facts!==!1),f.flex||delete f.flex}e.push(f),V==="sun_moon"&&M!==!1&&e.push({type:"moon"})}if(t&&!e.some(s=>s?.type==="sky_tracker")){let s=e.findIndex(u=>u?.type==="hero"),l=e[s]?.flex?.wfc?.sun_position,M={type:"sky_tracker",span:12,rows:0,...l?{flex:{wfc:{sun_position:l}}}:{}};e.splice(s+1,0,M)}return e.map(s=>s?.type==="hero"?GA(s):s)}function GA(r){let{sky_bar:t,...e}=r;if(!e.flex?.wfc?.sun_position)return e;let{sun_position:o,...a}=e.flex.wfc,n={...e.flex,wfc:a};return Object.keys(a).length||delete n.wfc,Object.keys(n).length?e.flex=n:delete e.flex,e}function qA(r,t){if(!r&&!t)return;let e={...t?.wfc||{}};return r?.wfc?.sun_position&&(e.sun_position={...e.sun_position||{},...r.wfc.sun_position}),{...t||{},...r||{},wfc:e}}function Et(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:RH,e=t.find(a=>a?.type==="hero"),i=t.some(a=>a&&ui.has(a.type))||!!e&&("sky_bar"in e||!!e.flex?.wfc?.sun_position),o=!!e&&i&&e.sky_bar!==!1&&e.flex?.wfc?.sun_position?.show!==!1&&t!==RH;return t=DH(t,o).map(a=>a?.type==="stack"?{...a,panels:DH(a.panels||[],!1)}:a),t=t.filter(a=>a&&O3[a.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(a=>a.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(a=>a.type==="hero"&&r.hero&&typeof r.hero=="object"&&!a.flex?{...a,flex:r.hero}:a)}var mi=new Map;function $t(r,t,e,i){if(!r?.connection||!t)return()=>{};let o=`${t}|${e}`,a=mi.get(o);return a||(a={listeners:new Set,data:null,unsub:null},mi.set(o,a),a.unsub=r.connection.subscribeMessage(n=>{a.data=n?.forecast||[],a.listeners.forEach(s=>s(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(n=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,n),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(mi.delete(o),Promise.resolve(a.unsub).then(n=>typeof n=="function"&&n()).catch(()=>{}))}}function UH(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(o=>new Date(o.datetime).toDateString()===i)||r[t]||null}var fi=!1,jH=()=>fi;function Ft(r){r=!!r,r!==fi&&(fi=r,window.dispatchEvent(new CustomEvent("wsfc-unsaved",{detail:{unsaved:r}})))}var Ai={dashboard:null,preview:null},GH=()=>Ai;function qH(r,t){JSON.stringify(Ai[r])!==JSON.stringify(t)&&(Ai[r]=t,window.dispatchEvent(new CustomEvent("wsfc-detected")))}var vi="wsfc-flex-core",YH="wsfc-flex-core-editor";customElements.get(vi)||customElements.define(vi,u2);{let r=n0.prototype,t=r._wfcWeatherSourcesPanel,e=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":t.call(this)},r.render=function(){return this.wsfcMode!=="sources"?e.call(this):!this.hass||!this._config?"":x`${this._wfcEditorStyle()}${t.call(this)}`},r.updated=function(o){i?.call(this,o);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(n=>{let s=n.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();n.hidden=!!s&&!a.includes(s)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let n=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");n&&(n.open=!0,this.__wsfcOpened=!0)}}}var QH=u2.__wfcBuild,KH=r=>u2.__wfcResolve(r);function YA(r){return{...r,wfc:KH(r)}}function XH(r,t){let{entity:e,metric_sources:i,type:o,...a}={...r,wfc:KH(r)},{entity:n,metric_sources:s,...V}=YA(t);return ci(a,V)||{}}var Rt=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(vi)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(o){this.error=o?.message||String(o),console.error("weather-station-flex-card: invalid Weather Flex config",o,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var Bt={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}}};Bt.chips={wfc:{order:["details"],current:{show:!1},details:{...Bt.hero.wfc.details,items:Bt.hero.wfc.details.items.map(r=>({...r}))},hourly:{show:!1},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}};var QA={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},KA={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}};function XA(r,t,e=1){let i=Math.max(30,Math.min(120,r*.07));t>0&&(i=Math.min(i,Math.max(30,t*.36))),i*=e;let o=a=>Math.round(a);return{header_temp_size:o(i),header_state_size:o(Math.max(12,i*.33)),header_icon_size:o(i*1.3),clock:o(i*.78),date:o(Math.max(10,i*.25)),chip_scale:Math.round(Math.max(.6,Math.min(2.5,i/64*1.05))*100)/100}}var Dt;function JA(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(Dt||(Dt=new CSSStyleSheet,Dt.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,Dt],t.__wsfcFill=!0)}function I9(r,t){return{...Bt[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var JH=s1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,N5=class extends r1{constructor(){super();D(this,"type","");D(this,"defaultTitle","Weather");D(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new Rt}_coreConfig(){return F2(I9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return S;let e=this._slot.update(this._coreConfig(),this.hass),i=this.config?.show_title??(this.titleOnlyWhenSet?!!this.config?.title:!0);return x`
      ${i?F1(this.config,this.defaultIcon,this.defaultTitle):S}
      <div class="core">${e}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:S}
      ${this.extra()}
    `}extra(){return S}};D(N5,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),D(N5,"styles",[q1,JH]);var z9=class extends N5{constructor(){super(...arguments);D(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,o=i>=900?"large":i<560?"narrow":"normal";o!==this._size&&(this._size=o);let a=this.parentElement?.classList.contains("auto")?0:e.contentRect.height,n=`${Math.round(i/8)}:${Math.round(a/8)}`;n!==this._dimKey&&(this._dimKey=n,this._dims={w:i,h:a},this.requestUpdate())}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}get _auto(){let{w:e=0,h:i=0}=this._dims||{};return XA(e||700,i,Math.max(.3,Math.min(3,Number(this.config?.scale??100)/100)))}_coreConfig(){let e=I9("hero",this.station);if(this._size==="large"&&(e=F2(e,QA)),this._size==="narrow"&&(e=F2(e,KA)),e=F2(e,this.config?.flex||{}),this.config?.auto_scale){let i=this._auto;e=F2(e,{wfc:{current:{header_temp_size:i.header_temp_size,header_state_size:i.header_state_size,header_icon_size:i.header_icon_size,clock_font_size:0,clock_date_font_size:0},details:{chip_scale:i.chip_scale,chip_text_size:"",chip_icon_size:"",global_icon_size:Math.round(22*i.chip_scale),global_text_size:Math.round(14*i.chip_scale)}}})}return this.cardBg?e=F2(e,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}}):this.lite&&(e=F2(e,{show_condition_effects:!1})),e}updated(){JA(this._slot.el)}render(){if(!this.hass||!this.station?.entity)return S;let e=this._auto,i=D9(this.hass,this.config||{});return x`<div class="core" style="--wfc-clock-auto:${e.clock}px;--wfc-clock-date-auto:${e.date}px">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${i===S?S:x`<div class="hero-facts">${i}</div>`}
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:S}`}};D(z9,"properties",{...N5.properties,cardBg:{attribute:!1},lite:{attribute:!1}}),D(z9,"styles",[q1,JH,B9,s1`
      :host { position: relative; }
      /* Sun & moon facts across the bottom of the hero, over its background. */
      .hero-facts { position: absolute; left: 16px; right: 16px; bottom: 12px; z-index: 1; pointer-events: none; }
      .hero-facts .facts { margin: 0; }
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var xi=class extends N5{constructor(){super(...arguments);D(this,"type","forecast");D(this,"defaultTitle","Forecast");D(this,"defaultIcon","mdi:calendar-week")}},gi=class extends N5{constructor(){super(...arguments);D(this,"type","hourly");D(this,"defaultTitle","Hourly forecast");D(this,"defaultIcon","mdi:clock-outline")}},_i=class extends N5{constructor(){super(...arguments);D(this,"type","daily");D(this,"defaultTitle","Daily forecast");D(this,"defaultIcon","mdi:calendar-week")}};function bi(r,t){let e=F2(I9("sky_tracker",t),r?.flex||{}),i=e.wfc,o=i.sun_arc||(i.sun_arc={}),a=i.sun_position||(i.sun_position={}),n=r?.show_arc!==!1,s=r?.show_sky!==!1,V=r?.timeframe||"hours",l=Number(r?.hours??24),M=r?.anchor||"now_center";return o.timeframe_mode=V,a.timeframe_mode=V==="sunrise_sunset"?"match_arc":V,o.timeframe_hours=a.timeframe_hours=l,o.timeframe_anchor=a.timeframe_anchor=M,o.night_moon=r?.moon!==!1,r?.moon_phase===!1?o.moon_icon==="phase"&&(o.moon_icon="mdi:weather-night"):o.moon_icon="phase",n?(i.order=["sun_arc"],o.show=!0,o.baseline_mode=s?"sky":"line",a.show=!1):(i.order=["sun_position"],o.show=!1,a.show=s),e}var wi=class extends N5{constructor(){super(...arguments);D(this,"type","chips");D(this,"defaultTitle","Current Weather Metrics");D(this,"defaultIcon","mdi:format-list-bulleted-square");D(this,"titleOnlyWhenSet",!0)}},zt=class extends N5{constructor(){super(...arguments);D(this,"type","sky_tracker");D(this,"defaultTitle","Sky Tracker");D(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return bi(this.config,this.station)}render(){if(!this.hass||!this.station?.entity)return S;let e=this.config||{};return e.show_arc===!1&&e.show_sky===!1?x`${F1(e,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`:x`${e.show_title??!!e.title?F1(e,this.defaultIcon,this.defaultTitle):S}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:S}
      ${D9(this.hass,e)}`}};D(zt,"styles",[...N5.styles,B9]);customElements.get("wsfc-panel-chips")||customElements.define("wsfc-panel-chips",wi);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",z9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",xi);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",gi);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",_i);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",zt);$2.register(G0,v5,r0,x3,j0,i0);var It=[ri,ii],tV=[ri,ii,js];function T3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return T3("#"+i[1].split("").map(o=>o+o).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let o=parseInt(i[1],16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[o,a,n]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${o},${a},${n},${t})`}return e}function tv(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return o=>i.format(new Date(o))}function ev(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function Nt(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",o="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:ev(t,e)}}},scales:{x:{type:"linear",grid:{color:o},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:tv(t,e)}}},_text:i,_grid:o}}var eV=new Map;async function rV(r,t){let e=eV.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return eV.set(r,{at:Date.now(),data:i}),i}var rv=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function u4(r,t,e){return oV(r,t,Date.now()-e*36e5,`h${e}`)}function iV(r,t){let e=new Date;return e.setHours(0,0,0,0),oV(r,t,e.getTime(),`d${e.toDateString()}`)}function oV(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(e);return rV(`h|${i}|${o.join(",")}`,async()=>{let s=await r.callWS({type:"history/history_during_period",start_time:n.toISOString(),end_time:a.toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),V={};for(let l of o)V[l]=(s?.[l]||[]).map(M=>({t:Math.round((M.lu??M.lc??0)*1e3),v:rv(M.s)}));return V})}function aV(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(a.getTime()-e*864e5);return rV(`s|${e}|${i}|${o.join(",")}`,async()=>{let s=await r.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:a.toISOString(),statistic_ids:o,period:i,types:["mean","min","max","change"]}),V={};for(let l of o)V[l]=(s?.[l]||[]).map(M=>({t:typeof M.start=="number"?M.start:Date.parse(M.start),mean:M.mean??null,min:M.min??null,max:M.max??null,change:M.change??null}));return V})}function p7(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let o=0;o<r.length;o+=e){let a=r.slice(o,o+e),n=a.map(s=>s.v).filter(s=>s!=null);i.push({t:a[Math.floor(a.length/2)].t,v:n.length?n.reduce((s,V)=>s+V,0)/n.length:null})}return i}function Wt(r,t){let e=new Map,i=null;for(let o of r){if(o.v==null){i=null;continue}if(i!=null){let a=o.v>=i?o.v-i:o.v,n=Math.floor(o.t/t)*t;e.set(n,(e.get(n)||0)+a)}i=o.v}return[...e].map(([o,a])=>({t:o+t/2,v:Math.round(a*1e3)/1e3}))}function Ut(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let o=Math.floor(i.t/t)*t,a=e.get(o)||[0,0];a[0]+=i.v,a[1]++,e.set(o,a)}return[...e].map(([i,[o,a]])=>({t:i+t/2,v:o/a}))}var CV={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},nV=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],u7=class extends r1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let o=Q1[e.metric]||{},a=g5(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),n=a&&this.hass.states[a];return{...e,entity:a,label:e.label||o.label||n?.attributes?.friendly_name||a||"\u2014",color:this.config?.colors?.[e.metric]||e.color||o.color||nV[i%nV.length],axis:e.axis==="right"?"right":"left",style:e.style||(o.chart==="bar"?"bar":"line"),cumulative:e.cumulative??o.cumulative??!1,unit:n?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>CV[e])}render(){if(!this.hass)return S;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),o=t.length>1?E7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):S;return x`
      ${F1(this.config,this.defaultIcon,this.defaultTitle,o)}
      ${this.config?.show_readings===!1?S:x`<div class="readings">
            ${i.map(a=>{let n=W2(this.hass,a.entity);return $7(this,{label:a.label,value:n?.value,unit:n?.unit,digits:c4(a.metric,n?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?x`<div class="note">${this._error}</div>`:S}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(o=>[o.entity,o.style,o.axis,o.color,o.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(o=>this._error=`History unavailable: ${o?.message||o}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=CV[t]||24,o=e.map(n=>n.entity).filter(Boolean),a=new Map;if(i<=48){let n=await u4(this.hass,o,i);for(let s of e){let V=n[s.entity]||[],l=i<=12?15*6e4:36e5,M=s.style==="bar"?s.cumulative?Wt(V,l):Ut(V,l):p7(V);a.set(s,{line:M.map(u=>({x:u.t,y:u.v}))})}}else{let n=i>240?"day":"hour",s=await aV(this.hass,o,i/24,n);for(let V of e){let l=s[V.entity]||[],M=V.style==="bar"&&V.cumulative?"change":"mean";a.set(V,{line:l.map(u=>({x:u.t,y:u[M]})),min:l.map(u=>({x:u.t,y:u.min})),max:l.map(u=>({x:u.t,y:u.max}))})}}this._error=o.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let o=this.renderRoot.querySelector("canvas");if(!o)return;let a=Nt(this,t,this.hass?.locale?.language),n=e.find(M=>M.axis==="left"),s=e.find(M=>M.axis==="right"),V=(M,u)=>{let f=M?.unit==="%",g={position:u,grid:u==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:$=>`${+$.toFixed(2)}${M?.unit&&M.unit.length<=3?M.unit:""}`}};f&&Object.assign(g,{min:0,max:100}),e.filter($=>$.axis===u).every($=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test($.metric||""))&&e.some($=>$.axis===u)&&(g.min=g.min??0),e.some($=>$.axis===(u==="left"?"left":"right")&&$.style==="bar")&&(g.beginAtZero=!0);let k=this.config||{},O=k[`${u}_min`],T=k[`${u}_max`];return O!=null&&O!==""&&(g.min=Number(O)),T!=null&&T!==""&&(g.max=Number(T)),g};(n||!s)&&(a.scales.y=V(n,"left")),s&&(a.scales.y2=V(s,"right"));let l=[];e.forEach((M,u)=>{let f=i.get(M);if(!f)return;let g=M.axis==="right"?"y2":"y",b={label:M.label,data:f.line,borderColor:M.color,yAxisID:g,order:u+1};M.style==="bar"?Object.assign(b,{type:"bar",backgroundColor:T3(M.color,.6),borderWidth:0,borderRadius:2,order:50+u,barPercentage:.9,categoryPercentage:1}):M.style==="area"?Object.assign(b,{backgroundColor:T3(M.color,.13),fill:"origin",borderColor:T3(M.color,.75),borderWidth:1}):M.style==="dashed"&&Object.assign(b,{borderDash:[5,4],borderWidth:1.5}),l.push(b),(M.band??(u===0&&M.style==="line"))&&f.min&&f.max&&M.style!=="bar"&&l.push({label:`${M.label} max`,_band:!0,data:f.max,borderWidth:0,pointRadius:0,yAxisID:g,order:90,fill:"+1",backgroundColor:T3(M.color,.15)},{label:`${M.label} min`,_band:!0,data:f.min,borderWidth:0,pointRadius:0,yAxisID:g,order:91})}),a.plugins.tooltip.filter=M=>!M.dataset._band,this._chart&&this._chart.destroy(),this._chart=new $2(o,{type:"line",data:{datasets:l},options:a,plugins:It})}};D(u7,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),D(u7,"styles",q1);var N9={temp_humidity:[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}],uv_solar:[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}],graph:[{metric:"temperature"}]},Si=class extends u7{get defaultSeries(){return N9.temp_humidity}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},yi=class extends u7{get defaultSeries(){return N9.uv_solar}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",u7);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",Si);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",yi);var sV={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},HV=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],W9=class extends r1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:vt(t,e,i,"wind_speed"),gust:vt(t,e,i,"wind_gust_speed"),dir:vt(t,e,i,"wind_bearing")}}render(){if(!this.hass)return x``;let t=this.config||{},e=this._view||t.view||"compass",i=this.station,o=this.hass,a=x5(i,o,"wind_speed"),n=x5(i,o,"wind_gust_speed"),s=x5(i,o,"wind_bearing"),V=a?.unit||n?.unit||"",l=e==="rose"&&di(t)==="windrose",M={value:"rose",label:l||di(t)==="windrose"?"Rose":"Rose 24h"},u=t.show_view_buttons===!1?"":E7([{value:"compass",label:"Compass"},M],e,$=>this._view=$,"Wind view"),f=t.readings_position||"auto";f==="auto"&&(f=l?"hidden":"side");let g=x`<div class="readings">
      ${$7(this,{label:"Speed",value:a?.value,unit:V,digits:1,color:"var(--wsfc-wind)",entity:a?.entity})}
      ${$7(this,{label:"Gust",value:n?.value,unit:n?.unit||V,digits:1,color:"var(--wsfc-gust)",entity:n?.entity})}
      ${$7(this,{label:`From ${M4(s?.value)}`,value:s?.value,unit:"\xB0",entity:s?.entity})}
    </div>`,b=e==="rose"&&!l&&t.show_legend!==!1?this._roseLegend(V):"",k=t.chart_position==="above",O=t.show_chart===!1||l&&t.windrose_chart===!1?"":x`<div class="body ${k?"above":""}"><canvas aria-label="Wind speed and gust history"></canvas></div>`,T;if(l){let $=this._ids();if($.dir&&$.speed){this._ensureRose(OH(t,$,V)),this._wrEl&&(this._wrEl.hass=this.hass);let F=Math.max(30,Math.min(150,Number(t.wr_scale??100))),Q=this.fit&&this._fitPx?`width:min(${F}%, ${this._fitPx}px);margin:0 auto`:F!==100?`width:${F}%;margin:0 auto`:"";T=this._wrErr?x`<div class="note">${this._wrErr}</div>`:x`<div class="wr fitmain" style=${Q}>${this._wrEl||""}</div>`}}if(!T){let $=Math.max(50,Math.min(250,Number(t.dial_scale??100)))/100,F=`min(${Math.round(180*$)}px, ${Math.round(42*$)}%${this.fit&&this._fitPx?`, ${this._fitPx}px`:""})`,Q=x`<div class="dial fitmain" style=${$!==1||this.fit&&this._fitPx?`width:${F};`:""}>${e==="rose"?this._roseSvg(V):this._compassSvg(a?.value,V,s?.value)}</div>`;T=f==="side"?x`<div class="top">${Q}<div class="side">${g}${b}</div></div>`:x`<div class="top center">${Q}</div>${b?x`<div class="side">${b}</div>`:""}`}return x`
      ${F1(t,"mdi:weather-windy","Wind",u)}
      ${k?O:""}
      ${f==="above"?g:""}
      ${T}
      ${f==="below"||f==="side"&&l?g:""}
      ${k?"":O}
      ${this._error?x`<div class="note">${this._error}</div>`:""}
    `}connectedCallback(){super.connectedCallback(),customElements.get(E9)||customElements.whenDefined(E9).then(()=>this.requestUpdate())}async _ensureRose(t){let e=JSON.stringify(t);if(e!==this._wrJson){this._wrJson=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._wrJson!==e)return;this._wrEl=i.createCardElement(t),this._wrEl.hass=this.hass,this._wrErr=void 0,this.requestUpdate()}catch(i){this._wrErr=`Wind Rose Card failed to load: ${i?.message||i}`,this.requestUpdate()}}}_compassSvg(t,e,i){let o=[];for(let s=0;s<72;s++){let V=s*5*Math.PI/180,l=s%18===0,M=s%6===0,u=l?78:M?82:85;o.push(Z1`<line class="tick" x1=${100+Math.sin(V)*u} y1=${100-Math.cos(V)*u} x2=${100+Math.sin(V)*88} y2=${100-Math.cos(V)*88} stroke-width=${l?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([s,V])=>Z1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(V*Math.PI/180)*66} y=${100-Math.cos(V*Math.PI/180)*66}>${s}</text>`),n=Number.isFinite(i)?i:null;return Z1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${M4(n)} at ${I1(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${o}${a}
      ${n==null?"":Z1`<g class="ptr" style=${`transform: rotate(${n}deg); transform-origin: 100px 100px;${this.config?.compass_arrow_color?`fill:${this.config.compass_arrow_color};`:""}`}>
        <g style=${`transform: scale(${Math.max(.5,Math.min(2,Number(this.config?.compass_arrow_size??100)/100))}); transform-origin: 100px 10px`}>
          <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
        </g>
      </g>`}
      <text class="spd" x="100" y="104">${I1(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||sV[t]||sV.mph}_roseLegend(t){let e=this._bins(t),i=e.map((o,a)=>a<e.length-1?`${o}\u2013${e[a+1]}`:`${o}+`);return x`<div class="legend">${i.map((o,a)=>x`<span><i style="background:${HV[a+1]}"></i>${o}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return Z1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(V=>V.reduce((l,M)=>l+M,0)),1e-4),o=84,a=[];e.sectors.forEach((V,l)=>{let M=0;V.forEach((u,f)=>{if(!u)return;let g=M+u;a.push(Z1`<path d=${iv(100,100,M/i*o,g/i*o,l*22.5-10,l*22.5+10)} fill=${HV[f]} opacity="0.9"></path>`),M=g})});let n=[.25,.5,.75,1].map(V=>Z1`<circle class="ring" cx="100" cy="100" r=${o*V} stroke-dasharray="2 3"></circle>`),s=[["N",0],["E",90],["S",180],["W",270]].map(([V,l])=>Z1`<text class="lbl ${V==="N"?"n":""}" x=${100+Math.sin(l*Math.PI/180)*95} y=${100-Math.cos(l*Math.PI/180)*95}>${V}</text>`);return Z1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${n}${a}${s}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(t){t.has("fit")&&this.toggleAttribute("fit",!!this.fit),this.fit?this._watchFit():this._fitRo&&(this._fitRo.disconnect(),this._fitRo=null,this._fitPx=null);let e=this._ids(),i=`${e.speed}|${e.gust}|${e.dir}|${this.hass?.themes?.darkMode}`;(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(e).catch(o=>this._error=`History unavailable: ${o?.message||o}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}_watchFit(){this._fitRo||(this._fitRo=new ResizeObserver(()=>this._refit()),this._fitRo.observe(this));let t=this.renderRoot.querySelector(".fitmain");t&&t!==this._fitObserved&&(this._fitObserved&&this._fitRo.unobserve(this._fitObserved),this._fitRo.observe(t),this._fitObserved=t),requestAnimationFrame(()=>this._refit())}_refit(){let t=this.renderRoot.querySelector(".fitmain"),e=[...this.renderRoot.children].filter(g=>g.getBoundingClientRect().height>0&&getComputedStyle(g).position!=="absolute");if(!t||!e.length)return;let i=this.clientHeight,o=t.getBoundingClientRect().height,a=t.getBoundingClientRect().width;if(!i||!o||!a)return;let n=e[0].getBoundingClientRect().top,l=Math.max(...e.map(g=>g.getBoundingClientRect().bottom))-n-i;if(Math.abs(l)<3)return;let M=Math.max(.5,o/a),u=a-l/M,f=t.parentElement?.clientWidth||this.clientWidth;u=Math.max(80,Math.min(f,u)),!(l<0&&this._fitPx==null)&&(u>=f-1&&(u=null),u!=null&&(u=Math.round(u)),!(u===this._fitPx||u!=null&&this._fitPx!=null&&Math.abs(u-this._fitPx)<2)&&(this._fitPx=u))}disconnectedCallback(){super.disconnectedCallback(),this._fitRo?.disconnect(),this._fitRo=null,this._fitObserved=null,this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await u4(this.hass,[t.speed,t.gust,t.dir],24),i=x5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=ov(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:p7(e[t.speed]||[]).map(o=>({x:o.t,y:o.v})),gust:p7(e[t.gust]||[]).map(o=>({x:o.t,y:o.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),o=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",n=Nt(this,24,this.hass?.locale?.language);this.config?.chart_legend&&(n.plugins.legend={display:!0,position:"top",align:"end",labels:{color:n._text,boxWidth:10,boxHeight:10,font:{size:11}}}),n.scales.y={min:0,grid:{color:n._grid},ticks:{color:n._text,callback:V=>`${V} ${t.unit}`,maxTicksLimit:4}};let s=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:o,backgroundColor:T3(o,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new $2(e,{type:"line",data:{datasets:s},options:n,plugins:this.config?.chart_legend?tV:It})}};D(W9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},fit:{attribute:!1},_fitPx:{state:!0},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),D(W9,"styles",[q1,s1`
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
      .wr { min-height: 0; }
      /* Fit mode: the chart is a fixed strip and the rose / dial takes what's left. */
      :host([fit]) .body { flex: 0 0 auto; height: var(--wsfc-wind-chart-h, 110px); min-height: 0; }
      .wr > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; display: block; }
    `]);function iv(r,t,e,i,o,a){let n=(k,O)=>[r+Math.sin(O*Math.PI/180)*k,t-Math.cos(O*Math.PI/180)*k],[s,V]=n(i,o),[l,M]=n(i,a),[u,f]=n(e,a),[g,b]=n(e,o);return`M${s} ${V} A${i} ${i} 0 0 1 ${l} ${M} L${u} ${f} A${e} ${e} 0 0 0 ${g} ${b} Z`}function ov(r,t,e){let i=r.filter(l=>l.v!=null),o=t.filter(l=>l.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),n=0,s=0,V=0;for(let l=0;l<i.length;l++){let M=i[l].t,u=Math.min((i[l+1]?.t??Date.now())-M,30*6e4);if(u<=0)continue;for(;V+1<o.length&&o[V+1].t<=M;)V++;let f=o[V]?.t<=M?o[V].v:o[0]?.v??0;if(n+=u,f<e[0]){s+=u;continue}let g=e.findIndex(k=>f<k);g===-1&&(g=e.length);let b=Math.round((i[l].v%360+360)%360/22.5)%16;a[b][g]+=u}return n?{sectors:a.map(l=>l.map(M=>M/n)),calm:s/n}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",W9);var VV=`/* required styles */\r
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
`;var Cv="https://api.rainviewer.com/public/weather-maps.json",nv=7,sv=600,Hv=1800,Vv=5*6e4,h7=null,Lv=async()=>h7||(h7=(await Promise.resolve().then(()=>O7(lV(),1))).default),Gt="https://server.arcgisonline.com/ArcGIS/rest/services",Zi="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",cV={gray:r=>[`${Gt}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,Zi,16],streets:()=>[`${Gt}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,Zi,19],topo:()=>[`${Gt}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,Zi,19],imagery:()=>[`${Gt}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},lv={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},U9=class extends r1{constructor(){super();D(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],o=this._overlay??this.config?.owm_default??"none";if(this.lite)return x`${F1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map")}${q6(this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar loop":"Map")}`;let a=x`<span class="ctl">
      ${this._radarOn?x`
        ${this._error?x`<span class="err" title=${this._error}>Radar unavailable</span>`:x`<span class="time" aria-live="off">${this._frameLabel||""}</span>`}
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"} title=${this._playing?"Pause":"Play"}>
          <ha-icon icon=${this._playing?"mdi:pause":"mdi:play"}></ha-icon>
        </button>`:""}
      ${e?E7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(n=>({value:n,label:`${this._radarOn?"+ ":""}${lv[n]||n}`}))],o,n=>this._setOverlay(n),"Map overlay"):""}
    </span>`;return x`
      ${F1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",a)}
      <div class="map"><div id="map"></div></div>
    `}firstUpdated(){this.lite||this._initMap()}async _initMap(){await Lv();let e=this.renderRoot.getElementById("map");if(!e||this._map||this.lite)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,o=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=h7.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,o],this.config?.zoom??7),this._base=null,this._applyBase(),h7.circleMarker([i,o],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),Vv)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("lite")&&e.get("lite")!==void 0&&(this.lite?this._teardown():this._map||this._initMap()),e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),this._teardown()}_teardown(){clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null,this._frames=[],this._base=null,this._owm=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&!this.lite&&this._initMap()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,o,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(cV[e.base_map]||cV.gray)(this._dark);this._base=h7.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:o}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(Cv);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),o=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!o.length||!this._map)return;let a=new Map(this._frames.map(n=>[n.path,n]));this._frames=o.map(n=>{let s=a.get(n.path);if(s)return a.delete(n.path),s;let V=h7.tileLayer(`${i.host}${n.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:nv,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...n,layer:V,nowcast:(i.radar?.nowcast||[]).includes(n)}}),a.forEach(n=>this._map.removeLayer(n.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,n)=>a.layer.setOpacity(n===e?i:0));let o=this._frames[e];if(o){let a=new Date(o.time*1e3),n=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=o.nowcast?`${n} (forecast)`:n}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?Hv:sv)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=h7.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};D(U9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),D(U9,"styles",[q1,G6,T0(VV),s1`
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
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",U9);var cv=5*6e4,j9=class extends r1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return g5(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return S;let t=Q1[this._metric]||{},e=this._entity,i=W2(this.hass,e),o=this.config?.unit??i?.unit??"",a=c4(this._metric,o,this.config?.digits),n=this.config?.color||t.color||"var(--primary-color)",s=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?x`
      <div class="top" style=${`--m-color:${n}`} @click=${()=>n2(this,e)}>
        ${this.config?.show_icon===!1?S:x`<ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>`}
        ${this.config?.show_title===!1?x`<span class="name"></span>`:x`<span class="name">${s}</span>`}
        ${this.config?.show_minmax===!1||!this._today?S:x`<span class="mm"><span class="lo">Min ${I1(this._today.min,a)}</span><br /><span class="hi">Max ${I1(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>n2(this,e)}>
        <div class="val">${typeof i?.value=="number"?I1(i.value,a):i?.value??"\u2014"}<small>${o}</small></div>
        <div class="cap">${this._caption(i,o)}</div>
      </div>
      ${this.config?.chart==="none"?S:x`<div class="spark" @click=${()=>n2(this,e)}>${this._spark(n)}</div>`}
    `:x`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=Q1[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?bH(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return S;let i=200,o=40,a=e.map(F=>F.v).filter(F=>F!=null);if(!a.length)return S;let n=Date.now()-(this.config?.hours||24)*36e5,s=Date.now(),V=F=>(F-n)/(s-n)*i,l=(this.config?.chart||Q1[this._metric]?.chart)==="bar",M=Math.min(...a),u=Math.max(...a);l&&(M=0),u-M<1e-9&&(u+=1,M=l?0:M-1);let f=F=>o-(F-M)/(u-M)*o;if(l){let F=Math.max(2,i/(this.config?.hours||24)*.7);return Z1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(Q=>Q.v>0?Z1`<rect x=${V(Q.t)-F/2} y=${f(Q.v)} width=${F} height=${o-f(Q.v)} rx="1" fill=${t}></rect>`:S)}
        <line x1="0" x2=${i} y1=${o} y2=${o} stroke=${t} stroke-opacity=".35"></line></svg>`}let g="",b=!1;for(let F of e){if(F.v==null){b=!1;continue}g+=`${b?"L":"M"}${V(F.t).toFixed(1)} ${f(F.v).toFixed(1)}`,b=!0}let k=e.find(F=>F.v!=null),O=[...e].reverse().find(F=>F.v!=null),T=`${g}L${V(O.t).toFixed(1)} ${o}L${V(k.t).toFixed(1)} ${o}Z`,$=`g${Math.random().toString(36).slice(2,8)}`;return Z1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${$} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${T} fill=${`url(#${$})`}></path>
      <path d=${g} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<cv||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,o]=await Promise.all([u4(this.hass,[t],e),iV(this.hass,[t])]),a=i[t]||[],n=(this.config?.chart||Q1[this._metric]?.chart)==="bar",s=this.config?.cumulative??Q1[this._metric]?.cumulative??!1;this._series=n?s?Wt(a,36e5):Ut(a,36e5):p7(a,160);let V=(o[t]||[]).map(l=>l.v).filter(l=>l!=null);if(this._today=V.length?{min:Math.min(...V),max:Math.max(...V)}:null,Q1[this._metric]?.trend){let l=Date.now()-108e5,M=[...a].reverse().find(f=>f.t<=l&&f.v!=null),u=[...a].reverse().find(f=>f.v!=null);if(M&&u){let f=u.v-M.v,g=SH(W2(this.hass,t)?.unit||"");this._trend=f>g?"Rising":f<-g?"Falling":"Steady"}}}};D(j9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),D(j9,"styles",[q1,s1`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",j9);var Mv=s1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,MV=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),G9=class extends r1{render(){if(!this.hass)return S;let e=this.hass.states[this.station?.entity]?.state;return x`
      ${F1(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?MV(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):S}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?S:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],o=x5(t,e,"temperature");o&&i.push(`${I1(o.value,1)}${o.unit}`);let a=x5(t,e,"apparent_temperature");a&&o&&Math.abs(a.value-o.value)>=2&&i.push(`feels like ${I1(a.value,0)}${a.unit}`);let n=x5(t,e,"wind_speed"),s=x5(t,e,"wind_bearing"),V=x5(t,e,"wind_gust_speed");n&&(n.value<1?i.push("calm"):i.push(`wind ${s?`from the ${M4(s.value)} `:""}${I1(n.value,0)} ${n.unit}${V&&V.value>n.value*1.3?`, gusting ${I1(V.value,0)}`:""}`));let l=x5(t,e,"precipitation"),M=W2(e,g5("rain_today",t,e));l&&l.value>0?i.push(`raining ${I1(l.value,2)} ${l.unit}`):M&&M.value>0?i.push(`${I1(M.value,2)} ${M.unit} of rain today`):(l||M)&&i.push("dry");let u=x5(t,e,"humidity");if(u&&i.push(`humidity ${I1(u.value,0)}%`),!i.length)return"Waiting for station data.";let f=i.join(", ");return f[0].toUpperCase()+f.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return S;let i=e.attributes||{},o=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return x`<div class="text" @click=${()=>n2(this,t)}>${o}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return S;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?S:i.slice(0,3).map(o=>{let a=String(o.Severity||o.severity||"").toLowerCase();return x`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>n2(this,t)}>
        <b>${o.Event||o.event||o.title||"Weather alert"}</b>${o.Headline||o.headline||""}
      </div>`})}_astro(){let t=Zt(this.hass),e=kt(this.hass),i=PH(this.hass),o=p4(this.hass),a=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`;return x`<div class="astro">
      ${this.config?.show_sun===!1||!i?S:x`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?S:x`<div><h4>${F9(o.phase)}${o.name}</h4>
            <p>${Math.round(o.fraction*100)}% illuminated<br />
            ${o.nextFull?x`Full ${e.format(o.nextFull)}`:""}${o.nextNew?x` · New ${e.format(o.nextNew)}`:""}</p></div>`}
    </div>`}};D(G9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),D(G9,"styles",[q1,s1`
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
    `]);var q9=class extends r1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=$t(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return S;let t=Number(this.config?.day_offset??1),e=UH(this._daily,t),i=this.config?.entity||this.station?.entity,o=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let n=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),s=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${n}`:n);if(!e)return x`${F1(this.config,"mdi:calendar-today",s)}<div class="note">Forecast not available yet.</div>`;let V=o.temperature_unit||"",l=o.precipitation_unit||"",M=o.wind_speed_unit||"",u=[];return e.precipitation!=null&&u.push(["Precipitation",`${I1(e.precipitation,l==="in"?2:1)} ${l}`]),e.precipitation_probability!=null&&u.push(["Chance of rain",`${I1(e.precipitation_probability)}%`]),e.wind_speed!=null&&u.push(["Wind",`${e.wind_bearing!=null?`${M4(Number(e.wind_bearing))} `:""}${I1(e.wind_speed)} ${M}`]),e.wind_gust_speed!=null&&u.push(["Gusts",`${I1(e.wind_gust_speed)} ${M}`]),e.humidity!=null&&u.push(["Humidity",`${I1(e.humidity)}%`]),e.uv_index!=null&&u.push(["UV index",I1(e.uv_index,1)]),x`
      ${F1(this.config,"mdi:calendar-today",s)}
      <div class="main" @click=${()=>n2(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?x`<span class="lo">${I1(e.templow)}°</span> / `:S}<span class="hi">${I1(e.temperature)}°</span></div>
          <div class="cond">${MV(this.hass,e.condition)}${V?` \xB7 ${V}`:""}</div>
        </div>
      </div>
      <div class="rows">${u.map(([f,g])=>x`<span>${f}</span><span>${g}</span>`)}</div>
    `}};D(q9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),D(q9,"styles",[q1,Mv,s1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var Y9=class extends r1{render(){let t=this.config||{},e=t.show_status?vH(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return x`
      ${t.icon===""||t.show_icon===!1||t.show_title===!1?S:x`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      ${t.show_title===!1?S:x`<div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?x`<div class="sub">${t.subtitle}</div>`:S}</div>`}
      ${e?x`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:S}
      <span class="grow"></span>
      ${this.bar?x`<div class="bar">${this.bar}</div>`:S}
    `}};D(Y9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),D(Y9,"styles",[j6,s1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var Q9=class extends r1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),x`${this.config?.show_title??!!this.config?.title?F1(this.config,"mdi:card-outline",""):S}
      ${this._err?x`<div class="note">${this._err}</div>`:x`<div class="host">${this._el||S}</div>`}`):x`${F1(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};D(Q9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),D(Q9,"styles",[q1,s1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",G9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",q9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",Y9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",Q9);var K9=class extends r1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=this.config?.panels||[];if(!t.some(a=>a&&O3[a.type]))return x`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical",i=String(this.hiddenKids||"").split(","),o=e&&Number(this.config?.rows)>0;return t.map((a,n)=>{if(!a||!O3[a.type]||i[n]==="true")return S;let s=C2(a);if(!s)return S;let V=Number(a.grow??(e?a.rows||o?1:0:1)),l=Number(a.rows??0),M=[`--grow:${V}`,a.min_width?`--basis:${a.min_width}px`:"",e&&l?`min-height:calc(${l} * var(--wsfc-row, 110px) + ${l-1} * var(--wsfc-gap, 12px))`:""].join(";"),u=s.bare||a.type==="stack",f=[a.tile_shadow===!1?"no-shadow":"",a.tile_border===!1?"no-border":"",a.tile_glow===!1?"no-glow":""].join(" ");return x`<section class="tile ${a.type} ${u?"bare":""} ${f}" style=${M}>${this._el(a,n)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,o=this._els.get(i);if(!o){o=document.createElement(C2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,o)}return o.config=t,o.station=this.station,o.lite=this.lite,o.hass=this.hass,o}};D(K9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},hiddenKids:{attribute:!1}}),D(K9,"styles",[U6,s1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",K9);var P3=O7(j7(),1);var dV=180/Math.PI;var dv=r=>r instanceof Date&&!isNaN(r),X9=class extends r1{render(){if(!this.hass)return S;let{latitude:t,longitude:e}=this.hass.config||{};if(t==null)return x`${F1(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,o=new Date(i);o.setHours(12,0,0,0);let a=P3.getTimes(o,t,e),n=P3.getMoonTimes(i,t,e),s=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),V=u=>dv(u)?s.format(u):"\u2014",l=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",n.rise,n.set,!0]],M=this.config||{};return x`
      ${F1(M,"mdi:telescope","Astronomy")}
      <div class="wrap">
        ${M.show_chart===!1?S:x`<div class="chart">${this._chart(t,e,i)}</div>`}
        <div class="side">
          ${M.show_table===!1?S:x`<table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${l.map(([u,f,g,b])=>x`<tr class=${b?"main":""}><td>${u}</td>
              <td>${u==="Moon"&&n.alwaysUp?"up all day":u==="Moon"&&n.alwaysDown?"down all day":V(f)}</td>
              <td>${u==="Moon"&&(n.alwaysUp||n.alwaysDown)?"":V(g)}</td></tr>`)}
          </table>`}
          ${D9(this.hass,M,void 0,!0)}
        </div>
      </div>
    `}_chart(t,e,i){let l=new Date(i);l.setHours(0,0,0,0);let M=96,u=864e5/M,f=J=>70-J/90*58,g=J=>{let X="";for(let i1=0;i1<=M;i1++){let d1=new Date(l.getTime()+i1*u);X+=`${i1?"L":"M"}${(i1/M*300).toFixed(1)} ${f(J(d1)).toFixed(1)}`}return X},b=J=>P3.getPosition(J,t,e).altitude*dV,k=J=>P3.getMoonPosition(J,t,e).altitude*dV,O=(i-l)/864e5*300,T=b(i),$=k(i),F=[0,6,12,18,24],Q=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),U="var(--wsfc-sun-color, #fdd835)",e1="var(--wsfc-moon-color, #b0bec5)";return Z1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${F.map(J=>Z1`<line x1=${J/24*300} x2=${J/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,J/24*300))} y=${144} text-anchor="middle">${Q.format(new Date(l.getTime()+J*36e5))}</text>`)}
      <path d=${g(k)} fill="none" stroke=${e1} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${g(b)} fill="none" stroke=${U} stroke-width="2.2" opacity=".35"></path>
      <path d=${g(b)} fill="none" stroke=${U} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${O} x2=${O} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${O} cy=${f($)} r="5" fill=${e1} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${O} cy=${f(T)} r="7" fill=${U} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${U}>Sun ${Math.round(T)}°</text>
      <text class="lbl" x="4" y=${32} fill=${e1}>Moon ${Math.round($)}°</text>
    </svg>`}};D(X9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),D(X9,"styles",[q1,B9,s1`
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
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",X9);var pv={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function uv(r,t){let e=Number(r.latitude??t?.config?.latitude??39.5),i=Number(r.longitude??t?.config?.longitude??-98.35),o=t?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(o?"in":"mm"),metricTemp:r.temp_unit||(o?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(o?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:e.toFixed(3),lon:i.toFixed(3),detailLat:e.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var J9=class extends r1{render(){if(!this.hass)return S;let t=this.config||{},e=uv(t,this.hass);e!==this._url&&(this._url=e);let i=t.show_title===!1?S:F1(t,"mdi:weather-windy",t.title||`${pv[t.overlay||"wind"]||"Wind"} map`);return this.lite?x`${i}${q6("mdi:map-marker-radius-outline","Windy map")}`:x`${i}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`}};D(J9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1}}),D(J9,"styles",[q1,G6,s1`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",J9);var E3={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},air_quality:{title:"Air quality",icon:"mdi:air-filter",metrics:["aqi","pm2_5"],card:{days_to_show:2,period:"hour",chart_type:"line",stat_types:["mean","max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}},qt={temps:{card:{hours_to_show:36,points_per_hour:4},series:{temperature:{color:"#ff7043",fill_opacity:.25,show_extrema:"always"},apparent_temperature:{color:"#ffb74d",show_fill:!1,line_style:"dashed",line_width:1.5},dew_point:{color:"#26c6da",show_fill:!1,line_width:1.5}}},wind:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0,lower_bound_secondary:0,upper_bound_secondary:360},metrics:["wind_speed","wind_gust_speed","wind_bearing"],series:{wind_speed:{color:"#42a5f5",aggregate_func:"avg",show_fill:!1,show_extrema:"always",show_extrema_min:!1},wind_gust_speed:{color:"#ff9800",aggregate_func:"max",fill_opacity:.2,line_width:1,show_extrema:"always",show_extrema_min:!1},wind_bearing:{color:"#9e9e9e",y_axis:"secondary",show_fill:!1,line_width:1,smooth:!1,graph_type:"step",unit:"\xB0"}}},pressure_humidity:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0},series:{pressure:{color:"#42a5f5",show_fill:!1,decimals:2},humidity:{color:"#26a69a",y_axis:"secondary",fill_opacity:.2}}},solar_uv:{card:{hours_to_show:24,points_per_hour:4,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{solar_radiation:{color:"#ffd54f",fill_opacity:.3,show_extrema:"always",show_extrema_min:!1},uv_index:{color:"#ff7043",y_axis:"secondary",aggregate_func:"max",show_fill:!1,line_width:2}}},rain:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{rain_rate:{color:"#7e57c2",graph_type:"bar",aggregate_func:"max",decimals:2},rain_today:{color:"#1e88e5",y_axis:"secondary",aggregate_func:"max",fill_opacity:.2,decimals:2,smooth:!1}}},air_quality:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{aqi:{color:"#66bb6a",fill_opacity:.2,show_extrema:"always",show_extrema_min:!1,decimals:0},pm2_5:{color:"#ffb74d",y_axis:"secondary",show_fill:!1,decimals:1}}},temperature_range:{card:{hours_to_show:720,group_by:"date"},series:{temperature:{color:"#ff7043",show_range_band:!0,show_fill:!1,show_extrema:"always"}}}};function ki(r){let t=r?.engine||"auto";return t==="builtin"?"builtin":t==="sgcc"||customElements.get("statistics-graph-chart-card")?"sgcc":"builtin"}function hv(r,t,e){return ki(r)==="sgcc"?mv(r,t,e):fv(r,t,e)}function mv(r,t,e){let i=qt[r.preset]||qt.temps,o=E3[r.preset]||E3.temps,a=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics||o.metrics,n=Array.isArray(r.entities)&&r.entities.length?r.entities:a.map(V=>{let l=g5(V,t,e,r.entity_overrides?.[V]);if(!l)return null;let M=r.colors?.[V];return{entity:l,name:Q1[V]?.label||V,...i.series?.[V]||{},...M?{color:M}:{}}}).filter(Boolean),s={type:"custom:statistics-graph-chart-card",card_header:"",card_shadow:!1,card_border:!1,card_background_color:"transparent",card_padding:0,height:"auto",show_legend:!0,...i.card,entities:n};return n.some(V=>V.y_axis==="secondary")||(delete s.show_y2_axis,delete s.lower_bound_secondary,delete s.upper_bound_secondary),r.days_to_show!=null&&(s.hours_to_show=Number(r.days_to_show)*24),r.hours_to_show!=null&&(s.hours_to_show=Number(r.hours_to_show)),F2(s,r.card||{})}function fv(r,t,e){let i=E3[r.preset]||E3.temps,o=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:o.map(s=>{let V=g5(s,t,e,r.entity_overrides?.[s]);return V?{entity:V,name:Q1[s]?.label||s}:null}).filter(Boolean),n={type:"statistics-graph",...i.card,entities:a};for(let s of["days_to_show","period","chart_type","stat_types","hide_legend"])r[s]!=null&&(n[s]=r[s]);return F2(n,r.card||{})}var t6=class extends r1{connectedCallback(){super.connectedCallback(),customElements.get("statistics-graph-chart-card")||customElements.whenDefined("statistics-graph-chart-card").then(()=>this.requestUpdate())}render(){if(!this.hass)return S;let t=this.config||{},e=E3[t.preset]||E3.temps,i=hv(t,this.station,this.hass);return i.entities?.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),x`${t.show_title===!1?S:F1(t,e.icon,e.title)}
      ${this._err?x`<div class="note">${this._err}</div>`:x`<div class="host">${this._el||S}</div>`}`):x`${F1(t,e.icon,e.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};D(t6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),D(t6,"styles",[q1,s1`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",t6);var Av=[["online",(r,t)=>t==="connectivity"||/\bonline\b/.test(r)],["battery",(r,t)=>t==="battery"||/batt/.test(r)],["capacitor",r=>/capacitor|cap[\s_-]?volt/.test(r)],["rssi",(r,t)=>/rssi/.test(r)||t==="signal_strength"&&/dbm/.test(r)],["signal",(r,t)=>/signal/.test(r)||t==="signal_strength"]],vv={online:"mdi:lan-connect",battery:"mdi:battery",capacitor:"mdi:flash",rssi:"mdi:wifi-strength-2",signal:"mdi:signal"},xv={online:"Online",battery:"Battery",capacitor:"Capacitor",rssi:"RSSI",signal:"Signal"};function gv(r,t){let e=t?.state,i=t?.attributes||{};if(e==null||e==="unavailable"||e==="unknown")return"bad";let o=Number(e),a=i.unit_of_measurement||"";if(r==="online")return e==="on"?"ok":"bad";if(r==="battery")return t.entity_id.startsWith("binary_sensor.")?e==="on"?"bad":"ok":a==="%"?o<15?"bad":o<30?"warn":"ok":a==="V"?o<2.3?"bad":o<2.5?"warn":"ok":!isNaN(o)&&o<=5?o<=1?"bad":o<=2?"warn":"ok":"";if(r==="capacitor")return a==="V"&&o<2.3?"warn":"ok";if(r==="rssi")return o<-90?"bad":o<-80?"warn":"ok";if(r==="signal"){if(a==="%")return o<25?"bad":o<50?"warn":"ok";if(!isNaN(o)&&o<=4)return o<=1?"bad":o<=2?"warn":"ok"}return""}function _v(r,t){let e=[];for(let i of ni(r,t)){let o=t.devices?.[i],a=[];for(let s of l4(t,i)){let V=t.entities[s],l=t.states[s];if(!l)continue;let M=`${s} ${l.attributes?.friendly_name||""} ${l.attributes?.unit_of_measurement||""}`.toLowerCase(),u=l.attributes?.device_class,f=Av.find(([,k])=>k(M,u))?.[0];if(!f)continue;let g=l.attributes?.friendly_name||s,b=o?.name_by_user||o?.name;b&&g.startsWith(b)&&(g=g.slice(b.length).trim()||xv[f]),a.push({eid:s,kind:f,name:g,st:l,level:gv(f,l),platform:V.platform})}let n=["online","battery","capacitor","signal","rssi"];a.sort((s,V)=>n.indexOf(s.kind)-n.indexOf(V.kind)||s.name.localeCompare(V.name)),a.length&&e.push({device:o?.name_by_user||o?.name||i,model:o?.model,rows:a})}return e}var e6=class extends r1{render(){if(!this.hass)return S;let t=this.config||{},e=_v(this.station,this.hass),i=o=>{let a=o.st,n=a.attributes?.unit_of_measurement||"";return o.kind==="online"?a.state==="on"?"Online":"Offline":a.entity_id.startsWith("binary_sensor.")?o.kind==="battery"?a.state==="on"?"Low":"OK":a.state:["unavailable","unknown"].includes(a.state)?"\u2014":`${a.state}${n?` ${n}`:""}`};return x`
      ${F1(t,"mdi:heart-pulse","Station health")}
      ${e.length?e.map(o=>x`<div class="grp">
            ${e.length>1||t.show_devices?x`<div class="dev">${o.device}${o.model?` \xB7 ${o.model}`:""}</div>`:S}
            <div class="rows">${o.rows.map(a=>x`<div class="row ${a.level}" @click=${()=>n2(this,a.eid)} title=${a.eid}>
              <ha-icon icon=${a.kind==="battery"&&a.level==="bad"?"mdi:battery-alert":vv[a.kind]}></ha-icon>
              <div class="t"><div class="n">${a.name}</div><div class="v">${i(a)}</div></div>
            </div>`)}</div>
          </div>`):x`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `}_lastReport(){let e=["temperature","humidity","wind_speed","pressure"].map(n=>y3(this.station,this.hass,n)).filter(Boolean).map(n=>Date.parse(this.hass.states[n]?.last_updated||this.hass.states[n]?.last_changed||"")).filter(n=>!isNaN(n));if(!e.length)return S;let i=Math.round((Date.now()-Math.max(...e))/6e4),o=i>30?"bad":i>10?"warn":"",a=i<1?"just now":i<60?`${i} min ago`:`${Math.floor(i/60)} h ${i%60} min ago`;return x`<div class="last ${o}">Last reading ${a}</div>`}};D(e6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),D(e6,"styles",[q1,s1`
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
    `]);customElements.get("wsfc-panel-health")||customElements.define("wsfc-panel-health",e6);var wv={up:"mdi:arrow-top-right",down:"mdi:arrow-bottom-right",flat:"mdi:arrow-right"},bv={up:"rising tomorrow",down:"falling tomorrow",flat:"same tomorrow"},r6=class extends r1{shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this._ids||e.entities!==this.hass.entities?!0:this._ids.some(i=>e.states[i]!==this.hass.states[i])}render(){if(!this.hass)return S;let t=this.config||{},e=St(t,this.hass);if(this._ids=e.entities,!e.total)return x`${F1(t,"mdi:flower-pollen","Pollen")}
        <div class="note">No pollen sensors found. Install the Pollen Levels integration from HACS (Google Pollen API — US and worldwide), or list sensors under this panel's options.</div>`;let i=[e.source,e.town,e.status].filter(Boolean);return x`
      ${F1(t,"mdi:flower-pollen","Pollen")}
      <div class="hdr">${i.join(" \xB7 ")}</div>
      <div class="rows">${e.rows.map(o=>x`
        <div class="row ${o.level}" @click=${()=>n2(this,o.entity)} role="button" tabindex="0"
          @keydown=${a=>(a.key==="Enter"||a.key===" ")&&n2(this,o.entity)}
          aria-label="${o.name}: ${bt[o.level]}${o.value!=null?`, ${o.value} of 5`:""}${o.trend?`, ${bv[o.trend]}`:""}">
          <ha-icon icon=${o.icon}></ha-icon>
          <span class="nm">${o.name}</span>
          <span class="bar"><i style="width:${o.pct}%"></i></span>
          <span class="chip">${bt[o.level]}</span>
          <span class="val">${o.value??"\u2014"}</span>
          ${t.show_tomorrow!==!1&&o.trend?x`<ha-icon class="tr ${o.trend}" icon=${wv[o.trend]} title=${`Tomorrow: ${o.tomorrow??"\u2014"}`}></ha-icon>`:x`<span></span>`}
        </div>`)}
      </div>
      ${t.show_season===!1?S:x`<div class="slabel">Season</div><div class="strip" role="img" aria-label="Pollen season by month">
        ${e.strip.map((o,a)=>x`<span class="m ${o?`c${Math.min(o,3)}`:""} ${a+1===e.month?"now":""}"
          title="${wt[a]}: ${o} species in season"><i></i>${wt[a][0]}</span>`)}
      </div>`}
    `}};D(r6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),D(r6,"styles",[q1,s1`
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
    `]);customElements.get("wsfc-panel-pollen")||customElements.define("wsfc-panel-pollen",r6);var Sv=["pm2_5","pm10","ozone","co2"],yv={pm2_5:"mdi:blur",pm10:"mdi:blur-linear",ozone:"mdi:molecule",co2:"mdi:molecule-co2"},Oi=200,Zv=r=>r==null?"":s0[r].short||s0[r].name,kv=["Low","Moderate","Elevated","High","Very high","Very high"],i6=[0,50,100,150,200,300,500];function Ov(r,t){if(r==null)return null;let e=Math.max(0,Math.min(r,i6[t])),i=i6.findIndex((a,n)=>n>0&&e<=a)-1;i<0&&(i=t-1);let o=(e-i6[i])/(i6[i+1]-i6[i]);return(i+o)/t*100}function Tv(r,t,e){let i=r||{},o=O=>i.entities?.[O]||xt(t,e,O),a=o("aqi"),n=W2(e,a),s=typeof n?.value=="number"?n.value:null,V=T9(s),l=a?e.states[a]:null,M=a&&wH(e,a),u=i.show_location===!1?null:i.location||(M?W2(e,M)?.value:null),f=Array.isArray(i.pollutants)&&i.pollutants.length?i.pollutants:Sv,g=[];for(let O of f){let T=o(O),$=W2(e,T);if(!T||!$||typeof $.value!="number")continue;let F=gt(O,$.value,$.unit),Q=O!=="co2";g.push({k:O,e:T,label:Li[O]?.label||O,icon:yv[O],value:$.value,unit:$.unit,index:F,level:T9(F),epa:Q,digits:O==="ozone"&&!/ppm/i.test($.unit)?1:c4(O,$.unit)})}for(let O of Array.isArray(i.extra)?i.extra:[]){let T=typeof O=="string"?O:O?.entity,$=W2(e,T);if(!$||typeof $.value!="number")continue;let F=e.states[T],Q=O.label||F?.attributes?.friendly_name||T,U=Object.entries(li).find(([,X])=>X.re.test(`${T} ${Q}`)),e1=Array.isArray(O.thresholds)&&O.thresholds.length?O.thresholds.map(Number):null,J=e1?gt(null,$.value,$.unit,e1):U?gt(U[0],$.value,$.unit):null;g.push({k:T,e:T,label:Q,icon:O.icon||F?.attributes?.icon||"mdi:flask-outline",value:$.value,unit:$.unit,index:J,level:T9(J),epa:!1,digits:O.digits??(Math.abs($.value)<1?3:Math.abs($.value)<10?2:0)})}let b=l?.attributes?.main_pollutant||l?.attributes?.dominant_pollutant||g.filter(O=>O.epa&&O.index!=null).sort((O,T)=>T.index-O.index)[0]?.label||"",k=i.show_source===!1?"":i.source||l?.attributes?.source||(a?Z3(e,a):"");return{aqiE:a,aqi:s,level:V,name:l?.attributes?.description||l?.attributes?.category||(V!=null?s0[V].name:""),area:u,source:k,main:b,time:l?.attributes?.time||null,rows:g,entities:[a,M,...g.map(O=>O.e)].filter(Boolean)}}var h4=r=>r.level==null?"No standard":r.epa?Zv(r.level):kv[r.level],Yt=r=>r.index==null?"":r.epa?`AQI ${r.index} \u2014 ${s0[r.level].name}`:`Index ${r.index} on the AQI scale`,pV=r=>r.index==null?0:Math.min(100,r.index/Oi*100),Qt=r=>x`${I1(r.value,r.digits)}<small>${r.unit}</small>`,o6=class extends r1{shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this._ids?!0:this._ids.some(i=>e.states[i]!==this.hass.states[i])}render(){if(!this.hass)return S;let t=this.config||{},e=Tv(t,this.station,this.hass);if(this._ids=e.entities,!e.aqiE&&!e.rows.length)return x`${F1(t,"mdi:air-filter","Air quality")}
        <div class="note">No air-quality sensors found. Add Home Assistant's AirNow integration (free key from airnowapi.org), an outdoor PM2.5 sensor, or set the entities under this panel's options.</div>`;let i=t.layout||"scale";return i==="scale"?x`${F1(t,"mdi:air-filter","Air quality")}${this._scaleLayout(e,t)}`:x`
      ${F1(t,"mdi:air-filter","Air quality")}
      ${e.aqiE&&t.show_aqi!==!1?this._aqi(e,t,i):S}
      ${i==="rows"?this._rows(e):i==="bars"?this._bars(e,t):this._tiles(e)}
    `}_aqi(t,e,i){let o=t.level!=null?s0[t.level].color:"var(--wsfc-muted)",a=t.time?new Date(t.time):null,n=a&&!isNaN(a)?a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",s=["US AQI",t.area,t.source&&t.source!==t.area?t.source:"",t.main?`main pollutant ${t.main}`:"",n].filter(Boolean).join(" \xB7 "),V=t.aqi!=null?Math.min(100,Math.min(t.aqi,300)/300*100):null,l=e.show_scale??i==="tiles";return x`
      <div class="top" @click=${()=>n2(this,t.aqiE)}>
        <span class="aqi" style="color:${o}">${I1(t.aqi)}</span>
        <div><div class="cat">${t.name||"\u2014"}</div><div class="sub">${s}</div></div>
      </div>
      ${l?x`
        <div class="scale" role="img" aria-label="AQI ${I1(t.aqi)} on a 0 to 300 scale">
          ${s0.slice(0,5).map((M,u)=>x`<span style="background:${M.color};flex:${u<4?50:100}"></span>`)}
          ${V!=null?x`<i class="mark" style="left:${V}%"></i>`:S}
        </div>
        <div class="ticks">${[0,50,100,150,200,300].map(M=>x`<span style="left:${M/300*100}%">${M===300?"300+":M}</span>`)}</div>`:S}`}_seg(t,e,i=!1){let o=e?6:5,a=Ov(t,o),n=T9(t);return x`<div class="seg ${i?"big":""}" role="img" aria-hidden="true">
      ${s0.slice(0,o).map(s=>x`<span style="background:${s.color}"></span>`)}
      ${a!=null?x`<i class="knob" style="left:${a}%;--c:${s0[n].color}"></i>`:S}
    </div>`}_scaleLayout(t,e){let i=t.time?new Date(t.time):null,o=i&&!isNaN(i)?i.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",a=[t.source,t.area,t.name,o].filter(Boolean).join(" \xB7 ");return x`
      ${a?x`<div class="hdr">${a}</div>`:S}
      ${t.aqiE&&e.show_aqi!==!1?x`
        <div class="shead" @click=${()=>n2(this,t.aqiE)} role="button" tabindex="0"
          @keydown=${n=>(n.key==="Enter"||n.key===" ")&&n2(this,t.aqiE)}
          aria-label="Air Quality Index ${I1(t.aqi)}, ${t.name}${t.main?`, main pollutant ${t.main}`:""}">
          <span class="t">Air Quality Index</span>
          <span class="p">${t.main?`(${t.main})`:""}</span>
          <span class="n">${I1(t.aqi)}</span>
        </div>
        ${this._seg(t.aqi,!0,!0)}`:S}
      ${t.rows.length?x`<div class="srows">${t.rows.map(n=>x`
        <div class="srow" style=${this._color(n)} role="button" tabindex="0" @click=${()=>n2(this,n.e)}
          @keydown=${s=>(s.key==="Enter"||s.key===" ")&&n2(this,n.e)}
          title=${Yt(n)} aria-label="${n.label}: ${I1(n.value,n.digits)} ${n.unit}${n.level!=null?`, ${h4(n)}`:""}">
          <ha-icon icon=${n.icon}></ha-icon>
          ${n.level==null?x`<span class="nm">${n.label}</span><span class="plain">${Qt(n)}</span>`:x`<div><div class="nm">${n.label}</div><div class="nv">${I1(n.value,n.digits)} ${n.unit}</div></div>
              ${this._seg(n.index,n.epa)}
              <span class="rt">${h4(n)}</span>`}
        </div>`)}</div>`:S}
    `}_color(t){return t.level!=null?`--c:${s0[t.level].color}`:""}_tiles(t){return t.rows.length?x`<div class="tiles">${t.rows.map(e=>x`
      <div class="tile" style=${this._color(e)} @click=${()=>n2(this,e.e)} title=${Yt(e)||e.e}>
        <span class="dot"></span>
        <div><div class="n">${e.label}</div><div class="v">${Qt(e)}</div></div>
      </div>`)}</div>`:S}_rows(t){return t.rows.length?x`<div class="rows">${t.rows.map(e=>x`
      <div class="row" style=${this._color(e)} role="button" tabindex="0" @click=${()=>n2(this,e.e)}
        @keydown=${i=>(i.key==="Enter"||i.key===" ")&&n2(this,e.e)}
        aria-label="${e.label}: ${I1(e.value,e.digits)} ${e.unit}, ${h4(e)}">
        <ha-icon icon=${e.icon}></ha-icon>
        <span>${e.label}</span>
        <span class="track"><i style="width:${pV(e)}%"></i></span>
        <span class="chip ${e.level==null?"none":""}" title=${Yt(e)}>${h4(e)}</span>
        <span class="val">${Qt(e)}</span>
      </div>`)}</div>`:S}_bars(t,e){if(!t.rows.length)return S;let i=Number(e.bar_height)||140,o=[50,100,150];return x`<div class="bars" style="--n:${t.rows.length};--h:${i}px">
      <div class="axis" style="margin-top:21px">${[0,...o,200].map(a=>x`<span style="bottom:${a/Oi*100}%">${a}</span>`)}</div>
      <div class="plot">${o.map(a=>x`<hr style="bottom:${a/Oi*100}%" />`)}</div>
      ${t.rows.map((a,n)=>x`
        <div class="col" style="grid-row:1;grid-column:${n+2};${this._color(a)}" role="button" tabindex="0"
          @click=${()=>n2(this,a.e)} @keydown=${s=>(s.key==="Enter"||s.key===" ")&&n2(this,a.e)}
          title=${Yt(a)} aria-label="${a.label}: ${I1(a.value,a.digits)} ${a.unit}, ${h4(a)}">
          <span class="bv">${Qt(a)}</span>
          <span class="bt"><i style="height:${pV(a)}%"></i></span>
          <span class="bn">${a.label}</span>
          <span class="bc">${h4(a)}</span>
        </div>`)}
    </div>`}};D(o6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),D(o6,"styles",[q1,s1`
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
    `]);customElements.get("wsfc-panel-air-quality")||customElements.define("wsfc-panel-air-quality",o6);var uV={long:{weekday:"long",month:"long",day:"numeric"},medium:{weekday:"short",month:"short",day:"numeric"},short:{month:"numeric",day:"numeric"},weekday:{weekday:"long"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}};function Pv(r,t){let e=r?.time_format||"auto";if(e==="12")return!0;if(e==="24")return!1;let i=t?.locale?.time_format;if(i==="12")return!0;if(i==="24")return!1}function Ev(r,t,e=new Date){let i=t?.locale?.language||t?.language||void 0,o=Pv(r,t),a=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",...r?.show_seconds?{second:"2-digit"}:{},...o!=null?{hour12:o}:{}}),n=new Intl.DateTimeFormat(i,uV[r?.date_format]||uV.medium);return{time:a.format(e),date:n.format(e)}}function $v(r,t,e,i,o=1){let a=Math.max(4,String(e).length),n=r*.92/(a*.56);return t>0&&(n=Math.min(n,t*.9/(i?1.55:1.1))),n=Math.max(14,n*o),{time:Math.round(n),date:Math.round(Math.max(10,n*.3))}}var a6=class extends r1{constructor(){super(),this._now=new Date}connectedCallback(){super.connectedCallback(),this._tick(),this._ro=new ResizeObserver(([t])=>{let{width:e,height:i}=t.contentRect,o=`${Math.round(e)}:${Math.round(i)}`;o!==this._dimKey&&(this._dimKey=o,this._dims={w:e,h:i})}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),this._ro?.disconnect()}_tick(){clearTimeout(this._timer),this._now=new Date;let t=this.config?.show_seconds?1e3-this._now.getMilliseconds():6e4-(this._now.getSeconds()*1e3+this._now.getMilliseconds());this._timer=setTimeout(()=>this._tick(),t+20)}updated(t){t.has("config")&&this._tick()}shouldUpdate(t){return!(t.size===1&&t.has("hass")&&t.get("hass"))}render(){if(!this.hass)return S;let t=this.config||{},e=t.show_time!==!1,i=t.show_date!==!1,{time:o,date:a}=Ev(t,this.hass,this._now),{w:n=300,h:s=0}=this._dims||{},V=t.auto_size!==!1,l=V?$v(n,s,e?o:a,e&&i,Number(t.scale??100)/100):{time:Number(t.time_size)||48,date:Number(t.date_size)||16},M=e?l.date:V?l.time*.6:l.date;return x`<div class="clock ${t.align||"center"}" role="timer" aria-live="off" aria-label=${[e?o:"",i?a:""].filter(Boolean).join(", ")}>
      ${e?x`<span class="time" style="font-size:${l.time}px;font-weight:${t.time_weight||300};${t.color?`color:${t.color};`:""}">${o}</span>`:S}
      ${i?x`<span class="date" style="font-size:${Math.round(M)}px;${t.date_color?`color:${t.date_color};`:""}">${a}</span>`:S}
    </div>`}};D(a6,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_now:{state:!0},_dims:{state:!0}}),D(a6,"styles",[q1,s1`
      /* The text is laid over the panel's box, so its size never feeds back into the box it's measured from. */
      :host { position: relative; min-height: 60px; flex: 1 1 auto; }
      .clock { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; line-height: 1.05; font-variant-numeric: tabular-nums; overflow: hidden; }
      .time { white-space: nowrap; letter-spacing: -0.01em; }
      .date { color: var(--secondary-text-color); white-space: nowrap; margin-top: 0.15em; }
      .left { align-items: flex-start; text-align: left; }
      .center { align-items: center; text-align: center; }
      .right { align-items: flex-end; text-align: right; }
    `]);customElements.get("wsfc-panel-clock")||customElements.define("wsfc-panel-clock",a6);var hV=30,Kt=4,mV=10,Ti=r=>r.title?r.title:r.type==="metric"?Q1[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(C2(r)?.label||r.type).replace(/ \(.*\)$/,""),fV=r=>r.icon||r.type==="metric"&&Q1[r.metric]?.icon||C2(r)?.icon||"mdi:square-outline",C6=class extends r1{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let t=this.renderRoot.querySelector(".grid");if(!t)return;let e=t.clientWidth-12;Math.abs(e-(this._mapW||0))>1&&(this._mapW=e)}),this.updateComplete.then(()=>{let t=this.renderRoot.querySelector(".grid");t&&this._ro.observe(t)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let t=this.guide;if(!t?.w||!t?.h||!this._mapW)return{row:hV,gap:Kt,line:null};let e=this._mapW/t.w,i=Math.max(100,t.h-(t.chrome||0)),o=t.row||110,a=!1;if(t.fit&&this._tracks){let s=this._tracks/2,V=(i+(t.gap??12))/s-(t.gap??12);o=Math.max(60,Math.min(400,V)),a=V>=60}let n=Math.max(2,(t.gap??12)*e);return{row:Math.max(8,o*e),gap:n,line:i*e,rowPx:Math.round(o),fits:a}}updated(){let t=this.renderRoot.querySelector(".grid.measure");if(!t||!this.guide?.fit)return;let{row:e,gap:i}=this._scale(),o=Math.max(2,Math.round((t.clientHeight-12+i)/((e-i)/2+i)));o!==this._tracks&&(this._tracks=o)}_gridIdx(){return(this.panels||[]).map((t,e)=>e).filter(t=>this.panels[t].display!=="popup")}render(){let t=this.panels||[],e=this._order||this._gridIdx(),i=t.map((n,s)=>s).filter(n=>t[n].display==="popup"),o=this._scale();this._mr=o.row,this._mg=o.gap;let a=this.guide?.mode||"line";return x`
      <div class="wrap">
        <div class="grid" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${e.map(n=>this._block(t[n],n))}
        </div>
        ${this.guide?.fit?x`<div class="grid measure" aria-hidden="true" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${e.filter(n=>t[n].show!==!1).map(n=>x`<div style=${this._place(t[n])}></div>`)}</div>`:S}
        ${o.line==null?S:o.fits?x`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${o.rowPx}px</span></div>`:x`<div class="guide ${a}" style=${`top:${6+o.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${o.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${i.length?x`<div class="pops"><span>Pop-ups:</span>${i.map(n=>x`<span class="pop"><ha-icon icon=${fV(t[n])}></ha-icon>${Ti(t[n])}</span>`)}</div>`:S}
    `}_place(t,e){let i=e?e.span:_5(t),o=e?e.rows:Y2(t);return`grid-column: span ${i}; grid-row: span ${o?Math.max(1,Math.round(o*2)):2};`}_block(t,e){let i=this._size?.index===e?this._size:null,o=i?i.span:_5(t),a=i?i.rows:Y2(t),n=this._place(t,i),s=["blk",t.show===!1?"hidden":"",this._drag?.index===e?"dragging":"",i?"sizing":"",t.type].join(" ");return x`<div class=${s} style=${n} data-i=${e} tabindex="0" role="button"
        aria-label=${`${Ti(t)}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${V=>this._startMove(V,e)} @keydown=${V=>this._key(V,e)}>
      <ha-icon icon=${fV(t)}></ha-icon>
      <span class="nm">${Ti(t)}</span>
      <span class="dim">${o}×${a||"a"}</span>
      <span class="rz x" @pointerdown=${V=>this._startSize(V,e,"x")}></span>
      <span class="rz y" @pointerdown=${V=>this._startSize(V,e,"y")}></span>
      <span class="rz xy" @pointerdown=${V=>this._startSize(V,e,"xy")}></span>
    </div>`}_startMove(t,e){if(t.button!==0||t.target.classList.contains("rz"))return;t.preventDefault();let i=t.currentTarget;i.setPointerCapture(t.pointerId),this._order=this._gridIdx(),this._drag={index:e,x0:t.clientX,y0:t.clientY,moved:!1};let o=n=>this._onMove(n),a=()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let n=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),s=this._order;this._drag=null,this._order=null,n&&this._commitOrder(s)};i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(t){let e=this._drag;if(!e||!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<4)return;e.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(s=>Number(s.dataset.i)!==e.index),o=null;for(let s of i){let V=s.getBoundingClientRect();if(t.clientX>=V.left&&t.clientX<=V.right&&t.clientY>=V.top&&t.clientY<=V.bottom){o={i:Number(s.dataset.i),after:t.clientX>V.left+V.width/2};break}}if(!o){let s=i[i.length-1]?.getBoundingClientRect();if(s&&t.clientY>s.bottom)o={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(s=>s!==e.index),n=a.indexOf(o.i)+(o.after?1:0);a.splice(n,0,e.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(t){let e=this.panels,i=t.map(a=>e[a]),o=e.map(a=>a.display==="popup"?a:i.shift());this._emit(o)}_startSize(t,e,i){if(t.button!==0)return;t.preventDefault(),t.stopPropagation();let o=t.currentTarget;o.setPointerCapture(t.pointerId);let n=(this.renderRoot.querySelector(".grid").clientWidth-11*Kt)/12+Kt,s=this.panels[e],V=_5(s),l=Y2(s);this._size={index:e,span:V,rows:l};let M=t.clientX,u=t.clientY,f=b=>{let k=i==="y"?V:Math.max(1,Math.min(12,V+Math.round((b.clientX-M)/n))),O=l||1,T=(this._mr||hV)+(this._mg||Kt),$=i==="x"?l:Math.max(.5,Math.min(mV,O+Math.round(2*(b.clientY-u)/T)/2));i!=="x"&&l===0&&$===1&&Math.abs(b.clientY-u)<T/4&&($=0),(k!==this._size.span||$!==this._size.rows)&&(this._size={index:e,span:k,rows:$})},g=()=>{o.removeEventListener("pointermove",f),o.removeEventListener("pointerup",g),o.removeEventListener("pointercancel",g);let{span:b,rows:k}=this._size;this._size=null,(b!==V||k!==l)&&this._commitSize(e,b,k)};o.addEventListener("pointermove",f),o.addEventListener("pointerup",g),o.addEventListener("pointercancel",g)}_commitSize(t,e,i){let o=C2(this.panels[t])||{},a={...this.panels[t],span:e,rows:i};e===o.span&&delete a.span,i===(o.rows??0)&&delete a.rows;let n=this.panels.slice();n[t]=a,this._emit(n)}_key(t,e){let i=this._gridIdx(),o=i.indexOf(e);if(t.shiftKey){let a=this.panels[e],n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!n)return;t.preventDefault(),this._commitSize(e,Math.max(1,Math.min(12,_5(a)+n[0])),Math.max(0,Math.min(mV,Y2(a)+n[1]/2)))}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let a=o+(t.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let n=i.slice();[n[o],n[a]]=[n[a],n[o]],this._commitOrder(n),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(t){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:t}}))}};D(C6,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),D(C6,"styles",s1`
    :host { display: block; }
    .wrap { position: relative; }
    /* Screen guide: where the screen ends. Line = dashed edge; Frame = also
       shades everything below it. */
    .guide { position: absolute; left: 0; right: 0; height: 0; border-top: 2px dashed var(--warning-color, #ffa600); pointer-events: none; z-index: 3; }
    .guide span { position: absolute; right: 6px; top: 2px; font-size: 10px; font-weight: 600; color: var(--warning-color, #ffa600); background: var(--card-background-color, #1c1c1c); padding: 0 4px; border-radius: 4px; }
    .grid.measure { position: absolute; left: 0; right: 0; top: 0; visibility: hidden; pointer-events: none; background: none; }
    .guide.fitbox { top: 0; bottom: 0; height: auto; border: 2px dashed var(--success-color, #43a047); border-radius: 10px; }
    .guide.fitbox span { top: auto; bottom: 4px; color: var(--success-color, #43a047); }
    .guide.frame { bottom: 0; height: auto; background: repeating-linear-gradient(135deg, rgba(255, 166, 0, 0.12) 0 6px, transparent 6px 12px); border-radius: 0 0 10px 10px; }
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",C6);var Xt=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function Fv(r){return r=r==null?"":String(r),r===""?"default":r==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(r)?"custom":/^var\(/.test(r)&&Xt.some(([t])=>t===r)?"theme":"css"}var vV=r=>!!r.selector?.ltek_color||!!r.selector?.text&&/(^|_|\.)color$/.test(r.name),Rv=r=>/px|%/.test(r?.unit_of_measurement||"");function Dv(r){let t=r.selector||{};return!!(t.boolean||t.select&&!t.select.custom_value||t.number||vV(r)||t.text&&!t.text.multiple)}var AV=r=>/^#[0-9a-fA-F]{6}$/.test(r||"")?r:null;function xV({data:r,schema:t,onChange:e,label:i,helper:o,haForm:a,auto:n}){let s=[],V=[],l=()=>{if(!V.length)return;let M=V;s.push(a(Object.fromEntries(M.map(u=>[u.name,r[u.name]])),M,u=>e({...r,...u}))),V=[]};for(let M of t)if(!(typeof M.when=="function"&&!M.when(r))){if(!Dv(M)){V.push(M);continue}l(),s.push(Bv(M,r[M.name],u=>e({...r,[M.name]:u}),i(M),o(M),n?.(M)))}return l(),s}function Bv(r,t,e,i,o,a){let n=r.selector||{},s=`f-${r.name.replace(/\W/g,"_")}`,V=o?x`<div class="fhelp">${o}</div>`:S;if(n.boolean){let l=r.invert?t===!1:!!t;return x`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${l} @change=${M=>e(r.invert?!M.target.checked:M.target.checked)} />${i}</label>${V}</div>`}if(n.select&&!n.select.multiple){let l=(n.select.options||[]).map(u=>typeof u=="string"?{value:u,label:u}:u),M=t==null?"":String(t);return x`<div class="fld"><div class="frow"><label for=${s}>${i}</label>
      <select id=${s} class="sel" @change=${u=>e(u.target.value===""?void 0:u.target.value)}>
        ${l.some(u=>String(u.value)===M)?S:x`<option value="" ?selected=${M===""}>—</option>`}
        ${l.map(u=>x`<option value=${u.value} ?selected=${String(u.value)===M}>${u.label}</option>`)}
      </select></div>${V}</div>`}if(n.select&&n.select.multiple){let l=(n.select.options||[]).map(f=>typeof f=="string"?{value:f,label:f}:f),M=Array.isArray(t)?t:[],u=(f,g)=>{let b=l.map(k=>k.value).filter(k=>k===f?g:M.includes(k));e(b.length?b:void 0)};return x`<div class="fld"><div class="flab">${i}</div><div class="fmulti">
      ${l.map(f=>x`<label class="fchk"><input type="checkbox" .checked=${M.includes(f.value)} @change=${g=>u(f.value,g.target.checked)} />${f.label}</label>`)}
    </div>${V}</div>`}if(n.number){let l=n.number,M=l.unit_of_measurement||"";if(l.mode==="slider"||Rv(l)){let u=l.min??0,f=l.max??100,g=l.step??1,b=t??r.default,k=parseFloat(a),O=b??(Number.isFinite(k)?Math.max(u,Math.min(f,k)):u),T=$=>$==null||$===""?"Auto":`${$}${M}`;return x`<div class="fld"><div class="frow nowrap"><label for=${s}>${i}</label>
        <input id=${s} type="range" class="frange" min=${u} max=${f} step=${g} .value=${String(O)}
          @input=${$=>{let F=$.target.parentElement.querySelector(".fval");F&&(F.textContent=T($.target.value))}}
          @change=${$=>e(Number($.target.value))} />
        <span class="fval">${T(b)}</span>
        ${t!=null&&r.default===void 0?x`<button class="freset" title="Back to Auto" @click=${()=>e(void 0)}>×</button>`:S}
      </div>${a&&b==null?x`<div class="fauto">Auto: ${a}</div>`:S}${V}</div>`}return x`<div class="fld"><div class="frow"><label for=${s}>${i}</label>
      <input id=${s} type="number" class="ftext num" min=${l.min??S} max=${l.max??S} step=${l.step??"any"} .value=${t??""}
        @change=${u=>e(u.target.value===""?void 0:Number(u.target.value))} />${M?x`<span class="funit">${M}</span>`:S}
    </div>${V}</div>`}return vV(r)?zv(s,t,e,i,V,/background|(^|_)bg(_|$)/i.test(`${r.name} ${i}`)):x`<div class="fld"><div class="frow"><label for=${s}>${i}</label>
    <input id=${s} type=${n.text?.type||"text"} class="ftext" .value=${t??""} @change=${l=>e(l.target.value===""?void 0:l.target.value)} />
  </div>${V}</div>`}function zv(r,t,e,i,o,a=!1){let n=Fv(t),s=t==null?"":String(t),V=l=>e(l==="default"?void 0:l==="transparent"?"transparent":l==="theme"?Xt.some(([M])=>M===s)?s:Xt[0][0]:l==="custom"?AV(s)||"#4fc3f7":s||"#4fc3f7");return x`<div class="fld"><div class="frow"><label for=${r}>${i}</label>
    <span class="fcolor">
      <select id=${r} class="sel mode" @change=${l=>V(l.target.value)}>
        ${[["default","Not set"],...a||n==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([l,M])=>x`<option value=${l} ?selected=${l===n}>${M}</option>`)}
      </select>
      ${n==="theme"?x`<select class="sel" aria-label="Theme color" @change=${l=>e(l.target.value)}>${Xt.map(([l,M])=>x`<option value=${l} ?selected=${l===s}>${M}</option>`)}</select>`:n==="custom"?x`<input type="color" class="fswatch" aria-label="Color" .value=${AV(s)||"#4fc3f7"} @change=${l=>e(l.target.value)} />`:n==="css"?x`<input type="text" class="ftext" aria-label="CSS color" .value=${s} @change=${l=>e(l.target.value||void 0)} />`:S}
      ${n!=="default"&&n!=="transparent"?x`<span class="fdot" style="background:${s}"></span>`:S}
    </span>
  </div>${o}</div>`}var gV=s1`
  .fld { padding: var(--ltek-sp-1, 4px) 0; }
  .frow { display: flex; align-items: center; gap: var(--ltek-sp-4, 12px); flex-wrap: wrap; justify-content: flex-start; }
  .frow.nowrap { flex-wrap: nowrap; }
  .frow > label, .flab { font-size: var(--ltek-fs-label, 14px); color: var(--ltek-c-text); white-space: nowrap; }
  /* Basis 0: a long option text never pushes the control onto its own line. */
  .frow > .sel, .frow > .ftext, .frow > .frange, .frow > .fcolor { flex: 1 1 0; min-width: 0; }
  .frow > .sel { min-width: 120px; }
  .ftext { font: inherit; font-size: var(--ltek-fs-label, 14px); padding: var(--ltek-ctrl-pad, 6px 8px); border-radius: var(--ltek-r-ctrl, 6px); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); box-sizing: border-box; height: 34px; }
  .ftext.num { flex: 0 1 110px; }
  .funit { color: var(--ltek-c-muted); font-size: var(--ltek-fs-small, 12px); }
  .frange { accent-color: var(--ltek-c-accent); }
  .fval { flex: 0 0 var(--ltek-slider-val-w, 44px); text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; white-space: nowrap; font-size: var(--ltek-fs-label, 14px); }
  .freset { border: 0; background: none; color: var(--ltek-c-muted); cursor: pointer; font-size: 16px; padding: 0 2px; }
  .fchk { display: inline-flex; align-items: center; gap: var(--ltek-sp-2, 8px); font-size: var(--ltek-fs-label, 14px); cursor: pointer; }
  .fchk input { accent-color: var(--ltek-c-accent); width: 16px; height: 16px; margin: 0; }
  .fmulti { display: flex; flex-wrap: wrap; gap: var(--ltek-sp-1, 4px) var(--ltek-sp-4, 12px); margin-top: 4px; }
  .fauto { color: var(--ltek-c-accent); font-size: var(--ltek-fs-small, 12px); margin-top: 2px; }
  .fhelp { color: var(--ltek-c-muted); font-size: var(--ltek-fs-small, 12px); line-height: 1.35; margin-top: 2px; }
  .fcolor { display: flex; align-items: center; gap: var(--ltek-sp-2, 8px); flex-wrap: wrap; }
  .fcolor .sel.mode { flex: 0 0 auto; }
  .fcolor > .sel:not(.mode), .fcolor > .ftext { flex: 1 1 120px; }
  .fswatch { width: 44px; height: 34px; padding: 0; border: 1px solid var(--ltek-c-border); border-radius: var(--ltek-r-ctrl, 6px); background: none; cursor: pointer; }
  .fdot { width: 18px; height: 18px; border-radius: 50%; border: 1px solid var(--ltek-c-border); flex: 0 0 auto; }
`;var _V="__other__",n6=class extends r1{_name(t){let e=this.hass?.states?.[t],i=e?.attributes?.friendly_name||t,o=e&&!["unknown","unavailable"].includes(e.state)&&!t.startsWith("weather.")?` \xB7 ${e.state}${e.attributes?.unit_of_measurement?` ${e.attributes.unit_of_measurement}`:""}`:"";return`${i}${o}`}_emit(t){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!1}))}render(){let t=this.value||"",e=[...new Set([...this.candidates||[],...t?[t]:[]])].filter(o=>o!==this.defaultEntity||t===o),i=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return x`
      <div class="row">
        <select class=${t?"":"def"} aria-label=${this.label||"Entity"} @change=${o=>{let a=o.target.value;if(a===_V){this._other=!0,o.target.value=t;return}this._emit(a)}}>
          <option value="" ?selected=${!t}>${i}</option>
          ${e.map(o=>x`<option value=${o} ?selected=${o===t}>${this._name(o)}</option>`)}
          <option value=${_V}>Other entity…</option>
        </select>
        ${t?x`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:S}
      </div>
      ${this._other?x`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:t}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${o=>{o.stopPropagation();let a=o.detail.value?.e;a&&this._emit(a)}}></ha-form></div>`:S}
    `}};D(n6,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),D(n6,"styles",s1`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",n6);var Iv=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],Jt=r=>typeof r=="string"&&r.startsWith("device:"),s6=class extends r1{constructor(){super(),this._open=new Set}get _sources(){let t=this.config?.metric_sources||{};return Array.isArray(t.sources)?t.sources.filter(e=>e?.ref).map(e=>({ref:e.ref,overrides:{...e.overrides||{}},disabled:!!e.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(t){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:t}}}_commit(t){let e=t.filter(l=>l?.ref).map(l=>{let M=Object.fromEntries(Object.entries(l.overrides||{}).filter(([,u])=>u));return{ref:l.ref,...Object.keys(M).length?{overrides:M}:{},...l.disabled?{disabled:!0}:{}}}),i={...this.config?.metric_sources||{}};delete i.primary,delete i.fallback,delete i.custom,delete i.device_map,e.length?i.sources=e:delete i.sources;let o=l=>(this.hass?.states?.[l]?.attributes?.supported_features&7)!==0,a=l=>l.map(M=>M.ref).filter(M=>typeof M=="string"&&M.startsWith("weather.")),n=a(e.filter(l=>!l.disabled)),s=a(e),V=n.find(o)||n[0]||s.find(o)||s[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:V,metric_sources:Object.keys(i).length?i:void 0}}))}_info(t){let e=this.hass;if(Jt(t)){let o=e?.devices?.[t.slice(7)],a=l4(e,t.slice(7))[0];return{icon:"mdi:access-point",name:o?.name_by_user||o?.name||t.slice(7),kind:"Station device",sub:[o?.manufacturer,o?.model].filter(Boolean).join(" "),integ:Z3(e,a)}}let i=e?.states?.[t];return t.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:i?.attributes?.friendly_name||t,kind:"Weather entity",sub:"forecast + condition",integ:Z3(e,t)}:{icon:"mdi:eye-outline",name:i?.attributes?.friendly_name||t,kind:"Sensor",sub:t,integ:Z3(e,t)}}_candidates(t,e){let i=this.hass;if(!Jt(t))return[];let o=e&&i.states[e]?.attributes?.unit_of_measurement,a=t.slice(7),n=i.devices?.[a]?.config_entries||[];return[...new Set([a,...Object.entries(i.devices||{}).filter(([,V])=>(V.config_entries||[]).some(l=>n.includes(l))).map(([V])=>V)])].flatMap(V=>l4(i,V)).filter(V=>V.startsWith("sensor.")&&i.states[V]?.attributes?.unit_of_measurement&&(!o||i.states[V].attributes.unit_of_measurement===o)).sort()}render(){if(!this.hass)return S;let t=this._sources,e=this._station(t),i=t.some(o=>o.ref.startsWith("weather.")&&!o.disabled);return x`
      <div class="list">
        ${t.map((o,a)=>this._source(o,a,t,e))}
      </div>
      ${i?S:x`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(t):x`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(t,e,i,o){let a=this._info(t.ref),n=this._open.has(t.ref),s=Iv.map(([u,f])=>{let g=xH(o,this.hass,t.ref,u),b=t.ref.startsWith("weather.")?this.hass.states[t.ref]?.attributes?.[u]!=null:!!g;return{k:u,label:f,def:t.ref.startsWith("weather.")?b?t.ref:null:g,ov:t.overrides[u]||"",has:b||!!t.overrides[u]}}),V=s.filter(u=>u.has).length,l=u=>{let f=i.map(g=>({...g,overrides:{...g.overrides}}));u(f),this._commit(f)},M=()=>{let u=new Set(this._open);u.has(t.ref)?u.delete(t.ref):u.add(t.ref),this._open=u};return x`<div class="src ${n?"open":""} ${t.disabled?"off":""}">
      <div class="hd" @click=${M} role="button" tabindex="0" aria-expanded=${String(n)} @keydown=${u=>(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),M())}>
        <span class="rank">${e+1}</span>
        <ha-icon class="lead" icon=${a.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${a.name}${t.disabled?x` <span class="tag">hidden</span>`:S}</div>
          <div class="sb"><span class="pill">${a.kind}</span>${a.integ?x`<span class="pill integ">${a.integ}</span>`:S}<span>${V} value${V===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${u=>u.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${e===0} @click=${()=>l(u=>[u[e-1],u[e]]=[u[e],u[e-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${e===i.length-1} @click=${()=>l(u=>[u[e+1],u[e]]=[u[e],u[e+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${t.disabled?"Use this source":"Skip this source"} @click=${()=>l(u=>u[e].disabled=!u[e].disabled)}><ha-icon icon=${t.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>l(u=>u.splice(e,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?x`<div class="bd">
            ${a.sub?x`<div class="meta">${a.sub}</div>`:S}
            <div class="tbl">
              ${s.filter(u=>u.has||Jt(t.ref)).map(u=>{let f=u.ov||u.def,g=f&&!f.startsWith("weather.")?W2(this.hass,f):null,b=f?.startsWith("weather.")?this.hass.states[f]?.attributes?.[u.k]:null;return x`<span class="k">${u.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${u.ov} .defaultEntity=${u.def}
                    .defaultLabel=${t.ref.startsWith("weather.")&&!u.ov?u.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(t.ref,u.def)} label=${u.label}
                    @value-changed=${k=>l(O=>O[e].overrides[u.k]=k.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${g?`${g.value} ${g.unit}`:b!=null?String(b):""}</span>`})}
            </div>
            ${t.ref.startsWith("weather.")?x`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:S}
          </div>`:S}
    </div>`}_addForm(t){let e=i=>{if(!i||t.some(n=>n.ref===i)){this._adding=!1;return}this._adding=!1;let o=t.slice(),a=o.findIndex(n=>n.ref.startsWith("weather."));Jt(i)&&a>=0?o.splice(a,0,{ref:i,overrides:{}}):o.push({ref:i,overrides:{}}),this._commit(o)};return x`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.d&&`device:${i.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};D(s6,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),D(s6,"styles",s1`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",s6);var m4=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],Nv=r=>/^#[0-9a-f]{6}$/i.test(r||"")?r:/^#[0-9a-f]{3}$/i.test(r||"")?"#"+r.slice(1).split("").map(t=>t+t).join(""):"#888888";function Wv(r){if(r.type==="statistics"){let t=r.preset||"temps",e=qt[t]||{};return((Array.isArray(r.metrics)&&r.metrics.length?r.metrics:e.metrics||E3[t]?.metrics)||[]).map((o,a)=>({metric:o,color:r.colors?.[o],defColor:e.series?.[o]?.color||Q1[o]?.color||m4[a%m4.length],entity:r.entity_overrides?.[o]||"",key:"map"}))}return Array.isArray(r.series)&&r.series.length?r.series.map((t,e)=>({metric:t.metric,idx:e,color:t.color,defColor:Q1[t.metric]?.color||m4[e%m4.length],entity:t.entity||"",label:t.label,key:"list"})):(N9[r.type]||N9.graph).map((t,e)=>({metric:t.metric,color:r.colors?.[t.metric],defColor:t.color||Q1[t.metric]?.color||m4[e%m4.length],entity:r.entities?.[t.metric]||"",key:"map"}))}var H6=class extends r1{_set(t,e,i){let o=d4(this.panel);if(t.key==="list")o.series[t.idx]=z5({...o.series[t.idx],[e]:i||void 0});else{let a=e==="color"?"colors":o.type==="statistics"?"entity_overrides":"entities";o[a]=z5({...o[a]||{},[t.metric]:i||void 0}),Object.keys(o[a]).length||delete o[a]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:o}}))}_candidates(t){let e=t&&this.hass.states[t]?.attributes?.unit_of_measurement;return O9(this.station,this.hass).filter(i=>i.startsWith("sensor.")&&(!e||this.hass.states[i]?.attributes?.unit_of_measurement===e))}render(){if(!this.hass||!this.panel)return S;let t=Wv(this.panel),e=this.panel.type!=="statistics"||ki(this.panel)==="sgcc";return x`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${t.map(i=>{let o=g5(i.metric,this.station,this.hass),a=i.color||i.defColor;return x`<span class="k">${i.label||Q1[i.metric]?.label||i.metric||"Series"}</span>
          <span class="c">
            ${e?x`<input type="color" .value=${Nv(a)} title="Line color" aria-label="Line color" @change=${n=>this._set(i,"color",n.target.value)} />
                ${i.color?x`<button type="button" title="Default color" @click=${()=>this._set(i,"color","")}>↺</button>`:S}`:x`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${i.entity} .defaultEntity=${o} .candidates=${this._candidates(o)} label=${`${i.metric} sensor`}
            @value-changed=${n=>this._set(i,"entity",n.detail.value)}></wsfc-entity-select>`})}
    </div>`}};D(H6,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),D(H6,"styles",s1`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",H6);var Uv=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],jv={wind_bearing:"Wind direction",precipitation:"Rain rate"},ZV=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."},{name:"background_image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]],["Panels",[{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"With a card background: blur behind panels. Default 6."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:r=>!!r.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:r=>!!r.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]],["Layout & behaviour",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",when:r=>r.layout==="fullscreen",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"lite_editing",selector:{boolean:{}},default:!0,helper:"While the dashboard or this card is being edited: no animated background or blur, and the radar and Windy maps show a placeholder. Keeps the editor responsive."}]]],vF=ZV.flatMap(([,r])=>r),wV={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6,lite_editing:!0},bV={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_chart:"Altitude chart",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",hours:"Hours",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",lite_editing:"Pause animations and maps while editing",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",wr_stats:"Position",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},Gv=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function qv(r,t,e){let i=t.split("."),o=r;i.slice(0,-1).forEach(n=>o=o[n]=o[n]&&typeof o[n]=="object"?{...o[n]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete o[a]:o[a]=e}function SV(r,t,e={}){let i={};for(let o of t){let a=Gv(r,o.name);i[o.name]=a!==void 0?a:e[o.name]!==void 0?e[o.name]:o.default}return i}function yV(r,t,e,i={}){let o=d4(r);for(let a of t){let n=e[a.name],s=i[a.name]!==void 0?i[a.name]:a.default;s!==void 0&&JSON.stringify(n)===JSON.stringify(s)&&(n=void 0),qv(o,a.name,n)}return z5(o)}var kV=["span","rows","display","span_medium","span_narrow","rows_compact"];function Yv(r,t){let e=r[t],i=r[t+1],o=s=>{let V={...s};for(let l of kV)delete V[l];return V},a=r.slice();if(i.type==="stack"&&i.direction==="vertical"){let s=Y2(e)+Y2(i);return a.splice(t,2,z5({...i,span:Math.max(_5(e),_5(i)),rows:s||void 0,panels:[o(e),...i.panels||[]]})),a}let n=Y2(e)+Y2(i);return a.splice(t,2,z5({type:"stack",direction:"vertical",span:Math.max(_5(e),_5(i)),rows:n||void 0,panels:[o(e),o(i)]})),a}function OV(r,t,e){let i={...r[e]};for(let a of kV)delete i[a];let o=r.slice();return o[t]={...o[t],panels:[...o[t].panels||[],i]},o.splice(e,1),o}function TV(r,t,e){let i=r[t],o=(i.panels||[]).slice(),[a]=o.splice(e,1),n=r.slice(),s=z5({...a,span:_5(i),rows:void 0});return o.length?n.splice(t,1,{...i,panels:o},s):n.splice(t,1,s),n}function Qv(r){let t=C2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:d7({...r,in_bar:void 0}),show_title:hi.has(r.type)?!!r.title:!0}}function Pi(r){let t=C2(r);return r.title?r.title:r.type==="metric"?Q1[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var V6=class extends r1{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t,this._savedJson==null&&(this._savedJson=JSON.stringify(t)),Ft(JSON.stringify(t)!==this._savedJson)}shouldUpdate(t){if(t.size===1&&t.has("hass")){let e=t.get("hass"),i=this.hass;if(e&&i&&e.entities===i.entities&&e.devices===i.devices&&e.areas===i.areas&&e.themes===i.themes&&e.locale===i.locale&&e.language===i.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>this._open==="general"&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,Ft(!1)}get _panels(){return Et(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,Ft(JSON.stringify(t)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[o,a]of Object.entries(e||{}))a===void 0?delete i[o]:i[o]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?S:x`
      <div class="ed">
        <div class="hdr"><span class="name">${I4}</span><span class="ver">v${W6} · Weather Flex sections ${QH}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general())}
        ${this._section("buttons","mdi:gesture-tap-button","Panel buttons",()=>this._buttonsEditor())}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_section(t,e,i,o){let a=this._open===t;return x`<details class="panel" ?open=${a} @toggle=${n=>{n.target.open?this._open=t:this._open===t&&(this._open=null)}}>
      <summary><ha-icon icon=${e}></ha-icon><span>${i}</span></summary>
      ${a?x`<div class="body">${o()}</div>`:S}
    </details>`}_form(t,e,i){return xV({data:t,schema:e,onChange:i,label:o=>o.label||bV[o.name]||o.name,helper:o=>o.helper,haForm:(o,a,n)=>this._haForm(o,a,n),auto:o=>this._autoText(o)})}_autoText(t){let e={panel_radius:"radius",row_height:"row",gap:"gap"}[t.name];if(!e)return null;let{preview:i,dashboard:o}=GH(),a=i?.[e],n=o?.[e],s=e==="radius"?" (from the theme's card corner radius)":e==="row"&&this._config.layout==="fullscreen"&&this._config.fit_height!==!1?" (calculated to fit the screen)":"";return a&&n&&a!==n?`${a} in this preview, ${n} on the dashboard${s}`:a||n?`${a||n}${s}`:null}_haForm(t,e,i){return x`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${o=>o.label||bV[o.name]||o.name}
      .computeHelper=${o=>o.helper}
      @value-changed=${o=>{o.stopPropagation(),i(o.detail.value)}}
    ></ha-form>`}_general(){let t=this._config.background||"none";return ZV.map(([e,i])=>{let o=i.filter(a=>t==="image"||!a.name.startsWith("background_"));return x`<div class="agrp"><div class="agrp-t">${e}</div>${this._form(SV(this._config,o,wV),o,a=>{let{panels:n,...s}=this._config,V=yV(s,o,a,wV);this._config.panels&&(V.panels=this._config.panels),this._emit(V)})}</div>`})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_stationEditor(){let t=this._station,e=[...Uv,"rain_today","battery","signal","rssi","aqi","pm2_5","pm10","ozone"].map(o=>{let a=Q1[o]?.find||Q1[o]?.aq?g5(o,t,this.hass):y3(t,this.hass,o)||(this.hass.states[t.entity]?.attributes?.[o]!=null?t.entity:null),n=a&&!a.startsWith("weather.")?W2(this.hass,a):null,s=a?.startsWith("weather.")?this.hass.states[a]?.attributes?.[o]:null;return{k:o,e:a,v:n?`${n.value} ${n.unit}`:s!=null?String(s):"",label:jv[o]||Q1[o]?.label||o.replace(/_/g," "),integ:a?Z3(this.hass,a):""}}),i=e.filter(o=>o.e).length;return x`
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
    `}_flexEditor(t,e,i){let o=`${t}:${e.type}`,a=this._flexEds.get(o);a||(a=document.createElement(YH),a.wsfcMode="sections",a.addEventListener("config-changed",l=>{l.stopPropagation(),a._wsfcOnChange?.(l.detail.config)}),this._flexEds.set(o,a));let n=l=>l.type==="sky_tracker"?bi(l,this._station):F2(I9(l.type,this._station),l.flex||{});a.wsfcPanels=C2(e)?.flexPanels||null,a.wsfcHide=C2(e)?.flexHide||null,a._wsfcOnChange=l=>{let M=d4(e),u=XH(l,n({...e,flex:void 0}));Object.keys(u).length?M.flex=u:delete M.flex,i(M)};let s=n(e),V=JSON.stringify(s);return a._wsfcJson!==V&&(a._wsfcJson=V,a.setConfig(s)),a.hass=this.hass,x`<div class="flexed">${a}</div>`}_guideSpec(){let t=this._config,e=t.layout_screen;if(!e||(t.layout_guide||"line")==="off")return null;let[i,o]=e==="window"?[window.innerWidth,window.innerHeight]:String(e).split(/[x×]/).map(Number);if(!i||!o)return null;let a=t.gap??12,n=t.layout==="fullscreen",s=t.panel_bar!==!1&&!this._panels.some(l=>l.type==="heading"&&l.show_bar),V=56+(n?16:8)+2*a+(s?40+a:0)+(t.title?44+a:0);return{w:i,h:o,chrome:V,gap:a,row:t.row_height||110,fit:n&&t.fit_height!==!1,mode:t.layout_guide||"line"}}_screenGuide(){let t=this._config,e=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],i=t.layout_screen||"",o=i&&!e.some(([n])=>n===i),a=n=>{let s={...this._config,...n};for(let V of Object.keys(n))(n[V]==null||n[V]==="")&&delete s[V];this._emit(s)};return x`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${n=>a({layout_screen:n.target.value==="custom"?"1600x900":n.target.value||void 0})}>
          ${e.map(([n,s])=>x`<option value=${n} ?selected=${n===i}>${s}</option>`)}
          <option value="custom" ?selected=${o}>Custom size…</option>
        </select></div>
      ${o?x`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${i} placeholder="1600x900" @change=${n=>a({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(n.target.value.trim())?n.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):i})} /></div>`:S}
      ${i?x`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${n=>a({layout_guide:n.target.value==="line"?void 0:n.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([n,s])=>x`<option value=${n} ?selected=${(t.layout_guide||"line")===n}>${s}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${t.layout==="fullscreen"&&t.fit_height!==!1?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:S}
    </div>`}_layoutEditor(){return x`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      ${this._screenGuide()}
      <wsfc-layout-map .panels=${this._panels} .guide=${this._guideSpec()} @layout-changed=${t=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(t.detail.panels)}}></wsfc-layout-map>
    `}_panelList(){return x`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_buttonsEditor(){let t=this._config,e=this._panels,i=e.findIndex(l=>l.type==="heading"),o=i>=0&&!!e[i].show_bar,a=t.panel_bar===!1?"hidden":o?"heading":"top",n=l=>{let M=e.map((u,f)=>f===i?z5({...u,show_bar:l==="heading"?!0:void 0}):u);l==="heading"&&i<0&&M.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(M,{panel_bar:l==="hidden"?!1:void 0})},s=(l,M)=>{let u=e.map((f,g)=>{if(!l.includes(g))return f;let b=d7({...f,in_bar:void 0});return z5({...f,in_bar:M===b?void 0:M})});this._setPanels(u)},V=e.map((l,M)=>M);return x`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${l=>n(l.target.value)}>
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
        ${e.map((l,M)=>x`<label class="chk">
          <input type="checkbox" .checked=${d7(l)} @change=${u=>s([M],u.target.checked)} />
          <ha-icon icon=${l.icon||l.type==="metric"&&Q1[l.metric]?.icon||C2(l).icon}></ha-icon>
          <span>${Pi(l)}</span>${l.display==="popup"?x`<span class="tag">pop-up</span>`:l.show===!1?x`<span class="tag">hidden on load</span>`:S}
        </label>`)}
      </div>
    `}_list(t,e,i){let o=!!i,a=Object.entries(O3).filter(([V])=>!(o&&V==="hero")).sort(([V,l],[M,u])=>V==="hero"?-1:M==="hero"?1:l.label.localeCompare(u.label)),n=i||"top",s=(this._addTypes||(this._addTypes={}))[n]||(o?"metric":this._addType);return x`
      <div class="rows">${t.map((V,l)=>this._panelRow(V,l,t,e,i?`${i}.${l}`:`${l}`,o))}</div>
      <div class="add">
        <select class="sel" @change=${V=>{this._addTypes[n]=V.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([V,l])=>x`<option value=${V} ?selected=${V===s}>${l.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let V={type:s};V.type==="metric"&&(V.metric="temperature"),V.type==="stack"&&(V.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,V]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${o?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,o,a,n){let s=C2(t),V=this._openPanel===a||t.type!=="stack"&&String(this._openPanel||"").startsWith(`${a}.`),l=t.show===!1,M=()=>this._flexEds.clear(),u=k=>{let O=i.slice(),T=e+k;T<0||T>=O.length||([O[e],O[T]]=[O[T],O[e]],M(),this._openPanel=null,o(O))},f=(k,O)=>{let T=i.slice();T[e]=k,o(T,O)},g=n?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${_5(t)}/12${Y2(t)?` \xD7 ${Y2(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,b=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:s.label;return x`<div class="row ${V?"open":""} ${l?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&Q1[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":s.icon)}></ha-icon>
        <div class="txt"><div class="n">${Pi(t)}</div><div class="s">${b}${g?` \xB7 ${g}`:""}</div></div>
        ${n?x`<button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>u(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>u(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:S}
        ${n?S:x`<button class="ib" title=${l?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>f(z5({...t,show:l?void 0:!1}))}>
              <ha-icon icon=${l?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${n&&/^\d+\.\d+$/.test(a)?x`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{M(),this._openPanel=null,this._setPanels(TV(this._panels,Number(a.split(".")[0]),e))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:S}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${V?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let k=i.slice();k.splice(e+1,0,d4(t)),M(),o(k)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let k=i.slice();k.splice(e,1),M(),this._openPanel=null,o(k)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${V?this._panelBody(t,a,f,n):S}
      ${t.type==="stack"?this._stackKids(t,e,a,f,n):S}
    </div>`}_stackKids(t,e,i,o,a){let s=!a?this._panels.map((l,M)=>[l,M]).filter(([l,M])=>M!==e&&l.type!=="hero"&&l.type!=="stack"):[],V=(this._moveIn||(this._moveIn={}))[i]??s[0]?.[1]??"";return x`<div class="kids">
      ${this._list(t.panels||[],(l,M)=>o({...t,panels:l},M),i)}
      ${s.length?x`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${l=>{this._moveIn[i]=Number(l.target.value),this.requestUpdate()}}>
              ${s.map(([l,M])=>x`<option value=${M} ?selected=${M===V}>${Pi(l)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(OV(this._panels,e,Number(V)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:S}
    </div>`}_sections(t,e,i,o,a){let n=[];for(let V of e){let l=V.sub?`sub:${V.sub}`:V.section?`sec:${V.section}`:`sec:${a}`,M=n[n.length-1];(!M||M.k!==l)&&n.push(M={k:l,f:[]}),M.f.push(V)}let s=V=>this._form(SV(t,V,i),V,l=>o({...yV(t,V,l,i),type:t.type}));return n.map(({k:V,f:l})=>{let M=V.slice(4);if(V.startsWith("sub:")){let u=`${t.type}:${M}`,f=(this._subOpen||(this._subOpen=new Set)).has(u);return x`<details class="sub psub" ?open=${f} @toggle=${g=>{g.target.open?this._subOpen.add(u):this._subOpen.delete(u),this.requestUpdate()}}>
          <summary><ha-icon icon="mdi:weather-sunset"></ha-icon><span>${M}</span></summary>
          ${f?x`<div class="psub-body">${s(l)}</div>`:S}
        </details>`}return x`<div class="grp">${M}</div>${s(l)}`})}_panelBody(t,e,i,o){let a=C2(t),n=o?{show_title:hi.has(t.type)?!!t.title:!0}:Qv(t),s=o?NH:IH;t.type==="hero"&&(s=s.filter(f=>!["icon","display","in_bar"].includes(f.name))),zH.has(t.type)&&(s=s.filter(f=>!["show_title","title","show_icon","icon"].includes(f.name)||t.type!=="clock"&&f.name==="title"));let V=["graph","temp_humidity","uv_solar","statistics"].includes(t.type),l=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...t.type==="metric"?["metric"]:[],...t.type==="statistics"?["preset"]:[],...t.type==="stack"?["panels","direction"]:[]],M=Object.keys(t).some(f=>!l.includes(f)),u=()=>i(Object.fromEntries(Object.entries(t).filter(([f])=>l.includes(f))));return x`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!M} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),u()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${V?x`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${t} .station=${this._station} @panel-changed=${f=>i(f.detail.panel)}></wsfc-series-editor>`:S}
      ${this._sections(t,s,n,i,"Layout")}
      ${a.groups?a.groups.map(([f,g])=>this._sections(t,g,{},i,f)):a.schema.length?this._sections(t,a.schema,{},i,`${a.label} options`):S}
      ${a.flex?x`${t.type==="sky_tracker"?x`<div class="grp">Arc & sky details</div>`:S}
            ${t.type==="sky_tracker"?x`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:S}
            ${this._flexEditor(e,t,i)}`:S}
    </div>`}};D(V6,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),D(V6,"styles",[gV,s1`
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
    .agrp-t { font-size: var(--ltek-fs-small, 12px); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ltek-c-accent); margin: 0 0 var(--ltek-sp-2, 8px); padding-bottom: 4px; border-bottom: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
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
    /* Group subtitle (design system §2): theme accent, mixed case, group size, semibold, thin divider. */
    .grp { font-size: var(--ltek-fs-group); font-weight: var(--ltek-fw-semibold); color: var(--accent-color, var(--ltek-c-accent)); margin-top: var(--ltek-sp-3); border-top: 1px solid var(--ltek-c-border-soft); padding-top: var(--ltek-sp-3); }
    .resetbar + .grp { margin-top: 0; border-top: 0; padding-top: 0; }
    .add { display: flex; gap: var(--ltek-sp-3); align-items: center; }
    .sel { flex: 1; font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); }
    .btn { display: inline-flex; align-items: center; gap: var(--ltek-sp-2); font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 0; background: var(--ltek-c-accent); color: var(--ltek-c-on-accent); cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub { border: 1px solid var(--ltek-c-border-soft); border-radius: var(--ltek-r-card); }
    details.sub > summary { font-size: var(--ltek-fs-group); padding: var(--ltek-sp-3) var(--ltek-sp-4); gap: var(--ltek-sp-3); }
    details.sub > summary ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub > summary .cnt { margin-left: auto; font-size: var(--ltek-fs-small); font-weight: var(--ltek-fw-normal); color: var(--ltek-c-muted); }
    details.sub > :not(summary) { margin: 0 var(--ltek-sp-4) var(--ltek-sp-4); }
    /* A panel's own sub-panels (e.g. Sun & moon facts), styled like the
       Weather Flex sub-panels next to them: no indent, hairline card, bold
       title, accent icon, chevron on the right. */
    .guidebar { margin: 0 0 var(--ltek-sp-3); }
    details.psub { margin: var(--ltek-sp-3) 0 8px; border: 1px solid #3a3a3a; border-radius: 12px; background: rgba(255,255,255,0.015); }
    details.psub > summary { list-style: none; cursor: pointer; user-select: none; padding: 10px 14px; display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: var(--primary-text-color, #e1e1e1); }
    details.psub > summary::-webkit-details-marker { display: none; }
    details.psub > summary ha-icon { --mdc-icon-size: 20px; color: var(--primary-color, #2196F3); flex-shrink: 0; }
    details.psub > summary::after { content: ""; margin-left: auto; width: 10px; height: 10px; border-right: 2px solid #999; border-bottom: 2px solid #999; transform: rotate(45deg); transition: transform 0.2s ease; }
    details.psub[open] > summary::after { transform: rotate(-135deg); }
    details.psub > .psub-body { margin: 0 14px 12px; }
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
    .flexed { }
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",V6);globalThis.__wsfcEditorHelpers={stackWithNext:Yv,unstack:TV,moveIntoStack:OV};var Kv=720,Xv=1100,Jv=r=>[r.tile_shadow===!1?"no-shadow":"",r.tile_border===!1?"no-border":"",r.tile_glow===!1?"no-glow":""].filter(Boolean).join(" ");function tx(r){let t=[];r.panel_radius!=null&&t.push(`--wsfc-radius:${Number(r.panel_radius)}px`);let e={soft:"0 2px 6px rgba(0,0,0,.25)",medium:"0 4px 14px rgba(0,0,0,.35)",strong:"0 8px 28px rgba(0,0,0,.5)"};if(e[r.panel_shadow]&&t.push(`--wsfc-tile-drop:${e[r.panel_shadow]}`),r.panel_glow){let i=r.panel_glow_color||r.panel_border_color||"var(--primary-color)";t.push(`--wsfc-tile-glow:0 0 ${Number(r.panel_glow_size??10)}px ${i}`)}return(r.panel_border_width!=null||r.panel_border_color)&&t.push(`--wsfc-tile-border:${Number(r.panel_border_width??1)}px solid ${r.panel_border_color||"var(--divider-color, rgba(127,127,127,.3))"}`),t}var L6=class extends r1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),o=[];return i&&o.push({ref:`device:${i.id}`}),e&&o.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:o}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=Et(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_entries(t=this._config.panels){let e=[];return t.forEach((i,o)=>{e.push([i,o]),i.type==="stack"&&(i.panels||[]).forEach((a,n)=>a&&e.push([a,`${o}.${n}`]))}),e}_at(t){let e=this._config.panels;if(typeof t=="number")return e[t];let[i,o]=String(t).split(".").map(Number);return o==null?e[i]:e[i]?.panels?.[o]}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(this._entries(t).map(([i,o])=>i.show===!1?this._key(i,o):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return this._entries(t).map(([e,i])=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){this._onUnsaved||(this._onUnsaved=()=>this.preview&&this.requestUpdate()),window.addEventListener("wsfc-unsaved",this._onUnsaved),super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},o=e<(i.narrow_width||Kv)?"narrow":e<(i.medium_width||Xv)?"medium":"wide";o!==this._size&&(this._size=o),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-unsaved",this._onUnsaved),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_reportDetected(){let t=this.renderRoot?.querySelector(".grid"),e=t?.querySelector("section.tile:not(.bare):not(.stack):not(.hero)")||t?.querySelector("section.tile");if(!t||!e)return;let i=getComputedStyle(t),o=a=>a?`${Math.round(parseFloat(a))}px`:"";qH(this.preview?"preview":"dashboard",{radius:o(getComputedStyle(e).borderTopLeftRadius),row:o(t.style.getPropertyValue("--wsfc-row")||i.getPropertyValue("--wsfc-row")),gap:o(i.rowGap),theme:this.hass?.themes?.theme||""})}_fit(){queueMicrotask(()=>this._reportDetected());let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let o=i.min_row_height||60,a=i.max_row_height||400,n=e.clientHeight;if(!n)return;let s=b=>(t.style.setProperty("--wsfc-row",`${b}px`),t.getBoundingClientRect().height),V=o,l=o+40,M=s(V),f=(s(l)-M)/(l-V),g=i.row_height||110;f>.5&&(g=Math.max(o,Math.min(a,V+(n-M)/f))),t.style.setProperty("--wsfc-row",`${Math.floor(g)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return S;let t=this._config,e=this._full,i=this._animatedBg,o=this._lite,a=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:"",i?`--wsfc-panel-opacity:${t.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${t.panel_blur??6}px`:"",...tx(t)].join(";"),n=t.panels.some(s=>s.type==="heading"&&s.show_bar);return x`
      <ha-card class=${`wsfc ${e?"full":""} ${this._layoutSize} ${i?"animated":""} ${o?"lite":""}`} style=${a}>
        ${this.preview&&jH()?x`<div class="unsaved" role="status">✎ Unsaved changes — press Save in the editor to keep them</div>`:S}
        ${t.background==="image"?this._renderImage():i&&!o?this._renderBackground():S}
        ${t.title?this._renderTitle():S}
        ${t.panel_bar===!1||n?S:x`<div class="topbar">${this._renderBar()}</div>`}
        <div class="scroller"><div class="grid">${this._renderPanels()}</div></div>
        ${this._popup!=null?this._renderPopup():S}
      </ha-card>
    `}get _lite(){return this._config?.lite_editing===!1?!1:!!(this.preview||this.editMode||/[?&]edit=1(&|$)/.test(globalThis.location?.search||""))}get _animatedBg(){let t=this._config?.background;return t==="animated"||t==="image"&&!!this._bgSource()}_bgSource(){let t=this._config||{};if(t.background_image_url)return String(t.background_image_url);let e=t.background_image;return(typeof e=="object"?e?.media_content_id:e)||""}_renderImage(){let t=this._config,e=this._bgSource();if(!e)return S;if(e.startsWith("media-source://")){let n=this._bgResolved;if(n?.id===e&&Date.now()-n.at<23*36e5)e=n.url;else{if(this._bgPending!==e){this._bgPending=e;let s=e;this.hass.callWS({type:"media_source/resolve_media",media_content_id:s}).then(V=>{this._bgResolved={id:s,url:V.url,at:Date.now()},this.requestUpdate()}).catch(()=>{}).finally(()=>{this._bgPending===s&&(this._bgPending=null)})}return S}}e.startsWith("/")&&this.hass?.hassUrl&&(e=this.hass.hassUrl(e));let i=e.replace(/["\\()]/g,n=>encodeURIComponent(n)),o=t.background_image_fit||"cover",a=Number(t.background_dim??.25);return x`<div class="bg bgimg" style="background-image:url(&quot;${i}&quot;);background-size:${o==="tile"?"auto":o};background-repeat:${o==="tile"?"repeat":"no-repeat"};--dim:${a}"></div>`}_renderBackground(){let t=this._config,e=this.hass.states[t.entity];if(!e)return S;this._watchHourly();let i=t.background_effects??!0;return x`<wsfc-animation-provider class="bg"
      .hass=${this.hass}
      .weatherEntity=${e}
      .config=${{entity:t.entity,show_condition_effects:i,show_moon_phase:t.background_moon_phase??!0}}
      .currentForecast=${this._hourlyNow}
    ></wsfc-animation-provider>`}_watchHourly(){let t=this._config.entity;this._hourlyFor!==t&&(this._unwatchHourly?.(),this._hourlyFor=t,this._unwatchHourly=$t(this.hass,t,"hourly",e=>{this._hourlyNow=e?.[0],this.requestUpdate()}))}_renderTitle(){let t=this._config;return x`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?x`<span class="subtitle">${t.subtitle}</span>`:S}
    </div>`}_renderBar(){let t=this._config.panels,e=this._entries(t).filter(([i])=>d7(i));return e.length?e.map(([i,o])=>{let a=C2(i),n=i.display==="popup"||this._isEmpty(i),s=n?this._popup===o:!this._hidden.has(this._key(i,o));return x`<button
        type="button"
        class="chip ${s?"on":""} ${n?"popup":""}"
        aria-pressed=${n?S:String(s)}
        aria-haspopup=${n?"dialog":S}
        @click=${()=>this._toggle(i,o)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${n?x`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:S}
      </button>`}):S}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":t.type==="wind_map"?"Wind map":t.type==="statistics"?t.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[t.preset]||"Graph":C2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"||this._isEmpty(t)){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),o=this._key(t,e);i.has(o)?i.delete(o):i.add(o),this._hidden=i,this._saveHidden()}_isHidden(t,e){return!d7(t)||this._config.panel_bar===!1?t.show===!1:this._hidden.has(this._key(t,e))}_isEmpty(t,e){if(t.type==="stack"&&e!=null&&typeof e=="number"){let o=(t.panels||[]).filter(Boolean);return o.length>0&&o.every((a,n)=>this._isHidden(a,`${e}.${n}`)||this._isEmpty(a))}let i=C2(t)?.hideWhen;try{return!!(i&&i(t,this.hass,this._station))}catch{return!1}}_renderPanels(){let t=this._config.panels,e=t.map((o,a)=>a).filter(o=>t[o].display!=="popup"&&!this._isHidden(t[o],o)&&!this._isEmpty(t[o],o));if(this._focus!=null&&(e=[this._focus]),!e.length)return x`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(o=>{let a=t[o],n=C2(a),s=WH(a,i),V=this._focus!=null?12:s.span,l=this._focus!=null?Math.max(Y2(a),5):s.rows,M=!!n.fit&&l>0&&a.fit!==!1&&this._focus==null,u=`calc(${l} * var(--wsfc-row) + ${l-1} * var(--wsfc-gap))`,f=`grid-column: span ${V};grid-row: span ${l?Math.max(1,Math.round(l*2)):2};${l?`min-height:${u};`:""}`,g=n.bare||a.type==="hero",b=a.display==="tile_popup",k=!g&&!b&&!["metric","stack","clock","chips"].includes(a.type)&&i!=="narrow",O=a.tile_background&&a.tile_background!=="default"?`bg-${a.tile_background}`:"";return x`<section class="tile ${a.type} ${n.bare?"bare":""} ${O} ${Jv(a)} ${l?"":"auto"} ${M?"fit":""} ${b?"tap":""}" style=${f}>
        ${b?x`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${a.title||this._autoTitle(a)}`}
              @click=${()=>this._popup=o}><span><ha-icon icon="mdi:arrow-expand"></ha-icon></span></button>`:S}
        ${k?x`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?o:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:S}
        ${this._panelEl(a,o)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._at(t);if(!e)return S;let i=()=>this._popup=null;return x`<div class="scrim" @click=${o=>o.target===o.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let o=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(o);if(!a){a=document.createElement(C2(t).tag),this._els.set(o,a);for(let n of this._els.keys())n!==o&&n.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(n)}return a.config=t,a.station=this._station,a.cardBg=this._animatedBg,a.lite=this._lite,a.fit=!i&&!!C2(t)?.fit&&Y2(t)>0&&t.fit!==!1&&this._focus==null,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),t.type==="stack"&&!i&&(a.hiddenKids=(t.panels||[]).map((n,s)=>!!n&&(this._isHidden(n,`${e}.${s}`)||this._isEmpty(n))).join(",")),a}};D(L6,"properties",{hass:{attribute:!1},preview:{type:Boolean},editMode:{type:Boolean},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),D(L6,"styles",[j6,U6,s1`
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
    /* Editor preview only (like AlertTicker's test-mode banner). */
    .unsaved { order: -1; align-self: center; position: relative; z-index: 2; margin: calc(-1 * var(--wsfc-gap)) 0 0; padding: 3px 12px;
      background: rgba(255, 165, 0, 0.92); color: #000; font-size: 12px; font-weight: 700; letter-spacing: 0.03em;
      border-radius: 0 0 10px 10px; pointer-events: none; }
    .bgimg { position: absolute; inset: 0; background-position: center; pointer-events: none; }
    .bgimg::after { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, var(--dim, 0.25)); border-radius: inherit; }

    /* "Tap to open larger": the tile is a live preview; one tap opens the pop-up. */
    /* Fit-to-panel tiles: their content doesn't size the rows (contain: size);
       the tile fills its rows (at least its own height) and the panel shrinks
       its content to fit. */
    .tile.fit { overflow: hidden; contain: size; }
    .tile.fit > :not(.expand):not(.tap-open) { flex: 1 1 0; min-height: 0; }
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
  `]);customElements.get(z4)||customElements.define(z4,L6);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===z4)||window.customCards.push({type:z4,name:`${I4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${I4.toUpperCase()}%c ${W6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");export{tx as panelStyleVars,Jv as tileFx};
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
