/* weather-station-flex-card 2026.10.31.98 editor — https://github.com/Ltek/weather-station-flex-card */
var _2=Object.defineProperty;var B3=Object.getOwnPropertyDescriptor;var $3=(M,C,H)=>C in M?_2(M,C,{enumerable:!0,configurable:!0,writable:!0,value:H}):M[C]=H;var y1=(M,C,H,r)=>{for(var L=r>1?void 0:r?B3(C,H):C,o=M.length-1,n;o>=0;o--)(n=M[o])&&(L=(r?n(C,H,L):n(L))||L);return r&&L&&_2(C,H,L),L};var R=(M,C,H)=>$3(M,typeof C!="symbol"?C+"":C,H);var O2=globalThis.__wsfcHost?.lit;if(!O2)throw new Error("wsfc-editor.js: the card did not provide lit; update every file of the card together");var{CSSResult:i7,LitElement:N,ReactiveElement:a7,_$LE:n7,_$LH:A7,adoptStyles:l7,css:D,defaultConverter:d7,getCompatibleStyle:s7,html:i,isServer:p7,mathml:m7,noChange:c7,notEqual:v7,nothing:u,render:u7,supportsAdoptingStyleSheets:x7,svg:Z7,unsafeCSS:f7}=O2;var y2,k2;(function(M){M.language="language",M.system="system",M.comma_decimal="comma_decimal",M.decimal_comma="decimal_comma",M.space_comma="space_comma",M.none="none"})(y2||(y2={})),(function(M){M.language="language",M.system="system",M.am_pm="12",M.twenty_four="24"})(k2||(k2={}));var U=function(M,C,H,r){r=r||{},H=H??{};var L=new Event(C,{bubbles:r.bubbles===void 0||r.bubbles,cancelable:!!r.cancelable,composed:r.composed===void 0||r.composed});return L.detail=H,M.dispatchEvent(L),L};var T2=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/weather-forecast-card.ts"];if(!T2)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/weather-forecast-card.ts; update every file of the card together");var{WeatherForecastCard:V2}=T2;var F2=globalThis.__wsfcHost?.["lit/decorators"];if(!F2)throw new Error("wsfc-editor.js: the card did not provide lit/decorators; update every file of the card together");var{customElement:P2,eventOptions:w7,property:B2,query:b7,queryAll:_7,queryAssignedElements:O7,queryAssignedNodes:y7,queryAsync:k7,standardProperty:T7,state:$2}=F2;var R2="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var E2="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var D2=Number.isNaN||function(C){return typeof C=="number"&&C!==C};function R3(M,C){return!!(M===C||D2(M)&&D2(C))}function E3(M,C){if(M.length!==C.length)return!1;for(var H=0;H<M.length;H++)if(!R3(M[H],C[H]))return!1;return!0}function W2(M,C){C===void 0&&(C=E3);var H=null;function r(){for(var L=[],o=0;o<arguments.length;o++)L[o]=arguments[o];if(H&&H.lastThis===this&&C(L,H.lastArgs))return H.lastResult;var n=M.apply(this,L);return H={lastResult:n,lastArgs:L,lastThis:this},n}return r.clear=function(){H=null},r}var D3=typeof global=="object"&&global&&global.Object===Object&&global,N2=D3;var W3=typeof self=="object"&&self&&self.Object===Object&&self,N3=N2||W3||Function("return this")(),z2=N3;var z3=z2.Symbol,X=z3;var I2=Object.prototype,I3=I2.hasOwnProperty,G3=I2.toString,v1=X?X.toStringTag:void 0;function U3(M){var C=I3.call(M,v1),H=M[v1];try{M[v1]=void 0;var r=!0}catch{}var L=G3.call(M);return r&&(C?M[v1]=H:delete M[v1]),L}var G2=U3;var Q3=Object.prototype,j3=Q3.toString;function q3(M){return j3.call(M)}var U2=q3;var K3="[object Null]",Y3="[object Undefined]",Q2=X?X.toStringTag:void 0;function X3(M){return M==null?M===void 0?Y3:K3:Q2&&Q2 in Object(M)?G2(M):U2(M)}var j2=X3;function J3(M){return M!=null&&typeof M=="object"}var q2=J3;var C0="[object Symbol]";function H0(M){return typeof M=="symbol"||q2(M)&&j2(M)==C0}var K2=H0;function V0(M,C){for(var H=-1,r=M==null?0:M.length,L=Array(r);++H<r;)L[H]=C(M[H],H,M);return L}var Y2=V0;var L0=Array.isArray,X2=L0;var e0=1/0,J2=X?X.prototype:void 0,C5=J2?J2.toString:void 0;function H5(M){if(typeof M=="string")return M;if(X2(M))return Y2(M,H5)+"";if(K2(M))return C5?C5.call(M):"";var C=M+"";return C=="0"&&1/M==-e0?"-0":C}var V5=H5;function r0(M){return M==null?"":V5(M)}var k1=r0;function t0(M,C,H){var r=-1,L=M.length;C<0&&(C=-C>L?0:L+C),H=H>L?L:H,H<0&&(H+=L),L=C>H?0:H-C>>>0,C>>>=0;for(var o=Array(L);++r<L;)o[r]=M[r+C];return o}var L5=t0;function M0(M,C,H){var r=M.length;return H=H===void 0?r:H,!C&&H>=r?M:L5(M,C,H)}var e5=M0;var o0="\\ud800-\\udfff",i0="\\u0300-\\u036f",a0="\\ufe20-\\ufe2f",n0="\\u20d0-\\u20ff",A0=i0+a0+n0,l0="\\ufe0e\\ufe0f",d0="\\u200d",s0=RegExp("["+d0+o0+A0+l0+"]");function p0(M){return s0.test(M)}var T1=p0;function m0(M){return M.split("")}var r5=m0;var t5="\\ud800-\\udfff",c0="\\u0300-\\u036f",v0="\\ufe20-\\ufe2f",u0="\\u20d0-\\u20ff",x0=c0+v0+u0,Z0="\\ufe0e\\ufe0f",f0="["+t5+"]",L2="["+x0+"]",e2="\\ud83c[\\udffb-\\udfff]",h0="(?:"+L2+"|"+e2+")",M5="[^"+t5+"]",o5="(?:\\ud83c[\\udde6-\\uddff]){2}",i5="[\\ud800-\\udbff][\\udc00-\\udfff]",S0="\\u200d",a5=h0+"?",n5="["+Z0+"]?",g0="(?:"+S0+"(?:"+[M5,o5,i5].join("|")+")"+n5+a5+")*",w0=n5+a5+g0,b0="(?:"+[M5+L2+"?",L2,o5,i5,f0].join("|")+")",_0=RegExp(e2+"(?="+e2+")|"+b0+w0,"g");function O0(M){return M.match(_0)||[]}var A5=O0;function y0(M){return T1(M)?A5(M):r5(M)}var l5=y0;function k0(M){return function(C){C=k1(C);var H=T1(C)?l5(C):void 0,r=H?H[0]:C.charAt(0),L=H?e5(H,1).join(""):C.slice(1);return r[M]()+L}}var d5=k0;var T0=d5("toUpperCase"),s5=T0;function F0(M){return s5(k1(M).toLowerCase())}var J=F0;var p5=globalThis.__wsfcHost?.["vendor/weather-forecast-card/src/types.ts"];if(!p5)throw new Error("wsfc-editor.js: the card did not provide vendor/weather-forecast-card/src/types.ts; update every file of the card together");var{CHART_ATTRIBUTES:m5,CURRENT_WEATHER_ATTRIBUTES:K,DEFAULT_CHART_ATTRIBUTE:O4,ForecastMode:y4,MAX_TEMPERATURE_PRECISION:r2,WEATHER_EFFECTS:F1}=p5;var P0={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},j=class extends N{constructor(){super(...arguments);this._schema=W2((H,r,L)=>[...this._genericSchema(H),...this._currentWeatherSchema(H),...this._forecastSchema(H),...this._interactionsSchema(L),...this._attributeEntitiesSchema(r),...this._advancedSchema()]);this._genericSchema=H=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:H("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:H("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:H("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:F1.map(r=>({value:r,label:J(r)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=H=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:K.map(r=>({value:r,label:H(`ui.card.weather.attributes.${r}`)||J(r).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:K.map(r=>({value:r,label:H(`ui.card.weather.attributes.${r}`)||J(r).replace(/_/g," ")}))}}}];this._forecastSchema=H=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:m5.map(r=>({value:r,label:r==="temperature_and_precipitation"?`${H("ui.card.weather.attributes.temperature")||"Temperature"}, ${H("ui.card.weather.attributes.precipitation")||"Precipitation"}`:H(`ui.card.weather.attributes.${r}`)||J(r).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:H("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:H("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:H("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:H("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:H("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=H=>{let r=[],L=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return H==="chart"?(r.push("double_tap_action"),L.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):r.push("hold_action","double_tap_action"),L.push({name:"",type:"optional_actions",flatten:!0,schema:r.map(o=>({name:`forecast_action.${o}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:L},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(o=>({name:o,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=H=>H.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:H.flatMap(L=>{let o=P0[L];return[{name:`current.attribute_entity_${L}`,optional:!0,selector:o?{entity:{domain:"sensor",device_class:o}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${L}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${L}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:r2}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:r2}}}]}];this._computeCustomAttributeLabel=H=>{switch(H.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return H.name}};this._addCustomAttribute=()=>{let H=e1(this._config.current?.show_attributes);this._commitCustomAttributes([...H,{}])};this._removeCustomAttribute=H=>{let r=e1(this._config.current?.show_attributes);r.splice(H,1),this._commitCustomAttributes(r)};this._customAttributeChanged=(H,r)=>{r.stopPropagation();let L=e1(this._config.current?.show_attributes);L[H]=r.detail.value,this._commitCustomAttributes(L)};this._computeLabel=H=>{if(H.name.startsWith("current.attribute_label_")){let L=H.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||J(L).replace(/_/g," ")} label`}if(H.name.startsWith("current.attribute_icon_")){let L=H.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${L}`)||J(L).replace(/_/g," ")} icon`}if(H.name.startsWith("current.attribute_entity_")){let L=H.name.replace("current.attribute_entity_",""),o=this.localize(`ui.card.weather.attributes.${L}`)||J(L).replace(/_/g," "),n=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${o} ${n}`}let r=H.name.startsWith("forecast_action.")?H.name.split(".")[1]:H.name;switch(r){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${r}`)}};this._computeHelper=H=>{switch(H.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=H=>{let r;if(this._config?.entity&&H!=="ui.card.weather.attributes.precipitation"&&H.startsWith("ui.card.weather.attributes")){let L=this.hass.states[this._config.entity];L&&(r=this.hass.formatEntityAttributeName(L,H.replace("ui.card.weather.attributes.","")))}return r||(r=this.hass.localize(H)),r}}setConfig(H){this._config=H}render(){if(!this.hass||!this._config)return u;let H=P1(this._config),r=this._getSelectedAttributes(H),L=this._schema(this.localize.bind(this),r,H["forecast.mode"]);return i`
      <ha-form
        .hass=${this.hass}
        .data=${H}
        .schema=${L}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let H=e1(this._config.current?.show_attributes);return i`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${H.map((r,L)=>this._renderCustomAttributeRow(r,L))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${E2}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(H,r){return i`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${H}
          .schema=${B0}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${L=>this._customAttributeChanged(r,L)}
        ></ha-form>
        <ha-icon-button
          .path=${R2}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(r)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(H){let r={...this._config,current:{...this._config.current,show_attributes:R0(this._config.current?.show_attributes,H)}};U(this,"config-changed",{config:r})}_getSelectedAttributes(H){let r=H["current.show_attributes"];return r?Array.isArray(r)?r.map(L=>typeof L=="string"?L:L.name):[]:[]}_valueChanged(H){H.stopPropagation();let r=H.detail.value;r.forecast_mode==="show_both"?(r.show_current=!0,r.show_forecast=!0):r.forecast_mode==="show_current"?(r.show_current=!0,r.show_forecast=!1):(r.show_current=!1,r.show_forecast=!0),delete r.forecast_mode;let L=E0(r);if(delete L.temperature_entity,L?.forecast?.extra_attribute==="none"&&delete L.forecast.extra_attribute,Array.isArray(L.show_condition_effects)&&F1.every(n=>L.show_condition_effects.includes(n))&&(L.show_condition_effects=!0),L?.current){let o={},n={},m={};for(let l of Object.keys(L.current))if(l.startsWith("attribute_entity_")){let A=l.replace("attribute_entity_",""),c=L.current[l];c&&(o[A]=c),delete L.current[l]}else if(l.startsWith("attribute_label_")){let A=l.replace("attribute_label_",""),c=L.current[l];c&&(n[A]=c),delete L.current[l]}else if(l.startsWith("attribute_icon_")){let A=l.replace("attribute_icon_",""),c=L.current[l];c&&(m[A]=c),delete L.current[l]}if(Array.isArray(L.current.show_attributes)){let l=e1(this._config?.current?.show_attributes);L.current.show_attributes=c5(L.current.show_attributes,{entity:o,label:n,icon:m},l)}}U(this,"config-changed",{config:L})}};j.styles=D`
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
  `,y1([B2({attribute:!1})],j.prototype,"hass",2),y1([$2()],j.prototype,"_config",2),j=y1([P2("wsfc-flex-core-editor")],j);var r1=M=>typeof M=="string"&&K.includes(M),e1=M=>{if(!Array.isArray(M))return[];let C=[];for(let H of M)if(H!=null){if(typeof H=="string")r1(H)||C.push({name:H});else if(typeof H=="object"){let r=H;r1(r.name)||C.push(r)}}return C},c5=(M,C,H)=>{let r=K.every(n=>M.includes(n)),L=Object.keys(C.entity).length>0||Object.keys(C.label).length>0||Object.keys(C.icon).length>0;return H.length===0&&!L&&r?!0:[...M.map(n=>{let m=C.entity[n],l=C.label[n],A=C.icon[n];return m||l||A?{name:n,...m?{entity:m}:{},...l?{label:l}:{},...A?{icon:A}:{}}:n}),...H]},B0=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],$0=M=>{if(M===!0)return[...K];if(typeof M=="string")return r1(M)?[M]:[];if(!Array.isArray(M))return[];let C=[];for(let H of M)if(H!=null){if(typeof H=="string")r1(H)&&C.push(H);else if(typeof H=="object"){let r=H;r1(r.name)&&C.push(r)}}return C},R0=(M,C)=>{let H=$0(M),r=[],L={entity:{},label:{},icon:{}};for(let o of H)typeof o=="string"?r.push(o):o.name&&(r.push(o.name),o.entity&&(L.entity[o.name]=o.entity),o.label&&(L.label[o.name]=o.label),o.icon&&(L.icon[o.name]=o.icon));return c5(r,L,C)},E0=M=>{let C={...M};for(let H of Object.keys(M)){if(!H.startsWith("forecast.")&&!H.startsWith("forecast_action.")&&!H.startsWith("current."))continue;let r=H.split(".");if(r.length<2)continue;let[L,o]=r;!L||!o||((!C[L]||typeof C[L]!="object")&&(C[L]={}),C[L][o]=M[H],delete C[H])}return C},P1=M=>{let C=D0(M);C.forecast_mode=C.show_current&&C.show_forecast?"show_both":C.show_current?"show_current":"show_forecast",C.temperature_entity&&!C["current.temperature_entity"]&&(C["current.temperature_entity"]=C.temperature_entity),delete C.temperature_entity,C.show_condition_effects===!0&&(C.show_condition_effects=[...F1]),C["current.show_attributes"]===!0&&(C["current.show_attributes"]=[...K]);let H=C["current.show_attributes"];if(Array.isArray(H)){let r=[];for(let L of H)if(typeof L=="string")r1(L)&&r.push(L);else if(typeof L=="object"&&L!==null){let o=L;r1(o.name)&&(r.push(o.name),o.entity&&(C[`current.attribute_entity_${o.name}`]=o.entity),o.label&&(C[`current.attribute_label_${o.name}`]=o.label),o.icon&&(C[`current.attribute_icon_${o.name}`]=o.icon))}C["current.show_attributes"]=r}return C},D0=M=>{let C={};for(let H in M){let r=M[H];if(H==="forecast"&&r&&typeof r=="object"&&!Array.isArray(r)){for(let L in r)C[`forecast.${L}`]=r[L];continue}if(H==="current"&&r&&typeof r=="object"&&!Array.isArray(r)){for(let L in r)C[`current.${L}`]=r[L];continue}if(H==="forecast_action"&&r&&typeof r=="object"&&!Array.isArray(r)){for(let L in r)C[`forecast_action.${L}`]=r[L];continue}C[H]=r}return C};(()=>{let{WFC_BUILD:M,WFC_DATE_FORMATS:C,WFC_DETAILS:H,WFC_DEVICE_PREFIX:r,WFC_LABEL:L,WFC_METRIC_CATALOG:o,WFC_METRIC_LABELS:n,WFC_METRIC_POSITIONS:m,WFC_SKY_EXTRA_KEYS:l,clamp:A,wfcAutoMapDevice:c,wfcDefaultConfig:s,wfcDeviceEntities:x,wfcDeviceIdOf:w,wfcExtraKeys:b,wfcIsDeviceRef:T,wfcLabelsPosNum:F,wfcMetrics:k,wfcNormalizeSources:P,wfcResolve:S,wfcResolveDeviceMap:$,wfcToYaml:E}=globalThis.__wsfcSectionsScope||{};if(!S)throw new Error("Weather Flex sections: load the card before its editor");let Z=j.prototype,Y=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),M1={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},o1=null;function f3(){return o1||(o1=new Set,Object.values(x2).forEach(V=>V.forEach(t=>o1.add(t)))),o1}function u2(V,t){let e=[];return V.forEach(a=>{if(!t.has(a.name))if(a.schema){let d=u2(a.schema,t);d.length&&e.push({...a,schema:d})}else e.push(a)}),e}function h3(V){let t=f3(),e=new Set([...t,...Y]);V=u2(V,e);let a=new Map,d=[];V.forEach(g=>{Y.has(g.name)||(g.type==="expandable"?d.push(g):a.set(g.name,g))});let v=g=>g.map(_=>a.get(_)).filter(Boolean),p=(g,_,B)=>{let y=v(B);return y.length?[{name:g,type:"expandable",flatten:!0,icon:_,schema:y}]:[]},h=g=>d.find(_=>_.name===g),O=[];{let g=h("attribute_entities");g&&O.push(M1.attribute_entities?{...g,icon:M1.attribute_entities}:g)}return O}let M7=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],S3=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],g3=["tap_action","hold_action","double_tap_action"],w3=["show_condition_effects"],b3=[],x2={current:["current.show_attributes"],hourly:[],daily:[]},Z2={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},_3="Weather Flex sections";Z.render=function(){if(!this.hass||!this._config)return u;let V=P1(this._config),t=this._getSelectedAttributes(V),e=this._schema(this.localize.bind(this),t,V["forecast.mode"]),a=h3(e),d=p=>Z2[p.name]||this._computeLabel(p)||p.name,v=this._wfcAccordionEnabled();return i`
      ${this._wfcEditorStyle()}
      ${this.wsfcMode==="sections"?u:i`<div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${_3}</span>
          <span class="wsfc-ed-ver">build ${M}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${v}
            @change=${p=>this._wfcSetAccordion(p.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>`}
      ${a.length?i`<ha-form
            .hass=${this.hass}
            .data=${V}
            .schema=${a}
            .computeLabel=${d}
            .computeHelper=${p=>this._wfcHelper(p)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:u}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},Z._wfcCardAppearancePanel=function(){let V=S(this._config).card||{},t="card";return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${M1.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this.wsfcHide&&this.wsfcHide.includes("show_condition_effects")?i`<p class="wsfc-hint">The weather animation is drawn behind the whole card (Appearance → Background), so its effects and moon phase are set there.</p>`:i`${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(w3)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>`}
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!V.border_enabled,e=>this._wfcToggleSecField(t,"border_enabled",e))}
            ${V.border_enabled?i`
                  ${this._wfcColorField("Border color",V.border_color,e=>this._wfcSetSecField(t,"border_color",e.target.value))}
                  ${this._wfcNumField(t,"border_width","Border width","px",V.border_width,1)}
                  ${this._wfcNumField(t,"border_radius","Corner radius","px",V.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",V.border_top!==!1,e=>this._wfcToggleSecField(t,"border_top",e))}
                    ${this._wfcCheckbox("Bottom",V.border_bottom!==!1,e=>this._wfcToggleSecField(t,"border_bottom",e))}
                    ${this._wfcCheckbox("Left",V.border_left!==!1,e=>this._wfcToggleSecField(t,"border_left",e))}
                    ${this._wfcCheckbox("Right",V.border_right!==!1,e=>this._wfcToggleSecField(t,"border_right",e))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",V.corner_tl!==!1,e=>this._wfcToggleSecField(t,"corner_tl",e))}
                    ${this._wfcCheckbox("Top-right",V.corner_tr!==!1,e=>this._wfcToggleSecField(t,"corner_tr",e))}
                    ${this._wfcCheckbox("Bottom-right",V.corner_br!==!1,e=>this._wfcToggleSecField(t,"corner_br",e))}
                    ${this._wfcCheckbox("Bottom-left",V.corner_bl!==!1,e=>this._wfcToggleSecField(t,"corner_bl",e))}
                  </div>`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",V.bg_color,e=>this._wfcSetSecField(t,"bg_color",e.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!V.glow_enabled,e=>this._wfcToggleSecField(t,"glow_enabled",e))}
            ${V.glow_enabled?i`
                  ${this._wfcColorField("Glow color",V.glow_color,e=>this._wfcSetSecField(t,"glow_color",e.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((V.glow_intensity==null?1:V.glow_intensity)*100),100,"glow_intensity",e=>this._wfcSetSecField(t,"glow_intensity",A((parseInt(e.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",V.glow_borders_only!==!1,e=>this._wfcToggleSecField(t,"glow_borders_only",e))}`:u}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!V.shadow_enabled,e=>this._wfcToggleSecField(t,"shadow_enabled",e))}
            ${V.shadow_enabled?i`
                  ${this._wfcColorField("Shadow color",V.shadow_color,e=>this._wfcSetSecField(t,"shadow_color",e.target.value))}
                  ${this._wfcNumField(t,"shadow_x","Offset X","px",V.shadow_x,0)}
                  ${this._wfcNumField(t,"shadow_y","Offset Y","px",V.shadow_y,4)}
                  ${this._wfcNumField(t,"shadow_blur","Blur","px",V.shadow_blur,16)}
                  ${this._wfcNumField(t,"shadow_spread","Spread","px",V.shadow_spread,0)}
                  ${this._wfcNumField(t,"shadow_opacity","Opacity","%",V.shadow_opacity,35)}`:u}
          </div>
        </div>
      </details>
    `};let Y1=4;Z._wfcEdSources=function(){return P(this._config,this.hass)},Z._wfcCommitSources=function(V){let t=V.filter(g=>g&&g.ref).map(g=>{let _={};for(let y in g.overrides||{})g.overrides[y]&&(_[y]=g.overrides[y]);let B={ref:g.ref};return Object.keys(_).length&&(B.overrides=_),g.disabled&&(B.disabled=!0),B}),e={...this._config.metric_sources||{}};delete e.primary,delete e.fallback,delete e.custom,delete e.device_map,t.length?e.sources=t:delete e.sources;let a={...this._config,metric_sources:e},d=g=>{let _=this.hass&&this.hass.states[g],B=_&&_.attributes&&_.attributes.supported_features;return typeof B=="number"&&(B&7)!==0},v=g=>g.map(_=>_.ref).filter(_=>typeof _=="string"&&_.startsWith("weather.")),p=v(t.filter(g=>!g.disabled)),h=v(t),O=p.find(d)||p[0]||h.find(d)||h[0];O&&(a.entity=O),Object.keys(e).length===0&&delete a.metric_sources,U(this,"config-changed",{config:a})},Z._wfcSetSourceRef=function(V,t){let e=this._wfcEdSources();e[V]&&(t?e[V]={ref:t,overrides:e[V].overrides||{}}:e.splice(V,1),this._wfcCommitSources(e))},Z._wfcAddSource=function(V){if(!V)return;let t=this._wfcEdSources();t.length>=Y1||(t.push({ref:V,overrides:{}}),this._wfcCommitSources(t))},Z._wfcMoveSource=function(V,t){let e=this._wfcEdSources(),a=V+t;if(V<0||a<0||a>=e.length)return;let d=e[V];e[V]=e[a],e[a]=d,this._wfcCommitSources(e)},Z._wfcRemoveSource=function(V){let t=this._wfcEdSources();V<0||V>=t.length||(t.splice(V,1),this._wfcCommitSources(t))},Z._wfcToggleSourceDisabled=function(V){let t=this._wfcEdSources();t[V]&&(t[V].disabled=!t[V].disabled,this._wfcCommitSources(t))},Z._wfcSetSourceOverride=function(V,t,e){let a=this._wfcEdSources();if(!a[V])return;let d={...a[V].overrides||{}};e?d[t]=e:delete d[t],a[V].overrides=d,this._wfcCommitSources(a)},Z._wfcLiveValue=function(V,t){let e=this.hass&&this.hass.states[V];if(!e)return"";let a,d;return V.startsWith("weather.")?(a=e.attributes?e.attributes[t]:null,d=e.attributes&&e.attributes[t+"_unit"]):(a=e.state,d=e.attributes&&e.attributes.unit_of_measurement),a==null||a===""||a==="unknown"||a==="unavailable"?"":d?`${a} ${d}`:`${a}`},Z._wfcAvailableMetrics=function(){let V=new Set;if(!this.hass)return V;let t=new Set;this._config.entity&&t.add(this._config.entity);for(let a of this._wfcEdSources())if(!a.disabled)if(a.overrides&&Object.keys(a.overrides).forEach(d=>{V.add(d),t.add(a.overrides[d])}),T(a.ref)){let d=$(this._config,this.hass,w(a.ref));Object.keys(d).forEach(v=>{V.add(v),t.add(d[v])})}else a.ref&&t.add(a.ref);t.forEach(a=>{let d=this.hass.states[a];d&&d.attributes&&Object.keys(d.attributes).forEach(v=>V.add(v))});let e=a=>{if(Array.isArray(a))for(let d of a)d&&Object.keys(d).forEach(v=>V.add(v))};if(e(this._hourlyForecastData),e(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(a=>{a&&(e(a.hourly),e(a.daily))}),typeof V2.__wsfcExtraEntity=="function")for(let a of["ozone"])try{V2.__wsfcExtraEntity(a,this.hass,this._config)&&V.add(a)}catch{}return V};function O3(V){return String(V).split(/[_\s]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}let y3={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function k3(V){return y3[V]||O3(V)}Z._wfcMetricOptions=function(V,t){let e=this._wfcAvailableMetrics(),a=t?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(V||[]).forEach(d=>{let v=k3(d);a.push({value:d,label:e.has(d)?v:`${v} (unavailable)`})}),a},Z._wfcSourceMappingEditor=function(V,t){let e=t.ref,a=t.overrides||{},d=T(e),v=d?w(e):null,p=d?c(this.hass,v):{},h=_=>{if(d)return p[_]||"";if(!e)return"";if(e.startsWith("weather.")){let B=this.hass&&this.hass.states[e];return B&&B.attributes&&B.attributes[_]!=null?e:""}return""},O=d?{include_entities:x(this.hass,v)}:{},g=_=>{let B=_.key,y=a[B]||h(B),f=!!a[B],c1=y?this._wfcLiveValue(y,B):"",C2=[{name:"e",selector:{entity:O}}],H2=f?" (override)":y?"":" \u2014 none";return i`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:y}}
            .schema=${C2}
            .computeLabel=${()=>_.label+H2}
            @value-changed=${Q=>this._wfcSetSourceOverride(V,B,Q.detail&&Q.detail.value&&Q.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${c1||"\u2014"}</span>
        </div>
      `};return i`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${d?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${d?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${o.map(g)}
        </div>
      </details>
    `},Z._wfcSourceSummaryList=function(V){let t=V.ref,e=V.overrides||{},a=T(t),d=a?c(this.hass,w(t)):{},v=h=>{if(e[h])return e[h];if(a)return d[h]||"";if(t&&t.startsWith("weather.")){let O=this.hass&&this.hass.states[t];return O&&O.attributes&&O.attributes[h]!=null?t:""}return""},p=[];return o.forEach(h=>{let O=v(h.key);if(!O)return;let g=this._wfcLiveValue(O,h.key);p.push(i`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${h.label}</span>
          <span class="wsfc-cond-ent" title=${O}>${O}</span>
          <span class="wsfc-cond-val">${g||"\u2014"}</span>
        </div>
      `)}),p.length?i`<div class="wsfc-cond-list">${p}</div>`:u},Z._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},Z._wfcToggleSrcMap=function(V){let t=this._wfcSrcMapOpen();t.has(V)?t.delete(V):t.add(V),this.requestUpdate&&this.requestUpdate()},Z._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},Z._wfcSourceMetricCount=function(V){let t=V.ref,e=V.overrides||{},a=new Set(Object.keys(e).filter(d=>e[d]));if(T(t))Object.keys($(this._config,this.hass,w(t))).forEach(d=>a.add(d));else if(t&&t.startsWith("weather.")){let d=this.hass&&this.hass.states[t];d&&d.attributes&&o.forEach(v=>{d.attributes[v.key]!=null&&a.add(v.key)})}return a.size},Z._wfcSourceRow=function(V,t,e){let a=V.ref,d=T(a),v=this._config.entity,p=d&&this.hass&&this.hass.devices&&this.hass.devices[w(a)],h=d?p&&(p.name_by_user||p.name)||w(a):a,O=d?"Device":a&&a.startsWith("weather.")?"Weather":"Sensor",g=d?"mdi:access-point":a&&a.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",_=!d&&a&&a.startsWith("weather."),B=_&&a===v,y=this._wfcSrcMapOpen().has(a),f=!!V.disabled,c1=this._wfcSourceMetricCount(V),C2=`${c1} value${c1===1?"":"s"} mapped`,H2=B?i`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:_?i`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:i`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,Q="",i1=a&&!d?this.hass&&this.hass.states[a]:null;if(d)Q=c1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!i1)Q=`\u26A0 Entity not found: ${a}`;else if(i1.state==="unavailable"||i1.state==="unknown")Q=`\u26A0 Currently ${i1.state}.`;else if(_&&!B){let b2=i1.attributes&&i1.attributes.supported_features;Q=typeof b2=="number"&&(b2&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else _||(Q="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return i`
      <div class="wsfc-src-row ${f?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${g}></ha-icon>
          <span class="wsfc-src-name">${h} <span class="wsfc-src-type">${O}</span></span>
          <ha-icon class="wsfc-ico-btn ${t===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(t,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${t===e-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(t,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${f?"mdi:eye-off":"mdi:eye"} title=${f?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(t)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${y?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(a)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(t)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${H2}<span class="wsfc-src-count">${C2}</span>${f?i`<span class="wsfc-src-count">· hidden</span>`:u}</div>
        ${Q?i`<div class="wsfc-src-detail">${Q}</div>`:u}
        ${this._wfcSourceSummaryList(V)}
        ${y?this._wfcSourceMappingEditor(t,V):u}
      </div>
    `},Z._wfcWeatherSourcesPanel=function(){let V=this._wfcEdSources(),t=V.some(p=>p.ref&&!T(p.ref)&&p.ref.startsWith("weather.")),e=V.length>=Y1,a=!!this.__wfcAddSourceOpen&&!e,d=i`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${p=>{let h=p.detail&&p.detail.value&&p.detail.value.e;h&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(h))}}
      ></ha-form>`,v=i`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${p=>{let h=p.detail&&p.detail.value&&p.detail.value.d;h&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(r+h))}}
      ></ha-form>`;return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${e?i`<p class="wsfc-hint">Maximum of ${Y1} sources reached. Remove one to add another.</p>`:i`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${a?"mdi:close":"mdi:plus"}></ha-icon>${a?"Cancel":"Add Source"}
              </div>
              ${a?i`<div class="wsfc-add-pickers">${d}${v}</div>`:u}
            `}
          ${V.length?V.map((p,h)=>this._wfcSourceRow(p,h,V.length)):i`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!t&&V.length?i`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:u}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},Z._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},Z._wfcHeadlineTempRow=function(){let V=this._config.current&&this._config.current.temperature_entity,t=V||"",e="";if(!t)for(let v of this._wfcEdSources()){if(v.disabled)continue;let p=this._wfcSlotEntityForKeyEd(v,"temperature");if(p&&this.hass&&this.hass.states[p]){t=p;break}}t?e=this.hass&&this.hass.states[t]&&this.hass.states[t].attributes&&this.hass.states[t].attributes.friendly_name||t:e="\u2014 none available \u2014";let a=t?this._wfcLiveValue(t,"temperature"):"",d=!!this.__wfcHeadlineEdit;return i`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${e}${V?i` <span class="wsfc-src-type">override</span>`:u}</span>
          ${a?i`<span class="wsfc-srcmap-live">${a}</span>`:u}
          <ha-icon class="wsfc-ico-btn ${d?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${d?i`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:u}
      </div>
    `},Z._wfcSlotEntityForKeyEd=function(V,t){if(V.overrides&&V.overrides[t])return V.overrides[t];let e=V.ref;if(!e)return null;if(T(e))return $(this._config,this.hass,w(e))[t]||null;if(e.startsWith("weather.")){let a=this.hass&&this.hass.states[e];return a&&a.attributes&&a.attributes[t]!=null?e:null}return null},Z._wfcSetForecastTypes=function(V,t){let e=V&&t?"both":V?"hourly":t?"daily":"both",a={...this._config,forecast_types:e};U(this,"config-changed",{config:a})},Z._wfcAdvancedPanel=function(){let V=this._config.forecast_types||"both",t=V==="both"||V==="hourly",e=V==="both"||V==="daily";return i`
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
          ${this._wfcStockFormFor(b3)}
        </div>
      </details>
    `},Z._wfcUserActionsPanel=function(){let V=this._wfcStockFormFor(S3),t=this._wfcStockFormFor(g3),e=this._config.forecast||{};return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${V}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",e.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${t}
        </div>
      </details>
    `};let T3=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];Z._wfcForecastTypeControls=function(V){let t=this._config.forecast||{},e=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],a=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],d=g=>t[`${g}_mode`]||t.mode||"simple",v=g=>(t[`${g}_extra_attribute`]!=null?t[`${g}_extra_attribute`]:t.extra_attribute)||"none",p=g=>(t[`${g}_chart_attribute`]!=null?t[`${g}_chart_attribute`]:t.default_chart_attribute)||"temperature_and_precipitation",h=(g,_,B)=>{let y=t[`${g}_${_}`];if(y!=null)return!!y;let f=t[_];return f!=null?!!f:B},O=d(V)==="chart";return i`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${V}_mode`,"Display mode",e,d(V),"simple")}
        ${this._wfcForecastSelect(`${V}_extra_attribute`,"Extra metric",a,v(V),"none")}
      </div>
      ${O?i`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${V}_chart_attribute`,"Chart metric",T3,p(V),"temperature_and_precipitation")}
          </div>`:u}
      ${this._wfcConfigCheckbox(`forecast.${V}_show_sun_times`,"Show sunrise & sunset times",h(V,"show_sun_times",!0),!0)}
      ${O?i`
            ${this._wfcConfigCheckbox(`forecast.${V}_use_color_thresholds`,"Use color thresholds",h(V,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${V}_show_attribute_selector`,"Show metric selector",h(V,"show_attribute_selector",!1),!1)}`:u}
    `},Z._wfcHelper=function(V){let t=this._computeHelper?this._computeHelper(V):void 0;return typeof t=="string"&&(t=t.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),t},Z._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},Z._wfcSetAccordion=function(V){let t=this._wfcState();t.editor_accordion=!!V,this._wfcCommit(t),this._wfcApplyAccordion()},Z._wfcApplyAccordion=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,V.addEventListener("toggle",t=>{let e=t.target;if(!e||!e.classList||!e.classList.contains("wsfc-panel")||(this._wfcRememberOpen(e),!e.open)||!this._wfcAccordionEnabled())return;(V.querySelectorAll?V.querySelectorAll("details.wsfc-panel"):[]).forEach(d=>{d!==e&&d.open&&(d.open=!1)})},!0))},Z._wfcRememberOpen=function(V){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let t=this._wfcPanelKey(V);t&&(V.open?this.__wfcOpenPanels.add(t):this.__wfcOpenPanels.delete(t))},Z._wfcPanelKey=function(V){let t=V.querySelector&&V.querySelector(".wsfc-panel-title");return t?(t.textContent||"").trim():""},Z._wfcRestoreOpen=function(){let V=this.renderRoot||this.shadowRoot||this;!V||!V.querySelectorAll||!this.__wfcOpenPanels||V.querySelectorAll("details.wsfc-panel").forEach(t=>{let e=this._wfcPanelKey(t);e&&this.__wfcOpenPanels.has(e)&&(t.open=!0)})},Z.updated=function(V){try{let t=Object.getPrototypeOf(Z);t&&typeof t.updated=="function"&&t.updated.call(this,V)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},Z._wfcEditorStyle=function(){return i`<style>
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
    </style>`};let F3="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";Z._wfcCustomMetricsBody=function(){let V=e1(this._config.current&&this._config.current.show_attributes);return i`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${V.map((t,e)=>this._renderCustomAttributeRow(t,e))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${F3}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},Z._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let X1={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function p1(V){if(V&&V.detail&&V.detail.value!==void 0)return V.detail.value;let t=V&&V.target;if(t)return(t.type==="checkbox"||typeof t.checked=="boolean")&&(t.tagName==="HA-SWITCH"||t.type==="checkbox")?t.checked:t.value}function J1(V){let t=V&&V.target;return t&&typeof t.checked=="boolean"?t.checked:!!(V&&V.detail&&V.detail.value)}Z._wfcState=function(){return JSON.parse(JSON.stringify(S(this._config)))},Z._wfcCommit=function(V){let t={...this._config,wfc:V};U(this,"config-changed",{config:t})},Z._wfcResetSection=function(V){let e=s(this._config)[V];if(!e)return;let a=this._wfcState(),d=!!(a[V]&&a[V].show);a[V]={...JSON.parse(JSON.stringify(e)),show:d},this._wfcCommit(a)},Z._wfcMoveSection=function(V,t){let e=this._wfcState(),a=e.order.indexOf(V),d=a+t;if(a<0||d<0||d>=e.order.length)return;let v=e.order[a];e.order[a]=e.order[d],e.order[d]=v,this._wfcCommit(e)},Z._wfcCommitMetrics=function(V,t){let e=this._wfcState();e[V]||(e[V]={});let a=k(e[V]),d=a.map(p=>p.key),v={};a.forEach(p=>v[p.key]=p.pos),t(d,v),e[V].forecast_metric_order=d,e[V].forecast_metric_pos=v,delete e[V].forecast_temps,delete e[V].forecast_icons,delete e[V].forecast_extra,delete e[V].forecast_row_order,delete e[V].forecast_stack,this._wfcCommit(e)},Z._wfcMoveMetric=function(V,t,e){let a=this._wfcState(),v=k(a[V]||{}).find(p=>p.key===t);v&&v.pos==="below"&&(e=-e),this._wfcCommitMetrics(V,(p,h)=>{let O=p.indexOf(t),g=O+e;for(;g>=0&&g<p.length&&h[p[g]]!==h[t];)g+=e;if(O<0||g<0||g>=p.length)return;let _=p[O];p[O]=p[g],p[g]=_})},Z._wfcSetMetricPos=function(V,t,e){this._wfcCommitMetrics(V,(a,d)=>{d[t]=e})},Z._wfcSetMetricStyle=function(V,t,e,a){let d=this._wfcState();d[V]||(d[V]={});let v={...d[V].forecast_metric_style||{}},p={...v[t]||{}};a==null||a===""?delete p[e]:p[e]=a,Object.keys(p).length?v[t]=p:delete v[t],d[V].forecast_metric_style=v,this._wfcCommit(d)},Z._wfcMetricsOrder=function(V,t){let e=k(t),a=p=>e.filter(h=>h.pos===p),d=[...a("above"),...a("overlay"),...a("below").reverse(),...e.filter(p=>!["above","overlay","below"].includes(p.pos))],v=t.forecast_metric_style||{};return d.map((p,h,O)=>{let g=v[p.key]||{},_=p.key==="icons",B=p.key!=="temps";return i`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${n[p.key]||p.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${y=>y.stopPropagation()}
              @change=${y=>this._wfcSetMetricPos(V,p.key,y.target.value)}
            >
              ${m.map(y=>i`<option value=${y.value} ?selected=${y.value===p.pos}>${y.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${h===0||O[h-1].pos!==p.pos?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveMetric(V,p.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${h===O.length-1||O[h+1].pos!==p.pos?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${y=>{y.preventDefault(),y.stopPropagation(),this._wfcMoveMetric(V,p.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetMetricStyle(V,p.key,"every",y.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(y=>({value:String(y),label:y+(y>1?" hours":" hour")}))].map(y=>i`<option value=${y.value} ?selected=${y.value===(g.every!=null?String(g.every):"")}>${y.label}</option>`)}
              </select>
            </label>
            ${B?i`
                  ${this._wfcColorField("Icon color",g.icon_color,y=>this._wfcSetMetricStyle(V,p.key,"icon_color",y.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",g.icon_size,y=>this._wfcSetMetricStyle(V,p.key,"icon_size",parseFloat(p1(y))||""))}`:u}
            ${_?u:i`
                  ${this._wfcColorField("Text color",g.text_color,y=>this._wfcSetMetricStyle(V,p.key,"text_color",y.target.value))}
                  ${this._wfcPlainNum("Font size (px)",g.text_size,y=>this._wfcSetMetricStyle(V,p.key,"text_size",parseFloat(p1(y))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${y=>this._wfcSetMetricStyle(V,p.key,"contrast",y.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(y=>i`<option value=${y.value} ?selected=${y.value===(g.contrast||"")}>${y.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},Z._wfcToggleSection=function(V,t){let e=this._wfcState();e[V]||(e[V]={}),e[V].show=J1(t),this._wfcCommit(e)},Z._wfcToggleSectionShow=function(V){let t=this._wfcState();t[V]||(t[V]={}),t[V].show=!t[V].show,this._wfcCommit(t)},Z._wfcSetSecNum=function(V,t,e){let a=this._wfcState(),d=parseFloat(p1(e));a[V][t]=isNaN(d)?void 0:d,this._wfcCommit(a)},Z._wfcSetSecField=function(V,t,e){let a=this._wfcState();a[V]||(a[V]={}),a[V][t]=e,this._wfcCommit(a)},Z._wfcToggleSecField=function(V,t,e){this._wfcSetSecField(V,t,J1(e))},Z._wfcSetForecastNum=function(V,t){let e={...this._config.forecast||{}};t==null||t<=0?delete e[V]:e[V]=t,U(this,"config-changed",{config:{...this._config,forecast:e}})},Z._wfcSetConfigNum=function(V,t,e){let[a,d]=V.split("."),v={...this._config},p={...v[a]||{}},h=t==null||t===""||isNaN(Number(t))?null:Number(t);h==null?delete p[d]:p[d]=h,v[a]=p,U(this,"config-changed",{config:v})},Z._wfcConfigSlider=function(V,t,e,a,d){let v=m1(V,e||""),p=a!=null?A(Number(a),v.min,v.max):Number(d);return this._wfcSliderTpl(t,e,v,p,h=>this._wfcSetConfigNum(V,h.target.value,d))},Z._wfcSetConfigStr=function(V,t,e){let a={...this._config};if(V.indexOf(".")===-1)e&&(t==null||t==="")?delete a[V]:a[V]=t;else{let[d,v]=V.split("."),p={...a[d]||{}};e&&(t==null||t==="")?delete p[v]:p[v]=t,a[d]=p}U(this,"config-changed",{config:a})},Z._wfcConfigSelect=function(V,t,e,a,d,v){let p=String(a??d);return i`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${t}</span>
        <select class="wsfc-native-select" @change=${h=>this._wfcSetConfigStr(V,h.target.value,v)}>
          ${e.map(h=>i`<option value=${String(h.value)} ?selected=${String(h.value)===p}>${h.label}</option>`)}
        </select>
      </label>
    `},Z._wfcSetConfigBool=function(V,t,e){let a={...this._config},d=(v,p)=>{t===!!e?delete v[p]:v[p]=t};if(V.indexOf(".")===-1)d(a,V);else{let[v,p]=V.split("."),h={...a[v]||{}};d(h,p),a[v]=h}U(this,"config-changed",{config:a})},Z._wfcConfigCheckbox=function(V,t,e,a){let d=e==null?!!a:!!e;return this._wfcCheckbox(t,d,v=>this._wfcSetConfigBool(V,v.target.checked,a))},Z._wfcConfigText=function(V,t,e,a){return i`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${t}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${e||""}
          placeholder=${a||""}
          @change=${d=>this._wfcSetConfigStr(V,d.target.value)}
        />
      </label>
    `},Z._wfcSetForecastField=function(V,t){let e={...this._config.forecast||{}};t==null||t===""?delete e[V]:e[V]=t,U(this,"config-changed",{config:{...this._config,forecast:e}})},Z._wfcForecastSelect=function(V,t,e,a,d){let v=String(a??d);return i`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${t}</span>
        <select class="wsfc-native-select" @change=${p=>this._wfcSetForecastField(V,p.target.value)}>
          ${e.map(p=>i`<option value=${String(p.value)} ?selected=${String(p.value)===v}>${p.label}</option>`)}
        </select>
      </label>
    `},Z._wfcNumSecField=function(V,t,e,a){let d=parseFloat(p1(e));this._wfcSetSecField(V,t,isNaN(d)?a:d)},Z._wfcMoveDetail=function(V,t){let e=this._wfcState(),a=e.details.items,d=a.findIndex(h=>h.key===V),v=d+t;if(d<0||v<0||v>=a.length)return;let p=a[d];a[d]=a[v],a[v]=p,this._wfcCommit(e)},Z._wfcToggleDetail=function(V,t){let e=this._wfcState(),a=e.details.items.find(d=>d.key===V);a&&(a.show=J1(t)),this._wfcCommit(e)},Z._wfcToggleDetailShow=function(V){let t=this._wfcState(),e=t.details.items.find(a=>a.key===V);e&&(e.show=!e.show,this._wfcCommit(t))},Z._wfcSetDetailValue=function(V,t,e){let a=this._wfcState(),d=a.details.items.find(v=>v.key===V);d&&(d[t]=e),this._wfcCommit(a)},Z._wfcSetDetail=function(V,t,e){let a=this._wfcState(),d=a.details.items.find(p=>p.key===V);if(!d)return;let v=p1(e);if(t==="icon_size"||t==="text_size"){let p=parseFloat(v);v=isNaN(p)?void 0:p}else(v===""||v==null)&&(v=void 0);d[t]=v,this._wfcCommit(a)},Z._wfcColorField=function(V,t,e){if(this.wsfcHide&&this.wsfcHide.includes("color:"+V))return u;if(/^(Day|Night) color$/.test(V))return this._wfcColorFieldHex(V,t,e);let a=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]],d=t==null?"":String(t),v=/background|bg$|^Chip background/i.test(V),p=d===""?"default":d==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(d)?"custom":/^var\(/.test(d)&&a.some(([_])=>_===d)?"theme":"css",h=/^#[0-9a-fA-F]{6}$/.test(d)?d:"#4fc3f7",O=_=>e({target:{value:_}}),g=_=>O(_==="default"?"":_==="transparent"?"transparent":_==="theme"?a.some(([B])=>B===d)?d:a[0][0]:_==="custom"?h:d||h);return i`
      <div class="wsfc-color-field wsfc-color4">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
        <select class="wsfc-native-select" style="flex:0 0 auto;width:auto" @change=${_=>g(_.target.value)}>
          ${[["default","Not set"],...v||p==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([_,B])=>i`<option value=${_} ?selected=${_===p}>${B}</option>`)}
        </select>
        ${p==="theme"?i`<select class="wsfc-native-select" style="flex:1 1 120px;width:auto" @change=${_=>O(_.target.value)}>${a.map(([_,B])=>i`<option value=${_} ?selected=${_===d}>${B}</option>`)}</select>`:p==="custom"?i`<input type="color" class="wsfc-color-input" .value=${h} @change=${_=>O(_.target.value)} />`:p==="css"?i`<input type="text" class="wsfc-native-select" style="flex:1 1 120px;width:auto" .value=${d} @change=${_=>O(_.target.value)} />`:u}
        ${p!=="default"&&p!=="transparent"?i`<span style="width:16px;height:16px;border-radius:50%;flex:0 0 auto;border:1px solid var(--divider-color);background:${d}"></span>`:u}
      </div>
    `},Z._wfcColorFieldHex=function(V,t,e){return i`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${V}</span>
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
    `},Z._wfcSelect=function(V,t,e,a,d,v){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let p=String(d??v);return i`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${e}</span>
        <select
          class="wsfc-native-select"
          @change=${h=>this._wfcSetSecField(V,t,h.target.value)}
        >
          ${a.map(h=>i`<option value=${String(h.value)} ?selected=${String(h.value)===p}>${h.label}</option>`)}
        </select>
      </label>
    `};let f2={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function m1(V,t){return/chip_scale/.test(V)?{min:50,max:250,step:5}:/chip_columns/.test(V)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(V)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(V)?{min:0,max:48,step:1}:/clock_font_size|clock_date_font_size/.test(V)?{min:0,max:100,step:1}:/header_icon_size/.test(V)?{min:0,max:140,step:2}:/header_secondary_size/.test(V)?{min:0,max:48,step:1}:/header_state_size|header_temp_size/.test(V)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(V)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(V)?{min:-40,max:40,step:1}:/shadow_blur/.test(V)?{min:0,max:80,step:1}:/border_radius/.test(V)?{min:0,max:48,step:1}:/border_width/.test(V)?{min:0,max:12,step:1}:/hourly_slots/.test(V)?{min:0,max:48,step:1}:/daily_slots/.test(V)?{min:0,max:14,step:1}:/labels_position|opacity/.test(V)?{min:0,max:100,step:1}:/indent/.test(V)?{min:0,max:120,step:2}:/height/.test(V)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(V)?{min:8,max:100,step:1}:/font_size|_size$/.test(V)?{min:8,max:48,step:1}:/_width$/.test(V)?{min:1,max:12,step:1}:/_length$/.test(V)?{min:5,max:100,step:5}:/hourly_group_size/.test(V)?{min:1,max:4,step:1}:/temperature_precision/.test(V)?{min:0,max:2,step:1}:/hours/.test(V)?{min:1,max:48,step:1}:f2[t]||f2.px}Z._wfcNumField=function(V,t,e,a,d,v){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let p=m1(t,a||""),h=d!=null?Number(d):Number(v);return this._wfcSliderTpl(e,a,p,h,O=>this._wfcNumSecField(V,t,O,v))},Z._wfcPlainSlider=function(V,t,e,a,d,v){let p=m1(d||"",t||""),h=e!=null?Number(e):Number(a);return this._wfcSliderTpl(V,t,p,h,v)},Z._wfcSlotSlider=function(V,t,e){let a=m1(t,""),d=e!=null?A(Number(e),a.min,a.max):0,v=p=>Number(p)<=0?"All":String(p);return i`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${a.min}
          max=${a.max}
          step=${a.step}
          .value=${String(d)}
          @input=${p=>{let h=p.target.closest(".wsfc-slider-row"),O=h&&h.querySelector(".wsfc-slider-num");O&&(O.textContent=v(p.target.value))}}
          @change=${p=>this._wfcSetForecastNum(t,parseInt(p.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${v(d)}></span></span>
      </div>
    `},Z._wfcAutoSizeField=function(V,t,e){if(this.wsfcHide&&this.wsfcHide.includes(t))return u;let a=m1(t,""),d=this._wfcState()[V]||{},v=A(parseInt(d[t],10)||0,a.min,a.max),p=h=>Number(h)<=0?"Auto":`${h}px`;return i`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${e}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${a.min}
          max=${a.max}
          step=${a.step}
          .value=${String(v)}
          @input=${h=>{let O=h.target.closest(".wsfc-slider-row"),g=O&&O.querySelector(".wsfc-slider-num");g&&(g.textContent=p(h.target.value))}}
          @change=${h=>this._wfcSetSecField(V,t,parseInt(h.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${p(v)}></span></span>
      </div>
    `},Z._wfcSliderTpl=function(V,t,e,a,d){let v=t||"";return i`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${V}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${e.min}
          max=${e.max}
          step=${e.step}
          .value=${String(a)}
          @input=${p=>{let h=p.target.closest(".wsfc-slider-row"),O=h&&h.querySelector(".wsfc-slider-num");O&&(O.textContent=p.target.value)}}
          @change=${d}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(a)}></span>${v}</span>
      </div>
    `},Z._wfcCheckbox=function(V,t,e){return this.wsfcHide&&this.wsfcHide.includes("check:"+V)?u:i`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!t} @change=${e} />
        <span>${V}</span>
      </label>
    `},Z._wfcGroup=function(V){return V&&this.wsfcHide&&this.wsfcHide.includes("group:"+V)?u:V?i`<div class="wsfc-group-div"><span class="wsfc-group-label">${V}</span></div>`:i`<div class="wsfc-group-div"></div>`},Z._wfcSubPanel=function(V,t){return i`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${V}</span></summary>
        <div class="wsfc-subpanel-body">${t}</div>
      </details>
    `},Z._wfcFlushControls=function(V,t){return i`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",t.flush_edges,e=>this._wfcToggleSecField(V,"flush_edges",e))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",t.flush_top,e=>this._wfcToggleSecField(V,"flush_top",e))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",t.flush_bottom,e=>this._wfcToggleSecField(V,"flush_bottom",e))}
    `},Z._wfcTextControls=function(V,t,e,a){if(this.wsfcHide&&this.wsfcHide.includes(`${t}_font_size`))return u;let d=this._wfcState()[V]||{};return i`
      <div class="wsfc-sub-title">${e}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(V,`${t}_font_size`,"Size","px",d[`${t}_font_size`],a)}
        ${this._wfcSelect(V,`${t}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],d[`${t}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",d[`${t}_color`],v=>this._wfcSetSecField(V,`${t}_color`,v.target.value))}
    `};let h2=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];Z._wfcDividerControls=function(V,t){return i`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",t.divider_above,e=>this._wfcToggleSecField(V,"divider_above",e))}
      ${t.divider_above?i`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_above_width","Thickness","px",t.divider_above_width,1)}
              ${this._wfcNumField(V,"divider_above_length","Length","%",t.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_above_style","Line style",h2,t.divider_above_style,"solid")}
            </div>`:u}

      ${this._wfcCheckbox("Section Divider Below",t.divider_below,e=>this._wfcToggleSecField(V,"divider_below",e))}
      ${t.divider_below?i`
            <div class="wsfc-row">
              ${this._wfcNumField(V,"divider_below_width","Thickness","px",t.divider_below_width,1)}
              ${this._wfcNumField(V,"divider_below_length","Length","%",t.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"divider_below_style","Line style",h2,t.divider_below_style,"solid")}
            </div>`:u}

      ${t.divider_above||t.divider_below?this._wfcColorField("Divider color",t.divider_color,e=>this._wfcSetSecField(V,"divider_color",e.target.value)):u}
    `},Z._wfcBackgroundControls=function(V,t){let e=!!t.background_enabled;return i`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",e,a=>this._wfcToggleSecField(V,"background_enabled",a))}
      ${e?i`
            ${this._wfcColorField("Background color",t.background_color,a=>this._wfcSetSecField(V,"background_color",a.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",t.background_opacity==null?80:t.background_opacity,80,"opacity",a=>this._wfcSetSecField(V,"background_opacity",A(parseInt(a.target.value,10)||0,0,100)))}`:u}
    `},Z._wfcSectionStyles=function(V,t){return this.wsfcHide&&this.wsfcHide.includes("group:Section Styles")?u:this._wfcSubPanel("Section Styles",i`
        ${this._wfcFlushControls(V,t)}
        ${this._wfcDividerControls(V,t)}
        ${this._wfcBackgroundControls(V,t)}`)},Z._wfcStockForm=function(V){return this._wfcStockFormFor(x2[V])},Z._wfcStockFormFor=function(V){if(!V||!V.length)return u;let t=P1(this._config),e=this._getSelectedAttributes(t),a=this._schema(this.localize.bind(this),e,"chart"),d=new Map,v=O=>O.forEach(g=>{g.schema?v(g.schema):d.set(g.name,g)});v(a);let p=V.map(O=>d.get(O)).filter(Boolean);if(!p.length)return u;let h=O=>Z2[O.name]||this._computeLabel(O)||O.name;return i`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${p}
        .computeLabel=${h}
        .computeHelper=${O=>this._wfcHelper(O)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},Z._wfcTitleControls=function(V,t){return i`
      ${this._wfcCheckbox("Show Title Row",t.title_show,e=>this._wfcToggleSecField(V,"title_show",e))}
      ${t.title_show?i`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${t.title_text||""}
                @change=${e=>this._wfcSetSecField(V,"title_text",e.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${t.title_icon||""}
              @value-changed=${e=>this._wfcSetSecField(V,"title_icon",e.detail&&e.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(V,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],t.title_text_align,"left")}
              ${this._wfcSelect(V,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],t.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(V,"title_font_size","Text size","px",t.title_font_size,15)}
            ${this._wfcSelect(V,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],t.title_font_weight,"600")}
            ${this._wfcNumField(V,"title_icon_size","Icon size","px",t.title_icon_size,20)}
            ${this._wfcNumField(V,"title_indent","Indent","px",t.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",t.title_color,e=>this._wfcSetSecField(V,"title_color",e.target.value))}
              ${this._wfcColorField("Icon color",t.title_icon_color,e=>this._wfcSetSecField(V,"title_icon_color",e.target.value))}
            </div>
          `:u}
    `},Z._wfcSectionOptionsBody=function(V,t){let e=t[V]||{},a=V==="details",d=V==="current",v=V==="sun_position",p=V==="sun_arc",h=V==="hourly",O=V==="daily",g=this._config.forecast||{},_=this._config.current||{},B=A(parseInt(e.columns,10)||2,1,4),y=this._wfcMetricOptions(typeof K<"u"?K:[],!0);return i`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(V)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(V,e)}
          ${d?i`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:u}
          ${d?i`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(V,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(V,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(V,"header_temp_size","Temperature size")}
                ${this._wfcAutoSizeField(V,"header_secondary_size","Temperature sub-header size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",y,_.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(V)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(V)}
          ${h?i`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",g.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",g.hourly_group_size,1)}`:u}
          ${O?i`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",g.daily_slots)}`:u}
          ${a?i`
                ${this._wfcGroup("Layout")}
                ${e.chips?i`
                      ${this._wfcSelect(V,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],e.chip_layout==="column"?"wrap":e.chip_layout||"wrap","wrap")}
                      ${(e.chip_layout||"wrap")==="grid"?i`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(e.chip_columns,10)>0,f=>this._wfcSetSecField(V,"chip_columns",f.target.checked?A(parseInt(e.chip_columns,10)||2,1,6):0))}
                            ${parseInt(e.chip_columns,10)>0?this._wfcNumField(V,"chip_columns","Columns","",parseInt(e.chip_columns,10)||2,2):u}`:u}`:i`
                      ${this._wfcSelect(V,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],e.details_layout||"grid","grid")}
                      ${(e.details_layout||"grid")==="grid"?this._wfcNumField(V,"columns","Columns","",B,2):u}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!e.chips,f=>this._wfcToggleSecField(V,"chips",f))}
                ${e.chips?i`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",e.chip_pill!=null?!!e.chip_pill:e.chip_shape!=="rounded"&&e.chip_shape!=="square",f=>this._wfcSetSecField(V,"chip_pill",f.target.checked))}
                      ${(e.chip_pill!=null?e.chip_pill:e.chip_shape!=="rounded"&&e.chip_shape!=="square")?u:this._wfcNumField(V,"chip_radius","Corner radius (0 = square)","px",e.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((e.chip_scale==null?1:e.chip_scale)*100),100,"chip_scale",f=>this._wfcSetSecField(V,"chip_scale",A((parseInt(f.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(V,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",e.chip_text_color,f=>this._wfcSetSecField(V,"chip_text_color",f.target.value))}
                      ${this._wfcColorField("Chip background",e.chip_bg,f=>this._wfcSetSecField(V,"chip_bg",f.target.value))}
                      ${this._wfcColorField("Chip border",e.chip_border_color,f=>this._wfcSetSecField(V,"chip_border_color",f.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",e.chip_show_icon!==!1,f=>this._wfcToggleSecField(V,"chip_show_icon",f))}
                      ${e.chip_show_icon!==!1?i`
                            ${this._wfcSelect(V,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],e.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(V,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",e.chip_icon_color,f=>this._wfcSetSecField(V,"chip_icon_color",f.target.value))}`:u}
                      ${this._wfcCheckbox("Show metric name in chip",!!e.chip_show_name,f=>this._wfcToggleSecField(V,"chip_show_name",f))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!e.chip_hide_when_off,f=>this._wfcToggleSecField(V,"chip_hide_when_off",f))}`:u}

                ${e.chips?i`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(t)}`:i`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(V,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(V,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",e.global_icon_color,f=>this._wfcSetSecField(V,"global_icon_color",f.target.value))}
                        ${this._wfcColorField("Text color",e.global_text_color,f=>this._wfcSetSecField(V,"global_text_color",f.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(t)}`}
              `:u}

          ${v?i`
                ${this._wfcSubPanel("Time",i`
                    ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],e.timeframe_mode,"hours")}
                      ${e.timeframe_mode==="hours"||e.timeframe_mode==null?i`
                            ${this._wfcNumField(V,"timeframe_hours","Hours","",e.timeframe_hours,24)}
                            ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],e.timeframe_anchor,"now_left")}
                          `:u}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],e.times_position==="center"?"overlay":e.times_position,"below")}
                      ${this._wfcSelect(V,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],e.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(V,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(f=>({value:f,label:f+(f>1?" hours":" hour")}))],e.ticks_every==null?0:e.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(V,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",i`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",e.marker_color,f=>this._wfcSetSecField(V,"marker_color",f.target.value))}
                      ${this._wfcNumField(V,"marker_opacity","Marker opacity","%",e.marker_opacity==null?100:e.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",i`
                    <div class="wsfc-row">
                      ${this._wfcSelect(V,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],e.ss_markers_position,"hidden")}
                    </div>
                    ${e.ss_markers_position&&e.ss_markers_position!=="hidden"?i`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",e.ss_markers_color,f=>this._wfcSetSecField(V,"ss_markers_color",f.target.value))}
                          ${this._wfcNumField(V,"ss_markers_opacity","Marker opacity","%",e.ss_markers_opacity==null?100:e.ss_markers_opacity,100)}
                        </div>`:u}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",i`
                    ${this._wfcSubPanel("Metrics Defaults",i`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!e.forecast_metric_detail_icons,f=>this._wfcToggleSecField(V,"forecast_metric_detail_icons",f))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!e.forecast_temp_with_icon,f=>this._wfcToggleSecField(V,"forecast_temp_with_icon",f))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(V,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(f=>({value:f,label:f+(f>1?" hours":" hour")}))],e.forecast_every,3)}
                          ${this._wfcNumField(V,"forecast_font_size","Text size","px",e.forecast_font_size,11)}
                          ${this._wfcNumField(V,"forecast_icon_size","Icon size","px",e.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",e.forecast_temp_color,f=>this._wfcSetSecField(V,"forecast_temp_color",f.target.value))}
                        ${this._wfcColorField("Icon color",e.forecast_icon_color,f=>this._wfcSetSecField(V,"forecast_icon_color",f.target.value))}
                        ${l.some(f=>e.forecast_metric_pos&&e.forecast_metric_pos[f]&&e.forecast_metric_pos[f]!=="hidden"||b(e).includes(f))?this._wfcColorField("Metric Text Color",e.forecast_extra_color,f=>this._wfcSetSecField(V,"forecast_extra_color",f.target.value)):u}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Listed top to bottom as they appear on the bar; the arrows move a metric up or down among those in the same place (change its place with the drop-down). Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(V,e)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",i`
                    ${this._wfcNumField(V,"height","Bar height","px",e.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",e.weather_adjust!==!1,f=>this._wfcToggleSecField(V,"weather_adjust",f))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",e.day_color,f=>this._wfcSetSecField(V,"day_color",f.target.value))}
                      ${this._wfcColorField("Night color",e.night_color,f=>this._wfcSetSecField(V,"night_color",f.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(V,e)}
              `:u}

          ${p?i`
                <div class="wsfc-row">
                  ${this._wfcNumField(V,"height","Arc height","px",e.height,90)}
                  ${this._wfcSelect(V,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],e.time_format,"auto")}
                </div>

                ${this.wsfcHide&&this.wsfcHide.includes("timeframe_mode")?u:this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],e.timeframe_mode,"sunrise_sunset")}
                  ${e.timeframe_mode==="hours"?i`
                        ${this._wfcNumField(V,"timeframe_hours","Hours","",e.timeframe_hours,24)}
                        ${this._wfcSelect(V,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],e.timeframe_anchor,"now_left")}
                      `:u}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",F(e.labels_position),0,"labels_position",f=>this._wfcSetSecField(V,"labels_position",A(parseInt(f.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${e.sun_icon||""}
                  @value-changed=${f=>this._wfcSetSecField(V,"sun_icon",f.detail&&f.detail.value||"")}
                ></ha-icon-picker>
                ${this.wsfcHide&&this.wsfcHide.includes("night_moon")?u:this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!e.night_moon,f=>this._wfcToggleSecField(V,"night_moon",f))}
                ${e.night_moon&&!(this.wsfcHide&&this.wsfcHide.includes("night_moon"))?i`<ha-icon-picker
                      label="Moon icon"
                      .value=${e.moon_icon||"mdi:weather-night"}
                      @value-changed=${f=>this._wfcSetSecField(V,"moon_icon",f.detail&&f.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:u}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],e.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",e.show_arc_ticks,f=>this._wfcToggleSecField(V,"show_arc_ticks",f))}
                ${this._wfcCheckbox("Show tick marks on the baseline",e.show_base_ticks!==!1,f=>this._wfcToggleSecField(V,"show_base_ticks",f))}
                <div class="wsfc-row">
                  ${this._wfcSelect(V,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],e.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",e.tick_color,f=>this._wfcSetSecField(V,"tick_color",f.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",e.show_times!==!1,f=>this._wfcToggleSecField(V,"show_times",f))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",e.show_captions!==!1,f=>this._wfcToggleSecField(V,"show_captions",f))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",e.show_ss_icons,f=>this._wfcToggleSecField(V,"show_ss_icons",f))}
                ${e.show_ss_icons?i`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${e.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${f=>this._wfcSetSecField(V,"sunrise_icon",f.detail&&f.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${e.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${f=>this._wfcSetSecField(V,"sunset_icon",f.detail&&f.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(V,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],e.ss_icon_position,"left")}
                        ${this._wfcNumField(V,"ss_icon_size","Icon size","px",e.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",e.ss_icon_color,f=>this._wfcSetSecField(V,"ss_icon_color",f.target.value))}
                    `:u}

                ${this._wfcTextControls(V,"time","Time text",13)}
                ${this._wfcTextControls(V,"caption","Sunrise / sunset caption",11)}
              `:u}

          ${v?u:this._wfcSectionStyles(V,e)}
        </div>
    `};let S2={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};Z._wfcPlainNum=function(V,t,e){return this._wfcPlainSlider(V,"px",t,16,"_size",e)},Z._wfcDetailRows=function(V){return V.details.items.map((e,a,d)=>{let v=H[e.key]||{};return i`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${e.icon||v.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${v.label||e.key}</span>
            <ha-icon class="wsfc-ico-btn ${a===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${p=>{p.preventDefault(),p.stopPropagation(),this._wfcMoveDetail(e.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${a===d.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${p=>{p.preventDefault(),p.stopPropagation(),this._wfcMoveDetail(e.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${e.show?"mdi:eye":"mdi:eye-off"} title=${e.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${p=>{p.preventDefault(),p.stopPropagation(),this._wfcToggleDetailShow(e.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${v.icon||""}
              .value=${e.icon||""}
              @value-changed=${p=>this._wfcSetDetail(e.key,"icon",p)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${p=>this._wfcSetDetailValue(e.key,"mode",p.target.value)}>
                <option value="global" ?selected=${e.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${e.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${e.mode==="custom"?i`
                  ${this._wfcPlainNum("Icon size (px)",e.icon_size,p=>this._wfcSetDetail(e.key,"icon_size",p))}
                  ${this._wfcPlainNum("Text size (px)",e.text_size,p=>this._wfcSetDetail(e.key,"text_size",p))}
                  ${this._wfcColorField("Icon color",e.icon_color,p=>this._wfcSetDetail(e.key,"icon_color",p))}
                  ${this._wfcColorField("Text color",e.text_color,p=>this._wfcSetDetail(e.key,"text_color",p))}
                `:u}
          </div>
        </details>
      `})};let g2=["current","details","hourly","daily","sun_arc","sun_position"];function P3(V){let t=g2.filter(a=>V.includes(a)),e=V.filter(a=>!g2.includes(a));return[...t,...e]}Z._wfcEditor=function(){let V=S(this._config),t=P3(V.order),e=V.order.map((d,v,p)=>{let h=!!(V[d]&&V[d].show);return i`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${S2[d]||X1.options}></ha-icon>
          <span class="wsfc-order-name">${L[d]||d}</span>
          <ha-icon class="wsfc-ico-btn ${v===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(d,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${v===p.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(d,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${h?"mdi:eye":"mdi:eye-off"} title=${h?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(d)}></ha-icon>
        </div>
      `}),a=t.map(d=>i`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${S2[d]||X1.options}></ha-icon><span class="wsfc-panel-title">${L[d]||d}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(d,V)}
          </div>
        </details>
      `);return i`
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
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${X1.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${e}
        </div>
      </details>
      ${a}
      ${this._wfcClockPanel(V)}
    `};let w2=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];Z._wfcClockPanel=function(V){let t="current",e=V.current||{},a=v=>v==="above"?"above-center":v==="below"?"below-center":v,d=e.clock_show_time!==!1;return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",d,v=>this._wfcToggleSecField(t,"clock_show_time",v))}
                ${d?i`
                      <div class="wsfc-row">
                        ${this._wfcSelect(t,"clock_placement","Clock placement",w2,a(e.clock_placement),"right")}
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
                ${e.clock_show_date?i`
                      ${this._wfcSelect(t,"clock_date_format","Date format",C.map(v=>({value:v.value,label:v.label})),e.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(t,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...w2],e.clock_date_placement==="above"||e.clock_date_placement==="below"?a(e.clock_date_placement):e.clock_date_placement,"with_time")}
                        ${this._wfcAutoSizeField(t,"clock_date_font_size","Date size")}
                        ${this._wfcColorField("Date color",e.clock_date_color,v=>this._wfcSetSecField(t,"clock_date_color",v.target.value))}
                      </div>
                      ${e.clock_show_time&&(e.clock_date_placement==="with_time"||!e.clock_date_placement)?this._wfcSelect(t,"clock_align","Time & date alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],e.clock_align||"center","center"):u}
                      ${this._wfcSelect(t,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],e.clock_date_contrast!=null?e.clock_date_contrast:e.clock_contrast,"none")}`:u}
        </div>
      </details>
    `},Z._wfcYamlPanel=function(){let V;try{V=E(this._config)}catch{V="# (unable to render YAML)"}return i`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${V}</pre>
        </div>
      </details>
    `}})();{let M=j.prototype,C=M._wfcWeatherSourcesPanel,H=M.render,r=M.updated;M._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":C.call(this)},M.render=function(){return this.wsfcMode!=="sources"?H.call(this):!this.hass||!this._config?"":i`${this._wfcEditorStyle()}${C.call(this)}`};let L=new CSSStyleSheet;L.replaceSync(`
    details.wsfc-panel { border: 1px solid transparent; border-top-color: var(--ltek-c-border-soft, rgba(127,127,127,.25)); border-radius: 0; background: none; margin: 0; }
    details.wsfc-panel[open] { border-color: var(--accent-color, var(--ltek-c-accent, #03a9f4)); border-radius: var(--ltek-r-ctrl, 8px); margin: 6px 0; }
    details.wsfc-panel[open] + details.wsfc-panel { border-top-color: transparent; }
    details.wsfc-panel > summary.wsfc-panel-summary { padding: var(--ltek-sp-3, 10px); gap: 8px; }
    details.wsfc-panel > summary .wsfc-panel-icon { display: none; }
    details.wsfc-panel > summary .wsfc-panel-title { font-size: var(--ltek-fs-label, 13px); font-weight: var(--ltek-fw-semibold, 600); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    details.wsfc-panel > summary::after { width: 8px; height: 8px; border-right-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); border-bottom-color: var(--ltek-c-accent, var(--accent-color, #03a9f4)); }
    .wsfc-ed-header { display: none; }
  `),M.updated=function(o){r?.call(this,o),this.wsfcMode==="sections"&&this.renderRoot&&(this.renderRoot.adoptedStyleSheets.includes(L)||(this.renderRoot.adoptedStyleSheets=[...this.renderRoot.adoptedStyleSheets,L]),this.renderRoot.querySelectorAll("details.wsfc-panel").forEach(m=>{m.__wsfcFlat||(m.__wsfcFlat=!0,m.addEventListener("toggle",()=>{m.open&&this.dispatchEvent(new CustomEvent("wsfc-flat-open",{detail:{type:this.wsfcType},bubbles:!0,composed:!0}))}))}));let n=this.wsfcPanels;if(n&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(m=>{let l=m.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();m.hidden=!!l&&!n.includes(l)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let m=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");m&&(m.open=!0,this.__wsfcOpened=!0)}}}var v5=globalThis.__wsfcHost?.["src/card/constants.js"];if(!v5)throw new Error("wsfc-editor.js: the card did not provide src/card/constants.js; update every file of the card together");var{CARD_NAME:u5,CARD_TYPE:t2,CARD_VERSION:x5}=v5;var Z5=globalThis.__wsfcHost?.["src/card/panels.js"];if(!Z5)throw new Error("wsfc-editor.js: the card did not provide src/card/panels.js; update every file of the card together");var{COLLAPSE_COLORS:f5,COLLAPSE_FIELDS:M9,COMMON_SCHEMA:B1,DEFAULT_PANELS:o9,HERO_TEXT_ICONS:i9,NO_TITLE:h5,PANEL_TYPES:M2,SKY_TEXT_ICONS:a9,STACK_CHILD_SCHEMA:$1,TITLE_WHEN_SET:o2,inBarOf:R1,layoutOf:n9,migrateSky:A9,normalizePanels:S5,opensPopup:l9,panelMeta:I,rowsOf:W,spanOf:G}=Z5;var g5=globalThis.__wsfcHost?.["src/card/core.js"];if(!g5)throw new Error("wsfc-editor.js: the card did not provide src/card/core.js; update every file of the card together");var{CORE_EDITOR_TAG:w5,CORE_TAG:s9,CoreSlot:p9,FLEX_SECTIONS_BUILD:m9,deepMerge:b5,flexBaseline:c9,flexOverride:_5,resolveWfc:v9}=g5;var O5=globalThis.__wsfcHost?.["src/panels/flex.js"];if(!O5)throw new Error("wsfc-editor.js: the card did not provide src/panels/flex.js; update every file of the card together");var{FLEX_BASES:x9,WsfcFlexPanel:Z9,flexBase:y5,heroAutoSizes:f9,scaleTracker:h9,trackerConfig:k5}=O5;var T5=globalThis.__wsfcHost?.["src/card/config.js"];if(!T5)throw new Error("wsfc-editor.js: the card did not provide src/card/config.js; update every file of the card together");var{clone:a1,deepDiff:g9,deepMerge:w9,fitMode:V1,prune:q}=T5;var F5=globalThis.__wsfcHost?.["src/card/metrics.js"];if(!F5)throw new Error("wsfc-editor.js: the card did not provide src/card/metrics.js; update every file of the card together");var{CARDINALS:_9,METRICS:z,cardinal:O9,digitsFor:y9,metricEntity:E1,pressureThreshold:k9,uvLevel:T9}=F5;var P5=globalThis.__wsfcHost?.["src/card/layout.js"];if(!P5)throw new Error("wsfc-editor.js: the card did not provide src/card/layout.js; update every file of the card together");var{COLS:P9,Q:C1,arrange:n1,pushDown:A1,readingOrder:i2,toRows:t1,toTracks:L1}=P5;var a2=30,n2=4,B5=10,l1=M=>M.title?M.title:M.type==="metric"?z[M.metric]?.label||M.label||"Metric":M.type==="stack"?`Stack \xB7 ${(M.panels||[]).length}`:M.type==="day"?["Today","Tomorrow"][Number(M.day_offset??1)]||`Day +${M.day_offset}`:(I(M)?.label||M.type).replace(/ \(.*\)$/,""),A2=M=>M.icon||M.type==="metric"&&z[M.metric]?.icon||I(M)?.icon||"mdi:square-outline",u1=class extends N{connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(()=>{let C=this.renderRoot.querySelector(".grid");if(!C)return;let H=C.clientWidth-12;Math.abs(H-(this._mapW||0))>1&&(this._mapW=H)}),this.updateComplete.then(()=>{let C=this.renderRoot.querySelector(".grid");C&&this._ro.observe(C)})}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_scale(){let C=this.guide;if(!C?.w||!C?.h||!this._mapW)return{row:a2,gap:n2,line:null};let H=this._mapW/C.w,r=Math.max(100,C.h-(C.chrome||0)),L=C.row||110,o=!1;if(C.fit&&this._tracks){let m=this._tracks/C1,l=(r+(C.gap??12))/m-(C.gap??12);L=Math.max(60,Math.min(400,l)),o=l>=60}let n=Math.max(2,(C.gap??12)*H);return{row:Math.max(8,L*H),gap:n,line:r*H,rowPx:Math.round(L),fits:o}}updated(C){if(C.has("panels")&&this._focusNext!=null){let n=this._focusNext;this._focusNext=null,this.renderRoot.querySelector(`.blk[data-i="${n}"]`)?.focus()}let H=this.renderRoot.querySelector(".grid.measure");if(!H||!this.guide?.fit)return;let{row:r,gap:L}=this._scale(),o=Math.max(C1,Math.round((H.clientHeight-12+L)/((r-3*L)/C1+L)));o!==this._tracks&&(this._tracks=o)}_gridIdx(){return(this.panels||[]).map((C,H)=>H).filter(C=>this.panels[C].display!=="popup")}_items(C=this.panels||[]){return this._gridIdx().map(H=>{let r=C[H];return{key:H,w:G(r),h:L1(W(r)),x:r.x??null,y:r.y==null?null:Number(r.y)*C1}})}_positions(){return this._preview||n1(this._items(),{gravity:this.gravity!==!1})}render(){let C=this.panels||[];this._pos=this._positions();let H=i2(this._pos),r=C.map((n,m)=>m).filter(n=>C[n].display==="popup"),L=this._scale();this._mr=L.row,this._mg=L.gap;let o=this.guide?.mode||"line";return i`
      <div class="wrap">
        <div class="grid ${this._drag?.moved||this._size?"editing":""}" style=${`--row:${L.row}px;--gap:${L.gap}px`}>
          ${H.map(n=>this._block(C[n],n))}
        </div>
        ${this.guide?.fit?i`<div class="grid measure" aria-hidden="true" style=${`--row:${L.row}px;--gap:${L.gap}px`}>
          ${this._measureBlocks(C)}</div>`:u}
        ${L.line==null||this.measured?u:L.fits?i`<div class="guide fitbox" aria-hidden="true"><span>Fits ${this.guide.w}×${this.guide.h} · rows ${L.rowPx}px</span></div>`:i`<div class="guide ${o}" style=${`top:${6+L.line}px`} aria-hidden="true">
                <span>${this.guide.w}×${this.guide.h} screen edge${this.guide.fit?` \xB7 rows at the ${L.rowPx}px minimum`:""}</span></div>`}
      </div>
      ${this._screen()}
      ${r.length?i`<div class="pops"><span>Pop-ups:</span>${r.map(n=>i`<span class="pop"><ha-icon icon=${A2(C[n])}></ha-icon>${l1(C[n])}</span>`)}</div>`:u}
    `}_screen(){let C=this.measured,H=this.guide;if(!C||!H||!this._mapW||!C.w)return u;let r=this._mapW/C.w,L=Math.max(C.gridH,C.visibleH),o=C.tiles.filter(l=>l.where==="off"),n=C.tiles.filter(l=>l.where==="partial"),m=l=>l.map(A=>l1(this.panels[A.i]||{})).join(", ");return i`<div class="shot-head">On the ${H.w}×${H.h} screen at load${C.gridH<=C.visibleH+1?i` — <span class="okc">everything fits</span>`:""}</div>
      <div class="shot" style=${`height:${Math.round(L*r)+2}px`}>
        ${C.tiles.map(l=>{let A=this.panels[l.i]||{};return i`<div class="st ${l.where} ${l.collapsed?"folded":""}" style=${`left:${l.x*r}px;top:${l.y*r}px;width:${Math.max(4,l.w*r)}px;height:${Math.max(4,l.h*r)}px`}
            title=${`${l1(A)}: ${Math.round(l.w)}\xD7${Math.round(l.h)} px${l.where==="off"?" \u2014 off screen at load":l.where==="partial"?" \u2014 partly off screen":""}`}>
            <ha-icon icon=${A2(A)}></ha-icon><span>${l1(A)}</span></div>`})}
        ${C.gridH>C.visibleH+1?i`<div class="below" style=${`top:${C.visibleH*r}px`}><span>screen edge · scroll for the rest</span></div>`:u}
      </div>
      ${o.length||n.length?i`<div class="shot-note">${n.length?i`<b>Partly off screen:</b> ${m(n)}. `:""}${o.length?i`<b>Off screen:</b> ${m(o)}.`:""}
            ${H.fit&&!H.strict?" Content makes some panels taller than their rows (\u2192 in the map above); try Strict fit, Content size, or more rows for them.":""}</div>`:u}`}_place(C){return`grid-column: ${C.x+1} / span ${C.w}; grid-row: ${C.y+1} / span ${C.h};`}_measureBlocks(C){let H=this._items().filter(L=>C[L.key].show!==!1);return[...n1(H,{gravity:this.gravity!==!1}).values()].map(L=>i`<div style=${this._place(L)}></div>`)}_block(C,H){let r=this._size?.index===H?this._size:null,L=this._pos.get(H),o=L.w,n=r?r.rows:W(C),m=this._place(L),l=!r&&this.measured?.tiles?.find(x=>x.i===H),A=l&&!l.collapsed?Math.round((l.h+this.measured.gap)/(this.measured.row+this.measured.gap)*C1)/C1:null,c=A!=null&&n>0&&A>n+.25,s=["blk",C.show===!1?"hidden":"",this._drag?.index===H?"dragging":"",r?"sizing":"",C.type,l?`at-${l.where}`:"",c?"grows":"",l?.collapsed?"folded":""].join(" ");return i`<div class=${s} style=${m} data-i=${H} tabindex="0" role="button"
        aria-label=${`${l1(C)}, column ${L.x+1}, row ${t1(L.y)+1}, width ${o} of 12, height ${n||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${x=>this._startMove(x,H)} @keydown=${x=>this._key(x,H)}>
      <ha-icon icon=${A2(C)}></ha-icon>
      <span class="nm">${l1(C)}</span>
      <span class="dim">${o}×${n||"a"}${c?i` <b class="need" title="Its content makes it taller on that screen">→ ${A}</b>`:u}${l?.collapsed?" \xB7 folded":""}</span>
      <span class="rz x" @pointerdown=${x=>this._startSize(x,H,"x")}></span>
      <span class="rz y" @pointerdown=${x=>this._startSize(x,H,"y")}></span>
      <span class="rz xy" @pointerdown=${x=>this._startSize(x,H,"xy")}></span>
    </div>`}_cell(C){let H=this.renderRoot.querySelector(".grid"),r=H.getBoundingClientRect(),L=this._mg||n2,o=(H.clientWidth-12-11*L)/12,n=((this._mr||a2)-3*L)/C1;return{x:Math.floor((C.clientX-r.left-6)/(o+L)),y:Math.floor((C.clientY-r.top-6)/(n+L))}}_startMove(C,H){if(C.button!==0||C.target.classList.contains("rz"))return;C.preventDefault();let r=C.currentTarget;r.setPointerCapture(C.pointerId);let L=this._pos.get(H),o=this._cell(C);this._drag={index:H,x0:C.clientX,y0:C.clientY,moved:!1,dx:o.x-L.x,dy:o.y-L.y,at:{x:L.x,y:L.y}};let n=l=>this._onMove(l),m=()=>{r.removeEventListener("pointermove",n),r.removeEventListener("pointerup",m),r.removeEventListener("pointercancel",m);let l=this._drag,A=this._preview;this._drag=null,this._preview=null,l?.moved&&A&&(l.to.x!==l.at.x||l.to.y!==l.at.y)&&this._commit(A)};r.addEventListener("pointermove",n),r.addEventListener("pointerup",m),r.addEventListener("pointercancel",m)}_onMove(C){let H=this._drag;if(!H||!H.moved&&Math.hypot(C.clientX-H.x0,C.clientY-H.y0)<4)return;H.moved=!0;let r=this._cell(C),L=n1(this._items(),{gravity:this.gravity!==!1}).get(H.index),o={x:Math.max(0,Math.min(12-L.w,r.x-H.dx)),y:Math.max(0,r.y-H.dy)};H.to&&H.to.x===o.x&&H.to.y===o.y||(H.to=o,this._preview=A1(this._items(),H.index,o,{gravity:this.gravity!==!1}))}_commit(C,H={}){let r=this.panels,L=i2(C),o=L.map(l=>{let A=C.get(l),c={...r[l],x:A.x,y:t1(A.y)};return H[l]&&Object.assign(c,H[l]),this._tidy(c)}),n=r.map(l=>l.display==="popup"?l:o.shift()),m=r.map((l,A)=>A).filter(l=>r[l].display!=="popup");this._moved=new Map(L.map((l,A)=>[l,m[A]])),this._emit(n)}_tidy(C){let H=I(C)||{};return C.span===H.span&&delete C.span,C.rows!=null&&C.rows===(H.rows??0)&&delete C.rows,C}_commitOrder(C){let H=this.panels,r=C.map(o=>H[o]),L=H.map(o=>o.display==="popup"?o:r.shift());this._emit(L)}_startSize(C,H,r){if(C.button!==0)return;C.preventDefault(),C.stopPropagation();let L=C.currentTarget;L.setPointerCapture(C.pointerId);let o=this.renderRoot.querySelector(".grid"),n=this._mg||n2,m=(o.clientWidth-12-11*n)/12+n,l=((this._mr||a2)-3*n)/C1+n,A=this.panels[H],c=this._pos.get(H),s=G(A),x=W(A);this._size={index:H,span:s,rows:x};let w=C.clientX,b=C.clientY,T=k=>{let P=r==="y"?s:Math.max(1,Math.min(12-c.x,s+Math.round((k.clientX-w)/m))),$=r==="x"?x:Math.max(.25,Math.min(B5,t1(L1(x||1)+Math.round((k.clientY-b)/l))));r!=="x"&&x===0&&$===1&&Math.abs(k.clientY-b)<l/2&&($=0),!(P===this._size.span&&$===this._size.rows)&&(this._size={index:H,span:P,rows:$},this._preview=A1(this._items(),H,{x:c.x,y:c.y,w:P,h:L1($)},{gravity:this.gravity!==!1}))},F=()=>{L.removeEventListener("pointermove",T),L.removeEventListener("pointerup",F),L.removeEventListener("pointercancel",F);let{span:k,rows:P}=this._size,S=this._preview;this._size=null,this._preview=null,(k!==s||P!==x)&&S&&this._commit(S,{[H]:{span:k,rows:P}})};L.addEventListener("pointermove",T),L.addEventListener("pointerup",F),L.addEventListener("pointercancel",F)}_commitSize(C,H,r){let L=this._pos.get(C),o=A1(this._items(),C,{x:L.x,y:L.y,w:H,h:L1(r)},{gravity:this.gravity!==!1});this._commit(o,{[C]:{span:H,rows:r}})}_key(C,H){let r={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[C.key];if(!r)return;C.preventDefault();let L=this.panels[H];if(C.shiftKey){let o=Math.max(0,Math.min(B5,t1(L1(W(L)||1)+r[1])));this._commitSize(H,Math.max(1,Math.min(12-this._pos.get(H).x,G(L)+r[0])),W(L)===0&&r[1]<0?.75:o)}else{let o=this._pos.get(H),n={x:Math.max(0,Math.min(12-o.w,o.x+r[0])),y:Math.max(0,o.y+r[1])},m=A1(this._items(),H,n,{gravity:this.gravity!==!1});if(r[1]<0&&m.get(H).y>=o.y){let l=[...this._pos.values()].filter(A=>A.key!==H&&A.y+A.h<=o.y&&A.x<o.x+o.w&&o.x<A.x+A.w).sort((A,c)=>c.y+c.h-(A.y+A.h))[0];l&&(m=A1(this._items(),H,{x:o.x,y:l.y},{gravity:this.gravity!==!1}))}this._commit(m)}this._focusNext=this._moved?.get(H)??H}_emit(C){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:C}}))}};R(u1,"properties",{panels:{attribute:!1},_preview:{state:!0},gravity:{attribute:!1},_size:{state:!0},_drag:{state:!0},guide:{attribute:!1},measured:{attribute:!1},_mapW:{state:!0},_tracks:{state:!0}}),R(u1,"styles",D`
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
      grid-auto-rows: calc((var(--row) - 3 * var(--gap)) / 4);
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
    .blk.dragging { cursor: grabbing; border: 2px dashed var(--primary-color); background: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color, #222)); z-index: 4; }
    /* While dragging or resizing: the cell grid (columns and quarter rows). */
    .grid.editing { background-image:
        linear-gradient(to right, color-mix(in srgb, var(--primary-color) 22%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-color) 14%, transparent) 1px, transparent 1px);
      background-size: calc((100% - 12px + var(--gap)) / 12) 100%, 100% calc((var(--row) - 3 * var(--gap)) / 4 + var(--gap));
      background-position: 6px 0, 0 6px; }
    .blk { transition: box-shadow 0.12s, transform 0.12s; }
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
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",u1);var $5=56,R5=16,x1=class extends N{render(){let C=this.guide;return!C?.w||!C?.h?i``:i`<div class="screen" style=${`width:${Math.max(200,C.w-R5)}px;height:${Math.max(200,C.h-$5)}px`}></div>`}updated(C){let H=`${this.guide?.w}x${this.guide?.h}`;!(C.has("config")&&C.get("config")!==this.config)&&H===this._key&&this._card||this.hass&&(this._key=H,clearTimeout(this._t),this._t=setTimeout(()=>this._build(),400))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._t),clearTimeout(this._m)}_build(){let C=this.renderRoot.querySelector(".screen"),H=this.guide;if(!(!C||!H||!this.hass||!this.config?.entity)&&customElements.get("weather-station-flex-card")){this._card||(this._card=document.createElement("weather-station-flex-card"),this._card.editMode=!0,C.append(this._card));try{this._card.setConfig({...this.config,remember:!1})}catch{return}this._card.screenHeight=Math.max(200,H.h-$5-R5),this._card.screenWidth=H.w,this._card.hass=this.hass,clearTimeout(this._m),this._m=setTimeout(()=>{try{this._card._fit?.(),this._card._autoFitPanels?.()}catch{}requestAnimationFrame(()=>this._measure())},900)}}_measure(){let C=this._card?.shadowRoot,H=C?.querySelector(".scroller"),r=C?.querySelector(".grid");if(!H||!r)return;let L=r.getBoundingClientRect(),o=H.getBoundingClientRect(),n=this.renderRoot.querySelector(".screen").getBoundingClientRect(),m=Math.min(o.top+H.clientHeight,n.bottom)-L.top,l=getComputedStyle(r),A=[...r.querySelectorAll(":scope > section.tile[data-i]")].map(c=>{let s=c.getBoundingClientRect(),x=s.top-L.top,w=s.height;return{i:Number(c.dataset.i),x:s.left-L.left,y:x,w:s.width,h:w,collapsed:c.classList.contains("collapsed"),where:x>=m-1?"off":x+w>m+1?"partial":"on"}});this.dispatchEvent(new CustomEvent("probe-measured",{detail:{w:L.width,visibleH:m,gridH:L.height,row:parseFloat(r.style.getPropertyValue("--wsfc-row")||l.getPropertyValue("--wsfc-row"))||110,gap:parseFloat(l.rowGap)||12,tiles:A}}))}};R(x1,"properties",{hass:{attribute:!1},config:{attribute:!1},guide:{attribute:!1}}),R(x1,"styles",D`
    :host { position: fixed; left: -20000px; top: 0; visibility: hidden; pointer-events: none; contain: layout; }
    .screen { position: relative; overflow: hidden; }
  `);customElements.get("wsfc-layout-probe")||customElements.define("wsfc-layout-probe",x1);var D1=[["var(--primary-color)","Primary"],["var(--accent-color)","Accent"],["var(--primary-text-color)","Primary text"],["var(--secondary-text-color)","Secondary text"],["var(--disabled-text-color)","Disabled text"],["var(--disabled-color)","Disabled"],["var(--state-icon-color)","State icon"],["var(--state-active-color)","State active"],["var(--error-color)","Error"],["var(--warning-color)","Warning"],["var(--success-color)","Success"],["var(--info-color)","Info"]];function W0(M){return M=M==null?"":String(M),M===""?"default":M==="transparent"?"transparent":/^#[0-9a-fA-F]{3,8}$/.test(M)?"custom":/^var\(/.test(M)&&D1.some(([C])=>C===M)?"theme":"css"}var D5=M=>!!M.selector?.ltek_color||!!M.selector?.text&&/(^|_|\.)color$/.test(M.name),N0=M=>/px|%/.test(M?.unit_of_measurement||"");function z0(M){let C=M.selector||{};return!!(C.boolean||C.select&&!C.select.custom_value||C.number||D5(M)||C.text&&!C.text.multiple)}var E5=M=>/^#[0-9a-fA-F]{6}$/.test(M||"")?M:null;function W5({data:M,schema:C,onChange:H,label:r,helper:L,haForm:o,auto:n,whenData:m}){let l=[],A=[],c=()=>{if(!A.length)return;let s=A;l.push(o(Object.fromEntries(s.map(x=>[x.name,M[x.name]])),s,x=>H({...M,...x}))),A=[]};for(let s of C)if(!(typeof s.when=="function"&&!s.when(m?{...m,...M}:M))){if(!z0(s)){A.push(s);continue}c(),l.push(I0(s,M[s.name],x=>H({...M,[s.name]:x}),r(s),L(s),n?.(s)))}return c(),l}function I0(M,C,H,r,L,o){let n=M.selector||{},m=`f-${M.name.replace(/\W/g,"_")}`,l=L?i`<div class="fhelp">${L}</div>`:u;if(n.boolean){let A=M.invert?C===!1:!!C;return i`<div class="fld"><label class="fchk"><input type="checkbox" .checked=${A} @change=${c=>H(M.invert?!c.target.checked:c.target.checked)} />${r}</label>${l}</div>`}if(n.select&&!n.select.multiple){let A=(n.select.options||[]).map(s=>typeof s=="string"?{value:s,label:s}:s),c=C==null?"":String(C);return i`<div class="fld"><div class="frow"><label for=${m}>${r}</label>
      <select id=${m} class="sel" @change=${s=>H(s.target.value===""?void 0:s.target.value)}>
        ${A.some(s=>String(s.value)===c)?u:i`<option value="" ?selected=${c===""}>—</option>`}
        ${A.map(s=>i`<option value=${s.value} ?selected=${String(s.value)===c}>${s.label}</option>`)}
      </select></div>${l}</div>`}if(n.select&&n.select.multiple){let A=(n.select.options||[]).map(x=>typeof x=="string"?{value:x,label:x}:x),c=Array.isArray(C)?C:[],s=(x,w)=>{let b=A.map(T=>T.value).filter(T=>T===x?w:c.includes(T));H(b.length?b:void 0)};return i`<div class="fld"><div class="flab">${r}</div><div class="fmulti">
      ${A.map(x=>i`<label class="fchk"><input type="checkbox" .checked=${c.includes(x.value)} @change=${w=>s(x.value,w.target.checked)} />${x.label}</label>`)}
    </div>${l}</div>`}if(n.number){let A=n.number,c=A.unit_of_measurement||"";if(A.mode==="slider"||N0(A)){let s=A.min??0,x=A.max??100,w=A.step??1,b=C??M.default,T=parseFloat(o),F=b??(Number.isFinite(T)?Math.max(s,Math.min(x,T)):s),k=P=>P==null||P===""?"Auto":`${P}${c}`;return i`<div class="fld"><div class="frow nowrap"><label for=${m}>${r}</label>
        <input id=${m} type="range" class="frange" min=${s} max=${x} step=${w} .value=${String(F)}
          @input=${P=>{let S=P.target.parentElement.querySelector(".fval");S&&(S.textContent=k(P.target.value))}}
          @change=${P=>H(Number(P.target.value))} />
        <span class="fval">${k(b)}</span>
        ${C!=null&&M.default===void 0?i`<button class="freset" title="Back to Auto" @click=${()=>H(void 0)}>×</button>`:u}
      </div>${o&&b==null?i`<div class="fauto">Auto: ${o}</div>`:u}${l}</div>`}return i`<div class="fld"><div class="frow"><label for=${m}>${r}</label>
      <input id=${m} type="number" class="ftext num" min=${A.min??u} max=${A.max??u} step=${A.step??"any"} .value=${C??""}
        @change=${s=>H(s.target.value===""?void 0:Number(s.target.value))} />${c?i`<span class="funit">${c}</span>`:u}
    </div>${l}</div>`}return D5(M)?G0(m,C,H,r,l,/background|(^|_)bg(_|$)/i.test(`${M.name} ${r}`)):i`<div class="fld"><div class="frow"><label for=${m}>${r}</label>
    <input id=${m} type=${n.text?.type||"text"} class="ftext" .value=${C??""} @change=${A=>H(A.target.value===""?void 0:A.target.value)} />
  </div>${l}</div>`}function G0(M,C,H,r,L,o=!1){let n=W0(C),m=C==null?"":String(C),l=A=>H(A==="default"?void 0:A==="transparent"?"transparent":A==="theme"?D1.some(([c])=>c===m)?m:D1[0][0]:A==="custom"?E5(m)||"#4fc3f7":m||"#4fc3f7");return i`<div class="fld"><div class="frow"><label for=${M}>${r}</label>
    <span class="fcolor">
      <select id=${M} class="sel mode" @change=${A=>l(A.target.value)}>
        ${[["default","Not set"],...o||n==="transparent"?[["transparent","Transparent"]]:[],["theme","Theme color"],["custom","Custom"],["css","CSS"]].map(([A,c])=>i`<option value=${A} ?selected=${A===n}>${c}</option>`)}
      </select>
      ${n==="theme"?i`<select class="sel" aria-label="Theme color" @change=${A=>H(A.target.value)}>${D1.map(([A,c])=>i`<option value=${A} ?selected=${A===m}>${c}</option>`)}</select>`:n==="custom"?i`<input type="color" class="fswatch" aria-label="Color" .value=${E5(m)||"#4fc3f7"} @change=${A=>H(A.target.value)} />`:n==="css"?i`<input type="text" class="ftext" aria-label="CSS color" .value=${m} @change=${A=>H(A.target.value||void 0)} />`:u}
      ${n!=="default"&&n!=="transparent"?i`<span class="fdot" style="background:${m}"></span>`:u}
    </span>
  </div>${L}</div>`}var N5=D`
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
`;var z5=globalThis.__wsfcHost?.["src/card/lazy.js"];if(!z5)throw new Error("wsfc-editor.js: the card did not provide src/card/lazy.js; update every file of the card together");var{lazyLib:I5}=z5;var W1,U0=async()=>W1||(W1=await I5("wsfc-yaml.js")),Q0=`
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
`,j0=M=>W1.dump(M,{lineWidth:-1,noRefs:!0});function q0(M,C){let H;try{H=W1.load(String(M||""))}catch(r){throw new Error(`Not valid YAML or JSON: ${r.reason||r.message}`)}if(!H||typeof H!="object"||Array.isArray(H))throw new Error("Expected the card's settings (a YAML mapping).");if(H.type&&C&&H.type!==C)throw new Error(`This is a ${H.type} config, not ${C}.`);if(!H.entity)throw new Error("Missing entity: the weather entity (e.g. weather.openweathermap).");return{...H,type:C||H.type}}async function l2(M){try{await U0()}catch(C){alert(String(C?.message||C));return}return K0(M)}function K0({mode:M,config:C,cardType:H,onImport:r}){let L=document.createElement("dialog");L.className="wsfc-io";let o=document.createElement("style");o.textContent=Q0;let n=M==="export";L.innerHTML=`<div class="in">
    <h2>${n?"Export settings":"Import settings"}</h2>
    <p>${n?"The whole card's settings as YAML. Copy them to keep a backup or to use them on another dashboard.":"Paste settings exported from this card (YAML or JSON). They replace the current settings in the editor; press Save in Home Assistant to keep them."}</p>
    <textarea spellcheck="false" aria-label="${n?"Exported settings":"Settings to import"}"></textarea>
    <div class="err" role="alert"></div>
    <div class="bar">
      ${n?'<button class="copy">Copy to clipboard</button><button class="dl">Download file</button>':'<button class="paste">Paste from clipboard</button>'}
      <span class="grow"></span>
      <button class="close">${n?"Close":"Cancel"}</button>
      ${n?"":'<button class="pri apply">Import</button>'}
    </div>
  </div>`,L.prepend(o);let m=L.querySelector("textarea"),l=L.querySelector(".err");n&&(m.value=j0(C));let A=()=>{L.close(),L.remove()};L.querySelector(".close").addEventListener("click",A),L.addEventListener("cancel",c=>{c.preventDefault(),A()}),L.addEventListener("click",c=>{c.target===L&&A()}),L.querySelector(".copy")?.addEventListener("click",async c=>{let s=c.currentTarget;m.focus(),m.select();let x=!1;try{x=document.execCommand("copy")}catch{x=!1}if(!x)try{await navigator.clipboard.writeText(m.value),x=!0}catch{x=!1}s.textContent=x?"Copied \u2713":"Press Ctrl/Cmd+C"}),L.querySelector(".dl")?.addEventListener("click",()=>{let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([m.value],{type:"text/yaml"})),c.download="weather-station-flex-card.yaml",c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),1e3)}),L.querySelector(".paste")?.addEventListener("click",async c=>{try{m.value=await navigator.clipboard.readText(),l.textContent=""}catch{c.currentTarget.textContent="Paste with Ctrl/Cmd+V",m.focus()}}),L.querySelector(".apply")?.addEventListener("click",()=>{try{let c=q0(m.value,H);r?.(c),A()}catch(c){l.textContent=c.message}}),document.body.appendChild(L);try{L.showModal()}catch{L.setAttribute("open","")}return n?(m.focus(),m.select()):m.focus(),L}var G5=globalThis.__wsfcHost?.["src/card/unsaved.js"];if(!G5)throw new Error("wsfc-editor.js: the card did not provide src/card/unsaved.js; update every file of the card together");var{isLive:d2,isUnsaved:q9,setLive:s2,setUnsaved:N1}=G5;var U5=globalThis.__wsfcHost?.["src/card/detected.js"];if(!U5)throw new Error("wsfc-editor.js: the card did not provide src/card/detected.js; update every file of the card together");var{detected:Q5,setDetected:Y9}=U5;var j5=globalThis.__wsfcHost?.["src/card/animation-speed.js"];if(!j5)throw new Error("wsfc-editor.js: the card did not provide src/card/animation-speed.js; update every file of the card together");var{ANIM_SPEEDS:q5,LOW_POWER_VARS:K5,SPEED_MAX:J9,SPEED_MIN:C6,animSpeedVars:Y5}=j5;var X5=globalThis.__wsfcHost?.["src/card/weather-station-flex-card.js"];if(!X5)throw new Error("wsfc-editor.js: the card did not provide src/card/weather-station-flex-card.js; update every file of the card together");var{canCollapseType:J5,panelStyleVars:V6,tileFx:L6}=X5;var C3=globalThis.__wsfcHost?.["src/card/icons.js"];if(!C3)throw new Error("wsfc-editor.js: the card did not provide src/card/icons.js; update every file of the card together");var{OPEN_ICONS_FULL:H3,OPEN_ICONS_SMALL:V3,openIcon:r6}=C3;var L3=globalThis.__wsfcHost?.["src/card/compact.js"];if(!L3)throw new Error("wsfc-editor.js: the card did not provide src/card/compact.js; update every file of the card together");var{COMPACT_TYPES:e3,NEEDS_PANEL:M6,compactRow:o6,compactStyles:i6,compactTiles:a6}=L3;var r3=globalThis.__wsfcHost?.["src/card/resolve.js"];if(!r3)throw new Error("wsfc-editor.js: the card did not provide src/card/resolve.js; update every file of the card together");var{deviceEntities:p2,entityValue:z1,findHealthEntity:A6,findStationEntity:l6,healthDevices:d6,integrationOf:d1,metricChain:s6,metricSensor:t3,metricValue:p6,pick:m6,sourceDefault:M3,stationDeviceEntities:o3,stationDevices:c6,stationStatus:v6}=r3;var i3="__other__",Z1=class extends N{_name(C){let H=this.hass?.states?.[C],r=H?.attributes?.friendly_name||C,L=H&&!["unknown","unavailable"].includes(H.state)&&!C.startsWith("weather.")?` \xB7 ${H.state}${H.attributes?.unit_of_measurement?` ${H.attributes.unit_of_measurement}`:""}`:"";return`${r}${L}`}_emit(C){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:C},bubbles:!1}))}render(){let C=this.value||"",H=[...new Set([...this.candidates||[],...C?[C]:[]])].filter(L=>L!==this.defaultEntity||C===L),r=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return i`
      <div class="row">
        <select class=${C?"":"def"} aria-label=${this.label||"Entity"} @change=${L=>{let o=L.target.value;if(o===i3){this._other=!0,L.target.value=C;return}this._emit(o)}}>
          <option value="" ?selected=${!C}>${r}</option>
          ${H.map(L=>i`<option value=${L} ?selected=${L===C}>${this._name(L)}</option>`)}
          <option value=${i3}>Other entity…</option>
        </select>
        ${C?i`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:u}
      </div>
      ${this._other?i`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:C}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${L=>{L.stopPropagation();let o=L.detail.value?.e;o&&this._emit(o)}}></ha-form></div>`:u}
    `}};R(Z1,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),R(Z1,"styles",D`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",Z1);var Y0=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],I1=M=>typeof M=="string"&&M.startsWith("device:"),f1=class extends N{constructor(){super(),this._open=new Set}get _sources(){let C=this.config?.metric_sources||{};return Array.isArray(C.sources)?C.sources.filter(H=>H?.ref).map(H=>({ref:H.ref,overrides:{...H.overrides||{}},disabled:!!H.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(C){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:C}}}_commit(C){let H=C.filter(A=>A?.ref).map(A=>{let c=Object.fromEntries(Object.entries(A.overrides||{}).filter(([,s])=>s));return{ref:A.ref,...Object.keys(c).length?{overrides:c}:{},...A.disabled?{disabled:!0}:{}}}),r={...this.config?.metric_sources||{}};delete r.primary,delete r.fallback,delete r.custom,delete r.device_map,H.length?r.sources=H:delete r.sources;let L=A=>(this.hass?.states?.[A]?.attributes?.supported_features&7)!==0,o=A=>A.map(c=>c.ref).filter(c=>typeof c=="string"&&c.startsWith("weather.")),n=o(H.filter(A=>!A.disabled)),m=o(H),l=n.find(L)||n[0]||m.find(L)||m[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:l,metric_sources:Object.keys(r).length?r:void 0}}))}_info(C){let H=this.hass;if(I1(C)){let L=H?.devices?.[C.slice(7)],o=p2(H,C.slice(7))[0];return{icon:"mdi:access-point",name:L?.name_by_user||L?.name||C.slice(7),kind:"Station device",sub:[L?.manufacturer,L?.model].filter(Boolean).join(" "),integ:d1(H,o)}}let r=H?.states?.[C];return C.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:r?.attributes?.friendly_name||C,kind:"Weather entity",sub:"forecast + condition",integ:d1(H,C)}:{icon:"mdi:eye-outline",name:r?.attributes?.friendly_name||C,kind:"Sensor",sub:C,integ:d1(H,C)}}_candidates(C,H){let r=this.hass;if(!I1(C))return[];let L=H&&r.states[H]?.attributes?.unit_of_measurement,o=C.slice(7),n=r.devices?.[o]?.config_entries||[];return[...new Set([o,...Object.entries(r.devices||{}).filter(([,l])=>(l.config_entries||[]).some(A=>n.includes(A))).map(([l])=>l)])].flatMap(l=>p2(r,l)).filter(l=>l.startsWith("sensor.")&&r.states[l]?.attributes?.unit_of_measurement&&(!L||r.states[l].attributes.unit_of_measurement===L)).sort()}render(){if(!this.hass)return u;let C=this._sources,H=this._station(C),r=C.some(L=>L.ref.startsWith("weather.")&&!L.disabled);return i`
      <div class="list">
        ${C.map((L,o)=>this._source(L,o,C,H))}
      </div>
      ${r?u:i`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(C):i`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(C,H,r,L){let o=this._info(C.ref),n=this._open.has(C.ref),m=Y0.map(([s,x])=>{let w=M3(L,this.hass,C.ref,s),b=C.ref.startsWith("weather.")?this.hass.states[C.ref]?.attributes?.[s]!=null:!!w;return{k:s,label:x,def:C.ref.startsWith("weather.")?b?C.ref:null:w,ov:C.overrides[s]||"",has:b||!!C.overrides[s]}}),l=m.filter(s=>s.has).length,A=s=>{let x=r.map(w=>({...w,overrides:{...w.overrides}}));s(x),this._commit(x)},c=()=>{let s=new Set(this._open);s.has(C.ref)?s.delete(C.ref):s.add(C.ref),this._open=s};return i`<div class="src ${n?"open":""} ${C.disabled?"off":""}">
      <div class="hd" @click=${c} role="button" tabindex="0" aria-expanded=${String(n)} @keydown=${s=>(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),c())}>
        <span class="rank">${H+1}</span>
        <ha-icon class="lead" icon=${o.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${o.name}${C.disabled?i` <span class="tag">hidden</span>`:u}</div>
          <div class="sb"><span class="pill">${o.kind}</span>${o.integ?i`<span class="pill integ">${o.integ}</span>`:u}<span>${l} value${l===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${s=>s.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${H===0} @click=${()=>A(s=>[s[H-1],s[H]]=[s[H],s[H-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${H===r.length-1} @click=${()=>A(s=>[s[H+1],s[H]]=[s[H],s[H+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${C.disabled?"Use this source":"Skip this source"} @click=${()=>A(s=>s[H].disabled=!s[H].disabled)}><ha-icon icon=${C.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>A(s=>s.splice(H,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?i`<div class="bd">
            ${o.sub?i`<div class="meta">${o.sub}</div>`:u}
            <div class="tbl">
              ${m.filter(s=>s.has||I1(C.ref)).map(s=>{let x=s.ov||s.def,w=x&&!x.startsWith("weather.")?z1(this.hass,x):null,b=x?.startsWith("weather.")?this.hass.states[x]?.attributes?.[s.k]:null;return i`<span class="k">${s.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${s.ov} .defaultEntity=${s.def}
                    .defaultLabel=${C.ref.startsWith("weather.")&&!s.ov?s.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(C.ref,s.def)} label=${s.label}
                    @value-changed=${T=>A(F=>F[H].overrides[s.k]=T.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${w?`${w.value} ${w.unit}`:b!=null?String(b):""}</span>`})}
            </div>
            ${C.ref.startsWith("weather.")?i`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:u}
          </div>`:u}
    </div>`}_addForm(C){let H=r=>{if(!r||C.some(n=>n.ref===r)){this._adding=!1;return}this._adding=!1;let L=C.slice(),o=L.findIndex(n=>n.ref.startsWith("weather."));I1(r)&&o>=0?L.splice(o,0,{ref:r,overrides:{}}):L.push({ref:r,overrides:{}}),this._commit(L)};return i`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${r=>{r.stopPropagation(),H(r.detail.value?.d&&`device:${r.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${r=>{r.stopPropagation(),H(r.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};R(f1,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),R(f1,"styles",D`
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
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",f1);var a3=globalThis.__wsfcHost?.["src/panels/graph.js"];if(!a3)throw new Error("wsfc-editor.js: the card did not provide src/panels/graph.js; update every file of the card together");var{PRESET_SERIES:m2,WsfcGraph:b6}=a3;var n3=globalThis.__wsfcHost?.["src/panels/statistics.js"];if(!n3)throw new Error("wsfc-editor.js: the card did not provide src/panels/statistics.js; update every file of the card together");var{SGCC_PRESETS:A3,STAT_PRESETS:l3,statisticsCard:O6,statisticsEngine:d3}=n3;var s1=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],X0=M=>/^#[0-9a-f]{6}$/i.test(M||"")?M:/^#[0-9a-f]{3}$/i.test(M||"")?"#"+M.slice(1).split("").map(C=>C+C).join(""):"#888888";function J0(M){if(M.type==="statistics"){let C=M.preset||"temps",H=A3[C]||{};return((Array.isArray(M.metrics)&&M.metrics.length?M.metrics:H.metrics||l3[C]?.metrics)||[]).map((L,o)=>({metric:L,color:M.colors?.[L],defColor:H.series?.[L]?.color||z[L]?.color||s1[o%s1.length],entity:M.entity_overrides?.[L]||"",key:"map"}))}return Array.isArray(M.series)&&M.series.length?M.series.map((C,H)=>({metric:C.metric,idx:H,color:C.color,defColor:z[C.metric]?.color||s1[H%s1.length],entity:C.entity||"",label:C.label,key:"list"})):(m2[M.type]||m2.graph).map((C,H)=>({metric:C.metric,color:M.colors?.[C.metric],defColor:C.color||z[C.metric]?.color||s1[H%s1.length],entity:M.entities?.[C.metric]||"",key:"map"}))}var h1=class extends N{_set(C,H,r){let L=a1(this.panel);if(C.key==="list")L.series[C.idx]=q({...L.series[C.idx],[H]:r||void 0});else{let o=H==="color"?"colors":L.type==="statistics"?"entity_overrides":"entities";L[o]=q({...L[o]||{},[C.metric]:r||void 0}),Object.keys(L[o]).length||delete L[o]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:L}}))}_candidates(C){let H=C&&this.hass.states[C]?.attributes?.unit_of_measurement;return o3(this.station,this.hass).filter(r=>r.startsWith("sensor.")&&(!H||this.hass.states[r]?.attributes?.unit_of_measurement===H))}render(){if(!this.hass||!this.panel)return u;let C=J0(this.panel),H=this.panel.type!=="statistics"||d3(this.panel)==="sgcc";return i`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${C.map(r=>{let L=E1(r.metric,this.station,this.hass),o=r.color||r.defColor;return i`<span class="k">${r.label||z[r.metric]?.label||r.metric||"Series"}</span>
          <span class="c">
            ${H?i`<input type="color" .value=${X0(o)} title="Line color" aria-label="Line color" @change=${n=>this._set(r,"color",n.target.value)} />
                ${r.color?i`<button type="button" title="Default color" @click=${()=>this._set(r,"color","")}>↺</button>`:u}`:i`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${r.entity} .defaultEntity=${L} .candidates=${this._candidates(L)} label=${`${r.metric} sensor`}
            @value-changed=${n=>this._set(r,"entity",n.detail.value)}></wsfc-entity-select>`})}
    </div>`}};R(h1,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),R(h1,"styles",D`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",h1);var G1=[["sunny","Sunny"],["clear-night","Clear night"],["partlycloudy","Partly cloudy"],["cloudy","Cloudy"],["fog","Fog"],["rainy","Rainy"],["pouring","Pouring"],["lightning","Lightning"],["lightning-rainy","Lightning and rain"],["hail","Hail"],["snowy","Snowy"],["snowy-rainy","Sleet (snow and rain)"],["windy","Windy"],["windy-variant","Windy with clouds"],["exceptional","Exceptional"]],S1=class extends N{render(){let C=this.config||{},H=this.hass,r=H?.states?.[C.entity],L=this.condition||r?.state||"partlycloudy",o=this.time==="night"||this.time!=="day"&&L==="clear-night",n=r?.attributes||{},m=[C.anim_low_power?K5:"",...Y5(C)].filter(Boolean).join(";"),l=(G1.find(([A])=>A===L)||[,L])[1];return i`<div class="box" style=${m}>
      <wsfc-animation-provider .hass=${H} .wsfcNight=${o}
        .weatherEntity=${{...r||{entity_id:C.entity,attributes:{}},state:L}}
        .config=${{entity:C.entity,show_condition_effects:C.background_effects??!0,show_moon_phase:C.background_moon_phase??!0,fog_density:C.fog_density,wind_density:C.wind_density,lightning_interval:C.lightning_interval,lightning_intensity:C.lightning_intensity,lightning_bolts:C.lightning_bolts}}
        .currentForecast=${{wind_speed:n.wind_speed,wind_bearing:n.wind_bearing}}></wsfc-animation-provider>
      <span class="tag">${l} · ${o?"Night":"Day"}</span>
    </div>`}};R(S1,"properties",{hass:{attribute:!1},config:{attribute:!1},condition:{},time:{}}),R(S1,"styles",D`
    :host { display: block; }
    .box { position: relative; height: 200px; border-radius: var(--ltek-radius, 12px); overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); border: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
    .tag { position: absolute; left: 10px; bottom: 8px; z-index: 2; font-size: var(--ltek-fs-small, 12px); font-weight: 600; padding: 3px 9px; border-radius: 999px;
      background: rgba(0, 0, 0, 0.45); color: #fff; }
  `);customElements.get("wsfc-bg-preview")||customElements.define("wsfc-bg-preview",S1);var s3=globalThis.__wsfcHost?.["src/card/condition.js"];if(!s3)throw new Error("wsfc-editor.js: the card did not provide src/card/condition.js; update every file of the card together");var{clearSkyRadiation:G6,conditionSummary:p3,deriveHass:U6,ensureSolarScale:Q6,lightDetails:j6,resetSolarScale:q6,skyClearness:K6,solarScale:Y6,stationCondition:X6,sunElevation:J6}=s3;var C7=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],H7={wind_bearing:"Wind direction",precipitation:"Rain rate"},j1=[{name:"condition_source",label:"Current condition from",selector:{select:{options:[{value:"entity",label:"The weather entity"},{value:"station",label:"Your station's readings (the entity fills in the rest)"}]}},default:"entity",helper:"With the station: rain rate, solar radiation (or light), humidity, wind, temperature and the lightning sensor decide sunny, partly cloudy, cloudy, rain, snow, fog, windy and lightning. The hero, bulletin and background follow it. At night, and when the sun is low, the entity's view of the sky is used."},{name:"station_solar_scale",label:"Clear-sky calibration",when:M=>M.condition_source==="station",selector:{number:{min:20,max:160,step:5,mode:"slider",unit_of_measurement:"%"}},helper:"Auto (not set): learned from the sensor's last 10 days against the clear-sky model, so it's judged against its own clear days. Set it to force a value: lower if clear days read as cloudy, higher if cloudy days read as sunny."},{name:"station_windy_mph",label:"Windy from",when:M=>M.condition_source==="station",selector:{number:{min:10,max:60,step:1,mode:"slider",unit_of_measurement:"mph"}},default:25},{name:"station_pouring_inh",label:"Pouring from",when:M=>M.condition_source==="station",selector:{number:{min:.1,max:1,step:.05,mode:"slider",unit_of_measurement:"in/h"}},default:.3}],_1=[["Background",[{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"},{value:"image",label:"Image \u2014 upload one or use a URL"}]}},helper:"With an animated or image background, panels become see-through and the hero stops drawing its own."}]],["Animation",[{name:"background_effects",label:"Animation effects",when:M=>M.background==="animated",selector:{select:{multiple:!0,options:[["rain","Rain"],["snow","Snow"],["lightning","Lightning"],["sky","Sky"],["moon","Moon"],["sun","Sun"],["cloud","Clouds"],["fog","Fog"],["hail","Hail"],["wind","Wind gusts"],["exceptional","Unusual weather glow"]].map(([M,C])=>({value:M,label:C}))}},default:["rain","snow","lightning","sky","moon","sun","cloud","fog","hail","wind","exceptional"],helper:"Which effects the weather animation draws. At night it shows the dark sky and the moon instead of the sun. Rain, snow and storms get an overcast sky and cloud deck (Sky, Clouds)."},{name:"background_moon_phase",label:"Show moon phase",when:M=>M.background==="animated",selector:{boolean:{}},default:!0,helper:"Shade the night-time moon to the current lunar phase (off: a full moon)."},{name:"anim_low_power",label:"Low-power animation",when:M=>M.background!=="image",selector:{boolean:{}},default:!1,helper:"For tablets and other low-powered screens: no panel blur while the background animates, each cloud drawn once on its own, and simpler cloud edges. Smoother drift; clouds look a little softer."},{name:"anim_speed",label:"Overall speed",when:M=>M.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"Every animation at once (100% = normal, 50% = half as fast), for the card background and the hero's own animation. Per-effect speeds below multiply it."},...q5.map(([M,,C])=>({name:M,label:C,sub:"Per-effect speeds",subIcon:"mdi:speedometer",when:H=>H.background!=="image",selector:{number:{min:10,max:150,step:5,mode:"slider",unit_of_measurement:"%"}},default:100})),{name:"fog_density",label:"Fog density",when:M=>M.background==="animated"&&(M.background_effects??["fog"]).includes("fog"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How thick the fog is: the number of mist banks and how much they hide."},{name:"lightning_interval",label:"Time between strikes",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:2,max:90,step:1,mode:"slider",unit_of_measurement:"s"}},default:12,helper:"In storms: roughly how often the clouds light up (each strike comes at its own irregular time around this)."},{name:"lightning_bolts",label:"Lightning bolts",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:20,helper:"How many of the flashes drop a visible bolt from the cloud (the others light the clouds from inside)."},{name:"lightning_intensity",label:"Lightning intensity",when:M=>M.background==="animated"&&(M.background_effects??["lightning"]).includes("lightning"),selector:{number:{min:10,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How brightly the clouds and the sky light up."},{name:"wind_density",label:"Wind density",when:M=>M.background==="animated"&&(M.background_effects??["wind"]).includes("wind"),selector:{number:{min:30,max:200,step:10,mode:"slider",unit_of_measurement:"%"}},default:100,helper:"How many wisps of air blow across in windy weather."}]],["Image",[{name:"background_image",when:M=>M.background==="image",selector:{media:{accept:["image/*"],image_upload:!0}},helper:"Image background: upload a PNG, JPG, WEBP\u2026 or pick one from your media."},{name:"background_image_url",when:M=>M.background==="image",selector:{text:{type:"url"}},helper:"Image background: or an image URL (wins over the upload), e.g. /local/images/sky.jpg."},{name:"background_image_fit",when:M=>M.background==="image",selector:{select:{options:[{value:"cover",label:"Fill (crop to fit)"},{value:"contain",label:"Fit (whole image)"},{value:"tile",label:"Tile"}]}},default:"cover"},{name:"background_dim",when:M=>M.background==="image",selector:{number:{min:0,max:.9,step:.05,mode:"slider"}},default:.25,helper:"Image background: darken it so text stays readable (0 = off)."}]]],O1=[["Card",[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]],["Panels",[{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"With a card background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},when:M=>!M.anim_low_power,helper:"With a card background: blur behind panels. Default 6 (off with Low-power animation)."},{name:"panel_radius",selector:{number:{min:0,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Auto: your theme's card corner radius (shown above). Move the slider to set your own; \xD7 goes back to Auto."},{name:"panel_shadow",selector:{select:{options:[{value:"none",label:"None"},{value:"soft",label:"Soft"},{value:"medium",label:"Medium"},{value:"strong",label:"Strong"}]}},default:"none"},{name:"panel_border_width",selector:{number:{min:0,max:6,step:.5,mode:"slider",unit_of_measurement:"px"}},helper:"Border (default none)."},{name:"panel_border_color",selector:{text:{}},helper:"Not set: the theme's divider color."},{name:"panel_glow",selector:{boolean:{}},default:!1,helper:"A soft glow around each panel."},{name:"panel_glow_color",when:M=>!!M.panel_glow,selector:{text:{}},helper:"Not set: the border color, else the theme's primary color."},{name:"panel_glow_size",when:M=>!!M.panel_glow,selector:{number:{min:2,max:40,step:1,mode:"slider",unit_of_measurement:"px"}},default:10}]],["Alerts bar",[{name:"alerts_bar",label:"Alerts bar",selector:{boolean:{}},default:!1,helper:"A thin row at the top that appears only while something needs attention: heat or frost (the Frost & heat watch rules), lightning within 10 miles in the last 30 minutes, and weather alerts. Tap one to open its panel."},{name:"alerts_watch",label:"Heat and frost",when:M=>!!M.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_lightning",label:"Lightning nearby",when:M=>!!M.alerts_bar,selector:{boolean:{}},default:!0},{name:"alerts_entity",label:"Weather alerts sensor",when:M=>!!M.alerts_bar,selector:{entity:{domain:"sensor"}},helper:"Optional, e.g. the NWS Alerts integration's sensor (its Alerts attribute)."}]]];function m3(M,C,H,r){return[{name:M,label:C,selector:{select:{options:[...H.map((L,o)=>({value:L,label:`mdi:${L}${o?"":" (default)"}`})),{value:"custom",label:"Custom icon\u2026"}]}},default:H[0],helper:r},{name:`${M}_custom`,label:"Custom icon",when:L=>L[M]==="custom",selector:{icon:{}},helper:"Any Home Assistant icon, e.g. mdi:arrow-expand-down."}]}var q1=[["Screen fit & sizing",[{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"screen_fit",label:"Screen fit",selector:{select:{options:[{value:"none",label:"Off \u2014 panels are their set heights; the page scrolls"},{value:"rows",label:"Share the screen height \u2014 panels grow to fit their content"},{value:"strict",label:"Exact heights \u2014 content scrolls inside its panel"},{value:"scale",label:"Auto-fit \u2014 exact heights, and the contents scale to the screen"}]}},default:"rows",helper:"Share and Exact apply in Full screen. Auto-fit takes the layout and sizes you set as the design for the Screen guide's size (Layout Map \u2192 Screen guide) and scales each panel's contents to every other screen, smaller where they'd still overflow."},{name:"panel_fill",label:"Panels fill their space",selector:{boolean:{}},default:!1,helper:"Each panel with a set height scales its contents up or down to the largest size that fits the panel, between Smallest and Largest content scale. Text size, Icon size and the other size sliders then change the proportions, and the panel still fits. Each panel can turn it on or off (Size and Scaling \u2192 Fill the panel). The hero and Wind fit themselves; maps aren't scaled."},{name:"auto_fit_min",label:"Smallest content scale",when:M=>M.screen_fit==="scale"||!!M.panel_fill,selector:{number:{min:30,max:100,step:5,mode:"slider",unit_of_measurement:"%"}},default:60,helper:"Below this a panel scrolls instead, so text stays readable."},{name:"auto_fit_max",label:"Largest content scale",when:M=>M.screen_fit==="scale"||!!M.panel_fill,selector:{number:{min:100,max:250,step:5,mode:"slider",unit_of_measurement:"%"}},default:150,helper:"On screens bigger than the design."},{name:"panel_overflow",label:"When a panel's content doesn't fit",when:M=>!(M.layout==="fullscreen"&&["strict","scale"].includes(M.screen_fit)),selector:{select:{options:[{value:"grow",label:"Grow \u2014 the panel gets taller (and its row with it)"},{value:"scroll",label:"Scroll \u2014 the panel keeps its height, with a scroll bar inside"}]}},default:"grow",helper:"For panels with a set height (Height above 0); each panel can override this. Scroll locks every panel to its size in any layout; Strict fit does the same in full screen."},{name:"layout_gaps",label:"Gaps between panels",selector:{select:{options:[{value:"close",label:"Close up \u2014 panels move up into empty space"},{value:"keep",label:"Keep \u2014 panels stay where they're placed"}]}},default:"close",helper:"After you move a panel in the Layout Map, or when one is hidden (by its button, or when it has nothing to show)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}]]],K1=[["Collapsed panels",[{name:"collapsed_view",label:"Default view when collapsed",selector:{select:{options:[{value:"minimal",label:"Minimal \u2014 the title and a line of info (e.g. 7 strikes today)"},{value:"compact",label:"Compact \u2014 one row of tiles with all the data"}]}},default:"minimal",helper:"For panels with Collapse button on; panels without a tiles view use Minimal. Each panel can override it \u2014 Convert all now clears those overrides."},{name:"collapsed_open",label:"A folded panel opens",selector:{select:{options:[{value:"auto",label:"Automatic \u2014 over the other panels in full screen or Auto-fit, else in place"},{value:"inplace",label:"In place \u2014 the panel grows, the others move"},{value:"overlay",label:"Over the other panels \u2014 nothing moves; tap outside or Esc to close"},{value:"popup",label:"As a pop-up"}]}},default:"auto",helper:"Each panel can override this (Collapse \u2192 Opens)."},...m3("open_icon_small","Small pop-over icon",V3,"On a folded panel that opens over the others."),...m3("open_icon_full","Full-size icon",H3,"Expand to the whole card, tap-to-open tiles and panels that open as a pop-up."),{name:"collapse_title_tap",label:"Tap the title to fold / unfold",selector:{boolean:{}},default:!0,helper:"For panels with Collapse button on (each panel can override this)."},{name:"show_collapse_hint",label:"Hint under the title while folded",selector:{boolean:{}},default:!1,helper:'e.g. "Tap title to show" (off by default: the open button already says it).'},{name:"collapse_hint",label:"Hint text",when:M=>!!M.show_collapse_hint,selector:{text:{}},helper:'Default "Tap title to show".'},{name:"collapsed_info",label:"Info in the header while folded",selector:{select:{options:[{value:"summary",label:"The panel's summary (e.g. strikes today, rain today)"},{value:"off",label:"None"}]}},default:"summary"},...f5]]],w1=[{name:"remember",selector:{boolean:{}},default:!0,helper:"Keep which panels were shown or hidden with the panel buttons after a refresh, in each browser. Off: every load starts from the panels' Shown setting (the eye icon)."}],V7=[...j1,...[..._1,...O1,...q1,...K1].flatMap(([,M])=>M)],H1={layout:"auto",panel_bar:!0,remember:!0,screen_fit:"rows",layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6},Q1={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember Panel Button States",station_device:"Weather station device",layout_size:"Layout size",fit_strict:"Strict fit to screen dimensions",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",background_image:"Background image",background_image_url:"Background image URL",background_image_fit:"Image fit",background_dim:"Darken image",panel_radius:"Corner radius",panel_shadow:"Shadow",panel_border_width:"Border width",panel_border_color:"Border color",panel_glow:"Glow",panel_glow_color:"Glow color",panel_glow_size:"Glow size",rose_engine:"Wind rose",fit:"Fit to the panel",show_view_buttons:"View buttons",readings_position:"Readings",chart_position:"Chart position",show_legend:"Rose legend",wr_bars:"Speed bars",wr_corners:"Corner info",wr_stats:"Min / avg / max",wr_buttons:"Buttons",wr_buttons_position:"Button position",wr_period:"Default period",wr_beaufort:"Bar scale",wr_arrow:"Direction arrow",windrose_chart:"Chart with the Wind Rose Card",compass_arrow_size:"Pointer size",compass_arrow_color:"Pointer color",wr_arrow_size:"Arrow size",wr_arrow_color:"Arrow color",wr_speed_arrows:"Speed arrows",wr_speed_arrow_size:"Speed arrow size",stats_items:"Show",stats_align:"Alignment",chart_legend:"Chart legend",dial_scale:"Size",wr_scale:"Size",corner_speed:"Speed",corner_direction:"Direction",corner_gust:"Gust",corner_label_size:"Label size",corner_value_size:"Value size",corner_color:"Text color",stats_size:"Text size",stats_weight:"Text weight",stats_color:"Text color",windrose_preset:"Wind Rose Card preset",windrose:"Wind Rose Card options",auto_scale:"Set scale to Auto",show_time:"Show the time",show_seconds:"Seconds",time_format:"Time format",show_date:"Show the date",date_format:"Date format",align:"Alignment",auto_size:"Auto size",time_size:"Time size",date_size:"Date size",time_weight:"Time weight",date_color:"Date color",scale:"Auto scaling",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",hide_when_none:"Hide the panel when all are None",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town / area text",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source text",show_source:"Show the source",show_location:"Show the town / area",hide_none:"Hide species at None",show_nothing:'Show the "nothing in the air" text',nothing_text:'"Nothing in the air" text',"entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},v3=(M,C)=>C.split(".").reduce((H,r)=>H==null?H:H[r],M);function L7(M,C,H){let r=C.split("."),L=M;r.slice(0,-1).forEach(n=>L=L[n]=L[n]&&typeof L[n]=="object"?{...L[n]}:{});let o=r[r.length-1];H===void 0||H===""||H===null||Array.isArray(H)&&!H.length?delete L[o]:L[o]=H}function U1(M,C,H={}){let r={};for(let L of C){let o=v3(M,L.name);r[L.name]=o!==void 0?o:H[L.name]!==void 0?H[L.name]:L.default}return r}function c2(M,C,H,r={}){let L=a1(M);for(let o of C){let n=H[o.name],m=r[o.name]!==void 0?r[o.name]:o.default;m!==void 0&&JSON.stringify(n)===JSON.stringify(m)&&(n=void 0),L7(L,o.name,n)}return q(L)}var c3={air_quality:[["Tablet compact",{layout:"tiles",show_scale:!1,show_location:!1,show_source:!1,content_scale:85,content_width:70,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{layout:"scale",show_scale:null,show_location:null,show_source:null,content_scale:null,content_width:null,content_height:null,compact:null}]],pollen:[["Tablet compact",{hide_when_off_season:!0,hide_when_none:!0,show_season:!1,show_source:!1,show_location:!1,content_height:60,compact:null}],["Tiles row",{compact:!0}],["Full detail",{show_season:null,show_source:null,show_location:null,content_height:null,compact:null}]],rain:[["Essentials",{show_rows:["rain_rate","rain_today","rain_24h","rain_event"],show_normal:!1,compact:null}],["Everything",{show_rows:["rain_rate","rain_hour","rain_today","rain_24h","rain_event","rain_week","rain_month","rain_year","last_rain"],show_normal:null,compact:null}],["Tiles row",{compact:!0}]],garden:[["Frost only",{show_soil:!1,show_water:!1,show_gdd:!1}],["Everything",{show_outlook:null,show_season:null,show_gdd:null,show_soil:null,show_water:null}]],records:[["Area only",{show_station:!1}],["Today only",{show_month:!1,show_all_time:!1}],["Everything",{show_station:null,show_today:null,show_month:null,show_all_time:null}]],lightning:[["Quiet",{hide_when_zero:!0,show_battery:!1,show_note:!1}],["Everything",{hide_when_zero:null,show_battery:null,show_note:null}]],wind:[["Rose, chart on demand",{view:"rose",chart_mode:"popover"}],["Compass and chart",{view:"compass",chart_mode:null}]],radar:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],wind_map:[["Light on tablets",{start_paused:!0,collapsible:!0,collapsed:!0}],["Live",{start_paused:null,collapsed:null}]],frost_watch:[["Tiles row",{compact:!0}],["Full",{compact:null}]],vpd:[["Number only",{show_plant:!1,show_scale:!1,show_note:!1}],["Full",{show_plant:null,show_scale:null,show_note:null,show_advice:null}]]},e7=M=>M.type==="metric"?z[M.metric]?.label||"Metric":(I(M)?.label||M.type).replace(/ \(.*\)$/,"");function g1(M,C,H={}){let r=v3(M,C.name);if(r===void 0)return!1;let L=H[C.name]!==void 0?H[C.name]:C.default;return L===void 0||JSON.stringify(r)!==JSON.stringify(L)}var u3=["span","rows","display","span_medium","span_narrow","rows_compact"];function r7(M,C){let H=M[C],r=M[C+1],L=m=>{let l={...m};for(let A of u3)delete l[A];return l},o=M.slice();if(r.type==="stack"&&r.direction==="vertical"){let m=W(H)+W(r);return o.splice(C,2,q({...r,span:Math.max(G(H),G(r)),rows:m||void 0,panels:[L(H),...r.panels||[]]})),o}let n=W(H)+W(r);return o.splice(C,2,q({type:"stack",direction:"vertical",span:Math.max(G(H),G(r)),rows:n||void 0,panels:[L(H),L(r)]})),o}function x3(M,C,H){let r={...M[H]};for(let o of u3)delete r[o];let L=M.slice();return L[C]={...L[C],panels:[...L[C].panels||[],r]},L.splice(H,1),L}function Z3(M,C,H){let r=M[C],L=(r.panels||[]).slice(),[o]=L.splice(H,1),n=M.slice(),m=q({...o,span:G(r),rows:void 0});return L.length?n.splice(C,1,{...r,panels:L},m):n.splice(C,1,m),n}function t7(M){let C=I(M);return{span:C.span,rows:C.rows,display:"grid",in_bar:R1({...M,in_bar:void 0}),show_title:o2.has(M.type)?!!M.title:!0}}function v2(M){let C=I(M);return M.title?M.title:M.type==="metric"?z[M.metric]?.label||M.label||"Metric tile":M.type==="day"?["Today","Tomorrow"][Number(M.day_offset??1)]||`Day +${M.day_offset}`:C.label}var b1=class extends N{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(C){this._config=C,this._savedJson==null&&(this._savedJson=JSON.stringify(C)),N1(JSON.stringify(C)!==this._savedJson)}shouldUpdate(C){if(C.size===1&&C.has("hass")){let H=C.get("hass"),r=this.hass;if(H&&r&&H.entities===r.entities&&H.devices===r.devices&&H.areas===r.areas&&H.themes===r.themes&&H.locale===r.locale&&H.language===r.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}connectedCallback(){super.connectedCallback(),this._onDetected||(this._onDetected=()=>(this._open==="general"||this._open==="behavior")&&this.requestUpdate()),window.addEventListener("wsfc-detected",this._onDetected)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("wsfc-detected",this._onDetected),clearTimeout(this._hassTimer),this._hassTimer=null,this._savedJson=null,N1(!1),s2(!1)}get _panels(){return S5(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(C){this._config=C,N1(JSON.stringify(C)!==this._savedJson),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:C},bubbles:!0,composed:!0}))}_setPanels(C,H){let r={...this._withoutLegacyHero(),panels:C};for(let[L,o]of Object.entries(H||{}))o===void 0?delete r[L]:r[L]=o;this._emit(r)}_withoutLegacyHero(){let{hero:C,...H}=this._config;return C===!1?{...H,hero:C}:H}render(){return!this.hass||!this._config?u:i`
      <div class="ed">
        <div class="hdr"><span class="name">${u5}</span><span class="ver">v${x5}</span>
          <span class="io">
            <button class="btn sm ghost" title="Copy the whole card's settings as YAML" @click=${()=>l2({mode:"export",config:this._config,cardType:`custom:${t2}`})}><ha-icon icon="mdi:export"></ha-icon>Export</button>
            <button class="btn sm ghost" title="Replace the settings with pasted YAML or JSON" @click=${()=>l2({mode:"import",cardType:`custom:${t2}`,onImport:C=>{this._flexEds.clear(),this._openPanel=null,this._emit(C),this.requestUpdate()}})}><ha-icon icon="mdi:import"></ha-icon>Import</button>
          </span></div>
        <label class="live" title="While editing, the animated background, blur and the radar and Windy maps are paused to keep the editor fast. Tick to see them running (not saved).">
          <input type="checkbox" .checked=${d2()} @change=${C=>{s2(C.target.checked),this.requestUpdate()}} />
          <ha-icon icon="mdi:play-circle-outline"></ha-icon><span>Live preview</span>
          <span class="live-hint">${d2()?"animations and maps running":"animations and maps paused while editing"}</span>
        </label>
        <div class="findbar">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input class="ftext find" type="search" placeholder="Find a setting (e.g. compact, blur, rain)" .value=${this._q||""} aria-label="Find a setting"
            @input=${C=>{this._q=C.target.value,this.requestUpdate()}} @keydown=${C=>C.key==="Escape"&&(this._q="",this.requestUpdate())} />
          <label class="onlychg" title="Show only the settings you've changed from their defaults"><input type="checkbox" .checked=${!!this._onlyChanged} @change=${C=>{this._onlyChanged=C.target.checked,this.requestUpdate()}} />Only changed</label>
        </div>
        ${this._q&&this._q.trim().length>=2?this._searchResults(this._q.trim()):u}
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("background","mdi:image-filter-hdr","Background",()=>this._general(_1),(this._config.background||"none")==="animated"?this._bgPreviewButton():u)}
        ${this._section("general","mdi:palette-outline","Appearance",()=>this._general(O1))}
        ${this._section("behavior","mdi:fit-to-screen-outline","Screen fit & layout",()=>this._general(q1))}
        ${this._section("buttons","mdi:gesture-tap-button","Panel behavior",()=>i`<div class="agrp"><div class="agrp-t">Panel buttons</div>${this._buttonsEditor()}</div>${this._general(K1)}${this._convertBar()}`)}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout Map",()=>this._layoutEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_searchIndex(){let C=[],H=L=>L.label||Q1[L.name]||L.name.replace(/[._]/g," ");for(let[L,o,n]of[["station","Weather station",[["Current condition",j1]]],["background","Background",_1],["general","Appearance",O1],["behavior","Screen fit & layout",q1],["buttons","Panel behavior",K1]])for(let[m,l]of n)for(let A of l)C.push({label:H(A),help:A.helper||"",where:`${o} \u203A ${m}`,go:{open:L},f:A});for(let L of w1)C.push({label:H(L),help:L.helper||"",where:"Panel behavior \u203A Panel buttons",go:{open:"buttons"},f:L});let r=(L,o,n)=>{let m=I(L);if(!m)return;let l=L.title||e7(L),A=(n?$1:B1).map(s=>({f:s,sec:s.section||"Size and Scaling"})),c=m.groups?m.groups.flatMap(([s,x],w)=>x.map(b=>({f:b,sec:`${m.label} options`,sub:w?s:null}))):(m.schema||[]).map(s=>({f:s,sec:s.section||(["content_width","content_height"].includes(s.name)?"Size and Scaling":`${m.label} options`)}));for(let{f:s,sec:x,sub:w}of[...A,...c])C.push({label:H(s),help:s.helper||"",where:`Panels \u203A ${l} \u203A ${x}${w?` \u203A ${w}`:""}`,go:{open:"panels",panel:o,type:L.type,sec:x,sub:w},f:s})};return this._panels.forEach((L,o)=>{r(L,`${o}`,!1),L.type==="stack"&&(L.panels||[]).forEach((n,m)=>n&&r(n,`${o}.${m}`,!0))}),C}_searchResults(C){let H=C.toLowerCase().split(/\s+/).filter(Boolean),r=this._searchIndex().filter(L=>{let o=`${L.label} ${L.help} ${L.where} ${L.f.name}`.toLowerCase();return H.every(n=>o.includes(n))});return r.sort((L,o)=>(o.label.toLowerCase().includes(H[0])?1:0)-(L.label.toLowerCase().includes(H[0])?1:0)),i`<div class="finds" role="listbox" aria-label="Matching settings">
      ${r.length?r.slice(0,40).map(L=>i`<button class="find-hit" role="option" @click=${()=>this._goTo(L)}><b>${L.label}</b><span>${L.where}</span></button>`):i`<div class="fhelp">No setting matches "${C}".</div>`}
      ${r.length>40?i`<div class="fhelp">${r.length-40} more — type more of the name.</div>`:u}
    </div>`}async _goTo(C){let H=C.go;if(this._q="",this._open=H.open,H.panel!=null){this._openPanel=H.panel,this._flatOpen||(this._flatOpen=new Map);for(let L of this._flatOpen.keys())L.startsWith(`${H.type}|`)&&this._flatOpen.set(L,!1);this._flatOpen.set(`${H.type}|${H.sec}`,!0),H.sub&&(this._subOpen||(this._subOpen=new Set),this._subOpen.add(`${H.type}:${H.sub}`))}this.requestUpdate(),await this.updateComplete,await new Promise(L=>requestAnimationFrame(L));let r=[...this.renderRoot.querySelectorAll(".fld, .frow, .fchk, label")].find(L=>L.textContent.trim().startsWith(C.label));r&&(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add("flash"),setTimeout(()=>r.classList.remove("flash"),1600))}_section(C,H,r,L,o=u){let n=this._open===C;return i`<details class="panel" ?open=${n} @toggle=${m=>{m.target.open?this._open=C:this._open===C&&(this._open=null)}}>
      <summary><ha-icon icon=${H}></ha-icon><span>${r}</span>${o}</summary>
      ${n?i`<div class="body">${L()}</div>`:u}
    </details>`}_form(C,H,r,L){return W5({data:C,schema:H,onChange:r,whenData:L,label:o=>o.label||Q1[o.name]||o.name,helper:o=>o.helper,haForm:(o,n,m)=>this._haForm(o,n,m),auto:o=>this._autoText(o)})}_autoText(C){let H={panel_radius:"radius",row_height:"row",gap:"gap"}[C.name];if(!H)return null;let{preview:r,dashboard:L}=Q5(),o=r?.[H],n=L?.[H],m=H==="radius"?" (from the theme's card corner radius)":H==="row"&&this._config.layout==="fullscreen"&&V1(this._config)!=="none"?" (calculated to fit the screen)":"";return o&&n&&o!==n?`${o} in this preview, ${n} on the dashboard${m}`:o||n?`${o||n}${m}`:null}_haForm(C,H,r){return i`<ha-form
      .hass=${this.hass}
      .data=${C}
      .schema=${H}
      .computeLabel=${L=>L.label||Q1[L.name]||L.name}
      .computeHelper=${L=>L.helper}
      @value-changed=${L=>{L.stopPropagation(),r(L.detail.value)}}
    ></ha-form>`}_convertBar(){let C=this._config.collapsed_view||"minimal",r=this._panels.flatMap(o=>[o,...o.type==="stack"?o.panels||[]:[]]).filter(o=>o.collapsed_view&&o.collapsed_view!=="default").length;return i`<div class="convert">
      <button class="btn sm" ?disabled=${!r} @click=${()=>{let o=n=>{if(!n)return n;let{collapsed_view:m,...l}=n;return l};this._flexEds.clear(),this._setPanels(this._panels.map(n=>n.type==="stack"?{...o(n),panels:(n.panels||[]).map(o)}:o(n)))}} title="Clears every panel's own View when collapsed">
        <ha-icon icon="mdi:swap-horizontal"></ha-icon>Convert all now</button>
      <span class="fhelp">${r?`${r===1?"1 panel sets its own view":`${r} panels set their own view`}; Convert all now makes every collapsible panel ${C==="compact"?"Compact":"Minimal"}.`:`Every collapsible panel follows the default (${C==="compact"?"Compact":"Minimal"}).`}</span>
    </div>`}_general(C=O1){let H={...this._config,screen_fit:V1(this._config)},r=U1(H,V7,H1),L=this._config.background||"none";return C.map(([o,n])=>{let m=this._onlyChanged?n.filter(b=>g1(this._config,b,H1)):n;if(!m.length||!m.some(b=>typeof b.when!="function"||b.when(r)))return u;let l=n.some(b=>g1(this._config,b,H1)),A=C===_1&&o==="Background"&&L==="animated"&&this._bgPrev?.open,c=b=>this._form(U1(H,b,H1),b,T=>{let{panels:F,...k}=this._config,P=c2(k,b,T,H1);b.some(S=>S.name==="screen_fit")&&(delete P.fit_height,delete P.fit_strict,delete P.auto_fit),this._config.panels&&(P.panels=this._config.panels),this._emit(P)},r),s=m.filter(b=>!b.sub),x=[...new Set(m.filter(b=>b.sub).map(b=>b.sub))],w=b=>{let T=m.filter(S=>S.sub===b);if(!T.some(S=>typeof S.when!="function"||S.when(r)))return u;let F=`card:${b}`,k=(this._subOpen||(this._subOpen=new Set)).has(F),P=T.some(S=>g1(this._config,S,H1));return i`<details class="sub psub" ?open=${k} @toggle=${S=>{S.target!==S.currentTarget||S.target.open===this._subOpen.has(F)||(S.target.open?this._subOpen.add(F):this._subOpen.delete(F),this.requestUpdate())}}><summary><ha-icon icon=${T[0].subIcon||"mdi:tune"}></ha-icon><span>${b}</span>${P?i`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${k?i`<div class="psub-body">${c(T)}</div>`:u}</details>`};return i`${A?this._bgPreview():u}<div class="agrp"><div class="agrp-t">${o}${l?i`<i class="chg" title="Has changed settings"></i>`:u}</div>${c(s)}${x.map(w)}</div>`})}_bgPreviewButton(){let C=!!this._bgPrev?.open;return i`<button class="bgprev-btn ${C?"on":""}" type="button" aria-pressed=${String(C)}
      title=${C?"Hide the background preview":"Preview the background"} aria-label="Preview the background"
      @click=${H=>{H.preventDefault(),H.stopPropagation(),this._bgPrev={...this._bgPrev||{},open:!C},C||(this._open="background"),this.requestUpdate()}}><ha-icon icon="mdi:magnify"></ha-icon></button>`}_bgPreview(){let C=this._bgPrev||{},H=this.hass?.states?.[this._config.entity]?.state,r=(G1.find(([o])=>o===H)||[,H])[1],L=[{name:"condition",label:"Condition",selector:{select:{options:[{value:"",label:H?`Now \u2014 ${r}`:"Now"},...G1.map(([o,n])=>({value:o,label:n}))]}}},{name:"time",label:"Time of day",selector:{select:{options:[{value:"",label:"Day (night for Clear night)"},{value:"day",label:"Day"},{value:"night",label:"Night"}]}}}];return i`<div class="bgprev">
      <wsfc-bg-preview .hass=${this.hass} .config=${this._config} .condition=${C.condition||""} .time=${C.time||""}></wsfc-bg-preview>
      ${this._form({condition:C.condition||"",time:C.time||""},L,o=>{this._bgPrev={...C,open:!0,condition:o.condition||"",time:o.time||""},this.requestUpdate()})}
    </div>`}_breakStack(C){let H=this._panels,r=Number(C);if(!H[r]||H[r].type!=="stack")return;if(H[r].x==null||H[r].y==null){let k=H.map((S,$)=>$).filter(S=>H[S].display!=="popup"),P=n1(k.map(S=>({key:S,w:G(H[S]),h:L1(W(H[S]))})),{gravity:this._config.layout_gaps!=="keep"});H=H.map((S,$)=>P.has($)?{...S,x:P.get($).x,y:t1(P.get($).y)}:S)}let L=H[r],o=(L.panels||[]).filter(Boolean).map(k=>({...k}));if(!o.length)return;let n=G(L),m=W(L)||o.length*.5,l=L.direction==="vertical",A=k=>Math.max(.25,Math.round(k*4)/4),c=k=>Math.max(0,Math.round(k*4)/4),s=k=>Number(k.grow??1)||1,x=o.reduce((k,P)=>k+s(P),0),w=0,b=0,T=o.map((k,P)=>{let{grow:S,min_width:$,...E}=k;if(l){let M1=P===o.length-1?A(m-b):A(m*s(k)/x),o1={...E,span:n,rows:Math.max(.25,M1),...L.x!=null?{x:L.x,y:c(Number(L.y)+b)}:{}};return b+=M1,o1}let Z=P===o.length-1?n-w:Math.max(1,Math.round(n*s(k)/x)),Y={...E,span:Math.max(1,Z),rows:E.rows??m,...L.x!=null?{x:Number(L.x)+w,y:L.y}:{}};return w+=Z,Y}),F=H.slice();F.splice(r,1,...T),this._openPanel=null,this._setPanels(F)}_stationDevice(){let C=(this._config.metric_sources?.sources||[]).find(H=>!H.disabled&&String(H.ref).startsWith("device:"));return C?C.ref.slice(7):void 0}_stationEditor(){let C=this._station,H=[...C7,"rain_today","battery","battery_voltage","capacitor","signal","signal_quality","rssi","online","hardware_id","aqi","pm2_5","pm10","ozone"].map(L=>{let o=z[L]?.find||z[L]?.aq?E1(L,C,this.hass):t3(C,this.hass,L)||(this.hass.states[C.entity]?.attributes?.[L]!=null?C.entity:null),n=o&&!o.startsWith("weather.")?z1(this.hass,o):null,m=o?.startsWith("weather.")?this.hass.states[o]?.attributes?.[L]:null;return{k:L,e:o,v:n?`${n.value} ${n.unit}`:m!=null?String(m):"",label:H7[L]||z[L]?.label||L.replace(/_/g," "),integ:o?d1(this.hass,o):""}}),r=H.filter(L=>L.e).length;return i`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${L=>{let o={...this._config};L.detail.entity&&(o.entity=L.detail.entity),L.detail.metric_sources?o.metric_sources=L.detail.metric_sources:delete o.metric_sources,this._emit(o)}}></wsfc-sources-editor>
      ${this._general([["Current condition",j1]])}
      ${this._config.condition_source==="station"?i`<p class="hint cond-now"><b>Now:</b> ${p3(this.hass,this._station,this._config)}</p>`:u}
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${r} of ${H.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${H.map(L=>i`<span class="k">${L.label}</span><span class="e ${L.e?"":"none"}" title=${L.e||""}>${L.e||"not found"}</span><span class="i">${L.integ}</span><span class="v">${L.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_flexEditor(C,H,r){let L=`${C}:${H.type}`,o=this._flexEds.get(L);o||(o=document.createElement(w5),o.wsfcMode="sections",o.wsfcType=H.type,o.addEventListener("wsfc-flat-open",s=>{for(let x of[...(this._flatOpen||new Map).keys()])x.startsWith(`${s.detail.type}|`)&&this._flatOpen.set(x,!1);this.requestUpdate()}),o.addEventListener("config-changed",s=>{s.stopPropagation(),o._wsfcOnChange?.(s.detail.config)}),this._flexEds.set(L,o));let n=s=>s.type==="sky_tracker"?k5(s,this._station):b5(y5(s.type,this._station),s.flex||{});o.wsfcPanels=I(H)?.flexPanels||null;let m=this._config.background==="animated"||this._config.background==="image"&&!!(this._config.background_image||this._config.background_image_url),l=[...I(H)?.flexHide||[],...H.type==="hero"&&m?["show_condition_effects"]:[],...H.type==="hero"&&H.auto_scale?["header_temp_size","header_state_size","header_icon_size","header_secondary_size","clock_font_size","clock_date_font_size","chip_text_size","chip_icon_size","global_icon_size","global_text_size"]:[]];JSON.stringify(l)!==JSON.stringify(o.wsfcHide||[])&&(o.wsfcHide=l,o.requestUpdate?.()),o._wsfcOnChange=s=>{let x=a1(H),w=_5(s,n({...H,flex:void 0}));Object.keys(w).length?x.flex=w:delete x.flex,r(x)};let A=n(H),c=JSON.stringify(A);return o._wsfcJson!==c&&(o._wsfcJson=c,o.setConfig(A)),o.hass=this.hass,i`<div class="flexed">${o}</div>`}_guideSpec(){let C=this._config,H=C.layout_screen;if(!H||(C.layout_guide||"line")==="off")return null;let[r,L]=H==="window"?[window.innerWidth,window.innerHeight]:String(H).split(/[x×]/).map(Number);if(!r||!L)return null;let o=C.gap??12,n=C.layout==="fullscreen",m=C.panel_bar!==!1&&!this._panels.some(A=>A.type==="heading"&&A.show_bar),l=56+(n?16:8)+2*o+(m?40+o:0)+(C.title?44+o:0);return{w:r,h:L,chrome:l,gap:o,row:C.row_height||110,fit:n&&V1(C)!=="none",strict:n&&["strict","scale"].includes(V1(C)),mode:C.layout_guide||"line"}}_screenGuide(){let C=this._config,H=[["","Off"],["window",`This browser window (${window.innerWidth}\xD7${window.innerHeight})`],["1920x1080","1920\xD71080 (16:9 desktop)"],["2560x1440","2560\xD71440 (16:9)"],["3440x1440","3440\xD71440 (21:9)"],["1366x768","1366\xD7768 (laptop)"],["1280x800","1280\xD7800 (16:10 tablet)"],["1180x820","1180\xD7820 (iPad landscape)"],["820x1180","820\xD71180 (iPad portrait)"],["1080x1920","1080\xD71920 (portrait panel)"]],r=C.layout_screen||"",L=r&&!H.some(([n])=>n===r),o=n=>{let m={...this._config,...n};for(let l of Object.keys(n))(n[l]==null||n[l]==="")&&delete m[l];this._emit(m)};return i`<div class="guidebar">
      <div class="frow"><label for="lg-s">Screen guide</label>
        <select id="lg-s" class="sel" @change=${n=>o({layout_screen:n.target.value==="custom"?"1600x900":n.target.value||void 0})}>
          ${H.map(([n,m])=>i`<option value=${n} ?selected=${n===r}>${m}</option>`)}
          <option value="custom" ?selected=${L}>Custom size…</option>
        </select><button class="btn sm ghost" title="Set the Screen guide to this device's browser window (open the editor on the tablet and press this)" @click=${()=>o({layout_screen:`${window.innerWidth}x${window.innerHeight}`})}><ha-icon icon="mdi:tablet"></ha-icon>This device</button></div>
      ${L?i`<div class="frow"><label for="lg-c">Width × height</label>
        <input id="lg-c" class="ftext" .value=${r} placeholder="1600x900" @change=${n=>o({layout_screen:/^\d{3,5}\s*[x×]\s*\d{3,5}$/.test(n.target.value.trim())?n.target.value.trim().replace(/\s+/g,"").replace("\xD7","x"):r})} /></div>`:u}
      ${r?i`<div class="frow"><label for="lg-m">Show as</label>
        <select id="lg-m" class="sel" @change=${n=>o({layout_guide:n.target.value==="line"?void 0:n.target.value})}>
          ${[["line","Dotted line at the screen edge"],["frame","Frame \u2014 shade what's off screen"]].map(([n,m])=>i`<option value=${n} ?selected=${(C.layout_guide||"line")===n}>${m}</option>`)}
        </select></div>
        <div class="fhelp">The map is drawn to that screen's scale (window size inside the browser, below the dashboard header).${C.layout==="fullscreen"&&V1(C)!=="none"?" Full screen with fit: rows share the screen height, as on the dashboard.":" Panels below the line need scrolling."}</div>`:u}
    </div>`}_layoutEditor(){let C=this._config,H=this._mapFor==="phone",r=Array.isArray(C.phone_layout)?C.phone_layout:null,L=l=>{let A={...this._config};l&&l.length?A.phone_layout=l:delete A.phone_layout,this._emit(A)},o=this._panels.map((l,A)=>({p:l,i:A})).filter(({p:l})=>l.display!=="popup"),n=()=>{let l=new Map((r||[]).map((A,c)=>[Number(A.i),A]));return o.map(({p:A,i:c})=>({...A,__i:c,span:l.get(c)?.span??12,rows:l.get(c)?.rows??A.rows??0,x:l.get(c)?.x,y:l.get(c)?.y,show:l.has(c)?l.get(c).show!==!1:A.show})).sort((A,c)=>((r||[]).findIndex(s=>Number(s.i)===A.__i)+1||1e3+A.__i)-((r||[]).findIndex(s=>Number(s.i)===c.__i)+1||1e3+c.__i))},m=l=>l.filter(A=>A.__i!=null).map(A=>({i:A.__i,span:G(A),...W(A)?{rows:W(A)}:{},...A.x!=null&&A.y!=null?{x:A.x,y:A.y}:{},...A.show===!1?{show:!1}:{}}));return i`
      <div class="frow"><label for="lm-for">Layout for</label>
        <select id="lm-for" class="sel" @change=${l=>{this._mapFor=l.target.value,this.requestUpdate()}}>
          <option value="main" ?selected=${!H}>Main layout (tablets and larger)</option>
          <option value="phone" ?selected=${H}>Phone layout (narrow screens)${r?"":" \u2014 not set"}</option>
        </select></div>
      ${H?i`<p class="hint">On screens narrower than ${C.narrow_width||720} px the card uses this layout: its own order, widths and heights for the same panels. Without one, panels stack full width automatically.</p>
            <div class="presets">${r?i`<button class="btn sm ghost" @click=${()=>L(null)}><ha-icon icon="mdi:delete-outline"></ha-icon>Remove the phone layout</button>`:i`<button class="btn sm" @click=${()=>L(o.map(({p:l,i:A})=>({i:A,span:12,...l.rows?{rows:l.rows}:{}})))}><ha-icon icon="mdi:cellphone"></ha-icon>Create a phone layout</button>`}</div>
            ${r?i`<wsfc-layout-map .panels=${n()} .gravity=${this._config.layout_gaps!=="keep"} @layout-changed=${l=>L(m(l.detail.panels))}></wsfc-layout-map>`:u}`:i`<p class="hint"><b>Drag</b> a panel to any place on the grid: panels in its way move down, nothing else moves. Drag its <b>right or bottom edge</b> (or the corner) to resize, in quarter rows. Keyboard: arrows move one cell, Shift+arrows resize. This is the main layout${r?"; phones use the Phone layout":" \u2014 phones stack the panels automatically (or set a Phone layout above)"}. Dashed = hidden on load.</p>
            ${this._screenGuide()}
            ${this._guideSpec()?i`<wsfc-layout-probe .hass=${this.hass} .config=${this._config} .guide=${this._guideSpec()}
              @probe-measured=${l=>{this._measured=l.detail,this.requestUpdate()}}></wsfc-layout-probe>`:u}
            <wsfc-layout-map .panels=${this._panels} .gravity=${this._config.layout_gaps!=="keep"} .guide=${this._guideSpec()} .measured=${this._guideSpec()?this._measured:null} @layout-changed=${l=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(l.detail.panels)}}></wsfc-layout-map>`}
    `}_panelList(){return i`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels together (side by side, or one above the other filling in for hidden ones), add a <b>Stack</b> panel, then use <b>Move into stack</b> under it.</p>
      ${this._list(this._panels,(C,H)=>this._setPanels(C,H),"")}
    `}_buttonsEditor(){let C=this._config,H=this._panels,r=H.findIndex(c=>c.type==="heading"),L=r>=0&&!!H[r].show_bar,o=C.panel_bar===!1?"hidden":L?"heading":"top",n=c=>{let s=H.map((x,w)=>w===r?q({...x,show_bar:c==="heading"?!0:void 0}):x);c==="heading"&&r<0&&s.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(s,{panel_bar:c==="hidden"?!1:void 0})},m=(c,s)=>{let x=b=>q({...b,in_bar:s===R1({...b,in_bar:void 0})?void 0:s}),w=H.map((b,T)=>{let F=c.includes(`${T}`)?x(b):b;if(F.type==="stack"&&Array.isArray(F.panels)){let k=F.panels.map((P,S)=>P&&c.includes(`${T}.${S}`)?x(P):P);k.some((P,S)=>P!==F.panels[S])&&(F={...F,panels:k})}return F});this._setPanels(w)},l=[];H.forEach((c,s)=>{l.push([c,`${s}`,!1]),c.type==="stack"&&(c.panels||[]).forEach((x,w)=>x&&l.push([x,`${s}.${w}`,!0]))});let A=l.map(([,c])=>c);return i`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${c=>n(c.target.value)}>
          <option value="top" ?selected=${o==="top"}>Above the panels</option>
          <option value="heading" ?selected=${o==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${o==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      ${this._form(U1(C,w1,H1),w1,c=>{let{panels:s,...x}=this._config,w=c2(x,w1,c,H1);this._config.panels&&(w.panels=this._config.panels),this._emit(w)})}
      <div class="btnbar">
        <button class="btn sm" @click=${()=>m(A,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>m(A,!1)}>None</button>
      </div>
      <div class="checks">
        ${l.map(([c,s,x])=>i`<label class="chk ${x?"nested":""}">
          <input type="checkbox" .checked=${R1(c)} @change=${w=>m([s],w.target.checked)} />
          <ha-icon icon=${c.icon||c.type==="metric"&&z[c.metric]?.icon||I(c).icon}></ha-icon>
          <span>${v2(c)}</span>${c.display==="popup"?i`<span class="tag">pop-up</span>`:c.show===!1?i`<span class="tag">hidden on load</span>`:u}
        </label>`)}
      </div>
    `}_list(C,H,r){let L=!!r,o=Object.entries(M2).filter(([l])=>!(L&&l==="hero")).sort(([l,A],[c,s])=>l==="hero"?-1:c==="hero"?1:A.label.localeCompare(s.label)),n=r||"top",m=(this._addTypes||(this._addTypes={}))[n]||(L?"metric":this._addType);return i`
      <div class="rows">${C.map((l,A)=>this._panelRow(l,A,C,H,r?`${r}.${A}`:`${A}`,L))}</div>
      <div class="add">
        <select class="sel" @change=${l=>{this._addTypes[n]=l.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${o.map(([l,A])=>i`<option value=${l} ?selected=${l===m}>${A.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let l={type:m};l.type==="metric"&&(l.metric="temperature"),l.type==="stack"&&(l.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),H([...C,l]),this._openPanel=r?`${r}.${C.length}`:`${C.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${L?"Add new to stack":"Add panel"}</button>
      </div>
    `}_panelRow(C,H,r,L,o,n){let m=I(C),l=this._openPanel===o||C.type!=="stack"&&String(this._openPanel||"").startsWith(`${o}.`),A=C.show===!1,c=()=>this._flexEds.clear(),s=T=>{let F=r.slice(),k=H+T;k<0||k>=F.length||([F[H],F[k]]=[F[k],F[H]],c(),this._openPanel=null,L(F))},x=(T,F)=>{let k=r.slice();k[H]=T,L(k,F)},w=n?`${C.grow!=null?`grow ${C.grow}`:""}${C.rows?` \xB7 ${C.rows} rows`:""}`:`${G(C)}/12${W(C)?` \xD7 ${W(C)}`:""}${C.display==="popup"?" \xB7 pop-up":""}`,b=C.type==="stack"?`${C.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(C.panels||[]).length} panels`:m.label;return i`<div class="row ${l?"open":""} ${A?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${C.icon||C.type==="metric"&&z[C.metric]?.icon||(C.type==="stack"&&C.direction==="vertical"?"mdi:view-agenda-outline":m.icon)}></ha-icon>
        <div class="txt"><div class="n">${v2(C)}</div><div class="s">${b}${w?` \xB7 ${w}`:""}</div></div>
        ${n?i`<button class="ib" title="Move up" ?disabled=${H===0} @click=${()=>s(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${H===r.length-1} @click=${()=>s(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:u}
        ${n?u:i`<button class="ib" title=${A?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>x(q({...C,show:A?void 0:!1}))}>
              <ha-icon icon=${A?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        ${n&&/^\d+\.\d+$/.test(o)?i`<button class="ib" title="Move out of the stack (back into the grid, after the stack)" @click=${()=>{c(),this._openPanel=null,this._setPanels(Z3(this._panels,Number(o.split(".")[0]),H))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon></button>`:u}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===o?null:o}><ha-icon icon=${l?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let T=r.slice();T.splice(H+1,0,a1(C)),c(),L(T)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let T=r.slice();T.splice(H,1),c(),this._openPanel=null,L(T)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${l?this._panelBody(C,o,x,n):u}
      ${C.type==="stack"?this._stackKids(C,H,o,x,n):u}
    </div>`}_stackKids(C,H,r,L,o){let m=!o?this._panels.map((A,c)=>[A,c]).filter(([A,c])=>c!==H&&A.type!=="hero"&&A.type!=="stack"):[],l=(this._moveIn||(this._moveIn={}))[r]??m[0]?.[1]??"";return i`<div class="kids">
      ${this._list(C.panels||[],(A,c)=>L({...C,panels:A},c),r)}
      ${m.length?i`<div class="add">
            <select class="sel" aria-label="Panel to move into this stack" @change=${A=>{this._moveIn[r]=Number(A.target.value),this.requestUpdate()}}>
              ${m.map(([A,c])=>i`<option value=${c} ?selected=${c===l}>${v2(A)}</option>`)}
            </select>
            <button class="btn" @click=${()=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(x3(this._panels,H,Number(l)))}}><ha-icon icon="mdi:view-split-horizontal"></ha-icon>Move into stack</button>
          </div>`:u}
    </div>`}_flat(C,H,r,L=!1){let o=`${C.type}|${H}`;this._flatOpen||(this._flatOpen=new Map);let n=!!this._flatOpen.get(o);return i`<details class="flat" ?open=${n} @toggle=${m=>{if(!(m.target!==m.currentTarget||m.target.open===!!this._flatOpen.get(o))){if(m.target.open){for(let l of this._flatOpen.keys())l.startsWith(`${C.type}|`)&&this._flatOpen.set(l,!1);for(let[l,A]of this._flexEds||[])l.endsWith(`:${C.type}`)&&A.renderRoot?.querySelectorAll?.("details.wsfc-panel[open]").forEach(c=>c.open=!1)}this._flatOpen.set(o,m.target.open),this.requestUpdate()}}}>
      <summary>${H}${L?i`<i class="chg" title="Has changed settings"></i>`:u}</summary>
      <div class="flat-body">${r}</div>
    </details>`}_sections(C,H,r,L,o,n=!0,m=null){let l=[];for(let s of H){let x=s.sub?`sub:${s.sub}`:s.section?`sec:${s.section}`:`sec:${o}`,w=l.find(b=>b.k===x);w||l.push(w={k:x,f:[]}),w.f.push(s)}let A=s=>this._form(U1(C,s,r),s,x=>L({...c2(C,s,x,r),type:C.type}),C),c=this._onlyChanged;return l.map(({k:s,f:x})=>{let w=c?x.filter(F=>g1(C,F,r)):x;if(!w.length)return u;let b=x.some(F=>g1(C,F,r)),T=s.slice(4);if(s.startsWith("sub:")){let F=`${C.type}:${T}`,k=(this._subOpen||(this._subOpen=new Set)).has(F);return i`<details class="sub psub" ?open=${k} @toggle=${P=>{if(!(P.target!==P.currentTarget||P.target.open===this._subOpen.has(F))){if(P.target.open){for(let S of[...this._subOpen])S.startsWith(`${C.type}:`)&&this._subOpen.delete(S);this._subOpen.add(F)}else this._subOpen.delete(F);this.requestUpdate()}}}>
          <summary><ha-icon icon=${w[0]?.subIcon||"mdi:weather-sunset"}></ha-icon><span>${T}</span>${b?i`<i class="chg" title="Has changed settings"></i>`:u}</summary>
          ${k?i`<div class="psub-body">${A(w)}</div>`:u}
        </details>`}return n?this._flat(C,T,A(w),b):i`<div class="grp">${T}${b?i`<i class="chg" title="Has changed settings"></i>`:u}</div>${A(w)}`})}_panelBody(C,H,r,L){let o=I(C),n=(S,$)=>(S?.overflow==="scroll"&&!L&&!(Number(S.rows??o?.rows??0)>=1)&&(S={...S,rows:1}),r(S,$)),m=["content_width","content_height",...["daily","hourly","forecast","sky_tracker"].includes(C.type)?["text_scale","icon_scale","chart_scale","bar_scale","arc_scale"]:[]],l=(o.schema||[]).filter(S=>m.includes(S.name)).map(S=>({...S,section:"Size and Scaling"})),A=l.length?{...o,schema:o.schema.filter(S=>!m.includes(S.name))}:o,c=L?{show_title:o2.has(C.type)?!!C.title:!0}:t7(C),s=L?$1:B1;C.type==="hero"&&(s=s.filter(S=>!["icon","display","in_bar"].includes(S.name))),J5(C.type)||(s=s.filter(S=>S.section!=="Collapse"));let x=this._config,w=x.layout==="fullscreen"&&["strict","scale"].includes(V1(x)),b={collapsed_view:()=>x.collapsed_view==="compact"?"Compact":"Minimal",collapsed_open:()=>({inplace:"In place",overlay:"Over the other panels",popup:"As a pop-up"})[x.collapsed_open]||(x.layout==="fullscreen"||V1(x)==="scale"?"Automatic: over the other panels":"Automatic: in place"),collapse_title_tap:()=>x.collapse_title_tap===!1?"Off":"On",show_collapse_hint:()=>x.show_collapse_hint?"Show":"Hide",collapsed_info:()=>x.collapsed_info==="off"?"None":"The panel's summary",overflow:()=>w||x.panel_overflow==="scroll"?"Scroll":"Grow"};s=s.map(S=>{let $=S.selector?.select?.options;return!b[S.name]||!$?.some(E=>E.value==="default")?S:{...S,selector:{select:{...S.selector.select,options:$.map(E=>E.value==="default"?{...E,label:`Card default \u2014 ${b[S.name]()}`}:E)}}}}),e3.has(C.type)||(s=s.filter(S=>!["collapsed_view","compact_expand","compact_title","compact"].includes(S.name))),h5.has(C.type)&&(s=s.filter(S=>!["show_title","title","show_icon","icon"].includes(S.name)||C.type!=="clock"&&S.name==="title"));let T=["graph","temp_humidity","uv_solar","statistics"].includes(C.type),F=["type","span","rows","display","in_bar","tile_background","tile_shadow","tile_border","tile_glow","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...C.type==="metric"?["metric"]:[],...C.type==="statistics"?["preset"]:[],...C.type==="stack"?["panels","direction"]:[]],k=Object.keys(C).some(S=>!F.includes(S)),P=()=>n(Object.fromEntries(Object.entries(C).filter(([S])=>F.includes(S))));return i`<div class="pbody">
      <div class="resetbar">
        ${C.type==="stack"&&!L&&(C.panels||[]).length?i`<button class="btn sm ghost" title="Put this stack's panels straight on the grid, in the stack's place, and remove the stack"
          @click=${()=>this._breakStack(H)}><ha-icon icon="mdi:arrow-split-horizontal"></ha-icon>Break apart</button>`:u}
        <button class="btn sm ghost" ?disabled=${!k} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),P()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${c3[C.type]&&!L?i`<div class="presets"><span class="fhelp">Presets</span>${c3[C.type].map(([S,$])=>i`<button class="btn sm ghost" @click=${()=>{let E={...C};for(let[Z,Y]of Object.entries($))Y===null?delete E[Z]:E[Z]=Y;this._flexEds.clear(),n(E)}}>${S}</button>`)}</div>`:u}
      ${T?i`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${C} .station=${this._station} @panel-changed=${S=>n(S.detail.panel)}></wsfc-series-editor>`:u}
      ${this._sections(C,l.length?(()=>{let S=s.findIndex(E=>E.name==="content_scale"),$=s.slice();return $.splice(S<0?$.length:S+1,0,...l),$})():s,c,n,"Size and Scaling")}
      ${A.groups?this._flat(C,`${A.label} options`,A.groups.map(([S,$,E],Z)=>this._sections(C,Z===0?$:$.map(Y=>({...Y,sub:S,subIcon:E})),{},n,S,!1))):A.schema.length?this._sections(C,A.schema,{},n,`${A.label} options`,!0,`${A.label} options`):u}
      ${A.flex?i`${C.type==="sky_tracker"?i`<div class="grp">Arc & sky details</div>`:u}
            ${C.type==="sky_tracker"?i`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:u}
            ${this._flexEditor(H,C,n)}`:u}
    </div>`}};R(b1,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),R(b1,"styles",[N5,D`
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
  `]);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",b1);globalThis.__wsfcEditorHelpers={stackWithNext:r7,unstack:Z3,moveIntoStack:x3};globalThis.__wsfcSchemas={STATION_FIELDS:j1,BACKGROUND_GROUPS:_1,APPEARANCE_GROUPS:O1,LAYOUT_GROUPS:q1,PANEL_GROUPS:K1,GENERAL_DEFAULTS:H1,REMEMBER:w1,LABELS:Q1,PANEL_TYPES:M2,COMMON_SCHEMA:B1,STACK_CHILD_SCHEMA:$1};export{x3 as moveIntoStack,r7 as stackWithNext,Z3 as unstack};
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
