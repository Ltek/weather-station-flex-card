/* weather-station-flex-card 2026.10.29.77 — https://github.com/Ltek/weather-station-flex-card */
var TV=Object.create;var Y9=Object.defineProperty;var Ti=Object.getOwnPropertyDescriptor;var EV=Object.getOwnPropertyNames;var FV=Object.getPrototypeOf,PV=Object.prototype.hasOwnProperty;var DV=(r,e,t)=>e in r?Y9(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var RV=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var BV=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of EV(e))!PV.call(r,o)&&o!==t&&Y9(r,o,{get:()=>e[o],enumerable:!(i=Ti(e,o))||i.enumerable});return r};var t4=(r,e,t)=>(t=r!=null?TV(FV(r)):{},BV(e||!r||!r.__esModule?Y9(t,"default",{value:r,enumerable:!0}):t,r));var j=(r,e,t,i)=>{for(var o=i>1?void 0:i?Ti(e,t):e,a=r.length-1,C;a>=0;a--)(C=r[a])&&(o=(i?C(e,t,o):C(o))||o);return i&&o&&Y9(e,t,o),o};var Z=(r,e,t)=>DV(r,typeof e!="symbol"?e+"":e,t);var H7=RV((Ka,Ct)=>{(function(){"use strict";var r=Math.PI,e=Math.sin,t=Math.cos,i=Math.tan,o=Math.asin,a=Math.atan2,C=Math.acos,n=r/180,s=1e3*60*60*24,H=2440588,V=2451545;function L(K){return K.valueOf()/s-.5+H}function d(K){return new Date((K+.5-H)*s)}function u(K){return L(K)-V}var f=n*23.4397;function v(K,r1){return a(e(K)*t(f)-i(r1)*e(f),t(K))}function x(K,r1){return o(e(r1)*t(f)+t(r1)*e(f)*e(K))}function w(K,r1,C1){return a(e(K),t(K)*e(r1)-i(C1)*t(r1))}function y(K,r1,C1){return o(e(r1)*e(C1)+t(r1)*t(C1)*t(K))}function b(K,r1){return n*(280.16+360.9856235*K)-r1}function E(K){return K<0&&(K=0),2967e-7/Math.tan(K+.00312536/(K+.08901179))}function F(K){return n*(357.5291+.98560028*K)}function $(K){var r1=n*(1.9148*e(K)+.02*e(2*K)+3e-4*e(3*K)),C1=n*102.9372;return K+r1+C1+r}function D(K){var r1=F(K),C1=$(r1);return{dec:x(C1,0),ra:v(C1,0)}}var k={};k.getPosition=function(K,r1,C1){var Z1=n*-C1,g1=n*r1,D1=u(K),y1=D(D1),E1=b(D1,Z1)-y1.ra;return{azimuth:w(E1,g1,y1.dec),altitude:y(E1,g1,y1.dec)}};var P=k.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];k.addTime=function(K,r1,C1){P.push([K,r1,C1])};var N=9e-4;function I(K,r1){return Math.round(K-N-r1/(2*r))}function Y(K,r1,C1){return N+(K+r1)/(2*r)+C1}function z(K,r1,C1){return V+K+.0053*e(r1)-.0069*e(2*C1)}function V1(K,r1,C1){return C((e(K)-e(r1)*e(C1))/(t(r1)*t(C1)))}function a1(K){return-2.076*Math.sqrt(K)/60}function i1(K,r1,C1,Z1,g1,D1,y1){var E1=V1(K,C1,Z1),V2=Y(E1,r1,g1);return z(V2,D1,y1)}k.getTimes=function(K,r1,C1,Z1){Z1=Z1||0;var g1=n*-C1,D1=n*r1,y1=a1(Z1),E1=u(K),V2=I(E1,g1),_2=Y(0,g1,V2),N2=F(_2),u2=$(N2),t1=x(u2,0),X2=z(_2,N2,u2),J2,N5,I2,E2,c5,y5,q1={solarNoon:d(X2),nadir:d(X2-.5)};for(J2=0,N5=P.length;J2<N5;J2+=1)I2=P[J2],E2=(I2[0]+y1)*n,c5=i1(E2,g1,D1,t1,V2,N2,u2),y5=X2-(c5-X2),q1[I2[1]]=d(y5),q1[I2[2]]=d(c5);return q1};function A1(K){var r1=n*(218.316+13.176396*K),C1=n*(134.963+13.064993*K),Z1=n*(93.272+13.22935*K),g1=r1+n*6.289*e(C1),D1=n*5.128*e(Z1),y1=385001-20905*t(C1);return{ra:v(g1,D1),dec:x(g1,D1),dist:y1}}k.getMoonPosition=function(K,r1,C1){var Z1=n*-C1,g1=n*r1,D1=u(K),y1=A1(D1),E1=b(D1,Z1)-y1.ra,V2=y(E1,g1,y1.dec),_2=a(e(E1),i(g1)*t(y1.dec)-e(y1.dec)*t(E1));return V2=V2+E(V2),{azimuth:w(E1,g1,y1.dec),altitude:V2,distance:y1.dist,parallacticAngle:_2}},k.getMoonIllumination=function(K){var r1=u(K||new Date),C1=D(r1),Z1=A1(r1),g1=149598e3,D1=C(e(C1.dec)*e(Z1.dec)+t(C1.dec)*t(Z1.dec)*t(C1.ra-Z1.ra)),y1=a(g1*e(D1),Z1.dist-g1*t(D1)),E1=a(t(C1.dec)*e(C1.ra-Z1.ra),e(C1.dec)*t(Z1.dec)-t(C1.dec)*e(Z1.dec)*t(C1.ra-Z1.ra));return{fraction:(1+t(y1))/2,phase:.5+.5*y1*(E1<0?-1:1)/Math.PI,angle:E1}};function a2(K,r1){return new Date(K.valueOf()+r1*s/24)}k.getMoonTimes=function(K,r1,C1,Z1){var g1=new Date(K);Z1?g1.setUTCHours(0,0,0,0):g1.setHours(0,0,0,0);for(var D1=.133*n,y1=k.getMoonPosition(g1,r1,C1).altitude-D1,E1,V2,_2,N2,u2,t1,X2,J2,N5,I2,E2,c5,y5,q1=1;q1<=24&&(E1=k.getMoonPosition(a2(g1,q1),r1,C1).altitude-D1,V2=k.getMoonPosition(a2(g1,q1+1),r1,C1).altitude-D1,u2=(y1+V2)/2-E1,t1=(V2-y1)/2,X2=-t1/(2*u2),J2=(u2*X2+t1)*X2+E1,N5=t1*t1-4*u2*E1,I2=0,N5>=0&&(y5=Math.sqrt(N5)/(Math.abs(u2)*2),E2=X2-y5,c5=X2+y5,Math.abs(E2)<=1&&I2++,Math.abs(c5)<=1&&I2++,E2<-1&&(E2=c5)),I2===1?y1<0?_2=q1+E2:N2=q1+E2:I2===2&&(_2=q1+(J2<0?c5:E2),N2=q1+(J2<0?E2:c5)),!(_2&&N2));q1+=2)y1=V2;var w2={};return _2&&(w2.rise=a2(g1,_2)),N2&&(w2.set=a2(g1,N2)),!_2&&!N2&&(w2[J2>0?"alwaysUp":"alwaysDown"]=!0),w2},typeof Ka=="object"&&typeof Ct<"u"?Ct.exports=k:typeof define=="function"&&define.amd?define(k):window.SunCalc=k})()});var K9=globalThis,X9=K9.ShadowRoot&&(K9.ShadyCSS===void 0||K9.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),Ei=new WeakMap,r4=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(X9&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Ei.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ei.set(t,e))}return e}toString(){return this.cssText}},U5=r=>new r4(typeof r=="string"?r:r+"",void 0,ze),Q=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,o,a)=>i+(C=>{if(C._$cssResult$===!0)return C.cssText;if(typeof C=="number")return C;throw Error("Value passed to 'css' function must be a 'css' function result: "+C+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new r4(t,r,ze)},Fi=(r,e)=>{if(X9)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),o=K9.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}},Ne=X9?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return U5(t)})(r):r;var{is:zV,defineProperty:NV,getOwnPropertyDescriptor:IV,getOwnPropertyNames:WV,getOwnPropertySymbols:UV,getPrototypeOf:jV}=Object,p0=globalThis,Pi=p0.trustedTypes,GV=Pi?Pi.emptyScript:"",qV=p0.reactiveElementPolyfillSupport,i4=(r,e)=>r,o4={toAttribute(r,e){switch(e){case Boolean:r=r?GV:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},J9=(r,e)=>!zV(r,e),Di={attribute:!0,type:String,converter:o4,reflect:!1,useDefault:!1,hasChanged:J9};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),p0.litPropertyMetadata??(p0.litPropertyMetadata=new WeakMap);var j5=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Di){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&NV(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:a}=IV(this.prototype,e)??{get(){return this[t]},set(C){this[t]=C}};return{get:o,set(C){let n=o?.call(this);a?.call(this,C),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Di}static _$Ei(){if(this.hasOwnProperty(i4("elementProperties")))return;let e=jV(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(i4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(i4("properties"))){let t=this.properties,i=[...WV(t),...UV(t)];for(let o of i)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)t.unshift(Ne(o))}else e!==void 0&&t.push(Ne(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:o4).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),C=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:o4;this._$Em=o;let n=C.fromAttribute(t,a.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,a){if(e!==void 0){let C=this.constructor;if(o===!1&&(a=this[e]),i??(i=C.getPropertyOptions(e)),!((i.hasChanged??J9)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(C._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:a},C){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,C??t??this[e]),a!==!0||C!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:C}=a,n=this[o];C!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,a,n)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};j5.elementStyles=[],j5.shadowRootOptions={mode:"open"},j5[i4("elementProperties")]=new Map,j5[i4("finalized")]=new Map,qV?.({ReactiveElement:j5}),(p0.reactiveElementVersions??(p0.reactiveElementVersions=[])).push("2.1.2");var C4=globalThis,Ri=r=>r,e6=C4.trustedTypes,Bi=e6?e6.createPolicy("lit-html",{createHTML:r=>r}):void 0,ji="$lit$",u0=`lit$${Math.random().toFixed(9).slice(2)}$`,Gi="?"+u0,QV=`<${Gi}>`,i3=document,n4=()=>i3.createComment(""),s4=r=>r===null||typeof r!="object"&&typeof r!="function",Qe=Array.isArray,YV=r=>Qe(r)||typeof r?.[Symbol.iterator]=="function",Ie=`[ 	
\f\r]`,a4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zi=/-->/g,Ni=/>/g,t3=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ii=/'/g,Wi=/"/g,qi=/^(?:script|style|textarea|title)$/i,Ye=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Ye(1),c1=Ye(2),Jv=Ye(3),U2=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Ui=new WeakMap,r3=i3.createTreeWalker(i3,129);function Qi(r,e){if(!Qe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bi!==void 0?Bi.createHTML(e):e}var KV=(r,e)=>{let t=r.length-1,i=[],o,a=e===2?"<svg>":e===3?"<math>":"",C=a4;for(let n=0;n<t;n++){let s=r[n],H,V,L=-1,d=0;for(;d<s.length&&(C.lastIndex=d,V=C.exec(s),V!==null);)d=C.lastIndex,C===a4?V[1]==="!--"?C=zi:V[1]!==void 0?C=Ni:V[2]!==void 0?(qi.test(V[2])&&(o=RegExp("</"+V[2],"g")),C=t3):V[3]!==void 0&&(C=t3):C===t3?V[0]===">"?(C=o??a4,L=-1):V[1]===void 0?L=-2:(L=C.lastIndex-V[2].length,H=V[1],C=V[3]===void 0?t3:V[3]==='"'?Wi:Ii):C===Wi||C===Ii?C=t3:C===zi||C===Ni?C=a4:(C=t3,o=void 0);let u=C===t3&&r[n+1].startsWith("/>")?" ":"";a+=C===a4?s+QV:L>=0?(i.push(H),s.slice(0,L)+ji+s.slice(L)+u0+u):s+u0+(L===-2?n:u)}return[Qi(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},H4=class r{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,C=0,n=e.length-1,s=this.parts,[H,V]=KV(e,t);if(this.el=r.createElement(H,i),r3.currentNode=this.el.content,t===2||t===3){let L=this.el.content.firstChild;L.replaceWith(...L.childNodes)}for(;(o=r3.nextNode())!==null&&s.length<n;){if(o.nodeType===1){if(o.hasAttributes())for(let L of o.getAttributeNames())if(L.endsWith(ji)){let d=V[C++],u=o.getAttribute(L).split(u0),f=/([.?@])?(.*)/.exec(d);s.push({type:1,index:a,name:f[2],strings:u,ctor:f[1]==="."?Ue:f[1]==="?"?je:f[1]==="@"?Ge:Q3}),o.removeAttribute(L)}else L.startsWith(u0)&&(s.push({type:6,index:a}),o.removeAttribute(L));if(qi.test(o.tagName)){let L=o.textContent.split(u0),d=L.length-1;if(d>0){o.textContent=e6?e6.emptyScript:"";for(let u=0;u<d;u++)o.append(L[u],n4()),r3.nextNode(),s.push({type:2,index:++a});o.append(L[d],n4())}}}else if(o.nodeType===8)if(o.data===Gi)s.push({type:2,index:a});else{let L=-1;for(;(L=o.data.indexOf(u0,L+1))!==-1;)s.push({type:7,index:a}),L+=u0.length-1}a++}}static createElement(e,t){let i=i3.createElement("template");return i.innerHTML=e,i}};function q3(r,e,t=r,i){if(e===U2)return e;let o=i!==void 0?t._$Co?.[i]:t._$Cl,a=s4(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=q3(r,o._$AS(r,e.values),o,i)),e}var We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??i3).importNode(t,!0);r3.currentNode=o;let a=r3.nextNode(),C=0,n=0,s=i[0];for(;s!==void 0;){if(C===s.index){let H;s.type===2?H=new V4(a,a.nextSibling,this,e):s.type===1?H=new s.ctor(a,s.name,s.strings,this,e):s.type===6&&(H=new qe(a,this,e)),this._$AV.push(H),s=i[++n]}C!==s?.index&&(a=r3.nextNode(),C++)}return r3.currentNode=i3,o}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},V4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q3(this,e,t),s4(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==U2&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):YV(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&s4(this._$AH)?this._$AA.nextSibling.data=e:this.T(i3.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=H4.createElement(Qi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let a=new We(o,this),C=a.u(this.options);a.p(t),this.T(C),this._$AH=a}}_$AC(e){let t=Ui.get(e.strings);return t===void 0&&Ui.set(e.strings,t=new H4(e)),t}k(e){Qe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let a of e)o===t.length?t.push(i=new r(this.O(n4()),this.O(n4()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Ri(e).nextSibling;Ri(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Q3=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,o){let a=this.strings,C=!1;if(a===void 0)e=q3(this,e,t,0),C=!s4(e)||e!==this._$AH&&e!==U2,C&&(this._$AH=e);else{let n=e,s,H;for(e=a[0],s=0;s<a.length-1;s++)H=q3(this,n[i+s],t,s),H===U2&&(H=this._$AH[s]),C||(C=!s4(H)||H!==this._$AH[s]),H===h?e=h:e!==h&&(e+=(H??"")+a[s+1]),this._$AH[s]=H}C&&!o&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ue=class extends Q3{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},je=class extends Q3{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Ge=class extends Q3{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){if((e=q3(this,e,t,0)??h)===U2)return;let i=this._$AH,o=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==h&&(i===h||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qe=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q3(this,e)}};var XV=C4.litHtmlPolyfillSupport;XV?.(H4,V4),(C4.litHtmlVersions??(C4.litHtmlVersions=[])).push("3.3.3");var Yi=(r,e,t)=>{let i=t?.renderBefore??e,o=i._$litPart$;if(o===void 0){let a=t?.renderBefore??null;i._$litPart$=o=new V4(e.insertBefore(n4(),a),a,void 0,t??{})}return o._$AI(r),o};var L4=globalThis,q=class extends j5{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U2}};q._$litElement$=!0,q.finalized=!0,L4.litElementHydrateSupport?.({LitElement:q});var JV=L4.litElementPolyfillSupport;JV?.({LitElement:q});(L4.litElementVersions??(L4.litElementVersions=[])).push("4.2.2");var Y3="2026.10.29.77",m0="weather-station-flex-card",l4="Weather Station Flex Card";var M1=Q`
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
  .head ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-head-icon, var(--wsfc-muted)); }
  .head .title { font-size: 15px; font-weight: 500; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--wsfc-head-text, inherit); }
  /* Folding panels: the title header can be tapped; a hint shows while folded. */
  :host([title-tap]) .head { cursor: pointer; }
  :host([collapsed]) > :not(.head):not(style) { display: none !important; }
  :host([collapsed]) .head { margin-bottom: 0; }
  :host([collapsed]) .head .title::after { content: var(--wsfc-collapse-hint, none); display: block; font-size: 11px; font-weight: 400; opacity: 0.85; margin-top: 1px; }
  /* No title: the header's controls (e.g. facts + step buttons) get the room. */
  .head .title:empty { flex: 0 0 0; }
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
`,t6=Q`
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
`,r6=Q`
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
`,J=(r,e=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:e,minimumFractionDigits:e});function K3(r,e,t,i){return p`<div class="seg" role="group" aria-label=${i}>
    ${r.map(o=>p`<button type="button" aria-pressed=${String(o.value===e)} @click=${()=>t(o.value)}>${o.label}</button>`)}
  </div>`}function u1(r,e){e&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function s1(r,e,t,i=h){return r?.show_title===!1?i===h?h:p`<div class="head"><span class="title"></span>${i}</div>`:p`<div class="head">
    ${r?.show_icon===!1?h:p`<ha-icon icon=${r?.icon||e}></ha-icon>`}
    <span class="title">${r?.title||t}</span>${i}
  </div>`}function X3(r,{label:e,value:t,unit:i,digits:o=0,color:a,entity:C}){let n=()=>u1(r,C);return p`<div class="reading" @click=${n} role=${C?"button":h} tabindex=${C?0:h}
    @keydown=${s=>(s.key==="Enter"||s.key===" ")&&n()}>
    <span class="v">${J(t,o)}<small>${i||""}</small></span>
    <span class="l">${a?p`<span class="dot" style="background:${a}"></span>`:h}${e}</span>
  </div>`}var i6=Q`
  .paused { flex: 1; min-height: 120px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    color: var(--wsfc-muted); font-size: 13px; text-align: center; padding: 8px;
    background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
  .paused ha-icon { --mdc-icon-size: 32px; opacity: 0.7; }
`;function o6(r,e){return p`<div class="paused" role="img" aria-label="${e} paused while editing"><ha-icon icon=${r}></ha-icon><span>${e} — paused while editing</span></div>`}var J3=Q`
  .sec { margin-top: calc(10px * var(--wsfc-sy, 1)); }
  .sec:first-of-type { margin-top: 0; }
  .sec h4 { margin: 0 0 4px; font-size: 12px; font-weight: 600; color: var(--wsfc-muted); text-transform: uppercase; letter-spacing: 0.04em; display: flex; gap: 6px; align-items: baseline; }
  .sec h4 small { text-transform: none; letter-spacing: 0; font-weight: 400; }
  .row { display: grid; grid-template-columns: 1fr auto; gap: 2px calc(10px * var(--wsfc-sx, 1)); align-items: baseline; padding: calc(4px * var(--wsfc-sy, 1)) 0;
    border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
  .row:last-child { border-bottom: 0; }
  .row > span { font-size: 13px; }
  .row b { font-size: 16px; font-weight: 600; font-variant-numeric: tabular-nums; text-align: right; }
  .row small { grid-column: 2; text-align: right; font-size: 11px; color: var(--wsfc-muted); margin-top: -2px; }
  .row.click { cursor: pointer; }
  .row.hot b { color: var(--wsfc-temp); }
  .row.cold b { color: var(--wsfc-hum); }
  .src { margin-top: 8px; font-size: 11px; color: var(--wsfc-muted); line-height: 1.4; }
  .note { font-size: 12px; color: var(--wsfc-muted); line-height: 1.45; margin-top: 6px; }
`;function J1(r,e,t,i="",o){return p`<div class="row ${i} ${o?"click":""}" @click=${o||h}><span>${r}</span><b>${e}</b>${t?p`<small>${t}</small>`:h}</div>`}function j2(r,e,t){if(r.size!==1||!r.has("hass"))return!1;let i=r.get("hass");if(!i||!e||i.themes!==e.themes||i.locale!==e.locale||i.config!==e.config||i.entities!==e.entities)return!1;for(let o of t)if(o&&i.states[o]!==e.states[o])return!1;return!0}var eL=typeof global=="object"&&global&&global.Object===Object&&global,a6=eL;var tL=typeof self=="object"&&self&&self.Object===Object&&self,rL=a6||tL||Function("return this")(),i5=rL;var iL=i5.Symbol,G5=iL;var Ki=Object.prototype,oL=Ki.hasOwnProperty,aL=Ki.toString,c4=G5?G5.toStringTag:void 0;function CL(r){var e=oL.call(r,c4),t=r[c4];try{r[c4]=void 0;var i=!0}catch{}var o=aL.call(r);return i&&(e?r[c4]=t:delete r[c4]),o}var Xi=CL;var nL=Object.prototype,sL=nL.toString;function HL(r){return sL.call(r)}var Ji=HL;var VL="[object Null]",LL="[object Undefined]",eo=G5?G5.toStringTag:void 0;function lL(r){return r==null?r===void 0?LL:VL:eo&&eo in Object(r)?Xi(r):Ji(r)}var S5=lL;function cL(r){return r!=null&&typeof r=="object"}var o5=cL;var ML="[object Symbol]";function dL(r){return typeof r=="symbol"||o5(r)&&S5(r)==ML}var C6=dL;function pL(r,e){for(var t=-1,i=r==null?0:r.length,o=Array(i);++t<i;)o[t]=e(r[t],t,r);return o}var to=pL;var uL=Array.isArray,o3=uL;var mL=1/0,ro=G5?G5.prototype:void 0,io=ro?ro.toString:void 0;function oo(r){if(typeof r=="string")return r;if(o3(r))return to(r,oo)+"";if(C6(r))return io?io.call(r):"";var e=r+"";return e=="0"&&1/r==-mL?"-0":e}var ao=oo;var hL=/\s/;function fL(r){for(var e=r.length;e--&&hL.test(r.charAt(e)););return e}var Co=fL;var AL=/^\s+/;function vL(r){return r&&r.slice(0,Co(r)+1).replace(AL,"")}var no=vL;function xL(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var h2=xL;var so=NaN,gL=/^[-+]0x[0-9a-f]+$/i,_L=/^0b[01]+$/i,wL=/^0o[0-7]+$/i,bL=parseInt;function yL(r){if(typeof r=="number")return r;if(C6(r))return so;if(h2(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=h2(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=no(r);var t=_L.test(r);return t||wL.test(r)?bL(r.slice(2),t?2:8):gL.test(r)?so:+r}var Ho=yL;var Vo=1/0,SL=17976931348623157e292;function ZL(r){if(!r)return r===0?r:0;if(r=Ho(r),r===Vo||r===-Vo){var e=r<0?-1:1;return e*SL}return r===r?r:0}var Ke=ZL;function kL(r){return r}var n6=kL;var OL="[object AsyncFunction]",$L="[object Function]",TL="[object GeneratorFunction]",EL="[object Proxy]";function FL(r){if(!h2(r))return!1;var e=S5(r);return e==$L||e==TL||e==OL||e==EL}var e7=FL;var PL=i5["__core-js_shared__"],s6=PL;var Lo=(function(){var r=/[^.]+$/.exec(s6&&s6.keys&&s6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function DL(r){return!!Lo&&Lo in r}var lo=DL;var RL=Function.prototype,BL=RL.toString;function zL(r){if(r!=null){try{return BL.call(r)}catch{}try{return r+""}catch{}}return""}var co=zL;var NL=/[\\^$.*+?()[\]{}|]/g,IL=/^\[object .+?Constructor\]$/,WL=Function.prototype,UL=Object.prototype,jL=WL.toString,GL=UL.hasOwnProperty,qL=RegExp("^"+jL.call(GL).replace(NL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function QL(r){if(!h2(r)||lo(r))return!1;var e=e7(r)?qL:IL;return e.test(co(r))}var Mo=QL;function YL(r,e){return r?.[e]}var po=YL;function KL(r,e){var t=po(r,e);return Mo(t)?t:void 0}var t7=KL;var uo=Object.create,XL=(function(){function r(){}return function(e){if(!h2(e))return{};if(uo)return uo(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}})(),mo=XL;function JL(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}var ho=JL;function el(r,e){var t=-1,i=r.length;for(e||(e=Array(i));++t<i;)e[t]=r[t];return e}var fo=el;var tl=800,rl=16,il=Date.now;function ol(r){var e=0,t=0;return function(){var i=il(),o=rl-(i-t);if(t=i,o>0){if(++e>=tl)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}var Ao=ol;function al(r){return function(){return r}}var vo=al;var Cl=(function(){try{var r=t7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),r7=Cl;var nl=r7?function(r,e){return r7(r,"toString",{configurable:!0,enumerable:!1,value:vo(e),writable:!0})}:n6,xo=nl;var sl=Ao(xo),go=sl;var Hl=9007199254740991,Vl=/^(?:0|[1-9]\d*)$/;function Ll(r,e){var t=typeof r;return e=e??Hl,!!e&&(t=="number"||t!="symbol"&&Vl.test(r))&&r>-1&&r%1==0&&r<e}var H6=Ll;function ll(r,e,t){e=="__proto__"&&r7?r7(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var i7=ll;function cl(r,e){return r===e||r!==r&&e!==e}var h0=cl;var Ml=Object.prototype,dl=Ml.hasOwnProperty;function pl(r,e,t){var i=r[e];(!(dl.call(r,e)&&h0(i,t))||t===void 0&&!(e in r))&&i7(r,e,t)}var _o=pl;function ul(r,e,t,i){var o=!t;t||(t={});for(var a=-1,C=e.length;++a<C;){var n=e[a],s=i?i(t[n],r[n],n,t,r):void 0;s===void 0&&(s=r[n]),o?i7(t,n,s):_o(t,n,s)}return t}var wo=ul;var bo=Math.max;function ml(r,e,t){return e=bo(e===void 0?r.length-1:e,0),function(){for(var i=arguments,o=-1,a=bo(i.length-e,0),C=Array(a);++o<a;)C[o]=i[e+o];o=-1;for(var n=Array(e+1);++o<e;)n[o]=i[o];return n[e]=t(C),ho(r,this,n)}}var yo=ml;function hl(r,e){return go(yo(r,e,n6),r+"")}var So=hl;var fl=9007199254740991;function Al(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=fl}var V6=Al;function vl(r){return r!=null&&V6(r.length)&&!e7(r)}var o7=vl;function xl(r,e,t){if(!h2(t))return!1;var i=typeof e;return(i=="number"?o7(t)&&H6(e,t.length):i=="string"&&e in t)?h0(t[e],r):!1}var L6=xl;function gl(r){return So(function(e,t){var i=-1,o=t.length,a=o>1?t[o-1]:void 0,C=o>2?t[2]:void 0;for(a=r.length>3&&typeof a=="function"?(o--,a):void 0,C&&L6(t[0],t[1],C)&&(a=o<3?void 0:a,o=1),e=Object(e);++i<o;){var n=t[i];n&&r(e,n,i,a)}return e})}var Zo=gl;var _l=Object.prototype;function wl(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||_l;return r===t}var l6=wl;function bl(r,e){for(var t=-1,i=Array(r);++t<r;)i[t]=e(t);return i}var ko=bl;var yl="[object Arguments]";function Sl(r){return o5(r)&&S5(r)==yl}var Xe=Sl;var Oo=Object.prototype,Zl=Oo.hasOwnProperty,kl=Oo.propertyIsEnumerable,Ol=Xe((function(){return arguments})())?Xe:function(r){return o5(r)&&Zl.call(r,"callee")&&!kl.call(r,"callee")},M4=Ol;function $l(){return!1}var $o=$l;var Fo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,To=Fo&&typeof module=="object"&&module&&!module.nodeType&&module,Tl=To&&To.exports===Fo,Eo=Tl?i5.Buffer:void 0,El=Eo?Eo.isBuffer:void 0,Fl=El||$o,c6=Fl;var Pl="[object Arguments]",Dl="[object Array]",Rl="[object Boolean]",Bl="[object Date]",zl="[object Error]",Nl="[object Function]",Il="[object Map]",Wl="[object Number]",Ul="[object Object]",jl="[object RegExp]",Gl="[object Set]",ql="[object String]",Ql="[object WeakMap]",Yl="[object ArrayBuffer]",Kl="[object DataView]",Xl="[object Float32Array]",Jl="[object Float64Array]",ec="[object Int8Array]",tc="[object Int16Array]",rc="[object Int32Array]",ic="[object Uint8Array]",oc="[object Uint8ClampedArray]",ac="[object Uint16Array]",Cc="[object Uint32Array]",U1={};U1[Xl]=U1[Jl]=U1[ec]=U1[tc]=U1[rc]=U1[ic]=U1[oc]=U1[ac]=U1[Cc]=!0;U1[Pl]=U1[Dl]=U1[Yl]=U1[Rl]=U1[Kl]=U1[Bl]=U1[zl]=U1[Nl]=U1[Il]=U1[Wl]=U1[Ul]=U1[jl]=U1[Gl]=U1[ql]=U1[Ql]=!1;function nc(r){return o5(r)&&V6(r.length)&&!!U1[S5(r)]}var Po=nc;function sc(r){return function(e){return r(e)}}var Do=sc;var Ro=typeof exports=="object"&&exports&&!exports.nodeType&&exports,d4=Ro&&typeof module=="object"&&module&&!module.nodeType&&module,Hc=d4&&d4.exports===Ro,Je=Hc&&a6.process,Vc=(function(){try{var r=d4&&d4.require&&d4.require("util").types;return r||Je&&Je.binding&&Je.binding("util")}catch{}})(),et=Vc;var Bo=et&&et.isTypedArray,Lc=Bo?Do(Bo):Po,M6=Lc;var lc=Object.prototype,cc=lc.hasOwnProperty;function Mc(r,e){var t=o3(r),i=!t&&M4(r),o=!t&&!i&&c6(r),a=!t&&!i&&!o&&M6(r),C=t||i||o||a,n=C?ko(r.length,String):[],s=n.length;for(var H in r)(e||cc.call(r,H))&&!(C&&(H=="length"||o&&(H=="offset"||H=="parent")||a&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||H6(H,s)))&&n.push(H);return n}var zo=Mc;function dc(r,e){return function(t){return r(e(t))}}var No=dc;function pc(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Io=pc;var uc=Object.prototype,mc=uc.hasOwnProperty;function hc(r){if(!h2(r))return Io(r);var e=l6(r),t=[];for(var i in r)i=="constructor"&&(e||!mc.call(r,i))||t.push(i);return t}var Wo=hc;function fc(r){return o7(r)?zo(r,!0):Wo(r)}var d6=fc;var Ac=t7(Object,"create"),q5=Ac;function vc(){this.__data__=q5?q5(null):{},this.size=0}var Uo=vc;function xc(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var jo=xc;var gc="__lodash_hash_undefined__",_c=Object.prototype,wc=_c.hasOwnProperty;function bc(r){var e=this.__data__;if(q5){var t=e[r];return t===gc?void 0:t}return wc.call(e,r)?e[r]:void 0}var Go=bc;var yc=Object.prototype,Sc=yc.hasOwnProperty;function Zc(r){var e=this.__data__;return q5?e[r]!==void 0:Sc.call(e,r)}var qo=Zc;var kc="__lodash_hash_undefined__";function Oc(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=q5&&e===void 0?kc:e,this}var Qo=Oc;function a7(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var i=r[e];this.set(i[0],i[1])}}a7.prototype.clear=Uo;a7.prototype.delete=jo;a7.prototype.get=Go;a7.prototype.has=qo;a7.prototype.set=Qo;var tt=a7;function $c(){this.__data__=[],this.size=0}var Yo=$c;function Tc(r,e){for(var t=r.length;t--;)if(h0(r[t][0],e))return t;return-1}var f0=Tc;var Ec=Array.prototype,Fc=Ec.splice;function Pc(r){var e=this.__data__,t=f0(e,r);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Fc.call(e,t,1),--this.size,!0}var Ko=Pc;function Dc(r){var e=this.__data__,t=f0(e,r);return t<0?void 0:e[t][1]}var Xo=Dc;function Rc(r){return f0(this.__data__,r)>-1}var Jo=Rc;function Bc(r,e){var t=this.__data__,i=f0(t,r);return i<0?(++this.size,t.push([r,e])):t[i][1]=e,this}var ea=Bc;function C7(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var i=r[e];this.set(i[0],i[1])}}C7.prototype.clear=Yo;C7.prototype.delete=Ko;C7.prototype.get=Xo;C7.prototype.has=Jo;C7.prototype.set=ea;var A0=C7;var zc=t7(i5,"Map"),p6=zc;function Nc(){this.size=0,this.__data__={hash:new tt,map:new(p6||A0),string:new tt}}var ta=Nc;function Ic(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}var ra=Ic;function Wc(r,e){var t=r.__data__;return ra(e)?t[typeof e=="string"?"string":"hash"]:t.map}var v0=Wc;function Uc(r){var e=v0(this,r).delete(r);return this.size-=e?1:0,e}var ia=Uc;function jc(r){return v0(this,r).get(r)}var oa=jc;function Gc(r){return v0(this,r).has(r)}var aa=Gc;function qc(r,e){var t=v0(this,r),i=t.size;return t.set(r,e),this.size+=t.size==i?0:1,this}var Ca=qc;function n7(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var i=r[e];this.set(i[0],i[1])}}n7.prototype.clear=ta;n7.prototype.delete=ia;n7.prototype.get=oa;n7.prototype.has=aa;n7.prototype.set=Ca;var na=n7;function Qc(r){return r==null?"":ao(r)}var u6=Qc;var Yc=No(Object.getPrototypeOf,Object),m6=Yc;var Kc="[object Object]",Xc=Function.prototype,Jc=Object.prototype,sa=Xc.toString,eM=Jc.hasOwnProperty,tM=sa.call(Object);function rM(r){if(!o5(r)||S5(r)!=Kc)return!1;var e=m6(r);if(e===null)return!0;var t=eM.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&sa.call(t)==tM}var Ha=rM;function iM(r,e,t){var i=-1,o=r.length;e<0&&(e=-e>o?0:o+e),t=t>o?o:t,t<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=r[i+e];return a}var Va=iM;function oM(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Va(r,e,t)}var La=oM;var aM="\\ud800-\\udfff",CM="\\u0300-\\u036f",nM="\\ufe20-\\ufe2f",sM="\\u20d0-\\u20ff",HM=CM+nM+sM,VM="\\ufe0e\\ufe0f",LM="\\u200d",lM=RegExp("["+LM+aM+HM+VM+"]");function cM(r){return lM.test(r)}var h6=cM;function MM(r){return r.split("")}var la=MM;var ca="\\ud800-\\udfff",dM="\\u0300-\\u036f",pM="\\ufe20-\\ufe2f",uM="\\u20d0-\\u20ff",mM=dM+pM+uM,hM="\\ufe0e\\ufe0f",fM="["+ca+"]",rt="["+mM+"]",it="\\ud83c[\\udffb-\\udfff]",AM="(?:"+rt+"|"+it+")",Ma="[^"+ca+"]",da="(?:\\ud83c[\\udde6-\\uddff]){2}",pa="[\\ud800-\\udbff][\\udc00-\\udfff]",vM="\\u200d",ua=AM+"?",ma="["+hM+"]?",xM="(?:"+vM+"(?:"+[Ma,da,pa].join("|")+")"+ma+ua+")*",gM=ma+ua+xM,_M="(?:"+[Ma+rt+"?",rt,da,pa,fM].join("|")+")",wM=RegExp(it+"(?="+it+")|"+_M+gM,"g");function bM(r){return r.match(wM)||[]}var ha=bM;function yM(r){return h6(r)?ha(r):la(r)}var fa=yM;function SM(r){return function(e){e=u6(e);var t=h6(e)?fa(e):void 0,i=t?t[0]:e.charAt(0),o=t?La(t,1).join(""):e.slice(1);return i[r]()+o}}var Aa=SM;var ZM=Aa("toUpperCase"),va=ZM;function kM(r){return va(u6(r).toLowerCase())}var a5=kM;function OM(){this.__data__=new A0,this.size=0}var xa=OM;function $M(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}var ga=$M;function TM(r){return this.__data__.get(r)}var _a=TM;function EM(r){return this.__data__.has(r)}var wa=EM;var FM=200;function PM(r,e){var t=this.__data__;if(t instanceof A0){var i=t.__data__;if(!p6||i.length<FM-1)return i.push([r,e]),this.size=++t.size,this;t=this.__data__=new na(i)}return t.set(r,e),this.size=t.size,this}var ba=PM;function s7(r){var e=this.__data__=new A0(r);this.size=e.size}s7.prototype.clear=xa;s7.prototype.delete=ga;s7.prototype.get=_a;s7.prototype.has=wa;s7.prototype.set=ba;var ya=s7;var Oa=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Sa=Oa&&typeof module=="object"&&module&&!module.nodeType&&module,DM=Sa&&Sa.exports===Oa,Za=DM?i5.Buffer:void 0,ka=Za?Za.allocUnsafe:void 0;function RM(r,e){if(e)return r.slice();var t=r.length,i=ka?ka(t):new r.constructor(t);return r.copy(i),i}var $a=RM;var BM=i5.Uint8Array,ot=BM;function zM(r){var e=new r.constructor(r.byteLength);return new ot(e).set(new ot(r)),e}var Ta=zM;function NM(r,e){var t=e?Ta(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var Ea=NM;function IM(r){return typeof r.constructor=="function"&&!l6(r)?mo(m6(r)):{}}var Fa=IM;function WM(r){return function(e,t,i){for(var o=-1,a=Object(e),C=i(e),n=C.length;n--;){var s=C[r?n:++o];if(t(a[s],s,a)===!1)break}return e}}var Pa=WM;var UM=Pa(),Da=UM;function jM(r,e,t){(t!==void 0&&!h0(r[e],t)||t===void 0&&!(e in r))&&i7(r,e,t)}var p4=jM;function GM(r){return o5(r)&&o7(r)}var Ra=GM;function qM(r,e){if(!(e==="constructor"&&typeof r[e]=="function")&&e!="__proto__")return r[e]}var u4=qM;function QM(r){return wo(r,d6(r))}var Ba=QM;function YM(r,e,t,i,o,a,C){var n=u4(r,t),s=u4(e,t),H=C.get(s);if(H){p4(r,t,H);return}var V=a?a(n,s,t+"",r,e,C):void 0,L=V===void 0;if(L){var d=o3(s),u=!d&&c6(s),f=!d&&!u&&M6(s);V=s,d||u||f?o3(n)?V=n:Ra(n)?V=fo(n):u?(L=!1,V=$a(s,!0)):f?(L=!1,V=Ea(s,!0)):V=[]:Ha(s)||M4(s)?(V=n,M4(n)?V=Ba(n):(!h2(n)||e7(n))&&(V=Fa(s))):L=!1}L&&(C.set(s,V),o(V,s,i,a,C),C.delete(s)),p4(r,t,V)}var za=YM;function Na(r,e,t,i,o){r!==e&&Da(e,function(a,C){if(o||(o=new ya),h2(a))za(r,e,C,t,Na,i,o);else{var n=i?i(u4(r,C),a,C+"",r,e,o):void 0;n===void 0&&(n=a),p4(r,C,n)}},d6)}var Ia=Na;var KM=Zo(function(r,e,t){Ia(r,e,t)}),a3=KM;var XM=Math.floor,JM=Math.random;function ed(r,e){return r+XM(JM()*(e-r+1))}var Wa=ed;var td=parseFloat,rd=Math.min,id=Math.random;function od(r,e,t){if(t&&typeof t!="boolean"&&L6(r,e,t)&&(e=t=void 0),t===void 0&&(typeof e=="boolean"?(t=e,e=void 0):typeof r=="boolean"&&(t=r,r=void 0)),r===void 0&&e===void 0?(r=0,e=1):(r=Ke(r),e===void 0?(e=r,r=0):e=Ke(e)),r>e){var i=r;r=e,e=i}if(t||r%1||e%1){var o=id();return rd(r+o*(e-r+td("1e-"+((o+"").length-1))),e)}return Wa(r,e)}var w1=od;var Q1=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var ad={attribute:!0,type:String,converter:o4,reflect:!1,hasChanged:J9},Cd=(r=ad,e,t)=>{let{kind:i,metadata:o}=t,a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(t.name,r),i==="accessor"){let{name:C}=t;return{set(n){let s=e.get.call(this);e.set.call(this,n),this.requestUpdate(C,s,r,!0,n)},init(n){return n!==void 0&&this.C(C,void 0,r,n),n}}}if(i==="setter"){let{name:C}=t;return function(n){let s=this[C];e.call(this,n),this.requestUpdate(C,s,r,!0,n)}}throw Error("Unsupported decorator location: "+i)};function e1(r){return(e,t)=>typeof t=="object"?Cd(r,e,t):((i,o,a)=>{let C=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),C?Object.getOwnPropertyDescriptor(o,a):void 0})(r,e,t)}function Z2(r){return e1({...r,state:!0,attribute:!1})}var C3=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);function m4(r,e){return(t,i,o)=>{let a=C=>C.renderRoot?.querySelector(r)??null;if(e){let{get:C,set:n}=typeof i=="object"?t:o??(()=>{let s=Symbol();return{get(){return this[s]},set(H){this[s]=H}}})();return C3(t,i,{get(){let s=C.call(this);return s===void 0&&(s=a(this),(s!==null||this.hasUpdated)&&n.call(this,s)),s}})}return C3(t,i,{get(){return a(this)}})}}var Ua=`:host {
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
`;var ja=Q`
  ${U5(Ua)}
`;var n3,s3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(n3||(n3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(s3||(s3={}));function qa(){return(qa=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r}).apply(this,arguments)}function sd(r){return r.substr(0,r.indexOf("."))}var Hd=function(r){switch(r.number_format){case n3.comma_decimal:return["en-US","en"];case n3.decimal_comma:return["de","es","it"];case n3.space_comma:return["fr","sv","cs"];case n3.system:return;default:return r.language}},Vd=function(r,e){return e===void 0&&(e=2),Math.round(r*Math.pow(10,e))/Math.pow(10,e)},at=function(r,e,t){var i=e?Hd(e):void 0;if(Number.isNaN=Number.isNaN||function o(a){return typeof a=="number"&&o(a)},e?.number_format!==n3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,Ga(r,t)).format(Number(r))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,Ga(r,t)).format(Number(r))}return typeof r=="string"?r:Vd(r,t?.maximumFractionDigits).toString()+(t?.style==="currency"?" "+t.currency:"")},Ga=function(r,e){var t=qa({maximumFractionDigits:2},e);if(typeof r!="string")return t;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;t.minimumFractionDigits=i,t.maximumFractionDigits=i}return t};var Ld=["closed","locked","off"];var j1=function(r,e,t,i){i=i||{},t=t??{};var o=new Event(e,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return o.detail=t,r.dispatchEvent(o),o};var f6=function(r){j1(window,"haptic",r)},ld=function(r,e,t){t===void 0&&(t=!1),t?history.replaceState(null,"",e):history.pushState(null,"",e),j1(window,"location-changed",{replace:t})},cd=function(r,e,t){t===void 0&&(t=!0);var i,o=sd(e),a=o==="group"?"homeassistant":o;switch(o){case"lock":i=t?"unlock":"lock";break;case"cover":i=t?"open_cover":"close_cover";break;default:i=t?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:e})},Md=function(r,e){var t=Ld.includes(r.states[e].state);return cd(r,e,t)},dd=function(r,e,t,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===e.user.id})||(f6("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(t.entity||t.camera_image)&&j1(r,"hass-more-info",{entityId:t.entity?t.entity:t.camera_image});break;case"navigate":i.navigation_path&&ld(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":t.entity&&(Md(e,t.entity),f6("success"));break;case"call-service":if(!i.service)return void f6("failure");var o=i.service.split(".",2);e.callService(o[0],o[1],i.service_data,i.target),f6("success");break;case"fire-dom-event":j1(r,"ll-custom",i)}},h4=function(r,e,t,i){var o;i==="double_tap"&&t.double_tap_action?o=t.double_tap_action:i==="hold"&&t.hold_action?o=t.hold_action:i==="tap"&&t.tap_action&&(o=t.tap_action),dd(r,e,t,o)};function Q5(r){return r!==void 0&&r.action!=="none"}function Qa(r,e,t){if(e.has("config")||t)return!0;if(r.config.entity){var i=e.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var Ya="NOT_RUNNING";var A6=t4(H7(),1);var Xa=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function pd(r,e){return!!(r===e||Xa(r)&&Xa(e))}function ud(r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!pd(r[t],e[t]))return!1;return!0}function x0(r,e){e===void 0&&(e=ud);var t=null;function i(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(t&&t.lastThis===this&&e(o,t.lastArgs))return t.lastResult;var C=r.apply(this,o);return t={lastResult:C,lastArgs:o,lastThis:this},C}return i.clear=function(){t=null},i}var Ja=(r,e)=>r?r.config.state!==Ya?`${r.localize("ui.card.common.entity_not_found")}: ${e}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",g0=(r,e)=>L7(e).toLocaleDateString(H3(r),{weekday:"short"}),eC=(r,e)=>L7(e).toLocaleDateString(H3(r),{day:"numeric"}),tC=(r,e)=>{let t=L7(e),i=H3(r),o=v6(r);try{let V=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:o}).formatToParts(t),L=V.find(u=>u.type==="hour"),d=V.find(u=>u.type==="dayPeriod");if(L){if(d)return{hour:L.value,suffix:d.value};let u=V.indexOf(L),f=V.slice(u+1).filter(v=>v.type==="literal").map(v=>v.value).join("");return f&&f.trim()?{hour:L.value,suffix:f.trim()}:{hour:L.value}}}catch{}let a=t.toLocaleTimeString(i,{hour:"numeric",hour12:o}),C=a.match(/\d+/),n=C?C[0]:a,s=a.replace(/\d+\s*/,"").trim();return s?{hour:n,suffix:s}:{hour:n}},rC=(r,e)=>{let t=L7(e),i=H3(r),o=v6(r);try{let V=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:o}).formatToParts(t),L=V.find(f=>f.type==="hour"),d=V.find(f=>f.type==="minute"),u=V.find(f=>f.type==="dayPeriod");if(L&&d){let f=V.indexOf(L),v=V.indexOf(d),x=V.slice(f+1,v).map(b=>b.value).join(""),w=`${L.value}${x}${d.value}`;if(u)return{time:w,suffix:u.value};let y=V.slice(v+1).filter(b=>b.type==="literal").map(b=>b.value).join("");return y&&y.trim()?{time:w,suffix:y.trim()}:{time:w}}}catch{}let a=t.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:o}),C=a.match(/\d+[:.]\d+/),n=C?C[0]:a,s=a.replace(/\d+[:.]\d+\s*/,"").trim();return s?{time:n,suffix:s}:{time:n}},V7=r=>{let e=new Date(r);return e.setHours(0,0,0,0),e.getTime()},v6=x0(r=>{let e=r?.locale;if(e?.time_format===s3.language||e?.time_format===s3.system){let t=e.time_format===s3.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e?.time_format===s3.am_pm}),H3=r=>r?.locale?.language||navigator.language||"en",L7=r=>typeof r=="string"?new Date(r):r,Y5=(r,e)=>{let{latitude:t,longitude:i}=r?.config||{};if(!t||!i)return null;let o=L7(e),a=A6.getTimes(o,t,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:o<a.sunrise||o>a.sunset}},iC=(r,e)=>{let t=L7(e),{fraction:i,phase:o}=A6.getMoonIllumination(t),a=o<=.5,C=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==C}},oC=(r,e)=>{let t=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*t)).toFixed(2),o=t<.5,a=e===o?0:1,C=e?-60:160;return`M50 0 L${C} 0 L${C} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},st=(r,e)=>{let t=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*t)).toFixed(2),o=e?1:0,a=t<.5;return`M50 0 A50 50 0 0 ${o} 50 100 A${i} 50 0 0 ${e===a?0:1} 50 0 Z`},l7=r=>r.length===0?0:r.reduce((e,t)=>e+t,0)/r.length,aC=r=>{let e=typeof r=="string"?new Date(r):new Date(r);return e.setMinutes(59,59,999),e},nt=r=>{let e=r!=null&&typeof r=="object"?r.entity:void 0;return typeof e=="string"?e:void 0},CC=r=>{let e=r.current;if(!e)return[];let t=new Set;e.temperature_entity&&t.add(e.temperature_entity);let i=nt(e.secondary_info_attribute);i&&t.add(i);let o=e.show_attributes;if(Array.isArray(o))for(let a of o){let C=nt(a);C&&t.add(C)}else{let a=nt(o);a&&t.add(a)}return t.delete(r.entity),[...t]};var v2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},lt={silent:{level:-1},fatal:{level:v2.fatal},error:{level:v2.error},warn:{level:v2.warn},log:{level:v2.log},info:{level:v2.info},success:{level:v2.success},fail:{level:v2.fail},ready:{level:v2.info},start:{level:v2.info},box:{level:v2.info},debug:{level:v2.debug},trace:{level:v2.trace},verbose:{level:v2.verbose}};function Ht(r){if(r===null||typeof r!="object")return!1;let e=Object.getPrototypeOf(r);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function ct(r,e,t=".",i){if(!Ht(e))return ct(r,{},t,i);let o=Object.assign({},e);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let C=r[a];C!=null&&(i&&i(o,a,C,t)||(Array.isArray(C)&&Array.isArray(o[a])?o[a]=[...C,...o[a]]:Ht(C)&&Ht(o[a])?o[a]=ct(C,o[a],(t?`${t}.`:"")+a.toString(),i):o[a]=C))}return o}function md(r){return(...e)=>e.reduce((t,i)=>ct(t,i,"",r),{})}var hd=md();function fd(r){return Object.prototype.toString.call(r)==="[object Object]"}function Ad(r){return!(!fd(r)||!r.message&&!r.args||r.stack)}var Vt=!1,nC=[],L2=class r{constructor(e={}){Z(this,"options");Z(this,"_lastLog");Z(this,"_mockFn");let t=e.types||lt;this.options=hd({...e,defaults:{...e.defaults},level:Lt(e.level,t),reporters:[...e.reporters||[]]},{types:lt,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in t){let o={type:i,...this.options.defaults,...t[i]};this[i]=this._wrapLogFn(o),this[i].raw=this._wrapLogFn(o,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(e){this.options.level=Lt(e,this.options.types,this.options.level)}prompt(e,t){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(e,t)}create(e){let t=new r({...this.options,...e});return this._mockFn&&t.mockTypes(this._mockFn),t}withDefaults(e){return this.create({...this.options,defaults:{...this.options.defaults,...e}})}withTag(e){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+e:e})}addReporter(e){return this.options.reporters.push(e),this}removeReporter(e){if(e){let t=this.options.reporters.indexOf(e);if(t!==-1)return this.options.reporters.splice(t,1)}else this.options.reporters.splice(0);return this}setReporters(e){return this.options.reporters=Array.isArray(e)?e:[e],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let e in this.options.types)console["__"+e]||(console["__"+e]=console[e]),console[e]=this[e].raw}restoreConsole(){for(let e in this.options.types)console["__"+e]&&(console[e]=console["__"+e],delete console["__"+e])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(e,t){e&&(e.__write||(e.__write=e.write),e.write=i=>{this[t].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(e){e&&e.__write&&(e.write=e.__write,delete e.__write)}pauseLogs(){Vt=!0}resumeLogs(){Vt=!1;let e=nC.splice(0);for(let t of e)t[0]._logFn(t[1],t[2])}mockTypes(e){let t=e||this.options.mockFn;if(this._mockFn=t,typeof t=="function")for(let i in this.options.types)this[i]=t(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(e,t){return(...i)=>{if(Vt){nC.push([this,e,i,t]);return}return this._logFn(e,i,t)}}_logFn(e,t,i){if((e.level||0)>this.level)return!1;let o={date:new Date,args:[],...e,level:Lt(e.level,this.options.types)};!i&&t.length===1&&Ad(t[0])?Object.assign(o,t[0]):o.args=[...t],o.message&&(o.args.unshift(o.message),delete o.message),o.additional&&(Array.isArray(o.additional)||(o.additional=o.additional.split(`
`)),o.args.push(`
`+o.additional.join(`
`)),delete o.additional),o.type=typeof o.type=="string"?o.type.toLowerCase():"log",o.tag=typeof o.tag=="string"?o.tag:"";let a=(n=!1)=>{let s=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&s>0){let H=[...this._lastLog.object.args];s>1&&H.push(`(repeated ${s} times)`),this._log({...this._lastLog.object,args:H}),this._lastLog.count=1}n&&(this._lastLog.object=o,this._log(o))};clearTimeout(this._lastLog.timeout);let C=this._lastLog.time&&o.date?o.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=o.date,C<this.options.throttle)try{let n=JSON.stringify([o.type,o.tag,o.args]),s=this._lastLog.serialized===n;if(this._lastLog.serialized=n,s&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(e){for(let t of this.options.reporters)t.log(e,{options:this.options})}};function Lt(r,e={},t=3){return r===void 0?t:typeof r=="number"?r:e[r]&&e[r].level!==void 0?e[r].level:t}L2.prototype.add=L2.prototype.addReporter;L2.prototype.remove=L2.prototype.removeReporter;L2.prototype.clear=L2.prototype.removeReporter;L2.prototype.withScope=L2.prototype.withTag;L2.prototype.mock=L2.prototype.mockTypes;L2.prototype.pause=L2.prototype.pauseLogs;L2.prototype.resume=L2.prototype.resumeLogs;function sC(r={}){return new L2(r)}var Mt=class{constructor(e){Z(this,"options");Z(this,"defaultColor");Z(this,"levelColorMap");Z(this,"typeColorMap");this.options={...e},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(e){return e<1?console.__error||console.error:e===1?console.__warn||console.warn:console.__log||console.log}log(e){let t=this._getLogFn(e.level),i=e.type==="log"?"":e.type,o=e.tag||"",C=`
      background: ${this.typeColorMap[e.type]||this.levelColorMap[e.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,n=`%c${[o,i].filter(Boolean).join(":")}`;typeof e.args[0]=="string"?t(`${n}%c ${e.args[0]}`,C,"",...e.args.slice(1)):t(n,C,...e.args)}};function dt(r={}){return sC({reporters:r.reporters||[new Mt({})],prompt(t,i={}){return i.type==="confirm"?Promise.resolve(confirm(t)):Promise.resolve(prompt(t))},...r})}var ZS=dt();var vd=v2.info,d5=dt({level:vd}).withTag("weather-forecast-card");var HC=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",pt=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var x6={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c7=r=>(...e)=>({_$litDirective$:r,values:e}),_0=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var VC="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,ut=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:VC?"100px":"50px",height:VC?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,i){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",n=>{let s=n||window.event;return s.preventDefault&&s.preventDefault(),s.stopPropagation&&s.stopPropagation(),s.cancelBubble=!0,s.returnValue=!1,!1});let o=n=>{this.held=!1;let s,H;n.touches?(s=n.touches[0].pageX,H=n.touches[0].pageY):(s=n.pageX,H=n.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(s,H),this.held=!0},this.holdTime)},a=n=>{n.preventDefault(),i.stopPropagation&&n.stopPropagation(),!(["touchend","touchcancel"].includes(n.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?j1(t,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?n.type==="click"&&n.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,j1(t,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,j1(t,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):j1(t,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},C=n=>{n.keyCode===13&&a(n)};t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),t.addEventListener("mousedown",o,{passive:!0}),t.addEventListener("click",a),t.addEventListener("keyup",C)}startAnimation(t,i){Object.assign(this.style,{left:`${t}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",ut);var xd=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let e=document.createElement("action-handler-wsfc");return r.appendChild(e),e},gd=(r,e)=>{let t=xd();t&&t.bind(r,e)},Z5=c7(class extends _0{update(r,[e]){return gd(r.element,e),U2}render(r){}});var V3=2,x2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],g6=["rain","snow","lightning","sky","moon","sun","cloud"],_6=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],LC="temperature_and_precipitation";var mt=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(mt||{}),_d=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],wd={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},p5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},bd=r=>{if(r==null)return;let e=typeof r=="number"?r:parseFloat(r);if(isNaN(e)||!isFinite(e))return;e%=360,e<0&&(e+=360);let t=Math.floor(e/22.5+.5)%16;return _d[t]},yd=(r,e)=>{let t=e.attributes.wind_speed,i=e.attributes.wind_bearing;if(t==null)return;let o=r.formatEntityAttributeValue(e,"wind_speed");if(i==null)return o;let a=bd(i);if(!a)return o;let C=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${o} (${C})`},G2=(r,e,t)=>{let i=r.config,o=i.unit_system.length||"";switch(t){case"visibility":return e.attributes.visibility_unit||o;case"precipitation":return e.attributes.precipitation_unit||(o==="km"?"mm":"in");case"pressure":return e.attributes.pressure_unit||(o==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return e.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return e.attributes.wind_speed_unit||`${o}/h`;case"wind_gust_speed":return e.attributes.wind_speed_unit||`${o}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(t in i.unit_system?i.unit_system[t]:"")||""}},Sd=288e5,Zd=864e5,kd=r=>{if(r&&r?.length&&r?.length>2){let e=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-e.getTime()<Sd}},Od=r=>{if(r&&r?.length&&r?.length>2){let e=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-e.getTime()<Zd}},lC=r=>{if(r?.forecast&&r.forecast.length>2)return kd(r.forecast)?{forecast:r.forecast,type:"hourly"}:Od(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},ht=(r,e,t)=>{if(t===void 0)return e?.type!==void 0&&e?.forecast&&e?.forecast?.length>2?{forecast:e.forecast,type:e?.type}:lC(r);if(t==="legacy")return lC(r);if(t===e?.type&&e?.forecast&&e?.forecast?.length>2)return{forecast:e.forecast,type:t}},cC=(r,e,t,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:t,entity_id:e},{resubscribe:!1});var MC=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,dC=r=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let t=(e&1)!==0,i=(e&2)!==0,o=(e&4)!==0;return t||i||o},f4=(r,e)=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let o={hourly:2,daily:1,twice_daily:4}[e];return(t&o)!==0},C5=r=>{if(f4(r,"daily"))return"daily";if(f4(r,"twice_daily"))return"twice_daily"},pC=(r,e)=>{if(r===void 0)return"";let t=e==="mm"?r:r*25.4;return t===0||t<.05?"":`${e==="in"?r.toFixed(2):r.toFixed(1)} ${e}`},M7=x0((r,e)=>{let t=e==="hourly"?8:20;if(r==="in"){let i=t/25.4;return parseFloat(i.toFixed(1))}return t}),A4=(r,e,t)=>{if(t.wind_speed===void 0)return;let i=G2(r,e,"wind_speed");return $d(t.wind_speed,i)},$d=(r,e)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[e]||1;return r*i},w6=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let e=parseFloat(r.wind_bearing);if(!isNaN(e)&&isFinite(e))return e;let t=r.wind_bearing.toUpperCase();return wd[t]}}},uC=(r,e)=>{let t=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%e,C=a===0?e:e-a,n=r.slice(i,i+C);if(i+=n.length,n.length===0)continue;let s=n.map(b=>b.temperature),H=n.map(b=>b.humidity).filter(b=>b!==void 0),V=n.map(b=>b.pressure).filter(b=>b!==void 0),L=n.map(b=>b.wind_speed).filter(b=>b!==void 0),d=n.map(b=>b.wind_bearing).filter(b=>b!==void 0),u=n.map(b=>b.precipitation_probability).filter(b=>b!==void 0),f=n.map(b=>b.uv_index).filter(b=>b!==void 0),v=n.map(b=>b.apparent_temperature).filter(b=>b!==void 0),x=new Date(n[n.length-1].datetime);x.setMinutes(59),x.setSeconds(59);let w={datetime:n[0].datetime,groupEndtime:x.toISOString(),condition:Fd(n),temperature:parseFloat(l7(s).toFixed(1))};H.length>0&&(w.humidity=Math.round(l7(H))),u.length>0&&(w.precipitation_probability=Math.max(...u)),n.some(b=>b.precipitation!==void 0)&&(w.precipitation=n.reduce((b,E)=>b+(E.precipitation||0),0));let y=n.map(b=>b.templow).filter(b=>b!==void 0);y.length>0&&(w.templow=Math.min(...y)),V.length>0&&(w.pressure=Math.round(l7(V))),L.length>0&&(w.wind_speed=l7(L)),d.length>0&&(w.wind_bearing=Ed(d)),f.length>0&&(w.uv_index=Math.max(...f)),v.length>0&&(w.apparent_temperature=parseFloat(l7(v).toFixed(1))),t.push(w)}return t},Td="mdi:gauge",mC=(r,e,t)=>e||(t?.attributes?.icon?t.attributes.icon:(r?p5[r]:void 0)??Td),d7=(r,e,t,i)=>{let o=e.attributes[i];if(o!==void 0){if(i==="wind_speed")return yd(r,e);if(i==="wind_gust_speed"){let a=G2(r,e,"wind_gust_speed");return`${at(o,r.locale)} ${a}`}if(i==="ozone"){let a=G2(r,e,"ozone");return`${o} ${a}`}return i==="apparent_temperature"||i==="dew_point"?k5(r,e,o,t.current?.temperature_precision):r.formatEntityAttributeValue(e,i)}},b6=(r,e,t,i,o)=>{let a=r.states[o];if(!a)return;let C=a.state;return C===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?k5(r,e,C,t.current?.temperature_precision):r.formatEntityState(a)},k5=(r,e,t,i,o)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,C=G2(r,e,"temperature"),n=typeof t=="string"?parseFloat(t):t;return isNaN(n)?`${t}${o?"":C}`:`${at(n,r.locale,a)}${o?"":C}`},Ed=r=>{if(r.length===0)return 0;let e=0,t=0;r.forEach(n=>{let s=n*Math.PI/180;e+=Math.sin(s),t+=Math.cos(s)});let i=e/r.length,o=t/r.length,C=Math.atan2(i,o)*180/Math.PI;return C<0&&(C+=360),Math.round(C)},Fd=r=>{let e=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((t,i)=>{let o=e.indexOf(t.condition||"exceptional"),a=e.indexOf(i.condition||"exceptional");return o===-1&&(o=0),a===-1&&(a=0),o-a}),r[0]?.condition||"exceptional"};var p7=class{constructor(e,t){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=e=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=e.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=e.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=e=>{if(!this._mouseDown||!this._container)return;let i=e.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=e.pageX-this._state.lastX,this._state.lastX=e.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let o=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{o&&(o.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let e=this._container;if(!e||Math.abs(this._state.velocity)<.5){this._finalize();return}e.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let e=this._container;if(!e||!this._childSelector){this._completeFinalize();return}let t=e.querySelector(this._childSelector);if(!t){this._completeFinalize();return}let i=t.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let o=e.scrollLeft,a=Math.round(o/i)*i,C=500,n=performance.now(),s=V=>V*(2-V),H=V=>{let L=this._container;if(!L){this._completeFinalize();return}let d=V-n,u=Math.min(d/C,1),f=s(u);L.scrollLeft=o+(a-o)*f,u<1?this._state.momentumId=requestAnimationFrame(H):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(H)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=e,this._selector=t.selector,this._childSelector=t.childSelector,e.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var hC="important",Pd=" !"+hC,k2=c7(class extends _0{constructor(r){if(super(r),r.type!==x6.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{let i=r[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){let{style:t}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(let i in e){let o=e[i];if(o!=null){this.ft.add(i);let a=typeof o=="string"&&o.endsWith(Pd);i.includes("-")||a?t.setProperty(i,a?o.slice(0,-11):o,a?hC:""):t[i]=o}}return U2}});var L3=c7(class extends _0{constructor(r){if(super(r),r.type!==x6.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let t=r.element.classList;for(let i of this.st)i in e||(t.remove(i),this.st.delete(i));for(let i in e){let o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return U2}});function g4(r){return r+.5|0}var w0=(r,e,t)=>Math.max(Math.min(r,t),e);function v4(r){return w0(g4(r*2.55),0,255)}function b0(r){return w0(g4(r*255),0,255)}function K5(r){return w0(g4(r/2.55)/100,0,1)}function fC(r){return w0(g4(r*100),0,100)}var n5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},At=[..."0123456789ABCDEF"],Dd=r=>At[r&15],Rd=r=>At[(r&240)>>4]+At[r&15],y6=r=>(r&240)>>4===(r&15),Bd=r=>y6(r.r)&&y6(r.g)&&y6(r.b)&&y6(r.a);function zd(r){var e=r.length,t;return r[0]==="#"&&(e===4||e===5?t={r:255&n5[r[1]]*17,g:255&n5[r[2]]*17,b:255&n5[r[3]]*17,a:e===5?n5[r[4]]*17:255}:(e===7||e===9)&&(t={r:n5[r[1]]<<4|n5[r[2]],g:n5[r[3]]<<4|n5[r[4]],b:n5[r[5]]<<4|n5[r[6]],a:e===9?n5[r[7]]<<4|n5[r[8]]:255})),t}var Nd=(r,e)=>r<255?e(r):"";function Id(r){var e=Bd(r)?Dd:Rd;return r?"#"+e(r.r)+e(r.g)+e(r.b)+Nd(r.a,e):void 0}var Wd=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function gC(r,e,t){let i=e*Math.min(t,1-t),o=(a,C=(a+r/30)%12)=>t-i*Math.max(Math.min(C-3,9-C,1),-1);return[o(0),o(8),o(4)]}function Ud(r,e,t){let i=(o,a=(o+r/60)%6)=>t-t*e*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function jd(r,e,t){let i=gC(r,1,.5),o;for(e+t>1&&(o=1/(e+t),e*=o,t*=o),o=0;o<3;o++)i[o]*=1-e-t,i[o]+=e;return i}function Gd(r,e,t,i,o){return r===o?(e-t)/i+(e<t?6:0):e===o?(t-r)/i+2:(r-e)/i+4}function vt(r){let t=r.r/255,i=r.g/255,o=r.b/255,a=Math.max(t,i,o),C=Math.min(t,i,o),n=(a+C)/2,s,H,V;return a!==C&&(V=a-C,H=n>.5?V/(2-a-C):V/(a+C),s=Gd(t,i,o,V,a),s=s*60+.5),[s|0,H||0,n]}function xt(r,e,t,i){return(Array.isArray(e)?r(e[0],e[1],e[2]):r(e,t,i)).map(b0)}function gt(r,e,t){return xt(gC,r,e,t)}function qd(r,e,t){return xt(jd,r,e,t)}function Qd(r,e,t){return xt(Ud,r,e,t)}function _C(r){return(r%360+360)%360}function Yd(r){let e=Wd.exec(r),t=255,i;if(!e)return;e[5]!==i&&(t=e[6]?v4(+e[5]):b0(+e[5]));let o=_C(+e[2]),a=+e[3]/100,C=+e[4]/100;return e[1]==="hwb"?i=qd(o,a,C):e[1]==="hsv"?i=Qd(o,a,C):i=gt(o,a,C),{r:i[0],g:i[1],b:i[2],a:t}}function Kd(r,e){var t=vt(r);t[0]=_C(t[0]+e),t=gt(t),r.r=t[0],r.g=t[1],r.b=t[2]}function Xd(r){if(!r)return;let e=vt(r),t=e[0],i=fC(e[1]),o=fC(e[2]);return r.a<255?`hsla(${t}, ${i}%, ${o}%, ${K5(r.a)})`:`hsl(${t}, ${i}%, ${o}%)`}var AC={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},vC={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Jd(){let r={},e=Object.keys(vC),t=Object.keys(AC),i,o,a,C,n;for(i=0;i<e.length;i++){for(C=n=e[i],o=0;o<t.length;o++)a=t[o],n=n.replace(a,AC[a]);a=parseInt(vC[C],16),r[n]=[a>>16&255,a>>8&255,a&255]}return r}var S6;function ep(r){S6||(S6=Jd(),S6.transparent=[0,0,0,0]);let e=S6[r.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}var tp=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rp(r){let e=tp.exec(r),t=255,i,o,a;if(e){if(e[7]!==i){let C=+e[7];t=e[8]?v4(C):w0(C*255,0,255)}return i=+e[1],o=+e[3],a=+e[5],i=255&(e[2]?v4(i):w0(i,0,255)),o=255&(e[4]?v4(o):w0(o,0,255)),a=255&(e[6]?v4(a):w0(a,0,255)),{r:i,g:o,b:a,a:t}}}function ip(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${K5(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var ft=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,u7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function op(r,e,t){let i=u7(K5(r.r)),o=u7(K5(r.g)),a=u7(K5(r.b));return{r:b0(ft(i+t*(u7(K5(e.r))-i))),g:b0(ft(o+t*(u7(K5(e.g))-o))),b:b0(ft(a+t*(u7(K5(e.b))-a))),a:r.a+t*(e.a-r.a)}}function Z6(r,e,t){if(r){let i=vt(r);i[e]=Math.max(0,Math.min(i[e]+i[e]*t,e===0?360:1)),i=gt(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function wC(r,e){return r&&Object.assign(e||{},r)}function xC(r){var e={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(e={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(e.a=b0(r[3]))):(e=wC(r,{r:0,g:0,b:0,a:1}),e.a=b0(e.a)),e}function ap(r){return r.charAt(0)==="r"?rp(r):Yd(r)}var x4=class r{constructor(e){if(e instanceof r)return e;let t=typeof e,i;t==="object"?i=xC(e):t==="string"&&(i=zd(e)||ep(e)||ap(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=wC(this._rgb);return e&&(e.a=K5(e.a)),e}set rgb(e){this._rgb=xC(e)}rgbString(){return this._valid?ip(this._rgb):void 0}hexString(){return this._valid?Id(this._rgb):void 0}hslString(){return this._valid?Xd(this._rgb):void 0}mix(e,t){if(e){let i=this.rgb,o=e.rgb,a,C=t===a?.5:t,n=2*C-1,s=i.a-o.a,H=((n*s===-1?n:(n+s)/(1+n*s))+1)/2;a=1-H,i.r=255&H*i.r+a*o.r+.5,i.g=255&H*i.g+a*o.g+.5,i.b=255&H*i.b+a*o.b+.5,i.a=C*i.a+(1-C)*o.a,this.rgb=i}return this}interpolate(e,t){return e&&(this._rgb=op(this._rgb,e._rgb,t)),this}clone(){return new r(this.rgb)}alpha(e){return this._rgb.a=b0(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb,t=g4(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Z6(this._rgb,2,e),this}darken(e){return Z6(this._rgb,2,-e),this}saturate(e){return Z6(this._rgb,1,e),this}desaturate(e){return Z6(this._rgb,1,-e),this}rotate(e){return Kd(this._rgb,e),this}};function m5(){}var yt=(()=>{let r=0;return()=>r++})();function p1(r){return r==null}function I1(r){if(Array.isArray&&Array.isArray(r))return!0;let e=Object.prototype.toString.call(r);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function m1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function Y1(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function O2(r,e){return Y1(r)?r:e}function L1(r,e){return typeof r>"u"?e:r}var St=(r,e)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*e:+r;function O1(r,e,t){if(r&&typeof r.call=="function")return r.apply(t,e)}function b1(r,e,t,i){let o,a,C;if(I1(r))if(a=r.length,i)for(o=a-1;o>=0;o--)e.call(t,r[o],o);else for(o=0;o<a;o++)e.call(t,r[o],o);else if(m1(r))for(C=Object.keys(r),a=C.length,o=0;o<a;o++)e.call(t,r[C[o]],C[o])}function f7(r,e){let t,i,o,a;if(!r||!e||r.length!==e.length)return!1;for(t=0,i=r.length;t<i;++t)if(o=r[t],a=e[t],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function w4(r){if(I1(r))return r.map(w4);if(m1(r)){let e=Object.create(null),t=Object.keys(r),i=t.length,o=0;for(;o<i;++o)e[t[o]]=w4(r[t[o]]);return e}return r}function FC(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function PC(r,e,t,i){if(!FC(r))return;let o=e[r],a=t[r];m1(o)&&m1(a)?q2(o,a,i):e[r]=w4(a)}function q2(r,e,t){let i=I1(e)?e:[e],o=i.length;if(!m1(r))return r;t=t||{};let a=t.merger||PC,C;for(let n=0;n<o;++n){if(C=i[n],!m1(C))continue;let s=Object.keys(C);for(let H=0,V=s.length;H<V;++H)a(s[H],r,C,t)}return r}function M3(r,e){return q2(r,e,{merger:DC})}function DC(r,e,t){if(!FC(r))return;let i=e[r],o=t[r];m1(i)&&m1(o)?M3(i,o):Object.prototype.hasOwnProperty.call(e,r)||(e[r]=w4(o))}var bC={"":r=>r,x:r=>r.x,y:r=>r.y};function RC(r){let e=r.split("."),t=[],i="";for(let o of e)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(t.push(i),i="");return t}function Cp(r){let e=RC(r);return t=>{for(let i of e){if(i==="")break;t=t&&t[i]}return t}}function k0(r,e){return(bC[e]||(bC[e]=Cp(e)))(r)}function S4(r){return r.charAt(0).toUpperCase()+r.slice(1)}var d3=r=>typeof r<"u",O5=r=>typeof r=="function",F6=(r,e)=>{if(r.size!==e.size)return!1;for(let t of r)if(!e.has(t))return!1;return!0};function Zt(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var F1=Math.PI,X1=2*F1,BC=X1+F1,b4=Number.POSITIVE_INFINITY,zC=F1/180,e2=F1/2,y0=F1/4,wt=F1*2/3,$5=Math.log10,s5=Math.sign;function p3(r,e,t){return Math.abs(r-e)<t}function P6(r){let e=Math.round(r);r=p3(r,e,r/1e3)?e:r;let t=Math.pow(10,Math.floor($5(r))),i=r/t;return(i<=1?1:i<=2?2:i<=5?5:10)*t}function kt(r){let e=[],t=Math.sqrt(r),i;for(i=1;i<t;i++)r%i===0&&(e.push(i),e.push(r/i));return t===(t|0)&&e.push(t),e.sort((o,a)=>o-a).pop(),e}function np(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function u3(r){return!np(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function Ot(r,e){let t=Math.round(r);return t-e<=r&&t+e>=r}function D6(r,e,t){let i,o,a;for(i=0,o=r.length;i<o;i++)a=r[i][t],isNaN(a)||(e.min=Math.min(e.min,a),e.max=Math.max(e.max,a))}function T5(r){return r*(F1/180)}function Z4(r){return r*(180/F1)}function R6(r){if(!Y1(r))return;let e=1,t=0;for(;Math.round(r*e)/e!==r;)e*=10,t++;return t}function B6(r,e){let t=e.x-r.x,i=e.y-r.y,o=Math.sqrt(t*t+i*i),a=Math.atan2(i,t);return a<-.5*F1&&(a+=X1),{angle:a,distance:o}}function y4(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function NC(r,e){return(r-e+BC)%X1-F1}function l2(r){return(r%X1+X1)%X1}function k4(r,e,t,i){let o=l2(r),a=l2(e),C=l2(t),n=l2(a-o),s=l2(C-o),H=l2(o-a),V=l2(o-C);return o===a||o===C||i&&a===C||n>s&&H<V}function c2(r,e,t){return Math.max(e,Math.min(t,r))}function $t(r){return c2(r,-32768,32767)}function h5(r,e,t,i=1e-6){return r>=Math.min(e,t)-i&&r<=Math.max(e,t)+i}function O4(r,e,t){t=t||(C=>r[C]<e);let i=r.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,t(a)?o=a:i=a;return{lo:o,hi:i}}var J5=(r,e,t,i)=>O4(r,t,i?o=>{let a=r[o][e];return a<t||a===t&&r[o+1][e]===t}:o=>r[o][e]<t),Tt=(r,e,t)=>O4(r,t,i=>r[i][e]>=t);function Et(r,e,t){let i=0,o=r.length;for(;i<o&&r[i]<e;)i++;for(;o>i&&r[o-1]>t;)o--;return i>0||o<r.length?r.slice(i,o):r}var IC=["push","pop","shift","splice","unshift"];function Ft(r,e){if(r._chartjs){r._chartjs.listeners.push(e);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),IC.forEach(t=>{let i="_onData"+S4(t),o=r[t];Object.defineProperty(r,t,{configurable:!0,enumerable:!1,value(...a){let C=o.apply(this,a);return r._chartjs.listeners.forEach(n=>{typeof n[i]=="function"&&n[i](...a)}),C}})})}function z6(r,e){let t=r._chartjs;if(!t)return;let i=t.listeners,o=i.indexOf(e);o!==-1&&i.splice(o,1),!(i.length>0)&&(IC.forEach(a=>{delete r[a]}),delete r._chartjs)}function N6(r){let e=new Set(r);return e.size===r.length?r:Array.from(e)}var I6=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function W6(r,e){let t=[],i=!1;return function(...o){t=o,i||(i=!0,I6.call(window,()=>{i=!1,r.apply(e,t)}))}}function Pt(r,e){let t;return function(...i){return e?(clearTimeout(t),t=setTimeout(r,e,i)):r.apply(this,i),e}}var U6=r=>r==="start"?"left":r==="end"?"right":"center",$2=(r,e,t)=>r==="start"?e:r==="end"?t:(e+t)/2,Dt=(r,e,t,i)=>r===(i?"left":"right")?t:r==="center"?(e+t)/2:e;function Rt(r,e,t){let i=e.length,o=0,a=i;if(r._sorted){let{iScale:C,vScale:n,_parsed:s}=r,H=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,V=C.axis,{min:L,max:d,minDefined:u,maxDefined:f}=C.getUserBounds();if(u){if(o=Math.min(J5(s,V,L).lo,t?i:J5(e,V,C.getPixelForValue(L)).lo),H){let v=s.slice(0,o+1).reverse().findIndex(x=>!p1(x[n.axis]));o-=Math.max(0,v)}o=c2(o,0,i-1)}if(f){let v=Math.max(J5(s,C.axis,d,!0).hi+1,t?0:J5(e,V,C.getPixelForValue(d),!0).hi+1);if(H){let x=s.slice(v-1).findIndex(w=>!p1(w[n.axis]));v+=Math.max(0,x)}a=c2(v,o,i)-o}else a=i-o}return{start:o,count:a}}function Bt(r){let{xScale:e,yScale:t,_scaleRanges:i}=r,o={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!i)return r._scaleRanges=o,!0;let a=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==t.min||i.ymax!==t.max;return Object.assign(i,o),a}var k6=r=>r===0||r===1,yC=(r,e,t)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-e)*X1/t)),SC=(r,e,t)=>Math.pow(2,-10*r)*Math.sin((r-e)*X1/t)+1,l3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*e2)+1,easeOutSine:r=>Math.sin(r*e2),easeInOutSine:r=>-.5*(Math.cos(F1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>k6(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>k6(r)?r:yC(r,.075,.3),easeOutElastic:r=>k6(r)?r:SC(r,.075,.3),easeInOutElastic(r){return k6(r)?r:r<.5?.5*yC(r*2,.1125,.45):.5+.5*SC(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let e=1.70158;return(r/=.5)<1?.5*(r*r*(((e*=1.525)+1)*r-e)):.5*((r-=2)*r*(((e*=1.525)+1)*r+e)+2)},easeInBounce:r=>1-l3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?l3.easeInBounce(r*2)*.5:l3.easeOutBounce(r*2-1)*.5+.5};function j6(r){if(r&&typeof r=="object"){let e=r.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function G6(r){return j6(r)?r:new x4(r)}function T6(r){return j6(r)?r:new x4(r).saturate(.5).darken(.1).hexString()}var sp=["x","y","borderWidth","radius","tension"],Hp=["color","borderColor","backgroundColor"];function Vp(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),r.set("animations",{colors:{type:"color",properties:Hp},numbers:{type:"number",properties:sp}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function Lp(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var ZC=new Map;function lp(r,e){e=e||{};let t=r+JSON.stringify(e),i=ZC.get(t);return i||(i=new Intl.NumberFormat(r,e),ZC.set(t,i)),i}function $4(r,e,t){return lp(e,t).format(r)}var WC={values(r){return I1(r)?r:""+r},numeric(r,e,t){if(r===0)return"0";let i=this.chart.options.locale,o,a=r;if(t.length>1){let H=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(H<1e-4||H>1e15)&&(o="scientific"),a=cp(r,t)}let C=$5(Math.abs(a)),n=isNaN(C)?1:Math.max(Math.min(-1*Math.floor(C),20),0),s={notation:o,minimumFractionDigits:n,maximumFractionDigits:n};return Object.assign(s,this.options.ticks.format),$4(r,i,s)},logarithmic(r,e,t){if(r===0)return"0";let i=t[e].significand||r/Math.pow(10,Math.floor($5(r)));return[1,2,3,5,10,15].includes(i)||e>.8*t.length?WC.numeric.call(this,r,e,t):""}};function cp(r,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&r!==Math.floor(r)&&(t=r-Math.floor(r)),t}var T4={formatters:WC};function Mp(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:T4.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}var O0=Object.create(null),q6=Object.create(null);function _4(r,e){if(!e)return r;let t=e.split(".");for(let i=0,o=t.length;i<o;++i){let a=t[i];r=r[a]||(r[a]=Object.create(null))}return r}function _t(r,e,t){return typeof e=="string"?q2(_4(r,e),t):q2(_4(r,""),e)}var bt=class{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>T6(o.backgroundColor),this.hoverBorderColor=(i,o)=>T6(o.borderColor),this.hoverColor=(i,o)=>T6(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return _t(this,e,t)}get(e){return _4(this,e)}describe(e,t){return _t(q6,e,t)}override(e,t){return _t(O0,e,t)}route(e,t,i,o){let a=_4(this,e),C=_4(this,i),n="_"+t;Object.defineProperties(a,{[n]:{value:a[t],writable:!0},[t]:{enumerable:!0,get(){let s=this[n],H=C[o];return m1(s)?Object.assign({},H,s):L1(s,H)},set(s){this[n]=s}}})}apply(e){e.forEach(t=>t(this))}},G1=new bt({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Vp,Lp,Mp]);function UC(r){return!r||p1(r.size)||p1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function m7(r,e,t,i,o){let a=e[o];return a||(a=e[o]=r.measureText(o).width,t.push(o)),a>i&&(i=a),i}function zt(r,e,t,i){i=i||{};let o=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(o=i.data={},a=i.garbageCollect=[],i.font=e),r.save(),r.font=e;let C=0,n=t.length,s,H,V,L,d;for(s=0;s<n;s++)if(L=t[s],L!=null&&!I1(L))C=m7(r,o,a,C,L);else if(I1(L))for(H=0,V=L.length;H<V;H++)d=L[H],d!=null&&!I1(d)&&(C=m7(r,o,a,C,d));r.restore();let u=a.length/2;if(u>t.length){for(s=0;s<u;s++)delete o[a[s]];a.splice(0,u)}return C}function e0(r,e,t){let i=r.currentDevicePixelRatio,o=t!==0?Math.max(t/2,.5):0;return Math.round((e-o)*i)/i+o}function Q6(r,e){!e&&!r||(e=e||r.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,r.width,r.height),e.restore())}function E4(r,e,t,i){Y6(r,e,t,i,null)}function Y6(r,e,t,i,o){let a,C,n,s,H,V,L,d,u=e.pointStyle,f=e.rotation,v=e.radius,x=(f||0)*zC;if(u&&typeof u=="object"&&(a=u.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(t,i),r.rotate(x),r.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),r.restore();return}if(!(isNaN(v)||v<=0)){switch(r.beginPath(),u){default:o?r.ellipse(t,i,o/2,v,0,0,X1):r.arc(t,i,v,0,X1),r.closePath();break;case"triangle":V=o?o/2:v,r.moveTo(t+Math.sin(x)*V,i-Math.cos(x)*v),x+=wt,r.lineTo(t+Math.sin(x)*V,i-Math.cos(x)*v),x+=wt,r.lineTo(t+Math.sin(x)*V,i-Math.cos(x)*v),r.closePath();break;case"rectRounded":H=v*.516,s=v-H,C=Math.cos(x+y0)*s,L=Math.cos(x+y0)*(o?o/2-H:s),n=Math.sin(x+y0)*s,d=Math.sin(x+y0)*(o?o/2-H:s),r.arc(t-L,i-n,H,x-F1,x-e2),r.arc(t+d,i-C,H,x-e2,x),r.arc(t+L,i+n,H,x,x+e2),r.arc(t-d,i+C,H,x+e2,x+F1),r.closePath();break;case"rect":if(!f){s=Math.SQRT1_2*v,V=o?o/2:s,r.rect(t-V,i-s,2*V,2*s);break}x+=y0;case"rectRot":L=Math.cos(x)*(o?o/2:v),C=Math.cos(x)*v,n=Math.sin(x)*v,d=Math.sin(x)*(o?o/2:v),r.moveTo(t-L,i-n),r.lineTo(t+d,i-C),r.lineTo(t+L,i+n),r.lineTo(t-d,i+C),r.closePath();break;case"crossRot":x+=y0;case"cross":L=Math.cos(x)*(o?o/2:v),C=Math.cos(x)*v,n=Math.sin(x)*v,d=Math.sin(x)*(o?o/2:v),r.moveTo(t-L,i-n),r.lineTo(t+L,i+n),r.moveTo(t+d,i-C),r.lineTo(t-d,i+C);break;case"star":L=Math.cos(x)*(o?o/2:v),C=Math.cos(x)*v,n=Math.sin(x)*v,d=Math.sin(x)*(o?o/2:v),r.moveTo(t-L,i-n),r.lineTo(t+L,i+n),r.moveTo(t+d,i-C),r.lineTo(t-d,i+C),x+=y0,L=Math.cos(x)*(o?o/2:v),C=Math.cos(x)*v,n=Math.sin(x)*v,d=Math.sin(x)*(o?o/2:v),r.moveTo(t-L,i-n),r.lineTo(t+L,i+n),r.moveTo(t+d,i-C),r.lineTo(t-d,i+C);break;case"line":C=o?o/2:Math.cos(x)*v,n=Math.sin(x)*v,r.moveTo(t-C,i-n),r.lineTo(t+C,i+n);break;case"dash":r.moveTo(t,i),r.lineTo(t+Math.cos(x)*(o?o/2:v),i+Math.sin(x)*v);break;case!1:r.closePath();break}r.fill(),e.borderWidth>0&&r.stroke()}}function u5(r,e,t){return t=t||.5,!e||r&&r.x>e.left-t&&r.x<e.right+t&&r.y>e.top-t&&r.y<e.bottom+t}function A7(r,e){r.save(),r.beginPath(),r.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),r.clip()}function v7(r){r.restore()}function Nt(r,e,t,i,o){if(!e)return r.lineTo(t.x,t.y);if(o==="middle"){let a=(e.x+t.x)/2;r.lineTo(a,e.y),r.lineTo(a,t.y)}else o==="after"!=!!i?r.lineTo(e.x,t.y):r.lineTo(t.x,e.y);r.lineTo(t.x,t.y)}function It(r,e,t,i){if(!e)return r.lineTo(t.x,t.y);r.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?t.cp2x:t.cp1x,i?t.cp2y:t.cp1y,t.x,t.y)}function dp(r,e){e.translation&&r.translate(e.translation[0],e.translation[1]),p1(e.rotation)||r.rotate(e.rotation),e.color&&(r.fillStyle=e.color),e.textAlign&&(r.textAlign=e.textAlign),e.textBaseline&&(r.textBaseline=e.textBaseline)}function pp(r,e,t,i,o){if(o.strikethrough||o.underline){let a=r.measureText(i),C=e-a.actualBoundingBoxLeft,n=e+a.actualBoundingBoxRight,s=t-a.actualBoundingBoxAscent,H=t+a.actualBoundingBoxDescent,V=o.strikethrough?(s+H)/2:H;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=o.decorationWidth||2,r.moveTo(C,V),r.lineTo(n,V),r.stroke()}}function up(r,e){let t=r.fillStyle;r.fillStyle=e.color,r.fillRect(e.left,e.top,e.width,e.height),r.fillStyle=t}function $0(r,e,t,i,o,a={}){let C=I1(e)?e:[e],n=a.strokeWidth>0&&a.strokeColor!=="",s,H;for(r.save(),r.font=o.string,dp(r,a),s=0;s<C.length;++s)H=C[s],a.backdrop&&up(r,a.backdrop),n&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),p1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(H,t,i,a.maxWidth)),r.fillText(H,t,i,a.maxWidth),pp(r,t,i,H,a),i+=Number(o.lineHeight);r.restore()}function m3(r,e){let{x:t,y:i,w:o,h:a,radius:C}=e;r.arc(t+C.topLeft,i+C.topLeft,C.topLeft,1.5*F1,F1,!0),r.lineTo(t,i+a-C.bottomLeft),r.arc(t+C.bottomLeft,i+a-C.bottomLeft,C.bottomLeft,F1,e2,!0),r.lineTo(t+o-C.bottomRight,i+a),r.arc(t+o-C.bottomRight,i+a-C.bottomRight,C.bottomRight,e2,0,!0),r.lineTo(t+o,i+C.topRight),r.arc(t+o-C.topRight,i+C.topRight,C.topRight,0,-e2,!0),r.lineTo(t+C.topLeft,i)}var mp=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,hp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function jC(r,e){let t=(""+r).match(mp);if(!t||t[1]==="normal")return e*1.2;switch(r=+t[2],t[3]){case"px":return r;case"%":r/=100;break}return e*r}var fp=r=>+r||0;function F4(r,e){let t={},i=m1(e),o=i?Object.keys(e):e,a=m1(r)?i?C=>L1(r[C],r[e[C]]):C=>r[C]:()=>r;for(let C of o)t[C]=fp(a(C));return t}function K6(r){return F4(r,{top:"y",right:"x",bottom:"y",left:"x"})}function t0(r){return F4(r,["topLeft","topRight","bottomLeft","bottomRight"])}function n2(r){let e=K6(r);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function t2(r,e){r=r||{},e=e||G1.font;let t=L1(r.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let i=L1(r.style,e.style);i&&!(""+i).match(hp)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let o={family:L1(r.family,e.family),lineHeight:jC(L1(r.lineHeight,e.lineHeight),t),size:t,style:i,weight:L1(r.weight,e.weight),string:""};return o.string=UC(o),o}function N1(r,e,t,i){let o=!0,a,C,n;for(a=0,C=r.length;a<C;++a)if(n=r[a],n!==void 0&&(e!==void 0&&typeof n=="function"&&(n=n(e),o=!1),t!==void 0&&I1(n)&&(n=n[t%n.length],o=!1),n!==void 0))return i&&!o&&(i.cacheable=!1),n}function Wt(r,e,t){let{min:i,max:o}=r,a=St(e,(o-i)/2),C=(n,s)=>t&&n===0?0:n+s;return{min:C(i,-Math.abs(a)),max:C(o,a)}}function E5(r,e){return Object.assign(Object.create(r),e)}function P4(r,e=[""],t,i,o=()=>r[0]){let a=t||r;typeof i>"u"&&(i=QC("_fallback",r));let C={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:o,override:n=>P4([n,...r],e,a,i)};return new Proxy(C,{deleteProperty(n,s){return delete n[s],delete n._keys,delete r[0][s],!0},get(n,s){return GC(n,s,()=>yp(s,e,r,n))},getOwnPropertyDescriptor(n,s){return Reflect.getOwnPropertyDescriptor(n._scopes[0],s)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(n,s){return OC(n).includes(s)},ownKeys(n){return OC(n)},set(n,s,H){let V=n._storage||(n._storage=o());return n[s]=V[s]=H,delete n._keys,!0}})}function Z0(r,e,t,i){let o={_cacheable:!1,_proxy:r,_context:e,_subProxy:t,_stack:new Set,_descriptors:X6(r,i),setContext:a=>Z0(r,a,t,i),override:a=>Z0(r.override(a),e,t,i)};return new Proxy(o,{deleteProperty(a,C){return delete a[C],delete r[C],!0},get(a,C,n){return GC(a,C,()=>vp(a,C,n))},getOwnPropertyDescriptor(a,C){return a._descriptors.allKeys?Reflect.has(r,C)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,C)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,C){return Reflect.has(r,C)},ownKeys(){return Reflect.ownKeys(r)},set(a,C,n){return r[C]=n,delete a[C],!0}})}function X6(r,e={scriptable:!0,indexable:!0}){let{_scriptable:t=e.scriptable,_indexable:i=e.indexable,_allKeys:o=e.allKeys}=r;return{allKeys:o,scriptable:t,indexable:i,isScriptable:O5(t)?t:()=>t,isIndexable:O5(i)?i:()=>i}}var Ap=(r,e)=>r?r+S4(e):e,Ut=(r,e)=>m1(e)&&r!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function GC(r,e,t){if(Object.prototype.hasOwnProperty.call(r,e)||e==="constructor")return r[e];let i=t();return r[e]=i,i}function vp(r,e,t){let{_proxy:i,_context:o,_subProxy:a,_descriptors:C}=r,n=i[e];return O5(n)&&C.isScriptable(e)&&(n=xp(e,n,r,t)),I1(n)&&n.length&&(n=gp(e,n,r,C.isIndexable)),Ut(e,n)&&(n=Z0(n,o,a&&a[e],C)),n}function xp(r,e,t,i){let{_proxy:o,_context:a,_subProxy:C,_stack:n}=t;if(n.has(r))throw new Error("Recursion detected: "+Array.from(n).join("->")+"->"+r);n.add(r);let s=e(a,C||i);return n.delete(r),Ut(r,s)&&(s=jt(o._scopes,o,r,s)),s}function gp(r,e,t,i){let{_proxy:o,_context:a,_subProxy:C,_descriptors:n}=t;if(typeof a.index<"u"&&i(r))return e[a.index%e.length];if(m1(e[0])){let s=e,H=o._scopes.filter(V=>V!==s);e=[];for(let V of s){let L=jt(H,o,r,V);e.push(Z0(L,a,C&&C[r],n))}}return e}function qC(r,e,t){return O5(r)?r(e,t):r}var _p=(r,e)=>r===!0?e:typeof r=="string"?k0(e,r):void 0;function wp(r,e,t,i,o){for(let a of e){let C=_p(t,a);if(C){r.add(C);let n=qC(C._fallback,t,o);if(typeof n<"u"&&n!==t&&n!==i)return n}else if(C===!1&&typeof i<"u"&&t!==i)return null}return!1}function jt(r,e,t,i){let o=e._rootScopes,a=qC(e._fallback,t,i),C=[...r,...o],n=new Set;n.add(i);let s=kC(n,C,t,a||t,i);return s===null||typeof a<"u"&&a!==t&&(s=kC(n,C,a,s,i),s===null)?!1:P4(Array.from(n),[""],o,a,()=>bp(e,t,i))}function kC(r,e,t,i,o){for(;t;)t=wp(r,e,t,i,o);return t}function bp(r,e,t){let i=r._getTarget();e in i||(i[e]={});let o=i[e];return I1(o)&&m1(t)?t:o||{}}function yp(r,e,t,i){let o;for(let a of e)if(o=QC(Ap(a,r),t),typeof o<"u")return Ut(r,o)?jt(t,i,r,o):o}function QC(r,e){for(let t of e){if(!t)continue;let i=t[r];if(typeof i<"u")return i}}function OC(r){let e=r._keys;return e||(e=r._keys=Sp(r._scopes)),e}function Sp(r){let e=new Set;for(let t of r)for(let i of Object.keys(t).filter(o=>!o.startsWith("_")))e.add(i);return Array.from(e)}var Zp=Number.EPSILON||1e-14,h7=(r,e)=>e<r.length&&!r[e].skip&&r[e],YC=r=>r==="x"?"y":"x";function KC(r,e,t,i){let o=r.skip?e:r,a=e,C=t.skip?e:t,n=y4(a,o),s=y4(C,a),H=n/(n+s),V=s/(n+s);H=isNaN(H)?0:H,V=isNaN(V)?0:V;let L=i*H,d=i*V;return{previous:{x:a.x-L*(C.x-o.x),y:a.y-L*(C.y-o.y)},next:{x:a.x+d*(C.x-o.x),y:a.y+d*(C.y-o.y)}}}function kp(r,e,t){let i=r.length,o,a,C,n,s,H=h7(r,0);for(let V=0;V<i-1;++V)if(s=H,H=h7(r,V+1),!(!s||!H)){if(p3(e[V],0,Zp)){t[V]=t[V+1]=0;continue}o=t[V]/e[V],a=t[V+1]/e[V],n=Math.pow(o,2)+Math.pow(a,2),!(n<=9)&&(C=3/Math.sqrt(n),t[V]=o*C*e[V],t[V+1]=a*C*e[V])}}function Op(r,e,t="x"){let i=YC(t),o=r.length,a,C,n,s=h7(r,0);for(let H=0;H<o;++H){if(C=n,n=s,s=h7(r,H+1),!n)continue;let V=n[t],L=n[i];C&&(a=(V-C[t])/3,n[`cp1${t}`]=V-a,n[`cp1${i}`]=L-a*e[H]),s&&(a=(s[t]-V)/3,n[`cp2${t}`]=V+a,n[`cp2${i}`]=L+a*e[H])}}function XC(r,e="x"){let t=YC(e),i=r.length,o=Array(i).fill(0),a=Array(i),C,n,s,H=h7(r,0);for(C=0;C<i;++C)if(n=s,s=H,H=h7(r,C+1),!!s){if(H){let V=H[e]-s[e];o[C]=V!==0?(H[t]-s[t])/V:0}a[C]=n?H?s5(o[C-1])!==s5(o[C])?0:(o[C-1]+o[C])/2:o[C-1]:o[C]}kp(r,o,a),Op(r,a,e)}function O6(r,e,t){return Math.max(Math.min(r,t),e)}function $p(r,e){let t,i,o,a,C,n=u5(r[0],e);for(t=0,i=r.length;t<i;++t)C=a,a=n,n=t<i-1&&u5(r[t+1],e),a&&(o=r[t],C&&(o.cp1x=O6(o.cp1x,e.left,e.right),o.cp1y=O6(o.cp1y,e.top,e.bottom)),n&&(o.cp2x=O6(o.cp2x,e.left,e.right),o.cp2y=O6(o.cp2y,e.top,e.bottom)))}function Gt(r,e,t,i,o){let a,C,n,s;if(e.spanGaps&&(r=r.filter(H=>!H.skip)),e.cubicInterpolationMode==="monotone")XC(r,o);else{let H=i?r[r.length-1]:r[0];for(a=0,C=r.length;a<C;++a)n=r[a],s=KC(H,n,r[Math.min(a+1,C-(i?0:1))%C],e.tension),n.cp1x=s.previous.x,n.cp1y=s.previous.y,n.cp2x=s.next.x,n.cp2y=s.next.y,H=n}e.capBezierPoints&&$p(r,t)}function D4(){return typeof window<"u"&&typeof document<"u"}function R4(r){let e=r.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function E6(r,e,t){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*e.parentNode[t])):i=r,i}var J6=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function JC(r,e){return J6(r).getPropertyValue(e)}var Tp=["top","right","bottom","left"];function c3(r,e,t){let i={};t=t?"-"+t:"";for(let o=0;o<4;o++){let a=Tp[o];i[a]=parseFloat(r[e+"-"+a+t])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var Ep=(r,e,t)=>(r>0||e>0)&&(!t||!t.shadowRoot);function Fp(r,e){let t=r.touches,i=t&&t.length?t[0]:r,{offsetX:o,offsetY:a}=i,C=!1,n,s;if(Ep(o,a,r.target))n=o,s=a;else{let H=e.getBoundingClientRect();n=i.clientX-H.left,s=i.clientY-H.top,C=!0}return{x:n,y:s,box:C}}function f5(r,e){if("native"in r)return r;let{canvas:t,currentDevicePixelRatio:i}=e,o=J6(t),a=o.boxSizing==="border-box",C=c3(o,"padding"),n=c3(o,"border","width"),{x:s,y:H,box:V}=Fp(r,t),L=C.left+(V&&n.left),d=C.top+(V&&n.top),{width:u,height:f}=e;return a&&(u-=C.width+n.width,f-=C.height+n.height),{x:Math.round((s-L)/u*t.width/i),y:Math.round((H-d)/f*t.height/i)}}function Pp(r,e,t){let i,o;if(e===void 0||t===void 0){let a=r&&R4(r);if(!a)e=r.clientWidth,t=r.clientHeight;else{let C=a.getBoundingClientRect(),n=J6(a),s=c3(n,"border","width"),H=c3(n,"padding");e=C.width-H.width-s.width,t=C.height-H.height-s.height,i=E6(n.maxWidth,a,"clientWidth"),o=E6(n.maxHeight,a,"clientHeight")}}return{width:e,height:t,maxWidth:i||b4,maxHeight:o||b4}}var S0=r=>Math.round(r*10)/10;function qt(r,e,t,i){let o=J6(r),a=c3(o,"margin"),C=E6(o.maxWidth,r,"clientWidth")||b4,n=E6(o.maxHeight,r,"clientHeight")||b4,s=Pp(r,e,t),{width:H,height:V}=s;if(o.boxSizing==="content-box"){let d=c3(o,"border","width"),u=c3(o,"padding");H-=u.width+d.width,V-=u.height+d.height}return H=Math.max(0,H-a.width),V=Math.max(0,i?H/i:V-a.height),H=S0(Math.min(H,C,s.maxWidth)),V=S0(Math.min(V,n,s.maxHeight)),H&&!V&&(V=S0(H/2)),(e!==void 0||t!==void 0)&&i&&s.height&&V>s.height&&(V=s.height,H=S0(Math.floor(V*i))),{width:H,height:V}}function e8(r,e,t){let i=e||1,o=S0(r.height*i),a=S0(r.width*i);r.height=S0(r.height),r.width=S0(r.width);let C=r.canvas;return C.style&&(t||!C.style.height&&!C.style.width)&&(C.style.height=`${r.height}px`,C.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||C.height!==o||C.width!==a?(r.currentDevicePixelRatio=i,C.height=o,C.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var Qt=(function(){let r=!1;try{let e={get passive(){return r=!0,!1}};D4()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return r})();function t8(r,e){let t=JC(r,e),i=t&&t.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function X5(r,e,t,i){return{x:r.x+t*(e.x-r.x),y:r.y+t*(e.y-r.y)}}function Yt(r,e,t,i){return{x:r.x+t*(e.x-r.x),y:i==="middle"?t<.5?r.y:e.y:i==="after"?t<1?r.y:e.y:t>0?e.y:r.y}}function Kt(r,e,t,i){let o={x:r.cp2x,y:r.cp2y},a={x:e.cp1x,y:e.cp1y},C=X5(r,o,t),n=X5(o,a,t),s=X5(a,e,t),H=X5(C,n,t),V=X5(n,s,t);return X5(H,V,t)}var Dp=function(r,e){return{x(t){return r+r+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,i){return t-i},leftForLtr(t,i){return t-i}}},Rp=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,e){return r+e},leftForLtr(r,e){return r}}};function T0(r,e,t){return r?Dp(e,t):Rp()}function r8(r,e){let t,i;(e==="ltr"||e==="rtl")&&(t=r.canvas.style,i=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),r.prevTextDirection=i)}function i8(r,e){e!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",e[0],e[1]))}function en(r){return r==="angle"?{between:k4,compare:NC,normalize:l2}:{between:h5,compare:(e,t)=>e-t,normalize:e=>e}}function $C({start:r,end:e,count:t,loop:i,style:o}){return{start:r%t,end:e%t,loop:i&&(e-r+1)%t===0,style:o}}function Bp(r,e,t){let{property:i,start:o,end:a}=t,{between:C,normalize:n}=en(i),s=e.length,{start:H,end:V,loop:L}=r,d,u;if(L){for(H+=s,V+=s,d=0,u=s;d<u&&C(n(e[H%s][i]),o,a);++d)H--,V--;H%=s,V%=s}return V<H&&(V+=s),{start:H,end:V,loop:L,style:r.style}}function o8(r,e,t){if(!t)return[r];let{property:i,start:o,end:a}=t,C=e.length,{compare:n,between:s,normalize:H}=en(i),{start:V,end:L,loop:d,style:u}=Bp(r,e,t),f=[],v=!1,x=null,w,y,b,E=()=>s(o,b,w)&&n(o,b)!==0,F=()=>n(a,w)===0||s(a,b,w),$=()=>v||E(),D=()=>!v||F();for(let k=V,P=V;k<=L;++k)y=e[k%C],!y.skip&&(w=H(y[i]),w!==b&&(v=s(w,o,a),x===null&&$()&&(x=n(w,o)===0?k:P),x!==null&&D()&&(f.push($C({start:x,end:k,loop:d,count:C,style:u})),x=null),P=k,b=w));return x!==null&&f.push($C({start:x,end:L,loop:d,count:C,style:u})),f}function a8(r,e){let t=[],i=r.segments;for(let o=0;o<i.length;o++){let a=o8(i[o],r.points,e);a.length&&t.push(...a)}return t}function zp(r,e,t,i){let o=0,a=e-1;if(t&&!i)for(;o<e&&!r[o].skip;)o++;for(;o<e&&r[o].skip;)o++;for(o%=e,t&&(a+=o);a>o&&r[a%e].skip;)a--;return a%=e,{start:o,end:a}}function Np(r,e,t,i){let o=r.length,a=[],C=e,n=r[e],s;for(s=e+1;s<=t;++s){let H=r[s%o];H.skip||H.stop?n.skip||(i=!1,a.push({start:e%o,end:(s-1)%o,loop:i}),e=C=H.stop?s:null):(C=s,n.skip&&(e=s)),n=H}return C!==null&&a.push({start:e%o,end:C%o,loop:i}),a}function Xt(r,e){let t=r.points,i=r.options.spanGaps,o=t.length;if(!o)return[];let a=!!r._loop,{start:C,end:n}=zp(t,o,a,i);if(i===!0)return TC(r,[{start:C,end:n,loop:a}],t,e);let s=n<C?n+o:n,H=!!r._fullLoop&&C===0&&n===o-1;return TC(r,Np(t,C,s,H),t,e)}function TC(r,e,t,i){return!i||!i.setContext||!t?e:Ip(r,e,t,i)}function Ip(r,e,t,i){let o=r._chart.getContext(),a=EC(r.options),{_datasetIndex:C,options:{spanGaps:n}}=r,s=t.length,H=[],V=a,L=e[0].start,d=L;function u(f,v,x,w){let y=n?-1:1;if(f!==v){for(f+=s;t[f%s].skip;)f-=y;for(;t[v%s].skip;)v+=y;f%s!==v%s&&(H.push({start:f%s,end:v%s,loop:x,style:w}),V=w,L=v%s)}}for(let f of e){L=n?L:f.start;let v=t[L%s],x;for(d=L+1;d<=f.end;d++){let w=t[d%s];x=EC(i.setContext(E5(o,{type:"segment",p0:v,p1:w,p0DataIndex:(d-1)%s,p1DataIndex:d%s,datasetIndex:C}))),Wp(x,V)&&u(L,d-1,f.loop,V),v=w,V=x}L<d-1&&u(L,d-1,f.loop,V)}return H}function EC(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function Wp(r,e){if(!e)return!1;let t=[],i=function(o,a){return j6(a)?(t.includes(a)||t.push(a),t.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(e,i)}function $6(r,e,t){return r.options.clip?r[t]:e[t]}function Up(r,e){let{xScale:t,yScale:i}=r;return t&&i?{left:$6(t,e,"left"),right:$6(t,e,"right"),top:$6(i,e,"top"),bottom:$6(i,e,"bottom")}:e}function C8(r,e){let t=e._clip;if(t.disabled)return!1;let i=Up(e,r.chartArea);return{left:t.left===!1?0:i.left-(t.left===!0?0:t.left),right:t.right===!1?r.width:i.right+(t.right===!0?0:t.right),top:t.top===!1?0:i.top-(t.top===!0?0:t.top),bottom:t.bottom===!1?r.height:i.bottom+(t.bottom===!0?0:t.bottom)}}var Vr=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,i,o){let a=t.listeners[o],C=t.duration;a.forEach(n=>n({chart:e,initial:t.initial,numSteps:C,currentStep:Math.min(i-t.start,C)}))}_refresh(){this._request||(this._running=!0,this._request=I6.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;let a=i.items,C=a.length-1,n=!1,s;for(;C>=0;--C)s=a[C],s._active?(s._total>i.duration&&(i.duration=s._total),s.tick(e),n=!0):(a[C]=a[a.length-1],a.pop());n&&(o.draw(),this._notify(o,i,e,"progress")),a.length||(i.running=!1,this._notify(o,i,e,"complete"),i.initial=!1),t+=a.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,i=t.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,i)),i}listen(e,t,i){this._getAnims(e).listeners[t].push(i)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let i=t.items,o=i.length-1;for(;o>=0;--o)i[o].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}},r0=new Vr,tn="transparent",qp={boolean(r,e,t){return t>.5?e:r},color(r,e,t){let i=G6(r||tn),o=i.valid&&G6(e||tn);return o&&o.valid?o.mix(i,t).hexString():e},number(r,e,t){return r+(e-r)*t}},Lr=class{constructor(e,t,i,o){let a=t[i];o=N1([e.to,o,a,e.from]);let C=N1([e.from,a,o]);this._active=!0,this._fn=e.fn||qp[e.type||typeof C],this._easing=l3[e.easing]||l3.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=i,this._from=C,this._to=o,this._promises=void 0}active(){return this._active}update(e,t,i){if(this._active){this._notify(!1);let o=this._target[this._prop],a=i-this._start,C=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(C,e.duration)),this._total+=a,this._loop=!!e.loop,this._to=N1([e.to,t,o,e.from]),this._from=N1([e.from,o,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,i=this._duration,o=this._prop,a=this._from,C=this._loop,n=this._to,s;if(this._active=a!==n&&(C||t<i),!this._active){this._target[o]=n,this._notify(!0);return}if(t<0){this._target[o]=a;return}s=t/i%2,s=C&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[o]=this._fn(a,n,s)}wait(){let e=this._promises||(this._promises=[]);return new Promise((t,i)=>{e.push({res:t,rej:i})})}_notify(e){let t=e?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][t]()}},p8=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!m1(e))return;let t=Object.keys(G1.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{let a=e[o];if(!m1(a))return;let C={};for(let n of t)C[n]=a[n];(I1(a.properties)&&a.properties||[o]).forEach(n=>{(n===o||!i.has(n))&&i.set(n,C)})})}_animateOptions(e,t){let i=t.options,o=Yp(e,i);if(!o)return[];let a=this._createAnimations(o,i);return i.$shared&&Qp(e.options.$animations,i).then(()=>{e.options=i},()=>{}),a}_createAnimations(e,t){let i=this._properties,o=[],a=e.$animations||(e.$animations={}),C=Object.keys(t),n=Date.now(),s;for(s=C.length-1;s>=0;--s){let H=C[s];if(H.charAt(0)==="$")continue;if(H==="options"){o.push(...this._animateOptions(e,t));continue}let V=t[H],L=a[H],d=i.get(H);if(L)if(d&&L.active()){L.update(d,V,n);continue}else L.cancel();if(!d||!d.duration){e[H]=V;continue}a[H]=L=new Lr(d,e,H,V),o.push(L)}return o}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let i=this._createAnimations(e,t);if(i.length)return r0.add(this._chart,i),!0}};function Qp(r,e){let t=[],i=Object.keys(e);for(let o=0;o<i.length;o++){let a=r[i[o]];a&&a.active()&&t.push(a.wait())}return Promise.all(t)}function Yp(r,e){if(!e)return;let t=r.options;if(!t){r.options=e;return}return t.$shared&&(r.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function rn(r,e){let t=r&&r.options||{},i=t.reverse,o=t.min===void 0?e:0,a=t.max===void 0?e:0;return{start:i?a:o,end:i?o:a}}function Kp(r,e,t){if(t===!1)return!1;let i=rn(r,t),o=rn(e,t);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function Xp(r){let e,t,i,o;return m1(r)?(e=r.top,t=r.right,i=r.bottom,o=r.left):e=t=i=o=r,{top:e,right:t,bottom:i,left:o,disabled:r===!1}}function Xn(r,e){let t=[],i=r._getSortedDatasetMetas(e),o,a;for(o=0,a=i.length;o<a;++o)t.push(i[o].index);return t}function on(r,e,t,i={}){let o=r.keys,a=i.mode==="single",C,n,s,H;if(e===null)return;let V=!1;for(C=0,n=o.length;C<n;++C){if(s=+o[C],s===t){if(V=!0,i.all)continue;break}H=r.values[s],Y1(H)&&(a||e===0||s5(e)===s5(H))&&(e+=H)}return!V&&!i.all?0:e}function Jp(r,e){let{iScale:t,vScale:i}=e,o=t.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",C=Object.keys(r),n=new Array(C.length),s,H,V;for(s=0,H=C.length;s<H;++s)V=C[s],n[s]={[o]:V,[a]:r[V]};return n}function Jt(r,e){let t=r&&r.options.stacked;return t||t===void 0&&e.stack!==void 0}function eu(r,e,t){return`${r.id}.${e.id}.${t.stack||t.type}`}function tu(r){let{min:e,max:t,minDefined:i,maxDefined:o}=r.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:o?t:Number.POSITIVE_INFINITY}}function ru(r,e,t){let i=r[e]||(r[e]={});return i[t]||(i[t]={})}function an(r,e,t,i){for(let o of e.getMatchingVisibleMetas(i).reverse()){let a=r[o.index];if(t&&a>0||!t&&a<0)return o.index}return null}function Cn(r,e){let{chart:t,_cachedMeta:i}=r,o=t._stacks||(t._stacks={}),{iScale:a,vScale:C,index:n}=i,s=a.axis,H=C.axis,V=eu(a,C,i),L=e.length,d;for(let u=0;u<L;++u){let f=e[u],{[s]:v,[H]:x}=f,w=f._stacks||(f._stacks={});d=w[H]=ru(o,V,v),d[n]=x,d._top=an(d,C,!0,i.type),d._bottom=an(d,C,!1,i.type);let y=d._visualValues||(d._visualValues={});y[n]=x}}function er(r,e){let t=r.scales;return Object.keys(t).filter(i=>t[i].axis===e).shift()}function iu(r,e){return E5(r,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function ou(r,e,t){return E5(r,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function B4(r,e){let t=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){e=e||r._parsed;for(let o of e){let a=o._stacks;if(!a||a[i]===void 0||a[i][t]===void 0)return;delete a[i][t],a[i]._visualValues!==void 0&&a[i]._visualValues[t]!==void 0&&delete a[i]._visualValues[t]}}}var tr=r=>r==="reset"||r==="none",nn=(r,e)=>e?r:Object.assign({},r),au=(r,e,t)=>r&&!e.hidden&&e._stacked&&{keys:Xn(t,!0),values:null},F0=class{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Jt(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&B4(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,i=this.getDataset(),o=(L,d,u,f)=>L==="x"?d:L==="r"?f:u,a=t.xAxisID=L1(i.xAxisID,er(e,"x")),C=t.yAxisID=L1(i.yAxisID,er(e,"y")),n=t.rAxisID=L1(i.rAxisID,er(e,"r")),s=t.indexAxis,H=t.iAxisID=o(s,a,C,n),V=t.vAxisID=o(s,C,a,n);t.xScale=this.getScaleForId(a),t.yScale=this.getScaleForId(C),t.rScale=this.getScaleForId(n),t.iScale=this.getScaleForId(H),t.vScale=this.getScaleForId(V)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){let e=this._cachedMeta;this._data&&z6(this._data,this),e._stacked&&B4(e)}_dataCheck(){let e=this.getDataset(),t=e.data||(e.data=[]),i=this._data;if(m1(t)){let o=this._cachedMeta;this._data=Jp(t,o)}else if(i!==t){if(i){z6(i,this);let o=this._cachedMeta;B4(o),o._parsed=[]}t&&Object.isExtensible(t)&&Ft(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,i=this.getDataset(),o=!1;this._dataCheck();let a=t._stacked;t._stacked=Jt(t.vScale,t),t.stack!==i.stack&&(o=!0,B4(t),t.stack=i.stack),this._resyncElements(e),(o||a!==t._stacked)&&(Cn(this,t._parsed),t._stacked=Jt(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:C}=i,n=a.axis,s=e===0&&t===o.length?!0:i._sorted,H=e>0&&i._parsed[e-1],V,L,d;if(this._parsing===!1)i._parsed=o,i._sorted=!0,d=o;else{I1(o[e])?d=this.parseArrayData(i,o,e,t):m1(o[e])?d=this.parseObjectData(i,o,e,t):d=this.parsePrimitiveData(i,o,e,t);let u=()=>L[n]===null||H&&L[n]<H[n];for(V=0;V<t;++V)i._parsed[V+e]=L=d[V],s&&(u()&&(s=!1),H=L);i._sorted=s}C&&Cn(this,d)}parsePrimitiveData(e,t,i,o){let{iScale:a,vScale:C}=e,n=a.axis,s=C.axis,H=a.getLabels(),V=a===C,L=new Array(o),d,u,f;for(d=0,u=o;d<u;++d)f=d+i,L[d]={[n]:V||a.parse(H[f],f),[s]:C.parse(t[f],f)};return L}parseArrayData(e,t,i,o){let{xScale:a,yScale:C}=e,n=new Array(o),s,H,V,L;for(s=0,H=o;s<H;++s)V=s+i,L=t[V],n[s]={x:a.parse(L[0],V),y:C.parse(L[1],V)};return n}parseObjectData(e,t,i,o){let{xScale:a,yScale:C}=e,{xAxisKey:n="x",yAxisKey:s="y"}=this._parsing,H=new Array(o),V,L,d,u;for(V=0,L=o;V<L;++V)d=V+i,u=t[d],H[V]={x:a.parse(k0(u,n),d),y:C.parse(k0(u,s),d)};return H}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,i){let o=this.chart,a=this._cachedMeta,C=t[e.axis],n={keys:Xn(o,!0),values:t._stacks[e.axis]._visualValues};return on(n,C,a.index,{mode:i})}updateRangeFromParsed(e,t,i,o){let a=i[t.axis],C=a===null?NaN:a,n=o&&i._stacks[t.axis];o&&n&&(o.values=n,C=on(o,a,this._cachedMeta.index)),e.min=Math.min(e.min,C),e.max=Math.max(e.max,C)}getMinMax(e,t){let i=this._cachedMeta,o=i._parsed,a=i._sorted&&e===i.iScale,C=o.length,n=this._getOtherScale(e),s=au(t,i,this.chart),H={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:V,max:L}=tu(n),d,u;function f(){u=o[d];let v=u[n.axis];return!Y1(u[e.axis])||V>v||L<v}for(d=0;d<C&&!(!f()&&(this.updateRangeFromParsed(H,e,u,s),a));++d);if(a){for(d=C-1;d>=0;--d)if(!f()){this.updateRangeFromParsed(H,e,u,s);break}}return H}getAllParsedValues(e){let t=this._cachedMeta._parsed,i=[],o,a,C;for(o=0,a=t.length;o<a;++o)C=t[o][e.axis],Y1(C)&&i.push(C);return i}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,i=t.iScale,o=t.vScale,a=this.getParsed(e);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(e){let t=this._cachedMeta;this.update(e||"default"),t._clip=Xp(L1(this.options.clip,Kp(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,i=this._cachedMeta,o=i.data||[],a=t.chartArea,C=[],n=this._drawStart||0,s=this._drawCount||o.length-n,H=this.options.drawActiveElementsOnTop,V;for(i.dataset&&i.dataset.draw(e,a,n,s),V=n;V<n+s;++V){let L=o[V];L.hidden||(L.active&&H?C.push(L):L.draw(e,a))}for(V=0;V<C.length;++V)C[V].draw(e,a)}getStyle(e,t){let i=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,t,i){let o=this.getDataset(),a;if(e>=0&&e<this._cachedMeta.data.length){let C=this._cachedMeta.data[e];a=C.$context||(C.$context=ou(this.getContext(),e,C)),a.parsed=this.getParsed(e),a.raw=o.data[e],a.index=a.dataIndex=e}else a=this.$context||(this.$context=iu(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!t,a.mode=i,a}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",i){let o=t==="active",a=this._cachedDataOpts,C=e+"-"+t,n=a[C],s=this.enableOptionSharing&&d3(i);if(n)return nn(n,s);let H=this.chart.config,V=H.datasetElementScopeKeys(this._type,e),L=o?[`${e}Hover`,"hover",e,""]:[e,""],d=H.getOptionScopes(this.getDataset(),V),u=Object.keys(G1.elements[e]),f=()=>this.getContext(i,o,t),v=H.resolveNamedOptions(d,u,f,L);return v.$shared&&(v.$shared=s,a[C]=Object.freeze(nn(v,s))),v}_resolveAnimations(e,t,i){let o=this.chart,a=this._cachedDataOpts,C=`animation-${t}`,n=a[C];if(n)return n;let s;if(o.options.animation!==!1){let V=this.chart.config,L=V.datasetAnimationScopeKeys(this._type,t),d=V.getOptionScopes(this.getDataset(),L);s=V.createResolver(d,this.getContext(e,i,t))}let H=new p8(o,s&&s.animations);return s&&s._cacheable&&(a[C]=Object.freeze(H)),H}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||tr(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let i=this.resolveDataElementOptions(e,t),o=this._sharedOptions,a=this.getSharedOptions(i),C=this.includeOptions(t,a)||a!==o;return this.updateSharedOptions(a,t,i),{sharedOptions:a,includeOptions:C}}updateElement(e,t,i,o){tr(o)?Object.assign(e,i):this._resolveAnimations(t,o).update(e,i)}updateSharedOptions(e,t,i){e&&!tr(t)&&this._resolveAnimations(void 0,t).update(e,i)}_setStyle(e,t,i,o){e.active=o;let a=this.getStyle(t,o);this._resolveAnimations(t,i,o).update(e,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(e,t,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,t,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){let t=this._data,i=this._cachedMeta.data;for(let[n,s,H]of this._syncList)this[n](s,H);this._syncList=[];let o=i.length,a=t.length,C=Math.min(a,o);C&&this.parse(0,C),a>o?this._insertElements(o,a-o,e):a<o&&this._removeElements(a,o-a)}_insertElements(e,t,i=!0){let o=this._cachedMeta,a=o.data,C=e+t,n,s=H=>{for(H.length+=t,n=H.length-1;n>=C;n--)H[n]=H[n-t]};for(s(a),n=e;n<C;++n)a[n]=new this.dataElementType;this._parsing&&s(o._parsed),this.parse(e,t),i&&this.updateElements(a,e,t,"reset")}updateElements(e,t,i,o){}_removeElements(e,t){let i=this._cachedMeta;if(this._parsing){let o=i._parsed.splice(e,t);i._stacked&&B4(i,o)}i.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,i,o]=e;this[t](i,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);let i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};Z(F0,"defaults",{}),Z(F0,"datasetElementType",null),Z(F0,"dataElementType",null);function Cu(r,e){if(!r._cache.$bar){let t=r.getMatchingVisibleMetas(e),i=[];for(let o=0,a=t.length;o<a;o++)i=i.concat(t[o].controller.getAllParsedValues(r));r._cache.$bar=N6(i.sort((o,a)=>o-a))}return r._cache.$bar}function nu(r){let e=r.iScale,t=Cu(e,r.type),i=e._length,o,a,C,n,s=()=>{C===32767||C===-32768||(d3(n)&&(i=Math.min(i,Math.abs(C-n)||i)),n=C)};for(o=0,a=t.length;o<a;++o)C=e.getPixelForValue(t[o]),s();for(n=void 0,o=0,a=e.ticks.length;o<a;++o)C=e.getPixelForTick(o),s();return i}function su(r,e,t,i){let o=t.barThickness,a,C;return p1(o)?(a=e.min*t.categoryPercentage,C=t.barPercentage):(a=o*i,C=1),{chunk:a/i,ratio:C,start:e.pixels[r]-a/2}}function Hu(r,e,t,i){let o=e.pixels,a=o[r],C=r>0?o[r-1]:null,n=r<o.length-1?o[r+1]:null,s=t.categoryPercentage;C===null&&(C=a-(n===null?e.end-e.start:n-a)),n===null&&(n=a+a-C);let H=a-(a-Math.min(C,n))/2*s;return{chunk:Math.abs(n-C)/2*s/i,ratio:t.barPercentage,start:H}}function Vu(r,e,t,i){let o=t.parse(r[0],i),a=t.parse(r[1],i),C=Math.min(o,a),n=Math.max(o,a),s=C,H=n;Math.abs(C)>Math.abs(n)&&(s=n,H=C),e[t.axis]=H,e._custom={barStart:s,barEnd:H,start:o,end:a,min:C,max:n}}function Jn(r,e,t,i){return I1(r)?Vu(r,e,t,i):e[t.axis]=t.parse(r,i),e}function sn(r,e,t,i){let o=r.iScale,a=r.vScale,C=o.getLabels(),n=o===a,s=[],H,V,L,d;for(H=t,V=t+i;H<V;++H)d=e[H],L={},L[o.axis]=n||o.parse(C[H],H),s.push(Jn(d,L,a,H));return s}function rr(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function Lu(r,e,t){return r!==0?s5(r):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function lu(r){let e,t,i,o,a;return r.horizontal?(e=r.base>r.x,t="left",i="right"):(e=r.base<r.y,t="bottom",i="top"),e?(o="end",a="start"):(o="start",a="end"),{start:t,end:i,reverse:e,top:o,bottom:a}}function cu(r,e,t,i){let o=e.borderSkipped,a={};if(!o){r.borderSkipped=a;return}if(o===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:C,end:n,reverse:s,top:H,bottom:V}=lu(r);o==="middle"&&t&&(r.enableBorderRadius=!0,(t._top||0)===i?o=H:(t._bottom||0)===i?o=V:(a[Hn(V,C,n,s)]=!0,o=H)),a[Hn(o,C,n,s)]=!0,r.borderSkipped=a}function Hn(r,e,t,i){return i?(r=Mu(r,e,t),r=Vn(r,t,e)):r=Vn(r,e,t),r}function Mu(r,e,t){return r===e?t:r===t?e:r}function Vn(r,e,t){return r==="start"?e:r==="end"?t:r}function du(r,{inflateAmount:e},t){r.inflateAmount=e==="auto"?t===1?.33:0:e}var o0=class extends F0{parsePrimitiveData(e,t,i,o){return sn(e,t,i,o)}parseArrayData(e,t,i,o){return sn(e,t,i,o)}parseObjectData(e,t,i,o){let{iScale:a,vScale:C}=e,{xAxisKey:n="x",yAxisKey:s="y"}=this._parsing,H=a.axis==="x"?n:s,V=C.axis==="x"?n:s,L=[],d,u,f,v;for(d=i,u=i+o;d<u;++d)v=t[d],f={},f[a.axis]=a.parse(k0(v,H),d),L.push(Jn(k0(v,V),f,C,d));return L}updateRangeFromParsed(e,t,i,o){super.updateRangeFromParsed(e,t,i,o);let a=i._custom;a&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,a.min),e.max=Math.max(e.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let t=this._cachedMeta,{iScale:i,vScale:o}=t,a=this.getParsed(e),C=a._custom,n=rr(C)?"["+C.start+", "+C.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:n}}initialize(){this.enableOptionSharing=!0,super.initialize();let e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){let t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,i,o){let a=o==="reset",{index:C,_cachedMeta:{vScale:n}}=this,s=n.getBasePixel(),H=n.isHorizontal(),V=this._getRuler(),{sharedOptions:L,includeOptions:d}=this._getSharedOptions(t,o);for(let u=t;u<t+i;u++){let f=this.getParsed(u),v=a||p1(f[n.axis])?{base:s,head:s}:this._calculateBarValuePixels(u),x=this._calculateBarIndexPixels(u,V),w=(f._stacks||{})[n.axis],y={horizontal:H,base:v.base,enableBorderRadius:!w||rr(f._custom)||C===w._top||C===w._bottom,x:H?v.head:x.center,y:H?x.center:v.head,height:H?x.size:Math.abs(v.size),width:H?Math.abs(v.size):x.size};d&&(y.options=L||this.resolveDataElementOptions(u,e[u].active?"active":o));let b=y.options||e[u].options;cu(y,b,w,C),du(y,b,V.ratio),this.updateElement(e[u],u,y,o)}}_getStacks(e,t){let{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(V=>V.controller.options.grouped),a=i.options.stacked,C=[],n=this._cachedMeta.controller.getParsed(t),s=n&&n[i.axis],H=V=>{let L=V._parsed.find(u=>u[i.axis]===s),d=L&&L[V.vScale.axis];if(p1(d)||isNaN(d))return!0};for(let V of o)if(!(t!==void 0&&H(V))&&((a===!1||C.indexOf(V.stack)===-1||a===void 0&&V.stack===void 0)&&C.push(V.stack),V.index===e))break;return C.length||C.push(void 0),C}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(i=>e[i].axis===t).shift()}_getAxis(){let e={},t=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)e[L1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,i){let o=this._getStacks(e,i),a=t!==void 0?o.indexOf(t):-1;return a===-1?o.length-1:a}_getRuler(){let e=this.options,t=this._cachedMeta,i=t.iScale,o=[],a,C;for(a=0,C=t.data.length;a<C;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let n=e.barThickness;return{min:n||nu(t),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:n?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:t,_stacked:i,index:o},options:{base:a,minBarLength:C}}=this,n=a||0,s=this.getParsed(e),H=s._custom,V=rr(H),L=s[t.axis],d=0,u=i?this.applyStack(t,s,i):L,f,v;u!==L&&(d=u-L,u=L),V&&(L=H.barStart,u=H.barEnd-H.barStart,L!==0&&s5(L)!==s5(H.barEnd)&&(d=0),d+=L);let x=!p1(a)&&!V?a:d,w=t.getPixelForValue(x);if(this.chart.getDataVisibility(e)?f=t.getPixelForValue(d+u):f=w,v=f-w,Math.abs(v)<C){v=Lu(v,t,n)*C,L===n&&(w-=v/2);let y=t.getPixelForDecimal(0),b=t.getPixelForDecimal(1),E=Math.min(y,b),F=Math.max(y,b);w=Math.max(Math.min(w,F),E),f=w+v,i&&!V&&(s._stacks[t.axis]._visualValues[o]=t.getValueForPixel(f)-t.getValueForPixel(w))}if(w===t.getPixelForValue(n)){let y=s5(v)*t.getLineWidthForValue(n)/2;w+=y,v-=y}return{size:v,base:w,head:f,center:f+v/2}}_calculateBarIndexPixels(e,t){let i=t.scale,o=this.options,a=o.skipNull,C=L1(o.maxBarThickness,1/0),n,s,H=this._getAxisCount();if(t.grouped){let V=a?this._getStackCount(e):t.stackCount,L=o.barThickness==="flex"?Hu(e,t,o,V*H):su(e,t,o,V*H),d=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,u=this._getAxis().indexOf(L1(d,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,a?e:void 0)+u;n=L.start+L.chunk*f+L.chunk/2,s=Math.min(C,L.chunk*L.ratio)}else n=i.getPixelForValue(this.getParsed(e)[i.axis],e),s=Math.min(C,t.min*t.ratio);return{base:n-s/2,head:n+s/2,center:n,size:s}}draw(){let e=this._cachedMeta,t=e.vScale,i=e.data,o=i.length,a=0;for(;a<o;++a)this.getParsed(a)[t.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};Z(o0,"id","bar"),Z(o0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),Z(o0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var a0=class extends F0{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=t,C=this.chart._animationsDisabled,{start:n,count:s}=Rt(t,o,C);this._drawStart=n,this._drawCount=s,Bt(t)&&(n=0,s=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;let H=this.resolveDatasetElementOptions(e);this.options.showLine||(H.borderWidth=0),H.segment=this.options.segment,this.updateElement(i,void 0,{animated:!C,options:H},e),this.updateElements(o,n,s,e)}updateElements(e,t,i,o){let a=o==="reset",{iScale:C,vScale:n,_stacked:s,_dataset:H}=this._cachedMeta,{sharedOptions:V,includeOptions:L}=this._getSharedOptions(t,o),d=C.axis,u=n.axis,{spanGaps:f,segment:v}=this.options,x=u3(f)?f:Number.POSITIVE_INFINITY,w=this.chart._animationsDisabled||a||o==="none",y=t+i,b=e.length,E=t>0&&this.getParsed(t-1);for(let F=0;F<b;++F){let $=e[F],D=w?$:{};if(F<t||F>=y){D.skip=!0;continue}let k=this.getParsed(F),P=p1(k[u]),N=D[d]=C.getPixelForValue(k[d],F),I=D[u]=a||P?n.getBasePixel():n.getPixelForValue(s?this.applyStack(n,k,s):k[u],F);D.skip=isNaN(N)||isNaN(I)||P,D.stop=F>0&&Math.abs(k[d]-E[d])>x,v&&(D.parsed=k,D.raw=H.data[F]),L&&(D.options=V||this.resolveDataElementOptions(F,$.active?"active":o)),w||this.updateElement($,F,D,o),E=k}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,i=t.options&&t.options.borderWidth||0,o=e.data||[];if(!o.length)return i;let a=o[0].size(this.resolveDataElementOptions(0)),C=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,C)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}};Z(a0,"id","line"),Z(a0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),Z(a0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function h3(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var lr=class r{constructor(e){Z(this,"options");this.options=e||{}}static override(e){Object.assign(r.prototype,e)}init(){}formats(){return h3()}parse(){return h3()}format(){return h3()}add(){return h3()}diff(){return h3()}startOf(){return h3()}endOf(){return h3()}},pu={_date:lr};function uu(r,e,t,i){let{controller:o,data:a,_sorted:C}=r,n=o._cachedMeta.iScale,s=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(n&&e===n.axis&&e!=="r"&&C&&a.length){let H=n._reversePixels?Tt:J5;if(i){if(o._sharedOptions){let V=a[0],L=typeof V.getRange=="function"&&V.getRange(e);if(L){let d=H(a,e,t-L),u=H(a,e,t+L);return{lo:d.lo,hi:u.hi}}}}else{let V=H(a,e,t);if(s){let{vScale:L}=o._cachedMeta,{_parsed:d}=r,u=d.slice(0,V.lo+1).reverse().findIndex(v=>!p1(v[L.axis]));V.lo-=Math.max(0,u);let f=d.slice(V.hi).findIndex(v=>!p1(v[L.axis]));V.hi+=Math.max(0,f)}return V}}return{lo:0,hi:a.length-1}}function Y4(r,e,t,i,o){let a=r.getSortedVisibleDatasetMetas(),C=t[e];for(let n=0,s=a.length;n<s;++n){let{index:H,data:V}=a[n],{lo:L,hi:d}=uu(a[n],e,C,o);for(let u=L;u<=d;++u){let f=V[u];f.skip||i(f,H,u)}}}function mu(r){let e=r.indexOf("x")!==-1,t=r.indexOf("y")!==-1;return function(i,o){let a=e?Math.abs(i.x-o.x):0,C=t?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(C,2))}}function ir(r,e,t,i,o){let a=[];return!o&&!r.isPointInArea(e)||Y4(r,t,e,function(n,s,H){!o&&!u5(n,r.chartArea,0)||n.inRange(e.x,e.y,i)&&a.push({element:n,datasetIndex:s,index:H})},!0),a}function hu(r,e,t,i){let o=[];function a(C,n,s){let{startAngle:H,endAngle:V}=C.getProps(["startAngle","endAngle"],i),{angle:L}=B6(C,{x:e.x,y:e.y});k4(L,H,V)&&o.push({element:C,datasetIndex:n,index:s})}return Y4(r,t,e,a),o}function fu(r,e,t,i,o,a){let C=[],n=mu(t),s=Number.POSITIVE_INFINITY;function H(V,L,d){let u=V.inRange(e.x,e.y,o);if(i&&!u)return;let f=V.getCenterPoint(o);if(!(!!a||r.isPointInArea(f))&&!u)return;let x=n(e,f);x<s?(C=[{element:V,datasetIndex:L,index:d}],s=x):x===s&&C.push({element:V,datasetIndex:L,index:d})}return Y4(r,t,e,H),C}function or(r,e,t,i,o,a){return!a&&!r.isPointInArea(e)?[]:t==="r"&&!i?hu(r,e,t,o):fu(r,e,t,i,o,a)}function Ln(r,e,t,i,o){let a=[],C=t==="x"?"inXRange":"inYRange",n=!1;return Y4(r,t,e,(s,H,V)=>{s[C]&&s[C](e[t],o)&&(a.push({element:s,datasetIndex:H,index:V}),n=n||s.inRange(e.x,e.y,o))}),i&&!n?[]:a}var Au={evaluateInteractionItems:Y4,modes:{index(r,e,t,i){let o=f5(e,r),a=t.axis||"x",C=t.includeInvisible||!1,n=t.intersect?ir(r,o,a,i,C):or(r,o,a,!1,i,C),s=[];return n.length?(r.getSortedVisibleDatasetMetas().forEach(H=>{let V=n[0].index,L=H.data[V];L&&!L.skip&&s.push({element:L,datasetIndex:H.index,index:V})}),s):[]},dataset(r,e,t,i){let o=f5(e,r),a=t.axis||"xy",C=t.includeInvisible||!1,n=t.intersect?ir(r,o,a,i,C):or(r,o,a,!1,i,C);if(n.length>0){let s=n[0].datasetIndex,H=r.getDatasetMeta(s).data;n=[];for(let V=0;V<H.length;++V)n.push({element:H[V],datasetIndex:s,index:V})}return n},point(r,e,t,i){let o=f5(e,r),a=t.axis||"xy",C=t.includeInvisible||!1;return ir(r,o,a,i,C)},nearest(r,e,t,i){let o=f5(e,r),a=t.axis||"xy",C=t.includeInvisible||!1;return or(r,o,a,t.intersect,i,C)},x(r,e,t,i){let o=f5(e,r);return Ln(r,o,"x",t.intersect,i)},y(r,e,t,i){let o=f5(e,r);return Ln(r,o,"y",t.intersect,i)}}},es=["left","top","right","bottom"];function z4(r,e){return r.filter(t=>t.pos===e)}function ln(r,e){return r.filter(t=>es.indexOf(t.pos)===-1&&t.box.axis===e)}function N4(r,e){return r.sort((t,i)=>{let o=e?i:t,a=e?t:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function vu(r){let e=[],t,i,o,a,C,n;for(t=0,i=(r||[]).length;t<i;++t)o=r[t],{position:a,options:{stack:C,stackWeight:n=1}}=o,e.push({index:t,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:C&&a+C,stackWeight:n});return e}function xu(r){let e={};for(let t of r){let{stack:i,pos:o,stackWeight:a}=t;if(!i||!es.includes(o))continue;let C=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});C.count++,C.weight+=a}return e}function gu(r,e){let t=xu(r),{vBoxMaxWidth:i,hBoxMaxHeight:o}=e,a,C,n;for(a=0,C=r.length;a<C;++a){n=r[a];let{fullSize:s}=n.box,H=t[n.stack],V=H&&n.stackWeight/H.weight;n.horizontal?(n.width=V?V*i:s&&e.availableWidth,n.height=o):(n.width=i,n.height=V?V*o:s&&e.availableHeight)}return t}function _u(r){let e=vu(r),t=N4(e.filter(H=>H.box.fullSize),!0),i=N4(z4(e,"left"),!0),o=N4(z4(e,"right")),a=N4(z4(e,"top"),!0),C=N4(z4(e,"bottom")),n=ln(e,"x"),s=ln(e,"y");return{fullSize:t,leftAndTop:i.concat(a),rightAndBottom:o.concat(s).concat(C).concat(n),chartArea:z4(e,"chartArea"),vertical:i.concat(o).concat(s),horizontal:a.concat(C).concat(n)}}function cn(r,e,t,i){return Math.max(r[t],e[t])+Math.max(r[i],e[i])}function ts(r,e){r.top=Math.max(r.top,e.top),r.left=Math.max(r.left,e.left),r.bottom=Math.max(r.bottom,e.bottom),r.right=Math.max(r.right,e.right)}function wu(r,e,t,i){let{pos:o,box:a}=t,C=r.maxPadding;if(!m1(o)){t.size&&(r[o]-=t.size);let L=i[t.stack]||{size:0,count:1};L.size=Math.max(L.size,t.horizontal?a.height:a.width),t.size=L.size/L.count,r[o]+=t.size}a.getPadding&&ts(C,a.getPadding());let n=Math.max(0,e.outerWidth-cn(C,r,"left","right")),s=Math.max(0,e.outerHeight-cn(C,r,"top","bottom")),H=n!==r.w,V=s!==r.h;return r.w=n,r.h=s,t.horizontal?{same:H,other:V}:{same:V,other:H}}function bu(r){let e=r.maxPadding;function t(i){let o=Math.max(e[i]-r[i],0);return r[i]+=o,o}r.y+=t("top"),r.x+=t("left"),t("right"),t("bottom")}function yu(r,e){let t=e.maxPadding;function i(o){let a={left:0,top:0,right:0,bottom:0};return o.forEach(C=>{a[C]=Math.max(e[C],t[C])}),a}return i(r?["left","right"]:["top","bottom"])}function U4(r,e,t,i){let o=[],a,C,n,s,H,V;for(a=0,C=r.length,H=0;a<C;++a){n=r[a],s=n.box,s.update(n.width||e.w,n.height||e.h,yu(n.horizontal,e));let{same:L,other:d}=wu(e,t,n,i);H|=L&&o.length,V=V||d,s.fullSize||o.push(n)}return H&&U4(o,e,t,i)||V}function n8(r,e,t,i,o){r.top=t,r.left=e,r.right=e+i,r.bottom=t+o,r.width=i,r.height=o}function Mn(r,e,t,i){let o=t.padding,{x:a,y:C}=e;for(let n of r){let s=n.box,H=i[n.stack]||{count:1,placed:0,weight:1},V=n.stackWeight/H.weight||1;if(n.horizontal){let L=e.w*V,d=H.size||s.height;d3(H.start)&&(C=H.start),s.fullSize?n8(s,o.left,C,t.outerWidth-o.right-o.left,d):n8(s,e.left+H.placed,C,L,d),H.start=C,H.placed+=L,C=s.bottom}else{let L=e.h*V,d=H.size||s.width;d3(H.start)&&(a=H.start),s.fullSize?n8(s,a,o.top,d,t.outerHeight-o.bottom-o.top):n8(s,a,e.top+H.placed,d,L),H.start=a,H.placed+=L,a=s.right}}e.x=a,e.y=C}var P0={addBox(r,e){r.boxes||(r.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},r.boxes.push(e)},removeBox(r,e){let t=r.boxes?r.boxes.indexOf(e):-1;t!==-1&&r.boxes.splice(t,1)},configure(r,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(r,e,t,i){if(!r)return;let o=n2(r.options.layout.padding),a=Math.max(e-o.width,0),C=Math.max(t-o.height,0),n=_u(r.boxes),s=n.vertical,H=n.horizontal;b1(r.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});let V=s.reduce((v,x)=>x.box.options&&x.box.options.display===!1?v:v+1,0)||1,L=Object.freeze({outerWidth:e,outerHeight:t,padding:o,availableWidth:a,availableHeight:C,vBoxMaxWidth:a/2/V,hBoxMaxHeight:C/2}),d=Object.assign({},o);ts(d,n2(i));let u=Object.assign({maxPadding:d,w:a,h:C,x:o.left,y:o.top},o),f=gu(s.concat(H),L);U4(n.fullSize,u,L,f),U4(s,u,L,f),U4(H,u,L,f)&&U4(s,u,L,f),bu(u),Mn(n.leftAndTop,u,L,f),u.x+=u.w,u.y+=u.h,Mn(n.rightAndBottom,u,L,f),r.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},b1(n.chartArea,v=>{let x=v.box;Object.assign(x,r.chartArea),x.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})})}},u8=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,i){}removeEventListener(e,t,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,i,o){return t=Math.max(0,t||e.width),i=i||e.height,{width:t,height:Math.max(0,o?Math.floor(t/o):i)}}isAttached(e){return!0}updateConfig(e){}},cr=class extends u8{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}},M8="$chartjs",Su={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},dn=r=>r===null||r==="";function Zu(r,e){let t=r.style,i=r.getAttribute("height"),o=r.getAttribute("width");if(r[M8]={initial:{height:i,width:o,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",dn(o)){let a=t8(r,"width");a!==void 0&&(r.width=a)}if(dn(i))if(r.style.height==="")r.height=r.width/(e||2);else{let a=t8(r,"height");a!==void 0&&(r.height=a)}return r}var rs=Qt?{passive:!0}:!1;function ku(r,e,t){r&&r.addEventListener(e,t,rs)}function Ou(r,e,t){r&&r.canvas&&r.canvas.removeEventListener(e,t,rs)}function $u(r,e){let t=Su[r.type]||r.type,{x:i,y:o}=f5(r,e);return{type:t,chart:e,native:r,x:i!==void 0?i:null,y:o!==void 0?o:null}}function m8(r,e){for(let t of r)if(t===e||t.contains(e))return!0}function Tu(r,e,t){let i=r.canvas,o=new MutationObserver(a=>{let C=!1;for(let n of a)C=C||m8(n.addedNodes,i),C=C&&!m8(n.removedNodes,i);C&&t()});return o.observe(document,{childList:!0,subtree:!0}),o}function Eu(r,e,t){let i=r.canvas,o=new MutationObserver(a=>{let C=!1;for(let n of a)C=C||m8(n.removedNodes,i),C=C&&!m8(n.addedNodes,i);C&&t()});return o.observe(document,{childList:!0,subtree:!0}),o}var q4=new Map,pn=0;function is(){let r=window.devicePixelRatio;r!==pn&&(pn=r,q4.forEach((e,t)=>{t.currentDevicePixelRatio!==r&&e()}))}function Fu(r,e){q4.size||window.addEventListener("resize",is),q4.set(r,e)}function Pu(r){q4.delete(r),q4.size||window.removeEventListener("resize",is)}function Du(r,e,t){let i=r.canvas,o=i&&R4(i);if(!o)return;let a=W6((n,s)=>{let H=o.clientWidth;t(n,s),H<o.clientWidth&&t()},window),C=new ResizeObserver(n=>{let s=n[0],H=s.contentRect.width,V=s.contentRect.height;H===0&&V===0||a(H,V)});return C.observe(o),Fu(r,a),C}function ar(r,e,t){t&&t.disconnect(),e==="resize"&&Pu(r)}function Ru(r,e,t){let i=r.canvas,o=W6(a=>{r.ctx!==null&&t($u(a,r))},r);return ku(i,e,o),o}var Mr=class extends u8{acquireContext(e,t){let i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(Zu(e,t),i):null}releaseContext(e){let t=e.canvas;if(!t[M8])return!1;let i=t[M8].initial;["height","width"].forEach(a=>{let C=i[a];p1(C)?t.removeAttribute(a):t.setAttribute(a,C)});let o=i.style||{};return Object.keys(o).forEach(a=>{t.style[a]=o[a]}),t.width=t.width,delete t[M8],!0}addEventListener(e,t,i){this.removeEventListener(e,t);let o=e.$proxies||(e.$proxies={}),C={attach:Tu,detach:Eu,resize:Du}[t]||Ru;o[t]=C(e,t,i)}removeEventListener(e,t){let i=e.$proxies||(e.$proxies={}),o=i[t];if(!o)return;({attach:ar,detach:ar,resize:ar}[t]||Ou)(e,t,o),i[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,i,o){return qt(e,t,i,o)}isAttached(e){let t=e&&R4(e);return!!(t&&t.isConnected)}};function Bu(r){return!D4()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?cr:Mr}var H5=class{constructor(){Z(this,"x");Z(this,"y");Z(this,"active",!1);Z(this,"options");Z(this,"$animations")}tooltipPosition(e){let{x:t,y:i}=this.getProps(["x","y"],e);return{x:t,y:i}}hasValue(){return u3(this.x)&&u3(this.y)}getProps(e,t){let i=this.$animations;if(!t||!i)return this;let o={};return e.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}};Z(H5,"defaults",{}),Z(H5,"defaultRoutes");function zu(r,e){let t=r.options.ticks,i=Nu(r),o=Math.min(t.maxTicksLimit||i,i),a=t.major.enabled?Wu(e):[],C=a.length,n=a[0],s=a[C-1],H=[];if(C>o)return Uu(e,H,a,C/o),H;let V=Iu(a,e,o);if(C>0){let L,d,u=C>1?Math.round((s-n)/(C-1)):null;for(s8(e,H,V,p1(u)?0:n-u,n),L=0,d=C-1;L<d;L++)s8(e,H,V,a[L],a[L+1]);return s8(e,H,V,s,p1(u)?e.length:s+u),H}return s8(e,H,V),H}function Nu(r){let e=r.options.offset,t=r._tickSize(),i=r._length/t+(e?0:1),o=r._maxLength/t;return Math.floor(Math.min(i,o))}function Iu(r,e,t){let i=ju(r),o=e.length/t;if(!i)return Math.max(o,1);let a=kt(i);for(let C=0,n=a.length-1;C<n;C++){let s=a[C];if(s>o)return s}return Math.max(o,1)}function Wu(r){let e=[],t,i;for(t=0,i=r.length;t<i;t++)r[t].major&&e.push(t);return e}function Uu(r,e,t,i){let o=0,a=t[0],C;for(i=Math.ceil(i),C=0;C<r.length;C++)C===a&&(e.push(r[C]),o++,a=t[o*i])}function s8(r,e,t,i,o){let a=L1(i,0),C=Math.min(L1(o,r.length),r.length),n=0,s,H,V;for(t=Math.ceil(t),o&&(s=o-i,t=s/Math.floor(s/t)),V=a;V<0;)n++,V=Math.round(a+n*t);for(H=Math.max(a,0);H<C;H++)H===V&&(e.push(r[H]),n++,V=Math.round(a+n*t))}function ju(r){let e=r.length,t,i;if(e<2)return!1;for(i=r[0],t=1;t<e;++t)if(r[t]-r[t-1]!==i)return!1;return i}var Gu=r=>r==="left"?"right":r==="right"?"left":r,un=(r,e,t)=>e==="top"||e==="left"?r[e]+t:r[e]-t,mn=(r,e)=>Math.min(e||r,r);function hn(r,e){let t=[],i=r.length/e,o=r.length,a=0;for(;a<o;a+=i)t.push(r[Math.floor(a)]);return t}function qu(r,e,t){let i=r.ticks.length,o=Math.min(e,i-1),a=r._startPixel,C=r._endPixel,n=1e-6,s=r.getPixelForTick(o),H;if(!(t&&(i===1?H=Math.max(s-a,C-s):e===0?H=(r.getPixelForTick(1)-s)/2:H=(s-r.getPixelForTick(o-1))/2,s+=o<e?H:-H,s<a-n||s>C+n)))return s}function Qu(r,e){b1(r,t=>{let i=t.gc,o=i.length/2,a;if(o>e){for(a=0;a<o;++a)delete t.data[i[a]];i.splice(0,o)}})}function I4(r){return r.drawTicks?r.tickLength:0}function fn(r,e){if(!r.display)return 0;let t=t2(r.font,e),i=n2(r.padding);return(I1(r.text)?r.text.length:1)*t.lineHeight+i.height}function Yu(r,e){return E5(r,{scale:e,type:"scale"})}function Ku(r,e,t){return E5(r,{tick:t,index:e,type:"tick"})}function Xu(r,e,t){let i=U6(r);return(t&&e!=="right"||!t&&e==="right")&&(i=Gu(i)),i}function Ju(r,e,t,i){let{top:o,left:a,bottom:C,right:n,chart:s}=r,{chartArea:H,scales:V}=s,L=0,d,u,f,v=C-o,x=n-a;if(r.isHorizontal()){if(u=$2(i,a,n),m1(t)){let w=Object.keys(t)[0],y=t[w];f=V[w].getPixelForValue(y)+v-e}else t==="center"?f=(H.bottom+H.top)/2+v-e:f=un(r,t,e);d=n-a}else{if(m1(t)){let w=Object.keys(t)[0],y=t[w];u=V[w].getPixelForValue(y)-x+e}else t==="center"?u=(H.left+H.right)/2-x+e:u=un(r,t,e);f=$2(i,C,o),L=t==="left"?-e2:e2}return{titleX:u,titleY:f,maxWidth:d,rotation:L}}var A3=class r extends H5{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:i,_suggestedMax:o}=this;return e=O2(e,Number.POSITIVE_INFINITY),t=O2(t,Number.NEGATIVE_INFINITY),i=O2(i,Number.POSITIVE_INFINITY),o=O2(o,Number.NEGATIVE_INFINITY),{min:O2(e,i),max:O2(t,o),minDefined:Y1(e),maxDefined:Y1(t)}}getMinMax(e){let{min:t,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),C;if(o&&a)return{min:t,max:i};let n=this.getMatchingVisibleMetas();for(let s=0,H=n.length;s<H;++s)C=n[s].controller.getMinMax(this,e),o||(t=Math.min(t,C.min)),a||(i=Math.max(i,C.max));return t=a&&t>i?i:t,i=o&&t>i?t:i,{min:O2(t,O2(i,t)),max:O2(i,O2(t,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){O1(this.options.beforeUpdate,[this])}update(e,t,i){let{beginAtZero:o,grace:a,ticks:C}=this.options,n=C.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Wt(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=n<this.ticks.length;this._convertTicksToLabels(s?hn(this.ticks,n):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),C.display&&(C.autoSkip||C.source==="auto")&&(this.ticks=zu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,i;this.isHorizontal()?(t=this.left,i=this.right):(t=this.top,i=this.bottom,e=!e),this._startPixel=t,this._endPixel=i,this._reversePixels=e,this._length=i-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){O1(this.options.afterUpdate,[this])}beforeSetDimensions(){O1(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){O1(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),O1(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){O1(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,i,o,a;for(i=0,o=e.length;i<o;i++)a=e[i],a.label=O1(t.callback,[a.value,i,e],this)}afterTickToLabelConversion(){O1(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){O1(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,i=mn(this.ticks.length,e.ticks.maxTicksLimit),o=t.minRotation||0,a=t.maxRotation,C=o,n,s,H;if(!this._isVisible()||!t.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}let V=this._getLabelSizes(),L=V.widest.width,d=V.highest.height,u=c2(this.chart.width-L,0,this.maxWidth);n=e.offset?this.maxWidth/i:u/(i-1),L+6>n&&(n=u/(i-(e.offset?.5:1)),s=this.maxHeight-I4(e.grid)-t.padding-fn(e.title,this.chart.options.font),H=Math.sqrt(L*L+d*d),C=Z4(Math.min(Math.asin(c2((V.highest.height+6)/n,-1,1)),Math.asin(c2(s/H,-1,1))-Math.asin(c2(d/H,-1,1)))),C=Math.max(o,Math.min(a,C))),this.labelRotation=C}afterCalculateLabelRotation(){O1(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){O1(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:i,title:o,grid:a}}=this,C=this._isVisible(),n=this.isHorizontal();if(C){let s=fn(o,t.options.font);if(n?(e.width=this.maxWidth,e.height=I4(a)+s):(e.height=this.maxHeight,e.width=I4(a)+s),i.display&&this.ticks.length){let{first:H,last:V,widest:L,highest:d}=this._getLabelSizes(),u=i.padding*2,f=T5(this.labelRotation),v=Math.cos(f),x=Math.sin(f);if(n){let w=i.mirror?0:x*L.width+v*d.height;e.height=Math.min(this.maxHeight,e.height+w+u)}else{let w=i.mirror?0:v*L.width+x*d.height;e.width=Math.min(this.maxWidth,e.width+w+u)}this._calculatePadding(H,V,x,v)}}this._handleMargins(),n?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,i,o){let{ticks:{align:a,padding:C},position:n}=this.options,s=this.labelRotation!==0,H=n!=="top"&&this.axis==="x";if(this.isHorizontal()){let V=this.getPixelForTick(0)-this.left,L=this.right-this.getPixelForTick(this.ticks.length-1),d=0,u=0;s?H?(d=o*e.width,u=i*t.height):(d=i*e.height,u=o*t.width):a==="start"?u=t.width:a==="end"?d=e.width:a!=="inner"&&(d=e.width/2,u=t.width/2),this.paddingLeft=Math.max((d-V+C)*this.width/(this.width-V),0),this.paddingRight=Math.max((u-L+C)*this.width/(this.width-L),0)}else{let V=t.height/2,L=e.height/2;a==="start"?(V=0,L=e.height):a==="end"&&(V=t.height,L=0),this.paddingTop=V+C,this.paddingBottom=L+C}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){O1(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,i;for(t=0,i=e.length;t<i;t++)p1(e[t].label)&&(e.splice(t,1),i--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,i=this.ticks;t<i.length&&(i=hn(i,t)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,i){let{ctx:o,_longestTextCache:a}=this,C=[],n=[],s=Math.floor(t/mn(t,i)),H=0,V=0,L,d,u,f,v,x,w,y,b,E,F;for(L=0;L<t;L+=s){if(f=e[L].label,v=this._resolveTickFontOptions(L),o.font=x=v.string,w=a[x]=a[x]||{data:{},gc:[]},y=v.lineHeight,b=E=0,!p1(f)&&!I1(f))b=m7(o,w.data,w.gc,b,f),E=y;else if(I1(f))for(d=0,u=f.length;d<u;++d)F=f[d],!p1(F)&&!I1(F)&&(b=m7(o,w.data,w.gc,b,F),E+=y);C.push(b),n.push(E),H=Math.max(b,H),V=Math.max(E,V)}Qu(a,t);let $=C.indexOf(H),D=n.indexOf(V),k=P=>({width:C[P]||0,height:n[P]||0});return{first:k(0),last:k(t-1),widest:k($),highest:k(D),widths:C,heights:n}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return $t(this._alignToPixels?e0(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let i=t[e];return i.$context||(i.$context=Ku(this.getContext(),e,i))}return this.$context||(this.$context=Yu(this.chart.getContext(),this))}_tickSize(){let e=this.options.ticks,t=T5(this.labelRotation),i=Math.abs(Math.cos(t)),o=Math.abs(Math.sin(t)),a=this._getLabelSizes(),C=e.autoSkipPadding||0,n=a?a.widest.width+C:0,s=a?a.highest.height+C:0;return this.isHorizontal()?s*i>n*o?n/i:s/o:s*o<n*i?s/i:n/o}_isVisible(){let e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){let t=this.axis,i=this.chart,o=this.options,{grid:a,position:C,border:n}=o,s=a.offset,H=this.isHorizontal(),L=this.ticks.length+(s?1:0),d=I4(a),u=[],f=n.setContext(this.getContext()),v=f.display?f.width:0,x=v/2,w=function(i1){return e0(i,i1,v)},y,b,E,F,$,D,k,P,N,I,Y,z;if(C==="top")y=w(this.bottom),D=this.bottom-d,P=y-x,I=w(e.top)+x,z=e.bottom;else if(C==="bottom")y=w(this.top),I=e.top,z=w(e.bottom)-x,D=y+x,P=this.top+d;else if(C==="left")y=w(this.right),$=this.right-d,k=y-x,N=w(e.left)+x,Y=e.right;else if(C==="right")y=w(this.left),N=e.left,Y=w(e.right)-x,$=y+x,k=this.left+d;else if(t==="x"){if(C==="center")y=w((e.top+e.bottom)/2+.5);else if(m1(C)){let i1=Object.keys(C)[0],A1=C[i1];y=w(this.chart.scales[i1].getPixelForValue(A1))}I=e.top,z=e.bottom,D=y+x,P=D+d}else if(t==="y"){if(C==="center")y=w((e.left+e.right)/2);else if(m1(C)){let i1=Object.keys(C)[0],A1=C[i1];y=w(this.chart.scales[i1].getPixelForValue(A1))}$=y-x,k=$-d,N=e.left,Y=e.right}let V1=L1(o.ticks.maxTicksLimit,L),a1=Math.max(1,Math.ceil(L/V1));for(b=0;b<L;b+=a1){let i1=this.getContext(b),A1=a.setContext(i1),a2=n.setContext(i1),K=A1.lineWidth,r1=A1.color,C1=a2.dash||[],Z1=a2.dashOffset,g1=A1.tickWidth,D1=A1.tickColor,y1=A1.tickBorderDash||[],E1=A1.tickBorderDashOffset;E=qu(this,b,s),E!==void 0&&(F=e0(i,E,K),H?$=k=N=Y=F:D=P=I=z=F,u.push({tx1:$,ty1:D,tx2:k,ty2:P,x1:N,y1:I,x2:Y,y2:z,width:K,color:r1,borderDash:C1,borderDashOffset:Z1,tickWidth:g1,tickColor:D1,tickBorderDash:y1,tickBorderDashOffset:E1}))}return this._ticksLength=L,this._borderValue=y,u}_computeLabelItems(e){let t=this.axis,i=this.options,{position:o,ticks:a}=i,C=this.isHorizontal(),n=this.ticks,{align:s,crossAlign:H,padding:V,mirror:L}=a,d=I4(i.grid),u=d+V,f=L?-V:u,v=-T5(this.labelRotation),x=[],w,y,b,E,F,$,D,k,P,N,I,Y,z="middle";if(o==="top")$=this.bottom-f,D=this._getXAxisLabelAlignment();else if(o==="bottom")$=this.top+f,D=this._getXAxisLabelAlignment();else if(o==="left"){let a1=this._getYAxisLabelAlignment(d);D=a1.textAlign,F=a1.x}else if(o==="right"){let a1=this._getYAxisLabelAlignment(d);D=a1.textAlign,F=a1.x}else if(t==="x"){if(o==="center")$=(e.top+e.bottom)/2+u;else if(m1(o)){let a1=Object.keys(o)[0],i1=o[a1];$=this.chart.scales[a1].getPixelForValue(i1)+u}D=this._getXAxisLabelAlignment()}else if(t==="y"){if(o==="center")F=(e.left+e.right)/2-u;else if(m1(o)){let a1=Object.keys(o)[0],i1=o[a1];F=this.chart.scales[a1].getPixelForValue(i1)}D=this._getYAxisLabelAlignment(d).textAlign}t==="y"&&(s==="start"?z="top":s==="end"&&(z="bottom"));let V1=this._getLabelSizes();for(w=0,y=n.length;w<y;++w){b=n[w],E=b.label;let a1=a.setContext(this.getContext(w));k=this.getPixelForTick(w)+a.labelOffset,P=this._resolveTickFontOptions(w),N=P.lineHeight,I=I1(E)?E.length:1;let i1=I/2,A1=a1.color,a2=a1.textStrokeColor,K=a1.textStrokeWidth,r1=D;C?(F=k,D==="inner"&&(w===y-1?r1=this.options.reverse?"left":"right":w===0?r1=this.options.reverse?"right":"left":r1="center"),o==="top"?H==="near"||v!==0?Y=-I*N+N/2:H==="center"?Y=-V1.highest.height/2-i1*N+N:Y=-V1.highest.height+N/2:H==="near"||v!==0?Y=N/2:H==="center"?Y=V1.highest.height/2-i1*N:Y=V1.highest.height-I*N,L&&(Y*=-1),v!==0&&!a1.showLabelBackdrop&&(F+=N/2*Math.sin(v))):($=k,Y=(1-I)*N/2);let C1;if(a1.showLabelBackdrop){let Z1=n2(a1.backdropPadding),g1=V1.heights[w],D1=V1.widths[w],y1=Y-Z1.top,E1=0-Z1.left;switch(z){case"middle":y1-=g1/2;break;case"bottom":y1-=g1;break}switch(D){case"center":E1-=D1/2;break;case"right":E1-=D1;break;case"inner":w===y-1?E1-=D1:w>0&&(E1-=D1/2);break}C1={left:E1,top:y1,width:D1+Z1.width,height:g1+Z1.height,color:a1.backdropColor}}x.push({label:E,font:P,textOffset:Y,options:{rotation:v,color:A1,strokeColor:a2,strokeWidth:K,textAlign:r1,textBaseline:z,translation:[F,$],backdrop:C1}})}return x}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-T5(this.labelRotation))return e==="top"?"left":"right";let o="center";return t.align==="start"?o="left":t.align==="end"?o="right":t.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,C=this._getLabelSizes(),n=e+a,s=C.widest.width,H,V;return t==="left"?o?(V=this.right+a,i==="near"?H="left":i==="center"?(H="center",V+=s/2):(H="right",V+=s)):(V=this.right-n,i==="near"?H="right":i==="center"?(H="center",V-=s/2):(H="left",V=this.left)):t==="right"?o?(V=this.left+a,i==="near"?H="right":i==="center"?(H="center",V-=s/2):(H="left",V-=s)):(V=this.left+n,i==="near"?H="left":i==="center"?(H="center",V+=s/2):(H="right",V=this.right)):H="right",{textAlign:H,x:V}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:i,top:o,width:a,height:C}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(i,o,a,C),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let o=this.ticks.findIndex(a=>a.value===e);return o>=0?t.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){let t=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e)),a,C,n=(s,H,V)=>{!V.width||!V.color||(i.save(),i.lineWidth=V.width,i.strokeStyle=V.color,i.setLineDash(V.borderDash||[]),i.lineDashOffset=V.borderDashOffset,i.beginPath(),i.moveTo(s.x,s.y),i.lineTo(H.x,H.y),i.stroke(),i.restore())};if(t.display)for(a=0,C=o.length;a<C;++a){let s=o[a];t.drawOnChartArea&&n({x:s.x1,y:s.y1},{x:s.x2,y:s.y2},s),t.drawTicks&&n({x:s.tx1,y:s.ty1},{x:s.tx2,y:s.ty2},{color:s.tickColor,width:s.tickWidth,borderDash:s.tickBorderDash,borderDashOffset:s.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),C=i.display?a.width:0;if(!C)return;let n=o.setContext(this.getContext(0)).lineWidth,s=this._borderValue,H,V,L,d;this.isHorizontal()?(H=e0(e,this.left,C)-C/2,V=e0(e,this.right,n)+n/2,L=d=s):(L=e0(e,this.top,C)-C/2,d=e0(e,this.bottom,n)+n/2,H=V=s),t.save(),t.lineWidth=a.width,t.strokeStyle=a.color,t.beginPath(),t.moveTo(H,L),t.lineTo(V,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let i=this.ctx,o=this._computeLabelArea();o&&A7(i,o);let a=this.getLabelItems(e);for(let C of a){let n=C.options,s=C.font,H=C.label,V=C.textOffset;$0(i,H,0,V,s,n)}o&&v7(i)}drawTitle(){let{ctx:e,options:{position:t,title:i,reverse:o}}=this;if(!i.display)return;let a=t2(i.font),C=n2(i.padding),n=i.align,s=a.lineHeight/2;t==="bottom"||t==="center"||m1(t)?(s+=C.bottom,I1(i.text)&&(s+=a.lineHeight*(i.text.length-1))):s+=C.top;let{titleX:H,titleY:V,maxWidth:L,rotation:d}=Ju(this,s,t,n);$0(e,i.text,0,0,a,{color:i.color,maxWidth:L,rotation:d,textAlign:Xu(n,t,o),textBaseline:"middle",translation:[H,V]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let e=this.options,t=e.ticks&&e.ticks.z||0,i=L1(e.grid&&e.grid.z,-1),o=L1(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:t,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:t,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[],a,C;for(a=0,C=t.length;a<C;++a){let n=t[a];n[i]===this.id&&(!e||n.type===e)&&o.push(n)}return o}_resolveTickFontOptions(e){let t=this.options.ticks.setContext(this.getContext(e));return t2(t.font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},_7=class{constructor(e,t,i){this.type=e,this.scope=t,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),i;rm(t)&&(i=this.register(t));let o=this.items,a=e.id,C=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+e);return a in o||(o[a]=e,em(e,C,i),this.override&&G1.override(e.id,e.overrides)),C}get(e){return this.items[e]}unregister(e){let t=this.items,i=e.id,o=this.scope;i in t&&delete t[i],o&&i in G1[o]&&(delete G1[o][i],this.override&&delete O0[i])}};function em(r,e,t){let i=q2(Object.create(null),[t?G1.get(t):{},G1.get(e),r.defaults]);G1.set(e,i),r.defaultRoutes&&tm(e,r.defaultRoutes),r.descriptors&&G1.describe(e,r.descriptors)}function tm(r,e){Object.keys(e).forEach(t=>{let i=t.split("."),o=i.pop(),a=[r].concat(i).join("."),C=e[t].split("."),n=C.pop(),s=C.join(".");G1.route(a,o,s,n)})}function rm(r){return"id"in r&&"defaults"in r}var dr=class{constructor(){this.controllers=new _7(F0,"datasets",!0),this.elements=new _7(H5,"elements"),this.plugins=new _7(Object,"plugins"),this.scales=new _7(A3,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,i){[...t].forEach(o=>{let a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(e,a,o):b1(o,C=>{let n=i||this._getRegistryForType(C);this._exec(e,n,C)})})}_exec(e,t,i){let o=S4(e);O1(i["before"+o],[],i),t[e](i),O1(i["after"+o],[],i)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let i=this._typedRegistries[t];if(i.isForType(e))return i}return this.plugins}_get(e,t,i){let o=t.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return o}},P5=new dr,pr=class{constructor(){this._init=void 0}notify(e,t,i,o){if(t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;let a=o?this._descriptors(e).filter(o):this._descriptors(e),C=this._notify(a,e,t,i);return t==="afterDestroy"&&(this._notify(a,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),C}_notify(e,t,i,o){o=o||{};for(let a of e){let C=a.plugin,n=C[i],s=[t,o,a.options];if(O1(n,s,C)===!1&&o.cancelable)return!1}return!0}invalidate(){p1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let i=e&&e.config,o=L1(i.options&&i.options.plugins,{}),a=im(i);return o===!1&&!t?[]:am(e,a,o,t)}_notifyStateChanges(e){let t=this._oldCache||[],i=this._cache,o=(a,C)=>a.filter(n=>!C.some(s=>n.plugin.id===s.plugin.id));this._notify(o(t,i),e,"stop"),this._notify(o(i,t),e,"start")}};function im(r){let e={},t=[],i=Object.keys(P5.plugins.items);for(let a=0;a<i.length;a++)t.push(P5.getPlugin(i[a]));let o=r.plugins||[];for(let a=0;a<o.length;a++){let C=o[a];t.indexOf(C)===-1&&(t.push(C),e[C.id]=!0)}return{plugins:t,localIds:e}}function om(r,e){return!e&&r===!1?null:r===!0?{}:r}function am(r,{plugins:e,localIds:t},i,o){let a=[],C=r.getContext();for(let n of e){let s=n.id,H=om(i[s],o);H!==null&&a.push({plugin:n,options:Cm(r.config,{plugin:n,local:t[s]},H,C)})}return a}function Cm(r,{plugin:e,local:t},i,o){let a=r.pluginScopeKeys(e),C=r.getOptionScopes(i,a);return t&&e.defaults&&C.push(e.defaults),r.createResolver(C,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ur(r,e){let t=G1.datasets[r]||{};return((e.datasets||{})[r]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function nm(r,e){let t=r;return r==="_index_"?t=e:r==="_value_"&&(t=e==="x"?"y":"x"),t}function sm(r,e){return r===e?"_index_":"_value_"}function An(r){if(r==="x"||r==="y"||r==="r")return r}function Hm(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function mr(r,...e){if(An(r))return r;for(let t of e){let i=t.axis||Hm(t.position)||r.length>1&&An(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function vn(r,e,t){if(t[e+"AxisID"]===r)return{axis:e}}function Vm(r,e){if(e.data&&e.data.datasets){let t=e.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(t.length)return vn(r,"x",t[0])||vn(r,"y",t[0])}return{}}function Lm(r,e){let t=O0[r.type]||{scales:{}},i=e.scales||{},o=ur(r.type,e),a=Object.create(null);return Object.keys(i).forEach(C=>{let n=i[C];if(!m1(n))return console.error(`Invalid scale configuration for scale: ${C}`);if(n._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${C}`);let s=mr(C,n,Vm(C,r),G1.scales[n.type]),H=sm(s,o),V=t.scales||{};a[C]=M3(Object.create(null),[{axis:s},n,V[s],V[H]])}),r.data.datasets.forEach(C=>{let n=C.type||r.type,s=C.indexAxis||ur(n,e),V=(O0[n]||{}).scales||{};Object.keys(V).forEach(L=>{let d=nm(L,s),u=C[d+"AxisID"]||d;a[u]=a[u]||Object.create(null),M3(a[u],[{axis:d},i[u],V[L]])})}),Object.keys(a).forEach(C=>{let n=a[C];M3(n,[G1.scales[n.type],G1.scale])}),a}function os(r){let e=r.options||(r.options={});e.plugins=L1(e.plugins,{}),e.scales=Lm(r,e)}function as(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function lm(r){return r=r||{},r.data=as(r.data),os(r),r}var xn=new Map,Cs=new Set;function H8(r,e){let t=xn.get(r);return t||(t=e(),xn.set(r,t),Cs.add(t)),t}var W4=(r,e,t)=>{let i=k0(e,t);i!==void 0&&r.add(i)},hr=class{constructor(e){this._config=lm(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=as(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),os(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return H8(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return H8(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return H8(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){let t=e.id,i=this.type;return H8(`${i}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let i=this._scopeCache,o=i.get(e);return(!o||t)&&(o=new Map,i.set(e,o)),o}getOptionScopes(e,t,i){let{options:o,type:a}=this,C=this._cachedScopes(e,i),n=C.get(t);if(n)return n;let s=new Set;t.forEach(V=>{e&&(s.add(e),V.forEach(L=>W4(s,e,L))),V.forEach(L=>W4(s,o,L)),V.forEach(L=>W4(s,O0[a]||{},L)),V.forEach(L=>W4(s,G1,L)),V.forEach(L=>W4(s,q6,L))});let H=Array.from(s);return H.length===0&&H.push(Object.create(null)),Cs.has(t)&&C.set(t,H),H}chartOptionScopes(){let{options:e,type:t}=this;return[e,O0[t]||{},G1.datasets[t]||{},{type:t},G1,q6]}resolveNamedOptions(e,t,i,o=[""]){let a={$shared:!0},{resolver:C,subPrefixes:n}=gn(this._resolverCache,e,o),s=C;if(Mm(C,t)){a.$shared=!1,i=O5(i)?i():i;let H=this.createResolver(e,i,n);s=Z0(C,i,H)}for(let H of t)a[H]=s[H];return a}createResolver(e,t,i=[""],o){let{resolver:a}=gn(this._resolverCache,e,i);return m1(t)?Z0(a,t,void 0,o):a}};function gn(r,e,t){let i=r.get(e);i||(i=new Map,r.set(e,i));let o=t.join(),a=i.get(o);return a||(a={resolver:P4(e,t),subPrefixes:t.filter(n=>!n.toLowerCase().includes("hover"))},i.set(o,a)),a}var cm=r=>m1(r)&&Object.getOwnPropertyNames(r).some(e=>O5(r[e]));function Mm(r,e){let{isScriptable:t,isIndexable:i}=X6(r);for(let o of e){let a=t(o),C=i(o),n=(C||a)&&r[o];if(a&&(O5(n)||cm(n))||C&&I1(n))return!0}return!1}var dm="4.5.1",pm=["top","bottom","left","right","chartArea"];function _n(r,e){return r==="top"||r==="bottom"||pm.indexOf(r)===-1&&e==="x"}function wn(r,e){return function(t,i){return t[r]===i[r]?t[e]-i[e]:t[r]-i[r]}}function bn(r){let e=r.chart,t=e.options.animation;e.notifyPlugins("afterRender"),O1(t&&t.onComplete,[r],e)}function um(r){let e=r.chart,t=e.options.animation;O1(t&&t.onProgress,[r],e)}function ns(r){return D4()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var d8={},yn=r=>{let e=ns(r);return Object.values(d8).filter(t=>t.canvas===e).pop()};function mm(r,e,t){let i=Object.keys(r);for(let o of i){let a=+o;if(a>=e){let C=r[o];delete r[o],(t>0||a>e)&&(r[a+t]=C)}}}function hm(r,e,t,i){return!t||r.type==="mouseout"?null:i?e:r}var M2=class{static register(...e){P5.add(...e),Sn()}static unregister(...e){P5.remove(...e),Sn()}constructor(e,t){let i=this.config=new hr(t),o=ns(e),a=yn(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let C=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Bu(o)),this.platform.updateConfig(i);let n=this.platform.acquireContext(o,C.aspectRatio),s=n&&n.canvas,H=s&&s.height,V=s&&s.width;if(this.id=yt(),this.ctx=n,this.canvas=s,this.width=V,this.height=H,this._options=C,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new pr,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Pt(L=>this.update(L),C.resizeDelay||0),this._dataChanges=[],d8[this.id]=this,!n||!s){console.error("Failed to create chart: can't acquire context from the given item");return}r0.listen(this,"complete",bn),r0.listen(this,"progress",um),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:i,height:o,_aspectRatio:a}=this;return p1(e)?t&&a?a:o?i/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return P5}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():e8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Q6(this.canvas,this.ctx),this}stop(){return r0.stop(this),this}resize(e,t){r0.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,C=this.platform.getMaximumSize(o,e,t,a),n=i.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=C.width,this.height=C.height,this._aspectRatio=this.aspectRatio,e8(this,n,!0)&&(this.notifyPlugins("resize",{size:C}),O1(i.onResize,[this,C],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let t=this.options.scales||{};b1(t,(i,o)=>{i.id=o})}buildOrUpdateScales(){let e=this.options,t=e.scales,i=this.scales,o=Object.keys(i).reduce((C,n)=>(C[n]=!1,C),{}),a=[];t&&(a=a.concat(Object.keys(t).map(C=>{let n=t[C],s=mr(C,n),H=s==="r",V=s==="x";return{options:n,dposition:H?"chartArea":V?"bottom":"left",dtype:H?"radialLinear":V?"category":"linear"}}))),b1(a,C=>{let n=C.options,s=n.id,H=mr(s,n),V=L1(n.type,C.dtype);(n.position===void 0||_n(n.position,H)!==_n(C.dposition))&&(n.position=C.dposition),o[s]=!0;let L=null;if(s in i&&i[s].type===V)L=i[s];else{let d=P5.getScale(V);L=new d({id:s,type:V,ctx:this.ctx,chart:this}),i[L.id]=L}L.init(n,e)}),b1(o,(C,n)=>{C||delete i[n]}),b1(i,C=>{P0.configure(this,C,C.options),P0.addBox(this,C)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,i=e.length;if(e.sort((o,a)=>o.index-a.index),i>t){for(let o=t;o<i;++o)this._destroyDatasetMeta(o);e.splice(t,i-t)}this._sortedMetasets=e.slice(0).sort(wn("order","index"))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((i,o)=>{t.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,i,o;for(this._removeUnreferencedMetasets(),i=0,o=t.length;i<o;i++){let a=t[i],C=this.getDatasetMeta(i),n=a.type||this.config.type;if(C.type&&C.type!==n&&(this._destroyDatasetMeta(i),C=this.getDatasetMeta(i)),C.type=n,C.indexAxis=a.indexAxis||ur(n,this.options),C.order=a.order||0,C.index=i,C.label=""+a.label,C.visible=this.isDatasetVisible(i),C.controller)C.controller.updateIndex(i),C.controller.linkScales();else{let s=P5.getController(n),{datasetElementType:H,dataElementType:V}=G1.datasets[n];Object.assign(s,{dataElementType:P5.getElement(V),datasetElementType:H&&P5.getElement(H)}),C.controller=new s(this,i),e.push(C.controller)}}return this._updateMetasets(),e}_resetElements(){b1(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){let t=this.config;t.update();let i=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let C=0;for(let H=0,V=this.data.datasets.length;H<V;H++){let{controller:L}=this.getDatasetMeta(H),d=!o&&a.indexOf(L)===-1;L.buildOrUpdateElements(d),C=Math.max(+L.getMaxOverflow(),C)}C=this._minPadding=i.layout.autoPadding?C:0,this._updateLayout(C),o||b1(a,H=>{H.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(wn("z","_idx"));let{_active:n,_lastEvent:s}=this;s?this._eventHandler(s,!0):n.length&&this._updateHoverStyles(n,n,!0),this.render()}_updateScales(){b1(this.scales,e=>{P0.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options,t=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!F6(t,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:i,start:o,count:a}of t){let C=i==="_removeElements"?-a:a;mm(e,o,C)}}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,i=a=>new Set(e.filter(C=>C[0]===a).map((C,n)=>n+","+C.splice(1).join(","))),o=i(0);for(let a=1;a<t;a++)if(!F6(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;P0.update(this,this.width,this.height,e);let t=this.chartArea,i=t.width<=0||t.height<=0;this._layers=[],b1(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,i=this.data.datasets.length;t<i;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,i=this.data.datasets.length;t<i;++t)this._updateDataset(t,O5(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){let i=this.getDatasetMeta(e),o={meta:i,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(t),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(r0.has(this)?this.attached&&!r0.running(this)&&r0.start(this):(this.draw(),bn({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){let t=this._sortedMetasets,i=[],o,a;for(o=0,a=t.length;o<a;++o){let C=t[o];(!e||C.visible)&&i.push(C)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){let t=this.ctx,i={meta:e,index:e.index,cancelable:!0},o=C8(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&A7(t,o),e.controller.draw(),o&&v7(t),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return u5(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,i,o){let a=Au.modes[t];return typeof a=="function"?a(this,e,i,o):[]}getDatasetMeta(e){let t=this.data.datasets[e],i=this._metasets,o=i.filter(a=>a&&a._dataset===t).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=E5(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!t.hidden}setDatasetVisibility(e,t){let i=this.getDatasetMeta(e);i.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,i){let o=i?"show":"hide",a=this.getDatasetMeta(e),C=a.controller._resolveAnimations(void 0,o);d3(t)?(a.data[t].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),C.update(a,{visible:i}),this.update(n=>n.datasetIndex===e?o:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),r0.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Q6(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete d8[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,i=(a,C)=>{t.addEventListener(this,a,C),e[a]=C},o=(a,C,n)=>{a.offsetX=C,a.offsetY=n,this._eventHandler(a)};b1(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,t=this.platform,i=(s,H)=>{t.addEventListener(this,s,H),e[s]=H},o=(s,H)=>{e[s]&&(t.removeEventListener(this,s,H),delete e[s])},a=(s,H)=>{this.canvas&&this.resize(s,H)},C,n=()=>{o("attach",n),this.attached=!0,this.resize(),i("resize",a),i("detach",C)};C=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",n)},t.isAttached(this.canvas)?n():C()}unbindEvents(){b1(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},b1(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,i){let o=i?"set":"remove",a,C,n,s;for(t==="dataset"&&(a=this.getDatasetMeta(e[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),n=0,s=e.length;n<s;++n){C=e[n];let H=C&&this.getDatasetMeta(C.datasetIndex).controller;H&&H[o+"HoverStyle"](C.element,C.datasetIndex,C.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],i=e.map(({datasetIndex:a,index:C})=>{let n=this.getDatasetMeta(a);if(!n)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:n.data[C],index:C}});!f7(i,t)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,t))}notifyPlugins(e,t,i){return this._plugins.notify(this,e,t,i)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,i){let o=this.options.hover,a=(s,H)=>s.filter(V=>!H.some(L=>V.datasetIndex===L.datasetIndex&&V.index===L.index)),C=a(t,e),n=i?e:a(e,t);C.length&&this.updateHoverStyle(C,o.mode,!1),n.length&&o.mode&&this.updateHoverStyle(n,o.mode,!0)}_eventHandler(e,t){let i={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},o=C=>(C.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;let a=this._handleEvent(e,t,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(e,t,i){let{_active:o=[],options:a}=this,C=t,n=this._getActiveElements(e,o,i,C),s=Zt(e),H=hm(e,this._lastEvent,i,s);i&&(this._lastEvent=null,O1(a.onHover,[e,n,this],this),s&&O1(a.onClick,[e,n,this],this));let V=!f7(n,o);return(V||t)&&(this._active=n,this._updateHoverStyles(n,o,t)),this._lastEvent=H,V}_getActiveElements(e,t,i,o){if(e.type==="mouseout")return[];if(!i)return t;let a=this.options.hover;return this.getElementsAtEventForMode(e,a.mode,a,o)}};Z(M2,"defaults",G1),Z(M2,"instances",d8),Z(M2,"overrides",O0),Z(M2,"registry",P5),Z(M2,"version",dm),Z(M2,"getChart",yn);function Sn(){return b1(M2.instances,r=>r._plugins.invalidate())}function fm(r,e,t){let{startAngle:i,x:o,y:a,outerRadius:C,innerRadius:n,options:s}=e,{borderWidth:H,borderJoinStyle:V}=s,L=Math.min(H/C,l2(i-t));if(r.beginPath(),r.arc(o,a,C-H/2,i+L/2,t-L/2),n>0){let d=Math.min(H/n,l2(i-t));r.arc(o,a,n+H/2,t-d/2,i+d/2,!0)}else{let d=Math.min(H/2,C*l2(i-t));if(V==="round")r.arc(o,a,d,t-F1/2,i+F1/2,!0);else if(V==="bevel"){let u=2*d*d,f=-u*Math.cos(t+F1/2)+o,v=-u*Math.sin(t+F1/2)+a,x=u*Math.cos(i+F1/2)+o,w=u*Math.sin(i+F1/2)+a;r.lineTo(f,v),r.lineTo(x,w)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function Am(r,e,t){let{startAngle:i,pixelMargin:o,x:a,y:C,outerRadius:n,innerRadius:s}=e,H=o/n;r.beginPath(),r.arc(a,C,n,i-H,t+H),s>o?(H=o/s,r.arc(a,C,s,t+H,i-H,!0)):r.arc(a,C,o,t+e2,i-e2),r.closePath(),r.clip()}function vm(r){return F4(r,["outerStart","outerEnd","innerStart","innerEnd"])}function xm(r,e,t,i){let o=vm(r.options.borderRadius),a=(t-e)/2,C=Math.min(a,i*e/2),n=s=>{let H=(t-Math.min(a,s))*i/2;return c2(s,0,Math.min(a,H))};return{outerStart:n(o.outerStart),outerEnd:n(o.outerEnd),innerStart:c2(o.innerStart,0,C),innerEnd:c2(o.innerEnd,0,C)}}function x7(r,e,t,i){return{x:t+r*Math.cos(e),y:i+r*Math.sin(e)}}function h8(r,e,t,i,o,a){let{x:C,y:n,startAngle:s,pixelMargin:H,innerRadius:V}=e,L=Math.max(e.outerRadius+i+t-H,0),d=V>0?V+i+t+H:0,u=0,f=o-s;if(i){let a1=V>0?V-i:0,i1=L>0?L-i:0,A1=(a1+i1)/2,a2=A1!==0?f*A1/(A1+i):f;u=(f-a2)/2}let v=Math.max(.001,f*L-t/F1)/L,x=(f-v)/2,w=s+x+u,y=o-x-u,{outerStart:b,outerEnd:E,innerStart:F,innerEnd:$}=xm(e,d,L,y-w),D=L-b,k=L-E,P=w+b/D,N=y-E/k,I=d+F,Y=d+$,z=w+F/I,V1=y-$/Y;if(r.beginPath(),a){let a1=(P+N)/2;if(r.arc(C,n,L,P,a1),r.arc(C,n,L,a1,N),E>0){let K=x7(k,N,C,n);r.arc(K.x,K.y,E,N,y+e2)}let i1=x7(Y,y,C,n);if(r.lineTo(i1.x,i1.y),$>0){let K=x7(Y,V1,C,n);r.arc(K.x,K.y,$,y+e2,V1+Math.PI)}let A1=(y-$/d+(w+F/d))/2;if(r.arc(C,n,d,y-$/d,A1,!0),r.arc(C,n,d,A1,w+F/d,!0),F>0){let K=x7(I,z,C,n);r.arc(K.x,K.y,F,z+Math.PI,w-e2)}let a2=x7(D,w,C,n);if(r.lineTo(a2.x,a2.y),b>0){let K=x7(D,P,C,n);r.arc(K.x,K.y,b,w-e2,P)}}else{r.moveTo(C,n);let a1=Math.cos(P)*L+C,i1=Math.sin(P)*L+n;r.lineTo(a1,i1);let A1=Math.cos(N)*L+C,a2=Math.sin(N)*L+n;r.lineTo(A1,a2)}r.closePath()}function gm(r,e,t,i,o){let{fullCircles:a,startAngle:C,circumference:n}=e,s=e.endAngle;if(a){h8(r,e,t,i,s,o);for(let H=0;H<a;++H)r.fill();isNaN(n)||(s=C+(n%X1||X1))}return h8(r,e,t,i,s,o),r.fill(),s}function _m(r,e,t,i,o){let{fullCircles:a,startAngle:C,circumference:n,options:s}=e,{borderWidth:H,borderJoinStyle:V,borderDash:L,borderDashOffset:d,borderRadius:u}=s,f=s.borderAlign==="inner";if(!H)return;r.setLineDash(L||[]),r.lineDashOffset=d,f?(r.lineWidth=H*2,r.lineJoin=V||"round"):(r.lineWidth=H,r.lineJoin=V||"bevel");let v=e.endAngle;if(a){h8(r,e,t,i,v,o);for(let x=0;x<a;++x)r.stroke();isNaN(n)||(v=C+(n%X1||X1))}f&&Am(r,e,v),s.selfJoin&&v-C>=F1&&u===0&&V!=="miter"&&fm(r,e,v),a||(h8(r,e,t,i,v,o),r.stroke())}var E0=class extends H5{constructor(t){super();Z(this,"circumference");Z(this,"endAngle");Z(this,"fullCircles");Z(this,"innerRadius");Z(this,"outerRadius");Z(this,"pixelMargin");Z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,i,o){let a=this.getProps(["x","y"],o),{angle:C,distance:n}=B6(a,{x:t,y:i}),{startAngle:s,endAngle:H,innerRadius:V,outerRadius:L,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),u=(this.options.spacing+this.options.borderWidth)/2,f=L1(d,H-s),v=k4(C,s,H)&&s!==H,x=f>=X1||v,w=h5(n,V+u,L+u);return x&&w}getCenterPoint(t){let{x:i,y:o,startAngle:a,endAngle:C,innerRadius:n,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:H,spacing:V}=this.options,L=(a+C)/2,d=(n+s+V+H)/2;return{x:i+Math.cos(L)*d,y:o+Math.sin(L)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:i,circumference:o}=this,a=(i.offset||0)/4,C=(i.spacing||0)/2,n=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>X1?Math.floor(o/X1):0,o===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let s=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(s)*a,Math.sin(s)*a);let H=1-Math.sin(Math.min(F1,o||0)),V=a*H;t.fillStyle=i.backgroundColor,t.strokeStyle=i.borderColor,gm(t,this,V,C,n),_m(t,this,V,C,n),t.restore()}};Z(E0,"id","arc"),Z(E0,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),Z(E0,"defaultRoutes",{backgroundColor:"backgroundColor"}),Z(E0,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"});function ss(r,e,t=e){r.lineCap=L1(t.borderCapStyle,e.borderCapStyle),r.setLineDash(L1(t.borderDash,e.borderDash)),r.lineDashOffset=L1(t.borderDashOffset,e.borderDashOffset),r.lineJoin=L1(t.borderJoinStyle,e.borderJoinStyle),r.lineWidth=L1(t.borderWidth,e.borderWidth),r.strokeStyle=L1(t.borderColor,e.borderColor)}function wm(r,e,t){r.lineTo(t.x,t.y)}function bm(r){return r.stepped?Nt:r.tension||r.cubicInterpolationMode==="monotone"?It:wm}function Hs(r,e,t={}){let i=r.length,{start:o=0,end:a=i-1}=t,{start:C,end:n}=e,s=Math.max(o,C),H=Math.min(a,n),V=o<C&&a<C||o>n&&a>n;return{count:i,start:s,loop:e.loop,ilen:H<s&&!V?i+H-s:H-s}}function ym(r,e,t,i){let{points:o,options:a}=e,{count:C,start:n,loop:s,ilen:H}=Hs(o,t,i),V=bm(a),{move:L=!0,reverse:d}=i||{},u,f,v;for(u=0;u<=H;++u)f=o[(n+(d?H-u:u))%C],!f.skip&&(L?(r.moveTo(f.x,f.y),L=!1):V(r,v,f,d,a.stepped),v=f);return s&&(f=o[(n+(d?H:0))%C],V(r,v,f,d,a.stepped)),!!s}function Sm(r,e,t,i){let o=e.points,{count:a,start:C,ilen:n}=Hs(o,t,i),{move:s=!0,reverse:H}=i||{},V=0,L=0,d,u,f,v,x,w,y=E=>(C+(H?n-E:E))%a,b=()=>{v!==x&&(r.lineTo(V,x),r.lineTo(V,v),r.lineTo(V,w))};for(s&&(u=o[y(0)],r.moveTo(u.x,u.y)),d=0;d<=n;++d){if(u=o[y(d)],u.skip)continue;let E=u.x,F=u.y,$=E|0;$===f?(F<v?v=F:F>x&&(x=F),V=(L*V+E)/++L):(b(),r.lineTo(E,F),f=$,L=0,v=x=F),w=F}b()}function fr(r){let e=r.options,t=e.borderDash&&e.borderDash.length;return!r._decimated&&!r._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?Sm:ym}function Zm(r){return r.stepped?Yt:r.tension||r.cubicInterpolationMode==="monotone"?Kt:X5}function km(r,e,t,i){let o=e._path;o||(o=e._path=new Path2D,e.path(o,t,i)&&o.closePath()),ss(r,e.options),r.stroke(o)}function Om(r,e,t,i){let{segments:o,options:a}=e,C=fr(e);for(let n of o)ss(r,a,n.style),r.beginPath(),C(r,e,n,{start:t,end:t+i-1})&&r.closePath(),r.stroke()}var $m=typeof Path2D=="function";function Tm(r,e,t,i){$m&&!e.options.segment?km(r,e,t,i):Om(r,e,t,i)}var Q2=class extends H5{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let o=i.spanGaps?this._loop:this._fullLoop;Gt(this._points,i,e,o,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Xt(this,this.options.segment))}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,i=e.length;return i&&t[e[i-1].end]}interpolate(e,t){let i=this.options,o=e[t],a=this.points,C=a8(this,{property:t,start:o,end:o});if(!C.length)return;let n=[],s=Zm(i),H,V;for(H=0,V=C.length;H<V;++H){let{start:L,end:d}=C[H],u=a[L],f=a[d];if(u===f){n.push(u);continue}let v=Math.abs((o-u[t])/(f[t]-u[t])),x=s(u,f,v,i.stepped);x[t]=e[t],n.push(x)}return n.length===1?n[0]:n}pathSegment(e,t,i){return fr(this)(e,this,t,i)}path(e,t,i){let o=this.segments,a=fr(this),C=this._loop;t=t||0,i=i||this.points.length-t;for(let n of o)C&=a(e,this,n,{start:t,end:t+i-1});return!!C}draw(e,t,i,o){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(e.save(),Tm(e,this,i,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};Z(Q2,"id","line"),Z(Q2,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),Z(Q2,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),Z(Q2,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Zn(r,e,t,i){let o=r.options,{[t]:a}=r.getProps([t],i);return Math.abs(e-a)<o.radius+o.hitRadius}var A5=class extends H5{constructor(t){super();Z(this,"parsed");Z(this,"skip");Z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,i,o){let a=this.options,{x:C,y:n}=this.getProps(["x","y"],o);return Math.pow(t-C,2)+Math.pow(i-n,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(t,i){return Zn(this,t,"x",i)}inYRange(t,i){return Zn(this,t,"y",i)}getCenterPoint(t){let{x:i,y:o}=this.getProps(["x","y"],t);return{x:i,y:o}}size(t){t=t||this.options||{};let i=t.radius||0;i=Math.max(i,i&&t.hoverRadius||0);let o=i&&t.borderWidth||0;return(i+o)*2}draw(t,i){let o=this.options;this.skip||o.radius<.1||!u5(this,i,this.size(o)/2)||(t.strokeStyle=o.borderColor,t.lineWidth=o.borderWidth,t.fillStyle=o.backgroundColor,E4(t,o,this.x,this.y))}getRange(){let t=this.options||{};return t.radius+t.hitRadius}};Z(A5,"id","point"),Z(A5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),Z(A5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Vs(r,e){let{x:t,y:i,base:o,width:a,height:C}=r.getProps(["x","y","base","width","height"],e),n,s,H,V,L;return r.horizontal?(L=C/2,n=Math.min(t,o),s=Math.max(t,o),H=i-L,V=i+L):(L=a/2,n=t-L,s=t+L,H=Math.min(i,o),V=Math.max(i,o)),{left:n,top:H,right:s,bottom:V}}function D0(r,e,t,i){return r?0:c2(e,t,i)}function Em(r,e,t){let i=r.options.borderWidth,o=r.borderSkipped,a=K6(i);return{t:D0(o.top,a.top,0,t),r:D0(o.right,a.right,0,e),b:D0(o.bottom,a.bottom,0,t),l:D0(o.left,a.left,0,e)}}function Fm(r,e,t){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),o=r.options.borderRadius,a=t0(o),C=Math.min(e,t),n=r.borderSkipped,s=i||m1(o);return{topLeft:D0(!s||n.top||n.left,a.topLeft,0,C),topRight:D0(!s||n.top||n.right,a.topRight,0,C),bottomLeft:D0(!s||n.bottom||n.left,a.bottomLeft,0,C),bottomRight:D0(!s||n.bottom||n.right,a.bottomRight,0,C)}}function Pm(r){let e=Vs(r),t=e.right-e.left,i=e.bottom-e.top,o=Em(r,t/2,i/2),a=Fm(r,t/2,i/2);return{outer:{x:e.left,y:e.top,w:t,h:i,radius:a},inner:{x:e.left+o.l,y:e.top+o.t,w:t-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function Cr(r,e,t,i){let o=e===null,a=t===null,n=r&&!(o&&a)&&Vs(r,i);return n&&(o||h5(e,n.left,n.right))&&(a||h5(t,n.top,n.bottom))}function Dm(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function Rm(r,e){r.rect(e.x,e.y,e.w,e.h)}function nr(r,e,t={}){let i=r.x!==t.x?-e:0,o=r.y!==t.y?-e:0,a=(r.x+r.w!==t.x+t.w?e:0)-i,C=(r.y+r.h!==t.y+t.h?e:0)-o;return{x:r.x+i,y:r.y+o,w:r.w+a,h:r.h+C,radius:r.radius}}var v5=class extends H5{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){let{inflateAmount:t,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:C}=Pm(this),n=Dm(C.radius)?m3:Rm;e.save(),(C.w!==a.w||C.h!==a.h)&&(e.beginPath(),n(e,nr(C,t,a)),e.clip(),n(e,nr(a,-t,C)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),n(e,nr(a,t)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,t,i){return Cr(this,e,t,i)}inXRange(e,t){return Cr(this,e,null,t)}inYRange(e,t){return Cr(this,null,e,t)}getCenterPoint(e){let{x:t,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],e);return{x:a?(t+o)/2:t,y:a?i:(i+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}};Z(v5,"id","bar"),Z(v5,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),Z(v5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Bm(r,e,t){let i=r.segments,o=r.points,a=e.points,C=[];for(let n of i){let{start:s,end:H}=n;H=v8(s,H,o);let V=Ar(t,o[s],o[H],n.loop);if(!e.segments){C.push({source:n,target:V,start:o[s],end:o[H]});continue}let L=a8(e,V);for(let d of L){let u=Ar(t,a[d.start],a[d.end],d.loop),f=o8(n,o,u);for(let v of f)C.push({source:v,target:d,start:{[t]:kn(V,u,"start",Math.max)},end:{[t]:kn(V,u,"end",Math.min)}})}}return C}function Ar(r,e,t,i){if(i)return;let o=e[r],a=t[r];return r==="angle"&&(o=l2(o),a=l2(a)),{property:r,start:o,end:a}}function zm(r,e){let{x:t=null,y:i=null}=r||{},o=e.points,a=[];return e.segments.forEach(({start:C,end:n})=>{n=v8(C,n,o);let s=o[C],H=o[n];i!==null?(a.push({x:s.x,y:i}),a.push({x:H.x,y:i})):t!==null&&(a.push({x:t,y:s.y}),a.push({x:t,y:H.y}))}),a}function v8(r,e,t){for(;e>r;e--){let i=t[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function kn(r,e,t,i){return r&&e?i(r[t],e[t]):r?r[t]:e?e[t]:0}function Ls(r,e){let t=[],i=!1;return I1(r)?(i=!0,t=r):t=zm(r,e),t.length?new Q2({points:t,options:{tension:0},_loop:i,_fullLoop:i}):null}function On(r){return r&&r.fill!==!1}function Nm(r,e,t){let o=r[e].fill,a=[e],C;if(!t)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!Y1(o))return o;if(C=r[o],!C)return!1;if(C.visible)return o;a.push(o),o=C.fill}return!1}function Im(r,e,t){let i=Gm(r);if(m1(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return Y1(o)&&Math.floor(o)===o?Wm(i[0],e,o,t):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Wm(r,e,t,i){return(r==="-"||r==="+")&&(t=e+t),t===e||t<0||t>=i?!1:t}function Um(r,e){let t=null;return r==="start"?t=e.bottom:r==="end"?t=e.top:m1(r)?t=e.getPixelForValue(r.value):e.getBasePixel&&(t=e.getBasePixel()),t}function jm(r,e,t){let i;return r==="start"?i=t:r==="end"?i=e.options.reverse?e.min:e.max:m1(r)?i=r.value:i=e.getBaseValue(),i}function Gm(r){let e=r.options,t=e.fill,i=L1(t&&t.target,t);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function qm(r){let{scale:e,index:t,line:i}=r,o=[],a=i.segments,C=i.points,n=Qm(e,t);n.push(Ls({x:null,y:e.bottom},i));for(let s=0;s<a.length;s++){let H=a[s];for(let V=H.start;V<=H.end;V++)Ym(o,C[V],n)}return new Q2({points:o,options:{}})}function Qm(r,e){let t=[],i=r.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){let a=i[o];if(a.index===e)break;a.hidden||t.unshift(a.dataset)}return t}function Ym(r,e,t){let i=[];for(let o=0;o<t.length;o++){let a=t[o],{first:C,last:n,point:s}=Km(a,e,"x");if(!(!s||C&&n)){if(C)i.unshift(s);else if(r.push(s),!n)break}}r.push(...i)}function Km(r,e,t){let i=r.interpolate(e,t);if(!i)return{};let o=i[t],a=r.segments,C=r.points,n=!1,s=!1;for(let H=0;H<a.length;H++){let V=a[H],L=C[V.start][t],d=C[V.end][t];if(h5(o,L,d)){n=o===L,s=o===d;break}}return{first:n,last:s,point:i}}var f8=class{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,i){let{x:o,y:a,radius:C}=this;return t=t||{start:0,end:X1},e.arc(o,a,C,t.end,t.start,!0),!i.bounds}interpolate(e){let{x:t,y:i,radius:o}=this,a=e.angle;return{x:t+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}};function Xm(r){let{chart:e,fill:t,line:i}=r;if(Y1(t))return Jm(e,t);if(t==="stack")return qm(r);if(t==="shape")return!0;let o=eh(r);return o instanceof f8?o:Ls(o,i)}function Jm(r,e){let t=r.getDatasetMeta(e);return t&&r.isDatasetVisible(e)?t.dataset:null}function eh(r){return(r.scale||{}).getPointPositionForValue?rh(r):th(r)}function th(r){let{scale:e={},fill:t}=r,i=Um(t,e);if(Y1(i)){let o=e.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function rh(r){let{scale:e,fill:t}=r,i=e.options,o=e.getLabels().length,a=i.reverse?e.max:e.min,C=jm(t,e,a),n=[];if(i.grid.circular){let s=e.getPointPositionForValue(0,a);return new f8({x:s.x,y:s.y,radius:e.getDistanceFromCenterForValue(C)})}for(let s=0;s<o;++s)n.push(e.getPointPositionForValue(s,C));return n}function sr(r,e,t){let i=Xm(e),{chart:o,index:a,line:C,scale:n,axis:s}=e,H=C.options,V=H.fill,L=H.backgroundColor,{above:d=L,below:u=L}=V||{},f=o.getDatasetMeta(a),v=C8(o,f);i&&C.points.length&&(A7(r,t),ih(r,{line:C,target:i,above:d,below:u,area:t,scale:n,axis:s,clip:v}),v7(r))}function ih(r,e){let{line:t,target:i,above:o,below:a,area:C,scale:n,clip:s}=e,H=t._loop?"angle":e.axis;r.save();let V=a;a!==o&&(H==="x"?($n(r,i,C.top),Hr(r,{line:t,target:i,color:o,scale:n,property:H,clip:s}),r.restore(),r.save(),$n(r,i,C.bottom)):H==="y"&&(Tn(r,i,C.left),Hr(r,{line:t,target:i,color:a,scale:n,property:H,clip:s}),r.restore(),r.save(),Tn(r,i,C.right),V=o)),Hr(r,{line:t,target:i,color:V,scale:n,property:H,clip:s}),r.restore()}function $n(r,e,t){let{segments:i,points:o}=e,a=!0,C=!1;r.beginPath();for(let n of i){let{start:s,end:H}=n,V=o[s],L=o[v8(s,H,o)];a?(r.moveTo(V.x,V.y),a=!1):(r.lineTo(V.x,t),r.lineTo(V.x,V.y)),C=!!e.pathSegment(r,n,{move:C}),C?r.closePath():r.lineTo(L.x,t)}r.lineTo(e.first().x,t),r.closePath(),r.clip()}function Tn(r,e,t){let{segments:i,points:o}=e,a=!0,C=!1;r.beginPath();for(let n of i){let{start:s,end:H}=n,V=o[s],L=o[v8(s,H,o)];a?(r.moveTo(V.x,V.y),a=!1):(r.lineTo(t,V.y),r.lineTo(V.x,V.y)),C=!!e.pathSegment(r,n,{move:C}),C?r.closePath():r.lineTo(t,L.y)}r.lineTo(t,e.first().y),r.closePath(),r.clip()}function Hr(r,e){let{line:t,target:i,property:o,color:a,scale:C,clip:n}=e,s=Bm(t,i,o);for(let{source:H,target:V,start:L,end:d}of s){let{style:{backgroundColor:u=a}={}}=H,f=i!==!0;r.save(),r.fillStyle=u,oh(r,C,n,f&&Ar(o,L,d)),r.beginPath();let v=!!t.pathSegment(r,H),x;if(f){v?r.closePath():En(r,i,d,o);let w=!!i.pathSegment(r,V,{move:v,reverse:!0});x=v&&w,x||En(r,i,L,o)}r.closePath(),r.fill(x?"evenodd":"nonzero"),r.restore()}}function oh(r,e,t,i){let o=e.chart.chartArea,{property:a,start:C,end:n}=i||{};if(a==="x"||a==="y"){let s,H,V,L;a==="x"?(s=C,H=o.top,V=n,L=o.bottom):(s=o.left,H=C,V=o.right,L=n),r.beginPath(),t&&(s=Math.max(s,t.left),V=Math.min(V,t.right),H=Math.max(H,t.top),L=Math.min(L,t.bottom)),r.rect(s,H,V-s,L-H),r.clip()}}function En(r,e,t,i){let o=e.interpolate(t,i);o&&r.lineTo(o.x,o.y)}var xr={id:"filler",afterDatasetsUpdate(r,e,t){let i=(r.data.datasets||[]).length,o=[],a,C,n,s;for(C=0;C<i;++C)a=r.getDatasetMeta(C),n=a.dataset,s=null,n&&n.options&&n instanceof Q2&&(s={visible:r.isDatasetVisible(C),index:C,fill:Im(n,C,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:n}),a.$filler=s,o.push(s);for(C=0;C<i;++C)s=o[C],!(!s||s.fill===!1)&&(s.fill=Nm(o,C,t.propagate))},beforeDraw(r,e,t){let i=t.drawTime==="beforeDraw",o=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let C=o.length-1;C>=0;--C){let n=o[C].$filler;n&&(n.line.updateControlPoints(a,n.axis),i&&n.fill&&sr(r.ctx,n,a))}},beforeDatasetsDraw(r,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){let a=i[o].$filler;On(a)&&sr(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,e,t){let i=e.meta.$filler;!On(i)||t.drawTime!=="beforeDatasetDraw"||sr(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Fn=(r,e)=>{let{boxHeight:t=e,boxWidth:i=e}=r;return r.usePointStyle&&(t=Math.min(t,e),i=r.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:t,itemHeight:Math.max(e,t)}},ah=(r,e)=>r!==null&&e!==null&&r.datasetIndex===e.datasetIndex&&r.index===e.index,A8=class extends H5{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,i){this.maxWidth=e,this.maxHeight=t,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let e=this.options.labels||{},t=O1(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(i=>e.filter(i,this.chart.data))),e.sort&&(t=t.sort((i,o)=>e.sort(i,o,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}let i=e.labels,o=t2(i.font),a=o.size,C=this._computeTitleHeight(),{boxWidth:n,itemHeight:s}=Fn(i,a),H,V;t.font=o.string,this.isHorizontal()?(H=this.maxWidth,V=this._fitRows(C,a,n,s)+10):(V=this.maxHeight,H=this._fitCols(C,o,n,s)+10),this.width=Math.min(H,e.maxWidth||this.maxWidth),this.height=Math.min(V,e.maxHeight||this.maxHeight)}_fitRows(e,t,i,o){let{ctx:a,maxWidth:C,options:{labels:{padding:n}}}=this,s=this.legendHitBoxes=[],H=this.lineWidths=[0],V=o+n,L=e;a.textAlign="left",a.textBaseline="middle";let d=-1,u=-V;return this.legendItems.forEach((f,v)=>{let x=i+t/2+a.measureText(f.text).width;(v===0||H[H.length-1]+x+2*n>C)&&(L+=V,H[H.length-(v>0?0:1)]=0,u+=V,d++),s[v]={left:0,top:u,row:d,width:x,height:o},H[H.length-1]+=x+n}),L}_fitCols(e,t,i,o){let{ctx:a,maxHeight:C,options:{labels:{padding:n}}}=this,s=this.legendHitBoxes=[],H=this.columnSizes=[],V=C-e,L=n,d=0,u=0,f=0,v=0;return this.legendItems.forEach((x,w)=>{let{itemWidth:y,itemHeight:b}=Ch(i,t,a,x,o);w>0&&u+b+2*n>V&&(L+=d+n,H.push({width:d,height:u}),f+=d+n,v++,d=u=0),s[w]={left:f,top:u,col:v,width:y,height:b},d=Math.max(d,y),u+=b+n}),L+=d,H.push({width:d,height:u}),L}adjustHitBoxes(){if(!this.options.display)return;let e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:i,labels:{padding:o},rtl:a}}=this,C=T0(a,this.left,this.width);if(this.isHorizontal()){let n=0,s=$2(i,this.left+o,this.right-this.lineWidths[n]);for(let H of t)n!==H.row&&(n=H.row,s=$2(i,this.left+o,this.right-this.lineWidths[n])),H.top+=this.top+e+o,H.left=C.leftForLtr(C.x(s),H.width),s+=H.width+o}else{let n=0,s=$2(i,this.top+e+o,this.bottom-this.columnSizes[n].height);for(let H of t)H.col!==n&&(n=H.col,s=$2(i,this.top+e+o,this.bottom-this.columnSizes[n].height)),H.top=s,H.left+=this.left+o,H.left=C.leftForLtr(C.x(H.left),H.width),s+=H.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){let e=this.ctx;A7(e,this),this._draw(),v7(e)}}_draw(){let{options:e,columnSizes:t,lineWidths:i,ctx:o}=this,{align:a,labels:C}=e,n=G1.color,s=T0(e.rtl,this.left,this.width),H=t2(C.font),{padding:V}=C,L=H.size,d=L/2,u;this.drawTitle(),o.textAlign=s.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=H.string;let{boxWidth:f,boxHeight:v,itemHeight:x}=Fn(C,L),w=function($,D,k){if(isNaN(f)||f<=0||isNaN(v)||v<0)return;o.save();let P=L1(k.lineWidth,1);if(o.fillStyle=L1(k.fillStyle,n),o.lineCap=L1(k.lineCap,"butt"),o.lineDashOffset=L1(k.lineDashOffset,0),o.lineJoin=L1(k.lineJoin,"miter"),o.lineWidth=P,o.strokeStyle=L1(k.strokeStyle,n),o.setLineDash(L1(k.lineDash,[])),C.usePointStyle){let N={radius:v*Math.SQRT2/2,pointStyle:k.pointStyle,rotation:k.rotation,borderWidth:P},I=s.xPlus($,f/2),Y=D+d;Y6(o,N,I,Y,C.pointStyleWidth&&f)}else{let N=D+Math.max((L-v)/2,0),I=s.leftForLtr($,f),Y=t0(k.borderRadius);o.beginPath(),Object.values(Y).some(z=>z!==0)?m3(o,{x:I,y:N,w:f,h:v,radius:Y}):o.rect(I,N,f,v),o.fill(),P!==0&&o.stroke()}o.restore()},y=function($,D,k){$0(o,k.text,$,D+x/2,H,{strikethrough:k.hidden,textAlign:s.textAlign(k.textAlign)})},b=this.isHorizontal(),E=this._computeTitleHeight();b?u={x:$2(a,this.left+V,this.right-i[0]),y:this.top+V+E,line:0}:u={x:this.left+V,y:$2(a,this.top+E+V,this.bottom-t[0].height),line:0},r8(this.ctx,e.textDirection);let F=x+V;this.legendItems.forEach(($,D)=>{o.strokeStyle=$.fontColor,o.fillStyle=$.fontColor;let k=o.measureText($.text).width,P=s.textAlign($.textAlign||($.textAlign=C.textAlign)),N=f+d+k,I=u.x,Y=u.y;s.setWidth(this.width),b?D>0&&I+N+V>this.right&&(Y=u.y+=F,u.line++,I=u.x=$2(a,this.left+V,this.right-i[u.line])):D>0&&Y+F>this.bottom&&(I=u.x=I+t[u.line].width+V,u.line++,Y=u.y=$2(a,this.top+E+V,this.bottom-t[u.line].height));let z=s.x(I);if(w(z,Y,$),I=Dt(P,I+f+d,b?I+N:this.right,e.rtl),y(s.x(I),Y,$),b)u.x+=N+V;else if(typeof $.text!="string"){let V1=H.lineHeight;u.y+=ls($,V1)+V}else u.y+=F}),i8(this.ctx,e.textDirection)}drawTitle(){let e=this.options,t=e.title,i=t2(t.font),o=n2(t.padding);if(!t.display)return;let a=T0(e.rtl,this.left,this.width),C=this.ctx,n=t.position,s=i.size/2,H=o.top+s,V,L=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),V=this.top+H,L=$2(e.align,L,this.right-d);else{let f=this.columnSizes.reduce((v,x)=>Math.max(v,x.height),0);V=H+$2(e.align,this.top,this.bottom-f-e.labels.padding-this._computeTitleHeight())}let u=$2(n,L,L+d);C.textAlign=a.textAlign(U6(n)),C.textBaseline="middle",C.strokeStyle=t.color,C.fillStyle=t.color,C.font=i.string,$0(C,t.text,u,V,i)}_computeTitleHeight(){let e=this.options.title,t=t2(e.font),i=n2(e.padding);return e.display?t.lineHeight+i.height:0}_getLegendItemAt(e,t){let i,o,a;if(h5(e,this.left,this.right)&&h5(t,this.top,this.bottom)){for(a=this.legendHitBoxes,i=0;i<a.length;++i)if(o=a[i],h5(e,o.left,o.left+o.width)&&h5(t,o.top,o.top+o.height))return this.legendItems[i]}return null}handleEvent(e){let t=this.options;if(!Hh(e.type,t))return;let i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){let o=this._hoveredItem,a=ah(o,i);o&&!a&&O1(t.onLeave,[e,o,this],this),this._hoveredItem=i,i&&!a&&O1(t.onHover,[e,i,this],this)}else i&&O1(t.onClick,[e,i,this],this)}};function Ch(r,e,t,i,o){let a=nh(i,r,e,t),C=sh(o,i,e.lineHeight);return{itemWidth:a,itemHeight:C}}function nh(r,e,t,i){let o=r.text;return o&&typeof o!="string"&&(o=o.reduce((a,C)=>a.length>C.length?a:C)),e+t.size/2+i.measureText(o).width}function sh(r,e,t){let i=r;return typeof e.text!="string"&&(i=ls(e,t)),i}function ls(r,e){let t=r.text?r.text.length:0;return e*t}function Hh(r,e){return!!((r==="mousemove"||r==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(r==="click"||r==="mouseup"))}var cs={id:"legend",_element:A8,start(r,e,t){let i=r.legend=new A8({ctx:r.ctx,options:t,chart:r});P0.configure(r,i,t),P0.addBox(r,i)},stop(r){P0.removeBox(r,r.legend),delete r.legend},beforeUpdate(r,e,t){let i=r.legend;P0.configure(r,i,t),i.options=t},afterUpdate(r){let e=r.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(r,e){e.replay||r.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(r,e,t){let i=e.datasetIndex,o=t.chart;o.isDatasetVisible(i)?(o.hide(i),e.hidden=!0):(o.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:r=>r.chart.options.color,boxWidth:40,padding:10,generateLabels(r){let e=r.data.datasets,{labels:{usePointStyle:t,pointStyle:i,textAlign:o,color:a,useBorderRadius:C,borderRadius:n}}=r.legend.options;return r._getSortedDatasetMetas().map(s=>{let H=s.controller.getStyle(t?0:void 0),V=n2(H.borderWidth);return{text:e[s.index].label,fillStyle:H.backgroundColor,fontColor:a,hidden:!s.visible,lineCap:H.borderCapStyle,lineDash:H.borderDash,lineDashOffset:H.borderDashOffset,lineJoin:H.borderJoinStyle,lineWidth:(V.width+V.height)/4,strokeStyle:H.borderColor,pointStyle:i||H.pointStyle,rotation:H.rotation,textAlign:o||H.textAlign,borderRadius:C&&(n||H.borderRadius),datasetIndex:s.index}},this)}},title:{color:r=>r.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:r=>!r.startsWith("on"),labels:{_scriptable:r=>!["generateLabels","filter","sort"].includes(r)}}};var j4={average(r){if(!r.length)return!1;let e,t,i=new Set,o=0,a=0;for(e=0,t=r.length;e<t;++e){let n=r[e].element;if(n&&n.hasValue()){let s=n.tooltipPosition();i.add(s.x),o+=s.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((n,s)=>n+s)/i.size,y:o/a}},nearest(r,e){if(!r.length)return!1;let t=e.x,i=e.y,o=Number.POSITIVE_INFINITY,a,C,n;for(a=0,C=r.length;a<C;++a){let s=r[a].element;if(s&&s.hasValue()){let H=s.getCenterPoint(),V=y4(e,H);V<o&&(o=V,n=s)}}if(n){let s=n.tooltipPosition();t=s.x,i=s.y}return{x:t,y:i}}};function F5(r,e){return e&&(I1(e)?Array.prototype.push.apply(r,e):r.push(e)),r}function i0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function Vh(r,e){let{element:t,datasetIndex:i,index:o}=e,a=r.getDatasetMeta(i).controller,{label:C,value:n}=a.getLabelAndValue(o);return{chart:r,label:C,parsed:a.getParsed(o),raw:r.data.datasets[i].data[o],formattedValue:n,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:t}}function Pn(r,e){let t=r.chart.ctx,{body:i,footer:o,title:a}=r,{boxWidth:C,boxHeight:n}=e,s=t2(e.bodyFont),H=t2(e.titleFont),V=t2(e.footerFont),L=a.length,d=o.length,u=i.length,f=n2(e.padding),v=f.height,x=0,w=i.reduce((E,F)=>E+F.before.length+F.lines.length+F.after.length,0);if(w+=r.beforeBody.length+r.afterBody.length,L&&(v+=L*H.lineHeight+(L-1)*e.titleSpacing+e.titleMarginBottom),w){let E=e.displayColors?Math.max(n,s.lineHeight):s.lineHeight;v+=u*E+(w-u)*s.lineHeight+(w-1)*e.bodySpacing}d&&(v+=e.footerMarginTop+d*V.lineHeight+(d-1)*e.footerSpacing);let y=0,b=function(E){x=Math.max(x,t.measureText(E).width+y)};return t.save(),t.font=H.string,b1(r.title,b),t.font=s.string,b1(r.beforeBody.concat(r.afterBody),b),y=e.displayColors?C+2+e.boxPadding:0,b1(i,E=>{b1(E.before,b),b1(E.lines,b),b1(E.after,b)}),y=0,t.font=V.string,b1(r.footer,b),t.restore(),x+=f.width,{width:x,height:v}}function Lh(r,e){let{y:t,height:i}=e;return t<i/2?"top":t>r.height-i/2?"bottom":"center"}function lh(r,e,t,i){let{x:o,width:a}=i,C=t.caretSize+t.caretPadding;if(r==="left"&&o+a+C>e.width||r==="right"&&o-a-C<0)return!0}function ch(r,e,t,i){let{x:o,width:a}=t,{width:C,chartArea:{left:n,right:s}}=r,H="center";return i==="center"?H=o<=(n+s)/2?"left":"right":o<=a/2?H="left":o>=C-a/2&&(H="right"),lh(H,r,e,t)&&(H="center"),H}function Dn(r,e,t){let i=t.yAlign||e.yAlign||Lh(r,t);return{xAlign:t.xAlign||e.xAlign||ch(r,e,t,i),yAlign:i}}function Mh(r,e){let{x:t,width:i}=r;return e==="right"?t-=i:e==="center"&&(t-=i/2),t}function dh(r,e,t){let{y:i,height:o}=r;return e==="top"?i+=t:e==="bottom"?i-=o+t:i-=o/2,i}function Rn(r,e,t,i){let{caretSize:o,caretPadding:a,cornerRadius:C}=r,{xAlign:n,yAlign:s}=t,H=o+a,{topLeft:V,topRight:L,bottomLeft:d,bottomRight:u}=t0(C),f=Mh(e,n),v=dh(e,s,H);return s==="center"?n==="left"?f+=H:n==="right"&&(f-=H):n==="left"?f-=Math.max(V,d)+o:n==="right"&&(f+=Math.max(L,u)+o),{x:c2(f,0,i.width-e.width),y:c2(v,0,i.height-e.height)}}function V8(r,e,t){let i=n2(t.padding);return e==="center"?r.x+r.width/2:e==="right"?r.x+r.width-i.right:r.x+i.left}function Bn(r){return F5([],i0(r))}function ph(r,e,t){return E5(r,{tooltip:e,tooltipItems:t,type:"tooltip"})}function zn(r,e){let t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?r.override(t):r}var Ms={beforeTitle:m5,title(r){if(r.length>0){let e=r[0],t=e.chart.data.labels,i=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return t[e.dataIndex]}return""},afterTitle:m5,beforeBody:m5,beforeLabel:m5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let e=r.dataset.label||"";e&&(e+=": ");let t=r.formattedValue;return p1(t)||(e+=t),e},labelColor(r){let t=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let t=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:m5,afterBody:m5,beforeFooter:m5,footer:m5,afterFooter:m5};function D2(r,e,t,i){let o=r[e].call(t,i);return typeof o>"u"?Ms[e].call(t,i):o}var G4=class extends H5{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&t.options.animation&&i.animations,a=new p8(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=ph(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){let{callbacks:i}=t,o=D2(i,"beforeTitle",this,e),a=D2(i,"title",this,e),C=D2(i,"afterTitle",this,e),n=[];return n=F5(n,i0(o)),n=F5(n,i0(a)),n=F5(n,i0(C)),n}getBeforeBody(e,t){return Bn(D2(t.callbacks,"beforeBody",this,e))}getBody(e,t){let{callbacks:i}=t,o=[];return b1(e,a=>{let C={before:[],lines:[],after:[]},n=zn(i,a);F5(C.before,i0(D2(n,"beforeLabel",this,a))),F5(C.lines,D2(n,"label",this,a)),F5(C.after,i0(D2(n,"afterLabel",this,a))),o.push(C)}),o}getAfterBody(e,t){return Bn(D2(t.callbacks,"afterBody",this,e))}getFooter(e,t){let{callbacks:i}=t,o=D2(i,"beforeFooter",this,e),a=D2(i,"footer",this,e),C=D2(i,"afterFooter",this,e),n=[];return n=F5(n,i0(o)),n=F5(n,i0(a)),n=F5(n,i0(C)),n}_createItems(e){let t=this._active,i=this.chart.data,o=[],a=[],C=[],n=[],s,H;for(s=0,H=t.length;s<H;++s)n.push(Vh(this.chart,t[s]));return e.filter&&(n=n.filter((V,L,d)=>e.filter(V,L,d,i))),e.itemSort&&(n=n.sort((V,L)=>e.itemSort(V,L,i))),b1(n,V=>{let L=zn(e.callbacks,V);o.push(D2(L,"labelColor",this,V)),a.push(D2(L,"labelPointStyle",this,V)),C.push(D2(L,"labelTextColor",this,V))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=C,this.dataPoints=n,n}update(e,t){let i=this.options.setContext(this.getContext()),o=this._active,a,C=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{let n=j4[i.position].call(this,o,this._eventPosition);C=this._createItems(i),this.title=this.getTitle(C,i),this.beforeBody=this.getBeforeBody(C,i),this.body=this.getBody(C,i),this.afterBody=this.getAfterBody(C,i),this.footer=this.getFooter(C,i);let s=this._size=Pn(this,i),H=Object.assign({},n,s),V=Dn(this.chart,i,H),L=Rn(i,H,V,this.chart);this.xAlign=V.xAlign,this.yAlign=V.yAlign,a={opacity:1,x:L.x,y:L.y,width:s.width,height:s.height,caretX:n.x,caretY:n.y}}this._tooltipItems=C,this.$context=void 0,a&&this._resolveAnimations().update(this,a),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,i,o){let a=this.getCaretPosition(e,i,o);t.lineTo(a.x1,a.y1),t.lineTo(a.x2,a.y2),t.lineTo(a.x3,a.y3)}getCaretPosition(e,t,i){let{xAlign:o,yAlign:a}=this,{caretSize:C,cornerRadius:n}=i,{topLeft:s,topRight:H,bottomLeft:V,bottomRight:L}=t0(n),{x:d,y:u}=e,{width:f,height:v}=t,x,w,y,b,E,F;return a==="center"?(E=u+v/2,o==="left"?(x=d,w=x-C,b=E+C,F=E-C):(x=d+f,w=x+C,b=E-C,F=E+C),y=x):(o==="left"?w=d+Math.max(s,V)+C:o==="right"?w=d+f-Math.max(H,L)-C:w=this.caretX,a==="top"?(b=u,E=b-C,x=w-C,y=w+C):(b=u+v,E=b+C,x=w+C,y=w-C),F=b),{x1:x,x2:w,x3:y,y1:b,y2:E,y3:F}}drawTitle(e,t,i){let o=this.title,a=o.length,C,n,s;if(a){let H=T0(i.rtl,this.x,this.width);for(e.x=V8(this,i.titleAlign,i),t.textAlign=H.textAlign(i.titleAlign),t.textBaseline="middle",C=t2(i.titleFont),n=i.titleSpacing,t.fillStyle=i.titleColor,t.font=C.string,s=0;s<a;++s)t.fillText(o[s],H.x(e.x),e.y+C.lineHeight/2),e.y+=C.lineHeight+n,s+1===a&&(e.y+=i.titleMarginBottom-n)}}_drawColorBox(e,t,i,o,a){let C=this.labelColors[i],n=this.labelPointStyles[i],{boxHeight:s,boxWidth:H}=a,V=t2(a.bodyFont),L=V8(this,"left",a),d=o.x(L),u=s<V.lineHeight?(V.lineHeight-s)/2:0,f=t.y+u;if(a.usePointStyle){let v={radius:Math.min(H,s)/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:1},x=o.leftForLtr(d,H)+H/2,w=f+s/2;e.strokeStyle=a.multiKeyBackground,e.fillStyle=a.multiKeyBackground,E4(e,v,x,w),e.strokeStyle=C.borderColor,e.fillStyle=C.backgroundColor,E4(e,v,x,w)}else{e.lineWidth=m1(C.borderWidth)?Math.max(...Object.values(C.borderWidth)):C.borderWidth||1,e.strokeStyle=C.borderColor,e.setLineDash(C.borderDash||[]),e.lineDashOffset=C.borderDashOffset||0;let v=o.leftForLtr(d,H),x=o.leftForLtr(o.xPlus(d,1),H-2),w=t0(C.borderRadius);Object.values(w).some(y=>y!==0)?(e.beginPath(),e.fillStyle=a.multiKeyBackground,m3(e,{x:v,y:f,w:H,h:s,radius:w}),e.fill(),e.stroke(),e.fillStyle=C.backgroundColor,e.beginPath(),m3(e,{x,y:f+1,w:H-2,h:s-2,radius:w}),e.fill()):(e.fillStyle=a.multiKeyBackground,e.fillRect(v,f,H,s),e.strokeRect(v,f,H,s),e.fillStyle=C.backgroundColor,e.fillRect(x,f+1,H-2,s-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,t,i){let{body:o}=this,{bodySpacing:a,bodyAlign:C,displayColors:n,boxHeight:s,boxWidth:H,boxPadding:V}=i,L=t2(i.bodyFont),d=L.lineHeight,u=0,f=T0(i.rtl,this.x,this.width),v=function(k){t.fillText(k,f.x(e.x+u),e.y+d/2),e.y+=d+a},x=f.textAlign(C),w,y,b,E,F,$,D;for(t.textAlign=C,t.textBaseline="middle",t.font=L.string,e.x=V8(this,x,i),t.fillStyle=i.bodyColor,b1(this.beforeBody,v),u=n&&x!=="right"?C==="center"?H/2+V:H+2+V:0,E=0,$=o.length;E<$;++E){for(w=o[E],y=this.labelTextColors[E],t.fillStyle=y,b1(w.before,v),b=w.lines,n&&b.length&&(this._drawColorBox(t,e,E,f,i),d=Math.max(L.lineHeight,s)),F=0,D=b.length;F<D;++F)v(b[F]),d=L.lineHeight;b1(w.after,v)}u=0,d=L.lineHeight,b1(this.afterBody,v),e.y-=a}drawFooter(e,t,i){let o=this.footer,a=o.length,C,n;if(a){let s=T0(i.rtl,this.x,this.width);for(e.x=V8(this,i.footerAlign,i),e.y+=i.footerMarginTop,t.textAlign=s.textAlign(i.footerAlign),t.textBaseline="middle",C=t2(i.footerFont),t.fillStyle=i.footerColor,t.font=C.string,n=0;n<a;++n)t.fillText(o[n],s.x(e.x),e.y+C.lineHeight/2),e.y+=C.lineHeight+i.footerSpacing}}drawBackground(e,t,i,o){let{xAlign:a,yAlign:C}=this,{x:n,y:s}=e,{width:H,height:V}=i,{topLeft:L,topRight:d,bottomLeft:u,bottomRight:f}=t0(o.cornerRadius);t.fillStyle=o.backgroundColor,t.strokeStyle=o.borderColor,t.lineWidth=o.borderWidth,t.beginPath(),t.moveTo(n+L,s),C==="top"&&this.drawCaret(e,t,i,o),t.lineTo(n+H-d,s),t.quadraticCurveTo(n+H,s,n+H,s+d),C==="center"&&a==="right"&&this.drawCaret(e,t,i,o),t.lineTo(n+H,s+V-f),t.quadraticCurveTo(n+H,s+V,n+H-f,s+V),C==="bottom"&&this.drawCaret(e,t,i,o),t.lineTo(n+u,s+V),t.quadraticCurveTo(n,s+V,n,s+V-u),C==="center"&&a==="left"&&this.drawCaret(e,t,i,o),t.lineTo(n,s+L),t.quadraticCurveTo(n,s,n+L,s),t.closePath(),t.fill(),o.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){let C=j4[e.position].call(this,this._active,this._eventPosition);if(!C)return;let n=this._size=Pn(this,e),s=Object.assign({},C,this._size),H=Dn(t,e,s),V=Rn(e,s,H,t);(o._to!==V.x||a._to!==V.y)&&(this.xAlign=H.xAlign,this.yAlign=H.yAlign,this.width=n.width,this.height=n.height,this.caretX=C.x,this.caretY=C.y,this._resolveAnimations().update(this,V))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(t);let o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let C=n2(t.padding),n=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&n&&(e.save(),e.globalAlpha=i,this.drawBackground(a,e,o,t),r8(e,t.textDirection),a.y+=C.top,this.drawTitle(a,e,t),this.drawBody(a,e,t),this.drawFooter(a,e,t),i8(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let i=this._active,o=e.map(({datasetIndex:n,index:s})=>{let H=this.chart.getDatasetMeta(n);if(!H)throw new Error("Cannot find a dataset at index "+n);return{datasetIndex:n,element:H.data[s],index:s}}),a=!f7(i,o),C=this._positionChanged(o,t);(a||C)&&(this._active=o,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,i=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let o=this.options,a=this._active||[],C=this._getActiveElements(e,a,t,i),n=this._positionChanged(C,e),s=t||!f7(C,a)||n;return s&&(this._active=C,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,i,o){let a=this.options;if(e.type==="mouseout")return[];if(!o)return t.filter(n=>this.chart.data.datasets[n.datasetIndex]&&this.chart.getDatasetMeta(n.datasetIndex).controller.getParsed(n.index)!==void 0);let C=this.chart.getElementsAtEventForMode(e,a.mode,a,i);return a.reverse&&C.reverse(),C}_positionChanged(e,t){let{caretX:i,caretY:o,options:a}=this,C=j4[a.position].call(this,e,t);return C!==!1&&(i!==C.x||o!==C.y)}};Z(G4,"positioners",j4);var gr={id:"tooltip",_element:G4,positioners:j4,afterInit(r,e,t){t&&(r.tooltip=new G4({chart:r,options:t}))},beforeUpdate(r,e,t){r.tooltip&&r.tooltip.initialize(t)},reset(r,e,t){r.tooltip&&r.tooltip.initialize(t)},afterDraw(r){let e=r.tooltip;if(e&&e._willRender()){let t={tooltip:e};if(r.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",t)}},afterEvent(r,e){if(r.tooltip){let t=e.replay;r.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,e)=>e.bodyFont.size,boxWidth:(r,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Ms},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var uh=(r,e,t,i)=>(typeof e=="string"?(t=r.push(e)-1,i.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function mh(r,e,t,i){let o=r.indexOf(e);if(o===-1)return uh(r,e,t,i);let a=r.lastIndexOf(e);return o!==a?t:o}var hh=(r,e)=>r===null?null:c2(Math.round(r),0,e);function Nn(r){let e=this.getLabels();return r>=0&&r<e.length?e[r]:r}var w7=class extends A3{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let i=this.getLabels();for(let{index:o,label:a}of t)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(p1(e))return null;let i=this.getLabels();return t=isFinite(t)&&i[t]===e?t:mh(i,e,L1(t,e),this._addedLabels),hh(t,i.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),t||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){let e=this.min,t=this.max,i=this.options.offset,o=[],a=this.getLabels();a=e===0&&t===a.length-1?a:a.slice(e,t+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let C=e;C<=t;C++)o.push({value:C});return o}getLabelForValue(e){return Nn.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};Z(w7,"id","category"),Z(w7,"defaults",{ticks:{callback:Nn}});function fh(r,e){let t=[],{bounds:o,step:a,min:C,max:n,precision:s,count:H,maxTicks:V,maxDigits:L,includeBounds:d}=r,u=a||1,f=V-1,{min:v,max:x}=e,w=!p1(C),y=!p1(n),b=!p1(H),E=(x-v)/(L+1),F=P6((x-v)/f/u)*u,$,D,k,P;if(F<1e-14&&!w&&!y)return[{value:v},{value:x}];P=Math.ceil(x/F)-Math.floor(v/F),P>f&&(F=P6(P*F/f/u)*u),p1(s)||($=Math.pow(10,s),F=Math.ceil(F*$)/$),o==="ticks"?(D=Math.floor(v/F)*F,k=Math.ceil(x/F)*F):(D=v,k=x),w&&y&&a&&Ot((n-C)/a,F/1e3)?(P=Math.round(Math.min((n-C)/F,V)),F=(n-C)/P,D=C,k=n):b?(D=w?C:D,k=y?n:k,P=H-1,F=(k-D)/P):(P=(k-D)/F,p3(P,Math.round(P),F/1e3)?P=Math.round(P):P=Math.ceil(P));let N=Math.max(R6(F),R6(D));$=Math.pow(10,p1(s)?N:s),D=Math.round(D*$)/$,k=Math.round(k*$)/$;let I=0;for(w&&(d&&D!==C?(t.push({value:C}),D<C&&I++,p3(Math.round((D+I*F)*$)/$,C,In(C,E,r))&&I++):D<C&&I++);I<P;++I){let Y=Math.round((D+I*F)*$)/$;if(y&&Y>n)break;t.push({value:Y})}return y&&d&&k!==n?t.length&&p3(t[t.length-1].value,n,In(n,E,r))?t[t.length-1].value=n:t.push({value:n}):(!y||k===n)&&t.push({value:k}),t}function In(r,e,{horizontal:t,minRotation:i}){let o=T5(i),a=(t?Math.sin(o):Math.cos(o))||.001,C=.75*e*(""+r).length;return Math.min(e/a,C)}var y7=class extends A3{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return p1(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:i}=this.getUserBounds(),{min:o,max:a}=this,C=s=>o=t?o:s,n=s=>a=i?a:s;if(e){let s=s5(o),H=s5(a);s<0&&H<0?n(0):s>0&&H>0&&C(0)}if(o===a){let s=a===0?1:Math.abs(a*.05);n(a+s),e||C(o-s)}this.min=o,this.max=a}getTickLimit(){let e=this.options.ticks,{maxTicksLimit:t,stepSize:i}=e,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),t=t||11),t&&(o=Math.min(t,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let e=this.options,t=e.ticks,i=this.getTickLimit();i=Math.max(2,i);let o={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},a=this._range||this,C=fh(o,a);return e.bounds==="ticks"&&D6(C,this,"value"),e.reverse?(C.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),C}configure(){let e=this.ticks,t=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){let o=(i-t)/Math.max(e.length-1,1)/2;t-=o,i+=o}this._startValue=t,this._endValue=i,this._valueRange=i-t}getLabelForValue(e){return $4(e,this.chart.options.locale,this.options.ticks.format)}},R0=class extends y7{determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=Y1(e)?e:0,this.max=Y1(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,i=T5(this.options.ticks.minRotation),o=(e?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,a.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}};Z(R0,"id","linear"),Z(R0,"defaults",{ticks:{callback:T4.formatters.numeric}});var Q4=r=>Math.floor($5(r)),f3=(r,e)=>Math.pow(10,Q4(r)+e);function Wn(r){return r/Math.pow(10,Q4(r))===1}function Un(r,e,t){let i=Math.pow(10,t),o=Math.floor(r/i);return Math.ceil(e/i)-o}function Ah(r,e){let t=e-r,i=Q4(t);for(;Un(r,e,i)>10;)i++;for(;Un(r,e,i)<10;)i--;return Math.min(i,Q4(r))}function vh(r,{min:e,max:t}){e=O2(r.min,e);let i=[],o=Q4(e),a=Ah(e,t),C=a<0?Math.pow(10,Math.abs(a)):1,n=Math.pow(10,a),s=o>a?Math.pow(10,o):0,H=Math.round((e-s)*C)/C,V=Math.floor((e-s)/n/10)*n*10,L=Math.floor((H-V)/Math.pow(10,a)),d=O2(r.min,Math.round((s+V+L*Math.pow(10,a))*C)/C);for(;d<t;)i.push({value:d,major:Wn(d),significand:L}),L>=10?L=L<15?15:20:L++,L>=20&&(a++,L=2,C=a>=0?1:C),d=Math.round((s+V+L*Math.pow(10,a))*C)/C;let u=O2(r.max,d);return i.push({value:u,major:Wn(u),significand:L}),i}var L8=class extends A3{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let i=y7.prototype.parse.apply(this,[e,t]);if(i===0){this._zero=!0;return}return Y1(i)&&i>0?i:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=Y1(e)?Math.max(0,e):null,this.max=Y1(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Y1(this._userMin)&&(this.min=e===f3(this.min,0)?f3(this.min,-1):f3(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),i=this.min,o=this.max,a=n=>i=e?i:n,C=n=>o=t?o:n;i===o&&(i<=0?(a(1),C(10)):(a(f3(i,-1)),C(f3(o,1)))),i<=0&&a(f3(o,-1)),o<=0&&C(f3(i,1)),this.min=i,this.max=o}buildTicks(){let e=this.options,t={min:this._userMin,max:this._userMax},i=vh(t,this);return e.bounds==="ticks"&&D6(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":$4(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=$5(e),this._valueRange=$5(this.max)-$5(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:($5(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}};Z(L8,"id","logarithmic"),Z(L8,"defaults",{ticks:{callback:T4.formatters.logarithmic,major:{enabled:!0}}});function vr(r){let e=r.ticks;if(e.display&&r.display){let t=n2(e.backdropPadding);return L1(e.font&&e.font.size,G1.font.size)+t.height}return 0}function xh(r,e,t){return t=I1(t)?t:[t],{w:zt(r,e.string,t),h:t.length*e.lineHeight}}function jn(r,e,t,i,o){return r===i||r===o?{start:e-t/2,end:e+t/2}:r<i||r>o?{start:e-t,end:e}:{start:e,end:e+t}}function gh(r){let e={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},t=Object.assign({},e),i=[],o=[],a=r._pointLabels.length,C=r.options.pointLabels,n=C.centerPointLabels?F1/a:0;for(let s=0;s<a;s++){let H=C.setContext(r.getPointLabelContext(s));o[s]=H.padding;let V=r.getPointPosition(s,r.drawingArea+o[s],n),L=t2(H.font),d=xh(r.ctx,L,r._pointLabels[s]);i[s]=d;let u=l2(r.getIndexAngle(s)+n),f=Math.round(Z4(u)),v=jn(f,V.x,d.w,0,180),x=jn(f,V.y,d.h,90,270);_h(t,e,u,v,x)}r.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),r._pointLabelItems=yh(r,i,o)}function _h(r,e,t,i,o){let a=Math.abs(Math.sin(t)),C=Math.abs(Math.cos(t)),n=0,s=0;i.start<e.l?(n=(e.l-i.start)/a,r.l=Math.min(r.l,e.l-n)):i.end>e.r&&(n=(i.end-e.r)/a,r.r=Math.max(r.r,e.r+n)),o.start<e.t?(s=(e.t-o.start)/C,r.t=Math.min(r.t,e.t-s)):o.end>e.b&&(s=(o.end-e.b)/C,r.b=Math.max(r.b,e.b+s))}function wh(r,e,t){let i=r.drawingArea,{extra:o,additionalAngle:a,padding:C,size:n}=t,s=r.getPointPosition(e,i+o+C,a),H=Math.round(Z4(l2(s.angle+e2))),V=kh(s.y,n.h,H),L=Sh(H),d=Zh(s.x,n.w,L);return{visible:!0,x:s.x,y:V,textAlign:L,left:d,top:V,right:d+n.w,bottom:V+n.h}}function bh(r,e){if(!e)return!0;let{left:t,top:i,right:o,bottom:a}=r;return!(u5({x:t,y:i},e)||u5({x:t,y:a},e)||u5({x:o,y:i},e)||u5({x:o,y:a},e))}function yh(r,e,t){let i=[],o=r._pointLabels.length,a=r.options,{centerPointLabels:C,display:n}=a.pointLabels,s={extra:vr(a)/2,additionalAngle:C?F1/o:0},H;for(let V=0;V<o;V++){s.padding=t[V],s.size=e[V];let L=wh(r,V,s);i.push(L),n==="auto"&&(L.visible=bh(L,H),L.visible&&(H=L))}return i}function Sh(r){return r===0||r===180?"center":r<180?"left":"right"}function Zh(r,e,t){return t==="right"?r-=e:t==="center"&&(r-=e/2),r}function kh(r,e,t){return t===90||t===270?r-=e/2:(t>270||t<90)&&(r-=e),r}function Oh(r,e,t){let{left:i,top:o,right:a,bottom:C}=t,{backdropColor:n}=e;if(!p1(n)){let s=t0(e.borderRadius),H=n2(e.backdropPadding);r.fillStyle=n;let V=i-H.left,L=o-H.top,d=a-i+H.width,u=C-o+H.height;Object.values(s).some(f=>f!==0)?(r.beginPath(),m3(r,{x:V,y:L,w:d,h:u,radius:s}),r.fill()):r.fillRect(V,L,d,u)}}function $h(r,e){let{ctx:t,options:{pointLabels:i}}=r;for(let o=e-1;o>=0;o--){let a=r._pointLabelItems[o];if(!a.visible)continue;let C=i.setContext(r.getPointLabelContext(o));Oh(t,C,a);let n=t2(C.font),{x:s,y:H,textAlign:V}=a;$0(t,r._pointLabels[o],s,H+n.lineHeight/2,n,{color:C.color,textAlign:V,textBaseline:"middle"})}}function ds(r,e,t,i){let{ctx:o}=r;if(t)o.arc(r.xCenter,r.yCenter,e,0,X1);else{let a=r.getPointPosition(0,e);o.moveTo(a.x,a.y);for(let C=1;C<i;C++)a=r.getPointPosition(C,e),o.lineTo(a.x,a.y)}}function Th(r,e,t,i,o){let a=r.ctx,C=e.circular,{color:n,lineWidth:s}=e;!C&&!i||!n||!s||t<0||(a.save(),a.strokeStyle=n,a.lineWidth=s,a.setLineDash(o.dash||[]),a.lineDashOffset=o.dashOffset,a.beginPath(),ds(r,t,C,i),a.closePath(),a.stroke(),a.restore())}function Eh(r,e,t){return E5(r,{label:t,index:e,type:"pointLabel"})}var g7=class extends y7{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=n2(vr(this.options)/2),t=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(t,i)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=Y1(e)&&!isNaN(e)?e:0,this.max=Y1(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/vr(this.options))}generateTickLabels(e){y7.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,i)=>{let o=O1(this.options.pointLabels.callback,[t,i],this);return o||o===0?o:""}).filter((t,i)=>this.chart.getDataVisibility(i))}fit(){let e=this.options;e.display&&e.pointLabels.display?gh(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,i,o){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,i,o))}getIndexAngle(e){let t=X1/(this._pointLabels.length||1),i=this.options.startAngle||0;return l2(e*t+T5(i))}getDistanceFromCenterForValue(e){if(p1(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(p1(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let i=t[e];return Eh(this.getContext(),e,i)}}getPointPosition(e,t,i=0){let o=this.getIndexAngle(e)-e2+i;return{x:Math.cos(o)*t+this.xCenter,y:Math.sin(o)*t+this.yCenter,angle:o}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:i,right:o,bottom:a}=this._pointLabelItems[e];return{left:t,top:i,right:o,bottom:a}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let i=this.ctx;i.save(),i.beginPath(),ds(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:i,grid:o,border:a}=t,C=this._pointLabels.length,n,s,H;if(t.pointLabels.display&&$h(this,C),o.display&&this.ticks.forEach((V,L)=>{if(L!==0||L===0&&this.min<0){s=this.getDistanceFromCenterForValue(V.value);let d=this.getContext(L),u=o.setContext(d),f=a.setContext(d);Th(this,u,s,C,f)}}),i.display){for(e.save(),n=C-1;n>=0;n--){let V=i.setContext(this.getPointLabelContext(n)),{color:L,lineWidth:d}=V;!d||!L||(e.lineWidth=d,e.strokeStyle=L,e.setLineDash(V.borderDash),e.lineDashOffset=V.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),H=this.getPointPosition(n,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(H.x,H.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,i=t.ticks;if(!i.display)return;let o=this.getIndexAngle(0),a,C;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(o),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((n,s)=>{if(s===0&&this.min>=0&&!t.reverse)return;let H=i.setContext(this.getContext(s)),V=t2(H.font);if(a=this.getDistanceFromCenterForValue(this.ticks[s].value),H.showLabelBackdrop){e.font=V.string,C=e.measureText(n.label).width,e.fillStyle=H.backdropColor;let L=n2(H.backdropPadding);e.fillRect(-C/2-L.left,-a-V.size/2-L.top,C+L.width,V.size+L.height)}$0(e,n.label,0,-a,V,{color:H.color,strokeColor:H.textStrokeColor,strokeWidth:H.textStrokeWidth})}),e.restore()}drawTitle(){}};Z(g7,"id","radialLinear"),Z(g7,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:T4.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),Z(g7,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),Z(g7,"descriptors",{angleLines:{_fallback:"grid"}});var x8={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},R2=Object.keys(x8);function Gn(r,e){return r-e}function qn(r,e){if(p1(e))return null;let t=r._adapter,{parser:i,round:o,isoWeekday:a}=r._parseOpts,C=e;return typeof i=="function"&&(C=i(C)),Y1(C)||(C=typeof i=="string"?t.parse(C,i):t.parse(C)),C===null?null:(o&&(C=o==="week"&&(u3(a)||a===!0)?t.startOf(C,"isoWeek",a):t.startOf(C,o)),+C)}function Qn(r,e,t,i){let o=R2.length;for(let a=R2.indexOf(r);a<o-1;++a){let C=x8[R2[a]],n=C.steps?C.steps:Number.MAX_SAFE_INTEGER;if(C.common&&Math.ceil((t-e)/(n*C.size))<=i)return R2[a]}return R2[o-1]}function Fh(r,e,t,i,o){for(let a=R2.length-1;a>=R2.indexOf(t);a--){let C=R2[a];if(x8[C].common&&r._adapter.diff(o,i,C)>=e-1)return C}return R2[t?R2.indexOf(t):0]}function Ph(r){for(let e=R2.indexOf(r)+1,t=R2.length;e<t;++e)if(x8[R2[e]].common)return R2[e]}function Yn(r,e,t){if(!t)r[e]=!0;else if(t.length){let{lo:i,hi:o}=O4(t,e),a=t[i]>=e?t[i]:t[o];r[a]=!0}}function Dh(r,e,t,i){let o=r._adapter,a=+o.startOf(e[0].value,i),C=e[e.length-1].value,n,s;for(n=a;n<=C;n=+o.add(n,1,i))s=t[n],s>=0&&(e[s].major=!0);return e}function Kn(r,e,t){let i=[],o={},a=e.length,C,n;for(C=0;C<a;++C)n=e[C],o[n]=C,i.push({value:n,major:!1});return a===0||!t?i:Dh(r,i,o,t)}var b7=class extends A3{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let i=e.time||(e.time={}),o=this._adapter=new pu._date(e.adapters.date);o.init(t),M3(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:qn(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,i=e.time.unit||"day",{min:o,max:a,minDefined:C,maxDefined:n}=this.getUserBounds();function s(H){!C&&!isNaN(H.min)&&(o=Math.min(o,H.min)),!n&&!isNaN(H.max)&&(a=Math.max(a,H.max))}(!C||!n)&&(s(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&s(this.getMinMax(!1))),o=Y1(o)&&!isNaN(o)?o:+t.startOf(Date.now(),i),a=Y1(a)&&!isNaN(a)?a:+t.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],i=e[e.length-1]),{min:t,max:i}}buildTicks(){let e=this.options,t=e.time,i=e.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);let a=this.min,C=this.max,n=Et(o,a,C);return this._unit=t.unit||(i.autoSkip?Qn(t.minUnit,this.min,this.max,this._getLabelCapacity(a)):Fh(this,n.length,t.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Ph(this._unit),this.initOffsets(o),e.reverse&&n.reverse(),Kn(this,n,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,i=0,o,a;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?t=1-o:t=(this.getDecimalForValue(e[1])-o)/2,a=this.getDecimalForValue(e[e.length-1]),e.length===1?i=a:i=(a-this.getDecimalForValue(e[e.length-2]))/2);let C=e.length<3?.5:.25;t=c2(t,0,C),i=c2(i,0,C),this._offsets={start:t,end:i,factor:1/(t+1+i)}}_generate(){let e=this._adapter,t=this.min,i=this.max,o=this.options,a=o.time,C=a.unit||Qn(a.minUnit,t,i,this._getLabelCapacity(t)),n=L1(o.ticks.stepSize,1),s=C==="week"?a.isoWeekday:!1,H=u3(s)||s===!0,V={},L=t,d,u;if(H&&(L=+e.startOf(L,"isoWeek",s)),L=+e.startOf(L,H?"day":C),e.diff(i,t,C)>1e5*n)throw new Error(t+" and "+i+" are too far apart with stepSize of "+n+" "+C);let f=o.ticks.source==="data"&&this.getDataTimestamps();for(d=L,u=0;d<i;d=+e.add(d,n,C),u++)Yn(V,d,f);return(d===i||o.bounds==="ticks"||u===1)&&Yn(V,d,f),Object.keys(V).sort(Gn).map(v=>+v)}getLabelForValue(e){let t=this._adapter,i=this.options.time;return i.tooltipFormat?t.format(e,i.tooltipFormat):t.format(e,i.displayFormats.datetime)}format(e,t){let o=this.options.time.displayFormats,a=this._unit,C=t||o[a];return this._adapter.format(e,C)}_tickFormatFunction(e,t,i,o){let a=this.options,C=a.ticks.callback;if(C)return O1(C,[e,t,i],this);let n=a.time.displayFormats,s=this._unit,H=this._majorUnit,V=s&&n[s],L=H&&n[H],d=i[t],u=H&&L&&d&&d.major;return this._adapter.format(e,o||(u?L:V))}generateTickLabels(e){let t,i,o;for(t=0,i=e.length;t<i;++t)o=e[t],o.label=this._tickFormatFunction(o.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+i)*t.factor)}getValueForPixel(e){let t=this._offsets,i=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,i=this.ctx.measureText(e).width,o=T5(this.isHorizontal()?t.maxRotation:t.minRotation),a=Math.cos(o),C=Math.sin(o),n=this._resolveTickFontOptions(0).size;return{w:i*a+n*C,h:i*C+n*a}}_getLabelCapacity(e){let t=this.options.time,i=t.displayFormats,o=i[t.unit]||i.millisecond,a=this._tickFormatFunction(e,0,Kn(this,[e],this._majorUnit),o),C=this._getLabelSize(a),n=Math.floor(this.isHorizontal()?this.width/C.w:this.height/C.h)-1;return n>0?n:1}getDataTimestamps(){let e=this._cache.data||[],t,i;if(e.length)return e;let o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(t=0,i=o.length;t<i;++t)e=e.concat(o[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,i;if(e.length)return e;let o=this.getLabels();for(t=0,i=o.length;t<i;++t)e.push(qn(this,o[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return N6(e.sort(Gn))}};Z(b7,"id","time"),Z(b7,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function l8(r,e,t){let i=0,o=r.length-1,a,C,n,s;t?(e>=r[i].pos&&e<=r[o].pos&&({lo:i,hi:o}=J5(r,"pos",e)),{pos:a,time:n}=r[i],{pos:C,time:s}=r[o]):(e>=r[i].time&&e<=r[o].time&&({lo:i,hi:o}=J5(r,"time",e)),{time:a,pos:n}=r[i],{time:C,pos:s}=r[o]);let H=C-a;return H?n+(s-n)*(e-a)/H:n}var c8=class extends b7{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=l8(t,this.min),this._tableRange=l8(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:i}=this,o=[],a=[],C,n,s,H,V;for(C=0,n=e.length;C<n;++C)H=e[C],H>=t&&H<=i&&o.push(H);if(o.length<2)return[{time:t,pos:0},{time:i,pos:1}];for(C=0,n=o.length;C<n;++C)V=o[C+1],s=o[C-1],H=o[C],Math.round((V+s)/2)!==H&&a.push({time:H,pos:C/(n-1)});return a}_generate(){let e=this.min,t=this.max,i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(t)||i.length===1)&&i.push(t),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),i=this.getLabelTimestamps();return t.length&&i.length?e=this.normalize(t.concat(i)):e=t.length?t:i,e=this._cache.all=e,e}getDecimalForValue(e){return(l8(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,i=this.getDecimalForPixel(e)/t.factor-t.end;return l8(this._table,i*this._tableRange+this._minPos,!0)}};Z(c8,"id","timeseries"),Z(c8,"defaults",b7.defaults);var ps=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),X4={toTextLines:function(r){var e=[],t;for(r=[].concat(r);r.length;)t=r.pop(),typeof t=="string"?e.unshift.apply(e,t.split(`
`)):Array.isArray(t)?r.push.apply(r,t):p1(r)||e.unshift(""+t);return e},textSize:function(r,e,t){var i=[].concat(e),o=i.length,a=r.font,C=0,n;for(r.font=t.string,n=0;n<o;++n)C=Math.max(r.measureText(i[n]).width,C);return r.font=a,{height:o*t.lineHeight,width:C}},bound:function(r,e,t){return Math.max(r,Math.min(e,t))},arrayDiff:function(r,e){var t=r.slice(),i=[],o,a,C,n;for(o=0,C=e.length;o<C;++o)n=e[o],a=t.indexOf(n),a===-1?i.push([n,1]):t.splice(a,1);for(o=0,C=t.length;o<C;++o)i.push([t[o],-1]);return i},rasterize:function(r){return Math.round(r*ps)/ps}};function _r(r,e){var t=e.x,i=e.y;if(t===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var o=r.x-t,a=r.y-i,C=Math.sqrt(o*o+a*a);return{x:C?o/C:0,y:C?a/C:-1}}function Rh(r,e,t,i,o){switch(o){case"center":t=i=0;break;case"bottom":t=0,i=1;break;case"right":t=1,i=0;break;case"left":t=-1,i=0;break;case"top":t=0,i=-1;break;case"start":t=-t,i=-i;break;case"end":break;default:o*=Math.PI/180,t=Math.cos(o),i=Math.sin(o);break}return{x:r,y:e,vx:t,vy:i}}var Bh=0,ms=1,hs=2,fs=4,As=8;function g8(r,e,t){var i=Bh;return r<t.left?i|=ms:r>t.right&&(i|=hs),e<t.top?i|=As:e>t.bottom&&(i|=fs),i}function zh(r,e){for(var t=r.x0,i=r.y0,o=r.x1,a=r.y1,C=g8(t,i,e),n=g8(o,a,e),s,H,V;!(!(C|n)||C&n);)s=C||n,s&As?(H=t+(o-t)*(e.top-i)/(a-i),V=e.top):s&fs?(H=t+(o-t)*(e.bottom-i)/(a-i),V=e.bottom):s&hs?(V=i+(a-i)*(e.right-t)/(o-t),H=e.right):s&ms&&(V=i+(a-i)*(e.left-t)/(o-t),H=e.left),s===C?(t=H,i=V,C=g8(t,i,e)):(o=H,a=V,n=g8(o,a,e));return{x0:t,x1:o,y0:i,y1:a}}function _8(r,e){var t=e.anchor,i=r,o,a;return e.clamp&&(i=zh(i,e.area)),t==="start"?(o=i.x0,a=i.y0):t==="end"?(o=i.x1,a=i.y1):(o=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),Rh(o,a,r.vx,r.vy,e.align)}var w8={arc:function(r,e){var t=(r.startAngle+r.endAngle)/2,i=Math.cos(t),o=Math.sin(t),a=r.innerRadius,C=r.outerRadius;return _8({x0:r.x+i*a,y0:r.y+o*a,x1:r.x+i*C,y1:r.y+o*C,vx:i,vy:o},e)},point:function(r,e){var t=_r(r,e.origin),i=t.x*r.options.radius,o=t.y*r.options.radius;return _8({x0:r.x-i,y0:r.y-o,x1:r.x+i,y1:r.y+o,vx:t.x,vy:t.y},e)},bar:function(r,e){var t=_r(r,e.origin),i=r.x,o=r.y,a=0,C=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(o=Math.min(r.y,r.base),C=Math.abs(r.base-r.y)),_8({x0:i,y0:o+C,x1:i+a,y1:o,vx:t.x,vy:t.y},e)},fallback:function(r,e){var t=_r(r,e.origin);return _8({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:t.x,vy:t.y},e)}},C0=X4.rasterize;function Nh(r){var e=r.borderWidth||0,t=r.padding,i=r.size.height,o=r.size.width,a=-o/2,C=-i/2;return{frame:{x:a-t.left-e,y:C-t.top-e,w:o+t.width+e*2,h:i+t.height+e*2},text:{x:a,y:C,w:o,h:i}}}function Ih(r,e){var t=e.chart.getDatasetMeta(e.datasetIndex).vScale;if(!t)return null;if(t.xCenter!==void 0&&t.yCenter!==void 0)return{x:t.xCenter,y:t.yCenter};var i=t.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function Wh(r){return r instanceof E0?w8.arc:r instanceof A5?w8.point:r instanceof v5?w8.bar:w8.fallback}function Uh(r,e,t,i,o,a){var C=Math.PI/2;if(a){var n=Math.min(a,o/2,i/2),s=e+n,H=t+n,V=e+i-n,L=t+o-n;r.moveTo(e,H),s<V&&H<L?(r.arc(s,H,n,-Math.PI,-C),r.arc(V,H,n,-C,0),r.arc(V,L,n,0,C),r.arc(s,L,n,C,Math.PI)):s<V?(r.moveTo(s,t),r.arc(V,H,n,-C,C),r.arc(s,H,n,C,Math.PI+C)):H<L?(r.arc(s,H,n,-Math.PI,0),r.arc(s,L,n,0,Math.PI)):r.arc(s,H,n,-Math.PI,Math.PI),r.closePath(),r.moveTo(e,t)}else r.rect(e,t,i,o)}function jh(r,e,t){var i=t.backgroundColor,o=t.borderColor,a=t.borderWidth;!i&&(!o||!a)||(r.beginPath(),Uh(r,C0(e.x)+a/2,C0(e.y)+a/2,C0(e.w)-a,C0(e.h)-a,t.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),o&&a&&(r.strokeStyle=o,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function Gh(r,e,t){var i=t.lineHeight,o=r.w,a=r.x,C=r.y+i/2;return e==="center"?a+=o/2:(e==="end"||e==="right")&&(a+=o),{h:i,w:o,x:a,y:C}}function qh(r,e,t){var i=r.shadowBlur,o=t.stroked,a=C0(t.x),C=C0(t.y),n=C0(t.w);o&&r.strokeText(e,a,C,n),t.filled&&(i&&o&&(r.shadowBlur=0),r.fillText(e,a,C,n),i&&o&&(r.shadowBlur=i))}function Qh(r,e,t,i){var o=i.textAlign,a=i.color,C=!!a,n=i.font,s=e.length,H=i.textStrokeColor,V=i.textStrokeWidth,L=H&&V,d;if(!(!s||!C&&!L))for(t=Gh(t,o,n),r.font=n.string,r.textAlign=o,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,C&&(r.fillStyle=a),L&&(r.lineJoin="round",r.lineWidth=V,r.strokeStyle=H),d=0,s=e.length;d<s;++d)qh(r,e[d],{stroked:L,filled:C,w:t.w,x:t.x,y:t.y+t.h*d})}var vs=function(r,e,t,i){var o=this;o._config=r,o._index=i,o._model=null,o._rects=null,o._ctx=e,o._el=t};q2(vs.prototype,{_modelize:function(r,e,t,i){var o=this,a=o._index,C=t2(N1([t.font,{}],i,a)),n=N1([t.color,G1.color],i,a);return{align:N1([t.align,"center"],i,a),anchor:N1([t.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:N1([t.backgroundColor,null],i,a),borderColor:N1([t.borderColor,null],i,a),borderRadius:N1([t.borderRadius,0],i,a),borderWidth:N1([t.borderWidth,0],i,a),clamp:N1([t.clamp,!1],i,a),clip:N1([t.clip,!1],i,a),color:n,display:r,font:C,lines:e,offset:N1([t.offset,4],i,a),opacity:N1([t.opacity,1],i,a),origin:Ih(o._el,i),padding:n2(N1([t.padding,4],i,a)),positioner:Wh(o._el),rotation:N1([t.rotation,0],i,a)*(Math.PI/180),size:X4.textSize(o._ctx,e,C),textAlign:N1([t.textAlign,"start"],i,a),textShadowBlur:N1([t.textShadowBlur,0],i,a),textShadowColor:N1([t.textShadowColor,n],i,a),textStrokeColor:N1([t.textStrokeColor,n],i,a),textStrokeWidth:N1([t.textStrokeWidth,0],i,a)}},update:function(r){var e=this,t=null,i=null,o=e._index,a=e._config,C,n,s,H=N1([a.display,!0],r,o);H&&(C=r.dataset.data[o],n=L1(O1(a.formatter,[C,r]),C),s=p1(n)?[]:X4.toTextLines(n),s.length&&(t=e._modelize(H,s,a,r),i=Nh(t))),e._model=t,e._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,e){var t=this,i=r.ctx,o=t._model,a=t._rects,C;this.visible()&&(i.save(),o.clip&&(C=o.area,i.beginPath(),i.rect(C.left,C.top,C.right-C.left,C.bottom-C.top),i.clip()),i.globalAlpha=X4.bound(0,o.opacity,1),i.translate(C0(e.x),C0(e.y)),i.rotate(o.rotation),jh(i,a.frame,o),Qh(i,o.lines,a.text,o),i.restore())}});var Yh=Number.MIN_SAFE_INTEGER||-9007199254740991,Kh=Number.MAX_SAFE_INTEGER||9007199254740991;function K4(r,e,t){var i=Math.cos(t),o=Math.sin(t),a=e.x,C=e.y;return{x:a+i*(r.x-a)-o*(r.y-C),y:C+o*(r.x-a)+i*(r.y-C)}}function us(r,e){var t=Kh,i=Yh,o=e.origin,a,C,n,s,H;for(a=0;a<r.length;++a)C=r[a],n=C.x-o.x,s=C.y-o.y,H=e.vx*n+e.vy*s,t=Math.min(t,H),i=Math.max(i,H);return{min:t,max:i}}function b8(r,e){var t=e.x-r.x,i=e.y-r.y,o=Math.sqrt(t*t+i*i);return{vx:(e.x-r.x)/o,vy:(e.y-r.y)/o,origin:r,ln:o}}var xs=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};q2(xs.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,e,t){this._rotation=t,this._rect={x:e.x+r.x,y:e.y+r.y,w:e.w,h:e.h}},contains:function(r){var e=this,t=1,i=e._rect;return r=K4(r,e.center(),-e._rotation),!(r.x<i.x-t||r.y<i.y-t||r.x>i.x+i.w+t*2||r.y>i.y+i.h+t*2)},intersects:function(r){var e=this._points(),t=r._points(),i=[b8(e[0],e[1]),b8(e[0],e[3])],o,a,C;for(this._rotation!==r._rotation&&i.push(b8(t[0],t[1]),b8(t[0],t[3])),o=0;o<i.length;++o)if(a=us(e,i[o]),C=us(t,i[o]),a.max<C.min||C.max<a.min)return!1;return!0},_points:function(){var r=this,e=r._rect,t=r._rotation,i=r.center();return[K4({x:e.x,y:e.y},i,t),K4({x:e.x+e.w,y:e.y},i,t),K4({x:e.x+e.w,y:e.y+e.h},i,t),K4({x:e.x,y:e.y+e.h},i,t)]}});function gs(r,e,t){var i=e.positioner(r,e),o=i.vx,a=i.vy;if(!o&&!a)return{x:i.x,y:i.y};var C=t.w,n=t.h,s=e.rotation,H=Math.abs(C/2*Math.cos(s))+Math.abs(n/2*Math.sin(s)),V=Math.abs(C/2*Math.sin(s))+Math.abs(n/2*Math.cos(s)),L=1/Math.max(Math.abs(o),Math.abs(a));return H*=o*L,V*=a*L,H+=e.offset*o,V+=e.offset*a,{x:i.x+H,y:i.y+V}}function Xh(r,e){var t,i,o,a;for(t=r.length-1;t>=0;--t)for(o=r[t].$layout,i=t-1;i>=0&&o._visible;--i)a=r[i].$layout,a._visible&&o._box.intersects(a._box)&&e(o,a);return r}function Jh(r){var e,t,i,o,a,C,n;for(e=0,t=r.length;e<t;++e)i=r[e],o=i.$layout,o._visible&&(n=new Proxy(i._el,{get:(s,H)=>s.getProps([H],!0)[H]}),a=i.geometry(),C=gs(n,i.model(),a),o._box.update(C,a,i.rotation()));return Xh(r,function(s,H){var V=s._hidable,L=H._hidable;V&&L||L?H._visible=!1:V&&(s._visible=!1)})}var J4={prepare:function(r){var e=[],t,i,o,a,C;for(t=0,o=r.length;t<o;++t)for(i=0,a=r[t].length;i<a;++i)C=r[t][i],e.push(C),C.$layout={_box:new xs,_hidable:!1,_visible:!0,_set:t,_idx:C._index};return e.sort(function(n,s){var H=n.$layout,V=s.$layout;return H._idx===V._idx?V._set-H._set:V._idx-H._idx}),this.update(e),e},update:function(r){var e=!1,t,i,o,a,C;for(t=0,i=r.length;t<i;++t)o=r[t],a=o.model(),C=o.$layout,C._hidable=a&&a.display==="auto",C._visible=o.visible(),e|=C._hidable;e&&Jh(r)},lookup:function(r,e){var t,i;for(t=r.length-1;t>=0;--t)if(i=r[t].$layout,i&&i._visible&&i._box.contains(e))return r[t];return null},draw:function(r,e){var t,i,o,a,C,n;for(t=0,i=e.length;t<i;++t)o=e[t],a=o.$layout,a._visible&&(C=o.geometry(),n=gs(o._el,o.model(),C),a._box.update(n,C,o.rotation()),o.draw(r,n))}},ef=function(r){if(p1(r))return null;var e=r,t,i,o;if(m1(r))if(!p1(r.label))e=r.label;else if(!p1(r.r))e=r.r;else for(e="",t=Object.keys(r),o=0,i=t.length;o<i;++o)e+=(o!==0?", ":"")+t[o]+": "+r[t[o]];return""+e},tf={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:ef,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},B2="$datalabels",_s="$default";function rf(r,e){var t=r.datalabels,i={},o=[],a,C;return t===!1?null:(t===!0&&(t={}),e=q2({},[e,t]),a=e.labels||{},C=Object.keys(a),delete e.labels,C.length?C.forEach(function(n){a[n]&&o.push(q2({},[e,a[n],{_key:n}]))}):o.push(e),i=o.reduce(function(n,s){return b1(s.listeners||{},function(H,V){n[V]=n[V]||{},n[V][s._key||_s]=H}),delete s.listeners,n},{}),{labels:o,listeners:i})}function wr(r,e,t,i){if(e){var o=t.$context,a=t.$groups,C;e[a._set]&&(C=e[a._set][a._key],C&&O1(C,[o,i])===!0&&(r[B2]._dirty=!0,t.update(o)))}}function of(r,e,t,i,o){var a,C;!t&&!i||(t?i?t!==i&&(C=a=!0):C=!0:a=!0,C&&wr(r,e.leave,t,o),a&&wr(r,e.enter,i,o))}function af(r,e){var t=r[B2],i=t._listeners,o,a;if(!(!i.enter&&!i.leave)){if(e.type==="mousemove")a=J4.lookup(t._labels,e);else if(e.type!=="mouseout")return;o=t._hovered,t._hovered=a,of(r,i,o,a,e)}}function Cf(r,e){var t=r[B2],i=t._listeners.click,o=i&&J4.lookup(t._labels,e);o&&wr(r,i,o,e)}var ws={id:"datalabels",defaults:tf,beforeInit:function(r){r[B2]={_actives:[]}},beforeUpdate:function(r){var e=r[B2];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(r,e,t){var i=e.index,o=r[B2],a=o._datasets[i]=[],C=r.isDatasetVisible(i),n=r.data.datasets[i],s=rf(n,t),H=e.meta.data||[],V=r.ctx,L,d,u,f,v,x,w,y;for(V.save(),L=0,u=H.length;L<u;++L)if(w=H[L],w[B2]=[],C&&w&&r.getDataVisibility(L)&&!w.skip)for(d=0,f=s.labels.length;d<f;++d)v=s.labels[d],x=v._key,y=new vs(v,V,w,L),y.$groups={_set:i,_key:x||_s},y.$context={active:!1,chart:r,dataIndex:L,dataset:n,datasetIndex:i},y.update(y.$context),w[B2].push(y),a.push(y);V.restore(),q2(o._listeners,s.listeners,{merger:function(b,E,F){E[b]=E[b]||{},E[b][e.index]=F[b],o._listened=!0}})},afterUpdate:function(r){r[B2]._labels=J4.prepare(r[B2]._datasets)},afterDatasetsDraw:function(r){J4.draw(r,r[B2]._labels)},beforeEvent:function(r,e){if(r[B2]._listened){var t=e.event;switch(t.type){case"mousemove":case"mouseout":af(r,t);break;case"click":Cf(r,t);break}}},afterEvent:function(r){var e=r[B2],t=e._actives,i=e._actives=r.getActiveElements(),o=X4.arrayDiff(t,i),a,C,n,s,H,V,L;for(a=0,C=o.length;a<C;++a)if(H=o[a],H[1])for(L=H[0].element[B2]||[],n=0,s=L.length;n<s;++n)V=L[n],V.$context.active=H[1]===1,V.update(V.$context);(e._dirty||o.length)&&(J4.update(e._labels),r.render()),delete e._dirty}};function y8(r){if(r===null)return"--wfc-chart-uv-bar-color";let e=Math.round(r);return e>=11?"--wfc-uv-extreme":e>=8?"--wfc-uv-very-high":e>=6?"--wfc-uv-high":e>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var D5=class extends q{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(t){(t.has("hass")||t.has("forecast"))&&(this.suntimesInfo=Y5(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return h;let t=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,o=t.secondaryLabel!==void 0;return p`
      <div
        class="wsfc-forecast-slot-time ${t.className||""} ${o?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${t.icon?p`<ha-icon .icon=${t.icon}></ha-icon>`:t.label}</span
        >
        ${o?p`<span class="wsfc-forecast-slot-time-secondary"
              >${t.secondaryLabel}</span
            >`:h}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${i}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let t=v6(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let H=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:g0(this.hass,this.forecast.datetime),secondaryLabel:H}}if(this.forecastType==="daily")return t?{label:g0(this.hass,this.forecast.datetime),secondaryLabel:eC(this.hass,this.forecast.datetime)}:{label:g0(this.hass,this.forecast.datetime)};let o=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):aC(o),C=o,n;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:H,sunset:V}=this.suntimesInfo,L=d=>{let u=new Date(o);return u.setHours(d.getHours(),d.getMinutes()),u.getTime()>=o.getTime()&&u.getTime()<=a.getTime()};L(H)?(n="wsfc-sunrise",C=H):L(V)&&(n="wsfc-sunset",C=V)}if(n){let H=rC(this.hass,C);return this.isTwiceDailyEntity&&!t?{label:"",secondaryLabel:H.suffix?`${H.time} ${H.suffix}`:H.time,className:n,icon:n==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:H.time,secondaryLabel:t?H.suffix:void 0,className:n}}let s=tC(this.hass,C);return this.isTwiceDailyEntity&&!t?{label:"",secondaryLabel:s.hour}:{label:s.hour,secondaryLabel:t?s.suffix:void 0}}};D5.styles=Q`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,j([e1({attribute:!1})],D5.prototype,"hass",2),j([e1({attribute:!1})],D5.prototype,"forecast",2),j([e1({attribute:!1})],D5.prototype,"forecastType",2),j([e1({attribute:!1})],D5.prototype,"isTwiceDailyEntity",2),j([e1({attribute:!1})],D5.prototype,"config",2),D5=j([Q1("wsfc-forecast-header-items")],D5);var B0=class extends q{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(t){super.updated(t),t.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?p`
      <div class="dropdown">
        ${this.options.map(t=>this._renderOption(t))}
      </div>
    `:h}_renderOption(t){let i=this.value===t.value;return p`
      <div
        class="menu-item ${i?"selected":""}"
        @click=${o=>this._onSelected(o,t.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${t.icon}></ha-icon>
          <span>${t.label}</span>
        </div>
      </div>
    `}_onSelected(t,i){if(t.preventDefault(),t.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(t){let i=t.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};B0.styles=Q`
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
  `,j([e1({type:Boolean})],B0.prototype,"open",2),j([e1({attribute:!1})],B0.prototype,"options",2),j([e1({attribute:!1})],B0.prototype,"value",2),B0=j([Q1("wsfc-chart-attribute-selector")],B0);M2.register(o0,v5,a0,Q2,A5,R0,w7,ws);var bs=16384,nf=6,S8=12,sf=10,Hf=10,Vf=130,T2=class extends q{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=LC;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new p7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=t=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&t.detail.action==="hold"){t.preventDefault(),t.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,t.preventDefault(),t.stopPropagation();let o=f5(i,this._chart),a=this._chart.scales.x;if(!a)return;let C=a.getValueForPixel(o.x);if(C==null)return;let n=a.getLabelForValue(C),s=this._chart.data.labels?.indexOf(n)??-1;if(s===-1)return;let H=this.safeForecast[s];if(!H)return;let V={selectedForecast:H,action:t.detail.action};j1(this,"action",V)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(t){if(super.updated(t),(t.has("forecast")||t.has("weatherEntity")||t.has("hass")||t.has("forecastType")||t.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let o=t.has("forecastType")||t.has("itemWidth");this.updateChartData(o)}}render(){let t=this.safeForecast;if(!t?.length||this.itemWidth<=0)return h;let i=t.length,o=Math.max(i-1,0),a=this._getChartFontSize(),C=Vf+Math.max(0,a-S8),s={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${o} * var(--forecast-item-gap))`},H={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},V={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${C}px`};return p`
      <div
        class="${L3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
      >
        ${this.config.forecast?.show_attribute_selector?p`<span>${this._localizeSelectedAttribute()}</span>
              <div class="wsfc-forecast-chart-attribute-selector">
                <ha-button
                  class="wsfc-settings-toggle-button"
                  size="small"
                  appearance="filled"
                  variant="brand"
                  @click=${this._onSettingsToggle}
                >
                  <ha-icon
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":p5[this._selectedAttribute]}
                  ></ha-icon>
                </ha-button>
              </div>`:h}
        <wsfc-chart-attribute-selector
          .open=${this._settingsOpen}
          .options=${this._getChartOptions()}
          .value=${this._selectedAttribute}
          @selected=${this._onAttributesSelected}
          @closed=${this._onSettingsClosed}
        ></wsfc-chart-attribute-selector>
      </div>
      <div
        class="${L3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${k2(s)}
          .actionHandler=${Z5({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(t)}
          </div>

          <div class="wsfc-chart-clipper" style=${k2(H)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${k2(V)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${t.map((L,d)=>p`
                <div class="wsfc-forecast-slot" data-index=${d}>
                  <wsfc-forecast-info
                    .hass=${this.hass}
                    .weatherEntity=${this.weatherEntity}
                    .forecast=${L}
                    .config=${this.config}
                    .hidePrecipitation=${!0}
                  ></wsfc-forecast-info>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let t=this.getChartConfig();t&&(this._chart=new M2(this._canvas,t))}updateChartData(t=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),o=this._chart.config.type,a=i.type;if(o!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),t&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let o=parseFloat(i);if(!isNaN(o))return o}return S8}_getBarLabelOffset(){return-22-(this._getChartFontSize()-S8)}getChartConfig(){let t=this.safeForecast,i=getComputedStyle(this),o=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),C=a+Hf,n=sf+(a-S8),s={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:C,bottom:n,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:o,dash:[4,4]},grid:{offset:!0,display:!0,color:o,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(t,i,s);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(t,i,s);default:return this._getDefaultWeatherConfig(t,i,s)}}_getDefaultWeatherConfig(t,i,o){let{minTemp:a,maxTemp:C}=this.computeScaleLimits(t),n=i.getPropertyValue("--wfc-chart-temp-high-label-color"),s=i.getPropertyValue("--wfc-chart-temp-low-label-color"),H=i.getPropertyValue("--wfc-chart-precipitation-label-color"),V=i.getPropertyValue("--wfc-precipitation-bar-color"),L=M7(G2(this.hass,this.weatherEntity,"precipitation"),this.forecastType),d=this.getTemperatureLineStyle(i,"temperature"),u=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:t.map(f=>f.datetime),datasets:[{data:t.map(f=>f.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:n,formatter:f=>f!=null?`${k5(this.hass,this.weatherEntity,f,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...d},{data:t.map(f=>f.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:s,formatter:f=>f!=null?`${k5(this.hass,this.weatherEntity,f,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...u},{type:"bar",data:t.map(f=>f.precipitation&&f.precipitation!==0?f.precipitation:null),backgroundColor:V,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:H,formatter:f=>pC(f,G2(this.hass,this.weatherEntity,"precipitation"))}}]},options:a3({},o,{scales:{yTemp:{type:"linear",display:!1,min:a,max:C,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:L,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(t,i,o){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:t.map(C=>C.datetime),datasets:[{type:"bar",data:t.map(C=>C.uv_index!=null?Math.round(C.uv_index):0),backgroundColor:t.map(C=>i.getPropertyValue(y8(C.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:a3({},o,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(t,i,o){let a=this._selectedAttribute,C=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",n=i.getPropertyValue(C)||i.getPropertyValue("--wfc-chart-default-line-color"),s=i.getPropertyValue("--wfc-chart-label-color"),H=G2(this.hass,this.weatherEntity,a),V=t.map(x=>x[a]??0),L=Math.max(...V),d=Math.min(...V),u=L-d||1,f=L+u*.2,v=d-u*.1;return{type:"line",data:{labels:t.map(x=>x.datetime),datasets:[{data:t.map(x=>x[a]??null),borderColor:n,pointBackgroundColor:n,fill:!1,datalabels:{anchor:"end",align:"top",color:s,formatter:(x,w)=>{if(x===null)return null;let y=`${x} ${H}`;return y.length>nf&&w.dataIndex%2!==0?null:y}}}]},options:a3({},o,{scales:{y:{display:!1,min:v,max:f}}})}}getTemperatureLineStyle(t,i){let o=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=t.getPropertyValue(o),C=n=>this.computeTemperatureLineColor(n,t,a);return{borderColor:C,pointBorderColor:C,pointBackgroundColor:C,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(t,i,o){if(!this.config.forecast?.use_color_thresholds)return o;let a=t.chart,{ctx:C,chartArea:n,scales:s}=a;if(!n||!s.yTemp)return o;if(this._temperatureColors===null){let y=i;this._temperatureColors={cold:y.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:y.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:y.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:y.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:y.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:y.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let H=s.yTemp,{min:V,max:L}=H;if(!Number.isFinite(V)||!Number.isFinite(L))return o;let d=C.createLinearGradient(0,n.bottom,0,n.top),u=y=>Math.max(0,Math.min(1,(y-V)/(L-V))),v=G2(this.hass,this.weatherEntity,"temperature")==="\xB0F",x=y=>v?y*9/5+32:y,w=[{pos:u(x(-10)),color:this._temperatureColors.cold},{pos:u(x(0)),color:this._temperatureColors.freezing},{pos:u(x(8)),color:this._temperatureColors.chilly},{pos:u(x(18)),color:this._temperatureColors.mild},{pos:u(x(26)),color:this._temperatureColors.warm},{pos:u(x(34)),color:this._temperatureColors.hot}].sort((y,b)=>y.pos-b.pos);for(let y of w)d.addColorStop(y.pos,y.color);return d}computeScaleLimits(t){let i=t.map(b=>b.temperature),o=t.map(b=>b.templow??b.temperature),a=Math.min(...o),C=Math.max(...i),n=t.some(b=>b.templow!==void 0&&b.templow!==null),s=Math.max(C-a,10),H=.2,V=n?.35:.1,L=s*H,d=s*V,u=2,f=n?5:1,v=Math.max(L,u),x=Math.max(d,f),w=Math.floor(a-x),y=Math.ceil(C+v);return w>=y&&(y=w+1),{minTemp:w,maxTemp:y}}renderHeaderItems(t){let i=[],o;return t.forEach((a,C)=>{if(a.datetime){if(this.forecastType==="hourly"){let n=g0(this.hass,a.datetime);o!==n&&(o=n,i.push(p`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${n}</div>
            </div>`))}i.push(p`
        <div class="wsfc-forecast-slot" data-index=${C}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${a}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
        </div>
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let t=this._getGapValue(),i=Math.floor((bs+t)/(this.itemWidth+t));return this.forecast.length>i?(d5.debug(`Truncating forecast to ${i} items to stay under ${bs}px (including ${t}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(t){this._lastChartEvent=t}_onSettingsToggle(t){t.stopPropagation(),t.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let t=this.forecast,i=o=>o==="temperature_and_precipitation"?!0:t.some(a=>a[o]!=null);return _6.filter(i).map(o=>({label:o==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,o)||o,icon:o==="temperature_and_precipitation"?"mdi:water-thermometer":p5[o],value:o}))}_onAttributesSelected(t){this._settingsOpen=!1,this._selectedAttribute=t.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};j([e1({attribute:!1})],T2.prototype,"hass",2),j([e1({attribute:!1})],T2.prototype,"weatherEntity",2),j([e1({attribute:!1})],T2.prototype,"forecast",2),j([e1({attribute:!1})],T2.prototype,"config",2),j([e1({attribute:!1})],T2.prototype,"forecastType",2),j([e1({attribute:!1})],T2.prototype,"isTwiceDailyEntity",2),j([e1({attribute:!1})],T2.prototype,"itemWidth",2),j([e1({attribute:!1})],T2.prototype,"isScrollable",2),j([m4("canvas")],T2.prototype,"_canvas",2),j([Z2()],T2.prototype,"_settingsOpen",2),j([Z2()],T2.prototype,"_selectedAttribute",2),T2=j([Q1("wsfc-forecast-chart")],T2);var z0=class extends q{createRenderRoot(){return this}render(){if(!this.forecast)return h;let e=this.forecast.precipitation||0,t=this.computePrecipitationBarHeight(e),i=MC(this.forecast);return p`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?p`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:h}
      </div>
      <div
        class=${L3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${t}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${e.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(e){if(e<.1)return 0;if(e<.2)return 10;let t=this.maxPrecipitation||10,i=e/t*100;return Math.round(Math.min(i,100))}};j([e1({attribute:!1})],z0.prototype,"hass",2),j([e1({attribute:!1})],z0.prototype,"forecast",2),j([e1({attribute:!1})],z0.prototype,"config",2),j([e1({attribute:!1})],z0.prototype,"maxPrecipitation",2),z0=j([Q1("wsfc-forecast-details")],z0);var x5=class extends q{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return h;let t=this.forecast.wind_speed||0,i=w6(this.forecast),o=this.radius,a=4,C=10,n=o+C,s=o+C,H=2*(o+C),V=Math.round(t),L=this.computeLineColor(),d=i;d!==void 0&&this.type==="direction"&&(d=(d+180)%360);let u=Number.isFinite(d),f=s-o,v=o*.55,x=f-v,w=o*.45;return p`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${H} ${H}"
        role="img"
        aria-label="${u?`Wind speed: ${V}, bearing: ${d} degrees`:`Wind speed: ${V}`}"
      >
        <circle
          cx="${n}"
          cy="${s}"
          r="${o}"
          stroke="${L}"
          stroke-width="${a}"
          fill="none"
        />
        ${u?c1` <g transform="rotate(${d} ${n} ${s})">
              <polygon
                points="${n-w},${f} ${n+w},${f} ${n},${x}"
                fill="${L}"
              />
            </g>`:h}
        <text x="${n}" y="${s}" dy="0.1em">${V}</text>
      </svg>
    `}computeLineColor(){let t=A4(this.hass,this.weatherEntity,this.forecast);return!t||t<=3?"var(--wfc-wind-low)":t<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};x5.styles=Q`
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
  `,j([e1({attribute:!1})],x5.prototype,"hass",2),j([e1({attribute:!1})],x5.prototype,"weatherEntity",2),j([e1({attribute:!1})],x5.prototype,"forecast",2),j([e1({attribute:!1})],x5.prototype,"size",2),j([e1({attribute:!1})],x5.prototype,"radius",2),j([e1({attribute:!1})],x5.prototype,"type",2),x5=j([Q1("wsfc-wind-indicator")],x5);var N0=class extends q{createRenderRoot(){return this}render(){return this.forecast?p`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??h}
      </div>
    `:h}getExtraInfo(){let e=this.config?.forecast?.extra_attribute;if(!e)return null;if(e==="precipitation_probability"){let t=Math.round(this.forecast.precipitation_probability||0);return t>0?p`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${t<10?"<10%":`${t}%`}
            </span>
          `:null}else if(e==="uv_index"){let t=this.forecast.uv_index;if(t==null)return null;let i=Math.round(t),o=y8(t);return p`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${k2({color:`var(${o})`})}
          >${String(i)}</span
        >
      `}else{if(e==="wind_bearing"||e==="wind_direction")return p`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${e==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;d5.warn(`Unsupported forecast.extra_attribute: ${e}`)}return null}};j([e1({attribute:!1})],N0.prototype,"hass",2),j([e1({attribute:!1})],N0.prototype,"weatherEntity",2),j([e1({attribute:!1})],N0.prototype,"forecast",2),j([e1({attribute:!1})],N0.prototype,"config",2),N0=j([Q1("wsfc-forecast-info")],N0);var g5=class extends q{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new p7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=t=>{let o=t.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=o?.dataset.index?Number(o.dataset.index):null};this._onForecastAction=t=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;t.preventDefault(),t.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let o={selectedForecast:i,action:t.detail.action};j1(this,"action",o)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return h;let t=[],i=M7(G2(this.hass,this.weatherEntity,"precipitation"),this.forecastType),o;return this.forecast.forEach((a,C)=>{if(a.datetime){if(this.forecastType==="hourly"){let n=g0(this.hass,a.datetime);o!==n&&(o=n,t.push(p`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${n}</div>
            </div>`))}t.push(p`
        <div class="wsfc-forecast-slot" data-index=${C}>
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
      `)}}),p`
      <div
        class="${L3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${Z5({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${t}
        </div>
      </div>
    `}};j([e1({attribute:!1})],g5.prototype,"hass",2),j([e1({attribute:!1})],g5.prototype,"weatherEntity",2),j([e1({attribute:!1})],g5.prototype,"forecast",2),j([e1({attribute:!1})],g5.prototype,"forecastType",2),j([e1({attribute:!1})],g5.prototype,"isTwiceDailyEntity",2),j([e1({attribute:!1})],g5.prototype,"config",2),j([e1({attribute:!1})],g5.prototype,"isScrollable",2),g5=j([Q1("wsfc-forecast-simple")],g5);var I0=class extends q{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let t=ys.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?t="partlycloudy-night":this.state==="sunny"&&(t="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${t}.svg`,state:t}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return h;let t=this.getClasses(),i=this.getWeatherStateIcon();return p`
      <div class="${t}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:o}=this.getCustomWeatherIconPath();return p` <img src="${i}" alt="${o}" /> `}let t=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return t?p`
        <div
          style="background-size: cover;${k2({"background-image":t})}"
        ></div>
      `:ys.has(this.state)?p`${pf(this.state,this.isNightTime)}`:h}};j([e1({attribute:!1})],I0.prototype,"config",2),j([e1({attribute:!1})],I0.prototype,"classes",2),j([e1({attribute:!1})],I0.prototype,"isNightTime",2),j([e1({attribute:!1})],I0.prototype,"state",2),I0=j([Q1("wsfc-weather-condition-icon-provider")],I0);var ys=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),Lf=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),lf=new Set(["hail","rainy","pouring"]),cf=new Set(["windy","windy-variant"]),Mf=new Set(["snowy","snowy-rainy"]),df=new Set(["lightning","lightning-rainy"]),pf=(r,e)=>c1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${r==="sunny"&&e?c1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:r==="sunny"?c1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${r==="clear-night"?c1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${r==="partlycloudy"&&e?c1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:r==="partlycloudy"?c1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${Lf.has(r)?c1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${lf.has(r)?c1`
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
  ${r==="pouring"?c1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${cf.has(r)?c1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Mf.has(r)?c1`
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
  ${df.has(r)?c1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var W0=class extends q{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=t=>this.hass.formatEntityAttributeName(this.weatherEntity,t)||this.hass.localize(uf(t))||a5(t).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return h;let t=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==h);return t.length===0?h:p`
      <div class="wsfc-current-attributes">${t}</div>
    `}_renderAttribute(t){if(!t||!t.name&&!t.entity)return h;let{name:i,entity:o,label:a,icon:C}=t,n;if(o?n=b6(this.hass,this.weatherEntity,this.config,i,o):i&&(n=d7(this.hass,this.weatherEntity,this.config,i)),!n)return h;let s=o?this.hass.states[o]||this.weatherEntity:this.weatherEntity,H=o?this.hass.states[o]:void 0,V=H&&!i?p`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${H}
              .icon=${C}
            ></ha-state-icon>
          `:p`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${s}
              .attribute=${i}
              .icon=${mC(i,C,H)}
            ></ha-attribute-icon>
          `;return p`
      <div class="wsfc-current-attribute">
        ${V}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,H)}
        </span>
        <span class="wsfc-current-attribute-value">${n}</span>
      </div>
    `}resolveLabel(t,i,o){return i||(t&&x2.includes(t)?this.localize(t):o?.attributes?.friendly_name??(t?a5(t).replace(/_/g," "):""))}};j([e1({attribute:!1})],W0.prototype,"hass",2),j([e1({attribute:!1})],W0.prototype,"weatherEntity",2),j([e1({attribute:!1})],W0.prototype,"attributeConfigs",2),j([e1({attribute:!1})],W0.prototype,"config",2),W0=j([Q1("wsfc-current-weather-attributes")],W0);var uf=x0(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var br={...p5,precipitation:"mdi:weather-rainy"},g2=class extends q{constructor(){super(...arguments);this.onAction=t=>{let i=this.config.current?.temperature_entity,o=i?{...this.config,entity:i}:this.config;h4(this,this.hass,o,t.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return h;let{state:t}=this.weatherEntity,i=this.getTemperature(),o=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),C=this.getConfiguredAttributes(),n=this.config.name||this.weatherEntity.attributes.friendly_name;return p`
      <div class="wsfc-current-weather">
        <div class="wsfc-current-conditions">
          <wsfc-weather-condition-icon-provider
            .config=${this.config}
            .state=${t}
            .isNightTime=${a}
            .classes=${"wsfc-current-icon"}
          ></wsfc-weather-condition-icon-provider>
          <div class="wsfc-name-state">
            <span class="wsfc-current-state">
              ${this.hass.formatEntityState(this.weatherEntity)}
            </span>
            ${n?p`<span class="wsfc-name wsfc-secondary">${n}</span>`:h}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${i!==null?p`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${Z5({stopPropagation:!0,hasHold:Q5(this.config.hold_action),hasDoubleClick:Q5(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${i}
                  </div>
                `:h}
            ${o?p`
                  <div class="wsfc-current-secondary-info">
                    ${o.stateObj?p`
                          <ha-state-icon
                            class="wsfc-current-secondary-icon wsfc-secondary"
                            .hass=${this.hass}
                            .stateObj=${o.stateObj}
                            .icon=${o.icon}
                          ></ha-state-icon>
                        `:o.icon?p`
                            <ha-attribute-icon
                              class="wsfc-current-secondary-icon wsfc-secondary"
                              .hass=${this.hass}
                              .icon=${o.icon}
                            ></ha-attribute-icon>
                          `:h}
                    <span class="wsfc-current-secondary-value wsfc-secondary"
                      >${o.value}</span
                    >
                  </div>
                `:h}
          </div>
        </div>
        ${C.length>0?p`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${C}
            ></wsfc-current-weather-attributes>`:h}
      </div>
    `}isNightTime(){let t=Y5(this.hass,new Date);return this.config.forecast?.show_sun_times&&t?t.isNightTime:!1}getConfiguredAttributes(){let t=this.config.current?.show_attributes;return t==null?[]:typeof t=="boolean"?t?x2.map(i=>({name:i})):[]:typeof t=="string"?[{name:t}]:!Array.isArray(t)&&typeof t=="object"?t.name||t.entity?[t]:[]:Array.isArray(t)?t.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let t=this.config.current?.temperature_entity;if(t){let i=this.hass.states[t];if(i)return k5(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?k5(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let t=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let s=typeof i=="string"?{name:i}:i,{name:H,entity:V,icon:L}=s;if(V){let d=b6(this.hass,this.weatherEntity,this.config,H,V);if(d!=null){let u=this.hass.states[V];return H?{icon:L??u?.attributes?.icon??br[H],value:d}:{stateObj:u,icon:L,value:d}}}else if(H&&H in this.weatherEntity.attributes){let u=br[H],f=d7(this.hass,this.weatherEntity,this.config,H);if(f!=null)return{icon:L??u,value:f}}}let o=this.getTemperatureExtrema();if(o)return{value:`${o.high} / ${o.low}`};let a,C;if(t&&t.length&&t[0]?.precipitation!=null)a=t[0].precipitation,C="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,C="humidity";else return null;return{icon:br[C],value:this.hass.formatEntityAttributeValue(this.weatherEntity,C,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let t=V7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,o=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(V7(a.datetime)===t){let C=a.templow??a.temperature,n=a.temperature;C!=null&&C<i&&(i=C),n!=null&&n>o&&(o=n)}return i===1/0||o===-1/0?null:{high:k5(this.hass,this.weatherEntity,o,this.config.current?.temperature_precision),low:k5(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};j([e1({attribute:!1})],g2.prototype,"hass",2),j([e1({attribute:!1})],g2.prototype,"weatherEntity",2),j([e1({attribute:!1})],g2.prototype,"hourlyForecast",2),j([e1({attribute:!1})],g2.prototype,"dailyForecast",2),j([e1({attribute:!1})],g2.prototype,"config",2),g2=j([Q1("wsfc-current-weather")],g2);var Ss=`:host {
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
`;var Zs="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var ks=Q`
  ${U5(Ss)}

  :host {
    --moon-texture: url("${U5(Zs)}");
  }
`;var e9=10,hf=3,Z8=14,ff=75,Af=75,vf=4,xf=3,Os=2,gf=[1.45,.7],$s=90,_f=50,wf=.15,d2=class extends q{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(t=>{let i=t[0],o=Math.round(i?.contentRect.height||0);this._containerHeight!==o&&(this._containerHeight=o,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(t){if(t.has("hass")){let i=t.get("hass"),o=this.hass?.themes?.darkMode;i?.themes?.darkMode!==o&&(this._isDark=o??!1)}(t.has("config")||t.has("weatherEntity")||t.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(t){t.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let t=this.getActiveEffects();return t.length?p`
      ${t.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return h}})}
    `:h}computeParticles(){let t=[];return this.getActiveEffects().forEach(o=>{switch(o){case"rain":t.push(...this.computeRainParticles());break;case"snow":t.push(...this.computeSnowParticles());break;case"moon":t.push(...this.computeStarParticles());break;case"sun":t.push(...this.computeSunRayParticles());break;case"cloud":t.push(...this.getStableCloudParticles());break;default:break}}),t}computeSnowParticles(){let t=this.computeIntensity(),i=[],o=Math.round(t/e9*ff),a=Math.max(5,o),C=115/a;for(let n=0;n<a;n++){let s=-15+n*C+w1(0,C*.5),H=Math.random(),V=H*5+2,L=4.5/(H+.5)+w1(0,.8),d=w1(0,5,!0).toFixed(1),u=H*.7+.5,f=H<.3?1.5-H*3:H>.9?.5:0,v=V*.9,x=(10+H*25).toFixed(0),w=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${s.toFixed(1)}%`,delay:d,duration:L.toFixed(1),size:V.toFixed(0),opacity:u.toFixed(1),blur:f.toFixed(1),shadowSpread:v.toFixed(1),driftAmplitude:x,driftFrequency:w})}return i}computeRainParticles(){let t=this.computeIntensity(),i=[],o=Math.round(t/e9*Af),a=Math.max(10,o),C=100/a;for(let n=0;n<a;n++){let s=n*C+w1(0,C*.8),H=w1(.2,.5,!0),V=w1(.4,.7,!0),L=w1(.85,1,!0),d=this._containerHeight*L;i.push({type:"rain",x:`${s.toFixed(1)}%`,delay:H.toFixed(2),duration:V.toFixed(2),landingPosY:d.toFixed(0)})}return i}computeStarParticles(){let t=[];for(let C=0;C<30;C++){let n=C%6,s=Math.floor(C/6),H=100/6,V=30/5,L=w1(n*H+H*.15,(n+1)*H-H*.15),d=w1(s*V+V*.15,(s+1)*V-V*.15),u=w1(1,3),f=w1(.3,1,!0),v=w1(0,5,!0);t.push({type:"star",x:`${L.toFixed(0)}`,y:`${d.toFixed(0)}`,size:`${u}`,opacity:f.toFixed(2),delay:v.toFixed(1)})}return t}getActiveEffects(){let t=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!t)return[];let o=new Set,a=H=>i===!0?!0:Array.isArray(i)?i.includes(H):!1;(t.includes("rainy")||t==="pouring")&&a("rain")&&o.add("rain"),t.includes("snowy")&&a("snow")&&o.add("snow"),t.includes("lightning")&&a("lightning")&&o.add("lightning");let C=t==="sunny"||t==="clear-night",n=t==="cloudy",s=t==="partlycloudy";return(C||s||n)&&a("sky")&&o.add("sky"),(C||s)&&(this.isNightTime()?a("moon")&&o.add("moon"):a("sun")&&o.add("sun")),(n||s)&&a("cloud")&&o.add("cloud"),Array.from(o)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?Y5(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let t=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return p`<div class="${i?`${t} overcast`:t}"></div>`}renderSun(){let t=this._particles.filter(i=>i.type==="sunray");return p`
      <div class="sun">
        <div class="ray-box">
          ${t.map(i=>p`<div
                class="sun-ray"
                style="${k2({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${w1(0,360)}`,height:`${w1(100,200)}`,width:`${w1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let t=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),o=t?vf:xf,a=100/o,C=[];for(let n=0;n<o;n++){let s=n%Os,H=s===0,V=n*a+w1(0,a*.5)-a*.25,L=t?H?w1(140,200):w1(215,285):H?w1(110,165):w1(180,240),d=L*w1(.38,.5,!0),u=t?H?w1(-26,-12):w1(-16,-2):H?w1(-10,4):w1(-4,12),f=t?H?w1(.36,.5,!0):w1(.5,.64,!0):H?w1(.68,.8,!0):w1(.82,.92,!0);i&&(f*=.7),C.push({type:"cloud",variant:t?"grey":"white",night:i,layer:s,shape:w1(1,5),flip:w1(0,1)===1,x:V.toFixed(1),y:u.toFixed(0),width:L.toFixed(0),height:d.toFixed(0),opacity:f.toFixed(2)})}return C}computeCloudDrift(){let t=this.currentForecast,i=t&&A4(this.hass,this.weatherEntity,t)||0,o=Math.min(i,Z8)/Z8,a=t?w6(t):void 0,C=a!==void 0?-Math.sin(a*Math.PI/180):0,n=Math.max(wf,o*Math.abs(C));return{duration:$s-n*($s-_f),driftRight:C>=0}}renderCloudFilter(){return p`
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
    `}renderClouds(){let t=this._particles.filter(C=>C.type==="cloud");if(!t.length)return h;let{duration:i,driftRight:o}=this.computeCloudDrift(),a=C=>{let n=["cloud",`cloud-shape-${C.shape}`,C.variant==="grey"?"grey":"",C.night?"night":""].filter(Boolean).join(" ");return p`<div
        class="${n}"
        style="${k2({left:`${C.x}%`,top:`${C.y}px`,width:`${C.width}px`,height:`${C.height}px`,opacity:C.opacity,transform:C.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return p`
      ${this.renderCloudFilter()}
      ${Array.from({length:Os},(C,n)=>{let s=t.filter(V=>V.layer===n);if(!s.length)return h;let H=Math.round(i*(gf[n]??1)/5)*5;return p`<div
          class="cloud-track ${o?"drift-right":""}"
          style="${k2({"--cloud-drift-duration":`${H}s`})}"
        >
          <div class="cloud-set">${s.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${s.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(t=>t.type==="snow").map(t=>p`
        <div
          class="snowflake-path"
          style="${k2({"--duration":`${t.duration}s`,"--delay":`${t.delay}s`,"--pos-x":t.x,"--flake-size":`${t.size}px`,"--flake-opacity":t.opacity,"--flake-blur":`${t.blur}px`,"--flake-shadow-spread":`${t.shadowSpread}px`,"--drift-amplitude":`${t.driftAmplitude}px`,"--drift-frequency":t.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(t=>t.type==="rain").map(t=>p`
        <div
          class="raindrop-path"
          style="${k2({"--duration":`${t.duration}s`,"--delay":`${t.delay}s`,"--pos-x":t.x,"--landing-pos-y":`${t.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return p` <div class="lightning-flash"></div> `}renderMoon(){let t=this.config.show_moon_phase===!1?null:iC(this.hass,new Date);return p`
      ${this._particles.filter(i=>i.type==="star").map(i=>p`
          <div
            class="star"
            style="${k2({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(t)}
        <div class="moon">${this.renderMoonPhase(t)}</div>
      </div>
    `}renderMoonGlow(t){let i=t?st(t.fraction,t.litRight):st(1,!0);return p`
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
    `}renderMoonPhase(t){return t?p`
      <svg
        class="moon-phase"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d=${oC(t.fraction,t.litRight)}></path>
      </svg>
    `:h}computeIntensity(){let t=this.currentForecast?.precipitation||0;if(t>0){let i=G2(this.hass,this.weatherEntity,"precipitation"),o=M7(i,"hourly");if(o>0){let a=t/o*e9;return Math.min(e9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?e9:hf}computeFallingAngle(t=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let o=A4(this.hass,this.weatherEntity,i)||0,a=t?15:35,C=Math.min(o,Z8)/Z8,n=i.wind_bearing*Math.PI/180,s=Math.sin(n),V=Math.pow(C,t?.8:.5);return s*V*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};d2.styles=ks,j([e1({attribute:!1})],d2.prototype,"hass",2),j([e1({attribute:!1})],d2.prototype,"weatherEntity",2),j([e1({attribute:!1})],d2.prototype,"currentForecast",2),j([e1({attribute:!1})],d2.prototype,"config",2),j([Z2()],d2.prototype,"_isDark",2),j([Z2()],d2.prototype,"_containerHeight",2),d2=j([Q1("wsfc-animation-provider")],d2);var Ts={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},yf=1e3,R1=class extends q{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=t=>{if(!this.config)return;let i=t.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(t.detail.selectedForecast??void 0):h4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},t.detail.action)};this.onCardAction=t=>{h4(this,this.hass,this.config,t.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(t){let i=Object.keys(t?.states??{}).filter(a=>a.startsWith("weather.")),o=i.find(a=>a==="weather.home")||i[0]||"";return{...Ts,entity:o}}setConfig(t){if(!t||!t.entity)throw new Error("entity is required");if(t.show_current===!1&&t.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(t.forecast?.daily_slots!=null&&t.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(t.forecast?.hourly_slots!=null&&t.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(t.current?.temperature_precision!=null&&(t.current.temperature_precision<0||t.current.temperature_precision>V3)||t.forecast?.temperature_precision!=null&&(t.forecast.temperature_precision<0||t.forecast.temperature_precision>V3))throw new Error(`temperature_precision must be 0 or greater and at most ${V3}`);let i={...t};t.temperature_entity&&(t.current?.temperature_entity||(i.current={...t.current,temperature_entity:t.temperature_entity}),delete i.temperature_entity),this.config=a3({},Ts,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:t,minRows:i,minColumns:o}=this.computeRowSizing();return{columns:12,rows:t,min_rows:i,min_columns:o}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let t=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,o=this.config?.forecast?.mode==="chart",a=1,C=1;return t&&(a+=2,C+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(o?(a+=3,C+=3):(a+=2,C+=2)),{rows:a,minRows:C,minColumns:t&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(t){return Qa(this,t,!1)||this.hasReferencedCurrentEntityChanged(t)||t.has("_dailyForecastEvent")||t.has("_hourlyForecastEvent")||t.has("_currentForecastType")||t.has("_currentItemWidth")||t.has("_isScrollable")}updated(t){super.updated(t),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(t)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),t.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return h;let t=this.config.entity,i=this.hass.states[t];if(!i)return p`<hui-warning>
        ${Ja(this.hass,t)}
      </hui-warning>`;let o=C5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",C=this.getCurrentForecast();return p`
      <ha-card>
        ${this.config.show_condition_effects?p`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${i}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData?.[0]}
            ></wsfc-animation-provider>`:h}
        <div class="wsfc-container">
          ${this.config.show_current?p`<div
                class="wsfc-current-weather-container"
                .actionHandler=${Z5({hasHold:Q5(this.config.hold_action),hasDoubleClick:Q5(this.config.double_tap_action)})}
                @action=${this.onCardAction}
              >
                <wsfc-current-weather
                  .hass=${this.hass}
                  .weatherEntity=${i}
                  .config=${this.config}
                  .hourlyForecast=${this._hourlyForecastData}
                  .dailyForecast=${this._dailyForecastData}
                ></wsfc-current-weather>
              </div>`:h}
          ${this.config.show_forecast===!1?h:p`<div class="wsfc-forecast-container">
                ${a?p`<wsfc-forecast-chart
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${C}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:p`<wsfc-forecast-simple
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${C}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-simple>`}
              </div>`}
        </div>
      </ha-card>
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(t=>{for(let i of t)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let t=getComputedStyle(this),i=parseInt(t.getPropertyValue("--wfc-min-item-width-simple"))||65,o=parseInt(t.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:o}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let t=this.hass.states[this.config.entity],{attributes:i}=t;if(!i)return;let o=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,C=ht(i,this._hourlyForecastEvent,"hourly"),n=ht(i,this._dailyForecastEvent,C5(t));if(!C&&!n)return;this._dailyForecastData=n?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let s=this.config?.forecast?.hourly_group_size||0;s>1&&C?.forecast?this._hourlyForecastData=uC(C.forecast,s):this._hourlyForecastData=C?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let H=this.getCurrentForecast();if(!H||H.length===0){let d=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,u=C5(t),f=u!==void 0,v=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(d||this._currentForecastType==="hourly"&&!f4(t,"hourly")||v&&!f)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(d5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=u||"daily"):v&&this._hourlyForecastData&&(d5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let V=this.getCurrentForecast().length,L=(this._currentForecastType==="hourly"?o:a)??0;V!==L&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(t){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",o=i,a=o?this._hourlyForecastData:this._dailyForecastData,C=this.hass?.states[this.config.entity],n=C5(C)||"daily";if(!a||a.length===0){d5.debug(`Cannot toggle to ${o?"hourly":n} forecast - no data available`);return}this._currentForecastType=i?"hourly":n,!(!t||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(o)this.scrollToForecastItem(t);else{let s=this._dailyForecastData?.[0];s&&this.scrollToForecastItem(s,"instant")}})}scrollToForecastItem(t,i="smooth"){if(!this._forecastContainer)return;let o=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!o)return;let a=V7(t.datetime),C=this.getCurrentForecast(),n=C.findIndex(L=>V7(L.datetime)===a),s=n!==-1?n:C.length-1,H=this._currentItemWidth||0,V=s*H;o.scrollTo({left:V,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let t=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(t,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},yf)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(t,i){if(t)try{let o=await t;if(!o)return;await o()}catch(o){if(pt(o))return;d5.warn(`Error unsubscribing from ${i} forecast:`,o)}}createForecastSubscription(t,i,o){return Promise.resolve(cC(this.hass,this.config.entity,t,i)).catch(a=>{if(HC(a)){setTimeout(o,2e3);return}pt(a)||d5.warn(`Error subscribing to ${t} forecast:`,a)})}async subscribeForecastEvents(){let t=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),t!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!dC(this.hass.states[this.config.entity])){d5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let o=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",C=a!=="hourly",n=a!=="daily",s=C5(o);s==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!C&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!n&&this._currentForecastType==="hourly"&&(this._currentForecastType=s||"daily"),s&&C&&(this._dailySubscription=this.createForecastSubscription(s,H=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=H,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),n&&f4(o,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",H=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=H,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(t){if(t<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let o=Math.max(1,Math.floor(t/this._minForecastItemWidth)),a=Math.floor(t/o),C=i.length,n=C*a,s=t-n,H=s>0?s/(C-1):0;this._currentItemWidth=a+H,this._isScrollable=i.length>o,this._haCard.style.setProperty("--forecast-item-gap",`${H}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(t){if(!t.has("hass")||!this.config?.entity)return!1;let i=t.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],C=o.states[this.config.entity];return!a||!C?!1:Object.values(mt).some(n=>a.attributes[n]!==C.attributes[n])}haveForecastSubscriptionInputsChanged(t){return t.has("config")||this.haveWeatherUnitsChanged(t)||this.haveForecastFeaturesChanged(t)||this.hasWeatherEntityAvailabilityChanged(t)||this.hasConnectionBeenReestablished(t)}hasConnectionBeenReestablished(t){if(!t.has("hass"))return!1;let i=t.get("hass"),o=this.hass;return i?.connected===!1&&o?.connected===!0}shouldHandleForecastEvent(t){return this._subscribed&&t===this._subscriptionGeneration}haveForecastFeaturesChanged(t){if(!t.has("hass")||!this.config?.entity)return!1;let i=t.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],C=o.states[this.config.entity];return!a||!C?!1:a.attributes.supported_features!==C.attributes.supported_features}hasWeatherEntityAvailabilityChanged(t){if(!t.has("hass")||!this.config?.entity)return!1;let i=t.get("hass"),o=this.hass;if(!o)return!1;let a=i?.states[this.config.entity],C=o.states[this.config.entity];return!!a!=!!C}hasReferencedCurrentEntityChanged(t){if(!t.has("hass")||!this.config)return!1;let i=t.get("hass"),o=this.hass;return!i||!o?!1:CC(this.config).some(a=>i.states[a]!==o.states[a])}};R1.styles=ja,j([e1({attribute:!1})],R1.prototype,"hass",2),j([Z2()],R1.prototype,"config",2),j([Z2()],R1.prototype,"_dailyForecastEvent",2),j([Z2()],R1.prototype,"_hourlyForecastEvent",2),j([Z2()],R1.prototype,"_currentItemWidth",2),j([Z2()],R1.prototype,"_currentForecastType",2),j([Z2()],R1.prototype,"_isScrollable",2),j([m4("ha-card")],R1.prototype,"_haCard",2),j([m4(".wsfc-forecast-container")],R1.prototype,"_forecastContainer",2);var R5=t4(H7(),1);var Es="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var Fs="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var Sf={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},_5=class extends q{constructor(){super(...arguments);this._schema=x0((t,i,o)=>[...this._genericSchema(t),...this._currentWeatherSchema(t),...this._forecastSchema(t),...this._interactionsSchema(o),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=t=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:t("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:t("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:t("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:t("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:t("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:g6.map(i=>({value:i,label:a5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=t=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:x2.map(i=>({value:i,label:t(`ui.card.weather.attributes.${i}`)||a5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:x2.map(i=>({value:i,label:t(`ui.card.weather.attributes.${i}`)||a5(i).replace(/_/g," ")}))}}}];this._forecastSchema=t=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:_6.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${t("ui.card.weather.attributes.temperature")||"Temperature"}, ${t("ui.card.weather.attributes.precipitation")||"Precipitation"}`:t(`ui.card.weather.attributes.${i}`)||a5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:t("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:t("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:t("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:t("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:t("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=t=>{let i=[],o=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return t==="chart"?(i.push("double_tap_action"),o.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),o.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:o},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=t=>t.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:t.flatMap(o=>{let a=Sf[o];return[{name:`current.attribute_entity_${o}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${o}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${o}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:V3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:V3}}}]}];this._computeCustomAttributeLabel=t=>{switch(t.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return t.name}};this._addCustomAttribute=()=>{let t=v3(this._config.current?.show_attributes);this._commitCustomAttributes([...t,{}])};this._removeCustomAttribute=t=>{let i=v3(this._config.current?.show_attributes);i.splice(t,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(t,i)=>{i.stopPropagation();let o=v3(this._config.current?.show_attributes);o[t]=i.detail.value,this._commitCustomAttributes(o)};this._computeLabel=t=>{if(t.name.startsWith("current.attribute_label_")){let o=t.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||a5(o).replace(/_/g," ")} label`}if(t.name.startsWith("current.attribute_icon_")){let o=t.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||a5(o).replace(/_/g," ")} icon`}if(t.name.startsWith("current.attribute_entity_")){let o=t.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${o}`)||a5(o).replace(/_/g," "),C=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${C}`}let i=t.name.startsWith("forecast_action.")?t.name.split(".")[1]:t.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=t=>{switch(t.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=t=>{let i;if(this._config?.entity&&t!=="ui.card.weather.attributes.precipitation"&&t.startsWith("ui.card.weather.attributes")){let o=this.hass.states[this._config.entity];o&&(i=this.hass.formatEntityAttributeName(o,t.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(t)),i}}setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return h;let t=k8(this._config),i=this._getSelectedAttributes(t),o=this._schema(this.localize.bind(this),i,t["forecast.mode"]);return p`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${o}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let t=v3(this._config.current?.show_attributes);return p`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${t.map((i,o)=>this._renderCustomAttributeRow(i,o))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${Fs}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(t,i){return p`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${Zf}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${o=>this._customAttributeChanged(i,o)}
        ></ha-form>
        <ha-icon-button
          .path=${Es}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(t){let i={...this._config,current:{...this._config.current,show_attributes:Of(this._config.current?.show_attributes,t)}};j1(this,"config-changed",{config:i})}_getSelectedAttributes(t){let i=t["current.show_attributes"];return i?Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.name):[]:[]}_valueChanged(t){t.stopPropagation();let i=t.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let o=$f(i);if(delete o.temperature_entity,o?.forecast?.extra_attribute==="none"&&delete o.forecast.extra_attribute,Array.isArray(o.show_condition_effects)&&g6.every(C=>o.show_condition_effects.includes(C))&&(o.show_condition_effects=!0),o?.current){let a={},C={},n={};for(let s of Object.keys(o.current))if(s.startsWith("attribute_entity_")){let H=s.replace("attribute_entity_",""),V=o.current[s];V&&(a[H]=V),delete o.current[s]}else if(s.startsWith("attribute_label_")){let H=s.replace("attribute_label_",""),V=o.current[s];V&&(C[H]=V),delete o.current[s]}else if(s.startsWith("attribute_icon_")){let H=s.replace("attribute_icon_",""),V=o.current[s];V&&(n[H]=V),delete o.current[s]}if(Array.isArray(o.current.show_attributes)){let s=v3(this._config?.current?.show_attributes);o.current.show_attributes=Ps(o.current.show_attributes,{entity:a,label:C,icon:n},s)}}j1(this,"config-changed",{config:o})}};_5.styles=Q`
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
  `,j([e1({attribute:!1})],_5.prototype,"hass",2),j([Z2()],_5.prototype,"_config",2),_5=j([Q1("wsfc-flex-core-editor")],_5);var x3=r=>typeof r=="string"&&x2.includes(r),v3=r=>{if(!Array.isArray(r))return[];let e=[];for(let t of r)if(t!=null){if(typeof t=="string")x3(t)||e.push({name:t});else if(typeof t=="object"){let i=t;x3(i.name)||e.push(i)}}return e},Ps=(r,e,t)=>{let i=x2.every(C=>r.includes(C)),o=Object.keys(e.entity).length>0||Object.keys(e.label).length>0||Object.keys(e.icon).length>0;return t.length===0&&!o&&i?!0:[...r.map(C=>{let n=e.entity[C],s=e.label[C],H=e.icon[C];return n||s||H?{name:C,...n?{entity:n}:{},...s?{label:s}:{},...H?{icon:H}:{}}:C}),...t]},Zf=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],kf=r=>{if(r===!0)return[...x2];if(typeof r=="string")return x3(r)?[r]:[];if(!Array.isArray(r))return[];let e=[];for(let t of r)if(t!=null){if(typeof t=="string")x3(t)&&e.push(t);else if(typeof t=="object"){let i=t;x3(i.name)&&e.push(i)}}return e},Of=(r,e)=>{let t=kf(r),i=[],o={entity:{},label:{},icon:{}};for(let a of t)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(o.entity[a.name]=a.entity),a.label&&(o.label[a.name]=a.label),a.icon&&(o.icon[a.name]=a.icon));return Ps(i,o,e)},$f=r=>{let e={...r};for(let t of Object.keys(r)){if(!t.startsWith("forecast.")&&!t.startsWith("forecast_action.")&&!t.startsWith("current."))continue;let i=t.split(".");if(i.length<2)continue;let[o,a]=i;!o||!a||((!e[o]||typeof e[o]!="object")&&(e[o]={}),e[o][a]=r[t],delete e[t])}return e},k8=r=>{let e=Tf(r);e.forecast_mode=e.show_current&&e.show_forecast?"show_both":e.show_current?"show_current":"show_forecast",e.temperature_entity&&!e["current.temperature_entity"]&&(e["current.temperature_entity"]=e.temperature_entity),delete e.temperature_entity,e.show_condition_effects===!0&&(e.show_condition_effects=[...g6]),e["current.show_attributes"]===!0&&(e["current.show_attributes"]=[...x2]);let t=e["current.show_attributes"];if(Array.isArray(t)){let i=[];for(let o of t)if(typeof o=="string")x3(o)&&i.push(o);else if(typeof o=="object"&&o!==null){let a=o;x3(a.name)&&(i.push(a.name),a.entity&&(e[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(e[`current.attribute_label_${a.name}`]=a.label),a.icon&&(e[`current.attribute_icon_${a.name}`]=a.icon))}e["current.show_attributes"]=i}return e},Tf=r=>{let e={};for(let t in r){let i=r[t];if(t==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)e[`forecast.${o}`]=i[o];continue}if(t==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)e[`current.${o}`]=i[o];continue}if(t==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)e[`forecast_action.${o}`]=i[o];continue}e[t]=i}return e};(()=>{"use strict";let r="2026.10.11.85",e=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],t=e.map(l=>l.id),i=Object.fromEntries(e.map(l=>[l.id,l.label])),o={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],C=(l,M,c)=>Math.min(c,Math.max(M,l)),n=l=>typeof l=="number"&&isFinite(l),s={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function H(l){return s[l]||"mdi:weather-cloudy"}let V=["temps","icons","extra"],L={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function d(l){let M=Array.isArray(l.forecast_row_order)?l.forecast_row_order.filter(c=>V.includes(c)):null;(!M||!M.length)&&(M=(l.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let c of V)M.includes(c)||M.push(c);return M}let u={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},f=Object.keys(u);function v(l){let M=l&&l.forecast_extra,c;Array.isArray(M)?c=M:typeof M=="string"&&M&&M!=="none"?c=[M]:c=[];let m=new Set(c.filter(A=>u[A]));return f.filter(A=>m.has(A))}let x=["temps","icons",...f],w=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(f.map(l=>[l,u[l].label]))),y=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function b(l){l=l||{};let M={},c;if(Array.isArray(l.forecast_metric_order)&&l.forecast_metric_order.length){c=l.forecast_metric_order.filter(A=>x.includes(A));let m=l.forecast_metric_pos||{};for(let A of x)M[A]=m[A]||"hidden"}else{M.temps=l.forecast_temps||"hidden",M.icons=l.forecast_icons||"hidden";let m=v(l),A=M.temps!=="hidden"?M.temps:M.icons!=="hidden"?M.icons:"below";for(let g of f)M[g]=m.includes(g)?A:"hidden";let _=d(l);c=[];for(let g of _)g==="extra"?c.push(...f):c.push(g)}for(let m of x)c.includes(m)||c.push(m);for(let m of x)M[m]||(M[m]="hidden");return c.map(m=>({key:m,pos:M[m]}))}function E(l,M){if(!l||!M)return null;let c=u[l],m=M[l];return l==="wind_direction"&&(m=M.wind_direction!=null?M.wind_direction:M.wind_bearing),m==null||m===""?null:c&&c.arrow?"":(typeof m=="number"&&(m=Math.round(m)),m+(c&&c.unit||""))}function F(l,M){if(l==="wind_direction")return(u.wind_bearing||{}).icon;let c=u[l];return c?c.icon:""}let $={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function D(l,M){if(M){let c=$[l];if(c&&o[c]&&o[c].icon)return o[c].icon}return F(l)}function k(l){return l==="below"||l==null?0:l==="above"?100:l==="mid"?50:C(Number(l)||0,0,100)}function P(l,M){M=M||0;let c="  ".repeat(M),m=A=>{if(A==null)return"null";if(typeof A=="boolean"||typeof A=="number")return String(A);let _=String(A);return _===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(_)||/^\s|\s$/.test(_)||/^(true|false|null|yes|no|~)$/i.test(_)||/^[\d.+-]/.test(_)?'"'+_.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':_};if(Array.isArray(l))return l.length?l.map(A=>{if(A&&typeof A=="object"){let _=P(A,M+1).replace(/^\s+/,"");return c+"- "+_}return c+"- "+m(A)}).join(`
`):c+"[]";if(l&&typeof l=="object"){let A=Object.keys(l);return A.length?A.map(_=>{let g=l[_];return g&&typeof g=="object"&&(Array.isArray(g)?g.length:Object.keys(g).length)?c+_+`:
`+P(g,M+1):g&&typeof g=="object"?c+_+": "+(Array.isArray(g)?"[]":"{}"):c+_+": "+m(g)}).join(`
`):c+"{}"}return c+m(l)}function N(l){try{return typeof H3=="function"&&H3(l)||l.language||navigator.language||"en"}catch{return"en"}}function I(l){let M=l&&l.config||{};return{lat:M.latitude,lng:M.longitude}}function Y(l,M){if(!(M instanceof Date)||isNaN(M))return"--";try{return M.toLocaleTimeString(N(l),{hour:"2-digit",minute:"2-digit"})}catch{return M.toTimeString().slice(0,5)}}function z(l,M){let c=M instanceof Date?M:new Date;try{if(typeof Y5=="function"){let _=Y5(l,c);if(_&&_.sunrise&&_.sunset)return{sunrise:new Date(_.sunrise),sunset:new Date(_.sunset)}}}catch{}let{lat:m,lng:A}=I(l);if(n(m)&&n(A)&&typeof R5=="object"&&R5.getTimes)try{let _=R5.getTimes(c,m,A);return{sunrise:_.sunrise,sunset:_.sunset}}catch{}return{sunrise:null,sunset:null}}function V1(l,M){let{lat:c,lng:m}=I(l);if(!n(c)||!n(m)||typeof R5!="object"||!R5.getPosition)return null;try{return R5.getPosition(M,c,m).altitude}catch{return null}}function a1(l){if(l==null)return .5;let M=l*180/Math.PI;return M>=0?C(.42+.58*Math.sin(l),.42,1):M>-12?C(.42*(M+12)/12,0,.42):0}let i1=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function A1(l){l=C(l,0,1);let M=i1[0],c=i1[i1.length-1];for(let g=0;g<i1.length-1;g++)if(l>=i1[g].at&&l<=i1[g+1].at){M=i1[g],c=i1[g+1];break}let m=c.at-M.at||1,A=(l-M.at)/m,_=g=>Math.round(M.c[g]+(c.c[g]-M.c[g])*A);return[_(0),_(1),_(2)]}function a2(l){if(typeof l!="string")return null;let M=l.trim().replace(/^#/,"");return M.length===3&&(M=M.split("").map(c=>c+c).join("")),/^[0-9a-fA-F]{6}$/.test(M)?[parseInt(M.slice(0,2),16),parseInt(M.slice(2,4),16),parseInt(M.slice(4,6),16)]:null}let K=l=>`rgb(${Math.round(l[0])}, ${Math.round(l[1])}, ${Math.round(l[2])})`,r1=(l,M,c)=>l.map((m,A)=>m+(M[A]-m)*c);function C1(l,M){l=C(l,0,1);let c,m=M&&a2(M.day_color),A=M&&a2(M.night_color);m||A?c=r1(A||[11,16,38],m||[206,227,255],l):c=A1(l);let _=M&&n(M.cloud)?C(M.cloud,0,1):0;if(_>0){let g=.5*(c[0]+c[1]+c[2]),S=[g*.75+40,g*.75+42,g*.78+48];c=r1(c,S,_*.6)}return K(c)}function Z1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function g1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function D1(l){return{font_size:l,font_weight:"400",color:""}}function y1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function E1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_align:"center",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function V2(l,M){if(l==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let c=m=>`0 0 2px ${m}, 0 0 4px ${m}, 1px 1px 2px ${m}`;return l==="outline"?c("rgba(0,0,0,0.85)"):l==="auto"?c(M?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let _2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function N2(l){let M=l&&l.show_forecast!==!1,c=l&&l.default_forecast||"daily",m=a.map(S=>({key:S,show:!0})),A=Z1,_=y1,g=g1;return{order:t.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:l?l.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,header_secondary_size:0,...E1(),..._(),...A(),...g()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:m,..._(),...A(),...g()},hourly:{show:M&&c==="hourly",..._(),...A(),...g()},daily:{show:M&&c!=="hourly",..._(),...A(),...g()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,..._(),...A(),...g()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",..._(),...A(),...g()}}}function u2(l){let M=N2(l),c=l&&l.wfc||{},m={order:Array.isArray(c.order)&&c.order.length?c.order.slice():M.order,card:{...M.card,...c.card||{}},current:{...M.current,...c.current||{}},details:{...M.details,...c.details||{}},hourly:{...M.hourly,...c.hourly||{}},daily:{...M.daily,...c.daily||{}},sun_position:{...M.sun_position,...c.sun_position||{}},sun_arc:{...M.sun_arc,...c.sun_arc||{}},editor_accordion:c.editor_accordion!==!1},A=Array.isArray(c.details&&c.details.items)?c.details.items.slice():M.details.items.slice();A=A.filter(g=>g&&o[g.key]),m.details.items=A.length?A:M.details.items,m.details.columns=C(parseInt(m.details.columns,10)||2,1,4);let _=new Set(m.details.items.map(g=>g.key));return Object.keys(o).forEach(g=>{_.has(g)||m.details.items.push({key:g,show:!1})}),["sun_position","sun_arc"].forEach(g=>{let S=c[g]||{};S.flush!==void 0&&(S.flush_top===void 0&&(m[g].flush_top=!!S.flush),S.flush_bottom===void 0&&(m[g].flush_bottom=!!S.flush),S.flush_edges===void 0&&(m[g].flush_edges=!!S.flush))}),t.forEach(g=>{m.order.includes(g)||m.order.push(g)}),m.order=m.order.filter(g=>t.includes(g)),m}let t1=R1.prototype;if(typeof g2<"u"&&g2&&g2.prototype&&g2.prototype.getSecondaryWeatherAttribute){let l=g2.prototype.getSecondaryWeatherAttribute;g2.prototype.getSecondaryWeatherAttribute=function(){let M=this.config&&this.config.current&&this.config.current.secondary_info_attribute;if(M==="__wfc_none__")return null;if(typeof M=="string"&&M&&this.weatherEntity&&t1._wfcMetricEntityChain){let c={config:this.config,hass:this.hass,_wfcSources:t1._wfcSources,_wfcSlotEntityForKey:t1._wfcSlotEntityForKey,_wfcMetricEntityChain:t1._wfcMetricEntityChain},m=null;try{m=(t1._wfcMetricEntityChain.call(c,M)||[]).find(A=>!String(A).startsWith("weather.")&&this.hass&&this.hass.states[A])}catch{m=null}if(m){let A={...this.config,current:{...this.config.current,secondary_info_attribute:{name:M,entity:m}}};return l.call(Object.create(this,{config:{value:A}}))}if(!(M in(this.weatherEntity.attributes||{})))return null}return l.call(this)}}let X2=t1.setConfig;t1.setConfig=function(l){let M=u2(l),c=M.sun_position||{},m=c.forecast_extra,_=!!(!!(c.show||M.sun_arc&&M.sun_arc.show&&M.sun_arc.baseline_mode==="sky")&&(c.weather_adjust!==!1||[c.forecast_temps,c.forecast_icons].some(R=>R&&R!=="hidden")||(Array.isArray(m)?m.length:m&&m!=="none")||Object.values(c.forecast_metric_pos||{}).some(R=>R&&R!=="hidden"))),g=l.current&&l.current.secondary_info_attribute,S=!!(M.current.show&&(g==null||g==="")),O=!!(M.hourly.show||_||S),T=!!(M.daily.show||S),B=!!(O||T),X=O&&T?"both":O?"hourly":"daily",W={...l,show_current:M.current.show||!B,show_forecast:B};B&&(X==="both"||!l.forecast_types||_||S)&&(W.forecast_types=X),X2.call(this,W),this.config.show_current=!!M.current.show,this.config.show_forecast=B,W.forecast_types&&(this.config.forecast_types=W.forecast_types),this.__wfcCfgSrc=void 0};let J2=t1.updated;t1.updated=function(l){J2&&J2.call(this,l),this.isConnected&&this._wfcSyncForecastSources()};let N5=t1.disconnectedCallback;t1.disconnectedCallback=function(){N5&&N5.call(this),this._wfcTeardownForecastSources()};let I2=t1.shouldUpdate;t1.shouldUpdate=function(l){if(I2&&I2.call(this,l))return!0;if(l&&l.has("hass")&&this.config){let M=l.get("hass"),c=this.hass;if(M&&c){let m=new Set;for(let A of this._wfcSources())if(A.overrides&&Object.values(A.overrides).forEach(_=>_&&m.add(_)),q1(A.ref)){let _=U7(this.config,this.hass,w2(A.ref));Object.values(_).forEach(g=>g&&m.add(g))}else A.ref&&m.add(A.ref);for(let A of m)if(M.states[A]!==c.states[A])return!0}}return!1},t1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=u2(this.config)),this.__wfcCfg},t1.computeRowSizing=function(){let l=this._wfc(),M=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",c={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let g=(l.details.items||[]).filter(S=>S.show).length;return Math.max(1,Math.ceil(g/2))},hourly:()=>M?3:2,daily:()=>M?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(l.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(l.sun_arc.height)||90)+24)/56))},m=1,A=4;l.order.filter(g=>l[g]&&l[g].show&&c[g]).forEach(g=>{m+=c[g](),(g==="hourly"||g==="daily")&&(A=6)});let _=Math.max(1,m-1);return{rows:m,minRows:_,minColumns:A}},t1.render=function(){if(!this.config||!this.hass)return h;let l=this.config.entity,M=this.hass.states[l];if(!M){let O=this.hass,T=O?O.config&&O.config.state!=="NOT_RUNNING"?`${O.localize("ui.card.common.entity_not_found")}: ${l}`:O.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return p`<hui-warning>${T}</hui-warning>`}let c=this._wfc(),m=typeof C5=="function"&&C5(M)==="twice_daily",A=this.config.forecast&&this.config.forecast.mode==="chart",_={stateObj:M,isTwice:m,chart:A},S=c.order.filter(O=>c[O]&&c[O].show).map(O=>{let T=this._wfcRenderSection(O,c,_);if(T===h||T==null)return null;let B=c[O]||{},X="wsfc-section";B.flush_top&&(X+=" wsfc-flush-top"),B.flush_bottom&&(X+=" wsfc-flush-bottom"),B.flush_edges&&(X+=" wsfc-flush-edges");let W=this._wfcBackgroundStyle(B);return p`<div class=${X} data-section-id=${O} style=${W}>
          ${this._wfcRenderTitle(B)}${T}
        </div>`}).filter(Boolean);return p`
      <ha-card>
        ${this.config.show_condition_effects?p`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${M}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:h}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(c)}
        ${this._wfcCardAppearanceStyle(c)}
        <div class="wsfc-container">${S}</div>
      </ha-card>
    `},t1._wfcDividerStyle=function(l){let M=[];return l.order.forEach(c=>{let m=l[c];if(!m||!m.show||!m.divider_above&&!m.divider_below)return;let A=`.wsfc-section[data-section-id="${c}"]`,_=m.divider_color||"var(--divider-color, #4a4a4a)",g=`${A}{position:relative;}`,S=O=>["solid","dashed","dotted","double"].includes(O)?O:"solid";if(m.divider_above){let O=Number(m.divider_above_width)||1,T=C(Number(m.divider_above_length)||100,1,100),B=S(m.divider_above_style);g+=`${A}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${A}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${T}%;border-top:${O}px ${B} ${_};}`}if(m.divider_below){let O=Number(m.divider_below_width)||1,T=C(Number(m.divider_below_length)||100,1,100),B=S(m.divider_below_style);g+=`${A}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${A}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${T}%;border-bottom:${O}px ${B} ${_};}`}M.push(g)}),M.length?p`<style>${M.join("")}</style>`:h},t1._wfcCardAppearanceStyle=function(l){let M=l&&l.card||{},c=[];if(M.border_enabled){let A=Math.max(0,Number(M.border_width)||1),_=M.border_color||"var(--primary-color, #2196f3)",g=S=>S!==!1?`${A}px solid ${_}`:"none";c.push(`border-top:${g(M.border_top)}`),c.push(`border-bottom:${g(M.border_bottom)}`),c.push(`border-left:${g(M.border_left)}`),c.push(`border-right:${g(M.border_right)}`)}if(M.border_radius!==""&&M.border_radius!=null){let A=`${Number(M.border_radius)}px`,_=g=>g!==!1?A:"0";c.push(`border-radius:${_(M.corner_tl)} ${_(M.corner_tr)} ${_(M.corner_br)} ${_(M.corner_bl)}`)}M.bg_color&&c.push(`background:${M.bg_color}`);let m=[];if(M.glow_enabled){let A=M.glow_color||"var(--primary-color, #2196f3)",_=C(Number(M.glow_intensity)||1,.2,3),g=(12*_).toFixed(1),S=(-4*_).toFixed(1),O=(4*_).toFixed(1);M.glow_borders_only===!1||!M.border_enabled?m.push(`0 0 ${g}px ${S}px ${A}`):(M.border_top!==!1&&m.push(`0 -${O}px ${g}px ${S}px ${A}`),M.border_bottom!==!1&&m.push(`0 ${O}px ${g}px ${S}px ${A}`),M.border_left!==!1&&m.push(`-${O}px 0 ${g}px ${S}px ${A}`),M.border_right!==!1&&m.push(`${O}px 0 ${g}px ${S}px ${A}`))}if(M.shadow_enabled){let A=E2(M.shadow_color||"#000000",C((Number(M.shadow_opacity)||0)/100,0,1))||M.shadow_color||"rgba(0,0,0,0.35)";m.push(`${Number(M.shadow_x)||0}px ${Number(M.shadow_y)||0}px ${Number(M.shadow_blur)||0}px ${Number(M.shadow_spread)||0}px ${A}`)}return m.length&&c.push(`box-shadow:${m.join(", ")}`),c.length?p`<style>ha-card{${c.join(";")};}</style>`:h},t1._wfcBackgroundStyle=function(l){if(!l||!l.background_enabled)return"";let M=C(l.background_opacity==null?80:Number(l.background_opacity),0,100),c=(100-M)/100,m=100-M,A=l.background_color||"",_;A?_=E2(A,c)||`color-mix(in srgb, ${A} ${m}%, transparent)`:_=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${m}%, transparent)`;let g=l.flush_edges?"0":"8px";return`background-color:${_};border-radius:${g};`};function E2(l,M){if(typeof l!="string")return null;let c=l.trim().replace(/^#/,"");if(c.length===3&&(c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]),!/^[0-9a-fA-F]{6}$/.test(c))return null;let m=parseInt(c.slice(0,2),16),A=parseInt(c.slice(2,4),16),_=parseInt(c.slice(4,6),16);return`rgba(${m}, ${A}, ${_}, ${M})`}t1._wfcRenderTitle=function(l){if(!l||!l.title_show)return h;let M=l.title_text||"",c=l.title_icon||"",m=l.title_text_align||"left",A=l.title_icon_align||"left",_=!!M&&m!=="hide",g=!!c&&A!=="hide";if(!_&&!g)return h;let S=(l.title_icon_color?`color:${l.title_icon_color};`:"")+(l.title_icon_size?`--mdc-icon-size:${l.title_icon_size}px;width:${l.title_icon_size}px;height:${l.title_icon_size}px;`:""),O=(l.title_color?`color:${l.title_color};`:"")+(l.title_font_size?`font-size:${l.title_font_size}px;`:"")+(l.title_font_weight?`font-weight:${l.title_font_weight};`:""),T=g?p`<ha-icon class="wsfc-title-icon" .icon=${c} style=${S}></ha-icon>`:h,B=_?p`<span class="wsfc-title-text" style=${O}>${M}</span>`:h,X=R=>{let f1=[];return g&&A===R&&f1.push(T),_&&m===R&&f1.push(B),f1},W=Number(l.title_indent)||0;return p`<div class="wsfc-title-row" style="padding-left:${W}px;">
      <span class="wsfc-title-zone wsfc-title-left">${X("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${X("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${X("right")}</span>
    </div>`},t1._wfcRenderSection=function(l,M,c){switch(l){case"current":return this._wfcRenderCurrent(c);case"details":return this._wfcRenderDetails(M,c);case"hourly":return this._wfcRenderForecast("hourly",c);case"daily":return this._wfcRenderForecast("daily",c);case"sun_position":return this._wfcRenderSunPosition(M,c);case"sun_arc":return this._wfcRenderSunArc(M,c);default:return h}},t1._wfcRenderCurrent=function(l){let c=this._wfc().current||{},m=Number(c.header_state_size)||0,A=Number(c.header_temp_size)||0,_=Number(c.header_icon_size)||0,g=Number(c.header_secondary_size)||0,S=(g?`--wfc-hdr-sec:${g}px;`:"")+(_?`--current-conditions-icon-size:${_}px;`:"")+(m||A?`--wfc-hdr-state:${m?m+"px":"inherit"};--wfc-hdr-temp:${A?A+"px":"inherit"};`:""),O=p`
      <div
        class="wsfc-current-weather-container${m||A?" wsfc-hdr-sized":""}${g?" wsfc-hdr-secsized":""}"
        style=${S||h}
        .actionHandler=${Z5({hasHold:Q5(this.config.hold_action),hasDoubleClick:Q5(this.config.double_tap_action)})}
        @action=${this.onCardAction}
      >
        <wsfc-current-weather
          class=${(this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?"wsfc-hide-secondary":""}
          .hass=${this.hass}
          .weatherEntity=${this._wfcMainTempEntity(this._wfcMergedCurrentEntity(l.stateObj),c)}
          .config=${this._wfcMainTempConfig(c)}
          .hourlyForecast=${this._hourlyForecastData}
          .dailyForecast=${this._dailyForecastData}
        ></wsfc-current-weather>
      </div>
    `,T=!!c.clock_show_time,B=!!c.clock_show_date;if(!T&&!B)return O;this._wfcEnsureClockTimer();let X=m2=>m2==="above"?"above-center":m2==="below"?"below-center":m2||"right",W=X(c.clock_placement),R=c.clock_date_placement==="with_time"||!c.clock_date_placement?W:X(c.clock_date_placement),f1=T?this._wfcRenderClockTime(c):null,B1=B?this._wfcRenderClockDate(c):null,r2=T&&B&&(c.clock_date_placement==="with_time"||!c.clock_date_placement),_1={},z1=(m2,e5)=>{e5&&(_1[m2]=_1[m2]||[]).push(e5)};if(r2){let m2=c.clock_align==="left"||c.clock_align==="right"?" wsfc-clock-al-"+c.clock_align:"";z1(W,p`<div class="wsfc-clock${m2}">${f1}${B1}</div>`)}else f1&&z1(W,p`<div class="wsfc-clock">${f1}</div>`),B1&&z1(R,p`<div class="wsfc-clock">${B1}</div>`);let i2=m2=>{let e5=[];return["left","center","right"].forEach(c0=>{let b2=m2+"-"+c0;_1[b2]&&e5.push(p`<div class="wsfc-clock-band-cell wsfc-cb-${c0}">${_1[b2]}</div>`)}),e5.length?p`<div class="wsfc-clock-band">${e5}</div>`:h},W2=i2("above"),P3=i2("below"),D3=_1.left||h,K0=[].concat(_1.right||[],_1.center||[]),l0=_1.left&&_1.left.length||K0.length?p`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${D3}
          <div class="wsfc-cur-grow">${O}</div>
          ${K0.length?K0:h}
        </div>`:O;return p`<div class="wsfc-cur-stack">${W2}${l0}${P3}</div>`},t1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let l=this.__wfcCfg||(this.config?u2(this.config):null),M=l&&l.current;this.isConnected&&M&&(M.clock_show_time||M.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},t1._wfcRenderClockTime=function(l){let M=new Date,c=N(this.hass),m={hour:"2-digit",minute:"2-digit"};l.clock_show_seconds&&(m.second="2-digit"),l.clock_format==="12"?m.hour12=!0:l.clock_format==="24"&&(m.hour12=!1);let A;try{A=M.toLocaleTimeString(c,m)}catch{A=M.toTimeString().slice(0,l.clock_show_seconds?8:5)}l.clock_format==="12"&&(A=A.replace(/^0/,""));let _=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),g=V2(l.clock_contrast,_),S=`font-size:${Number(l.clock_font_size)>0?C(Number(l.clock_font_size),8,100)+"px":"var(--wfc-clock-auto, 28px)"};font-weight:${l.clock_font_weight||"500"};`+(l.clock_color?`color:${l.clock_color};`:"")+(l.clock_font_family?`font-family:${l.clock_font_family};`:"")+(g?`text-shadow:${g};`:"");return p`<div class="wsfc-clock-time" style=${S}>${A}</div>`};function c5(l,M,c){let m=O=>O<10?"0"+O:""+O,A=l.toLocaleDateString(c,{month:"long"}),_=l.toLocaleDateString(c,{month:"short"}),g=l.toLocaleDateString(c,{weekday:"long"}),S={YYYY:""+l.getFullYear(),YY:m(l.getFullYear()%100),MONTH:A,MON:_,WDAY:g,MM:m(l.getMonth()+1),M:""+(l.getMonth()+1),DD:m(l.getDate()),D:""+l.getDate()};return M.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,O=>S[O]!=null?S[O]:O)}t1._wfcRenderClockDate=function(l){let M=new Date,c=N(this.hass),m=_2.find(T=>T.value===l.clock_date_format)||_2[0],A;try{A=m.pattern?c5(M,m.pattern,c):M.toLocaleDateString(c,m.opts)}catch{A=M.toDateString()}let _=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),g=l.clock_date_contrast!=null?l.clock_date_contrast:l.clock_contrast,S=V2(g,_),O=`font-size:${Number(l.clock_date_font_size)>0?C(Number(l.clock_date_font_size),8,100)+"px":"var(--wfc-clock-date-auto, 12px)"};`+(l.clock_date_color?`color:${l.clock_date_color};`:"")+(S?`text-shadow:${S};`:"");return p`<div class="wsfc-clock-date" style=${O}>${A}</div>`},t1._wfcForecastConfigFor=function(l){let M=this.config&&this.config.forecast||{},c=M[`${l}_mode`]||M.mode||"simple",m=M[`${l}_extra_attribute`]!=null?M[`${l}_extra_attribute`]:M.extra_attribute;(m==="none"||m==="")&&(m=void 0);let A=M[`${l}_chart_attribute`]!=null?M[`${l}_chart_attribute`]:M.default_chart_attribute,_={...M,mode:c};return m==null?delete _.extra_attribute:_.extra_attribute=m,A!=null&&(_.default_chart_attribute=A),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(S=>{let O=M[`${l}_${S}`];O!=null&&(_[S]=O)}),{config:{...this.config,forecast:_},chart:c==="chart"}},t1._wfcRenderForecast=function(l,M){let c=l==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!c||!c.length)return h;let m=this._wfcMergeForecast(c,l),{config:A,chart:_}=this._wfcForecastConfigFor(l),g=_?p`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${A}
          .weatherEntity=${M.stateObj}
          .forecast=${m}
          .forecastType=${l}
          .isTwiceDailyEntity=${M.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:p`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${A}
          .weatherEntity=${M.stateObj}
          .forecast=${m}
          .forecastType=${l}
          .isTwiceDailyEntity=${M.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return p`<div class="wsfc-forecast-container" data-forecast-type=${l}>${g}</div>`};let y5="device:",q1=l=>typeof l=="string"&&l.indexOf(y5)===0,w2=l=>q1(l)?l.slice(y5.length):null,W7=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],MV=W7.map(l=>l.key),dV=[{re:/feels?[\s_-]?likes?|apparent|wind[\s_-]?chill|windchill|heat[\s_-]?index/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}],hi=new WeakMap;function q9(l,M){if(!l||!M||!l.entities)return[];let c=hi.get(l.entities);if(c&&c.hass!==l&&(c.hass=l,Object.keys(l.entities).length!==c.size0&&(c=null)),!c){c=new Map;for(let m in l.entities){let A=l.entities[m]&&l.entities[m].device_id;A&&(c.has(A)||c.set(A,[]),c.get(A).push(m))}c.size0=Object.keys(l.entities).length,c.hass=l,hi.set(l.entities,c)}return c.get(M)||[]}function pV(l,M){let c=l&&l.states[M];if(!c)return null;let m=c.attributes&&c.attributes.device_class,A=(M+" "+(c.attributes&&c.attributes.friendly_name||"")).toLowerCase(),_=null;for(let S of dV)if(S.re.test(A)){_=S.key;break}if(_||(m==="temperature"?_="temperature":m==="humidity"?_="humidity":m==="pressure"||m==="atmospheric_pressure"?_="pressure":m==="wind_speed"?_="wind_speed":m==="irradiance"?_="solar_radiation":m==="illuminance"?_="illuminance":m==="precipitation_intensity"?_="precipitation":/(^|[\s_-])temperature/.test(A)?_="temperature":/pressure/.test(A)&&(_="pressure")),!_||MV.indexOf(_)===-1)return null;let g=0;if(/indoor|inside/.test(A)||_==="uv_index"&&!/index|\buvi\b/.test(A))return null;if(_==="apparent_temperature"&&/chill|heat[\s_-]?index/.test(A)&&(g+=10),/globe|wbgt|soil|water|pool|probe|leaf|\bch[\s_-]?\d|(temperature|humidity)[\s_-]?\d|_\d+$/.test(A.replace(/_2$/,""))&&(g+=40),/outdoor/.test(A)&&(g-=2),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(A)&&(g+=20),_==="pressure"){if(/deficit|vpd|vapou?r/.test(A))return null;/absolute/.test(A)&&(g+=50),/relative|sea/.test(A)&&(g-=5)}return _==="precipitation"&&(/rate/.test(A)&&(g-=5),/event|hourly|24h|total/.test(A)&&(g+=10)),{key:_,penalty:g}}let fi=new WeakMap;function Ai(l,M){let c=l&&l.devices||{},m=fi.get(c);return m||(m=new Map,fi.set(c,m)),m.has(M)||m.set(M,uV(c,M)),m.get(M)}function uV(l,M){let c=l[M],m=c&&c.config_entries||[];return m.length?Object.keys(l).filter(A=>A!==M&&(l[A].config_entries||[]).some(_=>m.includes(_))):[]}let vi=new WeakMap;function be(l,M){if(!l||!l.entities)return xi(l,M);let c=vi.get(l.entities);c||(c=new Map,vi.set(l.entities,c));let m=[M,...Ai(l,M)],A="";for(let O of m)for(let T of q9(l,O))l.states[T]&&(A+=T.length+",");let _=M+"|"+m.length+"|"+A,g=c.get(M);if(g&&g.key===_&&g.devices===l.devices)return g.map;let S=xi(l,M);return c.set(M,{key:_,devices:l.devices,map:S}),S}function xi(l,M){let c={},m={},A=q9(l,M).map(g=>[g,0]),_=Ai(l,M).flatMap(g=>q9(l,g).map(S=>[S,15]));for(let[g,S]of[...A,..._]){let O=pV(l,g);if(!O)continue;let T={key:O.key,penalty:O.penalty+S};(m[T.key]==null||T.penalty<m[T.key])&&(m[T.key]=T.penalty,c[T.key]=g)}return c}function U7(l,M,c){let m={...be(M,c)},A=l&&l.metric_sources&&l.metric_sources.device_map&&l.metric_sources.device_map[c]||{};for(let _ in A)A[_]&&(m[_]=A[_]);return m}function gi(l,M){let c=l&&l.metric_sources||{};if(Array.isArray(c.sources))return c.sources.filter(O=>O&&O.ref).map(O=>({ref:O.ref,overrides:{...O.overrides||{}},disabled:!!O.disabled}));let m=[],A=c.device_map||{},_=c.custom||{},g=O=>q1(O)?{...A[w2(O)]||{}}:{},S=c.primary||l&&l.entity;return S&&m.push({ref:S,overrides:{...g(S),..._}}),c.fallback&&c.fallback!==S&&m.push({ref:c.fallback,overrides:g(c.fallback)}),m}t1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},t1._wfcSources=function(){return gi(this.config,this.hass)},t1._wfcSlotEntityForKey=function(l,M){return l?q1(l)?U7(this.config,this.hass,w2(l))[M]||null:l:null},t1._wfcMetricEntityChain=function(l){let M=[],c=m=>{m&&!M.includes(m)&&this.hass&&this.hass.states[m]&&M.push(m)};for(let m of this._wfcSources())m.disabled||(m.overrides&&m.overrides[l]&&c(m.overrides[l]),c(this._wfcSlotEntityForKey(m.ref,l)));if(typeof R1.__wsfcExtraEntity=="function")try{c(R1.__wsfcExtraEntity(l,this.hass,this.config))}catch{}return c(this.config&&this.config.entity),M},t1._wfcCurrentMetric=function(l){for(let M of this._wfcMetricEntityChain(l)){let c=this.hass.states[M];if(c)if(M.startsWith("weather."))try{let m=d7(this.hass,c,this.config,l);if(m!=null&&m!=="")return m}catch{}else{let m=c.state;if(m!=null&&m!==""&&m!=="unknown"&&m!=="unavailable"){let A=c.attributes&&c.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(c):A?`${m} ${A}`:`${m}`}catch{return A?`${m} ${A}`:`${m}`}}}}return null},t1._wfcCurrentMetricRaw=function(l){if(!this.hass)return null;for(let M of this._wfcMetricEntityChain(l)){let c=this.hass.states[M];if(c)if(M.startsWith("weather.")){let m=c.attributes?c.attributes[l]:null;if(m!=null&&m!=="")return m}else{let m=c.state;if(m!=null&&m!==""&&m!=="unknown"&&m!=="unavailable"){let A=Number(m);return isNaN(A)?m:A}}}return null},t1._wfcMergedCurrentEntity=function(l){try{if(!l||!l.attributes)return l;let M=this.config&&this.config.entity;if(!this._wfcSources().some(S=>S.ref!==M||S.overrides&&Object.keys(S.overrides).length))return l;let A={...l.attributes},_=!1,g=["temperature",...typeof x2<"u"?x2:[]];for(let S of g){let O=this._wfcCurrentMetricRaw(S);O!=null&&O!==A[S]&&(A[S]=O,_=!0)}return _?{...l,attributes:A}:l}catch{return l}},t1._wfcFeelsLike=function(l){let M=null;try{M=this._wfcCurrentMetricRaw("apparent_temperature")}catch{M=null}M==null&&(M=l&&l.attributes?l.attributes.apparent_temperature:null);let c=Number(M);return M==null||M===""||!Number.isFinite(c)?null:c},t1._wfcMainTempEntity=function(l,M){if(!M||M.main_temperature!=="feels_like"||!l||!l.attributes)return l;let c=this._wfcFeelsLike(l);return c==null?l:{...l,attributes:{...l.attributes,temperature:c}}},t1._wfcMainTempConfig=function(l){if(!l||l.main_temperature!=="feels_like"||!this.config.current||!this.config.current.temperature_entity)return this.config;if(this._wfcFeelsLike(this.hass&&this.config.entity?this.hass.states[this.config.entity]:null)==null)return this.config;let M={...this.config.current};if(delete M.temperature_entity,this.__wfcMtCfg&&this.__wfcMtCfg.src===this.config)return this.__wfcMtCfg.cfg;let c={...this.config,current:M};return this.__wfcMtCfg={src:this.config,cfg:c},c},t1._wfcDetailValue=function(l,M){let c=o[l];if(!c)return null;if(c.kind==="sunrise"||c.kind==="sunset"){let m=z(this.hass),A=c.kind==="sunrise"?m.sunrise:m.sunset;return A?Y(this.hass,A):null}try{let m=this._wfcCurrentMetric(l);return m??null}catch{return null}},t1._wfcRenderDetails=function(l,M){let c=l.details||{},m=(c.items||[]).filter(S=>S.show);if(c.chips)return this._wfcRenderDetailChips(c,m,M);let A=[];if(m.forEach(S=>{let O=o[S.key];if(!O)return;let T=this._wfcDetailValue(S.key,M);if(T==null||T==="")return;let B=S.mode==="custom",X=B?S.icon_color:c.global_icon_color,W=B?S.icon_size:c.global_icon_size,R=B?S.text_color:c.global_text_color,f1=B?S.text_size:c.global_text_size,B1=S.icon||O.icon||p5&&p5[S.key]||"mdi:information-outline",r2=(X?`color:${X};`:"")+(W?`--mdc-icon-size:${W}px;width:${W}px;height:${W}px;`:""),_1=(R?`color:${R};`:"")+(f1?`font-size:${f1}px;`:"");A.push(p`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${B1} style=${r2}></ha-icon>
          <span class="wsfc-detail-value" style=${_1}>${T}</span>
        </div>
      `)}),!A.length)return h;if((c.details_layout||"grid")==="wrap")return p`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${A}</div>
      </div>`;let _=C(parseInt(l.details.columns,10)||2,1,4),g=`grid-template-columns:repeat(${_}, minmax(0, 1fr));`;return p`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${_}" style=${g}>${A}</div>
    </div>`},t1._wfcRenderDetailChips=function(l,M,c){let m=C(Number(l.chip_scale)||1,.5,2.5),_=(l.chip_pill!=null?!!l.chip_pill:l.chip_shape!=="rounded"&&l.chip_shape!=="square")?999:l.chip_radius==null?8:Number(l.chip_radius),g=l.chip_icon_source||"auto",S=l.chip_show_icon!==!1,O=l.chip_layout||"wrap",T=Math.max(0,parseInt(l.chip_columns,10)||0),B=l.chip_text_size?`${Number(l.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${m})`,X=l.chip_icon_size?`${Number(l.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${m})`,W=`--wfc-chip-scale:${m};--wfc-chip-radius:${_}px;--wfc-chip-font:${B};--wfc-chip-icon-size:${X};`+(l.chip_bg?`--wfc-chip-bg:${l.chip_bg};`:"")+(l.chip_border_color?`--wfc-chip-border:${l.chip_border_color};`:"")+(l.chip_text_color?`--wfc-chip-text:${l.chip_text_color};`:"")+(l.chip_icon_color?`--wfc-chip-icon:${l.chip_icon_color};`:"");O==="grid"&&T>0&&(W+=`grid-template-columns:repeat(${T}, minmax(0, 1fr));`);let R=[];return M.forEach(f1=>{let B1=o[f1.key];if(!B1)return;let r2=this._wfcDetailValue(f1.key,c);if(l.chip_hide_when_off&&(r2==null||r2===""||r2==="unknown"||r2==="unavailable"))return;let _1=r2==null||r2===""?"\u2014":r2,z1=B1.label||f1.key,i2=l.chip_show_name?`${z1}: ${_1}`:_1,W2="";S&&g!=="none"&&(W2=g==="entity"&&f1.icon||B1.icon,W2=W2||p5&&p5[f1.key]||"mdi:information-outline"),R.push(p`
        <span class="wsfc-chip">
          ${W2?p`<ha-icon .icon=${W2}></ha-icon>`:h}
          <span class="wsfc-chip-text">${i2}</span>
        </span>
      `)}),R.length?p`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${O}" style=${W}>${R}</div>
    </div>`:h},t1._wfcHourlySource=function(){let l=this._hourlyForecastEvent,M=l&&Array.isArray(l.forecast)&&l.forecast.length?l.forecast:this._hourlyForecastData;return this._wfcMergeForecast(M,"hourly")},t1._wfcExtraForecastEntities=function(){let l=this.config&&this.config.entity,M=new Set,c=m=>{m&&m!==l&&typeof m=="string"&&m.startsWith("weather.")&&this.hass&&this.hass.states[m]&&M.add(m)};for(let m of this._wfcSources())m.disabled||(c(m.ref),m.overrides&&Object.values(m.overrides).forEach(c));return[...M]},t1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let l=new Set(this._wfcExtraForecastEntities());for(let A of Object.keys(this.__wfcSrc))if(!l.has(A)){try{this.__wfcSrc[A].unsub&&this.__wfcSrc[A].unsub()}catch{}delete this.__wfcSrc[A]}let M=this.config.forecast_types||"both",c=M!=="daily",m=M!=="hourly";l.forEach(A=>{if(this.__wfcSrc[A])return;let _={unsub:null,hourly:null,daily:null};this.__wfcSrc[A]=_;let g=(S,O)=>{try{let T=this.hass.connection.subscribeMessage(B=>{_[O]=B&&Array.isArray(B.forecast)?B.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:S,entity_id:A},{resubscribe:!1});Promise.resolve(T).then(B=>{if(this.__wfcSrc[A]!==_){try{B&&B()}catch{}return}let X=_.unsub;_.unsub=()=>{try{X&&X()}catch{}try{B&&B()}catch{}}}).catch(()=>{})}catch{}};c&&g("hourly","hourly"),m&&g(C5&&typeof C5=="function"&&C5(this.hass.states[A])||"daily","daily")})}catch{}},t1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let l of Object.keys(this.__wfcSrc))try{this.__wfcSrc[l].unsub&&this.__wfcSrc[l].unsub()}catch{}this.__wfcSrc={}}},t1._wfcSourceForecast=function(l,M){let c=this.__wfcSrc&&this.__wfcSrc[l];return c&&c[M]||null},t1._wfcMergeForecast=function(l,M){try{if(!Array.isArray(l)||!l.length)return l;let c=this.config&&this.config.entity,m=this._wfcExtraForecastEntities();if(!m.length)return l;let A={};if(m.forEach(O=>{let T=this._wfcSourceForecast(O,M);Array.isArray(T)&&T.length&&(A[O]=T.map(B=>({t:new Date(B.datetime).getTime(),fc:B})).filter(B=>!isNaN(B.t)))}),!Object.keys(A).length)return l;let _=(O,T)=>{let B=A[O];if(!B)return null;let X=null,W=1/0;for(let R of B){let f1=Math.abs(R.t-T);f1<W&&(W=f1,X=R.fc)}return W<=90*6e4?X:null},g=W7.map(O=>O.key),S={};return g.forEach(O=>{S[O]=this._wfcMetricEntityChain(O).filter(T=>T===c||A[T])}),l.map(O=>{let T=new Date(O.datetime).getTime();if(isNaN(T))return O;let B=O;return g.forEach(X=>{for(let W of S[X]){if(W===c){if(O[X]!=null)break;continue}let R=_(W,T);if(R&&R[X]!=null){B===O&&(B={...O}),B[X]=R[X];break}}}),B})}catch{return l}},t1._wfcCloudAt=function(l){let M=this._wfcHourlySource();if(!M||!M.length)return null;let c=null,m=1/0;for(let A=0;A<M.length;A++){let _=new Date(M[A].datetime);if(isNaN(_))continue;let g=Math.abs(_.getTime()-l.getTime());g<m&&(m=g,c=M[A])}return!c||m>90*6e4?null:n(c.cloud_coverage)?c.cloud_coverage/100:n(c.precipitation_probability)?c.precipitation_probability/100:null},t1._wfcForecastAt=function(l){let M=this._wfcHourlySource();if(!M||!M.length)return null;let c=null,m=1/0;for(let A=0;A<M.length;A++){let _=new Date(M[A].datetime);if(isNaN(_))continue;let g=Math.abs(_.getTime()-l.getTime());g<m&&(m=g,c=M[A])}return c&&m<=90*6e4?c:null},t1._wfcSunHours=function(l){l=l||{};let M=new Date(Date.now()+(Number(l.timeframe_offset_hours)||0)*36e5),c,m;if(l.timeframe_mode==="day")c=new Date(M),c.setHours(0,0,0,0),m=new Date(c.getTime()+24*36e5);else if(l.timeframe_mode==="match_arc"){let S=z(this.hass,M);S.sunrise&&S.sunset?(c=new Date(S.sunrise.getTime()-60*6e4),m=new Date(S.sunset.getTime()+60*6e4)):(c=new Date(M),c.setHours(0,0,0,0),m=new Date(c.getTime()+24*36e5))}else{let S=C(Number(l.timeframe_hours)||24,1,72)*36e5;l.timeframe_anchor==="now_center"?(c=new Date(M.getTime()-S/2),m=new Date(M.getTime()+S/2)):(c=new Date(M),c.setMinutes(0,0,0),m=new Date(c.getTime()+S))}let A=m.getTime()-c.getTime(),_=C(Math.round(A/36e5),2,72),g=[];for(let S=0;S<=_;S++){let O=new Date(c.getTime()+A*S/_);g.push({date:O,cloud:this._wfcCloudAt(O)})}return g},t1._wfcFmtTime=function(l,M){if(!(l instanceof Date)||isNaN(l))return"--";let c=N(this.hass);try{return M==="12"?l.toLocaleTimeString(c,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):M==="24"?l.toLocaleTimeString(c,{hour:"2-digit",minute:"2-digit",hour12:!1}):l.toLocaleTimeString(c,{hour:"2-digit",minute:"2-digit"})}catch{return l.toTimeString().slice(0,5)}},t1._wfcSkyGradient=function(l){let M=this._wfcSunHours(l);if(M.length<2)return null;let{lat:c,lng:m}=I(this.hass);if(!n(c)||!n(m))return null;let A=l.weather_adjust!==!1,_=M.length,g=[];for(let S=0;S<_;S++){let O=a1(V1(this.hass,M[S].date)),T=(S/(_-1)*100).toFixed(2),B=C1(O,{day_color:l.day_color,night_color:l.night_color,cloud:A?M[S].cloud:0});g.push(`${B} ${T}%`)}return{gradient:`linear-gradient(to right, ${g.join(", ")})`,hours:M}},t1._wfcSunMarker=function(l,M){if(M==null)return h;let c=l.marker_color||"var(--primary-text-color)",m=C(Number(l.marker_opacity==null?100:l.marker_opacity),0,100)/100;return p`<div class="wsfc-sunpos-now" style="left:${M.toFixed(2)}%;background:${c};opacity:${m};"></div>`},t1._wfcSunRiseSetMarkers=function(l,M,c,m){let{sunrise:A,sunset:_}=z(this.hass);if(!A||!_||c<=M)return h;let g=l.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",S=C(Number(l.ss_markers_opacity==null?100:l.ss_markers_opacity),0,100)/100,O=[];return[A.getTime(),_.getTime()].forEach(T=>{if(T<M||T>c)return;let B=((T-M)/(c-M)*100).toFixed(2);O.push(p`<span class="wsfc-sunpos-ssmark" style="left:${B}%;background:${g};opacity:${S};"></span>`)}),O.length?p`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${m}">${O}</div>`:h},t1._wfcRenderSunPosition=function(l,M){let c=l.sun_position,m=this._wfcSkyGradient(c);if(!m)return h;let{gradient:A,hours:_}=m,g=_.length,S=c.times_position||"below";S==="center"&&(S="overlay");let O=c.ticks_position||"hidden",T=S!=="hidden",B=O!=="hidden",X=C(parseInt(c.ticks_every,10)||0,0,24),W;if(X>0&&g>1){let G=(_[g-1].date.getTime()-_[0].date.getTime())/36e5,n1=G>0?G/(g-1):1;W=Math.max(1,Math.round(X/n1))}else W=Math.max(1,Math.round((g-1)/8));let R=G=>(G/(g-1)*100).toFixed(2),f1=[];if(T)for(let G=0;G<g;G+=W){let n1;try{n1=_[G].date.toLocaleTimeString(N(this.hass),{hour:"numeric"})}catch{n1=_[G].date.getHours()+""}f1.push(p`<span class="wsfc-sunpos-tick" style="left:${R(G)}%">${n1}</span>`)}let B1=c.times_color||"var(--secondary-text-color, #9e9e9e)",r2=[];if(B)for(let G=0;G<g;G+=W)r2.push(p`<span class="wsfc-sunpos-mark" style="left:${R(G)}%;background:${B1};"></span>`);let _1=Date.now(),z1=_[0].date.getTime(),i2=_[g-1].date.getTime(),P3=_1>=z1&&_1<=i2&&i2>z1?C((_1-z1)/(i2-z1)*100,0,100):null,D3=Number(c.height)||44,K0=`font-size:${Number(c.times_font_size)||11}px;font-weight:${c.times_font_weight||"400"};`+(c.times_color?`color:${c.times_color};`:""),L0=G=>p`<div class="wsfc-sunpos-ticks${G||""}" style=${K0}>${f1}</div>`,l0=G=>p`<div class="wsfc-sunpos-marks${G||""}">${r2}</div>`,m2=c.ss_markers_position||"hidden",e5=m2!=="hidden",c0=b(c),b2={};c0.forEach(G=>b2[G.key]=G.pos);let X0=b2.temps&&b2.temps!=="hidden",R3=b2.icons&&b2.icons!=="hidden",q7=c.forecast_temp_color||c.forecast_color||"",B3=c.forecast_icon_color||c.forecast_color||"",z3=c.forecast_extra_color||c.forecast_color||"",Oe=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),F2=c.forecast_metric_style||{},N3=G=>F2[G]&&F2[G].text_color||(G==="temps"?q7:z3),J0=G=>F2[G]&&F2[G].icon_color||B3,$e=G=>F2[G]&&F2[G].icon_size||c.forecast_icon_size,Te=G=>F2[G]&&F2[G].text_size||c.forecast_font_size||11,Q7=G=>V2(F2[G]&&F2[G].contrast||"",Oe),I3=G=>{let n1=N3(G),x1=Q7(G);return`font-size:${Number(Te(G))||11}px;`+(n1?`color:${n1};`:"")+(x1?`text-shadow:${x1};`:"")},W3=G=>{let n1=J0(G),x1=$e(G),$1=Q7(G);return(n1?`color:${n1};`:"")+(x1?`--mdc-icon-size:${x1}px;width:${x1}px;height:${x1}px;`:"")+($1?`filter:drop-shadow(${$1});`:"")},Y7=f.some(G=>b2[G]&&b2[G]!=="hidden"),M0=[];if(X0||R3||Y7){let G=this._wfcHourlySource()||[];for(let n1 of G){let x1=new Date(n1.datetime);if(isNaN(x1))continue;let $1=x1.getTime();$1<z1||$1>i2||M0.push({t:$1,fc:n1})}M0.sort((n1,x1)=>n1.t-x1.t)}let U3=i2-z1,K7=G=>U3>0?((G-z1)/U3*100).toFixed(2):"0",j3=(G,n1)=>{let x1=null,$1=1/0;for(let S2 of M0){let r5=Math.abs(S2.t-G);r5<$1&&($1=r5,x1=S2.fc)}return $1<=n1?x1:null},e3={},C2=G=>{let n1=G==null?"":String(G);if(e3[n1])return e3[n1];let x1=[];if(M0.length||G==="ticks"||G==="midticks"){let $1=G==="all"||G==="0",S2=G==="ticks",r5=G==="midticks";if(S2||r5){let W5=U3>0&&g>1?U3/(g-1)*W:36e5,e4=Math.max(W5/2,90*6e4),De=r5?W/2:0;for(let M5=De;M5<=g-1;M5+=W){let Re=Math.floor(M5),kV=Math.min(g-1,Math.ceil(M5)),OV=M5-Re,Be=_[Re].date.getTime()+(_[kV].date.getTime()-_[Re].date.getTime())*OV;if(Be<z1||Be>i2)continue;let $V=(M5/(g-1)*100).toFixed(2);x1.push({pct:$V,fc:j3(Be,e4)})}}else if($1)for(let W5 of M0)x1.push({pct:K7(W5.t),fc:W5.fc});else{let W5=C(parseInt(G,10)||3,1,6),e4=null,De=W5*36e5;for(let M5 of M0)(e4==null||M5.t-e4>=De-6e4)&&(x1.push({pct:K7(M5.t),fc:M5.fc}),e4=M5.t)}}return e3[n1]=x1,x1},d0=G=>{let n1=F2[G]&&F2[G].every;return n1!=null&&n1!==""?n1:c.forecast_every},X7=G=>{let n1=C2(d0("temps"));return p`<div class="wsfc-sunpos-fc${G||""}" style=${I3("temps")}>${n1.map(x1=>{let $1=x1.fc&&x1.fc.temperature!=null?Math.round(x1.fc.temperature)+"\xB0":"";return $1?p`<span class="wsfc-sunpos-fc-item" style="left:${x1.pct}%">${$1}</span>`:h})}</div>`},Ee=G=>{let n1=W3("icons"),x1=C2(d0("icons"));return p`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${G||""}">${x1.map($1=>{let S2=$1.fc&&$1.fc.condition?H($1.fc.condition):"";return S2?p`<span class="wsfc-sunpos-fc-item" style="left:${$1.pct}%"><ha-icon .icon=${S2} style=${n1}></ha-icon></span>`:h})}</div>`},Fe=!!c.forecast_metric_detail_icons,H1=(G,n1)=>{let x1=W3(G),$1=C2(d0(G));return p`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${n1||""}" style=${I3(G)}>${$1.map(S2=>{let r5=S2.fc?E(G,S2.fc):null;if(r5==null)return h;let W5=D(G,Fe);return p`<span class="wsfc-sunpos-fc-item" style="left:${S2.pct}%">${W5?p`<ha-icon .icon=${W5} style=${x1}></ha-icon>`:h}<span class="wsfc-sunpos-fc-extra-val">${r5}</span></span>`})}</div>`},k1=G=>{let n1=W3("icons"),x1=C2(d0("icons"));return p`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${G||""}" style=${I3("temps")}>${x1.map($1=>{let S2=$1.fc&&$1.fc.condition?H($1.fc.condition):"",r5=$1.fc&&$1.fc.temperature!=null?Math.round($1.fc.temperature)+"\xB0":"";return!S2&&!r5?h:p`<span class="wsfc-sunpos-fc-item" style="left:${$1.pct}%">${S2?p`<ha-icon .icon=${S2} style=${n1}></ha-icon>`:h}${r5?p`<span class="wsfc-sunpos-fc-temp-val">${r5}</span>`:h}</span>`})}</div>`},y2=!!c.forecast_temp_with_icon&&X0&&R3&&b2.temps===b2.icons,P2=(G,n1)=>y2&&G==="icons"?k1(n1):G==="temps"?X7(n1):G==="icons"?Ee(n1):H1(G,n1),t5=G=>c0.filter(n1=>n1.pos===G&&!(y2&&n1.key==="temps")).map(n1=>n1.key),I5=t5("overlay"),G3=[];I5.length===1?G3.push(P2(I5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):I5.forEach((G,n1)=>{let x1=n1===0?" wsfc-sunpos-fc-ovl-top":n1===I5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";G3.push(P2(G," wsfc-sunpos-fc-ovl"+x1))});let J7=t5("above").map(G=>P2(G)),Pe=t5("below").reverse().map(G=>P2(G));return p`
      <div class="wsfc-sunpos-section">
        ${J7}
        ${e5&&m2==="above"?this._wfcSunRiseSetMarkers(c,z1,i2,"row"):h}
        ${B&&O==="above"?l0():h}
        ${T&&S==="above"?L0():h}
        <div class="wsfc-sunpos-bar" style="height:${D3}px;background:${A}">
          ${e5&&m2==="overlay"?this._wfcSunRiseSetMarkers(c,z1,i2,"overlay"):h}
          ${this._wfcSunMarker(c,P3)}
          ${B&&O==="overlay"?l0(" wsfc-sunpos-marks-center"):h}
          ${T&&S==="overlay"?L0(" wsfc-sunpos-ticks-center"):h}
          ${G3}
        </div>
        ${T&&S==="below"?L0():h}
        ${B&&O==="below"?l0():h}
        ${e5&&m2==="below"?this._wfcSunRiseSetMarkers(c,z1,i2,"row"):h}
        ${Pe}
      </div>
    `},t1._wfcArcWindow=function(l,M,c){let m=l.timeframe_mode||"sunrise_sunset",A=Date.now()+(Number(l.timeframe_offset_hours)||0)*36e5;if(m==="day"){let _=new Date(A);return _.setHours(0,0,0,0),{t0:_.getTime(),t1:_.getTime()+24*36e5}}if(m==="hours"){let _=C(Number(l.timeframe_hours)||24,1,72)*36e5;if(l.timeframe_anchor==="now_center")return{t0:A-_/2,t1:A+_/2};let g=new Date(A);return g.setMinutes(0,0,0),{t0:g.getTime(),t1:g.getTime()+_}}return{t0:M,t1:c}},t1._wfcRenderSunArc=function(l,M){let c=l.sun_arc,{sunrise:m,sunset:A}=z(this.hass,new Date(Date.now()+(Number(c.timeframe_offset_hours)||0)*36e5));if(!m||!A)return h;let _=Date.now(),g=m.getTime(),S=A.getTime(),O=S-g,T;if(c.baseline_mode==="sky"&&l.sun_position){let H1=this._wfcSunHours(l.sun_position);H1&&H1.length>=2&&(T={t0:H1[0].date.getTime(),t1:H1[H1.length-1].date.getTime()})}T||(T=this._wfcArcWindow(c,g,S));let B=T.t0,X=T.t1,W=X-B||1,R=H1=>C((H1-B)/W,0,1),f1=100,B1=78,r2=14,_1=R(g),z1=R(S),i2=z1-_1,W2=H1=>{if(i2<=0||H1<=_1||H1>=z1)return B1;let k1=(H1-_1)/i2;return B1-(B1-r2)*(1-Math.pow(2*k1-1,2))},P3=96,D3="";for(let H1=0;H1<=P3;H1++){let k1=H1/P3;D3+=(H1===0?"M":"L")+(k1*f1).toFixed(2)+" "+W2(k1).toFixed(2)+" "}let K0=_>=B&&_<=X,L0=_>=g&&_<=S,l0=R(_),m2=(l0*100).toFixed(2),e5=(W2(l0)/f1*100).toFixed(2),c0=Number(c.height)||90,b2=c.time_format||"auto",X0=c.tick_color||"var(--secondary-text-color, #9e9e9e)",R3=[];{let H1=new Date(B);H1.setMinutes(0,0,0),H1.getTime()<B&&H1.setTime(H1.getTime()+36e5);for(let k1=H1.getTime();k1<=X;k1+=36e5)R3.push(R(k1))}let q7=[];c.show_arc_ticks&&R3.forEach(H1=>{if(H1<=0||H1>=1)return;let k1=(H1*f1).toFixed(2),y2=W2(H1);q7.push(c1`<line x1="${k1}" y1="${(y2-2.5).toFixed(2)}" x2="${k1}" y2="${(y2+2.5).toFixed(2)}" stroke="${X0}" stroke-width="0.6"></line>`)});let B3=[];c.show_base_ticks&&R3.forEach(H1=>{let k1=(H1*f1).toFixed(2);B3.push(c1`<line x1="${k1}" y1="${B1}" x2="${k1}" y2="${B1+3}" stroke="${X0}" stroke-width="0.6"></line>`)});let z3=c.sunrise_sunset_ticks||"none",Oe=z3==="arc"||z3==="both",F2=z3==="base"||z3==="both",N3=[];g>=B&&g<=X&&N3.push(R(g)),S>=B&&S<=X&&N3.push(R(S)),Oe&&N3.forEach(H1=>{let k1=(H1*f1).toFixed(2),y2=W2(H1);q7.push(c1`<line x1="${k1}" y1="${(y2-4.5).toFixed(2)}" x2="${k1}" y2="${(y2+4.5).toFixed(2)}" stroke="${X0}" stroke-width="1.4"></line>`)}),F2&&N3.forEach(H1=>{let k1=(H1*f1).toFixed(2);B3.push(c1`<line x1="${k1}" y1="${(B1-2).toFixed(2)}" x2="${k1}" y2="${B1+6}" stroke="${X0}" stroke-width="1.4"></line>`)});let J0=h;if(K0){let H1="wsfc-sunarc-sun"+(L0?"":" wsfc-sunarc-sun-night"),k1=`left:${m2}%;top:${e5}%;`;if(!L0&&c.night_moon&&c.moon_icon==="phase"){let y2=R5.getMoonIllumination(new Date).phase,P2=10,t5=11,I5=Math.cos(y2*2*Math.PI),G3=Math.abs(I5)*P2,J7=y2<.5?1:0,Pe=`M${t5} ${t5-P2} A${P2} ${P2} 0 0 ${J7} ${t5} ${t5+P2} A${G3} ${P2} 0 0 ${I5>0?1-J7:J7} ${t5} ${t5-P2} Z`;J0=p`<span class="${H1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${k1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${Pe} fill="#e9e6d6"></path></svg></span>`}else if(!L0&&c.night_moon){let y2=c.moon_icon||"mdi:weather-night";J0=p`<ha-icon class="${H1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${y2} style=${k1}></ha-icon>`}else c.sun_icon?J0=p`<ha-icon class="${H1} wsfc-sunarc-sun-icon" .icon=${c.sun_icon} style=${k1}></ha-icon>`:J0=p`<span class="${H1} wsfc-sunarc-sun-dot" style=${k1}></span>`}let $e=`font-size:${Number(c.time_font_size)||13}px;font-weight:${c.time_font_weight||"600"};`+(c.time_color?`color:${c.time_color};`:""),Te=`font-size:${Number(c.caption_font_size)||11}px;font-weight:${c.caption_font_weight||"400"};`+(c.caption_color?`color:${c.caption_color};`:""),Q7=c.show_times!==!1,I3=c.show_captions!==!1,W3=!!c.show_ss_icons,Y7=c.ss_icon_position||"left",M0=(c.ss_icon_color?`color:${c.ss_icon_color};`:"")+(c.ss_icon_size?`--mdc-icon-size:${c.ss_icon_size}px;width:${c.ss_icon_size}px;height:${c.ss_icon_size}px;`:""),U3=H1=>{if(!W3)return h;let k1=H1==="sunrise"?c.sunrise_icon||"mdi:weather-sunset-up":c.sunset_icon||"mdi:weather-sunset-down";return p`<ha-icon class="wsfc-sunarc-ssicon" .icon=${k1} style=${M0}></ha-icon>`},K7=(H1,k1,y2,P2)=>{let t5=p`<div class="wsfc-sunarc-endtext">
        ${Q7?p`<div class="wsfc-sunarc-time" style=${$e}>${H1}</div>`:h}
        ${I3?p`<div class="wsfc-sunarc-cap" style=${Te}>${k1}</div>`:h}
      </div>`,I5=U3(P2);return p`<div class="wsfc-sunarc-end${y2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${Y7==="above"?"column":Y7==="below"?"column-reverse":Y7==="right"?"row-reverse":"row"};">${I5}${t5}</div>
      </div>`},j3=Q7||I3||W3,e3=j3?p`<div class="wsfc-sunarc-labels">
          ${K7(this._wfcFmtTime(m,b2),"sunrise",!1,"sunrise")}
          ${K7(this._wfcFmtTime(A,b2),"sunset",!0,"sunset")}
        </div>`:h,C2=c.labels_position;C2==="below"||C2==null?C2=0:C2==="above"?C2=100:C2==="mid"?C2=50:C2=C(Number(C2),0,100);let d0=c.baseline_mode==="sky"&&l.sun_position,X7=d0?this._wfcRenderSunPosition(l,M):h,Ee=d0&&X7!==h?h:c1`<line class="wsfc-sunarc-horizon" x1="0" y1="${B1}" x2="${f1}" y2="${B1}"></line>`,Fe=p`
      <div class="wsfc-sunarc-svg-wrap" style="height:${c0}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${f1} 100" preserveAspectRatio="none">
          ${Ee}
          <path class="wsfc-sunarc-path" d=${D3.trim()}></path>
          ${q7}
          ${B3}
        </svg>
        ${J0}
        ${j3&&C2>0&&C2<100?p`<div class="wsfc-sunarc-overlay" style="top:${(100-C2).toFixed(1)}%;transform:translateY(-50%);">${e3}</div>`:h}
      </div>
    `;return p`
      <div class="wsfc-sunarc-section">
        ${j3&&C2>=100?e3:h}
        ${Fe}
        ${d0&&X7!==h?p`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-B1)/100)*c0).toFixed(1)}px;">${X7}</div>`:h}
        ${j3&&C2<=0?e3:h}
      </div>
    `},t1._wfcStyleTag=function(){return p`<style>
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
      .wsfc-hdr-secsized .wsfc-current-secondary-info { font-size: var(--wfc-hdr-sec) !important; line-height: 1.2; }
      .wsfc-hdr-secsized .wsfc-current-secondary-info .wsfc-current-secondary-value { font-size: inherit !important; line-height: inherit; }
      .wsfc-hdr-secsized .wsfc-current-secondary-icon { width: 1.25em !important; height: 1.25em !important; --mdc-icon-size: 1.25em !important; }

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
      .wsfc-clock.wsfc-clock-al-left { align-items: flex-start; text-align: left; }
      .wsfc-clock.wsfc-clock-al-right { align-items: flex-end; text-align: right; }
      .wsfc-clock-time { color: var(--primary-text-color); font-variant-numeric: tabular-nums; white-space: nowrap; }
      .wsfc-clock-date { color: var(--secondary-text-color); white-space: nowrap; }
    </style>`};let U=_5.prototype,_i=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),ye={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},Q9=null;function mV(){return Q9||(Q9=new Set,Object.values(bi).forEach(l=>l.forEach(M=>Q9.add(M)))),Q9}function wi(l,M){let c=[];return l.forEach(m=>{if(!M.has(m.name))if(m.schema){let A=wi(m.schema,M);A.length&&c.push({...m,schema:A})}else c.push(m)}),c}function hV(l){let M=mV(),c=new Set([...M,..._i]);l=wi(l,c);let m=new Map,A=[];l.forEach(T=>{_i.has(T.name)||(T.type==="expandable"?A.push(T):m.set(T.name,T))});let _=T=>T.map(B=>m.get(B)).filter(Boolean),g=(T,B,X)=>{let W=_(X);return W.length?[{name:T,type:"expandable",flatten:!0,icon:B,schema:W}]:[]},S=T=>A.find(B=>B.name===T),O=[];{let T=S("attribute_entities");T&&O.push(ye.attribute_entities?{...T,icon:ye.attribute_entities}:T)}return O}let Gv=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],fV=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],AV=["tap_action","hold_action","double_tap_action"],vV=["show_condition_effects"],xV=[],bi={current:["current.show_attributes"],hourly:[],daily:[]},yi={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},gV="Weather Flex sections";U.render=function(){if(!this.hass||!this._config)return h;let l=k8(this._config),M=this._getSelectedAttributes(l),c=this._schema(this.localize.bind(this),M,l["forecast.mode"]),m=hV(c),A=g=>yi[g.name]||this._computeLabel(g)||g.name,_=this._wfcAccordionEnabled();return p`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?h:p`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${gV}</span>
          <span class="wsfc-ed-ver">build ${r}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${_}
            @change=${g=>this._wfcSetAccordion(g.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>`}
      ${m.length?p`<ha-form
            .hass=${this.hass}
            .data=${l}
            .schema=${m}
            .computeLabel=${A}
            .computeHelper=${g=>this._wfcHelper(g)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:h}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},U._wfcCardAppearancePanel=function(){let l=u2(this._config).card||{},M="card";return p`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${ye.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this.wsfcHide&&this.wsfcHide.includes("show_condition_effects")?p`<p class="wsfc-hint">The weather animation is drawn behind the whole card (Appearance → Background), so its effects and moon phase are set there.</p>`:p`${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(vV)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>`}
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!l.border_enabled,c=>this._wfcToggleSecField(M,"border_enabled",c))}
            ${l.border_enabled?p`
                  ${this._wfcColorField("Border color",l.border_color,c=>this._wfcSetSecField(M,"border_color",c.target.value))}
                  ${this._wfcNumField(M,"border_width","Border width","px",l.border_width,1)}
                  ${this._wfcNumField(M,"border_radius","Corner radius","px",l.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",l.border_top!==!1,c=>this._wfcToggleSecField(M,"border_top",c))}
                    ${this._wfcCheckbox("Bottom",l.border_bottom!==!1,c=>this._wfcToggleSecField(M,"border_bottom",c))}
                    ${this._wfcCheckbox("Left",l.border_left!==!1,c=>this._wfcToggleSecField(M,"border_left",c))}
                    ${this._wfcCheckbox("Right",l.border_right!==!1,c=>this._wfcToggleSecField(M,"border_right",c))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",l.corner_tl!==!1,c=>this._wfcToggleSecField(M,"corner_tl",c))}
                    ${this._wfcCheckbox("Top-right",l.corner_tr!==!1,c=>this._wfcToggleSecField(M,"corner_tr",c))}
                    ${this._wfcCheckbox("Bottom-right",l.corner_br!==!1,c=>this._wfcToggleSecField(M,"corner_br",c))}
                    ${this._wfcCheckbox("Bottom-left",l.corner_bl!==!1,c=>this._wfcToggleSecField(M,"corner_bl",c))}
                  </div>`:h}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",l.bg_color,c=>this._wfcSetSecField(M,"bg_color",c.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!l.glow_enabled,c=>this._wfcToggleSecField(M,"glow_enabled",c))}
            ${l.glow_enabled?p`
                  ${this._wfcColorField("Glow color",l.glow_color,c=>this._wfcSetSecField(M,"glow_color",c.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((l.glow_intensity==null?1:l.glow_intensity)*100),100,"glow_intensity",c=>this._wfcSetSecField(M,"glow_intensity",C((parseInt(c.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",l.glow_borders_only!==!1,c=>this._wfcToggleSecField(M,"glow_borders_only",c))}`:h}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!l.shadow_enabled,c=>this._wfcToggleSecField(M,"shadow_enabled",c))}
            ${l.shadow_enabled?p`
                  ${this._wfcColorField("Shadow color",l.shadow_color,c=>this._wfcSetSecField(M,"shadow_color",c.target.value))}
                  ${this._wfcNumField(M,"shadow_x","Offset X","px",l.shadow_x,0)}
                  ${this._wfcNumField(M,"shadow_y","Offset Y","px",l.shadow_y,4)}
                  ${this._wfcNumField(M,"shadow_blur","Blur","px",l.shadow_blur,16)}
                  ${this._wfcNumField(M,"shadow_spread","Spread","px",l.shadow_spread,0)}
                  ${this._wfcNumField(M,"shadow_opacity","Opacity","%",l.shadow_opacity,35)}`:h}
          </div>
        </div>
      </details>
    `};let Se=4;U._wfcEdSources=function(){return gi(this._config,this.hass)},U._wfcCommitSources=function(l){let M=l.filter(T=>T&&T.ref).map(T=>{let B={};for(let W in T.overrides||{})T.overrides[W]&&(B[W]=T.overrides[W]);let X={ref:T.ref};return Object.keys(B).length&&(X.overrides=B),T.disabled&&(X.disabled=!0),X}),c={...this._config.metric_sources||{}};delete c.primary,delete c.fallback,delete c.custom,delete c.device_map,M.length?c.sources=M:delete c.sources;let m={...this._config,metric_sources:c},A=T=>{let B=this.hass&&this.hass.states[T],X=B&&B.attributes&&B.attributes.supported_features;return typeof X=="number"&&(X&7)!==0},_=T=>T.map(B=>B.ref).filter(B=>typeof B=="string"&&B.startsWith("weather.")),g=_(M.filter(T=>!T.disabled)),S=_(M),O=g.find(A)||g[0]||S.find(A)||S[0];O&&(m.entity=O),Object.keys(c).length===0&&delete m.metric_sources,j1(this,"config-changed",{config:m})},U._wfcSetSourceRef=function(l,M){let c=this._wfcEdSources();c[l]&&(M?c[l]={ref:M,overrides:c[l].overrides||{}}:c.splice(l,1),this._wfcCommitSources(c))},U._wfcAddSource=function(l){if(!l)return;let M=this._wfcEdSources();M.length>=Se||(M.push({ref:l,overrides:{}}),this._wfcCommitSources(M))},U._wfcMoveSource=function(l,M){let c=this._wfcEdSources(),m=l+M;if(l<0||m<0||m>=c.length)return;let A=c[l];c[l]=c[m],c[m]=A,this._wfcCommitSources(c)},U._wfcRemoveSource=function(l){let M=this._wfcEdSources();l<0||l>=M.length||(M.splice(l,1),this._wfcCommitSources(M))},U._wfcToggleSourceDisabled=function(l){let M=this._wfcEdSources();M[l]&&(M[l].disabled=!M[l].disabled,this._wfcCommitSources(M))},U._wfcSetSourceOverride=function(l,M,c){let m=this._wfcEdSources();if(!m[l])return;let A={...m[l].overrides||{}};c?A[M]=c:delete A[M],m[l].overrides=A,this._wfcCommitSources(m)},U._wfcLiveValue=function(l,M){let c=this.hass&&this.hass.states[l];if(!c)return"";let m,A;return l.startsWith("weather.")?(m=c.attributes?c.attributes[M]:null,A=c.attributes&&c.attributes[M+"_unit"]):(m=c.state,A=c.attributes&&c.attributes.unit_of_measurement),m==null||m===""||m==="unknown"||m==="unavailable"?"":A?`${m} ${A}`:`${m}`},U._wfcAvailableMetrics=function(){let l=new Set;if(!this.hass)return l;let M=new Set;this._config.entity&&M.add(this._config.entity);for(let m of this._wfcEdSources())if(!m.disabled)if(m.overrides&&Object.keys(m.overrides).forEach(A=>{l.add(A),M.add(m.overrides[A])}),q1(m.ref)){let A=U7(this._config,this.hass,w2(m.ref));Object.keys(A).forEach(_=>{l.add(_),M.add(A[_])})}else m.ref&&M.add(m.ref);M.forEach(m=>{let A=this.hass.states[m];A&&A.attributes&&Object.keys(A.attributes).forEach(_=>l.add(_))});let c=m=>{if(Array.isArray(m))for(let A of m)A&&Object.keys(A).forEach(_=>l.add(_))};if(c(this._hourlyForecastData),c(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(m=>{m&&(c(m.hourly),c(m.daily))}),typeof R1.__wsfcExtraEntity=="function")for(let m of["ozone"])try{R1.__wsfcExtraEntity(m,this.hass,this._config)&&l.add(m)}catch{}return l};function _V(l){return String(l).split(/[_\s]+/).filter(Boolean).map(M=>M.charAt(0).toUpperCase()+M.slice(1)).join(" ")}let wV={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function bV(l){return wV[l]||_V(l)}U._wfcMetricOptions=function(l,M){let c=this._wfcAvailableMetrics(),m=M?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(l||[]).forEach(A=>{let _=bV(A);m.push({value:A,label:c.has(A)?_:`${_} (unavailable)`})}),m},U._wfcSourceMappingEditor=function(l,M){let c=M.ref,m=M.overrides||{},A=q1(c),_=A?w2(c):null,g=A?be(this.hass,_):{},S=B=>{if(A)return g[B]||"";if(!c)return"";if(c.startsWith("weather.")){let X=this.hass&&this.hass.states[c];return X&&X.attributes&&X.attributes[B]!=null?c:""}return""},O=A?{include_entities:q9(this.hass,_)}:{},T=B=>{let X=B.key,W=m[X]||S(X),R=!!m[X],f1=W?this._wfcLiveValue(W,X):"",B1=[{name:"e",selector:{entity:O}}],r2=R?" (override)":W?"":" \u2014 none";return p`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:W}}
            .schema=${B1}
            .computeLabel=${()=>B.label+r2}
            @value-changed=${_1=>this._wfcSetSourceOverride(l,X,_1.detail&&_1.detail.value&&_1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${f1||"\u2014"}</span>
        </div>
      `};return p`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${A?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${A?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${W7.map(T)}
        </div>
      </details>
    `},U._wfcSourceSummaryList=function(l){let M=l.ref,c=l.overrides||{},m=q1(M),A=m?be(this.hass,w2(M)):{},_=S=>{if(c[S])return c[S];if(m)return A[S]||"";if(M&&M.startsWith("weather.")){let O=this.hass&&this.hass.states[M];return O&&O.attributes&&O.attributes[S]!=null?M:""}return""},g=[];return W7.forEach(S=>{let O=_(S.key);if(!O)return;let T=this._wfcLiveValue(O,S.key);g.push(p`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${S.label}</span>
          <span class="wsfc-cond-ent" title=${O}>${O}</span>
          <span class="wsfc-cond-val">${T||"\u2014"}</span>
        </div>
      `)}),g.length?p`<div class="wsfc-cond-list">${g}</div>`:h},U._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},U._wfcToggleSrcMap=function(l){let M=this._wfcSrcMapOpen();M.has(l)?M.delete(l):M.add(l),this.requestUpdate&&this.requestUpdate()},U._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},U._wfcSourceMetricCount=function(l){let M=l.ref,c=l.overrides||{},m=new Set(Object.keys(c).filter(A=>c[A]));if(q1(M))Object.keys(U7(this._config,this.hass,w2(M))).forEach(A=>m.add(A));else if(M&&M.startsWith("weather.")){let A=this.hass&&this.hass.states[M];A&&A.attributes&&W7.forEach(_=>{A.attributes[_.key]!=null&&m.add(_.key)})}return m.size},U._wfcSourceRow=function(l,M,c){let m=l.ref,A=q1(m),_=this._config.entity,g=A&&this.hass&&this.hass.devices&&this.hass.devices[w2(m)],S=A?g&&(g.name_by_user||g.name)||w2(m):m,O=A?"Device":m&&m.startsWith("weather.")?"Weather":"Sensor",T=A?"mdi:access-point":m&&m.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",B=!A&&m&&m.startsWith("weather."),X=B&&m===_,W=this._wfcSrcMapOpen().has(m),R=!!l.disabled,f1=this._wfcSourceMetricCount(l),B1=`${f1} value${f1===1?"":"s"} mapped`,r2=X?p`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:B?p`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:p`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,_1="",z1=m&&!A?this.hass&&this.hass.states[m]:null;if(A)_1=f1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!z1)_1=`\u26A0 Entity not found: ${m}`;else if(z1.state==="unavailable"||z1.state==="unknown")_1=`\u26A0 Currently ${z1.state}.`;else if(B&&!X){let i2=z1.attributes&&z1.attributes.supported_features;_1=typeof i2=="number"&&(i2&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else B||(_1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return p`
      <div class="wsfc-src-row ${R?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${T}></ha-icon>
          <span class="wsfc-src-name">${S} <span class="wsfc-src-type">${O}</span></span>
          <ha-icon class="wsfc-ico-btn ${M===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(M,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${M===c-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(M,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${R?"mdi:eye-off":"mdi:eye"} title=${R?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(M)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${W?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(M)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${r2}<span class="wsfc-src-count">${B1}</span>${R?p`<span class="wsfc-src-count">· hidden</span>`:h}</div>
        ${_1?p`<div class="wsfc-src-detail">${_1}</div>`:h}
        ${this._wfcSourceSummaryList(l)}
        ${W?this._wfcSourceMappingEditor(M,l):h}
      </div>
    `},U._wfcWeatherSourcesPanel=function(){let l=this._wfcEdSources(),M=l.some(g=>g.ref&&!q1(g.ref)&&g.ref.startsWith("weather.")),c=l.length>=Se,m=!!this.__wfcAddSourceOpen&&!c,A=p`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${g=>{let S=g.detail&&g.detail.value&&g.detail.value.e;S&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(S))}}
      ></ha-form>`,_=p`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${g=>{let S=g.detail&&g.detail.value&&g.detail.value.d;S&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(y5+S))}}
      ></ha-form>`;return p`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${c?p`<p class="wsfc-hint">Maximum of ${Se} sources reached. Remove one to add another.</p>`:p`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${m?"mdi:close":"mdi:plus"}></ha-icon>${m?"Cancel":"Add Source"}
              </div>
              ${m?p`<div class="wsfc-add-pickers">${A}${_}</div>`:h}
            `}
          ${l.length?l.map((g,S)=>this._wfcSourceRow(g,S,l.length)):p`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!M&&l.length?p`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:h}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},U._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},U._wfcHeadlineTempRow=function(){let l=this._config.current&&this._config.current.temperature_entity,M=l||"",c="";if(!M)for(let _ of this._wfcEdSources()){if(_.disabled)continue;let g=this._wfcSlotEntityForKeyEd(_,"temperature");if(g&&this.hass&&this.hass.states[g]){M=g;break}}M?c=this.hass&&this.hass.states[M]&&this.hass.states[M].attributes&&this.hass.states[M].attributes.friendly_name||M:c="\u2014 none available \u2014";let m=M?this._wfcLiveValue(M,"temperature"):"",A=!!this.__wfcHeadlineEdit;return p`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${c}${l?p` <span class="wsfc-src-type">override</span>`:h}</span>
          ${m?p`<span class="wsfc-srcmap-live">${m}</span>`:h}
          <ha-icon class="wsfc-ico-btn ${A?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${A?p`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:h}
      </div>
    `},U._wfcSlotEntityForKeyEd=function(l,M){if(l.overrides&&l.overrides[M])return l.overrides[M];let c=l.ref;if(!c)return null;if(q1(c))return U7(this._config,this.hass,w2(c))[M]||null;if(c.startsWith("weather.")){let m=this.hass&&this.hass.states[c];return m&&m.attributes&&m.attributes[M]!=null?c:null}return null},U._wfcSetForecastTypes=function(l,M){let c=l&&M?"both":l?"hourly":M?"daily":"both",m={...this._config,forecast_types:c};j1(this,"config-changed",{config:m})},U._wfcAdvancedPanel=function(){let l=this._config.forecast_types||"both",M=l==="both"||l==="hourly",c=l==="both"||l==="daily";return p`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",M,m=>this._wfcSetForecastTypes(m.target.checked,c))}
          ${this._wfcCheckbox("Daily",c,m=>this._wfcSetForecastTypes(M,m.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(xV)}
        </div>
      </details>
    `},U._wfcUserActionsPanel=function(){let l=this._wfcStockFormFor(fV),M=this._wfcStockFormFor(AV),c=this._config.forecast||{};return p`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${l}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",c.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${M}
        </div>
      </details>
    `};let yV=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];U._wfcForecastTypeControls=function(l){let M=this._config.forecast||{},c=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],m=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],A=T=>M[`${T}_mode`]||M.mode||"simple",_=T=>(M[`${T}_extra_attribute`]!=null?M[`${T}_extra_attribute`]:M.extra_attribute)||"none",g=T=>(M[`${T}_chart_attribute`]!=null?M[`${T}_chart_attribute`]:M.default_chart_attribute)||"temperature_and_precipitation",S=(T,B,X)=>{let W=M[`${T}_${B}`];if(W!=null)return!!W;let R=M[B];return R!=null?!!R:X},O=A(l)==="chart";return p`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${l}_mode`,"Display mode",c,A(l),"simple")}
        ${this._wfcForecastSelect(`${l}_extra_attribute`,"Extra metric",m,_(l),"none")}
      </div>
      ${O?p`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${l}_chart_attribute`,"Chart metric",yV,g(l),"temperature_and_precipitation")}
          </div>`:h}
      ${this._wfcConfigCheckbox(`forecast.${l}_show_sun_times`,"Show sunrise & sunset times",S(l,"show_sun_times",!0),!0)}
      ${O?p`
            ${this._wfcConfigCheckbox(`forecast.${l}_use_color_thresholds`,"Use color thresholds",S(l,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${l}_show_attribute_selector`,"Show metric selector",S(l,"show_attribute_selector",!1),!1)}`:h}
    `},U._wfcHelper=function(l){let M=this._computeHelper?this._computeHelper(l):void 0;return typeof M=="string"&&(M=M.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),M},U._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},U._wfcSetAccordion=function(l){let M=this._wfcState();M.editor_accordion=!!l,this._wfcCommit(M),this._wfcApplyAccordion()},U._wfcApplyAccordion=function(){let l=this.renderRoot||this.shadowRoot||this;!l||!l.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,l.addEventListener("toggle",M=>{let c=M.target;if(!c||!c.classList||!c.classList.contains("wsfc-panel")||(this._wfcRememberOpen(c),!c.open)||!this._wfcAccordionEnabled())return;(l.querySelectorAll?l.querySelectorAll("details.wsfc-panel"):[]).forEach(A=>{A!==c&&A.open&&(A.open=!1)})},!0))},U._wfcRememberOpen=function(l){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let M=this._wfcPanelKey(l);M&&(l.open?this.__wfcOpenPanels.add(M):this.__wfcOpenPanels.delete(M))},U._wfcPanelKey=function(l){let M=l.querySelector&&l.querySelector(".wsfc-panel-title");return M?(M.textContent||"").trim():""},U._wfcRestoreOpen=function(){let l=this.renderRoot||this.shadowRoot||this;!l||!l.querySelectorAll||!this.__wfcOpenPanels||l.querySelectorAll("details.wsfc-panel").forEach(M=>{let c=this._wfcPanelKey(M);c&&this.__wfcOpenPanels.has(c)&&(M.open=!0)})},U.updated=function(l){try{let M=Object.getPrototypeOf(U);M&&typeof M.updated=="function"&&M.updated.call(this,l)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},U._wfcEditorStyle=function(){return p`<style>
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
    </style>`};let SV="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";U._wfcCustomMetricsBody=function(){let l=v3(this._config.current&&this._config.current.show_attributes);return p`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${l.map((M,c)=>this._renderCustomAttributeRow(M,c))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${SV}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},U._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let Ze={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function j7(l){if(l&&l.detail&&l.detail.value!==void 0)return l.detail.value;let M=l&&l.target;if(M)return(M.type==="checkbox"||typeof M.checked=="boolean")&&(M.tagName==="HA-SWITCH"||M.type==="checkbox")?M.checked:M.value}function ke(l){let M=l&&l.target;return M&&typeof M.checked=="boolean"?M.checked:!!(l&&l.detail&&l.detail.value)}U._wfcState=function(){return JSON.parse(JSON.stringify(u2(this._config)))},U._wfcCommit=function(l){let M={...this._config,wfc:l};j1(this,"config-changed",{config:M})},U._wfcResetSection=function(l){let c=N2(this._config)[l];if(!c)return;let m=this._wfcState(),A=!!(m[l]&&m[l].show);m[l]={...JSON.parse(JSON.stringify(c)),show:A},this._wfcCommit(m)},U._wfcMoveSection=function(l,M){let c=this._wfcState(),m=c.order.indexOf(l),A=m+M;if(m<0||A<0||A>=c.order.length)return;let _=c.order[m];c.order[m]=c.order[A],c.order[A]=_,this._wfcCommit(c)},U._wfcCommitMetrics=function(l,M){let c=this._wfcState();c[l]||(c[l]={});let m=b(c[l]),A=m.map(g=>g.key),_={};m.forEach(g=>_[g.key]=g.pos),M(A,_),c[l].forecast_metric_order=A,c[l].forecast_metric_pos=_,delete c[l].forecast_temps,delete c[l].forecast_icons,delete c[l].forecast_extra,delete c[l].forecast_row_order,delete c[l].forecast_stack,this._wfcCommit(c)},U._wfcMoveMetric=function(l,M,c){let m=this._wfcState(),_=b(m[l]||{}).find(g=>g.key===M);_&&_.pos==="below"&&(c=-c),this._wfcCommitMetrics(l,(g,S)=>{let O=g.indexOf(M),T=O+c;for(;T>=0&&T<g.length&&S[g[T]]!==S[M];)T+=c;if(O<0||T<0||T>=g.length)return;let B=g[O];g[O]=g[T],g[T]=B})},U._wfcSetMetricPos=function(l,M,c){this._wfcCommitMetrics(l,(m,A)=>{A[M]=c})},U._wfcSetMetricStyle=function(l,M,c,m){let A=this._wfcState();A[l]||(A[l]={});let _={...A[l].forecast_metric_style||{}},g={..._[M]||{}};m==null||m===""?delete g[c]:g[c]=m,Object.keys(g).length?_[M]=g:delete _[M],A[l].forecast_metric_style=_,this._wfcCommit(A)},U._wfcMetricsOrder=function(l,M){let c=b(M),m=g=>c.filter(S=>S.pos===g),A=[...m("above"),...m("overlay"),...m("below").reverse(),...c.filter(g=>!["above","overlay","below"].includes(g.pos))],_=M.forecast_metric_style||{};return A.map((g,S,O)=>{let T=_[g.key]||{},B=g.key==="icons",X=g.key!=="temps";return p`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${w[g.key]||g.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${W=>W.stopPropagation()}
              @change=${W=>this._wfcSetMetricPos(l,g.key,W.target.value)}
            >
              ${y.map(W=>p`<option value=${W.value} ?selected=${W.value===g.pos}>${W.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${S===0||O[S-1].pos!==g.pos?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${W=>{W.preventDefault(),W.stopPropagation(),this._wfcMoveMetric(l,g.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${S===O.length-1||O[S+1].pos!==g.pos?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${W=>{W.preventDefault(),W.stopPropagation(),this._wfcMoveMetric(l,g.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${W=>this._wfcSetMetricStyle(l,g.key,"every",W.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(W=>({value:String(W),label:W+(W>1?" hours":" hour")}))].map(W=>p`<option value=${W.value} ?selected=${W.value===(T.every!=null?String(T.every):"")}>${W.label}</option>`)}
              </select>
            </label>
            ${X?p`
                  ${this._wfcColorField("Icon color",T.icon_color,W=>this._wfcSetMetricStyle(l,g.key,"icon_color",W.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",T.icon_size,W=>this._wfcSetMetricStyle(l,g.key,"icon_size",parseFloat(j7(W))||""))}`:h}
            ${B?h:p`
                  ${this._wfcColorField("Text color",T.text_color,W=>this._wfcSetMetricStyle(l,g.key,"text_color",W.target.value))}
                  ${this._wfcPlainNum("Font size (px)",T.text_size,W=>this._wfcSetMetricStyle(l,g.key,"text_size",parseFloat(j7(W))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${W=>this._wfcSetMetricStyle(l,g.key,"contrast",W.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(W=>p`<option value=${W.value} ?selected=${W.value===(T.contrast||"")}>${W.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},U._wfcToggleSection=function(l,M){let c=this._wfcState();c[l]||(c[l]={}),c[l].show=ke(M),this._wfcCommit(c)},U._wfcToggleSectionShow=function(l){let M=this._wfcState();M[l]||(M[l]={}),M[l].show=!M[l].show,this._wfcCommit(M)},U._wfcSetSecNum=function(l,M,c){let m=this._wfcState(),A=parseFloat(j7(c));m[l][M]=isNaN(A)?void 0:A,this._wfcCommit(m)},U._wfcSetSecField=function(l,M,c){let m=this._wfcState();m[l]||(m[l]={}),m[l][M]=c,this._wfcCommit(m)},U._wfcToggleSecField=function(l,M,c){this._wfcSetSecField(l,M,ke(c))},U._wfcSetForecastNum=function(l,M){let c={...this._config.forecast||{}};M==null||M<=0?delete c[l]:c[l]=M,j1(this,"config-changed",{config:{...this._config,forecast:c}})},U._wfcSetConfigNum=function(l,M,c){let[m,A]=l.split("."),_={...this._config},g={..._[m]||{}},S=M==null||M===""||isNaN(Number(M))?null:Number(M);S==null?delete g[A]:g[A]=S,_[m]=g,j1(this,"config-changed",{config:_})},U._wfcConfigSlider=function(l,M,c,m,A){let _=G7(l,c||""),g=m!=null?C(Number(m),_.min,_.max):Number(A);return this._wfcSliderTpl(M,c,_,g,S=>this._wfcSetConfigNum(l,S.target.value,A))},U._wfcSetConfigStr=function(l,M,c){let m={...this._config};if(l.indexOf(".")===-1)c&&(M==null||M==="")?delete m[l]:m[l]=M;else{let[A,_]=l.split("."),g={...m[A]||{}};c&&(M==null||M==="")?delete g[_]:g[_]=M,m[A]=g}j1(this,"config-changed",{config:m})},U._wfcConfigSelect=function(l,M,c,m,A,_){let g=String(m??A);return p`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${M}</span>
        <select class="wsfc-native-select" @change=${S=>this._wfcSetConfigStr(l,S.target.value,_)}>
          ${c.map(S=>p`<option value=${String(S.value)} ?selected=${String(S.value)===g}>${S.label}</option>`)}
        </select>
      </label>
    `},U._wfcSetConfigBool=function(l,M,c){let m={...this._config},A=(_,g)=>{M===!!c?delete _[g]:_[g]=M};if(l.indexOf(".")===-1)A(m,l);else{let[_,g]=l.split("."),S={...m[_]||{}};A(S,g),m[_]=S}j1(this,"config-changed",{config:m})},U._wfcConfigCheckbox=function(l,M,c,m){let A=c==null?!!m:!!c;return this._wfcCheckbox(M,A,_=>this._wfcSetConfigBool(l,_.target.checked,m))},U._wfcConfigText=function(l,M,c,m){return p`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${M}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${c||""}
          placeholder=${m||""}
          @change=${A=>this._wfcSetConfigStr(l,A.target.value)}
        />
      </label>
    `},U._wfcSetForecastField=function(l,M){let c={...this._config.forecast||{}};M==null||M===""?delete c[l]:c[l]=M,j1(this,"config-changed",{config:{...this._config,forecast:c}})},U._wfcForecastSelect=function(l,M,c,m,A){let _=String(m??A);return p`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${M}</span>
        <select class="wsfc-native-select" @change=${g=>this._wfcSetForecastField(l,g.target.value)}>
          ${c.map(g=>p`<option value=${String(g.value)} ?selected=${String(g.value)===_}>${g.label}</option>`)}
        </select>
      </label>
    `},U._wfcNumSecField=function(l,M,c,m){let A=parseFloat(j7(c));this._wfcSetSecField(l,M,isNaN(A)?m:A)},U._wfcMoveDetail=function(l,M){let c=this._wfcState(),m=c.details.items,A=m.findIndex(S=>S.key===l),_=A+M;if(A<0||_<0||_>=m.length)return;let g=m[A];m[A]=m[_],m[_]=g,this._wfcCommit(c)},U._wfcToggleDetail=function(l,M){let c=this._wfcState(),m=c.details.items.find(A=>A.key===l);m&&(m.show=ke(M)),this._wfcCommit(c)},U._wfcToggleDetailShow=function(l){let M=this._wfcState(),c=M.details.items.find(m=>m.key===l);c&&(c.show=!c.show,this._wfcCommit(M))},U._wfcSetDetailValue=function(l,M,c){let m=this._wfcState(),A=m.details.items.find(_=>_.key===l);A&&(A[M]=c),this._wfcCommit(m)},U._wfcSetDetail=function(l,M,c){let m=this._wfcState(),A=m.details.items.find(g=>g.key===l);if(!A)return;let _=j7(c);if(M==="icon_size"||M==="text_size"){let g=parseFloat(_);_=isNaN(g)?void 0:g}else(_===""||_==null)&&(_=void 0);A[M]=_,this._wfcCommit(m)},U._wfcColorField=function(l,M,c){if(/^(Day|Night) color$/.test(l))return this._wfcColorFieldHex(l,M,c);let m=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],A=M==null?"":String(M),_=/background|bg$|^Chip background/i.test(l),g=A===""?"default":A==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(A)?"custom":/^var\(/.test(A)&&m.some(([B])=>B===A)?"theme":"css",S=/^#[0-9a-fA-F]{6}$/.test(A)?A:"#4fc3f7",O=B=>c({target:{value:B}}),T=B=>O(B==="default"?"":B==="transparent"?"transparent":B==="theme"?m.some(([X])=>X===A)?A:m[0][0]:B==="custom"?S:A||S);return p`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${l}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${B=>T(B.target.value)}>
          ${[["default","Not set"],..._||g==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([B,X])=>p`<option value=${B} ?selected=${B===g}>${X}</option>`)}
        </select>
        ${g==="theme"?p`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${B=>O(B.target.value)}>${m.map(([B,X])=>p`<option value=${B} ?selected=${B===A}>${X}</option>`)}</select>`:g==="custom"?p`<input type="color" class="wsfc-color-input" .value=${S} @change=${B=>O(B.target.value)} />`:g==="css"?p`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${A} @change=${B=>O(B.target.value)} />`:h}
        ${g!=="default"&&g!=="transparent"?p`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${A}"></span>`:h}
      </div>
    `},U._wfcColorFieldHex=function(l,M,c){return p`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${l}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${M||"#888888"}
          @change=${c}
          @input=${c}
        />
        <span class="wsfc-color-hex">${M||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!M}
          @click=${()=>c({target:{value:""}})}
        >Reset</button>
      </div>
    `},U._wfcSelect=function(l,M,c,m,A,_){if(this.wsfcHide&&this.wsfcHide.includes(M))return h;let g=String(A??_);return p`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${c}</span>
        <select
          class="wsfc-native-select"
          @change=${S=>this._wfcSetSecField(l,M,S.target.value)}
        >
          ${m.map(S=>p`<option value=${String(S.value)} ?selected=${String(S.value)===g}>${S.label}</option>`)}
        </select>
      </label>
    `};let Si={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function G7(l,M){return/chip_scale/.test(l)?{min:50,max:250,step:5}:/chip_columns/.test(l)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(l)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(l)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(l)?{min:0,max:100,step:1}:/header_icon_size/.test(l)?{min:0,max:140,step:2}:/header_secondary_size/.test(l)?{min:0,max:48,step:1}:/header_state_size|header_temp_size/.test(l)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(l)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(l)?{min:-40,max:40,step:1}:/shadow_blur/.test(l)?{min:0,max:80,step:1}:/border_radius/.test(l)?{min:0,max:48,step:1}:/border_width/.test(l)?{min:0,max:12,step:1}:/hourly_slots/.test(l)?{min:0,max:48,step:1}:/daily_slots/.test(l)?{min:0,max:14,step:1}:/labels_position|opacity/.test(l)?{min:0,max:100,step:1}:/indent/.test(l)?{min:0,max:120,step:2}:/height/.test(l)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(l)?{min:8,max:100,step:1}:/font_size|_size$/.test(l)?{min:8,max:48,step:1}:/_width$/.test(l)?{min:1,max:12,step:1}:/_length$/.test(l)?{min:5,max:100,step:5}:/hourly_group_size/.test(l)?{min:1,max:4,step:1}:/temperature_precision/.test(l)?{min:0,max:2,step:1}:/hours/.test(l)?{min:1,max:48,step:1}:Si[M]||Si.px}U._wfcNumField=function(l,M,c,m,A,_){if(this.wsfcHide&&this.wsfcHide.includes(M))return h;let g=G7(M,m||""),S=A!=null?Number(A):Number(_);return this._wfcSliderTpl(c,m,g,S,O=>this._wfcNumSecField(l,M,O,_))},U._wfcPlainSlider=function(l,M,c,m,A,_){let g=G7(A||"",M||""),S=c!=null?Number(c):Number(m);return this._wfcSliderTpl(l,M,g,S,_)},U._wfcSlotSlider=function(l,M,c){let m=G7(M,""),A=c!=null?C(Number(c),m.min,m.max):0,_=g=>Number(g)<=0?"All":String(g);return p`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${l}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${m.min}
          max=${m.max}
          step=${m.step}
          .value=${String(A)}
          @input=${g=>{let S=g.target.closest(".wsfc-slider-row"),O=S&&S.querySelector(".wsfc-slider-num");O&&(O.textContent=_(g.target.value))}}
          @change=${g=>this._wfcSetForecastNum(M,parseInt(g.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${_(A)}></span></span>
      </div>
    `},U._wfcAutoSizeField=function(l,M,c){if(this.wsfcHide&&this.wsfcHide.includes(M))return h;let m=G7(M,""),A=this._wfcState()[l]||{},_=C(parseInt(A[M],10)||0,m.min,m.max),g=S=>Number(S)<=0?"Auto":`${S}px`;return p`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${c}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${m.min}
          max=${m.max}
          step=${m.step}
          .value=${String(_)}
          @input=${S=>{let O=S.target.closest(".wsfc-slider-row"),T=O&&O.querySelector(".wsfc-slider-num");T&&(T.textContent=g(S.target.value))}}
          @change=${S=>this._wfcSetSecField(l,M,parseInt(S.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${g(_)}></span></span>
      </div>
    `},U._wfcSliderTpl=function(l,M,c,m,A){let _=M||"";return p`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${l}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${c.min}
          max=${c.max}
          step=${c.step}
          .value=${String(m)}
          @input=${g=>{let S=g.target.closest(".wsfc-slider-row"),O=S&&S.querySelector(".wsfc-slider-num");O&&(O.textContent=g.target.value)}}
          @change=${A}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(m)}></span>${_}</span>
      </div>
    `},U._wfcCheckbox=function(l,M,c){return p`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!M} @change=${c} />
        <span>${l}</span>
      </label>
    `},U._wfcGroup=function(l){return l?p`<div class="wsfc-group-div"><span class="wsfc-group-label">${l}</span></div>`:p`<div class="wsfc-group-div"></div>`},U._wfcSubPanel=function(l,M){return p`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${l}</span></summary>
        <div class="wsfc-subpanel-body">${M}</div>
      </details>
    `},U._wfcFlushControls=function(l,M){return p`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",M.flush_edges,c=>this._wfcToggleSecField(l,"flush_edges",c))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",M.flush_top,c=>this._wfcToggleSecField(l,"flush_top",c))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",M.flush_bottom,c=>this._wfcToggleSecField(l,"flush_bottom",c))}
    `},U._wfcTextControls=function(l,M,c,m){let A=this._wfcState()[l]||{};return p`
      <div class="wsfc-sub-title">${c}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(l,`${M}_font_size`,"Size","px",A[`${M}_font_size`],m)}
        ${this._wfcSelect(l,`${M}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],A[`${M}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",A[`${M}_color`],_=>this._wfcSetSecField(l,`${M}_color`,_.target.value))}
    `};let Zi=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];U._wfcDividerControls=function(l,M){return p`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",M.divider_above,c=>this._wfcToggleSecField(l,"divider_above",c))}
      ${M.divider_above?p`
            <div class="wsfc-row">
              ${this._wfcNumField(l,"divider_above_width","Thickness","px",M.divider_above_width,1)}
              ${this._wfcNumField(l,"divider_above_length","Length","%",M.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(l,"divider_above_style","Line style",Zi,M.divider_above_style,"solid")}
            </div>`:h}

      ${this._wfcCheckbox("Section Divider Below",M.divider_below,c=>this._wfcToggleSecField(l,"divider_below",c))}
      ${M.divider_below?p`
            <div class="wsfc-row">
              ${this._wfcNumField(l,"divider_below_width","Thickness","px",M.divider_below_width,1)}
              ${this._wfcNumField(l,"divider_below_length","Length","%",M.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(l,"divider_below_style","Line style",Zi,M.divider_below_style,"solid")}
            </div>`:h}

      ${M.divider_above||M.divider_below?this._wfcColorField("Divider color",M.divider_color,c=>this._wfcSetSecField(l,"divider_color",c.target.value)):h}
    `},U._wfcBackgroundControls=function(l,M){let c=!!M.background_enabled;return p`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",c,m=>this._wfcToggleSecField(l,"background_enabled",m))}
      ${c?p`
            ${this._wfcColorField("Background color",M.background_color,m=>this._wfcSetSecField(l,"background_color",m.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",M.background_opacity==null?80:M.background_opacity,80,"opacity",m=>this._wfcSetSecField(l,"background_opacity",C(parseInt(m.target.value,10)||0,0,100)))}`:h}
    `},U._wfcSectionStyles=function(l,M){return this._wfcSubPanel("Section Styles",p`
        ${this._wfcFlushControls(l,M)}
        ${this._wfcDividerControls(l,M)}
        ${this._wfcBackgroundControls(l,M)}`)},U._wfcStockForm=function(l){return this._wfcStockFormFor(bi[l])},U._wfcStockFormFor=function(l){if(!l||!l.length)return h;let M=k8(this._config),c=this._getSelectedAttributes(M),m=this._schema(this.localize.bind(this),c,"chart"),A=new Map,_=O=>O.forEach(T=>{T.schema?_(T.schema):A.set(T.name,T)});_(m);let g=l.map(O=>A.get(O)).filter(Boolean);if(!g.length)return h;let S=O=>yi[O.name]||this._computeLabel(O)||O.name;return p`
      <ha-form
        .hass=${this.hass}
        .data=${M}
        .schema=${g}
        .computeLabel=${S}
        .computeHelper=${O=>this._wfcHelper(O)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},U._wfcTitleControls=function(l,M){return p`
      ${this._wfcCheckbox("Show Title Row",M.title_show,c=>this._wfcToggleSecField(l,"title_show",c))}
      ${M.title_show?p`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${M.title_text||""}
                @change=${c=>this._wfcSetSecField(l,"title_text",c.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${M.title_icon||""}
              @value-changed=${c=>this._wfcSetSecField(l,"title_icon",c.detail&&c.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(l,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],M.title_text_align,"left")}
              ${this._wfcSelect(l,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],M.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(l,"title_font_size","Text size","px",M.title_font_size,15)}
            ${this._wfcSelect(l,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],M.title_font_weight,"600")}
            ${this._wfcNumField(l,"title_icon_size","Icon size","px",M.title_icon_size,20)}
            ${this._wfcNumField(l,"title_indent","Indent","px",M.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",M.title_color,c=>this._wfcSetSecField(l,"title_color",c.target.value))}
              ${this._wfcColorField("Icon color",M.title_icon_color,c=>this._wfcSetSecField(l,"title_icon_color",c.target.value))}
            </div>
          `:h}
    `},U._wfcSectionOptionsBody=function(l,M){let c=M[l]||{},m=l==="details",A=l==="current",_=l==="sun_position",g=l==="sun_arc",S=l==="hourly",O=l==="daily",T=this._config.forecast||{},B=this._config.current||{},X=C(parseInt(c.columns,10)||2,1,4),W=this._wfcMetricOptions(typeof x2<"u"?x2:[],!0);return p`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(l)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(l,c)}
          ${A?p`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:h}
          ${A?p`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(l,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(l,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(l,"header_temp_size","Temperature size")}
                ${this._wfcAutoSizeField(l,"header_secondary_size","Temperature sub-header size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",W,B.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(l)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(l)}
          ${S?p`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",T.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",T.hourly_group_size,1)}`:h}
          ${O?p`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",T.daily_slots)}`:h}
          ${m?p`
                ${this._wfcGroup("Layout")}
                ${c.chips?p`
                      ${this._wfcSelect(l,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],c.chip_layout==="column"?"wrap":c.chip_layout||"wrap","wrap")}
                      ${(c.chip_layout||"wrap")==="grid"?p`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(c.chip_columns,10)>0,R=>this._wfcSetSecField(l,"chip_columns",R.target.checked?C(parseInt(c.chip_columns,10)||2,1,6):0))}
                            ${parseInt(c.chip_columns,10)>0?this._wfcNumField(l,"chip_columns","Columns","",parseInt(c.chip_columns,10)||2,2):h}`:h}`:p`
                      ${this._wfcSelect(l,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],c.details_layout||"grid","grid")}
                      ${(c.details_layout||"grid")==="grid"?this._wfcNumField(l,"columns","Columns","",X,2):h}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!c.chips,R=>this._wfcToggleSecField(l,"chips",R))}
                ${c.chips?p`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",c.chip_pill!=null?!!c.chip_pill:c.chip_shape!=="rounded"&&c.chip_shape!=="square",R=>this._wfcSetSecField(l,"chip_pill",R.target.checked))}
                      ${(c.chip_pill!=null?c.chip_pill:c.chip_shape!=="rounded"&&c.chip_shape!=="square")?h:this._wfcNumField(l,"chip_radius","Corner radius (0 = square)","px",c.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((c.chip_scale==null?1:c.chip_scale)*100),100,"chip_scale",R=>this._wfcSetSecField(l,"chip_scale",C((parseInt(R.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(l,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",c.chip_text_color,R=>this._wfcSetSecField(l,"chip_text_color",R.target.value))}
                      ${this._wfcColorField("Chip background",c.chip_bg,R=>this._wfcSetSecField(l,"chip_bg",R.target.value))}
                      ${this._wfcColorField("Chip border",c.chip_border_color,R=>this._wfcSetSecField(l,"chip_border_color",R.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",c.chip_show_icon!==!1,R=>this._wfcToggleSecField(l,"chip_show_icon",R))}
                      ${c.chip_show_icon!==!1?p`
                            ${this._wfcSelect(l,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],c.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(l,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",c.chip_icon_color,R=>this._wfcSetSecField(l,"chip_icon_color",R.target.value))}`:h}
                      ${this._wfcCheckbox("Show metric name in chip",!!c.chip_show_name,R=>this._wfcToggleSecField(l,"chip_show_name",R))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!c.chip_hide_when_off,R=>this._wfcToggleSecField(l,"chip_hide_when_off",R))}`:h}

                ${c.chips?p`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(M)}`:p`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(l,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(l,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",c.global_icon_color,R=>this._wfcSetSecField(l,"global_icon_color",R.target.value))}
                        ${this._wfcColorField("Text color",c.global_text_color,R=>this._wfcSetSecField(l,"global_text_color",R.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(M)}`}
              `:h}

          ${_?p`
                ${this._wfcSubPanel("Time",p`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?h:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(l,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],c.timeframe_mode,"hours")}
                      ${c.timeframe_mode==="hours"||c.timeframe_mode==null?p`
                            ${this._wfcNumField(l,"timeframe_hours","Hours","",c.timeframe_hours,24)}
                            ${this._wfcSelect(l,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],c.timeframe_anchor,"now_left")}
                          `:h}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(l,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],c.times_position==="center"?"overlay":c.times_position,"below")}
                      ${this._wfcSelect(l,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],c.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(l,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(R=>({value:R,label:R+(R>1?" hours":" hour")}))],c.ticks_every==null?0:c.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(l,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",p`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",c.marker_color,R=>this._wfcSetSecField(l,"marker_color",R.target.value))}
                      ${this._wfcNumField(l,"marker_opacity","Marker opacity","%",c.marker_opacity==null?100:c.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",p`
                    <div class="wsfc-row">
                      ${this._wfcSelect(l,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],c.ss_markers_position,"hidden")}
                    </div>
                    ${c.ss_markers_position&&c.ss_markers_position!=="hidden"?p`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",c.ss_markers_color,R=>this._wfcSetSecField(l,"ss_markers_color",R.target.value))}
                          ${this._wfcNumField(l,"ss_markers_opacity","Marker opacity","%",c.ss_markers_opacity==null?100:c.ss_markers_opacity,100)}
                        </div>`:h}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",p`
                    ${this._wfcSubPanel("Metrics Defaults",p`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!c.forecast_metric_detail_icons,R=>this._wfcToggleSecField(l,"forecast_metric_detail_icons",R))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!c.forecast_temp_with_icon,R=>this._wfcToggleSecField(l,"forecast_temp_with_icon",R))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(l,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(R=>({value:R,label:R+(R>1?" hours":" hour")}))],c.forecast_every,3)}
                          ${this._wfcNumField(l,"forecast_font_size","Text size","px",c.forecast_font_size,11)}
                          ${this._wfcNumField(l,"forecast_icon_size","Icon size","px",c.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",c.forecast_temp_color,R=>this._wfcSetSecField(l,"forecast_temp_color",R.target.value))}
                        ${this._wfcColorField("Icon color",c.forecast_icon_color,R=>this._wfcSetSecField(l,"forecast_icon_color",R.target.value))}
                        ${f.some(R=>c.forecast_metric_pos&&c.forecast_metric_pos[R]&&c.forecast_metric_pos[R]!=="hidden"||v(c).includes(R))?this._wfcColorField("Metric Text Color",c.forecast_extra_color,R=>this._wfcSetSecField(l,"forecast_extra_color",R.target.value)):h}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(l,c)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",p`
                    ${this._wfcNumField(l,"height","Bar height","px",c.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",c.weather_adjust!==!1,R=>this._wfcToggleSecField(l,"weather_adjust",R))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",c.day_color,R=>this._wfcSetSecField(l,"day_color",R.target.value))}
                      ${this._wfcColorField("Night color",c.night_color,R=>this._wfcSetSecField(l,"night_color",R.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(l,c)}
              `:h}

          ${g?p`
                <div class="wsfc-row">
                  ${this._wfcNumField(l,"height","Arc height","px",c.height,90)}
                  ${this._wfcSelect(l,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],c.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?h:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(l,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],c.timeframe_mode,"sunrise_sunset")}
                  ${c.timeframe_mode==="hours"?p`
                        ${this._wfcNumField(l,"timeframe_hours","Hours","",c.timeframe_hours,24)}
                        ${this._wfcSelect(l,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],c.timeframe_anchor,"now_left")}
                      `:h}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",k(c.labels_position),0,"labels_position",R=>this._wfcSetSecField(l,"labels_position",C(parseInt(R.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${c.sun_icon||""}
                  @value-changed=${R=>this._wfcSetSecField(l,"sun_icon",R.detail&&R.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?h:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!c.night_moon,R=>this._wfcToggleSecField(l,"night_moon",R))}
                ${c.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?p`<ha-icon-picker
                      label="Moon icon"
                      .value=${c.moon_icon||"mdi:weather-night"}
                      @value-changed=${R=>this._wfcSetSecField(l,"moon_icon",R.detail&&R.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:h}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(l,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],c.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",c.show_arc_ticks,R=>this._wfcToggleSecField(l,"show_arc_ticks",R))}
                ${this._wfcCheckbox("Show tick marks on the baseline",c.show_base_ticks!==!1,R=>this._wfcToggleSecField(l,"show_base_ticks",R))}
                <div class="wsfc-row">
                  ${this._wfcSelect(l,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],c.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",c.tick_color,R=>this._wfcSetSecField(l,"tick_color",R.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",c.show_times!==!1,R=>this._wfcToggleSecField(l,"show_times",R))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",c.show_captions!==!1,R=>this._wfcToggleSecField(l,"show_captions",R))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",c.show_ss_icons,R=>this._wfcToggleSecField(l,"show_ss_icons",R))}
                ${c.show_ss_icons?p`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${c.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${R=>this._wfcSetSecField(l,"sunrise_icon",R.detail&&R.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${c.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${R=>this._wfcSetSecField(l,"sunset_icon",R.detail&&R.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(l,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],c.ss_icon_position,"left")}
                        ${this._wfcNumField(l,"ss_icon_size","Icon size","px",c.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",c.ss_icon_color,R=>this._wfcSetSecField(l,"ss_icon_color",R.target.value))}
                    `:h}

                ${this._wfcTextControls(l,"time","Time text",13)}
                ${this._wfcTextControls(l,"caption","Sunrise / sunset caption",11)}
              `:h}

          ${_?h:this._wfcSectionStyles(l,c)}
        </div>
    `};let ki={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};U._wfcPlainNum=function(l,M,c){return this._wfcPlainSlider(l,"px",M,16,"_size",c)},U._wfcDetailRows=function(l){return l.details.items.map((c,m,A)=>{let _=o[c.key]||{};return p`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${c.icon||_.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${_.label||c.key}</span>
            <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${g=>{g.preventDefault(),g.stopPropagation(),this._wfcMoveDetail(c.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${m===A.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${g=>{g.preventDefault(),g.stopPropagation(),this._wfcMoveDetail(c.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${c.show?"mdi:eye":"mdi:eye-off"} title=${c.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${g=>{g.preventDefault(),g.stopPropagation(),this._wfcToggleDetailShow(c.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${_.icon||""}
              .value=${c.icon||""}
              @value-changed=${g=>this._wfcSetDetail(c.key,"icon",g)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${g=>this._wfcSetDetailValue(c.key,"mode",g.target.value)}>
                <option value="global" ?selected=${c.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${c.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${c.mode==="custom"?p`
                  ${this._wfcPlainNum("Icon size (px)",c.icon_size,g=>this._wfcSetDetail(c.key,"icon_size",g))}
                  ${this._wfcPlainNum("Text size (px)",c.text_size,g=>this._wfcSetDetail(c.key,"text_size",g))}
                  ${this._wfcColorField("Icon color",c.icon_color,g=>this._wfcSetDetail(c.key,"icon_color",g))}
                  ${this._wfcColorField("Text color",c.text_color,g=>this._wfcSetDetail(c.key,"text_color",g))}
                `:h}
          </div>
        </details>
      `})};let Oi=["current","details","hourly","daily","sun_arc","sun_position"];function ZV(l){let M=Oi.filter(m=>l.includes(m)),c=l.filter(m=>!Oi.includes(m));return[...M,...c]}U._wfcEditor=function(){let l=u2(this._config),M=ZV(l.order),c=l.order.map((A,_,g)=>{let S=!!(l[A]&&l[A].show);return p`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${ki[A]||Ze.options}></ha-icon>
          <span class="wsfc-order-name">${i[A]||A}</span>
          <ha-icon class="wsfc-ico-btn ${_===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(A,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${_===g.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(A,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${S?"mdi:eye":"mdi:eye-off"} title=${S?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(A)}></ha-icon>
        </div>
      `}),m=M.map(A=>p`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${ki[A]||Ze.options}></ha-icon><span class="wsfc-panel-title">${i[A]||A}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(A,l)}
          </div>
        </details>
      `);return p`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${Ze.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${c}
        </div>
      </details>
      ${m}
      ${this._wfcClockPanel(l)}
    `};let $i=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];U._wfcClockPanel=function(l){let M="current",c=l.current||{},m=_=>_==="above"?"above-center":_==="below"?"below-center":_,A=c.clock_show_time!==!1;return p`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",A,_=>this._wfcToggleSecField(M,"clock_show_time",_))}
                ${A?p`
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"clock_placement","Clock placement",$i,m(c.clock_placement),"right")}
                        ${this._wfcSelect(M,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],c.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",c.clock_show_seconds,_=>this._wfcToggleSecField(M,"clock_show_seconds",_))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(M,"clock_font_size","Time size")}
                        ${this._wfcSelect(M,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],c.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",c.clock_color,_=>this._wfcSetSecField(M,"clock_color",_.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${c.clock_font_family||""}
                          @change=${_=>this._wfcSetSecField(M,"clock_font_family",_.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(M,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],c.clock_contrast,"none")}`:h}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",c.clock_show_date,_=>this._wfcToggleSecField(M,"clock_show_date",_))}
                ${c.clock_show_date?p`
                      ${this._wfcSelect(M,"clock_date_format","Date format",_2.map(_=>({value:_.value,label:_.label})),c.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...$i],c.clock_date_placement==="above"||c.clock_date_placement==="below"?m(c.clock_date_placement):c.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(M,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",c.clock_date_color,_=>this._wfcSetSecField(M,"clock_date_color",_.target.value))}
                      </div>
                      ${c.clock_show_time&&(c.clock_date_placement==="with_time"||!c.clock_date_placement)?this._wfcSelect(M,"clock_align","Time & date alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],c.clock_align||"center","center"):h}
                      ${this._wfcSelect(M,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],c.clock_date_contrast!=null?c.clock_date_contrast:c.clock_contrast,"none")}`:h}
        </div>
      </details>
    `},U._wfcYamlPanel=function(){let l;try{l=P(this._config)}catch{l="# (unable to render YAML)"}return p`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${l}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,R1.__wfcResolve=u2,R1.__wfcBuild=r})();var t9=R1.prototype,Bs=(r,e)=>({config:r,hass:e,_wfcSources:t9._wfcSources,_wfcSlotEntityForKey:t9._wfcSlotEntityForKey,_wfcMetricEntityChain:t9._wfcMetricEntityChain});function zs(r,e,t){return!r||!e?[]:t9._wfcMetricEntityChain.call(Bs(r,e),t)}function V5(r,e,t){return zs(r,e,t).find(i=>!i.startsWith("weather."))||null}function h1(r,e,t){for(let i of zs(r,e,t)){let o=e.states[i];if(o){if(i.startsWith("weather.")){let a=o.attributes?.[t];if(a!=null&&a!=="")return{value:Number(a),unit:Ef(o,t),entity:i}}else if(!["unknown","unavailable",""].includes(o.state)){let a=Number(o.state);return{value:isNaN(a)?o.state:a,unit:o.attributes?.unit_of_measurement||"",entity:i}}}}return null}function Ef(r,e){let t=r.attributes||{};return/temperature|dew_point/.test(e)?t.temperature_unit||"":/wind/.test(e)&&e!=="wind_bearing"?t.wind_speed_unit||"":e==="pressure"?t.pressure_unit||"":e==="humidity"||e==="cloud_coverage"?"%":""}function O8(r,e,t,i,o=i){return r?.entities?.[o]||V5(e,t,i)}var Ds=new WeakMap;function yr(r,e){let t=e?.devices||{},i=JSON.stringify(r?.metric_sources?.sources||[]),o=Ds.get(t);return o&&o.hass!==e&&(o.hass=e,Object.keys(t).length!==o.size0&&(o=null)),o||(o=new Map,o.size0=Object.keys(t).length,o.hass=e,Ds.set(t,o)),o.has(i)||o.set(i,Ff(r,e)),o.get(i)}function Ff(r,e){let t=[],i=e?.devices||{};for(let o of r?.metric_sources?.sources||[]){if(o.disabled||typeof o.ref!="string"||!o.ref.startsWith("device:"))continue;let a=o.ref.slice(7);t.includes(a)||t.push(a);let C=i[a]?.config_entries||[];for(let[n,s]of Object.entries(i))!t.includes(n)&&(s.config_entries||[]).some(H=>C.includes(H))&&t.push(n)}return t}var Rs=new WeakMap;function g3(r,e){let t=r?.entities;if(!t)return[];let i=Rs.get(t);if(i&&i.hass!==r&&(i.hass=r,Object.keys(t).length!==i.size0&&(i=null)),!i){i=new Map;for(let o in t){let a=t[o]?.device_id;a&&(i.has(a)||i.set(a,[]),i.get(a).push(o))}i.size0=Object.keys(t).length,i.hass=r,Rs.set(t,i)}return i.get(e)||[]}function r9(r,e){return yr(r,e).flatMap(t=>g3(e,t))}function Ns(r,e,t){let i=r9(r,e).filter(o=>{let a=e.states[o];return a&&t.test(`${o} ${a.attributes?.friendly_name||""}`)});return i.find(o=>!/indoor|inside/i.test(o))||i[0]||null}var Pf=new Set(["ecowitt","ecowitt_local","ha_ecowitt_iot"]);function Sr(r,e,t={}){let i=[...yr(r,e)];for(let o of Array.isArray(t.devices)?t.devices:[])o&&!i.includes(o)&&i.push(o);if(t.include_ecowitt!==!1){let o=e?.entities||{};for(let a in o){let C=o[a];C?.device_id&&Pf.has(C.platform)&&!i.includes(C.device_id)&&i.push(C.device_id)}}return i}function $8(r,e,t,{unit:i,avoid:o}={}){let a=new Set(yr(r,e)),C=null,n=-1;for(let s of Sr(r,e))for(let H of g3(e,s)){let V=e.states[H];if(!V)continue;let L=`${H} ${V.attributes?.friendly_name||""}`;if(!t.test(L)||o&&o.test(L))continue;let d=0;H.startsWith("binary_sensor.")||(d+=4),i&&i.test(V.attributes?.unit_of_measurement||"")&&(d+=2),a.has(s)&&(d+=1),/indoor|inside/i.test(L)&&(d-=3),["unavailable","unknown"].includes(V.state)&&(d-=1),d>n&&(C=H,n=d)}return C}function d1(r,e){let t=e&&r?.states?.[e];if(!t||["unknown","unavailable",""].includes(t.state))return null;let i=Number(t.state);return{value:isNaN(i)?t.state:i,unit:t.attributes?.unit_of_measurement||"",entity:e}}function Is(r,e){let i=["temperature","humidity","wind_speed","pressure"].map(a=>V5(r,e,a)).filter(Boolean);if(!i.length)return"unconfigured";let o=i.filter(a=>d1(e,a)!=null).length;return o===i.length?"online":o?"partial":"offline"}function Ws(r,e,t,i){return!t||!e?null:t9._wfcSlotEntityForKey.call(Bs(r,e),t,i)||null}var Df={ecowitt:"Ecowitt",ecowitt_local:"Ecowitt Local",ha_ecowitt_iot:"Ecowitt Official",openweathermap:"OpenWeatherMap",pirateweather:"Pirate Weather",nws:"National Weather Service",met:"Met.no",accuweather:"AccuWeather",wunderground:"Weather Underground",weatherunderground:"Weather Underground",wundergroundpws:"Weather Underground PWS",tomorrowio:"Tomorrow.io",template:"Template",airnow:"AirNow",pollenlevels:"Pollen Levels (Google)",kleenex_pollenradar:"Kleenex Pollen Radar",silam_pollen:"SILAM Pollen"};function U0(r,e){let t=e&&r?.entities?.[e]?.platform;return t?Df[t]||t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}var $r={aqi:{dc:"aqi",airnow:"aqi",re:/\baqi\b|air[\s_-]?quality[\s_-]?index/i,label:"AQI"},pm2_5:{dc:"pm25",airnow:"pm25",re:/pm[\s_.-]?2[\s_.-]?5/i,label:"PM2.5"},pm10:{dc:"pm10",airnow:"pm10",re:/pm[\s_.-]?10/i,label:"PM10"},ozone:{dc:"ozone",airnow:"o3",re:/\bo3\b|ozone/i,label:"Ozone"},co2:{dc:"carbon_dioxide",airnow:null,re:/\bco2\b|carbon[\s_-]?dioxide/i,label:"CO\u2082"}},Us=/indoor|inside/i,Zr=(r,e)=>{let t=r.states[e];return t&&!["unavailable","unknown"].includes(t.state)},Rf=(r,e,t)=>{let i=r.states[e];if(!i||!e.startsWith("sensor."))return!1;let o=i.attributes?.device_class;return o?o===t.dc:t.re.test(`${e} ${i.attributes?.friendly_name||""}`)};function _3(r,e,t){let i=$r[t];if(!i||!e?.states)return null;let a=r9(r,e).filter(s=>Rf(e,s,i)).filter(s=>!Us.test(`${s} ${e.states[s]?.attributes?.friendly_name||""}`));if(a.length)return a.find(s=>Zr(e,s))||a[0];let C=e.entities||{};if(i.airnow){let s=Object.keys(C).filter(H=>C[H]?.platform==="airnow"&&C[H]?.translation_key===i.airnow&&e.states[H]);if(s.length)return s.find(H=>Zr(e,H))||s[0]}return Object.keys(e.states).filter(s=>!s.startsWith("sensor.")||e.states[s].attributes?.device_class!==i.dc?!1:!Us.test(`${s} ${e.states[s].attributes?.friendly_name||""}`)).find(s=>Zr(e,s))||null}function Gs(r,e){let t=r?.entities||{},i=t[e]?.device_id;return i&&Object.keys(t).find(o=>t[o]?.device_id===i&&t[o]?.translation_key==="station")||null}var f2=[{max:50,name:"Good",color:"#00e400"},{max:100,name:"Moderate",color:"#ffff00"},{max:150,name:"Unhealthy for sensitive groups",short:"Sensitive groups",color:"#ff7e00"},{max:200,name:"Unhealthy",color:"#ff0000"},{max:300,name:"Very unhealthy",color:"#8f3f97"},{max:1/0,name:"Hazardous",color:"#7e0023"}],w3=r=>r==null||isNaN(r)?null:f2.findIndex(e=>r<=e.max),js={pm2_5:[9,35.4,55.4,125.4,225.4,325.4],pm10:[54,154,254,354,424,604],ozone:[.054,.07,.085,.105,.2,.604]},kr=[0,50,100,150,200,300,500],Tr={benzene:{re:/benzene/i,unit:"ppb",t:[1,3,9,30],source:"ATSDR minimal risk levels (chronic 3 ppb, acute 9 ppb)"},co2:{re:/\bco2\b|carbon[\s_-]?dioxide/i,unit:"ppm",t:[1e3,2e3,5e3,1e4],source:"ASHRAE comfort guidance 1000 ppm; OSHA limit 5000 ppm"}},Bf=(r,e)=>/ppb/i.test(e||"")?r/1e3:/µg|ug/i.test(e||"")?r/1960:r;function Or(r,e){let t=0;for(let i=0;i<e.length;i++){if(r<=e[i])return Math.round(kr[i]+(r-t)/(e[i]-t)*(kr[i+1]-kr[i]));t=e[i]}return 500}function T8(r,e,t,i){if(e==null||isNaN(e))return null;let o=Number(e);if(i?.length)return Or(o,[...i]);if(js[r])return Or(r==="ozone"?Bf(o,t):o,js[r]);let a=Tr[r];return a?Or(o,a.t):null}var zf={ozone:"ozone",pm2_5:"pm2_5",pm25:"pm2_5",pm10:"pm10",aqi:"aqi",co2:"co2",carbon_dioxide:"co2"};function qs(r,e,t){let i=zf[r];return!i||!e?null:_3({entity:t?.entity,metric_sources:t?.metric_sources},e,i)}var S1={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i},rain_hour:{label:"Rain last hour",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/(hourly|1[\s_-]?h(our)?)[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?(last[\s_-]?)?(1[\s_-]?)?hour(ly)?\b/i},rain_week:{label:"Rain this week",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/weekly[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?(this[\s_-]?)?week/i},rain_month:{label:"Rain this month",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/monthly[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?(this[\s_-]?)?month/i},rain_year:{label:"Rain this year",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/yearly[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?(this[\s_-]?)?year/i},lightning_distance:{label:"Lightning distance",icon:"mdi:map-marker-distance",color:"#ffca28",digits:0,find:/lightning.*(distance|dist\b)|distance.*lightning/i,health:!0,avoid:/batt/i},lightning_count:{label:"Lightning strikes",icon:"mdi:flash",color:"#ffca28",digits:0,find:/lightning.*(strike|count|num\b)|strikes?[\s_-]?(today|count)/i,health:!0,avoid:/distance|dist\b|time|last|batt/i},lightning_time:{label:"Last lightning strike",icon:"mdi:clock-alert-outline",color:"#ffca28",digits:null,find:/lightning.*(time|last)|last.*(strike|lightning)/i,health:!0,avoid:/batt|distance/i},soil_moisture:{label:"Soil moisture",icon:"mdi:water-percent",color:"#8d6e63",digits:0,find:/soil[\s_-]?moist(ure)?|soilmoisture/i,health:!0,avoid:/batt|ad\b|raw/i},soil_temperature:{label:"Soil temperature",icon:"mdi:thermometer-lines",color:"#8d6e63",digits:1,find:/soil[\s_-]?temp/i,health:!0,avoid:/batt|average|avg|forecast/i},battery:{label:"Station battery",icon:"mdi:battery",color:"#66bb6a",digits:null,find:/batt/i,health:!0,unit:/%/,avoid:/volt/i},battery_voltage:{label:"Battery voltage",icon:"mdi:battery-charging",color:"#66bb6a",digits:2,find:/batt.*volt|volt.*batt/i,health:!0},capacitor:{label:"Capacitor voltage",icon:"mdi:flash",color:"#ffca28",digits:1,find:/capacitor|cap[\s_-]?volt/i,health:!0},signal:{label:"Station signal",icon:"mdi:signal",color:"#42a5f5",digits:0,find:/signal[\s_-]?strength|\bsignal\b(?![\s_-]?quality)/i,health:!0},signal_quality:{label:"Signal quality",icon:"mdi:signal-variant",color:"#42a5f5",digits:0,find:/signal[\s_-]?quality/i,health:!0},rssi:{label:"Station RSSI",icon:"mdi:wifi-strength-2",color:"#42a5f5",digits:0,find:/rssi/i,health:!0},online:{label:"Station online",icon:"mdi:lan-connect",color:"#43a047",digits:null,find:/\bonline\b/i,health:!0,avoid:/gateway|_gw\b/i},hardware_id:{label:"Hardware ID",icon:"mdi:identifier",color:"#9e9e9e",digits:null,find:/hardware[\s_-]?id|\bhw[\s_-]?id\b/i,health:!0},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},aqi:{label:"AQI",icon:"mdi:air-filter",color:"#66bb6a",digits:0,aq:"aqi"},pm2_5:{label:"PM2.5",icon:"mdi:blur",color:"#ffb74d",digits:1,aq:"pm2_5"},pm10:{label:"PM10",icon:"mdi:blur-linear",color:"#a1887f",digits:0,aq:"pm10"},ozone:{label:"Ozone",icon:"mdi:molecule",color:"#4fc3f7",digits:3,aq:"ozone"},co2:{label:"CO\u2082",icon:"mdi:molecule-co2",color:"#4fc3f7",digits:0,aq:"co2"},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function l1(r,e,t,i){if(i)return i;let o=S1[r];return o?o.key?V5(e,t,o.key):o.aq?_3(e,t,o.aq):o.health?$8(e,t,o.find,{unit:o.unit,avoid:o.avoid}):o.find?Ns(e,t,o.find):null:null}function S7(r,e,t){if(t!=null&&t!=="")return Number(t);let i=S1[r]?.digits;return i??(/inHg/i.test(e)||e==="V"?2:/psi|kPa/i.test(e)?1:0)}function i9(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function Qs(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var Nf=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],B5=r=>r==null||isNaN(r)?"\u2014":Nf[Math.round((r%360+360)%360/22.5)%16];var If="pollenlevels",Wf=new Set(["plants_in_season_today","overall_pollen_risk_today","top_pollen_types_today"]),E8={TREE:"mdi:tree",GRASS:"mdi:grass",WEED:"mdi:flower-tulip"},Uf={ALDER:[1,2,3,4],ASH:[3,4,5],BIRCH:[3,4,5],COTTONWOOD:[3,4,5],ELM:[2,3,4],MAPLE:[2,3,4],OLIVE:[4,5,6],JUNIPER:[1,2,3,4],OAK:[3,4,5,6],PINE:[4,5,6],CYPRESS_PINE:[8,9,10],HAZEL:[1,2,3],GRAMINALES:[5,6,7,8],RAGWEED:[8,9,10],MUGWORT:[7,8,9],JAPANESE_CEDAR:[2,3,4],JAPANESE_CYPRESS:[3,4],TREE:[2,3,4,5,6],GRASS:[5,6,7,8],WEED:[8,9,10]},F8=["January","February","March","April","May","June","July","August","September","October","November","December"],jf={winter:[12,1,2],spring:[3,4,5],summer:[6,7,8],fall:[9,10,11],autumn:[9,10,11]};function Ys(r,e=!1){if(!r||typeof r!="string")return[];let t=new Set,i=/\b(early|mid|late)?[\s-]*(winter|spring|summer|fall|autumn)\b/gi,o;for(;o=i.exec(r);){let a=jf[o[2].toLowerCase()],C=(o[1]||"").toLowerCase();(C==="early"?a.slice(0,2):C==="late"?a.slice(1):C==="mid"?[a[1]]:a).forEach(s=>t.add(s))}return[...t].map(a=>e?(a+5)%12+1:a).sort((a,C)=>a-C)}function Gf(r,e){return r==null||isNaN(r)||r<=0?e===!1?"off":"none":r<=2?"low":r<=3?"medium":"high"}var Z7={none:"None",low:"Low",medium:"Medium",high:"High",off:"Off season"},Ks=r=>{let e=Number(r);return r==null||r===""||isNaN(e)?null:e};function qf(r){let e=r?.entities||{},t=r?.devices||{},i=new Map;for(let o in e){let a=e[o];if(a?.platform!==If||!o.startsWith("sensor."))continue;let C=r.states[o];if(!C)continue;let n=t[a.device_id]||{},H=(n.config_entries_subentries?JSON.stringify(n.config_entries_subentries):"")||(n.config_entries||[])[0]||"default";i.has(H)||i.set(H,{key:H,devices:new Set,plants:[],types:[],summary:{}});let V=i.get(H);if(a.device_id&&V.devices.add(a.device_id),a.entity_category)continue;if(Wf.has(a.translation_key)){V.summary[a.translation_key]=o;continue}let L=C.attributes||{};L.code?V.plants.push(o):"category"in L&&V.types.push(o)}return[...i.values()]}function Qf(r,e,t,i){let o=r.states[e],a=o?.attributes||{},C=String(a.code||"").toUpperCase()||Kf(a.icon)||Xf(a.friendly_name),n=Ks(o?.state),s=Ks(a.tomorrow_value),H=a.trend;!H&&n!=null&&s!=null&&(H=s>n?"up":s<n?"down":"flat");let V=t?.[C]||t?.[a.code]||(Ys(a.season,i).length?Ys(a.season,i):Yf(Uf[C],i))||[],L=String(a.type||"").toUpperCase();return{entity:e,code:C,name:Jf(a.friendly_name,r,e)||C,icon:E8[L]||E8[C]||a.icon||"mdi:flower-pollen",value:n,max:5,pct:n==null?0:Math.max(0,Math.min(100,n/5*100)),inSeason:a.inSeason??null,level:Gf(n,a.inSeason),category:a.category||null,tomorrow:s,trend:H||null,color:a.color_hex||null,months:V||[]}}var Yf=(r,e)=>r&&e?r.map(t=>(t+5)%12+1):r,Kf=r=>Object.keys(E8).find(e=>E8[e]===r)||"",Xf=r=>/grass/i.test(r||"")?"GRASS":/tree/i.test(r||"")?"TREE":/weed/i.test(r||"")?"WEED":"";function Jf(r,e,t){if(!r)return"";let i=e.devices?.[e.entities?.[t]?.device_id],o=i?.name_by_user||i?.name;return o&&r.startsWith(o)&&r.slice(o.length).trim()||r}function k7(r,e,t=new Date){let i=r||{},o=(e?.config?.latitude??0)<0,a=null,C;if(Array.isArray(i.entities)&&i.entities.length)C=i.entities.filter(w=>e.states[w]);else{let w=qf(e);if(a=i.device&&w.find(y=>y.devices.has(i.device))||w[0]||null,!a)return{source:null,rows:[],entities:[]};C=i.view==="types"?a.types:a.plants.length?a.plants:a.types}let n=C.map(w=>Qf(e,w,i.seasons,o));if(Array.isArray(i.species)&&i.species.length)n=i.species.map(y=>String(y).toUpperCase()).map(y=>n.find(b=>b.code===y||b.name.toUpperCase()===y)).filter(Boolean);else{n.sort((y,b)=>(b.value??-1)-(y.value??-1)||+(b.inSeason===!0)-+(y.inSeason===!0)||y.name.localeCompare(b.name));let w=Number(i.max_rows??6);w>0&&(n=n.slice(0,w))}let s=t.getMonth()+1,H=Array.from({length:12},(w,y)=>n.filter(b=>b.months.includes(y+1)).length),V=n.filter(w=>(w.value??0)>0).sort((w,y)=>y.value-w.value)[0]||null,L=w=>(w.value??0)<=0,d=w=>(w.value??0)>0||w.inSeason===!0||w.inSeason==null&&w.months.includes(s),u=n.some(d),f=n;i.hide_off_season!==!1&&(n=n.filter(d)),i.hide_none!==!1&&(n=n.filter(w=>!L(w)));let v;V?v=`${V.name} ${Z7[V.level].toLowerCase()} today`:u?v=i.show_nothing===!1?"":i.nothing_text||"In season, but nothing in the air today":v=["Out of season",eA(f,s)].filter(Boolean).join(" \xB7 ");let x=a?.summary||{};return{source:i.show_source===!1?"":i.source||(i.entities?.length?"Pollen":"Google"),town:i.show_location===!1?"":i.location||e?.config?.location_name||"",anyIn:u,top:V,status:v,rows:n,total:f.length,outOfSeason:f.length>0&&!u,allNone:f.length>0&&f.every(L),strip:H,month:s,entities:[...C,...Object.values(x)]}}function eA(r,e){let t=null;for(let i of r)if(i.months.length)for(let o=1;o<=12;o++){let a=(e-1+o)%12+1;if(i.months.includes(a)){(!t||o<t.d)&&(t={r:i,d:o,m:a});break}}return t?`${t.r.name} due in ${F8[t.m-1]}`:""}var n0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function s2(r,e){if(!n0(e))return e===void 0?r:e;let t={...n0(r)?r:{}};for(let i of Object.keys(e))t[i]=n0(e[i])&&n0(t[i])?s2(t[i],e[i]):e[i];return t}function Er(r,e){if(n0(r)&&n0(e)){let t={};for(let i of Object.keys(r)){let o=Er(r[i],e[i]);o!==void 0&&(t[i]=o)}return Object.keys(t).length?t:void 0}return JSON.stringify(r)===JSON.stringify(e)?void 0:r}function L5(r){if(!n0(r))return r;let e={};for(let[t,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let o=n0(i)?L5(i):i;n0(o)&&!Object.keys(o).length||(e[t]=o)}return e}var O7=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var a9="windrose-card",tA=()=>!!customElements.get(a9);function Pr(r){let e=r?.rose_engine||"auto";return e==="builtin"?"builtin":e==="windrose"||tA()?"windrose":"builtin"}var rA={mph:"mph","km/h":"kph","m/s":"mps",kn:"knot",kt:"knot",knots:"knot","ft/s":"fps",Beaufort:"bft"},iA=(r,e)=>({location:"bottom",buttons:r.map(([t,i,o])=>({type:"period_selector",button_text:t,period_back:i,...i===e?{active:!0}:{},...o||{}}))}),o9={standard:{label:"Standard \u2014 24 h, speed bar at the side, current direction",build:()=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"}})},periods:{label:"Period buttons \u2014 1 h / 8 h / 1 day / 7 days",build:()=>({windspeed_bar_location:"bottom",buttons_config:iA([["1 h","-1h"],["8 h","-8h"],["1 day","-1d"],["7 days","-7d",{use_statistics:!0,statistics_period:"hour"}]],"-1d")})},beaufort:{label:"Beaufort \u2014 speed and gust bars in Beaufort, live speed arrows",build:r=>({windspeed_bar_location:"bottom",data_period:{period_back:"-1d"},_speed:{speed_range_beaufort:!0,current_speed_arrow:!0,windspeed_bar_full:!0},_gust:{speed_range_beaufort:!0,current_speed_arrow:!0,windspeed_bar_full:!0,output_speed_unit:r}})},corners:{label:"Corner info \u2014 speed, direction and gust around the rose (sygad's style)",build:(r,e,t)=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"},rose_config:{center_circle:{text:"${calm-percentage}%"}},corner_info:{top_left:{label:"Speed",entity:e.speed,unit:` ${t}`,precision:1},top_right:{label:"Direction",entity:e.dir,input_unit:"degrees",output_unit:"letters"},...e.gust?{bottom_left:{label:"Gust",entity:e.gust,unit:` ${t}`,precision:1}}:{}}})},stats:{label:"Statistics \u2014 min / max / average speed and calm % under the rose",build:()=>({windspeed_bar_location:"right",data_period:{period_back:"-1d"},text_blocks:{bottom:{...Fr({})}}})},playback:{label:"Playback \u2014 step through the last 10 days (hourly statistics)",build:()=>({windspeed_bar_location:"right",buttons_config:{location:"bottom",buttons:[{type:"period_shift",button_text:"\u221212 h",shift_period:"-12h"},{type:"period_selector",button_text:"24 h",period_back:"-1d",active:!0},{type:"period_shift",button_text:"+12 h",shift_period:"+12h"},{type:"period_shift_play",button_text:"\u25B6 10 days",period_back:"-10d",window_period:"-1d",step_period:"+3h",delay:150,use_statistics:!0,statistics_period:"hour"}]}})},minimal:{label:"Minimal \u2014 the rose only",build:()=>({hide_windspeed_bar:!0,data_period:{period_back:"-1d"},direction_labels:{show_intercardinal_directions:!1}})}},P8={min:["Min","min-speed"],avg:["Avg","average-speed"],max:["Max","max-speed"],median:["Median","median-speed"],p90:["P90","p90-speed"],calm:["Calm","calm-percentage","%"]},oA=["min","avg","max","p90","calm"];function Fr(r){let t=(Array.isArray(r?.stats_items)&&r.stats_items.length?r.stats_items:oA).filter(a=>P8[a]).map(a=>P8[a][0]+" ${"+P8[a][1]+"}"+(P8[a][2]||"")).join(" \xB7 "),i=[r?.stats_weight&&r.stats_weight!=="400"?`font-weight:${Number(r.stats_weight)}`:"",r?.stats_align&&r.stats_align!=="left"?`text-align:${r.stats_align}`:""].filter(Boolean).join(";");return{text:i?`<div style="${i}">${t}</div>`:t,text_size:Number(r?.stats_size)||13,text_color:r?.stats_color||"var(--secondary-text-color)"}}var aA=["top_left","top_right","bottom_left","bottom_right"];function Xs(r,e,t){let i={speed:{label:"Speed",entity:e.speed,unit:` ${t}`,precision:1},direction:{label:"Direction",entity:e.dir,input_unit:"degrees",output_unit:"letters"},gust:e.gust?{label:"Gust",entity:e.gust,unit:` ${t}`,precision:1}:null},o={speed:r?.corner_speed||"top_left",direction:r?.corner_direction||"top_right",gust:r?.corner_gust||"bottom_left"},a={};for(let[C,n]of Object.entries(i)){let s=o[C];!n||!aA.includes(s)||a[s]||(a[s]={...n,...r?.corner_label_size?{label_text_size:Number(r.corner_label_size)}:{},...r?.corner_value_size?{value_text_size:Number(r.corner_value_size)}:{},...r?.corner_color?{color:r.corner_color}:{}})}return a}function CA(r,e,t,i){let o=C=>C!=null&&C!==""&&C!=="preset";if(o(e.wr_bars)&&(e.wr_bars==="hidden"?r.hide_windspeed_bar=!0:(delete r.hide_windspeed_bar,r.windspeed_bar_location=e.wr_bars)),r.corner_info&&!o(e.wr_corners)&&(e.corner_speed||e.corner_direction||e.corner_gust||e.corner_label_size||e.corner_value_size||e.corner_color)&&(r.corner_info=Xs(e,t,i)),o(e.wr_corners)&&(e.wr_corners==="off"?delete r.corner_info:r.corner_info=Xs(e,t,i)),o(e.wr_stats))delete r.text_blocks,e.wr_stats!=="off"&&(r.text_blocks={[e.wr_stats]:Fr(e)});else if(r.text_blocks)for(let C of Object.keys(r.text_blocks))r.text_blocks[C]=Fr(e);if(o(e.wr_buttons)&&(e.wr_buttons==="none"?delete r.buttons_config:r.buttons_config={...o9[e.wr_buttons].build().buttons_config}),r.buttons_config&&o(e.wr_buttons_position)&&(r.buttons_config={...r.buttons_config,location:e.wr_buttons_position}),o(e.wr_period)){let C=r.buttons_config?.buttons,n=C?.filter(s=>s.type==="period_selector");if(n?.length){let s=n.find(H=>H.period_back===e.wr_period);s?r.buttons_config={...r.buttons_config,buttons:C.map(H=>H.type==="period_selector"?{...H,active:H===s}:H)}:r.data_period={period_back:e.wr_period}}else r.data_period={period_back:e.wr_period}}if(o(e.wr_bar_full)&&(r.windspeed_entities=r.windspeed_entities.map(C=>({...C,windspeed_bar_full:e.wr_bar_full==="on"}))),(e.wr_range_step||e.wr_range_max||e.wr_gust_max)&&(r.windspeed_entities=r.windspeed_entities.map((C,n)=>{if(C.speed_range_beaufort)return C;let s=n===0?e.wr_range_max:e.wr_gust_max||e.wr_range_max;return{...C,...e.wr_range_step?{speed_range_step:Number(e.wr_range_step)}:{},...s?{speed_range_max:Number(s)}:{}}})),o(e.wr_beaufort)){let C=e.wr_beaufort==="on";r.windspeed_entities=r.windspeed_entities.map(n=>({...n,speed_range_beaufort:C,...C?{current_speed_arrow:!0}:{}}))}let a=(C,n)=>Math.max(10,Math.min(240,Number(C??n)||n));return e.wr_arrow===!1?r.current_direction={...r.current_direction||{},show_arrow:!1}:r.current_direction={...r.current_direction||{},show_arrow:!0,arrow_size:a(e.wr_arrow_size,50)},e.wr_arrow_color&&(r.colors={...r.colors||{},rose_current_direction_arrow:e.wr_arrow_color}),r.windspeed_entities=r.windspeed_entities.map(C=>({...C,...o(e.wr_speed_arrows)?{current_speed_arrow:e.wr_speed_arrows==="on"}:{},current_speed_arrow_size:a(e.wr_speed_arrow_size,40)})),r}function Js(r,e,t){let i=rA[t]||"mph",o=o9[r?.windrose_preset]||o9.standard,{_speed:a,_gust:C,...n}=o.build(i,e,t),s={speed_unit:"auto",output_speed_unit:i,output_speed_unit_label:t||void 0,speed_range_beaufort:!1,windspeed_bar_full:!1},H={type:`custom:${a9}`,refresh_interval:300,wind_direction_entity:{entity:e.dir},windspeed_entities:[{entity:e.speed,name:"Speed",...s,...a||{}},...e.gust?[{entity:e.gust,name:"Gust",...s,use_for_windrose:!1,...C||{}}]:[]],current_direction:{show_arrow:!0},matching_strategy:{name:"full-time"},...n};CA(H,r||{},e,t);let V=s2(H,r?.windrose||{});return V.windspeed_entities=(V.windspeed_entities||[]).map(L=>{if(!L.speed_range_beaufort||(r?.windrose?.windspeed_entities||[]).some(f=>f?.output_speed_unit_label))return L;let{output_speed_unit_label:d,...u}=L;return u}),V.buttons_config?.buttons?.some(L=>L.type==="period_selector"&&L.active)&&delete V.data_period,V}var Dr=t4(H7(),1);var j0=t4(H7(),1),nA=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],sA=r=>nA.find(([e])=>r<e)[1];function eH(r,e,t=31){let i=j0.getMoonIllumination(r).phase;for(let o=1;o<=t*24;o++){let a=new Date(r.getTime()+o*36e5),C=j0.getMoonIllumination(a).phase;if(e===0?C<i:i<e&&C>=e)return a;i=C}return null}function s0(r,e=new Date){let{latitude:t,longitude:i}=r?.config||{},o=j0.getMoonIllumination(e),a=t!=null?j0.getMoonTimes(e,t,i):{};return{phase:o.phase,name:sA(o.phase),fraction:o.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:eH(e,.5),nextNew:eH(e,0)}}function D8(r,e=new Date){let{latitude:t,longitude:i}=r?.config||{};if(t==null)return null;let o=j0.getTimes(e,t,i),a=o.sunset-o.sunrise;return{sunrise:o.sunrise,sunset:o.sunset,noon:o.solarNoon,dawn:o.dawn,dusk:o.dusk,daylightMs:a}}var b3=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),R8=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});function n9(r){let i=r<.5,o=Math.cos(r*2*Math.PI),a=Math.abs(o)*24,C=i?1:0,n=`M26 2 A24 24 0 0 ${C} 26 50 A${a} 24 0 0 ${o>0?1-C:C} 26 2 Z`;return c1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${n} fill="#e9e6d6"></path>
  </svg>`}var C9=class extends q{render(){if(!this.hass)return h;let e=s0(this.hass),t=o=>o?b3(this.hass).format(o):"\u2014",i=R8(this.hass);return p`${s1(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${n9(e.phase)}</div>
        <div class="facts">
          <span class="name">${e.name}</span>
          <span>Illumination</span><span>${Math.round(e.fraction*100)}%</span>
          <span>Moonrise</span><span>${e.alwaysUp?"up all day":e.alwaysDown?"down all day":t(e.rise)}</span>
          <span>Moonset</span><span>${t(e.set)}</span>
          ${e.nextFull?p`<span>Next full</span><span>${i.format(e.nextFull)}</span>`:h}
          ${e.nextNew?p`<span>Next new</span><span>${i.format(e.nextNew)}</span>`:h}
        </div>
      </div>`}};Z(C9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(C9,"styles",[M1,Q`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",C9);var y3=r=>r.map(([e,t])=>({value:e,label:t})),B8=[["dawn","Dawn"],["sunrise","Sunrise"],["solar_noon","Solar noon"],["sunset","Sunset"],["dusk","Dusk"],["day_length","Length of day"],["visible_light","Visible light"],["moonrise","Moonrise"],["moonset","Moonset"],["moon_phase","Moon phase"],["moon_illumination","Illumination"],["next_full","Next full moon"],["next_new","Next new moon"]],rH=B8.map(([r])=>r),S3=r=>r instanceof Date&&!isNaN(r),tH=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`;function z8(r=rH,e=!1,t=[["below","Below the panel's content"],["above","Above the panel's content"]]){let i=a=>!!a.show_facts,o=y3([["400","Regular"],["500","Medium"],["700","Bold"]]);return[{name:"show_facts",label:"Show sun & moon facts",selector:{boolean:{}},default:e},{name:"facts",label:"Facts",when:i,selector:{select:{multiple:!0,options:y3(B8)}},default:r},{name:"fact_position",label:"Position",when:i,selector:{select:{options:y3(t)}},default:t[0][0]},{name:"fact_spacing",label:"Spacing",when:i,selector:{select:{options:y3([["spread","Spread across the width"],["packed","Packed together"]])}},default:"spread"},{name:"fact_gap",label:"Gap between facts",when:i,selector:{number:{min:4,max:80,step:2,mode:"slider",unit_of_measurement:"px"}},default:14},{name:"fact_align",label:"Alignment",when:i,selector:{select:{options:y3([["left","Left"],["center","Center"],["right","Right"]])}},default:"left"},{name:"fact_moon_illum",label:"Illumination",when:a=>i(a)&&(a.facts||r).includes("moon_phase"),selector:{select:{options:y3([["separate","Its own fact"],["right","With the moon phase, to the right of it"],["below","With the moon phase, under it"]])}},default:"separate"},{name:"fact_illum_value",label:"Illumination %",when:a=>i(a)&&(a.fact_moon_illum||"separate")!=="separate"&&(a.facts||r).includes("moon_phase"),selector:{select:{options:y3([["below","Under the label"],["right","To the right of the label"]])}},default:"below"},{name:"fact_moon_size",label:"Moon image size",when:a=>i(a)&&(a.facts||r).includes("moon_phase"),selector:{number:{min:16,max:160,step:2,mode:"slider",unit_of_measurement:"px"}},default:36},{name:"fact_label_size",label:"Label size",when:i,selector:{number:{min:8,max:32,mode:"slider",unit_of_measurement:"px"}},default:11},{name:"fact_label_weight",label:"Label weight",when:i,selector:{select:{options:o}},default:"400"},{name:"fact_label_color",label:"Label color",when:i,selector:{text:{}},helper:"Not set: secondary text."},{name:"fact_value_size",label:"Value size",when:i,selector:{number:{min:8,max:40,mode:"slider",unit_of_measurement:"px"}},default:13},{name:"fact_value_weight",label:"Value weight",when:i,selector:{select:{options:o}},default:"400"},{name:"fact_value_color",label:"Value color",when:i,selector:{text:{}},helper:"Not set: primary text."}].map(a=>({...a,sub:"Sun & moon facts"}))}function HA(r,e=new Date){let{latitude:t,longitude:i}=r?.config||{};if(t==null)return null;let o=new Date(e);o.setHours(12,0,0,0);let a=Dr.getTimes(o,t,i),C=new Date(o);C.setDate(C.getDate()-1);let n=Dr.getTimes(C,t,i),s=s0(r,e),H=new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),V=new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"}),L=v=>S3(v)?H.format(v):"\u2014",d=S3(a.sunset)&&S3(a.sunrise)?a.sunset-a.sunrise:null,u=S3(n.sunset)&&S3(n.sunrise)?n.sunset-n.sunrise:null,f=d!=null&&u!=null?Math.round((d-u)/6e4):null;return{dawn:L(a.dawn),sunrise:L(a.sunrise),solar_noon:L(a.solarNoon),sunset:L(a.sunset),dusk:L(a.dusk),day_length:tH(d),day_change:f==null?"":`${f>=0?"+":"\u2212"}${Math.abs(f)}m`,visible_light:tH(S3(a.dusk)&&S3(a.dawn)?a.dusk-a.dawn:null),moonrise:s.alwaysUp?"up all day":s.alwaysDown?"down all day":L(s.rise),moonset:s.alwaysUp||s.alwaysDown?"\u2014":L(s.set),moon_phase:s.name,moon_phase_value:s.phase,moon_illumination:`${Math.round(s.fraction*100)}%`,next_full:s.nextFull?V.format(s.nextFull):"\u2014",next_new:s.nextNew?V.format(s.nextNew):"\u2014"}}function $7(r,e,t=rH,i=!1){if(!(i?e?.show_facts!==!1:e?.show_facts===!0))return h;let o=HA(r);if(!o)return h;let a=e?.fact_moon_illum==="right"||e?.fact_moon_illum==="below"?e.fact_moon_illum:null,C=(Array.isArray(e?.facts)?e.facts:t).filter(L=>B8.some(([d])=>d===L));if(a&&C.includes("moon_phase")&&(C=C.filter(L=>L!=="moon_illumination")),!C.length)return h;let n=Object.fromEntries(B8),s=[e.fact_label_size?`--fl-size:${Number(e.fact_label_size)}px`:"",e.fact_label_weight?`--fl-weight:${e.fact_label_weight}`:"",e.fact_label_color?`--fl-color:${e.fact_label_color}`:"",e.fact_value_size?`--fv-size:${Number(e.fact_value_size)}px`:"",e.fact_value_weight?`--fv-weight:${e.fact_value_weight}`:"",e.fact_value_color?`--fv-color:${e.fact_value_color}`:"",`--moon-img:${Number(e.fact_moon_size)||36}px`,`--f-align:${e.fact_align||"left"}`,e.fact_gap!=null?`--f-gap:${Number(e.fact_gap)}px`:""].filter(Boolean).join(";"),H=p`<div class="illum ${e.fact_illum_value==="right"?"inline":""}"><span class="fl">${n.moon_illumination}</span><span class="fv">${o.moon_illumination}</span></div>`,V=`facts ${e.fact_spacing==="packed"?"packed":""} al-${e.fact_align||"left"}`;return p`<div class=${V} style=${s}>${C.map(L=>L==="moon_phase"?p`<div class="fact moon"><span class="mi">${n9(o.moon_phase_value)}</span>
          <div class="mt ${a==="right"?"row":""}"><div><span class="fl">${n[L]}</span><span class="fv">${o.moon_phase}</span></div>${a?H:h}</div></div>`:p`<div class="fact"><span class="fl">${n[L]}</span><span class="fv">${o[L]}${L==="day_length"&&o.day_change?p` <small class="fd">${o.day_change}</small>`:h}</span></div>`)}</div>`}var s9=Q`
  .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px var(--f-gap, 14px); margin-top: 8px; text-align: var(--f-align, left); }
  /* Packed: facts sit next to each other at their own width, the gap between them. */
  .facts.packed { display: flex; flex-wrap: wrap; align-items: flex-start; }
  .facts.packed .fact.moon { grid-column: auto; }
  .facts.packed.al-center { justify-content: center; }
  .facts.packed.al-right { justify-content: flex-end; }
  .facts.above { margin: 0 0 8px; }
  .facts.inhead { margin: 0; flex: 1; min-width: 0; }
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
`;function z5(r={},e,t){return{distance:r.distance_entity||l1("lightning_distance",e,t),count:r.count_entity||l1("lightning_count",e,t),time:r.time_entity||l1("lightning_time",e,t),battery:r.battery_entity||$8(e,t,/(wh57|lightning).*batt|batt.*(wh57|lightning)/i)}}function V9(r,e){let t=e.time&&r.states[e.time];if(t&&!["unknown","unavailable",""].includes(t.state)){let o=Number(t.state);if(Number.isFinite(o)&&o>1e9)return o<1e12?o*1e3:o;let a=Date.parse(t.state);if(Number.isFinite(a))return a}let i=e.distance&&r.states[e.distance];return i?.last_changed?Date.parse(i.last_changed):null}var H9=class extends q{shouldUpdate(e){return!j2(e,this.hass,Object.values(z5(this.config||{},this.station,this.hass)))}render(){if(!this.hass)return h;let e=this.config||{},t=this.hass,i=z5(e,this.station,t),o=d1(t,i.distance),a=d1(t,i.count),C=d1(t,i.battery),n=s1(e,"mdi:flash","Lightning");if(!o&&!a)return p`${n}<div class="note">No lightning sensor found (e.g. an Ecowitt WH57).</div>`;let s=V9(t,i),H=s?(Date.now()-s)/6e4:null,V=o&&Number.isFinite(o.value)?/mi/i.test(o.unit)?o.value*1.609344:o.value:null,L=t.config?.unit_system?.length!=="km",d=V!=null&&V<=Number(e.near_km??16)&&H!=null&&H<=Number(e.near_minutes??30),u=t.locale?.language,f=s?new Intl.DateTimeFormat(u,{hour:"numeric",minute:"2-digit",...H>1440?{month:"short",day:"numeric"}:{}}).format(new Date(s)):"",v=H==null?"":H<1?"just now":H<60?`${Math.round(H)} min ago`:H<1440?`${Math.round(H/60)} h ago`:`${Math.round(H/1440)} days ago`,x=V==null?"\u2014":L?`${J(V/1.609344,0)} mi`:`${J(V,0)} km`;return p`${n}
      ${d?p`<div class="warn" role="alert"><ha-icon icon="mdi:flash-alert"></ha-icon>Lightning within ${L?"10 miles":"16 km"} — head indoors and stay there until 30 minutes after the last strike.</div>`:h}
      ${o?J1("Latest strike",x,s?`${f} \xB7 ${v}`:"","",()=>u1(this,o.entity)):h}
      ${a?J1("Strikes today",Number.isFinite(a.value)?J(a.value,0):String(a.value),"","",()=>u1(this,a.entity)):h}
      ${C&&e.show_battery!==!1?J1("Sensor battery",`${Number.isFinite(C.value)?J(C.value,C.unit==="V"?2:0):C.value}${C.unit?` ${C.unit}`:""}`,"","",()=>u1(this,C.entity)):h}
      ${e.show_note===!1?h:p`<div class="note">Strike distances are estimates, out to about 40 km (25 miles).</div>`}`}};Z(H9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(H9,"styles",[M1,J3,Q`
      .warn { display: flex; gap: 10px; align-items: center; padding: 8px 10px; margin-bottom: 8px; border-radius: 10px; background: #5b1f8f; color: #fff; font-size: 13px; font-weight: 500; }
      .warn ha-icon { --mdc-icon-size: 26px; color: #ffc93c; flex: 0 0 auto; }
      .bolt { color: #ffc93c; }
    `]);customElements.get("wsfc-panel-lightning")||customElements.define("wsfc-panel-lightning",H9);var o1=r=>r.map(([e,t])=>({value:e,label:t})),N8=["6h","12h","24h","48h","7d","30d","90d","365d"],iH=o1([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),VA=o1([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),LA=Object.entries(S1).map(([r,e])=>({value:r,label:e.label})),p2=r=>({entity:r?{domain:r}:{}}),H0={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[{name:"main_temperature",label:"Main temperature",selector:{select:{mode:"dropdown",options:[{value:"temperature",label:"Temperature"},{value:"feels_like",label:"Feels like"}]}},default:"temperature",helper:"Feels like shows the feels-like temperature in place of the temperature (falls back to the temperature when there's no feels-like value)."},{name:"auto_scale",selector:{boolean:{}},default:!1,helper:"Size the temperature, its sub-header, condition, icon, clock, date and metric chips from the panel's size. Each then has its own scale below, instead of the pixel sizes in the sections editor."},{name:"fit",label:"Fit to the panel",when:r=>!!r.auto_scale,selector:{boolean:{}},default:!0,helper:"With a set height: everything scales so the hero fills its panel (no empty space below, nothing cut off) \u2014 a 0.5-row hero shrinks to fit; one next to a taller panel grows. Off: sizes follow the width only, and the hero sets its own height."},{name:"scale",label:"Overall scale",when:r=>!!r.auto_scale,selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Everything bigger or smaller; the items below scale on top of this."},{name:"temp_scale",label:"Temperature",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"condition_scale",label:"Condition text",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"icon_scale",label:"Condition icon",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"clock_scale",label:"Clock time",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"date_scale",label:"Date",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"secondary_scale",label:"Temperature sub-header",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"The line under the temperature, e.g. today's high / low."},{name:"chips_scale",label:"Metric chips",when:r=>!!r.auto_scale,selector:{number:{min:30,max:300,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},...z8(void 0,!1,[["bottom","Along the bottom"],["top","Along the top"]])]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:p2(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:p2("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Button Menu",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:LA}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:p2()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"Not set: the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:o1([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above."},{name:"ranges",selector:{select:{multiple:!0,options:N8.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:N8.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:N8.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:N8.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:o1([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,fit:!0,groups:[["View","mdi:eye-outline",[{name:"fit",selector:{boolean:{}},default:!0,helper:"Shrink the compass or rose so everything fits the panel's height (instead of the panel growing and stretching its row)."},{name:"view",selector:{select:{options:o1([["compass","Compass"],["rose","Wind rose"]])}}},{name:"show_view_buttons",selector:{boolean:{}},default:!0,helper:"Compass / Rose buttons in the header."}]],["Readings (speed, gust, direction)","mdi:numeric",[{name:"readings_position",selector:{select:{options:o1([["auto","Automatic \u2014 beside the dial; hidden with the Wind Rose Card"],["side","Beside the dial"],["above","Above"],["below","Below"],["hidden","Hidden"]])}},default:"auto"}]],["Chart","mdi:chart-line",[{name:"show_chart",label:"Show the chart",selector:{boolean:{}},default:!0,helper:"24 h speed and gust chart."},{name:"chart_mode",label:"Show the chart",when:r=>r.show_chart!==!1,selector:{select:{options:o1([["inline","In the panel"],["popover","As a pop-over \u2014 a chart button in the header opens it over the panel"]])}},default:"inline",helper:"Pop-over: the panel shows just the compass or rose; the chart opens on demand (tap outside, the button or Esc closes it)."},{name:"chart_popover_height",label:"Pop-over height",when:r=>r.show_chart!==!1&&r.chart_mode==="popover",selector:{number:{min:120,max:500,step:10,mode:"slider",unit_of_measurement:"px"}},default:220},{name:"chart_position",when:r=>r.show_chart!==!1&&r.chart_mode!=="popover",selector:{select:{options:o1([["below","Below"],["above","Above"]])}},default:"below"},{name:"chart_legend",when:r=>r.show_chart!==!1,selector:{boolean:{}},default:!1,helper:"Speed / Gust legend on the chart."},{name:"windrose_chart",when:r=>r.show_chart!==!1,selector:{boolean:{}},default:!0,helper:"Also with the Wind Rose Card."}]],["Compass","mdi:compass-outline",[{name:"dial_scale",selector:{number:{min:50,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Compass and built-in rose size."},{name:"compass_arrow_size",selector:{number:{min:50,max:400,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Direction pointer size."},{name:"compass_arrow_color",selector:{text:{}},helper:"Not set: the wind color."}]],["Wind rose","mdi:compass-rose",[{name:"rose_engine",selector:{select:{options:o1([["auto","Automatic \u2014 Wind Rose Card when installed"],["windrose","Wind Rose Card (custom:windrose-card)"],["builtin","Built-in rose"]])}},default:"auto",helper:"aukedejong's Wind Rose Card (HACS) with your station's sensors filled in, or our built-in 24 h rose."},{name:"show_legend",selector:{boolean:{}},default:!0,helper:"Built-in rose: speed colour legend."},{name:"rose_bins",selector:{object:{}},helper:"Built-in rose: speed thresholds in the sensor's unit, e.g. [1, 5, 10, 15, 25]."},{name:"windrose_preset",selector:{select:{options:Object.entries(o9).map(([r,e])=>({value:r,label:e.label}))}},default:"standard",helper:"Wind Rose Card starting layout; the settings below change parts of it."},{name:"wr_period",selector:{select:{options:o1([["preset","From the preset"],["-1h","1 hour"],["-8h","8 hours"],["-1d","24 hours"],["-7d","7 days"],["-30d","30 days"]])}},default:"preset",helper:"Period shown first."},{name:"wr_scale",selector:{number:{min:30,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Wind Rose Card size within the panel."},{name:"wr_arrow",selector:{boolean:{}},default:!0,helper:"Current direction arrow."},{name:"wr_arrow_size",when:r=>r.wr_arrow!==!1,selector:{number:{min:10,max:240,step:5,mode:"slider"}},default:50,helper:"Direction arrow (pointer) size."},{name:"wr_arrow_color",when:r=>r.wr_arrow!==!1,selector:{text:{}},helper:"Not set: red. The Wind Rose Card uses it for the speed-bar arrows too."}]],["Wind Rose Card: speed bars","mdi:chart-bar",[{name:"wr_bars",selector:{select:{options:o1([["preset","From the preset"],["right","Right"],["bottom","Bottom"],["hidden","Hidden"]])}},default:"preset"},{name:"wr_beaufort",selector:{select:{options:o1([["preset","From the preset"],["on","Beaufort"],["off","Speed unit"]])}},default:"preset"},{name:"wr_bar_full",label:"Full colour scale",selector:{select:{options:o1([["preset","From the preset"],["on","Show every speed range"],["off","Only up to the highest measured"]])}},default:"preset",helper:"Every range gets its own colour (blue \u2192 green \u2192 yellow \u2192 red), like the Beaufort bars."},{name:"wr_range_step",label:"Range step",when:r=>r.wr_beaufort!=="on",selector:{number:{min:1,max:20,step:1,mode:"slider"}},helper:"Speed bars in your unit: width of each colour band (e.g. 5 mph). Smaller = more colours."},{name:"wr_range_max",label:"Speed bar max",when:r=>r.wr_beaufort!=="on",selector:{number:{min:5,max:150,step:5,mode:"slider"}},helper:"Last band starts here."},{name:"wr_gust_max",label:"Gust bar max",when:r=>r.wr_beaufort!=="on",selector:{number:{min:5,max:150,step:5,mode:"slider"}},helper:"Default: the speed bar max."},{name:"wr_speed_arrows",selector:{select:{options:o1([["preset","From the preset"],["on","Show"],["off","Hide"]])}},default:"preset",helper:"Arrow on each bar at the current speed."},{name:"wr_speed_arrow_size",when:r=>r.wr_speed_arrows!=="off",selector:{number:{min:10,max:240,step:5,mode:"slider"}},default:40}]],["Wind Rose Card: corner info","mdi:page-layout-header-footer",[{name:"wr_corners",selector:{select:{options:o1([["preset","From the preset"],["on","Show"],["off","Hide"]])}},default:"preset"},...[["corner_speed","top_left"],["corner_direction","top_right"],["corner_gust","bottom_left"]].map(([r,e])=>({name:r,when:t=>t.wr_corners!=="off",selector:{select:{options:o1([["top_left","Top left"],["top_right","Top right"],["bottom_left","Bottom left"],["bottom_right","Bottom right"],["hidden","Hidden"]])}},default:e})),{name:"corner_label_size",when:r=>r.wr_corners!=="off",selector:{number:{min:20,max:120,step:5,mode:"slider"}},default:50,helper:"Label size (the card's own scale)."},{name:"corner_value_size",when:r=>r.wr_corners!=="off",selector:{number:{min:20,max:160,step:5,mode:"slider"}},default:80,helper:"Value size (the card's own scale)."},{name:"corner_color",when:r=>r.wr_corners!=="off",selector:{text:{}},helper:"Text color."}]],["Wind Rose Card: statistics","mdi:sigma",[{name:"wr_stats",selector:{select:{options:o1([["preset","From the preset"],["top","Above the rose"],["bottom","Below the rose"],["off","Hide"]])}},default:"preset"},{name:"stats_items",when:r=>r.wr_stats!=="off",selector:{select:{multiple:!0,options:o1([["min","Min"],["avg","Average"],["max","Max"],["median","Median"],["p90","P90 (gust-like)"],["calm","Calm %"]])}},default:["min","avg","max","p90","calm"]},{name:"stats_align",when:r=>r.wr_stats!=="off",selector:{select:{options:o1([["left","Left"],["center","Center"],["right","Right"]])}},default:"left"},{name:"stats_size",when:r=>r.wr_stats!=="off",selector:{number:{min:8,max:40,mode:"slider",unit_of_measurement:"px"}},default:13},{name:"stats_weight",when:r=>r.wr_stats!=="off",selector:{select:{options:o1([["400","Regular"],["500","Medium"],["700","Bold"]])}},default:"400"},{name:"stats_color",when:r=>r.wr_stats!=="off",selector:{text:{}},helper:"Not set: secondary text."}]],["Wind Rose Card: buttons","mdi:gesture-tap-button",[{name:"wr_buttons",selector:{select:{options:o1([["preset","From the preset"],["periods","Period buttons (1 h \u2026 7 days)"],["playback","Playback (\xB112 h, play 10 days)"],["none","None"]])}},default:"preset"},{name:"wr_buttons_position",when:r=>r.wr_buttons!=="none",selector:{select:{options:o1([["preset","From the preset"],["top","Top"],["bottom","Bottom"]])}},default:"preset"}]],["Wind Rose Card: advanced","mdi:code-braces",[{name:"windrose",selector:{object:{}},helper:"Any of the card's own options, merged last, e.g. rose_config, colors or speed_ranges."}]],["Sensors","mdi:access-point",[{name:"entities.wind_speed",selector:p2("sensor")},{name:"entities.wind_gust_speed",selector:p2("sensor")},{name:"entities.wind_bearing",selector:p2("sensor")}]]]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"start_paused",label:"Start paused",when:r=>r.radar!==!1,selector:{boolean:{}},default:!1,helper:"Show only the latest radar image until you press play; the other frames load then. Lighter for low-powered tablets."},{name:"base_map",selector:{select:{options:VA}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:iH}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...iH]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],flexHide:["timeframe_mode","timeframe_hours","timeframe_anchor","night_moon"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:o1([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",label:"Hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:o1([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},{name:"show_steps",label:"Step buttons",selector:{boolean:{}},default:!1,helper:"\u25C0 Now \u25B6 buttons in the header to look at later hours or days."},{name:"step_hours",label:"Step",when:r=>!!r.show_steps,selector:{select:{options:o1([["6","6 hours"],["12","12 hours"],["24","1 day"]])}},default:"12"},{name:"max_ahead",label:"How far ahead",when:r=>!!r.show_steps,selector:{number:{min:12,max:168,step:6,mode:"slider",unit_of_measurement:"h"}},default:48,helper:"Hourly forecasts usually reach 48 h; beyond that the bar shows daylight only."},{name:"return_after",label:"Back to now after",when:r=>!!r.show_steps,selector:{number:{min:0,max:600,step:10,mode:"slider",unit_of_measurement:"s"}},default:60,helper:"0 = stay."},...z8(void 0,!1,[["below","Below the sky"],["above","Above the arc"],["header","In the header, beside the step buttons"]])]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",label:"Altitude chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."},{name:"show_table",label:"Sun & moon table",selector:{boolean:{}},default:!0,helper:"Rise and set times for the sun, the three twilights and the moon."},...z8(void 0,!0)]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"start_paused",label:"Start paused",selector:{boolean:{}},default:!1,helper:"Don't load the animated Windy map until you press play (Windy can't show a still image). Lighter for low-powered tablets."},{name:"overlay",selector:{select:{options:o1([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:o1([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:o1([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:o1([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"engine",selector:{select:{options:o1([["auto","Automatic"],["sgcc","Statistics Graph Chart Card (custom)"],["builtin","Home Assistant Statistics graph"]])}},default:"auto",helper:"Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card."},{name:"preset",selector:{select:{options:o1([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust, direction)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["air_quality","Air quality (AQI, PM2.5)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:.25,max:365,step:.25,mode:"box"}}},{name:"period",selector:{select:{options:o1([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:o1([["line","Line"],["bar","Bar"]])}},helper:"Built-in card only (the custom card sets this per series)."},{name:"stat_types",selector:{select:{multiple:!0,options:o1([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list."}]},health:{tag:"wsfc-panel-health",label:"Station health",icon:"mdi:heart-pulse",span:4,rows:0,schema:[{name:"show_devices",selector:{boolean:{}},helper:"Show device names even when there is only one."},{name:"include_ecowitt",label:"All Ecowitt devices",selector:{boolean:{}},default:!0,helper:"Also show devices from any Ecowitt integration that aren't in Weather Sources (e.g. Ecowitt Local's sensor devices next to the core integration)."},{name:"show_ids",label:"Hardware IDs",selector:{boolean:{}},default:!0},{name:"devices",label:"More devices",selector:{device:{multiple:!0}},helper:"Any other devices to show (battery, signal, online)."}]},records:{tag:"wsfc-panel-records",label:"Weather records",icon:"mdi:trophy-outline",span:4,rows:0,schema:[{name:"show_station",label:"This station's records",selector:{boolean:{}},default:!0,helper:"From Home Assistant's long-term statistics (temperature, gust, rain today); grows as history builds up."},{name:"show_today",label:"Records for today's date",selector:{boolean:{}},default:!0},{name:"show_month",label:"Records for this month",selector:{boolean:{}},default:!0},{name:"show_all_time",label:"All-time area records",selector:{boolean:{}},default:!0},{name:"show_badge",label:"Record badge",selector:{boolean:{}},default:!0,helper:"A badge when today beats the area record for its date."},{name:"show_source",label:"Source line",selector:{boolean:{}},default:!0},{name:"area_source",label:"Area records from",selector:{select:{options:o1([["auto","Automatic \u2014 CoAgMET sensor, else Open-Meteo"],["coagmet","CoAgMET sensor only (Colorado, measured)"],["open_meteo","Open-Meteo only (anywhere, modelled since 1940)"],["off","None \u2014 this station only"]])}},default:"auto"},{name:"records_entity",label:"Area records sensor",when:r=>r.area_source!=="open_meteo"&&r.area_source!=="off",selector:{entity:{domain:"sensor"}},helper:"Found on its own: the sensor from the coagmet_records package (CoAgMET / Northern Water, Colorado)."}]},vpd:{tag:"wsfc-panel-vpd",label:"Air dryness (VPD)",icon:"mdi:water-opacity",span:4,rows:0,schema:[{name:"entity",label:"VPD sensor",selector:p2("sensor"),helper:"Default: the station's own VPD sensor, else worked out from temperature and humidity."},{name:"show_plant",label:"Plant picture",selector:{boolean:{}},default:!0},{name:"show_advice",label:"Garden advice",selector:{boolean:{}},default:!0,helper:"What the reading means this season."},{name:"show_scale",label:"Colour scale",selector:{boolean:{}},default:!0},{name:"show_note",label:"Explanation",selector:{boolean:{}},default:!0},{name:"content_width",label:"Horizontal spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"content_height",label:"Vertical spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100}]},frost_watch:{tag:"wsfc-panel-frost-watch",label:"Frost & heat watch",icon:"mdi:snowflake-thermometer",span:4,rows:0,schema:[{name:"use_forecast",label:"Use tonight's forecast low",selector:{boolean:{}},default:!0,helper:"Also warn about frost later tonight (lowest hourly forecast in the next 18 hours)."},{name:"show_note",label:"Unofficial note",selector:{boolean:{}},default:!0},{name:"heat_danger",section:"Thresholds",label:"Heat danger at feels-like",selector:{number:{mode:"box",step:1}},helper:"In your temperature unit. Default 103 \xB0F / 39 \xB0C."},{name:"heat_caution",section:"Thresholds",label:"Heat caution at feels-like",selector:{number:{mode:"box",step:1}},helper:"Default 90 \xB0F / 32 \xB0C."},{name:"frost_temp",section:"Thresholds",label:"Frost possible at or below",selector:{number:{mode:"box",step:.5}},helper:"Air temperature, any time. Default 36 \xB0F / 2 \xB0C."},{name:"frost_night_temp",section:"Thresholds",label:"Calm, dry night: frost at or below",selector:{number:{mode:"box",step:.5}},helper:"With a dew point at or below freezing and light wind. Default 41 \xB0F / 5 \xB0C."},{name:"frost_low",section:"Thresholds",label:"Frost tonight when the low is at or below",selector:{number:{mode:"box",step:.5}},helper:"Default 34 \xB0F / 1 \xB0C."}]},rain:{tag:"wsfc-panel-rain",label:"Rain totals",icon:"mdi:weather-rainy",span:4,rows:0,schema:[{name:"show_rows",label:"Rows",selector:{select:{multiple:!0,options:o1([["rain_rate","Raining now (rate)"],["rain_hour","Last hour"],["rain_today","Today"],["rain_24h","Last 24 hours"],["rain_event","This rain event"],["rain_week","This week"],["rain_month","This month"],["rain_year","This year"],["last_rain","Last rain"]])}},helper:"In this order. Week, month and year come from Home Assistant's history when the station has no sensor for them."},{name:"show_normal",label:"Against the normal",selector:{boolean:{}},default:!0,helper:"This month and year so far against the area's normal (CoAgMET or Open-Meteo)."},{name:"area_source",label:"Area data from",selector:{select:{options:o1([["auto","Automatic \u2014 CoAgMET sensor, else Open-Meteo"],["coagmet","CoAgMET sensor only (Colorado, measured)"],["open_meteo","Open-Meteo only (anywhere, modelled)"],["off","None"]])}},default:"auto"},{name:"content_width",label:"Horizontal spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"content_height",label:"Vertical spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100}]},garden:{tag:"wsfc-panel-garden",label:"Frost & the garden",icon:"mdi:sprout",span:4,rows:0,schema:[{name:"show_outlook",label:"Frost outlook (next nights)",selector:{boolean:{}},default:!0},{name:"outlook_source",label:"Outlook from",when:r=>r.show_outlook!==!1,selector:{select:{options:o1([["forecast","Weather forecast (the card's weather entity)"],["open_meteo","Open-Meteo"]])}},default:"forecast"},{name:"show_season",label:"Frost this season",selector:{boolean:{}},default:!0},{name:"show_gdd",label:"Growing degree days",selector:{boolean:{}},default:!0},{name:"show_soil",label:"Soil temperature and moisture",selector:{boolean:{}},default:!0,helper:"The station's soil sensors, else the Soil Temperature integration, else Open-Meteo."},{name:"show_water",label:"Water balance (last 7 days)",selector:{boolean:{}},default:!0},{name:"open_meteo",label:"Use Open-Meteo",selector:{boolean:{}},default:!0,helper:"Forecast lows, soil and evapotranspiration for your location (free, no key)."},{name:"area_source",label:"Area data from",selector:{select:{options:o1([["auto","Automatic \u2014 CoAgMET sensor, else Open-Meteo"],["coagmet","CoAgMET sensor only (Colorado, measured)"],["open_meteo","Open-Meteo only (anywhere, modelled)"],["off","None"]])}},default:"auto"},{name:"soil_temperature_entity",label:"Soil temperature sensor",selector:p2("sensor")},{name:"soil_moisture_entity",label:"Soil moisture sensor",selector:p2("sensor")},{name:"content_width",label:"Horizontal spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100},{name:"content_height",label:"Vertical spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100}]},lightning:{tag:"wsfc-panel-lightning",label:"Lightning",icon:"mdi:flash",span:4,rows:0,hideWhen:(r,e,t)=>{let i=z5(r,t,e);return!e?.states?.[i.distance]&&!e?.states?.[i.count]?!0:!!r.hide_when_zero&&Number(e.states[i.count]?.state)===0},schema:[{name:"near_km",label:"Warn within (km)",selector:{number:{min:1,max:40,mode:"box"}},default:16,helper:"Default 16 km (10 miles)."},{name:"near_minutes",label:"\u2026for (minutes after a strike)",selector:{number:{min:5,max:120,mode:"box"}},default:30},{name:"hide_when_zero",label:"Hide the panel when there are no strikes",selector:{boolean:{}},default:!1,helper:"Hidden while the strike count is 0 (Ecowitt counts strikes per day)."},{name:"show_battery",label:"Sensor battery",selector:{boolean:{}},default:!0},{name:"show_note",label:"Note",selector:{boolean:{}},default:!0},{name:"distance_entity",label:"Distance sensor",selector:p2("sensor"),helper:"Found on its own (e.g. Ecowitt WH57)."},{name:"count_entity",label:"Strikes sensor",selector:p2("sensor")},{name:"time_entity",label:"Last strike time sensor",selector:p2("sensor")}]},pollen:{tag:"wsfc-panel-pollen",label:"Pollen",icon:"mdi:flower-pollen",span:4,rows:0,hideWhen:(r,e)=>{let t=k7(r,e);return r.hide_when_off_season===!0&&t.outOfSeason||r.hide_when_none===!0&&t.allNone},schema:[{name:"device",selector:{device:{integration:"pollenlevels"}},helper:"Pollen Levels location (default: the first one)."},{name:"view",selector:{select:{options:o1([["plants","Species (oak, juniper, ragweed \u2026)"],["types","Types (tree, grass, weed)"]])}},default:"plants"},{name:"species",selector:{text:{multiple:!0}},helper:"Species to show, in order, by Google code or name (e.g. JUNIPER, OAK, GRAMINALES). Blank shows the busiest."},{name:"max_rows",selector:{number:{min:0,max:20,mode:"box"}},default:6,helper:"Rows when no species are listed (0 = all)."},{name:"content_width",label:"Horizontal spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Width of tiles, chips and the gaps between columns."},{name:"content_height",label:"Vertical spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Row height, padding and the gaps between rows."},{name:"hide_off_season",selector:{boolean:{}},default:!0,helper:"Hide species that are out of season."},{name:"hide_when_off_season",selector:{boolean:{}},default:!1,helper:"Hide the whole panel when no species is in season (its panel button still opens it)."},{name:"hide_when_none",selector:{boolean:{}},default:!1,helper:"Hide the whole panel when every species is at None today (its panel button still opens it)."},{name:"show_tomorrow",selector:{boolean:{}},default:!0},{name:"show_season",selector:{boolean:{}},default:!0,helper:"12-month strip: how many of the shown species are in season each month."},{name:"hide_none",selector:{boolean:{}},default:!0,helper:"Hide species with nothing in the air today (level None)."},{name:"show_nothing",selector:{boolean:{}},default:!0,helper:'Show "In season, but nothing in the air today" in the header line when every species is at None.'},{name:"nothing_text",selector:{text:{}},helper:'Replace that text, e.g. "All clear".'},{name:"show_source",selector:{boolean:{}},default:!0,helper:"Show the data source (Google) in the header line."},{name:"source",selector:{text:{}},helper:"Replace the source text."},{name:"show_location",selector:{boolean:{}},default:!0,helper:"Show the town in the header line."},{name:"location",selector:{text:{}},helper:"Replace the town (default: your Home Assistant location name)."},{name:"seasons",selector:{object:{}},helper:"Season months per species, e.g. JUNIPER: [1, 2, 3, 4]. Default: Google's season text, else typical months."},{name:"entities",selector:{entity:{multiple:!0,domain:"sensor"}},helper:"Advanced: use these sensors instead of finding Pollen Levels automatically."}]},air_quality:{tag:"wsfc-panel-air-quality",label:"Air quality",icon:"mdi:air-filter",span:4,rows:0,schema:[{name:"layout",selector:{select:{options:o1([["compact","Compact \u2014 one row of tiles (tap to open the full panel)"],["scale","Scale \u2014 colour scale and rating per pollutant (like Pollen)"],["rows","Rows \u2014 bar, level and value per pollutant"],["bars","Vertical bars on the AQI scale"],["tiles","Tiles"]])}},default:"scale"},{name:"pollutants",selector:{select:{multiple:!0,options:o1([["pm2_5","PM2.5"],["pm10","PM10"],["ozone","Ozone"],["co2","CO\u2082"]])}},helper:"Default: all that are found."},{name:"extra",selector:{object:{}},helper:"More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO\u2082 have built-in thresholds."},{name:"tile_fill",label:"Stretch tiles to fill the width",when:r=>r.layout==="tiles",selector:{boolean:{}},default:!1,helper:"Off: each tile is as wide as what's in it."},{name:"content_width",label:"Horizontal spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Width of tiles, chips and the gaps between columns."},{name:"content_height",label:"Vertical spacing",selector:{number:{min:30,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Row height, padding and the gaps between rows."},{name:"show_aqi",selector:{boolean:{}},default:!0},{name:"show_scale",selector:{boolean:{}},helper:"Rows, bars and tiles: AQI colour scale under the number (default: on for tiles only)."},{name:"bar_height",selector:{number:{min:60,max:400,mode:"box",unit_of_measurement:"px"}},helper:"Vertical bars: height (default 140)."},{name:"show_source",selector:{boolean:{}},default:!0,helper:"Show the data source (e.g. AirNow, Boulder AIR)."},{name:"source",selector:{text:{}},helper:"Replace the source text (default: the sensor's source attribute or integration)."},{name:"show_location",selector:{boolean:{}},default:!0,helper:"Show the reporting area / town (AirNow's reporting area)."},{name:"location",selector:{text:{}},helper:"Replace the area or town text."},{name:"entities.aqi",selector:p2("sensor"),helper:"Default: the station's own sensor, else AirNow, else any outdoor AQI sensor."},{name:"entities.pm2_5",selector:p2("sensor")},{name:"entities.pm10",selector:p2("sensor")},{name:"entities.ozone",selector:p2("sensor")},{name:"entities.co2",selector:p2("sensor")}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:p2("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},chips:{tag:"wsfc-panel-chips",label:"Current Weather Metrics",icon:"mdi:format-list-bulleted-square",span:12,rows:0,flex:!0,flexPanels:["Current Weather Metrics"],schema:[]},clock:{tag:"wsfc-panel-clock",label:"Clock",icon:"mdi:clock-outline",span:4,rows:1,inBar:!1,schema:[{name:"show_time",selector:{boolean:{}},default:!0},{name:"show_seconds",selector:{boolean:{}},default:!1},{name:"time_format",selector:{select:{options:o1([["auto","Home Assistant's setting"],["12","12-hour"],["24","24-hour"]])}},default:"auto"},{name:"show_date",selector:{boolean:{}},default:!0},{name:"date_format",selector:{select:{options:o1([["long","Thursday, October 22"],["medium","Thu, Oct 22"],["short","10/22"],["weekday","Thursday"],["full","Thursday, October 22, 2026"]])}},default:"medium"},{name:"align",selector:{select:{options:o1([["center","Center"],["left","Left"],["right","Right"]])}},default:"center"},{name:"auto_size",selector:{boolean:{}},default:!0,helper:"Size the time and date to fill the panel."},{name:"scale",selector:{number:{min:50,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Auto size: bigger or smaller."},{name:"date_scale",label:"Date size",when:r=>r.auto_size!==!1,selector:{number:{min:10,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:30,helper:"Date size as a share of the time's size."},{name:"time_size",when:r=>r.auto_size===!1,selector:{number:{min:12,max:200,mode:"slider",unit_of_measurement:"px"}},default:48},{name:"date_size",when:r=>r.auto_size===!1,selector:{number:{min:8,max:80,mode:"slider",unit_of_measurement:"px"}},default:16},{name:"time_weight",selector:{select:{options:o1([["300","Light"],["400","Regular"],["500","Medium"],["700","Bold"]])}},default:"300"},{name:"color",selector:{text:{}},helper:"Time color. Not set: the theme's text color."},{name:"date_color",selector:{text:{}},helper:"Not set: secondary text."}]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};for(let r of Object.values(H0))r.groups&&(r.groups=r.groups.map(e=>typeof e[1]=="string"?[e[0],e[2],e[1]]:e),r.schema||(r.schema=r.groups.flatMap(([,e])=>e)));var CH=[{name:"show_title",label:"Show the title",selector:{boolean:{}},default:!0},{name:"title",when:r=>r.show_title!==!1,selector:{text:{}}},{name:"show_icon",label:"Show the title icon",when:r=>r.show_title!==!1,selector:{boolean:{}},default:!0},{name:"icon",when:r=>r.show_title!==!1&&r.show_icon!==!1,selector:{icon:{}}}],nH=new Set(["hero","stack","clock"]),Br=new Set(["chips","sky_tracker","card"]),zr=[{name:"expanded_icon_color",label:"Title icon color",selector:{text:{}},helper:"Not set: the theme's normal title icon colour."},{name:"expanded_text_color",label:"Title text color",selector:{text:{}},helper:"Not set: the theme's text colour."},{name:"collapsed_icon_color",label:"Folded icon color",selector:{text:{}},helper:"Not set: the same as the title icon colour."},{name:"collapsed_text_color",label:"Folded title color",selector:{text:{}},helper:"Not set: the same as the title text colour."}],sH=[{name:"collapsible",label:"Collapse button",selector:{boolean:{}},default:!1,helper:"Fold the panel down to its title header to save space (e.g. maps). A folded map is paused. With Remember Panel Button States, this browser remembers what you folded."},{name:"collapsed",label:"Start collapsed",when:r=>!!(r.collapsible||r.compact),selector:{boolean:{}},default:!1},{name:"collapsed_open",label:"Opens",when:r=>!!(r.collapsible||r.compact),selector:{select:{options:o1([["default","Card default (Layout & Behavior)"],["inplace","In place \u2014 the panel grows, the others move"],["overlay","Over the other panels \u2014 nothing moves"],["popup","As a pop-up"]])}},default:"default"},{name:"collapsed_view",label:"View when collapsed",when:r=>!!(r.collapsible||r.compact),selector:{select:{options:o1([["default","Card default (Layout & Behavior)"],["minimal","Minimal \u2014 the title and a line of info"],["compact","Compact \u2014 one row of tiles with all the data"]])}},default:"default"},{name:"compact_expand",label:"Tap the tiles to open the full panel",when:r=>!!(r.collapsible||r.compact)&&r.collapsed_view!=="minimal",selector:{boolean:{}},default:!0,helper:"Compact view. Off: a tap on a tile opens that sensor (the fold button still opens the panel)."},{name:"compact_icon",label:"Show the icon in the tiles row",when:r=>!!(r.collapsible||r.compact)&&r.collapsed_view!=="minimal",selector:{boolean:{}},default:!0},{name:"compact_title",label:"Show the title in the tiles row",when:r=>!!(r.collapsible||r.compact)&&r.collapsed_view!=="minimal",selector:{boolean:{}},default:!0},{name:"collapse_title_tap",label:"Tap the title to fold / unfold",when:r=>!!(r.collapsible||r.compact),selector:{select:{options:o1([["default","Card default (Appearance)"],["on","On"],["off","Off"]])}},default:"default"},{name:"show_collapse_hint",label:"Hint under the title while folded",when:r=>r.collapsed_view!=="compact"&&!!r.collapsible,selector:{select:{options:o1([["default","Card default (Appearance)"],["on","Show"],["off","Hide"]])}},default:"default"},{name:"collapse_hint",label:"Hint text",when:r=>r.collapsed_view!=="compact"&&!!r.collapsible&&r.show_collapse_hint!=="off",selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while folded",when:r=>r.collapsed_view!=="compact"&&!!r.collapsible,selector:{select:{options:o1([["default","Card default (Appearance)"],["summary","The panel's summary (e.g. strikes today)"],["entity","An entity's value"],["off","None"]])}},default:"default"},{name:"collapsed_entity",label:"Entity to show",when:r=>r.collapsed_view!=="compact"&&!!r.collapsible&&r.collapsed_info!=="off",selector:{entity:{}},helper:`Its value in the folded header (used by "An entity's value", and instead of the summary when set).`},{name:"collapsed_label",label:"Label before the value",when:r=>r.collapsed_view!=="compact"&&!!r.collapsible&&!!r.collapsed_entity&&r.collapsed_info!=="off",selector:{text:{}}},...zr.map(r=>({...r,when:e=>!!(e.collapsible||e.compact)}))],I8=[{section:"Size and Scaling",name:"display",label:"Location",selector:{select:{options:o1([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{section:"Size and Scaling",name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{section:"Size and Scaling",name:"rows",selector:{number:{min:0,max:10,step:.5,mode:"slider"}},helper:"Height in row units, in half steps (0 = fit content, 0.5 = half height)."},{section:"Size and Scaling",name:"overflow",label:"When the content doesn't fit",selector:{select:{options:o1([["default","Card default (Layout)"],["grow","Grow \u2014 the panel gets taller"],["scroll","Scroll \u2014 keep the set height, with a scroll bar"]])}},default:"default",helper:"Scroll needs a height of at least 1 row (it is raised to 1 when you pick Scroll)."},{section:"Size and Scaling",name:"compact",label:"Compact view",selector:{boolean:{}},default:!1,helper:"Show this panel as one row of small tiles with all its data; tapping it opens the full panel (see Collapse \u2192 Opens)."},{section:"Size and Scaling",name:"content_scale",label:"Scale all Panel Contents",selector:{number:{min:40,max:200,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Everything inside the panel bigger or smaller (text, icons, tiles), so it fits the space."},...sH.map(r=>({...r,section:"Collapse"})),...CH.map(r=>({...r,section:"Default Overrides"})),{section:"Default Overrides",name:"in_bar",label:"Panel button",selector:{boolean:{}},helper:"Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless hidden with the eye icon in the panel list)."},{name:"tile_background",section:"Default Overrides",label:"Panel background",selector:{select:{options:o1([["default","Default"],["translucent","See-through (uses Panel opacity)"],["solid","Solid"],["none","None"]])}},default:"default"},{name:"tile_shadow",section:"Default Overrides",label:"Disable shadow",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_border",section:"Default Overrides",label:"Disable border",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_glow",section:"Default Overrides",label:"Disable glow",invert:!0,selector:{boolean:{}},default:!0}],W8=[{section:"Size and Scaling",name:"grow",label:"Share of the stack",selector:{number:{min:0,max:6,step:.5,mode:"slider"}},helper:"How much of the stack's space this panel takes, compared with the others. Side-by-side stack: its share of the width (default 1; 2 = twice as wide as a 1). Stack one above the other: its share of the leftover height (0 = only as tall as its content; default 1 when it has a height or the stack fills its panel, else 0). Panels hidden by their buttons give their share to the others."},{section:"Size and Scaling",name:"min_width",label:"Narrowest width",selector:{number:{min:80,max:800,step:10,mode:"slider",unit_of_measurement:"px"}},helper:"Side-by-side stack: the narrowest this panel gets before the stack wraps it onto a new line (default 180 px)."},{section:"Size and Scaling",name:"rows",selector:{number:{min:0,max:10,step:.5,mode:"slider"}},helper:"Vertical: minimum height in row units (half steps allowed)."},{section:"Size and Scaling",name:"compact",label:"Compact view",selector:{boolean:{}},default:!1,helper:"Show this panel as one row of small tiles with all its data; tapping it opens the full panel."},...sH.map(r=>({...r,section:"Collapse"})),...CH.map(r=>({...r,section:"Default Overrides"})),{name:"tile_shadow",section:"Default Overrides",label:"Disable shadow",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_border",section:"Default Overrides",label:"Disable border",invert:!0,selector:{boolean:{}},default:!0},{name:"tile_glow",section:"Default Overrides",label:"Disable glow",invert:!0,selector:{boolean:{}},default:!0}],T1=r=>H0[r?.type]||null,z2=r=>Math.max(1,Math.min(12,Number(r.span??T1(r)?.span??6)));function HH(r,e){let t=T1(r)||{},i=z2(r),o=i;e==="medium"&&(o=Number(r.span_medium??t.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),e==="narrow"&&(o=Number(r.span_narrow??(i<=3?6:12)));let a=H2(r);return e!=="wide"&&(a=Number(r.rows_compact??t.rowsCompact??a)),{span:Math.max(1,Math.min(12,o)),rows:a}}var H2=r=>Math.max(0,Number(r.rows??T1(r)?.rows??0)),Z3=r=>r.in_bar??(r.display==="popup"?!0:T1(r)?.inBar??!0);var oH=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"health",show:!1},{type:"pollen",show:!1},{type:"air_quality",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],Rr=new Set(["sky_bar","sun","sun_moon"]);function aH(r,e){let t=[],i=r.filter(n=>n&&Rr.has(n.type)),o=i.find(n=>n.type==="sky_bar"),a=i.find(n=>n.type==="sun"||n.type==="sun_moon"),C=!1;for(let n of r){if(!n||!Rr.has(n.type)){t.push(n);continue}let{type:s,sky_bar:H,show_moon:V,...L}=n,d={...L,type:"sky_tracker"};if(s==="sky_bar"&&(d.show_arc=!1),s==="sun"&&(d.show_facts=n.show_facts!==!1),o&&a&&(n===o||n===a)){if(C)continue;C=!0;let u=n===o?a:o,{type:f,sky_bar:v,show_moon:x,...w}=u;Object.assign(d,w,L),d.flex=cA(u===o?u.flex:n.flex,u===o?n.flex:u.flex),delete d.show_arc,a.type==="sun"&&(d.show_facts=a.show_facts!==!1),d.flex||delete d.flex}t.push(d),s==="sun_moon"&&V!==!1&&t.push({type:"moon"})}if(e&&!t.some(n=>n?.type==="sky_tracker")){let n=t.findIndex(L=>L?.type==="hero"),H=t[n]?.flex?.wfc?.sun_position,V={type:"sky_tracker",span:12,rows:0,...H?{flex:{wfc:{sun_position:H}}}:{}};t.splice(n+1,0,V)}return t.map(n=>n?.type==="hero"?lA(n):n)}function lA(r){let{sky_bar:e,...t}=r;if(!t.flex?.wfc?.sun_position)return t;let{sun_position:o,...a}=t.flex.wfc,C={...t.flex,wfc:a};return Object.keys(a).length||delete C.wfc,Object.keys(C).length?t.flex=C:delete t.flex,t}function cA(r,e){if(!r&&!e)return;let t={...e?.wfc||{}};return r?.wfc?.sun_position&&(t.sun_position={...t.sun_position||{},...r.wfc.sun_position}),{...e||{},...r||{},wfc:t}}function U8(r){let e=Array.isArray(r.panels)&&r.panels.length?r.panels:oH,t=e.find(C=>C?.type==="hero"),i=e.some(C=>C&&Rr.has(C.type))||!!t&&("sky_bar"in t||!!t.flex?.wfc?.sun_position),o=!!t&&i&&t.sky_bar!==!1&&t.flex?.wfc?.sun_position?.show!==!1&&e!==oH;e=aH(e,o).map(C=>C?.type==="stack"?{...C,panels:aH(C.panels||[],!1)}:C),e=e.filter(C=>C&&H0[C.type]),Array.isArray(r.panels)&&r.panels.length&&!e.some(C=>C.type==="hero")&&r.hero!==!1&&(e=[{type:"hero",span:12},...e]),e=e.map(C=>C.type==="hero"&&r.hero&&typeof r.hero=="object"&&!C.flex?{...C,flex:r.hero}:C);let a=C=>C?.type==="rain"&&Array.isArray(C.rows)?(({rows:n,...s})=>({...s,show_rows:n}))(C):C;return e.map(C=>C?.type==="stack"?{...C,panels:(C.panels||[]).map(a)}:a(C))}var Nr=new Map;function w5(r,e,t,i){if(!r?.connection||!e)return()=>{};let o=`${e}|${t}`,a=Nr.get(o);return a||(a={listeners:new Set,data:null,unsub:null},Nr.set(o,a),a.unsub=r.connection.subscribeMessage(C=>{a.data=C?.forecast||[],a.listeners.forEach(n=>n(a.data))},{type:"weather/subscribe_forecast",forecast_type:t,entity_id:e},{resubscribe:!0}).catch(C=>(console.warn("weather-station-flex-card: forecast subscription failed",e,t,C),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(Nr.delete(o),Promise.resolve(a.unsub).then(C=>typeof C=="function"&&C()).catch(()=>{}))}}function VH(r,e){if(!Array.isArray(r))return null;let t=new Date;t.setHours(0,0,0,0),t.setDate(t.getDate()+e);let i=t.toDateString();return r.find(o=>new Date(o.datetime).toDateString()===i)||r[e]||null}var Ir=!1,LH=()=>Ir;function j8(r){r=!!r,r!==Ir&&(Ir=r,window.dispatchEvent(new CustomEvent("wsfc-unsaved",{detail:{unsaved:r}})))}var Wr=!1,L9=()=>Wr;function Ur(r){r=!!r,r!==Wr&&(Wr=r,window.dispatchEvent(new CustomEvent("wsfc-live",{detail:{live:r}})))}var jr={dashboard:null,preview:null},lH=()=>jr;function cH(r,e){JSON.stringify(jr[r])!==JSON.stringify(e)&&(jr[r]=e,window.dispatchEvent(new CustomEvent("wsfc-detected")))}var MA=10,dA=150,pA=Q`
  .star { animation-duration: calc(3s * var(--wsfc-anim-twinkle, 1)); }
  .cloud-track { animation-duration: calc(var(--cloud-drift-duration, 80s) * var(--wsfc-anim-clouds, 1)); }
  .raindrop, .splat { animation-duration: calc(var(--duration) * var(--wsfc-anim-rain, 1)); animation-delay: calc(var(--delay) * var(--wsfc-anim-rain, 1)); }
  .snowflake { animation-duration: calc(var(--duration) * var(--wsfc-anim-snow, 1)); animation-delay: calc(var(--delay) * var(--wsfc-anim-snow, 1)); }
  .lightning-flash { animation-duration: calc(20s * var(--wsfc-anim-lightning, 1)); }
  .cloud { filter: var(--wsfc-cloud-filter, url(#wfc-cloud-rough)); will-change: var(--wsfc-cloud-will, auto); }
  .cloud.night { filter: var(--wsfc-cloud-filter-night, url(#wfc-cloud-rough) brightness(0.5)); }
  :host { --sun-spin-duration: calc(var(--weather-forecast-card-effects-sun-spin-duration, 100s) * var(--wsfc-anim-sun, 1)); }
`;if(!d2.__wsfcSpeed){d2.finalize?.(),d2.elementStyles=[...d2.elementStyles||[],pA],d2.__wsfcSpeed=!0;let r=d2.prototype,e=n=>[...n.renderRoot?.querySelectorAll?.(".cloud-track")||[]],t=n=>n.getAnimations?.().find(s=>s.animationName==="cloud-drift"),i=n=>{let s=Number(n?.effect?.getComputedTiming?.().duration),H=Number(n?.currentTime);return s>0&&Number.isFinite(H)?{d:s,f:H%s/s}:null},o=r.willUpdate;r.willUpdate=function(n){return this.__wsfcDrift=e(this).map(s=>i(t(s))),o?.call(this,n)};let a=r.updated;r.updated=function(n){let s=a?.call(this,n),H=this.__wsfcDrift||[];return e(this).forEach((V,L)=>{let d=t(V),u=H[L],f=i(d);d&&u&&f&&Math.abs(f.d-u.d)>1&&(d.currentTime=u.f*f.d)}),s};let C=r.computeParticles;typeof C=="function"&&(r.computeParticles=function(){let n=C.call(this),s=this.__wsfcParticles,H=this._containerHeight;if(s&&s.h===H){let V=v=>v.reduce((x,w)=>{var y;return(x[y=w.type]||(x[y]=[])).push(w),x},{}),L=V(s.list),d=V(n);for(let v of Object.keys(d))L[v]&&L[v].length===d[v].length&&(d[v]=L[v]);let u=n.map(()=>null),f={};return n.forEach((v,x)=>{f[v.type]=(f[v.type]??-1)+1,u[x]=d[v.type][f[v.type]]}),this.__wsfcParticles={h:H,list:u},u}return this.__wsfcParticles={h:H,list:n},n})}var Gr=[["anim_twinkle","--wsfc-anim-twinkle","Star twinkle"],["anim_clouds","--wsfc-anim-clouds","Cloud drift"],["anim_rain","--wsfc-anim-rain","Rain"],["anim_snow","--wsfc-anim-snow","Snow"],["anim_sun","--wsfc-anim-sun","Sun rays"],["anim_lightning","--wsfc-anim-lightning","Lightning"]];function MH(r){let e=[];for(let[t,i]of Gr){let o=Number(r?.[t]);o>0&&(o=Math.max(MA,Math.min(dA,o))),o>0&&o!==100&&e.push(`${i}:${(100/o).toFixed(3)}`)}return e}var qr="wsfc-flex-core",dH="wsfc-flex-core-editor";customElements.get(qr)||customElements.define(qr,R1);{let r=_5.prototype,e=r._wfcWeatherSourcesPanel,t=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":e.call(this)},r.render=function(){return this.wsfcMode!=="sources"?t.call(this):!this.hass||!this._config?"":p`${this._wfcEditorStyle()}${e.call(this)}`},r.updated=function(o){i?.call(this,o);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(C=>{let n=C.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();C.hidden=!!n&&!a.includes(n)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let C=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");C&&(C.open=!0,this.__wsfcOpened=!0)}}}var lE=R1.__wfcBuild,pH=r=>R1.__wfcResolve(r);function uA(r){return{...r,wfc:pH(r)}}function uH(r,e){let{entity:t,metric_sources:i,type:o,...a}={...r,wfc:pH(r)},{entity:C,metric_sources:n,...s}=uA(e);return Er(a,s)||{}}var G8=class{constructor(){this.el=null,this._json="",this.error=null}update(e,t){let i=JSON.stringify(e);if(this.el||(this.el=document.createElement(qr)),i!==this._json){this._json=i;try{this.el.setConfig(e),this.error=null}catch(o){this.error=o?.message||String(o),console.error("weather-station-flex-card: invalid Weather Flex config",o,e)}}return t&&this.el.hass!==t&&(this.el.hass=t),this.el}};var Q8={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,forecast:{show_sun_times:!0},wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:0,clock_date_font_size:0,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}}};Q8.chips={wfc:{order:["details"],current:{show:!1},details:{...Q8.hero.wfc.details,items:Q8.hero.wfc.details.items.map(r=>({...r}))},hourly:{show:!1},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}};var mA={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96}}},hA={wfc:{current:{clock_placement:"below-right"}}};function fA(r,e,t=1){let i=Math.max(30,Math.min(120,r*.07));e>0&&(i=Math.min(i,Math.max(30,e*.36))),i*=t;let o=a=>Math.round(a);return{header_temp_size:o(i),header_state_size:o(Math.max(12,i*.33)),header_icon_size:o(i*1.3),clock:o(i*.78),date:o(Math.max(10,i*.25)),secondary:o(Math.max(11,i*.2)),chip_scale:Math.round(Math.max(.6,Math.min(2.5,i/64*1.05))*100)/100}}var q8;function AA(r){let e=r?.shadowRoot;!e||e.__wsfcFill||(q8||(q8=new CSSStyleSheet,q8.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),e.adoptedStyleSheets=[...e.adoptedStyleSheets,q8],e.__wsfcFill=!0)}function M9(r,e){return{...Q8[r]||{},entity:e?.entity,metric_sources:e?.metric_sources}}var mH=Q`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,Y2=class extends q{constructor(){super();Z(this,"type","");Z(this,"defaultTitle","Weather");Z(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new G8}_coreConfig(){return s2(M9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return h;let t=this._slot.update(this._coreConfig(),this.hass),i=this.config?.show_title??(this.titleOnlyWhenSet?!!this.config?.title:!0);return p`
      ${i?s1(this.config,this.defaultIcon,this.defaultTitle):h}
      <div class="core">${t}</div>
      ${this._slot.error?p`<div class="err">${this._slot.error}</div>`:h}
      ${this.extra()}
    `}extra(){return h}};Z(Y2,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),Z(Y2,"styles",[M1,mH]);var l9=class extends Y2{constructor(){super(...arguments);Z(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let i=t.contentRect.width,o=i>=900?"large":i<560?"narrow":"normal";o!==this._size&&(this._size=o);let a=this.parentElement?.classList.contains("auto")?0:t.contentRect.height,C=`${Math.round(i/8)}:${Math.round(a/8)}`;C!==this._dimKey&&(this._dimKey=C,this._dims={w:i,h:a},this.requestUpdate())}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}get _fitting(){return!!(this.fit&&this.config?.auto_scale)}get _auto(){let{w:t=0,h:i=0}=this._dims||{},o=this.config||{},a=this._fitting&&this._k||1,C=fA(t||700,this._fitting?0:i,Math.max(.3,Math.min(3,Number(o.scale??100)/100))*a),n=H=>Math.max(.3,Math.min(3,Number(o[H]??100)/100)),s=H=>Math.round(H);return{header_temp_size:s(C.header_temp_size*n("temp_scale")),header_state_size:s(C.header_state_size*n("condition_scale")),header_icon_size:s(C.header_icon_size*n("icon_scale")),clock:s(C.clock*n("clock_scale")),date:s(C.date*n("date_scale")),secondary:s(C.secondary*n("secondary_scale")),chip_scale:Math.round(C.chip_scale*n("chips_scale")*100)/100}}_coreConfig(){let t=M9("hero",this.station);if(this._size==="large"&&(t=s2(t,mA)),this._size==="narrow"&&(t=s2(t,hA)),t=s2(t,this.config?.flex||{}),this.config?.auto_scale){let i=this._auto;t=s2(t,{wfc:{current:{header_temp_size:i.header_temp_size,header_state_size:i.header_state_size,header_icon_size:i.header_icon_size,header_secondary_size:i.secondary,clock_font_size:0,clock_date_font_size:0},details:{chip_scale:i.chip_scale,chip_text_size:"",chip_icon_size:"",global_icon_size:Math.round(22*i.chip_scale),global_text_size:Math.round(14*i.chip_scale)}}})}return this.config?.main_temperature==="feels_like"&&(t=s2(t,{wfc:{current:{main_temperature:"feels_like"}}})),this.cardBg?t=s2(t,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}}):this.lite&&(t=s2(t,{show_condition_effects:!1})),t}updated(t){if(AA(this._slot.el),this.toggleAttribute("fit",this._fitting),!this._fitting){this._k=void 0;return}let i=`${this._dimKey}|${JSON.stringify(this.config)}`;i!==this._fitKey&&(this._fitKey=i,this._fitPass=0),!(this._fitPass>=8)&&(cancelAnimationFrame(this._fitRaf),this._fitRaf=requestAnimationFrame(()=>setTimeout(()=>this._refit(),60)))}_contentHeight(){let t=this._slot.el?.shadowRoot?.querySelector("ha-card");if(!t)return 0;let i=t.getBoundingClientRect().top,o=[...t.children].filter(C=>{let n=getComputedStyle(C);return n.position!=="absolute"&&n.position!=="fixed"&&n.display!=="none"});return o.length?Math.max(...o.map(C=>C.getBoundingClientRect().bottom))-i+(parseFloat(getComputedStyle(t).paddingBottom)||0):0}_refit(){if(!this._fitting||!this.isConnected)return;this._fitPass=(this._fitPass||0)+1;let t=this.clientHeight,i=this._contentHeight();if(!t||!i)return;let o=this._slot.el?.shadowRoot?.querySelector("ha-card"),a=o&&o.scrollWidth>o.clientWidth+2?o.clientWidth/o.scrollWidth:1,C=Math.min(t/i,a<1?a:1/0);if(Math.abs(C-1)<.03)return;let n=Math.max(.15,Math.min(2.5,(this._k||1)*Math.pow(C,.9)));Math.abs(n-(this._k||1))>.01&&(this._k=n)}render(){if(!this.hass||!this.station?.entity)return h;let t=this._auto,i=$7(this.hass,this.config||{}),o=(this.config?.fact_position||"bottom")==="top",a=this._fitting&&(this._k||1)<1?`;--wsfc-hero-pad:${Math.round(Math.max(6,16*(this._k||1)))}px`:"";return p`<div class="core" style="--wfc-clock-auto:${t.clock}px;--wfc-clock-date-auto:${t.date}px${a}">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${i===h?h:p`<div class="hero-facts ${o?"top":""}">${i}</div>`}
      ${this._slot.error?p`<div class="err">${this._slot.error}</div>`:h}`}};Z(l9,"properties",{...Y2.properties,cardBg:{attribute:!1},lite:{attribute:!1},fit:{attribute:!1},_k:{state:!0}}),Z(l9,"styles",[M1,mH,s9,Q`
      :host { position: relative; }
      /* Sun & moon facts across the bottom of the hero, over its background. */
      .hero-facts { position: absolute; left: 16px; right: 16px; bottom: 12px; z-index: 1; pointer-events: none; }
      .hero-facts .facts { margin: 0; }
      .hero-facts.top { bottom: auto; top: 12px; }
      .core { margin: 0; display: flex; }
      /* Fit to the panel: the hero takes the panel's height, its content scales to it. */
      :host([fit]) .core { flex: 1 1 0; min-height: 0; overflow: hidden; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: var(--wsfc-hero-pad, 16px); }
    `]);var Qr=class extends Y2{constructor(){super(...arguments);Z(this,"type","forecast");Z(this,"defaultTitle","Forecast");Z(this,"defaultIcon","mdi:calendar-week")}},Yr=class extends Y2{constructor(){super(...arguments);Z(this,"type","hourly");Z(this,"defaultTitle","Hourly forecast");Z(this,"defaultIcon","mdi:clock-outline")}},Kr=class extends Y2{constructor(){super(...arguments);Z(this,"type","daily");Z(this,"defaultTitle","Daily forecast");Z(this,"defaultIcon","mdi:calendar-week")}};function Jr(r,e,t=0){let i=s2(M9("sky_tracker",e),r?.flex||{}),o=i.wfc,a=o.sun_arc||(o.sun_arc={}),C=o.sun_position||(o.sun_position={}),n=r?.show_arc!==!1,s=r?.show_sky!==!1,H=r?.timeframe||"hours",V=Number(r?.hours??24),L=r?.anchor||"now_center";return a.timeframe_mode=H,C.timeframe_mode=H==="sunrise_sunset"?"match_arc":H,a.timeframe_hours=C.timeframe_hours=V,a.timeframe_anchor=C.timeframe_anchor=L,a.night_moon=r?.moon!==!1,t&&(a.timeframe_offset_hours=C.timeframe_offset_hours=t),r?.moon_phase===!1?a.moon_icon==="phase"&&(a.moon_icon="mdi:weather-night"):a.moon_icon="phase",n?(o.order=["sun_arc"],a.show=!0,a.baseline_mode=s?"sky":"line",C.show=!1):(o.order=["sun_position"],a.show=!1,C.show=s),i}var Xr=class extends Y2{constructor(){super(...arguments);Z(this,"type","chips");Z(this,"defaultTitle","Current Weather Metrics");Z(this,"defaultIcon","mdi:format-list-bulleted-square");Z(this,"titleOnlyWhenSet",!0)}},c9=class extends Y2{constructor(){super(...arguments);Z(this,"type","sky_tracker");Z(this,"defaultTitle","Sky Tracker");Z(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return Jr(this.config,this.station,this._offset||0)}_step(t){let i=this.config||{},o=Number(i.step_hours)||12,a=Number(i.max_ahead??48),C=t===0?0:Math.max(0,Math.min(a,(this._offset||0)+t*o));this._offset=C,clearTimeout(this._back);let n=Number(i.return_after??60);C&&n>0&&(this._back=setTimeout(()=>this._offset=0,n*1e3))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._back)}_steps(){let t=this.config||{},i=this._offset||0,o=Number(t.step_hours)||12,a=Number(t.max_ahead??48),C="";if(i){let n=this.hass?.locale?.language,s=Number(t.hours)||24,H=t.anchor||"now_center",V=Date.now()+i*36e5-(H==="now_center"&&(t.timeframe||"hours")==="hours"?s/2*36e5:0),L=new Date(V),d=new Date,u=Math.round((new Date(L).setHours(0,0,0,0)-new Date(d).setHours(0,0,0,0))/864e5),f=u===0?"Today":u===1?"Tomorrow":new Intl.DateTimeFormat(n,{weekday:"long"}).format(L);C=(t.timeframe||"hours")==="hours"?`${f} ${new Intl.DateTimeFormat(n,{hour:"numeric"}).format(L)} onward`:f}return p`<span class="steps">
      ${C?p`<span class="when">${C}</span>`:h}
      <button type="button" ?disabled=${i<=0} @click=${()=>this._step(-1)} aria-label="Earlier" title="Earlier"><ha-icon icon="mdi:chevron-left"></ha-icon></button>
      <button type="button" class="now" ?disabled=${i===0} @click=${()=>this._step(0)} title="Back to now">Now</button>
      <button type="button" ?disabled=${i+o>a} @click=${()=>this._step(1)} aria-label="Later" title="Later"><ha-icon icon="mdi:chevron-right"></ha-icon></button>
    </span>`}render(){if(!this.hass||!this.station?.entity)return h;let t=this.config||{};if(t.show_arc===!1&&t.show_sky===!1)return p`${s1(t,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`;let i=t.show_title??!!t.title,o=t.fact_position||"below",a=$7(this.hass,t),C=o==="header"&&a!==h?p`<span class="headfacts">${a}</span>${t.show_steps?this._steps():h}`:t.show_steps?this._steps():h,n=i||t.show_steps||o==="header"&&a!==h;return p`${n?s1(i?t:{...t,show_title:!1},this.defaultIcon,this.defaultTitle,C):h}
      ${o==="above"?a:h}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?p`<div class="err">${this._slot.error}</div>`:h}
      ${o==="below"?a:h}`}};Z(c9,"styles",[...Y2.styles,s9,Q`
    .steps { display: inline-flex; align-items: center; gap: 4px; flex: 0 0 auto; }
    .headfacts { flex: 1; min-width: 0; margin-right: 8px; }
    .head:has(.headfacts) .steps { margin-left: auto; }
    .headfacts .facts { margin: 0; }
    .steps .when { font-size: 12px; color: var(--secondary-text-color); margin-right: 6px; white-space: nowrap; }
    .steps button { display: inline-grid; place-items: center; min-width: 28px; height: 28px; padding: 0 8px; border-radius: 999px; cursor: pointer; font: inherit; font-size: 12px;
      border: 1px solid var(--divider-color, rgba(127,127,127,.35)); background: transparent; color: var(--primary-text-color); }
    .steps button ha-icon { --mdc-icon-size: 18px; }
    .steps button:disabled { opacity: 0.35; cursor: default; }
    .steps button:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
  `]),Z(c9,"properties",{...Y2.properties,_offset:{state:!0}});customElements.get("wsfc-panel-chips")||customElements.define("wsfc-panel-chips",Xr);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",l9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",Qr);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",Yr);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",Kr);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",c9);M2.register(a0,Q2,A5,R0,o0,v5);var Y8=[xr,gr],hH=[xr,gr,cs];function G0(r,e){let t=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(t);if(i)return G0("#"+i[1].split("").map(o=>o+o).join(""),e);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(t),i){let o=parseInt(i[1],16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${e})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(t),i){let[o,a,C]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${o},${a},${C},${e})`}return t}function vA(r,e){let t=r>48,i=new Intl.DateTimeFormat(e,t?{month:"short",day:"numeric"}:{hour:"numeric"});return o=>i.format(new Date(o))}function xA(r,e){let t=new Intl.DateTimeFormat(e,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?t.format(new Date(i[0].parsed.x)):""}function K8(r,e,t){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",o="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:xA(e,t)}}},scales:{x:{type:"linear",grid:{color:o},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:vA(e,t)}}},_text:i,_grid:o}}var fH=new Map;async function AH(r,e){let t=fH.get(r);if(t&&Date.now()-t.at<3e5)return t.data;let i=await e();return fH.set(r,{at:Date.now(),data:i}),i}var gA=r=>{let e=Number(r);return Number.isFinite(e)?e:null};function T7(r,e,t){return vH(r,e,Date.now()-t*36e5,`h${t}`)}function X8(r,e){let t=new Date;return t.setHours(0,0,0,0),vH(r,e,t.getTime(),`d${t.toDateString()}`)}function vH(r,e,t,i){let o=[...new Set(e.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,C=new Date(t);return AH(`h|${i}|${o.join(",")}`,async()=>{let n=await r.callWS({type:"history/history_during_period",start_time:C.toISOString(),end_time:a.toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),s={};for(let H of o)s[H]=(n?.[H]||[]).map(V=>({t:Math.round((V.lu??V.lc??0)*1e3),v:gA(V.s)}));return s})}function q0(r,e,t,i){let o=[...new Set(e.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,C=new Date(a.getTime()-t*864e5);return AH(`s|${t}|${i}|${o.join(",")}`,async()=>{let n=await r.callWS({type:"recorder/statistics_during_period",start_time:C.toISOString(),end_time:a.toISOString(),statistic_ids:o,period:i,types:["mean","min","max","change"]}),s={};for(let H of o)s[H]=(n?.[H]||[]).map(V=>({t:typeof V.start=="number"?V.start:Date.parse(V.start),mean:V.mean??null,min:V.min??null,max:V.max??null,change:V.change??null}));return s})}function k3(r,e=300){if(r.length<=e)return r;let t=Math.ceil(r.length/e),i=[];for(let o=0;o<r.length;o+=t){let a=r.slice(o,o+t),C=a.map(n=>n.v).filter(n=>n!=null);i.push({t:a[Math.floor(a.length/2)].t,v:C.length?C.reduce((n,s)=>n+s,0)/C.length:null})}return i}function J8(r,e){let t=new Map,i=null;for(let o of r){if(o.v==null){i=null;continue}if(i!=null){let a=o.v>=i?o.v-i:o.v,C=Math.floor(o.t/e)*e;t.set(C,(t.get(C)||0)+a)}i=o.v}return[...t].map(([o,a])=>({t:o+e/2,v:Math.round(a*1e3)/1e3}))}function ee(r,e){let t=new Map;for(let i of r){if(i.v==null)continue;let o=Math.floor(i.t/e)*e,a=t.get(o)||[0,0];a[0]+=i.v,a[1]++,t.set(o,a)}return[...t].map(([i,[o,a]])=>({t:i+e/2,v:o/a}))}var xH={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},gH=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],O3=class extends q{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((t,i)=>{let o=S1[t.metric]||{},a=l1(t.metric,this.station,this.hass,t.entity||this.config?.entities?.[t.metric]),C=a&&this.hass.states[a];return{...t,entity:a,label:t.label||o.label||C?.attributes?.friendly_name||a||"\u2014",color:this.config?.colors?.[t.metric]||t.color||o.color||gH[i%gH.length],axis:t.axis==="right"?"right":"left",style:t.style||(o.chart==="bar"?"bar":"line"),cumulative:t.cumulative??o.cumulative??!1,unit:C?.attributes?.unit_of_measurement||""}})}_ranges(){let e=this.config?.ranges;return(Array.isArray(e)&&e.length?e:["24h","7d","30d"]).filter(t=>xH[t])}render(){if(!this.hass)return h;let e=this._ranges(),t=this._range||this.config?.range||e[0],i=this._series(),o=e.length>1?K3(e.map(a=>({value:a,label:a})),t,a=>this._range=a,"History range"):h;return p`
      ${s1(this.config,this.defaultIcon,this.defaultTitle,o)}
      ${this.config?.show_readings===!1?h:p`<div class="readings">
            ${i.map(a=>{let C=d1(this.hass,a.entity);return X3(this,{label:a.label,value:C?.value,unit:C?.unit,digits:S7(a.metric,C?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?p`<div class="note">${this._error}</div>`:h}
    `}updated(){let e=this._range||this.config?.range||this._ranges()[0],t=this._series(),i=JSON.stringify([e,t.map(o=>[o.entity,o.style,o.axis,o.color,o.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(e,t).catch(o=>this._error=`History unavailable: ${o?.message||o}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(e,t){let i=xH[e]||24,o=t.map(C=>C.entity).filter(Boolean),a=new Map;if(i<=48){let C=await T7(this.hass,o,i);for(let n of t){let s=C[n.entity]||[],H=i<=12?15*6e4:36e5,V=n.style==="bar"?n.cumulative?J8(s,H):ee(s,H):k3(s);a.set(n,{line:V.map(L=>({x:L.t,y:L.v}))})}}else{let C=i>240?"day":"hour",n=await q0(this.hass,o,i/24,C);for(let s of t){let H=n[s.entity]||[],V=s.style==="bar"&&s.cumulative?"change":"mean";a.set(s,{line:H.map(L=>({x:L.t,y:L[V]})),min:H.map(L=>({x:L.t,y:L.min})),max:H.map(L=>({x:L.t,y:L.max}))})}}this._error=o.length?void 0:"No sensors found for this graph.",this._draw(i,t,a)}_draw(e,t,i){let o=this.renderRoot.querySelector("canvas");if(!o)return;let a=K8(this,e,this.hass?.locale?.language),C=t.find(V=>V.axis==="left"),n=t.find(V=>V.axis==="right"),s=(V,L)=>{let d=V?.unit==="%",u={position:L,grid:L==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:y=>`${+y.toFixed(2)}${V?.unit&&V.unit.length<=3?V.unit:""}`}};d&&Object.assign(u,{min:0,max:100}),t.filter(y=>y.axis===L).every(y=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test(y.metric||""))&&t.some(y=>y.axis===L)&&(u.min=u.min??0),t.some(y=>y.axis===(L==="left"?"left":"right")&&y.style==="bar")&&(u.beginAtZero=!0);let v=this.config||{},x=v[`${L}_min`],w=v[`${L}_max`];return x!=null&&x!==""&&(u.min=Number(x)),w!=null&&w!==""&&(u.max=Number(w)),u};(C||!n)&&(a.scales.y=s(C,"left")),n&&(a.scales.y2=s(n,"right"));let H=[];t.forEach((V,L)=>{let d=i.get(V);if(!d)return;let u=V.axis==="right"?"y2":"y",f={label:V.label,data:d.line,borderColor:V.color,yAxisID:u,order:L+1};V.style==="bar"?Object.assign(f,{type:"bar",backgroundColor:G0(V.color,.6),borderWidth:0,borderRadius:2,order:50+L,barPercentage:.9,categoryPercentage:1}):V.style==="area"?Object.assign(f,{backgroundColor:G0(V.color,.13),fill:"origin",borderColor:G0(V.color,.75),borderWidth:1}):V.style==="dashed"&&Object.assign(f,{borderDash:[5,4],borderWidth:1.5}),H.push(f),(V.band??(L===0&&V.style==="line"))&&d.min&&d.max&&V.style!=="bar"&&H.push({label:`${V.label} max`,_band:!0,data:d.max,borderWidth:0,pointRadius:0,yAxisID:u,order:90,fill:"+1",backgroundColor:G0(V.color,.15)},{label:`${V.label} min`,_band:!0,data:d.min,borderWidth:0,pointRadius:0,yAxisID:u,order:91})}),a.plugins.tooltip.filter=V=>!V.dataset._band,this._chart&&this._chart.destroy(),this._chart=new M2(o,{type:"line",data:{datasets:H},options:a,plugins:Y8})}};Z(O3,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),Z(O3,"styles",M1);var d9={temp_humidity:[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}],uv_solar:[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}],graph:[{metric:"temperature"}]},ei=class extends O3{get defaultSeries(){return d9.temp_humidity}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},ti=class extends O3{get defaultSeries(){return d9.uv_solar}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",O3);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",ei);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",ti);var _H={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},wH=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"];function _A(r){let e=0,t=i=>{for(let o of i.querySelectorAll("*"))if(o.tagName==="path"&&++e>8||o.shadowRoot&&t(o.shadowRoot))return!0;return!1};return t(r.shadowRoot||r)}var p9=class extends q{_ids(){let e=this.config,t=this.station,i=this.hass;return{speed:O8(e,t,i,"wind_speed"),gust:O8(e,t,i,"wind_gust_speed"),dir:O8(e,t,i,"wind_bearing")}}shouldUpdate(e){if(Date.now()-(this._loadedAt||0)>5*6e4)return!0;let t=this._ids();return!j2(e,this.hass,[t.speed,t.gust,t.dir])}render(){if(!this.hass)return p``;let e=this.config||{},t=this._view||e.view||"compass",i=this.station,o=this.hass,a=h1(i,o,"wind_speed"),C=h1(i,o,"wind_gust_speed"),n=h1(i,o,"wind_bearing"),s=a?.unit||C?.unit||"",H=t==="rose"&&Pr(e)==="windrose",V={value:"rose",label:H||Pr(e)==="windrose"?"Rose":"Rose 24h"},L=e.show_view_buttons===!1?"":K3([{value:"compass",label:"Compass"},V],t,$=>this._view=$,"Wind view"),d=e.readings_position||"auto";d==="auto"&&(d=H?"hidden":"side");let u=p`<div class="readings">
      ${X3(this,{label:"Speed",value:a?.value,unit:s,digits:1,color:"var(--wsfc-wind)",entity:a?.entity})}
      ${X3(this,{label:"Gust",value:C?.value,unit:C?.unit||s,digits:1,color:"var(--wsfc-gust)",entity:C?.entity})}
      ${X3(this,{label:`From ${B5(n?.value)}`,value:n?.value,unit:"\xB0",entity:n?.entity})}
    </div>`,f=t==="rose"&&!H&&e.show_legend!==!1?this._roseLegend(s):"",v=e.chart_position==="above",x=!(e.show_chart===!1||H&&e.windrose_chart===!1),w=x&&e.chart_mode==="popover",y=!x||w?"":p`<div class="body ${v?"above":""}"><canvas aria-label="Wind speed and gust history"></canvas></div>`,b=w?p`<button class="chart-btn ${this._chartOpen?"on":""}" type="button" @click=${$=>{$.stopPropagation(),this._toggleChart()}}
          aria-expanded=${String(!!this._chartOpen)} aria-label=${this._chartOpen?"Close the wind chart":"Open the wind chart"} title="Wind chart (24 h)">
          <ha-icon icon=${this._chartOpen?"mdi:close":"mdi:chart-line"}></ha-icon></button>`:"",E=w&&this._chartOpen?p`<div class="pop-scrim" @click=${()=>this._toggleChart(!1)}></div>
          <div class="chart-pop" role="dialog" style=${e.chart_popover_height?`--wsfc-wind-pop-h:${Number(e.chart_popover_height)}px`:""} aria-label="Wind speed and gust, last 24 hours" @click=${$=>$.stopPropagation()}>
            <div class="pop-h"><span>Wind · last 24 h</span></div>
            <div class="pop-body"><canvas aria-label="Wind speed and gust history"></canvas></div>
          </div>`:"",F;if(H){let $=this._ids();if($.dir&&$.speed){this._ensureRose(Js(e,$,s)),this._wrEl&&(this._wrEl.hass=this.hass),this._wrNext&&(this._wrNext.hass=this.hass);let D=Math.max(30,Math.min(150,Number(e.wr_scale??100))),k=this.fit&&this._fitPx?`width:min(${D}%, ${this._fitPx}px);margin:0 auto`:D!==100?`width:${D}%;margin:0 auto`:"";F=this._wrErr?p`<div class="note">${this._wrErr}</div>`:p`<div class="wr fitmain" style=${k}>${this._wrEl||""}${this._wrNext?p`<div class="wr-stage" aria-hidden="true">${this._wrNext}</div>`:""}</div>`}}if(!F){let $=Math.max(50,Math.min(250,Number(e.dial_scale??100)))/100,D=`min(${Math.round(180*$)}px, ${Math.round(42*$)}%${this.fit&&this._fitPx?`, ${this._fitPx}px`:""})`,k=p`<div class="dial fitmain" style=${$!==1||this.fit&&this._fitPx?`width:${D};`:""}>${t==="rose"?this._roseSvg(s):this._compassSvg(a?.value,s,n?.value)}</div>`;F=d==="side"?p`<div class="top">${k}<div class="side">${u}${f}</div></div>`:p`<div class="top center">${k}</div>${f?p`<div class="side">${f}</div>`:""}`}return p`
      ${s1(e,"mdi:weather-windy","Wind",p`${L}${b}`)}
      ${v?y:""}
      ${d==="above"?u:""}
      ${F}
      ${d==="below"||d==="side"&&H?u:""}
      ${v?"":y}
      ${this._error?p`<div class="note">${this._error}</div>`:""}
      ${E}
    `}_toggleChart(e=!this._chartOpen){this._chartOpen=e,e||(this._chart?.destroy(),this._chart=null),e&&!this._escKey?(this._escKey=t=>t.key==="Escape"&&(t.stopPropagation(),this._toggleChart(!1)),window.addEventListener("keydown",this._escKey,!0)):!e&&this._escKey&&(window.removeEventListener("keydown",this._escKey,!0),this._escKey=null)}connectedCallback(){super.connectedCallback(),customElements.get(a9)||customElements.whenDefined(a9).then(()=>this.requestUpdate())}async _ensureRose(e){let t=JSON.stringify(e);if(t!==this._wrJson){this._wrJson=t;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._wrJson!==t)return;let o=i.createCardElement(e);o.hass=this.hass,this._wrErr=void 0,this._wrEl?(this._wrNext=o,this._wrSwap(o)):this._wrEl=o,this.requestUpdate()}catch(i){this._wrErr=`Wind Rose Card failed to load: ${i?.message||i}`,this.requestUpdate()}}}_wrSwap(e,t=Date.now()){if(clearTimeout(this._wrTimer),this._wrNext===e){if(Date.now()-t>15e3||_A(e)){this._wrEl=e,this._wrNext=void 0,this.requestUpdate();return}this._wrTimer=setTimeout(()=>this._wrSwap(e,t),250)}}_compassSvg(e,t,i){let o=[];for(let n=0;n<72;n++){let s=n*5*Math.PI/180,H=n%18===0,V=n%6===0,L=H?78:V?82:85;o.push(c1`<line class="tick" x1=${100+Math.sin(s)*L} y1=${100-Math.cos(s)*L} x2=${100+Math.sin(s)*88} y2=${100-Math.cos(s)*88} stroke-width=${H?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([n,s])=>c1`<text class="lbl ${n==="N"?"n":""}" x=${100+Math.sin(s*Math.PI/180)*66} y=${100-Math.cos(s*Math.PI/180)*66}>${n}</text>`),C=Number.isFinite(i)?i:null;return c1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${B5(C)} at ${J(e,1)} ${t}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${o}${a}
      ${C==null?"":c1`<g class="ptr" style=${`transform: rotate(${C}deg); transform-origin: 100px 100px;${this.config?.compass_arrow_color?`fill:${this.config.compass_arrow_color};`:""}`}>
        <g style=${`transform: scale(${Math.max(.5,Math.min(4,Number(this.config?.compass_arrow_size??100)/100))}); transform-origin: 100px 10px`}>
          <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
        </g>
      </g>`}
      <text class="spd" x="100" y="104">${J(e,1)}</text>
      <text class="unit" x="100" y="124">${t}</text>
    </svg>`}_bins(e){return this.config?.rose_bins||_H[e]||_H.mph}_roseLegend(e){let t=this._bins(e),i=t.map((o,a)=>a<t.length-1?`${o}\u2013${t[a+1]}`:`${o}+`);return p`<div class="legend">${i.map((o,a)=>p`<span><i style="background:${wH[a+1]}"></i>${o}</span>`)}<span>${e}</span></div>`}_roseSvg(e){let t=this._rose;if(!t)return c1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...t.sectors.map(s=>s.reduce((H,V)=>H+V,0)),1e-4),o=84,a=[];t.sectors.forEach((s,H)=>{let V=0;s.forEach((L,d)=>{if(!L)return;let u=V+L;a.push(c1`<path d=${wA(100,100,V/i*o,u/i*o,H*22.5-10,H*22.5+10)} fill=${wH[d]} opacity="0.9"></path>`),V=u})});let C=[.25,.5,.75,1].map(s=>c1`<circle class="ring" cx="100" cy="100" r=${o*s} stroke-dasharray="2 3"></circle>`),n=[["N",0],["E",90],["S",180],["W",270]].map(([s,H])=>c1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(H*Math.PI/180)*95} y=${100-Math.cos(H*Math.PI/180)*95}>${s}</text>`);return c1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${C}${a}${n}
      <text class="unit" x="100" y="196">calm ${Math.round(t.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(e){e.has("fit")&&this.toggleAttribute("fit",!!this.fit),this.fit?this._watchFit():this._fitRo&&(this._fitRo.disconnect(),this._fitRo=null,this._fitPx=null);let t=this._ids(),i=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t).catch(a=>this._error=`History unavailable: ${a?.message||a}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw);let o=this.renderRoot.querySelector("canvas");o&&this._lastDraw&&(!this._chart||this._chart.canvas!==o)&&this._drawChart(this._lastDraw)}_watchFit(){this._fitRo||(this._fitRo=new ResizeObserver(()=>this._refit()),this._fitRo.observe(this));let e=this.renderRoot.querySelector(".fitmain");e&&e!==this._fitObserved&&(this._fitObserved&&this._fitRo.unobserve(this._fitObserved),this._fitRo.observe(e),this._fitObserved=e),requestAnimationFrame(()=>this._refit())}_refit(){let e=this.renderRoot.querySelector(".fitmain"),t=[...this.renderRoot.children].filter(u=>u.getBoundingClientRect().height>0&&getComputedStyle(u).position!=="absolute");if(!e||!t.length)return;let i=this.clientHeight,o=e.getBoundingClientRect().height,a=e.getBoundingClientRect().width;if(!i||!o||!a)return;let C=t[0].getBoundingClientRect().top,H=Math.max(...t.map(u=>u.getBoundingClientRect().bottom))-C-i;if(Math.abs(H)<3)return;let V=Math.max(.5,o/a),L=a-H/V,d=e.parentElement?.clientWidth||this.clientWidth;L=Math.max(80,Math.min(d,L)),!(H<0&&this._fitPx==null)&&(L>=d-1&&(L=null),L!=null&&(L=Math.round(L)),!(L===this._fitPx||L!=null&&this._fitPx!=null&&Math.abs(L-this._fitPx)<2)&&(this._fitPx=L))}disconnectedCallback(){super.disconnectedCallback(),this._fitRo?.disconnect(),this._fitRo=null,this._fitObserved=null,this._chart?.destroy(),this._chart=null,this._loadedKey="",this._escKey&&(window.removeEventListener("keydown",this._escKey,!0),this._escKey=null),this._chartOpen=!1}async _load(e){let t=await T7(this.hass,[e.speed,e.gust,e.dir],24),i=h1(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=bA(t[e.dir]||[],t[e.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:k3(t[e.speed]||[]).map(o=>({x:o.t,y:o.v})),gust:k3(t[e.gust]||[]).map(o=>({x:o.t,y:o.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(e){let t=this.renderRoot.querySelector("canvas");if(!t)return;this._pendingDraw=null,this._lastDraw=e;let i=getComputedStyle(this),o=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",C=K8(this,24,this.hass?.locale?.language);this.config?.chart_legend&&(C.plugins.legend={display:!0,position:"top",align:"end",labels:{color:C._text,boxWidth:10,boxHeight:10,font:{size:11}}}),C.scales.y={min:0,grid:{color:C._grid},ticks:{color:C._text,callback:s=>`${s} ${e.unit}`,maxTicksLimit:4}};let n=[{label:"Gust",data:e.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:e.speed,borderColor:o,backgroundColor:G0(o,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new M2(t,{type:"line",data:{datasets:n},options:C,plugins:this.config?.chart_legend?hH:Y8})}};Z(p9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},fit:{attribute:!1},_fitPx:{state:!0},_view:{state:!0},_rose:{state:!0},_error:{state:!0},_chartOpen:{state:!0}}),Z(p9,"styles",[M1,Q`
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
      .wr { min-height: 0; position: relative; }
      :host { position: relative; }
      .chart-btn { display: inline-grid; place-items: center; width: 32px; height: 32px; padding: 0; margin-left: 6px; border: 0; border-radius: 50%; cursor: pointer;
        background: rgba(127, 127, 127, 0.15); color: var(--primary-text-color); flex: 0 0 auto; }
      .chart-btn.on { background: var(--primary-color); color: var(--text-primary-color, #fff); }
      .chart-btn ha-icon { --mdc-icon-size: 18px; }
      .chart-btn:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      /* The chart pop-over: over the panel, under its header. */
      .pop-scrim { position: absolute; inset: 0; z-index: 4; }
      .chart-pop { position: absolute; left: 0; right: 0; top: 44px; z-index: 5; display: flex; flex-direction: column; gap: 4px;
        height: max(150px, min(var(--wsfc-wind-pop-h, 220px), calc(100% - 48px))); padding: 8px 10px 10px; box-sizing: border-box; border-radius: 12px;
        background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); box-shadow: 0 8px 26px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35)); }
      .pop-h { font-size: 12px; color: var(--wsfc-muted); }
      .pop-body { flex: 1 1 auto; min-height: 0; position: relative; }
      .pop-body canvas { position: absolute; inset: 0; }
      .wr-stage { position: absolute; inset: 0; visibility: hidden; pointer-events: none; overflow: hidden; }
      /* Fit mode: the chart is a fixed strip and the rose / dial takes what's left. */
      :host([fit]) .body { flex: 0 0 auto; height: var(--wsfc-wind-chart-h, 110px); min-height: 0; }
      /* The rose / dial keeps its real height (never squeezed under the chart);
         fitting narrows it until everything fits. */
      :host([fit]) .wr, :host([fit]) .top { flex-shrink: 0; }
      .wr > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; display: block; }
    `]);function wA(r,e,t,i,o,a){let C=(v,x)=>[r+Math.sin(x*Math.PI/180)*v,e-Math.cos(x*Math.PI/180)*v],[n,s]=C(i,o),[H,V]=C(i,a),[L,d]=C(t,a),[u,f]=C(t,o);return`M${n} ${s} A${i} ${i} 0 0 1 ${H} ${V} L${L} ${d} A${t} ${t} 0 0 0 ${u} ${f} Z`}function bA(r,e,t){let i=r.filter(H=>H.v!=null),o=e.filter(H=>H.v!=null),a=Array.from({length:16},()=>new Array(t.length+1).fill(0)),C=0,n=0,s=0;for(let H=0;H<i.length;H++){let V=i[H].t,L=Math.min((i[H+1]?.t??Date.now())-V,30*6e4);if(L<=0)continue;for(;s+1<o.length&&o[s+1].t<=V;)s++;let d=o[s]?.t<=V?o[s].v:o[0]?.v??0;if(C+=L,d<t[0]){n+=L;continue}let u=t.findIndex(v=>d<v);u===-1&&(u=t.length);let f=Math.round((i[H].v%360+360)%360/22.5)%16;a[f][u]+=L}return C?{sectors:a.map(H=>H.map(V=>V/C)),calm:n/C}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",p9);var bH=`/* required styles */\r
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
`;var te=new Map;function re(r){if(!te.has(r)){let e=new URL(`./${r}?v=${Y3}`,import.meta.url).href;te.set(r,import(e).catch(t=>{throw te.delete(r),new Error(`${r} could not be loaded (${t?.message||t}). Reinstall the card so every file in its dist folder is present.`)}))}return te.get(r)}var SA="https://api.rainviewer.com/public/weather-maps.json",ZA=7,kA=600,OA=1800,$A=5*6e4,$3=null,TA=async()=>$3||($3=await re("wsfc-leaflet.js")),ie="https://server.arcgisonline.com/ArcGIS/rest/services",ri="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",yH={gray:r=>[`${ie}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,ri,16],streets:()=>[`${ie}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,ri,19],topo:()=>[`${ie}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,ri,19],imagery:()=>[`${ie}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},EA={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},u9=class extends q{constructor(){super();Z(this,"_togglePlay",()=>{if(this._playing=!this._playing,this._playing&&this._lean){this._lean=!1,this._loadFrames();return}this._playing?this._schedule():clearTimeout(this._timer)});this._playing=void 0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let t=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],o=this._overlay??this.config?.owm_default??"none";if(this._playing===void 0&&(this._playing=!!this.autostart||!this.config?.start_paused,this._lean=!this._playing),this.lite)return p`${s1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map")}${o6(this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar loop":"Map")}`;let a=p`<span class="ctl">
      ${this._radarOn?p`
        ${this._error?p`<span class="err" title=${this._error}>Radar unavailable</span>`:p`<span class="time" aria-live="off">${this._frameLabel||""}</span>`}
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"} title=${this._playing?"Pause":"Play"}>
          <ha-icon icon=${this._playing?"mdi:pause":"mdi:play"}></ha-icon>
        </button>`:""}
      ${t?K3([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(C=>({value:C,label:`${this._radarOn?"+ ":""}${EA[C]||C}`}))],o,C=>this._setOverlay(C),"Map overlay"):""}
    </span>`;return p`
      ${s1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",a)}
      <div class="map"><div id="map"></div></div>
    `}firstUpdated(){this.lite||this._initMap()}async _initMap(){try{await TA()}catch(a){this._error=String(a?.message||a),this.requestUpdate();return}let t=this.renderRoot.getElementById("map");if(!t||this._map||this.lite)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,o=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=$3.map(t,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,o],this.config?.zoom??7),this._base=null,this._applyBase(),$3.circleMarker([i,o],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(t),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),$A)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(t){t.has("lite")&&t.get("lite")!==void 0&&(this.lite?this._teardown():(this.autostart&&!this._playing&&(this._playing=!0,this._lean=!1),this._map||this._initMap())),t.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),this._teardown()}_teardown(){clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null,this._frames=[],this._base=null,this._owm=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&!this.lite&&this._initMap()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let t=this.config||{},[i,o,a]=t.base_map_url?[t.base_map_url,t.base_map_attribution||"",19]:(yH[t.base_map]||yH.gray)(this._dark);this._base=$3.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:o}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let t=await fetch(SA);if(!t.ok)throw new Error(`RainViewer ${t.status}`);let i=await t.json(),o=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(this._lean&&(o=(i.radar?.past||[]).slice(-1)),!o.length||!this._map)return;let a=new Map(this._frames.map(n=>[n.path,n]));this._frames=o.map(n=>{let s=a.get(n.path);if(s)return a.delete(n.path),s;let H=$3.tileLayer(`${i.host}${n.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:ZA,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...n,layer:H,nowcast:(i.radar?.nowcast||[]).includes(n)}}),a.forEach(n=>this._map.removeLayer(n.layer)),this._error=void 0;let C=this._frames.filter(n=>!n.nowcast).length;this._idx=Math.max(0,C-1),this._show(this._idx),this._playing&&this._schedule()}catch(t){this._error=`Radar unavailable (${t?.message||t})`}}_show(t){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,C)=>a.layer.setOpacity(C===t?i:0));let o=this._frames[t];if(o){let a=new Date(o.time*1e3),C=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=o.nowcast?`${C} (forecast)`:C}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let t=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},t?OA:kA)}_setOverlay(t){this._overlay=t,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||t==="none"||!this._map||(this._owm=$3.tileLayer(`https://tile.openweathermap.org/map/${t}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};Z(u9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},autostart:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),Z(u9,"styles",[M1,i6,U5(bH),Q`
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
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",u9);var FA=5*6e4,m9=class extends q{get _metric(){return this.config?.metric||"temperature"}get _entity(){return l1(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return h;let e=S1[this._metric]||{},t=this._entity,i=d1(this.hass,t),o=this.config?.unit??i?.unit??"",a=S7(this._metric,o,this.config?.digits),C=this.config?.color||e.color||"var(--primary-color)",n=this.config?.title||this.config?.label||e.label||this.hass.states[t]?.attributes?.friendly_name||"Value";return t?p`
      <div class="top" style=${`--m-color:${C}`} @click=${()=>u1(this,t)}>
        ${this.config?.show_icon===!1?h:p`<ha-icon icon=${this.config?.icon||e.icon||"mdi:gauge"}></ha-icon>`}
        ${this.config?.show_title===!1?p`<span class="name"></span>`:p`<span class="name">${n}</span>`}
        ${this.config?.show_minmax===!1||!this._today?h:p`<span class="mm"><span class="lo">Min ${J(this._today.min,a)}</span><br /><span class="hi">Max ${J(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>u1(this,t)}>
        <div class="val">${typeof i?.value=="number"?J(i.value,a):i?.value??"\u2014"}<small>${o}</small></div>
        <div class="cap">${this._caption(i,o)}</div>
      </div>
      ${this.config?.chart==="none"?h:p`<div class="spark" @click=${()=>u1(this,t)}>${this._spark(C)}</div>`}
    `:p`<div class="note">No sensor found for ${e.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(e,t){if(this.config?.caption)return this.config.caption;let i=S1[this._metric]||{};return i.scale==="uv"&&typeof e?.value=="number"?i9(e.value):i.trend&&this._trend?this._trend:""}_spark(e){let t=this._series;if(!t?.length)return h;let i=200,o=40,a=t.map(b=>b.v).filter(b=>b!=null);if(!a.length)return h;let C=Date.now()-(this.config?.hours||24)*36e5,n=Date.now(),s=b=>(b-C)/(n-C)*i,H=(this.config?.chart||S1[this._metric]?.chart)==="bar",V=Math.min(...a),L=Math.max(...a);H&&(V=0),L-V<1e-9&&(L+=1,V=H?0:V-1);let d=b=>o-(b-V)/(L-V)*o;if(H){let b=Math.max(2,i/(this.config?.hours||24)*.7);return c1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
        ${t.map(E=>E.v>0?c1`<rect x=${s(E.t)-b/2} y=${d(E.v)} width=${b} height=${o-d(E.v)} rx="1" fill=${e}></rect>`:h)}
        <line x1="0" x2=${i} y1=${o} y2=${o} stroke=${e} stroke-opacity=".35"></line></svg>`}let u="",f=!1;for(let b of t){if(b.v==null){f=!1;continue}u+=`${f?"L":"M"}${s(b.t).toFixed(1)} ${d(b.v).toFixed(1)}`,f=!0}let v=t.find(b=>b.v!=null),x=[...t].reverse().find(b=>b.v!=null),w=`${u}L${s(x.t).toFixed(1)} ${o}L${s(v.t).toFixed(1)} ${o}Z`,y=`g${Math.random().toString(36).slice(2,8)}`;return c1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${y} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${e} stop-opacity=".35"></stop><stop offset="1" stop-color=${e} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${w} fill=${`url(#${y})`}></path>
      <path d=${u} fill="none" stroke=${e} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let e=this._entity;if(!e)return;let t=`${e}|${this.config?.hours||24}|${this.config?.chart}`;t===this._key&&Date.now()-(this._at||0)<FA||(this._key=t,this._at=Date.now(),this._load(e).catch(()=>{}))}async _load(e){let t=this.config?.hours||24,[i,o]=await Promise.all([T7(this.hass,[e],t),X8(this.hass,[e])]),a=i[e]||[],C=(this.config?.chart||S1[this._metric]?.chart)==="bar",n=this.config?.cumulative??S1[this._metric]?.cumulative??!1;this._series=C?n?J8(a,36e5):ee(a,36e5):k3(a,160);let s=(o[e]||[]).map(H=>H.v).filter(H=>H!=null);if(this._today=s.length?{min:Math.min(...s),max:Math.max(...s)}:null,S1[this._metric]?.trend){let H=Date.now()-108e5,V=[...a].reverse().find(d=>d.t<=H&&d.v!=null),L=[...a].reverse().find(d=>d.v!=null);if(V&&L){let d=L.v-V.v,u=Qs(d1(this.hass,e)?.unit||"");this._trend=d>u?"Rising":d<-u?"Falling":"Steady"}}}};Z(m9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),Z(m9,"styles",[M1,Q`
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
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",m9);var PA=Q`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,SH=(r,e)=>r?.localize?.(`component.weather.entity_component._.state.${e}`)||String(e||"").replace(/-/g," ").replace(/^\w/,t=>t.toUpperCase()),h9=class extends q{render(){if(!this.hass)return h;let t=this.hass.states[this.station?.entity]?.state;return p`
      ${s1(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${t?SH(this.hass,t):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):h}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?h:this._astro()}
    `}_summary(){let e=this.station,t=this.hass,i=[],o=h1(e,t,"temperature");o&&i.push(`${J(o.value,1)}${o.unit}`);let a=h1(e,t,"apparent_temperature");a&&o&&Math.abs(a.value-o.value)>=2&&i.push(`feels like ${J(a.value,0)}${a.unit}`);let C=h1(e,t,"wind_speed"),n=h1(e,t,"wind_bearing"),s=h1(e,t,"wind_gust_speed");C&&(C.value<1?i.push("calm"):i.push(`wind ${n?`from the ${B5(n.value)} `:""}${J(C.value,0)} ${C.unit}${s&&s.value>C.value*1.3?`, gusting ${J(s.value,0)}`:""}`));let H=h1(e,t,"precipitation"),V=d1(t,l1("rain_today",e,t));H&&H.value>0?i.push(`raining ${J(H.value,2)} ${H.unit}`):V&&V.value>0?i.push(`${J(V.value,2)} ${V.unit} of rain today`):(H||V)&&i.push("dry");let L=h1(e,t,"humidity");if(L&&i.push(`humidity ${J(L.value,0)}%`),!i.length)return"Waiting for station data.";let d=i.join(", ");return d[0].toUpperCase()+d.slice(1)+"."}_text(e){let t=this.hass.states[e];if(!t)return h;let i=t.attributes||{},o=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||t.state;return p`<div class="text" @click=${()=>u1(this,e)}>${o}</div>`}_alerts(){let e=this.config?.alerts_entity,t=e&&this.hass.states[e];if(!t)return h;let i=t.attributes?.Alerts||t.attributes?.alerts||[];return!Array.isArray(i)||!i.length?h:i.slice(0,3).map(o=>{let a=String(o.Severity||o.severity||"").toLowerCase();return p`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>u1(this,e)}>
        <b>${o.Event||o.event||o.title||"Weather alert"}</b>${o.Headline||o.headline||""}
      </div>`})}_astro(){let e=b3(this.hass),t=R8(this.hass),i=D8(this.hass),o=s0(this.hass),a=C=>`${Math.floor(C/36e5)}h ${String(Math.round(C%36e5/6e4)).padStart(2,"0")}m`;return p`<div class="astro">
      ${this.config?.show_sun===!1||!i?h:p`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${e.format(i.sunrise)} · set ${e.format(i.sunset)}<br />Solar noon ${e.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?h:p`<div><h4>${n9(o.phase)}${o.name}</h4>
            <p>${Math.round(o.fraction*100)}% illuminated<br />
            ${o.nextFull?p`Full ${t.format(o.nextFull)}`:""}${o.nextNew?p` · New ${t.format(o.nextNew)}`:""}</p></div>`}
    </div>`}};Z(h9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(h9,"styles",[M1,Q`
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
    `]);var f9=class extends q{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let e=this.config?.entity||this.station?.entity;!this.hass||!e||this._subKey===e||(this._unsub?.(),this._subKey=e,this._unsub=w5(this.hass,e,"daily",t=>this._daily=t))}render(){if(!this.hass)return h;let e=Number(this.config?.day_offset??1),t=VH(this._daily,e),i=this.config?.entity||this.station?.entity,o=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+e);let C=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),n=this.config?.title||(e===0?"Today":e===1?`Tomorrow \xB7 ${C}`:C);if(!t)return p`${s1(this.config,"mdi:calendar-today",n)}<div class="note">Forecast not available yet.</div>`;let s=o.temperature_unit||"",H=o.precipitation_unit||"",V=o.wind_speed_unit||"",L=[];return t.precipitation!=null&&L.push(["Precipitation",`${J(t.precipitation,H==="in"?2:1)} ${H}`]),t.precipitation_probability!=null&&L.push(["Chance of rain",`${J(t.precipitation_probability)}%`]),t.wind_speed!=null&&L.push(["Wind",`${t.wind_bearing!=null?`${B5(Number(t.wind_bearing))} `:""}${J(t.wind_speed)} ${V}`]),t.wind_gust_speed!=null&&L.push(["Gusts",`${J(t.wind_gust_speed)} ${V}`]),t.humidity!=null&&L.push(["Humidity",`${J(t.humidity)}%`]),t.uv_index!=null&&L.push(["UV index",J(t.uv_index,1)]),p`
      ${s1(this.config,"mdi:calendar-today",n)}
      <div class="main" @click=${()=>u1(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${t.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${t.templow!=null?p`<span class="lo">${J(t.templow)}°</span> / `:h}<span class="hi">${J(t.temperature)}°</span></div>
          <div class="cond">${SH(this.hass,t.condition)}${s?` \xB7 ${s}`:""}</div>
        </div>
      </div>
      <div class="rows">${L.map(([d,u])=>p`<span>${d}</span><span>${u}</span>`)}</div>
    `}};Z(f9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),Z(f9,"styles",[M1,PA,Q`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var A9=class extends q{render(){let e=this.config||{},t=e.show_status?Is(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return p`
      ${e.icon===""||e.show_icon===!1||e.show_title===!1?h:p`<ha-icon class="lead" icon=${e.icon||"mdi:chart-box-outline"}></ha-icon>`}
      ${e.show_title===!1?h:p`<div><div class="t">${e.title||"Local measurements"}</div>${e.subtitle?p`<div class="sub">${e.subtitle}</div>`:h}</div>`}
      ${t?p`<span class="status" style="--c:${i[t][1]}"><span class="dot"></span>${i[t][0]}</span>`:h}
      <span class="grow"></span>
      ${this.bar?p`<div class="bar">${this.bar}</div>`:h}
    `}};Z(A9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),Z(A9,"styles",[r6,Q`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var v9=class extends q{render(){let e=this.config?.card;return e?.type?(this._ensure(e),this._el&&this.hass&&(this._el.hass=this.hass),p`${this.config?.show_title??!!this.config?.title?s1(this.config,"mdi:card-outline",""):h}
      ${this._err?p`<div class="note">${this._err}</div>`:p`<div class="host">${this._el||h}</div>`}`):p`${s1(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(e){let t=JSON.stringify(e);if(t!==this._json){this._json=t;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");if(this._json!==t)return;this._el=i.createCardElement(e),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};Z(v9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),Z(v9,"styles",[M1,Q`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",h9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",f9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",A9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",v9);var DA=["pm2_5","pm10","ozone","co2"],RA={pm2_5:"mdi:blur",pm10:"mdi:blur-linear",ozone:"mdi:molecule",co2:"mdi:molecule-co2"},ii=200,BA=r=>r==null?"":f2[r].short||f2[r].name,zA=["Low","Moderate","Elevated","High","Very high","Very high"],x9=[0,50,100,150,200,300,500];function NA(r,e){if(r==null)return null;let t=Math.max(0,Math.min(r,x9[e])),i=x9.findIndex((a,C)=>C>0&&t<=a)-1;i<0&&(i=e-1);let o=(t-x9[i])/(x9[i+1]-x9[i]);return(i+o)/e*100}function oi(r,e,t){let i=r||{},o=x=>i.entities?.[x]||_3(e,t,x),a=o("aqi"),C=d1(t,a),n=typeof C?.value=="number"?C.value:null,s=w3(n),H=a?t.states[a]:null,V=a&&Gs(t,a),L=i.show_location===!1?null:i.location||(V?d1(t,V)?.value:null),d=Array.isArray(i.pollutants)&&i.pollutants.length?i.pollutants:DA,u=[];for(let x of d){let w=o(x),y=d1(t,w);if(!w||!y||typeof y.value!="number")continue;let b=T8(x,y.value,y.unit),E=x!=="co2";u.push({k:x,e:w,label:$r[x]?.label||x,icon:RA[x],value:y.value,unit:y.unit,index:b,level:w3(b),epa:E,digits:x==="ozone"&&!/ppm/i.test(y.unit)?1:S7(x,y.unit)})}for(let x of Array.isArray(i.extra)?i.extra:[]){let w=typeof x=="string"?x:x?.entity,y=d1(t,w);if(!y||typeof y.value!="number")continue;let b=t.states[w],E=x.label||b?.attributes?.friendly_name||w,F=Object.entries(Tr).find(([,k])=>k.re.test(`${w} ${E}`)),$=Array.isArray(x.thresholds)&&x.thresholds.length?x.thresholds.map(Number):null,D=$?T8(null,y.value,y.unit,$):F?T8(F[0],y.value,y.unit):null;u.push({k:w,e:w,label:E,icon:x.icon||b?.attributes?.icon||"mdi:flask-outline",value:y.value,unit:y.unit,index:D,level:w3(D),epa:!1,digits:x.digits??(Math.abs(y.value)<1?3:Math.abs(y.value)<10?2:0)})}let f=H?.attributes?.main_pollutant||H?.attributes?.dominant_pollutant||u.filter(x=>x.epa&&x.index!=null).sort((x,w)=>w.index-x.index)[0]?.label||"",v=i.show_source===!1?"":i.source||H?.attributes?.source||(a?U0(t,a):"");return{aqiE:a,aqi:n,level:s,name:H?.attributes?.description||H?.attributes?.category||(s!=null?f2[s].name:""),area:L,source:v,main:f,time:H?.attributes?.time||null,rows:u,entities:[a,V,...u.map(x=>x.e)].filter(Boolean)}}var E7=r=>r.level==null?"No standard":r.epa?BA(r.level):zA[r.level],oe=r=>r.index==null?"":r.epa?`AQI ${r.index} \u2014 ${f2[r.level].name}`:`Index ${r.index} on the AQI scale`,ZH=r=>r.index==null?0:Math.min(100,r.index/ii*100),ae=r=>p`${J(r.value,r.digits)}<small>${r.unit}</small>`,g9=class extends q{shouldUpdate(e){if(e.size!==1||!e.has("hass"))return!0;let t=e.get("hass");return!t||!this._ids?!0:this._ids.some(i=>t.states[i]!==this.hass.states[i])}render(){if(!this.hass)return h;let e=this.config||{},t=oi(e,this.station,this.hass);if(this._ids=t.entities,!t.aqiE&&!t.rows.length)return p`${s1(e,"mdi:air-filter","Air quality")}
        <div class="note">No air-quality sensors found. Add Home Assistant's AirNow integration (free key from airnowapi.org), an outdoor PM2.5 sensor, or set the entities under this panel's options.</div>`;let i=e.layout==="compact"?"tiles":e.layout||"scale";return i==="scale"?p`${s1(e,"mdi:air-filter","Air quality")}${this._scaleLayout(t,e)}`:p`
      ${s1(e,"mdi:air-filter","Air quality")}
      ${t.aqiE&&e.show_aqi!==!1?this._aqi(t,e,i):h}
      ${i==="rows"?this._rows(t):i==="bars"?this._bars(t,e):this._tiles(t)}
    `}_aqi(e,t,i){let o=e.level!=null?f2[e.level].color:"var(--wsfc-muted)",a=e.time?new Date(e.time):null,C=a&&!isNaN(a)?a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",n=["US AQI",e.area,e.source&&e.source!==e.area?e.source:"",e.main?`main pollutant ${e.main}`:"",C].filter(Boolean).join(" \xB7 "),s=e.aqi!=null?Math.min(100,Math.min(e.aqi,300)/300*100):null,H=t.show_scale??i==="tiles";return p`
      <div class="top" @click=${()=>u1(this,e.aqiE)}>
        <span class="aqi" style="color:${o}">${J(e.aqi)}</span>
        <div><div class="cat">${e.name||"\u2014"}</div><div class="sub">${n}</div></div>
      </div>
      ${H?p`
        <div class="scale" role="img" aria-label="AQI ${J(e.aqi)} on a 0 to 300 scale">
          ${f2.slice(0,5).map((V,L)=>p`<span style="background:${V.color};flex:${L<4?50:100}"></span>`)}
          ${s!=null?p`<i class="mark" style="left:${s}%"></i>`:h}
        </div>
        <div class="ticks">${[0,50,100,150,200,300].map(V=>p`<span style="left:${V/300*100}%">${V===300?"300+":V}</span>`)}</div>`:h}`}_seg(e,t,i=!1){let o=t?6:5,a=NA(e,o),C=w3(e);return p`<div class="seg ${i?"big":""}" role="img" aria-hidden="true">
      ${f2.slice(0,o).map(n=>p`<span style="background:${n.color}"></span>`)}
      ${a!=null?p`<i class="knob" style="left:${a}%;--c:${f2[C].color}"></i>`:h}
    </div>`}_scaleLayout(e,t){let i=e.time?new Date(e.time):null,o=i&&!isNaN(i)?i.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",a=[e.source,e.area,e.name,o].filter(Boolean).join(" \xB7 ");return p`
      ${a?p`<div class="hdr">${a}</div>`:h}
      ${e.aqiE&&t.show_aqi!==!1?p`
        <div class="shead" @click=${()=>u1(this,e.aqiE)} role="button" tabindex="0"
          @keydown=${C=>(C.key==="Enter"||C.key===" ")&&u1(this,e.aqiE)}
          aria-label="Air Quality Index ${J(e.aqi)}, ${e.name}${e.main?`, main pollutant ${e.main}`:""}">
          <span class="t">Air Quality Index</span>
          <span class="p">${e.main?`(${e.main})`:""}</span>
          <span class="n">${J(e.aqi)}</span>
        </div>
        ${this._seg(e.aqi,!0,!0)}`:h}
      ${e.rows.length?p`<div class="srows">${e.rows.map(C=>p`
        <div class="srow" style=${this._color(C)} role="button" tabindex="0" @click=${()=>u1(this,C.e)}
          @keydown=${n=>(n.key==="Enter"||n.key===" ")&&u1(this,C.e)}
          title=${oe(C)} aria-label="${C.label}: ${J(C.value,C.digits)} ${C.unit}${C.level!=null?`, ${E7(C)}`:""}">
          <ha-icon icon=${C.icon}></ha-icon>
          ${C.level==null?p`<span class="nm">${C.label}</span><span class="plain">${ae(C)}</span>`:p`<div><div class="nm">${C.label}</div><div class="nv">${J(C.value,C.digits)} ${C.unit}</div></div>
              ${this._seg(C.index,C.epa)}
              <span class="rt">${E7(C)}</span>`}
        </div>`)}</div>`:h}
    `}_color(e){return e.level!=null?`--c:${f2[e.level].color}`:""}_tiles(e){return e.rows.length?p`<div class="tiles ${this.config?.tile_fill?"fill":""}">${e.rows.map(t=>p`
      <div class="tile" style=${this._color(t)} @click=${()=>u1(this,t.e)} title=${oe(t)||t.e}>
        <span class="dot"></span>
        <div><div class="n">${t.label}</div><div class="v">${ae(t)}</div></div>
      </div>`)}</div>`:h}_rows(e){return e.rows.length?p`<div class="rows">${e.rows.map(t=>p`
      <div class="row" style=${this._color(t)} role="button" tabindex="0" @click=${()=>u1(this,t.e)}
        @keydown=${i=>(i.key==="Enter"||i.key===" ")&&u1(this,t.e)}
        aria-label="${t.label}: ${J(t.value,t.digits)} ${t.unit}, ${E7(t)}">
        <ha-icon icon=${t.icon}></ha-icon>
        <span>${t.label}</span>
        <span class="track"><i style="width:${ZH(t)}%"></i></span>
        <span class="chip ${t.level==null?"none":""}" title=${oe(t)}>${E7(t)}</span>
        <span class="val">${ae(t)}</span>
      </div>`)}</div>`:h}_bars(e,t){if(!e.rows.length)return h;let i=Number(t.bar_height)||140,o=[50,100,150];return p`<div class="bars" style="--n:${e.rows.length};--h:${i}px">
      <div class="axis" style="margin-top:21px">${[0,...o,200].map(a=>p`<span style="bottom:${a/ii*100}%">${a}</span>`)}</div>
      <div class="plot">${o.map(a=>p`<hr style="bottom:${a/ii*100}%" />`)}</div>
      ${e.rows.map((a,C)=>p`
        <div class="col" style="grid-row:1;grid-column:${C+2};${this._color(a)}" role="button" tabindex="0"
          @click=${()=>u1(this,a.e)} @keydown=${n=>(n.key==="Enter"||n.key===" ")&&u1(this,a.e)}
          title=${oe(a)} aria-label="${a.label}: ${J(a.value,a.digits)} ${a.unit}, ${E7(a)}">
          <span class="bv">${ae(a)}</span>
          <span class="bt"><i style="height:${ZH(a)}%"></i></span>
          <span class="bn">${a.label}</span>
          <span class="bc">${E7(a)}</span>
        </div>`)}
    </div>`}};Z(g9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(g9,"styles",[M1,Q`
      :host { --g: #00e400; }
      .top { display: flex; align-items: center; gap: calc(12px * var(--wsfc-sx, 1)); cursor: pointer; }
      .aqi { font-size: 40px; font-weight: 600; line-height: 1; }
      .cat { font-size: 15px; font-weight: 500; }
      .sub { font-size: 12px; color: var(--wsfc-muted); }
      .scale { position: relative; display: flex; height: 8px; border-radius: 4px; overflow: hidden; margin: calc(12px * var(--wsfc-sy, 1)) 0 4px; }
      .scale span { flex: 1; opacity: 0.85; }
      .mark { position: absolute; top: -3px; width: 4px; height: 14px; margin-left: -2px; border-radius: 2px; background: var(--primary-text-color); box-shadow: 0 0 0 1px var(--card-background-color, #000); }
      .ticks { position: relative; height: 12px; font-size: 10px; color: var(--wsfc-muted); }
      .ticks span { position: absolute; transform: translateX(-50%); }
      .ticks span:first-child { transform: none; }
      .ticks span:last-child { transform: translateX(-100%); }
      small { font-size: 11px; font-weight: 400; color: var(--wsfc-muted); margin-left: 2px; }

      /* tiles */
      /* Each tile as wide as what's in it (or stretched with tile_fill). */
      .tiles { display: flex; flex-wrap: wrap; gap: calc(6px * var(--wsfc-sy, 1)) calc(6px * var(--wsfc-sx, 1)); margin-top: calc(10px * var(--wsfc-sy, 1)); }
      .tiles.fill { display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(110px * var(--wsfc-sx, 1)), 1fr)); }
      .tile { display: flex; align-items: center; gap: calc(8px * var(--wsfc-sx, 1)); padding: calc(5px * var(--wsfc-sy, 1)) calc(10px * var(--wsfc-sx, 1)) calc(5px * var(--wsfc-sy, 1)) calc(8px * var(--wsfc-sx, 1)); border-radius: 10px; background: rgba(127, 127, 127, 0.08); cursor: pointer; flex: 0 0 auto; }
      .dot { width: 10px; height: 10px; border-radius: 50%; flex: 0 0 auto; background: var(--c, var(--wsfc-muted)); }
      .tile .n { font-size: 11px; color: var(--wsfc-muted); }
      .tile .v { font-size: 14px; font-weight: 500; white-space: nowrap; }

      /* rows */
      .hdr { font-size: 13px; color: var(--wsfc-muted); margin: 2px 0 6px; }
      .hdr b { color: var(--primary-text-color); font-weight: 500; }
      .rows { display: grid; grid-template-columns: 22px max-content minmax(40px, 1fr) max-content max-content; align-items: center; column-gap: calc(12px * var(--wsfc-sx, 1)); margin-top: 6px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; padding: calc(8px * var(--wsfc-sy, 1)) 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); cursor: pointer; font-size: 14px; }
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
      .srows { display: grid; grid-template-columns: 22px max-content minmax(60px, 1fr) max-content; align-items: center; column-gap: calc(12px * var(--wsfc-sx, 1)); margin-top: calc(8px * var(--wsfc-sy, 1)); }
      .srow { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; padding: calc(8px * var(--wsfc-sy, 1)) 0; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); cursor: pointer; }
      .srow ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
      .srow .nm { font-size: 14px; line-height: 1.2; }
      .srow .nv { font-size: 12px; color: var(--secondary-text-color); white-space: nowrap; font-variant-numeric: tabular-nums; }
      .srow .seg { margin: 0; height: 8px; }
      .srow .seg .knob { width: 14px; height: 14px; margin: -7px 0 0 -7px; }
      .srow .rt { font-size: 12px; font-weight: 500; color: var(--c, var(--wsfc-muted)); min-width: 7ch; text-align: right; white-space: nowrap; }
      .srow .plain { grid-column: 3 / -1; text-align: right; font-size: 14px; }

      /* vertical bars */
      .bars { display: grid; grid-template-columns: 30px repeat(var(--n), minmax(calc(36px * var(--wsfc-sx, 1)), 1fr)); column-gap: calc(8px * var(--wsfc-sx, 1)); margin-top: calc(10px * var(--wsfc-sy, 1)); }
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
    `]);customElements.get("wsfc-panel-air-quality")||customElements.define("wsfc-panel-air-quality",g9);var W1="temperature_2m_max",P1="temperature_2m_min",K1="precipitation_sum",b5="wind_gusts_10m_max",l5="et0_fao_evapotranspiration",IA="https://archive-api.open-meteo.com/v1/archive",WA="https://api.open-meteo.com/v1/forecast";var se=r=>r?.config?.unit_system?.temperature!=="\xB0C";function P7(r,e={}){return e.records_entity?r?.states?.[e.records_entity]?e.records_entity:null:Object.keys(r?.states||{}).find(t=>t.startsWith("sensor.")&&r.states[t].attributes?.coagmet_station)||null}function OH(r,e={}){let t=Number(e.latitude??r?.config?.latitude),i=Number(e.longitude??r?.config?.longitude);return Number.isFinite(t)&&Number.isFinite(i)?{lat:t,lon:i}:null}var ai={"\xB0F":"f","\xB0C":"c"},Ci={inch:"in",in:"in",mm:"mm"},kH={"mp/h":"mph",mph:"mph","km/h":"kmh","m/s":"ms",kn:"kn"};function A2(r,e,t){if(r==null||!Number.isFinite(Number(r)))return null;let i=Number(r),o=se(t);if(ai[e])return ai[e]==="f"&&!o&&(i=(i-32)*5/9),ai[e]==="c"&&o&&(i=i*9/5+32),{value:i,unit:o?"\xB0F":"\xB0C"};if(Ci[e])return Ci[e]==="in"&&!o&&(i*=25.4),Ci[e]==="mm"&&o&&(i/=25.4),{value:i,unit:o?"in":"mm"};if(kH[e]){let a={mph:1,kmh:.621371192237334,ms:2.236936,kn:1.150779}[kH[e]]*i;return o?{value:a,unit:"mph"}:{value:a*1.609344,unit:"km/h"}}return{value:i,unit:e||""}}function He(r,e,t){if(r==null)return null;let i=se(t);return e==="\xB0F"&&!i?{value:r*5/9,unit:"\xB0C"}:e==="\xB0C"&&i?{value:r*9/5,unit:"\xB0F"}:{value:r,unit:e}}var ne=new Map;function $H(r){if(ne.has(r))return ne.get(r);try{let e=JSON.parse(localStorage.getItem(r)||"null");return e&&ne.set(r,e),e}catch{return null}}function TH(r,e){ne.set(r,e);try{localStorage.setItem(r,JSON.stringify(e))}catch{}}var Ce=new Map;function EH(r,e){return Ce.has(r)||Ce.set(r,e().finally(()=>Ce.delete(r))),Ce.get(r)}var T3=r=>`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`,ni=r=>{let[e,t,i]=r.split("-").map(Number);return new Date(e,t-1,i)},F7=(r,e)=>Number(Number(r).toFixed(e));function UA(r,e,t){let i=t[W1]==="\xB0C",o=i?0:32,a=i?10:50,C=i?30:86,n=i?.25:.01,s=T3(e),H=s.slice(5),V=e.getFullYear(),L=e.getMonth()+1,d=r.filter(z=>z.d<s),u=(z,V1,a1)=>z.reduce((i1,A1)=>A1[V1]!=null&&(!i1||a1(A1[V1],i1.value))?{value:F7(A1[V1],2),date:A1.d}:i1,null),f=(z,V1=!0)=>({[W1]:u(z,"high",(a1,i1)=>a1>i1),[P1]:u(z,"low",(a1,i1)=>a1<i1),...V1?{[b5]:u(z,"gust",(a1,i1)=>a1>i1)}:{},[K1]:u(z.filter(a1=>(a1.rain||0)>0),"rain",(a1,i1)=>a1>i1)}),v=(z,V1="rain")=>F7(z.reduce((a1,i1)=>a1+(i1[V1]||0),0),2),x=d.filter(z=>z.d.slice(5)===H),w=`${L>=7?V:V-1}-07-01`,y=d.filter(z=>z.d>=w&&z.low!=null&&z.low<=o),b=r[0]?.d||s,E=[];for(let z=Number(b.slice(0,4));z<=V;z++){let V1=`${z}-07-01`,a1=`${z+1}-06-30`;if(a1>=s||V1<b)continue;let i1=d.find(A1=>A1.d>=V1&&A1.d<=a1&&A1.low!=null&&A1.low<=o);i1&&E.push(Math.round((ni(i1.d)-ni(V1))/864e5))}E.sort((z,V1)=>z-V1);let F=null;if(E.length){let z=ni(w);z.setDate(z.getDate()+E[E.length>>1]),F=T3(z).slice(5)}let $=`${V}-01-01`,D=d.filter(z=>z.d>=$&&z.high!=null&&z.low!=null).reduce((z,V1)=>z+Math.max(0,(Math.min(V1.high,C)+Math.min(Math.max(V1.low,a),C))/2-a),0),k=[];for(let z=Number(b.slice(0,4));z<V;z++)`${z}-01-01`>=b&&k.push(z);let P=z=>k.length?F7(k.reduce((V1,a1)=>V1+v(d.filter(i1=>z(i1.d,a1))),0)/k.length,2):null,N=String(L).padStart(2,"0"),I=[...d].reverse().find(z=>(z.rain||0)>=n),Y=d.slice(-7);return{records:f(d),records_today:{date:H,years:x.length,...f(x,!1)},records_month:{month:L,...f(d.filter(z=>z.d.slice(5,7)===N))},frost:{season_start:w,first:y[0]?{date:y[0].d,value:F7(y[0].low,1)}:null,last:y.length?{date:y.at(-1).d,value:F7(y.at(-1).low,1)}:null,nights:y.length,typical_first:F,threshold:o},growing_degree_days:{since:$,value:Math.round(D),base:a,cap:C},precipitation:{month_sum:v(d.filter(z=>z.d.startsWith(`${V}-${N}`))),month_normal:P((z,V1)=>z.startsWith(`${V1}-${N}`)),year_sum:v(d.filter(z=>z.d>=$)),year_normal_to_date:P((z,V1)=>z.startsWith(`${V1}-`)&&z.slice(5)<H),last_7_days:v(Y),last:I?{date:I.d,value:F7(I.rain,2)}:null,years:k.length},evapotranspiration:{last_7_days:Y.some(z=>z.et0!=null)?v(Y,"et0"):null,days:Y.map(z=>({date:z.d,value:z.et0}))}}}function FH(r){return r?{q:"&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch",u:{[W1]:"\xB0F",[P1]:"\xB0F",[K1]:"inch",[b5]:"mp/h",[l5]:"inch"}}:{q:"&wind_speed_unit=kmh",u:{[W1]:"\xB0C",[P1]:"\xB0C",[K1]:"mm",[b5]:"km/h",[l5]:"mm"}}}function jA(r,e={}){let t=OH(r,e);if(!t)return Promise.resolve(null);let i=se(r),o=new Date,a=e.open_meteo_since||"1940-01-01",C=`wsfc-om-area:${t.lat.toFixed(2)},${t.lon.toFixed(2)}:${i?"us":"si"}:${a}`,n=$H(C);return n&&n.day===T3(o)?Promise.resolve(n.summary):EH(C,async()=>{try{let{q:s,u:H}=FH(i),V=new Date(o);V.setDate(V.getDate()-1);let L=`${IA}?latitude=${t.lat}&longitude=${t.lon}&start_date=${a}&end_date=${T3(V)}&daily=${[W1,P1,K1,b5,l5].join(",")}&timezone=auto${s}`,d=await fetch(L);if(!d.ok)throw new Error(`Open-Meteo ${d.status}`);let u=await d.json(),f=u.daily||{},v=(f.time||[]).map((w,y)=>({d:w,high:f[W1]?.[y],low:f[P1]?.[y],rain:f[K1]?.[y],gust:f[b5]?.[y],et0:f[l5]?.[y]})).filter(w=>w.high!=null||w.low!=null);if(!v.length)return n?.summary||null;let x={station_name:"Open-Meteo",source:"Open-Meteo historical weather (ERA5)",kind:"modelled",latitude:u.latitude,longitude:u.longitude,elevation:u.elevation,since:v[0].d,through:v.at(-1).d,daily_units:H,...UA(v,o,H)};return TH(C,{day:T3(o),summary:x}),x}catch(s){return console.warn("weather-station-flex-card: Open-Meteo archive",s),n?.summary||null}})}function GA(r,e={}){let t=P7(r,e),i=t?r.states[t].attributes:null;return!i||i.error||!i.records?null:{...i,entity:t,through:/^\d{4}-\d\d-\d\d$/.test(r.states[t].state)?r.states[t].state:null}}async function D7(r,e={}){let t=e.area_source||"auto";if(t==="off")return null;if(t!=="open_meteo"){let i=GA(r,e);if(i||t==="coagmet")return i}return jA(r,e)}function PH(r,e={}){let t=OH(r,e);if(!t)return Promise.resolve(null);let i=se(r),o=`wsfc-om-now:${t.lat.toFixed(2)},${t.lon.toFixed(2)}:${i?"us":"si"}`,a=$H(o);return a&&Date.now()-a.at<18e5?Promise.resolve(a.data):EH(o,async()=>{try{let{q:C,u:n}=FH(i),s=["soil_temperature_6cm","soil_temperature_18cm","soil_moisture_3_to_9cm","soil_moisture_9_to_27cm"],H=`${WA}?latitude=${t.lat}&longitude=${t.lon}&daily=${[W1,P1,K1,l5].join(",")}&hourly=${s.join(",")}&past_days=7&forecast_days=7&timezone=auto${C}`,V=await fetch(H);if(!V.ok)throw new Error(`Open-Meteo ${V.status}`);let L=await V.json(),d=L.daily||{},u=L.hourly||{},f=(d.time||[]).map((b,E)=>({date:b,[W1]:d[W1]?.[E],[P1]:d[P1]?.[E],[K1]:d[K1]?.[E],[l5]:d[l5]?.[E]})),v=T3(new Date)+"T"+String(new Date().getHours()).padStart(2,"0"),x=(u.time||[]).findIndex(b=>b.startsWith(v));x<0&&(x=Math.max(0,(u.time||[]).length-1));let w=L.hourly_units||{},y={source:"Open-Meteo",daily_units:{...n,...L.daily_units||{}},days:f,today:T3(new Date),soil:Object.fromEntries(s.map(b=>[b,u[b]?.[x]==null?null:{value:u[b][x],unit:w[b]||""}]))};return TH(o,{at:Date.now(),data:y}),y}catch(C){return console.warn("weather-station-flex-card: Open-Meteo forecast",C),a?.data||null}})}var qA=[["online",(r,e)=>e==="connectivity"||/\bonline\b|\bconnect(ed|ion)\b/.test(r)],["id",r=>/hardware[\s_-]?id|\bhw[\s_-]?id\b|firmware|\bversion\b/.test(r)],["battery",(r,e)=>e==="battery"||/batt/.test(r)],["capacitor",r=>/capacitor|cap[\s_-]?volt/.test(r)],["rssi",(r,e)=>/rssi/.test(r)||e==="signal_strength"&&/dbm/.test(r)],["signal",(r,e)=>/signal/.test(r)||e==="signal_strength"]],QA={online:"mdi:lan-connect",battery:"mdi:battery",capacitor:"mdi:flash",rssi:"mdi:wifi-strength-2",signal:"mdi:signal",id:"mdi:identifier"},YA={online:"Online",battery:"Battery",capacitor:"Capacitor",rssi:"RSSI",signal:"Signal",id:"Hardware ID"},DH=/^(on|online|connected|true|yes|ok|1)$/i;function KA(r,e){let t=e?.state,i=e?.attributes||{};if(t==null||t==="unavailable"||t==="unknown")return"bad";let o=Number(t),a=i.unit_of_measurement||"";if(r==="online")return DH.test(t)?"ok":"bad";if(r==="id")return"";if(r==="battery")return e.entity_id.startsWith("binary_sensor.")?t==="on"?"bad":"ok":a==="%"?o<15?"bad":o<30?"warn":"ok":a==="V"?o<2.3?"bad":o<2.5?"warn":"ok":!isNaN(o)&&o<=5?o<=1?"bad":o<=2?"warn":"ok":"";if(r==="capacitor")return a==="V"&&o<2.3?"warn":"ok";if(r==="rssi")return o<-90?"bad":o<-80?"warn":"ok";if(r==="signal"){if(a==="%")return o<25?"bad":o<50?"warn":"ok";if(!isNaN(o)&&o<=4)return o<=1?"bad":o<=2?"warn":"ok"}return""}function si(r,e,t={}){let i=[];for(let o of Sr(r,e,t)){let a=e.devices?.[o],C=[];for(let s of g3(e,o)){let H=e.entities[s],V=e.states[s];if(!V)continue;let L=`${s} ${V.attributes?.friendly_name||""} ${V.attributes?.unit_of_measurement||""}`.toLowerCase(),d=V.attributes?.device_class,u=qA.find(([,x])=>x(L,d))?.[0];if(!u||u==="id"&&t.show_ids===!1)continue;let f=V.attributes?.friendly_name||s,v=a?.name_by_user||a?.name;v&&f.startsWith(v)&&(f=f.slice(v.length).trim()||YA[u]),C.push({eid:s,kind:u,name:f,st:V,level:KA(u,V),platform:H.platform})}let n=["online","battery","capacitor","signal","rssi","id"];C.sort((s,H)=>n.indexOf(s.kind)-n.indexOf(H.kind)||s.name.localeCompare(H.name)),C.length&&i.push({device:a?.name_by_user||a?.name||o,model:a?.model,rows:C})}return i}var _9=class extends q{render(){if(!this.hass)return h;let e=this.config||{},t=si(this.station,this.hass,e),i=o=>{let a=o.st,C=a.attributes?.unit_of_measurement||"";return o.kind==="online"?DH.test(a.state)?/^(on|true|1)$/i.test(a.state)?"Online":a.state:a.state==="off"?"Offline":a.state:a.entity_id.startsWith("binary_sensor.")?o.kind==="battery"?a.state==="on"?"Low":"OK":a.state:["unavailable","unknown"].includes(a.state)?"\u2014":`${a.state}${C?` ${C}`:""}`};return p`
      ${s1(e,"mdi:heart-pulse","Station health")}
      ${t.length?t.map(o=>p`<div class="grp">
            ${t.length>1||e.show_devices?p`<div class="dev">${o.device}${o.model?` \xB7 ${o.model}`:""}</div>`:h}
            <div class="rows">${o.rows.map(a=>p`<div class="row ${a.level}" @click=${()=>u1(this,a.eid)} title=${a.eid}>
              <ha-icon icon=${a.kind==="battery"&&a.level==="bad"?"mdi:battery-alert":QA[a.kind]}></ha-icon>
              <div class="t"><div class="n">${a.name}</div><div class="v">${i(a)}</div></div>
            </div>`)}</div>
          </div>`):p`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `}_lastReport(){let t=["temperature","humidity","wind_speed","pressure"].map(C=>V5(this.station,this.hass,C)).filter(Boolean).map(C=>Date.parse(this.hass.states[C]?.last_updated||this.hass.states[C]?.last_changed||"")).filter(C=>!isNaN(C));if(!t.length)return h;let i=Math.round((Date.now()-Math.max(...t))/6e4),o=i>30?"bad":i>10?"warn":"",a=i<1?"just now":i<60?`${i} min ago`:`${Math.floor(i/60)} h ${i%60} min ago`;return p`<div class="last ${o}">Last reading ${a}</div>`}};Z(_9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(_9,"styles",[M1,Q`
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
    `]);customElements.get("wsfc-panel-health")||customElements.define("wsfc-panel-health",_9);var Ve=new Map;function Hi(r,e,t){let i=`${e}|${t}`;return!Ve.has(i)&&r?.connection&&e&&(Ve.set(i,null),w5(r,e,t,o=>Ve.set(i,o))),Ve.get(i)||null}var RH=(r,e)=>e?r.localize?.(`component.weather.entity_component._.state.${e}`)||String(e).replace(/-/g," "):"",w9=(r,e,t)=>{let i=e?.attributes?.temperature_unit||(r.config?.unit_system?.temperature==="\xB0C"?"\xB0C":"\xB0F");return t==null?null:A2(t,i,r)?.value},BH=(r,e=!0)=>{let t=[],i=b3(r),o=D8(r),a=e?s0(r):null;if(o){t.push(v1("Sunrise",i.format(o.sunrise),"","#ffb300"),v1("Sunset",i.format(o.sunset),"","#ff7043"));let C=Math.round(o.daylightMs/6e4);t.push(v1("Daylight",`${Math.floor(C/60)}h ${C%60}m`))}return a&&t.push(v1("Moon",a.name,`${Math.round(a.fraction*100)}%`,"#cfd8dc")),t},XA={none:"var(--secondary-text-color)",low:"var(--success-color, #43a047)",medium:"var(--warning-color, #ffa600)",high:"var(--error-color, #db4437)",off:"rgba(127,127,127,0.55)"},zH=["#7fd6ff","#b8f04a","#43a047","#ffc93c","#ff5a1f"],JA=["Very humid","Gentle","Comfortable","Brisk","Thirsty air"],ev={Low:"#43a047",Moderate:"#fdd835",High:"#fb8c00","Very high":"#e53935",Extreme:"#8e24aa"},o2=(r,e=0)=>r==null||!Number.isFinite(Number(r))?"\u2014":Number(r).toFixed(e),v1=(r,e,t="",i="",o=null)=>({label:r,value:e,unit:t,color:i,entity:o}),K2=(r,e,t,i,o)=>{let a=h1(e,r,t);return a?v1(i,o2(a.value,o),a.unit,"",a.entity):null},Le={air_quality(r,e,t){let i=oi(r,t,e),o=[];i.aqiE&&r.show_aqi!==!1&&o.push(v1("AQI",o2(i.aqi),i.name||"",i.level!=null?f2[i.level].color:"",i.aqiE));for(let a of i.rows)o.push(v1(a.label,o2(a.value,a.digits),a.unit,a.level!=null?f2[a.level].color:"",a.e));return o},pollen(r,e){return k7(r,e).rows.map(i=>v1(i.name,Z7[i.level],i.value!=null?`${i.value}`:"",XA[i.level],i.entity))},rain(r,e,t){let i=e.config?.unit_system?.temperature==="\xB0C"?1:2,o=Array.isArray(r.show_rows)&&r.show_rows.length?r.show_rows:["rain_rate","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year"],a={rain_rate:"Now",rain_hour:"1 h",rain_today:"Today",rain_24h:"24 h",rain_event:"Event",rain_week:"Week",rain_month:"Month",rain_year:"Year"};return o.filter(C=>a[C]).map(C=>{let n=d1(e,(r.entities||{})[C]||l1(C,t,e));return!n||!Number.isFinite(n.value)||C==="rain_rate"&&!(n.value>0)?null:v1(a[C],o2(n.value,i),n.unit,"#1e88e5",n.entity)}).filter(Boolean)},lightning(r,e,t){let i=z5(r,t,e),o=d1(e,i.count),a=d1(e,i.distance),C=d1(e,i.battery),n=[];if(o&&n.push(v1("Strikes today",o2(o.value),"","#ffc93c",o.entity)),a&&Number.isFinite(a.value)){let H=/mi/i.test(a.unit)?a.value*1.609344:a.value,V=e.config?.unit_system?.length!=="km";n.push(v1("Latest",o2(V?H/1.609344:H),V?"mi":"km","#ffc93c",a.entity))}let s=V9(e,i);return s&&n.push(v1("At",new Intl.DateTimeFormat(e.locale?.language,{hour:"numeric",minute:"2-digit"}).format(new Date(s)),"","",i.time||i.distance)),C&&r.show_battery!==!1&&n.push(v1("Battery",o2(C.value,C.unit==="V"?2:0),C.unit,"",C.entity)),n},vpd(r,e,t,i){let o=i?._value?.();if(!o)return[];let a=Math.max(0,[.4,.8,1.2,1.6,1/0].findIndex(C=>o.kpa<C));return[v1("VPD",o2(o.kpa,2),"kPa",zH[a],o.entity),v1("Air",JA[a],"",zH[a],o.entity)]},frost_watch(r,e,t,i){let o=i?.shadowRoot?.querySelector(".box"),a=o?.querySelector(".t")?.textContent?.trim(),C=[...o?.classList||[]].find(s=>s!=="box")||"",n={danger:"#e53935",heat:"#ff7a1f",frost:"#4aa3ff",tonight:"#4aa3ff",calm:"var(--success-color, #43a047)"}[C]||"";return[a?v1("Watch",a,"",n):null,K2(e,t,"temperature","Now",0),K2(e,t,"apparent_temperature","Feels",0)].filter(Boolean)},wind(r,e,t){let i=h1(t,e,"wind_bearing");return[K2(e,t,"wind_speed","Wind",1),K2(e,t,"wind_gust_speed","Gust",1),i?v1("From",B5(i.value),`${o2(i.value)}\xB0`,"",i.entity):null].filter(Boolean)},temp_humidity(r,e,t){return[K2(e,t,"temperature","Temp",1),K2(e,t,"apparent_temperature","Feels",1),K2(e,t,"humidity","Humidity",0),K2(e,t,"dew_point","Dew point",1)].filter(Boolean)},uv_solar(r,e,t){let i=h1(t,e,"uv_index"),o=[];i&&o.push(v1("UV",o2(i.value,1),i9(i.value),ev[i9(i.value)]||"",i.entity));let a=K2(e,t,"solar_radiation","Solar",0),C=K2(e,t,"illuminance","Light",0);return[...o,a,C].filter(Boolean)},records(r,e,t,i){let o=i?._area;if(!o?.records)return[];let a=o.daily_units||{},C=(s,H)=>{let V=s&&A2(s.value,a[H],e);return V?o2(V.value,0)+V.unit:"\u2014"},n=o.records_today||{};return[v1("Today high",C(n[W1],W1),n[W1]?.date?.slice(0,4)||"","var(--wsfc-temp-color, #ff9800)"),v1("Today low",C(n[P1],P1),n[P1]?.date?.slice(0,4)||"","var(--wsfc-hum-color, #42a5f5)"),v1("All-time high",C(o.records[W1],W1),o.records[W1]?.date?.slice(0,4)||"","var(--wsfc-temp-color, #ff9800)"),v1("All-time low",C(o.records[P1],P1),o.records[P1]?.date?.slice(0,4)||"","var(--wsfc-hum-color, #42a5f5)")]},garden(r,e,t,i){let o=[],a=e.config?.unit_system?.temperature==="\xB0C",C=a?"\xB0C":"\xB0F",n=e.states[t?.entity];(i?._daily||[]).filter(L=>L.templow!=null).slice(0,3).forEach((L,d)=>{let u=A2(L.templow,n?.attributes?.temperature_unit||C,e)?.value,f=u!=null&&u<=(a?2:36);o.push(v1(d===0?"Tonight":new Intl.DateTimeFormat(e.locale?.language,{weekday:"short"}).format(new Date(L.datetime)),`${o2(u)}\xB0`,f?"frost":"low",f?"#4aa3ff":""))});let H=i?._om?.soil?.soil_temperature_6cm;H&&o.push(v1("Soil",`${o2(A2(H.value,H.unit,e)?.value,0)}${C}`,"","#8d6e63"));let V=i?._area?.growing_degree_days;return V&&o.push(v1("GDD",o2(He(V.value,i._area.daily_units?.[W1],e)?.value),"","")),o}};Object.assign(Le,{daily(r,e,t){let i=e.states[t?.entity];return(Hi(e,t?.entity,"daily")||[]).slice(0,Number(r.compact_days)||5).map((o,a)=>v1(a===0?"Today":new Intl.DateTimeFormat(e.locale?.language,{weekday:"short"}).format(new Date(o.datetime)),`${o2(w9(e,i,o.temperature))}\xB0`,o.templow!=null?`${o2(w9(e,i,o.templow))}\xB0`:"","",null))},hourly(r,e,t){let i=e.states[t?.entity],o=Date.now();return(Hi(e,t?.entity,"hourly")||[]).filter(a=>Date.parse(a.datetime)>o-36e5).slice(0,Number(r.compact_hours)||8).map(a=>v1(new Intl.DateTimeFormat(e.locale?.language,{hour:"numeric"}).format(new Date(a.datetime)),`${o2(w9(e,i,a.temperature))}\xB0`,a.precipitation_probability?`${a.precipitation_probability}%`:"",a.precipitation_probability>=50?"#1e88e5":""))},forecast(r,e,t){return Le.daily(r,e,t)},day(r,e,t){let i=e.states[t?.entity],o=Number(r.day_offset??1),a=(Hi(e,t?.entity,"daily")||[])[o];return a?[v1(o===0?"Today":o===1?"Tomorrow":new Intl.DateTimeFormat(e.locale?.language,{weekday:"long"}).format(new Date(a.datetime)),RH(e,a.condition)),v1("High",`${o2(w9(e,i,a.temperature))}\xB0`,"","var(--wsfc-temp-color, #ff9800)"),v1("Low",`${o2(w9(e,i,a.templow))}\xB0`,"","var(--wsfc-hum-color, #42a5f5)"),a.precipitation_probability!=null?v1("Rain",`${a.precipitation_probability}%`,"","#1e88e5"):null].filter(Boolean):[]},bulletin(r,e,t){let i=e.states[t?.entity];return[i?v1("Now",RH(e,i.state)):null,K2(e,t,"temperature","Temp",0),K2(e,t,"humidity","Humidity",0),K2(e,t,"wind_speed","Wind",0)].filter(Boolean)},sky_tracker(r,e){return BH(e,!0)},astronomy(r,e){return BH(e,!0)},moon(r,e){let t=s0(e),i=b3(e);return[v1("Moon",t.name,`${Math.round(t.fraction*100)}%`,"#cfd8dc"),t.rise?v1("Rise",i.format(t.rise)):null,t.set?v1("Set",i.format(t.set)):null].filter(Boolean)},health(r,e,t){let i={ok:"var(--success-color, #43a047)",warn:"var(--warning-color, #ffa600)",bad:"var(--error-color, #db4437)"};return si(t,e,r).flatMap(o=>o.rows.filter(a=>a.kind!=="id").map(a=>v1(a.name,a.st?.state??"\u2014",a.st?.attributes?.unit_of_measurement||"",i[a.level]||"",a.eid))).slice(0,8)}});var R7=new Set(Object.keys(Le)),b9=new Set(["vpd","frost_watch","records","garden"]);function le(r,e,t,i){try{return(Le[r.type]?.(r,e,t,i)||[]).filter(Boolean)}catch{return[]}}var ce=Q`
  .compact { display: flex; align-items: center; gap: calc(6px * var(--wsfc-sx, 1)); min-width: 0; overflow-x: auto; scrollbar-width: none; }
  .compact::-webkit-scrollbar { display: none; }
  .compact.tap { cursor: pointer; }
  .compact > ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-head-icon, var(--secondary-text-color)); flex: 0 0 auto; margin-right: 2px; }
  .compact > .ct { font-size: 13px; font-weight: 500; white-space: nowrap; flex: 0 0 auto; margin-right: 4px; }
  .ctile { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; padding: calc(4px * var(--wsfc-sy, 1)) calc(10px * var(--wsfc-sx, 1)) calc(4px * var(--wsfc-sy, 1)) calc(8px * var(--wsfc-sx, 1));
    border-radius: 10px; background: rgba(127, 127, 127, 0.1); line-height: 1.15; }
  .ctile .dot { width: 9px; height: 9px; border-radius: 50%; flex: 0 0 auto; background: var(--c); }
  .ctile .n { display: block; font-size: 10px; color: var(--secondary-text-color); white-space: nowrap; }
  .ctile .v { display: block; font-size: 14px; font-weight: 600; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .ctile .v small { font-size: 11px; font-weight: 400; color: var(--secondary-text-color); margin-left: 3px; }
  .compact .empty { font-size: 12px; color: var(--secondary-text-color); }
`;function Me(r,{icon:e,title:t,onTap:i,onTile:o}){return p`<div class="compact ${i?"tap":""}" role=${i?"button":h} tabindex=${i?"0":h}
      aria-label=${i?`${t}: show the full panel`:t}
      @click=${i||h} @keydown=${i?a=>(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i()):h}>
    ${e?p`<ha-icon icon=${e} title=${t}></ha-icon>`:h}
    ${t?p`<span class="ct">${t}</span>`:h}
    ${r.length?r.map(a=>p`<div class="ctile" style=${a.color?`--c:${a.color}`:""} title=${[a.label,a.value,a.unit].filter(Boolean).join(" ")}
          @click=${!i&&a.entity?C=>{C.stopPropagation(),o(a.entity)}:h}>
          ${a.color?p`<span class="dot"></span>`:h}
          <span><span class="n">${a.label}</span><span class="v">${a.value}${a.unit?p`<small>${a.unit}</small>`:h}</span></span>
        </div>`):p`<span class="empty">Loading…</span>`}
  </div>`}var y9=class extends q{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let e=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",e?`${e}px`:"")}render(){let e=this.config?.panels||[];if(!e.some(a=>a&&H0[a.type]))return p`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let t=this.config?.direction==="vertical",i=String(this.hiddenKids||"").split(","),o=t&&Number(this.config?.rows)>0;return e.map((a,C)=>{if(!a||!H0[a.type]||i[C]==="true")return h;let n=T1(a);if(!n)return h;let s=Number(a.grow??(t?a.rows||o?1:0:1)),H=Number(a.rows??0),V=[`--grow:${s}`,a.min_width?`--basis:${a.min_width}px`:"",t&&H?`min-height:calc(${H} * var(--wsfc-row, 110px) + ${H-1} * var(--wsfc-gap, 12px))`:""].join(";"),L=n.bare||a.type==="stack",d=[a.tile_shadow===!1?"no-shadow":"",a.tile_border===!1?"no-border":"",a.tile_glow===!1?"no-glow":""].join(" "),u=this.card,f=`${this.path}.${C}`,v=!!u&&u._canCollapse(a)&&u._focus==null,x=v&&u._isCollapsed(a,f),w=this._el(a,C);u&&(u._foldDecorate(w,a,f,x),w.autostart=v);let y=()=>u._toggleCollapse(a,f),b=v?p`<button class="fold" type="button" @click=${$=>{$.stopPropagation(),y()}} aria-expanded=${String(!x)}
            aria-label=${`${x?"Expand":"Collapse"} ${a.title||n.label}`} title=${x?"Show":"Collapse to its title"}>
            <ha-icon icon=${u._foldIcon(a,x)}></ha-icon></button>`:h,E=v?u._foldColors(a,x):"";if(x&&u._viewOf(a)==="compact"){let $=le(a,u.hass,u._station,b9.has(a.type)?w:null),D=a.compact_expand===!1;return p`<section data-j=${C} class="tile ${a.type} folded ctile-row ${D?"can-fold":""} ${d}" style=${`${V};${E}`}>
          ${D?b:h}${Me($,{icon:a.show_icon===!1||a.compact_icon===!1?null:a.icon||n.icon,title:a.compact_title!==!1?a.title||n.label:"",onTap:a.compact_expand!==!1?y:null,onTile:k=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:k},bubbles:!0,composed:!0}))})}
          ${b9.has(a.type)?p`<div class="chide" aria-hidden="true">${w}</div>`:h}
        </section>`}let F=v&&u._collapseOpt(a,"collapse_title_tap",!0);return p`<section data-j=${C} class="tile ${a.type} ${L?"bare":""} ${d} ${x?"folded":""} ${v?"can-fold":""}" style=${`${V};${E}`}
        @click=${F?$=>u._titleTap($,a,f):h}>${b}${w}</section>`})}_el(e,t){let i=`${t}:${JSON.stringify(e)}`,o=this._els.get(i);if(!o){o=document.createElement(T1(e).tag);for(let a of this._els.keys())a.startsWith(`${t}:`)&&this._els.delete(a);this._els.set(i,o)}return o.config=e,o.station=this.station,this.card||(o.lite=this.lite),o.hass=this.hass,o}};Z(y9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},hiddenKids:{attribute:!1},card:{attribute:!1},path:{attribute:!1},foldKids:{attribute:!1}}),Z(y9,"styles",[t6,ce,Q`
      .tile { position: relative; }
      .tile.folded { flex-grow: 0 !important; min-height: 0 !important; }
      .tile.ctile-row { padding-top: 8px; padding-bottom: 8px; justify-content: center; }
      .tile .chide { display: none; }
      .fold { position: absolute; top: 4px; right: 4px; z-index: 5; border: 0; background: transparent; cursor: pointer; padding: 6px; border-radius: 50%; line-height: 0;
        color: var(--wsfc-head-icon, var(--secondary-text-color)); }
      .fold ha-icon { --mdc-icon-size: 24px; }
      .fold:hover { background: rgba(127, 127, 127, 0.18); }
      .fold:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .tile.can-fold > :not(.fold) { --wsfc-head-pad: 40px; }
      .tile.ctile-row.can-fold .compact { padding-right: 36px; }
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",y9);var Q0=t4(H7(),1);var NH=180/Math.PI;var tv=r=>r instanceof Date&&!isNaN(r),S9=class extends q{render(){if(!this.hass)return h;let{latitude:e,longitude:t}=this.hass.config||{};if(e==null)return p`${s1(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,o=new Date(i);o.setHours(12,0,0,0);let a=Q0.getTimes(o,e,t),C=Q0.getMoonTimes(i,e,t),n=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),s=L=>tv(L)?n.format(L):"\u2014",H=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",C.rise,C.set,!0]],V=this.config||{};return p`
      ${s1(V,"mdi:telescope","Astronomy")}
      ${V.fact_position==="above"?$7(this.hass,V,void 0,!0):h}
      <div class="wrap">
        ${V.show_chart===!1?h:p`<div class="chart">${this._chart(e,t,i)}</div>`}
        <div class="side">
          ${V.show_table===!1?h:p`<table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${H.map(([L,d,u,f])=>p`<tr class=${f?"main":""}><td>${L}</td>
              <td>${L==="Moon"&&C.alwaysUp?"up all day":L==="Moon"&&C.alwaysDown?"down all day":s(d)}</td>
              <td>${L==="Moon"&&(C.alwaysUp||C.alwaysDown)?"":s(u)}</td></tr>`)}
          </table>`}
          ${(V.fact_position||"below")==="below"?$7(this.hass,V,void 0,!0):h}
        </div>
      </div>
    `}_chart(e,t,i){let H=new Date(i);H.setHours(0,0,0,0);let V=96,L=864e5/V,d=D=>70-D/90*58,u=D=>{let k="";for(let P=0;P<=V;P++){let N=new Date(H.getTime()+P*L);k+=`${P?"L":"M"}${(P/V*300).toFixed(1)} ${d(D(N)).toFixed(1)}`}return k},f=D=>Q0.getPosition(D,e,t).altitude*NH,v=D=>Q0.getMoonPosition(D,e,t).altitude*NH,x=(i-H)/864e5*300,w=f(i),y=v(i),b=[0,6,12,18,24],E=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),F="var(--wsfc-sun-color, #fdd835)",$="var(--wsfc-moon-color, #b0bec5)";return c1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${b.map(D=>c1`<line x1=${D/24*300} x2=${D/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,D/24*300))} y=${144} text-anchor="middle">${E.format(new Date(H.getTime()+D*36e5))}</text>`)}
      <path d=${u(v)} fill="none" stroke=${$} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${u(f)} fill="none" stroke=${F} stroke-width="2.2" opacity=".35"></path>
      <path d=${u(f)} fill="none" stroke=${F} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${x} x2=${x} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${x} cy=${d(y)} r="5" fill=${$} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${x} cy=${d(w)} r="7" fill=${F} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${F}>Sun ${Math.round(w)}°</text>
      <text class="lbl" x="4" y=${32} fill=${$}>Moon ${Math.round(y)}°</text>
    </svg>`}};Z(S9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(S9,"styles",[M1,s9,Q`
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
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",S9);var rv={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function iv(r,e){let t=Number(r.latitude??e?.config?.latitude??39.5),i=Number(r.longitude??e?.config?.longitude??-98.35),o=e?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(o?"in":"mm"),metricTemp:r.temp_unit||(o?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(o?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:t.toFixed(3),lon:i.toFixed(3),detailLat:t.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var Z9=class extends q{render(){if(!this.hass)return h;let e=this.config||{},t=iv(e,this.hass);t!==this._url&&(this._url=t),this._on===void 0&&(this._on=!!this.autostart||!e.start_paused),this.autostart&&!this.lite&&this._wasLite&&(this._on=!0),this._wasLite=!!this.lite;let i=`${rv[e.overlay||"wind"]||"Wind"} map`,o=e.start_paused&&this._on&&!this.lite?p`<button class="stop" type="button" @click=${()=>this._on=!1} aria-label="Stop the Windy map" title="Stop"><ha-icon icon="mdi:stop"></ha-icon></button>`:h,a=s1(e,"mdi:weather-windy",e.title||i,o);return this.lite?p`${a}${o6("mdi:map-marker-radius-outline","Windy map")}`:this._on?p`${a}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`:p`${a}
        <div class="frame"><button class="start" type="button" @click=${()=>this._on=!0} aria-label=${`Load the animated ${i}`}>
          <span class="pb"><ha-icon icon="mdi:play"></ha-icon></span><span>${i} — press play to load</span>
        </button></div>`}};Z(Z9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},autostart:{attribute:!1},_on:{state:!0}}),Z(Z9,"styles",[M1,i6,Q`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
      .start { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; width: 100%;
        border: 0; cursor: pointer; color: var(--wsfc-muted); font: inherit; font-size: 13px;
        background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
      .start .pb { display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: var(--primary-color); color: var(--text-primary-color, #fff); }
      .start .pb ha-icon { --mdc-icon-size: 32px; }
      .start:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; }
      button.stop { display: inline-grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 50%; cursor: pointer;
        background: rgba(127, 127, 127, 0.15); color: var(--primary-text-color); }
      button.stop ha-icon { --mdc-icon-size: 18px; }
      button.stop:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",Z9);var Y0={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},air_quality:{title:"Air quality",icon:"mdi:air-filter",metrics:["aqi","pm2_5"],card:{days_to_show:2,period:"hour",chart_type:"line",stat_types:["mean","max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}},de={temps:{card:{hours_to_show:36,points_per_hour:4},series:{temperature:{color:"#ff7043",fill_opacity:.25,show_extrema:"always"},apparent_temperature:{color:"#ffb74d",show_fill:!1,line_style:"dashed",line_width:1.5},dew_point:{color:"#26c6da",show_fill:!1,line_width:1.5}}},wind:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0,lower_bound_secondary:0,upper_bound_secondary:360},metrics:["wind_speed","wind_gust_speed","wind_bearing"],series:{wind_speed:{color:"#42a5f5",aggregate_func:"avg",show_fill:!1,show_extrema:"always",show_extrema_min:!1},wind_gust_speed:{color:"#ff9800",aggregate_func:"max",fill_opacity:.2,line_width:1,show_extrema:"always",show_extrema_min:!1},wind_bearing:{color:"#9e9e9e",y_axis:"secondary",show_fill:!1,line_width:1,smooth:!1,graph_type:"step",unit:"\xB0"}}},pressure_humidity:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0},series:{pressure:{color:"#42a5f5",show_fill:!1,decimals:2},humidity:{color:"#26a69a",y_axis:"secondary",fill_opacity:.2}}},solar_uv:{card:{hours_to_show:24,points_per_hour:4,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{solar_radiation:{color:"#ffd54f",fill_opacity:.3,show_extrema:"always",show_extrema_min:!1},uv_index:{color:"#ff7043",y_axis:"secondary",aggregate_func:"max",show_fill:!1,line_width:2}}},rain:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{rain_rate:{color:"#7e57c2",graph_type:"bar",aggregate_func:"max",decimals:2},rain_today:{color:"#1e88e5",y_axis:"secondary",aggregate_func:"max",fill_opacity:.2,decimals:2,smooth:!1}}},air_quality:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{aqi:{color:"#66bb6a",fill_opacity:.2,show_extrema:"always",show_extrema_min:!1,decimals:0},pm2_5:{color:"#ffb74d",y_axis:"secondary",show_fill:!1,decimals:1}}},temperature_range:{card:{hours_to_show:720,group_by:"date"},series:{temperature:{color:"#ff7043",show_range_band:!0,show_fill:!1,show_extrema:"always"}}}};function Vi(r){let e=r?.engine||"auto";return e==="builtin"?"builtin":e==="sgcc"||customElements.get("statistics-graph-chart-card")?"sgcc":"builtin"}function ov(r,e,t){return Vi(r)==="sgcc"?av(r,e,t):Cv(r,e,t)}function av(r,e,t){let i=de[r.preset]||de.temps,o=Y0[r.preset]||Y0.temps,a=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics||o.metrics,C=Array.isArray(r.entities)&&r.entities.length?r.entities:a.map(s=>{let H=l1(s,e,t,r.entity_overrides?.[s]);if(!H)return null;let V=r.colors?.[s];return{entity:H,name:S1[s]?.label||s,...i.series?.[s]||{},...V?{color:V}:{}}}).filter(Boolean),n={type:"custom:statistics-graph-chart-card",card_header:"",card_shadow:!1,card_border:!1,card_background_color:"transparent",card_padding:0,height:"auto",show_legend:!0,...i.card,entities:C};return C.some(s=>s.y_axis==="secondary")||(delete n.show_y2_axis,delete n.lower_bound_secondary,delete n.upper_bound_secondary),r.days_to_show!=null&&(n.hours_to_show=Number(r.days_to_show)*24),r.hours_to_show!=null&&(n.hours_to_show=Number(r.hours_to_show)),s2(n,r.card||{})}function Cv(r,e,t){let i=Y0[r.preset]||Y0.temps,o=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:o.map(n=>{let s=l1(n,e,t,r.entity_overrides?.[n]);return s?{entity:s,name:S1[n]?.label||n}:null}).filter(Boolean),C={type:"statistics-graph",...i.card,entities:a};for(let n of["days_to_show","period","chart_type","stat_types","hide_legend"])r[n]!=null&&(C[n]=r[n]);return s2(C,r.card||{})}var k9=class extends q{connectedCallback(){super.connectedCallback(),customElements.get("statistics-graph-chart-card")||customElements.whenDefined("statistics-graph-chart-card").then(()=>this.requestUpdate())}render(){if(!this.hass)return h;let e=this.config||{},t=Y0[e.preset]||Y0.temps,i=ov(e,this.station,this.hass);return i.entities?.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),p`${e.show_title===!1?h:s1(e,t.icon,t.title)}
      ${this._err?p`<div class="note">${this._err}</div>`:p`<div class="host">${this._el||h}</div>`}`):p`${s1(e,t.icon,t.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(e){let t=JSON.stringify(e);if(t!==this._json){this._json=t;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._json!==t)return;this._el=i.createCardElement(e),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};Z(k9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),Z(k9,"styles",[M1,Q`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",k9);var nv={up:"mdi:arrow-top-right",down:"mdi:arrow-bottom-right",flat:"mdi:arrow-right"},sv={up:"rising tomorrow",down:"falling tomorrow",flat:"same tomorrow"},O9=class extends q{shouldUpdate(e){if(e.size!==1||!e.has("hass"))return!0;let t=e.get("hass");return!t||!this._ids||t.entities!==this.hass.entities?!0:this._ids.some(i=>t.states[i]!==this.hass.states[i])}render(){if(!this.hass)return h;let e=this.config||{},t=k7(e,this.hass);if(this._ids=t.entities,!t.total)return p`${s1(e,"mdi:flower-pollen","Pollen")}
        <div class="note">No pollen sensors found. Install the Pollen Levels integration from HACS (Google Pollen API — US and worldwide), or list sensors under this panel's options.</div>`;let i=[t.source,t.town,t.status].filter(Boolean);return p`
      ${s1(e,"mdi:flower-pollen","Pollen")}
      <div class="hdr">${i.join(" \xB7 ")}</div>
      <div class="rows">${t.rows.map(o=>p`
        <div class="row ${o.level}" @click=${()=>u1(this,o.entity)} role="button" tabindex="0"
          @keydown=${a=>(a.key==="Enter"||a.key===" ")&&u1(this,o.entity)}
          aria-label="${o.name}: ${Z7[o.level]}${o.value!=null?`, ${o.value} of 5`:""}${o.trend?`, ${sv[o.trend]}`:""}">
          <ha-icon icon=${o.icon}></ha-icon>
          <span class="nm">${o.name}</span>
          <span class="bar"><i style="width:${o.pct}%"></i></span>
          <span class="chip">${Z7[o.level]}</span>
          <span class="val">${o.value??"\u2014"}</span>
          ${e.show_tomorrow!==!1&&o.trend?p`<ha-icon class="tr ${o.trend}" icon=${nv[o.trend]} title=${`Tomorrow: ${o.tomorrow??"\u2014"}`}></ha-icon>`:p`<span></span>`}
        </div>`)}
      </div>
      ${e.show_season===!1?h:p`<div class="slabel">Season</div><div class="strip" role="img" aria-label="Pollen season by month">
        ${t.strip.map((o,a)=>p`<span class="m ${o?`c${Math.min(o,3)}`:""} ${a+1===t.month?"now":""}"
          title="${F8[a]}: ${o} species in season"><i></i>${F8[a][0]}</span>`)}
      </div>`}
    `}};Z(O9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(O9,"styles",[M1,Q`
      .hdr { font-size: 14px; color: var(--secondary-text-color); margin: 0 0 4px; }
      /* One grid for all rows so the bars and chips line up. */
      .rows { display: grid; grid-template-columns: 22px minmax(56px, max-content) minmax(calc(40px * var(--wsfc-sx, 1)), 1fr) max-content 2ch 16px; align-items: center; column-gap: calc(12px * var(--wsfc-sx, 1)); font-size: 14px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; cursor: pointer; padding: calc(8px * var(--wsfc-sy, 1)) 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); }
      .row:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .row ha-icon { --mdc-icon-size: 18px; color: var(--wsfc-muted); }
      .nm { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar { height: 6px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); overflow: hidden; }
      .bar i { display: block; height: 100%; border-radius: 3px; background: var(--c); }
      .chip { font-size: 12px; padding: calc(2px * var(--wsfc-sy, 1)) calc(10px * var(--wsfc-sx, 1)); border-radius: 999px; white-space: nowrap; text-align: center;
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
      .slabel { font-size: 13px; color: var(--secondary-text-color); margin-top: calc(12px * var(--wsfc-sy, 1)); }
      .strip { display: grid; grid-template-columns: repeat(12, 1fr); gap: calc(4px * var(--wsfc-sx, 1)); margin-top: calc(4px * var(--wsfc-sy, 1)); }
      .m { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 11px; color: var(--secondary-text-color); }
      .m i { width: 100%; height: 10px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); box-sizing: border-box; }
      .m.c1 i { background: #43a047; }
      .m.c2 i { background: #f2a81d; }
      .m.c3 i { background: #d93f37; }
      .m.now i { outline: 2px solid var(--primary-text-color); outline-offset: 0; }
    `]);customElements.get("wsfc-panel-pollen")||customElements.define("wsfc-panel-pollen",O9);var IH={long:{weekday:"long",month:"long",day:"numeric"},medium:{weekday:"short",month:"short",day:"numeric"},short:{month:"numeric",day:"numeric"},weekday:{weekday:"long"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}};function Hv(r,e){let t=r?.time_format||"auto";if(t==="12")return!0;if(t==="24")return!1;let i=e?.locale?.time_format;if(i==="12")return!0;if(i==="24")return!1}function Vv(r,e,t=new Date){let i=e?.locale?.language||e?.language||void 0,o=Hv(r,e),a=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",...r?.show_seconds?{second:"2-digit"}:{},...o!=null?{hour12:o}:{}}),C=new Intl.DateTimeFormat(i,IH[r?.date_format]||IH.medium);return{time:a.format(t),date:C.format(t)}}function Lv(r,e,t,i,o=1,a=.3){let C=Math.max(4,String(t).length),n=r*.92/(C*.56);return e>0&&(n=Math.min(n,e*.9/(i?1.25+a:1.1))),n=Math.max(14,n*o),{time:Math.round(n),date:Math.round(Math.max(8,n*a))}}var $9=class extends q{constructor(){super(),this._now=new Date}connectedCallback(){super.connectedCallback(),this._tick(),this._ro=new ResizeObserver(([e])=>{let{width:t,height:i}=e.contentRect,o=`${Math.round(t)}:${Math.round(i)}`;o!==this._dimKey&&(this._dimKey=o,this._dims={w:t,h:i})}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),this._ro?.disconnect()}_tick(){clearTimeout(this._timer),this._now=new Date;let e=this.config?.show_seconds?1e3-this._now.getMilliseconds():6e4-(this._now.getSeconds()*1e3+this._now.getMilliseconds());this._timer=setTimeout(()=>this._tick(),e+20)}updated(e){e.has("config")&&this._tick()}shouldUpdate(e){return!(e.size===1&&e.has("hass")&&e.get("hass"))}render(){if(!this.hass)return h;let e=this.config||{},t=e.show_time!==!1,i=e.show_date!==!1,{time:o,date:a}=Vv(e,this.hass,this._now),{w:C=300,h:n=0}=this._dims||{},s=e.auto_size!==!1,H=s?Lv(C,n,t?o:a,t&&i,Number(e.scale??100)/100,Math.max(.1,Math.min(1,Number(e.date_scale??30)/100))):{time:Number(e.time_size)||48,date:Number(e.date_size)||16},V=t?H.date:s?H.time*.6:H.date;return p`<div class="clock ${e.align||"center"}" role="timer" aria-live="off" aria-label=${[t?o:"",i?a:""].filter(Boolean).join(", ")}>
      ${t?p`<span class="time" style="font-size:${H.time}px;font-weight:${e.time_weight||300};${e.color?`color:${e.color};`:""}">${o}</span>`:h}
      ${i?p`<span class="date" style="font-size:${Math.round(V)}px;${e.date_color?`color:${e.date_color};`:""}">${a}</span>`:h}
    </div>`}};Z($9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_now:{state:!0},_dims:{state:!0}}),Z($9,"styles",[M1,Q`
      /* The text is laid over the panel's box, so its size never feeds back into the box it's measured from. */
      :host { position: relative; min-height: 60px; flex: 1 1 auto; }
      .clock { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; line-height: 1.05; font-variant-numeric: tabular-nums; overflow: hidden; }
      .time { white-space: nowrap; letter-spacing: -0.01em; }
      .date { color: var(--secondary-text-color); white-space: nowrap; margin-top: 0.15em; }
      .left { align-items: flex-start; text-align: left; }
      .center { align-items: center; text-align: center; }
      .right { align-items: flex-end; text-align: right; }
    `]);customElements.get("wsfc-panel-clock")||customElements.define("wsfc-panel-clock",$9);var lv=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function cv(r,e,t,i){let o=Number(r?.config?.latitude),a=Number(r?.config?.longitude);if(![o,a,e,t].every(Number.isFinite))return null;let C=(e-o)*111.32,n=(t-a)*111.32*Math.cos(o*Math.PI/180),s=Math.hypot(n,C),H=lv[Math.round((Math.atan2(n,C)*180/Math.PI+360)%360/22.5)%16];return{dist:i?s:s*.621371,unit:i?"km":"mi",dir:H}}var WH=r=>r?new Date(`${r}T12:00:00`):null,T9=class extends q{updated(e){(e.has("hass")||e.has("config"))&&this._load()}_ids(){let e=this.station,t=this.hass,i=this.config||{};return{temp:i.temperature_entity||l1("temperature",e,t),gust:i.gust_entity||l1("wind_gust_speed",e,t),rain:i.rain_entity||l1("rain_today",e,t)}}async _load(){if(!(!this.hass||this._loading||this._loadedAt&&Date.now()-this._loadedAt<5*6e4)){this._loading=!0;try{let e=this._ids();if(this.config?.show_station!==!1){let t=await q0(this.hass,Object.values(e),3650,"day"),i=C=>C&&t[C]||[],o=(C,n,s)=>i(C).reduce((H,V)=>V[n]!=null&&(!H||s(V[n],H.value))?{value:V[n],t:V.t}:H,null),a=Math.min(...Object.values(e).map(C=>i(C)[0]?.t??1/0));this._own={since:Number.isFinite(a)?a:null,days:Math.max(0,...Object.values(e).map(C=>i(C).length)),warmest:o(e.temp,"max",(C,n)=>C>n),coldest:o(e.temp,"min",(C,n)=>C<n),gust:o(e.gust,"max",(C,n)=>C>n),wettest:o(e.rain,"max",(C,n)=>C>n&&C>0)}}if(this._area=await D7(this.hass,this.config||{}),e.temp){let i=((await X8(this.hass,[e.temp]))[e.temp]||[]).map(o=>o.v).filter(o=>o!=null);this._today=i.length?{high:Math.max(...i),low:Math.min(...i)}:null}this._loadedAt=Date.now()}catch{}finally{this._loading=!1}}}shouldUpdate(e){return!this._loadedAt||Date.now()-this._loadedAt>5*6e4?!0:!j2(e,this.hass,[...Object.values(this._ids()),P7(this.hass,this.config||{})])}render(){if(!this.hass)return h;let e=this.config||{},t=this.hass.locale?.language,i=new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}),o=new Intl.DateTimeFormat(t,{day:"numeric",month:"long"}),a=new Intl.DateTimeFormat(t,{month:"long"}),C=e.area_source==="off"?null:this._area,n=C?.daily_units||{},s=this._own,H=s&&s.days>0&&(s.warmest||s.coldest),V=this.hass.config?.unit_system?.temperature==="\xB0C",L=(k,P,N)=>{let I=P&&A2(P.value,n[k],this.hass);return I?`${J(I.value,N??(k===K1?V?0:2:k===b5?0:1))} ${I.unit}`:"\u2014"},d=(k,P)=>P?A2(P.value,n[k],this.hass)?.value:null,u=k=>k?.date?k.date.slice(0,4):"",f=k=>k?.date?i.format(WH(k.date)):"",v=(k,P,N,I="")=>p`<div class="row ${I}"><span>${k}</span><b>${P}</b>${N?p`<small>${N}</small>`:h}</div>`,x=(k,P)=>p`
      ${v("Warmest",L(W1,k[W1]),P(k[W1]),"hot")}
      ${v("Coldest",L(P1,k[P1]),P(k[P1]),"cold")}
      ${k[b5]!==void 0?v("Strongest gust",L(b5,k[b5]),P(k[b5])):h}
      ${v("Wettest day",k[K1]?L(K1,k[K1]):"None yet",P(k[K1]))}`,w=C?.kind==="modelled"?"Open-Meteo (modelled)":C?.station_name,y=h,b=C?.records_today,E=this._today;if(e.show_badge!==!1&&b&&E&&b.years>=5){let k=o.format(new Date),P=(C.since||"").slice(0,4),N=d(W1,b[W1]),I=d(P1,b[P1]);N!=null&&E.high>N?y=p`<div class="badge"><ha-icon icon="mdi:thermometer-high"></ha-icon>Warmest ${k} ${C.kind==="modelled"?"in Open-Meteo's history":`at ${C.station_name}`} since ${P}</div>`:I!=null&&E.low<I&&(y=p`<div class="badge cold"><ha-icon icon="mdi:snowflake-thermometer"></ha-icon>Coldest ${k} ${C.kind==="modelled"?"in Open-Meteo's history":`at ${C.station_name}`} since ${P}</div>`)}let F=e.show_station!==!1&&H?p`<div class="sec"><h4>This station <small>since ${i.format(new Date(s.since))}</small></h4>
          ${v("Warmest",s.warmest?`${J(s.warmest.value,1)} ${this._unit("temp",V?"\xB0C":"\xB0F")}`:"\u2014",s.warmest&&i.format(new Date(s.warmest.t)),"hot")}
          ${v("Coldest",s.coldest?`${J(s.coldest.value,1)} ${this._unit("temp",V?"\xB0C":"\xB0F")}`:"\u2014",s.coldest&&i.format(new Date(s.coldest.t)),"cold")}
          ${s.gust?v("Strongest gust",`${J(s.gust.value,0)} ${this._unit("gust",V?"km/h":"mph")}`,i.format(new Date(s.gust.t))):h}
          ${s.wettest?v("Wettest day",`${J(s.wettest.value,V?0:2)} ${this._unit("rain",V?"mm":"in")}`,i.format(new Date(s.wettest.t))):h}
        </div>`:h,$=h;if(C?.records){let k=cv(this.hass,Number(C.latitude),Number(C.longitude),V),P=k&&C.kind!=="modelled"?`, ${J(k.dist,1)} ${k.unit} ${k.dir}`:"";$=p`
        ${e.show_today!==!1&&b?p`<div class="sec"><h4>${o.format(new Date)} <small>${b.years} years</small></h4>
          ${v("Record high",L(W1,b[W1]),u(b[W1]),"hot")}
          ${v("Record low",L(P1,b[P1]),u(b[P1]),"cold")}
          ${b[K1]?v("Wettest",L(K1,b[K1]),u(b[K1])):h}
        </div>`:h}
        ${e.show_month!==!1&&C.records_month?p`<div class="sec"><h4>${a.format(new Date(2e3,(C.records_month.month||1)-1,15))}</h4>${x(C.records_month,f)}</div>`:h}
        ${e.show_all_time!==!1?p`<div class="sec"><h4>All-time <small>since ${(C.since||"").slice(0,4)}</small></h4>${x(C.records,f)}</div>`:h}
        ${e.show_source!==!1?p`<div class="src" @click=${()=>C.entity&&u1(this,C.entity)}>Area records: ${w}${P} · ${C.source}${C.through?` \xB7 through ${i.format(WH(C.through))}`:""}${C.kind==="modelled"?" \xB7 model estimates smooth out extremes":""}</div>`:h}`}let D=h;if(!C?.records&&!H){let k=P7(this.hass,e),P=k&&this.hass.states[k].attributes?.error;D=p`<div class="note">${P?p`Area records unavailable: ${P}`:this._loadedAt?p`No records yet. Your station's own records appear as Home Assistant collects daily statistics.`:p`Loading records…`}</div>`}return p`${s1(e,"mdi:trophy-outline","Weather records")}${y}${F}${$}${D}`}_unit(e,t){let i=this._ids()[e];return this.hass?.states?.[i]?.attributes?.unit_of_measurement||t}};Z(T9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_own:{state:!0},_today:{state:!0},_area:{state:!0}}),Z(T9,"styles",[M1,Q`
      .sec { margin-top: 10px; }
      .sec:first-of-type { margin-top: 0; }
      .sec h4 { margin: 0 0 4px; font-size: 12px; font-weight: 600; color: var(--wsfc-muted); text-transform: uppercase; letter-spacing: 0.04em; display: flex; gap: 6px; align-items: baseline; }
      .sec h4 small { text-transform: none; letter-spacing: 0; font-weight: 400; }
      .row { display: grid; grid-template-columns: 1fr auto; gap: 2px 10px; align-items: baseline; padding: 4px 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
      .row:last-child { border-bottom: 0; }
      .row span { font-size: 13px; }
      .row b { font-size: 16px; font-weight: 600; font-variant-numeric: tabular-nums; text-align: right; }
      .row small { grid-column: 2; text-align: right; font-size: 11px; color: var(--wsfc-muted); margin-top: -2px; }
      .row.hot b { color: var(--wsfc-temp); }
      .row.cold b { color: var(--wsfc-hum); }
      .badge { display: inline-flex; gap: 6px; align-items: center; margin: 0 0 8px; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
        background: color-mix(in srgb, var(--wsfc-temp) 22%, transparent); }
      .badge.cold { background: color-mix(in srgb, var(--wsfc-hum) 22%, transparent); }
      .badge ha-icon { --mdc-icon-size: 16px; }
      .src { margin-top: 8px; font-size: 11px; color: var(--wsfc-muted); line-height: 1.4; cursor: pointer; }
      .note { font-size: 13px; color: var(--wsfc-muted); line-height: 1.45; }
      .note code { font-size: 12px; }
    `]);customElements.get("wsfc-panel-records")||customElements.define("wsfc-panel-records",T9);var V0=(r,e=0)=>r==null||!Number.isFinite(Number(r))?null:Number(r).toFixed(e).replace(/\.0+$/,t=>e?t:""),E3=(r,e)=>r?`${V0(r.value,e)}${r.unit&&!/^°/.test(r.unit)?` ${r.unit}`:r.unit||""}`:null;function Mv(r,e){let t=h1(e,r,"temperature"),i=r.states[e?.entity],o=i?.state?r.localize?.(`component.weather.entity_component._.state.${i.state}`)||i.state.replace(/-/g," "):null;return[E3(t,0),o].filter(Boolean).join(" \xB7 ")||null}var pe={lightning(r,e,t){let i=z5(r,t,e),o=d1(e,i.count),a=d1(e,i.distance),C=o&&Number.isFinite(o.value)?o.value:null;if(C===0)return"No strikes today";let n=a&&Number.isFinite(a.value)?/mi/i.test(a.unit)?a.value*1.609344:a.value:null,s=e.config?.unit_system?.length!=="km";return[C!=null?`${C} strike${C===1?"":"s"} today`:null,n!=null?`latest ${s?`${V0(n/1.609344)} mi`:`${V0(n)} km`}`:null].filter(Boolean).join(" \xB7 ")||null},rain(r,e,t){let i=d1(e,l1("rain_today",t,e)),o=d1(e,l1("rain_rate",t,e)),a=e.config?.unit_system?.temperature==="\xB0C"?1:2;return[o&&o.value>0?`raining ${E3(o,a)}`:null,i?`today ${E3(i,a)}`:null].filter(Boolean).join(" \xB7 ")||null},wind(r,e,t){let i=h1(t,e,"wind_speed"),o=h1(t,e,"wind_gust_speed"),a=h1(t,e,"wind_bearing");return i?`${E3(i,0)}${a?` from ${B5(a.value)}`:""}${o?`, gust ${V0(o.value)}`:""}`:null},temp_humidity(r,e,t){return[E3(h1(t,e,"temperature"),1),E3(h1(t,e,"humidity"),0)].filter(Boolean).join(" \xB7 ")||null},uv_solar(r,e,t){let i=h1(t,e,"uv_index"),o=h1(t,e,"solar_radiation");return[i?`UV ${V0(i.value,1)}`:null,E3(o,0)].filter(Boolean).join(" \xB7 ")||null},vpd(r,e,t,i){let o=i?._value?.();return o?`${V0(o.kpa,2)} kPa`:null},frost_watch(r,e,t,i){return i?.shadowRoot?.querySelector(".box .t")?.textContent?.trim()||null},air_quality(r,e,t){let i=d1(e,r.entities?.aqi||_3(t,e,"aqi"));if(!i||!Number.isFinite(i.value))return null;let o=w3(i.value);return`AQI ${V0(i.value)}${o!=null&&o>=0&&f2[o]?.name?` \xB7 ${f2[o].name}`:""}`},pollen(r,e,t,i){return i?.shadowRoot?.querySelector(".hdr")?.textContent?.split("\xB7").pop()?.trim()||null},records(r,e,t,i){let o=i?._area?.records_today;return o?.temperature_2m_max?`record today ${V0(o.temperature_2m_max.value)}\xB0 (${o.temperature_2m_max.date.slice(0,4)})`:null},garden(r,e,t,i){let o=i?.shadowRoot?.querySelector(".nights .n b");return o?`tonight ${o.textContent}`:null},radar(r,e,t,i){return i?._frameLabel?`radar ${i._frameLabel}`:null},health(r,e,t){return h1(t,e,"temperature")?"station online":"station offline"}};for(let r of["forecast","hourly","daily","day","bulletin","sky_tracker","astronomy","moon","wind_map","graph","statistics","card"])pe[r]||(pe[r]=(e,t,i)=>Mv(t,i));function UH(r,e,t,i,o){if(!t||e==="off")return"";if(e==="entity"||e!=="summary"&&r.collapsed_entity){let a=r.collapsed_entity&&t.states[r.collapsed_entity];if(a){let C=Number(a.state),n=Number.isFinite(C)?V0(C,Math.abs(C)<10&&!Number.isInteger(C)?1:0):a.state,s=a.attributes?.unit_of_measurement;return`${r.collapsed_label?`${r.collapsed_label} `:""}${n}${s?/^°/.test(s)?s:` ${s}`:""}`}if(e==="entity")return""}try{return(pe[r.type]?.(r,t,i,o)||"").trim()}catch{return""}}var B7=["picture-in-picture-top-right","open-in-new","resize","image-size-select-large","dock-window"],z7=["fullscreen","arrow-expand-all"];var dv=r=>r?.unit==="\xB0F"?(r.value-32)*5/9:r?.value,ue=r=>r?.unit==="\xB0C"?r.value*9/5+32:r?.value,pv=r=>{if(!r)return null;let e=String(r.unit||"").toLowerCase();return e==="km/h"?r.value/1.609344:e==="m/s"?r.value*2.236936:e==="kn"||e==="kt"?r.value*1.150779:r.value},me=[{max:.4,color:"#7fd6ff",name:"Very humid"},{max:.8,color:"#b8f04a",name:"Gentle"},{max:1.2,color:"#43a047",name:"Comfortable"},{max:1.6,color:"#ffc93c",name:"Brisk"},{max:1/0,color:"#ff5a1f",name:"Thirsty air"}],uv={spring:["Watch seedlings for mould","Good for seedlings","Comfortable for most plants","Water new plantings","Water seedlings today"],summer:["Mildew weather","Easy on the garden","Comfortable for most plants","Water more","Water deeply"],fall:["Mildew weather","Good for fall planting","Comfortable for late crops","Water fall plantings","Water new trees and shrubs"],winter:["Garden dormant","Garden dormant","Garden dormant","Evergreens lose water","Water evergreens if the ground isn't frozen"]};function jH(r,e){if(!Number.isFinite(r)||!Number.isFinite(e))return null;let t=.6108*Math.exp(17.27*r/(r+237.3));return Math.max(0,t*(1-Math.min(100,Math.max(0,e))/100))}function GH(r=new Date,e=40){let t=r.getMonth()+1;e<0&&(t=(t+5)%12+1);let i=t*100+r.getDate();return i>=315&&i<601?"spring":i>=601&&i<901?"summer":i>=901&&i<1116?"fall":"winter"}var qH=r=>Math.max(0,me.findIndex(e=>r<e.max));function mv(r,e){let t=r>=3?(r-2)*7:0;return c1`<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M18 46h28l-4 14H22z" fill="#c2410c" /><rect x="16" y="42" width="32" height="6" rx="2" fill="#ea580c" />
    <path d="M32 42V20" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    <path d=${`M32 30c-9 0-15-5-17-${12-t} 9 0 15 4 17 ${12-t}z`} fill=${e} />
    <path d=${`M32 24c9 0 15-5 17-${12-t}-9 0-15 4-17 ${12-t}z`} fill=${e} />
    <path d="M32 21c-4-4-4-11 0-15 4 4 4 11 0 15z" fill=${e} />
  </svg>`}var E9=class extends q{_value(){let e=this.station,t=this.hass,i=this.config||{},o=d1(t,i.entity||l1("vpd",e,t));if(o&&Number.isFinite(o.value)){let s=String(o.unit||"").toLowerCase();return{kpa:s==="hpa"||s==="mbar"?o.value/10:s==="pa"?o.value/1e3:s==="psi"?o.value*6.894757:o.value,entity:o.entity,computed:!1}}let a=h1(e,t,"temperature"),C=h1(e,t,"humidity"),n=jH(dv(a),C?.value);return n==null?null:{kpa:n,entity:a?.entity,computed:!0}}shouldUpdate(e){return!j2(e,this.hass,[this.config?.entity||l1("vpd",this.station,this.hass),V5(this.station,this.hass,"temperature"),V5(this.station,this.hass,"humidity")])}render(){if(!this.hass)return h;let e=this.config||{},t=this._value(),i=s1(e,"mdi:water-opacity","Air dryness (VPD)");if(!t)return p`${i}<div class="note">Needs temperature and humidity from the station.</div>`;let o=qH(t.kpa),a=me[o],C=GH(new Date,Number(this.hass.config?.latitude)||40),n=2.5,s=Math.min(100,t.kpa/n*100);return p`${i}
      <div class="main" @click=${()=>u1(this,t.entity)}>
        ${e.show_plant===!1?h:p`<div class="plant">${mv(o,a.color)}</div>`}
        <div>
          <div class="val">${J(t.kpa,2)}<small>kPa</small></div>
          <div class="band" style=${`color:${a.color}`}>${a.name}</div>
          ${e.show_advice===!1?h:p`<div class="advice">${uv[C][o]}</div>`}
        </div>
      </div>
      ${e.show_scale===!1?h:p`<div class="scale" role="img" aria-label=${`${J(t.kpa,2)} kPa, ${a.name}`}>
          ${me.map((H,V)=>p`<span style=${`background:${H.color};flex:${(Math.min(H.max,n)-(V?me[V-1].max:0))/n}`}></span>`)}
          <i class="mark" style=${`left:${s}%`}></i>
        </div>
        <div class="ticks"><span>0</span><span>0.4</span><span>0.8</span><span>1.2</span><span>1.6</span><span>2.5 kPa</span></div>`}
      ${e.show_note===!1?h:p`<div class="note">How much more water the air could hold. The higher it is, the faster plants lose water through their leaves${t.computed?" (worked out from temperature and humidity)":""}.</div>`}`}};Z(E9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),Z(E9,"styles",[M1,Q`
      .main { display: flex; gap: calc(14px * var(--wsfc-sx, 1)); align-items: center; cursor: pointer; }
      .plant { width: 56px; height: 56px; flex: 0 0 auto; color: var(--primary-text-color); }
      .plant svg { width: 100%; height: 100%; }
      .val { font-size: 34px; font-weight: 600; line-height: 1; font-variant-numeric: tabular-nums; }
      .val small { font-size: 14px; font-weight: 400; color: var(--wsfc-muted); margin-left: 3px; }
      .band { font-size: 15px; font-weight: 500; margin-top: 4px; }
      .advice { font-size: 13px; color: var(--secondary-text-color); margin-top: 2px; }
      .scale { position: relative; display: flex; gap: 2px; height: 8px; margin: calc(12px * var(--wsfc-sy, 1)) 0 4px; }
      .scale span { flex: 1; border-radius: 2px; }
      .mark { position: absolute; top: -4px; width: 4px; height: 16px; margin-left: -2px; border-radius: 2px; background: var(--primary-text-color); box-shadow: 0 0 0 1px var(--card-background-color, #000); }
      .ticks { display: flex; justify-content: space-between; font-size: 10px; color: var(--wsfc-muted); }
      .note { font-size: 12px; color: var(--wsfc-muted); line-height: 1.45; margin-top: 8px; }
    `]);customElements.get("wsfc-panel-vpd")||customElements.define("wsfc-panel-vpd",E9);var Li={heat_danger:103,heat_caution:90,frost_temp:36,frost_night_temp:41,frost_dew:32,frost_wind:10,frost_low:34,freeze:32},hv={danger:"mdi:thermometer-alert",heat:"mdi:white-balance-sunny",frost:"mdi:snowflake-alert",tonight:"mdi:snowflake-thermometer",calm:"mdi:check-circle-outline",none:"mdi:help-circle-outline"};function he({t:r,feels:e,dew:t,wind:i,low:o,night:a},C=Li){let n=s=>J(s,0);return e!=null&&e>=C.heat_danger?{state:"danger",title:"Heat danger",detail:`It feels like ${n(e)}\xB0F. Stay in the shade, drink water, check on others.`}:e!=null&&e>=C.heat_caution?{state:"heat",title:"Heat caution",detail:`It feels like ${n(e)}\xB0F. Take it easy in the sun.`}:r!=null&&(r<=C.frost_temp||a&&r<=C.frost_night_temp&&t!=null&&t<=C.frost_dew&&(i==null||i<C.frost_wind))?{state:"frost",title:r<=C.freeze?"Freezing now":"Frost possible",detail:"Protect tender plants and cover outdoor taps."}:o!=null&&o<=C.frost_low?{state:"tonight",title:o<=C.freeze?"Freeze likely tonight":"Frost possible tonight",detail:`Forecast low ${n(o)}\xB0F. Cover or bring in tender plants before evening.`}:r==null?{state:"none",title:"Waiting for the station",detail:""}:{state:"calm",title:"No frost or heat risk",detail:o!=null?`Tonight's low ${n(o)}\xB0F.`:""}}var F9=class extends q{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.forEach(e=>e()),this._unsub=null}updated(e){e.has("hass")&&!this._unsub&&this._sub()}_sub(){let e=this.station?.entity;!this.hass||!e||this._unsub||(this._unsub=[w5(this.hass,e,"hourly",t=>this._hourly=t),w5(this.hass,e,"daily",t=>this._daily=t)])}_low(e){let t=C=>C==null?null:ue({value:Number(C),unit:e}),i=Date.now(),o=(this._hourly||[]).filter(C=>{let n=Date.parse(C.datetime);return n>i&&n<i+18*36e5}).map(C=>Number(C.temperature)).filter(Number.isFinite);if(o.length)return t(Math.min(...o));let a=(this._daily||[]).map(C=>C.templow).filter(C=>C!=null);return a.length?t(Math.min(...a.slice(0,2).map(Number))):null}shouldUpdate(e){return!j2(e,this.hass,["temperature","apparent_temperature","dew_point","wind_speed"].map(t=>V5(this.station,this.hass,t)).concat(["sun.sun",this.station?.entity]))}render(){if(!this.hass)return h;let e=this.config||{},t=this.station,i=this.hass,o=i.config?.unit_system?.temperature==="\xB0C",a={...Li};for(let w of Object.keys(Li))e[w]!=null&&(a[w]=w==="frost_wind"?o?e[w]/1.609344:e[w]:o?e[w]*9/5+32:e[w]);let C=h1(t,i,"temperature"),n=h1(t,i,"apparent_temperature"),s=h1(t,i,"dew_point"),H=h1(t,i,"wind_speed"),V=i.states["sun.sun"]?.state,L=new Date().getHours(),d=V?V==="below_horizon":L>=16||L<9,f=this.hass.states[t?.entity]?.attributes?.temperature_unit||(o?"\xB0C":"\xB0F"),v=he({t:ue(C),feels:ue(n),dew:ue(s),wind:pv(H),low:e.use_forecast===!1?null:this._low(f),night:d},a),x=w=>o?w.replace(/(-?\d+)°F/g,(y,b)=>`${Math.round((Number(b)-32)*5/9)}\xB0C`):w;return p`${s1(e,"mdi:snowflake-thermometer","Frost & heat watch")}
      <div class="box ${v.state}" role="status">
        <ha-icon icon=${hv[v.state]}></ha-icon>
        <div><div class="t">${v.title}</div>${v.detail?p`<div class="d">${x(v.detail)}</div>`:h}</div>
      </div>
      ${e.show_note===!1?h:p`<div class="note">Rules on this station's readings and the forecast, not an official warning — for those, see your weather service.</div>`}`}};Z(F9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_hourly:{state:!0},_daily:{state:!0}}),Z(F9,"styles",[M1,Q`
      .box { display: flex; gap: 12px; align-items: center; padding: calc(10px * var(--wsfc-sy, 1)) calc(12px * var(--wsfc-sx, 1)); border-radius: 12px; background: rgba(127, 127, 127, 0.1); }
      .box ha-icon { --mdc-icon-size: 36px; flex: 0 0 auto; }
      .t { font-size: 17px; font-weight: 600; }
      .d { font-size: 13px; color: var(--secondary-text-color); margin-top: 2px; }
      .danger { background: #b71c32; color: #fff; }
      .danger .d { color: rgba(255, 255, 255, 0.85); }
      .heat { background: color-mix(in srgb, #ffb347 35%, transparent); }
      .heat ha-icon { color: #ff7a1f; }
      .frost, .tonight { background: color-mix(in srgb, #7fc3ff 28%, transparent); }
      .frost ha-icon, .tonight ha-icon { color: #4aa3ff; }
      .calm ha-icon { color: var(--success-color, #43a047); }
      .note { font-size: 11px; color: var(--wsfc-muted); line-height: 1.4; margin-top: 8px; }
    `]);customElements.get("wsfc-panel-frost-watch")||customElements.define("wsfc-panel-frost-watch",F9);globalThis.__wsfcHelpers={...globalThis.__wsfcHelpers||{},vpdFrom:jH,vpdBand:qH,watchState:he,gardenSeason:GH};var li=r=>r?.unit==="\xB0C"?r.value*9/5+32:r?.value,fv=r=>{if(!r)return null;let e=String(r.unit||"").toLowerCase();return e==="km/h"?r.value/1.609344:e==="m/s"?r.value*2.236936:r.value};function QH(r,e,t,i){let o=[],a=e,C=r,n=L=>t[`alerts_${L}`]!==!1;if(n("watch")){let L=h1(a,C,"temperature");if(L){let d=he({t:li(L),feels:li(h1(a,C,"apparent_temperature")),dew:li(h1(a,C,"dew_point")),wind:fv(h1(a,C,"wind_speed")),low:i,night:C.states["sun.sun"]?.state==="below_horizon"}),u=C.config?.unit_system?.temperature==="\xB0C",f=d.title;d.state==="danger"?o.push({kind:"heat",icon:"mdi:thermometer-alert",text:f,level:"danger",type:"frost_watch"}):d.state==="heat"?o.push({kind:"heat",icon:"mdi:white-balance-sunny",text:f,level:"warn",type:"frost_watch"}):(d.state==="frost"||d.state==="tonight")&&o.push({kind:"frost",icon:"mdi:snowflake-alert",text:f,level:d.state==="frost"?"danger":"warn",type:"frost_watch"})}}if(n("lightning")){let L=z5({},a,C),d=d1(C,L.distance),u=V9(C,L),f=d&&Number.isFinite(d.value)?/mi/i.test(d.unit)?d.value*1.609344:d.value:null;if(f!=null&&f<=16&&u&&Date.now()-u<=30*6e4){let v=C.config?.unit_system?.length!=="km";o.push({kind:"lightning",icon:"mdi:flash-alert",text:`Lightning ${v?`${Math.round(f/1.609344)} mi`:`${Math.round(f)} km`} away \u2014 head indoors`,level:"danger",type:"lightning"})}}let s=t.alerts_entity,H=s&&C.states[s],V=H?H.attributes?.Alerts||H.attributes?.alerts||[]:[];if(Array.isArray(V))for(let L of V.slice(0,3)){let d=String(L.Severity||L.severity||"").toLowerCase();o.push({kind:"alert",icon:"mdi:alert",text:L.Event||L.event||L.title||"Weather alert",level:/severe|extreme/.test(d)?"danger":"warn",entity:s})}return o}var YH=Q`
  .alerts { display: flex; flex-wrap: wrap; gap: 6px; flex: 0 0 auto; }
  .alert-chip { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px 4px 8px; border-radius: 999px; border: 0; font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
    background: color-mix(in srgb, var(--warning-color, #ffa600) 28%, transparent); color: var(--primary-text-color); }
  .alert-chip.danger { background: color-mix(in srgb, var(--error-color, #db4437) 70%, transparent); color: #fff; }
  .alert-chip.frost { background: color-mix(in srgb, #4aa3ff 40%, transparent); }
  .alert-chip ha-icon { --mdc-icon-size: 18px; }
  .alert-chip:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
`;function KH(r,e){return r.length?p`<div class="alerts" role="status" aria-label="Weather alerts">${r.map(t=>p`<button class="alert-chip ${t.level} ${t.kind}" type="button" @click=${()=>e(t)}>
    <ha-icon icon=${t.icon}></ha-icon>${t.text}</button>`)}</div>`:h}var Av=[["rain_rate","Raining now"],["rain_hour","Last hour"],["rain_today","Today"],["rain_24h","Last 24 hours"],["rain_event","This rain event"],["rain_week","This week"],["rain_month","This month"],["rain_year","This year"],["last_rain","Last rain"]],vv=["rain_rate","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],P9=class extends q{updated(e){(e.has("hass")||e.has("config"))&&(!this._at||Date.now()-this._at>10*6e4)&&this._load()}async _load(){if(!(!this.hass||this._busy)){this._busy=!0;try{let e=l1("rain_today",this.station,this.hass);if(e){let t=await q0(this.hass,[e],400,"day");this._days=(t[e]||[]).map(i=>({t:i.t,v:i.max??0}))}this.config?.show_normal!==!1&&(this._area=await D7(this.hass,this.config||{})),this._at=Date.now()}catch{}finally{this._busy=!1}}}_sum(e,t){let i=this._days;if(!i?.length||i[0].t>e+864e5)return null;let o=new Date;return o.setHours(0,0,0,0),i.filter(C=>C.t>=e&&C.t<o.getTime()).reduce((C,n)=>C+(n.v||0),0)+(t||0)}shouldUpdate(e){return!this._at||Date.now()-this._at>10*6e4?!0:!j2(e,this.hass,[...["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year"].map(t=>(this.config?.entities||{})[t]||l1(t,this.station,this.hass)),P7(this.hass,this.config||{})])}render(){if(!this.hass)return h;let e=this.config||{},t=this.station,i=this.hass,o=i.config?.unit_system?.temperature==="\xB0C",a=o?1:2,C=E=>d1(i,(e.entities||{})[E]||l1(E,t,i)),n=C("rain_today"),s=n?.unit||(o?"mm":"in"),H=i.locale?.language,V=new Intl.DateTimeFormat(H,{weekday:"short",day:"numeric",month:"short"}),L=Array.isArray(e.show_rows)&&e.show_rows.length?e.show_rows:vv,d=new Date,u=new Date(d.getFullYear(),d.getMonth(),1).getTime(),f=new Date(d.getFullYear(),0,1).getTime(),v=new Date(d);v.setHours(0,0,0,0),v.setDate(v.getDate()-v.getDay());let x=[];for(let E of L){let F=Av.find(([k])=>k===E)?.[1]||E;if(E==="last_rain"){let k=o?.2:.01,P=null;if(n?.value>=k)P={when:"Today",v:n.value};else{let N=[...this._days||[]].reverse().find(I=>I.v>=k&&I.t<new Date().setHours(0,0,0,0));if(N)P={when:V.format(new Date(N.t)),v:N.v};else if(this._area?.precipitation?.last){let I=this._area.precipitation.last,Y=A2(I.value,this._area.daily_units?.[K1],i);P={when:V.format(new Date(`${I.date}T12:00:00`)),v:Y?.value,area:!0}}}P&&x.push(J1(F,P.when,`${J(P.v,a)} ${s}${P.area?` at ${this._area.station_name}`:""}`));continue}let $=C(E);if(E==="rain_rate"){$&&$.value>0&&x.push(J1(F,`${J($.value,a)} ${$.unit}`,null,"",()=>u1(this,$.entity)));continue}if($&&Number.isFinite($.value)){x.push(J1(F,`${J($.value,a)} ${$.unit}`,null,"",()=>u1(this,$.entity)));continue}let D=E==="rain_week"?v.getTime():E==="rain_month"?u:E==="rain_year"?f:null;if(D!=null){let k=this._sum(D,n?.value);k!=null&&x.push(J1(F,`${J(k,a)} ${s}`,"from Home Assistant's history"))}}let w=h,y=this._area?.precipitation,b=this._area?.daily_units?.[K1];if(e.show_normal!==!1&&y&&y.years>=5){let E=k=>A2(k,b,i)?.value,F=(k,P)=>{let N=C(k);return N&&Number.isFinite(N.value)?N.value:this._sum(P,n?.value)},$=(k,P,N,I)=>{let Y=P??N;if(Y==null||!I)return h;let z=Math.max(Y,I)*1.15||1;return p`<div>
          <div class="l"><span>${k}: <b>${J(Y,a)} ${s}</b>${P==null?` (${this._area.station_name})`:""}</span><span>normal ${J(I,a)} · ${Math.round(Y/I*100)}%</span></div>
          <div class="bar"><i style=${`width:${Y/z*100}%`}></i><u style=${`left:${I/z*100}%`}></u></div>
        </div>`},D=new Intl.DateTimeFormat(H,{month:"long"}).format(d);w=p`<div class="cmp">
        ${$(D,F("rain_month",u),E(y.month_sum),E(y.month_normal))}
        ${$("Year to date",F("rain_year",f),E(y.year_sum),E(y.year_normal_to_date))}
      </div>
      <div class="src">Normal: ${this._area.kind==="modelled"?"Open-Meteo (modelled)":this._area.station_name}, ${y.years} years · ${this._area.source}</div>`}return p`${s1(e,"mdi:weather-rainy","Rain totals")}
      ${x.length?x:p`<div class="note">No rain sensors found on the station.</div>`}
      ${w}`}};Z(P9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_days:{state:!0},_area:{state:!0}}),Z(P9,"styles",[M1,J3,Q`
      .cmp { margin-top: calc(10px * var(--wsfc-sy, 1)); display: grid; gap: calc(8px * var(--wsfc-sy, 1)); }
      .cmp .l { display: flex; justify-content: space-between; font-size: 12px; color: var(--secondary-text-color); gap: 8px; }
      .cmp .l b { color: var(--primary-text-color); font-weight: 600; }
      .bar { position: relative; height: 8px; border-radius: 4px; background: rgba(127, 127, 127, 0.18); margin-top: 4px; overflow: hidden; }
      .bar i { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 4px; background: #1e88e5; }
      .bar u { position: absolute; top: -2px; bottom: -2px; width: 2px; background: var(--primary-text-color); opacity: 0.7; }
    `]);customElements.get("wsfc-panel-rain")||customElements.define("wsfc-panel-rain",P9);var xv=(r,e)=>e==="\xB0C"?r*9/5+32:r;function XH(r){return r==null?"":r<40?"Too cold to sow anything":r<50?"Peas, spinach and lettuce can go in":r<60?"Cool-season crops; wait on beans and squash":r<70?"Beans, corn and squash":"Warm enough for tomatoes, peppers and melons"}function gv(r){let e=r?.entities||{},i=Object.keys(e).filter(o=>e[o]?.platform==="soil_temperature"&&o.startsWith("sensor.")).filter(o=>/current/.test(o)&&!/average/.test(o));return i.find(o=>!/_(0|18|54)cm/.test(o))||i[0]||null}var D9=class extends q{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null}updated(e){e.has("hass")&&!this._unsub&&this._sub(),(e.has("hass")||e.has("config"))&&(!this._at||Date.now()-this._at>10*6e4)&&this._load()}_sub(){let e=this.station?.entity;this.hass&&e&&!this._unsub&&(this._unsub=w5(this.hass,e,"daily",t=>this._daily=t))}async _load(){if(!(!this.hass||this._busy)){this._busy=!0;try{let e=this.config||{},[t,i]=await Promise.all([D7(this.hass,e),e.open_meteo===!1?null:PH(this.hass,e)]);this._area=t,this._om=i;let o=l1("temperature",this.station,this.hass),a=l1("rain_today",this.station,this.hass),C=await q0(this.hass,[o,a].filter(Boolean),400,"day");this._own={temp:C[o]||[],rain:C[a]||[]},this._at=Date.now()}catch{}finally{this._busy=!1}}}shouldUpdate(e){if(!this._at||Date.now()-this._at>10*6e4)return!0;let t=this.station,i=this.hass,o=this.config||{};return!j2(e,i,[l1("temperature",t,i),l1("rain_today",t,i),o.soil_temperature_entity||l1("soil_temperature",t,i),o.soil_moisture_entity||l1("soil_moisture",t,i),t?.entity])}render(){if(!this.hass)return h;let e=this.config||{},t=this.hass,i=t.config?.unit_system?.temperature==="\xB0C",o=i?"\xB0C":"\xB0F",a=i?"mm":"in",C=i?1:2,n=t.locale?.language,s=new Intl.DateTimeFormat(n,{month:"short",day:"numeric"}),H=new Intl.DateTimeFormat(n,{weekday:"short"}),V=this._area,L=this._om,d=($,D)=>A2($,D,t)?.value,u=i?0:32,f=i?2:36,v=[];if(e.show_outlook!==!1){let $=[],k=t.states[this.station?.entity]?.attributes?.temperature_unit||o;if(e.outlook_source!=="open_meteo"&&($=(this._daily||[]).filter(P=>P.templow!=null).slice(0,7).map(P=>({d:new Date(P.datetime),low:d(P.templow,k)}))),!$.length&&L&&($=L.days.filter(P=>P.date>=L.today&&P[P1]!=null).slice(0,7).map(P=>({d:new Date(`${P.date}T12:00:00`),low:d(P[P1],L.daily_units[P1])}))),$.length){let P=$.filter(N=>N.low<=f);v.push(p`<div class="sec"><h4>Frost outlook <small>${P.length?`${P.length} cold night${P.length>1?"s":""}`:"no frost in sight"}</small></h4>
          <div class="nights">${$.map((N,I)=>p`<div class="n ${N.low<=u?"freeze":N.low<=f?"frost":""}" title=${`${s.format(N.d)}: low ${J(N.low,0)}${o}`}>
            <span>${I===0?"Tonight":H.format(N.d)}</span><b>${J(N.low,0)}°</b>${N.low<=f?p`<ha-icon icon="mdi:snowflake"></ha-icon>`:h}</div>`)}</div></div>`)}}let x=new Date,w=this._own?.temp||[],y=new Date(x.getMonth()>=6?x.getFullYear():x.getFullYear()-1,6,1).getTime(),b=new Date(x.getFullYear(),0,1).getTime(),E=$=>w.length&&w[0].t<=$+864e5,F=this.hass.states[l1("temperature",this.station,t)]?.attributes?.unit_of_measurement||o;if(e.show_season!==!1){let $=null,D=null,k=0,P=null,N=null;if(E(y)){let I=w.filter(Y=>Y.t>=y&&Y.min!=null&&d(Y.min,F)<=u);k=I.length,I.length&&($={d:new Date(I[0].t),v:d(I[0].min,F)},D={d:new Date(I.at(-1).t),v:d(I.at(-1).min,F)}),P="this station"}else if(V?.frost){let I=V.frost,Y=V.daily_units?.[P1];k=I.nights,I.first&&($={d:new Date(`${I.first.date}T12:00:00`),v:d(I.first.value,Y)}),I.last&&(D={d:new Date(`${I.last.date}T12:00:00`),v:d(I.last.value,Y)}),P=V.kind==="modelled"?"Open-Meteo (modelled)":V.station_name}if(V?.frost?.typical_first&&(N=new Date(`2000-${V.frost.typical_first}T12:00:00`)),P){let I=x.getMonth()<6;v.push(p`<div class="sec"><h4>Frost this season <small>since July 1 · ${P}</small></h4>
          ${J1(I?"First frost last fall":"First frost",$?s.format($.d):"Not yet",$?`low ${J($.v,0)}${o}`:N?`usually around ${s.format(N)}`:`no night at or below ${u}${o}`,"cold")}
          ${I&&D?J1("Latest frost so far",s.format(D.d),`low ${J(D.v,0)}${o}`,"cold"):h}
          ${J1("Frost nights",String(k),`at or below ${u}${o}`)}
          ${$&&N?J1("Typical first frost",s.format(N),V?.kind==="modelled"?"Open-Meteo":V?.station_name):h}
        </div>`)}}if(e.show_gdd!==!1){let $=null,D=null;if(E(b)){let[k,P]=i?[10,30]:[50,86];$=w.filter(N=>N.t>=b&&N.min!=null&&N.max!=null).reduce((N,I)=>{let Y=d(I.max,F),z=d(I.min,F);return N+Math.max(0,(Math.min(Y,P)+Math.min(Math.max(z,k),P))/2-k)},0),D="this station"}else V?.growing_degree_days&&($=He(V.growing_degree_days.value,V.daily_units?.temperature_2m_max,t)?.value,D=V.kind==="modelled"?"Open-Meteo (modelled)":V.station_name);$!=null&&v.push(p`<div class="sec"><h4>Growing degree days <small>since January 1 · ${D}</small></h4>
        ${J1(`Base ${i?"10 \xB0C":"50 \xB0F"}`,J($,0),"Crops and insects develop in step with them")}</div>`)}if(e.show_soil!==!1){let $=this.station,D=d1(t,e.soil_temperature_entity||l1("soil_temperature",$,t))||d1(t,gv(t)),k=d1(t,e.soil_moisture_entity||l1("soil_moisture",$,t)),P=L?.soil?.soil_temperature_6cm,N=L?.soil?.soil_temperature_18cm,I=L?.soil?.soil_moisture_3_to_9cm,Y=D&&Number.isFinite(D.value)?{value:d(D.value,D.unit),src:"sensor",e:D.entity}:P?{value:d(P.value,P.unit),src:"Open-Meteo, 6 cm"}:null,z=[];Y&&z.push(J1("Soil temperature",`${J(Y.value,1)}${o}`,Y.src==="sensor"?"":Y.src,"",Y.e?()=>u1(this,Y.e):null)),!D&&N&&z.push(J1("Deeper (18 cm)",`${J(d(N.value,N.unit),1)}${o}`,"Open-Meteo")),k&&Number.isFinite(k.value)?z.push(J1("Soil moisture",`${J(k.value,0)}${k.unit||"%"}`,"","",()=>u1(this,k.entity))):I&&z.push(J1("Soil moisture",`${J(I.value*100,0)}%`,"Open-Meteo, 3\u20139 cm (water by volume)")),z.length&&v.push(p`<div class="sec"><h4>Soil</h4>${z}${Y?p`<div class="hint">${XH(xv(Y.value,o))}</div>`:h}</div>`)}if(e.show_water!==!1){let $=null,D=null;if(V?.evapotranspiration?.last_7_days!=null&&V.kind!=="modelled")$=A2(V.evapotranspiration.last_7_days,V.daily_units?.[l5],t)?.value,D=V.station_name;else if(L){let Y=L.days.filter(z=>z.date<L.today).slice(-7);Y.some(z=>z[l5]!=null)&&($=Y.reduce((z,V1)=>z+(A2(V1[l5],L.daily_units[l5],t)?.value||0),0),D="Open-Meteo")}let k=null,P=this._own?.rain||[],N=new Date;N.setHours(0,0,0,0);let I=N.getTime()-7*864e5;if(P.length&&P[0].t<=I+864e5){let Y=t.states[l1("rain_today",this.station,t)]?.attributes?.unit_of_measurement||a;k=P.filter(z=>z.t>=I&&z.t<N.getTime()).reduce((z,V1)=>z+(A2(V1.max||0,Y==="in"?"inch":Y,t)?.value||0),0)}else V?.precipitation?.last_7_days!=null&&(k=A2(V.precipitation.last_7_days,V.daily_units?.[K1],t)?.value);if($!=null){let Y=k!=null?k-$:null;v.push(p`<div class="sec"><h4>Water, last 7 days</h4>
          ${J1("Lost by the garden",`${J($,C)} ${a}`,`reference evapotranspiration \xB7 ${D}`)}
          ${k!=null?J1("Rain",`${J(k,C)} ${a}`):h}
          ${Y!=null?p`<div class="bal ${Y<0?"dry":"wet"}">${Y<0?p`Short by <b>${J(-Y,C)} ${a}</b> — water the garden`:p`<b>${J(Y,C)} ${a}</b> more rain than the garden used`}</div>`:h}
        </div>`)}}return p`${s1(e,"mdi:sprout","Frost & the garden")}${v.length?v:p`<div class="note">${this._at?"No garden data for this location yet.":"Loading\u2026"}</div>`}`}};Z(D9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_area:{state:!0},_om:{state:!0},_own:{state:!0},_daily:{state:!0}}),Z(D9,"styles",[M1,J3,Q`
      .nights { display: grid; grid-template-columns: repeat(auto-fit, minmax(calc(44px * var(--wsfc-sx, 1)), 1fr)); gap: calc(4px * var(--wsfc-sx, 1)); margin-bottom: 4px; }
      .n { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: calc(4px * var(--wsfc-sy, 1)) 2px; border-radius: 8px; background: rgba(127, 127, 127, 0.08); font-size: 11px; color: var(--secondary-text-color); }
      .n b { font-size: 14px; color: var(--primary-text-color); font-variant-numeric: tabular-nums; }
      .n.frost { background: color-mix(in srgb, #4aa3ff 26%, transparent); }
      .n.freeze { background: color-mix(in srgb, #4aa3ff 45%, transparent); }
      .n.frost b, .n.freeze b { color: #9fd0ff; }
      .n ha-icon { --mdc-icon-size: 14px; color: #7fc3ff; }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 2px; }
      .bal { font-size: 13px; margin-top: 4px; }
      .bal.dry b { color: var(--warning-color, #ffa600); }
      .bal.wet b { color: var(--success-color, #43a047); }
    `]);customElements.get("wsfc-panel-garden")||customElements.define("wsfc-panel-garden",D9);globalThis.__wsfcHelpers={...globalThis.__wsfcHelpers||{},plantingHint:XH};var JH=30,fe=4,eV=10,N7=r=>r.title?r.title:r.type==="metric"?S1[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(T1(r)?.label||r.type).replace(/ \(.*\)$/,""),ci=r=>r.icon||r.type==="metric"&&S1[r.metric]?.icon||T1(r)?.icon||"mdi:square-outline",R9=class extends q{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let e=this.renderRoot.querySelector(".grid");if(!e)return;let t=e.clientWidth-12;Math.abs(t-(this._mapW||0))>1&&(this._mapW=t)}),this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".grid");e&&this._ro.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let e=this.guide;if(!e?.w||!e?.h||!this._mapW)return{row:JH,gap:fe,line:null};let t=this._mapW/e.w,i=Math.max(100,e.h-(e.chrome||0)),o=e.row||110,a=!1;if(e.fit&&this._tracks){let n=this._tracks/2,s=(i+(e.gap??12))/n-(e.gap??12);o=Math.max(60,Math.min(400,s)),a=s>=60}let C=Math.max(2,(e.gap??12)*t);return{row:Math.max(8,o*t),gap:C,line:i*t,rowPx:Math.round(o),fits:a}}updated(){let e=this.renderRoot.querySelector(".grid.measure");if(!e||!this.guide?.fit)return;let{row:t,gap:i}=this._scale(),o=Math.max(2,Math.round((e.clientHeight-12+i)/((t-i)/2+i)));o!==this._tracks&&(this._tracks=o)}_gridIdx(){return(this.panels||[]).map((e,t)=>t).filter(e=>this.panels[e].display!=="popup")}render(){let e=this.panels||[],t=this._order||this._gridIdx(),i=e.map((C,n)=>n).filter(C=>e[C].display==="popup"),o=this._scale();this._mr=o.row,this._mg=o.gap;let a=this.guide?.mode||"line";return p`
      <div class="wrap">
        <div class="grid" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${t.map(C=>this._block(e[C],C))}
        </div>
        ${this.guide?.fit?p`<div class="grid measure" aria-hidden="true" style=${`--row:${o.row}px;--gap:${o.gap}px`}>
          ${t.filter(C=>e[C].show!==!1).map(C=>p`<div style=${this._place(e[C])}></div>`)}</div>`:h}
        ${o.line==null||this.measured?h:o.fits?p`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${o.rowPx}px</span></div>`:p`<div class="guide ${a}" style=${`top:${6+o.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${o.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${this._screen()}
      ${i.length?p`<div class="pops"><span>Pop-ups:</span>${i.map(C=>p`<span class="pop"><ha-icon icon=${ci(e[C])}></ha-icon>${N7(e[C])}</span>`)}</div>`:h}
    `}_screen(){let e=this.measured,t=this.guide;if(!e||!t||!this._mapW||!e.w)return h;let i=this._mapW/e.w,o=Math.max(e.gridH,e.visibleH),a=e.tiles.filter(s=>s.where==="off"),C=e.tiles.filter(s=>s.where==="partial"),n=s=>s.map(H=>N7(this.panels[H.i]||{})).join(", ");return p`<div class="shot-head">On the ${t.w}×${t.h} screen at load${e.gridH<=e.visibleH+1?p` — <span class="okc">everything fits</span>`:""}</div>
      <div class="shot" style=${`height:${Math.round(o*i)+2}px`}>
        ${e.tiles.map(s=>{let H=this.panels[s.i]||{};return p`<div class="st ${s.where} ${s.collapsed?"folded":""}" style=${`left:${s.x*i}px;top:${s.y*i}px;width:${Math.max(4,s.w*i)}px;height:${Math.max(4,s.h*i)}px`}
            title=${`${N7(H)}: ${Math.round(s.w)}\xD7${Math.round(s.h)} px${s.where==="off"?" \u2014 off screen at load":s.where==="partial"?" \u2014 partly off screen":""}`}>
            <ha-icon icon=${ci(H)}></ha-icon><span>${N7(H)}</span></div>`})}
        ${e.gridH>e.visibleH+1?p`<div class="below" style=${`top:${e.visibleH*i}px`}><span>screen edge · scroll for the rest</span></div>`:h}
      </div>
      ${a.length||C.length?p`<div class="shot-note">${C.length?p`<b>Partly off screen:</b> ${n(C)}. `:""}${a.length?p`<b>Off screen:</b> ${n(a)}.`:""}
            ${t.fit&&!t.strict?" Content makes some panels taller than their rows (\u2192 in the map above); try Strict fit, Content size, or more rows for them.":""}</div>`:h}`}_place(e,t){let i=t?t.span:z2(e),o=t?t.rows:H2(e);return`grid-column: span ${i}; grid-row: span ${o?Math.max(1,Math.round(o*2)):2};`}_block(e,t){let i=this._size?.index===t?this._size:null,o=i?i.span:z2(e),a=i?i.rows:H2(e),C=this._place(e,i),n=!i&&this.measured?.tiles?.find(L=>L.i===t),s=n&&!n.collapsed?Math.round((n.h+this.measured.gap)/(this.measured.row+this.measured.gap)*2)/2:null,H=s!=null&&a>0&&s>a+.25,V=["blk",e.show===!1?"hidden":"",this._drag?.index===t?"dragging":"",i?"sizing":"",e.type,n?`at-${n.where}`:"",H?"grows":"",n?.collapsed?"folded":""].join(" ");return p`<div class=${V} style=${C} data-i=${t} tabindex="0" role="button"
        aria-label=${`${N7(e)}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${L=>this._startMove(L,t)} @keydown=${L=>this._key(L,t)}>
      <ha-icon icon=${ci(e)}></ha-icon>
      <span class="nm">${N7(e)}</span>
      <span class="dim">${o}×${a||"a"}${H?p` <b class="need" title="Its content makes it taller on that screen">→ ${s}</b>`:h}${n?.collapsed?" \xB7 folded":""}</span>
      <span class="rz x" @pointerdown=${L=>this._startSize(L,t,"x")}></span>
      <span class="rz y" @pointerdown=${L=>this._startSize(L,t,"y")}></span>
      <span class="rz xy" @pointerdown=${L=>this._startSize(L,t,"xy")}></span>
    </div>`}_startMove(e,t){if(e.button!==0||e.target.classList.contains("rz"))return;e.preventDefault();let i=e.currentTarget;i.setPointerCapture(e.pointerId),this._order=this._gridIdx(),this._drag={index:t,x0:e.clientX,y0:e.clientY,moved:!1};let o=C=>this._onMove(C),a=()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let C=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),n=this._order;this._drag=null,this._order=null,C&&this._commitOrder(n)};i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(e){let t=this._drag;if(!t||!t.moved&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)<4)return;t.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(n=>Number(n.dataset.i)!==t.index),o=null;for(let n of i){let s=n.getBoundingClientRect();if(e.clientX>=s.left&&e.clientX<=s.right&&e.clientY>=s.top&&e.clientY<=s.bottom){o={i:Number(n.dataset.i),after:e.clientX>s.left+s.width/2};break}}if(!o){let n=i[i.length-1]?.getBoundingClientRect();if(n&&e.clientY>n.bottom)o={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(n=>n!==t.index),C=a.indexOf(o.i)+(o.after?1:0);a.splice(C,0,t.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(e){let t=this.panels,i=e.map(a=>t[a]),o=t.map(a=>a.display==="popup"?a:i.shift());this._emit(o)}_startSize(e,t,i){if(e.button!==0)return;e.preventDefault(),e.stopPropagation();let o=e.currentTarget;o.setPointerCapture(e.pointerId);let C=(this.renderRoot.querySelector(".grid").clientWidth-11*fe)/12+fe,n=this.panels[t],s=z2(n),H=H2(n);this._size={index:t,span:s,rows:H};let V=e.clientX,L=e.clientY,d=f=>{let v=i==="y"?s:Math.max(1,Math.min(12,s+Math.round((f.clientX-V)/C))),x=H||1,w=(this._mr||JH)+(this._mg||fe),y=i==="x"?H:Math.max(.5,Math.min(eV,x+Math.round(2*(f.clientY-L)/w)/2));i!=="x"&&H===0&&y===1&&Math.abs(f.clientY-L)<w/4&&(y=0),(v!==this._size.span||y!==this._size.rows)&&(this._size={index:t,span:v,rows:y})},u=()=>{o.removeEventListener("pointermove",d),o.removeEventListener("pointerup",u),o.removeEventListener("pointercancel",u);let{span:f,rows:v}=this._size;this._size=null,(f!==s||v!==H)&&this._commitSize(t,f,v)};o.addEventListener("pointermove",d),o.addEventListener("pointerup",u),o.addEventListener("pointercancel",u)}_commitSize(e,t,i){let o=T1(this.panels[e])||{},a={...this.panels[e],span:t,rows:i};t===o.span&&delete a.span,i===(o.rows??0)&&delete a.rows;let C=this.panels.slice();C[e]=a,this._emit(C)}_key(e,t){let i=this._gridIdx(),o=i.indexOf(t);if(e.shiftKey){let a=this.panels[t],C={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];if(!C)return;e.preventDefault(),this._commitSize(t,Math.max(1,Math.min(12,z2(a)+C[0])),Math.max(0,Math.min(eV,H2(a)+C[1]/2)))}else if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();let a=o+(e.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let C=i.slice();[C[o],C[a]]=[C[a],C[o]],this._commitOrder(C),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(e){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:e}}))}};Z(R9,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},measured:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),Z(R9,"styles",Q`
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
    .need { color: var(--warning-color, #ffa600); font-weight: 700; }
    .blk.grows { border-color: var(--warning-color, #ffa600); }
    .blk.at-off { border-style: dotted; }
    .blk.folded { opacity: 0.8; }
    .shot-head { margin: 10px 0 4px; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); }
    .shot-head .okc { color: var(--success-color, #43a047); }
    .shot { position: relative; border-radius: 10px; background: rgba(127, 127, 127, 0.08); overflow: hidden; }
    .st { position: absolute; box-sizing: border-box; border-radius: 4px; border: 1px solid var(--divider-color, #444); background: var(--card-background-color, #222);
      display: flex; gap: 3px; align-items: flex-start; padding: 2px 4px; font-size: 10px; line-height: 1.2; overflow: hidden; color: var(--primary-text-color); }
    .st ha-icon { --mdc-icon-size: 12px; color: var(--primary-color); flex: 0 0 auto; }
    .st span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .st.partial { border-color: var(--warning-color, #ffa600); }
    .st.off { opacity: 0.55; border-style: dashed; }
    .st.folded { background: transparent; }
    .below { position: absolute; left: 0; right: 0; bottom: 0; border-top: 2px dashed var(--warning-color, #ffa600); pointer-events: none;
      background: repeating-linear-gradient(135deg, rgba(255, 166, 0, 0.16) 0 6px, transparent 6px 12px); }
    .below span { position: absolute; right: 6px; top: 2px; font-size: 10px; font-weight: 600; color: var(--warning-color, #ffa600); background: var(--card-background-color, #1c1c1c); padding: 0 4px; border-radius: 4px; }
    .shot-note { margin-top: 4px; font-size: 11px; color: var(--secondary-text-color); line-height: 1.4; }
    .pops { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 6px; font-size: 11px; color: var(--secondary-text-color); }
    .pop { display: inline-flex; gap: 4px; align-items: center; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--divider-color, #444); color: var(--primary-text-color); }
    .pop ha-icon { --mdc-icon-size: 13px; }
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",R9);var tV=56,rV=16,B9=class extends q{render(){let e=this.guide;return!e?.w||!e?.h?p``:p`<div class="screen" style=${`width:${Math.max(200,e.w-rV)}px;height:${Math.max(200,e.h-tV)}px`}></div>`}updated(e){let t=`${this.guide?.w}x${this.guide?.h}`;!(e.has("config")&&e.get("config")!==this.config)&&t===this._key&&this._card||this.hass&&(this._key=t,clearTimeout(this._t),this._t=setTimeout(()=>this._build(),400))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._t),clearTimeout(this._m)}_build(){let e=this.renderRoot.querySelector(".screen"),t=this.guide;if(!(!e||!t||!this.hass||!this.config?.entity)&&customElements.get("weather-station-flex-card")){this._card||(this._card=document.createElement("weather-station-flex-card"),this._card.editMode=!0,e.append(this._card));try{this._card.setConfig({...this.config,remember:!1})}catch{return}this._card.screenHeight=Math.max(200,t.h-tV-rV),this._card.screenWidth=t.w,this._card.hass=this.hass,clearTimeout(this._m),this._m=setTimeout(()=>{try{this._card._fit?.(),this._card._autoFitPanels?.()}catch{}requestAnimationFrame(()=>this._measure())},900)}}_measure(){let e=this._card?.shadowRoot,t=e?.querySelector(".scroller"),i=e?.querySelector(".grid");if(!t||!i)return;let o=i.getBoundingClientRect(),a=t.getBoundingClientRect(),C=this.renderRoot.querySelector(".screen").getBoundingClientRect(),n=Math.min(a.top+t.clientHeight,C.bottom)-o.top,s=getComputedStyle(i),H=[...i.querySelectorAll(":scope > section.tile[data-i]")].map(V=>{let L=V.getBoundingClientRect(),d=L.top-o.top,u=L.height;return{i:Number(V.dataset.i),x:L.left-o.left,y:d,w:L.width,h:u,collapsed:V.classList.contains("collapsed"),where:d>=n-1?"off":d+u>n+1?"partial":"on"}});this.dispatchEvent(new CustomEvent("probe-measured",{detail:{w:o.width,visibleH:n,gridH:o.height,row:parseFloat(i.style.getPropertyValue("--wsfc-row")||s.getPropertyValue("--wsfc-row"))||110,gap:parseFloat(s.rowGap)||12,tiles:H}}))}};Z(B9,"properties",{hass:{attribute:!1},config:{attribute:!1},guide:{attribute:!1}}),Z(B9,"styles",Q`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `);customElements.get("wsfc-layout-probe")||customElements.define("wsfc-layout-probe",B9);var Ae=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--disabled-color)","Disabled"],["var(--state-icon-color)","State icon"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function _v(r){return r=r==null?"":String(r),r===""?"default":r==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(r)?"custom":/^var\(/.test(r)&&Ae.some(([e])=>e===r)?"theme":"css"}var oV=r=>!!r.selector?.ltek_color||!!r.selector?.text&&/(^|_|\.)color$/.test(r.name),wv=r=>/px|%/.test(r?.unit_of_measurement||"");function bv(r){let e=r.selector||{};return!!(e.boolean||e.select&&!e.select.custom_value||e.number||oV(r)||e.text&&!e.text.multiple)}var iV=r=>/^#[0-9a-fA-F]{6}$/.test(r||"")?r:null;function aV({data:r,schema:e,onChange:t,label:i,helper:o,haForm:a,auto:C}){let n=[],s=[],H=()=>{if(!s.length)return;let V=s;n.push(a(Object.fromEntries(V.map(L=>[L.name,r[L.name]])),V,L=>t({...r,...L}))),s=[]};for(let V of e)if(!(typeof V.when=="function"&&!V.when(r))){if(!bv(V)){s.push(V);continue}H(),n.push(yv(V,r[V.name],L=>t({...r,[V.name]:L}),i(V),o(V),C?.(V)))}return H(),n}function yv(r,e,t,i,o,a){let C=r.selector||{},n=`f-${r.name.replace(/\W/g,"_")}`,s=o?p`<div class="fhelp">${o}</div>`:h;if(C.boolean){let H=r.invert?e===!1:!!e;return p`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${H} @change=${V=>t(r.invert?!V.target.checked:V.target.checked)} />${i}</label>${s}</div>`}if(C.select&&!C.select.multiple){let H=(C.select.options||[]).map(L=>typeof L=="string"?{value:L,label:L}:L),V=e==null?"":String(e);return p`<div class="fld"><div class="frow"><label for=${n}>${i}</label>
      <select id=${n} class="sel" @change=${L=>t(L.target.value===""?void 0:L.target.value)}>
        ${H.some(L=>String(L.value)===V)?h:p`<option value="" ?selected=${V===""}>—</option>`}
        ${H.map(L=>p`<option value=${L.value} ?selected=${String(L.value)===V}>${L.label}</option>`)}
      </select></div>${s}</div>`}if(C.select&&C.select.multiple){let H=(C.select.options||[]).map(d=>typeof d=="string"?{value:d,label:d}:d),V=Array.isArray(e)?e:[],L=(d,u)=>{let f=H.map(v=>v.value).filter(v=>v===d?u:V.includes(v));t(f.length?f:void 0)};return p`<div class="fld"><div class="flab">${i}</div><div class="fmulti">
      ${H.map(d=>p`<label class="fchk"><input type="checkbox" .checked=${V.includes(d.value)} @change=${u=>L(d.value,u.target.checked)} />${d.label}</label>`)}
    </div>${s}</div>`}if(C.number){let H=C.number,V=H.unit_of_measurement||"";if(H.mode==="slider"||wv(H)){let L=H.min??0,d=H.max??100,u=H.step??1,f=e??r.default,v=parseFloat(a),x=f??(Number.isFinite(v)?Math.max(L,Math.min(d,v)):L),w=y=>y==null||y===""?"Auto":`${y}${V}`;return p`<div class="fld"><div class="frow nowrap"><label for=${n}>${i}</label>
        <input id=${n} type="range" class="frange" min=${L} max=${d} step=${u} .value=${String(x)}
          @input=${y=>{let b=y.target.parentElement.querySelector(".fval");b&&(b.textContent=w(y.target.value))}}
          @change=${y=>t(Number(y.target.value))} />
        <span class="fval">${w(f)}</span>
        ${e!=null&&r.default===void 0?p`<button class="freset" title="Back to Auto" @click=${()=>t(void 0)}>×</button>`:h}
      </div>${a&&f==null?p`<div class="fauto">Auto: ${a}</div>`:h}${s}</div>`}return p`<div class="fld"><div class="frow"><label for=${n}>${i}</label>
      <input id=${n} type="number" class="ftext num" min=${H.min??h} max=${H.max??h} step=${H.step??"any"} .value=${e??""}
        @change=${L=>t(L.target.value===""?void 0:Number(L.target.value))} />${V?p`<span class="funit">${V}</span>`:h}
    </div>${s}</div>`}return oV(r)?Sv(n,e,t,i,s,/background|(^|_)bg(_|$)/i.test(`${r.name} ${i}`)):p`<div class="fld"><div class="frow"><label for=${n}>${i}</label>
    <input id=${n} type=${C.text?.type||"text"} class="ftext" .value=${e??""} @change=${H=>t(H.target.value===""?void 0:H.target.value)} />
  </div>${s}</div>`}function Sv(r,e,t,i,o,a=!1){let C=_v(e),n=e==null?"":String(e),s=H=>t(H==="default"?void 0:H==="transparent"?"transparent":H==="theme"?Ae.some(([V])=>V===n)?n:Ae[0][0]:H==="custom"?iV(n)||"#4fc3f7":n||"#4fc3f7");return p`<div class="fld"><div class="frow"><label for=${r}>${i}</label>
    <span class="fcolor">
      <select id=${r} class="sel mode" @change=${H=>s(H.target.value)}>
        ${[["default","Not set"],...a||C==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([H,V])=>p`<option value=${H} ?selected=${H===C}>${V}</option>`)}
      </select>
      ${C==="theme"?p`<select class="sel" aria-label="Theme color" @change=${H=>t(H.target.value)}>${Ae.map(([H,V])=>p`<option value=${H} ?selected=${H===n}>${V}</option>`)}</select>`:C==="custom"?p`<input type="color" class="fswatch" aria-label="Color" .value=${iV(n)||"#4fc3f7"} @change=${H=>t(H.target.value)} />`:C==="css"?p`<input type="text" class="ftext" aria-label="CSS color" .value=${n} @change=${H=>t(H.target.value||void 0)} />`:h}
      ${C!=="default"&&C!=="transparent"?p`<span class="fdot" style="background:${n}"></span>`:h}
    </span>
  </div>${o}</div>`}var CV=Q`
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
`;var ve,Zv=async()=>ve||(ve=await re("wsfc-yaml.js")),kv=`
  .wsfc-io::backdrop { background: rgba(0, 0, 0, 0.55); }
  .wsfc-io { border: 1px solid var(--divider-color, #444); border-radius: 14px; padding: 0; width: min(720px, 94vw);
    background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #e1e1e1); font: 14px/1.4 var(--paper-font-body1_-_font-family, system-ui, sans-serif); }
  .wsfc-io .in { display: flex; flex-direction: column; gap: 10px; padding: 16px; }
  .wsfc-io h2 { margin: 0; font-size: 16px; font-weight: 600; }
  .wsfc-io p { margin: 0; color: var(--secondary-text-color, #9e9e9e); font-size: 12px; }
  .wsfc-io textarea { width: 100%; box-sizing: border-box; min-height: 340px; resize: vertical; font: 12px/1.45 var(--code-font-family, ui-monospace, monospace);
    background: var(--secondary-background-color, #111); color: inherit; border: 1px solid var(--divider-color, #444); border-radius: 8px; padding: 10px; }
  .wsfc-io .bar { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
  .wsfc-io .grow { flex: 1; }
  .wsfc-io button { font: inherit; padding: 6px 14px; border-radius: 8px; cursor: pointer; border: 1px solid var(--divider-color, #444); background: transparent; color: inherit; }
  .wsfc-io button.pri { background: var(--primary-color, #2196f3); border-color: var(--primary-color, #2196f3); color: var(--text-primary-color, #fff); }
  .wsfc-io .err { color: var(--error-color, #db4437); font-size: 12px; }
`,Ov=r=>ve.dump(r,{lineWidth:-1,noRefs:!0});function $v(r,e){let t;try{t=ve.load(String(r||""))}catch(i){throw new Error(`Not valid YAML or JSON: ${i.reason||i.message}`)}if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Expected the card's settings (a YAML mapping).");if(t.type&&e&&t.type!==e)throw new Error(`This is a ${t.type} config, not ${e}.`);if(!t.entity)throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");return{...t,type:e||t.type}}async function Mi(r){try{await Zv()}catch(e){alert(String(e?.message||e));return}return Tv(r)}function Tv({mode:r,config:e,cardType:t,onImport:i}){let o=document.createElement("dialog");o.className="wsfc-io";let a=document.createElement("style");a.textContent=kv;let C=r==="export";o.innerHTML=`<div class="in">
    <h2>${C?"Export settings":"Import settings"}</h2>
    <p>${C?"The whole card's settings as YAML. Copy them to keep a backup or to use them on another dashboard.":"Paste settings exported from this card (YAML or JSON). They replace the current settings in the editor; press Save in Home Assistant to keep them."}</p>
    <textarea spellcheck="false" aria-label="${C?"Exported settings":"Settings to import"}"></textarea>
    <div class="err" role="alert"></div>
    <div class="bar">
      ${C?'<button class="copy">Copy to clipboard</button><button class="dl">Download file</button>':'<button class="paste">Paste from clipboard</button>'}
      <span class="grow"></span>
      <button class="close">${C?"Close":"Cancel"}</button>
      ${C?"":'<button class="pri apply">Import</button>'}
    </div>
  </div>`,o.prepend(a);let n=o.querySelector("textarea"),s=o.querySelector(".err");C&&(n.value=Ov(e));let H=()=>{o.close(),o.remove()};o.querySelector(".close").addEventListener("click",H),o.addEventListener("cancel",V=>{V.preventDefault(),H()}),o.addEventListener("click",V=>{V.target===o&&H()}),o.querySelector(".copy")?.addEventListener("click",async V=>{let L=V.currentTarget;n.focus(),n.select();let d=!1;try{d=document.execCommand("copy")}catch{d=!1}if(!d)try{await navigator.clipboard.writeText(n.value),d=!0}catch{d=!1}L.textContent=d?"Copied \u2713":"Press Ctrl/Cmd+C"}),o.querySelector(".dl")?.addEventListener("click",()=>{let V=document.createElement("a");V.href=URL.createObjectURL(new Blob([n.value],{type:"text/yaml"})),V.download="weather-station-flex-card.yaml",V.click(),setTimeout(()=>URL.revokeObjectURL(V.href),1e3)}),o.querySelector(".paste")?.addEventListener("click",async V=>{try{n.value=await navigator.clipboard.readText(),s.textContent=""}catch{V.currentTarget.textContent="Paste with Ctrl/Cmd+V",n.focus()}}),o.querySelector(".apply")?.addEventListener("click",()=>{try{let V=$v(n.value,t);i?.(V),H()}catch(V){s.textContent=V.message}}),document.body.appendChild(o);try{o.showModal()}catch{o.setAttribute("open","")}return C?(n.focus(),n.select()):n.focus(),o}var nV="__other__",z9=class extends q{_name(e){let t=this.hass?.states?.[e],i=t?.attributes?.friendly_name||e,o=t&&!["unknown","unavailable"].includes(t.state)&&!e.startsWith("weather.")?` \xB7 ${t.state}${t.attributes?.unit_of_measurement?` ${t.attributes.unit_of_measurement}`:""}`:"";return`${i}${o}`}_emit(e){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!1}))}render(){let e=this.value||"",t=[...new Set([...this.candidates||[],...e?[e]:[]])].filter(o=>o!==this.defaultEntity||e===o),i=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return p`
      <div class="row">
        <select class=${e?"":"def"} aria-label=${this.label||"Entity"} @change=${o=>{let a=o.target.value;if(a===nV){this._other=!0,o.target.value=e;return}this._emit(a)}}>
          <option value="" ?selected=${!e}>${i}</option>
          ${t.map(o=>p`<option value=${o} ?selected=${o===e}>${this._name(o)}</option>`)}
          <option value=${nV}>Other entity…</option>
        </select>
        ${e?p`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:h}
      </div>
      ${this._other?p`<div class="picker"><ha-form .hass=${this.hass} .data=${{e}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${o=>{o.stopPropagation();let a=o.detail.value?.e;a&&this._emit(a)}}></ha-form></div>`:h}
    `}};Z(z9,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),Z(z9,"styles",Q`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",z9);var Ev=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],xe=r=>typeof r=="string"&&r.startsWith("device:"),N9=class extends q{constructor(){super(),this._open=new Set}get _sources(){let e=this.config?.metric_sources||{};return Array.isArray(e.sources)?e.sources.filter(t=>t?.ref).map(t=>({ref:t.ref,overrides:{...t.overrides||{}},disabled:!!t.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(e){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:e}}}_commit(e){let t=e.filter(H=>H?.ref).map(H=>{let V=Object.fromEntries(Object.entries(H.overrides||{}).filter(([,L])=>L));return{ref:H.ref,...Object.keys(V).length?{overrides:V}:{},...H.disabled?{disabled:!0}:{}}}),i={...this.config?.metric_sources||{}};delete i.primary,delete i.fallback,delete i.custom,delete i.device_map,t.length?i.sources=t:delete i.sources;let o=H=>(this.hass?.states?.[H]?.attributes?.supported_features&7)!==0,a=H=>H.map(V=>V.ref).filter(V=>typeof V=="string"&&V.startsWith("weather.")),C=a(t.filter(H=>!H.disabled)),n=a(t),s=C.find(o)||C[0]||n.find(o)||n[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:s,metric_sources:Object.keys(i).length?i:void 0}}))}_info(e){let t=this.hass;if(xe(e)){let o=t?.devices?.[e.slice(7)],a=g3(t,e.slice(7))[0];return{icon:"mdi:access-point",name:o?.name_by_user||o?.name||e.slice(7),kind:"Station device",sub:[o?.manufacturer,o?.model].filter(Boolean).join(" "),integ:U0(t,a)}}let i=t?.states?.[e];return e.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:i?.attributes?.friendly_name||e,kind:"Weather entity",sub:"forecast + condition",integ:U0(t,e)}:{icon:"mdi:eye-outline",name:i?.attributes?.friendly_name||e,kind:"Sensor",sub:e,integ:U0(t,e)}}_candidates(e,t){let i=this.hass;if(!xe(e))return[];let o=t&&i.states[t]?.attributes?.unit_of_measurement,a=e.slice(7),C=i.devices?.[a]?.config_entries||[];return[...new Set([a,...Object.entries(i.devices||{}).filter(([,s])=>(s.config_entries||[]).some(H=>C.includes(H))).map(([s])=>s)])].flatMap(s=>g3(i,s)).filter(s=>s.startsWith("sensor.")&&i.states[s]?.attributes?.unit_of_measurement&&(!o||i.states[s].attributes.unit_of_measurement===o)).sort()}render(){if(!this.hass)return h;let e=this._sources,t=this._station(e),i=e.some(o=>o.ref.startsWith("weather.")&&!o.disabled);return p`
      <div class="list">
        ${e.map((o,a)=>this._source(o,a,e,t))}
      </div>
      ${i?h:p`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(e):p`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(e,t,i,o){let a=this._info(e.ref),C=this._open.has(e.ref),n=Ev.map(([L,d])=>{let u=Ws(o,this.hass,e.ref,L),f=e.ref.startsWith("weather.")?this.hass.states[e.ref]?.attributes?.[L]!=null:!!u;return{k:L,label:d,def:e.ref.startsWith("weather.")?f?e.ref:null:u,ov:e.overrides[L]||"",has:f||!!e.overrides[L]}}),s=n.filter(L=>L.has).length,H=L=>{let d=i.map(u=>({...u,overrides:{...u.overrides}}));L(d),this._commit(d)},V=()=>{let L=new Set(this._open);L.has(e.ref)?L.delete(e.ref):L.add(e.ref),this._open=L};return p`<div class="src ${C?"open":""} ${e.disabled?"off":""}">
      <div class="hd" @click=${V} role="button" tabindex="0" aria-expanded=${String(C)} @keydown=${L=>(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),V())}>
        <span class="rank">${t+1}</span>
        <ha-icon class="lead" icon=${a.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${a.name}${e.disabled?p` <span class="tag">hidden</span>`:h}</div>
          <div class="sb"><span class="pill">${a.kind}</span>${a.integ?p`<span class="pill integ">${a.integ}</span>`:h}<span>${s} value${s===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${L=>L.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${t===0} @click=${()=>H(L=>[L[t-1],L[t]]=[L[t],L[t-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${t===i.length-1} @click=${()=>H(L=>[L[t+1],L[t]]=[L[t],L[t+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${e.disabled?"Use this source":"Skip this source"} @click=${()=>H(L=>L[t].disabled=!L[t].disabled)}><ha-icon icon=${e.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>H(L=>L.splice(t,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${C?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${C?p`<div class="bd">
            ${a.sub?p`<div class="meta">${a.sub}</div>`:h}
            <div class="tbl">
              ${n.filter(L=>L.has||xe(e.ref)).map(L=>{let d=L.ov||L.def,u=d&&!d.startsWith("weather.")?d1(this.hass,d):null,f=d?.startsWith("weather.")?this.hass.states[d]?.attributes?.[L.k]:null;return p`<span class="k">${L.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${L.ov} .defaultEntity=${L.def}
                    .defaultLabel=${e.ref.startsWith("weather.")&&!L.ov?L.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(e.ref,L.def)} label=${L.label}
                    @value-changed=${v=>H(x=>x[t].overrides[L.k]=v.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${u?`${u.value} ${u.unit}`:f!=null?String(f):""}</span>`})}
            </div>
            ${e.ref.startsWith("weather.")?p`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:h}
          </div>`:h}
    </div>`}_addForm(e){let t=i=>{if(!i||e.some(C=>C.ref===i)){this._adding=!1;return}this._adding=!1;let o=e.slice(),a=o.findIndex(C=>C.ref.startsWith("weather."));xe(i)&&a>=0?o.splice(a,0,{ref:i,overrides:{}}):o.push({ref:i,overrides:{}}),this._commit(o)};return p`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${i=>{i.stopPropagation(),t(i.detail.value?.d&&`device:${i.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${i=>{i.stopPropagation(),t(i.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};Z(N9,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),Z(N9,"styles",Q`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",N9);var I7=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],Fv=r=>/^#[0-9a-f]{6}$/i.test(r||"")?r:/^#[0-9a-f]{3}$/i.test(r||"")?"#"+r.slice(1).split("").map(e=>e+e).join(""):"#888888";function Pv(r){if(r.type==="statistics"){let e=r.preset||"temps",t=de[e]||{};return((Array.isArray(r.metrics)&&r.metrics.length?r.metrics:t.metrics||Y0[e]?.metrics)||[]).map((o,a)=>({metric:o,color:r.colors?.[o],defColor:t.series?.[o]?.color||S1[o]?.color||I7[a%I7.length],entity:r.entity_overrides?.[o]||"",key:"map"}))}return Array.isArray(r.series)&&r.series.length?r.series.map((e,t)=>({metric:e.metric,idx:t,color:e.color,defColor:S1[e.metric]?.color||I7[t%I7.length],entity:e.entity||"",label:e.label,key:"list"})):(d9[r.type]||d9.graph).map((e,t)=>({metric:e.metric,color:r.colors?.[e.metric],defColor:e.color||S1[e.metric]?.color||I7[t%I7.length],entity:r.entities?.[e.metric]||"",key:"map"}))}var I9=class extends q{_set(e,t,i){let o=O7(this.panel);if(e.key==="list")o.series[e.idx]=L5({...o.series[e.idx],[t]:i||void 0});else{let a=t==="color"?"colors":o.type==="statistics"?"entity_overrides":"entities";o[a]=L5({...o[a]||{},[e.metric]:i||void 0}),Object.keys(o[a]).length||delete o[a]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:o}}))}_candidates(e){let t=e&&this.hass.states[e]?.attributes?.unit_of_measurement;return r9(this.station,this.hass).filter(i=>i.startsWith("sensor.")&&(!t||this.hass.states[i]?.attributes?.unit_of_measurement===t))}render(){if(!this.hass||!this.panel)return h;let e=Pv(this.panel),t=this.panel.type!=="statistics"||Vi(this.panel)==="sgcc";return p`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${e.map(i=>{let o=l1(i.metric,this.station,this.hass),a=i.color||i.defColor;return p`<span class="k">${i.label||S1[i.metric]?.label||i.metric||"Series"}</span>
          <span class="c">
            ${t?p`<input type="color" .value=${Fv(a)} title="Line color" aria-label="Line color" @change=${C=>this._set(i,"color",C.target.value)} />
                ${i.color?p`<button type="button" title="Default color" @click=${()=>this._set(i,"color","")}>↺</button>`:h}`:p`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${i.entity} .defaultEntity=${o} .candidates=${this._candidates(o)} label=${`${i.metric} sensor`}
            @value-changed=${C=>this._set(i,"entity",C.detail.value)}></wsfc-entity-select>`})}
    </div>`}};Z(I9,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),Z(I9,"styles",Q`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",I9);var Dv=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],Rv={wind_bearing:"Wind direction",precipitation:"Rain rate"},j9=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."},{name:"background_effects",label:"Animation effects",when:r=>r.background==="animated",selector:{select:{multiple:!0,options:[["rain","Rain"],["snow","Snow"],["lightning","Lightning"],["sky","Sky"],["moon","Moon"],["sun","Sun"],["cloud","Clouds"]].map(([r,e])=>({value:r,label:e}))}},default:["rain","snow","lightning","sky","moon","sun","cloud"],helper:"Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun."},{name:"background_moon_phase",label:"Show moon phase",when:r=>r.background==="animated",selector:{boolean:{}},default:!0,helper:"Shade the night-time moon to the current lunar phase (off: a full moon)."},{name:"anim_low_power",label:"Low-power animation",when:r=>r.background!=="image",selector:{boolean:{}},default:!1,helper:"For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer."},...Gr.map(([r,,e],t)=>({name:r,label:e,when:i=>i.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:t===0?"Animation speeds (100% = normal, 50% = half as fast), for the card background and the hero's own animation.":void 0})),{name:"background_image",when:r=>r.background==="image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",when:r=>r.background==="image",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",when:r=>r.background==="image",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",when:r=>r.background==="image",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]],["Panels",[{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},when:r=>!r.anim_low_power,helper:"With a card background: blur behind panels. Default 6 (off with Low-power animation)."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:r=>!!r.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:r=>!!r.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]]],we=[["Screen fit & sizing",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",when:r=>r.layout==="fullscreen",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"auto_fit",label:"Auto-fit to the screen",selector:{boolean:{}},default:!1,helper:"The layout and sizes you set are the design, for the Screen guide's size (Layout Map \u2192 Screen guide). Every screen shows that design scaled to fit: rows share the screen height, the layout stays as designed until the screen is phone-narrow, and each panel's contents scale with the screen \u2014 smaller where they'd still overflow. Full screen recommended."},{name:"auto_fit_min",label:"Smallest content scale",when:r=>!!r.auto_fit,selector:{number:{min:30,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:60,helper:"Below this a panel scrolls instead, so text stays readable."},{name:"auto_fit_max",label:"Largest content scale",when:r=>!!r.auto_fit,selector:{number:{min:100,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:150,helper:"On screens bigger than the design."},{name:"fit_strict",label:"Strict fit to screen dimensions",when:r=>r.layout==="fullscreen"&&r.fit_height!==!1&&!r.auto_fit,selector:{boolean:{}},default:!1,helper:"Every panel is exactly the height you set, so the page fits the screen as the layout map shows; content taller than its panel scrolls inside the panel. Off: panels grow to fit their content (the page may scroll)."},{name:"panel_overflow",label:"When a panel's content doesn't fit",when:r=>!(r.layout==="fullscreen"&&r.fit_height!==!1&&(r.fit_strict||r.auto_fit)),selector:{select:{options:[{value:"grow",label:"Grow \u2014 the panel gets taller (and its row with it)"},{value:"scroll",label:"Scroll \u2014 the panel keeps its height, with a scroll bar inside"}]}},default:"grow",helper:"For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}]],["Alerts bar",[{name:"alerts_bar",label:"Alerts bar",selector:{boolean:{}},default:!1,helper:"A thin row at the top that appears only while something needs attention: heat or frost (the Frost & heat watch rules), lightning within 10 miles in the last 30 minutes, and weather alerts. Tap one to open its panel."},{name:"alerts_watch",label:"Heat and frost",when:r=>!!r.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_lightning",label:"Lightning nearby",when:r=>!!r.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_entity",label:"Weather alerts sensor",when:r=>!!r.alerts_bar,selector:{entity:{domain:"sensor"}},helper:"Optional, e.g. the NWS Alerts integration's sensor (its Alerts attribute)."}]],["Collapsed panels",[{name:"collapsed_view",label:"Default view when collapsed",selector:{select:{options:[{value:"minimal",label:"Minimal \u2014 the title and a line of info (e.g. 7 strikes today)"},{value:"compact",label:"Compact \u2014 one row of tiles with all the data"}]}},default:"minimal",helper:"For panels with Collapse button on; panels without a tiles view use Minimal. Each panel can override it \u2014 Convert all now clears those overrides."},{name:"collapsed_open",label:"A folded panel opens",selector:{select:{options:[{value:"auto",label:"Automatic \u2014 over the other panels in full screen or Auto-fit, else in place"},{value:"inplace",label:"In place \u2014 the panel grows, the others move"},{value:"overlay",label:"Over the other panels \u2014 nothing moves; tap outside or Esc to close"},{value:"popup",label:"As a pop-up"}]}},default:"auto",helper:"Each panel can override this (Collapse \u2192 Opens)."},{name:"open_icon_small",label:"Small pop-over icon",selector:{select:{options:B7.map((r,e)=>({value:r,label:`mdi:${r}${e?"":" (default)"}`}))}},default:B7[0],helper:"On a folded panel that opens over the others."},{name:"open_icon_full",label:"Full-size icon",selector:{select:{options:z7.map((r,e)=>({value:r,label:`mdi:${r}${e?"":" (default)"}`}))}},default:z7[0],helper:"Expand to the whole card, tap-to-open tiles and panels that open as a pop-up."},{name:"collapse_title_tap",label:"Tap the title to fold / unfold",selector:{boolean:{}},default:!0,helper:"For panels with Collapse button on (each panel can override this)."},{name:"show_collapse_hint",label:"Hint under the title while folded",selector:{boolean:{}},default:!1,helper:'e.g. "Tap title to show" (off by default: the open button already says it).'},{name:"collapse_hint",label:"Hint text",when:r=>!!r.show_collapse_hint,selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while folded",selector:{select:{options:[{value:"summary",label:"The panel's summary (e.g. strikes today, rain today)"},{value:"off",label:"None"}]}},default:"summary"},...zr]]],W9=[{name:"remember",selector:{boolean:{}},default:!0,helper:"Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)."}],zD=[...j9,...we].flatMap(([,r])=>r),F3={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},_e={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember Panel Button States",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",fit_strict:"Strict fit to screen dimensions",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},HV=(r,e)=>e.split(".").reduce((t,i)=>t==null?t:t[i],r);function Bv(r,e,t){let i=e.split("."),o=r;i.slice(0,-1).forEach(C=>o=o[C]=o[C]&&typeof o[C]=="object"?{...o[C]}:{});let a=i[i.length-1];t===void 0||t===""||t===null||Array.isArray(t)&&!t.length?delete o[a]:o[a]=t}function di(r,e,t={}){let i={};for(let o of e){let a=HV(r,o.name);i[o.name]=a!==void 0?a:t[o.name]!==void 0?t[o.name]:o.default}return i}function pi(r,e,t,i={}){let o=O7(r);for(let a of e){let C=t[a.name],n=i[a.name]!==void 0?i[a.name]:a.default;n!==void 0&&JSON.stringify(C)===JSON.stringify(n)&&(C=void 0),Bv(o,a.name,C)}return L5(o)}var sV={air_quality:[["Tablet compact",{layout:"tiles",show_scale:!1,show_location:!1,show_source:!1,content_scale:85,content_width:70,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{layout:"scale",show_scale:null,show_location:null,show_source:null,content_scale:null,content_width:null,content_height:null,compact:null}]],pollen:[["Tablet compact",{hide_when_off_season:!0,hide_when_none:!0,show_season:!1,show_source:!1,show_location:!1,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{show_season:null,show_source:null,show_location:null,content_height:null,compact:null}]],rain:[["Essentials",{show_rows:["rain_rate","rain_today","rain_24h","rain_event"],show_normal:!1,compact:null}],["Everything",{show_rows:["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],show_normal:null,compact:null}],["Tiles row",{compact:!0}]],garden:[["Frost only",{show_soil:!1,show_water:!1,show_gdd:!1}],["Everything",{show_outlook:null,show_season:null,show_gdd:null,show_soil:null,show_water:null}]],records:[["Area only",{show_station:!1}],["Today only",{show_month:!1,show_all_time:!1}],["Everything",{show_station:null,show_today:null,show_month:null,show_all_time:null}]],lightning:[["Quiet",{hide_when_zero:!0,show_battery:!1,show_note:!1}],["Everything",{hide_when_zero:null,show_battery:null,show_note:null}]],wind:[["Rose, chart on demand",{view:"rose",chart_mode:"popover"}],["Compass and chart",{view:"compass",chart_mode:null}]],radar:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],wind_map:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],frost_watch:[["Tiles row",{compact:!0}],["Full",{compact:null}]],vpd:[["Number only",{show_plant:!1,show_scale:!1,show_note:!1}],["Full",{show_plant:null,show_scale:null,show_note:null,show_advice:null}]]},zv=r=>r.type==="metric"?S1[r.metric]?.label||"Metric":(T1(r)?.label||r.type).replace(/ \(.*\)$/,"");function ge(r,e,t={}){let i=HV(r,e.name);if(i===void 0)return!1;let o=t[e.name]!==void 0?t[e.name]:e.default;return o===void 0||JSON.stringify(i)!==JSON.stringify(o)}var VV=["span","rows","display","span_medium","span_narrow","rows_compact"];function Nv(r,e){let t=r[e],i=r[e+1],o=n=>{let s={...n};for(let H of VV)delete s[H];return s},a=r.slice();if(i.type==="stack"&&i.direction==="vertical"){let n=H2(t)+H2(i);return a.splice(e,2,L5({...i,span:Math.max(z2(t),z2(i)),rows:n||void 0,panels:[o(t),...i.panels||[]]})),a}let C=H2(t)+H2(i);return a.splice(e,2,L5({type:"stack",direction:"vertical",span:Math.max(z2(t),z2(i)),rows:C||void 0,panels:[o(t),o(i)]})),a}function LV(r,e,t){let i={...r[t]};for(let a of VV)delete i[a];let o=r.slice();return o[e]={...o[e],panels:[...o[e].panels||[],i]},o.splice(t,1),o}function lV(r,e,t){let i=r[e],o=(i.panels||[]).slice(),[a]=o.splice(t,1),C=r.slice(),n=L5({...a,span:z2(i),rows:void 0});return o.length?C.splice(e,1,{...i,panels:o},n):C.splice(e,1,n),C}function Iv(r){let e=T1(r);return{span:e.span,rows:e.rows,display:"grid",in_bar:Z3({...r,in_bar:void 0}),show_title:Br.has(r.type)?!!r.title:!0}}function ui(r){let e=T1(r);return r.title?r.title:r.type==="metric"?S1[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:e.label}var U9=class extends q{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(e){this._config=e,this._savedJson==null&&(this._savedJson=JSON.stringify(e)),j8(JSON.stringify(e)!==this._savedJson)}shouldUpdate(e){if(e.size===1&&e.has("hass")){let t=e.get("hass"),i=this.hass;if(t&&i&&t.entities===i.entities&&t.devices===i.devices&&t.areas===i.areas&&t.themes===i.themes&&t.locale===i.locale&&t.language===i.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>(this._open==="general"||this._open==="behavior")&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,j8(!1),Ur(!1)}get _panels(){return U8(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(e){this._config=e,j8(JSON.stringify(e)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_setPanels(e,t){let i={...this._withoutLegacyHero(),panels:e};for(let[o,a]of Object.entries(t||{}))a===void 0?delete i[o]:i[o]=a;this._emit(i)}_withoutLegacyHero(){let{hero:e,...t}=this._config;return e===!1?{...t,hero:e}:t}render(){return!this.hass||!this._config?h:p`
      <div class="ed">
        <div class="hdr"><span class="name">${l4}</span><span class="ver">v${Y3}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${()=>Mi({mode:"export",config:this._config,cardType:`custom:${m0}`})}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${()=>Mi({mode:"import",cardType:`custom:${m0}`,onImport:e=>{this._flexEds.clear(),this._openPanel=null,this._emit(e),this.requestUpdate()}})}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${L9()} @change=${e=>{Ur(e.target.checked),this.requestUpdate()}} />
          <ha-icon icon="mdi:play-circle-outline"></ha-icon><span>Live preview</span>
          <span class="live-hint">${L9()?"animations and maps running":"animations and maps paused while editing"}</span>
        </label>
        <div class="findbar">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input class="ftext find" type="search" placeholder="Find a setting (e.g. compact, blur, rain)" .value=${this._q||""} aria-label="Find a setting"
            @input=${e=>{this._q=e.target.value,this.requestUpdate()}} @keydown=${e=>e.key==="Escape"&&(this._q="",this.requestUpdate())} />
          <label class="onlychg" title="Show only the settings you've changed from their defaults"><input type="checkbox" .checked=${!!this._onlyChanged} @change=${e=>{this._onlyChanged=e.target.checked,this.requestUpdate()}} />Only changed</label>
        </div>
        ${this._q&&this._q.trim().length>=2?this._searchResults(this._q.trim()):h}
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general(j9))}
        ${this._section("buttons","mdi:gesture-tap-button","Panel buttons",()=>this._buttonsEditor())}
        ${this._section("behavior","mdi:tune-variant","Layout & Behavior",()=>p`${this._general(we)}${this._convertBar()}`)}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout Map",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_searchIndex(){let e=[],t=o=>o.label||_e[o.name]||o.name.replace(/[._]/g," ");for(let[o,a,C]of[["general","Appearance",j9],["behavior","Layout & Behavior",we]])for(let[n,s]of C)for(let H of s)e.push({label:t(H),help:H.helper||"",where:`${a} \u203A ${n}`,go:{open:o},f:H});for(let o of W9)e.push({label:t(o),help:o.helper||"",where:"Panel buttons",go:{open:"buttons"},f:o});let i=(o,a,C)=>{let n=T1(o);if(!n)return;let s=o.title||zv(o),H=(C?W8:I8).map(L=>({f:L,sec:L.section||"Size and Scaling"})),V=n.groups?n.groups.flatMap(([L,d],u)=>d.map(f=>({f,sec:`${n.label} options`,sub:u?L:null}))):(n.schema||[]).map(L=>({f:L,sec:L.section||(["content_width","content_height"].includes(L.name)?"Size and Scaling":`${n.label} options`)}));for(let{f:L,sec:d,sub:u}of[...H,...V])e.push({label:t(L),help:L.helper||"",where:`Panels \u203A ${s} \u203A ${d}${u?` \u203A ${u}`:""}`,go:{open:"panels",panel:a,type:o.type,sec:d,sub:u},f:L})};return this._panels.forEach((o,a)=>{i(o,`${a}`,!1),o.type==="stack"&&(o.panels||[]).forEach((C,n)=>C&&i(C,`${a}.${n}`,!0))}),e}_searchResults(e){let t=e.toLowerCase().split(/\s+/).filter(Boolean),i=this._searchIndex().filter(o=>{let a=`${o.label} ${o.help} ${o.where} ${o.f.name}`.toLowerCase();return t.every(C=>a.includes(C))});return i.sort((o,a)=>(a.label.toLowerCase().includes(t[0])?1:0)-(o.label.toLowerCase().includes(t[0])?1:0)),p`<div class="finds" role="listbox" aria-label="Matching settings">
      ${i.length?i.slice(0,40).map(o=>p`<button class="find-hit" role="option" @click=${()=>this._goTo(o)}><b>${o.label}</b><span>${o.where}</span></button>`):p`<div class="fhelp">No setting matches "${e}".</div>`}
      ${i.length>40?p`<div class="fhelp">${i.length-40} more — type more of the name.</div>`:h}
    </div>`}async _goTo(e){let t=e.go;if(this._q="",this._open=t.open,t.panel!=null){this._openPanel=t.panel,this._flatOpen||(this._flatOpen=new Map);for(let o of this._flatOpen.keys())o.startsWith(`${t.type}|`)&&this._flatOpen.set(o,!1);this._flatOpen.set(`${t.type}|${t.sec}`,!0),t.sub&&(this._subOpen||(this._subOpen=new Set),this._subOpen.add(`${t.type}:${t.sub}`))}this.requestUpdate(),await this.updateComplete,await new Promise(o=>requestAnimationFrame(o));let i=[...this.renderRoot.querySelectorAll(".fld, .frow, .fchk, label")].find(o=>o.textContent.trim().startsWith(e.label));i&&(i.scrollIntoView({block:"center",behavior:"smooth"}),i.classList.add("flash"),setTimeout(()=>i.classList.remove("flash"),1600))}_section(e,t,i,o){let a=this._open===e;return p`<details class="panel" ?open=${a} @toggle=${C=>{C.target.open?this._open=e:this._open===e&&(this._open=null)}}>
      <summary><ha-icon icon=${t}></ha-icon><span>${i}</span></summary>
      ${a?p`<div class="body">${o()}</div>`:h}
    </details>`}_form(e,t,i){return aV({data:e,schema:t,onChange:i,label:o=>o.label||_e[o.name]||o.name,helper:o=>o.helper,haForm:(o,a,C)=>this._haForm(o,a,C),auto:o=>this._autoText(o)})}_autoText(e){let t={panel_radius:"radius",row_height:"row",gap:"gap"}[e.name];if(!t)return null;let{preview:i,dashboard:o}=lH(),a=i?.[t],C=o?.[t],n=t==="radius"?" (from the theme's card corner radius)":t==="row"&&this._config.layout==="fullscreen"&&this._config.fit_height!==!1?" (calculated to fit the screen)":"";return a&&C&&a!==C?`${a} in this preview, ${C} on the dashboard${n}`:a||C?`${a||C}${n}`:null}_haForm(e,t,i){return p`<ha-form
      .hass=${this.hass}
      .data=${e}
      .schema=${t}
      .computeLabel=${o=>o.label||_e[o.name]||o.name}
      .computeHelper=${o=>o.helper}
      @value-changed=${o=>{o.stopPropagation(),i(o.detail.value)}}
    ></ha-form>`}_convertBar(){let e=this._config.collapsed_view||"minimal",i=this._panels.flatMap(a=>[a,...a.type==="stack"?a.panels||[]:[]]).filter(a=>a.collapsed_view&&a.collapsed_view!=="default").length;return p`<div class="convert">
      <button class="btn sm" ?disabled=${!i} @click=${()=>{let a=C=>{if(!C)return C;let{collapsed_view:n,...s}=C;return s};this._flexEds.clear(),this._setPanels(this._panels.map(C=>C.type==="stack"?{...a(C),panels:(C.panels||[]).map(a)}:a(C)))}} title="Clears every panel's own View when collapsed">
        <ha-icon icon="mdi:swap-horizontal"></ha-icon>Convert all now</button>
      <span class="fhelp">${i?`${i===1?"1 panel sets its own view":`${i} panels set their own view`}; Convert all now makes every collapsible panel ${e==="compact"?"Compact":"Minimal"}.`:`Every collapsible panel follows the default (${e==="compact"?"Compact":"Minimal"}).`}</span>
    </div>`}_general(e=j9){let t=this._config.background||"none";return e.map(([i,o])=>{let a=this._onlyChanged?o.filter(n=>ge(this._config,n,F3)):o;if(!a.length)return h;let C=o.some(n=>ge(this._config,n,F3));return p`<div class="agrp"><div class="agrp-t">${i}${C?p`<i class="chg" title="Has changed settings"></i>`:h}</div>${this._form(di(this._config,a,F3),a,n=>{let{panels:s,...H}=this._config,V=pi(H,a,n,F3);this._config.panels&&(V.panels=this._config.panels),this._emit(V)})}</div>`})}_stationDevice(){let e=(this._config.metric_sources?.sources||[]).find(t=>!t.disabled&&String(t.ref).startsWith("device:"));return e?e.ref.slice(7):void 0}_stationEditor(){let e=this._station,t=[...Dv,"rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id","aqi","pm2_5","pm10","ozone"].map(o=>{let a=S1[o]?.find||S1[o]?.aq?l1(o,e,this.hass):V5(e,this.hass,o)||(this.hass.states[e.entity]?.attributes?.[o]!=null?e.entity:null),C=a&&!a.startsWith("weather.")?d1(this.hass,a):null,n=a?.startsWith("weather.")?this.hass.states[a]?.attributes?.[o]:null;return{k:o,e:a,v:C?`${C.value} ${C.unit}`:n!=null?String(n):"",label:Rv[o]||S1[o]?.label||o.replace(/_/g," "),integ:a?U0(this.hass,a):""}}),i=t.filter(o=>o.e).length;return p`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${o=>{let a={...this._config};o.detail.entity&&(a.entity=o.detail.entity),o.detail.metric_sources?a.metric_sources=o.detail.metric_sources:delete a.metric_sources,this._emit(a)}}></wsfc-sources-editor>
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${i} of ${t.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${t.map(o=>p`<span class="k">${o.label}</span><span class="e ${o.e?"":"none"}" title=${o.e||""}>${o.e||"not found"}</span><span class="i">${o.integ}</span><span class="v">${o.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_flexEditor(e,t,i){let o=`${e}:${t.type}`,a=this._flexEds.get(o);a||(a=document.createElement(dH),a.wsfcMode="sections",a.addEventListener("config-changed",L=>{L.stopPropagation(),a._wsfcOnChange?.(L.detail.config)}),this._flexEds.set(o,a));let C=L=>L.type==="sky_tracker"?Jr(L,this._station):s2(M9(L.type,this._station),L.flex||{});a.wsfcPanels=T1(t)?.flexPanels||null;let n=this._config.background==="animated"||this._config.background==="image"&&!!(this._config.background_image||this._config.background_image_url),s=[...T1(t)?.flexHide||[],...t.type==="hero"&&n?["show_condition_effects"]:[],...t.type==="hero"&&t.auto_scale?["header_temp_size","header_state_size","header_icon_size","header_secondary_size","clock_font_size","clock_date_font_size","chip_text_size","chip_icon_size","global_icon_size","global_text_size"]:[]];JSON.stringify(s)!==JSON.stringify(a.wsfcHide||[])&&(a.wsfcHide=s,a.requestUpdate?.()),a._wsfcOnChange=L=>{let d=O7(t),u=uH(L,C({...t,flex:void 0}));Object.keys(u).length?d.flex=u:delete d.flex,i(d)};let H=C(t),V=JSON.stringify(H);return a._wsfcJson!==V&&(a._wsfcJson=V,a.setConfig(H)),a.hass=this.hass,p`<div class="flexed">${a}</div>`}_guideSpec(){let e=this._config,t=e.layout_screen;if(!t||(e.layout_guide||"line")==="off")return null;let[i,o]=t==="window"?[window.innerWidth,window.innerHeight]:String(t).split(/[x×]/).map(Number);if(!i||!o)return null;let a=e.gap??12,C=e.layout==="fullscreen",n=e.panel_bar!==!1&&!this._panels.some(H=>H.type==="heading"&&H.show_bar),s=56+(C?16:8)+2*a+(n?40+a:0)+(e.title?44+a:0);return{w:i,h:o,chrome:s,gap:a,row:e.row_height||110,fit:C&&e.fit_height!==!1,strict:C&&e.fit_height!==!1&&!!e.fit_strict,mode:e.layout_guide||"line"}}_screenGuide(){let e=this._config,t=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],i=e.layout_screen||"",o=i&&!t.some(([C])=>C===i),a=C=>{let n={...this._config,...C};for(let s of Object.keys(C))(C[s]==null||C[s]==="")&&delete n[s];this._emit(n)};return p`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${C=>a({layout_screen:C.target.value==="custom"?"1600x900":C.target.value||void 0})}>
          ${t.map(([C,n])=>p`<option value=${C} ?selected=${C===i}>${n}</option>`)}
          <option value="custom" ?selected=${o}>Custom size…</option>
        </select><button class="btn sm ghost" title="Set the Screen guide to this device's browser window (open the editor on the tablet and press this)" @click=${()=>a({layout_screen:`${window.innerWidth}x${window.innerHeight}`})}><ha-icon icon="mdi:tablet"></ha-icon>This device</button></div>
      ${o?p`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${i} placeholder="1600x900" @change=${C=>a({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(C.target.value.trim())?C.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):i})} /></div>`:h}
      ${i?p`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${C=>a({layout_guide:C.target.value==="line"?void 0:C.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([C,n])=>p`<option value=${C} ?selected=${(e.layout_guide||"line")===C}>${n}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${e.layout==="fullscreen"&&e.fit_height!==!1?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:h}
    </div>`}_layoutEditor(){let e=this._config,t=this._mapFor==="phone",i=Array.isArray(e.phone_layout)?e.phone_layout:null,o=s=>{let H={...this._config};s&&s.length?H.phone_layout=s:delete H.phone_layout,this._emit(H)},a=this._panels.map((s,H)=>({p:s,i:H})).filter(({p:s})=>s.display!=="popup"),C=()=>{let s=new Map((i||[]).map((H,V)=>[Number(H.i),H]));return a.map(({p:H,i:V})=>({...H,__i:V,span:s.get(V)?.span??12,rows:s.get(V)?.rows??H.rows??0,show:s.has(V)?s.get(V).show!==!1:H.show})).sort((H,V)=>((i||[]).findIndex(L=>Number(L.i)===H.__i)+1||1e3+H.__i)-((i||[]).findIndex(L=>Number(L.i)===V.__i)+1||1e3+V.__i))},n=s=>s.filter(H=>H.__i!=null).map(H=>({i:H.__i,span:z2(H),...H2(H)?{rows:H2(H)}:{},...H.show===!1?{show:!1}:{}}));return p`
      <div class="frow"><label for="lm-for">Layout for</label>
        <select id="lm-for" class="sel" @change=${s=>{this._mapFor=s.target.value,this.requestUpdate()}}>
          <option value="main" ?selected=${!t}>Main layout (tablets and larger)</option>
          <option value="phone" ?selected=${t}>Phone layout (narrow screens)${i?"":" \u2014 not set"}</option>
        </select></div>
      ${t?p`<p class="hint">On screens narrower than ${e.narrow_width||720} px the card uses this layout: its own order, widths and heights for the same panels. Without one, panels stack full width automatically.</p>
            <div class="presets">${i?p`<button class="btn sm ghost" @click=${()=>o(null)}><ha-icon icon="mdi:delete-outline"></ha-icon>Remove the phone layout</button>`:p`<button class="btn sm" @click=${()=>o(a.map(({p:s,i:H})=>({i:H,span:12,...s.rows?{rows:s.rows}:{}})))}><ha-icon icon="mdi:cellphone"></ha-icon>Create a phone layout</button>`}</div>
            ${i?p`<wsfc-layout-map .panels=${C()} @layout-changed=${s=>o(n(s.detail.panels))}></wsfc-layout-map>`:h}`:p`<p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the main layout${i?"; phones use the Phone layout":" \u2014 phones stack the panels automatically (or set a Phone layout above)"}. Dashed = hidden on load.</p>
            ${this._screenGuide()}
            ${this._guideSpec()?p`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
              @probe-measured=${s=>{this._measured=s.detail,this.requestUpdate()}}></wsfc-layout-probe>`:h}
            <wsfc-layout-map .panels=${this._panels} .guide=${this._guideSpec()} .measured=${this._guideSpec()?this._measured:null} @layout-changed=${s=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(s.detail.panels)}}></wsfc-layout-map>`}
    `}_panelList(){return p`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(e,t)=>this._setPanels(e,t),"")}
    `}_buttonsEditor(){let e=this._config,t=this._panels,i=t.findIndex(V=>V.type==="heading"),o=i>=0&&!!t[i].show_bar,a=e.panel_bar===!1?"hidden":o?"heading":"top",C=V=>{let L=t.map((d,u)=>u===i?L5({...d,show_bar:V==="heading"?!0:void 0}):d);V==="heading"&&i<0&&L.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(L,{panel_bar:V==="hidden"?!1:void 0})},n=(V,L)=>{let d=f=>L5({...f,in_bar:L===Z3({...f,in_bar:void 0})?void 0:L}),u=t.map((f,v)=>{let x=V.includes(`${v}`)?d(f):f;if(x.type==="stack"&&Array.isArray(x.panels)){let w=x.panels.map((y,b)=>y&&V.includes(`${v}.${b}`)?d(y):y);w.some((y,b)=>y!==x.panels[b])&&(x={...x,panels:w})}return x});this._setPanels(u)},s=[];t.forEach((V,L)=>{s.push([V,`${L}`,!1]),V.type==="stack"&&(V.panels||[]).forEach((d,u)=>d&&s.push([d,`${L}.${u}`,!0]))});let H=s.map(([,V])=>V);return p`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${V=>C(V.target.value)}>
          <option value="top" ?selected=${a==="top"}>Above the panels</option>
          <option value="heading" ?selected=${a==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${a==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(di(e,W9,F3),W9,V=>{let{panels:L,...d}=this._config,u=pi(d,W9,V,F3);this._config.panels&&(u.panels=this._config.panels),this._emit(u)})}
      <div class="btnbar">
        <button class="btn sm" @click=${()=>n(H,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>n(H,!1)}>None</button>
      </div>
      <div class="checks">
        ${s.map(([V,L,d])=>p`<label class="chk ${d?"nested":""}">
          <input type="checkbox" .checked=${Z3(V)} @change=${u=>n([L],u.target.checked)} />
          <ha-icon icon=${V.icon||V.type==="metric"&&S1[V.metric]?.icon||T1(V).icon}></ha-icon>
          <span>${ui(V)}</span>${V.display==="popup"?p`<span class="tag">pop-up</span>`:V.show===!1?p`<span class="tag">hidden on load</span>`:h}
        </label>`)}
      </div>
    `}_list(e,t,i){let o=!!i,a=Object.entries(H0).filter(([s])=>!(o&&s==="hero")).sort(([s,H],[V,L])=>s==="hero"?-1:V==="hero"?1:H.label.localeCompare(L.label)),C=i||"top",n=(this._addTypes||(this._addTypes={}))[C]||(o?"metric":this._addType);return p`
      <div class="rows">${e.map((s,H)=>this._panelRow(s,H,e,t,i?`${i}.${H}`:`${H}`,o))}</div>
      <div class="add">
        <select class="sel" @change=${s=>{this._addTypes[C]=s.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([s,H])=>p`<option value=${s} ?selected=${s===n}>${H.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let s={type:n};s.type==="metric"&&(s.metric="temperature"),s.type==="stack"&&(s.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),t([...e,s]),this._openPanel=i?`${i}.${e.length}`:`${e.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${o?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(e,t,i,o,a,C){let n=T1(e),s=this._openPanel===a||e.type!=="stack"&&String(this._openPanel||"").startsWith(`${a}.`),H=e.show===!1,V=()=>this._flexEds.clear(),L=v=>{let x=i.slice(),w=t+v;w<0||w>=x.length||([x[t],x[w]]=[x[w],x[t]],V(),this._openPanel=null,o(x))},d=(v,x)=>{let w=i.slice();w[t]=v,o(w,x)},u=C?`${e.grow!=null?`grow ${e.grow}`:""}${e.rows?` \xB7 ${e.rows} rows`:""}`:`${z2(e)}/12${H2(e)?` \xD7 ${H2(e)}`:""}${e.display==="popup"?" \xB7 pop-up":""}`,f=e.type==="stack"?`${e.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(e.panels||[]).length} panels`:n.label;return p`<div class="row ${s?"open":""} ${H?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${e.icon||e.type==="metric"&&S1[e.metric]?.icon||(e.type==="stack"&&e.direction==="vertical"?"mdi:view-agenda-outline":n.icon)}></ha-icon>
        <div class="txt"><div class="n">${ui(e)}</div><div class="s">${f}${u?` \xB7 ${u}`:""}</div></div>
        ${C?p`<button class="ib" title="Move up" ?disabled=${t===0} @click=${()=>L(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${t===i.length-1} @click=${()=>L(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:h}
        ${C?h:p`<button class="ib" title=${H?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>d(L5({...e,show:H?void 0:!1}))}>
              <ha-icon icon=${H?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${C&&/^\d+\.\d+$/.test(a)?p`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{V(),this._openPanel=null,this._setPanels(lV(this._panels,Number(a.split(".")[0]),t))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:h}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${s?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let v=i.slice();v.splice(t+1,0,O7(e)),V(),o(v)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let v=i.slice();v.splice(t,1),V(),this._openPanel=null,o(v)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${s?this._panelBody(e,a,d,C):h}
      ${e.type==="stack"?this._stackKids(e,t,a,d,C):h}
    </div>`}_stackKids(e,t,i,o,a){let n=!a?this._panels.map((H,V)=>[H,V]).filter(([H,V])=>V!==t&&H.type!=="hero"&&H.type!=="stack"):[],s=(this._moveIn||(this._moveIn={}))[i]??n[0]?.[1]??"";return p`<div class="kids">
      ${this._list(e.panels||[],(H,V)=>o({...e,panels:H},V),i)}
      ${n.length?p`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${H=>{this._moveIn[i]=Number(H.target.value),this.requestUpdate()}}>
              ${n.map(([H,V])=>p`<option value=${V} ?selected=${V===s}>${ui(H)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(LV(this._panels,t,Number(s)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:h}
    </div>`}_flat(e,t,i,o=!1){let a=`${e.type}|${t}`;this._flatOpen||(this._flatOpen=new Map);let C=!!this._flatOpen.get(a);return p`<details class="flat" ?open=${C} @toggle=${n=>{if(!(n.target!==n.currentTarget||n.target.open===!!this._flatOpen.get(a))){if(n.target.open)for(let s of this._flatOpen.keys())s.startsWith(`${e.type}|`)&&this._flatOpen.set(s,!1);this._flatOpen.set(a,n.target.open),this.requestUpdate()}}}>
      <summary>${t}${o?p`<i class="chg" title="Has changed settings"></i>`:h}</summary>
      <div class="flat-body">${i}</div>
    </details>`}_sections(e,t,i,o,a,C=!0,n=null){let s=[];for(let L of t){let d=L.sub?`sub:${L.sub}`:L.section?`sec:${L.section}`:`sec:${a}`,u=s.find(f=>f.k===d);u||s.push(u={k:d,f:[]}),u.f.push(L)}let H=L=>this._form(di(e,L,i),L,d=>o({...pi(e,L,d,i),type:e.type})),V=this._onlyChanged;return s.map(({k:L,f:d})=>{let u=V?d.filter(x=>ge(e,x,i)):d;if(!u.length)return h;let f=d.some(x=>ge(e,x,i)),v=L.slice(4);if(L.startsWith("sub:")){let x=`${e.type}:${v}`,w=(this._subOpen||(this._subOpen=new Set)).has(x);return p`<details class="sub psub" ?open=${w} @toggle=${y=>{if(!(y.target!==y.currentTarget||y.target.open===this._subOpen.has(x))){if(y.target.open){for(let b of[...this._subOpen])b.startsWith(`${e.type}:`)&&this._subOpen.delete(b);this._subOpen.add(x)}else this._subOpen.delete(x);this.requestUpdate()}}}>
          <summary><ha-icon icon=${u[0]?.subIcon||"mdi:weather-sunset"}></ha-icon><span>${v}</span>${f?p`<i class="chg" title="Has changed settings"></i>`:h}</summary>
          ${w?p`<div class="psub-body">${H(u)}</div>`:h}
        </details>`}return C?this._flat(e,v,H(u),f):p`<div class="grp">${v}${f?p`<i class="chg" title="Has changed settings"></i>`:h}</div>${H(u)}`})}_panelBody(e,t,i,o){let a=T1(e),C=(b,E)=>(b?.overflow==="scroll"&&!o&&!(Number(b.rows??a?.rows??0)>=1)&&(b={...b,rows:1}),i(b,E)),n=["content_width","content_height"],s=(a.schema||[]).filter(b=>n.includes(b.name)).map(b=>({...b,section:"Size and Scaling"})),H=s.length?{...a,schema:a.schema.filter(b=>!n.includes(b.name))}:a,V=o?{show_title:Br.has(e.type)?!!e.title:!0}:Iv(e),L=o?W8:I8;e.type==="hero"&&(L=L.filter(b=>!["icon","display","in_bar"].includes(b.name))),mi(e.type)||(L=L.filter(b=>b.section!=="Collapse"));let d=this._config,u=d.layout==="fullscreen"&&d.fit_height!==!1&&(d.fit_strict||d.auto_fit),f={collapsed_view:()=>d.collapsed_view==="compact"?"Compact":"Minimal",collapsed_open:()=>({inplace:"In place",overlay:"Over the other panels",popup:"As a pop-up"})[d.collapsed_open]||(d.layout==="fullscreen"||d.auto_fit?"Automatic: over the other panels":"Automatic: in place"),collapse_title_tap:()=>d.collapse_title_tap===!1?"Off":"On",show_collapse_hint:()=>d.show_collapse_hint?"Show":"Hide",collapsed_info:()=>d.collapsed_info==="off"?"None":"The panel's summary",overflow:()=>u||d.panel_overflow==="scroll"?"Scroll":"Grow"};L=L.map(b=>{let E=b.selector?.select?.options;return!f[b.name]||!E?.some(F=>F.value==="default")?b:{...b,selector:{select:{...b.selector.select,options:E.map(F=>F.value==="default"?{...F,label:`Card default \u2014 ${f[b.name]()}`}:F)}}}}),R7.has(e.type)||(L=L.filter(b=>!["collapsed_view","compact_expand","compact_title","compact"].includes(b.name))),nH.has(e.type)&&(L=L.filter(b=>!["show_title","title","show_icon","icon"].includes(b.name)||e.type!=="clock"&&b.name==="title"));let v=["graph","temp_humidity","uv_solar","statistics"].includes(e.type),x=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...e.type==="metric"?["metric"]:[],...e.type==="statistics"?["preset"]:[],...e.type==="stack"?["panels","direction"]:[]],w=Object.keys(e).some(b=>!x.includes(b)),y=()=>C(Object.fromEntries(Object.entries(e).filter(([b])=>x.includes(b))));return p`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!w} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),y()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${sV[e.type]&&!o?p`<div class="presets"><span class="fhelp">Presets</span>${sV[e.type].map(([b,E])=>p`<button class="btn sm ghost" @click=${()=>{let F={...e};for(let[$,D]of Object.entries(E))D===null?delete F[$]:F[$]=D;this._flexEds.clear(),C(F)}}>${b}</button>`)}</div>`:h}
      ${v?p`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${e} .station=${this._station} @panel-changed=${b=>C(b.detail.panel)}></wsfc-series-editor>`:h}
      ${this._sections(e,s.length?(()=>{let b=L.findIndex(F=>F.name==="content_scale"),E=L.slice();return E.splice(b<0?E.length:b+1,0,...s),E})():L,V,C,"Size and Scaling")}
      ${H.groups?this._flat(e,`${H.label} options`,H.groups.map(([b,E,F],$)=>this._sections(e,$===0?E:E.map(D=>({...D,sub:b,subIcon:F})),{},C,b,!1))):H.schema.length?this._sections(e,H.schema,{},C,`${H.label} options`,!0,`${H.label} options`):h}
      ${H.flex?p`${e.type==="sky_tracker"?p`<div class="grp">Arc & sky details</div>`:h}
            ${e.type==="sky_tracker"?p`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:h}
            ${this._flexEditor(t,e,C)}`:h}
    </div>`}};Z(U9,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),Z(U9,"styles",[CV,Q`
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
    .hdr .io { margin-left: auto; display: inline-flex; gap: 6px; }
    .live { display: flex; align-items: center; gap: var(--ltek-sp-2, 8px); margin: 0 0 var(--ltek-sp-3, 12px); padding: 6px 10px; border-radius: var(--ltek-r-card, 12px);
      border: 1px solid var(--ltek-c-border-soft); cursor: pointer; font-size: var(--ltek-fs-label, 14px); }
    .live input { accent-color: var(--ltek-c-accent); width: 16px; height: 16px; margin: 0; }
    .live ha-icon { --mdc-icon-size: 18px; color: var(--ltek-c-accent); }
    .live .live-hint { margin-left: auto; color: var(--ltek-c-muted); font-size: var(--ltek-fs-small, 12px); }
    .guidebar { margin: 0 0 var(--ltek-sp-3); }
    /* Flat expandable settings sections (one per settings group of a panel). */
    .findbar { display: flex; align-items: center; gap: var(--ltek-sp-3); margin: 0 0 var(--ltek-sp-3); }
    .findbar ha-icon { --mdc-icon-size: 20px; color: var(--ltek-c-muted); }
    .findbar .find { flex: 1; min-width: 0; }
    .onlychg { display: inline-flex; gap: 6px; align-items: center; font-size: var(--ltek-fs-label); color: var(--ltek-c-label); white-space: nowrap; cursor: pointer; }
    .finds { display: flex; flex-direction: column; gap: 2px; margin: 0 0 var(--ltek-sp-4); max-height: 320px; overflow: auto; border: 1px solid var(--accent-color, var(--ltek-c-accent)); border-radius: var(--ltek-r-ctrl); padding: 4px; }
    .find-hit { display: flex; flex-direction: column; align-items: flex-start; gap: 1px; text-align: left; padding: 6px 8px; border: 0; border-radius: 6px; background: transparent; color: inherit; font: inherit; cursor: pointer; }
    .find-hit:hover, .find-hit:focus-visible { background: var(--ltek-c-accent-fade); outline: none; }
    .find-hit b { font-size: var(--ltek-fs-label); font-weight: var(--ltek-fw-semibold); }
    .find-hit span { font-size: var(--ltek-fs-small); color: var(--ltek-c-muted); }
    .flash { animation: wsfc-flash 1.6s ease; border-radius: 6px; }
    @keyframes wsfc-flash { 0%, 60% { background: var(--ltek-c-accent-fade); box-shadow: 0 0 0 2px var(--ltek-c-accent); } 100% { background: transparent; box-shadow: none; } }
    .chg { display: inline-block; width: 7px; height: 7px; border-radius: 50%; margin-left: 8px; vertical-align: middle; background: var(--warning-color, #ffa600); flex: 0 0 auto; }
    .presets { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin: 0 0 var(--ltek-sp-3); }
    .convert { display: flex; gap: var(--ltek-sp-3); align-items: center; flex-wrap: wrap; margin: var(--ltek-sp-2) 0 var(--ltek-sp-4); }
    details.flat { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft); border-radius: 0; }
    details.flat + details.flat { margin-top: 0; }
    details.flat[open] { border-color: var(--accent-color, var(--ltek-c-accent)); border-radius: var(--ltek-r-ctrl); margin: 6px 0; }
    details.flat[open] + details.flat { border-top-color: transparent; }
    details.flat > summary { list-style: none; cursor: pointer; user-select: none; display: flex; align-items: center; gap: 8px; padding: var(--ltek-sp-3) var(--ltek-sp-3);
      font-size: var(--ltek-fs-label); font-weight: var(--ltek-fw-semibold); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent); }
    details.flat > summary::-webkit-details-marker { display: none; }
    details.flat > summary::after { content: ""; margin-left: auto; width: 8px; height: 8px; border-right: 2px solid var(--ltek-c-accent); border-bottom: 2px solid var(--ltek-c-accent); transform: rotate(45deg); transition: transform 0.2s ease; }
    details.flat[open] > summary::after { transform: rotate(-135deg); }
    details.flat > summary:focus-visible { outline: 2px solid var(--ltek-c-accent); outline-offset: -2px; }
    details.flat > .flat-body { padding: 0 var(--ltek-sp-4) var(--ltek-sp-4); }
    details.flat > .flat-body > .grp:first-child { margin-top: 0; border-top: 0; padding-top: 0; }
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
    .chk.nested { padding-left: var(--ltek-sp-6, 24px); }
    .chk .tag { font-size: var(--ltek-fs-tiny); color: var(--ltek-c-muted); white-space: nowrap; }
    /* A stack's panels, indented under its row. */
    .kids { margin: 0 var(--ltek-sp-2) var(--ltek-sp-2) var(--ltek-sp-6, 24px); padding-left: var(--ltek-sp-3); border-left: 2px solid var(--ltek-c-accent); display: flex; flex-direction: column; gap: var(--ltek-sp-2); }
    .nest { border-left: 2px solid var(--ltek-c-border); padding-left: var(--ltek-sp-3); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .flexed { }
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",U9);globalThis.__wsfcEditorHelpers={stackWithNext:Nv,unstack:lV,moveIntoStack:LV};globalThis.__wsfcSchemas={APPEARANCE_GROUPS:j9,LAYOUT_GROUPS:we,GENERAL_DEFAULTS:F3,REMEMBER:W9,LABELS:_e,PANEL_TYPES:H0,COMMON_SCHEMA:I8,STACK_CHILD_SCHEMA:W8};var Wv=720,mi=r=>!["hero","metric","stack","clock","chips","heading"].includes(r),Uv=1100;R1.__wsfcExtraEntity=qs;var cV=r=>[r.tile_shadow===!1?"no-shadow":"",r.tile_border===!1?"no-border":"",r.tile_glow===!1?"no-glow":""].filter(Boolean).join(" ");function jv(r){let e=[];r.panel_radius!=null&&e.push(`--wsfc-radius:${Number(r.panel_radius)}px`);let t={soft:"0 2px 6px rgba(0,0,0,.25)",medium:"0 4px 14px rgba(0,0,0,.35)",strong:"0 8px 28px rgba(0,0,0,.5)"};if(t[r.panel_shadow]&&e.push(`--wsfc-tile-drop:${t[r.panel_shadow]}`),r.panel_glow){let i=r.panel_glow_color||r.panel_border_color||"var(--primary-color)";e.push(`--wsfc-tile-glow:0 0 ${Number(r.panel_glow_size??10)}px ${i}`)}return(r.panel_border_width!=null||r.panel_border_color)&&e.push(`--wsfc-tile-border:${Number(r.panel_border_width??1)}px solid ${r.panel_border_color||"var(--divider-color, rgba(127,127,127,.3))"}`),e}var G9=class extends q{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(e){let t=Object.keys(e?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(e?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),o=[];return i&&o.push({ref:`device:${i.id}`}),t&&o.push({ref:t}),{entity:t||"weather.home",metric_sources:{sources:o}}}setConfig(e){if(!e?.entity||!String(e.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let t=U8(e);this._config={...e,panels:t},this._popup=null,this._focus=null,this._hidden=this._loadHidden(t),this._collapsed=this._loadCollapsed(t)}get _strict(){return this._full&&this._config.fit_height!==!1&&(!!this._config.fit_strict||!!this._config.auto_fit)}_phoneLayout(){let e=this._config?.phone_layout;return this._layoutSize==="narrow"&&Array.isArray(e)&&e.length?e:null}get _autoFit(){return!!this._config?.auto_fit}_designScreen(){let e=/^(\d{3,5})\s*[x×]\s*(\d{3,5})$/.exec(String(this._config?.layout_screen||""));return e?[Number(e[1]),Number(e[2])]:null}_autoBase(){let e=this._config,t=this._designScreen(),i=(Number(e.auto_fit_min)||60)/100,o=(Number(e.auto_fit_max)||150)/100;if(!t||!this._full)return 1;let a=this.screenWidth||window.innerWidth,C=this.screenHeight?this.screenHeight+72:window.innerHeight;return Math.max(i,Math.min(o,Math.min(a/t[0],C/t[1])))}_ownFit(e){return e.type==="hero"||e.type==="radar"||e.type==="wind_map"||e.type==="wind"&&e.fit!==!1}_autoFitPanels(){if(!this._autoFit)return;let e=this.renderRoot?.querySelector(".grid");if(!e)return;this._afBusy=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this._afBusy=!1)),this._watchAutoFit(e);let t=this._config,i=this._autoBase(),o=(Number(t.auto_fit_min)||60)/100;for(let C of e.querySelectorAll(":scope > section.tile[data-i]")){let n=this._at(Number(C.dataset.i)),s=[...C.children].find(L=>L.tagName?.startsWith("WSFC-")||L.__wsfcPanel);if(!n||!s||this._ownFit(n)||C.classList.contains("compact-tile"))continue;let H=Math.max(.4,Math.min(2,(Number(n.content_scale)||100)/100));if(C.classList.contains("collapsed")){s.__wsfcAuto=i,s.style.zoom=String(H*i);continue}let V=i;if(s.style.zoom=String(H*V),C.classList.contains("strict")||C.classList.contains("fit"))for(let L=0;L<6;L++){let d=Math.min(s.clientHeight/Math.max(1,s.scrollHeight),s.clientWidth/Math.max(1,s.scrollWidth));if(!(d<.995)||V<=o)break;V=Math.max(o,V*d*.99),s.style.zoom=String(H*V)}s.__wsfcAuto=V}let a=this.renderRoot.querySelector(".scroller");if(this._strict&&a&&!this._afRefit&&Math.abs(e.getBoundingClientRect().height-a.clientHeight)>2){this._afRefit=!0;try{this._fit()}finally{this._afRefit=!1}}}_watchAutoFit(e){if(!this._autoFit){this._afRo?.disconnect(),this._afRo=null;return}this._afRo||(this._afRo=new ResizeObserver(()=>{this._afBusy||this._afT||(this._afT=setTimeout(()=>{this._afT=null,requestAnimationFrame(()=>this._autoFitPanels())},1e3))}));let t=[...e.querySelectorAll(":scope > section.tile > *")].filter(o=>o.tagName?.startsWith("WSFC-")),i=this._afSeen||(this._afSeen=new WeakSet);for(let o of t)i.has(o)||(i.add(o),this._afRo.observe(o))}_canCollapse(e){let t=T1(e);return!!(e.collapsible||this._compactAlways(e))&&mi(e.type)&&!t?.bare&&(e.show_title!==!1||this._viewOf(e)==="compact")}_collapseOpt(e,t,i){return(e[t]==="on"?!0:e[t]==="off"?!1:e[t]==="default"?void 0:e[t])??this._config[t]??i}_titleTap(e,t,i){if(!this._canCollapse(t)||this._focus!=null||!this._collapseOpt(t,"collapse_title_tap",!0))return!1;let o=e.composedPath(),a=o.findIndex(n=>n.classList?.contains?.("head"));return a<0||o.slice(0,a).some(n=>/^(BUTTON|A|SELECT|INPUT|TEXTAREA|HA-ICON-BUTTON|HA-SWITCH)$/.test(n.tagName||"")||n.getAttribute?.("role")==="button"||n.classList?.contains?.("seg"))?!1:(e.stopPropagation(),this._toggleCollapse(t,i),!0)}_compactAlways(e){return R7.has(e.type)&&(!!e.compact||e.type==="air_quality"&&e.layout==="compact")}_openMode(e){let t=e.collapsed_open&&e.collapsed_open!=="default"?e.collapsed_open:this._config.collapsed_open&&this._config.collapsed_open!=="auto"?this._config.collapsed_open:null;return t==="inplace"||t==="overlay"||t==="popup"?t:this._full||this._autoFit?"overlay":"inplace"}_viewOf(e){return R7.has(e.type)&&(this._compactAlways(e)&&(!e.collapsed_view||e.collapsed_view==="default")||(e.collapsed_view&&e.collapsed_view!=="default"?e.collapsed_view:this._config.collapsed_view||"minimal")==="compact")?"compact":"minimal"}_renderCompact(e,t,i,o){let a=b9.has(e.type)?this._panelEl(e,t):null,C=le(e,this.hass,this._station,a);a&&!C.length&&!this._compactRetry&&(this._compactRetry=setTimeout(()=>{this._compactRetry=null,this.requestUpdate()},1200));let n=Math.max(.4,Math.min(2,(Number(e.content_scale)||100)/100)),s=T1(e),H=e.title||this._autoTitle(e),V=e.compact_title!==!1,L=e.compact_expand===!1;return p`<section class="tile ${e.type} compact-tile ${L?"own-btn":""} ${o}" style=${`grid-column: span ${i};grid-row: span 1;${this._foldColors(e,!0)}`} data-i=${t}>
      ${L?p`<button class="collapse" type="button" @click=${()=>this._toggleCollapse(e,t)} aria-label=${`Expand ${H}`} title="Show"><ha-icon icon=${this._foldIcon(e,!0)}></ha-icon></button>`:h}
      <div class="cwrap" style=${n!==1?`zoom:${n}`:""}>${Me(C,{icon:e.show_icon===!1||e.compact_icon===!1?null:e.icon||s.icon,title:V?H:"",onTap:e.compact_expand!==!1?()=>this._toggleCollapse(e,t):null,onTile:d=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:d},bubbles:!0,composed:!0}))})}</div>
      ${a?p`<div class="chide" aria-hidden="true">${a}</div>`:h}
    </section>`}_foldDecorate(e,t,i,o,a=!0){e.lite=this._lite||o,e.toggleAttribute("collapsed",o),e.toggleAttribute("title-tap",a&&this._canCollapse(t)&&this._focus==null&&!!this._collapseOpt(t,"collapse_title_tap",!0));let C=this._collapseOpt(t,"collapse_title_tap",!0),n=o&&this._collapseOpt(t,"show_collapse_hint",!1)?String(this._collapseOpt(t,"collapse_hint","")||(C?"Tap title to show":"Collapsed \u2014 tap the arrow to show")):"",H=[o?UH(t,t.collapsed_info&&t.collapsed_info!=="default"?t.collapsed_info:this._config.collapsed_info||"summary",this.hass,this._station,e):"",n].filter(Boolean).join(" \xB7 ");H?e.style.setProperty("--wsfc-collapse-hint",JSON.stringify(H)):e.style.removeProperty("--wsfc-collapse-hint")}_foldColors(e,t){let i=C=>this._collapseOpt(e,C,""),o=t&&i("collapsed_icon_color")||i("expanded_icon_color"),a=t&&i("collapsed_text_color")||i("expanded_text_color");return`${o?`--wsfc-head-icon:${o};`:""}${a?`--wsfc-head-text:${a};`:""}`}get _iconSmall(){return`mdi:${B7.includes(this._config.open_icon_small)?this._config.open_icon_small:B7[0]}`}get _iconFull(){return`mdi:${z7.includes(this._config.open_icon_full)?this._config.open_icon_full:z7[0]}`}_foldIcon(e,t){if(!t)return"mdi:chevron-up";let i=this._openMode(e);return i==="overlay"?this._iconSmall:i==="popup"?this._iconFull:"mdi:chevron-down"}_isCollapsed(e,t){return this._collapsed.has(this._key(e,t))}_toggleCollapse(e,t){if(this._overlay!=null&&String(this._overlay)===String(t)){this._overlay=null;return}if(this._isCollapsed(e,t)&&this._focus==null){let a=this._openMode(e);if(a==="popup"){this._overlay=null,this._popup=t;return}if(a==="overlay"){this._overlay=t;return}}let i=new Set(this._collapsed),o=this._key(e,t);if(i.has(o)?i.delete(o):i.add(o),this._collapsed=i,this._config.remember!==!1)try{localStorage.setItem(`${this._storageKey()}:collapsed`,JSON.stringify({sig:this._sig(this._config.panels),collapsed:[...i]}))}catch{}this.requestUpdate(),this._scheduleFit?.()}_loadCollapsed(e){let t=o=>R7.has(o.type)&&(!!o.compact||o.type==="air_quality"&&o.layout==="compact"),i=new Set(this._entries(e).map(([o,a])=>o.collapsible&&o.collapsed||t(o)&&o.collapsed!==!1?this._key(o,a):null).filter(Boolean));if(this._config.remember===!1||this.preview)return i;try{let o=JSON.parse(localStorage.getItem(`${this._storageKey()}:collapsed`)||"null");if(o?.sig===this._sig(e))return new Set(o.collapsed)}catch{}return i}_key(e,t){return e.id||`${t}:${e.type}`}_entries(e=this._config.panels){let t=[];return e.forEach((i,o)=>{t.push([i,o]),i.type==="stack"&&(i.panels||[]).forEach((a,C)=>a&&t.push([a,`${o}.${C}`]))}),t}_at(e){let t=this._config.panels;if(typeof e=="number")return t[e];let[i,o]=String(e).split(".").map(Number);return o==null?t[i]:t[i]?.panels?.[o]}_storageKey(){let e=this._config;return`wsfc:${e.storage_key||`${location.pathname}|${e.entity}|${e.title||""}`}`}_loadHidden(e){let t=new Set(this._entries(e).map(([i,o])=>i.show===!1?this._key(i,o):null).filter(Boolean));if(this._config?.remember===!1)return t;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(e))return new Set(i.hidden)}catch{}return t}_sig(e){return this._entries(e).map(([t,i])=>this._key(t,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){this._onUnsaved||(this._onUnsaved=()=>this.preview&&this.requestUpdate()),window.addEventListener("wsfc-unsaved",this._onUnsaved),this._onLive||(this._onLive=()=>this.requestUpdate()),window.addEventListener("wsfc-live",this._onLive),super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let t=e.contentRect.width,i=this._config||{},o=t<(i.narrow_width||Wv)?"narrow":t<(i.medium_width||Uv)?"medium":"wide";o!==this._size&&(this._size=o),this._width=t,this._scheduleFit()}),this._ro.observe(this),this._onKey=e=>{e.key==="Escape"&&(this._overlay!=null?this._overlay=null:this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-unsaved",this._onUnsaved),window.removeEventListener("wsfc-live",this._onLive),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),this._afRo?.disconnect(),this._afRo=null,this._afSeen=null,window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let e=this._config?.layout_size;return["wide","medium","narrow"].includes(e)?e:this._autoFit&&this._size==="medium"?"wide":this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let e=JSON.stringify([this._config?.panels,[...this._hidden||[]],[...this._collapsed||[]],this._focus,this._layoutSize,this._config?.layout,this._config?.auto_fit,this._config?.layout_screen,this._config?.auto_fit_min,this._config?.auto_fit_max]);e!==this._fitKey&&(this._fitKey=e,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_reportDetected(){let e=this.renderRoot?.querySelector(".grid"),t=e?.querySelector("section.tile:not(.bare):not(.stack):not(.hero)")||e?.querySelector("section.tile");if(!e||!t)return;let i=getComputedStyle(e),o=a=>a?`${Math.round(parseFloat(a))}px`:"";cH(this.preview?"preview":"dashboard",{radius:o(getComputedStyle(t).borderTopLeftRadius),row:o(e.style.getPropertyValue("--wsfc-row")||i.getPropertyValue("--wsfc-row")),gap:o(i.rowGap),theme:this.hass?.themes?.theme||""})}_fit(){queueMicrotask(()=>this._reportDetected());let e=this.renderRoot?.querySelector(".grid"),t=this.renderRoot?.querySelector(".scroller");if(!e||!t)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){e.style.getPropertyValue("--wsfc-row")&&e.style.removeProperty("--wsfc-row"),this._autoFitPanels();return}let o=i.min_row_height||60,a=i.max_row_height||400,C=t.clientHeight;if(!C)return;let n=f=>(e.style.setProperty("--wsfc-row",`${f}px`),e.getBoundingClientRect().height),s=o,H=o+40,V=n(s),L=n(H),d=(L-V)/(H-s),u=i.row_height||110;if(d>.5){u=Math.max(o,Math.min(a,s+(C-V)/d));let f=H,v=L;for(let x=0;x<4;x++){let w=n(u);if(Math.abs(w-C)<1.5||Math.abs(u-f)<.5)break;let y=(w-v)/(u-f);if(f=u,v=w,!(y>.5))break;u=Math.max(o,Math.min(a,u+(C-w)/y))}n(Math.floor(u))>C+1&&(u-=1)}e.style.setProperty("--wsfc-row",`${Math.floor(u)}px`),this._autoFitPanels()}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return h;let e=this._config,t=this._full,i=this._animatedBg,o=this._lite,a=[e.row_height?`--wsfc-row:${e.row_height}px`:"",e.gap!=null?`--wsfc-gap:${e.gap}px`:"",i?`--wsfc-panel-opacity:${e.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${e.anim_low_power?0:e.panel_blur??6}px`:"",e.anim_low_power?"--wsfc-cloud-will:transform;--wsfc-cloud-filter:none;--wsfc-cloud-filter-night:brightness(0.5)":"",...jv(e),...MH(e)].join(";"),C=e.panels.some(n=>n.type==="heading"&&n.show_bar);return p`
      <ha-card class=${`wsfc ${t?"full":""} ${this._strict?"strict":""} ${this._layoutSize} ${i?"animated":""} ${o?"lite":""}`} style=${a+(this.screenHeight?`;height:${this.screenHeight}px`:"")}>
        ${this.preview&&LH()?p`<div class="unsaved" role="status">✎ Unsaved changes — press Save in the editor to keep them</div>`:h}
        ${e.background==="image"?this._renderImage():i&&!o?this._renderBackground():h}
        ${e.title?this._renderTitle():h}
        ${e.panel_bar===!1||C?h:p`<div class="topbar">${this._renderBar()}</div>`}
        ${this._renderAlerts()}
        <div class="scroller"><div class="grid">${this._renderPanels()}${this._overlay!=null?this._renderOverlay():h}</div></div>
        ${this._popup!=null?this._renderPopup():h}
      </ha-card>
    `}get _lite(){return L9()?!1:!!(this.preview||this.editMode||/[?&]edit=1(&|$)/.test(globalThis.location?.search||""))}get _animatedBg(){let e=this._config?.background;return e==="animated"||e==="image"&&!!this._bgSource()}_bgSource(){let e=this._config||{};if(e.background_image_url)return String(e.background_image_url);let t=e.background_image;return(typeof t=="object"?t?.media_content_id:t)||""}_renderImage(){let e=this._config,t=this._bgSource();if(!t)return h;if(t.startsWith("media-source://")){let C=this._bgResolved;if(C?.id===t&&Date.now()-C.at<23*36e5)t=C.url;else{if(this._bgPending!==t){this._bgPending=t;let n=t;this.hass.callWS({type:"media_source/resolve_media",media_content_id:n}).then(s=>{this._bgResolved={id:n,url:s.url,at:Date.now()},this.requestUpdate()}).catch(()=>{}).finally(()=>{this._bgPending===n&&(this._bgPending=null)})}return h}}t.startsWith("/")&&this.hass?.hassUrl&&(t=this.hass.hassUrl(t));let i=t.replace(/["\\()]/g,C=>encodeURIComponent(C)),o=e.background_image_fit||"cover",a=Number(e.background_dim??.25);return p`<div class="bg bgimg" style="background-image:url(&quot;${i}&quot;);background-size:${o==="tile"?"auto":o};background-repeat:${o==="tile"?"repeat":"no-repeat"};--dim:${a}"></div>`}_renderBackground(){let e=this._config,t=this.hass.states[e.entity];if(!t)return h;this._watchHourly();let i=e.background_effects??!0;return p`<wsfc-animation-provider class="bg"
      .hass=${this.hass}
      .weatherEntity=${t}
      .config=${{entity:e.entity,show_condition_effects:i,show_moon_phase:e.background_moon_phase??!0,forecast:{show_sun_times:!0}}}
      .currentForecast=${this._hourlyNow}
    ></wsfc-animation-provider>`}_watchHourly(){let e=this._config.entity;this._hourlyFor!==e&&(this._unwatchHourly?.(),this._hourlyFor=e,this._unwatchHourly=w5(this.hass,e,"hourly",t=>{this._hourlyNow=t?.[0],this._hourly=t,this.requestUpdate()}))}_lowF(){let e=Date.now(),t=this.hass.states[this._config.entity]?.attributes?.temperature_unit,i=(this._hourly||[]).filter(a=>{let C=Date.parse(a.datetime);return C>e&&C<e+18*36e5}).map(a=>Number(a.temperature)).filter(Number.isFinite);if(!i.length)return null;let o=Math.min(...i);return t==="\xB0C"?o*9/5+32:o}_renderAlerts(){let e=this._config;if(!e.alerts_bar)return h;this._watchHourly();let t=QH(this.hass,this._station,e,this._lowF());return p`<div class="alertrow">${KH(t,i=>{if(i.entity)return this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i.entity},bubbles:!0,composed:!0}));let o=e.panels.findIndex(a=>a.type===i.type);o>=0&&(this._focus=o)})}</div>`}_renderTitle(){let e=this._config;return p`<div class="title-row">
      <ha-icon icon=${e.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${e.title}</span>
      ${e.subtitle?p`<span class="subtitle">${e.subtitle}</span>`:h}
    </div>`}_renderBar(){let e=this._config.panels,t=this._entries(e).filter(([i])=>Z3(i));return t.length?t.map(([i,o])=>{let a=T1(i),C=i.display==="popup"||this._isEmpty(i),n=C?this._popup===o:!this._hidden.has(this._key(i,o));return p`<button
        type="button"
        class="chip ${n?"on":""} ${C?"popup":""}"
        aria-pressed=${C?h:String(n)}
        aria-haspopup=${C?"dialog":h}
        @click=${()=>this._toggle(i,o)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${C?p`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:h}
      </button>`}):h}_autoTitle(e){return e.type==="metric"?e.label||e.metric||"Metric":e.type==="day"?Number(e.day_offset??1)===0?"Today":Number(e.day_offset??1)===1?"Tomorrow":`Day +${e.day_offset}`:e.type==="radar"&&e.radar===!1?"Map":e.type==="wind_map"?"Wind map":e.type==="statistics"?e.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[e.preset]||"Graph":T1(e).label.replace(/ \(.*\)$/,"")}_toggle(e,t){if(e.display==="popup"||this._isEmpty(e)){this._popup=this._popup===t?null:t;return}this._focus=null;let i=new Set(this._hidden),o=this._key(e,t);i.has(o)?i.delete(o):i.add(o),this._hidden=i,this._saveHidden()}_isHidden(e,t){return!Z3(e)||this._config.panel_bar===!1?e.show===!1:this._hidden.has(this._key(e,t))}_isEmpty(e,t){if(e.type==="stack"&&t!=null&&typeof t=="number"){let o=(e.panels||[]).filter(Boolean);return o.length>0&&o.every((a,C)=>this._isHidden(a,`${t}.${C}`)||this._isEmpty(a))}let i=T1(e)?.hideWhen;try{return!!(i&&i(e,this.hass,this._station))}catch{return!1}}_renderPanels(){let e=this._config.panels,t=e.map((a,C)=>C).filter(a=>e[a].display!=="popup"&&!this._isHidden(e[a],a)&&!this._isEmpty(e[a],a)),i=this._phoneLayout();if(i){let a=new Map(i.map((C,n)=>[Number(C.i),n]));t=t.filter(C=>i.find(n=>Number(n.i)===C)?.show!==!1).sort((C,n)=>(a.has(C)?a.get(C):1e3+C)-(a.has(n)?a.get(n):1e3+n))}if(this._focus!=null&&(t=[this._focus]),!t.length)return p`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let o=this._layoutSize;return t.map(a=>{let C=e[a],n=T1(C),s=i?.find(P=>Number(P.i)===a),H=s?{span:Math.max(1,Math.min(12,Number(s.span??12))),rows:Math.max(0,Number(s.rows??H2(C)))}:HH(C,o),V=this._focus!=null?12:H.span,L=this._focus!=null?Math.max(H2(C),5):H.rows,d=(!!n.fit||C.type==="hero"&&!!C.auto_scale)&&L>0&&C.fit!==!1&&this._focus==null,f=(C.overflow&&C.overflow!=="default"?C.overflow:this._strict?"scroll":this._config.panel_overflow||"grow")==="scroll"&&(this._strict?L>0:L>=1)&&this._focus==null,v=this._canCollapse(C)&&this._focus==null,x=v&&this._isCollapsed(C,a),w=v&&this._collapseOpt(C,"collapse_title_tap",!0),y=v?this._foldColors(C,x):"",b=`calc(${L} * var(--wsfc-row) + ${L-1} * var(--wsfc-gap))`,E=y+(x?`grid-column: span ${V};grid-row: span 1;`:`grid-column: span ${V};grid-row: span ${L?Math.max(1,Math.round(L*2)):2};${L?`min-height:${b};`:""}${f?`height:${b};`:""}`),F=n.bare||C.type==="hero",$=C.display==="tile_popup",D=!F&&!$&&!["metric","stack","clock","chips"].includes(C.type)&&o!=="narrow",k=C.tile_background&&C.tile_background!=="default"?`bg-${C.tile_background}`:"";return x&&this._viewOf(C)==="compact"?this._renderCompact(C,a,V,`${k} ${cV(C)}`):p`<section class="tile ${C.type} ${n.bare?"bare":""} ${k} ${cV(C)} ${L?"":"auto"} ${(d||f)&&!x?"fit":""} ${f&&!d&&!x?"strict":""} ${x?"collapsed":""} ${$&&!x?"tap":""} ${v?"can-collapse":""} ${w?"title-tap":""}" style=${E} data-i=${a}
          @click=${w?P=>this._titleTap(P,C,a):h}>
        ${v?p`<button class="collapse" type="button" @click=${()=>this._toggleCollapse(C,a)} aria-expanded=${String(!x)}
              aria-label=${`${x?"Expand":"Collapse"} ${C.title||this._autoTitle(C)}`} title=${x?"Show":"Collapse to its title"}>
              <ha-icon icon=${this._foldIcon(C,x)}></ha-icon></button>`:h}
        ${$&&!x?p`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${C.title||this._autoTitle(C)}`}
              @click=${P=>{if(w&&P.offsetY<52){P.stopPropagation(),this._toggleCollapse(C,a);return}this._popup=a}}><span><ha-icon icon=${this._iconFull}></ha-icon></span></button>`:h}
        ${D?p`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?a:null}
              aria-label=${this._focus==null?`Expand ${C.title||this._autoTitle(C)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?this._iconFull:"mdi:arrow-collapse"}></ha-icon>
            </button>`:h}
        ${this._panelEl(C,a)}
      </section>`})}_tileFor(e){let[t,i]=String(e).split("."),o=this.renderRoot?.querySelector(`.grid > section.tile[data-i="${t}"]`);return i==null||!o?o:o.querySelector("wsfc-panel-stack")?.shadowRoot?.querySelector(`section.tile[data-j="${i}"]`)||o}_renderOverlay(){let e=this._overlay,t=this._at(e),i=this._tileFor(e),o=this.renderRoot?.querySelector(".grid"),a=this.renderRoot?.querySelector(".scroller");if(!t||!i||!o)return queueMicrotask(()=>this._overlay=null),h;let C=()=>this._overlay=null,n=o.getBoundingClientRect(),s=i.getBoundingClientRect(),H=a.getBoundingClientRect(),V=Math.min(n.width,Math.max(s.width,360)),L=Math.max(0,Math.min(n.width-V,s.left-n.left)),d=Math.max(H.top,0),u=Math.min(H.bottom,window.innerHeight),f=u-s.top,v=s.bottom-d,w=f>=v||f>=(u-d)*.55?`top:${s.top-n.top}px;max-height:${Math.max(160,f-6)}px`:`bottom:${n.bottom-s.bottom}px;max-height:${Math.max(160,v-6)}px`;return p`<div class="ov-scrim" @click=${C}></div>
      <div class="ov tile ${t.type}" role="dialog" aria-label=${t.title||this._autoTitle(t)} style=${`left:${L}px;width:${V}px;${w}`}>
        <button class="expand close" type="button" @click=${C} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(t,e,!0)}
      </div>`}_renderPopup(){let e=this._popup,t=this._at(e);if(!t)return h;let i=()=>this._popup=null;return p`<div class="scrim" @click=${o=>o.target===o.currentTarget&&i()}>
      <div class="dialog tile ${t.type}" role="dialog" aria-modal="true" aria-label=${t.title||this._autoTitle(t)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(t,e,!0)}
      </div>
    </div>`}_panelEl(e,t,i=!1){this._els||(this._els=new Map);let o=`${i?"pop":"grid"}:${t}:${e.type==="wind"?"wind":JSON.stringify(e)}`,a=this._els.get(o);if(!a){a=document.createElement(T1(e).tag),this._els.set(o,a);for(let L of this._els.keys())L!==o&&L.startsWith(`${i?"pop":"grid"}:${t}:`)&&this._els.delete(L)}a.config=e,a.station=this._station,a.cardBg=this._animatedBg;let C=!i&&this._canCollapse(e)&&this._focus==null&&this._isCollapsed(e,t);a.autostart=this._canCollapse(e),this._foldDecorate(a,e,t,C,!i);let n=Number(e.content_scale)||100,s=Math.max(.4,Math.min(2,n/100))*(this._autoFit&&!i&&!this._ownFit(e)?a.__wsfcAuto||this._autoBase():1);a.style.zoom=s!==1?String(s):"";let H=Number(e.content_width)||100,V=Number(e.content_height)||100;return a.style.setProperty("--wsfc-sx",String(H/100)),a.style.setProperty("--wsfc-sy",String(V/100)),a.fit=!i&&(!!T1(e)?.fit||e.type==="hero"&&!!e.auto_scale)&&H2(e)>0&&e.fit!==!1&&this._focus==null,a.hass=this.hass,e.type==="heading"&&(a.bar=e.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),e.type==="stack"&&(a.card=i?null:this,a.path=t,a.foldKids=i?"":(e.panels||[]).map((L,d)=>L&&this._canCollapse(L)&&this._isCollapsed(L,`${t}.${d}`)?1:0).join(",")),e.type==="stack"&&!i&&(a.hiddenKids=(e.panels||[]).map((L,d)=>!!L&&(this._isHidden(L,`${t}.${d}`)||this._isEmpty(L))).join(",")),a}};Z(G9,"properties",{hass:{attribute:!1},preview:{type:Boolean},editMode:{type:Boolean},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0},_collapsed:{state:!0},_overlay:{state:!0},screenHeight:{attribute:!1},screenWidth:{attribute:!1}}),Z(G9,"styles",[r6,t6,ce,YH,Q`
    .alertrow:empty { display: none; }
    /* Compact view: one row of tiles; the panel's own element stays hidden for its data. */
    /* A folded panel open over the others. */
    .grid { position: relative; }
    .ov-scrim { position: absolute; inset: 0; z-index: 7; background: transparent; }
    .ov { position: absolute; z-index: 8; overflow: auto; box-sizing: border-box; display: flex; flex-direction: column;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)) !important; backdrop-filter: none !important;
      box-shadow: 0 10px 32px rgba(0, 0, 0, 0.55); border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35)); padding: 12px 14px; }
    .ov > .close { position: sticky; top: 0; margin-left: auto; margin-bottom: -32px; }
    .tile.compact-tile { min-height: 0; height: auto; padding-top: 8px; padding-bottom: 8px; justify-content: center; }
    .tile.compact-tile .cwrap { min-width: 0; }
    .tile.compact-tile .chide { display: none; }
    .tile.compact-tile.own-btn .cwrap { padding-right: 36px; }
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
    .tile.fit > :not(.expand):not(.tap-open):not(.collapse) { flex: 1 1 0; min-height: 0; }
    /* Strict fit: content taller than the panel scrolls inside it. */
    .tile.strict > :not(.expand):not(.tap-open):not(.collapse) { overflow: auto; scrollbar-width: thin; }
    /* Collapsed to the title header. */
    .tile.collapsed { min-height: 0 !important; height: auto !important; max-height: 80px; overflow: hidden; contain: none; }
    .tile.collapsed > :not(.expand):not(.tap-open):not(.collapse) { max-height: 48px; overflow: hidden; flex: 0 0 auto; }
    /* The fold button: a 36 px target, in the title's icon colour. */
    .collapse {
      position: absolute; top: 4px; right: 34px; z-index: 5;
      border: 0; background: transparent; color: var(--wsfc-head-icon, var(--secondary-text-color));
      cursor: pointer; padding: 6px; border-radius: 50%; line-height: 0;
    }
    .tile:not(:has(.expand)) .collapse { right: 4px; }
    .collapse ha-icon { --mdc-icon-size: 24px; }
    .collapse:hover { background: rgba(127, 127, 127, 0.18); }
    .collapse:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
    .tile.can-collapse .collapse ~ * { --wsfc-head-pad: 70px; }
    .tile.can-collapse:not(:has(.expand)) .collapse ~ * { --wsfc-head-pad: 40px; }
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
  `]);customElements.get(m0)||customElements.define(m0,G9);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===m0)||window.customCards.push({type:m0,name:`${l4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${l4.toUpperCase()}%c ${Y3}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");export{mi as canCollapseType,jv as panelStyleVars,cV as tileFx};
/*! Bundled license information:

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
