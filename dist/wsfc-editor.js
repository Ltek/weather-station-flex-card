/* weather-station-flex-card 2026.10.31.97 editor — https://github.com/Ltek/weather-station-flex-card */
var Z2=Object.defineProperty;var O3=Object.getOwnPropertyDescriptor;var _3=(M,C,V)=>C in M?Z2(M,C,{enumerable:!0,configurable:!0,writable:!0,value:V}):M[C]=V;var S1=(M,C,V,r)=>{for(var L=r>1?void 0:r?O3(C,V):C,i=M.length-1,A;i>=0;i--)(A=M[i])&&(L=(r?A(C,V,L):A(L))||L);return r&&L&&Z2(C,V,L),L};var $=(M,C,V)=>_3(M,typeof C!="symbol"?C+"":C,V);var f2=globalThis.__wsfcHost?.lit;if(!f2)throw new Error("wsfc-editor.js: the card did not provide lit; update every file of the card together");var{CSSResult:V7,LitElement:D,ReactiveElement:L7,_$LE:e7,_$LH:r7,adoptStyles:t7,css:R,defaultConverter:M7,getCompatibleStyle:i7,html:o,isServer:o7,mathml:a7,noChange:A7,notEqual:n7,nothing:u,render:l7,supportsAdoptingStyleSheets:d7,svg:s7,unsafeCSS:p7}=f2;var h2,S2;(function(M){M.language="language",M.system="system",M.comma_decimal="comma_decimal",M.decimal_comma="decimal_comma",M.space_comma="space_comma",M.none="none"})(h2||(h2={})),(function(M){M.language="language",M.system="system",M.am_pm="12",M.twenty_four="24"})(S2||(S2={}));var U=function(M,C,V,r){r=r||{},V=V??{};var L=new Event(C,{bubbles:r.bubbles===void 0||r.bubbles,cancelable:!!r.cancelable,composed:r.composed===void 0||r.composed});return L.detail=V,M.dispatchEvent(L),L};var g2=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/weather-forecast-card.ts"];if(!g2)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/weather-forecast-card.ts; update every file of the card together");var{WeatherForecastCard:X1}=g2;var w2=globalThis.__wsfcHost?.["lit/decorators"];if(!w2)throw new Error("wsfc-editor.js: the card did not provide lit/decorators; update every file of the card together");var{customElement:b2,eventOptions:u7,property:O2,query:x7,queryAll:Z7,queryAssignedElements:f7,queryAssignedNodes:h7,queryAsync:S7,standardProperty:g7,state:_2}=w2;var y2="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var k2="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var T2=Number.isNaN||function(C){return typeof C=="number"&&C!==C};function y3(M,C){return!!(M===C||T2(M)&&T2(C))}function k3(M,C){if(M.length!==C.length)return!1;for(var V=0;V<M.length;V++)if(!y3(M[V],C[V]))return!1;return!0}function F2(M,C){C===void 0&&(C=k3);var V=null;function r(){for(var L=[],i=0;i<arguments.length;i++)L[i]=arguments[i];if(V&&V.lastThis===this&&C(L,V.lastArgs))return V.lastResult;var A=M.apply(this,L);return V={lastResult:A,lastArgs:L,lastThis:this},A}return r.clear=function(){V=null},r}var T3=typeof global=="object"&&global&&global.Object===Object&&global,P2=T3;var F3=typeof self=="object"&&self&&self.Object===Object&&self,P3=P2||F3||Function("return this")(),B2=P3;var B3=B2.Symbol,Y=B3;var $2=Object.prototype,$3=$2.hasOwnProperty,R3=$2.toString,n1=Y?Y.toStringTag:void 0;function E3(M){var C=$3.call(M,n1),V=M[n1];try{M[n1]=void 0;var r=!0}catch{}var L=R3.call(M);return r&&(C?M[n1]=V:delete M[n1]),L}var R2=E3;var D3=Object.prototype,W3=D3.toString;function N3(M){return W3.call(M)}var E2=N3;var z3="[object Null]",I3="[object Undefined]",D2=Y?Y.toStringTag:void 0;function G3(M){return M==null?M===void 0?I3:z3:D2&&D2 in Object(M)?R2(M):E2(M)}var W2=G3;function U3(M){return M!=null&&typeof M=="object"}var N2=U3;var Q3="[object Symbol]";function j3(M){return typeof M=="symbol"||N2(M)&&W2(M)==Q3}var z2=j3;function q3(M,C){for(var V=-1,r=M==null?0:M.length,L=Array(r);++V<r;)L[V]=C(M[V],V,M);return L}var I2=q3;var K3=Array.isArray,G2=K3;var Y3=1/0,U2=Y?Y.prototype:void 0,Q2=U2?U2.toString:void 0;function j2(M){if(typeof M=="string")return M;if(G2(M))return I2(M,j2)+"";if(z2(M))return Q2?Q2.call(M):"";var C=M+"";return C=="0"&&1/M==-Y3?"-0":C}var q2=j2;function X3(M){return M==null?"":q2(M)}var g1=X3;function J3(M,C,V){var r=-1,L=M.length;C<0&&(C=-C>L?0:L+C),V=V>L?L:V,V<0&&(V+=L),L=C>V?0:V-C>>>0,C>>>=0;for(var i=Array(L);++r<L;)i[r]=M[r+C];return i}var K2=J3;function C0(M,C,V){var r=M.length;return V=V===void 0?r:V,!C&&V>=r?M:K2(M,C,V)}var Y2=C0;var H0="\\ud800-\\udfff",V0="\\u0300-\\u036f",L0="\\ufe20-\\ufe2f",e0="\\u20d0-\\u20ff",r0=V0+L0+e0,t0="\\ufe0e\\ufe0f",M0="\\u200d",i0=RegExp("["+M0+H0+r0+t0+"]");function o0(M){return i0.test(M)}var w1=o0;function a0(M){return M.split("")}var X2=a0;var J2="\\ud800-\\udfff",A0="\\u0300-\\u036f",n0="\\ufe20-\\ufe2f",l0="\\u20d0-\\u20ff",d0=A0+n0+l0,s0="\\ufe0e\\ufe0f",p0="["+J2+"]",J1="["+d0+"]",C2="\\ud83c[\\udffb-\\udfff]",m0="(?:"+J1+"|"+C2+")",C5="[^"+J2+"]",H5="(?:\\ud83c[\\udde6-\\uddff]){2}",V5="[\\ud800-\\udbff][\\udc00-\\udfff]",c0="\\u200d",L5=m0+"?",e5="["+s0+"]?",v0="(?:"+c0+"(?:"+[C5,H5,V5].join("|")+")"+e5+L5+")*",u0=e5+L5+v0,x0="(?:"+[C5+J1+"?",J1,H5,V5,p0].join("|")+")",Z0=RegExp(C2+"(?="+C2+")|"+x0+u0,"g");function f0(M){return M.match(Z0)||[]}var r5=f0;function h0(M){return w1(M)?r5(M):X2(M)}var t5=h0;function S0(M){return function(C){C=g1(C);var V=w1(C)?t5(C):void 0,r=V?V[0]:C.charAt(0),L=V?Y2(V,1).join(""):C.slice(1);return r[M]()+L}}var M5=S0;var g0=M5("toUpperCase"),i5=g0;function w0(M){return i5(g1(M).toLowerCase())}var X=w0;var o5=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/types.ts"];if(!o5)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/types.ts; update every file of the card together");var{CHART_ATTRIBUTES:a5,CURRENT_WEATHER_ATTRIBUTES:K,DEFAULT_CHART_ATTRIBUTE:f4,ForecastMode:h4,MAX_TEMPERATURE_PRECISION:H2,WEATHER_EFFECTS:b1}=o5;var b0={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},j=class extends D{constructor(){super(...arguments);this._schema=F2((V,r,L)=>[...this._genericSchema(V),...this._currentWeatherSchema(V),...this._forecastSchema(V),...this._interactionsSchema(L),...this._attributeEntitiesSchema(r),...this._advancedSchema()]);this._genericSchema=V=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:V("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:V("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:V("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:V("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:V("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:b1.map(r=>({value:r,label:X(r)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=V=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:K.map(r=>({value:r,label:V(`ui.card.weather.attributes.${r}`)||X(r).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:K.map(r=>({value:r,label:V(`ui.card.weather.attributes.${r}`)||X(r).replace(/_/g," ")}))}}}];this._forecastSchema=V=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:a5.map(r=>({value:r,label:r==="temperature_and_precipitation"?`${V("ui.card.weather.attributes.temperature")||"Temperature"}, ${V("ui.card.weather.attributes.precipitation")||"Precipitation"}`:V(`ui.card.weather.attributes.${r}`)||X(r).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:V("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:V("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:V("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:V("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:V("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=V=>{let r=[],L=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return V==="chart"?(r.push("double_tap_action"),L.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):r.push("hold_action","double_tap_action"),L.push({name:"",type:"optional_actions",flatten:!0,schema:r.map(i=>({name:`forecast_action.${i}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:L},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(i=>({name:i,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=V=>V.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:V.flatMap(L=>{let i=b0[L];return[{name:`current.attribute_entity_${L}`,optional:!0,selector:i?{entity:{domain:"sensor",device_class:i}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${L}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${L}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:H2}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:H2}}}]}];this._computeCustomAttributeLabel=V=>{switch(V.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return V.name}};this._addCustomAttribute=()=>{let V=V1(this._config.current?.show_attributes);this._commitCustomAttributes([...V,{}])};this._removeCustomAttribute=V=>{let r=V1(this._config.current?.show_attributes);r.splice(V,1),this._commitCustomAttributes(r)};this._customAttributeChanged=(V,r)=>{r.stopPropagation();let L=V1(this._config.current?.show_attributes);L[V]=r.detail.value,this._commitCustomAttributes(L)};this._computeLabel=V=>{if(V.name.startsWith("current.attribute_label_")){let L=V.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||X(L).replace(/_/g," ")} label`}if(V.name.startsWith("current.attribute_icon_")){let L=V.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||X(L).replace(/_/g," ")} icon`}if(V.name.startsWith("current.attribute_entity_")){let L=V.name.replace("current.attribute_entity_",""),i=this.localize(`ui.card.weather.attributes.${L}`)||X(L).replace(/_/g," "),A=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${i} ${A}`}let r=V.name.startsWith("forecast_action.")?V.name.split(".")[1]:V.name;switch(r){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${r}`)}};this._computeHelper=V=>{switch(V.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=V=>{let r;if(this._config?.entity&&V!=="ui.card.weather.attributes.precipitation"&&V.startsWith("ui.card.weather.attributes")){let L=this.hass.states[this._config.entity];L&&(r=this.hass.formatEntityAttributeName(L,V.replace("ui.card.weather.attributes.","")))}return r||(r=this.hass.localize(V)),r}}setConfig(V){this._config=V}render(){if(!this.hass||!this._config)return u;let V=O1(this._config),r=this._getSelectedAttributes(V),L=this._schema(this.localize.bind(this),r,V["forecast.mode"]);return o`
      <ha-form
        .hass=${this.hass}
        .data=${V}
        .schema=${L}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let V=V1(this._config.current?.show_attributes);return o`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${V.map((r,L)=>this._renderCustomAttributeRow(r,L))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${k2}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(V,r){return o`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${V}
          .schema=${O0}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${L=>this._customAttributeChanged(r,L)}
        ></ha-form>
        <ha-icon-button
          .path=${y2}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(r)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(V){let r={...this._config,current:{...this._config.current,show_attributes:y0(this._config.current?.show_attributes,V)}};U(this,"config-changed",{config:r})}_getSelectedAttributes(V){let r=V["current.show_attributes"];return r?Array.isArray(r)?r.map(L=>typeof L=="string"?L:L.name):[]:[]}_valueChanged(V){V.stopPropagation();let r=V.detail.value;r.forecast_mode==="show_both"?(r.show_current=!0,r.show_forecast=!0):r.forecast_mode==="show_current"?(r.show_current=!0,r.show_forecast=!1):(r.show_current=!1,r.show_forecast=!0),delete r.forecast_mode;let L=k0(r);if(delete L.temperature_entity,L?.forecast?.extra_attribute==="none"&&delete L.forecast.extra_attribute,Array.isArray(L.show_condition_effects)&&b1.every(A=>L.show_condition_effects.includes(A))&&(L.show_condition_effects=!0),L?.current){let i={},A={},p={};for(let s of Object.keys(L.current))if(s.startsWith("attribute_entity_")){let l=s.replace("attribute_entity_",""),c=L.current[s];c&&(i[l]=c),delete L.current[s]}else if(s.startsWith("attribute_label_")){let l=s.replace("attribute_label_",""),c=L.current[s];c&&(A[l]=c),delete L.current[s]}else if(s.startsWith("attribute_icon_")){let l=s.replace("attribute_icon_",""),c=L.current[s];c&&(p[l]=c),delete L.current[s]}if(Array.isArray(L.current.show_attributes)){let s=V1(this._config?.current?.show_attributes);L.current.show_attributes=A5(L.current.show_attributes,{entity:i,label:A,icon:p},s)}}U(this,"config-changed",{config:L})}};j.styles=R`
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
  `,S1([O2({attribute:!1})],j.prototype,"hass",2),S1([_2()],j.prototype,"_config",2),j=S1([b2("wsfc-flex-core-editor")],j);var L1=M=>typeof M=="string"&&K.includes(M),V1=M=>{if(!Array.isArray(M))return[];let C=[];for(let V of M)if(V!=null){if(typeof V=="string")L1(V)||C.push({name:V});else if(typeof V=="object"){let r=V;L1(r.name)||C.push(r)}}return C},A5=(M,C,V)=>{let r=K.every(A=>M.includes(A)),L=Object.keys(C.entity).length>0||Object.keys(C.label).length>0||Object.keys(C.icon).length>0;return V.length===0&&!L&&r?!0:[...M.map(A=>{let p=C.entity[A],s=C.label[A],l=C.icon[A];return p||s||l?{name:A,...p?{entity:p}:{},...s?{label:s}:{},...l?{icon:l}:{}}:A}),...V]},O0=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],_0=M=>{if(M===!0)return[...K];if(typeof M=="string")return L1(M)?[M]:[];if(!Array.isArray(M))return[];let C=[];for(let V of M)if(V!=null){if(typeof V=="string")L1(V)&&C.push(V);else if(typeof V=="object"){let r=V;L1(r.name)&&C.push(r)}}return C},y0=(M,C)=>{let V=_0(M),r=[],L={entity:{},label:{},icon:{}};for(let i of V)typeof i=="string"?r.push(i):i.name&&(r.push(i.name),i.entity&&(L.entity[i.name]=i.entity),i.label&&(L.label[i.name]=i.label),i.icon&&(L.icon[i.name]=i.icon));return A5(r,L,C)},k0=M=>{let C={...M};for(let V of Object.keys(M)){if(!V.startsWith("forecast.")&&!V.startsWith("forecast_action.")&&!V.startsWith("current."))continue;let r=V.split(".");if(r.length<2)continue;let[L,i]=r;!L||!i||((!C[L]||typeof C[L]!="object")&&(C[L]={}),C[L][i]=M[V],delete C[V])}return C},O1=M=>{let C=T0(M);C.forecast_mode=C.show_current&&C.show_forecast?"show_both":C.show_current?"show_current":"show_forecast",C.temperature_entity&&!C["current.temperature_entity"]&&(C["current.temperature_entity"]=C.temperature_entity),delete C.temperature_entity,C.show_condition_effects===!0&&(C.show_condition_effects=[...b1]),C["current.show_attributes"]===!0&&(C["current.show_attributes"]=[...K]);let V=C["current.show_attributes"];if(Array.isArray(V)){let r=[];for(let L of V)if(typeof L=="string")L1(L)&&r.push(L);else if(typeof L=="object"&&L!==null){let i=L;L1(i.name)&&(r.push(i.name),i.entity&&(C[`current.attribute_entity_${i.name}`]=i.entity),i.label&&(C[`current.attribute_label_${i.name}`]=i.label),i.icon&&(C[`current.attribute_icon_${i.name}`]=i.icon))}C["current.show_attributes"]=r}return C},T0=M=>{let C={};for(let V in M){let r=M[V];if(V==="forecast"&&r&&typeof r=="object"&&!Array.isArray(r)){for(let L in r)C[`forecast.${L}`]=r[L];continue}if(V==="current"&&r&&typeof r=="object"&&!Array.isArray(r)){for(let L in r)C[`current.${L}`]=r[L];continue}if(V==="forecast_action"&&r&&typeof r=="object"&&!Array.isArray(r)){for(let L in r)C[`forecast_action.${L}`]=r[L];continue}C[V]=r}return C};(()=>{let{WFC_BUILD:M,WFC_DATE_FORMATS:C,WFC_DETAILS:V,WFC_DEVICE_PREFIX:r,WFC_LABEL:L,WFC_METRIC_CATALOG:i,WFC_METRIC_LABELS:A,WFC_METRIC_POSITIONS:p,WFC_SKY_EXTRA_KEYS:s,clamp:l,wfcAutoMapDevice:c,wfcDefaultConfig:d,wfcDeviceEntities:Z,wfcDeviceIdOf:g,wfcExtraKeys:b,wfcIsDeviceRef:k,wfcLabelsPosNum:T,wfcMetrics:B,wfcNormalizeSources:F,wfcResolve:w,wfcResolveDeviceMap:E,wfcToYaml:N}=globalThis.__wsfcSectionsScope||{};if(!w)throw new Error("Weather Flex sections: load the card before its editor");let x=j.prototype,H1=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),U1={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},h1=null;function p3(){return h1||(h1=new Set,Object.values(d2).forEach(H=>H.forEach(t=>h1.add(t)))),h1}function l2(H,t){let e=[];return H.forEach(a=>{if(!t.has(a.name))if(a.schema){let n=l2(a.schema,t);n.length&&e.push({...a,schema:n})}else e.push(a)}),e}function m3(H){let t=p3(),e=new Set([...t,...H1]);H=l2(H,e);let a=new Map,n=[];H.forEach(S=>{H1.has(S.name)||(S.type==="expandable"?n.push(S):a.set(S.name,S))});let v=S=>S.map(O=>a.get(O)).filter(Boolean),m=(S,O,P)=>{let y=v(P);return y.length?[{name:S,type:"expandable",flatten:!0,icon:O,schema:y}]:[]},h=S=>n.find(O=>O.name===S),_=[];{let S=h("attribute_entities");S&&_.push(U1.attribute_entities?{...S,icon:U1.attribute_entities}:S)}return _}let C7=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],c3=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],v3=["tap_action","hold_action","double_tap_action"],u3=["show_condition_effects"],x3=[],d2={current:["current.show_attributes"],hourly:[],daily:[]},s2={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},Z3="Weather Flex sections";x.render=function(){if(!this.hass||!this._config)return u;let H=O1(this._config),t=this._getSelectedAttributes(H),e=this._schema(this.localize.bind(this),t,H["forecast.mode"]),a=m3(e),n=m=>s2[m.name]||this._computeLabel(m)||m.name,v=this._wfcAccordionEnabled();return o`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?u:o`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${Z3}</span>
          <span class="wsfc-ed-ver">build ${M}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${v}
            @change=${m=>this._wfcSetAccordion(m.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>`}
      ${a.length?o`<ha-form
            .hass=${this.hass}
            .data=${H}
            .schema=${a}
            .computeLabel=${n}
            .computeHelper=${m=>this._wfcHelper(m)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:u}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},x._wfcCardAppearancePanel=function(){let H=w(this._config).card||{},t="card";return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${U1.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this.wsfcHide&&this.wsfcHide.includes("show_condition_effects")?o`<p class="wsfc-hint">The weather animation is drawn behind the whole card (Appearance → Background), so its effects and moon phase are set there.</p>`:o`${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(u3)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>`}
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!H.border_enabled,e=>this._wfcToggleSecField(t,"border_enabled",e))}
            ${H.border_enabled?o`
                  ${this._wfcColorField("Border color",H.border_color,e=>this._wfcSetSecField(t,"border_color",e.target.value))}
                  ${this._wfcNumField(t,"border_width","Border width","px",H.border_width,1)}
                  ${this._wfcNumField(t,"border_radius","Corner radius","px",H.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",H.border_top!==!1,e=>this._wfcToggleSecField(t,"border_top",e))}
                    ${this._wfcCheckbox("Bottom",H.border_bottom!==!1,e=>this._wfcToggleSecField(t,"border_bottom",e))}
                    ${this._wfcCheckbox("Left",H.border_left!==!1,e=>this._wfcToggleSecField(t,"border_left",e))}
                    ${this._wfcCheckbox("Right",H.border_right!==!1,e=>this._wfcToggleSecField(t,"border_right",e))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",H.corner_tl!==!1,e=>this._wfcToggleSecField(t,"corner_tl",e))}
                    ${this._wfcCheckbox("Top-right",H.corner_tr!==!1,e=>this._wfcToggleSecField(t,"corner_tr",e))}
                    ${this._wfcCheckbox("Bottom-right",H.corner_br!==!1,e=>this._wfcToggleSecField(t,"corner_br",e))}
                    ${this._wfcCheckbox("Bottom-left",H.corner_bl!==!1,e=>this._wfcToggleSecField(t,"corner_bl",e))}
                  </div>`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",H.bg_color,e=>this._wfcSetSecField(t,"bg_color",e.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!H.glow_enabled,e=>this._wfcToggleSecField(t,"glow_enabled",e))}
            ${H.glow_enabled?o`
                  ${this._wfcColorField("Glow color",H.glow_color,e=>this._wfcSetSecField(t,"glow_color",e.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((H.glow_intensity==null?1:H.glow_intensity)*100),100,"glow_intensity",e=>this._wfcSetSecField(t,"glow_intensity",l((parseInt(e.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",H.glow_borders_only!==!1,e=>this._wfcToggleSecField(t,"glow_borders_only",e))}`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!H.shadow_enabled,e=>this._wfcToggleSecField(t,"shadow_enabled",e))}
            ${H.shadow_enabled?o`
                  ${this._wfcColorField("Shadow color",H.shadow_color,e=>this._wfcSetSecField(t,"shadow_color",e.target.value))}
                  ${this._wfcNumField(t,"shadow_x","Offset X","px",H.shadow_x,0)}
                  ${this._wfcNumField(t,"shadow_y","Offset Y","px",H.shadow_y,4)}
                  ${this._wfcNumField(t,"shadow_blur","Blur","px",H.shadow_blur,16)}
                  ${this._wfcNumField(t,"shadow_spread","Spread","px",H.shadow_spread,0)}
                  ${this._wfcNumField(t,"shadow_opacity","Opacity","%",H.shadow_opacity,35)}`:u}
          </div>
        </div>
      </details>
    `};let Q1=4;x._wfcEdSources=function(){return F(this._config,this.hass)},x._wfcCommitSources=function(H){let t=H.filter(S=>S&&S.ref).map(S=>{let O={};for(let y in S.overrides||{})S.overrides[y]&&(O[y]=S.overrides[y]);let P={ref:S.ref};return Object.keys(O).length&&(P.overrides=O),S.disabled&&(P.disabled=!0),P}),e={...this._config.metric_sources||{}};delete e.primary,delete e.fallback,delete e.custom,delete e.device_map,t.length?e.sources=t:delete e.sources;let a={...this._config,metric_sources:e},n=S=>{let O=this.hass&&this.hass.states[S],P=O&&O.attributes&&O.attributes.supported_features;return typeof P=="number"&&(P&7)!==0},v=S=>S.map(O=>O.ref).filter(O=>typeof O=="string"&&O.startsWith("weather.")),m=v(t.filter(S=>!S.disabled)),h=v(t),_=m.find(n)||m[0]||h.find(n)||h[0];_&&(a.entity=_),Object.keys(e).length===0&&delete a.metric_sources,U(this,"config-changed",{config:a})},x._wfcSetSourceRef=function(H,t){let e=this._wfcEdSources();e[H]&&(t?e[H]={ref:t,overrides:e[H].overrides||{}}:e.splice(H,1),this._wfcCommitSources(e))},x._wfcAddSource=function(H){if(!H)return;let t=this._wfcEdSources();t.length>=Q1||(t.push({ref:H,overrides:{}}),this._wfcCommitSources(t))},x._wfcMoveSource=function(H,t){let e=this._wfcEdSources(),a=H+t;if(H<0||a<0||a>=e.length)return;let n=e[H];e[H]=e[a],e[a]=n,this._wfcCommitSources(e)},x._wfcRemoveSource=function(H){let t=this._wfcEdSources();H<0||H>=t.length||(t.splice(H,1),this._wfcCommitSources(t))},x._wfcToggleSourceDisabled=function(H){let t=this._wfcEdSources();t[H]&&(t[H].disabled=!t[H].disabled,this._wfcCommitSources(t))},x._wfcSetSourceOverride=function(H,t,e){let a=this._wfcEdSources();if(!a[H])return;let n={...a[H].overrides||{}};e?n[t]=e:delete n[t],a[H].overrides=n,this._wfcCommitSources(a)},x._wfcLiveValue=function(H,t){let e=this.hass&&this.hass.states[H];if(!e)return"";let a,n;return H.startsWith("weather.")?(a=e.attributes?e.attributes[t]:null,n=e.attributes&&e.attributes[t+"_unit"]):(a=e.state,n=e.attributes&&e.attributes.unit_of_measurement),a==null||a===""||a==="unknown"||a==="unavailable"?"":n?`${a} ${n}`:`${a}`},x._wfcAvailableMetrics=function(){let H=new Set;if(!this.hass)return H;let t=new Set;this._config.entity&&t.add(this._config.entity);for(let a of this._wfcEdSources())if(!a.disabled)if(a.overrides&&Object.keys(a.overrides).forEach(n=>{H.add(n),t.add(a.overrides[n])}),k(a.ref)){let n=E(this._config,this.hass,g(a.ref));Object.keys(n).forEach(v=>{H.add(v),t.add(n[v])})}else a.ref&&t.add(a.ref);t.forEach(a=>{let n=this.hass.states[a];n&&n.attributes&&Object.keys(n.attributes).forEach(v=>H.add(v))});let e=a=>{if(Array.isArray(a))for(let n of a)n&&Object.keys(n).forEach(v=>H.add(v))};if(e(this._hourlyForecastData),e(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(a=>{a&&(e(a.hourly),e(a.daily))}),typeof X1.__wsfcExtraEntity=="function")for(let a of["ozone"])try{X1.__wsfcExtraEntity(a,this.hass,this._config)&&H.add(a)}catch{}return H};function f3(H){return String(H).split(/[_\s]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}let h3={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function S3(H){return h3[H]||f3(H)}x._wfcMetricOptions=function(H,t){let e=this._wfcAvailableMetrics(),a=t?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(H||[]).forEach(n=>{let v=S3(n);a.push({value:n,label:e.has(n)?v:`${v} (unavailable)`})}),a},x._wfcSourceMappingEditor=function(H,t){let e=t.ref,a=t.overrides||{},n=k(e),v=n?g(e):null,m=n?c(this.hass,v):{},h=O=>{if(n)return m[O]||"";if(!e)return"";if(e.startsWith("weather.")){let P=this.hass&&this.hass.states[e];return P&&P.attributes&&P.attributes[O]!=null?e:""}return""},_=n?{include_entities:Z(this.hass,v)}:{},S=O=>{let P=O.key,y=a[P]||h(P),f=!!a[P],A1=y?this._wfcLiveValue(y,P):"",K1=[{name:"e",selector:{entity:_}}],Y1=f?" (override)":y?"":" \u2014 none";return o`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:y}}
            .schema=${K1}
            .computeLabel=${()=>O.label+Y1}
            @value-changed=${Q=>this._wfcSetSourceOverride(H,P,Q.detail&&Q.detail.value&&Q.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${A1||"\u2014"}</span>
        </div>
      `};return o`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${n?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${n?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${i.map(S)}
        </div>
      </details>
    `},x._wfcSourceSummaryList=function(H){let t=H.ref,e=H.overrides||{},a=k(t),n=a?c(this.hass,g(t)):{},v=h=>{if(e[h])return e[h];if(a)return n[h]||"";if(t&&t.startsWith("weather.")){let _=this.hass&&this.hass.states[t];return _&&_.attributes&&_.attributes[h]!=null?t:""}return""},m=[];return i.forEach(h=>{let _=v(h.key);if(!_)return;let S=this._wfcLiveValue(_,h.key);m.push(o`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${h.label}</span>
          <span class="wsfc-cond-ent" title=${_}>${_}</span>
          <span class="wsfc-cond-val">${S||"\u2014"}</span>
        </div>
      `)}),m.length?o`<div class="wsfc-cond-list">${m}</div>`:u},x._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},x._wfcToggleSrcMap=function(H){let t=this._wfcSrcMapOpen();t.has(H)?t.delete(H):t.add(H),this.requestUpdate&&this.requestUpdate()},x._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},x._wfcSourceMetricCount=function(H){let t=H.ref,e=H.overrides||{},a=new Set(Object.keys(e).filter(n=>e[n]));if(k(t))Object.keys(E(this._config,this.hass,g(t))).forEach(n=>a.add(n));else if(t&&t.startsWith("weather.")){let n=this.hass&&this.hass.states[t];n&&n.attributes&&i.forEach(v=>{n.attributes[v.key]!=null&&a.add(v.key)})}return a.size},x._wfcSourceRow=function(H,t,e){let a=H.ref,n=k(a),v=this._config.entity,m=n&&this.hass&&this.hass.devices&&this.hass.devices[g(a)],h=n?m&&(m.name_by_user||m.name)||g(a):a,_=n?"Device":a&&a.startsWith("weather.")?"Weather":"Sensor",S=n?"mdi:access-point":a&&a.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",O=!n&&a&&a.startsWith("weather."),P=O&&a===v,y=this._wfcSrcMapOpen().has(a),f=!!H.disabled,A1=this._wfcSourceMetricCount(H),K1=`${A1} value${A1===1?"":"s"} mapped`,Y1=P?o`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:O?o`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:o`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,Q="",e1=a&&!n?this.hass&&this.hass.states[a]:null;if(n)Q=A1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!e1)Q=`\u26A0 Entity not found: ${a}`;else if(e1.state==="unavailable"||e1.state==="unknown")Q=`\u26A0 Currently ${e1.state}.`;else if(O&&!P){let x2=e1.attributes&&e1.attributes.supported_features;Q=typeof x2=="number"&&(x2&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else O||(Q="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return o`
      <div class="wsfc-src-row ${f?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${S}></ha-icon>
          <span class="wsfc-src-name">${h} <span class="wsfc-src-type">${_}</span></span>
          <ha-icon class="wsfc-ico-btn ${t===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(t,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${t===e-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(t,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${f?"mdi:eye-off":"mdi:eye"} title=${f?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(t)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${y?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(a)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(t)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${Y1}<span class="wsfc-src-count">${K1}</span>${f?o`<span class="wsfc-src-count">· hidden</span>`:u}</div>
        ${Q?o`<div class="wsfc-src-detail">${Q}</div>`:u}
        ${this._wfcSourceSummaryList(H)}
        ${y?this._wfcSourceMappingEditor(t,H):u}
      </div>
    `},x._wfcWeatherSourcesPanel=function(){let H=this._wfcEdSources(),t=H.some(m=>m.ref&&!k(m.ref)&&m.ref.startsWith("weather.")),e=H.length>=Q1,a=!!this.__wfcAddSourceOpen&&!e,n=o`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${m=>{let h=m.detail&&m.detail.value&&m.detail.value.e;h&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(h))}}
      ></ha-form>`,v=o`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${m=>{let h=m.detail&&m.detail.value&&m.detail.value.d;h&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(r+h))}}
      ></ha-form>`;return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${e?o`<p class="wsfc-hint">Maximum of ${Q1} sources reached. Remove one to add another.</p>`:o`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${a?"mdi:close":"mdi:plus"}></ha-icon>${a?"Cancel":"Add Source"}
              </div>
              ${a?o`<div class="wsfc-add-pickers">${n}${v}</div>`:u}
            `}
          ${H.length?H.map((m,h)=>this._wfcSourceRow(m,h,H.length)):o`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!t&&H.length?o`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:u}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},x._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},x._wfcHeadlineTempRow=function(){let H=this._config.current&&this._config.current.temperature_entity,t=H||"",e="";if(!t)for(let v of this._wfcEdSources()){if(v.disabled)continue;let m=this._wfcSlotEntityForKeyEd(v,"temperature");if(m&&this.hass&&this.hass.states[m]){t=m;break}}t?e=this.hass&&this.hass.states[t]&&this.hass.states[t].attributes&&this.hass.states[t].attributes.friendly_name||t:e="\u2014 none available \u2014";let a=t?this._wfcLiveValue(t,"temperature"):"",n=!!this.__wfcHeadlineEdit;return o`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${e}${H?o` <span class="wsfc-src-type">override</span>`:u}</span>
          ${a?o`<span class="wsfc-srcmap-live">${a}</span>`:u}
          <ha-icon class="wsfc-ico-btn ${n?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${n?o`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:u}
      </div>
    `},x._wfcSlotEntityForKeyEd=function(H,t){if(H.overrides&&H.overrides[t])return H.overrides[t];let e=H.ref;if(!e)return null;if(k(e))return E(this._config,this.hass,g(e))[t]||null;if(e.startsWith("weather.")){let a=this.hass&&this.hass.states[e];return a&&a.attributes&&a.attributes[t]!=null?e:null}return null},x._wfcSetForecastTypes=function(H,t){let e=H&&t?"both":H?"hourly":t?"daily":"both",a={...this._config,forecast_types:e};U(this,"config-changed",{config:a})},x._wfcAdvancedPanel=function(){let H=this._config.forecast_types||"both",t=H==="both"||H==="hourly",e=H==="both"||H==="daily";return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",t,a=>this._wfcSetForecastTypes(a.target.checked,e))}
          ${this._wfcCheckbox("Daily",e,a=>this._wfcSetForecastTypes(t,a.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(x3)}
        </div>
      </details>
    `},x._wfcUserActionsPanel=function(){let H=this._wfcStockFormFor(c3),t=this._wfcStockFormFor(v3),e=this._config.forecast||{};return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${H}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",e.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${t}
        </div>
      </details>
    `};let g3=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];x._wfcForecastTypeControls=function(H){let t=this._config.forecast||{},e=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],a=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],n=S=>t[`${S}_mode`]||t.mode||"simple",v=S=>(t[`${S}_extra_attribute`]!=null?t[`${S}_extra_attribute`]:t.extra_attribute)||"none",m=S=>(t[`${S}_chart_attribute`]!=null?t[`${S}_chart_attribute`]:t.default_chart_attribute)||"temperature_and_precipitation",h=(S,O,P)=>{let y=t[`${S}_${O}`];if(y!=null)return!!y;let f=t[O];return f!=null?!!f:P},_=n(H)==="chart";return o`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${H}_mode`,"Display mode",e,n(H),"simple")}
        ${this._wfcForecastSelect(`${H}_extra_attribute`,"Extra metric",a,v(H),"none")}
      </div>
      ${_?o`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${H}_chart_attribute`,"Chart metric",g3,m(H),"temperature_and_precipitation")}
          </div>`:u}
      ${this._wfcConfigCheckbox(`forecast.${H}_show_sun_times`,"Show sunrise & sunset times",h(H,"show_sun_times",!0),!0)}
      ${_?o`
            ${this._wfcConfigCheckbox(`forecast.${H}_use_color_thresholds`,"Use color thresholds",h(H,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${H}_show_attribute_selector`,"Show metric selector",h(H,"show_attribute_selector",!1),!1)}`:u}
    `},x._wfcHelper=function(H){let t=this._computeHelper?this._computeHelper(H):void 0;return typeof t=="string"&&(t=t.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),t},x._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},x._wfcSetAccordion=function(H){let t=this._wfcState();t.editor_accordion=!!H,this._wfcCommit(t),this._wfcApplyAccordion()},x._wfcApplyAccordion=function(){let H=this.renderRoot||this.shadowRoot||this;!H||!H.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,H.addEventListener("toggle",t=>{let e=t.target;if(!e||!e.classList||!e.classList.contains("wsfc-panel")||(this._wfcRememberOpen(e),!e.open)||!this._wfcAccordionEnabled())return;(H.querySelectorAll?H.querySelectorAll("details.wsfc-panel"):[]).forEach(n=>{n!==e&&n.open&&(n.open=!1)})},!0))},x._wfcRememberOpen=function(H){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let t=this._wfcPanelKey(H);t&&(H.open?this.__wfcOpenPanels.add(t):this.__wfcOpenPanels.delete(t))},x._wfcPanelKey=function(H){let t=H.querySelector&&H.querySelector(".wsfc-panel-title");return t?(t.textContent||"").trim():""},x._wfcRestoreOpen=function(){let H=this.renderRoot||this.shadowRoot||this;!H||!H.querySelectorAll||!this.__wfcOpenPanels||H.querySelectorAll("details.wsfc-panel").forEach(t=>{let e=this._wfcPanelKey(t);e&&this.__wfcOpenPanels.has(e)&&(t.open=!0)})},x.updated=function(H){try{let t=Object.getPrototypeOf(x);t&&typeof t.updated=="function"&&t.updated.call(this,H)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},x._wfcEditorStyle=function(){return o`<style>
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
    </style>`};let w3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";x._wfcCustomMetricsBody=function(){let H=V1(this._config.current&&this._config.current.show_attributes);return o`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${H.map((t,e)=>this._renderCustomAttributeRow(t,e))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${w3}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},x._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let j1={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function o1(H){if(H&&H.detail&&H.detail.value!==void 0)return H.detail.value;let t=H&&H.target;if(t)return(t.type==="checkbox"||typeof t.checked=="boolean")&&(t.tagName==="HA-SWITCH"||t.type==="checkbox")?t.checked:t.value}function q1(H){let t=H&&H.target;return t&&typeof t.checked=="boolean"?t.checked:!!(H&&H.detail&&H.detail.value)}x._wfcState=function(){return JSON.parse(JSON.stringify(w(this._config)))},x._wfcCommit=function(H){let t={...this._config,wfc:H};U(this,"config-changed",{config:t})},x._wfcResetSection=function(H){let e=d(this._config)[H];if(!e)return;let a=this._wfcState(),n=!!(a[H]&&a[H].show);a[H]={...JSON.parse(JSON.stringify(e)),show:n},this._wfcCommit(a)},x._wfcMoveSection=function(H,t){let e=this._wfcState(),a=e.order.indexOf(H),n=a+t;if(a<0||n<0||n>=e.order.length)return;let v=e.order[a];e.order[a]=e.order[n],e.order[n]=v,this._wfcCommit(e)},x._wfcCommitMetrics=function(H,t){let e=this._wfcState();e[H]||(e[H]={});let a=B(e[H]),n=a.map(m=>m.key),v={};a.forEach(m=>v[m.key]=m.pos),t(n,v),e[H].forecast_metric_order=n,e[H].forecast_metric_pos=v,delete e[H].forecast_temps,delete e[H].forecast_icons,delete e[H].forecast_extra,delete e[H].forecast_row_order,delete e[H].forecast_stack,this._wfcCommit(e)},x._wfcMoveMetric=function(H,t,e){let a=this._wfcState(),v=B(a[H]||{}).find(m=>m.key===t);v&&v.pos==="below"&&(e=-e),this._wfcCommitMetrics(H,(m,h)=>{let _=m.indexOf(t),S=_+e;for(;S>=0&&S<m.length&&h[m[S]]!==h[t];)S+=e;if(_<0||S<0||S>=m.length)return;let O=m[_];m[_]=m[S],m[S]=O})},x._wfcSetMetricPos=function(H,t,e){this._wfcCommitMetrics(H,(a,n)=>{n[t]=e})},x._wfcSetMetricStyle=function(H,t,e,a){let n=this._wfcState();n[H]||(n[H]={});let v={...n[H].forecast_metric_style||{}},m={...v[t]||{}};a==null||a===""?delete m[e]:m[e]=a,Object.keys(m).length?v[t]=m:delete v[t],n[H].forecast_metric_style=v,this._wfcCommit(n)},x._wfcMetricsOrder=function(H,t){let e=B(t),a=m=>e.filter(h=>h.pos===m),n=[...a("above"),...a("overlay"),...a("below").reverse(),...e.filter(m=>!["above","overlay","below"].includes(m.pos))],v=t.forecast_metric_style||{};return n.map((m,h,_)=>{let S=v[m.key]||{},O=m.key==="icons",P=m.key!=="temps";return o`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${A[m.key]||m.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${y=>y.stopPropagation()}
              @change=${y=>this._wfcSetMetricPos(H,m.key,y.target.value)}
            >
              ${p.map(y=>o`<option value=${y.value} ?selected=${y.value===m.pos}>${y.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${h===0||_[h-1].pos!==m.pos?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveMetric(H,m.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${h===_.length-1||_[h+1].pos!==m.pos?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveMetric(H,m.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetMetricStyle(H,m.key,"every",y.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(y=>({value:String(y),label:y+(y>1?" hours":" hour")}))].map(y=>o`<option value=${y.value} ?selected=${y.value===(S.every!=null?String(S.every):"")}>${y.label}</option>`)}
              </select>
            </label>
            ${P?o`
                  ${this._wfcColorField("Icon color",S.icon_color,y=>this._wfcSetMetricStyle(H,m.key,"icon_color",y.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",S.icon_size,y=>this._wfcSetMetricStyle(H,m.key,"icon_size",parseFloat(o1(y))||""))}`:u}
            ${O?u:o`
                  ${this._wfcColorField("Text color",S.text_color,y=>this._wfcSetMetricStyle(H,m.key,"text_color",y.target.value))}
                  ${this._wfcPlainNum("Font size (px)",S.text_size,y=>this._wfcSetMetricStyle(H,m.key,"text_size",parseFloat(o1(y))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetMetricStyle(H,m.key,"contrast",y.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(y=>o`<option value=${y.value} ?selected=${y.value===(S.contrast||"")}>${y.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},x._wfcToggleSection=function(H,t){let e=this._wfcState();e[H]||(e[H]={}),e[H].show=q1(t),this._wfcCommit(e)},x._wfcToggleSectionShow=function(H){let t=this._wfcState();t[H]||(t[H]={}),t[H].show=!t[H].show,this._wfcCommit(t)},x._wfcSetSecNum=function(H,t,e){let a=this._wfcState(),n=parseFloat(o1(e));a[H][t]=isNaN(n)?void 0:n,this._wfcCommit(a)},x._wfcSetSecField=function(H,t,e){let a=this._wfcState();a[H]||(a[H]={}),a[H][t]=e,this._wfcCommit(a)},x._wfcToggleSecField=function(H,t,e){this._wfcSetSecField(H,t,q1(e))},x._wfcSetForecastNum=function(H,t){let e={...this._config.forecast||{}};t==null||t<=0?delete e[H]:e[H]=t,U(this,"config-changed",{config:{...this._config,forecast:e}})},x._wfcSetConfigNum=function(H,t,e){let[a,n]=H.split("."),v={...this._config},m={...v[a]||{}},h=t==null||t===""||isNaN(Number(t))?null:Number(t);h==null?delete m[n]:m[n]=h,v[a]=m,U(this,"config-changed",{config:v})},x._wfcConfigSlider=function(H,t,e,a,n){let v=a1(H,e||""),m=a!=null?l(Number(a),v.min,v.max):Number(n);return this._wfcSliderTpl(t,e,v,m,h=>this._wfcSetConfigNum(H,h.target.value,n))},x._wfcSetConfigStr=function(H,t,e){let a={...this._config};if(H.indexOf(".")===-1)e&&(t==null||t==="")?delete a[H]:a[H]=t;else{let[n,v]=H.split("."),m={...a[n]||{}};e&&(t==null||t==="")?delete m[v]:m[v]=t,a[n]=m}U(this,"config-changed",{config:a})},x._wfcConfigSelect=function(H,t,e,a,n,v){let m=String(a??n);return o`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${t}</span>
        <select class="wsfc-native-select" @change=${h=>this._wfcSetConfigStr(H,h.target.value,v)}>
          ${e.map(h=>o`<option value=${String(h.value)} ?selected=${String(h.value)===m}>${h.label}</option>`)}
        </select>
      </label>
    `},x._wfcSetConfigBool=function(H,t,e){let a={...this._config},n=(v,m)=>{t===!!e?delete v[m]:v[m]=t};if(H.indexOf(".")===-1)n(a,H);else{let[v,m]=H.split("."),h={...a[v]||{}};n(h,m),a[v]=h}U(this,"config-changed",{config:a})},x._wfcConfigCheckbox=function(H,t,e,a){let n=e==null?!!a:!!e;return this._wfcCheckbox(t,n,v=>this._wfcSetConfigBool(H,v.target.checked,a))},x._wfcConfigText=function(H,t,e,a){return o`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${t}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${e||""}
          placeholder=${a||""}
          @change=${n=>this._wfcSetConfigStr(H,n.target.value)}
        />
      </label>
    `},x._wfcSetForecastField=function(H,t){let e={...this._config.forecast||{}};t==null||t===""?delete e[H]:e[H]=t,U(this,"config-changed",{config:{...this._config,forecast:e}})},x._wfcForecastSelect=function(H,t,e,a,n){let v=String(a??n);return o`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${t}</span>
        <select class="wsfc-native-select" @change=${m=>this._wfcSetForecastField(H,m.target.value)}>
          ${e.map(m=>o`<option value=${String(m.value)} ?selected=${String(m.value)===v}>${m.label}</option>`)}
        </select>
      </label>
    `},x._wfcNumSecField=function(H,t,e,a){let n=parseFloat(o1(e));this._wfcSetSecField(H,t,isNaN(n)?a:n)},x._wfcMoveDetail=function(H,t){let e=this._wfcState(),a=e.details.items,n=a.findIndex(h=>h.key===H),v=n+t;if(n<0||v<0||v>=a.length)return;let m=a[n];a[n]=a[v],a[v]=m,this._wfcCommit(e)},x._wfcToggleDetail=function(H,t){let e=this._wfcState(),a=e.details.items.find(n=>n.key===H);a&&(a.show=q1(t)),this._wfcCommit(e)},x._wfcToggleDetailShow=function(H){let t=this._wfcState(),e=t.details.items.find(a=>a.key===H);e&&(e.show=!e.show,this._wfcCommit(t))},x._wfcSetDetailValue=function(H,t,e){let a=this._wfcState(),n=a.details.items.find(v=>v.key===H);n&&(n[t]=e),this._wfcCommit(a)},x._wfcSetDetail=function(H,t,e){let a=this._wfcState(),n=a.details.items.find(m=>m.key===H);if(!n)return;let v=o1(e);if(t==="icon_size"||t==="text_size"){let m=parseFloat(v);v=isNaN(m)?void 0:m}else(v===""||v==null)&&(v=void 0);n[t]=v,this._wfcCommit(a)},x._wfcColorField=function(H,t,e){if(this.wsfcHide&&this.wsfcHide.includes("color:"+H))return u;if(/^(Day|Night) color$/.test(H))return this._wfcColorFieldHex(H,t,e);let a=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],n=t==null?"":String(t),v=/background|bg$|^Chip background/i.test(H),m=n===""?"default":n==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(n)?"custom":/^var\(/.test(n)&&a.some(([O])=>O===n)?"theme":"css",h=/^#[0-9a-fA-F]{6}$/.test(n)?n:"#4fc3f7",_=O=>e({target:{value:O}}),S=O=>_(O==="default"?"":O==="transparent"?"transparent":O==="theme"?a.some(([P])=>P===n)?n:a[0][0]:O==="custom"?h:n||h);return o`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${H}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${O=>S(O.target.value)}>
          ${[["default","Not set"],...v||m==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([O,P])=>o`<option value=${O} ?selected=${O===m}>${P}</option>`)}
        </select>
        ${m==="theme"?o`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${O=>_(O.target.value)}>${a.map(([O,P])=>o`<option value=${O} ?selected=${O===n}>${P}</option>`)}</select>`:m==="custom"?o`<input type="color" class="wsfc-color-input" .value=${h} @change=${O=>_(O.target.value)} />`:m==="css"?o`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${n} @change=${O=>_(O.target.value)} />`:u}
        ${m!=="default"&&m!=="transparent"?o`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${n}"></span>`:u}
      </div>
    `},x._wfcColorFieldHex=function(H,t,e){return o`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${H}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${t||"#888888"}
          @change=${e}
          @input=${e}
        />
        <span class="wsfc-color-hex">${t||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!t}
          @click=${()=>e({target:{value:""}})}
        >Reset</button>
      </div>
    `},x._wfcSelect=function(H,t,e,a,n,v){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let m=String(n??v);return o`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${e}</span>
        <select
          class="wsfc-native-select"
          @change=${h=>this._wfcSetSecField(H,t,h.target.value)}
        >
          ${a.map(h=>o`<option value=${String(h.value)} ?selected=${String(h.value)===m}>${h.label}</option>`)}
        </select>
      </label>
    `};let p2={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function a1(H,t){return/chip_scale/.test(H)?{min:50,max:250,step:5}:/chip_columns/.test(H)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(H)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(H)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(H)?{min:0,max:100,step:1}:/header_icon_size/.test(H)?{min:0,max:140,step:2}:/header_secondary_size/.test(H)?{min:0,max:48,step:1}:/header_state_size|header_temp_size/.test(H)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(H)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(H)?{min:-40,max:40,step:1}:/shadow_blur/.test(H)?{min:0,max:80,step:1}:/border_radius/.test(H)?{min:0,max:48,step:1}:/border_width/.test(H)?{min:0,max:12,step:1}:/hourly_slots/.test(H)?{min:0,max:48,step:1}:/daily_slots/.test(H)?{min:0,max:14,step:1}:/labels_position|opacity/.test(H)?{min:0,max:100,step:1}:/indent/.test(H)?{min:0,max:120,step:2}:/height/.test(H)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(H)?{min:8,max:100,step:1}:/font_size|_size$/.test(H)?{min:8,max:48,step:1}:/_width$/.test(H)?{min:1,max:12,step:1}:/_length$/.test(H)?{min:5,max:100,step:5}:/hourly_group_size/.test(H)?{min:1,max:4,step:1}:/temperature_precision/.test(H)?{min:0,max:2,step:1}:/hours/.test(H)?{min:1,max:48,step:1}:p2[t]||p2.px}x._wfcNumField=function(H,t,e,a,n,v){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let m=a1(t,a||""),h=n!=null?Number(n):Number(v);return this._wfcSliderTpl(e,a,m,h,_=>this._wfcNumSecField(H,t,_,v))},x._wfcPlainSlider=function(H,t,e,a,n,v){let m=a1(n||"",t||""),h=e!=null?Number(e):Number(a);return this._wfcSliderTpl(H,t,m,h,v)},x._wfcSlotSlider=function(H,t,e){let a=a1(t,""),n=e!=null?l(Number(e),a.min,a.max):0,v=m=>Number(m)<=0?"All":String(m);return o`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${H}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${a.min}
          max=${a.max}
          step=${a.step}
          .value=${String(n)}
          @input=${m=>{let h=m.target.closest(".wsfc-slider-row"),_=h&&h.querySelector(".wsfc-slider-num");_&&(_.textContent=v(m.target.value))}}
          @change=${m=>this._wfcSetForecastNum(t,parseInt(m.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${v(n)}></span></span>
      </div>
    `},x._wfcAutoSizeField=function(H,t,e){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let a=a1(t,""),n=this._wfcState()[H]||{},v=l(parseInt(n[t],10)||0,a.min,a.max),m=h=>Number(h)<=0?"Auto":`${h}px`;return o`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${e}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${a.min}
          max=${a.max}
          step=${a.step}
          .value=${String(v)}
          @input=${h=>{let _=h.target.closest(".wsfc-slider-row"),S=_&&_.querySelector(".wsfc-slider-num");S&&(S.textContent=m(h.target.value))}}
          @change=${h=>this._wfcSetSecField(H,t,parseInt(h.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${m(v)}></span></span>
      </div>
    `},x._wfcSliderTpl=function(H,t,e,a,n){let v=t||"";return o`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${H}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${e.min}
          max=${e.max}
          step=${e.step}
          .value=${String(a)}
          @input=${m=>{let h=m.target.closest(".wsfc-slider-row"),_=h&&h.querySelector(".wsfc-slider-num");_&&(_.textContent=m.target.value)}}
          @change=${n}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(a)}></span>${v}</span>
      </div>
    `},x._wfcCheckbox=function(H,t,e){return this.wsfcHide&&this.wsfcHide.includes("check:"+H)?u:o`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!t} @change=${e} />
        <span>${H}</span>
      </label>
    `},x._wfcGroup=function(H){return H&&this.wsfcHide&&this.wsfcHide.includes("group:"+H)?u:H?o`<div class="wsfc-group-div"><span class="wsfc-group-label">${H}</span></div>`:o`<div class="wsfc-group-div"></div>`},x._wfcSubPanel=function(H,t){return o`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${H}</span></summary>
        <div class="wsfc-subpanel-body">${t}</div>
      </details>
    `},x._wfcFlushControls=function(H,t){return o`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",t.flush_edges,e=>this._wfcToggleSecField(H,"flush_edges",e))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",t.flush_top,e=>this._wfcToggleSecField(H,"flush_top",e))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",t.flush_bottom,e=>this._wfcToggleSecField(H,"flush_bottom",e))}
    `},x._wfcTextControls=function(H,t,e,a){if(this.wsfcHide&&this.wsfcHide.includes(`${t}_font_size`))return u;let n=this._wfcState()[H]||{};return o`
      <div class="wsfc-sub-title">${e}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(H,`${t}_font_size`,"Size","px",n[`${t}_font_size`],a)}
        ${this._wfcSelect(H,`${t}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],n[`${t}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",n[`${t}_color`],v=>this._wfcSetSecField(H,`${t}_color`,v.target.value))}
    `};let m2=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];x._wfcDividerControls=function(H,t){return o`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",t.divider_above,e=>this._wfcToggleSecField(H,"divider_above",e))}
      ${t.divider_above?o`
            <div class="wsfc-row">
              ${this._wfcNumField(H,"divider_above_width","Thickness","px",t.divider_above_width,1)}
              ${this._wfcNumField(H,"divider_above_length","Length","%",t.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(H,"divider_above_style","Line style",m2,t.divider_above_style,"solid")}
            </div>`:u}

      ${this._wfcCheckbox("Section Divider Below",t.divider_below,e=>this._wfcToggleSecField(H,"divider_below",e))}
      ${t.divider_below?o`
            <div class="wsfc-row">
              ${this._wfcNumField(H,"divider_below_width","Thickness","px",t.divider_below_width,1)}
              ${this._wfcNumField(H,"divider_below_length","Length","%",t.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(H,"divider_below_style","Line style",m2,t.divider_below_style,"solid")}
            </div>`:u}

      ${t.divider_above||t.divider_below?this._wfcColorField("Divider color",t.divider_color,e=>this._wfcSetSecField(H,"divider_color",e.target.value)):u}
    `},x._wfcBackgroundControls=function(H,t){let e=!!t.background_enabled;return o`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",e,a=>this._wfcToggleSecField(H,"background_enabled",a))}
      ${e?o`
            ${this._wfcColorField("Background color",t.background_color,a=>this._wfcSetSecField(H,"background_color",a.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",t.background_opacity==null?80:t.background_opacity,80,"opacity",a=>this._wfcSetSecField(H,"background_opacity",l(parseInt(a.target.value,10)||0,0,100)))}`:u}
    `},x._wfcSectionStyles=function(H,t){return this.wsfcHide&&this.wsfcHide.includes("group:Section Styles")?u:this._wfcSubPanel("Section Styles",o`
        ${this._wfcFlushControls(H,t)}
        ${this._wfcDividerControls(H,t)}
        ${this._wfcBackgroundControls(H,t)}`)},x._wfcStockForm=function(H){return this._wfcStockFormFor(d2[H])},x._wfcStockFormFor=function(H){if(!H||!H.length)return u;let t=O1(this._config),e=this._getSelectedAttributes(t),a=this._schema(this.localize.bind(this),e,"chart"),n=new Map,v=_=>_.forEach(S=>{S.schema?v(S.schema):n.set(S.name,S)});v(a);let m=H.map(_=>n.get(_)).filter(Boolean);if(!m.length)return u;let h=_=>s2[_.name]||this._computeLabel(_)||_.name;return o`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${m}
        .computeLabel=${h}
        .computeHelper=${_=>this._wfcHelper(_)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},x._wfcTitleControls=function(H,t){return o`
      ${this._wfcCheckbox("Show Title Row",t.title_show,e=>this._wfcToggleSecField(H,"title_show",e))}
      ${t.title_show?o`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${t.title_text||""}
                @change=${e=>this._wfcSetSecField(H,"title_text",e.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${t.title_icon||""}
              @value-changed=${e=>this._wfcSetSecField(H,"title_icon",e.detail&&e.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(H,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],t.title_text_align,"left")}
              ${this._wfcSelect(H,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],t.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(H,"title_font_size","Text size","px",t.title_font_size,15)}
            ${this._wfcSelect(H,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],t.title_font_weight,"600")}
            ${this._wfcNumField(H,"title_icon_size","Icon size","px",t.title_icon_size,20)}
            ${this._wfcNumField(H,"title_indent","Indent","px",t.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",t.title_color,e=>this._wfcSetSecField(H,"title_color",e.target.value))}
              ${this._wfcColorField("Icon color",t.title_icon_color,e=>this._wfcSetSecField(H,"title_icon_color",e.target.value))}
            </div>
          `:u}
    `},x._wfcSectionOptionsBody=function(H,t){let e=t[H]||{},a=H==="details",n=H==="current",v=H==="sun_position",m=H==="sun_arc",h=H==="hourly",_=H==="daily",S=this._config.forecast||{},O=this._config.current||{},P=l(parseInt(e.columns,10)||2,1,4),y=this._wfcMetricOptions(typeof K<"u"?K:[],!0);return o`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(H)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(H,e)}
          ${n?o`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:u}
          ${n?o`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(H,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(H,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(H,"header_temp_size","Temperature size")}
                ${this._wfcAutoSizeField(H,"header_secondary_size","Temperature sub-header size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",y,O.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(H)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(H)}
          ${h?o`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",S.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",S.hourly_group_size,1)}`:u}
          ${_?o`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",S.daily_slots)}`:u}
          ${a?o`
                ${this._wfcGroup("Layout")}
                ${e.chips?o`
                      ${this._wfcSelect(H,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],e.chip_layout==="column"?"wrap":e.chip_layout||"wrap","wrap")}
                      ${(e.chip_layout||"wrap")==="grid"?o`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(e.chip_columns,10)>0,f=>this._wfcSetSecField(H,"chip_columns",f.target.checked?l(parseInt(e.chip_columns,10)||2,1,6):0))}
                            ${parseInt(e.chip_columns,10)>0?this._wfcNumField(H,"chip_columns","Columns","",parseInt(e.chip_columns,10)||2,2):u}`:u}`:o`
                      ${this._wfcSelect(H,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],e.details_layout||"grid","grid")}
                      ${(e.details_layout||"grid")==="grid"?this._wfcNumField(H,"columns","Columns","",P,2):u}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!e.chips,f=>this._wfcToggleSecField(H,"chips",f))}
                ${e.chips?o`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",e.chip_pill!=null?!!e.chip_pill:e.chip_shape!=="rounded"&&e.chip_shape!=="square",f=>this._wfcSetSecField(H,"chip_pill",f.target.checked))}
                      ${(e.chip_pill!=null?e.chip_pill:e.chip_shape!=="rounded"&&e.chip_shape!=="square")?u:this._wfcNumField(H,"chip_radius","Corner radius (0 = square)","px",e.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((e.chip_scale==null?1:e.chip_scale)*100),100,"chip_scale",f=>this._wfcSetSecField(H,"chip_scale",l((parseInt(f.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(H,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",e.chip_text_color,f=>this._wfcSetSecField(H,"chip_text_color",f.target.value))}
                      ${this._wfcColorField("Chip background",e.chip_bg,f=>this._wfcSetSecField(H,"chip_bg",f.target.value))}
                      ${this._wfcColorField("Chip border",e.chip_border_color,f=>this._wfcSetSecField(H,"chip_border_color",f.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",e.chip_show_icon!==!1,f=>this._wfcToggleSecField(H,"chip_show_icon",f))}
                      ${e.chip_show_icon!==!1?o`
                            ${this._wfcSelect(H,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],e.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(H,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",e.chip_icon_color,f=>this._wfcSetSecField(H,"chip_icon_color",f.target.value))}`:u}
                      ${this._wfcCheckbox("Show metric name in chip",!!e.chip_show_name,f=>this._wfcToggleSecField(H,"chip_show_name",f))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!e.chip_hide_when_off,f=>this._wfcToggleSecField(H,"chip_hide_when_off",f))}`:u}

                ${e.chips?o`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(t)}`:o`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(H,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(H,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",e.global_icon_color,f=>this._wfcSetSecField(H,"global_icon_color",f.target.value))}
                        ${this._wfcColorField("Text color",e.global_text_color,f=>this._wfcSetSecField(H,"global_text_color",f.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(t)}`}
              `:u}

          ${v?o`
                ${this._wfcSubPanel("Time",o`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(H,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],e.timeframe_mode,"hours")}
                      ${e.timeframe_mode==="hours"||e.timeframe_mode==null?o`
                            ${this._wfcNumField(H,"timeframe_hours","Hours","",e.timeframe_hours,24)}
                            ${this._wfcSelect(H,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],e.timeframe_anchor,"now_left")}
                          `:u}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(H,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],e.times_position==="center"?"overlay":e.times_position,"below")}
                      ${this._wfcSelect(H,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],e.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(H,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(f=>({value:f,label:f+(f>1?" hours":" hour")}))],e.ticks_every==null?0:e.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(H,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",o`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",e.marker_color,f=>this._wfcSetSecField(H,"marker_color",f.target.value))}
                      ${this._wfcNumField(H,"marker_opacity","Marker opacity","%",e.marker_opacity==null?100:e.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",o`
                    <div class="wsfc-row">
                      ${this._wfcSelect(H,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],e.ss_markers_position,"hidden")}
                    </div>
                    ${e.ss_markers_position&&e.ss_markers_position!=="hidden"?o`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",e.ss_markers_color,f=>this._wfcSetSecField(H,"ss_markers_color",f.target.value))}
                          ${this._wfcNumField(H,"ss_markers_opacity","Marker opacity","%",e.ss_markers_opacity==null?100:e.ss_markers_opacity,100)}
                        </div>`:u}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",o`
                    ${this._wfcSubPanel("Metrics Defaults",o`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!e.forecast_metric_detail_icons,f=>this._wfcToggleSecField(H,"forecast_metric_detail_icons",f))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!e.forecast_temp_with_icon,f=>this._wfcToggleSecField(H,"forecast_temp_with_icon",f))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(H,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(f=>({value:f,label:f+(f>1?" hours":" hour")}))],e.forecast_every,3)}
                          ${this._wfcNumField(H,"forecast_font_size","Text size","px",e.forecast_font_size,11)}
                          ${this._wfcNumField(H,"forecast_icon_size","Icon size","px",e.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",e.forecast_temp_color,f=>this._wfcSetSecField(H,"forecast_temp_color",f.target.value))}
                        ${this._wfcColorField("Icon color",e.forecast_icon_color,f=>this._wfcSetSecField(H,"forecast_icon_color",f.target.value))}
                        ${s.some(f=>e.forecast_metric_pos&&e.forecast_metric_pos[f]&&e.forecast_metric_pos[f]!=="hidden"||b(e).includes(f))?this._wfcColorField("Metric Text Color",e.forecast_extra_color,f=>this._wfcSetSecField(H,"forecast_extra_color",f.target.value)):u}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(H,e)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",o`
                    ${this._wfcNumField(H,"height","Bar height","px",e.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",e.weather_adjust!==!1,f=>this._wfcToggleSecField(H,"weather_adjust",f))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",e.day_color,f=>this._wfcSetSecField(H,"day_color",f.target.value))}
                      ${this._wfcColorField("Night color",e.night_color,f=>this._wfcSetSecField(H,"night_color",f.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(H,e)}
              `:u}

          ${m?o`
                <div class="wsfc-row">
                  ${this._wfcNumField(H,"height","Arc height","px",e.height,90)}
                  ${this._wfcSelect(H,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],e.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(H,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],e.timeframe_mode,"sunrise_sunset")}
                  ${e.timeframe_mode==="hours"?o`
                        ${this._wfcNumField(H,"timeframe_hours","Hours","",e.timeframe_hours,24)}
                        ${this._wfcSelect(H,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],e.timeframe_anchor,"now_left")}
                      `:u}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",T(e.labels_position),0,"labels_position",f=>this._wfcSetSecField(H,"labels_position",l(parseInt(f.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${e.sun_icon||""}
                  @value-changed=${f=>this._wfcSetSecField(H,"sun_icon",f.detail&&f.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?u:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!e.night_moon,f=>this._wfcToggleSecField(H,"night_moon",f))}
                ${e.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?o`<ha-icon-picker
                      label="Moon icon"
                      .value=${e.moon_icon||"mdi:weather-night"}
                      @value-changed=${f=>this._wfcSetSecField(H,"moon_icon",f.detail&&f.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:u}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(H,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],e.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",e.show_arc_ticks,f=>this._wfcToggleSecField(H,"show_arc_ticks",f))}
                ${this._wfcCheckbox("Show tick marks on the baseline",e.show_base_ticks!==!1,f=>this._wfcToggleSecField(H,"show_base_ticks",f))}
                <div class="wsfc-row">
                  ${this._wfcSelect(H,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],e.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",e.tick_color,f=>this._wfcSetSecField(H,"tick_color",f.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",e.show_times!==!1,f=>this._wfcToggleSecField(H,"show_times",f))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",e.show_captions!==!1,f=>this._wfcToggleSecField(H,"show_captions",f))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",e.show_ss_icons,f=>this._wfcToggleSecField(H,"show_ss_icons",f))}
                ${e.show_ss_icons?o`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${e.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${f=>this._wfcSetSecField(H,"sunrise_icon",f.detail&&f.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${e.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${f=>this._wfcSetSecField(H,"sunset_icon",f.detail&&f.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(H,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],e.ss_icon_position,"left")}
                        ${this._wfcNumField(H,"ss_icon_size","Icon size","px",e.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",e.ss_icon_color,f=>this._wfcSetSecField(H,"ss_icon_color",f.target.value))}
                    `:u}

                ${this._wfcTextControls(H,"time","Time text",13)}
                ${this._wfcTextControls(H,"caption","Sunrise / sunset caption",11)}
              `:u}

          ${v?u:this._wfcSectionStyles(H,e)}
        </div>
    `};let c2={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};x._wfcPlainNum=function(H,t,e){return this._wfcPlainSlider(H,"px",t,16,"_size",e)},x._wfcDetailRows=function(H){return H.details.items.map((e,a,n)=>{let v=V[e.key]||{};return o`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${e.icon||v.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${v.label||e.key}</span>
            <ha-icon class="wsfc-ico-btn ${a===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${m=>{m.preventDefault(),m.stopPropagation(),this._wfcMoveDetail(e.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${a===n.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${m=>{m.preventDefault(),m.stopPropagation(),this._wfcMoveDetail(e.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${e.show?"mdi:eye":"mdi:eye-off"} title=${e.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${m=>{m.preventDefault(),m.stopPropagation(),this._wfcToggleDetailShow(e.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${v.icon||""}
              .value=${e.icon||""}
              @value-changed=${m=>this._wfcSetDetail(e.key,"icon",m)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${m=>this._wfcSetDetailValue(e.key,"mode",m.target.value)}>
                <option value="global" ?selected=${e.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${e.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${e.mode==="custom"?o`
                  ${this._wfcPlainNum("Icon size (px)",e.icon_size,m=>this._wfcSetDetail(e.key,"icon_size",m))}
                  ${this._wfcPlainNum("Text size (px)",e.text_size,m=>this._wfcSetDetail(e.key,"text_size",m))}
                  ${this._wfcColorField("Icon color",e.icon_color,m=>this._wfcSetDetail(e.key,"icon_color",m))}
                  ${this._wfcColorField("Text color",e.text_color,m=>this._wfcSetDetail(e.key,"text_color",m))}
                `:u}
          </div>
        </details>
      `})};let v2=["current","details","hourly","daily","sun_arc","sun_position"];function b3(H){let t=v2.filter(a=>H.includes(a)),e=H.filter(a=>!v2.includes(a));return[...t,...e]}x._wfcEditor=function(){let H=w(this._config),t=b3(H.order),e=H.order.map((n,v,m)=>{let h=!!(H[n]&&H[n].show);return o`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${c2[n]||j1.options}></ha-icon>
          <span class="wsfc-order-name">${L[n]||n}</span>
          <ha-icon class="wsfc-ico-btn ${v===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(n,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${v===m.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(n,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${h?"mdi:eye":"mdi:eye-off"} title=${h?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(n)}></ha-icon>
        </div>
      `}),a=t.map(n=>o`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${c2[n]||j1.options}></ha-icon><span class="wsfc-panel-title">${L[n]||n}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(n,H)}
          </div>
        </details>
      `);return o`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${j1.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${e}
        </div>
      </details>
      ${a}
      ${this._wfcClockPanel(H)}
    `};let u2=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];x._wfcClockPanel=function(H){let t="current",e=H.current||{},a=v=>v==="above"?"above-center":v==="below"?"below-center":v,n=e.clock_show_time!==!1;return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",n,v=>this._wfcToggleSecField(t,"clock_show_time",v))}
                ${n?o`
                      <div class="wsfc-row">
                        ${this._wfcSelect(t,"clock_placement","Clock placement",u2,a(e.clock_placement),"right")}
                        ${this._wfcSelect(t,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],e.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",e.clock_show_seconds,v=>this._wfcToggleSecField(t,"clock_show_seconds",v))}
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(t,"clock_font_size","Time size")}
                        ${this._wfcSelect(t,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],e.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",e.clock_color,v=>this._wfcSetSecField(t,"clock_color",v.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${e.clock_font_family||""}
                          @change=${v=>this._wfcSetSecField(t,"clock_font_family",v.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(t,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],e.clock_contrast,"none")}`:u}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",e.clock_show_date,v=>this._wfcToggleSecField(t,"clock_show_date",v))}
                ${e.clock_show_date?o`
                      ${this._wfcSelect(t,"clock_date_format","Date format",C.map(v=>({value:v.value,label:v.label})),e.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(t,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...u2],e.clock_date_placement==="above"||e.clock_date_placement==="below"?a(e.clock_date_placement):e.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(t,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",e.clock_date_color,v=>this._wfcSetSecField(t,"clock_date_color",v.target.value))}
                      </div>
                      ${e.clock_show_time&&(e.clock_date_placement==="with_time"||!e.clock_date_placement)?this._wfcSelect(t,"clock_align","Time & date alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],e.clock_align||"center","center"):u}
                      ${this._wfcSelect(t,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],e.clock_date_contrast!=null?e.clock_date_contrast:e.clock_contrast,"none")}`:u}
        </div>
      </details>
    `},x._wfcYamlPanel=function(){let H;try{H=N(this._config)}catch{H="# (unable to render YAML)"}return o`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${H}</pre>
        </div>
      </details>
    `}})();{let M=j.prototype,C=M._wfcWeatherSourcesPanel,V=M.render,r=M.updated;M._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":C.call(this)},M.render=function(){return this.wsfcMode!=="sources"?V.call(this):!this.hass||!this._config?"":o`${this._wfcEditorStyle()}${C.call(this)}`};let L=new CSSStyleSheet;L.replaceSync(`
    details.wsfc-panel { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft, rgba(127,127,127,.25)); border-radius: 0; background: none; margin: 0; }
    details.wsfc-panel[open] { border-color: var(--accent-color, var(--ltek-c-accent, #03a9f4)); border-radius: var(--ltek-r-ctrl, 8px); margin: 6px 0; }
    details.wsfc-panel[open] + details.wsfc-panel { border-top-color: transparent; }
    details.wsfc-panel > summary.wsfc-panel-summary { padding: var(--ltek-sp-3, 10px); gap: 8px; }
    details.wsfc-panel > summary .wsfc-panel-icon { display: none; }
    details.wsfc-panel > summary .wsfc-panel-title { font-size: var(--ltek-fs-label, 13px); font-weight: var(--ltek-fw-semibold, 600); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    details.wsfc-panel > summary::after { width: 8px; height: 8px; border-right-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); border-bottom-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    .wsfc-ed-header { display: none; }
  `),M.updated=function(i){r?.call(this,i),this.wsfcMode==="sections"&&this.renderRoot&&(this.renderRoot.adoptedStyleSheets.includes(L)||(this.renderRoot.adoptedStyleSheets=[...this.renderRoot.adoptedStyleSheets,L]),this.renderRoot.querySelectorAll("details.wsfc-panel").forEach(p=>{p.__wsfcFlat||(p.__wsfcFlat=!0,p.addEventListener("toggle",()=>{p.open&&this.dispatchEvent(new CustomEvent("wsfc-flat-open",{detail:{type:this.wsfcType},bubbles:!0,composed:!0}))}))}));let A=this.wsfcPanels;if(A&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(p=>{let s=p.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();p.hidden=!!s&&!A.includes(s)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let p=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");p&&(p.open=!0,this.__wsfcOpened=!0)}}}var n5=globalThis.__wsfcHost?.["src/card/constants.js"];if(!n5)throw new Error("wsfc-editor.js: the card did not provide src/card/constants.js; update every file of the card together");var{CARD_NAME:l5,CARD_TYPE:V2,CARD_VERSION:d5}=n5;var s5=globalThis.__wsfcHost?.["src/card/panels.js"];if(!s5)throw new Error("wsfc-editor.js: the card did not provide src/card/panels.js; update every file of the card together");var{COLLAPSE_COLORS:p5,COLLAPSE_FIELDS:C9,COMMON_SCHEMA:_1,DEFAULT_PANELS:H9,HERO_TEXT_ICONS:V9,NO_TITLE:m5,PANEL_TYPES:L2,SKY_TEXT_ICONS:L9,STACK_CHILD_SCHEMA:y1,TITLE_WHEN_SET:e2,inBarOf:k1,layoutOf:e9,migrateSky:r9,normalizePanels:c5,opensPopup:t9,panelMeta:z,rowsOf:I,spanOf:G}=s5;var v5=globalThis.__wsfcHost?.["src/card/core.js"];if(!v5)throw new Error("wsfc-editor.js: the card did not provide src/card/core.js; update every file of the card together");var{CORE_EDITOR_TAG:u5,CORE_TAG:i9,CoreSlot:o9,FLEX_SECTIONS_BUILD:a9,deepMerge:x5,flexBaseline:A9,flexOverride:Z5,resolveWfc:n9}=v5;var f5=globalThis.__wsfcHost?.["src/panels/flex.js"];if(!f5)throw new Error("wsfc-editor.js: the card did not provide src/panels/flex.js; update every file of the card together");var{FLEX_BASES:d9,WsfcFlexPanel:s9,flexBase:h5,heroAutoSizes:p9,scaleTracker:m9,trackerConfig:S5}=f5;var g5=globalThis.__wsfcHost?.["src/card/config.js"];if(!g5)throw new Error("wsfc-editor.js: the card did not provide src/card/config.js; update every file of the card together");var{clone:r1,deepDiff:v9,deepMerge:u9,fitMode:C1,prune:q}=g5;var w5=globalThis.__wsfcHost?.["src/card/metrics.js"];if(!w5)throw new Error("wsfc-editor.js: the card did not provide src/card/metrics.js; update every file of the card together");var{CARDINALS:Z9,METRICS:W,cardinal:f9,digitsFor:h9,metricEntity:T1,pressureThreshold:S9,uvLevel:g9}=w5;var b5=30,F1=4,O5=10,t1=M=>M.title?M.title:M.type==="metric"?W[M.metric]?.label||M.label||"Metric":M.type==="stack"?`Stack \xB7 ${(M.panels||[]).length}`:M.type==="day"?["Today","Tomorrow"][Number(M.day_offset??1)]||`Day +${M.day_offset}`:(z(M)?.label||M.type).replace(/ \(.*\)$/,""),r2=M=>M.icon||M.type==="metric"&&W[M.metric]?.icon||z(M)?.icon||"mdi:square-outline",l1=class extends D{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let C=this.renderRoot.querySelector(".grid");if(!C)return;let V=C.clientWidth-12;Math.abs(V-(this._mapW||0))>1&&(this._mapW=V)}),this.updateComplete.then(()=>{let C=this.renderRoot.querySelector(".grid");C&&this._ro.observe(C)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let C=this.guide;if(!C?.w||!C?.h||!this._mapW)return{row:b5,gap:F1,line:null};let V=this._mapW/C.w,r=Math.max(100,C.h-(C.chrome||0)),L=C.row||110,i=!1;if(C.fit&&this._tracks){let p=this._tracks/2,s=(r+(C.gap??12))/p-(C.gap??12);L=Math.max(60,Math.min(400,s)),i=s>=60}let A=Math.max(2,(C.gap??12)*V);return{row:Math.max(8,L*V),gap:A,line:r*V,rowPx:Math.round(L),fits:i}}updated(){let C=this.renderRoot.querySelector(".grid.measure");if(!C||!this.guide?.fit)return;let{row:V,gap:r}=this._scale(),L=Math.max(2,Math.round((C.clientHeight-12+r)/((V-r)/2+r)));L!==this._tracks&&(this._tracks=L)}_gridIdx(){return(this.panels||[]).map((C,V)=>V).filter(C=>this.panels[C].display!=="popup")}render(){let C=this.panels||[],V=this._order||this._gridIdx(),r=C.map((A,p)=>p).filter(A=>C[A].display==="popup"),L=this._scale();this._mr=L.row,this._mg=L.gap;let i=this.guide?.mode||"line";return o`
      <div class="wrap">
        <div class="grid" style=${`--row:${L.row}px;--gap:${L.gap}px`}>
          ${V.map(A=>this._block(C[A],A))}
        </div>
        ${this.guide?.fit?o`<div class="grid measure" aria-hidden="true" style=${`--row:${L.row}px;--gap:${L.gap}px`}>
          ${V.filter(A=>C[A].show!==!1).map(A=>o`<div style=${this._place(C[A])}></div>`)}</div>`:u}
        ${L.line==null||this.measured?u:L.fits?o`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${L.rowPx}px</span></div>`:o`<div class="guide ${i}" style=${`top:${6+L.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${L.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${this._screen()}
      ${r.length?o`<div class="pops"><span>Pop-ups:</span>${r.map(A=>o`<span class="pop"><ha-icon icon=${r2(C[A])}></ha-icon>${t1(C[A])}</span>`)}</div>`:u}
    `}_screen(){let C=this.measured,V=this.guide;if(!C||!V||!this._mapW||!C.w)return u;let r=this._mapW/C.w,L=Math.max(C.gridH,C.visibleH),i=C.tiles.filter(s=>s.where==="off"),A=C.tiles.filter(s=>s.where==="partial"),p=s=>s.map(l=>t1(this.panels[l.i]||{})).join(", ");return o`<div class="shot-head">On the ${V.w}×${V.h} screen at load${C.gridH<=C.visibleH+1?o` — <span class="okc">everything fits</span>`:""}</div>
      <div class="shot" style=${`height:${Math.round(L*r)+2}px`}>
        ${C.tiles.map(s=>{let l=this.panels[s.i]||{};return o`<div class="st ${s.where} ${s.collapsed?"folded":""}" style=${`left:${s.x*r}px;top:${s.y*r}px;width:${Math.max(4,s.w*r)}px;height:${Math.max(4,s.h*r)}px`}
            title=${`${t1(l)}: ${Math.round(s.w)}\xD7${Math.round(s.h)} px${s.where==="off"?" \u2014 off screen at load":s.where==="partial"?" \u2014 partly off screen":""}`}>
            <ha-icon icon=${r2(l)}></ha-icon><span>${t1(l)}</span></div>`})}
        ${C.gridH>C.visibleH+1?o`<div class="below" style=${`top:${C.visibleH*r}px`}><span>screen edge · scroll for the rest</span></div>`:u}
      </div>
      ${i.length||A.length?o`<div class="shot-note">${A.length?o`<b>Partly off screen:</b> ${p(A)}. `:""}${i.length?o`<b>Off screen:</b> ${p(i)}.`:""}
            ${V.fit&&!V.strict?" Content makes some panels taller than their rows (\u2192 in the map above); try Strict fit, Content size, or more rows for them.":""}</div>`:u}`}_place(C,V){let r=V?V.span:G(C),L=V?V.rows:I(C);return`grid-column: span ${r}; grid-row: span ${L?Math.max(1,Math.round(L*2)):2};`}_block(C,V){let r=this._size?.index===V?this._size:null,L=r?r.span:G(C),i=r?r.rows:I(C),A=this._place(C,r),p=!r&&this.measured?.tiles?.find(d=>d.i===V),s=p&&!p.collapsed?Math.round((p.h+this.measured.gap)/(this.measured.row+this.measured.gap)*2)/2:null,l=s!=null&&i>0&&s>i+.25,c=["blk",C.show===!1?"hidden":"",this._drag?.index===V?"dragging":"",r?"sizing":"",C.type,p?`at-${p.where}`:"",l?"grows":"",p?.collapsed?"folded":""].join(" ");return o`<div class=${c} style=${A} data-i=${V} tabindex="0" role="button"
        aria-label=${`${t1(C)}, width ${L} of 12, height ${i||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${d=>this._startMove(d,V)} @keydown=${d=>this._key(d,V)}>
      <ha-icon icon=${r2(C)}></ha-icon>
      <span class="nm">${t1(C)}</span>
      <span class="dim">${L}×${i||"a"}${l?o` <b class="need" title="Its content makes it taller on that screen">→ ${s}</b>`:u}${p?.collapsed?" \xB7 folded":""}</span>
      <span class="rz x" @pointerdown=${d=>this._startSize(d,V,"x")}></span>
      <span class="rz y" @pointerdown=${d=>this._startSize(d,V,"y")}></span>
      <span class="rz xy" @pointerdown=${d=>this._startSize(d,V,"xy")}></span>
    </div>`}_startMove(C,V){if(C.button!==0||C.target.classList.contains("rz"))return;C.preventDefault();let r=C.currentTarget;r.setPointerCapture(C.pointerId),this._order=this._gridIdx(),this._drag={index:V,x0:C.clientX,y0:C.clientY,moved:!1};let L=A=>this._onMove(A),i=()=>{r.removeEventListener("pointermove",L),r.removeEventListener("pointerup",i),r.removeEventListener("pointercancel",i);let A=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),p=this._order;this._drag=null,this._order=null,A&&this._commitOrder(p)};r.addEventListener("pointermove",L),r.addEventListener("pointerup",i),r.addEventListener("pointercancel",i)}_onMove(C){let V=this._drag;if(!V||!V.moved&&Math.hypot(C.clientX-V.x0,C.clientY-V.y0)<4)return;V.moved=!0;let r=[...this.renderRoot.querySelectorAll(".blk")].filter(p=>Number(p.dataset.i)!==V.index),L=null;for(let p of r){let s=p.getBoundingClientRect();if(C.clientX>=s.left&&C.clientX<=s.right&&C.clientY>=s.top&&C.clientY<=s.bottom){L={i:Number(p.dataset.i),after:C.clientX>s.left+s.width/2};break}}if(!L){let p=r[r.length-1]?.getBoundingClientRect();if(p&&C.clientY>p.bottom)L={i:Number(r[r.length-1].dataset.i),after:!0};else return}let i=this._order.filter(p=>p!==V.index),A=i.indexOf(L.i)+(L.after?1:0);i.splice(A,0,V.index),i.join()!==this._order.join()&&(this._order=i)}_commitOrder(C){let V=this.panels,r=C.map(i=>V[i]),L=V.map(i=>i.display==="popup"?i:r.shift());this._emit(L)}_startSize(C,V,r){if(C.button!==0)return;C.preventDefault(),C.stopPropagation();let L=C.currentTarget;L.setPointerCapture(C.pointerId);let A=(this.renderRoot.querySelector(".grid").clientWidth-11*F1)/12+F1,p=this.panels[V],s=G(p),l=I(p);this._size={index:V,span:s,rows:l};let c=C.clientX,d=C.clientY,Z=b=>{let k=r==="y"?s:Math.max(1,Math.min(12,s+Math.round((b.clientX-c)/A))),T=l||1,B=(this._mr||b5)+(this._mg||F1),F=r==="x"?l:Math.max(.5,Math.min(O5,T+Math.round(2*(b.clientY-d)/B)/2));r!=="x"&&l===0&&F===1&&Math.abs(b.clientY-d)<B/4&&(F=0),(k!==this._size.span||F!==this._size.rows)&&(this._size={index:V,span:k,rows:F})},g=()=>{L.removeEventListener("pointermove",Z),L.removeEventListener("pointerup",g),L.removeEventListener("pointercancel",g);let{span:b,rows:k}=this._size;this._size=null,(b!==s||k!==l)&&this._commitSize(V,b,k)};L.addEventListener("pointermove",Z),L.addEventListener("pointerup",g),L.addEventListener("pointercancel",g)}_commitSize(C,V,r){let L=z(this.panels[C])||{},i={...this.panels[C],span:V,rows:r};V===L.span&&delete i.span,r===(L.rows??0)&&delete i.rows;let A=this.panels.slice();A[C]=i,this._emit(A)}_key(C,V){let r=this._gridIdx(),L=r.indexOf(V);if(C.shiftKey){let i=this.panels[V],A={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[C.key];if(!A)return;C.preventDefault(),this._commitSize(V,Math.max(1,Math.min(12,G(i)+A[0])),Math.max(0,Math.min(O5,I(i)+A[1]/2)))}else if(C.key==="ArrowLeft"||C.key==="ArrowRight"){C.preventDefault();let i=L+(C.key==="ArrowLeft"?-1:1);if(i<0||i>=r.length)return;let A=r.slice();[A[L],A[i]]=[A[i],A[L]],this._commitOrder(A),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${r[i]}"]`)?.focus())}}_emit(C){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:C}}))}};$(l1,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},measured:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),$(l1,"styles",R`
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",l1);var _5=56,y5=16,d1=class extends D{render(){let C=this.guide;return!C?.w||!C?.h?o``:o`<div class="screen" style=${`width:${Math.max(200,C.w-y5)}px;height:${Math.max(200,C.h-_5)}px`}></div>`}updated(C){let V=`${this.guide?.w}x${this.guide?.h}`;!(C.has("config")&&C.get("config")!==this.config)&&V===this._key&&this._card||this.hass&&(this._key=V,clearTimeout(this._t),this._t=setTimeout(()=>this._build(),400))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._t),clearTimeout(this._m)}_build(){let C=this.renderRoot.querySelector(".screen"),V=this.guide;if(!(!C||!V||!this.hass||!this.config?.entity)&&customElements.get("weather-station-flex-card")){this._card||(this._card=document.createElement("weather-station-flex-card"),this._card.editMode=!0,C.append(this._card));try{this._card.setConfig({...this.config,remember:!1})}catch{return}this._card.screenHeight=Math.max(200,V.h-_5-y5),this._card.screenWidth=V.w,this._card.hass=this.hass,clearTimeout(this._m),this._m=setTimeout(()=>{try{this._card._fit?.(),this._card._autoFitPanels?.()}catch{}requestAnimationFrame(()=>this._measure())},900)}}_measure(){let C=this._card?.shadowRoot,V=C?.querySelector(".scroller"),r=C?.querySelector(".grid");if(!V||!r)return;let L=r.getBoundingClientRect(),i=V.getBoundingClientRect(),A=this.renderRoot.querySelector(".screen").getBoundingClientRect(),p=Math.min(i.top+V.clientHeight,A.bottom)-L.top,s=getComputedStyle(r),l=[...r.querySelectorAll(":scope > section.tile[data-i]")].map(c=>{let d=c.getBoundingClientRect(),Z=d.top-L.top,g=d.height;return{i:Number(c.dataset.i),x:d.left-L.left,y:Z,w:d.width,h:g,collapsed:c.classList.contains("collapsed"),where:Z>=p-1?"off":Z+g>p+1?"partial":"on"}});this.dispatchEvent(new CustomEvent("probe-measured",{detail:{w:L.width,visibleH:p,gridH:L.height,row:parseFloat(r.style.getPropertyValue("--wsfc-row")||s.getPropertyValue("--wsfc-row"))||110,gap:parseFloat(s.rowGap)||12,tiles:l}}))}};$(d1,"properties",{hass:{attribute:!1},config:{attribute:!1},guide:{attribute:!1}}),$(d1,"styles",R`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `);customElements.get("wsfc-layout-probe")||customElements.define("wsfc-layout-probe",d1);var P1=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--disabled-color)","Disabled"],["var(--state-icon-color)","State icon"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function F0(M){return M=M==null?"":String(M),M===""?"default":M==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(M)?"custom":/^var\(/.test(M)&&P1.some(([C])=>C===M)?"theme":"css"}var T5=M=>!!M.selector?.ltek_color||!!M.selector?.text&&/(^|_|\.)color$/.test(M.name),P0=M=>/px|%/.test(M?.unit_of_measurement||"");function B0(M){let C=M.selector||{};return!!(C.boolean||C.select&&!C.select.custom_value||C.number||T5(M)||C.text&&!C.text.multiple)}var k5=M=>/^#[0-9a-fA-F]{6}$/.test(M||"")?M:null;function F5({data:M,schema:C,onChange:V,label:r,helper:L,haForm:i,auto:A,whenData:p}){let s=[],l=[],c=()=>{if(!l.length)return;let d=l;s.push(i(Object.fromEntries(d.map(Z=>[Z.name,M[Z.name]])),d,Z=>V({...M,...Z}))),l=[]};for(let d of C)if(!(typeof d.when=="function"&&!d.when(p?{...p,...M}:M))){if(!B0(d)){l.push(d);continue}c(),s.push($0(d,M[d.name],Z=>V({...M,[d.name]:Z}),r(d),L(d),A?.(d)))}return c(),s}function $0(M,C,V,r,L,i){let A=M.selector||{},p=`f-${M.name.replace(/\W/g,"_")}`,s=L?o`<div class="fhelp">${L}</div>`:u;if(A.boolean){let l=M.invert?C===!1:!!C;return o`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${l} @change=${c=>V(M.invert?!c.target.checked:c.target.checked)} />${r}</label>${s}</div>`}if(A.select&&!A.select.multiple){let l=(A.select.options||[]).map(d=>typeof d=="string"?{value:d,label:d}:d),c=C==null?"":String(C);return o`<div class="fld"><div class="frow"><label for=${p}>${r}</label>
      <select id=${p} class="sel" @change=${d=>V(d.target.value===""?void 0:d.target.value)}>
        ${l.some(d=>String(d.value)===c)?u:o`<option value="" ?selected=${c===""}>—</option>`}
        ${l.map(d=>o`<option value=${d.value} ?selected=${String(d.value)===c}>${d.label}</option>`)}
      </select></div>${s}</div>`}if(A.select&&A.select.multiple){let l=(A.select.options||[]).map(Z=>typeof Z=="string"?{value:Z,label:Z}:Z),c=Array.isArray(C)?C:[],d=(Z,g)=>{let b=l.map(k=>k.value).filter(k=>k===Z?g:c.includes(k));V(b.length?b:void 0)};return o`<div class="fld"><div class="flab">${r}</div><div class="fmulti">
      ${l.map(Z=>o`<label class="fchk"><input type="checkbox" .checked=${c.includes(Z.value)} @change=${g=>d(Z.value,g.target.checked)} />${Z.label}</label>`)}
    </div>${s}</div>`}if(A.number){let l=A.number,c=l.unit_of_measurement||"";if(l.mode==="slider"||P0(l)){let d=l.min??0,Z=l.max??100,g=l.step??1,b=C??M.default,k=parseFloat(i),T=b??(Number.isFinite(k)?Math.max(d,Math.min(Z,k)):d),B=F=>F==null||F===""?"Auto":`${F}${c}`;return o`<div class="fld"><div class="frow nowrap"><label for=${p}>${r}</label>
        <input id=${p} type="range" class="frange" min=${d} max=${Z} step=${g} .value=${String(T)}
          @input=${F=>{let w=F.target.parentElement.querySelector(".fval");w&&(w.textContent=B(F.target.value))}}
          @change=${F=>V(Number(F.target.value))} />
        <span class="fval">${B(b)}</span>
        ${C!=null&&M.default===void 0?o`<button class="freset" title="Back to Auto" @click=${()=>V(void 0)}>×</button>`:u}
      </div>${i&&b==null?o`<div class="fauto">Auto: ${i}</div>`:u}${s}</div>`}return o`<div class="fld"><div class="frow"><label for=${p}>${r}</label>
      <input id=${p} type="number" class="ftext num" min=${l.min??u} max=${l.max??u} step=${l.step??"any"} .value=${C??""}
        @change=${d=>V(d.target.value===""?void 0:Number(d.target.value))} />${c?o`<span class="funit">${c}</span>`:u}
    </div>${s}</div>`}return T5(M)?R0(p,C,V,r,s,/background|(^|_)bg(_|$)/i.test(`${M.name} ${r}`)):o`<div class="fld"><div class="frow"><label for=${p}>${r}</label>
    <input id=${p} type=${A.text?.type||"text"} class="ftext" .value=${C??""} @change=${l=>V(l.target.value===""?void 0:l.target.value)} />
  </div>${s}</div>`}function R0(M,C,V,r,L,i=!1){let A=F0(C),p=C==null?"":String(C),s=l=>V(l==="default"?void 0:l==="transparent"?"transparent":l==="theme"?P1.some(([c])=>c===p)?p:P1[0][0]:l==="custom"?k5(p)||"#4fc3f7":p||"#4fc3f7");return o`<div class="fld"><div class="frow"><label for=${M}>${r}</label>
    <span class="fcolor">
      <select id=${M} class="sel mode" @change=${l=>s(l.target.value)}>
        ${[["default","Not set"],...i||A==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([l,c])=>o`<option value=${l} ?selected=${l===A}>${c}</option>`)}
      </select>
      ${A==="theme"?o`<select class="sel" aria-label="Theme color" @change=${l=>V(l.target.value)}>${P1.map(([l,c])=>o`<option value=${l} ?selected=${l===p}>${c}</option>`)}</select>`:A==="custom"?o`<input type="color" class="fswatch" aria-label="Color" .value=${k5(p)||"#4fc3f7"} @change=${l=>V(l.target.value)} />`:A==="css"?o`<input type="text" class="ftext" aria-label="CSS color" .value=${p} @change=${l=>V(l.target.value||void 0)} />`:u}
      ${A!=="default"&&A!=="transparent"?o`<span class="fdot" style="background:${p}"></span>`:u}
    </span>
  </div>${L}</div>`}var P5=R`
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
`;var B5=globalThis.__wsfcHost?.["src/card/lazy.js"];if(!B5)throw new Error("wsfc-editor.js: the card did not provide src/card/lazy.js; update every file of the card together");var{lazyLib:$5}=B5;var B1,E0=async()=>B1||(B1=await $5("wsfc-yaml.js")),D0=`
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
`,W0=M=>B1.dump(M,{lineWidth:-1,noRefs:!0});function N0(M,C){let V;try{V=B1.load(String(M||""))}catch(r){throw new Error(`Not valid YAML or JSON: ${r.reason||r.message}`)}if(!V||typeof V!="object"||Array.isArray(V))throw new Error("Expected the card's settings (a YAML mapping).");if(V.type&&C&&V.type!==C)throw new Error(`This is a ${V.type} config, not ${C}.`);if(!V.entity)throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");return{...V,type:C||V.type}}async function t2(M){try{await E0()}catch(C){alert(String(C?.message||C));return}return z0(M)}function z0({mode:M,config:C,cardType:V,onImport:r}){let L=document.createElement("dialog");L.className="wsfc-io";let i=document.createElement("style");i.textContent=D0;let A=M==="export";L.innerHTML=`<div class="in">
    <h2>${A?"Export settings":"Import settings"}</h2>
    <p>${A?"The whole card's settings as YAML. Copy them to keep a backup or to use them on another dashboard.":"Paste settings exported from this card (YAML or JSON). They replace the current settings in the editor; press Save in Home Assistant to keep them."}</p>
    <textarea spellcheck="false" aria-label="${A?"Exported settings":"Settings to import"}"></textarea>
    <div class="err" role="alert"></div>
    <div class="bar">
      ${A?'<button class="copy">Copy to clipboard</button><button class="dl">Download file</button>':'<button class="paste">Paste from clipboard</button>'}
      <span class="grow"></span>
      <button class="close">${A?"Close":"Cancel"}</button>
      ${A?"":'<button class="pri apply">Import</button>'}
    </div>
  </div>`,L.prepend(i);let p=L.querySelector("textarea"),s=L.querySelector(".err");A&&(p.value=W0(C));let l=()=>{L.close(),L.remove()};L.querySelector(".close").addEventListener("click",l),L.addEventListener("cancel",c=>{c.preventDefault(),l()}),L.addEventListener("click",c=>{c.target===L&&l()}),L.querySelector(".copy")?.addEventListener("click",async c=>{let d=c.currentTarget;p.focus(),p.select();let Z=!1;try{Z=document.execCommand("copy")}catch{Z=!1}if(!Z)try{await navigator.clipboard.writeText(p.value),Z=!0}catch{Z=!1}d.textContent=Z?"Copied \u2713":"Press Ctrl/Cmd+C"}),L.querySelector(".dl")?.addEventListener("click",()=>{let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([p.value],{type:"text/yaml"})),c.download="weather-station-flex-card.yaml",c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),1e3)}),L.querySelector(".paste")?.addEventListener("click",async c=>{try{p.value=await navigator.clipboard.readText(),s.textContent=""}catch{c.currentTarget.textContent="Paste with Ctrl/Cmd+V",p.focus()}}),L.querySelector(".apply")?.addEventListener("click",()=>{try{let c=N0(p.value,V);r?.(c),l()}catch(c){s.textContent=c.message}}),document.body.appendChild(L);try{L.showModal()}catch{L.setAttribute("open","")}return A?(p.focus(),p.select()):p.focus(),L}var R5=globalThis.__wsfcHost?.["src/card/unsaved.js"];if(!R5)throw new Error("wsfc-editor.js: the card did not provide src/card/unsaved.js; update every file of the card together");var{isLive:M2,isUnsaved:E9,setLive:i2,setUnsaved:$1}=R5;var E5=globalThis.__wsfcHost?.["src/card/detected.js"];if(!E5)throw new Error("wsfc-editor.js: the card did not provide src/card/detected.js; update every file of the card together");var{detected:D5,setDetected:W9}=E5;var W5=globalThis.__wsfcHost?.["src/card/animation-speed.js"];if(!W5)throw new Error("wsfc-editor.js: the card did not provide src/card/animation-speed.js; update every file of the card together");var{ANIM_SPEEDS:N5,LOW_POWER_VARS:z5,SPEED_MAX:z9,SPEED_MIN:I9,animSpeedVars:I5}=W5;var G5=globalThis.__wsfcHost?.["src/card/weather-station-flex-card.js"];if(!G5)throw new Error("wsfc-editor.js: the card did not provide src/card/weather-station-flex-card.js; update every file of the card together");var{canCollapseType:U5,panelStyleVars:U9,tileFx:Q9}=G5;var Q5=globalThis.__wsfcHost?.["src/card/icons.js"];if(!Q5)throw new Error("wsfc-editor.js: the card did not provide src/card/icons.js; update every file of the card together");var{OPEN_ICONS_FULL:j5,OPEN_ICONS_SMALL:q5,openIcon:q9}=Q5;var K5=globalThis.__wsfcHost?.["src/card/compact.js"];if(!K5)throw new Error("wsfc-editor.js: the card did not provide src/card/compact.js; update every file of the card together");var{COMPACT_TYPES:Y5,NEEDS_PANEL:Y9,compactRow:X9,compactStyles:J9,compactTiles:C6}=K5;var X5=globalThis.__wsfcHost?.["src/card/resolve.js"];if(!X5)throw new Error("wsfc-editor.js: the card did not provide src/card/resolve.js; update every file of the card together");var{deviceEntities:o2,entityValue:R1,findHealthEntity:V6,findStationEntity:L6,healthDevices:e6,integrationOf:M1,metricChain:r6,metricSensor:J5,metricValue:t6,pick:M6,sourceDefault:C3,stationDeviceEntities:H3,stationDevices:i6,stationStatus:o6}=X5;var V3="__other__",s1=class extends D{_name(C){let V=this.hass?.states?.[C],r=V?.attributes?.friendly_name||C,L=V&&!["unknown","unavailable"].includes(V.state)&&!C.startsWith("weather.")?` \xB7 ${V.state}${V.attributes?.unit_of_measurement?` ${V.attributes.unit_of_measurement}`:""}`:"";return`${r}${L}`}_emit(C){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:C},bubbles:!1}))}render(){let C=this.value||"",V=[...new Set([...this.candidates||[],...C?[C]:[]])].filter(L=>L!==this.defaultEntity||C===L),r=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return o`
      <div class="row">
        <select class=${C?"":"def"} aria-label=${this.label||"Entity"} @change=${L=>{let i=L.target.value;if(i===V3){this._other=!0,L.target.value=C;return}this._emit(i)}}>
          <option value="" ?selected=${!C}>${r}</option>
          ${V.map(L=>o`<option value=${L} ?selected=${L===C}>${this._name(L)}</option>`)}
          <option value=${V3}>Other entity…</option>
        </select>
        ${C?o`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:u}
      </div>
      ${this._other?o`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:C}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${L=>{L.stopPropagation();let i=L.detail.value?.e;i&&this._emit(i)}}></ha-form></div>`:u}
    `}};$(s1,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),$(s1,"styles",R`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",s1);var I0=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],E1=M=>typeof M=="string"&&M.startsWith("device:"),p1=class extends D{constructor(){super(),this._open=new Set}get _sources(){let C=this.config?.metric_sources||{};return Array.isArray(C.sources)?C.sources.filter(V=>V?.ref).map(V=>({ref:V.ref,overrides:{...V.overrides||{}},disabled:!!V.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(C){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:C}}}_commit(C){let V=C.filter(l=>l?.ref).map(l=>{let c=Object.fromEntries(Object.entries(l.overrides||{}).filter(([,d])=>d));return{ref:l.ref,...Object.keys(c).length?{overrides:c}:{},...l.disabled?{disabled:!0}:{}}}),r={...this.config?.metric_sources||{}};delete r.primary,delete r.fallback,delete r.custom,delete r.device_map,V.length?r.sources=V:delete r.sources;let L=l=>(this.hass?.states?.[l]?.attributes?.supported_features&7)!==0,i=l=>l.map(c=>c.ref).filter(c=>typeof c=="string"&&c.startsWith("weather.")),A=i(V.filter(l=>!l.disabled)),p=i(V),s=A.find(L)||A[0]||p.find(L)||p[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:s,metric_sources:Object.keys(r).length?r:void 0}}))}_info(C){let V=this.hass;if(E1(C)){let L=V?.devices?.[C.slice(7)],i=o2(V,C.slice(7))[0];return{icon:"mdi:access-point",name:L?.name_by_user||L?.name||C.slice(7),kind:"Station device",sub:[L?.manufacturer,L?.model].filter(Boolean).join(" "),integ:M1(V,i)}}let r=V?.states?.[C];return C.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:r?.attributes?.friendly_name||C,kind:"Weather entity",sub:"forecast + condition",integ:M1(V,C)}:{icon:"mdi:eye-outline",name:r?.attributes?.friendly_name||C,kind:"Sensor",sub:C,integ:M1(V,C)}}_candidates(C,V){let r=this.hass;if(!E1(C))return[];let L=V&&r.states[V]?.attributes?.unit_of_measurement,i=C.slice(7),A=r.devices?.[i]?.config_entries||[];return[...new Set([i,...Object.entries(r.devices||{}).filter(([,s])=>(s.config_entries||[]).some(l=>A.includes(l))).map(([s])=>s)])].flatMap(s=>o2(r,s)).filter(s=>s.startsWith("sensor.")&&r.states[s]?.attributes?.unit_of_measurement&&(!L||r.states[s].attributes.unit_of_measurement===L)).sort()}render(){if(!this.hass)return u;let C=this._sources,V=this._station(C),r=C.some(L=>L.ref.startsWith("weather.")&&!L.disabled);return o`
      <div class="list">
        ${C.map((L,i)=>this._source(L,i,C,V))}
      </div>
      ${r?u:o`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(C):o`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(C,V,r,L){let i=this._info(C.ref),A=this._open.has(C.ref),p=I0.map(([d,Z])=>{let g=C3(L,this.hass,C.ref,d),b=C.ref.startsWith("weather.")?this.hass.states[C.ref]?.attributes?.[d]!=null:!!g;return{k:d,label:Z,def:C.ref.startsWith("weather.")?b?C.ref:null:g,ov:C.overrides[d]||"",has:b||!!C.overrides[d]}}),s=p.filter(d=>d.has).length,l=d=>{let Z=r.map(g=>({...g,overrides:{...g.overrides}}));d(Z),this._commit(Z)},c=()=>{let d=new Set(this._open);d.has(C.ref)?d.delete(C.ref):d.add(C.ref),this._open=d};return o`<div class="src ${A?"open":""} ${C.disabled?"off":""}">
      <div class="hd" @click=${c} role="button" tabindex="0" aria-expanded=${String(A)} @keydown=${d=>(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c())}>
        <span class="rank">${V+1}</span>
        <ha-icon class="lead" icon=${i.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${i.name}${C.disabled?o` <span class="tag">hidden</span>`:u}</div>
          <div class="sb"><span class="pill">${i.kind}</span>${i.integ?o`<span class="pill integ">${i.integ}</span>`:u}<span>${s} value${s===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${d=>d.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${V===0} @click=${()=>l(d=>[d[V-1],d[V]]=[d[V],d[V-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${V===r.length-1} @click=${()=>l(d=>[d[V+1],d[V]]=[d[V],d[V+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${C.disabled?"Use this source":"Skip this source"} @click=${()=>l(d=>d[V].disabled=!d[V].disabled)}><ha-icon icon=${C.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>l(d=>d.splice(V,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${A?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${A?o`<div class="bd">
            ${i.sub?o`<div class="meta">${i.sub}</div>`:u}
            <div class="tbl">
              ${p.filter(d=>d.has||E1(C.ref)).map(d=>{let Z=d.ov||d.def,g=Z&&!Z.startsWith("weather.")?R1(this.hass,Z):null,b=Z?.startsWith("weather.")?this.hass.states[Z]?.attributes?.[d.k]:null;return o`<span class="k">${d.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${d.ov} .defaultEntity=${d.def}
                    .defaultLabel=${C.ref.startsWith("weather.")&&!d.ov?d.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(C.ref,d.def)} label=${d.label}
                    @value-changed=${k=>l(T=>T[V].overrides[d.k]=k.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${g?`${g.value} ${g.unit}`:b!=null?String(b):""}</span>`})}
            </div>
            ${C.ref.startsWith("weather.")?o`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:u}
          </div>`:u}
    </div>`}_addForm(C){let V=r=>{if(!r||C.some(A=>A.ref===r)){this._adding=!1;return}this._adding=!1;let L=C.slice(),i=L.findIndex(A=>A.ref.startsWith("weather."));E1(r)&&i>=0?L.splice(i,0,{ref:r,overrides:{}}):L.push({ref:r,overrides:{}}),this._commit(L)};return o`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${r=>{r.stopPropagation(),V(r.detail.value?.d&&`device:${r.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${r=>{r.stopPropagation(),V(r.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};$(p1,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),$(p1,"styles",R`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",p1);var L3=globalThis.__wsfcHost?.["src/panels/graph.js"];if(!L3)throw new Error("wsfc-editor.js: the card did not provide src/panels/graph.js; update every file of the card together");var{PRESET_SERIES:a2,WsfcGraph:c6}=L3;var e3=globalThis.__wsfcHost?.["src/panels/statistics.js"];if(!e3)throw new Error("wsfc-editor.js: the card did not provide src/panels/statistics.js; update every file of the card together");var{SGCC_PRESETS:r3,STAT_PRESETS:t3,statisticsCard:u6,statisticsEngine:M3}=e3;var i1=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],G0=M=>/^#[0-9a-f]{6}$/i.test(M||"")?M:/^#[0-9a-f]{3}$/i.test(M||"")?"#"+M.slice(1).split("").map(C=>C+C).join(""):"#888888";function U0(M){if(M.type==="statistics"){let C=M.preset||"temps",V=r3[C]||{};return((Array.isArray(M.metrics)&&M.metrics.length?M.metrics:V.metrics||t3[C]?.metrics)||[]).map((L,i)=>({metric:L,color:M.colors?.[L],defColor:V.series?.[L]?.color||W[L]?.color||i1[i%i1.length],entity:M.entity_overrides?.[L]||"",key:"map"}))}return Array.isArray(M.series)&&M.series.length?M.series.map((C,V)=>({metric:C.metric,idx:V,color:C.color,defColor:W[C.metric]?.color||i1[V%i1.length],entity:C.entity||"",label:C.label,key:"list"})):(a2[M.type]||a2.graph).map((C,V)=>({metric:C.metric,color:M.colors?.[C.metric],defColor:C.color||W[C.metric]?.color||i1[V%i1.length],entity:M.entities?.[C.metric]||"",key:"map"}))}var m1=class extends D{_set(C,V,r){let L=r1(this.panel);if(C.key==="list")L.series[C.idx]=q({...L.series[C.idx],[V]:r||void 0});else{let i=V==="color"?"colors":L.type==="statistics"?"entity_overrides":"entities";L[i]=q({...L[i]||{},[C.metric]:r||void 0}),Object.keys(L[i]).length||delete L[i]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:L}}))}_candidates(C){let V=C&&this.hass.states[C]?.attributes?.unit_of_measurement;return H3(this.station,this.hass).filter(r=>r.startsWith("sensor.")&&(!V||this.hass.states[r]?.attributes?.unit_of_measurement===V))}render(){if(!this.hass||!this.panel)return u;let C=U0(this.panel),V=this.panel.type!=="statistics"||M3(this.panel)==="sgcc";return o`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${C.map(r=>{let L=T1(r.metric,this.station,this.hass),i=r.color||r.defColor;return o`<span class="k">${r.label||W[r.metric]?.label||r.metric||"Series"}</span>
          <span class="c">
            ${V?o`<input type="color" .value=${G0(i)} title="Line color" aria-label="Line color" @change=${A=>this._set(r,"color",A.target.value)} />
                ${r.color?o`<button type="button" title="Default color" @click=${()=>this._set(r,"color","")}>↺</button>`:u}`:o`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${r.entity} .defaultEntity=${L} .candidates=${this._candidates(L)} label=${`${r.metric} sensor`}
            @value-changed=${A=>this._set(r,"entity",A.detail.value)}></wsfc-entity-select>`})}
    </div>`}};$(m1,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),$(m1,"styles",R`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",m1);var D1=[["sunny","Sunny"],["clear-night","Clear night"],["partlycloudy","Partly cloudy"],["cloudy","Cloudy"],["fog","Fog"],["rainy","Rainy"],["pouring","Pouring"],["lightning","Lightning"],["lightning-rainy","Lightning and rain"],["hail","Hail"],["snowy","Snowy"],["snowy-rainy","Sleet (snow and rain)"],["windy","Windy"],["windy-variant","Windy with clouds"],["exceptional","Exceptional"]],c1=class extends D{render(){let C=this.config||{},V=this.hass,r=V?.states?.[C.entity],L=this.condition||r?.state||"partlycloudy",i=this.time==="night"||this.time!=="day"&&L==="clear-night",A=r?.attributes||{},p=[C.anim_low_power?z5:"",...I5(C)].filter(Boolean).join(";"),s=(D1.find(([l])=>l===L)||[,L])[1];return o`<div class="box" style=${p}>
      <wsfc-animation-provider .hass=${V} .wsfcNight=${i}
        .weatherEntity=${{...r||{entity_id:C.entity,attributes:{}},state:L}}
        .config=${{entity:C.entity,show_condition_effects:C.background_effects??!0,show_moon_phase:C.background_moon_phase??!0,fog_density:C.fog_density,wind_density:C.wind_density,lightning_interval:C.lightning_interval,lightning_intensity:C.lightning_intensity,lightning_bolts:C.lightning_bolts}}
        .currentForecast=${{wind_speed:A.wind_speed,wind_bearing:A.wind_bearing}}></wsfc-animation-provider>
      <span class="tag">${s} · ${i?"Night":"Day"}</span>
    </div>`}};$(c1,"properties",{hass:{attribute:!1},config:{attribute:!1},condition:{},time:{}}),$(c1,"styles",R`
    :host { display: block; }
    .box { position: relative; height: 200px; border-radius: var(--ltek-radius, 12px); overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); border: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .tag { position: absolute; left: 10px; bottom: 8px; z-index: 2; font-size: var(--ltek-fs-small, 12px); font-weight: 600; padding: 3px 9px; border-radius: 999px;
      background: rgba(0, 0, 0, 0.45); color: #fff; }
  `);customElements.get("wsfc-bg-preview")||customElements.define("wsfc-bg-preview",c1);var i3=globalThis.__wsfcHost?.["src/card/condition.js"];if(!i3)throw new Error("wsfc-editor.js: the card did not provide src/card/condition.js; update every file of the card together");var{clearSkyRadiation:P6,conditionSummary:o3,deriveHass:B6,ensureSolarScale:$6,lightDetails:R6,resetSolarScale:E6,skyClearness:D6,solarScale:W6,stationCondition:N6,sunElevation:z6}=i3;var Q0=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],j0={wind_bearing:"Wind direction",precipitation:"Rain rate"},z1=[{name:"condition_source",label:"Current condition from",selector:{select:{options:[{value:"entity",label:"The weather entity"},{value:"station",label:"Your station's readings (the entity fills in the rest)"}]}},default:"entity",helper:"With the station: rain rate, solar radiation (or light), humidity, wind, temperature and the lightning sensor decide sunny, partly cloudy, cloudy, rain, snow, fog, windy and lightning. The hero, bulletin and background follow it. At night, and when the sun is low, the entity's view of the sky is used."},{name:"station_solar_scale",label:"Clear-sky calibration",when:M=>M.condition_source==="station",selector:{number:{min:20,max:160,step:5,mode:"slider",unit_of_measurement:"%"}},helper:"Auto (not set): learned from the sensor's last 10 days against the clear-sky model, so it's judged against its own clear days. Set it to force a value: lower if clear days read as cloudy, higher if cloudy days read as sunny."},{name:"station_windy_mph",label:"Windy from",when:M=>M.condition_source==="station",selector:{number:{min:10,max:60,step:1,mode:"slider",unit_of_measurement:"mph"}},default:25},{name:"station_pouring_inh",label:"Pouring from",when:M=>M.condition_source==="station",selector:{number:{min:.1,max:1,step:.05,mode:"slider",unit_of_measurement:"in/h"}},default:.3}],Z1=[["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."}]],["Animation",[{name:"background_effects",label:"Animation effects",when:M=>M.background==="animated",selector:{select:{multiple:!0,options:[["rain","Rain"],["snow","Snow"],["lightning","Lightning"],["sky","Sky"],["moon","Moon"],["sun","Sun"],["cloud","Clouds"],["fog","Fog"],["hail","Hail"],["wind","Wind gusts"],["exceptional","Unusual weather glow"]].map(([M,C])=>({value:M,label:C}))}},default:["rain","snow","lightning","sky","moon","sun","cloud","fog","hail","wind","exceptional"],helper:"Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. Rain, snow and storms get an overcast sky and cloud deck (Sky, Clouds)."},{name:"background_moon_phase",label:"Show moon phase",when:M=>M.background==="animated",selector:{boolean:{}},default:!0,helper:"Shade the night-time moon to the current lunar phase (off: a full moon)."},{name:"anim_low_power",label:"Low-power animation",when:M=>M.background!=="image",selector:{boolean:{}},default:!1,helper:"For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer."},{name:"anim_speed",label:"Overall speed",when:M=>M.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Every animation at once (100% = normal, 50% = half as fast), for the card background and the hero's own animation. Per-effect speeds below multiply it."},...N5.map(([M,,C])=>({name:M,label:C,sub:"Per-effect speeds",subIcon:"mdi:speedometer",when:V=>V.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100})),{name:"fog_density",label:"Fog density",when:M=>M.background==="animated"&&(M.background_effects??["fog"]).includes("fog"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How thick the fog is: the number of mist banks and how much they hide."},{name:"lightning_interval",label:"Time between strikes",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:2,max:90,step:1,mode:"slider",unit_of_measurement:"s"}},default:12,helper:"In storms: roughly how often the clouds light up (each strike comes at its own irregular time around this)."},{name:"lightning_bolts",label:"Lightning bolts",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:20,helper:"How many of the flashes drop a visible bolt from the cloud (the others light the clouds from inside)."},{name:"lightning_intensity",label:"Lightning intensity",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:10,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How brightly the clouds and the sky light up."},{name:"wind_density",label:"Wind density",when:M=>M.background==="animated"&&(M.background_effects??["wind"]).includes("wind"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How many wisps of air blow across in windy weather."}]],["Image",[{name:"background_image",when:M=>M.background==="image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",when:M=>M.background==="image",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",when:M=>M.background==="image",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",when:M=>M.background==="image",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]]],f1=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Panels",[{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},when:M=>!M.anim_low_power,helper:"With a card background: blur behind panels. Default 6 (off with Low-power animation)."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:M=>!!M.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:M=>!!M.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]],["Alerts bar",[{name:"alerts_bar",label:"Alerts bar",selector:{boolean:{}},default:!1,helper:"A thin row at the top that appears only while something needs attention: heat or frost (the Frost & heat watch rules), lightning within 10 miles in the last 30 minutes, and weather alerts. Tap one to open its panel."},{name:"alerts_watch",label:"Heat and frost",when:M=>!!M.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_lightning",label:"Lightning nearby",when:M=>!!M.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_entity",label:"Weather alerts sensor",when:M=>!!M.alerts_bar,selector:{entity:{domain:"sensor"}},helper:"Optional, e.g. the NWS Alerts integration's sensor (its Alerts attribute)."}]]];function a3(M,C,V,r){return[{name:M,label:C,selector:{select:{options:[...V.map((L,i)=>({value:L,label:`mdi:${L}${i?"":" (default)"}`})),{value:"custom",label:"Custom icon\u2026"}]}},default:V[0],helper:r},{name:`${M}_custom`,label:"Custom icon",when:L=>L[M]==="custom",selector:{icon:{}},helper:"Any Home Assistant icon, e.g. mdi:arrow-expand-down."}]}var I1=[["Screen fit & sizing",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"screen_fit",label:"Screen fit",selector:{select:{options:[{value:"none",label:"Off \u2014 panels are their set heights; the page scrolls"},{value:"rows",label:"Share the screen height \u2014 panels grow to fit their content"},{value:"strict",label:"Exact heights \u2014 content scrolls inside its panel"},{value:"scale",label:"Auto-fit \u2014 exact heights, and the contents scale to the screen"}]}},default:"rows",helper:"Share and Exact apply in Full screen. Auto-fit takes the layout and sizes you set as the design for the Screen guide's size (Layout Map \u2192 Screen guide) and scales each panel's contents to every other screen, smaller where they'd still overflow."},{name:"panel_fill",label:"Panels fill their space",selector:{boolean:{}},default:!1,helper:"Each panel with a set height scales its contents up or down to the largest size that fits the panel, between Smallest and Largest content scale. Text size, Icon size and the other size sliders then change the proportions, and the panel still fits. Each panel can turn it on or off (Size and Scaling \u2192 Fill the panel). The hero and Wind fit themselves; maps aren't scaled."},{name:"auto_fit_min",label:"Smallest content scale",when:M=>M.screen_fit==="scale"||!!M.panel_fill,selector:{number:{min:30,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:60,helper:"Below this a panel scrolls instead, so text stays readable."},{name:"auto_fit_max",label:"Largest content scale",when:M=>M.screen_fit==="scale"||!!M.panel_fill,selector:{number:{min:100,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:150,helper:"On screens bigger than the design."},{name:"panel_overflow",label:"When a panel's content doesn't fit",when:M=>!(M.layout==="fullscreen"&&["strict","scale"].includes(M.screen_fit)),selector:{select:{options:[{value:"grow",label:"Grow \u2014 the panel gets taller (and its row with it)"},{value:"scroll",label:"Scroll \u2014 the panel keeps its height, with a scroll bar inside"}]}},default:"grow",helper:"For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}]]],G1=[["Collapsed panels",[{name:"collapsed_view",label:"Default view when collapsed",selector:{select:{options:[{value:"minimal",label:"Minimal \u2014 the title and a line of info (e.g. 7 strikes today)"},{value:"compact",label:"Compact \u2014 one row of tiles with all the data"}]}},default:"minimal",helper:"For panels with Collapse button on; panels without a tiles view use Minimal. Each panel can override it \u2014 Convert all now clears those overrides."},{name:"collapsed_open",label:"A folded panel opens",selector:{select:{options:[{value:"auto",label:"Automatic \u2014 over the other panels in full screen or Auto-fit, else in place"},{value:"inplace",label:"In place \u2014 the panel grows, the others move"},{value:"overlay",label:"Over the other panels \u2014 nothing moves; tap outside or Esc to close"},{value:"popup",label:"As a pop-up"}]}},default:"auto",helper:"Each panel can override this (Collapse \u2192 Opens)."},...a3("open_icon_small","Small pop-over icon",q5,"On a folded panel that opens over the others."),...a3("open_icon_full","Full-size icon",j5,"Expand to the whole card, tap-to-open tiles and panels that open as a pop-up."),{name:"collapse_title_tap",label:"Tap the title to fold / unfold",selector:{boolean:{}},default:!0,helper:"For panels with Collapse button on (each panel can override this)."},{name:"show_collapse_hint",label:"Hint under the title while folded",selector:{boolean:{}},default:!1,helper:'e.g. "Tap title to show" (off by default: the open button already says it).'},{name:"collapse_hint",label:"Hint text",when:M=>!!M.show_collapse_hint,selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while folded",selector:{select:{options:[{value:"summary",label:"The panel's summary (e.g. strikes today, rain today)"},{value:"off",label:"None"}]}},default:"summary"},...p5]]],u1=[{name:"remember",selector:{boolean:{}},default:!0,helper:"Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)."}],q0=[...z1,...[...Z1,...f1,...I1,...G1].flatMap(([,M])=>M)],J={layout:"auto",panel_bar:!0,remember:!0,screen_fit:"rows",layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},N1={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember Panel Button States",station_device:"Weather station device",layout_size:"Layout size",fit_strict:"Strict fit to screen dimensions",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},n3=(M,C)=>C.split(".").reduce((V,r)=>V==null?V:V[r],M);function K0(M,C,V){let r=C.split("."),L=M;r.slice(0,-1).forEach(A=>L=L[A]=L[A]&&typeof L[A]=="object"?{...L[A]}:{});let i=r[r.length-1];V===void 0||V===""||V===null||Array.isArray(V)&&!V.length?delete L[i]:L[i]=V}function W1(M,C,V={}){let r={};for(let L of C){let i=n3(M,L.name);r[L.name]=i!==void 0?i:V[L.name]!==void 0?V[L.name]:L.default}return r}function A2(M,C,V,r={}){let L=r1(M);for(let i of C){let A=V[i.name],p=r[i.name]!==void 0?r[i.name]:i.default;p!==void 0&&JSON.stringify(A)===JSON.stringify(p)&&(A=void 0),K0(L,i.name,A)}return q(L)}var A3={air_quality:[["Tablet compact",{layout:"tiles",show_scale:!1,show_location:!1,show_source:!1,content_scale:85,content_width:70,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{layout:"scale",show_scale:null,show_location:null,show_source:null,content_scale:null,content_width:null,content_height:null,compact:null}]],pollen:[["Tablet compact",{hide_when_off_season:!0,hide_when_none:!0,show_season:!1,show_source:!1,show_location:!1,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{show_season:null,show_source:null,show_location:null,content_height:null,compact:null}]],rain:[["Essentials",{show_rows:["rain_rate","rain_today","rain_24h","rain_event"],show_normal:!1,compact:null}],["Everything",{show_rows:["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],show_normal:null,compact:null}],["Tiles row",{compact:!0}]],garden:[["Frost only",{show_soil:!1,show_water:!1,show_gdd:!1}],["Everything",{show_outlook:null,show_season:null,show_gdd:null,show_soil:null,show_water:null}]],records:[["Area only",{show_station:!1}],["Today only",{show_month:!1,show_all_time:!1}],["Everything",{show_station:null,show_today:null,show_month:null,show_all_time:null}]],lightning:[["Quiet",{hide_when_zero:!0,show_battery:!1,show_note:!1}],["Everything",{hide_when_zero:null,show_battery:null,show_note:null}]],wind:[["Rose, chart on demand",{view:"rose",chart_mode:"popover"}],["Compass and chart",{view:"compass",chart_mode:null}]],radar:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],wind_map:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],frost_watch:[["Tiles row",{compact:!0}],["Full",{compact:null}]],vpd:[["Number only",{show_plant:!1,show_scale:!1,show_note:!1}],["Full",{show_plant:null,show_scale:null,show_note:null,show_advice:null}]]},Y0=M=>M.type==="metric"?W[M.metric]?.label||"Metric":(z(M)?.label||M.type).replace(/ \(.*\)$/,"");function v1(M,C,V={}){let r=n3(M,C.name);if(r===void 0)return!1;let L=V[C.name]!==void 0?V[C.name]:C.default;return L===void 0||JSON.stringify(r)!==JSON.stringify(L)}var l3=["span","rows","display","span_medium","span_narrow","rows_compact"];function X0(M,C){let V=M[C],r=M[C+1],L=p=>{let s={...p};for(let l of l3)delete s[l];return s},i=M.slice();if(r.type==="stack"&&r.direction==="vertical"){let p=I(V)+I(r);return i.splice(C,2,q({...r,span:Math.max(G(V),G(r)),rows:p||void 0,panels:[L(V),...r.panels||[]]})),i}let A=I(V)+I(r);return i.splice(C,2,q({type:"stack",direction:"vertical",span:Math.max(G(V),G(r)),rows:A||void 0,panels:[L(V),L(r)]})),i}function d3(M,C,V){let r={...M[V]};for(let i of l3)delete r[i];let L=M.slice();return L[C]={...L[C],panels:[...L[C].panels||[],r]},L.splice(V,1),L}function s3(M,C,V){let r=M[C],L=(r.panels||[]).slice(),[i]=L.splice(V,1),A=M.slice(),p=q({...i,span:G(r),rows:void 0});return L.length?A.splice(C,1,{...r,panels:L},p):A.splice(C,1,p),A}function J0(M){let C=z(M);return{span:C.span,rows:C.rows,display:"grid",in_bar:k1({...M,in_bar:void 0}),show_title:e2.has(M.type)?!!M.title:!0}}function n2(M){let C=z(M);return M.title?M.title:M.type==="metric"?W[M.metric]?.label||M.label||"Metric tile":M.type==="day"?["Today","Tomorrow"][Number(M.day_offset??1)]||`Day +${M.day_offset}`:C.label}var x1=class extends D{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(C){this._config=C,this._savedJson==null&&(this._savedJson=JSON.stringify(C)),$1(JSON.stringify(C)!==this._savedJson)}shouldUpdate(C){if(C.size===1&&C.has("hass")){let V=C.get("hass"),r=this.hass;if(V&&r&&V.entities===r.entities&&V.devices===r.devices&&V.areas===r.areas&&V.themes===r.themes&&V.locale===r.locale&&V.language===r.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>(this._open==="general"||this._open==="behavior")&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,$1(!1),i2(!1)}get _panels(){return c5(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(C){this._config=C,$1(JSON.stringify(C)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:C},bubbles:!0,composed:!0}))}_setPanels(C,V){let r={...this._withoutLegacyHero(),panels:C};for(let[L,i]of Object.entries(V||{}))i===void 0?delete r[L]:r[L]=i;this._emit(r)}_withoutLegacyHero(){let{hero:C,...V}=this._config;return C===!1?{...V,hero:C}:V}render(){return!this.hass||!this._config?u:o`
      <div class="ed">
        <div class="hdr"><span class="name">${l5}</span><span class="ver">v${d5}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${()=>t2({mode:"export",config:this._config,cardType:`custom:${V2}`})}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${()=>t2({mode:"import",cardType:`custom:${V2}`,onImport:C=>{this._flexEds.clear(),this._openPanel=null,this._emit(C),this.requestUpdate()}})}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${M2()} @change=${C=>{i2(C.target.checked),this.requestUpdate()}} />
          <ha-icon icon="mdi:play-circle-outline"></ha-icon><span>Live preview</span>
          <span class="live-hint">${M2()?"animations and maps running":"animations and maps paused while editing"}</span>
        </label>
        <div class="findbar">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input class="ftext find" type="search" placeholder="Find a setting (e.g. compact, blur, rain)" .value=${this._q||""} aria-label="Find a setting"
            @input=${C=>{this._q=C.target.value,this.requestUpdate()}} @keydown=${C=>C.key==="Escape"&&(this._q="",this.requestUpdate())} />
          <label class="onlychg" title="Show only the settings you've changed from their defaults"><input type="checkbox" .checked=${!!this._onlyChanged} @change=${C=>{this._onlyChanged=C.target.checked,this.requestUpdate()}} />Only changed</label>
        </div>
        ${this._q&&this._q.trim().length>=2?this._searchResults(this._q.trim()):u}
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("background","mdi:image-filter-hdr","Background",()=>this._general(Z1),(this._config.background||"none")==="animated"?this._bgPreviewButton():u)}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general(f1))}
        ${this._section("behavior","mdi:fit-to-screen-outline","Screen fit & layout",()=>this._general(I1))}
        ${this._section("buttons","mdi:gesture-tap-button","Panel behavior",()=>o`<div class="agrp"><div class="agrp-t">Panel buttons</div>${this._buttonsEditor()}</div>${this._general(G1)}${this._convertBar()}`)}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout Map",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_searchIndex(){let C=[],V=L=>L.label||N1[L.name]||L.name.replace(/[._]/g," ");for(let[L,i,A]of[["station","Weather station",[["Current condition",z1]]],["background","Background",Z1],["general","Appearance",f1],["behavior","Screen fit & layout",I1],["buttons","Panel behavior",G1]])for(let[p,s]of A)for(let l of s)C.push({label:V(l),help:l.helper||"",where:`${i} \u203A ${p}`,go:{open:L},f:l});for(let L of u1)C.push({label:V(L),help:L.helper||"",where:"Panel behavior \u203A Panel buttons",go:{open:"buttons"},f:L});let r=(L,i,A)=>{let p=z(L);if(!p)return;let s=L.title||Y0(L),l=(A?y1:_1).map(d=>({f:d,sec:d.section||"Size and Scaling"})),c=p.groups?p.groups.flatMap(([d,Z],g)=>Z.map(b=>({f:b,sec:`${p.label} options`,sub:g?d:null}))):(p.schema||[]).map(d=>({f:d,sec:d.section||(["content_width","content_height"].includes(d.name)?"Size and Scaling":`${p.label} options`)}));for(let{f:d,sec:Z,sub:g}of[...l,...c])C.push({label:V(d),help:d.helper||"",where:`Panels \u203A ${s} \u203A ${Z}${g?` \u203A ${g}`:""}`,go:{open:"panels",panel:i,type:L.type,sec:Z,sub:g},f:d})};return this._panels.forEach((L,i)=>{r(L,`${i}`,!1),L.type==="stack"&&(L.panels||[]).forEach((A,p)=>A&&r(A,`${i}.${p}`,!0))}),C}_searchResults(C){let V=C.toLowerCase().split(/\s+/).filter(Boolean),r=this._searchIndex().filter(L=>{let i=`${L.label} ${L.help} ${L.where} ${L.f.name}`.toLowerCase();return V.every(A=>i.includes(A))});return r.sort((L,i)=>(i.label.toLowerCase().includes(V[0])?1:0)-(L.label.toLowerCase().includes(V[0])?1:0)),o`<div class="finds" role="listbox" aria-label="Matching settings">
      ${r.length?r.slice(0,40).map(L=>o`<button class="find-hit" role="option" @click=${()=>this._goTo(L)}><b>${L.label}</b><span>${L.where}</span></button>`):o`<div class="fhelp">No setting matches "${C}".</div>`}
      ${r.length>40?o`<div class="fhelp">${r.length-40} more — type more of the name.</div>`:u}
    </div>`}async _goTo(C){let V=C.go;if(this._q="",this._open=V.open,V.panel!=null){this._openPanel=V.panel,this._flatOpen||(this._flatOpen=new Map);for(let L of this._flatOpen.keys())L.startsWith(`${V.type}|`)&&this._flatOpen.set(L,!1);this._flatOpen.set(`${V.type}|${V.sec}`,!0),V.sub&&(this._subOpen||(this._subOpen=new Set),this._subOpen.add(`${V.type}:${V.sub}`))}this.requestUpdate(),await this.updateComplete,await new Promise(L=>requestAnimationFrame(L));let r=[...this.renderRoot.querySelectorAll(".fld, .frow, .fchk, label")].find(L=>L.textContent.trim().startsWith(C.label));r&&(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add("flash"),setTimeout(()=>r.classList.remove("flash"),1600))}_section(C,V,r,L,i=u){let A=this._open===C;return o`<details class="panel" ?open=${A} @toggle=${p=>{p.target.open?this._open=C:this._open===C&&(this._open=null)}}>
      <summary><ha-icon icon=${V}></ha-icon><span>${r}</span>${i}</summary>
      ${A?o`<div class="body">${L()}</div>`:u}
    </details>`}_form(C,V,r,L){return F5({data:C,schema:V,onChange:r,whenData:L,label:i=>i.label||N1[i.name]||i.name,helper:i=>i.helper,haForm:(i,A,p)=>this._haForm(i,A,p),auto:i=>this._autoText(i)})}_autoText(C){let V={panel_radius:"radius",row_height:"row",gap:"gap"}[C.name];if(!V)return null;let{preview:r,dashboard:L}=D5(),i=r?.[V],A=L?.[V],p=V==="radius"?" (from the theme's card corner radius)":V==="row"&&this._config.layout==="fullscreen"&&C1(this._config)!=="none"?" (calculated to fit the screen)":"";return i&&A&&i!==A?`${i} in this preview, ${A} on the dashboard${p}`:i||A?`${i||A}${p}`:null}_haForm(C,V,r){return o`<ha-form
      .hass=${this.hass}
      .data=${C}
      .schema=${V}
      .computeLabel=${L=>L.label||N1[L.name]||L.name}
      .computeHelper=${L=>L.helper}
      @value-changed=${L=>{L.stopPropagation(),r(L.detail.value)}}
    ></ha-form>`}_convertBar(){let C=this._config.collapsed_view||"minimal",r=this._panels.flatMap(i=>[i,...i.type==="stack"?i.panels||[]:[]]).filter(i=>i.collapsed_view&&i.collapsed_view!=="default").length;return o`<div class="convert">
      <button class="btn sm" ?disabled=${!r} @click=${()=>{let i=A=>{if(!A)return A;let{collapsed_view:p,...s}=A;return s};this._flexEds.clear(),this._setPanels(this._panels.map(A=>A.type==="stack"?{...i(A),panels:(A.panels||[]).map(i)}:i(A)))}} title="Clears every panel's own View when collapsed">
        <ha-icon icon="mdi:swap-horizontal"></ha-icon>Convert all now</button>
      <span class="fhelp">${r?`${r===1?"1 panel sets its own view":`${r} panels set their own view`}; Convert all now makes every collapsible panel ${C==="compact"?"Compact":"Minimal"}.`:`Every collapsible panel follows the default (${C==="compact"?"Compact":"Minimal"}).`}</span>
    </div>`}_general(C=f1){let V={...this._config,screen_fit:C1(this._config)},r=W1(V,q0,J),L=this._config.background||"none";return C.map(([i,A])=>{let p=this._onlyChanged?A.filter(b=>v1(this._config,b,J)):A;if(!p.length||!p.some(b=>typeof b.when!="function"||b.when(r)))return u;let s=A.some(b=>v1(this._config,b,J)),l=C===Z1&&i==="Background"&&L==="animated"&&this._bgPrev?.open,c=b=>this._form(W1(V,b,J),b,k=>{let{panels:T,...B}=this._config,F=A2(B,b,k,J);b.some(w=>w.name==="screen_fit")&&(delete F.fit_height,delete F.fit_strict,delete F.auto_fit),this._config.panels&&(F.panels=this._config.panels),this._emit(F)},r),d=p.filter(b=>!b.sub),Z=[...new Set(p.filter(b=>b.sub).map(b=>b.sub))],g=b=>{let k=p.filter(w=>w.sub===b);if(!k.some(w=>typeof w.when!="function"||w.when(r)))return u;let T=`card:${b}`,B=(this._subOpen||(this._subOpen=new Set)).has(T),F=k.some(w=>v1(this._config,w,J));return o`<details class="sub psub" ?open=${B} @toggle=${w=>{w.target!==w.currentTarget||w.target.open===this._subOpen.has(T)||(w.target.open?this._subOpen.add(T):this._subOpen.delete(T),this.requestUpdate())}}><summary><ha-icon icon=${k[0].subIcon||"mdi:tune"}></ha-icon><span>${b}</span>${F?o`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${B?o`<div class="psub-body">${c(k)}</div>`:u}</details>`};return o`${l?this._bgPreview():u}<div class="agrp"><div class="agrp-t">${i}${s?o`<i class="chg" title="Has changed settings"></i>`:u}</div>${c(d)}${Z.map(g)}</div>`})}_bgPreviewButton(){let C=!!this._bgPrev?.open;return o`<button class="bgprev-btn ${C?"on":""}" type="button" aria-pressed=${String(C)}
      title=${C?"Hide the background preview":"Preview the background"} aria-label="Preview the background"
      @click=${V=>{V.preventDefault(),V.stopPropagation(),this._bgPrev={...this._bgPrev||{},open:!C},C||(this._open="background"),this.requestUpdate()}}><ha-icon icon="mdi:magnify"></ha-icon></button>`}_bgPreview(){let C=this._bgPrev||{},V=this.hass?.states?.[this._config.entity]?.state,r=(D1.find(([i])=>i===V)||[,V])[1],L=[{name:"condition",label:"Condition",selector:{select:{options:[{value:"",label:V?`Now \u2014 ${r}`:"Now"},...D1.map(([i,A])=>({value:i,label:A}))]}}},{name:"time",label:"Time of day",selector:{select:{options:[{value:"",label:"Day (night for Clear night)"},{value:"day",label:"Day"},{value:"night",label:"Night"}]}}}];return o`<div class="bgprev">
      <wsfc-bg-preview .hass=${this.hass} .config=${this._config} .condition=${C.condition||""} .time=${C.time||""}></wsfc-bg-preview>
      ${this._form({condition:C.condition||"",time:C.time||""},L,i=>{this._bgPrev={...C,open:!0,condition:i.condition||"",time:i.time||""},this.requestUpdate()})}
    </div>`}_stationDevice(){let C=(this._config.metric_sources?.sources||[]).find(V=>!V.disabled&&String(V.ref).startsWith("device:"));return C?C.ref.slice(7):void 0}_stationEditor(){let C=this._station,V=[...Q0,"rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id","aqi","pm2_5","pm10","ozone"].map(L=>{let i=W[L]?.find||W[L]?.aq?T1(L,C,this.hass):J5(C,this.hass,L)||(this.hass.states[C.entity]?.attributes?.[L]!=null?C.entity:null),A=i&&!i.startsWith("weather.")?R1(this.hass,i):null,p=i?.startsWith("weather.")?this.hass.states[i]?.attributes?.[L]:null;return{k:L,e:i,v:A?`${A.value} ${A.unit}`:p!=null?String(p):"",label:j0[L]||W[L]?.label||L.replace(/_/g," "),integ:i?M1(this.hass,i):""}}),r=V.filter(L=>L.e).length;return o`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${L=>{let i={...this._config};L.detail.entity&&(i.entity=L.detail.entity),L.detail.metric_sources?i.metric_sources=L.detail.metric_sources:delete i.metric_sources,this._emit(i)}}></wsfc-sources-editor>
      ${this._general([["Current condition",z1]])}
      ${this._config.condition_source==="station"?o`<p class="hint cond-now"><b>Now:</b> ${o3(this.hass,this._station,this._config)}</p>`:u}
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${r} of ${V.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${V.map(L=>o`<span class="k">${L.label}</span><span class="e ${L.e?"":"none"}" title=${L.e||""}>${L.e||"not found"}</span><span class="i">${L.integ}</span><span class="v">${L.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_flexEditor(C,V,r){let L=`${C}:${V.type}`,i=this._flexEds.get(L);i||(i=document.createElement(u5),i.wsfcMode="sections",i.wsfcType=V.type,i.addEventListener("wsfc-flat-open",d=>{for(let Z of[...(this._flatOpen||new Map).keys()])Z.startsWith(`${d.detail.type}|`)&&this._flatOpen.set(Z,!1);this.requestUpdate()}),i.addEventListener("config-changed",d=>{d.stopPropagation(),i._wsfcOnChange?.(d.detail.config)}),this._flexEds.set(L,i));let A=d=>d.type==="sky_tracker"?S5(d,this._station):x5(h5(d.type,this._station),d.flex||{});i.wsfcPanels=z(V)?.flexPanels||null;let p=this._config.background==="animated"||this._config.background==="image"&&!!(this._config.background_image||this._config.background_image_url),s=[...z(V)?.flexHide||[],...V.type==="hero"&&p?["show_condition_effects"]:[],...V.type==="hero"&&V.auto_scale?["header_temp_size","header_state_size","header_icon_size","header_secondary_size","clock_font_size","clock_date_font_size","chip_text_size","chip_icon_size","global_icon_size","global_text_size"]:[]];JSON.stringify(s)!==JSON.stringify(i.wsfcHide||[])&&(i.wsfcHide=s,i.requestUpdate?.()),i._wsfcOnChange=d=>{let Z=r1(V),g=Z5(d,A({...V,flex:void 0}));Object.keys(g).length?Z.flex=g:delete Z.flex,r(Z)};let l=A(V),c=JSON.stringify(l);return i._wsfcJson!==c&&(i._wsfcJson=c,i.setConfig(l)),i.hass=this.hass,o`<div class="flexed">${i}</div>`}_guideSpec(){let C=this._config,V=C.layout_screen;if(!V||(C.layout_guide||"line")==="off")return null;let[r,L]=V==="window"?[window.innerWidth,window.innerHeight]:String(V).split(/[x×]/).map(Number);if(!r||!L)return null;let i=C.gap??12,A=C.layout==="fullscreen",p=C.panel_bar!==!1&&!this._panels.some(l=>l.type==="heading"&&l.show_bar),s=56+(A?16:8)+2*i+(p?40+i:0)+(C.title?44+i:0);return{w:r,h:L,chrome:s,gap:i,row:C.row_height||110,fit:A&&C1(C)!=="none",strict:A&&["strict","scale"].includes(C1(C)),mode:C.layout_guide||"line"}}_screenGuide(){let C=this._config,V=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],r=C.layout_screen||"",L=r&&!V.some(([A])=>A===r),i=A=>{let p={...this._config,...A};for(let s of Object.keys(A))(A[s]==null||A[s]==="")&&delete p[s];this._emit(p)};return o`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${A=>i({layout_screen:A.target.value==="custom"?"1600x900":A.target.value||void 0})}>
          ${V.map(([A,p])=>o`<option value=${A} ?selected=${A===r}>${p}</option>`)}
          <option value="custom" ?selected=${L}>Custom size…</option>
        </select><button class="btn sm ghost" title="Set the Screen guide to this device's browser window (open the editor on the tablet and press this)" @click=${()=>i({layout_screen:`${window.innerWidth}x${window.innerHeight}`})}><ha-icon icon="mdi:tablet"></ha-icon>This device</button></div>
      ${L?o`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${r} placeholder="1600x900" @change=${A=>i({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(A.target.value.trim())?A.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):r})} /></div>`:u}
      ${r?o`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${A=>i({layout_guide:A.target.value==="line"?void 0:A.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([A,p])=>o`<option value=${A} ?selected=${(C.layout_guide||"line")===A}>${p}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${C.layout==="fullscreen"&&C1(C)!=="none"?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:u}
    </div>`}_layoutEditor(){let C=this._config,V=this._mapFor==="phone",r=Array.isArray(C.phone_layout)?C.phone_layout:null,L=s=>{let l={...this._config};s&&s.length?l.phone_layout=s:delete l.phone_layout,this._emit(l)},i=this._panels.map((s,l)=>({p:s,i:l})).filter(({p:s})=>s.display!=="popup"),A=()=>{let s=new Map((r||[]).map((l,c)=>[Number(l.i),l]));return i.map(({p:l,i:c})=>({...l,__i:c,span:s.get(c)?.span??12,rows:s.get(c)?.rows??l.rows??0,show:s.has(c)?s.get(c).show!==!1:l.show})).sort((l,c)=>((r||[]).findIndex(d=>Number(d.i)===l.__i)+1||1e3+l.__i)-((r||[]).findIndex(d=>Number(d.i)===c.__i)+1||1e3+c.__i))},p=s=>s.filter(l=>l.__i!=null).map(l=>({i:l.__i,span:G(l),...I(l)?{rows:I(l)}:{},...l.show===!1?{show:!1}:{}}));return o`
      <div class="frow"><label for="lm-for">Layout for</label>
        <select id="lm-for" class="sel" @change=${s=>{this._mapFor=s.target.value,this.requestUpdate()}}>
          <option value="main" ?selected=${!V}>Main layout (tablets and larger)</option>
          <option value="phone" ?selected=${V}>Phone layout (narrow screens)${r?"":" \u2014 not set"}</option>
        </select></div>
      ${V?o`<p class="hint">On screens narrower than ${C.narrow_width||720} px the card uses this layout: its own order, widths and heights for the same panels. Without one, panels stack full width automatically.</p>
            <div class="presets">${r?o`<button class="btn sm ghost" @click=${()=>L(null)}><ha-icon icon="mdi:delete-outline"></ha-icon>Remove the phone layout</button>`:o`<button class="btn sm" @click=${()=>L(i.map(({p:s,i:l})=>({i:l,span:12,...s.rows?{rows:s.rows}:{}})))}><ha-icon icon="mdi:cellphone"></ha-icon>Create a phone layout</button>`}</div>
            ${r?o`<wsfc-layout-map .panels=${A()} @layout-changed=${s=>L(p(s.detail.panels))}></wsfc-layout-map>`:u}`:o`<p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the main layout${r?"; phones use the Phone layout":" \u2014 phones stack the panels automatically (or set a Phone layout above)"}. Dashed = hidden on load.</p>
            ${this._screenGuide()}
            ${this._guideSpec()?o`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
              @probe-measured=${s=>{this._measured=s.detail,this.requestUpdate()}}></wsfc-layout-probe>`:u}
            <wsfc-layout-map .panels=${this._panels} .guide=${this._guideSpec()} .measured=${this._guideSpec()?this._measured:null} @layout-changed=${s=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(s.detail.panels)}}></wsfc-layout-map>`}
    `}_panelList(){return o`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(C,V)=>this._setPanels(C,V),"")}
    `}_buttonsEditor(){let C=this._config,V=this._panels,r=V.findIndex(c=>c.type==="heading"),L=r>=0&&!!V[r].show_bar,i=C.panel_bar===!1?"hidden":L?"heading":"top",A=c=>{let d=V.map((Z,g)=>g===r?q({...Z,show_bar:c==="heading"?!0:void 0}):Z);c==="heading"&&r<0&&d.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(d,{panel_bar:c==="hidden"?!1:void 0})},p=(c,d)=>{let Z=b=>q({...b,in_bar:d===k1({...b,in_bar:void 0})?void 0:d}),g=V.map((b,k)=>{let T=c.includes(`${k}`)?Z(b):b;if(T.type==="stack"&&Array.isArray(T.panels)){let B=T.panels.map((F,w)=>F&&c.includes(`${k}.${w}`)?Z(F):F);B.some((F,w)=>F!==T.panels[w])&&(T={...T,panels:B})}return T});this._setPanels(g)},s=[];V.forEach((c,d)=>{s.push([c,`${d}`,!1]),c.type==="stack"&&(c.panels||[]).forEach((Z,g)=>Z&&s.push([Z,`${d}.${g}`,!0]))});let l=s.map(([,c])=>c);return o`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${c=>A(c.target.value)}>
          <option value="top" ?selected=${i==="top"}>Above the panels</option>
          <option value="heading" ?selected=${i==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${i==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(W1(C,u1,J),u1,c=>{let{panels:d,...Z}=this._config,g=A2(Z,u1,c,J);this._config.panels&&(g.panels=this._config.panels),this._emit(g)})}
      <div class="btnbar">
        <button class="btn sm" @click=${()=>p(l,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>p(l,!1)}>None</button>
      </div>
      <div class="checks">
        ${s.map(([c,d,Z])=>o`<label class="chk ${Z?"nested":""}">
          <input type="checkbox" .checked=${k1(c)} @change=${g=>p([d],g.target.checked)} />
          <ha-icon icon=${c.icon||c.type==="metric"&&W[c.metric]?.icon||z(c).icon}></ha-icon>
          <span>${n2(c)}</span>${c.display==="popup"?o`<span class="tag">pop-up</span>`:c.show===!1?o`<span class="tag">hidden on load</span>`:u}
        </label>`)}
      </div>
    `}_list(C,V,r){let L=!!r,i=Object.entries(L2).filter(([s])=>!(L&&s==="hero")).sort(([s,l],[c,d])=>s==="hero"?-1:c==="hero"?1:l.label.localeCompare(d.label)),A=r||"top",p=(this._addTypes||(this._addTypes={}))[A]||(L?"metric":this._addType);return o`
      <div class="rows">${C.map((s,l)=>this._panelRow(s,l,C,V,r?`${r}.${l}`:`${l}`,L))}</div>
      <div class="add">
        <select class="sel" @change=${s=>{this._addTypes[A]=s.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${i.map(([s,l])=>o`<option value=${s} ?selected=${s===p}>${l.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let s={type:p};s.type==="metric"&&(s.metric="temperature"),s.type==="stack"&&(s.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),V([...C,s]),this._openPanel=r?`${r}.${C.length}`:`${C.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${L?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(C,V,r,L,i,A){let p=z(C),s=this._openPanel===i||C.type!=="stack"&&String(this._openPanel||"").startsWith(`${i}.`),l=C.show===!1,c=()=>this._flexEds.clear(),d=k=>{let T=r.slice(),B=V+k;B<0||B>=T.length||([T[V],T[B]]=[T[B],T[V]],c(),this._openPanel=null,L(T))},Z=(k,T)=>{let B=r.slice();B[V]=k,L(B,T)},g=A?`${C.grow!=null?`grow ${C.grow}`:""}${C.rows?` \xB7 ${C.rows} rows`:""}`:`${G(C)}/12${I(C)?` \xD7 ${I(C)}`:""}${C.display==="popup"?" \xB7 pop-up":""}`,b=C.type==="stack"?`${C.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(C.panels||[]).length} panels`:p.label;return o`<div class="row ${s?"open":""} ${l?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${C.icon||C.type==="metric"&&W[C.metric]?.icon||(C.type==="stack"&&C.direction==="vertical"?"mdi:view-agenda-outline":p.icon)}></ha-icon>
        <div class="txt"><div class="n">${n2(C)}</div><div class="s">${b}${g?` \xB7 ${g}`:""}</div></div>
        ${A?o`<button class="ib" title="Move up" ?disabled=${V===0} @click=${()=>d(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${V===r.length-1} @click=${()=>d(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:u}
        ${A?u:o`<button class="ib" title=${l?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>Z(q({...C,show:l?void 0:!1}))}>
              <ha-icon icon=${l?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${A&&/^\d+\.\d+$/.test(i)?o`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{c(),this._openPanel=null,this._setPanels(s3(this._panels,Number(i.split(".")[0]),V))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:u}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===i?null:i}><ha-icon icon=${s?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let k=r.slice();k.splice(V+1,0,r1(C)),c(),L(k)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let k=r.slice();k.splice(V,1),c(),this._openPanel=null,L(k)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${s?this._panelBody(C,i,Z,A):u}
      ${C.type==="stack"?this._stackKids(C,V,i,Z,A):u}
    </div>`}_stackKids(C,V,r,L,i){let p=!i?this._panels.map((l,c)=>[l,c]).filter(([l,c])=>c!==V&&l.type!=="hero"&&l.type!=="stack"):[],s=(this._moveIn||(this._moveIn={}))[r]??p[0]?.[1]??"";return o`<div class="kids">
      ${this._list(C.panels||[],(l,c)=>L({...C,panels:l},c),r)}
      ${p.length?o`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${l=>{this._moveIn[r]=Number(l.target.value),this.requestUpdate()}}>
              ${p.map(([l,c])=>o`<option value=${c} ?selected=${c===s}>${n2(l)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(d3(this._panels,V,Number(s)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:u}
    </div>`}_flat(C,V,r,L=!1){let i=`${C.type}|${V}`;this._flatOpen||(this._flatOpen=new Map);let A=!!this._flatOpen.get(i);return o`<details class="flat" ?open=${A} @toggle=${p=>{if(!(p.target!==p.currentTarget||p.target.open===!!this._flatOpen.get(i))){if(p.target.open){for(let s of this._flatOpen.keys())s.startsWith(`${C.type}|`)&&this._flatOpen.set(s,!1);for(let[s,l]of this._flexEds||[])s.endsWith(`:${C.type}`)&&l.renderRoot?.querySelectorAll?.("details.wsfc-panel[open]").forEach(c=>c.open=!1)}this._flatOpen.set(i,p.target.open),this.requestUpdate()}}}>
      <summary>${V}${L?o`<i class="chg" title="Has changed settings"></i>`:u}</summary>
      <div class="flat-body">${r}</div>
    </details>`}_sections(C,V,r,L,i,A=!0,p=null){let s=[];for(let d of V){let Z=d.sub?`sub:${d.sub}`:d.section?`sec:${d.section}`:`sec:${i}`,g=s.find(b=>b.k===Z);g||s.push(g={k:Z,f:[]}),g.f.push(d)}let l=d=>this._form(W1(C,d,r),d,Z=>L({...A2(C,d,Z,r),type:C.type}),C),c=this._onlyChanged;return s.map(({k:d,f:Z})=>{let g=c?Z.filter(T=>v1(C,T,r)):Z;if(!g.length)return u;let b=Z.some(T=>v1(C,T,r)),k=d.slice(4);if(d.startsWith("sub:")){let T=`${C.type}:${k}`,B=(this._subOpen||(this._subOpen=new Set)).has(T);return o`<details class="sub psub" ?open=${B} @toggle=${F=>{if(!(F.target!==F.currentTarget||F.target.open===this._subOpen.has(T))){if(F.target.open){for(let w of[...this._subOpen])w.startsWith(`${C.type}:`)&&this._subOpen.delete(w);this._subOpen.add(T)}else this._subOpen.delete(T);this.requestUpdate()}}}>
          <summary><ha-icon icon=${g[0]?.subIcon||"mdi:weather-sunset"}></ha-icon><span>${k}</span>${b?o`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${B?o`<div class="psub-body">${l(g)}</div>`:u}
        </details>`}return A?this._flat(C,k,l(g),b):o`<div class="grp">${k}${b?o`<i class="chg" title="Has changed settings"></i>`:u}</div>${l(g)}`})}_panelBody(C,V,r,L){let i=z(C),A=(w,E)=>(w?.overflow==="scroll"&&!L&&!(Number(w.rows??i?.rows??0)>=1)&&(w={...w,rows:1}),r(w,E)),p=["content_width","content_height",...["daily","hourly","forecast","sky_tracker"].includes(C.type)?["text_scale","icon_scale","chart_scale","bar_scale","arc_scale"]:[]],s=(i.schema||[]).filter(w=>p.includes(w.name)).map(w=>({...w,section:"Size and Scaling"})),l=s.length?{...i,schema:i.schema.filter(w=>!p.includes(w.name))}:i,c=L?{show_title:e2.has(C.type)?!!C.title:!0}:J0(C),d=L?y1:_1;C.type==="hero"&&(d=d.filter(w=>!["icon","display","in_bar"].includes(w.name))),U5(C.type)||(d=d.filter(w=>w.section!=="Collapse"));let Z=this._config,g=Z.layout==="fullscreen"&&["strict","scale"].includes(C1(Z)),b={collapsed_view:()=>Z.collapsed_view==="compact"?"Compact":"Minimal",collapsed_open:()=>({inplace:"In place",overlay:"Over the other panels",popup:"As a pop-up"})[Z.collapsed_open]||(Z.layout==="fullscreen"||C1(Z)==="scale"?"Automatic: over the other panels":"Automatic: in place"),collapse_title_tap:()=>Z.collapse_title_tap===!1?"Off":"On",show_collapse_hint:()=>Z.show_collapse_hint?"Show":"Hide",collapsed_info:()=>Z.collapsed_info==="off"?"None":"The panel's summary",overflow:()=>g||Z.panel_overflow==="scroll"?"Scroll":"Grow"};d=d.map(w=>{let E=w.selector?.select?.options;return!b[w.name]||!E?.some(N=>N.value==="default")?w:{...w,selector:{select:{...w.selector.select,options:E.map(N=>N.value==="default"?{...N,label:`Card default \u2014 ${b[w.name]()}`}:N)}}}}),Y5.has(C.type)||(d=d.filter(w=>!["collapsed_view","compact_expand","compact_title","compact"].includes(w.name))),m5.has(C.type)&&(d=d.filter(w=>!["show_title","title","show_icon","icon"].includes(w.name)||C.type!=="clock"&&w.name==="title"));let k=["graph","temp_humidity","uv_solar","statistics"].includes(C.type),T=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...C.type==="metric"?["metric"]:[],...C.type==="statistics"?["preset"]:[],...C.type==="stack"?["panels","direction"]:[]],B=Object.keys(C).some(w=>!T.includes(w)),F=()=>A(Object.fromEntries(Object.entries(C).filter(([w])=>T.includes(w))));return o`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!B} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),F()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${A3[C.type]&&!L?o`<div class="presets"><span class="fhelp">Presets</span>${A3[C.type].map(([w,E])=>o`<button class="btn sm ghost" @click=${()=>{let N={...C};for(let[x,H1]of Object.entries(E))H1===null?delete N[x]:N[x]=H1;this._flexEds.clear(),A(N)}}>${w}</button>`)}</div>`:u}
      ${k?o`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${C} .station=${this._station} @panel-changed=${w=>A(w.detail.panel)}></wsfc-series-editor>`:u}
      ${this._sections(C,s.length?(()=>{let w=d.findIndex(N=>N.name==="content_scale"),E=d.slice();return E.splice(w<0?E.length:w+1,0,...s),E})():d,c,A,"Size and Scaling")}
      ${l.groups?this._flat(C,`${l.label} options`,l.groups.map(([w,E,N],x)=>this._sections(C,x===0?E:E.map(H1=>({...H1,sub:w,subIcon:N})),{},A,w,!1))):l.schema.length?this._sections(C,l.schema,{},A,`${l.label} options`,!0,`${l.label} options`):u}
      ${l.flex?o`${C.type==="sky_tracker"?o`<div class="grp">Arc & sky details</div>`:u}
            ${C.type==="sky_tracker"?o`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:u}
            ${this._flexEditor(V,C,A)}`:u}
    </div>`}};$(x1,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),$(x1,"styles",[P5,R`
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
    .bgprev-btn { margin-left: auto; border: 0; background: transparent; cursor: pointer; padding: 4px; border-radius: 50%; line-height: 0; color: var(--secondary-text-color); }
    .bgprev-btn ha-icon { --mdc-icon-size: 20px; }
    .bgprev-btn:hover { background: rgba(127, 127, 127, 0.18); }
    .bgprev-btn.on { color: var(--ltek-c-accent); background: color-mix(in srgb, var(--ltek-c-accent) 15%, transparent); }
    .bgprev-btn:focus-visible { outline: 2px solid var(--ltek-c-accent); outline-offset: 2px; }
    .bgprev { margin: 0 0 var(--ltek-sp-4, 16px); display: grid; gap: var(--ltek-sp-2, 8px); }
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
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",x1);globalThis.__wsfcEditorHelpers={stackWithNext:X0,unstack:s3,moveIntoStack:d3};globalThis.__wsfcSchemas={STATION_FIELDS:z1,BACKGROUND_GROUPS:Z1,APPEARANCE_GROUPS:f1,LAYOUT_GROUPS:I1,PANEL_GROUPS:G1,GENERAL_DEFAULTS:J,REMEMBER:u1,LABELS:N1,PANEL_TYPES:L2,COMMON_SCHEMA:_1,STACK_CHILD_SCHEMA:y1};export{d3 as moveIntoStack,X0 as stackWithNext,s3 as unstack};
/*! Bundled license information:

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
*/
