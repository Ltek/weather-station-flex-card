/* weather-station-flex-card 2026.10.18.1 — https://github.com/Ltek/weather-station-flex-card */
var ra=Object.create;var w9=Object.defineProperty;var er=Object.getOwnPropertyDescriptor;var Ca=Object.getOwnPropertyNames;var ia=Object.getPrototypeOf,oa=Object.prototype.hasOwnProperty;var Ha=(r,t,e)=>t in r?w9(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var rr=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Va=(r,t,e,C)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ca(t))!oa.call(r,i)&&i!==e&&w9(r,i,{get:()=>t[i],enumerable:!(C=er(t,i))||C.enumerable});return r};var b9=(r,t,e)=>(e=r!=null?ra(ia(r)):{},Va(t||!r||!r.__esModule?w9(e,"default",{value:r,enumerable:!0}):e,r));var q=(r,t,e,C)=>{for(var i=C>1?void 0:C?er(t,e):t,H=r.length-1,V;H>=0;H--)(V=r[H])&&(i=(C?V(t,e,i):V(i))||i);return C&&i&&w9(t,e,i),i};var Q=(r,t,e)=>Ha(r,typeof t!="symbol"?t+"":t,e);var Q9=rr((Ai,K8)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,C=Math.tan,i=Math.asin,H=Math.atan2,V=Math.acos,n=r/180,s=1e3*60*60*24,c=2440588,u=2451545;function A(W){return W.valueOf()/s-.5+c}function v(W){return new Date((W+.5-c)*s)}function _(W){return A(W)-u}var b=n*23.4397;function y(W,J){return H(t(W)*e(b)-C(J)*t(b),e(W))}function k(W,J){return i(t(J)*e(b)+e(J)*t(b)*t(W))}function P(W,J,V1){return H(t(W),e(W)*t(J)-C(V1)*e(J))}function $(W,J,V1){return i(t(J)*t(V1)+e(J)*e(V1)*e(W))}function I(W,J){return n*(280.16+360.9856235*W)-J}function X(W){return W<0&&(W=0),2967e-7/Math.tan(W+.00312536/(W+.08901179))}function Y(W){return n*(357.5291+.98560028*W)}function c1(W){var J=n*(1.9148*t(W)+.02*t(2*W)+3e-4*t(3*W)),V1=n*102.9372;return W+J+V1+r}function L1(W){var J=Y(W),V1=c1(J);return{dec:k(V1,0),ra:y(V1,0)}}var r1={};r1.getPosition=function(W,J,V1){var p1=n*-V1,a1=n*J,n1=_(W),_1=L1(n1),O1=I(n1,p1)-_1.ra;return{azimuth:P(O1,a1,_1.dec),altitude:$(O1,a1,_1.dec)}};var o1=r1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];r1.addTime=function(W,J,V1){o1.push([W,J,V1])};var h1=9e-4;function I1(W,J){return Math.round(W-h1-J/(2*r))}function b1(W,J,V1){return h1+(W+J)/(2*r)+V1}function n2(W,J,V1){return u+W+.0053*t(J)-.0069*t(2*V1)}function j1(W,J,V1){return V((t(W)-t(J)*t(V1))/(e(J)*e(V1)))}function y1(W){return-2.076*Math.sqrt(W)/60}function K(W,J,V1,p1,a1,n1,_1){var O1=j1(W,V1,p1),M2=b1(O1,J,a1);return n2(M2,n1,_1)}r1.getTimes=function(W,J,V1,p1){p1=p1||0;var a1=n*-V1,n1=n*J,_1=y1(p1),O1=_(W),M2=I1(O1,a1),p2=b1(0,a1,M2),Z2=Y(p2),L2=c1(Z2),s1=k(L2,0),U2=n2(p2,Z2,L2),E2,V5,w2,u2,X2,J2,Y1={solarNoon:v(U2),nadir:v(U2-.5)};for(E2=0,V5=o1.length;E2<V5;E2+=1)w2=o1[E2],u2=(w2[0]+_1)*n,X2=K(u2,a1,n1,s1,M2,Z2,L2),J2=U2-(X2-U2),Y1[w2[1]]=v(J2),Y1[w2[2]]=v(X2);return Y1};function G1(W){var J=n*(218.316+13.176396*W),V1=n*(134.963+13.064993*W),p1=n*(93.272+13.22935*W),a1=J+n*6.289*t(V1),n1=n*5.128*t(p1),_1=385001-20905*e(V1);return{ra:y(a1,n1),dec:k(a1,n1),dist:_1}}r1.getMoonPosition=function(W,J,V1){var p1=n*-V1,a1=n*J,n1=_(W),_1=G1(n1),O1=I(n1,p1)-_1.ra,M2=$(O1,a1,_1.dec),p2=H(t(O1),C(a1)*e(_1.dec)-t(_1.dec)*e(O1));return M2=M2+X(M2),{azimuth:P(O1,a1,_1.dec),altitude:M2,distance:_1.dist,parallacticAngle:p2}},r1.getMoonIllumination=function(W){var J=_(W||new Date),V1=L1(J),p1=G1(J),a1=149598e3,n1=V(t(V1.dec)*t(p1.dec)+e(V1.dec)*e(p1.dec)*e(V1.ra-p1.ra)),_1=H(a1*t(n1),p1.dist-a1*e(n1)),O1=H(e(V1.dec)*t(V1.ra-p1.ra),t(V1.dec)*e(p1.dec)-e(V1.dec)*t(p1.dec)*e(V1.ra-p1.ra));return{fraction:(1+e(_1))/2,phase:.5+.5*_1*(O1<0?-1:1)/Math.PI,angle:O1}};function H1(W,J){return new Date(W.valueOf()+J*s/24)}r1.getMoonTimes=function(W,J,V1,p1){var a1=new Date(W);p1?a1.setUTCHours(0,0,0,0):a1.setHours(0,0,0,0);for(var n1=.133*n,_1=r1.getMoonPosition(a1,J,V1).altitude-n1,O1,M2,p2,Z2,L2,s1,U2,E2,V5,w2,u2,X2,J2,Y1=1;Y1<=24&&(O1=r1.getMoonPosition(H1(a1,Y1),J,V1).altitude-n1,M2=r1.getMoonPosition(H1(a1,Y1+1),J,V1).altitude-n1,L2=(_1+M2)/2-O1,s1=(M2-_1)/2,U2=-s1/(2*L2),E2=(L2*U2+s1)*U2+O1,V5=s1*s1-4*L2*O1,w2=0,V5>=0&&(J2=Math.sqrt(V5)/(Math.abs(L2)*2),u2=U2-J2,X2=U2+J2,Math.abs(u2)<=1&&w2++,Math.abs(X2)<=1&&w2++,u2<-1&&(u2=X2)),w2===1?_1<0?p2=Y1+u2:Z2=Y1+u2:w2===2&&(p2=Y1+(E2<0?X2:u2),Z2=Y1+(E2<0?u2:X2)),!(p2&&Z2));Y1+=2)_1=M2;var m2={};return p2&&(m2.rise=H1(a1,p2)),Z2&&(m2.set=H1(a1,Z2)),!p2&&!Z2&&(m2[E2>0?"alwaysUp":"alwaysDown"]=!0),m2},typeof Ai=="object"&&typeof K8<"u"?K8.exports=r1:typeof define=="function"&&define.amd?define(r1):window.SunCalc=r1})()});var dV=rr((s8,cV)=>{(function(r,t){typeof s8=="object"&&typeof cV<"u"?t(s8):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(s8,(function(r){"use strict";var t="1.9.4";function e(o){var a,M,p,h;for(M=1,p=arguments.length;M<p;M++){h=arguments[M];for(a in h)o[a]=h[a]}return o}var C=Object.create||(function(){function o(){}return function(a){return o.prototype=a,new o}})();function i(o,a){var M=Array.prototype.slice;if(o.bind)return o.bind.apply(o,M.call(arguments,1));var p=M.call(arguments,2);return function(){return o.apply(a,p.length?p.concat(M.call(arguments)):arguments)}}var H=0;function V(o){return"_leaflet_id"in o||(o._leaflet_id=++H),o._leaflet_id}function n(o,a,M){var p,h,g,O;return O=function(){p=!1,h&&(g.apply(M,h),h=!1)},g=function(){p?h=arguments:(o.apply(M,arguments),setTimeout(O,a),p=!0)},g}function s(o,a,M){var p=a[1],h=a[0],g=p-h;return o===p&&M?o:((o-h)%g+g)%g+h}function c(){return!1}function u(o,a){if(a===!1)return o;var M=Math.pow(10,a===void 0?6:a);return Math.round(o*M)/M}function A(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function v(o){return A(o).split(/\s+/)}function _(o,a){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?C(o.options):{});for(var M in a)o.options[M]=a[M];return o.options}function b(o,a,M){var p=[];for(var h in o)p.push(encodeURIComponent(M?h.toUpperCase():h)+"="+encodeURIComponent(o[h]));return(!a||a.indexOf("?")===-1?"?":"&")+p.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function k(o,a){return o.replace(y,function(M,p){var h=a[p];if(h===void 0)throw new Error("No value provided for variable "+M);return typeof h=="function"&&(h=h(a)),h})}var P=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function $(o,a){for(var M=0;M<o.length;M++)if(o[M]===a)return M;return-1}var I="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function X(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var Y=0;function c1(o){var a=+new Date,M=Math.max(0,16-(a-Y));return Y=a+M,window.setTimeout(o,M)}var L1=window.requestAnimationFrame||X("RequestAnimationFrame")||c1,r1=window.cancelAnimationFrame||X("CancelAnimationFrame")||X("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function o1(o,a,M){if(M&&L1===c1)o.call(a);else return L1.call(window,i(o,a))}function h1(o){o&&r1.call(window,o)}var I1={__proto__:null,extend:e,create:C,bind:i,get lastId(){return H},stamp:V,throttle:n,wrapNum:s,falseFn:c,formatNum:u,trim:A,splitWords:v,setOptions:_,getParamString:b,template:k,isArray:P,indexOf:$,emptyImageUrl:I,requestFn:L1,cancelFn:r1,requestAnimFrame:o1,cancelAnimFrame:h1};function b1(){}b1.extend=function(o){var a=function(){_(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},M=a.__super__=this.prototype,p=C(M);p.constructor=a,a.prototype=p;for(var h in this)Object.prototype.hasOwnProperty.call(this,h)&&h!=="prototype"&&h!=="__super__"&&(a[h]=this[h]);return o.statics&&e(a,o.statics),o.includes&&(n2(o.includes),e.apply(null,[p].concat(o.includes))),e(p,o),delete p.statics,delete p.includes,p.options&&(p.options=M.options?C(M.options):{},e(p.options,o.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){M.callInitHooks&&M.callInitHooks.call(this),this._initHooksCalled=!0;for(var g=0,O=p._initHooks.length;g<O;g++)p._initHooks[g].call(this)}},a},b1.include=function(o){var a=this.prototype.options;return e(this.prototype,o),o.options&&(this.prototype.options=a,this.mergeOptions(o.options)),this},b1.mergeOptions=function(o){return e(this.prototype.options,o),this},b1.addInitHook=function(o){var a=Array.prototype.slice.call(arguments,1),M=typeof o=="function"?o:function(){this[o].apply(this,a)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(M),this};function n2(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=P(o)?o:[o];for(var a=0;a<o.length;a++)o[a]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var j1={on:function(o,a,M){if(typeof o=="object")for(var p in o)this._on(p,o[p],a);else{o=v(o);for(var h=0,g=o.length;h<g;h++)this._on(o[h],a,M)}return this},off:function(o,a,M){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var p in o)this._off(p,o[p],a);else{o=v(o);for(var h=arguments.length===1,g=0,O=o.length;g<O;g++)h?this._off(o[g]):this._off(o[g],a,M)}return this},_on:function(o,a,M,p){if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}if(this._listens(o,a,M)===!1){M===this&&(M=void 0);var h={fn:a,ctx:M};p&&(h.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(h)}},_off:function(o,a,M){var p,h,g;if(this._events&&(p=this._events[o],!!p)){if(arguments.length===1){if(this._firingCount)for(h=0,g=p.length;h<g;h++)p[h].fn=c;delete this._events[o];return}if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}var O=this._listens(o,a,M);if(O!==!1){var E=p[O];this._firingCount&&(E.fn=c,this._events[o]=p=p.slice()),p.splice(O,1)}}},fire:function(o,a,M){if(!this.listens(o,M))return this;var p=e({},a,{type:o,target:this,sourceTarget:a&&a.sourceTarget||this});if(this._events){var h=this._events[o];if(h){this._firingCount=this._firingCount+1||1;for(var g=0,O=h.length;g<O;g++){var E=h[g],R=E.fn;E.once&&this.off(o,R,E.ctx),R.call(E.ctx||this,p)}this._firingCount--}}return M&&this._propagateEvent(p),this},listens:function(o,a,M,p){typeof o!="string"&&console.warn('"string" type argument expected');var h=a;typeof a!="function"&&(p=!!a,h=void 0,M=void 0);var g=this._events&&this._events[o];if(g&&g.length&&this._listens(o,h,M)!==!1)return!0;if(p){for(var O in this._eventParents)if(this._eventParents[O].listens(o,a,M,p))return!0}return!1},_listens:function(o,a,M){if(!this._events)return!1;var p=this._events[o]||[];if(!a)return!!p.length;M===this&&(M=void 0);for(var h=0,g=p.length;h<g;h++)if(p[h].fn===a&&p[h].ctx===M)return h;return!1},once:function(o,a,M){if(typeof o=="object")for(var p in o)this._on(p,o[p],a,!0);else{o=v(o);for(var h=0,g=o.length;h<g;h++)this._on(o[h],a,M,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[V(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[V(o)],this},_propagateEvent:function(o){for(var a in this._eventParents)this._eventParents[a].fire(o.type,e({layer:o.target,propagatedFrom:o.target},o),!0)}};j1.addEventListener=j1.on,j1.removeEventListener=j1.clearAllEventListeners=j1.off,j1.addOneTimeEventListener=j1.once,j1.fireEvent=j1.fire,j1.hasEventListeners=j1.listens;var y1=b1.extend(j1);function K(o,a,M){this.x=M?Math.round(o):o,this.y=M?Math.round(a):a}var G1=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};K.prototype={clone:function(){return new K(this.x,this.y)},add:function(o){return this.clone()._add(H1(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(H1(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new K(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new K(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=G1(this.x),this.y=G1(this.y),this},distanceTo:function(o){o=H1(o);var a=o.x-this.x,M=o.y-this.y;return Math.sqrt(a*a+M*M)},equals:function(o){return o=H1(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=H1(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+u(this.x)+", "+u(this.y)+")"}};function H1(o,a,M){return o instanceof K?o:P(o)?new K(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new K(o.x,o.y):new K(o,a,M)}function W(o,a){if(o)for(var M=a?[o,a]:o,p=0,h=M.length;p<h;p++)this.extend(M[p])}W.prototype={extend:function(o){var a,M;if(!o)return this;if(o instanceof K||typeof o[0]=="number"||"x"in o)a=M=H1(o);else if(o=J(o),a=o.min,M=o.max,!a||!M)return this;return!this.min&&!this.max?(this.min=a.clone(),this.max=M.clone()):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(M.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(M.y,this.max.y)),this},getCenter:function(o){return H1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return H1(this.min.x,this.max.y)},getTopRight:function(){return H1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var a,M;return typeof o[0]=="number"||o instanceof K?o=H1(o):o=J(o),o instanceof W?(a=o.min,M=o.max):a=M=o,a.x>=this.min.x&&M.x<=this.max.x&&a.y>=this.min.y&&M.y<=this.max.y},intersects:function(o){o=J(o);var a=this.min,M=this.max,p=o.min,h=o.max,g=h.x>=a.x&&p.x<=M.x,O=h.y>=a.y&&p.y<=M.y;return g&&O},overlaps:function(o){o=J(o);var a=this.min,M=this.max,p=o.min,h=o.max,g=h.x>a.x&&p.x<M.x,O=h.y>a.y&&p.y<M.y;return g&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var a=this.min,M=this.max,p=Math.abs(a.x-M.x)*o,h=Math.abs(a.y-M.y)*o;return J(H1(a.x-p,a.y-h),H1(M.x+p,M.y+h))},equals:function(o){return o?(o=J(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function J(o,a){return!o||o instanceof W?o:new W(o,a)}function V1(o,a){if(o)for(var M=a?[o,a]:o,p=0,h=M.length;p<h;p++)this.extend(M[p])}V1.prototype={extend:function(o){var a=this._southWest,M=this._northEast,p,h;if(o instanceof a1)p=o,h=o;else if(o instanceof V1){if(p=o._southWest,h=o._northEast,!p||!h)return this}else return o?this.extend(n1(o)||p1(o)):this;return!a&&!M?(this._southWest=new a1(p.lat,p.lng),this._northEast=new a1(h.lat,h.lng)):(a.lat=Math.min(p.lat,a.lat),a.lng=Math.min(p.lng,a.lng),M.lat=Math.max(h.lat,M.lat),M.lng=Math.max(h.lng,M.lng)),this},pad:function(o){var a=this._southWest,M=this._northEast,p=Math.abs(a.lat-M.lat)*o,h=Math.abs(a.lng-M.lng)*o;return new V1(new a1(a.lat-p,a.lng-h),new a1(M.lat+p,M.lng+h))},getCenter:function(){return new a1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new a1(this.getNorth(),this.getWest())},getSouthEast:function(){return new a1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof a1||"lat"in o?o=n1(o):o=p1(o);var a=this._southWest,M=this._northEast,p,h;return o instanceof V1?(p=o.getSouthWest(),h=o.getNorthEast()):p=h=o,p.lat>=a.lat&&h.lat<=M.lat&&p.lng>=a.lng&&h.lng<=M.lng},intersects:function(o){o=p1(o);var a=this._southWest,M=this._northEast,p=o.getSouthWest(),h=o.getNorthEast(),g=h.lat>=a.lat&&p.lat<=M.lat,O=h.lng>=a.lng&&p.lng<=M.lng;return g&&O},overlaps:function(o){o=p1(o);var a=this._southWest,M=this._northEast,p=o.getSouthWest(),h=o.getNorthEast(),g=h.lat>a.lat&&p.lat<M.lat,O=h.lng>a.lng&&p.lng<M.lng;return g&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,a){return o?(o=p1(o),this._southWest.equals(o.getSouthWest(),a)&&this._northEast.equals(o.getNorthEast(),a)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function p1(o,a){return o instanceof V1?o:new V1(o,a)}function a1(o,a,M){if(isNaN(o)||isNaN(a))throw new Error("Invalid LatLng object: ("+o+", "+a+")");this.lat=+o,this.lng=+a,M!==void 0&&(this.alt=+M)}a1.prototype={equals:function(o,a){if(!o)return!1;o=n1(o);var M=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return M<=(a===void 0?1e-9:a)},toString:function(o){return"LatLng("+u(this.lat,o)+", "+u(this.lng,o)+")"},distanceTo:function(o){return O1.distance(this,n1(o))},wrap:function(){return O1.wrapLatLng(this)},toBounds:function(o){var a=180*o/40075017,M=a/Math.cos(Math.PI/180*this.lat);return p1([this.lat-a,this.lng-M],[this.lat+a,this.lng+M])},clone:function(){return new a1(this.lat,this.lng,this.alt)}};function n1(o,a,M){return o instanceof a1?o:P(o)&&typeof o[0]!="object"?o.length===3?new a1(o[0],o[1],o[2]):o.length===2?new a1(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new a1(o.lat,"lng"in o?o.lng:o.lon,o.alt):a===void 0?null:new a1(o,a,M)}var _1={latLngToPoint:function(o,a){var M=this.projection.project(o),p=this.scale(a);return this.transformation._transform(M,p)},pointToLatLng:function(o,a){var M=this.scale(a),p=this.transformation.untransform(o,M);return this.projection.unproject(p)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var a=this.projection.bounds,M=this.scale(o),p=this.transformation.transform(a.min,M),h=this.transformation.transform(a.max,M);return new W(p,h)},infinite:!1,wrapLatLng:function(o){var a=this.wrapLng?s(o.lng,this.wrapLng,!0):o.lng,M=this.wrapLat?s(o.lat,this.wrapLat,!0):o.lat,p=o.alt;return new a1(M,a,p)},wrapLatLngBounds:function(o){var a=o.getCenter(),M=this.wrapLatLng(a),p=a.lat-M.lat,h=a.lng-M.lng;if(p===0&&h===0)return o;var g=o.getSouthWest(),O=o.getNorthEast(),E=new a1(g.lat-p,g.lng-h),R=new a1(O.lat-p,O.lng-h);return new V1(E,R)}},O1=e({},_1,{wrapLng:[-180,180],R:6371e3,distance:function(o,a){var M=Math.PI/180,p=o.lat*M,h=a.lat*M,g=Math.sin((a.lat-o.lat)*M/2),O=Math.sin((a.lng-o.lng)*M/2),E=g*g+Math.cos(p)*Math.cos(h)*O*O,R=2*Math.atan2(Math.sqrt(E),Math.sqrt(1-E));return this.R*R}}),M2=6378137,p2={R:M2,MAX_LATITUDE:85.0511287798,project:function(o){var a=Math.PI/180,M=this.MAX_LATITUDE,p=Math.max(Math.min(M,o.lat),-M),h=Math.sin(p*a);return new K(this.R*o.lng*a,this.R*Math.log((1+h)/(1-h))/2)},unproject:function(o){var a=180/Math.PI;return new a1((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*a,o.x*a/this.R)},bounds:(function(){var o=M2*Math.PI;return new W([-o,-o],[o,o])})()};function Z2(o,a,M,p){if(P(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=a,this._c=M,this._d=p}Z2.prototype={transform:function(o,a){return this._transform(o.clone(),a)},_transform:function(o,a){return a=a||1,o.x=a*(this._a*o.x+this._b),o.y=a*(this._c*o.y+this._d),o},untransform:function(o,a){return a=a||1,new K((o.x/a-this._b)/this._a,(o.y/a-this._d)/this._c)}};function L2(o,a,M,p){return new Z2(o,a,M,p)}var s1=e({},O1,{code:"EPSG:3857",projection:p2,transformation:(function(){var o=.5/(Math.PI*p2.R);return L2(o,.5,-o,.5)})()}),U2=e({},s1,{code:"EPSG:900913"});function E2(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function V5(o,a){var M="",p,h,g,O,E,R;for(p=0,g=o.length;p<g;p++){for(E=o[p],h=0,O=E.length;h<O;h++)R=E[h],M+=(h?"L":"M")+R.x+" "+R.y;M+=a?M1.svg?"z":"x":""}return M||"M0 0"}var w2=document.documentElement.style,u2="ActiveXObject"in window,X2=u2&&!document.addEventListener,J2="msLaunchUri"in navigator&&!("documentMode"in document),Y1=j2("webkit"),m2=j2("android"),Z0=j2("android 2")||j2("android 3"),M8=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),l8=m2&&j2("Google")&&M8<537&&!("AudioNode"in window),W3=!!window.opera,o9=!J2&&j2("chrome"),U3=j2("gecko")&&!Y1&&!W3&&!u2,a3=!o9&&j2("safari"),y7=j2("phantom"),j="OTransition"in w2,H9=navigator.platform.indexOf("Win")===0,j3=u2&&"transition"in w2,w0="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Z0,V9="MozPerspective"in w2,a9=!window.L_DISABLE_3D&&(j3||w0||V9)&&!j&&!y7,n3=typeof orientation<"u"||j2("mobile"),ve=n3&&Y1,c8=n3&&w0,n9=!window.PointerEvent&&window.MSPointerEvent,L9=!!(window.PointerEvent||n9),s9="ontouchstart"in window||!!window.TouchEvent,M9=!window.L_NO_TOUCH&&(s9||L9),l9=n3&&W3,d8=n3&&U3,O7=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,p8=(function(){var o=!1;try{var a=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",c,a),window.removeEventListener("testPassiveEventSupport",c,a)}catch{}return o})(),u8=(function(){return!!document.createElement("canvas").getContext})(),k7=!!(document.createElementNS&&E2("svg").createSVGRect),m8=!!k7&&(function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),h8=!k7&&(function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var a=o.firstChild;return a.style.behavior="url(#default#VML)",a&&typeof a.adj=="object"}catch{return!1}})(),T7=navigator.platform.indexOf("Mac")===0,L3=navigator.platform.indexOf("Linux")===0;function j2(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var M1={ie:u2,ielt9:X2,edge:J2,webkit:Y1,android:m2,android23:Z0,androidStock:l8,opera:W3,chrome:o9,gecko:U3,safari:a3,phantom:y7,opera12:j,win:H9,ie3d:j3,webkit3d:w0,gecko3d:V9,any3d:a9,mobile:n3,mobileWebkit:ve,mobileWebkit3d:c8,msPointer:n9,pointer:L9,touch:M9,touchNative:s9,mobileOpera:l9,mobileGecko:d8,retina:O7,passiveEvents:p8,canvas:u8,svg:k7,vml:h8,inlineSvg:m8,mac:T7,linux:L3},b0=M1.msPointer?"MSPointerDown":"pointerdown",P7=M1.msPointer?"MSPointerMove":"pointermove",F7=M1.msPointer?"MSPointerUp":"pointerup",E7=M1.msPointer?"MSPointerCancel":"pointercancel",B7={touchstart:b0,touchmove:P7,touchend:F7,touchcancel:E7},R7={touchstart:N,touchmove:B,touchend:B,touchcancel:B},l={},m=!1;function d(o,a,M){return a==="touchstart"&&T(),R7[a]?(M=R7[a].bind(this,M),o.addEventListener(B7[a],M,!1),M):(console.warn("wrong event specified:",a),c)}function f(o,a,M){if(!B7[a]){console.warn("wrong event specified:",a);return}o.removeEventListener(B7[a],M,!1)}function x(o){l[o.pointerId]=o}function S(o){l[o.pointerId]&&(l[o.pointerId]=o)}function Z(o){delete l[o.pointerId]}function T(){m||(document.addEventListener(b0,x,!0),document.addEventListener(P7,S,!0),document.addEventListener(F7,Z,!0),document.addEventListener(E7,Z,!0),m=!0)}function B(o,a){if(a.pointerType!==(a.MSPOINTER_TYPE_MOUSE||"mouse")){a.touches=[];for(var M in l)a.touches.push(l[M]);a.changedTouches=[a],o(a)}}function N(o,a){a.MSPOINTER_TYPE_TOUCH&&a.pointerType===a.MSPOINTER_TYPE_TOUCH&&i2(a),B(o,a)}function D(o){var a={},M,p;for(p in o)M=o[p],a[p]=M&&M.bind?M.bind(o):M;return o=a,a.type="dblclick",a.detail=2,a.isTrusted=!1,a._simulated=!0,a}var C1=200;function d1(o,a){o.addEventListener("dblclick",a);var M=0,p;function h(g){if(g.detail!==1){p=g.detail;return}if(!(g.pointerType==="mouse"||g.sourceCapabilities&&!g.sourceCapabilities.firesTouchEvents)){var O=i0(g);if(!(O.some(function(R){return R instanceof HTMLLabelElement&&R.attributes.for})&&!O.some(function(R){return R instanceof HTMLInputElement||R instanceof HTMLSelectElement}))){var E=Date.now();E-M<=C1?(p++,p===2&&a(D(g))):p=1,M=E}}}return o.addEventListener("click",h),{dblclick:a,simDblclick:h}}function z(o,a){o.removeEventListener("dblclick",a.dblclick),o.removeEventListener("click",a.simDblclick)}var S1=f5(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),N1=f5(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),W1=N1==="webkitTransition"||N1==="OTransition"?N1+"End":"transitionend";function U1(o){return typeof o=="string"?document.getElementById(o):o}function z1(o,a){var M=o.style[a]||o.currentStyle&&o.currentStyle[a];if((!M||M==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(o,null);M=p?p[a]:null}return M==="auto"?null:M}function u1(o,a,M){var p=document.createElement(o);return p.className=a||"",M&&M.appendChild(p),p}function P1(o){var a=o.parentNode;a&&a.removeChild(o)}function h5(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function B2(o){var a=o.parentNode;a&&a.lastChild!==o&&a.appendChild(o)}function A5(o){var a=o.parentNode;a&&a.firstChild!==o&&a.insertBefore(o,a.firstChild)}function a5(o,a){if(o.classList!==void 0)return o.classList.contains(a);var M=t5(o);return M.length>0&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(M)}function l1(o,a){if(o.classList!==void 0)for(var M=v(a),p=0,h=M.length;p<h;p++)o.classList.add(M[p]);else if(!a5(o,a)){var g=t5(o);n5(o,(g?g+" ":"")+a)}}function E1(o,a){o.classList!==void 0?o.classList.remove(a):n5(o,A((" "+t5(o)+" ").replace(" "+a+" "," ")))}function n5(o,a){o.className.baseVal===void 0?o.className=a:o.className.baseVal=a}function t5(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function t2(o,a){"opacity"in o.style?o.style.opacity=a:"filter"in o.style&&e0(o,a)}function e0(o,a){var M=!1,p="DXImageTransform.Microsoft.Alpha";try{M=o.filters.item(p)}catch{if(a===1)return}a=Math.round(a*100),M?(M.Enabled=a!==100,M.Opacity=a):o.style.filter+=" progid:"+p+"(opacity="+a+")"}function f5(o){for(var a=document.documentElement.style,M=0;M<o.length;M++)if(o[M]in a)return o[M];return!1}function e5(o,a,M){var p=a||new K(0,0);o.style[S1]=(M1.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(M?" scale("+M+")":"")}function Q1(o,a){o._leaflet_pos=a,M1.any3d?e5(o,a):(o.style.left=a.x+"px",o.style.top=a.y+"px")}function G2(o){return o._leaflet_pos||new K(0,0)}var r0,c2,E5;if("onselectstart"in document)r0=function(){A1(window,"selectstart",i2)},c2=function(){x1(window,"selectstart",i2)};else{var L5=f5(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);r0=function(){if(L5){var o=document.documentElement.style;E5=o[L5],o[L5]="none"}},c2=function(){L5&&(document.documentElement.style[L5]=E5,E5=void 0)}}function s3(){A1(window,"dragstart",i2)}function M3(){x1(window,"dragstart",i2)}var B5,R5;function D5(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&($5(),B5=o,R5=o.style.outlineStyle,o.style.outlineStyle="none",A1(window,"keydown",$5))}function $5(){B5&&(B5.style.outlineStyle=R5,B5=void 0,R5=void 0,x1(window,"keydown",$5))}function v5(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function I5(o){var a=o.getBoundingClientRect();return{x:a.width/o.offsetWidth||1,y:a.height/o.offsetHeight||1,boundingClientRect:a}}var l3={__proto__:null,TRANSFORM:S1,TRANSITION:N1,TRANSITION_END:W1,get:U1,getStyle:z1,create:u1,remove:P1,empty:h5,toFront:B2,toBack:A5,hasClass:a5,addClass:l1,removeClass:E1,setClass:n5,getClass:t5,setOpacity:t2,testProp:f5,setTransform:e5,setPosition:Q1,getPosition:G2,get disableTextSelection(){return r0},get enableTextSelection(){return c2},disableImageDrag:s3,enableImageDrag:M3,preventOutline:D5,restoreOutline:$5,getSizedParentNode:v5,getScale:I5};function A1(o,a,M,p){if(a&&typeof a=="object")for(var h in a)c3(o,h,a[h],M);else{a=v(a);for(var g=0,O=a.length;g<O;g++)c3(o,a[g],M,p)}return this}var h2="_leaflet_events";function x1(o,a,M,p){if(arguments.length===1)x5(o),delete o[h2];else if(a&&typeof a=="object")for(var h in a)d3(o,h,a[h],M);else if(a=v(a),arguments.length===2)x5(o,function(E){return $(a,E)!==-1});else for(var g=0,O=a.length;g<O;g++)d3(o,a[g],M,p);return this}function x5(o,a){for(var M in o[h2]){var p=M.split(/\d/)[0];(!a||a(p))&&d3(o,p,null,null,M)}}var C0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function c3(o,a,M,p){var h=a+V(M)+(p?"_"+V(p):"");if(o[h2]&&o[h2][h])return this;var g=function(E){return M.call(p||o,E||window.event)},O=g;!M1.touchNative&&M1.pointer&&a.indexOf("touch")===0?g=d(o,a,g):M1.touch&&a==="dblclick"?g=d1(o,g):"addEventListener"in o?a==="touchstart"||a==="touchmove"||a==="wheel"||a==="mousewheel"?o.addEventListener(C0[a]||a,g,M1.passiveEvents?{passive:!1}:!1):a==="mouseenter"||a==="mouseleave"?(g=function(E){E=E||window.event,G(o,E)&&O(E)},o.addEventListener(C0[a],g,!1)):o.addEventListener(a,O,!1):o.attachEvent("on"+a,g),o[h2]=o[h2]||{},o[h2][h]=g}function d3(o,a,M,p,h){h=h||a+V(M)+(p?"_"+V(p):"");var g=o[h2]&&o[h2][h];if(!g)return this;!M1.touchNative&&M1.pointer&&a.indexOf("touch")===0?f(o,a,g):M1.touch&&a==="dblclick"?z(o,g):"removeEventListener"in o?o.removeEventListener(C0[a]||a,g,!1):o.detachEvent("on"+a,g),o[h2][h]=null}function m1(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function B1(o){return c3(o,"wheel",m1),this}function A2(o){return A1(o,"mousedown touchstart dblclick contextmenu",m1),o._leaflet_disable_click=!0,this}function i2(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function r5(o){return i2(o),m1(o),this}function i0(o){if(o.composedPath)return o.composedPath();for(var a=[],M=o.target;M;)a.push(M),M=M.parentNode;return a}function p3(o,a){if(!a)return new K(o.clientX,o.clientY);var M=I5(a),p=M.boundingClientRect;return new K((o.clientX-p.left)/M.x-a.clientLeft,(o.clientY-p.top)/M.y-a.clientTop)}var A8=M1.linux&&M1.chrome?window.devicePixelRatio:M1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function c9(o){return M1.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/A8:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function G(o,a){var M=a.relatedTarget;if(!M)return!0;try{for(;M&&M!==o;)M=M.parentNode}catch{return!1}return M!==o}var f1={__proto__:null,on:A1,off:x1,stopPropagation:m1,disableScrollPropagation:B1,disableClickPropagation:A2,preventDefault:i2,stop:r5,getPropagationPath:i0,getMousePosition:p3,getWheelDelta:c9,isExternalTarget:G,addListener:A1,removeListener:x1},k1=y1.extend({run:function(o,a,M,p){this.stop(),this._el=o,this._inProgress=!0,this._duration=M||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=G2(o),this._offset=a.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=o1(this._animate,this),this._step()},_step:function(o){var a=+new Date-this._startTime,M=this._duration*1e3;a<M?this._runFrame(this._easeOut(a/M),o):(this._runFrame(1),this._complete())},_runFrame:function(o,a){var M=this._startPos.add(this._offset.multiplyBy(o));a&&M._round(),Q1(this._el,M),this.fire("step")},_complete:function(){h1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),i1=y1.extend({options:{crs:s1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,a){a=_(this,a),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.zoom!==void 0&&(this._zoom=this._limitZoom(a.zoom)),a.center&&a.zoom!==void 0&&this.setView(n1(a.center),a.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=N1&&M1.any3d&&!M1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A1(this._proxy,W1,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,a,M){if(a=a===void 0?this._zoom:this._limitZoom(a),o=this._limitCenter(n1(o),a,this.options.maxBounds),M=M||{},this._stop(),this._loaded&&!M.reset&&M!==!0){M.animate!==void 0&&(M.zoom=e({animate:M.animate},M.zoom),M.pan=e({animate:M.animate,duration:M.duration},M.pan));var p=this._zoom!==a?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,a,M.zoom):this._tryAnimatedPan(o,M.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(o,a,M.pan&&M.pan.noMoveStart),this},setZoom:function(o,a){return this._loaded?this.setView(this.getCenter(),o,{zoom:a}):(this._zoom=o,this)},zoomIn:function(o,a){return o=o||(M1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,a)},zoomOut:function(o,a){return o=o||(M1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,a)},setZoomAround:function(o,a,M){var p=this.getZoomScale(a),h=this.getSize().divideBy(2),g=o instanceof K?o:this.latLngToContainerPoint(o),O=g.subtract(h).multiplyBy(1-1/p),E=this.containerPointToLatLng(h.add(O));return this.setView(E,a,{zoom:M})},_getBoundsCenterZoom:function(o,a){a=a||{},o=o.getBounds?o.getBounds():p1(o);var M=H1(a.paddingTopLeft||a.padding||[0,0]),p=H1(a.paddingBottomRight||a.padding||[0,0]),h=this.getBoundsZoom(o,!1,M.add(p));if(h=typeof a.maxZoom=="number"?Math.min(a.maxZoom,h):h,h===1/0)return{center:o.getCenter(),zoom:h};var g=p.subtract(M).divideBy(2),O=this.project(o.getSouthWest(),h),E=this.project(o.getNorthEast(),h),R=this.unproject(O.add(E).divideBy(2).add(g),h);return{center:R,zoom:h}},fitBounds:function(o,a){if(o=p1(o),!o.isValid())throw new Error("Bounds are not valid.");var M=this._getBoundsCenterZoom(o,a);return this.setView(M.center,M.zoom,a)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,a){return this.setView(o,this._zoom,{pan:a})},panBy:function(o,a){if(o=H1(o).round(),a=a||{},!o.x&&!o.y)return this.fire("moveend");if(a.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new k1,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),a.noMoveStart||this.fire("movestart"),a.animate!==!1){l1(this._mapPane,"leaflet-pan-anim");var M=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,M,a.duration||.25,a.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,a,M){if(M=M||{},M.animate===!1||!M1.any3d)return this.setView(o,a,M);this._stop();var p=this.project(this.getCenter()),h=this.project(o),g=this.getSize(),O=this._zoom;o=n1(o),a=a===void 0?O:a;var E=Math.max(g.x,g.y),R=E*this.getZoomScale(O,a),U=h.distanceTo(p)||1,e1=1.42,v1=e1*e1;function T1(d2){var Z9=d2?-1:1,XV=d2?R:E,JV=R*R-E*E+Z9*v1*v1*U*U,ta=2*XV*v1*U,y8=JV/ta,tr=Math.sqrt(y8*y8+1)-y8,ea=tr<1e-9?-18:Math.log(tr);return ea}function $2(d2){return(Math.exp(d2)-Math.exp(-d2))/2}function f2(d2){return(Math.exp(d2)+Math.exp(-d2))/2}function M5(d2){return $2(d2)/f2(d2)}var q2=T1(0);function X3(d2){return E*(f2(q2)/f2(q2+e1*d2))}function qV(d2){return E*(f2(q2)*M5(q2+e1*d2)-$2(q2))/v1}function YV(d2){return 1-Math.pow(1-d2,1.5)}var QV=Date.now(),Xe=(T1(1)-q2)/e1,KV=M.duration?1e3*M.duration:1e3*Xe*.8;function Je(){var d2=(Date.now()-QV)/KV,Z9=YV(d2)*Xe;d2<=1?(this._flyToFrame=o1(Je,this),this._move(this.unproject(p.add(h.subtract(p).multiplyBy(qV(Z9)/U)),O),this.getScaleZoom(E/X3(Z9),O),{flyTo:!0})):this._move(o,a)._moveEnd(!0)}return this._moveStart(!0,M.noMoveStart),Je.call(this),this},flyToBounds:function(o,a){var M=this._getBoundsCenterZoom(o,a);return this.flyTo(M.center,M.zoom,a)},setMaxBounds:function(o){return o=p1(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var a=this.options.minZoom;return this.options.minZoom=o,this._loaded&&a!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var a=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&a!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,a){this._enforcingBounds=!0;var M=this.getCenter(),p=this._limitCenter(M,this._zoom,p1(o));return M.equals(p)||this.panTo(p,a),this._enforcingBounds=!1,this},panInside:function(o,a){a=a||{};var M=H1(a.paddingTopLeft||a.padding||[0,0]),p=H1(a.paddingBottomRight||a.padding||[0,0]),h=this.project(this.getCenter()),g=this.project(o),O=this.getPixelBounds(),E=J([O.min.add(M),O.max.subtract(p)]),R=E.getSize();if(!E.contains(g)){this._enforcingBounds=!0;var U=g.subtract(E.getCenter()),e1=E.extend(g).getSize().subtract(R);h.x+=U.x<0?-e1.x:e1.x,h.y+=U.y<0?-e1.y:e1.y,this.panTo(this.unproject(h),a),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=e({animate:!1,pan:!0},o===!0?{animate:!0}:o);var a=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var M=this.getSize(),p=a.divideBy(2).round(),h=M.divideBy(2).round(),g=p.subtract(h);return!g.x&&!g.y?this:(o.animate&&o.pan?this.panBy(g):(o.pan&&this._rawPanBy(g),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:a,newSize:M}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=e({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var a=i(this._handleGeolocationResponse,this),M=i(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(a,M,o):navigator.geolocation.getCurrentPosition(a,M,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var a=o.code,M=o.message||(a===1?"permission denied":a===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:a,message:"Geolocation error: "+M+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var a=o.coords.latitude,M=o.coords.longitude,p=new a1(a,M),h=p.toBounds(o.coords.accuracy*2),g=this._locateOptions;if(g.setView){var O=this.getBoundsZoom(h);this.setView(p,g.maxZoom?Math.min(O,g.maxZoom):O)}var E={latlng:p,bounds:h,timestamp:o.timestamp};for(var R in o.coords)typeof o.coords[R]=="number"&&(E[R]=o.coords[R]);this.fire("locationfound",E)}},addHandler:function(o,a){if(!a)return this;var M=this[o]=new a(this);return this._handlers.push(M),this.options[o]&&M.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),P1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(h1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)P1(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,a){var M="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),p=u1("div",M,a||this._mapPane);return o&&(this._panes[o]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),a=this.unproject(o.getBottomLeft()),M=this.unproject(o.getTopRight());return new V1(a,M)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,a,M){o=p1(o),M=H1(M||[0,0]);var p=this.getZoom()||0,h=this.getMinZoom(),g=this.getMaxZoom(),O=o.getNorthWest(),E=o.getSouthEast(),R=this.getSize().subtract(M),U=J(this.project(E,p),this.project(O,p)).getSize(),e1=M1.any3d?this.options.zoomSnap:1,v1=R.x/U.x,T1=R.y/U.y,$2=a?Math.max(v1,T1):Math.min(v1,T1);return p=this.getScaleZoom($2,p),e1&&(p=Math.round(p/(e1/100))*(e1/100),p=a?Math.ceil(p/e1)*e1:Math.floor(p/e1)*e1),Math.max(h,Math.min(g,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new K(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,a){var M=this._getTopLeftPoint(o,a);return new W(M,M.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,a){var M=this.options.crs;return a=a===void 0?this._zoom:a,M.scale(o)/M.scale(a)},getScaleZoom:function(o,a){var M=this.options.crs;a=a===void 0?this._zoom:a;var p=M.zoom(o*M.scale(a));return isNaN(p)?1/0:p},project:function(o,a){return a=a===void 0?this._zoom:a,this.options.crs.latLngToPoint(n1(o),a)},unproject:function(o,a){return a=a===void 0?this._zoom:a,this.options.crs.pointToLatLng(H1(o),a)},layerPointToLatLng:function(o){var a=H1(o).add(this.getPixelOrigin());return this.unproject(a)},latLngToLayerPoint:function(o){var a=this.project(n1(o))._round();return a._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(n1(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(p1(o))},distance:function(o,a){return this.options.crs.distance(n1(o),n1(a))},containerPointToLayerPoint:function(o){return H1(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return H1(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var a=this.containerPointToLayerPoint(H1(o));return this.layerPointToLatLng(a)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(n1(o)))},mouseEventToContainerPoint:function(o){return p3(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var a=this._container=U1(o);if(a){if(a._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A1(a,"scroll",this._onScroll,this),this._containerId=V(a)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&M1.any3d,l1(o,"leaflet-container"+(M1.touch?" leaflet-touch":"")+(M1.retina?" leaflet-retina":"")+(M1.ielt9?" leaflet-oldie":"")+(M1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var a=z1(o,"position");a!=="absolute"&&a!=="relative"&&a!=="fixed"&&a!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Q1(this._mapPane,new K(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(l1(o.markerPane,"leaflet-zoom-hide"),l1(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,a,M){Q1(this._mapPane,new K(0,0));var p=!this._loaded;this._loaded=!0,a=this._limitZoom(a),this.fire("viewprereset");var h=this._zoom!==a;this._moveStart(h,M)._move(o,a)._moveEnd(h),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(o,a){return o&&this.fire("zoomstart"),a||this.fire("movestart"),this},_move:function(o,a,M,p){a===void 0&&(a=this._zoom);var h=this._zoom!==a;return this._zoom=a,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),p?M&&M.pinch&&this.fire("zoom",M):((h||M&&M.pinch)&&this.fire("zoom",M),this.fire("move",M)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return h1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){Q1(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[V(this._container)]=this;var a=o?x1:A1;a(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&a(window,"resize",this._onResize,this),M1.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){h1(this._resizeRequest),this._resizeRequest=o1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,a){for(var M=[],p,h=a==="mouseout"||a==="mouseover",g=o.target||o.srcElement,O=!1;g;){if(p=this._targets[V(g)],p&&(a==="click"||a==="preclick")&&this._draggableMoved(p)){O=!0;break}if(p&&p.listens(a,!0)&&(h&&!G(g,o)||(M.push(p),h))||g===this._container)break;g=g.parentNode}return!M.length&&!O&&!h&&this.listens(a,!0)&&(M=[this]),M},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var a=o.target||o.srcElement;if(!(!this._loaded||a._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(a))){var M=o.type;M==="mousedown"&&D5(a),this._fireDOMEvent(o,M)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,a,M){if(o.type==="click"){var p=e({},o);p.type="preclick",this._fireDOMEvent(p,p.type,M)}var h=this._findEventTargets(o,a);if(M){for(var g=[],O=0;O<M.length;O++)M[O].listens(a,!0)&&g.push(M[O]);h=g.concat(h)}if(h.length){a==="contextmenu"&&i2(o);var E=h[0],R={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var U=E.getLatLng&&(!E._radius||E._radius<=10);R.containerPoint=U?this.latLngToContainerPoint(E.getLatLng()):this.mouseEventToContainerPoint(o),R.layerPoint=this.containerPointToLayerPoint(R.containerPoint),R.latlng=U?E.getLatLng():this.layerPointToLatLng(R.layerPoint)}for(O=0;O<h.length;O++)if(h[O].fire(a,R,!0),R.originalEvent._stopped||h[O].options.bubblingMouseEvents===!1&&$(this._mouseEvents,a)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,a=this._handlers.length;o<a;o++)this._handlers[o].disable()},whenReady:function(o,a){return this._loaded?o.call(a||this,{target:this}):this.on("load",o,a),this},_getMapPanePos:function(){return G2(this._mapPane)||new K(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,a){var M=o&&a!==void 0?this._getNewPixelOrigin(o,a):this.getPixelOrigin();return M.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,a){var M=this.getSize()._divideBy(2);return this.project(o,a)._subtract(M)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,a,M){var p=this._getNewPixelOrigin(M,a);return this.project(o,a)._subtract(p)},_latLngBoundsToNewLayerBounds:function(o,a,M){var p=this._getNewPixelOrigin(M,a);return J([this.project(o.getSouthWest(),a)._subtract(p),this.project(o.getNorthWest(),a)._subtract(p),this.project(o.getSouthEast(),a)._subtract(p),this.project(o.getNorthEast(),a)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,a,M){if(!M)return o;var p=this.project(o,a),h=this.getSize().divideBy(2),g=new W(p.subtract(h),p.add(h)),O=this._getBoundsOffset(g,M,a);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?o:this.unproject(p.add(O),a)},_limitOffset:function(o,a){if(!a)return o;var M=this.getPixelBounds(),p=new W(M.min.add(o),M.max.add(o));return o.add(this._getBoundsOffset(p,a))},_getBoundsOffset:function(o,a,M){var p=J(this.project(a.getNorthEast(),M),this.project(a.getSouthWest(),M)),h=p.min.subtract(o.min),g=p.max.subtract(o.max),O=this._rebound(h.x,-g.x),E=this._rebound(h.y,-g.y);return new K(O,E)},_rebound:function(o,a){return o+a>0?Math.round(o-a)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(a))},_limitZoom:function(o){var a=this.getMinZoom(),M=this.getMaxZoom(),p=M1.any3d?this.options.zoomSnap:1;return p&&(o=Math.round(o/p)*p),Math.max(a,Math.min(M,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){E1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,a){var M=this._getCenterOffset(o)._trunc();return(a&&a.animate)!==!0&&!this.getSize().contains(M)?!1:(this.panBy(M,a),!0)},_createAnimProxy:function(){var o=this._proxy=u1("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(a){var M=S1,p=this._proxy.style[M];e5(this._proxy,this.project(a.center,a.zoom),this.getZoomScale(a.zoom,1)),p===this._proxy.style[M]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){P1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),a=this.getZoom();e5(this._proxy,this.project(o,a),this.getZoomScale(a,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,a,M){if(this._animatingZoom)return!0;if(M=M||{},!this._zoomAnimated||M.animate===!1||this._nothingToAnimate()||Math.abs(a-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(a),h=this._getCenterOffset(o)._divideBy(1-1/p);return M.animate!==!0&&!this.getSize().contains(h)?!1:(o1(function(){this._moveStart(!0,M.noMoveStart||!1)._animateZoom(o,a,!0)},this),!0)},_animateZoom:function(o,a,M,p){this._mapPane&&(M&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=a,l1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:a,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&E1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function b2(o,a){return new i1(o,a)}var o2=b1.extend({options:{position:"topright"},initialize:function(o){_(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var a=this._map;return a&&a.removeControl(this),this.options.position=o,a&&a.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var a=this._container=this.onAdd(o),M=this.getPosition(),p=o._controlCorners[M];return l1(a,"leaflet-control"),M.indexOf("bottom")!==-1?p.insertBefore(a,p.firstChild):p.appendChild(a),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(P1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),R2=function(o){return new o2(o)};i1.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},a="leaflet-",M=this._controlContainer=u1("div",a+"control-container",this._container);function p(h,g){var O=a+h+" "+a+g;o[h+g]=u1("div",O,M)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)P1(this._controlCorners[o]);P1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var y0=o2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,a,M,p){return M<p?-1:p<M?1:0}},initialize:function(o,a,M){_(this,M),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in o)this._addLayer(o[p],p);for(p in a)this._addLayer(a[p],p,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return o2.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,a){return this._addLayer(o,a),this._map?this._update():this},addOverlay:function(o,a){return this._addLayer(o,a,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var a=this._getLayer(V(o));return a&&this._layers.splice(this._layers.indexOf(a),1),this._map?this._update():this},expand:function(){l1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(l1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):E1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return E1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",a=this._container=u1("div",o),M=this.options.collapsed;a.setAttribute("aria-haspopup",!0),A2(a),B1(a);var p=this._section=u1("section",o+"-list");M&&(this._map.on("click",this.collapse,this),A1(a,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var h=this._layersLink=u1("a",o+"-toggle",a);h.href="#",h.title="Layers",h.setAttribute("role","button"),A1(h,{keydown:function(g){g.keyCode===13&&this._expandSafely()},click:function(g){i2(g),this._expandSafely()}},this),M||this.expand(),this._baseLayersList=u1("div",o+"-base",p),this._separator=u1("div",o+"-separator",p),this._overlaysList=u1("div",o+"-overlays",p),a.appendChild(p)},_getLayer:function(o){for(var a=0;a<this._layers.length;a++)if(this._layers[a]&&V(this._layers[a].layer)===o)return this._layers[a]},_addLayer:function(o,a,M){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:a,overlay:M}),this.options.sortLayers&&this._layers.sort(i(function(p,h){return this.options.sortFunction(p.layer,h.layer,p.name,h.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;h5(this._baseLayersList),h5(this._overlaysList),this._layerControlInputs=[];var o,a,M,p,h=0;for(M=0;M<this._layers.length;M++)p=this._layers[M],this._addItem(p),a=a||p.overlay,o=o||!p.overlay,h+=p.overlay?0:1;return this.options.hideSingleBase&&(o=o&&h>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=a&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var a=this._getLayer(V(o.target)),M=a.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;M&&this._map.fire(M,a)},_createRadioElement:function(o,a){var M='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(a?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=M,p.firstChild},_addItem:function(o){var a=document.createElement("label"),M=this._map.hasLayer(o.layer),p;o.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=M):p=this._createRadioElement("leaflet-base-layers_"+V(this),M),this._layerControlInputs.push(p),p.layerId=V(o.layer),A1(p,"click",this._onInputClick,this);var h=document.createElement("span");h.innerHTML=" "+o.name;var g=document.createElement("span");a.appendChild(g),g.appendChild(p),g.appendChild(h);var O=o.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(a),this._checkDisabledLayers(),a},_onInputClick:function(){if(!this._preventClick){var o=this._layerControlInputs,a,M,p=[],h=[];this._handlingClick=!0;for(var g=o.length-1;g>=0;g--)a=o[g],M=this._getLayer(a.layerId).layer,a.checked?p.push(M):a.checked||h.push(M);for(g=0;g<h.length;g++)this._map.hasLayer(h[g])&&this._map.removeLayer(h[g]);for(g=0;g<p.length;g++)this._map.hasLayer(p[g])||this._map.addLayer(p[g]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,a,M,p=this._map.getZoom(),h=o.length-1;h>=0;h--)a=o[h],M=this._getLayer(a.layerId).layer,a.disabled=M.options.minZoom!==void 0&&p<M.options.minZoom||M.options.maxZoom!==void 0&&p>M.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;this._preventClick=!0,A1(o,"click",i2),this.expand();var a=this;setTimeout(function(){x1(o,"click",i2),a._preventClick=!1})}}),D7=function(o,a,M){return new y0(o,a,M)},D2=o2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var a="leaflet-control-zoom",M=u1("div",a+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,a+"-in",M,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,a+"-out",M,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),M},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,a,M,p,h){var g=u1("a",M,p);return g.innerHTML=o,g.href="#",g.title=a,g.setAttribute("role","button"),g.setAttribute("aria-label",a),A2(g),A1(g,"click",r5),A1(g,"click",h,this),A1(g,"click",this._refocusOnMap,this),g},_updateDisabled:function(){var o=this._map,a="leaflet-disabled";E1(this._zoomInButton,a),E1(this._zoomOutButton,a),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(l1(this._zoomOutButton,a),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(l1(this._zoomInButton,a),this._zoomInButton.setAttribute("aria-disabled","true"))}});i1.mergeOptions({zoomControl:!0}),i1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new D2,this.addControl(this.zoomControl))});var $7=function(o){return new D2(o)},d9=o2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var a="leaflet-control-scale",M=u1("div",a),p=this.options;return this._addScales(p,a+"-line",M),o.on(p.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),M},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,a,M){o.metric&&(this._mScale=u1("div",a,M)),o.imperial&&(this._iScale=u1("div",a,M))},_update:function(){var o=this._map,a=o.getSize().y/2,M=o.distance(o.containerPointToLatLng([0,a]),o.containerPointToLatLng([this.options.maxWidth,a]));this._updateScales(M)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var a=this._getRoundNum(o),M=a<1e3?a+" m":a/1e3+" km";this._updateScale(this._mScale,M,a/o)},_updateImperial:function(o){var a=o*3.2808399,M,p,h;a>5280?(M=a/5280,p=this._getRoundNum(M),this._updateScale(this._iScale,p+" mi",p/M)):(h=this._getRoundNum(a),this._updateScale(this._iScale,h+" ft",h/a))},_updateScale:function(o,a,M){o.style.width=Math.round(this.options.maxWidth*M)+"px",o.innerHTML=a},_getRoundNum:function(o){var a=Math.pow(10,(Math.floor(o)+"").length-1),M=o/a;return M=M>=10?10:M>=5?5:M>=3?3:M>=2?2:1,a*M}}),f8=function(o){return new d9(o)},I7='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',z7=o2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(M1.inlineSvg?I7+" ":"")+"Leaflet</a>"},initialize:function(o){_(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=u1("div","leaflet-control-attribution"),A2(this._container);for(var a in o._layers)o._layers[a].getAttribution&&this.addAttribution(o._layers[a].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var a in this._attributions)this._attributions[a]&&o.push(a);var M=[];this.options.prefix&&M.push(this.options.prefix),o.length&&M.push(o.join(", ")),this._container.innerHTML=M.join(' <span aria-hidden="true">|</span> ')}}});i1.mergeOptions({attributionControl:!0}),i1.addInitHook(function(){this.options.attributionControl&&new z7().addTo(this)});var pV=function(o){return new z7(o)};o2.Layers=y0,o2.Zoom=D2,o2.Scale=d9,o2.Attribution=z7,R2.layers=D7,R2.zoom=$7,R2.scale=f8,R2.attribution=pV;var z5=b1.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});z5.addTo=function(o,a){return o.addHandler(a,this),this};var uV={Events:j1},xe=M1.touch?"touchstart mousedown":"mousedown",O0=y1.extend({options:{clickTolerance:3},initialize:function(o,a,M,p){_(this,p),this._element=o,this._dragStartTarget=a||o,this._preventOutline=M},enable:function(){this._enabled||(A1(this._dragStartTarget,xe,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(O0._dragging===this&&this.finishDrag(!0),x1(this._dragStartTarget,xe,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!a5(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){O0._dragging===this&&this.finishDrag();return}if(!(O0._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(O0._dragging=this,this._preventOutline&&D5(this._element),s3(),r0(),!this._moving)){this.fire("down");var a=o.touches?o.touches[0]:o,M=v5(this._element);this._startPoint=new K(a.clientX,a.clientY),this._startPos=G2(this._element),this._parentScale=I5(M);var p=o.type==="mousedown";A1(document,p?"mousemove":"touchmove",this._onMove,this),A1(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var a=o.touches&&o.touches.length===1?o.touches[0]:o,M=new K(a.clientX,a.clientY)._subtract(this._startPoint);!M.x&&!M.y||Math.abs(M.x)+Math.abs(M.y)<this.options.clickTolerance||(M.x/=this._parentScale.x,M.y/=this._parentScale.y,i2(o),this._moved||(this.fire("dragstart"),this._moved=!0,l1(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),l1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(M),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),Q1(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){E1(document.body,"leaflet-dragging"),this._lastTarget&&(E1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),x1(document,"mousemove touchmove",this._onMove,this),x1(document,"mouseup touchend touchcancel",this._onUp,this),M3(),c2();var a=this._moved&&this._moving;this._moving=!1,O0._dragging=!1,a&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)})}});function ge(o,a,M){var p,h=[1,4,2,8],g,O,E,R,U,e1,v1,T1;for(g=0,e1=o.length;g<e1;g++)o[g]._code=u3(o[g],a);for(E=0;E<4;E++){for(v1=h[E],p=[],g=0,e1=o.length,O=e1-1;g<e1;O=g++)R=o[g],U=o[O],R._code&v1?U._code&v1||(T1=p9(U,R,v1,a,M),T1._code=u3(T1,a),p.push(T1)):(U._code&v1&&(T1=p9(U,R,v1,a,M),T1._code=u3(T1,a),p.push(T1)),p.push(R));o=p}return o}function _e(o,a){var M,p,h,g,O,E,R,U,e1;if(!o||o.length===0)throw new Error("latlngs not passed");s5(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var v1=n1([0,0]),T1=p1(o),$2=T1.getNorthWest().distanceTo(T1.getSouthWest())*T1.getNorthEast().distanceTo(T1.getNorthWest());$2<1700&&(v1=v8(o));var f2=o.length,M5=[];for(M=0;M<f2;M++){var q2=n1(o[M]);M5.push(a.project(n1([q2.lat-v1.lat,q2.lng-v1.lng])))}for(E=R=U=0,M=0,p=f2-1;M<f2;p=M++)h=M5[M],g=M5[p],O=h.y*g.x-g.y*h.x,R+=(h.x+g.x)*O,U+=(h.y+g.y)*O,E+=O*3;E===0?e1=M5[0]:e1=[R/E,U/E];var X3=a.unproject(H1(e1));return n1([X3.lat+v1.lat,X3.lng+v1.lng])}function v8(o){for(var a=0,M=0,p=0,h=0;h<o.length;h++){var g=n1(o[h]);a+=g.lat,M+=g.lng,p++}return n1([a/p,M/p])}var mV={__proto__:null,clipPolygon:ge,polygonCenter:_e,centroid:v8};function Se(o,a){if(!a||!o.length)return o.slice();var M=a*a;return o=fV(o,M),o=AV(o,M),o}function Ze(o,a,M){return Math.sqrt(N7(o,a,M,!0))}function hV(o,a,M){return N7(o,a,M)}function AV(o,a){var M=o.length,p=typeof Uint8Array<"u"?Uint8Array:Array,h=new p(M);h[0]=h[M-1]=1,x8(o,h,a,0,M-1);var g,O=[];for(g=0;g<M;g++)h[g]&&O.push(o[g]);return O}function x8(o,a,M,p,h){var g=0,O,E,R;for(E=p+1;E<=h-1;E++)R=N7(o[E],o[p],o[h],!0),R>g&&(O=E,g=R);g>M&&(a[O]=1,x8(o,a,M,p,O),x8(o,a,M,O,h))}function fV(o,a){for(var M=[o[0]],p=1,h=0,g=o.length;p<g;p++)vV(o[p],o[h])>a&&(M.push(o[p]),h=p);return h<g-1&&M.push(o[g-1]),M}var we;function be(o,a,M,p,h){var g=p?we:u3(o,M),O=u3(a,M),E,R,U;for(we=O;;){if(!(g|O))return[o,a];if(g&O)return!1;E=g||O,R=p9(o,a,E,M,h),U=u3(R,M),E===g?(o=R,g=U):(a=R,O=U)}}function p9(o,a,M,p,h){var g=a.x-o.x,O=a.y-o.y,E=p.min,R=p.max,U,e1;return M&8?(U=o.x+g*(R.y-o.y)/O,e1=R.y):M&4?(U=o.x+g*(E.y-o.y)/O,e1=E.y):M&2?(U=R.x,e1=o.y+O*(R.x-o.x)/g):M&1&&(U=E.x,e1=o.y+O*(E.x-o.x)/g),new K(U,e1,h)}function u3(o,a){var M=0;return o.x<a.min.x?M|=1:o.x>a.max.x&&(M|=2),o.y<a.min.y?M|=4:o.y>a.max.y&&(M|=8),M}function vV(o,a){var M=a.x-o.x,p=a.y-o.y;return M*M+p*p}function N7(o,a,M,p){var h=a.x,g=a.y,O=M.x-h,E=M.y-g,R=O*O+E*E,U;return R>0&&(U=((o.x-h)*O+(o.y-g)*E)/R,U>1?(h=M.x,g=M.y):U>0&&(h+=O*U,g+=E*U)),O=o.x-h,E=o.y-g,p?O*O+E*E:new K(h,g)}function s5(o){return!P(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function ye(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),s5(o)}function Oe(o,a){var M,p,h,g,O,E,R,U;if(!o||o.length===0)throw new Error("latlngs not passed");s5(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var e1=n1([0,0]),v1=p1(o),T1=v1.getNorthWest().distanceTo(v1.getSouthWest())*v1.getNorthEast().distanceTo(v1.getNorthWest());T1<1700&&(e1=v8(o));var $2=o.length,f2=[];for(M=0;M<$2;M++){var M5=n1(o[M]);f2.push(a.project(n1([M5.lat-e1.lat,M5.lng-e1.lng])))}for(M=0,p=0;M<$2-1;M++)p+=f2[M].distanceTo(f2[M+1])/2;if(p===0)U=f2[0];else for(M=0,g=0;M<$2-1;M++)if(O=f2[M],E=f2[M+1],h=O.distanceTo(E),g+=h,g>p){R=(g-p)/h,U=[E.x-R*(E.x-O.x),E.y-R*(E.y-O.y)];break}var q2=a.unproject(H1(U));return n1([q2.lat+e1.lat,q2.lng+e1.lng])}var xV={__proto__:null,simplify:Se,pointToSegmentDistance:Ze,closestPointOnSegment:hV,clipSegment:be,_getEdgeIntersection:p9,_getBitCode:u3,_sqClosestPointOnSegment:N7,isFlat:s5,_flat:ye,polylineCenter:Oe},g8={project:function(o){return new K(o.lng,o.lat)},unproject:function(o){return new a1(o.y,o.x)},bounds:new W([-180,-90],[180,90])},_8={R:6378137,R_MINOR:6356752314245179e-9,bounds:new W([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var a=Math.PI/180,M=this.R,p=o.lat*a,h=this.R_MINOR/M,g=Math.sqrt(1-h*h),O=g*Math.sin(p),E=Math.tan(Math.PI/4-p/2)/Math.pow((1-O)/(1+O),g/2);return p=-M*Math.log(Math.max(E,1e-10)),new K(o.lng*a*M,p)},unproject:function(o){for(var a=180/Math.PI,M=this.R,p=this.R_MINOR/M,h=Math.sqrt(1-p*p),g=Math.exp(-o.y/M),O=Math.PI/2-2*Math.atan(g),E=0,R=.1,U;E<15&&Math.abs(R)>1e-7;E++)U=h*Math.sin(O),U=Math.pow((1-U)/(1+U),h/2),R=Math.PI/2-2*Math.atan(g*U)-O,O+=R;return new a1(O*a,o.x*a/M)}},gV={__proto__:null,LonLat:g8,Mercator:_8,SphericalMercator:p2},_V=e({},O1,{code:"EPSG:3395",projection:_8,transformation:(function(){var o=.5/(Math.PI*_8.R);return L2(o,.5,-o,.5)})()}),ke=e({},O1,{code:"EPSG:4326",projection:g8,transformation:L2(1/180,1,-1/180,.5)}),SV=e({},_1,{projection:g8,transformation:L2(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,a){var M=a.lng-o.lng,p=a.lat-o.lat;return Math.sqrt(M*M+p*p)},infinite:!0});_1.Earth=O1,_1.EPSG3395=_V,_1.EPSG3857=s1,_1.EPSG900913=U2,_1.EPSG4326=ke,_1.Simple=SV;var g5=y1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[V(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[V(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var a=o.target;if(a.hasLayer(this)){if(this._map=a,this._zoomAnimated=a._zoomAnimated,this.getEvents){var M=this.getEvents();a.on(M,this),this.once("remove",function(){a.off(M,this)},this)}this.onAdd(a),this.fire("add"),a.fire("layeradd",{layer:this})}}});i1.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var a=V(o);return this._layers[a]?this:(this._layers[a]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var a=V(o);return this._layers[a]?(this._loaded&&o.onRemove(this),delete this._layers[a],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return V(o)in this._layers},eachLayer:function(o,a){for(var M in this._layers)o.call(a,this._layers[M]);return this},_addLayers:function(o){o=o?P(o)?o:[o]:[];for(var a=0,M=o.length;a<M;a++)this.addLayer(o[a])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[V(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var a=V(o);this._zoomBoundLayers[a]&&(delete this._zoomBoundLayers[a],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,a=-1/0,M=this._getZoomSpan();for(var p in this._zoomBoundLayers){var h=this._zoomBoundLayers[p].options;o=h.minZoom===void 0?o:Math.min(o,h.minZoom),a=h.maxZoom===void 0?a:Math.max(a,h.maxZoom)}this._layersMaxZoom=a===-1/0?void 0:a,this._layersMinZoom=o===1/0?void 0:o,M!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var G3=g5.extend({initialize:function(o,a){_(this,a),this._layers={};var M,p;if(o)for(M=0,p=o.length;M<p;M++)this.addLayer(o[M])},addLayer:function(o){var a=this.getLayerId(o);return this._layers[a]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var a=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[a]&&this._map.removeLayer(this._layers[a]),delete this._layers[a],this},hasLayer:function(o){var a=typeof o=="number"?o:this.getLayerId(o);return a in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var a=Array.prototype.slice.call(arguments,1),M,p;for(M in this._layers)p=this._layers[M],p[o]&&p[o].apply(p,a);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,a){for(var M in this._layers)o.call(a,this._layers[M]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return V(o)}}),ZV=function(o,a){return new G3(o,a)},o0=G3.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),G3.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),G3.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new V1;for(var a in this._layers){var M=this._layers[a];o.extend(M.getBounds?M.getBounds():M.getLatLng())}return o}}),wV=function(o,a){return new o0(o,a)},q3=b1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){_(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,a){var M=this._getIconUrl(o);if(!M){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(M,a&&a.tagName==="IMG"?a:null);return this._setIconStyles(p,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(o,a){var M=this.options,p=M[a+"Size"];typeof p=="number"&&(p=[p,p]);var h=H1(p),g=H1(a==="shadow"&&M.shadowAnchor||M.iconAnchor||h&&h.divideBy(2,!0));o.className="leaflet-marker-"+a+" "+(M.className||""),g&&(o.style.marginLeft=-g.x+"px",o.style.marginTop=-g.y+"px"),h&&(o.style.width=h.x+"px",o.style.height=h.y+"px")},_createImg:function(o,a){return a=a||document.createElement("img"),a.src=o,a},_getIconUrl:function(o){return M1.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function bV(o){return new q3(o)}var W7=q3.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof W7.imagePath!="string"&&(W7.imagePath=this._detectIconPath()),(this.options.imagePath||W7.imagePath)+q3.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var a=function(M,p,h){var g=p.exec(M);return g&&g[h]};return o=a(o,/^url\((['"])?(.+)\1\)$/,2),o&&a(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=u1("div","leaflet-default-icon-path",document.body),a=z1(o,"background-image")||z1(o,"backgroundImage");if(document.body.removeChild(o),a=this._stripUrl(a),a)return a;var M=document.querySelector('link[href$="leaflet.css"]');return M?M.href.substring(0,M.href.length-11-1):""}}),Te=z5.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new O0(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),l1(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&E1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var a=this._marker,M=a._map,p=this._marker.options.autoPanSpeed,h=this._marker.options.autoPanPadding,g=G2(a._icon),O=M.getPixelBounds(),E=M.getPixelOrigin(),R=J(O.min._subtract(E).add(h),O.max._subtract(E).subtract(h));if(!R.contains(g)){var U=H1((Math.max(R.max.x,g.x)-R.max.x)/(O.max.x-R.max.x)-(Math.min(R.min.x,g.x)-R.min.x)/(O.min.x-R.min.x),(Math.max(R.max.y,g.y)-R.max.y)/(O.max.y-R.max.y)-(Math.min(R.min.y,g.y)-R.min.y)/(O.min.y-R.min.y)).multiplyBy(p);M.panBy(U,{animate:!1}),this._draggable._newPos._add(U),this._draggable._startPos._add(U),Q1(a._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=o1(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(h1(this._panRequest),this._panRequest=o1(this._adjustPan.bind(this,o)))},_onDrag:function(o){var a=this._marker,M=a._shadow,p=G2(a._icon),h=a._map.layerPointToLatLng(p);M&&Q1(M,p),a._latlng=h,o.latlng=h,o.oldLatLng=this._oldLatLng,a.fire("move",o).fire("drag",o)},_onDragEnd:function(o){h1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),u9=g5.extend({options:{icon:new W7,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,a){_(this,a),this._latlng=n1(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var a=this._latlng;return this._latlng=n1(o),this.update(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,a="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),M=o.icon.createIcon(this._icon),p=!1;M!==this._icon&&(this._icon&&this._removeIcon(),p=!0,o.title&&(M.title=o.title),M.tagName==="IMG"&&(M.alt=o.alt||"")),l1(M,a),o.keyboard&&(M.tabIndex="0",M.setAttribute("role","button")),this._icon=M,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A1(M,"focus",this._panOnFocus,this);var h=o.icon.createShadow(this._shadow),g=!1;h!==this._shadow&&(this._removeShadow(),g=!0),h&&(l1(h,a),h.alt=""),this._shadow=h,o.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),h&&g&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&x1(this._icon,"focus",this._panOnFocus,this),P1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&P1(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&Q1(this._icon,o),this._shadow&&Q1(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var a=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(a)},_initInteraction:function(){if(this.options.interactive&&(l1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Te)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Te(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&t2(this._icon,o),this._shadow&&t2(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var a=this.options.icon.options,M=a.iconSize?H1(a.iconSize):H1(0,0),p=a.iconAnchor?H1(a.iconAnchor):H1(0,0);o.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:M.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function yV(o,a){return new u9(o,a)}var k0=g5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return _(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),m9=k0.extend({options:{fill:!0,radius:10},initialize:function(o,a){_(this,a),this._latlng=n1(o),this._radius=this.options.radius},setLatLng:function(o){var a=this._latlng;return this._latlng=n1(o),this.redraw(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var a=o&&o.radius||this._radius;return k0.prototype.setStyle.call(this,o),this.setRadius(a),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,a=this._radiusY||o,M=this._clickTolerance(),p=[o+M,a+M];this._pxBounds=new W(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function OV(o,a){return new m9(o,a)}var S8=m9.extend({initialize:function(o,a,M){if(typeof a=="number"&&(a=e({},M,{radius:a})),_(this,a),this._latlng=n1(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new V1(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:k0.prototype.setStyle,_project:function(){var o=this._latlng.lng,a=this._latlng.lat,M=this._map,p=M.options.crs;if(p.distance===O1.distance){var h=Math.PI/180,g=this._mRadius/O1.R/h,O=M.project([a+g,o]),E=M.project([a-g,o]),R=O.add(E).divideBy(2),U=M.unproject(R).lat,e1=Math.acos((Math.cos(g*h)-Math.sin(a*h)*Math.sin(U*h))/(Math.cos(a*h)*Math.cos(U*h)))/h;(isNaN(e1)||e1===0)&&(e1=g/Math.cos(Math.PI/180*a)),this._point=R.subtract(M.getPixelOrigin()),this._radius=isNaN(e1)?0:R.x-M.project([U,o-e1]).x,this._radiusY=R.y-O.y}else{var v1=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=M.latLngToLayerPoint(this._latlng),this._radius=this._point.x-M.latLngToLayerPoint(v1).x}this._updateBounds()}});function kV(o,a,M){return new S8(o,a,M)}var H0=k0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,a){_(this,a),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var a=1/0,M=null,p=N7,h,g,O=0,E=this._parts.length;O<E;O++)for(var R=this._parts[O],U=1,e1=R.length;U<e1;U++){h=R[U-1],g=R[U];var v1=p(o,h,g,!0);v1<a&&(a=v1,M=p(o,h,g))}return M&&(M.distance=Math.sqrt(a)),M},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Oe(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,a){return a=a||this._defaultShape(),o=n1(o),a.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new V1,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return s5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var a=[],M=s5(o),p=0,h=o.length;p<h;p++)M?(a[p]=n1(o[p]),this._bounds.extend(a[p])):a[p]=this._convertLatLngs(o[p]);return a},_project:function(){var o=new W;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),a=new K(o,o);this._rawPxBounds&&(this._pxBounds=new W([this._rawPxBounds.min.subtract(a),this._rawPxBounds.max.add(a)]))},_projectLatlngs:function(o,a,M){var p=o[0]instanceof a1,h=o.length,g,O;if(p){for(O=[],g=0;g<h;g++)O[g]=this._map.latLngToLayerPoint(o[g]),M.extend(O[g]);a.push(O)}else for(g=0;g<h;g++)this._projectLatlngs(o[g],a,M)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var a=this._parts,M,p,h,g,O,E,R;for(M=0,h=0,g=this._rings.length;M<g;M++)for(R=this._rings[M],p=0,O=R.length;p<O-1;p++)E=be(R[p],R[p+1],o,p,!0),E&&(a[h]=a[h]||[],a[h].push(E[0]),(E[1]!==R[p+1]||p===O-2)&&(a[h].push(E[1]),h++))}},_simplifyPoints:function(){for(var o=this._parts,a=this.options.smoothFactor,M=0,p=o.length;M<p;M++)o[M]=Se(o[M],a)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,a){var M,p,h,g,O,E,R=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(M=0,g=this._parts.length;M<g;M++)for(E=this._parts[M],p=0,O=E.length,h=O-1;p<O;h=p++)if(!(!a&&p===0)&&Ze(o,E[h],E[p])<=R)return!0;return!1}});function TV(o,a){return new H0(o,a)}H0._flat=ye;var Y3=H0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return _e(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var a=H0.prototype._convertLatLngs.call(this,o),M=a.length;return M>=2&&a[0]instanceof a1&&a[0].equals(a[M-1])&&a.pop(),a},_setLatLngs:function(o){H0.prototype._setLatLngs.call(this,o),s5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return s5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,a=this.options.weight,M=new K(a,a);if(o=new W(o.min.subtract(M),o.max.add(M)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,h=this._rings.length,g;p<h;p++)g=ge(this._rings[p],o,!0),g.length&&this._parts.push(g)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var a=!1,M,p,h,g,O,E,R,U;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(g=0,R=this._parts.length;g<R;g++)for(M=this._parts[g],O=0,U=M.length,E=U-1;O<U;E=O++)p=M[O],h=M[E],p.y>o.y!=h.y>o.y&&o.x<(h.x-p.x)*(o.y-p.y)/(h.y-p.y)+p.x&&(a=!a);return a||H0.prototype._containsPoint.call(this,o,!0)}});function PV(o,a){return new Y3(o,a)}var V0=o0.extend({initialize:function(o,a){_(this,a),this._layers={},o&&this.addData(o)},addData:function(o){var a=P(o)?o:o.features,M,p,h;if(a){for(M=0,p=a.length;M<p;M++)h=a[M],(h.geometries||h.geometry||h.features||h.coordinates)&&this.addData(h);return this}var g=this.options;if(g.filter&&!g.filter(o))return this;var O=h9(o,g);return O?(O.feature=v9(o),O.defaultOptions=O.options,this.resetStyle(O),g.onEachFeature&&g.onEachFeature(o,O),this.addLayer(O)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=e({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(a){this._setLayerStyle(a,o)},this)},_setLayerStyle:function(o,a){o.setStyle&&(typeof a=="function"&&(a=a(o.feature)),o.setStyle(a))}});function h9(o,a){var M=o.type==="Feature"?o.geometry:o,p=M?M.coordinates:null,h=[],g=a&&a.pointToLayer,O=a&&a.coordsToLatLng||Z8,E,R,U,e1;if(!p&&!M)return null;switch(M.type){case"Point":return E=O(p),Pe(g,o,E,a);case"MultiPoint":for(U=0,e1=p.length;U<e1;U++)E=O(p[U]),h.push(Pe(g,o,E,a));return new o0(h);case"LineString":case"MultiLineString":return R=A9(p,M.type==="LineString"?0:1,O),new H0(R,a);case"Polygon":case"MultiPolygon":return R=A9(p,M.type==="Polygon"?1:2,O),new Y3(R,a);case"GeometryCollection":for(U=0,e1=M.geometries.length;U<e1;U++){var v1=h9({geometry:M.geometries[U],type:"Feature",properties:o.properties},a);v1&&h.push(v1)}return new o0(h);case"FeatureCollection":for(U=0,e1=M.features.length;U<e1;U++){var T1=h9(M.features[U],a);T1&&h.push(T1)}return new o0(h);default:throw new Error("Invalid GeoJSON object.")}}function Pe(o,a,M,p){return o?o(a,M):new u9(M,p&&p.markersInheritOptions&&p)}function Z8(o){return new a1(o[1],o[0],o[2])}function A9(o,a,M){for(var p=[],h=0,g=o.length,O;h<g;h++)O=a?A9(o[h],a-1,M):(M||Z8)(o[h]),p.push(O);return p}function w8(o,a){return o=n1(o),o.alt!==void 0?[u(o.lng,a),u(o.lat,a),u(o.alt,a)]:[u(o.lng,a),u(o.lat,a)]}function f9(o,a,M,p){for(var h=[],g=0,O=o.length;g<O;g++)h.push(a?f9(o[g],s5(o[g])?0:a-1,M,p):w8(o[g],p));return!a&&M&&h.length>0&&h.push(h[0].slice()),h}function Q3(o,a){return o.feature?e({},o.feature,{geometry:a}):v9(a)}function v9(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var b8={toGeoJSON:function(o){return Q3(this,{type:"Point",coordinates:w8(this.getLatLng(),o)})}};u9.include(b8),S8.include(b8),m9.include(b8),H0.include({toGeoJSON:function(o){var a=!s5(this._latlngs),M=f9(this._latlngs,a?1:0,!1,o);return Q3(this,{type:(a?"Multi":"")+"LineString",coordinates:M})}}),Y3.include({toGeoJSON:function(o){var a=!s5(this._latlngs),M=a&&!s5(this._latlngs[0]),p=f9(this._latlngs,M?2:a?1:0,!0,o);return a||(p=[p]),Q3(this,{type:(M?"Multi":"")+"Polygon",coordinates:p})}}),G3.include({toMultiPoint:function(o){var a=[];return this.eachLayer(function(M){a.push(M.toGeoJSON(o).geometry.coordinates)}),Q3(this,{type:"MultiPoint",coordinates:a})},toGeoJSON:function(o){var a=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(a==="MultiPoint")return this.toMultiPoint(o);var M=a==="GeometryCollection",p=[];return this.eachLayer(function(h){if(h.toGeoJSON){var g=h.toGeoJSON(o);if(M)p.push(g.geometry);else{var O=v9(g);O.type==="FeatureCollection"?p.push.apply(p,O.features):p.push(O)}}}),M?Q3(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Fe(o,a){return new V0(o,a)}var FV=Fe,x9=g5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,a,M){this._url=o,this._bounds=p1(a),_(this,M)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(l1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){P1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&B2(this._image),this},bringToBack:function(){return this._map&&A5(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=p1(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",a=this._image=o?this._url:u1("img");if(l1(a,"leaflet-image-layer"),this._zoomAnimated&&l1(a,"leaflet-zoom-animated"),this.options.className&&l1(a,this.options.className),a.onselectstart=c,a.onmousemove=c,a.onload=i(this.fire,this,"load"),a.onerror=i(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=a.src;return}a.src=this._url,a.alt=this.options.alt},_animateZoom:function(o){var a=this._map.getZoomScale(o.zoom),M=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;e5(this._image,M,a)},_reset:function(){var o=this._image,a=new W(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),M=a.getSize();Q1(o,a.min),o.style.width=M.x+"px",o.style.height=M.y+"px"},_updateOpacity:function(){t2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),EV=function(o,a,M){return new x9(o,a,M)},Ee=x9.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",a=this._image=o?this._url:u1("video");if(l1(a,"leaflet-image-layer"),this._zoomAnimated&&l1(a,"leaflet-zoom-animated"),this.options.className&&l1(a,this.options.className),a.onselectstart=c,a.onmousemove=c,a.onloadeddata=i(this.fire,this,"load"),o){for(var M=a.getElementsByTagName("source"),p=[],h=0;h<M.length;h++)p.push(M[h].src);this._url=M.length>0?p:[a.src];return}P(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(a.style,"objectFit")&&(a.style.objectFit="fill"),a.autoplay=!!this.options.autoplay,a.loop=!!this.options.loop,a.muted=!!this.options.muted,a.playsInline=!!this.options.playsInline;for(var g=0;g<this._url.length;g++){var O=u1("source");O.src=this._url[g],a.appendChild(O)}}});function BV(o,a,M){return new Ee(o,a,M)}var Be=x9.extend({_initImage:function(){var o=this._image=this._url;l1(o,"leaflet-image-layer"),this._zoomAnimated&&l1(o,"leaflet-zoom-animated"),this.options.className&&l1(o,this.options.className),o.onselectstart=c,o.onmousemove=c}});function RV(o,a,M){return new Be(o,a,M)}var N5=g5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,a){o&&(o instanceof a1||P(o))?(this._latlng=n1(o),_(this,a)):(_(this,o),this._source=a),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&t2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&t2(this._container,1),this.bringToFront(),this.options.interactive&&(l1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(t2(this._container,0),this._removeTimeout=setTimeout(i(P1,void 0,this._container),200)):P1(this._container),this.options.interactive&&(E1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=n1(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&B2(this._container),this},bringToBack:function(){return this._map&&A5(this._container),this},_prepareOpen:function(o){var a=this._source;if(!a._map)return!1;if(a instanceof o0){a=null;var M=this._source._layers;for(var p in M)if(M[p]._map){a=M[p];break}if(!a)return!1;this._source=a}if(!o)if(a.getCenter)o=a.getCenter();else if(a.getLatLng)o=a.getLatLng();else if(a.getBounds)o=a.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,a=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof a=="string")o.innerHTML=a;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(a)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),a=H1(this.options.offset),M=this._getAnchor();this._zoomAnimated?Q1(this._container,o.add(M)):a=a.add(o).add(M);var p=this._containerBottom=-a.y,h=this._containerLeft=-Math.round(this._containerWidth/2)+a.x;this._container.style.bottom=p+"px",this._container.style.left=h+"px"}},_getAnchor:function(){return[0,0]}});i1.include({_initOverlay:function(o,a,M,p){var h=a;return h instanceof o||(h=new o(p).setContent(a)),M&&h.setLatLng(M),h}}),g5.include({_initOverlay:function(o,a,M,p){var h=M;return h instanceof o?(_(h,p),h._source=this):(h=a&&!p?a:new o(p,this),h.setContent(M)),h}});var g9=N5.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,N5.prototype.openOn.call(this,o)},onAdd:function(o){N5.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof k0||this._source.on("preclick",m1))},onRemove:function(o){N5.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof k0||this._source.off("preclick",m1))},getEvents:function(){var o=N5.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",a=this._container=u1("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),M=this._wrapper=u1("div",o+"-content-wrapper",a);if(this._contentNode=u1("div",o+"-content",M),A2(a),B1(this._contentNode),A1(a,"contextmenu",m1),this._tipContainer=u1("div",o+"-tip-container",a),this._tip=u1("div",o+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=u1("a",o+"-close-button",a);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',A1(p,"click",function(h){i2(h),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,a=o.style;a.width="",a.whiteSpace="nowrap";var M=o.offsetWidth;M=Math.min(M,this.options.maxWidth),M=Math.max(M,this.options.minWidth),a.width=M+1+"px",a.whiteSpace="",a.height="";var p=o.offsetHeight,h=this.options.maxHeight,g="leaflet-popup-scrolled";h&&p>h?(a.height=h+"px",l1(o,g)):E1(o,g),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var a=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),M=this._getAnchor();Q1(this._container,a.add(M))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,a=parseInt(z1(this._container,"marginBottom"),10)||0,M=this._container.offsetHeight+a,p=this._containerWidth,h=new K(this._containerLeft,-M-this._containerBottom);h._add(G2(this._container));var g=o.layerPointToContainerPoint(h),O=H1(this.options.autoPanPadding),E=H1(this.options.autoPanPaddingTopLeft||O),R=H1(this.options.autoPanPaddingBottomRight||O),U=o.getSize(),e1=0,v1=0;g.x+p+R.x>U.x&&(e1=g.x+p-U.x+R.x),g.x-e1-E.x<0&&(e1=g.x-E.x),g.y+M+R.y>U.y&&(v1=g.y+M-U.y+R.y),g.y-v1-E.y<0&&(v1=g.y-E.y),(e1||v1)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([e1,v1]))}},_getAnchor:function(){return H1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),DV=function(o,a){return new g9(o,a)};i1.mergeOptions({closePopupOnClick:!0}),i1.include({openPopup:function(o,a,M){return this._initOverlay(g9,o,a,M).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),g5.include({bindPopup:function(o,a){return this._popup=this._initOverlay(g9,this._popup,o,a),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof o0||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){r5(o);var a=o.layer||o.target;if(this._popup._source===a&&!(a instanceof k0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=a,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var _9=N5.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){N5.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){N5.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=N5.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",a=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=u1("div",a),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+V(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var a,M,p=this._map,h=this._container,g=p.latLngToContainerPoint(p.getCenter()),O=p.layerPointToContainerPoint(o),E=this.options.direction,R=h.offsetWidth,U=h.offsetHeight,e1=H1(this.options.offset),v1=this._getAnchor();E==="top"?(a=R/2,M=U):E==="bottom"?(a=R/2,M=0):E==="center"?(a=R/2,M=U/2):E==="right"?(a=0,M=U/2):E==="left"?(a=R,M=U/2):O.x<g.x?(E="right",a=0,M=U/2):(E="left",a=R+(e1.x+v1.x)*2,M=U/2),o=o.subtract(H1(a,M,!0)).add(e1).add(v1),E1(h,"leaflet-tooltip-right"),E1(h,"leaflet-tooltip-left"),E1(h,"leaflet-tooltip-top"),E1(h,"leaflet-tooltip-bottom"),l1(h,"leaflet-tooltip-"+E),Q1(h,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&t2(this._container,o)},_animateZoom:function(o){var a=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(a)},_getAnchor:function(){return H1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),$V=function(o,a){return new _9(o,a)};i1.include({openTooltip:function(o,a,M){return this._initOverlay(_9,o,a,M).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),g5.include({bindTooltip:function(o,a){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(_9,this._tooltip,o,a),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var a=o?"off":"on",M={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?M.add=this._openTooltip:(M.mouseover=this._openTooltip,M.mouseout=this.closeTooltip,M.click=this._openTooltip,this._map?this._addFocusListeners():M.add=this._addFocusListeners),this._tooltip.options.sticky&&(M.mousemove=this._moveTooltip),this[a](M),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof o0||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var a=typeof o.getElement=="function"&&o.getElement();a&&(A1(a,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),A1(a,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var a=typeof o.getElement=="function"&&o.getElement();a&&a.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var a=this;this._map.once("moveend",function(){a._openOnceFlag=!1,a._openTooltip(o)});return}this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0)}},_moveTooltip:function(o){var a=o.latlng,M,p;this._tooltip.options.sticky&&o.originalEvent&&(M=this._map.mouseEventToContainerPoint(o.originalEvent),p=this._map.containerPointToLayerPoint(M),a=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(a)}});var Re=q3.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var a=o&&o.tagName==="DIV"?o:document.createElement("div"),M=this.options;if(M.html instanceof Element?(h5(a),a.appendChild(M.html)):a.innerHTML=M.html!==!1?M.html:"",M.bgPos){var p=H1(M.bgPos);a.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});function IV(o){return new Re(o)}q3.Default=W7;var U7=g5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:M1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){_(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),P1(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(B2(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(A5(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=n(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof K?o:new K(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var a=this.getPane().children,M=-o(-1/0,1/0),p=0,h=a.length,g;p<h;p++)g=a[p].style.zIndex,a[p]!==this._container&&g&&(M=o(M,+g));isFinite(M)&&(this.options.zIndex=M+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!M1.ielt9){t2(this._container,this.options.opacity);var o=+new Date,a=!1,M=!1;for(var p in this._tiles){var h=this._tiles[p];if(!(!h.current||!h.loaded)){var g=Math.min(1,(o-h.loaded)/200);t2(h.el,g),g<1?a=!0:(h.active?M=!0:this._onOpaqueTile(h),h.active=!0)}}M&&!this._noPrune&&this._pruneTiles(),a&&(h1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this))}},_onOpaqueTile:c,_initContainer:function(){this._container||(this._container=u1("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,a=this.options.maxZoom;if(o!==void 0){for(var M in this._levels)M=Number(M),this._levels[M].el.children.length||M===o?(this._levels[M].el.style.zIndex=a-Math.abs(o-M),this._onUpdateLevel(M)):(P1(this._levels[M].el),this._removeTilesAtZoom(M),this._onRemoveLevel(M),delete this._levels[M]);var p=this._levels[o],h=this._map;return p||(p=this._levels[o]={},p.el=u1("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=a,p.origin=h.project(h.unproject(h.getPixelOrigin()),o).round(),p.zoom=o,this._setZoomTransform(p,h.getCenter(),h.getZoom()),c(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:c,_onRemoveLevel:c,_onCreateLevel:c,_pruneTiles:function(){if(this._map){var o,a,M=this._map.getZoom();if(M>this.options.maxZoom||M<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)a=this._tiles[o],a.retain=a.current;for(o in this._tiles)if(a=this._tiles[o],a.current&&!a.active){var p=a.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var a in this._tiles)this._tiles[a].coords.z===o&&this._removeTile(a)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)P1(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,a,M,p){var h=Math.floor(o/2),g=Math.floor(a/2),O=M-1,E=new K(+h,+g);E.z=+O;var R=this._tileCoordsToKey(E),U=this._tiles[R];return U&&U.active?(U.retain=!0,!0):(U&&U.loaded&&(U.retain=!0),O>p?this._retainParent(h,g,O,p):!1)},_retainChildren:function(o,a,M,p){for(var h=2*o;h<2*o+2;h++)for(var g=2*a;g<2*a+2;g++){var O=new K(h,g);O.z=M+1;var E=this._tileCoordsToKey(O),R=this._tiles[E];if(R&&R.active){R.retain=!0;continue}else R&&R.loaded&&(R.retain=!0);M+1<p&&this._retainChildren(h,g,M+1,p)}},_resetView:function(o){var a=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),a,a)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var a=this.options;return a.minNativeZoom!==void 0&&o<a.minNativeZoom?a.minNativeZoom:a.maxNativeZoom!==void 0&&a.maxNativeZoom<o?a.maxNativeZoom:o},_setView:function(o,a,M,p){var h=Math.round(a);this.options.maxZoom!==void 0&&h>this.options.maxZoom||this.options.minZoom!==void 0&&h<this.options.minZoom?h=void 0:h=this._clampZoom(h);var g=this.options.updateWhenZooming&&h!==this._tileZoom;(!p||g)&&(this._tileZoom=h,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),h!==void 0&&this._update(o),M||this._pruneTiles(),this._noPrune=!!M),this._setZoomTransforms(o,a)},_setZoomTransforms:function(o,a){for(var M in this._levels)this._setZoomTransform(this._levels[M],o,a)},_setZoomTransform:function(o,a,M){var p=this._map.getZoomScale(M,o.zoom),h=o.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(a,M)).round();M1.any3d?e5(o.el,h,p):Q1(o.el,h)},_resetGrid:function(){var o=this._map,a=o.options.crs,M=this._tileSize=this.getTileSize(),p=this._tileZoom,h=this._map.getPixelWorldBounds(this._tileZoom);h&&(this._globalTileRange=this._pxBoundsToTileRange(h)),this._wrapX=a.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,a.wrapLng[0]],p).x/M.x),Math.ceil(o.project([0,a.wrapLng[1]],p).x/M.y)],this._wrapY=a.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([a.wrapLat[0],0],p).y/M.x),Math.ceil(o.project([a.wrapLat[1],0],p).y/M.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var a=this._map,M=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),p=a.getZoomScale(M,this._tileZoom),h=a.project(o,this._tileZoom).floor(),g=a.getSize().divideBy(p*2);return new W(h.subtract(g),h.add(g))},_update:function(o){var a=this._map;if(a){var M=this._clampZoom(a.getZoom());if(o===void 0&&(o=a.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(o),h=this._pxBoundsToTileRange(p),g=h.getCenter(),O=[],E=this.options.keepBuffer,R=new W(h.getBottomLeft().subtract([E,-E]),h.getTopRight().add([E,-E]));if(!(isFinite(h.min.x)&&isFinite(h.min.y)&&isFinite(h.max.x)&&isFinite(h.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var U in this._tiles){var e1=this._tiles[U].coords;(e1.z!==this._tileZoom||!R.contains(new K(e1.x,e1.y)))&&(this._tiles[U].current=!1)}if(Math.abs(M-this._tileZoom)>1){this._setView(o,M);return}for(var v1=h.min.y;v1<=h.max.y;v1++)for(var T1=h.min.x;T1<=h.max.x;T1++){var $2=new K(T1,v1);if($2.z=this._tileZoom,!!this._isValidTile($2)){var f2=this._tiles[this._tileCoordsToKey($2)];f2?f2.current=!0:O.push($2)}}if(O.sort(function(q2,X3){return q2.distanceTo(g)-X3.distanceTo(g)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var M5=document.createDocumentFragment();for(T1=0;T1<O.length;T1++)this._addTile(O[T1],M5);this._level.el.appendChild(M5)}}}},_isValidTile:function(o){var a=this._map.options.crs;if(!a.infinite){var M=this._globalTileRange;if(!a.wrapLng&&(o.x<M.min.x||o.x>M.max.x)||!a.wrapLat&&(o.y<M.min.y||o.y>M.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(o);return p1(this.options.bounds).overlaps(p)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var a=this._map,M=this.getTileSize(),p=o.scaleBy(M),h=p.add(M),g=a.unproject(p,o.z),O=a.unproject(h,o.z);return[g,O]},_tileCoordsToBounds:function(o){var a=this._tileCoordsToNwSe(o),M=new V1(a[0],a[1]);return this.options.noWrap||(M=this._map.wrapLatLngBounds(M)),M},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var a=o.split(":"),M=new K(+a[0],+a[1]);return M.z=+a[2],M},_removeTile:function(o){var a=this._tiles[o];a&&(P1(a.el),delete this._tiles[o],this.fire("tileunload",{tile:a.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){l1(o,"leaflet-tile");var a=this.getTileSize();o.style.width=a.x+"px",o.style.height=a.y+"px",o.onselectstart=c,o.onmousemove=c,M1.ielt9&&this.options.opacity<1&&t2(o,this.options.opacity)},_addTile:function(o,a){var M=this._getTilePos(o),p=this._tileCoordsToKey(o),h=this.createTile(this._wrapCoords(o),i(this._tileReady,this,o));this._initTile(h),this.createTile.length<2&&o1(i(this._tileReady,this,o,null,h)),Q1(h,M),this._tiles[p]={el:h,coords:o,current:!0},a.appendChild(h),this.fire("tileloadstart",{tile:h,coords:o})},_tileReady:function(o,a,M){a&&this.fire("tileerror",{error:a,tile:M,coords:o});var p=this._tileCoordsToKey(o);M=this._tiles[p],M&&(M.loaded=+new Date,this._map._fadeAnimated?(t2(M.el,0),h1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this)):(M.active=!0,this._pruneTiles()),a||(l1(M.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:M.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),M1.ielt9||!this._map._fadeAnimated?o1(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var a=new K(this._wrapX?s(o.x,this._wrapX):o.x,this._wrapY?s(o.y,this._wrapY):o.y);return a.z=o.z,a},_pxBoundsToTileRange:function(o){var a=this.getTileSize();return new W(o.min.unscaleBy(a).floor(),o.max.unscaleBy(a).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function zV(o){return new U7(o)}var K3=U7.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,a){this._url=o,a=_(this,a),a.detectRetina&&M1.retina&&a.maxZoom>0?(a.tileSize=Math.floor(a.tileSize/2),a.zoomReverse?(a.zoomOffset--,a.minZoom=Math.min(a.maxZoom,a.minZoom+1)):(a.zoomOffset++,a.maxZoom=Math.max(a.minZoom,a.maxZoom-1)),a.minZoom=Math.max(0,a.minZoom)):a.zoomReverse?a.minZoom=Math.min(a.maxZoom,a.minZoom):a.maxZoom=Math.max(a.minZoom,a.maxZoom),typeof a.subdomains=="string"&&(a.subdomains=a.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,a){return this._url===o&&a===void 0&&(a=!0),this._url=o,a||this.redraw(),this},createTile:function(o,a){var M=document.createElement("img");return A1(M,"load",i(this._tileOnLoad,this,a,M)),A1(M,"error",i(this._tileOnError,this,a,M)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(M.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(M.referrerPolicy=this.options.referrerPolicy),M.alt="",M.src=this.getTileUrl(o),M},getTileUrl:function(o){var a={r:M1.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var M=this._globalTileRange.max.y-o.y;this.options.tms&&(a.y=M),a["-y"]=M}return k(this._url,e(a,this.options))},_tileOnLoad:function(o,a){M1.ielt9?setTimeout(i(o,this,null,a),0):o(null,a)},_tileOnError:function(o,a,M){var p=this.options.errorTileUrl;p&&a.getAttribute("src")!==p&&(a.src=p),o(M,a)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,a=this.options.maxZoom,M=this.options.zoomReverse,p=this.options.zoomOffset;return M&&(o=a-o),o+p},_getSubdomain:function(o){var a=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[a]},_abortLoading:function(){var o,a;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(a=this._tiles[o].el,a.onload=c,a.onerror=c,!a.complete)){a.src=I;var M=this._tiles[o].coords;P1(a),delete this._tiles[o],this.fire("tileabort",{tile:a,coords:M})}},_removeTile:function(o){var a=this._tiles[o];if(a)return a.el.setAttribute("src",I),U7.prototype._removeTile.call(this,o)},_tileReady:function(o,a,M){if(!(!this._map||M&&M.getAttribute("src")===I))return U7.prototype._tileReady.call(this,o,a,M)}});function De(o,a){return new K3(o,a)}var $e=K3.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,a){this._url=o;var M=e({},this.defaultWmsParams);for(var p in a)p in this.options||(M[p]=a[p]);a=_(this,a);var h=a.detectRetina&&M1.retina?2:1,g=this.getTileSize();M.width=g.x*h,M.height=g.y*h,this.wmsParams=M},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var a=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[a]=this._crs.code,K3.prototype.onAdd.call(this,o)},getTileUrl:function(o){var a=this._tileCoordsToNwSe(o),M=this._crs,p=J(M.project(a[0]),M.project(a[1])),h=p.min,g=p.max,O=(this._wmsVersion>=1.3&&this._crs===ke?[h.y,h.x,g.y,g.x]:[h.x,h.y,g.x,g.y]).join(","),E=K3.prototype.getTileUrl.call(this,o);return E+b(this.wmsParams,E,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(o,a){return e(this.wmsParams,o),a||this.redraw(),this}});function NV(o,a){return new $e(o,a)}K3.WMS=$e,De.wms=NV;var a0=g5.extend({options:{padding:.1},initialize:function(o){_(this,o),V(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),l1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,a){var M=this._map.getZoomScale(a,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),h=this._map.project(this._center,a),g=p.multiplyBy(-M).add(h).subtract(this._map._getNewPixelOrigin(o,a));M1.any3d?e5(this._container,g,M):Q1(this._container,g)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,a=this._map.getSize(),M=this._map.containerPointToLayerPoint(a.multiplyBy(-o)).round();this._bounds=new W(M,M.add(a.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Ie=a0.extend({options:{tolerance:0},getEvents:function(){var o=a0.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){a0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");A1(o,"mousemove",this._onMouseMove,this),A1(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A1(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){h1(this._redrawRequest),delete this._ctx,P1(this._container),x1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var a in this._layers)o=this._layers[a],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){a0.prototype._update.call(this);var o=this._bounds,a=this._container,M=o.getSize(),p=M1.retina?2:1;Q1(a,o.min),a.width=p*M.x,a.height=p*M.y,a.style.width=M.x+"px",a.style.height=M.y+"px",M1.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){a0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[V(o)]=o;var a=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=a),this._drawLast=a,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var a=o._order,M=a.next,p=a.prev;M?M.prev=p:this._drawLast=p,p?p.next=M:this._drawFirst=M,delete o._order,delete this._layers[V(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var a=o.options.dashArray.split(/[, ]+/),M=[],p,h;for(h=0;h<a.length;h++){if(p=Number(a[h]),isNaN(p))return;M.push(p)}o.options._dashArray=M}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||o1(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var a=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new W,this._redrawBounds.extend(o._pxBounds.min.subtract([a,a])),this._redrawBounds.extend(o._pxBounds.max.add([a,a]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var a=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,a.x,a.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,a=this._redrawBounds;if(this._ctx.save(),a){var M=a.getSize();this._ctx.beginPath(),this._ctx.rect(a.min.x,a.min.y,M.x,M.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)o=p.layer,(!a||o._pxBounds&&o._pxBounds.intersects(a))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,a){if(this._drawing){var M,p,h,g,O=o._parts,E=O.length,R=this._ctx;if(E){for(R.beginPath(),M=0;M<E;M++){for(p=0,h=O[M].length;p<h;p++)g=O[M][p],R[p?"lineTo":"moveTo"](g.x,g.y);a&&R.closePath()}this._fillStroke(R,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var a=o._point,M=this._ctx,p=Math.max(Math.round(o._radius),1),h=(Math.max(Math.round(o._radiusY),1)||p)/p;h!==1&&(M.save(),M.scale(1,h)),M.beginPath(),M.arc(a.x,a.y/h,p,0,Math.PI*2,!1),h!==1&&M.restore(),this._fillStroke(M,o)}},_fillStroke:function(o,a){var M=a.options;M.fill&&(o.globalAlpha=M.fillOpacity,o.fillStyle=M.fillColor||M.color,o.fill(M.fillRule||"evenodd")),M.stroke&&M.weight!==0&&(o.setLineDash&&o.setLineDash(a.options&&a.options._dashArray||[]),o.globalAlpha=M.opacity,o.lineWidth=M.weight,o.strokeStyle=M.color,o.lineCap=M.lineCap,o.lineJoin=M.lineJoin,o.stroke())},_onClick:function(o){for(var a=this._map.mouseEventToLayerPoint(o),M,p,h=this._drawFirst;h;h=h.next)M=h.layer,M.options.interactive&&M._containsPoint(a)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(M))&&(p=M);this._fireEvent(p?[p]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var a=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,a)}},_handleMouseOut:function(o){var a=this._hoveredLayer;a&&(E1(this._container,"leaflet-interactive"),this._fireEvent([a],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,a){if(!this._mouseHoverThrottled){for(var M,p,h=this._drawFirst;h;h=h.next)M=h.layer,M.options.interactive&&M._containsPoint(a)&&(p=M);p!==this._hoveredLayer&&(this._handleMouseOut(o),p&&(l1(this._container,"leaflet-interactive"),this._fireEvent([p],o,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,a,M){this._map._fireDOMEvent(a,M||a.type,o)},_bringToFront:function(o){var a=o._order;if(a){var M=a.next,p=a.prev;if(M)M.prev=p;else return;p?p.next=M:M&&(this._drawFirst=M),a.prev=this._drawLast,this._drawLast.next=a,a.next=null,this._drawLast=a,this._requestRedraw(o)}},_bringToBack:function(o){var a=o._order;if(a){var M=a.next,p=a.prev;if(p)p.next=M;else return;M?M.prev=p:p&&(this._drawLast=p),a.prev=null,a.next=this._drawFirst,this._drawFirst.prev=a,this._drawFirst=a,this._requestRedraw(o)}}});function ze(o){return M1.canvas?new Ie(o):null}var j7=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),WV={_initContainer:function(){this._container=u1("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(a0.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var a=o._container=j7("shape");l1(a,"leaflet-vml-shape "+(this.options.className||"")),a.coordsize="1 1",o._path=j7("path"),a.appendChild(o._path),this._updateStyle(o),this._layers[V(o)]=o},_addPath:function(o){var a=o._container;this._container.appendChild(a),o.options.interactive&&o.addInteractiveTarget(a)},_removePath:function(o){var a=o._container;P1(a),o.removeInteractiveTarget(a),delete this._layers[V(o)]},_updateStyle:function(o){var a=o._stroke,M=o._fill,p=o.options,h=o._container;h.stroked=!!p.stroke,h.filled=!!p.fill,p.stroke?(a||(a=o._stroke=j7("stroke")),h.appendChild(a),a.weight=p.weight+"px",a.color=p.color,a.opacity=p.opacity,p.dashArray?a.dashStyle=P(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):a.dashStyle="",a.endcap=p.lineCap.replace("butt","flat"),a.joinstyle=p.lineJoin):a&&(h.removeChild(a),o._stroke=null),p.fill?(M||(M=o._fill=j7("fill")),h.appendChild(M),M.color=p.fillColor||p.color,M.opacity=p.fillOpacity):M&&(h.removeChild(M),o._fill=null)},_updateCircle:function(o){var a=o._point.round(),M=Math.round(o._radius),p=Math.round(o._radiusY||M);this._setPath(o,o._empty()?"M0 0":"AL "+a.x+","+a.y+" "+M+","+p+" 0,"+65535*360)},_setPath:function(o,a){o._path.v=a},_bringToFront:function(o){B2(o._container)},_bringToBack:function(o){A5(o._container)}},S9=M1.vml?j7:E2,G7=a0.extend({_initContainer:function(){this._container=S9("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=S9("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){P1(this._container),x1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){a0.prototype._update.call(this);var o=this._bounds,a=o.getSize(),M=this._container;(!this._svgSize||!this._svgSize.equals(a))&&(this._svgSize=a,M.setAttribute("width",a.x),M.setAttribute("height",a.y)),Q1(M,o.min),M.setAttribute("viewBox",[o.min.x,o.min.y,a.x,a.y].join(" ")),this.fire("update")}},_initPath:function(o){var a=o._path=S9("path");o.options.className&&l1(a,o.options.className),o.options.interactive&&l1(a,"leaflet-interactive"),this._updateStyle(o),this._layers[V(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){P1(o._path),o.removeInteractiveTarget(o._path),delete this._layers[V(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var a=o._path,M=o.options;a&&(M.stroke?(a.setAttribute("stroke",M.color),a.setAttribute("stroke-opacity",M.opacity),a.setAttribute("stroke-width",M.weight),a.setAttribute("stroke-linecap",M.lineCap),a.setAttribute("stroke-linejoin",M.lineJoin),M.dashArray?a.setAttribute("stroke-dasharray",M.dashArray):a.removeAttribute("stroke-dasharray"),M.dashOffset?a.setAttribute("stroke-dashoffset",M.dashOffset):a.removeAttribute("stroke-dashoffset")):a.setAttribute("stroke","none"),M.fill?(a.setAttribute("fill",M.fillColor||M.color),a.setAttribute("fill-opacity",M.fillOpacity),a.setAttribute("fill-rule",M.fillRule||"evenodd")):a.setAttribute("fill","none"))},_updatePoly:function(o,a){this._setPath(o,V5(o._parts,a))},_updateCircle:function(o){var a=o._point,M=Math.max(Math.round(o._radius),1),p=Math.max(Math.round(o._radiusY),1)||M,h="a"+M+","+p+" 0 1,0 ",g=o._empty()?"M0 0":"M"+(a.x-M)+","+a.y+h+M*2+",0 "+h+-M*2+",0 ";this._setPath(o,g)},_setPath:function(o,a){o._path.setAttribute("d",a)},_bringToFront:function(o){B2(o._path)},_bringToBack:function(o){A5(o._path)}});M1.vml&&G7.include(WV);function Ne(o){return M1.svg||M1.vml?new G7(o):null}i1.include({getRenderer:function(o){var a=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return a||(a=this._renderer=this._createRenderer()),this.hasLayer(a)||this.addLayer(a),a},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var a=this._paneRenderers[o];return a===void 0&&(a=this._createRenderer({pane:o}),this._paneRenderers[o]=a),a},_createRenderer:function(o){return this.options.preferCanvas&&ze(o)||Ne(o)}});var We=Y3.extend({initialize:function(o,a){Y3.prototype.initialize.call(this,this._boundsToLatLngs(o),a)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=p1(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function UV(o,a){return new We(o,a)}G7.create=S9,G7.pointsToPath=V5,V0.geometryToLayer=h9,V0.coordsToLatLng=Z8,V0.coordsToLatLngs=A9,V0.latLngToCoords=w8,V0.latLngsToCoords=f9,V0.getFeature=Q3,V0.asFeature=v9,i1.mergeOptions({boxZoom:!0});var Ue=z5.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){A1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){x1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){P1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),r0(),s3(),this._startPoint=this._map.mouseEventToContainerPoint(o),A1(document,{contextmenu:r5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=u1("div","leaflet-zoom-box",this._container),l1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var a=new W(this._point,this._startPoint),M=a.getSize();Q1(this._box,a.min),this._box.style.width=M.x+"px",this._box.style.height=M.y+"px"},_finish:function(){this._moved&&(P1(this._box),E1(this._container,"leaflet-crosshair")),c2(),M3(),x1(document,{contextmenu:r5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var a=new V1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(a).fire("boxzoomend",{boxZoomBounds:a})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});i1.addInitHook("addHandler","boxZoom",Ue),i1.mergeOptions({doubleClickZoom:!0});var je=z5.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var a=this._map,M=a.getZoom(),p=a.options.zoomDelta,h=o.originalEvent.shiftKey?M-p:M+p;a.options.doubleClickZoom==="center"?a.setZoom(h):a.setZoomAround(o.containerPoint,h)}});i1.addInitHook("addHandler","doubleClickZoom",je),i1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ge=z5.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new O0(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}l1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){E1(this._map._container,"leaflet-grab"),E1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var a=p1(this._map.options.maxBounds);this._offsetLimit=J(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var a=this._lastTime=+new Date,M=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(M),this._times.push(a),this._prunePositions(a)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),a=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=a.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,a){return o-(o-a)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),a=this._offsetLimit;o.x<a.min.x&&(o.x=this._viscousLimit(o.x,a.min.x)),o.y<a.min.y&&(o.y=this._viscousLimit(o.y,a.min.y)),o.x>a.max.x&&(o.x=this._viscousLimit(o.x,a.max.x)),o.y>a.max.y&&(o.y=this._viscousLimit(o.y,a.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,a=Math.round(o/2),M=this._initialWorldOffset,p=this._draggable._newPos.x,h=(p-a+M)%o+a-M,g=(p+a+M)%o-a-M,O=Math.abs(h+M)<Math.abs(g+M)?h:g;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(o){var a=this._map,M=a.options,p=!M.inertia||o.noInertia||this._times.length<2;if(a.fire("dragend",o),p)a.fire("moveend");else{this._prunePositions(+new Date);var h=this._lastPos.subtract(this._positions[0]),g=(this._lastTime-this._times[0])/1e3,O=M.easeLinearity,E=h.multiplyBy(O/g),R=E.distanceTo([0,0]),U=Math.min(M.inertiaMaxSpeed,R),e1=E.multiplyBy(U/R),v1=U/(M.inertiaDeceleration*O),T1=e1.multiplyBy(-v1/2).round();!T1.x&&!T1.y?a.fire("moveend"):(T1=a._limitOffset(T1,a.options.maxBounds),o1(function(){a.panBy(T1,{duration:v1,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});i1.addInitHook("addHandler","dragging",Ge),i1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var qe=z5.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),A1(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),x1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,a=document.documentElement,M=o.scrollTop||a.scrollTop,p=o.scrollLeft||a.scrollLeft;this._map._container.focus(),window.scrollTo(p,M)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var a=this._panKeys={},M=this.keyCodes,p,h;for(p=0,h=M.left.length;p<h;p++)a[M.left[p]]=[-1*o,0];for(p=0,h=M.right.length;p<h;p++)a[M.right[p]]=[o,0];for(p=0,h=M.down.length;p<h;p++)a[M.down[p]]=[0,o];for(p=0,h=M.up.length;p<h;p++)a[M.up[p]]=[0,-1*o]},_setZoomDelta:function(o){var a=this._zoomKeys={},M=this.keyCodes,p,h;for(p=0,h=M.zoomIn.length;p<h;p++)a[M.zoomIn[p]]=o;for(p=0,h=M.zoomOut.length;p<h;p++)a[M.zoomOut[p]]=-o},_addHooks:function(){A1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){x1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var a=o.keyCode,M=this._map,p;if(a in this._panKeys){if(!M._panAnim||!M._panAnim._inProgress)if(p=this._panKeys[a],o.shiftKey&&(p=H1(p).multiplyBy(3)),M.options.maxBounds&&(p=M._limitOffset(H1(p),M.options.maxBounds)),M.options.worldCopyJump){var h=M.wrapLatLng(M.unproject(M.project(M.getCenter()).add(p)));M.panTo(h)}else M.panBy(p)}else if(a in this._zoomKeys)M.setZoom(M.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[a]);else if(a===27&&M._popup&&M._popup.options.closeOnEscapeKey)M.closePopup();else return;r5(o)}}});i1.addInitHook("addHandler","keyboard",qe),i1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ye=z5.extend({addHooks:function(){A1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){x1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var a=c9(o),M=this._map.options.wheelDebounceTime;this._delta+=a,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var p=Math.max(M-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),p),r5(o)},_performZoom:function(){var o=this._map,a=o.getZoom(),M=this._map.options.zoomSnap||0;o._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),h=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,g=M?Math.ceil(h/M)*M:h,O=o._limitZoom(a+(this._delta>0?g:-g))-a;this._delta=0,this._startTime=null,O&&(o.options.scrollWheelZoom==="center"?o.setZoom(a+O):o.setZoomAround(this._lastMousePos,a+O))}});i1.addInitHook("addHandler","scrollWheelZoom",Ye);var jV=600;i1.mergeOptions({tapHold:M1.touchNative&&M1.safari&&M1.mobile,tapTolerance:15});var Qe=z5.extend({addHooks:function(){A1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){x1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var a=o.touches[0];this._startPos=this._newPos=new K(a.clientX,a.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(A1(document,"touchend",i2),A1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",a))},this),jV),A1(document,"touchend touchcancel contextmenu",this._cancel,this),A1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){x1(document,"touchend",i2),x1(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),x1(document,"touchend touchcancel contextmenu",this._cancel,this),x1(document,"touchmove",this._onMove,this)},_onMove:function(o){var a=o.touches[0];this._newPos=new K(a.clientX,a.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,a){var M=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY});M._simulated=!0,a.target.dispatchEvent(M)}});i1.addInitHook("addHandler","tapHold",Qe),i1.mergeOptions({touchZoom:M1.touch,bounceAtZoomLimits:!0});var Ke=z5.extend({addHooks:function(){l1(this._map._container,"leaflet-touch-zoom"),A1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){E1(this._map._container,"leaflet-touch-zoom"),x1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var a=this._map;if(!(!o.touches||o.touches.length!==2||a._animatingZoom||this._zooming)){var M=a.mouseEventToContainerPoint(o.touches[0]),p=a.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=a.getSize()._divideBy(2),this._startLatLng=a.containerPointToLatLng(this._centerPoint),a.options.touchZoom!=="center"&&(this._pinchStartLatLng=a.containerPointToLatLng(M.add(p)._divideBy(2))),this._startDist=M.distanceTo(p),this._startZoom=a.getZoom(),this._moved=!1,this._zooming=!0,a._stop(),A1(document,"touchmove",this._onTouchMove,this),A1(document,"touchend touchcancel",this._onTouchEnd,this),i2(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var a=this._map,M=a.mouseEventToContainerPoint(o.touches[0]),p=a.mouseEventToContainerPoint(o.touches[1]),h=M.distanceTo(p)/this._startDist;if(this._zoom=a.getScaleZoom(h,this._startZoom),!a.options.bounceAtZoomLimits&&(this._zoom<a.getMinZoom()&&h<1||this._zoom>a.getMaxZoom()&&h>1)&&(this._zoom=a._limitZoom(this._zoom)),a.options.touchZoom==="center"){if(this._center=this._startLatLng,h===1)return}else{var g=M._add(p)._divideBy(2)._subtract(this._centerPoint);if(h===1&&g.x===0&&g.y===0)return;this._center=a.unproject(a.project(this._pinchStartLatLng,this._zoom).subtract(g),this._zoom)}this._moved||(a._moveStart(!0,!1),this._moved=!0),h1(this._animRequest);var O=i(a._move,a,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=o1(O,this,!0),i2(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,h1(this._animRequest),x1(document,"touchmove",this._onTouchMove,this),x1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});i1.addInitHook("addHandler","touchZoom",Ke),i1.BoxZoom=Ue,i1.DoubleClickZoom=je,i1.Drag=Ge,i1.Keyboard=qe,i1.ScrollWheelZoom=Ye,i1.TapHold=Qe,i1.TouchZoom=Ke,r.Bounds=W,r.Browser=M1,r.CRS=_1,r.Canvas=Ie,r.Circle=S8,r.CircleMarker=m9,r.Class=b1,r.Control=o2,r.DivIcon=Re,r.DivOverlay=N5,r.DomEvent=f1,r.DomUtil=l3,r.Draggable=O0,r.Evented=y1,r.FeatureGroup=o0,r.GeoJSON=V0,r.GridLayer=U7,r.Handler=z5,r.Icon=q3,r.ImageOverlay=x9,r.LatLng=a1,r.LatLngBounds=V1,r.Layer=g5,r.LayerGroup=G3,r.LineUtil=xV,r.Map=i1,r.Marker=u9,r.Mixin=uV,r.Path=k0,r.Point=K,r.PolyUtil=mV,r.Polygon=Y3,r.Polyline=H0,r.Popup=g9,r.PosAnimation=k1,r.Projection=gV,r.Rectangle=We,r.Renderer=a0,r.SVG=G7,r.SVGOverlay=Be,r.TileLayer=K3,r.Tooltip=_9,r.Transformation=Z2,r.Util=I1,r.VideoOverlay=Ee,r.bind=i,r.bounds=J,r.canvas=ze,r.circle=kV,r.circleMarker=OV,r.control=R2,r.divIcon=IV,r.extend=e,r.featureGroup=wV,r.geoJSON=Fe,r.geoJson=FV,r.gridLayer=zV,r.icon=bV,r.imageOverlay=EV,r.latLng=n1,r.latLngBounds=p1,r.layerGroup=ZV,r.map=b2,r.marker=yV,r.point=H1,r.polygon=PV,r.polyline=TV,r.popup=DV,r.rectangle=UV,r.setOptions=_,r.stamp=V,r.svg=Ne,r.svgOverlay=RV,r.tileLayer=De,r.tooltip=$V,r.transformation=L2,r.version=t,r.videoOverlay=BV;var GV=window.L;r.noConflict=function(){return window.L=GV,this},window.L=r}))});var y9=globalThis,O9=y9.ShadowRoot&&(y9.ShadyCSS===void 0||y9.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O8=Symbol(),Cr=new WeakMap,q7=class{constructor(t,e,C){if(this._$cssResult$=!0,C!==O8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(O9&&t===void 0){let C=e!==void 0&&e.length===1;C&&(t=Cr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),C&&Cr.set(e,t))}return t}toString(){return this.cssText}},n0=r=>new q7(typeof r=="string"?r:r+"",void 0,O8),e2=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((C,i,H)=>C+(V=>{if(V._$cssResult$===!0)return V.cssText;if(typeof V=="number")return V;throw Error("Value passed to 'css' function must be a 'css' function result: "+V+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[H+1],r[0]);return new q7(e,r,O8)},ir=(r,t)=>{if(O9)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let C=document.createElement("style"),i=y9.litNonce;i!==void 0&&C.setAttribute("nonce",i),C.textContent=e.cssText,r.appendChild(C)}},k8=O9?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let C of t.cssRules)e+=C.cssText;return n0(e)})(r):r;var{is:aa,defineProperty:na,getOwnPropertyDescriptor:La,getOwnPropertyNames:sa,getOwnPropertySymbols:Ma,getPrototypeOf:la}=Object,T0=globalThis,or=T0.trustedTypes,ca=or?or.emptyScript:"",da=T0.reactiveElementPolyfillSupport,Y7=(r,t)=>r,Q7={toAttribute(r,t){switch(t){case Boolean:r=r?ca:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},k9=(r,t)=>!aa(r,t),Hr={attribute:!0,type:String,converter:Q7,reflect:!1,useDefault:!1,hasChanged:k9};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),T0.litPropertyMetadata??(T0.litPropertyMetadata=new WeakMap);var L0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Hr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let C=Symbol(),i=this.getPropertyDescriptor(t,C,e);i!==void 0&&na(this.prototype,t,i)}}static getPropertyDescriptor(t,e,C){let{get:i,set:H}=La(this.prototype,t)??{get(){return this[e]},set(V){this[e]=V}};return{get:i,set(V){let n=i?.call(this);H?.call(this,V),this.requestUpdate(t,n,C)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Hr}static _$Ei(){if(this.hasOwnProperty(Y7("elementProperties")))return;let t=la(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y7("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y7("properties"))){let e=this.properties,C=[...sa(e),...Ma(e)];for(let i of C)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[C,i]of e)this.elementProperties.set(C,i)}this._$Eh=new Map;for(let[e,C]of this.elementProperties){let i=this._$Eu(e,C);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let C=new Set(t.flat(1/0).reverse());for(let i of C)e.unshift(k8(i))}else t!==void 0&&e.push(k8(t));return e}static _$Eu(t,e){let C=e.attribute;return C===!1?void 0:typeof C=="string"?C:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let C of e.keys())this.hasOwnProperty(C)&&(t.set(C,this[C]),delete this[C]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ir(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,C){this._$AK(t,C)}_$ET(t,e){let C=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,C);if(i!==void 0&&C.reflect===!0){let H=(C.converter?.toAttribute!==void 0?C.converter:Q7).toAttribute(e,C.type);this._$Em=t,H==null?this.removeAttribute(i):this.setAttribute(i,H),this._$Em=null}}_$AK(t,e){let C=this.constructor,i=C._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let H=C.getPropertyOptions(i),V=typeof H.converter=="function"?{fromAttribute:H.converter}:H.converter?.fromAttribute!==void 0?H.converter:Q7;this._$Em=i;let n=V.fromAttribute(e,H.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,C,i=!1,H){if(t!==void 0){let V=this.constructor;if(i===!1&&(H=this[t]),C??(C=V.getPropertyOptions(t)),!((C.hasChanged??k9)(H,e)||C.useDefault&&C.reflect&&H===this._$Ej?.get(t)&&!this.hasAttribute(V._$Eu(t,C))))return;this.C(t,e,C)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:C,reflect:i,wrapped:H},V){C&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,V??e??this[t]),H!==!0||V!==void 0)||(this._$AL.has(t)||(this.hasUpdated||C||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,H]of this._$Ep)this[i]=H;this._$Ep=void 0}let C=this.constructor.elementProperties;if(C.size>0)for(let[i,H]of C){let{wrapped:V}=H,n=this[i];V!==!0||this._$AL.has(i)||n===void 0||this.C(i,void 0,H,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(C=>C.hostUpdate?.()),this.update(e)):this._$EM()}catch(C){throw t=!1,this._$EM(),C}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};L0.elementStyles=[],L0.shadowRootOptions={mode:"open"},L0[Y7("elementProperties")]=new Map,L0[Y7("finalized")]=new Map,da?.({ReactiveElement:L0}),(T0.reactiveElementVersions??(T0.reactiveElementVersions=[])).push("2.1.2");var X7=globalThis,Vr=r=>r,T9=X7.trustedTypes,ar=T9?T9.createPolicy("lit-html",{createHTML:r=>r}):void 0,cr="$lit$",P0=`lit$${Math.random().toFixed(9).slice(2)}$`,dr="?"+P0,pa=`<${dr}>`,A3=document,J7=()=>A3.createComment(""),t4=r=>r===null||typeof r!="object"&&typeof r!="function",D8=Array.isArray,ua=r=>D8(r)||typeof r?.[Symbol.iterator]=="function",T8=`[ 	
\f\r]`,K7=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nr=/-->/g,Lr=/>/g,m3=RegExp(`>|${T8}(?:([^\\s"'>=/]+)(${T8}*=${T8}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sr=/'/g,Mr=/"/g,pr=/^(?:script|style|textarea|title)$/i,$8=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),w=$8(1),R1=$8(2),bm=$8(3),C5=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),lr=new WeakMap,h3=A3.createTreeWalker(A3,129);function ur(r,t){if(!D8(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ar!==void 0?ar.createHTML(t):t}var ma=(r,t)=>{let e=r.length-1,C=[],i,H=t===2?"<svg>":t===3?"<math>":"",V=K7;for(let n=0;n<e;n++){let s=r[n],c,u,A=-1,v=0;for(;v<s.length&&(V.lastIndex=v,u=V.exec(s),u!==null);)v=V.lastIndex,V===K7?u[1]==="!--"?V=nr:u[1]!==void 0?V=Lr:u[2]!==void 0?(pr.test(u[2])&&(i=RegExp("</"+u[2],"g")),V=m3):u[3]!==void 0&&(V=m3):V===m3?u[0]===">"?(V=i??K7,A=-1):u[1]===void 0?A=-2:(A=V.lastIndex-u[2].length,c=u[1],V=u[3]===void 0?m3:u[3]==='"'?Mr:sr):V===Mr||V===sr?V=m3:V===nr||V===Lr?V=K7:(V=m3,i=void 0);let _=V===m3&&r[n+1].startsWith("/>")?" ":"";H+=V===K7?s+pa:A>=0?(C.push(c),s.slice(0,A)+cr+s.slice(A)+P0+_):s+P0+(A===-2?n:_)}return[ur(r,H+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),C]},e4=class r{constructor({strings:t,_$litType$:e},C){let i;this.parts=[];let H=0,V=0,n=t.length-1,s=this.parts,[c,u]=ma(t,e);if(this.el=r.createElement(c,C),h3.currentNode=this.el.content,e===2||e===3){let A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(i=h3.nextNode())!==null&&s.length<n;){if(i.nodeType===1){if(i.hasAttributes())for(let A of i.getAttributeNames())if(A.endsWith(cr)){let v=u[V++],_=i.getAttribute(A).split(P0),b=/([.?@])?(.*)/.exec(v);s.push({type:1,index:H,name:b[2],strings:_,ctor:b[1]==="."?F8:b[1]==="?"?E8:b[1]==="@"?B8:t7}),i.removeAttribute(A)}else A.startsWith(P0)&&(s.push({type:6,index:H}),i.removeAttribute(A));if(pr.test(i.tagName)){let A=i.textContent.split(P0),v=A.length-1;if(v>0){i.textContent=T9?T9.emptyScript:"";for(let _=0;_<v;_++)i.append(A[_],J7()),h3.nextNode(),s.push({type:2,index:++H});i.append(A[v],J7())}}}else if(i.nodeType===8)if(i.data===dr)s.push({type:2,index:H});else{let A=-1;for(;(A=i.data.indexOf(P0,A+1))!==-1;)s.push({type:7,index:H}),A+=P0.length-1}H++}}static createElement(t,e){let C=A3.createElement("template");return C.innerHTML=t,C}};function J3(r,t,e=r,C){if(t===C5)return t;let i=C!==void 0?e._$Co?.[C]:e._$Cl,H=t4(t)?void 0:t._$litDirective$;return i?.constructor!==H&&(i?._$AO?.(!1),H===void 0?i=void 0:(i=new H(r),i._$AT(r,e,C)),C!==void 0?(e._$Co??(e._$Co=[]))[C]=i:e._$Cl=i),i!==void 0&&(t=J3(r,i._$AS(r,t.values),i,C)),t}var P8=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:C}=this._$AD,i=(t?.creationScope??A3).importNode(e,!0);h3.currentNode=i;let H=h3.nextNode(),V=0,n=0,s=C[0];for(;s!==void 0;){if(V===s.index){let c;s.type===2?c=new r4(H,H.nextSibling,this,t):s.type===1?c=new s.ctor(H,s.name,s.strings,this,t):s.type===6&&(c=new R8(H,this,t)),this._$AV.push(c),s=C[++n]}V!==s?.index&&(H=h3.nextNode(),V++)}return h3.currentNode=A3,i}p(t){let e=0;for(let C of this._$AV)C!==void 0&&(C.strings!==void 0?(C._$AI(t,C,e),e+=C.strings.length-2):C._$AI(t[e])),e++}},r4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,C,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=C,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J3(this,t,e),t4(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==C5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ua(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&t4(this._$AH)?this._$AA.nextSibling.data=t:this.T(A3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:C}=t,i=typeof C=="number"?this._$AC(t):(C.el===void 0&&(C.el=e4.createElement(ur(C.h,C.h[0]),this.options)),C);if(this._$AH?._$AD===i)this._$AH.p(e);else{let H=new P8(i,this),V=H.u(this.options);H.p(e),this.T(V),this._$AH=H}}_$AC(t){let e=lr.get(t.strings);return e===void 0&&lr.set(t.strings,e=new e4(t)),e}k(t){D8(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,C,i=0;for(let H of t)i===e.length?e.push(C=new r(this.O(J7()),this.O(J7()),this,this.options)):C=e[i],C._$AI(H),i++;i<e.length&&(this._$AR(C&&C._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let C=Vr(t).nextSibling;Vr(t).remove(),t=C}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},t7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,C,i,H){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=H,C.length>2||C[0]!==""||C[1]!==""?(this._$AH=Array(C.length-1).fill(new String),this.strings=C):this._$AH=F}_$AI(t,e=this,C,i){let H=this.strings,V=!1;if(H===void 0)t=J3(this,t,e,0),V=!t4(t)||t!==this._$AH&&t!==C5,V&&(this._$AH=t);else{let n=t,s,c;for(t=H[0],s=0;s<H.length-1;s++)c=J3(this,n[C+s],e,s),c===C5&&(c=this._$AH[s]),V||(V=!t4(c)||c!==this._$AH[s]),c===F?t=F:t!==F&&(t+=(c??"")+H[s+1]),this._$AH[s]=c}V&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},F8=class extends t7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}},E8=class extends t7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}},B8=class extends t7{constructor(t,e,C,i,H){super(t,e,C,i,H),this.type=5}_$AI(t,e=this){if((t=J3(this,t,e,0)??F)===C5)return;let C=this._$AH,i=t===F&&C!==F||t.capture!==C.capture||t.once!==C.once||t.passive!==C.passive,H=t!==F&&(C===F||i);i&&this.element.removeEventListener(this.name,this,C),H&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},R8=class{constructor(t,e,C){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=C}get _$AU(){return this._$AM._$AU}_$AI(t){J3(this,t)}};var ha=X7.litHtmlPolyfillSupport;ha?.(e4,r4),(X7.litHtmlVersions??(X7.litHtmlVersions=[])).push("3.3.3");var mr=(r,t,e)=>{let C=e?.renderBefore??t,i=C._$litPart$;if(i===void 0){let H=e?.renderBefore??null;C._$litPart$=i=new r4(t.insertBefore(J7(),H),H,void 0,e??{})}return i._$AI(r),i};var C4=globalThis,g1=class extends L0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C5}};g1._$litElement$=!0,g1.finalized=!0,C4.litElementHydrateSupport?.({LitElement:g1});var Aa=C4.litElementPolyfillSupport;Aa?.({LitElement:g1});(C4.litElementVersions??(C4.litElementVersions=[])).push("4.2.2");var hr="2026.10.18.1",i4="weather-station-flex-card",I8="Weather Station Flex Card",o4={temp_humidity:{label:"Temp & Humidity",icon:"mdi:thermometer-water"},wind:{label:"Wind",icon:"mdi:weather-windy"},radar:{label:"Radar",icon:"mdi:radar"},forecast:{label:"Forecast",icon:"mdi:calendar-week"},sun_moon:{label:"Sun & Moon",icon:"mdi:weather-sunset"}},Ar=Object.keys(o4);var fa=typeof global=="object"&&global&&global.Object===Object&&global,P9=fa;var va=typeof self=="object"&&self&&self.Object===Object&&self,xa=P9||va||Function("return this")(),l5=xa;var ga=l5.Symbol,s0=ga;var fr=Object.prototype,_a=fr.hasOwnProperty,Sa=fr.toString,H4=s0?s0.toStringTag:void 0;function Za(r){var t=_a.call(r,H4),e=r[H4];try{r[H4]=void 0;var C=!0}catch{}var i=Sa.call(r);return C&&(t?r[H4]=e:delete r[H4]),i}var vr=Za;var wa=Object.prototype,ba=wa.toString;function ya(r){return ba.call(r)}var xr=ya;var Oa="[object Null]",ka="[object Undefined]",gr=s0?s0.toStringTag:void 0;function Ta(r){return r==null?r===void 0?ka:Oa:gr&&gr in Object(r)?vr(r):xr(r)}var W5=Ta;function Pa(r){return r!=null&&typeof r=="object"}var c5=Pa;var Fa="[object Symbol]";function Ea(r){return typeof r=="symbol"||c5(r)&&W5(r)==Fa}var F9=Ea;function Ba(r,t){for(var e=-1,C=r==null?0:r.length,i=Array(C);++e<C;)i[e]=t(r[e],e,r);return i}var _r=Ba;var Ra=Array.isArray,f3=Ra;var Da=1/0,Sr=s0?s0.prototype:void 0,Zr=Sr?Sr.toString:void 0;function wr(r){if(typeof r=="string")return r;if(f3(r))return _r(r,wr)+"";if(F9(r))return Zr?Zr.call(r):"";var t=r+"";return t=="0"&&1/r==-Da?"-0":t}var br=wr;var $a=/\s/;function Ia(r){for(var t=r.length;t--&&$a.test(r.charAt(t)););return t}var yr=Ia;var za=/^\s+/;function Na(r){return r&&r.slice(0,yr(r)+1).replace(za,"")}var Or=Na;function Wa(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var y2=Wa;var kr=NaN,Ua=/^[-+]0x[0-9a-f]+$/i,ja=/^0b[01]+$/i,Ga=/^0o[0-7]+$/i,qa=parseInt;function Ya(r){if(typeof r=="number")return r;if(F9(r))return kr;if(y2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=y2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Or(r);var e=ja.test(r);return e||Ga.test(r)?qa(r.slice(2),e?2:8):Ua.test(r)?kr:+r}var Tr=Ya;var Pr=1/0,Qa=17976931348623157e292;function Ka(r){if(!r)return r===0?r:0;if(r=Tr(r),r===Pr||r===-Pr){var t=r<0?-1:1;return t*Qa}return r===r?r:0}var z8=Ka;function Xa(r){return r}var E9=Xa;var Ja="[object AsyncFunction]",tn="[object Function]",en="[object GeneratorFunction]",rn="[object Proxy]";function Cn(r){if(!y2(r))return!1;var t=W5(r);return t==tn||t==en||t==Ja||t==rn}var e7=Cn;var on=l5["__core-js_shared__"],B9=on;var Fr=(function(){var r=/[^.]+$/.exec(B9&&B9.keys&&B9.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function Hn(r){return!!Fr&&Fr in r}var Er=Hn;var Vn=Function.prototype,an=Vn.toString;function nn(r){if(r!=null){try{return an.call(r)}catch{}try{return r+""}catch{}}return""}var Br=nn;var Ln=/[\\^$.*+?()[\]{}|]/g,sn=/^\[object .+?Constructor\]$/,Mn=Function.prototype,ln=Object.prototype,cn=Mn.toString,dn=ln.hasOwnProperty,pn=RegExp("^"+cn.call(dn).replace(Ln,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function un(r){if(!y2(r)||Er(r))return!1;var t=e7(r)?pn:sn;return t.test(Br(r))}var Rr=un;function mn(r,t){return r?.[t]}var Dr=mn;function hn(r,t){var e=Dr(r,t);return Rr(e)?e:void 0}var r7=hn;var $r=Object.create,An=(function(){function r(){}return function(t){if(!y2(t))return{};if($r)return $r(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),Ir=An;function fn(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var zr=fn;function vn(r,t){var e=-1,C=r.length;for(t||(t=Array(C));++e<C;)t[e]=r[e];return t}var Nr=vn;var xn=800,gn=16,_n=Date.now;function Sn(r){var t=0,e=0;return function(){var C=_n(),i=gn-(C-e);if(e=C,i>0){if(++t>=xn)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var Wr=Sn;function Zn(r){return function(){return r}}var Ur=Zn;var wn=(function(){try{var r=r7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),C7=wn;var bn=C7?function(r,t){return C7(r,"toString",{configurable:!0,enumerable:!1,value:Ur(t),writable:!0})}:E9,jr=bn;var yn=Wr(jr),Gr=yn;var On=9007199254740991,kn=/^(?:0|[1-9]\d*)$/;function Tn(r,t){var e=typeof r;return t=t??On,!!t&&(e=="number"||e!="symbol"&&kn.test(r))&&r>-1&&r%1==0&&r<t}var R9=Tn;function Pn(r,t,e){t=="__proto__"&&C7?C7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var i7=Pn;function Fn(r,t){return r===t||r!==r&&t!==t}var F0=Fn;var En=Object.prototype,Bn=En.hasOwnProperty;function Rn(r,t,e){var C=r[t];(!(Bn.call(r,t)&&F0(C,e))||e===void 0&&!(t in r))&&i7(r,t,e)}var qr=Rn;function Dn(r,t,e,C){var i=!e;e||(e={});for(var H=-1,V=t.length;++H<V;){var n=t[H],s=C?C(e[n],r[n],n,e,r):void 0;s===void 0&&(s=r[n]),i?i7(e,n,s):qr(e,n,s)}return e}var Yr=Dn;var Qr=Math.max;function $n(r,t,e){return t=Qr(t===void 0?r.length-1:t,0),function(){for(var C=arguments,i=-1,H=Qr(C.length-t,0),V=Array(H);++i<H;)V[i]=C[t+i];i=-1;for(var n=Array(t+1);++i<t;)n[i]=C[i];return n[t]=e(V),zr(r,this,n)}}var Kr=$n;function In(r,t){return Gr(Kr(r,t,E9),r+"")}var Xr=In;var zn=9007199254740991;function Nn(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=zn}var D9=Nn;function Wn(r){return r!=null&&D9(r.length)&&!e7(r)}var o7=Wn;function Un(r,t,e){if(!y2(e))return!1;var C=typeof t;return(C=="number"?o7(e)&&R9(t,e.length):C=="string"&&t in e)?F0(e[t],r):!1}var $9=Un;function jn(r){return Xr(function(t,e){var C=-1,i=e.length,H=i>1?e[i-1]:void 0,V=i>2?e[2]:void 0;for(H=r.length>3&&typeof H=="function"?(i--,H):void 0,V&&$9(e[0],e[1],V)&&(H=i<3?void 0:H,i=1),t=Object(t);++C<i;){var n=e[C];n&&r(t,n,C,H)}return t})}var Jr=jn;var Gn=Object.prototype;function qn(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||Gn;return r===e}var I9=qn;function Yn(r,t){for(var e=-1,C=Array(r);++e<r;)C[e]=t(e);return C}var tC=Yn;var Qn="[object Arguments]";function Kn(r){return c5(r)&&W5(r)==Qn}var N8=Kn;var eC=Object.prototype,Xn=eC.hasOwnProperty,Jn=eC.propertyIsEnumerable,tL=N8((function(){return arguments})())?N8:function(r){return c5(r)&&Xn.call(r,"callee")&&!Jn.call(r,"callee")},V4=tL;function eL(){return!1}var rC=eL;var oC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,CC=oC&&typeof module=="object"&&module&&!module.nodeType&&module,rL=CC&&CC.exports===oC,iC=rL?l5.Buffer:void 0,CL=iC?iC.isBuffer:void 0,iL=CL||rC,z9=iL;var oL="[object Arguments]",HL="[object Array]",VL="[object Boolean]",aL="[object Date]",nL="[object Error]",LL="[object Function]",sL="[object Map]",ML="[object Number]",lL="[object Object]",cL="[object RegExp]",dL="[object Set]",pL="[object String]",uL="[object WeakMap]",mL="[object ArrayBuffer]",hL="[object DataView]",AL="[object Float32Array]",fL="[object Float64Array]",vL="[object Int8Array]",xL="[object Int16Array]",gL="[object Int32Array]",_L="[object Uint8Array]",SL="[object Uint8ClampedArray]",ZL="[object Uint16Array]",wL="[object Uint32Array]",r2={};r2[AL]=r2[fL]=r2[vL]=r2[xL]=r2[gL]=r2[_L]=r2[SL]=r2[ZL]=r2[wL]=!0;r2[oL]=r2[HL]=r2[mL]=r2[VL]=r2[hL]=r2[aL]=r2[nL]=r2[LL]=r2[sL]=r2[ML]=r2[lL]=r2[cL]=r2[dL]=r2[pL]=r2[uL]=!1;function bL(r){return c5(r)&&D9(r.length)&&!!r2[W5(r)]}var HC=bL;function yL(r){return function(t){return r(t)}}var VC=yL;var aC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,a4=aC&&typeof module=="object"&&module&&!module.nodeType&&module,OL=a4&&a4.exports===aC,W8=OL&&P9.process,kL=(function(){try{var r=a4&&a4.require&&a4.require("util").types;return r||W8&&W8.binding&&W8.binding("util")}catch{}})(),U8=kL;var nC=U8&&U8.isTypedArray,TL=nC?VC(nC):HC,N9=TL;var PL=Object.prototype,FL=PL.hasOwnProperty;function EL(r,t){var e=f3(r),C=!e&&V4(r),i=!e&&!C&&z9(r),H=!e&&!C&&!i&&N9(r),V=e||C||i||H,n=V?tC(r.length,String):[],s=n.length;for(var c in r)(t||FL.call(r,c))&&!(V&&(c=="length"||i&&(c=="offset"||c=="parent")||H&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||R9(c,s)))&&n.push(c);return n}var LC=EL;function BL(r,t){return function(e){return r(t(e))}}var sC=BL;function RL(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var MC=RL;var DL=Object.prototype,$L=DL.hasOwnProperty;function IL(r){if(!y2(r))return MC(r);var t=I9(r),e=[];for(var C in r)C=="constructor"&&(t||!$L.call(r,C))||e.push(C);return e}var lC=IL;function zL(r){return o7(r)?LC(r,!0):lC(r)}var W9=zL;var NL=r7(Object,"create"),M0=NL;function WL(){this.__data__=M0?M0(null):{},this.size=0}var cC=WL;function UL(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var dC=UL;var jL="__lodash_hash_undefined__",GL=Object.prototype,qL=GL.hasOwnProperty;function YL(r){var t=this.__data__;if(M0){var e=t[r];return e===jL?void 0:e}return qL.call(t,r)?t[r]:void 0}var pC=YL;var QL=Object.prototype,KL=QL.hasOwnProperty;function XL(r){var t=this.__data__;return M0?t[r]!==void 0:KL.call(t,r)}var uC=XL;var JL="__lodash_hash_undefined__";function ts(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=M0&&t===void 0?JL:t,this}var mC=ts;function H7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var C=r[t];this.set(C[0],C[1])}}H7.prototype.clear=cC;H7.prototype.delete=dC;H7.prototype.get=pC;H7.prototype.has=uC;H7.prototype.set=mC;var j8=H7;function es(){this.__data__=[],this.size=0}var hC=es;function rs(r,t){for(var e=r.length;e--;)if(F0(r[e][0],t))return e;return-1}var E0=rs;var Cs=Array.prototype,is=Cs.splice;function os(r){var t=this.__data__,e=E0(t,r);if(e<0)return!1;var C=t.length-1;return e==C?t.pop():is.call(t,e,1),--this.size,!0}var AC=os;function Hs(r){var t=this.__data__,e=E0(t,r);return e<0?void 0:t[e][1]}var fC=Hs;function Vs(r){return E0(this.__data__,r)>-1}var vC=Vs;function as(r,t){var e=this.__data__,C=E0(e,r);return C<0?(++this.size,e.push([r,t])):e[C][1]=t,this}var xC=as;function V7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var C=r[t];this.set(C[0],C[1])}}V7.prototype.clear=hC;V7.prototype.delete=AC;V7.prototype.get=fC;V7.prototype.has=vC;V7.prototype.set=xC;var B0=V7;var ns=r7(l5,"Map"),U9=ns;function Ls(){this.size=0,this.__data__={hash:new j8,map:new(U9||B0),string:new j8}}var gC=Ls;function ss(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var _C=ss;function Ms(r,t){var e=r.__data__;return _C(t)?e[typeof t=="string"?"string":"hash"]:e.map}var R0=Ms;function ls(r){var t=R0(this,r).delete(r);return this.size-=t?1:0,t}var SC=ls;function cs(r){return R0(this,r).get(r)}var ZC=cs;function ds(r){return R0(this,r).has(r)}var wC=ds;function ps(r,t){var e=R0(this,r),C=e.size;return e.set(r,t),this.size+=e.size==C?0:1,this}var bC=ps;function a7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var C=r[t];this.set(C[0],C[1])}}a7.prototype.clear=gC;a7.prototype.delete=SC;a7.prototype.get=ZC;a7.prototype.has=wC;a7.prototype.set=bC;var yC=a7;function us(r){return r==null?"":br(r)}var j9=us;var ms=sC(Object.getPrototypeOf,Object),G9=ms;var hs="[object Object]",As=Function.prototype,fs=Object.prototype,OC=As.toString,vs=fs.hasOwnProperty,xs=OC.call(Object);function gs(r){if(!c5(r)||W5(r)!=hs)return!1;var t=G9(r);if(t===null)return!0;var e=vs.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&OC.call(e)==xs}var kC=gs;function _s(r,t,e){var C=-1,i=r.length;t<0&&(t=-t>i?0:i+t),e=e>i?i:e,e<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var H=Array(i);++C<i;)H[C]=r[C+t];return H}var TC=_s;function Ss(r,t,e){var C=r.length;return e=e===void 0?C:e,!t&&e>=C?r:TC(r,t,e)}var PC=Ss;var Zs="\\ud800-\\udfff",ws="\\u0300-\\u036f",bs="\\ufe20-\\ufe2f",ys="\\u20d0-\\u20ff",Os=ws+bs+ys,ks="\\ufe0e\\ufe0f",Ts="\\u200d",Ps=RegExp("["+Ts+Zs+Os+ks+"]");function Fs(r){return Ps.test(r)}var q9=Fs;function Es(r){return r.split("")}var FC=Es;var EC="\\ud800-\\udfff",Bs="\\u0300-\\u036f",Rs="\\ufe20-\\ufe2f",Ds="\\u20d0-\\u20ff",$s=Bs+Rs+Ds,Is="\\ufe0e\\ufe0f",zs="["+EC+"]",G8="["+$s+"]",q8="\\ud83c[\\udffb-\\udfff]",Ns="(?:"+G8+"|"+q8+")",BC="[^"+EC+"]",RC="(?:\\ud83c[\\udde6-\\uddff]){2}",DC="[\\ud800-\\udbff][\\udc00-\\udfff]",Ws="\\u200d",$C=Ns+"?",IC="["+Is+"]?",Us="(?:"+Ws+"(?:"+[BC,RC,DC].join("|")+")"+IC+$C+")*",js=IC+$C+Us,Gs="(?:"+[BC+G8+"?",G8,RC,DC,zs].join("|")+")",qs=RegExp(q8+"(?="+q8+")|"+Gs+js,"g");function Ys(r){return r.match(qs)||[]}var zC=Ys;function Qs(r){return q9(r)?zC(r):FC(r)}var NC=Qs;function Ks(r){return function(t){t=j9(t);var e=q9(t)?NC(t):void 0,C=e?e[0]:t.charAt(0),i=e?PC(e,1).join(""):t.slice(1);return C[r]()+i}}var WC=Ks;var Xs=WC("toUpperCase"),UC=Xs;function Js(r){return UC(j9(r).toLowerCase())}var d5=Js;function tM(){this.__data__=new B0,this.size=0}var jC=tM;function eM(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var GC=eM;function rM(r){return this.__data__.get(r)}var qC=rM;function CM(r){return this.__data__.has(r)}var YC=CM;var iM=200;function oM(r,t){var e=this.__data__;if(e instanceof B0){var C=e.__data__;if(!U9||C.length<iM-1)return C.push([r,t]),this.size=++e.size,this;e=this.__data__=new yC(C)}return e.set(r,t),this.size=e.size,this}var QC=oM;function n7(r){var t=this.__data__=new B0(r);this.size=t.size}n7.prototype.clear=jC;n7.prototype.delete=GC;n7.prototype.get=qC;n7.prototype.has=YC;n7.prototype.set=QC;var KC=n7;var ei=typeof exports=="object"&&exports&&!exports.nodeType&&exports,XC=ei&&typeof module=="object"&&module&&!module.nodeType&&module,HM=XC&&XC.exports===ei,JC=HM?l5.Buffer:void 0,ti=JC?JC.allocUnsafe:void 0;function VM(r,t){if(t)return r.slice();var e=r.length,C=ti?ti(e):new r.constructor(e);return r.copy(C),C}var ri=VM;var aM=l5.Uint8Array,Y8=aM;function nM(r){var t=new r.constructor(r.byteLength);return new Y8(t).set(new Y8(r)),t}var Ci=nM;function LM(r,t){var e=t?Ci(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var ii=LM;function sM(r){return typeof r.constructor=="function"&&!I9(r)?Ir(G9(r)):{}}var oi=sM;function MM(r){return function(t,e,C){for(var i=-1,H=Object(t),V=C(t),n=V.length;n--;){var s=V[r?n:++i];if(e(H[s],s,H)===!1)break}return t}}var Hi=MM;var lM=Hi(),Vi=lM;function cM(r,t,e){(e!==void 0&&!F0(r[t],e)||e===void 0&&!(t in r))&&i7(r,t,e)}var n4=cM;function dM(r){return c5(r)&&o7(r)}var ai=dM;function pM(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var L4=pM;function uM(r){return Yr(r,W9(r))}var ni=uM;function mM(r,t,e,C,i,H,V){var n=L4(r,e),s=L4(t,e),c=V.get(s);if(c){n4(r,e,c);return}var u=H?H(n,s,e+"",r,t,V):void 0,A=u===void 0;if(A){var v=f3(s),_=!v&&z9(s),b=!v&&!_&&N9(s);u=s,v||_||b?f3(n)?u=n:ai(n)?u=Nr(n):_?(A=!1,u=ri(s,!0)):b?(A=!1,u=ii(s,!0)):u=[]:kC(s)||V4(s)?(u=n,V4(n)?u=ni(n):(!y2(n)||e7(n))&&(u=oi(s))):A=!1}A&&(V.set(s,u),i(u,s,C,H,V),V.delete(s)),n4(r,e,u)}var Li=mM;function si(r,t,e,C,i){r!==t&&Vi(t,function(H,V){if(i||(i=new KC),y2(H))Li(r,t,V,e,si,C,i);else{var n=C?C(L4(r,V),H,V+"",r,t,i):void 0;n===void 0&&(n=H),n4(r,V,n)}},W9)}var Mi=si;var hM=Jr(function(r,t,e){Mi(r,t,e)}),v3=hM;var AM=Math.floor,fM=Math.random;function vM(r,t){return r+AM(fM()*(t-r+1))}var li=vM;var xM=parseFloat,gM=Math.min,_M=Math.random;function SM(r,t,e){if(e&&typeof e!="boolean"&&$9(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=z8(r),t===void 0?(t=r,r=0):t=z8(t)),r>t){var C=r;r=t,t=C}if(e||r%1||t%1){var i=_M();return gM(r+i*(t-r+xM("1e-"+((i+"").length-1))),t)}return li(r,t)}var D1=SM;var H2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var ZM={attribute:!0,type:String,converter:Q7,reflect:!1,hasChanged:k9},wM=(r=ZM,t,e)=>{let{kind:C,metadata:i}=e,H=globalThis.litPropertyMetadata.get(i);if(H===void 0&&globalThis.litPropertyMetadata.set(i,H=new Map),C==="setter"&&((r=Object.create(r)).wrapped=!0),H.set(e.name,r),C==="accessor"){let{name:V}=e;return{set(n){let s=t.get.call(this);t.set.call(this,n),this.requestUpdate(V,s,r,!0,n)},init(n){return n!==void 0&&this.C(V,void 0,r,n),n}}}if(C==="setter"){let{name:V}=e;return function(n){let s=this[V];t.call(this,n),this.requestUpdate(V,s,r,!0,n)}}throw Error("Unsupported decorator location: "+C)};function t1(r){return(t,e)=>typeof e=="object"?wM(r,t,e):((C,i,H)=>{let V=i.hasOwnProperty(H);return i.constructor.createProperty(H,C),V?Object.getOwnPropertyDescriptor(i,H):void 0})(r,t,e)}function I2(r){return t1({...r,state:!0,attribute:!1})}var x3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function s4(r,t){return(e,C,i)=>{let H=V=>V.renderRoot?.querySelector(r)??null;if(t){let{get:V,set:n}=typeof C=="object"?e:i??(()=>{let s=Symbol();return{get(){return this[s]},set(c){this[s]=c}}})();return x3(e,C,{get(){let s=V.call(this);return s===void 0&&(s=H(this),(s!==null||this.hasUpdated)&&n.call(this,s)),s}})}return x3(e,C,{get(){return H(this)}})}}var ci=`:host {
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
`;var di=e2`
  ${n0(ci)}
`;var g3,_3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(g3||(g3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(_3||(_3={}));function ui(){return(ui=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&(r[C]=e[C])}return r}).apply(this,arguments)}function yM(r){return r.substr(0,r.indexOf("."))}var OM=function(r){switch(r.number_format){case g3.comma_decimal:return["en-US","en"];case g3.decimal_comma:return["de","es","it"];case g3.space_comma:return["fr","sv","cs"];case g3.system:return;default:return r.language}},kM=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},Q8=function(r,t,e){var C=t?OM(t):void 0;if(Number.isNaN=Number.isNaN||function i(H){return typeof H=="number"&&i(H)},t?.number_format!==g3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(C,pi(r,e)).format(Number(r))}catch(i){return console.error(i),new Intl.NumberFormat(void 0,pi(r,e)).format(Number(r))}return typeof r=="string"?r:kM(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},pi=function(r,t){var e=ui({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var C=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=C,e.maximumFractionDigits=C}return e};var TM=["closed","locked","off"];var C2=function(r,t,e,C){C=C||{},e=e??{};var i=new Event(t,{bubbles:C.bubbles===void 0||C.bubbles,cancelable:!!C.cancelable,composed:C.composed===void 0||C.composed});return i.detail=e,r.dispatchEvent(i),i};var Y9=function(r){C2(window,"haptic",r)},PM=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),C2(window,"location-changed",{replace:e})},FM=function(r,t,e){e===void 0&&(e=!0);var C,i=yM(t),H=i==="group"?"homeassistant":i;switch(i){case"lock":C=e?"unlock":"lock";break;case"cover":C=e?"open_cover":"close_cover";break;default:C=e?"turn_on":"turn_off"}return r.callService(H,C,{entity_id:t})},EM=function(r,t){var e=TM.includes(r.states[t].state);return FM(r,t,e)},BM=function(r,t,e,C){if(C||(C={action:"more-info"}),!C.confirmation||C.confirmation.exemptions&&C.confirmation.exemptions.some(function(H){return H.user===t.user.id})||(Y9("warning"),confirm(C.confirmation.text||"Are you sure you want to "+C.action+"?")))switch(C.action){case"more-info":(e.entity||e.camera_image)&&C2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":C.navigation_path&&PM(0,C.navigation_path);break;case"url":C.url_path&&window.open(C.url_path);break;case"toggle":e.entity&&(EM(t,e.entity),Y9("success"));break;case"call-service":if(!C.service)return void Y9("failure");var i=C.service.split(".",2);t.callService(i[0],i[1],C.service_data,C.target),Y9("success");break;case"fire-dom-event":C2(r,"ll-custom",C)}},M4=function(r,t,e,C){var i;C==="double_tap"&&e.double_tap_action?i=e.double_tap_action:C==="hold"&&e.hold_action?i=e.hold_action:C==="tap"&&e.tap_action&&(i=e.tap_action),BM(r,t,e,i)};function l0(r){return r!==void 0&&r.action!=="none"}function mi(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var C=t.get("hass");return!C||C.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var hi="NOT_RUNNING";var K9=b9(Q9(),1);var fi=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function RM(r,t){return!!(r===t||fi(r)&&fi(t))}function DM(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!RM(r[e],t[e]))return!1;return!0}function D0(r,t){t===void 0&&(t=DM);var e=null;function C(){for(var i=[],H=0;H<arguments.length;H++)i[H]=arguments[H];if(e&&e.lastThis===this&&t(i,e.lastArgs))return e.lastResult;var V=r.apply(this,i);return e={lastResult:V,lastArgs:i,lastThis:this},V}return C.clear=function(){e=null},C}var vi=(r,t)=>r?r.config.state!==hi?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",$0=(r,t)=>s7(t).toLocaleDateString(S3(r),{weekday:"short"}),xi=(r,t)=>s7(t).toLocaleDateString(S3(r),{day:"numeric"}),gi=(r,t)=>{let e=s7(t),C=S3(r),i=X9(r);try{let u=new Intl.DateTimeFormat(C,{hour:"numeric",hour12:i}).formatToParts(e),A=u.find(_=>_.type==="hour"),v=u.find(_=>_.type==="dayPeriod");if(A){if(v)return{hour:A.value,suffix:v.value};let _=u.indexOf(A),b=u.slice(_+1).filter(y=>y.type==="literal").map(y=>y.value).join("");return b&&b.trim()?{hour:A.value,suffix:b.trim()}:{hour:A.value}}}catch{}let H=e.toLocaleTimeString(C,{hour:"numeric",hour12:i}),V=H.match(/\d+/),n=V?V[0]:H,s=H.replace(/\d+\s*/,"").trim();return s?{hour:n,suffix:s}:{hour:n}},_i=(r,t)=>{let e=s7(t),C=S3(r),i=X9(r);try{let u=new Intl.DateTimeFormat(C,{hour:"numeric",minute:"2-digit",hour12:i}).formatToParts(e),A=u.find(b=>b.type==="hour"),v=u.find(b=>b.type==="minute"),_=u.find(b=>b.type==="dayPeriod");if(A&&v){let b=u.indexOf(A),y=u.indexOf(v),k=u.slice(b+1,y).map(I=>I.value).join(""),P=`${A.value}${k}${v.value}`;if(_)return{time:P,suffix:_.value};let $=u.slice(y+1).filter(I=>I.type==="literal").map(I=>I.value).join("");return $&&$.trim()?{time:P,suffix:$.trim()}:{time:P}}}catch{}let H=e.toLocaleTimeString(C,{hour:"numeric",minute:"2-digit",hour12:i}),V=H.match(/\d+[:.]\d+/),n=V?V[0]:H,s=H.replace(/\d+[:.]\d+\s*/,"").trim();return s?{time:n,suffix:s}:{time:n}},L7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},X9=D0(r=>{let t=r?.locale;if(t?.time_format===_3.language||t?.time_format===_3.system){let e=t.time_format===_3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===_3.am_pm}),S3=r=>r?.locale?.language||navigator.language||"en",s7=r=>typeof r=="string"?new Date(r):r,c0=(r,t)=>{let{latitude:e,longitude:C}=r?.config||{};if(!e||!C)return null;let i=s7(t),H=K9.getTimes(i,e,C);return{sunrise:H.sunrise,sunset:H.sunset,isNightTime:i<H.sunrise||i>H.sunset}},Si=(r,t)=>{let e=s7(t),{fraction:C,phase:i}=K9.getMoonIllumination(e),H=i<=.5,V=(r?.config?.latitude??0)<0;return{fraction:C,litRight:H!==V}},Zi=(r,t)=>{let e=Math.min(1,Math.max(0,r)),C=(50*Math.abs(1-2*e)).toFixed(2),i=e<.5,H=t===i?0:1,V=t?-60:160;return`M50 0 L${V} 0 L${V} 100 L50 100 A${C} 50 0 0 ${H} 50 0 Z`},J8=(r,t)=>{let e=Math.min(1,Math.max(0,r)),C=(50*Math.abs(1-2*e)).toFixed(2),i=t?1:0,H=e<.5;return`M50 0 A50 50 0 0 ${i} 50 100 A${C} 50 0 0 ${t===H?0:1} 50 0 Z`},M7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,wi=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},X8=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},bi=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let C=X8(t.secondary_info_attribute);C&&e.add(C);let i=t.show_attributes;if(Array.isArray(i))for(let H of i){let V=X8(H);V&&e.add(V)}else{let H=X8(i);H&&e.add(H)}return e.delete(r.entity),[...e]};var k2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},Ct={silent:{level:-1},fatal:{level:k2.fatal},error:{level:k2.error},warn:{level:k2.warn},log:{level:k2.log},info:{level:k2.info},success:{level:k2.success},fail:{level:k2.fail},ready:{level:k2.info},start:{level:k2.info},box:{level:k2.info},debug:{level:k2.debug},trace:{level:k2.trace},verbose:{level:k2.verbose}};function tt(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function it(r,t,e=".",C){if(!tt(t))return it(r,{},e,C);let i=Object.assign({},t);for(let H in r){if(H==="__proto__"||H==="constructor")continue;let V=r[H];V!=null&&(C&&C(i,H,V,e)||(Array.isArray(V)&&Array.isArray(i[H])?i[H]=[...V,...i[H]]:tt(V)&&tt(i[H])?i[H]=it(V,i[H],(e?`${e}.`:"")+H.toString(),C):i[H]=V))}return i}function $M(r){return(...t)=>t.reduce((e,C)=>it(e,C,"",r),{})}var IM=$M();function zM(r){return Object.prototype.toString.call(r)==="[object Object]"}function NM(r){return!(!zM(r)||!r.message&&!r.args||r.stack)}var et=!1,yi=[],v2=class r{constructor(t={}){Q(this,"options");Q(this,"_lastLog");Q(this,"_mockFn");let e=t.types||Ct;this.options=IM({...t,defaults:{...t.defaults},level:rt(t.level,e),reporters:[...t.reporters||[]]},{types:Ct,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let C in e){let i={type:C,...this.options.defaults,...e[C]};this[C]=this._wrapLogFn(i),this[C].raw=this._wrapLogFn(i,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=rt(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=C=>{this[e].raw(String(C).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){et=!0}resumeLogs(){et=!1;let t=yi.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let C in this.options.types)this[C]=e(C,this.options.types[C])||this[C],this[C].raw=this[C]}_wrapLogFn(t,e){return(...C)=>{if(et){yi.push([this,t,C,e]);return}return this._logFn(t,C,e)}}_logFn(t,e,C){if((t.level||0)>this.level)return!1;let i={date:new Date,args:[],...t,level:rt(t.level,this.options.types)};!C&&e.length===1&&NM(e[0])?Object.assign(i,e[0]):i.args=[...e],i.message&&(i.args.unshift(i.message),delete i.message),i.additional&&(Array.isArray(i.additional)||(i.additional=i.additional.split(`
`)),i.args.push(`
`+i.additional.join(`
`)),delete i.additional),i.type=typeof i.type=="string"?i.type.toLowerCase():"log",i.tag=typeof i.tag=="string"?i.tag:"";let H=(n=!1)=>{let s=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&s>0){let c=[...this._lastLog.object.args];s>1&&c.push(`(repeated ${s} times)`),this._log({...this._lastLog.object,args:c}),this._lastLog.count=1}n&&(this._lastLog.object=i,this._log(i))};clearTimeout(this._lastLog.timeout);let V=this._lastLog.time&&i.date?i.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=i.date,V<this.options.throttle)try{let n=JSON.stringify([i.type,i.tag,i.args]),s=this._lastLog.serialized===n;if(this._lastLog.serialized=n,s&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(H,this.options.throttle);return}}catch{}H(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function rt(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}v2.prototype.add=v2.prototype.addReporter;v2.prototype.remove=v2.prototype.removeReporter;v2.prototype.clear=v2.prototype.removeReporter;v2.prototype.withScope=v2.prototype.withTag;v2.prototype.mock=v2.prototype.mockTypes;v2.prototype.pause=v2.prototype.pauseLogs;v2.prototype.resume=v2.prototype.resumeLogs;function Oi(r={}){return new v2(r)}var ot=class{constructor(t){Q(this,"options");Q(this,"defaultColor");Q(this,"levelColorMap");Q(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),C=t.type==="log"?"":t.type,i=t.tag||"",V=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,n=`%c${[i,C].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${n}%c ${t.args[0]}`,V,"",...t.args.slice(1)):e(n,V,...t.args)}};function Ht(r={}){return Oi({reporters:r.reporters||[new ot({})],prompt(e,C={}){return C.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var o_=Ht();var WM=k2.info,_5=Ht({level:WM}).withTag("weather-forecast-card");var ki=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",Vt=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var J9={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l7=r=>(...t)=>({_$litDirective$:r,values:t}),I0=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,C){this._$Ct=t,this._$AM=e,this._$Ci=C}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Ti="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,at=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ti?"100px":"50px",height:Ti?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,C){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",n=>{let s=n||window.event;return s.preventDefault&&s.preventDefault(),s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0,s.returnValue=!1,!1});let i=n=>{this.held=!1;let s,c;n.touches?(s=n.touches[0].pageX,c=n.touches[0].pageY):(s=n.pageX,c=n.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(s,c),this.held=!0},this.holdTime)},H=n=>{n.preventDefault(),C.stopPropagation&&n.stopPropagation(),!(["touchend","touchcancel"].includes(n.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?C2(e,"action",{action:"hold"},{bubbles:!C.stopPropagation}):C.hasDoubleClick?n.type==="click"&&n.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,C2(e,"action",{action:"tap"},{bubbles:!C.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,C2(e,"action",{action:"double_tap"},{bubbles:!C.stopPropagation})):C2(e,"action",{action:"tap"},{bubbles:!C.stopPropagation}))},V=n=>{n.keyCode===13&&H(n)};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",H),e.addEventListener("touchcancel",H),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",H),e.addEventListener("keyup",V)}startAnimation(e,C){Object.assign(this.style,{left:`${e}px`,top:`${C}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",at);var UM=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},jM=(r,t)=>{let e=UM();e&&e.bind(r,t)},U5=l7(class extends I0{update(r,[t]){return jM(r.element,t),C5}render(r){}});var Z3=2,T2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],t6=["rain","snow","lightning","sky","moon","sun","cloud"],e6=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],Pi="temperature_and_precipitation";var nt=(H=>(H.Temperature="temperature_unit",H.Pressure="pressure_unit",H.WindSpeed="wind_speed_unit",H.Precipitation="precipitation_unit",H.Visibility="visibility_unit",H))(nt||{}),GM=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],qM={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},S5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},YM=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return GM[e]},QM=(r,t)=>{let e=t.attributes.wind_speed,C=t.attributes.wind_bearing;if(e==null)return;let i=r.formatEntityAttributeValue(t,"wind_speed");if(C==null)return i;let H=YM(C);if(!H)return i;let V=r.localize(`ui.card.weather.cardinal_direction.${H.toLowerCase()}`)||H;return`${i} (${V})`},i5=(r,t,e)=>{let C=r.config,i=C.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||i;case"precipitation":return t.attributes.precipitation_unit||(i==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(i==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||C.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${i}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${i}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in C.unit_system?C.unit_system[e]:"")||""}},KM=288e5,XM=864e5,JM=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<KM}},tl=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<XM}},Fi=r=>{if(r?.forecast&&r.forecast.length>2)return JM(r.forecast)?{forecast:r.forecast,type:"hourly"}:tl(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},Lt=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:Fi(r);if(e==="legacy")return Fi(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},Ei=(r,t,e,C)=>r.connection.subscribeMessage(C,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var Bi=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,Ri=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,C=(t&2)!==0,i=(t&4)!==0;return e||C||i},l4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let i={hourly:2,daily:1,twice_daily:4}[t];return(e&i)!==0},p5=r=>{if(l4(r,"daily"))return"daily";if(l4(r,"twice_daily"))return"twice_daily"},Di=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},c7=D0((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let C=e/25.4;return parseFloat(C.toFixed(1))}return e}),c4=(r,t,e)=>{if(e.wind_speed===void 0)return;let C=i5(r,t,"wind_speed");return el(e.wind_speed,C)},el=(r,t)=>{let C={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*C},r6=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return qM[e]}}},$i=(r,t)=>{let e=[],C=0;for(;C<r.length;){let H=new Date(r[C].datetime).getHours()%t,V=H===0?t:t-H,n=r.slice(C,C+V);if(C+=n.length,n.length===0)continue;let s=n.map(I=>I.temperature),c=n.map(I=>I.humidity).filter(I=>I!==void 0),u=n.map(I=>I.pressure).filter(I=>I!==void 0),A=n.map(I=>I.wind_speed).filter(I=>I!==void 0),v=n.map(I=>I.wind_bearing).filter(I=>I!==void 0),_=n.map(I=>I.precipitation_probability).filter(I=>I!==void 0),b=n.map(I=>I.uv_index).filter(I=>I!==void 0),y=n.map(I=>I.apparent_temperature).filter(I=>I!==void 0),k=new Date(n[n.length-1].datetime);k.setMinutes(59),k.setSeconds(59);let P={datetime:n[0].datetime,groupEndtime:k.toISOString(),condition:il(n),temperature:parseFloat(M7(s).toFixed(1))};c.length>0&&(P.humidity=Math.round(M7(c))),_.length>0&&(P.precipitation_probability=Math.max(..._)),n.some(I=>I.precipitation!==void 0)&&(P.precipitation=n.reduce((I,X)=>I+(X.precipitation||0),0));let $=n.map(I=>I.templow).filter(I=>I!==void 0);$.length>0&&(P.templow=Math.min(...$)),u.length>0&&(P.pressure=Math.round(M7(u))),A.length>0&&(P.wind_speed=M7(A)),v.length>0&&(P.wind_bearing=Cl(v)),b.length>0&&(P.uv_index=Math.max(...b)),y.length>0&&(P.apparent_temperature=parseFloat(M7(y).toFixed(1))),e.push(P)}return e},rl="mdi:gauge",Ii=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?S5[r]:void 0)??rl),d7=(r,t,e,C)=>{let i=t.attributes[C];if(i!==void 0){if(C==="wind_speed")return QM(r,t);if(C==="wind_gust_speed"){let H=i5(r,t,"wind_gust_speed");return`${Q8(i,r.locale)} ${H}`}if(C==="ozone"){let H=i5(r,t,"ozone");return`${i} ${H}`}return C==="apparent_temperature"||C==="dew_point"?j5(r,t,i,e.current?.temperature_precision):r.formatEntityAttributeValue(t,C)}},C6=(r,t,e,C,i)=>{let H=r.states[i];if(!H)return;let V=H.state;return V===void 0?void 0:C==="apparent_temperature"||C==="dew_point"?j5(r,t,V,e.current?.temperature_precision):r.formatEntityState(H)},j5=(r,t,e,C,i)=>{let H=C!=null?{maximumFractionDigits:C,minimumFractionDigits:C}:void 0,V=i5(r,t,"temperature"),n=typeof e=="string"?parseFloat(e):e;return isNaN(n)?`${e}${i?"":V}`:`${Q8(n,r.locale,H)}${i?"":V}`},Cl=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(n=>{let s=n*Math.PI/180;t+=Math.sin(s),e+=Math.cos(s)});let C=t/r.length,i=e/r.length,V=Math.atan2(C,i)*180/Math.PI;return V<0&&(V+=360),Math.round(V)},il=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,C)=>{let i=t.indexOf(e.condition||"exceptional"),H=t.indexOf(C.condition||"exceptional");return i===-1&&(i=0),H===-1&&(H=0),i-H}),r[0]?.condition||"exceptional"};var p7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let C=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(C)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let i=this._container,H=this._state.startLeft-C;requestAnimationFrame(()=>{i&&(i.scrollLeft=H)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let C=e.getBoundingClientRect().width;if(!C||!Number.isFinite(C)){this._completeFinalize();return}let i=t.scrollLeft,H=Math.round(i/C)*C,V=500,n=performance.now(),s=u=>u*(2-u),c=u=>{let A=this._container;if(!A){this._completeFinalize();return}let v=u-n,_=Math.min(v/V,1),b=s(_);A.scrollLeft=i+(H-i)*b,_<1?this._state.momentumId=requestAnimationFrame(c):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(c)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var zi="important",ol=" !"+zi,z2=l7(class extends I0{constructor(r){if(super(r),r.type!==J9.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let C=r[e];return C==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${C};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let C of this.ft)t[C]==null&&(this.ft.delete(C),C.includes("-")?e.removeProperty(C):e[C]=null);for(let C in t){let i=t[C];if(i!=null){this.ft.add(C);let H=typeof i=="string"&&i.endsWith(ol);C.includes("-")||H?e.setProperty(C,H?i.slice(0,-11):i,H?zi:""):e[C]=i}}return C5}});var w3=l7(class extends I0{constructor(r){if(super(r),r.type!==J9.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(C=>C!=="")));for(let C in t)t[C]&&!this.nt?.has(C)&&this.st.add(C);return this.render(t)}let e=r.element.classList;for(let C of this.st)C in t||(e.remove(C),this.st.delete(C));for(let C in t){let i=!!t[C];i===this.st.has(C)||this.nt?.has(C)||(i?(e.add(C),this.st.add(C)):(e.remove(C),this.st.delete(C)))}return C5}});function u4(r){return r+.5|0}var z0=(r,t,e)=>Math.max(Math.min(r,e),t);function d4(r){return z0(u4(r*2.55),0,255)}function N0(r){return z0(u4(r*255),0,255)}function d0(r){return z0(u4(r/2.55)/100,0,1)}function Ni(r){return z0(u4(r*100),0,100)}var u5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Mt=[..."0123456789ABCDEF"],Hl=r=>Mt[r&15],Vl=r=>Mt[(r&240)>>4]+Mt[r&15],i6=r=>(r&240)>>4===(r&15),al=r=>i6(r.r)&&i6(r.g)&&i6(r.b)&&i6(r.a);function nl(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&u5[r[1]]*17,g:255&u5[r[2]]*17,b:255&u5[r[3]]*17,a:t===5?u5[r[4]]*17:255}:(t===7||t===9)&&(e={r:u5[r[1]]<<4|u5[r[2]],g:u5[r[3]]<<4|u5[r[4]],b:u5[r[5]]<<4|u5[r[6]],a:t===9?u5[r[7]]<<4|u5[r[8]]:255})),e}var Ll=(r,t)=>r<255?t(r):"";function sl(r){var t=al(r)?Hl:Vl;return r?"#"+t(r.r)+t(r.g)+t(r.b)+Ll(r.a,t):void 0}var Ml=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Gi(r,t,e){let C=t*Math.min(e,1-e),i=(H,V=(H+r/30)%12)=>e-C*Math.max(Math.min(V-3,9-V,1),-1);return[i(0),i(8),i(4)]}function ll(r,t,e){let C=(i,H=(i+r/60)%6)=>e-e*t*Math.max(Math.min(H,4-H,1),0);return[C(5),C(3),C(1)]}function cl(r,t,e){let C=Gi(r,1,.5),i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)C[i]*=1-t-e,C[i]+=t;return C}function dl(r,t,e,C,i){return r===i?(t-e)/C+(t<e?6:0):t===i?(e-r)/C+2:(r-t)/C+4}function lt(r){let e=r.r/255,C=r.g/255,i=r.b/255,H=Math.max(e,C,i),V=Math.min(e,C,i),n=(H+V)/2,s,c,u;return H!==V&&(u=H-V,c=n>.5?u/(2-H-V):u/(H+V),s=dl(e,C,i,u,H),s=s*60+.5),[s|0,c||0,n]}function ct(r,t,e,C){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,C)).map(N0)}function dt(r,t,e){return ct(Gi,r,t,e)}function pl(r,t,e){return ct(cl,r,t,e)}function ul(r,t,e){return ct(ll,r,t,e)}function qi(r){return(r%360+360)%360}function ml(r){let t=Ml.exec(r),e=255,C;if(!t)return;t[5]!==C&&(e=t[6]?d4(+t[5]):N0(+t[5]));let i=qi(+t[2]),H=+t[3]/100,V=+t[4]/100;return t[1]==="hwb"?C=pl(i,H,V):t[1]==="hsv"?C=ul(i,H,V):C=dt(i,H,V),{r:C[0],g:C[1],b:C[2],a:e}}function hl(r,t){var e=lt(r);e[0]=qi(e[0]+t),e=dt(e),r.r=e[0],r.g=e[1],r.b=e[2]}function Al(r){if(!r)return;let t=lt(r),e=t[0],C=Ni(t[1]),i=Ni(t[2]);return r.a<255?`hsla(${e}, ${C}%, ${i}%, ${d0(r.a)})`:`hsl(${e}, ${C}%, ${i}%)`}var Wi={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ui={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function fl(){let r={},t=Object.keys(Ui),e=Object.keys(Wi),C,i,H,V,n;for(C=0;C<t.length;C++){for(V=n=t[C],i=0;i<e.length;i++)H=e[i],n=n.replace(H,Wi[H]);H=parseInt(Ui[V],16),r[n]=[H>>16&255,H>>8&255,H&255]}return r}var o6;function vl(r){o6||(o6=fl(),o6.transparent=[0,0,0,0]);let t=o6[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var xl=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function gl(r){let t=xl.exec(r),e=255,C,i,H;if(t){if(t[7]!==C){let V=+t[7];e=t[8]?d4(V):z0(V*255,0,255)}return C=+t[1],i=+t[3],H=+t[5],C=255&(t[2]?d4(C):z0(C,0,255)),i=255&(t[4]?d4(i):z0(i,0,255)),H=255&(t[6]?d4(H):z0(H,0,255)),{r:C,g:i,b:H,a:e}}}function _l(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${d0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var st=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,u7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function Sl(r,t,e){let C=u7(d0(r.r)),i=u7(d0(r.g)),H=u7(d0(r.b));return{r:N0(st(C+e*(u7(d0(t.r))-C))),g:N0(st(i+e*(u7(d0(t.g))-i))),b:N0(st(H+e*(u7(d0(t.b))-H))),a:r.a+e*(t.a-r.a)}}function H6(r,t,e){if(r){let C=lt(r);C[t]=Math.max(0,Math.min(C[t]+C[t]*e,t===0?360:1)),C=dt(C),r.r=C[0],r.g=C[1],r.b=C[2]}}function Yi(r,t){return r&&Object.assign(t||{},r)}function ji(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=N0(r[3]))):(t=Yi(r,{r:0,g:0,b:0,a:1}),t.a=N0(t.a)),t}function Zl(r){return r.charAt(0)==="r"?gl(r):ml(r)}var p4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,C;e==="object"?C=ji(t):e==="string"&&(C=nl(t)||vl(t)||Zl(t)),this._rgb=C,this._valid=!!C}get valid(){return this._valid}get rgb(){var t=Yi(this._rgb);return t&&(t.a=d0(t.a)),t}set rgb(t){this._rgb=ji(t)}rgbString(){return this._valid?_l(this._rgb):void 0}hexString(){return this._valid?sl(this._rgb):void 0}hslString(){return this._valid?Al(this._rgb):void 0}mix(t,e){if(t){let C=this.rgb,i=t.rgb,H,V=e===H?.5:e,n=2*V-1,s=C.a-i.a,c=((n*s===-1?n:(n+s)/(1+n*s))+1)/2;H=1-c,C.r=255&c*C.r+H*i.r+.5,C.g=255&c*C.g+H*i.g+.5,C.b=255&c*C.b+H*i.b+.5,C.a=V*C.a+(1-V)*i.a,this.rgb=C}return this}interpolate(t,e){return t&&(this._rgb=Sl(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=N0(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=u4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return H6(this._rgb,2,t),this}darken(t){return H6(this._rgb,2,-t),this}saturate(t){return H6(this._rgb,1,t),this}desaturate(t){return H6(this._rgb,1,-t),this}rotate(t){return hl(this._rgb,t),this}};function w5(){}var ht=(()=>{let r=0;return()=>r++})();function Z1(r){return r==null}function J1(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function w1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function V2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function N2(r,t){return V2(r)?r:t}function F1(r,t){return typeof r>"u"?t:r}var At=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function K1(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function $1(r,t,e,C){let i,H,V;if(J1(r))if(H=r.length,C)for(i=H-1;i>=0;i--)t.call(e,r[i],i);else for(i=0;i<H;i++)t.call(e,r[i],i);else if(w1(r))for(V=Object.keys(r),H=V.length,i=0;i<H;i++)t.call(e,r[V[i]],V[i])}function A7(r,t){let e,C,i,H;if(!r||!t||r.length!==t.length)return!1;for(e=0,C=r.length;e<C;++e)if(i=r[e],H=t[e],i.datasetIndex!==H.datasetIndex||i.index!==H.index)return!1;return!0}function h4(r){if(J1(r))return r.map(h4);if(w1(r)){let t=Object.create(null),e=Object.keys(r),C=e.length,i=0;for(;i<C;++i)t[e[i]]=h4(r[e[i]]);return t}return r}function oo(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function Ho(r,t,e,C){if(!oo(r))return;let i=t[r],H=e[r];w1(i)&&w1(H)?o5(i,H,C):t[r]=h4(H)}function o5(r,t,e){let C=J1(t)?t:[t],i=C.length;if(!w1(r))return r;e=e||{};let H=e.merger||Ho,V;for(let n=0;n<i;++n){if(V=C[n],!w1(V))continue;let s=Object.keys(V);for(let c=0,u=s.length;c<u;++c)H(s[c],r,V,e)}return r}function O3(r,t){return o5(r,t,{merger:Vo})}function Vo(r,t,e){if(!oo(r))return;let C=t[r],i=e[r];w1(C)&&w1(i)?O3(C,i):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=h4(i))}var Qi={"":r=>r,x:r=>r.x,y:r=>r.y};function ao(r){let t=r.split("."),e=[],C="";for(let i of t)C+=i,C.endsWith("\\")?C=C.slice(0,-1)+".":(e.push(C),C="");return e}function wl(r){let t=ao(r);return e=>{for(let C of t){if(C==="")break;e=e&&e[C]}return e}}function G0(r,t){return(Qi[t]||(Qi[t]=wl(t)))(r)}function v4(r){return r.charAt(0).toUpperCase()+r.slice(1)}var k3=r=>typeof r<"u",G5=r=>typeof r=="function",M6=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function ft(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var q1=Math.PI,s2=2*q1,no=s2+q1,A4=Number.POSITIVE_INFINITY,Lo=q1/180,l2=q1/2,W0=q1/4,ut=q1*2/3,q5=Math.log10,m5=Math.sign;function T3(r,t,e){return Math.abs(r-t)<e}function l6(r){let t=Math.round(r);r=T3(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(q5(r))),C=r/e;return(C<=1?1:C<=2?2:C<=5?5:10)*e}function vt(r){let t=[],e=Math.sqrt(r),C;for(C=1;C<e;C++)r%C===0&&(t.push(C),t.push(r/C));return e===(e|0)&&t.push(e),t.sort((i,H)=>i-H).pop(),t}function bl(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function P3(r){return!bl(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function xt(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function c6(r,t,e){let C,i,H;for(C=0,i=r.length;C<i;C++)H=r[C][e],isNaN(H)||(t.min=Math.min(t.min,H),t.max=Math.max(t.max,H))}function Y5(r){return r*(q1/180)}function x4(r){return r*(180/q1)}function d6(r){if(!V2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function p6(r,t){let e=t.x-r.x,C=t.y-r.y,i=Math.sqrt(e*e+C*C),H=Math.atan2(C,e);return H<-.5*q1&&(H+=s2),{angle:H,distance:i}}function f4(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function so(r,t){return(r-t+no)%s2-q1}function x2(r){return(r%s2+s2)%s2}function g4(r,t,e,C){let i=x2(r),H=x2(t),V=x2(e),n=x2(H-i),s=x2(V-i),c=x2(i-H),u=x2(i-V);return i===H||i===V||C&&H===V||n>s&&c<u}function g2(r,t,e){return Math.max(t,Math.min(e,r))}function gt(r){return g2(r,-32768,32767)}function F3(r,t,e,C=1e-6){return r>=Math.min(t,e)-C&&r<=Math.max(t,e)+C}function _4(r,t,e){e=e||(V=>r[V]<t);let C=r.length-1,i=0,H;for(;C-i>1;)H=i+C>>1,e(H)?i=H:C=H;return{lo:i,hi:C}}var u0=(r,t,e,C)=>_4(r,e,C?i=>{let H=r[i][t];return H<e||H===e&&r[i+1][t]===e}:i=>r[i][t]<e),_t=(r,t,e)=>_4(r,e,C=>r[C][t]>=e);function St(r,t,e){let C=0,i=r.length;for(;C<i&&r[C]<t;)C++;for(;i>C&&r[i-1]>e;)i--;return C>0||i<r.length?r.slice(C,i):r}var Mo=["push","pop","shift","splice","unshift"];function Zt(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Mo.forEach(e=>{let C="_onData"+v4(e),i=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...H){let V=i.apply(this,H);return r._chartjs.listeners.forEach(n=>{typeof n[C]=="function"&&n[C](...H)}),V}})})}function u6(r,t){let e=r._chartjs;if(!e)return;let C=e.listeners,i=C.indexOf(t);i!==-1&&C.splice(i,1),!(C.length>0)&&(Mo.forEach(H=>{delete r[H]}),delete r._chartjs)}function m6(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var h6=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function A6(r,t){let e=[],C=!1;return function(...i){e=i,C||(C=!0,h6.call(window,()=>{C=!1,r.apply(t,e)}))}}function wt(r,t){let e;return function(...C){return t?(clearTimeout(e),e=setTimeout(r,t,C)):r.apply(this,C),t}}var bt=r=>r==="start"?"left":r==="end"?"right":"center",f6=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function yt(r,t,e){let C=t.length,i=0,H=C;if(r._sorted){let{iScale:V,vScale:n,_parsed:s}=r,c=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,u=V.axis,{min:A,max:v,minDefined:_,maxDefined:b}=V.getUserBounds();if(_){if(i=Math.min(u0(s,u,A).lo,e?C:u0(t,u,V.getPixelForValue(A)).lo),c){let y=s.slice(0,i+1).reverse().findIndex(k=>!Z1(k[n.axis]));i-=Math.max(0,y)}i=g2(i,0,C-1)}if(b){let y=Math.max(u0(s,V.axis,v,!0).hi+1,e?0:u0(t,u,V.getPixelForValue(v),!0).hi+1);if(c){let k=s.slice(y-1).findIndex(P=>!Z1(P[n.axis]));y+=Math.max(0,k)}H=g2(y,i,C)-i}else H=C-i}return{start:i,count:H}}function Ot(r){let{xScale:t,yScale:e,_scaleRanges:C}=r,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!C)return r._scaleRanges=i,!0;let H=C.xmin!==t.min||C.xmax!==t.max||C.ymin!==e.min||C.ymax!==e.max;return Object.assign(C,i),H}var V6=r=>r===0||r===1,Ki=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*s2/e)),Xi=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*s2/e)+1,b3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*l2)+1,easeOutSine:r=>Math.sin(r*l2),easeInOutSine:r=>-.5*(Math.cos(q1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>V6(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>V6(r)?r:Ki(r,.075,.3),easeOutElastic:r=>V6(r)?r:Xi(r,.075,.3),easeInOutElastic(r){return V6(r)?r:r<.5?.5*Ki(r*2,.1125,.45):.5+.5*Xi(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-b3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?b3.easeInBounce(r*2)*.5:b3.easeOutBounce(r*2-1)*.5+.5};function v6(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function x6(r){return v6(r)?r:new p4(r)}function L6(r){return v6(r)?r:new p4(r).saturate(.5).darken(.1).hexString()}var yl=["x","y","borderWidth","radius","tension"],Ol=["color","borderColor","backgroundColor"];function kl(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:Ol},numbers:{type:"number",properties:yl}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Tl(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Ji=new Map;function Pl(r,t){t=t||{};let e=r+JSON.stringify(t),C=Ji.get(e);return C||(C=new Intl.NumberFormat(r,t),Ji.set(e,C)),C}function S4(r,t,e){return Pl(t,e).format(r)}var lo={values(r){return J1(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let C=this.chart.options.locale,i,H=r;if(e.length>1){let c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),H=Fl(r,e)}let V=q5(Math.abs(H)),n=isNaN(V)?1:Math.max(Math.min(-1*Math.floor(V),20),0),s={notation:i,minimumFractionDigits:n,maximumFractionDigits:n};return Object.assign(s,this.options.ticks.format),S4(r,C,s)},logarithmic(r,t,e){if(r===0)return"0";let C=e[t].significand||r/Math.pow(10,Math.floor(q5(r)));return[1,2,3,5,10,15].includes(C)||t>.8*e.length?lo.numeric.call(this,r,t,e):""}};function Fl(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var Z4={formatters:lo};function El(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Z4.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var q0=Object.create(null),g6=Object.create(null);function m4(r,t){if(!t)return r;let e=t.split(".");for(let C=0,i=e.length;C<i;++C){let H=e[C];r=r[H]||(r[H]=Object.create(null))}return r}function pt(r,t,e){return typeof t=="string"?o5(m4(r,t),e):o5(m4(r,""),t)}var mt=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=C=>C.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(C,i)=>L6(i.backgroundColor),this.hoverBorderColor=(C,i)=>L6(i.borderColor),this.hoverColor=(C,i)=>L6(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return pt(this,t,e)}get(t){return m4(this,t)}describe(t,e){return pt(g6,t,e)}override(t,e){return pt(q0,t,e)}route(t,e,C,i){let H=m4(this,t),V=m4(this,C),n="_"+e;Object.defineProperties(H,{[n]:{value:H[e],writable:!0},[e]:{enumerable:!0,get(){let s=this[n],c=V[i];return w1(s)?Object.assign({},c,s):F1(s,c)},set(s){this[n]=s}}})}apply(t){t.forEach(e=>e(this))}},a2=new mt({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[kl,Tl,El]);function co(r){return!r||Z1(r.size)||Z1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function m7(r,t,e,C,i){let H=t[i];return H||(H=t[i]=r.measureText(i).width,e.push(i)),H>C&&(C=H),C}function kt(r,t,e,C){C=C||{};let i=C.data=C.data||{},H=C.garbageCollect=C.garbageCollect||[];C.font!==t&&(i=C.data={},H=C.garbageCollect=[],C.font=t),r.save(),r.font=t;let V=0,n=e.length,s,c,u,A,v;for(s=0;s<n;s++)if(A=e[s],A!=null&&!J1(A))V=m7(r,i,H,V,A);else if(J1(A))for(c=0,u=A.length;c<u;c++)v=A[c],v!=null&&!J1(v)&&(V=m7(r,i,H,V,v));r.restore();let _=H.length/2;if(_>e.length){for(s=0;s<_;s++)delete i[H[s]];H.splice(0,_)}return V}function m0(r,t,e){let C=r.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*C)/C+i}function _6(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function w4(r,t,e,C){Tt(r,t,e,C,null)}function Tt(r,t,e,C,i){let H,V,n,s,c,u,A,v,_=t.pointStyle,b=t.rotation,y=t.radius,k=(b||0)*Lo;if(_&&typeof _=="object"&&(H=_.toString(),H==="[object HTMLImageElement]"||H==="[object HTMLCanvasElement]")){r.save(),r.translate(e,C),r.rotate(k),r.drawImage(_,-_.width/2,-_.height/2,_.width,_.height),r.restore();return}if(!(isNaN(y)||y<=0)){switch(r.beginPath(),_){default:i?r.ellipse(e,C,i/2,y,0,0,s2):r.arc(e,C,y,0,s2),r.closePath();break;case"triangle":u=i?i/2:y,r.moveTo(e+Math.sin(k)*u,C-Math.cos(k)*y),k+=ut,r.lineTo(e+Math.sin(k)*u,C-Math.cos(k)*y),k+=ut,r.lineTo(e+Math.sin(k)*u,C-Math.cos(k)*y),r.closePath();break;case"rectRounded":c=y*.516,s=y-c,V=Math.cos(k+W0)*s,A=Math.cos(k+W0)*(i?i/2-c:s),n=Math.sin(k+W0)*s,v=Math.sin(k+W0)*(i?i/2-c:s),r.arc(e-A,C-n,c,k-q1,k-l2),r.arc(e+v,C-V,c,k-l2,k),r.arc(e+A,C+n,c,k,k+l2),r.arc(e-v,C+V,c,k+l2,k+q1),r.closePath();break;case"rect":if(!b){s=Math.SQRT1_2*y,u=i?i/2:s,r.rect(e-u,C-s,2*u,2*s);break}k+=W0;case"rectRot":A=Math.cos(k)*(i?i/2:y),V=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(i?i/2:y),r.moveTo(e-A,C-n),r.lineTo(e+v,C-V),r.lineTo(e+A,C+n),r.lineTo(e-v,C+V),r.closePath();break;case"crossRot":k+=W0;case"cross":A=Math.cos(k)*(i?i/2:y),V=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(i?i/2:y),r.moveTo(e-A,C-n),r.lineTo(e+A,C+n),r.moveTo(e+v,C-V),r.lineTo(e-v,C+V);break;case"star":A=Math.cos(k)*(i?i/2:y),V=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(i?i/2:y),r.moveTo(e-A,C-n),r.lineTo(e+A,C+n),r.moveTo(e+v,C-V),r.lineTo(e-v,C+V),k+=W0,A=Math.cos(k)*(i?i/2:y),V=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(i?i/2:y),r.moveTo(e-A,C-n),r.lineTo(e+A,C+n),r.moveTo(e+v,C-V),r.lineTo(e-v,C+V);break;case"line":V=i?i/2:Math.cos(k)*y,n=Math.sin(k)*y,r.moveTo(e-V,C-n),r.lineTo(e+V,C+n);break;case"dash":r.moveTo(e,C),r.lineTo(e+Math.cos(k)*(i?i/2:y),C+Math.sin(k)*y);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function Z5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function b4(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function y4(r){r.restore()}function Pt(r,t,e,C,i){if(!t)return r.lineTo(e.x,e.y);if(i==="middle"){let H=(t.x+e.x)/2;r.lineTo(H,t.y),r.lineTo(H,e.y)}else i==="after"!=!!C?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function Ft(r,t,e,C){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(C?t.cp1x:t.cp2x,C?t.cp1y:t.cp2y,C?e.cp2x:e.cp1x,C?e.cp2y:e.cp1y,e.x,e.y)}function Bl(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),Z1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function Rl(r,t,e,C,i){if(i.strikethrough||i.underline){let H=r.measureText(C),V=t-H.actualBoundingBoxLeft,n=t+H.actualBoundingBoxRight,s=e-H.actualBoundingBoxAscent,c=e+H.actualBoundingBoxDescent,u=i.strikethrough?(s+c)/2:c;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=i.decorationWidth||2,r.moveTo(V,u),r.lineTo(n,u),r.stroke()}}function Dl(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function f7(r,t,e,C,i,H={}){let V=J1(t)?t:[t],n=H.strokeWidth>0&&H.strokeColor!=="",s,c;for(r.save(),r.font=i.string,Bl(r,H),s=0;s<V.length;++s)c=V[s],H.backdrop&&Dl(r,H.backdrop),n&&(H.strokeColor&&(r.strokeStyle=H.strokeColor),Z1(H.strokeWidth)||(r.lineWidth=H.strokeWidth),r.strokeText(c,e,C,H.maxWidth)),r.fillText(c,e,C,H.maxWidth),Rl(r,e,C,c,H),C+=Number(i.lineHeight);r.restore()}function v7(r,t){let{x:e,y:C,w:i,h:H,radius:V}=t;r.arc(e+V.topLeft,C+V.topLeft,V.topLeft,1.5*q1,q1,!0),r.lineTo(e,C+H-V.bottomLeft),r.arc(e+V.bottomLeft,C+H-V.bottomLeft,V.bottomLeft,q1,l2,!0),r.lineTo(e+i-V.bottomRight,C+H),r.arc(e+i-V.bottomRight,C+H-V.bottomRight,V.bottomRight,l2,0,!0),r.lineTo(e+i,C+V.topRight),r.arc(e+i-V.topRight,C+V.topRight,V.topRight,0,-l2,!0),r.lineTo(e+V.topLeft,C)}var $l=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Il=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function po(r,t){let e=(""+r).match($l);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var zl=r=>+r||0;function O4(r,t){let e={},C=w1(t),i=C?Object.keys(t):t,H=w1(r)?C?V=>F1(r[V],r[t[V]]):V=>r[V]:()=>r;for(let V of i)e[V]=zl(H(V));return e}function S6(r){return O4(r,{top:"y",right:"x",bottom:"y",left:"x"})}function Y0(r){return O4(r,["topLeft","topRight","bottomLeft","bottomRight"])}function P2(r){let t=S6(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function O2(r,t){r=r||{},t=t||a2.font;let e=F1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let C=F1(r.style,t.style);C&&!(""+C).match(Il)&&(console.warn('Invalid font style specified: "'+C+'"'),C=void 0);let i={family:F1(r.family,t.family),lineHeight:po(F1(r.lineHeight,t.lineHeight),e),size:e,style:C,weight:F1(r.weight,t.weight),string:""};return i.string=co(i),i}function X1(r,t,e,C){let i=!0,H,V,n;for(H=0,V=r.length;H<V;++H)if(n=r[H],n!==void 0&&(t!==void 0&&typeof n=="function"&&(n=n(t),i=!1),e!==void 0&&J1(n)&&(n=n[e%n.length],i=!1),n!==void 0))return C&&!i&&(C.cacheable=!1),n}function Et(r,t,e){let{min:C,max:i}=r,H=At(t,(i-C)/2),V=(n,s)=>e&&n===0?0:n+s;return{min:V(C,-Math.abs(H)),max:V(i,H)}}function Q5(r,t){return Object.assign(Object.create(r),t)}function k4(r,t=[""],e,C,i=()=>r[0]){let H=e||r;typeof C>"u"&&(C=ho("_fallback",r));let V={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:H,_fallback:C,_getTarget:i,override:n=>k4([n,...r],t,H,C)};return new Proxy(V,{deleteProperty(n,s){return delete n[s],delete n._keys,delete r[0][s],!0},get(n,s){return uo(n,s,()=>Ql(s,t,r,n))},getOwnPropertyDescriptor(n,s){return Reflect.getOwnPropertyDescriptor(n._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(n,s){return eo(n).includes(s)},ownKeys(n){return eo(n)},set(n,s,c){let u=n._storage||(n._storage=i());return n[s]=u[s]=c,delete n._keys,!0}})}function j0(r,t,e,C){let i={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:Z6(r,C),setContext:H=>j0(r,H,e,C),override:H=>j0(r.override(H),t,e,C)};return new Proxy(i,{deleteProperty(H,V){return delete H[V],delete r[V],!0},get(H,V,n){return uo(H,V,()=>Wl(H,V,n))},getOwnPropertyDescriptor(H,V){return H._descriptors.allKeys?Reflect.has(r,V)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,V)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(H,V){return Reflect.has(r,V)},ownKeys(){return Reflect.ownKeys(r)},set(H,V,n){return r[V]=n,delete H[V],!0}})}function Z6(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:C=t.indexable,_allKeys:i=t.allKeys}=r;return{allKeys:i,scriptable:e,indexable:C,isScriptable:G5(e)?e:()=>e,isIndexable:G5(C)?C:()=>C}}var Nl=(r,t)=>r?r+v4(t):t,Bt=(r,t)=>w1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function uo(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let C=e();return r[t]=C,C}function Wl(r,t,e){let{_proxy:C,_context:i,_subProxy:H,_descriptors:V}=r,n=C[t];return G5(n)&&V.isScriptable(t)&&(n=Ul(t,n,r,e)),J1(n)&&n.length&&(n=jl(t,n,r,V.isIndexable)),Bt(t,n)&&(n=j0(n,i,H&&H[t],V)),n}function Ul(r,t,e,C){let{_proxy:i,_context:H,_subProxy:V,_stack:n}=e;if(n.has(r))throw new Error("Recursion detected: "+Array.from(n).join("->")+"->"+r);n.add(r);let s=t(H,V||C);return n.delete(r),Bt(r,s)&&(s=Rt(i._scopes,i,r,s)),s}function jl(r,t,e,C){let{_proxy:i,_context:H,_subProxy:V,_descriptors:n}=e;if(typeof H.index<"u"&&C(r))return t[H.index%t.length];if(w1(t[0])){let s=t,c=i._scopes.filter(u=>u!==s);t=[];for(let u of s){let A=Rt(c,i,r,u);t.push(j0(A,H,V&&V[r],n))}}return t}function mo(r,t,e){return G5(r)?r(t,e):r}var Gl=(r,t)=>r===!0?t:typeof r=="string"?G0(t,r):void 0;function ql(r,t,e,C,i){for(let H of t){let V=Gl(e,H);if(V){r.add(V);let n=mo(V._fallback,e,i);if(typeof n<"u"&&n!==e&&n!==C)return n}else if(V===!1&&typeof C<"u"&&e!==C)return null}return!1}function Rt(r,t,e,C){let i=t._rootScopes,H=mo(t._fallback,e,C),V=[...r,...i],n=new Set;n.add(C);let s=to(n,V,e,H||e,C);return s===null||typeof H<"u"&&H!==e&&(s=to(n,V,H,s,C),s===null)?!1:k4(Array.from(n),[""],i,H,()=>Yl(t,e,C))}function to(r,t,e,C,i){for(;e;)e=ql(r,t,e,C,i);return e}function Yl(r,t,e){let C=r._getTarget();t in C||(C[t]={});let i=C[t];return J1(i)&&w1(e)?e:i||{}}function Ql(r,t,e,C){let i;for(let H of t)if(i=ho(Nl(H,r),e),typeof i<"u")return Bt(r,i)?Rt(e,C,r,i):i}function ho(r,t){for(let e of t){if(!e)continue;let C=e[r];if(typeof C<"u")return C}}function eo(r){let t=r._keys;return t||(t=r._keys=Kl(r._scopes)),t}function Kl(r){let t=new Set;for(let e of r)for(let C of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(C);return Array.from(t)}var Xl=Number.EPSILON||1e-14,h7=(r,t)=>t<r.length&&!r[t].skip&&r[t],Ao=r=>r==="x"?"y":"x";function fo(r,t,e,C){let i=r.skip?t:r,H=t,V=e.skip?t:e,n=f4(H,i),s=f4(V,H),c=n/(n+s),u=s/(n+s);c=isNaN(c)?0:c,u=isNaN(u)?0:u;let A=C*c,v=C*u;return{previous:{x:H.x-A*(V.x-i.x),y:H.y-A*(V.y-i.y)},next:{x:H.x+v*(V.x-i.x),y:H.y+v*(V.y-i.y)}}}function Jl(r,t,e){let C=r.length,i,H,V,n,s,c=h7(r,0);for(let u=0;u<C-1;++u)if(s=c,c=h7(r,u+1),!(!s||!c)){if(T3(t[u],0,Xl)){e[u]=e[u+1]=0;continue}i=e[u]/t[u],H=e[u+1]/t[u],n=Math.pow(i,2)+Math.pow(H,2),!(n<=9)&&(V=3/Math.sqrt(n),e[u]=i*V*t[u],e[u+1]=H*V*t[u])}}function tc(r,t,e="x"){let C=Ao(e),i=r.length,H,V,n,s=h7(r,0);for(let c=0;c<i;++c){if(V=n,n=s,s=h7(r,c+1),!n)continue;let u=n[e],A=n[C];V&&(H=(u-V[e])/3,n[`cp1${e}`]=u-H,n[`cp1${C}`]=A-H*t[c]),s&&(H=(s[e]-u)/3,n[`cp2${e}`]=u+H,n[`cp2${C}`]=A+H*t[c])}}function vo(r,t="x"){let e=Ao(t),C=r.length,i=Array(C).fill(0),H=Array(C),V,n,s,c=h7(r,0);for(V=0;V<C;++V)if(n=s,s=c,c=h7(r,V+1),!!s){if(c){let u=c[t]-s[t];i[V]=u!==0?(c[e]-s[e])/u:0}H[V]=n?c?m5(i[V-1])!==m5(i[V])?0:(i[V-1]+i[V])/2:i[V-1]:i[V]}Jl(r,i,H),tc(r,H,t)}function a6(r,t,e){return Math.max(Math.min(r,e),t)}function ec(r,t){let e,C,i,H,V,n=Z5(r[0],t);for(e=0,C=r.length;e<C;++e)V=H,H=n,n=e<C-1&&Z5(r[e+1],t),H&&(i=r[e],V&&(i.cp1x=a6(i.cp1x,t.left,t.right),i.cp1y=a6(i.cp1y,t.top,t.bottom)),n&&(i.cp2x=a6(i.cp2x,t.left,t.right),i.cp2y=a6(i.cp2y,t.top,t.bottom)))}function Dt(r,t,e,C,i){let H,V,n,s;if(t.spanGaps&&(r=r.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")vo(r,i);else{let c=C?r[r.length-1]:r[0];for(H=0,V=r.length;H<V;++H)n=r[H],s=fo(c,n,r[Math.min(H+1,V-(C?0:1))%V],t.tension),n.cp1x=s.previous.x,n.cp1y=s.previous.y,n.cp2x=s.next.x,n.cp2y=s.next.y,c=n}t.capBezierPoints&&ec(r,e)}function T4(){return typeof window<"u"&&typeof document<"u"}function P4(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function s6(r,t,e){let C;return typeof r=="string"?(C=parseInt(r,10),r.indexOf("%")!==-1&&(C=C/100*t.parentNode[e])):C=r,C}var w6=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function xo(r,t){return w6(r).getPropertyValue(t)}var rc=["top","right","bottom","left"];function y3(r,t,e){let C={};e=e?"-"+e:"";for(let i=0;i<4;i++){let H=rc[i];C[H]=parseFloat(r[t+"-"+H+e])||0}return C.width=C.left+C.right,C.height=C.top+C.bottom,C}var Cc=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function ic(r,t){let e=r.touches,C=e&&e.length?e[0]:r,{offsetX:i,offsetY:H}=C,V=!1,n,s;if(Cc(i,H,r.target))n=i,s=H;else{let c=t.getBoundingClientRect();n=C.clientX-c.left,s=C.clientY-c.top,V=!0}return{x:n,y:s,box:V}}function b5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:C}=t,i=w6(e),H=i.boxSizing==="border-box",V=y3(i,"padding"),n=y3(i,"border","width"),{x:s,y:c,box:u}=ic(r,e),A=V.left+(u&&n.left),v=V.top+(u&&n.top),{width:_,height:b}=t;return H&&(_-=V.width+n.width,b-=V.height+n.height),{x:Math.round((s-A)/_*e.width/C),y:Math.round((c-v)/b*e.height/C)}}function oc(r,t,e){let C,i;if(t===void 0||e===void 0){let H=r&&P4(r);if(!H)t=r.clientWidth,e=r.clientHeight;else{let V=H.getBoundingClientRect(),n=w6(H),s=y3(n,"border","width"),c=y3(n,"padding");t=V.width-c.width-s.width,e=V.height-c.height-s.height,C=s6(n.maxWidth,H,"clientWidth"),i=s6(n.maxHeight,H,"clientHeight")}}return{width:t,height:e,maxWidth:C||A4,maxHeight:i||A4}}var U0=r=>Math.round(r*10)/10;function $t(r,t,e,C){let i=w6(r),H=y3(i,"margin"),V=s6(i.maxWidth,r,"clientWidth")||A4,n=s6(i.maxHeight,r,"clientHeight")||A4,s=oc(r,t,e),{width:c,height:u}=s;if(i.boxSizing==="content-box"){let v=y3(i,"border","width"),_=y3(i,"padding");c-=_.width+v.width,u-=_.height+v.height}return c=Math.max(0,c-H.width),u=Math.max(0,C?c/C:u-H.height),c=U0(Math.min(c,V,s.maxWidth)),u=U0(Math.min(u,n,s.maxHeight)),c&&!u&&(u=U0(c/2)),(t!==void 0||e!==void 0)&&C&&s.height&&u>s.height&&(u=s.height,c=U0(Math.floor(u*C))),{width:c,height:u}}function b6(r,t,e){let C=t||1,i=U0(r.height*C),H=U0(r.width*C);r.height=U0(r.height),r.width=U0(r.width);let V=r.canvas;return V.style&&(e||!V.style.height&&!V.style.width)&&(V.style.height=`${r.height}px`,V.style.width=`${r.width}px`),r.currentDevicePixelRatio!==C||V.height!==i||V.width!==H?(r.currentDevicePixelRatio=C,V.height=i,V.width=H,r.ctx.setTransform(C,0,0,C,0,0),!0):!1}var It=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};T4()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function y6(r,t){let e=xo(r,t),C=e&&e.match(/^(\d+)(\.\d+)?px$/);return C?+C[1]:void 0}function p0(r,t,e,C){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function zt(r,t,e,C){return{x:r.x+e*(t.x-r.x),y:C==="middle"?e<.5?r.y:t.y:C==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function Nt(r,t,e,C){let i={x:r.cp2x,y:r.cp2y},H={x:t.cp1x,y:t.cp1y},V=p0(r,i,e),n=p0(i,H,e),s=p0(H,t,e),c=p0(V,n,e),u=p0(n,s,e);return p0(c,u,e)}var Hc=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,C){return e-C},leftForLtr(e,C){return e-C}}},Vc=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function F4(r,t,e){return r?Hc(t,e):Vc()}function Wt(r,t){let e,C;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,C=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=C)}function Ut(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function go(r){return r==="angle"?{between:g4,compare:so,normalize:x2}:{between:F3,compare:(t,e)=>t-e,normalize:t=>t}}function ro({start:r,end:t,count:e,loop:C,style:i}){return{start:r%e,end:t%e,loop:C&&(t-r+1)%e===0,style:i}}function ac(r,t,e){let{property:C,start:i,end:H}=e,{between:V,normalize:n}=go(C),s=t.length,{start:c,end:u,loop:A}=r,v,_;if(A){for(c+=s,u+=s,v=0,_=s;v<_&&V(n(t[c%s][C]),i,H);++v)c--,u--;c%=s,u%=s}return u<c&&(u+=s),{start:c,end:u,loop:A,style:r.style}}function O6(r,t,e){if(!e)return[r];let{property:C,start:i,end:H}=e,V=t.length,{compare:n,between:s,normalize:c}=go(C),{start:u,end:A,loop:v,style:_}=ac(r,t,e),b=[],y=!1,k=null,P,$,I,X=()=>s(i,I,P)&&n(i,I)!==0,Y=()=>n(H,P)===0||s(H,I,P),c1=()=>y||X(),L1=()=>!y||Y();for(let r1=u,o1=u;r1<=A;++r1)$=t[r1%V],!$.skip&&(P=c($[C]),P!==I&&(y=s(P,i,H),k===null&&c1()&&(k=n(P,i)===0?r1:o1),k!==null&&L1()&&(b.push(ro({start:k,end:r1,loop:v,count:V,style:_})),k=null),o1=r1,I=P));return k!==null&&b.push(ro({start:k,end:A,loop:v,count:V,style:_})),b}function k6(r,t){let e=[],C=r.segments;for(let i=0;i<C.length;i++){let H=O6(C[i],r.points,t);H.length&&e.push(...H)}return e}function nc(r,t,e,C){let i=0,H=t-1;if(e&&!C)for(;i<t&&!r[i].skip;)i++;for(;i<t&&r[i].skip;)i++;for(i%=t,e&&(H+=i);H>i&&r[H%t].skip;)H--;return H%=t,{start:i,end:H}}function Lc(r,t,e,C){let i=r.length,H=[],V=t,n=r[t],s;for(s=t+1;s<=e;++s){let c=r[s%i];c.skip||c.stop?n.skip||(C=!1,H.push({start:t%i,end:(s-1)%i,loop:C}),t=V=c.stop?s:null):(V=s,n.skip&&(t=s)),n=c}return V!==null&&H.push({start:t%i,end:V%i,loop:C}),H}function jt(r,t){let e=r.points,C=r.options.spanGaps,i=e.length;if(!i)return[];let H=!!r._loop,{start:V,end:n}=nc(e,i,H,C);if(C===!0)return Co(r,[{start:V,end:n,loop:H}],e,t);let s=n<V?n+i:n,c=!!r._fullLoop&&V===0&&n===i-1;return Co(r,Lc(e,V,s,c),e,t)}function Co(r,t,e,C){return!C||!C.setContext||!e?t:sc(r,t,e,C)}function sc(r,t,e,C){let i=r._chart.getContext(),H=io(r.options),{_datasetIndex:V,options:{spanGaps:n}}=r,s=e.length,c=[],u=H,A=t[0].start,v=A;function _(b,y,k,P){let $=n?-1:1;if(b!==y){for(b+=s;e[b%s].skip;)b-=$;for(;e[y%s].skip;)y+=$;b%s!==y%s&&(c.push({start:b%s,end:y%s,loop:k,style:P}),u=P,A=y%s)}}for(let b of t){A=n?A:b.start;let y=e[A%s],k;for(v=A+1;v<=b.end;v++){let P=e[v%s];k=io(C.setContext(Q5(i,{type:"segment",p0:y,p1:P,p0DataIndex:(v-1)%s,p1DataIndex:v%s,datasetIndex:V}))),Mc(k,u)&&_(A,v-1,b.loop,u),y=P,u=k}A<v-1&&_(A,v-1,b.loop,u)}return c}function io(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function Mc(r,t){if(!t)return!1;let e=[],C=function(i,H){return v6(H)?(e.includes(H)||e.push(H),e.indexOf(H)):H};return JSON.stringify(r,C)!==JSON.stringify(t,C)}function n6(r,t,e){return r.options.clip?r[e]:t[e]}function lc(r,t){let{xScale:e,yScale:C}=r;return e&&C?{left:n6(e,t,"left"),right:n6(e,t,"right"),top:n6(C,t,"top"),bottom:n6(C,t,"bottom")}:t}function T6(r,t){let e=t._clip;if(e.disabled)return!1;let C=lc(t,r.chartArea);return{left:e.left===!1?0:C.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:C.right+(e.right===!0?0:e.right),top:e.top===!1?0:C.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:C.bottom+(e.bottom===!0?0:e.bottom)}}var ie=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,C,i){let H=e.listeners[i],V=e.duration;H.forEach(n=>n({chart:t,initial:e.initial,numSteps:V,currentStep:Math.min(C-e.start,V)}))}_refresh(){this._request||(this._running=!0,this._request=h6.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((C,i)=>{if(!C.running||!C.items.length)return;let H=C.items,V=H.length-1,n=!1,s;for(;V>=0;--V)s=H[V],s._active?(s._total>C.duration&&(C.duration=s._total),s.tick(t),n=!0):(H[V]=H[H.length-1],H.pop());n&&(i.draw(),this._notify(i,C,t,"progress")),H.length||(C.running=!1,this._notify(i,C,t,"complete"),C.initial=!1),e+=H.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,C=e.get(t);return C||(C={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,C)),C}listen(t,e,C){this._getAnims(t).listeners[e].push(C)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((C,i)=>Math.max(C,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let C=e.items,i=C.length-1;for(;i>=0;--i)C[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},h0=new ie,_o="transparent",uc={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let C=x6(r||_o),i=C.valid&&x6(t||_o);return i&&i.valid?i.mix(C,e).hexString():t},number(r,t,e){return r+(t-r)*e}},oe=class{constructor(t,e,C,i){let H=e[C];i=X1([t.to,i,H,t.from]);let V=X1([t.from,H,i]);this._active=!0,this._fn=t.fn||uc[t.type||typeof V],this._easing=b3[t.easing]||b3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=C,this._from=V,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,C){if(this._active){this._notify(!1);let i=this._target[this._prop],H=C-this._start,V=this._duration-H;this._start=C,this._duration=Math.floor(Math.max(V,t.duration)),this._total+=H,this._loop=!!t.loop,this._to=X1([t.to,e,i,t.from]),this._from=X1([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,C=this._duration,i=this._prop,H=this._from,V=this._loop,n=this._to,s;if(this._active=H!==n&&(V||e<C),!this._active){this._target[i]=n,this._notify(!0);return}if(e<0){this._target[i]=H;return}s=e/C%2,s=V&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[i]=this._fn(H,n,s)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,C)=>{t.push({res:e,rej:C})})}_notify(t){let e=t?"res":"rej",C=this._promises||[];for(let i=0;i<C.length;i++)C[i][e]()}},W6=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!w1(t))return;let e=Object.keys(a2.animation),C=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{let H=t[i];if(!w1(H))return;let V={};for(let n of e)V[n]=H[n];(J1(H.properties)&&H.properties||[i]).forEach(n=>{(n===i||!C.has(n))&&C.set(n,V)})})}_animateOptions(t,e){let C=e.options,i=hc(t,C);if(!i)return[];let H=this._createAnimations(i,C);return C.$shared&&mc(t.options.$animations,C).then(()=>{t.options=C},()=>{}),H}_createAnimations(t,e){let C=this._properties,i=[],H=t.$animations||(t.$animations={}),V=Object.keys(e),n=Date.now(),s;for(s=V.length-1;s>=0;--s){let c=V[s];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,e));continue}let u=e[c],A=H[c],v=C.get(c);if(A)if(v&&A.active()){A.update(v,u,n);continue}else A.cancel();if(!v||!v.duration){t[c]=u;continue}H[c]=A=new oe(v,t,c,u),i.push(A)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let C=this._createAnimations(t,e);if(C.length)return h0.add(this._chart,C),!0}};function mc(r,t){let e=[],C=Object.keys(t);for(let i=0;i<C.length;i++){let H=r[C[i]];H&&H.active()&&e.push(H.wait())}return Promise.all(e)}function hc(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function So(r,t){let e=r&&r.options||{},C=e.reverse,i=e.min===void 0?t:0,H=e.max===void 0?t:0;return{start:C?H:i,end:C?i:H}}function Ac(r,t,e){if(e===!1)return!1;let C=So(r,e),i=So(t,e);return{top:i.end,right:C.end,bottom:i.start,left:C.start}}function fc(r){let t,e,C,i;return w1(r)?(t=r.top,e=r.right,C=r.bottom,i=r.left):t=e=C=i=r,{top:t,right:e,bottom:C,left:i,disabled:r===!1}}function AH(r,t){let e=[],C=r._getSortedDatasetMetas(t),i,H;for(i=0,H=C.length;i<H;++i)e.push(C[i].index);return e}function Zo(r,t,e,C={}){let i=r.keys,H=C.mode==="single",V,n,s,c;if(t===null)return;let u=!1;for(V=0,n=i.length;V<n;++V){if(s=+i[V],s===e){if(u=!0,C.all)continue;break}c=r.values[s],V2(c)&&(H||t===0||m5(t)===m5(c))&&(t+=c)}return!u&&!C.all?0:t}function vc(r,t){let{iScale:e,vScale:C}=t,i=e.axis==="x"?"x":"y",H=C.axis==="x"?"x":"y",V=Object.keys(r),n=new Array(V.length),s,c,u;for(s=0,c=V.length;s<c;++s)u=V[s],n[s]={[i]:u,[H]:r[u]};return n}function Gt(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function xc(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function gc(r){let{min:t,max:e,minDefined:C,maxDefined:i}=r.getUserBounds();return{min:C?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function _c(r,t,e){let C=r[t]||(r[t]={});return C[e]||(C[e]={})}function wo(r,t,e,C){for(let i of t.getMatchingVisibleMetas(C).reverse()){let H=r[i.index];if(e&&H>0||!e&&H<0)return i.index}return null}function bo(r,t){let{chart:e,_cachedMeta:C}=r,i=e._stacks||(e._stacks={}),{iScale:H,vScale:V,index:n}=C,s=H.axis,c=V.axis,u=xc(H,V,C),A=t.length,v;for(let _=0;_<A;++_){let b=t[_],{[s]:y,[c]:k}=b,P=b._stacks||(b._stacks={});v=P[c]=_c(i,u,y),v[n]=k,v._top=wo(v,V,!0,C.type),v._bottom=wo(v,V,!1,C.type);let $=v._visualValues||(v._visualValues={});$[n]=k}}function qt(r,t){let e=r.scales;return Object.keys(e).filter(C=>e[C].axis===t).shift()}function Sc(r,t){return Q5(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Zc(r,t,e){return Q5(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function E4(r,t){let e=r.controller.index,C=r.vScale&&r.vScale.axis;if(C){t=t||r._parsed;for(let i of t){let H=i._stacks;if(!H||H[C]===void 0||H[C][e]===void 0)return;delete H[C][e],H[C]._visualValues!==void 0&&H[C]._visualValues[e]!==void 0&&delete H[C]._visualValues[e]}}}var Yt=r=>r==="reset"||r==="none",yo=(r,t)=>t?r:Object.assign({},r),wc=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:AH(e,!0),values:null},K0=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Gt(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&E4(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,C=this.getDataset(),i=(A,v,_,b)=>A==="x"?v:A==="r"?b:_,H=e.xAxisID=F1(C.xAxisID,qt(t,"x")),V=e.yAxisID=F1(C.yAxisID,qt(t,"y")),n=e.rAxisID=F1(C.rAxisID,qt(t,"r")),s=e.indexAxis,c=e.iAxisID=i(s,H,V,n),u=e.vAxisID=i(s,V,H,n);e.xScale=this.getScaleForId(H),e.yScale=this.getScaleForId(V),e.rScale=this.getScaleForId(n),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&u6(this._data,this),t._stacked&&E4(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),C=this._data;if(w1(e)){let i=this._cachedMeta;this._data=vc(e,i)}else if(C!==e){if(C){u6(C,this);let i=this._cachedMeta;E4(i),i._parsed=[]}e&&Object.isExtensible(e)&&Zt(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,C=this.getDataset(),i=!1;this._dataCheck();let H=e._stacked;e._stacked=Gt(e.vScale,e),e.stack!==C.stack&&(i=!0,E4(e),e.stack=C.stack),this._resyncElements(t),(i||H!==e._stacked)&&(bo(this,e._parsed),e._stacked=Gt(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),C=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(C,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:C,_data:i}=this,{iScale:H,_stacked:V}=C,n=H.axis,s=t===0&&e===i.length?!0:C._sorted,c=t>0&&C._parsed[t-1],u,A,v;if(this._parsing===!1)C._parsed=i,C._sorted=!0,v=i;else{J1(i[t])?v=this.parseArrayData(C,i,t,e):w1(i[t])?v=this.parseObjectData(C,i,t,e):v=this.parsePrimitiveData(C,i,t,e);let _=()=>A[n]===null||c&&A[n]<c[n];for(u=0;u<e;++u)C._parsed[u+t]=A=v[u],s&&(_()&&(s=!1),c=A);C._sorted=s}V&&bo(this,v)}parsePrimitiveData(t,e,C,i){let{iScale:H,vScale:V}=t,n=H.axis,s=V.axis,c=H.getLabels(),u=H===V,A=new Array(i),v,_,b;for(v=0,_=i;v<_;++v)b=v+C,A[v]={[n]:u||H.parse(c[b],b),[s]:V.parse(e[b],b)};return A}parseArrayData(t,e,C,i){let{xScale:H,yScale:V}=t,n=new Array(i),s,c,u,A;for(s=0,c=i;s<c;++s)u=s+C,A=e[u],n[s]={x:H.parse(A[0],u),y:V.parse(A[1],u)};return n}parseObjectData(t,e,C,i){let{xScale:H,yScale:V}=t,{xAxisKey:n="x",yAxisKey:s="y"}=this._parsing,c=new Array(i),u,A,v,_;for(u=0,A=i;u<A;++u)v=u+C,_=e[v],c[u]={x:H.parse(G0(_,n),v),y:V.parse(G0(_,s),v)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,C){let i=this.chart,H=this._cachedMeta,V=e[t.axis],n={keys:AH(i,!0),values:e._stacks[t.axis]._visualValues};return Zo(n,V,H.index,{mode:C})}updateRangeFromParsed(t,e,C,i){let H=C[e.axis],V=H===null?NaN:H,n=i&&C._stacks[e.axis];i&&n&&(i.values=n,V=Zo(i,H,this._cachedMeta.index)),t.min=Math.min(t.min,V),t.max=Math.max(t.max,V)}getMinMax(t,e){let C=this._cachedMeta,i=C._parsed,H=C._sorted&&t===C.iScale,V=i.length,n=this._getOtherScale(t),s=wc(e,C,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:A}=gc(n),v,_;function b(){_=i[v];let y=_[n.axis];return!V2(_[t.axis])||u>y||A<y}for(v=0;v<V&&!(!b()&&(this.updateRangeFromParsed(c,t,_,s),H));++v);if(H){for(v=V-1;v>=0;--v)if(!b()){this.updateRangeFromParsed(c,t,_,s);break}}return c}getAllParsedValues(t){let e=this._cachedMeta._parsed,C=[],i,H,V;for(i=0,H=e.length;i<H;++i)V=e[i][t.axis],V2(V)&&C.push(V);return C}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,C=e.iScale,i=e.vScale,H=this.getParsed(t);return{label:C?""+C.getLabelForValue(H[C.axis]):"",value:i?""+i.getLabelForValue(H[i.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=fc(F1(this.options.clip,Ac(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,C=this._cachedMeta,i=C.data||[],H=e.chartArea,V=[],n=this._drawStart||0,s=this._drawCount||i.length-n,c=this.options.drawActiveElementsOnTop,u;for(C.dataset&&C.dataset.draw(t,H,n,s),u=n;u<n+s;++u){let A=i[u];A.hidden||(A.active&&c?V.push(A):A.draw(t,H))}for(u=0;u<V.length;++u)V[u].draw(t,H)}getStyle(t,e){let C=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(C):this.resolveDataElementOptions(t||0,C)}getContext(t,e,C){let i=this.getDataset(),H;if(t>=0&&t<this._cachedMeta.data.length){let V=this._cachedMeta.data[t];H=V.$context||(V.$context=Zc(this.getContext(),t,V)),H.parsed=this.getParsed(t),H.raw=i.data[t],H.index=H.dataIndex=t}else H=this.$context||(this.$context=Sc(this.chart.getContext(),this.index)),H.dataset=i,H.index=H.datasetIndex=this.index;return H.active=!!e,H.mode=C,H}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",C){let i=e==="active",H=this._cachedDataOpts,V=t+"-"+e,n=H[V],s=this.enableOptionSharing&&k3(C);if(n)return yo(n,s);let c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),A=i?[`${t}Hover`,"hover",t,""]:[t,""],v=c.getOptionScopes(this.getDataset(),u),_=Object.keys(a2.elements[t]),b=()=>this.getContext(C,i,e),y=c.resolveNamedOptions(v,_,b,A);return y.$shared&&(y.$shared=s,H[V]=Object.freeze(yo(y,s))),y}_resolveAnimations(t,e,C){let i=this.chart,H=this._cachedDataOpts,V=`animation-${e}`,n=H[V];if(n)return n;let s;if(i.options.animation!==!1){let u=this.chart.config,A=u.datasetAnimationScopeKeys(this._type,e),v=u.getOptionScopes(this.getDataset(),A);s=u.createResolver(v,this.getContext(t,C,e))}let c=new W6(i,s&&s.animations);return s&&s._cacheable&&(H[V]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Yt(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let C=this.resolveDataElementOptions(t,e),i=this._sharedOptions,H=this.getSharedOptions(C),V=this.includeOptions(e,H)||H!==i;return this.updateSharedOptions(H,e,C),{sharedOptions:H,includeOptions:V}}updateElement(t,e,C,i){Yt(i)?Object.assign(t,C):this._resolveAnimations(e,i).update(t,C)}updateSharedOptions(t,e,C){t&&!Yt(e)&&this._resolveAnimations(void 0,e).update(t,C)}_setStyle(t,e,C,i){t.active=i;let H=this.getStyle(e,i);this._resolveAnimations(e,C,i).update(t,{options:!i&&this.getSharedOptions(H)||H})}removeHoverStyle(t,e,C){this._setStyle(t,C,"active",!1)}setHoverStyle(t,e,C){this._setStyle(t,C,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,C=this._cachedMeta.data;for(let[n,s,c]of this._syncList)this[n](s,c);this._syncList=[];let i=C.length,H=e.length,V=Math.min(H,i);V&&this.parse(0,V),H>i?this._insertElements(i,H-i,t):H<i&&this._removeElements(H,i-H)}_insertElements(t,e,C=!0){let i=this._cachedMeta,H=i.data,V=t+e,n,s=c=>{for(c.length+=e,n=c.length-1;n>=V;n--)c[n]=c[n-e]};for(s(H),n=t;n<V;++n)H[n]=new this.dataElementType;this._parsing&&s(i._parsed),this.parse(t,e),C&&this.updateElements(H,t,e,"reset")}updateElements(t,e,C,i){}_removeElements(t,e){let C=this._cachedMeta;if(this._parsing){let i=C._parsed.splice(t,e);C._stacked&&E4(C,i)}C.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,C,i]=t;this[e](C,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let C=arguments.length-2;C&&this._sync(["_insertElements",t,C])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};Q(K0,"defaults",{}),Q(K0,"datasetElementType",null),Q(K0,"dataElementType",null);function bc(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),C=[];for(let i=0,H=e.length;i<H;i++)C=C.concat(e[i].controller.getAllParsedValues(r));r._cache.$bar=m6(C.sort((i,H)=>i-H))}return r._cache.$bar}function yc(r){let t=r.iScale,e=bc(t,r.type),C=t._length,i,H,V,n,s=()=>{V===32767||V===-32768||(k3(n)&&(C=Math.min(C,Math.abs(V-n)||C)),n=V)};for(i=0,H=e.length;i<H;++i)V=t.getPixelForValue(e[i]),s();for(n=void 0,i=0,H=t.ticks.length;i<H;++i)V=t.getPixelForTick(i),s();return C}function Oc(r,t,e,C){let i=e.barThickness,H,V;return Z1(i)?(H=t.min*e.categoryPercentage,V=e.barPercentage):(H=i*C,V=1),{chunk:H/C,ratio:V,start:t.pixels[r]-H/2}}function kc(r,t,e,C){let i=t.pixels,H=i[r],V=r>0?i[r-1]:null,n=r<i.length-1?i[r+1]:null,s=e.categoryPercentage;V===null&&(V=H-(n===null?t.end-t.start:n-H)),n===null&&(n=H+H-V);let c=H-(H-Math.min(V,n))/2*s;return{chunk:Math.abs(n-V)/2*s/C,ratio:e.barPercentage,start:c}}function Tc(r,t,e,C){let i=e.parse(r[0],C),H=e.parse(r[1],C),V=Math.min(i,H),n=Math.max(i,H),s=V,c=n;Math.abs(V)>Math.abs(n)&&(s=n,c=V),t[e.axis]=c,t._custom={barStart:s,barEnd:c,start:i,end:H,min:V,max:n}}function fH(r,t,e,C){return J1(r)?Tc(r,t,e,C):t[e.axis]=e.parse(r,C),t}function Oo(r,t,e,C){let i=r.iScale,H=r.vScale,V=i.getLabels(),n=i===H,s=[],c,u,A,v;for(c=e,u=e+C;c<u;++c)v=t[c],A={},A[i.axis]=n||i.parse(V[c],c),s.push(fH(v,A,H,c));return s}function Qt(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function Pc(r,t,e){return r!==0?m5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Fc(r){let t,e,C,i,H;return r.horizontal?(t=r.base>r.x,e="left",C="right"):(t=r.base<r.y,e="bottom",C="top"),t?(i="end",H="start"):(i="start",H="end"),{start:e,end:C,reverse:t,top:i,bottom:H}}function Ec(r,t,e,C){let i=t.borderSkipped,H={};if(!i){r.borderSkipped=H;return}if(i===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:V,end:n,reverse:s,top:c,bottom:u}=Fc(r);i==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===C?i=c:(e._bottom||0)===C?i=u:(H[ko(u,V,n,s)]=!0,i=c)),H[ko(i,V,n,s)]=!0,r.borderSkipped=H}function ko(r,t,e,C){return C?(r=Bc(r,t,e),r=To(r,e,t)):r=To(r,t,e),r}function Bc(r,t,e){return r===t?e:r===e?t:r}function To(r,t,e){return r==="start"?t:r==="end"?e:r}function Rc(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var R3=class extends K0{parsePrimitiveData(t,e,C,i){return Oo(t,e,C,i)}parseArrayData(t,e,C,i){return Oo(t,e,C,i)}parseObjectData(t,e,C,i){let{iScale:H,vScale:V}=t,{xAxisKey:n="x",yAxisKey:s="y"}=this._parsing,c=H.axis==="x"?n:s,u=V.axis==="x"?n:s,A=[],v,_,b,y;for(v=C,_=C+i;v<_;++v)y=e[v],b={},b[H.axis]=H.parse(G0(y,c),v),A.push(fH(G0(y,u),b,V,v));return A}updateRangeFromParsed(t,e,C,i){super.updateRangeFromParsed(t,e,C,i);let H=C._custom;H&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,H.min),t.max=Math.max(t.max,H.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:C,vScale:i}=e,H=this.getParsed(t),V=H._custom,n=Qt(V)?"["+V.start+", "+V.end+"]":""+i.getLabelForValue(H[i.axis]);return{label:""+C.getLabelForValue(H[C.axis]),value:n}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,C,i){let H=i==="reset",{index:V,_cachedMeta:{vScale:n}}=this,s=n.getBasePixel(),c=n.isHorizontal(),u=this._getRuler(),{sharedOptions:A,includeOptions:v}=this._getSharedOptions(e,i);for(let _=e;_<e+C;_++){let b=this.getParsed(_),y=H||Z1(b[n.axis])?{base:s,head:s}:this._calculateBarValuePixels(_),k=this._calculateBarIndexPixels(_,u),P=(b._stacks||{})[n.axis],$={horizontal:c,base:y.base,enableBorderRadius:!P||Qt(b._custom)||V===P._top||V===P._bottom,x:c?y.head:k.center,y:c?k.center:y.head,height:c?k.size:Math.abs(y.size),width:c?Math.abs(y.size):k.size};v&&($.options=A||this.resolveDataElementOptions(_,t[_].active?"active":i));let I=$.options||t[_].options;Ec($,I,P,V),Rc($,I,u.ratio),this.updateElement(t[_],_,$,i)}}_getStacks(t,e){let{iScale:C}=this._cachedMeta,i=C.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),H=C.options.stacked,V=[],n=this._cachedMeta.controller.getParsed(e),s=n&&n[C.axis],c=u=>{let A=u._parsed.find(_=>_[C.axis]===s),v=A&&A[u.vScale.axis];if(Z1(v)||isNaN(v))return!0};for(let u of i)if(!(e!==void 0&&c(u))&&((H===!1||V.indexOf(u.stack)===-1||H===void 0&&u.stack===void 0)&&V.push(u.stack),u.index===t))break;return V.length||V.push(void 0),V}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(C=>t[C].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let C of this.chart.data.datasets)t[F1(this.chart.options.indexAxis==="x"?C.xAxisID:C.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,C){let i=this._getStacks(t,C),H=e!==void 0?i.indexOf(e):-1;return H===-1?i.length-1:H}_getRuler(){let t=this.options,e=this._cachedMeta,C=e.iScale,i=[],H,V;for(H=0,V=e.data.length;H<V;++H)i.push(C.getPixelForValue(this.getParsed(H)[C.axis],H));let n=t.barThickness;return{min:n||yc(e),pixels:i,start:C._startPixel,end:C._endPixel,stackCount:this._getStackCount(),scale:C,grouped:t.grouped,ratio:n?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:C,index:i},options:{base:H,minBarLength:V}}=this,n=H||0,s=this.getParsed(t),c=s._custom,u=Qt(c),A=s[e.axis],v=0,_=C?this.applyStack(e,s,C):A,b,y;_!==A&&(v=_-A,_=A),u&&(A=c.barStart,_=c.barEnd-c.barStart,A!==0&&m5(A)!==m5(c.barEnd)&&(v=0),v+=A);let k=!Z1(H)&&!u?H:v,P=e.getPixelForValue(k);if(this.chart.getDataVisibility(t)?b=e.getPixelForValue(v+_):b=P,y=b-P,Math.abs(y)<V){y=Pc(y,e,n)*V,A===n&&(P-=y/2);let $=e.getPixelForDecimal(0),I=e.getPixelForDecimal(1),X=Math.min($,I),Y=Math.max($,I);P=Math.max(Math.min(P,Y),X),b=P+y,C&&!u&&(s._stacks[e.axis]._visualValues[i]=e.getValueForPixel(b)-e.getValueForPixel(P))}if(P===e.getPixelForValue(n)){let $=m5(y)*e.getLineWidthForValue(n)/2;P+=$,y-=$}return{size:y,base:P,head:b,center:b+y/2}}_calculateBarIndexPixels(t,e){let C=e.scale,i=this.options,H=i.skipNull,V=F1(i.maxBarThickness,1/0),n,s,c=this._getAxisCount();if(e.grouped){let u=H?this._getStackCount(t):e.stackCount,A=i.barThickness==="flex"?kc(t,e,i,u*c):Oc(t,e,i,u*c),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,_=this._getAxis().indexOf(F1(v,this.getFirstScaleIdForIndexAxis())),b=this._getStackIndex(this.index,this._cachedMeta.stack,H?t:void 0)+_;n=A.start+A.chunk*b+A.chunk/2,s=Math.min(V,A.chunk*A.ratio)}else n=C.getPixelForValue(this.getParsed(t)[C.axis],t),s=Math.min(V,e.min*e.ratio);return{base:n-s/2,head:n+s/2,center:n,size:s}}draw(){let t=this._cachedMeta,e=t.vScale,C=t.data,i=C.length,H=0;for(;H<i;++H)this.getParsed(H)[e.axis]!==null&&!C[H].hidden&&C[H].draw(this._ctx)}};Q(R3,"id","bar"),Q(R3,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),Q(R3,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var f0=class extends K0{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:C,data:i=[],_dataset:H}=e,V=this.chart._animationsDisabled,{start:n,count:s}=yt(e,i,V);this._drawStart=n,this._drawCount=s,Ot(e)&&(n=0,s=i.length),C._chart=this.chart,C._datasetIndex=this.index,C._decimated=!!H._decimated,C.points=i;let c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(C,void 0,{animated:!V,options:c},t),this.updateElements(i,n,s,t)}updateElements(t,e,C,i){let H=i==="reset",{iScale:V,vScale:n,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:A}=this._getSharedOptions(e,i),v=V.axis,_=n.axis,{spanGaps:b,segment:y}=this.options,k=P3(b)?b:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||H||i==="none",$=e+C,I=t.length,X=e>0&&this.getParsed(e-1);for(let Y=0;Y<I;++Y){let c1=t[Y],L1=P?c1:{};if(Y<e||Y>=$){L1.skip=!0;continue}let r1=this.getParsed(Y),o1=Z1(r1[_]),h1=L1[v]=V.getPixelForValue(r1[v],Y),I1=L1[_]=H||o1?n.getBasePixel():n.getPixelForValue(s?this.applyStack(n,r1,s):r1[_],Y);L1.skip=isNaN(h1)||isNaN(I1)||o1,L1.stop=Y>0&&Math.abs(r1[v]-X[v])>k,y&&(L1.parsed=r1,L1.raw=c.data[Y]),A&&(L1.options=u||this.resolveDataElementOptions(Y,c1.active?"active":i)),P||this.updateElement(c1,Y,L1,i),X=r1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,C=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return C;let H=i[0].size(this.resolveDataElementOptions(0)),V=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(C,H,V)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};Q(f0,"id","line"),Q(f0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),Q(f0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function E3(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var He=class r{constructor(t){Q(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return E3()}parse(){return E3()}format(){return E3()}add(){return E3()}diff(){return E3()}startOf(){return E3()}endOf(){return E3()}},Dc={_date:He};function $c(r,t,e,C){let{controller:i,data:H,_sorted:V}=r,n=i._cachedMeta.iScale,s=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(n&&t===n.axis&&t!=="r"&&V&&H.length){let c=n._reversePixels?_t:u0;if(C){if(i._sharedOptions){let u=H[0],A=typeof u.getRange=="function"&&u.getRange(t);if(A){let v=c(H,t,e-A),_=c(H,t,e+A);return{lo:v.lo,hi:_.hi}}}}else{let u=c(H,t,e);if(s){let{vScale:A}=i._cachedMeta,{_parsed:v}=r,_=v.slice(0,u.lo+1).reverse().findIndex(y=>!Z1(y[A.axis]));u.lo-=Math.max(0,_);let b=v.slice(u.hi).findIndex(y=>!Z1(y[A.axis]));u.hi+=Math.max(0,b)}return u}}return{lo:0,hi:H.length-1}}function j4(r,t,e,C,i){let H=r.getSortedVisibleDatasetMetas(),V=e[t];for(let n=0,s=H.length;n<s;++n){let{index:c,data:u}=H[n],{lo:A,hi:v}=$c(H[n],t,V,i);for(let _=A;_<=v;++_){let b=u[_];b.skip||C(b,c,_)}}}function Ic(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(C,i){let H=t?Math.abs(C.x-i.x):0,V=e?Math.abs(C.y-i.y):0;return Math.sqrt(Math.pow(H,2)+Math.pow(V,2))}}function Kt(r,t,e,C,i){let H=[];return!i&&!r.isPointInArea(t)||j4(r,e,t,function(n,s,c){!i&&!Z5(n,r.chartArea,0)||n.inRange(t.x,t.y,C)&&H.push({element:n,datasetIndex:s,index:c})},!0),H}function zc(r,t,e,C){let i=[];function H(V,n,s){let{startAngle:c,endAngle:u}=V.getProps(["startAngle","endAngle"],C),{angle:A}=p6(V,{x:t.x,y:t.y});g4(A,c,u)&&i.push({element:V,datasetIndex:n,index:s})}return j4(r,e,t,H),i}function Nc(r,t,e,C,i,H){let V=[],n=Ic(e),s=Number.POSITIVE_INFINITY;function c(u,A,v){let _=u.inRange(t.x,t.y,i);if(C&&!_)return;let b=u.getCenterPoint(i);if(!(!!H||r.isPointInArea(b))&&!_)return;let k=n(t,b);k<s?(V=[{element:u,datasetIndex:A,index:v}],s=k):k===s&&V.push({element:u,datasetIndex:A,index:v})}return j4(r,e,t,c),V}function Xt(r,t,e,C,i,H){return!H&&!r.isPointInArea(t)?[]:e==="r"&&!C?zc(r,t,e,i):Nc(r,t,e,C,i,H)}function Po(r,t,e,C,i){let H=[],V=e==="x"?"inXRange":"inYRange",n=!1;return j4(r,e,t,(s,c,u)=>{s[V]&&s[V](t[e],i)&&(H.push({element:s,datasetIndex:c,index:u}),n=n||s.inRange(t.x,t.y,i))}),C&&!n?[]:H}var Wc={evaluateInteractionItems:j4,modes:{index(r,t,e,C){let i=b5(t,r),H=e.axis||"x",V=e.includeInvisible||!1,n=e.intersect?Kt(r,i,H,C,V):Xt(r,i,H,!1,C,V),s=[];return n.length?(r.getSortedVisibleDatasetMetas().forEach(c=>{let u=n[0].index,A=c.data[u];A&&!A.skip&&s.push({element:A,datasetIndex:c.index,index:u})}),s):[]},dataset(r,t,e,C){let i=b5(t,r),H=e.axis||"xy",V=e.includeInvisible||!1,n=e.intersect?Kt(r,i,H,C,V):Xt(r,i,H,!1,C,V);if(n.length>0){let s=n[0].datasetIndex,c=r.getDatasetMeta(s).data;n=[];for(let u=0;u<c.length;++u)n.push({element:c[u],datasetIndex:s,index:u})}return n},point(r,t,e,C){let i=b5(t,r),H=e.axis||"xy",V=e.includeInvisible||!1;return Kt(r,i,H,C,V)},nearest(r,t,e,C){let i=b5(t,r),H=e.axis||"xy",V=e.includeInvisible||!1;return Xt(r,i,H,e.intersect,C,V)},x(r,t,e,C){let i=b5(t,r);return Po(r,i,"x",e.intersect,C)},y(r,t,e,C){let i=b5(t,r);return Po(r,i,"y",e.intersect,C)}}},vH=["left","top","right","bottom"];function B4(r,t){return r.filter(e=>e.pos===t)}function Fo(r,t){return r.filter(e=>vH.indexOf(e.pos)===-1&&e.box.axis===t)}function R4(r,t){return r.sort((e,C)=>{let i=t?C:e,H=t?e:C;return i.weight===H.weight?i.index-H.index:i.weight-H.weight})}function Uc(r){let t=[],e,C,i,H,V,n;for(e=0,C=(r||[]).length;e<C;++e)i=r[e],{position:H,options:{stack:V,stackWeight:n=1}}=i,t.push({index:e,box:i,pos:H,horizontal:i.isHorizontal(),weight:i.weight,stack:V&&H+V,stackWeight:n});return t}function jc(r){let t={};for(let e of r){let{stack:C,pos:i,stackWeight:H}=e;if(!C||!vH.includes(i))continue;let V=t[C]||(t[C]={count:0,placed:0,weight:0,size:0});V.count++,V.weight+=H}return t}function Gc(r,t){let e=jc(r),{vBoxMaxWidth:C,hBoxMaxHeight:i}=t,H,V,n;for(H=0,V=r.length;H<V;++H){n=r[H];let{fullSize:s}=n.box,c=e[n.stack],u=c&&n.stackWeight/c.weight;n.horizontal?(n.width=u?u*C:s&&t.availableWidth,n.height=i):(n.width=C,n.height=u?u*i:s&&t.availableHeight)}return e}function qc(r){let t=Uc(r),e=R4(t.filter(c=>c.box.fullSize),!0),C=R4(B4(t,"left"),!0),i=R4(B4(t,"right")),H=R4(B4(t,"top"),!0),V=R4(B4(t,"bottom")),n=Fo(t,"x"),s=Fo(t,"y");return{fullSize:e,leftAndTop:C.concat(H),rightAndBottom:i.concat(s).concat(V).concat(n),chartArea:B4(t,"chartArea"),vertical:C.concat(i).concat(s),horizontal:H.concat(V).concat(n)}}function Eo(r,t,e,C){return Math.max(r[e],t[e])+Math.max(r[C],t[C])}function xH(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function Yc(r,t,e,C){let{pos:i,box:H}=e,V=r.maxPadding;if(!w1(i)){e.size&&(r[i]-=e.size);let A=C[e.stack]||{size:0,count:1};A.size=Math.max(A.size,e.horizontal?H.height:H.width),e.size=A.size/A.count,r[i]+=e.size}H.getPadding&&xH(V,H.getPadding());let n=Math.max(0,t.outerWidth-Eo(V,r,"left","right")),s=Math.max(0,t.outerHeight-Eo(V,r,"top","bottom")),c=n!==r.w,u=s!==r.h;return r.w=n,r.h=s,e.horizontal?{same:c,other:u}:{same:u,other:c}}function Qc(r){let t=r.maxPadding;function e(C){let i=Math.max(t[C]-r[C],0);return r[C]+=i,i}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function Kc(r,t){let e=t.maxPadding;function C(i){let H={left:0,top:0,right:0,bottom:0};return i.forEach(V=>{H[V]=Math.max(t[V],e[V])}),H}return C(r?["left","right"]:["top","bottom"])}function I4(r,t,e,C){let i=[],H,V,n,s,c,u;for(H=0,V=r.length,c=0;H<V;++H){n=r[H],s=n.box,s.update(n.width||t.w,n.height||t.h,Kc(n.horizontal,t));let{same:A,other:v}=Yc(t,e,n,C);c|=A&&i.length,u=u||v,s.fullSize||i.push(n)}return c&&I4(i,t,e,C)||u}function P6(r,t,e,C,i){r.top=e,r.left=t,r.right=t+C,r.bottom=e+i,r.width=C,r.height=i}function Bo(r,t,e,C){let i=e.padding,{x:H,y:V}=t;for(let n of r){let s=n.box,c=C[n.stack]||{count:1,placed:0,weight:1},u=n.stackWeight/c.weight||1;if(n.horizontal){let A=t.w*u,v=c.size||s.height;k3(c.start)&&(V=c.start),s.fullSize?P6(s,i.left,V,e.outerWidth-i.right-i.left,v):P6(s,t.left+c.placed,V,A,v),c.start=V,c.placed+=A,V=s.bottom}else{let A=t.h*u,v=c.size||s.width;k3(c.start)&&(H=c.start),s.fullSize?P6(s,H,i.top,v,e.outerHeight-i.bottom-i.top):P6(s,H,t.top+c.placed,v,A),c.start=H,c.placed+=A,H=s.right}}t.x=H,t.y=V}var F6={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,C){if(!r)return;let i=P2(r.options.layout.padding),H=Math.max(t-i.width,0),V=Math.max(e-i.height,0),n=qc(r.boxes),s=n.vertical,c=n.horizontal;$1(r.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});let u=s.reduce((y,k)=>k.box.options&&k.box.options.display===!1?y:y+1,0)||1,A=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:H,availableHeight:V,vBoxMaxWidth:H/2/u,hBoxMaxHeight:V/2}),v=Object.assign({},i);xH(v,P2(C));let _=Object.assign({maxPadding:v,w:H,h:V,x:i.left,y:i.top},i),b=Gc(s.concat(c),A);I4(n.fullSize,_,A,b),I4(s,_,A,b),I4(c,_,A,b)&&I4(s,_,A,b),Qc(_),Bo(n.leftAndTop,_,A,b),_.x+=_.w,_.y+=_.h,Bo(n.rightAndBottom,_,A,b),r.chartArea={left:_.left,top:_.top,right:_.left+_.w,bottom:_.top+_.h,height:_.h,width:_.w},$1(n.chartArea,y=>{let k=y.box;Object.assign(k,r.chartArea),k.update(_.w,_.h,{left:0,top:0,right:0,bottom:0})})}},U6=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,C){}removeEventListener(t,e,C){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,C,i){return e=Math.max(0,e||t.width),C=C||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):C)}}isAttached(t){return!0}updateConfig(t){}},Ve=class extends U6{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},z6="$chartjs",Xc={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ro=r=>r===null||r==="";function Jc(r,t){let e=r.style,C=r.getAttribute("height"),i=r.getAttribute("width");if(r[z6]={initial:{height:C,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Ro(i)){let H=y6(r,"width");H!==void 0&&(r.width=H)}if(Ro(C))if(r.style.height==="")r.height=r.width/(t||2);else{let H=y6(r,"height");H!==void 0&&(r.height=H)}return r}var gH=It?{passive:!0}:!1;function td(r,t,e){r&&r.addEventListener(t,e,gH)}function ed(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,gH)}function rd(r,t){let e=Xc[r.type]||r.type,{x:C,y:i}=b5(r,t);return{type:e,chart:t,native:r,x:C!==void 0?C:null,y:i!==void 0?i:null}}function j6(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function Cd(r,t,e){let C=r.canvas,i=new MutationObserver(H=>{let V=!1;for(let n of H)V=V||j6(n.addedNodes,C),V=V&&!j6(n.removedNodes,C);V&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function id(r,t,e){let C=r.canvas,i=new MutationObserver(H=>{let V=!1;for(let n of H)V=V||j6(n.removedNodes,C),V=V&&!j6(n.addedNodes,C);V&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}var W4=new Map,Do=0;function _H(){let r=window.devicePixelRatio;r!==Do&&(Do=r,W4.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function od(r,t){W4.size||window.addEventListener("resize",_H),W4.set(r,t)}function Hd(r){W4.delete(r),W4.size||window.removeEventListener("resize",_H)}function Vd(r,t,e){let C=r.canvas,i=C&&P4(C);if(!i)return;let H=A6((n,s)=>{let c=i.clientWidth;e(n,s),c<i.clientWidth&&e()},window),V=new ResizeObserver(n=>{let s=n[0],c=s.contentRect.width,u=s.contentRect.height;c===0&&u===0||H(c,u)});return V.observe(i),od(r,H),V}function Jt(r,t,e){e&&e.disconnect(),t==="resize"&&Hd(r)}function ad(r,t,e){let C=r.canvas,i=A6(H=>{r.ctx!==null&&e(rd(H,r))},r);return td(C,t,i),i}var ae=class extends U6{acquireContext(t,e){let C=t&&t.getContext&&t.getContext("2d");return C&&C.canvas===t?(Jc(t,e),C):null}releaseContext(t){let e=t.canvas;if(!e[z6])return!1;let C=e[z6].initial;["height","width"].forEach(H=>{let V=C[H];Z1(V)?e.removeAttribute(H):e.setAttribute(H,V)});let i=C.style||{};return Object.keys(i).forEach(H=>{e.style[H]=i[H]}),e.width=e.width,delete e[z6],!0}addEventListener(t,e,C){this.removeEventListener(t,e);let i=t.$proxies||(t.$proxies={}),V={attach:Cd,detach:id,resize:Vd}[e]||ad;i[e]=V(t,e,C)}removeEventListener(t,e){let C=t.$proxies||(t.$proxies={}),i=C[e];if(!i)return;({attach:Jt,detach:Jt,resize:Jt}[e]||ed)(t,e,i),C[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,C,i){return $t(t,e,C,i)}isAttached(t){let e=t&&P4(t);return!!(e&&e.isConnected)}};function nd(r){return!T4()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?Ve:ae}var O5=class{constructor(){Q(this,"x");Q(this,"y");Q(this,"active",!1);Q(this,"options");Q(this,"$animations")}tooltipPosition(t){let{x:e,y:C}=this.getProps(["x","y"],t);return{x:e,y:C}}hasValue(){return P3(this.x)&&P3(this.y)}getProps(t,e){let C=this.$animations;if(!e||!C)return this;let i={};return t.forEach(H=>{i[H]=C[H]&&C[H].active()?C[H]._to:this[H]}),i}};Q(O5,"defaults",{}),Q(O5,"defaultRoutes");function Ld(r,t){let e=r.options.ticks,C=sd(r),i=Math.min(e.maxTicksLimit||C,C),H=e.major.enabled?ld(t):[],V=H.length,n=H[0],s=H[V-1],c=[];if(V>i)return cd(t,c,H,V/i),c;let u=Md(H,t,i);if(V>0){let A,v,_=V>1?Math.round((s-n)/(V-1)):null;for(E6(t,c,u,Z1(_)?0:n-_,n),A=0,v=V-1;A<v;A++)E6(t,c,u,H[A],H[A+1]);return E6(t,c,u,s,Z1(_)?t.length:s+_),c}return E6(t,c,u),c}function sd(r){let t=r.options.offset,e=r._tickSize(),C=r._length/e+(t?0:1),i=r._maxLength/e;return Math.floor(Math.min(C,i))}function Md(r,t,e){let C=dd(r),i=t.length/e;if(!C)return Math.max(i,1);let H=vt(C);for(let V=0,n=H.length-1;V<n;V++){let s=H[V];if(s>i)return s}return Math.max(i,1)}function ld(r){let t=[],e,C;for(e=0,C=r.length;e<C;e++)r[e].major&&t.push(e);return t}function cd(r,t,e,C){let i=0,H=e[0],V;for(C=Math.ceil(C),V=0;V<r.length;V++)V===H&&(t.push(r[V]),i++,H=e[i*C])}function E6(r,t,e,C,i){let H=F1(C,0),V=Math.min(F1(i,r.length),r.length),n=0,s,c,u;for(e=Math.ceil(e),i&&(s=i-C,e=s/Math.floor(s/e)),u=H;u<0;)n++,u=Math.round(H+n*e);for(c=Math.max(H,0);c<V;c++)c===u&&(t.push(r[c]),n++,u=Math.round(H+n*e))}function dd(r){let t=r.length,e,C;if(t<2)return!1;for(C=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==C)return!1;return C}var pd=r=>r==="left"?"right":r==="right"?"left":r,$o=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,Io=(r,t)=>Math.min(t||r,r);function zo(r,t){let e=[],C=r.length/t,i=r.length,H=0;for(;H<i;H+=C)e.push(r[Math.floor(H)]);return e}function ud(r,t,e){let C=r.ticks.length,i=Math.min(t,C-1),H=r._startPixel,V=r._endPixel,n=1e-6,s=r.getPixelForTick(i),c;if(!(e&&(C===1?c=Math.max(s-H,V-s):t===0?c=(r.getPixelForTick(1)-s)/2:c=(s-r.getPixelForTick(i-1))/2,s+=i<t?c:-c,s<H-n||s>V+n)))return s}function md(r,t){$1(r,e=>{let C=e.gc,i=C.length/2,H;if(i>t){for(H=0;H<i;++H)delete e.data[C[H]];C.splice(0,i)}})}function D4(r){return r.drawTicks?r.tickLength:0}function No(r,t){if(!r.display)return 0;let e=O2(r.font,t),C=P2(r.padding);return(J1(r.text)?r.text.length:1)*e.lineHeight+C.height}function hd(r,t){return Q5(r,{scale:t,type:"scale"})}function Ad(r,t,e){return Q5(r,{tick:e,index:t,type:"tick"})}function fd(r,t,e){let C=bt(r);return(e&&t!=="right"||!e&&t==="right")&&(C=pd(C)),C}function vd(r,t,e,C){let{top:i,left:H,bottom:V,right:n,chart:s}=r,{chartArea:c,scales:u}=s,A=0,v,_,b,y=V-i,k=n-H;if(r.isHorizontal()){if(_=f6(C,H,n),w1(e)){let P=Object.keys(e)[0],$=e[P];b=u[P].getPixelForValue($)+y-t}else e==="center"?b=(c.bottom+c.top)/2+y-t:b=$o(r,e,t);v=n-H}else{if(w1(e)){let P=Object.keys(e)[0],$=e[P];_=u[P].getPixelForValue($)-k+t}else e==="center"?_=(c.left+c.right)/2-k+t:_=$o(r,e,t);b=f6(C,V,i),A=e==="left"?-l2:l2}return{titleX:_,titleY:b,maxWidth:v,rotation:A}}var D3=class r extends O5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:C,_suggestedMax:i}=this;return t=N2(t,Number.POSITIVE_INFINITY),e=N2(e,Number.NEGATIVE_INFINITY),C=N2(C,Number.POSITIVE_INFINITY),i=N2(i,Number.NEGATIVE_INFINITY),{min:N2(t,C),max:N2(e,i),minDefined:V2(t),maxDefined:V2(e)}}getMinMax(t){let{min:e,max:C,minDefined:i,maxDefined:H}=this.getUserBounds(),V;if(i&&H)return{min:e,max:C};let n=this.getMatchingVisibleMetas();for(let s=0,c=n.length;s<c;++s)V=n[s].controller.getMinMax(this,t),i||(e=Math.min(e,V.min)),H||(C=Math.max(C,V.max));return e=H&&e>C?C:e,C=i&&e>C?e:C,{min:N2(e,N2(C,e)),max:N2(C,N2(e,C))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){K1(this.options.beforeUpdate,[this])}update(t,e,C){let{beginAtZero:i,grace:H,ticks:V}=this.options,n=V.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=C=Object.assign({left:0,right:0,top:0,bottom:0},C),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+C.left+C.right:this.height+C.top+C.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Et(this,H,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=n<this.ticks.length;this._convertTicksToLabels(s?zo(this.ticks,n):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),V.display&&(V.autoSkip||V.source==="auto")&&(this.ticks=Ld(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,C;this.isHorizontal()?(e=this.left,C=this.right):(e=this.top,C=this.bottom,t=!t),this._startPixel=e,this._endPixel=C,this._reversePixels=t,this._length=C-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){K1(this.options.afterUpdate,[this])}beforeSetDimensions(){K1(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){K1(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),K1(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){K1(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,C,i,H;for(C=0,i=t.length;C<i;C++)H=t[C],H.label=K1(e.callback,[H.value,C,t],this)}afterTickToLabelConversion(){K1(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){K1(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,C=Io(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,H=e.maxRotation,V=i,n,s,c;if(!this._isVisible()||!e.display||i>=H||C<=1||!this.isHorizontal()){this.labelRotation=i;return}let u=this._getLabelSizes(),A=u.widest.width,v=u.highest.height,_=g2(this.chart.width-A,0,this.maxWidth);n=t.offset?this.maxWidth/C:_/(C-1),A+6>n&&(n=_/(C-(t.offset?.5:1)),s=this.maxHeight-D4(t.grid)-e.padding-No(t.title,this.chart.options.font),c=Math.sqrt(A*A+v*v),V=x4(Math.min(Math.asin(g2((u.highest.height+6)/n,-1,1)),Math.asin(g2(s/c,-1,1))-Math.asin(g2(v/c,-1,1)))),V=Math.max(i,Math.min(H,V))),this.labelRotation=V}afterCalculateLabelRotation(){K1(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){K1(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:C,title:i,grid:H}}=this,V=this._isVisible(),n=this.isHorizontal();if(V){let s=No(i,e.options.font);if(n?(t.width=this.maxWidth,t.height=D4(H)+s):(t.height=this.maxHeight,t.width=D4(H)+s),C.display&&this.ticks.length){let{first:c,last:u,widest:A,highest:v}=this._getLabelSizes(),_=C.padding*2,b=Y5(this.labelRotation),y=Math.cos(b),k=Math.sin(b);if(n){let P=C.mirror?0:k*A.width+y*v.height;t.height=Math.min(this.maxHeight,t.height+P+_)}else{let P=C.mirror?0:y*A.width+k*v.height;t.width=Math.min(this.maxWidth,t.width+P+_)}this._calculatePadding(c,u,k,y)}}this._handleMargins(),n?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,C,i){let{ticks:{align:H,padding:V},position:n}=this.options,s=this.labelRotation!==0,c=n!=="top"&&this.axis==="x";if(this.isHorizontal()){let u=this.getPixelForTick(0)-this.left,A=this.right-this.getPixelForTick(this.ticks.length-1),v=0,_=0;s?c?(v=i*t.width,_=C*e.height):(v=C*t.height,_=i*e.width):H==="start"?_=e.width:H==="end"?v=t.width:H!=="inner"&&(v=t.width/2,_=e.width/2),this.paddingLeft=Math.max((v-u+V)*this.width/(this.width-u),0),this.paddingRight=Math.max((_-A+V)*this.width/(this.width-A),0)}else{let u=e.height/2,A=t.height/2;H==="start"?(u=0,A=t.height):H==="end"&&(u=e.height,A=0),this.paddingTop=u+V,this.paddingBottom=A+V}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){K1(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,C;for(e=0,C=t.length;e<C;e++)Z1(t[e].label)&&(t.splice(e,1),C--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,C=this.ticks;e<C.length&&(C=zo(C,e)),this._labelSizes=t=this._computeLabelSizes(C,C.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,C){let{ctx:i,_longestTextCache:H}=this,V=[],n=[],s=Math.floor(e/Io(e,C)),c=0,u=0,A,v,_,b,y,k,P,$,I,X,Y;for(A=0;A<e;A+=s){if(b=t[A].label,y=this._resolveTickFontOptions(A),i.font=k=y.string,P=H[k]=H[k]||{data:{},gc:[]},$=y.lineHeight,I=X=0,!Z1(b)&&!J1(b))I=m7(i,P.data,P.gc,I,b),X=$;else if(J1(b))for(v=0,_=b.length;v<_;++v)Y=b[v],!Z1(Y)&&!J1(Y)&&(I=m7(i,P.data,P.gc,I,Y),X+=$);V.push(I),n.push(X),c=Math.max(I,c),u=Math.max(X,u)}md(H,e);let c1=V.indexOf(c),L1=n.indexOf(u),r1=o1=>({width:V[o1]||0,height:n[o1]||0});return{first:r1(0),last:r1(e-1),widest:r1(c1),highest:r1(L1),widths:V,heights:n}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return gt(this._alignToPixels?m0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let C=e[t];return C.$context||(C.$context=Ad(this.getContext(),t,C))}return this.$context||(this.$context=hd(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=Y5(this.labelRotation),C=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),H=this._getLabelSizes(),V=t.autoSkipPadding||0,n=H?H.widest.width+V:0,s=H?H.highest.height+V:0;return this.isHorizontal()?s*C>n*i?n/C:s/i:s*i<n*C?s/C:n/i}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,C=this.chart,i=this.options,{grid:H,position:V,border:n}=i,s=H.offset,c=this.isHorizontal(),A=this.ticks.length+(s?1:0),v=D4(H),_=[],b=n.setContext(this.getContext()),y=b.display?b.width:0,k=y/2,P=function(K){return m0(C,K,y)},$,I,X,Y,c1,L1,r1,o1,h1,I1,b1,n2;if(V==="top")$=P(this.bottom),L1=this.bottom-v,o1=$-k,I1=P(t.top)+k,n2=t.bottom;else if(V==="bottom")$=P(this.top),I1=t.top,n2=P(t.bottom)-k,L1=$+k,o1=this.top+v;else if(V==="left")$=P(this.right),c1=this.right-v,r1=$-k,h1=P(t.left)+k,b1=t.right;else if(V==="right")$=P(this.left),h1=t.left,b1=P(t.right)-k,c1=$+k,r1=this.left+v;else if(e==="x"){if(V==="center")$=P((t.top+t.bottom)/2+.5);else if(w1(V)){let K=Object.keys(V)[0],G1=V[K];$=P(this.chart.scales[K].getPixelForValue(G1))}I1=t.top,n2=t.bottom,L1=$+k,o1=L1+v}else if(e==="y"){if(V==="center")$=P((t.left+t.right)/2);else if(w1(V)){let K=Object.keys(V)[0],G1=V[K];$=P(this.chart.scales[K].getPixelForValue(G1))}c1=$-k,r1=c1-v,h1=t.left,b1=t.right}let j1=F1(i.ticks.maxTicksLimit,A),y1=Math.max(1,Math.ceil(A/j1));for(I=0;I<A;I+=y1){let K=this.getContext(I),G1=H.setContext(K),H1=n.setContext(K),W=G1.lineWidth,J=G1.color,V1=H1.dash||[],p1=H1.dashOffset,a1=G1.tickWidth,n1=G1.tickColor,_1=G1.tickBorderDash||[],O1=G1.tickBorderDashOffset;X=ud(this,I,s),X!==void 0&&(Y=m0(C,X,W),c?c1=r1=h1=b1=Y:L1=o1=I1=n2=Y,_.push({tx1:c1,ty1:L1,tx2:r1,ty2:o1,x1:h1,y1:I1,x2:b1,y2:n2,width:W,color:J,borderDash:V1,borderDashOffset:p1,tickWidth:a1,tickColor:n1,tickBorderDash:_1,tickBorderDashOffset:O1}))}return this._ticksLength=A,this._borderValue=$,_}_computeLabelItems(t){let e=this.axis,C=this.options,{position:i,ticks:H}=C,V=this.isHorizontal(),n=this.ticks,{align:s,crossAlign:c,padding:u,mirror:A}=H,v=D4(C.grid),_=v+u,b=A?-u:_,y=-Y5(this.labelRotation),k=[],P,$,I,X,Y,c1,L1,r1,o1,h1,I1,b1,n2="middle";if(i==="top")c1=this.bottom-b,L1=this._getXAxisLabelAlignment();else if(i==="bottom")c1=this.top+b,L1=this._getXAxisLabelAlignment();else if(i==="left"){let y1=this._getYAxisLabelAlignment(v);L1=y1.textAlign,Y=y1.x}else if(i==="right"){let y1=this._getYAxisLabelAlignment(v);L1=y1.textAlign,Y=y1.x}else if(e==="x"){if(i==="center")c1=(t.top+t.bottom)/2+_;else if(w1(i)){let y1=Object.keys(i)[0],K=i[y1];c1=this.chart.scales[y1].getPixelForValue(K)+_}L1=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")Y=(t.left+t.right)/2-_;else if(w1(i)){let y1=Object.keys(i)[0],K=i[y1];Y=this.chart.scales[y1].getPixelForValue(K)}L1=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(s==="start"?n2="top":s==="end"&&(n2="bottom"));let j1=this._getLabelSizes();for(P=0,$=n.length;P<$;++P){I=n[P],X=I.label;let y1=H.setContext(this.getContext(P));r1=this.getPixelForTick(P)+H.labelOffset,o1=this._resolveTickFontOptions(P),h1=o1.lineHeight,I1=J1(X)?X.length:1;let K=I1/2,G1=y1.color,H1=y1.textStrokeColor,W=y1.textStrokeWidth,J=L1;V?(Y=r1,L1==="inner"&&(P===$-1?J=this.options.reverse?"left":"right":P===0?J=this.options.reverse?"right":"left":J="center"),i==="top"?c==="near"||y!==0?b1=-I1*h1+h1/2:c==="center"?b1=-j1.highest.height/2-K*h1+h1:b1=-j1.highest.height+h1/2:c==="near"||y!==0?b1=h1/2:c==="center"?b1=j1.highest.height/2-K*h1:b1=j1.highest.height-I1*h1,A&&(b1*=-1),y!==0&&!y1.showLabelBackdrop&&(Y+=h1/2*Math.sin(y))):(c1=r1,b1=(1-I1)*h1/2);let V1;if(y1.showLabelBackdrop){let p1=P2(y1.backdropPadding),a1=j1.heights[P],n1=j1.widths[P],_1=b1-p1.top,O1=0-p1.left;switch(n2){case"middle":_1-=a1/2;break;case"bottom":_1-=a1;break}switch(L1){case"center":O1-=n1/2;break;case"right":O1-=n1;break;case"inner":P===$-1?O1-=n1:P>0&&(O1-=n1/2);break}V1={left:O1,top:_1,width:n1+p1.width,height:a1+p1.height,color:y1.backdropColor}}k.push({label:X,font:o1,textOffset:b1,options:{rotation:y,color:G1,strokeColor:H1,strokeWidth:W,textAlign:J,textBaseline:n2,translation:[Y,c1],backdrop:V1}})}return k}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-Y5(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:C,mirror:i,padding:H}}=this.options,V=this._getLabelSizes(),n=t+H,s=V.widest.width,c,u;return e==="left"?i?(u=this.right+H,C==="near"?c="left":C==="center"?(c="center",u+=s/2):(c="right",u+=s)):(u=this.right-n,C==="near"?c="right":C==="center"?(c="center",u-=s/2):(c="left",u=this.left)):e==="right"?i?(u=this.left+H,C==="near"?c="right":C==="center"?(c="center",u-=s/2):(c="left",u-=s)):(u=this.left+n,C==="near"?c="left":C==="center"?(c="center",u+=s/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:C,top:i,width:H,height:V}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(C,i,H,V),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let i=this.ticks.findIndex(H=>H.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){let e=this.options.grid,C=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),H,V,n=(s,c,u)=>{!u.width||!u.color||(C.save(),C.lineWidth=u.width,C.strokeStyle=u.color,C.setLineDash(u.borderDash||[]),C.lineDashOffset=u.borderDashOffset,C.beginPath(),C.moveTo(s.x,s.y),C.lineTo(c.x,c.y),C.stroke(),C.restore())};if(e.display)for(H=0,V=i.length;H<V;++H){let s=i[H];e.drawOnChartArea&&n({x:s.x1,y:s.y1},{x:s.x2,y:s.y2},s),e.drawTicks&&n({x:s.tx1,y:s.ty1},{x:s.tx2,y:s.ty2},{color:s.tickColor,width:s.tickWidth,borderDash:s.tickBorderDash,borderDashOffset:s.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:C,grid:i}}=this,H=C.setContext(this.getContext()),V=C.display?H.width:0;if(!V)return;let n=i.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,u,A,v;this.isHorizontal()?(c=m0(t,this.left,V)-V/2,u=m0(t,this.right,n)+n/2,A=v=s):(A=m0(t,this.top,V)-V/2,v=m0(t,this.bottom,n)+n/2,c=u=s),e.save(),e.lineWidth=H.width,e.strokeStyle=H.color,e.beginPath(),e.moveTo(c,A),e.lineTo(u,v),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let C=this.ctx,i=this._computeLabelArea();i&&b4(C,i);let H=this.getLabelItems(t);for(let V of H){let n=V.options,s=V.font,c=V.label,u=V.textOffset;f7(C,c,0,u,s,n)}i&&y4(C)}drawTitle(){let{ctx:t,options:{position:e,title:C,reverse:i}}=this;if(!C.display)return;let H=O2(C.font),V=P2(C.padding),n=C.align,s=H.lineHeight/2;e==="bottom"||e==="center"||w1(e)?(s+=V.bottom,J1(C.text)&&(s+=H.lineHeight*(C.text.length-1))):s+=V.top;let{titleX:c,titleY:u,maxWidth:A,rotation:v}=vd(this,s,e,n);f7(t,C.text,0,0,H,{color:C.color,maxWidth:A,rotation:v,textAlign:fd(n,e,i),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,C=F1(t.grid&&t.grid.z,-1),i=F1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:H=>{this.draw(H)}}]:[{z:C,draw:H=>{this.drawBackground(),this.drawGrid(H),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:H=>{this.drawLabels(H)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),C=this.axis+"AxisID",i=[],H,V;for(H=0,V=e.length;H<V;++H){let n=e[H];n[C]===this.id&&(!t||n.type===t)&&i.push(n)}return i}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return O2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},_7=class{constructor(t,e,C){this.type=t,this.scope=e,this.override=C,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),C;_d(e)&&(C=this.register(e));let i=this.items,H=t.id,V=this.scope+"."+H;if(!H)throw new Error("class does not have id: "+t);return H in i||(i[H]=t,xd(t,V,C),this.override&&a2.override(t.id,t.overrides)),V}get(t){return this.items[t]}unregister(t){let e=this.items,C=t.id,i=this.scope;C in e&&delete e[C],i&&C in a2[i]&&(delete a2[i][C],this.override&&delete q0[C])}};function xd(r,t,e){let C=o5(Object.create(null),[e?a2.get(e):{},a2.get(t),r.defaults]);a2.set(t,C),r.defaultRoutes&&gd(t,r.defaultRoutes),r.descriptors&&a2.describe(t,r.descriptors)}function gd(r,t){Object.keys(t).forEach(e=>{let C=e.split("."),i=C.pop(),H=[r].concat(C).join("."),V=t[e].split("."),n=V.pop(),s=V.join(".");a2.route(H,i,s,n)})}function _d(r){return"id"in r&&"defaults"in r}var ne=class{constructor(){this.controllers=new _7(K0,"datasets",!0),this.elements=new _7(O5,"elements"),this.plugins=new _7(Object,"plugins"),this.scales=new _7(D3,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,C){[...e].forEach(i=>{let H=C||this._getRegistryForType(i);C||H.isForType(i)||H===this.plugins&&i.id?this._exec(t,H,i):$1(i,V=>{let n=C||this._getRegistryForType(V);this._exec(t,n,V)})})}_exec(t,e,C){let i=v4(t);K1(C["before"+i],[],C),e[t](C),K1(C["after"+i],[],C)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let C=this._typedRegistries[e];if(C.isForType(t))return C}return this.plugins}_get(t,e,C){let i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+C+".");return i}},X5=new ne,Le=class{constructor(){this._init=void 0}notify(t,e,C,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let H=i?this._descriptors(t).filter(i):this._descriptors(t),V=this._notify(H,t,e,C);return e==="afterDestroy"&&(this._notify(H,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),V}_notify(t,e,C,i){i=i||{};for(let H of t){let V=H.plugin,n=V[C],s=[e,i,H.options];if(K1(n,s,V)===!1&&i.cancelable)return!1}return!0}invalidate(){Z1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let C=t&&t.config,i=F1(C.options&&C.options.plugins,{}),H=Sd(C);return i===!1&&!e?[]:wd(t,H,i,e)}_notifyStateChanges(t){let e=this._oldCache||[],C=this._cache,i=(H,V)=>H.filter(n=>!V.some(s=>n.plugin.id===s.plugin.id));this._notify(i(e,C),t,"stop"),this._notify(i(C,e),t,"start")}};function Sd(r){let t={},e=[],C=Object.keys(X5.plugins.items);for(let H=0;H<C.length;H++)e.push(X5.getPlugin(C[H]));let i=r.plugins||[];for(let H=0;H<i.length;H++){let V=i[H];e.indexOf(V)===-1&&(e.push(V),t[V.id]=!0)}return{plugins:e,localIds:t}}function Zd(r,t){return!t&&r===!1?null:r===!0?{}:r}function wd(r,{plugins:t,localIds:e},C,i){let H=[],V=r.getContext();for(let n of t){let s=n.id,c=Zd(C[s],i);c!==null&&H.push({plugin:n,options:bd(r.config,{plugin:n,local:e[s]},c,V)})}return H}function bd(r,{plugin:t,local:e},C,i){let H=r.pluginScopeKeys(t),V=r.getOptionScopes(C,H);return e&&t.defaults&&V.push(t.defaults),r.createResolver(V,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function se(r,t){let e=a2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function yd(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function Od(r,t){return r===t?"_index_":"_value_"}function Wo(r){if(r==="x"||r==="y"||r==="r")return r}function kd(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function Me(r,...t){if(Wo(r))return r;for(let e of t){let C=e.axis||kd(e.position)||r.length>1&&Wo(r[0].toLowerCase());if(C)return C}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function Uo(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function Td(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(C=>C.xAxisID===r||C.yAxisID===r);if(e.length)return Uo(r,"x",e[0])||Uo(r,"y",e[0])}return{}}function Pd(r,t){let e=q0[r.type]||{scales:{}},C=t.scales||{},i=se(r.type,t),H=Object.create(null);return Object.keys(C).forEach(V=>{let n=C[V];if(!w1(n))return console.error(`Invalid scale configuration for scale: ${V}`);if(n._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${V}`);let s=Me(V,n,Td(V,r),a2.scales[n.type]),c=Od(s,i),u=e.scales||{};H[V]=O3(Object.create(null),[{axis:s},n,u[s],u[c]])}),r.data.datasets.forEach(V=>{let n=V.type||r.type,s=V.indexAxis||se(n,t),u=(q0[n]||{}).scales||{};Object.keys(u).forEach(A=>{let v=yd(A,s),_=V[v+"AxisID"]||v;H[_]=H[_]||Object.create(null),O3(H[_],[{axis:v},C[_],u[A]])})}),Object.keys(H).forEach(V=>{let n=H[V];O3(n,[a2.scales[n.type],a2.scale])}),H}function SH(r){let t=r.options||(r.options={});t.plugins=F1(t.plugins,{}),t.scales=Pd(r,t)}function ZH(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function Fd(r){return r=r||{},r.data=ZH(r.data),SH(r),r}var jo=new Map,wH=new Set;function B6(r,t){let e=jo.get(r);return e||(e=t(),jo.set(r,e),wH.add(e)),e}var $4=(r,t,e)=>{let C=G0(t,e);C!==void 0&&r.add(C)},le=class{constructor(t){this._config=Fd(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ZH(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),SH(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return B6(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return B6(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return B6(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,C=this.type;return B6(`${C}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let C=this._scopeCache,i=C.get(t);return(!i||e)&&(i=new Map,C.set(t,i)),i}getOptionScopes(t,e,C){let{options:i,type:H}=this,V=this._cachedScopes(t,C),n=V.get(e);if(n)return n;let s=new Set;e.forEach(u=>{t&&(s.add(t),u.forEach(A=>$4(s,t,A))),u.forEach(A=>$4(s,i,A)),u.forEach(A=>$4(s,q0[H]||{},A)),u.forEach(A=>$4(s,a2,A)),u.forEach(A=>$4(s,g6,A))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),wH.has(e)&&V.set(e,c),c}chartOptionScopes(){let{options:t,type:e}=this;return[t,q0[e]||{},a2.datasets[e]||{},{type:e},a2,g6]}resolveNamedOptions(t,e,C,i=[""]){let H={$shared:!0},{resolver:V,subPrefixes:n}=Go(this._resolverCache,t,i),s=V;if(Bd(V,e)){H.$shared=!1,C=G5(C)?C():C;let c=this.createResolver(t,C,n);s=j0(V,C,c)}for(let c of e)H[c]=s[c];return H}createResolver(t,e,C=[""],i){let{resolver:H}=Go(this._resolverCache,t,C);return w1(e)?j0(H,e,void 0,i):H}};function Go(r,t,e){let C=r.get(t);C||(C=new Map,r.set(t,C));let i=e.join(),H=C.get(i);return H||(H={resolver:k4(t,e),subPrefixes:e.filter(n=>!n.toLowerCase().includes("hover"))},C.set(i,H)),H}var Ed=r=>w1(r)&&Object.getOwnPropertyNames(r).some(t=>G5(r[t]));function Bd(r,t){let{isScriptable:e,isIndexable:C}=Z6(r);for(let i of t){let H=e(i),V=C(i),n=(V||H)&&r[i];if(H&&(G5(n)||Ed(n))||V&&J1(n))return!0}return!1}var Rd="4.5.1",Dd=["top","bottom","left","right","chartArea"];function qo(r,t){return r==="top"||r==="bottom"||Dd.indexOf(r)===-1&&t==="x"}function Yo(r,t){return function(e,C){return e[r]===C[r]?e[t]-C[t]:e[r]-C[r]}}function Qo(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),K1(e&&e.onComplete,[r],t)}function $d(r){let t=r.chart,e=t.options.animation;K1(e&&e.onProgress,[r],t)}function bH(r){return T4()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var N6={},Ko=r=>{let t=bH(r);return Object.values(N6).filter(e=>e.canvas===t).pop()};function Id(r,t,e){let C=Object.keys(r);for(let i of C){let H=+i;if(H>=t){let V=r[i];delete r[i],(e>0||H>t)&&(r[H+e]=V)}}}function zd(r,t,e,C){return!e||r.type==="mouseout"?null:C?t:r}var _2=class{static register(...t){X5.add(...t),Xo()}static unregister(...t){X5.remove(...t),Xo()}constructor(t,e){let C=this.config=new le(e),i=bH(t),H=Ko(i);if(H)throw new Error("Canvas is already in use. Chart with ID '"+H.id+"' must be destroyed before the canvas with ID '"+H.canvas.id+"' can be reused.");let V=C.createResolver(C.chartOptionScopes(),this.getContext());this.platform=new(C.platform||nd(i)),this.platform.updateConfig(C);let n=this.platform.acquireContext(i,V.aspectRatio),s=n&&n.canvas,c=s&&s.height,u=s&&s.width;if(this.id=ht(),this.ctx=n,this.canvas=s,this.width=u,this.height=c,this._options=V,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Le,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=wt(A=>this.update(A),V.resizeDelay||0),this._dataChanges=[],N6[this.id]=this,!n||!s){console.error("Failed to create chart: can't acquire context from the given item");return}h0.listen(this,"complete",Qo),h0.listen(this,"progress",$d),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:C,height:i,_aspectRatio:H}=this;return Z1(t)?e&&H?H:i?C/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return X5}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():b6(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return _6(this.canvas,this.ctx),this}stop(){return h0.stop(this),this}resize(t,e){h0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let C=this.options,i=this.canvas,H=C.maintainAspectRatio&&this.aspectRatio,V=this.platform.getMaximumSize(i,t,e,H),n=C.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=V.width,this.height=V.height,this._aspectRatio=this.aspectRatio,b6(this,n,!0)&&(this.notifyPlugins("resize",{size:V}),K1(C.onResize,[this,V],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};$1(e,(C,i)=>{C.id=i})}buildOrUpdateScales(){let t=this.options,e=t.scales,C=this.scales,i=Object.keys(C).reduce((V,n)=>(V[n]=!1,V),{}),H=[];e&&(H=H.concat(Object.keys(e).map(V=>{let n=e[V],s=Me(V,n),c=s==="r",u=s==="x";return{options:n,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),$1(H,V=>{let n=V.options,s=n.id,c=Me(s,n),u=F1(n.type,V.dtype);(n.position===void 0||qo(n.position,c)!==qo(V.dposition))&&(n.position=V.dposition),i[s]=!0;let A=null;if(s in C&&C[s].type===u)A=C[s];else{let v=X5.getScale(u);A=new v({id:s,type:u,ctx:this.ctx,chart:this}),C[A.id]=A}A.init(n,t)}),$1(i,(V,n)=>{V||delete C[n]}),$1(C,V=>{F6.configure(this,V,V.options),F6.addBox(this,V)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,C=t.length;if(t.sort((i,H)=>i.index-H.index),C>e){for(let i=e;i<C;++i)this._destroyDatasetMeta(i);t.splice(e,C-e)}this._sortedMetasets=t.slice(0).sort(Yo("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((C,i)=>{e.filter(H=>H===C._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,C,i;for(this._removeUnreferencedMetasets(),C=0,i=e.length;C<i;C++){let H=e[C],V=this.getDatasetMeta(C),n=H.type||this.config.type;if(V.type&&V.type!==n&&(this._destroyDatasetMeta(C),V=this.getDatasetMeta(C)),V.type=n,V.indexAxis=H.indexAxis||se(n,this.options),V.order=H.order||0,V.index=C,V.label=""+H.label,V.visible=this.isDatasetVisible(C),V.controller)V.controller.updateIndex(C),V.controller.linkScales();else{let s=X5.getController(n),{datasetElementType:c,dataElementType:u}=a2.datasets[n];Object.assign(s,{dataElementType:X5.getElement(u),datasetElementType:c&&X5.getElement(c)}),V.controller=new s(this,C),t.push(V.controller)}}return this._updateMetasets(),t}_resetElements(){$1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let C=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!C.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let H=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let V=0;for(let c=0,u=this.data.datasets.length;c<u;c++){let{controller:A}=this.getDatasetMeta(c),v=!i&&H.indexOf(A)===-1;A.buildOrUpdateElements(v),V=Math.max(+A.getMaxOverflow(),V)}V=this._minPadding=C.layout.autoPadding?V:0,this._updateLayout(V),i||$1(H,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Yo("z","_idx"));let{_active:n,_lastEvent:s}=this;s?this._eventHandler(s,!0):n.length&&this._updateHoverStyles(n,n,!0),this.render()}_updateScales(){$1(this.scales,t=>{F6.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),C=new Set(t.events);(!M6(e,C)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:C,start:i,count:H}of e){let V=C==="_removeElements"?-H:H;Id(t,i,V)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,C=H=>new Set(t.filter(V=>V[0]===H).map((V,n)=>n+","+V.splice(1).join(","))),i=C(0);for(let H=1;H<e;H++)if(!M6(i,C(H)))return;return Array.from(i).map(H=>H.split(",")).map(H=>({method:H[1],start:+H[2],count:+H[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;F6.update(this,this.width,this.height,t);let e=this.chartArea,C=e.width<=0||e.height<=0;this._layers=[],$1(this.boxes,i=>{C&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,H)=>{i._idx=H}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,C=this.data.datasets.length;e<C;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,C=this.data.datasets.length;e<C;++e)this._updateDataset(e,G5(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let C=this.getDatasetMeta(t),i={meta:C,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(C.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(h0.has(this)?this.attached&&!h0.running(this)&&h0.start(this):(this.draw(),Qo({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:C,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(C,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,C=[],i,H;for(i=0,H=e.length;i<H;++i){let V=e[i];(!t||V.visible)&&C.push(V)}return C}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,C={meta:t,index:t.index,cancelable:!0},i=T6(this,t);this.notifyPlugins("beforeDatasetDraw",C)!==!1&&(i&&b4(e,i),t.controller.draw(),i&&y4(e),C.cancelable=!1,this.notifyPlugins("afterDatasetDraw",C))}isPointInArea(t){return Z5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,C,i){let H=Wc.modes[e];return typeof H=="function"?H(this,t,C,i):[]}getDatasetMeta(t){let e=this.data.datasets[t],C=this._metasets,i=C.filter(H=>H&&H._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},C.push(i)),i}getContext(){return this.$context||(this.$context=Q5(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let C=this.getDatasetMeta(t);return typeof C.hidden=="boolean"?!C.hidden:!e.hidden}setDatasetVisibility(t,e){let C=this.getDatasetMeta(t);C.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,C){let i=C?"show":"hide",H=this.getDatasetMeta(t),V=H.controller._resolveAnimations(void 0,i);k3(e)?(H.data[e].hidden=!C,this.update()):(this.setDatasetVisibility(t,C),V.update(H,{visible:C}),this.update(n=>n.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),h0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),_6(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete N6[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,C=(H,V)=>{e.addEventListener(this,H,V),t[H]=V},i=(H,V,n)=>{H.offsetX=V,H.offsetY=n,this._eventHandler(H)};$1(this.options.events,H=>C(H,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,C=(s,c)=>{e.addEventListener(this,s,c),t[s]=c},i=(s,c)=>{t[s]&&(e.removeEventListener(this,s,c),delete t[s])},H=(s,c)=>{this.canvas&&this.resize(s,c)},V,n=()=>{i("attach",n),this.attached=!0,this.resize(),C("resize",H),C("detach",V)};V=()=>{this.attached=!1,i("resize",H),this._stop(),this._resize(0,0),C("attach",n)},e.isAttached(this.canvas)?n():V()}unbindEvents(){$1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},$1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,C){let i=C?"set":"remove",H,V,n,s;for(e==="dataset"&&(H=this.getDatasetMeta(t[0].datasetIndex),H.controller["_"+i+"DatasetHoverStyle"]()),n=0,s=t.length;n<s;++n){V=t[n];let c=V&&this.getDatasetMeta(V.datasetIndex).controller;c&&c[i+"HoverStyle"](V.element,V.datasetIndex,V.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],C=t.map(({datasetIndex:H,index:V})=>{let n=this.getDatasetMeta(H);if(!n)throw new Error("No dataset found at index "+H);return{datasetIndex:H,element:n.data[V],index:V}});!A7(C,e)&&(this._active=C,this._lastEvent=null,this._updateHoverStyles(C,e))}notifyPlugins(t,e,C){return this._plugins.notify(this,t,e,C)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,C){let i=this.options.hover,H=(s,c)=>s.filter(u=>!c.some(A=>u.datasetIndex===A.datasetIndex&&u.index===A.index)),V=H(e,t),n=C?t:H(t,e);V.length&&this.updateHoverStyle(V,i.mode,!1),n.length&&i.mode&&this.updateHoverStyle(n,i.mode,!0)}_eventHandler(t,e){let C={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=V=>(V.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",C,i)===!1)return;let H=this._handleEvent(t,e,C.inChartArea);return C.cancelable=!1,this.notifyPlugins("afterEvent",C,i),(H||C.changed)&&this.render(),this}_handleEvent(t,e,C){let{_active:i=[],options:H}=this,V=e,n=this._getActiveElements(t,i,C,V),s=ft(t),c=zd(t,this._lastEvent,C,s);C&&(this._lastEvent=null,K1(H.onHover,[t,n,this],this),s&&K1(H.onClick,[t,n,this],this));let u=!A7(n,i);return(u||e)&&(this._active=n,this._updateHoverStyles(n,i,e)),this._lastEvent=c,u}_getActiveElements(t,e,C,i){if(t.type==="mouseout")return[];if(!C)return e;let H=this.options.hover;return this.getElementsAtEventForMode(t,H.mode,H,i)}};Q(_2,"defaults",a2),Q(_2,"instances",N6),Q(_2,"overrides",q0),Q(_2,"registry",X5),Q(_2,"version",Rd),Q(_2,"getChart",Ko);function Xo(){return $1(_2.instances,r=>r._plugins.invalidate())}function Nd(r,t,e){let{startAngle:C,x:i,y:H,outerRadius:V,innerRadius:n,options:s}=t,{borderWidth:c,borderJoinStyle:u}=s,A=Math.min(c/V,x2(C-e));if(r.beginPath(),r.arc(i,H,V-c/2,C+A/2,e-A/2),n>0){let v=Math.min(c/n,x2(C-e));r.arc(i,H,n+c/2,e-v/2,C+v/2,!0)}else{let v=Math.min(c/2,V*x2(C-e));if(u==="round")r.arc(i,H,v,e-q1/2,C+q1/2,!0);else if(u==="bevel"){let _=2*v*v,b=-_*Math.cos(e+q1/2)+i,y=-_*Math.sin(e+q1/2)+H,k=_*Math.cos(C+q1/2)+i,P=_*Math.sin(C+q1/2)+H;r.lineTo(b,y),r.lineTo(k,P)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function Wd(r,t,e){let{startAngle:C,pixelMargin:i,x:H,y:V,outerRadius:n,innerRadius:s}=t,c=i/n;r.beginPath(),r.arc(H,V,n,C-c,e+c),s>i?(c=i/s,r.arc(H,V,s,e+c,C-c,!0)):r.arc(H,V,i,e+l2,C-l2),r.closePath(),r.clip()}function Ud(r){return O4(r,["outerStart","outerEnd","innerStart","innerEnd"])}function jd(r,t,e,C){let i=Ud(r.options.borderRadius),H=(e-t)/2,V=Math.min(H,C*t/2),n=s=>{let c=(e-Math.min(H,s))*C/2;return g2(s,0,Math.min(H,c))};return{outerStart:n(i.outerStart),outerEnd:n(i.outerEnd),innerStart:g2(i.innerStart,0,V),innerEnd:g2(i.innerEnd,0,V)}}function x7(r,t,e,C){return{x:e+r*Math.cos(t),y:C+r*Math.sin(t)}}function G6(r,t,e,C,i,H){let{x:V,y:n,startAngle:s,pixelMargin:c,innerRadius:u}=t,A=Math.max(t.outerRadius+C+e-c,0),v=u>0?u+C+e+c:0,_=0,b=i-s;if(C){let y1=u>0?u-C:0,K=A>0?A-C:0,G1=(y1+K)/2,H1=G1!==0?b*G1/(G1+C):b;_=(b-H1)/2}let y=Math.max(.001,b*A-e/q1)/A,k=(b-y)/2,P=s+k+_,$=i-k-_,{outerStart:I,outerEnd:X,innerStart:Y,innerEnd:c1}=jd(t,v,A,$-P),L1=A-I,r1=A-X,o1=P+I/L1,h1=$-X/r1,I1=v+Y,b1=v+c1,n2=P+Y/I1,j1=$-c1/b1;if(r.beginPath(),H){let y1=(o1+h1)/2;if(r.arc(V,n,A,o1,y1),r.arc(V,n,A,y1,h1),X>0){let W=x7(r1,h1,V,n);r.arc(W.x,W.y,X,h1,$+l2)}let K=x7(b1,$,V,n);if(r.lineTo(K.x,K.y),c1>0){let W=x7(b1,j1,V,n);r.arc(W.x,W.y,c1,$+l2,j1+Math.PI)}let G1=($-c1/v+(P+Y/v))/2;if(r.arc(V,n,v,$-c1/v,G1,!0),r.arc(V,n,v,G1,P+Y/v,!0),Y>0){let W=x7(I1,n2,V,n);r.arc(W.x,W.y,Y,n2+Math.PI,P-l2)}let H1=x7(L1,P,V,n);if(r.lineTo(H1.x,H1.y),I>0){let W=x7(L1,o1,V,n);r.arc(W.x,W.y,I,P-l2,o1)}}else{r.moveTo(V,n);let y1=Math.cos(o1)*A+V,K=Math.sin(o1)*A+n;r.lineTo(y1,K);let G1=Math.cos(h1)*A+V,H1=Math.sin(h1)*A+n;r.lineTo(G1,H1)}r.closePath()}function Gd(r,t,e,C,i){let{fullCircles:H,startAngle:V,circumference:n}=t,s=t.endAngle;if(H){G6(r,t,e,C,s,i);for(let c=0;c<H;++c)r.fill();isNaN(n)||(s=V+(n%s2||s2))}return G6(r,t,e,C,s,i),r.fill(),s}function qd(r,t,e,C,i){let{fullCircles:H,startAngle:V,circumference:n,options:s}=t,{borderWidth:c,borderJoinStyle:u,borderDash:A,borderDashOffset:v,borderRadius:_}=s,b=s.borderAlign==="inner";if(!c)return;r.setLineDash(A||[]),r.lineDashOffset=v,b?(r.lineWidth=c*2,r.lineJoin=u||"round"):(r.lineWidth=c,r.lineJoin=u||"bevel");let y=t.endAngle;if(H){G6(r,t,e,C,y,i);for(let k=0;k<H;++k)r.stroke();isNaN(n)||(y=V+(n%s2||s2))}b&&Wd(r,t,y),s.selfJoin&&y-V>=q1&&_===0&&u!=="miter"&&Nd(r,t,y),H||(G6(r,t,e,C,y,i),r.stroke())}var Q0=class extends O5{constructor(e){super();Q(this,"circumference");Q(this,"endAngle");Q(this,"fullCircles");Q(this,"innerRadius");Q(this,"outerRadius");Q(this,"pixelMargin");Q(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,C,i){let H=this.getProps(["x","y"],i),{angle:V,distance:n}=p6(H,{x:e,y:C}),{startAngle:s,endAngle:c,innerRadius:u,outerRadius:A,circumference:v}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),_=(this.options.spacing+this.options.borderWidth)/2,b=F1(v,c-s),y=g4(V,s,c)&&s!==c,k=b>=s2||y,P=F3(n,u+_,A+_);return k&&P}getCenterPoint(e){let{x:C,y:i,startAngle:H,endAngle:V,innerRadius:n,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:u}=this.options,A=(H+V)/2,v=(n+s+u+c)/2;return{x:C+Math.cos(A)*v,y:i+Math.sin(A)*v}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:C,circumference:i}=this,H=(C.offset||0)/4,V=(C.spacing||0)/2,n=C.circular;if(this.pixelMargin=C.borderAlign==="inner"?.33:0,this.fullCircles=i>s2?Math.floor(i/s2):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let s=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(s)*H,Math.sin(s)*H);let c=1-Math.sin(Math.min(q1,i||0)),u=H*c;e.fillStyle=C.backgroundColor,e.strokeStyle=C.borderColor,Gd(e,this,u,V,n),qd(e,this,u,V,n),e.restore()}};Q(Q0,"id","arc"),Q(Q0,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),Q(Q0,"defaultRoutes",{backgroundColor:"backgroundColor"}),Q(Q0,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function yH(r,t,e=t){r.lineCap=F1(e.borderCapStyle,t.borderCapStyle),r.setLineDash(F1(e.borderDash,t.borderDash)),r.lineDashOffset=F1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=F1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=F1(e.borderWidth,t.borderWidth),r.strokeStyle=F1(e.borderColor,t.borderColor)}function Yd(r,t,e){r.lineTo(e.x,e.y)}function Qd(r){return r.stepped?Pt:r.tension||r.cubicInterpolationMode==="monotone"?Ft:Yd}function OH(r,t,e={}){let C=r.length,{start:i=0,end:H=C-1}=e,{start:V,end:n}=t,s=Math.max(i,V),c=Math.min(H,n),u=i<V&&H<V||i>n&&H>n;return{count:C,start:s,loop:t.loop,ilen:c<s&&!u?C+c-s:c-s}}function Kd(r,t,e,C){let{points:i,options:H}=t,{count:V,start:n,loop:s,ilen:c}=OH(i,e,C),u=Qd(H),{move:A=!0,reverse:v}=C||{},_,b,y;for(_=0;_<=c;++_)b=i[(n+(v?c-_:_))%V],!b.skip&&(A?(r.moveTo(b.x,b.y),A=!1):u(r,y,b,v,H.stepped),y=b);return s&&(b=i[(n+(v?c:0))%V],u(r,y,b,v,H.stepped)),!!s}function Xd(r,t,e,C){let i=t.points,{count:H,start:V,ilen:n}=OH(i,e,C),{move:s=!0,reverse:c}=C||{},u=0,A=0,v,_,b,y,k,P,$=X=>(V+(c?n-X:X))%H,I=()=>{y!==k&&(r.lineTo(u,k),r.lineTo(u,y),r.lineTo(u,P))};for(s&&(_=i[$(0)],r.moveTo(_.x,_.y)),v=0;v<=n;++v){if(_=i[$(v)],_.skip)continue;let X=_.x,Y=_.y,c1=X|0;c1===b?(Y<y?y=Y:Y>k&&(k=Y),u=(A*u+X)/++A):(I(),r.lineTo(X,Y),b=c1,A=0,y=k=Y),P=Y}I()}function ce(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Xd:Kd}function Jd(r){return r.stepped?zt:r.tension||r.cubicInterpolationMode==="monotone"?Nt:p0}function tp(r,t,e,C){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,C)&&i.closePath()),yH(r,t.options),r.stroke(i)}function ep(r,t,e,C){let{segments:i,options:H}=t,V=ce(t);for(let n of i)yH(r,H,n.style),r.beginPath(),V(r,t,n,{start:e,end:e+C-1})&&r.closePath(),r.stroke()}var rp=typeof Path2D=="function";function Cp(r,t,e,C){rp&&!t.options.segment?tp(r,t,e,C):ep(r,t,e,C)}var H5=class extends O5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let C=this.options;if((C.tension||C.cubicInterpolationMode==="monotone")&&!C.stepped&&!this._pointsUpdated){let i=C.spanGaps?this._loop:this._fullLoop;Dt(this._points,C,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=jt(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,C=t.length;return C&&e[t[C-1].end]}interpolate(t,e){let C=this.options,i=t[e],H=this.points,V=k6(this,{property:e,start:i,end:i});if(!V.length)return;let n=[],s=Jd(C),c,u;for(c=0,u=V.length;c<u;++c){let{start:A,end:v}=V[c],_=H[A],b=H[v];if(_===b){n.push(_);continue}let y=Math.abs((i-_[e])/(b[e]-_[e])),k=s(_,b,y,C.stepped);k[e]=t[e],n.push(k)}return n.length===1?n[0]:n}pathSegment(t,e,C){return ce(this)(t,this,e,C)}path(t,e,C){let i=this.segments,H=ce(this),V=this._loop;e=e||0,C=C||this.points.length-e;for(let n of i)V&=H(t,this,n,{start:e,end:e+C-1});return!!V}draw(t,e,C,i){let H=this.options||{};(this.points||[]).length&&H.borderWidth&&(t.save(),Cp(t,this,C,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};Q(H5,"id","line"),Q(H5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),Q(H5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),Q(H5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Jo(r,t,e,C){let i=r.options,{[e]:H}=r.getProps([e],C);return Math.abs(t-H)<i.radius+i.hitRadius}var y5=class extends O5{constructor(e){super();Q(this,"parsed");Q(this,"skip");Q(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,C,i){let H=this.options,{x:V,y:n}=this.getProps(["x","y"],i);return Math.pow(e-V,2)+Math.pow(C-n,2)<Math.pow(H.hitRadius+H.radius,2)}inXRange(e,C){return Jo(this,e,"x",C)}inYRange(e,C){return Jo(this,e,"y",C)}getCenterPoint(e){let{x:C,y:i}=this.getProps(["x","y"],e);return{x:C,y:i}}size(e){e=e||this.options||{};let C=e.radius||0;C=Math.max(C,C&&e.hoverRadius||0);let i=C&&e.borderWidth||0;return(C+i)*2}draw(e,C){let i=this.options;this.skip||i.radius<.1||!Z5(this,C,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,w4(e,i,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};Q(y5,"id","point"),Q(y5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),Q(y5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function kH(r,t){let{x:e,y:C,base:i,width:H,height:V}=r.getProps(["x","y","base","width","height"],t),n,s,c,u,A;return r.horizontal?(A=V/2,n=Math.min(e,i),s=Math.max(e,i),c=C-A,u=C+A):(A=H/2,n=e-A,s=e+A,c=Math.min(C,i),u=Math.max(C,i)),{left:n,top:c,right:s,bottom:u}}function X0(r,t,e,C){return r?0:g2(t,e,C)}function ip(r,t,e){let C=r.options.borderWidth,i=r.borderSkipped,H=S6(C);return{t:X0(i.top,H.top,0,e),r:X0(i.right,H.right,0,t),b:X0(i.bottom,H.bottom,0,e),l:X0(i.left,H.left,0,t)}}function op(r,t,e){let{enableBorderRadius:C}=r.getProps(["enableBorderRadius"]),i=r.options.borderRadius,H=Y0(i),V=Math.min(t,e),n=r.borderSkipped,s=C||w1(i);return{topLeft:X0(!s||n.top||n.left,H.topLeft,0,V),topRight:X0(!s||n.top||n.right,H.topRight,0,V),bottomLeft:X0(!s||n.bottom||n.left,H.bottomLeft,0,V),bottomRight:X0(!s||n.bottom||n.right,H.bottomRight,0,V)}}function Hp(r){let t=kH(r),e=t.right-t.left,C=t.bottom-t.top,i=ip(r,e/2,C/2),H=op(r,e/2,C/2);return{outer:{x:t.left,y:t.top,w:e,h:C,radius:H},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:C-i.t-i.b,radius:{topLeft:Math.max(0,H.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,H.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,H.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,H.bottomRight-Math.max(i.b,i.r))}}}}function te(r,t,e,C){let i=t===null,H=e===null,n=r&&!(i&&H)&&kH(r,C);return n&&(i||F3(t,n.left,n.right))&&(H||F3(e,n.top,n.bottom))}function Vp(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function ap(r,t){r.rect(t.x,t.y,t.w,t.h)}function ee(r,t,e={}){let C=r.x!==e.x?-t:0,i=r.y!==e.y?-t:0,H=(r.x+r.w!==e.x+e.w?t:0)-C,V=(r.y+r.h!==e.y+e.h?t:0)-i;return{x:r.x+C,y:r.y+i,w:r.w+H,h:r.h+V,radius:r.radius}}var v0=class extends O5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:C,backgroundColor:i}}=this,{inner:H,outer:V}=Hp(this),n=Vp(V.radius)?v7:ap;t.save(),(V.w!==H.w||V.h!==H.h)&&(t.beginPath(),n(t,ee(V,e,H)),t.clip(),n(t,ee(H,-e,V)),t.fillStyle=C,t.fill("evenodd")),t.beginPath(),n(t,ee(H,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,C){return te(this,t,e,C)}inXRange(t,e){return te(this,t,null,e)}inYRange(t,e){return te(this,null,t,e)}getCenterPoint(t){let{x:e,y:C,base:i,horizontal:H}=this.getProps(["x","y","base","horizontal"],t);return{x:H?(e+i)/2:e,y:H?C:(C+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};Q(v0,"id","bar"),Q(v0,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),Q(v0,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function np(r,t,e){let C=r.segments,i=r.points,H=t.points,V=[];for(let n of C){let{start:s,end:c}=n;c=Y6(s,c,i);let u=de(e,i[s],i[c],n.loop);if(!t.segments){V.push({source:n,target:u,start:i[s],end:i[c]});continue}let A=k6(t,u);for(let v of A){let _=de(e,H[v.start],H[v.end],v.loop),b=O6(n,i,_);for(let y of b)V.push({source:y,target:v,start:{[e]:tH(u,_,"start",Math.max)},end:{[e]:tH(u,_,"end",Math.min)}})}}return V}function de(r,t,e,C){if(C)return;let i=t[r],H=e[r];return r==="angle"&&(i=x2(i),H=x2(H)),{property:r,start:i,end:H}}function Lp(r,t){let{x:e=null,y:C=null}=r||{},i=t.points,H=[];return t.segments.forEach(({start:V,end:n})=>{n=Y6(V,n,i);let s=i[V],c=i[n];C!==null?(H.push({x:s.x,y:C}),H.push({x:c.x,y:C})):e!==null&&(H.push({x:e,y:s.y}),H.push({x:e,y:c.y}))}),H}function Y6(r,t,e){for(;t>r;t--){let C=e[t];if(!isNaN(C.x)&&!isNaN(C.y))break}return t}function tH(r,t,e,C){return r&&t?C(r[e],t[e]):r?r[e]:t?t[e]:0}function TH(r,t){let e=[],C=!1;return J1(r)?(C=!0,e=r):e=Lp(r,t),e.length?new H5({points:e,options:{tension:0},_loop:C,_fullLoop:C}):null}function eH(r){return r&&r.fill!==!1}function sp(r,t,e){let i=r[t].fill,H=[t],V;if(!e)return i;for(;i!==!1&&H.indexOf(i)===-1;){if(!V2(i))return i;if(V=r[i],!V)return!1;if(V.visible)return i;H.push(i),i=V.fill}return!1}function Mp(r,t,e){let C=pp(r);if(w1(C))return isNaN(C.value)?!1:C;let i=parseFloat(C);return V2(i)&&Math.floor(i)===i?lp(C[0],t,i,e):["origin","start","end","stack","shape"].indexOf(C)>=0&&C}function lp(r,t,e,C){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=C?!1:e}function cp(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:w1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function dp(r,t,e){let C;return r==="start"?C=e:r==="end"?C=t.options.reverse?t.min:t.max:w1(r)?C=r.value:C=t.getBaseValue(),C}function pp(r){let t=r.options,e=t.fill,C=F1(e&&e.target,e);return C===void 0&&(C=!!t.backgroundColor),C===!1||C===null?!1:C===!0?"origin":C}function up(r){let{scale:t,index:e,line:C}=r,i=[],H=C.segments,V=C.points,n=mp(t,e);n.push(TH({x:null,y:t.bottom},C));for(let s=0;s<H.length;s++){let c=H[s];for(let u=c.start;u<=c.end;u++)hp(i,V[u],n)}return new H5({points:i,options:{}})}function mp(r,t){let e=[],C=r.getMatchingVisibleMetas("line");for(let i=0;i<C.length;i++){let H=C[i];if(H.index===t)break;H.hidden||e.unshift(H.dataset)}return e}function hp(r,t,e){let C=[];for(let i=0;i<e.length;i++){let H=e[i],{first:V,last:n,point:s}=Ap(H,t,"x");if(!(!s||V&&n)){if(V)C.unshift(s);else if(r.push(s),!n)break}}r.push(...C)}function Ap(r,t,e){let C=r.interpolate(t,e);if(!C)return{};let i=C[e],H=r.segments,V=r.points,n=!1,s=!1;for(let c=0;c<H.length;c++){let u=H[c],A=V[u.start][e],v=V[u.end][e];if(F3(i,A,v)){n=i===A,s=i===v;break}}return{first:n,last:s,point:C}}var q6=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,C){let{x:i,y:H,radius:V}=this;return e=e||{start:0,end:s2},t.arc(i,H,V,e.end,e.start,!0),!C.bounds}interpolate(t){let{x:e,y:C,radius:i}=this,H=t.angle;return{x:e+Math.cos(H)*i,y:C+Math.sin(H)*i,angle:H}}};function fp(r){let{chart:t,fill:e,line:C}=r;if(V2(e))return vp(t,e);if(e==="stack")return up(r);if(e==="shape")return!0;let i=xp(r);return i instanceof q6?i:TH(i,C)}function vp(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function xp(r){return(r.scale||{}).getPointPositionForValue?_p(r):gp(r)}function gp(r){let{scale:t={},fill:e}=r,C=cp(e,t);if(V2(C)){let i=t.isHorizontal();return{x:i?C:null,y:i?null:C}}return null}function _p(r){let{scale:t,fill:e}=r,C=t.options,i=t.getLabels().length,H=C.reverse?t.max:t.min,V=dp(e,t,H),n=[];if(C.grid.circular){let s=t.getPointPositionForValue(0,H);return new q6({x:s.x,y:s.y,radius:t.getDistanceFromCenterForValue(V)})}for(let s=0;s<i;++s)n.push(t.getPointPositionForValue(s,V));return n}function re(r,t,e){let C=fp(t),{chart:i,index:H,line:V,scale:n,axis:s}=t,c=V.options,u=c.fill,A=c.backgroundColor,{above:v=A,below:_=A}=u||{},b=i.getDatasetMeta(H),y=T6(i,b);C&&V.points.length&&(b4(r,e),Sp(r,{line:V,target:C,above:v,below:_,area:e,scale:n,axis:s,clip:y}),y4(r))}function Sp(r,t){let{line:e,target:C,above:i,below:H,area:V,scale:n,clip:s}=t,c=e._loop?"angle":t.axis;r.save();let u=H;H!==i&&(c==="x"?(rH(r,C,V.top),Ce(r,{line:e,target:C,color:i,scale:n,property:c,clip:s}),r.restore(),r.save(),rH(r,C,V.bottom)):c==="y"&&(CH(r,C,V.left),Ce(r,{line:e,target:C,color:H,scale:n,property:c,clip:s}),r.restore(),r.save(),CH(r,C,V.right),u=i)),Ce(r,{line:e,target:C,color:u,scale:n,property:c,clip:s}),r.restore()}function rH(r,t,e){let{segments:C,points:i}=t,H=!0,V=!1;r.beginPath();for(let n of C){let{start:s,end:c}=n,u=i[s],A=i[Y6(s,c,i)];H?(r.moveTo(u.x,u.y),H=!1):(r.lineTo(u.x,e),r.lineTo(u.x,u.y)),V=!!t.pathSegment(r,n,{move:V}),V?r.closePath():r.lineTo(A.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function CH(r,t,e){let{segments:C,points:i}=t,H=!0,V=!1;r.beginPath();for(let n of C){let{start:s,end:c}=n,u=i[s],A=i[Y6(s,c,i)];H?(r.moveTo(u.x,u.y),H=!1):(r.lineTo(e,u.y),r.lineTo(u.x,u.y)),V=!!t.pathSegment(r,n,{move:V}),V?r.closePath():r.lineTo(e,A.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function Ce(r,t){let{line:e,target:C,property:i,color:H,scale:V,clip:n}=t,s=np(e,C,i);for(let{source:c,target:u,start:A,end:v}of s){let{style:{backgroundColor:_=H}={}}=c,b=C!==!0;r.save(),r.fillStyle=_,Zp(r,V,n,b&&de(i,A,v)),r.beginPath();let y=!!e.pathSegment(r,c),k;if(b){y?r.closePath():iH(r,C,v,i);let P=!!C.pathSegment(r,u,{move:y,reverse:!0});k=y&&P,k||iH(r,C,A,i)}r.closePath(),r.fill(k?"evenodd":"nonzero"),r.restore()}}function Zp(r,t,e,C){let i=t.chart.chartArea,{property:H,start:V,end:n}=C||{};if(H==="x"||H==="y"){let s,c,u,A;H==="x"?(s=V,c=i.top,u=n,A=i.bottom):(s=i.left,c=V,u=i.right,A=n),r.beginPath(),e&&(s=Math.max(s,e.left),u=Math.min(u,e.right),c=Math.max(c,e.top),A=Math.min(A,e.bottom)),r.rect(s,c,u-s,A-c),r.clip()}}function iH(r,t,e,C){let i=t.interpolate(e,C);i&&r.lineTo(i.x,i.y)}var PH={id:"filler",afterDatasetsUpdate(r,t,e){let C=(r.data.datasets||[]).length,i=[],H,V,n,s;for(V=0;V<C;++V)H=r.getDatasetMeta(V),n=H.dataset,s=null,n&&n.options&&n instanceof H5&&(s={visible:r.isDatasetVisible(V),index:V,fill:Mp(n,V,C),chart:r,axis:H.controller.options.indexAxis,scale:H.vScale,line:n}),H.$filler=s,i.push(s);for(V=0;V<C;++V)s=i[V],!(!s||s.fill===!1)&&(s.fill=sp(i,V,e.propagate))},beforeDraw(r,t,e){let C=e.drawTime==="beforeDraw",i=r.getSortedVisibleDatasetMetas(),H=r.chartArea;for(let V=i.length-1;V>=0;--V){let n=i[V].$filler;n&&(n.line.updateControlPoints(H,n.axis),C&&n.fill&&re(r.ctx,n,H))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let C=r.getSortedVisibleDatasetMetas();for(let i=C.length-1;i>=0;--i){let H=C[i].$filler;eH(H)&&re(r.ctx,H,r.chartArea)}},beforeDatasetDraw(r,t,e){let C=t.meta.$filler;!eH(C)||e.drawTime!=="beforeDatasetDraw"||re(r.ctx,C,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var z4={average(r){if(!r.length)return!1;let t,e,C=new Set,i=0,H=0;for(t=0,e=r.length;t<e;++t){let n=r[t].element;if(n&&n.hasValue()){let s=n.tooltipPosition();C.add(s.x),i+=s.y,++H}}return H===0||C.size===0?!1:{x:[...C].reduce((n,s)=>n+s)/C.size,y:i/H}},nearest(r,t){if(!r.length)return!1;let e=t.x,C=t.y,i=Number.POSITIVE_INFINITY,H,V,n;for(H=0,V=r.length;H<V;++H){let s=r[H].element;if(s&&s.hasValue()){let c=s.getCenterPoint(),u=f4(t,c);u<i&&(i=u,n=s)}}if(n){let s=n.tooltipPosition();e=s.x,C=s.y}return{x:e,y:C}}};function K5(r,t){return t&&(J1(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function A0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function wp(r,t){let{element:e,datasetIndex:C,index:i}=t,H=r.getDatasetMeta(C).controller,{label:V,value:n}=H.getLabelAndValue(i);return{chart:r,label:V,parsed:H.getParsed(i),raw:r.data.datasets[C].data[i],formattedValue:n,dataset:H.getDataset(),dataIndex:i,datasetIndex:C,element:e}}function oH(r,t){let e=r.chart.ctx,{body:C,footer:i,title:H}=r,{boxWidth:V,boxHeight:n}=t,s=O2(t.bodyFont),c=O2(t.titleFont),u=O2(t.footerFont),A=H.length,v=i.length,_=C.length,b=P2(t.padding),y=b.height,k=0,P=C.reduce((X,Y)=>X+Y.before.length+Y.lines.length+Y.after.length,0);if(P+=r.beforeBody.length+r.afterBody.length,A&&(y+=A*c.lineHeight+(A-1)*t.titleSpacing+t.titleMarginBottom),P){let X=t.displayColors?Math.max(n,s.lineHeight):s.lineHeight;y+=_*X+(P-_)*s.lineHeight+(P-1)*t.bodySpacing}v&&(y+=t.footerMarginTop+v*u.lineHeight+(v-1)*t.footerSpacing);let $=0,I=function(X){k=Math.max(k,e.measureText(X).width+$)};return e.save(),e.font=c.string,$1(r.title,I),e.font=s.string,$1(r.beforeBody.concat(r.afterBody),I),$=t.displayColors?V+2+t.boxPadding:0,$1(C,X=>{$1(X.before,I),$1(X.lines,I),$1(X.after,I)}),$=0,e.font=u.string,$1(r.footer,I),e.restore(),k+=b.width,{width:k,height:y}}function bp(r,t){let{y:e,height:C}=t;return e<C/2?"top":e>r.height-C/2?"bottom":"center"}function yp(r,t,e,C){let{x:i,width:H}=C,V=e.caretSize+e.caretPadding;if(r==="left"&&i+H+V>t.width||r==="right"&&i-H-V<0)return!0}function Op(r,t,e,C){let{x:i,width:H}=e,{width:V,chartArea:{left:n,right:s}}=r,c="center";return C==="center"?c=i<=(n+s)/2?"left":"right":i<=H/2?c="left":i>=V-H/2&&(c="right"),yp(c,r,t,e)&&(c="center"),c}function HH(r,t,e){let C=e.yAlign||t.yAlign||bp(r,e);return{xAlign:e.xAlign||t.xAlign||Op(r,t,e,C),yAlign:C}}function kp(r,t){let{x:e,width:C}=r;return t==="right"?e-=C:t==="center"&&(e-=C/2),e}function Tp(r,t,e){let{y:C,height:i}=r;return t==="top"?C+=e:t==="bottom"?C-=i+e:C-=i/2,C}function VH(r,t,e,C){let{caretSize:i,caretPadding:H,cornerRadius:V}=r,{xAlign:n,yAlign:s}=e,c=i+H,{topLeft:u,topRight:A,bottomLeft:v,bottomRight:_}=Y0(V),b=kp(t,n),y=Tp(t,s,c);return s==="center"?n==="left"?b+=c:n==="right"&&(b-=c):n==="left"?b-=Math.max(u,v)+i:n==="right"&&(b+=Math.max(A,_)+i),{x:g2(b,0,C.width-t.width),y:g2(y,0,C.height-t.height)}}function R6(r,t,e){let C=P2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-C.right:r.x+C.left}function aH(r){return K5([],A0(r))}function Pp(r,t,e){return Q5(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function nH(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var FH={beforeTitle:w5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,C=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(C>0&&t.dataIndex<C)return e[t.dataIndex]}return""},afterTitle:w5,beforeBody:w5,beforeLabel:w5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return Z1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:w5,afterBody:w5,beforeFooter:w5,footer:w5,afterFooter:w5};function Y2(r,t,e,C){let i=r[t].call(e,C);return typeof i>"u"?FH[t].call(e,C):i}var N4=class extends O5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,C=this.options.setContext(this.getContext()),i=C.enabled&&e.options.animation&&C.animations,H=new W6(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(H)),H}getContext(){return this.$context||(this.$context=Pp(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:C}=e,i=Y2(C,"beforeTitle",this,t),H=Y2(C,"title",this,t),V=Y2(C,"afterTitle",this,t),n=[];return n=K5(n,A0(i)),n=K5(n,A0(H)),n=K5(n,A0(V)),n}getBeforeBody(t,e){return aH(Y2(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:C}=e,i=[];return $1(t,H=>{let V={before:[],lines:[],after:[]},n=nH(C,H);K5(V.before,A0(Y2(n,"beforeLabel",this,H))),K5(V.lines,Y2(n,"label",this,H)),K5(V.after,A0(Y2(n,"afterLabel",this,H))),i.push(V)}),i}getAfterBody(t,e){return aH(Y2(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:C}=e,i=Y2(C,"beforeFooter",this,t),H=Y2(C,"footer",this,t),V=Y2(C,"afterFooter",this,t),n=[];return n=K5(n,A0(i)),n=K5(n,A0(H)),n=K5(n,A0(V)),n}_createItems(t){let e=this._active,C=this.chart.data,i=[],H=[],V=[],n=[],s,c;for(s=0,c=e.length;s<c;++s)n.push(wp(this.chart,e[s]));return t.filter&&(n=n.filter((u,A,v)=>t.filter(u,A,v,C))),t.itemSort&&(n=n.sort((u,A)=>t.itemSort(u,A,C))),$1(n,u=>{let A=nH(t.callbacks,u);i.push(Y2(A,"labelColor",this,u)),H.push(Y2(A,"labelPointStyle",this,u)),V.push(Y2(A,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=H,this.labelTextColors=V,this.dataPoints=n,n}update(t,e){let C=this.options.setContext(this.getContext()),i=this._active,H,V=[];if(!i.length)this.opacity!==0&&(H={opacity:0});else{let n=z4[C.position].call(this,i,this._eventPosition);V=this._createItems(C),this.title=this.getTitle(V,C),this.beforeBody=this.getBeforeBody(V,C),this.body=this.getBody(V,C),this.afterBody=this.getAfterBody(V,C),this.footer=this.getFooter(V,C);let s=this._size=oH(this,C),c=Object.assign({},n,s),u=HH(this.chart,C,c),A=VH(C,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,H={opacity:1,x:A.x,y:A.y,width:s.width,height:s.height,caretX:n.x,caretY:n.y}}this._tooltipItems=V,this.$context=void 0,H&&this._resolveAnimations().update(this,H),t&&C.external&&C.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,C,i){let H=this.getCaretPosition(t,C,i);e.lineTo(H.x1,H.y1),e.lineTo(H.x2,H.y2),e.lineTo(H.x3,H.y3)}getCaretPosition(t,e,C){let{xAlign:i,yAlign:H}=this,{caretSize:V,cornerRadius:n}=C,{topLeft:s,topRight:c,bottomLeft:u,bottomRight:A}=Y0(n),{x:v,y:_}=t,{width:b,height:y}=e,k,P,$,I,X,Y;return H==="center"?(X=_+y/2,i==="left"?(k=v,P=k-V,I=X+V,Y=X-V):(k=v+b,P=k+V,I=X-V,Y=X+V),$=k):(i==="left"?P=v+Math.max(s,u)+V:i==="right"?P=v+b-Math.max(c,A)-V:P=this.caretX,H==="top"?(I=_,X=I-V,k=P-V,$=P+V):(I=_+y,X=I+V,k=P+V,$=P-V),Y=I),{x1:k,x2:P,x3:$,y1:I,y2:X,y3:Y}}drawTitle(t,e,C){let i=this.title,H=i.length,V,n,s;if(H){let c=F4(C.rtl,this.x,this.width);for(t.x=R6(this,C.titleAlign,C),e.textAlign=c.textAlign(C.titleAlign),e.textBaseline="middle",V=O2(C.titleFont),n=C.titleSpacing,e.fillStyle=C.titleColor,e.font=V.string,s=0;s<H;++s)e.fillText(i[s],c.x(t.x),t.y+V.lineHeight/2),t.y+=V.lineHeight+n,s+1===H&&(t.y+=C.titleMarginBottom-n)}}_drawColorBox(t,e,C,i,H){let V=this.labelColors[C],n=this.labelPointStyles[C],{boxHeight:s,boxWidth:c}=H,u=O2(H.bodyFont),A=R6(this,"left",H),v=i.x(A),_=s<u.lineHeight?(u.lineHeight-s)/2:0,b=e.y+_;if(H.usePointStyle){let y={radius:Math.min(c,s)/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:1},k=i.leftForLtr(v,c)+c/2,P=b+s/2;t.strokeStyle=H.multiKeyBackground,t.fillStyle=H.multiKeyBackground,w4(t,y,k,P),t.strokeStyle=V.borderColor,t.fillStyle=V.backgroundColor,w4(t,y,k,P)}else{t.lineWidth=w1(V.borderWidth)?Math.max(...Object.values(V.borderWidth)):V.borderWidth||1,t.strokeStyle=V.borderColor,t.setLineDash(V.borderDash||[]),t.lineDashOffset=V.borderDashOffset||0;let y=i.leftForLtr(v,c),k=i.leftForLtr(i.xPlus(v,1),c-2),P=Y0(V.borderRadius);Object.values(P).some($=>$!==0)?(t.beginPath(),t.fillStyle=H.multiKeyBackground,v7(t,{x:y,y:b,w:c,h:s,radius:P}),t.fill(),t.stroke(),t.fillStyle=V.backgroundColor,t.beginPath(),v7(t,{x:k,y:b+1,w:c-2,h:s-2,radius:P}),t.fill()):(t.fillStyle=H.multiKeyBackground,t.fillRect(y,b,c,s),t.strokeRect(y,b,c,s),t.fillStyle=V.backgroundColor,t.fillRect(k,b+1,c-2,s-2))}t.fillStyle=this.labelTextColors[C]}drawBody(t,e,C){let{body:i}=this,{bodySpacing:H,bodyAlign:V,displayColors:n,boxHeight:s,boxWidth:c,boxPadding:u}=C,A=O2(C.bodyFont),v=A.lineHeight,_=0,b=F4(C.rtl,this.x,this.width),y=function(r1){e.fillText(r1,b.x(t.x+_),t.y+v/2),t.y+=v+H},k=b.textAlign(V),P,$,I,X,Y,c1,L1;for(e.textAlign=V,e.textBaseline="middle",e.font=A.string,t.x=R6(this,k,C),e.fillStyle=C.bodyColor,$1(this.beforeBody,y),_=n&&k!=="right"?V==="center"?c/2+u:c+2+u:0,X=0,c1=i.length;X<c1;++X){for(P=i[X],$=this.labelTextColors[X],e.fillStyle=$,$1(P.before,y),I=P.lines,n&&I.length&&(this._drawColorBox(e,t,X,b,C),v=Math.max(A.lineHeight,s)),Y=0,L1=I.length;Y<L1;++Y)y(I[Y]),v=A.lineHeight;$1(P.after,y)}_=0,v=A.lineHeight,$1(this.afterBody,y),t.y-=H}drawFooter(t,e,C){let i=this.footer,H=i.length,V,n;if(H){let s=F4(C.rtl,this.x,this.width);for(t.x=R6(this,C.footerAlign,C),t.y+=C.footerMarginTop,e.textAlign=s.textAlign(C.footerAlign),e.textBaseline="middle",V=O2(C.footerFont),e.fillStyle=C.footerColor,e.font=V.string,n=0;n<H;++n)e.fillText(i[n],s.x(t.x),t.y+V.lineHeight/2),t.y+=V.lineHeight+C.footerSpacing}}drawBackground(t,e,C,i){let{xAlign:H,yAlign:V}=this,{x:n,y:s}=t,{width:c,height:u}=C,{topLeft:A,topRight:v,bottomLeft:_,bottomRight:b}=Y0(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(n+A,s),V==="top"&&this.drawCaret(t,e,C,i),e.lineTo(n+c-v,s),e.quadraticCurveTo(n+c,s,n+c,s+v),V==="center"&&H==="right"&&this.drawCaret(t,e,C,i),e.lineTo(n+c,s+u-b),e.quadraticCurveTo(n+c,s+u,n+c-b,s+u),V==="bottom"&&this.drawCaret(t,e,C,i),e.lineTo(n+_,s+u),e.quadraticCurveTo(n,s+u,n,s+u-_),V==="center"&&H==="left"&&this.drawCaret(t,e,C,i),e.lineTo(n,s+A),e.quadraticCurveTo(n,s,n+A,s),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,C=this.$animations,i=C&&C.x,H=C&&C.y;if(i||H){let V=z4[t.position].call(this,this._active,this._eventPosition);if(!V)return;let n=this._size=oH(this,t),s=Object.assign({},V,this._size),c=HH(e,t,s),u=VH(t,s,c,e);(i._to!==u.x||H._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=n.width,this.height=n.height,this.caretX=V.x,this.caretY=V.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),C=this.opacity;if(!C)return;this._updateAnimationTarget(e);let i={width:this.width,height:this.height},H={x:this.x,y:this.y};C=Math.abs(C)<.001?0:C;let V=P2(e.padding),n=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&n&&(t.save(),t.globalAlpha=C,this.drawBackground(H,t,i,e),Wt(t,e.textDirection),H.y+=V.top,this.drawTitle(H,t,e),this.drawBody(H,t,e),this.drawFooter(H,t,e),Ut(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let C=this._active,i=t.map(({datasetIndex:n,index:s})=>{let c=this.chart.getDatasetMeta(n);if(!c)throw new Error("Cannot find a dataset at index "+n);return{datasetIndex:n,element:c.data[s],index:s}}),H=!A7(C,i),V=this._positionChanged(i,e);(H||V)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,C=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let i=this.options,H=this._active||[],V=this._getActiveElements(t,H,e,C),n=this._positionChanged(V,t),s=e||!A7(V,H)||n;return s&&(this._active=V,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,C,i){let H=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(n=>this.chart.data.datasets[n.datasetIndex]&&this.chart.getDatasetMeta(n.datasetIndex).controller.getParsed(n.index)!==void 0);let V=this.chart.getElementsAtEventForMode(t,H.mode,H,C);return H.reverse&&V.reverse(),V}_positionChanged(t,e){let{caretX:C,caretY:i,options:H}=this,V=z4[H.position].call(this,t,e);return V!==!1&&(C!==V.x||i!==V.y)}};Q(N4,"positioners",z4);var EH={id:"tooltip",_element:N4,positioners:z4,afterInit(r,t,e){e&&(r.tooltip=new N4({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:FH},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var Fp=(r,t,e,C)=>(typeof t=="string"?(e=r.push(t)-1,C.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Ep(r,t,e,C){let i=r.indexOf(t);if(i===-1)return Fp(r,t,e,C);let H=r.lastIndexOf(t);return i!==H?e:i}var Bp=(r,t)=>r===null?null:g2(Math.round(r),0,t);function LH(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var S7=class extends D3{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let C=this.getLabels();for(let{index:i,label:H}of e)C[i]===H&&C.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Z1(t))return null;let C=this.getLabels();return e=isFinite(e)&&C[e]===t?e:Ep(C,t,F1(e,t),this._addedLabels),Bp(e,C.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:C,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(C=0),e||(i=this.getLabels().length-1)),this.min=C,this.max=i}buildTicks(){let t=this.min,e=this.max,C=this.options.offset,i=[],H=this.getLabels();H=t===0&&e===H.length-1?H:H.slice(t,e+1),this._valueRange=Math.max(H.length-(C?0:1),1),this._startValue=this.min-(C?.5:0);for(let V=t;V<=e;V++)i.push({value:V});return i}getLabelForValue(t){return LH.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};Q(S7,"id","category"),Q(S7,"defaults",{ticks:{callback:LH}});function Rp(r,t){let e=[],{bounds:i,step:H,min:V,max:n,precision:s,count:c,maxTicks:u,maxDigits:A,includeBounds:v}=r,_=H||1,b=u-1,{min:y,max:k}=t,P=!Z1(V),$=!Z1(n),I=!Z1(c),X=(k-y)/(A+1),Y=l6((k-y)/b/_)*_,c1,L1,r1,o1;if(Y<1e-14&&!P&&!$)return[{value:y},{value:k}];o1=Math.ceil(k/Y)-Math.floor(y/Y),o1>b&&(Y=l6(o1*Y/b/_)*_),Z1(s)||(c1=Math.pow(10,s),Y=Math.ceil(Y*c1)/c1),i==="ticks"?(L1=Math.floor(y/Y)*Y,r1=Math.ceil(k/Y)*Y):(L1=y,r1=k),P&&$&&H&&xt((n-V)/H,Y/1e3)?(o1=Math.round(Math.min((n-V)/Y,u)),Y=(n-V)/o1,L1=V,r1=n):I?(L1=P?V:L1,r1=$?n:r1,o1=c-1,Y=(r1-L1)/o1):(o1=(r1-L1)/Y,T3(o1,Math.round(o1),Y/1e3)?o1=Math.round(o1):o1=Math.ceil(o1));let h1=Math.max(d6(Y),d6(L1));c1=Math.pow(10,Z1(s)?h1:s),L1=Math.round(L1*c1)/c1,r1=Math.round(r1*c1)/c1;let I1=0;for(P&&(v&&L1!==V?(e.push({value:V}),L1<V&&I1++,T3(Math.round((L1+I1*Y)*c1)/c1,V,sH(V,X,r))&&I1++):L1<V&&I1++);I1<o1;++I1){let b1=Math.round((L1+I1*Y)*c1)/c1;if($&&b1>n)break;e.push({value:b1})}return $&&v&&r1!==n?e.length&&T3(e[e.length-1].value,n,sH(n,X,r))?e[e.length-1].value=n:e.push({value:n}):(!$||r1===n)&&e.push({value:r1}),e}function sH(r,t,{horizontal:e,minRotation:C}){let i=Y5(C),H=(e?Math.sin(i):Math.cos(i))||.001,V=.75*t*(""+r).length;return Math.min(t/H,V)}var w7=class extends D3{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Z1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:C}=this.getUserBounds(),{min:i,max:H}=this,V=s=>i=e?i:s,n=s=>H=C?H:s;if(t){let s=m5(i),c=m5(H);s<0&&c<0?n(0):s>0&&c>0&&V(0)}if(i===H){let s=H===0?1:Math.abs(H*.05);n(H+s),t||V(i-s)}this.min=i,this.max=H}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:C}=t,i;return C?(i=Math.ceil(this.max/C)-Math.floor(this.min/C)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${C} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,C=this.getTickLimit();C=Math.max(2,C);let i={maxTicks:C,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},H=this._range||this,V=Rp(i,H);return t.bounds==="ticks"&&c6(V,this,"value"),t.reverse?(V.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),V}configure(){let t=this.ticks,e=this.min,C=this.max;if(super.configure(),this.options.offset&&t.length){let i=(C-e)/Math.max(t.length-1,1)/2;e-=i,C+=i}this._startValue=e,this._endValue=C,this._valueRange=C-e}getLabelForValue(t){return S4(t,this.chart.options.locale,this.options.ticks.format)}},J0=class extends w7{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?t:0,this.max=V2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,C=Y5(this.options.ticks.minRotation),i=(t?Math.sin(C):Math.cos(C))||.001,H=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,H.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};Q(J0,"id","linear"),Q(J0,"defaults",{ticks:{callback:Z4.formatters.numeric}});var U4=r=>Math.floor(q5(r)),B3=(r,t)=>Math.pow(10,U4(r)+t);function MH(r){return r/Math.pow(10,U4(r))===1}function lH(r,t,e){let C=Math.pow(10,e),i=Math.floor(r/C);return Math.ceil(t/C)-i}function Dp(r,t){let e=t-r,C=U4(e);for(;lH(r,t,C)>10;)C++;for(;lH(r,t,C)<10;)C--;return Math.min(C,U4(r))}function $p(r,{min:t,max:e}){t=N2(r.min,t);let C=[],i=U4(t),H=Dp(t,e),V=H<0?Math.pow(10,Math.abs(H)):1,n=Math.pow(10,H),s=i>H?Math.pow(10,i):0,c=Math.round((t-s)*V)/V,u=Math.floor((t-s)/n/10)*n*10,A=Math.floor((c-u)/Math.pow(10,H)),v=N2(r.min,Math.round((s+u+A*Math.pow(10,H))*V)/V);for(;v<e;)C.push({value:v,major:MH(v),significand:A}),A>=10?A=A<15?15:20:A++,A>=20&&(H++,A=2,V=H>=0?1:V),v=Math.round((s+u+A*Math.pow(10,H))*V)/V;let _=N2(r.max,v);return C.push({value:_,major:MH(_),significand:A}),C}var D6=class extends D3{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let C=w7.prototype.parse.apply(this,[t,e]);if(C===0){this._zero=!0;return}return V2(C)&&C>0?C:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?Math.max(0,t):null,this.max=V2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!V2(this._userMin)&&(this.min=t===B3(this.min,0)?B3(this.min,-1):B3(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),C=this.min,i=this.max,H=n=>C=t?C:n,V=n=>i=e?i:n;C===i&&(C<=0?(H(1),V(10)):(H(B3(C,-1)),V(B3(i,1)))),C<=0&&H(B3(i,-1)),i<=0&&V(B3(C,1)),this.min=C,this.max=i}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},C=$p(e,this);return t.bounds==="ticks"&&c6(C,this,"value"),t.reverse?(C.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),C}getLabelForValue(t){return t===void 0?"0":S4(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=q5(t),this._valueRange=q5(this.max)-q5(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(q5(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};Q(D6,"id","logarithmic"),Q(D6,"defaults",{ticks:{callback:Z4.formatters.logarithmic,major:{enabled:!0}}});function pe(r){let t=r.ticks;if(t.display&&r.display){let e=P2(t.backdropPadding);return F1(t.font&&t.font.size,a2.font.size)+e.height}return 0}function Ip(r,t,e){return e=J1(e)?e:[e],{w:kt(r,t.string,e),h:e.length*t.lineHeight}}function cH(r,t,e,C,i){return r===C||r===i?{start:t-e/2,end:t+e/2}:r<C||r>i?{start:t-e,end:t}:{start:t,end:t+e}}function zp(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),C=[],i=[],H=r._pointLabels.length,V=r.options.pointLabels,n=V.centerPointLabels?q1/H:0;for(let s=0;s<H;s++){let c=V.setContext(r.getPointLabelContext(s));i[s]=c.padding;let u=r.getPointPosition(s,r.drawingArea+i[s],n),A=O2(c.font),v=Ip(r.ctx,A,r._pointLabels[s]);C[s]=v;let _=x2(r.getIndexAngle(s)+n),b=Math.round(x4(_)),y=cH(b,u.x,v.w,0,180),k=cH(b,u.y,v.h,90,270);Np(e,t,_,y,k)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=jp(r,C,i)}function Np(r,t,e,C,i){let H=Math.abs(Math.sin(e)),V=Math.abs(Math.cos(e)),n=0,s=0;C.start<t.l?(n=(t.l-C.start)/H,r.l=Math.min(r.l,t.l-n)):C.end>t.r&&(n=(C.end-t.r)/H,r.r=Math.max(r.r,t.r+n)),i.start<t.t?(s=(t.t-i.start)/V,r.t=Math.min(r.t,t.t-s)):i.end>t.b&&(s=(i.end-t.b)/V,r.b=Math.max(r.b,t.b+s))}function Wp(r,t,e){let C=r.drawingArea,{extra:i,additionalAngle:H,padding:V,size:n}=e,s=r.getPointPosition(t,C+i+V,H),c=Math.round(x4(x2(s.angle+l2))),u=Yp(s.y,n.h,c),A=Gp(c),v=qp(s.x,n.w,A);return{visible:!0,x:s.x,y:u,textAlign:A,left:v,top:u,right:v+n.w,bottom:u+n.h}}function Up(r,t){if(!t)return!0;let{left:e,top:C,right:i,bottom:H}=r;return!(Z5({x:e,y:C},t)||Z5({x:e,y:H},t)||Z5({x:i,y:C},t)||Z5({x:i,y:H},t))}function jp(r,t,e){let C=[],i=r._pointLabels.length,H=r.options,{centerPointLabels:V,display:n}=H.pointLabels,s={extra:pe(H)/2,additionalAngle:V?q1/i:0},c;for(let u=0;u<i;u++){s.padding=e[u],s.size=t[u];let A=Wp(r,u,s);C.push(A),n==="auto"&&(A.visible=Up(A,c),A.visible&&(c=A))}return C}function Gp(r){return r===0||r===180?"center":r<180?"left":"right"}function qp(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function Yp(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function Qp(r,t,e){let{left:C,top:i,right:H,bottom:V}=e,{backdropColor:n}=t;if(!Z1(n)){let s=Y0(t.borderRadius),c=P2(t.backdropPadding);r.fillStyle=n;let u=C-c.left,A=i-c.top,v=H-C+c.width,_=V-i+c.height;Object.values(s).some(b=>b!==0)?(r.beginPath(),v7(r,{x:u,y:A,w:v,h:_,radius:s}),r.fill()):r.fillRect(u,A,v,_)}}function Kp(r,t){let{ctx:e,options:{pointLabels:C}}=r;for(let i=t-1;i>=0;i--){let H=r._pointLabelItems[i];if(!H.visible)continue;let V=C.setContext(r.getPointLabelContext(i));Qp(e,V,H);let n=O2(V.font),{x:s,y:c,textAlign:u}=H;f7(e,r._pointLabels[i],s,c+n.lineHeight/2,n,{color:V.color,textAlign:u,textBaseline:"middle"})}}function BH(r,t,e,C){let{ctx:i}=r;if(e)i.arc(r.xCenter,r.yCenter,t,0,s2);else{let H=r.getPointPosition(0,t);i.moveTo(H.x,H.y);for(let V=1;V<C;V++)H=r.getPointPosition(V,t),i.lineTo(H.x,H.y)}}function Xp(r,t,e,C,i){let H=r.ctx,V=t.circular,{color:n,lineWidth:s}=t;!V&&!C||!n||!s||e<0||(H.save(),H.strokeStyle=n,H.lineWidth=s,H.setLineDash(i.dash||[]),H.lineDashOffset=i.dashOffset,H.beginPath(),BH(r,e,V,C),H.closePath(),H.stroke(),H.restore())}function Jp(r,t,e){return Q5(r,{label:e,index:t,type:"pointLabel"})}var g7=class extends w7{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=P2(pe(this.options)/2),e=this.width=this.maxWidth-t.width,C=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+C/2+t.top),this.drawingArea=Math.floor(Math.min(e,C)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=V2(t)&&!isNaN(t)?t:0,this.max=V2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/pe(this.options))}generateTickLabels(t){w7.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,C)=>{let i=K1(this.options.pointLabels.callback,[e,C],this);return i||i===0?i:""}).filter((e,C)=>this.chart.getDataVisibility(C))}fit(){let t=this.options;t.display&&t.pointLabels.display?zp(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,C,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((C-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,C,i))}getIndexAngle(t){let e=s2/(this._pointLabels.length||1),C=this.options.startAngle||0;return x2(t*e+Y5(C))}getDistanceFromCenterForValue(t){if(Z1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Z1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let C=e[t];return Jp(this.getContext(),t,C)}}getPointPosition(t,e,C=0){let i=this.getIndexAngle(t)-l2+C;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:C,right:i,bottom:H}=this._pointLabelItems[t];return{left:e,top:C,right:i,bottom:H}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let C=this.ctx;C.save(),C.beginPath(),BH(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),C.closePath(),C.fillStyle=t,C.fill(),C.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:C,grid:i,border:H}=e,V=this._pointLabels.length,n,s,c;if(e.pointLabels.display&&Kp(this,V),i.display&&this.ticks.forEach((u,A)=>{if(A!==0||A===0&&this.min<0){s=this.getDistanceFromCenterForValue(u.value);let v=this.getContext(A),_=i.setContext(v),b=H.setContext(v);Xp(this,_,s,V,b)}}),C.display){for(t.save(),n=V-1;n>=0;n--){let u=C.setContext(this.getPointLabelContext(n)),{color:A,lineWidth:v}=u;!v||!A||(t.lineWidth=v,t.strokeStyle=A,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,s=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(n,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,C=e.ticks;if(!C.display)return;let i=this.getIndexAngle(0),H,V;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((n,s)=>{if(s===0&&this.min>=0&&!e.reverse)return;let c=C.setContext(this.getContext(s)),u=O2(c.font);if(H=this.getDistanceFromCenterForValue(this.ticks[s].value),c.showLabelBackdrop){t.font=u.string,V=t.measureText(n.label).width,t.fillStyle=c.backdropColor;let A=P2(c.backdropPadding);t.fillRect(-V/2-A.left,-H-u.size/2-A.top,V+A.width,u.size+A.height)}f7(t,n.label,0,-H,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}};Q(g7,"id","radialLinear"),Q(g7,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Z4.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),Q(g7,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),Q(g7,"descriptors",{angleLines:{_fallback:"grid"}});var Q6={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Q2=Object.keys(Q6);function dH(r,t){return r-t}function pH(r,t){if(Z1(t))return null;let e=r._adapter,{parser:C,round:i,isoWeekday:H}=r._parseOpts,V=t;return typeof C=="function"&&(V=C(V)),V2(V)||(V=typeof C=="string"?e.parse(V,C):e.parse(V)),V===null?null:(i&&(V=i==="week"&&(P3(H)||H===!0)?e.startOf(V,"isoWeek",H):e.startOf(V,i)),+V)}function uH(r,t,e,C){let i=Q2.length;for(let H=Q2.indexOf(r);H<i-1;++H){let V=Q6[Q2[H]],n=V.steps?V.steps:Number.MAX_SAFE_INTEGER;if(V.common&&Math.ceil((e-t)/(n*V.size))<=C)return Q2[H]}return Q2[i-1]}function tu(r,t,e,C,i){for(let H=Q2.length-1;H>=Q2.indexOf(e);H--){let V=Q2[H];if(Q6[V].common&&r._adapter.diff(i,C,V)>=t-1)return V}return Q2[e?Q2.indexOf(e):0]}function eu(r){for(let t=Q2.indexOf(r)+1,e=Q2.length;t<e;++t)if(Q6[Q2[t]].common)return Q2[t]}function mH(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:C,hi:i}=_4(e,t),H=e[C]>=t?e[C]:e[i];r[H]=!0}}function ru(r,t,e,C){let i=r._adapter,H=+i.startOf(t[0].value,C),V=t[t.length-1].value,n,s;for(n=H;n<=V;n=+i.add(n,1,C))s=e[n],s>=0&&(t[s].major=!0);return t}function hH(r,t,e){let C=[],i={},H=t.length,V,n;for(V=0;V<H;++V)n=t[V],i[n]=V,C.push({value:n,major:!1});return H===0||!e?C:ru(r,C,i,e)}var Z7=class extends D3{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let C=t.time||(t.time={}),i=this._adapter=new Dc._date(t.adapters.date);i.init(e),O3(C.displayFormats,i.formats()),this._parseOpts={parser:C.parser,round:C.round,isoWeekday:C.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:pH(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,C=t.time.unit||"day",{min:i,max:H,minDefined:V,maxDefined:n}=this.getUserBounds();function s(c){!V&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!n&&!isNaN(c.max)&&(H=Math.max(H,c.max))}(!V||!n)&&(s(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&s(this.getMinMax(!1))),i=V2(i)&&!isNaN(i)?i:+e.startOf(Date.now(),C),H=V2(H)&&!isNaN(H)?H:+e.endOf(Date.now(),C)+1,this.min=Math.min(i,H-1),this.max=Math.max(i+1,H)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],C=t[t.length-1]),{min:e,max:C}}buildTicks(){let t=this.options,e=t.time,C=t.ticks,i=C.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);let H=this.min,V=this.max,n=St(i,H,V);return this._unit=e.unit||(C.autoSkip?uH(e.minUnit,this.min,this.max,this._getLabelCapacity(H)):tu(this,n.length,e.minUnit,this.min,this.max)),this._majorUnit=!C.major.enabled||this._unit==="year"?void 0:eu(this._unit),this.initOffsets(i),t.reverse&&n.reverse(),hH(this,n,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,C=0,i,H;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,H=this.getDecimalForValue(t[t.length-1]),t.length===1?C=H:C=(H-this.getDecimalForValue(t[t.length-2]))/2);let V=t.length<3?.5:.25;e=g2(e,0,V),C=g2(C,0,V),this._offsets={start:e,end:C,factor:1/(e+1+C)}}_generate(){let t=this._adapter,e=this.min,C=this.max,i=this.options,H=i.time,V=H.unit||uH(H.minUnit,e,C,this._getLabelCapacity(e)),n=F1(i.ticks.stepSize,1),s=V==="week"?H.isoWeekday:!1,c=P3(s)||s===!0,u={},A=e,v,_;if(c&&(A=+t.startOf(A,"isoWeek",s)),A=+t.startOf(A,c?"day":V),t.diff(C,e,V)>1e5*n)throw new Error(e+" and "+C+" are too far apart with stepSize of "+n+" "+V);let b=i.ticks.source==="data"&&this.getDataTimestamps();for(v=A,_=0;v<C;v=+t.add(v,n,V),_++)mH(u,v,b);return(v===C||i.bounds==="ticks"||_===1)&&mH(u,v,b),Object.keys(u).sort(dH).map(y=>+y)}getLabelForValue(t){let e=this._adapter,C=this.options.time;return C.tooltipFormat?e.format(t,C.tooltipFormat):e.format(t,C.displayFormats.datetime)}format(t,e){let i=this.options.time.displayFormats,H=this._unit,V=e||i[H];return this._adapter.format(t,V)}_tickFormatFunction(t,e,C,i){let H=this.options,V=H.ticks.callback;if(V)return K1(V,[t,e,C],this);let n=H.time.displayFormats,s=this._unit,c=this._majorUnit,u=s&&n[s],A=c&&n[c],v=C[e],_=c&&A&&v&&v.major;return this._adapter.format(t,i||(_?A:u))}generateTickLabels(t){let e,C,i;for(e=0,C=t.length;e<C;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,C=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+C)*e.factor)}getValueForPixel(t){let e=this._offsets,C=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+C*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,C=this.ctx.measureText(t).width,i=Y5(this.isHorizontal()?e.maxRotation:e.minRotation),H=Math.cos(i),V=Math.sin(i),n=this._resolveTickFontOptions(0).size;return{w:C*H+n*V,h:C*V+n*H}}_getLabelCapacity(t){let e=this.options.time,C=e.displayFormats,i=C[e.unit]||C.millisecond,H=this._tickFormatFunction(t,0,hH(this,[t],this._majorUnit),i),V=this._getLabelSize(H),n=Math.floor(this.isHorizontal()?this.width/V.w:this.height/V.h)-1;return n>0?n:1}getDataTimestamps(){let t=this._cache.data||[],e,C;if(t.length)return t;let i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,C=i.length;e<C;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,C;if(t.length)return t;let i=this.getLabels();for(e=0,C=i.length;e<C;++e)t.push(pH(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return m6(t.sort(dH))}};Q(Z7,"id","time"),Q(Z7,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function $6(r,t,e){let C=0,i=r.length-1,H,V,n,s;e?(t>=r[C].pos&&t<=r[i].pos&&({lo:C,hi:i}=u0(r,"pos",t)),{pos:H,time:n}=r[C],{pos:V,time:s}=r[i]):(t>=r[C].time&&t<=r[i].time&&({lo:C,hi:i}=u0(r,"time",t)),{time:H,pos:n}=r[C],{time:V,pos:s}=r[i]);let c=V-H;return c?n+(s-n)*(t-H)/c:n}var I6=class extends Z7{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=$6(e,this.min),this._tableRange=$6(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:C}=this,i=[],H=[],V,n,s,c,u;for(V=0,n=t.length;V<n;++V)c=t[V],c>=e&&c<=C&&i.push(c);if(i.length<2)return[{time:e,pos:0},{time:C,pos:1}];for(V=0,n=i.length;V<n;++V)u=i[V+1],s=i[V-1],c=i[V],Math.round((u+s)/2)!==c&&H.push({time:c,pos:V/(n-1)});return H}_generate(){let t=this.min,e=this.max,C=super.getDataTimestamps();return(!C.includes(t)||!C.length)&&C.splice(0,0,t),(!C.includes(e)||C.length===1)&&C.push(e),C.sort((i,H)=>i-H)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),C=this.getLabelTimestamps();return e.length&&C.length?t=this.normalize(e.concat(C)):t=e.length?e:C,t=this._cache.all=t,t}getDecimalForValue(t){return($6(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,C=this.getDecimalForPixel(t)/e.factor-e.end;return $6(this._table,C*this._tableRange+this._minPos,!0)}};Q(I6,"id","timeseries"),Q(I6,"defaults",Z7.defaults);var RH=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),q4={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):Z1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var C=[].concat(t),i=C.length,H=r.font,V=0,n;for(r.font=e.string,n=0;n<i;++n)V=Math.max(r.measureText(C[n]).width,V);return r.font=H,{height:i*e.lineHeight,width:V}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),C=[],i,H,V,n;for(i=0,V=t.length;i<V;++i)n=t[i],H=e.indexOf(n),H===-1?C.push([n,1]):e.splice(H,1);for(i=0,V=e.length;i<V;++i)C.push([e[i],-1]);return C},rasterize:function(r){return Math.round(r*RH)/RH}};function ue(r,t){var e=t.x,C=t.y;if(e===null)return{x:0,y:-1};if(C===null)return{x:1,y:0};var i=r.x-e,H=r.y-C,V=Math.sqrt(i*i+H*H);return{x:V?i/V:0,y:V?H/V:-1}}function Cu(r,t,e,C,i){switch(i){case"center":e=C=0;break;case"bottom":e=0,C=1;break;case"right":e=1,C=0;break;case"left":e=-1,C=0;break;case"top":e=0,C=-1;break;case"start":e=-e,C=-C;break;case"end":break;default:i*=Math.PI/180,e=Math.cos(i),C=Math.sin(i);break}return{x:r,y:t,vx:e,vy:C}}var iu=0,$H=1,IH=2,zH=4,NH=8;function K6(r,t,e){var C=iu;return r<e.left?C|=$H:r>e.right&&(C|=IH),t<e.top?C|=NH:t>e.bottom&&(C|=zH),C}function ou(r,t){for(var e=r.x0,C=r.y0,i=r.x1,H=r.y1,V=K6(e,C,t),n=K6(i,H,t),s,c,u;!(!(V|n)||V&n);)s=V||n,s&NH?(c=e+(i-e)*(t.top-C)/(H-C),u=t.top):s&zH?(c=e+(i-e)*(t.bottom-C)/(H-C),u=t.bottom):s&IH?(u=C+(H-C)*(t.right-e)/(i-e),c=t.right):s&$H&&(u=C+(H-C)*(t.left-e)/(i-e),c=t.left),s===V?(e=c,C=u,V=K6(e,C,t)):(i=c,H=u,n=K6(i,H,t));return{x0:e,x1:i,y0:C,y1:H}}function X6(r,t){var e=t.anchor,C=r,i,H;return t.clamp&&(C=ou(C,t.area)),e==="start"?(i=C.x0,H=C.y0):e==="end"?(i=C.x1,H=C.y1):(i=(C.x0+C.x1)/2,H=(C.y0+C.y1)/2),Cu(i,H,r.vx,r.vy,t.align)}var J6={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,C=Math.cos(e),i=Math.sin(e),H=r.innerRadius,V=r.outerRadius;return X6({x0:r.x+C*H,y0:r.y+i*H,x1:r.x+C*V,y1:r.y+i*V,vx:C,vy:i},t)},point:function(r,t){var e=ue(r,t.origin),C=e.x*r.options.radius,i=e.y*r.options.radius;return X6({x0:r.x-C,y0:r.y-i,x1:r.x+C,y1:r.y+i,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=ue(r,t.origin),C=r.x,i=r.y,H=0,V=0;return r.horizontal?(C=Math.min(r.x,r.base),H=Math.abs(r.base-r.x)):(i=Math.min(r.y,r.base),V=Math.abs(r.base-r.y)),X6({x0:C,y0:i+V,x1:C+H,y1:i,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=ue(r,t.origin);return X6({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},x0=q4.rasterize;function Hu(r){var t=r.borderWidth||0,e=r.padding,C=r.size.height,i=r.size.width,H=-i/2,V=-C/2;return{frame:{x:H-e.left-t,y:V-e.top-t,w:i+e.width+t*2,h:C+e.height+t*2},text:{x:H,y:V,w:i,h:C}}}function Vu(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var C=e.getBasePixel();return r.horizontal?{x:C,y:null}:{x:null,y:C}}function au(r){return r instanceof Q0?J6.arc:r instanceof y5?J6.point:r instanceof v0?J6.bar:J6.fallback}function nu(r,t,e,C,i,H){var V=Math.PI/2;if(H){var n=Math.min(H,i/2,C/2),s=t+n,c=e+n,u=t+C-n,A=e+i-n;r.moveTo(t,c),s<u&&c<A?(r.arc(s,c,n,-Math.PI,-V),r.arc(u,c,n,-V,0),r.arc(u,A,n,0,V),r.arc(s,A,n,V,Math.PI)):s<u?(r.moveTo(s,e),r.arc(u,c,n,-V,V),r.arc(s,c,n,V,Math.PI+V)):c<A?(r.arc(s,c,n,-Math.PI,0),r.arc(s,A,n,0,Math.PI)):r.arc(s,c,n,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,C,i)}function Lu(r,t,e){var C=e.backgroundColor,i=e.borderColor,H=e.borderWidth;!C&&(!i||!H)||(r.beginPath(),nu(r,x0(t.x)+H/2,x0(t.y)+H/2,x0(t.w)-H,x0(t.h)-H,e.borderRadius),r.closePath(),C&&(r.fillStyle=C,r.fill()),i&&H&&(r.strokeStyle=i,r.lineWidth=H,r.lineJoin="miter",r.stroke()))}function su(r,t,e){var C=e.lineHeight,i=r.w,H=r.x,V=r.y+C/2;return t==="center"?H+=i/2:(t==="end"||t==="right")&&(H+=i),{h:C,w:i,x:H,y:V}}function Mu(r,t,e){var C=r.shadowBlur,i=e.stroked,H=x0(e.x),V=x0(e.y),n=x0(e.w);i&&r.strokeText(t,H,V,n),e.filled&&(C&&i&&(r.shadowBlur=0),r.fillText(t,H,V,n),C&&i&&(r.shadowBlur=C))}function lu(r,t,e,C){var i=C.textAlign,H=C.color,V=!!H,n=C.font,s=t.length,c=C.textStrokeColor,u=C.textStrokeWidth,A=c&&u,v;if(!(!s||!V&&!A))for(e=su(e,i,n),r.font=n.string,r.textAlign=i,r.textBaseline="middle",r.shadowBlur=C.textShadowBlur,r.shadowColor=C.textShadowColor,V&&(r.fillStyle=H),A&&(r.lineJoin="round",r.lineWidth=u,r.strokeStyle=c),v=0,s=t.length;v<s;++v)Mu(r,t[v],{stroked:A,filled:V,w:e.w,x:e.x,y:e.y+e.h*v})}var WH=function(r,t,e,C){var i=this;i._config=r,i._index=C,i._model=null,i._rects=null,i._ctx=t,i._el=e};o5(WH.prototype,{_modelize:function(r,t,e,C){var i=this,H=i._index,V=O2(X1([e.font,{}],C,H)),n=X1([e.color,a2.color],C,H);return{align:X1([e.align,"center"],C,H),anchor:X1([e.anchor,"center"],C,H),area:C.chart.chartArea,backgroundColor:X1([e.backgroundColor,null],C,H),borderColor:X1([e.borderColor,null],C,H),borderRadius:X1([e.borderRadius,0],C,H),borderWidth:X1([e.borderWidth,0],C,H),clamp:X1([e.clamp,!1],C,H),clip:X1([e.clip,!1],C,H),color:n,display:r,font:V,lines:t,offset:X1([e.offset,4],C,H),opacity:X1([e.opacity,1],C,H),origin:Vu(i._el,C),padding:P2(X1([e.padding,4],C,H)),positioner:au(i._el),rotation:X1([e.rotation,0],C,H)*(Math.PI/180),size:q4.textSize(i._ctx,t,V),textAlign:X1([e.textAlign,"start"],C,H),textShadowBlur:X1([e.textShadowBlur,0],C,H),textShadowColor:X1([e.textShadowColor,n],C,H),textStrokeColor:X1([e.textStrokeColor,n],C,H),textStrokeWidth:X1([e.textStrokeWidth,0],C,H)}},update:function(r){var t=this,e=null,C=null,i=t._index,H=t._config,V,n,s,c=X1([H.display,!0],r,i);c&&(V=r.dataset.data[i],n=F1(K1(H.formatter,[V,r]),V),s=Z1(n)?[]:q4.toTextLines(n),s.length&&(e=t._modelize(c,s,H,r),C=Hu(e))),t._model=e,t._rects=C},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,C=r.ctx,i=e._model,H=e._rects,V;this.visible()&&(C.save(),i.clip&&(V=i.area,C.beginPath(),C.rect(V.left,V.top,V.right-V.left,V.bottom-V.top),C.clip()),C.globalAlpha=q4.bound(0,i.opacity,1),C.translate(x0(t.x),x0(t.y)),C.rotate(i.rotation),Lu(C,H.frame,i),lu(C,i.lines,H.text,i),C.restore())}});var cu=Number.MIN_SAFE_INTEGER||-9007199254740991,du=Number.MAX_SAFE_INTEGER||9007199254740991;function G4(r,t,e){var C=Math.cos(e),i=Math.sin(e),H=t.x,V=t.y;return{x:H+C*(r.x-H)-i*(r.y-V),y:V+i*(r.x-H)+C*(r.y-V)}}function DH(r,t){var e=du,C=cu,i=t.origin,H,V,n,s,c;for(H=0;H<r.length;++H)V=r[H],n=V.x-i.x,s=V.y-i.y,c=t.vx*n+t.vy*s,e=Math.min(e,c),C=Math.max(C,c);return{min:e,max:C}}function t8(r,t){var e=t.x-r.x,C=t.y-r.y,i=Math.sqrt(e*e+C*C);return{vx:(t.x-r.x)/i,vy:(t.y-r.y)/i,origin:r,ln:i}}var UH=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};o5(UH.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,C=t._rect;return r=G4(r,t.center(),-t._rotation),!(r.x<C.x-e||r.y<C.y-e||r.x>C.x+C.w+e*2||r.y>C.y+C.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),C=[t8(t[0],t[1]),t8(t[0],t[3])],i,H,V;for(this._rotation!==r._rotation&&C.push(t8(e[0],e[1]),t8(e[0],e[3])),i=0;i<C.length;++i)if(H=DH(t,C[i]),V=DH(e,C[i]),H.max<V.min||V.max<H.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,C=r.center();return[G4({x:t.x,y:t.y},C,e),G4({x:t.x+t.w,y:t.y},C,e),G4({x:t.x+t.w,y:t.y+t.h},C,e),G4({x:t.x,y:t.y+t.h},C,e)]}});function jH(r,t,e){var C=t.positioner(r,t),i=C.vx,H=C.vy;if(!i&&!H)return{x:C.x,y:C.y};var V=e.w,n=e.h,s=t.rotation,c=Math.abs(V/2*Math.cos(s))+Math.abs(n/2*Math.sin(s)),u=Math.abs(V/2*Math.sin(s))+Math.abs(n/2*Math.cos(s)),A=1/Math.max(Math.abs(i),Math.abs(H));return c*=i*A,u*=H*A,c+=t.offset*i,u+=t.offset*H,{x:C.x+c,y:C.y+u}}function pu(r,t){var e,C,i,H;for(e=r.length-1;e>=0;--e)for(i=r[e].$layout,C=e-1;C>=0&&i._visible;--C)H=r[C].$layout,H._visible&&i._box.intersects(H._box)&&t(i,H);return r}function uu(r){var t,e,C,i,H,V,n;for(t=0,e=r.length;t<e;++t)C=r[t],i=C.$layout,i._visible&&(n=new Proxy(C._el,{get:(s,c)=>s.getProps([c],!0)[c]}),H=C.geometry(),V=jH(n,C.model(),H),i._box.update(V,H,C.rotation()));return pu(r,function(s,c){var u=s._hidable,A=c._hidable;u&&A||A?c._visible=!1:u&&(s._visible=!1)})}var Y4={prepare:function(r){var t=[],e,C,i,H,V;for(e=0,i=r.length;e<i;++e)for(C=0,H=r[e].length;C<H;++C)V=r[e][C],t.push(V),V.$layout={_box:new UH,_hidable:!1,_visible:!0,_set:e,_idx:V._index};return t.sort(function(n,s){var c=n.$layout,u=s.$layout;return c._idx===u._idx?u._set-c._set:u._idx-c._idx}),this.update(t),t},update:function(r){var t=!1,e,C,i,H,V;for(e=0,C=r.length;e<C;++e)i=r[e],H=i.model(),V=i.$layout,V._hidable=H&&H.display==="auto",V._visible=i.visible(),t|=V._hidable;t&&uu(r)},lookup:function(r,t){var e,C;for(e=r.length-1;e>=0;--e)if(C=r[e].$layout,C&&C._visible&&C._box.contains(t))return r[e];return null},draw:function(r,t){var e,C,i,H,V,n;for(e=0,C=t.length;e<C;++e)i=t[e],H=i.$layout,H._visible&&(V=i.geometry(),n=jH(i._el,i.model(),V),H._box.update(n,V,i.rotation()),i.draw(r,n))}},mu=function(r){if(Z1(r))return null;var t=r,e,C,i;if(w1(r))if(!Z1(r.label))t=r.label;else if(!Z1(r.r))t=r.r;else for(t="",e=Object.keys(r),i=0,C=e.length;i<C;++i)t+=(i!==0?", ":"")+e[i]+": "+r[e[i]];return""+t},hu={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:mu,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},K2="$datalabels",GH="$default";function Au(r,t){var e=r.datalabels,C={},i=[],H,V;return e===!1?null:(e===!0&&(e={}),t=o5({},[t,e]),H=t.labels||{},V=Object.keys(H),delete t.labels,V.length?V.forEach(function(n){H[n]&&i.push(o5({},[t,H[n],{_key:n}]))}):i.push(t),C=i.reduce(function(n,s){return $1(s.listeners||{},function(c,u){n[u]=n[u]||{},n[u][s._key||GH]=c}),delete s.listeners,n},{}),{labels:i,listeners:C})}function me(r,t,e,C){if(t){var i=e.$context,H=e.$groups,V;t[H._set]&&(V=t[H._set][H._key],V&&K1(V,[i,C])===!0&&(r[K2]._dirty=!0,e.update(i)))}}function fu(r,t,e,C,i){var H,V;!e&&!C||(e?C?e!==C&&(V=H=!0):V=!0:H=!0,V&&me(r,t.leave,e,i),H&&me(r,t.enter,C,i))}function vu(r,t){var e=r[K2],C=e._listeners,i,H;if(!(!C.enter&&!C.leave)){if(t.type==="mousemove")H=Y4.lookup(e._labels,t);else if(t.type!=="mouseout")return;i=e._hovered,e._hovered=H,fu(r,C,i,H,t)}}function xu(r,t){var e=r[K2],C=e._listeners.click,i=C&&Y4.lookup(e._labels,t);i&&me(r,C,i,t)}var qH={id:"datalabels",defaults:hu,beforeInit:function(r){r[K2]={_actives:[]}},beforeUpdate:function(r){var t=r[K2];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var C=t.index,i=r[K2],H=i._datasets[C]=[],V=r.isDatasetVisible(C),n=r.data.datasets[C],s=Au(n,e),c=t.meta.data||[],u=r.ctx,A,v,_,b,y,k,P,$;for(u.save(),A=0,_=c.length;A<_;++A)if(P=c[A],P[K2]=[],V&&P&&r.getDataVisibility(A)&&!P.skip)for(v=0,b=s.labels.length;v<b;++v)y=s.labels[v],k=y._key,$=new WH(y,u,P,A),$.$groups={_set:C,_key:k||GH},$.$context={active:!1,chart:r,dataIndex:A,dataset:n,datasetIndex:C},$.update($.$context),P[K2].push($),H.push($);u.restore(),o5(i._listeners,s.listeners,{merger:function(I,X,Y){X[I]=X[I]||{},X[I][t.index]=Y[I],i._listened=!0}})},afterUpdate:function(r){r[K2]._labels=Y4.prepare(r[K2]._datasets)},afterDatasetsDraw:function(r){Y4.draw(r,r[K2]._labels)},beforeEvent:function(r,t){if(r[K2]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":vu(r,e);break;case"click":xu(r,e);break}}},afterEvent:function(r){var t=r[K2],e=t._actives,C=t._actives=r.getActiveElements(),i=q4.arrayDiff(e,C),H,V,n,s,c,u,A;for(H=0,V=i.length;H<V;++H)if(c=i[H],c[1])for(A=c[0].element[K2]||[],n=0,s=A.length;n<s;++n)u=A[n],u.$context.active=c[1]===1,u.update(u.$context);(t._dirty||i.length)&&(Y4.update(t._labels),r.render()),delete t._dirty}};function e8(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var J5=class extends g1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=c0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return F;let e=this.getDateInfo(),C=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,i=e.secondaryLabel!==void 0;return w`
      <div
        class="wsfc-forecast-slot-time ${e.className||""} ${i?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${e.icon?w`<ha-icon .icon=${e.icon}></ha-icon>`:e.label}</span
        >
        ${i?w`<span class="wsfc-forecast-slot-time-secondary"
              >${e.secondaryLabel}</span
            >`:F}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${C}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let e=X9(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let c=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:$0(this.hass,this.forecast.datetime),secondaryLabel:c}}if(this.forecastType==="daily")return e?{label:$0(this.hass,this.forecast.datetime),secondaryLabel:xi(this.hass,this.forecast.datetime)}:{label:$0(this.hass,this.forecast.datetime)};let i=new Date(this.forecast.datetime),H=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):wi(i),V=i,n;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:c,sunset:u}=this.suntimesInfo,A=v=>{let _=new Date(i);return _.setHours(v.getHours(),v.getMinutes()),_.getTime()>=i.getTime()&&_.getTime()<=H.getTime()};A(c)?(n="wsfc-sunrise",V=c):A(u)&&(n="wsfc-sunset",V=u)}if(n){let c=_i(this.hass,V);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:c.suffix?`${c.time} ${c.suffix}`:c.time,className:n,icon:n==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:c.time,secondaryLabel:e?c.suffix:void 0,className:n}}let s=gi(this.hass,V);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:s.hour}:{label:s.hour,secondaryLabel:e?s.suffix:void 0}}};J5.styles=e2`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,q([t1({attribute:!1})],J5.prototype,"hass",2),q([t1({attribute:!1})],J5.prototype,"forecast",2),q([t1({attribute:!1})],J5.prototype,"forecastType",2),q([t1({attribute:!1})],J5.prototype,"isTwiceDailyEntity",2),q([t1({attribute:!1})],J5.prototype,"config",2),J5=q([H2("wsfc-forecast-header-items")],J5);var t3=class extends g1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?w`
      <div class="dropdown">
        ${this.options.map(e=>this._renderOption(e))}
      </div>
    `:F}_renderOption(e){let C=this.value===e.value;return w`
      <div
        class="menu-item ${C?"selected":""}"
        @click=${i=>this._onSelected(i,e.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${e.icon}></ha-icon>
          <span>${e.label}</span>
        </div>
      </div>
    `}_onSelected(e,C){if(e.preventDefault(),e.stopPropagation(),this.value===C){this.dispatchEvent(new CustomEvent("closed"));return}this.value=C,this.dispatchEvent(new CustomEvent("selected",{detail:{value:C}}))}_onClickOutside(e){let C=e.composedPath();C.includes(this)||C.some(H=>H instanceof Element&&H.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};t3.styles=e2`
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
  `,q([t1({type:Boolean})],t3.prototype,"open",2),q([t1({attribute:!1})],t3.prototype,"options",2),q([t1({attribute:!1})],t3.prototype,"value",2),t3=q([H2("wsfc-chart-attribute-selector")],t3);_2.register(R3,v0,f0,H5,y5,J0,S7,qH);var YH=16384,gu=6,r8=12,_u=10,Su=10,Zu=130,W2=class extends g1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=Pi;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new p7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let C=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let i=b5(C,this._chart),H=this._chart.scales.x;if(!H)return;let V=H.getValueForPixel(i.x);if(V==null)return;let n=H.getLabelForValue(V),s=this._chart.data.labels?.indexOf(n)??-1;if(s===-1)return;let c=this.safeForecast[s];if(!c)return;let u={selectedForecast:c,action:e.detail.action};C2(this,"action",u)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let i=e.has("forecastType")||e.has("itemWidth");this.updateChartData(i)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return F;let C=e.length,i=Math.max(C-1,0),H=this._getChartFontSize(),V=Zu+Math.max(0,H-r8),s={"--wfc-forecast-chart-width":`calc(${C} * var(--forecast-item-width) + ${i} * var(--forecast-item-gap))`},c={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},u={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${V}px`};return w`
      <div
        class="${w3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
      >
        ${this.config.forecast?.show_attribute_selector?w`<span>${this._localizeSelectedAttribute()}</span>
              <div class="wsfc-forecast-chart-attribute-selector">
                <ha-button
                  class="wsfc-settings-toggle-button"
                  size="small"
                  appearance="filled"
                  variant="brand"
                  @click=${this._onSettingsToggle}
                >
                  <ha-icon
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":S5[this._selectedAttribute]}
                  ></ha-icon>
                </ha-button>
              </div>`:F}
        <wsfc-chart-attribute-selector
          .open=${this._settingsOpen}
          .options=${this._getChartOptions()}
          .value=${this._selectedAttribute}
          @selected=${this._onAttributesSelected}
          @closed=${this._onSettingsClosed}
        ></wsfc-chart-attribute-selector>
      </div>
      <div
        class="${w3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${z2(s)}
          .actionHandler=${U5({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${z2(c)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${z2(u)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${e.map((A,v)=>w`
                <div class="wsfc-forecast-slot" data-index=${v}>
                  <wsfc-forecast-info
                    .hass=${this.hass}
                    .weatherEntity=${this.weatherEntity}
                    .forecast=${A}
                    .config=${this.config}
                    .hidePrecipitation=${!0}
                  ></wsfc-forecast-info>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new _2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let C=this.getChartConfig(),i=this._chart.config.type,H=C.type;if(i!==H){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=C.data,this._chart.options.scales&&C.options?.scales&&(this._chart.options.scales=C.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let C=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(C){let i=parseFloat(C);if(!isNaN(i))return i}return r8}_getBarLabelOffset(){return-22-(this._getChartFontSize()-r8)}getChartConfig(){let e=this.safeForecast,C=getComputedStyle(this),i=C.getPropertyValue("--wfc-chart-grid-color"),H=this._getChartFontSize(),V=H+Su,n=_u+(H-r8),s={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:H}}},layout:{autoPadding:!1,padding:{top:V,bottom:n,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:i,dash:[4,4]},grid:{offset:!0,display:!0,color:i,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,C,s);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,C,s);default:return this._getDefaultWeatherConfig(e,C,s)}}_getDefaultWeatherConfig(e,C,i){let{minTemp:H,maxTemp:V}=this.computeScaleLimits(e),n=C.getPropertyValue("--wfc-chart-temp-high-label-color"),s=C.getPropertyValue("--wfc-chart-temp-low-label-color"),c=C.getPropertyValue("--wfc-chart-precipitation-label-color"),u=C.getPropertyValue("--wfc-precipitation-bar-color"),A=c7(i5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),v=this.getTemperatureLineStyle(C,"temperature"),_=this.getTemperatureLineStyle(C,"templow");return{type:"line",data:{labels:e.map(b=>b.datetime),datasets:[{data:e.map(b=>b.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:n,formatter:b=>b!=null?`${j5(this.hass,this.weatherEntity,b,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...v},{data:e.map(b=>b.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:s,formatter:b=>b!=null?`${j5(this.hass,this.weatherEntity,b,this.config.forecast?.temperature_precision,!0)}\xB0`:null},..._},{type:"bar",data:e.map(b=>b.precipitation&&b.precipitation!==0?b.precipitation:null),backgroundColor:u,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:c,formatter:b=>Di(b,i5(this.hass,this.weatherEntity,"precipitation"))}}]},options:v3({},i,{scales:{yTemp:{type:"linear",display:!1,min:H,max:V,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:A,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,C,i){let H=C.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(V=>V.datetime),datasets:[{type:"bar",data:e.map(V=>V.uv_index!=null?Math.round(V.uv_index):0),backgroundColor:e.map(V=>C.getPropertyValue(e8(V.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:H}}]},options:v3({},i,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,C,i){let H=this._selectedAttribute,V=H==="humidity"?"--wfc-chart-humidity-line-color":H==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",n=C.getPropertyValue(V)||C.getPropertyValue("--wfc-chart-default-line-color"),s=C.getPropertyValue("--wfc-chart-label-color"),c=i5(this.hass,this.weatherEntity,H),u=e.map(k=>k[H]??0),A=Math.max(...u),v=Math.min(...u),_=A-v||1,b=A+_*.2,y=v-_*.1;return{type:"line",data:{labels:e.map(k=>k.datetime),datasets:[{data:e.map(k=>k[H]??null),borderColor:n,pointBackgroundColor:n,fill:!1,datalabels:{anchor:"end",align:"top",color:s,formatter:(k,P)=>{if(k===null)return null;let $=`${k} ${c}`;return $.length>gu&&P.dataIndex%2!==0?null:$}}}]},options:v3({},i,{scales:{y:{display:!1,min:y,max:b}}})}}getTemperatureLineStyle(e,C){let i=C==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",H=e.getPropertyValue(i),V=n=>this.computeTemperatureLineColor(n,e,H);return{borderColor:V,pointBorderColor:V,pointBackgroundColor:V,borderDash:this.config.forecast?.use_color_thresholds&&C==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,C,i){if(!this.config.forecast?.use_color_thresholds)return i;let H=e.chart,{ctx:V,chartArea:n,scales:s}=H;if(!n||!s.yTemp)return i;if(this._temperatureColors===null){let $=C;this._temperatureColors={cold:$.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:$.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:$.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:$.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:$.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:$.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let c=s.yTemp,{min:u,max:A}=c;if(!Number.isFinite(u)||!Number.isFinite(A))return i;let v=V.createLinearGradient(0,n.bottom,0,n.top),_=$=>Math.max(0,Math.min(1,($-u)/(A-u))),y=i5(this.hass,this.weatherEntity,"temperature")==="\xB0F",k=$=>y?$*9/5+32:$,P=[{pos:_(k(-10)),color:this._temperatureColors.cold},{pos:_(k(0)),color:this._temperatureColors.freezing},{pos:_(k(8)),color:this._temperatureColors.chilly},{pos:_(k(18)),color:this._temperatureColors.mild},{pos:_(k(26)),color:this._temperatureColors.warm},{pos:_(k(34)),color:this._temperatureColors.hot}].sort(($,I)=>$.pos-I.pos);for(let $ of P)v.addColorStop($.pos,$.color);return v}computeScaleLimits(e){let C=e.map(I=>I.temperature),i=e.map(I=>I.templow??I.temperature),H=Math.min(...i),V=Math.max(...C),n=e.some(I=>I.templow!==void 0&&I.templow!==null),s=Math.max(V-H,10),c=.2,u=n?.35:.1,A=s*c,v=s*u,_=2,b=n?5:1,y=Math.max(A,_),k=Math.max(v,b),P=Math.floor(H-k),$=Math.ceil(V+y);return P>=$&&($=P+1),{minTemp:P,maxTemp:$}}renderHeaderItems(e){let C=[],i;return e.forEach((H,V)=>{if(H.datetime){if(this.forecastType==="hourly"){let n=$0(this.hass,H.datetime);i!==n&&(i=n,C.push(w`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${n}</div>
            </div>`))}C.push(w`
        <div class="wsfc-forecast-slot" data-index=${V}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${H}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
        </div>
      `)}}),C}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),C=Math.floor((YH+e)/(this.itemWidth+e));return this.forecast.length>C?(_5.debug(`Truncating forecast to ${C} items to stay under ${YH}px (including ${e}px gaps).`),this.forecast.slice(0,C)):this.forecast}_getGapValue(){let C=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(C)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,C=i=>i==="temperature_and_precipitation"?!0:e.some(H=>H[i]!=null);return e6.filter(C).map(i=>({label:i==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,i)||i,icon:i==="temperature_and_precipitation"?"mdi:water-thermometer":S5[i],value:i}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};q([t1({attribute:!1})],W2.prototype,"hass",2),q([t1({attribute:!1})],W2.prototype,"weatherEntity",2),q([t1({attribute:!1})],W2.prototype,"forecast",2),q([t1({attribute:!1})],W2.prototype,"config",2),q([t1({attribute:!1})],W2.prototype,"forecastType",2),q([t1({attribute:!1})],W2.prototype,"isTwiceDailyEntity",2),q([t1({attribute:!1})],W2.prototype,"itemWidth",2),q([t1({attribute:!1})],W2.prototype,"isScrollable",2),q([s4("canvas")],W2.prototype,"_canvas",2),q([I2()],W2.prototype,"_settingsOpen",2),q([I2()],W2.prototype,"_selectedAttribute",2),W2=q([H2("wsfc-forecast-chart")],W2);var e3=class extends g1{createRenderRoot(){return this}render(){if(!this.forecast)return F;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),C=Bi(this.forecast);return w`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?w`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:F}
      </div>
      <div
        class=${w3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!C})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,C=t/e*100;return Math.round(Math.min(C,100))}};q([t1({attribute:!1})],e3.prototype,"hass",2),q([t1({attribute:!1})],e3.prototype,"forecast",2),q([t1({attribute:!1})],e3.prototype,"config",2),q([t1({attribute:!1})],e3.prototype,"maxPrecipitation",2),e3=q([H2("wsfc-forecast-details")],e3);var k5=class extends g1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return F;let e=this.forecast.wind_speed||0,C=r6(this.forecast),i=this.radius,H=4,V=10,n=i+V,s=i+V,c=2*(i+V),u=Math.round(e),A=this.computeLineColor(),v=C;v!==void 0&&this.type==="direction"&&(v=(v+180)%360);let _=Number.isFinite(v),b=s-i,y=i*.55,k=b-y,P=i*.45;return w`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${c} ${c}"
        role="img"
        aria-label="${_?`Wind speed: ${u}, bearing: ${v} degrees`:`Wind speed: ${u}`}"
      >
        <circle
          cx="${n}"
          cy="${s}"
          r="${i}"
          stroke="${A}"
          stroke-width="${H}"
          fill="none"
        />
        ${_?R1` <g transform="rotate(${v} ${n} ${s})">
              <polygon
                points="${n-P},${b} ${n+P},${b} ${n},${k}"
                fill="${A}"
              />
            </g>`:F}
        <text x="${n}" y="${s}" dy="0.1em">${u}</text>
      </svg>
    `}computeLineColor(){let e=c4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};k5.styles=e2`
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
  `,q([t1({attribute:!1})],k5.prototype,"hass",2),q([t1({attribute:!1})],k5.prototype,"weatherEntity",2),q([t1({attribute:!1})],k5.prototype,"forecast",2),q([t1({attribute:!1})],k5.prototype,"size",2),q([t1({attribute:!1})],k5.prototype,"radius",2),q([t1({attribute:!1})],k5.prototype,"type",2),k5=q([H2("wsfc-wind-indicator")],k5);var r3=class extends g1{createRenderRoot(){return this}render(){return this.forecast?w`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??F}
      </div>
    `:F}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?w`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let C=Math.round(e),i=e8(e);return w`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${z2({color:`var(${i})`})}
          >${String(C)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return w`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;_5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};q([t1({attribute:!1})],r3.prototype,"hass",2),q([t1({attribute:!1})],r3.prototype,"weatherEntity",2),q([t1({attribute:!1})],r3.prototype,"forecast",2),q([t1({attribute:!1})],r3.prototype,"config",2),r3=q([H2("wsfc-forecast-info")],r3);var T5=class extends g1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new p7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let i=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=i?.dataset.index?Number(i.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let C=this.forecast[this._selectedForecastIndex];if(!C)return;let i={selectedForecast:C,action:e.detail.action};C2(this,"action",i)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return F;let e=[],C=c7(i5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),i;return this.forecast.forEach((H,V)=>{if(H.datetime){if(this.forecastType==="hourly"){let n=$0(this.hass,H.datetime);i!==n&&(i=n,e.push(w`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${n}</div>
            </div>`))}e.push(w`
        <div class="wsfc-forecast-slot" data-index=${V}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${H}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
          <wsfc-forecast-details
            .hass=${this.hass}
            .forecast=${H}
            .maxPrecipitation=${C}
            .config=${this.config}
          ></wsfc-forecast-details>
          <wsfc-forecast-info
            .hass=${this.hass}
            .weatherEntity=${this.weatherEntity}
            .forecast=${H}
            .config=${this.config}
          ></wsfc-forecast-info>
        </div>
      `)}}),w`
      <div
        class="${w3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${U5({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};q([t1({attribute:!1})],T5.prototype,"hass",2),q([t1({attribute:!1})],T5.prototype,"weatherEntity",2),q([t1({attribute:!1})],T5.prototype,"forecast",2),q([t1({attribute:!1})],T5.prototype,"forecastType",2),q([t1({attribute:!1})],T5.prototype,"isTwiceDailyEntity",2),q([t1({attribute:!1})],T5.prototype,"config",2),q([t1({attribute:!1})],T5.prototype,"isScrollable",2),T5=q([H2("wsfc-forecast-simple")],T5);var C3=class extends g1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=QH.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return F;let e=this.getClasses(),C=this.getWeatherStateIcon();return w`
      <div class="${e}" data-condition="${this.state}">${C}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:C,state:i}=this.getCustomWeatherIconPath();return w` <img src="${C}" alt="${i}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?w`
        <div
          style="background-size: cover;${z2({"background-image":e})}"
        ></div>
      `:QH.has(this.state)?w`${Tu(this.state,this.isNightTime)}`:F}};q([t1({attribute:!1})],C3.prototype,"config",2),q([t1({attribute:!1})],C3.prototype,"classes",2),q([t1({attribute:!1})],C3.prototype,"isNightTime",2),q([t1({attribute:!1})],C3.prototype,"state",2),C3=q([H2("wsfc-weather-condition-icon-provider")],C3);var QH=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),wu=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),bu=new Set(["hail","rainy","pouring"]),yu=new Set(["windy","windy-variant"]),Ou=new Set(["snowy","snowy-rainy"]),ku=new Set(["lightning","lightning-rainy"]),Tu=(r,t)=>R1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${r==="sunny"&&t?R1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:r==="sunny"?R1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${r==="clear-night"?R1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${r==="partlycloudy"&&t?R1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:r==="partlycloudy"?R1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${wu.has(r)?R1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${bu.has(r)?R1`
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
  ${r==="pouring"?R1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${yu.has(r)?R1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Ou.has(r)?R1`
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
  ${ku.has(r)?R1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var i3=class extends g1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(Pu(e))||d5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return F;let e=this.attributeConfigs.map(C=>this._renderAttribute(C)).filter(C=>C!==F);return e.length===0?F:w`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return F;let{name:C,entity:i,label:H,icon:V}=e,n;if(i?n=C6(this.hass,this.weatherEntity,this.config,C,i):C&&(n=d7(this.hass,this.weatherEntity,this.config,C)),!n)return F;let s=i?this.hass.states[i]||this.weatherEntity:this.weatherEntity,c=i?this.hass.states[i]:void 0,u=c&&!C?w`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${c}
              .icon=${V}
            ></ha-state-icon>
          `:w`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${s}
              .attribute=${C}
              .icon=${Ii(C,V,c)}
            ></ha-attribute-icon>
          `;return w`
      <div class="wsfc-current-attribute">
        ${u}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(C,H,c)}
        </span>
        <span class="wsfc-current-attribute-value">${n}</span>
      </div>
    `}resolveLabel(e,C,i){return C||(e&&T2.includes(e)?this.localize(e):i?.attributes?.friendly_name??(e?d5(e).replace(/_/g," "):""))}};q([t1({attribute:!1})],i3.prototype,"hass",2),q([t1({attribute:!1})],i3.prototype,"weatherEntity",2),q([t1({attribute:!1})],i3.prototype,"attributeConfigs",2),q([t1({attribute:!1})],i3.prototype,"config",2),i3=q([H2("wsfc-current-weather-attributes")],i3);var Pu=D0(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var he={...S5,precipitation:"mdi:weather-rainy"},F2=class extends g1{constructor(){super(...arguments);this.onAction=e=>{let C=this.config.current?.temperature_entity,i=C?{...this.config,entity:C}:this.config;M4(this,this.hass,i,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return F;let{state:e}=this.weatherEntity,C=this.getTemperature(),i=this.getSecondaryWeatherAttribute(),H=this.isNightTime(),V=this.getConfiguredAttributes(),n=this.config.name||this.weatherEntity.attributes.friendly_name;return w`
      <div class="wsfc-current-weather">
        <div class="wsfc-current-conditions">
          <wsfc-weather-condition-icon-provider
            .config=${this.config}
            .state=${e}
            .isNightTime=${H}
            .classes=${"wsfc-current-icon"}
          ></wsfc-weather-condition-icon-provider>
          <div class="wsfc-name-state">
            <span class="wsfc-current-state">
              ${this.hass.formatEntityState(this.weatherEntity)}
            </span>
            ${n?w`<span class="wsfc-name wsfc-secondary">${n}</span>`:F}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${C!==null?w`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${U5({stopPropagation:!0,hasHold:l0(this.config.hold_action),hasDoubleClick:l0(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${C}
                  </div>
                `:F}
            ${i?w`
                  <div class="wsfc-current-secondary-info">
                    ${i.stateObj?w`
                          <ha-state-icon
                            class="wsfc-current-secondary-icon wsfc-secondary"
                            .hass=${this.hass}
                            .stateObj=${i.stateObj}
                            .icon=${i.icon}
                          ></ha-state-icon>
                        `:i.icon?w`
                            <ha-attribute-icon
                              class="wsfc-current-secondary-icon wsfc-secondary"
                              .hass=${this.hass}
                              .icon=${i.icon}
                            ></ha-attribute-icon>
                          `:F}
                    <span class="wsfc-current-secondary-value wsfc-secondary"
                      >${i.value}</span
                    >
                  </div>
                `:F}
          </div>
        </div>
        ${V.length>0?w`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${V}
            ></wsfc-current-weather-attributes>`:F}
      </div>
    `}isNightTime(){let e=c0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?T2.map(C=>({name:C})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(C=>C!=null).map(C=>typeof C=="string"?{name:C}:C).filter(C=>!!C.name||!!C.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let C=this.hass.states[e];if(C)return j5(this.hass,this.weatherEntity,C.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?j5(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,C=this.config.current?.secondary_info_attribute;if(C){let s=typeof C=="string"?{name:C}:C,{name:c,entity:u,icon:A}=s;if(u){let v=C6(this.hass,this.weatherEntity,this.config,c,u);if(v!=null){let _=this.hass.states[u];return c?{icon:A??_?.attributes?.icon??he[c],value:v}:{stateObj:_,icon:A,value:v}}}else if(c&&c in this.weatherEntity.attributes){let _=he[c],b=d7(this.hass,this.weatherEntity,this.config,c);if(b!=null)return{icon:A??_,value:b}}}let i=this.getTemperatureExtrema();if(i)return{value:`${i.high} / ${i.low}`};let H,V;if(e&&e.length&&e[0]?.precipitation!=null)H=e[0].precipitation,V="precipitation";else if("humidity"in this.weatherEntity.attributes)H=this.weatherEntity.attributes.humidity,V="humidity";else return null;return{icon:he[V],value:this.hass.formatEntityAttributeValue(this.weatherEntity,V,H)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=L7(new Date().toISOString()),C=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,i=this.dailyForecast[0]?.temperature??-1/0;for(let H of this.hourlyForecast)if(L7(H.datetime)===e){let V=H.templow??H.temperature,n=H.temperature;V!=null&&V<C&&(C=V),n!=null&&n>i&&(i=n)}return C===1/0||i===-1/0?null:{high:j5(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision),low:j5(this.hass,this.weatherEntity,C,this.config.current?.temperature_precision)}}};q([t1({attribute:!1})],F2.prototype,"hass",2),q([t1({attribute:!1})],F2.prototype,"weatherEntity",2),q([t1({attribute:!1})],F2.prototype,"hourlyForecast",2),q([t1({attribute:!1})],F2.prototype,"dailyForecast",2),q([t1({attribute:!1})],F2.prototype,"config",2),F2=q([H2("wsfc-current-weather")],F2);var KH=`:host {
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
`;var XH="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var JH=e2`
  ${n0(KH)}

  :host {
    --moon-texture: url("${n0(XH)}");
  }
`;var Q4=10,Eu=3,C8=14,Bu=75,Ru=75,Du=4,$u=3,tV=2,Iu=[1.45,.7],eV=90,zu=50,Nu=.15,P5=class extends g1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let C=e[0],i=Math.round(C?.contentRect.height||0);this._containerHeight!==i&&(this._containerHeight=i,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let C=e.get("hass"),i=this.hass?.themes?.darkMode;C?.themes?.darkMode!==i&&(this._isDark=i??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?w`
      ${e.map(C=>{switch(C){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return F}})}
    `:F}computeParticles(){let e=[];return this.getActiveEffects().forEach(i=>{switch(i){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),C=[],i=Math.round(e/Q4*Bu),H=Math.max(5,i),V=115/H;for(let n=0;n<H;n++){let s=-15+n*V+D1(0,V*.5),c=Math.random(),u=c*5+2,A=4.5/(c+.5)+D1(0,.8),v=D1(0,5,!0).toFixed(1),_=c*.7+.5,b=c<.3?1.5-c*3:c>.9?.5:0,y=u*.9,k=(10+c*25).toFixed(0),P=(2+Math.random()*2).toFixed(2);C.push({type:"snow",x:`${s.toFixed(1)}%`,delay:v,duration:A.toFixed(1),size:u.toFixed(0),opacity:_.toFixed(1),blur:b.toFixed(1),shadowSpread:y.toFixed(1),driftAmplitude:k,driftFrequency:P})}return C}computeRainParticles(){let e=this.computeIntensity(),C=[],i=Math.round(e/Q4*Ru),H=Math.max(10,i),V=100/H;for(let n=0;n<H;n++){let s=n*V+D1(0,V*.8),c=D1(.2,.5,!0),u=D1(.4,.7,!0),A=D1(.85,1,!0),v=this._containerHeight*A;C.push({type:"rain",x:`${s.toFixed(1)}%`,delay:c.toFixed(2),duration:u.toFixed(2),landingPosY:v.toFixed(0)})}return C}computeStarParticles(){let e=[];for(let V=0;V<30;V++){let n=V%6,s=Math.floor(V/6),c=100/6,u=30/5,A=D1(n*c+c*.15,(n+1)*c-c*.15),v=D1(s*u+u*.15,(s+1)*u-u*.15),_=D1(1,3),b=D1(.3,1,!0),y=D1(0,5,!0);e.push({type:"star",x:`${A.toFixed(0)}`,y:`${v.toFixed(0)}`,size:`${_}`,opacity:b.toFixed(2),delay:y.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,C=this.config.show_condition_effects;if(!C||!e)return[];let i=new Set,H=c=>C===!0?!0:Array.isArray(C)?C.includes(c):!1;(e.includes("rainy")||e==="pouring")&&H("rain")&&i.add("rain"),e.includes("snowy")&&H("snow")&&i.add("snow"),e.includes("lightning")&&H("lightning")&&i.add("lightning");let V=e==="sunny"||e==="clear-night",n=e==="cloudy",s=e==="partlycloudy";return(V||s||n)&&H("sky")&&i.add("sky"),(V||s)&&(this.isNightTime()?H("moon")&&i.add("moon"):H("sun")&&i.add("sun")),(n||s)&&H("cloud")&&i.add("cloud"),Array.from(i)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?c0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",C=this.weatherEntity?.state==="cloudy";return w`<div class="${C?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(C=>C.type==="sunray");return w`
      <div class="sun">
        <div class="ray-box">
          ${e.map(C=>w`<div
                class="sun-ray"
                style="${z2({transform:`translate(-50%, 0) rotate(${C.angle}deg)`,height:`${C.height}px`,width:`${C.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${D1(0,360)}`,height:`${D1(100,200)}`,width:`${D1(5,15)}`}))}getStableCloudParticles(){let C=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(C!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=C),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",C=this.isNightTime(),i=e?Du:$u,H=100/i,V=[];for(let n=0;n<i;n++){let s=n%tV,c=s===0,u=n*H+D1(0,H*.5)-H*.25,A=e?c?D1(140,200):D1(215,285):c?D1(110,165):D1(180,240),v=A*D1(.38,.5,!0),_=e?c?D1(-26,-12):D1(-16,-2):c?D1(-10,4):D1(-4,12),b=e?c?D1(.36,.5,!0):D1(.5,.64,!0):c?D1(.68,.8,!0):D1(.82,.92,!0);C&&(b*=.7),V.push({type:"cloud",variant:e?"grey":"white",night:C,layer:s,shape:D1(1,5),flip:D1(0,1)===1,x:u.toFixed(1),y:_.toFixed(0),width:A.toFixed(0),height:v.toFixed(0),opacity:b.toFixed(2)})}return V}computeCloudDrift(){let e=this.currentForecast,C=e&&c4(this.hass,this.weatherEntity,e)||0,i=Math.min(C,C8)/C8,H=e?r6(e):void 0,V=H!==void 0?-Math.sin(H*Math.PI/180):0,n=Math.max(Nu,i*Math.abs(V));return{duration:eV-n*(eV-zu),driftRight:V>=0}}renderCloudFilter(){return w`
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
    `}renderClouds(){let e=this._particles.filter(V=>V.type==="cloud");if(!e.length)return F;let{duration:C,driftRight:i}=this.computeCloudDrift(),H=V=>{let n=["cloud",`cloud-shape-${V.shape}`,V.variant==="grey"?"grey":"",V.night?"night":""].filter(Boolean).join(" ");return w`<div
        class="${n}"
        style="${z2({left:`${V.x}%`,top:`${V.y}px`,width:`${V.width}px`,height:`${V.height}px`,opacity:V.opacity,transform:V.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return w`
      ${this.renderCloudFilter()}
      ${Array.from({length:tV},(V,n)=>{let s=e.filter(u=>u.layer===n);if(!s.length)return F;let c=Math.round(C*(Iu[n]??1)/5)*5;return w`<div
          class="cloud-track ${i?"drift-right":""}"
          style="${z2({"--cloud-drift-duration":`${c}s`})}"
        >
          <div class="cloud-set">${s.map(H)}</div>
          <div class="cloud-set cloud-set-second">
            ${s.map(H)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>w`
        <div
          class="snowflake-path"
          style="${z2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>w`
        <div
          class="raindrop-path"
          style="${z2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return w` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:Si(this.hass,new Date);return w`
      ${this._particles.filter(C=>C.type==="star").map(C=>w`
          <div
            class="star"
            style="${z2({left:`${C.x}%`,top:`${C.y}%`,width:`${C.size}px`,height:`${C.size}px`,opacity:C.opacity,animationDelay:`${C.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let C=e?J8(e.fraction,e.litRight):J8(1,!0);return w`
      <div class="moon-glow">
        <svg
          viewBox="0 0 100 100"
          width="100"
          height="100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d=${C}></path>
        </svg>
      </div>
    `}renderMoonPhase(e){return e?w`
      <svg
        class="moon-phase"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d=${Zi(e.fraction,e.litRight)}></path>
      </svg>
    `:F}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let C=i5(this.hass,this.weatherEntity,"precipitation"),i=c7(C,"hourly");if(i>0){let H=e/i*Q4;return Math.min(Q4,Math.ceil(H))}}return this.weatherEntity?.state==="pouring"?Q4:Eu}computeFallingAngle(e=!1){let C=this.currentForecast;if(C?.wind_bearing===void 0||C?.wind_speed===void 0)return 0;let i=c4(this.hass,this.weatherEntity,C)||0,H=e?15:35,V=Math.min(i,C8)/C8,n=C.wind_bearing*Math.PI/180,s=Math.sin(n),u=Math.pow(V,e?.8:.5);return s*u*H}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};P5.styles=JH,q([t1({attribute:!1})],P5.prototype,"hass",2),q([t1({attribute:!1})],P5.prototype,"weatherEntity",2),q([t1({attribute:!1})],P5.prototype,"currentForecast",2),q([t1({attribute:!1})],P5.prototype,"config",2),q([I2()],P5.prototype,"_isDark",2),q([I2()],P5.prototype,"_containerHeight",2),P5=q([H2("wsfc-animation-provider")],P5);var rV={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},Uu=1e3,S2=class extends g1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let C=e.detail.action;C==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||C==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||C==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):M4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{M4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let C=Object.keys(e?.states??{}).filter(H=>H.startsWith("weather.")),i=C.find(H=>H==="weather.home")||C[0]||"";return{...rV,entity:i}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>Z3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>Z3))throw new Error(`temperature_precision must be 0 or greater and at most ${Z3}`);let C={...e};e.temperature_entity&&(e.current?.temperature_entity||(C.current={...e.current,temperature_entity:e.temperature_entity}),delete C.temperature_entity),this.config=v3({},rV,C),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:C,minColumns:i}=this.computeRowSizing();return{columns:12,rows:e,min_rows:C,min_columns:i}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,C=this.config?.show_forecast!==!1,i=this.config?.forecast?.mode==="chart",H=1,V=1;return e&&(H+=2,V+=2,this.config?.current?.show_attributes&&(H+=1)),C&&(i?(H+=3,V+=3):(H+=2,V+=2)),{rows:H,minRows:V,minColumns:e&&C?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return mi(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return F;let e=this.config.entity,C=this.hass.states[e];if(!C)return w`<hui-warning>
        ${vi(this.hass,e)}
      </hui-warning>`;let i=p5(C)==="twice_daily",H=this.config.forecast?.mode==="chart",V=this.getCurrentForecast();return w`
      <ha-card>
        ${this.config.show_condition_effects?w`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${C}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData?.[0]}
            ></wsfc-animation-provider>`:F}
        <div class="wsfc-container">
          ${this.config.show_current?w`<div
                class="wsfc-current-weather-container"
                .actionHandler=${U5({hasHold:l0(this.config.hold_action),hasDoubleClick:l0(this.config.double_tap_action)})}
                @action=${this.onCardAction}
              >
                <wsfc-current-weather
                  .hass=${this.hass}
                  .weatherEntity=${C}
                  .config=${this.config}
                  .hourlyForecast=${this._hourlyForecastData}
                  .dailyForecast=${this._dailyForecastData}
                ></wsfc-current-weather>
              </div>`:F}
          ${this.config.show_forecast===!1?F:w`<div class="wsfc-forecast-container">
                ${H?w`<wsfc-forecast-chart
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${C}
                      .forecast=${V}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${i}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:w`<wsfc-forecast-simple
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${C}
                      .forecast=${V}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${i}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-simple>`}
              </div>`}
        </div>
      </ha-card>
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let C of e)C.contentRect.width>0&&this.layoutForecastItems(C.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),C=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,i=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?C:i}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:C}=e;if(!C)return;let i=this._hourlyForecastData?.length,H=this._dailyForecastData?.length,V=Lt(C,this._hourlyForecastEvent,"hourly"),n=Lt(C,this._dailyForecastEvent,p5(e));if(!V&&!n)return;this._dailyForecastData=n?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let s=this.config?.forecast?.hourly_group_size||0;s>1&&V?.forecast?this._hourlyForecastData=$i(V.forecast,s):this._hourlyForecastData=V?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let c=this.getCurrentForecast();if(!c||c.length===0){let v=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,_=p5(e),b=_!==void 0,y=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(v||this._currentForecastType==="hourly"&&!l4(e,"hourly")||y&&!b)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(_5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=_||"daily"):y&&this._hourlyForecastData&&(_5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let u=this.getCurrentForecast().length,A=(this._currentForecastType==="hourly"?i:H)??0;u!==A&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let C=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",i=C,H=i?this._hourlyForecastData:this._dailyForecastData,V=this.hass?.states[this.config.entity],n=p5(V)||"daily";if(!H||H.length===0){_5.debug(`Cannot toggle to ${i?"hourly":n} forecast - no data available`);return}this._currentForecastType=C?"hourly":n,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(i)this.scrollToForecastItem(e);else{let s=this._dailyForecastData?.[0];s&&this.scrollToForecastItem(s,"instant")}})}scrollToForecastItem(e,C="smooth"){if(!this._forecastContainer)return;let i=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!i)return;let H=L7(e.datetime),V=this.getCurrentForecast(),n=V.findIndex(A=>L7(A.datetime)===H),s=n!==-1?n:V.length-1,c=this._currentItemWidth||0,u=s*c;i.scrollTo({left:u,behavior:C})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,C=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(C,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},Uu)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,C){if(e)try{let i=await e;if(!i)return;await i()}catch(i){if(Vt(i))return;_5.warn(`Error unsubscribing from ${C} forecast:`,i)}}createForecastSubscription(e,C,i){return Promise.resolve(Ei(this.hass,this.config.entity,e,C)).catch(H=>{if(ki(H)){setTimeout(i,2e3);return}Vt(H)||_5.warn(`Error subscribing to ${e} forecast:`,H)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let C=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!Ri(this.hass.states[this.config.entity])){_5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let i=this.hass.states[this.config.entity],H=this.config.forecast_types??"both",V=H!=="hourly",n=H!=="daily",s=p5(i);s==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!V&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!n&&this._currentForecastType==="hourly"&&(this._currentForecastType=s||"daily"),s&&V&&(this._dailySubscription=this.createForecastSubscription(s,c=>{this.shouldHandleForecastEvent(C)&&(this._dailyForecastEvent=c,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),n&&l4(i,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",c=>{this.shouldHandleForecastEvent(C)&&(this._hourlyForecastEvent=c,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let C=this.getCurrentForecast();if(!C.length)return;let i=Math.max(1,Math.floor(e/this._minForecastItemWidth)),H=Math.floor(e/i),V=C.length,n=V*H,s=e-n,c=s>0?s/(V-1):0;this._currentItemWidth=H+c,this._isScrollable=C.length>i,this._haCard.style.setProperty("--forecast-item-gap",`${c}px`),this._haCard.style.setProperty("--forecast-item-width",`${H}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let C=e.get("hass"),i=this.hass;if(!C||!i)return!1;let H=C.states[this.config.entity],V=i.states[this.config.entity];return!H||!V?!1:Object.values(nt).some(n=>H.attributes[n]!==V.attributes[n])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let C=e.get("hass"),i=this.hass;return C?.connected===!1&&i?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let C=e.get("hass"),i=this.hass;if(!C||!i)return!1;let H=C.states[this.config.entity],V=i.states[this.config.entity];return!H||!V?!1:H.attributes.supported_features!==V.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let C=e.get("hass"),i=this.hass;if(!i)return!1;let H=C?.states[this.config.entity],V=i.states[this.config.entity];return!!H!=!!V}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let C=e.get("hass"),i=this.hass;return!C||!i?!1:bi(this.config).some(H=>C.states[H]!==i.states[H])}};S2.styles=di,q([t1({attribute:!1})],S2.prototype,"hass",2),q([I2()],S2.prototype,"config",2),q([I2()],S2.prototype,"_dailyForecastEvent",2),q([I2()],S2.prototype,"_hourlyForecastEvent",2),q([I2()],S2.prototype,"_currentItemWidth",2),q([I2()],S2.prototype,"_currentForecastType",2),q([I2()],S2.prototype,"_isScrollable",2),q([s4("ha-card")],S2.prototype,"_haCard",2),q([s4(".wsfc-forecast-container")],S2.prototype,"_forecastContainer",2);var CV="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var iV="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var ju={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},g0=class extends g1{constructor(){super(...arguments);this._schema=D0((e,C,i)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(i),...this._attributeEntitiesSchema(C),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:t6.map(C=>({value:C,label:d5(C)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:T2.map(C=>({value:C,label:e(`ui.card.weather.attributes.${C}`)||d5(C).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:T2.map(C=>({value:C,label:e(`ui.card.weather.attributes.${C}`)||d5(C).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:e6.map(C=>({value:C,label:C==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${C}`)||d5(C).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let C=[],i=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(C.push("double_tap_action"),i.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):C.push("hold_action","double_tap_action"),i.push({name:"",type:"optional_actions",flatten:!0,schema:C.map(H=>({name:`forecast_action.${H}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:i},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(H=>({name:H,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(i=>{let H=ju[i];return[{name:`current.attribute_entity_${i}`,optional:!0,selector:H?{entity:{domain:"sensor",device_class:H}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${i}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${i}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:Z3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:Z3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=$3(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let C=$3(this._config.current?.show_attributes);C.splice(e,1),this._commitCustomAttributes(C)};this._customAttributeChanged=(e,C)=>{C.stopPropagation();let i=$3(this._config.current?.show_attributes);i[e]=C.detail.value,this._commitCustomAttributes(i)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let i=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${i}`)||d5(i).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let i=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${i}`)||d5(i).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let i=e.name.replace("current.attribute_entity_",""),H=this.localize(`ui.card.weather.attributes.${i}`)||d5(i).replace(/_/g," "),V=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${H} ${V}`}let C=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(C){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${C}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let C;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let i=this.hass.states[this._config.entity];i&&(C=this.hass.formatEntityAttributeName(i,e.replace("ui.card.weather.attributes.","")))}return C||(C=this.hass.localize(e)),C}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return F;let e=i8(this._config),C=this._getSelectedAttributes(e),i=this._schema(this.localize.bind(this),C,e["forecast.mode"]);return w`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${i}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let e=$3(this._config.current?.show_attributes);return w`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${e.map((C,i)=>this._renderCustomAttributeRow(C,i))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${iV}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,C){return w`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Gu}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${i=>this._customAttributeChanged(C,i)}
        ></ha-form>
        <ha-icon-button
          .path=${CV}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(C)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let C={...this._config,current:{...this._config.current,show_attributes:Yu(this._config.current?.show_attributes,e)}};C2(this,"config-changed",{config:C})}_getSelectedAttributes(e){let C=e["current.show_attributes"];return C?Array.isArray(C)?C.map(i=>typeof i=="string"?i:i.name):[]:[]}_valueChanged(e){e.stopPropagation();let C=e.detail.value;C.forecast_mode==="show_both"?(C.show_current=!0,C.show_forecast=!0):C.forecast_mode==="show_current"?(C.show_current=!0,C.show_forecast=!1):(C.show_current=!1,C.show_forecast=!0),delete C.forecast_mode;let i=Qu(C);if(delete i.temperature_entity,i?.forecast?.extra_attribute==="none"&&delete i.forecast.extra_attribute,Array.isArray(i.show_condition_effects)&&t6.every(V=>i.show_condition_effects.includes(V))&&(i.show_condition_effects=!0),i?.current){let H={},V={},n={};for(let s of Object.keys(i.current))if(s.startsWith("attribute_entity_")){let c=s.replace("attribute_entity_",""),u=i.current[s];u&&(H[c]=u),delete i.current[s]}else if(s.startsWith("attribute_label_")){let c=s.replace("attribute_label_",""),u=i.current[s];u&&(V[c]=u),delete i.current[s]}else if(s.startsWith("attribute_icon_")){let c=s.replace("attribute_icon_",""),u=i.current[s];u&&(n[c]=u),delete i.current[s]}if(Array.isArray(i.current.show_attributes)){let s=$3(this._config?.current?.show_attributes);i.current.show_attributes=oV(i.current.show_attributes,{entity:H,label:V,icon:n},s)}}C2(this,"config-changed",{config:i})}};g0.styles=e2`
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
  `,q([t1({attribute:!1})],g0.prototype,"hass",2),q([I2()],g0.prototype,"_config",2),g0=q([H2("wsfc-flex-core-editor")],g0);var I3=r=>typeof r=="string"&&T2.includes(r),$3=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")I3(e)||t.push({name:e});else if(typeof e=="object"){let C=e;I3(C.name)||t.push(C)}}return t},oV=(r,t,e)=>{let C=T2.every(V=>r.includes(V)),i=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!i&&C?!0:[...r.map(V=>{let n=t.entity[V],s=t.label[V],c=t.icon[V];return n||s||c?{name:V,...n?{entity:n}:{},...s?{label:s}:{},...c?{icon:c}:{}}:V}),...e]},Gu=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],qu=r=>{if(r===!0)return[...T2];if(typeof r=="string")return I3(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")I3(e)&&t.push(e);else if(typeof e=="object"){let C=e;I3(C.name)&&t.push(C)}}return t},Yu=(r,t)=>{let e=qu(r),C=[],i={entity:{},label:{},icon:{}};for(let H of e)typeof H=="string"?C.push(H):H.name&&(C.push(H.name),H.entity&&(i.entity[H.name]=H.entity),H.label&&(i.label[H.name]=H.label),H.icon&&(i.icon[H.name]=H.icon));return oV(C,i,t)},Qu=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let C=e.split(".");if(C.length<2)continue;let[i,H]=C;!i||!H||((!t[i]||typeof t[i]!="object")&&(t[i]={}),t[i][H]=r[e],delete t[e])}return t},i8=r=>{let t=Ku(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...t6]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...T2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let C=[];for(let i of e)if(typeof i=="string")I3(i)&&C.push(i);else if(typeof i=="object"&&i!==null){let H=i;I3(H.name)&&(C.push(H.name),H.entity&&(t[`current.attribute_entity_${H.name}`]=H.entity),H.label&&(t[`current.attribute_label_${H.name}`]=H.label),H.icon&&(t[`current.attribute_icon_${H.name}`]=H.icon))}t["current.show_attributes"]=C}return t},Ku=r=>{let t={};for(let e in r){let C=r[e];if(e==="forecast"&&C&&typeof C=="object"&&!Array.isArray(C)){for(let i in C)t[`forecast.${i}`]=C[i];continue}if(e==="current"&&C&&typeof C=="object"&&!Array.isArray(C)){for(let i in C)t[`current.${i}`]=C[i];continue}if(e==="forecast_action"&&C&&typeof C=="object"&&!Array.isArray(C)){for(let i in C)t[`forecast_action.${i}`]=C[i];continue}t[e]=C}return t};var o3=b9(Q9(),1);(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(l=>l.id),C=Object.fromEntries(t.map(l=>[l.id,l.label])),i={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},H=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],V=(l,m,d)=>Math.min(d,Math.max(m,l)),n=l=>typeof l=="number"&&isFinite(l),s={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function c(l){return s[l]||"mdi:weather-cloudy"}let u=["temps","icons","extra"],A={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function v(l){let m=Array.isArray(l.forecast_row_order)?l.forecast_row_order.filter(d=>u.includes(d)):null;(!m||!m.length)&&(m=(l.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let d of u)m.includes(d)||m.push(d);return m}let _={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},b=Object.keys(_);function y(l){let m=l&&l.forecast_extra,d;Array.isArray(m)?d=m:typeof m=="string"&&m&&m!=="none"?d=[m]:d=[];let f=new Set(d.filter(x=>_[x]));return b.filter(x=>f.has(x))}let k=["temps","icons",...b],P=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(b.map(l=>[l,_[l].label]))),$=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function I(l){l=l||{};let m={},d;if(Array.isArray(l.forecast_metric_order)&&l.forecast_metric_order.length){d=l.forecast_metric_order.filter(x=>k.includes(x));let f=l.forecast_metric_pos||{};for(let x of k)m[x]=f[x]||"hidden"}else{m.temps=l.forecast_temps||"hidden",m.icons=l.forecast_icons||"hidden";let f=y(l),x=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let Z of b)m[Z]=f.includes(Z)?x:"hidden";let S=v(l);d=[];for(let Z of S)Z==="extra"?d.push(...b):d.push(Z)}for(let f of k)d.includes(f)||d.push(f);for(let f of k)m[f]||(m[f]="hidden");return d.map(f=>({key:f,pos:m[f]}))}function X(l,m){if(!l||!m)return null;let d=_[l],f=m[l];return l==="wind_direction"&&(f=m.wind_direction!=null?m.wind_direction:m.wind_bearing),f==null||f===""?null:d&&d.arrow?"":(typeof f=="number"&&(f=Math.round(f)),f+(d&&d.unit||""))}function Y(l,m){if(l==="wind_direction")return(_.wind_bearing||{}).icon;let d=_[l];return d?d.icon:""}let c1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function L1(l,m){if(m){let d=c1[l];if(d&&i[d]&&i[d].icon)return i[d].icon}return Y(l)}function r1(l){return l==="below"||l==null?0:l==="above"?100:l==="mid"?50:V(Number(l)||0,0,100)}function o1(l,m){m=m||0;let d="  ".repeat(m),f=x=>{if(x==null)return"null";if(typeof x=="boolean"||typeof x=="number")return String(x);let S=String(x);return S===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(S)||/^\s|\s$/.test(S)||/^(true|false|null|yes|no|~)$/i.test(S)||/^[\d.+-]/.test(S)?'"'+S.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':S};if(Array.isArray(l))return l.length?l.map(x=>{if(x&&typeof x=="object"){let S=o1(x,m+1).replace(/^\s+/,"");return d+"- "+S}return d+"- "+f(x)}).join(`
`):d+"[]";if(l&&typeof l=="object"){let x=Object.keys(l);return x.length?x.map(S=>{let Z=l[S];return Z&&typeof Z=="object"&&(Array.isArray(Z)?Z.length:Object.keys(Z).length)?d+S+`:
`+o1(Z,m+1):Z&&typeof Z=="object"?d+S+": "+(Array.isArray(Z)?"[]":"{}"):d+S+": "+f(Z)}).join(`
`):d+"{}"}return d+f(l)}function h1(l){try{return typeof S3=="function"&&S3(l)||l.language||navigator.language||"en"}catch{return"en"}}function I1(l){let m=l&&l.config||{};return{lat:m.latitude,lng:m.longitude}}function b1(l,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(h1(l),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function n2(l,m){let d=m instanceof Date?m:new Date;try{if(typeof c0=="function"){let S=c0(l,d);if(S&&S.sunrise&&S.sunset)return{sunrise:new Date(S.sunrise),sunset:new Date(S.sunset)}}}catch{}let{lat:f,lng:x}=I1(l);if(n(f)&&n(x)&&typeof o3=="object"&&o3.getTimes)try{let S=o3.getTimes(d,f,x);return{sunrise:S.sunrise,sunset:S.sunset}}catch{}return{sunrise:null,sunset:null}}function j1(l,m){let{lat:d,lng:f}=I1(l);if(!n(d)||!n(f)||typeof o3!="object"||!o3.getPosition)return null;try{return o3.getPosition(m,d,f).altitude}catch{return null}}function y1(l){if(l==null)return .5;let m=l*180/Math.PI;return m>=0?V(.42+.58*Math.sin(l),.42,1):m>-12?V(.42*(m+12)/12,0,.42):0}let K=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function G1(l){l=V(l,0,1);let m=K[0],d=K[K.length-1];for(let Z=0;Z<K.length-1;Z++)if(l>=K[Z].at&&l<=K[Z+1].at){m=K[Z],d=K[Z+1];break}let f=d.at-m.at||1,x=(l-m.at)/f,S=Z=>Math.round(m.c[Z]+(d.c[Z]-m.c[Z])*x);return[S(0),S(1),S(2)]}function H1(l){if(typeof l!="string")return null;let m=l.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(d=>d+d).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let W=l=>`rgb(${Math.round(l[0])}, ${Math.round(l[1])}, ${Math.round(l[2])})`,J=(l,m,d)=>l.map((f,x)=>f+(m[x]-f)*d);function V1(l,m){l=V(l,0,1);let d,f=m&&H1(m.day_color),x=m&&H1(m.night_color);f||x?d=J(x||[11,16,38],f||[206,227,255],l):d=G1(l);let S=m&&n(m.cloud)?V(m.cloud,0,1):0;if(S>0){let Z=.5*(d[0]+d[1]+d[2]),T=[Z*.75+40,Z*.75+42,Z*.78+48];d=J(d,T,S*.6)}return W(d)}function p1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function a1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function n1(l){return{font_size:l,font_weight:"400",color:""}}function _1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function O1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function M2(l,m){if(l==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let d=f=>`0 0 2px ${f}, 0 0 4px ${f}, 1px 1px 2px ${f}`;return l==="outline"?d("rgba(0,0,0,0.85)"):l==="auto"?d(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let p2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function Z2(l){let m=l&&l.show_forecast!==!1,d=l&&l.default_forecast||"daily",f=H.map(T=>({key:T,show:!0})),x=p1,S=_1,Z=a1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:l?l.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...O1(),...S(),...x(),...Z()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:f,...S(),...x(),...Z()},hourly:{show:m&&d==="hourly",...S(),...x(),...Z()},daily:{show:m&&d!=="hourly",...S(),...x(),...Z()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...S(),...x(),...Z()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...S(),...x(),...Z()}}}function L2(l){let m=Z2(l),d=l&&l.wfc||{},f={order:Array.isArray(d.order)&&d.order.length?d.order.slice():m.order,card:{...m.card,...d.card||{}},current:{...m.current,...d.current||{}},details:{...m.details,...d.details||{}},hourly:{...m.hourly,...d.hourly||{}},daily:{...m.daily,...d.daily||{}},sun_position:{...m.sun_position,...d.sun_position||{}},sun_arc:{...m.sun_arc,...d.sun_arc||{}},editor_accordion:d.editor_accordion!==!1},x=Array.isArray(d.details&&d.details.items)?d.details.items.slice():m.details.items.slice();x=x.filter(Z=>Z&&i[Z.key]),f.details.items=x.length?x:m.details.items,f.details.columns=V(parseInt(f.details.columns,10)||2,1,4);let S=new Set(f.details.items.map(Z=>Z.key));return Object.keys(i).forEach(Z=>{S.has(Z)||f.details.items.push({key:Z,show:!1})}),["sun_position","sun_arc"].forEach(Z=>{let T=d[Z]||{};T.flush!==void 0&&(T.flush_top===void 0&&(f[Z].flush_top=!!T.flush),T.flush_bottom===void 0&&(f[Z].flush_bottom=!!T.flush),T.flush_edges===void 0&&(f[Z].flush_edges=!!T.flush))}),e.forEach(Z=>{f.order.includes(Z)||f.order.push(Z)}),f.order=f.order.filter(Z=>e.includes(Z)),f}let s1=S2.prototype;if(typeof F2<"u"&&F2&&F2.prototype&&F2.prototype.getSecondaryWeatherAttribute){let l=F2.prototype.getSecondaryWeatherAttribute;F2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:l.call(this)}}let U2=s1.setConfig;s1.setConfig=function(l){let m=L2(l),d=!!(m.hourly.show||m.daily.show),f={...l,show_current:m.current.show||!d,show_forecast:d};m.hourly.show&&m.daily.show&&(f.forecast_types="both"),U2.call(this,f),this.config.show_current=!!m.current.show,this.config.show_forecast=d,m.hourly.show&&m.daily.show&&(this.config.forecast_types="both"),this.__wfcCfgSrc=void 0};let E2=s1.updated;s1.updated=function(l){E2&&E2.call(this,l),this.isConnected&&this._wfcSyncForecastSources()};let V5=s1.disconnectedCallback;s1.disconnectedCallback=function(){V5&&V5.call(this),this._wfcTeardownForecastSources()};let w2=s1.shouldUpdate;s1.shouldUpdate=function(l){if(w2&&w2.call(this,l))return!0;if(l&&l.has("hass")&&this.config){let m=l.get("hass"),d=this.hass;if(m&&d){let f=new Set;for(let x of this._wfcSources())if(x.overrides&&Object.values(x.overrides).forEach(S=>S&&f.add(S)),Y1(x.ref)){let S=a3(this.config,this.hass,m2(x.ref));Object.values(S).forEach(Z=>Z&&f.add(Z))}else x.ref&&f.add(x.ref);for(let x of f)if(m.states[x]!==d.states[x])return!0}}return!1},s1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=L2(this.config)),this.__wfcCfg},s1.computeRowSizing=function(){let l=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",d={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let Z=(l.details.items||[]).filter(T=>T.show).length;return Math.max(1,Math.ceil(Z/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(l.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(l.sun_arc.height)||90)+24)/56))},f=1,x=4;l.order.filter(Z=>l[Z]&&l[Z].show&&d[Z]).forEach(Z=>{f+=d[Z](),(Z==="hourly"||Z==="daily")&&(x=6)});let S=Math.max(1,f-1);return{rows:f,minRows:S,minColumns:x}},s1.render=function(){if(!this.config||!this.hass)return F;let l=this.config.entity,m=this.hass.states[l];if(!m){let B=this.hass,N=B?B.config&&B.config.state!=="NOT_RUNNING"?`${B.localize("ui.card.common.entity_not_found")}: ${l}`:B.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return w`<hui-warning>${N}</hui-warning>`}let d=this._wfc(),f=typeof p5=="function"&&p5(m)==="twice_daily",x=this.config.forecast&&this.config.forecast.mode==="chart",S={stateObj:m,isTwice:f,chart:x},T=d.order.filter(B=>d[B]&&d[B].show).map(B=>{let N=this._wfcRenderSection(B,d,S);if(N===F||N==null)return null;let D=d[B]||{},C1="wsfc-section";D.flush_top&&(C1+=" wsfc-flush-top"),D.flush_bottom&&(C1+=" wsfc-flush-bottom"),D.flush_edges&&(C1+=" wsfc-flush-edges");let d1=this._wfcBackgroundStyle(D);return w`<div class=${C1} data-section-id=${B} style=${d1}>
          ${this._wfcRenderTitle(D)}${N}
        </div>`}).filter(Boolean);return w`
      <ha-card>
        ${this.config.show_condition_effects?w`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${m}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:F}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(d)}
        ${this._wfcCardAppearanceStyle(d)}
        <div class="wsfc-container">${T}</div>
      </ha-card>
    `},s1._wfcDividerStyle=function(l){let m=[];return l.order.forEach(d=>{let f=l[d];if(!f||!f.show||!f.divider_above&&!f.divider_below)return;let x=`.wsfc-section[data-section-id="${d}"]`,S=f.divider_color||"var(--divider-color, #4a4a4a)",Z=`${x}{position:relative;}`,T=B=>["solid","dashed","dotted","double"].includes(B)?B:"solid";if(f.divider_above){let B=Number(f.divider_above_width)||1,N=V(Number(f.divider_above_length)||100,1,100),D=T(f.divider_above_style);Z+=`${x}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${x}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${N}%;border-top:${B}px ${D} ${S};}`}if(f.divider_below){let B=Number(f.divider_below_width)||1,N=V(Number(f.divider_below_length)||100,1,100),D=T(f.divider_below_style);Z+=`${x}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${x}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${N}%;border-bottom:${B}px ${D} ${S};}`}m.push(Z)}),m.length?w`<style>${m.join("")}</style>`:F},s1._wfcCardAppearanceStyle=function(l){let m=l&&l.card||{},d=[];if(m.border_enabled){let x=Math.max(0,Number(m.border_width)||1),S=m.border_color||"var(--primary-color, #2196f3)",Z=T=>T!==!1?`${x}px solid ${S}`:"none";d.push(`border-top:${Z(m.border_top)}`),d.push(`border-bottom:${Z(m.border_bottom)}`),d.push(`border-left:${Z(m.border_left)}`),d.push(`border-right:${Z(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let x=`${Number(m.border_radius)}px`,S=Z=>Z!==!1?x:"0";d.push(`border-radius:${S(m.corner_tl)} ${S(m.corner_tr)} ${S(m.corner_br)} ${S(m.corner_bl)}`)}m.bg_color&&d.push(`background:${m.bg_color}`);let f=[];if(m.glow_enabled){let x=m.glow_color||"var(--primary-color, #2196f3)",S=V(Number(m.glow_intensity)||1,.2,3),Z=(12*S).toFixed(1),T=(-4*S).toFixed(1),B=(4*S).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?f.push(`0 0 ${Z}px ${T}px ${x}`):(m.border_top!==!1&&f.push(`0 -${B}px ${Z}px ${T}px ${x}`),m.border_bottom!==!1&&f.push(`0 ${B}px ${Z}px ${T}px ${x}`),m.border_left!==!1&&f.push(`-${B}px 0 ${Z}px ${T}px ${x}`),m.border_right!==!1&&f.push(`${B}px 0 ${Z}px ${T}px ${x}`))}if(m.shadow_enabled){let x=u2(m.shadow_color||"#000000",V((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";f.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${x}`)}return f.length&&d.push(`box-shadow:${f.join(", ")}`),d.length?w`<style>ha-card{${d.join(";")};}</style>`:F},s1._wfcBackgroundStyle=function(l){if(!l||!l.background_enabled)return"";let m=V(l.background_opacity==null?80:Number(l.background_opacity),0,100),d=(100-m)/100,f=100-m,x=l.background_color||"",S;x?S=u2(x,d)||x:S=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${f}%, transparent)`;let Z=l.flush_edges?"0":"8px";return`background-color:${S};border-radius:${Z};`};function u2(l,m){if(typeof l!="string")return null;let d=l.trim().replace(/^#/,"");if(d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),!/^[0-9a-fA-F]{6}$/.test(d))return null;let f=parseInt(d.slice(0,2),16),x=parseInt(d.slice(2,4),16),S=parseInt(d.slice(4,6),16);return`rgba(${f}, ${x}, ${S}, ${m})`}s1._wfcRenderTitle=function(l){if(!l||!l.title_show)return F;let m=l.title_text||"",d=l.title_icon||"",f=l.title_text_align||"left",x=l.title_icon_align||"left",S=!!m&&f!=="hide",Z=!!d&&x!=="hide";if(!S&&!Z)return F;let T=(l.title_icon_color?`color:${l.title_icon_color};`:"")+(l.title_icon_size?`--mdc-icon-size:${l.title_icon_size}px;width:${l.title_icon_size}px;height:${l.title_icon_size}px;`:""),B=(l.title_color?`color:${l.title_color};`:"")+(l.title_font_size?`font-size:${l.title_font_size}px;`:"")+(l.title_font_weight?`font-weight:${l.title_font_weight};`:""),N=Z?w`<ha-icon class="wsfc-title-icon" .icon=${d} style=${T}></ha-icon>`:F,D=S?w`<span class="wsfc-title-text" style=${B}>${m}</span>`:F,C1=z=>{let S1=[];return Z&&x===z&&S1.push(N),S&&f===z&&S1.push(D),S1},d1=Number(l.title_indent)||0;return w`<div class="wsfc-title-row" style="padding-left:${d1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${C1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${C1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${C1("right")}</span>
    </div>`},s1._wfcRenderSection=function(l,m,d){switch(l){case"current":return this._wfcRenderCurrent(d);case"details":return this._wfcRenderDetails(m,d);case"hourly":return this._wfcRenderForecast("hourly",d);case"daily":return this._wfcRenderForecast("daily",d);case"sun_position":return this._wfcRenderSunPosition(m,d);case"sun_arc":return this._wfcRenderSunArc(m,d);default:return F}},s1._wfcRenderCurrent=function(l){let d=this._wfc().current||{},f=Number(d.header_state_size)||0,x=Number(d.header_temp_size)||0,S=Number(d.header_icon_size)||0,Z=(S?`--current-conditions-icon-size:${S}px;`:"")+(f||x?`--wfc-hdr-state:${f?f+"px":"inherit"};--wfc-hdr-temp:${x?x+"px":"inherit"};`:""),T=w`
      <div
        class="wsfc-current-weather-container${f||x?" wsfc-hdr-sized":""}"
        style=${Z||F}
        .actionHandler=${U5({hasHold:l0(this.config.hold_action),hasDoubleClick:l0(this.config.double_tap_action)})}
        @action=${this.onCardAction}
      >
        <wsfc-current-weather
          class=${(this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?"wsfc-hide-secondary":""}
          .hass=${this.hass}
          .weatherEntity=${this._wfcMergedCurrentEntity(l.stateObj)}
          .config=${this.config}
          .hourlyForecast=${this._hourlyForecastData}
          .dailyForecast=${this._dailyForecastData}
        ></wsfc-current-weather>
      </div>
    `,B=!!d.clock_show_time,N=!!d.clock_show_date;if(!B&&!N)return T;this._wfcEnsureClockTimer();let D=l1=>l1==="above"?"above-center":l1==="below"?"below-center":l1||"right",C1=D(d.clock_placement),d1=d.clock_date_placement==="with_time"||!d.clock_date_placement?C1:D(d.clock_date_placement),z=B?this._wfcRenderClockTime(d):null,S1=N?this._wfcRenderClockDate(d):null,N1=B&&N&&(d.clock_date_placement==="with_time"||!d.clock_date_placement),W1={},U1=(l1,E1)=>{E1&&(W1[l1]=W1[l1]||[]).push(E1)};N1?U1(C1,w`<div class="wsfc-clock">${z}${S1}</div>`):(z&&U1(C1,w`<div class="wsfc-clock">${z}</div>`),S1&&U1(d1,w`<div class="wsfc-clock">${S1}</div>`));let z1=l1=>{let E1=[];return["left","center","right"].forEach(n5=>{let t5=l1+"-"+n5;W1[t5]&&E1.push(w`<div class="wsfc-clock-band-cell wsfc-cb-${n5}">${W1[t5]}</div>`)}),E1.length?w`<div class="wsfc-clock-band">${E1}</div>`:F},u1=z1("above"),P1=z1("below"),h5=W1.left||F,B2=[].concat(W1.right||[],W1.center||[]),a5=W1.left&&W1.left.length||B2.length?w`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${h5}
          <div class="wsfc-cur-grow">${T}</div>
          ${B2.length?B2:F}
        </div>`:T;return w`<div class="wsfc-cur-stack">${u1}${a5}${P1}</div>`},s1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let l=this.__wfcCfg||(this.config?L2(this.config):null),m=l&&l.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},s1._wfcRenderClockTime=function(l){let m=new Date,d=h1(this.hass),f={hour:"2-digit",minute:"2-digit"};l.clock_show_seconds&&(f.second="2-digit"),l.clock_format==="12"?f.hour12=!0:l.clock_format==="24"&&(f.hour12=!1);let x;try{x=m.toLocaleTimeString(d,f)}catch{x=m.toTimeString().slice(0,l.clock_show_seconds?8:5)}l.clock_format==="12"&&(x=x.replace(/^0/,""));let S=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),Z=M2(l.clock_contrast,S),T=`font-size:${V(Number(l.clock_font_size)||28,8,100)}px;font-weight:${l.clock_font_weight||"500"};`+(l.clock_color?`color:${l.clock_color};`:"")+(l.clock_font_family?`font-family:${l.clock_font_family};`:"")+(Z?`text-shadow:${Z};`:"");return w`<div class="wsfc-clock-time" style=${T}>${x}</div>`};function X2(l,m,d){let f=B=>B<10?"0"+B:""+B,x=l.toLocaleDateString(d,{month:"long"}),S=l.toLocaleDateString(d,{month:"short"}),Z=l.toLocaleDateString(d,{weekday:"long"}),T={YYYY:""+l.getFullYear(),YY:f(l.getFullYear()%100),MONTH:x,MON:S,WDAY:Z,MM:f(l.getMonth()+1),M:""+(l.getMonth()+1),DD:f(l.getDate()),D:""+l.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,B=>T[B]!=null?T[B]:B)}s1._wfcRenderClockDate=function(l){let m=new Date,d=h1(this.hass),f=p2.find(N=>N.value===l.clock_date_format)||p2[0],x;try{x=f.pattern?X2(m,f.pattern,d):m.toLocaleDateString(d,f.opts)}catch{x=m.toDateString()}let S=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),Z=l.clock_date_contrast!=null?l.clock_date_contrast:l.clock_contrast,T=M2(Z,S),B=`font-size:${V(Number(l.clock_date_font_size)||12,8,100)}px;`+(l.clock_date_color?`color:${l.clock_date_color};`:"")+(T?`text-shadow:${T};`:"");return w`<div class="wsfc-clock-date" style=${B}>${x}</div>`},s1._wfcForecastConfigFor=function(l){let m=this.config&&this.config.forecast||{},d=m[`${l}_mode`]||m.mode||"simple",f=m[`${l}_extra_attribute`]!=null?m[`${l}_extra_attribute`]:m.extra_attribute;(f==="none"||f==="")&&(f=void 0);let x=m[`${l}_chart_attribute`]!=null?m[`${l}_chart_attribute`]:m.default_chart_attribute,S={...m,mode:d};return f==null?delete S.extra_attribute:S.extra_attribute=f,x!=null&&(S.default_chart_attribute=x),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(T=>{let B=m[`${l}_${T}`];B!=null&&(S[T]=B)}),{config:{...this.config,forecast:S},chart:d==="chart"}},s1._wfcRenderForecast=function(l,m){let d=l==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!d||!d.length)return F;let f=this._wfcMergeForecast(d,l),{config:x,chart:S}=this._wfcForecastConfigFor(l),Z=S?w`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${x}
          .weatherEntity=${m.stateObj}
          .forecast=${f}
          .forecastType=${l}
          .isTwiceDailyEntity=${m.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:w`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${x}
          .weatherEntity=${m.stateObj}
          .forecast=${f}
          .forecastType=${l}
          .isTwiceDailyEntity=${m.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return w`<div class="wsfc-forecast-container" data-forecast-type=${l}>${Z}</div>`};let J2="device:",Y1=l=>typeof l=="string"&&l.indexOf(J2)===0,m2=l=>Y1(l)?l.slice(J2.length):null,Z0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],M8=Z0.map(l=>l.key),l8=[{re:/feels[\s_-]?like|apparent|wind[\s_-]?chill|windchill/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}];function W3(l,m){if(!l||!m||!l.entities)return[];let d=[];for(let f in l.entities){let x=l.entities[f];x&&x.device_id===m&&d.push(f)}return d}function o9(l,m){let d=l&&l.states[m];if(!d)return null;let f=d.attributes&&d.attributes.device_class,x=(m+" "+(d.attributes&&d.attributes.friendly_name||"")).toLowerCase(),S=null;for(let T of l8)if(T.re.test(x)){S=T.key;break}if(S||(f==="temperature"?S="temperature":f==="humidity"?S="humidity":f==="pressure"||f==="atmospheric_pressure"?S="pressure":f==="wind_speed"?S="wind_speed":f==="irradiance"?S="solar_radiation":f==="illuminance"?S="illuminance":f==="precipitation_intensity"?S="precipitation":/(^|[\s_-])temperature/.test(x)?S="temperature":/pressure/.test(x)&&(S="pressure")),!S||M8.indexOf(S)===-1)return null;let Z=0;if(/indoor|inside/.test(x)&&(Z+=100),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(x)&&(Z+=20),S==="pressure"){if(/deficit|vpd|vapou?r/.test(x))return null;/absolute/.test(x)&&(Z+=50),/relative|sea/.test(x)&&(Z-=5)}return S==="precipitation"&&(/rate/.test(x)&&(Z-=5),/event|hourly|24h|total/.test(x)&&(Z+=10)),{key:S,penalty:Z}}function U3(l,m){let d={},f={};for(let x of W3(l,m)){let S=o9(l,x);S&&(f[S.key]==null||S.penalty<f[S.key])&&(f[S.key]=S.penalty,d[S.key]=x)}return d}function a3(l,m,d){let f={...U3(m,d)},x=l&&l.metric_sources&&l.metric_sources.device_map&&l.metric_sources.device_map[d]||{};for(let S in x)x[S]&&(f[S]=x[S]);return f}function y7(l,m){let d=l&&l.metric_sources||{};if(Array.isArray(d.sources))return d.sources.filter(B=>B&&B.ref).map(B=>({ref:B.ref,overrides:{...B.overrides||{}},disabled:!!B.disabled}));let f=[],x=d.device_map||{},S=d.custom||{},Z=B=>Y1(B)?{...x[m2(B)]||{}}:{},T=d.primary||l&&l.entity;return T&&f.push({ref:T,overrides:{...Z(T),...S}}),d.fallback&&d.fallback!==T&&f.push({ref:d.fallback,overrides:Z(d.fallback)}),f}s1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},s1._wfcSources=function(){return y7(this.config,this.hass)},s1._wfcSlotEntityForKey=function(l,m){return l?Y1(l)?a3(this.config,this.hass,m2(l))[m]||null:l:null},s1._wfcMetricEntityChain=function(l){let m=[],d=f=>{f&&!m.includes(f)&&this.hass&&this.hass.states[f]&&m.push(f)};for(let f of this._wfcSources())f.disabled||(f.overrides&&f.overrides[l]&&d(f.overrides[l]),d(this._wfcSlotEntityForKey(f.ref,l)));return d(this.config&&this.config.entity),m},s1._wfcCurrentMetric=function(l){for(let m of this._wfcMetricEntityChain(l)){let d=this.hass.states[m];if(d)if(m.startsWith("weather."))try{let f=d7(this.hass,d,this.config,l);if(f!=null&&f!=="")return f}catch{}else{let f=d.state;if(f!=null&&f!==""&&f!=="unknown"&&f!=="unavailable"){let x=d.attributes&&d.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(d):x?`${f} ${x}`:`${f}`}catch{return x?`${f} ${x}`:`${f}`}}}}return null},s1._wfcCurrentMetricRaw=function(l){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(l)){let d=this.hass.states[m];if(d)if(m.startsWith("weather.")){let f=d.attributes?d.attributes[l]:null;if(f!=null&&f!=="")return f}else{let f=d.state;if(f!=null&&f!==""&&f!=="unknown"&&f!=="unavailable"){let x=Number(f);return isNaN(x)?f:x}}}return null},s1._wfcMergedCurrentEntity=function(l){try{if(!l||!l.attributes)return l;let m=this.config&&this.config.entity;if(!this._wfcSources().some(T=>T.ref!==m||T.overrides&&Object.keys(T.overrides).length))return l;let x={...l.attributes},S=!1,Z=["temperature",...typeof T2<"u"?T2:[]];for(let T of Z){let B=this._wfcCurrentMetricRaw(T);B!=null&&B!==x[T]&&(x[T]=B,S=!0)}return S?{...l,attributes:x}:l}catch{return l}},s1._wfcDetailValue=function(l,m){let d=i[l];if(!d)return null;if(d.kind==="sunrise"||d.kind==="sunset"){let f=n2(this.hass),x=d.kind==="sunrise"?f.sunrise:f.sunset;return x?b1(this.hass,x):null}try{let f=this._wfcCurrentMetric(l);return f??null}catch{return null}},s1._wfcRenderDetails=function(l,m){let d=l.details||{},f=(d.items||[]).filter(T=>T.show);if(d.chips)return this._wfcRenderDetailChips(d,f,m);let x=[];if(f.forEach(T=>{let B=i[T.key];if(!B)return;let N=this._wfcDetailValue(T.key,m);if(N==null||N==="")return;let D=T.mode==="custom",C1=D?T.icon_color:d.global_icon_color,d1=D?T.icon_size:d.global_icon_size,z=D?T.text_color:d.global_text_color,S1=D?T.text_size:d.global_text_size,N1=T.icon||B.icon||S5&&S5[T.key]||"mdi:information-outline",W1=(C1?`color:${C1};`:"")+(d1?`--mdc-icon-size:${d1}px;width:${d1}px;height:${d1}px;`:""),U1=(z?`color:${z};`:"")+(S1?`font-size:${S1}px;`:"");x.push(w`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${N1} style=${W1}></ha-icon>
          <span class="wsfc-detail-value" style=${U1}>${N}</span>
        </div>
      `)}),!x.length)return F;if((d.details_layout||"grid")==="wrap")return w`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${x}</div>
      </div>`;let S=V(parseInt(l.details.columns,10)||2,1,4),Z=`grid-template-columns:repeat(${S}, minmax(0, 1fr));`;return w`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${S}" style=${Z}>${x}</div>
    </div>`},s1._wfcRenderDetailChips=function(l,m,d){let f=V(Number(l.chip_scale)||1,.5,2.5),S=(l.chip_pill!=null?!!l.chip_pill:l.chip_shape!=="rounded"&&l.chip_shape!=="square")?999:l.chip_radius==null?8:Number(l.chip_radius),Z=l.chip_icon_source||"auto",T=l.chip_show_icon!==!1,B=l.chip_layout||"wrap",N=Math.max(0,parseInt(l.chip_columns,10)||0),D=l.chip_text_size?`${Number(l.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${f})`,C1=l.chip_icon_size?`${Number(l.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${f})`,d1=`--wfc-chip-scale:${f};--wfc-chip-radius:${S}px;--wfc-chip-font:${D};--wfc-chip-icon-size:${C1};`+(l.chip_bg?`--wfc-chip-bg:${l.chip_bg};`:"")+(l.chip_border_color?`--wfc-chip-border:${l.chip_border_color};`:"")+(l.chip_text_color?`--wfc-chip-text:${l.chip_text_color};`:"")+(l.chip_icon_color?`--wfc-chip-icon:${l.chip_icon_color};`:"");B==="grid"&&N>0&&(d1+=`grid-template-columns:repeat(${N}, minmax(0, 1fr));`);let z=[];return m.forEach(S1=>{let N1=i[S1.key];if(!N1)return;let W1=this._wfcDetailValue(S1.key,d);if(l.chip_hide_when_off&&(W1==null||W1===""||W1==="unknown"||W1==="unavailable"))return;let U1=W1==null||W1===""?"\u2014":W1,z1=N1.label||S1.key,u1=l.chip_show_name?`${z1}: ${U1}`:U1,P1="";T&&Z!=="none"&&(P1=Z==="entity"&&S1.icon||N1.icon,P1=P1||S5&&S5[S1.key]||"mdi:information-outline"),z.push(w`
        <span class="wsfc-chip">
          ${P1?w`<ha-icon .icon=${P1}></ha-icon>`:F}
          <span class="wsfc-chip-text">${u1}</span>
        </span>
      `)}),z.length?w`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${B}" style=${d1}>${z}</div>
    </div>`:F},s1._wfcHourlySource=function(){let l=this._hourlyForecastEvent,m=l&&Array.isArray(l.forecast)&&l.forecast.length?l.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},s1._wfcExtraForecastEntities=function(){let l=this.config&&this.config.entity,m=new Set,d=f=>{f&&f!==l&&typeof f=="string"&&f.startsWith("weather.")&&this.hass&&this.hass.states[f]&&m.add(f)};for(let f of this._wfcSources())f.disabled||(d(f.ref),f.overrides&&Object.values(f.overrides).forEach(d));return[...m]},s1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let l=new Set(this._wfcExtraForecastEntities());for(let x of Object.keys(this.__wfcSrc))if(!l.has(x)){try{this.__wfcSrc[x].unsub&&this.__wfcSrc[x].unsub()}catch{}delete this.__wfcSrc[x]}let m=this.config.forecast_types||"both",d=m!=="daily",f=m!=="hourly";l.forEach(x=>{if(this.__wfcSrc[x])return;let S={unsub:null,hourly:null,daily:null};this.__wfcSrc[x]=S;let Z=(T,B)=>{try{let N=this.hass.connection.subscribeMessage(D=>{S[B]=D&&Array.isArray(D.forecast)?D.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:T,entity_id:x},{resubscribe:!1});Promise.resolve(N).then(D=>{if(this.__wfcSrc[x]!==S){try{D&&D()}catch{}return}let C1=S.unsub;S.unsub=()=>{try{C1&&C1()}catch{}try{D&&D()}catch{}}}).catch(()=>{})}catch{}};d&&Z("hourly","hourly"),f&&Z(p5&&typeof p5=="function"&&p5(this.hass.states[x])||"daily","daily")})}catch{}},s1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let l of Object.keys(this.__wfcSrc))try{this.__wfcSrc[l].unsub&&this.__wfcSrc[l].unsub()}catch{}this.__wfcSrc={}}},s1._wfcSourceForecast=function(l,m){let d=this.__wfcSrc&&this.__wfcSrc[l];return d&&d[m]||null},s1._wfcMergeForecast=function(l,m){try{if(!Array.isArray(l)||!l.length)return l;let d=this.config&&this.config.entity,f=this._wfcExtraForecastEntities();if(!f.length)return l;let x={};if(f.forEach(B=>{let N=this._wfcSourceForecast(B,m);Array.isArray(N)&&N.length&&(x[B]=N.map(D=>({t:new Date(D.datetime).getTime(),fc:D})).filter(D=>!isNaN(D.t)))}),!Object.keys(x).length)return l;let S=(B,N)=>{let D=x[B];if(!D)return null;let C1=null,d1=1/0;for(let z of D){let S1=Math.abs(z.t-N);S1<d1&&(d1=S1,C1=z.fc)}return d1<=90*6e4?C1:null},Z=Z0.map(B=>B.key),T={};return Z.forEach(B=>{T[B]=this._wfcMetricEntityChain(B).filter(N=>N===d||x[N])}),l.map(B=>{let N=new Date(B.datetime).getTime();if(isNaN(N))return B;let D=B;return Z.forEach(C1=>{for(let d1 of T[C1]){if(d1===d){if(B[C1]!=null)break;continue}let z=S(d1,N);if(z&&z[C1]!=null){D===B&&(D={...B}),D[C1]=z[C1];break}}}),D})}catch{return l}},s1._wfcCloudAt=function(l){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,f=1/0;for(let x=0;x<m.length;x++){let S=new Date(m[x].datetime);if(isNaN(S))continue;let Z=Math.abs(S.getTime()-l.getTime());Z<f&&(f=Z,d=m[x])}return!d||f>90*6e4?null:n(d.cloud_coverage)?d.cloud_coverage/100:n(d.precipitation_probability)?d.precipitation_probability/100:null},s1._wfcForecastAt=function(l){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,f=1/0;for(let x=0;x<m.length;x++){let S=new Date(m[x].datetime);if(isNaN(S))continue;let Z=Math.abs(S.getTime()-l.getTime());Z<f&&(f=Z,d=m[x])}return d&&f<=90*6e4?d:null},s1._wfcSunHours=function(l){l=l||{};let m=new Date,d,f;if(l.timeframe_mode==="day")d=new Date(m),d.setHours(0,0,0,0),f=new Date(d.getTime()+24*36e5);else if(l.timeframe_mode==="match_arc"){let T=n2(this.hass,m);T.sunrise&&T.sunset?(d=new Date(T.sunrise.getTime()-60*6e4),f=new Date(T.sunset.getTime()+60*6e4)):(d=new Date(m),d.setHours(0,0,0,0),f=new Date(d.getTime()+24*36e5))}else{let T=V(Number(l.timeframe_hours)||24,1,72)*36e5;l.timeframe_anchor==="now_center"?(d=new Date(m.getTime()-T/2),f=new Date(m.getTime()+T/2)):(d=new Date(m),d.setMinutes(0,0,0),f=new Date(d.getTime()+T))}let x=f.getTime()-d.getTime(),S=V(Math.round(x/36e5),2,72),Z=[];for(let T=0;T<=S;T++){let B=new Date(d.getTime()+x*T/S);Z.push({date:B,cloud:this._wfcCloudAt(B)})}return Z},s1._wfcFmtTime=function(l,m){if(!(l instanceof Date)||isNaN(l))return"--";let d=h1(this.hass);try{return m==="12"?l.toLocaleTimeString(d,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?l.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit",hour12:!1}):l.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit"})}catch{return l.toTimeString().slice(0,5)}},s1._wfcSkyGradient=function(l){let m=this._wfcSunHours(l);if(m.length<2)return null;let{lat:d,lng:f}=I1(this.hass);if(!n(d)||!n(f))return null;let x=l.weather_adjust!==!1,S=m.length,Z=[];for(let T=0;T<S;T++){let B=y1(j1(this.hass,m[T].date)),N=(T/(S-1)*100).toFixed(2),D=V1(B,{day_color:l.day_color,night_color:l.night_color,cloud:x?m[T].cloud:0});Z.push(`${D} ${N}%`)}return{gradient:`linear-gradient(to right, ${Z.join(", ")})`,hours:m}},s1._wfcSunMarker=function(l,m){if(m==null)return F;let d=l.marker_color||"var(--primary-text-color)",f=V(Number(l.marker_opacity==null?100:l.marker_opacity),0,100)/100;return w`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${d};opacity:${f};"></div>`},s1._wfcSunRiseSetMarkers=function(l,m,d,f){let{sunrise:x,sunset:S}=n2(this.hass);if(!x||!S||d<=m)return F;let Z=l.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",T=V(Number(l.ss_markers_opacity==null?100:l.ss_markers_opacity),0,100)/100,B=[];return[x.getTime(),S.getTime()].forEach(N=>{if(N<m||N>d)return;let D=((N-m)/(d-m)*100).toFixed(2);B.push(w`<span class="wsfc-sunpos-ssmark" style="left:${D}%;background:${Z};opacity:${T};"></span>`)}),B.length?w`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${f}">${B}</div>`:F},s1._wfcRenderSunPosition=function(l,m){let d=l.sun_position,f=this._wfcSkyGradient(d);if(!f)return F;let{gradient:x,hours:S}=f,Z=S.length,T=d.times_position||"below";T==="center"&&(T="overlay");let B=d.ticks_position||"hidden",N=T!=="hidden",D=B!=="hidden",C1=V(parseInt(d.ticks_every,10)||0,0,24),d1;if(C1>0&&Z>1){let G=(S[Z-1].date.getTime()-S[0].date.getTime())/36e5,f1=G>0?G/(Z-1):1;d1=Math.max(1,Math.round(C1/f1))}else d1=Math.max(1,Math.round((Z-1)/8));let z=G=>(G/(Z-1)*100).toFixed(2),S1=[];if(N)for(let G=0;G<Z;G+=d1){let f1;try{f1=S[G].date.toLocaleTimeString(h1(this.hass),{hour:"numeric"})}catch{f1=S[G].date.getHours()+""}S1.push(w`<span class="wsfc-sunpos-tick" style="left:${z(G)}%">${f1}</span>`)}let N1=d.times_color||"var(--secondary-text-color, #9e9e9e)",W1=[];if(D)for(let G=0;G<Z;G+=d1)W1.push(w`<span class="wsfc-sunpos-mark" style="left:${z(G)}%;background:${N1};"></span>`);let U1=Date.now(),z1=S[0].date.getTime(),u1=S[Z-1].date.getTime(),h5=U1>=z1&&U1<=u1&&u1>z1?V((U1-z1)/(u1-z1)*100,0,100):null,B2=Number(d.height)||44,A5=`font-size:${Number(d.times_font_size)||11}px;font-weight:${d.times_font_weight||"400"};`+(d.times_color?`color:${d.times_color};`:""),a5=G=>w`<div class="wsfc-sunpos-ticks${G||""}" style=${A5}>${S1}</div>`,l1=G=>w`<div class="wsfc-sunpos-marks${G||""}">${W1}</div>`,E1=d.ss_markers_position||"hidden",n5=E1!=="hidden",t5=I(d),t2={};t5.forEach(G=>t2[G.key]=G.pos);let e0=t2.temps&&t2.temps!=="hidden",f5=t2.icons&&t2.icons!=="hidden",e5=d.forecast_temp_color||d.forecast_color||"",Q1=d.forecast_icon_color||d.forecast_color||"",G2=d.forecast_extra_color||d.forecast_color||"",r0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),c2=d.forecast_metric_style||{},E5=G=>c2[G]&&c2[G].text_color||(G==="temps"?e5:G2),L5=G=>c2[G]&&c2[G].icon_color||Q1,s3=G=>c2[G]&&c2[G].icon_size||d.forecast_icon_size,M3=G=>c2[G]&&c2[G].text_size||d.forecast_font_size||11,B5=G=>M2(c2[G]&&c2[G].contrast||"",r0),R5=G=>{let f1=E5(G),k1=B5(G);return`font-size:${Number(M3(G))||11}px;`+(f1?`color:${f1};`:"")+(k1?`text-shadow:${k1};`:"")},D5=G=>{let f1=L5(G),k1=s3(G),i1=B5(G);return(f1?`color:${f1};`:"")+(k1?`--mdc-icon-size:${k1}px;width:${k1}px;height:${k1}px;`:"")+(i1?`filter:drop-shadow(${i1});`:"")},$5=b.some(G=>t2[G]&&t2[G]!=="hidden"),v5=[];if(e0||f5||$5){let G=this._wfcHourlySource()||[];for(let f1 of G){let k1=new Date(f1.datetime);if(isNaN(k1))continue;let i1=k1.getTime();i1<z1||i1>u1||v5.push({t:i1,fc:f1})}v5.sort((f1,k1)=>f1.t-k1.t)}let I5=u1-z1,l3=G=>I5>0?((G-z1)/I5*100).toFixed(2):"0",A1=(G,f1)=>{let k1=null,i1=1/0;for(let b2 of v5){let o2=Math.abs(b2.t-G);o2<i1&&(i1=o2,k1=b2.fc)}return i1<=f1?k1:null},h2={},x1=G=>{let f1=G==null?"":String(G);if(h2[f1])return h2[f1];let k1=[];if(v5.length||G==="ticks"||G==="midticks"){let i1=G==="all"||G==="0",b2=G==="ticks",o2=G==="midticks";if(b2||o2){let R2=I5>0&&Z>1?I5/(Z-1)*d1:36e5,y0=Math.max(R2/2,90*6e4),D7=o2?d1/2:0;for(let D2=D7;D2<=Z-1;D2+=d1){let $7=Math.floor(D2),d9=Math.min(Z-1,Math.ceil(D2)),f8=D2-$7,I7=S[$7].date.getTime()+(S[d9].date.getTime()-S[$7].date.getTime())*f8;if(I7<z1||I7>u1)continue;let z7=(D2/(Z-1)*100).toFixed(2);k1.push({pct:z7,fc:A1(I7,y0)})}}else if(i1)for(let R2 of v5)k1.push({pct:l3(R2.t),fc:R2.fc});else{let R2=V(parseInt(G,10)||3,1,6),y0=null,D7=R2*36e5;for(let D2 of v5)(y0==null||D2.t-y0>=D7-6e4)&&(k1.push({pct:l3(D2.t),fc:D2.fc}),y0=D2.t)}}return h2[f1]=k1,k1},x5=G=>{let f1=c2[G]&&c2[G].every;return f1!=null&&f1!==""?f1:d.forecast_every},C0=G=>{let f1=x1(x5("temps"));return w`<div class="wsfc-sunpos-fc${G||""}" style=${R5("temps")}>${f1.map(k1=>{let i1=k1.fc&&k1.fc.temperature!=null?Math.round(k1.fc.temperature)+"\xB0":"";return i1?w`<span class="wsfc-sunpos-fc-item" style="left:${k1.pct}%">${i1}</span>`:F})}</div>`},c3=G=>{let f1=D5("icons"),k1=x1(x5("icons"));return w`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${G||""}">${k1.map(i1=>{let b2=i1.fc&&i1.fc.condition?c(i1.fc.condition):"";return b2?w`<span class="wsfc-sunpos-fc-item" style="left:${i1.pct}%"><ha-icon .icon=${b2} style=${f1}></ha-icon></span>`:F})}</div>`},d3=!!d.forecast_metric_detail_icons,m1=(G,f1)=>{let k1=D5(G),i1=x1(x5(G));return w`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${f1||""}" style=${R5(G)}>${i1.map(b2=>{let o2=b2.fc?X(G,b2.fc):null;if(o2==null)return F;let R2=L1(G,d3);return w`<span class="wsfc-sunpos-fc-item" style="left:${b2.pct}%">${R2?w`<ha-icon .icon=${R2} style=${k1}></ha-icon>`:F}<span class="wsfc-sunpos-fc-extra-val">${o2}</span></span>`})}</div>`},B1=G=>{let f1=D5("icons"),k1=x1(x5("icons"));return w`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${G||""}" style=${R5("temps")}>${k1.map(i1=>{let b2=i1.fc&&i1.fc.condition?c(i1.fc.condition):"",o2=i1.fc&&i1.fc.temperature!=null?Math.round(i1.fc.temperature)+"\xB0":"";return!b2&&!o2?F:w`<span class="wsfc-sunpos-fc-item" style="left:${i1.pct}%">${b2?w`<ha-icon .icon=${b2} style=${f1}></ha-icon>`:F}${o2?w`<span class="wsfc-sunpos-fc-temp-val">${o2}</span>`:F}</span>`})}</div>`},A2=!!d.forecast_temp_with_icon&&e0&&f5&&t2.temps===t2.icons,i2=(G,f1)=>A2&&G==="icons"?B1(f1):G==="temps"?C0(f1):G==="icons"?c3(f1):m1(G,f1),r5=G=>t5.filter(f1=>f1.pos===G&&!(A2&&f1.key==="temps")).map(f1=>f1.key),i0=r5("overlay"),p3=[];i0.length===1?p3.push(i2(i0[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):i0.forEach((G,f1)=>{let k1=f1===0?" wsfc-sunpos-fc-ovl-top":f1===i0.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";p3.push(i2(G," wsfc-sunpos-fc-ovl"+k1))});let A8=r5("above").map(G=>i2(G)),c9=r5("below").reverse().map(G=>i2(G));return w`
      <div class="wsfc-sunpos-section">
        ${A8}
        ${n5&&E1==="above"?this._wfcSunRiseSetMarkers(d,z1,u1,"row"):F}
        ${D&&B==="above"?l1():F}
        ${N&&T==="above"?a5():F}
        <div class="wsfc-sunpos-bar" style="height:${B2}px;background:${x}">
          ${n5&&E1==="overlay"?this._wfcSunRiseSetMarkers(d,z1,u1,"overlay"):F}
          ${this._wfcSunMarker(d,h5)}
          ${D&&B==="overlay"?l1(" wsfc-sunpos-marks-center"):F}
          ${N&&T==="overlay"?a5(" wsfc-sunpos-ticks-center"):F}
          ${p3}
        </div>
        ${N&&T==="below"?a5():F}
        ${D&&B==="below"?l1():F}
        ${n5&&E1==="below"?this._wfcSunRiseSetMarkers(d,z1,u1,"row"):F}
        ${c9}
      </div>
    `},s1._wfcArcWindow=function(l,m,d){let f=l.timeframe_mode||"sunrise_sunset",x=Date.now();if(f==="day"){let S=new Date(x);return S.setHours(0,0,0,0),{t0:S.getTime(),t1:S.getTime()+24*36e5}}if(f==="hours"){let S=V(Number(l.timeframe_hours)||24,1,72)*36e5;if(l.timeframe_anchor==="now_center")return{t0:x-S/2,t1:x+S/2};let Z=new Date(x);return Z.setMinutes(0,0,0),{t0:Z.getTime(),t1:Z.getTime()+S}}return{t0:m,t1:d}},s1._wfcRenderSunArc=function(l,m){let d=l.sun_arc,{sunrise:f,sunset:x}=n2(this.hass);if(!f||!x)return F;let S=Date.now(),Z=f.getTime(),T=x.getTime(),B=T-Z,N;if(d.baseline_mode==="sky"&&l.sun_position){let m1=this._wfcSunHours(l.sun_position);m1&&m1.length>=2&&(N={t0:m1[0].date.getTime(),t1:m1[m1.length-1].date.getTime()})}N||(N=this._wfcArcWindow(d,Z,T));let D=N.t0,C1=N.t1,d1=C1-D||1,z=m1=>V((m1-D)/d1,0,1),S1=100,N1=78,W1=14,U1=z(Z),z1=z(T),u1=z1-U1,P1=m1=>{if(u1<=0||m1<=U1||m1>=z1)return N1;let B1=(m1-U1)/u1;return N1-(N1-W1)*(1-Math.pow(2*B1-1,2))},h5=96,B2="";for(let m1=0;m1<=h5;m1++){let B1=m1/h5;B2+=(m1===0?"M":"L")+(B1*S1).toFixed(2)+" "+P1(B1).toFixed(2)+" "}let A5=S>=D&&S<=C1,a5=S>=Z&&S<=T,l1=z(S),E1=(l1*100).toFixed(2),n5=(P1(l1)/S1*100).toFixed(2),t5=Number(d.height)||90,t2=d.time_format||"auto",e0=d.tick_color||"var(--secondary-text-color, #9e9e9e)",f5=[];{let m1=new Date(D);m1.setMinutes(0,0,0),m1.getTime()<D&&m1.setTime(m1.getTime()+36e5);for(let B1=m1.getTime();B1<=C1;B1+=36e5)f5.push(z(B1))}let e5=[];d.show_arc_ticks&&f5.forEach(m1=>{if(m1<=0||m1>=1)return;let B1=(m1*S1).toFixed(2),A2=P1(m1);e5.push(R1`<line x1="${B1}" y1="${(A2-2.5).toFixed(2)}" x2="${B1}" y2="${(A2+2.5).toFixed(2)}" stroke="${e0}" stroke-width="0.6"></line>`)});let Q1=[];d.show_base_ticks&&f5.forEach(m1=>{let B1=(m1*S1).toFixed(2);Q1.push(R1`<line x1="${B1}" y1="${N1}" x2="${B1}" y2="${N1+3}" stroke="${e0}" stroke-width="0.6"></line>`)});let G2=d.sunrise_sunset_ticks||"none",r0=G2==="arc"||G2==="both",c2=G2==="base"||G2==="both",E5=[];Z>=D&&Z<=C1&&E5.push(z(Z)),T>=D&&T<=C1&&E5.push(z(T)),r0&&E5.forEach(m1=>{let B1=(m1*S1).toFixed(2),A2=P1(m1);e5.push(R1`<line x1="${B1}" y1="${(A2-4.5).toFixed(2)}" x2="${B1}" y2="${(A2+4.5).toFixed(2)}" stroke="${e0}" stroke-width="1.4"></line>`)}),c2&&E5.forEach(m1=>{let B1=(m1*S1).toFixed(2);Q1.push(R1`<line x1="${B1}" y1="${(N1-2).toFixed(2)}" x2="${B1}" y2="${N1+6}" stroke="${e0}" stroke-width="1.4"></line>`)});let L5=F;if(A5){let m1="wsfc-sunarc-sun"+(a5?"":" wsfc-sunarc-sun-night"),B1=`left:${E1}%;top:${n5}%;`;if(!a5&&d.night_moon){let A2=d.moon_icon||"mdi:weather-night";L5=w`<ha-icon class="${m1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${A2} style=${B1}></ha-icon>`}else d.sun_icon?L5=w`<ha-icon class="${m1} wsfc-sunarc-sun-icon" .icon=${d.sun_icon} style=${B1}></ha-icon>`:L5=w`<span class="${m1} wsfc-sunarc-sun-dot" style=${B1}></span>`}let s3=`font-size:${Number(d.time_font_size)||13}px;font-weight:${d.time_font_weight||"600"};`+(d.time_color?`color:${d.time_color};`:""),M3=`font-size:${Number(d.caption_font_size)||11}px;font-weight:${d.caption_font_weight||"400"};`+(d.caption_color?`color:${d.caption_color};`:""),B5=d.show_times!==!1,R5=d.show_captions!==!1,D5=!!d.show_ss_icons,$5=d.ss_icon_position||"left",v5=(d.ss_icon_color?`color:${d.ss_icon_color};`:"")+(d.ss_icon_size?`--mdc-icon-size:${d.ss_icon_size}px;width:${d.ss_icon_size}px;height:${d.ss_icon_size}px;`:""),I5=m1=>{if(!D5)return F;let B1=m1==="sunrise"?d.sunrise_icon||"mdi:weather-sunset-up":d.sunset_icon||"mdi:weather-sunset-down";return w`<ha-icon class="wsfc-sunarc-ssicon" .icon=${B1} style=${v5}></ha-icon>`},l3=(m1,B1,A2,i2)=>{let r5=w`<div class="wsfc-sunarc-endtext">
        ${B5?w`<div class="wsfc-sunarc-time" style=${s3}>${m1}</div>`:F}
        ${R5?w`<div class="wsfc-sunarc-cap" style=${M3}>${B1}</div>`:F}
      </div>`,i0=I5(i2);return w`<div class="wsfc-sunarc-end${A2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${$5==="above"?"column":$5==="below"?"column-reverse":$5==="right"?"row-reverse":"row"};">${i0}${r5}</div>
      </div>`},A1=B5||R5||D5,h2=A1?w`<div class="wsfc-sunarc-labels">
          ${l3(this._wfcFmtTime(f,t2),"sunrise",!1,"sunrise")}
          ${l3(this._wfcFmtTime(x,t2),"sunset",!0,"sunset")}
        </div>`:F,x1=d.labels_position;x1==="below"||x1==null?x1=0:x1==="above"?x1=100:x1==="mid"?x1=50:x1=V(Number(x1),0,100);let x5=d.baseline_mode==="sky"&&l.sun_position,C0=x5?this._wfcRenderSunPosition(l,m):F,c3=x5&&C0!==F?F:R1`<line class="wsfc-sunarc-horizon" x1="0" y1="${N1}" x2="${S1}" y2="${N1}"></line>`,d3=w`
      <div class="wsfc-sunarc-svg-wrap" style="height:${t5}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${S1} 100" preserveAspectRatio="none">
          ${c3}
          <path class="wsfc-sunarc-path" d=${B2.trim()}></path>
          ${e5}
          ${Q1}
        </svg>
        ${L5}
        ${A1&&x1>0&&x1<100?w`<div class="wsfc-sunarc-overlay" style="top:${(100-x1).toFixed(1)}%;transform:translateY(-50%);">${h2}</div>`:F}
      </div>
    `;return w`
      <div class="wsfc-sunarc-section">
        ${A1&&x1>=100?h2:F}
        ${d3}
        ${x5&&C0!==F?w`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-N1)/100)*t5).toFixed(1)}px;">${C0}</div>`:F}
        ${A1&&x1<=0?h2:F}
      </div>
    `},s1._wfcStyleTag=function(){return w`<style>
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
    </style>`};let j=g0.prototype,H9=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),j3={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},w0=null;function V9(){return w0||(w0=new Set,Object.values(M9).forEach(l=>l.forEach(m=>w0.add(m)))),w0}function a9(l,m){let d=[];return l.forEach(f=>{if(!m.has(f.name))if(f.schema){let x=a9(f.schema,m);x.length&&d.push({...f,schema:x})}else d.push(f)}),d}function n3(l){let m=V9(),d=new Set([...m,...H9]);l=a9(l,d);let f=new Map,x=[];l.forEach(N=>{H9.has(N.name)||(N.type==="expandable"?x.push(N):f.set(N.name,N))});let S=N=>N.map(D=>f.get(D)).filter(Boolean),Z=(N,D,C1)=>{let d1=S(C1);return d1.length?[{name:N,type:"expandable",flatten:!0,icon:D,schema:d1}]:[]},T=N=>x.find(D=>D.name===N),B=[];{let N=T("attribute_entities");N&&B.push(j3.attribute_entities?{...N,icon:j3.attribute_entities}:N)}return B}let ve=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],c8=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],n9=["tap_action","hold_action","double_tap_action"],L9=["show_condition_effects"],s9=[],M9={current:["current.show_attributes"],hourly:[],daily:[]},l9={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},d8="Weather Flex Card";j.render=function(){if(!this.hass||!this._config)return F;let l=i8(this._config),m=this._getSelectedAttributes(l),d=this._schema(this.localize.bind(this),m,l["forecast.mode"]),f=n3(d),x=Z=>l9[Z.name]||this._computeLabel(Z)||Z.name,S=this._wfcAccordionEnabled();return w`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${d8}</span>
          <span class="wsfc-ed-ver">build ${r}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${S}
            @change=${Z=>this._wfcSetAccordion(Z.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>
      ${f.length?w`<ha-form
            .hass=${this.hass}
            .data=${l}
            .schema=${f}
            .computeLabel=${x}
            .computeHelper=${Z=>this._wfcHelper(Z)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:F}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},j._wfcCardAppearancePanel=function(){let l=L2(this._config).card||{},m="card";return w`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${j3.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(L9)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!l.border_enabled,d=>this._wfcToggleSecField(m,"border_enabled",d))}
            ${l.border_enabled?w`
                  ${this._wfcColorField("Border color",l.border_color,d=>this._wfcSetSecField(m,"border_color",d.target.value))}
                  ${this._wfcNumField(m,"border_width","Border width","px",l.border_width,1)}
                  ${this._wfcNumField(m,"border_radius","Corner radius","px",l.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",l.border_top!==!1,d=>this._wfcToggleSecField(m,"border_top",d))}
                    ${this._wfcCheckbox("Bottom",l.border_bottom!==!1,d=>this._wfcToggleSecField(m,"border_bottom",d))}
                    ${this._wfcCheckbox("Left",l.border_left!==!1,d=>this._wfcToggleSecField(m,"border_left",d))}
                    ${this._wfcCheckbox("Right",l.border_right!==!1,d=>this._wfcToggleSecField(m,"border_right",d))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",l.corner_tl!==!1,d=>this._wfcToggleSecField(m,"corner_tl",d))}
                    ${this._wfcCheckbox("Top-right",l.corner_tr!==!1,d=>this._wfcToggleSecField(m,"corner_tr",d))}
                    ${this._wfcCheckbox("Bottom-right",l.corner_br!==!1,d=>this._wfcToggleSecField(m,"corner_br",d))}
                    ${this._wfcCheckbox("Bottom-left",l.corner_bl!==!1,d=>this._wfcToggleSecField(m,"corner_bl",d))}
                  </div>`:F}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",l.bg_color,d=>this._wfcSetSecField(m,"bg_color",d.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!l.glow_enabled,d=>this._wfcToggleSecField(m,"glow_enabled",d))}
            ${l.glow_enabled?w`
                  ${this._wfcColorField("Glow color",l.glow_color,d=>this._wfcSetSecField(m,"glow_color",d.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((l.glow_intensity==null?1:l.glow_intensity)*100),100,"glow_intensity",d=>this._wfcSetSecField(m,"glow_intensity",V((parseInt(d.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",l.glow_borders_only!==!1,d=>this._wfcToggleSecField(m,"glow_borders_only",d))}`:F}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!l.shadow_enabled,d=>this._wfcToggleSecField(m,"shadow_enabled",d))}
            ${l.shadow_enabled?w`
                  ${this._wfcColorField("Shadow color",l.shadow_color,d=>this._wfcSetSecField(m,"shadow_color",d.target.value))}
                  ${this._wfcNumField(m,"shadow_x","Offset X","px",l.shadow_x,0)}
                  ${this._wfcNumField(m,"shadow_y","Offset Y","px",l.shadow_y,4)}
                  ${this._wfcNumField(m,"shadow_blur","Blur","px",l.shadow_blur,16)}
                  ${this._wfcNumField(m,"shadow_spread","Spread","px",l.shadow_spread,0)}
                  ${this._wfcNumField(m,"shadow_opacity","Opacity","%",l.shadow_opacity,35)}`:F}
          </div>
        </div>
      </details>
    `};let O7=4;j._wfcEdSources=function(){return y7(this._config,this.hass)},j._wfcCommitSources=function(l){let m=l.filter(N=>N&&N.ref).map(N=>{let D={};for(let d1 in N.overrides||{})N.overrides[d1]&&(D[d1]=N.overrides[d1]);let C1={ref:N.ref};return Object.keys(D).length&&(C1.overrides=D),N.disabled&&(C1.disabled=!0),C1}),d={...this._config.metric_sources||{}};delete d.primary,delete d.fallback,delete d.custom,delete d.device_map,m.length?d.sources=m:delete d.sources;let f={...this._config,metric_sources:d},x=N=>{let D=this.hass&&this.hass.states[N],C1=D&&D.attributes&&D.attributes.supported_features;return typeof C1=="number"&&(C1&7)!==0},S=N=>N.map(D=>D.ref).filter(D=>typeof D=="string"&&D.startsWith("weather.")),Z=S(m.filter(N=>!N.disabled)),T=S(m),B=Z.find(x)||Z[0]||T.find(x)||T[0];B&&(f.entity=B),Object.keys(d).length===0&&delete f.metric_sources,C2(this,"config-changed",{config:f})},j._wfcSetSourceRef=function(l,m){let d=this._wfcEdSources();d[l]&&(m?d[l]={ref:m,overrides:d[l].overrides||{}}:d.splice(l,1),this._wfcCommitSources(d))},j._wfcAddSource=function(l){if(!l)return;let m=this._wfcEdSources();m.length>=O7||(m.push({ref:l,overrides:{}}),this._wfcCommitSources(m))},j._wfcMoveSource=function(l,m){let d=this._wfcEdSources(),f=l+m;if(l<0||f<0||f>=d.length)return;let x=d[l];d[l]=d[f],d[f]=x,this._wfcCommitSources(d)},j._wfcRemoveSource=function(l){let m=this._wfcEdSources();l<0||l>=m.length||(m.splice(l,1),this._wfcCommitSources(m))},j._wfcToggleSourceDisabled=function(l){let m=this._wfcEdSources();m[l]&&(m[l].disabled=!m[l].disabled,this._wfcCommitSources(m))},j._wfcSetSourceOverride=function(l,m,d){let f=this._wfcEdSources();if(!f[l])return;let x={...f[l].overrides||{}};d?x[m]=d:delete x[m],f[l].overrides=x,this._wfcCommitSources(f)},j._wfcLiveValue=function(l,m){let d=this.hass&&this.hass.states[l];if(!d)return"";let f,x;return l.startsWith("weather.")?(f=d.attributes?d.attributes[m]:null,x=d.attributes&&d.attributes[m+"_unit"]):(f=d.state,x=d.attributes&&d.attributes.unit_of_measurement),f==null||f===""||f==="unknown"||f==="unavailable"?"":x?`${f} ${x}`:`${f}`},j._wfcAvailableMetrics=function(){let l=new Set;if(!this.hass)return l;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let f of this._wfcEdSources())if(!f.disabled)if(f.overrides&&Object.keys(f.overrides).forEach(x=>{l.add(x),m.add(f.overrides[x])}),Y1(f.ref)){let x=a3(this._config,this.hass,m2(f.ref));Object.keys(x).forEach(S=>{l.add(S),m.add(x[S])})}else f.ref&&m.add(f.ref);m.forEach(f=>{let x=this.hass.states[f];x&&x.attributes&&Object.keys(x.attributes).forEach(S=>l.add(S))});let d=f=>{if(Array.isArray(f))for(let x of f)x&&Object.keys(x).forEach(S=>l.add(S))};return d(this._hourlyForecastData),d(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(f=>{f&&(d(f.hourly),d(f.daily))}),l};function p8(l){return String(l).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let u8={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function k7(l){return u8[l]||p8(l)}j._wfcMetricOptions=function(l,m){let d=this._wfcAvailableMetrics(),f=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(l||[]).forEach(x=>{let S=k7(x);f.push({value:x,label:d.has(x)?S:`${S} (unavailable)`})}),f},j._wfcSourceMappingEditor=function(l,m){let d=m.ref,f=m.overrides||{},x=Y1(d),S=x?m2(d):null,Z=x?U3(this.hass,S):{},T=D=>{if(x)return Z[D]||"";if(!d)return"";if(d.startsWith("weather.")){let C1=this.hass&&this.hass.states[d];return C1&&C1.attributes&&C1.attributes[D]!=null?d:""}return""},B=x?{include_entities:W3(this.hass,S)}:{},N=D=>{let C1=D.key,d1=f[C1]||T(C1),z=!!f[C1],S1=d1?this._wfcLiveValue(d1,C1):"",N1=[{name:"e",selector:{entity:B}}],W1=z?" (override)":d1?"":" \u2014 none";return w`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:d1}}
            .schema=${N1}
            .computeLabel=${()=>D.label+W1}
            @value-changed=${U1=>this._wfcSetSourceOverride(l,C1,U1.detail&&U1.detail.value&&U1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${S1||"\u2014"}</span>
        </div>
      `};return w`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${x?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${x?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${Z0.map(N)}
        </div>
      </details>
    `},j._wfcSourceSummaryList=function(l){let m=l.ref,d=l.overrides||{},f=Y1(m),x=f?U3(this.hass,m2(m)):{},S=T=>{if(d[T])return d[T];if(f)return x[T]||"";if(m&&m.startsWith("weather.")){let B=this.hass&&this.hass.states[m];return B&&B.attributes&&B.attributes[T]!=null?m:""}return""},Z=[];return Z0.forEach(T=>{let B=S(T.key);if(!B)return;let N=this._wfcLiveValue(B,T.key);Z.push(w`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${T.label}</span>
          <span class="wsfc-cond-ent" title=${B}>${B}</span>
          <span class="wsfc-cond-val">${N||"\u2014"}</span>
        </div>
      `)}),Z.length?w`<div class="wsfc-cond-list">${Z}</div>`:F},j._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},j._wfcToggleSrcMap=function(l){let m=this._wfcSrcMapOpen();m.has(l)?m.delete(l):m.add(l),this.requestUpdate&&this.requestUpdate()},j._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},j._wfcSourceMetricCount=function(l){let m=l.ref,d=l.overrides||{},f=new Set(Object.keys(d).filter(x=>d[x]));if(Y1(m))Object.keys(a3(this._config,this.hass,m2(m))).forEach(x=>f.add(x));else if(m&&m.startsWith("weather.")){let x=this.hass&&this.hass.states[m];x&&x.attributes&&Z0.forEach(S=>{x.attributes[S.key]!=null&&f.add(S.key)})}return f.size},j._wfcSourceRow=function(l,m,d){let f=l.ref,x=Y1(f),S=this._config.entity,Z=x&&this.hass&&this.hass.devices&&this.hass.devices[m2(f)],T=x?Z&&(Z.name_by_user||Z.name)||m2(f):f,B=x?"Device":f&&f.startsWith("weather.")?"Weather":"Sensor",N=x?"mdi:access-point":f&&f.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",D=!x&&f&&f.startsWith("weather."),C1=D&&f===S,d1=this._wfcSrcMapOpen().has(f),z=!!l.disabled,S1=this._wfcSourceMetricCount(l),N1=`${S1} value${S1===1?"":"s"} mapped`,W1=C1?w`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:D?w`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:w`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,U1="",z1=f&&!x?this.hass&&this.hass.states[f]:null;if(x)U1=S1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!z1)U1=`\u26A0 Entity not found: ${f}`;else if(z1.state==="unavailable"||z1.state==="unknown")U1=`\u26A0 Currently ${z1.state}.`;else if(D&&!C1){let u1=z1.attributes&&z1.attributes.supported_features;U1=typeof u1=="number"&&(u1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else D||(U1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return w`
      <div class="wsfc-src-row ${z?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${N}></ha-icon>
          <span class="wsfc-src-name">${T} <span class="wsfc-src-type">${B}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===d-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${z?"mdi:eye-off":"mdi:eye"} title=${z?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${d1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(f)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${W1}<span class="wsfc-src-count">${N1}</span>${z?w`<span class="wsfc-src-count">· hidden</span>`:F}</div>
        ${U1?w`<div class="wsfc-src-detail">${U1}</div>`:F}
        ${this._wfcSourceSummaryList(l)}
        ${d1?this._wfcSourceMappingEditor(m,l):F}
      </div>
    `},j._wfcWeatherSourcesPanel=function(){let l=this._wfcEdSources(),m=l.some(Z=>Z.ref&&!Y1(Z.ref)&&Z.ref.startsWith("weather.")),d=l.length>=O7,f=!!this.__wfcAddSourceOpen&&!d,x=w`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${Z=>{let T=Z.detail&&Z.detail.value&&Z.detail.value.e;T&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(T))}}
      ></ha-form>`,S=w`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${Z=>{let T=Z.detail&&Z.detail.value&&Z.detail.value.d;T&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(J2+T))}}
      ></ha-form>`;return w`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${d?w`<p class="wsfc-hint">Maximum of ${O7} sources reached. Remove one to add another.</p>`:w`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${f?"mdi:close":"mdi:plus"}></ha-icon>${f?"Cancel":"Add Source"}
              </div>
              ${f?w`<div class="wsfc-add-pickers">${x}${S}</div>`:F}
            `}
          ${l.length?l.map((Z,T)=>this._wfcSourceRow(Z,T,l.length)):w`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!m&&l.length?w`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:F}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},j._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},j._wfcHeadlineTempRow=function(){let l=this._config.current&&this._config.current.temperature_entity,m=l||"",d="";if(!m)for(let S of this._wfcEdSources()){if(S.disabled)continue;let Z=this._wfcSlotEntityForKeyEd(S,"temperature");if(Z&&this.hass&&this.hass.states[Z]){m=Z;break}}m?d=this.hass&&this.hass.states[m]&&this.hass.states[m].attributes&&this.hass.states[m].attributes.friendly_name||m:d="\u2014 none available \u2014";let f=m?this._wfcLiveValue(m,"temperature"):"",x=!!this.__wfcHeadlineEdit;return w`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${d}${l?w` <span class="wsfc-src-type">override</span>`:F}</span>
          ${f?w`<span class="wsfc-srcmap-live">${f}</span>`:F}
          <ha-icon class="wsfc-ico-btn ${x?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${x?w`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:F}
      </div>
    `},j._wfcSlotEntityForKeyEd=function(l,m){if(l.overrides&&l.overrides[m])return l.overrides[m];let d=l.ref;if(!d)return null;if(Y1(d))return a3(this._config,this.hass,m2(d))[m]||null;if(d.startsWith("weather.")){let f=this.hass&&this.hass.states[d];return f&&f.attributes&&f.attributes[m]!=null?d:null}return null},j._wfcSetForecastTypes=function(l,m){let d=l&&m?"both":l?"hourly":m?"daily":"both",f={...this._config,forecast_types:d};C2(this,"config-changed",{config:f})},j._wfcAdvancedPanel=function(){let l=this._config.forecast_types||"both",m=l==="both"||l==="hourly",d=l==="both"||l==="daily";return w`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",m,f=>this._wfcSetForecastTypes(f.target.checked,d))}
          ${this._wfcCheckbox("Daily",d,f=>this._wfcSetForecastTypes(m,f.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(s9)}
        </div>
      </details>
    `},j._wfcUserActionsPanel=function(){let l=this._wfcStockFormFor(c8),m=this._wfcStockFormFor(n9),d=this._config.forecast||{};return w`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${l}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",d.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${m}
        </div>
      </details>
    `};let m8=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];j._wfcForecastTypeControls=function(l){let m=this._config.forecast||{},d=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],f=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],x=N=>m[`${N}_mode`]||m.mode||"simple",S=N=>(m[`${N}_extra_attribute`]!=null?m[`${N}_extra_attribute`]:m.extra_attribute)||"none",Z=N=>(m[`${N}_chart_attribute`]!=null?m[`${N}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",T=(N,D,C1)=>{let d1=m[`${N}_${D}`];if(d1!=null)return!!d1;let z=m[D];return z!=null?!!z:C1},B=x(l)==="chart";return w`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${l}_mode`,"Display mode",d,x(l),"simple")}
        ${this._wfcForecastSelect(`${l}_extra_attribute`,"Extra metric",f,S(l),"none")}
      </div>
      ${B?w`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${l}_chart_attribute`,"Chart metric",m8,Z(l),"temperature_and_precipitation")}
          </div>`:F}
      ${this._wfcConfigCheckbox(`forecast.${l}_show_sun_times`,"Show sunrise & sunset times",T(l,"show_sun_times",!0),!0)}
      ${B?w`
            ${this._wfcConfigCheckbox(`forecast.${l}_use_color_thresholds`,"Use color thresholds",T(l,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${l}_show_attribute_selector`,"Show metric selector",T(l,"show_attribute_selector",!1),!1)}`:F}
    `},j._wfcHelper=function(l){let m=this._computeHelper?this._computeHelper(l):void 0;return typeof m=="string"&&(m=m.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),m},j._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},j._wfcSetAccordion=function(l){let m=this._wfcState();m.editor_accordion=!!l,this._wfcCommit(m),this._wfcApplyAccordion()},j._wfcApplyAccordion=function(){let l=this.renderRoot||this.shadowRoot||this;!l||!l.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,l.addEventListener("toggle",m=>{let d=m.target;if(!d||!d.classList||!d.classList.contains("wsfc-panel")||(this._wfcRememberOpen(d),!d.open)||!this._wfcAccordionEnabled())return;(l.querySelectorAll?l.querySelectorAll("details.wsfc-panel"):[]).forEach(x=>{x!==d&&x.open&&(x.open=!1)})},!0))},j._wfcRememberOpen=function(l){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let m=this._wfcPanelKey(l);m&&(l.open?this.__wfcOpenPanels.add(m):this.__wfcOpenPanels.delete(m))},j._wfcPanelKey=function(l){let m=l.querySelector&&l.querySelector(".wsfc-panel-title");return m?(m.textContent||"").trim():""},j._wfcRestoreOpen=function(){let l=this.renderRoot||this.shadowRoot||this;!l||!l.querySelectorAll||!this.__wfcOpenPanels||l.querySelectorAll("details.wsfc-panel").forEach(m=>{let d=this._wfcPanelKey(m);d&&this.__wfcOpenPanels.has(d)&&(m.open=!0)})},j.updated=function(l){try{let m=Object.getPrototypeOf(j);m&&typeof m.updated=="function"&&m.updated.call(this,l)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},j._wfcEditorStyle=function(){return w`<style>
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
    </style>`};let h8="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";j._wfcCustomMetricsBody=function(){let l=$3(this._config.current&&this._config.current.show_attributes);return w`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${l.map((m,d)=>this._renderCustomAttributeRow(m,d))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${h8}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},j._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let T7={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function L3(l){if(l&&l.detail&&l.detail.value!==void 0)return l.detail.value;let m=l&&l.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function j2(l){let m=l&&l.target;return m&&typeof m.checked=="boolean"?m.checked:!!(l&&l.detail&&l.detail.value)}j._wfcState=function(){return JSON.parse(JSON.stringify(L2(this._config)))},j._wfcCommit=function(l){let m={...this._config,wfc:l};C2(this,"config-changed",{config:m})},j._wfcResetSection=function(l){let d=Z2(this._config)[l];if(!d)return;let f=this._wfcState(),x=!!(f[l]&&f[l].show);f[l]={...JSON.parse(JSON.stringify(d)),show:x},this._wfcCommit(f)},j._wfcMoveSection=function(l,m){let d=this._wfcState(),f=d.order.indexOf(l),x=f+m;if(f<0||x<0||x>=d.order.length)return;let S=d.order[f];d.order[f]=d.order[x],d.order[x]=S,this._wfcCommit(d)},j._wfcCommitMetrics=function(l,m){let d=this._wfcState();d[l]||(d[l]={});let f=I(d[l]),x=f.map(Z=>Z.key),S={};f.forEach(Z=>S[Z.key]=Z.pos),m(x,S),d[l].forecast_metric_order=x,d[l].forecast_metric_pos=S,delete d[l].forecast_temps,delete d[l].forecast_icons,delete d[l].forecast_extra,delete d[l].forecast_row_order,delete d[l].forecast_stack,this._wfcCommit(d)},j._wfcMoveMetric=function(l,m,d){this._wfcCommitMetrics(l,f=>{let x=f.indexOf(m),S=x+d;if(x<0||S<0||S>=f.length)return;let Z=f[x];f[x]=f[S],f[S]=Z})},j._wfcSetMetricPos=function(l,m,d){this._wfcCommitMetrics(l,(f,x)=>{x[m]=d})},j._wfcSetMetricStyle=function(l,m,d,f){let x=this._wfcState();x[l]||(x[l]={});let S={...x[l].forecast_metric_style||{}},Z={...S[m]||{}};f==null||f===""?delete Z[d]:Z[d]=f,Object.keys(Z).length?S[m]=Z:delete S[m],x[l].forecast_metric_style=S,this._wfcCommit(x)},j._wfcMetricsOrder=function(l,m){let d=I(m),f=m.forecast_metric_style||{};return d.map((x,S,Z)=>{let T=f[x.key]||{},B=x.key==="icons",N=x.key!=="temps";return w`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${P[x.key]||x.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${D=>D.stopPropagation()}
              @change=${D=>this._wfcSetMetricPos(l,x.key,D.target.value)}
            >
              ${$.map(D=>w`<option value=${D.value} ?selected=${D.value===x.pos}>${D.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${S===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${D=>{D.preventDefault(),D.stopPropagation(),this._wfcMoveMetric(l,x.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${S===Z.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${D=>{D.preventDefault(),D.stopPropagation(),this._wfcMoveMetric(l,x.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${D=>this._wfcSetMetricStyle(l,x.key,"every",D.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(D=>({value:String(D),label:D+(D>1?" hours":" hour")}))].map(D=>w`<option value=${D.value} ?selected=${D.value===(T.every!=null?String(T.every):"")}>${D.label}</option>`)}
              </select>
            </label>
            ${N?w`
                  ${this._wfcColorField("Icon color",T.icon_color,D=>this._wfcSetMetricStyle(l,x.key,"icon_color",D.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",T.icon_size,D=>this._wfcSetMetricStyle(l,x.key,"icon_size",parseFloat(L3(D))||""))}`:F}
            ${B?F:w`
                  ${this._wfcColorField("Text color",T.text_color,D=>this._wfcSetMetricStyle(l,x.key,"text_color",D.target.value))}
                  ${this._wfcPlainNum("Font size (px)",T.text_size,D=>this._wfcSetMetricStyle(l,x.key,"text_size",parseFloat(L3(D))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${D=>this._wfcSetMetricStyle(l,x.key,"contrast",D.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(D=>w`<option value=${D.value} ?selected=${D.value===(T.contrast||"")}>${D.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},j._wfcToggleSection=function(l,m){let d=this._wfcState();d[l]||(d[l]={}),d[l].show=j2(m),this._wfcCommit(d)},j._wfcToggleSectionShow=function(l){let m=this._wfcState();m[l]||(m[l]={}),m[l].show=!m[l].show,this._wfcCommit(m)},j._wfcSetSecNum=function(l,m,d){let f=this._wfcState(),x=parseFloat(L3(d));f[l][m]=isNaN(x)?void 0:x,this._wfcCommit(f)},j._wfcSetSecField=function(l,m,d){let f=this._wfcState();f[l]||(f[l]={}),f[l][m]=d,this._wfcCommit(f)},j._wfcToggleSecField=function(l,m,d){this._wfcSetSecField(l,m,j2(d))},j._wfcSetForecastNum=function(l,m){let d={...this._config.forecast||{}};m==null||m<=0?delete d[l]:d[l]=m,C2(this,"config-changed",{config:{...this._config,forecast:d}})},j._wfcSetConfigNum=function(l,m,d){let[f,x]=l.split("."),S={...this._config},Z={...S[f]||{}},T=m==null||m===""||isNaN(Number(m))?null:Number(m);T==null?delete Z[x]:Z[x]=T,S[f]=Z,C2(this,"config-changed",{config:S})},j._wfcConfigSlider=function(l,m,d,f,x){let S=b0(l,d||""),Z=f!=null?V(Number(f),S.min,S.max):Number(x);return this._wfcSliderTpl(m,d,S,Z,T=>this._wfcSetConfigNum(l,T.target.value,x))},j._wfcSetConfigStr=function(l,m,d){let f={...this._config};if(l.indexOf(".")===-1)d&&(m==null||m==="")?delete f[l]:f[l]=m;else{let[x,S]=l.split("."),Z={...f[x]||{}};d&&(m==null||m==="")?delete Z[S]:Z[S]=m,f[x]=Z}C2(this,"config-changed",{config:f})},j._wfcConfigSelect=function(l,m,d,f,x,S){let Z=String(f??x);return w`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${T=>this._wfcSetConfigStr(l,T.target.value,S)}>
          ${d.map(T=>w`<option value=${String(T.value)} ?selected=${String(T.value)===Z}>${T.label}</option>`)}
        </select>
      </label>
    `},j._wfcSetConfigBool=function(l,m,d){let f={...this._config},x=(S,Z)=>{m===!!d?delete S[Z]:S[Z]=m};if(l.indexOf(".")===-1)x(f,l);else{let[S,Z]=l.split("."),T={...f[S]||{}};x(T,Z),f[S]=T}C2(this,"config-changed",{config:f})},j._wfcConfigCheckbox=function(l,m,d,f){let x=d==null?!!f:!!d;return this._wfcCheckbox(m,x,S=>this._wfcSetConfigBool(l,S.target.checked,f))},j._wfcConfigText=function(l,m,d,f){return w`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${m}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${d||""}
          placeholder=${f||""}
          @change=${x=>this._wfcSetConfigStr(l,x.target.value)}
        />
      </label>
    `},j._wfcSetForecastField=function(l,m){let d={...this._config.forecast||{}};m==null||m===""?delete d[l]:d[l]=m,C2(this,"config-changed",{config:{...this._config,forecast:d}})},j._wfcForecastSelect=function(l,m,d,f,x){let S=String(f??x);return w`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${Z=>this._wfcSetForecastField(l,Z.target.value)}>
          ${d.map(Z=>w`<option value=${String(Z.value)} ?selected=${String(Z.value)===S}>${Z.label}</option>`)}
        </select>
      </label>
    `},j._wfcNumSecField=function(l,m,d,f){let x=parseFloat(L3(d));this._wfcSetSecField(l,m,isNaN(x)?f:x)},j._wfcMoveDetail=function(l,m){let d=this._wfcState(),f=d.details.items,x=f.findIndex(T=>T.key===l),S=x+m;if(x<0||S<0||S>=f.length)return;let Z=f[x];f[x]=f[S],f[S]=Z,this._wfcCommit(d)},j._wfcToggleDetail=function(l,m){let d=this._wfcState(),f=d.details.items.find(x=>x.key===l);f&&(f.show=j2(m)),this._wfcCommit(d)},j._wfcToggleDetailShow=function(l){let m=this._wfcState(),d=m.details.items.find(f=>f.key===l);d&&(d.show=!d.show,this._wfcCommit(m))},j._wfcSetDetailValue=function(l,m,d){let f=this._wfcState(),x=f.details.items.find(S=>S.key===l);x&&(x[m]=d),this._wfcCommit(f)},j._wfcSetDetail=function(l,m,d){let f=this._wfcState(),x=f.details.items.find(Z=>Z.key===l);if(!x)return;let S=L3(d);if(m==="icon_size"||m==="text_size"){let Z=parseFloat(S);S=isNaN(Z)?void 0:Z}else(S===""||S==null)&&(S=void 0);x[m]=S,this._wfcCommit(f)},j._wfcColorField=function(l,m,d){return w`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${l}</span>
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
    `},j._wfcSelect=function(l,m,d,f,x,S){let Z=String(x??S);return w`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${d}</span>
        <select
          class="wsfc-native-select"
          @change=${T=>this._wfcSetSecField(l,m,T.target.value)}
        >
          ${f.map(T=>w`<option value=${String(T.value)} ?selected=${String(T.value)===Z}>${T.label}</option>`)}
        </select>
      </label>
    `};let M1={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function b0(l,m){return/chip_scale/.test(l)?{min:50,max:250,step:5}:/chip_columns/.test(l)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(l)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(l)?{min:0,max:48,step:1}:/header_icon_size/.test(l)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(l)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(l)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(l)?{min:-40,max:40,step:1}:/shadow_blur/.test(l)?{min:0,max:80,step:1}:/border_radius/.test(l)?{min:0,max:48,step:1}:/border_width/.test(l)?{min:0,max:12,step:1}:/hourly_slots/.test(l)?{min:0,max:48,step:1}:/daily_slots/.test(l)?{min:0,max:14,step:1}:/labels_position|opacity/.test(l)?{min:0,max:100,step:1}:/indent/.test(l)?{min:0,max:120,step:2}:/height/.test(l)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(l)?{min:8,max:100,step:1}:/font_size|_size$/.test(l)?{min:8,max:48,step:1}:/_width$/.test(l)?{min:1,max:12,step:1}:/_length$/.test(l)?{min:5,max:100,step:5}:/hourly_group_size/.test(l)?{min:1,max:4,step:1}:/temperature_precision/.test(l)?{min:0,max:2,step:1}:/hours/.test(l)?{min:1,max:48,step:1}:M1[m]||M1.px}j._wfcNumField=function(l,m,d,f,x,S){let Z=b0(m,f||""),T=x!=null?Number(x):Number(S);return this._wfcSliderTpl(d,f,Z,T,B=>this._wfcNumSecField(l,m,B,S))},j._wfcPlainSlider=function(l,m,d,f,x,S){let Z=b0(x||"",m||""),T=d!=null?Number(d):Number(f);return this._wfcSliderTpl(l,m,Z,T,S)},j._wfcSlotSlider=function(l,m,d){let f=b0(m,""),x=d!=null?V(Number(d),f.min,f.max):0,S=Z=>Number(Z)<=0?"All":String(Z);return w`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${l}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${f.min}
          max=${f.max}
          step=${f.step}
          .value=${String(x)}
          @input=${Z=>{let T=Z.target.closest(".wsfc-slider-row"),B=T&&T.querySelector(".wsfc-slider-num");B&&(B.textContent=S(Z.target.value))}}
          @change=${Z=>this._wfcSetForecastNum(m,parseInt(Z.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${S(x)}></span></span>
      </div>
    `},j._wfcAutoSizeField=function(l,m,d){let f=b0(m,""),x=this._wfcState()[l]||{},S=V(parseInt(x[m],10)||0,f.min,f.max),Z=T=>Number(T)<=0?"Auto":`${T}px`;return w`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${f.min}
          max=${f.max}
          step=${f.step}
          .value=${String(S)}
          @input=${T=>{let B=T.target.closest(".wsfc-slider-row"),N=B&&B.querySelector(".wsfc-slider-num");N&&(N.textContent=Z(T.target.value))}}
          @change=${T=>this._wfcSetSecField(l,m,parseInt(T.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${Z(S)}></span></span>
      </div>
    `},j._wfcSliderTpl=function(l,m,d,f,x){let S=m||"";return w`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${l}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${d.min}
          max=${d.max}
          step=${d.step}
          .value=${String(f)}
          @input=${Z=>{let T=Z.target.closest(".wsfc-slider-row"),B=T&&T.querySelector(".wsfc-slider-num");B&&(B.textContent=Z.target.value)}}
          @change=${x}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(f)}></span>${S}</span>
      </div>
    `},j._wfcCheckbox=function(l,m,d){return w`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!m} @change=${d} />
        <span>${l}</span>
      </label>
    `},j._wfcGroup=function(l){return l?w`<div class="wsfc-group-div"><span class="wsfc-group-label">${l}</span></div>`:w`<div class="wsfc-group-div"></div>`},j._wfcSubPanel=function(l,m){return w`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${l}</span></summary>
        <div class="wsfc-subpanel-body">${m}</div>
      </details>
    `},j._wfcFlushControls=function(l,m){return w`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",m.flush_edges,d=>this._wfcToggleSecField(l,"flush_edges",d))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",m.flush_top,d=>this._wfcToggleSecField(l,"flush_top",d))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",m.flush_bottom,d=>this._wfcToggleSecField(l,"flush_bottom",d))}
    `},j._wfcTextControls=function(l,m,d,f){let x=this._wfcState()[l]||{};return w`
      <div class="wsfc-sub-title">${d}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(l,`${m}_font_size`,"Size","px",x[`${m}_font_size`],f)}
        ${this._wfcSelect(l,`${m}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],x[`${m}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",x[`${m}_color`],S=>this._wfcSetSecField(l,`${m}_color`,S.target.value))}
    `};let P7=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];j._wfcDividerControls=function(l,m){return w`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",m.divider_above,d=>this._wfcToggleSecField(l,"divider_above",d))}
      ${m.divider_above?w`
            <div class="wsfc-row">
              ${this._wfcNumField(l,"divider_above_width","Thickness","px",m.divider_above_width,1)}
              ${this._wfcNumField(l,"divider_above_length","Length","%",m.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(l,"divider_above_style","Line style",P7,m.divider_above_style,"solid")}
            </div>`:F}

      ${this._wfcCheckbox("Section Divider Below",m.divider_below,d=>this._wfcToggleSecField(l,"divider_below",d))}
      ${m.divider_below?w`
            <div class="wsfc-row">
              ${this._wfcNumField(l,"divider_below_width","Thickness","px",m.divider_below_width,1)}
              ${this._wfcNumField(l,"divider_below_length","Length","%",m.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(l,"divider_below_style","Line style",P7,m.divider_below_style,"solid")}
            </div>`:F}

      ${m.divider_above||m.divider_below?this._wfcColorField("Divider color",m.divider_color,d=>this._wfcSetSecField(l,"divider_color",d.target.value)):F}
    `},j._wfcBackgroundControls=function(l,m){let d=!!m.background_enabled;return w`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",d,f=>this._wfcToggleSecField(l,"background_enabled",f))}
      ${d?w`
            ${this._wfcColorField("Background color",m.background_color,f=>this._wfcSetSecField(l,"background_color",f.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",m.background_opacity==null?80:m.background_opacity,80,"opacity",f=>this._wfcSetSecField(l,"background_opacity",V(parseInt(f.target.value,10)||0,0,100)))}`:F}
    `},j._wfcSectionStyles=function(l,m){return this._wfcSubPanel("Section Styles",w`
        ${this._wfcFlushControls(l,m)}
        ${this._wfcDividerControls(l,m)}
        ${this._wfcBackgroundControls(l,m)}`)},j._wfcStockForm=function(l){return this._wfcStockFormFor(M9[l])},j._wfcStockFormFor=function(l){if(!l||!l.length)return F;let m=i8(this._config),d=this._getSelectedAttributes(m),f=this._schema(this.localize.bind(this),d,"chart"),x=new Map,S=B=>B.forEach(N=>{N.schema?S(N.schema):x.set(N.name,N)});S(f);let Z=l.map(B=>x.get(B)).filter(Boolean);if(!Z.length)return F;let T=B=>l9[B.name]||this._computeLabel(B)||B.name;return w`
      <ha-form
        .hass=${this.hass}
        .data=${m}
        .schema=${Z}
        .computeLabel=${T}
        .computeHelper=${B=>this._wfcHelper(B)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},j._wfcTitleControls=function(l,m){return w`
      ${this._wfcCheckbox("Show Title Row",m.title_show,d=>this._wfcToggleSecField(l,"title_show",d))}
      ${m.title_show?w`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${m.title_text||""}
                @change=${d=>this._wfcSetSecField(l,"title_text",d.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${m.title_icon||""}
              @value-changed=${d=>this._wfcSetSecField(l,"title_icon",d.detail&&d.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(l,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_text_align,"left")}
              ${this._wfcSelect(l,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(l,"title_font_size","Text size","px",m.title_font_size,15)}
            ${this._wfcSelect(l,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],m.title_font_weight,"600")}
            ${this._wfcNumField(l,"title_icon_size","Icon size","px",m.title_icon_size,20)}
            ${this._wfcNumField(l,"title_indent","Indent","px",m.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",m.title_color,d=>this._wfcSetSecField(l,"title_color",d.target.value))}
              ${this._wfcColorField("Icon color",m.title_icon_color,d=>this._wfcSetSecField(l,"title_icon_color",d.target.value))}
            </div>
          `:F}
    `},j._wfcSectionOptionsBody=function(l,m){let d=m[l]||{},f=l==="details",x=l==="current",S=l==="sun_position",Z=l==="sun_arc",T=l==="hourly",B=l==="daily",N=this._config.forecast||{},D=this._config.current||{},C1=V(parseInt(d.columns,10)||2,1,4),d1=this._wfcMetricOptions(typeof T2<"u"?T2:[],!0);return w`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(l)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(l,d)}
          ${x?w`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:F}
          ${x?w`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(l,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(l,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(l,"header_temp_size","Temperature size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",d1,D.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(l)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(l)}
          ${T?w`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",N.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",N.hourly_group_size,1)}`:F}
          ${B?w`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",N.daily_slots)}`:F}
          ${f?w`
                ${this._wfcGroup("Layout")}
                ${d.chips?w`
                      ${this._wfcSelect(l,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.chip_layout==="column"?"wrap":d.chip_layout||"wrap","wrap")}
                      ${(d.chip_layout||"wrap")==="grid"?w`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(d.chip_columns,10)>0,z=>this._wfcSetSecField(l,"chip_columns",z.target.checked?V(parseInt(d.chip_columns,10)||2,1,6):0))}
                            ${parseInt(d.chip_columns,10)>0?this._wfcNumField(l,"chip_columns","Columns","",parseInt(d.chip_columns,10)||2,2):F}`:F}`:w`
                      ${this._wfcSelect(l,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.details_layout||"grid","grid")}
                      ${(d.details_layout||"grid")==="grid"?this._wfcNumField(l,"columns","Columns","",C1,2):F}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!d.chips,z=>this._wfcToggleSecField(l,"chips",z))}
                ${d.chips?w`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square",z=>this._wfcSetSecField(l,"chip_pill",z.target.checked))}
                      ${(d.chip_pill!=null?d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?F:this._wfcNumField(l,"chip_radius","Corner radius (0 = square)","px",d.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((d.chip_scale==null?1:d.chip_scale)*100),100,"chip_scale",z=>this._wfcSetSecField(l,"chip_scale",V((parseInt(z.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(l,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",d.chip_text_color,z=>this._wfcSetSecField(l,"chip_text_color",z.target.value))}
                      ${this._wfcColorField("Chip background",d.chip_bg,z=>this._wfcSetSecField(l,"chip_bg",z.target.value))}
                      ${this._wfcColorField("Chip border",d.chip_border_color,z=>this._wfcSetSecField(l,"chip_border_color",z.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",d.chip_show_icon!==!1,z=>this._wfcToggleSecField(l,"chip_show_icon",z))}
                      ${d.chip_show_icon!==!1?w`
                            ${this._wfcSelect(l,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],d.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(l,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",d.chip_icon_color,z=>this._wfcSetSecField(l,"chip_icon_color",z.target.value))}`:F}
                      ${this._wfcCheckbox("Show metric name in chip",!!d.chip_show_name,z=>this._wfcToggleSecField(l,"chip_show_name",z))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!d.chip_hide_when_off,z=>this._wfcToggleSecField(l,"chip_hide_when_off",z))}`:F}

                ${d.chips?w`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(m)}`:w`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(l,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(l,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",d.global_icon_color,z=>this._wfcSetSecField(l,"global_icon_color",z.target.value))}
                        ${this._wfcColorField("Text color",d.global_text_color,z=>this._wfcSetSecField(l,"global_text_color",z.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(m)}`}
              `:F}

          ${S?w`
                ${this._wfcSubPanel("Time",w`
                    ${this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(l,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],d.timeframe_mode,"hours")}
                      ${d.timeframe_mode==="hours"||d.timeframe_mode==null?w`
                            ${this._wfcNumField(l,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                            ${this._wfcSelect(l,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                          `:F}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(l,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.times_position==="center"?"overlay":d.times_position,"below")}
                      ${this._wfcSelect(l,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(l,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(z=>({value:z,label:z+(z>1?" hours":" hour")}))],d.ticks_every==null?0:d.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(l,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",w`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",d.marker_color,z=>this._wfcSetSecField(l,"marker_color",z.target.value))}
                      ${this._wfcNumField(l,"marker_opacity","Marker opacity","%",d.marker_opacity==null?100:d.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",w`
                    <div class="wsfc-row">
                      ${this._wfcSelect(l,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ss_markers_position,"hidden")}
                    </div>
                    ${d.ss_markers_position&&d.ss_markers_position!=="hidden"?w`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",d.ss_markers_color,z=>this._wfcSetSecField(l,"ss_markers_color",z.target.value))}
                          ${this._wfcNumField(l,"ss_markers_opacity","Marker opacity","%",d.ss_markers_opacity==null?100:d.ss_markers_opacity,100)}
                        </div>`:F}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",w`
                    ${this._wfcSubPanel("Metrics Defaults",w`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!d.forecast_metric_detail_icons,z=>this._wfcToggleSecField(l,"forecast_metric_detail_icons",z))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!d.forecast_temp_with_icon,z=>this._wfcToggleSecField(l,"forecast_temp_with_icon",z))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(l,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(z=>({value:z,label:z+(z>1?" hours":" hour")}))],d.forecast_every,3)}
                          ${this._wfcNumField(l,"forecast_font_size","Text size","px",d.forecast_font_size,11)}
                          ${this._wfcNumField(l,"forecast_icon_size","Icon size","px",d.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",d.forecast_temp_color,z=>this._wfcSetSecField(l,"forecast_temp_color",z.target.value))}
                        ${this._wfcColorField("Icon color",d.forecast_icon_color,z=>this._wfcSetSecField(l,"forecast_icon_color",z.target.value))}
                        ${b.some(z=>d.forecast_metric_pos&&d.forecast_metric_pos[z]&&d.forecast_metric_pos[z]!=="hidden"||y(d).includes(z))?this._wfcColorField("Metric Text Color",d.forecast_extra_color,z=>this._wfcSetSecField(l,"forecast_extra_color",z.target.value)):F}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(l,d)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",w`
                    ${this._wfcNumField(l,"height","Bar height","px",d.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",d.weather_adjust!==!1,z=>this._wfcToggleSecField(l,"weather_adjust",z))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",d.day_color,z=>this._wfcSetSecField(l,"day_color",z.target.value))}
                      ${this._wfcColorField("Night color",d.night_color,z=>this._wfcSetSecField(l,"night_color",z.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(l,d)}
              `:F}

          ${Z?w`
                <div class="wsfc-row">
                  ${this._wfcNumField(l,"height","Arc height","px",d.height,90)}
                  ${this._wfcSelect(l,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.time_format,"auto")}
                </div>

                ${this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(l,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],d.timeframe_mode,"sunrise_sunset")}
                  ${d.timeframe_mode==="hours"?w`
                        ${this._wfcNumField(l,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                        ${this._wfcSelect(l,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                      `:F}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",r1(d.labels_position),0,"labels_position",z=>this._wfcSetSecField(l,"labels_position",V(parseInt(z.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${d.sun_icon||""}
                  @value-changed=${z=>this._wfcSetSecField(l,"sun_icon",z.detail&&z.detail.value||"")}
                ></ha-icon-picker>
                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!d.night_moon,z=>this._wfcToggleSecField(l,"night_moon",z))}
                ${d.night_moon?w`<ha-icon-picker
                      label="Moon icon"
                      .value=${d.moon_icon||"mdi:weather-night"}
                      @value-changed=${z=>this._wfcSetSecField(l,"moon_icon",z.detail&&z.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:F}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(l,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],d.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",d.show_arc_ticks,z=>this._wfcToggleSecField(l,"show_arc_ticks",z))}
                ${this._wfcCheckbox("Show tick marks on the baseline",d.show_base_ticks!==!1,z=>this._wfcToggleSecField(l,"show_base_ticks",z))}
                <div class="wsfc-row">
                  ${this._wfcSelect(l,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],d.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",d.tick_color,z=>this._wfcSetSecField(l,"tick_color",z.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",d.show_times!==!1,z=>this._wfcToggleSecField(l,"show_times",z))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",d.show_captions!==!1,z=>this._wfcToggleSecField(l,"show_captions",z))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",d.show_ss_icons,z=>this._wfcToggleSecField(l,"show_ss_icons",z))}
                ${d.show_ss_icons?w`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${d.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${z=>this._wfcSetSecField(l,"sunrise_icon",z.detail&&z.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${d.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${z=>this._wfcSetSecField(l,"sunset_icon",z.detail&&z.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(l,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],d.ss_icon_position,"left")}
                        ${this._wfcNumField(l,"ss_icon_size","Icon size","px",d.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",d.ss_icon_color,z=>this._wfcSetSecField(l,"ss_icon_color",z.target.value))}
                    `:F}

                ${this._wfcTextControls(l,"time","Time text",13)}
                ${this._wfcTextControls(l,"caption","Sunrise / sunset caption",11)}
              `:F}

          ${S?F:this._wfcSectionStyles(l,d)}
        </div>
    `};let F7={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};j._wfcPlainNum=function(l,m,d){return this._wfcPlainSlider(l,"px",m,16,"_size",d)},j._wfcDetailRows=function(l){return l.details.items.map((d,f,x)=>{let S=i[d.key]||{};return w`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${d.icon||S.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${S.label||d.key}</span>
            <ha-icon class="wsfc-ico-btn ${f===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${Z=>{Z.preventDefault(),Z.stopPropagation(),this._wfcMoveDetail(d.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${f===x.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${Z=>{Z.preventDefault(),Z.stopPropagation(),this._wfcMoveDetail(d.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${d.show?"mdi:eye":"mdi:eye-off"} title=${d.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${Z=>{Z.preventDefault(),Z.stopPropagation(),this._wfcToggleDetailShow(d.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${S.icon||""}
              .value=${d.icon||""}
              @value-changed=${Z=>this._wfcSetDetail(d.key,"icon",Z)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${Z=>this._wfcSetDetailValue(d.key,"mode",Z.target.value)}>
                <option value="global" ?selected=${d.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${d.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${d.mode==="custom"?w`
                  ${this._wfcPlainNum("Icon size (px)",d.icon_size,Z=>this._wfcSetDetail(d.key,"icon_size",Z))}
                  ${this._wfcPlainNum("Text size (px)",d.text_size,Z=>this._wfcSetDetail(d.key,"text_size",Z))}
                  ${this._wfcColorField("Icon color",d.icon_color,Z=>this._wfcSetDetail(d.key,"icon_color",Z))}
                  ${this._wfcColorField("Text color",d.text_color,Z=>this._wfcSetDetail(d.key,"text_color",Z))}
                `:F}
          </div>
        </details>
      `})};let E7=["current","details","hourly","daily","sun_arc","sun_position"];function B7(l){let m=E7.filter(f=>l.includes(f)),d=l.filter(f=>!E7.includes(f));return[...m,...d]}j._wfcEditor=function(){let l=L2(this._config),m=B7(l.order),d=l.order.map((x,S,Z)=>{let T=!!(l[x]&&l[x].show);return w`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${F7[x]||T7.options}></ha-icon>
          <span class="wsfc-order-name">${C[x]||x}</span>
          <ha-icon class="wsfc-ico-btn ${S===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(x,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${S===Z.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(x,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${T?"mdi:eye":"mdi:eye-off"} title=${T?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(x)}></ha-icon>
        </div>
      `}),f=m.map(x=>w`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${F7[x]||T7.options}></ha-icon><span class="wsfc-panel-title">${C[x]||x}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(x,l)}
          </div>
        </details>
      `);return w`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${T7.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${d}
        </div>
      </details>
      ${f}
      ${this._wfcClockPanel(l)}
    `};let R7=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];j._wfcClockPanel=function(l){let m="current",d=l.current||{},f=S=>S==="above"?"above-center":S==="below"?"below-center":S,x=d.clock_show_time!==!1;return w`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",x,S=>this._wfcToggleSecField(m,"clock_show_time",S))}
                ${x?w`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",R7,f(d.clock_placement),"right")}
                        ${this._wfcSelect(m,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",d.clock_show_seconds,S=>this._wfcToggleSecField(m,"clock_show_seconds",S))}
                      <div class="wsfc-row">
                        ${this._wfcNumField(m,"clock_font_size","Size","px",d.clock_font_size,28)}
                        ${this._wfcSelect(m,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],d.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",d.clock_color,S=>this._wfcSetSecField(m,"clock_color",S.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${d.clock_font_family||""}
                          @change=${S=>this._wfcSetSecField(m,"clock_font_family",S.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(m,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_contrast,"none")}`:F}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",d.clock_show_date,S=>this._wfcToggleSecField(m,"clock_show_date",S))}
                ${d.clock_show_date?w`
                      ${this._wfcSelect(m,"clock_date_format","Date format",p2.map(S=>({value:S.value,label:S.label})),d.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...R7],d.clock_date_placement==="above"||d.clock_date_placement==="below"?f(d.clock_date_placement):d.clock_date_placement,"with_time")}
                        ${this._wfcNumField(m,"clock_date_font_size","Size","px",d.clock_date_font_size,12)}
                        ${this._wfcColorField("Date color",d.clock_date_color,S=>this._wfcSetSecField(m,"clock_date_color",S.target.value))}
                      </div>
                      ${this._wfcSelect(m,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_date_contrast!=null?d.clock_date_contrast:d.clock_contrast,"none")}`:F}
        </div>
      </details>
    `},j._wfcYamlPanel=function(){let l;try{l=o1(this._config)}catch{l="# (unable to render YAML)"}return w`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${l}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r})();var Ae="wsfc-flex-core";customElements.get(Ae)||customElements.define(Ae,S2);var o8=r=>r&&typeof r=="object"&&!Array.isArray(r);function _0(r,t){if(!o8(t))return t===void 0?r:t;let e={...o8(r)?r:{}};for(let C of Object.keys(t))e[C]=o8(t[C])&&o8(e[C])?_0(e[C],t[C]):t[C];return e}var H3=class{constructor(){this.el=null,this._json=""}update(t,e){let C=JSON.stringify(t);if(this.el||(this.el=document.createElement(Ae)),C!==this._json){this._json=C;try{this.el.setConfig(t)}catch(i){console.error("weather-station-flex-card: invalid section config",i,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};_2.register(f0,H5,y5,J0);var H8=[PH,EH];function z3(r,t){let e=String(r).trim(),C=/^#([0-9a-f]{3})$/i.exec(e);if(C)return z3("#"+C[1].split("").map(i=>i+i).join(""),t);if(C=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),C){let i=parseInt(C[1],16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${t})`}if(C=/^rgba?\(([^)]+)\)$/i.exec(e),C){let[i,H,V]=C[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${i},${H},${V},${t})`}return e}function Xu(r,t){let e=r>48,C=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return i=>C.format(new Date(i))}function Ju(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return C=>C.length?e.format(new Date(C[0].parsed.x)):""}function V8(r,t,e){let C=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",i="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:Ju(t,e)}}},scales:{x:{type:"linear",grid:{color:i},ticks:{color:C,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:Xu(t,e)}}},_text:C,_grid:i}}var t0=e2`
  :host {
    display: flex;
    flex-direction: column;
    min-height: 0;
    height: 100%;
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
`,a8=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function b7(r,t,e,C){return w`<div class="seg" role="group" aria-label=${C}>
    ${r.map(i=>w`<button type="button" aria-pressed=${String(i.value===t)} @click=${()=>e(i.value)}>${i.label}</button>`)}
  </div>`}function S0(r,{label:t,value:e,unit:C,digits:i=0,color:H,entity:V}){let n=()=>V&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:V},bubbles:!0,composed:!0}));return w`<div class="reading" @click=${n} role=${V?"button":F} tabindex=${V?0:F}
    @keydown=${s=>(s.key==="Enter"||s.key===" ")&&n()}>
    <span class="v">${a8(e,i)}<small>${C||""}</small></span>
    <span class="l">${H?w`<span class="dot" style="background:${H}"></span>`:F}${t}</span>
  </div>`}var n8=S2.prototype,tm=(r,t)=>({config:r,hass:t,_wfcSources:n8._wfcSources,_wfcSlotEntityForKey:n8._wfcSlotEntityForKey,_wfcMetricEntityChain:n8._wfcMetricEntityChain});function HV(r,t,e){return!r||!t?[]:n8._wfcMetricEntityChain.call(tm(r,t),e)}function em(r,t,e){return HV(r,t,e).find(C=>!C.startsWith("weather."))||null}function F5(r,t,e){for(let C of HV(r,t,e)){let i=t.states[C];if(i){if(C.startsWith("weather.")){let H=i.attributes?.[e];if(H!=null&&H!=="")return{value:Number(H),unit:rm(i,e),entity:C}}else if(!["unknown","unavailable",""].includes(i.state)){let H=Number(i.state);return{value:isNaN(H)?i.state:H,unit:i.attributes?.unit_of_measurement||"",entity:C}}}}return null}function rm(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function V3(r,t,e,C,i=C){return r?.entities?.[i]||em(t,e,C)}var VV=new Map;async function aV(r,t){let e=VV.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let C=await t();return VV.set(r,{at:Date.now(),data:C}),C}var Cm=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function L8(r,t,e){let C=[...new Set(t.filter(Boolean))].sort();if(!C.length||!r?.callWS)return Promise.resolve({});let i=new Date,H=new Date(i.getTime()-e*36e5);return aV(`h|${e}|${C.join(",")}`,async()=>{let V=await r.callWS({type:"history/history_during_period",start_time:H.toISOString(),end_time:i.toISOString(),entity_ids:C,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),n={};for(let s of C)n[s]=(V?.[s]||[]).map(c=>({t:Math.round((c.lu??c.lc??0)*1e3),v:Cm(c.s)}));return n})}function nV(r,t,e,C){let i=[...new Set(t.filter(Boolean))].sort();if(!i.length||!r?.callWS)return Promise.resolve({});let H=new Date,V=new Date(H.getTime()-e*864e5);return aV(`s|${e}|${C}|${i.join(",")}`,async()=>{let n=await r.callWS({type:"recorder/statistics_during_period",start_time:V.toISOString(),end_time:H.toISOString(),statistic_ids:i,period:C,types:["mean","min","max"]}),s={};for(let c of i)s[c]=(n?.[c]||[]).map(u=>({t:typeof u.start=="number"?u.start:Date.parse(u.start),mean:u.mean??null,min:u.min??null,max:u.max??null}));return s})}function K4(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),C=[];for(let i=0;i<r.length;i+=e){let H=r.slice(i,i+e),V=H.map(n=>n.v).filter(n=>n!=null);C.push({t:H[Math.floor(H.length/2)].t,v:V.length?V.reduce((n,s)=>n+s,0)/V.length:null})}return C}var fe=[{value:"24h",label:"24h",hours:24},{value:"7d",label:"7d",hours:168},{value:"30d",label:"30d",hours:720}],X4=class extends g1{constructor(){super(),this._range=void 0,this._chart=null,this._loadedKey=""}_ids(){let t=this.config,e=this.station,C=this.hass;return{temperature:V3(t,e,C,"temperature"),dew_point:V3(t,e,C,"dew_point"),humidity:V3(t,e,C,"humidity")}}render(){if(!this.hass)return w``;let t=this._range||this.config?.range||"24h",e=this.station,C=this.hass,i=F5(e,C,"temperature"),H=F5(e,C,"apparent_temperature"),V=F5(e,C,"dew_point"),n=F5(e,C,"humidity");return w`
      <div class="head">
        <ha-icon icon="mdi:thermometer-water"></ha-icon>
        <span class="title">${this.config?.title||"Temperature & Humidity"}</span>
        ${b7(fe,t,s=>this._range=s,"History range")}
      </div>
      <div class="readings">
        ${S0(this,{label:"Temperature",value:i?.value,unit:i?.unit,digits:1,color:"var(--wsfc-temp)",entity:i?.entity})}
        ${H?S0(this,{label:"Feels like",value:H.value,unit:H.unit,digits:1,entity:H.entity}):""}
        ${S0(this,{label:"Dew point",value:V?.value,unit:V?.unit,digits:1,color:"var(--wsfc-dew)",entity:V?.entity})}
        ${S0(this,{label:"Humidity",value:n?.value,unit:n?.unit||"%",color:"var(--wsfc-hum)",entity:n?.entity})}
      </div>
      <div class="body"><canvas aria-label="Temperature, dew point and humidity history"></canvas></div>
      ${this._error?w`<div class="note">${this._error}</div>`:""}
    `}updated(){let t=this._range||this.config?.range||"24h",e=this._ids(),C=`${t}|${e.temperature}|${e.dew_point}|${e.humidity}|${this.hass?.themes?.darkMode}`,i=Date.now()-(this._loadedAt||0)>5*6e4;(C!==this._loadedKey||i)&&(this._loadedKey=C,this._loadedAt=Date.now(),this._load(t,e).catch(H=>{this._error=`History unavailable: ${H?.message||H}`}))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let C=fe.find(V=>V.value===t)||fe[0],i=[e.temperature,e.dew_point,e.humidity],H;if(C.hours<=48){let V=await L8(this.hass,i,C.hours),n=s=>K4(V[s]||[]).map(c=>({x:c.t,y:c.v}));H={temp:n(e.temperature),dew:n(e.dew_point),hum:n(e.humidity)}}else{let V=C.hours>240?"day":"hour",n=await nV(this.hass,i,C.hours/24,V),s=(c,u="mean")=>(n[c]||[]).map(A=>({x:A.t,y:A[u]}));H={temp:s(e.temperature),tmin:s(e.temperature,"min"),tmax:s(e.temperature,"max"),dew:s(e.dew_point),hum:s(e.humidity)}}this._error=void 0,this._draw(C.hours,H)}_draw(t,e){let C=this.renderRoot.querySelector("canvas");if(!C)return;let i=getComputedStyle(this),H=(v,_)=>i.getPropertyValue(v).trim()||_,V=H("--wsfc-temp","#ff9800"),n=H("--wsfc-dew","#26c6da"),s=H("--wsfc-hum","#42a5f5"),c=V8(this,t,this.hass?.locale?.language),u=F5(this.station,this.hass,"temperature")?.unit||"";c.scales.y={position:"left",grid:{color:c._grid},ticks:{color:c._text,callback:v=>`${v}${u}`}},c.scales.h={position:"right",min:0,max:100,grid:{drawOnChartArea:!1},ticks:{color:c._text,callback:v=>`${v}%`,stepSize:25}};let A=[{label:"Temperature",data:e.temp,borderColor:V,yAxisID:"y",order:1},{label:"Dew point",data:e.dew,borderColor:n,borderDash:[5,4],borderWidth:1.5,yAxisID:"y",order:2},{label:"Humidity",data:e.hum,borderColor:z3(s,.7),backgroundColor:z3(s,.13),fill:"origin",borderWidth:1,yAxisID:"h",order:3}];e.tmin&&e.tmax&&(A.push({label:"Temp max",data:e.tmax,borderWidth:0,pointRadius:0,yAxisID:"y",order:4,fill:"+1",backgroundColor:z3(V,.15)},{label:"Temp min",data:e.tmin,borderWidth:0,pointRadius:0,yAxisID:"y",order:5}),c.plugins.tooltip.filter=v=>!v.dataset.label.startsWith("Temp m")),this._chart&&this._chart.destroy(),this._chart=new _2(C,{type:"line",data:{datasets:A},options:c,plugins:H8})}};Q(X4,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),Q(X4,"styles",t0);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",X4);var im=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],LV=r=>r==null||isNaN(r)?"\u2014":im[Math.round((r%360+360)%360/22.5)%16],sV={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},MV=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],J4=class extends g1{_ids(){let t=this.config,e=this.station,C=this.hass;return{speed:V3(t,e,C,"wind_speed"),gust:V3(t,e,C,"wind_gust_speed"),dir:V3(t,e,C,"wind_bearing")}}render(){if(!this.hass)return w``;let t=this._view||this.config?.view||"compass",e=this.station,C=this.hass,i=F5(e,C,"wind_speed"),H=F5(e,C,"wind_gust_speed"),V=F5(e,C,"wind_bearing"),n=i?.unit||H?.unit||"";return w`
      <div class="head">
        <ha-icon icon="mdi:weather-windy"></ha-icon>
        <span class="title">${this.config?.title||"Wind"}</span>
        ${b7([{value:"compass",label:"Compass"},{value:"rose",label:"Rose 24h"}],t,s=>this._view=s,"Wind view")}
      </div>
      <div class="top">
        <div class="dial">${t==="rose"?this._roseSvg(n):this._compassSvg(i?.value,n,V?.value)}</div>
        <div class="side">
          <div class="readings">
            ${S0(this,{label:"Speed",value:i?.value,unit:n,digits:1,color:"var(--wsfc-wind)",entity:i?.entity})}
            ${S0(this,{label:"Gust",value:H?.value,unit:H?.unit||n,digits:1,color:"var(--wsfc-gust)",entity:H?.entity})}
            ${S0(this,{label:`From ${LV(V?.value)}`,value:V?.value,unit:"\xB0",entity:V?.entity})}
          </div>
          ${t==="rose"?this._roseLegend(n):""}
        </div>
      </div>
      <div class="body"><canvas aria-label="Wind speed and gust history"></canvas></div>
      ${this._error?w`<div class="note">${this._error}</div>`:""}
    `}_compassSvg(t,e,C){let i=[];for(let n=0;n<72;n++){let s=n*5*Math.PI/180,c=n%18===0,u=n%6===0,A=c?78:u?82:85;i.push(R1`<line class="tick" x1=${100+Math.sin(s)*A} y1=${100-Math.cos(s)*A} x2=${100+Math.sin(s)*88} y2=${100-Math.cos(s)*88} stroke-width=${c?2:1}></line>`)}let H=[["N",0],["E",90],["S",180],["W",270]].map(([n,s])=>R1`<text class="lbl ${n==="N"?"n":""}" x=${100+Math.sin(s*Math.PI/180)*66} y=${100-Math.cos(s*Math.PI/180)*66}>${n}</text>`),V=Number.isFinite(C)?C:null;return R1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${LV(V)} at ${a8(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${i}${H}
      ${V==null?"":R1`<g class="ptr" style=${`transform: rotate(${V}deg); transform-origin: 100px 100px`}>
        <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
      </g>`}
      <text class="spd" x="100" y="104">${a8(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||sV[t]||sV.mph}_roseLegend(t){let e=this._bins(t),C=e.map((i,H)=>H<e.length-1?`${i}\u2013${e[H+1]}`:`${i}+`);return w`<div class="legend">${C.map((i,H)=>w`<span><i style="background:${MV[H+1]}"></i>${i}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return R1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let C=Math.max(...e.sectors.map(s=>s.reduce((c,u)=>c+u,0)),1e-4),i=84,H=[];e.sectors.forEach((s,c)=>{let u=0;s.forEach((A,v)=>{if(!A)return;let _=u+A;H.push(R1`<path d=${om(100,100,u/C*i,_/C*i,c*22.5-10,c*22.5+10)} fill=${MV[v]} opacity="0.9"></path>`),u=_})});let V=[.25,.5,.75,1].map(s=>R1`<circle class="ring" cx="100" cy="100" r=${i*s} stroke-dasharray="2 3"></circle>`),n=[["N",0],["E",90],["S",180],["W",270]].map(([s,c])=>R1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(c*Math.PI/180)*95} y=${100-Math.cos(c*Math.PI/180)*95}>${s}</text>`);return R1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${V}${H}${n}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(C*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(C=>this._error=`History unavailable: ${C?.message||C}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await L8(this.hass,[t.speed,t.gust,t.dir],24),C=F5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=Hm(e[t.dir]||[],e[t.speed]||[],this._bins(C)),this._error=void 0,this._pendingDraw={speed:K4(e[t.speed]||[]).map(i=>({x:i.t,y:i.v})),gust:K4(e[t.gust]||[]).map(i=>({x:i.t,y:i.v})),unit:C},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let C=getComputedStyle(this),i=C.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",H=C.getPropertyValue("--wsfc-gust").trim()||"#ff9800",V=V8(this,24,this.hass?.locale?.language);V.scales.y={min:0,grid:{color:V._grid},ticks:{color:V._text,callback:s=>`${s} ${t.unit}`,maxTicksLimit:4}};let n=[{label:"Gust",data:t.gust,borderColor:H,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:i,backgroundColor:z3(i,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new _2(e,{type:"line",data:{datasets:n},options:V,plugins:H8})}};Q(J4,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),Q(J4,"styles",[t0,e2`
      .top { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
      .dial { flex: 0 0 auto; width: min(200px, 46%); aspect-ratio: 1; }
      .dial svg { width: 100%; height: 100%; overflow: visible; }
      .side { flex: 1; min-width: 140px; display: flex; flex-direction: column; gap: 10px; }
      .legend { display: flex; flex-wrap: wrap; gap: 4px 10px; font-size: 11px; color: var(--wsfc-muted); }
      .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
      .body { min-height: 120px; margin-top: 8px; }
      .ring { fill: none; stroke: var(--divider-color, rgba(127,127,127,.35)); }
      .tick { stroke: var(--secondary-text-color); opacity: .5; }
      .lbl { fill: var(--secondary-text-color); font-size: 11px; text-anchor: middle; dominant-baseline: central; }
      .lbl.n { fill: var(--primary-text-color); font-weight: 600; }
      .spd { fill: var(--primary-text-color); font-size: 26px; font-weight: 500; text-anchor: middle; }
      .unit { fill: var(--secondary-text-color); font-size: 11px; text-anchor: middle; }
      .ptr { fill: var(--wsfc-wind); transition: transform .8s ease; }
    `]);function om(r,t,e,C,i,H){let V=(y,k)=>[r+Math.sin(k*Math.PI/180)*y,t-Math.cos(k*Math.PI/180)*y],[n,s]=V(C,i),[c,u]=V(C,H),[A,v]=V(e,H),[_,b]=V(e,i);return`M${n} ${s} A${C} ${C} 0 0 1 ${c} ${u} L${A} ${v} A${e} ${e} 0 0 0 ${_} ${b} Z`}function Hm(r,t,e){let C=r.filter(c=>c.v!=null),i=t.filter(c=>c.v!=null),H=Array.from({length:16},()=>new Array(e.length+1).fill(0)),V=0,n=0,s=0;for(let c=0;c<C.length;c++){let u=C[c].t,A=Math.min((C[c+1]?.t??Date.now())-u,30*6e4);if(A<=0)continue;for(;s+1<i.length&&i[s+1].t<=u;)s++;let v=i[s]?.t<=u?i[s].v:i[0]?.v??0;if(V+=A,v<e[0]){n+=A;continue}let _=e.findIndex(y=>v<y);_===-1&&(_=e.length);let b=Math.round((C[c].v%360+360)%360/22.5)%16;H[b][_]+=A}return V?{sectors:H.map(c=>c.map(u=>u/V)),calm:n/V}:{sectors:H,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",J4);var lV=`/* required styles */\r
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
`;var am="https://api.rainviewer.com/public/weather-maps.json",nm=7,Lm=600,sm=1800,Mm=5*6e4,N3=null,lm=async()=>N3||(N3=(await Promise.resolve().then(()=>b9(dV(),1))).default),cm={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp"},t9=class extends g1{constructor(){super();Q(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}render(){let e=this.config?.owm_api_key,C=this.config?.owm_layers||["wind_new"],i=this._overlay??this.config?.owm_default??"none";return w`
      <div class="head">
        <ha-icon icon="mdi:radar"></ha-icon>
        <span class="title">${this.config?.title||"Radar"}</span>
        ${e?b7([{value:"none",label:"Radar"},...C.map(H=>({value:H,label:`+ ${cm[H]||H}`}))],i,H=>this._setOverlay(H),"Map overlay"):""}
      </div>
      <div class="map"><div id="map"></div></div>
      <div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"}>
          ${this._playing?"\u275A\u275A Pause":"\u25B6 Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel||""}</span>
        <span class="spacer"></span>
        ${this._error?w`<span class="note">${this._error}</span>`:""}
      </div>
    `}async firstUpdated(){await lm();let e=this.renderRoot.getElementById("map");if(!e||this._map)return;let C=this.config?.latitude??this.hass?.config?.latitude??39.5,i=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=N3.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([C,i],this.config?.zoom??7),this._base=null,this._applyBase(),N3.circleMarker([C,i],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),Mm),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&this.firstUpdated()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config?.base_map_url||`https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_${this._dark?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,C=this.config?.base_map_url?this.config?.base_map_attribution||"":"Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors";this._base=N3.tileLayer(e,{maxZoom:16,attribution:C}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(am);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let C=await e.json(),i=[...C.radar?.past||[],...C.radar?.nowcast||[]];if(!i.length||!this._map)return;let H=new Map(this._frames.map(V=>[V.path,V]));this._frames=i.map(V=>{let n=H.get(V.path);if(n)return H.delete(V.path),n;let s=N3.tileLayer(`${C.host}${V.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:nm,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...V,layer:s,nowcast:(C.radar?.nowcast||[]).includes(V)}}),H.forEach(V=>this._map.removeLayer(V.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let C=this.config?.radar_opacity??.75;this._frames.forEach((H,V)=>H.layer.setOpacity(V===e?C:0));let i=this._frames[e];if(i){let H=new Date(i.time*1e3),V=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(H);this._frameLabel=i.nowcast?`${V} (forecast)`:V}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?sm:Lm)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let C=this.config?.owm_api_key;!C||e==="none"||!this._map||(this._owm=N3.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(C)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};Q(t9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),Q(t9,"styles",[t0,n0(lV),e2`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",t9);var e9=class extends g1{constructor(){super(),this._slot=new H3}_coreConfig(){let t={entity:this.station?.entity,metric_sources:this.station?.metric_sources,forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}};return _0(t,this.config?.flex||{})}render(){return this.hass?w`
      <div class="head"><ha-icon icon="mdi:calendar-week"></ha-icon><span class="title">${this.config?.title||"Forecast"}</span></div>
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
    `:w``}};Q(e9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Q(e9,"styles",[t0,e2`
      .core { margin: 0 -4px; }
      .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
    `]);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",e9);var C9=b9(Q9(),1);var dm=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],pm=r=>dm.find(([t])=>r<t)[1],r9=class extends g1{constructor(){super(),this._slot=new H3}_coreConfig(){let t={entity:this.station?.entity,metric_sources:this.station?.metric_sources,wfc:{order:["sun_arc","sun_position"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,night_moon:!0,show_ss_icons:!0,height:100},sun_position:{show:!0,height:28,timeframe_mode:"day",ss_markers_position:"overlay",times_position:"below"}}};return _0(t,this.config?.flex||{})}render(){if(!this.hass)return w``;let t=this._slot.update(this._coreConfig(),this.hass);return w`
      <div class="head"><ha-icon icon="mdi:weather-sunset"></ha-icon><span class="title">${this.config?.title||"Sun & Moon"}</span></div>
      <div class="core">${t}</div>
      ${this.config?.show_moon===!1?"":this._moon()}
    `}_moon(){let t=new Date,{latitude:e,longitude:C}=this.hass.config||{},i=C9.getMoonIllumination(t),H=e!=null?C9.getMoonTimes(t,e,C):{},V=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),n=u=>u?V.format(u):"\u2014",s=null;for(let u=6;u<744;u+=6){let A=new Date(t.getTime()+u*36e5),v=C9.getMoonIllumination(A).phase;if(Math.abs(v-.5)<.012){s=A;break}}let c=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"short",month:"short",day:"numeric"});return w`<div class="moon">
      ${um(i.phase)}
      <div class="facts">
        <span class="name">${pm(i.phase)}</span>
        <span>Illumination</span><span>${Math.round(i.fraction*100)}%</span>
        <span>Moonrise</span><span>${H.alwaysUp?"up all day":H.alwaysDown?"down all day":n(H.rise)}</span>
        <span>Moonset</span><span>${n(H.set)}</span>
        ${s?w`<span>Next full</span><span>${c.format(s)}</span>`:""}
      </div>
    </div>`}};Q(r9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Q(r9,"styles",[t0,e2`
      .core { margin: 0 -4px; }
      .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
      .moon { display: flex; align-items: center; gap: 14px; margin-top: 10px; }
      .moon svg { width: 52px; height: 52px; flex: 0 0 auto; }
      .moon .facts { display: grid; grid-template-columns: auto auto; gap: 2px 14px; font-size: 13px; }
      .moon .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .moon .name { font-size: 16px; font-weight: 500; grid-column: 1 / -1; color: var(--primary-text-color) !important; }
    `]);function um(r){let C=r<.5,i=Math.cos(r*2*Math.PI),H=Math.abs(i)*24,V=C?1:0,n=`M26 2 A24 24 0 0 ${V} 26 50 A${H} 24 0 0 ${i>0?1-V:V} 26 2 Z`;return R1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${n} fill="#e9e6d6"></path>
  </svg>`}customElements.get("wsfc-panel-sun-moon")||customElements.define("wsfc-panel-sun-moon",r9);var mm={temp_humidity:"wsfc-panel-temp-humidity",wind:"wsfc-panel-wind",radar:"wsfc-panel-radar",forecast:"wsfc-panel-forecast",sun_moon:"wsfc-panel-sun-moon"},hm=720,Am={show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details","sun_position"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!0,height:30,timeframe_mode:"hours",timeframe_hours:24,ss_markers_position:"overlay",times_position:"below",forecast_icons:"above",forecast_temps:"above",forecast_temp_with_icon:!0,forecast_every:3},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},fm={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},vm={wfc:{current:{clock_placement:"above-right",clock_font_size:28,clock_date_font_size:12,header_temp_size:0,header_state_size:0,header_icon_size:0}}},xm=Ar.map(r=>({type:r})),i9=class extends g1{static getStubConfig(t){let e=Object.keys(t?.states||{}).find(H=>H.startsWith("weather.")),C=Object.values(t?.devices||{}).find(H=>/ecowitt/i.test(H.manufacturer||"")),i=[];return C&&i.push({ref:`device:${C.id}`}),e&&i.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:i},layout:"auto"}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=(Array.isArray(t.panels)&&t.panels.length?t.panels:xm).filter(C=>C&&o4[C.type]);this._config={...t,panels:e},this._on=new Set(e.map((C,i)=>C.show===!1?-1:i).filter(C=>C>=0)),(this._tab==null||this._tab>=e.length)&&(this._tab=Math.max(0,e.findIndex(C=>C.show!==!1))),this._focus=null,this._heroSlot||(this._heroSlot=new H3)}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width<(this._config?.narrow_width||hm);e!==this._narrow&&(this._narrow=e)}),this._ro.observe(this),this._onKey=t=>t.key==="Escape"&&this._focus!=null&&(this._focus=null),window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_heroConfig(){let t=this._config.layout==="fullscreen",e=_0(Am,t&&!this._narrow?fm:{});return this._narrow&&(e=_0(e,vm)),e=_0(e,this._config.hero||{}),{...e,entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return F;let t=this._config,e=t.layout==="fullscreen",C=t.hero===!1?null:this._heroSlot.update(this._heroConfig(),this.hass),i=[t.panel_min_width?`--wsfc-panel-min:${t.panel_min_width}px`:""].join(";");return w`
      <ha-card class=${`wsfc ${e?"full":""} ${this._narrow?"narrow":"wide"}`} style=${i}>
        ${C?w`<div class="hero">${C}</div>`:F}
        ${t.panel_bar===!1?F:this._renderBar()}
        <div class="panels">${this._renderPanels()}</div>
      </ha-card>
    `}_renderBar(){let t=this._config.panels;return w`<div class="bar" role=${this._narrow?"tablist":"toolbar"} aria-label="Panels">
      ${t.map((e,C)=>{let i=o4[e.type],H=this._narrow?this._tab===C:this._on.has(C);return w`<button
          type="button"
          class="chip ${H?"on":""}"
          role=${this._narrow?"tab":F}
          aria-selected=${this._narrow?String(H):F}
          aria-pressed=${this._narrow?F:String(H)}
          @click=${()=>this._toggle(C)}
        >
          <ha-icon icon=${e.icon||i.icon}></ha-icon><span>${e.title||i.label}</span>
        </button>`})}
    </div>`}_toggle(t){if(this._focus=null,this._narrow){this._tab=t;return}let e=new Set(this._on);e.has(t)?e.delete(t):e.add(t),this._on=e}_renderPanels(){let t=this._config.panels,e;return this._focus!=null?e=[this._focus]:this._narrow?e=[this._tab]:e=t.map((C,i)=>i).filter(C=>this._on.has(C)),e.length?e.map(C=>{let i=t[C],H=this._focus==null&&!this._narrow&&i.span?`grid-column: span ${i.span}`:"";return w`<section class="tile ${i.type}" style=${H} data-type=${i.type}>
        ${this._narrow?F:w`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?C:null}
              aria-label=${this._focus==null?`Expand ${o4[i.type].label}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`}
        ${this._panelEl(i,C)}
      </section>`}):w`<div class="empty">All panels are hidden — tap a panel above to show it.</div>`}_panelEl(t,e){this._panelEls||(this._panelEls=new Map);let C=`${e}:${t.type}`,i=this._panelEls.get(C);return i||(i=document.createElement(mm[t.type]),this._panelEls.set(C,i)),i.config=t,i.station=this._station,i.hass=this.hass,i}};Q(i9,"properties",{hass:{attribute:!1},_config:{state:!0},_on:{state:!0},_tab:{state:!0},_focus:{state:!0},_narrow:{state:!0}}),Q(i9,"styles",e2`
    :host {
      display: block;
      --wsfc-gap: 12px;
      --wsfc-radius: var(--ha-card-border-radius, 16px);
      --wsfc-tile-bg: var(--wsfc-panel-background, rgba(127, 127, 127, 0.08));
    }
    ha-card.wsfc {
      display: flex;
      flex-direction: column;
      gap: var(--wsfc-gap);
      padding: var(--wsfc-gap);
      overflow: hidden;
      box-sizing: border-box;
    }
    ha-card.full {
      /* Fill the view below the dashboard header. */
      height: calc(100vh - var(--header-height, 56px) - 16px);
      height: calc(100dvh - var(--header-height, 56px) - 16px);
      min-height: 560px;
    }
    .hero {
      position: relative;
      border-radius: var(--wsfc-radius);
      overflow: hidden;
      flex: 0 0 auto;
    }
    /* Weather Flex sizes its card to its sections (height:auto), so the hero
       grows with its content and the panels take the remaining height. */
    .hero > * { display: block; height: 100%; --ha-card-border-radius: var(--wsfc-radius); --ha-card-box-shadow: none; }

    .bar { display: flex; gap: 8px; flex-wrap: wrap; flex: 0 0 auto; }
    .narrow .bar { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
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
    .chip.on { color: var(--text-primary-color, #fff); background: var(--primary-color); border-color: var(--primary-color); }
    .chip:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }

    .panels {
      display: grid;
      gap: var(--wsfc-gap);
      grid-template-columns: repeat(auto-fit, minmax(var(--wsfc-panel-min, 340px), 1fr));
      grid-auto-rows: minmax(320px, auto);
      min-height: 0;
    }
    .full .panels { flex: 1; overflow: auto; align-content: start; }
    .narrow .panels { grid-template-columns: 1fr; }
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg);
      border-radius: var(--wsfc-radius);
      padding: 12px 14px;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .tile > :not(.expand) { flex: 1; min-height: 0; }
    .expand {
      position: absolute; top: 8px; right: 8px; z-index: 2;
      border: 0; background: transparent; color: var(--secondary-text-color);
      cursor: pointer; padding: 4px; border-radius: 50%; line-height: 0;
    }
    .expand ha-icon { --mdc-icon-size: 18px; }
    .tile .expand ~ * { --wsfc-head-pad: 28px; }
    .empty { color: var(--secondary-text-color); padding: 24px; text-align: center; grid-column: 1 / -1; }
  `);customElements.get(i4)||customElements.define(i4,i9);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===i4)||window.customCards.push({type:i4,name:`${I8} (Ltek)`,description:"Full-screen weather station dashboard: animated hero, Temp & Humidity, Wind, Radar, Forecast and Sun & Moon panels.",preview:!1});console.info(`%c${I8.toUpperCase()}%c ${hr}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");
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
