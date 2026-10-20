/* weather-station-flex-card 2026.10.20.8 — https://github.com/Ltek/weather-station-flex-card */
var DV=Object.create;var l6=Object.defineProperty;var si=Object.getOwnPropertyDescriptor;var RV=Object.getOwnPropertyNames;var BV=Object.getPrototypeOf,zV=Object.prototype.hasOwnProperty;var IV=(r,t,e)=>t in r?l6(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Li=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var NV=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let C of RV(t))!zV.call(r,C)&&C!==e&&l6(r,C,{get:()=>t[C],enumerable:!(i=si(t,C))||i.enumerable});return r};var f4=(r,t,e)=>(e=r!=null?DV(BV(r)):{},NV(t||!r||!r.__esModule?l6(e,"default",{value:r,enumerable:!0}):e,r));var Q=(r,t,e,i)=>{for(var C=i>1?void 0:i?si(t,e):t,a=r.length-1,H;a>=0;a--)(H=r[a])&&(C=(i?H(t,e,C):H(C))||C);return i&&C&&l6(t,e,C),C};var I=(r,t,e)=>IV(r,typeof t!="symbol"?t+"":t,e);var B4=Li((bo,jt)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,C=Math.asin,a=Math.atan2,H=Math.acos,V=r/180,s=1e3*60*60*24,M=2440588,p=2451545;function h(U){return U.valueOf()/s-.5+M}function v(U){return new Date((U+.5-M)*s)}function g(U){return h(U)-p}var y=V*23.4397;function O(U,t1){return a(t(U)*e(y)-i(t1)*t(y),e(U))}function k(U,t1){return C(t(t1)*e(y)+e(t1)*t(y)*t(U))}function P(U,t1,n1){return a(t(U),e(U)*t(t1)-i(n1)*e(t1))}function $(U,t1,n1){return C(t(t1)*t(n1)+e(t1)*e(n1)*e(U))}function D(U,t1){return V*(280.16+360.9856235*U)-t1}function K(U){return U<0&&(U=0),2967e-7/Math.tan(U+.00312536/(U+.08901179))}function G(U){return V*(357.5291+.98560028*U)}function M1(U){var t1=V*(1.9148*t(U)+.02*t(2*U)+3e-4*t(3*U)),n1=V*102.9372;return U+t1+n1+r}function J(U){var t1=G(U),n1=M1(t1);return{dec:k(n1,0),ra:O(n1,0)}}var C1={};C1.getPosition=function(U,t1,n1){var h1=V*-n1,V1=V*t1,s1=g(U),S1=J(s1),T1=D(s1,h1)-S1.ra;return{azimuth:P(T1,V1,S1.dec),altitude:$(T1,V1,S1.dec)}};var r1=C1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];C1.addTime=function(U,t1,n1){r1.push([U,t1,n1])};var m1=9e-4;function I1(U,t1){return Math.round(U-m1-t1/(2*r))}function O1(U,t1,n1){return m1+(U+t1)/(2*r)+n1}function L2(U,t1,n1){return p+U+.0053*t(t1)-.0069*t(2*n1)}function q1(U,t1,n1){return H((t(U)-t(t1)*t(n1))/(e(t1)*e(n1)))}function k1(U){return-2.076*Math.sqrt(U)/60}function X(U,t1,n1,h1,V1,s1,S1){var T1=q1(U,n1,h1),m2=O1(T1,t1,V1);return L2(m2,s1,S1)}C1.getTimes=function(U,t1,n1,h1){h1=h1||0;var V1=V*-n1,s1=V*t1,S1=k1(h1),T1=g(U),m2=I1(T1,V1),g2=O1(0,V1,m2),T2=G(g2),l2=M1(T2),l1=k(l2,0),X2=L2(g2,T2,l2),N2,u5,P2,_2,o5,a5,K1={solarNoon:v(X2),nadir:v(X2-.5)};for(N2=0,u5=r1.length;N2<u5;N2+=1)P2=r1[N2],_2=(P2[0]+S1)*V,o5=X(_2,V1,s1,l1,m2,T2,l2),a5=X2-(o5-X2),K1[P2[1]]=v(a5),K1[P2[2]]=v(o5);return K1};function Y1(U){var t1=V*(218.316+13.176396*U),n1=V*(134.963+13.064993*U),h1=V*(93.272+13.22935*U),V1=t1+V*6.289*t(n1),s1=V*5.128*t(h1),S1=385001-20905*e(n1);return{ra:O(V1,s1),dec:k(V1,s1),dist:S1}}C1.getMoonPosition=function(U,t1,n1){var h1=V*-n1,V1=V*t1,s1=g(U),S1=Y1(s1),T1=D(s1,h1)-S1.ra,m2=$(T1,V1,S1.dec),g2=a(t(T1),i(V1)*e(S1.dec)-t(S1.dec)*e(T1));return m2=m2+K(m2),{azimuth:P(T1,V1,S1.dec),altitude:m2,distance:S1.dist,parallacticAngle:g2}},C1.getMoonIllumination=function(U){var t1=g(U||new Date),n1=J(t1),h1=Y1(t1),V1=149598e3,s1=H(t(n1.dec)*t(h1.dec)+e(n1.dec)*e(h1.dec)*e(n1.ra-h1.ra)),S1=a(V1*t(s1),h1.dist-V1*e(s1)),T1=a(e(n1.dec)*t(n1.ra-h1.ra),t(n1.dec)*e(h1.dec)-e(n1.dec)*t(h1.dec)*e(n1.ra-h1.ra));return{fraction:(1+e(S1))/2,phase:.5+.5*S1*(T1<0?-1:1)/Math.PI,angle:T1}};function H1(U,t1){return new Date(U.valueOf()+t1*s/24)}C1.getMoonTimes=function(U,t1,n1,h1){var V1=new Date(U);h1?V1.setUTCHours(0,0,0,0):V1.setHours(0,0,0,0);for(var s1=.133*V,S1=C1.getMoonPosition(V1,t1,n1).altitude-s1,T1,m2,g2,T2,l2,l1,X2,N2,u5,P2,_2,o5,a5,K1=1;K1<=24&&(T1=C1.getMoonPosition(H1(V1,K1),t1,n1).altitude-s1,m2=C1.getMoonPosition(H1(V1,K1+1),t1,n1).altitude-s1,l2=(S1+m2)/2-T1,l1=(m2-S1)/2,X2=-l1/(2*l2),N2=(l2*X2+l1)*X2+T1,u5=l1*l1-4*l2*T1,P2=0,u5>=0&&(a5=Math.sqrt(u5)/(Math.abs(l2)*2),_2=X2-a5,o5=X2+a5,Math.abs(_2)<=1&&P2++,Math.abs(o5)<=1&&P2++,_2<-1&&(_2=o5)),P2===1?S1<0?g2=K1+_2:T2=K1+_2:P2===2&&(g2=K1+(N2<0?o5:_2),T2=K1+(N2<0?_2:o5)),!(g2&&T2));K1+=2)S1=m2;var S2={};return g2&&(S2.rise=H1(V1,g2)),T2&&(S2.set=H1(V1,T2)),!g2&&!T2&&(S2[N2>0?"alwaysUp":"alwaysDown"]=!0),S2},typeof bo=="object"&&typeof jt<"u"?jt.exports=C1:typeof define=="function"&&define.amd?define(C1):window.SunCalc=C1})()});var Nn=Li((at,In)=>{(function(r,t){typeof at=="object"&&typeof In<"u"?t(at):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(at,(function(r){"use strict";var t="1.9.4";function e(o){var n,l,u,f;for(l=1,u=arguments.length;l<u;l++){f=arguments[l];for(n in f)o[n]=f[n]}return o}var i=Object.create||(function(){function o(){}return function(n){return o.prototype=n,new o}})();function C(o,n){var l=Array.prototype.slice;if(o.bind)return o.bind.apply(o,l.call(arguments,1));var u=l.call(arguments,2);return function(){return o.apply(n,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function H(o){return"_leaflet_id"in o||(o._leaflet_id=++a),o._leaflet_id}function V(o,n,l){var u,f,S,T;return T=function(){u=!1,f&&(S.apply(l,f),f=!1)},S=function(){u?f=arguments:(o.apply(l,arguments),setTimeout(T,n),u=!0)},S}function s(o,n,l){var u=n[1],f=n[0],S=u-f;return o===u&&l?o:((o-f)%S+S)%S+f}function M(){return!1}function p(o,n){if(n===!1)return o;var l=Math.pow(10,n===void 0?6:n);return Math.round(o*l)/l}function h(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function v(o){return h(o).split(/\s+/)}function g(o,n){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?i(o.options):{});for(var l in n)o.options[l]=n[l];return o.options}function y(o,n,l){var u=[];for(var f in o)u.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(o[f]));return(!n||n.indexOf("?")===-1?"?":"&")+u.join("&")}var O=/\{ *([\w_ -]+) *\}/g;function k(o,n){return o.replace(O,function(l,u){var f=n[u];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(n)),f})}var P=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function $(o,n){for(var l=0;l<o.length;l++)if(o[l]===n)return l;return-1}var D="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function K(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var G=0;function M1(o){var n=+new Date,l=Math.max(0,16-(n-G));return G=n+l,window.setTimeout(o,l)}var J=window.requestAnimationFrame||K("RequestAnimationFrame")||M1,C1=window.cancelAnimationFrame||K("CancelAnimationFrame")||K("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function r1(o,n,l){if(l&&J===M1)o.call(n);else return J.call(window,C(o,n))}function m1(o){o&&C1.call(window,o)}var I1={__proto__:null,extend:e,create:i,bind:C,get lastId(){return a},stamp:H,throttle:V,wrapNum:s,falseFn:M,formatNum:p,trim:h,splitWords:v,setOptions:g,getParamString:y,template:k,isArray:P,indexOf:$,emptyImageUrl:D,requestFn:J,cancelFn:C1,requestAnimFrame:r1,cancelAnimFrame:m1};function O1(){}O1.extend=function(o){var n=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=n.__super__=this.prototype,u=i(l);u.constructor=n,n.prototype=u;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(n[f]=this[f]);return o.statics&&e(n,o.statics),o.includes&&(L2(o.includes),e.apply(null,[u].concat(o.includes))),e(u,o),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,o.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,T=u._initHooks.length;S<T;S++)u._initHooks[S].call(this)}},n},O1.include=function(o){var n=this.prototype.options;return e(this.prototype,o),o.options&&(this.prototype.options=n,this.mergeOptions(o.options)),this},O1.mergeOptions=function(o){return e(this.prototype.options,o),this},O1.addInitHook=function(o){var n=Array.prototype.slice.call(arguments,1),l=typeof o=="function"?o:function(){this[o].apply(this,n)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function L2(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=P(o)?o:[o];for(var n=0;n<o.length;n++)o[n]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var q1={on:function(o,n,l){if(typeof o=="object")for(var u in o)this._on(u,o[u],n);else{o=v(o);for(var f=0,S=o.length;f<S;f++)this._on(o[f],n,l)}return this},off:function(o,n,l){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var u in o)this._off(u,o[u],n);else{o=v(o);for(var f=arguments.length===1,S=0,T=o.length;S<T;S++)f?this._off(o[S]):this._off(o[S],n,l)}return this},_on:function(o,n,l,u){if(typeof n!="function"){console.warn("wrong listener type: "+typeof n);return}if(this._listens(o,n,l)===!1){l===this&&(l=void 0);var f={fn:n,ctx:l};u&&(f.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(f)}},_off:function(o,n,l){var u,f,S;if(this._events&&(u=this._events[o],!!u)){if(arguments.length===1){if(this._firingCount)for(f=0,S=u.length;f<S;f++)u[f].fn=M;delete this._events[o];return}if(typeof n!="function"){console.warn("wrong listener type: "+typeof n);return}var T=this._listens(o,n,l);if(T!==!1){var F=u[T];this._firingCount&&(F.fn=M,this._events[o]=u=u.slice()),u.splice(T,1)}}},fire:function(o,n,l){if(!this.listens(o,l))return this;var u=e({},n,{type:o,target:this,sourceTarget:n&&n.sourceTarget||this});if(this._events){var f=this._events[o];if(f){this._firingCount=this._firingCount+1||1;for(var S=0,T=f.length;S<T;S++){var F=f[S],B=F.fn;F.once&&this.off(o,B,F.ctx),B.call(F.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(o,n,l,u){typeof o!="string"&&console.warn('"string" type argument expected');var f=n;typeof n!="function"&&(u=!!n,f=void 0,l=void 0);var S=this._events&&this._events[o];if(S&&S.length&&this._listens(o,f,l)!==!1)return!0;if(u){for(var T in this._eventParents)if(this._eventParents[T].listens(o,n,l,u))return!0}return!1},_listens:function(o,n,l){if(!this._events)return!1;var u=this._events[o]||[];if(!n)return!!u.length;l===this&&(l=void 0);for(var f=0,S=u.length;f<S;f++)if(u[f].fn===n&&u[f].ctx===l)return f;return!1},once:function(o,n,l){if(typeof o=="object")for(var u in o)this._on(u,o[u],n,!0);else{o=v(o);for(var f=0,S=o.length;f<S;f++)this._on(o[f],n,l,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[H(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[H(o)],this},_propagateEvent:function(o){for(var n in this._eventParents)this._eventParents[n].fire(o.type,e({layer:o.target,propagatedFrom:o.target},o),!0)}};q1.addEventListener=q1.on,q1.removeEventListener=q1.clearAllEventListeners=q1.off,q1.addOneTimeEventListener=q1.once,q1.fireEvent=q1.fire,q1.hasEventListeners=q1.listens;var k1=O1.extend(q1);function X(o,n,l){this.x=l?Math.round(o):o,this.y=l?Math.round(n):n}var Y1=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};X.prototype={clone:function(){return new X(this.x,this.y)},add:function(o){return this.clone()._add(H1(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(H1(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new X(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new X(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Y1(this.x),this.y=Y1(this.y),this},distanceTo:function(o){o=H1(o);var n=o.x-this.x,l=o.y-this.y;return Math.sqrt(n*n+l*l)},equals:function(o){return o=H1(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=H1(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function H1(o,n,l){return o instanceof X?o:P(o)?new X(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new X(o.x,o.y):new X(o,n,l)}function U(o,n){if(o)for(var l=n?[o,n]:o,u=0,f=l.length;u<f;u++)this.extend(l[u])}U.prototype={extend:function(o){var n,l;if(!o)return this;if(o instanceof X||typeof o[0]=="number"||"x"in o)n=l=H1(o);else if(o=t1(o),n=o.min,l=o.max,!n||!l)return this;return!this.min&&!this.max?(this.min=n.clone(),this.max=l.clone()):(this.min.x=Math.min(n.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(n.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(o){return H1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return H1(this.min.x,this.max.y)},getTopRight:function(){return H1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var n,l;return typeof o[0]=="number"||o instanceof X?o=H1(o):o=t1(o),o instanceof U?(n=o.min,l=o.max):n=l=o,n.x>=this.min.x&&l.x<=this.max.x&&n.y>=this.min.y&&l.y<=this.max.y},intersects:function(o){o=t1(o);var n=this.min,l=this.max,u=o.min,f=o.max,S=f.x>=n.x&&u.x<=l.x,T=f.y>=n.y&&u.y<=l.y;return S&&T},overlaps:function(o){o=t1(o);var n=this.min,l=this.max,u=o.min,f=o.max,S=f.x>n.x&&u.x<l.x,T=f.y>n.y&&u.y<l.y;return S&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var n=this.min,l=this.max,u=Math.abs(n.x-l.x)*o,f=Math.abs(n.y-l.y)*o;return t1(H1(n.x-u,n.y-f),H1(l.x+u,l.y+f))},equals:function(o){return o?(o=t1(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function t1(o,n){return!o||o instanceof U?o:new U(o,n)}function n1(o,n){if(o)for(var l=n?[o,n]:o,u=0,f=l.length;u<f;u++)this.extend(l[u])}n1.prototype={extend:function(o){var n=this._southWest,l=this._northEast,u,f;if(o instanceof V1)u=o,f=o;else if(o instanceof n1){if(u=o._southWest,f=o._northEast,!u||!f)return this}else return o?this.extend(s1(o)||h1(o)):this;return!n&&!l?(this._southWest=new V1(u.lat,u.lng),this._northEast=new V1(f.lat,f.lng)):(n.lat=Math.min(u.lat,n.lat),n.lng=Math.min(u.lng,n.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(o){var n=this._southWest,l=this._northEast,u=Math.abs(n.lat-l.lat)*o,f=Math.abs(n.lng-l.lng)*o;return new n1(new V1(n.lat-u,n.lng-f),new V1(l.lat+u,l.lng+f))},getCenter:function(){return new V1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V1(this.getNorth(),this.getWest())},getSouthEast:function(){return new V1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof V1||"lat"in o?o=s1(o):o=h1(o);var n=this._southWest,l=this._northEast,u,f;return o instanceof n1?(u=o.getSouthWest(),f=o.getNorthEast()):u=f=o,u.lat>=n.lat&&f.lat<=l.lat&&u.lng>=n.lng&&f.lng<=l.lng},intersects:function(o){o=h1(o);var n=this._southWest,l=this._northEast,u=o.getSouthWest(),f=o.getNorthEast(),S=f.lat>=n.lat&&u.lat<=l.lat,T=f.lng>=n.lng&&u.lng<=l.lng;return S&&T},overlaps:function(o){o=h1(o);var n=this._southWest,l=this._northEast,u=o.getSouthWest(),f=o.getNorthEast(),S=f.lat>n.lat&&u.lat<l.lat,T=f.lng>n.lng&&u.lng<l.lng;return S&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,n){return o?(o=h1(o),this._southWest.equals(o.getSouthWest(),n)&&this._northEast.equals(o.getNorthEast(),n)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function h1(o,n){return o instanceof n1?o:new n1(o,n)}function V1(o,n,l){if(isNaN(o)||isNaN(n))throw new Error("Invalid LatLng object: ("+o+", "+n+")");this.lat=+o,this.lng=+n,l!==void 0&&(this.alt=+l)}V1.prototype={equals:function(o,n){if(!o)return!1;o=s1(o);var l=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return l<=(n===void 0?1e-9:n)},toString:function(o){return"LatLng("+p(this.lat,o)+", "+p(this.lng,o)+")"},distanceTo:function(o){return T1.distance(this,s1(o))},wrap:function(){return T1.wrapLatLng(this)},toBounds:function(o){var n=180*o/40075017,l=n/Math.cos(Math.PI/180*this.lat);return h1([this.lat-n,this.lng-l],[this.lat+n,this.lng+l])},clone:function(){return new V1(this.lat,this.lng,this.alt)}};function s1(o,n,l){return o instanceof V1?o:P(o)&&typeof o[0]!="object"?o.length===3?new V1(o[0],o[1],o[2]):o.length===2?new V1(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new V1(o.lat,"lng"in o?o.lng:o.lon,o.alt):n===void 0?null:new V1(o,n,l)}var S1={latLngToPoint:function(o,n){var l=this.projection.project(o),u=this.scale(n);return this.transformation._transform(l,u)},pointToLatLng:function(o,n){var l=this.scale(n),u=this.transformation.untransform(o,l);return this.projection.unproject(u)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var n=this.projection.bounds,l=this.scale(o),u=this.transformation.transform(n.min,l),f=this.transformation.transform(n.max,l);return new U(u,f)},infinite:!1,wrapLatLng:function(o){var n=this.wrapLng?s(o.lng,this.wrapLng,!0):o.lng,l=this.wrapLat?s(o.lat,this.wrapLat,!0):o.lat,u=o.alt;return new V1(l,n,u)},wrapLatLngBounds:function(o){var n=o.getCenter(),l=this.wrapLatLng(n),u=n.lat-l.lat,f=n.lng-l.lng;if(u===0&&f===0)return o;var S=o.getSouthWest(),T=o.getNorthEast(),F=new V1(S.lat-u,S.lng-f),B=new V1(T.lat-u,T.lng-f);return new n1(F,B)}},T1=e({},S1,{wrapLng:[-180,180],R:6371e3,distance:function(o,n){var l=Math.PI/180,u=o.lat*l,f=n.lat*l,S=Math.sin((n.lat-o.lat)*l/2),T=Math.sin((n.lng-o.lng)*l/2),F=S*S+Math.cos(u)*Math.cos(f)*T*T,B=2*Math.atan2(Math.sqrt(F),Math.sqrt(1-F));return this.R*B}}),m2=6378137,g2={R:m2,MAX_LATITUDE:85.0511287798,project:function(o){var n=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,o.lat),-l),f=Math.sin(u*n);return new X(this.R*o.lng*n,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(o){var n=180/Math.PI;return new V1((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*n,o.x*n/this.R)},bounds:(function(){var o=m2*Math.PI;return new U([-o,-o],[o,o])})()};function T2(o,n,l,u){if(P(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=n,this._c=l,this._d=u}T2.prototype={transform:function(o,n){return this._transform(o.clone(),n)},_transform:function(o,n){return n=n||1,o.x=n*(this._a*o.x+this._b),o.y=n*(this._c*o.y+this._d),o},untransform:function(o,n){return n=n||1,new X((o.x/n-this._b)/this._a,(o.y/n-this._d)/this._c)}};function l2(o,n,l,u){return new T2(o,n,l,u)}var l1=e({},T1,{code:"EPSG:3857",projection:g2,transformation:(function(){var o=.5/(Math.PI*g2.R);return l2(o,.5,-o,.5)})()}),X2=e({},l1,{code:"EPSG:900913"});function N2(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function u5(o,n){var l="",u,f,S,T,F,B;for(u=0,S=o.length;u<S;u++){for(F=o[u],f=0,T=F.length;f<T;f++)B=F[f],l+=(f?"L":"M")+B.x+" "+B.y;l+=n?c1.svg?"z":"x":""}return l||"M0 0"}var P2=document.documentElement.style,_2="ActiveXObject"in window,o5=_2&&!document.addEventListener,a5="msLaunchUri"in navigator&&!("documentMode"in document),K1=J2("webkit"),S2=J2("android"),z0=J2("android 2")||J2("android 3"),Vt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),st=S2&&J2("Google")&&Vt<537&&!("AudioNode"in window),H7=!!window.opera,W9=!a5&&J2("chrome"),n7=J2("gecko")&&!K1&&!H7&&!_2,x3=!W9&&J2("safari"),r4=J2("phantom"),q="OTransition"in P2,U9=navigator.platform.indexOf("Win")===0,V7=_2&&"transition"in P2,I0="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!z0,j9="MozPerspective"in P2,G9=!window.L_DISABLE_3D&&(V7||I0||j9)&&!q&&!r4,g3=typeof orientation<"u"||J2("mobile"),Or=g3&&K1,Lt=g3&&I0,q9=!window.PointerEvent&&window.MSPointerEvent,Y9=!!(window.PointerEvent||q9),Q9="ontouchstart"in window||!!window.TouchEvent,K9=!window.L_NO_TOUCH&&(Q9||Y9),X9=g3&&H7,lt=g3&&n7,i4=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Mt=(function(){var o=!1;try{var n=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",M,n),window.removeEventListener("testPassiveEventSupport",M,n)}catch{}return o})(),ct=(function(){return!!document.createElement("canvas").getContext})(),C4=!!(document.createElementNS&&N2("svg").createSVGRect),dt=!!C4&&(function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),pt=!C4&&(function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var n=o.firstChild;return n.style.behavior="url(#default#VML)",n&&typeof n.adj=="object"}catch{return!1}})(),o4=navigator.platform.indexOf("Mac")===0,_3=navigator.platform.indexOf("Linux")===0;function J2(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var c1={ie:_2,ielt9:o5,edge:a5,webkit:K1,android:S2,android23:z0,androidStock:st,opera:H7,chrome:W9,gecko:n7,safari:x3,phantom:r4,opera12:q,win:U9,ie3d:V7,webkit3d:I0,gecko3d:j9,any3d:G9,mobile:g3,mobileWebkit:Or,mobileWebkit3d:Lt,msPointer:q9,pointer:Y9,touch:K9,touchNative:Q9,mobileOpera:X9,mobileGecko:lt,retina:i4,passiveEvents:Mt,canvas:ct,svg:C4,vml:pt,inlineSvg:dt,mac:o4,linux:_3},N0=c1.msPointer?"MSPointerDown":"pointerdown",a4=c1.msPointer?"MSPointerMove":"pointermove",H4=c1.msPointer?"MSPointerUp":"pointerup",n4=c1.msPointer?"MSPointerCancel":"pointercancel",V4={touchstart:N0,touchmove:a4,touchend:H4,touchcancel:n4},s4={touchstart:W,touchmove:R,touchend:R,touchcancel:R},c={},m=!1;function d(o,n,l){return n==="touchstart"&&E(),s4[n]?(l=s4[n].bind(this,l),o.addEventListener(V4[n],l,!1),l):(console.warn("wrong event specified:",n),M)}function A(o,n,l){if(!V4[n]){console.warn("wrong event specified:",n);return}o.removeEventListener(V4[n],l,!1)}function x(o){c[o.pointerId]=o}function w(o){c[o.pointerId]&&(c[o.pointerId]=o)}function b(o){delete c[o.pointerId]}function E(){m||(document.addEventListener(N0,x,!0),document.addEventListener(a4,w,!0),document.addEventListener(H4,b,!0),document.addEventListener(n4,b,!0),m=!0)}function R(o,n){if(n.pointerType!==(n.MSPOINTER_TYPE_MOUSE||"mouse")){n.touches=[];for(var l in c)n.touches.push(c[l]);n.changedTouches=[n],o(n)}}function W(o,n){n.MSPOINTER_TYPE_TOUCH&&n.pointerType===n.MSPOINTER_TYPE_TOUCH&&W1(n),R(o,n)}function z(o){var n={},l,u;for(u in o)l=o[u],n[u]=l&&l.bind?l.bind(o):l;return o=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}var o1=200;function p1(o,n){o.addEventListener("dblclick",n);var l=0,u;function f(S){if(S.detail!==1){u=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var T=h5(S);if(!(T.some(function(B){return B instanceof HTMLLabelElement&&B.attributes.for})&&!T.some(function(B){return B instanceof HTMLInputElement||B instanceof HTMLSelectElement}))){var F=Date.now();F-l<=o1?(u++,u===2&&n(z(S))):u=1,l=F}}}return o.addEventListener("click",f),{dblclick:n,simDblclick:f}}function N(o,n){o.removeEventListener("dblclick",n.dblclick),o.removeEventListener("click",n.simDblclick)}var w1=k5(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),U1=k5(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),j1=U1==="webkitTransition"||U1==="OTransition"?U1+"End":"transitionend";function G1(o){return typeof o=="string"?document.getElementById(o):o}function N1(o,n){var l=o.style[n]||o.currentStyle&&o.currentStyle[n];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(o,null);l=u?u[n]:null}return l==="auto"?null:l}function f1(o,n,l){var u=document.createElement(o);return u.className=n||"",l&&l.appendChild(u),u}function F1(o){var n=o.parentNode;n&&n.removeChild(o)}function Z5(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function W2(o){var n=o.parentNode;n&&n.lastChild!==o&&n.appendChild(o)}function O5(o){var n=o.parentNode;n&&n.firstChild!==o&&n.insertBefore(o,n.firstChild)}function H5(o,n){if(o.classList!==void 0)return o.classList.contains(n);var l=n5(o);return l.length>0&&new RegExp("(^|\\s)"+n+"(\\s|$)").test(l)}function d1(o,n){if(o.classList!==void 0)for(var l=v(n),u=0,f=l.length;u<f;u++)o.classList.add(l[u]);else if(!H5(o,n)){var S=n5(o);m5(o,(S?S+" ":"")+n)}}function D1(o,n){o.classList!==void 0?o.classList.remove(n):m5(o,h((" "+n5(o)+" ").replace(" "+n+" "," ")))}function m5(o,n){o.className.baseVal===void 0?o.className=n:o.className.baseVal=n}function n5(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function i2(o,n){"opacity"in o.style?o.style.opacity=n:"filter"in o.style&&d0(o,n)}function d0(o,n){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=o.filters.item(u)}catch{if(n===1)return}n=Math.round(n*100),l?(l.Enabled=n!==100,l.Opacity=n):o.style.filter+=" progid:"+u+"(opacity="+n+")"}function k5(o){for(var n=document.documentElement.style,l=0;l<o.length;l++)if(o[l]in n)return o[l];return!1}function V5(o,n,l){var u=n||new X(0,0);o.style[w1]=(c1.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function X1(o,n){o._leaflet_pos=n,c1.any3d?V5(o,n):(o.style.left=n.x+"px",o.style.top=n.y+"px")}function t5(o){return o._leaflet_pos||new X(0,0)}var p0,A2,q5;if("onselectstart"in document)p0=function(){A1(window,"selectstart",W1)},A2=function(){_1(window,"selectstart",W1)};else{var s5=k5(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);p0=function(){if(s5){var o=document.documentElement.style;q5=o[s5],o[s5]="none"}},A2=function(){s5&&(document.documentElement.style[s5]=q5,q5=void 0)}}function S3(){A1(window,"dragstart",W1)}function w3(){_1(window,"dragstart",W1)}var Y5,Q5;function K5(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(X5(),Y5=o,Q5=o.style.outlineStyle,o.style.outlineStyle="none",A1(window,"keydown",X5))}function X5(){Y5&&(Y5.style.outlineStyle=Q5,Y5=void 0,Q5=void 0,_1(window,"keydown",X5))}function T5(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function J5(o){var n=o.getBoundingClientRect();return{x:n.width/o.offsetWidth||1,y:n.height/o.offsetHeight||1,boundingClientRect:n}}var b3={__proto__:null,TRANSFORM:w1,TRANSITION:U1,TRANSITION_END:j1,get:G1,getStyle:N1,create:f1,remove:F1,empty:Z5,toFront:W2,toBack:O5,hasClass:H5,addClass:d1,removeClass:D1,setClass:m5,getClass:n5,setOpacity:i2,testProp:k5,setTransform:V5,setPosition:X1,getPosition:t5,get disableTextSelection(){return p0},get enableTextSelection(){return A2},disableImageDrag:S3,enableImageDrag:w3,preventOutline:K5,restoreOutline:X5,getSizedParentNode:T5,getScale:J5};function A1(o,n,l,u){if(n&&typeof n=="object")for(var f in n)y3(o,f,n[f],l);else{n=v(n);for(var S=0,T=n.length;S<T;S++)y3(o,n[S],l,u)}return this}var w2="_leaflet_events";function _1(o,n,l,u){if(arguments.length===1)P5(o),delete o[w2];else if(n&&typeof n=="object")for(var f in n)Z3(o,f,n[f],l);else if(n=v(n),arguments.length===2)P5(o,function(F){return $(n,F)!==-1});else for(var S=0,T=n.length;S<T;S++)Z3(o,n[S],l,u);return this}function P5(o,n){for(var l in o[w2]){var u=l.split(/\d/)[0];(!n||n(u))&&Z3(o,u,null,null,l)}}var u0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function y3(o,n,l,u){var f=n+H(l)+(u?"_"+H(u):"");if(o[w2]&&o[w2][f])return this;var S=function(F){return l.call(u||o,F||window.event)},T=S;!c1.touchNative&&c1.pointer&&n.indexOf("touch")===0?S=d(o,n,S):c1.touch&&n==="dblclick"?S=p1(o,S):"addEventListener"in o?n==="touchstart"||n==="touchmove"||n==="wheel"||n==="mousewheel"?o.addEventListener(u0[n]||n,S,c1.passiveEvents?{passive:!1}:!1):n==="mouseenter"||n==="mouseleave"?(S=function(F){F=F||window.event,Y(o,F)&&T(F)},o.addEventListener(u0[n],S,!1)):o.addEventListener(n,T,!1):o.attachEvent("on"+n,S),o[w2]=o[w2]||{},o[w2][f]=S}function Z3(o,n,l,u,f){f=f||n+H(l)+(u?"_"+H(u):"");var S=o[w2]&&o[w2][f];if(!S)return this;!c1.touchNative&&c1.pointer&&n.indexOf("touch")===0?A(o,n,S):c1.touch&&n==="dblclick"?N(o,S):"removeEventListener"in o?o.removeEventListener(u0[n]||n,S,!1):o.detachEvent("on"+n,S),o[w2][f]=null}function u1(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function R1(o){return y3(o,"wheel",u1),this}function h2(o){return A1(o,"mousedown touchstart dblclick contextmenu",u1),o._leaflet_disable_click=!0,this}function W1(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function v2(o){return W1(o),u1(o),this}function h5(o){if(o.composedPath)return o.composedPath();for(var n=[],l=o.target;l;)n.push(l),l=l.parentNode;return n}function m0(o,n){if(!n)return new X(o.clientX,o.clientY);var l=J5(n),u=l.boundingClientRect;return new X((o.clientX-u.left)/l.x-n.clientLeft,(o.clientY-u.top)/l.y-n.clientTop)}var O3=c1.linux&&c1.chrome?window.devicePixelRatio:c1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function s7(o){return c1.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/O3:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Y(o,n){var l=n.relatedTarget;if(!l)return!0;try{for(;l&&l!==o;)l=l.parentNode}catch{return!1}return l!==o}var v1={__proto__:null,on:A1,off:_1,stopPropagation:u1,disableScrollPropagation:R1,disableClickPropagation:h2,preventDefault:W1,stop:v2,getPropagationPath:h5,getMousePosition:m0,getWheelDelta:s7,isExternalTarget:Y,addListener:A1,removeListener:_1},P1=k1.extend({run:function(o,n,l,u){this.stop(),this._el=o,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=t5(o),this._offset=n.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=r1(this._animate,this),this._step()},_step:function(o){var n=+new Date-this._startTime,l=this._duration*1e3;n<l?this._runFrame(this._easeOut(n/l),o):(this._runFrame(1),this._complete())},_runFrame:function(o,n){var l=this._startPos.add(this._offset.multiplyBy(o));n&&l._round(),X1(this._el,l),this.fire("step")},_complete:function(){m1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),a1=k1.extend({options:{crs:l1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,n){n=g(this,n),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=C(this._onResize,this),this._initEvents(),n.maxBounds&&this.setMaxBounds(n.maxBounds),n.zoom!==void 0&&(this._zoom=this._limitZoom(n.zoom)),n.center&&n.zoom!==void 0&&this.setView(s1(n.center),n.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=U1&&c1.any3d&&!c1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A1(this._proxy,j1,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,n,l){if(n=n===void 0?this._zoom:this._limitZoom(n),o=this._limitCenter(s1(o),n,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==n?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,n,l.zoom):this._tryAnimatedPan(o,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(o,n,l.pan&&l.pan.noMoveStart),this},setZoom:function(o,n){return this._loaded?this.setView(this.getCenter(),o,{zoom:n}):(this._zoom=o,this)},zoomIn:function(o,n){return o=o||(c1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,n)},zoomOut:function(o,n){return o=o||(c1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,n)},setZoomAround:function(o,n,l){var u=this.getZoomScale(n),f=this.getSize().divideBy(2),S=o instanceof X?o:this.latLngToContainerPoint(o),T=S.subtract(f).multiplyBy(1-1/u),F=this.containerPointToLatLng(f.add(T));return this.setView(F,n,{zoom:l})},_getBoundsCenterZoom:function(o,n){n=n||{},o=o.getBounds?o.getBounds():h1(o);var l=H1(n.paddingTopLeft||n.padding||[0,0]),u=H1(n.paddingBottomRight||n.padding||[0,0]),f=this.getBoundsZoom(o,!1,l.add(u));if(f=typeof n.maxZoom=="number"?Math.min(n.maxZoom,f):f,f===1/0)return{center:o.getCenter(),zoom:f};var S=u.subtract(l).divideBy(2),T=this.project(o.getSouthWest(),f),F=this.project(o.getNorthEast(),f),B=this.unproject(T.add(F).divideBy(2).add(S),f);return{center:B,zoom:f}},fitBounds:function(o,n){if(o=h1(o),!o.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(o,n);return this.setView(l.center,l.zoom,n)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,n){return this.setView(o,this._zoom,{pan:n})},panBy:function(o,n){if(o=H1(o).round(),n=n||{},!o.x&&!o.y)return this.fire("moveend");if(n.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new P1,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),n.noMoveStart||this.fire("movestart"),n.animate!==!1){d1(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,l,n.duration||.25,n.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,n,l){if(l=l||{},l.animate===!1||!c1.any3d)return this.setView(o,n,l);this._stop();var u=this.project(this.getCenter()),f=this.project(o),S=this.getSize(),T=this._zoom;o=s1(o),n=n===void 0?T:n;var F=Math.max(S.x,S.y),B=F*this.getZoomScale(T,n),j=f.distanceTo(u)||1,i1=1.42,x1=i1*i1;function E1(x2){var L6=x2?-1:1,PV=x2?B:F,EV=B*B-F*F+L6*x1*x1*j*j,FV=2*PV*x1*j,St=EV/FV,Vi=Math.sqrt(St*St+1)-St,$V=Vi<1e-9?-18:Math.log(Vi);return $V}function G2(x2){return(Math.exp(x2)-Math.exp(-x2))/2}function b2(x2){return(Math.exp(x2)+Math.exp(-x2))/2}function A5(x2){return G2(x2)/b2(x2)}var e5=E1(0);function p7(x2){return F*(b2(e5)/b2(e5+i1*x2))}function ZV(x2){return F*(b2(e5)*A5(e5+i1*x2)-G2(e5))/x1}function OV(x2){return 1-Math.pow(1-x2,1.5)}var kV=Date.now(),Hi=(E1(1)-e5)/i1,TV=l.duration?1e3*l.duration:1e3*Hi*.8;function ni(){var x2=(Date.now()-kV)/TV,L6=OV(x2)*Hi;x2<=1?(this._flyToFrame=r1(ni,this),this._move(this.unproject(u.add(f.subtract(u).multiplyBy(ZV(L6)/j)),T),this.getScaleZoom(F/p7(L6),T),{flyTo:!0})):this._move(o,n)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),ni.call(this),this},flyToBounds:function(o,n){var l=this._getBoundsCenterZoom(o,n);return this.flyTo(l.center,l.zoom,n)},setMaxBounds:function(o){return o=h1(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var n=this.options.minZoom;return this.options.minZoom=o,this._loaded&&n!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var n=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&n!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,n){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,h1(o));return l.equals(u)||this.panTo(u,n),this._enforcingBounds=!1,this},panInside:function(o,n){n=n||{};var l=H1(n.paddingTopLeft||n.padding||[0,0]),u=H1(n.paddingBottomRight||n.padding||[0,0]),f=this.project(this.getCenter()),S=this.project(o),T=this.getPixelBounds(),F=t1([T.min.add(l),T.max.subtract(u)]),B=F.getSize();if(!F.contains(S)){this._enforcingBounds=!0;var j=S.subtract(F.getCenter()),i1=F.extend(S).getSize().subtract(B);f.x+=j.x<0?-i1.x:i1.x,f.y+=j.y<0?-i1.y:i1.y,this.panTo(this.unproject(f),n),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=e({animate:!1,pan:!0},o===!0?{animate:!0}:o);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=n.divideBy(2).round(),f=l.divideBy(2).round(),S=u.subtract(f);return!S.x&&!S.y?this:(o.animate&&o.pan?this.panBy(S):(o.pan&&this._rawPanBy(S),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(C(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=e({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=C(this._handleGeolocationResponse,this),l=C(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,l,o):navigator.geolocation.getCurrentPosition(n,l,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var n=o.code,l=o.message||(n===1?"permission denied":n===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:n,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var n=o.coords.latitude,l=o.coords.longitude,u=new V1(n,l),f=u.toBounds(o.coords.accuracy*2),S=this._locateOptions;if(S.setView){var T=this.getBoundsZoom(f);this.setView(u,S.maxZoom?Math.min(T,S.maxZoom):T)}var F={latlng:u,bounds:f,timestamp:o.timestamp};for(var B in o.coords)typeof o.coords[B]=="number"&&(F[B]=o.coords[B]);this.fire("locationfound",F)}},addHandler:function(o,n){if(!n)return this;var l=this[o]=new n(this);return this._handlers.push(l),this.options[o]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),F1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(m1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)F1(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,n){var l="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),u=f1("div",l,n||this._mapPane);return o&&(this._panes[o]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),n=this.unproject(o.getBottomLeft()),l=this.unproject(o.getTopRight());return new n1(n,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,n,l){o=h1(o),l=H1(l||[0,0]);var u=this.getZoom()||0,f=this.getMinZoom(),S=this.getMaxZoom(),T=o.getNorthWest(),F=o.getSouthEast(),B=this.getSize().subtract(l),j=t1(this.project(F,u),this.project(T,u)).getSize(),i1=c1.any3d?this.options.zoomSnap:1,x1=B.x/j.x,E1=B.y/j.y,G2=n?Math.max(x1,E1):Math.min(x1,E1);return u=this.getScaleZoom(G2,u),i1&&(u=Math.round(u/(i1/100))*(i1/100),u=n?Math.ceil(u/i1)*i1:Math.floor(u/i1)*i1),Math.max(f,Math.min(S,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new X(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,n){var l=this._getTopLeftPoint(o,n);return new U(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,n){var l=this.options.crs;return n=n===void 0?this._zoom:n,l.scale(o)/l.scale(n)},getScaleZoom:function(o,n){var l=this.options.crs;n=n===void 0?this._zoom:n;var u=l.zoom(o*l.scale(n));return isNaN(u)?1/0:u},project:function(o,n){return n=n===void 0?this._zoom:n,this.options.crs.latLngToPoint(s1(o),n)},unproject:function(o,n){return n=n===void 0?this._zoom:n,this.options.crs.pointToLatLng(H1(o),n)},layerPointToLatLng:function(o){var n=H1(o).add(this.getPixelOrigin());return this.unproject(n)},latLngToLayerPoint:function(o){var n=this.project(s1(o))._round();return n._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(s1(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(h1(o))},distance:function(o,n){return this.options.crs.distance(s1(o),s1(n))},containerPointToLayerPoint:function(o){return H1(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return H1(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var n=this.containerPointToLayerPoint(H1(o));return this.layerPointToLatLng(n)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(s1(o)))},mouseEventToContainerPoint:function(o){return m0(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var n=this._container=G1(o);if(n){if(n._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A1(n,"scroll",this._onScroll,this),this._containerId=H(n)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&c1.any3d,d1(o,"leaflet-container"+(c1.touch?" leaflet-touch":"")+(c1.retina?" leaflet-retina":"")+(c1.ielt9?" leaflet-oldie":"")+(c1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var n=N1(o,"position");n!=="absolute"&&n!=="relative"&&n!=="fixed"&&n!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),X1(this._mapPane,new X(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(d1(o.markerPane,"leaflet-zoom-hide"),d1(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,n,l){X1(this._mapPane,new X(0,0));var u=!this._loaded;this._loaded=!0,n=this._limitZoom(n),this.fire("viewprereset");var f=this._zoom!==n;this._moveStart(f,l)._move(o,n)._moveEnd(f),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(o,n){return o&&this.fire("zoomstart"),n||this.fire("movestart"),this},_move:function(o,n,l,u){n===void 0&&(n=this._zoom);var f=this._zoom!==n;return this._zoom=n,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),u?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return m1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){X1(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[H(this._container)]=this;var n=o?_1:A1;n(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&n(window,"resize",this._onResize,this),c1.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){m1(this._resizeRequest),this._resizeRequest=r1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,n){for(var l=[],u,f=n==="mouseout"||n==="mouseover",S=o.target||o.srcElement,T=!1;S;){if(u=this._targets[H(S)],u&&(n==="click"||n==="preclick")&&this._draggableMoved(u)){T=!0;break}if(u&&u.listens(n,!0)&&(f&&!Y(S,o)||(l.push(u),f))||S===this._container)break;S=S.parentNode}return!l.length&&!T&&!f&&this.listens(n,!0)&&(l=[this]),l},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var n=o.target||o.srcElement;if(!(!this._loaded||n._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(n))){var l=o.type;l==="mousedown"&&K5(n),this._fireDOMEvent(o,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,n,l){if(o.type==="click"){var u=e({},o);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var f=this._findEventTargets(o,n);if(l){for(var S=[],T=0;T<l.length;T++)l[T].listens(n,!0)&&S.push(l[T]);f=S.concat(f)}if(f.length){n==="contextmenu"&&W1(o);var F=f[0],B={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var j=F.getLatLng&&(!F._radius||F._radius<=10);B.containerPoint=j?this.latLngToContainerPoint(F.getLatLng()):this.mouseEventToContainerPoint(o),B.layerPoint=this.containerPointToLayerPoint(B.containerPoint),B.latlng=j?F.getLatLng():this.layerPointToLatLng(B.layerPoint)}for(T=0;T<f.length;T++)if(f[T].fire(n,B,!0),B.originalEvent._stopped||f[T].options.bubblingMouseEvents===!1&&$(this._mouseEvents,n)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,n=this._handlers.length;o<n;o++)this._handlers[o].disable()},whenReady:function(o,n){return this._loaded?o.call(n||this,{target:this}):this.on("load",o,n),this},_getMapPanePos:function(){return t5(this._mapPane)||new X(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,n){var l=o&&n!==void 0?this._getNewPixelOrigin(o,n):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,n){var l=this.getSize()._divideBy(2);return this.project(o,n)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,n,l){var u=this._getNewPixelOrigin(l,n);return this.project(o,n)._subtract(u)},_latLngBoundsToNewLayerBounds:function(o,n,l){var u=this._getNewPixelOrigin(l,n);return t1([this.project(o.getSouthWest(),n)._subtract(u),this.project(o.getNorthWest(),n)._subtract(u),this.project(o.getSouthEast(),n)._subtract(u),this.project(o.getNorthEast(),n)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,n,l){if(!l)return o;var u=this.project(o,n),f=this.getSize().divideBy(2),S=new U(u.subtract(f),u.add(f)),T=this._getBoundsOffset(S,l,n);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?o:this.unproject(u.add(T),n)},_limitOffset:function(o,n){if(!n)return o;var l=this.getPixelBounds(),u=new U(l.min.add(o),l.max.add(o));return o.add(this._getBoundsOffset(u,n))},_getBoundsOffset:function(o,n,l){var u=t1(this.project(n.getNorthEast(),l),this.project(n.getSouthWest(),l)),f=u.min.subtract(o.min),S=u.max.subtract(o.max),T=this._rebound(f.x,-S.x),F=this._rebound(f.y,-S.y);return new X(T,F)},_rebound:function(o,n){return o+n>0?Math.round(o-n)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(n))},_limitZoom:function(o){var n=this.getMinZoom(),l=this.getMaxZoom(),u=c1.any3d?this.options.zoomSnap:1;return u&&(o=Math.round(o/u)*u),Math.max(n,Math.min(l,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){D1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,n){var l=this._getCenterOffset(o)._trunc();return(n&&n.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,n),!0)},_createAnimProxy:function(){var o=this._proxy=f1("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(n){var l=w1,u=this._proxy.style[l];V5(this._proxy,this.project(n.center,n.zoom),this.getZoomScale(n.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){F1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),n=this.getZoom();V5(this._proxy,this.project(o,n),this.getZoomScale(n,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,n,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(n-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(n),f=this._getCenterOffset(o)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(f)?!1:(r1(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(o,n,!0)},this),!0)},_animateZoom:function(o,n,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=n,d1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:n,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(C(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&D1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function E2(o,n){return new a1(o,n)}var a2=O1.extend({options:{position:"topright"},initialize:function(o){g(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var n=this._map;return n&&n.removeControl(this),this.options.position=o,n&&n.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var n=this._container=this.onAdd(o),l=this.getPosition(),u=o._controlCorners[l];return d1(n,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(n,u.firstChild):u.appendChild(n),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(F1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),U2=function(o){return new a2(o)};a1.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},n="leaflet-",l=this._controlContainer=f1("div",n+"control-container",this._container);function u(f,S){var T=n+f+" "+n+S;o[f+S]=f1("div",T,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)F1(this._controlCorners[o]);F1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var W0=a2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,n,l,u){return l<u?-1:u<l?1:0}},initialize:function(o,n,l){g(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in o)this._addLayer(o[u],u);for(u in n)this._addLayer(n[u],u,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return a2.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,n){return this._addLayer(o,n),this._map?this._update():this},addOverlay:function(o,n){return this._addLayer(o,n,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var n=this._getLayer(H(o));return n&&this._layers.splice(this._layers.indexOf(n),1),this._map?this._update():this},expand:function(){d1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(d1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):D1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return D1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",n=this._container=f1("div",o),l=this.options.collapsed;n.setAttribute("aria-haspopup",!0),h2(n),R1(n);var u=this._section=f1("section",o+"-list");l&&(this._map.on("click",this.collapse,this),A1(n,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=f1("a",o+"-toggle",n);f.href="#",f.title="Layers",f.setAttribute("role","button"),A1(f,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){W1(S),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=f1("div",o+"-base",u),this._separator=f1("div",o+"-separator",u),this._overlaysList=f1("div",o+"-overlays",u),n.appendChild(u)},_getLayer:function(o){for(var n=0;n<this._layers.length;n++)if(this._layers[n]&&H(this._layers[n].layer)===o)return this._layers[n]},_addLayer:function(o,n,l){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:n,overlay:l}),this.options.sortLayers&&this._layers.sort(C(function(u,f){return this.options.sortFunction(u.layer,f.layer,u.name,f.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Z5(this._baseLayersList),Z5(this._overlaysList),this._layerControlInputs=[];var o,n,l,u,f=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),n=n||u.overlay,o=o||!u.overlay,f+=u.overlay?0:1;return this.options.hideSingleBase&&(o=o&&f>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=n&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var n=this._getLayer(H(o.target)),l=n.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;l&&this._map.fire(l,n)},_createRadioElement:function(o,n){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(n?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(o){var n=document.createElement("label"),l=this._map.hasLayer(o.layer),u;o.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+H(this),l),this._layerControlInputs.push(u),u.layerId=H(o.layer),A1(u,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+o.name;var S=document.createElement("span");n.appendChild(S),S.appendChild(u),S.appendChild(f);var T=o.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){if(!this._preventClick){var o=this._layerControlInputs,n,l,u=[],f=[];this._handlingClick=!0;for(var S=o.length-1;S>=0;S--)n=o[S],l=this._getLayer(n.layerId).layer,n.checked?u.push(l):n.checked||f.push(l);for(S=0;S<f.length;S++)this._map.hasLayer(f[S])&&this._map.removeLayer(f[S]);for(S=0;S<u.length;S++)this._map.hasLayer(u[S])||this._map.addLayer(u[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,n,l,u=this._map.getZoom(),f=o.length-1;f>=0;f--)n=o[f],l=this._getLayer(n.layerId).layer,n.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;this._preventClick=!0,A1(o,"click",W1),this.expand();var n=this;setTimeout(function(){_1(o,"click",W1),n._preventClick=!1})}}),L4=function(o,n,l){return new W0(o,n,l)},j2=a2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var n="leaflet-control-zoom",l=f1("div",n+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,n+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,n+"-out",l,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,n,l,u,f){var S=f1("a",l,u);return S.innerHTML=o,S.href="#",S.title=n,S.setAttribute("role","button"),S.setAttribute("aria-label",n),h2(S),A1(S,"click",v2),A1(S,"click",f,this),A1(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var o=this._map,n="leaflet-disabled";D1(this._zoomInButton,n),D1(this._zoomOutButton,n),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(d1(this._zoomOutButton,n),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(d1(this._zoomInButton,n),this._zoomInButton.setAttribute("aria-disabled","true"))}});a1.mergeOptions({zoomControl:!0}),a1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new j2,this.addControl(this.zoomControl))});var l4=function(o){return new j2(o)},J9=a2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var n="leaflet-control-scale",l=f1("div",n),u=this.options;return this._addScales(u,n+"-line",l),o.on(u.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),l},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,n,l){o.metric&&(this._mScale=f1("div",n,l)),o.imperial&&(this._iScale=f1("div",n,l))},_update:function(){var o=this._map,n=o.getSize().y/2,l=o.distance(o.containerPointToLatLng([0,n]),o.containerPointToLatLng([this.options.maxWidth,n]));this._updateScales(l)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var n=this._getRoundNum(o),l=n<1e3?n+" m":n/1e3+" km";this._updateScale(this._mScale,l,n/o)},_updateImperial:function(o){var n=o*3.2808399,l,u,f;n>5280?(l=n/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(f=this._getRoundNum(n),this._updateScale(this._iScale,f+" ft",f/n))},_updateScale:function(o,n,l){o.style.width=Math.round(this.options.maxWidth*l)+"px",o.innerHTML=n},_getRoundNum:function(o){var n=Math.pow(10,(Math.floor(o)+"").length-1),l=o/n;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,n*l}}),ut=function(o){return new J9(o)},M4='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',c4=a2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(c1.inlineSvg?M4+" ":"")+"Leaflet</a>"},initialize:function(o){g(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=f1("div","leaflet-control-attribution"),h2(this._container);for(var n in o._layers)o._layers[n].getAttribution&&this.addAttribution(o._layers[n].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var n in this._attributions)this._attributions[n]&&o.push(n);var l=[];this.options.prefix&&l.push(this.options.prefix),o.length&&l.push(o.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});a1.mergeOptions({attributionControl:!0}),a1.addInitHook(function(){this.options.attributionControl&&new c4().addTo(this)});var Xn=function(o){return new c4(o)};a2.Layers=W0,a2.Zoom=j2,a2.Scale=J9,a2.Attribution=c4,U2.layers=L4,U2.zoom=l4,U2.scale=ut,U2.attribution=Xn;var t0=O1.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});t0.addTo=function(o,n){return o.addHandler(n,this),this};var Jn={Events:q1},kr=c1.touch?"touchstart mousedown":"mousedown",U0=k1.extend({options:{clickTolerance:3},initialize:function(o,n,l,u){g(this,u),this._element=o,this._dragStartTarget=n||o,this._preventOutline=l},enable:function(){this._enabled||(A1(this._dragStartTarget,kr,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(U0._dragging===this&&this.finishDrag(!0),_1(this._dragStartTarget,kr,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!H5(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){U0._dragging===this&&this.finishDrag();return}if(!(U0._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(U0._dragging=this,this._preventOutline&&K5(this._element),S3(),p0(),!this._moving)){this.fire("down");var n=o.touches?o.touches[0]:o,l=T5(this._element);this._startPoint=new X(n.clientX,n.clientY),this._startPos=t5(this._element),this._parentScale=J5(l);var u=o.type==="mousedown";A1(document,u?"mousemove":"touchmove",this._onMove,this),A1(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var n=o.touches&&o.touches.length===1?o.touches[0]:o,l=new X(n.clientX,n.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,W1(o),this._moved||(this.fire("dragstart"),this._moved=!0,d1(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),d1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),X1(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){D1(document.body,"leaflet-dragging"),this._lastTarget&&(D1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),_1(document,"mousemove touchmove",this._onMove,this),_1(document,"mouseup touchend touchcancel",this._onUp,this),w3(),A2();var n=this._moved&&this._moving;this._moving=!1,U0._dragging=!1,n&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)})}});function Tr(o,n,l){var u,f=[1,4,2,8],S,T,F,B,j,i1,x1,E1;for(S=0,i1=o.length;S<i1;S++)o[S]._code=k3(o[S],n);for(F=0;F<4;F++){for(x1=f[F],u=[],S=0,i1=o.length,T=i1-1;S<i1;T=S++)B=o[S],j=o[T],B._code&x1?j._code&x1||(E1=t6(j,B,x1,n,l),E1._code=k3(E1,n),u.push(E1)):(j._code&x1&&(E1=t6(j,B,x1,n,l),E1._code=k3(E1,n),u.push(E1)),u.push(B));o=u}return o}function Pr(o,n){var l,u,f,S,T,F,B,j,i1;if(!o||o.length===0)throw new Error("latlngs not passed");f5(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var x1=s1([0,0]),E1=h1(o),G2=E1.getNorthWest().distanceTo(E1.getSouthWest())*E1.getNorthEast().distanceTo(E1.getNorthWest());G2<1700&&(x1=mt(o));var b2=o.length,A5=[];for(l=0;l<b2;l++){var e5=s1(o[l]);A5.push(n.project(s1([e5.lat-x1.lat,e5.lng-x1.lng])))}for(F=B=j=0,l=0,u=b2-1;l<b2;u=l++)f=A5[l],S=A5[u],T=f.y*S.x-S.y*f.x,B+=(f.x+S.x)*T,j+=(f.y+S.y)*T,F+=T*3;F===0?i1=A5[0]:i1=[B/F,j/F];var p7=n.unproject(H1(i1));return s1([p7.lat+x1.lat,p7.lng+x1.lng])}function mt(o){for(var n=0,l=0,u=0,f=0;f<o.length;f++){var S=s1(o[f]);n+=S.lat,l+=S.lng,u++}return s1([n/u,l/u])}var tV={__proto__:null,clipPolygon:Tr,polygonCenter:Pr,centroid:mt};function Er(o,n){if(!n||!o.length)return o.slice();var l=n*n;return o=iV(o,l),o=rV(o,l),o}function Fr(o,n,l){return Math.sqrt(d4(o,n,l,!0))}function eV(o,n,l){return d4(o,n,l)}function rV(o,n){var l=o.length,u=typeof Uint8Array<"u"?Uint8Array:Array,f=new u(l);f[0]=f[l-1]=1,ht(o,f,n,0,l-1);var S,T=[];for(S=0;S<l;S++)f[S]&&T.push(o[S]);return T}function ht(o,n,l,u,f){var S=0,T,F,B;for(F=u+1;F<=f-1;F++)B=d4(o[F],o[u],o[f],!0),B>S&&(T=F,S=B);S>l&&(n[T]=1,ht(o,n,l,u,T),ht(o,n,l,T,f))}function iV(o,n){for(var l=[o[0]],u=1,f=0,S=o.length;u<S;u++)CV(o[u],o[f])>n&&(l.push(o[u]),f=u);return f<S-1&&l.push(o[S-1]),l}var $r;function Dr(o,n,l,u,f){var S=u?$r:k3(o,l),T=k3(n,l),F,B,j;for($r=T;;){if(!(S|T))return[o,n];if(S&T)return!1;F=S||T,B=t6(o,n,F,l,f),j=k3(B,l),F===S?(o=B,S=j):(n=B,T=j)}}function t6(o,n,l,u,f){var S=n.x-o.x,T=n.y-o.y,F=u.min,B=u.max,j,i1;return l&8?(j=o.x+S*(B.y-o.y)/T,i1=B.y):l&4?(j=o.x+S*(F.y-o.y)/T,i1=F.y):l&2?(j=B.x,i1=o.y+T*(B.x-o.x)/S):l&1&&(j=F.x,i1=o.y+T*(F.x-o.x)/S),new X(j,i1,f)}function k3(o,n){var l=0;return o.x<n.min.x?l|=1:o.x>n.max.x&&(l|=2),o.y<n.min.y?l|=4:o.y>n.max.y&&(l|=8),l}function CV(o,n){var l=n.x-o.x,u=n.y-o.y;return l*l+u*u}function d4(o,n,l,u){var f=n.x,S=n.y,T=l.x-f,F=l.y-S,B=T*T+F*F,j;return B>0&&(j=((o.x-f)*T+(o.y-S)*F)/B,j>1?(f=l.x,S=l.y):j>0&&(f+=T*j,S+=F*j)),T=o.x-f,F=o.y-S,u?T*T+F*F:new X(f,S)}function f5(o){return!P(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Rr(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),f5(o)}function Br(o,n){var l,u,f,S,T,F,B,j;if(!o||o.length===0)throw new Error("latlngs not passed");f5(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var i1=s1([0,0]),x1=h1(o),E1=x1.getNorthWest().distanceTo(x1.getSouthWest())*x1.getNorthEast().distanceTo(x1.getNorthWest());E1<1700&&(i1=mt(o));var G2=o.length,b2=[];for(l=0;l<G2;l++){var A5=s1(o[l]);b2.push(n.project(s1([A5.lat-i1.lat,A5.lng-i1.lng])))}for(l=0,u=0;l<G2-1;l++)u+=b2[l].distanceTo(b2[l+1])/2;if(u===0)j=b2[0];else for(l=0,S=0;l<G2-1;l++)if(T=b2[l],F=b2[l+1],f=T.distanceTo(F),S+=f,S>u){B=(S-u)/f,j=[F.x-B*(F.x-T.x),F.y-B*(F.y-T.y)];break}var e5=n.unproject(H1(j));return s1([e5.lat+i1.lat,e5.lng+i1.lng])}var oV={__proto__:null,simplify:Er,pointToSegmentDistance:Fr,closestPointOnSegment:eV,clipSegment:Dr,_getEdgeIntersection:t6,_getBitCode:k3,_sqClosestPointOnSegment:d4,isFlat:f5,_flat:Rr,polylineCenter:Br},ft={project:function(o){return new X(o.lng,o.lat)},unproject:function(o){return new V1(o.y,o.x)},bounds:new U([-180,-90],[180,90])},At={R:6378137,R_MINOR:6356752314245179e-9,bounds:new U([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var n=Math.PI/180,l=this.R,u=o.lat*n,f=this.R_MINOR/l,S=Math.sqrt(1-f*f),T=S*Math.sin(u),F=Math.tan(Math.PI/4-u/2)/Math.pow((1-T)/(1+T),S/2);return u=-l*Math.log(Math.max(F,1e-10)),new X(o.lng*n*l,u)},unproject:function(o){for(var n=180/Math.PI,l=this.R,u=this.R_MINOR/l,f=Math.sqrt(1-u*u),S=Math.exp(-o.y/l),T=Math.PI/2-2*Math.atan(S),F=0,B=.1,j;F<15&&Math.abs(B)>1e-7;F++)j=f*Math.sin(T),j=Math.pow((1-j)/(1+j),f/2),B=Math.PI/2-2*Math.atan(S*j)-T,T+=B;return new V1(T*n,o.x*n/l)}},aV={__proto__:null,LonLat:ft,Mercator:At,SphericalMercator:g2},HV=e({},T1,{code:"EPSG:3395",projection:At,transformation:(function(){var o=.5/(Math.PI*At.R);return l2(o,.5,-o,.5)})()}),zr=e({},T1,{code:"EPSG:4326",projection:ft,transformation:l2(1/180,1,-1/180,.5)}),nV=e({},S1,{projection:ft,transformation:l2(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,n){var l=n.lng-o.lng,u=n.lat-o.lat;return Math.sqrt(l*l+u*u)},infinite:!0});S1.Earth=T1,S1.EPSG3395=HV,S1.EPSG3857=l1,S1.EPSG900913=X2,S1.EPSG4326=zr,S1.Simple=nV;var E5=k1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[H(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[H(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var n=o.target;if(n.hasLayer(this)){if(this._map=n,this._zoomAnimated=n._zoomAnimated,this.getEvents){var l=this.getEvents();n.on(l,this),this.once("remove",function(){n.off(l,this)},this)}this.onAdd(n),this.fire("add"),n.fire("layeradd",{layer:this})}}});a1.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var n=H(o);return this._layers[n]?this:(this._layers[n]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var n=H(o);return this._layers[n]?(this._loaded&&o.onRemove(this),delete this._layers[n],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return H(o)in this._layers},eachLayer:function(o,n){for(var l in this._layers)o.call(n,this._layers[l]);return this},_addLayers:function(o){o=o?P(o)?o:[o]:[];for(var n=0,l=o.length;n<l;n++)this.addLayer(o[n])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[H(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var n=H(o);this._zoomBoundLayers[n]&&(delete this._zoomBoundLayers[n],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,n=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var f=this._zoomBoundLayers[u].options;o=f.minZoom===void 0?o:Math.min(o,f.minZoom),n=f.maxZoom===void 0?n:Math.max(n,f.maxZoom)}this._layersMaxZoom=n===-1/0?void 0:n,this._layersMinZoom=o===1/0?void 0:o,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var L7=E5.extend({initialize:function(o,n){g(this,n),this._layers={};var l,u;if(o)for(l=0,u=o.length;l<u;l++)this.addLayer(o[l])},addLayer:function(o){var n=this.getLayerId(o);return this._layers[n]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var n=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[n]&&this._map.removeLayer(this._layers[n]),delete this._layers[n],this},hasLayer:function(o){var n=typeof o=="number"?o:this.getLayerId(o);return n in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var n=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[o]&&u[o].apply(u,n);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,n){for(var l in this._layers)o.call(n,this._layers[l]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return H(o)}}),VV=function(o,n){return new L7(o,n)},h0=L7.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),L7.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),L7.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new n1;for(var n in this._layers){var l=this._layers[n];o.extend(l.getBounds?l.getBounds():l.getLatLng())}return o}}),sV=function(o,n){return new h0(o,n)},l7=O1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){g(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,n){var l=this._getIconUrl(o);if(!l){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,n&&n.tagName==="IMG"?n:null);return this._setIconStyles(u,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(o,n){var l=this.options,u=l[n+"Size"];typeof u=="number"&&(u=[u,u]);var f=H1(u),S=H1(n==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));o.className="leaflet-marker-"+n+" "+(l.className||""),S&&(o.style.marginLeft=-S.x+"px",o.style.marginTop=-S.y+"px"),f&&(o.style.width=f.x+"px",o.style.height=f.y+"px")},_createImg:function(o,n){return n=n||document.createElement("img"),n.src=o,n},_getIconUrl:function(o){return c1.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function LV(o){return new l7(o)}var p4=l7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof p4.imagePath!="string"&&(p4.imagePath=this._detectIconPath()),(this.options.imagePath||p4.imagePath)+l7.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var n=function(l,u,f){var S=u.exec(l);return S&&S[f]};return o=n(o,/^url\((['"])?(.+)\1\)$/,2),o&&n(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=f1("div","leaflet-default-icon-path",document.body),n=N1(o,"background-image")||N1(o,"backgroundImage");if(document.body.removeChild(o),n=this._stripUrl(n),n)return n;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Ir=t0.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new U0(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),d1(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&D1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var n=this._marker,l=n._map,u=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,S=t5(n._icon),T=l.getPixelBounds(),F=l.getPixelOrigin(),B=t1(T.min._subtract(F).add(f),T.max._subtract(F).subtract(f));if(!B.contains(S)){var j=H1((Math.max(B.max.x,S.x)-B.max.x)/(T.max.x-B.max.x)-(Math.min(B.min.x,S.x)-B.min.x)/(T.min.x-B.min.x),(Math.max(B.max.y,S.y)-B.max.y)/(T.max.y-B.max.y)-(Math.min(B.min.y,S.y)-B.min.y)/(T.min.y-B.min.y)).multiplyBy(u);l.panBy(j,{animate:!1}),this._draggable._newPos._add(j),this._draggable._startPos._add(j),X1(n._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=r1(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(m1(this._panRequest),this._panRequest=r1(this._adjustPan.bind(this,o)))},_onDrag:function(o){var n=this._marker,l=n._shadow,u=t5(n._icon),f=n._map.layerPointToLatLng(u);l&&X1(l,u),n._latlng=f,o.latlng=f,o.oldLatLng=this._oldLatLng,n.fire("move",o).fire("drag",o)},_onDragEnd:function(o){m1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),e6=E5.extend({options:{icon:new p4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,n){g(this,n),this._latlng=s1(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var n=this._latlng;return this._latlng=s1(o),this.update(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,n="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=o.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,o.title&&(l.title=o.title),l.tagName==="IMG"&&(l.alt=o.alt||"")),d1(l,n),o.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A1(l,"focus",this._panOnFocus,this);var f=o.icon.createShadow(this._shadow),S=!1;f!==this._shadow&&(this._removeShadow(),S=!0),f&&(d1(f,n),f.alt=""),this._shadow=f,o.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&S&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&_1(this._icon,"focus",this._panOnFocus,this),F1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&F1(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&X1(this._icon,o),this._shadow&&X1(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var n=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(n)},_initInteraction:function(){if(this.options.interactive&&(d1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ir)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ir(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&i2(this._icon,o),this._shadow&&i2(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var n=this.options.icon.options,l=n.iconSize?H1(n.iconSize):H1(0,0),u=n.iconAnchor?H1(n.iconAnchor):H1(0,0);o.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function lV(o,n){return new e6(o,n)}var j0=E5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return g(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),r6=j0.extend({options:{fill:!0,radius:10},initialize:function(o,n){g(this,n),this._latlng=s1(o),this._radius=this.options.radius},setLatLng:function(o){var n=this._latlng;return this._latlng=s1(o),this.redraw(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var n=o&&o.radius||this._radius;return j0.prototype.setStyle.call(this,o),this.setRadius(n),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,n=this._radiusY||o,l=this._clickTolerance(),u=[o+l,n+l];this._pxBounds=new U(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function MV(o,n){return new r6(o,n)}var vt=r6.extend({initialize:function(o,n,l){if(typeof n=="number"&&(n=e({},l,{radius:n})),g(this,n),this._latlng=s1(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new n1(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:j0.prototype.setStyle,_project:function(){var o=this._latlng.lng,n=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===T1.distance){var f=Math.PI/180,S=this._mRadius/T1.R/f,T=l.project([n+S,o]),F=l.project([n-S,o]),B=T.add(F).divideBy(2),j=l.unproject(B).lat,i1=Math.acos((Math.cos(S*f)-Math.sin(n*f)*Math.sin(j*f))/(Math.cos(n*f)*Math.cos(j*f)))/f;(isNaN(i1)||i1===0)&&(i1=S/Math.cos(Math.PI/180*n)),this._point=B.subtract(l.getPixelOrigin()),this._radius=isNaN(i1)?0:B.x-l.project([j,o-i1]).x,this._radiusY=B.y-T.y}else{var x1=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(x1).x}this._updateBounds()}});function cV(o,n,l){return new vt(o,n,l)}var f0=j0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,n){g(this,n),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var n=1/0,l=null,u=d4,f,S,T=0,F=this._parts.length;T<F;T++)for(var B=this._parts[T],j=1,i1=B.length;j<i1;j++){f=B[j-1],S=B[j];var x1=u(o,f,S,!0);x1<n&&(n=x1,l=u(o,f,S))}return l&&(l.distance=Math.sqrt(n)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Br(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,n){return n=n||this._defaultShape(),o=s1(o),n.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new n1,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return f5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var n=[],l=f5(o),u=0,f=o.length;u<f;u++)l?(n[u]=s1(o[u]),this._bounds.extend(n[u])):n[u]=this._convertLatLngs(o[u]);return n},_project:function(){var o=new U;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),n=new X(o,o);this._rawPxBounds&&(this._pxBounds=new U([this._rawPxBounds.min.subtract(n),this._rawPxBounds.max.add(n)]))},_projectLatlngs:function(o,n,l){var u=o[0]instanceof V1,f=o.length,S,T;if(u){for(T=[],S=0;S<f;S++)T[S]=this._map.latLngToLayerPoint(o[S]),l.extend(T[S]);n.push(T)}else for(S=0;S<f;S++)this._projectLatlngs(o[S],n,l)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var n=this._parts,l,u,f,S,T,F,B;for(l=0,f=0,S=this._rings.length;l<S;l++)for(B=this._rings[l],u=0,T=B.length;u<T-1;u++)F=Dr(B[u],B[u+1],o,u,!0),F&&(n[f]=n[f]||[],n[f].push(F[0]),(F[1]!==B[u+1]||u===T-2)&&(n[f].push(F[1]),f++))}},_simplifyPoints:function(){for(var o=this._parts,n=this.options.smoothFactor,l=0,u=o.length;l<u;l++)o[l]=Er(o[l],n)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,n){var l,u,f,S,T,F,B=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(l=0,S=this._parts.length;l<S;l++)for(F=this._parts[l],u=0,T=F.length,f=T-1;u<T;f=u++)if(!(!n&&u===0)&&Fr(o,F[f],F[u])<=B)return!0;return!1}});function dV(o,n){return new f0(o,n)}f0._flat=Rr;var M7=f0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pr(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var n=f0.prototype._convertLatLngs.call(this,o),l=n.length;return l>=2&&n[0]instanceof V1&&n[0].equals(n[l-1])&&n.pop(),n},_setLatLngs:function(o){f0.prototype._setLatLngs.call(this,o),f5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return f5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,n=this.options.weight,l=new X(n,n);if(o=new U(o.min.subtract(l),o.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,f=this._rings.length,S;u<f;u++)S=Tr(this._rings[u],o,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var n=!1,l,u,f,S,T,F,B,j;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(S=0,B=this._parts.length;S<B;S++)for(l=this._parts[S],T=0,j=l.length,F=j-1;T<j;F=T++)u=l[T],f=l[F],u.y>o.y!=f.y>o.y&&o.x<(f.x-u.x)*(o.y-u.y)/(f.y-u.y)+u.x&&(n=!n);return n||f0.prototype._containsPoint.call(this,o,!0)}});function pV(o,n){return new M7(o,n)}var A0=h0.extend({initialize:function(o,n){g(this,n),this._layers={},o&&this.addData(o)},addData:function(o){var n=P(o)?o:o.features,l,u,f;if(n){for(l=0,u=n.length;l<u;l++)f=n[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var S=this.options;if(S.filter&&!S.filter(o))return this;var T=i6(o,S);return T?(T.feature=a6(o),T.defaultOptions=T.options,this.resetStyle(T),S.onEachFeature&&S.onEachFeature(o,T),this.addLayer(T)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=e({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(n){this._setLayerStyle(n,o)},this)},_setLayerStyle:function(o,n){o.setStyle&&(typeof n=="function"&&(n=n(o.feature)),o.setStyle(n))}});function i6(o,n){var l=o.type==="Feature"?o.geometry:o,u=l?l.coordinates:null,f=[],S=n&&n.pointToLayer,T=n&&n.coordsToLatLng||xt,F,B,j,i1;if(!u&&!l)return null;switch(l.type){case"Point":return F=T(u),Nr(S,o,F,n);case"MultiPoint":for(j=0,i1=u.length;j<i1;j++)F=T(u[j]),f.push(Nr(S,o,F,n));return new h0(f);case"LineString":case"MultiLineString":return B=C6(u,l.type==="LineString"?0:1,T),new f0(B,n);case"Polygon":case"MultiPolygon":return B=C6(u,l.type==="Polygon"?1:2,T),new M7(B,n);case"GeometryCollection":for(j=0,i1=l.geometries.length;j<i1;j++){var x1=i6({geometry:l.geometries[j],type:"Feature",properties:o.properties},n);x1&&f.push(x1)}return new h0(f);case"FeatureCollection":for(j=0,i1=l.features.length;j<i1;j++){var E1=i6(l.features[j],n);E1&&f.push(E1)}return new h0(f);default:throw new Error("Invalid GeoJSON object.")}}function Nr(o,n,l,u){return o?o(n,l):new e6(l,u&&u.markersInheritOptions&&u)}function xt(o){return new V1(o[1],o[0],o[2])}function C6(o,n,l){for(var u=[],f=0,S=o.length,T;f<S;f++)T=n?C6(o[f],n-1,l):(l||xt)(o[f]),u.push(T);return u}function gt(o,n){return o=s1(o),o.alt!==void 0?[p(o.lng,n),p(o.lat,n),p(o.alt,n)]:[p(o.lng,n),p(o.lat,n)]}function o6(o,n,l,u){for(var f=[],S=0,T=o.length;S<T;S++)f.push(n?o6(o[S],f5(o[S])?0:n-1,l,u):gt(o[S],u));return!n&&l&&f.length>0&&f.push(f[0].slice()),f}function c7(o,n){return o.feature?e({},o.feature,{geometry:n}):a6(n)}function a6(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var _t={toGeoJSON:function(o){return c7(this,{type:"Point",coordinates:gt(this.getLatLng(),o)})}};e6.include(_t),vt.include(_t),r6.include(_t),f0.include({toGeoJSON:function(o){var n=!f5(this._latlngs),l=o6(this._latlngs,n?1:0,!1,o);return c7(this,{type:(n?"Multi":"")+"LineString",coordinates:l})}}),M7.include({toGeoJSON:function(o){var n=!f5(this._latlngs),l=n&&!f5(this._latlngs[0]),u=o6(this._latlngs,l?2:n?1:0,!0,o);return n||(u=[u]),c7(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),L7.include({toMultiPoint:function(o){var n=[];return this.eachLayer(function(l){n.push(l.toGeoJSON(o).geometry.coordinates)}),c7(this,{type:"MultiPoint",coordinates:n})},toGeoJSON:function(o){var n=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(n==="MultiPoint")return this.toMultiPoint(o);var l=n==="GeometryCollection",u=[];return this.eachLayer(function(f){if(f.toGeoJSON){var S=f.toGeoJSON(o);if(l)u.push(S.geometry);else{var T=a6(S);T.type==="FeatureCollection"?u.push.apply(u,T.features):u.push(T)}}}),l?c7(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function Wr(o,n){return new A0(o,n)}var uV=Wr,H6=E5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,n,l){this._url=o,this._bounds=h1(n),g(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(d1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){F1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&W2(this._image),this},bringToBack:function(){return this._map&&O5(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=h1(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",n=this._image=o?this._url:f1("img");if(d1(n,"leaflet-image-layer"),this._zoomAnimated&&d1(n,"leaflet-zoom-animated"),this.options.className&&d1(n,this.options.className),n.onselectstart=M,n.onmousemove=M,n.onload=C(this.fire,this,"load"),n.onerror=C(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=n.src;return}n.src=this._url,n.alt=this.options.alt},_animateZoom:function(o){var n=this._map.getZoomScale(o.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;V5(this._image,l,n)},_reset:function(){var o=this._image,n=new U(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=n.getSize();X1(o,n.min),o.style.width=l.x+"px",o.style.height=l.y+"px"},_updateOpacity:function(){i2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),mV=function(o,n,l){return new H6(o,n,l)},Ur=H6.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",n=this._image=o?this._url:f1("video");if(d1(n,"leaflet-image-layer"),this._zoomAnimated&&d1(n,"leaflet-zoom-animated"),this.options.className&&d1(n,this.options.className),n.onselectstart=M,n.onmousemove=M,n.onloadeddata=C(this.fire,this,"load"),o){for(var l=n.getElementsByTagName("source"),u=[],f=0;f<l.length;f++)u.push(l[f].src);this._url=l.length>0?u:[n.src];return}P(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(n.style,"objectFit")&&(n.style.objectFit="fill"),n.autoplay=!!this.options.autoplay,n.loop=!!this.options.loop,n.muted=!!this.options.muted,n.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var T=f1("source");T.src=this._url[S],n.appendChild(T)}}});function hV(o,n,l){return new Ur(o,n,l)}var jr=H6.extend({_initImage:function(){var o=this._image=this._url;d1(o,"leaflet-image-layer"),this._zoomAnimated&&d1(o,"leaflet-zoom-animated"),this.options.className&&d1(o,this.options.className),o.onselectstart=M,o.onmousemove=M}});function fV(o,n,l){return new jr(o,n,l)}var e0=E5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,n){o&&(o instanceof V1||P(o))?(this._latlng=s1(o),g(this,n)):(g(this,o),this._source=n),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&i2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&i2(this._container,1),this.bringToFront(),this.options.interactive&&(d1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(i2(this._container,0),this._removeTimeout=setTimeout(C(F1,void 0,this._container),200)):F1(this._container),this.options.interactive&&(D1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=s1(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&W2(this._container),this},bringToBack:function(){return this._map&&O5(this._container),this},_prepareOpen:function(o){var n=this._source;if(!n._map)return!1;if(n instanceof h0){n=null;var l=this._source._layers;for(var u in l)if(l[u]._map){n=l[u];break}if(!n)return!1;this._source=n}if(!o)if(n.getCenter)o=n.getCenter();else if(n.getLatLng)o=n.getLatLng();else if(n.getBounds)o=n.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,n=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof n=="string")o.innerHTML=n;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(n)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),n=H1(this.options.offset),l=this._getAnchor();this._zoomAnimated?X1(this._container,o.add(l)):n=n.add(o).add(l);var u=this._containerBottom=-n.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+n.x;this._container.style.bottom=u+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});a1.include({_initOverlay:function(o,n,l,u){var f=n;return f instanceof o||(f=new o(u).setContent(n)),l&&f.setLatLng(l),f}}),E5.include({_initOverlay:function(o,n,l,u){var f=l;return f instanceof o?(g(f,u),f._source=this):(f=n&&!u?n:new o(u,this),f.setContent(l)),f}});var n6=e0.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,e0.prototype.openOn.call(this,o)},onAdd:function(o){e0.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof j0||this._source.on("preclick",u1))},onRemove:function(o){e0.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof j0||this._source.off("preclick",u1))},getEvents:function(){var o=e0.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",n=this._container=f1("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=f1("div",o+"-content-wrapper",n);if(this._contentNode=f1("div",o+"-content",l),h2(n),R1(this._contentNode),A1(n,"contextmenu",u1),this._tipContainer=f1("div",o+"-tip-container",n),this._tip=f1("div",o+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=f1("a",o+"-close-button",n);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',A1(u,"click",function(f){W1(f),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,n=o.style;n.width="",n.whiteSpace="nowrap";var l=o.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),n.width=l+1+"px",n.whiteSpace="",n.height="";var u=o.offsetHeight,f=this.options.maxHeight,S="leaflet-popup-scrolled";f&&u>f?(n.height=f+"px",d1(o,S)):D1(o,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var n=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),l=this._getAnchor();X1(this._container,n.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,n=parseInt(N1(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+n,u=this._containerWidth,f=new X(this._containerLeft,-l-this._containerBottom);f._add(t5(this._container));var S=o.layerPointToContainerPoint(f),T=H1(this.options.autoPanPadding),F=H1(this.options.autoPanPaddingTopLeft||T),B=H1(this.options.autoPanPaddingBottomRight||T),j=o.getSize(),i1=0,x1=0;S.x+u+B.x>j.x&&(i1=S.x+u-j.x+B.x),S.x-i1-F.x<0&&(i1=S.x-F.x),S.y+l+B.y>j.y&&(x1=S.y+l-j.y+B.y),S.y-x1-F.y<0&&(x1=S.y-F.y),(i1||x1)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([i1,x1]))}},_getAnchor:function(){return H1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),AV=function(o,n){return new n6(o,n)};a1.mergeOptions({closePopupOnClick:!0}),a1.include({openPopup:function(o,n,l){return this._initOverlay(n6,o,n,l).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),E5.include({bindPopup:function(o,n){return this._popup=this._initOverlay(n6,this._popup,o,n),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof h0||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){v2(o);var n=o.layer||o.target;if(this._popup._source===n&&!(n instanceof j0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=n,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var V6=e0.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){e0.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){e0.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=e0.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",n=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=f1("div",n),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+H(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var n,l,u=this._map,f=this._container,S=u.latLngToContainerPoint(u.getCenter()),T=u.layerPointToContainerPoint(o),F=this.options.direction,B=f.offsetWidth,j=f.offsetHeight,i1=H1(this.options.offset),x1=this._getAnchor();F==="top"?(n=B/2,l=j):F==="bottom"?(n=B/2,l=0):F==="center"?(n=B/2,l=j/2):F==="right"?(n=0,l=j/2):F==="left"?(n=B,l=j/2):T.x<S.x?(F="right",n=0,l=j/2):(F="left",n=B+(i1.x+x1.x)*2,l=j/2),o=o.subtract(H1(n,l,!0)).add(i1).add(x1),D1(f,"leaflet-tooltip-right"),D1(f,"leaflet-tooltip-left"),D1(f,"leaflet-tooltip-top"),D1(f,"leaflet-tooltip-bottom"),d1(f,"leaflet-tooltip-"+F),X1(f,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&i2(this._container,o)},_animateZoom:function(o){var n=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(n)},_getAnchor:function(){return H1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),vV=function(o,n){return new V6(o,n)};a1.include({openTooltip:function(o,n,l){return this._initOverlay(V6,o,n,l).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),E5.include({bindTooltip:function(o,n){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(V6,this._tooltip,o,n),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var n=o?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[n](l),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof h0||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var n=typeof o.getElement=="function"&&o.getElement();n&&(A1(n,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),A1(n,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var n=typeof o.getElement=="function"&&o.getElement();n&&n.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var n=this;this._map.once("moveend",function(){n._openOnceFlag=!1,n._openTooltip(o)});return}this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0)}},_moveTooltip:function(o){var n=o.latlng,l,u;this._tooltip.options.sticky&&o.originalEvent&&(l=this._map.mouseEventToContainerPoint(o.originalEvent),u=this._map.containerPointToLayerPoint(l),n=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(n)}});var Gr=l7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var n=o&&o.tagName==="DIV"?o:document.createElement("div"),l=this.options;if(l.html instanceof Element?(Z5(n),n.appendChild(l.html)):n.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=H1(l.bgPos);n.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(n,"icon"),n},createShadow:function(){return null}});function xV(o){return new Gr(o)}l7.Default=p4;var u4=E5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:c1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){g(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),F1(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(W2(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(O5(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=V(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof X?o:new X(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var n=this.getPane().children,l=-o(-1/0,1/0),u=0,f=n.length,S;u<f;u++)S=n[u].style.zIndex,n[u]!==this._container&&S&&(l=o(l,+S));isFinite(l)&&(this.options.zIndex=l+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!c1.ielt9){i2(this._container,this.options.opacity);var o=+new Date,n=!1,l=!1;for(var u in this._tiles){var f=this._tiles[u];if(!(!f.current||!f.loaded)){var S=Math.min(1,(o-f.loaded)/200);i2(f.el,S),S<1?n=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),n&&(m1(this._fadeFrame),this._fadeFrame=r1(this._updateOpacity,this))}},_onOpaqueTile:M,_initContainer:function(){this._container||(this._container=f1("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,n=this.options.maxZoom;if(o!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===o?(this._levels[l].el.style.zIndex=n-Math.abs(o-l),this._onUpdateLevel(l)):(F1(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[o],f=this._map;return u||(u=this._levels[o]={},u.el=f1("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=n,u.origin=f.project(f.unproject(f.getPixelOrigin()),o).round(),u.zoom=o,this._setZoomTransform(u,f.getCenter(),f.getZoom()),M(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:M,_onRemoveLevel:M,_onCreateLevel:M,_pruneTiles:function(){if(this._map){var o,n,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)n=this._tiles[o],n.retain=n.current;for(o in this._tiles)if(n=this._tiles[o],n.current&&!n.active){var u=n.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var n in this._tiles)this._tiles[n].coords.z===o&&this._removeTile(n)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)F1(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,n,l,u){var f=Math.floor(o/2),S=Math.floor(n/2),T=l-1,F=new X(+f,+S);F.z=+T;var B=this._tileCoordsToKey(F),j=this._tiles[B];return j&&j.active?(j.retain=!0,!0):(j&&j.loaded&&(j.retain=!0),T>u?this._retainParent(f,S,T,u):!1)},_retainChildren:function(o,n,l,u){for(var f=2*o;f<2*o+2;f++)for(var S=2*n;S<2*n+2;S++){var T=new X(f,S);T.z=l+1;var F=this._tileCoordsToKey(T),B=this._tiles[F];if(B&&B.active){B.retain=!0;continue}else B&&B.loaded&&(B.retain=!0);l+1<u&&this._retainChildren(f,S,l+1,u)}},_resetView:function(o){var n=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),n,n)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var n=this.options;return n.minNativeZoom!==void 0&&o<n.minNativeZoom?n.minNativeZoom:n.maxNativeZoom!==void 0&&n.maxNativeZoom<o?n.maxNativeZoom:o},_setView:function(o,n,l,u){var f=Math.round(n);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var S=this.options.updateWhenZooming&&f!==this._tileZoom;(!u||S)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(o),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(o,n)},_setZoomTransforms:function(o,n){for(var l in this._levels)this._setZoomTransform(this._levels[l],o,n)},_setZoomTransform:function(o,n,l){var u=this._map.getZoomScale(l,o.zoom),f=o.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(n,l)).round();c1.any3d?V5(o.el,f,u):X1(o.el,f)},_resetGrid:function(){var o=this._map,n=o.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=n.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,n.wrapLng[0]],u).x/l.x),Math.ceil(o.project([0,n.wrapLng[1]],u).x/l.y)],this._wrapY=n.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([n.wrapLat[0],0],u).y/l.x),Math.ceil(o.project([n.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var n=this._map,l=n._animatingZoom?Math.max(n._animateToZoom,n.getZoom()):n.getZoom(),u=n.getZoomScale(l,this._tileZoom),f=n.project(o,this._tileZoom).floor(),S=n.getSize().divideBy(u*2);return new U(f.subtract(S),f.add(S))},_update:function(o){var n=this._map;if(n){var l=this._clampZoom(n.getZoom());if(o===void 0&&(o=n.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(o),f=this._pxBoundsToTileRange(u),S=f.getCenter(),T=[],F=this.options.keepBuffer,B=new U(f.getBottomLeft().subtract([F,-F]),f.getTopRight().add([F,-F]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var j in this._tiles){var i1=this._tiles[j].coords;(i1.z!==this._tileZoom||!B.contains(new X(i1.x,i1.y)))&&(this._tiles[j].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(o,l);return}for(var x1=f.min.y;x1<=f.max.y;x1++)for(var E1=f.min.x;E1<=f.max.x;E1++){var G2=new X(E1,x1);if(G2.z=this._tileZoom,!!this._isValidTile(G2)){var b2=this._tiles[this._tileCoordsToKey(G2)];b2?b2.current=!0:T.push(G2)}}if(T.sort(function(e5,p7){return e5.distanceTo(S)-p7.distanceTo(S)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var A5=document.createDocumentFragment();for(E1=0;E1<T.length;E1++)this._addTile(T[E1],A5);this._level.el.appendChild(A5)}}}},_isValidTile:function(o){var n=this._map.options.crs;if(!n.infinite){var l=this._globalTileRange;if(!n.wrapLng&&(o.x<l.min.x||o.x>l.max.x)||!n.wrapLat&&(o.y<l.min.y||o.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(o);return h1(this.options.bounds).overlaps(u)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var n=this._map,l=this.getTileSize(),u=o.scaleBy(l),f=u.add(l),S=n.unproject(u,o.z),T=n.unproject(f,o.z);return[S,T]},_tileCoordsToBounds:function(o){var n=this._tileCoordsToNwSe(o),l=new n1(n[0],n[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var n=o.split(":"),l=new X(+n[0],+n[1]);return l.z=+n[2],l},_removeTile:function(o){var n=this._tiles[o];n&&(F1(n.el),delete this._tiles[o],this.fire("tileunload",{tile:n.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){d1(o,"leaflet-tile");var n=this.getTileSize();o.style.width=n.x+"px",o.style.height=n.y+"px",o.onselectstart=M,o.onmousemove=M,c1.ielt9&&this.options.opacity<1&&i2(o,this.options.opacity)},_addTile:function(o,n){var l=this._getTilePos(o),u=this._tileCoordsToKey(o),f=this.createTile(this._wrapCoords(o),C(this._tileReady,this,o));this._initTile(f),this.createTile.length<2&&r1(C(this._tileReady,this,o,null,f)),X1(f,l),this._tiles[u]={el:f,coords:o,current:!0},n.appendChild(f),this.fire("tileloadstart",{tile:f,coords:o})},_tileReady:function(o,n,l){n&&this.fire("tileerror",{error:n,tile:l,coords:o});var u=this._tileCoordsToKey(o);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?(i2(l.el,0),m1(this._fadeFrame),this._fadeFrame=r1(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),n||(d1(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),c1.ielt9||!this._map._fadeAnimated?r1(this._pruneTiles,this):setTimeout(C(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var n=new X(this._wrapX?s(o.x,this._wrapX):o.x,this._wrapY?s(o.y,this._wrapY):o.y);return n.z=o.z,n},_pxBoundsToTileRange:function(o){var n=this.getTileSize();return new U(o.min.unscaleBy(n).floor(),o.max.unscaleBy(n).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function gV(o){return new u4(o)}var d7=u4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,n){this._url=o,n=g(this,n),n.detectRetina&&c1.retina&&n.maxZoom>0?(n.tileSize=Math.floor(n.tileSize/2),n.zoomReverse?(n.zoomOffset--,n.minZoom=Math.min(n.maxZoom,n.minZoom+1)):(n.zoomOffset++,n.maxZoom=Math.max(n.minZoom,n.maxZoom-1)),n.minZoom=Math.max(0,n.minZoom)):n.zoomReverse?n.minZoom=Math.min(n.maxZoom,n.minZoom):n.maxZoom=Math.max(n.minZoom,n.maxZoom),typeof n.subdomains=="string"&&(n.subdomains=n.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,n){return this._url===o&&n===void 0&&(n=!0),this._url=o,n||this.redraw(),this},createTile:function(o,n){var l=document.createElement("img");return A1(l,"load",C(this._tileOnLoad,this,n,l)),A1(l,"error",C(this._tileOnError,this,n,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(o),l},getTileUrl:function(o){var n={r:c1.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-o.y;this.options.tms&&(n.y=l),n["-y"]=l}return k(this._url,e(n,this.options))},_tileOnLoad:function(o,n){c1.ielt9?setTimeout(C(o,this,null,n),0):o(null,n)},_tileOnError:function(o,n,l){var u=this.options.errorTileUrl;u&&n.getAttribute("src")!==u&&(n.src=u),o(l,n)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,n=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(o=n-o),o+u},_getSubdomain:function(o){var n=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[n]},_abortLoading:function(){var o,n;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(n=this._tiles[o].el,n.onload=M,n.onerror=M,!n.complete)){n.src=D;var l=this._tiles[o].coords;F1(n),delete this._tiles[o],this.fire("tileabort",{tile:n,coords:l})}},_removeTile:function(o){var n=this._tiles[o];if(n)return n.el.setAttribute("src",D),u4.prototype._removeTile.call(this,o)},_tileReady:function(o,n,l){if(!(!this._map||l&&l.getAttribute("src")===D))return u4.prototype._tileReady.call(this,o,n,l)}});function qr(o,n){return new d7(o,n)}var Yr=d7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,n){this._url=o;var l=e({},this.defaultWmsParams);for(var u in n)u in this.options||(l[u]=n[u]);n=g(this,n);var f=n.detectRetina&&c1.retina?2:1,S=this.getTileSize();l.width=S.x*f,l.height=S.y*f,this.wmsParams=l},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var n=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[n]=this._crs.code,d7.prototype.onAdd.call(this,o)},getTileUrl:function(o){var n=this._tileCoordsToNwSe(o),l=this._crs,u=t1(l.project(n[0]),l.project(n[1])),f=u.min,S=u.max,T=(this._wmsVersion>=1.3&&this._crs===zr?[f.y,f.x,S.y,S.x]:[f.x,f.y,S.x,S.y]).join(","),F=d7.prototype.getTileUrl.call(this,o);return F+y(this.wmsParams,F,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(o,n){return e(this.wmsParams,o),n||this.redraw(),this}});function _V(o,n){return new Yr(o,n)}d7.WMS=Yr,qr.wms=_V;var v0=E5.extend({options:{padding:.1},initialize:function(o){g(this,o),H(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),d1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,n){var l=this._map.getZoomScale(n,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,n),S=u.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(o,n));c1.any3d?V5(this._container,S,l):X1(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,n=this._map.getSize(),l=this._map.containerPointToLayerPoint(n.multiplyBy(-o)).round();this._bounds=new U(l,l.add(n.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Qr=v0.extend({options:{tolerance:0},getEvents:function(){var o=v0.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){v0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");A1(o,"mousemove",this._onMouseMove,this),A1(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A1(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){m1(this._redrawRequest),delete this._ctx,F1(this._container),_1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var n in this._layers)o=this._layers[n],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){v0.prototype._update.call(this);var o=this._bounds,n=this._container,l=o.getSize(),u=c1.retina?2:1;X1(n,o.min),n.width=u*l.x,n.height=u*l.y,n.style.width=l.x+"px",n.style.height=l.y+"px",c1.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){v0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[H(o)]=o;var n=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=n),this._drawLast=n,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var n=o._order,l=n.next,u=n.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete o._order,delete this._layers[H(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var n=o.options.dashArray.split(/[, ]+/),l=[],u,f;for(f=0;f<n.length;f++){if(u=Number(n[f]),isNaN(u))return;l.push(u)}o.options._dashArray=l}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||r1(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var n=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new U,this._redrawBounds.extend(o._pxBounds.min.subtract([n,n])),this._redrawBounds.extend(o._pxBounds.max.add([n,n]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var n=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,n.x,n.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,n=this._redrawBounds;if(this._ctx.save(),n){var l=n.getSize();this._ctx.beginPath(),this._ctx.rect(n.min.x,n.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)o=u.layer,(!n||o._pxBounds&&o._pxBounds.intersects(n))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,n){if(this._drawing){var l,u,f,S,T=o._parts,F=T.length,B=this._ctx;if(F){for(B.beginPath(),l=0;l<F;l++){for(u=0,f=T[l].length;u<f;u++)S=T[l][u],B[u?"lineTo":"moveTo"](S.x,S.y);n&&B.closePath()}this._fillStroke(B,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var n=o._point,l=this._ctx,u=Math.max(Math.round(o._radius),1),f=(Math.max(Math.round(o._radiusY),1)||u)/u;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(n.x,n.y/f,u,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,o)}},_fillStroke:function(o,n){var l=n.options;l.fill&&(o.globalAlpha=l.fillOpacity,o.fillStyle=l.fillColor||l.color,o.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(o.setLineDash&&o.setLineDash(n.options&&n.options._dashArray||[]),o.globalAlpha=l.opacity,o.lineWidth=l.weight,o.strokeStyle=l.color,o.lineCap=l.lineCap,o.lineJoin=l.lineJoin,o.stroke())},_onClick:function(o){for(var n=this._map.mouseEventToLayerPoint(o),l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(n)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var n=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,n)}},_handleMouseOut:function(o){var n=this._hoveredLayer;n&&(D1(this._container,"leaflet-interactive"),this._fireEvent([n],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,n){if(!this._mouseHoverThrottled){for(var l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(n)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(o),u&&(d1(this._container,"leaflet-interactive"),this._fireEvent([u],o,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(C(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,n,l){this._map._fireDOMEvent(n,l||n.type,o)},_bringToFront:function(o){var n=o._order;if(n){var l=n.next,u=n.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),n.prev=this._drawLast,this._drawLast.next=n,n.next=null,this._drawLast=n,this._requestRedraw(o)}},_bringToBack:function(o){var n=o._order;if(n){var l=n.next,u=n.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(o)}}});function Kr(o){return c1.canvas?new Qr(o):null}var m4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),SV={_initContainer:function(){this._container=f1("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(v0.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var n=o._container=m4("shape");d1(n,"leaflet-vml-shape "+(this.options.className||"")),n.coordsize="1 1",o._path=m4("path"),n.appendChild(o._path),this._updateStyle(o),this._layers[H(o)]=o},_addPath:function(o){var n=o._container;this._container.appendChild(n),o.options.interactive&&o.addInteractiveTarget(n)},_removePath:function(o){var n=o._container;F1(n),o.removeInteractiveTarget(n),delete this._layers[H(o)]},_updateStyle:function(o){var n=o._stroke,l=o._fill,u=o.options,f=o._container;f.stroked=!!u.stroke,f.filled=!!u.fill,u.stroke?(n||(n=o._stroke=m4("stroke")),f.appendChild(n),n.weight=u.weight+"px",n.color=u.color,n.opacity=u.opacity,u.dashArray?n.dashStyle=P(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):n.dashStyle="",n.endcap=u.lineCap.replace("butt","flat"),n.joinstyle=u.lineJoin):n&&(f.removeChild(n),o._stroke=null),u.fill?(l||(l=o._fill=m4("fill")),f.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(f.removeChild(l),o._fill=null)},_updateCircle:function(o){var n=o._point.round(),l=Math.round(o._radius),u=Math.round(o._radiusY||l);this._setPath(o,o._empty()?"M0 0":"AL "+n.x+","+n.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(o,n){o._path.v=n},_bringToFront:function(o){W2(o._container)},_bringToBack:function(o){O5(o._container)}},s6=c1.vml?m4:N2,h4=v0.extend({_initContainer:function(){this._container=s6("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=s6("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){F1(this._container),_1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){v0.prototype._update.call(this);var o=this._bounds,n=o.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(n))&&(this._svgSize=n,l.setAttribute("width",n.x),l.setAttribute("height",n.y)),X1(l,o.min),l.setAttribute("viewBox",[o.min.x,o.min.y,n.x,n.y].join(" ")),this.fire("update")}},_initPath:function(o){var n=o._path=s6("path");o.options.className&&d1(n,o.options.className),o.options.interactive&&d1(n,"leaflet-interactive"),this._updateStyle(o),this._layers[H(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){F1(o._path),o.removeInteractiveTarget(o._path),delete this._layers[H(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var n=o._path,l=o.options;n&&(l.stroke?(n.setAttribute("stroke",l.color),n.setAttribute("stroke-opacity",l.opacity),n.setAttribute("stroke-width",l.weight),n.setAttribute("stroke-linecap",l.lineCap),n.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?n.setAttribute("stroke-dasharray",l.dashArray):n.removeAttribute("stroke-dasharray"),l.dashOffset?n.setAttribute("stroke-dashoffset",l.dashOffset):n.removeAttribute("stroke-dashoffset")):n.setAttribute("stroke","none"),l.fill?(n.setAttribute("fill",l.fillColor||l.color),n.setAttribute("fill-opacity",l.fillOpacity),n.setAttribute("fill-rule",l.fillRule||"evenodd")):n.setAttribute("fill","none"))},_updatePoly:function(o,n){this._setPath(o,u5(o._parts,n))},_updateCircle:function(o){var n=o._point,l=Math.max(Math.round(o._radius),1),u=Math.max(Math.round(o._radiusY),1)||l,f="a"+l+","+u+" 0 1,0 ",S=o._empty()?"M0 0":"M"+(n.x-l)+","+n.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(o,S)},_setPath:function(o,n){o._path.setAttribute("d",n)},_bringToFront:function(o){W2(o._path)},_bringToBack:function(o){O5(o._path)}});c1.vml&&h4.include(SV);function Xr(o){return c1.svg||c1.vml?new h4(o):null}a1.include({getRenderer:function(o){var n=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return n||(n=this._renderer=this._createRenderer()),this.hasLayer(n)||this.addLayer(n),n},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var n=this._paneRenderers[o];return n===void 0&&(n=this._createRenderer({pane:o}),this._paneRenderers[o]=n),n},_createRenderer:function(o){return this.options.preferCanvas&&Kr(o)||Xr(o)}});var Jr=M7.extend({initialize:function(o,n){M7.prototype.initialize.call(this,this._boundsToLatLngs(o),n)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=h1(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function wV(o,n){return new Jr(o,n)}h4.create=s6,h4.pointsToPath=u5,A0.geometryToLayer=i6,A0.coordsToLatLng=xt,A0.coordsToLatLngs=C6,A0.latLngToCoords=gt,A0.latLngsToCoords=o6,A0.getFeature=c7,A0.asFeature=a6,a1.mergeOptions({boxZoom:!0});var ti=t0.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){A1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){_1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){F1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),p0(),S3(),this._startPoint=this._map.mouseEventToContainerPoint(o),A1(document,{contextmenu:v2,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=f1("div","leaflet-zoom-box",this._container),d1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var n=new U(this._point,this._startPoint),l=n.getSize();X1(this._box,n.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(F1(this._box),D1(this._container,"leaflet-crosshair")),A2(),w3(),_1(document,{contextmenu:v2,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(C(this._resetState,this),0);var n=new n1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(n).fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});a1.addInitHook("addHandler","boxZoom",ti),a1.mergeOptions({doubleClickZoom:!0});var ei=t0.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var n=this._map,l=n.getZoom(),u=n.options.zoomDelta,f=o.originalEvent.shiftKey?l-u:l+u;n.options.doubleClickZoom==="center"?n.setZoom(f):n.setZoomAround(o.containerPoint,f)}});a1.addInitHook("addHandler","doubleClickZoom",ei),a1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ri=t0.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new U0(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}d1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){D1(this._map._container,"leaflet-grab"),D1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var n=h1(this._map.options.maxBounds);this._offsetLimit=t1(this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var n=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(n),this._prunePositions(n)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),n=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=n.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,n){return o-(o-n)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),n=this._offsetLimit;o.x<n.min.x&&(o.x=this._viscousLimit(o.x,n.min.x)),o.y<n.min.y&&(o.y=this._viscousLimit(o.y,n.min.y)),o.x>n.max.x&&(o.x=this._viscousLimit(o.x,n.max.x)),o.y>n.max.y&&(o.y=this._viscousLimit(o.y,n.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,n=Math.round(o/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,f=(u-n+l)%o+n-l,S=(u+n+l)%o-n-l,T=Math.abs(f+l)<Math.abs(S+l)?f:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(o){var n=this._map,l=n.options,u=!l.inertia||o.noInertia||this._times.length<2;if(n.fire("dragend",o),u)n.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,T=l.easeLinearity,F=f.multiplyBy(T/S),B=F.distanceTo([0,0]),j=Math.min(l.inertiaMaxSpeed,B),i1=F.multiplyBy(j/B),x1=j/(l.inertiaDeceleration*T),E1=i1.multiplyBy(-x1/2).round();!E1.x&&!E1.y?n.fire("moveend"):(E1=n._limitOffset(E1,n.options.maxBounds),r1(function(){n.panBy(E1,{duration:x1,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});a1.addInitHook("addHandler","dragging",ri),a1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ii=t0.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),A1(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),_1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,n=document.documentElement,l=o.scrollTop||n.scrollTop,u=o.scrollLeft||n.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var n=this._panKeys={},l=this.keyCodes,u,f;for(u=0,f=l.left.length;u<f;u++)n[l.left[u]]=[-1*o,0];for(u=0,f=l.right.length;u<f;u++)n[l.right[u]]=[o,0];for(u=0,f=l.down.length;u<f;u++)n[l.down[u]]=[0,o];for(u=0,f=l.up.length;u<f;u++)n[l.up[u]]=[0,-1*o]},_setZoomDelta:function(o){var n=this._zoomKeys={},l=this.keyCodes,u,f;for(u=0,f=l.zoomIn.length;u<f;u++)n[l.zoomIn[u]]=o;for(u=0,f=l.zoomOut.length;u<f;u++)n[l.zoomOut[u]]=-o},_addHooks:function(){A1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){_1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var n=o.keyCode,l=this._map,u;if(n in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[n],o.shiftKey&&(u=H1(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(H1(u),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(f)}else l.panBy(u)}else if(n in this._zoomKeys)l.setZoom(l.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[n]);else if(n===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;v2(o)}}});a1.addInitHook("addHandler","keyboard",ii),a1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ci=t0.extend({addHooks:function(){A1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){_1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var n=s7(o),l=this._map.options.wheelDebounceTime;this._delta+=n,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(C(this._performZoom,this),u),v2(o)},_performZoom:function(){var o=this._map,n=o.getZoom(),l=this._map.options.zoomSnap||0;o._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,S=l?Math.ceil(f/l)*l:f,T=o._limitZoom(n+(this._delta>0?S:-S))-n;this._delta=0,this._startTime=null,T&&(o.options.scrollWheelZoom==="center"?o.setZoom(n+T):o.setZoomAround(this._lastMousePos,n+T))}});a1.addInitHook("addHandler","scrollWheelZoom",Ci);var bV=600;a1.mergeOptions({tapHold:c1.touchNative&&c1.safari&&c1.mobile,tapTolerance:15});var oi=t0.extend({addHooks:function(){A1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){_1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var n=o.touches[0];this._startPos=this._newPos=new X(n.clientX,n.clientY),this._holdTimeout=setTimeout(C(function(){this._cancel(),this._isTapValid()&&(A1(document,"touchend",W1),A1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",n))},this),bV),A1(document,"touchend touchcancel contextmenu",this._cancel,this),A1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){_1(document,"touchend",W1),_1(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),_1(document,"touchend touchcancel contextmenu",this._cancel,this),_1(document,"touchmove",this._onMove,this)},_onMove:function(o){var n=o.touches[0];this._newPos=new X(n.clientX,n.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,n){var l=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY});l._simulated=!0,n.target.dispatchEvent(l)}});a1.addInitHook("addHandler","tapHold",oi),a1.mergeOptions({touchZoom:c1.touch,bounceAtZoomLimits:!0});var ai=t0.extend({addHooks:function(){d1(this._map._container,"leaflet-touch-zoom"),A1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){D1(this._map._container,"leaflet-touch-zoom"),_1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var n=this._map;if(!(!o.touches||o.touches.length!==2||n._animatingZoom||this._zooming)){var l=n.mouseEventToContainerPoint(o.touches[0]),u=n.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),n.options.touchZoom!=="center"&&(this._pinchStartLatLng=n.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),A1(document,"touchmove",this._onTouchMove,this),A1(document,"touchend touchcancel",this._onTouchEnd,this),W1(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var n=this._map,l=n.mouseEventToContainerPoint(o.touches[0]),u=n.mouseEventToContainerPoint(o.touches[1]),f=l.distanceTo(u)/this._startDist;if(this._zoom=n.getScaleZoom(f,this._startZoom),!n.options.bounceAtZoomLimits&&(this._zoom<n.getMinZoom()&&f<1||this._zoom>n.getMaxZoom()&&f>1)&&(this._zoom=n._limitZoom(this._zoom)),n.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var S=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(f===1&&S.x===0&&S.y===0)return;this._center=n.unproject(n.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(n._moveStart(!0,!1),this._moved=!0),m1(this._animRequest);var T=C(n._move,n,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=r1(T,this,!0),W1(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,m1(this._animRequest),_1(document,"touchmove",this._onTouchMove,this),_1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});a1.addInitHook("addHandler","touchZoom",ai),a1.BoxZoom=ti,a1.DoubleClickZoom=ei,a1.Drag=ri,a1.Keyboard=ii,a1.ScrollWheelZoom=Ci,a1.TapHold=oi,a1.TouchZoom=ai,r.Bounds=U,r.Browser=c1,r.CRS=S1,r.Canvas=Qr,r.Circle=vt,r.CircleMarker=r6,r.Class=O1,r.Control=a2,r.DivIcon=Gr,r.DivOverlay=e0,r.DomEvent=v1,r.DomUtil=b3,r.Draggable=U0,r.Evented=k1,r.FeatureGroup=h0,r.GeoJSON=A0,r.GridLayer=u4,r.Handler=t0,r.Icon=l7,r.ImageOverlay=H6,r.LatLng=V1,r.LatLngBounds=n1,r.Layer=E5,r.LayerGroup=L7,r.LineUtil=oV,r.Map=a1,r.Marker=e6,r.Mixin=Jn,r.Path=j0,r.Point=X,r.PolyUtil=tV,r.Polygon=M7,r.Polyline=f0,r.Popup=n6,r.PosAnimation=P1,r.Projection=aV,r.Rectangle=Jr,r.Renderer=v0,r.SVG=h4,r.SVGOverlay=jr,r.TileLayer=d7,r.Tooltip=V6,r.Transformation=T2,r.Util=I1,r.VideoOverlay=Ur,r.bind=C,r.bounds=t1,r.canvas=Kr,r.circle=cV,r.circleMarker=MV,r.control=U2,r.divIcon=xV,r.extend=e,r.featureGroup=sV,r.geoJSON=Wr,r.geoJson=uV,r.gridLayer=gV,r.icon=LV,r.imageOverlay=mV,r.latLng=s1,r.latLngBounds=h1,r.layerGroup=VV,r.map=E2,r.marker=lV,r.point=H1,r.polygon=pV,r.polyline=dV,r.popup=AV,r.rectangle=wV,r.setOptions=g,r.stamp=H,r.svg=Xr,r.svgOverlay=fV,r.tileLayer=qr,r.tooltip=vV,r.transformation=l2,r.version=t,r.videoOverlay=hV;var yV=window.L;r.noConflict=function(){return window.L=yV,this},window.L=r}))});var M6=globalThis,c6=M6.ShadowRoot&&(M6.ShadyCSS===void 0||M6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),li=new WeakMap,A4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(c6&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=li.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&li.set(e,t))}return t}toString(){return this.cssText}},x0=r=>new A4(typeof r=="string"?r:r+"",void 0,wt),g1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,C,a)=>i+(H=>{if(H._$cssResult$===!0)return H.cssText;if(typeof H=="number")return H;throw Error("Value passed to 'css' function must be a 'css' function result: "+H+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(C)+r[a+1],r[0]);return new A4(e,r,wt)},Mi=(r,t)=>{if(c6)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),C=M6.litNonce;C!==void 0&&i.setAttribute("nonce",C),i.textContent=e.cssText,r.appendChild(i)}},bt=c6?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return x0(e)})(r):r;var{is:WV,defineProperty:UV,getOwnPropertyDescriptor:jV,getOwnPropertyNames:GV,getOwnPropertySymbols:qV,getPrototypeOf:YV}=Object,G0=globalThis,ci=G0.trustedTypes,QV=ci?ci.emptyScript:"",KV=G0.reactiveElementPolyfillSupport,v4=(r,t)=>r,x4={toAttribute(r,t){switch(t){case Boolean:r=r?QV:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},d6=(r,t)=>!WV(r,t),di={attribute:!0,type:String,converter:x4,reflect:!1,useDefault:!1,hasChanged:d6};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),G0.litPropertyMetadata??(G0.litPropertyMetadata=new WeakMap);var g0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=di){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),C=this.getPropertyDescriptor(t,i,e);C!==void 0&&UV(this.prototype,t,C)}}static getPropertyDescriptor(t,e,i){let{get:C,set:a}=jV(this.prototype,t)??{get(){return this[e]},set(H){this[e]=H}};return{get:C,set(H){let V=C?.call(this);a?.call(this,H),this.requestUpdate(t,V,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??di}static _$Ei(){if(this.hasOwnProperty(v4("elementProperties")))return;let t=YV(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v4("properties"))){let e=this.properties,i=[...GV(e),...qV(e)];for(let C of i)this.createProperty(C,e[C])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,C]of e)this.elementProperties.set(i,C)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let C=this._$Eu(e,i);C!==void 0&&this._$Eh.set(C,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let C of i)e.unshift(bt(C))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),C=this.constructor._$Eu(t,i);if(C!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:x4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(C):this.setAttribute(C,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,C=i._$Eh.get(t);if(C!==void 0&&this._$Em!==C){let a=i.getPropertyOptions(C),H=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:x4;this._$Em=C;let V=H.fromAttribute(e,a.type);this[C]=V??this._$Ej?.get(C)??V,this._$Em=null}}requestUpdate(t,e,i,C=!1,a){if(t!==void 0){let H=this.constructor;if(C===!1&&(a=this[t]),i??(i=H.getPropertyOptions(t)),!((i.hasChanged??d6)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(H._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:C,wrapped:a},H){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,H??e??this[t]),a!==!0||H!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),C===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[C,a]of this._$Ep)this[C]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[C,a]of i){let{wrapped:H}=a,V=this[C];H!==!0||this._$AL.has(C)||V===void 0||this.C(C,void 0,a,V)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};g0.elementStyles=[],g0.shadowRootOptions={mode:"open"},g0[v4("elementProperties")]=new Map,g0[v4("finalized")]=new Map,KV?.({ReactiveElement:g0}),(G0.reactiveElementVersions??(G0.reactiveElementVersions=[])).push("2.1.2");var _4=globalThis,pi=r=>r,p6=_4.trustedTypes,ui=p6?p6.createPolicy("lit-html",{createHTML:r=>r}):void 0,xi="$lit$",q0=`lit$${Math.random().toFixed(9).slice(2)}$`,gi="?"+q0,XV=`<${gi}>`,E3=document,S4=()=>E3.createComment(""),w4=r=>r===null||typeof r!="object"&&typeof r!="function",Et=Array.isArray,JV=r=>Et(r)||typeof r?.[Symbol.iterator]=="function",yt=`[ 	
\f\r]`,g4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mi=/-->/g,hi=/>/g,T3=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fi=/'/g,Ai=/"/g,_i=/^(?:script|style|textarea|title)$/i,Ft=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=Ft(1),y1=Ft(2),Sf=Ft(3),L5=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),vi=new WeakMap,P3=E3.createTreeWalker(E3,129);function Si(r,t){if(!Et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ui!==void 0?ui.createHTML(t):t}var ts=(r,t)=>{let e=r.length-1,i=[],C,a=t===2?"<svg>":t===3?"<math>":"",H=g4;for(let V=0;V<e;V++){let s=r[V],M,p,h=-1,v=0;for(;v<s.length&&(H.lastIndex=v,p=H.exec(s),p!==null);)v=H.lastIndex,H===g4?p[1]==="!--"?H=mi:p[1]!==void 0?H=hi:p[2]!==void 0?(_i.test(p[2])&&(C=RegExp("</"+p[2],"g")),H=T3):p[3]!==void 0&&(H=T3):H===T3?p[0]===">"?(H=C??g4,h=-1):p[1]===void 0?h=-2:(h=H.lastIndex-p[2].length,M=p[1],H=p[3]===void 0?T3:p[3]==='"'?Ai:fi):H===Ai||H===fi?H=T3:H===mi||H===hi?H=g4:(H=T3,C=void 0);let g=H===T3&&r[V+1].startsWith("/>")?" ":"";a+=H===g4?s+XV:h>=0?(i.push(M),s.slice(0,h)+xi+s.slice(h)+q0+g):s+q0+(h===-2?V:g)}return[Si(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},b4=class r{constructor({strings:t,_$litType$:e},i){let C;this.parts=[];let a=0,H=0,V=t.length-1,s=this.parts,[M,p]=ts(t,e);if(this.el=r.createElement(M,i),P3.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(C=P3.nextNode())!==null&&s.length<V;){if(C.nodeType===1){if(C.hasAttributes())for(let h of C.getAttributeNames())if(h.endsWith(xi)){let v=p[H++],g=C.getAttribute(h).split(q0),y=/([.?@])?(.*)/.exec(v);s.push({type:1,index:a,name:y[2],strings:g,ctor:y[1]==="."?Ot:y[1]==="?"?kt:y[1]==="@"?Tt:m7}),C.removeAttribute(h)}else h.startsWith(q0)&&(s.push({type:6,index:a}),C.removeAttribute(h));if(_i.test(C.tagName)){let h=C.textContent.split(q0),v=h.length-1;if(v>0){C.textContent=p6?p6.emptyScript:"";for(let g=0;g<v;g++)C.append(h[g],S4()),P3.nextNode(),s.push({type:2,index:++a});C.append(h[v],S4())}}}else if(C.nodeType===8)if(C.data===gi)s.push({type:2,index:a});else{let h=-1;for(;(h=C.data.indexOf(q0,h+1))!==-1;)s.push({type:7,index:a}),h+=q0.length-1}a++}}static createElement(t,e){let i=E3.createElement("template");return i.innerHTML=t,i}};function u7(r,t,e=r,i){if(t===L5)return t;let C=i!==void 0?e._$Co?.[i]:e._$Cl,a=w4(t)?void 0:t._$litDirective$;return C?.constructor!==a&&(C?._$AO?.(!1),a===void 0?C=void 0:(C=new a(r),C._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=C:e._$Cl=C),C!==void 0&&(t=u7(r,C._$AS(r,t.values),C,i)),t}var Zt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,C=(t?.creationScope??E3).importNode(e,!0);P3.currentNode=C;let a=P3.nextNode(),H=0,V=0,s=i[0];for(;s!==void 0;){if(H===s.index){let M;s.type===2?M=new y4(a,a.nextSibling,this,t):s.type===1?M=new s.ctor(a,s.name,s.strings,this,t):s.type===6&&(M=new Pt(a,this,t)),this._$AV.push(M),s=i[++V]}H!==s?.index&&(a=P3.nextNode(),H++)}return P3.currentNode=E3,C}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},y4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,C){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=C,this._$Cv=C?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=u7(this,t,e),w4(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==L5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):JV(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&w4(this._$AH)?this._$AA.nextSibling.data=t:this.T(E3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,C=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=b4.createElement(Si(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===C)this._$AH.p(e);else{let a=new Zt(C,this),H=a.u(this.options);a.p(e),this.T(H),this._$AH=a}}_$AC(t){let e=vi.get(t.strings);return e===void 0&&vi.set(t.strings,e=new b4(t)),e}k(t){Et(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,C=0;for(let a of t)C===e.length?e.push(i=new r(this.O(S4()),this.O(S4()),this,this.options)):i=e[C],i._$AI(a),C++;C<e.length&&(this._$AR(i&&i._$AB.nextSibling,C),e.length=C)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=pi(t).nextSibling;pi(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},m7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,C,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=C,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,C){let a=this.strings,H=!1;if(a===void 0)t=u7(this,t,e,0),H=!w4(t)||t!==this._$AH&&t!==L5,H&&(this._$AH=t);else{let V=t,s,M;for(t=a[0],s=0;s<a.length-1;s++)M=u7(this,V[i+s],e,s),M===L5&&(M=this._$AH[s]),H||(H=!w4(M)||M!==this._$AH[s]),M===Z?t=Z:t!==Z&&(t+=(M??"")+a[s+1]),this._$AH[s]=M}H&&!C&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ot=class extends m7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},kt=class extends m7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},Tt=class extends m7{constructor(t,e,i,C,a){super(t,e,i,C,a),this.type=5}_$AI(t,e=this){if((t=u7(this,t,e,0)??Z)===L5)return;let i=this._$AH,C=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Z&&(i===Z||C);C&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Pt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){u7(this,t)}};var es=_4.litHtmlPolyfillSupport;es?.(b4,y4),(_4.litHtmlVersions??(_4.litHtmlVersions=[])).push("3.3.3");var wi=(r,t,e)=>{let i=e?.renderBefore??t,C=i._$litPart$;if(C===void 0){let a=e?.renderBefore??null;i._$litPart$=C=new y4(t.insertBefore(S4(),a),a,void 0,e??{})}return C._$AI(r),C};var Z4=globalThis,L1=class extends g0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L5}};L1._$litElement$=!0,L1.finalized=!0,Z4.litElementHydrateSupport?.({LitElement:L1});var rs=Z4.litElementPolyfillSupport;rs?.({LitElement:L1});(Z4.litElementVersions??(Z4.litElementVersions=[])).push("4.2.2");var u6="2026.10.20.8",O4="weather-station-flex-card",k4="Weather Station Flex Card";var M2=g1`
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
`,m6=g1`
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
`,h6=g1`
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
`,H2=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function h7(r,t,e,i){return _`<div class="seg" role="group" aria-label=${i}>
    ${r.map(C=>_`<button type="button" aria-pressed=${String(C.value===t)} @click=${()=>e(C.value)}>${C.label}</button>`)}
  </div>`}function _0(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function e2(r,t,e,i=Z){return r?.show_title===!1?i===Z?Z:_`<div class="head"><span class="title"></span>${i}</div>`:_`<div class="head">
    <ha-icon icon=${r?.icon||t}></ha-icon>
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function f7(r,{label:t,value:e,unit:i,digits:C=0,color:a,entity:H}){let V=()=>_0(r,H);return _`<div class="reading" @click=${V} role=${H?"button":Z} tabindex=${H?0:Z}
    @keydown=${s=>(s.key==="Enter"||s.key===" ")&&V()}>
    <span class="v">${H2(e,C)}<small>${i||""}</small></span>
    <span class="l">${a?_`<span class="dot" style="background:${a}"></span>`:Z}${t}</span>
  </div>`}var is=typeof global=="object"&&global&&global.Object===Object&&global,f6=is;var Cs=typeof self=="object"&&self&&self.Object===Object&&self,os=f6||Cs||Function("return this")(),v5=os;var as=v5.Symbol,S0=as;var bi=Object.prototype,Hs=bi.hasOwnProperty,ns=bi.toString,T4=S0?S0.toStringTag:void 0;function Vs(r){var t=Hs.call(r,T4),e=r[T4];try{r[T4]=void 0;var i=!0}catch{}var C=ns.call(r);return i&&(t?r[T4]=e:delete r[T4]),C}var yi=Vs;var ss=Object.prototype,Ls=ss.toString;function ls(r){return Ls.call(r)}var Zi=ls;var Ms="[object Null]",cs="[object Undefined]",Oi=S0?S0.toStringTag:void 0;function ds(r){return r==null?r===void 0?cs:Ms:Oi&&Oi in Object(r)?yi(r):Zi(r)}var r0=ds;function ps(r){return r!=null&&typeof r=="object"}var x5=ps;var us="[object Symbol]";function ms(r){return typeof r=="symbol"||x5(r)&&r0(r)==us}var A6=ms;function hs(r,t){for(var e=-1,i=r==null?0:r.length,C=Array(i);++e<i;)C[e]=t(r[e],e,r);return C}var ki=hs;var fs=Array.isArray,F3=fs;var As=1/0,Ti=S0?S0.prototype:void 0,Pi=Ti?Ti.toString:void 0;function Ei(r){if(typeof r=="string")return r;if(F3(r))return ki(r,Ei)+"";if(A6(r))return Pi?Pi.call(r):"";var t=r+"";return t=="0"&&1/r==-As?"-0":t}var Fi=Ei;var vs=/\s/;function xs(r){for(var t=r.length;t--&&vs.test(r.charAt(t)););return t}var $i=xs;var gs=/^\s+/;function _s(r){return r&&r.slice(0,$i(r)+1).replace(gs,"")}var Di=_s;function Ss(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var F2=Ss;var Ri=NaN,ws=/^[-+]0x[0-9a-f]+$/i,bs=/^0b[01]+$/i,ys=/^0o[0-7]+$/i,Zs=parseInt;function Os(r){if(typeof r=="number")return r;if(A6(r))return Ri;if(F2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=F2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Di(r);var e=bs.test(r);return e||ys.test(r)?Zs(r.slice(2),e?2:8):ws.test(r)?Ri:+r}var Bi=Os;var zi=1/0,ks=17976931348623157e292;function Ts(r){if(!r)return r===0?r:0;if(r=Bi(r),r===zi||r===-zi){var t=r<0?-1:1;return t*ks}return r===r?r:0}var $t=Ts;function Ps(r){return r}var v6=Ps;var Es="[object AsyncFunction]",Fs="[object Function]",$s="[object GeneratorFunction]",Ds="[object Proxy]";function Rs(r){if(!F2(r))return!1;var t=r0(r);return t==Fs||t==$s||t==Es||t==Ds}var A7=Rs;var Bs=v5["__core-js_shared__"],x6=Bs;var Ii=(function(){var r=/[^.]+$/.exec(x6&&x6.keys&&x6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function zs(r){return!!Ii&&Ii in r}var Ni=zs;var Is=Function.prototype,Ns=Is.toString;function Ws(r){if(r!=null){try{return Ns.call(r)}catch{}try{return r+""}catch{}}return""}var Wi=Ws;var Us=/[\\^$.*+?()[\]{}|]/g,js=/^\[object .+?Constructor\]$/,Gs=Function.prototype,qs=Object.prototype,Ys=Gs.toString,Qs=qs.hasOwnProperty,Ks=RegExp("^"+Ys.call(Qs).replace(Us,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xs(r){if(!F2(r)||Ni(r))return!1;var t=A7(r)?Ks:js;return t.test(Wi(r))}var Ui=Xs;function Js(r,t){return r?.[t]}var ji=Js;function tL(r,t){var e=ji(r,t);return Ui(e)?e:void 0}var v7=tL;var Gi=Object.create,eL=(function(){function r(){}return function(t){if(!F2(t))return{};if(Gi)return Gi(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),qi=eL;function rL(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var Yi=rL;function iL(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var Qi=iL;var CL=800,oL=16,aL=Date.now;function HL(r){var t=0,e=0;return function(){var i=aL(),C=oL-(i-e);if(e=i,C>0){if(++t>=CL)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var Ki=HL;function nL(r){return function(){return r}}var Xi=nL;var VL=(function(){try{var r=v7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),x7=VL;var sL=x7?function(r,t){return x7(r,"toString",{configurable:!0,enumerable:!1,value:Xi(t),writable:!0})}:v6,Ji=sL;var LL=Ki(Ji),tC=LL;var lL=9007199254740991,ML=/^(?:0|[1-9]\d*)$/;function cL(r,t){var e=typeof r;return t=t??lL,!!t&&(e=="number"||e!="symbol"&&ML.test(r))&&r>-1&&r%1==0&&r<t}var g6=cL;function dL(r,t,e){t=="__proto__"&&x7?x7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var g7=dL;function pL(r,t){return r===t||r!==r&&t!==t}var Y0=pL;var uL=Object.prototype,mL=uL.hasOwnProperty;function hL(r,t,e){var i=r[t];(!(mL.call(r,t)&&Y0(i,e))||e===void 0&&!(t in r))&&g7(r,t,e)}var eC=hL;function fL(r,t,e,i){var C=!e;e||(e={});for(var a=-1,H=t.length;++a<H;){var V=t[a],s=i?i(e[V],r[V],V,e,r):void 0;s===void 0&&(s=r[V]),C?g7(e,V,s):eC(e,V,s)}return e}var rC=fL;var iC=Math.max;function AL(r,t,e){return t=iC(t===void 0?r.length-1:t,0),function(){for(var i=arguments,C=-1,a=iC(i.length-t,0),H=Array(a);++C<a;)H[C]=i[t+C];C=-1;for(var V=Array(t+1);++C<t;)V[C]=i[C];return V[t]=e(H),Yi(r,this,V)}}var CC=AL;function vL(r,t){return tC(CC(r,t,v6),r+"")}var oC=vL;var xL=9007199254740991;function gL(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=xL}var _6=gL;function _L(r){return r!=null&&_6(r.length)&&!A7(r)}var _7=_L;function SL(r,t,e){if(!F2(e))return!1;var i=typeof t;return(i=="number"?_7(e)&&g6(t,e.length):i=="string"&&t in e)?Y0(e[t],r):!1}var S6=SL;function wL(r){return oC(function(t,e){var i=-1,C=e.length,a=C>1?e[C-1]:void 0,H=C>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(C--,a):void 0,H&&S6(e[0],e[1],H)&&(a=C<3?void 0:a,C=1),t=Object(t);++i<C;){var V=e[i];V&&r(t,V,i,a)}return t})}var aC=wL;var bL=Object.prototype;function yL(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||bL;return r===e}var w6=yL;function ZL(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var HC=ZL;var OL="[object Arguments]";function kL(r){return x5(r)&&r0(r)==OL}var Dt=kL;var nC=Object.prototype,TL=nC.hasOwnProperty,PL=nC.propertyIsEnumerable,EL=Dt((function(){return arguments})())?Dt:function(r){return x5(r)&&TL.call(r,"callee")&&!PL.call(r,"callee")},P4=EL;function FL(){return!1}var VC=FL;var lC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,sC=lC&&typeof module=="object"&&module&&!module.nodeType&&module,$L=sC&&sC.exports===lC,LC=$L?v5.Buffer:void 0,DL=LC?LC.isBuffer:void 0,RL=DL||VC,b6=RL;var BL="[object Arguments]",zL="[object Array]",IL="[object Boolean]",NL="[object Date]",WL="[object Error]",UL="[object Function]",jL="[object Map]",GL="[object Number]",qL="[object Object]",YL="[object RegExp]",QL="[object Set]",KL="[object String]",XL="[object WeakMap]",JL="[object ArrayBuffer]",tl="[object DataView]",el="[object Float32Array]",rl="[object Float64Array]",il="[object Int8Array]",Cl="[object Int16Array]",ol="[object Int32Array]",al="[object Uint8Array]",Hl="[object Uint8ClampedArray]",nl="[object Uint16Array]",Vl="[object Uint32Array]",C2={};C2[el]=C2[rl]=C2[il]=C2[Cl]=C2[ol]=C2[al]=C2[Hl]=C2[nl]=C2[Vl]=!0;C2[BL]=C2[zL]=C2[JL]=C2[IL]=C2[tl]=C2[NL]=C2[WL]=C2[UL]=C2[jL]=C2[GL]=C2[qL]=C2[YL]=C2[QL]=C2[KL]=C2[XL]=!1;function sl(r){return x5(r)&&_6(r.length)&&!!C2[r0(r)]}var MC=sl;function Ll(r){return function(t){return r(t)}}var cC=Ll;var dC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,E4=dC&&typeof module=="object"&&module&&!module.nodeType&&module,ll=E4&&E4.exports===dC,Rt=ll&&f6.process,Ml=(function(){try{var r=E4&&E4.require&&E4.require("util").types;return r||Rt&&Rt.binding&&Rt.binding("util")}catch{}})(),Bt=Ml;var pC=Bt&&Bt.isTypedArray,cl=pC?cC(pC):MC,y6=cl;var dl=Object.prototype,pl=dl.hasOwnProperty;function ul(r,t){var e=F3(r),i=!e&&P4(r),C=!e&&!i&&b6(r),a=!e&&!i&&!C&&y6(r),H=e||i||C||a,V=H?HC(r.length,String):[],s=V.length;for(var M in r)(t||pl.call(r,M))&&!(H&&(M=="length"||C&&(M=="offset"||M=="parent")||a&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||g6(M,s)))&&V.push(M);return V}var uC=ul;function ml(r,t){return function(e){return r(t(e))}}var mC=ml;function hl(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var hC=hl;var fl=Object.prototype,Al=fl.hasOwnProperty;function vl(r){if(!F2(r))return hC(r);var t=w6(r),e=[];for(var i in r)i=="constructor"&&(t||!Al.call(r,i))||e.push(i);return e}var fC=vl;function xl(r){return _7(r)?uC(r,!0):fC(r)}var Z6=xl;var gl=v7(Object,"create"),w0=gl;function _l(){this.__data__=w0?w0(null):{},this.size=0}var AC=_l;function Sl(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var vC=Sl;var wl="__lodash_hash_undefined__",bl=Object.prototype,yl=bl.hasOwnProperty;function Zl(r){var t=this.__data__;if(w0){var e=t[r];return e===wl?void 0:e}return yl.call(t,r)?t[r]:void 0}var xC=Zl;var Ol=Object.prototype,kl=Ol.hasOwnProperty;function Tl(r){var t=this.__data__;return w0?t[r]!==void 0:kl.call(t,r)}var gC=Tl;var Pl="__lodash_hash_undefined__";function El(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=w0&&t===void 0?Pl:t,this}var _C=El;function S7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}S7.prototype.clear=AC;S7.prototype.delete=vC;S7.prototype.get=xC;S7.prototype.has=gC;S7.prototype.set=_C;var zt=S7;function Fl(){this.__data__=[],this.size=0}var SC=Fl;function $l(r,t){for(var e=r.length;e--;)if(Y0(r[e][0],t))return e;return-1}var Q0=$l;var Dl=Array.prototype,Rl=Dl.splice;function Bl(r){var t=this.__data__,e=Q0(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():Rl.call(t,e,1),--this.size,!0}var wC=Bl;function zl(r){var t=this.__data__,e=Q0(t,r);return e<0?void 0:t[e][1]}var bC=zl;function Il(r){return Q0(this.__data__,r)>-1}var yC=Il;function Nl(r,t){var e=this.__data__,i=Q0(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var ZC=Nl;function w7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}w7.prototype.clear=SC;w7.prototype.delete=wC;w7.prototype.get=bC;w7.prototype.has=yC;w7.prototype.set=ZC;var K0=w7;var Wl=v7(v5,"Map"),O6=Wl;function Ul(){this.size=0,this.__data__={hash:new zt,map:new(O6||K0),string:new zt}}var OC=Ul;function jl(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var kC=jl;function Gl(r,t){var e=r.__data__;return kC(t)?e[typeof t=="string"?"string":"hash"]:e.map}var X0=Gl;function ql(r){var t=X0(this,r).delete(r);return this.size-=t?1:0,t}var TC=ql;function Yl(r){return X0(this,r).get(r)}var PC=Yl;function Ql(r){return X0(this,r).has(r)}var EC=Ql;function Kl(r,t){var e=X0(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var FC=Kl;function b7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}b7.prototype.clear=OC;b7.prototype.delete=TC;b7.prototype.get=PC;b7.prototype.has=EC;b7.prototype.set=FC;var $C=b7;function Xl(r){return r==null?"":Fi(r)}var k6=Xl;var Jl=mC(Object.getPrototypeOf,Object),T6=Jl;var tM="[object Object]",eM=Function.prototype,rM=Object.prototype,DC=eM.toString,iM=rM.hasOwnProperty,CM=DC.call(Object);function oM(r){if(!x5(r)||r0(r)!=tM)return!1;var t=T6(r);if(t===null)return!0;var e=iM.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&DC.call(e)==CM}var RC=oM;function aM(r,t,e){var i=-1,C=r.length;t<0&&(t=-t>C?0:C+t),e=e>C?C:e,e<0&&(e+=C),C=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(C);++i<C;)a[i]=r[i+t];return a}var BC=aM;function HM(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:BC(r,t,e)}var zC=HM;var nM="\\ud800-\\udfff",VM="\\u0300-\\u036f",sM="\\ufe20-\\ufe2f",LM="\\u20d0-\\u20ff",lM=VM+sM+LM,MM="\\ufe0e\\ufe0f",cM="\\u200d",dM=RegExp("["+cM+nM+lM+MM+"]");function pM(r){return dM.test(r)}var P6=pM;function uM(r){return r.split("")}var IC=uM;var NC="\\ud800-\\udfff",mM="\\u0300-\\u036f",hM="\\ufe20-\\ufe2f",fM="\\u20d0-\\u20ff",AM=mM+hM+fM,vM="\\ufe0e\\ufe0f",xM="["+NC+"]",It="["+AM+"]",Nt="\\ud83c[\\udffb-\\udfff]",gM="(?:"+It+"|"+Nt+")",WC="[^"+NC+"]",UC="(?:\\ud83c[\\udde6-\\uddff]){2}",jC="[\\ud800-\\udbff][\\udc00-\\udfff]",_M="\\u200d",GC=gM+"?",qC="["+vM+"]?",SM="(?:"+_M+"(?:"+[WC,UC,jC].join("|")+")"+qC+GC+")*",wM=qC+GC+SM,bM="(?:"+[WC+It+"?",It,UC,jC,xM].join("|")+")",yM=RegExp(Nt+"(?="+Nt+")|"+bM+wM,"g");function ZM(r){return r.match(yM)||[]}var YC=ZM;function OM(r){return P6(r)?YC(r):IC(r)}var QC=OM;function kM(r){return function(t){t=k6(t);var e=P6(t)?QC(t):void 0,i=e?e[0]:t.charAt(0),C=e?zC(e,1).join(""):t.slice(1);return i[r]()+C}}var KC=kM;var TM=KC("toUpperCase"),XC=TM;function PM(r){return XC(k6(r).toLowerCase())}var g5=PM;function EM(){this.__data__=new K0,this.size=0}var JC=EM;function FM(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var to=FM;function $M(r){return this.__data__.get(r)}var eo=$M;function DM(r){return this.__data__.has(r)}var ro=DM;var RM=200;function BM(r,t){var e=this.__data__;if(e instanceof K0){var i=e.__data__;if(!O6||i.length<RM-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new $C(i)}return e.set(r,t),this.size=e.size,this}var io=BM;function y7(r){var t=this.__data__=new K0(r);this.size=t.size}y7.prototype.clear=JC;y7.prototype.delete=to;y7.prototype.get=eo;y7.prototype.has=ro;y7.prototype.set=io;var Co=y7;var no=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oo=no&&typeof module=="object"&&module&&!module.nodeType&&module,zM=oo&&oo.exports===no,ao=zM?v5.Buffer:void 0,Ho=ao?ao.allocUnsafe:void 0;function IM(r,t){if(t)return r.slice();var e=r.length,i=Ho?Ho(e):new r.constructor(e);return r.copy(i),i}var Vo=IM;var NM=v5.Uint8Array,Wt=NM;function WM(r){var t=new r.constructor(r.byteLength);return new Wt(t).set(new Wt(r)),t}var so=WM;function UM(r,t){var e=t?so(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var Lo=UM;function jM(r){return typeof r.constructor=="function"&&!w6(r)?qi(T6(r)):{}}var lo=jM;function GM(r){return function(t,e,i){for(var C=-1,a=Object(t),H=i(t),V=H.length;V--;){var s=H[r?V:++C];if(e(a[s],s,a)===!1)break}return t}}var Mo=GM;var qM=Mo(),co=qM;function YM(r,t,e){(e!==void 0&&!Y0(r[t],e)||e===void 0&&!(t in r))&&g7(r,t,e)}var F4=YM;function QM(r){return x5(r)&&_7(r)}var po=QM;function KM(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var $4=KM;function XM(r){return rC(r,Z6(r))}var uo=XM;function JM(r,t,e,i,C,a,H){var V=$4(r,e),s=$4(t,e),M=H.get(s);if(M){F4(r,e,M);return}var p=a?a(V,s,e+"",r,t,H):void 0,h=p===void 0;if(h){var v=F3(s),g=!v&&b6(s),y=!v&&!g&&y6(s);p=s,v||g||y?F3(V)?p=V:po(V)?p=Qi(V):g?(h=!1,p=Vo(s,!0)):y?(h=!1,p=Lo(s,!0)):p=[]:RC(s)||P4(s)?(p=V,P4(V)?p=uo(V):(!F2(V)||A7(V))&&(p=lo(s))):h=!1}h&&(H.set(s,p),C(p,s,i,a,H),H.delete(s)),F4(r,e,p)}var mo=JM;function ho(r,t,e,i,C){r!==t&&co(t,function(a,H){if(C||(C=new Co),F2(a))mo(r,t,H,e,ho,i,C);else{var V=i?i($4(r,H),a,H+"",r,t,C):void 0;V===void 0&&(V=a),F4(r,H,V)}},Z6)}var fo=ho;var tc=aC(function(r,t,e){fo(r,t,e)}),$3=tc;var ec=Math.floor,rc=Math.random;function ic(r,t){return r+ec(rc()*(t-r+1))}var Ao=ic;var Cc=parseFloat,oc=Math.min,ac=Math.random;function Hc(r,t,e){if(e&&typeof e!="boolean"&&S6(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=$t(r),t===void 0?(t=r,r=0):t=$t(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var C=ac();return oc(r+C*(t-r+Cc("1e-"+((C+"").length-1))),t)}return Ao(r,t)}var B1=Hc;var n2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var nc={attribute:!0,type:String,converter:x4,reflect:!1,hasChanged:d6},Vc=(r=nc,t,e)=>{let{kind:i,metadata:C}=e,a=globalThis.litPropertyMetadata.get(C);if(a===void 0&&globalThis.litPropertyMetadata.set(C,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:H}=e;return{set(V){let s=t.get.call(this);t.set.call(this,V),this.requestUpdate(H,s,r,!0,V)},init(V){return V!==void 0&&this.C(H,void 0,r,V),V}}}if(i==="setter"){let{name:H}=e;return function(V){let s=this[H];t.call(this,V),this.requestUpdate(H,s,r,!0,V)}}throw Error("Unsupported decorator location: "+i)};function e1(r){return(t,e)=>typeof e=="object"?Vc(r,t,e):((i,C,a)=>{let H=C.hasOwnProperty(a);return C.constructor.createProperty(a,i),H?Object.getOwnPropertyDescriptor(C,a):void 0})(r,t,e)}function q2(r){return e1({...r,state:!0,attribute:!1})}var D3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function D4(r,t){return(e,i,C)=>{let a=H=>H.renderRoot?.querySelector(r)??null;if(t){let{get:H,set:V}=typeof i=="object"?e:C??(()=>{let s=Symbol();return{get(){return this[s]},set(M){this[s]=M}}})();return D3(e,i,{get(){let s=H.call(this);return s===void 0&&(s=a(this),(s!==null||this.hasUpdated)&&V.call(this,s)),s}})}return D3(e,i,{get(){return a(this)}})}}var vo=`:host {
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
`;var xo=g1`
  ${x0(vo)}
`;var R3,B3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(R3||(R3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(B3||(B3={}));function _o(){return(_o=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function Lc(r){return r.substr(0,r.indexOf("."))}var lc=function(r){switch(r.number_format){case R3.comma_decimal:return["en-US","en"];case R3.decimal_comma:return["de","es","it"];case R3.space_comma:return["fr","sv","cs"];case R3.system:return;default:return r.language}},Mc=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},Ut=function(r,t,e){var i=t?lc(t):void 0;if(Number.isNaN=Number.isNaN||function C(a){return typeof a=="number"&&C(a)},t?.number_format!==R3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,go(r,e)).format(Number(r))}catch(C){return console.error(C),new Intl.NumberFormat(void 0,go(r,e)).format(Number(r))}return typeof r=="string"?r:Mc(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},go=function(r,t){var e=_o({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var cc=["closed","locked","off"];var o2=function(r,t,e,i){i=i||{},e=e??{};var C=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return C.detail=e,r.dispatchEvent(C),C};var E6=function(r){o2(window,"haptic",r)},dc=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),o2(window,"location-changed",{replace:e})},pc=function(r,t,e){e===void 0&&(e=!0);var i,C=Lc(t),a=C==="group"?"homeassistant":C;switch(C){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},uc=function(r,t){var e=cc.includes(r.states[t].state);return pc(r,t,e)},mc=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(E6("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&o2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&dc(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(uc(t,e.entity),E6("success"));break;case"call-service":if(!i.service)return void E6("failure");var C=i.service.split(".",2);t.callService(C[0],C[1],i.service_data,i.target),E6("success");break;case"fire-dom-event":o2(r,"ll-custom",i)}},R4=function(r,t,e,i){var C;i==="double_tap"&&e.double_tap_action?C=e.double_tap_action:i==="hold"&&e.hold_action?C=e.hold_action:i==="tap"&&e.tap_action&&(C=e.tap_action),mc(r,t,e,C)};function b0(r){return r!==void 0&&r.action!=="none"}function So(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var wo="NOT_RUNNING";var F6=f4(B4(),1);var yo=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function hc(r,t){return!!(r===t||yo(r)&&yo(t))}function fc(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!hc(r[e],t[e]))return!1;return!0}function J0(r,t){t===void 0&&(t=fc);var e=null;function i(){for(var C=[],a=0;a<arguments.length;a++)C[a]=arguments[a];if(e&&e.lastThis===this&&t(C,e.lastArgs))return e.lastResult;var H=r.apply(this,C);return e={lastResult:H,lastArgs:C,lastThis:this},H}return i.clear=function(){e=null},i}var Zo=(r,t)=>r?r.config.state!==wo?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",t3=(r,t)=>O7(t).toLocaleDateString(z3(r),{weekday:"short"}),Oo=(r,t)=>O7(t).toLocaleDateString(z3(r),{day:"numeric"}),ko=(r,t)=>{let e=O7(t),i=z3(r),C=$6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:C}).formatToParts(e),h=p.find(g=>g.type==="hour"),v=p.find(g=>g.type==="dayPeriod");if(h){if(v)return{hour:h.value,suffix:v.value};let g=p.indexOf(h),y=p.slice(g+1).filter(O=>O.type==="literal").map(O=>O.value).join("");return y&&y.trim()?{hour:h.value,suffix:y.trim()}:{hour:h.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:C}),H=a.match(/\d+/),V=H?H[0]:a,s=a.replace(/\d+\s*/,"").trim();return s?{hour:V,suffix:s}:{hour:V}},To=(r,t)=>{let e=O7(t),i=z3(r),C=$6(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:C}).formatToParts(e),h=p.find(y=>y.type==="hour"),v=p.find(y=>y.type==="minute"),g=p.find(y=>y.type==="dayPeriod");if(h&&v){let y=p.indexOf(h),O=p.indexOf(v),k=p.slice(y+1,O).map(D=>D.value).join(""),P=`${h.value}${k}${v.value}`;if(g)return{time:P,suffix:g.value};let $=p.slice(O+1).filter(D=>D.type==="literal").map(D=>D.value).join("");return $&&$.trim()?{time:P,suffix:$.trim()}:{time:P}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:C}),H=a.match(/\d+[:.]\d+/),V=H?H[0]:a,s=a.replace(/\d+[:.]\d+\s*/,"").trim();return s?{time:V,suffix:s}:{time:V}},Z7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},$6=J0(r=>{let t=r?.locale;if(t?.time_format===B3.language||t?.time_format===B3.system){let e=t.time_format===B3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===B3.am_pm}),z3=r=>r?.locale?.language||navigator.language||"en",O7=r=>typeof r=="string"?new Date(r):r,y0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let C=O7(t),a=F6.getTimes(C,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:C<a.sunrise||C>a.sunset}},Po=(r,t)=>{let e=O7(t),{fraction:i,phase:C}=F6.getMoonIllumination(e),a=C<=.5,H=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==H}},Eo=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),C=e<.5,a=t===C?0:1,H=t?-60:160;return`M50 0 L${H} 0 L${H} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},qt=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),C=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${C} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},k7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,Fo=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},Gt=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},$o=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=Gt(t.secondary_info_attribute);i&&e.add(i);let C=t.show_attributes;if(Array.isArray(C))for(let a of C){let H=Gt(a);H&&e.add(H)}else{let a=Gt(C);a&&e.add(a)}return e.delete(r.entity),[...e]};var D2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},Xt={silent:{level:-1},fatal:{level:D2.fatal},error:{level:D2.error},warn:{level:D2.warn},log:{level:D2.log},info:{level:D2.info},success:{level:D2.success},fail:{level:D2.fail},ready:{level:D2.info},start:{level:D2.info},box:{level:D2.info},debug:{level:D2.debug},trace:{level:D2.trace},verbose:{level:D2.verbose}};function Yt(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function Jt(r,t,e=".",i){if(!Yt(t))return Jt(r,{},e,i);let C=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let H=r[a];H!=null&&(i&&i(C,a,H,e)||(Array.isArray(H)&&Array.isArray(C[a])?C[a]=[...H,...C[a]]:Yt(H)&&Yt(C[a])?C[a]=Jt(H,C[a],(e?`${e}.`:"")+a.toString(),i):C[a]=H))}return C}function Ac(r){return(...t)=>t.reduce((e,i)=>Jt(e,i,"",r),{})}var vc=Ac();function xc(r){return Object.prototype.toString.call(r)==="[object Object]"}function gc(r){return!(!xc(r)||!r.message&&!r.args||r.stack)}var Qt=!1,Do=[],y2=class r{constructor(t={}){I(this,"options");I(this,"_lastLog");I(this,"_mockFn");let e=t.types||Xt;this.options=vc({...t,defaults:{...t.defaults},level:Kt(t.level,e),reporters:[...t.reporters||[]]},{types:Xt,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let C={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(C),this[i].raw=this._wrapLogFn(C,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=Kt(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){Qt=!0}resumeLogs(){Qt=!1;let t=Do.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(Qt){Do.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let C={date:new Date,args:[],...t,level:Kt(t.level,this.options.types)};!i&&e.length===1&&gc(e[0])?Object.assign(C,e[0]):C.args=[...e],C.message&&(C.args.unshift(C.message),delete C.message),C.additional&&(Array.isArray(C.additional)||(C.additional=C.additional.split(`
`)),C.args.push(`
`+C.additional.join(`
`)),delete C.additional),C.type=typeof C.type=="string"?C.type.toLowerCase():"log",C.tag=typeof C.tag=="string"?C.tag:"";let a=(V=!1)=>{let s=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&s>0){let M=[...this._lastLog.object.args];s>1&&M.push(`(repeated ${s} times)`),this._log({...this._lastLog.object,args:M}),this._lastLog.count=1}V&&(this._lastLog.object=C,this._log(C))};clearTimeout(this._lastLog.timeout);let H=this._lastLog.time&&C.date?C.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=C.date,H<this.options.throttle)try{let V=JSON.stringify([C.type,C.tag,C.args]),s=this._lastLog.serialized===V;if(this._lastLog.serialized=V,s&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function Kt(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}y2.prototype.add=y2.prototype.addReporter;y2.prototype.remove=y2.prototype.removeReporter;y2.prototype.clear=y2.prototype.removeReporter;y2.prototype.withScope=y2.prototype.withTag;y2.prototype.mock=y2.prototype.mockTypes;y2.prototype.pause=y2.prototype.pauseLogs;y2.prototype.resume=y2.prototype.resumeLogs;function Ro(r={}){return new y2(r)}var te=class{constructor(t){I(this,"options");I(this,"defaultColor");I(this,"levelColorMap");I(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,C=t.tag||"",H=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,V=`%c${[C,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${V}%c ${t.args[0]}`,H,"",...t.args.slice(1)):e(V,H,...t.args)}};function ee(r={}){return Ro({reporters:r.reporters||[new te({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var iw=ee();var _c=D2.info,F5=ee({level:_c}).withTag("weather-forecast-card");var Bo=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",re=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var D6={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T7=r=>(...t)=>({_$litDirective$:r,values:t}),e3=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var zo="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,ie=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:zo?"100px":"50px",height:zo?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",V=>{let s=V||window.event;return s.preventDefault&&s.preventDefault(),s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0,s.returnValue=!1,!1});let C=V=>{this.held=!1;let s,M;V.touches?(s=V.touches[0].pageX,M=V.touches[0].pageY):(s=V.pageX,M=V.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(s,M),this.held=!0},this.holdTime)},a=V=>{V.preventDefault(),i.stopPropagation&&V.stopPropagation(),!(["touchend","touchcancel"].includes(V.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?o2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?V.type==="click"&&V.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,o2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,o2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):o2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},H=V=>{V.keyCode===13&&a(V)};e.addEventListener("touchstart",C,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",C,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",H)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",ie);var Sc=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},wc=(r,t)=>{let e=Sc();e&&e.bind(r,t)},i0=T7(class extends e3{update(r,[t]){return wc(r.element,t),L5}render(r){}});var I3=2,R2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],R6=["rain","snow","lightning","sky","moon","sun","cloud"],B6=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],Io="temperature_and_precipitation";var Ce=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(Ce||{}),bc=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],yc={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},$5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},Zc=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return bc[e]},Oc=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let C=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return C;let a=Zc(i);if(!a)return C;let H=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${C} (${H})`},l5=(r,t,e)=>{let i=r.config,C=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||C;case"precipitation":return t.attributes.precipitation_unit||(C==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(C==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${C}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${C}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},kc=288e5,Tc=864e5,Pc=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<kc}},Ec=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<Tc}},No=r=>{if(r?.forecast&&r.forecast.length>2)return Pc(r.forecast)?{forecast:r.forecast,type:"hourly"}:Ec(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},oe=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:No(r);if(e==="legacy")return No(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},Wo=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var Uo=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,jo=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,C=(t&4)!==0;return e||i||C},z4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let C={hourly:2,daily:1,twice_daily:4}[t];return(e&C)!==0},_5=r=>{if(z4(r,"daily"))return"daily";if(z4(r,"twice_daily"))return"twice_daily"},Go=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},P7=J0((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),I4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=l5(r,t,"wind_speed");return Fc(e.wind_speed,i)},Fc=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},z6=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return yc[e]}}},qo=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,H=a===0?t:t-a,V=r.slice(i,i+H);if(i+=V.length,V.length===0)continue;let s=V.map(D=>D.temperature),M=V.map(D=>D.humidity).filter(D=>D!==void 0),p=V.map(D=>D.pressure).filter(D=>D!==void 0),h=V.map(D=>D.wind_speed).filter(D=>D!==void 0),v=V.map(D=>D.wind_bearing).filter(D=>D!==void 0),g=V.map(D=>D.precipitation_probability).filter(D=>D!==void 0),y=V.map(D=>D.uv_index).filter(D=>D!==void 0),O=V.map(D=>D.apparent_temperature).filter(D=>D!==void 0),k=new Date(V[V.length-1].datetime);k.setMinutes(59),k.setSeconds(59);let P={datetime:V[0].datetime,groupEndtime:k.toISOString(),condition:Rc(V),temperature:parseFloat(k7(s).toFixed(1))};M.length>0&&(P.humidity=Math.round(k7(M))),g.length>0&&(P.precipitation_probability=Math.max(...g)),V.some(D=>D.precipitation!==void 0)&&(P.precipitation=V.reduce((D,K)=>D+(K.precipitation||0),0));let $=V.map(D=>D.templow).filter(D=>D!==void 0);$.length>0&&(P.templow=Math.min(...$)),p.length>0&&(P.pressure=Math.round(k7(p))),h.length>0&&(P.wind_speed=k7(h)),v.length>0&&(P.wind_bearing=Dc(v)),y.length>0&&(P.uv_index=Math.max(...y)),O.length>0&&(P.apparent_temperature=parseFloat(k7(O).toFixed(1))),e.push(P)}return e},$c="mdi:gauge",Yo=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?$5[r]:void 0)??$c),E7=(r,t,e,i)=>{let C=t.attributes[i];if(C!==void 0){if(i==="wind_speed")return Oc(r,t);if(i==="wind_gust_speed"){let a=l5(r,t,"wind_gust_speed");return`${Ut(C,r.locale)} ${a}`}if(i==="ozone"){let a=l5(r,t,"ozone");return`${C} ${a}`}return i==="apparent_temperature"||i==="dew_point"?C0(r,t,C,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},I6=(r,t,e,i,C)=>{let a=r.states[C];if(!a)return;let H=a.state;return H===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?C0(r,t,H,e.current?.temperature_precision):r.formatEntityState(a)},C0=(r,t,e,i,C)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,H=l5(r,t,"temperature"),V=typeof e=="string"?parseFloat(e):e;return isNaN(V)?`${e}${C?"":H}`:`${Ut(V,r.locale,a)}${C?"":H}`},Dc=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(V=>{let s=V*Math.PI/180;t+=Math.sin(s),e+=Math.cos(s)});let i=t/r.length,C=e/r.length,H=Math.atan2(i,C)*180/Math.PI;return H<0&&(H+=360),Math.round(H)},Rc=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let C=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return C===-1&&(C=0),a===-1&&(a=0),C-a}),r[0]?.condition||"exceptional"};var F7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let C=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{C&&(C.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let C=t.scrollLeft,a=Math.round(C/i)*i,H=500,V=performance.now(),s=p=>p*(2-p),M=p=>{let h=this._container;if(!h){this._completeFinalize();return}let v=p-V,g=Math.min(v/H,1),y=s(g);h.scrollLeft=C+(a-C)*y,g<1?this._state.momentumId=requestAnimationFrame(M):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(M)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var Qo="important",Bc=" !"+Qo,Y2=T7(class extends e3{constructor(r){if(super(r),r.type!==D6.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let C=t[i];if(C!=null){this.ft.add(i);let a=typeof C=="string"&&C.endsWith(Bc);i.includes("-")||a?e.setProperty(i,a?C.slice(0,-11):C,a?Qo:""):e[i]=C}}return L5}});var N3=T7(class extends e3{constructor(r){if(super(r),r.type!==D6.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let C=!!t[i];C===this.st.has(i)||this.nt?.has(i)||(C?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return L5}});function U4(r){return r+.5|0}var r3=(r,t,e)=>Math.max(Math.min(r,e),t);function N4(r){return r3(U4(r*2.55),0,255)}function i3(r){return r3(U4(r*255),0,255)}function Z0(r){return r3(U4(r/2.55)/100,0,1)}function Ko(r){return r3(U4(r*100),0,100)}var S5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},He=[..."0123456789ABCDEF"],zc=r=>He[r&15],Ic=r=>He[(r&240)>>4]+He[r&15],N6=r=>(r&240)>>4===(r&15),Nc=r=>N6(r.r)&&N6(r.g)&&N6(r.b)&&N6(r.a);function Wc(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&S5[r[1]]*17,g:255&S5[r[2]]*17,b:255&S5[r[3]]*17,a:t===5?S5[r[4]]*17:255}:(t===7||t===9)&&(e={r:S5[r[1]]<<4|S5[r[2]],g:S5[r[3]]<<4|S5[r[4]],b:S5[r[5]]<<4|S5[r[6]],a:t===9?S5[r[7]]<<4|S5[r[8]]:255})),e}var Uc=(r,t)=>r<255?t(r):"";function jc(r){var t=Nc(r)?zc:Ic;return r?"#"+t(r.r)+t(r.g)+t(r.b)+Uc(r.a,t):void 0}var Gc=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ea(r,t,e){let i=t*Math.min(e,1-e),C=(a,H=(a+r/30)%12)=>e-i*Math.max(Math.min(H-3,9-H,1),-1);return[C(0),C(8),C(4)]}function qc(r,t,e){let i=(C,a=(C+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function Yc(r,t,e){let i=ea(r,1,.5),C;for(t+e>1&&(C=1/(t+e),t*=C,e*=C),C=0;C<3;C++)i[C]*=1-t-e,i[C]+=t;return i}function Qc(r,t,e,i,C){return r===C?(t-e)/i+(t<e?6:0):t===C?(e-r)/i+2:(r-t)/i+4}function ne(r){let e=r.r/255,i=r.g/255,C=r.b/255,a=Math.max(e,i,C),H=Math.min(e,i,C),V=(a+H)/2,s,M,p;return a!==H&&(p=a-H,M=V>.5?p/(2-a-H):p/(a+H),s=Qc(e,i,C,p,a),s=s*60+.5),[s|0,M||0,V]}function Ve(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(i3)}function se(r,t,e){return Ve(ea,r,t,e)}function Kc(r,t,e){return Ve(Yc,r,t,e)}function Xc(r,t,e){return Ve(qc,r,t,e)}function ra(r){return(r%360+360)%360}function Jc(r){let t=Gc.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?N4(+t[5]):i3(+t[5]));let C=ra(+t[2]),a=+t[3]/100,H=+t[4]/100;return t[1]==="hwb"?i=Kc(C,a,H):t[1]==="hsv"?i=Xc(C,a,H):i=se(C,a,H),{r:i[0],g:i[1],b:i[2],a:e}}function td(r,t){var e=ne(r);e[0]=ra(e[0]+t),e=se(e),r.r=e[0],r.g=e[1],r.b=e[2]}function ed(r){if(!r)return;let t=ne(r),e=t[0],i=Ko(t[1]),C=Ko(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${C}%, ${Z0(r.a)})`:`hsl(${e}, ${i}%, ${C}%)`}var Xo={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Jo={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function rd(){let r={},t=Object.keys(Jo),e=Object.keys(Xo),i,C,a,H,V;for(i=0;i<t.length;i++){for(H=V=t[i],C=0;C<e.length;C++)a=e[C],V=V.replace(a,Xo[a]);a=parseInt(Jo[H],16),r[V]=[a>>16&255,a>>8&255,a&255]}return r}var W6;function id(r){W6||(W6=rd(),W6.transparent=[0,0,0,0]);let t=W6[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Cd=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function od(r){let t=Cd.exec(r),e=255,i,C,a;if(t){if(t[7]!==i){let H=+t[7];e=t[8]?N4(H):r3(H*255,0,255)}return i=+t[1],C=+t[3],a=+t[5],i=255&(t[2]?N4(i):r3(i,0,255)),C=255&(t[4]?N4(C):r3(C,0,255)),a=255&(t[6]?N4(a):r3(a,0,255)),{r:i,g:C,b:a,a:e}}}function ad(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${Z0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var ae=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,$7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function Hd(r,t,e){let i=$7(Z0(r.r)),C=$7(Z0(r.g)),a=$7(Z0(r.b));return{r:i3(ae(i+e*($7(Z0(t.r))-i))),g:i3(ae(C+e*($7(Z0(t.g))-C))),b:i3(ae(a+e*($7(Z0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function U6(r,t,e){if(r){let i=ne(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=se(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function ia(r,t){return r&&Object.assign(t||{},r)}function ta(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=i3(r[3]))):(t=ia(r,{r:0,g:0,b:0,a:1}),t.a=i3(t.a)),t}function nd(r){return r.charAt(0)==="r"?od(r):Jc(r)}var W4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=ta(t):e==="string"&&(i=Wc(t)||id(t)||nd(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=ia(this._rgb);return t&&(t.a=Z0(t.a)),t}set rgb(t){this._rgb=ta(t)}rgbString(){return this._valid?ad(this._rgb):void 0}hexString(){return this._valid?jc(this._rgb):void 0}hslString(){return this._valid?ed(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,C=t.rgb,a,H=e===a?.5:e,V=2*H-1,s=i.a-C.a,M=((V*s===-1?V:(V+s)/(1+V*s))+1)/2;a=1-M,i.r=255&M*i.r+a*C.r+.5,i.g=255&M*i.g+a*C.g+.5,i.b=255&M*i.b+a*C.b+.5,i.a=H*i.a+(1-H)*C.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=Hd(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=i3(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=U4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return U6(this._rgb,2,t),this}darken(t){return U6(this._rgb,2,-t),this}saturate(t){return U6(this._rgb,1,t),this}desaturate(t){return U6(this._rgb,1,-t),this}rotate(t){return td(this._rgb,t),this}};function R5(){}var ce=(()=>{let r=0;return()=>r++})();function b1(r){return r==null}function r2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Z1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function V2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function Q2(r,t){return V2(r)?r:t}function $1(r,t){return typeof r>"u"?t:r}var de=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function J1(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function z1(r,t,e,i){let C,a,H;if(r2(r))if(a=r.length,i)for(C=a-1;C>=0;C--)t.call(e,r[C],C);else for(C=0;C<a;C++)t.call(e,r[C],C);else if(Z1(r))for(H=Object.keys(r),a=H.length,C=0;C<a;C++)t.call(e,r[H[C]],H[C])}function B7(r,t){let e,i,C,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(C=r[e],a=t[e],C.datasetIndex!==a.datasetIndex||C.index!==a.index)return!1;return!0}function G4(r){if(r2(r))return r.map(G4);if(Z1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,C=0;for(;C<i;++C)t[e[C]]=G4(r[e[C]]);return t}return r}function Ma(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function ca(r,t,e,i){if(!Ma(r))return;let C=t[r],a=e[r];Z1(C)&&Z1(a)?M5(C,a,i):t[r]=G4(a)}function M5(r,t,e){let i=r2(t)?t:[t],C=i.length;if(!Z1(r))return r;e=e||{};let a=e.merger||ca,H;for(let V=0;V<C;++V){if(H=i[V],!Z1(H))continue;let s=Object.keys(H);for(let M=0,p=s.length;M<p;++M)a(s[M],r,H,e)}return r}function j3(r,t){return M5(r,t,{merger:da})}function da(r,t,e){if(!Ma(r))return;let i=t[r],C=e[r];Z1(i)&&Z1(C)?j3(i,C):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=G4(C))}var Ca={"":r=>r,x:r=>r.x,y:r=>r.y};function pa(r){let t=r.split("."),e=[],i="";for(let C of t)i+=C,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function Vd(r){let t=pa(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function H3(r,t){return(Ca[t]||(Ca[t]=Vd(t)))(r)}function Q4(r){return r.charAt(0).toUpperCase()+r.slice(1)}var G3=r=>typeof r<"u",o0=r=>typeof r=="function",K6=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function pe(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var Q1=Math.PI,p2=2*Q1,ua=p2+Q1,q4=Number.POSITIVE_INFINITY,ma=Q1/180,f2=Q1/2,C3=Q1/4,le=Q1*2/3,a0=Math.log10,w5=Math.sign;function q3(r,t,e){return Math.abs(r-t)<e}function X6(r){let t=Math.round(r);r=q3(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(a0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function ue(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((C,a)=>C-a).pop(),t}function sd(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function Y3(r){return!sd(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function me(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function J6(r,t,e){let i,C,a;for(i=0,C=r.length;i<C;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function H0(r){return r*(Q1/180)}function K4(r){return r*(180/Q1)}function t8(r){if(!V2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function e8(r,t){let e=t.x-r.x,i=t.y-r.y,C=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*Q1&&(a+=p2),{angle:a,distance:C}}function Y4(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function ha(r,t){return(r-t+ua)%p2-Q1}function Z2(r){return(r%p2+p2)%p2}function X4(r,t,e,i){let C=Z2(r),a=Z2(t),H=Z2(e),V=Z2(a-C),s=Z2(H-C),M=Z2(C-a),p=Z2(C-H);return C===a||C===H||i&&a===H||V>s&&M<p}function O2(r,t,e){return Math.max(t,Math.min(e,r))}function he(r){return O2(r,-32768,32767)}function Q3(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function J4(r,t,e){e=e||(H=>r[H]<t);let i=r.length-1,C=0,a;for(;i-C>1;)a=C+i>>1,e(a)?C=a:i=a;return{lo:C,hi:i}}var k0=(r,t,e,i)=>J4(r,e,i?C=>{let a=r[C][t];return a<e||a===e&&r[C+1][t]===e}:C=>r[C][t]<e),fe=(r,t,e)=>J4(r,e,i=>r[i][t]>=e);function Ae(r,t,e){let i=0,C=r.length;for(;i<C&&r[i]<t;)i++;for(;C>i&&r[C-1]>e;)C--;return i>0||C<r.length?r.slice(i,C):r}var fa=["push","pop","shift","splice","unshift"];function ve(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),fa.forEach(e=>{let i="_onData"+Q4(e),C=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let H=C.apply(this,a);return r._chartjs.listeners.forEach(V=>{typeof V[i]=="function"&&V[i](...a)}),H}})})}function r8(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,C=i.indexOf(t);C!==-1&&i.splice(C,1),!(i.length>0)&&(fa.forEach(a=>{delete r[a]}),delete r._chartjs)}function i8(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var C8=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function o8(r,t){let e=[],i=!1;return function(...C){e=C,i||(i=!0,C8.call(window,()=>{i=!1,r.apply(t,e)}))}}function xe(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var ge=r=>r==="start"?"left":r==="end"?"right":"center",a8=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function _e(r,t,e){let i=t.length,C=0,a=i;if(r._sorted){let{iScale:H,vScale:V,_parsed:s}=r,M=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,p=H.axis,{min:h,max:v,minDefined:g,maxDefined:y}=H.getUserBounds();if(g){if(C=Math.min(k0(s,p,h).lo,e?i:k0(t,p,H.getPixelForValue(h)).lo),M){let O=s.slice(0,C+1).reverse().findIndex(k=>!b1(k[V.axis]));C-=Math.max(0,O)}C=O2(C,0,i-1)}if(y){let O=Math.max(k0(s,H.axis,v,!0).hi+1,e?0:k0(t,p,H.getPixelForValue(v),!0).hi+1);if(M){let k=s.slice(O-1).findIndex(P=>!b1(P[V.axis]));O+=Math.max(0,k)}a=O2(O,C,i)-C}else a=i-C}return{start:C,count:a}}function Se(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,C={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=C,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,C),a}var j6=r=>r===0||r===1,oa=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*p2/e)),aa=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*p2/e)+1,W3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*f2)+1,easeOutSine:r=>Math.sin(r*f2),easeInOutSine:r=>-.5*(Math.cos(Q1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>j6(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>j6(r)?r:oa(r,.075,.3),easeOutElastic:r=>j6(r)?r:aa(r,.075,.3),easeInOutElastic(r){return j6(r)?r:r<.5?.5*oa(r*2,.1125,.45):.5+.5*aa(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-W3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?W3.easeInBounce(r*2)*.5:W3.easeOutBounce(r*2-1)*.5+.5};function H8(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function n8(r){return H8(r)?r:new W4(r)}function Y6(r){return H8(r)?r:new W4(r).saturate(.5).darken(.1).hexString()}var Ld=["x","y","borderWidth","radius","tension"],ld=["color","borderColor","backgroundColor"];function Md(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:ld},numbers:{type:"number",properties:Ld}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function cd(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Ha=new Map;function dd(r,t){t=t||{};let e=r+JSON.stringify(t),i=Ha.get(e);return i||(i=new Intl.NumberFormat(r,t),Ha.set(e,i)),i}function t9(r,t,e){return dd(t,e).format(r)}var Aa={values(r){return r2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,C,a=r;if(e.length>1){let M=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(M<1e-4||M>1e15)&&(C="scientific"),a=pd(r,e)}let H=a0(Math.abs(a)),V=isNaN(H)?1:Math.max(Math.min(-1*Math.floor(H),20),0),s={notation:C,minimumFractionDigits:V,maximumFractionDigits:V};return Object.assign(s,this.options.ticks.format),t9(r,i,s)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(a0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Aa.numeric.call(this,r,t,e):""}};function pd(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var e9={formatters:Aa};function ud(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:e9.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var n3=Object.create(null),V8=Object.create(null);function j4(r,t){if(!t)return r;let e=t.split(".");for(let i=0,C=e.length;i<C;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function Le(r,t,e){return typeof t=="string"?M5(j4(r,t),e):M5(j4(r,""),t)}var Me=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,C)=>Y6(C.backgroundColor),this.hoverBorderColor=(i,C)=>Y6(C.borderColor),this.hoverColor=(i,C)=>Y6(C.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Le(this,t,e)}get(t){return j4(this,t)}describe(t,e){return Le(V8,t,e)}override(t,e){return Le(n3,t,e)}route(t,e,i,C){let a=j4(this,t),H=j4(this,i),V="_"+e;Object.defineProperties(a,{[V]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let s=this[V],M=H[C];return Z1(s)?Object.assign({},M,s):$1(s,M)},set(s){this[V]=s}}})}apply(t){t.forEach(e=>e(this))}},s2=new Me({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Md,cd,ud]);function va(r){return!r||b1(r.size)||b1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function D7(r,t,e,i,C){let a=t[C];return a||(a=t[C]=r.measureText(C).width,e.push(C)),a>i&&(i=a),i}function we(r,t,e,i){i=i||{};let C=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(C=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let H=0,V=e.length,s,M,p,h,v;for(s=0;s<V;s++)if(h=e[s],h!=null&&!r2(h))H=D7(r,C,a,H,h);else if(r2(h))for(M=0,p=h.length;M<p;M++)v=h[M],v!=null&&!r2(v)&&(H=D7(r,C,a,H,v));r.restore();let g=a.length/2;if(g>e.length){for(s=0;s<g;s++)delete C[a[s]];a.splice(0,g)}return H}function T0(r,t,e){let i=r.currentDevicePixelRatio,C=e!==0?Math.max(e/2,.5):0;return Math.round((t-C)*i)/i+C}function s8(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function r9(r,t,e,i){be(r,t,e,i,null)}function be(r,t,e,i,C){let a,H,V,s,M,p,h,v,g=t.pointStyle,y=t.rotation,O=t.radius,k=(y||0)*ma;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(k),r.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),r.restore();return}if(!(isNaN(O)||O<=0)){switch(r.beginPath(),g){default:C?r.ellipse(e,i,C/2,O,0,0,p2):r.arc(e,i,O,0,p2),r.closePath();break;case"triangle":p=C?C/2:O,r.moveTo(e+Math.sin(k)*p,i-Math.cos(k)*O),k+=le,r.lineTo(e+Math.sin(k)*p,i-Math.cos(k)*O),k+=le,r.lineTo(e+Math.sin(k)*p,i-Math.cos(k)*O),r.closePath();break;case"rectRounded":M=O*.516,s=O-M,H=Math.cos(k+C3)*s,h=Math.cos(k+C3)*(C?C/2-M:s),V=Math.sin(k+C3)*s,v=Math.sin(k+C3)*(C?C/2-M:s),r.arc(e-h,i-V,M,k-Q1,k-f2),r.arc(e+v,i-H,M,k-f2,k),r.arc(e+h,i+V,M,k,k+f2),r.arc(e-v,i+H,M,k+f2,k+Q1),r.closePath();break;case"rect":if(!y){s=Math.SQRT1_2*O,p=C?C/2:s,r.rect(e-p,i-s,2*p,2*s);break}k+=C3;case"rectRot":h=Math.cos(k)*(C?C/2:O),H=Math.cos(k)*O,V=Math.sin(k)*O,v=Math.sin(k)*(C?C/2:O),r.moveTo(e-h,i-V),r.lineTo(e+v,i-H),r.lineTo(e+h,i+V),r.lineTo(e-v,i+H),r.closePath();break;case"crossRot":k+=C3;case"cross":h=Math.cos(k)*(C?C/2:O),H=Math.cos(k)*O,V=Math.sin(k)*O,v=Math.sin(k)*(C?C/2:O),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H);break;case"star":h=Math.cos(k)*(C?C/2:O),H=Math.cos(k)*O,V=Math.sin(k)*O,v=Math.sin(k)*(C?C/2:O),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H),k+=C3,h=Math.cos(k)*(C?C/2:O),H=Math.cos(k)*O,V=Math.sin(k)*O,v=Math.sin(k)*(C?C/2:O),r.moveTo(e-h,i-V),r.lineTo(e+h,i+V),r.moveTo(e+v,i-H),r.lineTo(e-v,i+H);break;case"line":H=C?C/2:Math.cos(k)*O,V=Math.sin(k)*O,r.moveTo(e-H,i-V),r.lineTo(e+H,i+V);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(k)*(C?C/2:O),i+Math.sin(k)*O);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function D5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function i9(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function C9(r){r.restore()}function ye(r,t,e,i,C){if(!t)return r.lineTo(e.x,e.y);if(C==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else C==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function Ze(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function md(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),b1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function hd(r,t,e,i,C){if(C.strikethrough||C.underline){let a=r.measureText(i),H=t-a.actualBoundingBoxLeft,V=t+a.actualBoundingBoxRight,s=e-a.actualBoundingBoxAscent,M=e+a.actualBoundingBoxDescent,p=C.strikethrough?(s+M)/2:M;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=C.decorationWidth||2,r.moveTo(H,p),r.lineTo(V,p),r.stroke()}}function fd(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function z7(r,t,e,i,C,a={}){let H=r2(t)?t:[t],V=a.strokeWidth>0&&a.strokeColor!=="",s,M;for(r.save(),r.font=C.string,md(r,a),s=0;s<H.length;++s)M=H[s],a.backdrop&&fd(r,a.backdrop),V&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),b1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(M,e,i,a.maxWidth)),r.fillText(M,e,i,a.maxWidth),hd(r,e,i,M,a),i+=Number(C.lineHeight);r.restore()}function I7(r,t){let{x:e,y:i,w:C,h:a,radius:H}=t;r.arc(e+H.topLeft,i+H.topLeft,H.topLeft,1.5*Q1,Q1,!0),r.lineTo(e,i+a-H.bottomLeft),r.arc(e+H.bottomLeft,i+a-H.bottomLeft,H.bottomLeft,Q1,f2,!0),r.lineTo(e+C-H.bottomRight,i+a),r.arc(e+C-H.bottomRight,i+a-H.bottomRight,H.bottomRight,f2,0,!0),r.lineTo(e+C,i+H.topRight),r.arc(e+C-H.topRight,i+H.topRight,H.topRight,0,-f2,!0),r.lineTo(e+H.topLeft,i)}var Ad=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,vd=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function xa(r,t){let e=(""+r).match(Ad);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var xd=r=>+r||0;function o9(r,t){let e={},i=Z1(t),C=i?Object.keys(t):t,a=Z1(r)?i?H=>$1(r[H],r[t[H]]):H=>r[H]:()=>r;for(let H of C)e[H]=xd(a(H));return e}function L8(r){return o9(r,{top:"y",right:"x",bottom:"y",left:"x"})}function V3(r){return o9(r,["topLeft","topRight","bottomLeft","bottomRight"])}function B2(r){let t=L8(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function $2(r,t){r=r||{},t=t||s2.font;let e=$1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=$1(r.style,t.style);i&&!(""+i).match(vd)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let C={family:$1(r.family,t.family),lineHeight:xa($1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:$1(r.weight,t.weight),string:""};return C.string=va(C),C}function t2(r,t,e,i){let C=!0,a,H,V;for(a=0,H=r.length;a<H;++a)if(V=r[a],V!==void 0&&(t!==void 0&&typeof V=="function"&&(V=V(t),C=!1),e!==void 0&&r2(V)&&(V=V[e%V.length],C=!1),V!==void 0))return i&&!C&&(i.cacheable=!1),V}function Oe(r,t,e){let{min:i,max:C}=r,a=de(t,(C-i)/2),H=(V,s)=>e&&V===0?0:V+s;return{min:H(i,-Math.abs(a)),max:H(C,a)}}function n0(r,t){return Object.assign(Object.create(r),t)}function a9(r,t=[""],e,i,C=()=>r[0]){let a=e||r;typeof i>"u"&&(i=Sa("_fallback",r));let H={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:C,override:V=>a9([V,...r],t,a,i)};return new Proxy(H,{deleteProperty(V,s){return delete V[s],delete V._keys,delete r[0][s],!0},get(V,s){return ga(V,s,()=>Od(s,t,r,V))},getOwnPropertyDescriptor(V,s){return Reflect.getOwnPropertyDescriptor(V._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(V,s){return Va(V).includes(s)},ownKeys(V){return Va(V)},set(V,s,M){let p=V._storage||(V._storage=C());return V[s]=p[s]=M,delete V._keys,!0}})}function a3(r,t,e,i){let C={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:l8(r,i),setContext:a=>a3(r,a,e,i),override:a=>a3(r.override(a),t,e,i)};return new Proxy(C,{deleteProperty(a,H){return delete a[H],delete r[H],!0},get(a,H,V){return ga(a,H,()=>_d(a,H,V))},getOwnPropertyDescriptor(a,H){return a._descriptors.allKeys?Reflect.has(r,H)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,H)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,H){return Reflect.has(r,H)},ownKeys(){return Reflect.ownKeys(r)},set(a,H,V){return r[H]=V,delete a[H],!0}})}function l8(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:C=t.allKeys}=r;return{allKeys:C,scriptable:e,indexable:i,isScriptable:o0(e)?e:()=>e,isIndexable:o0(i)?i:()=>i}}var gd=(r,t)=>r?r+Q4(t):t,ke=(r,t)=>Z1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function ga(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function _d(r,t,e){let{_proxy:i,_context:C,_subProxy:a,_descriptors:H}=r,V=i[t];return o0(V)&&H.isScriptable(t)&&(V=Sd(t,V,r,e)),r2(V)&&V.length&&(V=wd(t,V,r,H.isIndexable)),ke(t,V)&&(V=a3(V,C,a&&a[t],H)),V}function Sd(r,t,e,i){let{_proxy:C,_context:a,_subProxy:H,_stack:V}=e;if(V.has(r))throw new Error("Recursion detected: "+Array.from(V).join("->")+"->"+r);V.add(r);let s=t(a,H||i);return V.delete(r),ke(r,s)&&(s=Te(C._scopes,C,r,s)),s}function wd(r,t,e,i){let{_proxy:C,_context:a,_subProxy:H,_descriptors:V}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(Z1(t[0])){let s=t,M=C._scopes.filter(p=>p!==s);t=[];for(let p of s){let h=Te(M,C,r,p);t.push(a3(h,a,H&&H[r],V))}}return t}function _a(r,t,e){return o0(r)?r(t,e):r}var bd=(r,t)=>r===!0?t:typeof r=="string"?H3(t,r):void 0;function yd(r,t,e,i,C){for(let a of t){let H=bd(e,a);if(H){r.add(H);let V=_a(H._fallback,e,C);if(typeof V<"u"&&V!==e&&V!==i)return V}else if(H===!1&&typeof i<"u"&&e!==i)return null}return!1}function Te(r,t,e,i){let C=t._rootScopes,a=_a(t._fallback,e,i),H=[...r,...C],V=new Set;V.add(i);let s=na(V,H,e,a||e,i);return s===null||typeof a<"u"&&a!==e&&(s=na(V,H,a,s,i),s===null)?!1:a9(Array.from(V),[""],C,a,()=>Zd(t,e,i))}function na(r,t,e,i,C){for(;e;)e=yd(r,t,e,i,C);return e}function Zd(r,t,e){let i=r._getTarget();t in i||(i[t]={});let C=i[t];return r2(C)&&Z1(e)?e:C||{}}function Od(r,t,e,i){let C;for(let a of t)if(C=Sa(gd(a,r),e),typeof C<"u")return ke(r,C)?Te(e,i,r,C):C}function Sa(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function Va(r){let t=r._keys;return t||(t=r._keys=kd(r._scopes)),t}function kd(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(C=>!C.startsWith("_")))t.add(i);return Array.from(t)}var Td=Number.EPSILON||1e-14,R7=(r,t)=>t<r.length&&!r[t].skip&&r[t],wa=r=>r==="x"?"y":"x";function ba(r,t,e,i){let C=r.skip?t:r,a=t,H=e.skip?t:e,V=Y4(a,C),s=Y4(H,a),M=V/(V+s),p=s/(V+s);M=isNaN(M)?0:M,p=isNaN(p)?0:p;let h=i*M,v=i*p;return{previous:{x:a.x-h*(H.x-C.x),y:a.y-h*(H.y-C.y)},next:{x:a.x+v*(H.x-C.x),y:a.y+v*(H.y-C.y)}}}function Pd(r,t,e){let i=r.length,C,a,H,V,s,M=R7(r,0);for(let p=0;p<i-1;++p)if(s=M,M=R7(r,p+1),!(!s||!M)){if(q3(t[p],0,Td)){e[p]=e[p+1]=0;continue}C=e[p]/t[p],a=e[p+1]/t[p],V=Math.pow(C,2)+Math.pow(a,2),!(V<=9)&&(H=3/Math.sqrt(V),e[p]=C*H*t[p],e[p+1]=a*H*t[p])}}function Ed(r,t,e="x"){let i=wa(e),C=r.length,a,H,V,s=R7(r,0);for(let M=0;M<C;++M){if(H=V,V=s,s=R7(r,M+1),!V)continue;let p=V[e],h=V[i];H&&(a=(p-H[e])/3,V[`cp1${e}`]=p-a,V[`cp1${i}`]=h-a*t[M]),s&&(a=(s[e]-p)/3,V[`cp2${e}`]=p+a,V[`cp2${i}`]=h+a*t[M])}}function ya(r,t="x"){let e=wa(t),i=r.length,C=Array(i).fill(0),a=Array(i),H,V,s,M=R7(r,0);for(H=0;H<i;++H)if(V=s,s=M,M=R7(r,H+1),!!s){if(M){let p=M[t]-s[t];C[H]=p!==0?(M[e]-s[e])/p:0}a[H]=V?M?w5(C[H-1])!==w5(C[H])?0:(C[H-1]+C[H])/2:C[H-1]:C[H]}Pd(r,C,a),Ed(r,a,t)}function G6(r,t,e){return Math.max(Math.min(r,e),t)}function Fd(r,t){let e,i,C,a,H,V=D5(r[0],t);for(e=0,i=r.length;e<i;++e)H=a,a=V,V=e<i-1&&D5(r[e+1],t),a&&(C=r[e],H&&(C.cp1x=G6(C.cp1x,t.left,t.right),C.cp1y=G6(C.cp1y,t.top,t.bottom)),V&&(C.cp2x=G6(C.cp2x,t.left,t.right),C.cp2y=G6(C.cp2y,t.top,t.bottom)))}function Pe(r,t,e,i,C){let a,H,V,s;if(t.spanGaps&&(r=r.filter(M=>!M.skip)),t.cubicInterpolationMode==="monotone")ya(r,C);else{let M=i?r[r.length-1]:r[0];for(a=0,H=r.length;a<H;++a)V=r[a],s=ba(M,V,r[Math.min(a+1,H-(i?0:1))%H],t.tension),V.cp1x=s.previous.x,V.cp1y=s.previous.y,V.cp2x=s.next.x,V.cp2y=s.next.y,M=V}t.capBezierPoints&&Fd(r,e)}function H9(){return typeof window<"u"&&typeof document<"u"}function n9(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Q6(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var M8=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function Za(r,t){return M8(r).getPropertyValue(t)}var $d=["top","right","bottom","left"];function U3(r,t,e){let i={};e=e?"-"+e:"";for(let C=0;C<4;C++){let a=$d[C];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var Dd=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function Rd(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:C,offsetY:a}=i,H=!1,V,s;if(Dd(C,a,r.target))V=C,s=a;else{let M=t.getBoundingClientRect();V=i.clientX-M.left,s=i.clientY-M.top,H=!0}return{x:V,y:s,box:H}}function B5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,C=M8(e),a=C.boxSizing==="border-box",H=U3(C,"padding"),V=U3(C,"border","width"),{x:s,y:M,box:p}=Rd(r,e),h=H.left+(p&&V.left),v=H.top+(p&&V.top),{width:g,height:y}=t;return a&&(g-=H.width+V.width,y-=H.height+V.height),{x:Math.round((s-h)/g*e.width/i),y:Math.round((M-v)/y*e.height/i)}}function Bd(r,t,e){let i,C;if(t===void 0||e===void 0){let a=r&&n9(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let H=a.getBoundingClientRect(),V=M8(a),s=U3(V,"border","width"),M=U3(V,"padding");t=H.width-M.width-s.width,e=H.height-M.height-s.height,i=Q6(V.maxWidth,a,"clientWidth"),C=Q6(V.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||q4,maxHeight:C||q4}}var o3=r=>Math.round(r*10)/10;function Ee(r,t,e,i){let C=M8(r),a=U3(C,"margin"),H=Q6(C.maxWidth,r,"clientWidth")||q4,V=Q6(C.maxHeight,r,"clientHeight")||q4,s=Bd(r,t,e),{width:M,height:p}=s;if(C.boxSizing==="content-box"){let v=U3(C,"border","width"),g=U3(C,"padding");M-=g.width+v.width,p-=g.height+v.height}return M=Math.max(0,M-a.width),p=Math.max(0,i?M/i:p-a.height),M=o3(Math.min(M,H,s.maxWidth)),p=o3(Math.min(p,V,s.maxHeight)),M&&!p&&(p=o3(M/2)),(t!==void 0||e!==void 0)&&i&&s.height&&p>s.height&&(p=s.height,M=o3(Math.floor(p*i))),{width:M,height:p}}function c8(r,t,e){let i=t||1,C=o3(r.height*i),a=o3(r.width*i);r.height=o3(r.height),r.width=o3(r.width);let H=r.canvas;return H.style&&(e||!H.style.height&&!H.style.width)&&(H.style.height=`${r.height}px`,H.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||H.height!==C||H.width!==a?(r.currentDevicePixelRatio=i,H.height=C,H.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var Fe=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};H9()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function d8(r,t){let e=Za(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function O0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function $e(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function De(r,t,e,i){let C={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},H=O0(r,C,e),V=O0(C,a,e),s=O0(a,t,e),M=O0(H,V,e),p=O0(V,s,e);return O0(M,p,e)}var zd=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},Id=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function V9(r,t,e){return r?zd(t,e):Id()}function Re(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function Be(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function Oa(r){return r==="angle"?{between:X4,compare:ha,normalize:Z2}:{between:Q3,compare:(t,e)=>t-e,normalize:t=>t}}function sa({start:r,end:t,count:e,loop:i,style:C}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:C}}function Nd(r,t,e){let{property:i,start:C,end:a}=e,{between:H,normalize:V}=Oa(i),s=t.length,{start:M,end:p,loop:h}=r,v,g;if(h){for(M+=s,p+=s,v=0,g=s;v<g&&H(V(t[M%s][i]),C,a);++v)M--,p--;M%=s,p%=s}return p<M&&(p+=s),{start:M,end:p,loop:h,style:r.style}}function p8(r,t,e){if(!e)return[r];let{property:i,start:C,end:a}=e,H=t.length,{compare:V,between:s,normalize:M}=Oa(i),{start:p,end:h,loop:v,style:g}=Nd(r,t,e),y=[],O=!1,k=null,P,$,D,K=()=>s(C,D,P)&&V(C,D)!==0,G=()=>V(a,P)===0||s(a,D,P),M1=()=>O||K(),J=()=>!O||G();for(let C1=p,r1=p;C1<=h;++C1)$=t[C1%H],!$.skip&&(P=M($[i]),P!==D&&(O=s(P,C,a),k===null&&M1()&&(k=V(P,C)===0?C1:r1),k!==null&&J()&&(y.push(sa({start:k,end:C1,loop:v,count:H,style:g})),k=null),r1=C1,D=P));return k!==null&&y.push(sa({start:k,end:h,loop:v,count:H,style:g})),y}function u8(r,t){let e=[],i=r.segments;for(let C=0;C<i.length;C++){let a=p8(i[C],r.points,t);a.length&&e.push(...a)}return e}function Wd(r,t,e,i){let C=0,a=t-1;if(e&&!i)for(;C<t&&!r[C].skip;)C++;for(;C<t&&r[C].skip;)C++;for(C%=t,e&&(a+=C);a>C&&r[a%t].skip;)a--;return a%=t,{start:C,end:a}}function Ud(r,t,e,i){let C=r.length,a=[],H=t,V=r[t],s;for(s=t+1;s<=e;++s){let M=r[s%C];M.skip||M.stop?V.skip||(i=!1,a.push({start:t%C,end:(s-1)%C,loop:i}),t=H=M.stop?s:null):(H=s,V.skip&&(t=s)),V=M}return H!==null&&a.push({start:t%C,end:H%C,loop:i}),a}function ze(r,t){let e=r.points,i=r.options.spanGaps,C=e.length;if(!C)return[];let a=!!r._loop,{start:H,end:V}=Wd(e,C,a,i);if(i===!0)return La(r,[{start:H,end:V,loop:a}],e,t);let s=V<H?V+C:V,M=!!r._fullLoop&&H===0&&V===C-1;return La(r,Ud(e,H,s,M),e,t)}function La(r,t,e,i){return!i||!i.setContext||!e?t:jd(r,t,e,i)}function jd(r,t,e,i){let C=r._chart.getContext(),a=la(r.options),{_datasetIndex:H,options:{spanGaps:V}}=r,s=e.length,M=[],p=a,h=t[0].start,v=h;function g(y,O,k,P){let $=V?-1:1;if(y!==O){for(y+=s;e[y%s].skip;)y-=$;for(;e[O%s].skip;)O+=$;y%s!==O%s&&(M.push({start:y%s,end:O%s,loop:k,style:P}),p=P,h=O%s)}}for(let y of t){h=V?h:y.start;let O=e[h%s],k;for(v=h+1;v<=y.end;v++){let P=e[v%s];k=la(i.setContext(n0(C,{type:"segment",p0:O,p1:P,p0DataIndex:(v-1)%s,p1DataIndex:v%s,datasetIndex:H}))),Gd(k,p)&&g(h,v-1,y.loop,p),O=P,p=k}h<v-1&&g(h,v-1,y.loop,p)}return M}function la(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function Gd(r,t){if(!t)return!1;let e=[],i=function(C,a){return H8(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function q6(r,t,e){return r.options.clip?r[e]:t[e]}function qd(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:q6(e,t,"left"),right:q6(e,t,"right"),top:q6(i,t,"top"),bottom:q6(i,t,"bottom")}:t}function m8(r,t){let e=t._clip;if(e.disabled)return!1;let i=qd(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var Je=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,C){let a=e.listeners[C],H=e.duration;a.forEach(V=>V({chart:t,initial:e.initial,numSteps:H,currentStep:Math.min(i-e.start,H)}))}_refresh(){this._request||(this._running=!0,this._request=C8.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,C)=>{if(!i.running||!i.items.length)return;let a=i.items,H=a.length-1,V=!1,s;for(;H>=0;--H)s=a[H],s._active?(s._total>i.duration&&(i.duration=s._total),s.tick(t),V=!0):(a[H]=a[a.length-1],a.pop());V&&(C.draw(),this._notify(C,i,t,"progress")),a.length||(i.running=!1,this._notify(C,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,C)=>Math.max(i,C._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,C=i.length-1;for(;C>=0;--C)i[C].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},P0=new Je,ka="transparent",Xd={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=n8(r||ka),C=i.valid&&n8(t||ka);return C&&C.valid?C.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},tr=class{constructor(t,e,i,C){let a=e[i];C=t2([t.to,C,a,t.from]);let H=t2([t.from,a,C]);this._active=!0,this._fn=t.fn||Xd[t.type||typeof H],this._easing=W3[t.easing]||W3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=H,this._to=C,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let C=this._target[this._prop],a=i-this._start,H=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(H,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=t2([t.to,e,C,t.from]),this._from=t2([t.from,C,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,C=this._prop,a=this._from,H=this._loop,V=this._to,s;if(this._active=a!==V&&(H||e<i),!this._active){this._target[C]=V,this._notify(!0);return}if(e<0){this._target[C]=a;return}s=e/i%2,s=H&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[C]=this._fn(a,V,s)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let C=0;C<i.length;C++)i[C][e]()}},y8=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Z1(t))return;let e=Object.keys(s2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(C=>{let a=t[C];if(!Z1(a))return;let H={};for(let V of e)H[V]=a[V];(r2(a.properties)&&a.properties||[C]).forEach(V=>{(V===C||!i.has(V))&&i.set(V,H)})})}_animateOptions(t,e){let i=e.options,C=tp(t,i);if(!C)return[];let a=this._createAnimations(C,i);return i.$shared&&Jd(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,C=[],a=t.$animations||(t.$animations={}),H=Object.keys(e),V=Date.now(),s;for(s=H.length-1;s>=0;--s){let M=H[s];if(M.charAt(0)==="$")continue;if(M==="options"){C.push(...this._animateOptions(t,e));continue}let p=e[M],h=a[M],v=i.get(M);if(h)if(v&&h.active()){h.update(v,p,V);continue}else h.cancel();if(!v||!v.duration){t[M]=p;continue}a[M]=h=new tr(v,t,M,p),C.push(h)}return C}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return P0.add(this._chart,i),!0}};function Jd(r,t){let e=[],i=Object.keys(t);for(let C=0;C<i.length;C++){let a=r[i[C]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function tp(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Ta(r,t){let e=r&&r.options||{},i=e.reverse,C=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:C,end:i?C:a}}function ep(r,t,e){if(e===!1)return!1;let i=Ta(r,e),C=Ta(t,e);return{top:C.end,right:i.end,bottom:C.start,left:i.start}}function rp(r){let t,e,i,C;return Z1(r)?(t=r.top,e=r.right,i=r.bottom,C=r.left):t=e=i=C=r,{top:t,right:e,bottom:i,left:C,disabled:r===!1}}function wH(r,t){let e=[],i=r._getSortedDatasetMetas(t),C,a;for(C=0,a=i.length;C<a;++C)e.push(i[C].index);return e}function Pa(r,t,e,i={}){let C=r.keys,a=i.mode==="single",H,V,s,M;if(t===null)return;let p=!1;for(H=0,V=C.length;H<V;++H){if(s=+C[H],s===e){if(p=!0,i.all)continue;break}M=r.values[s],V2(M)&&(a||t===0||w5(t)===w5(M))&&(t+=M)}return!p&&!i.all?0:t}function ip(r,t){let{iScale:e,vScale:i}=t,C=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",H=Object.keys(r),V=new Array(H.length),s,M,p;for(s=0,M=H.length;s<M;++s)p=H[s],V[s]={[C]:p,[a]:r[p]};return V}function Ie(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function Cp(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function op(r){let{min:t,max:e,minDefined:i,maxDefined:C}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:C?e:Number.POSITIVE_INFINITY}}function ap(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function Ea(r,t,e,i){for(let C of t.getMatchingVisibleMetas(i).reverse()){let a=r[C.index];if(e&&a>0||!e&&a<0)return C.index}return null}function Fa(r,t){let{chart:e,_cachedMeta:i}=r,C=e._stacks||(e._stacks={}),{iScale:a,vScale:H,index:V}=i,s=a.axis,M=H.axis,p=Cp(a,H,i),h=t.length,v;for(let g=0;g<h;++g){let y=t[g],{[s]:O,[M]:k}=y,P=y._stacks||(y._stacks={});v=P[M]=ap(C,p,O),v[V]=k,v._top=Ea(v,H,!0,i.type),v._bottom=Ea(v,H,!1,i.type);let $=v._visualValues||(v._visualValues={});$[V]=k}}function Ne(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function Hp(r,t){return n0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function np(r,t,e){return n0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function s9(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let C of t){let a=C._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var We=r=>r==="reset"||r==="none",$a=(r,t)=>t?r:Object.assign({},r),Vp=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:wH(e,!0),values:null},L3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ie(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&s9(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),C=(h,v,g,y)=>h==="x"?v:h==="r"?y:g,a=e.xAxisID=$1(i.xAxisID,Ne(t,"x")),H=e.yAxisID=$1(i.yAxisID,Ne(t,"y")),V=e.rAxisID=$1(i.rAxisID,Ne(t,"r")),s=e.indexAxis,M=e.iAxisID=C(s,a,H,V),p=e.vAxisID=C(s,H,a,V);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(H),e.rScale=this.getScaleForId(V),e.iScale=this.getScaleForId(M),e.vScale=this.getScaleForId(p)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&r8(this._data,this),t._stacked&&s9(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(Z1(e)){let C=this._cachedMeta;this._data=ip(e,C)}else if(i!==e){if(i){r8(i,this);let C=this._cachedMeta;s9(C),C._parsed=[]}e&&Object.isExtensible(e)&&ve(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),C=!1;this._dataCheck();let a=e._stacked;e._stacked=Ie(e.vScale,e),e.stack!==i.stack&&(C=!0,s9(e),e.stack=i.stack),this._resyncElements(t),(C||a!==e._stacked)&&(Fa(this,e._parsed),e._stacked=Ie(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:C}=this,{iScale:a,_stacked:H}=i,V=a.axis,s=t===0&&e===C.length?!0:i._sorted,M=t>0&&i._parsed[t-1],p,h,v;if(this._parsing===!1)i._parsed=C,i._sorted=!0,v=C;else{r2(C[t])?v=this.parseArrayData(i,C,t,e):Z1(C[t])?v=this.parseObjectData(i,C,t,e):v=this.parsePrimitiveData(i,C,t,e);let g=()=>h[V]===null||M&&h[V]<M[V];for(p=0;p<e;++p)i._parsed[p+t]=h=v[p],s&&(g()&&(s=!1),M=h);i._sorted=s}H&&Fa(this,v)}parsePrimitiveData(t,e,i,C){let{iScale:a,vScale:H}=t,V=a.axis,s=H.axis,M=a.getLabels(),p=a===H,h=new Array(C),v,g,y;for(v=0,g=C;v<g;++v)y=v+i,h[v]={[V]:p||a.parse(M[y],y),[s]:H.parse(e[y],y)};return h}parseArrayData(t,e,i,C){let{xScale:a,yScale:H}=t,V=new Array(C),s,M,p,h;for(s=0,M=C;s<M;++s)p=s+i,h=e[p],V[s]={x:a.parse(h[0],p),y:H.parse(h[1],p)};return V}parseObjectData(t,e,i,C){let{xScale:a,yScale:H}=t,{xAxisKey:V="x",yAxisKey:s="y"}=this._parsing,M=new Array(C),p,h,v,g;for(p=0,h=C;p<h;++p)v=p+i,g=e[v],M[p]={x:a.parse(H3(g,V),v),y:H.parse(H3(g,s),v)};return M}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let C=this.chart,a=this._cachedMeta,H=e[t.axis],V={keys:wH(C,!0),values:e._stacks[t.axis]._visualValues};return Pa(V,H,a.index,{mode:i})}updateRangeFromParsed(t,e,i,C){let a=i[e.axis],H=a===null?NaN:a,V=C&&i._stacks[e.axis];C&&V&&(C.values=V,H=Pa(C,a,this._cachedMeta.index)),t.min=Math.min(t.min,H),t.max=Math.max(t.max,H)}getMinMax(t,e){let i=this._cachedMeta,C=i._parsed,a=i._sorted&&t===i.iScale,H=C.length,V=this._getOtherScale(t),s=Vp(e,i,this.chart),M={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:p,max:h}=op(V),v,g;function y(){g=C[v];let O=g[V.axis];return!V2(g[t.axis])||p>O||h<O}for(v=0;v<H&&!(!y()&&(this.updateRangeFromParsed(M,t,g,s),a));++v);if(a){for(v=H-1;v>=0;--v)if(!y()){this.updateRangeFromParsed(M,t,g,s);break}}return M}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],C,a,H;for(C=0,a=e.length;C<a;++C)H=e[C][t.axis],V2(H)&&i.push(H);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,C=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:C?""+C.getLabelForValue(a[C.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=rp($1(this.options.clip,ep(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,C=i.data||[],a=e.chartArea,H=[],V=this._drawStart||0,s=this._drawCount||C.length-V,M=this.options.drawActiveElementsOnTop,p;for(i.dataset&&i.dataset.draw(t,a,V,s),p=V;p<V+s;++p){let h=C[p];h.hidden||(h.active&&M?H.push(h):h.draw(t,a))}for(p=0;p<H.length;++p)H[p].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let C=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let H=this._cachedMeta.data[t];a=H.$context||(H.$context=np(this.getContext(),t,H)),a.parsed=this.getParsed(t),a.raw=C.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Hp(this.chart.getContext(),this.index)),a.dataset=C,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let C=e==="active",a=this._cachedDataOpts,H=t+"-"+e,V=a[H],s=this.enableOptionSharing&&G3(i);if(V)return $a(V,s);let M=this.chart.config,p=M.datasetElementScopeKeys(this._type,t),h=C?[`${t}Hover`,"hover",t,""]:[t,""],v=M.getOptionScopes(this.getDataset(),p),g=Object.keys(s2.elements[t]),y=()=>this.getContext(i,C,e),O=M.resolveNamedOptions(v,g,y,h);return O.$shared&&(O.$shared=s,a[H]=Object.freeze($a(O,s))),O}_resolveAnimations(t,e,i){let C=this.chart,a=this._cachedDataOpts,H=`animation-${e}`,V=a[H];if(V)return V;let s;if(C.options.animation!==!1){let p=this.chart.config,h=p.datasetAnimationScopeKeys(this._type,e),v=p.getOptionScopes(this.getDataset(),h);s=p.createResolver(v,this.getContext(t,i,e))}let M=new y8(C,s&&s.animations);return s&&s._cacheable&&(a[H]=Object.freeze(M)),M}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||We(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),C=this._sharedOptions,a=this.getSharedOptions(i),H=this.includeOptions(e,a)||a!==C;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:H}}updateElement(t,e,i,C){We(C)?Object.assign(t,i):this._resolveAnimations(e,C).update(t,i)}updateSharedOptions(t,e,i){t&&!We(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,C){t.active=C;let a=this.getStyle(e,C);this._resolveAnimations(e,i,C).update(t,{options:!C&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[V,s,M]of this._syncList)this[V](s,M);this._syncList=[];let C=i.length,a=e.length,H=Math.min(a,C);H&&this.parse(0,H),a>C?this._insertElements(C,a-C,t):a<C&&this._removeElements(a,C-a)}_insertElements(t,e,i=!0){let C=this._cachedMeta,a=C.data,H=t+e,V,s=M=>{for(M.length+=e,V=M.length-1;V>=H;V--)M[V]=M[V-e]};for(s(a),V=t;V<H;++V)a[V]=new this.dataElementType;this._parsing&&s(C._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,C){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let C=i._parsed.splice(t,e);i._stacked&&s9(i,C)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,C]=t;this[e](i,C)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};I(L3,"defaults",{}),I(L3,"datasetElementType",null),I(L3,"dataElementType",null);function sp(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let C=0,a=e.length;C<a;C++)i=i.concat(e[C].controller.getAllParsedValues(r));r._cache.$bar=i8(i.sort((C,a)=>C-a))}return r._cache.$bar}function Lp(r){let t=r.iScale,e=sp(t,r.type),i=t._length,C,a,H,V,s=()=>{H===32767||H===-32768||(G3(V)&&(i=Math.min(i,Math.abs(H-V)||i)),V=H)};for(C=0,a=e.length;C<a;++C)H=t.getPixelForValue(e[C]),s();for(V=void 0,C=0,a=t.ticks.length;C<a;++C)H=t.getPixelForTick(C),s();return i}function lp(r,t,e,i){let C=e.barThickness,a,H;return b1(C)?(a=t.min*e.categoryPercentage,H=e.barPercentage):(a=C*i,H=1),{chunk:a/i,ratio:H,start:t.pixels[r]-a/2}}function Mp(r,t,e,i){let C=t.pixels,a=C[r],H=r>0?C[r-1]:null,V=r<C.length-1?C[r+1]:null,s=e.categoryPercentage;H===null&&(H=a-(V===null?t.end-t.start:V-a)),V===null&&(V=a+a-H);let M=a-(a-Math.min(H,V))/2*s;return{chunk:Math.abs(V-H)/2*s/i,ratio:e.barPercentage,start:M}}function cp(r,t,e,i){let C=e.parse(r[0],i),a=e.parse(r[1],i),H=Math.min(C,a),V=Math.max(C,a),s=H,M=V;Math.abs(H)>Math.abs(V)&&(s=V,M=H),t[e.axis]=M,t._custom={barStart:s,barEnd:M,start:C,end:a,min:H,max:V}}function bH(r,t,e,i){return r2(r)?cp(r,t,e,i):t[e.axis]=e.parse(r,i),t}function Da(r,t,e,i){let C=r.iScale,a=r.vScale,H=C.getLabels(),V=C===a,s=[],M,p,h,v;for(M=e,p=e+i;M<p;++M)v=t[M],h={},h[C.axis]=V||C.parse(H[M],M),s.push(bH(v,h,a,M));return s}function Ue(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function dp(r,t,e){return r!==0?w5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function pp(r){let t,e,i,C,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(C="end",a="start"):(C="start",a="end"),{start:e,end:i,reverse:t,top:C,bottom:a}}function up(r,t,e,i){let C=t.borderSkipped,a={};if(!C){r.borderSkipped=a;return}if(C===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:H,end:V,reverse:s,top:M,bottom:p}=pp(r);C==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?C=M:(e._bottom||0)===i?C=p:(a[Ra(p,H,V,s)]=!0,C=M)),a[Ra(C,H,V,s)]=!0,r.borderSkipped=a}function Ra(r,t,e,i){return i?(r=mp(r,t,e),r=Ba(r,e,t)):r=Ba(r,t,e),r}function mp(r,t,e){return r===t?e:r===e?t:r}function Ba(r,t,e){return r==="start"?t:r==="end"?e:r}function hp(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var F0=class extends L3{parsePrimitiveData(t,e,i,C){return Da(t,e,i,C)}parseArrayData(t,e,i,C){return Da(t,e,i,C)}parseObjectData(t,e,i,C){let{iScale:a,vScale:H}=t,{xAxisKey:V="x",yAxisKey:s="y"}=this._parsing,M=a.axis==="x"?V:s,p=H.axis==="x"?V:s,h=[],v,g,y,O;for(v=i,g=i+C;v<g;++v)O=e[v],y={},y[a.axis]=a.parse(H3(O,M),v),h.push(bH(H3(O,p),y,H,v));return h}updateRangeFromParsed(t,e,i,C){super.updateRangeFromParsed(t,e,i,C);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:C}=e,a=this.getParsed(t),H=a._custom,V=Ue(H)?"["+H.start+", "+H.end+"]":""+C.getLabelForValue(a[C.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:V}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,C){let a=C==="reset",{index:H,_cachedMeta:{vScale:V}}=this,s=V.getBasePixel(),M=V.isHorizontal(),p=this._getRuler(),{sharedOptions:h,includeOptions:v}=this._getSharedOptions(e,C);for(let g=e;g<e+i;g++){let y=this.getParsed(g),O=a||b1(y[V.axis])?{base:s,head:s}:this._calculateBarValuePixels(g),k=this._calculateBarIndexPixels(g,p),P=(y._stacks||{})[V.axis],$={horizontal:M,base:O.base,enableBorderRadius:!P||Ue(y._custom)||H===P._top||H===P._bottom,x:M?O.head:k.center,y:M?k.center:O.head,height:M?k.size:Math.abs(O.size),width:M?Math.abs(O.size):k.size};v&&($.options=h||this.resolveDataElementOptions(g,t[g].active?"active":C));let D=$.options||t[g].options;up($,D,P,H),hp($,D,p.ratio),this.updateElement(t[g],g,$,C)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,C=i.getMatchingVisibleMetas(this._type).filter(p=>p.controller.options.grouped),a=i.options.stacked,H=[],V=this._cachedMeta.controller.getParsed(e),s=V&&V[i.axis],M=p=>{let h=p._parsed.find(g=>g[i.axis]===s),v=h&&h[p.vScale.axis];if(b1(v)||isNaN(v))return!0};for(let p of C)if(!(e!==void 0&&M(p))&&((a===!1||H.indexOf(p.stack)===-1||a===void 0&&p.stack===void 0)&&H.push(p.stack),p.index===t))break;return H.length||H.push(void 0),H}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[$1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let C=this._getStacks(t,i),a=e!==void 0?C.indexOf(e):-1;return a===-1?C.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,C=[],a,H;for(a=0,H=e.data.length;a<H;++a)C.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let V=t.barThickness;return{min:V||Lp(e),pixels:C,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:V?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:C},options:{base:a,minBarLength:H}}=this,V=a||0,s=this.getParsed(t),M=s._custom,p=Ue(M),h=s[e.axis],v=0,g=i?this.applyStack(e,s,i):h,y,O;g!==h&&(v=g-h,g=h),p&&(h=M.barStart,g=M.barEnd-M.barStart,h!==0&&w5(h)!==w5(M.barEnd)&&(v=0),v+=h);let k=!b1(a)&&!p?a:v,P=e.getPixelForValue(k);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(v+g):y=P,O=y-P,Math.abs(O)<H){O=dp(O,e,V)*H,h===V&&(P-=O/2);let $=e.getPixelForDecimal(0),D=e.getPixelForDecimal(1),K=Math.min($,D),G=Math.max($,D);P=Math.max(Math.min(P,G),K),y=P+O,i&&!p&&(s._stacks[e.axis]._visualValues[C]=e.getValueForPixel(y)-e.getValueForPixel(P))}if(P===e.getPixelForValue(V)){let $=w5(O)*e.getLineWidthForValue(V)/2;P+=$,O-=$}return{size:O,base:P,head:y,center:y+O/2}}_calculateBarIndexPixels(t,e){let i=e.scale,C=this.options,a=C.skipNull,H=$1(C.maxBarThickness,1/0),V,s,M=this._getAxisCount();if(e.grouped){let p=a?this._getStackCount(t):e.stackCount,h=C.barThickness==="flex"?Mp(t,e,C,p*M):lp(t,e,C,p*M),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf($1(v,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;V=h.start+h.chunk*y+h.chunk/2,s=Math.min(H,h.chunk*h.ratio)}else V=i.getPixelForValue(this.getParsed(t)[i.axis],t),s=Math.min(H,e.min*e.ratio);return{base:V-s/2,head:V+s/2,center:V,size:s}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,C=i.length,a=0;for(;a<C;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};I(F0,"id","bar"),I(F0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),I(F0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var $0=class extends L3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:C=[],_dataset:a}=e,H=this.chart._animationsDisabled,{start:V,count:s}=_e(e,C,H);this._drawStart=V,this._drawCount=s,Se(e)&&(V=0,s=C.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=C;let M=this.resolveDatasetElementOptions(t);this.options.showLine||(M.borderWidth=0),M.segment=this.options.segment,this.updateElement(i,void 0,{animated:!H,options:M},t),this.updateElements(C,V,s,t)}updateElements(t,e,i,C){let a=C==="reset",{iScale:H,vScale:V,_stacked:s,_dataset:M}=this._cachedMeta,{sharedOptions:p,includeOptions:h}=this._getSharedOptions(e,C),v=H.axis,g=V.axis,{spanGaps:y,segment:O}=this.options,k=Y3(y)?y:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||a||C==="none",$=e+i,D=t.length,K=e>0&&this.getParsed(e-1);for(let G=0;G<D;++G){let M1=t[G],J=P?M1:{};if(G<e||G>=$){J.skip=!0;continue}let C1=this.getParsed(G),r1=b1(C1[g]),m1=J[v]=H.getPixelForValue(C1[v],G),I1=J[g]=a||r1?V.getBasePixel():V.getPixelForValue(s?this.applyStack(V,C1,s):C1[g],G);J.skip=isNaN(m1)||isNaN(I1)||r1,J.stop=G>0&&Math.abs(C1[v]-K[v])>k,O&&(J.parsed=C1,J.raw=M.data[G]),h&&(J.options=p||this.resolveDataElementOptions(G,M1.active?"active":C)),P||this.updateElement(M1,G,J,C),K=C1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,C=t.data||[];if(!C.length)return i;let a=C[0].size(this.resolveDataElementOptions(0)),H=C[C.length-1].size(this.resolveDataElementOptions(C.length-1));return Math.max(i,a,H)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};I($0,"id","line"),I($0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),I($0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function K3(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var er=class r{constructor(t){I(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return K3()}parse(){return K3()}format(){return K3()}add(){return K3()}diff(){return K3()}startOf(){return K3()}endOf(){return K3()}},fp={_date:er};function Ap(r,t,e,i){let{controller:C,data:a,_sorted:H}=r,V=C._cachedMeta.iScale,s=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(V&&t===V.axis&&t!=="r"&&H&&a.length){let M=V._reversePixels?fe:k0;if(i){if(C._sharedOptions){let p=a[0],h=typeof p.getRange=="function"&&p.getRange(t);if(h){let v=M(a,t,e-h),g=M(a,t,e+h);return{lo:v.lo,hi:g.hi}}}}else{let p=M(a,t,e);if(s){let{vScale:h}=C._cachedMeta,{_parsed:v}=r,g=v.slice(0,p.lo+1).reverse().findIndex(O=>!b1(O[h.axis]));p.lo-=Math.max(0,g);let y=v.slice(p.hi).findIndex(O=>!b1(O[h.axis]));p.hi+=Math.max(0,y)}return p}}return{lo:0,hi:a.length-1}}function f9(r,t,e,i,C){let a=r.getSortedVisibleDatasetMetas(),H=e[t];for(let V=0,s=a.length;V<s;++V){let{index:M,data:p}=a[V],{lo:h,hi:v}=Ap(a[V],t,H,C);for(let g=h;g<=v;++g){let y=p[g];y.skip||i(y,M,g)}}}function vp(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,C){let a=t?Math.abs(i.x-C.x):0,H=e?Math.abs(i.y-C.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(H,2))}}function je(r,t,e,i,C){let a=[];return!C&&!r.isPointInArea(t)||f9(r,e,t,function(V,s,M){!C&&!D5(V,r.chartArea,0)||V.inRange(t.x,t.y,i)&&a.push({element:V,datasetIndex:s,index:M})},!0),a}function xp(r,t,e,i){let C=[];function a(H,V,s){let{startAngle:M,endAngle:p}=H.getProps(["startAngle","endAngle"],i),{angle:h}=e8(H,{x:t.x,y:t.y});X4(h,M,p)&&C.push({element:H,datasetIndex:V,index:s})}return f9(r,e,t,a),C}function gp(r,t,e,i,C,a){let H=[],V=vp(e),s=Number.POSITIVE_INFINITY;function M(p,h,v){let g=p.inRange(t.x,t.y,C);if(i&&!g)return;let y=p.getCenterPoint(C);if(!(!!a||r.isPointInArea(y))&&!g)return;let k=V(t,y);k<s?(H=[{element:p,datasetIndex:h,index:v}],s=k):k===s&&H.push({element:p,datasetIndex:h,index:v})}return f9(r,e,t,M),H}function Ge(r,t,e,i,C,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?xp(r,t,e,C):gp(r,t,e,i,C,a)}function za(r,t,e,i,C){let a=[],H=e==="x"?"inXRange":"inYRange",V=!1;return f9(r,e,t,(s,M,p)=>{s[H]&&s[H](t[e],C)&&(a.push({element:s,datasetIndex:M,index:p}),V=V||s.inRange(t.x,t.y,C))}),i&&!V?[]:a}var _p={evaluateInteractionItems:f9,modes:{index(r,t,e,i){let C=B5(t,r),a=e.axis||"x",H=e.includeInvisible||!1,V=e.intersect?je(r,C,a,i,H):Ge(r,C,a,!1,i,H),s=[];return V.length?(r.getSortedVisibleDatasetMetas().forEach(M=>{let p=V[0].index,h=M.data[p];h&&!h.skip&&s.push({element:h,datasetIndex:M.index,index:p})}),s):[]},dataset(r,t,e,i){let C=B5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1,V=e.intersect?je(r,C,a,i,H):Ge(r,C,a,!1,i,H);if(V.length>0){let s=V[0].datasetIndex,M=r.getDatasetMeta(s).data;V=[];for(let p=0;p<M.length;++p)V.push({element:M[p],datasetIndex:s,index:p})}return V},point(r,t,e,i){let C=B5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1;return je(r,C,a,i,H)},nearest(r,t,e,i){let C=B5(t,r),a=e.axis||"xy",H=e.includeInvisible||!1;return Ge(r,C,a,e.intersect,i,H)},x(r,t,e,i){let C=B5(t,r);return za(r,C,"x",e.intersect,i)},y(r,t,e,i){let C=B5(t,r);return za(r,C,"y",e.intersect,i)}}},yH=["left","top","right","bottom"];function L9(r,t){return r.filter(e=>e.pos===t)}function Ia(r,t){return r.filter(e=>yH.indexOf(e.pos)===-1&&e.box.axis===t)}function l9(r,t){return r.sort((e,i)=>{let C=t?i:e,a=t?e:i;return C.weight===a.weight?C.index-a.index:C.weight-a.weight})}function Sp(r){let t=[],e,i,C,a,H,V;for(e=0,i=(r||[]).length;e<i;++e)C=r[e],{position:a,options:{stack:H,stackWeight:V=1}}=C,t.push({index:e,box:C,pos:a,horizontal:C.isHorizontal(),weight:C.weight,stack:H&&a+H,stackWeight:V});return t}function wp(r){let t={};for(let e of r){let{stack:i,pos:C,stackWeight:a}=e;if(!i||!yH.includes(C))continue;let H=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});H.count++,H.weight+=a}return t}function bp(r,t){let e=wp(r),{vBoxMaxWidth:i,hBoxMaxHeight:C}=t,a,H,V;for(a=0,H=r.length;a<H;++a){V=r[a];let{fullSize:s}=V.box,M=e[V.stack],p=M&&V.stackWeight/M.weight;V.horizontal?(V.width=p?p*i:s&&t.availableWidth,V.height=C):(V.width=i,V.height=p?p*C:s&&t.availableHeight)}return e}function yp(r){let t=Sp(r),e=l9(t.filter(M=>M.box.fullSize),!0),i=l9(L9(t,"left"),!0),C=l9(L9(t,"right")),a=l9(L9(t,"top"),!0),H=l9(L9(t,"bottom")),V=Ia(t,"x"),s=Ia(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:C.concat(s).concat(H).concat(V),chartArea:L9(t,"chartArea"),vertical:i.concat(C).concat(s),horizontal:a.concat(H).concat(V)}}function Na(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function ZH(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function Zp(r,t,e,i){let{pos:C,box:a}=e,H=r.maxPadding;if(!Z1(C)){e.size&&(r[C]-=e.size);let h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?a.height:a.width),e.size=h.size/h.count,r[C]+=e.size}a.getPadding&&ZH(H,a.getPadding());let V=Math.max(0,t.outerWidth-Na(H,r,"left","right")),s=Math.max(0,t.outerHeight-Na(H,r,"top","bottom")),M=V!==r.w,p=s!==r.h;return r.w=V,r.h=s,e.horizontal?{same:M,other:p}:{same:p,other:M}}function Op(r){let t=r.maxPadding;function e(i){let C=Math.max(t[i]-r[i],0);return r[i]+=C,C}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function kp(r,t){let e=t.maxPadding;function i(C){let a={left:0,top:0,right:0,bottom:0};return C.forEach(H=>{a[H]=Math.max(t[H],e[H])}),a}return i(r?["left","right"]:["top","bottom"])}function d9(r,t,e,i){let C=[],a,H,V,s,M,p;for(a=0,H=r.length,M=0;a<H;++a){V=r[a],s=V.box,s.update(V.width||t.w,V.height||t.h,kp(V.horizontal,t));let{same:h,other:v}=Zp(t,e,V,i);M|=h&&C.length,p=p||v,s.fullSize||C.push(V)}return M&&d9(C,t,e,i)||p}function h8(r,t,e,i,C){r.top=e,r.left=t,r.right=t+i,r.bottom=e+C,r.width=i,r.height=C}function Wa(r,t,e,i){let C=e.padding,{x:a,y:H}=t;for(let V of r){let s=V.box,M=i[V.stack]||{count:1,placed:0,weight:1},p=V.stackWeight/M.weight||1;if(V.horizontal){let h=t.w*p,v=M.size||s.height;G3(M.start)&&(H=M.start),s.fullSize?h8(s,C.left,H,e.outerWidth-C.right-C.left,v):h8(s,t.left+M.placed,H,h,v),M.start=H,M.placed+=h,H=s.bottom}else{let h=t.h*p,v=M.size||s.width;G3(M.start)&&(a=M.start),s.fullSize?h8(s,a,C.top,v,e.outerHeight-C.bottom-C.top):h8(s,a,t.top+M.placed,v,h),M.start=a,M.placed+=h,a=s.right}}t.x=a,t.y=H}var f8={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let C=B2(r.options.layout.padding),a=Math.max(t-C.width,0),H=Math.max(e-C.height,0),V=yp(r.boxes),s=V.vertical,M=V.horizontal;z1(r.boxes,O=>{typeof O.beforeLayout=="function"&&O.beforeLayout()});let p=s.reduce((O,k)=>k.box.options&&k.box.options.display===!1?O:O+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:C,availableWidth:a,availableHeight:H,vBoxMaxWidth:a/2/p,hBoxMaxHeight:H/2}),v=Object.assign({},C);ZH(v,B2(i));let g=Object.assign({maxPadding:v,w:a,h:H,x:C.left,y:C.top},C),y=bp(s.concat(M),h);d9(V.fullSize,g,h,y),d9(s,g,h,y),d9(M,g,h,y)&&d9(s,g,h,y),Op(g),Wa(V.leftAndTop,g,h,y),g.x+=g.w,g.y+=g.h,Wa(V.rightAndBottom,g,h,y),r.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},z1(V.chartArea,O=>{let k=O.box;Object.assign(k,r.chartArea),k.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}},Z8=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,C){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,C?Math.floor(e/C):i)}}isAttached(t){return!0}updateConfig(t){}},rr=class extends Z8{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},w8="$chartjs",Tp={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ua=r=>r===null||r==="";function Pp(r,t){let e=r.style,i=r.getAttribute("height"),C=r.getAttribute("width");if(r[w8]={initial:{height:i,width:C,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Ua(C)){let a=d8(r,"width");a!==void 0&&(r.width=a)}if(Ua(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=d8(r,"height");a!==void 0&&(r.height=a)}return r}var OH=Fe?{passive:!0}:!1;function Ep(r,t,e){r&&r.addEventListener(t,e,OH)}function Fp(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,OH)}function $p(r,t){let e=Tp[r.type]||r.type,{x:i,y:C}=B5(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:C!==void 0?C:null}}function O8(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function Dp(r,t,e){let i=r.canvas,C=new MutationObserver(a=>{let H=!1;for(let V of a)H=H||O8(V.addedNodes,i),H=H&&!O8(V.removedNodes,i);H&&e()});return C.observe(document,{childList:!0,subtree:!0}),C}function Rp(r,t,e){let i=r.canvas,C=new MutationObserver(a=>{let H=!1;for(let V of a)H=H||O8(V.removedNodes,i),H=H&&!O8(V.addedNodes,i);H&&e()});return C.observe(document,{childList:!0,subtree:!0}),C}var m9=new Map,ja=0;function kH(){let r=window.devicePixelRatio;r!==ja&&(ja=r,m9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function Bp(r,t){m9.size||window.addEventListener("resize",kH),m9.set(r,t)}function zp(r){m9.delete(r),m9.size||window.removeEventListener("resize",kH)}function Ip(r,t,e){let i=r.canvas,C=i&&n9(i);if(!C)return;let a=o8((V,s)=>{let M=C.clientWidth;e(V,s),M<C.clientWidth&&e()},window),H=new ResizeObserver(V=>{let s=V[0],M=s.contentRect.width,p=s.contentRect.height;M===0&&p===0||a(M,p)});return H.observe(C),Bp(r,a),H}function qe(r,t,e){e&&e.disconnect(),t==="resize"&&zp(r)}function Np(r,t,e){let i=r.canvas,C=o8(a=>{r.ctx!==null&&e($p(a,r))},r);return Ep(i,t,C),C}var ir=class extends Z8{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(Pp(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[w8])return!1;let i=e[w8].initial;["height","width"].forEach(a=>{let H=i[a];b1(H)?e.removeAttribute(a):e.setAttribute(a,H)});let C=i.style||{};return Object.keys(C).forEach(a=>{e.style[a]=C[a]}),e.width=e.width,delete e[w8],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let C=t.$proxies||(t.$proxies={}),H={attach:Dp,detach:Rp,resize:Ip}[e]||Np;C[e]=H(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),C=i[e];if(!C)return;({attach:qe,detach:qe,resize:qe}[e]||Fp)(t,e,C),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,C){return Ee(t,e,i,C)}isAttached(t){let e=t&&n9(t);return!!(e&&e.isConnected)}};function Wp(r){return!H9()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?rr:ir}var N5=class{constructor(){I(this,"x");I(this,"y");I(this,"active",!1);I(this,"options");I(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Y3(this.x)&&Y3(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let C={};return t.forEach(a=>{C[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),C}};I(N5,"defaults",{}),I(N5,"defaultRoutes");function Up(r,t){let e=r.options.ticks,i=jp(r),C=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?qp(t):[],H=a.length,V=a[0],s=a[H-1],M=[];if(H>C)return Yp(t,M,a,H/C),M;let p=Gp(a,t,C);if(H>0){let h,v,g=H>1?Math.round((s-V)/(H-1)):null;for(A8(t,M,p,b1(g)?0:V-g,V),h=0,v=H-1;h<v;h++)A8(t,M,p,a[h],a[h+1]);return A8(t,M,p,s,b1(g)?t.length:s+g),M}return A8(t,M,p),M}function jp(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),C=r._maxLength/e;return Math.floor(Math.min(i,C))}function Gp(r,t,e){let i=Qp(r),C=t.length/e;if(!i)return Math.max(C,1);let a=ue(i);for(let H=0,V=a.length-1;H<V;H++){let s=a[H];if(s>C)return s}return Math.max(C,1)}function qp(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function Yp(r,t,e,i){let C=0,a=e[0],H;for(i=Math.ceil(i),H=0;H<r.length;H++)H===a&&(t.push(r[H]),C++,a=e[C*i])}function A8(r,t,e,i,C){let a=$1(i,0),H=Math.min($1(C,r.length),r.length),V=0,s,M,p;for(e=Math.ceil(e),C&&(s=C-i,e=s/Math.floor(s/e)),p=a;p<0;)V++,p=Math.round(a+V*e);for(M=Math.max(a,0);M<H;M++)M===p&&(t.push(r[M]),V++,p=Math.round(a+V*e))}function Qp(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var Kp=r=>r==="left"?"right":r==="right"?"left":r,Ga=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,qa=(r,t)=>Math.min(t||r,r);function Ya(r,t){let e=[],i=r.length/t,C=r.length,a=0;for(;a<C;a+=i)e.push(r[Math.floor(a)]);return e}function Xp(r,t,e){let i=r.ticks.length,C=Math.min(t,i-1),a=r._startPixel,H=r._endPixel,V=1e-6,s=r.getPixelForTick(C),M;if(!(e&&(i===1?M=Math.max(s-a,H-s):t===0?M=(r.getPixelForTick(1)-s)/2:M=(s-r.getPixelForTick(C-1))/2,s+=C<t?M:-M,s<a-V||s>H+V)))return s}function Jp(r,t){z1(r,e=>{let i=e.gc,C=i.length/2,a;if(C>t){for(a=0;a<C;++a)delete e.data[i[a]];i.splice(0,C)}})}function M9(r){return r.drawTicks?r.tickLength:0}function Qa(r,t){if(!r.display)return 0;let e=$2(r.font,t),i=B2(r.padding);return(r2(r.text)?r.text.length:1)*e.lineHeight+i.height}function tu(r,t){return n0(r,{scale:t,type:"scale"})}function eu(r,t,e){return n0(r,{tick:e,index:t,type:"tick"})}function ru(r,t,e){let i=ge(r);return(e&&t!=="right"||!e&&t==="right")&&(i=Kp(i)),i}function iu(r,t,e,i){let{top:C,left:a,bottom:H,right:V,chart:s}=r,{chartArea:M,scales:p}=s,h=0,v,g,y,O=H-C,k=V-a;if(r.isHorizontal()){if(g=a8(i,a,V),Z1(e)){let P=Object.keys(e)[0],$=e[P];y=p[P].getPixelForValue($)+O-t}else e==="center"?y=(M.bottom+M.top)/2+O-t:y=Ga(r,e,t);v=V-a}else{if(Z1(e)){let P=Object.keys(e)[0],$=e[P];g=p[P].getPixelForValue($)-k+t}else e==="center"?g=(M.left+M.right)/2-k+t:g=Ga(r,e,t);y=a8(i,H,C),h=e==="left"?-f2:f2}return{titleX:g,titleY:y,maxWidth:v,rotation:h}}var J3=class r extends N5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:C}=this;return t=Q2(t,Number.POSITIVE_INFINITY),e=Q2(e,Number.NEGATIVE_INFINITY),i=Q2(i,Number.POSITIVE_INFINITY),C=Q2(C,Number.NEGATIVE_INFINITY),{min:Q2(t,i),max:Q2(e,C),minDefined:V2(t),maxDefined:V2(e)}}getMinMax(t){let{min:e,max:i,minDefined:C,maxDefined:a}=this.getUserBounds(),H;if(C&&a)return{min:e,max:i};let V=this.getMatchingVisibleMetas();for(let s=0,M=V.length;s<M;++s)H=V[s].controller.getMinMax(this,t),C||(e=Math.min(e,H.min)),a||(i=Math.max(i,H.max));return e=a&&e>i?i:e,i=C&&e>i?e:i,{min:Q2(e,Q2(i,e)),max:Q2(i,Q2(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){J1(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:C,grace:a,ticks:H}=this.options,V=H.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Oe(this,a,C),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=V<this.ticks.length;this._convertTicksToLabels(s?Ya(this.ticks,V):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),H.display&&(H.autoSkip||H.source==="auto")&&(this.ticks=Up(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){J1(this.options.afterUpdate,[this])}beforeSetDimensions(){J1(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){J1(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),J1(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){J1(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,C,a;for(i=0,C=t.length;i<C;i++)a=t[i],a.label=J1(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){J1(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){J1(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=qa(this.ticks.length,t.ticks.maxTicksLimit),C=e.minRotation||0,a=e.maxRotation,H=C,V,s,M;if(!this._isVisible()||!e.display||C>=a||i<=1||!this.isHorizontal()){this.labelRotation=C;return}let p=this._getLabelSizes(),h=p.widest.width,v=p.highest.height,g=O2(this.chart.width-h,0,this.maxWidth);V=t.offset?this.maxWidth/i:g/(i-1),h+6>V&&(V=g/(i-(t.offset?.5:1)),s=this.maxHeight-M9(t.grid)-e.padding-Qa(t.title,this.chart.options.font),M=Math.sqrt(h*h+v*v),H=K4(Math.min(Math.asin(O2((p.highest.height+6)/V,-1,1)),Math.asin(O2(s/M,-1,1))-Math.asin(O2(v/M,-1,1)))),H=Math.max(C,Math.min(a,H))),this.labelRotation=H}afterCalculateLabelRotation(){J1(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){J1(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:C,grid:a}}=this,H=this._isVisible(),V=this.isHorizontal();if(H){let s=Qa(C,e.options.font);if(V?(t.width=this.maxWidth,t.height=M9(a)+s):(t.height=this.maxHeight,t.width=M9(a)+s),i.display&&this.ticks.length){let{first:M,last:p,widest:h,highest:v}=this._getLabelSizes(),g=i.padding*2,y=H0(this.labelRotation),O=Math.cos(y),k=Math.sin(y);if(V){let P=i.mirror?0:k*h.width+O*v.height;t.height=Math.min(this.maxHeight,t.height+P+g)}else{let P=i.mirror?0:O*h.width+k*v.height;t.width=Math.min(this.maxWidth,t.width+P+g)}this._calculatePadding(M,p,k,O)}}this._handleMargins(),V?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,C){let{ticks:{align:a,padding:H},position:V}=this.options,s=this.labelRotation!==0,M=V!=="top"&&this.axis==="x";if(this.isHorizontal()){let p=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),v=0,g=0;s?M?(v=C*t.width,g=i*e.height):(v=i*t.height,g=C*e.width):a==="start"?g=e.width:a==="end"?v=t.width:a!=="inner"&&(v=t.width/2,g=e.width/2),this.paddingLeft=Math.max((v-p+H)*this.width/(this.width-p),0),this.paddingRight=Math.max((g-h+H)*this.width/(this.width-h),0)}else{let p=e.height/2,h=t.height/2;a==="start"?(p=0,h=t.height):a==="end"&&(p=e.height,h=0),this.paddingTop=p+H,this.paddingBottom=h+H}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){J1(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)b1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=Ya(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:C,_longestTextCache:a}=this,H=[],V=[],s=Math.floor(e/qa(e,i)),M=0,p=0,h,v,g,y,O,k,P,$,D,K,G;for(h=0;h<e;h+=s){if(y=t[h].label,O=this._resolveTickFontOptions(h),C.font=k=O.string,P=a[k]=a[k]||{data:{},gc:[]},$=O.lineHeight,D=K=0,!b1(y)&&!r2(y))D=D7(C,P.data,P.gc,D,y),K=$;else if(r2(y))for(v=0,g=y.length;v<g;++v)G=y[v],!b1(G)&&!r2(G)&&(D=D7(C,P.data,P.gc,D,G),K+=$);H.push(D),V.push(K),M=Math.max(D,M),p=Math.max(K,p)}Jp(a,e);let M1=H.indexOf(M),J=V.indexOf(p),C1=r1=>({width:H[r1]||0,height:V[r1]||0});return{first:C1(0),last:C1(e-1),widest:C1(M1),highest:C1(J),widths:H,heights:V}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return he(this._alignToPixels?T0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=eu(this.getContext(),t,i))}return this.$context||(this.$context=tu(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=H0(this.labelRotation),i=Math.abs(Math.cos(e)),C=Math.abs(Math.sin(e)),a=this._getLabelSizes(),H=t.autoSkipPadding||0,V=a?a.widest.width+H:0,s=a?a.highest.height+H:0;return this.isHorizontal()?s*i>V*C?V/i:s/C:s*C<V*i?s/i:V/C}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,C=this.options,{grid:a,position:H,border:V}=C,s=a.offset,M=this.isHorizontal(),h=this.ticks.length+(s?1:0),v=M9(a),g=[],y=V.setContext(this.getContext()),O=y.display?y.width:0,k=O/2,P=function(X){return T0(i,X,O)},$,D,K,G,M1,J,C1,r1,m1,I1,O1,L2;if(H==="top")$=P(this.bottom),J=this.bottom-v,r1=$-k,I1=P(t.top)+k,L2=t.bottom;else if(H==="bottom")$=P(this.top),I1=t.top,L2=P(t.bottom)-k,J=$+k,r1=this.top+v;else if(H==="left")$=P(this.right),M1=this.right-v,C1=$-k,m1=P(t.left)+k,O1=t.right;else if(H==="right")$=P(this.left),m1=t.left,O1=P(t.right)-k,M1=$+k,C1=this.left+v;else if(e==="x"){if(H==="center")$=P((t.top+t.bottom)/2+.5);else if(Z1(H)){let X=Object.keys(H)[0],Y1=H[X];$=P(this.chart.scales[X].getPixelForValue(Y1))}I1=t.top,L2=t.bottom,J=$+k,r1=J+v}else if(e==="y"){if(H==="center")$=P((t.left+t.right)/2);else if(Z1(H)){let X=Object.keys(H)[0],Y1=H[X];$=P(this.chart.scales[X].getPixelForValue(Y1))}M1=$-k,C1=M1-v,m1=t.left,O1=t.right}let q1=$1(C.ticks.maxTicksLimit,h),k1=Math.max(1,Math.ceil(h/q1));for(D=0;D<h;D+=k1){let X=this.getContext(D),Y1=a.setContext(X),H1=V.setContext(X),U=Y1.lineWidth,t1=Y1.color,n1=H1.dash||[],h1=H1.dashOffset,V1=Y1.tickWidth,s1=Y1.tickColor,S1=Y1.tickBorderDash||[],T1=Y1.tickBorderDashOffset;K=Xp(this,D,s),K!==void 0&&(G=T0(i,K,U),M?M1=C1=m1=O1=G:J=r1=I1=L2=G,g.push({tx1:M1,ty1:J,tx2:C1,ty2:r1,x1:m1,y1:I1,x2:O1,y2:L2,width:U,color:t1,borderDash:n1,borderDashOffset:h1,tickWidth:V1,tickColor:s1,tickBorderDash:S1,tickBorderDashOffset:T1}))}return this._ticksLength=h,this._borderValue=$,g}_computeLabelItems(t){let e=this.axis,i=this.options,{position:C,ticks:a}=i,H=this.isHorizontal(),V=this.ticks,{align:s,crossAlign:M,padding:p,mirror:h}=a,v=M9(i.grid),g=v+p,y=h?-p:g,O=-H0(this.labelRotation),k=[],P,$,D,K,G,M1,J,C1,r1,m1,I1,O1,L2="middle";if(C==="top")M1=this.bottom-y,J=this._getXAxisLabelAlignment();else if(C==="bottom")M1=this.top+y,J=this._getXAxisLabelAlignment();else if(C==="left"){let k1=this._getYAxisLabelAlignment(v);J=k1.textAlign,G=k1.x}else if(C==="right"){let k1=this._getYAxisLabelAlignment(v);J=k1.textAlign,G=k1.x}else if(e==="x"){if(C==="center")M1=(t.top+t.bottom)/2+g;else if(Z1(C)){let k1=Object.keys(C)[0],X=C[k1];M1=this.chart.scales[k1].getPixelForValue(X)+g}J=this._getXAxisLabelAlignment()}else if(e==="y"){if(C==="center")G=(t.left+t.right)/2-g;else if(Z1(C)){let k1=Object.keys(C)[0],X=C[k1];G=this.chart.scales[k1].getPixelForValue(X)}J=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(s==="start"?L2="top":s==="end"&&(L2="bottom"));let q1=this._getLabelSizes();for(P=0,$=V.length;P<$;++P){D=V[P],K=D.label;let k1=a.setContext(this.getContext(P));C1=this.getPixelForTick(P)+a.labelOffset,r1=this._resolveTickFontOptions(P),m1=r1.lineHeight,I1=r2(K)?K.length:1;let X=I1/2,Y1=k1.color,H1=k1.textStrokeColor,U=k1.textStrokeWidth,t1=J;H?(G=C1,J==="inner"&&(P===$-1?t1=this.options.reverse?"left":"right":P===0?t1=this.options.reverse?"right":"left":t1="center"),C==="top"?M==="near"||O!==0?O1=-I1*m1+m1/2:M==="center"?O1=-q1.highest.height/2-X*m1+m1:O1=-q1.highest.height+m1/2:M==="near"||O!==0?O1=m1/2:M==="center"?O1=q1.highest.height/2-X*m1:O1=q1.highest.height-I1*m1,h&&(O1*=-1),O!==0&&!k1.showLabelBackdrop&&(G+=m1/2*Math.sin(O))):(M1=C1,O1=(1-I1)*m1/2);let n1;if(k1.showLabelBackdrop){let h1=B2(k1.backdropPadding),V1=q1.heights[P],s1=q1.widths[P],S1=O1-h1.top,T1=0-h1.left;switch(L2){case"middle":S1-=V1/2;break;case"bottom":S1-=V1;break}switch(J){case"center":T1-=s1/2;break;case"right":T1-=s1;break;case"inner":P===$-1?T1-=s1:P>0&&(T1-=s1/2);break}n1={left:T1,top:S1,width:s1+h1.width,height:V1+h1.height,color:k1.backdropColor}}k.push({label:K,font:r1,textOffset:O1,options:{rotation:O,color:Y1,strokeColor:H1,strokeWidth:U,textAlign:t1,textBaseline:L2,translation:[G,M1],backdrop:n1}})}return k}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-H0(this.labelRotation))return t==="top"?"left":"right";let C="center";return e.align==="start"?C="left":e.align==="end"?C="right":e.align==="inner"&&(C="inner"),C}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:C,padding:a}}=this.options,H=this._getLabelSizes(),V=t+a,s=H.widest.width,M,p;return e==="left"?C?(p=this.right+a,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p+=s)):(p=this.right-V,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p=this.left)):e==="right"?C?(p=this.left+a,i==="near"?M="right":i==="center"?(M="center",p-=s/2):(M="left",p-=s)):(p=this.left+V,i==="near"?M="left":i==="center"?(M="center",p+=s/2):(M="right",p=this.right)):M="right",{textAlign:M,x:p}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:C,width:a,height:H}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,C,a,H),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let C=this.ticks.findIndex(a=>a.value===t);return C>=0?e.setContext(this.getContext(C)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,C=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,H,V=(s,M,p)=>{!p.width||!p.color||(i.save(),i.lineWidth=p.width,i.strokeStyle=p.color,i.setLineDash(p.borderDash||[]),i.lineDashOffset=p.borderDashOffset,i.beginPath(),i.moveTo(s.x,s.y),i.lineTo(M.x,M.y),i.stroke(),i.restore())};if(e.display)for(a=0,H=C.length;a<H;++a){let s=C[a];e.drawOnChartArea&&V({x:s.x1,y:s.y1},{x:s.x2,y:s.y2},s),e.drawTicks&&V({x:s.tx1,y:s.ty1},{x:s.tx2,y:s.ty2},{color:s.tickColor,width:s.tickWidth,borderDash:s.tickBorderDash,borderDashOffset:s.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:C}}=this,a=i.setContext(this.getContext()),H=i.display?a.width:0;if(!H)return;let V=C.setContext(this.getContext(0)).lineWidth,s=this._borderValue,M,p,h,v;this.isHorizontal()?(M=T0(t,this.left,H)-H/2,p=T0(t,this.right,V)+V/2,h=v=s):(h=T0(t,this.top,H)-H/2,v=T0(t,this.bottom,V)+V/2,M=p=s),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(M,h),e.lineTo(p,v),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,C=this._computeLabelArea();C&&i9(i,C);let a=this.getLabelItems(t);for(let H of a){let V=H.options,s=H.font,M=H.label,p=H.textOffset;z7(i,M,0,p,s,V)}C&&C9(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:C}}=this;if(!i.display)return;let a=$2(i.font),H=B2(i.padding),V=i.align,s=a.lineHeight/2;e==="bottom"||e==="center"||Z1(e)?(s+=H.bottom,r2(i.text)&&(s+=a.lineHeight*(i.text.length-1))):s+=H.top;let{titleX:M,titleY:p,maxWidth:h,rotation:v}=iu(this,s,e,V);z7(t,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:v,textAlign:ru(V,e,C),textBaseline:"middle",translation:[M,p]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=$1(t.grid&&t.grid.z,-1),C=$1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:C,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",C=[],a,H;for(a=0,H=e.length;a<H;++a){let V=e[a];V[i]===this.id&&(!t||V.type===t)&&C.push(V)}return C}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return $2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},U7=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;au(e)&&(i=this.register(e));let C=this.items,a=t.id,H=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in C||(C[a]=t,Cu(t,H,i),this.override&&s2.override(t.id,t.overrides)),H}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,C=this.scope;i in e&&delete e[i],C&&i in s2[C]&&(delete s2[C][i],this.override&&delete n3[i])}};function Cu(r,t,e){let i=M5(Object.create(null),[e?s2.get(e):{},s2.get(t),r.defaults]);s2.set(t,i),r.defaultRoutes&&ou(t,r.defaultRoutes),r.descriptors&&s2.describe(t,r.descriptors)}function ou(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),C=i.pop(),a=[r].concat(i).join("."),H=t[e].split("."),V=H.pop(),s=H.join(".");s2.route(a,C,s,V)})}function au(r){return"id"in r&&"defaults"in r}var Cr=class{constructor(){this.controllers=new U7(L3,"datasets",!0),this.elements=new U7(N5,"elements"),this.plugins=new U7(Object,"plugins"),this.scales=new U7(J3,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(C=>{let a=i||this._getRegistryForType(C);i||a.isForType(C)||a===this.plugins&&C.id?this._exec(t,a,C):z1(C,H=>{let V=i||this._getRegistryForType(H);this._exec(t,V,H)})})}_exec(t,e,i){let C=Q4(t);J1(i["before"+C],[],i),e[t](i),J1(i["after"+C],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let C=e.get(t);if(C===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return C}},s0=new Cr,or=class{constructor(){this._init=void 0}notify(t,e,i,C){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=C?this._descriptors(t).filter(C):this._descriptors(t),H=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),H}_notify(t,e,i,C){C=C||{};for(let a of t){let H=a.plugin,V=H[i],s=[e,C,a.options];if(J1(V,s,H)===!1&&C.cancelable)return!1}return!0}invalidate(){b1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,C=$1(i.options&&i.options.plugins,{}),a=Hu(i);return C===!1&&!e?[]:Vu(t,a,C,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,C=(a,H)=>a.filter(V=>!H.some(s=>V.plugin.id===s.plugin.id));this._notify(C(e,i),t,"stop"),this._notify(C(i,e),t,"start")}};function Hu(r){let t={},e=[],i=Object.keys(s0.plugins.items);for(let a=0;a<i.length;a++)e.push(s0.getPlugin(i[a]));let C=r.plugins||[];for(let a=0;a<C.length;a++){let H=C[a];e.indexOf(H)===-1&&(e.push(H),t[H.id]=!0)}return{plugins:e,localIds:t}}function nu(r,t){return!t&&r===!1?null:r===!0?{}:r}function Vu(r,{plugins:t,localIds:e},i,C){let a=[],H=r.getContext();for(let V of t){let s=V.id,M=nu(i[s],C);M!==null&&a.push({plugin:V,options:su(r.config,{plugin:V,local:e[s]},M,H)})}return a}function su(r,{plugin:t,local:e},i,C){let a=r.pluginScopeKeys(t),H=r.getOptionScopes(i,a);return e&&t.defaults&&H.push(t.defaults),r.createResolver(H,C,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ar(r,t){let e=s2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Lu(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function lu(r,t){return r===t?"_index_":"_value_"}function Ka(r){if(r==="x"||r==="y"||r==="r")return r}function Mu(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function Hr(r,...t){if(Ka(r))return r;for(let e of t){let i=e.axis||Mu(e.position)||r.length>1&&Ka(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function Xa(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function cu(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return Xa(r,"x",e[0])||Xa(r,"y",e[0])}return{}}function du(r,t){let e=n3[r.type]||{scales:{}},i=t.scales||{},C=ar(r.type,t),a=Object.create(null);return Object.keys(i).forEach(H=>{let V=i[H];if(!Z1(V))return console.error(`Invalid scale configuration for scale: ${H}`);if(V._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${H}`);let s=Hr(H,V,cu(H,r),s2.scales[V.type]),M=lu(s,C),p=e.scales||{};a[H]=j3(Object.create(null),[{axis:s},V,p[s],p[M]])}),r.data.datasets.forEach(H=>{let V=H.type||r.type,s=H.indexAxis||ar(V,t),p=(n3[V]||{}).scales||{};Object.keys(p).forEach(h=>{let v=Lu(h,s),g=H[v+"AxisID"]||v;a[g]=a[g]||Object.create(null),j3(a[g],[{axis:v},i[g],p[h]])})}),Object.keys(a).forEach(H=>{let V=a[H];j3(V,[s2.scales[V.type],s2.scale])}),a}function TH(r){let t=r.options||(r.options={});t.plugins=$1(t.plugins,{}),t.scales=du(r,t)}function PH(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function pu(r){return r=r||{},r.data=PH(r.data),TH(r),r}var Ja=new Map,EH=new Set;function v8(r,t){let e=Ja.get(r);return e||(e=t(),Ja.set(r,e),EH.add(e)),e}var c9=(r,t,e)=>{let i=H3(t,e);i!==void 0&&r.add(i)},nr=class{constructor(t){this._config=pu(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=PH(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),TH(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return v8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return v8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return v8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return v8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,C=i.get(t);return(!C||e)&&(C=new Map,i.set(t,C)),C}getOptionScopes(t,e,i){let{options:C,type:a}=this,H=this._cachedScopes(t,i),V=H.get(e);if(V)return V;let s=new Set;e.forEach(p=>{t&&(s.add(t),p.forEach(h=>c9(s,t,h))),p.forEach(h=>c9(s,C,h)),p.forEach(h=>c9(s,n3[a]||{},h)),p.forEach(h=>c9(s,s2,h)),p.forEach(h=>c9(s,V8,h))});let M=Array.from(s);return M.length===0&&M.push(Object.create(null)),EH.has(e)&&H.set(e,M),M}chartOptionScopes(){let{options:t,type:e}=this;return[t,n3[e]||{},s2.datasets[e]||{},{type:e},s2,V8]}resolveNamedOptions(t,e,i,C=[""]){let a={$shared:!0},{resolver:H,subPrefixes:V}=tH(this._resolverCache,t,C),s=H;if(mu(H,e)){a.$shared=!1,i=o0(i)?i():i;let M=this.createResolver(t,i,V);s=a3(H,i,M)}for(let M of e)a[M]=s[M];return a}createResolver(t,e,i=[""],C){let{resolver:a}=tH(this._resolverCache,t,i);return Z1(e)?a3(a,e,void 0,C):a}};function tH(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let C=e.join(),a=i.get(C);return a||(a={resolver:a9(t,e),subPrefixes:e.filter(V=>!V.toLowerCase().includes("hover"))},i.set(C,a)),a}var uu=r=>Z1(r)&&Object.getOwnPropertyNames(r).some(t=>o0(r[t]));function mu(r,t){let{isScriptable:e,isIndexable:i}=l8(r);for(let C of t){let a=e(C),H=i(C),V=(H||a)&&r[C];if(a&&(o0(V)||uu(V))||H&&r2(V))return!0}return!1}var hu="4.5.1",fu=["top","bottom","left","right","chartArea"];function eH(r,t){return r==="top"||r==="bottom"||fu.indexOf(r)===-1&&t==="x"}function rH(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function iH(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),J1(e&&e.onComplete,[r],t)}function Au(r){let t=r.chart,e=t.options.animation;J1(e&&e.onProgress,[r],t)}function FH(r){return H9()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var b8={},CH=r=>{let t=FH(r);return Object.values(b8).filter(e=>e.canvas===t).pop()};function vu(r,t,e){let i=Object.keys(r);for(let C of i){let a=+C;if(a>=t){let H=r[C];delete r[C],(e>0||a>t)&&(r[a+e]=H)}}}function xu(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var k2=class{static register(...t){s0.add(...t),oH()}static unregister(...t){s0.remove(...t),oH()}constructor(t,e){let i=this.config=new nr(e),C=FH(t),a=CH(C);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let H=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Wp(C)),this.platform.updateConfig(i);let V=this.platform.acquireContext(C,H.aspectRatio),s=V&&V.canvas,M=s&&s.height,p=s&&s.width;if(this.id=ce(),this.ctx=V,this.canvas=s,this.width=p,this.height=M,this._options=H,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new or,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=xe(h=>this.update(h),H.resizeDelay||0),this._dataChanges=[],b8[this.id]=this,!V||!s){console.error("Failed to create chart: can't acquire context from the given item");return}P0.listen(this,"complete",iH),P0.listen(this,"progress",Au),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:C,_aspectRatio:a}=this;return b1(t)?e&&a?a:C?i/C:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return s0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():c8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return s8(this.canvas,this.ctx),this}stop(){return P0.stop(this),this}resize(t,e){P0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,C=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,H=this.platform.getMaximumSize(C,t,e,a),V=i.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=H.width,this.height=H.height,this._aspectRatio=this.aspectRatio,c8(this,V,!0)&&(this.notifyPlugins("resize",{size:H}),J1(i.onResize,[this,H],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};z1(e,(i,C)=>{i.id=C})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,C=Object.keys(i).reduce((H,V)=>(H[V]=!1,H),{}),a=[];e&&(a=a.concat(Object.keys(e).map(H=>{let V=e[H],s=Hr(H,V),M=s==="r",p=s==="x";return{options:V,dposition:M?"chartArea":p?"bottom":"left",dtype:M?"radialLinear":p?"category":"linear"}}))),z1(a,H=>{let V=H.options,s=V.id,M=Hr(s,V),p=$1(V.type,H.dtype);(V.position===void 0||eH(V.position,M)!==eH(H.dposition))&&(V.position=H.dposition),C[s]=!0;let h=null;if(s in i&&i[s].type===p)h=i[s];else{let v=s0.getScale(p);h=new v({id:s,type:p,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(V,t)}),z1(C,(H,V)=>{H||delete i[V]}),z1(i,H=>{f8.configure(this,H,H.options),f8.addBox(this,H)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((C,a)=>C.index-a.index),i>e){for(let C=e;C<i;++C)this._destroyDatasetMeta(C);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(rH("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,C)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(C)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,C;for(this._removeUnreferencedMetasets(),i=0,C=e.length;i<C;i++){let a=e[i],H=this.getDatasetMeta(i),V=a.type||this.config.type;if(H.type&&H.type!==V&&(this._destroyDatasetMeta(i),H=this.getDatasetMeta(i)),H.type=V,H.indexAxis=a.indexAxis||ar(V,this.options),H.order=a.order||0,H.index=i,H.label=""+a.label,H.visible=this.isDatasetVisible(i),H.controller)H.controller.updateIndex(i),H.controller.linkScales();else{let s=s0.getController(V),{datasetElementType:M,dataElementType:p}=s2.datasets[V];Object.assign(s,{dataElementType:s0.getElement(p),datasetElementType:M&&s0.getElement(M)}),H.controller=new s(this,i),t.push(H.controller)}}return this._updateMetasets(),t}_resetElements(){z1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),C=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let H=0;for(let M=0,p=this.data.datasets.length;M<p;M++){let{controller:h}=this.getDatasetMeta(M),v=!C&&a.indexOf(h)===-1;h.buildOrUpdateElements(v),H=Math.max(+h.getMaxOverflow(),H)}H=this._minPadding=i.layout.autoPadding?H:0,this._updateLayout(H),C||z1(a,M=>{M.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(rH("z","_idx"));let{_active:V,_lastEvent:s}=this;s?this._eventHandler(s,!0):V.length&&this._updateHoverStyles(V,V,!0),this.render()}_updateScales(){z1(this.scales,t=>{f8.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!K6(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:C,count:a}of e){let H=i==="_removeElements"?-a:a;vu(t,C,H)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(H=>H[0]===a).map((H,V)=>V+","+H.splice(1).join(","))),C=i(0);for(let a=1;a<e;a++)if(!K6(C,i(a)))return;return Array.from(C).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;f8.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],z1(this.boxes,C=>{i&&C.position==="chartArea"||(C.configure&&C.configure(),this._layers.push(...C._layers()))},this),this._layers.forEach((C,a)=>{C._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,o0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),C={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",C)!==!1&&(i.controller._update(e),C.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",C))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(P0.has(this)?this.attached&&!P0.running(this)&&P0.start(this):(this.draw(),iH({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:C}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,C)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],C,a;for(C=0,a=e.length;C<a;++C){let H=e[C];(!t||H.visible)&&i.push(H)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},C=m8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(C&&i9(e,C),t.controller.draw(),C&&C9(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return D5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,C){let a=_p.modes[e];return typeof a=="function"?a(this,t,i,C):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,C=i.filter(a=>a&&a._dataset===e).pop();return C||(C={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(C)),C}getContext(){return this.$context||(this.$context=n0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let C=i?"show":"hide",a=this.getDatasetMeta(t),H=a.controller._resolveAnimations(void 0,C);G3(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),H.update(a,{visible:i}),this.update(V=>V.datasetIndex===t?C:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),P0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),s8(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete b8[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,H)=>{e.addEventListener(this,a,H),t[a]=H},C=(a,H,V)=>{a.offsetX=H,a.offsetY=V,this._eventHandler(a)};z1(this.options.events,a=>i(a,C))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(s,M)=>{e.addEventListener(this,s,M),t[s]=M},C=(s,M)=>{t[s]&&(e.removeEventListener(this,s,M),delete t[s])},a=(s,M)=>{this.canvas&&this.resize(s,M)},H,V=()=>{C("attach",V),this.attached=!0,this.resize(),i("resize",a),i("detach",H)};H=()=>{this.attached=!1,C("resize",a),this._stop(),this._resize(0,0),i("attach",V)},e.isAttached(this.canvas)?V():H()}unbindEvents(){z1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},z1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let C=i?"set":"remove",a,H,V,s;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+C+"DatasetHoverStyle"]()),V=0,s=t.length;V<s;++V){H=t[V];let M=H&&this.getDatasetMeta(H.datasetIndex).controller;M&&M[C+"HoverStyle"](H.element,H.datasetIndex,H.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:H})=>{let V=this.getDatasetMeta(a);if(!V)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:V.data[H],index:H}});!B7(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let C=this.options.hover,a=(s,M)=>s.filter(p=>!M.some(h=>p.datasetIndex===h.datasetIndex&&p.index===h.index)),H=a(e,t),V=i?t:a(t,e);H.length&&this.updateHoverStyle(H,C.mode,!1),V.length&&C.mode&&this.updateHoverStyle(V,C.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},C=H=>(H.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,C)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,C),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:C=[],options:a}=this,H=e,V=this._getActiveElements(t,C,i,H),s=pe(t),M=xu(t,this._lastEvent,i,s);i&&(this._lastEvent=null,J1(a.onHover,[t,V,this],this),s&&J1(a.onClick,[t,V,this],this));let p=!B7(V,C);return(p||e)&&(this._active=V,this._updateHoverStyles(V,C,e)),this._lastEvent=M,p}_getActiveElements(t,e,i,C){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,C)}};I(k2,"defaults",s2),I(k2,"instances",b8),I(k2,"overrides",n3),I(k2,"registry",s0),I(k2,"version",hu),I(k2,"getChart",CH);function oH(){return z1(k2.instances,r=>r._plugins.invalidate())}function gu(r,t,e){let{startAngle:i,x:C,y:a,outerRadius:H,innerRadius:V,options:s}=t,{borderWidth:M,borderJoinStyle:p}=s,h=Math.min(M/H,Z2(i-e));if(r.beginPath(),r.arc(C,a,H-M/2,i+h/2,e-h/2),V>0){let v=Math.min(M/V,Z2(i-e));r.arc(C,a,V+M/2,e-v/2,i+v/2,!0)}else{let v=Math.min(M/2,H*Z2(i-e));if(p==="round")r.arc(C,a,v,e-Q1/2,i+Q1/2,!0);else if(p==="bevel"){let g=2*v*v,y=-g*Math.cos(e+Q1/2)+C,O=-g*Math.sin(e+Q1/2)+a,k=g*Math.cos(i+Q1/2)+C,P=g*Math.sin(i+Q1/2)+a;r.lineTo(y,O),r.lineTo(k,P)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function _u(r,t,e){let{startAngle:i,pixelMargin:C,x:a,y:H,outerRadius:V,innerRadius:s}=t,M=C/V;r.beginPath(),r.arc(a,H,V,i-M,e+M),s>C?(M=C/s,r.arc(a,H,s,e+M,i-M,!0)):r.arc(a,H,C,e+f2,i-f2),r.closePath(),r.clip()}function Su(r){return o9(r,["outerStart","outerEnd","innerStart","innerEnd"])}function wu(r,t,e,i){let C=Su(r.options.borderRadius),a=(e-t)/2,H=Math.min(a,i*t/2),V=s=>{let M=(e-Math.min(a,s))*i/2;return O2(s,0,Math.min(a,M))};return{outerStart:V(C.outerStart),outerEnd:V(C.outerEnd),innerStart:O2(C.innerStart,0,H),innerEnd:O2(C.innerEnd,0,H)}}function N7(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function k8(r,t,e,i,C,a){let{x:H,y:V,startAngle:s,pixelMargin:M,innerRadius:p}=t,h=Math.max(t.outerRadius+i+e-M,0),v=p>0?p+i+e+M:0,g=0,y=C-s;if(i){let k1=p>0?p-i:0,X=h>0?h-i:0,Y1=(k1+X)/2,H1=Y1!==0?y*Y1/(Y1+i):y;g=(y-H1)/2}let O=Math.max(.001,y*h-e/Q1)/h,k=(y-O)/2,P=s+k+g,$=C-k-g,{outerStart:D,outerEnd:K,innerStart:G,innerEnd:M1}=wu(t,v,h,$-P),J=h-D,C1=h-K,r1=P+D/J,m1=$-K/C1,I1=v+G,O1=v+M1,L2=P+G/I1,q1=$-M1/O1;if(r.beginPath(),a){let k1=(r1+m1)/2;if(r.arc(H,V,h,r1,k1),r.arc(H,V,h,k1,m1),K>0){let U=N7(C1,m1,H,V);r.arc(U.x,U.y,K,m1,$+f2)}let X=N7(O1,$,H,V);if(r.lineTo(X.x,X.y),M1>0){let U=N7(O1,q1,H,V);r.arc(U.x,U.y,M1,$+f2,q1+Math.PI)}let Y1=($-M1/v+(P+G/v))/2;if(r.arc(H,V,v,$-M1/v,Y1,!0),r.arc(H,V,v,Y1,P+G/v,!0),G>0){let U=N7(I1,L2,H,V);r.arc(U.x,U.y,G,L2+Math.PI,P-f2)}let H1=N7(J,P,H,V);if(r.lineTo(H1.x,H1.y),D>0){let U=N7(J,r1,H,V);r.arc(U.x,U.y,D,P-f2,r1)}}else{r.moveTo(H,V);let k1=Math.cos(r1)*h+H,X=Math.sin(r1)*h+V;r.lineTo(k1,X);let Y1=Math.cos(m1)*h+H,H1=Math.sin(m1)*h+V;r.lineTo(Y1,H1)}r.closePath()}function bu(r,t,e,i,C){let{fullCircles:a,startAngle:H,circumference:V}=t,s=t.endAngle;if(a){k8(r,t,e,i,s,C);for(let M=0;M<a;++M)r.fill();isNaN(V)||(s=H+(V%p2||p2))}return k8(r,t,e,i,s,C),r.fill(),s}function yu(r,t,e,i,C){let{fullCircles:a,startAngle:H,circumference:V,options:s}=t,{borderWidth:M,borderJoinStyle:p,borderDash:h,borderDashOffset:v,borderRadius:g}=s,y=s.borderAlign==="inner";if(!M)return;r.setLineDash(h||[]),r.lineDashOffset=v,y?(r.lineWidth=M*2,r.lineJoin=p||"round"):(r.lineWidth=M,r.lineJoin=p||"bevel");let O=t.endAngle;if(a){k8(r,t,e,i,O,C);for(let k=0;k<a;++k)r.stroke();isNaN(V)||(O=H+(V%p2||p2))}y&&_u(r,t,O),s.selfJoin&&O-H>=Q1&&g===0&&p!=="miter"&&gu(r,t,O),a||(k8(r,t,e,i,O,C),r.stroke())}var s3=class extends N5{constructor(e){super();I(this,"circumference");I(this,"endAngle");I(this,"fullCircles");I(this,"innerRadius");I(this,"outerRadius");I(this,"pixelMargin");I(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,C){let a=this.getProps(["x","y"],C),{angle:H,distance:V}=e8(a,{x:e,y:i}),{startAngle:s,endAngle:M,innerRadius:p,outerRadius:h,circumference:v}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],C),g=(this.options.spacing+this.options.borderWidth)/2,y=$1(v,M-s),O=X4(H,s,M)&&s!==M,k=y>=p2||O,P=Q3(V,p+g,h+g);return k&&P}getCenterPoint(e){let{x:i,y:C,startAngle:a,endAngle:H,innerRadius:V,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:M,spacing:p}=this.options,h=(a+H)/2,v=(V+s+p+M)/2;return{x:i+Math.cos(h)*v,y:C+Math.sin(h)*v}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:C}=this,a=(i.offset||0)/4,H=(i.spacing||0)/2,V=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=C>p2?Math.floor(C/p2):0,C===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let s=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(s)*a,Math.sin(s)*a);let M=1-Math.sin(Math.min(Q1,C||0)),p=a*M;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,bu(e,this,p,H,V),yu(e,this,p,H,V),e.restore()}};I(s3,"id","arc"),I(s3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),I(s3,"defaultRoutes",{backgroundColor:"backgroundColor"}),I(s3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function $H(r,t,e=t){r.lineCap=$1(e.borderCapStyle,t.borderCapStyle),r.setLineDash($1(e.borderDash,t.borderDash)),r.lineDashOffset=$1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=$1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=$1(e.borderWidth,t.borderWidth),r.strokeStyle=$1(e.borderColor,t.borderColor)}function Zu(r,t,e){r.lineTo(e.x,e.y)}function Ou(r){return r.stepped?ye:r.tension||r.cubicInterpolationMode==="monotone"?Ze:Zu}function DH(r,t,e={}){let i=r.length,{start:C=0,end:a=i-1}=e,{start:H,end:V}=t,s=Math.max(C,H),M=Math.min(a,V),p=C<H&&a<H||C>V&&a>V;return{count:i,start:s,loop:t.loop,ilen:M<s&&!p?i+M-s:M-s}}function ku(r,t,e,i){let{points:C,options:a}=t,{count:H,start:V,loop:s,ilen:M}=DH(C,e,i),p=Ou(a),{move:h=!0,reverse:v}=i||{},g,y,O;for(g=0;g<=M;++g)y=C[(V+(v?M-g:g))%H],!y.skip&&(h?(r.moveTo(y.x,y.y),h=!1):p(r,O,y,v,a.stepped),O=y);return s&&(y=C[(V+(v?M:0))%H],p(r,O,y,v,a.stepped)),!!s}function Tu(r,t,e,i){let C=t.points,{count:a,start:H,ilen:V}=DH(C,e,i),{move:s=!0,reverse:M}=i||{},p=0,h=0,v,g,y,O,k,P,$=K=>(H+(M?V-K:K))%a,D=()=>{O!==k&&(r.lineTo(p,k),r.lineTo(p,O),r.lineTo(p,P))};for(s&&(g=C[$(0)],r.moveTo(g.x,g.y)),v=0;v<=V;++v){if(g=C[$(v)],g.skip)continue;let K=g.x,G=g.y,M1=K|0;M1===y?(G<O?O=G:G>k&&(k=G),p=(h*p+K)/++h):(D(),r.lineTo(K,G),y=M1,h=0,O=k=G),P=G}D()}function Vr(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Tu:ku}function Pu(r){return r.stepped?$e:r.tension||r.cubicInterpolationMode==="monotone"?De:O0}function Eu(r,t,e,i){let C=t._path;C||(C=t._path=new Path2D,t.path(C,e,i)&&C.closePath()),$H(r,t.options),r.stroke(C)}function Fu(r,t,e,i){let{segments:C,options:a}=t,H=Vr(t);for(let V of C)$H(r,a,V.style),r.beginPath(),H(r,t,V,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var $u=typeof Path2D=="function";function Du(r,t,e,i){$u&&!t.options.segment?Eu(r,t,e,i):Fu(r,t,e,i)}var c5=class extends N5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let C=i.spanGaps?this._loop:this._fullLoop;Pe(this._points,i,t,C,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=ze(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,C=t[e],a=this.points,H=u8(this,{property:e,start:C,end:C});if(!H.length)return;let V=[],s=Pu(i),M,p;for(M=0,p=H.length;M<p;++M){let{start:h,end:v}=H[M],g=a[h],y=a[v];if(g===y){V.push(g);continue}let O=Math.abs((C-g[e])/(y[e]-g[e])),k=s(g,y,O,i.stepped);k[e]=t[e],V.push(k)}return V.length===1?V[0]:V}pathSegment(t,e,i){return Vr(this)(t,this,e,i)}path(t,e,i){let C=this.segments,a=Vr(this),H=this._loop;e=e||0,i=i||this.points.length-e;for(let V of C)H&=a(t,this,V,{start:e,end:e+i-1});return!!H}draw(t,e,i,C){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Du(t,this,i,C),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};I(c5,"id","line"),I(c5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),I(c5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),I(c5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function aH(r,t,e,i){let C=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<C.radius+C.hitRadius}var z5=class extends N5{constructor(e){super();I(this,"parsed");I(this,"skip");I(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,C){let a=this.options,{x:H,y:V}=this.getProps(["x","y"],C);return Math.pow(e-H,2)+Math.pow(i-V,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return aH(this,e,"x",i)}inYRange(e,i){return aH(this,e,"y",i)}getCenterPoint(e){let{x:i,y:C}=this.getProps(["x","y"],e);return{x:i,y:C}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let C=i&&e.borderWidth||0;return(i+C)*2}draw(e,i){let C=this.options;this.skip||C.radius<.1||!D5(this,i,this.size(C)/2)||(e.strokeStyle=C.borderColor,e.lineWidth=C.borderWidth,e.fillStyle=C.backgroundColor,r9(e,C,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};I(z5,"id","point"),I(z5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),I(z5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function RH(r,t){let{x:e,y:i,base:C,width:a,height:H}=r.getProps(["x","y","base","width","height"],t),V,s,M,p,h;return r.horizontal?(h=H/2,V=Math.min(e,C),s=Math.max(e,C),M=i-h,p=i+h):(h=a/2,V=e-h,s=e+h,M=Math.min(i,C),p=Math.max(i,C)),{left:V,top:M,right:s,bottom:p}}function l3(r,t,e,i){return r?0:O2(t,e,i)}function Ru(r,t,e){let i=r.options.borderWidth,C=r.borderSkipped,a=L8(i);return{t:l3(C.top,a.top,0,e),r:l3(C.right,a.right,0,t),b:l3(C.bottom,a.bottom,0,e),l:l3(C.left,a.left,0,t)}}function Bu(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),C=r.options.borderRadius,a=V3(C),H=Math.min(t,e),V=r.borderSkipped,s=i||Z1(C);return{topLeft:l3(!s||V.top||V.left,a.topLeft,0,H),topRight:l3(!s||V.top||V.right,a.topRight,0,H),bottomLeft:l3(!s||V.bottom||V.left,a.bottomLeft,0,H),bottomRight:l3(!s||V.bottom||V.right,a.bottomRight,0,H)}}function zu(r){let t=RH(r),e=t.right-t.left,i=t.bottom-t.top,C=Ru(r,e/2,i/2),a=Bu(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+C.l,y:t.top+C.t,w:e-C.l-C.r,h:i-C.t-C.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(C.t,C.l)),topRight:Math.max(0,a.topRight-Math.max(C.t,C.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(C.b,C.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(C.b,C.r))}}}}function Ye(r,t,e,i){let C=t===null,a=e===null,V=r&&!(C&&a)&&RH(r,i);return V&&(C||Q3(t,V.left,V.right))&&(a||Q3(e,V.top,V.bottom))}function Iu(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function Nu(r,t){r.rect(t.x,t.y,t.w,t.h)}function Qe(r,t,e={}){let i=r.x!==e.x?-t:0,C=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,H=(r.y+r.h!==e.y+e.h?t:0)-C;return{x:r.x+i,y:r.y+C,w:r.w+a,h:r.h+H,radius:r.radius}}var I5=class extends N5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:C}}=this,{inner:a,outer:H}=zu(this),V=Iu(H.radius)?I7:Nu;t.save(),(H.w!==a.w||H.h!==a.h)&&(t.beginPath(),V(t,Qe(H,e,a)),t.clip(),V(t,Qe(a,-e,H)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),V(t,Qe(a,e)),t.fillStyle=C,t.fill(),t.restore()}inRange(t,e,i){return Ye(this,t,e,i)}inXRange(t,e){return Ye(this,t,null,e)}inYRange(t,e){return Ye(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:C,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+C)/2:e,y:a?i:(i+C)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};I(I5,"id","bar"),I(I5,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),I(I5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Wu(r,t,e){let i=r.segments,C=r.points,a=t.points,H=[];for(let V of i){let{start:s,end:M}=V;M=P8(s,M,C);let p=sr(e,C[s],C[M],V.loop);if(!t.segments){H.push({source:V,target:p,start:C[s],end:C[M]});continue}let h=u8(t,p);for(let v of h){let g=sr(e,a[v.start],a[v.end],v.loop),y=p8(V,C,g);for(let O of y)H.push({source:O,target:v,start:{[e]:HH(p,g,"start",Math.max)},end:{[e]:HH(p,g,"end",Math.min)}})}}return H}function sr(r,t,e,i){if(i)return;let C=t[r],a=e[r];return r==="angle"&&(C=Z2(C),a=Z2(a)),{property:r,start:C,end:a}}function Uu(r,t){let{x:e=null,y:i=null}=r||{},C=t.points,a=[];return t.segments.forEach(({start:H,end:V})=>{V=P8(H,V,C);let s=C[H],M=C[V];i!==null?(a.push({x:s.x,y:i}),a.push({x:M.x,y:i})):e!==null&&(a.push({x:e,y:s.y}),a.push({x:e,y:M.y}))}),a}function P8(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function HH(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function BH(r,t){let e=[],i=!1;return r2(r)?(i=!0,e=r):e=Uu(r,t),e.length?new c5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function nH(r){return r&&r.fill!==!1}function ju(r,t,e){let C=r[t].fill,a=[t],H;if(!e)return C;for(;C!==!1&&a.indexOf(C)===-1;){if(!V2(C))return C;if(H=r[C],!H)return!1;if(H.visible)return C;a.push(C),C=H.fill}return!1}function Gu(r,t,e){let i=Ku(r);if(Z1(i))return isNaN(i.value)?!1:i;let C=parseFloat(i);return V2(C)&&Math.floor(C)===C?qu(i[0],t,C,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function qu(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function Yu(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:Z1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Qu(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:Z1(r)?i=r.value:i=t.getBaseValue(),i}function Ku(r){let t=r.options,e=t.fill,i=$1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Xu(r){let{scale:t,index:e,line:i}=r,C=[],a=i.segments,H=i.points,V=Ju(t,e);V.push(BH({x:null,y:t.bottom},i));for(let s=0;s<a.length;s++){let M=a[s];for(let p=M.start;p<=M.end;p++)tm(C,H[p],V)}return new c5({points:C,options:{}})}function Ju(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let C=0;C<i.length;C++){let a=i[C];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function tm(r,t,e){let i=[];for(let C=0;C<e.length;C++){let a=e[C],{first:H,last:V,point:s}=em(a,t,"x");if(!(!s||H&&V)){if(H)i.unshift(s);else if(r.push(s),!V)break}}r.push(...i)}function em(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let C=i[e],a=r.segments,H=r.points,V=!1,s=!1;for(let M=0;M<a.length;M++){let p=a[M],h=H[p.start][e],v=H[p.end][e];if(Q3(C,h,v)){V=C===h,s=C===v;break}}return{first:V,last:s,point:i}}var T8=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:C,y:a,radius:H}=this;return e=e||{start:0,end:p2},t.arc(C,a,H,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:C}=this,a=t.angle;return{x:e+Math.cos(a)*C,y:i+Math.sin(a)*C,angle:a}}};function rm(r){let{chart:t,fill:e,line:i}=r;if(V2(e))return im(t,e);if(e==="stack")return Xu(r);if(e==="shape")return!0;let C=Cm(r);return C instanceof T8?C:BH(C,i)}function im(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function Cm(r){return(r.scale||{}).getPointPositionForValue?am(r):om(r)}function om(r){let{scale:t={},fill:e}=r,i=Yu(e,t);if(V2(i)){let C=t.isHorizontal();return{x:C?i:null,y:C?null:i}}return null}function am(r){let{scale:t,fill:e}=r,i=t.options,C=t.getLabels().length,a=i.reverse?t.max:t.min,H=Qu(e,t,a),V=[];if(i.grid.circular){let s=t.getPointPositionForValue(0,a);return new T8({x:s.x,y:s.y,radius:t.getDistanceFromCenterForValue(H)})}for(let s=0;s<C;++s)V.push(t.getPointPositionForValue(s,H));return V}function Ke(r,t,e){let i=rm(t),{chart:C,index:a,line:H,scale:V,axis:s}=t,M=H.options,p=M.fill,h=M.backgroundColor,{above:v=h,below:g=h}=p||{},y=C.getDatasetMeta(a),O=m8(C,y);i&&H.points.length&&(i9(r,e),Hm(r,{line:H,target:i,above:v,below:g,area:e,scale:V,axis:s,clip:O}),C9(r))}function Hm(r,t){let{line:e,target:i,above:C,below:a,area:H,scale:V,clip:s}=t,M=e._loop?"angle":t.axis;r.save();let p=a;a!==C&&(M==="x"?(VH(r,i,H.top),Xe(r,{line:e,target:i,color:C,scale:V,property:M,clip:s}),r.restore(),r.save(),VH(r,i,H.bottom)):M==="y"&&(sH(r,i,H.left),Xe(r,{line:e,target:i,color:a,scale:V,property:M,clip:s}),r.restore(),r.save(),sH(r,i,H.right),p=C)),Xe(r,{line:e,target:i,color:p,scale:V,property:M,clip:s}),r.restore()}function VH(r,t,e){let{segments:i,points:C}=t,a=!0,H=!1;r.beginPath();for(let V of i){let{start:s,end:M}=V,p=C[s],h=C[P8(s,M,C)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(p.x,e),r.lineTo(p.x,p.y)),H=!!t.pathSegment(r,V,{move:H}),H?r.closePath():r.lineTo(h.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function sH(r,t,e){let{segments:i,points:C}=t,a=!0,H=!1;r.beginPath();for(let V of i){let{start:s,end:M}=V,p=C[s],h=C[P8(s,M,C)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(e,p.y),r.lineTo(p.x,p.y)),H=!!t.pathSegment(r,V,{move:H}),H?r.closePath():r.lineTo(e,h.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function Xe(r,t){let{line:e,target:i,property:C,color:a,scale:H,clip:V}=t,s=Wu(e,i,C);for(let{source:M,target:p,start:h,end:v}of s){let{style:{backgroundColor:g=a}={}}=M,y=i!==!0;r.save(),r.fillStyle=g,nm(r,H,V,y&&sr(C,h,v)),r.beginPath();let O=!!e.pathSegment(r,M),k;if(y){O?r.closePath():LH(r,i,v,C);let P=!!i.pathSegment(r,p,{move:O,reverse:!0});k=O&&P,k||LH(r,i,h,C)}r.closePath(),r.fill(k?"evenodd":"nonzero"),r.restore()}}function nm(r,t,e,i){let C=t.chart.chartArea,{property:a,start:H,end:V}=i||{};if(a==="x"||a==="y"){let s,M,p,h;a==="x"?(s=H,M=C.top,p=V,h=C.bottom):(s=C.left,M=H,p=C.right,h=V),r.beginPath(),e&&(s=Math.max(s,e.left),p=Math.min(p,e.right),M=Math.max(M,e.top),h=Math.min(h,e.bottom)),r.rect(s,M,p-s,h-M),r.clip()}}function LH(r,t,e,i){let C=t.interpolate(e,i);C&&r.lineTo(C.x,C.y)}var zH={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,C=[],a,H,V,s;for(H=0;H<i;++H)a=r.getDatasetMeta(H),V=a.dataset,s=null,V&&V.options&&V instanceof c5&&(s={visible:r.isDatasetVisible(H),index:H,fill:Gu(V,H,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:V}),a.$filler=s,C.push(s);for(H=0;H<i;++H)s=C[H],!(!s||s.fill===!1)&&(s.fill=ju(C,H,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",C=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let H=C.length-1;H>=0;--H){let V=C[H].$filler;V&&(V.line.updateControlPoints(a,V.axis),i&&V.fill&&Ke(r.ctx,V,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let C=i.length-1;C>=0;--C){let a=i[C].$filler;nH(a)&&Ke(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!nH(i)||e.drawTime!=="beforeDatasetDraw"||Ke(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var p9={average(r){if(!r.length)return!1;let t,e,i=new Set,C=0,a=0;for(t=0,e=r.length;t<e;++t){let V=r[t].element;if(V&&V.hasValue()){let s=V.tooltipPosition();i.add(s.x),C+=s.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((V,s)=>V+s)/i.size,y:C/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,C=Number.POSITIVE_INFINITY,a,H,V;for(a=0,H=r.length;a<H;++a){let s=r[a].element;if(s&&s.hasValue()){let M=s.getCenterPoint(),p=Y4(t,M);p<C&&(C=p,V=s)}}if(V){let s=V.tooltipPosition();e=s.x,i=s.y}return{x:e,y:i}}};function V0(r,t){return t&&(r2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function E0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function Vm(r,t){let{element:e,datasetIndex:i,index:C}=t,a=r.getDatasetMeta(i).controller,{label:H,value:V}=a.getLabelAndValue(C);return{chart:r,label:H,parsed:a.getParsed(C),raw:r.data.datasets[i].data[C],formattedValue:V,dataset:a.getDataset(),dataIndex:C,datasetIndex:i,element:e}}function lH(r,t){let e=r.chart.ctx,{body:i,footer:C,title:a}=r,{boxWidth:H,boxHeight:V}=t,s=$2(t.bodyFont),M=$2(t.titleFont),p=$2(t.footerFont),h=a.length,v=C.length,g=i.length,y=B2(t.padding),O=y.height,k=0,P=i.reduce((K,G)=>K+G.before.length+G.lines.length+G.after.length,0);if(P+=r.beforeBody.length+r.afterBody.length,h&&(O+=h*M.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),P){let K=t.displayColors?Math.max(V,s.lineHeight):s.lineHeight;O+=g*K+(P-g)*s.lineHeight+(P-1)*t.bodySpacing}v&&(O+=t.footerMarginTop+v*p.lineHeight+(v-1)*t.footerSpacing);let $=0,D=function(K){k=Math.max(k,e.measureText(K).width+$)};return e.save(),e.font=M.string,z1(r.title,D),e.font=s.string,z1(r.beforeBody.concat(r.afterBody),D),$=t.displayColors?H+2+t.boxPadding:0,z1(i,K=>{z1(K.before,D),z1(K.lines,D),z1(K.after,D)}),$=0,e.font=p.string,z1(r.footer,D),e.restore(),k+=y.width,{width:k,height:O}}function sm(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function Lm(r,t,e,i){let{x:C,width:a}=i,H=e.caretSize+e.caretPadding;if(r==="left"&&C+a+H>t.width||r==="right"&&C-a-H<0)return!0}function lm(r,t,e,i){let{x:C,width:a}=e,{width:H,chartArea:{left:V,right:s}}=r,M="center";return i==="center"?M=C<=(V+s)/2?"left":"right":C<=a/2?M="left":C>=H-a/2&&(M="right"),Lm(M,r,t,e)&&(M="center"),M}function MH(r,t,e){let i=e.yAlign||t.yAlign||sm(r,e);return{xAlign:e.xAlign||t.xAlign||lm(r,t,e,i),yAlign:i}}function Mm(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function cm(r,t,e){let{y:i,height:C}=r;return t==="top"?i+=e:t==="bottom"?i-=C+e:i-=C/2,i}function cH(r,t,e,i){let{caretSize:C,caretPadding:a,cornerRadius:H}=r,{xAlign:V,yAlign:s}=e,M=C+a,{topLeft:p,topRight:h,bottomLeft:v,bottomRight:g}=V3(H),y=Mm(t,V),O=cm(t,s,M);return s==="center"?V==="left"?y+=M:V==="right"&&(y-=M):V==="left"?y-=Math.max(p,v)+C:V==="right"&&(y+=Math.max(h,g)+C),{x:O2(y,0,i.width-t.width),y:O2(O,0,i.height-t.height)}}function x8(r,t,e){let i=B2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function dH(r){return V0([],E0(r))}function dm(r,t,e){return n0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function pH(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var IH={beforeTitle:R5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:R5,beforeBody:R5,beforeLabel:R5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return b1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:R5,afterBody:R5,beforeFooter:R5,footer:R5,afterFooter:R5};function r5(r,t,e,i){let C=r[t].call(e,i);return typeof C>"u"?IH[t].call(e,i):C}var u9=class extends N5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),C=i.enabled&&e.options.animation&&i.animations,a=new y8(this.chart,C);return C._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=dm(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,C=r5(i,"beforeTitle",this,t),a=r5(i,"title",this,t),H=r5(i,"afterTitle",this,t),V=[];return V=V0(V,E0(C)),V=V0(V,E0(a)),V=V0(V,E0(H)),V}getBeforeBody(t,e){return dH(r5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,C=[];return z1(t,a=>{let H={before:[],lines:[],after:[]},V=pH(i,a);V0(H.before,E0(r5(V,"beforeLabel",this,a))),V0(H.lines,r5(V,"label",this,a)),V0(H.after,E0(r5(V,"afterLabel",this,a))),C.push(H)}),C}getAfterBody(t,e){return dH(r5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,C=r5(i,"beforeFooter",this,t),a=r5(i,"footer",this,t),H=r5(i,"afterFooter",this,t),V=[];return V=V0(V,E0(C)),V=V0(V,E0(a)),V=V0(V,E0(H)),V}_createItems(t){let e=this._active,i=this.chart.data,C=[],a=[],H=[],V=[],s,M;for(s=0,M=e.length;s<M;++s)V.push(Vm(this.chart,e[s]));return t.filter&&(V=V.filter((p,h,v)=>t.filter(p,h,v,i))),t.itemSort&&(V=V.sort((p,h)=>t.itemSort(p,h,i))),z1(V,p=>{let h=pH(t.callbacks,p);C.push(r5(h,"labelColor",this,p)),a.push(r5(h,"labelPointStyle",this,p)),H.push(r5(h,"labelTextColor",this,p))}),this.labelColors=C,this.labelPointStyles=a,this.labelTextColors=H,this.dataPoints=V,V}update(t,e){let i=this.options.setContext(this.getContext()),C=this._active,a,H=[];if(!C.length)this.opacity!==0&&(a={opacity:0});else{let V=p9[i.position].call(this,C,this._eventPosition);H=this._createItems(i),this.title=this.getTitle(H,i),this.beforeBody=this.getBeforeBody(H,i),this.body=this.getBody(H,i),this.afterBody=this.getAfterBody(H,i),this.footer=this.getFooter(H,i);let s=this._size=lH(this,i),M=Object.assign({},V,s),p=MH(this.chart,i,M),h=cH(i,M,p,this.chart);this.xAlign=p.xAlign,this.yAlign=p.yAlign,a={opacity:1,x:h.x,y:h.y,width:s.width,height:s.height,caretX:V.x,caretY:V.y}}this._tooltipItems=H,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,C){let a=this.getCaretPosition(t,i,C);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:C,yAlign:a}=this,{caretSize:H,cornerRadius:V}=i,{topLeft:s,topRight:M,bottomLeft:p,bottomRight:h}=V3(V),{x:v,y:g}=t,{width:y,height:O}=e,k,P,$,D,K,G;return a==="center"?(K=g+O/2,C==="left"?(k=v,P=k-H,D=K+H,G=K-H):(k=v+y,P=k+H,D=K-H,G=K+H),$=k):(C==="left"?P=v+Math.max(s,p)+H:C==="right"?P=v+y-Math.max(M,h)-H:P=this.caretX,a==="top"?(D=g,K=D-H,k=P-H,$=P+H):(D=g+O,K=D+H,k=P+H,$=P-H),G=D),{x1:k,x2:P,x3:$,y1:D,y2:K,y3:G}}drawTitle(t,e,i){let C=this.title,a=C.length,H,V,s;if(a){let M=V9(i.rtl,this.x,this.width);for(t.x=x8(this,i.titleAlign,i),e.textAlign=M.textAlign(i.titleAlign),e.textBaseline="middle",H=$2(i.titleFont),V=i.titleSpacing,e.fillStyle=i.titleColor,e.font=H.string,s=0;s<a;++s)e.fillText(C[s],M.x(t.x),t.y+H.lineHeight/2),t.y+=H.lineHeight+V,s+1===a&&(t.y+=i.titleMarginBottom-V)}}_drawColorBox(t,e,i,C,a){let H=this.labelColors[i],V=this.labelPointStyles[i],{boxHeight:s,boxWidth:M}=a,p=$2(a.bodyFont),h=x8(this,"left",a),v=C.x(h),g=s<p.lineHeight?(p.lineHeight-s)/2:0,y=e.y+g;if(a.usePointStyle){let O={radius:Math.min(M,s)/2,pointStyle:V.pointStyle,rotation:V.rotation,borderWidth:1},k=C.leftForLtr(v,M)+M/2,P=y+s/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,r9(t,O,k,P),t.strokeStyle=H.borderColor,t.fillStyle=H.backgroundColor,r9(t,O,k,P)}else{t.lineWidth=Z1(H.borderWidth)?Math.max(...Object.values(H.borderWidth)):H.borderWidth||1,t.strokeStyle=H.borderColor,t.setLineDash(H.borderDash||[]),t.lineDashOffset=H.borderDashOffset||0;let O=C.leftForLtr(v,M),k=C.leftForLtr(C.xPlus(v,1),M-2),P=V3(H.borderRadius);Object.values(P).some($=>$!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,I7(t,{x:O,y,w:M,h:s,radius:P}),t.fill(),t.stroke(),t.fillStyle=H.backgroundColor,t.beginPath(),I7(t,{x:k,y:y+1,w:M-2,h:s-2,radius:P}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(O,y,M,s),t.strokeRect(O,y,M,s),t.fillStyle=H.backgroundColor,t.fillRect(k,y+1,M-2,s-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:C}=this,{bodySpacing:a,bodyAlign:H,displayColors:V,boxHeight:s,boxWidth:M,boxPadding:p}=i,h=$2(i.bodyFont),v=h.lineHeight,g=0,y=V9(i.rtl,this.x,this.width),O=function(C1){e.fillText(C1,y.x(t.x+g),t.y+v/2),t.y+=v+a},k=y.textAlign(H),P,$,D,K,G,M1,J;for(e.textAlign=H,e.textBaseline="middle",e.font=h.string,t.x=x8(this,k,i),e.fillStyle=i.bodyColor,z1(this.beforeBody,O),g=V&&k!=="right"?H==="center"?M/2+p:M+2+p:0,K=0,M1=C.length;K<M1;++K){for(P=C[K],$=this.labelTextColors[K],e.fillStyle=$,z1(P.before,O),D=P.lines,V&&D.length&&(this._drawColorBox(e,t,K,y,i),v=Math.max(h.lineHeight,s)),G=0,J=D.length;G<J;++G)O(D[G]),v=h.lineHeight;z1(P.after,O)}g=0,v=h.lineHeight,z1(this.afterBody,O),t.y-=a}drawFooter(t,e,i){let C=this.footer,a=C.length,H,V;if(a){let s=V9(i.rtl,this.x,this.width);for(t.x=x8(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=s.textAlign(i.footerAlign),e.textBaseline="middle",H=$2(i.footerFont),e.fillStyle=i.footerColor,e.font=H.string,V=0;V<a;++V)e.fillText(C[V],s.x(t.x),t.y+H.lineHeight/2),t.y+=H.lineHeight+i.footerSpacing}}drawBackground(t,e,i,C){let{xAlign:a,yAlign:H}=this,{x:V,y:s}=t,{width:M,height:p}=i,{topLeft:h,topRight:v,bottomLeft:g,bottomRight:y}=V3(C.cornerRadius);e.fillStyle=C.backgroundColor,e.strokeStyle=C.borderColor,e.lineWidth=C.borderWidth,e.beginPath(),e.moveTo(V+h,s),H==="top"&&this.drawCaret(t,e,i,C),e.lineTo(V+M-v,s),e.quadraticCurveTo(V+M,s,V+M,s+v),H==="center"&&a==="right"&&this.drawCaret(t,e,i,C),e.lineTo(V+M,s+p-y),e.quadraticCurveTo(V+M,s+p,V+M-y,s+p),H==="bottom"&&this.drawCaret(t,e,i,C),e.lineTo(V+g,s+p),e.quadraticCurveTo(V,s+p,V,s+p-g),H==="center"&&a==="left"&&this.drawCaret(t,e,i,C),e.lineTo(V,s+h),e.quadraticCurveTo(V,s,V+h,s),e.closePath(),e.fill(),C.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,C=i&&i.x,a=i&&i.y;if(C||a){let H=p9[t.position].call(this,this._active,this._eventPosition);if(!H)return;let V=this._size=lH(this,t),s=Object.assign({},H,this._size),M=MH(e,t,s),p=cH(t,s,M,e);(C._to!==p.x||a._to!==p.y)&&(this.xAlign=M.xAlign,this.yAlign=M.yAlign,this.width=V.width,this.height=V.height,this.caretX=H.x,this.caretY=H.y,this._resolveAnimations().update(this,p))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let C={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let H=B2(e.padding),V=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&V&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,C,e),Re(t,e.textDirection),a.y+=H.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),Be(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,C=t.map(({datasetIndex:V,index:s})=>{let M=this.chart.getDatasetMeta(V);if(!M)throw new Error("Cannot find a dataset at index "+V);return{datasetIndex:V,element:M.data[s],index:s}}),a=!B7(i,C),H=this._positionChanged(C,e);(a||H)&&(this._active=C,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let C=this.options,a=this._active||[],H=this._getActiveElements(t,a,e,i),V=this._positionChanged(H,t),s=e||!B7(H,a)||V;return s&&(this._active=H,(C.enabled||C.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,i,C){let a=this.options;if(t.type==="mouseout")return[];if(!C)return e.filter(V=>this.chart.data.datasets[V.datasetIndex]&&this.chart.getDatasetMeta(V.datasetIndex).controller.getParsed(V.index)!==void 0);let H=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&H.reverse(),H}_positionChanged(t,e){let{caretX:i,caretY:C,options:a}=this,H=p9[a.position].call(this,t,e);return H!==!1&&(i!==H.x||C!==H.y)}};I(u9,"positioners",p9);var NH={id:"tooltip",_element:u9,positioners:p9,afterInit(r,t,e){e&&(r.tooltip=new u9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:IH},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var pm=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function um(r,t,e,i){let C=r.indexOf(t);if(C===-1)return pm(r,t,e,i);let a=r.lastIndexOf(t);return C!==a?e:C}var mm=(r,t)=>r===null?null:O2(Math.round(r),0,t);function uH(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var j7=class extends J3{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:C,label:a}of e)i[C]===a&&i.splice(C,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(b1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:um(i,t,$1(e,t),this._addedLabels),mm(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:C}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(C=this.getLabels().length-1)),this.min=i,this.max=C}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,C=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let H=t;H<=e;H++)C.push({value:H});return C}getLabelForValue(t){return uH.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};I(j7,"id","category"),I(j7,"defaults",{ticks:{callback:uH}});function hm(r,t){let e=[],{bounds:C,step:a,min:H,max:V,precision:s,count:M,maxTicks:p,maxDigits:h,includeBounds:v}=r,g=a||1,y=p-1,{min:O,max:k}=t,P=!b1(H),$=!b1(V),D=!b1(M),K=(k-O)/(h+1),G=X6((k-O)/y/g)*g,M1,J,C1,r1;if(G<1e-14&&!P&&!$)return[{value:O},{value:k}];r1=Math.ceil(k/G)-Math.floor(O/G),r1>y&&(G=X6(r1*G/y/g)*g),b1(s)||(M1=Math.pow(10,s),G=Math.ceil(G*M1)/M1),C==="ticks"?(J=Math.floor(O/G)*G,C1=Math.ceil(k/G)*G):(J=O,C1=k),P&&$&&a&&me((V-H)/a,G/1e3)?(r1=Math.round(Math.min((V-H)/G,p)),G=(V-H)/r1,J=H,C1=V):D?(J=P?H:J,C1=$?V:C1,r1=M-1,G=(C1-J)/r1):(r1=(C1-J)/G,q3(r1,Math.round(r1),G/1e3)?r1=Math.round(r1):r1=Math.ceil(r1));let m1=Math.max(t8(G),t8(J));M1=Math.pow(10,b1(s)?m1:s),J=Math.round(J*M1)/M1,C1=Math.round(C1*M1)/M1;let I1=0;for(P&&(v&&J!==H?(e.push({value:H}),J<H&&I1++,q3(Math.round((J+I1*G)*M1)/M1,H,mH(H,K,r))&&I1++):J<H&&I1++);I1<r1;++I1){let O1=Math.round((J+I1*G)*M1)/M1;if($&&O1>V)break;e.push({value:O1})}return $&&v&&C1!==V?e.length&&q3(e[e.length-1].value,V,mH(V,K,r))?e[e.length-1].value=V:e.push({value:V}):(!$||C1===V)&&e.push({value:C1}),e}function mH(r,t,{horizontal:e,minRotation:i}){let C=H0(i),a=(e?Math.sin(C):Math.cos(C))||.001,H=.75*t*(""+r).length;return Math.min(t/a,H)}var q7=class extends J3{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return b1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:C,max:a}=this,H=s=>C=e?C:s,V=s=>a=i?a:s;if(t){let s=w5(C),M=w5(a);s<0&&M<0?V(0):s>0&&M>0&&H(0)}if(C===a){let s=a===0?1:Math.abs(a*.05);V(a+s),t||H(C-s)}this.min=C,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,C;return i?(C=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,C>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${C} ticks. Limiting to 1000.`),C=1e3)):(C=this.computeTickLimit(),e=e||11),e&&(C=Math.min(e,C)),C}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let C={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,H=hm(C,a);return t.bounds==="ticks"&&J6(H,this,"value"),t.reverse?(H.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),H}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let C=(i-e)/Math.max(t.length-1,1)/2;e-=C,i+=C}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return t9(t,this.chart.options.locale,this.options.ticks.format)}},M3=class extends q7{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?t:0,this.max=V2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=H0(this.options.ticks.minRotation),C=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/C))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};I(M3,"id","linear"),I(M3,"defaults",{ticks:{callback:e9.formatters.numeric}});var h9=r=>Math.floor(a0(r)),X3=(r,t)=>Math.pow(10,h9(r)+t);function hH(r){return r/Math.pow(10,h9(r))===1}function fH(r,t,e){let i=Math.pow(10,e),C=Math.floor(r/i);return Math.ceil(t/i)-C}function fm(r,t){let e=t-r,i=h9(e);for(;fH(r,t,i)>10;)i++;for(;fH(r,t,i)<10;)i--;return Math.min(i,h9(r))}function Am(r,{min:t,max:e}){t=Q2(r.min,t);let i=[],C=h9(t),a=fm(t,e),H=a<0?Math.pow(10,Math.abs(a)):1,V=Math.pow(10,a),s=C>a?Math.pow(10,C):0,M=Math.round((t-s)*H)/H,p=Math.floor((t-s)/V/10)*V*10,h=Math.floor((M-p)/Math.pow(10,a)),v=Q2(r.min,Math.round((s+p+h*Math.pow(10,a))*H)/H);for(;v<e;)i.push({value:v,major:hH(v),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,H=a>=0?1:H),v=Math.round((s+p+h*Math.pow(10,a))*H)/H;let g=Q2(r.max,v);return i.push({value:g,major:hH(g),significand:h}),i}var g8=class extends J3{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=q7.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return V2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=V2(t)?Math.max(0,t):null,this.max=V2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!V2(this._userMin)&&(this.min=t===X3(this.min,0)?X3(this.min,-1):X3(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,C=this.max,a=V=>i=t?i:V,H=V=>C=e?C:V;i===C&&(i<=0?(a(1),H(10)):(a(X3(i,-1)),H(X3(C,1)))),i<=0&&a(X3(C,-1)),C<=0&&H(X3(i,1)),this.min=i,this.max=C}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=Am(e,this);return t.bounds==="ticks"&&J6(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":t9(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=a0(t),this._valueRange=a0(this.max)-a0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(a0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};I(g8,"id","logarithmic"),I(g8,"defaults",{ticks:{callback:e9.formatters.logarithmic,major:{enabled:!0}}});function Lr(r){let t=r.ticks;if(t.display&&r.display){let e=B2(t.backdropPadding);return $1(t.font&&t.font.size,s2.font.size)+e.height}return 0}function vm(r,t,e){return e=r2(e)?e:[e],{w:we(r,t.string,e),h:e.length*t.lineHeight}}function AH(r,t,e,i,C){return r===i||r===C?{start:t-e/2,end:t+e/2}:r<i||r>C?{start:t-e,end:t}:{start:t,end:t+e}}function xm(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],C=[],a=r._pointLabels.length,H=r.options.pointLabels,V=H.centerPointLabels?Q1/a:0;for(let s=0;s<a;s++){let M=H.setContext(r.getPointLabelContext(s));C[s]=M.padding;let p=r.getPointPosition(s,r.drawingArea+C[s],V),h=$2(M.font),v=vm(r.ctx,h,r._pointLabels[s]);i[s]=v;let g=Z2(r.getIndexAngle(s)+V),y=Math.round(K4(g)),O=AH(y,p.x,v.w,0,180),k=AH(y,p.y,v.h,90,270);gm(e,t,g,O,k)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=wm(r,i,C)}function gm(r,t,e,i,C){let a=Math.abs(Math.sin(e)),H=Math.abs(Math.cos(e)),V=0,s=0;i.start<t.l?(V=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-V)):i.end>t.r&&(V=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+V)),C.start<t.t?(s=(t.t-C.start)/H,r.t=Math.min(r.t,t.t-s)):C.end>t.b&&(s=(C.end-t.b)/H,r.b=Math.max(r.b,t.b+s))}function _m(r,t,e){let i=r.drawingArea,{extra:C,additionalAngle:a,padding:H,size:V}=e,s=r.getPointPosition(t,i+C+H,a),M=Math.round(K4(Z2(s.angle+f2))),p=Zm(s.y,V.h,M),h=bm(M),v=ym(s.x,V.w,h);return{visible:!0,x:s.x,y:p,textAlign:h,left:v,top:p,right:v+V.w,bottom:p+V.h}}function Sm(r,t){if(!t)return!0;let{left:e,top:i,right:C,bottom:a}=r;return!(D5({x:e,y:i},t)||D5({x:e,y:a},t)||D5({x:C,y:i},t)||D5({x:C,y:a},t))}function wm(r,t,e){let i=[],C=r._pointLabels.length,a=r.options,{centerPointLabels:H,display:V}=a.pointLabels,s={extra:Lr(a)/2,additionalAngle:H?Q1/C:0},M;for(let p=0;p<C;p++){s.padding=e[p],s.size=t[p];let h=_m(r,p,s);i.push(h),V==="auto"&&(h.visible=Sm(h,M),h.visible&&(M=h))}return i}function bm(r){return r===0||r===180?"center":r<180?"left":"right"}function ym(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function Zm(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function Om(r,t,e){let{left:i,top:C,right:a,bottom:H}=e,{backdropColor:V}=t;if(!b1(V)){let s=V3(t.borderRadius),M=B2(t.backdropPadding);r.fillStyle=V;let p=i-M.left,h=C-M.top,v=a-i+M.width,g=H-C+M.height;Object.values(s).some(y=>y!==0)?(r.beginPath(),I7(r,{x:p,y:h,w:v,h:g,radius:s}),r.fill()):r.fillRect(p,h,v,g)}}function km(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let C=t-1;C>=0;C--){let a=r._pointLabelItems[C];if(!a.visible)continue;let H=i.setContext(r.getPointLabelContext(C));Om(e,H,a);let V=$2(H.font),{x:s,y:M,textAlign:p}=a;z7(e,r._pointLabels[C],s,M+V.lineHeight/2,V,{color:H.color,textAlign:p,textBaseline:"middle"})}}function WH(r,t,e,i){let{ctx:C}=r;if(e)C.arc(r.xCenter,r.yCenter,t,0,p2);else{let a=r.getPointPosition(0,t);C.moveTo(a.x,a.y);for(let H=1;H<i;H++)a=r.getPointPosition(H,t),C.lineTo(a.x,a.y)}}function Tm(r,t,e,i,C){let a=r.ctx,H=t.circular,{color:V,lineWidth:s}=t;!H&&!i||!V||!s||e<0||(a.save(),a.strokeStyle=V,a.lineWidth=s,a.setLineDash(C.dash||[]),a.lineDashOffset=C.dashOffset,a.beginPath(),WH(r,e,H,i),a.closePath(),a.stroke(),a.restore())}function Pm(r,t,e){return n0(r,{label:e,index:t,type:"pointLabel"})}var W7=class extends q7{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=B2(Lr(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=V2(t)&&!isNaN(t)?t:0,this.max=V2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Lr(this.options))}generateTickLabels(t){q7.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let C=J1(this.options.pointLabels.callback,[e,i],this);return C||C===0?C:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?xm(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,C){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-C)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,C))}getIndexAngle(t){let e=p2/(this._pointLabels.length||1),i=this.options.startAngle||0;return Z2(t*e+H0(i))}getDistanceFromCenterForValue(t){if(b1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(b1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return Pm(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let C=this.getIndexAngle(t)-f2+i;return{x:Math.cos(C)*e+this.xCenter,y:Math.sin(C)*e+this.yCenter,angle:C}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:C,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:C,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),WH(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:C,border:a}=e,H=this._pointLabels.length,V,s,M;if(e.pointLabels.display&&km(this,H),C.display&&this.ticks.forEach((p,h)=>{if(h!==0||h===0&&this.min<0){s=this.getDistanceFromCenterForValue(p.value);let v=this.getContext(h),g=C.setContext(v),y=a.setContext(v);Tm(this,g,s,H,y)}}),i.display){for(t.save(),V=H-1;V>=0;V--){let p=i.setContext(this.getPointLabelContext(V)),{color:h,lineWidth:v}=p;!v||!h||(t.lineWidth=v,t.strokeStyle=h,t.setLineDash(p.borderDash),t.lineDashOffset=p.borderDashOffset,s=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),M=this.getPointPosition(V,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(M.x,M.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let C=this.getIndexAngle(0),a,H;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(C),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((V,s)=>{if(s===0&&this.min>=0&&!e.reverse)return;let M=i.setContext(this.getContext(s)),p=$2(M.font);if(a=this.getDistanceFromCenterForValue(this.ticks[s].value),M.showLabelBackdrop){t.font=p.string,H=t.measureText(V.label).width,t.fillStyle=M.backdropColor;let h=B2(M.backdropPadding);t.fillRect(-H/2-h.left,-a-p.size/2-h.top,H+h.width,p.size+h.height)}z7(t,V.label,0,-a,p,{color:M.color,strokeColor:M.textStrokeColor,strokeWidth:M.textStrokeWidth})}),t.restore()}drawTitle(){}};I(W7,"id","radialLinear"),I(W7,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:e9.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),I(W7,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),I(W7,"descriptors",{angleLines:{_fallback:"grid"}});var E8={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},i5=Object.keys(E8);function vH(r,t){return r-t}function xH(r,t){if(b1(t))return null;let e=r._adapter,{parser:i,round:C,isoWeekday:a}=r._parseOpts,H=t;return typeof i=="function"&&(H=i(H)),V2(H)||(H=typeof i=="string"?e.parse(H,i):e.parse(H)),H===null?null:(C&&(H=C==="week"&&(Y3(a)||a===!0)?e.startOf(H,"isoWeek",a):e.startOf(H,C)),+H)}function gH(r,t,e,i){let C=i5.length;for(let a=i5.indexOf(r);a<C-1;++a){let H=E8[i5[a]],V=H.steps?H.steps:Number.MAX_SAFE_INTEGER;if(H.common&&Math.ceil((e-t)/(V*H.size))<=i)return i5[a]}return i5[C-1]}function Em(r,t,e,i,C){for(let a=i5.length-1;a>=i5.indexOf(e);a--){let H=i5[a];if(E8[H].common&&r._adapter.diff(C,i,H)>=t-1)return H}return i5[e?i5.indexOf(e):0]}function Fm(r){for(let t=i5.indexOf(r)+1,e=i5.length;t<e;++t)if(E8[i5[t]].common)return i5[t]}function _H(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:C}=J4(e,t),a=e[i]>=t?e[i]:e[C];r[a]=!0}}function $m(r,t,e,i){let C=r._adapter,a=+C.startOf(t[0].value,i),H=t[t.length-1].value,V,s;for(V=a;V<=H;V=+C.add(V,1,i))s=e[V],s>=0&&(t[s].major=!0);return t}function SH(r,t,e){let i=[],C={},a=t.length,H,V;for(H=0;H<a;++H)V=t[H],C[V]=H,i.push({value:V,major:!1});return a===0||!e?i:$m(r,i,C,e)}var G7=class extends J3{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),C=this._adapter=new fp._date(t.adapters.date);C.init(e),j3(i.displayFormats,C.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:xH(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:C,max:a,minDefined:H,maxDefined:V}=this.getUserBounds();function s(M){!H&&!isNaN(M.min)&&(C=Math.min(C,M.min)),!V&&!isNaN(M.max)&&(a=Math.max(a,M.max))}(!H||!V)&&(s(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&s(this.getMinMax(!1))),C=V2(C)&&!isNaN(C)?C:+e.startOf(Date.now(),i),a=V2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(C,a-1),this.max=Math.max(C+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,C=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&C.length&&(this.min=this._userMin||C[0],this.max=this._userMax||C[C.length-1]);let a=this.min,H=this.max,V=Ae(C,a,H);return this._unit=e.unit||(i.autoSkip?gH(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Em(this,V.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Fm(this._unit),this.initOffsets(C),t.reverse&&V.reverse(),SH(this,V,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,C,a;this.options.offset&&t.length&&(C=this.getDecimalForValue(t[0]),t.length===1?e=1-C:e=(this.getDecimalForValue(t[1])-C)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let H=t.length<3?.5:.25;e=O2(e,0,H),i=O2(i,0,H),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,C=this.options,a=C.time,H=a.unit||gH(a.minUnit,e,i,this._getLabelCapacity(e)),V=$1(C.ticks.stepSize,1),s=H==="week"?a.isoWeekday:!1,M=Y3(s)||s===!0,p={},h=e,v,g;if(M&&(h=+t.startOf(h,"isoWeek",s)),h=+t.startOf(h,M?"day":H),t.diff(i,e,H)>1e5*V)throw new Error(e+" and "+i+" are too far apart with stepSize of "+V+" "+H);let y=C.ticks.source==="data"&&this.getDataTimestamps();for(v=h,g=0;v<i;v=+t.add(v,V,H),g++)_H(p,v,y);return(v===i||C.bounds==="ticks"||g===1)&&_H(p,v,y),Object.keys(p).sort(vH).map(O=>+O)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let C=this.options.time.displayFormats,a=this._unit,H=e||C[a];return this._adapter.format(t,H)}_tickFormatFunction(t,e,i,C){let a=this.options,H=a.ticks.callback;if(H)return J1(H,[t,e,i],this);let V=a.time.displayFormats,s=this._unit,M=this._majorUnit,p=s&&V[s],h=M&&V[M],v=i[e],g=M&&h&&v&&v.major;return this._adapter.format(t,C||(g?h:p))}generateTickLabels(t){let e,i,C;for(e=0,i=t.length;e<i;++e)C=t[e],C.label=this._tickFormatFunction(C.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,C=H0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(C),H=Math.sin(C),V=this._resolveTickFontOptions(0).size;return{w:i*a+V*H,h:i*H+V*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,C=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,SH(this,[t],this._majorUnit),C),H=this._getLabelSize(a),V=Math.floor(this.isHorizontal()?this.width/H.w:this.height/H.h)-1;return V>0?V:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let C=this.getMatchingVisibleMetas();if(this._normalized&&C.length)return this._cache.data=C[0].controller.getAllParsedValues(this);for(e=0,i=C.length;e<i;++e)t=t.concat(C[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let C=this.getLabels();for(e=0,i=C.length;e<i;++e)t.push(xH(this,C[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return i8(t.sort(vH))}};I(G7,"id","time"),I(G7,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function _8(r,t,e){let i=0,C=r.length-1,a,H,V,s;e?(t>=r[i].pos&&t<=r[C].pos&&({lo:i,hi:C}=k0(r,"pos",t)),{pos:a,time:V}=r[i],{pos:H,time:s}=r[C]):(t>=r[i].time&&t<=r[C].time&&({lo:i,hi:C}=k0(r,"time",t)),{time:a,pos:V}=r[i],{time:H,pos:s}=r[C]);let M=H-a;return M?V+(s-V)*(t-a)/M:V}var S8=class extends G7{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=_8(e,this.min),this._tableRange=_8(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,C=[],a=[],H,V,s,M,p;for(H=0,V=t.length;H<V;++H)M=t[H],M>=e&&M<=i&&C.push(M);if(C.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(H=0,V=C.length;H<V;++H)p=C[H+1],s=C[H-1],M=C[H],Math.round((p+s)/2)!==M&&a.push({time:M,pos:H/(V-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((C,a)=>C-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(_8(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return _8(this._table,i*this._tableRange+this._minPos,!0)}};I(S8,"id","timeseries"),I(S8,"defaults",G7.defaults);var UH=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),v9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):b1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),C=i.length,a=r.font,H=0,V;for(r.font=e.string,V=0;V<C;++V)H=Math.max(r.measureText(i[V]).width,H);return r.font=a,{height:C*e.lineHeight,width:H}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],C,a,H,V;for(C=0,H=t.length;C<H;++C)V=t[C],a=e.indexOf(V),a===-1?i.push([V,1]):e.splice(a,1);for(C=0,H=e.length;C<H;++C)i.push([e[C],-1]);return i},rasterize:function(r){return Math.round(r*UH)/UH}};function lr(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var C=r.x-e,a=r.y-i,H=Math.sqrt(C*C+a*a);return{x:H?C/H:0,y:H?a/H:-1}}function Dm(r,t,e,i,C){switch(C){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:C*=Math.PI/180,e=Math.cos(C),i=Math.sin(C);break}return{x:r,y:t,vx:e,vy:i}}var Rm=0,GH=1,qH=2,YH=4,QH=8;function F8(r,t,e){var i=Rm;return r<e.left?i|=GH:r>e.right&&(i|=qH),t<e.top?i|=QH:t>e.bottom&&(i|=YH),i}function Bm(r,t){for(var e=r.x0,i=r.y0,C=r.x1,a=r.y1,H=F8(e,i,t),V=F8(C,a,t),s,M,p;!(!(H|V)||H&V);)s=H||V,s&QH?(M=e+(C-e)*(t.top-i)/(a-i),p=t.top):s&YH?(M=e+(C-e)*(t.bottom-i)/(a-i),p=t.bottom):s&qH?(p=i+(a-i)*(t.right-e)/(C-e),M=t.right):s&GH&&(p=i+(a-i)*(t.left-e)/(C-e),M=t.left),s===H?(e=M,i=p,H=F8(e,i,t)):(C=M,a=p,V=F8(C,a,t));return{x0:e,x1:C,y0:i,y1:a}}function $8(r,t){var e=t.anchor,i=r,C,a;return t.clamp&&(i=Bm(i,t.area)),e==="start"?(C=i.x0,a=i.y0):e==="end"?(C=i.x1,a=i.y1):(C=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),Dm(C,a,r.vx,r.vy,t.align)}var D8={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),C=Math.sin(e),a=r.innerRadius,H=r.outerRadius;return $8({x0:r.x+i*a,y0:r.y+C*a,x1:r.x+i*H,y1:r.y+C*H,vx:i,vy:C},t)},point:function(r,t){var e=lr(r,t.origin),i=e.x*r.options.radius,C=e.y*r.options.radius;return $8({x0:r.x-i,y0:r.y-C,x1:r.x+i,y1:r.y+C,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=lr(r,t.origin),i=r.x,C=r.y,a=0,H=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(C=Math.min(r.y,r.base),H=Math.abs(r.base-r.y)),$8({x0:i,y0:C+H,x1:i+a,y1:C,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=lr(r,t.origin);return $8({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},D0=v9.rasterize;function zm(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,C=r.size.width,a=-C/2,H=-i/2;return{frame:{x:a-e.left-t,y:H-e.top-t,w:C+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:H,w:C,h:i}}}function Im(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function Nm(r){return r instanceof s3?D8.arc:r instanceof z5?D8.point:r instanceof I5?D8.bar:D8.fallback}function Wm(r,t,e,i,C,a){var H=Math.PI/2;if(a){var V=Math.min(a,C/2,i/2),s=t+V,M=e+V,p=t+i-V,h=e+C-V;r.moveTo(t,M),s<p&&M<h?(r.arc(s,M,V,-Math.PI,-H),r.arc(p,M,V,-H,0),r.arc(p,h,V,0,H),r.arc(s,h,V,H,Math.PI)):s<p?(r.moveTo(s,e),r.arc(p,M,V,-H,H),r.arc(s,M,V,H,Math.PI+H)):M<h?(r.arc(s,M,V,-Math.PI,0),r.arc(s,h,V,0,Math.PI)):r.arc(s,M,V,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,C)}function Um(r,t,e){var i=e.backgroundColor,C=e.borderColor,a=e.borderWidth;!i&&(!C||!a)||(r.beginPath(),Wm(r,D0(t.x)+a/2,D0(t.y)+a/2,D0(t.w)-a,D0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),C&&a&&(r.strokeStyle=C,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function jm(r,t,e){var i=e.lineHeight,C=r.w,a=r.x,H=r.y+i/2;return t==="center"?a+=C/2:(t==="end"||t==="right")&&(a+=C),{h:i,w:C,x:a,y:H}}function Gm(r,t,e){var i=r.shadowBlur,C=e.stroked,a=D0(e.x),H=D0(e.y),V=D0(e.w);C&&r.strokeText(t,a,H,V),e.filled&&(i&&C&&(r.shadowBlur=0),r.fillText(t,a,H,V),i&&C&&(r.shadowBlur=i))}function qm(r,t,e,i){var C=i.textAlign,a=i.color,H=!!a,V=i.font,s=t.length,M=i.textStrokeColor,p=i.textStrokeWidth,h=M&&p,v;if(!(!s||!H&&!h))for(e=jm(e,C,V),r.font=V.string,r.textAlign=C,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,H&&(r.fillStyle=a),h&&(r.lineJoin="round",r.lineWidth=p,r.strokeStyle=M),v=0,s=t.length;v<s;++v)Gm(r,t[v],{stroked:h,filled:H,w:e.w,x:e.x,y:e.y+e.h*v})}var KH=function(r,t,e,i){var C=this;C._config=r,C._index=i,C._model=null,C._rects=null,C._ctx=t,C._el=e};M5(KH.prototype,{_modelize:function(r,t,e,i){var C=this,a=C._index,H=$2(t2([e.font,{}],i,a)),V=t2([e.color,s2.color],i,a);return{align:t2([e.align,"center"],i,a),anchor:t2([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:t2([e.backgroundColor,null],i,a),borderColor:t2([e.borderColor,null],i,a),borderRadius:t2([e.borderRadius,0],i,a),borderWidth:t2([e.borderWidth,0],i,a),clamp:t2([e.clamp,!1],i,a),clip:t2([e.clip,!1],i,a),color:V,display:r,font:H,lines:t,offset:t2([e.offset,4],i,a),opacity:t2([e.opacity,1],i,a),origin:Im(C._el,i),padding:B2(t2([e.padding,4],i,a)),positioner:Nm(C._el),rotation:t2([e.rotation,0],i,a)*(Math.PI/180),size:v9.textSize(C._ctx,t,H),textAlign:t2([e.textAlign,"start"],i,a),textShadowBlur:t2([e.textShadowBlur,0],i,a),textShadowColor:t2([e.textShadowColor,V],i,a),textStrokeColor:t2([e.textStrokeColor,V],i,a),textStrokeWidth:t2([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,C=t._index,a=t._config,H,V,s,M=t2([a.display,!0],r,C);M&&(H=r.dataset.data[C],V=$1(J1(a.formatter,[H,r]),H),s=b1(V)?[]:v9.toTextLines(V),s.length&&(e=t._modelize(M,s,a,r),i=zm(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,C=e._model,a=e._rects,H;this.visible()&&(i.save(),C.clip&&(H=C.area,i.beginPath(),i.rect(H.left,H.top,H.right-H.left,H.bottom-H.top),i.clip()),i.globalAlpha=v9.bound(0,C.opacity,1),i.translate(D0(t.x),D0(t.y)),i.rotate(C.rotation),Um(i,a.frame,C),qm(i,C.lines,a.text,C),i.restore())}});var Ym=Number.MIN_SAFE_INTEGER||-9007199254740991,Qm=Number.MAX_SAFE_INTEGER||9007199254740991;function A9(r,t,e){var i=Math.cos(e),C=Math.sin(e),a=t.x,H=t.y;return{x:a+i*(r.x-a)-C*(r.y-H),y:H+C*(r.x-a)+i*(r.y-H)}}function jH(r,t){var e=Qm,i=Ym,C=t.origin,a,H,V,s,M;for(a=0;a<r.length;++a)H=r[a],V=H.x-C.x,s=H.y-C.y,M=t.vx*V+t.vy*s,e=Math.min(e,M),i=Math.max(i,M);return{min:e,max:i}}function R8(r,t){var e=t.x-r.x,i=t.y-r.y,C=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/C,vy:(t.y-r.y)/C,origin:r,ln:C}}var XH=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};M5(XH.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=A9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[R8(t[0],t[1]),R8(t[0],t[3])],C,a,H;for(this._rotation!==r._rotation&&i.push(R8(e[0],e[1]),R8(e[0],e[3])),C=0;C<i.length;++C)if(a=jH(t,i[C]),H=jH(e,i[C]),a.max<H.min||H.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[A9({x:t.x,y:t.y},i,e),A9({x:t.x+t.w,y:t.y},i,e),A9({x:t.x+t.w,y:t.y+t.h},i,e),A9({x:t.x,y:t.y+t.h},i,e)]}});function JH(r,t,e){var i=t.positioner(r,t),C=i.vx,a=i.vy;if(!C&&!a)return{x:i.x,y:i.y};var H=e.w,V=e.h,s=t.rotation,M=Math.abs(H/2*Math.cos(s))+Math.abs(V/2*Math.sin(s)),p=Math.abs(H/2*Math.sin(s))+Math.abs(V/2*Math.cos(s)),h=1/Math.max(Math.abs(C),Math.abs(a));return M*=C*h,p*=a*h,M+=t.offset*C,p+=t.offset*a,{x:i.x+M,y:i.y+p}}function Km(r,t){var e,i,C,a;for(e=r.length-1;e>=0;--e)for(C=r[e].$layout,i=e-1;i>=0&&C._visible;--i)a=r[i].$layout,a._visible&&C._box.intersects(a._box)&&t(C,a);return r}function Xm(r){var t,e,i,C,a,H,V;for(t=0,e=r.length;t<e;++t)i=r[t],C=i.$layout,C._visible&&(V=new Proxy(i._el,{get:(s,M)=>s.getProps([M],!0)[M]}),a=i.geometry(),H=JH(V,i.model(),a),C._box.update(H,a,i.rotation()));return Km(r,function(s,M){var p=s._hidable,h=M._hidable;p&&h||h?M._visible=!1:p&&(s._visible=!1)})}var x9={prepare:function(r){var t=[],e,i,C,a,H;for(e=0,C=r.length;e<C;++e)for(i=0,a=r[e].length;i<a;++i)H=r[e][i],t.push(H),H.$layout={_box:new XH,_hidable:!1,_visible:!0,_set:e,_idx:H._index};return t.sort(function(V,s){var M=V.$layout,p=s.$layout;return M._idx===p._idx?p._set-M._set:p._idx-M._idx}),this.update(t),t},update:function(r){var t=!1,e,i,C,a,H;for(e=0,i=r.length;e<i;++e)C=r[e],a=C.model(),H=C.$layout,H._hidable=a&&a.display==="auto",H._visible=C.visible(),t|=H._hidable;t&&Xm(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,C,a,H,V;for(e=0,i=t.length;e<i;++e)C=t[e],a=C.$layout,a._visible&&(H=C.geometry(),V=JH(C._el,C.model(),H),a._box.update(V,H,C.rotation()),C.draw(r,V))}},Jm=function(r){if(b1(r))return null;var t=r,e,i,C;if(Z1(r))if(!b1(r.label))t=r.label;else if(!b1(r.r))t=r.r;else for(t="",e=Object.keys(r),C=0,i=e.length;C<i;++C)t+=(C!==0?", ":"")+e[C]+": "+r[e[C]];return""+t},th={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Jm,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},C5="$datalabels",tn="$default";function eh(r,t){var e=r.datalabels,i={},C=[],a,H;return e===!1?null:(e===!0&&(e={}),t=M5({},[t,e]),a=t.labels||{},H=Object.keys(a),delete t.labels,H.length?H.forEach(function(V){a[V]&&C.push(M5({},[t,a[V],{_key:V}]))}):C.push(t),i=C.reduce(function(V,s){return z1(s.listeners||{},function(M,p){V[p]=V[p]||{},V[p][s._key||tn]=M}),delete s.listeners,V},{}),{labels:C,listeners:i})}function Mr(r,t,e,i){if(t){var C=e.$context,a=e.$groups,H;t[a._set]&&(H=t[a._set][a._key],H&&J1(H,[C,i])===!0&&(r[C5]._dirty=!0,e.update(C)))}}function rh(r,t,e,i,C){var a,H;!e&&!i||(e?i?e!==i&&(H=a=!0):H=!0:a=!0,H&&Mr(r,t.leave,e,C),a&&Mr(r,t.enter,i,C))}function ih(r,t){var e=r[C5],i=e._listeners,C,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=x9.lookup(e._labels,t);else if(t.type!=="mouseout")return;C=e._hovered,e._hovered=a,rh(r,i,C,a,t)}}function Ch(r,t){var e=r[C5],i=e._listeners.click,C=i&&x9.lookup(e._labels,t);C&&Mr(r,i,C,t)}var en={id:"datalabels",defaults:th,beforeInit:function(r){r[C5]={_actives:[]}},beforeUpdate:function(r){var t=r[C5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,C=r[C5],a=C._datasets[i]=[],H=r.isDatasetVisible(i),V=r.data.datasets[i],s=eh(V,e),M=t.meta.data||[],p=r.ctx,h,v,g,y,O,k,P,$;for(p.save(),h=0,g=M.length;h<g;++h)if(P=M[h],P[C5]=[],H&&P&&r.getDataVisibility(h)&&!P.skip)for(v=0,y=s.labels.length;v<y;++v)O=s.labels[v],k=O._key,$=new KH(O,p,P,h),$.$groups={_set:i,_key:k||tn},$.$context={active:!1,chart:r,dataIndex:h,dataset:V,datasetIndex:i},$.update($.$context),P[C5].push($),a.push($);p.restore(),M5(C._listeners,s.listeners,{merger:function(D,K,G){K[D]=K[D]||{},K[D][t.index]=G[D],C._listened=!0}})},afterUpdate:function(r){r[C5]._labels=x9.prepare(r[C5]._datasets)},afterDatasetsDraw:function(r){x9.draw(r,r[C5]._labels)},beforeEvent:function(r,t){if(r[C5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":ih(r,e);break;case"click":Ch(r,e);break}}},afterEvent:function(r){var t=r[C5],e=t._actives,i=t._actives=r.getActiveElements(),C=v9.arrayDiff(e,i),a,H,V,s,M,p,h;for(a=0,H=C.length;a<H;++a)if(M=C[a],M[1])for(h=M[0].element[C5]||[],V=0,s=h.length;V<s;++V)p=h[V],p.$context.active=M[1]===1,p.update(p.$context);(t._dirty||C.length)&&(x9.update(t._labels),r.render()),delete t._dirty}};function B8(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var L0=class extends L1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=y0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return Z;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,C=e.secondaryLabel!==void 0;return _`
      <div
        class="wsfc-forecast-slot-time ${e.className||""} ${C?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${e.icon?_`<ha-icon .icon=${e.icon}></ha-icon>`:e.label}</span
        >
        ${C?_`<span class="wsfc-forecast-slot-time-secondary"
              >${e.secondaryLabel}</span
            >`:Z}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${i}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let e=$6(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let M=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:t3(this.hass,this.forecast.datetime),secondaryLabel:M}}if(this.forecastType==="daily")return e?{label:t3(this.hass,this.forecast.datetime),secondaryLabel:Oo(this.hass,this.forecast.datetime)}:{label:t3(this.hass,this.forecast.datetime)};let C=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):Fo(C),H=C,V;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:M,sunset:p}=this.suntimesInfo,h=v=>{let g=new Date(C);return g.setHours(v.getHours(),v.getMinutes()),g.getTime()>=C.getTime()&&g.getTime()<=a.getTime()};h(M)?(V="wsfc-sunrise",H=M):h(p)&&(V="wsfc-sunset",H=p)}if(V){let M=To(this.hass,H);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:M.suffix?`${M.time} ${M.suffix}`:M.time,className:V,icon:V==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:M.time,secondaryLabel:e?M.suffix:void 0,className:V}}let s=ko(this.hass,H);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:s.hour}:{label:s.hour,secondaryLabel:e?s.suffix:void 0}}};L0.styles=g1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,Q([e1({attribute:!1})],L0.prototype,"hass",2),Q([e1({attribute:!1})],L0.prototype,"forecast",2),Q([e1({attribute:!1})],L0.prototype,"forecastType",2),Q([e1({attribute:!1})],L0.prototype,"isTwiceDailyEntity",2),Q([e1({attribute:!1})],L0.prototype,"config",2),L0=Q([n2("wsfc-forecast-header-items")],L0);var c3=class extends L1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?_`
      <div class="dropdown">
        ${this.options.map(e=>this._renderOption(e))}
      </div>
    `:Z}_renderOption(e){let i=this.value===e.value;return _`
      <div
        class="menu-item ${i?"selected":""}"
        @click=${C=>this._onSelected(C,e.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${e.icon}></ha-icon>
          <span>${e.label}</span>
        </div>
      </div>
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};c3.styles=g1`
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
  `,Q([e1({type:Boolean})],c3.prototype,"open",2),Q([e1({attribute:!1})],c3.prototype,"options",2),Q([e1({attribute:!1})],c3.prototype,"value",2),c3=Q([n2("wsfc-chart-attribute-selector")],c3);k2.register(F0,I5,$0,c5,z5,M3,j7,en);var rn=16384,oh=6,z8=12,ah=10,Hh=10,nh=130,K2=class extends L1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=Io;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new F7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let C=B5(i,this._chart),a=this._chart.scales.x;if(!a)return;let H=a.getValueForPixel(C.x);if(H==null)return;let V=a.getLabelForValue(H),s=this._chart.data.labels?.indexOf(V)??-1;if(s===-1)return;let M=this.safeForecast[s];if(!M)return;let p={selectedForecast:M,action:e.detail.action};o2(this,"action",p)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let C=e.has("forecastType")||e.has("itemWidth");this.updateChartData(C)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return Z;let i=e.length,C=Math.max(i-1,0),a=this._getChartFontSize(),H=nh+Math.max(0,a-z8),s={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${C} * var(--forecast-item-gap))`},M={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},p={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${H}px`};return _`
      <div
        class="${N3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
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
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":$5[this._selectedAttribute]}
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
        class="${N3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${Y2(s)}
          .actionHandler=${i0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${Y2(M)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${Y2(p)}
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
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new k2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),C=this._chart.config.type,a=i.type;if(C!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let C=parseFloat(i);if(!isNaN(C))return C}return z8}_getBarLabelOffset(){return-22-(this._getChartFontSize()-z8)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),C=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),H=a+Hh,V=ah+(a-z8),s={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:H,bottom:V,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:C,dash:[4,4]},grid:{offset:!0,display:!0,color:C,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,s);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,s);default:return this._getDefaultWeatherConfig(e,i,s)}}_getDefaultWeatherConfig(e,i,C){let{minTemp:a,maxTemp:H}=this.computeScaleLimits(e),V=i.getPropertyValue("--wfc-chart-temp-high-label-color"),s=i.getPropertyValue("--wfc-chart-temp-low-label-color"),M=i.getPropertyValue("--wfc-chart-precipitation-label-color"),p=i.getPropertyValue("--wfc-precipitation-bar-color"),h=P7(l5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),v=this.getTemperatureLineStyle(i,"temperature"),g=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(y=>y.datetime),datasets:[{data:e.map(y=>y.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:V,formatter:y=>y!=null?`${C0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...v},{data:e.map(y=>y.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:s,formatter:y=>y!=null?`${C0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...g},{type:"bar",data:e.map(y=>y.precipitation&&y.precipitation!==0?y.precipitation:null),backgroundColor:p,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:M,formatter:y=>Go(y,l5(this.hass,this.weatherEntity,"precipitation"))}}]},options:$3({},C,{scales:{yTemp:{type:"linear",display:!1,min:a,max:H,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:h,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,C){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(H=>H.datetime),datasets:[{type:"bar",data:e.map(H=>H.uv_index!=null?Math.round(H.uv_index):0),backgroundColor:e.map(H=>i.getPropertyValue(B8(H.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:$3({},C,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,C){let a=this._selectedAttribute,H=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",V=i.getPropertyValue(H)||i.getPropertyValue("--wfc-chart-default-line-color"),s=i.getPropertyValue("--wfc-chart-label-color"),M=l5(this.hass,this.weatherEntity,a),p=e.map(k=>k[a]??0),h=Math.max(...p),v=Math.min(...p),g=h-v||1,y=h+g*.2,O=v-g*.1;return{type:"line",data:{labels:e.map(k=>k.datetime),datasets:[{data:e.map(k=>k[a]??null),borderColor:V,pointBackgroundColor:V,fill:!1,datalabels:{anchor:"end",align:"top",color:s,formatter:(k,P)=>{if(k===null)return null;let $=`${k} ${M}`;return $.length>oh&&P.dataIndex%2!==0?null:$}}}]},options:$3({},C,{scales:{y:{display:!1,min:O,max:y}}})}}getTemperatureLineStyle(e,i){let C=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(C),H=V=>this.computeTemperatureLineColor(V,e,a);return{borderColor:H,pointBorderColor:H,pointBackgroundColor:H,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,C){if(!this.config.forecast?.use_color_thresholds)return C;let a=e.chart,{ctx:H,chartArea:V,scales:s}=a;if(!V||!s.yTemp)return C;if(this._temperatureColors===null){let $=i;this._temperatureColors={cold:$.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:$.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:$.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:$.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:$.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:$.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let M=s.yTemp,{min:p,max:h}=M;if(!Number.isFinite(p)||!Number.isFinite(h))return C;let v=H.createLinearGradient(0,V.bottom,0,V.top),g=$=>Math.max(0,Math.min(1,($-p)/(h-p))),O=l5(this.hass,this.weatherEntity,"temperature")==="\xB0F",k=$=>O?$*9/5+32:$,P=[{pos:g(k(-10)),color:this._temperatureColors.cold},{pos:g(k(0)),color:this._temperatureColors.freezing},{pos:g(k(8)),color:this._temperatureColors.chilly},{pos:g(k(18)),color:this._temperatureColors.mild},{pos:g(k(26)),color:this._temperatureColors.warm},{pos:g(k(34)),color:this._temperatureColors.hot}].sort(($,D)=>$.pos-D.pos);for(let $ of P)v.addColorStop($.pos,$.color);return v}computeScaleLimits(e){let i=e.map(D=>D.temperature),C=e.map(D=>D.templow??D.temperature),a=Math.min(...C),H=Math.max(...i),V=e.some(D=>D.templow!==void 0&&D.templow!==null),s=Math.max(H-a,10),M=.2,p=V?.35:.1,h=s*M,v=s*p,g=2,y=V?5:1,O=Math.max(h,g),k=Math.max(v,y),P=Math.floor(a-k),$=Math.ceil(H+O);return P>=$&&($=P+1),{minTemp:P,maxTemp:$}}renderHeaderItems(e){let i=[],C;return e.forEach((a,H)=>{if(a.datetime){if(this.forecastType==="hourly"){let V=t3(this.hass,a.datetime);C!==V&&(C=V,i.push(_`<div class="wsfc-day-indicator-container">
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
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((rn+e)/(this.itemWidth+e));return this.forecast.length>i?(F5.debug(`Truncating forecast to ${i} items to stay under ${rn}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=C=>C==="temperature_and_precipitation"?!0:e.some(a=>a[C]!=null);return B6.filter(i).map(C=>({label:C==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,C)||C,icon:C==="temperature_and_precipitation"?"mdi:water-thermometer":$5[C],value:C}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};Q([e1({attribute:!1})],K2.prototype,"hass",2),Q([e1({attribute:!1})],K2.prototype,"weatherEntity",2),Q([e1({attribute:!1})],K2.prototype,"forecast",2),Q([e1({attribute:!1})],K2.prototype,"config",2),Q([e1({attribute:!1})],K2.prototype,"forecastType",2),Q([e1({attribute:!1})],K2.prototype,"isTwiceDailyEntity",2),Q([e1({attribute:!1})],K2.prototype,"itemWidth",2),Q([e1({attribute:!1})],K2.prototype,"isScrollable",2),Q([D4("canvas")],K2.prototype,"_canvas",2),Q([q2()],K2.prototype,"_settingsOpen",2),Q([q2()],K2.prototype,"_selectedAttribute",2),K2=Q([n2("wsfc-forecast-chart")],K2);var d3=class extends L1{createRenderRoot(){return this}render(){if(!this.forecast)return Z;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=Uo(this.forecast);return _`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?_`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:Z}
      </div>
      <div
        class=${N3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};Q([e1({attribute:!1})],d3.prototype,"hass",2),Q([e1({attribute:!1})],d3.prototype,"forecast",2),Q([e1({attribute:!1})],d3.prototype,"config",2),Q([e1({attribute:!1})],d3.prototype,"maxPrecipitation",2),d3=Q([n2("wsfc-forecast-details")],d3);var W5=class extends L1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return Z;let e=this.forecast.wind_speed||0,i=z6(this.forecast),C=this.radius,a=4,H=10,V=C+H,s=C+H,M=2*(C+H),p=Math.round(e),h=this.computeLineColor(),v=i;v!==void 0&&this.type==="direction"&&(v=(v+180)%360);let g=Number.isFinite(v),y=s-C,O=C*.55,k=y-O,P=C*.45;return _`
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
          r="${C}"
          stroke="${h}"
          stroke-width="${a}"
          fill="none"
        />
        ${g?y1` <g transform="rotate(${v} ${V} ${s})">
              <polygon
                points="${V-P},${y} ${V+P},${y} ${V},${k}"
                fill="${h}"
              />
            </g>`:Z}
        <text x="${V}" y="${s}" dy="0.1em">${p}</text>
      </svg>
    `}computeLineColor(){let e=I4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};W5.styles=g1`
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
  `,Q([e1({attribute:!1})],W5.prototype,"hass",2),Q([e1({attribute:!1})],W5.prototype,"weatherEntity",2),Q([e1({attribute:!1})],W5.prototype,"forecast",2),Q([e1({attribute:!1})],W5.prototype,"size",2),Q([e1({attribute:!1})],W5.prototype,"radius",2),Q([e1({attribute:!1})],W5.prototype,"type",2),W5=Q([n2("wsfc-wind-indicator")],W5);var p3=class extends L1{createRenderRoot(){return this}render(){return this.forecast?_`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??Z}
      </div>
    `:Z}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?_`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),C=B8(e);return _`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${Y2({color:`var(${C})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return _`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;F5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};Q([e1({attribute:!1})],p3.prototype,"hass",2),Q([e1({attribute:!1})],p3.prototype,"weatherEntity",2),Q([e1({attribute:!1})],p3.prototype,"forecast",2),Q([e1({attribute:!1})],p3.prototype,"config",2),p3=Q([n2("wsfc-forecast-info")],p3);var U5=class extends L1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new F7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let C=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=C?.dataset.index?Number(C.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let C={selectedForecast:i,action:e.detail.action};o2(this,"action",C)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return Z;let e=[],i=P7(l5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),C;return this.forecast.forEach((a,H)=>{if(a.datetime){if(this.forecastType==="hourly"){let V=t3(this.hass,a.datetime);C!==V&&(C=V,e.push(_`<div class="wsfc-day-indicator-container">
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
        class="${N3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${i0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};Q([e1({attribute:!1})],U5.prototype,"hass",2),Q([e1({attribute:!1})],U5.prototype,"weatherEntity",2),Q([e1({attribute:!1})],U5.prototype,"forecast",2),Q([e1({attribute:!1})],U5.prototype,"forecastType",2),Q([e1({attribute:!1})],U5.prototype,"isTwiceDailyEntity",2),Q([e1({attribute:!1})],U5.prototype,"config",2),Q([e1({attribute:!1})],U5.prototype,"isScrollable",2),U5=Q([n2("wsfc-forecast-simple")],U5);var u3=class extends L1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=Cn.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return Z;let e=this.getClasses(),i=this.getWeatherStateIcon();return _`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:C}=this.getCustomWeatherIconPath();return _` <img src="${i}" alt="${C}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?_`
        <div
          style="background-size: cover;${Y2({"background-image":e})}"
        ></div>
      `:Cn.has(this.state)?_`${ch(this.state,this.isNightTime)}`:Z}};Q([e1({attribute:!1})],u3.prototype,"config",2),Q([e1({attribute:!1})],u3.prototype,"classes",2),Q([e1({attribute:!1})],u3.prototype,"isNightTime",2),Q([e1({attribute:!1})],u3.prototype,"state",2),u3=Q([n2("wsfc-weather-condition-icon-provider")],u3);var Cn=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),Vh=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),sh=new Set(["hail","rainy","pouring"]),Lh=new Set(["windy","windy-variant"]),lh=new Set(["snowy","snowy-rainy"]),Mh=new Set(["lightning","lightning-rainy"]),ch=(r,t)=>y1`
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
  ${Vh.has(r)?y1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${sh.has(r)?y1`
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
  ${Lh.has(r)?y1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${lh.has(r)?y1`
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
  ${Mh.has(r)?y1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var m3=class extends L1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(dh(e))||g5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return Z;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==Z);return e.length===0?Z:_`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return Z;let{name:i,entity:C,label:a,icon:H}=e,V;if(C?V=I6(this.hass,this.weatherEntity,this.config,i,C):i&&(V=E7(this.hass,this.weatherEntity,this.config,i)),!V)return Z;let s=C?this.hass.states[C]||this.weatherEntity:this.weatherEntity,M=C?this.hass.states[C]:void 0,p=M&&!i?_`
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
              .icon=${Yo(i,H,M)}
            ></ha-attribute-icon>
          `;return _`
      <div class="wsfc-current-attribute">
        ${p}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,M)}
        </span>
        <span class="wsfc-current-attribute-value">${V}</span>
      </div>
    `}resolveLabel(e,i,C){return i||(e&&R2.includes(e)?this.localize(e):C?.attributes?.friendly_name??(e?g5(e).replace(/_/g," "):""))}};Q([e1({attribute:!1})],m3.prototype,"hass",2),Q([e1({attribute:!1})],m3.prototype,"weatherEntity",2),Q([e1({attribute:!1})],m3.prototype,"attributeConfigs",2),Q([e1({attribute:!1})],m3.prototype,"config",2),m3=Q([n2("wsfc-current-weather-attributes")],m3);var dh=J0(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var cr={...$5,precipitation:"mdi:weather-rainy"},z2=class extends L1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,C=i?{...this.config,entity:i}:this.config;R4(this,this.hass,C,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return Z;let{state:e}=this.weatherEntity,i=this.getTemperature(),C=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),H=this.getConfiguredAttributes(),V=this.config.name||this.weatherEntity.attributes.friendly_name;return _`
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
                    .actionHandler=${i0({stopPropagation:!0,hasHold:b0(this.config.hold_action),hasDoubleClick:b0(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${i}
                  </div>
                `:Z}
            ${C?_`
                  <div class="wsfc-current-secondary-info">
                    ${C.stateObj?_`
                          <ha-state-icon
                            class="wsfc-current-secondary-icon wsfc-secondary"
                            .hass=${this.hass}
                            .stateObj=${C.stateObj}
                            .icon=${C.icon}
                          ></ha-state-icon>
                        `:C.icon?_`
                            <ha-attribute-icon
                              class="wsfc-current-secondary-icon wsfc-secondary"
                              .hass=${this.hass}
                              .icon=${C.icon}
                            ></ha-attribute-icon>
                          `:Z}
                    <span class="wsfc-current-secondary-value wsfc-secondary"
                      >${C.value}</span
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
    `}isNightTime(){let e=y0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?R2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return C0(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?C0(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let s=typeof i=="string"?{name:i}:i,{name:M,entity:p,icon:h}=s;if(p){let v=I6(this.hass,this.weatherEntity,this.config,M,p);if(v!=null){let g=this.hass.states[p];return M?{icon:h??g?.attributes?.icon??cr[M],value:v}:{stateObj:g,icon:h,value:v}}}else if(M&&M in this.weatherEntity.attributes){let g=cr[M],y=E7(this.hass,this.weatherEntity,this.config,M);if(y!=null)return{icon:h??g,value:y}}}let C=this.getTemperatureExtrema();if(C)return{value:`${C.high} / ${C.low}`};let a,H;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,H="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,H="humidity";else return null;return{icon:cr[H],value:this.hass.formatEntityAttributeValue(this.weatherEntity,H,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=Z7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,C=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(Z7(a.datetime)===e){let H=a.templow??a.temperature,V=a.temperature;H!=null&&H<i&&(i=H),V!=null&&V>C&&(C=V)}return i===1/0||C===-1/0?null:{high:C0(this.hass,this.weatherEntity,C,this.config.current?.temperature_precision),low:C0(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};Q([e1({attribute:!1})],z2.prototype,"hass",2),Q([e1({attribute:!1})],z2.prototype,"weatherEntity",2),Q([e1({attribute:!1})],z2.prototype,"hourlyForecast",2),Q([e1({attribute:!1})],z2.prototype,"dailyForecast",2),Q([e1({attribute:!1})],z2.prototype,"config",2),z2=Q([n2("wsfc-current-weather")],z2);var on=`:host {
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
`;var an="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var Hn=g1`
  ${x0(on)}

  :host {
    --moon-texture: url("${x0(an)}");
  }
`;var g9=10,uh=3,I8=14,mh=75,hh=75,fh=4,Ah=3,nn=2,vh=[1.45,.7],Vn=90,xh=50,gh=.15,j5=class extends L1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],C=Math.round(i?.contentRect.height||0);this._containerHeight!==C&&(this._containerHeight=C,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),C=this.hass?.themes?.darkMode;i?.themes?.darkMode!==C&&(this._isDark=C??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?_`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return Z}})}
    `:Z}computeParticles(){let e=[];return this.getActiveEffects().forEach(C=>{switch(C){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],C=Math.round(e/g9*mh),a=Math.max(5,C),H=115/a;for(let V=0;V<a;V++){let s=-15+V*H+B1(0,H*.5),M=Math.random(),p=M*5+2,h=4.5/(M+.5)+B1(0,.8),v=B1(0,5,!0).toFixed(1),g=M*.7+.5,y=M<.3?1.5-M*3:M>.9?.5:0,O=p*.9,k=(10+M*25).toFixed(0),P=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${s.toFixed(1)}%`,delay:v,duration:h.toFixed(1),size:p.toFixed(0),opacity:g.toFixed(1),blur:y.toFixed(1),shadowSpread:O.toFixed(1),driftAmplitude:k,driftFrequency:P})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],C=Math.round(e/g9*hh),a=Math.max(10,C),H=100/a;for(let V=0;V<a;V++){let s=V*H+B1(0,H*.8),M=B1(.2,.5,!0),p=B1(.4,.7,!0),h=B1(.85,1,!0),v=this._containerHeight*h;i.push({type:"rain",x:`${s.toFixed(1)}%`,delay:M.toFixed(2),duration:p.toFixed(2),landingPosY:v.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let H=0;H<30;H++){let V=H%6,s=Math.floor(H/6),M=100/6,p=30/5,h=B1(V*M+M*.15,(V+1)*M-M*.15),v=B1(s*p+p*.15,(s+1)*p-p*.15),g=B1(1,3),y=B1(.3,1,!0),O=B1(0,5,!0);e.push({type:"star",x:`${h.toFixed(0)}`,y:`${v.toFixed(0)}`,size:`${g}`,opacity:y.toFixed(2),delay:O.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let C=new Set,a=M=>i===!0?!0:Array.isArray(i)?i.includes(M):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&C.add("rain"),e.includes("snowy")&&a("snow")&&C.add("snow"),e.includes("lightning")&&a("lightning")&&C.add("lightning");let H=e==="sunny"||e==="clear-night",V=e==="cloudy",s=e==="partlycloudy";return(H||s||V)&&a("sky")&&C.add("sky"),(H||s)&&(this.isNightTime()?a("moon")&&C.add("moon"):a("sun")&&C.add("sun")),(V||s)&&a("cloud")&&C.add("cloud"),Array.from(C)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?y0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return _`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return _`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>_`<div
                class="sun-ray"
                style="${Y2({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${B1(0,360)}`,height:`${B1(100,200)}`,width:`${B1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),C=e?fh:Ah,a=100/C,H=[];for(let V=0;V<C;V++){let s=V%nn,M=s===0,p=V*a+B1(0,a*.5)-a*.25,h=e?M?B1(140,200):B1(215,285):M?B1(110,165):B1(180,240),v=h*B1(.38,.5,!0),g=e?M?B1(-26,-12):B1(-16,-2):M?B1(-10,4):B1(-4,12),y=e?M?B1(.36,.5,!0):B1(.5,.64,!0):M?B1(.68,.8,!0):B1(.82,.92,!0);i&&(y*=.7),H.push({type:"cloud",variant:e?"grey":"white",night:i,layer:s,shape:B1(1,5),flip:B1(0,1)===1,x:p.toFixed(1),y:g.toFixed(0),width:h.toFixed(0),height:v.toFixed(0),opacity:y.toFixed(2)})}return H}computeCloudDrift(){let e=this.currentForecast,i=e&&I4(this.hass,this.weatherEntity,e)||0,C=Math.min(i,I8)/I8,a=e?z6(e):void 0,H=a!==void 0?-Math.sin(a*Math.PI/180):0,V=Math.max(gh,C*Math.abs(H));return{duration:Vn-V*(Vn-xh),driftRight:H>=0}}renderCloudFilter(){return _`
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
    `}renderClouds(){let e=this._particles.filter(H=>H.type==="cloud");if(!e.length)return Z;let{duration:i,driftRight:C}=this.computeCloudDrift(),a=H=>{let V=["cloud",`cloud-shape-${H.shape}`,H.variant==="grey"?"grey":"",H.night?"night":""].filter(Boolean).join(" ");return _`<div
        class="${V}"
        style="${Y2({left:`${H.x}%`,top:`${H.y}px`,width:`${H.width}px`,height:`${H.height}px`,opacity:H.opacity,transform:H.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return _`
      ${this.renderCloudFilter()}
      ${Array.from({length:nn},(H,V)=>{let s=e.filter(p=>p.layer===V);if(!s.length)return Z;let M=Math.round(i*(vh[V]??1)/5)*5;return _`<div
          class="cloud-track ${C?"drift-right":""}"
          style="${Y2({"--cloud-drift-duration":`${M}s`})}"
        >
          <div class="cloud-set">${s.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${s.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>_`
        <div
          class="snowflake-path"
          style="${Y2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>_`
        <div
          class="raindrop-path"
          style="${Y2({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return _` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:Po(this.hass,new Date);return _`
      ${this._particles.filter(i=>i.type==="star").map(i=>_`
          <div
            class="star"
            style="${Y2({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?qt(e.fraction,e.litRight):qt(1,!0);return _`
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
        <path d=${Eo(e.fraction,e.litRight)}></path>
      </svg>
    `:Z}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=l5(this.hass,this.weatherEntity,"precipitation"),C=P7(i,"hourly");if(C>0){let a=e/C*g9;return Math.min(g9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?g9:uh}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let C=I4(this.hass,this.weatherEntity,i)||0,a=e?15:35,H=Math.min(C,I8)/I8,V=i.wind_bearing*Math.PI/180,s=Math.sin(V),p=Math.pow(H,e?.8:.5);return s*p*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};j5.styles=Hn,Q([e1({attribute:!1})],j5.prototype,"hass",2),Q([e1({attribute:!1})],j5.prototype,"weatherEntity",2),Q([e1({attribute:!1})],j5.prototype,"currentForecast",2),Q([e1({attribute:!1})],j5.prototype,"config",2),Q([q2()],j5.prototype,"_isDark",2),Q([q2()],j5.prototype,"_containerHeight",2),j5=Q([n2("wsfc-animation-provider")],j5);var sn={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},Sh=1e3,u2=class extends L1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):R4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{R4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),C=i.find(a=>a==="weather.home")||i[0]||"";return{...sn,entity:C}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>I3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>I3))throw new Error(`temperature_precision must be 0 or greater and at most ${I3}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=$3({},sn,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:C}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:C}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,C=this.config?.forecast?.mode==="chart",a=1,H=1;return e&&(a+=2,H+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(C?(a+=3,H+=3):(a+=2,H+=2)),{rows:a,minRows:H,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return So(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return Z;let e=this.config.entity,i=this.hass.states[e];if(!i)return _`<hui-warning>
        ${Zo(this.hass,e)}
      </hui-warning>`;let C=_5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",H=this.getCurrentForecast();return _`
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
                .actionHandler=${i0({hasHold:b0(this.config.hold_action),hasDoubleClick:b0(this.config.double_tap_action)})}
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
                      .isTwiceDailyEntity=${C}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:_`<wsfc-forecast-simple
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
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,C=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:C}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let C=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,H=oe(i,this._hourlyForecastEvent,"hourly"),V=oe(i,this._dailyForecastEvent,_5(e));if(!H&&!V)return;this._dailyForecastData=V?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let s=this.config?.forecast?.hourly_group_size||0;s>1&&H?.forecast?this._hourlyForecastData=qo(H.forecast,s):this._hourlyForecastData=H?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let M=this.getCurrentForecast();if(!M||M.length===0){let v=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,g=_5(e),y=g!==void 0,O=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(v||this._currentForecastType==="hourly"&&!z4(e,"hourly")||O&&!y)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(F5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=g||"daily"):O&&this._hourlyForecastData&&(F5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let p=this.getCurrentForecast().length,h=(this._currentForecastType==="hourly"?C:a)??0;p!==h&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",C=i,a=C?this._hourlyForecastData:this._dailyForecastData,H=this.hass?.states[this.config.entity],V=_5(H)||"daily";if(!a||a.length===0){F5.debug(`Cannot toggle to ${C?"hourly":V} forecast - no data available`);return}this._currentForecastType=i?"hourly":V,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(C)this.scrollToForecastItem(e);else{let s=this._dailyForecastData?.[0];s&&this.scrollToForecastItem(s,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let C=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!C)return;let a=Z7(e.datetime),H=this.getCurrentForecast(),V=H.findIndex(h=>Z7(h.datetime)===a),s=V!==-1?V:H.length-1,M=this._currentItemWidth||0,p=s*M;C.scrollTo({left:p,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},Sh)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let C=await e;if(!C)return;await C()}catch(C){if(re(C))return;F5.warn(`Error unsubscribing from ${i} forecast:`,C)}}createForecastSubscription(e,i,C){return Promise.resolve(Wo(this.hass,this.config.entity,e,i)).catch(a=>{if(Bo(a)){setTimeout(C,2e3);return}re(a)||F5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!jo(this.hass.states[this.config.entity])){F5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let C=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",H=a!=="hourly",V=a!=="daily",s=_5(C);s==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!H&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!V&&this._currentForecastType==="hourly"&&(this._currentForecastType=s||"daily"),s&&H&&(this._dailySubscription=this.createForecastSubscription(s,M=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=M,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),V&&z4(C,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",M=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=M,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let C=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/C),H=i.length,V=H*a,s=e-V,M=s>0?s/(H-1):0;this._currentItemWidth=a+M,this._isScrollable=i.length>C,this._haCard.style.setProperty("--forecast-item-gap",`${M}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),C=this.hass;if(!i||!C)return!1;let a=i.states[this.config.entity],H=C.states[this.config.entity];return!a||!H?!1:Object.values(Ce).some(V=>a.attributes[V]!==H.attributes[V])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),C=this.hass;return i?.connected===!1&&C?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),C=this.hass;if(!i||!C)return!1;let a=i.states[this.config.entity],H=C.states[this.config.entity];return!a||!H?!1:a.attributes.supported_features!==H.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),C=this.hass;if(!C)return!1;let a=i?.states[this.config.entity],H=C.states[this.config.entity];return!!a!=!!H}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),C=this.hass;return!i||!C?!1:$o(this.config).some(a=>i.states[a]!==C.states[a])}};u2.styles=xo,Q([e1({attribute:!1})],u2.prototype,"hass",2),Q([q2()],u2.prototype,"config",2),Q([q2()],u2.prototype,"_dailyForecastEvent",2),Q([q2()],u2.prototype,"_hourlyForecastEvent",2),Q([q2()],u2.prototype,"_currentItemWidth",2),Q([q2()],u2.prototype,"_currentForecastType",2),Q([q2()],u2.prototype,"_isScrollable",2),Q([D4("ha-card")],u2.prototype,"_haCard",2),Q([D4(".wsfc-forecast-container")],u2.prototype,"_forecastContainer",2);var l0=f4(B4(),1);var Ln="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var ln="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var wh={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},G5=class extends L1{constructor(){super(...arguments);this._schema=J0((e,i,C)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(C),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:R6.map(i=>({value:i,label:g5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:R2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||g5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:R2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||g5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:B6.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||g5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],C=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),C.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),C.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:C},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(C=>{let a=wh[C];return[{name:`current.attribute_entity_${C}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${C}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${C}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:I3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:I3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=t7(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=t7(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let C=t7(this._config.current?.show_attributes);C[e]=i.detail.value,this._commitCustomAttributes(C)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let C=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${C}`)||g5(C).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let C=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${C}`)||g5(C).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let C=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${C}`)||g5(C).replace(/_/g," "),H=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${H}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let C=this.hass.states[this._config.entity];C&&(i=this.hass.formatEntityAttributeName(C,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return Z;let e=N8(this._config),i=this._getSelectedAttributes(e),C=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return _`
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
    `}_renderCustomAttributes(){let e=t7(this._config.current?.show_attributes);return _`
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
            <ha-svg-icon slot="start" .path=${ln}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,i){return _`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${bh}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${C=>this._customAttributeChanged(i,C)}
        ></ha-form>
        <ha-icon-button
          .path=${Ln}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:Zh(this._config.current?.show_attributes,e)}};o2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(C=>typeof C=="string"?C:C.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let C=Oh(i);if(delete C.temperature_entity,C?.forecast?.extra_attribute==="none"&&delete C.forecast.extra_attribute,Array.isArray(C.show_condition_effects)&&R6.every(H=>C.show_condition_effects.includes(H))&&(C.show_condition_effects=!0),C?.current){let a={},H={},V={};for(let s of Object.keys(C.current))if(s.startsWith("attribute_entity_")){let M=s.replace("attribute_entity_",""),p=C.current[s];p&&(a[M]=p),delete C.current[s]}else if(s.startsWith("attribute_label_")){let M=s.replace("attribute_label_",""),p=C.current[s];p&&(H[M]=p),delete C.current[s]}else if(s.startsWith("attribute_icon_")){let M=s.replace("attribute_icon_",""),p=C.current[s];p&&(V[M]=p),delete C.current[s]}if(Array.isArray(C.current.show_attributes)){let s=t7(this._config?.current?.show_attributes);C.current.show_attributes=Mn(C.current.show_attributes,{entity:a,label:H,icon:V},s)}}o2(this,"config-changed",{config:C})}};G5.styles=g1`
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
  `,Q([e1({attribute:!1})],G5.prototype,"hass",2),Q([q2()],G5.prototype,"_config",2),G5=Q([n2("wsfc-flex-core-editor")],G5);var e7=r=>typeof r=="string"&&R2.includes(r),t7=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")e7(e)||t.push({name:e});else if(typeof e=="object"){let i=e;e7(i.name)||t.push(i)}}return t},Mn=(r,t,e)=>{let i=R2.every(H=>r.includes(H)),C=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!C&&i?!0:[...r.map(H=>{let V=t.entity[H],s=t.label[H],M=t.icon[H];return V||s||M?{name:H,...V?{entity:V}:{},...s?{label:s}:{},...M?{icon:M}:{}}:H}),...e]},bh=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],yh=r=>{if(r===!0)return[...R2];if(typeof r=="string")return e7(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")e7(e)&&t.push(e);else if(typeof e=="object"){let i=e;e7(i.name)&&t.push(i)}}return t},Zh=(r,t)=>{let e=yh(r),i=[],C={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(C.entity[a.name]=a.entity),a.label&&(C.label[a.name]=a.label),a.icon&&(C.icon[a.name]=a.icon));return Mn(i,C,t)},Oh=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[C,a]=i;!C||!a||((!t[C]||typeof t[C]!="object")&&(t[C]={}),t[C][a]=r[e],delete t[e])}return t},N8=r=>{let t=kh(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...R6]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...R2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let C of e)if(typeof C=="string")e7(C)&&i.push(C);else if(typeof C=="object"&&C!==null){let a=C;e7(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},kh=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let C in i)t[`forecast.${C}`]=i[C];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let C in i)t[`current.${C}`]=i[C];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let C in i)t[`forecast_action.${C}`]=i[C];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(c=>c.id),i=Object.fromEntries(t.map(c=>[c.id,c.label])),C={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],H=(c,m,d)=>Math.min(d,Math.max(m,c)),V=c=>typeof c=="number"&&isFinite(c),s={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function M(c){return s[c]||"mdi:weather-cloudy"}let p=["temps","icons","extra"],h={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function v(c){let m=Array.isArray(c.forecast_row_order)?c.forecast_row_order.filter(d=>p.includes(d)):null;(!m||!m.length)&&(m=(c.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let d of p)m.includes(d)||m.push(d);return m}let g={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},y=Object.keys(g);function O(c){let m=c&&c.forecast_extra,d;Array.isArray(m)?d=m:typeof m=="string"&&m&&m!=="none"?d=[m]:d=[];let A=new Set(d.filter(x=>g[x]));return y.filter(x=>A.has(x))}let k=["temps","icons",...y],P=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(y.map(c=>[c,g[c].label]))),$=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function D(c){c=c||{};let m={},d;if(Array.isArray(c.forecast_metric_order)&&c.forecast_metric_order.length){d=c.forecast_metric_order.filter(x=>k.includes(x));let A=c.forecast_metric_pos||{};for(let x of k)m[x]=A[x]||"hidden"}else{m.temps=c.forecast_temps||"hidden",m.icons=c.forecast_icons||"hidden";let A=O(c),x=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let b of y)m[b]=A.includes(b)?x:"hidden";let w=v(c);d=[];for(let b of w)b==="extra"?d.push(...y):d.push(b)}for(let A of k)d.includes(A)||d.push(A);for(let A of k)m[A]||(m[A]="hidden");return d.map(A=>({key:A,pos:m[A]}))}function K(c,m){if(!c||!m)return null;let d=g[c],A=m[c];return c==="wind_direction"&&(A=m.wind_direction!=null?m.wind_direction:m.wind_bearing),A==null||A===""?null:d&&d.arrow?"":(typeof A=="number"&&(A=Math.round(A)),A+(d&&d.unit||""))}function G(c,m){if(c==="wind_direction")return(g.wind_bearing||{}).icon;let d=g[c];return d?d.icon:""}let M1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function J(c,m){if(m){let d=M1[c];if(d&&C[d]&&C[d].icon)return C[d].icon}return G(c)}function C1(c){return c==="below"||c==null?0:c==="above"?100:c==="mid"?50:H(Number(c)||0,0,100)}function r1(c,m){m=m||0;let d="  ".repeat(m),A=x=>{if(x==null)return"null";if(typeof x=="boolean"||typeof x=="number")return String(x);let w=String(x);return w===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(w)||/^\s|\s$/.test(w)||/^(true|false|null|yes|no|~)$/i.test(w)||/^[\d.+-]/.test(w)?'"'+w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':w};if(Array.isArray(c))return c.length?c.map(x=>{if(x&&typeof x=="object"){let w=r1(x,m+1).replace(/^\s+/,"");return d+"- "+w}return d+"- "+A(x)}).join(`
`):d+"[]";if(c&&typeof c=="object"){let x=Object.keys(c);return x.length?x.map(w=>{let b=c[w];return b&&typeof b=="object"&&(Array.isArray(b)?b.length:Object.keys(b).length)?d+w+`:
`+r1(b,m+1):b&&typeof b=="object"?d+w+": "+(Array.isArray(b)?"[]":"{}"):d+w+": "+A(b)}).join(`
`):d+"{}"}return d+A(c)}function m1(c){try{return typeof z3=="function"&&z3(c)||c.language||navigator.language||"en"}catch{return"en"}}function I1(c){let m=c&&c.config||{};return{lat:m.latitude,lng:m.longitude}}function O1(c,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(m1(c),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function L2(c,m){let d=m instanceof Date?m:new Date;try{if(typeof y0=="function"){let w=y0(c,d);if(w&&w.sunrise&&w.sunset)return{sunrise:new Date(w.sunrise),sunset:new Date(w.sunset)}}}catch{}let{lat:A,lng:x}=I1(c);if(V(A)&&V(x)&&typeof l0=="object"&&l0.getTimes)try{let w=l0.getTimes(d,A,x);return{sunrise:w.sunrise,sunset:w.sunset}}catch{}return{sunrise:null,sunset:null}}function q1(c,m){let{lat:d,lng:A}=I1(c);if(!V(d)||!V(A)||typeof l0!="object"||!l0.getPosition)return null;try{return l0.getPosition(m,d,A).altitude}catch{return null}}function k1(c){if(c==null)return .5;let m=c*180/Math.PI;return m>=0?H(.42+.58*Math.sin(c),.42,1):m>-12?H(.42*(m+12)/12,0,.42):0}let X=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function Y1(c){c=H(c,0,1);let m=X[0],d=X[X.length-1];for(let b=0;b<X.length-1;b++)if(c>=X[b].at&&c<=X[b+1].at){m=X[b],d=X[b+1];break}let A=d.at-m.at||1,x=(c-m.at)/A,w=b=>Math.round(m.c[b]+(d.c[b]-m.c[b])*x);return[w(0),w(1),w(2)]}function H1(c){if(typeof c!="string")return null;let m=c.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(d=>d+d).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let U=c=>`rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`,t1=(c,m,d)=>c.map((A,x)=>A+(m[x]-A)*d);function n1(c,m){c=H(c,0,1);let d,A=m&&H1(m.day_color),x=m&&H1(m.night_color);A||x?d=t1(x||[11,16,38],A||[206,227,255],c):d=Y1(c);let w=m&&V(m.cloud)?H(m.cloud,0,1):0;if(w>0){let b=.5*(d[0]+d[1]+d[2]),E=[b*.75+40,b*.75+42,b*.78+48];d=t1(d,E,w*.6)}return U(d)}function h1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function V1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function s1(c){return{font_size:c,font_weight:"400",color:""}}function S1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function T1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function m2(c,m){if(c==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let d=A=>`0 0 2px ${A}, 0 0 4px ${A}, 1px 1px 2px ${A}`;return c==="outline"?d("rgba(0,0,0,0.85)"):c==="auto"?d(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let g2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function T2(c){let m=c&&c.show_forecast!==!1,d=c&&c.default_forecast||"daily",A=a.map(E=>({key:E,show:!0})),x=h1,w=S1,b=V1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:c?c.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...T1(),...w(),...x(),...b()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:A,...w(),...x(),...b()},hourly:{show:m&&d==="hourly",...w(),...x(),...b()},daily:{show:m&&d!=="hourly",...w(),...x(),...b()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...w(),...x(),...b()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...w(),...x(),...b()}}}function l2(c){let m=T2(c),d=c&&c.wfc||{},A={order:Array.isArray(d.order)&&d.order.length?d.order.slice():m.order,card:{...m.card,...d.card||{}},current:{...m.current,...d.current||{}},details:{...m.details,...d.details||{}},hourly:{...m.hourly,...d.hourly||{}},daily:{...m.daily,...d.daily||{}},sun_position:{...m.sun_position,...d.sun_position||{}},sun_arc:{...m.sun_arc,...d.sun_arc||{}},editor_accordion:d.editor_accordion!==!1},x=Array.isArray(d.details&&d.details.items)?d.details.items.slice():m.details.items.slice();x=x.filter(b=>b&&C[b.key]),A.details.items=x.length?x:m.details.items,A.details.columns=H(parseInt(A.details.columns,10)||2,1,4);let w=new Set(A.details.items.map(b=>b.key));return Object.keys(C).forEach(b=>{w.has(b)||A.details.items.push({key:b,show:!1})}),["sun_position","sun_arc"].forEach(b=>{let E=d[b]||{};E.flush!==void 0&&(E.flush_top===void 0&&(A[b].flush_top=!!E.flush),E.flush_bottom===void 0&&(A[b].flush_bottom=!!E.flush),E.flush_edges===void 0&&(A[b].flush_edges=!!E.flush))}),e.forEach(b=>{A.order.includes(b)||A.order.push(b)}),A.order=A.order.filter(b=>e.includes(b)),A}let l1=u2.prototype;if(typeof z2<"u"&&z2&&z2.prototype&&z2.prototype.getSecondaryWeatherAttribute){let c=z2.prototype.getSecondaryWeatherAttribute;z2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:c.call(this)}}let X2=l1.setConfig;l1.setConfig=function(c){let m=l2(c),d=m.sun_position||{},A=d.forecast_extra,w=!!(!!(d.show||m.sun_arc&&m.sun_arc.show&&m.sun_arc.baseline_mode==="sky")&&(d.weather_adjust!==!1||[d.forecast_temps,d.forecast_icons].some(z=>z&&z!=="hidden")||(Array.isArray(A)?A.length:A&&A!=="none")||Object.values(d.forecast_metric_pos||{}).some(z=>z&&z!=="hidden"))),b=!!(m.hourly.show||w),E=!!(b||m.daily.show),R=b&&m.daily.show?"both":b?"hourly":"daily",W={...c,show_current:m.current.show||!E,show_forecast:E};E&&(R==="both"||!c.forecast_types||w)&&(W.forecast_types=R),X2.call(this,W),this.config.show_current=!!m.current.show,this.config.show_forecast=E,W.forecast_types&&(this.config.forecast_types=W.forecast_types),this.__wfcCfgSrc=void 0};let N2=l1.updated;l1.updated=function(c){N2&&N2.call(this,c),this.isConnected&&this._wfcSyncForecastSources()};let u5=l1.disconnectedCallback;l1.disconnectedCallback=function(){u5&&u5.call(this),this._wfcTeardownForecastSources()};let P2=l1.shouldUpdate;l1.shouldUpdate=function(c){if(P2&&P2.call(this,c))return!0;if(c&&c.has("hass")&&this.config){let m=c.get("hass"),d=this.hass;if(m&&d){let A=new Set;for(let x of this._wfcSources())if(x.overrides&&Object.values(x.overrides).forEach(w=>w&&A.add(w)),K1(x.ref)){let w=x3(this.config,this.hass,S2(x.ref));Object.values(w).forEach(b=>b&&A.add(b))}else x.ref&&A.add(x.ref);for(let x of A)if(m.states[x]!==d.states[x])return!0}}return!1},l1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=l2(this.config)),this.__wfcCfg},l1.computeRowSizing=function(){let c=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",d={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let b=(c.details.items||[]).filter(E=>E.show).length;return Math.max(1,Math.ceil(b/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(c.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(c.sun_arc.height)||90)+24)/56))},A=1,x=4;c.order.filter(b=>c[b]&&c[b].show&&d[b]).forEach(b=>{A+=d[b](),(b==="hourly"||b==="daily")&&(x=6)});let w=Math.max(1,A-1);return{rows:A,minRows:w,minColumns:x}},l1.render=function(){if(!this.config||!this.hass)return Z;let c=this.config.entity,m=this.hass.states[c];if(!m){let R=this.hass,W=R?R.config&&R.config.state!=="NOT_RUNNING"?`${R.localize("ui.card.common.entity_not_found")}: ${c}`:R.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return _`<hui-warning>${W}</hui-warning>`}let d=this._wfc(),A=typeof _5=="function"&&_5(m)==="twice_daily",x=this.config.forecast&&this.config.forecast.mode==="chart",w={stateObj:m,isTwice:A,chart:x},E=d.order.filter(R=>d[R]&&d[R].show).map(R=>{let W=this._wfcRenderSection(R,d,w);if(W===Z||W==null)return null;let z=d[R]||{},o1="wsfc-section";z.flush_top&&(o1+=" wsfc-flush-top"),z.flush_bottom&&(o1+=" wsfc-flush-bottom"),z.flush_edges&&(o1+=" wsfc-flush-edges");let p1=this._wfcBackgroundStyle(z);return _`<div class=${o1} data-section-id=${R} style=${p1}>
          ${this._wfcRenderTitle(z)}${W}
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
        <div class="wsfc-container">${E}</div>
      </ha-card>
    `},l1._wfcDividerStyle=function(c){let m=[];return c.order.forEach(d=>{let A=c[d];if(!A||!A.show||!A.divider_above&&!A.divider_below)return;let x=`.wsfc-section[data-section-id="${d}"]`,w=A.divider_color||"var(--divider-color, #4a4a4a)",b=`${x}{position:relative;}`,E=R=>["solid","dashed","dotted","double"].includes(R)?R:"solid";if(A.divider_above){let R=Number(A.divider_above_width)||1,W=H(Number(A.divider_above_length)||100,1,100),z=E(A.divider_above_style);b+=`${x}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${x}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${W}%;border-top:${R}px ${z} ${w};}`}if(A.divider_below){let R=Number(A.divider_below_width)||1,W=H(Number(A.divider_below_length)||100,1,100),z=E(A.divider_below_style);b+=`${x}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${x}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${W}%;border-bottom:${R}px ${z} ${w};}`}m.push(b)}),m.length?_`<style>${m.join("")}</style>`:Z},l1._wfcCardAppearanceStyle=function(c){let m=c&&c.card||{},d=[];if(m.border_enabled){let x=Math.max(0,Number(m.border_width)||1),w=m.border_color||"var(--primary-color, #2196f3)",b=E=>E!==!1?`${x}px solid ${w}`:"none";d.push(`border-top:${b(m.border_top)}`),d.push(`border-bottom:${b(m.border_bottom)}`),d.push(`border-left:${b(m.border_left)}`),d.push(`border-right:${b(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let x=`${Number(m.border_radius)}px`,w=b=>b!==!1?x:"0";d.push(`border-radius:${w(m.corner_tl)} ${w(m.corner_tr)} ${w(m.corner_br)} ${w(m.corner_bl)}`)}m.bg_color&&d.push(`background:${m.bg_color}`);let A=[];if(m.glow_enabled){let x=m.glow_color||"var(--primary-color, #2196f3)",w=H(Number(m.glow_intensity)||1,.2,3),b=(12*w).toFixed(1),E=(-4*w).toFixed(1),R=(4*w).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?A.push(`0 0 ${b}px ${E}px ${x}`):(m.border_top!==!1&&A.push(`0 -${R}px ${b}px ${E}px ${x}`),m.border_bottom!==!1&&A.push(`0 ${R}px ${b}px ${E}px ${x}`),m.border_left!==!1&&A.push(`-${R}px 0 ${b}px ${E}px ${x}`),m.border_right!==!1&&A.push(`${R}px 0 ${b}px ${E}px ${x}`))}if(m.shadow_enabled){let x=_2(m.shadow_color||"#000000",H((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";A.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${x}`)}return A.length&&d.push(`box-shadow:${A.join(", ")}`),d.length?_`<style>ha-card{${d.join(";")};}</style>`:Z},l1._wfcBackgroundStyle=function(c){if(!c||!c.background_enabled)return"";let m=H(c.background_opacity==null?80:Number(c.background_opacity),0,100),d=(100-m)/100,A=100-m,x=c.background_color||"",w;x?w=_2(x,d)||x:w=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${A}%, transparent)`;let b=c.flush_edges?"0":"8px";return`background-color:${w};border-radius:${b};`};function _2(c,m){if(typeof c!="string")return null;let d=c.trim().replace(/^#/,"");if(d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),!/^[0-9a-fA-F]{6}$/.test(d))return null;let A=parseInt(d.slice(0,2),16),x=parseInt(d.slice(2,4),16),w=parseInt(d.slice(4,6),16);return`rgba(${A}, ${x}, ${w}, ${m})`}l1._wfcRenderTitle=function(c){if(!c||!c.title_show)return Z;let m=c.title_text||"",d=c.title_icon||"",A=c.title_text_align||"left",x=c.title_icon_align||"left",w=!!m&&A!=="hide",b=!!d&&x!=="hide";if(!w&&!b)return Z;let E=(c.title_icon_color?`color:${c.title_icon_color};`:"")+(c.title_icon_size?`--mdc-icon-size:${c.title_icon_size}px;width:${c.title_icon_size}px;height:${c.title_icon_size}px;`:""),R=(c.title_color?`color:${c.title_color};`:"")+(c.title_font_size?`font-size:${c.title_font_size}px;`:"")+(c.title_font_weight?`font-weight:${c.title_font_weight};`:""),W=b?_`<ha-icon class="wsfc-title-icon" .icon=${d} style=${E}></ha-icon>`:Z,z=w?_`<span class="wsfc-title-text" style=${R}>${m}</span>`:Z,o1=N=>{let w1=[];return b&&x===N&&w1.push(W),w&&A===N&&w1.push(z),w1},p1=Number(c.title_indent)||0;return _`<div class="wsfc-title-row" style="padding-left:${p1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${o1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${o1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${o1("right")}</span>
    </div>`},l1._wfcRenderSection=function(c,m,d){switch(c){case"current":return this._wfcRenderCurrent(d);case"details":return this._wfcRenderDetails(m,d);case"hourly":return this._wfcRenderForecast("hourly",d);case"daily":return this._wfcRenderForecast("daily",d);case"sun_position":return this._wfcRenderSunPosition(m,d);case"sun_arc":return this._wfcRenderSunArc(m,d);default:return Z}},l1._wfcRenderCurrent=function(c){let d=this._wfc().current||{},A=Number(d.header_state_size)||0,x=Number(d.header_temp_size)||0,w=Number(d.header_icon_size)||0,b=(w?`--current-conditions-icon-size:${w}px;`:"")+(A||x?`--wfc-hdr-state:${A?A+"px":"inherit"};--wfc-hdr-temp:${x?x+"px":"inherit"};`:""),E=_`
      <div
        class="wsfc-current-weather-container${A||x?" wsfc-hdr-sized":""}"
        style=${b||Z}
        .actionHandler=${i0({hasHold:b0(this.config.hold_action),hasDoubleClick:b0(this.config.double_tap_action)})}
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
    `,R=!!d.clock_show_time,W=!!d.clock_show_date;if(!R&&!W)return E;this._wfcEnsureClockTimer();let z=d1=>d1==="above"?"above-center":d1==="below"?"below-center":d1||"right",o1=z(d.clock_placement),p1=d.clock_date_placement==="with_time"||!d.clock_date_placement?o1:z(d.clock_date_placement),N=R?this._wfcRenderClockTime(d):null,w1=W?this._wfcRenderClockDate(d):null,U1=R&&W&&(d.clock_date_placement==="with_time"||!d.clock_date_placement),j1={},G1=(d1,D1)=>{D1&&(j1[d1]=j1[d1]||[]).push(D1)};U1?G1(o1,_`<div class="wsfc-clock">${N}${w1}</div>`):(N&&G1(o1,_`<div class="wsfc-clock">${N}</div>`),w1&&G1(p1,_`<div class="wsfc-clock">${w1}</div>`));let N1=d1=>{let D1=[];return["left","center","right"].forEach(m5=>{let n5=d1+"-"+m5;j1[n5]&&D1.push(_`<div class="wsfc-clock-band-cell wsfc-cb-${m5}">${j1[n5]}</div>`)}),D1.length?_`<div class="wsfc-clock-band">${D1}</div>`:Z},f1=N1("above"),F1=N1("below"),Z5=j1.left||Z,W2=[].concat(j1.right||[],j1.center||[]),H5=j1.left&&j1.left.length||W2.length?_`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${Z5}
          <div class="wsfc-cur-grow">${E}</div>
          ${W2.length?W2:Z}
        </div>`:E;return _`<div class="wsfc-cur-stack">${f1}${H5}${F1}</div>`},l1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let c=this.__wfcCfg||(this.config?l2(this.config):null),m=c&&c.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},l1._wfcRenderClockTime=function(c){let m=new Date,d=m1(this.hass),A={hour:"2-digit",minute:"2-digit"};c.clock_show_seconds&&(A.second="2-digit"),c.clock_format==="12"?A.hour12=!0:c.clock_format==="24"&&(A.hour12=!1);let x;try{x=m.toLocaleTimeString(d,A)}catch{x=m.toTimeString().slice(0,c.clock_show_seconds?8:5)}c.clock_format==="12"&&(x=x.replace(/^0/,""));let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),b=m2(c.clock_contrast,w),E=`font-size:${H(Number(c.clock_font_size)||28,8,100)}px;font-weight:${c.clock_font_weight||"500"};`+(c.clock_color?`color:${c.clock_color};`:"")+(c.clock_font_family?`font-family:${c.clock_font_family};`:"")+(b?`text-shadow:${b};`:"");return _`<div class="wsfc-clock-time" style=${E}>${x}</div>`};function o5(c,m,d){let A=R=>R<10?"0"+R:""+R,x=c.toLocaleDateString(d,{month:"long"}),w=c.toLocaleDateString(d,{month:"short"}),b=c.toLocaleDateString(d,{weekday:"long"}),E={YYYY:""+c.getFullYear(),YY:A(c.getFullYear()%100),MONTH:x,MON:w,WDAY:b,MM:A(c.getMonth()+1),M:""+(c.getMonth()+1),DD:A(c.getDate()),D:""+c.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,R=>E[R]!=null?E[R]:R)}l1._wfcRenderClockDate=function(c){let m=new Date,d=m1(this.hass),A=g2.find(W=>W.value===c.clock_date_format)||g2[0],x;try{x=A.pattern?o5(m,A.pattern,d):m.toLocaleDateString(d,A.opts)}catch{x=m.toDateString()}let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),b=c.clock_date_contrast!=null?c.clock_date_contrast:c.clock_contrast,E=m2(b,w),R=`font-size:${H(Number(c.clock_date_font_size)||12,8,100)}px;`+(c.clock_date_color?`color:${c.clock_date_color};`:"")+(E?`text-shadow:${E};`:"");return _`<div class="wsfc-clock-date" style=${R}>${x}</div>`},l1._wfcForecastConfigFor=function(c){let m=this.config&&this.config.forecast||{},d=m[`${c}_mode`]||m.mode||"simple",A=m[`${c}_extra_attribute`]!=null?m[`${c}_extra_attribute`]:m.extra_attribute;(A==="none"||A==="")&&(A=void 0);let x=m[`${c}_chart_attribute`]!=null?m[`${c}_chart_attribute`]:m.default_chart_attribute,w={...m,mode:d};return A==null?delete w.extra_attribute:w.extra_attribute=A,x!=null&&(w.default_chart_attribute=x),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(E=>{let R=m[`${c}_${E}`];R!=null&&(w[E]=R)}),{config:{...this.config,forecast:w},chart:d==="chart"}},l1._wfcRenderForecast=function(c,m){let d=c==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!d||!d.length)return Z;let A=this._wfcMergeForecast(d,c),{config:x,chart:w}=this._wfcForecastConfigFor(c),b=w?_`<wsfc-forecast-chart
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
        ></wsfc-forecast-simple>`;return _`<div class="wsfc-forecast-container" data-forecast-type=${c}>${b}</div>`};let a5="device:",K1=c=>typeof c=="string"&&c.indexOf(a5)===0,S2=c=>K1(c)?c.slice(a5.length):null,z0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],Vt=z0.map(c=>c.key),st=[{re:/feels[\s_-]?like|apparent|wind[\s_-]?chill|windchill/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}];function H7(c,m){if(!c||!m||!c.entities)return[];let d=[];for(let A in c.entities){let x=c.entities[A];x&&x.device_id===m&&d.push(A)}return d}function W9(c,m){let d=c&&c.states[m];if(!d)return null;let A=d.attributes&&d.attributes.device_class,x=(m+" "+(d.attributes&&d.attributes.friendly_name||"")).toLowerCase(),w=null;for(let E of st)if(E.re.test(x)){w=E.key;break}if(w||(A==="temperature"?w="temperature":A==="humidity"?w="humidity":A==="pressure"||A==="atmospheric_pressure"?w="pressure":A==="wind_speed"?w="wind_speed":A==="irradiance"?w="solar_radiation":A==="illuminance"?w="illuminance":A==="precipitation_intensity"?w="precipitation":/(^|[\s_-])temperature/.test(x)?w="temperature":/pressure/.test(x)&&(w="pressure")),!w||Vt.indexOf(w)===-1)return null;let b=0;if(/indoor|inside/.test(x)&&(b+=100),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(x)&&(b+=20),w==="pressure"){if(/deficit|vpd|vapou?r/.test(x))return null;/absolute/.test(x)&&(b+=50),/relative|sea/.test(x)&&(b-=5)}return w==="precipitation"&&(/rate/.test(x)&&(b-=5),/event|hourly|24h|total/.test(x)&&(b+=10)),{key:w,penalty:b}}function n7(c,m){let d={},A={};for(let x of H7(c,m)){let w=W9(c,x);w&&(A[w.key]==null||w.penalty<A[w.key])&&(A[w.key]=w.penalty,d[w.key]=x)}return d}function x3(c,m,d){let A={...n7(m,d)},x=c&&c.metric_sources&&c.metric_sources.device_map&&c.metric_sources.device_map[d]||{};for(let w in x)x[w]&&(A[w]=x[w]);return A}function r4(c,m){let d=c&&c.metric_sources||{};if(Array.isArray(d.sources))return d.sources.filter(R=>R&&R.ref).map(R=>({ref:R.ref,overrides:{...R.overrides||{}},disabled:!!R.disabled}));let A=[],x=d.device_map||{},w=d.custom||{},b=R=>K1(R)?{...x[S2(R)]||{}}:{},E=d.primary||c&&c.entity;return E&&A.push({ref:E,overrides:{...b(E),...w}}),d.fallback&&d.fallback!==E&&A.push({ref:d.fallback,overrides:b(d.fallback)}),A}l1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},l1._wfcSources=function(){return r4(this.config,this.hass)},l1._wfcSlotEntityForKey=function(c,m){return c?K1(c)?x3(this.config,this.hass,S2(c))[m]||null:c:null},l1._wfcMetricEntityChain=function(c){let m=[],d=A=>{A&&!m.includes(A)&&this.hass&&this.hass.states[A]&&m.push(A)};for(let A of this._wfcSources())A.disabled||(A.overrides&&A.overrides[c]&&d(A.overrides[c]),d(this._wfcSlotEntityForKey(A.ref,c)));return d(this.config&&this.config.entity),m},l1._wfcCurrentMetric=function(c){for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather."))try{let A=E7(this.hass,d,this.config,c);if(A!=null&&A!=="")return A}catch{}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let x=d.attributes&&d.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(d):x?`${A} ${x}`:`${A}`}catch{return x?`${A} ${x}`:`${A}`}}}}return null},l1._wfcCurrentMetricRaw=function(c){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(c)){let d=this.hass.states[m];if(d)if(m.startsWith("weather.")){let A=d.attributes?d.attributes[c]:null;if(A!=null&&A!=="")return A}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let x=Number(A);return isNaN(x)?A:x}}}return null},l1._wfcMergedCurrentEntity=function(c){try{if(!c||!c.attributes)return c;let m=this.config&&this.config.entity;if(!this._wfcSources().some(E=>E.ref!==m||E.overrides&&Object.keys(E.overrides).length))return c;let x={...c.attributes},w=!1,b=["temperature",...typeof R2<"u"?R2:[]];for(let E of b){let R=this._wfcCurrentMetricRaw(E);R!=null&&R!==x[E]&&(x[E]=R,w=!0)}return w?{...c,attributes:x}:c}catch{return c}},l1._wfcDetailValue=function(c,m){let d=C[c];if(!d)return null;if(d.kind==="sunrise"||d.kind==="sunset"){let A=L2(this.hass),x=d.kind==="sunrise"?A.sunrise:A.sunset;return x?O1(this.hass,x):null}try{let A=this._wfcCurrentMetric(c);return A??null}catch{return null}},l1._wfcRenderDetails=function(c,m){let d=c.details||{},A=(d.items||[]).filter(E=>E.show);if(d.chips)return this._wfcRenderDetailChips(d,A,m);let x=[];if(A.forEach(E=>{let R=C[E.key];if(!R)return;let W=this._wfcDetailValue(E.key,m);if(W==null||W==="")return;let z=E.mode==="custom",o1=z?E.icon_color:d.global_icon_color,p1=z?E.icon_size:d.global_icon_size,N=z?E.text_color:d.global_text_color,w1=z?E.text_size:d.global_text_size,U1=E.icon||R.icon||$5&&$5[E.key]||"mdi:information-outline",j1=(o1?`color:${o1};`:"")+(p1?`--mdc-icon-size:${p1}px;width:${p1}px;height:${p1}px;`:""),G1=(N?`color:${N};`:"")+(w1?`font-size:${w1}px;`:"");x.push(_`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${U1} style=${j1}></ha-icon>
          <span class="wsfc-detail-value" style=${G1}>${W}</span>
        </div>
      `)}),!x.length)return Z;if((d.details_layout||"grid")==="wrap")return _`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${x}</div>
      </div>`;let w=H(parseInt(c.details.columns,10)||2,1,4),b=`grid-template-columns:repeat(${w}, minmax(0, 1fr));`;return _`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${w}" style=${b}>${x}</div>
    </div>`},l1._wfcRenderDetailChips=function(c,m,d){let A=H(Number(c.chip_scale)||1,.5,2.5),w=(c.chip_pill!=null?!!c.chip_pill:c.chip_shape!=="rounded"&&c.chip_shape!=="square")?999:c.chip_radius==null?8:Number(c.chip_radius),b=c.chip_icon_source||"auto",E=c.chip_show_icon!==!1,R=c.chip_layout||"wrap",W=Math.max(0,parseInt(c.chip_columns,10)||0),z=c.chip_text_size?`${Number(c.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${A})`,o1=c.chip_icon_size?`${Number(c.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${A})`,p1=`--wfc-chip-scale:${A};--wfc-chip-radius:${w}px;--wfc-chip-font:${z};--wfc-chip-icon-size:${o1};`+(c.chip_bg?`--wfc-chip-bg:${c.chip_bg};`:"")+(c.chip_border_color?`--wfc-chip-border:${c.chip_border_color};`:"")+(c.chip_text_color?`--wfc-chip-text:${c.chip_text_color};`:"")+(c.chip_icon_color?`--wfc-chip-icon:${c.chip_icon_color};`:"");R==="grid"&&W>0&&(p1+=`grid-template-columns:repeat(${W}, minmax(0, 1fr));`);let N=[];return m.forEach(w1=>{let U1=C[w1.key];if(!U1)return;let j1=this._wfcDetailValue(w1.key,d);if(c.chip_hide_when_off&&(j1==null||j1===""||j1==="unknown"||j1==="unavailable"))return;let G1=j1==null||j1===""?"\u2014":j1,N1=U1.label||w1.key,f1=c.chip_show_name?`${N1}: ${G1}`:G1,F1="";E&&b!=="none"&&(F1=b==="entity"&&w1.icon||U1.icon,F1=F1||$5&&$5[w1.key]||"mdi:information-outline"),N.push(_`
        <span class="wsfc-chip">
          ${F1?_`<ha-icon .icon=${F1}></ha-icon>`:Z}
          <span class="wsfc-chip-text">${f1}</span>
        </span>
      `)}),N.length?_`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${R}" style=${p1}>${N}</div>
    </div>`:Z},l1._wfcHourlySource=function(){let c=this._hourlyForecastEvent,m=c&&Array.isArray(c.forecast)&&c.forecast.length?c.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},l1._wfcExtraForecastEntities=function(){let c=this.config&&this.config.entity,m=new Set,d=A=>{A&&A!==c&&typeof A=="string"&&A.startsWith("weather.")&&this.hass&&this.hass.states[A]&&m.add(A)};for(let A of this._wfcSources())A.disabled||(d(A.ref),A.overrides&&Object.values(A.overrides).forEach(d));return[...m]},l1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let c=new Set(this._wfcExtraForecastEntities());for(let x of Object.keys(this.__wfcSrc))if(!c.has(x)){try{this.__wfcSrc[x].unsub&&this.__wfcSrc[x].unsub()}catch{}delete this.__wfcSrc[x]}let m=this.config.forecast_types||"both",d=m!=="daily",A=m!=="hourly";c.forEach(x=>{if(this.__wfcSrc[x])return;let w={unsub:null,hourly:null,daily:null};this.__wfcSrc[x]=w;let b=(E,R)=>{try{let W=this.hass.connection.subscribeMessage(z=>{w[R]=z&&Array.isArray(z.forecast)?z.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:E,entity_id:x},{resubscribe:!1});Promise.resolve(W).then(z=>{if(this.__wfcSrc[x]!==w){try{z&&z()}catch{}return}let o1=w.unsub;w.unsub=()=>{try{o1&&o1()}catch{}try{z&&z()}catch{}}}).catch(()=>{})}catch{}};d&&b("hourly","hourly"),A&&b(_5&&typeof _5=="function"&&_5(this.hass.states[x])||"daily","daily")})}catch{}},l1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let c of Object.keys(this.__wfcSrc))try{this.__wfcSrc[c].unsub&&this.__wfcSrc[c].unsub()}catch{}this.__wfcSrc={}}},l1._wfcSourceForecast=function(c,m){let d=this.__wfcSrc&&this.__wfcSrc[c];return d&&d[m]||null},l1._wfcMergeForecast=function(c,m){try{if(!Array.isArray(c)||!c.length)return c;let d=this.config&&this.config.entity,A=this._wfcExtraForecastEntities();if(!A.length)return c;let x={};if(A.forEach(R=>{let W=this._wfcSourceForecast(R,m);Array.isArray(W)&&W.length&&(x[R]=W.map(z=>({t:new Date(z.datetime).getTime(),fc:z})).filter(z=>!isNaN(z.t)))}),!Object.keys(x).length)return c;let w=(R,W)=>{let z=x[R];if(!z)return null;let o1=null,p1=1/0;for(let N of z){let w1=Math.abs(N.t-W);w1<p1&&(p1=w1,o1=N.fc)}return p1<=90*6e4?o1:null},b=z0.map(R=>R.key),E={};return b.forEach(R=>{E[R]=this._wfcMetricEntityChain(R).filter(W=>W===d||x[W])}),c.map(R=>{let W=new Date(R.datetime).getTime();if(isNaN(W))return R;let z=R;return b.forEach(o1=>{for(let p1 of E[o1]){if(p1===d){if(R[o1]!=null)break;continue}let N=w(p1,W);if(N&&N[o1]!=null){z===R&&(z={...R}),z[o1]=N[o1];break}}}),z})}catch{return c}},l1._wfcCloudAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let x=0;x<m.length;x++){let w=new Date(m[x].datetime);if(isNaN(w))continue;let b=Math.abs(w.getTime()-c.getTime());b<A&&(A=b,d=m[x])}return!d||A>90*6e4?null:V(d.cloud_coverage)?d.cloud_coverage/100:V(d.precipitation_probability)?d.precipitation_probability/100:null},l1._wfcForecastAt=function(c){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let x=0;x<m.length;x++){let w=new Date(m[x].datetime);if(isNaN(w))continue;let b=Math.abs(w.getTime()-c.getTime());b<A&&(A=b,d=m[x])}return d&&A<=90*6e4?d:null},l1._wfcSunHours=function(c){c=c||{};let m=new Date,d,A;if(c.timeframe_mode==="day")d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5);else if(c.timeframe_mode==="match_arc"){let E=L2(this.hass,m);E.sunrise&&E.sunset?(d=new Date(E.sunrise.getTime()-60*6e4),A=new Date(E.sunset.getTime()+60*6e4)):(d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5))}else{let E=H(Number(c.timeframe_hours)||24,1,72)*36e5;c.timeframe_anchor==="now_center"?(d=new Date(m.getTime()-E/2),A=new Date(m.getTime()+E/2)):(d=new Date(m),d.setMinutes(0,0,0),A=new Date(d.getTime()+E))}let x=A.getTime()-d.getTime(),w=H(Math.round(x/36e5),2,72),b=[];for(let E=0;E<=w;E++){let R=new Date(d.getTime()+x*E/w);b.push({date:R,cloud:this._wfcCloudAt(R)})}return b},l1._wfcFmtTime=function(c,m){if(!(c instanceof Date)||isNaN(c))return"--";let d=m1(this.hass);try{return m==="12"?c.toLocaleTimeString(d,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit",hour12:!1}):c.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit"})}catch{return c.toTimeString().slice(0,5)}},l1._wfcSkyGradient=function(c){let m=this._wfcSunHours(c);if(m.length<2)return null;let{lat:d,lng:A}=I1(this.hass);if(!V(d)||!V(A))return null;let x=c.weather_adjust!==!1,w=m.length,b=[];for(let E=0;E<w;E++){let R=k1(q1(this.hass,m[E].date)),W=(E/(w-1)*100).toFixed(2),z=n1(R,{day_color:c.day_color,night_color:c.night_color,cloud:x?m[E].cloud:0});b.push(`${z} ${W}%`)}return{gradient:`linear-gradient(to right, ${b.join(", ")})`,hours:m}},l1._wfcSunMarker=function(c,m){if(m==null)return Z;let d=c.marker_color||"var(--primary-text-color)",A=H(Number(c.marker_opacity==null?100:c.marker_opacity),0,100)/100;return _`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${d};opacity:${A};"></div>`},l1._wfcSunRiseSetMarkers=function(c,m,d,A){let{sunrise:x,sunset:w}=L2(this.hass);if(!x||!w||d<=m)return Z;let b=c.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",E=H(Number(c.ss_markers_opacity==null?100:c.ss_markers_opacity),0,100)/100,R=[];return[x.getTime(),w.getTime()].forEach(W=>{if(W<m||W>d)return;let z=((W-m)/(d-m)*100).toFixed(2);R.push(_`<span class="wsfc-sunpos-ssmark" style="left:${z}%;background:${b};opacity:${E};"></span>`)}),R.length?_`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${A}">${R}</div>`:Z},l1._wfcRenderSunPosition=function(c,m){let d=c.sun_position,A=this._wfcSkyGradient(d);if(!A)return Z;let{gradient:x,hours:w}=A,b=w.length,E=d.times_position||"below";E==="center"&&(E="overlay");let R=d.ticks_position||"hidden",W=E!=="hidden",z=R!=="hidden",o1=H(parseInt(d.ticks_every,10)||0,0,24),p1;if(o1>0&&b>1){let Y=(w[b-1].date.getTime()-w[0].date.getTime())/36e5,v1=Y>0?Y/(b-1):1;p1=Math.max(1,Math.round(o1/v1))}else p1=Math.max(1,Math.round((b-1)/8));let N=Y=>(Y/(b-1)*100).toFixed(2),w1=[];if(W)for(let Y=0;Y<b;Y+=p1){let v1;try{v1=w[Y].date.toLocaleTimeString(m1(this.hass),{hour:"numeric"})}catch{v1=w[Y].date.getHours()+""}w1.push(_`<span class="wsfc-sunpos-tick" style="left:${N(Y)}%">${v1}</span>`)}let U1=d.times_color||"var(--secondary-text-color, #9e9e9e)",j1=[];if(z)for(let Y=0;Y<b;Y+=p1)j1.push(_`<span class="wsfc-sunpos-mark" style="left:${N(Y)}%;background:${U1};"></span>`);let G1=Date.now(),N1=w[0].date.getTime(),f1=w[b-1].date.getTime(),Z5=G1>=N1&&G1<=f1&&f1>N1?H((G1-N1)/(f1-N1)*100,0,100):null,W2=Number(d.height)||44,O5=`font-size:${Number(d.times_font_size)||11}px;font-weight:${d.times_font_weight||"400"};`+(d.times_color?`color:${d.times_color};`:""),H5=Y=>_`<div class="wsfc-sunpos-ticks${Y||""}" style=${O5}>${w1}</div>`,d1=Y=>_`<div class="wsfc-sunpos-marks${Y||""}">${j1}</div>`,D1=d.ss_markers_position||"hidden",m5=D1!=="hidden",n5=D(d),i2={};n5.forEach(Y=>i2[Y.key]=Y.pos);let d0=i2.temps&&i2.temps!=="hidden",k5=i2.icons&&i2.icons!=="hidden",V5=d.forecast_temp_color||d.forecast_color||"",X1=d.forecast_icon_color||d.forecast_color||"",t5=d.forecast_extra_color||d.forecast_color||"",p0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),A2=d.forecast_metric_style||{},q5=Y=>A2[Y]&&A2[Y].text_color||(Y==="temps"?V5:t5),s5=Y=>A2[Y]&&A2[Y].icon_color||X1,S3=Y=>A2[Y]&&A2[Y].icon_size||d.forecast_icon_size,w3=Y=>A2[Y]&&A2[Y].text_size||d.forecast_font_size||11,Y5=Y=>m2(A2[Y]&&A2[Y].contrast||"",p0),Q5=Y=>{let v1=q5(Y),P1=Y5(Y);return`font-size:${Number(w3(Y))||11}px;`+(v1?`color:${v1};`:"")+(P1?`text-shadow:${P1};`:"")},K5=Y=>{let v1=s5(Y),P1=S3(Y),a1=Y5(Y);return(v1?`color:${v1};`:"")+(P1?`--mdc-icon-size:${P1}px;width:${P1}px;height:${P1}px;`:"")+(a1?`filter:drop-shadow(${a1});`:"")},X5=y.some(Y=>i2[Y]&&i2[Y]!=="hidden"),T5=[];if(d0||k5||X5){let Y=this._wfcHourlySource()||[];for(let v1 of Y){let P1=new Date(v1.datetime);if(isNaN(P1))continue;let a1=P1.getTime();a1<N1||a1>f1||T5.push({t:a1,fc:v1})}T5.sort((v1,P1)=>v1.t-P1.t)}let J5=f1-N1,b3=Y=>J5>0?((Y-N1)/J5*100).toFixed(2):"0",A1=(Y,v1)=>{let P1=null,a1=1/0;for(let E2 of T5){let a2=Math.abs(E2.t-Y);a2<a1&&(a1=a2,P1=E2.fc)}return a1<=v1?P1:null},w2={},_1=Y=>{let v1=Y==null?"":String(Y);if(w2[v1])return w2[v1];let P1=[];if(T5.length||Y==="ticks"||Y==="midticks"){let a1=Y==="all"||Y==="0",E2=Y==="ticks",a2=Y==="midticks";if(E2||a2){let U2=J5>0&&b>1?J5/(b-1)*p1:36e5,W0=Math.max(U2/2,90*6e4),L4=a2?p1/2:0;for(let j2=L4;j2<=b-1;j2+=p1){let l4=Math.floor(j2),J9=Math.min(b-1,Math.ceil(j2)),ut=j2-l4,M4=w[l4].date.getTime()+(w[J9].date.getTime()-w[l4].date.getTime())*ut;if(M4<N1||M4>f1)continue;let c4=(j2/(b-1)*100).toFixed(2);P1.push({pct:c4,fc:A1(M4,W0)})}}else if(a1)for(let U2 of T5)P1.push({pct:b3(U2.t),fc:U2.fc});else{let U2=H(parseInt(Y,10)||3,1,6),W0=null,L4=U2*36e5;for(let j2 of T5)(W0==null||j2.t-W0>=L4-6e4)&&(P1.push({pct:b3(j2.t),fc:j2.fc}),W0=j2.t)}}return w2[v1]=P1,P1},P5=Y=>{let v1=A2[Y]&&A2[Y].every;return v1!=null&&v1!==""?v1:d.forecast_every},u0=Y=>{let v1=_1(P5("temps"));return _`<div class="wsfc-sunpos-fc${Y||""}" style=${Q5("temps")}>${v1.map(P1=>{let a1=P1.fc&&P1.fc.temperature!=null?Math.round(P1.fc.temperature)+"\xB0":"";return a1?_`<span class="wsfc-sunpos-fc-item" style="left:${P1.pct}%">${a1}</span>`:Z})}</div>`},y3=Y=>{let v1=K5("icons"),P1=_1(P5("icons"));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${Y||""}">${P1.map(a1=>{let E2=a1.fc&&a1.fc.condition?M(a1.fc.condition):"";return E2?_`<span class="wsfc-sunpos-fc-item" style="left:${a1.pct}%"><ha-icon .icon=${E2} style=${v1}></ha-icon></span>`:Z})}</div>`},Z3=!!d.forecast_metric_detail_icons,u1=(Y,v1)=>{let P1=K5(Y),a1=_1(P5(Y));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${v1||""}" style=${Q5(Y)}>${a1.map(E2=>{let a2=E2.fc?K(Y,E2.fc):null;if(a2==null)return Z;let U2=J(Y,Z3);return _`<span class="wsfc-sunpos-fc-item" style="left:${E2.pct}%">${U2?_`<ha-icon .icon=${U2} style=${P1}></ha-icon>`:Z}<span class="wsfc-sunpos-fc-extra-val">${a2}</span></span>`})}</div>`},R1=Y=>{let v1=K5("icons"),P1=_1(P5("icons"));return _`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${Y||""}" style=${Q5("temps")}>${P1.map(a1=>{let E2=a1.fc&&a1.fc.condition?M(a1.fc.condition):"",a2=a1.fc&&a1.fc.temperature!=null?Math.round(a1.fc.temperature)+"\xB0":"";return!E2&&!a2?Z:_`<span class="wsfc-sunpos-fc-item" style="left:${a1.pct}%">${E2?_`<ha-icon .icon=${E2} style=${v1}></ha-icon>`:Z}${a2?_`<span class="wsfc-sunpos-fc-temp-val">${a2}</span>`:Z}</span>`})}</div>`},h2=!!d.forecast_temp_with_icon&&d0&&k5&&i2.temps===i2.icons,W1=(Y,v1)=>h2&&Y==="icons"?R1(v1):Y==="temps"?u0(v1):Y==="icons"?y3(v1):u1(Y,v1),v2=Y=>n5.filter(v1=>v1.pos===Y&&!(h2&&v1.key==="temps")).map(v1=>v1.key),h5=v2("overlay"),m0=[];h5.length===1?m0.push(W1(h5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):h5.forEach((Y,v1)=>{let P1=v1===0?" wsfc-sunpos-fc-ovl-top":v1===h5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";m0.push(W1(Y," wsfc-sunpos-fc-ovl"+P1))});let O3=v2("above").map(Y=>W1(Y)),s7=v2("below").reverse().map(Y=>W1(Y));return _`
      <div class="wsfc-sunpos-section">
        ${O3}
        ${m5&&D1==="above"?this._wfcSunRiseSetMarkers(d,N1,f1,"row"):Z}
        ${z&&R==="above"?d1():Z}
        ${W&&E==="above"?H5():Z}
        <div class="wsfc-sunpos-bar" style="height:${W2}px;background:${x}">
          ${m5&&D1==="overlay"?this._wfcSunRiseSetMarkers(d,N1,f1,"overlay"):Z}
          ${this._wfcSunMarker(d,Z5)}
          ${z&&R==="overlay"?d1(" wsfc-sunpos-marks-center"):Z}
          ${W&&E==="overlay"?H5(" wsfc-sunpos-ticks-center"):Z}
          ${m0}
        </div>
        ${W&&E==="below"?H5():Z}
        ${z&&R==="below"?d1():Z}
        ${m5&&D1==="below"?this._wfcSunRiseSetMarkers(d,N1,f1,"row"):Z}
        ${s7}
      </div>
    `},l1._wfcArcWindow=function(c,m,d){let A=c.timeframe_mode||"sunrise_sunset",x=Date.now();if(A==="day"){let w=new Date(x);return w.setHours(0,0,0,0),{t0:w.getTime(),t1:w.getTime()+24*36e5}}if(A==="hours"){let w=H(Number(c.timeframe_hours)||24,1,72)*36e5;if(c.timeframe_anchor==="now_center")return{t0:x-w/2,t1:x+w/2};let b=new Date(x);return b.setMinutes(0,0,0),{t0:b.getTime(),t1:b.getTime()+w}}return{t0:m,t1:d}},l1._wfcRenderSunArc=function(c,m){let d=c.sun_arc,{sunrise:A,sunset:x}=L2(this.hass);if(!A||!x)return Z;let w=Date.now(),b=A.getTime(),E=x.getTime(),R=E-b,W;if(d.baseline_mode==="sky"&&c.sun_position){let u1=this._wfcSunHours(c.sun_position);u1&&u1.length>=2&&(W={t0:u1[0].date.getTime(),t1:u1[u1.length-1].date.getTime()})}W||(W=this._wfcArcWindow(d,b,E));let z=W.t0,o1=W.t1,p1=o1-z||1,N=u1=>H((u1-z)/p1,0,1),w1=100,U1=78,j1=14,G1=N(b),N1=N(E),f1=N1-G1,F1=u1=>{if(f1<=0||u1<=G1||u1>=N1)return U1;let R1=(u1-G1)/f1;return U1-(U1-j1)*(1-Math.pow(2*R1-1,2))},Z5=96,W2="";for(let u1=0;u1<=Z5;u1++){let R1=u1/Z5;W2+=(u1===0?"M":"L")+(R1*w1).toFixed(2)+" "+F1(R1).toFixed(2)+" "}let O5=w>=z&&w<=o1,H5=w>=b&&w<=E,d1=N(w),D1=(d1*100).toFixed(2),m5=(F1(d1)/w1*100).toFixed(2),n5=Number(d.height)||90,i2=d.time_format||"auto",d0=d.tick_color||"var(--secondary-text-color, #9e9e9e)",k5=[];{let u1=new Date(z);u1.setMinutes(0,0,0),u1.getTime()<z&&u1.setTime(u1.getTime()+36e5);for(let R1=u1.getTime();R1<=o1;R1+=36e5)k5.push(N(R1))}let V5=[];d.show_arc_ticks&&k5.forEach(u1=>{if(u1<=0||u1>=1)return;let R1=(u1*w1).toFixed(2),h2=F1(u1);V5.push(y1`<line x1="${R1}" y1="${(h2-2.5).toFixed(2)}" x2="${R1}" y2="${(h2+2.5).toFixed(2)}" stroke="${d0}" stroke-width="0.6"></line>`)});let X1=[];d.show_base_ticks&&k5.forEach(u1=>{let R1=(u1*w1).toFixed(2);X1.push(y1`<line x1="${R1}" y1="${U1}" x2="${R1}" y2="${U1+3}" stroke="${d0}" stroke-width="0.6"></line>`)});let t5=d.sunrise_sunset_ticks||"none",p0=t5==="arc"||t5==="both",A2=t5==="base"||t5==="both",q5=[];b>=z&&b<=o1&&q5.push(N(b)),E>=z&&E<=o1&&q5.push(N(E)),p0&&q5.forEach(u1=>{let R1=(u1*w1).toFixed(2),h2=F1(u1);V5.push(y1`<line x1="${R1}" y1="${(h2-4.5).toFixed(2)}" x2="${R1}" y2="${(h2+4.5).toFixed(2)}" stroke="${d0}" stroke-width="1.4"></line>`)}),A2&&q5.forEach(u1=>{let R1=(u1*w1).toFixed(2);X1.push(y1`<line x1="${R1}" y1="${(U1-2).toFixed(2)}" x2="${R1}" y2="${U1+6}" stroke="${d0}" stroke-width="1.4"></line>`)});let s5=Z;if(O5){let u1="wsfc-sunarc-sun"+(H5?"":" wsfc-sunarc-sun-night"),R1=`left:${D1}%;top:${m5}%;`;if(!H5&&d.night_moon&&d.moon_icon==="phase"){let h2=l0.getMoonIllumination(new Date).phase,W1=10,v2=11,h5=Math.cos(h2*2*Math.PI),m0=Math.abs(h5)*W1,O3=h2<.5?1:0,s7=`M${v2} ${v2-W1} A${W1} ${W1} 0 0 ${O3} ${v2} ${v2+W1} A${m0} ${W1} 0 0 ${h5>0?1-O3:O3} ${v2} ${v2-W1} Z`;s5=_`<span class="${u1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${R1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${s7} fill="#e9e6d6"></path></svg></span>`}else if(!H5&&d.night_moon){let h2=d.moon_icon||"mdi:weather-night";s5=_`<ha-icon class="${u1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${h2} style=${R1}></ha-icon>`}else d.sun_icon?s5=_`<ha-icon class="${u1} wsfc-sunarc-sun-icon" .icon=${d.sun_icon} style=${R1}></ha-icon>`:s5=_`<span class="${u1} wsfc-sunarc-sun-dot" style=${R1}></span>`}let S3=`font-size:${Number(d.time_font_size)||13}px;font-weight:${d.time_font_weight||"600"};`+(d.time_color?`color:${d.time_color};`:""),w3=`font-size:${Number(d.caption_font_size)||11}px;font-weight:${d.caption_font_weight||"400"};`+(d.caption_color?`color:${d.caption_color};`:""),Y5=d.show_times!==!1,Q5=d.show_captions!==!1,K5=!!d.show_ss_icons,X5=d.ss_icon_position||"left",T5=(d.ss_icon_color?`color:${d.ss_icon_color};`:"")+(d.ss_icon_size?`--mdc-icon-size:${d.ss_icon_size}px;width:${d.ss_icon_size}px;height:${d.ss_icon_size}px;`:""),J5=u1=>{if(!K5)return Z;let R1=u1==="sunrise"?d.sunrise_icon||"mdi:weather-sunset-up":d.sunset_icon||"mdi:weather-sunset-down";return _`<ha-icon class="wsfc-sunarc-ssicon" .icon=${R1} style=${T5}></ha-icon>`},b3=(u1,R1,h2,W1)=>{let v2=_`<div class="wsfc-sunarc-endtext">
        ${Y5?_`<div class="wsfc-sunarc-time" style=${S3}>${u1}</div>`:Z}
        ${Q5?_`<div class="wsfc-sunarc-cap" style=${w3}>${R1}</div>`:Z}
      </div>`,h5=J5(W1);return _`<div class="wsfc-sunarc-end${h2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${X5==="above"?"column":X5==="below"?"column-reverse":X5==="right"?"row-reverse":"row"};">${h5}${v2}</div>
      </div>`},A1=Y5||Q5||K5,w2=A1?_`<div class="wsfc-sunarc-labels">
          ${b3(this._wfcFmtTime(A,i2),"sunrise",!1,"sunrise")}
          ${b3(this._wfcFmtTime(x,i2),"sunset",!0,"sunset")}
        </div>`:Z,_1=d.labels_position;_1==="below"||_1==null?_1=0:_1==="above"?_1=100:_1==="mid"?_1=50:_1=H(Number(_1),0,100);let P5=d.baseline_mode==="sky"&&c.sun_position,u0=P5?this._wfcRenderSunPosition(c,m):Z,y3=P5&&u0!==Z?Z:y1`<line class="wsfc-sunarc-horizon" x1="0" y1="${U1}" x2="${w1}" y2="${U1}"></line>`,Z3=_`
      <div class="wsfc-sunarc-svg-wrap" style="height:${n5}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${w1} 100" preserveAspectRatio="none">
          ${y3}
          <path class="wsfc-sunarc-path" d=${W2.trim()}></path>
          ${V5}
          ${X1}
        </svg>
        ${s5}
        ${A1&&_1>0&&_1<100?_`<div class="wsfc-sunarc-overlay" style="top:${(100-_1).toFixed(1)}%;transform:translateY(-50%);">${w2}</div>`:Z}
      </div>
    `;return _`
      <div class="wsfc-sunarc-section">
        ${A1&&_1>=100?w2:Z}
        ${Z3}
        ${P5&&u0!==Z?_`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-U1)/100)*n5).toFixed(1)}px;">${u0}</div>`:Z}
        ${A1&&_1<=0?w2:Z}
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
    </style>`};let q=G5.prototype,U9=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),V7={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},I0=null;function j9(){return I0||(I0=new Set,Object.values(K9).forEach(c=>c.forEach(m=>I0.add(m)))),I0}function G9(c,m){let d=[];return c.forEach(A=>{if(!m.has(A.name))if(A.schema){let x=G9(A.schema,m);x.length&&d.push({...A,schema:x})}else d.push(A)}),d}function g3(c){let m=j9(),d=new Set([...m,...U9]);c=G9(c,d);let A=new Map,x=[];c.forEach(W=>{U9.has(W.name)||(W.type==="expandable"?x.push(W):A.set(W.name,W))});let w=W=>W.map(z=>A.get(z)).filter(Boolean),b=(W,z,o1)=>{let p1=w(o1);return p1.length?[{name:W,type:"expandable",flatten:!0,icon:z,schema:p1}]:[]},E=W=>x.find(z=>z.name===W),R=[];{let W=E("attribute_entities");W&&R.push(V7.attribute_entities?{...W,icon:V7.attribute_entities}:W)}return R}let Or=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],Lt=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],q9=["tap_action","hold_action","double_tap_action"],Y9=["show_condition_effects"],Q9=[],K9={current:["current.show_attributes"],hourly:[],daily:[]},X9={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},lt="Weather Flex sections";q.render=function(){if(!this.hass||!this._config)return Z;let c=N8(this._config),m=this._getSelectedAttributes(c),d=this._schema(this.localize.bind(this),m,c["forecast.mode"]),A=g3(d),x=b=>X9[b.name]||this._computeLabel(b)||b.name,w=this._wfcAccordionEnabled();return _`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${lt}</span>
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
    `},q._wfcCardAppearancePanel=function(){let c=l2(this._config).card||{},m="card";return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${V7.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(Y9)}
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
    `};let i4=4;q._wfcEdSources=function(){return r4(this._config,this.hass)},q._wfcCommitSources=function(c){let m=c.filter(W=>W&&W.ref).map(W=>{let z={};for(let p1 in W.overrides||{})W.overrides[p1]&&(z[p1]=W.overrides[p1]);let o1={ref:W.ref};return Object.keys(z).length&&(o1.overrides=z),W.disabled&&(o1.disabled=!0),o1}),d={...this._config.metric_sources||{}};delete d.primary,delete d.fallback,delete d.custom,delete d.device_map,m.length?d.sources=m:delete d.sources;let A={...this._config,metric_sources:d},x=W=>{let z=this.hass&&this.hass.states[W],o1=z&&z.attributes&&z.attributes.supported_features;return typeof o1=="number"&&(o1&7)!==0},w=W=>W.map(z=>z.ref).filter(z=>typeof z=="string"&&z.startsWith("weather.")),b=w(m.filter(W=>!W.disabled)),E=w(m),R=b.find(x)||b[0]||E.find(x)||E[0];R&&(A.entity=R),Object.keys(d).length===0&&delete A.metric_sources,o2(this,"config-changed",{config:A})},q._wfcSetSourceRef=function(c,m){let d=this._wfcEdSources();d[c]&&(m?d[c]={ref:m,overrides:d[c].overrides||{}}:d.splice(c,1),this._wfcCommitSources(d))},q._wfcAddSource=function(c){if(!c)return;let m=this._wfcEdSources();m.length>=i4||(m.push({ref:c,overrides:{}}),this._wfcCommitSources(m))},q._wfcMoveSource=function(c,m){let d=this._wfcEdSources(),A=c+m;if(c<0||A<0||A>=d.length)return;let x=d[c];d[c]=d[A],d[A]=x,this._wfcCommitSources(d)},q._wfcRemoveSource=function(c){let m=this._wfcEdSources();c<0||c>=m.length||(m.splice(c,1),this._wfcCommitSources(m))},q._wfcToggleSourceDisabled=function(c){let m=this._wfcEdSources();m[c]&&(m[c].disabled=!m[c].disabled,this._wfcCommitSources(m))},q._wfcSetSourceOverride=function(c,m,d){let A=this._wfcEdSources();if(!A[c])return;let x={...A[c].overrides||{}};d?x[m]=d:delete x[m],A[c].overrides=x,this._wfcCommitSources(A)},q._wfcLiveValue=function(c,m){let d=this.hass&&this.hass.states[c];if(!d)return"";let A,x;return c.startsWith("weather.")?(A=d.attributes?d.attributes[m]:null,x=d.attributes&&d.attributes[m+"_unit"]):(A=d.state,x=d.attributes&&d.attributes.unit_of_measurement),A==null||A===""||A==="unknown"||A==="unavailable"?"":x?`${A} ${x}`:`${A}`},q._wfcAvailableMetrics=function(){let c=new Set;if(!this.hass)return c;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let A of this._wfcEdSources())if(!A.disabled)if(A.overrides&&Object.keys(A.overrides).forEach(x=>{c.add(x),m.add(A.overrides[x])}),K1(A.ref)){let x=x3(this._config,this.hass,S2(A.ref));Object.keys(x).forEach(w=>{c.add(w),m.add(x[w])})}else A.ref&&m.add(A.ref);m.forEach(A=>{let x=this.hass.states[A];x&&x.attributes&&Object.keys(x.attributes).forEach(w=>c.add(w))});let d=A=>{if(Array.isArray(A))for(let x of A)x&&Object.keys(x).forEach(w=>c.add(w))};return d(this._hourlyForecastData),d(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(A=>{A&&(d(A.hourly),d(A.daily))}),c};function Mt(c){return String(c).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let ct={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function C4(c){return ct[c]||Mt(c)}q._wfcMetricOptions=function(c,m){let d=this._wfcAvailableMetrics(),A=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(c||[]).forEach(x=>{let w=C4(x);A.push({value:x,label:d.has(x)?w:`${w} (unavailable)`})}),A},q._wfcSourceMappingEditor=function(c,m){let d=m.ref,A=m.overrides||{},x=K1(d),w=x?S2(d):null,b=x?n7(this.hass,w):{},E=z=>{if(x)return b[z]||"";if(!d)return"";if(d.startsWith("weather.")){let o1=this.hass&&this.hass.states[d];return o1&&o1.attributes&&o1.attributes[z]!=null?d:""}return""},R=x?{include_entities:H7(this.hass,w)}:{},W=z=>{let o1=z.key,p1=A[o1]||E(o1),N=!!A[o1],w1=p1?this._wfcLiveValue(p1,o1):"",U1=[{name:"e",selector:{entity:R}}],j1=N?" (override)":p1?"":" \u2014 none";return _`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:p1}}
            .schema=${U1}
            .computeLabel=${()=>z.label+j1}
            @value-changed=${G1=>this._wfcSetSourceOverride(c,o1,G1.detail&&G1.detail.value&&G1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${w1||"\u2014"}</span>
        </div>
      `};return _`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${x?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${x?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${z0.map(W)}
        </div>
      </details>
    `},q._wfcSourceSummaryList=function(c){let m=c.ref,d=c.overrides||{},A=K1(m),x=A?n7(this.hass,S2(m)):{},w=E=>{if(d[E])return d[E];if(A)return x[E]||"";if(m&&m.startsWith("weather.")){let R=this.hass&&this.hass.states[m];return R&&R.attributes&&R.attributes[E]!=null?m:""}return""},b=[];return z0.forEach(E=>{let R=w(E.key);if(!R)return;let W=this._wfcLiveValue(R,E.key);b.push(_`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${E.label}</span>
          <span class="wsfc-cond-ent" title=${R}>${R}</span>
          <span class="wsfc-cond-val">${W||"\u2014"}</span>
        </div>
      `)}),b.length?_`<div class="wsfc-cond-list">${b}</div>`:Z},q._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},q._wfcToggleSrcMap=function(c){let m=this._wfcSrcMapOpen();m.has(c)?m.delete(c):m.add(c),this.requestUpdate&&this.requestUpdate()},q._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},q._wfcSourceMetricCount=function(c){let m=c.ref,d=c.overrides||{},A=new Set(Object.keys(d).filter(x=>d[x]));if(K1(m))Object.keys(x3(this._config,this.hass,S2(m))).forEach(x=>A.add(x));else if(m&&m.startsWith("weather.")){let x=this.hass&&this.hass.states[m];x&&x.attributes&&z0.forEach(w=>{x.attributes[w.key]!=null&&A.add(w.key)})}return A.size},q._wfcSourceRow=function(c,m,d){let A=c.ref,x=K1(A),w=this._config.entity,b=x&&this.hass&&this.hass.devices&&this.hass.devices[S2(A)],E=x?b&&(b.name_by_user||b.name)||S2(A):A,R=x?"Device":A&&A.startsWith("weather.")?"Weather":"Sensor",W=x?"mdi:access-point":A&&A.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",z=!x&&A&&A.startsWith("weather."),o1=z&&A===w,p1=this._wfcSrcMapOpen().has(A),N=!!c.disabled,w1=this._wfcSourceMetricCount(c),U1=`${w1} value${w1===1?"":"s"} mapped`,j1=o1?_`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:z?_`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:_`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,G1="",N1=A&&!x?this.hass&&this.hass.states[A]:null;if(x)G1=w1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!N1)G1=`\u26A0 Entity not found: ${A}`;else if(N1.state==="unavailable"||N1.state==="unknown")G1=`\u26A0 Currently ${N1.state}.`;else if(z&&!o1){let f1=N1.attributes&&N1.attributes.supported_features;G1=typeof f1=="number"&&(f1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else z||(G1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return _`
      <div class="wsfc-src-row ${N?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${W}></ha-icon>
          <span class="wsfc-src-name">${E} <span class="wsfc-src-type">${R}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===d-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${N?"mdi:eye-off":"mdi:eye"} title=${N?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${p1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(A)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${j1}<span class="wsfc-src-count">${U1}</span>${N?_`<span class="wsfc-src-count">· hidden</span>`:Z}</div>
        ${G1?_`<div class="wsfc-src-detail">${G1}</div>`:Z}
        ${this._wfcSourceSummaryList(c)}
        ${p1?this._wfcSourceMappingEditor(m,c):Z}
      </div>
    `},q._wfcWeatherSourcesPanel=function(){let c=this._wfcEdSources(),m=c.some(b=>b.ref&&!K1(b.ref)&&b.ref.startsWith("weather.")),d=c.length>=i4,A=!!this.__wfcAddSourceOpen&&!d,x=_`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${b=>{let E=b.detail&&b.detail.value&&b.detail.value.e;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(E))}}
      ></ha-form>`,w=_`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${b=>{let E=b.detail&&b.detail.value&&b.detail.value.d;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(a5+E))}}
      ></ha-form>`;return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${d?_`<p class="wsfc-hint">Maximum of ${i4} sources reached. Remove one to add another.</p>`:_`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${A?"mdi:close":"mdi:plus"}></ha-icon>${A?"Cancel":"Add Source"}
              </div>
              ${A?_`<div class="wsfc-add-pickers">${x}${w}</div>`:Z}
            `}
          ${c.length?c.map((b,E)=>this._wfcSourceRow(b,E,c.length)):_`<p class="wsfc-hint">No sources yet — add one above.</p>`}
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
    `},q._wfcSlotEntityForKeyEd=function(c,m){if(c.overrides&&c.overrides[m])return c.overrides[m];let d=c.ref;if(!d)return null;if(K1(d))return x3(this._config,this.hass,S2(d))[m]||null;if(d.startsWith("weather.")){let A=this.hass&&this.hass.states[d];return A&&A.attributes&&A.attributes[m]!=null?d:null}return null},q._wfcSetForecastTypes=function(c,m){let d=c&&m?"both":c?"hourly":m?"daily":"both",A={...this._config,forecast_types:d};o2(this,"config-changed",{config:A})},q._wfcAdvancedPanel=function(){let c=this._config.forecast_types||"both",m=c==="both"||c==="hourly",d=c==="both"||c==="daily";return _`
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
          ${this._wfcStockFormFor(Q9)}
        </div>
      </details>
    `},q._wfcUserActionsPanel=function(){let c=this._wfcStockFormFor(Lt),m=this._wfcStockFormFor(q9),d=this._config.forecast||{};return _`
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
    `};let dt=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];q._wfcForecastTypeControls=function(c){let m=this._config.forecast||{},d=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],A=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],x=W=>m[`${W}_mode`]||m.mode||"simple",w=W=>(m[`${W}_extra_attribute`]!=null?m[`${W}_extra_attribute`]:m.extra_attribute)||"none",b=W=>(m[`${W}_chart_attribute`]!=null?m[`${W}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",E=(W,z,o1)=>{let p1=m[`${W}_${z}`];if(p1!=null)return!!p1;let N=m[z];return N!=null?!!N:o1},R=x(c)==="chart";return _`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${c}_mode`,"Display mode",d,x(c),"simple")}
        ${this._wfcForecastSelect(`${c}_extra_attribute`,"Extra metric",A,w(c),"none")}
      </div>
      ${R?_`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${c}_chart_attribute`,"Chart metric",dt,b(c),"temperature_and_precipitation")}
          </div>`:Z}
      ${this._wfcConfigCheckbox(`forecast.${c}_show_sun_times`,"Show sunrise & sunset times",E(c,"show_sun_times",!0),!0)}
      ${R?_`
            ${this._wfcConfigCheckbox(`forecast.${c}_use_color_thresholds`,"Use color thresholds",E(c,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${c}_show_attribute_selector`,"Show metric selector",E(c,"show_attribute_selector",!1),!1)}`:Z}
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
    </style>`};let pt="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";q._wfcCustomMetricsBody=function(){let c=t7(this._config.current&&this._config.current.show_attributes);return _`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${c.map((m,d)=>this._renderCustomAttributeRow(m,d))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${pt}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},q._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let o4={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function _3(c){if(c&&c.detail&&c.detail.value!==void 0)return c.detail.value;let m=c&&c.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function J2(c){let m=c&&c.target;return m&&typeof m.checked=="boolean"?m.checked:!!(c&&c.detail&&c.detail.value)}q._wfcState=function(){return JSON.parse(JSON.stringify(l2(this._config)))},q._wfcCommit=function(c){let m={...this._config,wfc:c};o2(this,"config-changed",{config:m})},q._wfcResetSection=function(c){let d=T2(this._config)[c];if(!d)return;let A=this._wfcState(),x=!!(A[c]&&A[c].show);A[c]={...JSON.parse(JSON.stringify(d)),show:x},this._wfcCommit(A)},q._wfcMoveSection=function(c,m){let d=this._wfcState(),A=d.order.indexOf(c),x=A+m;if(A<0||x<0||x>=d.order.length)return;let w=d.order[A];d.order[A]=d.order[x],d.order[x]=w,this._wfcCommit(d)},q._wfcCommitMetrics=function(c,m){let d=this._wfcState();d[c]||(d[c]={});let A=D(d[c]),x=A.map(b=>b.key),w={};A.forEach(b=>w[b.key]=b.pos),m(x,w),d[c].forecast_metric_order=x,d[c].forecast_metric_pos=w,delete d[c].forecast_temps,delete d[c].forecast_icons,delete d[c].forecast_extra,delete d[c].forecast_row_order,delete d[c].forecast_stack,this._wfcCommit(d)},q._wfcMoveMetric=function(c,m,d){this._wfcCommitMetrics(c,A=>{let x=A.indexOf(m),w=x+d;if(x<0||w<0||w>=A.length)return;let b=A[x];A[x]=A[w],A[w]=b})},q._wfcSetMetricPos=function(c,m,d){this._wfcCommitMetrics(c,(A,x)=>{x[m]=d})},q._wfcSetMetricStyle=function(c,m,d,A){let x=this._wfcState();x[c]||(x[c]={});let w={...x[c].forecast_metric_style||{}},b={...w[m]||{}};A==null||A===""?delete b[d]:b[d]=A,Object.keys(b).length?w[m]=b:delete w[m],x[c].forecast_metric_style=w,this._wfcCommit(x)},q._wfcMetricsOrder=function(c,m){let d=D(m),A=m.forecast_metric_style||{};return d.map((x,w,b)=>{let E=A[x.key]||{},R=x.key==="icons",W=x.key!=="temps";return _`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${P[x.key]||x.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${z=>z.stopPropagation()}
              @change=${z=>this._wfcSetMetricPos(c,x.key,z.target.value)}
            >
              ${$.map(z=>_`<option value=${z.value} ?selected=${z.value===x.pos}>${z.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${z=>{z.preventDefault(),z.stopPropagation(),this._wfcMoveMetric(c,x.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${w===b.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${z=>{z.preventDefault(),z.stopPropagation(),this._wfcMoveMetric(c,x.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${z=>this._wfcSetMetricStyle(c,x.key,"every",z.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(z=>({value:String(z),label:z+(z>1?" hours":" hour")}))].map(z=>_`<option value=${z.value} ?selected=${z.value===(E.every!=null?String(E.every):"")}>${z.label}</option>`)}
              </select>
            </label>
            ${W?_`
                  ${this._wfcColorField("Icon color",E.icon_color,z=>this._wfcSetMetricStyle(c,x.key,"icon_color",z.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",E.icon_size,z=>this._wfcSetMetricStyle(c,x.key,"icon_size",parseFloat(_3(z))||""))}`:Z}
            ${R?Z:_`
                  ${this._wfcColorField("Text color",E.text_color,z=>this._wfcSetMetricStyle(c,x.key,"text_color",z.target.value))}
                  ${this._wfcPlainNum("Font size (px)",E.text_size,z=>this._wfcSetMetricStyle(c,x.key,"text_size",parseFloat(_3(z))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${z=>this._wfcSetMetricStyle(c,x.key,"contrast",z.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(z=>_`<option value=${z.value} ?selected=${z.value===(E.contrast||"")}>${z.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},q._wfcToggleSection=function(c,m){let d=this._wfcState();d[c]||(d[c]={}),d[c].show=J2(m),this._wfcCommit(d)},q._wfcToggleSectionShow=function(c){let m=this._wfcState();m[c]||(m[c]={}),m[c].show=!m[c].show,this._wfcCommit(m)},q._wfcSetSecNum=function(c,m,d){let A=this._wfcState(),x=parseFloat(_3(d));A[c][m]=isNaN(x)?void 0:x,this._wfcCommit(A)},q._wfcSetSecField=function(c,m,d){let A=this._wfcState();A[c]||(A[c]={}),A[c][m]=d,this._wfcCommit(A)},q._wfcToggleSecField=function(c,m,d){this._wfcSetSecField(c,m,J2(d))},q._wfcSetForecastNum=function(c,m){let d={...this._config.forecast||{}};m==null||m<=0?delete d[c]:d[c]=m,o2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcSetConfigNum=function(c,m,d){let[A,x]=c.split("."),w={...this._config},b={...w[A]||{}},E=m==null||m===""||isNaN(Number(m))?null:Number(m);E==null?delete b[x]:b[x]=E,w[A]=b,o2(this,"config-changed",{config:w})},q._wfcConfigSlider=function(c,m,d,A,x){let w=N0(c,d||""),b=A!=null?H(Number(A),w.min,w.max):Number(x);return this._wfcSliderTpl(m,d,w,b,E=>this._wfcSetConfigNum(c,E.target.value,x))},q._wfcSetConfigStr=function(c,m,d){let A={...this._config};if(c.indexOf(".")===-1)d&&(m==null||m==="")?delete A[c]:A[c]=m;else{let[x,w]=c.split("."),b={...A[x]||{}};d&&(m==null||m==="")?delete b[w]:b[w]=m,A[x]=b}o2(this,"config-changed",{config:A})},q._wfcConfigSelect=function(c,m,d,A,x,w){let b=String(A??x);return _`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${E=>this._wfcSetConfigStr(c,E.target.value,w)}>
          ${d.map(E=>_`<option value=${String(E.value)} ?selected=${String(E.value)===b}>${E.label}</option>`)}
        </select>
      </label>
    `},q._wfcSetConfigBool=function(c,m,d){let A={...this._config},x=(w,b)=>{m===!!d?delete w[b]:w[b]=m};if(c.indexOf(".")===-1)x(A,c);else{let[w,b]=c.split("."),E={...A[w]||{}};x(E,b),A[w]=E}o2(this,"config-changed",{config:A})},q._wfcConfigCheckbox=function(c,m,d,A){let x=d==null?!!A:!!d;return this._wfcCheckbox(m,x,w=>this._wfcSetConfigBool(c,w.target.checked,A))},q._wfcConfigText=function(c,m,d,A){return _`
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
    `},q._wfcNumSecField=function(c,m,d,A){let x=parseFloat(_3(d));this._wfcSetSecField(c,m,isNaN(x)?A:x)},q._wfcMoveDetail=function(c,m){let d=this._wfcState(),A=d.details.items,x=A.findIndex(E=>E.key===c),w=x+m;if(x<0||w<0||w>=A.length)return;let b=A[x];A[x]=A[w],A[w]=b,this._wfcCommit(d)},q._wfcToggleDetail=function(c,m){let d=this._wfcState(),A=d.details.items.find(x=>x.key===c);A&&(A.show=J2(m)),this._wfcCommit(d)},q._wfcToggleDetailShow=function(c){let m=this._wfcState(),d=m.details.items.find(A=>A.key===c);d&&(d.show=!d.show,this._wfcCommit(m))},q._wfcSetDetailValue=function(c,m,d){let A=this._wfcState(),x=A.details.items.find(w=>w.key===c);x&&(x[m]=d),this._wfcCommit(A)},q._wfcSetDetail=function(c,m,d){let A=this._wfcState(),x=A.details.items.find(b=>b.key===c);if(!x)return;let w=_3(d);if(m==="icon_size"||m==="text_size"){let b=parseFloat(w);w=isNaN(b)?void 0:b}else(w===""||w==null)&&(w=void 0);x[m]=w,this._wfcCommit(A)},q._wfcColorField=function(c,m,d){return _`
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
          @change=${E=>this._wfcSetSecField(c,m,E.target.value)}
        >
          ${A.map(E=>_`<option value=${String(E.value)} ?selected=${String(E.value)===b}>${E.label}</option>`)}
        </select>
      </label>
    `};let c1={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function N0(c,m){return/chip_scale/.test(c)?{min:50,max:250,step:5}:/chip_columns/.test(c)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(c)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(c)?{min:0,max:48,step:1}:/header_icon_size/.test(c)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(c)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(c)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(c)?{min:-40,max:40,step:1}:/shadow_blur/.test(c)?{min:0,max:80,step:1}:/border_radius/.test(c)?{min:0,max:48,step:1}:/border_width/.test(c)?{min:0,max:12,step:1}:/hourly_slots/.test(c)?{min:0,max:48,step:1}:/daily_slots/.test(c)?{min:0,max:14,step:1}:/labels_position|opacity/.test(c)?{min:0,max:100,step:1}:/indent/.test(c)?{min:0,max:120,step:2}:/height/.test(c)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(c)?{min:8,max:100,step:1}:/font_size|_size$/.test(c)?{min:8,max:48,step:1}:/_width$/.test(c)?{min:1,max:12,step:1}:/_length$/.test(c)?{min:5,max:100,step:5}:/hourly_group_size/.test(c)?{min:1,max:4,step:1}:/temperature_precision/.test(c)?{min:0,max:2,step:1}:/hours/.test(c)?{min:1,max:48,step:1}:c1[m]||c1.px}q._wfcNumField=function(c,m,d,A,x,w){let b=N0(m,A||""),E=x!=null?Number(x):Number(w);return this._wfcSliderTpl(d,A,b,E,R=>this._wfcNumSecField(c,m,R,w))},q._wfcPlainSlider=function(c,m,d,A,x,w){let b=N0(x||"",m||""),E=d!=null?Number(d):Number(A);return this._wfcSliderTpl(c,m,b,E,w)},q._wfcSlotSlider=function(c,m,d){let A=N0(m,""),x=d!=null?H(Number(d),A.min,A.max):0,w=b=>Number(b)<=0?"All":String(b);return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(x)}
          @input=${b=>{let E=b.target.closest(".wsfc-slider-row"),R=E&&E.querySelector(".wsfc-slider-num");R&&(R.textContent=w(b.target.value))}}
          @change=${b=>this._wfcSetForecastNum(m,parseInt(b.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${w(x)}></span></span>
      </div>
    `},q._wfcAutoSizeField=function(c,m,d){let A=N0(m,""),x=this._wfcState()[c]||{},w=H(parseInt(x[m],10)||0,A.min,A.max),b=E=>Number(E)<=0?"Auto":`${E}px`;return _`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(w)}
          @input=${E=>{let R=E.target.closest(".wsfc-slider-row"),W=R&&R.querySelector(".wsfc-slider-num");W&&(W.textContent=b(E.target.value))}}
          @change=${E=>this._wfcSetSecField(c,m,parseInt(E.target.value,10)||0)}
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
          @input=${b=>{let E=b.target.closest(".wsfc-slider-row"),R=E&&E.querySelector(".wsfc-slider-num");R&&(R.textContent=b.target.value)}}
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
    `};let a4=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];q._wfcDividerControls=function(c,m){return _`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",m.divider_above,d=>this._wfcToggleSecField(c,"divider_above",d))}
      ${m.divider_above?_`
            <div class="wsfc-row">
              ${this._wfcNumField(c,"divider_above_width","Thickness","px",m.divider_above_width,1)}
              ${this._wfcNumField(c,"divider_above_length","Length","%",m.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"divider_above_style","Line style",a4,m.divider_above_style,"solid")}
            </div>`:Z}

      ${this._wfcCheckbox("Section Divider Below",m.divider_below,d=>this._wfcToggleSecField(c,"divider_below",d))}
      ${m.divider_below?_`
            <div class="wsfc-row">
              ${this._wfcNumField(c,"divider_below_width","Thickness","px",m.divider_below_width,1)}
              ${this._wfcNumField(c,"divider_below_length","Length","%",m.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(c,"divider_below_style","Line style",a4,m.divider_below_style,"solid")}
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
        ${this._wfcBackgroundControls(c,m)}`)},q._wfcStockForm=function(c){return this._wfcStockFormFor(K9[c])},q._wfcStockFormFor=function(c){if(!c||!c.length)return Z;let m=N8(this._config),d=this._getSelectedAttributes(m),A=this._schema(this.localize.bind(this),d,"chart"),x=new Map,w=R=>R.forEach(W=>{W.schema?w(W.schema):x.set(W.name,W)});w(A);let b=c.map(R=>x.get(R)).filter(Boolean);if(!b.length)return Z;let E=R=>X9[R.name]||this._computeLabel(R)||R.name;return _`
      <ha-form
        .hass=${this.hass}
        .data=${m}
        .schema=${b}
        .computeLabel=${E}
        .computeHelper=${R=>this._wfcHelper(R)}
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
    `},q._wfcSectionOptionsBody=function(c,m){let d=m[c]||{},A=c==="details",x=c==="current",w=c==="sun_position",b=c==="sun_arc",E=c==="hourly",R=c==="daily",W=this._config.forecast||{},z=this._config.current||{},o1=H(parseInt(d.columns,10)||2,1,4),p1=this._wfcMetricOptions(typeof R2<"u"?R2:[],!0);return _`
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
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",p1,z.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(c)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(c)}
          ${E?_`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",W.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",W.hourly_group_size,1)}`:Z}
          ${R?_`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",W.daily_slots)}`:Z}
          ${A?_`
                ${this._wfcGroup("Layout")}
                ${d.chips?_`
                      ${this._wfcSelect(c,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.chip_layout==="column"?"wrap":d.chip_layout||"wrap","wrap")}
                      ${(d.chip_layout||"wrap")==="grid"?_`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(d.chip_columns,10)>0,N=>this._wfcSetSecField(c,"chip_columns",N.target.checked?H(parseInt(d.chip_columns,10)||2,1,6):0))}
                            ${parseInt(d.chip_columns,10)>0?this._wfcNumField(c,"chip_columns","Columns","",parseInt(d.chip_columns,10)||2,2):Z}`:Z}`:_`
                      ${this._wfcSelect(c,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.details_layout||"grid","grid")}
                      ${(d.details_layout||"grid")==="grid"?this._wfcNumField(c,"columns","Columns","",o1,2):Z}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!d.chips,N=>this._wfcToggleSecField(c,"chips",N))}
                ${d.chips?_`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square",N=>this._wfcSetSecField(c,"chip_pill",N.target.checked))}
                      ${(d.chip_pill!=null?d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?Z:this._wfcNumField(c,"chip_radius","Corner radius (0 = square)","px",d.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((d.chip_scale==null?1:d.chip_scale)*100),100,"chip_scale",N=>this._wfcSetSecField(c,"chip_scale",H((parseInt(N.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(c,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",d.chip_text_color,N=>this._wfcSetSecField(c,"chip_text_color",N.target.value))}
                      ${this._wfcColorField("Chip background",d.chip_bg,N=>this._wfcSetSecField(c,"chip_bg",N.target.value))}
                      ${this._wfcColorField("Chip border",d.chip_border_color,N=>this._wfcSetSecField(c,"chip_border_color",N.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",d.chip_show_icon!==!1,N=>this._wfcToggleSecField(c,"chip_show_icon",N))}
                      ${d.chip_show_icon!==!1?_`
                            ${this._wfcSelect(c,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],d.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(c,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",d.chip_icon_color,N=>this._wfcSetSecField(c,"chip_icon_color",N.target.value))}`:Z}
                      ${this._wfcCheckbox("Show metric name in chip",!!d.chip_show_name,N=>this._wfcToggleSecField(c,"chip_show_name",N))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!d.chip_hide_when_off,N=>this._wfcToggleSecField(c,"chip_hide_when_off",N))}`:Z}

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
                        ${this._wfcColorField("Icon color",d.global_icon_color,N=>this._wfcSetSecField(c,"global_icon_color",N.target.value))}
                        ${this._wfcColorField("Text color",d.global_text_color,N=>this._wfcSetSecField(c,"global_text_color",N.target.value))}
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
                    ${this._wfcSelect(c,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(N=>({value:N,label:N+(N>1?" hours":" hour")}))],d.ticks_every==null?0:d.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(c,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",_`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",d.marker_color,N=>this._wfcSetSecField(c,"marker_color",N.target.value))}
                      ${this._wfcNumField(c,"marker_opacity","Marker opacity","%",d.marker_opacity==null?100:d.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",_`
                    <div class="wsfc-row">
                      ${this._wfcSelect(c,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ss_markers_position,"hidden")}
                    </div>
                    ${d.ss_markers_position&&d.ss_markers_position!=="hidden"?_`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",d.ss_markers_color,N=>this._wfcSetSecField(c,"ss_markers_color",N.target.value))}
                          ${this._wfcNumField(c,"ss_markers_opacity","Marker opacity","%",d.ss_markers_opacity==null?100:d.ss_markers_opacity,100)}
                        </div>`:Z}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",_`
                    ${this._wfcSubPanel("Metrics Defaults",_`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!d.forecast_metric_detail_icons,N=>this._wfcToggleSecField(c,"forecast_metric_detail_icons",N))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!d.forecast_temp_with_icon,N=>this._wfcToggleSecField(c,"forecast_temp_with_icon",N))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(c,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(N=>({value:N,label:N+(N>1?" hours":" hour")}))],d.forecast_every,3)}
                          ${this._wfcNumField(c,"forecast_font_size","Text size","px",d.forecast_font_size,11)}
                          ${this._wfcNumField(c,"forecast_icon_size","Icon size","px",d.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",d.forecast_temp_color,N=>this._wfcSetSecField(c,"forecast_temp_color",N.target.value))}
                        ${this._wfcColorField("Icon color",d.forecast_icon_color,N=>this._wfcSetSecField(c,"forecast_icon_color",N.target.value))}
                        ${y.some(N=>d.forecast_metric_pos&&d.forecast_metric_pos[N]&&d.forecast_metric_pos[N]!=="hidden"||O(d).includes(N))?this._wfcColorField("Metric Text Color",d.forecast_extra_color,N=>this._wfcSetSecField(c,"forecast_extra_color",N.target.value)):Z}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(c,d)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",_`
                    ${this._wfcNumField(c,"height","Bar height","px",d.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",d.weather_adjust!==!1,N=>this._wfcToggleSecField(c,"weather_adjust",N))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",d.day_color,N=>this._wfcSetSecField(c,"day_color",N.target.value))}
                      ${this._wfcColorField("Night color",d.night_color,N=>this._wfcSetSecField(c,"night_color",N.target.value))}
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
                ${this._wfcPlainSlider("Labels position","",C1(d.labels_position),0,"labels_position",N=>this._wfcSetSecField(c,"labels_position",H(parseInt(N.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${d.sun_icon||""}
                  @value-changed=${N=>this._wfcSetSecField(c,"sun_icon",N.detail&&N.detail.value||"")}
                ></ha-icon-picker>
                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!d.night_moon,N=>this._wfcToggleSecField(c,"night_moon",N))}
                ${d.night_moon?_`<ha-icon-picker
                      label="Moon icon"
                      .value=${d.moon_icon||"mdi:weather-night"}
                      @value-changed=${N=>this._wfcSetSecField(c,"moon_icon",N.detail&&N.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:Z}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],d.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",d.show_arc_ticks,N=>this._wfcToggleSecField(c,"show_arc_ticks",N))}
                ${this._wfcCheckbox("Show tick marks on the baseline",d.show_base_ticks!==!1,N=>this._wfcToggleSecField(c,"show_base_ticks",N))}
                <div class="wsfc-row">
                  ${this._wfcSelect(c,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],d.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",d.tick_color,N=>this._wfcSetSecField(c,"tick_color",N.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",d.show_times!==!1,N=>this._wfcToggleSecField(c,"show_times",N))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",d.show_captions!==!1,N=>this._wfcToggleSecField(c,"show_captions",N))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",d.show_ss_icons,N=>this._wfcToggleSecField(c,"show_ss_icons",N))}
                ${d.show_ss_icons?_`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${d.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${N=>this._wfcSetSecField(c,"sunrise_icon",N.detail&&N.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${d.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${N=>this._wfcSetSecField(c,"sunset_icon",N.detail&&N.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(c,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],d.ss_icon_position,"left")}
                        ${this._wfcNumField(c,"ss_icon_size","Icon size","px",d.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",d.ss_icon_color,N=>this._wfcSetSecField(c,"ss_icon_color",N.target.value))}
                    `:Z}

                ${this._wfcTextControls(c,"time","Time text",13)}
                ${this._wfcTextControls(c,"caption","Sunrise / sunset caption",11)}
              `:Z}

          ${w?Z:this._wfcSectionStyles(c,d)}
        </div>
    `};let H4={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};q._wfcPlainNum=function(c,m,d){return this._wfcPlainSlider(c,"px",m,16,"_size",d)},q._wfcDetailRows=function(c){return c.details.items.map((d,A,x)=>{let w=C[d.key]||{};return _`
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
      `})};let n4=["current","details","hourly","daily","sun_arc","sun_position"];function V4(c){let m=n4.filter(A=>c.includes(A)),d=c.filter(A=>!n4.includes(A));return[...m,...d]}q._wfcEditor=function(){let c=l2(this._config),m=V4(c.order),d=c.order.map((x,w,b)=>{let E=!!(c[x]&&c[x].show);return _`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${H4[x]||o4.options}></ha-icon>
          <span class="wsfc-order-name">${i[x]||x}</span>
          <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(x,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${w===b.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(x,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${E?"mdi:eye":"mdi:eye-off"} title=${E?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(x)}></ha-icon>
        </div>
      `}),A=m.map(x=>_`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${H4[x]||o4.options}></ha-icon><span class="wsfc-panel-title">${i[x]||x}</span></summary>
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${o4.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
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
    `};let s4=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];q._wfcClockPanel=function(c){let m="current",d=c.current||{},A=w=>w==="above"?"above-center":w==="below"?"below-center":w,x=d.clock_show_time!==!1;return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",x,w=>this._wfcToggleSecField(m,"clock_show_time",w))}
                ${x?_`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",s4,A(d.clock_placement),"right")}
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
                      ${this._wfcSelect(m,"clock_date_format","Date format",g2.map(w=>({value:w.value,label:w.label})),d.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...s4],d.clock_date_placement==="above"||d.clock_date_placement==="below"?A(d.clock_date_placement):d.clock_date_placement,"with_time")}
                        ${this._wfcNumField(m,"clock_date_font_size","Size","px",d.clock_date_font_size,12)}
                        ${this._wfcColorField("Date color",d.clock_date_color,w=>this._wfcSetSecField(m,"clock_date_color",w.target.value))}
                      </div>
                      ${this._wfcSelect(m,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_date_contrast!=null?d.clock_date_contrast:d.clock_contrast,"none")}`:Z}
        </div>
      </details>
    `},q._wfcYamlPanel=function(){let c;try{c=r1(this._config)}catch{c="# (unable to render YAML)"}return _`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${c}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,u2.__wfcResolve=l2,u2.__wfcBuild=r})();var W8=u2.prototype,Th=(r,t)=>({config:r,hass:t,_wfcSources:W8._wfcSources,_wfcSlotEntityForKey:W8._wfcSlotEntityForKey,_wfcMetricEntityChain:W8._wfcMetricEntityChain});function cn(r,t,e){return!r||!t?[]:W8._wfcMetricEntityChain.call(Th(r,t),e)}function Y7(r,t,e){return cn(r,t,e).find(i=>!i.startsWith("weather."))||null}function d5(r,t,e){for(let i of cn(r,t,e)){let C=t.states[i];if(C){if(i.startsWith("weather.")){let a=C.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:Ph(C,e),entity:i}}else if(!["unknown","unavailable",""].includes(C.state)){let a=Number(C.state);return{value:isNaN(a)?C.state:a,unit:C.attributes?.unit_of_measurement||"",entity:i}}}}return null}function Ph(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function U8(r,t,e,i,C=i){return r?.entities?.[C]||Y7(t,e,i)}function Eh(r,t){let e=[],i=r?.metric_sources?.sources||[];for(let C of i){if(C.disabled||typeof C.ref!="string"||!C.ref.startsWith("device:"))continue;let a=C.ref.slice(7);for(let H in t?.entities||{})t.entities[H]?.device_id===a&&e.push(H)}return e}function dn(r,t,e){let i=Eh(r,t).filter(C=>{let a=t.states[C];return a&&e.test(`${C} ${a.attributes?.friendly_name||""}`)});return i.find(C=>!/indoor|inside/i.test(C))||i[0]||null}function M0(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function pn(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>Y7(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let C=i.filter(a=>M0(t,a)!=null).length;return C===i.length?"online":C?"partial":"offline"}var c2={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24h[\s_-]?rain|rain[\s_-]?24h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?rain|rain[\s_-]?event/i},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function h3(r,t,e,i){if(i)return i;let C=c2[r];return C?C.key?Y7(t,e,C.key):C.find?dn(t,e,C.find):null:null}function j8(r,t,e){if(e!=null&&e!=="")return Number(e);let i=c2[r]?.digits;return i??(/inHg/i.test(t)?2:/psi|kPa/i.test(t)?1:0)}function un(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function mn(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var Fh=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Q7=r=>r==null||isNaN(r)?"\u2014":Fh[Math.round((r%360+360)%360/22.5)%16];var I2=r=>r.map(([t,e])=>({value:t,label:e})),G8=["6h","12h","24h","48h","7d","30d","90d","365d"],hn=I2([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),$h=I2([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),Dh=Object.entries(c2).map(([r,t])=>({value:r,label:t.label})),b5=r=>({entity:r?{domain:r}:{}}),f3={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:b5(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:b5("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Heading",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:Dh}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:b5()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"CSS color, e.g. #ef5350. Blank uses the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:I2([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"List of series: metric or entity, label, color, axis (left/right), style (line/area/dashed/bar), cumulative, band."},{name:"ranges",selector:{select:{multiple:!0,options:G8.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:G8.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:G8.map(r=>({value:r,label:r}))}}},{name:"entities.temperature",selector:b5("sensor")},{name:"entities.dew_point",selector:b5("sensor")},{name:"entities.humidity",selector:b5("sensor")},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:G8.map(r=>({value:r,label:r}))}}},{name:"entities.uv_index",label:"UV index sensor",selector:b5("sensor")},{name:"entities.solar_radiation",label:"Solar radiation sensor",selector:b5("sensor")},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:I2([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,schema:[{name:"view",selector:{select:{options:I2([["compass","Compass"],["rose","Wind rose (24h)"]])}}},{name:"show_chart",selector:{boolean:{}},default:!0},{name:"entities.wind_speed",selector:b5("sensor")},{name:"entities.wind_gust_speed",selector:b5("sensor")},{name:"entities.wind_bearing",selector:b5("sensor")},{name:"rose_bins",selector:{object:{}},helper:"Speed thresholds for the rose, in the sensor's unit, e.g. [1, 5, 10, 15, 25]."}]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:$h}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:hn}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...hn]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:I2([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:I2([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},{name:"show_facts",selector:{boolean:{}},default:!1,helper:"Dawn, sunrise, solar noon, sunset, dusk and daylight under the tracker."}]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."}]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"overlay",selector:{select:{options:I2([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:I2([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:I2([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:I2([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph (Statistics card)",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"preset",selector:{select:{options:I2([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:1,max:365,mode:"box"}}},{name:"period",selector:{select:{options:I2([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:I2([["line","Line"],["bar","Bar"]])}}},{name:"stat_types",selector:{select:{multiple:!0,options:I2([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra Statistics graph card options (e.g. min_y_axis, hide_legend)."}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:b5("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},flex:{tag:"wsfc-panel-flex",label:"Weather Flex sections",icon:"mdi:view-agenda-outline",span:6,rows:0,flex:!0,schema:[]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};f3.map=f3.radar;var xn=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Height in row units (0 = fit content)."},{name:"display",selector:{select:{options:I2([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Show a panel button for it."},{name:"show",selector:{boolean:{}},default:!0,helper:"Visible when the dashboard loads."}],gn=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Vertical: minimum height in row units."}],d2=r=>f3[r?.type]||null,r7=r=>Math.max(1,Math.min(12,Number(r.span??d2(r)?.span??6)));function _n(r,t){let e=d2(r)||{},i=r7(r),C=i;t==="medium"&&(C=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(C=Number(r.span_narrow??(i<=3?6:12)));let a=c0(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,C)),rows:a}}var c0=r=>Math.max(0,Number(r.rows??d2(r)?.rows??0)),K7=r=>r.in_bar??(r.display==="popup"?!0:d2(r)?.inBar??!0);var fn=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],An=new Set(["sky_bar","sun","sun_moon"]);function vn(r,t){let e=[],i=r.filter(V=>V&&An.has(V.type)),C=i.find(V=>V.type==="sky_bar"),a=i.find(V=>V.type==="sun"||V.type==="sun_moon"),H=!1;for(let V of r){if(!V||!An.has(V.type)){e.push(V);continue}let{type:s,sky_bar:M,show_moon:p,...h}=V,v={...h,type:"sky_tracker"};if(s==="sky_bar"&&(v.show_arc=!1),s==="sun"&&(v.show_facts=V.show_facts!==!1),C&&a&&(V===C||V===a)){if(H)continue;H=!0;let g=V===C?a:C,{type:y,sky_bar:O,show_moon:k,...P}=g;Object.assign(v,P,h),v.flex=Bh(g===C?g.flex:V.flex,g===C?V.flex:g.flex),delete v.show_arc,a.type==="sun"&&(v.show_facts=a.show_facts!==!1),v.flex||delete v.flex}e.push(v),s==="sun_moon"&&p!==!1&&e.push({type:"moon"})}if(t&&!e.some(V=>V?.type==="sky_tracker")){let V=e.findIndex(h=>h?.type==="hero"),M=e[V]?.flex?.wfc?.sun_position,p={type:"sky_tracker",span:12,rows:0,...M?{flex:{wfc:{sun_position:M}}}:{}};e.splice(V+1,0,p)}return e.map(V=>V?.type==="hero"?Rh(V):V)}function Rh(r){let{sky_bar:t,...e}=r;if(!e.flex?.wfc?.sun_position)return e;let{sun_position:C,...a}=e.flex.wfc,H={...e.flex,wfc:a};return Object.keys(a).length||delete H.wfc,Object.keys(H).length?e.flex=H:delete e.flex,e}function Bh(r,t){if(!r&&!t)return;let e={...t?.wfc||{}};return r?.wfc?.sun_position&&(e.sun_position={...e.sun_position||{},...r.wfc.sun_position}),{...t||{},...r||{},wfc:e}}function q8(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:fn,e=t.find(C=>C?.type==="hero"),i=!!e&&e.sky_bar!==!1&&e.flex?.wfc?.sun_position?.show!==!1&&t!==fn;return t=vn(t,i).map(C=>C?.type==="stack"?{...C,panels:vn(C.panels||[],!1)}:C),t=t.filter(C=>C&&f3[C.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(C=>C.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(C=>C.type==="hero"&&r.hero&&typeof r.hero=="object"&&!C.flex?{...C,flex:r.hero}:C)}var dr=new Map;function Y8(r,t,e,i){if(!r?.connection||!t)return()=>{};let C=`${t}|${e}`,a=dr.get(C);return a||(a={listeners:new Set,data:null,unsub:null},dr.set(C,a),a.unsub=r.connection.subscribeMessage(H=>{a.data=H?.forecast||[],a.listeners.forEach(V=>V(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(H=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,H),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(dr.delete(C),Promise.resolve(a.unsub).then(H=>typeof H=="function"&&H()).catch(()=>{}))}}function Sn(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(C=>new Date(C.datetime).toDateString()===i)||r[t]||null}var R0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function p5(r,t){if(!R0(t))return t===void 0?r:t;let e={...R0(r)?r:{}};for(let i of Object.keys(t))e[i]=R0(t[i])&&R0(e[i])?p5(e[i],t[i]):t[i];return e}function pr(r,t){if(R0(r)&&R0(t)){let e={};for(let i of Object.keys(r)){let C=pr(r[i],t[i]);C!==void 0&&(e[i]=C)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function X7(r){if(!R0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let C=R0(i)?X7(i):i;R0(C)&&!Object.keys(C).length||(t[e]=C)}return t}var Q8=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var ur="wsfc-flex-core",mr="wsfc-flex-core-editor";customElements.get(ur)||customElements.define(ur,u2);{let r=G5.prototype,t=r._wfcWeatherSourcesPanel,e=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":t.call(this)},r.render=function(){return this.wsfcMode!=="sources"?e.call(this):!this.hass||!this._config?"":_`${this._wfcEditorStyle()}${t.call(this)}`},r.updated=function(C){i?.call(this,C);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(H=>{let V=H.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();H.hidden=!!V&&!a.includes(V)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let H=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");H&&(H.open=!0,this.__wsfcOpened=!0)}}}var wn=u2.__wfcBuild,bn=r=>u2.__wfcResolve(r);function zh(r){return{...r,wfc:bn(r)}}function yn(r,t){let{entity:e,metric_sources:i,type:C,...a}={...r,wfc:bn(r)},{entity:H,metric_sources:V,...s}=zh(t);return pr(a,s)||{}}var K8=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(ur)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(C){this.error=C?.message||String(C),console.error("weather-station-flex-card: invalid Weather Flex config",C,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var A3=f4(B4(),1),Ih=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],Nh=r=>Ih.find(([t])=>r<t)[1];function Zn(r,t,e=31){let i=A3.getMoonIllumination(r).phase;for(let C=1;C<=e*24;C++){let a=new Date(r.getTime()+C*36e5),H=A3.getMoonIllumination(a).phase;if(t===0?H<i:i<t&&H>=t)return a;i=H}return null}function J7(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},C=A3.getMoonIllumination(t),a=e!=null?A3.getMoonTimes(t,e,i):{};return{phase:C.phase,name:Nh(C.phase),fraction:C.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:Zn(t,.5),nextNew:Zn(t,0)}}function X8(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let C=A3.getTimes(t,e,i),a=C.sunset-C.sunrise;return{sunrise:C.sunrise,sunset:C.sunset,noon:C.solarNoon,dawn:C.dawn,dusk:C.dusk,daylightMs:a}}var t4=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),J8=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});var Wh={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}},flex:{}},Uh={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},jh={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}},tt;function Gh(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(tt||(tt=new CSSStyleSheet,tt.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,tt],t.__wsfcFill=!0)}function S9(r,t){return{...Wh[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var On=g1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,y5=class extends L1{constructor(){super();I(this,"type","flex");I(this,"defaultTitle","Weather");I(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new K8}_coreConfig(){return p5(S9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return Z;let e=this._slot.update(this._coreConfig(),this.hass),i=this.type==="flex"?!!this.config?.title:this.config?.show_title!==!1;return _`
      ${i?e2(this.config,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${e}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}
      ${this.extra()}
    `}extra(){return Z}};I(y5,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),I(y5,"styles",[M2,On]);var _9=class extends y5{constructor(){super(...arguments);I(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,C=i>=900?"large":i<560?"narrow":"normal";C!==this._size&&(this._size=C)}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_coreConfig(){let e=S9("hero",this.station);return this._size==="large"&&(e=p5(e,Uh)),this._size==="narrow"&&(e=p5(e,jh)),e=p5(e,this.config?.flex||{}),this.cardBg&&(e=p5(e,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}})),e}updated(){Gh(this._slot.el)}render(){return!this.hass||!this.station?.entity?Z:_`<div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}`}};I(_9,"properties",{...y5.properties,cardBg:{attribute:!1}}),I(_9,"styles",[M2,On,g1`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var hr=class extends y5{constructor(){super(...arguments);I(this,"type","forecast");I(this,"defaultTitle","Forecast");I(this,"defaultIcon","mdi:calendar-week")}},fr=class extends y5{constructor(){super(...arguments);I(this,"type","hourly");I(this,"defaultTitle","Hourly forecast");I(this,"defaultIcon","mdi:clock-outline")}},Ar=class extends y5{constructor(){super(...arguments);I(this,"type","daily");I(this,"defaultTitle","Daily forecast");I(this,"defaultIcon","mdi:calendar-week")}};function vr(r,t){let e=p5(S9("sky_tracker",t),r?.flex||{}),i=e.wfc,C=i.sun_arc||(i.sun_arc={}),a=i.sun_position||(i.sun_position={}),H=r?.show_arc!==!1,V=r?.show_sky!==!1,s=r?.timeframe||"hours",M=Number(r?.hours??24),p=r?.anchor||"now_center";return C.timeframe_mode=s,a.timeframe_mode=s==="sunrise_sunset"?"match_arc":s,C.timeframe_hours=a.timeframe_hours=M,C.timeframe_anchor=a.timeframe_anchor=p,C.night_moon=r?.moon!==!1,r?.moon_phase===!1?C.moon_icon==="phase"&&(C.moon_icon="mdi:weather-night"):C.moon_icon="phase",H?(i.order=["sun_arc"],C.show=!0,C.baseline_mode=V?"sky":"line",a.show=!1):(i.order=["sun_position"],C.show=!1,a.show=V),e}var et=class extends y5{constructor(){super(...arguments);I(this,"type","sky_tracker");I(this,"defaultTitle","Sky Tracker");I(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return vr(this.config,this.station)}render(){if(!this.hass||!this.station?.entity)return Z;let e=this.config||{};return e.show_arc===!1&&e.show_sky===!1?_`${e2(e,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`:_`${e.title||e.show_title?e2(e,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?_`<div class="err">${this._slot.error}</div>`:Z}
      ${e.show_facts?this._facts():Z}`}_facts(){let e=X8(this.hass);if(!e)return Z;let i=t4(this.hass),C=H=>`${Math.floor(H/36e5)}h ${String(Math.round(H%36e5/6e4)).padStart(2,"0")}m`,a=[["Dawn",i.format(e.dawn)],["Sunrise",i.format(e.sunrise)],["Solar noon",i.format(e.noon)],["Sunset",i.format(e.sunset)],["Dusk",i.format(e.dusk)],["Daylight",C(e.daylightMs)]];return _`<div class="facts">${a.map(([H,V])=>_`<div><span>${H}</span>${V}</div>`)}</div>`}};I(et,"styles",[...y5.styles,g1`
      .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; font-size: 13px; }
      .facts div span { display: block; font-size: 11px; color: var(--wsfc-muted); }
    `]);customElements.get("wsfc-panel-flex")||customElements.define("wsfc-panel-flex",y5);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",_9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",hr);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",fr);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",Ar);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",et);k2.register($0,c5,z5,M3,F0,I5);var rt=[zH,NH];function v3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return v3("#"+i[1].split("").map(C=>C+C).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let C=parseInt(i[1],16);return`rgba(${C>>16&255},${C>>8&255},${C&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[C,a,H]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${C},${a},${H},${t})`}return e}function qh(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return C=>i.format(new Date(C))}function Yh(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function it(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",C="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:Yh(t,e)}}},scales:{x:{type:"linear",grid:{color:C},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:qh(t,e)}}},_text:i,_grid:C}}var kn=new Map;async function Tn(r,t){let e=kn.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return kn.set(r,{at:Date.now(),data:i}),i}var Qh=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function e4(r,t,e){return En(r,t,Date.now()-e*36e5,`h${e}`)}function Pn(r,t){let e=new Date;return e.setHours(0,0,0,0),En(r,t,e.getTime(),`d${e.toDateString()}`)}function En(r,t,e,i){let C=[...new Set(t.filter(Boolean))].sort();if(!C.length||!r?.callWS)return Promise.resolve({});let a=new Date,H=new Date(e);return Tn(`h|${i}|${C.join(",")}`,async()=>{let V=await r.callWS({type:"history/history_during_period",start_time:H.toISOString(),end_time:a.toISOString(),entity_ids:C,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),s={};for(let M of C)s[M]=(V?.[M]||[]).map(p=>({t:Math.round((p.lu??p.lc??0)*1e3),v:Qh(p.s)}));return s})}function Fn(r,t,e,i){let C=[...new Set(t.filter(Boolean))].sort();if(!C.length||!r?.callWS)return Promise.resolve({});let a=new Date,H=new Date(a.getTime()-e*864e5);return Tn(`s|${e}|${i}|${C.join(",")}`,async()=>{let V=await r.callWS({type:"recorder/statistics_during_period",start_time:H.toISOString(),end_time:a.toISOString(),statistic_ids:C,period:i,types:["mean","min","max","change"]}),s={};for(let M of C)s[M]=(V?.[M]||[]).map(p=>({t:typeof p.start=="number"?p.start:Date.parse(p.start),mean:p.mean??null,min:p.min??null,max:p.max??null,change:p.change??null}));return s})}function i7(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let C=0;C<r.length;C+=e){let a=r.slice(C,C+e),H=a.map(V=>V.v).filter(V=>V!=null);i.push({t:a[Math.floor(a.length/2)].t,v:H.length?H.reduce((V,s)=>V+s,0)/H.length:null})}return i}function Ct(r,t){let e=new Map,i=null;for(let C of r){if(C.v==null){i=null;continue}if(i!=null){let a=C.v>=i?C.v-i:C.v,H=Math.floor(C.t/t)*t;e.set(H,(e.get(H)||0)+a)}i=C.v}return[...e].map(([C,a])=>({t:C+t/2,v:Math.round(a*1e3)/1e3}))}function ot(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let C=Math.floor(i.t/t)*t,a=e.get(C)||[0,0];a[0]+=i.v,a[1]++,e.set(C,a)}return[...e].map(([i,[C,a]])=>({t:i+t/2,v:C/a}))}var $n={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},Dn=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],C7=class extends L1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let C=c2[e.metric]||{},a=h3(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),H=a&&this.hass.states[a];return{...e,entity:a,label:e.label||C.label||H?.attributes?.friendly_name||a||"\u2014",color:e.color||C.color||Dn[i%Dn.length],axis:e.axis==="right"?"right":"left",style:e.style||(C.chart==="bar"?"bar":"line"),cumulative:e.cumulative??C.cumulative??!1,unit:H?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>$n[e])}render(){if(!this.hass)return Z;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),C=t.length>1?h7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):Z;return _`
      ${e2(this.config,this.defaultIcon,this.defaultTitle,C)}
      ${this.config?.show_readings===!1?Z:_`<div class="readings">
            ${i.map(a=>{let H=M0(this.hass,a.entity);return f7(this,{label:a.label,value:H?.value,unit:H?.unit,digits:j8(a.metric,H?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?_`<div class="note">${this._error}</div>`:Z}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(C=>[C.entity,C.style,C.axis,C.color,C.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(C=>this._error=`History unavailable: ${C?.message||C}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=$n[t]||24,C=e.map(H=>H.entity).filter(Boolean),a=new Map;if(i<=48){let H=await e4(this.hass,C,i);for(let V of e){let s=H[V.entity]||[],M=i<=12?15*6e4:36e5,p=V.style==="bar"?V.cumulative?Ct(s,M):ot(s,M):i7(s);a.set(V,{line:p.map(h=>({x:h.t,y:h.v}))})}}else{let H=i>240?"day":"hour",V=await Fn(this.hass,C,i/24,H);for(let s of e){let M=V[s.entity]||[],p=s.style==="bar"&&s.cumulative?"change":"mean";a.set(s,{line:M.map(h=>({x:h.t,y:h[p]})),min:M.map(h=>({x:h.t,y:h.min})),max:M.map(h=>({x:h.t,y:h.max}))})}}this._error=C.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let C=this.renderRoot.querySelector("canvas");if(!C)return;let a=it(this,t,this.hass?.locale?.language),H=e.find(p=>p.axis==="left"),V=e.find(p=>p.axis==="right"),s=(p,h)=>{let v=p?.unit==="%",g={position:h,grid:h==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:$=>`${+$.toFixed(2)}${p?.unit&&p.unit.length<=3?p.unit:""}`}};v&&Object.assign(g,{min:0,max:100}),e.filter($=>$.axis===h).every($=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test($.metric||""))&&e.some($=>$.axis===h)&&(g.min=g.min??0),e.some($=>$.axis===(h==="left"?"left":"right")&&$.style==="bar")&&(g.beginAtZero=!0);let O=this.config||{},k=O[`${h}_min`],P=O[`${h}_max`];return k!=null&&k!==""&&(g.min=Number(k)),P!=null&&P!==""&&(g.max=Number(P)),g};(H||!V)&&(a.scales.y=s(H,"left")),V&&(a.scales.y2=s(V,"right"));let M=[];e.forEach((p,h)=>{let v=i.get(p);if(!v)return;let g=p.axis==="right"?"y2":"y",y={label:p.label,data:v.line,borderColor:p.color,yAxisID:g,order:h+1};p.style==="bar"?Object.assign(y,{type:"bar",backgroundColor:v3(p.color,.6),borderWidth:0,borderRadius:2,order:50+h,barPercentage:.9,categoryPercentage:1}):p.style==="area"?Object.assign(y,{backgroundColor:v3(p.color,.13),fill:"origin",borderColor:v3(p.color,.75),borderWidth:1}):p.style==="dashed"&&Object.assign(y,{borderDash:[5,4],borderWidth:1.5}),M.push(y),(p.band??(h===0&&p.style==="line"))&&v.min&&v.max&&p.style!=="bar"&&M.push({label:`${p.label} max`,_band:!0,data:v.max,borderWidth:0,pointRadius:0,yAxisID:g,order:90,fill:"+1",backgroundColor:v3(p.color,.15)},{label:`${p.label} min`,_band:!0,data:v.min,borderWidth:0,pointRadius:0,yAxisID:g,order:91})}),a.plugins.tooltip.filter=p=>!p.dataset._band,this._chart&&this._chart.destroy(),this._chart=new k2(C,{type:"line",data:{datasets:M},options:a,plugins:rt})}};I(C7,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),I(C7,"styles",M2);var xr=class extends C7{get defaultSeries(){return[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}]}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},gr=class extends C7{get defaultSeries(){return[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}]}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",C7);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",xr);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",gr);var Rn={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},Bn=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],w9=class extends L1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:U8(t,e,i,"wind_speed"),gust:U8(t,e,i,"wind_gust_speed"),dir:U8(t,e,i,"wind_bearing")}}render(){if(!this.hass)return _``;let t=this._view||this.config?.view||"compass",e=this.station,i=this.hass,C=d5(e,i,"wind_speed"),a=d5(e,i,"wind_gust_speed"),H=d5(e,i,"wind_bearing"),V=C?.unit||a?.unit||"";return _`
      ${e2(this.config,"mdi:weather-windy","Wind",h7([{value:"compass",label:"Compass"},{value:"rose",label:"Rose 24h"}],t,s=>this._view=s,"Wind view"))}
      <div class="top">
        <div class="dial">${t==="rose"?this._roseSvg(V):this._compassSvg(C?.value,V,H?.value)}</div>
        <div class="side">
          <div class="readings">
            ${f7(this,{label:"Speed",value:C?.value,unit:V,digits:1,color:"var(--wsfc-wind)",entity:C?.entity})}
            ${f7(this,{label:"Gust",value:a?.value,unit:a?.unit||V,digits:1,color:"var(--wsfc-gust)",entity:a?.entity})}
            ${f7(this,{label:`From ${Q7(H?.value)}`,value:H?.value,unit:"\xB0",entity:H?.entity})}
          </div>
          ${t==="rose"?this._roseLegend(V):""}
        </div>
      </div>
      ${this.config?.show_chart===!1?"":_`<div class="body"><canvas aria-label="Wind speed and gust history"></canvas></div>`}
      ${this._error?_`<div class="note">${this._error}</div>`:""}
    `}_compassSvg(t,e,i){let C=[];for(let V=0;V<72;V++){let s=V*5*Math.PI/180,M=V%18===0,p=V%6===0,h=M?78:p?82:85;C.push(y1`<line class="tick" x1=${100+Math.sin(s)*h} y1=${100-Math.cos(s)*h} x2=${100+Math.sin(s)*88} y2=${100-Math.cos(s)*88} stroke-width=${M?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([V,s])=>y1`<text class="lbl ${V==="N"?"n":""}" x=${100+Math.sin(s*Math.PI/180)*66} y=${100-Math.cos(s*Math.PI/180)*66}>${V}</text>`),H=Number.isFinite(i)?i:null;return y1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${Q7(H)} at ${H2(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${C}${a}
      ${H==null?"":y1`<g class="ptr" style=${`transform: rotate(${H}deg); transform-origin: 100px 100px`}>
        <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
      </g>`}
      <text class="spd" x="100" y="104">${H2(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||Rn[t]||Rn.mph}_roseLegend(t){let e=this._bins(t),i=e.map((C,a)=>a<e.length-1?`${C}\u2013${e[a+1]}`:`${C}+`);return _`<div class="legend">${i.map((C,a)=>_`<span><i style="background:${Bn[a+1]}"></i>${C}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return y1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(s=>s.reduce((M,p)=>M+p,0)),1e-4),C=84,a=[];e.sectors.forEach((s,M)=>{let p=0;s.forEach((h,v)=>{if(!h)return;let g=p+h;a.push(y1`<path d=${Kh(100,100,p/i*C,g/i*C,M*22.5-10,M*22.5+10)} fill=${Bn[v]} opacity="0.9"></path>`),p=g})});let H=[.25,.5,.75,1].map(s=>y1`<circle class="ring" cx="100" cy="100" r=${C*s} stroke-dasharray="2 3"></circle>`),V=[["N",0],["E",90],["S",180],["W",270]].map(([s,M])=>y1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(M*Math.PI/180)*95} y=${100-Math.cos(M*Math.PI/180)*95}>${s}</text>`);return y1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${H}${a}${V}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(i=>this._error=`History unavailable: ${i?.message||i}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await e4(this.hass,[t.speed,t.gust,t.dir],24),i=d5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=Xh(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:i7(e[t.speed]||[]).map(C=>({x:C.t,y:C.v})),gust:i7(e[t.gust]||[]).map(C=>({x:C.t,y:C.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),C=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",H=it(this,24,this.hass?.locale?.language);H.scales.y={min:0,grid:{color:H._grid},ticks:{color:H._text,callback:s=>`${s} ${t.unit}`,maxTicksLimit:4}};let V=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:C,backgroundColor:v3(C,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new k2(e,{type:"line",data:{datasets:V},options:H,plugins:rt})}};I(w9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),I(w9,"styles",[M2,g1`
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
    `]);function Kh(r,t,e,i,C,a){let H=(O,k)=>[r+Math.sin(k*Math.PI/180)*O,t-Math.cos(k*Math.PI/180)*O],[V,s]=H(i,C),[M,p]=H(i,a),[h,v]=H(e,a),[g,y]=H(e,C);return`M${V} ${s} A${i} ${i} 0 0 1 ${M} ${p} L${h} ${v} A${e} ${e} 0 0 0 ${g} ${y} Z`}function Xh(r,t,e){let i=r.filter(M=>M.v!=null),C=t.filter(M=>M.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),H=0,V=0,s=0;for(let M=0;M<i.length;M++){let p=i[M].t,h=Math.min((i[M+1]?.t??Date.now())-p,30*6e4);if(h<=0)continue;for(;s+1<C.length&&C[s+1].t<=p;)s++;let v=C[s]?.t<=p?C[s].v:C[0]?.v??0;if(H+=h,v<e[0]){V+=h;continue}let g=e.findIndex(O=>v<O);g===-1&&(g=e.length);let y=Math.round((i[M].v%360+360)%360/22.5)%16;a[y][g]+=h}return H?{sectors:a.map(M=>M.map(p=>p/H)),calm:V/H}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",w9);var zn=`/* required styles */\r
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
`;var tf="https://api.rainviewer.com/public/weather-maps.json",ef=7,rf=600,Cf=1800,of=5*6e4,o7=null,af=async()=>o7||(o7=(await Promise.resolve().then(()=>f4(Nn(),1))).default),Ht="https://server.arcgisonline.com/ArcGIS/rest/services",_r="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",Wn={gray:r=>[`${Ht}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,_r,16],streets:()=>[`${Ht}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,_r,19],topo:()=>[`${Ht}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,_r,19],imagery:()=>[`${Ht}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},Hf={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},b9=class extends L1{constructor(){super();I(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],C=this._overlay??this.config?.owm_default??"none";return _`
      ${e2(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",e?h7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(a=>({value:a,label:`${this._radarOn?"+ ":""}${Hf[a]||a}`}))],C,a=>this._setOverlay(a),"Map overlay"):"")}
      <div class="map"><div id="map"></div></div>
      ${this._radarOn?_`<div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"}>
          ${this._playing?"\u275A\u275A Pause":"\u25B6 Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel||""}</span>
        <span class="spacer"></span>
        ${this._error?_`<span class="note">${this._error}</span>`:""}
      </div>`:""}
    `}async firstUpdated(){await af();let e=this.renderRoot.getElementById("map");if(!e||this._map)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,C=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=o7.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,C],this.config?.zoom??7),this._base=null,this._applyBase(),o7.circleMarker([i,C],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),of)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&this.firstUpdated()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,C,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(Wn[e.base_map]||Wn.gray)(this._dark);this._base=o7.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:C}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(tf);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),C=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!C.length||!this._map)return;let a=new Map(this._frames.map(H=>[H.path,H]));this._frames=C.map(H=>{let V=a.get(H.path);if(V)return a.delete(H.path),V;let s=o7.tileLayer(`${i.host}${H.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:ef,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...H,layer:s,nowcast:(i.radar?.nowcast||[]).includes(H)}}),a.forEach(H=>this._map.removeLayer(H.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,H)=>a.layer.setOpacity(H===e?i:0));let C=this._frames[e];if(C){let a=new Date(C.time*1e3),H=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=C.nowcast?`${H} (forecast)`:H}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?Cf:rf)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=o7.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};I(b9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),I(b9,"styles",[M2,x0(zn),g1`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",b9);function Z9(r){let i=r<.5,C=Math.cos(r*2*Math.PI),a=Math.abs(C)*24,H=i?1:0,V=`M26 2 A24 24 0 0 ${H} 26 50 A${a} 24 0 0 ${C>0?1-H:H} 26 2 Z`;return y1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${V} fill="#e9e6d6"></path>
  </svg>`}var y9=class extends L1{render(){if(!this.hass)return Z;let t=J7(this.hass),e=C=>C?t4(this.hass).format(C):"\u2014",i=J8(this.hass);return _`${e2(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${Z9(t.phase)}</div>
        <div class="facts">
          <span class="name">${t.name}</span>
          <span>Illumination</span><span>${Math.round(t.fraction*100)}%</span>
          <span>Moonrise</span><span>${t.alwaysUp?"up all day":t.alwaysDown?"down all day":e(t.rise)}</span>
          <span>Moonset</span><span>${e(t.set)}</span>
          ${t.nextFull?_`<span>Next full</span><span>${i.format(t.nextFull)}</span>`:Z}
          ${t.nextNew?_`<span>Next new</span><span>${i.format(t.nextNew)}</span>`:Z}
        </div>
      </div>`}};I(y9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),I(y9,"styles",[M2,g1`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",y9);var nf=5*6e4,O9=class extends L1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return h3(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return Z;let t=c2[this._metric]||{},e=this._entity,i=M0(this.hass,e),C=this.config?.unit??i?.unit??"",a=j8(this._metric,C,this.config?.digits),H=this.config?.color||t.color||"var(--primary-color)",V=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?_`
      <div class="top" style=${`--m-color:${H}`} @click=${()=>_0(this,e)}>
        <ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>
        <span class="name">${V}</span>
        ${this.config?.show_minmax===!1||!this._today?Z:_`<span class="mm"><span class="lo">Min ${H2(this._today.min,a)}</span><br /><span class="hi">Max ${H2(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>_0(this,e)}>
        <div class="val">${typeof i?.value=="number"?H2(i.value,a):i?.value??"\u2014"}<small>${C}</small></div>
        <div class="cap">${this._caption(i,C)}</div>
      </div>
      ${this.config?.chart==="none"?Z:_`<div class="spark" @click=${()=>_0(this,e)}>${this._spark(H)}</div>`}
    `:_`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=c2[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?un(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return Z;let i=200,C=40,a=e.map(D=>D.v).filter(D=>D!=null);if(!a.length)return Z;let H=Date.now()-(this.config?.hours||24)*36e5,V=Date.now(),s=D=>(D-H)/(V-H)*i,M=(this.config?.chart||c2[this._metric]?.chart)==="bar",p=Math.min(...a),h=Math.max(...a);M&&(p=0),h-p<1e-9&&(h+=1,p=M?0:p-1);let v=D=>C-(D-p)/(h-p)*C;if(M){let D=Math.max(2,i/(this.config?.hours||24)*.7);return y1`<svg viewBox="0 0 ${i} ${C}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(K=>K.v>0?y1`<rect x=${s(K.t)-D/2} y=${v(K.v)} width=${D} height=${C-v(K.v)} rx="1" fill=${t}></rect>`:Z)}
        <line x1="0" x2=${i} y1=${C} y2=${C} stroke=${t} stroke-opacity=".35"></line></svg>`}let g="",y=!1;for(let D of e){if(D.v==null){y=!1;continue}g+=`${y?"L":"M"}${s(D.t).toFixed(1)} ${v(D.v).toFixed(1)}`,y=!0}let O=e.find(D=>D.v!=null),k=[...e].reverse().find(D=>D.v!=null),P=`${g}L${s(k.t).toFixed(1)} ${C}L${s(O.t).toFixed(1)} ${C}Z`,$=`g${Math.random().toString(36).slice(2,8)}`;return y1`<svg viewBox="0 0 ${i} ${C}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${$} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${P} fill=${`url(#${$})`}></path>
      <path d=${g} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<nf||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,C]=await Promise.all([e4(this.hass,[t],e),Pn(this.hass,[t])]),a=i[t]||[],H=(this.config?.chart||c2[this._metric]?.chart)==="bar",V=this.config?.cumulative??c2[this._metric]?.cumulative??!1;this._series=H?V?Ct(a,36e5):ot(a,36e5):i7(a,160);let s=(C[t]||[]).map(M=>M.v).filter(M=>M!=null);if(this._today=s.length?{min:Math.min(...s),max:Math.max(...s)}:null,c2[this._metric]?.trend){let M=Date.now()-108e5,p=[...a].reverse().find(v=>v.t<=M&&v.v!=null),h=[...a].reverse().find(v=>v.v!=null);if(p&&h){let v=h.v-p.v,g=mn(M0(this.hass,t)?.unit||"");this._trend=v>g?"Rising":v<-g?"Falling":"Steady"}}}};I(O9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),I(O9,"styles",[M2,g1`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",O9);var Vf=g1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,Un=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),k9=class extends L1{render(){if(!this.hass)return Z;let e=this.hass.states[this.station?.entity]?.state;return _`
      ${e2(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?Un(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):Z}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?Z:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],C=d5(t,e,"temperature");C&&i.push(`${H2(C.value,1)}${C.unit}`);let a=d5(t,e,"apparent_temperature");a&&C&&Math.abs(a.value-C.value)>=2&&i.push(`feels like ${H2(a.value,0)}${a.unit}`);let H=d5(t,e,"wind_speed"),V=d5(t,e,"wind_bearing"),s=d5(t,e,"wind_gust_speed");H&&(H.value<1?i.push("calm"):i.push(`wind ${V?`from the ${Q7(V.value)} `:""}${H2(H.value,0)} ${H.unit}${s&&s.value>H.value*1.3?`, gusting ${H2(s.value,0)}`:""}`));let M=d5(t,e,"precipitation"),p=M0(e,h3("rain_today",t,e));M&&M.value>0?i.push(`raining ${H2(M.value,2)} ${M.unit}`):p&&p.value>0?i.push(`${H2(p.value,2)} ${p.unit} of rain today`):(M||p)&&i.push("dry");let h=d5(t,e,"humidity");if(h&&i.push(`humidity ${H2(h.value,0)}%`),!i.length)return"Waiting for station data.";let v=i.join(", ");return v[0].toUpperCase()+v.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return Z;let i=e.attributes||{},C=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return _`<div class="text" @click=${()=>_0(this,t)}>${C}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return Z;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?Z:i.slice(0,3).map(C=>{let a=String(C.Severity||C.severity||"").toLowerCase();return _`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>_0(this,t)}>
        <b>${C.Event||C.event||C.title||"Weather alert"}</b>${C.Headline||C.headline||""}
      </div>`})}_astro(){let t=t4(this.hass),e=J8(this.hass),i=X8(this.hass),C=J7(this.hass),a=H=>`${Math.floor(H/36e5)}h ${String(Math.round(H%36e5/6e4)).padStart(2,"0")}m`;return _`<div class="astro">
      ${this.config?.show_sun===!1||!i?Z:_`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?Z:_`<div><h4>${Z9(C.phase)}${C.name}</h4>
            <p>${Math.round(C.fraction*100)}% illuminated<br />
            ${C.nextFull?_`Full ${e.format(C.nextFull)}`:""}${C.nextNew?_` · New ${e.format(C.nextNew)}`:""}</p></div>`}
    </div>`}};I(k9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),I(k9,"styles",[M2,g1`
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
    `]);var T9=class extends L1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=Y8(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return Z;let t=Number(this.config?.day_offset??1),e=Sn(this._daily,t),i=this.config?.entity||this.station?.entity,C=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let H=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),V=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${H}`:H);if(!e)return _`${e2(this.config,"mdi:calendar-today",V)}<div class="note">Forecast not available yet.</div>`;let s=C.temperature_unit||"",M=C.precipitation_unit||"",p=C.wind_speed_unit||"",h=[];return e.precipitation!=null&&h.push(["Precipitation",`${H2(e.precipitation,M==="in"?2:1)} ${M}`]),e.precipitation_probability!=null&&h.push(["Chance of rain",`${H2(e.precipitation_probability)}%`]),e.wind_speed!=null&&h.push(["Wind",`${e.wind_bearing!=null?`${Q7(Number(e.wind_bearing))} `:""}${H2(e.wind_speed)} ${p}`]),e.wind_gust_speed!=null&&h.push(["Gusts",`${H2(e.wind_gust_speed)} ${p}`]),e.humidity!=null&&h.push(["Humidity",`${H2(e.humidity)}%`]),e.uv_index!=null&&h.push(["UV index",H2(e.uv_index,1)]),_`
      ${e2(this.config,"mdi:calendar-today",V)}
      <div class="main" @click=${()=>_0(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?_`<span class="lo">${H2(e.templow)}°</span> / `:Z}<span class="hi">${H2(e.temperature)}°</span></div>
          <div class="cond">${Un(this.hass,e.condition)}${s?` \xB7 ${s}`:""}</div>
        </div>
      </div>
      <div class="rows">${h.map(([v,g])=>_`<span>${v}</span><span>${g}</span>`)}</div>
    `}};I(T9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),I(T9,"styles",[M2,Vf,g1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var P9=class extends L1{render(){let t=this.config||{},e=t.show_status?pn(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return _`
      ${t.icon===""?Z:_`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      <div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?_`<div class="sub">${t.subtitle}</div>`:Z}</div>
      ${e?_`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:Z}
      <span class="grow"></span>
      ${this.bar?_`<div class="bar">${this.bar}</div>`:Z}
    `}};I(P9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),I(P9,"styles",[h6,g1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var E9=class extends L1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),_`${this.config?.title?e2(this.config,"mdi:card-outline",""):Z}
      ${this._err?_`<div class="note">${this._err}</div>`:_`<div class="host">${this._el||Z}</div>`}`):_`${e2(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};I(E9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),I(E9,"styles",[M2,g1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",k9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",T9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",P9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",E9);var F9=class extends L1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=(this.config?.panels||[]).filter(i=>i&&f3[i.type]);if(!t.length)return _`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical";return t.map((i,C)=>{let a=d2(i);if(!a)return Z;let H=Number(i.grow??(e?i.rows?1:0:1)),V=Number(i.rows??0),s=[`--grow:${H}`,i.min_width?`--basis:${i.min_width}px`:"",e&&V?`min-height:calc(${V} * var(--wsfc-row, 110px) + ${V-1} * var(--wsfc-gap, 12px))`:""].join(";"),M=a.bare||i.type==="stack";return _`<section class="tile ${i.type} ${M?"bare":""}" style=${s}>${this._el(i,C)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,C=this._els.get(i);if(!C){C=document.createElement(d2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,C)}return C.config=t,C.station=this.station,C.hass=this.hass,C}};I(F9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),I(F9,"styles",[m6,g1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",F9);var B0=f4(B4(),1);var jn=180/Math.PI,Gn=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`,a7=r=>r instanceof Date&&!isNaN(r),$9=class extends L1{render(){if(!this.hass)return Z;let{latitude:t,longitude:e}=this.hass.config||{};if(t==null)return _`${e2(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,C=new Date(i);C.setHours(12,0,0,0);let a=B0.getTimes(C,t,e),H=new Date(C);H.setDate(H.getDate()-1);let V=B0.getTimes(H,t,e),s=B0.getMoonTimes(i,t,e),M=J7(this.hass,i),p=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),h=$=>a7($)?p.format($):"\u2014",v=a7(a.sunset)&&a7(a.sunrise)?a.sunset-a.sunrise:null,g=a7(V.sunset)&&a7(V.sunrise)?V.sunset-V.sunrise:null,y=v!=null&&g!=null?Math.round((v-g)/6e4):null,O=a7(a.dusk)&&a7(a.dawn)?a.dusk-a.dawn:null,k=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",s.rise,s.set,!0]],P=this.config||{};return _`
      ${e2(P,"mdi:telescope","Astronomy")}
      <div class="wrap">
        ${P.show_chart===!1?Z:_`<div class="chart">${this._chart(t,e,i)}</div>`}
        <div class="side">
          <table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${k.map(([$,D,K,G])=>_`<tr class=${G?"main":""}><td>${$}</td>
              <td>${$==="Moon"&&s.alwaysUp?"up all day":$==="Moon"&&s.alwaysDown?"down all day":h(D)}</td>
              <td>${$==="Moon"&&(s.alwaysUp||s.alwaysDown)?"":h(K)}</td></tr>`)}
          </table>
          <div class="sum">
            <div><span>Length of day</span>${Gn(v)}${y!=null?_`<span class="d" style="display:inline">${y>=0?"+":"\u2212"}${Math.abs(y)}m</span>`:Z}</div>
            <div><span>Visible light</span>${Gn(O)}</div>
            <div><span>Solar noon</span>${h(a.solarNoon)}</div>
            <div class="moon">${Z9(M.phase)}<div><span>${M.name}</span>${Math.round(M.fraction*100)}% illuminated</div></div>
          </div>
        </div>
      </div>
    `}_chart(t,e,i){let M=new Date(i);M.setHours(0,0,0,0);let p=96,h=864e5/p,v=J=>70-J/90*58,g=J=>{let C1="";for(let r1=0;r1<=p;r1++){let m1=new Date(M.getTime()+r1*h);C1+=`${r1?"L":"M"}${(r1/p*300).toFixed(1)} ${v(J(m1)).toFixed(1)}`}return C1},y=J=>B0.getPosition(J,t,e).altitude*jn,O=J=>B0.getMoonPosition(J,t,e).altitude*jn,k=(i-M)/864e5*300,P=y(i),$=O(i),D=[0,6,12,18,24],K=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),G="var(--wsfc-sun-color, #fdd835)",M1="var(--wsfc-moon-color, #b0bec5)";return y1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${D.map(J=>y1`<line x1=${J/24*300} x2=${J/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,J/24*300))} y=${144} text-anchor="middle">${K.format(new Date(M.getTime()+J*36e5))}</text>`)}
      <path d=${g(O)} fill="none" stroke=${M1} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" opacity=".35"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${k} x2=${k} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${k} cy=${v($)} r="5" fill=${M1} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${k} cy=${v(P)} r="7" fill=${G} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${G}>Sun ${Math.round(P)}°</text>
      <text class="lbl" x="4" y=${32} fill=${M1}>Moon ${Math.round($)}°</text>
    </svg>`}};I($9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),I($9,"styles",[M2,g1`
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
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",$9);var sf={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function Lf(r,t){let e=Number(r.latitude??t?.config?.latitude??39.5),i=Number(r.longitude??t?.config?.longitude??-98.35),C=t?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(C?"in":"mm"),metricTemp:r.temp_unit||(C?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(C?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:e.toFixed(3),lon:i.toFixed(3),detailLat:e.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var D9=class extends L1{render(){if(!this.hass)return Z;let t=this.config||{},e=Lf(t,this.hass);return e!==this._url&&(this._url=e),_`${t.show_title===!1?Z:e2(t,"mdi:weather-windy",t.title||`${sf[t.overlay||"wind"]||"Wind"} map`)}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`}};I(D9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),I(D9,"styles",[M2,g1`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",D9);var nt={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}};function lf(r,t,e){let i=nt[r.preset]||nt.temps,C=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:C.map(V=>{let s=h3(V,t,e,r.entity_overrides?.[V]);return s?{entity:s,name:c2[V]?.label||V}:null}).filter(Boolean),H={type:"statistics-graph",...i.card,entities:a};for(let V of["days_to_show","period","chart_type","stat_types","hide_legend"])r[V]!=null&&(H[V]=r[V]);return p5(H,r.card||{})}var R9=class extends L1{render(){if(!this.hass)return Z;let t=this.config||{},e=nt[t.preset]||nt.temps,i=lf(t,this.station,this.hass);return i.entities.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),_`${t.show_title===!1?Z:e2(t,e.icon,e.title)}
      ${this._err?_`<div class="note">${this._err}</div>`:_`<div class="host">${this._el||Z}</div>`}`):_`${e2(t,e.icon,e.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};I(R9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),I(R9,"styles",[M2,g1`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",R9);var Sr=30,B9=4,qn=10,wr=r=>r.title?r.title:r.type==="metric"?c2[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(d2(r)?.label||r.type).replace(/ \(.*\)$/,""),Yn=r=>r.icon||r.type==="metric"&&c2[r.metric]?.icon||d2(r)?.icon||"mdi:square-outline",z9=class extends L1{_gridIdx(){return(this.panels||[]).map((t,e)=>e).filter(t=>this.panels[t].display!=="popup")}render(){let t=this.panels||[],e=this._order||this._gridIdx(),i=t.map((C,a)=>a).filter(C=>t[C].display==="popup");return _`
      <div class="grid" style=${`--row:${Sr}px;--gap:${B9}px`}>
        ${e.map(C=>this._block(t[C],C))}
      </div>
      ${i.length?_`<div class="pops"><span>Pop-ups:</span>${i.map(C=>_`<span class="pop"><ha-icon icon=${Yn(t[C])}></ha-icon>${wr(t[C])}</span>`)}</div>`:Z}
    `}_block(t,e){let i=this._size?.index===e?this._size:null,C=i?i.span:r7(t),a=i?i.rows:c0(t),H=`grid-column: span ${C}; grid-row: span ${Math.max(1,a)};`,V=["blk",t.show===!1?"hidden":"",this._drag?.index===e?"dragging":"",i?"sizing":"",t.type].join(" ");return _`<div class=${V} style=${H} data-i=${e} tabindex="0" role="button"
        aria-label=${`${wr(t)}, width ${C} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${s=>this._startMove(s,e)} @keydown=${s=>this._key(s,e)}>
      <ha-icon icon=${Yn(t)}></ha-icon>
      <span class="nm">${wr(t)}</span>
      <span class="dim">${C}×${a||"a"}</span>
      <span class="rz x" @pointerdown=${s=>this._startSize(s,e,"x")}></span>
      <span class="rz y" @pointerdown=${s=>this._startSize(s,e,"y")}></span>
      <span class="rz xy" @pointerdown=${s=>this._startSize(s,e,"xy")}></span>
    </div>`}_startMove(t,e){if(t.button!==0||t.target.classList.contains("rz"))return;t.preventDefault();let i=t.currentTarget;i.setPointerCapture(t.pointerId),this._order=this._gridIdx(),this._drag={index:e,x0:t.clientX,y0:t.clientY,moved:!1};let C=H=>this._onMove(H),a=()=>{i.removeEventListener("pointermove",C),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let H=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),V=this._order;this._drag=null,this._order=null,H&&this._commitOrder(V)};i.addEventListener("pointermove",C),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(t){let e=this._drag;if(!e||!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<4)return;e.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(V=>Number(V.dataset.i)!==e.index),C=null;for(let V of i){let s=V.getBoundingClientRect();if(t.clientX>=s.left&&t.clientX<=s.right&&t.clientY>=s.top&&t.clientY<=s.bottom){C={i:Number(V.dataset.i),after:t.clientX>s.left+s.width/2};break}}if(!C){let V=i[i.length-1]?.getBoundingClientRect();if(V&&t.clientY>V.bottom)C={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(V=>V!==e.index),H=a.indexOf(C.i)+(C.after?1:0);a.splice(H,0,e.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(t){let e=this.panels,i=t.map(a=>e[a]),C=e.map(a=>a.display==="popup"?a:i.shift());this._emit(C)}_startSize(t,e,i){if(t.button!==0)return;t.preventDefault(),t.stopPropagation();let C=t.currentTarget;C.setPointerCapture(t.pointerId);let H=(this.renderRoot.querySelector(".grid").clientWidth-11*B9)/12+B9,V=this.panels[e],s=r7(V),M=c0(V);this._size={index:e,span:s,rows:M};let p=t.clientX,h=t.clientY,v=y=>{let O=i==="y"?s:Math.max(1,Math.min(12,s+Math.round((y.clientX-p)/H))),P=i==="x"?M:Math.max(0,Math.min(qn,(M||1)+Math.round((y.clientY-h)/(Sr+B9))));i!=="x"&&M===0&&P===1&&Math.abs(y.clientY-h)<(Sr+B9)/2&&(P=0),(O!==this._size.span||P!==this._size.rows)&&(this._size={index:e,span:O,rows:P})},g=()=>{C.removeEventListener("pointermove",v),C.removeEventListener("pointerup",g),C.removeEventListener("pointercancel",g);let{span:y,rows:O}=this._size;this._size=null,(y!==s||O!==M)&&this._commitSize(e,y,O)};C.addEventListener("pointermove",v),C.addEventListener("pointerup",g),C.addEventListener("pointercancel",g)}_commitSize(t,e,i){let C=d2(this.panels[t])||{},a={...this.panels[t],span:e,rows:i};e===C.span&&delete a.span,i===(C.rows??0)&&delete a.rows;let H=this.panels.slice();H[t]=a,this._emit(H)}_key(t,e){let i=this._gridIdx(),C=i.indexOf(e);if(t.shiftKey){let a=this.panels[e],H={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!H)return;t.preventDefault(),this._commitSize(e,Math.max(1,Math.min(12,r7(a)+H[0])),Math.max(0,Math.min(qn,c0(a)+H[1])))}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let a=C+(t.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let H=i.slice();[H[C],H[a]]=[H[a],H[C]],this._commitOrder(H),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(t){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:t}}))}};I(z9,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0}}),I(z9,"styles",g1`
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",z9);var Mf=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],cf={wind_bearing:"Wind direction",precipitation:"Rain rate"},br=[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"}]}},helper:"With the animated background, panels become semi-transparent and the hero stops drawing its own."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"Animated background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Animated background: blur behind panels. Default 6."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}],Qn={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},df={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_chart:"Altitude chart",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",hours:"Hours",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here"},pf=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function uf(r,t,e){let i=t.split("."),C=r;i.slice(0,-1).forEach(H=>C=C[H]=C[H]&&typeof C[H]=="object"?{...C[H]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete C[a]:C[a]=e}function yr(r,t,e={}){let i={};for(let C of t){let a=pf(r,C.name);i[C.name]=a!==void 0?a:e[C.name]!==void 0?e[C.name]:C.default}return i}function Zr(r,t,e,i={}){let C=Q8(r);for(let a of t){let H=e[a.name],V=i[a.name]!==void 0?i[a.name]:a.default;V!==void 0&&JSON.stringify(H)===JSON.stringify(V)&&(H=void 0),uf(C,a.name,H)}return X7(C)}function mf(r){let t=d2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:K7({...r,in_bar:void 0}),show:!0}}function Kn(r){let t=d2(r);return r.title?r.title:r.type==="metric"?c2[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var I9=class extends L1{constructor(){super(),this._open="station",this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t}get _panels(){return q8(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[C,a]of Object.entries(e||{}))a===void 0?delete i[C]:i[C]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?Z:_`
      <div class="ed">
        <div class="hdr"><span class="name">${k4}</span><span class="ver">v${u6} · Weather Flex sections ${wn}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:cog-outline","General",()=>this._general())}
        ${this._section("buttons","mdi:gesture-tap-button","Panel buttons",()=>this._buttonsEditor())}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout",()=>this._layoutEditor())}
        ${this._section("hero","mdi:weather-partly-cloudy","Hero",()=>this._heroEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_section(t,e,i,C){let a=this._open===t;return _`<details class="panel" ?open=${a} @toggle=${H=>{H.target.open?this._open=t:this._open===t&&(this._open=null)}}>
      <summary><ha-icon icon=${e}></ha-icon><span>${i}</span></summary>
      ${a?_`<div class="body">${C()}</div>`:Z}
    </details>`}_form(t,e,i){return _`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${C=>C.label||df[C.name]||C.name}
      .computeHelper=${C=>C.helper}
      @value-changed=${C=>{C.stopPropagation(),i(C.detail.value)}}
    ></ha-form>`}_general(){return this._form(yr(this._config,br,Qn),br,t=>{let{panels:e,...i}=this._config,C=Zr(i,br,t,Qn);this._config.panels&&(C.panels=this._config.panels),this._emit(C)})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_sourcesEditor(){let t=this._sourcesEd;t||(t=this._sourcesEd=document.createElement(mr),t.wsfcMode="sources",t.addEventListener("config-changed",C=>{C.stopPropagation();let a=C.detail.config,H={...this._config};a.entity&&(H.entity=a.entity),a.metric_sources&&Object.keys(a.metric_sources).length?H.metric_sources=a.metric_sources:delete H.metric_sources,this._emit(H)}));let e={entity:this._config.entity,...this._config.metric_sources?{metric_sources:this._config.metric_sources}:{}},i=JSON.stringify(e);return t._wsfcJson!==i&&(t._wsfcJson=i,t.setConfig(e)),t.hass=this.hass,t}_stationEditor(){let t=this._station;return _`
      <p class="hint">Add your station's <b>device</b> (e.g. the Ecowitt GW2000B — its sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. The top source wins for each value. These sources apply to every panel.</p>
      <div class="flexed">${this._sourcesEditor()}</div>
      <div class="grp">Values used</div>
      <div class="map">
        ${Mf.map(e=>{let i=Y7(t,this.hass,e)||(this.hass.states[t.entity]?.attributes?.[e]!=null?t.entity:null),C=i&&!i.startsWith("weather.")?M0(this.hass,i):null,a=cf[e]||c2[e]?.label||e.replace(/_/g," ");return _`<span class="k">${a}</span><span class="e ${i?"":"none"}" title=${i||""}>${i||"not found"}</span><span class="v">${C?`${C.value} ${C.unit}`:""}</span>`})}
      </div>
    `}_heroEditor(){let t=this._panels,e=t.findIndex(C=>C.type==="hero");if(e<0)return _`<p class="hint">There is no hero panel. Add one here, or set the station under <b>Weather station</b>.</p>
        <button class="btn" @click=${()=>this._setPanels([{type:"hero"},...t])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;let i=(C,a)=>{let H=t.slice();H[e]=C,this._setPanels(H,a)};return _`<p class="hint">Weather Flex Card's editor for the hero's sections. Weather Sources are under <b>Weather station</b>.</p>
      ${this._flexEditor(`${e}`,t[e],i)}`}_flexEditor(t,e,i){let C=`${t}:${e.type}`,a=this._flexEds.get(C);a||(a=document.createElement(mr),a.wsfcMode="sections",a.addEventListener("config-changed",M=>{M.stopPropagation(),a._wsfcOnChange?.(M.detail.config)}),this._flexEds.set(C,a));let H=M=>M.type==="sky_tracker"?vr(M,this._station):p5(S9(M.type,this._station),M.flex||{});a.wsfcPanels=d2(e)?.flexPanels||null,a._wsfcOnChange=M=>{let p=Q8(e),h=yn(M,H({...e,flex:void 0}));Object.keys(h).length?p.flex=h:delete p.flex,i(p)};let V=H(e),s=JSON.stringify(V);return a._wsfcJson!==s&&(a._wsfcJson=s,a.setConfig(V)),a.hass=this.hass,_`<div class="flexed">${a}</div>`}_layoutEditor(){return _`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      <wsfc-layout-map .panels=${this._panels} @layout-changed=${t=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(t.detail.panels)}}></wsfc-layout-map>
    `}_panelList(){return _`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels side by side on every screen, put them in a <b>Stack</b>.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_buttonsEditor(){let t=this._config,e=this._panels,i=e.findIndex(M=>M.type==="heading"),C=i>=0&&!!e[i].show_bar,a=t.panel_bar===!1?"hidden":C?"heading":"top",H=M=>{let p=e.map((h,v)=>v===i?X7({...h,show_bar:M==="heading"?!0:void 0}):h);M==="heading"&&i<0&&p.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(p,{panel_bar:M==="hidden"?!1:void 0})},V=(M,p)=>{let h=e.map((v,g)=>{if(!M.includes(g))return v;let y=K7({...v,in_bar:void 0});return X7({...v,in_bar:p===y?void 0:p})});this._setPanels(h)},s=e.map((M,p)=>p);return _`
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
          <input type="checkbox" .checked=${K7(M)} @change=${h=>V([p],h.target.checked)} />
          <ha-icon icon=${M.icon||M.type==="metric"&&c2[M.metric]?.icon||d2(M).icon}></ha-icon>
          <span>${Kn(M)}</span>${M.display==="popup"?_`<span class="tag">pop-up</span>`:M.show===!1?_`<span class="tag">hidden on load</span>`:Z}
        </label>`)}
      </div>
    `}_list(t,e,i){let C=!!i,a=Object.entries(f3).filter(([s])=>s!=="map"&&!(C&&s==="hero")),H=i||"top",V=(this._addTypes||(this._addTypes={}))[H]||(C?"metric":this._addType);return _`
      <div class="rows">${t.map((s,M)=>this._panelRow(s,M,t,e,i?`${i}.${M}`:`${M}`,C))}</div>
      <div class="add">
        <select class="sel" @change=${s=>{this._addTypes[H]=s.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([s,M])=>_`<option value=${s} ?selected=${s===V}>${M.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let s={type:V};s.type==="metric"&&(s.metric="temperature"),s.type==="stack"&&(s.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,s]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${C?"Add to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,C,a,H){let V=d2(t),s=this._openPanel===a||String(this._openPanel||"").startsWith(`${a}.`),M=t.show===!1,p=()=>this._flexEds.clear(),h=O=>{let k=i.slice(),P=e+O;P<0||P>=k.length||([k[e],k[P]]=[k[P],k[e]],p(),this._openPanel=null,C(k))},v=(O,k)=>{let P=i.slice();P[e]=O,C(P,k)},g=H?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${r7(t)}/12${c0(t)?` \xD7 ${c0(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,y=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:V.label;return _`<div class="row ${s?"open":""} ${M?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&c2[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":V.icon)}></ha-icon>
        <div class="txt"><div class="n">${Kn(t)}</div><div class="s">${y}${g?` \xB7 ${g}`:""}</div></div>
        ${H?_`<button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>h(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>h(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:Z}
        ${H?Z:_`<button class="ib" title=${M?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>v(X7({...t,show:M?void 0:!1}))}>
              <ha-icon icon=${M?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${s?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let O=i.slice();O.splice(e+1,0,Q8(t)),p(),C(O)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let O=i.slice();O.splice(e,1),p(),this._openPanel=null,C(O)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${s?this._panelBody(t,a,v,H):Z}
    </div>`}_panelBody(t,e,i,C){let a=d2(t),H=C?{}:mf(t),V=C?gn:xn;return t.type==="hero"&&(V=V.filter(s=>!["icon","display","in_bar"].includes(s.name))),_`<div class="pbody">
      <div class="grp">Layout</div>
      ${this._form(yr(t,V,H),V,s=>i({type:t.type,...Zr(t,V,s,H)}))}
      ${a.schema.length?_`<div class="grp">${a.label} options</div>
            ${this._form(yr(t,a.schema),a.schema,s=>i({type:t.type,...Zr(t,a.schema,s)}))}`:Z}
      ${t.type==="stack"?_`<div class="grp">Panels in this stack</div>
            <div class="nest">${this._list(t.panels||[],(s,M)=>i({...t,panels:s},M),e)}</div>`:Z}
      ${a.flex?_`<div class="grp">${t.type==="sky_tracker"?"Arc & sky details":"Weather Flex sections"}</div>
            ${t.type==="sky_tracker"?_`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:Z}
            ${t.type==="hero"&&!C?_`<p class="hint">Also under Hero above.</p>`:this._flexEditor(e,t,i)}`:Z}
    </div>`}};I(I9,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),I(I9,"styles",g1`
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
    .grp.first { margin-top: 0; border-top: 0; padding-top: 0; }
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
  `);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",I9);var hf=720,ff=1100,N9=class extends L1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),C=[];return i&&C.push({ref:`device:${i.id}`}),e&&C.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:C}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=q8(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(t.map((i,C)=>i.show===!1?this._key(i,C):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return t.map((e,i)=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},C=e<(i.narrow_width||hf)?"narrow":e<(i.medium_width||ff)?"medium":"wide";C!==this._size&&(this._size=C),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_fit(){let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let C=i.min_row_height||60,a=i.max_row_height||400,H=e.clientHeight;if(!H)return;let V=y=>(t.style.setProperty("--wsfc-row",`${y}px`),t.getBoundingClientRect().height),s=C,M=C+40,p=V(s),v=(V(M)-p)/(M-s),g=i.row_height||110;v>.5&&(g=Math.max(C,Math.min(a,s+(H-p)/v))),t.style.setProperty("--wsfc-row",`${Math.floor(g)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return Z;let t=this._config,e=this._full,i=this._animatedBg,C=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:"",i?`--wsfc-panel-opacity:${t.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${t.panel_blur??6}px`:""].join(";"),a=t.panels.some(H=>H.type==="heading"&&H.show_bar);return _`
      <ha-card class=${`wsfc ${e?"full":""} ${this._layoutSize} ${i?"animated":""}`} style=${C}>
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
    ></wsfc-animation-provider>`}_watchHourly(){let t=this._config.entity;this._hourlyFor!==t&&(this._unwatchHourly?.(),this._hourlyFor=t,this._unwatchHourly=Y8(this.hass,t,"hourly",e=>{this._hourlyNow=e?.[0],this.requestUpdate()}))}_renderTitle(){let t=this._config;return _`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?_`<span class="subtitle">${t.subtitle}</span>`:Z}
    </div>`}_renderBar(){let e=this._config.panels.map((i,C)=>[i,C]).filter(([i])=>K7(i));return e.length?e.map(([i,C])=>{let a=d2(i),H=i.display==="popup",V=H?this._popup===C:!this._hidden.has(this._key(i,C));return _`<button
        type="button"
        class="chip ${V?"on":""} ${H?"popup":""}"
        aria-pressed=${H?Z:String(V)}
        aria-haspopup=${H?"dialog":Z}
        @click=${()=>this._toggle(i,C)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${H?_`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:Z}
      </button>`}):Z}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":t.type==="wind_map"?"Wind map":t.type==="statistics"?t.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[t.preset]||"Graph":d2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),C=this._key(t,e);i.has(C)?i.delete(C):i.add(C),this._hidden=i,this._saveHidden()}_renderPanels(){let t=this._config.panels,e=t.map((C,a)=>a).filter(C=>t[C].display!=="popup"&&!this._hidden.has(this._key(t[C],C)));if(this._focus!=null&&(e=[this._focus]),!e.length)return _`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(C=>{let a=t[C],H=d2(a),V=_n(a,i),s=this._focus!=null?12:V.span,M=this._focus!=null?Math.max(c0(a),5):V.rows,p=`grid-column: span ${s};${M?`grid-row: span ${M};min-height:calc(${M} * var(--wsfc-row) + ${M-1} * var(--wsfc-gap));`:""}`,h=H.bare||a.type==="hero",v=a.display==="tile_popup",g=!h&&!v&&!["metric","stack"].includes(a.type)&&i!=="narrow";return _`<section class="tile ${a.type} ${H.bare?"bare":""} ${M?"":"auto"} ${v?"tap":""}" style=${p}>
        ${v?_`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${a.title||this._autoTitle(a)}`}
              @click=${()=>this._popup=C}><span><ha-icon icon="mdi:arrow-expand"></ha-icon>Open</span></button>`:Z}
        ${g?_`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?C:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:Z}
        ${this._panelEl(a,C)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._config.panels[t];if(!e)return Z;let i=()=>this._popup=null;return _`<div class="scrim" @click=${C=>C.target===C.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let C=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(C);if(!a){a=document.createElement(d2(t).tag),this._els.set(C,a);for(let H of this._els.keys())H!==C&&H.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(H)}return a.config=t,a.station=this._station,a.cardBg=this._animatedBg,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),a}};I(N9,"properties",{hass:{attribute:!1},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),I(N9,"styles",[h6,m6,g1`
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
  `]);customElements.get(O4)||customElements.define(O4,N9);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===O4)||window.customCards.push({type:O4,name:`${k4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${k4.toUpperCase()}%c ${u6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");
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
