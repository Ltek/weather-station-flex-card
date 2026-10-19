/* weather-station-flex-card 2026.10.19.3 — https://github.com/Ltek/weather-station-flex-card */
var pn=Object.create;var q9=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var un=Object.getOwnPropertyNames;var mn=Object.getPrototypeOf,hn=Object.prototype.hasOwnProperty;var fn=(r,t,e)=>t in r?q9(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var qr=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var An=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let C of un(t))!hn.call(r,C)&&C!==e&&q9(r,C,{get:()=>t[C],enumerable:!(i=Gr(t,C))||i.enumerable});return r};var Y9=(r,t,e)=>(e=r!=null?pn(mn(r)):{},An(t||!r||!r.__esModule?q9(e,"default",{value:r,enumerable:!0}):e,r));var Y=(r,t,e,i)=>{for(var C=i>1?void 0:i?Gr(t,e):t,a=r.length-1,H;a>=0;a--)(H=r[a])&&(C=(i?H(t,e,C):H(C))||C);return i&&C&&q9(t,e,C),C};var W=(r,t,e)=>fn(r,typeof t!="symbol"?t+"":t,e);var h6=qr((so,Tt)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,C=Math.asin,a=Math.atan2,H=Math.acos,n=r/180,s=1e3*60*60*24,M=2440588,p=2451545;function h(U){return U.valueOf()/s-.5+M}function v(U){return new Date((U+.5-M)*s)}function g(U){return h(U)-p}var Z=n*23.4397;function y(U,J){return a(t(U)*e(Z)-i(J)*t(Z),e(U))}function k(U,J){return C(t(J)*e(Z)+e(J)*t(Z)*t(U))}function F(U,J,H1){return a(t(U),e(U)*t(J)-i(H1)*e(J))}function D(U,J,H1){return C(t(J)*t(H1)+e(J)*e(H1)*e(U))}function B(U,J){return n*(280.16+360.9856235*U)-J}function K(U){return U<0&&(U=0),2967e-7/Math.tan(U+.00312536/(U+.08901179))}function Q(U){return n*(357.5291+.98560028*U)}function c1(U){var J=n*(1.9148*t(U)+.02*t(2*U)+3e-4*t(3*U)),H1=n*102.9372;return U+J+H1+r}function s1(U){var J=Q(U),H1=c1(J);return{dec:k(H1,0),ra:y(H1,0)}}var r1={};r1.getPosition=function(U,J,H1){var u1=n*-H1,V1=n*J,n1=g(U),_1=s1(n1),k1=B(n1,u1)-_1.ra;return{azimuth:F(k1,V1,_1.dec),altitude:D(k1,V1,_1.dec)}};var o1=r1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];r1.addTime=function(U,J,H1){o1.push([U,J,H1])};var f1=9e-4;function I1(U,J){return Math.round(U-f1-J/(2*r))}function y1(U,J,H1){return f1+(U+J)/(2*r)+H1}function s2(U,J,H1){return p+U+.0053*t(J)-.0069*t(2*H1)}function G1(U,J,H1){return H((t(U)-t(J)*t(H1))/(e(J)*e(H1)))}function O1(U){return-2.076*Math.sqrt(U)/60}function X(U,J,H1,u1,V1,n1,_1){var k1=G1(U,H1,u1),c2=y1(k1,J,V1);return s2(c2,n1,_1)}r1.getTimes=function(U,J,H1,u1){u1=u1||0;var V1=n*-H1,n1=n*J,_1=O1(u1),k1=g(U),c2=I1(k1,V1),m2=y1(0,V1,c2),w2=Q(m2),L2=c1(w2),L1=k(L2,0),Y2=s2(m2,w2,L2),D2,M5,Z2,h2,i5,C5,Q1={solarNoon:v(Y2),nadir:v(Y2-.5)};for(D2=0,M5=o1.length;D2<M5;D2+=1)Z2=o1[D2],h2=(Z2[0]+_1)*n,i5=X(h2,V1,n1,L1,c2,w2,L2),C5=Y2-(i5-Y2),Q1[Z2[1]]=v(C5),Q1[Z2[2]]=v(i5);return Q1};function q1(U){var J=n*(218.316+13.176396*U),H1=n*(134.963+13.064993*U),u1=n*(93.272+13.22935*U),V1=J+n*6.289*t(H1),n1=n*5.128*t(u1),_1=385001-20905*e(H1);return{ra:y(V1,n1),dec:k(V1,n1),dist:_1}}r1.getMoonPosition=function(U,J,H1){var u1=n*-H1,V1=n*J,n1=g(U),_1=q1(n1),k1=B(n1,u1)-_1.ra,c2=D(k1,V1,_1.dec),m2=a(t(k1),i(V1)*e(_1.dec)-t(_1.dec)*e(k1));return c2=c2+K(c2),{azimuth:F(k1,V1,_1.dec),altitude:c2,distance:_1.dist,parallacticAngle:m2}},r1.getMoonIllumination=function(U){var J=g(U||new Date),H1=s1(J),u1=q1(J),V1=149598e3,n1=H(t(H1.dec)*t(u1.dec)+e(H1.dec)*e(u1.dec)*e(H1.ra-u1.ra)),_1=a(V1*t(n1),u1.dist-V1*e(n1)),k1=a(e(H1.dec)*t(H1.ra-u1.ra),t(H1.dec)*e(u1.dec)-e(H1.dec)*t(u1.dec)*e(H1.ra-u1.ra));return{fraction:(1+e(_1))/2,phase:.5+.5*_1*(k1<0?-1:1)/Math.PI,angle:k1}};function a1(U,J){return new Date(U.valueOf()+J*s/24)}r1.getMoonTimes=function(U,J,H1,u1){var V1=new Date(U);u1?V1.setUTCHours(0,0,0,0):V1.setHours(0,0,0,0);for(var n1=.133*n,_1=r1.getMoonPosition(V1,J,H1).altitude-n1,k1,c2,m2,w2,L2,L1,Y2,D2,M5,Z2,h2,i5,C5,Q1=1;Q1<=24&&(k1=r1.getMoonPosition(a1(V1,Q1),J,H1).altitude-n1,c2=r1.getMoonPosition(a1(V1,Q1+1),J,H1).altitude-n1,L2=(_1+c2)/2-k1,L1=(c2-_1)/2,Y2=-L1/(2*L2),D2=(L2*Y2+L1)*Y2+k1,M5=L1*L1-4*L2*k1,Z2=0,M5>=0&&(C5=Math.sqrt(M5)/(Math.abs(L2)*2),h2=Y2-C5,i5=Y2+C5,Math.abs(h2)<=1&&Z2++,Math.abs(i5)<=1&&Z2++,h2<-1&&(h2=i5)),Z2===1?_1<0?m2=Q1+h2:w2=Q1+h2:Z2===2&&(m2=Q1+(D2<0?i5:h2),w2=Q1+(D2<0?h2:i5)),!(m2&&w2));Q1+=2)_1=c2;var f2={};return m2&&(f2.rise=a1(V1,m2)),w2&&(f2.set=a1(V1,w2)),!m2&&!w2&&(f2[D2>0?"alwaysUp":"alwaysDown"]=!0),f2},typeof so=="object"&&typeof Tt<"u"?Tt.exports=r1:typeof define=="function"&&define.amd?define(r1):window.SunCalc=r1})()});var AV=qr((N8,fV)=>{(function(r,t){typeof N8=="object"&&typeof fV<"u"?t(N8):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(N8,(function(r){"use strict";var t="1.9.4";function e(o){var V,l,u,f;for(l=1,u=arguments.length;l<u;l++){f=arguments[l];for(V in f)o[V]=f[V]}return o}var i=Object.create||(function(){function o(){}return function(V){return o.prototype=V,new o}})();function C(o,V){var l=Array.prototype.slice;if(o.bind)return o.bind.apply(o,l.call(arguments,1));var u=l.call(arguments,2);return function(){return o.apply(V,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function H(o){return"_leaflet_id"in o||(o._leaflet_id=++a),o._leaflet_id}function n(o,V,l){var u,f,_,T;return T=function(){u=!1,f&&(_.apply(l,f),f=!1)},_=function(){u?f=arguments:(o.apply(l,arguments),setTimeout(T,V),u=!0)},_}function s(o,V,l){var u=V[1],f=V[0],_=u-f;return o===u&&l?o:((o-f)%_+_)%_+f}function M(){return!1}function p(o,V){if(V===!1)return o;var l=Math.pow(10,V===void 0?6:V);return Math.round(o*l)/l}function h(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function v(o){return h(o).split(/\s+/)}function g(o,V){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?i(o.options):{});for(var l in V)o.options[l]=V[l];return o.options}function Z(o,V,l){var u=[];for(var f in o)u.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(o[f]));return(!V||V.indexOf("?")===-1?"?":"&")+u.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function k(o,V){return o.replace(y,function(l,u){var f=V[u];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(V)),f})}var F=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function D(o,V){for(var l=0;l<o.length;l++)if(o[l]===V)return l;return-1}var B="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function K(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var Q=0;function c1(o){var V=+new Date,l=Math.max(0,16-(V-Q));return Q=V+l,window.setTimeout(o,l)}var s1=window.requestAnimationFrame||K("RequestAnimationFrame")||c1,r1=window.cancelAnimationFrame||K("CancelAnimationFrame")||K("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function o1(o,V,l){if(l&&s1===c1)o.call(V);else return s1.call(window,C(o,V))}function f1(o){o&&r1.call(window,o)}var I1={__proto__:null,extend:e,create:i,bind:C,get lastId(){return a},stamp:H,throttle:n,wrapNum:s,falseFn:M,formatNum:p,trim:h,splitWords:v,setOptions:g,getParamString:Z,template:k,isArray:F,indexOf:D,emptyImageUrl:B,requestFn:s1,cancelFn:r1,requestAnimFrame:o1,cancelAnimFrame:f1};function y1(){}y1.extend=function(o){var V=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=V.__super__=this.prototype,u=i(l);u.constructor=V,V.prototype=u;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(V[f]=this[f]);return o.statics&&e(V,o.statics),o.includes&&(s2(o.includes),e.apply(null,[u].concat(o.includes))),e(u,o),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,o.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var _=0,T=u._initHooks.length;_<T;_++)u._initHooks[_].call(this)}},V},y1.include=function(o){var V=this.prototype.options;return e(this.prototype,o),o.options&&(this.prototype.options=V,this.mergeOptions(o.options)),this},y1.mergeOptions=function(o){return e(this.prototype.options,o),this},y1.addInitHook=function(o){var V=Array.prototype.slice.call(arguments,1),l=typeof o=="function"?o:function(){this[o].apply(this,V)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function s2(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=F(o)?o:[o];for(var V=0;V<o.length;V++)o[V]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var G1={on:function(o,V,l){if(typeof o=="object")for(var u in o)this._on(u,o[u],V);else{o=v(o);for(var f=0,_=o.length;f<_;f++)this._on(o[f],V,l)}return this},off:function(o,V,l){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var u in o)this._off(u,o[u],V);else{o=v(o);for(var f=arguments.length===1,_=0,T=o.length;_<T;_++)f?this._off(o[_]):this._off(o[_],V,l)}return this},_on:function(o,V,l,u){if(typeof V!="function"){console.warn("wrong listener type: "+typeof V);return}if(this._listens(o,V,l)===!1){l===this&&(l=void 0);var f={fn:V,ctx:l};u&&(f.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(f)}},_off:function(o,V,l){var u,f,_;if(this._events&&(u=this._events[o],!!u)){if(arguments.length===1){if(this._firingCount)for(f=0,_=u.length;f<_;f++)u[f].fn=M;delete this._events[o];return}if(typeof V!="function"){console.warn("wrong listener type: "+typeof V);return}var T=this._listens(o,V,l);if(T!==!1){var E=u[T];this._firingCount&&(E.fn=M,this._events[o]=u=u.slice()),u.splice(T,1)}}},fire:function(o,V,l){if(!this.listens(o,l))return this;var u=e({},V,{type:o,target:this,sourceTarget:V&&V.sourceTarget||this});if(this._events){var f=this._events[o];if(f){this._firingCount=this._firingCount+1||1;for(var _=0,T=f.length;_<T;_++){var E=f[_],$=E.fn;E.once&&this.off(o,$,E.ctx),$.call(E.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(o,V,l,u){typeof o!="string"&&console.warn('"string" type argument expected');var f=V;typeof V!="function"&&(u=!!V,f=void 0,l=void 0);var _=this._events&&this._events[o];if(_&&_.length&&this._listens(o,f,l)!==!1)return!0;if(u){for(var T in this._eventParents)if(this._eventParents[T].listens(o,V,l,u))return!0}return!1},_listens:function(o,V,l){if(!this._events)return!1;var u=this._events[o]||[];if(!V)return!!u.length;l===this&&(l=void 0);for(var f=0,_=u.length;f<_;f++)if(u[f].fn===V&&u[f].ctx===l)return f;return!1},once:function(o,V,l){if(typeof o=="object")for(var u in o)this._on(u,o[u],V,!0);else{o=v(o);for(var f=0,_=o.length;f<_;f++)this._on(o[f],V,l,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[H(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[H(o)],this},_propagateEvent:function(o){for(var V in this._eventParents)this._eventParents[V].fire(o.type,e({layer:o.target,propagatedFrom:o.target},o),!0)}};G1.addEventListener=G1.on,G1.removeEventListener=G1.clearAllEventListeners=G1.off,G1.addOneTimeEventListener=G1.once,G1.fireEvent=G1.fire,G1.hasEventListeners=G1.listens;var O1=y1.extend(G1);function X(o,V,l){this.x=l?Math.round(o):o,this.y=l?Math.round(V):V}var q1=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};X.prototype={clone:function(){return new X(this.x,this.y)},add:function(o){return this.clone()._add(a1(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(a1(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new X(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new X(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=q1(this.x),this.y=q1(this.y),this},distanceTo:function(o){o=a1(o);var V=o.x-this.x,l=o.y-this.y;return Math.sqrt(V*V+l*l)},equals:function(o){return o=a1(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=a1(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function a1(o,V,l){return o instanceof X?o:F(o)?new X(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new X(o.x,o.y):new X(o,V,l)}function U(o,V){if(o)for(var l=V?[o,V]:o,u=0,f=l.length;u<f;u++)this.extend(l[u])}U.prototype={extend:function(o){var V,l;if(!o)return this;if(o instanceof X||typeof o[0]=="number"||"x"in o)V=l=a1(o);else if(o=J(o),V=o.min,l=o.max,!V||!l)return this;return!this.min&&!this.max?(this.min=V.clone(),this.max=l.clone()):(this.min.x=Math.min(V.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(V.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(o){return a1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return a1(this.min.x,this.max.y)},getTopRight:function(){return a1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var V,l;return typeof o[0]=="number"||o instanceof X?o=a1(o):o=J(o),o instanceof U?(V=o.min,l=o.max):V=l=o,V.x>=this.min.x&&l.x<=this.max.x&&V.y>=this.min.y&&l.y<=this.max.y},intersects:function(o){o=J(o);var V=this.min,l=this.max,u=o.min,f=o.max,_=f.x>=V.x&&u.x<=l.x,T=f.y>=V.y&&u.y<=l.y;return _&&T},overlaps:function(o){o=J(o);var V=this.min,l=this.max,u=o.min,f=o.max,_=f.x>V.x&&u.x<l.x,T=f.y>V.y&&u.y<l.y;return _&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var V=this.min,l=this.max,u=Math.abs(V.x-l.x)*o,f=Math.abs(V.y-l.y)*o;return J(a1(V.x-u,V.y-f),a1(l.x+u,l.y+f))},equals:function(o){return o?(o=J(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function J(o,V){return!o||o instanceof U?o:new U(o,V)}function H1(o,V){if(o)for(var l=V?[o,V]:o,u=0,f=l.length;u<f;u++)this.extend(l[u])}H1.prototype={extend:function(o){var V=this._southWest,l=this._northEast,u,f;if(o instanceof V1)u=o,f=o;else if(o instanceof H1){if(u=o._southWest,f=o._northEast,!u||!f)return this}else return o?this.extend(n1(o)||u1(o)):this;return!V&&!l?(this._southWest=new V1(u.lat,u.lng),this._northEast=new V1(f.lat,f.lng)):(V.lat=Math.min(u.lat,V.lat),V.lng=Math.min(u.lng,V.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(o){var V=this._southWest,l=this._northEast,u=Math.abs(V.lat-l.lat)*o,f=Math.abs(V.lng-l.lng)*o;return new H1(new V1(V.lat-u,V.lng-f),new V1(l.lat+u,l.lng+f))},getCenter:function(){return new V1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V1(this.getNorth(),this.getWest())},getSouthEast:function(){return new V1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof V1||"lat"in o?o=n1(o):o=u1(o);var V=this._southWest,l=this._northEast,u,f;return o instanceof H1?(u=o.getSouthWest(),f=o.getNorthEast()):u=f=o,u.lat>=V.lat&&f.lat<=l.lat&&u.lng>=V.lng&&f.lng<=l.lng},intersects:function(o){o=u1(o);var V=this._southWest,l=this._northEast,u=o.getSouthWest(),f=o.getNorthEast(),_=f.lat>=V.lat&&u.lat<=l.lat,T=f.lng>=V.lng&&u.lng<=l.lng;return _&&T},overlaps:function(o){o=u1(o);var V=this._southWest,l=this._northEast,u=o.getSouthWest(),f=o.getNorthEast(),_=f.lat>V.lat&&u.lat<l.lat,T=f.lng>V.lng&&u.lng<l.lng;return _&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,V){return o?(o=u1(o),this._southWest.equals(o.getSouthWest(),V)&&this._northEast.equals(o.getNorthEast(),V)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function u1(o,V){return o instanceof H1?o:new H1(o,V)}function V1(o,V,l){if(isNaN(o)||isNaN(V))throw new Error("Invalid LatLng object: ("+o+", "+V+")");this.lat=+o,this.lng=+V,l!==void 0&&(this.alt=+l)}V1.prototype={equals:function(o,V){if(!o)return!1;o=n1(o);var l=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return l<=(V===void 0?1e-9:V)},toString:function(o){return"LatLng("+p(this.lat,o)+", "+p(this.lng,o)+")"},distanceTo:function(o){return k1.distance(this,n1(o))},wrap:function(){return k1.wrapLatLng(this)},toBounds:function(o){var V=180*o/40075017,l=V/Math.cos(Math.PI/180*this.lat);return u1([this.lat-V,this.lng-l],[this.lat+V,this.lng+l])},clone:function(){return new V1(this.lat,this.lng,this.alt)}};function n1(o,V,l){return o instanceof V1?o:F(o)&&typeof o[0]!="object"?o.length===3?new V1(o[0],o[1],o[2]):o.length===2?new V1(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new V1(o.lat,"lng"in o?o.lng:o.lon,o.alt):V===void 0?null:new V1(o,V,l)}var _1={latLngToPoint:function(o,V){var l=this.projection.project(o),u=this.scale(V);return this.transformation._transform(l,u)},pointToLatLng:function(o,V){var l=this.scale(V),u=this.transformation.untransform(o,l);return this.projection.unproject(u)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var V=this.projection.bounds,l=this.scale(o),u=this.transformation.transform(V.min,l),f=this.transformation.transform(V.max,l);return new U(u,f)},infinite:!1,wrapLatLng:function(o){var V=this.wrapLng?s(o.lng,this.wrapLng,!0):o.lng,l=this.wrapLat?s(o.lat,this.wrapLat,!0):o.lat,u=o.alt;return new V1(l,V,u)},wrapLatLngBounds:function(o){var V=o.getCenter(),l=this.wrapLatLng(V),u=V.lat-l.lat,f=V.lng-l.lng;if(u===0&&f===0)return o;var _=o.getSouthWest(),T=o.getNorthEast(),E=new V1(_.lat-u,_.lng-f),$=new V1(T.lat-u,T.lng-f);return new H1(E,$)}},k1=e({},_1,{wrapLng:[-180,180],R:6371e3,distance:function(o,V){var l=Math.PI/180,u=o.lat*l,f=V.lat*l,_=Math.sin((V.lat-o.lat)*l/2),T=Math.sin((V.lng-o.lng)*l/2),E=_*_+Math.cos(u)*Math.cos(f)*T*T,$=2*Math.atan2(Math.sqrt(E),Math.sqrt(1-E));return this.R*$}}),c2=6378137,m2={R:c2,MAX_LATITUDE:85.0511287798,project:function(o){var V=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,o.lat),-l),f=Math.sin(u*V);return new X(this.R*o.lng*V,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(o){var V=180/Math.PI;return new V1((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*V,o.x*V/this.R)},bounds:(function(){var o=c2*Math.PI;return new U([-o,-o],[o,o])})()};function w2(o,V,l,u){if(F(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=V,this._c=l,this._d=u}w2.prototype={transform:function(o,V){return this._transform(o.clone(),V)},_transform:function(o,V){return V=V||1,o.x=V*(this._a*o.x+this._b),o.y=V*(this._c*o.y+this._d),o},untransform:function(o,V){return V=V||1,new X((o.x/V-this._b)/this._a,(o.y/V-this._d)/this._c)}};function L2(o,V,l,u){return new w2(o,V,l,u)}var L1=e({},k1,{code:"EPSG:3857",projection:m2,transformation:(function(){var o=.5/(Math.PI*m2.R);return L2(o,.5,-o,.5)})()}),Y2=e({},L1,{code:"EPSG:900913"});function D2(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function M5(o,V){var l="",u,f,_,T,E,$;for(u=0,_=o.length;u<_;u++){for(E=o[u],f=0,T=E.length;f<T;f++)$=E[f],l+=(f?"L":"M")+$.x+" "+$.y;l+=V?l1.svg?"z":"x":""}return l||"M0 0"}var Z2=document.documentElement.style,h2="ActiveXObject"in window,i5=h2&&!document.addEventListener,C5="msLaunchUri"in navigator&&!("documentMode"in document),Q1=Q2("webkit"),f2=Q2("android"),E0=Q2("android 2")||Q2("android 3"),Y8=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Q8=f2&&Q2("Google")&&Y8<537&&!("AudioNode"in window),t7=!!window.opera,_9=!C5&&Q2("chrome"),e7=Q2("gecko")&&!Q1&&!t7&&!h2,m3=!_9&&Q2("safari"),G7=Q2("phantom"),G="OTransition"in Z2,S9=navigator.platform.indexOf("Win")===0,r7=h2&&"transition"in Z2,B0="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!E0,b9="MozPerspective"in Z2,w9=!window.L_DISABLE_3D&&(r7||B0||b9)&&!G&&!G7,h3=typeof orientation<"u"||Q2("mobile"),cr=h3&&Q1,K8=h3&&B0,Z9=!window.PointerEvent&&window.MSPointerEvent,y9=!!(window.PointerEvent||Z9),O9="ontouchstart"in window||!!window.TouchEvent,k9=!window.L_NO_TOUCH&&(O9||y9),T9=h3&&t7,X8=h3&&e7,q7=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,J8=(function(){var o=!1;try{var V=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",M,V),window.removeEventListener("testPassiveEventSupport",M,V)}catch{}return o})(),tt=(function(){return!!document.createElement("canvas").getContext})(),Y7=!!(document.createElementNS&&D2("svg").createSVGRect),et=!!Y7&&(function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),rt=!Y7&&(function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var V=o.firstChild;return V.style.behavior="url(#default#VML)",V&&typeof V.adj=="object"}catch{return!1}})(),Q7=navigator.platform.indexOf("Mac")===0,f3=navigator.platform.indexOf("Linux")===0;function Q2(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var l1={ie:h2,ielt9:i5,edge:C5,webkit:Q1,android:f2,android23:E0,androidStock:Q8,opera:t7,chrome:_9,gecko:e7,safari:m3,phantom:G7,opera12:G,win:S9,ie3d:r7,webkit3d:B0,gecko3d:b9,any3d:w9,mobile:h3,mobileWebkit:cr,mobileWebkit3d:K8,msPointer:Z9,pointer:y9,touch:k9,touchNative:O9,mobileOpera:T9,mobileGecko:X8,retina:q7,passiveEvents:J8,canvas:tt,svg:Y7,vml:rt,inlineSvg:et,mac:Q7,linux:f3},R0=l1.msPointer?"MSPointerDown":"pointerdown",K7=l1.msPointer?"MSPointerMove":"pointermove",X7=l1.msPointer?"MSPointerUp":"pointerup",J7=l1.msPointer?"MSPointerCancel":"pointercancel",t4={touchstart:R0,touchmove:K7,touchend:X7,touchcancel:J7},e4={touchstart:N,touchmove:R,touchend:R,touchcancel:R},c={},m=!1;function d(o,V,l){return V==="touchstart"&&P(),e4[V]?(l=e4[V].bind(this,l),o.addEventListener(t4[V],l,!1),l):(console.warn("wrong event specified:",V),M)}function A(o,V,l){if(!t4[V]){console.warn("wrong event specified:",V);return}o.removeEventListener(t4[V],l,!1)}function x(o){c[o.pointerId]=o}function b(o){c[o.pointerId]&&(c[o.pointerId]=o)}function w(o){delete c[o.pointerId]}function P(){m||(document.addEventListener(R0,x,!0),document.addEventListener(K7,b,!0),document.addEventListener(X7,w,!0),document.addEventListener(J7,w,!0),m=!0)}function R(o,V){if(V.pointerType!==(V.MSPOINTER_TYPE_MOUSE||"mouse")){V.touches=[];for(var l in c)V.touches.push(c[l]);V.changedTouches=[V],o(V)}}function N(o,V){V.MSPOINTER_TYPE_TOUCH&&V.pointerType===V.MSPOINTER_TYPE_TOUCH&&C2(V),R(o,V)}function z(o){var V={},l,u;for(u in o)l=o[u],V[u]=l&&l.bind?l.bind(o):l;return o=V,V.type="dblclick",V.detail=2,V.isTrusted=!1,V._simulated=!0,V}var i1=200;function d1(o,V){o.addEventListener("dblclick",V);var l=0,u;function f(_){if(_.detail!==1){u=_.detail;return}if(!(_.pointerType==="mouse"||_.sourceCapabilities&&!_.sourceCapabilities.firesTouchEvents)){var T=l0(_);if(!(T.some(function($){return $ instanceof HTMLLabelElement&&$.attributes.for})&&!T.some(function($){return $ instanceof HTMLInputElement||$ instanceof HTMLSelectElement}))){var E=Date.now();E-l<=i1?(u++,u===2&&V(z(_))):u=1,l=E}}}return o.addEventListener("click",f),{dblclick:V,simDblclick:f}}function I(o,V){o.removeEventListener("dblclick",V.dblclick),o.removeEventListener("click",V.simDblclick)}var S1=w5(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),W1=w5(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),U1=W1==="webkitTransition"||W1==="OTransition"?W1+"End":"transitionend";function j1(o){return typeof o=="string"?document.getElementById(o):o}function N1(o,V){var l=o.style[V]||o.currentStyle&&o.currentStyle[V];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(o,null);l=u?u[V]:null}return l==="auto"?null:l}function m1(o,V,l){var u=document.createElement(o);return u.className=V||"",l&&l.appendChild(u),u}function F1(o){var V=o.parentNode;V&&V.removeChild(o)}function S5(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function $2(o){var V=o.parentNode;V&&V.lastChild!==o&&V.appendChild(o)}function b5(o){var V=o.parentNode;V&&V.firstChild!==o&&V.insertBefore(o,V.firstChild)}function c5(o,V){if(o.classList!==void 0)return o.classList.contains(V);var l=o5(o);return l.length>0&&new RegExp("(^|\\s)"+V+"(\\s|$)").test(l)}function M1(o,V){if(o.classList!==void 0)for(var l=v(V),u=0,f=l.length;u<f;u++)o.classList.add(l[u]);else if(!c5(o,V)){var _=o5(o);d5(o,(_?_+" ":"")+V)}}function R1(o,V){o.classList!==void 0?o.classList.remove(V):d5(o,h((" "+o5(o)+" ").replace(" "+V+" "," ")))}function d5(o,V){o.className.baseVal===void 0?o.className=V:o.className.baseVal=V}function o5(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function e2(o,V){"opacity"in o.style?o.style.opacity=V:"filter"in o.style&&n0(o,V)}function n0(o,V){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=o.filters.item(u)}catch{if(V===1)return}V=Math.round(V*100),l?(l.Enabled=V!==100,l.Opacity=V):o.style.filter+=" progid:"+u+"(opacity="+V+")"}function w5(o){for(var V=document.documentElement.style,l=0;l<o.length;l++)if(o[l]in V)return o[l];return!1}function a5(o,V,l){var u=V||new X(0,0);o.style[S1]=(l1.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function K1(o,V){o._leaflet_pos=V,l1.any3d?a5(o,V):(o.style.left=V.x+"px",o.style.top=V.y+"px")}function K2(o){return o._leaflet_pos||new X(0,0)}var s0,p2,N5;if("onselectstart"in document)s0=function(){A1(window,"selectstart",C2)},p2=function(){g1(window,"selectstart",C2)};else{var p5=w5(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);s0=function(){if(p5){var o=document.documentElement.style;N5=o[p5],o[p5]="none"}},p2=function(){p5&&(document.documentElement.style[p5]=N5,N5=void 0)}}function A3(){A1(window,"dragstart",C2)}function v3(){g1(window,"dragstart",C2)}var W5,U5;function j5(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(G5(),W5=o,U5=o.style.outlineStyle,o.style.outlineStyle="none",A1(window,"keydown",G5))}function G5(){W5&&(W5.style.outlineStyle=U5,W5=void 0,U5=void 0,g1(window,"keydown",G5))}function Z5(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function q5(o){var V=o.getBoundingClientRect();return{x:V.width/o.offsetWidth||1,y:V.height/o.offsetHeight||1,boundingClientRect:V}}var x3={__proto__:null,TRANSFORM:S1,TRANSITION:W1,TRANSITION_END:U1,get:j1,getStyle:N1,create:m1,remove:F1,empty:S5,toFront:$2,toBack:b5,hasClass:c5,addClass:M1,removeClass:R1,setClass:d5,getClass:o5,setOpacity:e2,testProp:w5,setTransform:a5,setPosition:K1,getPosition:K2,get disableTextSelection(){return s0},get enableTextSelection(){return p2},disableImageDrag:A3,enableImageDrag:v3,preventOutline:j5,restoreOutline:G5,getSizedParentNode:Z5,getScale:q5};function A1(o,V,l,u){if(V&&typeof V=="object")for(var f in V)g3(o,f,V[f],l);else{V=v(V);for(var _=0,T=V.length;_<T;_++)g3(o,V[_],l,u)}return this}var A2="_leaflet_events";function g1(o,V,l,u){if(arguments.length===1)y5(o),delete o[A2];else if(V&&typeof V=="object")for(var f in V)_3(o,f,V[f],l);else if(V=v(V),arguments.length===2)y5(o,function(E){return D(V,E)!==-1});else for(var _=0,T=V.length;_<T;_++)_3(o,V[_],l,u);return this}function y5(o,V){for(var l in o[A2]){var u=l.split(/\d/)[0];(!V||V(u))&&_3(o,u,null,null,l)}}var L0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function g3(o,V,l,u){var f=V+H(l)+(u?"_"+H(u):"");if(o[A2]&&o[A2][f])return this;var _=function(E){return l.call(u||o,E||window.event)},T=_;!l1.touchNative&&l1.pointer&&V.indexOf("touch")===0?_=d(o,V,_):l1.touch&&V==="dblclick"?_=d1(o,_):"addEventListener"in o?V==="touchstart"||V==="touchmove"||V==="wheel"||V==="mousewheel"?o.addEventListener(L0[V]||V,_,l1.passiveEvents?{passive:!1}:!1):V==="mouseenter"||V==="mouseleave"?(_=function(E){E=E||window.event,q(o,E)&&T(E)},o.addEventListener(L0[V],_,!1)):o.addEventListener(V,T,!1):o.attachEvent("on"+V,_),o[A2]=o[A2]||{},o[A2][f]=_}function _3(o,V,l,u,f){f=f||V+H(l)+(u?"_"+H(u):"");var _=o[A2]&&o[A2][f];if(!_)return this;!l1.touchNative&&l1.pointer&&V.indexOf("touch")===0?A(o,V,_):l1.touch&&V==="dblclick"?I(o,_):"removeEventListener"in o?o.removeEventListener(L0[V]||V,_,!1):o.detachEvent("on"+V,_),o[A2][f]=null}function h1(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function D1(o){return g3(o,"wheel",h1),this}function v2(o){return A1(o,"mousedown touchstart dblclick contextmenu",h1),o._leaflet_disable_click=!0,this}function C2(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function H5(o){return C2(o),h1(o),this}function l0(o){if(o.composedPath)return o.composedPath();for(var V=[],l=o.target;l;)V.push(l),l=l.parentNode;return V}function S3(o,V){if(!V)return new X(o.clientX,o.clientY);var l=q5(V),u=l.boundingClientRect;return new X((o.clientX-u.left)/l.x-V.clientLeft,(o.clientY-u.top)/l.y-V.clientTop)}var it=l1.linux&&l1.chrome?window.devicePixelRatio:l1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function P9(o){return l1.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/it:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function q(o,V){var l=V.relatedTarget;if(!l)return!0;try{for(;l&&l!==o;)l=l.parentNode}catch{return!1}return l!==o}var v1={__proto__:null,on:A1,off:g1,stopPropagation:h1,disableScrollPropagation:D1,disableClickPropagation:v2,preventDefault:C2,stop:H5,getPropagationPath:l0,getMousePosition:S3,getWheelDelta:P9,isExternalTarget:q,addListener:A1,removeListener:g1},T1=O1.extend({run:function(o,V,l,u){this.stop(),this._el=o,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=K2(o),this._offset=V.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=o1(this._animate,this),this._step()},_step:function(o){var V=+new Date-this._startTime,l=this._duration*1e3;V<l?this._runFrame(this._easeOut(V/l),o):(this._runFrame(1),this._complete())},_runFrame:function(o,V){var l=this._startPos.add(this._offset.multiplyBy(o));V&&l._round(),K1(this._el,l),this.fire("step")},_complete:function(){f1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),C1=O1.extend({options:{crs:L1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,V){V=g(this,V),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=C(this._onResize,this),this._initEvents(),V.maxBounds&&this.setMaxBounds(V.maxBounds),V.zoom!==void 0&&(this._zoom=this._limitZoom(V.zoom)),V.center&&V.zoom!==void 0&&this.setView(n1(V.center),V.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=W1&&l1.any3d&&!l1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A1(this._proxy,U1,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,V,l){if(V=V===void 0?this._zoom:this._limitZoom(V),o=this._limitCenter(n1(o),V,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==V?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,V,l.zoom):this._tryAnimatedPan(o,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(o,V,l.pan&&l.pan.noMoveStart),this},setZoom:function(o,V){return this._loaded?this.setView(this.getCenter(),o,{zoom:V}):(this._zoom=o,this)},zoomIn:function(o,V){return o=o||(l1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,V)},zoomOut:function(o,V){return o=o||(l1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,V)},setZoomAround:function(o,V,l){var u=this.getZoomScale(V),f=this.getSize().divideBy(2),_=o instanceof X?o:this.latLngToContainerPoint(o),T=_.subtract(f).multiplyBy(1-1/u),E=this.containerPointToLatLng(f.add(T));return this.setView(E,V,{zoom:l})},_getBoundsCenterZoom:function(o,V){V=V||{},o=o.getBounds?o.getBounds():u1(o);var l=a1(V.paddingTopLeft||V.padding||[0,0]),u=a1(V.paddingBottomRight||V.padding||[0,0]),f=this.getBoundsZoom(o,!1,l.add(u));if(f=typeof V.maxZoom=="number"?Math.min(V.maxZoom,f):f,f===1/0)return{center:o.getCenter(),zoom:f};var _=u.subtract(l).divideBy(2),T=this.project(o.getSouthWest(),f),E=this.project(o.getNorthEast(),f),$=this.unproject(T.add(E).divideBy(2).add(_),f);return{center:$,zoom:f}},fitBounds:function(o,V){if(o=u1(o),!o.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(o,V);return this.setView(l.center,l.zoom,V)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,V){return this.setView(o,this._zoom,{pan:V})},panBy:function(o,V){if(o=a1(o).round(),V=V||{},!o.x&&!o.y)return this.fire("moveend");if(V.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new T1,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),V.noMoveStart||this.fire("movestart"),V.animate!==!1){M1(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,l,V.duration||.25,V.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,V,l){if(l=l||{},l.animate===!1||!l1.any3d)return this.setView(o,V,l);this._stop();var u=this.project(this.getCenter()),f=this.project(o),_=this.getSize(),T=this._zoom;o=n1(o),V=V===void 0?T:V;var E=Math.max(_.x,_.y),$=E*this.getZoomScale(T,V),j=f.distanceTo(u)||1,e1=1.42,x1=e1*e1;function P1(u2){var G9=u2?-1:1,ln=u2?$:E,Mn=$*$-E*E+G9*x1*x1*j*j,cn=2*ln*x1*j,Mt=Mn/cn,jr=Math.sqrt(Mt*Mt+1)-Mt,dn=jr<1e-9?-18:Math.log(jr);return dn}function N2(u2){return(Math.exp(u2)-Math.exp(-u2))/2}function x2(u2){return(Math.exp(u2)+Math.exp(-u2))/2}function m5(u2){return N2(u2)/x2(u2)}var X2=P1(0);function V7(u2){return E*(x2(X2)/x2(X2+e1*u2))}function Vn(u2){return E*(x2(X2)*m5(X2+e1*u2)-N2(X2))/x1}function nn(u2){return 1-Math.pow(1-u2,1.5)}var sn=Date.now(),Wr=(P1(1)-X2)/e1,Ln=l.duration?1e3*l.duration:1e3*Wr*.8;function Ur(){var u2=(Date.now()-sn)/Ln,G9=nn(u2)*Wr;u2<=1?(this._flyToFrame=o1(Ur,this),this._move(this.unproject(u.add(f.subtract(u).multiplyBy(Vn(G9)/j)),T),this.getScaleZoom(E/V7(G9),T),{flyTo:!0})):this._move(o,V)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Ur.call(this),this},flyToBounds:function(o,V){var l=this._getBoundsCenterZoom(o,V);return this.flyTo(l.center,l.zoom,V)},setMaxBounds:function(o){return o=u1(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var V=this.options.minZoom;return this.options.minZoom=o,this._loaded&&V!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var V=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&V!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,V){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,u1(o));return l.equals(u)||this.panTo(u,V),this._enforcingBounds=!1,this},panInside:function(o,V){V=V||{};var l=a1(V.paddingTopLeft||V.padding||[0,0]),u=a1(V.paddingBottomRight||V.padding||[0,0]),f=this.project(this.getCenter()),_=this.project(o),T=this.getPixelBounds(),E=J([T.min.add(l),T.max.subtract(u)]),$=E.getSize();if(!E.contains(_)){this._enforcingBounds=!0;var j=_.subtract(E.getCenter()),e1=E.extend(_).getSize().subtract($);f.x+=j.x<0?-e1.x:e1.x,f.y+=j.y<0?-e1.y:e1.y,this.panTo(this.unproject(f),V),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=e({animate:!1,pan:!0},o===!0?{animate:!0}:o);var V=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=V.divideBy(2).round(),f=l.divideBy(2).round(),_=u.subtract(f);return!_.x&&!_.y?this:(o.animate&&o.pan?this.panBy(_):(o.pan&&this._rawPanBy(_),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(C(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:V,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=e({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var V=C(this._handleGeolocationResponse,this),l=C(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(V,l,o):navigator.geolocation.getCurrentPosition(V,l,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var V=o.code,l=o.message||(V===1?"permission denied":V===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:V,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var V=o.coords.latitude,l=o.coords.longitude,u=new V1(V,l),f=u.toBounds(o.coords.accuracy*2),_=this._locateOptions;if(_.setView){var T=this.getBoundsZoom(f);this.setView(u,_.maxZoom?Math.min(T,_.maxZoom):T)}var E={latlng:u,bounds:f,timestamp:o.timestamp};for(var $ in o.coords)typeof o.coords[$]=="number"&&(E[$]=o.coords[$]);this.fire("locationfound",E)}},addHandler:function(o,V){if(!V)return this;var l=this[o]=new V(this);return this._handlers.push(l),this.options[o]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),F1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(f1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)F1(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,V){var l="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),u=m1("div",l,V||this._mapPane);return o&&(this._panes[o]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),V=this.unproject(o.getBottomLeft()),l=this.unproject(o.getTopRight());return new H1(V,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,V,l){o=u1(o),l=a1(l||[0,0]);var u=this.getZoom()||0,f=this.getMinZoom(),_=this.getMaxZoom(),T=o.getNorthWest(),E=o.getSouthEast(),$=this.getSize().subtract(l),j=J(this.project(E,u),this.project(T,u)).getSize(),e1=l1.any3d?this.options.zoomSnap:1,x1=$.x/j.x,P1=$.y/j.y,N2=V?Math.max(x1,P1):Math.min(x1,P1);return u=this.getScaleZoom(N2,u),e1&&(u=Math.round(u/(e1/100))*(e1/100),u=V?Math.ceil(u/e1)*e1:Math.floor(u/e1)*e1),Math.max(f,Math.min(_,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new X(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,V){var l=this._getTopLeftPoint(o,V);return new U(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,V){var l=this.options.crs;return V=V===void 0?this._zoom:V,l.scale(o)/l.scale(V)},getScaleZoom:function(o,V){var l=this.options.crs;V=V===void 0?this._zoom:V;var u=l.zoom(o*l.scale(V));return isNaN(u)?1/0:u},project:function(o,V){return V=V===void 0?this._zoom:V,this.options.crs.latLngToPoint(n1(o),V)},unproject:function(o,V){return V=V===void 0?this._zoom:V,this.options.crs.pointToLatLng(a1(o),V)},layerPointToLatLng:function(o){var V=a1(o).add(this.getPixelOrigin());return this.unproject(V)},latLngToLayerPoint:function(o){var V=this.project(n1(o))._round();return V._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(n1(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(u1(o))},distance:function(o,V){return this.options.crs.distance(n1(o),n1(V))},containerPointToLayerPoint:function(o){return a1(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return a1(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var V=this.containerPointToLayerPoint(a1(o));return this.layerPointToLatLng(V)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(n1(o)))},mouseEventToContainerPoint:function(o){return S3(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var V=this._container=j1(o);if(V){if(V._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A1(V,"scroll",this._onScroll,this),this._containerId=H(V)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&l1.any3d,M1(o,"leaflet-container"+(l1.touch?" leaflet-touch":"")+(l1.retina?" leaflet-retina":"")+(l1.ielt9?" leaflet-oldie":"")+(l1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var V=N1(o,"position");V!=="absolute"&&V!=="relative"&&V!=="fixed"&&V!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),K1(this._mapPane,new X(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M1(o.markerPane,"leaflet-zoom-hide"),M1(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,V,l){K1(this._mapPane,new X(0,0));var u=!this._loaded;this._loaded=!0,V=this._limitZoom(V),this.fire("viewprereset");var f=this._zoom!==V;this._moveStart(f,l)._move(o,V)._moveEnd(f),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(o,V){return o&&this.fire("zoomstart"),V||this.fire("movestart"),this},_move:function(o,V,l,u){V===void 0&&(V=this._zoom);var f=this._zoom!==V;return this._zoom=V,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),u?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return f1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){K1(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[H(this._container)]=this;var V=o?g1:A1;V(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&V(window,"resize",this._onResize,this),l1.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){f1(this._resizeRequest),this._resizeRequest=o1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,V){for(var l=[],u,f=V==="mouseout"||V==="mouseover",_=o.target||o.srcElement,T=!1;_;){if(u=this._targets[H(_)],u&&(V==="click"||V==="preclick")&&this._draggableMoved(u)){T=!0;break}if(u&&u.listens(V,!0)&&(f&&!q(_,o)||(l.push(u),f))||_===this._container)break;_=_.parentNode}return!l.length&&!T&&!f&&this.listens(V,!0)&&(l=[this]),l},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var V=o.target||o.srcElement;if(!(!this._loaded||V._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(V))){var l=o.type;l==="mousedown"&&j5(V),this._fireDOMEvent(o,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,V,l){if(o.type==="click"){var u=e({},o);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var f=this._findEventTargets(o,V);if(l){for(var _=[],T=0;T<l.length;T++)l[T].listens(V,!0)&&_.push(l[T]);f=_.concat(f)}if(f.length){V==="contextmenu"&&C2(o);var E=f[0],$={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var j=E.getLatLng&&(!E._radius||E._radius<=10);$.containerPoint=j?this.latLngToContainerPoint(E.getLatLng()):this.mouseEventToContainerPoint(o),$.layerPoint=this.containerPointToLayerPoint($.containerPoint),$.latlng=j?E.getLatLng():this.layerPointToLatLng($.layerPoint)}for(T=0;T<f.length;T++)if(f[T].fire(V,$,!0),$.originalEvent._stopped||f[T].options.bubblingMouseEvents===!1&&D(this._mouseEvents,V)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,V=this._handlers.length;o<V;o++)this._handlers[o].disable()},whenReady:function(o,V){return this._loaded?o.call(V||this,{target:this}):this.on("load",o,V),this},_getMapPanePos:function(){return K2(this._mapPane)||new X(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,V){var l=o&&V!==void 0?this._getNewPixelOrigin(o,V):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,V){var l=this.getSize()._divideBy(2);return this.project(o,V)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,V,l){var u=this._getNewPixelOrigin(l,V);return this.project(o,V)._subtract(u)},_latLngBoundsToNewLayerBounds:function(o,V,l){var u=this._getNewPixelOrigin(l,V);return J([this.project(o.getSouthWest(),V)._subtract(u),this.project(o.getNorthWest(),V)._subtract(u),this.project(o.getSouthEast(),V)._subtract(u),this.project(o.getNorthEast(),V)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,V,l){if(!l)return o;var u=this.project(o,V),f=this.getSize().divideBy(2),_=new U(u.subtract(f),u.add(f)),T=this._getBoundsOffset(_,l,V);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?o:this.unproject(u.add(T),V)},_limitOffset:function(o,V){if(!V)return o;var l=this.getPixelBounds(),u=new U(l.min.add(o),l.max.add(o));return o.add(this._getBoundsOffset(u,V))},_getBoundsOffset:function(o,V,l){var u=J(this.project(V.getNorthEast(),l),this.project(V.getSouthWest(),l)),f=u.min.subtract(o.min),_=u.max.subtract(o.max),T=this._rebound(f.x,-_.x),E=this._rebound(f.y,-_.y);return new X(T,E)},_rebound:function(o,V){return o+V>0?Math.round(o-V)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(V))},_limitZoom:function(o){var V=this.getMinZoom(),l=this.getMaxZoom(),u=l1.any3d?this.options.zoomSnap:1;return u&&(o=Math.round(o/u)*u),Math.max(V,Math.min(l,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){R1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,V){var l=this._getCenterOffset(o)._trunc();return(V&&V.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,V),!0)},_createAnimProxy:function(){var o=this._proxy=m1("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(V){var l=S1,u=this._proxy.style[l];a5(this._proxy,this.project(V.center,V.zoom),this.getZoomScale(V.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){F1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),V=this.getZoom();a5(this._proxy,this.project(o,V),this.getZoomScale(V,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,V,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(V-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(V),f=this._getCenterOffset(o)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(f)?!1:(o1(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(o,V,!0)},this),!0)},_animateZoom:function(o,V,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=V,M1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:V,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(C(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&R1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function y2(o,V){return new C1(o,V)}var o2=y1.extend({options:{position:"topright"},initialize:function(o){g(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var V=this._map;return V&&V.removeControl(this),this.options.position=o,V&&V.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var V=this._container=this.onAdd(o),l=this.getPosition(),u=o._controlCorners[l];return M1(V,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(V,u.firstChild):u.appendChild(V),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(F1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),z2=function(o){return new o2(o)};C1.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},V="leaflet-",l=this._controlContainer=m1("div",V+"control-container",this._container);function u(f,_){var T=V+f+" "+V+_;o[f+_]=m1("div",T,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)F1(this._controlCorners[o]);F1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var D0=o2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,V,l,u){return l<u?-1:u<l?1:0}},initialize:function(o,V,l){g(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in o)this._addLayer(o[u],u);for(u in V)this._addLayer(V[u],u,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var V=0;V<this._layers.length;V++)this._layers[V].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return o2.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,V){return this._addLayer(o,V),this._map?this._update():this},addOverlay:function(o,V){return this._addLayer(o,V,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var V=this._getLayer(H(o));return V&&this._layers.splice(this._layers.indexOf(V),1),this._map?this._update():this},expand:function(){M1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(M1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):R1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return R1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",V=this._container=m1("div",o),l=this.options.collapsed;V.setAttribute("aria-haspopup",!0),v2(V),D1(V);var u=this._section=m1("section",o+"-list");l&&(this._map.on("click",this.collapse,this),A1(V,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=m1("a",o+"-toggle",V);f.href="#",f.title="Layers",f.setAttribute("role","button"),A1(f,{keydown:function(_){_.keyCode===13&&this._expandSafely()},click:function(_){C2(_),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=m1("div",o+"-base",u),this._separator=m1("div",o+"-separator",u),this._overlaysList=m1("div",o+"-overlays",u),V.appendChild(u)},_getLayer:function(o){for(var V=0;V<this._layers.length;V++)if(this._layers[V]&&H(this._layers[V].layer)===o)return this._layers[V]},_addLayer:function(o,V,l){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:V,overlay:l}),this.options.sortLayers&&this._layers.sort(C(function(u,f){return this.options.sortFunction(u.layer,f.layer,u.name,f.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;S5(this._baseLayersList),S5(this._overlaysList),this._layerControlInputs=[];var o,V,l,u,f=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),V=V||u.overlay,o=o||!u.overlay,f+=u.overlay?0:1;return this.options.hideSingleBase&&(o=o&&f>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=V&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var V=this._getLayer(H(o.target)),l=V.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;l&&this._map.fire(l,V)},_createRadioElement:function(o,V){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(V?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(o){var V=document.createElement("label"),l=this._map.hasLayer(o.layer),u;o.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+H(this),l),this._layerControlInputs.push(u),u.layerId=H(o.layer),A1(u,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+o.name;var _=document.createElement("span");V.appendChild(_),_.appendChild(u),_.appendChild(f);var T=o.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(V),this._checkDisabledLayers(),V},_onInputClick:function(){if(!this._preventClick){var o=this._layerControlInputs,V,l,u=[],f=[];this._handlingClick=!0;for(var _=o.length-1;_>=0;_--)V=o[_],l=this._getLayer(V.layerId).layer,V.checked?u.push(l):V.checked||f.push(l);for(_=0;_<f.length;_++)this._map.hasLayer(f[_])&&this._map.removeLayer(f[_]);for(_=0;_<u.length;_++)this._map.hasLayer(u[_])||this._map.addLayer(u[_]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,V,l,u=this._map.getZoom(),f=o.length-1;f>=0;f--)V=o[f],l=this._getLayer(V.layerId).layer,V.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;this._preventClick=!0,A1(o,"click",C2),this.expand();var V=this;setTimeout(function(){g1(o,"click",C2),V._preventClick=!1})}}),r4=function(o,V,l){return new D0(o,V,l)},I2=o2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var V="leaflet-control-zoom",l=m1("div",V+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,V+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,V+"-out",l,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,V,l,u,f){var _=m1("a",l,u);return _.innerHTML=o,_.href="#",_.title=V,_.setAttribute("role","button"),_.setAttribute("aria-label",V),v2(_),A1(_,"click",H5),A1(_,"click",f,this),A1(_,"click",this._refocusOnMap,this),_},_updateDisabled:function(){var o=this._map,V="leaflet-disabled";R1(this._zoomInButton,V),R1(this._zoomOutButton,V),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(M1(this._zoomOutButton,V),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(M1(this._zoomInButton,V),this._zoomInButton.setAttribute("aria-disabled","true"))}});C1.mergeOptions({zoomControl:!0}),C1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new I2,this.addControl(this.zoomControl))});var i4=function(o){return new I2(o)},F9=o2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var V="leaflet-control-scale",l=m1("div",V),u=this.options;return this._addScales(u,V+"-line",l),o.on(u.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),l},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,V,l){o.metric&&(this._mScale=m1("div",V,l)),o.imperial&&(this._iScale=m1("div",V,l))},_update:function(){var o=this._map,V=o.getSize().y/2,l=o.distance(o.containerPointToLatLng([0,V]),o.containerPointToLatLng([this.options.maxWidth,V]));this._updateScales(l)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var V=this._getRoundNum(o),l=V<1e3?V+" m":V/1e3+" km";this._updateScale(this._mScale,l,V/o)},_updateImperial:function(o){var V=o*3.2808399,l,u,f;V>5280?(l=V/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(f=this._getRoundNum(V),this._updateScale(this._iScale,f+" ft",f/V))},_updateScale:function(o,V,l){o.style.width=Math.round(this.options.maxWidth*l)+"px",o.innerHTML=V},_getRoundNum:function(o){var V=Math.pow(10,(Math.floor(o)+"").length-1),l=o/V;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,V*l}}),Ct=function(o){return new F9(o)},C4='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',o4=o2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(l1.inlineSvg?C4+" ":"")+"Leaflet</a>"},initialize:function(o){g(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=m1("div","leaflet-control-attribution"),v2(this._container);for(var V in o._layers)o._layers[V].getAttribution&&this.addAttribution(o._layers[V].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var V in this._attributions)this._attributions[V]&&o.push(V);var l=[];this.options.prefix&&l.push(this.options.prefix),o.length&&l.push(o.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});C1.mergeOptions({attributionControl:!0}),C1.addInitHook(function(){this.options.attributionControl&&new o4().addTo(this)});var ZV=function(o){return new o4(o)};o2.Layers=D0,o2.Zoom=I2,o2.Scale=F9,o2.Attribution=o4,z2.layers=r4,z2.zoom=i4,z2.scale=Ct,z2.attribution=ZV;var Y5=y1.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Y5.addTo=function(o,V){return o.addHandler(V,this),this};var yV={Events:G1},dr=l1.touch?"touchstart mousedown":"mousedown",$0=O1.extend({options:{clickTolerance:3},initialize:function(o,V,l,u){g(this,u),this._element=o,this._dragStartTarget=V||o,this._preventOutline=l},enable:function(){this._enabled||(A1(this._dragStartTarget,dr,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&($0._dragging===this&&this.finishDrag(!0),g1(this._dragStartTarget,dr,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!c5(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){$0._dragging===this&&this.finishDrag();return}if(!($0._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&($0._dragging=this,this._preventOutline&&j5(this._element),A3(),s0(),!this._moving)){this.fire("down");var V=o.touches?o.touches[0]:o,l=Z5(this._element);this._startPoint=new X(V.clientX,V.clientY),this._startPos=K2(this._element),this._parentScale=q5(l);var u=o.type==="mousedown";A1(document,u?"mousemove":"touchmove",this._onMove,this),A1(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var V=o.touches&&o.touches.length===1?o.touches[0]:o,l=new X(V.clientX,V.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,C2(o),this._moved||(this.fire("dragstart"),this._moved=!0,M1(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),K1(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){R1(document.body,"leaflet-dragging"),this._lastTarget&&(R1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),g1(document,"mousemove touchmove",this._onMove,this),g1(document,"mouseup touchend touchcancel",this._onUp,this),v3(),p2();var V=this._moved&&this._moving;this._moving=!1,$0._dragging=!1,V&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)})}});function pr(o,V,l){var u,f=[1,4,2,8],_,T,E,$,j,e1,x1,P1;for(_=0,e1=o.length;_<e1;_++)o[_]._code=b3(o[_],V);for(E=0;E<4;E++){for(x1=f[E],u=[],_=0,e1=o.length,T=e1-1;_<e1;T=_++)$=o[_],j=o[T],$._code&x1?j._code&x1||(P1=E9(j,$,x1,V,l),P1._code=b3(P1,V),u.push(P1)):(j._code&x1&&(P1=E9(j,$,x1,V,l),P1._code=b3(P1,V),u.push(P1)),u.push($));o=u}return o}function ur(o,V){var l,u,f,_,T,E,$,j,e1;if(!o||o.length===0)throw new Error("latlngs not passed");u5(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var x1=n1([0,0]),P1=u1(o),N2=P1.getNorthWest().distanceTo(P1.getSouthWest())*P1.getNorthEast().distanceTo(P1.getNorthWest());N2<1700&&(x1=ot(o));var x2=o.length,m5=[];for(l=0;l<x2;l++){var X2=n1(o[l]);m5.push(V.project(n1([X2.lat-x1.lat,X2.lng-x1.lng])))}for(E=$=j=0,l=0,u=x2-1;l<x2;u=l++)f=m5[l],_=m5[u],T=f.y*_.x-_.y*f.x,$+=(f.x+_.x)*T,j+=(f.y+_.y)*T,E+=T*3;E===0?e1=m5[0]:e1=[$/E,j/E];var V7=V.unproject(a1(e1));return n1([V7.lat+x1.lat,V7.lng+x1.lng])}function ot(o){for(var V=0,l=0,u=0,f=0;f<o.length;f++){var _=n1(o[f]);V+=_.lat,l+=_.lng,u++}return n1([V/u,l/u])}var OV={__proto__:null,clipPolygon:pr,polygonCenter:ur,centroid:ot};function mr(o,V){if(!V||!o.length)return o.slice();var l=V*V;return o=PV(o,l),o=TV(o,l),o}function hr(o,V,l){return Math.sqrt(a4(o,V,l,!0))}function kV(o,V,l){return a4(o,V,l)}function TV(o,V){var l=o.length,u=typeof Uint8Array<"u"?Uint8Array:Array,f=new u(l);f[0]=f[l-1]=1,at(o,f,V,0,l-1);var _,T=[];for(_=0;_<l;_++)f[_]&&T.push(o[_]);return T}function at(o,V,l,u,f){var _=0,T,E,$;for(E=u+1;E<=f-1;E++)$=a4(o[E],o[u],o[f],!0),$>_&&(T=E,_=$);_>l&&(V[T]=1,at(o,V,l,u,T),at(o,V,l,T,f))}function PV(o,V){for(var l=[o[0]],u=1,f=0,_=o.length;u<_;u++)FV(o[u],o[f])>V&&(l.push(o[u]),f=u);return f<_-1&&l.push(o[_-1]),l}var fr;function Ar(o,V,l,u,f){var _=u?fr:b3(o,l),T=b3(V,l),E,$,j;for(fr=T;;){if(!(_|T))return[o,V];if(_&T)return!1;E=_||T,$=E9(o,V,E,l,f),j=b3($,l),E===_?(o=$,_=j):(V=$,T=j)}}function E9(o,V,l,u,f){var _=V.x-o.x,T=V.y-o.y,E=u.min,$=u.max,j,e1;return l&8?(j=o.x+_*($.y-o.y)/T,e1=$.y):l&4?(j=o.x+_*(E.y-o.y)/T,e1=E.y):l&2?(j=$.x,e1=o.y+T*($.x-o.x)/_):l&1&&(j=E.x,e1=o.y+T*(E.x-o.x)/_),new X(j,e1,f)}function b3(o,V){var l=0;return o.x<V.min.x?l|=1:o.x>V.max.x&&(l|=2),o.y<V.min.y?l|=4:o.y>V.max.y&&(l|=8),l}function FV(o,V){var l=V.x-o.x,u=V.y-o.y;return l*l+u*u}function a4(o,V,l,u){var f=V.x,_=V.y,T=l.x-f,E=l.y-_,$=T*T+E*E,j;return $>0&&(j=((o.x-f)*T+(o.y-_)*E)/$,j>1?(f=l.x,_=l.y):j>0&&(f+=T*j,_+=E*j)),T=o.x-f,E=o.y-_,u?T*T+E*E:new X(f,_)}function u5(o){return!F(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function vr(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),u5(o)}function xr(o,V){var l,u,f,_,T,E,$,j;if(!o||o.length===0)throw new Error("latlngs not passed");u5(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var e1=n1([0,0]),x1=u1(o),P1=x1.getNorthWest().distanceTo(x1.getSouthWest())*x1.getNorthEast().distanceTo(x1.getNorthWest());P1<1700&&(e1=ot(o));var N2=o.length,x2=[];for(l=0;l<N2;l++){var m5=n1(o[l]);x2.push(V.project(n1([m5.lat-e1.lat,m5.lng-e1.lng])))}for(l=0,u=0;l<N2-1;l++)u+=x2[l].distanceTo(x2[l+1])/2;if(u===0)j=x2[0];else for(l=0,_=0;l<N2-1;l++)if(T=x2[l],E=x2[l+1],f=T.distanceTo(E),_+=f,_>u){$=(_-u)/f,j=[E.x-$*(E.x-T.x),E.y-$*(E.y-T.y)];break}var X2=V.unproject(a1(j));return n1([X2.lat+e1.lat,X2.lng+e1.lng])}var EV={__proto__:null,simplify:mr,pointToSegmentDistance:hr,closestPointOnSegment:kV,clipSegment:Ar,_getEdgeIntersection:E9,_getBitCode:b3,_sqClosestPointOnSegment:a4,isFlat:u5,_flat:vr,polylineCenter:xr},Ht={project:function(o){return new X(o.lng,o.lat)},unproject:function(o){return new V1(o.y,o.x)},bounds:new U([-180,-90],[180,90])},Vt={R:6378137,R_MINOR:6356752314245179e-9,bounds:new U([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var V=Math.PI/180,l=this.R,u=o.lat*V,f=this.R_MINOR/l,_=Math.sqrt(1-f*f),T=_*Math.sin(u),E=Math.tan(Math.PI/4-u/2)/Math.pow((1-T)/(1+T),_/2);return u=-l*Math.log(Math.max(E,1e-10)),new X(o.lng*V*l,u)},unproject:function(o){for(var V=180/Math.PI,l=this.R,u=this.R_MINOR/l,f=Math.sqrt(1-u*u),_=Math.exp(-o.y/l),T=Math.PI/2-2*Math.atan(_),E=0,$=.1,j;E<15&&Math.abs($)>1e-7;E++)j=f*Math.sin(T),j=Math.pow((1-j)/(1+j),f/2),$=Math.PI/2-2*Math.atan(_*j)-T,T+=$;return new V1(T*V,o.x*V/l)}},BV={__proto__:null,LonLat:Ht,Mercator:Vt,SphericalMercator:m2},RV=e({},k1,{code:"EPSG:3395",projection:Vt,transformation:(function(){var o=.5/(Math.PI*Vt.R);return L2(o,.5,-o,.5)})()}),gr=e({},k1,{code:"EPSG:4326",projection:Ht,transformation:L2(1/180,1,-1/180,.5)}),DV=e({},_1,{projection:Ht,transformation:L2(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,V){var l=V.lng-o.lng,u=V.lat-o.lat;return Math.sqrt(l*l+u*u)},infinite:!0});_1.Earth=k1,_1.EPSG3395=RV,_1.EPSG3857=L1,_1.EPSG900913=Y2,_1.EPSG4326=gr,_1.Simple=DV;var O5=O1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[H(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[H(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var V=o.target;if(V.hasLayer(this)){if(this._map=V,this._zoomAnimated=V._zoomAnimated,this.getEvents){var l=this.getEvents();V.on(l,this),this.once("remove",function(){V.off(l,this)},this)}this.onAdd(V),this.fire("add"),V.fire("layeradd",{layer:this})}}});C1.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var V=H(o);return this._layers[V]?this:(this._layers[V]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var V=H(o);return this._layers[V]?(this._loaded&&o.onRemove(this),delete this._layers[V],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return H(o)in this._layers},eachLayer:function(o,V){for(var l in this._layers)o.call(V,this._layers[l]);return this},_addLayers:function(o){o=o?F(o)?o:[o]:[];for(var V=0,l=o.length;V<l;V++)this.addLayer(o[V])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[H(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var V=H(o);this._zoomBoundLayers[V]&&(delete this._zoomBoundLayers[V],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,V=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var f=this._zoomBoundLayers[u].options;o=f.minZoom===void 0?o:Math.min(o,f.minZoom),V=f.maxZoom===void 0?V:Math.max(V,f.maxZoom)}this._layersMaxZoom=V===-1/0?void 0:V,this._layersMinZoom=o===1/0?void 0:o,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var i7=O5.extend({initialize:function(o,V){g(this,V),this._layers={};var l,u;if(o)for(l=0,u=o.length;l<u;l++)this.addLayer(o[l])},addLayer:function(o){var V=this.getLayerId(o);return this._layers[V]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var V=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[V]&&this._map.removeLayer(this._layers[V]),delete this._layers[V],this},hasLayer:function(o){var V=typeof o=="number"?o:this.getLayerId(o);return V in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var V=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[o]&&u[o].apply(u,V);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,V){for(var l in this._layers)o.call(V,this._layers[l]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return H(o)}}),$V=function(o,V){return new i7(o,V)},M0=i7.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),i7.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),i7.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new H1;for(var V in this._layers){var l=this._layers[V];o.extend(l.getBounds?l.getBounds():l.getLatLng())}return o}}),zV=function(o,V){return new M0(o,V)},C7=y1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){g(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,V){var l=this._getIconUrl(o);if(!l){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,V&&V.tagName==="IMG"?V:null);return this._setIconStyles(u,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(o,V){var l=this.options,u=l[V+"Size"];typeof u=="number"&&(u=[u,u]);var f=a1(u),_=a1(V==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));o.className="leaflet-marker-"+V+" "+(l.className||""),_&&(o.style.marginLeft=-_.x+"px",o.style.marginTop=-_.y+"px"),f&&(o.style.width=f.x+"px",o.style.height=f.y+"px")},_createImg:function(o,V){return V=V||document.createElement("img"),V.src=o,V},_getIconUrl:function(o){return l1.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function IV(o){return new C7(o)}var H4=C7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof H4.imagePath!="string"&&(H4.imagePath=this._detectIconPath()),(this.options.imagePath||H4.imagePath)+C7.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var V=function(l,u,f){var _=u.exec(l);return _&&_[f]};return o=V(o,/^url\((['"])?(.+)\1\)$/,2),o&&V(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=m1("div","leaflet-default-icon-path",document.body),V=N1(o,"background-image")||N1(o,"backgroundImage");if(document.body.removeChild(o),V=this._stripUrl(V),V)return V;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),_r=Y5.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new $0(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M1(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&R1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var V=this._marker,l=V._map,u=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,_=K2(V._icon),T=l.getPixelBounds(),E=l.getPixelOrigin(),$=J(T.min._subtract(E).add(f),T.max._subtract(E).subtract(f));if(!$.contains(_)){var j=a1((Math.max($.max.x,_.x)-$.max.x)/(T.max.x-$.max.x)-(Math.min($.min.x,_.x)-$.min.x)/(T.min.x-$.min.x),(Math.max($.max.y,_.y)-$.max.y)/(T.max.y-$.max.y)-(Math.min($.min.y,_.y)-$.min.y)/(T.min.y-$.min.y)).multiplyBy(u);l.panBy(j,{animate:!1}),this._draggable._newPos._add(j),this._draggable._startPos._add(j),K1(V._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=o1(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(f1(this._panRequest),this._panRequest=o1(this._adjustPan.bind(this,o)))},_onDrag:function(o){var V=this._marker,l=V._shadow,u=K2(V._icon),f=V._map.layerPointToLatLng(u);l&&K1(l,u),V._latlng=f,o.latlng=f,o.oldLatLng=this._oldLatLng,V.fire("move",o).fire("drag",o)},_onDragEnd:function(o){f1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),B9=O5.extend({options:{icon:new H4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,V){g(this,V),this._latlng=n1(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var V=this._latlng;return this._latlng=n1(o),this.update(),this.fire("move",{oldLatLng:V,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,V="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=o.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,o.title&&(l.title=o.title),l.tagName==="IMG"&&(l.alt=o.alt||"")),M1(l,V),o.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A1(l,"focus",this._panOnFocus,this);var f=o.icon.createShadow(this._shadow),_=!1;f!==this._shadow&&(this._removeShadow(),_=!0),f&&(M1(f,V),f.alt=""),this._shadow=f,o.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&_&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&g1(this._icon,"focus",this._panOnFocus,this),F1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&F1(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&K1(this._icon,o),this._shadow&&K1(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var V=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(V)},_initInteraction:function(){if(this.options.interactive&&(M1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),_r)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new _r(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&e2(this._icon,o),this._shadow&&e2(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var V=this.options.icon.options,l=V.iconSize?a1(V.iconSize):a1(0,0),u=V.iconAnchor?a1(V.iconAnchor):a1(0,0);o.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function NV(o,V){return new B9(o,V)}var z0=O5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return g(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),R9=z0.extend({options:{fill:!0,radius:10},initialize:function(o,V){g(this,V),this._latlng=n1(o),this._radius=this.options.radius},setLatLng:function(o){var V=this._latlng;return this._latlng=n1(o),this.redraw(),this.fire("move",{oldLatLng:V,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var V=o&&o.radius||this._radius;return z0.prototype.setStyle.call(this,o),this.setRadius(V),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,V=this._radiusY||o,l=this._clickTolerance(),u=[o+l,V+l];this._pxBounds=new U(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function WV(o,V){return new R9(o,V)}var nt=R9.extend({initialize:function(o,V,l){if(typeof V=="number"&&(V=e({},l,{radius:V})),g(this,V),this._latlng=n1(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new H1(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:z0.prototype.setStyle,_project:function(){var o=this._latlng.lng,V=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===k1.distance){var f=Math.PI/180,_=this._mRadius/k1.R/f,T=l.project([V+_,o]),E=l.project([V-_,o]),$=T.add(E).divideBy(2),j=l.unproject($).lat,e1=Math.acos((Math.cos(_*f)-Math.sin(V*f)*Math.sin(j*f))/(Math.cos(V*f)*Math.cos(j*f)))/f;(isNaN(e1)||e1===0)&&(e1=_/Math.cos(Math.PI/180*V)),this._point=$.subtract(l.getPixelOrigin()),this._radius=isNaN(e1)?0:$.x-l.project([j,o-e1]).x,this._radiusY=$.y-T.y}else{var x1=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(x1).x}this._updateBounds()}});function UV(o,V,l){return new nt(o,V,l)}var c0=z0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,V){g(this,V),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var V=1/0,l=null,u=a4,f,_,T=0,E=this._parts.length;T<E;T++)for(var $=this._parts[T],j=1,e1=$.length;j<e1;j++){f=$[j-1],_=$[j];var x1=u(o,f,_,!0);x1<V&&(V=x1,l=u(o,f,_))}return l&&(l.distance=Math.sqrt(V)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return xr(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,V){return V=V||this._defaultShape(),o=n1(o),V.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new H1,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return u5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var V=[],l=u5(o),u=0,f=o.length;u<f;u++)l?(V[u]=n1(o[u]),this._bounds.extend(V[u])):V[u]=this._convertLatLngs(o[u]);return V},_project:function(){var o=new U;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),V=new X(o,o);this._rawPxBounds&&(this._pxBounds=new U([this._rawPxBounds.min.subtract(V),this._rawPxBounds.max.add(V)]))},_projectLatlngs:function(o,V,l){var u=o[0]instanceof V1,f=o.length,_,T;if(u){for(T=[],_=0;_<f;_++)T[_]=this._map.latLngToLayerPoint(o[_]),l.extend(T[_]);V.push(T)}else for(_=0;_<f;_++)this._projectLatlngs(o[_],V,l)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var V=this._parts,l,u,f,_,T,E,$;for(l=0,f=0,_=this._rings.length;l<_;l++)for($=this._rings[l],u=0,T=$.length;u<T-1;u++)E=Ar($[u],$[u+1],o,u,!0),E&&(V[f]=V[f]||[],V[f].push(E[0]),(E[1]!==$[u+1]||u===T-2)&&(V[f].push(E[1]),f++))}},_simplifyPoints:function(){for(var o=this._parts,V=this.options.smoothFactor,l=0,u=o.length;l<u;l++)o[l]=mr(o[l],V)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,V){var l,u,f,_,T,E,$=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(l=0,_=this._parts.length;l<_;l++)for(E=this._parts[l],u=0,T=E.length,f=T-1;u<T;f=u++)if(!(!V&&u===0)&&hr(o,E[f],E[u])<=$)return!0;return!1}});function jV(o,V){return new c0(o,V)}c0._flat=vr;var o7=c0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ur(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var V=c0.prototype._convertLatLngs.call(this,o),l=V.length;return l>=2&&V[0]instanceof V1&&V[0].equals(V[l-1])&&V.pop(),V},_setLatLngs:function(o){c0.prototype._setLatLngs.call(this,o),u5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return u5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,V=this.options.weight,l=new X(V,V);if(o=new U(o.min.subtract(l),o.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,f=this._rings.length,_;u<f;u++)_=pr(this._rings[u],o,!0),_.length&&this._parts.push(_)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var V=!1,l,u,f,_,T,E,$,j;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(_=0,$=this._parts.length;_<$;_++)for(l=this._parts[_],T=0,j=l.length,E=j-1;T<j;E=T++)u=l[T],f=l[E],u.y>o.y!=f.y>o.y&&o.x<(f.x-u.x)*(o.y-u.y)/(f.y-u.y)+u.x&&(V=!V);return V||c0.prototype._containsPoint.call(this,o,!0)}});function GV(o,V){return new o7(o,V)}var d0=M0.extend({initialize:function(o,V){g(this,V),this._layers={},o&&this.addData(o)},addData:function(o){var V=F(o)?o:o.features,l,u,f;if(V){for(l=0,u=V.length;l<u;l++)f=V[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var _=this.options;if(_.filter&&!_.filter(o))return this;var T=D9(o,_);return T?(T.feature=I9(o),T.defaultOptions=T.options,this.resetStyle(T),_.onEachFeature&&_.onEachFeature(o,T),this.addLayer(T)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=e({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(V){this._setLayerStyle(V,o)},this)},_setLayerStyle:function(o,V){o.setStyle&&(typeof V=="function"&&(V=V(o.feature)),o.setStyle(V))}});function D9(o,V){var l=o.type==="Feature"?o.geometry:o,u=l?l.coordinates:null,f=[],_=V&&V.pointToLayer,T=V&&V.coordsToLatLng||st,E,$,j,e1;if(!u&&!l)return null;switch(l.type){case"Point":return E=T(u),Sr(_,o,E,V);case"MultiPoint":for(j=0,e1=u.length;j<e1;j++)E=T(u[j]),f.push(Sr(_,o,E,V));return new M0(f);case"LineString":case"MultiLineString":return $=$9(u,l.type==="LineString"?0:1,T),new c0($,V);case"Polygon":case"MultiPolygon":return $=$9(u,l.type==="Polygon"?1:2,T),new o7($,V);case"GeometryCollection":for(j=0,e1=l.geometries.length;j<e1;j++){var x1=D9({geometry:l.geometries[j],type:"Feature",properties:o.properties},V);x1&&f.push(x1)}return new M0(f);case"FeatureCollection":for(j=0,e1=l.features.length;j<e1;j++){var P1=D9(l.features[j],V);P1&&f.push(P1)}return new M0(f);default:throw new Error("Invalid GeoJSON object.")}}function Sr(o,V,l,u){return o?o(V,l):new B9(l,u&&u.markersInheritOptions&&u)}function st(o){return new V1(o[1],o[0],o[2])}function $9(o,V,l){for(var u=[],f=0,_=o.length,T;f<_;f++)T=V?$9(o[f],V-1,l):(l||st)(o[f]),u.push(T);return u}function Lt(o,V){return o=n1(o),o.alt!==void 0?[p(o.lng,V),p(o.lat,V),p(o.alt,V)]:[p(o.lng,V),p(o.lat,V)]}function z9(o,V,l,u){for(var f=[],_=0,T=o.length;_<T;_++)f.push(V?z9(o[_],u5(o[_])?0:V-1,l,u):Lt(o[_],u));return!V&&l&&f.length>0&&f.push(f[0].slice()),f}function a7(o,V){return o.feature?e({},o.feature,{geometry:V}):I9(V)}function I9(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var lt={toGeoJSON:function(o){return a7(this,{type:"Point",coordinates:Lt(this.getLatLng(),o)})}};B9.include(lt),nt.include(lt),R9.include(lt),c0.include({toGeoJSON:function(o){var V=!u5(this._latlngs),l=z9(this._latlngs,V?1:0,!1,o);return a7(this,{type:(V?"Multi":"")+"LineString",coordinates:l})}}),o7.include({toGeoJSON:function(o){var V=!u5(this._latlngs),l=V&&!u5(this._latlngs[0]),u=z9(this._latlngs,l?2:V?1:0,!0,o);return V||(u=[u]),a7(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),i7.include({toMultiPoint:function(o){var V=[];return this.eachLayer(function(l){V.push(l.toGeoJSON(o).geometry.coordinates)}),a7(this,{type:"MultiPoint",coordinates:V})},toGeoJSON:function(o){var V=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(V==="MultiPoint")return this.toMultiPoint(o);var l=V==="GeometryCollection",u=[];return this.eachLayer(function(f){if(f.toGeoJSON){var _=f.toGeoJSON(o);if(l)u.push(_.geometry);else{var T=I9(_);T.type==="FeatureCollection"?u.push.apply(u,T.features):u.push(T)}}}),l?a7(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function br(o,V){return new d0(o,V)}var qV=br,N9=O5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,V,l){this._url=o,this._bounds=u1(V),g(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){F1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&$2(this._image),this},bringToBack:function(){return this._map&&b5(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=u1(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",V=this._image=o?this._url:m1("img");if(M1(V,"leaflet-image-layer"),this._zoomAnimated&&M1(V,"leaflet-zoom-animated"),this.options.className&&M1(V,this.options.className),V.onselectstart=M,V.onmousemove=M,V.onload=C(this.fire,this,"load"),V.onerror=C(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(V.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=V.src;return}V.src=this._url,V.alt=this.options.alt},_animateZoom:function(o){var V=this._map.getZoomScale(o.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;a5(this._image,l,V)},_reset:function(){var o=this._image,V=new U(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=V.getSize();K1(o,V.min),o.style.width=l.x+"px",o.style.height=l.y+"px"},_updateOpacity:function(){e2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),YV=function(o,V,l){return new N9(o,V,l)},wr=N9.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",V=this._image=o?this._url:m1("video");if(M1(V,"leaflet-image-layer"),this._zoomAnimated&&M1(V,"leaflet-zoom-animated"),this.options.className&&M1(V,this.options.className),V.onselectstart=M,V.onmousemove=M,V.onloadeddata=C(this.fire,this,"load"),o){for(var l=V.getElementsByTagName("source"),u=[],f=0;f<l.length;f++)u.push(l[f].src);this._url=l.length>0?u:[V.src];return}F(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(V.style,"objectFit")&&(V.style.objectFit="fill"),V.autoplay=!!this.options.autoplay,V.loop=!!this.options.loop,V.muted=!!this.options.muted,V.playsInline=!!this.options.playsInline;for(var _=0;_<this._url.length;_++){var T=m1("source");T.src=this._url[_],V.appendChild(T)}}});function QV(o,V,l){return new wr(o,V,l)}var Zr=N9.extend({_initImage:function(){var o=this._image=this._url;M1(o,"leaflet-image-layer"),this._zoomAnimated&&M1(o,"leaflet-zoom-animated"),this.options.className&&M1(o,this.options.className),o.onselectstart=M,o.onmousemove=M}});function KV(o,V,l){return new Zr(o,V,l)}var Q5=O5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,V){o&&(o instanceof V1||F(o))?(this._latlng=n1(o),g(this,V)):(g(this,o),this._source=V),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&e2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&e2(this._container,1),this.bringToFront(),this.options.interactive&&(M1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(e2(this._container,0),this._removeTimeout=setTimeout(C(F1,void 0,this._container),200)):F1(this._container),this.options.interactive&&(R1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=n1(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&$2(this._container),this},bringToBack:function(){return this._map&&b5(this._container),this},_prepareOpen:function(o){var V=this._source;if(!V._map)return!1;if(V instanceof M0){V=null;var l=this._source._layers;for(var u in l)if(l[u]._map){V=l[u];break}if(!V)return!1;this._source=V}if(!o)if(V.getCenter)o=V.getCenter();else if(V.getLatLng)o=V.getLatLng();else if(V.getBounds)o=V.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,V=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof V=="string")o.innerHTML=V;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(V)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),V=a1(this.options.offset),l=this._getAnchor();this._zoomAnimated?K1(this._container,o.add(l)):V=V.add(o).add(l);var u=this._containerBottom=-V.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+V.x;this._container.style.bottom=u+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});C1.include({_initOverlay:function(o,V,l,u){var f=V;return f instanceof o||(f=new o(u).setContent(V)),l&&f.setLatLng(l),f}}),O5.include({_initOverlay:function(o,V,l,u){var f=l;return f instanceof o?(g(f,u),f._source=this):(f=V&&!u?V:new o(u,this),f.setContent(l)),f}});var W9=Q5.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Q5.prototype.openOn.call(this,o)},onAdd:function(o){Q5.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof z0||this._source.on("preclick",h1))},onRemove:function(o){Q5.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof z0||this._source.off("preclick",h1))},getEvents:function(){var o=Q5.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",V=this._container=m1("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=m1("div",o+"-content-wrapper",V);if(this._contentNode=m1("div",o+"-content",l),v2(V),D1(this._contentNode),A1(V,"contextmenu",h1),this._tipContainer=m1("div",o+"-tip-container",V),this._tip=m1("div",o+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=m1("a",o+"-close-button",V);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',A1(u,"click",function(f){C2(f),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,V=o.style;V.width="",V.whiteSpace="nowrap";var l=o.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),V.width=l+1+"px",V.whiteSpace="",V.height="";var u=o.offsetHeight,f=this.options.maxHeight,_="leaflet-popup-scrolled";f&&u>f?(V.height=f+"px",M1(o,_)):R1(o,_),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var V=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),l=this._getAnchor();K1(this._container,V.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,V=parseInt(N1(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+V,u=this._containerWidth,f=new X(this._containerLeft,-l-this._containerBottom);f._add(K2(this._container));var _=o.layerPointToContainerPoint(f),T=a1(this.options.autoPanPadding),E=a1(this.options.autoPanPaddingTopLeft||T),$=a1(this.options.autoPanPaddingBottomRight||T),j=o.getSize(),e1=0,x1=0;_.x+u+$.x>j.x&&(e1=_.x+u-j.x+$.x),_.x-e1-E.x<0&&(e1=_.x-E.x),_.y+l+$.y>j.y&&(x1=_.y+l-j.y+$.y),_.y-x1-E.y<0&&(x1=_.y-E.y),(e1||x1)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([e1,x1]))}},_getAnchor:function(){return a1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),XV=function(o,V){return new W9(o,V)};C1.mergeOptions({closePopupOnClick:!0}),C1.include({openPopup:function(o,V,l){return this._initOverlay(W9,o,V,l).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),O5.include({bindPopup:function(o,V){return this._popup=this._initOverlay(W9,this._popup,o,V),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof M0||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){H5(o);var V=o.layer||o.target;if(this._popup._source===V&&!(V instanceof z0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=V,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var U9=Q5.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Q5.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Q5.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Q5.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",V=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=m1("div",V),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+H(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var V,l,u=this._map,f=this._container,_=u.latLngToContainerPoint(u.getCenter()),T=u.layerPointToContainerPoint(o),E=this.options.direction,$=f.offsetWidth,j=f.offsetHeight,e1=a1(this.options.offset),x1=this._getAnchor();E==="top"?(V=$/2,l=j):E==="bottom"?(V=$/2,l=0):E==="center"?(V=$/2,l=j/2):E==="right"?(V=0,l=j/2):E==="left"?(V=$,l=j/2):T.x<_.x?(E="right",V=0,l=j/2):(E="left",V=$+(e1.x+x1.x)*2,l=j/2),o=o.subtract(a1(V,l,!0)).add(e1).add(x1),R1(f,"leaflet-tooltip-right"),R1(f,"leaflet-tooltip-left"),R1(f,"leaflet-tooltip-top"),R1(f,"leaflet-tooltip-bottom"),M1(f,"leaflet-tooltip-"+E),K1(f,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&e2(this._container,o)},_animateZoom:function(o){var V=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(V)},_getAnchor:function(){return a1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),JV=function(o,V){return new U9(o,V)};C1.include({openTooltip:function(o,V,l){return this._initOverlay(U9,o,V,l).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),O5.include({bindTooltip:function(o,V){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(U9,this._tooltip,o,V),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var V=o?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[V](l),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof M0||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var V=typeof o.getElement=="function"&&o.getElement();V&&(A1(V,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),A1(V,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var V=typeof o.getElement=="function"&&o.getElement();V&&V.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var V=this;this._map.once("moveend",function(){V._openOnceFlag=!1,V._openTooltip(o)});return}this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0)}},_moveTooltip:function(o){var V=o.latlng,l,u;this._tooltip.options.sticky&&o.originalEvent&&(l=this._map.mouseEventToContainerPoint(o.originalEvent),u=this._map.containerPointToLayerPoint(l),V=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(V)}});var yr=C7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var V=o&&o.tagName==="DIV"?o:document.createElement("div"),l=this.options;if(l.html instanceof Element?(S5(V),V.appendChild(l.html)):V.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=a1(l.bgPos);V.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(V,"icon"),V},createShadow:function(){return null}});function tn(o){return new yr(o)}C7.Default=H4;var V4=O5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:l1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){g(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),F1(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&($2(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(b5(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=n(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof X?o:new X(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var V=this.getPane().children,l=-o(-1/0,1/0),u=0,f=V.length,_;u<f;u++)_=V[u].style.zIndex,V[u]!==this._container&&_&&(l=o(l,+_));isFinite(l)&&(this.options.zIndex=l+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!l1.ielt9){e2(this._container,this.options.opacity);var o=+new Date,V=!1,l=!1;for(var u in this._tiles){var f=this._tiles[u];if(!(!f.current||!f.loaded)){var _=Math.min(1,(o-f.loaded)/200);e2(f.el,_),_<1?V=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),V&&(f1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this))}},_onOpaqueTile:M,_initContainer:function(){this._container||(this._container=m1("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,V=this.options.maxZoom;if(o!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===o?(this._levels[l].el.style.zIndex=V-Math.abs(o-l),this._onUpdateLevel(l)):(F1(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[o],f=this._map;return u||(u=this._levels[o]={},u.el=m1("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=V,u.origin=f.project(f.unproject(f.getPixelOrigin()),o).round(),u.zoom=o,this._setZoomTransform(u,f.getCenter(),f.getZoom()),M(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:M,_onRemoveLevel:M,_onCreateLevel:M,_pruneTiles:function(){if(this._map){var o,V,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)V=this._tiles[o],V.retain=V.current;for(o in this._tiles)if(V=this._tiles[o],V.current&&!V.active){var u=V.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var V in this._tiles)this._tiles[V].coords.z===o&&this._removeTile(V)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)F1(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,V,l,u){var f=Math.floor(o/2),_=Math.floor(V/2),T=l-1,E=new X(+f,+_);E.z=+T;var $=this._tileCoordsToKey(E),j=this._tiles[$];return j&&j.active?(j.retain=!0,!0):(j&&j.loaded&&(j.retain=!0),T>u?this._retainParent(f,_,T,u):!1)},_retainChildren:function(o,V,l,u){for(var f=2*o;f<2*o+2;f++)for(var _=2*V;_<2*V+2;_++){var T=new X(f,_);T.z=l+1;var E=this._tileCoordsToKey(T),$=this._tiles[E];if($&&$.active){$.retain=!0;continue}else $&&$.loaded&&($.retain=!0);l+1<u&&this._retainChildren(f,_,l+1,u)}},_resetView:function(o){var V=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),V,V)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var V=this.options;return V.minNativeZoom!==void 0&&o<V.minNativeZoom?V.minNativeZoom:V.maxNativeZoom!==void 0&&V.maxNativeZoom<o?V.maxNativeZoom:o},_setView:function(o,V,l,u){var f=Math.round(V);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var _=this.options.updateWhenZooming&&f!==this._tileZoom;(!u||_)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(o),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(o,V)},_setZoomTransforms:function(o,V){for(var l in this._levels)this._setZoomTransform(this._levels[l],o,V)},_setZoomTransform:function(o,V,l){var u=this._map.getZoomScale(l,o.zoom),f=o.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(V,l)).round();l1.any3d?a5(o.el,f,u):K1(o.el,f)},_resetGrid:function(){var o=this._map,V=o.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=V.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,V.wrapLng[0]],u).x/l.x),Math.ceil(o.project([0,V.wrapLng[1]],u).x/l.y)],this._wrapY=V.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([V.wrapLat[0],0],u).y/l.x),Math.ceil(o.project([V.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var V=this._map,l=V._animatingZoom?Math.max(V._animateToZoom,V.getZoom()):V.getZoom(),u=V.getZoomScale(l,this._tileZoom),f=V.project(o,this._tileZoom).floor(),_=V.getSize().divideBy(u*2);return new U(f.subtract(_),f.add(_))},_update:function(o){var V=this._map;if(V){var l=this._clampZoom(V.getZoom());if(o===void 0&&(o=V.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(o),f=this._pxBoundsToTileRange(u),_=f.getCenter(),T=[],E=this.options.keepBuffer,$=new U(f.getBottomLeft().subtract([E,-E]),f.getTopRight().add([E,-E]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var j in this._tiles){var e1=this._tiles[j].coords;(e1.z!==this._tileZoom||!$.contains(new X(e1.x,e1.y)))&&(this._tiles[j].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(o,l);return}for(var x1=f.min.y;x1<=f.max.y;x1++)for(var P1=f.min.x;P1<=f.max.x;P1++){var N2=new X(P1,x1);if(N2.z=this._tileZoom,!!this._isValidTile(N2)){var x2=this._tiles[this._tileCoordsToKey(N2)];x2?x2.current=!0:T.push(N2)}}if(T.sort(function(X2,V7){return X2.distanceTo(_)-V7.distanceTo(_)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var m5=document.createDocumentFragment();for(P1=0;P1<T.length;P1++)this._addTile(T[P1],m5);this._level.el.appendChild(m5)}}}},_isValidTile:function(o){var V=this._map.options.crs;if(!V.infinite){var l=this._globalTileRange;if(!V.wrapLng&&(o.x<l.min.x||o.x>l.max.x)||!V.wrapLat&&(o.y<l.min.y||o.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(o);return u1(this.options.bounds).overlaps(u)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var V=this._map,l=this.getTileSize(),u=o.scaleBy(l),f=u.add(l),_=V.unproject(u,o.z),T=V.unproject(f,o.z);return[_,T]},_tileCoordsToBounds:function(o){var V=this._tileCoordsToNwSe(o),l=new H1(V[0],V[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var V=o.split(":"),l=new X(+V[0],+V[1]);return l.z=+V[2],l},_removeTile:function(o){var V=this._tiles[o];V&&(F1(V.el),delete this._tiles[o],this.fire("tileunload",{tile:V.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){M1(o,"leaflet-tile");var V=this.getTileSize();o.style.width=V.x+"px",o.style.height=V.y+"px",o.onselectstart=M,o.onmousemove=M,l1.ielt9&&this.options.opacity<1&&e2(o,this.options.opacity)},_addTile:function(o,V){var l=this._getTilePos(o),u=this._tileCoordsToKey(o),f=this.createTile(this._wrapCoords(o),C(this._tileReady,this,o));this._initTile(f),this.createTile.length<2&&o1(C(this._tileReady,this,o,null,f)),K1(f,l),this._tiles[u]={el:f,coords:o,current:!0},V.appendChild(f),this.fire("tileloadstart",{tile:f,coords:o})},_tileReady:function(o,V,l){V&&this.fire("tileerror",{error:V,tile:l,coords:o});var u=this._tileCoordsToKey(o);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?(e2(l.el,0),f1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),V||(M1(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),l1.ielt9||!this._map._fadeAnimated?o1(this._pruneTiles,this):setTimeout(C(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var V=new X(this._wrapX?s(o.x,this._wrapX):o.x,this._wrapY?s(o.y,this._wrapY):o.y);return V.z=o.z,V},_pxBoundsToTileRange:function(o){var V=this.getTileSize();return new U(o.min.unscaleBy(V).floor(),o.max.unscaleBy(V).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function en(o){return new V4(o)}var H7=V4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,V){this._url=o,V=g(this,V),V.detectRetina&&l1.retina&&V.maxZoom>0?(V.tileSize=Math.floor(V.tileSize/2),V.zoomReverse?(V.zoomOffset--,V.minZoom=Math.min(V.maxZoom,V.minZoom+1)):(V.zoomOffset++,V.maxZoom=Math.max(V.minZoom,V.maxZoom-1)),V.minZoom=Math.max(0,V.minZoom)):V.zoomReverse?V.minZoom=Math.min(V.maxZoom,V.minZoom):V.maxZoom=Math.max(V.minZoom,V.maxZoom),typeof V.subdomains=="string"&&(V.subdomains=V.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,V){return this._url===o&&V===void 0&&(V=!0),this._url=o,V||this.redraw(),this},createTile:function(o,V){var l=document.createElement("img");return A1(l,"load",C(this._tileOnLoad,this,V,l)),A1(l,"error",C(this._tileOnError,this,V,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(o),l},getTileUrl:function(o){var V={r:l1.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-o.y;this.options.tms&&(V.y=l),V["-y"]=l}return k(this._url,e(V,this.options))},_tileOnLoad:function(o,V){l1.ielt9?setTimeout(C(o,this,null,V),0):o(null,V)},_tileOnError:function(o,V,l){var u=this.options.errorTileUrl;u&&V.getAttribute("src")!==u&&(V.src=u),o(l,V)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,V=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(o=V-o),o+u},_getSubdomain:function(o){var V=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[V]},_abortLoading:function(){var o,V;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(V=this._tiles[o].el,V.onload=M,V.onerror=M,!V.complete)){V.src=B;var l=this._tiles[o].coords;F1(V),delete this._tiles[o],this.fire("tileabort",{tile:V,coords:l})}},_removeTile:function(o){var V=this._tiles[o];if(V)return V.el.setAttribute("src",B),V4.prototype._removeTile.call(this,o)},_tileReady:function(o,V,l){if(!(!this._map||l&&l.getAttribute("src")===B))return V4.prototype._tileReady.call(this,o,V,l)}});function Or(o,V){return new H7(o,V)}var kr=H7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,V){this._url=o;var l=e({},this.defaultWmsParams);for(var u in V)u in this.options||(l[u]=V[u]);V=g(this,V);var f=V.detectRetina&&l1.retina?2:1,_=this.getTileSize();l.width=_.x*f,l.height=_.y*f,this.wmsParams=l},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var V=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[V]=this._crs.code,H7.prototype.onAdd.call(this,o)},getTileUrl:function(o){var V=this._tileCoordsToNwSe(o),l=this._crs,u=J(l.project(V[0]),l.project(V[1])),f=u.min,_=u.max,T=(this._wmsVersion>=1.3&&this._crs===gr?[f.y,f.x,_.y,_.x]:[f.x,f.y,_.x,_.y]).join(","),E=H7.prototype.getTileUrl.call(this,o);return E+Z(this.wmsParams,E,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(o,V){return e(this.wmsParams,o),V||this.redraw(),this}});function rn(o,V){return new kr(o,V)}H7.WMS=kr,Or.wms=rn;var p0=O5.extend({options:{padding:.1},initialize:function(o){g(this,o),H(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,V){var l=this._map.getZoomScale(V,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,V),_=u.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(o,V));l1.any3d?a5(this._container,_,l):K1(this._container,_)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,V=this._map.getSize(),l=this._map.containerPointToLayerPoint(V.multiplyBy(-o)).round();this._bounds=new U(l,l.add(V.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Tr=p0.extend({options:{tolerance:0},getEvents:function(){var o=p0.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){p0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");A1(o,"mousemove",this._onMouseMove,this),A1(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A1(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){f1(this._redrawRequest),delete this._ctx,F1(this._container),g1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var V in this._layers)o=this._layers[V],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){p0.prototype._update.call(this);var o=this._bounds,V=this._container,l=o.getSize(),u=l1.retina?2:1;K1(V,o.min),V.width=u*l.x,V.height=u*l.y,V.style.width=l.x+"px",V.style.height=l.y+"px",l1.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){p0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[H(o)]=o;var V=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=V),this._drawLast=V,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var V=o._order,l=V.next,u=V.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete o._order,delete this._layers[H(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var V=o.options.dashArray.split(/[, ]+/),l=[],u,f;for(f=0;f<V.length;f++){if(u=Number(V[f]),isNaN(u))return;l.push(u)}o.options._dashArray=l}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||o1(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var V=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new U,this._redrawBounds.extend(o._pxBounds.min.subtract([V,V])),this._redrawBounds.extend(o._pxBounds.max.add([V,V]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var V=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,V.x,V.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,V=this._redrawBounds;if(this._ctx.save(),V){var l=V.getSize();this._ctx.beginPath(),this._ctx.rect(V.min.x,V.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)o=u.layer,(!V||o._pxBounds&&o._pxBounds.intersects(V))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,V){if(this._drawing){var l,u,f,_,T=o._parts,E=T.length,$=this._ctx;if(E){for($.beginPath(),l=0;l<E;l++){for(u=0,f=T[l].length;u<f;u++)_=T[l][u],$[u?"lineTo":"moveTo"](_.x,_.y);V&&$.closePath()}this._fillStroke($,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var V=o._point,l=this._ctx,u=Math.max(Math.round(o._radius),1),f=(Math.max(Math.round(o._radiusY),1)||u)/u;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(V.x,V.y/f,u,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,o)}},_fillStroke:function(o,V){var l=V.options;l.fill&&(o.globalAlpha=l.fillOpacity,o.fillStyle=l.fillColor||l.color,o.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(o.setLineDash&&o.setLineDash(V.options&&V.options._dashArray||[]),o.globalAlpha=l.opacity,o.lineWidth=l.weight,o.strokeStyle=l.color,o.lineCap=l.lineCap,o.lineJoin=l.lineJoin,o.stroke())},_onClick:function(o){for(var V=this._map.mouseEventToLayerPoint(o),l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(V)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var V=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,V)}},_handleMouseOut:function(o){var V=this._hoveredLayer;V&&(R1(this._container,"leaflet-interactive"),this._fireEvent([V],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,V){if(!this._mouseHoverThrottled){for(var l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(V)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(o),u&&(M1(this._container,"leaflet-interactive"),this._fireEvent([u],o,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(C(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,V,l){this._map._fireDOMEvent(V,l||V.type,o)},_bringToFront:function(o){var V=o._order;if(V){var l=V.next,u=V.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),V.prev=this._drawLast,this._drawLast.next=V,V.next=null,this._drawLast=V,this._requestRedraw(o)}},_bringToBack:function(o){var V=o._order;if(V){var l=V.next,u=V.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),V.prev=null,V.next=this._drawFirst,this._drawFirst.prev=V,this._drawFirst=V,this._requestRedraw(o)}}});function Pr(o){return l1.canvas?new Tr(o):null}var n4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Cn={_initContainer:function(){this._container=m1("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(p0.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var V=o._container=n4("shape");M1(V,"leaflet-vml-shape "+(this.options.className||"")),V.coordsize="1 1",o._path=n4("path"),V.appendChild(o._path),this._updateStyle(o),this._layers[H(o)]=o},_addPath:function(o){var V=o._container;this._container.appendChild(V),o.options.interactive&&o.addInteractiveTarget(V)},_removePath:function(o){var V=o._container;F1(V),o.removeInteractiveTarget(V),delete this._layers[H(o)]},_updateStyle:function(o){var V=o._stroke,l=o._fill,u=o.options,f=o._container;f.stroked=!!u.stroke,f.filled=!!u.fill,u.stroke?(V||(V=o._stroke=n4("stroke")),f.appendChild(V),V.weight=u.weight+"px",V.color=u.color,V.opacity=u.opacity,u.dashArray?V.dashStyle=F(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):V.dashStyle="",V.endcap=u.lineCap.replace("butt","flat"),V.joinstyle=u.lineJoin):V&&(f.removeChild(V),o._stroke=null),u.fill?(l||(l=o._fill=n4("fill")),f.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(f.removeChild(l),o._fill=null)},_updateCircle:function(o){var V=o._point.round(),l=Math.round(o._radius),u=Math.round(o._radiusY||l);this._setPath(o,o._empty()?"M0 0":"AL "+V.x+","+V.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(o,V){o._path.v=V},_bringToFront:function(o){$2(o._container)},_bringToBack:function(o){b5(o._container)}},j9=l1.vml?n4:D2,s4=p0.extend({_initContainer:function(){this._container=j9("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=j9("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){F1(this._container),g1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){p0.prototype._update.call(this);var o=this._bounds,V=o.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(V))&&(this._svgSize=V,l.setAttribute("width",V.x),l.setAttribute("height",V.y)),K1(l,o.min),l.setAttribute("viewBox",[o.min.x,o.min.y,V.x,V.y].join(" ")),this.fire("update")}},_initPath:function(o){var V=o._path=j9("path");o.options.className&&M1(V,o.options.className),o.options.interactive&&M1(V,"leaflet-interactive"),this._updateStyle(o),this._layers[H(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){F1(o._path),o.removeInteractiveTarget(o._path),delete this._layers[H(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var V=o._path,l=o.options;V&&(l.stroke?(V.setAttribute("stroke",l.color),V.setAttribute("stroke-opacity",l.opacity),V.setAttribute("stroke-width",l.weight),V.setAttribute("stroke-linecap",l.lineCap),V.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?V.setAttribute("stroke-dasharray",l.dashArray):V.removeAttribute("stroke-dasharray"),l.dashOffset?V.setAttribute("stroke-dashoffset",l.dashOffset):V.removeAttribute("stroke-dashoffset")):V.setAttribute("stroke","none"),l.fill?(V.setAttribute("fill",l.fillColor||l.color),V.setAttribute("fill-opacity",l.fillOpacity),V.setAttribute("fill-rule",l.fillRule||"evenodd")):V.setAttribute("fill","none"))},_updatePoly:function(o,V){this._setPath(o,M5(o._parts,V))},_updateCircle:function(o){var V=o._point,l=Math.max(Math.round(o._radius),1),u=Math.max(Math.round(o._radiusY),1)||l,f="a"+l+","+u+" 0 1,0 ",_=o._empty()?"M0 0":"M"+(V.x-l)+","+V.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(o,_)},_setPath:function(o,V){o._path.setAttribute("d",V)},_bringToFront:function(o){$2(o._path)},_bringToBack:function(o){b5(o._path)}});l1.vml&&s4.include(Cn);function Fr(o){return l1.svg||l1.vml?new s4(o):null}C1.include({getRenderer:function(o){var V=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return V||(V=this._renderer=this._createRenderer()),this.hasLayer(V)||this.addLayer(V),V},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var V=this._paneRenderers[o];return V===void 0&&(V=this._createRenderer({pane:o}),this._paneRenderers[o]=V),V},_createRenderer:function(o){return this.options.preferCanvas&&Pr(o)||Fr(o)}});var Er=o7.extend({initialize:function(o,V){o7.prototype.initialize.call(this,this._boundsToLatLngs(o),V)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=u1(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function on(o,V){return new Er(o,V)}s4.create=j9,s4.pointsToPath=M5,d0.geometryToLayer=D9,d0.coordsToLatLng=st,d0.coordsToLatLngs=$9,d0.latLngToCoords=Lt,d0.latLngsToCoords=z9,d0.getFeature=a7,d0.asFeature=I9,C1.mergeOptions({boxZoom:!0});var Br=Y5.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){A1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){g1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){F1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),s0(),A3(),this._startPoint=this._map.mouseEventToContainerPoint(o),A1(document,{contextmenu:H5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=m1("div","leaflet-zoom-box",this._container),M1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var V=new U(this._point,this._startPoint),l=V.getSize();K1(this._box,V.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(F1(this._box),R1(this._container,"leaflet-crosshair")),p2(),v3(),g1(document,{contextmenu:H5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(C(this._resetState,this),0);var V=new H1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(V).fire("boxzoomend",{boxZoomBounds:V})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});C1.addInitHook("addHandler","boxZoom",Br),C1.mergeOptions({doubleClickZoom:!0});var Rr=Y5.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var V=this._map,l=V.getZoom(),u=V.options.zoomDelta,f=o.originalEvent.shiftKey?l-u:l+u;V.options.doubleClickZoom==="center"?V.setZoom(f):V.setZoomAround(o.containerPoint,f)}});C1.addInitHook("addHandler","doubleClickZoom",Rr),C1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Dr=Y5.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new $0(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}M1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){R1(this._map._container,"leaflet-grab"),R1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var V=u1(this._map.options.maxBounds);this._offsetLimit=J(this._map.latLngToContainerPoint(V.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(V.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var V=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(V),this._prunePositions(V)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),V=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=V.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,V){return o-(o-V)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),V=this._offsetLimit;o.x<V.min.x&&(o.x=this._viscousLimit(o.x,V.min.x)),o.y<V.min.y&&(o.y=this._viscousLimit(o.y,V.min.y)),o.x>V.max.x&&(o.x=this._viscousLimit(o.x,V.max.x)),o.y>V.max.y&&(o.y=this._viscousLimit(o.y,V.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,V=Math.round(o/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,f=(u-V+l)%o+V-l,_=(u+V+l)%o-V-l,T=Math.abs(f+l)<Math.abs(_+l)?f:_;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(o){var V=this._map,l=V.options,u=!l.inertia||o.noInertia||this._times.length<2;if(V.fire("dragend",o),u)V.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),_=(this._lastTime-this._times[0])/1e3,T=l.easeLinearity,E=f.multiplyBy(T/_),$=E.distanceTo([0,0]),j=Math.min(l.inertiaMaxSpeed,$),e1=E.multiplyBy(j/$),x1=j/(l.inertiaDeceleration*T),P1=e1.multiplyBy(-x1/2).round();!P1.x&&!P1.y?V.fire("moveend"):(P1=V._limitOffset(P1,V.options.maxBounds),o1(function(){V.panBy(P1,{duration:x1,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});C1.addInitHook("addHandler","dragging",Dr),C1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var $r=Y5.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),A1(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),g1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,V=document.documentElement,l=o.scrollTop||V.scrollTop,u=o.scrollLeft||V.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var V=this._panKeys={},l=this.keyCodes,u,f;for(u=0,f=l.left.length;u<f;u++)V[l.left[u]]=[-1*o,0];for(u=0,f=l.right.length;u<f;u++)V[l.right[u]]=[o,0];for(u=0,f=l.down.length;u<f;u++)V[l.down[u]]=[0,o];for(u=0,f=l.up.length;u<f;u++)V[l.up[u]]=[0,-1*o]},_setZoomDelta:function(o){var V=this._zoomKeys={},l=this.keyCodes,u,f;for(u=0,f=l.zoomIn.length;u<f;u++)V[l.zoomIn[u]]=o;for(u=0,f=l.zoomOut.length;u<f;u++)V[l.zoomOut[u]]=-o},_addHooks:function(){A1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){g1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var V=o.keyCode,l=this._map,u;if(V in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[V],o.shiftKey&&(u=a1(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(a1(u),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(f)}else l.panBy(u)}else if(V in this._zoomKeys)l.setZoom(l.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[V]);else if(V===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;H5(o)}}});C1.addInitHook("addHandler","keyboard",$r),C1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var zr=Y5.extend({addHooks:function(){A1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){g1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var V=P9(o),l=this._map.options.wheelDebounceTime;this._delta+=V,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(C(this._performZoom,this),u),H5(o)},_performZoom:function(){var o=this._map,V=o.getZoom(),l=this._map.options.zoomSnap||0;o._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,_=l?Math.ceil(f/l)*l:f,T=o._limitZoom(V+(this._delta>0?_:-_))-V;this._delta=0,this._startTime=null,T&&(o.options.scrollWheelZoom==="center"?o.setZoom(V+T):o.setZoomAround(this._lastMousePos,V+T))}});C1.addInitHook("addHandler","scrollWheelZoom",zr);var an=600;C1.mergeOptions({tapHold:l1.touchNative&&l1.safari&&l1.mobile,tapTolerance:15});var Ir=Y5.extend({addHooks:function(){A1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){g1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var V=o.touches[0];this._startPos=this._newPos=new X(V.clientX,V.clientY),this._holdTimeout=setTimeout(C(function(){this._cancel(),this._isTapValid()&&(A1(document,"touchend",C2),A1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",V))},this),an),A1(document,"touchend touchcancel contextmenu",this._cancel,this),A1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){g1(document,"touchend",C2),g1(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),g1(document,"touchend touchcancel contextmenu",this._cancel,this),g1(document,"touchmove",this._onMove,this)},_onMove:function(o){var V=o.touches[0];this._newPos=new X(V.clientX,V.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,V){var l=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:V.screenX,screenY:V.screenY,clientX:V.clientX,clientY:V.clientY});l._simulated=!0,V.target.dispatchEvent(l)}});C1.addInitHook("addHandler","tapHold",Ir),C1.mergeOptions({touchZoom:l1.touch,bounceAtZoomLimits:!0});var Nr=Y5.extend({addHooks:function(){M1(this._map._container,"leaflet-touch-zoom"),A1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){R1(this._map._container,"leaflet-touch-zoom"),g1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var V=this._map;if(!(!o.touches||o.touches.length!==2||V._animatingZoom||this._zooming)){var l=V.mouseEventToContainerPoint(o.touches[0]),u=V.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=V.getSize()._divideBy(2),this._startLatLng=V.containerPointToLatLng(this._centerPoint),V.options.touchZoom!=="center"&&(this._pinchStartLatLng=V.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=V.getZoom(),this._moved=!1,this._zooming=!0,V._stop(),A1(document,"touchmove",this._onTouchMove,this),A1(document,"touchend touchcancel",this._onTouchEnd,this),C2(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var V=this._map,l=V.mouseEventToContainerPoint(o.touches[0]),u=V.mouseEventToContainerPoint(o.touches[1]),f=l.distanceTo(u)/this._startDist;if(this._zoom=V.getScaleZoom(f,this._startZoom),!V.options.bounceAtZoomLimits&&(this._zoom<V.getMinZoom()&&f<1||this._zoom>V.getMaxZoom()&&f>1)&&(this._zoom=V._limitZoom(this._zoom)),V.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var _=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(f===1&&_.x===0&&_.y===0)return;this._center=V.unproject(V.project(this._pinchStartLatLng,this._zoom).subtract(_),this._zoom)}this._moved||(V._moveStart(!0,!1),this._moved=!0),f1(this._animRequest);var T=C(V._move,V,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=o1(T,this,!0),C2(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,f1(this._animRequest),g1(document,"touchmove",this._onTouchMove,this),g1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});C1.addInitHook("addHandler","touchZoom",Nr),C1.BoxZoom=Br,C1.DoubleClickZoom=Rr,C1.Drag=Dr,C1.Keyboard=$r,C1.ScrollWheelZoom=zr,C1.TapHold=Ir,C1.TouchZoom=Nr,r.Bounds=U,r.Browser=l1,r.CRS=_1,r.Canvas=Tr,r.Circle=nt,r.CircleMarker=R9,r.Class=y1,r.Control=o2,r.DivIcon=yr,r.DivOverlay=Q5,r.DomEvent=v1,r.DomUtil=x3,r.Draggable=$0,r.Evented=O1,r.FeatureGroup=M0,r.GeoJSON=d0,r.GridLayer=V4,r.Handler=Y5,r.Icon=C7,r.ImageOverlay=N9,r.LatLng=V1,r.LatLngBounds=H1,r.Layer=O5,r.LayerGroup=i7,r.LineUtil=EV,r.Map=C1,r.Marker=B9,r.Mixin=yV,r.Path=z0,r.Point=X,r.PolyUtil=OV,r.Polygon=o7,r.Polyline=c0,r.Popup=W9,r.PosAnimation=T1,r.Projection=BV,r.Rectangle=Er,r.Renderer=p0,r.SVG=s4,r.SVGOverlay=Zr,r.TileLayer=H7,r.Tooltip=U9,r.Transformation=w2,r.Util=I1,r.VideoOverlay=wr,r.bind=C,r.bounds=J,r.canvas=Pr,r.circle=UV,r.circleMarker=WV,r.control=z2,r.divIcon=tn,r.extend=e,r.featureGroup=zV,r.geoJSON=br,r.geoJson=qV,r.gridLayer=en,r.icon=IV,r.imageOverlay=YV,r.latLng=n1,r.latLngBounds=u1,r.layerGroup=$V,r.map=y2,r.marker=NV,r.point=a1,r.polygon=GV,r.polyline=jV,r.popup=XV,r.rectangle=on,r.setOptions=g,r.stamp=H,r.svg=Fr,r.svgOverlay=KV,r.tileLayer=Or,r.tooltip=JV,r.transformation=L2,r.version=t,r.videoOverlay=QV;var Hn=window.L;r.noConflict=function(){return window.L=Hn,this},window.L=r}))});var Q9=globalThis,K9=Q9.ShadowRoot&&(Q9.ShadyCSS===void 0||Q9.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),Yr=new WeakMap,L4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K9&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Yr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Yr.set(e,t))}return t}toString(){return this.cssText}},u0=r=>new L4(typeof r=="string"?r:r+"",void 0,ct),w1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,C,a)=>i+(H=>{if(H._$cssResult$===!0)return H.cssText;if(typeof H=="number")return H;throw Error("Value passed to 'css' function must be a 'css' function result: "+H+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(C)+r[a+1],r[0]);return new L4(e,r,ct)},Qr=(r,t)=>{if(K9)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),C=Q9.litNonce;C!==void 0&&i.setAttribute("nonce",C),i.textContent=e.cssText,r.appendChild(i)}},dt=K9?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return u0(e)})(r):r;var{is:vn,defineProperty:xn,getOwnPropertyDescriptor:gn,getOwnPropertyNames:_n,getOwnPropertySymbols:Sn,getPrototypeOf:bn}=Object,I0=globalThis,Kr=I0.trustedTypes,wn=Kr?Kr.emptyScript:"",Zn=I0.reactiveElementPolyfillSupport,l4=(r,t)=>r,M4={toAttribute(r,t){switch(t){case Boolean:r=r?wn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},X9=(r,t)=>!vn(r,t),Xr={attribute:!0,type:String,converter:M4,reflect:!1,useDefault:!1,hasChanged:X9};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),I0.litPropertyMetadata??(I0.litPropertyMetadata=new WeakMap);var m0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Xr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),C=this.getPropertyDescriptor(t,i,e);C!==void 0&&xn(this.prototype,t,C)}}static getPropertyDescriptor(t,e,i){let{get:C,set:a}=gn(this.prototype,t)??{get(){return this[e]},set(H){this[e]=H}};return{get:C,set(H){let n=C?.call(this);a?.call(this,H),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xr}static _$Ei(){if(this.hasOwnProperty(l4("elementProperties")))return;let t=bn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(l4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(l4("properties"))){let e=this.properties,i=[..._n(e),...Sn(e)];for(let C of i)this.createProperty(C,e[C])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,C]of e)this.elementProperties.set(i,C)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let C=this._$Eu(e,i);C!==void 0&&this._$Eh.set(C,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let C of i)e.unshift(dt(C))}else t!==void 0&&e.push(dt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),C=this.constructor._$Eu(t,i);if(C!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:M4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(C):this.setAttribute(C,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,C=i._$Eh.get(t);if(C!==void 0&&this._$Em!==C){let a=i.getPropertyOptions(C),H=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:M4;this._$Em=C;let n=H.fromAttribute(e,a.type);this[C]=n??this._$Ej?.get(C)??n,this._$Em=null}}requestUpdate(t,e,i,C=!1,a){if(t!==void 0){let H=this.constructor;if(C===!1&&(a=this[t]),i??(i=H.getPropertyOptions(t)),!((i.hasChanged??X9)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(H._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:C,wrapped:a},H){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,H??e??this[t]),a!==!0||H!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),C===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[C,a]of this._$Ep)this[C]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[C,a]of i){let{wrapped:H}=a,n=this[C];H!==!0||this._$AL.has(C)||n===void 0||this.C(C,void 0,a,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};m0.elementStyles=[],m0.shadowRootOptions={mode:"open"},m0[l4("elementProperties")]=new Map,m0[l4("finalized")]=new Map,Zn?.({ReactiveElement:m0}),(I0.reactiveElementVersions??(I0.reactiveElementVersions=[])).push("2.1.2");var d4=globalThis,Jr=r=>r,J9=d4.trustedTypes,ti=J9?J9.createPolicy("lit-html",{createHTML:r=>r}):void 0,ai="$lit$",N0=`lit$${Math.random().toFixed(9).slice(2)}$`,Hi="?"+N0,yn=`<${Hi}>`,y3=document,p4=()=>y3.createComment(""),u4=r=>r===null||typeof r!="object"&&typeof r!="function",vt=Array.isArray,On=r=>vt(r)||typeof r?.[Symbol.iterator]=="function",pt=`[ 	
\f\r]`,c4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ei=/-->/g,ri=/>/g,w3=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ii=/'/g,Ci=/"/g,Vi=/^(?:script|style|textarea|title)$/i,xt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),S=xt(1),E1=xt(2),ef=xt(3),V5=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),oi=new WeakMap,Z3=y3.createTreeWalker(y3,129);function ni(r,t){if(!vt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ti!==void 0?ti.createHTML(t):t}var kn=(r,t)=>{let e=r.length-1,i=[],C,a=t===2?"<svg>":t===3?"<math>":"",H=c4;for(let n=0;n<e;n++){let s=r[n],M,p,h=-1,v=0;for(;v<s.length&&(H.lastIndex=v,p=H.exec(s),p!==null);)v=H.lastIndex,H===c4?p[1]==="!--"?H=ei:p[1]!==void 0?H=ri:p[2]!==void 0?(Vi.test(p[2])&&(C=RegExp("</"+p[2],"g")),H=w3):p[3]!==void 0&&(H=w3):H===w3?p[0]===">"?(H=C??c4,h=-1):p[1]===void 0?h=-2:(h=H.lastIndex-p[2].length,M=p[1],H=p[3]===void 0?w3:p[3]==='"'?Ci:ii):H===Ci||H===ii?H=w3:H===ei||H===ri?H=c4:(H=w3,C=void 0);let g=H===w3&&r[n+1].startsWith("/>")?" ":"";a+=H===c4?s+yn:h>=0?(i.push(M),s.slice(0,h)+ai+s.slice(h)+N0+g):s+N0+(h===-2?n:g)}return[ni(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},m4=class r{constructor({strings:t,_$litType$:e},i){let C;this.parts=[];let a=0,H=0,n=t.length-1,s=this.parts,[M,p]=kn(t,e);if(this.el=r.createElement(M,i),Z3.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(C=Z3.nextNode())!==null&&s.length<n;){if(C.nodeType===1){if(C.hasAttributes())for(let h of C.getAttributeNames())if(h.endsWith(ai)){let v=p[H++],g=C.getAttribute(h).split(N0),Z=/([.?@])?(.*)/.exec(v);s.push({type:1,index:a,name:Z[2],strings:g,ctor:Z[1]==="."?mt:Z[1]==="?"?ht:Z[1]==="@"?ft:s7}),C.removeAttribute(h)}else h.startsWith(N0)&&(s.push({type:6,index:a}),C.removeAttribute(h));if(Vi.test(C.tagName)){let h=C.textContent.split(N0),v=h.length-1;if(v>0){C.textContent=J9?J9.emptyScript:"";for(let g=0;g<v;g++)C.append(h[g],p4()),Z3.nextNode(),s.push({type:2,index:++a});C.append(h[v],p4())}}}else if(C.nodeType===8)if(C.data===Hi)s.push({type:2,index:a});else{let h=-1;for(;(h=C.data.indexOf(N0,h+1))!==-1;)s.push({type:7,index:a}),h+=N0.length-1}a++}}static createElement(t,e){let i=y3.createElement("template");return i.innerHTML=t,i}};function n7(r,t,e=r,i){if(t===V5)return t;let C=i!==void 0?e._$Co?.[i]:e._$Cl,a=u4(t)?void 0:t._$litDirective$;return C?.constructor!==a&&(C?._$AO?.(!1),a===void 0?C=void 0:(C=new a(r),C._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=C:e._$Cl=C),C!==void 0&&(t=n7(r,C._$AS(r,t.values),C,i)),t}var ut=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,C=(t?.creationScope??y3).importNode(e,!0);Z3.currentNode=C;let a=Z3.nextNode(),H=0,n=0,s=i[0];for(;s!==void 0;){if(H===s.index){let M;s.type===2?M=new h4(a,a.nextSibling,this,t):s.type===1?M=new s.ctor(a,s.name,s.strings,this,t):s.type===6&&(M=new At(a,this,t)),this._$AV.push(M),s=i[++n]}H!==s?.index&&(a=Z3.nextNode(),H++)}return Z3.currentNode=y3,C}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},h4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,C){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=C,this._$Cv=C?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=n7(this,t,e),u4(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==V5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):On(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==O&&u4(this._$AH)?this._$AA.nextSibling.data=t:this.T(y3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,C=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=m4.createElement(ni(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===C)this._$AH.p(e);else{let a=new ut(C,this),H=a.u(this.options);a.p(e),this.T(H),this._$AH=a}}_$AC(t){let e=oi.get(t.strings);return e===void 0&&oi.set(t.strings,e=new m4(t)),e}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,C=0;for(let a of t)C===e.length?e.push(i=new r(this.O(p4()),this.O(p4()),this,this.options)):i=e[C],i._$AI(a),C++;C<e.length&&(this._$AR(i&&i._$AB.nextSibling,C),e.length=C)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Jr(t).nextSibling;Jr(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},s7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,C,a){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=C,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}_$AI(t,e=this,i,C){let a=this.strings,H=!1;if(a===void 0)t=n7(this,t,e,0),H=!u4(t)||t!==this._$AH&&t!==V5,H&&(this._$AH=t);else{let n=t,s,M;for(t=a[0],s=0;s<a.length-1;s++)M=n7(this,n[i+s],e,s),M===V5&&(M=this._$AH[s]),H||(H=!u4(M)||M!==this._$AH[s]),M===O?t=O:t!==O&&(t+=(M??"")+a[s+1]),this._$AH[s]=M}H&&!C&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mt=class extends s7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}},ht=class extends s7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==O)}},ft=class extends s7{constructor(t,e,i,C,a){super(t,e,i,C,a),this.type=5}_$AI(t,e=this){if((t=n7(this,t,e,0)??O)===V5)return;let i=this._$AH,C=t===O&&i!==O||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==O&&(i===O||C);C&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},At=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){n7(this,t)}};var Tn=d4.litHtmlPolyfillSupport;Tn?.(m4,h4),(d4.litHtmlVersions??(d4.litHtmlVersions=[])).push("3.3.3");var si=(r,t,e)=>{let i=e?.renderBefore??t,C=i._$litPart$;if(C===void 0){let a=e?.renderBefore??null;i._$litPart$=C=new h4(t.insertBefore(p4(),a),a,void 0,e??{})}return C._$AI(r),C};var f4=globalThis,p1=class extends m0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=si(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V5}};p1._$litElement$=!0,p1.finalized=!0,f4.litElementHydrateSupport?.({LitElement:p1});var Pn=f4.litElementPolyfillSupport;Pn?.({LitElement:p1});(f4.litElementVersions??(f4.litElementVersions=[])).push("4.2.2");var t6="2026.10.19.3",A4="weather-station-flex-card",v4="Weather Station Flex Card";var W2=w1`
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
`,e6=w1`
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
`,r6=w1`
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
`,a2=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function L7(r,t,e,i){return S`<div class="seg" role="group" aria-label=${i}>
    ${r.map(C=>S`<button type="button" aria-pressed=${String(C.value===t)} @click=${()=>e(C.value)}>${C.label}</button>`)}
  </div>`}function h0(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function J2(r,t,e,i=O){return r?.show_title===!1?i===O?O:S`<div class="head"><span class="title"></span>${i}</div>`:S`<div class="head">
    <ha-icon icon=${r?.icon||t}></ha-icon>
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function l7(r,{label:t,value:e,unit:i,digits:C=0,color:a,entity:H}){let n=()=>h0(r,H);return S`<div class="reading" @click=${n} role=${H?"button":O} tabindex=${H?0:O}
    @keydown=${s=>(s.key==="Enter"||s.key===" ")&&n()}>
    <span class="v">${a2(e,C)}<small>${i||""}</small></span>
    <span class="l">${a?S`<span class="dot" style="background:${a}"></span>`:O}${t}</span>
  </div>`}var Fn=typeof global=="object"&&global&&global.Object===Object&&global,i6=Fn;var En=typeof self=="object"&&self&&self.Object===Object&&self,Bn=i6||En||Function("return this")(),h5=Bn;var Rn=h5.Symbol,f0=Rn;var Li=Object.prototype,Dn=Li.hasOwnProperty,$n=Li.toString,x4=f0?f0.toStringTag:void 0;function zn(r){var t=Dn.call(r,x4),e=r[x4];try{r[x4]=void 0;var i=!0}catch{}var C=$n.call(r);return i&&(t?r[x4]=e:delete r[x4]),C}var li=zn;var In=Object.prototype,Nn=In.toString;function Wn(r){return Nn.call(r)}var Mi=Wn;var Un="[object Null]",jn="[object Undefined]",ci=f0?f0.toStringTag:void 0;function Gn(r){return r==null?r===void 0?jn:Un:ci&&ci in Object(r)?li(r):Mi(r)}var K5=Gn;function qn(r){return r!=null&&typeof r=="object"}var f5=qn;var Yn="[object Symbol]";function Qn(r){return typeof r=="symbol"||f5(r)&&K5(r)==Yn}var C6=Qn;function Kn(r,t){for(var e=-1,i=r==null?0:r.length,C=Array(i);++e<i;)C[e]=t(r[e],e,r);return C}var di=Kn;var Xn=Array.isArray,O3=Xn;var Jn=1/0,pi=f0?f0.prototype:void 0,ui=pi?pi.toString:void 0;function mi(r){if(typeof r=="string")return r;if(O3(r))return di(r,mi)+"";if(C6(r))return ui?ui.call(r):"";var t=r+"";return t=="0"&&1/r==-Jn?"-0":t}var hi=mi;var ts=/\s/;function es(r){for(var t=r.length;t--&&ts.test(r.charAt(t)););return t}var fi=es;var rs=/^\s+/;function is(r){return r&&r.slice(0,fi(r)+1).replace(rs,"")}var Ai=is;function Cs(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var O2=Cs;var vi=NaN,os=/^[-+]0x[0-9a-f]+$/i,as=/^0b[01]+$/i,Hs=/^0o[0-7]+$/i,Vs=parseInt;function ns(r){if(typeof r=="number")return r;if(C6(r))return vi;if(O2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=O2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Ai(r);var e=as.test(r);return e||Hs.test(r)?Vs(r.slice(2),e?2:8):os.test(r)?vi:+r}var xi=ns;var gi=1/0,ss=17976931348623157e292;function Ls(r){if(!r)return r===0?r:0;if(r=xi(r),r===gi||r===-gi){var t=r<0?-1:1;return t*ss}return r===r?r:0}var gt=Ls;function ls(r){return r}var o6=ls;var Ms="[object AsyncFunction]",cs="[object Function]",ds="[object GeneratorFunction]",ps="[object Proxy]";function us(r){if(!O2(r))return!1;var t=K5(r);return t==cs||t==ds||t==Ms||t==ps}var M7=us;var ms=h5["__core-js_shared__"],a6=ms;var _i=(function(){var r=/[^.]+$/.exec(a6&&a6.keys&&a6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function hs(r){return!!_i&&_i in r}var Si=hs;var fs=Function.prototype,As=fs.toString;function vs(r){if(r!=null){try{return As.call(r)}catch{}try{return r+""}catch{}}return""}var bi=vs;var xs=/[\\^$.*+?()[\]{}|]/g,gs=/^\[object .+?Constructor\]$/,_s=Function.prototype,Ss=Object.prototype,bs=_s.toString,ws=Ss.hasOwnProperty,Zs=RegExp("^"+bs.call(ws).replace(xs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ys(r){if(!O2(r)||Si(r))return!1;var t=M7(r)?Zs:gs;return t.test(bi(r))}var wi=ys;function Os(r,t){return r?.[t]}var Zi=Os;function ks(r,t){var e=Zi(r,t);return wi(e)?e:void 0}var c7=ks;var yi=Object.create,Ts=(function(){function r(){}return function(t){if(!O2(t))return{};if(yi)return yi(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),Oi=Ts;function Ps(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var ki=Ps;function Fs(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var Ti=Fs;var Es=800,Bs=16,Rs=Date.now;function Ds(r){var t=0,e=0;return function(){var i=Rs(),C=Bs-(i-e);if(e=i,C>0){if(++t>=Es)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var Pi=Ds;function $s(r){return function(){return r}}var Fi=$s;var zs=(function(){try{var r=c7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),d7=zs;var Is=d7?function(r,t){return d7(r,"toString",{configurable:!0,enumerable:!1,value:Fi(t),writable:!0})}:o6,Ei=Is;var Ns=Pi(Ei),Bi=Ns;var Ws=9007199254740991,Us=/^(?:0|[1-9]\d*)$/;function js(r,t){var e=typeof r;return t=t??Ws,!!t&&(e=="number"||e!="symbol"&&Us.test(r))&&r>-1&&r%1==0&&r<t}var H6=js;function Gs(r,t,e){t=="__proto__"&&d7?d7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var p7=Gs;function qs(r,t){return r===t||r!==r&&t!==t}var W0=qs;var Ys=Object.prototype,Qs=Ys.hasOwnProperty;function Ks(r,t,e){var i=r[t];(!(Qs.call(r,t)&&W0(i,e))||e===void 0&&!(t in r))&&p7(r,t,e)}var Ri=Ks;function Xs(r,t,e,i){var C=!e;e||(e={});for(var a=-1,H=t.length;++a<H;){var n=t[a],s=i?i(e[n],r[n],n,e,r):void 0;s===void 0&&(s=r[n]),C?p7(e,n,s):Ri(e,n,s)}return e}var Di=Xs;var $i=Math.max;function Js(r,t,e){return t=$i(t===void 0?r.length-1:t,0),function(){for(var i=arguments,C=-1,a=$i(i.length-t,0),H=Array(a);++C<a;)H[C]=i[t+C];C=-1;for(var n=Array(t+1);++C<t;)n[C]=i[C];return n[t]=e(H),ki(r,this,n)}}var zi=Js;function tL(r,t){return Bi(zi(r,t,o6),r+"")}var Ii=tL;var eL=9007199254740991;function rL(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=eL}var V6=rL;function iL(r){return r!=null&&V6(r.length)&&!M7(r)}var u7=iL;function CL(r,t,e){if(!O2(e))return!1;var i=typeof t;return(i=="number"?u7(e)&&H6(t,e.length):i=="string"&&t in e)?W0(e[t],r):!1}var n6=CL;function oL(r){return Ii(function(t,e){var i=-1,C=e.length,a=C>1?e[C-1]:void 0,H=C>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(C--,a):void 0,H&&n6(e[0],e[1],H)&&(a=C<3?void 0:a,C=1),t=Object(t);++i<C;){var n=e[i];n&&r(t,n,i,a)}return t})}var Ni=oL;var aL=Object.prototype;function HL(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||aL;return r===e}var s6=HL;function VL(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var Wi=VL;var nL="[object Arguments]";function sL(r){return f5(r)&&K5(r)==nL}var _t=sL;var Ui=Object.prototype,LL=Ui.hasOwnProperty,lL=Ui.propertyIsEnumerable,ML=_t((function(){return arguments})())?_t:function(r){return f5(r)&&LL.call(r,"callee")&&!lL.call(r,"callee")},g4=ML;function cL(){return!1}var ji=cL;var Yi=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Gi=Yi&&typeof module=="object"&&module&&!module.nodeType&&module,dL=Gi&&Gi.exports===Yi,qi=dL?h5.Buffer:void 0,pL=qi?qi.isBuffer:void 0,uL=pL||ji,L6=uL;var mL="[object Arguments]",hL="[object Array]",fL="[object Boolean]",AL="[object Date]",vL="[object Error]",xL="[object Function]",gL="[object Map]",_L="[object Number]",SL="[object Object]",bL="[object RegExp]",wL="[object Set]",ZL="[object String]",yL="[object WeakMap]",OL="[object ArrayBuffer]",kL="[object DataView]",TL="[object Float32Array]",PL="[object Float64Array]",FL="[object Int8Array]",EL="[object Int16Array]",BL="[object Int32Array]",RL="[object Uint8Array]",DL="[object Uint8ClampedArray]",$L="[object Uint16Array]",zL="[object Uint32Array]",r2={};r2[TL]=r2[PL]=r2[FL]=r2[EL]=r2[BL]=r2[RL]=r2[DL]=r2[$L]=r2[zL]=!0;r2[mL]=r2[hL]=r2[OL]=r2[fL]=r2[kL]=r2[AL]=r2[vL]=r2[xL]=r2[gL]=r2[_L]=r2[SL]=r2[bL]=r2[wL]=r2[ZL]=r2[yL]=!1;function IL(r){return f5(r)&&V6(r.length)&&!!r2[K5(r)]}var Qi=IL;function NL(r){return function(t){return r(t)}}var Ki=NL;var Xi=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_4=Xi&&typeof module=="object"&&module&&!module.nodeType&&module,WL=_4&&_4.exports===Xi,St=WL&&i6.process,UL=(function(){try{var r=_4&&_4.require&&_4.require("util").types;return r||St&&St.binding&&St.binding("util")}catch{}})(),bt=UL;var Ji=bt&&bt.isTypedArray,jL=Ji?Ki(Ji):Qi,l6=jL;var GL=Object.prototype,qL=GL.hasOwnProperty;function YL(r,t){var e=O3(r),i=!e&&g4(r),C=!e&&!i&&L6(r),a=!e&&!i&&!C&&l6(r),H=e||i||C||a,n=H?Wi(r.length,String):[],s=n.length;for(var M in r)(t||qL.call(r,M))&&!(H&&(M=="length"||C&&(M=="offset"||M=="parent")||a&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||H6(M,s)))&&n.push(M);return n}var tC=YL;function QL(r,t){return function(e){return r(t(e))}}var eC=QL;function KL(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var rC=KL;var XL=Object.prototype,JL=XL.hasOwnProperty;function tl(r){if(!O2(r))return rC(r);var t=s6(r),e=[];for(var i in r)i=="constructor"&&(t||!JL.call(r,i))||e.push(i);return e}var iC=tl;function el(r){return u7(r)?tC(r,!0):iC(r)}var M6=el;var rl=c7(Object,"create"),A0=rl;function il(){this.__data__=A0?A0(null):{},this.size=0}var CC=il;function Cl(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var oC=Cl;var ol="__lodash_hash_undefined__",al=Object.prototype,Hl=al.hasOwnProperty;function Vl(r){var t=this.__data__;if(A0){var e=t[r];return e===ol?void 0:e}return Hl.call(t,r)?t[r]:void 0}var aC=Vl;var nl=Object.prototype,sl=nl.hasOwnProperty;function Ll(r){var t=this.__data__;return A0?t[r]!==void 0:sl.call(t,r)}var HC=Ll;var ll="__lodash_hash_undefined__";function Ml(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=A0&&t===void 0?ll:t,this}var VC=Ml;function m7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}m7.prototype.clear=CC;m7.prototype.delete=oC;m7.prototype.get=aC;m7.prototype.has=HC;m7.prototype.set=VC;var wt=m7;function cl(){this.__data__=[],this.size=0}var nC=cl;function dl(r,t){for(var e=r.length;e--;)if(W0(r[e][0],t))return e;return-1}var U0=dl;var pl=Array.prototype,ul=pl.splice;function ml(r){var t=this.__data__,e=U0(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():ul.call(t,e,1),--this.size,!0}var sC=ml;function hl(r){var t=this.__data__,e=U0(t,r);return e<0?void 0:t[e][1]}var LC=hl;function fl(r){return U0(this.__data__,r)>-1}var lC=fl;function Al(r,t){var e=this.__data__,i=U0(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var MC=Al;function h7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}h7.prototype.clear=nC;h7.prototype.delete=sC;h7.prototype.get=LC;h7.prototype.has=lC;h7.prototype.set=MC;var j0=h7;var vl=c7(h5,"Map"),c6=vl;function xl(){this.size=0,this.__data__={hash:new wt,map:new(c6||j0),string:new wt}}var cC=xl;function gl(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var dC=gl;function _l(r,t){var e=r.__data__;return dC(t)?e[typeof t=="string"?"string":"hash"]:e.map}var G0=_l;function Sl(r){var t=G0(this,r).delete(r);return this.size-=t?1:0,t}var pC=Sl;function bl(r){return G0(this,r).get(r)}var uC=bl;function wl(r){return G0(this,r).has(r)}var mC=wl;function Zl(r,t){var e=G0(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var hC=Zl;function f7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}f7.prototype.clear=cC;f7.prototype.delete=pC;f7.prototype.get=uC;f7.prototype.has=mC;f7.prototype.set=hC;var fC=f7;function yl(r){return r==null?"":hi(r)}var d6=yl;var Ol=eC(Object.getPrototypeOf,Object),p6=Ol;var kl="[object Object]",Tl=Function.prototype,Pl=Object.prototype,AC=Tl.toString,Fl=Pl.hasOwnProperty,El=AC.call(Object);function Bl(r){if(!f5(r)||K5(r)!=kl)return!1;var t=p6(r);if(t===null)return!0;var e=Fl.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&AC.call(e)==El}var vC=Bl;function Rl(r,t,e){var i=-1,C=r.length;t<0&&(t=-t>C?0:C+t),e=e>C?C:e,e<0&&(e+=C),C=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(C);++i<C;)a[i]=r[i+t];return a}var xC=Rl;function Dl(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:xC(r,t,e)}var gC=Dl;var $l="\\ud800-\\udfff",zl="\\u0300-\\u036f",Il="\\ufe20-\\ufe2f",Nl="\\u20d0-\\u20ff",Wl=zl+Il+Nl,Ul="\\ufe0e\\ufe0f",jl="\\u200d",Gl=RegExp("["+jl+$l+Wl+Ul+"]");function ql(r){return Gl.test(r)}var u6=ql;function Yl(r){return r.split("")}var _C=Yl;var SC="\\ud800-\\udfff",Ql="\\u0300-\\u036f",Kl="\\ufe20-\\ufe2f",Xl="\\u20d0-\\u20ff",Jl=Ql+Kl+Xl,tM="\\ufe0e\\ufe0f",eM="["+SC+"]",Zt="["+Jl+"]",yt="\\ud83c[\\udffb-\\udfff]",rM="(?:"+Zt+"|"+yt+")",bC="[^"+SC+"]",wC="(?:\\ud83c[\\udde6-\\uddff]){2}",ZC="[\\ud800-\\udbff][\\udc00-\\udfff]",iM="\\u200d",yC=rM+"?",OC="["+tM+"]?",CM="(?:"+iM+"(?:"+[bC,wC,ZC].join("|")+")"+OC+yC+")*",oM=OC+yC+CM,aM="(?:"+[bC+Zt+"?",Zt,wC,ZC,eM].join("|")+")",HM=RegExp(yt+"(?="+yt+")|"+aM+oM,"g");function VM(r){return r.match(HM)||[]}var kC=VM;function nM(r){return u6(r)?kC(r):_C(r)}var TC=nM;function sM(r){return function(t){t=d6(t);var e=u6(t)?TC(t):void 0,i=e?e[0]:t.charAt(0),C=e?gC(e,1).join(""):t.slice(1);return i[r]()+C}}var PC=sM;var LM=PC("toUpperCase"),FC=LM;function lM(r){return FC(d6(r).toLowerCase())}var A5=lM;function MM(){this.__data__=new j0,this.size=0}var EC=MM;function cM(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var BC=cM;function dM(r){return this.__data__.get(r)}var RC=dM;function pM(r){return this.__data__.has(r)}var DC=pM;var uM=200;function mM(r,t){var e=this.__data__;if(e instanceof j0){var i=e.__data__;if(!c6||i.length<uM-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new fC(i)}return e.set(r,t),this.size=e.size,this}var $C=mM;function A7(r){var t=this.__data__=new j0(r);this.size=t.size}A7.prototype.clear=EC;A7.prototype.delete=BC;A7.prototype.get=RC;A7.prototype.has=DC;A7.prototype.set=$C;var zC=A7;var UC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,IC=UC&&typeof module=="object"&&module&&!module.nodeType&&module,hM=IC&&IC.exports===UC,NC=hM?h5.Buffer:void 0,WC=NC?NC.allocUnsafe:void 0;function fM(r,t){if(t)return r.slice();var e=r.length,i=WC?WC(e):new r.constructor(e);return r.copy(i),i}var jC=fM;var AM=h5.Uint8Array,Ot=AM;function vM(r){var t=new r.constructor(r.byteLength);return new Ot(t).set(new Ot(r)),t}var GC=vM;function xM(r,t){var e=t?GC(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var qC=xM;function gM(r){return typeof r.constructor=="function"&&!s6(r)?Oi(p6(r)):{}}var YC=gM;function _M(r){return function(t,e,i){for(var C=-1,a=Object(t),H=i(t),n=H.length;n--;){var s=H[r?n:++C];if(e(a[s],s,a)===!1)break}return t}}var QC=_M;var SM=QC(),KC=SM;function bM(r,t,e){(e!==void 0&&!W0(r[t],e)||e===void 0&&!(t in r))&&p7(r,t,e)}var S4=bM;function wM(r){return f5(r)&&u7(r)}var XC=wM;function ZM(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var b4=ZM;function yM(r){return Di(r,M6(r))}var JC=yM;function OM(r,t,e,i,C,a,H){var n=b4(r,e),s=b4(t,e),M=H.get(s);if(M){S4(r,e,M);return}var p=a?a(n,s,e+"",r,t,H):void 0,h=p===void 0;if(h){var v=O3(s),g=!v&&L6(s),Z=!v&&!g&&l6(s);p=s,v||g||Z?O3(n)?p=n:XC(n)?p=Ti(n):g?(h=!1,p=jC(s,!0)):Z?(h=!1,p=qC(s,!0)):p=[]:vC(s)||g4(s)?(p=n,g4(n)?p=JC(n):(!O2(n)||M7(n))&&(p=YC(s))):h=!1}h&&(H.set(s,p),C(p,s,i,a,H),H.delete(s)),S4(r,e,p)}var to=OM;function eo(r,t,e,i,C){r!==t&&KC(t,function(a,H){if(C||(C=new zC),O2(a))to(r,t,H,e,eo,i,C);else{var n=i?i(b4(r,H),a,H+"",r,t,C):void 0;n===void 0&&(n=a),S4(r,H,n)}},M6)}var ro=eo;var kM=Ni(function(r,t,e){ro(r,t,e)}),k3=kM;var TM=Math.floor,PM=Math.random;function FM(r,t){return r+TM(PM()*(t-r+1))}var io=FM;var EM=parseFloat,BM=Math.min,RM=Math.random;function DM(r,t,e){if(e&&typeof e!="boolean"&&n6(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=gt(r),t===void 0?(t=r,r=0):t=gt(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var C=RM();return BM(r+C*(t-r+EM("1e-"+((C+"").length-1))),t)}return io(r,t)}var $1=DM;var H2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var $M={attribute:!0,type:String,converter:M4,reflect:!1,hasChanged:X9},zM=(r=$M,t,e)=>{let{kind:i,metadata:C}=e,a=globalThis.litPropertyMetadata.get(C);if(a===void 0&&globalThis.litPropertyMetadata.set(C,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:H}=e;return{set(n){let s=t.get.call(this);t.set.call(this,n),this.requestUpdate(H,s,r,!0,n)},init(n){return n!==void 0&&this.C(H,void 0,r,n),n}}}if(i==="setter"){let{name:H}=e;return function(n){let s=this[H];t.call(this,n),this.requestUpdate(H,s,r,!0,n)}}throw Error("Unsupported decorator location: "+i)};function t1(r){return(t,e)=>typeof e=="object"?zM(r,t,e):((i,C,a)=>{let H=C.hasOwnProperty(a);return C.constructor.createProperty(a,i),H?Object.getOwnPropertyDescriptor(C,a):void 0})(r,t,e)}function U2(r){return t1({...r,state:!0,attribute:!1})}var T3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function w4(r,t){return(e,i,C)=>{let a=H=>H.renderRoot?.querySelector(r)??null;if(t){let{get:H,set:n}=typeof i=="object"?e:C??(()=>{let s=Symbol();return{get(){return this[s]},set(M){this[s]=M}}})();return T3(e,i,{get(){let s=H.call(this);return s===void 0&&(s=a(this),(s!==null||this.hasUpdated)&&n.call(this,s)),s}})}return T3(e,i,{get(){return a(this)}})}}var Co=`:host {
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
`;var oo=w1`
  ${u0(Co)}
`;var P3,F3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(P3||(P3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(F3||(F3={}));function Ho(){return(Ho=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function NM(r){return r.substr(0,r.indexOf("."))}var WM=function(r){switch(r.number_format){case P3.comma_decimal:return["en-US","en"];case P3.decimal_comma:return["de","es","it"];case P3.space_comma:return["fr","sv","cs"];case P3.system:return;default:return r.language}},UM=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},kt=function(r,t,e){var i=t?WM(t):void 0;if(Number.isNaN=Number.isNaN||function C(a){return typeof a=="number"&&C(a)},t?.number_format!==P3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,ao(r,e)).format(Number(r))}catch(C){return console.error(C),new Intl.NumberFormat(void 0,ao(r,e)).format(Number(r))}return typeof r=="string"?r:UM(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},ao=function(r,t){var e=Ho({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var jM=["closed","locked","off"];var i2=function(r,t,e,i){i=i||{},e=e??{};var C=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return C.detail=e,r.dispatchEvent(C),C};var m6=function(r){i2(window,"haptic",r)},GM=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),i2(window,"location-changed",{replace:e})},qM=function(r,t,e){e===void 0&&(e=!0);var i,C=NM(t),a=C==="group"?"homeassistant":C;switch(C){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},YM=function(r,t){var e=jM.includes(r.states[t].state);return qM(r,t,e)},QM=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(m6("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&i2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&GM(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(YM(t,e.entity),m6("success"));break;case"call-service":if(!i.service)return void m6("failure");var C=i.service.split(".",2);t.callService(C[0],C[1],i.service_data,i.target),m6("success");break;case"fire-dom-event":i2(r,"ll-custom",i)}},Z4=function(r,t,e,i){var C;i==="double_tap"&&e.double_tap_action?C=e.double_tap_action:i==="hold"&&e.hold_action?C=e.hold_action:i==="tap"&&e.tap_action&&(C=e.tap_action),QM(r,t,e,C)};function v0(r){return r!==void 0&&r.action!=="none"}function Vo(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var no="NOT_RUNNING";var f6=Y9(h6(),1);var Lo=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function KM(r,t){return!!(r===t||Lo(r)&&Lo(t))}function XM(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!KM(r[e],t[e]))return!1;return!0}function q0(r,t){t===void 0&&(t=XM);var e=null;function i(){for(var C=[],a=0;a<arguments.length;a++)C[a]=arguments[a];if(e&&e.lastThis===this&&t(C,e.lastArgs))return e.lastResult;var H=r.apply(this,C);return e={lastResult:H,lastArgs:C,lastThis:this},H}return i.clear=function(){e=null},i}var lo=(r,t)=>r?r.config.state!==no?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",Y0=(r,t)=>x7(t).toLocaleDateString(E3(r),{weekday:"short"}),Mo=(r,t)=>x7(t).toLocaleDateString(E3(r),{day:"numeric"}),co=(r,t)=>{let e=x7(t),i=E3(r),C=A6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:C}).formatToParts(e),h=p.find(g=>g.type==="hour"),v=p.find(g=>g.type==="dayPeriod");if(h){if(v)return{hour:h.value,suffix:v.value};let g=p.indexOf(h),Z=p.slice(g+1).filter(y=>y.type==="literal").map(y=>y.value).join("");return Z&&Z.trim()?{hour:h.value,suffix:Z.trim()}:{hour:h.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:C}),H=a.match(/\d+/),n=H?H[0]:a,s=a.replace(/\d+\s*/,"").trim();return s?{hour:n,suffix:s}:{hour:n}},po=(r,t)=>{let e=x7(t),i=E3(r),C=A6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:C}).formatToParts(e),h=p.find(Z=>Z.type==="hour"),v=p.find(Z=>Z.type==="minute"),g=p.find(Z=>Z.type==="dayPeriod");if(h&&v){let Z=p.indexOf(h),y=p.indexOf(v),k=p.slice(Z+1,y).map(B=>B.value).join(""),F=`${h.value}${k}${v.value}`;if(g)return{time:F,suffix:g.value};let D=p.slice(y+1).filter(B=>B.type==="literal").map(B=>B.value).join("");return D&&D.trim()?{time:F,suffix:D.trim()}:{time:F}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:C}),H=a.match(/\d+[:.]\d+/),n=H?H[0]:a,s=a.replace(/\d+[:.]\d+\s*/,"").trim();return s?{time:n,suffix:s}:{time:n}},v7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},A6=q0(r=>{let t=r?.locale;if(t?.time_format===F3.language||t?.time_format===F3.system){let e=t.time_format===F3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===F3.am_pm}),E3=r=>r?.locale?.language||navigator.language||"en",x7=r=>typeof r=="string"?new Date(r):r,x0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let C=x7(t),a=f6.getTimes(C,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:C<a.sunrise||C>a.sunset}},uo=(r,t)=>{let e=x7(t),{fraction:i,phase:C}=f6.getMoonIllumination(e),a=C<=.5,H=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==H}},mo=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),C=e<.5,a=t===C?0:1,H=t?-60:160;return`M50 0 L${H} 0 L${H} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},Ft=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),C=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${C} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},g7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,ho=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},Pt=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},fo=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=Pt(t.secondary_info_attribute);i&&e.add(i);let C=t.show_attributes;if(Array.isArray(C))for(let a of C){let H=Pt(a);H&&e.add(H)}else{let a=Pt(C);a&&e.add(a)}return e.delete(r.entity),[...e]};var F2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},Dt={silent:{level:-1},fatal:{level:F2.fatal},error:{level:F2.error},warn:{level:F2.warn},log:{level:F2.log},info:{level:F2.info},success:{level:F2.success},fail:{level:F2.fail},ready:{level:F2.info},start:{level:F2.info},box:{level:F2.info},debug:{level:F2.debug},trace:{level:F2.trace},verbose:{level:F2.verbose}};function Et(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function $t(r,t,e=".",i){if(!Et(t))return $t(r,{},e,i);let C=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let H=r[a];H!=null&&(i&&i(C,a,H,e)||(Array.isArray(H)&&Array.isArray(C[a])?C[a]=[...H,...C[a]]:Et(H)&&Et(C[a])?C[a]=$t(H,C[a],(e?`${e}.`:"")+a.toString(),i):C[a]=H))}return C}function JM(r){return(...t)=>t.reduce((e,i)=>$t(e,i,"",r),{})}var tc=JM();function ec(r){return Object.prototype.toString.call(r)==="[object Object]"}function rc(r){return!(!ec(r)||!r.message&&!r.args||r.stack)}var Bt=!1,Ao=[],g2=class r{constructor(t={}){W(this,"options");W(this,"_lastLog");W(this,"_mockFn");let e=t.types||Dt;this.options=tc({...t,defaults:{...t.defaults},level:Rt(t.level,e),reporters:[...t.reporters||[]]},{types:Dt,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let C={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(C),this[i].raw=this._wrapLogFn(C,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=Rt(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){Bt=!0}resumeLogs(){Bt=!1;let t=Ao.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(Bt){Ao.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let C={date:new Date,args:[],...t,level:Rt(t.level,this.options.types)};!i&&e.length===1&&rc(e[0])?Object.assign(C,e[0]):C.args=[...e],C.message&&(C.args.unshift(C.message),delete C.message),C.additional&&(Array.isArray(C.additional)||(C.additional=C.additional.split(`
`)),C.args.push(`
`+C.additional.join(`
`)),delete C.additional),C.type=typeof C.type=="string"?C.type.toLowerCase():"log",C.tag=typeof C.tag=="string"?C.tag:"";let a=(n=!1)=>{let s=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&s>0){let M=[...this._lastLog.object.args];s>1&&M.push(`(repeated ${s} times)`),this._log({...this._lastLog.object,args:M}),this._lastLog.count=1}n&&(this._lastLog.object=C,this._log(C))};clearTimeout(this._lastLog.timeout);let H=this._lastLog.time&&C.date?C.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=C.date,H<this.options.throttle)try{let n=JSON.stringify([C.type,C.tag,C.args]),s=this._lastLog.serialized===n;if(this._lastLog.serialized=n,s&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function Rt(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}g2.prototype.add=g2.prototype.addReporter;g2.prototype.remove=g2.prototype.removeReporter;g2.prototype.clear=g2.prototype.removeReporter;g2.prototype.withScope=g2.prototype.withTag;g2.prototype.mock=g2.prototype.mockTypes;g2.prototype.pause=g2.prototype.pauseLogs;g2.prototype.resume=g2.prototype.resumeLogs;function vo(r={}){return new g2(r)}var zt=class{constructor(t){W(this,"options");W(this,"defaultColor");W(this,"levelColorMap");W(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,C=t.tag||"",H=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,n=`%c${[C,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${n}%c ${t.args[0]}`,H,"",...t.args.slice(1)):e(n,H,...t.args)}};function It(r={}){return vo({reporters:r.reporters||[new zt({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var TS=It();var ic=F2.info,k5=It({level:ic}).withTag("weather-forecast-card");var xo=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",Nt=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var v6={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_7=r=>(...t)=>({_$litDirective$:r,values:t}),Q0=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var go="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,Wt=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:go?"100px":"50px",height:go?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",n=>{let s=n||window.event;return s.preventDefault&&s.preventDefault(),s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0,s.returnValue=!1,!1});let C=n=>{this.held=!1;let s,M;n.touches?(s=n.touches[0].pageX,M=n.touches[0].pageY):(s=n.pageX,M=n.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(s,M),this.held=!0},this.holdTime)},a=n=>{n.preventDefault(),i.stopPropagation&&n.stopPropagation(),!(["touchend","touchcancel"].includes(n.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?i2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?n.type==="click"&&n.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,i2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,i2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):i2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},H=n=>{n.keyCode===13&&a(n)};e.addEventListener("touchstart",C,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",C,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",H)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",Wt);var Cc=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},oc=(r,t)=>{let e=Cc();e&&e.bind(r,t)},X5=_7(class extends Q0{update(r,[t]){return oc(r.element,t),V5}render(r){}});var B3=2,E2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],x6=["rain","snow","lightning","sky","moon","sun","cloud"],g6=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],_o="temperature_and_precipitation";var Ut=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(Ut||{}),ac=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Hc={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},T5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},Vc=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return ac[e]},nc=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let C=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return C;let a=Vc(i);if(!a)return C;let H=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${C} (${H})`},n5=(r,t,e)=>{let i=r.config,C=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||C;case"precipitation":return t.attributes.precipitation_unit||(C==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(C==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${C}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${C}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},sc=288e5,Lc=864e5,lc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<sc}},Mc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Lc}},So=r=>{if(r?.forecast&&r.forecast.length>2)return lc(r.forecast)?{forecast:r.forecast,type:"hourly"}:Mc(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},jt=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:So(r);if(e==="legacy")return So(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},bo=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var wo=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,Zo=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,C=(t&4)!==0;return e||i||C},y4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let C={hourly:2,daily:1,twice_daily:4}[t];return(e&C)!==0},v5=r=>{if(y4(r,"daily"))return"daily";if(y4(r,"twice_daily"))return"twice_daily"},yo=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},S7=q0((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),O4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=n5(r,t,"wind_speed");return cc(e.wind_speed,i)},cc=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},_6=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return Hc[e]}}},Oo=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,H=a===0?t:t-a,n=r.slice(i,i+H);if(i+=n.length,n.length===0)continue;let s=n.map(B=>B.temperature),M=n.map(B=>B.humidity).filter(B=>B!==void 0),p=n.map(B=>B.pressure).filter(B=>B!==void 0),h=n.map(B=>B.wind_speed).filter(B=>B!==void 0),v=n.map(B=>B.wind_bearing).filter(B=>B!==void 0),g=n.map(B=>B.precipitation_probability).filter(B=>B!==void 0),Z=n.map(B=>B.uv_index).filter(B=>B!==void 0),y=n.map(B=>B.apparent_temperature).filter(B=>B!==void 0),k=new Date(n[n.length-1].datetime);k.setMinutes(59),k.setSeconds(59);let F={datetime:n[0].datetime,groupEndtime:k.toISOString(),condition:uc(n),temperature:parseFloat(g7(s).toFixed(1))};M.length>0&&(F.humidity=Math.round(g7(M))),g.length>0&&(F.precipitation_probability=Math.max(...g)),n.some(B=>B.precipitation!==void 0)&&(F.precipitation=n.reduce((B,K)=>B+(K.precipitation||0),0));let D=n.map(B=>B.templow).filter(B=>B!==void 0);D.length>0&&(F.templow=Math.min(...D)),p.length>0&&(F.pressure=Math.round(g7(p))),h.length>0&&(F.wind_speed=g7(h)),v.length>0&&(F.wind_bearing=pc(v)),Z.length>0&&(F.uv_index=Math.max(...Z)),y.length>0&&(F.apparent_temperature=parseFloat(g7(y).toFixed(1))),e.push(F)}return e},dc="mdi:gauge",ko=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?T5[r]:void 0)??dc),b7=(r,t,e,i)=>{let C=t.attributes[i];if(C!==void 0){if(i==="wind_speed")return nc(r,t);if(i==="wind_gust_speed"){let a=n5(r,t,"wind_gust_speed");return`${kt(C,r.locale)} ${a}`}if(i==="ozone"){let a=n5(r,t,"ozone");return`${C} ${a}`}return i==="apparent_temperature"||i==="dew_point"?J5(r,t,C,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},S6=(r,t,e,i,C)=>{let a=r.states[C];if(!a)return;let H=a.state;return H===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?J5(r,t,H,e.current?.temperature_precision):r.formatEntityState(a)},J5=(r,t,e,i,C)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,H=n5(r,t,"temperature"),n=typeof e=="string"?parseFloat(e):e;return isNaN(n)?`${e}${C?"":H}`:`${kt(n,r.locale,a)}${C?"":H}`},pc=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(n=>{let s=n*Math.PI/180;t+=Math.sin(s),e+=Math.cos(s)});let i=t/r.length,C=e/r.length,H=Math.atan2(i,C)*180/Math.PI;return H<0&&(H+=360),Math.round(H)},uc=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let C=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return C===-1&&(C=0),a===-1&&(a=0),C-a}),r[0]?.condition||"exceptional"};var w7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let C=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{C&&(C.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let C=t.scrollLeft,a=Math.round(C/i)*i,H=500,n=performance.now(),s=p=>p*(2-p),M=p=>{let h=this._container;if(!h){this._completeFinalize();return}let v=p-n,g=Math.min(v/H,1),Z=s(g);h.scrollLeft=C+(a-C)*Z,g<1?this._state.momentumId=requestAnimationFrame(M):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(M)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var To="important",mc=" !"+To,j2=_7(class extends Q0{constructor(r){if(super(r),r.type!==v6.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let C=t[i];if(C!=null){this.ft.add(i);let a=typeof C=="string"&&C.endsWith(mc);i.includes("-")||a?e.setProperty(i,a?C.slice(0,-11):C,a?To:""):e[i]=C}}return V5}});var R3=_7(class extends Q0{constructor(r){if(super(r),r.type!==v6.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let C=!!t[i];C===this.st.has(i)||this.nt?.has(i)||(C?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return V5}});function P4(r){return r+.5|0}var K0=(r,t,e)=>Math.max(Math.min(r,e),t);function k4(r){return K0(P4(r*2.55),0,255)}function X0(r){return K0(P4(r*255),0,255)}function g0(r){return K0(P4(r/2.55)/100,0,1)}function Po(r){return K0(P4(r*100),0,100)}var x5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},qt=[..."0123456789ABCDEF"],hc=r=>qt[r&15],fc=r=>qt[(r&240)>>4]+qt[r&15],b6=r=>(r&240)>>4===(r&15),Ac=r=>b6(r.r)&&b6(r.g)&&b6(r.b)&&b6(r.a);function vc(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&x5[r[1]]*17,g:255&x5[r[2]]*17,b:255&x5[r[3]]*17,a:t===5?x5[r[4]]*17:255}:(t===7||t===9)&&(e={r:x5[r[1]]<<4|x5[r[2]],g:x5[r[3]]<<4|x5[r[4]],b:x5[r[5]]<<4|x5[r[6]],a:t===9?x5[r[7]]<<4|x5[r[8]]:255})),e}var xc=(r,t)=>r<255?t(r):"";function gc(r){var t=Ac(r)?hc:fc;return r?"#"+t(r.r)+t(r.g)+t(r.b)+xc(r.a,t):void 0}var _c=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ro(r,t,e){let i=t*Math.min(e,1-e),C=(a,H=(a+r/30)%12)=>e-i*Math.max(Math.min(H-3,9-H,1),-1);return[C(0),C(8),C(4)]}function Sc(r,t,e){let i=(C,a=(C+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function bc(r,t,e){let i=Ro(r,1,.5),C;for(t+e>1&&(C=1/(t+e),t*=C,e*=C),C=0;C<3;C++)i[C]*=1-t-e,i[C]+=t;return i}function wc(r,t,e,i,C){return r===C?(t-e)/i+(t<e?6:0):t===C?(e-r)/i+2:(r-t)/i+4}function Yt(r){let e=r.r/255,i=r.g/255,C=r.b/255,a=Math.max(e,i,C),H=Math.min(e,i,C),n=(a+H)/2,s,M,p;return a!==H&&(p=a-H,M=n>.5?p/(2-a-H):p/(a+H),s=wc(e,i,C,p,a),s=s*60+.5),[s|0,M||0,n]}function Qt(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(X0)}function Kt(r,t,e){return Qt(Ro,r,t,e)}function Zc(r,t,e){return Qt(bc,r,t,e)}function yc(r,t,e){return Qt(Sc,r,t,e)}function Do(r){return(r%360+360)%360}function Oc(r){let t=_c.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?k4(+t[5]):X0(+t[5]));let C=Do(+t[2]),a=+t[3]/100,H=+t[4]/100;return t[1]==="hwb"?i=Zc(C,a,H):t[1]==="hsv"?i=yc(C,a,H):i=Kt(C,a,H),{r:i[0],g:i[1],b:i[2],a:e}}function kc(r,t){var e=Yt(r);e[0]=Do(e[0]+t),e=Kt(e),r.r=e[0],r.g=e[1],r.b=e[2]}function Tc(r){if(!r)return;let t=Yt(r),e=t[0],i=Po(t[1]),C=Po(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${C}%, ${g0(r.a)})`:`hsl(${e}, ${i}%, ${C}%)`}var Fo={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Eo={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Pc(){let r={},t=Object.keys(Eo),e=Object.keys(Fo),i,C,a,H,n;for(i=0;i<t.length;i++){for(H=n=t[i],C=0;C<e.length;C++)a=e[C],n=n.replace(a,Fo[a]);a=parseInt(Eo[H],16),r[n]=[a>>16&255,a>>8&255,a&255]}return r}var w6;function Fc(r){w6||(w6=Pc(),w6.transparent=[0,0,0,0]);let t=w6[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Ec=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Bc(r){let t=Ec.exec(r),e=255,i,C,a;if(t){if(t[7]!==i){let H=+t[7];e=t[8]?k4(H):K0(H*255,0,255)}return i=+t[1],C=+t[3],a=+t[5],i=255&(t[2]?k4(i):K0(i,0,255)),C=255&(t[4]?k4(C):K0(C,0,255)),a=255&(t[6]?k4(a):K0(a,0,255)),{r:i,g:C,b:a,a:e}}}function Rc(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${g0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var Gt=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,Z7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function Dc(r,t,e){let i=Z7(g0(r.r)),C=Z7(g0(r.g)),a=Z7(g0(r.b));return{r:X0(Gt(i+e*(Z7(g0(t.r))-i))),g:X0(Gt(C+e*(Z7(g0(t.g))-C))),b:X0(Gt(a+e*(Z7(g0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function Z6(r,t,e){if(r){let i=Yt(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=Kt(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function $o(r,t){return r&&Object.assign(t||{},r)}function Bo(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=X0(r[3]))):(t=$o(r,{r:0,g:0,b:0,a:1}),t.a=X0(t.a)),t}function $c(r){return r.charAt(0)==="r"?Bc(r):Oc(r)}var T4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=Bo(t):e==="string"&&(i=vc(t)||Fc(t)||$c(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=$o(this._rgb);return t&&(t.a=g0(t.a)),t}set rgb(t){this._rgb=Bo(t)}rgbString(){return this._valid?Rc(this._rgb):void 0}hexString(){return this._valid?gc(this._rgb):void 0}hslString(){return this._valid?Tc(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,C=t.rgb,a,H=e===a?.5:e,n=2*H-1,s=i.a-C.a,M=((n*s===-1?n:(n+s)/(1+n*s))+1)/2;a=1-M,i.r=255&M*i.r+a*C.r+.5,i.g=255&M*i.g+a*C.g+.5,i.b=255&M*i.b+a*C.b+.5,i.a=H*i.a+(1-H)*C.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=Dc(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=X0(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=P4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Z6(this._rgb,2,t),this}darken(t){return Z6(this._rgb,2,-t),this}saturate(t){return Z6(this._rgb,1,t),this}desaturate(t){return Z6(this._rgb,1,-t),this}rotate(t){return kc(this._rgb,t),this}};function F5(){}var ee=(()=>{let r=0;return()=>r++})();function b1(r){return r==null}function t2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Z1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function V2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function G2(r,t){return V2(r)?r:t}function B1(r,t){return typeof r>"u"?t:r}var re=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function X1(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function z1(r,t,e,i){let C,a,H;if(t2(r))if(a=r.length,i)for(C=a-1;C>=0;C--)t.call(e,r[C],C);else for(C=0;C<a;C++)t.call(e,r[C],C);else if(Z1(r))for(H=Object.keys(r),a=H.length,C=0;C<a;C++)t.call(e,r[H[C]],H[C])}function k7(r,t){let e,i,C,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(C=r[e],a=t[e],C.datasetIndex!==a.datasetIndex||C.index!==a.index)return!1;return!0}function E4(r){if(t2(r))return r.map(E4);if(Z1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,C=0;for(;C<i;++C)t[e[C]]=E4(r[e[C]]);return t}return r}function Qo(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function Ko(r,t,e,i){if(!Qo(r))return;let C=t[r],a=e[r];Z1(C)&&Z1(a)?s5(C,a,i):t[r]=E4(a)}function s5(r,t,e){let i=t2(t)?t:[t],C=i.length;if(!Z1(r))return r;e=e||{};let a=e.merger||Ko,H;for(let n=0;n<C;++n){if(H=i[n],!Z1(H))continue;let s=Object.keys(H);for(let M=0,p=s.length;M<p;++M)a(s[M],r,H,e)}return r}function z3(r,t){return s5(r,t,{merger:Xo})}function Xo(r,t,e){if(!Qo(r))return;let i=t[r],C=e[r];Z1(i)&&Z1(C)?z3(i,C):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=E4(C))}var zo={"":r=>r,x:r=>r.x,y:r=>r.y};function Jo(r){let t=r.split("."),e=[],i="";for(let C of t)i+=C,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function zc(r){let t=Jo(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function r3(r,t){return(zo[t]||(zo[t]=zc(t)))(r)}function D4(r){return r.charAt(0).toUpperCase()+r.slice(1)}var I3=r=>typeof r<"u",t0=r=>typeof r=="function",F6=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function ie(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var Y1=Math.PI,l2=2*Y1,ta=l2+Y1,B4=Number.POSITIVE_INFINITY,ea=Y1/180,d2=Y1/2,J0=Y1/4,Jt=Y1*2/3,e0=Math.log10,g5=Math.sign;function N3(r,t,e){return Math.abs(r-t)<e}function E6(r){let t=Math.round(r);r=N3(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(e0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function Ce(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((C,a)=>C-a).pop(),t}function Ic(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function W3(r){return!Ic(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function oe(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function B6(r,t,e){let i,C,a;for(i=0,C=r.length;i<C;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function r0(r){return r*(Y1/180)}function $4(r){return r*(180/Y1)}function R6(r){if(!V2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function D6(r,t){let e=t.x-r.x,i=t.y-r.y,C=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*Y1&&(a+=l2),{angle:a,distance:C}}function R4(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function ra(r,t){return(r-t+ta)%l2-Y1}function _2(r){return(r%l2+l2)%l2}function z4(r,t,e,i){let C=_2(r),a=_2(t),H=_2(e),n=_2(a-C),s=_2(H-C),M=_2(C-a),p=_2(C-H);return C===a||C===H||i&&a===H||n>s&&M<p}function S2(r,t,e){return Math.max(t,Math.min(e,r))}function ae(r){return S2(r,-32768,32767)}function U3(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function I4(r,t,e){e=e||(H=>r[H]<t);let i=r.length-1,C=0,a;for(;i-C>1;)a=C+i>>1,e(a)?C=a:i=a;return{lo:C,hi:i}}var S0=(r,t,e,i)=>I4(r,e,i?C=>{let a=r[C][t];return a<e||a===e&&r[C+1][t]===e}:C=>r[C][t]<e),He=(r,t,e)=>I4(r,e,i=>r[i][t]>=e);function Ve(r,t,e){let i=0,C=r.length;for(;i<C&&r[i]<t;)i++;for(;C>i&&r[C-1]>e;)C--;return i>0||C<r.length?r.slice(i,C):r}var ia=["push","pop","shift","splice","unshift"];function ne(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),ia.forEach(e=>{let i="_onData"+D4(e),C=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let H=C.apply(this,a);return r._chartjs.listeners.forEach(n=>{typeof n[i]=="function"&&n[i](...a)}),H}})})}function $6(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,C=i.indexOf(t);C!==-1&&i.splice(C,1),!(i.length>0)&&(ia.forEach(a=>{delete r[a]}),delete r._chartjs)}function z6(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var I6=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function N6(r,t){let e=[],i=!1;return function(...C){e=C,i||(i=!0,I6.call(window,()=>{i=!1,r.apply(t,e)}))}}function se(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var Le=r=>r==="start"?"left":r==="end"?"right":"center",W6=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function le(r,t,e){let i=t.length,C=0,a=i;if(r._sorted){let{iScale:H,vScale:n,_parsed:s}=r,M=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,p=H.axis,{min:h,max:v,minDefined:g,maxDefined:Z}=H.getUserBounds();if(g){if(C=Math.min(S0(s,p,h).lo,e?i:S0(t,p,H.getPixelForValue(h)).lo),M){let y=s.slice(0,C+1).reverse().findIndex(k=>!b1(k[n.axis]));C-=Math.max(0,y)}C=S2(C,0,i-1)}if(Z){let y=Math.max(S0(s,H.axis,v,!0).hi+1,e?0:S0(t,p,H.getPixelForValue(v),!0).hi+1);if(M){let k=s.slice(y-1).findIndex(F=>!b1(F[n.axis]));y+=Math.max(0,k)}a=S2(y,C,i)-C}else a=i-C}return{start:C,count:a}}function Me(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,C={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=C,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,C),a}var y6=r=>r===0||r===1,Io=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*l2/e)),No=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*l2/e)+1,D3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*d2)+1,easeOutSine:r=>Math.sin(r*d2),easeInOutSine:r=>-.5*(Math.cos(Y1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>y6(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>y6(r)?r:Io(r,.075,.3),easeOutElastic:r=>y6(r)?r:No(r,.075,.3),easeInOutElastic(r){return y6(r)?r:r<.5?.5*Io(r*2,.1125,.45):.5+.5*No(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-D3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?D3.easeInBounce(r*2)*.5:D3.easeOutBounce(r*2-1)*.5+.5};function U6(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function j6(r){return U6(r)?r:new T4(r)}function T6(r){return U6(r)?r:new T4(r).saturate(.5).darken(.1).hexString()}var Nc=["x","y","borderWidth","radius","tension"],Wc=["color","borderColor","backgroundColor"];function Uc(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:Wc},numbers:{type:"number",properties:Nc}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function jc(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Wo=new Map;function Gc(r,t){t=t||{};let e=r+JSON.stringify(t),i=Wo.get(e);return i||(i=new Intl.NumberFormat(r,t),Wo.set(e,i)),i}function N4(r,t,e){return Gc(t,e).format(r)}var Ca={values(r){return t2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,C,a=r;if(e.length>1){let M=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(M<1e-4||M>1e15)&&(C="scientific"),a=qc(r,e)}let H=e0(Math.abs(a)),n=isNaN(H)?1:Math.max(Math.min(-1*Math.floor(H),20),0),s={notation:C,minimumFractionDigits:n,maximumFractionDigits:n};return Object.assign(s,this.options.ticks.format),N4(r,i,s)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(e0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Ca.numeric.call(this,r,t,e):""}};function qc(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var W4={formatters:Ca};function Yc(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:W4.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var i3=Object.create(null),G6=Object.create(null);function F4(r,t){if(!t)return r;let e=t.split(".");for(let i=0,C=e.length;i<C;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function Xt(r,t,e){return typeof t=="string"?s5(F4(r,t),e):s5(F4(r,""),t)}var te=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,C)=>T6(C.backgroundColor),this.hoverBorderColor=(i,C)=>T6(C.borderColor),this.hoverColor=(i,C)=>T6(C.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Xt(this,t,e)}get(t){return F4(this,t)}describe(t,e){return Xt(G6,t,e)}override(t,e){return Xt(i3,t,e)}route(t,e,i,C){let a=F4(this,t),H=F4(this,i),n="_"+e;Object.defineProperties(a,{[n]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let s=this[n],M=H[C];return Z1(s)?Object.assign({},M,s):B1(s,M)},set(s){this[n]=s}}})}apply(t){t.forEach(e=>e(this))}},n2=new te({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Uc,jc,Yc]);function oa(r){return!r||b1(r.size)||b1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function y7(r,t,e,i,C){let a=t[C];return a||(a=t[C]=r.measureText(C).width,e.push(C)),a>i&&(i=a),i}function ce(r,t,e,i){i=i||{};let C=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(C=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let H=0,n=e.length,s,M,p,h,v;for(s=0;s<n;s++)if(h=e[s],h!=null&&!t2(h))H=y7(r,C,a,H,h);else if(t2(h))for(M=0,p=h.length;M<p;M++)v=h[M],v!=null&&!t2(v)&&(H=y7(r,C,a,H,v));r.restore();let g=a.length/2;if(g>e.length){for(s=0;s<g;s++)delete C[a[s]];a.splice(0,g)}return H}function b0(r,t,e){let i=r.currentDevicePixelRatio,C=e!==0?Math.max(e/2,.5):0;return Math.round((t-C)*i)/i+C}function q6(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function U4(r,t,e,i){de(r,t,e,i,null)}function de(r,t,e,i,C){let a,H,n,s,M,p,h,v,g=t.pointStyle,Z=t.rotation,y=t.radius,k=(Z||0)*ea;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(k),r.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),r.restore();return}if(!(isNaN(y)||y<=0)){switch(r.beginPath(),g){default:C?r.ellipse(e,i,C/2,y,0,0,l2):r.arc(e,i,y,0,l2),r.closePath();break;case"triangle":p=C?C/2:y,r.moveTo(e+Math.sin(k)*p,i-Math.cos(k)*y),k+=Jt,r.lineTo(e+Math.sin(k)*p,i-Math.cos(k)*y),k+=Jt,r.lineTo(e+Math.sin(k)*p,i-Math.cos(k)*y),r.closePath();break;case"rectRounded":M=y*.516,s=y-M,H=Math.cos(k+J0)*s,h=Math.cos(k+J0)*(C?C/2-M:s),n=Math.sin(k+J0)*s,v=Math.sin(k+J0)*(C?C/2-M:s),r.arc(e-h,i-n,M,k-Y1,k-d2),r.arc(e+v,i-H,M,k-d2,k),r.arc(e+h,i+n,M,k,k+d2),r.arc(e-v,i+H,M,k+d2,k+Y1),r.closePath();break;case"rect":if(!Z){s=Math.SQRT1_2*y,p=C?C/2:s,r.rect(e-p,i-s,2*p,2*s);break}k+=J0;case"rectRot":h=Math.cos(k)*(C?C/2:y),H=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(C?C/2:y),r.moveTo(e-h,i-n),r.lineTo(e+v,i-H),r.lineTo(e+h,i+n),r.lineTo(e-v,i+H),r.closePath();break;case"crossRot":k+=J0;case"cross":h=Math.cos(k)*(C?C/2:y),H=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(C?C/2:y),r.moveTo(e-h,i-n),r.lineTo(e+h,i+n),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H);break;case"star":h=Math.cos(k)*(C?C/2:y),H=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(C?C/2:y),r.moveTo(e-h,i-n),r.lineTo(e+h,i+n),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H),k+=J0,h=Math.cos(k)*(C?C/2:y),H=Math.cos(k)*y,n=Math.sin(k)*y,v=Math.sin(k)*(C?C/2:y),r.moveTo(e-h,i-n),r.lineTo(e+h,i+n),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H);break;case"line":H=C?C/2:Math.cos(k)*y,n=Math.sin(k)*y,r.moveTo(e-H,i-n),r.lineTo(e+H,i+n);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(k)*(C?C/2:y),i+Math.sin(k)*y);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function P5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function j4(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function G4(r){r.restore()}function pe(r,t,e,i,C){if(!t)return r.lineTo(e.x,e.y);if(C==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else C==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function ue(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Qc(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),b1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function Kc(r,t,e,i,C){if(C.strikethrough||C.underline){let a=r.measureText(i),H=t-a.actualBoundingBoxLeft,n=t+a.actualBoundingBoxRight,s=e-a.actualBoundingBoxAscent,M=e+a.actualBoundingBoxDescent,p=C.strikethrough?(s+M)/2:M;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=C.decorationWidth||2,r.moveTo(H,p),r.lineTo(n,p),r.stroke()}}function Xc(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function T7(r,t,e,i,C,a={}){let H=t2(t)?t:[t],n=a.strokeWidth>0&&a.strokeColor!=="",s,M;for(r.save(),r.font=C.string,Qc(r,a),s=0;s<H.length;++s)M=H[s],a.backdrop&&Xc(r,a.backdrop),n&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),b1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(M,e,i,a.maxWidth)),r.fillText(M,e,i,a.maxWidth),Kc(r,e,i,M,a),i+=Number(C.lineHeight);r.restore()}function P7(r,t){let{x:e,y:i,w:C,h:a,radius:H}=t;r.arc(e+H.topLeft,i+H.topLeft,H.topLeft,1.5*Y1,Y1,!0),r.lineTo(e,i+a-H.bottomLeft),r.arc(e+H.bottomLeft,i+a-H.bottomLeft,H.bottomLeft,Y1,d2,!0),r.lineTo(e+C-H.bottomRight,i+a),r.arc(e+C-H.bottomRight,i+a-H.bottomRight,H.bottomRight,d2,0,!0),r.lineTo(e+C,i+H.topRight),r.arc(e+C-H.topRight,i+H.topRight,H.topRight,0,-d2,!0),r.lineTo(e+H.topLeft,i)}var Jc=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,td=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function aa(r,t){let e=(""+r).match(Jc);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var ed=r=>+r||0;function q4(r,t){let e={},i=Z1(t),C=i?Object.keys(t):t,a=Z1(r)?i?H=>B1(r[H],r[t[H]]):H=>r[H]:()=>r;for(let H of C)e[H]=ed(a(H));return e}function Y6(r){return q4(r,{top:"y",right:"x",bottom:"y",left:"x"})}function C3(r){return q4(r,["topLeft","topRight","bottomLeft","bottomRight"])}function B2(r){let t=Y6(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function k2(r,t){r=r||{},t=t||n2.font;let e=B1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=B1(r.style,t.style);i&&!(""+i).match(td)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let C={family:B1(r.family,t.family),lineHeight:aa(B1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:B1(r.weight,t.weight),string:""};return C.string=oa(C),C}function J1(r,t,e,i){let C=!0,a,H,n;for(a=0,H=r.length;a<H;++a)if(n=r[a],n!==void 0&&(t!==void 0&&typeof n=="function"&&(n=n(t),C=!1),e!==void 0&&t2(n)&&(n=n[e%n.length],C=!1),n!==void 0))return i&&!C&&(i.cacheable=!1),n}function me(r,t,e){let{min:i,max:C}=r,a=re(t,(C-i)/2),H=(n,s)=>e&&n===0?0:n+s;return{min:H(i,-Math.abs(a)),max:H(C,a)}}function i0(r,t){return Object.assign(Object.create(r),t)}function Y4(r,t=[""],e,i,C=()=>r[0]){let a=e||r;typeof i>"u"&&(i=na("_fallback",r));let H={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:C,override:n=>Y4([n,...r],t,a,i)};return new Proxy(H,{deleteProperty(n,s){return delete n[s],delete n._keys,delete r[0][s],!0},get(n,s){return Ha(n,s,()=>nd(s,t,r,n))},getOwnPropertyDescriptor(n,s){return Reflect.getOwnPropertyDescriptor(n._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(n,s){return jo(n).includes(s)},ownKeys(n){return jo(n)},set(n,s,M){let p=n._storage||(n._storage=C());return n[s]=p[s]=M,delete n._keys,!0}})}function e3(r,t,e,i){let C={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:Q6(r,i),setContext:a=>e3(r,a,e,i),override:a=>e3(r.override(a),t,e,i)};return new Proxy(C,{deleteProperty(a,H){return delete a[H],delete r[H],!0},get(a,H,n){return Ha(a,H,()=>id(a,H,n))},getOwnPropertyDescriptor(a,H){return a._descriptors.allKeys?Reflect.has(r,H)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,H)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,H){return Reflect.has(r,H)},ownKeys(){return Reflect.ownKeys(r)},set(a,H,n){return r[H]=n,delete a[H],!0}})}function Q6(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:C=t.allKeys}=r;return{allKeys:C,scriptable:e,indexable:i,isScriptable:t0(e)?e:()=>e,isIndexable:t0(i)?i:()=>i}}var rd=(r,t)=>r?r+D4(t):t,he=(r,t)=>Z1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ha(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function id(r,t,e){let{_proxy:i,_context:C,_subProxy:a,_descriptors:H}=r,n=i[t];return t0(n)&&H.isScriptable(t)&&(n=Cd(t,n,r,e)),t2(n)&&n.length&&(n=od(t,n,r,H.isIndexable)),he(t,n)&&(n=e3(n,C,a&&a[t],H)),n}function Cd(r,t,e,i){let{_proxy:C,_context:a,_subProxy:H,_stack:n}=e;if(n.has(r))throw new Error("Recursion detected: "+Array.from(n).join("->")+"->"+r);n.add(r);let s=t(a,H||i);return n.delete(r),he(r,s)&&(s=fe(C._scopes,C,r,s)),s}function od(r,t,e,i){let{_proxy:C,_context:a,_subProxy:H,_descriptors:n}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(Z1(t[0])){let s=t,M=C._scopes.filter(p=>p!==s);t=[];for(let p of s){let h=fe(M,C,r,p);t.push(e3(h,a,H&&H[r],n))}}return t}function Va(r,t,e){return t0(r)?r(t,e):r}var ad=(r,t)=>r===!0?t:typeof r=="string"?r3(t,r):void 0;function Hd(r,t,e,i,C){for(let a of t){let H=ad(e,a);if(H){r.add(H);let n=Va(H._fallback,e,C);if(typeof n<"u"&&n!==e&&n!==i)return n}else if(H===!1&&typeof i<"u"&&e!==i)return null}return!1}function fe(r,t,e,i){let C=t._rootScopes,a=Va(t._fallback,e,i),H=[...r,...C],n=new Set;n.add(i);let s=Uo(n,H,e,a||e,i);return s===null||typeof a<"u"&&a!==e&&(s=Uo(n,H,a,s,i),s===null)?!1:Y4(Array.from(n),[""],C,a,()=>Vd(t,e,i))}function Uo(r,t,e,i,C){for(;e;)e=Hd(r,t,e,i,C);return e}function Vd(r,t,e){let i=r._getTarget();t in i||(i[t]={});let C=i[t];return t2(C)&&Z1(e)?e:C||{}}function nd(r,t,e,i){let C;for(let a of t)if(C=na(rd(a,r),e),typeof C<"u")return he(r,C)?fe(e,i,r,C):C}function na(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function jo(r){let t=r._keys;return t||(t=r._keys=sd(r._scopes)),t}function sd(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(C=>!C.startsWith("_")))t.add(i);return Array.from(t)}var Ld=Number.EPSILON||1e-14,O7=(r,t)=>t<r.length&&!r[t].skip&&r[t],sa=r=>r==="x"?"y":"x";function La(r,t,e,i){let C=r.skip?t:r,a=t,H=e.skip?t:e,n=R4(a,C),s=R4(H,a),M=n/(n+s),p=s/(n+s);M=isNaN(M)?0:M,p=isNaN(p)?0:p;let h=i*M,v=i*p;return{previous:{x:a.x-h*(H.x-C.x),y:a.y-h*(H.y-C.y)},next:{x:a.x+v*(H.x-C.x),y:a.y+v*(H.y-C.y)}}}function ld(r,t,e){let i=r.length,C,a,H,n,s,M=O7(r,0);for(let p=0;p<i-1;++p)if(s=M,M=O7(r,p+1),!(!s||!M)){if(N3(t[p],0,Ld)){e[p]=e[p+1]=0;continue}C=e[p]/t[p],a=e[p+1]/t[p],n=Math.pow(C,2)+Math.pow(a,2),!(n<=9)&&(H=3/Math.sqrt(n),e[p]=C*H*t[p],e[p+1]=a*H*t[p])}}function Md(r,t,e="x"){let i=sa(e),C=r.length,a,H,n,s=O7(r,0);for(let M=0;M<C;++M){if(H=n,n=s,s=O7(r,M+1),!n)continue;let p=n[e],h=n[i];H&&(a=(p-H[e])/3,n[`cp1${e}`]=p-a,n[`cp1${i}`]=h-a*t[M]),s&&(a=(s[e]-p)/3,n[`cp2${e}`]=p+a,n[`cp2${i}`]=h+a*t[M])}}function la(r,t="x"){let e=sa(t),i=r.length,C=Array(i).fill(0),a=Array(i),H,n,s,M=O7(r,0);for(H=0;H<i;++H)if(n=s,s=M,M=O7(r,H+1),!!s){if(M){let p=M[t]-s[t];C[H]=p!==0?(M[e]-s[e])/p:0}a[H]=n?M?g5(C[H-1])!==g5(C[H])?0:(C[H-1]+C[H])/2:C[H-1]:C[H]}ld(r,C,a),Md(r,a,t)}function O6(r,t,e){return Math.max(Math.min(r,e),t)}function cd(r,t){let e,i,C,a,H,n=P5(r[0],t);for(e=0,i=r.length;e<i;++e)H=a,a=n,n=e<i-1&&P5(r[e+1],t),a&&(C=r[e],H&&(C.cp1x=O6(C.cp1x,t.left,t.right),C.cp1y=O6(C.cp1y,t.top,t.bottom)),n&&(C.cp2x=O6(C.cp2x,t.left,t.right),C.cp2y=O6(C.cp2y,t.top,t.bottom)))}function Ae(r,t,e,i,C){let a,H,n,s;if(t.spanGaps&&(r=r.filter(M=>!M.skip)),t.cubicInterpolationMode==="monotone")la(r,C);else{let M=i?r[r.length-1]:r[0];for(a=0,H=r.length;a<H;++a)n=r[a],s=La(M,n,r[Math.min(a+1,H-(i?0:1))%H],t.tension),n.cp1x=s.previous.x,n.cp1y=s.previous.y,n.cp2x=s.next.x,n.cp2y=s.next.y,M=n}t.capBezierPoints&&cd(r,e)}function Q4(){return typeof window<"u"&&typeof document<"u"}function K4(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function P6(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var K6=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function Ma(r,t){return K6(r).getPropertyValue(t)}var dd=["top","right","bottom","left"];function $3(r,t,e){let i={};e=e?"-"+e:"";for(let C=0;C<4;C++){let a=dd[C];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var pd=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function ud(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:C,offsetY:a}=i,H=!1,n,s;if(pd(C,a,r.target))n=C,s=a;else{let M=t.getBoundingClientRect();n=i.clientX-M.left,s=i.clientY-M.top,H=!0}return{x:n,y:s,box:H}}function E5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,C=K6(e),a=C.boxSizing==="border-box",H=$3(C,"padding"),n=$3(C,"border","width"),{x:s,y:M,box:p}=ud(r,e),h=H.left+(p&&n.left),v=H.top+(p&&n.top),{width:g,height:Z}=t;return a&&(g-=H.width+n.width,Z-=H.height+n.height),{x:Math.round((s-h)/g*e.width/i),y:Math.round((M-v)/Z*e.height/i)}}function md(r,t,e){let i,C;if(t===void 0||e===void 0){let a=r&&K4(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let H=a.getBoundingClientRect(),n=K6(a),s=$3(n,"border","width"),M=$3(n,"padding");t=H.width-M.width-s.width,e=H.height-M.height-s.height,i=P6(n.maxWidth,a,"clientWidth"),C=P6(n.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||B4,maxHeight:C||B4}}var t3=r=>Math.round(r*10)/10;function ve(r,t,e,i){let C=K6(r),a=$3(C,"margin"),H=P6(C.maxWidth,r,"clientWidth")||B4,n=P6(C.maxHeight,r,"clientHeight")||B4,s=md(r,t,e),{width:M,height:p}=s;if(C.boxSizing==="content-box"){let v=$3(C,"border","width"),g=$3(C,"padding");M-=g.width+v.width,p-=g.height+v.height}return M=Math.max(0,M-a.width),p=Math.max(0,i?M/i:p-a.height),M=t3(Math.min(M,H,s.maxWidth)),p=t3(Math.min(p,n,s.maxHeight)),M&&!p&&(p=t3(M/2)),(t!==void 0||e!==void 0)&&i&&s.height&&p>s.height&&(p=s.height,M=t3(Math.floor(p*i))),{width:M,height:p}}function X6(r,t,e){let i=t||1,C=t3(r.height*i),a=t3(r.width*i);r.height=t3(r.height),r.width=t3(r.width);let H=r.canvas;return H.style&&(e||!H.style.height&&!H.style.width)&&(H.style.height=`${r.height}px`,H.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||H.height!==C||H.width!==a?(r.currentDevicePixelRatio=i,H.height=C,H.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var xe=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};Q4()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function J6(r,t){let e=Ma(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function _0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function ge(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function _e(r,t,e,i){let C={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},H=_0(r,C,e),n=_0(C,a,e),s=_0(a,t,e),M=_0(H,n,e),p=_0(n,s,e);return _0(M,p,e)}var hd=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},fd=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function X4(r,t,e){return r?hd(t,e):fd()}function Se(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function be(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function ca(r){return r==="angle"?{between:z4,compare:ra,normalize:_2}:{between:U3,compare:(t,e)=>t-e,normalize:t=>t}}function Go({start:r,end:t,count:e,loop:i,style:C}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:C}}function Ad(r,t,e){let{property:i,start:C,end:a}=e,{between:H,normalize:n}=ca(i),s=t.length,{start:M,end:p,loop:h}=r,v,g;if(h){for(M+=s,p+=s,v=0,g=s;v<g&&H(n(t[M%s][i]),C,a);++v)M--,p--;M%=s,p%=s}return p<M&&(p+=s),{start:M,end:p,loop:h,style:r.style}}function t8(r,t,e){if(!e)return[r];let{property:i,start:C,end:a}=e,H=t.length,{compare:n,between:s,normalize:M}=ca(i),{start:p,end:h,loop:v,style:g}=Ad(r,t,e),Z=[],y=!1,k=null,F,D,B,K=()=>s(C,B,F)&&n(C,B)!==0,Q=()=>n(a,F)===0||s(a,B,F),c1=()=>y||K(),s1=()=>!y||Q();for(let r1=p,o1=p;r1<=h;++r1)D=t[r1%H],!D.skip&&(F=M(D[i]),F!==B&&(y=s(F,C,a),k===null&&c1()&&(k=n(F,C)===0?r1:o1),k!==null&&s1()&&(Z.push(Go({start:k,end:r1,loop:v,count:H,style:g})),k=null),o1=r1,B=F));return k!==null&&Z.push(Go({start:k,end:h,loop:v,count:H,style:g})),Z}function e8(r,t){let e=[],i=r.segments;for(let C=0;C<i.length;C++){let a=t8(i[C],r.points,t);a.length&&e.push(...a)}return e}function vd(r,t,e,i){let C=0,a=t-1;if(e&&!i)for(;C<t&&!r[C].skip;)C++;for(;C<t&&r[C].skip;)C++;for(C%=t,e&&(a+=C);a>C&&r[a%t].skip;)a--;return a%=t,{start:C,end:a}}function xd(r,t,e,i){let C=r.length,a=[],H=t,n=r[t],s;for(s=t+1;s<=e;++s){let M=r[s%C];M.skip||M.stop?n.skip||(i=!1,a.push({start:t%C,end:(s-1)%C,loop:i}),t=H=M.stop?s:null):(H=s,n.skip&&(t=s)),n=M}return H!==null&&a.push({start:t%C,end:H%C,loop:i}),a}function we(r,t){let e=r.points,i=r.options.spanGaps,C=e.length;if(!C)return[];let a=!!r._loop,{start:H,end:n}=vd(e,C,a,i);if(i===!0)return qo(r,[{start:H,end:n,loop:a}],e,t);let s=n<H?n+C:n,M=!!r._fullLoop&&H===0&&n===C-1;return qo(r,xd(e,H,s,M),e,t)}function qo(r,t,e,i){return!i||!i.setContext||!e?t:gd(r,t,e,i)}function gd(r,t,e,i){let C=r._chart.getContext(),a=Yo(r.options),{_datasetIndex:H,options:{spanGaps:n}}=r,s=e.length,M=[],p=a,h=t[0].start,v=h;function g(Z,y,k,F){let D=n?-1:1;if(Z!==y){for(Z+=s;e[Z%s].skip;)Z-=D;for(;e[y%s].skip;)y+=D;Z%s!==y%s&&(M.push({start:Z%s,end:y%s,loop:k,style:F}),p=F,h=y%s)}}for(let Z of t){h=n?h:Z.start;let y=e[h%s],k;for(v=h+1;v<=Z.end;v++){let F=e[v%s];k=Yo(i.setContext(i0(C,{type:"segment",p0:y,p1:F,p0DataIndex:(v-1)%s,p1DataIndex:v%s,datasetIndex:H}))),_d(k,p)&&g(h,v-1,Z.loop,p),y=F,p=k}h<v-1&&g(h,v-1,Z.loop,p)}return M}function Yo(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function _d(r,t){if(!t)return!1;let e=[],i=function(C,a){return U6(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function k6(r,t,e){return r.options.clip?r[e]:t[e]}function Sd(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:k6(e,t,"left"),right:k6(e,t,"right"),top:k6(i,t,"top"),bottom:k6(i,t,"bottom")}:t}function r8(r,t){let e=t._clip;if(e.disabled)return!1;let i=Sd(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var $e=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,C){let a=e.listeners[C],H=e.duration;a.forEach(n=>n({chart:t,initial:e.initial,numSteps:H,currentStep:Math.min(i-e.start,H)}))}_refresh(){this._request||(this._running=!0,this._request=I6.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,C)=>{if(!i.running||!i.items.length)return;let a=i.items,H=a.length-1,n=!1,s;for(;H>=0;--H)s=a[H],s._active?(s._total>i.duration&&(i.duration=s._total),s.tick(t),n=!0):(a[H]=a[a.length-1],a.pop());n&&(C.draw(),this._notify(C,i,t,"progress")),a.length||(i.running=!1,this._notify(C,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,C)=>Math.max(i,C._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,C=i.length-1;for(;C>=0;--C)i[C].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},w0=new $e,da="transparent",yd={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=j6(r||da),C=i.valid&&j6(t||da);return C&&C.valid?C.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},ze=class{constructor(t,e,i,C){let a=e[i];C=J1([t.to,C,a,t.from]);let H=J1([t.from,a,C]);this._active=!0,this._fn=t.fn||yd[t.type||typeof H],this._easing=D3[t.easing]||D3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=H,this._to=C,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let C=this._target[this._prop],a=i-this._start,H=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(H,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=J1([t.to,e,C,t.from]),this._from=J1([t.from,C,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,C=this._prop,a=this._from,H=this._loop,n=this._to,s;if(this._active=a!==n&&(H||e<i),!this._active){this._target[C]=n,this._notify(!0);return}if(e<0){this._target[C]=a;return}s=e/i%2,s=H&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[C]=this._fn(a,n,s)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let C=0;C<i.length;C++)i[C][e]()}},M8=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Z1(t))return;let e=Object.keys(n2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(C=>{let a=t[C];if(!Z1(a))return;let H={};for(let n of e)H[n]=a[n];(t2(a.properties)&&a.properties||[C]).forEach(n=>{(n===C||!i.has(n))&&i.set(n,H)})})}_animateOptions(t,e){let i=e.options,C=kd(t,i);if(!C)return[];let a=this._createAnimations(C,i);return i.$shared&&Od(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,C=[],a=t.$animations||(t.$animations={}),H=Object.keys(e),n=Date.now(),s;for(s=H.length-1;s>=0;--s){let M=H[s];if(M.charAt(0)==="$")continue;if(M==="options"){C.push(...this._animateOptions(t,e));continue}let p=e[M],h=a[M],v=i.get(M);if(h)if(v&&h.active()){h.update(v,p,n);continue}else h.cancel();if(!v||!v.duration){t[M]=p;continue}a[M]=h=new ze(v,t,M,p),C.push(h)}return C}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return w0.add(this._chart,i),!0}};function Od(r,t){let e=[],i=Object.keys(t);for(let C=0;C<i.length;C++){let a=r[i[C]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function kd(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function pa(r,t){let e=r&&r.options||{},i=e.reverse,C=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:C,end:i?C:a}}function Td(r,t,e){if(e===!1)return!1;let i=pa(r,e),C=pa(t,e);return{top:C.end,right:i.end,bottom:C.start,left:i.start}}function Pd(r){let t,e,i,C;return Z1(r)?(t=r.top,e=r.right,i=r.bottom,C=r.left):t=e=i=C=r,{top:t,right:e,bottom:i,left:C,disabled:r===!1}}function sH(r,t){let e=[],i=r._getSortedDatasetMetas(t),C,a;for(C=0,a=i.length;C<a;++C)e.push(i[C].index);return e}function ua(r,t,e,i={}){let C=r.keys,a=i.mode==="single",H,n,s,M;if(t===null)return;let p=!1;for(H=0,n=C.length;H<n;++H){if(s=+C[H],s===e){if(p=!0,i.all)continue;break}M=r.values[s],V2(M)&&(a||t===0||g5(t)===g5(M))&&(t+=M)}return!p&&!i.all?0:t}function Fd(r,t){let{iScale:e,vScale:i}=t,C=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",H=Object.keys(r),n=new Array(H.length),s,M,p;for(s=0,M=H.length;s<M;++s)p=H[s],n[s]={[C]:p,[a]:r[p]};return n}function Ze(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function Ed(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function Bd(r){let{min:t,max:e,minDefined:i,maxDefined:C}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:C?e:Number.POSITIVE_INFINITY}}function Rd(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function ma(r,t,e,i){for(let C of t.getMatchingVisibleMetas(i).reverse()){let a=r[C.index];if(e&&a>0||!e&&a<0)return C.index}return null}function ha(r,t){let{chart:e,_cachedMeta:i}=r,C=e._stacks||(e._stacks={}),{iScale:a,vScale:H,index:n}=i,s=a.axis,M=H.axis,p=Ed(a,H,i),h=t.length,v;for(let g=0;g<h;++g){let Z=t[g],{[s]:y,[M]:k}=Z,F=Z._stacks||(Z._stacks={});v=F[M]=Rd(C,p,y),v[n]=k,v._top=ma(v,H,!0,i.type),v._bottom=ma(v,H,!1,i.type);let D=v._visualValues||(v._visualValues={});D[n]=k}}function ye(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function Dd(r,t){return i0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function $d(r,t,e){return i0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function J4(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let C of t){let a=C._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var Oe=r=>r==="reset"||r==="none",fa=(r,t)=>t?r:Object.assign({},r),zd=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:sH(e,!0),values:null},a3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ze(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&J4(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),C=(h,v,g,Z)=>h==="x"?v:h==="r"?Z:g,a=e.xAxisID=B1(i.xAxisID,ye(t,"x")),H=e.yAxisID=B1(i.yAxisID,ye(t,"y")),n=e.rAxisID=B1(i.rAxisID,ye(t,"r")),s=e.indexAxis,M=e.iAxisID=C(s,a,H,n),p=e.vAxisID=C(s,H,a,n);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(H),e.rScale=this.getScaleForId(n),e.iScale=this.getScaleForId(M),e.vScale=this.getScaleForId(p)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&$6(this._data,this),t._stacked&&J4(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(Z1(e)){let C=this._cachedMeta;this._data=Fd(e,C)}else if(i!==e){if(i){$6(i,this);let C=this._cachedMeta;J4(C),C._parsed=[]}e&&Object.isExtensible(e)&&ne(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),C=!1;this._dataCheck();let a=e._stacked;e._stacked=Ze(e.vScale,e),e.stack!==i.stack&&(C=!0,J4(e),e.stack=i.stack),this._resyncElements(t),(C||a!==e._stacked)&&(ha(this,e._parsed),e._stacked=Ze(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:C}=this,{iScale:a,_stacked:H}=i,n=a.axis,s=t===0&&e===C.length?!0:i._sorted,M=t>0&&i._parsed[t-1],p,h,v;if(this._parsing===!1)i._parsed=C,i._sorted=!0,v=C;else{t2(C[t])?v=this.parseArrayData(i,C,t,e):Z1(C[t])?v=this.parseObjectData(i,C,t,e):v=this.parsePrimitiveData(i,C,t,e);let g=()=>h[n]===null||M&&h[n]<M[n];for(p=0;p<e;++p)i._parsed[p+t]=h=v[p],s&&(g()&&(s=!1),M=h);i._sorted=s}H&&ha(this,v)}parsePrimitiveData(t,e,i,C){let{iScale:a,vScale:H}=t,n=a.axis,s=H.axis,M=a.getLabels(),p=a===H,h=new Array(C),v,g,Z;for(v=0,g=C;v<g;++v)Z=v+i,h[v]={[n]:p||a.parse(M[Z],Z),[s]:H.parse(e[Z],Z)};return h}parseArrayData(t,e,i,C){let{xScale:a,yScale:H}=t,n=new Array(C),s,M,p,h;for(s=0,M=C;s<M;++s)p=s+i,h=e[p],n[s]={x:a.parse(h[0],p),y:H.parse(h[1],p)};return n}parseObjectData(t,e,i,C){let{xScale:a,yScale:H}=t,{xAxisKey:n="x",yAxisKey:s="y"}=this._parsing,M=new Array(C),p,h,v,g;for(p=0,h=C;p<h;++p)v=p+i,g=e[v],M[p]={x:a.parse(r3(g,n),v),y:H.parse(r3(g,s),v)};return M}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let C=this.chart,a=this._cachedMeta,H=e[t.axis],n={keys:sH(C,!0),values:e._stacks[t.axis]._visualValues};return ua(n,H,a.index,{mode:i})}updateRangeFromParsed(t,e,i,C){let a=i[e.axis],H=a===null?NaN:a,n=C&&i._stacks[e.axis];C&&n&&(C.values=n,H=ua(C,a,this._cachedMeta.index)),t.min=Math.min(t.min,H),t.max=Math.max(t.max,H)}getMinMax(t,e){let i=this._cachedMeta,C=i._parsed,a=i._sorted&&t===i.iScale,H=C.length,n=this._getOtherScale(t),s=zd(e,i,this.chart),M={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:p,max:h}=Bd(n),v,g;function Z(){g=C[v];let y=g[n.axis];return!V2(g[t.axis])||p>y||h<y}for(v=0;v<H&&!(!Z()&&(this.updateRangeFromParsed(M,t,g,s),a));++v);if(a){for(v=H-1;v>=0;--v)if(!Z()){this.updateRangeFromParsed(M,t,g,s);break}}return M}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],C,a,H;for(C=0,a=e.length;C<a;++C)H=e[C][t.axis],V2(H)&&i.push(H);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,C=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:C?""+C.getLabelForValue(a[C.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=Pd(B1(this.options.clip,Td(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,C=i.data||[],a=e.chartArea,H=[],n=this._drawStart||0,s=this._drawCount||C.length-n,M=this.options.drawActiveElementsOnTop,p;for(i.dataset&&i.dataset.draw(t,a,n,s),p=n;p<n+s;++p){let h=C[p];h.hidden||(h.active&&M?H.push(h):h.draw(t,a))}for(p=0;p<H.length;++p)H[p].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let C=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let H=this._cachedMeta.data[t];a=H.$context||(H.$context=$d(this.getContext(),t,H)),a.parsed=this.getParsed(t),a.raw=C.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Dd(this.chart.getContext(),this.index)),a.dataset=C,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let C=e==="active",a=this._cachedDataOpts,H=t+"-"+e,n=a[H],s=this.enableOptionSharing&&I3(i);if(n)return fa(n,s);let M=this.chart.config,p=M.datasetElementScopeKeys(this._type,t),h=C?[`${t}Hover`,"hover",t,""]:[t,""],v=M.getOptionScopes(this.getDataset(),p),g=Object.keys(n2.elements[t]),Z=()=>this.getContext(i,C,e),y=M.resolveNamedOptions(v,g,Z,h);return y.$shared&&(y.$shared=s,a[H]=Object.freeze(fa(y,s))),y}_resolveAnimations(t,e,i){let C=this.chart,a=this._cachedDataOpts,H=`animation-${e}`,n=a[H];if(n)return n;let s;if(C.options.animation!==!1){let p=this.chart.config,h=p.datasetAnimationScopeKeys(this._type,e),v=p.getOptionScopes(this.getDataset(),h);s=p.createResolver(v,this.getContext(t,i,e))}let M=new M8(C,s&&s.animations);return s&&s._cacheable&&(a[H]=Object.freeze(M)),M}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Oe(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),C=this._sharedOptions,a=this.getSharedOptions(i),H=this.includeOptions(e,a)||a!==C;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:H}}updateElement(t,e,i,C){Oe(C)?Object.assign(t,i):this._resolveAnimations(e,C).update(t,i)}updateSharedOptions(t,e,i){t&&!Oe(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,C){t.active=C;let a=this.getStyle(e,C);this._resolveAnimations(e,i,C).update(t,{options:!C&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[n,s,M]of this._syncList)this[n](s,M);this._syncList=[];let C=i.length,a=e.length,H=Math.min(a,C);H&&this.parse(0,H),a>C?this._insertElements(C,a-C,t):a<C&&this._removeElements(a,C-a)}_insertElements(t,e,i=!0){let C=this._cachedMeta,a=C.data,H=t+e,n,s=M=>{for(M.length+=e,n=M.length-1;n>=H;n--)M[n]=M[n-e]};for(s(a),n=t;n<H;++n)a[n]=new this.dataElementType;this._parsing&&s(C._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,C){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let C=i._parsed.splice(t,e);i._stacked&&J4(i,C)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,C]=t;this[e](i,C)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};W(a3,"defaults",{}),W(a3,"datasetElementType",null),W(a3,"dataElementType",null);function Id(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let C=0,a=e.length;C<a;C++)i=i.concat(e[C].controller.getAllParsedValues(r));r._cache.$bar=z6(i.sort((C,a)=>C-a))}return r._cache.$bar}function Nd(r){let t=r.iScale,e=Id(t,r.type),i=t._length,C,a,H,n,s=()=>{H===32767||H===-32768||(I3(n)&&(i=Math.min(i,Math.abs(H-n)||i)),n=H)};for(C=0,a=e.length;C<a;++C)H=t.getPixelForValue(e[C]),s();for(n=void 0,C=0,a=t.ticks.length;C<a;++C)H=t.getPixelForTick(C),s();return i}function Wd(r,t,e,i){let C=e.barThickness,a,H;return b1(C)?(a=t.min*e.categoryPercentage,H=e.barPercentage):(a=C*i,H=1),{chunk:a/i,ratio:H,start:t.pixels[r]-a/2}}function Ud(r,t,e,i){let C=t.pixels,a=C[r],H=r>0?C[r-1]:null,n=r<C.length-1?C[r+1]:null,s=e.categoryPercentage;H===null&&(H=a-(n===null?t.end-t.start:n-a)),n===null&&(n=a+a-H);let M=a-(a-Math.min(H,n))/2*s;return{chunk:Math.abs(n-H)/2*s/i,ratio:e.barPercentage,start:M}}function jd(r,t,e,i){let C=e.parse(r[0],i),a=e.parse(r[1],i),H=Math.min(C,a),n=Math.max(C,a),s=H,M=n;Math.abs(H)>Math.abs(n)&&(s=n,M=H),t[e.axis]=M,t._custom={barStart:s,barEnd:M,start:C,end:a,min:H,max:n}}function LH(r,t,e,i){return t2(r)?jd(r,t,e,i):t[e.axis]=e.parse(r,i),t}function Aa(r,t,e,i){let C=r.iScale,a=r.vScale,H=C.getLabels(),n=C===a,s=[],M,p,h,v;for(M=e,p=e+i;M<p;++M)v=t[M],h={},h[C.axis]=n||C.parse(H[M],M),s.push(LH(v,h,a,M));return s}function ke(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function Gd(r,t,e){return r!==0?g5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function qd(r){let t,e,i,C,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(C="end",a="start"):(C="start",a="end"),{start:e,end:i,reverse:t,top:C,bottom:a}}function Yd(r,t,e,i){let C=t.borderSkipped,a={};if(!C){r.borderSkipped=a;return}if(C===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:H,end:n,reverse:s,top:M,bottom:p}=qd(r);C==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?C=M:(e._bottom||0)===i?C=p:(a[va(p,H,n,s)]=!0,C=M)),a[va(C,H,n,s)]=!0,r.borderSkipped=a}function va(r,t,e,i){return i?(r=Qd(r,t,e),r=xa(r,e,t)):r=xa(r,t,e),r}function Qd(r,t,e){return r===t?e:r===e?t:r}function xa(r,t,e){return r==="start"?t:r==="end"?e:r}function Kd(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var y0=class extends a3{parsePrimitiveData(t,e,i,C){return Aa(t,e,i,C)}parseArrayData(t,e,i,C){return Aa(t,e,i,C)}parseObjectData(t,e,i,C){let{iScale:a,vScale:H}=t,{xAxisKey:n="x",yAxisKey:s="y"}=this._parsing,M=a.axis==="x"?n:s,p=H.axis==="x"?n:s,h=[],v,g,Z,y;for(v=i,g=i+C;v<g;++v)y=e[v],Z={},Z[a.axis]=a.parse(r3(y,M),v),h.push(LH(r3(y,p),Z,H,v));return h}updateRangeFromParsed(t,e,i,C){super.updateRangeFromParsed(t,e,i,C);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:C}=e,a=this.getParsed(t),H=a._custom,n=ke(H)?"["+H.start+", "+H.end+"]":""+C.getLabelForValue(a[C.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:n}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,C){let a=C==="reset",{index:H,_cachedMeta:{vScale:n}}=this,s=n.getBasePixel(),M=n.isHorizontal(),p=this._getRuler(),{sharedOptions:h,includeOptions:v}=this._getSharedOptions(e,C);for(let g=e;g<e+i;g++){let Z=this.getParsed(g),y=a||b1(Z[n.axis])?{base:s,head:s}:this._calculateBarValuePixels(g),k=this._calculateBarIndexPixels(g,p),F=(Z._stacks||{})[n.axis],D={horizontal:M,base:y.base,enableBorderRadius:!F||ke(Z._custom)||H===F._top||H===F._bottom,x:M?y.head:k.center,y:M?k.center:y.head,height:M?k.size:Math.abs(y.size),width:M?Math.abs(y.size):k.size};v&&(D.options=h||this.resolveDataElementOptions(g,t[g].active?"active":C));let B=D.options||t[g].options;Yd(D,B,F,H),Kd(D,B,p.ratio),this.updateElement(t[g],g,D,C)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,C=i.getMatchingVisibleMetas(this._type).filter(p=>p.controller.options.grouped),a=i.options.stacked,H=[],n=this._cachedMeta.controller.getParsed(e),s=n&&n[i.axis],M=p=>{let h=p._parsed.find(g=>g[i.axis]===s),v=h&&h[p.vScale.axis];if(b1(v)||isNaN(v))return!0};for(let p of C)if(!(e!==void 0&&M(p))&&((a===!1||H.indexOf(p.stack)===-1||a===void 0&&p.stack===void 0)&&H.push(p.stack),p.index===t))break;return H.length||H.push(void 0),H}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[B1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let C=this._getStacks(t,i),a=e!==void 0?C.indexOf(e):-1;return a===-1?C.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,C=[],a,H;for(a=0,H=e.data.length;a<H;++a)C.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let n=t.barThickness;return{min:n||Nd(e),pixels:C,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:n?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:C},options:{base:a,minBarLength:H}}=this,n=a||0,s=this.getParsed(t),M=s._custom,p=ke(M),h=s[e.axis],v=0,g=i?this.applyStack(e,s,i):h,Z,y;g!==h&&(v=g-h,g=h),p&&(h=M.barStart,g=M.barEnd-M.barStart,h!==0&&g5(h)!==g5(M.barEnd)&&(v=0),v+=h);let k=!b1(a)&&!p?a:v,F=e.getPixelForValue(k);if(this.chart.getDataVisibility(t)?Z=e.getPixelForValue(v+g):Z=F,y=Z-F,Math.abs(y)<H){y=Gd(y,e,n)*H,h===n&&(F-=y/2);let D=e.getPixelForDecimal(0),B=e.getPixelForDecimal(1),K=Math.min(D,B),Q=Math.max(D,B);F=Math.max(Math.min(F,Q),K),Z=F+y,i&&!p&&(s._stacks[e.axis]._visualValues[C]=e.getValueForPixel(Z)-e.getValueForPixel(F))}if(F===e.getPixelForValue(n)){let D=g5(y)*e.getLineWidthForValue(n)/2;F+=D,y-=D}return{size:y,base:F,head:Z,center:Z+y/2}}_calculateBarIndexPixels(t,e){let i=e.scale,C=this.options,a=C.skipNull,H=B1(C.maxBarThickness,1/0),n,s,M=this._getAxisCount();if(e.grouped){let p=a?this._getStackCount(t):e.stackCount,h=C.barThickness==="flex"?Ud(t,e,C,p*M):Wd(t,e,C,p*M),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(B1(v,this.getFirstScaleIdForIndexAxis())),Z=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;n=h.start+h.chunk*Z+h.chunk/2,s=Math.min(H,h.chunk*h.ratio)}else n=i.getPixelForValue(this.getParsed(t)[i.axis],t),s=Math.min(H,e.min*e.ratio);return{base:n-s/2,head:n+s/2,center:n,size:s}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,C=i.length,a=0;for(;a<C;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};W(y0,"id","bar"),W(y0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),W(y0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var O0=class extends a3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:C=[],_dataset:a}=e,H=this.chart._animationsDisabled,{start:n,count:s}=le(e,C,H);this._drawStart=n,this._drawCount=s,Me(e)&&(n=0,s=C.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=C;let M=this.resolveDatasetElementOptions(t);this.options.showLine||(M.borderWidth=0),M.segment=this.options.segment,this.updateElement(i,void 0,{animated:!H,options:M},t),this.updateElements(C,n,s,t)}updateElements(t,e,i,C){let a=C==="reset",{iScale:H,vScale:n,_stacked:s,_dataset:M}=this._cachedMeta,{sharedOptions:p,includeOptions:h}=this._getSharedOptions(e,C),v=H.axis,g=n.axis,{spanGaps:Z,segment:y}=this.options,k=W3(Z)?Z:Number.POSITIVE_INFINITY,F=this.chart._animationsDisabled||a||C==="none",D=e+i,B=t.length,K=e>0&&this.getParsed(e-1);for(let Q=0;Q<B;++Q){let c1=t[Q],s1=F?c1:{};if(Q<e||Q>=D){s1.skip=!0;continue}let r1=this.getParsed(Q),o1=b1(r1[g]),f1=s1[v]=H.getPixelForValue(r1[v],Q),I1=s1[g]=a||o1?n.getBasePixel():n.getPixelForValue(s?this.applyStack(n,r1,s):r1[g],Q);s1.skip=isNaN(f1)||isNaN(I1)||o1,s1.stop=Q>0&&Math.abs(r1[v]-K[v])>k,y&&(s1.parsed=r1,s1.raw=M.data[Q]),h&&(s1.options=p||this.resolveDataElementOptions(Q,c1.active?"active":C)),F||this.updateElement(c1,Q,s1,C),K=r1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,C=t.data||[];if(!C.length)return i;let a=C[0].size(this.resolveDataElementOptions(0)),H=C[C.length-1].size(this.resolveDataElementOptions(C.length-1));return Math.max(i,a,H)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};W(O0,"id","line"),W(O0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),W(O0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function j3(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Ie=class r{constructor(t){W(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return j3()}parse(){return j3()}format(){return j3()}add(){return j3()}diff(){return j3()}startOf(){return j3()}endOf(){return j3()}},Xd={_date:Ie};function Jd(r,t,e,i){let{controller:C,data:a,_sorted:H}=r,n=C._cachedMeta.iScale,s=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(n&&t===n.axis&&t!=="r"&&H&&a.length){let M=n._reversePixels?He:S0;if(i){if(C._sharedOptions){let p=a[0],h=typeof p.getRange=="function"&&p.getRange(t);if(h){let v=M(a,t,e-h),g=M(a,t,e+h);return{lo:v.lo,hi:g.hi}}}}else{let p=M(a,t,e);if(s){let{vScale:h}=C._cachedMeta,{_parsed:v}=r,g=v.slice(0,p.lo+1).reverse().findIndex(y=>!b1(y[h.axis]));p.lo-=Math.max(0,g);let Z=v.slice(p.hi).findIndex(y=>!b1(y[h.axis]));p.hi+=Math.max(0,Z)}return p}}return{lo:0,hi:a.length-1}}function n9(r,t,e,i,C){let a=r.getSortedVisibleDatasetMetas(),H=e[t];for(let n=0,s=a.length;n<s;++n){let{index:M,data:p}=a[n],{lo:h,hi:v}=Jd(a[n],t,H,C);for(let g=h;g<=v;++g){let Z=p[g];Z.skip||i(Z,M,g)}}}function tp(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,C){let a=t?Math.abs(i.x-C.x):0,H=e?Math.abs(i.y-C.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(H,2))}}function Te(r,t,e,i,C){let a=[];return!C&&!r.isPointInArea(t)||n9(r,e,t,function(n,s,M){!C&&!P5(n,r.chartArea,0)||n.inRange(t.x,t.y,i)&&a.push({element:n,datasetIndex:s,index:M})},!0),a}function ep(r,t,e,i){let C=[];function a(H,n,s){let{startAngle:M,endAngle:p}=H.getProps(["startAngle","endAngle"],i),{angle:h}=D6(H,{x:t.x,y:t.y});z4(h,M,p)&&C.push({element:H,datasetIndex:n,index:s})}return n9(r,e,t,a),C}function rp(r,t,e,i,C,a){let H=[],n=tp(e),s=Number.POSITIVE_INFINITY;function M(p,h,v){let g=p.inRange(t.x,t.y,C);if(i&&!g)return;let Z=p.getCenterPoint(C);if(!(!!a||r.isPointInArea(Z))&&!g)return;let k=n(t,Z);k<s?(H=[{element:p,datasetIndex:h,index:v}],s=k):k===s&&H.push({element:p,datasetIndex:h,index:v})}return n9(r,e,t,M),H}function Pe(r,t,e,i,C,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?ep(r,t,e,C):rp(r,t,e,i,C,a)}function ga(r,t,e,i,C){let a=[],H=e==="x"?"inXRange":"inYRange",n=!1;return n9(r,e,t,(s,M,p)=>{s[H]&&s[H](t[e],C)&&(a.push({element:s,datasetIndex:M,index:p}),n=n||s.inRange(t.x,t.y,C))}),i&&!n?[]:a}var ip={evaluateInteractionItems:n9,modes:{index(r,t,e,i){let C=E5(t,r),a=e.axis||"x",H=e.includeInvisible||!1,n=e.intersect?Te(r,C,a,i,H):Pe(r,C,a,!1,i,H),s=[];return n.length?(r.getSortedVisibleDatasetMetas().forEach(M=>{let p=n[0].index,h=M.data[p];h&&!h.skip&&s.push({element:h,datasetIndex:M.index,index:p})}),s):[]},dataset(r,t,e,i){let C=E5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1,n=e.intersect?Te(r,C,a,i,H):Pe(r,C,a,!1,i,H);if(n.length>0){let s=n[0].datasetIndex,M=r.getDatasetMeta(s).data;n=[];for(let p=0;p<M.length;++p)n.push({element:M[p],datasetIndex:s,index:p})}return n},point(r,t,e,i){let C=E5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1;return Te(r,C,a,i,H)},nearest(r,t,e,i){let C=E5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1;return Pe(r,C,a,e.intersect,i,H)},x(r,t,e,i){let C=E5(t,r);return ga(r,C,"x",e.intersect,i)},y(r,t,e,i){let C=E5(t,r);return ga(r,C,"y",e.intersect,i)}}},lH=["left","top","right","bottom"];function t9(r,t){return r.filter(e=>e.pos===t)}function _a(r,t){return r.filter(e=>lH.indexOf(e.pos)===-1&&e.box.axis===t)}function e9(r,t){return r.sort((e,i)=>{let C=t?i:e,a=t?e:i;return C.weight===a.weight?C.index-a.index:C.weight-a.weight})}function Cp(r){let t=[],e,i,C,a,H,n;for(e=0,i=(r||[]).length;e<i;++e)C=r[e],{position:a,options:{stack:H,stackWeight:n=1}}=C,t.push({index:e,box:C,pos:a,horizontal:C.isHorizontal(),weight:C.weight,stack:H&&a+H,stackWeight:n});return t}function op(r){let t={};for(let e of r){let{stack:i,pos:C,stackWeight:a}=e;if(!i||!lH.includes(C))continue;let H=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});H.count++,H.weight+=a}return t}function ap(r,t){let e=op(r),{vBoxMaxWidth:i,hBoxMaxHeight:C}=t,a,H,n;for(a=0,H=r.length;a<H;++a){n=r[a];let{fullSize:s}=n.box,M=e[n.stack],p=M&&n.stackWeight/M.weight;n.horizontal?(n.width=p?p*i:s&&t.availableWidth,n.height=C):(n.width=i,n.height=p?p*C:s&&t.availableHeight)}return e}function Hp(r){let t=Cp(r),e=e9(t.filter(M=>M.box.fullSize),!0),i=e9(t9(t,"left"),!0),C=e9(t9(t,"right")),a=e9(t9(t,"top"),!0),H=e9(t9(t,"bottom")),n=_a(t,"x"),s=_a(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:C.concat(s).concat(H).concat(n),chartArea:t9(t,"chartArea"),vertical:i.concat(C).concat(s),horizontal:a.concat(H).concat(n)}}function Sa(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function MH(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function Vp(r,t,e,i){let{pos:C,box:a}=e,H=r.maxPadding;if(!Z1(C)){e.size&&(r[C]-=e.size);let h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?a.height:a.width),e.size=h.size/h.count,r[C]+=e.size}a.getPadding&&MH(H,a.getPadding());let n=Math.max(0,t.outerWidth-Sa(H,r,"left","right")),s=Math.max(0,t.outerHeight-Sa(H,r,"top","bottom")),M=n!==r.w,p=s!==r.h;return r.w=n,r.h=s,e.horizontal?{same:M,other:p}:{same:p,other:M}}function np(r){let t=r.maxPadding;function e(i){let C=Math.max(t[i]-r[i],0);return r[i]+=C,C}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function sp(r,t){let e=t.maxPadding;function i(C){let a={left:0,top:0,right:0,bottom:0};return C.forEach(H=>{a[H]=Math.max(t[H],e[H])}),a}return i(r?["left","right"]:["top","bottom"])}function C9(r,t,e,i){let C=[],a,H,n,s,M,p;for(a=0,H=r.length,M=0;a<H;++a){n=r[a],s=n.box,s.update(n.width||t.w,n.height||t.h,sp(n.horizontal,t));let{same:h,other:v}=Vp(t,e,n,i);M|=h&&C.length,p=p||v,s.fullSize||C.push(n)}return M&&C9(C,t,e,i)||p}function i8(r,t,e,i,C){r.top=e,r.left=t,r.right=t+i,r.bottom=e+C,r.width=i,r.height=C}function ba(r,t,e,i){let C=e.padding,{x:a,y:H}=t;for(let n of r){let s=n.box,M=i[n.stack]||{count:1,placed:0,weight:1},p=n.stackWeight/M.weight||1;if(n.horizontal){let h=t.w*p,v=M.size||s.height;I3(M.start)&&(H=M.start),s.fullSize?i8(s,C.left,H,e.outerWidth-C.right-C.left,v):i8(s,t.left+M.placed,H,h,v),M.start=H,M.placed+=h,H=s.bottom}else{let h=t.h*p,v=M.size||s.width;I3(M.start)&&(a=M.start),s.fullSize?i8(s,a,C.top,v,e.outerHeight-C.bottom-C.top):i8(s,a,t.top+M.placed,v,h),M.start=a,M.placed+=h,a=s.right}}t.x=a,t.y=H}var C8={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let C=B2(r.options.layout.padding),a=Math.max(t-C.width,0),H=Math.max(e-C.height,0),n=Hp(r.boxes),s=n.vertical,M=n.horizontal;z1(r.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});let p=s.reduce((y,k)=>k.box.options&&k.box.options.display===!1?y:y+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:C,availableWidth:a,availableHeight:H,vBoxMaxWidth:a/2/p,hBoxMaxHeight:H/2}),v=Object.assign({},C);MH(v,B2(i));let g=Object.assign({maxPadding:v,w:a,h:H,x:C.left,y:C.top},C),Z=ap(s.concat(M),h);C9(n.fullSize,g,h,Z),C9(s,g,h,Z),C9(M,g,h,Z)&&C9(s,g,h,Z),np(g),ba(n.leftAndTop,g,h,Z),g.x+=g.w,g.y+=g.h,ba(n.rightAndBottom,g,h,Z),r.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},z1(n.chartArea,y=>{let k=y.box;Object.assign(k,r.chartArea),k.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}},c8=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,C){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,C?Math.floor(e/C):i)}}isAttached(t){return!0}updateConfig(t){}},Ne=class extends c8{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},L8="$chartjs",Lp={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},wa=r=>r===null||r==="";function lp(r,t){let e=r.style,i=r.getAttribute("height"),C=r.getAttribute("width");if(r[L8]={initial:{height:i,width:C,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",wa(C)){let a=J6(r,"width");a!==void 0&&(r.width=a)}if(wa(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=J6(r,"height");a!==void 0&&(r.height=a)}return r}var cH=xe?{passive:!0}:!1;function Mp(r,t,e){r&&r.addEventListener(t,e,cH)}function cp(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,cH)}function dp(r,t){let e=Lp[r.type]||r.type,{x:i,y:C}=E5(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:C!==void 0?C:null}}function d8(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function pp(r,t,e){let i=r.canvas,C=new MutationObserver(a=>{let H=!1;for(let n of a)H=H||d8(n.addedNodes,i),H=H&&!d8(n.removedNodes,i);H&&e()});return C.observe(document,{childList:!0,subtree:!0}),C}function up(r,t,e){let i=r.canvas,C=new MutationObserver(a=>{let H=!1;for(let n of a)H=H||d8(n.removedNodes,i),H=H&&!d8(n.addedNodes,i);H&&e()});return C.observe(document,{childList:!0,subtree:!0}),C}var H9=new Map,Za=0;function dH(){let r=window.devicePixelRatio;r!==Za&&(Za=r,H9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function mp(r,t){H9.size||window.addEventListener("resize",dH),H9.set(r,t)}function hp(r){H9.delete(r),H9.size||window.removeEventListener("resize",dH)}function fp(r,t,e){let i=r.canvas,C=i&&K4(i);if(!C)return;let a=N6((n,s)=>{let M=C.clientWidth;e(n,s),M<C.clientWidth&&e()},window),H=new ResizeObserver(n=>{let s=n[0],M=s.contentRect.width,p=s.contentRect.height;M===0&&p===0||a(M,p)});return H.observe(C),mp(r,a),H}function Fe(r,t,e){e&&e.disconnect(),t==="resize"&&hp(r)}function Ap(r,t,e){let i=r.canvas,C=N6(a=>{r.ctx!==null&&e(dp(a,r))},r);return Mp(i,t,C),C}var We=class extends c8{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(lp(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[L8])return!1;let i=e[L8].initial;["height","width"].forEach(a=>{let H=i[a];b1(H)?e.removeAttribute(a):e.setAttribute(a,H)});let C=i.style||{};return Object.keys(C).forEach(a=>{e.style[a]=C[a]}),e.width=e.width,delete e[L8],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let C=t.$proxies||(t.$proxies={}),H={attach:pp,detach:up,resize:fp}[e]||Ap;C[e]=H(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),C=i[e];if(!C)return;({attach:Fe,detach:Fe,resize:Fe}[e]||cp)(t,e,C),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,C){return ve(t,e,i,C)}isAttached(t){let e=t&&K4(t);return!!(e&&e.isConnected)}};function vp(r){return!Q4()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?Ne:We}var D5=class{constructor(){W(this,"x");W(this,"y");W(this,"active",!1);W(this,"options");W(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return W3(this.x)&&W3(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let C={};return t.forEach(a=>{C[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),C}};W(D5,"defaults",{}),W(D5,"defaultRoutes");function xp(r,t){let e=r.options.ticks,i=gp(r),C=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?Sp(t):[],H=a.length,n=a[0],s=a[H-1],M=[];if(H>C)return bp(t,M,a,H/C),M;let p=_p(a,t,C);if(H>0){let h,v,g=H>1?Math.round((s-n)/(H-1)):null;for(o8(t,M,p,b1(g)?0:n-g,n),h=0,v=H-1;h<v;h++)o8(t,M,p,a[h],a[h+1]);return o8(t,M,p,s,b1(g)?t.length:s+g),M}return o8(t,M,p),M}function gp(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),C=r._maxLength/e;return Math.floor(Math.min(i,C))}function _p(r,t,e){let i=wp(r),C=t.length/e;if(!i)return Math.max(C,1);let a=Ce(i);for(let H=0,n=a.length-1;H<n;H++){let s=a[H];if(s>C)return s}return Math.max(C,1)}function Sp(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function bp(r,t,e,i){let C=0,a=e[0],H;for(i=Math.ceil(i),H=0;H<r.length;H++)H===a&&(t.push(r[H]),C++,a=e[C*i])}function o8(r,t,e,i,C){let a=B1(i,0),H=Math.min(B1(C,r.length),r.length),n=0,s,M,p;for(e=Math.ceil(e),C&&(s=C-i,e=s/Math.floor(s/e)),p=a;p<0;)n++,p=Math.round(a+n*e);for(M=Math.max(a,0);M<H;M++)M===p&&(t.push(r[M]),n++,p=Math.round(a+n*e))}function wp(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var Zp=r=>r==="left"?"right":r==="right"?"left":r,ya=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,Oa=(r,t)=>Math.min(t||r,r);function ka(r,t){let e=[],i=r.length/t,C=r.length,a=0;for(;a<C;a+=i)e.push(r[Math.floor(a)]);return e}function yp(r,t,e){let i=r.ticks.length,C=Math.min(t,i-1),a=r._startPixel,H=r._endPixel,n=1e-6,s=r.getPixelForTick(C),M;if(!(e&&(i===1?M=Math.max(s-a,H-s):t===0?M=(r.getPixelForTick(1)-s)/2:M=(s-r.getPixelForTick(C-1))/2,s+=C<t?M:-M,s<a-n||s>H+n)))return s}function Op(r,t){z1(r,e=>{let i=e.gc,C=i.length/2,a;if(C>t){for(a=0;a<C;++a)delete e.data[i[a]];i.splice(0,C)}})}function r9(r){return r.drawTicks?r.tickLength:0}function Ta(r,t){if(!r.display)return 0;let e=k2(r.font,t),i=B2(r.padding);return(t2(r.text)?r.text.length:1)*e.lineHeight+i.height}function kp(r,t){return i0(r,{scale:t,type:"scale"})}function Tp(r,t,e){return i0(r,{tick:e,index:t,type:"tick"})}function Pp(r,t,e){let i=Le(r);return(e&&t!=="right"||!e&&t==="right")&&(i=Zp(i)),i}function Fp(r,t,e,i){let{top:C,left:a,bottom:H,right:n,chart:s}=r,{chartArea:M,scales:p}=s,h=0,v,g,Z,y=H-C,k=n-a;if(r.isHorizontal()){if(g=W6(i,a,n),Z1(e)){let F=Object.keys(e)[0],D=e[F];Z=p[F].getPixelForValue(D)+y-t}else e==="center"?Z=(M.bottom+M.top)/2+y-t:Z=ya(r,e,t);v=n-a}else{if(Z1(e)){let F=Object.keys(e)[0],D=e[F];g=p[F].getPixelForValue(D)-k+t}else e==="center"?g=(M.left+M.right)/2-k+t:g=ya(r,e,t);Z=W6(i,H,C),h=e==="left"?-d2:d2}return{titleX:g,titleY:Z,maxWidth:v,rotation:h}}var q3=class r extends D5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:C}=this;return t=G2(t,Number.POSITIVE_INFINITY),e=G2(e,Number.NEGATIVE_INFINITY),i=G2(i,Number.POSITIVE_INFINITY),C=G2(C,Number.NEGATIVE_INFINITY),{min:G2(t,i),max:G2(e,C),minDefined:V2(t),maxDefined:V2(e)}}getMinMax(t){let{min:e,max:i,minDefined:C,maxDefined:a}=this.getUserBounds(),H;if(C&&a)return{min:e,max:i};let n=this.getMatchingVisibleMetas();for(let s=0,M=n.length;s<M;++s)H=n[s].controller.getMinMax(this,t),C||(e=Math.min(e,H.min)),a||(i=Math.max(i,H.max));return e=a&&e>i?i:e,i=C&&e>i?e:i,{min:G2(e,G2(i,e)),max:G2(i,G2(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){X1(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:C,grace:a,ticks:H}=this.options,n=H.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=me(this,a,C),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=n<this.ticks.length;this._convertTicksToLabels(s?ka(this.ticks,n):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),H.display&&(H.autoSkip||H.source==="auto")&&(this.ticks=xp(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){X1(this.options.afterUpdate,[this])}beforeSetDimensions(){X1(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){X1(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),X1(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){X1(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,C,a;for(i=0,C=t.length;i<C;i++)a=t[i],a.label=X1(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){X1(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){X1(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=Oa(this.ticks.length,t.ticks.maxTicksLimit),C=e.minRotation||0,a=e.maxRotation,H=C,n,s,M;if(!this._isVisible()||!e.display||C>=a||i<=1||!this.isHorizontal()){this.labelRotation=C;return}let p=this._getLabelSizes(),h=p.widest.width,v=p.highest.height,g=S2(this.chart.width-h,0,this.maxWidth);n=t.offset?this.maxWidth/i:g/(i-1),h+6>n&&(n=g/(i-(t.offset?.5:1)),s=this.maxHeight-r9(t.grid)-e.padding-Ta(t.title,this.chart.options.font),M=Math.sqrt(h*h+v*v),H=$4(Math.min(Math.asin(S2((p.highest.height+6)/n,-1,1)),Math.asin(S2(s/M,-1,1))-Math.asin(S2(v/M,-1,1)))),H=Math.max(C,Math.min(a,H))),this.labelRotation=H}afterCalculateLabelRotation(){X1(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){X1(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:C,grid:a}}=this,H=this._isVisible(),n=this.isHorizontal();if(H){let s=Ta(C,e.options.font);if(n?(t.width=this.maxWidth,t.height=r9(a)+s):(t.height=this.maxHeight,t.width=r9(a)+s),i.display&&this.ticks.length){let{first:M,last:p,widest:h,highest:v}=this._getLabelSizes(),g=i.padding*2,Z=r0(this.labelRotation),y=Math.cos(Z),k=Math.sin(Z);if(n){let F=i.mirror?0:k*h.width+y*v.height;t.height=Math.min(this.maxHeight,t.height+F+g)}else{let F=i.mirror?0:y*h.width+k*v.height;t.width=Math.min(this.maxWidth,t.width+F+g)}this._calculatePadding(M,p,k,y)}}this._handleMargins(),n?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,C){let{ticks:{align:a,padding:H},position:n}=this.options,s=this.labelRotation!==0,M=n!=="top"&&this.axis==="x";if(this.isHorizontal()){let p=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),v=0,g=0;s?M?(v=C*t.width,g=i*e.height):(v=i*t.height,g=C*e.width):a==="start"?g=e.width:a==="end"?v=t.width:a!=="inner"&&(v=t.width/2,g=e.width/2),this.paddingLeft=Math.max((v-p+H)*this.width/(this.width-p),0),this.paddingRight=Math.max((g-h+H)*this.width/(this.width-h),0)}else{let p=e.height/2,h=t.height/2;a==="start"?(p=0,h=t.height):a==="end"&&(p=e.height,h=0),this.paddingTop=p+H,this.paddingBottom=h+H}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){X1(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)b1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=ka(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:C,_longestTextCache:a}=this,H=[],n=[],s=Math.floor(e/Oa(e,i)),M=0,p=0,h,v,g,Z,y,k,F,D,B,K,Q;for(h=0;h<e;h+=s){if(Z=t[h].label,y=this._resolveTickFontOptions(h),C.font=k=y.string,F=a[k]=a[k]||{data:{},gc:[]},D=y.lineHeight,B=K=0,!b1(Z)&&!t2(Z))B=y7(C,F.data,F.gc,B,Z),K=D;else if(t2(Z))for(v=0,g=Z.length;v<g;++v)Q=Z[v],!b1(Q)&&!t2(Q)&&(B=y7(C,F.data,F.gc,B,Q),K+=D);H.push(B),n.push(K),M=Math.max(B,M),p=Math.max(K,p)}Op(a,e);let c1=H.indexOf(M),s1=n.indexOf(p),r1=o1=>({width:H[o1]||0,height:n[o1]||0});return{first:r1(0),last:r1(e-1),widest:r1(c1),highest:r1(s1),widths:H,heights:n}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return ae(this._alignToPixels?b0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=Tp(this.getContext(),t,i))}return this.$context||(this.$context=kp(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=r0(this.labelRotation),i=Math.abs(Math.cos(e)),C=Math.abs(Math.sin(e)),a=this._getLabelSizes(),H=t.autoSkipPadding||0,n=a?a.widest.width+H:0,s=a?a.highest.height+H:0;return this.isHorizontal()?s*i>n*C?n/i:s/C:s*C<n*i?s/i:n/C}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,C=this.options,{grid:a,position:H,border:n}=C,s=a.offset,M=this.isHorizontal(),h=this.ticks.length+(s?1:0),v=r9(a),g=[],Z=n.setContext(this.getContext()),y=Z.display?Z.width:0,k=y/2,F=function(X){return b0(i,X,y)},D,B,K,Q,c1,s1,r1,o1,f1,I1,y1,s2;if(H==="top")D=F(this.bottom),s1=this.bottom-v,o1=D-k,I1=F(t.top)+k,s2=t.bottom;else if(H==="bottom")D=F(this.top),I1=t.top,s2=F(t.bottom)-k,s1=D+k,o1=this.top+v;else if(H==="left")D=F(this.right),c1=this.right-v,r1=D-k,f1=F(t.left)+k,y1=t.right;else if(H==="right")D=F(this.left),f1=t.left,y1=F(t.right)-k,c1=D+k,r1=this.left+v;else if(e==="x"){if(H==="center")D=F((t.top+t.bottom)/2+.5);else if(Z1(H)){let X=Object.keys(H)[0],q1=H[X];D=F(this.chart.scales[X].getPixelForValue(q1))}I1=t.top,s2=t.bottom,s1=D+k,o1=s1+v}else if(e==="y"){if(H==="center")D=F((t.left+t.right)/2);else if(Z1(H)){let X=Object.keys(H)[0],q1=H[X];D=F(this.chart.scales[X].getPixelForValue(q1))}c1=D-k,r1=c1-v,f1=t.left,y1=t.right}let G1=B1(C.ticks.maxTicksLimit,h),O1=Math.max(1,Math.ceil(h/G1));for(B=0;B<h;B+=O1){let X=this.getContext(B),q1=a.setContext(X),a1=n.setContext(X),U=q1.lineWidth,J=q1.color,H1=a1.dash||[],u1=a1.dashOffset,V1=q1.tickWidth,n1=q1.tickColor,_1=q1.tickBorderDash||[],k1=q1.tickBorderDashOffset;K=yp(this,B,s),K!==void 0&&(Q=b0(i,K,U),M?c1=r1=f1=y1=Q:s1=o1=I1=s2=Q,g.push({tx1:c1,ty1:s1,tx2:r1,ty2:o1,x1:f1,y1:I1,x2:y1,y2:s2,width:U,color:J,borderDash:H1,borderDashOffset:u1,tickWidth:V1,tickColor:n1,tickBorderDash:_1,tickBorderDashOffset:k1}))}return this._ticksLength=h,this._borderValue=D,g}_computeLabelItems(t){let e=this.axis,i=this.options,{position:C,ticks:a}=i,H=this.isHorizontal(),n=this.ticks,{align:s,crossAlign:M,padding:p,mirror:h}=a,v=r9(i.grid),g=v+p,Z=h?-p:g,y=-r0(this.labelRotation),k=[],F,D,B,K,Q,c1,s1,r1,o1,f1,I1,y1,s2="middle";if(C==="top")c1=this.bottom-Z,s1=this._getXAxisLabelAlignment();else if(C==="bottom")c1=this.top+Z,s1=this._getXAxisLabelAlignment();else if(C==="left"){let O1=this._getYAxisLabelAlignment(v);s1=O1.textAlign,Q=O1.x}else if(C==="right"){let O1=this._getYAxisLabelAlignment(v);s1=O1.textAlign,Q=O1.x}else if(e==="x"){if(C==="center")c1=(t.top+t.bottom)/2+g;else if(Z1(C)){let O1=Object.keys(C)[0],X=C[O1];c1=this.chart.scales[O1].getPixelForValue(X)+g}s1=this._getXAxisLabelAlignment()}else if(e==="y"){if(C==="center")Q=(t.left+t.right)/2-g;else if(Z1(C)){let O1=Object.keys(C)[0],X=C[O1];Q=this.chart.scales[O1].getPixelForValue(X)}s1=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(s==="start"?s2="top":s==="end"&&(s2="bottom"));let G1=this._getLabelSizes();for(F=0,D=n.length;F<D;++F){B=n[F],K=B.label;let O1=a.setContext(this.getContext(F));r1=this.getPixelForTick(F)+a.labelOffset,o1=this._resolveTickFontOptions(F),f1=o1.lineHeight,I1=t2(K)?K.length:1;let X=I1/2,q1=O1.color,a1=O1.textStrokeColor,U=O1.textStrokeWidth,J=s1;H?(Q=r1,s1==="inner"&&(F===D-1?J=this.options.reverse?"left":"right":F===0?J=this.options.reverse?"right":"left":J="center"),C==="top"?M==="near"||y!==0?y1=-I1*f1+f1/2:M==="center"?y1=-G1.highest.height/2-X*f1+f1:y1=-G1.highest.height+f1/2:M==="near"||y!==0?y1=f1/2:M==="center"?y1=G1.highest.height/2-X*f1:y1=G1.highest.height-I1*f1,h&&(y1*=-1),y!==0&&!O1.showLabelBackdrop&&(Q+=f1/2*Math.sin(y))):(c1=r1,y1=(1-I1)*f1/2);let H1;if(O1.showLabelBackdrop){let u1=B2(O1.backdropPadding),V1=G1.heights[F],n1=G1.widths[F],_1=y1-u1.top,k1=0-u1.left;switch(s2){case"middle":_1-=V1/2;break;case"bottom":_1-=V1;break}switch(s1){case"center":k1-=n1/2;break;case"right":k1-=n1;break;case"inner":F===D-1?k1-=n1:F>0&&(k1-=n1/2);break}H1={left:k1,top:_1,width:n1+u1.width,height:V1+u1.height,color:O1.backdropColor}}k.push({label:K,font:o1,textOffset:y1,options:{rotation:y,color:q1,strokeColor:a1,strokeWidth:U,textAlign:J,textBaseline:s2,translation:[Q,c1],backdrop:H1}})}return k}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-r0(this.labelRotation))return t==="top"?"left":"right";let C="center";return e.align==="start"?C="left":e.align==="end"?C="right":e.align==="inner"&&(C="inner"),C}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:C,padding:a}}=this.options,H=this._getLabelSizes(),n=t+a,s=H.widest.width,M,p;return e==="left"?C?(p=this.right+a,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p+=s)):(p=this.right-n,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p=this.left)):e==="right"?C?(p=this.left+a,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p-=s)):(p=this.left+n,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p=this.right)):M="right",{textAlign:M,x:p}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:C,width:a,height:H}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,C,a,H),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let C=this.ticks.findIndex(a=>a.value===t);return C>=0?e.setContext(this.getContext(C)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,C=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,H,n=(s,M,p)=>{!p.width||!p.color||(i.save(),i.lineWidth=p.width,i.strokeStyle=p.color,i.setLineDash(p.borderDash||[]),i.lineDashOffset=p.borderDashOffset,i.beginPath(),i.moveTo(s.x,s.y),i.lineTo(M.x,M.y),i.stroke(),i.restore())};if(e.display)for(a=0,H=C.length;a<H;++a){let s=C[a];e.drawOnChartArea&&n({x:s.x1,y:s.y1},{x:s.x2,y:s.y2},s),e.drawTicks&&n({x:s.tx1,y:s.ty1},{x:s.tx2,y:s.ty2},{color:s.tickColor,width:s.tickWidth,borderDash:s.tickBorderDash,borderDashOffset:s.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:C}}=this,a=i.setContext(this.getContext()),H=i.display?a.width:0;if(!H)return;let n=C.setContext(this.getContext(0)).lineWidth,s=this._borderValue,M,p,h,v;this.isHorizontal()?(M=b0(t,this.left,H)-H/2,p=b0(t,this.right,n)+n/2,h=v=s):(h=b0(t,this.top,H)-H/2,v=b0(t,this.bottom,n)+n/2,M=p=s),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(M,h),e.lineTo(p,v),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,C=this._computeLabelArea();C&&j4(i,C);let a=this.getLabelItems(t);for(let H of a){let n=H.options,s=H.font,M=H.label,p=H.textOffset;T7(i,M,0,p,s,n)}C&&G4(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:C}}=this;if(!i.display)return;let a=k2(i.font),H=B2(i.padding),n=i.align,s=a.lineHeight/2;e==="bottom"||e==="center"||Z1(e)?(s+=H.bottom,t2(i.text)&&(s+=a.lineHeight*(i.text.length-1))):s+=H.top;let{titleX:M,titleY:p,maxWidth:h,rotation:v}=Fp(this,s,e,n);T7(t,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:v,textAlign:Pp(n,e,C),textBaseline:"middle",translation:[M,p]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=B1(t.grid&&t.grid.z,-1),C=B1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:C,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",C=[],a,H;for(a=0,H=e.length;a<H;++a){let n=e[a];n[i]===this.id&&(!t||n.type===t)&&C.push(n)}return C}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return k2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},B7=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;Rp(e)&&(i=this.register(e));let C=this.items,a=t.id,H=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in C||(C[a]=t,Ep(t,H,i),this.override&&n2.override(t.id,t.overrides)),H}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,C=this.scope;i in e&&delete e[i],C&&i in n2[C]&&(delete n2[C][i],this.override&&delete i3[i])}};function Ep(r,t,e){let i=s5(Object.create(null),[e?n2.get(e):{},n2.get(t),r.defaults]);n2.set(t,i),r.defaultRoutes&&Bp(t,r.defaultRoutes),r.descriptors&&n2.describe(t,r.descriptors)}function Bp(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),C=i.pop(),a=[r].concat(i).join("."),H=t[e].split("."),n=H.pop(),s=H.join(".");n2.route(a,C,s,n)})}function Rp(r){return"id"in r&&"defaults"in r}var Ue=class{constructor(){this.controllers=new B7(a3,"datasets",!0),this.elements=new B7(D5,"elements"),this.plugins=new B7(Object,"plugins"),this.scales=new B7(q3,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(C=>{let a=i||this._getRegistryForType(C);i||a.isForType(C)||a===this.plugins&&C.id?this._exec(t,a,C):z1(C,H=>{let n=i||this._getRegistryForType(H);this._exec(t,n,H)})})}_exec(t,e,i){let C=D4(t);X1(i["before"+C],[],i),e[t](i),X1(i["after"+C],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let C=e.get(t);if(C===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return C}},o0=new Ue,je=class{constructor(){this._init=void 0}notify(t,e,i,C){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=C?this._descriptors(t).filter(C):this._descriptors(t),H=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),H}_notify(t,e,i,C){C=C||{};for(let a of t){let H=a.plugin,n=H[i],s=[e,C,a.options];if(X1(n,s,H)===!1&&C.cancelable)return!1}return!0}invalidate(){b1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,C=B1(i.options&&i.options.plugins,{}),a=Dp(i);return C===!1&&!e?[]:zp(t,a,C,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,C=(a,H)=>a.filter(n=>!H.some(s=>n.plugin.id===s.plugin.id));this._notify(C(e,i),t,"stop"),this._notify(C(i,e),t,"start")}};function Dp(r){let t={},e=[],i=Object.keys(o0.plugins.items);for(let a=0;a<i.length;a++)e.push(o0.getPlugin(i[a]));let C=r.plugins||[];for(let a=0;a<C.length;a++){let H=C[a];e.indexOf(H)===-1&&(e.push(H),t[H.id]=!0)}return{plugins:e,localIds:t}}function $p(r,t){return!t&&r===!1?null:r===!0?{}:r}function zp(r,{plugins:t,localIds:e},i,C){let a=[],H=r.getContext();for(let n of t){let s=n.id,M=$p(i[s],C);M!==null&&a.push({plugin:n,options:Ip(r.config,{plugin:n,local:e[s]},M,H)})}return a}function Ip(r,{plugin:t,local:e},i,C){let a=r.pluginScopeKeys(t),H=r.getOptionScopes(i,a);return e&&t.defaults&&H.push(t.defaults),r.createResolver(H,C,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ge(r,t){let e=n2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Np(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function Wp(r,t){return r===t?"_index_":"_value_"}function Pa(r){if(r==="x"||r==="y"||r==="r")return r}function Up(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function qe(r,...t){if(Pa(r))return r;for(let e of t){let i=e.axis||Up(e.position)||r.length>1&&Pa(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function Fa(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function jp(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return Fa(r,"x",e[0])||Fa(r,"y",e[0])}return{}}function Gp(r,t){let e=i3[r.type]||{scales:{}},i=t.scales||{},C=Ge(r.type,t),a=Object.create(null);return Object.keys(i).forEach(H=>{let n=i[H];if(!Z1(n))return console.error(`Invalid scale configuration for scale: ${H}`);if(n._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${H}`);let s=qe(H,n,jp(H,r),n2.scales[n.type]),M=Wp(s,C),p=e.scales||{};a[H]=z3(Object.create(null),[{axis:s},n,p[s],p[M]])}),r.data.datasets.forEach(H=>{let n=H.type||r.type,s=H.indexAxis||Ge(n,t),p=(i3[n]||{}).scales||{};Object.keys(p).forEach(h=>{let v=Np(h,s),g=H[v+"AxisID"]||v;a[g]=a[g]||Object.create(null),z3(a[g],[{axis:v},i[g],p[h]])})}),Object.keys(a).forEach(H=>{let n=a[H];z3(n,[n2.scales[n.type],n2.scale])}),a}function pH(r){let t=r.options||(r.options={});t.plugins=B1(t.plugins,{}),t.scales=Gp(r,t)}function uH(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function qp(r){return r=r||{},r.data=uH(r.data),pH(r),r}var Ea=new Map,mH=new Set;function a8(r,t){let e=Ea.get(r);return e||(e=t(),Ea.set(r,e),mH.add(e)),e}var i9=(r,t,e)=>{let i=r3(t,e);i!==void 0&&r.add(i)},Ye=class{constructor(t){this._config=qp(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=uH(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),pH(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return a8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return a8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return a8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return a8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,C=i.get(t);return(!C||e)&&(C=new Map,i.set(t,C)),C}getOptionScopes(t,e,i){let{options:C,type:a}=this,H=this._cachedScopes(t,i),n=H.get(e);if(n)return n;let s=new Set;e.forEach(p=>{t&&(s.add(t),p.forEach(h=>i9(s,t,h))),p.forEach(h=>i9(s,C,h)),p.forEach(h=>i9(s,i3[a]||{},h)),p.forEach(h=>i9(s,n2,h)),p.forEach(h=>i9(s,G6,h))});let M=Array.from(s);return M.length===0&&M.push(Object.create(null)),mH.has(e)&&H.set(e,M),M}chartOptionScopes(){let{options:t,type:e}=this;return[t,i3[e]||{},n2.datasets[e]||{},{type:e},n2,G6]}resolveNamedOptions(t,e,i,C=[""]){let a={$shared:!0},{resolver:H,subPrefixes:n}=Ba(this._resolverCache,t,C),s=H;if(Qp(H,e)){a.$shared=!1,i=t0(i)?i():i;let M=this.createResolver(t,i,n);s=e3(H,i,M)}for(let M of e)a[M]=s[M];return a}createResolver(t,e,i=[""],C){let{resolver:a}=Ba(this._resolverCache,t,i);return Z1(e)?e3(a,e,void 0,C):a}};function Ba(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let C=e.join(),a=i.get(C);return a||(a={resolver:Y4(t,e),subPrefixes:e.filter(n=>!n.toLowerCase().includes("hover"))},i.set(C,a)),a}var Yp=r=>Z1(r)&&Object.getOwnPropertyNames(r).some(t=>t0(r[t]));function Qp(r,t){let{isScriptable:e,isIndexable:i}=Q6(r);for(let C of t){let a=e(C),H=i(C),n=(H||a)&&r[C];if(a&&(t0(n)||Yp(n))||H&&t2(n))return!0}return!1}var Kp="4.5.1",Xp=["top","bottom","left","right","chartArea"];function Ra(r,t){return r==="top"||r==="bottom"||Xp.indexOf(r)===-1&&t==="x"}function Da(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function $a(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),X1(e&&e.onComplete,[r],t)}function Jp(r){let t=r.chart,e=t.options.animation;X1(e&&e.onProgress,[r],t)}function hH(r){return Q4()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var l8={},za=r=>{let t=hH(r);return Object.values(l8).filter(e=>e.canvas===t).pop()};function tu(r,t,e){let i=Object.keys(r);for(let C of i){let a=+C;if(a>=t){let H=r[C];delete r[C],(e>0||a>t)&&(r[a+e]=H)}}}function eu(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var b2=class{static register(...t){o0.add(...t),Ia()}static unregister(...t){o0.remove(...t),Ia()}constructor(t,e){let i=this.config=new Ye(e),C=hH(t),a=za(C);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let H=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||vp(C)),this.platform.updateConfig(i);let n=this.platform.acquireContext(C,H.aspectRatio),s=n&&n.canvas,M=s&&s.height,p=s&&s.width;if(this.id=ee(),this.ctx=n,this.canvas=s,this.width=p,this.height=M,this._options=H,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new je,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=se(h=>this.update(h),H.resizeDelay||0),this._dataChanges=[],l8[this.id]=this,!n||!s){console.error("Failed to create chart: can't acquire context from the given item");return}w0.listen(this,"complete",$a),w0.listen(this,"progress",Jp),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:C,_aspectRatio:a}=this;return b1(t)?e&&a?a:C?i/C:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return o0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():X6(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return q6(this.canvas,this.ctx),this}stop(){return w0.stop(this),this}resize(t,e){w0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,C=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,H=this.platform.getMaximumSize(C,t,e,a),n=i.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=H.width,this.height=H.height,this._aspectRatio=this.aspectRatio,X6(this,n,!0)&&(this.notifyPlugins("resize",{size:H}),X1(i.onResize,[this,H],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};z1(e,(i,C)=>{i.id=C})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,C=Object.keys(i).reduce((H,n)=>(H[n]=!1,H),{}),a=[];e&&(a=a.concat(Object.keys(e).map(H=>{let n=e[H],s=qe(H,n),M=s==="r",p=s==="x";return{options:n,dposition:M?"chartArea":p?"bottom":"left",dtype:M?"radialLinear":p?"category":"linear"}}))),z1(a,H=>{let n=H.options,s=n.id,M=qe(s,n),p=B1(n.type,H.dtype);(n.position===void 0||Ra(n.position,M)!==Ra(H.dposition))&&(n.position=H.dposition),C[s]=!0;let h=null;if(s in i&&i[s].type===p)h=i[s];else{let v=o0.getScale(p);h=new v({id:s,type:p,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(n,t)}),z1(C,(H,n)=>{H||delete i[n]}),z1(i,H=>{C8.configure(this,H,H.options),C8.addBox(this,H)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((C,a)=>C.index-a.index),i>e){for(let C=e;C<i;++C)this._destroyDatasetMeta(C);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(Da("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,C)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(C)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,C;for(this._removeUnreferencedMetasets(),i=0,C=e.length;i<C;i++){let a=e[i],H=this.getDatasetMeta(i),n=a.type||this.config.type;if(H.type&&H.type!==n&&(this._destroyDatasetMeta(i),H=this.getDatasetMeta(i)),H.type=n,H.indexAxis=a.indexAxis||Ge(n,this.options),H.order=a.order||0,H.index=i,H.label=""+a.label,H.visible=this.isDatasetVisible(i),H.controller)H.controller.updateIndex(i),H.controller.linkScales();else{let s=o0.getController(n),{datasetElementType:M,dataElementType:p}=n2.datasets[n];Object.assign(s,{dataElementType:o0.getElement(p),datasetElementType:M&&o0.getElement(M)}),H.controller=new s(this,i),t.push(H.controller)}}return this._updateMetasets(),t}_resetElements(){z1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),C=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let H=0;for(let M=0,p=this.data.datasets.length;M<p;M++){let{controller:h}=this.getDatasetMeta(M),v=!C&&a.indexOf(h)===-1;h.buildOrUpdateElements(v),H=Math.max(+h.getMaxOverflow(),H)}H=this._minPadding=i.layout.autoPadding?H:0,this._updateLayout(H),C||z1(a,M=>{M.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Da("z","_idx"));let{_active:n,_lastEvent:s}=this;s?this._eventHandler(s,!0):n.length&&this._updateHoverStyles(n,n,!0),this.render()}_updateScales(){z1(this.scales,t=>{C8.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!F6(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:C,count:a}of e){let H=i==="_removeElements"?-a:a;tu(t,C,H)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(H=>H[0]===a).map((H,n)=>n+","+H.splice(1).join(","))),C=i(0);for(let a=1;a<e;a++)if(!F6(C,i(a)))return;return Array.from(C).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;C8.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],z1(this.boxes,C=>{i&&C.position==="chartArea"||(C.configure&&C.configure(),this._layers.push(...C._layers()))},this),this._layers.forEach((C,a)=>{C._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,t0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),C={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",C)!==!1&&(i.controller._update(e),C.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",C))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(w0.has(this)?this.attached&&!w0.running(this)&&w0.start(this):(this.draw(),$a({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:C}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,C)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],C,a;for(C=0,a=e.length;C<a;++C){let H=e[C];(!t||H.visible)&&i.push(H)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},C=r8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(C&&j4(e,C),t.controller.draw(),C&&G4(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return P5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,C){let a=ip.modes[e];return typeof a=="function"?a(this,t,i,C):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,C=i.filter(a=>a&&a._dataset===e).pop();return C||(C={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(C)),C}getContext(){return this.$context||(this.$context=i0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let C=i?"show":"hide",a=this.getDatasetMeta(t),H=a.controller._resolveAnimations(void 0,C);I3(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),H.update(a,{visible:i}),this.update(n=>n.datasetIndex===t?C:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),w0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),q6(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete l8[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,H)=>{e.addEventListener(this,a,H),t[a]=H},C=(a,H,n)=>{a.offsetX=H,a.offsetY=n,this._eventHandler(a)};z1(this.options.events,a=>i(a,C))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(s,M)=>{e.addEventListener(this,s,M),t[s]=M},C=(s,M)=>{t[s]&&(e.removeEventListener(this,s,M),delete t[s])},a=(s,M)=>{this.canvas&&this.resize(s,M)},H,n=()=>{C("attach",n),this.attached=!0,this.resize(),i("resize",a),i("detach",H)};H=()=>{this.attached=!1,C("resize",a),this._stop(),this._resize(0,0),i("attach",n)},e.isAttached(this.canvas)?n():H()}unbindEvents(){z1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},z1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let C=i?"set":"remove",a,H,n,s;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+C+"DatasetHoverStyle"]()),n=0,s=t.length;n<s;++n){H=t[n];let M=H&&this.getDatasetMeta(H.datasetIndex).controller;M&&M[C+"HoverStyle"](H.element,H.datasetIndex,H.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:H})=>{let n=this.getDatasetMeta(a);if(!n)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:n.data[H],index:H}});!k7(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let C=this.options.hover,a=(s,M)=>s.filter(p=>!M.some(h=>p.datasetIndex===h.datasetIndex&&p.index===h.index)),H=a(e,t),n=i?t:a(t,e);H.length&&this.updateHoverStyle(H,C.mode,!1),n.length&&C.mode&&this.updateHoverStyle(n,C.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},C=H=>(H.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,C)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,C),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:C=[],options:a}=this,H=e,n=this._getActiveElements(t,C,i,H),s=ie(t),M=eu(t,this._lastEvent,i,s);i&&(this._lastEvent=null,X1(a.onHover,[t,n,this],this),s&&X1(a.onClick,[t,n,this],this));let p=!k7(n,C);return(p||e)&&(this._active=n,this._updateHoverStyles(n,C,e)),this._lastEvent=M,p}_getActiveElements(t,e,i,C){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,C)}};W(b2,"defaults",n2),W(b2,"instances",l8),W(b2,"overrides",i3),W(b2,"registry",o0),W(b2,"version",Kp),W(b2,"getChart",za);function Ia(){return z1(b2.instances,r=>r._plugins.invalidate())}function ru(r,t,e){let{startAngle:i,x:C,y:a,outerRadius:H,innerRadius:n,options:s}=t,{borderWidth:M,borderJoinStyle:p}=s,h=Math.min(M/H,_2(i-e));if(r.beginPath(),r.arc(C,a,H-M/2,i+h/2,e-h/2),n>0){let v=Math.min(M/n,_2(i-e));r.arc(C,a,n+M/2,e-v/2,i+v/2,!0)}else{let v=Math.min(M/2,H*_2(i-e));if(p==="round")r.arc(C,a,v,e-Y1/2,i+Y1/2,!0);else if(p==="bevel"){let g=2*v*v,Z=-g*Math.cos(e+Y1/2)+C,y=-g*Math.sin(e+Y1/2)+a,k=g*Math.cos(i+Y1/2)+C,F=g*Math.sin(i+Y1/2)+a;r.lineTo(Z,y),r.lineTo(k,F)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function iu(r,t,e){let{startAngle:i,pixelMargin:C,x:a,y:H,outerRadius:n,innerRadius:s}=t,M=C/n;r.beginPath(),r.arc(a,H,n,i-M,e+M),s>C?(M=C/s,r.arc(a,H,s,e+M,i-M,!0)):r.arc(a,H,C,e+d2,i-d2),r.closePath(),r.clip()}function Cu(r){return q4(r,["outerStart","outerEnd","innerStart","innerEnd"])}function ou(r,t,e,i){let C=Cu(r.options.borderRadius),a=(e-t)/2,H=Math.min(a,i*t/2),n=s=>{let M=(e-Math.min(a,s))*i/2;return S2(s,0,Math.min(a,M))};return{outerStart:n(C.outerStart),outerEnd:n(C.outerEnd),innerStart:S2(C.innerStart,0,H),innerEnd:S2(C.innerEnd,0,H)}}function F7(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function p8(r,t,e,i,C,a){let{x:H,y:n,startAngle:s,pixelMargin:M,innerRadius:p}=t,h=Math.max(t.outerRadius+i+e-M,0),v=p>0?p+i+e+M:0,g=0,Z=C-s;if(i){let O1=p>0?p-i:0,X=h>0?h-i:0,q1=(O1+X)/2,a1=q1!==0?Z*q1/(q1+i):Z;g=(Z-a1)/2}let y=Math.max(.001,Z*h-e/Y1)/h,k=(Z-y)/2,F=s+k+g,D=C-k-g,{outerStart:B,outerEnd:K,innerStart:Q,innerEnd:c1}=ou(t,v,h,D-F),s1=h-B,r1=h-K,o1=F+B/s1,f1=D-K/r1,I1=v+Q,y1=v+c1,s2=F+Q/I1,G1=D-c1/y1;if(r.beginPath(),a){let O1=(o1+f1)/2;if(r.arc(H,n,h,o1,O1),r.arc(H,n,h,O1,f1),K>0){let U=F7(r1,f1,H,n);r.arc(U.x,U.y,K,f1,D+d2)}let X=F7(y1,D,H,n);if(r.lineTo(X.x,X.y),c1>0){let U=F7(y1,G1,H,n);r.arc(U.x,U.y,c1,D+d2,G1+Math.PI)}let q1=(D-c1/v+(F+Q/v))/2;if(r.arc(H,n,v,D-c1/v,q1,!0),r.arc(H,n,v,q1,F+Q/v,!0),Q>0){let U=F7(I1,s2,H,n);r.arc(U.x,U.y,Q,s2+Math.PI,F-d2)}let a1=F7(s1,F,H,n);if(r.lineTo(a1.x,a1.y),B>0){let U=F7(s1,o1,H,n);r.arc(U.x,U.y,B,F-d2,o1)}}else{r.moveTo(H,n);let O1=Math.cos(o1)*h+H,X=Math.sin(o1)*h+n;r.lineTo(O1,X);let q1=Math.cos(f1)*h+H,a1=Math.sin(f1)*h+n;r.lineTo(q1,a1)}r.closePath()}function au(r,t,e,i,C){let{fullCircles:a,startAngle:H,circumference:n}=t,s=t.endAngle;if(a){p8(r,t,e,i,s,C);for(let M=0;M<a;++M)r.fill();isNaN(n)||(s=H+(n%l2||l2))}return p8(r,t,e,i,s,C),r.fill(),s}function Hu(r,t,e,i,C){let{fullCircles:a,startAngle:H,circumference:n,options:s}=t,{borderWidth:M,borderJoinStyle:p,borderDash:h,borderDashOffset:v,borderRadius:g}=s,Z=s.borderAlign==="inner";if(!M)return;r.setLineDash(h||[]),r.lineDashOffset=v,Z?(r.lineWidth=M*2,r.lineJoin=p||"round"):(r.lineWidth=M,r.lineJoin=p||"bevel");let y=t.endAngle;if(a){p8(r,t,e,i,y,C);for(let k=0;k<a;++k)r.stroke();isNaN(n)||(y=H+(n%l2||l2))}Z&&iu(r,t,y),s.selfJoin&&y-H>=Y1&&g===0&&p!=="miter"&&ru(r,t,y),a||(p8(r,t,e,i,y,C),r.stroke())}var o3=class extends D5{constructor(e){super();W(this,"circumference");W(this,"endAngle");W(this,"fullCircles");W(this,"innerRadius");W(this,"outerRadius");W(this,"pixelMargin");W(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,C){let a=this.getProps(["x","y"],C),{angle:H,distance:n}=D6(a,{x:e,y:i}),{startAngle:s,endAngle:M,innerRadius:p,outerRadius:h,circumference:v}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],C),g=(this.options.spacing+this.options.borderWidth)/2,Z=B1(v,M-s),y=z4(H,s,M)&&s!==M,k=Z>=l2||y,F=U3(n,p+g,h+g);return k&&F}getCenterPoint(e){let{x:i,y:C,startAngle:a,endAngle:H,innerRadius:n,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:M,spacing:p}=this.options,h=(a+H)/2,v=(n+s+p+M)/2;return{x:i+Math.cos(h)*v,y:C+Math.sin(h)*v}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:C}=this,a=(i.offset||0)/4,H=(i.spacing||0)/2,n=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=C>l2?Math.floor(C/l2):0,C===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let s=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(s)*a,Math.sin(s)*a);let M=1-Math.sin(Math.min(Y1,C||0)),p=a*M;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,au(e,this,p,H,n),Hu(e,this,p,H,n),e.restore()}};W(o3,"id","arc"),W(o3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),W(o3,"defaultRoutes",{backgroundColor:"backgroundColor"}),W(o3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function fH(r,t,e=t){r.lineCap=B1(e.borderCapStyle,t.borderCapStyle),r.setLineDash(B1(e.borderDash,t.borderDash)),r.lineDashOffset=B1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=B1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=B1(e.borderWidth,t.borderWidth),r.strokeStyle=B1(e.borderColor,t.borderColor)}function Vu(r,t,e){r.lineTo(e.x,e.y)}function nu(r){return r.stepped?pe:r.tension||r.cubicInterpolationMode==="monotone"?ue:Vu}function AH(r,t,e={}){let i=r.length,{start:C=0,end:a=i-1}=e,{start:H,end:n}=t,s=Math.max(C,H),M=Math.min(a,n),p=C<H&&a<H||C>n&&a>n;return{count:i,start:s,loop:t.loop,ilen:M<s&&!p?i+M-s:M-s}}function su(r,t,e,i){let{points:C,options:a}=t,{count:H,start:n,loop:s,ilen:M}=AH(C,e,i),p=nu(a),{move:h=!0,reverse:v}=i||{},g,Z,y;for(g=0;g<=M;++g)Z=C[(n+(v?M-g:g))%H],!Z.skip&&(h?(r.moveTo(Z.x,Z.y),h=!1):p(r,y,Z,v,a.stepped),y=Z);return s&&(Z=C[(n+(v?M:0))%H],p(r,y,Z,v,a.stepped)),!!s}function Lu(r,t,e,i){let C=t.points,{count:a,start:H,ilen:n}=AH(C,e,i),{move:s=!0,reverse:M}=i||{},p=0,h=0,v,g,Z,y,k,F,D=K=>(H+(M?n-K:K))%a,B=()=>{y!==k&&(r.lineTo(p,k),r.lineTo(p,y),r.lineTo(p,F))};for(s&&(g=C[D(0)],r.moveTo(g.x,g.y)),v=0;v<=n;++v){if(g=C[D(v)],g.skip)continue;let K=g.x,Q=g.y,c1=K|0;c1===Z?(Q<y?y=Q:Q>k&&(k=Q),p=(h*p+K)/++h):(B(),r.lineTo(K,Q),Z=c1,h=0,y=k=Q),F=Q}B()}function Qe(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Lu:su}function lu(r){return r.stepped?ge:r.tension||r.cubicInterpolationMode==="monotone"?_e:_0}function Mu(r,t,e,i){let C=t._path;C||(C=t._path=new Path2D,t.path(C,e,i)&&C.closePath()),fH(r,t.options),r.stroke(C)}function cu(r,t,e,i){let{segments:C,options:a}=t,H=Qe(t);for(let n of C)fH(r,a,n.style),r.beginPath(),H(r,t,n,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var du=typeof Path2D=="function";function pu(r,t,e,i){du&&!t.options.segment?Mu(r,t,e,i):cu(r,t,e,i)}var L5=class extends D5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let C=i.spanGaps?this._loop:this._fullLoop;Ae(this._points,i,t,C,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=we(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,C=t[e],a=this.points,H=e8(this,{property:e,start:C,end:C});if(!H.length)return;let n=[],s=lu(i),M,p;for(M=0,p=H.length;M<p;++M){let{start:h,end:v}=H[M],g=a[h],Z=a[v];if(g===Z){n.push(g);continue}let y=Math.abs((C-g[e])/(Z[e]-g[e])),k=s(g,Z,y,i.stepped);k[e]=t[e],n.push(k)}return n.length===1?n[0]:n}pathSegment(t,e,i){return Qe(this)(t,this,e,i)}path(t,e,i){let C=this.segments,a=Qe(this),H=this._loop;e=e||0,i=i||this.points.length-e;for(let n of C)H&=a(t,this,n,{start:e,end:e+i-1});return!!H}draw(t,e,i,C){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),pu(t,this,i,C),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};W(L5,"id","line"),W(L5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),W(L5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),W(L5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Na(r,t,e,i){let C=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<C.radius+C.hitRadius}var B5=class extends D5{constructor(e){super();W(this,"parsed");W(this,"skip");W(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,C){let a=this.options,{x:H,y:n}=this.getProps(["x","y"],C);return Math.pow(e-H,2)+Math.pow(i-n,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return Na(this,e,"x",i)}inYRange(e,i){return Na(this,e,"y",i)}getCenterPoint(e){let{x:i,y:C}=this.getProps(["x","y"],e);return{x:i,y:C}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let C=i&&e.borderWidth||0;return(i+C)*2}draw(e,i){let C=this.options;this.skip||C.radius<.1||!P5(this,i,this.size(C)/2)||(e.strokeStyle=C.borderColor,e.lineWidth=C.borderWidth,e.fillStyle=C.backgroundColor,U4(e,C,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};W(B5,"id","point"),W(B5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),W(B5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function vH(r,t){let{x:e,y:i,base:C,width:a,height:H}=r.getProps(["x","y","base","width","height"],t),n,s,M,p,h;return r.horizontal?(h=H/2,n=Math.min(e,C),s=Math.max(e,C),M=i-h,p=i+h):(h=a/2,n=e-h,s=e+h,M=Math.min(i,C),p=Math.max(i,C)),{left:n,top:M,right:s,bottom:p}}function H3(r,t,e,i){return r?0:S2(t,e,i)}function uu(r,t,e){let i=r.options.borderWidth,C=r.borderSkipped,a=Y6(i);return{t:H3(C.top,a.top,0,e),r:H3(C.right,a.right,0,t),b:H3(C.bottom,a.bottom,0,e),l:H3(C.left,a.left,0,t)}}function mu(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),C=r.options.borderRadius,a=C3(C),H=Math.min(t,e),n=r.borderSkipped,s=i||Z1(C);return{topLeft:H3(!s||n.top||n.left,a.topLeft,0,H),topRight:H3(!s||n.top||n.right,a.topRight,0,H),bottomLeft:H3(!s||n.bottom||n.left,a.bottomLeft,0,H),bottomRight:H3(!s||n.bottom||n.right,a.bottomRight,0,H)}}function hu(r){let t=vH(r),e=t.right-t.left,i=t.bottom-t.top,C=uu(r,e/2,i/2),a=mu(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+C.l,y:t.top+C.t,w:e-C.l-C.r,h:i-C.t-C.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(C.t,C.l)),topRight:Math.max(0,a.topRight-Math.max(C.t,C.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(C.b,C.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(C.b,C.r))}}}}function Ee(r,t,e,i){let C=t===null,a=e===null,n=r&&!(C&&a)&&vH(r,i);return n&&(C||U3(t,n.left,n.right))&&(a||U3(e,n.top,n.bottom))}function fu(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function Au(r,t){r.rect(t.x,t.y,t.w,t.h)}function Be(r,t,e={}){let i=r.x!==e.x?-t:0,C=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,H=(r.y+r.h!==e.y+e.h?t:0)-C;return{x:r.x+i,y:r.y+C,w:r.w+a,h:r.h+H,radius:r.radius}}var R5=class extends D5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:C}}=this,{inner:a,outer:H}=hu(this),n=fu(H.radius)?P7:Au;t.save(),(H.w!==a.w||H.h!==a.h)&&(t.beginPath(),n(t,Be(H,e,a)),t.clip(),n(t,Be(a,-e,H)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),n(t,Be(a,e)),t.fillStyle=C,t.fill(),t.restore()}inRange(t,e,i){return Ee(this,t,e,i)}inXRange(t,e){return Ee(this,t,null,e)}inYRange(t,e){return Ee(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:C,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+C)/2:e,y:a?i:(i+C)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};W(R5,"id","bar"),W(R5,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),W(R5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function vu(r,t,e){let i=r.segments,C=r.points,a=t.points,H=[];for(let n of i){let{start:s,end:M}=n;M=m8(s,M,C);let p=Ke(e,C[s],C[M],n.loop);if(!t.segments){H.push({source:n,target:p,start:C[s],end:C[M]});continue}let h=e8(t,p);for(let v of h){let g=Ke(e,a[v.start],a[v.end],v.loop),Z=t8(n,C,g);for(let y of Z)H.push({source:y,target:v,start:{[e]:Wa(p,g,"start",Math.max)},end:{[e]:Wa(p,g,"end",Math.min)}})}}return H}function Ke(r,t,e,i){if(i)return;let C=t[r],a=e[r];return r==="angle"&&(C=_2(C),a=_2(a)),{property:r,start:C,end:a}}function xu(r,t){let{x:e=null,y:i=null}=r||{},C=t.points,a=[];return t.segments.forEach(({start:H,end:n})=>{n=m8(H,n,C);let s=C[H],M=C[n];i!==null?(a.push({x:s.x,y:i}),a.push({x:M.x,y:i})):e!==null&&(a.push({x:e,y:s.y}),a.push({x:e,y:M.y}))}),a}function m8(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Wa(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function xH(r,t){let e=[],i=!1;return t2(r)?(i=!0,e=r):e=xu(r,t),e.length?new L5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Ua(r){return r&&r.fill!==!1}function gu(r,t,e){let C=r[t].fill,a=[t],H;if(!e)return C;for(;C!==!1&&a.indexOf(C)===-1;){if(!V2(C))return C;if(H=r[C],!H)return!1;if(H.visible)return C;a.push(C),C=H.fill}return!1}function _u(r,t,e){let i=Zu(r);if(Z1(i))return isNaN(i.value)?!1:i;let C=parseFloat(i);return V2(C)&&Math.floor(C)===C?Su(i[0],t,C,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Su(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function bu(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:Z1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function wu(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:Z1(r)?i=r.value:i=t.getBaseValue(),i}function Zu(r){let t=r.options,e=t.fill,i=B1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function yu(r){let{scale:t,index:e,line:i}=r,C=[],a=i.segments,H=i.points,n=Ou(t,e);n.push(xH({x:null,y:t.bottom},i));for(let s=0;s<a.length;s++){let M=a[s];for(let p=M.start;p<=M.end;p++)ku(C,H[p],n)}return new L5({points:C,options:{}})}function Ou(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let C=0;C<i.length;C++){let a=i[C];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function ku(r,t,e){let i=[];for(let C=0;C<e.length;C++){let a=e[C],{first:H,last:n,point:s}=Tu(a,t,"x");if(!(!s||H&&n)){if(H)i.unshift(s);else if(r.push(s),!n)break}}r.push(...i)}function Tu(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let C=i[e],a=r.segments,H=r.points,n=!1,s=!1;for(let M=0;M<a.length;M++){let p=a[M],h=H[p.start][e],v=H[p.end][e];if(U3(C,h,v)){n=C===h,s=C===v;break}}return{first:n,last:s,point:i}}var u8=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:C,y:a,radius:H}=this;return e=e||{start:0,end:l2},t.arc(C,a,H,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:C}=this,a=t.angle;return{x:e+Math.cos(a)*C,y:i+Math.sin(a)*C,angle:a}}};function Pu(r){let{chart:t,fill:e,line:i}=r;if(V2(e))return Fu(t,e);if(e==="stack")return yu(r);if(e==="shape")return!0;let C=Eu(r);return C instanceof u8?C:xH(C,i)}function Fu(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function Eu(r){return(r.scale||{}).getPointPositionForValue?Ru(r):Bu(r)}function Bu(r){let{scale:t={},fill:e}=r,i=bu(e,t);if(V2(i)){let C=t.isHorizontal();return{x:C?i:null,y:C?null:i}}return null}function Ru(r){let{scale:t,fill:e}=r,i=t.options,C=t.getLabels().length,a=i.reverse?t.max:t.min,H=wu(e,t,a),n=[];if(i.grid.circular){let s=t.getPointPositionForValue(0,a);return new u8({x:s.x,y:s.y,radius:t.getDistanceFromCenterForValue(H)})}for(let s=0;s<C;++s)n.push(t.getPointPositionForValue(s,H));return n}function Re(r,t,e){let i=Pu(t),{chart:C,index:a,line:H,scale:n,axis:s}=t,M=H.options,p=M.fill,h=M.backgroundColor,{above:v=h,below:g=h}=p||{},Z=C.getDatasetMeta(a),y=r8(C,Z);i&&H.points.length&&(j4(r,e),Du(r,{line:H,target:i,above:v,below:g,area:e,scale:n,axis:s,clip:y}),G4(r))}function Du(r,t){let{line:e,target:i,above:C,below:a,area:H,scale:n,clip:s}=t,M=e._loop?"angle":t.axis;r.save();let p=a;a!==C&&(M==="x"?(ja(r,i,H.top),De(r,{line:e,target:i,color:C,scale:n,property:M,clip:s}),r.restore(),r.save(),ja(r,i,H.bottom)):M==="y"&&(Ga(r,i,H.left),De(r,{line:e,target:i,color:a,scale:n,property:M,clip:s}),r.restore(),r.save(),Ga(r,i,H.right),p=C)),De(r,{line:e,target:i,color:p,scale:n,property:M,clip:s}),r.restore()}function ja(r,t,e){let{segments:i,points:C}=t,a=!0,H=!1;r.beginPath();for(let n of i){let{start:s,end:M}=n,p=C[s],h=C[m8(s,M,C)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(p.x,e),r.lineTo(p.x,p.y)),H=!!t.pathSegment(r,n,{move:H}),H?r.closePath():r.lineTo(h.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function Ga(r,t,e){let{segments:i,points:C}=t,a=!0,H=!1;r.beginPath();for(let n of i){let{start:s,end:M}=n,p=C[s],h=C[m8(s,M,C)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(e,p.y),r.lineTo(p.x,p.y)),H=!!t.pathSegment(r,n,{move:H}),H?r.closePath():r.lineTo(e,h.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function De(r,t){let{line:e,target:i,property:C,color:a,scale:H,clip:n}=t,s=vu(e,i,C);for(let{source:M,target:p,start:h,end:v}of s){let{style:{backgroundColor:g=a}={}}=M,Z=i!==!0;r.save(),r.fillStyle=g,$u(r,H,n,Z&&Ke(C,h,v)),r.beginPath();let y=!!e.pathSegment(r,M),k;if(Z){y?r.closePath():qa(r,i,v,C);let F=!!i.pathSegment(r,p,{move:y,reverse:!0});k=y&&F,k||qa(r,i,h,C)}r.closePath(),r.fill(k?"evenodd":"nonzero"),r.restore()}}function $u(r,t,e,i){let C=t.chart.chartArea,{property:a,start:H,end:n}=i||{};if(a==="x"||a==="y"){let s,M,p,h;a==="x"?(s=H,M=C.top,p=n,h=C.bottom):(s=C.left,M=H,p=C.right,h=n),r.beginPath(),e&&(s=Math.max(s,e.left),p=Math.min(p,e.right),M=Math.max(M,e.top),h=Math.min(h,e.bottom)),r.rect(s,M,p-s,h-M),r.clip()}}function qa(r,t,e,i){let C=t.interpolate(e,i);C&&r.lineTo(C.x,C.y)}var gH={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,C=[],a,H,n,s;for(H=0;H<i;++H)a=r.getDatasetMeta(H),n=a.dataset,s=null,n&&n.options&&n instanceof L5&&(s={visible:r.isDatasetVisible(H),index:H,fill:_u(n,H,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:n}),a.$filler=s,C.push(s);for(H=0;H<i;++H)s=C[H],!(!s||s.fill===!1)&&(s.fill=gu(C,H,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",C=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let H=C.length-1;H>=0;--H){let n=C[H].$filler;n&&(n.line.updateControlPoints(a,n.axis),i&&n.fill&&Re(r.ctx,n,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let C=i.length-1;C>=0;--C){let a=i[C].$filler;Ua(a)&&Re(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!Ua(i)||e.drawTime!=="beforeDatasetDraw"||Re(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var o9={average(r){if(!r.length)return!1;let t,e,i=new Set,C=0,a=0;for(t=0,e=r.length;t<e;++t){let n=r[t].element;if(n&&n.hasValue()){let s=n.tooltipPosition();i.add(s.x),C+=s.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((n,s)=>n+s)/i.size,y:C/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,C=Number.POSITIVE_INFINITY,a,H,n;for(a=0,H=r.length;a<H;++a){let s=r[a].element;if(s&&s.hasValue()){let M=s.getCenterPoint(),p=R4(t,M);p<C&&(C=p,n=s)}}if(n){let s=n.tooltipPosition();e=s.x,i=s.y}return{x:e,y:i}}};function C0(r,t){return t&&(t2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function Z0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function zu(r,t){let{element:e,datasetIndex:i,index:C}=t,a=r.getDatasetMeta(i).controller,{label:H,value:n}=a.getLabelAndValue(C);return{chart:r,label:H,parsed:a.getParsed(C),raw:r.data.datasets[i].data[C],formattedValue:n,dataset:a.getDataset(),dataIndex:C,datasetIndex:i,element:e}}function Ya(r,t){let e=r.chart.ctx,{body:i,footer:C,title:a}=r,{boxWidth:H,boxHeight:n}=t,s=k2(t.bodyFont),M=k2(t.titleFont),p=k2(t.footerFont),h=a.length,v=C.length,g=i.length,Z=B2(t.padding),y=Z.height,k=0,F=i.reduce((K,Q)=>K+Q.before.length+Q.lines.length+Q.after.length,0);if(F+=r.beforeBody.length+r.afterBody.length,h&&(y+=h*M.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),F){let K=t.displayColors?Math.max(n,s.lineHeight):s.lineHeight;y+=g*K+(F-g)*s.lineHeight+(F-1)*t.bodySpacing}v&&(y+=t.footerMarginTop+v*p.lineHeight+(v-1)*t.footerSpacing);let D=0,B=function(K){k=Math.max(k,e.measureText(K).width+D)};return e.save(),e.font=M.string,z1(r.title,B),e.font=s.string,z1(r.beforeBody.concat(r.afterBody),B),D=t.displayColors?H+2+t.boxPadding:0,z1(i,K=>{z1(K.before,B),z1(K.lines,B),z1(K.after,B)}),D=0,e.font=p.string,z1(r.footer,B),e.restore(),k+=Z.width,{width:k,height:y}}function Iu(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function Nu(r,t,e,i){let{x:C,width:a}=i,H=e.caretSize+e.caretPadding;if(r==="left"&&C+a+H>t.width||r==="right"&&C-a-H<0)return!0}function Wu(r,t,e,i){let{x:C,width:a}=e,{width:H,chartArea:{left:n,right:s}}=r,M="center";return i==="center"?M=C<=(n+s)/2?"left":"right":C<=a/2?M="left":C>=H-a/2&&(M="right"),Nu(M,r,t,e)&&(M="center"),M}function Qa(r,t,e){let i=e.yAlign||t.yAlign||Iu(r,e);return{xAlign:e.xAlign||t.xAlign||Wu(r,t,e,i),yAlign:i}}function Uu(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function ju(r,t,e){let{y:i,height:C}=r;return t==="top"?i+=e:t==="bottom"?i-=C+e:i-=C/2,i}function Ka(r,t,e,i){let{caretSize:C,caretPadding:a,cornerRadius:H}=r,{xAlign:n,yAlign:s}=e,M=C+a,{topLeft:p,topRight:h,bottomLeft:v,bottomRight:g}=C3(H),Z=Uu(t,n),y=ju(t,s,M);return s==="center"?n==="left"?Z+=M:n==="right"&&(Z-=M):n==="left"?Z-=Math.max(p,v)+C:n==="right"&&(Z+=Math.max(h,g)+C),{x:S2(Z,0,i.width-t.width),y:S2(y,0,i.height-t.height)}}function H8(r,t,e){let i=B2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function Xa(r){return C0([],Z0(r))}function Gu(r,t,e){return i0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Ja(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var _H={beforeTitle:F5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:F5,beforeBody:F5,beforeLabel:F5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return b1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:F5,afterBody:F5,beforeFooter:F5,footer:F5,afterFooter:F5};function t5(r,t,e,i){let C=r[t].call(e,i);return typeof C>"u"?_H[t].call(e,i):C}var a9=class extends D5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),C=i.enabled&&e.options.animation&&i.animations,a=new M8(this.chart,C);return C._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Gu(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,C=t5(i,"beforeTitle",this,t),a=t5(i,"title",this,t),H=t5(i,"afterTitle",this,t),n=[];return n=C0(n,Z0(C)),n=C0(n,Z0(a)),n=C0(n,Z0(H)),n}getBeforeBody(t,e){return Xa(t5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,C=[];return z1(t,a=>{let H={before:[],lines:[],after:[]},n=Ja(i,a);C0(H.before,Z0(t5(n,"beforeLabel",this,a))),C0(H.lines,t5(n,"label",this,a)),C0(H.after,Z0(t5(n,"afterLabel",this,a))),C.push(H)}),C}getAfterBody(t,e){return Xa(t5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,C=t5(i,"beforeFooter",this,t),a=t5(i,"footer",this,t),H=t5(i,"afterFooter",this,t),n=[];return n=C0(n,Z0(C)),n=C0(n,Z0(a)),n=C0(n,Z0(H)),n}_createItems(t){let e=this._active,i=this.chart.data,C=[],a=[],H=[],n=[],s,M;for(s=0,M=e.length;s<M;++s)n.push(zu(this.chart,e[s]));return t.filter&&(n=n.filter((p,h,v)=>t.filter(p,h,v,i))),t.itemSort&&(n=n.sort((p,h)=>t.itemSort(p,h,i))),z1(n,p=>{let h=Ja(t.callbacks,p);C.push(t5(h,"labelColor",this,p)),a.push(t5(h,"labelPointStyle",this,p)),H.push(t5(h,"labelTextColor",this,p))}),this.labelColors=C,this.labelPointStyles=a,this.labelTextColors=H,this.dataPoints=n,n}update(t,e){let i=this.options.setContext(this.getContext()),C=this._active,a,H=[];if(!C.length)this.opacity!==0&&(a={opacity:0});else{let n=o9[i.position].call(this,C,this._eventPosition);H=this._createItems(i),this.title=this.getTitle(H,i),this.beforeBody=this.getBeforeBody(H,i),this.body=this.getBody(H,i),this.afterBody=this.getAfterBody(H,i),this.footer=this.getFooter(H,i);let s=this._size=Ya(this,i),M=Object.assign({},n,s),p=Qa(this.chart,i,M),h=Ka(i,M,p,this.chart);this.xAlign=p.xAlign,this.yAlign=p.yAlign,a={opacity:1,x:h.x,y:h.y,width:s.width,height:s.height,caretX:n.x,caretY:n.y}}this._tooltipItems=H,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,C){let a=this.getCaretPosition(t,i,C);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:C,yAlign:a}=this,{caretSize:H,cornerRadius:n}=i,{topLeft:s,topRight:M,bottomLeft:p,bottomRight:h}=C3(n),{x:v,y:g}=t,{width:Z,height:y}=e,k,F,D,B,K,Q;return a==="center"?(K=g+y/2,C==="left"?(k=v,F=k-H,B=K+H,Q=K-H):(k=v+Z,F=k+H,B=K-H,Q=K+H),D=k):(C==="left"?F=v+Math.max(s,p)+H:C==="right"?F=v+Z-Math.max(M,h)-H:F=this.caretX,a==="top"?(B=g,K=B-H,k=F-H,D=F+H):(B=g+y,K=B+H,k=F+H,D=F-H),Q=B),{x1:k,x2:F,x3:D,y1:B,y2:K,y3:Q}}drawTitle(t,e,i){let C=this.title,a=C.length,H,n,s;if(a){let M=X4(i.rtl,this.x,this.width);for(t.x=H8(this,i.titleAlign,i),e.textAlign=M.textAlign(i.titleAlign),e.textBaseline="middle",H=k2(i.titleFont),n=i.titleSpacing,e.fillStyle=i.titleColor,e.font=H.string,s=0;s<a;++s)e.fillText(C[s],M.x(t.x),t.y+H.lineHeight/2),t.y+=H.lineHeight+n,s+1===a&&(t.y+=i.titleMarginBottom-n)}}_drawColorBox(t,e,i,C,a){let H=this.labelColors[i],n=this.labelPointStyles[i],{boxHeight:s,boxWidth:M}=a,p=k2(a.bodyFont),h=H8(this,"left",a),v=C.x(h),g=s<p.lineHeight?(p.lineHeight-s)/2:0,Z=e.y+g;if(a.usePointStyle){let y={radius:Math.min(M,s)/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:1},k=C.leftForLtr(v,M)+M/2,F=Z+s/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,U4(t,y,k,F),t.strokeStyle=H.borderColor,t.fillStyle=H.backgroundColor,U4(t,y,k,F)}else{t.lineWidth=Z1(H.borderWidth)?Math.max(...Object.values(H.borderWidth)):H.borderWidth||1,t.strokeStyle=H.borderColor,t.setLineDash(H.borderDash||[]),t.lineDashOffset=H.borderDashOffset||0;let y=C.leftForLtr(v,M),k=C.leftForLtr(C.xPlus(v,1),M-2),F=C3(H.borderRadius);Object.values(F).some(D=>D!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,P7(t,{x:y,y:Z,w:M,h:s,radius:F}),t.fill(),t.stroke(),t.fillStyle=H.backgroundColor,t.beginPath(),P7(t,{x:k,y:Z+1,w:M-2,h:s-2,radius:F}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(y,Z,M,s),t.strokeRect(y,Z,M,s),t.fillStyle=H.backgroundColor,t.fillRect(k,Z+1,M-2,s-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:C}=this,{bodySpacing:a,bodyAlign:H,displayColors:n,boxHeight:s,boxWidth:M,boxPadding:p}=i,h=k2(i.bodyFont),v=h.lineHeight,g=0,Z=X4(i.rtl,this.x,this.width),y=function(r1){e.fillText(r1,Z.x(t.x+g),t.y+v/2),t.y+=v+a},k=Z.textAlign(H),F,D,B,K,Q,c1,s1;for(e.textAlign=H,e.textBaseline="middle",e.font=h.string,t.x=H8(this,k,i),e.fillStyle=i.bodyColor,z1(this.beforeBody,y),g=n&&k!=="right"?H==="center"?M/2+p:M+2+p:0,K=0,c1=C.length;K<c1;++K){for(F=C[K],D=this.labelTextColors[K],e.fillStyle=D,z1(F.before,y),B=F.lines,n&&B.length&&(this._drawColorBox(e,t,K,Z,i),v=Math.max(h.lineHeight,s)),Q=0,s1=B.length;Q<s1;++Q)y(B[Q]),v=h.lineHeight;z1(F.after,y)}g=0,v=h.lineHeight,z1(this.afterBody,y),t.y-=a}drawFooter(t,e,i){let C=this.footer,a=C.length,H,n;if(a){let s=X4(i.rtl,this.x,this.width);for(t.x=H8(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=s.textAlign(i.footerAlign),e.textBaseline="middle",H=k2(i.footerFont),e.fillStyle=i.footerColor,e.font=H.string,n=0;n<a;++n)e.fillText(C[n],s.x(t.x),t.y+H.lineHeight/2),t.y+=H.lineHeight+i.footerSpacing}}drawBackground(t,e,i,C){let{xAlign:a,yAlign:H}=this,{x:n,y:s}=t,{width:M,height:p}=i,{topLeft:h,topRight:v,bottomLeft:g,bottomRight:Z}=C3(C.cornerRadius);e.fillStyle=C.backgroundColor,e.strokeStyle=C.borderColor,e.lineWidth=C.borderWidth,e.beginPath(),e.moveTo(n+h,s),H==="top"&&this.drawCaret(t,e,i,C),e.lineTo(n+M-v,s),e.quadraticCurveTo(n+M,s,n+M,s+v),H==="center"&&a==="right"&&this.drawCaret(t,e,i,C),e.lineTo(n+M,s+p-Z),e.quadraticCurveTo(n+M,s+p,n+M-Z,s+p),H==="bottom"&&this.drawCaret(t,e,i,C),e.lineTo(n+g,s+p),e.quadraticCurveTo(n,s+p,n,s+p-g),H==="center"&&a==="left"&&this.drawCaret(t,e,i,C),e.lineTo(n,s+h),e.quadraticCurveTo(n,s,n+h,s),e.closePath(),e.fill(),C.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,C=i&&i.x,a=i&&i.y;if(C||a){let H=o9[t.position].call(this,this._active,this._eventPosition);if(!H)return;let n=this._size=Ya(this,t),s=Object.assign({},H,this._size),M=Qa(e,t,s),p=Ka(t,s,M,e);(C._to!==p.x||a._to!==p.y)&&(this.xAlign=M.xAlign,this.yAlign=M.yAlign,this.width=n.width,this.height=n.height,this.caretX=H.x,this.caretY=H.y,this._resolveAnimations().update(this,p))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let C={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let H=B2(e.padding),n=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&n&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,C,e),Se(t,e.textDirection),a.y+=H.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),be(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,C=t.map(({datasetIndex:n,index:s})=>{let M=this.chart.getDatasetMeta(n);if(!M)throw new Error("Cannot find a dataset at index "+n);return{datasetIndex:n,element:M.data[s],index:s}}),a=!k7(i,C),H=this._positionChanged(C,e);(a||H)&&(this._active=C,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let C=this.options,a=this._active||[],H=this._getActiveElements(t,a,e,i),n=this._positionChanged(H,t),s=e||!k7(H,a)||n;return s&&(this._active=H,(C.enabled||C.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,i,C){let a=this.options;if(t.type==="mouseout")return[];if(!C)return e.filter(n=>this.chart.data.datasets[n.datasetIndex]&&this.chart.getDatasetMeta(n.datasetIndex).controller.getParsed(n.index)!==void 0);let H=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&H.reverse(),H}_positionChanged(t,e){let{caretX:i,caretY:C,options:a}=this,H=o9[a.position].call(this,t,e);return H!==!1&&(i!==H.x||C!==H.y)}};W(a9,"positioners",o9);var SH={id:"tooltip",_element:a9,positioners:o9,afterInit(r,t,e){e&&(r.tooltip=new a9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_H},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var qu=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Yu(r,t,e,i){let C=r.indexOf(t);if(C===-1)return qu(r,t,e,i);let a=r.lastIndexOf(t);return C!==a?e:C}var Qu=(r,t)=>r===null?null:S2(Math.round(r),0,t);function tH(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var R7=class extends q3{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:C,label:a}of e)i[C]===a&&i.splice(C,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(b1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:Yu(i,t,B1(e,t),this._addedLabels),Qu(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:C}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(C=this.getLabels().length-1)),this.min=i,this.max=C}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,C=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let H=t;H<=e;H++)C.push({value:H});return C}getLabelForValue(t){return tH.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};W(R7,"id","category"),W(R7,"defaults",{ticks:{callback:tH}});function Ku(r,t){let e=[],{bounds:C,step:a,min:H,max:n,precision:s,count:M,maxTicks:p,maxDigits:h,includeBounds:v}=r,g=a||1,Z=p-1,{min:y,max:k}=t,F=!b1(H),D=!b1(n),B=!b1(M),K=(k-y)/(h+1),Q=E6((k-y)/Z/g)*g,c1,s1,r1,o1;if(Q<1e-14&&!F&&!D)return[{value:y},{value:k}];o1=Math.ceil(k/Q)-Math.floor(y/Q),o1>Z&&(Q=E6(o1*Q/Z/g)*g),b1(s)||(c1=Math.pow(10,s),Q=Math.ceil(Q*c1)/c1),C==="ticks"?(s1=Math.floor(y/Q)*Q,r1=Math.ceil(k/Q)*Q):(s1=y,r1=k),F&&D&&a&&oe((n-H)/a,Q/1e3)?(o1=Math.round(Math.min((n-H)/Q,p)),Q=(n-H)/o1,s1=H,r1=n):B?(s1=F?H:s1,r1=D?n:r1,o1=M-1,Q=(r1-s1)/o1):(o1=(r1-s1)/Q,N3(o1,Math.round(o1),Q/1e3)?o1=Math.round(o1):o1=Math.ceil(o1));let f1=Math.max(R6(Q),R6(s1));c1=Math.pow(10,b1(s)?f1:s),s1=Math.round(s1*c1)/c1,r1=Math.round(r1*c1)/c1;let I1=0;for(F&&(v&&s1!==H?(e.push({value:H}),s1<H&&I1++,N3(Math.round((s1+I1*Q)*c1)/c1,H,eH(H,K,r))&&I1++):s1<H&&I1++);I1<o1;++I1){let y1=Math.round((s1+I1*Q)*c1)/c1;if(D&&y1>n)break;e.push({value:y1})}return D&&v&&r1!==n?e.length&&N3(e[e.length-1].value,n,eH(n,K,r))?e[e.length-1].value=n:e.push({value:n}):(!D||r1===n)&&e.push({value:r1}),e}function eH(r,t,{horizontal:e,minRotation:i}){let C=r0(i),a=(e?Math.sin(C):Math.cos(C))||.001,H=.75*t*(""+r).length;return Math.min(t/a,H)}var $7=class extends q3{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return b1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:C,max:a}=this,H=s=>C=e?C:s,n=s=>a=i?a:s;if(t){let s=g5(C),M=g5(a);s<0&&M<0?n(0):s>0&&M>0&&H(0)}if(C===a){let s=a===0?1:Math.abs(a*.05);n(a+s),t||H(C-s)}this.min=C,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,C;return i?(C=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,C>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${C} ticks. Limiting to 1000.`),C=1e3)):(C=this.computeTickLimit(),e=e||11),e&&(C=Math.min(e,C)),C}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let C={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,H=Ku(C,a);return t.bounds==="ticks"&&B6(H,this,"value"),t.reverse?(H.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),H}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let C=(i-e)/Math.max(t.length-1,1)/2;e-=C,i+=C}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return N4(t,this.chart.options.locale,this.options.ticks.format)}},V3=class extends $7{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?t:0,this.max=V2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=r0(this.options.ticks.minRotation),C=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/C))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};W(V3,"id","linear"),W(V3,"defaults",{ticks:{callback:W4.formatters.numeric}});var V9=r=>Math.floor(e0(r)),G3=(r,t)=>Math.pow(10,V9(r)+t);function rH(r){return r/Math.pow(10,V9(r))===1}function iH(r,t,e){let i=Math.pow(10,e),C=Math.floor(r/i);return Math.ceil(t/i)-C}function Xu(r,t){let e=t-r,i=V9(e);for(;iH(r,t,i)>10;)i++;for(;iH(r,t,i)<10;)i--;return Math.min(i,V9(r))}function Ju(r,{min:t,max:e}){t=G2(r.min,t);let i=[],C=V9(t),a=Xu(t,e),H=a<0?Math.pow(10,Math.abs(a)):1,n=Math.pow(10,a),s=C>a?Math.pow(10,C):0,M=Math.round((t-s)*H)/H,p=Math.floor((t-s)/n/10)*n*10,h=Math.floor((M-p)/Math.pow(10,a)),v=G2(r.min,Math.round((s+p+h*Math.pow(10,a))*H)/H);for(;v<e;)i.push({value:v,major:rH(v),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,H=a>=0?1:H),v=Math.round((s+p+h*Math.pow(10,a))*H)/H;let g=G2(r.max,v);return i.push({value:g,major:rH(g),significand:h}),i}var V8=class extends q3{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=$7.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return V2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?Math.max(0,t):null,this.max=V2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!V2(this._userMin)&&(this.min=t===G3(this.min,0)?G3(this.min,-1):G3(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,C=this.max,a=n=>i=t?i:n,H=n=>C=e?C:n;i===C&&(i<=0?(a(1),H(10)):(a(G3(i,-1)),H(G3(C,1)))),i<=0&&a(G3(C,-1)),C<=0&&H(G3(i,1)),this.min=i,this.max=C}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=Ju(e,this);return t.bounds==="ticks"&&B6(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":N4(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=e0(t),this._valueRange=e0(this.max)-e0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(e0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};W(V8,"id","logarithmic"),W(V8,"defaults",{ticks:{callback:W4.formatters.logarithmic,major:{enabled:!0}}});function Xe(r){let t=r.ticks;if(t.display&&r.display){let e=B2(t.backdropPadding);return B1(t.font&&t.font.size,n2.font.size)+e.height}return 0}function tm(r,t,e){return e=t2(e)?e:[e],{w:ce(r,t.string,e),h:e.length*t.lineHeight}}function CH(r,t,e,i,C){return r===i||r===C?{start:t-e/2,end:t+e/2}:r<i||r>C?{start:t-e,end:t}:{start:t,end:t+e}}function em(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],C=[],a=r._pointLabels.length,H=r.options.pointLabels,n=H.centerPointLabels?Y1/a:0;for(let s=0;s<a;s++){let M=H.setContext(r.getPointLabelContext(s));C[s]=M.padding;let p=r.getPointPosition(s,r.drawingArea+C[s],n),h=k2(M.font),v=tm(r.ctx,h,r._pointLabels[s]);i[s]=v;let g=_2(r.getIndexAngle(s)+n),Z=Math.round($4(g)),y=CH(Z,p.x,v.w,0,180),k=CH(Z,p.y,v.h,90,270);rm(e,t,g,y,k)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=om(r,i,C)}function rm(r,t,e,i,C){let a=Math.abs(Math.sin(e)),H=Math.abs(Math.cos(e)),n=0,s=0;i.start<t.l?(n=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-n)):i.end>t.r&&(n=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+n)),C.start<t.t?(s=(t.t-C.start)/H,r.t=Math.min(r.t,t.t-s)):C.end>t.b&&(s=(C.end-t.b)/H,r.b=Math.max(r.b,t.b+s))}function im(r,t,e){let i=r.drawingArea,{extra:C,additionalAngle:a,padding:H,size:n}=e,s=r.getPointPosition(t,i+C+H,a),M=Math.round($4(_2(s.angle+d2))),p=Vm(s.y,n.h,M),h=am(M),v=Hm(s.x,n.w,h);return{visible:!0,x:s.x,y:p,textAlign:h,left:v,top:p,right:v+n.w,bottom:p+n.h}}function Cm(r,t){if(!t)return!0;let{left:e,top:i,right:C,bottom:a}=r;return!(P5({x:e,y:i},t)||P5({x:e,y:a},t)||P5({x:C,y:i},t)||P5({x:C,y:a},t))}function om(r,t,e){let i=[],C=r._pointLabels.length,a=r.options,{centerPointLabels:H,display:n}=a.pointLabels,s={extra:Xe(a)/2,additionalAngle:H?Y1/C:0},M;for(let p=0;p<C;p++){s.padding=e[p],s.size=t[p];let h=im(r,p,s);i.push(h),n==="auto"&&(h.visible=Cm(h,M),h.visible&&(M=h))}return i}function am(r){return r===0||r===180?"center":r<180?"left":"right"}function Hm(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function Vm(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function nm(r,t,e){let{left:i,top:C,right:a,bottom:H}=e,{backdropColor:n}=t;if(!b1(n)){let s=C3(t.borderRadius),M=B2(t.backdropPadding);r.fillStyle=n;let p=i-M.left,h=C-M.top,v=a-i+M.width,g=H-C+M.height;Object.values(s).some(Z=>Z!==0)?(r.beginPath(),P7(r,{x:p,y:h,w:v,h:g,radius:s}),r.fill()):r.fillRect(p,h,v,g)}}function sm(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let C=t-1;C>=0;C--){let a=r._pointLabelItems[C];if(!a.visible)continue;let H=i.setContext(r.getPointLabelContext(C));nm(e,H,a);let n=k2(H.font),{x:s,y:M,textAlign:p}=a;T7(e,r._pointLabels[C],s,M+n.lineHeight/2,n,{color:H.color,textAlign:p,textBaseline:"middle"})}}function bH(r,t,e,i){let{ctx:C}=r;if(e)C.arc(r.xCenter,r.yCenter,t,0,l2);else{let a=r.getPointPosition(0,t);C.moveTo(a.x,a.y);for(let H=1;H<i;H++)a=r.getPointPosition(H,t),C.lineTo(a.x,a.y)}}function Lm(r,t,e,i,C){let a=r.ctx,H=t.circular,{color:n,lineWidth:s}=t;!H&&!i||!n||!s||e<0||(a.save(),a.strokeStyle=n,a.lineWidth=s,a.setLineDash(C.dash||[]),a.lineDashOffset=C.dashOffset,a.beginPath(),bH(r,e,H,i),a.closePath(),a.stroke(),a.restore())}function lm(r,t,e){return i0(r,{label:e,index:t,type:"pointLabel"})}var E7=class extends $7{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=B2(Xe(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=V2(t)&&!isNaN(t)?t:0,this.max=V2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Xe(this.options))}generateTickLabels(t){$7.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let C=X1(this.options.pointLabels.callback,[e,i],this);return C||C===0?C:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?em(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,C){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-C)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,C))}getIndexAngle(t){let e=l2/(this._pointLabels.length||1),i=this.options.startAngle||0;return _2(t*e+r0(i))}getDistanceFromCenterForValue(t){if(b1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(b1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return lm(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let C=this.getIndexAngle(t)-d2+i;return{x:Math.cos(C)*e+this.xCenter,y:Math.sin(C)*e+this.yCenter,angle:C}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:C,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:C,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),bH(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:C,border:a}=e,H=this._pointLabels.length,n,s,M;if(e.pointLabels.display&&sm(this,H),C.display&&this.ticks.forEach((p,h)=>{if(h!==0||h===0&&this.min<0){s=this.getDistanceFromCenterForValue(p.value);let v=this.getContext(h),g=C.setContext(v),Z=a.setContext(v);Lm(this,g,s,H,Z)}}),i.display){for(t.save(),n=H-1;n>=0;n--){let p=i.setContext(this.getPointLabelContext(n)),{color:h,lineWidth:v}=p;!v||!h||(t.lineWidth=v,t.strokeStyle=h,t.setLineDash(p.borderDash),t.lineDashOffset=p.borderDashOffset,s=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),M=this.getPointPosition(n,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(M.x,M.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let C=this.getIndexAngle(0),a,H;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(C),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((n,s)=>{if(s===0&&this.min>=0&&!e.reverse)return;let M=i.setContext(this.getContext(s)),p=k2(M.font);if(a=this.getDistanceFromCenterForValue(this.ticks[s].value),M.showLabelBackdrop){t.font=p.string,H=t.measureText(n.label).width,t.fillStyle=M.backdropColor;let h=B2(M.backdropPadding);t.fillRect(-H/2-h.left,-a-p.size/2-h.top,H+h.width,p.size+h.height)}T7(t,n.label,0,-a,p,{color:M.color,strokeColor:M.textStrokeColor,strokeWidth:M.textStrokeWidth})}),t.restore()}drawTitle(){}};W(E7,"id","radialLinear"),W(E7,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:W4.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),W(E7,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),W(E7,"descriptors",{angleLines:{_fallback:"grid"}});var h8={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},e5=Object.keys(h8);function oH(r,t){return r-t}function aH(r,t){if(b1(t))return null;let e=r._adapter,{parser:i,round:C,isoWeekday:a}=r._parseOpts,H=t;return typeof i=="function"&&(H=i(H)),V2(H)||(H=typeof i=="string"?e.parse(H,i):e.parse(H)),H===null?null:(C&&(H=C==="week"&&(W3(a)||a===!0)?e.startOf(H,"isoWeek",a):e.startOf(H,C)),+H)}function HH(r,t,e,i){let C=e5.length;for(let a=e5.indexOf(r);a<C-1;++a){let H=h8[e5[a]],n=H.steps?H.steps:Number.MAX_SAFE_INTEGER;if(H.common&&Math.ceil((e-t)/(n*H.size))<=i)return e5[a]}return e5[C-1]}function Mm(r,t,e,i,C){for(let a=e5.length-1;a>=e5.indexOf(e);a--){let H=e5[a];if(h8[H].common&&r._adapter.diff(C,i,H)>=t-1)return H}return e5[e?e5.indexOf(e):0]}function cm(r){for(let t=e5.indexOf(r)+1,e=e5.length;t<e;++t)if(h8[e5[t]].common)return e5[t]}function VH(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:C}=I4(e,t),a=e[i]>=t?e[i]:e[C];r[a]=!0}}function dm(r,t,e,i){let C=r._adapter,a=+C.startOf(t[0].value,i),H=t[t.length-1].value,n,s;for(n=a;n<=H;n=+C.add(n,1,i))s=e[n],s>=0&&(t[s].major=!0);return t}function nH(r,t,e){let i=[],C={},a=t.length,H,n;for(H=0;H<a;++H)n=t[H],C[n]=H,i.push({value:n,major:!1});return a===0||!e?i:dm(r,i,C,e)}var D7=class extends q3{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),C=this._adapter=new Xd._date(t.adapters.date);C.init(e),z3(i.displayFormats,C.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:aH(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:C,max:a,minDefined:H,maxDefined:n}=this.getUserBounds();function s(M){!H&&!isNaN(M.min)&&(C=Math.min(C,M.min)),!n&&!isNaN(M.max)&&(a=Math.max(a,M.max))}(!H||!n)&&(s(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&s(this.getMinMax(!1))),C=V2(C)&&!isNaN(C)?C:+e.startOf(Date.now(),i),a=V2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(C,a-1),this.max=Math.max(C+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,C=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&C.length&&(this.min=this._userMin||C[0],this.max=this._userMax||C[C.length-1]);let a=this.min,H=this.max,n=Ve(C,a,H);return this._unit=e.unit||(i.autoSkip?HH(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Mm(this,n.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:cm(this._unit),this.initOffsets(C),t.reverse&&n.reverse(),nH(this,n,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,C,a;this.options.offset&&t.length&&(C=this.getDecimalForValue(t[0]),t.length===1?e=1-C:e=(this.getDecimalForValue(t[1])-C)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let H=t.length<3?.5:.25;e=S2(e,0,H),i=S2(i,0,H),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,C=this.options,a=C.time,H=a.unit||HH(a.minUnit,e,i,this._getLabelCapacity(e)),n=B1(C.ticks.stepSize,1),s=H==="week"?a.isoWeekday:!1,M=W3(s)||s===!0,p={},h=e,v,g;if(M&&(h=+t.startOf(h,"isoWeek",s)),h=+t.startOf(h,M?"day":H),t.diff(i,e,H)>1e5*n)throw new Error(e+" and "+i+" are too far apart with stepSize of "+n+" "+H);let Z=C.ticks.source==="data"&&this.getDataTimestamps();for(v=h,g=0;v<i;v=+t.add(v,n,H),g++)VH(p,v,Z);return(v===i||C.bounds==="ticks"||g===1)&&VH(p,v,Z),Object.keys(p).sort(oH).map(y=>+y)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let C=this.options.time.displayFormats,a=this._unit,H=e||C[a];return this._adapter.format(t,H)}_tickFormatFunction(t,e,i,C){let a=this.options,H=a.ticks.callback;if(H)return X1(H,[t,e,i],this);let n=a.time.displayFormats,s=this._unit,M=this._majorUnit,p=s&&n[s],h=M&&n[M],v=i[e],g=M&&h&&v&&v.major;return this._adapter.format(t,C||(g?h:p))}generateTickLabels(t){let e,i,C;for(e=0,i=t.length;e<i;++e)C=t[e],C.label=this._tickFormatFunction(C.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,C=r0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(C),H=Math.sin(C),n=this._resolveTickFontOptions(0).size;return{w:i*a+n*H,h:i*H+n*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,C=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,nH(this,[t],this._majorUnit),C),H=this._getLabelSize(a),n=Math.floor(this.isHorizontal()?this.width/H.w:this.height/H.h)-1;return n>0?n:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let C=this.getMatchingVisibleMetas();if(this._normalized&&C.length)return this._cache.data=C[0].controller.getAllParsedValues(this);for(e=0,i=C.length;e<i;++e)t=t.concat(C[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let C=this.getLabels();for(e=0,i=C.length;e<i;++e)t.push(aH(this,C[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return z6(t.sort(oH))}};W(D7,"id","time"),W(D7,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function n8(r,t,e){let i=0,C=r.length-1,a,H,n,s;e?(t>=r[i].pos&&t<=r[C].pos&&({lo:i,hi:C}=S0(r,"pos",t)),{pos:a,time:n}=r[i],{pos:H,time:s}=r[C]):(t>=r[i].time&&t<=r[C].time&&({lo:i,hi:C}=S0(r,"time",t)),{time:a,pos:n}=r[i],{time:H,pos:s}=r[C]);let M=H-a;return M?n+(s-n)*(t-a)/M:n}var s8=class extends D7{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=n8(e,this.min),this._tableRange=n8(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,C=[],a=[],H,n,s,M,p;for(H=0,n=t.length;H<n;++H)M=t[H],M>=e&&M<=i&&C.push(M);if(C.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(H=0,n=C.length;H<n;++H)p=C[H+1],s=C[H-1],M=C[H],Math.round((p+s)/2)!==M&&a.push({time:M,pos:H/(n-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((C,a)=>C-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(n8(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return n8(this._table,i*this._tableRange+this._minPos,!0)}};W(s8,"id","timeseries"),W(s8,"defaults",D7.defaults);var wH=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),L9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):b1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),C=i.length,a=r.font,H=0,n;for(r.font=e.string,n=0;n<C;++n)H=Math.max(r.measureText(i[n]).width,H);return r.font=a,{height:C*e.lineHeight,width:H}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],C,a,H,n;for(C=0,H=t.length;C<H;++C)n=t[C],a=e.indexOf(n),a===-1?i.push([n,1]):e.splice(a,1);for(C=0,H=e.length;C<H;++C)i.push([e[C],-1]);return i},rasterize:function(r){return Math.round(r*wH)/wH}};function Je(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var C=r.x-e,a=r.y-i,H=Math.sqrt(C*C+a*a);return{x:H?C/H:0,y:H?a/H:-1}}function pm(r,t,e,i,C){switch(C){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:C*=Math.PI/180,e=Math.cos(C),i=Math.sin(C);break}return{x:r,y:t,vx:e,vy:i}}var um=0,yH=1,OH=2,kH=4,TH=8;function f8(r,t,e){var i=um;return r<e.left?i|=yH:r>e.right&&(i|=OH),t<e.top?i|=TH:t>e.bottom&&(i|=kH),i}function mm(r,t){for(var e=r.x0,i=r.y0,C=r.x1,a=r.y1,H=f8(e,i,t),n=f8(C,a,t),s,M,p;!(!(H|n)||H&n);)s=H||n,s&TH?(M=e+(C-e)*(t.top-i)/(a-i),p=t.top):s&kH?(M=e+(C-e)*(t.bottom-i)/(a-i),p=t.bottom):s&OH?(p=i+(a-i)*(t.right-e)/(C-e),M=t.right):s&yH&&(p=i+(a-i)*(t.left-e)/(C-e),M=t.left),s===H?(e=M,i=p,H=f8(e,i,t)):(C=M,a=p,n=f8(C,a,t));return{x0:e,x1:C,y0:i,y1:a}}function A8(r,t){var e=t.anchor,i=r,C,a;return t.clamp&&(i=mm(i,t.area)),e==="start"?(C=i.x0,a=i.y0):e==="end"?(C=i.x1,a=i.y1):(C=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),pm(C,a,r.vx,r.vy,t.align)}var v8={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),C=Math.sin(e),a=r.innerRadius,H=r.outerRadius;return A8({x0:r.x+i*a,y0:r.y+C*a,x1:r.x+i*H,y1:r.y+C*H,vx:i,vy:C},t)},point:function(r,t){var e=Je(r,t.origin),i=e.x*r.options.radius,C=e.y*r.options.radius;return A8({x0:r.x-i,y0:r.y-C,x1:r.x+i,y1:r.y+C,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=Je(r,t.origin),i=r.x,C=r.y,a=0,H=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(C=Math.min(r.y,r.base),H=Math.abs(r.base-r.y)),A8({x0:i,y0:C+H,x1:i+a,y1:C,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=Je(r,t.origin);return A8({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},k0=L9.rasterize;function hm(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,C=r.size.width,a=-C/2,H=-i/2;return{frame:{x:a-e.left-t,y:H-e.top-t,w:C+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:H,w:C,h:i}}}function fm(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function Am(r){return r instanceof o3?v8.arc:r instanceof B5?v8.point:r instanceof R5?v8.bar:v8.fallback}function vm(r,t,e,i,C,a){var H=Math.PI/2;if(a){var n=Math.min(a,C/2,i/2),s=t+n,M=e+n,p=t+i-n,h=e+C-n;r.moveTo(t,M),s<p&&M<h?(r.arc(s,M,n,-Math.PI,-H),r.arc(p,M,n,-H,0),r.arc(p,h,n,0,H),r.arc(s,h,n,H,Math.PI)):s<p?(r.moveTo(s,e),r.arc(p,M,n,-H,H),r.arc(s,M,n,H,Math.PI+H)):M<h?(r.arc(s,M,n,-Math.PI,0),r.arc(s,h,n,0,Math.PI)):r.arc(s,M,n,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,C)}function xm(r,t,e){var i=e.backgroundColor,C=e.borderColor,a=e.borderWidth;!i&&(!C||!a)||(r.beginPath(),vm(r,k0(t.x)+a/2,k0(t.y)+a/2,k0(t.w)-a,k0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),C&&a&&(r.strokeStyle=C,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function gm(r,t,e){var i=e.lineHeight,C=r.w,a=r.x,H=r.y+i/2;return t==="center"?a+=C/2:(t==="end"||t==="right")&&(a+=C),{h:i,w:C,x:a,y:H}}function _m(r,t,e){var i=r.shadowBlur,C=e.stroked,a=k0(e.x),H=k0(e.y),n=k0(e.w);C&&r.strokeText(t,a,H,n),e.filled&&(i&&C&&(r.shadowBlur=0),r.fillText(t,a,H,n),i&&C&&(r.shadowBlur=i))}function Sm(r,t,e,i){var C=i.textAlign,a=i.color,H=!!a,n=i.font,s=t.length,M=i.textStrokeColor,p=i.textStrokeWidth,h=M&&p,v;if(!(!s||!H&&!h))for(e=gm(e,C,n),r.font=n.string,r.textAlign=C,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,H&&(r.fillStyle=a),h&&(r.lineJoin="round",r.lineWidth=p,r.strokeStyle=M),v=0,s=t.length;v<s;++v)_m(r,t[v],{stroked:h,filled:H,w:e.w,x:e.x,y:e.y+e.h*v})}var PH=function(r,t,e,i){var C=this;C._config=r,C._index=i,C._model=null,C._rects=null,C._ctx=t,C._el=e};s5(PH.prototype,{_modelize:function(r,t,e,i){var C=this,a=C._index,H=k2(J1([e.font,{}],i,a)),n=J1([e.color,n2.color],i,a);return{align:J1([e.align,"center"],i,a),anchor:J1([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:J1([e.backgroundColor,null],i,a),borderColor:J1([e.borderColor,null],i,a),borderRadius:J1([e.borderRadius,0],i,a),borderWidth:J1([e.borderWidth,0],i,a),clamp:J1([e.clamp,!1],i,a),clip:J1([e.clip,!1],i,a),color:n,display:r,font:H,lines:t,offset:J1([e.offset,4],i,a),opacity:J1([e.opacity,1],i,a),origin:fm(C._el,i),padding:B2(J1([e.padding,4],i,a)),positioner:Am(C._el),rotation:J1([e.rotation,0],i,a)*(Math.PI/180),size:L9.textSize(C._ctx,t,H),textAlign:J1([e.textAlign,"start"],i,a),textShadowBlur:J1([e.textShadowBlur,0],i,a),textShadowColor:J1([e.textShadowColor,n],i,a),textStrokeColor:J1([e.textStrokeColor,n],i,a),textStrokeWidth:J1([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,C=t._index,a=t._config,H,n,s,M=J1([a.display,!0],r,C);M&&(H=r.dataset.data[C],n=B1(X1(a.formatter,[H,r]),H),s=b1(n)?[]:L9.toTextLines(n),s.length&&(e=t._modelize(M,s,a,r),i=hm(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,C=e._model,a=e._rects,H;this.visible()&&(i.save(),C.clip&&(H=C.area,i.beginPath(),i.rect(H.left,H.top,H.right-H.left,H.bottom-H.top),i.clip()),i.globalAlpha=L9.bound(0,C.opacity,1),i.translate(k0(t.x),k0(t.y)),i.rotate(C.rotation),xm(i,a.frame,C),Sm(i,C.lines,a.text,C),i.restore())}});var bm=Number.MIN_SAFE_INTEGER||-9007199254740991,wm=Number.MAX_SAFE_INTEGER||9007199254740991;function s9(r,t,e){var i=Math.cos(e),C=Math.sin(e),a=t.x,H=t.y;return{x:a+i*(r.x-a)-C*(r.y-H),y:H+C*(r.x-a)+i*(r.y-H)}}function ZH(r,t){var e=wm,i=bm,C=t.origin,a,H,n,s,M;for(a=0;a<r.length;++a)H=r[a],n=H.x-C.x,s=H.y-C.y,M=t.vx*n+t.vy*s,e=Math.min(e,M),i=Math.max(i,M);return{min:e,max:i}}function x8(r,t){var e=t.x-r.x,i=t.y-r.y,C=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/C,vy:(t.y-r.y)/C,origin:r,ln:C}}var FH=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};s5(FH.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=s9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[x8(t[0],t[1]),x8(t[0],t[3])],C,a,H;for(this._rotation!==r._rotation&&i.push(x8(e[0],e[1]),x8(e[0],e[3])),C=0;C<i.length;++C)if(a=ZH(t,i[C]),H=ZH(e,i[C]),a.max<H.min||H.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[s9({x:t.x,y:t.y},i,e),s9({x:t.x+t.w,y:t.y},i,e),s9({x:t.x+t.w,y:t.y+t.h},i,e),s9({x:t.x,y:t.y+t.h},i,e)]}});function EH(r,t,e){var i=t.positioner(r,t),C=i.vx,a=i.vy;if(!C&&!a)return{x:i.x,y:i.y};var H=e.w,n=e.h,s=t.rotation,M=Math.abs(H/2*Math.cos(s))+Math.abs(n/2*Math.sin(s)),p=Math.abs(H/2*Math.sin(s))+Math.abs(n/2*Math.cos(s)),h=1/Math.max(Math.abs(C),Math.abs(a));return M*=C*h,p*=a*h,M+=t.offset*C,p+=t.offset*a,{x:i.x+M,y:i.y+p}}function Zm(r,t){var e,i,C,a;for(e=r.length-1;e>=0;--e)for(C=r[e].$layout,i=e-1;i>=0&&C._visible;--i)a=r[i].$layout,a._visible&&C._box.intersects(a._box)&&t(C,a);return r}function ym(r){var t,e,i,C,a,H,n;for(t=0,e=r.length;t<e;++t)i=r[t],C=i.$layout,C._visible&&(n=new Proxy(i._el,{get:(s,M)=>s.getProps([M],!0)[M]}),a=i.geometry(),H=EH(n,i.model(),a),C._box.update(H,a,i.rotation()));return Zm(r,function(s,M){var p=s._hidable,h=M._hidable;p&&h||h?M._visible=!1:p&&(s._visible=!1)})}var l9={prepare:function(r){var t=[],e,i,C,a,H;for(e=0,C=r.length;e<C;++e)for(i=0,a=r[e].length;i<a;++i)H=r[e][i],t.push(H),H.$layout={_box:new FH,_hidable:!1,_visible:!0,_set:e,_idx:H._index};return t.sort(function(n,s){var M=n.$layout,p=s.$layout;return M._idx===p._idx?p._set-M._set:p._idx-M._idx}),this.update(t),t},update:function(r){var t=!1,e,i,C,a,H;for(e=0,i=r.length;e<i;++e)C=r[e],a=C.model(),H=C.$layout,H._hidable=a&&a.display==="auto",H._visible=C.visible(),t|=H._hidable;t&&ym(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,C,a,H,n;for(e=0,i=t.length;e<i;++e)C=t[e],a=C.$layout,a._visible&&(H=C.geometry(),n=EH(C._el,C.model(),H),a._box.update(n,H,C.rotation()),C.draw(r,n))}},Om=function(r){if(b1(r))return null;var t=r,e,i,C;if(Z1(r))if(!b1(r.label))t=r.label;else if(!b1(r.r))t=r.r;else for(t="",e=Object.keys(r),C=0,i=e.length;C<i;++C)t+=(C!==0?", ":"")+e[C]+": "+r[e[C]];return""+t},km={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Om,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},r5="$datalabels",BH="$default";function Tm(r,t){var e=r.datalabels,i={},C=[],a,H;return e===!1?null:(e===!0&&(e={}),t=s5({},[t,e]),a=t.labels||{},H=Object.keys(a),delete t.labels,H.length?H.forEach(function(n){a[n]&&C.push(s5({},[t,a[n],{_key:n}]))}):C.push(t),i=C.reduce(function(n,s){return z1(s.listeners||{},function(M,p){n[p]=n[p]||{},n[p][s._key||BH]=M}),delete s.listeners,n},{}),{labels:C,listeners:i})}function tr(r,t,e,i){if(t){var C=e.$context,a=e.$groups,H;t[a._set]&&(H=t[a._set][a._key],H&&X1(H,[C,i])===!0&&(r[r5]._dirty=!0,e.update(C)))}}function Pm(r,t,e,i,C){var a,H;!e&&!i||(e?i?e!==i&&(H=a=!0):H=!0:a=!0,H&&tr(r,t.leave,e,C),a&&tr(r,t.enter,i,C))}function Fm(r,t){var e=r[r5],i=e._listeners,C,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=l9.lookup(e._labels,t);else if(t.type!=="mouseout")return;C=e._hovered,e._hovered=a,Pm(r,i,C,a,t)}}function Em(r,t){var e=r[r5],i=e._listeners.click,C=i&&l9.lookup(e._labels,t);C&&tr(r,i,C,t)}var RH={id:"datalabels",defaults:km,beforeInit:function(r){r[r5]={_actives:[]}},beforeUpdate:function(r){var t=r[r5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,C=r[r5],a=C._datasets[i]=[],H=r.isDatasetVisible(i),n=r.data.datasets[i],s=Tm(n,e),M=t.meta.data||[],p=r.ctx,h,v,g,Z,y,k,F,D;for(p.save(),h=0,g=M.length;h<g;++h)if(F=M[h],F[r5]=[],H&&F&&r.getDataVisibility(h)&&!F.skip)for(v=0,Z=s.labels.length;v<Z;++v)y=s.labels[v],k=y._key,D=new PH(y,p,F,h),D.$groups={_set:i,_key:k||BH},D.$context={active:!1,chart:r,dataIndex:h,dataset:n,datasetIndex:i},D.update(D.$context),F[r5].push(D),a.push(D);p.restore(),s5(C._listeners,s.listeners,{merger:function(B,K,Q){K[B]=K[B]||{},K[B][t.index]=Q[B],C._listened=!0}})},afterUpdate:function(r){r[r5]._labels=l9.prepare(r[r5]._datasets)},afterDatasetsDraw:function(r){l9.draw(r,r[r5]._labels)},beforeEvent:function(r,t){if(r[r5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Fm(r,e);break;case"click":Em(r,e);break}}},afterEvent:function(r){var t=r[r5],e=t._actives,i=t._actives=r.getActiveElements(),C=L9.arrayDiff(e,i),a,H,n,s,M,p,h;for(a=0,H=C.length;a<H;++a)if(M=C[a],M[1])for(h=M[0].element[r5]||[],n=0,s=h.length;n<s;++n)p=h[n],p.$context.active=M[1]===1,p.update(p.$context);(t._dirty||C.length)&&(l9.update(t._labels),r.render()),delete t._dirty}};function g8(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var a0=class extends p1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=x0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return O;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,C=e.secondaryLabel!==void 0;return S`
      <div
        class="wsfc-forecast-slot-time ${e.className||""} ${C?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${e.icon?S`<ha-icon .icon=${e.icon}></ha-icon>`:e.label}</span
        >
        ${C?S`<span class="wsfc-forecast-slot-time-secondary"
              >${e.secondaryLabel}</span
            >`:O}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${i}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let e=A6(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let M=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:Y0(this.hass,this.forecast.datetime),secondaryLabel:M}}if(this.forecastType==="daily")return e?{label:Y0(this.hass,this.forecast.datetime),secondaryLabel:Mo(this.hass,this.forecast.datetime)}:{label:Y0(this.hass,this.forecast.datetime)};let C=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):ho(C),H=C,n;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:M,sunset:p}=this.suntimesInfo,h=v=>{let g=new Date(C);return g.setHours(v.getHours(),v.getMinutes()),g.getTime()>=C.getTime()&&g.getTime()<=a.getTime()};h(M)?(n="wsfc-sunrise",H=M):h(p)&&(n="wsfc-sunset",H=p)}if(n){let M=po(this.hass,H);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:M.suffix?`${M.time} ${M.suffix}`:M.time,className:n,icon:n==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:M.time,secondaryLabel:e?M.suffix:void 0,className:n}}let s=co(this.hass,H);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:s.hour}:{label:s.hour,secondaryLabel:e?s.suffix:void 0}}};a0.styles=w1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,Y([t1({attribute:!1})],a0.prototype,"hass",2),Y([t1({attribute:!1})],a0.prototype,"forecast",2),Y([t1({attribute:!1})],a0.prototype,"forecastType",2),Y([t1({attribute:!1})],a0.prototype,"isTwiceDailyEntity",2),Y([t1({attribute:!1})],a0.prototype,"config",2),a0=Y([H2("wsfc-forecast-header-items")],a0);var n3=class extends p1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?S`
      <div class="dropdown">
        ${this.options.map(e=>this._renderOption(e))}
      </div>
    `:O}_renderOption(e){let i=this.value===e.value;return S`
      <div
        class="menu-item ${i?"selected":""}"
        @click=${C=>this._onSelected(C,e.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${e.icon}></ha-icon>
          <span>${e.label}</span>
        </div>
      </div>
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};n3.styles=w1`
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
  `,Y([t1({type:Boolean})],n3.prototype,"open",2),Y([t1({attribute:!1})],n3.prototype,"options",2),Y([t1({attribute:!1})],n3.prototype,"value",2),n3=Y([H2("wsfc-chart-attribute-selector")],n3);b2.register(y0,R5,O0,L5,B5,V3,R7,RH);var DH=16384,Bm=6,_8=12,Rm=10,Dm=10,$m=130,q2=class extends p1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=_o;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new w7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let C=E5(i,this._chart),a=this._chart.scales.x;if(!a)return;let H=a.getValueForPixel(C.x);if(H==null)return;let n=a.getLabelForValue(H),s=this._chart.data.labels?.indexOf(n)??-1;if(s===-1)return;let M=this.safeForecast[s];if(!M)return;let p={selectedForecast:M,action:e.detail.action};i2(this,"action",p)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let C=e.has("forecastType")||e.has("itemWidth");this.updateChartData(C)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return O;let i=e.length,C=Math.max(i-1,0),a=this._getChartFontSize(),H=$m+Math.max(0,a-_8),s={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${C} * var(--forecast-item-gap))`},M={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},p={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${H}px`};return S`
      <div
        class="${R3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
      >
        ${this.config.forecast?.show_attribute_selector?S`<span>${this._localizeSelectedAttribute()}</span>
              <div class="wsfc-forecast-chart-attribute-selector">
                <ha-button
                  class="wsfc-settings-toggle-button"
                  size="small"
                  appearance="filled"
                  variant="brand"
                  @click=${this._onSettingsToggle}
                >
                  <ha-icon
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":T5[this._selectedAttribute]}
                  ></ha-icon>
                </ha-button>
              </div>`:O}
        <wsfc-chart-attribute-selector
          .open=${this._settingsOpen}
          .options=${this._getChartOptions()}
          .value=${this._selectedAttribute}
          @selected=${this._onAttributesSelected}
          @closed=${this._onSettingsClosed}
        ></wsfc-chart-attribute-selector>
      </div>
      <div
        class="${R3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${j2(s)}
          .actionHandler=${X5({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${j2(M)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${j2(p)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${e.map((h,v)=>S`
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
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new b2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),C=this._chart.config.type,a=i.type;if(C!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let C=parseFloat(i);if(!isNaN(C))return C}return _8}_getBarLabelOffset(){return-22-(this._getChartFontSize()-_8)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),C=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),H=a+Dm,n=Rm+(a-_8),s={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:H,bottom:n,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:C,dash:[4,4]},grid:{offset:!0,display:!0,color:C,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,s);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,s);default:return this._getDefaultWeatherConfig(e,i,s)}}_getDefaultWeatherConfig(e,i,C){let{minTemp:a,maxTemp:H}=this.computeScaleLimits(e),n=i.getPropertyValue("--wfc-chart-temp-high-label-color"),s=i.getPropertyValue("--wfc-chart-temp-low-label-color"),M=i.getPropertyValue("--wfc-chart-precipitation-label-color"),p=i.getPropertyValue("--wfc-precipitation-bar-color"),h=S7(n5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),v=this.getTemperatureLineStyle(i,"temperature"),g=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(Z=>Z.datetime),datasets:[{data:e.map(Z=>Z.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:n,formatter:Z=>Z!=null?`${J5(this.hass,this.weatherEntity,Z,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...v},{data:e.map(Z=>Z.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:s,formatter:Z=>Z!=null?`${J5(this.hass,this.weatherEntity,Z,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...g},{type:"bar",data:e.map(Z=>Z.precipitation&&Z.precipitation!==0?Z.precipitation:null),backgroundColor:p,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:M,formatter:Z=>yo(Z,n5(this.hass,this.weatherEntity,"precipitation"))}}]},options:k3({},C,{scales:{yTemp:{type:"linear",display:!1,min:a,max:H,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:h,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,C){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(H=>H.datetime),datasets:[{type:"bar",data:e.map(H=>H.uv_index!=null?Math.round(H.uv_index):0),backgroundColor:e.map(H=>i.getPropertyValue(g8(H.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:k3({},C,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,C){let a=this._selectedAttribute,H=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",n=i.getPropertyValue(H)||i.getPropertyValue("--wfc-chart-default-line-color"),s=i.getPropertyValue("--wfc-chart-label-color"),M=n5(this.hass,this.weatherEntity,a),p=e.map(k=>k[a]??0),h=Math.max(...p),v=Math.min(...p),g=h-v||1,Z=h+g*.2,y=v-g*.1;return{type:"line",data:{labels:e.map(k=>k.datetime),datasets:[{data:e.map(k=>k[a]??null),borderColor:n,pointBackgroundColor:n,fill:!1,datalabels:{anchor:"end",align:"top",color:s,formatter:(k,F)=>{if(k===null)return null;let D=`${k} ${M}`;return D.length>Bm&&F.dataIndex%2!==0?null:D}}}]},options:k3({},C,{scales:{y:{display:!1,min:y,max:Z}}})}}getTemperatureLineStyle(e,i){let C=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(C),H=n=>this.computeTemperatureLineColor(n,e,a);return{borderColor:H,pointBorderColor:H,pointBackgroundColor:H,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,C){if(!this.config.forecast?.use_color_thresholds)return C;let a=e.chart,{ctx:H,chartArea:n,scales:s}=a;if(!n||!s.yTemp)return C;if(this._temperatureColors===null){let D=i;this._temperatureColors={cold:D.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:D.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:D.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:D.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:D.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:D.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let M=s.yTemp,{min:p,max:h}=M;if(!Number.isFinite(p)||!Number.isFinite(h))return C;let v=H.createLinearGradient(0,n.bottom,0,n.top),g=D=>Math.max(0,Math.min(1,(D-p)/(h-p))),y=n5(this.hass,this.weatherEntity,"temperature")==="\xB0F",k=D=>y?D*9/5+32:D,F=[{pos:g(k(-10)),color:this._temperatureColors.cold},{pos:g(k(0)),color:this._temperatureColors.freezing},{pos:g(k(8)),color:this._temperatureColors.chilly},{pos:g(k(18)),color:this._temperatureColors.mild},{pos:g(k(26)),color:this._temperatureColors.warm},{pos:g(k(34)),color:this._temperatureColors.hot}].sort((D,B)=>D.pos-B.pos);for(let D of F)v.addColorStop(D.pos,D.color);return v}computeScaleLimits(e){let i=e.map(B=>B.temperature),C=e.map(B=>B.templow??B.temperature),a=Math.min(...C),H=Math.max(...i),n=e.some(B=>B.templow!==void 0&&B.templow!==null),s=Math.max(H-a,10),M=.2,p=n?.35:.1,h=s*M,v=s*p,g=2,Z=n?5:1,y=Math.max(h,g),k=Math.max(v,Z),F=Math.floor(a-k),D=Math.ceil(H+y);return F>=D&&(D=F+1),{minTemp:F,maxTemp:D}}renderHeaderItems(e){let i=[],C;return e.forEach((a,H)=>{if(a.datetime){if(this.forecastType==="hourly"){let n=Y0(this.hass,a.datetime);C!==n&&(C=n,i.push(S`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${n}</div>
            </div>`))}i.push(S`
        <div class="wsfc-forecast-slot" data-index=${H}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${a}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
        </div>
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((DH+e)/(this.itemWidth+e));return this.forecast.length>i?(k5.debug(`Truncating forecast to ${i} items to stay under ${DH}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=C=>C==="temperature_and_precipitation"?!0:e.some(a=>a[C]!=null);return g6.filter(i).map(C=>({label:C==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,C)||C,icon:C==="temperature_and_precipitation"?"mdi:water-thermometer":T5[C],value:C}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};Y([t1({attribute:!1})],q2.prototype,"hass",2),Y([t1({attribute:!1})],q2.prototype,"weatherEntity",2),Y([t1({attribute:!1})],q2.prototype,"forecast",2),Y([t1({attribute:!1})],q2.prototype,"config",2),Y([t1({attribute:!1})],q2.prototype,"forecastType",2),Y([t1({attribute:!1})],q2.prototype,"isTwiceDailyEntity",2),Y([t1({attribute:!1})],q2.prototype,"itemWidth",2),Y([t1({attribute:!1})],q2.prototype,"isScrollable",2),Y([w4("canvas")],q2.prototype,"_canvas",2),Y([U2()],q2.prototype,"_settingsOpen",2),Y([U2()],q2.prototype,"_selectedAttribute",2),q2=Y([H2("wsfc-forecast-chart")],q2);var s3=class extends p1{createRenderRoot(){return this}render(){if(!this.forecast)return O;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=wo(this.forecast);return S`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?S`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:O}
      </div>
      <div
        class=${R3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};Y([t1({attribute:!1})],s3.prototype,"hass",2),Y([t1({attribute:!1})],s3.prototype,"forecast",2),Y([t1({attribute:!1})],s3.prototype,"config",2),Y([t1({attribute:!1})],s3.prototype,"maxPrecipitation",2),s3=Y([H2("wsfc-forecast-details")],s3);var $5=class extends p1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return O;let e=this.forecast.wind_speed||0,i=_6(this.forecast),C=this.radius,a=4,H=10,n=C+H,s=C+H,M=2*(C+H),p=Math.round(e),h=this.computeLineColor(),v=i;v!==void 0&&this.type==="direction"&&(v=(v+180)%360);let g=Number.isFinite(v),Z=s-C,y=C*.55,k=Z-y,F=C*.45;return S`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${M} ${M}"
        role="img"
        aria-label="${g?`Wind speed: ${p}, bearing: ${v} degrees`:`Wind speed: ${p}`}"
      >
        <circle
          cx="${n}"
          cy="${s}"
          r="${C}"
          stroke="${h}"
          stroke-width="${a}"
          fill="none"
        />
        ${g?E1` <g transform="rotate(${v} ${n} ${s})">
              <polygon
                points="${n-F},${Z} ${n+F},${Z} ${n},${k}"
                fill="${h}"
              />
            </g>`:O}
        <text x="${n}" y="${s}" dy="0.1em">${p}</text>
      </svg>
    `}computeLineColor(){let e=O4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};$5.styles=w1`
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
  `,Y([t1({attribute:!1})],$5.prototype,"hass",2),Y([t1({attribute:!1})],$5.prototype,"weatherEntity",2),Y([t1({attribute:!1})],$5.prototype,"forecast",2),Y([t1({attribute:!1})],$5.prototype,"size",2),Y([t1({attribute:!1})],$5.prototype,"radius",2),Y([t1({attribute:!1})],$5.prototype,"type",2),$5=Y([H2("wsfc-wind-indicator")],$5);var L3=class extends p1{createRenderRoot(){return this}render(){return this.forecast?S`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??O}
      </div>
    `:O}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?S`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),C=g8(e);return S`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${j2({color:`var(${C})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return S`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;k5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};Y([t1({attribute:!1})],L3.prototype,"hass",2),Y([t1({attribute:!1})],L3.prototype,"weatherEntity",2),Y([t1({attribute:!1})],L3.prototype,"forecast",2),Y([t1({attribute:!1})],L3.prototype,"config",2),L3=Y([H2("wsfc-forecast-info")],L3);var z5=class extends p1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new w7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let C=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=C?.dataset.index?Number(C.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let C={selectedForecast:i,action:e.detail.action};i2(this,"action",C)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return O;let e=[],i=S7(n5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),C;return this.forecast.forEach((a,H)=>{if(a.datetime){if(this.forecastType==="hourly"){let n=Y0(this.hass,a.datetime);C!==n&&(C=n,e.push(S`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${n}</div>
            </div>`))}e.push(S`
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
      `)}}),S`
      <div
        class="${R3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${X5({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};Y([t1({attribute:!1})],z5.prototype,"hass",2),Y([t1({attribute:!1})],z5.prototype,"weatherEntity",2),Y([t1({attribute:!1})],z5.prototype,"forecast",2),Y([t1({attribute:!1})],z5.prototype,"forecastType",2),Y([t1({attribute:!1})],z5.prototype,"isTwiceDailyEntity",2),Y([t1({attribute:!1})],z5.prototype,"config",2),Y([t1({attribute:!1})],z5.prototype,"isScrollable",2),z5=Y([H2("wsfc-forecast-simple")],z5);var l3=class extends p1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=$H.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return O;let e=this.getClasses(),i=this.getWeatherStateIcon();return S`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:C}=this.getCustomWeatherIconPath();return S` <img src="${i}" alt="${C}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?S`
        <div
          style="background-size: cover;${j2({"background-image":e})}"
        ></div>
      `:$H.has(this.state)?S`${jm(this.state,this.isNightTime)}`:O}};Y([t1({attribute:!1})],l3.prototype,"config",2),Y([t1({attribute:!1})],l3.prototype,"classes",2),Y([t1({attribute:!1})],l3.prototype,"isNightTime",2),Y([t1({attribute:!1})],l3.prototype,"state",2),l3=Y([H2("wsfc-weather-condition-icon-provider")],l3);var $H=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),zm=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),Im=new Set(["hail","rainy","pouring"]),Nm=new Set(["windy","windy-variant"]),Wm=new Set(["snowy","snowy-rainy"]),Um=new Set(["lightning","lightning-rainy"]),jm=(r,t)=>E1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${r==="sunny"&&t?E1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:r==="sunny"?E1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${r==="clear-night"?E1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${r==="partlycloudy"&&t?E1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:r==="partlycloudy"?E1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${zm.has(r)?E1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${Im.has(r)?E1`
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
  ${r==="pouring"?E1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${Nm.has(r)?E1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Wm.has(r)?E1`
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
  ${Um.has(r)?E1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var M3=class extends p1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(Gm(e))||A5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return O;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==O);return e.length===0?O:S`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return O;let{name:i,entity:C,label:a,icon:H}=e,n;if(C?n=S6(this.hass,this.weatherEntity,this.config,i,C):i&&(n=b7(this.hass,this.weatherEntity,this.config,i)),!n)return O;let s=C?this.hass.states[C]||this.weatherEntity:this.weatherEntity,M=C?this.hass.states[C]:void 0,p=M&&!i?S`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${M}
              .icon=${H}
            ></ha-state-icon>
          `:S`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${s}
              .attribute=${i}
              .icon=${ko(i,H,M)}
            ></ha-attribute-icon>
          `;return S`
      <div class="wsfc-current-attribute">
        ${p}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,M)}
        </span>
        <span class="wsfc-current-attribute-value">${n}</span>
      </div>
    `}resolveLabel(e,i,C){return i||(e&&E2.includes(e)?this.localize(e):C?.attributes?.friendly_name??(e?A5(e).replace(/_/g," "):""))}};Y([t1({attribute:!1})],M3.prototype,"hass",2),Y([t1({attribute:!1})],M3.prototype,"weatherEntity",2),Y([t1({attribute:!1})],M3.prototype,"attributeConfigs",2),Y([t1({attribute:!1})],M3.prototype,"config",2),M3=Y([H2("wsfc-current-weather-attributes")],M3);var Gm=q0(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var er={...T5,precipitation:"mdi:weather-rainy"},R2=class extends p1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,C=i?{...this.config,entity:i}:this.config;Z4(this,this.hass,C,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return O;let{state:e}=this.weatherEntity,i=this.getTemperature(),C=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),H=this.getConfiguredAttributes(),n=this.config.name||this.weatherEntity.attributes.friendly_name;return S`
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
            ${n?S`<span class="wsfc-name wsfc-secondary">${n}</span>`:O}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${i!==null?S`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${X5({stopPropagation:!0,hasHold:v0(this.config.hold_action),hasDoubleClick:v0(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${i}
                  </div>
                `:O}
            ${C?S`
                  <div class="wsfc-current-secondary-info">
                    ${C.stateObj?S`
                          <ha-state-icon
                            class="wsfc-current-secondary-icon wsfc-secondary"
                            .hass=${this.hass}
                            .stateObj=${C.stateObj}
                            .icon=${C.icon}
                          ></ha-state-icon>
                        `:C.icon?S`
                            <ha-attribute-icon
                              class="wsfc-current-secondary-icon wsfc-secondary"
                              .hass=${this.hass}
                              .icon=${C.icon}
                            ></ha-attribute-icon>
                          `:O}
                    <span class="wsfc-current-secondary-value wsfc-secondary"
                      >${C.value}</span
                    >
                  </div>
                `:O}
          </div>
        </div>
        ${H.length>0?S`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${H}
            ></wsfc-current-weather-attributes>`:O}
      </div>
    `}isNightTime(){let e=x0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?E2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return J5(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?J5(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let s=typeof i=="string"?{name:i}:i,{name:M,entity:p,icon:h}=s;if(p){let v=S6(this.hass,this.weatherEntity,this.config,M,p);if(v!=null){let g=this.hass.states[p];return M?{icon:h??g?.attributes?.icon??er[M],value:v}:{stateObj:g,icon:h,value:v}}}else if(M&&M in this.weatherEntity.attributes){let g=er[M],Z=b7(this.hass,this.weatherEntity,this.config,M);if(Z!=null)return{icon:h??g,value:Z}}}let C=this.getTemperatureExtrema();if(C)return{value:`${C.high} / ${C.low}`};let a,H;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,H="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,H="humidity";else return null;return{icon:er[H],value:this.hass.formatEntityAttributeValue(this.weatherEntity,H,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=v7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,C=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(v7(a.datetime)===e){let H=a.templow??a.temperature,n=a.temperature;H!=null&&H<i&&(i=H),n!=null&&n>C&&(C=n)}return i===1/0||C===-1/0?null:{high:J5(this.hass,this.weatherEntity,C,this.config.current?.temperature_precision),low:J5(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};Y([t1({attribute:!1})],R2.prototype,"hass",2),Y([t1({attribute:!1})],R2.prototype,"weatherEntity",2),Y([t1({attribute:!1})],R2.prototype,"hourlyForecast",2),Y([t1({attribute:!1})],R2.prototype,"dailyForecast",2),Y([t1({attribute:!1})],R2.prototype,"config",2),R2=Y([H2("wsfc-current-weather")],R2);var zH=`:host {
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
`;var IH="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var NH=w1`
  ${u0(zH)}

  :host {
    --moon-texture: url("${u0(IH)}");
  }
`;var M9=10,Ym=3,S8=14,Qm=75,Km=75,Xm=4,Jm=3,WH=2,th=[1.45,.7],UH=90,eh=50,rh=.15,I5=class extends p1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],C=Math.round(i?.contentRect.height||0);this._containerHeight!==C&&(this._containerHeight=C,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),C=this.hass?.themes?.darkMode;i?.themes?.darkMode!==C&&(this._isDark=C??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?S`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return O}})}
    `:O}computeParticles(){let e=[];return this.getActiveEffects().forEach(C=>{switch(C){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],C=Math.round(e/M9*Qm),a=Math.max(5,C),H=115/a;for(let n=0;n<a;n++){let s=-15+n*H+$1(0,H*.5),M=Math.random(),p=M*5+2,h=4.5/(M+.5)+$1(0,.8),v=$1(0,5,!0).toFixed(1),g=M*.7+.5,Z=M<.3?1.5-M*3:M>.9?.5:0,y=p*.9,k=(10+M*25).toFixed(0),F=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${s.toFixed(1)}%`,delay:v,duration:h.toFixed(1),size:p.toFixed(0),opacity:g.toFixed(1),blur:Z.toFixed(1),shadowSpread:y.toFixed(1),driftAmplitude:k,driftFrequency:F})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],C=Math.round(e/M9*Km),a=Math.max(10,C),H=100/a;for(let n=0;n<a;n++){let s=n*H+$1(0,H*.8),M=$1(.2,.5,!0),p=$1(.4,.7,!0),h=$1(.85,1,!0),v=this._containerHeight*h;i.push({type:"rain",x:`${s.toFixed(1)}%`,delay:M.toFixed(2),duration:p.toFixed(2),landingPosY:v.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let H=0;H<30;H++){let n=H%6,s=Math.floor(H/6),M=100/6,p=30/5,h=$1(n*M+M*.15,(n+1)*M-M*.15),v=$1(s*p+p*.15,(s+1)*p-p*.15),g=$1(1,3),Z=$1(.3,1,!0),y=$1(0,5,!0);e.push({type:"star",x:`${h.toFixed(0)}`,y:`${v.toFixed(0)}`,size:`${g}`,opacity:Z.toFixed(2),delay:y.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let C=new Set,a=M=>i===!0?!0:Array.isArray(i)?i.includes(M):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&C.add("rain"),e.includes("snowy")&&a("snow")&&C.add("snow"),e.includes("lightning")&&a("lightning")&&C.add("lightning");let H=e==="sunny"||e==="clear-night",n=e==="cloudy",s=e==="partlycloudy";return(H||s||n)&&a("sky")&&C.add("sky"),(H||s)&&(this.isNightTime()?a("moon")&&C.add("moon"):a("sun")&&C.add("sun")),(n||s)&&a("cloud")&&C.add("cloud"),Array.from(C)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?x0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return S`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return S`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>S`<div
                class="sun-ray"
                style="${j2({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${$1(0,360)}`,height:`${$1(100,200)}`,width:`${$1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),C=e?Xm:Jm,a=100/C,H=[];for(let n=0;n<C;n++){let s=n%WH,M=s===0,p=n*a+$1(0,a*.5)-a*.25,h=e?M?$1(140,200):$1(215,285):M?$1(110,165):$1(180,240),v=h*$1(.38,.5,!0),g=e?M?$1(-26,-12):$1(-16,-2):M?$1(-10,4):$1(-4,12),Z=e?M?$1(.36,.5,!0):$1(.5,.64,!0):M?$1(.68,.8,!0):$1(.82,.92,!0);i&&(Z*=.7),H.push({type:"cloud",variant:e?"grey":"white",night:i,layer:s,shape:$1(1,5),flip:$1(0,1)===1,x:p.toFixed(1),y:g.toFixed(0),width:h.toFixed(0),height:v.toFixed(0),opacity:Z.toFixed(2)})}return H}computeCloudDrift(){let e=this.currentForecast,i=e&&O4(this.hass,this.weatherEntity,e)||0,C=Math.min(i,S8)/S8,a=e?_6(e):void 0,H=a!==void 0?-Math.sin(a*Math.PI/180):0,n=Math.max(rh,C*Math.abs(H));return{duration:UH-n*(UH-eh),driftRight:H>=0}}renderCloudFilter(){return S`
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
    `}renderClouds(){let e=this._particles.filter(H=>H.type==="cloud");if(!e.length)return O;let{duration:i,driftRight:C}=this.computeCloudDrift(),a=H=>{let n=["cloud",`cloud-shape-${H.shape}`,H.variant==="grey"?"grey":"",H.night?"night":""].filter(Boolean).join(" ");return S`<div
        class="${n}"
        style="${j2({left:`${H.x}%`,top:`${H.y}px`,width:`${H.width}px`,height:`${H.height}px`,opacity:H.opacity,transform:H.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return S`
      ${this.renderCloudFilter()}
      ${Array.from({length:WH},(H,n)=>{let s=e.filter(p=>p.layer===n);if(!s.length)return O;let M=Math.round(i*(th[n]??1)/5)*5;return S`<div
          class="cloud-track ${C?"drift-right":""}"
          style="${j2({"--cloud-drift-duration":`${M}s`})}"
        >
          <div class="cloud-set">${s.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${s.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>S`
        <div
          class="snowflake-path"
          style="${j2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>S`
        <div
          class="raindrop-path"
          style="${j2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return S` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:uo(this.hass,new Date);return S`
      ${this._particles.filter(i=>i.type==="star").map(i=>S`
          <div
            class="star"
            style="${j2({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?Ft(e.fraction,e.litRight):Ft(1,!0);return S`
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
    `}renderMoonPhase(e){return e?S`
      <svg
        class="moon-phase"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d=${mo(e.fraction,e.litRight)}></path>
      </svg>
    `:O}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=n5(this.hass,this.weatherEntity,"precipitation"),C=S7(i,"hourly");if(C>0){let a=e/C*M9;return Math.min(M9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?M9:Ym}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let C=O4(this.hass,this.weatherEntity,i)||0,a=e?15:35,H=Math.min(C,S8)/S8,n=i.wind_bearing*Math.PI/180,s=Math.sin(n),p=Math.pow(H,e?.8:.5);return s*p*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};I5.styles=NH,Y([t1({attribute:!1})],I5.prototype,"hass",2),Y([t1({attribute:!1})],I5.prototype,"weatherEntity",2),Y([t1({attribute:!1})],I5.prototype,"currentForecast",2),Y([t1({attribute:!1})],I5.prototype,"config",2),Y([U2()],I5.prototype,"_isDark",2),Y([U2()],I5.prototype,"_containerHeight",2),I5=Y([H2("wsfc-animation-provider")],I5);var jH={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},Ch=1e3,M2=class extends p1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):Z4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{Z4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),C=i.find(a=>a==="weather.home")||i[0]||"";return{...jH,entity:C}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>B3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>B3))throw new Error(`temperature_precision must be 0 or greater and at most ${B3}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=k3({},jH,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:C}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:C}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,C=this.config?.forecast?.mode==="chart",a=1,H=1;return e&&(a+=2,H+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(C?(a+=3,H+=3):(a+=2,H+=2)),{rows:a,minRows:H,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return Vo(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return O;let e=this.config.entity,i=this.hass.states[e];if(!i)return S`<hui-warning>
        ${lo(this.hass,e)}
      </hui-warning>`;let C=v5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",H=this.getCurrentForecast();return S`
      <ha-card>
        ${this.config.show_condition_effects?S`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${i}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData?.[0]}
            ></wsfc-animation-provider>`:O}
        <div class="wsfc-container">
          ${this.config.show_current?S`<div
                class="wsfc-current-weather-container"
                .actionHandler=${X5({hasHold:v0(this.config.hold_action),hasDoubleClick:v0(this.config.double_tap_action)})}
                @action=${this.onCardAction}
              >
                <wsfc-current-weather
                  .hass=${this.hass}
                  .weatherEntity=${i}
                  .config=${this.config}
                  .hourlyForecast=${this._hourlyForecastData}
                  .dailyForecast=${this._dailyForecastData}
                ></wsfc-current-weather>
              </div>`:O}
          ${this.config.show_forecast===!1?O:S`<div class="wsfc-forecast-container">
                ${a?S`<wsfc-forecast-chart
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${H}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${C}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:S`<wsfc-forecast-simple
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${H}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${C}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-simple>`}
              </div>`}
        </div>
      </ha-card>
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,C=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:C}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let C=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,H=jt(i,this._hourlyForecastEvent,"hourly"),n=jt(i,this._dailyForecastEvent,v5(e));if(!H&&!n)return;this._dailyForecastData=n?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let s=this.config?.forecast?.hourly_group_size||0;s>1&&H?.forecast?this._hourlyForecastData=Oo(H.forecast,s):this._hourlyForecastData=H?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let M=this.getCurrentForecast();if(!M||M.length===0){let v=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,g=v5(e),Z=g!==void 0,y=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(v||this._currentForecastType==="hourly"&&!y4(e,"hourly")||y&&!Z)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(k5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=g||"daily"):y&&this._hourlyForecastData&&(k5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let p=this.getCurrentForecast().length,h=(this._currentForecastType==="hourly"?C:a)??0;p!==h&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",C=i,a=C?this._hourlyForecastData:this._dailyForecastData,H=this.hass?.states[this.config.entity],n=v5(H)||"daily";if(!a||a.length===0){k5.debug(`Cannot toggle to ${C?"hourly":n} forecast - no data available`);return}this._currentForecastType=i?"hourly":n,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(C)this.scrollToForecastItem(e);else{let s=this._dailyForecastData?.[0];s&&this.scrollToForecastItem(s,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let C=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!C)return;let a=v7(e.datetime),H=this.getCurrentForecast(),n=H.findIndex(h=>v7(h.datetime)===a),s=n!==-1?n:H.length-1,M=this._currentItemWidth||0,p=s*M;C.scrollTo({left:p,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},Ch)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let C=await e;if(!C)return;await C()}catch(C){if(Nt(C))return;k5.warn(`Error unsubscribing from ${i} forecast:`,C)}}createForecastSubscription(e,i,C){return Promise.resolve(bo(this.hass,this.config.entity,e,i)).catch(a=>{if(xo(a)){setTimeout(C,2e3);return}Nt(a)||k5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!Zo(this.hass.states[this.config.entity])){k5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let C=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",H=a!=="hourly",n=a!=="daily",s=v5(C);s==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!H&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!n&&this._currentForecastType==="hourly"&&(this._currentForecastType=s||"daily"),s&&H&&(this._dailySubscription=this.createForecastSubscription(s,M=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=M,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),n&&y4(C,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",M=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=M,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let C=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/C),H=i.length,n=H*a,s=e-n,M=s>0?s/(H-1):0;this._currentItemWidth=a+M,this._isScrollable=i.length>C,this._haCard.style.setProperty("--forecast-item-gap",`${M}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),C=this.hass;if(!i||!C)return!1;let a=i.states[this.config.entity],H=C.states[this.config.entity];return!a||!H?!1:Object.values(Ut).some(n=>a.attributes[n]!==H.attributes[n])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),C=this.hass;return i?.connected===!1&&C?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),C=this.hass;if(!i||!C)return!1;let a=i.states[this.config.entity],H=C.states[this.config.entity];return!a||!H?!1:a.attributes.supported_features!==H.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),C=this.hass;if(!C)return!1;let a=i?.states[this.config.entity],H=C.states[this.config.entity];return!!a!=!!H}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),C=this.hass;return!i||!C?!1:fo(this.config).some(a=>i.states[a]!==C.states[a])}};M2.styles=oo,Y([t1({attribute:!1})],M2.prototype,"hass",2),Y([U2()],M2.prototype,"config",2),Y([U2()],M2.prototype,"_dailyForecastEvent",2),Y([U2()],M2.prototype,"_hourlyForecastEvent",2),Y([U2()],M2.prototype,"_currentItemWidth",2),Y([U2()],M2.prototype,"_currentForecastType",2),Y([U2()],M2.prototype,"_isScrollable",2),Y([w4("ha-card")],M2.prototype,"_haCard",2),Y([w4(".wsfc-forecast-container")],M2.prototype,"_forecastContainer",2);var c3=Y9(h6(),1);var GH="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var qH="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var oh={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},T0=class extends p1{constructor(){super(...arguments);this._schema=q0((e,i,C)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(C),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:x6.map(i=>({value:i,label:A5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:E2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||A5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:E2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||A5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:g6.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||A5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],C=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),C.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),C.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:C},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(C=>{let a=oh[C];return[{name:`current.attribute_entity_${C}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${C}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${C}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:B3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:B3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=Y3(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=Y3(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let C=Y3(this._config.current?.show_attributes);C[e]=i.detail.value,this._commitCustomAttributes(C)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let C=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${C}`)||A5(C).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let C=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${C}`)||A5(C).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let C=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${C}`)||A5(C).replace(/_/g," "),H=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${H}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let C=this.hass.states[this._config.entity];C&&(i=this.hass.formatEntityAttributeName(C,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return O;let e=b8(this._config),i=this._getSelectedAttributes(e),C=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return S`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${C}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let e=Y3(this._config.current?.show_attributes);return S`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${e.map((i,C)=>this._renderCustomAttributeRow(i,C))}
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
    `}_renderCustomAttributeRow(e,i){return S`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${ah}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${C=>this._customAttributeChanged(i,C)}
        ></ha-form>
        <ha-icon-button
          .path=${GH}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:Vh(this._config.current?.show_attributes,e)}};i2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(C=>typeof C=="string"?C:C.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let C=nh(i);if(delete C.temperature_entity,C?.forecast?.extra_attribute==="none"&&delete C.forecast.extra_attribute,Array.isArray(C.show_condition_effects)&&x6.every(H=>C.show_condition_effects.includes(H))&&(C.show_condition_effects=!0),C?.current){let a={},H={},n={};for(let s of Object.keys(C.current))if(s.startsWith("attribute_entity_")){let M=s.replace("attribute_entity_",""),p=C.current[s];p&&(a[M]=p),delete C.current[s]}else if(s.startsWith("attribute_label_")){let M=s.replace("attribute_label_",""),p=C.current[s];p&&(H[M]=p),delete C.current[s]}else if(s.startsWith("attribute_icon_")){let M=s.replace("attribute_icon_",""),p=C.current[s];p&&(n[M]=p),delete C.current[s]}if(Array.isArray(C.current.show_attributes)){let s=Y3(this._config?.current?.show_attributes);C.current.show_attributes=YH(C.current.show_attributes,{entity:a,label:H,icon:n},s)}}i2(this,"config-changed",{config:C})}};T0.styles=w1`
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
  `,Y([t1({attribute:!1})],T0.prototype,"hass",2),Y([U2()],T0.prototype,"_config",2),T0=Y([H2("wsfc-flex-core-editor")],T0);var Q3=r=>typeof r=="string"&&E2.includes(r),Y3=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")Q3(e)||t.push({name:e});else if(typeof e=="object"){let i=e;Q3(i.name)||t.push(i)}}return t},YH=(r,t,e)=>{let i=E2.every(H=>r.includes(H)),C=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!C&&i?!0:[...r.map(H=>{let n=t.entity[H],s=t.label[H],M=t.icon[H];return n||s||M?{name:H,...n?{entity:n}:{},...s?{label:s}:{},...M?{icon:M}:{}}:H}),...e]},ah=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],Hh=r=>{if(r===!0)return[...E2];if(typeof r=="string")return Q3(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")Q3(e)&&t.push(e);else if(typeof e=="object"){let i=e;Q3(i.name)&&t.push(i)}}return t},Vh=(r,t)=>{let e=Hh(r),i=[],C={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(C.entity[a.name]=a.entity),a.label&&(C.label[a.name]=a.label),a.icon&&(C.icon[a.name]=a.icon));return YH(i,C,t)},nh=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[C,a]=i;!C||!a||((!t[C]||typeof t[C]!="object")&&(t[C]={}),t[C][a]=r[e],delete t[e])}return t},b8=r=>{let t=sh(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...x6]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...E2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let C of e)if(typeof C=="string")Q3(C)&&i.push(C);else if(typeof C=="object"&&C!==null){let a=C;Q3(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},sh=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let C in i)t[`forecast.${C}`]=i[C];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let C in i)t[`current.${C}`]=i[C];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let C in i)t[`forecast_action.${C}`]=i[C];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(c=>c.id),i=Object.fromEntries(t.map(c=>[c.id,c.label])),C={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],H=(c,m,d)=>Math.min(d,Math.max(m,c)),n=c=>typeof c=="number"&&isFinite(c),s={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function M(c){return s[c]||"mdi:weather-cloudy"}let p=["temps","icons","extra"],h={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function v(c){let m=Array.isArray(c.forecast_row_order)?c.forecast_row_order.filter(d=>p.includes(d)):null;(!m||!m.length)&&(m=(c.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let d of p)m.includes(d)||m.push(d);return m}let g={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},Z=Object.keys(g);function y(c){let m=c&&c.forecast_extra,d;Array.isArray(m)?d=m:typeof m=="string"&&m&&m!=="none"?d=[m]:d=[];let A=new Set(d.filter(x=>g[x]));return Z.filter(x=>A.has(x))}let k=["temps","icons",...Z],F=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(Z.map(c=>[c,g[c].label]))),D=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function B(c){c=c||{};let m={},d;if(Array.isArray(c.forecast_metric_order)&&c.forecast_metric_order.length){d=c.forecast_metric_order.filter(x=>k.includes(x));let A=c.forecast_metric_pos||{};for(let x of k)m[x]=A[x]||"hidden"}else{m.temps=c.forecast_temps||"hidden",m.icons=c.forecast_icons||"hidden";let A=y(c),x=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let w of Z)m[w]=A.includes(w)?x:"hidden";let b=v(c);d=[];for(let w of b)w==="extra"?d.push(...Z):d.push(w)}for(let A of k)d.includes(A)||d.push(A);for(let A of k)m[A]||(m[A]="hidden");return d.map(A=>({key:A,pos:m[A]}))}function K(c,m){if(!c||!m)return null;let d=g[c],A=m[c];return c==="wind_direction"&&(A=m.wind_direction!=null?m.wind_direction:m.wind_bearing),A==null||A===""?null:d&&d.arrow?"":(typeof A=="number"&&(A=Math.round(A)),A+(d&&d.unit||""))}function Q(c,m){if(c==="wind_direction")return(g.wind_bearing||{}).icon;let d=g[c];return d?d.icon:""}let c1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function s1(c,m){if(m){let d=c1[c];if(d&&C[d]&&C[d].icon)return C[d].icon}return Q(c)}function r1(c){return c==="below"||c==null?0:c==="above"?100:c==="mid"?50:H(Number(c)||0,0,100)}function o1(c,m){m=m||0;let d="  ".repeat(m),A=x=>{if(x==null)return"null";if(typeof x=="boolean"||typeof x=="number")return String(x);let b=String(x);return b===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(b)||/^\s|\s$/.test(b)||/^(true|false|null|yes|no|~)$/i.test(b)||/^[\d.+-]/.test(b)?'"'+b.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':b};if(Array.isArray(c))return c.length?c.map(x=>{if(x&&typeof x=="object"){let b=o1(x,m+1).replace(/^\s+/,"");return d+"- "+b}return d+"- "+A(x)}).join(`
`):d+"[]";if(c&&typeof c=="object"){let x=Object.keys(c);return x.length?x.map(b=>{let w=c[b];return w&&typeof w=="object"&&(Array.isArray(w)?w.length:Object.keys(w).length)?d+b+`:
`+o1(w,m+1):w&&typeof w=="object"?d+b+": "+(Array.isArray(w)?"[]":"{}"):d+b+": "+A(w)}).join(`
`):d+"{}"}return d+A(c)}function f1(c){try{return typeof E3=="function"&&E3(c)||c.language||navigator.language||"en"}catch{return"en"}}function I1(c){let m=c&&c.config||{};return{lat:m.latitude,lng:m.longitude}}function y1(c,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(f1(c),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function s2(c,m){let d=m instanceof Date?m:new Date;try{if(typeof x0=="function"){let b=x0(c,d);if(b&&b.sunrise&&b.sunset)return{sunrise:new Date(b.sunrise),sunset:new Date(b.sunset)}}}catch{}let{lat:A,lng:x}=I1(c);if(n(A)&&n(x)&&typeof c3=="object"&&c3.getTimes)try{let b=c3.getTimes(d,A,x);return{sunrise:b.sunrise,sunset:b.sunset}}catch{}return{sunrise:null,sunset:null}}function G1(c,m){let{lat:d,lng:A}=I1(c);if(!n(d)||!n(A)||typeof c3!="object"||!c3.getPosition)return null;try{return c3.getPosition(m,d,A).altitude}catch{return null}}function O1(c){if(c==null)return .5;let m=c*180/Math.PI;return m>=0?H(.42+.58*Math.sin(c),.42,1):m>-12?H(.42*(m+12)/12,0,.42):0}let X=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function q1(c){c=H(c,0,1);let m=X[0],d=X[X.length-1];for(let w=0;w<X.length-1;w++)if(c>=X[w].at&&c<=X[w+1].at){m=X[w],d=X[w+1];break}let A=d.at-m.at||1,x=(c-m.at)/A,b=w=>Math.round(m.c[w]+(d.c[w]-m.c[w])*x);return[b(0),b(1),b(2)]}function a1(c){if(typeof c!="string")return null;let m=c.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(d=>d+d).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let U=c=>`rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`,J=(c,m,d)=>c.map((A,x)=>A+(m[x]-A)*d);function H1(c,m){c=H(c,0,1);let d,A=m&&a1(m.day_color),x=m&&a1(m.night_color);A||x?d=J(x||[11,16,38],A||[206,227,255],c):d=q1(c);let b=m&&n(m.cloud)?H(m.cloud,0,1):0;if(b>0){let w=.5*(d[0]+d[1]+d[2]),P=[w*.75+40,w*.75+42,w*.78+48];d=J(d,P,b*.6)}return U(d)}function u1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function V1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function n1(c){return{font_size:c,font_weight:"400",color:""}}function _1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function k1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function c2(c,m){if(c==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let d=A=>`0 0 2px ${A}, 0 0 4px ${A}, 1px 1px 2px ${A}`;return c==="outline"?d("rgba(0,0,0,0.85)"):c==="auto"?d(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let m2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function w2(c){let m=c&&c.show_forecast!==!1,d=c&&c.default_forecast||"daily",A=a.map(P=>({key:P,show:!0})),x=u1,b=_1,w=V1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:c?c.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...k1(),...b(),...x(),...w()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:A,...b(),...x(),...w()},hourly:{show:m&&d==="hourly",...b(),...x(),...w()},daily:{show:m&&d!=="hourly",...b(),...x(),...w()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...b(),...x(),...w()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...b(),...x(),...w()}}}function L2(c){let m=w2(c),d=c&&c.wfc||{},A={order:Array.isArray(d.order)&&d.order.length?d.order.slice():m.order,card:{...m.card,...d.card||{}},current:{...m.current,...d.current||{}},details:{...m.details,...d.details||{}},hourly:{...m.hourly,...d.hourly||{}},daily:{...m.daily,...d.daily||{}},sun_position:{...m.sun_position,...d.sun_position||{}},sun_arc:{...m.sun_arc,...d.sun_arc||{}},editor_accordion:d.editor_accordion!==!1},x=Array.isArray(d.details&&d.details.items)?d.details.items.slice():m.details.items.slice();x=x.filter(w=>w&&C[w.key]),A.details.items=x.length?x:m.details.items,A.details.columns=H(parseInt(A.details.columns,10)||2,1,4);let b=new Set(A.details.items.map(w=>w.key));return Object.keys(C).forEach(w=>{b.has(w)||A.details.items.push({key:w,show:!1})}),["sun_position","sun_arc"].forEach(w=>{let P=d[w]||{};P.flush!==void 0&&(P.flush_top===void 0&&(A[w].flush_top=!!P.flush),P.flush_bottom===void 0&&(A[w].flush_bottom=!!P.flush),P.flush_edges===void 0&&(A[w].flush_edges=!!P.flush))}),e.forEach(w=>{A.order.includes(w)||A.order.push(w)}),A.order=A.order.filter(w=>e.includes(w)),A}let L1=M2.prototype;if(typeof R2<"u"&&R2&&R2.prototype&&R2.prototype.getSecondaryWeatherAttribute){let c=R2.prototype.getSecondaryWeatherAttribute;R2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:c.call(this)}}let Y2=L1.setConfig;L1.setConfig=function(c){let m=L2(c),d=!!(m.hourly.show||m.daily.show),A={...c,show_current:m.current.show||!d,show_forecast:d};m.hourly.show&&m.daily.show&&(A.forecast_types="both"),Y2.call(this,A),this.config.show_current=!!m.current.show,this.config.show_forecast=d,m.hourly.show&&m.daily.show&&(this.config.forecast_types="both"),this.__wfcCfgSrc=void 0};let D2=L1.updated;L1.updated=function(c){D2&&D2.call(this,c),this.isConnected&&this._wfcSyncForecastSources()};let M5=L1.disconnectedCallback;L1.disconnectedCallback=function(){M5&&M5.call(this),this._wfcTeardownForecastSources()};let Z2=L1.shouldUpdate;L1.shouldUpdate=function(c){if(Z2&&Z2.call(this,c))return!0;if(c&&c.has("hass")&&this.config){let m=c.get("hass"),d=this.hass;if(m&&d){let A=new Set;for(let x of this._wfcSources())if(x.overrides&&Object.values(x.overrides).forEach(b=>b&&A.add(b)),Q1(x.ref)){let b=m3(this.config,this.hass,f2(x.ref));Object.values(b).forEach(w=>w&&A.add(w))}else x.ref&&A.add(x.ref);for(let x of A)if(m.states[x]!==d.states[x])return!0}}return!1},L1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=L2(this.config)),this.__wfcCfg},L1.computeRowSizing=function(){let c=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",d={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let w=(c.details.items||[]).filter(P=>P.show).length;return Math.max(1,Math.ceil(w/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(c.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(c.sun_arc.height)||90)+24)/56))},A=1,x=4;c.order.filter(w=>c[w]&&c[w].show&&d[w]).forEach(w=>{A+=d[w](),(w==="hourly"||w==="daily")&&(x=6)});let b=Math.max(1,A-1);return{rows:A,minRows:b,minColumns:x}},L1.render=function(){if(!this.config||!this.hass)return O;let c=this.config.entity,m=this.hass.states[c];if(!m){let R=this.hass,N=R?R.config&&R.config.state!=="NOT_RUNNING"?`${R.localize("ui.card.common.entity_not_found")}: ${c}`:R.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return S`<hui-warning>${N}</hui-warning>`}let d=this._wfc(),A=typeof v5=="function"&&v5(m)==="twice_daily",x=this.config.forecast&&this.config.forecast.mode==="chart",b={stateObj:m,isTwice:A,chart:x},P=d.order.filter(R=>d[R]&&d[R].show).map(R=>{let N=this._wfcRenderSection(R,d,b);if(N===O||N==null)return null;let z=d[R]||{},i1="wsfc-section";z.flush_top&&(i1+=" wsfc-flush-top"),z.flush_bottom&&(i1+=" wsfc-flush-bottom"),z.flush_edges&&(i1+=" wsfc-flush-edges");let d1=this._wfcBackgroundStyle(z);return S`<div class=${i1} data-section-id=${R} style=${d1}>
          ${this._wfcRenderTitle(z)}${N}
        </div>`}).filter(Boolean);return S`
      <ha-card>
        ${this.config.show_condition_effects?S`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${m}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:O}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(d)}
        ${this._wfcCardAppearanceStyle(d)}
        <div class="wsfc-container">${P}</div>
      </ha-card>
    `},L1._wfcDividerStyle=function(c){let m=[];return c.order.forEach(d=>{let A=c[d];if(!A||!A.show||!A.divider_above&&!A.divider_below)return;let x=`.wsfc-section[data-section-id="${d}"]`,b=A.divider_color||"var(--divider-color, #4a4a4a)",w=`${x}{position:relative;}`,P=R=>["solid","dashed","dotted","double"].includes(R)?R:"solid";if(A.divider_above){let R=Number(A.divider_above_width)||1,N=H(Number(A.divider_above_length)||100,1,100),z=P(A.divider_above_style);w+=`${x}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${x}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${N}%;border-top:${R}px ${z} ${b};}`}if(A.divider_below){let R=Number(A.divider_below_width)||1,N=H(Number(A.divider_below_length)||100,1,100),z=P(A.divider_below_style);w+=`${x}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${x}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${N}%;border-bottom:${R}px ${z} ${b};}`}m.push(w)}),m.length?S`<style>${m.join("")}</style>`:O},L1._wfcCardAppearanceStyle=function(c){let m=c&&c.card||{},d=[];if(m.border_enabled){let x=Math.max(0,Number(m.border_width)||1),b=m.border_color||"var(--primary-color, #2196f3)",w=P=>P!==!1?`${x}px solid ${b}`:"none";d.push(`border-top:${w(m.border_top)}`),d.push(`border-bottom:${w(m.border_bottom)}`),d.push(`border-left:${w(m.border_left)}`),d.push(`border-right:${w(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let x=`${Number(m.border_radius)}px`,b=w=>w!==!1?x:"0";d.push(`border-radius:${b(m.corner_tl)} ${b(m.corner_tr)} ${b(m.corner_br)} ${b(m.corner_bl)}`)}m.bg_color&&d.push(`background:${m.bg_color}`);let A=[];if(m.glow_enabled){let x=m.glow_color||"var(--primary-color, #2196f3)",b=H(Number(m.glow_intensity)||1,.2,3),w=(12*b).toFixed(1),P=(-4*b).toFixed(1),R=(4*b).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?A.push(`0 0 ${w}px ${P}px ${x}`):(m.border_top!==!1&&A.push(`0 -${R}px ${w}px ${P}px ${x}`),m.border_bottom!==!1&&A.push(`0 ${R}px ${w}px ${P}px ${x}`),m.border_left!==!1&&A.push(`-${R}px 0 ${w}px ${P}px ${x}`),m.border_right!==!1&&A.push(`${R}px 0 ${w}px ${P}px ${x}`))}if(m.shadow_enabled){let x=h2(m.shadow_color||"#000000",H((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";A.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${x}`)}return A.length&&d.push(`box-shadow:${A.join(", ")}`),d.length?S`<style>ha-card{${d.join(";")};}</style>`:O},L1._wfcBackgroundStyle=function(c){if(!c||!c.background_enabled)return"";let m=H(c.background_opacity==null?80:Number(c.background_opacity),0,100),d=(100-m)/100,A=100-m,x=c.background_color||"",b;x?b=h2(x,d)||x:b=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${A}%, transparent)`;let w=c.flush_edges?"0":"8px";return`background-color:${b};border-radius:${w};`};function h2(c,m){if(typeof c!="string")return null;let d=c.trim().replace(/^#/,"");if(d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),!/^[0-9a-fA-F]{6}$/.test(d))return null;let A=parseInt(d.slice(0,2),16),x=parseInt(d.slice(2,4),16),b=parseInt(d.slice(4,6),16);return`rgba(${A}, ${x}, ${b}, ${m})`}L1._wfcRenderTitle=function(c){if(!c||!c.title_show)return O;let m=c.title_text||"",d=c.title_icon||"",A=c.title_text_align||"left",x=c.title_icon_align||"left",b=!!m&&A!=="hide",w=!!d&&x!=="hide";if(!b&&!w)return O;let P=(c.title_icon_color?`color:${c.title_icon_color};`:"")+(c.title_icon_size?`--mdc-icon-size:${c.title_icon_size}px;width:${c.title_icon_size}px;height:${c.title_icon_size}px;`:""),R=(c.title_color?`color:${c.title_color};`:"")+(c.title_font_size?`font-size:${c.title_font_size}px;`:"")+(c.title_font_weight?`font-weight:${c.title_font_weight};`:""),N=w?S`<ha-icon class="wsfc-title-icon" .icon=${d} style=${P}></ha-icon>`:O,z=b?S`<span class="wsfc-title-text" style=${R}>${m}</span>`:O,i1=I=>{let S1=[];return w&&x===I&&S1.push(N),b&&A===I&&S1.push(z),S1},d1=Number(c.title_indent)||0;return S`<div class="wsfc-title-row" style="padding-left:${d1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${i1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${i1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${i1("right")}</span>
    </div>`},L1._wfcRenderSection=function(c,m,d){switch(c){case"current":return this._wfcRenderCurrent(d);case"details":return this._wfcRenderDetails(m,d);case"hourly":return this._wfcRenderForecast("hourly",d);case"daily":return this._wfcRenderForecast("daily",d);case"sun_position":return this._wfcRenderSunPosition(m,d);case"sun_arc":return this._wfcRenderSunArc(m,d);default:return O}},L1._wfcRenderCurrent=function(c){let d=this._wfc().current||{},A=Number(d.header_state_size)||0,x=Number(d.header_temp_size)||0,b=Number(d.header_icon_size)||0,w=(b?`--current-conditions-icon-size:${b}px;`:"")+(A||x?`--wfc-hdr-state:${A?A+"px":"inherit"};--wfc-hdr-temp:${x?x+"px":"inherit"};`:""),P=S`
      <div
        class="wsfc-current-weather-container${A||x?" wsfc-hdr-sized":""}"
        style=${w||O}
        .actionHandler=${X5({hasHold:v0(this.config.hold_action),hasDoubleClick:v0(this.config.double_tap_action)})}
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
    `,R=!!d.clock_show_time,N=!!d.clock_show_date;if(!R&&!N)return P;this._wfcEnsureClockTimer();let z=M1=>M1==="above"?"above-center":M1==="below"?"below-center":M1||"right",i1=z(d.clock_placement),d1=d.clock_date_placement==="with_time"||!d.clock_date_placement?i1:z(d.clock_date_placement),I=R?this._wfcRenderClockTime(d):null,S1=N?this._wfcRenderClockDate(d):null,W1=R&&N&&(d.clock_date_placement==="with_time"||!d.clock_date_placement),U1={},j1=(M1,R1)=>{R1&&(U1[M1]=U1[M1]||[]).push(R1)};W1?j1(i1,S`<div class="wsfc-clock">${I}${S1}</div>`):(I&&j1(i1,S`<div class="wsfc-clock">${I}</div>`),S1&&j1(d1,S`<div class="wsfc-clock">${S1}</div>`));let N1=M1=>{let R1=[];return["left","center","right"].forEach(d5=>{let o5=M1+"-"+d5;U1[o5]&&R1.push(S`<div class="wsfc-clock-band-cell wsfc-cb-${d5}">${U1[o5]}</div>`)}),R1.length?S`<div class="wsfc-clock-band">${R1}</div>`:O},m1=N1("above"),F1=N1("below"),S5=U1.left||O,$2=[].concat(U1.right||[],U1.center||[]),c5=U1.left&&U1.left.length||$2.length?S`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${S5}
          <div class="wsfc-cur-grow">${P}</div>
          ${$2.length?$2:O}
        </div>`:P;return S`<div class="wsfc-cur-stack">${m1}${c5}${F1}</div>`},L1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let c=this.__wfcCfg||(this.config?L2(this.config):null),m=c&&c.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},L1._wfcRenderClockTime=function(c){let m=new Date,d=f1(this.hass),A={hour:"2-digit",minute:"2-digit"};c.clock_show_seconds&&(A.second="2-digit"),c.clock_format==="12"?A.hour12=!0:c.clock_format==="24"&&(A.hour12=!1);let x;try{x=m.toLocaleTimeString(d,A)}catch{x=m.toTimeString().slice(0,c.clock_show_seconds?8:5)}c.clock_format==="12"&&(x=x.replace(/^0/,""));let b=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),w=c2(c.clock_contrast,b),P=`font-size:${H(Number(c.clock_font_size)||28,8,100)}px;font-weight:${c.clock_font_weight||"500"};`+(c.clock_color?`color:${c.clock_color};`:"")+(c.clock_font_family?`font-family:${c.clock_font_family};`:"")+(w?`text-shadow:${w};`:"");return S`<div class="wsfc-clock-time" style=${P}>${x}</div>`};function i5(c,m,d){let A=R=>R<10?"0"+R:""+R,x=c.toLocaleDateString(d,{month:"long"}),b=c.toLocaleDateString(d,{month:"short"}),w=c.toLocaleDateString(d,{weekday:"long"}),P={YYYY:""+c.getFullYear(),YY:A(c.getFullYear()%100),MONTH:x,MON:b,WDAY:w,MM:A(c.getMonth()+1),M:""+(c.getMonth()+1),DD:A(c.getDate()),D:""+c.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,R=>P[R]!=null?P[R]:R)}L1._wfcRenderClockDate=function(c){let m=new Date,d=f1(this.hass),A=m2.find(N=>N.value===c.clock_date_format)||m2[0],x;try{x=A.pattern?i5(m,A.pattern,d):m.toLocaleDateString(d,A.opts)}catch{x=m.toDateString()}let b=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),w=c.clock_date_contrast!=null?c.clock_date_contrast:c.clock_contrast,P=c2(w,b),R=`font-size:${H(Number(c.clock_date_font_size)||12,8,100)}px;`+(c.clock_date_color?`color:${c.clock_date_color};`:"")+(P?`text-shadow:${P};`:"");return S`<div class="wsfc-clock-date" style=${R}>${x}</div>`},L1._wfcForecastConfigFor=function(c){let m=this.config&&this.config.forecast||{},d=m[`${c}_mode`]||m.mode||"simple",A=m[`${c}_extra_attribute`]!=null?m[`${c}_extra_attribute`]:m.extra_attribute;(A==="none"||A==="")&&(A=void 0);let x=m[`${c}_chart_attribute`]!=null?m[`${c}_chart_attribute`]:m.default_chart_attribute,b={...m,mode:d};return A==null?delete b.extra_attribute:b.extra_attribute=A,x!=null&&(b.default_chart_attribute=x),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(P=>{let R=m[`${c}_${P}`];R!=null&&(b[P]=R)}),{config:{...this.config,forecast:b},chart:d==="chart"}},L1._wfcRenderForecast=function(c,m){let d=c==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!d||!d.length)return O;let A=this._wfcMergeForecast(d,c),{config:x,chart:b}=this._wfcForecastConfigFor(c),w=b?S`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${x}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${c}
          .isTwiceDailyEntity=${m.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:S`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${x}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${c}
          .isTwiceDailyEntity=${m.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return S`<div class="wsfc-forecast-container" data-forecast-type=${c}>${w}</div>`};let C5="device:",Q1=c=>typeof c=="string"&&c.indexOf(C5)===0,f2=c=>Q1(c)?c.slice(C5.length):null,E0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],Y8=E0.map(c=>c.key),Q8=[{re:/feels[\s_-]?like|apparent|wind[\s_-]?chill|windchill/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}];function t7(c,m){if(!c||!m||!c.entities)return[];let d=[];for(let A in c.entities){let x=c.entities[A];x&&x.device_id===m&&d.push(A)}return d}function _9(c,m){let d=c&&c.states[m];if(!d)return null;let A=d.attributes&&d.attributes.device_class,x=(m+" "+(d.attributes&&d.attributes.friendly_name||"")).toLowerCase(),b=null;for(let P of Q8)if(P.re.test(x)){b=P.key;break}if(b||(A==="temperature"?b="temperature":A==="humidity"?b="humidity":A==="pressure"||A==="atmospheric_pressure"?b="pressure":A==="wind_speed"?b="wind_speed":A==="irradiance"?b="solar_radiation":A==="illuminance"?b="illuminance":A==="precipitation_intensity"?b="precipitation":/(^|[\s_-])temperature/.test(x)?b="temperature":/pressure/.test(x)&&(b="pressure")),!b||Y8.indexOf(b)===-1)return null;let w=0;if(/indoor|inside/.test(x)&&(w+=100),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(x)&&(w+=20),b==="pressure"){if(/deficit|vpd|vapou?r/.test(x))return null;/absolute/.test(x)&&(w+=50),/relative|sea/.test(x)&&(w-=5)}return b==="precipitation"&&(/rate/.test(x)&&(w-=5),/event|hourly|24h|total/.test(x)&&(w+=10)),{key:b,penalty:w}}function e7(c,m){let d={},A={};for(let x of t7(c,m)){let b=_9(c,x);b&&(A[b.key]==null||b.penalty<A[b.key])&&(A[b.key]=b.penalty,d[b.key]=x)}return d}function m3(c,m,d){let A={...e7(m,d)},x=c&&c.metric_sources&&c.metric_sources.device_map&&c.metric_sources.device_map[d]||{};for(let b in x)x[b]&&(A[b]=x[b]);return A}function G7(c,m){let d=c&&c.metric_sources||{};if(Array.isArray(d.sources))return d.sources.filter(R=>R&&R.ref).map(R=>({ref:R.ref,overrides:{...R.overrides||{}},disabled:!!R.disabled}));let A=[],x=d.device_map||{},b=d.custom||{},w=R=>Q1(R)?{...x[f2(R)]||{}}:{},P=d.primary||c&&c.entity;return P&&A.push({ref:P,overrides:{...w(P),...b}}),d.fallback&&d.fallback!==P&&A.push({ref:d.fallback,overrides:w(d.fallback)}),A}L1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},L1._wfcSources=function(){return G7(this.config,this.hass)},L1._wfcSlotEntityForKey=function(c,m){return c?Q1(c)?m3(this.config,this.hass,f2(c))[m]||null:c:null},L1._wfcMetricEntityChain=function(c){let m=[],d=A=>{A&&!m.includes(A)&&this.hass&&this.hass.states[A]&&m.push(A)};for(let A of this._wfcSources())A.disabled||(A.overrides&&A.overrides[c]&&d(A.overrides[c]),d(this._wfcSlotEntityForKey(A.ref,c)));return d(this.config&&this.config.entity),m},L1._wfcCurrentMetric=function(c){for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather."))try{let A=b7(this.hass,d,this.config,c);if(A!=null&&A!=="")return A}catch{}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let x=d.attributes&&d.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(d):x?`${A} ${x}`:`${A}`}catch{return x?`${A} ${x}`:`${A}`}}}}return null},L1._wfcCurrentMetricRaw=function(c){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather.")){let A=d.attributes?d.attributes[c]:null;if(A!=null&&A!=="")return A}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let x=Number(A);return isNaN(x)?A:x}}}return null},L1._wfcMergedCurrentEntity=function(c){try{if(!c||!c.attributes)return c;let m=this.config&&this.config.entity;if(!this._wfcSources().some(P=>P.ref!==m||P.overrides&&Object.keys(P.overrides).length))return c;let x={...c.attributes},b=!1,w=["temperature",...typeof E2<"u"?E2:[]];for(let P of w){let R=this._wfcCurrentMetricRaw(P);R!=null&&R!==x[P]&&(x[P]=R,b=!0)}return b?{...c,attributes:x}:c}catch{return c}},L1._wfcDetailValue=function(c,m){let d=C[c];if(!d)return null;if(d.kind==="sunrise"||d.kind==="sunset"){let A=s2(this.hass),x=d.kind==="sunrise"?A.sunrise:A.sunset;return x?y1(this.hass,x):null}try{let A=this._wfcCurrentMetric(c);return A??null}catch{return null}},L1._wfcRenderDetails=function(c,m){let d=c.details||{},A=(d.items||[]).filter(P=>P.show);if(d.chips)return this._wfcRenderDetailChips(d,A,m);let x=[];if(A.forEach(P=>{let R=C[P.key];if(!R)return;let N=this._wfcDetailValue(P.key,m);if(N==null||N==="")return;let z=P.mode==="custom",i1=z?P.icon_color:d.global_icon_color,d1=z?P.icon_size:d.global_icon_size,I=z?P.text_color:d.global_text_color,S1=z?P.text_size:d.global_text_size,W1=P.icon||R.icon||T5&&T5[P.key]||"mdi:information-outline",U1=(i1?`color:${i1};`:"")+(d1?`--mdc-icon-size:${d1}px;width:${d1}px;height:${d1}px;`:""),j1=(I?`color:${I};`:"")+(S1?`font-size:${S1}px;`:"");x.push(S`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${W1} style=${U1}></ha-icon>
          <span class="wsfc-detail-value" style=${j1}>${N}</span>
        </div>
      `)}),!x.length)return O;if((d.details_layout||"grid")==="wrap")return S`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${x}</div>
      </div>`;let b=H(parseInt(c.details.columns,10)||2,1,4),w=`grid-template-columns:repeat(${b}, minmax(0, 1fr));`;return S`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${b}" style=${w}>${x}</div>
    </div>`},L1._wfcRenderDetailChips=function(c,m,d){let A=H(Number(c.chip_scale)||1,.5,2.5),b=(c.chip_pill!=null?!!c.chip_pill:c.chip_shape!=="rounded"&&c.chip_shape!=="square")?999:c.chip_radius==null?8:Number(c.chip_radius),w=c.chip_icon_source||"auto",P=c.chip_show_icon!==!1,R=c.chip_layout||"wrap",N=Math.max(0,parseInt(c.chip_columns,10)||0),z=c.chip_text_size?`${Number(c.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${A})`,i1=c.chip_icon_size?`${Number(c.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${A})`,d1=`--wfc-chip-scale:${A};--wfc-chip-radius:${b}px;--wfc-chip-font:${z};--wfc-chip-icon-size:${i1};`+(c.chip_bg?`--wfc-chip-bg:${c.chip_bg};`:"")+(c.chip_border_color?`--wfc-chip-border:${c.chip_border_color};`:"")+(c.chip_text_color?`--wfc-chip-text:${c.chip_text_color};`:"")+(c.chip_icon_color?`--wfc-chip-icon:${c.chip_icon_color};`:"");R==="grid"&&N>0&&(d1+=`grid-template-columns:repeat(${N}, minmax(0, 1fr));`);let I=[];return m.forEach(S1=>{let W1=C[S1.key];if(!W1)return;let U1=this._wfcDetailValue(S1.key,d);if(c.chip_hide_when_off&&(U1==null||U1===""||U1==="unknown"||U1==="unavailable"))return;let j1=U1==null||U1===""?"\u2014":U1,N1=W1.label||S1.key,m1=c.chip_show_name?`${N1}: ${j1}`:j1,F1="";P&&w!=="none"&&(F1=w==="entity"&&S1.icon||W1.icon,F1=F1||T5&&T5[S1.key]||"mdi:information-outline"),I.push(S`
        <span class="wsfc-chip">
          ${F1?S`<ha-icon .icon=${F1}></ha-icon>`:O}
          <span class="wsfc-chip-text">${m1}</span>
        </span>
      `)}),I.length?S`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${R}" style=${d1}>${I}</div>
    </div>`:O},L1._wfcHourlySource=function(){let c=this._hourlyForecastEvent,m=c&&Array.isArray(c.forecast)&&c.forecast.length?c.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},L1._wfcExtraForecastEntities=function(){let c=this.config&&this.config.entity,m=new Set,d=A=>{A&&A!==c&&typeof A=="string"&&A.startsWith("weather.")&&this.hass&&this.hass.states[A]&&m.add(A)};for(let A of this._wfcSources())A.disabled||(d(A.ref),A.overrides&&Object.values(A.overrides).forEach(d));return[...m]},L1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let c=new Set(this._wfcExtraForecastEntities());for(let x of Object.keys(this.__wfcSrc))if(!c.has(x)){try{this.__wfcSrc[x].unsub&&this.__wfcSrc[x].unsub()}catch{}delete this.__wfcSrc[x]}let m=this.config.forecast_types||"both",d=m!=="daily",A=m!=="hourly";c.forEach(x=>{if(this.__wfcSrc[x])return;let b={unsub:null,hourly:null,daily:null};this.__wfcSrc[x]=b;let w=(P,R)=>{try{let N=this.hass.connection.subscribeMessage(z=>{b[R]=z&&Array.isArray(z.forecast)?z.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:P,entity_id:x},{resubscribe:!1});Promise.resolve(N).then(z=>{if(this.__wfcSrc[x]!==b){try{z&&z()}catch{}return}let i1=b.unsub;b.unsub=()=>{try{i1&&i1()}catch{}try{z&&z()}catch{}}}).catch(()=>{})}catch{}};d&&w("hourly","hourly"),A&&w(v5&&typeof v5=="function"&&v5(this.hass.states[x])||"daily","daily")})}catch{}},L1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let c of Object.keys(this.__wfcSrc))try{this.__wfcSrc[c].unsub&&this.__wfcSrc[c].unsub()}catch{}this.__wfcSrc={}}},L1._wfcSourceForecast=function(c,m){let d=this.__wfcSrc&&this.__wfcSrc[c];return d&&d[m]||null},L1._wfcMergeForecast=function(c,m){try{if(!Array.isArray(c)||!c.length)return c;let d=this.config&&this.config.entity,A=this._wfcExtraForecastEntities();if(!A.length)return c;let x={};if(A.forEach(R=>{let N=this._wfcSourceForecast(R,m);Array.isArray(N)&&N.length&&(x[R]=N.map(z=>({t:new Date(z.datetime).getTime(),fc:z})).filter(z=>!isNaN(z.t)))}),!Object.keys(x).length)return c;let b=(R,N)=>{let z=x[R];if(!z)return null;let i1=null,d1=1/0;for(let I of z){let S1=Math.abs(I.t-N);S1<d1&&(d1=S1,i1=I.fc)}return d1<=90*6e4?i1:null},w=E0.map(R=>R.key),P={};return w.forEach(R=>{P[R]=this._wfcMetricEntityChain(R).filter(N=>N===d||x[N])}),c.map(R=>{let N=new Date(R.datetime).getTime();if(isNaN(N))return R;let z=R;return w.forEach(i1=>{for(let d1 of P[i1]){if(d1===d){if(R[i1]!=null)break;continue}let I=b(d1,N);if(I&&I[i1]!=null){z===R&&(z={...R}),z[i1]=I[i1];break}}}),z})}catch{return c}},L1._wfcCloudAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let x=0;x<m.length;x++){let b=new Date(m[x].datetime);if(isNaN(b))continue;let w=Math.abs(b.getTime()-c.getTime());w<A&&(A=w,d=m[x])}return!d||A>90*6e4?null:n(d.cloud_coverage)?d.cloud_coverage/100:n(d.precipitation_probability)?d.precipitation_probability/100:null},L1._wfcForecastAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let x=0;x<m.length;x++){let b=new Date(m[x].datetime);if(isNaN(b))continue;let w=Math.abs(b.getTime()-c.getTime());w<A&&(A=w,d=m[x])}return d&&A<=90*6e4?d:null},L1._wfcSunHours=function(c){c=c||{};let m=new Date,d,A;if(c.timeframe_mode==="day")d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5);else if(c.timeframe_mode==="match_arc"){let P=s2(this.hass,m);P.sunrise&&P.sunset?(d=new Date(P.sunrise.getTime()-60*6e4),A=new Date(P.sunset.getTime()+60*6e4)):(d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5))}else{let P=H(Number(c.timeframe_hours)||24,1,72)*36e5;c.timeframe_anchor==="now_center"?(d=new Date(m.getTime()-P/2),A=new Date(m.getTime()+P/2)):(d=new Date(m),d.setMinutes(0,0,0),A=new Date(d.getTime()+P))}let x=A.getTime()-d.getTime(),b=H(Math.round(x/36e5),2,72),w=[];for(let P=0;P<=b;P++){let R=new Date(d.getTime()+x*P/b);w.push({date:R,cloud:this._wfcCloudAt(R)})}return w},L1._wfcFmtTime=function(c,m){if(!(c instanceof Date)||isNaN(c))return"--";let d=f1(this.hass);try{return m==="12"?c.toLocaleTimeString(d,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit",hour12:!1}):c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit"})}catch{return c.toTimeString().slice(0,5)}},L1._wfcSkyGradient=function(c){let m=this._wfcSunHours(c);if(m.length<2)return null;let{lat:d,lng:A}=I1(this.hass);if(!n(d)||!n(A))return null;let x=c.weather_adjust!==!1,b=m.length,w=[];for(let P=0;P<b;P++){let R=O1(G1(this.hass,m[P].date)),N=(P/(b-1)*100).toFixed(2),z=H1(R,{day_color:c.day_color,night_color:c.night_color,cloud:x?m[P].cloud:0});w.push(`${z} ${N}%`)}return{gradient:`linear-gradient(to right, ${w.join(", ")})`,hours:m}},L1._wfcSunMarker=function(c,m){if(m==null)return O;let d=c.marker_color||"var(--primary-text-color)",A=H(Number(c.marker_opacity==null?100:c.marker_opacity),0,100)/100;return S`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${d};opacity:${A};"></div>`},L1._wfcSunRiseSetMarkers=function(c,m,d,A){let{sunrise:x,sunset:b}=s2(this.hass);if(!x||!b||d<=m)return O;let w=c.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",P=H(Number(c.ss_markers_opacity==null?100:c.ss_markers_opacity),0,100)/100,R=[];return[x.getTime(),b.getTime()].forEach(N=>{if(N<m||N>d)return;let z=((N-m)/(d-m)*100).toFixed(2);R.push(S`<span class="wsfc-sunpos-ssmark" style="left:${z}%;background:${w};opacity:${P};"></span>`)}),R.length?S`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${A}">${R}</div>`:O},L1._wfcRenderSunPosition=function(c,m){let d=c.sun_position,A=this._wfcSkyGradient(d);if(!A)return O;let{gradient:x,hours:b}=A,w=b.length,P=d.times_position||"below";P==="center"&&(P="overlay");let R=d.ticks_position||"hidden",N=P!=="hidden",z=R!=="hidden",i1=H(parseInt(d.ticks_every,10)||0,0,24),d1;if(i1>0&&w>1){let q=(b[w-1].date.getTime()-b[0].date.getTime())/36e5,v1=q>0?q/(w-1):1;d1=Math.max(1,Math.round(i1/v1))}else d1=Math.max(1,Math.round((w-1)/8));let I=q=>(q/(w-1)*100).toFixed(2),S1=[];if(N)for(let q=0;q<w;q+=d1){let v1;try{v1=b[q].date.toLocaleTimeString(f1(this.hass),{hour:"numeric"})}catch{v1=b[q].date.getHours()+""}S1.push(S`<span class="wsfc-sunpos-tick" style="left:${I(q)}%">${v1}</span>`)}let W1=d.times_color||"var(--secondary-text-color, #9e9e9e)",U1=[];if(z)for(let q=0;q<w;q+=d1)U1.push(S`<span class="wsfc-sunpos-mark" style="left:${I(q)}%;background:${W1};"></span>`);let j1=Date.now(),N1=b[0].date.getTime(),m1=b[w-1].date.getTime(),S5=j1>=N1&&j1<=m1&&m1>N1?H((j1-N1)/(m1-N1)*100,0,100):null,$2=Number(d.height)||44,b5=`font-size:${Number(d.times_font_size)||11}px;font-weight:${d.times_font_weight||"400"};`+(d.times_color?`color:${d.times_color};`:""),c5=q=>S`<div class="wsfc-sunpos-ticks${q||""}" style=${b5}>${S1}</div>`,M1=q=>S`<div class="wsfc-sunpos-marks${q||""}">${U1}</div>`,R1=d.ss_markers_position||"hidden",d5=R1!=="hidden",o5=B(d),e2={};o5.forEach(q=>e2[q.key]=q.pos);let n0=e2.temps&&e2.temps!=="hidden",w5=e2.icons&&e2.icons!=="hidden",a5=d.forecast_temp_color||d.forecast_color||"",K1=d.forecast_icon_color||d.forecast_color||"",K2=d.forecast_extra_color||d.forecast_color||"",s0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),p2=d.forecast_metric_style||{},N5=q=>p2[q]&&p2[q].text_color||(q==="temps"?a5:K2),p5=q=>p2[q]&&p2[q].icon_color||K1,A3=q=>p2[q]&&p2[q].icon_size||d.forecast_icon_size,v3=q=>p2[q]&&p2[q].text_size||d.forecast_font_size||11,W5=q=>c2(p2[q]&&p2[q].contrast||"",s0),U5=q=>{let v1=N5(q),T1=W5(q);return`font-size:${Number(v3(q))||11}px;`+(v1?`color:${v1};`:"")+(T1?`text-shadow:${T1};`:"")},j5=q=>{let v1=p5(q),T1=A3(q),C1=W5(q);return(v1?`color:${v1};`:"")+(T1?`--mdc-icon-size:${T1}px;width:${T1}px;height:${T1}px;`:"")+(C1?`filter:drop-shadow(${C1});`:"")},G5=Z.some(q=>e2[q]&&e2[q]!=="hidden"),Z5=[];if(n0||w5||G5){let q=this._wfcHourlySource()||[];for(let v1 of q){let T1=new Date(v1.datetime);if(isNaN(T1))continue;let C1=T1.getTime();C1<N1||C1>m1||Z5.push({t:C1,fc:v1})}Z5.sort((v1,T1)=>v1.t-T1.t)}let q5=m1-N1,x3=q=>q5>0?((q-N1)/q5*100).toFixed(2):"0",A1=(q,v1)=>{let T1=null,C1=1/0;for(let y2 of Z5){let o2=Math.abs(y2.t-q);o2<C1&&(C1=o2,T1=y2.fc)}return C1<=v1?T1:null},A2={},g1=q=>{let v1=q==null?"":String(q);if(A2[v1])return A2[v1];let T1=[];if(Z5.length||q==="ticks"||q==="midticks"){let C1=q==="all"||q==="0",y2=q==="ticks",o2=q==="midticks";if(y2||o2){let z2=q5>0&&w>1?q5/(w-1)*d1:36e5,D0=Math.max(z2/2,90*6e4),r4=o2?d1/2:0;for(let I2=r4;I2<=w-1;I2+=d1){let i4=Math.floor(I2),F9=Math.min(w-1,Math.ceil(I2)),Ct=I2-i4,C4=b[i4].date.getTime()+(b[F9].date.getTime()-b[i4].date.getTime())*Ct;if(C4<N1||C4>m1)continue;let o4=(I2/(w-1)*100).toFixed(2);T1.push({pct:o4,fc:A1(C4,D0)})}}else if(C1)for(let z2 of Z5)T1.push({pct:x3(z2.t),fc:z2.fc});else{let z2=H(parseInt(q,10)||3,1,6),D0=null,r4=z2*36e5;for(let I2 of Z5)(D0==null||I2.t-D0>=r4-6e4)&&(T1.push({pct:x3(I2.t),fc:I2.fc}),D0=I2.t)}}return A2[v1]=T1,T1},y5=q=>{let v1=p2[q]&&p2[q].every;return v1!=null&&v1!==""?v1:d.forecast_every},L0=q=>{let v1=g1(y5("temps"));return S`<div class="wsfc-sunpos-fc${q||""}" style=${U5("temps")}>${v1.map(T1=>{let C1=T1.fc&&T1.fc.temperature!=null?Math.round(T1.fc.temperature)+"\xB0":"";return C1?S`<span class="wsfc-sunpos-fc-item" style="left:${T1.pct}%">${C1}</span>`:O})}</div>`},g3=q=>{let v1=j5("icons"),T1=g1(y5("icons"));return S`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${q||""}">${T1.map(C1=>{let y2=C1.fc&&C1.fc.condition?M(C1.fc.condition):"";return y2?S`<span class="wsfc-sunpos-fc-item" style="left:${C1.pct}%"><ha-icon .icon=${y2} style=${v1}></ha-icon></span>`:O})}</div>`},_3=!!d.forecast_metric_detail_icons,h1=(q,v1)=>{let T1=j5(q),C1=g1(y5(q));return S`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${v1||""}" style=${U5(q)}>${C1.map(y2=>{let o2=y2.fc?K(q,y2.fc):null;if(o2==null)return O;let z2=s1(q,_3);return S`<span class="wsfc-sunpos-fc-item" style="left:${y2.pct}%">${z2?S`<ha-icon .icon=${z2} style=${T1}></ha-icon>`:O}<span class="wsfc-sunpos-fc-extra-val">${o2}</span></span>`})}</div>`},D1=q=>{let v1=j5("icons"),T1=g1(y5("icons"));return S`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${q||""}" style=${U5("temps")}>${T1.map(C1=>{let y2=C1.fc&&C1.fc.condition?M(C1.fc.condition):"",o2=C1.fc&&C1.fc.temperature!=null?Math.round(C1.fc.temperature)+"\xB0":"";return!y2&&!o2?O:S`<span class="wsfc-sunpos-fc-item" style="left:${C1.pct}%">${y2?S`<ha-icon .icon=${y2} style=${v1}></ha-icon>`:O}${o2?S`<span class="wsfc-sunpos-fc-temp-val">${o2}</span>`:O}</span>`})}</div>`},v2=!!d.forecast_temp_with_icon&&n0&&w5&&e2.temps===e2.icons,C2=(q,v1)=>v2&&q==="icons"?D1(v1):q==="temps"?L0(v1):q==="icons"?g3(v1):h1(q,v1),H5=q=>o5.filter(v1=>v1.pos===q&&!(v2&&v1.key==="temps")).map(v1=>v1.key),l0=H5("overlay"),S3=[];l0.length===1?S3.push(C2(l0[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):l0.forEach((q,v1)=>{let T1=v1===0?" wsfc-sunpos-fc-ovl-top":v1===l0.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";S3.push(C2(q," wsfc-sunpos-fc-ovl"+T1))});let it=H5("above").map(q=>C2(q)),P9=H5("below").reverse().map(q=>C2(q));return S`
      <div class="wsfc-sunpos-section">
        ${it}
        ${d5&&R1==="above"?this._wfcSunRiseSetMarkers(d,N1,m1,"row"):O}
        ${z&&R==="above"?M1():O}
        ${N&&P==="above"?c5():O}
        <div class="wsfc-sunpos-bar" style="height:${$2}px;background:${x}">
          ${d5&&R1==="overlay"?this._wfcSunRiseSetMarkers(d,N1,m1,"overlay"):O}
          ${this._wfcSunMarker(d,S5)}
          ${z&&R==="overlay"?M1(" wsfc-sunpos-marks-center"):O}
          ${N&&P==="overlay"?c5(" wsfc-sunpos-ticks-center"):O}
          ${S3}
        </div>
        ${N&&P==="below"?c5():O}
        ${z&&R==="below"?M1():O}
        ${d5&&R1==="below"?this._wfcSunRiseSetMarkers(d,N1,m1,"row"):O}
        ${P9}
      </div>
    `},L1._wfcArcWindow=function(c,m,d){let A=c.timeframe_mode||"sunrise_sunset",x=Date.now();if(A==="day"){let b=new Date(x);return b.setHours(0,0,0,0),{t0:b.getTime(),t1:b.getTime()+24*36e5}}if(A==="hours"){let b=H(Number(c.timeframe_hours)||24,1,72)*36e5;if(c.timeframe_anchor==="now_center")return{t0:x-b/2,t1:x+b/2};let w=new Date(x);return w.setMinutes(0,0,0),{t0:w.getTime(),t1:w.getTime()+b}}return{t0:m,t1:d}},L1._wfcRenderSunArc=function(c,m){let d=c.sun_arc,{sunrise:A,sunset:x}=s2(this.hass);if(!A||!x)return O;let b=Date.now(),w=A.getTime(),P=x.getTime(),R=P-w,N;if(d.baseline_mode==="sky"&&c.sun_position){let h1=this._wfcSunHours(c.sun_position);h1&&h1.length>=2&&(N={t0:h1[0].date.getTime(),t1:h1[h1.length-1].date.getTime()})}N||(N=this._wfcArcWindow(d,w,P));let z=N.t0,i1=N.t1,d1=i1-z||1,I=h1=>H((h1-z)/d1,0,1),S1=100,W1=78,U1=14,j1=I(w),N1=I(P),m1=N1-j1,F1=h1=>{if(m1<=0||h1<=j1||h1>=N1)return W1;let D1=(h1-j1)/m1;return W1-(W1-U1)*(1-Math.pow(2*D1-1,2))},S5=96,$2="";for(let h1=0;h1<=S5;h1++){let D1=h1/S5;$2+=(h1===0?"M":"L")+(D1*S1).toFixed(2)+" "+F1(D1).toFixed(2)+" "}let b5=b>=z&&b<=i1,c5=b>=w&&b<=P,M1=I(b),R1=(M1*100).toFixed(2),d5=(F1(M1)/S1*100).toFixed(2),o5=Number(d.height)||90,e2=d.time_format||"auto",n0=d.tick_color||"var(--secondary-text-color, #9e9e9e)",w5=[];{let h1=new Date(z);h1.setMinutes(0,0,0),h1.getTime()<z&&h1.setTime(h1.getTime()+36e5);for(let D1=h1.getTime();D1<=i1;D1+=36e5)w5.push(I(D1))}let a5=[];d.show_arc_ticks&&w5.forEach(h1=>{if(h1<=0||h1>=1)return;let D1=(h1*S1).toFixed(2),v2=F1(h1);a5.push(E1`<line x1="${D1}" y1="${(v2-2.5).toFixed(2)}" x2="${D1}" y2="${(v2+2.5).toFixed(2)}" stroke="${n0}" stroke-width="0.6"></line>`)});let K1=[];d.show_base_ticks&&w5.forEach(h1=>{let D1=(h1*S1).toFixed(2);K1.push(E1`<line x1="${D1}" y1="${W1}" x2="${D1}" y2="${W1+3}" stroke="${n0}" stroke-width="0.6"></line>`)});let K2=d.sunrise_sunset_ticks||"none",s0=K2==="arc"||K2==="both",p2=K2==="base"||K2==="both",N5=[];w>=z&&w<=i1&&N5.push(I(w)),P>=z&&P<=i1&&N5.push(I(P)),s0&&N5.forEach(h1=>{let D1=(h1*S1).toFixed(2),v2=F1(h1);a5.push(E1`<line x1="${D1}" y1="${(v2-4.5).toFixed(2)}" x2="${D1}" y2="${(v2+4.5).toFixed(2)}" stroke="${n0}" stroke-width="1.4"></line>`)}),p2&&N5.forEach(h1=>{let D1=(h1*S1).toFixed(2);K1.push(E1`<line x1="${D1}" y1="${(W1-2).toFixed(2)}" x2="${D1}" y2="${W1+6}" stroke="${n0}" stroke-width="1.4"></line>`)});let p5=O;if(b5){let h1="wsfc-sunarc-sun"+(c5?"":" wsfc-sunarc-sun-night"),D1=`left:${R1}%;top:${d5}%;`;if(!c5&&d.night_moon){let v2=d.moon_icon||"mdi:weather-night";p5=S`<ha-icon class="${h1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${v2} style=${D1}></ha-icon>`}else d.sun_icon?p5=S`<ha-icon class="${h1} wsfc-sunarc-sun-icon" .icon=${d.sun_icon} style=${D1}></ha-icon>`:p5=S`<span class="${h1} wsfc-sunarc-sun-dot" style=${D1}></span>`}let A3=`font-size:${Number(d.time_font_size)||13}px;font-weight:${d.time_font_weight||"600"};`+(d.time_color?`color:${d.time_color};`:""),v3=`font-size:${Number(d.caption_font_size)||11}px;font-weight:${d.caption_font_weight||"400"};`+(d.caption_color?`color:${d.caption_color};`:""),W5=d.show_times!==!1,U5=d.show_captions!==!1,j5=!!d.show_ss_icons,G5=d.ss_icon_position||"left",Z5=(d.ss_icon_color?`color:${d.ss_icon_color};`:"")+(d.ss_icon_size?`--mdc-icon-size:${d.ss_icon_size}px;width:${d.ss_icon_size}px;height:${d.ss_icon_size}px;`:""),q5=h1=>{if(!j5)return O;let D1=h1==="sunrise"?d.sunrise_icon||"mdi:weather-sunset-up":d.sunset_icon||"mdi:weather-sunset-down";return S`<ha-icon class="wsfc-sunarc-ssicon" .icon=${D1} style=${Z5}></ha-icon>`},x3=(h1,D1,v2,C2)=>{let H5=S`<div class="wsfc-sunarc-endtext">
        ${W5?S`<div class="wsfc-sunarc-time" style=${A3}>${h1}</div>`:O}
        ${U5?S`<div class="wsfc-sunarc-cap" style=${v3}>${D1}</div>`:O}
      </div>`,l0=q5(C2);return S`<div class="wsfc-sunarc-end${v2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${G5==="above"?"column":G5==="below"?"column-reverse":G5==="right"?"row-reverse":"row"};">${l0}${H5}</div>
      </div>`},A1=W5||U5||j5,A2=A1?S`<div class="wsfc-sunarc-labels">
          ${x3(this._wfcFmtTime(A,e2),"sunrise",!1,"sunrise")}
          ${x3(this._wfcFmtTime(x,e2),"sunset",!0,"sunset")}
        </div>`:O,g1=d.labels_position;g1==="below"||g1==null?g1=0:g1==="above"?g1=100:g1==="mid"?g1=50:g1=H(Number(g1),0,100);let y5=d.baseline_mode==="sky"&&c.sun_position,L0=y5?this._wfcRenderSunPosition(c,m):O,g3=y5&&L0!==O?O:E1`<line class="wsfc-sunarc-horizon" x1="0" y1="${W1}" x2="${S1}" y2="${W1}"></line>`,_3=S`
      <div class="wsfc-sunarc-svg-wrap" style="height:${o5}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${S1} 100" preserveAspectRatio="none">
          ${g3}
          <path class="wsfc-sunarc-path" d=${$2.trim()}></path>
          ${a5}
          ${K1}
        </svg>
        ${p5}
        ${A1&&g1>0&&g1<100?S`<div class="wsfc-sunarc-overlay" style="top:${(100-g1).toFixed(1)}%;transform:translateY(-50%);">${A2}</div>`:O}
      </div>
    `;return S`
      <div class="wsfc-sunarc-section">
        ${A1&&g1>=100?A2:O}
        ${_3}
        ${y5&&L0!==O?S`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-W1)/100)*o5).toFixed(1)}px;">${L0}</div>`:O}
        ${A1&&g1<=0?A2:O}
      </div>
    `},L1._wfcStyleTag=function(){return S`<style>
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
    </style>`};let G=T0.prototype,S9=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),r7={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},B0=null;function b9(){return B0||(B0=new Set,Object.values(k9).forEach(c=>c.forEach(m=>B0.add(m)))),B0}function w9(c,m){let d=[];return c.forEach(A=>{if(!m.has(A.name))if(A.schema){let x=w9(A.schema,m);x.length&&d.push({...A,schema:x})}else d.push(A)}),d}function h3(c){let m=b9(),d=new Set([...m,...S9]);c=w9(c,d);let A=new Map,x=[];c.forEach(N=>{S9.has(N.name)||(N.type==="expandable"?x.push(N):A.set(N.name,N))});let b=N=>N.map(z=>A.get(z)).filter(Boolean),w=(N,z,i1)=>{let d1=b(i1);return d1.length?[{name:N,type:"expandable",flatten:!0,icon:z,schema:d1}]:[]},P=N=>x.find(z=>z.name===N),R=[];{let N=P("attribute_entities");N&&R.push(r7.attribute_entities?{...N,icon:r7.attribute_entities}:N)}return R}let cr=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],K8=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],Z9=["tap_action","hold_action","double_tap_action"],y9=["show_condition_effects"],O9=[],k9={current:["current.show_attributes"],hourly:[],daily:[]},T9={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},X8="Weather Flex sections";G.render=function(){if(!this.hass||!this._config)return O;let c=b8(this._config),m=this._getSelectedAttributes(c),d=this._schema(this.localize.bind(this),m,c["forecast.mode"]),A=h3(d),x=w=>T9[w.name]||this._computeLabel(w)||w.name,b=this._wfcAccordionEnabled();return S`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${X8}</span>
          <span class="wsfc-ed-ver">build ${r}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${b}
            @change=${w=>this._wfcSetAccordion(w.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>
      ${A.length?S`<ha-form
            .hass=${this.hass}
            .data=${c}
            .schema=${A}
            .computeLabel=${x}
            .computeHelper=${w=>this._wfcHelper(w)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:O}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},G._wfcCardAppearancePanel=function(){let c=L2(this._config).card||{},m="card";return S`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${r7.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(y9)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!c.border_enabled,d=>this._wfcToggleSecField(m,"border_enabled",d))}
            ${c.border_enabled?S`
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
                  </div>`:O}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",c.bg_color,d=>this._wfcSetSecField(m,"bg_color",d.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!c.glow_enabled,d=>this._wfcToggleSecField(m,"glow_enabled",d))}
            ${c.glow_enabled?S`
                  ${this._wfcColorField("Glow color",c.glow_color,d=>this._wfcSetSecField(m,"glow_color",d.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((c.glow_intensity==null?1:c.glow_intensity)*100),100,"glow_intensity",d=>this._wfcSetSecField(m,"glow_intensity",H((parseInt(d.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",c.glow_borders_only!==!1,d=>this._wfcToggleSecField(m,"glow_borders_only",d))}`:O}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!c.shadow_enabled,d=>this._wfcToggleSecField(m,"shadow_enabled",d))}
            ${c.shadow_enabled?S`
                  ${this._wfcColorField("Shadow color",c.shadow_color,d=>this._wfcSetSecField(m,"shadow_color",d.target.value))}
                  ${this._wfcNumField(m,"shadow_x","Offset X","px",c.shadow_x,0)}
                  ${this._wfcNumField(m,"shadow_y","Offset Y","px",c.shadow_y,4)}
                  ${this._wfcNumField(m,"shadow_blur","Blur","px",c.shadow_blur,16)}
                  ${this._wfcNumField(m,"shadow_spread","Spread","px",c.shadow_spread,0)}
                  ${this._wfcNumField(m,"shadow_opacity","Opacity","%",c.shadow_opacity,35)}`:O}
          </div>
        </div>
      </details>
    `};let q7=4;G._wfcEdSources=function(){return G7(this._config,this.hass)},G._wfcCommitSources=function(c){let m=c.filter(N=>N&&N.ref).map(N=>{let z={};for(let d1 in N.overrides||{})N.overrides[d1]&&(z[d1]=N.overrides[d1]);let i1={ref:N.ref};return Object.keys(z).length&&(i1.overrides=z),N.disabled&&(i1.disabled=!0),i1}),d={...this._config.metric_sources||{}};delete d.primary,delete d.fallback,delete d.custom,delete d.device_map,m.length?d.sources=m:delete d.sources;let A={...this._config,metric_sources:d},x=N=>{let z=this.hass&&this.hass.states[N],i1=z&&z.attributes&&z.attributes.supported_features;return typeof i1=="number"&&(i1&7)!==0},b=N=>N.map(z=>z.ref).filter(z=>typeof z=="string"&&z.startsWith("weather.")),w=b(m.filter(N=>!N.disabled)),P=b(m),R=w.find(x)||w[0]||P.find(x)||P[0];R&&(A.entity=R),Object.keys(d).length===0&&delete A.metric_sources,i2(this,"config-changed",{config:A})},G._wfcSetSourceRef=function(c,m){let d=this._wfcEdSources();d[c]&&(m?d[c]={ref:m,overrides:d[c].overrides||{}}:d.splice(c,1),this._wfcCommitSources(d))},G._wfcAddSource=function(c){if(!c)return;let m=this._wfcEdSources();m.length>=q7||(m.push({ref:c,overrides:{}}),this._wfcCommitSources(m))},G._wfcMoveSource=function(c,m){let d=this._wfcEdSources(),A=c+m;if(c<0||A<0||A>=d.length)return;let x=d[c];d[c]=d[A],d[A]=x,this._wfcCommitSources(d)},G._wfcRemoveSource=function(c){let m=this._wfcEdSources();c<0||c>=m.length||(m.splice(c,1),this._wfcCommitSources(m))},G._wfcToggleSourceDisabled=function(c){let m=this._wfcEdSources();m[c]&&(m[c].disabled=!m[c].disabled,this._wfcCommitSources(m))},G._wfcSetSourceOverride=function(c,m,d){let A=this._wfcEdSources();if(!A[c])return;let x={...A[c].overrides||{}};d?x[m]=d:delete x[m],A[c].overrides=x,this._wfcCommitSources(A)},G._wfcLiveValue=function(c,m){let d=this.hass&&this.hass.states[c];if(!d)return"";let A,x;return c.startsWith("weather.")?(A=d.attributes?d.attributes[m]:null,x=d.attributes&&d.attributes[m+"_unit"]):(A=d.state,x=d.attributes&&d.attributes.unit_of_measurement),A==null||A===""||A==="unknown"||A==="unavailable"?"":x?`${A} ${x}`:`${A}`},G._wfcAvailableMetrics=function(){let c=new Set;if(!this.hass)return c;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let A of this._wfcEdSources())if(!A.disabled)if(A.overrides&&Object.keys(A.overrides).forEach(x=>{c.add(x),m.add(A.overrides[x])}),Q1(A.ref)){let x=m3(this._config,this.hass,f2(A.ref));Object.keys(x).forEach(b=>{c.add(b),m.add(x[b])})}else A.ref&&m.add(A.ref);m.forEach(A=>{let x=this.hass.states[A];x&&x.attributes&&Object.keys(x.attributes).forEach(b=>c.add(b))});let d=A=>{if(Array.isArray(A))for(let x of A)x&&Object.keys(x).forEach(b=>c.add(b))};return d(this._hourlyForecastData),d(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(A=>{A&&(d(A.hourly),d(A.daily))}),c};function J8(c){return String(c).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let tt={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function Y7(c){return tt[c]||J8(c)}G._wfcMetricOptions=function(c,m){let d=this._wfcAvailableMetrics(),A=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(c||[]).forEach(x=>{let b=Y7(x);A.push({value:x,label:d.has(x)?b:`${b} (unavailable)`})}),A},G._wfcSourceMappingEditor=function(c,m){let d=m.ref,A=m.overrides||{},x=Q1(d),b=x?f2(d):null,w=x?e7(this.hass,b):{},P=z=>{if(x)return w[z]||"";if(!d)return"";if(d.startsWith("weather.")){let i1=this.hass&&this.hass.states[d];return i1&&i1.attributes&&i1.attributes[z]!=null?d:""}return""},R=x?{include_entities:t7(this.hass,b)}:{},N=z=>{let i1=z.key,d1=A[i1]||P(i1),I=!!A[i1],S1=d1?this._wfcLiveValue(d1,i1):"",W1=[{name:"e",selector:{entity:R}}],U1=I?" (override)":d1?"":" \u2014 none";return S`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:d1}}
            .schema=${W1}
            .computeLabel=${()=>z.label+U1}
            @value-changed=${j1=>this._wfcSetSourceOverride(c,i1,j1.detail&&j1.detail.value&&j1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${S1||"\u2014"}</span>
        </div>
      `};return S`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${x?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${x?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${E0.map(N)}
        </div>
      </details>
    `},G._wfcSourceSummaryList=function(c){let m=c.ref,d=c.overrides||{},A=Q1(m),x=A?e7(this.hass,f2(m)):{},b=P=>{if(d[P])return d[P];if(A)return x[P]||"";if(m&&m.startsWith("weather.")){let R=this.hass&&this.hass.states[m];return R&&R.attributes&&R.attributes[P]!=null?m:""}return""},w=[];return E0.forEach(P=>{let R=b(P.key);if(!R)return;let N=this._wfcLiveValue(R,P.key);w.push(S`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${P.label}</span>
          <span class="wsfc-cond-ent" title=${R}>${R}</span>
          <span class="wsfc-cond-val">${N||"\u2014"}</span>
        </div>
      `)}),w.length?S`<div class="wsfc-cond-list">${w}</div>`:O},G._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},G._wfcToggleSrcMap=function(c){let m=this._wfcSrcMapOpen();m.has(c)?m.delete(c):m.add(c),this.requestUpdate&&this.requestUpdate()},G._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},G._wfcSourceMetricCount=function(c){let m=c.ref,d=c.overrides||{},A=new Set(Object.keys(d).filter(x=>d[x]));if(Q1(m))Object.keys(m3(this._config,this.hass,f2(m))).forEach(x=>A.add(x));else if(m&&m.startsWith("weather.")){let x=this.hass&&this.hass.states[m];x&&x.attributes&&E0.forEach(b=>{x.attributes[b.key]!=null&&A.add(b.key)})}return A.size},G._wfcSourceRow=function(c,m,d){let A=c.ref,x=Q1(A),b=this._config.entity,w=x&&this.hass&&this.hass.devices&&this.hass.devices[f2(A)],P=x?w&&(w.name_by_user||w.name)||f2(A):A,R=x?"Device":A&&A.startsWith("weather.")?"Weather":"Sensor",N=x?"mdi:access-point":A&&A.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",z=!x&&A&&A.startsWith("weather."),i1=z&&A===b,d1=this._wfcSrcMapOpen().has(A),I=!!c.disabled,S1=this._wfcSourceMetricCount(c),W1=`${S1} value${S1===1?"":"s"} mapped`,U1=i1?S`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:z?S`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:S`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,j1="",N1=A&&!x?this.hass&&this.hass.states[A]:null;if(x)j1=S1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!N1)j1=`\u26A0 Entity not found: ${A}`;else if(N1.state==="unavailable"||N1.state==="unknown")j1=`\u26A0 Currently ${N1.state}.`;else if(z&&!i1){let m1=N1.attributes&&N1.attributes.supported_features;j1=typeof m1=="number"&&(m1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else z||(j1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return S`
      <div class="wsfc-src-row ${I?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${N}></ha-icon>
          <span class="wsfc-src-name">${P} <span class="wsfc-src-type">${R}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===d-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${I?"mdi:eye-off":"mdi:eye"} title=${I?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${d1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(A)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${U1}<span class="wsfc-src-count">${W1}</span>${I?S`<span class="wsfc-src-count">· hidden</span>`:O}</div>
        ${j1?S`<div class="wsfc-src-detail">${j1}</div>`:O}
        ${this._wfcSourceSummaryList(c)}
        ${d1?this._wfcSourceMappingEditor(m,c):O}
      </div>
    `},G._wfcWeatherSourcesPanel=function(){let c=this._wfcEdSources(),m=c.some(w=>w.ref&&!Q1(w.ref)&&w.ref.startsWith("weather.")),d=c.length>=q7,A=!!this.__wfcAddSourceOpen&&!d,x=S`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${w=>{let P=w.detail&&w.detail.value&&w.detail.value.e;P&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(P))}}
      ></ha-form>`,b=S`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${w=>{let P=w.detail&&w.detail.value&&w.detail.value.d;P&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(C5+P))}}
      ></ha-form>`;return S`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${d?S`<p class="wsfc-hint">Maximum of ${q7} sources reached. Remove one to add another.</p>`:S`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${A?"mdi:close":"mdi:plus"}></ha-icon>${A?"Cancel":"Add Source"}
              </div>
              ${A?S`<div class="wsfc-add-pickers">${x}${b}</div>`:O}
            `}
          ${c.length?c.map((w,P)=>this._wfcSourceRow(w,P,c.length)):S`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!m&&c.length?S`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:O}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},G._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},G._wfcHeadlineTempRow=function(){let c=this._config.current&&this._config.current.temperature_entity,m=c||"",d="";if(!m)for(let b of this._wfcEdSources()){if(b.disabled)continue;let w=this._wfcSlotEntityForKeyEd(b,"temperature");if(w&&this.hass&&this.hass.states[w]){m=w;break}}m?d=this.hass&&this.hass.states[m]&&this.hass.states[m].attributes&&this.hass.states[m].attributes.friendly_name||m:d="\u2014 none available \u2014";let A=m?this._wfcLiveValue(m,"temperature"):"",x=!!this.__wfcHeadlineEdit;return S`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${d}${c?S` <span class="wsfc-src-type">override</span>`:O}</span>
          ${A?S`<span class="wsfc-srcmap-live">${A}</span>`:O}
          <ha-icon class="wsfc-ico-btn ${x?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${x?S`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:O}
      </div>
    `},G._wfcSlotEntityForKeyEd=function(c,m){if(c.overrides&&c.overrides[m])return c.overrides[m];let d=c.ref;if(!d)return null;if(Q1(d))return m3(this._config,this.hass,f2(d))[m]||null;if(d.startsWith("weather.")){let A=this.hass&&this.hass.states[d];return A&&A.attributes&&A.attributes[m]!=null?d:null}return null},G._wfcSetForecastTypes=function(c,m){let d=c&&m?"both":c?"hourly":m?"daily":"both",A={...this._config,forecast_types:d};i2(this,"config-changed",{config:A})},G._wfcAdvancedPanel=function(){let c=this._config.forecast_types||"both",m=c==="both"||c==="hourly",d=c==="both"||c==="daily";return S`
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
          ${this._wfcStockFormFor(O9)}
        </div>
      </details>
    `},G._wfcUserActionsPanel=function(){let c=this._wfcStockFormFor(K8),m=this._wfcStockFormFor(Z9),d=this._config.forecast||{};return S`
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
    `};let et=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];G._wfcForecastTypeControls=function(c){let m=this._config.forecast||{},d=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],A=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],x=N=>m[`${N}_mode`]||m.mode||"simple",b=N=>(m[`${N}_extra_attribute`]!=null?m[`${N}_extra_attribute`]:m.extra_attribute)||"none",w=N=>(m[`${N}_chart_attribute`]!=null?m[`${N}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",P=(N,z,i1)=>{let d1=m[`${N}_${z}`];if(d1!=null)return!!d1;let I=m[z];return I!=null?!!I:i1},R=x(c)==="chart";return S`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${c}_mode`,"Display mode",d,x(c),"simple")}
        ${this._wfcForecastSelect(`${c}_extra_attribute`,"Extra metric",A,b(c),"none")}
      </div>
      ${R?S`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${c}_chart_attribute`,"Chart metric",et,w(c),"temperature_and_precipitation")}
          </div>`:O}
      ${this._wfcConfigCheckbox(`forecast.${c}_show_sun_times`,"Show sunrise & sunset times",P(c,"show_sun_times",!0),!0)}
      ${R?S`
            ${this._wfcConfigCheckbox(`forecast.${c}_use_color_thresholds`,"Use color thresholds",P(c,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${c}_show_attribute_selector`,"Show metric selector",P(c,"show_attribute_selector",!1),!1)}`:O}
    `},G._wfcHelper=function(c){let m=this._computeHelper?this._computeHelper(c):void 0;return typeof m=="string"&&(m=m.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),m},G._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},G._wfcSetAccordion=function(c){let m=this._wfcState();m.editor_accordion=!!c,this._wfcCommit(m),this._wfcApplyAccordion()},G._wfcApplyAccordion=function(){let c=this.renderRoot||this.shadowRoot||this;!c||!c.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,c.addEventListener("toggle",m=>{let d=m.target;if(!d||!d.classList||!d.classList.contains("wsfc-panel")||(this._wfcRememberOpen(d),!d.open)||!this._wfcAccordionEnabled())return;(c.querySelectorAll?c.querySelectorAll("details.wsfc-panel"):[]).forEach(x=>{x!==d&&x.open&&(x.open=!1)})},!0))},G._wfcRememberOpen=function(c){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let m=this._wfcPanelKey(c);m&&(c.open?this.__wfcOpenPanels.add(m):this.__wfcOpenPanels.delete(m))},G._wfcPanelKey=function(c){let m=c.querySelector&&c.querySelector(".wsfc-panel-title");return m?(m.textContent||"").trim():""},G._wfcRestoreOpen=function(){let c=this.renderRoot||this.shadowRoot||this;!c||!c.querySelectorAll||!this.__wfcOpenPanels||c.querySelectorAll("details.wsfc-panel").forEach(m=>{let d=this._wfcPanelKey(m);d&&this.__wfcOpenPanels.has(d)&&(m.open=!0)})},G.updated=function(c){try{let m=Object.getPrototypeOf(G);m&&typeof m.updated=="function"&&m.updated.call(this,c)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},G._wfcEditorStyle=function(){return S`<style>
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
    </style>`};let rt="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";G._wfcCustomMetricsBody=function(){let c=Y3(this._config.current&&this._config.current.show_attributes);return S`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${c.map((m,d)=>this._renderCustomAttributeRow(m,d))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${rt}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},G._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let Q7={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function f3(c){if(c&&c.detail&&c.detail.value!==void 0)return c.detail.value;let m=c&&c.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function Q2(c){let m=c&&c.target;return m&&typeof m.checked=="boolean"?m.checked:!!(c&&c.detail&&c.detail.value)}G._wfcState=function(){return JSON.parse(JSON.stringify(L2(this._config)))},G._wfcCommit=function(c){let m={...this._config,wfc:c};i2(this,"config-changed",{config:m})},G._wfcResetSection=function(c){let d=w2(this._config)[c];if(!d)return;let A=this._wfcState(),x=!!(A[c]&&A[c].show);A[c]={...JSON.parse(JSON.stringify(d)),show:x},this._wfcCommit(A)},G._wfcMoveSection=function(c,m){let d=this._wfcState(),A=d.order.indexOf(c),x=A+m;if(A<0||x<0||x>=d.order.length)return;let b=d.order[A];d.order[A]=d.order[x],d.order[x]=b,this._wfcCommit(d)},G._wfcCommitMetrics=function(c,m){let d=this._wfcState();d[c]||(d[c]={});let A=B(d[c]),x=A.map(w=>w.key),b={};A.forEach(w=>b[w.key]=w.pos),m(x,b),d[c].forecast_metric_order=x,d[c].forecast_metric_pos=b,delete d[c].forecast_temps,delete d[c].forecast_icons,delete d[c].forecast_extra,delete d[c].forecast_row_order,delete d[c].forecast_stack,this._wfcCommit(d)},G._wfcMoveMetric=function(c,m,d){this._wfcCommitMetrics(c,A=>{let x=A.indexOf(m),b=x+d;if(x<0||b<0||b>=A.length)return;let w=A[x];A[x]=A[b],A[b]=w})},G._wfcSetMetricPos=function(c,m,d){this._wfcCommitMetrics(c,(A,x)=>{x[m]=d})},G._wfcSetMetricStyle=function(c,m,d,A){let x=this._wfcState();x[c]||(x[c]={});let b={...x[c].forecast_metric_style||{}},w={...b[m]||{}};A==null||A===""?delete w[d]:w[d]=A,Object.keys(w).length?b[m]=w:delete b[m],x[c].forecast_metric_style=b,this._wfcCommit(x)},G._wfcMetricsOrder=function(c,m){let d=B(m),A=m.forecast_metric_style||{};return d.map((x,b,w)=>{let P=A[x.key]||{},R=x.key==="icons",N=x.key!=="temps";return S`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${F[x.key]||x.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${z=>z.stopPropagation()}
              @change=${z=>this._wfcSetMetricPos(c,x.key,z.target.value)}
            >
              ${D.map(z=>S`<option value=${z.value} ?selected=${z.value===x.pos}>${z.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${b===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${z=>{z.preventDefault(),z.stopPropagation(),this._wfcMoveMetric(c,x.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${b===w.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${z=>{z.preventDefault(),z.stopPropagation(),this._wfcMoveMetric(c,x.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${z=>this._wfcSetMetricStyle(c,x.key,"every",z.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(z=>({value:String(z),label:z+(z>1?" hours":" hour")}))].map(z=>S`<option value=${z.value} ?selected=${z.value===(P.every!=null?String(P.every):"")}>${z.label}</option>`)}
              </select>
            </label>
            ${N?S`
                  ${this._wfcColorField("Icon color",P.icon_color,z=>this._wfcSetMetricStyle(c,x.key,"icon_color",z.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",P.icon_size,z=>this._wfcSetMetricStyle(c,x.key,"icon_size",parseFloat(f3(z))||""))}`:O}
            ${R?O:S`
                  ${this._wfcColorField("Text color",P.text_color,z=>this._wfcSetMetricStyle(c,x.key,"text_color",z.target.value))}
                  ${this._wfcPlainNum("Font size (px)",P.text_size,z=>this._wfcSetMetricStyle(c,x.key,"text_size",parseFloat(f3(z))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${z=>this._wfcSetMetricStyle(c,x.key,"contrast",z.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(z=>S`<option value=${z.value} ?selected=${z.value===(P.contrast||"")}>${z.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},G._wfcToggleSection=function(c,m){let d=this._wfcState();d[c]||(d[c]={}),d[c].show=Q2(m),this._wfcCommit(d)},G._wfcToggleSectionShow=function(c){let m=this._wfcState();m[c]||(m[c]={}),m[c].show=!m[c].show,this._wfcCommit(m)},G._wfcSetSecNum=function(c,m,d){let A=this._wfcState(),x=parseFloat(f3(d));A[c][m]=isNaN(x)?void 0:x,this._wfcCommit(A)},G._wfcSetSecField=function(c,m,d){let A=this._wfcState();A[c]||(A[c]={}),A[c][m]=d,this._wfcCommit(A)},G._wfcToggleSecField=function(c,m,d){this._wfcSetSecField(c,m,Q2(d))},G._wfcSetForecastNum=function(c,m){let d={...this._config.forecast||{}};m==null||m<=0?delete d[c]:d[c]=m,i2(this,"config-changed",{config:{...this._config,forecast:d}})},G._wfcSetConfigNum=function(c,m,d){let[A,x]=c.split("."),b={...this._config},w={...b[A]||{}},P=m==null||m===""||isNaN(Number(m))?null:Number(m);P==null?delete w[x]:w[x]=P,b[A]=w,i2(this,"config-changed",{config:b})},G._wfcConfigSlider=function(c,m,d,A,x){let b=R0(c,d||""),w=A!=null?H(Number(A),b.min,b.max):Number(x);return this._wfcSliderTpl(m,d,b,w,P=>this._wfcSetConfigNum(c,P.target.value,x))},G._wfcSetConfigStr=function(c,m,d){let A={...this._config};if(c.indexOf(".")===-1)d&&(m==null||m==="")?delete A[c]:A[c]=m;else{let[x,b]=c.split("."),w={...A[x]||{}};d&&(m==null||m==="")?delete w[b]:w[b]=m,A[x]=w}i2(this,"config-changed",{config:A})},G._wfcConfigSelect=function(c,m,d,A,x,b){let w=String(A??x);return S`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${P=>this._wfcSetConfigStr(c,P.target.value,b)}>
          ${d.map(P=>S`<option value=${String(P.value)} ?selected=${String(P.value)===w}>${P.label}</option>`)}
        </select>
      </label>
    `},G._wfcSetConfigBool=function(c,m,d){let A={...this._config},x=(b,w)=>{m===!!d?delete b[w]:b[w]=m};if(c.indexOf(".")===-1)x(A,c);else{let[b,w]=c.split("."),P={...A[b]||{}};x(P,w),A[b]=P}i2(this,"config-changed",{config:A})},G._wfcConfigCheckbox=function(c,m,d,A){let x=d==null?!!A:!!d;return this._wfcCheckbox(m,x,b=>this._wfcSetConfigBool(c,b.target.checked,A))},G._wfcConfigText=function(c,m,d,A){return S`
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
    `},G._wfcSetForecastField=function(c,m){let d={...this._config.forecast||{}};m==null||m===""?delete d[c]:d[c]=m,i2(this,"config-changed",{config:{...this._config,forecast:d}})},G._wfcForecastSelect=function(c,m,d,A,x){let b=String(A??x);return S`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${w=>this._wfcSetForecastField(c,w.target.value)}>
          ${d.map(w=>S`<option value=${String(w.value)} ?selected=${String(w.value)===b}>${w.label}</option>`)}
        </select>
      </label>
    `},G._wfcNumSecField=function(c,m,d,A){let x=parseFloat(f3(d));this._wfcSetSecField(c,m,isNaN(x)?A:x)},G._wfcMoveDetail=function(c,m){let d=this._wfcState(),A=d.details.items,x=A.findIndex(P=>P.key===c),b=x+m;if(x<0||b<0||b>=A.length)return;let w=A[x];A[x]=A[b],A[b]=w,this._wfcCommit(d)},G._wfcToggleDetail=function(c,m){let d=this._wfcState(),A=d.details.items.find(x=>x.key===c);A&&(A.show=Q2(m)),this._wfcCommit(d)},G._wfcToggleDetailShow=function(c){let m=this._wfcState(),d=m.details.items.find(A=>A.key===c);d&&(d.show=!d.show,this._wfcCommit(m))},G._wfcSetDetailValue=function(c,m,d){let A=this._wfcState(),x=A.details.items.find(b=>b.key===c);x&&(x[m]=d),this._wfcCommit(A)},G._wfcSetDetail=function(c,m,d){let A=this._wfcState(),x=A.details.items.find(w=>w.key===c);if(!x)return;let b=f3(d);if(m==="icon_size"||m==="text_size"){let w=parseFloat(b);b=isNaN(w)?void 0:w}else(b===""||b==null)&&(b=void 0);x[m]=b,this._wfcCommit(A)},G._wfcColorField=function(c,m,d){return S`
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
    `},G._wfcSelect=function(c,m,d,A,x,b){let w=String(x??b);return S`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${d}</span>
        <select
          class="wsfc-native-select"
          @change=${P=>this._wfcSetSecField(c,m,P.target.value)}
        >
          ${A.map(P=>S`<option value=${String(P.value)} ?selected=${String(P.value)===w}>${P.label}</option>`)}
        </select>
      </label>
    `};let l1={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function R0(c,m){return/chip_scale/.test(c)?{min:50,max:250,step:5}:/chip_columns/.test(c)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(c)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(c)?{min:0,max:48,step:1}:/header_icon_size/.test(c)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(c)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(c)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(c)?{min:-40,max:40,step:1}:/shadow_blur/.test(c)?{min:0,max:80,step:1}:/border_radius/.test(c)?{min:0,max:48,step:1}:/border_width/.test(c)?{min:0,max:12,step:1}:/hourly_slots/.test(c)?{min:0,max:48,step:1}:/daily_slots/.test(c)?{min:0,max:14,step:1}:/labels_position|opacity/.test(c)?{min:0,max:100,step:1}:/indent/.test(c)?{min:0,max:120,step:2}:/height/.test(c)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(c)?{min:8,max:100,step:1}:/font_size|_size$/.test(c)?{min:8,max:48,step:1}:/_width$/.test(c)?{min:1,max:12,step:1}:/_length$/.test(c)?{min:5,max:100,step:5}:/hourly_group_size/.test(c)?{min:1,max:4,step:1}:/temperature_precision/.test(c)?{min:0,max:2,step:1}:/hours/.test(c)?{min:1,max:48,step:1}:l1[m]||l1.px}G._wfcNumField=function(c,m,d,A,x,b){let w=R0(m,A||""),P=x!=null?Number(x):Number(b);return this._wfcSliderTpl(d,A,w,P,R=>this._wfcNumSecField(c,m,R,b))},G._wfcPlainSlider=function(c,m,d,A,x,b){let w=R0(x||"",m||""),P=d!=null?Number(d):Number(A);return this._wfcSliderTpl(c,m,w,P,b)},G._wfcSlotSlider=function(c,m,d){let A=R0(m,""),x=d!=null?H(Number(d),A.min,A.max):0,b=w=>Number(w)<=0?"All":String(w);return S`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(x)}
          @input=${w=>{let P=w.target.closest(".wsfc-slider-row"),R=P&&P.querySelector(".wsfc-slider-num");R&&(R.textContent=b(w.target.value))}}
          @change=${w=>this._wfcSetForecastNum(m,parseInt(w.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${b(x)}></span></span>
      </div>
    `},G._wfcAutoSizeField=function(c,m,d){let A=R0(m,""),x=this._wfcState()[c]||{},b=H(parseInt(x[m],10)||0,A.min,A.max),w=P=>Number(P)<=0?"Auto":`${P}px`;return S`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(b)}
          @input=${P=>{let R=P.target.closest(".wsfc-slider-row"),N=R&&R.querySelector(".wsfc-slider-num");N&&(N.textContent=w(P.target.value))}}
          @change=${P=>this._wfcSetSecField(c,m,parseInt(P.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${w(b)}></span></span>
      </div>
    `},G._wfcSliderTpl=function(c,m,d,A,x){let b=m||"";return S`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${d.min}
          max=${d.max}
          step=${d.step}
          .value=${String(A)}
          @input=${w=>{let P=w.target.closest(".wsfc-slider-row"),R=P&&P.querySelector(".wsfc-slider-num");R&&(R.textContent=w.target.value)}}
          @change=${x}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(A)}></span>${b}</span>
      </div>
    `},G._wfcCheckbox=function(c,m,d){return S`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!m} @change=${d} />
        <span>${c}</span>
      </label>
    `},G._wfcGroup=function(c){return c?S`<div class="wsfc-group-div"><span class="wsfc-group-label">${c}</span></div>`:S`<div class="wsfc-group-div"></div>`},G._wfcSubPanel=function(c,m){return S`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${c}</span></summary>
        <div class="wsfc-subpanel-body">${m}</div>
      </details>
    `},G._wfcFlushControls=function(c,m){return S`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",m.flush_edges,d=>this._wfcToggleSecField(c,"flush_edges",d))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",m.flush_top,d=>this._wfcToggleSecField(c,"flush_top",d))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",m.flush_bottom,d=>this._wfcToggleSecField(c,"flush_bottom",d))}
    `},G._wfcTextControls=function(c,m,d,A){let x=this._wfcState()[c]||{};return S`
      <div class="wsfc-sub-title">${d}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(c,`${m}_font_size`,"Size","px",x[`${m}_font_size`],A)}
        ${this._wfcSelect(c,`${m}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],x[`${m}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",x[`${m}_color`],b=>this._wfcSetSecField(c,`${m}_color`,b.target.value))}
    `};let K7=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];G._wfcDividerControls=function(c,m){return S`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",m.divider_above,d=>this._wfcToggleSecField(c,"divider_above",d))}
      ${m.divider_above?S`
            <div class="wsfc-row">
              ${this._wfcNumField(c,"divider_above_width","Thickness","px",m.divider_above_width,1)}
              ${this._wfcNumField(c,"divider_above_length","Length","%",m.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"divider_above_style","Line style",K7,m.divider_above_style,"solid")}
            </div>`:O}

      ${this._wfcCheckbox("Section Divider Below",m.divider_below,d=>this._wfcToggleSecField(c,"divider_below",d))}
      ${m.divider_below?S`
            <div class="wsfc-row">
              ${this._wfcNumField(c,"divider_below_width","Thickness","px",m.divider_below_width,1)}
              ${this._wfcNumField(c,"divider_below_length","Length","%",m.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"divider_below_style","Line style",K7,m.divider_below_style,"solid")}
            </div>`:O}

      ${m.divider_above||m.divider_below?this._wfcColorField("Divider color",m.divider_color,d=>this._wfcSetSecField(c,"divider_color",d.target.value)):O}
    `},G._wfcBackgroundControls=function(c,m){let d=!!m.background_enabled;return S`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",d,A=>this._wfcToggleSecField(c,"background_enabled",A))}
      ${d?S`
            ${this._wfcColorField("Background color",m.background_color,A=>this._wfcSetSecField(c,"background_color",A.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",m.background_opacity==null?80:m.background_opacity,80,"opacity",A=>this._wfcSetSecField(c,"background_opacity",H(parseInt(A.target.value,10)||0,0,100)))}`:O}
    `},G._wfcSectionStyles=function(c,m){return this._wfcSubPanel("Section Styles",S`
        ${this._wfcFlushControls(c,m)}
        ${this._wfcDividerControls(c,m)}
        ${this._wfcBackgroundControls(c,m)}`)},G._wfcStockForm=function(c){return this._wfcStockFormFor(k9[c])},G._wfcStockFormFor=function(c){if(!c||!c.length)return O;let m=b8(this._config),d=this._getSelectedAttributes(m),A=this._schema(this.localize.bind(this),d,"chart"),x=new Map,b=R=>R.forEach(N=>{N.schema?b(N.schema):x.set(N.name,N)});b(A);let w=c.map(R=>x.get(R)).filter(Boolean);if(!w.length)return O;let P=R=>T9[R.name]||this._computeLabel(R)||R.name;return S`
      <ha-form
        .hass=${this.hass}
        .data=${m}
        .schema=${w}
        .computeLabel=${P}
        .computeHelper=${R=>this._wfcHelper(R)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},G._wfcTitleControls=function(c,m){return S`
      ${this._wfcCheckbox("Show Title Row",m.title_show,d=>this._wfcToggleSecField(c,"title_show",d))}
      ${m.title_show?S`
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
          `:O}
    `},G._wfcSectionOptionsBody=function(c,m){let d=m[c]||{},A=c==="details",x=c==="current",b=c==="sun_position",w=c==="sun_arc",P=c==="hourly",R=c==="daily",N=this._config.forecast||{},z=this._config.current||{},i1=H(parseInt(d.columns,10)||2,1,4),d1=this._wfcMetricOptions(typeof E2<"u"?E2:[],!0);return S`
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
          ${x?S`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:O}
          ${x?S`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(c,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(c,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(c,"header_temp_size","Temperature size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",d1,z.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(c)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(c)}
          ${P?S`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",N.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",N.hourly_group_size,1)}`:O}
          ${R?S`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",N.daily_slots)}`:O}
          ${A?S`
                ${this._wfcGroup("Layout")}
                ${d.chips?S`
                      ${this._wfcSelect(c,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.chip_layout==="column"?"wrap":d.chip_layout||"wrap","wrap")}
                      ${(d.chip_layout||"wrap")==="grid"?S`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(d.chip_columns,10)>0,I=>this._wfcSetSecField(c,"chip_columns",I.target.checked?H(parseInt(d.chip_columns,10)||2,1,6):0))}
                            ${parseInt(d.chip_columns,10)>0?this._wfcNumField(c,"chip_columns","Columns","",parseInt(d.chip_columns,10)||2,2):O}`:O}`:S`
                      ${this._wfcSelect(c,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.details_layout||"grid","grid")}
                      ${(d.details_layout||"grid")==="grid"?this._wfcNumField(c,"columns","Columns","",i1,2):O}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!d.chips,I=>this._wfcToggleSecField(c,"chips",I))}
                ${d.chips?S`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square",I=>this._wfcSetSecField(c,"chip_pill",I.target.checked))}
                      ${(d.chip_pill!=null?d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?O:this._wfcNumField(c,"chip_radius","Corner radius (0 = square)","px",d.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((d.chip_scale==null?1:d.chip_scale)*100),100,"chip_scale",I=>this._wfcSetSecField(c,"chip_scale",H((parseInt(I.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(c,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",d.chip_text_color,I=>this._wfcSetSecField(c,"chip_text_color",I.target.value))}
                      ${this._wfcColorField("Chip background",d.chip_bg,I=>this._wfcSetSecField(c,"chip_bg",I.target.value))}
                      ${this._wfcColorField("Chip border",d.chip_border_color,I=>this._wfcSetSecField(c,"chip_border_color",I.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",d.chip_show_icon!==!1,I=>this._wfcToggleSecField(c,"chip_show_icon",I))}
                      ${d.chip_show_icon!==!1?S`
                            ${this._wfcSelect(c,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],d.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(c,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",d.chip_icon_color,I=>this._wfcSetSecField(c,"chip_icon_color",I.target.value))}`:O}
                      ${this._wfcCheckbox("Show metric name in chip",!!d.chip_show_name,I=>this._wfcToggleSecField(c,"chip_show_name",I))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!d.chip_hide_when_off,I=>this._wfcToggleSecField(c,"chip_hide_when_off",I))}`:O}

                ${d.chips?S`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(m)}`:S`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(c,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(c,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",d.global_icon_color,I=>this._wfcSetSecField(c,"global_icon_color",I.target.value))}
                        ${this._wfcColorField("Text color",d.global_text_color,I=>this._wfcSetSecField(c,"global_text_color",I.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(m)}`}
              `:O}

          ${b?S`
                ${this._wfcSubPanel("Time",S`
                    ${this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],d.timeframe_mode,"hours")}
                      ${d.timeframe_mode==="hours"||d.timeframe_mode==null?S`
                            ${this._wfcNumField(c,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                            ${this._wfcSelect(c,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                          `:O}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.times_position==="center"?"overlay":d.times_position,"below")}
                      ${this._wfcSelect(c,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(c,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(I=>({value:I,label:I+(I>1?" hours":" hour")}))],d.ticks_every==null?0:d.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(c,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",S`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",d.marker_color,I=>this._wfcSetSecField(c,"marker_color",I.target.value))}
                      ${this._wfcNumField(c,"marker_opacity","Marker opacity","%",d.marker_opacity==null?100:d.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",S`
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ss_markers_position,"hidden")}
                    </div>
                    ${d.ss_markers_position&&d.ss_markers_position!=="hidden"?S`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",d.ss_markers_color,I=>this._wfcSetSecField(c,"ss_markers_color",I.target.value))}
                          ${this._wfcNumField(c,"ss_markers_opacity","Marker opacity","%",d.ss_markers_opacity==null?100:d.ss_markers_opacity,100)}
                        </div>`:O}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",S`
                    ${this._wfcSubPanel("Metrics Defaults",S`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!d.forecast_metric_detail_icons,I=>this._wfcToggleSecField(c,"forecast_metric_detail_icons",I))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!d.forecast_temp_with_icon,I=>this._wfcToggleSecField(c,"forecast_temp_with_icon",I))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(c,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(I=>({value:I,label:I+(I>1?" hours":" hour")}))],d.forecast_every,3)}
                          ${this._wfcNumField(c,"forecast_font_size","Text size","px",d.forecast_font_size,11)}
                          ${this._wfcNumField(c,"forecast_icon_size","Icon size","px",d.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",d.forecast_temp_color,I=>this._wfcSetSecField(c,"forecast_temp_color",I.target.value))}
                        ${this._wfcColorField("Icon color",d.forecast_icon_color,I=>this._wfcSetSecField(c,"forecast_icon_color",I.target.value))}
                        ${Z.some(I=>d.forecast_metric_pos&&d.forecast_metric_pos[I]&&d.forecast_metric_pos[I]!=="hidden"||y(d).includes(I))?this._wfcColorField("Metric Text Color",d.forecast_extra_color,I=>this._wfcSetSecField(c,"forecast_extra_color",I.target.value)):O}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(c,d)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",S`
                    ${this._wfcNumField(c,"height","Bar height","px",d.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",d.weather_adjust!==!1,I=>this._wfcToggleSecField(c,"weather_adjust",I))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",d.day_color,I=>this._wfcSetSecField(c,"day_color",I.target.value))}
                      ${this._wfcColorField("Night color",d.night_color,I=>this._wfcSetSecField(c,"night_color",I.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(c,d)}
              `:O}

          ${w?S`
                <div class="wsfc-row">
                  ${this._wfcNumField(c,"height","Arc height","px",d.height,90)}
                  ${this._wfcSelect(c,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.time_format,"auto")}
                </div>

                ${this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],d.timeframe_mode,"sunrise_sunset")}
                  ${d.timeframe_mode==="hours"?S`
                        ${this._wfcNumField(c,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                        ${this._wfcSelect(c,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                      `:O}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",r1(d.labels_position),0,"labels_position",I=>this._wfcSetSecField(c,"labels_position",H(parseInt(I.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${d.sun_icon||""}
                  @value-changed=${I=>this._wfcSetSecField(c,"sun_icon",I.detail&&I.detail.value||"")}
                ></ha-icon-picker>
                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!d.night_moon,I=>this._wfcToggleSecField(c,"night_moon",I))}
                ${d.night_moon?S`<ha-icon-picker
                      label="Moon icon"
                      .value=${d.moon_icon||"mdi:weather-night"}
                      @value-changed=${I=>this._wfcSetSecField(c,"moon_icon",I.detail&&I.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:O}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],d.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",d.show_arc_ticks,I=>this._wfcToggleSecField(c,"show_arc_ticks",I))}
                ${this._wfcCheckbox("Show tick marks on the baseline",d.show_base_ticks!==!1,I=>this._wfcToggleSecField(c,"show_base_ticks",I))}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],d.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",d.tick_color,I=>this._wfcSetSecField(c,"tick_color",I.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",d.show_times!==!1,I=>this._wfcToggleSecField(c,"show_times",I))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",d.show_captions!==!1,I=>this._wfcToggleSecField(c,"show_captions",I))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",d.show_ss_icons,I=>this._wfcToggleSecField(c,"show_ss_icons",I))}
                ${d.show_ss_icons?S`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${d.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${I=>this._wfcSetSecField(c,"sunrise_icon",I.detail&&I.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${d.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${I=>this._wfcSetSecField(c,"sunset_icon",I.detail&&I.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(c,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],d.ss_icon_position,"left")}
                        ${this._wfcNumField(c,"ss_icon_size","Icon size","px",d.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",d.ss_icon_color,I=>this._wfcSetSecField(c,"ss_icon_color",I.target.value))}
                    `:O}

                ${this._wfcTextControls(c,"time","Time text",13)}
                ${this._wfcTextControls(c,"caption","Sunrise / sunset caption",11)}
              `:O}

          ${b?O:this._wfcSectionStyles(c,d)}
        </div>
    `};let X7={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};G._wfcPlainNum=function(c,m,d){return this._wfcPlainSlider(c,"px",m,16,"_size",d)},G._wfcDetailRows=function(c){return c.details.items.map((d,A,x)=>{let b=C[d.key]||{};return S`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${d.icon||b.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${b.label||d.key}</span>
            <ha-icon class="wsfc-ico-btn ${A===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${w=>{w.preventDefault(),w.stopPropagation(),this._wfcMoveDetail(d.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${A===x.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${w=>{w.preventDefault(),w.stopPropagation(),this._wfcMoveDetail(d.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${d.show?"mdi:eye":"mdi:eye-off"} title=${d.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${w=>{w.preventDefault(),w.stopPropagation(),this._wfcToggleDetailShow(d.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${b.icon||""}
              .value=${d.icon||""}
              @value-changed=${w=>this._wfcSetDetail(d.key,"icon",w)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${w=>this._wfcSetDetailValue(d.key,"mode",w.target.value)}>
                <option value="global" ?selected=${d.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${d.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${d.mode==="custom"?S`
                  ${this._wfcPlainNum("Icon size (px)",d.icon_size,w=>this._wfcSetDetail(d.key,"icon_size",w))}
                  ${this._wfcPlainNum("Text size (px)",d.text_size,w=>this._wfcSetDetail(d.key,"text_size",w))}
                  ${this._wfcColorField("Icon color",d.icon_color,w=>this._wfcSetDetail(d.key,"icon_color",w))}
                  ${this._wfcColorField("Text color",d.text_color,w=>this._wfcSetDetail(d.key,"text_color",w))}
                `:O}
          </div>
        </details>
      `})};let J7=["current","details","hourly","daily","sun_arc","sun_position"];function t4(c){let m=J7.filter(A=>c.includes(A)),d=c.filter(A=>!J7.includes(A));return[...m,...d]}G._wfcEditor=function(){let c=L2(this._config),m=t4(c.order),d=c.order.map((x,b,w)=>{let P=!!(c[x]&&c[x].show);return S`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${X7[x]||Q7.options}></ha-icon>
          <span class="wsfc-order-name">${i[x]||x}</span>
          <ha-icon class="wsfc-ico-btn ${b===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(x,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${b===w.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(x,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${P?"mdi:eye":"mdi:eye-off"} title=${P?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(x)}></ha-icon>
        </div>
      `}),A=m.map(x=>S`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${X7[x]||Q7.options}></ha-icon><span class="wsfc-panel-title">${i[x]||x}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(x,c)}
          </div>
        </details>
      `);return S`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${Q7.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
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
    `};let e4=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];G._wfcClockPanel=function(c){let m="current",d=c.current||{},A=b=>b==="above"?"above-center":b==="below"?"below-center":b,x=d.clock_show_time!==!1;return S`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",x,b=>this._wfcToggleSecField(m,"clock_show_time",b))}
                ${x?S`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",e4,A(d.clock_placement),"right")}
                        ${this._wfcSelect(m,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",d.clock_show_seconds,b=>this._wfcToggleSecField(m,"clock_show_seconds",b))}
                      <div class="wsfc-row">
                        ${this._wfcNumField(m,"clock_font_size","Size","px",d.clock_font_size,28)}
                        ${this._wfcSelect(m,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],d.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",d.clock_color,b=>this._wfcSetSecField(m,"clock_color",b.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${d.clock_font_family||""}
                          @change=${b=>this._wfcSetSecField(m,"clock_font_family",b.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(m,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_contrast,"none")}`:O}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",d.clock_show_date,b=>this._wfcToggleSecField(m,"clock_show_date",b))}
                ${d.clock_show_date?S`
                      ${this._wfcSelect(m,"clock_date_format","Date format",m2.map(b=>({value:b.value,label:b.label})),d.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...e4],d.clock_date_placement==="above"||d.clock_date_placement==="below"?A(d.clock_date_placement):d.clock_date_placement,"with_time")}
                        ${this._wfcNumField(m,"clock_date_font_size","Size","px",d.clock_date_font_size,12)}
                        ${this._wfcColorField("Date color",d.clock_date_color,b=>this._wfcSetSecField(m,"clock_date_color",b.target.value))}
                      </div>
                      ${this._wfcSelect(m,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_date_contrast!=null?d.clock_date_contrast:d.clock_contrast,"none")}`:O}
        </div>
      </details>
    `},G._wfcYamlPanel=function(){let c;try{c=o1(this._config)}catch{c="# (unable to render YAML)"}return S`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${c}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,M2.__wfcResolve=L2,M2.__wfcBuild=r})();var w8=M2.prototype,Lh=(r,t)=>({config:r,hass:t,_wfcSources:w8._wfcSources,_wfcSlotEntityForKey:w8._wfcSlotEntityForKey,_wfcMetricEntityChain:w8._wfcMetricEntityChain});function QH(r,t,e){return!r||!t?[]:w8._wfcMetricEntityChain.call(Lh(r,t),e)}function z7(r,t,e){return QH(r,t,e).find(i=>!i.startsWith("weather."))||null}function l5(r,t,e){for(let i of QH(r,t,e)){let C=t.states[i];if(C){if(i.startsWith("weather.")){let a=C.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:lh(C,e),entity:i}}else if(!["unknown","unavailable",""].includes(C.state)){let a=Number(C.state);return{value:isNaN(a)?C.state:a,unit:C.attributes?.unit_of_measurement||"",entity:i}}}}return null}function lh(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function Z8(r,t,e,i,C=i){return r?.entities?.[C]||z7(t,e,i)}function Mh(r,t){let e=[],i=r?.metric_sources?.sources||[];for(let C of i){if(C.disabled||typeof C.ref!="string"||!C.ref.startsWith("device:"))continue;let a=C.ref.slice(7);for(let H in t?.entities||{})t.entities[H]?.device_id===a&&e.push(H)}return e}function KH(r,t,e){let i=Mh(r,t).filter(C=>{let a=t.states[C];return a&&e.test(`${C} ${a.attributes?.friendly_name||""}`)});return i.find(C=>!/indoor|inside/i.test(C))||i[0]||null}function H0(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function XH(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>z7(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let C=i.filter(a=>H0(t,a)!=null).length;return C===i.length?"online":C?"partial":"offline"}var T2={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24h[\s_-]?rain|rain[\s_-]?24h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?rain|rain[\s_-]?event/i},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function I7(r,t,e,i){if(i)return i;let C=T2[r];return C?C.key?z7(t,e,C.key):C.find?KH(t,e,C.find):null:null}function y8(r,t,e){if(e!=null&&e!=="")return Number(e);let i=T2[r]?.digits;return i??(/inHg/i.test(t)?2:/psi|kPa/i.test(t)?1:0)}function JH(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function tV(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var ch=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],N7=r=>r==null||isNaN(r)?"\u2014":ch[Math.round((r%360+360)%360/22.5)%16];var W7=r=>r.map(([t,e])=>({value:t,label:e})),O8=["6h","12h","24h","48h","7d","30d","90d","365d"],eV=W7([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),dh=W7([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),ph=Object.entries(T2).map(([r,t])=>({value:r,label:t.label})),_5=r=>({entity:r?{domain:r}:{}}),d3={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,schema:[]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:_5(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:_5("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Heading",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:ph}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:_5()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"CSS color, e.g. #ef5350. Blank uses the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:W7([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"List of series: metric or entity, label, color, axis (left/right), style (line/area/dashed/bar), cumulative, band."},{name:"ranges",selector:{select:{multiple:!0,options:O8.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:O8.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:O8.map(r=>({value:r,label:r}))}}},{name:"entities.temperature",selector:_5("sensor")},{name:"entities.dew_point",selector:_5("sensor")},{name:"entities.humidity",selector:_5("sensor")},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:O8.map(r=>({value:r,label:r}))}}},{name:"entities.uv_index",label:"UV index sensor",selector:_5("sensor")},{name:"entities.solar_radiation",label:"Solar radiation sensor",selector:_5("sensor")},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:W7([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,schema:[{name:"view",selector:{select:{options:W7([["compass","Compass"],["rose","Wind rose (24h)"]])}}},{name:"show_chart",selector:{boolean:{}},default:!0},{name:"entities.wind_speed",selector:_5("sensor")},{name:"entities.wind_gust_speed",selector:_5("sensor")},{name:"entities.wind_bearing",selector:_5("sensor")},{name:"rose_bins",selector:{object:{}},helper:"Speed thresholds for the rose, in the sensor's unit, e.g. [1, 5, 10, 15, 25]."}]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:dh}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:eV}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...eV]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,schema:[]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:_5("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},sun_moon:{tag:"wsfc-panel-sun-moon",label:"Sun & Moon",icon:"mdi:weather-sunset",span:4,rows:4,rowsCompact:0,flex:!0,schema:[{name:"show_moon",selector:{boolean:{}},default:!0}]},flex:{tag:"wsfc-panel-flex",label:"Weather Flex sections",icon:"mdi:view-agenda-outline",span:6,rows:0,flex:!0,schema:[]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};d3.map=d3.radar;var rV=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Height in row units (0 = fit content)."},{name:"display",selector:{select:{options:W7([["grid","In the grid"],["popup","Pop-up from its panel button"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Show a panel button for it."},{name:"show",selector:{boolean:{}},default:!0,helper:"Visible when the dashboard loads."}],iV=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Vertical: minimum height in row units."}],P2=r=>d3[r?.type]||null,rr=r=>Math.max(1,Math.min(12,Number(r.span??P2(r)?.span??6)));function CV(r,t){let e=P2(r)||{},i=rr(r),C=i;t==="medium"&&(C=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(C=Number(r.span_narrow??(i<=3?6:12)));let a=U7(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,C)),rows:a}}var U7=r=>Math.max(0,Number(r.rows??P2(r)?.rows??0)),k8=r=>r.in_bar??(r.display==="popup"?!0:P2(r)?.inBar??!0),uh=[{type:"hero",span:8},{type:"bulletin"},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"forecast",title:"Hourly forecast",icon:"mdi:clock-outline",flex:{wfc:{daily:{show:!1}}}},{type:"day"},{type:"forecast",title:"Daily forecast",show:!1,flex:{wfc:{hourly:{show:!1}}}},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"sun_moon",show:!1},{type:"radar",display:"popup"}];function T8(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:uh;return t=t.filter(e=>e&&d3[e.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(e=>e.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(e=>e.type==="hero"&&r.hero&&typeof r.hero=="object"&&!e.flex?{...e,flex:r.hero}:e)}var P0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function F0(r,t){if(!P0(t))return t===void 0?r:t;let e={...P0(r)?r:{}};for(let i of Object.keys(t))e[i]=P0(t[i])&&P0(e[i])?F0(e[i],t[i]):t[i];return e}function ir(r,t){if(P0(r)&&P0(t)){let e={};for(let i of Object.keys(r)){let C=ir(r[i],t[i]);C!==void 0&&(e[i]=C)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function P8(r){if(!P0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let C=P0(i)?P8(i):i;P0(C)&&!Object.keys(C).length||(t[e]=C)}return t}var F8=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var Cr="wsfc-flex-core",oV="wsfc-flex-core-editor";customElements.get(Cr)||customElements.define(Cr,M2);var aV=M2.__wfcBuild,HV=r=>M2.__wfcResolve(r);function mh(r){return{...r,wfc:HV(r)}}function VV(r,t){let{entity:e,metric_sources:i,type:C,...a}={...r,wfc:HV(r)},{entity:H,metric_sources:n,...s}=mh(t);return ir(a,s)||{}}var E8=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(Cr)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(C){this.error=C?.message||String(C),console.error("weather-station-flex-card: invalid Weather Flex config",C,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var hh={hero:{show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details","sun_position"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!0,height:30,timeframe_mode:"hours",timeframe_hours:24,ss_markers_position:"overlay",times_position:"below",forecast_icons:"above",forecast_temps:"above",forecast_temp_with_icon:!0,forecast_every:3},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sun_moon:{wfc:{order:["sun_arc","sun_position"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,night_moon:!0,show_ss_icons:!0,height:100},sun_position:{show:!0,height:28,timeframe_mode:"day",ss_markers_position:"overlay",times_position:"below"}}},flex:{}},fh={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},Ah={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}},B8;function vh(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(B8||(B8=new CSSStyleSheet,B8.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,B8],t.__wsfcFill=!0)}function c9(r,t){return{...hh[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var nV=w1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,V0=class extends p1{constructor(){super();W(this,"type","flex");W(this,"defaultTitle","Weather");W(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new E8}_coreConfig(){return F0(c9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return O;let e=this._slot.update(this._coreConfig(),this.hass),i=this.type==="flex"?!!this.config?.title:this.config?.show_title!==!1;return S`
      ${i?J2(this.config,this.defaultIcon,this.defaultTitle):O}
      <div class="core">${e}</div>
      ${this._slot.error?S`<div class="err">${this._slot.error}</div>`:O}
      ${this.extra()}
    `}extra(){return O}};W(V0,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),W(V0,"styles",[W2,nV]);var R8=class extends V0{constructor(){super(...arguments);W(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,C=i>=900?"large":i<560?"narrow":"normal";C!==this._size&&(this._size=C)}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_coreConfig(){let e=c9("hero",this.station);return this._size==="large"&&(e=F0(e,fh)),this._size==="narrow"&&(e=F0(e,Ah)),F0(e,this.config?.flex||{})}updated(){vh(this._slot.el)}render(){return!this.hass||!this.station?.entity?O:S`<div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?S`<div class="err">${this._slot.error}</div>`:O}`}};W(R8,"styles",[W2,nV,w1`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var or=class extends V0{constructor(){super(...arguments);W(this,"type","forecast");W(this,"defaultTitle","Forecast");W(this,"defaultIcon","mdi:calendar-week")}};customElements.get("wsfc-panel-flex")||customElements.define("wsfc-panel-flex",V0);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",R8);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",or);b2.register(O0,L5,B5,V3,y0,R5);var D8=[gH,SH];function p3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return p3("#"+i[1].split("").map(C=>C+C).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let C=parseInt(i[1],16);return`rgba(${C>>16&255},${C>>8&255},${C&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[C,a,H]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${C},${a},${H},${t})`}return e}function xh(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return C=>i.format(new Date(C))}function gh(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function $8(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",C="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:gh(t,e)}}},scales:{x:{type:"linear",grid:{color:C},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:xh(t,e)}}},_text:i,_grid:C}}var sV=new Map;async function LV(r,t){let e=sV.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return sV.set(r,{at:Date.now(),data:i}),i}var _h=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function j7(r,t,e){return MV(r,t,Date.now()-e*36e5,`h${e}`)}function lV(r,t){let e=new Date;return e.setHours(0,0,0,0),MV(r,t,e.getTime(),`d${e.toDateString()}`)}function MV(r,t,e,i){let C=[...new Set(t.filter(Boolean))].sort();if(!C.length||!r?.callWS)return Promise.resolve({});let a=new Date,H=new Date(e);return LV(`h|${i}|${C.join(",")}`,async()=>{let n=await r.callWS({type:"history/history_during_period",start_time:H.toISOString(),end_time:a.toISOString(),entity_ids:C,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),s={};for(let M of C)s[M]=(n?.[M]||[]).map(p=>({t:Math.round((p.lu??p.lc??0)*1e3),v:_h(p.s)}));return s})}function cV(r,t,e,i){let C=[...new Set(t.filter(Boolean))].sort();if(!C.length||!r?.callWS)return Promise.resolve({});let a=new Date,H=new Date(a.getTime()-e*864e5);return LV(`s|${e}|${i}|${C.join(",")}`,async()=>{let n=await r.callWS({type:"recorder/statistics_during_period",start_time:H.toISOString(),end_time:a.toISOString(),statistic_ids:C,period:i,types:["mean","min","max","change"]}),s={};for(let M of C)s[M]=(n?.[M]||[]).map(p=>({t:typeof p.start=="number"?p.start:Date.parse(p.start),mean:p.mean??null,min:p.min??null,max:p.max??null,change:p.change??null}));return s})}function K3(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let C=0;C<r.length;C+=e){let a=r.slice(C,C+e),H=a.map(n=>n.v).filter(n=>n!=null);i.push({t:a[Math.floor(a.length/2)].t,v:H.length?H.reduce((n,s)=>n+s,0)/H.length:null})}return i}function z8(r,t){let e=new Map,i=null;for(let C of r){if(C.v==null){i=null;continue}if(i!=null){let a=C.v>=i?C.v-i:C.v,H=Math.floor(C.t/t)*t;e.set(H,(e.get(H)||0)+a)}i=C.v}return[...e].map(([C,a])=>({t:C+t/2,v:Math.round(a*1e3)/1e3}))}function I8(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let C=Math.floor(i.t/t)*t,a=e.get(C)||[0,0];a[0]+=i.v,a[1]++,e.set(C,a)}return[...e].map(([i,[C,a]])=>({t:i+t/2,v:C/a}))}var dV={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},pV=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],X3=class extends p1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let C=T2[e.metric]||{},a=I7(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),H=a&&this.hass.states[a];return{...e,entity:a,label:e.label||C.label||H?.attributes?.friendly_name||a||"\u2014",color:e.color||C.color||pV[i%pV.length],axis:e.axis==="right"?"right":"left",style:e.style||(C.chart==="bar"?"bar":"line"),cumulative:e.cumulative??C.cumulative??!1,unit:H?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>dV[e])}render(){if(!this.hass)return O;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),C=t.length>1?L7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):O;return S`
      ${J2(this.config,this.defaultIcon,this.defaultTitle,C)}
      ${this.config?.show_readings===!1?O:S`<div class="readings">
            ${i.map(a=>{let H=H0(this.hass,a.entity);return l7(this,{label:a.label,value:H?.value,unit:H?.unit,digits:y8(a.metric,H?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?S`<div class="note">${this._error}</div>`:O}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(C=>[C.entity,C.style,C.axis,C.color,C.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(C=>this._error=`History unavailable: ${C?.message||C}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=dV[t]||24,C=e.map(H=>H.entity).filter(Boolean),a=new Map;if(i<=48){let H=await j7(this.hass,C,i);for(let n of e){let s=H[n.entity]||[],M=i<=12?15*6e4:36e5,p=n.style==="bar"?n.cumulative?z8(s,M):I8(s,M):K3(s);a.set(n,{line:p.map(h=>({x:h.t,y:h.v}))})}}else{let H=i>240?"day":"hour",n=await cV(this.hass,C,i/24,H);for(let s of e){let M=n[s.entity]||[],p=s.style==="bar"&&s.cumulative?"change":"mean";a.set(s,{line:M.map(h=>({x:h.t,y:h[p]})),min:M.map(h=>({x:h.t,y:h.min})),max:M.map(h=>({x:h.t,y:h.max}))})}}this._error=C.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let C=this.renderRoot.querySelector("canvas");if(!C)return;let a=$8(this,t,this.hass?.locale?.language),H=e.find(p=>p.axis==="left"),n=e.find(p=>p.axis==="right"),s=(p,h)=>{let v=p?.unit==="%",g={position:h,grid:h==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:D=>`${+D.toFixed(2)}${p?.unit&&p.unit.length<=3?p.unit:""}`}};v&&Object.assign(g,{min:0,max:100}),e.filter(D=>D.axis===h).every(D=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test(D.metric||""))&&e.some(D=>D.axis===h)&&(g.min=g.min??0),e.some(D=>D.axis===(h==="left"?"left":"right")&&D.style==="bar")&&(g.beginAtZero=!0);let y=this.config||{},k=y[`${h}_min`],F=y[`${h}_max`];return k!=null&&k!==""&&(g.min=Number(k)),F!=null&&F!==""&&(g.max=Number(F)),g};(H||!n)&&(a.scales.y=s(H,"left")),n&&(a.scales.y2=s(n,"right"));let M=[];e.forEach((p,h)=>{let v=i.get(p);if(!v)return;let g=p.axis==="right"?"y2":"y",Z={label:p.label,data:v.line,borderColor:p.color,yAxisID:g,order:h+1};p.style==="bar"?Object.assign(Z,{type:"bar",backgroundColor:p3(p.color,.6),borderWidth:0,borderRadius:2,order:50+h,barPercentage:.9,categoryPercentage:1}):p.style==="area"?Object.assign(Z,{backgroundColor:p3(p.color,.13),fill:"origin",borderColor:p3(p.color,.75),borderWidth:1}):p.style==="dashed"&&Object.assign(Z,{borderDash:[5,4],borderWidth:1.5}),M.push(Z),(p.band??(h===0&&p.style==="line"))&&v.min&&v.max&&p.style!=="bar"&&M.push({label:`${p.label} max`,_band:!0,data:v.max,borderWidth:0,pointRadius:0,yAxisID:g,order:90,fill:"+1",backgroundColor:p3(p.color,.15)},{label:`${p.label} min`,_band:!0,data:v.min,borderWidth:0,pointRadius:0,yAxisID:g,order:91})}),a.plugins.tooltip.filter=p=>!p.dataset._band,this._chart&&this._chart.destroy(),this._chart=new b2(C,{type:"line",data:{datasets:M},options:a,plugins:D8})}};W(X3,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),W(X3,"styles",W2);var ar=class extends X3{get defaultSeries(){return[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}]}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},Hr=class extends X3{get defaultSeries(){return[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}]}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",X3);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",ar);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",Hr);var uV={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},mV=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],d9=class extends p1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:Z8(t,e,i,"wind_speed"),gust:Z8(t,e,i,"wind_gust_speed"),dir:Z8(t,e,i,"wind_bearing")}}render(){if(!this.hass)return S``;let t=this._view||this.config?.view||"compass",e=this.station,i=this.hass,C=l5(e,i,"wind_speed"),a=l5(e,i,"wind_gust_speed"),H=l5(e,i,"wind_bearing"),n=C?.unit||a?.unit||"";return S`
      ${J2(this.config,"mdi:weather-windy","Wind",L7([{value:"compass",label:"Compass"},{value:"rose",label:"Rose 24h"}],t,s=>this._view=s,"Wind view"))}
      <div class="top">
        <div class="dial">${t==="rose"?this._roseSvg(n):this._compassSvg(C?.value,n,H?.value)}</div>
        <div class="side">
          <div class="readings">
            ${l7(this,{label:"Speed",value:C?.value,unit:n,digits:1,color:"var(--wsfc-wind)",entity:C?.entity})}
            ${l7(this,{label:"Gust",value:a?.value,unit:a?.unit||n,digits:1,color:"var(--wsfc-gust)",entity:a?.entity})}
            ${l7(this,{label:`From ${N7(H?.value)}`,value:H?.value,unit:"\xB0",entity:H?.entity})}
          </div>
          ${t==="rose"?this._roseLegend(n):""}
        </div>
      </div>
      ${this.config?.show_chart===!1?"":S`<div class="body"><canvas aria-label="Wind speed and gust history"></canvas></div>`}
      ${this._error?S`<div class="note">${this._error}</div>`:""}
    `}_compassSvg(t,e,i){let C=[];for(let n=0;n<72;n++){let s=n*5*Math.PI/180,M=n%18===0,p=n%6===0,h=M?78:p?82:85;C.push(E1`<line class="tick" x1=${100+Math.sin(s)*h} y1=${100-Math.cos(s)*h} x2=${100+Math.sin(s)*88} y2=${100-Math.cos(s)*88} stroke-width=${M?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([n,s])=>E1`<text class="lbl ${n==="N"?"n":""}" x=${100+Math.sin(s*Math.PI/180)*66} y=${100-Math.cos(s*Math.PI/180)*66}>${n}</text>`),H=Number.isFinite(i)?i:null;return E1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${N7(H)} at ${a2(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${C}${a}
      ${H==null?"":E1`<g class="ptr" style=${`transform: rotate(${H}deg); transform-origin: 100px 100px`}>
        <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
      </g>`}
      <text class="spd" x="100" y="104">${a2(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||uV[t]||uV.mph}_roseLegend(t){let e=this._bins(t),i=e.map((C,a)=>a<e.length-1?`${C}\u2013${e[a+1]}`:`${C}+`);return S`<div class="legend">${i.map((C,a)=>S`<span><i style="background:${mV[a+1]}"></i>${C}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return E1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(s=>s.reduce((M,p)=>M+p,0)),1e-4),C=84,a=[];e.sectors.forEach((s,M)=>{let p=0;s.forEach((h,v)=>{if(!h)return;let g=p+h;a.push(E1`<path d=${Sh(100,100,p/i*C,g/i*C,M*22.5-10,M*22.5+10)} fill=${mV[v]} opacity="0.9"></path>`),p=g})});let H=[.25,.5,.75,1].map(s=>E1`<circle class="ring" cx="100" cy="100" r=${C*s} stroke-dasharray="2 3"></circle>`),n=[["N",0],["E",90],["S",180],["W",270]].map(([s,M])=>E1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(M*Math.PI/180)*95} y=${100-Math.cos(M*Math.PI/180)*95}>${s}</text>`);return E1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${H}${a}${n}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(i=>this._error=`History unavailable: ${i?.message||i}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await j7(this.hass,[t.speed,t.gust,t.dir],24),i=l5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=bh(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:K3(e[t.speed]||[]).map(C=>({x:C.t,y:C.v})),gust:K3(e[t.gust]||[]).map(C=>({x:C.t,y:C.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),C=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",H=$8(this,24,this.hass?.locale?.language);H.scales.y={min:0,grid:{color:H._grid},ticks:{color:H._text,callback:s=>`${s} ${t.unit}`,maxTicksLimit:4}};let n=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:C,backgroundColor:p3(C,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new b2(e,{type:"line",data:{datasets:n},options:H,plugins:D8})}};W(d9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),W(d9,"styles",[W2,w1`
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
    `]);function Sh(r,t,e,i,C,a){let H=(y,k)=>[r+Math.sin(k*Math.PI/180)*y,t-Math.cos(k*Math.PI/180)*y],[n,s]=H(i,C),[M,p]=H(i,a),[h,v]=H(e,a),[g,Z]=H(e,C);return`M${n} ${s} A${i} ${i} 0 0 1 ${M} ${p} L${h} ${v} A${e} ${e} 0 0 0 ${g} ${Z} Z`}function bh(r,t,e){let i=r.filter(M=>M.v!=null),C=t.filter(M=>M.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),H=0,n=0,s=0;for(let M=0;M<i.length;M++){let p=i[M].t,h=Math.min((i[M+1]?.t??Date.now())-p,30*6e4);if(h<=0)continue;for(;s+1<C.length&&C[s+1].t<=p;)s++;let v=C[s]?.t<=p?C[s].v:C[0]?.v??0;if(H+=h,v<e[0]){n+=h;continue}let g=e.findIndex(y=>v<y);g===-1&&(g=e.length);let Z=Math.round((i[M].v%360+360)%360/22.5)%16;a[Z][g]+=h}return H?{sectors:a.map(M=>M.map(p=>p/H)),calm:n/H}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",d9);var hV=`/* required styles */\r
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
`;var Zh="https://api.rainviewer.com/public/weather-maps.json",yh=7,Oh=600,kh=1800,Th=5*6e4,J3=null,Ph=async()=>J3||(J3=(await Promise.resolve().then(()=>Y9(AV(),1))).default),W8="https://server.arcgisonline.com/ArcGIS/rest/services",Vr="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",vV={gray:r=>[`${W8}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,Vr,16],streets:()=>[`${W8}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,Vr,19],topo:()=>[`${W8}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,Vr,19],imagery:()=>[`${W8}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},Fh={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},p9=class extends p1{constructor(){super();W(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],C=this._overlay??this.config?.owm_default??"none";return S`
      ${J2(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",e?L7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(a=>({value:a,label:`${this._radarOn?"+ ":""}${Fh[a]||a}`}))],C,a=>this._setOverlay(a),"Map overlay"):"")}
      <div class="map"><div id="map"></div></div>
      ${this._radarOn?S`<div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"}>
          ${this._playing?"\u275A\u275A Pause":"\u25B6 Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel||""}</span>
        <span class="spacer"></span>
        ${this._error?S`<span class="note">${this._error}</span>`:""}
      </div>`:""}
    `}async firstUpdated(){await Ph();let e=this.renderRoot.getElementById("map");if(!e||this._map)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,C=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=J3.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,C],this.config?.zoom??7),this._base=null,this._applyBase(),J3.circleMarker([i,C],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),Th)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&this.firstUpdated()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,C,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(vV[e.base_map]||vV.gray)(this._dark);this._base=J3.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:C}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(Zh);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),C=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!C.length||!this._map)return;let a=new Map(this._frames.map(H=>[H.path,H]));this._frames=C.map(H=>{let n=a.get(H.path);if(n)return a.delete(H.path),n;let s=J3.tileLayer(`${i.host}${H.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:yh,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...H,layer:s,nowcast:(i.radar?.nowcast||[]).includes(H)}}),a.forEach(H=>this._map.removeLayer(H.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,H)=>a.layer.setOpacity(H===e?i:0));let C=this._frames[e];if(C){let a=new Date(C.time*1e3),H=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=C.nowcast?`${H} (forecast)`:H}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?kh:Oh)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=J3.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};W(p9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),W(p9,"styles",[W2,u0(hV),w1`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",p9);var u3=Y9(h6(),1),Eh=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],Bh=r=>Eh.find(([t])=>r<t)[1];function xV(r,t,e=31){let i=u3.getMoonIllumination(r).phase;for(let C=1;C<=e*24;C++){let a=new Date(r.getTime()+C*36e5),H=u3.getMoonIllumination(a).phase;if(t===0?H<i:i<t&&H>=t)return a;i=H}return null}function U8(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},C=u3.getMoonIllumination(t),a=e!=null?u3.getMoonTimes(t,e,i):{};return{phase:C.phase,name:Bh(C.phase),fraction:C.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:xV(t,.5),nextNew:xV(t,0)}}function gV(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let C=u3.getTimes(t,e,i),a=C.sunset-C.sunrise;return{sunrise:C.sunrise,sunset:C.sunset,noon:C.solarNoon,dawn:C.dawn,dusk:C.dusk,daylightMs:a}}var j8=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),G8=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});var q8=class extends V0{constructor(){super(...arguments);W(this,"type","sun_moon");W(this,"defaultTitle","Sun & Moon");W(this,"defaultIcon","mdi:weather-sunset")}extra(){return this.config?.show_moon===!1?"":this._moon()}_moon(){let e=U8(this.hass),i=a=>a?j8(this.hass).format(a):"\u2014",C=G8(this.hass);return S`<div class="moon">
      ${nr(e.phase)}
      <div class="facts">
        <span class="name">${e.name}</span>
        <span>Illumination</span><span>${Math.round(e.fraction*100)}%</span>
        <span>Moonrise</span><span>${e.alwaysUp?"up all day":e.alwaysDown?"down all day":i(e.rise)}</span>
        <span>Moonset</span><span>${i(e.set)}</span>
        ${e.nextFull?S`<span>Next full</span><span>${C.format(e.nextFull)}</span>`:""}
        ${e.nextNew?S`<span>Next new</span><span>${C.format(e.nextNew)}</span>`:""}
      </div>
    </div>`}};W(q8,"styles",[...V0.styles,w1`
      .moon { display: flex; align-items: center; gap: 14px; margin-top: 10px; }
      .moon svg { width: 52px; height: 52px; flex: 0 0 auto; }
      .moon .facts { display: grid; grid-template-columns: auto auto; gap: 2px 14px; font-size: 13px; }
      .moon .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .moon .name { font-size: 16px; font-weight: 500; grid-column: 1 / -1; color: var(--primary-text-color) !important; }
    `]);function nr(r){let i=r<.5,C=Math.cos(r*2*Math.PI),a=Math.abs(C)*24,H=i?1:0,n=`M26 2 A24 24 0 0 ${H} 26 50 A${a} 24 0 0 ${C>0?1-H:H} 26 2 Z`;return E1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${n} fill="#e9e6d6"></path>
  </svg>`}customElements.get("wsfc-panel-sun-moon")||customElements.define("wsfc-panel-sun-moon",q8);var Rh=5*6e4,u9=class extends p1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return I7(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return O;let t=T2[this._metric]||{},e=this._entity,i=H0(this.hass,e),C=this.config?.unit??i?.unit??"",a=y8(this._metric,C,this.config?.digits),H=this.config?.color||t.color||"var(--primary-color)",n=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?S`
      <div class="top" style=${`--m-color:${H}`} @click=${()=>h0(this,e)}>
        <ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>
        <span class="name">${n}</span>
        ${this.config?.show_minmax===!1||!this._today?O:S`<span class="mm"><span class="lo">Min ${a2(this._today.min,a)}</span><br /><span class="hi">Max ${a2(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>h0(this,e)}>
        <div class="val">${typeof i?.value=="number"?a2(i.value,a):i?.value??"\u2014"}<small>${C}</small></div>
        <div class="cap">${this._caption(i,C)}</div>
      </div>
      ${this.config?.chart==="none"?O:S`<div class="spark" @click=${()=>h0(this,e)}>${this._spark(H)}</div>`}
    `:S`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=T2[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?JH(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return O;let i=200,C=40,a=e.map(B=>B.v).filter(B=>B!=null);if(!a.length)return O;let H=Date.now()-(this.config?.hours||24)*36e5,n=Date.now(),s=B=>(B-H)/(n-H)*i,M=(this.config?.chart||T2[this._metric]?.chart)==="bar",p=Math.min(...a),h=Math.max(...a);M&&(p=0),h-p<1e-9&&(h+=1,p=M?0:p-1);let v=B=>C-(B-p)/(h-p)*C;if(M){let B=Math.max(2,i/(this.config?.hours||24)*.7);return E1`<svg viewBox="0 0 ${i} ${C}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(K=>K.v>0?E1`<rect x=${s(K.t)-B/2} y=${v(K.v)} width=${B} height=${C-v(K.v)} rx="1" fill=${t}></rect>`:O)}
        <line x1="0" x2=${i} y1=${C} y2=${C} stroke=${t} stroke-opacity=".35"></line></svg>`}let g="",Z=!1;for(let B of e){if(B.v==null){Z=!1;continue}g+=`${Z?"L":"M"}${s(B.t).toFixed(1)} ${v(B.v).toFixed(1)}`,Z=!0}let y=e.find(B=>B.v!=null),k=[...e].reverse().find(B=>B.v!=null),F=`${g}L${s(k.t).toFixed(1)} ${C}L${s(y.t).toFixed(1)} ${C}Z`,D=`g${Math.random().toString(36).slice(2,8)}`;return E1`<svg viewBox="0 0 ${i} ${C}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${D} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${F} fill=${`url(#${D})`}></path>
      <path d=${g} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<Rh||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,C]=await Promise.all([j7(this.hass,[t],e),lV(this.hass,[t])]),a=i[t]||[],H=(this.config?.chart||T2[this._metric]?.chart)==="bar",n=this.config?.cumulative??T2[this._metric]?.cumulative??!1;this._series=H?n?z8(a,36e5):I8(a,36e5):K3(a,160);let s=(C[t]||[]).map(M=>M.v).filter(M=>M!=null);if(this._today=s.length?{min:Math.min(...s),max:Math.max(...s)}:null,T2[this._metric]?.trend){let M=Date.now()-108e5,p=[...a].reverse().find(v=>v.t<=M&&v.v!=null),h=[...a].reverse().find(v=>v.v!=null);if(p&&h){let v=h.v-p.v,g=tV(H0(this.hass,t)?.unit||"");this._trend=v>g?"Rising":v<-g?"Falling":"Steady"}}}};W(u9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),W(u9,"styles",[W2,w1`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",u9);var sr=new Map;function _V(r,t,e,i){if(!r?.connection||!t)return()=>{};let C=`${t}|${e}`,a=sr.get(C);return a||(a={listeners:new Set,data:null,unsub:null},sr.set(C,a),a.unsub=r.connection.subscribeMessage(H=>{a.data=H?.forecast||[],a.listeners.forEach(n=>n(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(H=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,H),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(sr.delete(C),Promise.resolve(a.unsub).then(H=>typeof H=="function"&&H()).catch(()=>{}))}}function SV(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(C=>new Date(C.datetime).toDateString()===i)||r[t]||null}var Dh=w1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,bV=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),m9=class extends p1{render(){if(!this.hass)return O;let e=this.hass.states[this.station?.entity]?.state;return S`
      ${J2(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?bV(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):O}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?O:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],C=l5(t,e,"temperature");C&&i.push(`${a2(C.value,1)}${C.unit}`);let a=l5(t,e,"apparent_temperature");a&&C&&Math.abs(a.value-C.value)>=2&&i.push(`feels like ${a2(a.value,0)}${a.unit}`);let H=l5(t,e,"wind_speed"),n=l5(t,e,"wind_bearing"),s=l5(t,e,"wind_gust_speed");H&&(H.value<1?i.push("calm"):i.push(`wind ${n?`from the ${N7(n.value)} `:""}${a2(H.value,0)} ${H.unit}${s&&s.value>H.value*1.3?`, gusting ${a2(s.value,0)}`:""}`));let M=l5(t,e,"precipitation"),p=H0(e,I7("rain_today",t,e));M&&M.value>0?i.push(`raining ${a2(M.value,2)} ${M.unit}`):p&&p.value>0?i.push(`${a2(p.value,2)} ${p.unit} of rain today`):(M||p)&&i.push("dry");let h=l5(t,e,"humidity");if(h&&i.push(`humidity ${a2(h.value,0)}%`),!i.length)return"Waiting for station data.";let v=i.join(", ");return v[0].toUpperCase()+v.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return O;let i=e.attributes||{},C=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return S`<div class="text" @click=${()=>h0(this,t)}>${C}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return O;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?O:i.slice(0,3).map(C=>{let a=String(C.Severity||C.severity||"").toLowerCase();return S`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>h0(this,t)}>
        <b>${C.Event||C.event||C.title||"Weather alert"}</b>${C.Headline||C.headline||""}
      </div>`})}_astro(){let t=j8(this.hass),e=G8(this.hass),i=gV(this.hass),C=U8(this.hass),a=H=>`${Math.floor(H/36e5)}h ${String(Math.round(H%36e5/6e4)).padStart(2,"0")}m`;return S`<div class="astro">
      ${this.config?.show_sun===!1||!i?O:S`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?O:S`<div><h4>${nr(C.phase)}${C.name}</h4>
            <p>${Math.round(C.fraction*100)}% illuminated<br />
            ${C.nextFull?S`Full ${e.format(C.nextFull)}`:""}${C.nextNew?S` · New ${e.format(C.nextNew)}`:""}</p></div>`}
    </div>`}};W(m9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),W(m9,"styles",[W2,w1`
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
    `]);var h9=class extends p1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=_V(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return O;let t=Number(this.config?.day_offset??1),e=SV(this._daily,t),i=this.config?.entity||this.station?.entity,C=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let H=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),n=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${H}`:H);if(!e)return S`${J2(this.config,"mdi:calendar-today",n)}<div class="note">Forecast not available yet.</div>`;let s=C.temperature_unit||"",M=C.precipitation_unit||"",p=C.wind_speed_unit||"",h=[];return e.precipitation!=null&&h.push(["Precipitation",`${a2(e.precipitation,M==="in"?2:1)} ${M}`]),e.precipitation_probability!=null&&h.push(["Chance of rain",`${a2(e.precipitation_probability)}%`]),e.wind_speed!=null&&h.push(["Wind",`${e.wind_bearing!=null?`${N7(Number(e.wind_bearing))} `:""}${a2(e.wind_speed)} ${p}`]),e.wind_gust_speed!=null&&h.push(["Gusts",`${a2(e.wind_gust_speed)} ${p}`]),e.humidity!=null&&h.push(["Humidity",`${a2(e.humidity)}%`]),e.uv_index!=null&&h.push(["UV index",a2(e.uv_index,1)]),S`
      ${J2(this.config,"mdi:calendar-today",n)}
      <div class="main" @click=${()=>h0(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?S`<span class="lo">${a2(e.templow)}°</span> / `:O}<span class="hi">${a2(e.temperature)}°</span></div>
          <div class="cond">${bV(this.hass,e.condition)}${s?` \xB7 ${s}`:""}</div>
        </div>
      </div>
      <div class="rows">${h.map(([v,g])=>S`<span>${v}</span><span>${g}</span>`)}</div>
    `}};W(h9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),W(h9,"styles",[W2,Dh,w1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var f9=class extends p1{render(){let t=this.config||{},e=t.show_status?XH(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return S`
      ${t.icon===""?O:S`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      <div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?S`<div class="sub">${t.subtitle}</div>`:O}</div>
      ${e?S`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:O}
      <span class="grow"></span>
      ${this.bar?S`<div class="bar">${this.bar}</div>`:O}
    `}};W(f9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),W(f9,"styles",[r6,w1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var A9=class extends p1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),S`${this.config?.title?J2(this.config,"mdi:card-outline",""):O}
      ${this._err?S`<div class="note">${this._err}</div>`:S`<div class="host">${this._el||O}</div>`}`):S`${J2(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};W(A9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),W(A9,"styles",[W2,w1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",m9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",h9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",f9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",A9);var v9=class extends p1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=(this.config?.panels||[]).filter(i=>i&&d3[i.type]);if(!t.length)return S`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical";return t.map((i,C)=>{let a=P2(i);if(!a)return O;let H=Number(i.grow??(e?i.rows?1:0:1)),n=Number(i.rows??0),s=[`--grow:${H}`,i.min_width?`--basis:${i.min_width}px`:"",e&&n?`min-height:calc(${n} * var(--wsfc-row, 110px) + ${n-1} * var(--wsfc-gap, 12px))`:""].join(";"),M=a.bare||i.type==="stack";return S`<section class="tile ${i.type} ${M?"bare":""}" style=${s}>${this._el(i,C)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,C=this._els.get(i);if(!C){C=document.createElement(P2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,C)}return C.config=t,C.station=this.station,C.hass=this.hass,C}};W(v9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),W(v9,"styles",[e6,w1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",v9);var $h=[{name:"station_device",selector:{device:{}},helper:"Your weather station's gateway (e.g. the Ecowitt GW2000B). Its sensors are mapped automatically, outdoor first."},{name:"entity",required:!0,selector:{entity:{domain:"weather"}},helper:"Weather entity for the forecast and condition (e.g. OpenWeatherMap). Fills any value the station doesn't have."}],zh=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],Ih={wind_bearing:"Wind direction",precipitation:"Rain rate"},Lr=[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}],wV={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto"},Nh={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here"},Wh=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function Uh(r,t,e){let i=t.split("."),C=r;i.slice(0,-1).forEach(H=>C=C[H]=C[H]&&typeof C[H]=="object"?{...C[H]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete C[a]:C[a]=e}function lr(r,t,e={}){let i={};for(let C of t){let a=Wh(r,C.name);i[C.name]=a!==void 0?a:e[C.name]!==void 0?e[C.name]:C.default}return i}function Mr(r,t,e,i={}){let C=F8(r);for(let a of t){let H=e[a.name],n=i[a.name]!==void 0?i[a.name]:a.default;n!==void 0&&JSON.stringify(H)===JSON.stringify(n)&&(H=void 0),Uh(C,a.name,H)}return P8(C)}function jh(r){let t=P2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:k8({...r,in_bar:void 0}),show:!0}}function Gh(r){let t=P2(r);return r.title?r.title:r.type==="metric"?T2[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var x9=class extends p1{constructor(){super(),this._open="station",this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t}get _panels(){return T8(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[C,a]of Object.entries(e||{}))a===void 0?delete i[C]:i[C]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?O:S`
      <div class="ed">
        <div class="hdr"><span class="name">${v4}</span><span class="ver">v${t6} · Weather Flex sections ${aV}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:cog-outline","General",()=>this._general())}
        ${this._section("hero","mdi:weather-partly-cloudy","Hero & Weather Sources",()=>this._heroEditor())}
        ${this._section("panels","mdi:view-dashboard-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_section(t,e,i,C){let a=this._open===t;return S`<details class="panel" ?open=${a} @toggle=${H=>{H.target.open?this._open=t:this._open===t&&(this._open=null)}}>
      <summary><ha-icon icon=${e}></ha-icon><span>${i}</span></summary>
      ${a?S`<div class="body">${C()}</div>`:O}
    </details>`}_form(t,e,i){return S`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${C=>C.label||Nh[C.name]||C.name}
      .computeHelper=${C=>C.helper}
      @value-changed=${C=>{C.stopPropagation(),i(C.detail.value)}}
    ></ha-form>`}_general(){return this._form(lr(this._config,Lr,wV),Lr,t=>{let{panels:e,...i}=this._config,C=Mr(i,Lr,t,wV);this._config.panels&&(C.panels=this._config.panels),this._emit(C)})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_setStation(t,e){let i=(this._config.metric_sources?.sources||[]).map(s=>({...s})),C=t.station_device&&`device:${t.station_device}`,a=e.station_device&&`device:${e.station_device}`;if(C!==a){let s=C?i.findIndex(M=>M.ref===C):-1;s>=0&&i.splice(s,1),a&&!i.some(M=>M.ref===a)&&i.splice(s>=0?s:0,0,{ref:a})}if(e.entity&&e.entity!==t.entity){let s=t.entity?i.findIndex(M=>M.ref===t.entity):-1;i.some(M=>M.ref===e.entity)?s>=0&&i.splice(s,1):s>=0?i[s]={...i[s],ref:e.entity}:i.push({ref:e.entity})}else e.entity&&!i.some(s=>s.ref===e.entity)&&i.push({ref:e.entity});let H={...this._config,entity:e.entity||this._config.entity},n={...this._config.metric_sources||{}};i.length?n.sources=i:delete n.sources,Object.keys(n).length?H.metric_sources=n:delete H.metric_sources,this._emit(H)}_stationEditor(){let t={station_device:this._stationDevice(),entity:this._config.entity},e=this._station;return S`
      ${this._form(t,$h,i=>this._setStation(t,i))}
      <div class="grp">Values used</div>
      <div class="map">
        ${zh.map(i=>{let C=z7(e,this.hass,i)||(this.hass.states[e.entity]?.attributes?.[i]!=null?e.entity:null),a=C&&!C.startsWith("weather.")?H0(this.hass,C):null,H=Ih[i]||T2[i]?.label||i.replace(/_/g," ");return S`<span class="k">${H}</span><span class="e ${C?"":"none"}" title=${C||""}>${C||"not found"}</span><span class="v">${a?`${a.value} ${a.unit}`:""}</span>`})}
      </div>
      <p class="hint">More sources, priority order and per-value overrides: <b>Hero & Weather Sources → Weather Sources</b>.</p>
    `}_heroEditor(){let t=this._panels,e=t.findIndex(C=>C.type==="hero");if(e<0)return S`<p class="hint">There is no hero panel. Add one here, or set the station under <b>Weather station</b>.</p>
        <button class="btn" @click=${()=>this._setPanels([{type:"hero"},...t])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;let i=(C,a)=>{let H=t.slice();H[e]=C,this._setPanels(H,a)};return S`<p class="hint">Weather Flex Card's editor. <b>Weather Sources</b> apply to the whole card; everything else styles the hero.</p>
      ${this._flexEditor(`${e}`,t[e],i)}`}_flexEditor(t,e,i){let C=`${t}:${e.type}`,a=this._flexEds.get(C);a||(a=document.createElement(oV),a.addEventListener("config-changed",s=>{s.stopPropagation(),a._wsfcOnChange?.(s.detail.config)}),this._flexEds.set(C,a)),a._wsfcOnChange=s=>{let M=F8(e),p=VV(s,c9(e.type,this._station));Object.keys(p).length?M.flex=p:delete M.flex;let h={};s.entity&&(h.entity=s.entity),h.metric_sources=s.metric_sources&&Object.keys(s.metric_sources).length?s.metric_sources:void 0,i(M,h)};let H=F0(c9(e.type,this._station),e.flex||{}),n=JSON.stringify(H);return a._wsfcJson!==n&&(a._wsfcJson=n,a.setConfig(H)),a.hass=this.hass,S`<div class="flexed">${a}</div>`}_panelList(){return S`
      <p class="hint">Panels fill a 12-column grid left to right, in this order. Set each panel's width and height under Layout; on tablets and phones panels widen automatically. To keep panels side by side on every screen, put them in a <b>Stack</b>.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_list(t,e,i){let C=!!i,a=Object.entries(d3).filter(([s])=>s!=="map"&&!(C&&s==="hero")),H=i||"top",n=(this._addTypes||(this._addTypes={}))[H]||(C?"metric":this._addType);return S`
      <div class="rows">${t.map((s,M)=>this._panelRow(s,M,t,e,i?`${i}.${M}`:`${M}`,C))}</div>
      <div class="add">
        <select class="sel" @change=${s=>{this._addTypes[H]=s.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([s,M])=>S`<option value=${s} ?selected=${s===n}>${M.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let s={type:n};s.type==="metric"&&(s.metric="temperature"),s.type==="stack"&&(s.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,s]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${C?"Add to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,C,a,H){let n=P2(t),s=this._openPanel===a||String(this._openPanel||"").startsWith(`${a}.`),M=t.show===!1,p=()=>this._flexEds.clear(),h=y=>{let k=i.slice(),F=e+y;F<0||F>=k.length||([k[e],k[F]]=[k[F],k[e]],p(),this._openPanel=null,C(k))},v=(y,k)=>{let F=i.slice();F[e]=y,C(F,k)},g=H?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${rr(t)}/12${U7(t)?` \xD7 ${U7(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,Z=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:n.label;return S`<div class="row ${s?"open":""} ${M?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&T2[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":n.icon)}></ha-icon>
        <div class="txt"><div class="n">${Gh(t)}</div><div class="s">${Z}${g?` \xB7 ${g}`:""}</div></div>
        <button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>h(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
        <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>h(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
        ${H?O:S`<button class="ib" title=${M?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>v(P8({...t,show:M?void 0:!1}))}>
              <ha-icon icon=${M?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${s?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let y=i.slice();y.splice(e+1,0,F8(t)),p(),C(y)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let y=i.slice();y.splice(e,1),p(),this._openPanel=null,C(y)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${s?this._panelBody(t,a,v,H):O}
    </div>`}_panelBody(t,e,i,C){let a=P2(t),H=C?{}:jh(t),n=C?iV:rV;return t.type==="hero"&&(n=n.filter(s=>!["icon","display","in_bar"].includes(s.name))),S`<div class="pbody">
      <div class="grp">Layout</div>
      ${this._form(lr(t,n,H),n,s=>i({type:t.type,...Mr(t,n,s,H)}))}
      ${a.schema.length?S`<div class="grp">${a.label} options</div>
            ${this._form(lr(t,a.schema),a.schema,s=>i({type:t.type,...Mr(t,a.schema,s)}))}`:O}
      ${t.type==="stack"?S`<div class="grp">Panels in this stack</div>
            <div class="nest">${this._list(t.panels||[],(s,M)=>i({...t,panels:s},M),e)}</div>`:O}
      ${a.flex?S`<div class="grp">Weather Flex sections</div>
            ${t.type==="hero"&&!C?S`<p class="hint">Also under Hero & Weather Sources above.</p>`:this._flexEditor(e,t,i)}`:O}
    </div>`}};W(x9,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),W(x9,"styles",w1`
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
    .grp { font-size: var(--ltek-fs-group); font-weight: var(--ltek-fw-semibold); margin-top: var(--ltek-sp-3); border-top: 1px solid var(--ltek-c-border-soft); padding-top: var(--ltek-sp-3); }
    .add { display: flex; gap: var(--ltek-sp-3); align-items: center; }
    .sel { flex: 1; font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); }
    .btn { display: inline-flex; align-items: center; gap: var(--ltek-sp-2); font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 0; background: var(--ltek-c-accent); color: var(--ltek-c-on-accent); cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    .map { display: grid; grid-template-columns: auto 1fr auto; gap: 2px var(--ltek-sp-4); font-size: var(--ltek-fs-small); align-items: baseline; }
    .map .k { color: var(--ltek-c-label); }
    .map .e { font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .map .e.none { color: var(--ltek-c-muted); font-family: inherit; font-style: italic; }
    .map .v { color: var(--ltek-c-muted); white-space: nowrap; }
    .nest { border-left: 2px solid var(--ltek-c-border); padding-left: var(--ltek-sp-3); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .flexed { border-left: 2px solid var(--ltek-c-accent-fade); padding-left: var(--ltek-sp-3); }
  `);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",x9);var qh=720,Yh=1100,g9=class extends p1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),C=[];return i&&C.push({ref:`device:${i.id}`}),e&&C.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:C}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=T8(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(t.map((i,C)=>i.show===!1?this._key(i,C):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return t.map((e,i)=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},C=e<(i.narrow_width||qh)?"narrow":e<(i.medium_width||Yh)?"medium":"wide";C!==this._size&&(this._size=C),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_fit(){let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let C=i.min_row_height||60,a=i.max_row_height||400,H=e.clientHeight;if(!H)return;let n=Z=>(t.style.setProperty("--wsfc-row",`${Z}px`),t.getBoundingClientRect().height),s=C,M=C+40,p=n(s),v=(n(M)-p)/(M-s),g=i.row_height||110;v>.5&&(g=Math.max(C,Math.min(a,s+(H-p)/v))),t.style.setProperty("--wsfc-row",`${Math.floor(g)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return O;let t=this._config,e=this._full,i=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:""].join(";"),C=t.panels.some(a=>a.type==="heading"&&a.show_bar);return S`
      <ha-card class=${`wsfc ${e?"full":""} ${this._layoutSize}`} style=${i}>
        ${t.title?this._renderTitle():O}
        ${t.panel_bar===!1||C?O:S`<div class="topbar">${this._renderBar()}</div>`}
        <div class="scroller"><div class="grid">${this._renderPanels()}</div></div>
        ${this._popup!=null?this._renderPopup():O}
      </ha-card>
    `}_renderTitle(){let t=this._config;return S`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?S`<span class="subtitle">${t.subtitle}</span>`:O}
    </div>`}_renderBar(){let e=this._config.panels.map((i,C)=>[i,C]).filter(([i])=>k8(i));return e.length?e.map(([i,C])=>{let a=P2(i),H=i.display==="popup",n=H?this._popup===C:!this._hidden.has(this._key(i,C));return S`<button
        type="button"
        class="chip ${n?"on":""} ${H?"popup":""}"
        aria-pressed=${H?O:String(n)}
        aria-haspopup=${H?"dialog":O}
        @click=${()=>this._toggle(i,C)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${H?S`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:O}
      </button>`}):O}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":P2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),C=this._key(t,e);i.has(C)?i.delete(C):i.add(C),this._hidden=i,this._saveHidden()}_renderPanels(){let t=this._config.panels,e=t.map((C,a)=>a).filter(C=>t[C].display!=="popup"&&!this._hidden.has(this._key(t[C],C)));if(this._focus!=null&&(e=[this._focus]),!e.length)return S`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(C=>{let a=t[C],H=P2(a),n=CV(a,i),s=this._focus!=null?12:n.span,M=this._focus!=null?Math.max(U7(a),5):n.rows,p=`grid-column: span ${s};${M?`grid-row: span ${M};min-height:calc(${M} * var(--wsfc-row) + ${M-1} * var(--wsfc-gap));`:""}`,v=!(H.bare||a.type==="hero")&&!["metric","stack"].includes(a.type)&&i!=="narrow";return S`<section class="tile ${a.type} ${H.bare?"bare":""} ${M?"":"auto"}" style=${p}>
        ${v?S`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?C:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:O}
        ${this._panelEl(a,C)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._config.panels[t];if(!e)return O;let i=()=>this._popup=null;return S`<div class="scrim" @click=${C=>C.target===C.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let C=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(C);if(!a){a=document.createElement(P2(t).tag),this._els.set(C,a);for(let H of this._els.keys())H!==C&&H.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(H)}return a.config=t,a.station=this._station,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),a}};W(g9,"properties",{hass:{attribute:!1},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),W(g9,"styles",[r6,e6,w1`
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
  `]);customElements.get(A4)||customElements.define(A4,g9);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===A4)||window.customCards.push({type:A4,name:`${v4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${v4.toUpperCase()}%c ${t6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");
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
